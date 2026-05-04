# UniversalThingsForMyAgents 🧠

> **Universal skills, knowledge base, and tools for AI coding agents.**
> 145+ curated skills, deep-dive knowledge articles, and reusable agent configurations — version-controlled and agent-ready.

[![Skills](https://img.shields.io/badge/skills-145-blue)]()
[![Knowledge](https://img.shields.io/badge/articles-10-orange)]()
[![Python](https://img.shields.io/badge/Python-3.11+-blue?logo=python)](https://python.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

## Why This Exists

Every time you configure a new AI agent, you rewrite the same things: code review guidelines, testing patterns, architecture rules, infrastructure templates. **This repo is the antidote** — a curated, battle-tested knowledge base that any AI coding agent (Claude Code, Codex, Cursor, Copilot) can consume directly.

Stop copy-pasting prompts. Start versioning your agent's brain.

## What's Inside

```
UniversalThingsForMyAgents/
├── skills/          # 145+ agent-ready skills
│   ├── 01*          # Python, Spring Boot, project setup
│   ├── 02*          # Docker, databases, ORMs, infrastructure
│   ├── 03*          # Pydantic, web scraping, data modeling
│   ├── 04*          # Embeddings, vector DBs, Qdrant, matching engines
│   ├── 05*          # React Native, frontend mobile
│   └── ...          # TDD, testing, CI/CD, architecture, MCP, and more
│
└── knowledge/       # 10 deep-dive articles
    ├── LLM Memory architectures (graph DBs + vectors)
    ├── Multi-agent systems design patterns
    ├── Advanced RAG techniques
    ├── Skills token optimization
    ├── Agentic AI frontier (2026)
    └── ...and more
```

## Quick Start

### For Claude Code

```json
{
  "skills": {
    "source": "/path/to/UniversalThingsForMyAgents/skills"
  }
}
```

### For Codex / OpenAI Codex CLI

```bash
# Point Codex to the skills directory
codex --skills-dir /path/to/UniversalThingsForMyAgents/skills
```

### For Any MCP-Compatible Agent

Add the skills directory to your agent's configuration. Each skill is a self-contained Markdown file with instructions the agent can follow.

## Example Skills

| Skill | What It Teaches |
|-------|----------------|
| `01_python_project_setup` | Python project scaffolding, uv, structure |
| `04_embeddings_vector_representation` | Embeddings, vector search, Qdrant setup |
| `04_matching_engine` | Job-candidate matching algorithms |
| `05_qdrant_operations` | Qdrant CRUD, collections, hybrid search |
| `docker_infrastructure` | Docker Compose, containers, networking |
| `tdd_testing` | Test-Driven Development patterns |

## Knowledge Base Highlights

- **[LLM Memory](./knowledge/01_graphs_llm_memory.md)** — Graph databases + vector DBs for persistent agent memory
- **[Multi-Agent Systems](./knowledge/03_multi_agent_systems.md)** — Orchestration patterns, MCP protocol
- **[Advanced RAG](./knowledge/04_advanced_rag.md)** — Retrieval-Augmented Generation at scale
- **[AI Agents Vanguard](./knowledge/06_ai_agents_vanguard.md)** — Frontier techniques and trends (2026)

## Philosophy

This repo embodies **Context Engineering** — instead of generic AI prompts, skills encode real patterns extracted from production experience. Each skill is:

1. **Actionable** — the agent can execute it immediately
2. **Self-contained** — no external dependencies to understand
3. **Versioned** — you can track what changed and why

## Contributing

Found a better pattern? Fixed a bug in a skill? PRs welcome.

```bash
# Add a new skill
cp template.md skills/XX_your_skill_name.md

# Update knowledge
edit knowledge/XX_topic.md
```

Built and maintained by [Renzo Tognella](https://github.com/Renzo-Tognella).
