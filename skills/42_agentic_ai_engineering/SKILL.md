---
name: agentic_ai_engineering
description: Use when designing, building, or refactoring production-grade agentic AI systems. Covers architecture patterns, cognitive loops, memory design, tool use, safety, and deployment best practices for autonomous agents.
---

# Agentic AI Engineering

## Overview

Engineering production-grade agentic AI systems requires going beyond simple LLM API calls. This skill covers the architectural patterns, cognitive loops, memory systems, safety mechanisms, and deployment practices needed to build agents that are reliable, observable, and scalable.

**Core principle:** Agentic systems are not "LLM + loop" — they are distributed systems with state, memory, tools, and safety constraints.

## When to Use

- Designing the architecture for a new agentic system
- Choosing between ReAct, Tree of Thoughts, Reflexion, or orchestrator-workers
- Implementing memory (short-term, long-term, episodic, procedural)
- Adding tool use / MCP integration to an agent
- Building safety guardrails for autonomous agents
- Deploying agents to production with observability
- Deciding between single-agent vs multi-agent architecture

## When NOT to Use

- Simple prompt engineering tasks (use prompt engineering skill)
- One-off API calls without state or memory
- Tasks fully solvable by deterministic code

---

## 1. Cognitive Architecture Patterns

### The Agent Loop

```
OBSERVE → RETRIEVE → REASON → ACT → REFLECT → STORE
```

| Phase | What happens | TheSearch mapping |
|-------|-------------|-------------------|
| **Observe** | Recebe tarefa, entende contexto | `pre_task_context()` |
| **Retrieve** | Busca memórias relevantes | `hybrid_search()` |
| **Reason** | Decide estratégia e próximos passos | Strategy selection |
| **Act** | Executa ações (tools, code, API calls) | MCP tools |
| **Reflect** | Avalia qualidade do resultado | `post_task_summary()` |
| **Store** | Persiste novas memórias | `extract → admit → persist` |

### Strategy Selection

```python
def select_strategy(task: Task) -> str:
    if task.is_multi_step and len(task.subtasks) > 3:
        return "orchestrator_workers"
    if task.requires_exploration and task.branching_depth > 2:
        return "tree_of_thoughts"
    if task.previous_attempts > 0:
        return "reflexion"
    if task.is_lookup_or_single_step:
        return "react"
    return "react"
```

| Strategy | When | Cost | Latency |
|----------|------|------|---------|
| **ReAct** | Simple lookup, single-step | Low | Low |
| **Tree of Thoughts** | Complex reasoning, branching | High | High |
| **Reflexion** | Task failed, self-correction | Medium | Medium |
| **Orchestrator-Workers** | Multi-step independent subtasks | High | Medium (parallel) |
| **Evaluator-Optimizer** | Quality-critical output | Medium | Medium |

---

## 2. Memory Architecture

### Types of Memory

| Type | Scope | Implementation | Example |
|------|-------|----------------|---------|
| **Working** | Current task | In-context (prompt) | "The user asked about API versioning" |
| **Episodic** | Past experiences | Vector DB + metadata | "When I refactored the auth module, X broke" |
| **Semantic** | Facts & knowledge | Knowledge Graph | "API versioning uses URL path /v1/" |
| **Procedural** | How to do things | Skill library / code | "Steps to migrate a database" |
| **Prospective** | Future intentions | Scheduled tasks | "Remind me to check PR #234 tomorrow" |

### Memory Design Checklist

- [ ] **Retrieval quality**: Can the agent find what it needs when it needs it?
- [ ] **Storage efficiency**: Are you deduplicating before storing?
- [ ] **Decay strategy**: Do old memories fade appropriately?
- [ ] **Context limits**: Does retrieval respect the context window?
- [ ] **Consistency**: Are vector and graph stores synchronized?

### TheSearch Memory Pattern

```
User Input → Sanitize → Extract → Admission Gates → Deduplicate → Persist
                    ↓                              ↓
            Neo4j (Graph)              Qdrant (Vector)
                    ↓                              ↓
            Semantic Links               Embedding Search
                    ↓______________________________↓
                                 ↓
                        Hybrid Search (RRF)
```

---

## 3. Tool Use & MCP Integration

### Tool Design Principles

1. **Idempotency**: Same input → same output, no side effects on repeat
2. **Observability**: Every tool call is logged with input, output, latency
3. **Graceful degradation**: If tool fails, agent can continue with reduced capability
4. **Validation**: Input schemas enforced before execution
5. **Timeouts**: Every tool has a max execution time

### MCP Server Best Practices

```python
# Thin controller — delegate to services
@app.tool(name="memory.query")
async def memory_query(project: str, query: str) -> dict:
    """Query memories. Falls back to graph-only if Qdrant unavailable."""
    try:
        results = await container.search.search(query_text=query, project=project)
        return {"status": "ok", "results": results}
    except QdrantUnavailable:
        results = await container.neo4j.query_by_project(project)
        return {"status": "degraded", "results": results, "warning": "vector store offline"}
```

### Tool Registry Pattern

```python
class ToolRegistry:
    def __init__(self):
        self._tools: dict[str, Callable] = {}
        self._schemas: dict[str, dict] = {}
    
    def register(self, name: str, fn: Callable, schema: dict):
        self._tools[name] = fn
        self._schemas[name] = schema
    
    async def execute(self, name: str, **params) -> Any:
        # Validate input against schema
        # Execute with timeout
        # Log telemetry
        # Return structured output
```

---

## 4. Safety & Guardrails

### Defense in Depth

| Layer | Mechanism | Responsibility |
|-------|-----------|----------------|
| **Input** | Sanitization | Remove PII, credentials, injection attempts |
| **Policy** | Rate limiting | Prevent abuse (100 req/min, 30 writes/min) |
| **Execution** | Sandboxing | Tool runs in restricted environment |
| **Output** | Output filtering | Mask sensitive data before returning |
| **Audit** | Logging & telemetry | Full trace of every decision |

### Agent Safety Checklist

- [ ] Input sanitization runs BEFORE any LLM call
- [ ] Output sanitization runs BEFORE returning to user
- [ ] Rate limits on all tools
- [ ] Circuit breaker for external APIs (failure_threshold=3)
- [ ] Whitelist validation for graph relationships
- [ ] Trajectory monitoring for multi-step actions
- [ ] Human-in-the-loop for irreversible operations
- [ ] Audit log with full traceability

### Constitutional Classifiers (Anthropic)

```python
# Filter jailbreaks while maintaining utility
class ConstitutionalClassifier:
    def __init__(self, constitution: list[str]):
        self.constitution = constitution
    
    def classify(self, input_text: str) -> tuple[bool, str]:
        # Check against constitutional principles
        # Return (safe, reasoning)
```

---

## 5. Observability & Debugging

### Metrics to Track

| Metric | Why | Target |
|--------|-----|--------|
| Task completion rate | Overall health | > 90% |
| LLM call latency | Performance | P95 < 2s |
| Tool failure rate | Reliability | < 1% |
| Memory retrieval precision | Quality | > 85% |
| Cost per task | Economics | Track trend |
| Human approval rate | Trust | > 80% |

### Tracing

```python
from opentelemetry import trace

tracer = trace.get_tracer("agent")

async def agent_loop(task: Task):
    with tracer.start_as_current_span("agent_loop") as span:
        span.set_attribute("task.id", task.id)
        span.set_attribute("task.type", task.type)
        
        context = await retrieve_context(task)
        span.set_attribute("context.memories_count", len(context))
        
        result = await execute(task, context)
        span.set_attribute("result.success", result.success)
```

---

## 6. Deployment Patterns

### Single-Agent Deployment

```
[Client] → [FastAPI] → [Agent Loop] → [LLM API]
                ↓
           [Memory Store]
```

**When**: Simple tasks, low concurrency, predictable latency.

### Multi-Agent Deployment

```
[Client] → [API Gateway] → [Orchestrator] → [Worker Pool]
                                   ↓
                              [EventBus]
                                   ↓
                    [Memory] ← [State Store] → [Telemetry]
```

**When**: Complex tasks, high concurrency, need for specialization.

### Long-Running Agents

```
[Scheduler] → [Agent Process] → [Checkpoint]
                     ↓
               [State Machine]
                     ↓
               [Resume on failure]
```

**When**: Tasks that take hours/days, need fault tolerance.

---

## 7. Anti-Patterns

| Anti-Pattern | Why it's bad | Fix |
|-------------|-------------|-----|
| **God agent** | One agent does everything | Split into specialized agents |
| **No memory** | Agent forgets everything between calls | Implement persistence |
| **Infinite loops** | Agent keeps calling itself | Max iterations + detection |
| **Silent failures** | Errors swallowed, agent continues | Fail loud, log everything |
| **No timeouts** | Tool hangs forever | Timeout every external call |
| **Prompt injection** | Untrusted input reaches LLM | Sanitize before LLM |
| **No observability** | Can't debug production | Tracing + metrics + logs |

---

## 8. References

- [Building Effective Agents — Anthropic](https://www.anthropic.com/research/building-effective-agents)
- [Trustworthy Agents in Practice — Anthropic](https://www.anthropic.com/research/trustworthy-agents)
- [ReAct: Synergizing Reasoning and Acting](https://arxiv.org/abs/2210.03629)
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601)
- [Reflexion](https://arxiv.org/abs/2303.11366)
- [Generative Agents](https://arxiv.org/abs/2304.03442)
- [Voyager](https://arxiv.org/abs/2305.16291)
- [ZenBrain — 7-Layer Memory](arXiv 2604)
- [AgentWard — Security](arXiv 2604)
- knowledge/12_agentic_ai_frontier_2026.md
