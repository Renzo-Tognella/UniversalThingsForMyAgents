# Agentic AI Frontier — 2026

> Estado da arte em Engenharia de IA e Sistemas Agenticos. Compilado em Abril 2026 a partir de arXiv, GitHub trending, blogs de pesquisa e documentação oficial.

---

## 1. Agentic AI Frameworks & Tools (2025-2026)

### Frameworks Emergentes

| Framework | Stars | Descrição | Lang |
|-----------|-------|-----------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 122k | "The agent that grows with you" — agente auto-evolutivo com memória procedural | Python |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | 22k | "Agent-Native Personalized Learning Assistant" — arquitetura nativamente agentica | Python |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | 16.3k | Framework de agentes no estilo Pydantic — type-safe, structured outputs | Python |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | 20.8k | Framework oficial OpenAI para multi-agent workflows | Python |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | — | Stateful multi-actor applications com controle de baixo nível | Python |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | — | Orquestração de agents com roles autônomos | Python |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 67k | Multi-agent framework como "AI Software Company" | Python |
| [microsoft/autogen](https://github.com/microsoft/autogen) | 57k | Programming framework for agentic AI (Microsoft) | Python |
| [livekit/agents](https://github.com/livekit/agents) | 10k | Realtime voice AI agents | Python |
| [TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework) | 10.4k | Conversational voice AI agents | Python |
| [alibaba/spring-ai-alibaba](https://github.com/alibaba/spring-ai-alibaba) | 9.2k | Agentic AI Framework for Java Developers | Java |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 24.9k | Phone agent model and framework | Python |

### Tools de Agent Coding

| Tool | Descrição |
|------|-----------|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Agentic coding tool da Anthropic — terminal-native |
| [Codex CLI](https://github.com/openai/codex) | Codex CLI da OpenAI para coding agents |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | 17k stars — Claude Code gratuito no terminal/VSCode |
| [Aider](https://github.com/paul-gauthier/aider) | AI pair programming no terminal |
| [Continue](https://github.com/continuedev/continue) | Open-source copilot para IDEs |

### Industry Launches 2025-2026

- **OpenAI GPT-5.2 / o3 / o4-mini** — Modelos com full tool access para agentic workflows
- **Anthropic Project Deal** (Abr 2026) — Marketplace onde Claude negocia, compra e vende autonomamente
- **Anthropic Long-running Claude** (Mar 2026) — Agentes autônomos de longa duração para computação científica
- **Anthropic Automated Alignment Researchers** (Abr 2026) — LLMs escaland oversight escalável
- **Google SIMA 2** — Agent que joga, raciocina e aprende em mundos 3D virtuais
- **Google Gemini Robotics** — Agentes robóticos de propósito geral
- **Google Genie 3** — World model gerando ambientes interativos
- **LangSmith Fleet** — Enterprise agents para empresas
- **LangChain Deep Agents** — Framework para agentes autônomos de longa execução
- **AWS Strands Agents SDK** — SDK oficial AWS para construir agentes AI

---

## 2. Memory Architectures & Cognitive Systems

### Papers & Research

- **ZenBrain: A Neuroscience-Inspired 7-Layer Memory Architecture for Autonomous AI Systems** (arXiv 2604.xxxx) — Arquitetura de memória em 7 camadas inspirada em neurociência
- **GraphPlanner: Graph Memory-Augmented Agentic Routing for Multi-Agent LLMs** (arXiv 2604.xxxx) — Roteamento agentico com memória em grafo
- **MEMCoder: Multi-dimensional Evolving Memory for Private-Library-Oriented Code Generation** (arXiv 2604.xxxx) — Memória multidimensional evolutiva
- **From Skill Text to Skill Structure: The Scheduling-Structural-Logical Representation for Agent Skills** (arXiv 2604.xxxx) — Representação estruturada de skills para agentes
- **Skill Retrieval Augmentation for Agentic AI** (arXiv 2604.xxxx) — RAG aplicado a recuperação de skills

### Arquiteturas de Memória

| Arquitetura | Característica | Referência |
|-------------|---------------|------------|
| **MemGPT** | Memória hierárquica com paginação virtual | arXiv 2310.08560 |
| **Letta** (ex-MemGPT) | Evolução do MemGPT com agentes persistentes | letta.com |
| **Generative Agents** | Memory stream + reflection + retrieval | arXiv 2304.03442 |
| **Voyager** | Skill library + curriculum automático | arXiv 2305.16291 |
| **ZenBrain** | 7-layer neuroscience-inspired | arXiv 2026 |
| **GraphPlanner** | Graph memory para routing multi-agent | arXiv 2026 |
| **GWA** (Global Workspace Agents) | Cognitive architecture baseada em Global Workspace Theory | arXiv 2604.08206 |
| **DACS** | Dynamic Attentional Context Scoping para multi-agent | arXiv 2604.07911 |

### Técnicas de Compressão & Otimização de Contexto

- **LLMLingua** — Compressão de prompts via LLM pequeno
- **Prompt Caching** (OpenAI/Anthropic) — Prefixo estático para 90% savings
- **Matryoshka Embeddings** — Busca multi-estágio (64d → 256d → 512d)
- **Context Compaction** — Compactação semântica de contexto em agent loops

---

## 3. MCP Ecosystem & Infrastructure

### Model Context Protocol

- **Especificação**: [modelcontextprotocol.io](https://modelcontextprotocol.io/)
- **FastMCP**: Framework Python para construir servidores MCP rapidamente
- **Clients suportados**: Claude Desktop, Cursor, Windsurf, Cline, VS Code Copilot

### Servidores MCP Populares

| Servidor | Função |
|----------|---------|
| `filesystem` | Acesso a arquivos locais |
| `github` | Integração com GitHub API |
| `postgres` | Query em bancos PostgreSQL |
| `slack` | Integração com Slack |
| `puppeteer` | Browser automation |
| `memory` | Persistência de memória (TheSearch-style) |

### Registries & Marketplaces

- [mcp.so](https://mcp.so) — Registry de MCP servers
- [glama.ai](https://glama.ai) — Marketplace de MCP servers
- [smithery.ai](https://smithery.ai) — Outro registry

### Segurança em MCP

- **AgentWard** (arXiv 2604.xxxx) — Lifecycle Security Architecture for Autonomous AI Agents
- Sandboxing de servidores MCP
- Permission scopes por tool
- Input/output sanitization obrigatório

---

## 4. Advanced RAG Techniques (2026)

### Técnicas Emergentes

| Técnica | Descrição | Paper |
|---------|-----------|-------|
| **XGRAG** | Graph-Native Framework for Explaining KG-based RAG | arXiv 2604 |
| **MEG-RAG** | Multi-modal Evidence Grounding for Evidence Selection | arXiv 2604 |
| **S2G-RAG** | Structured Sufficiency and Gap Judging para QA iterativo | arXiv 2604 |
| **Prism-Reranker** | Jointly producing contributions and evidence for agentic retrieval | arXiv 2604 |
| **Chunk Filtering** | Reduzindo redundância em RAG via filtragem de chunks | arXiv 2604 |
| **HyDE** | Hypothetical Document Embeddings para queries vagas | HyDE paper |
| **SPLADE** | Sparse embeddings para matching de termos técnicos | SPLADE |

### Agentic RAG

- RAG não é mais passivo — agentes ativamente decidem quando buscar, o que buscar, e como integrar
- **Self-RAG** — Agent decide se precisa retrieval
- **CRAG** — Corrective RAG com feedback loops
- **Agentic clinical reasoning** — RAG aplicado a records médicos longitudinais

---

## 5. GUI Agents & Computer Use

### Papers & Frameworks

| Paper/Framework | Descrição |
|-----------------|-----------|
| **AutoGUI-v2** | Multi-Modal GUI Functionality Understanding Benchmark |
| **GoClick** | Lightweight Element Grounding para GUI autonomous interaction |
| **VLAA-GUI** | Modular framework for GUI automation (stop, recover, search) |
| **AgentLens** | Adaptive Visual Modalities for Mobile GUI Agents |
| **Temporal UI State Inconsistency** | TOCTOU attacks on Computer-Use Agents — segurança |
| **Human-Guided Harm Recovery** | Recuperação de erros em Computer Use Agents |
| **Agentic World Modeling** | Foundations, capabilities, laws for world modeling |

### Ferramentas

- **Claude Computer Use** — Automação de desktop via screenshot + mouse/keyboard
- **Playwright MCP** — Browser automation via MCP
- **Browser Use** — Open-source browser agent
- **Stagehand** — AI-native browser automation

---

## 6. Multi-Agent Orchestration

### Padrões de Design

| Padrão | Quando Usar | Implementação |
|--------|-------------|---------------|
| **Sequential Pipeline** | Dependências claras entre etapas | extractor → validator → storer |
| **Parallel Fan-out/Fan-in** | Sub-tarefas independentes | `asyncio.gather` |
| **Orchestrator-Workers** | Tarefas complexas decomponíveis | Magentic-One (Microsoft) |
| **Evaluator-Optimizer** | Quality-critical outputs | loop de feedback até threshold |
| **EventBus** | Desacoplamento total | publish/subscribe entre agents |
| **Swarm** | Muitos agents simples com regras locais | emergência de comportamento |

### Papers Relevantes

- **AlphaLab** (arXiv 2604.08590) — Autonomous Multi-Agent Research Across Optimization Domains
- **PETITE** (arXiv 2604.08931) — Tutor-Student Multi-Agent Interaction for problem solving
- **SkillClaw** (arXiv 2604.08377) — Collective Skill Evolution in Multi-User Agent Ecosystems
- **Conformal Social Choice** (arXiv 2604.07667) — Safe Multi-Agent Deliberation
- **Dissecting Bug Triggers** (arXiv 2604.08906) — Estudo empírico de 409 bugs em CrewAI, AutoGen, etc.

---

## 7. Agent Safety & Governance

### Papers & Frameworks

| Recurso | Tema |
|---------|------|
| **AgentWard** (arXiv 2604) | Lifecycle Security Architecture for Autonomous AI Agents |
| **TraceSafe** (arXiv 2604.07223) | Assessment of LLM Guardrails on Multi-Step Tool-Calling |
| **Constitutional Classifiers** (Anthropic) | Defending against universal jailbreaks |
| **Green Shielding** (arXiv 2604) | User-Centric Approach Towards Trustworthy AI |
| **Governing What You Cannot Observe** (arXiv 2604) | Adaptive Runtime Governance for Autonomous AI Agents |
| **Your Agent Is Mine** (arXiv 2604.08407) | Malicious Intermediary Attacks on LLM Supply Chain |

### Práticas Recomendadas

1. **Sanitização de entrada E saída** — PII/credenciais em ambas as direções
2. **Rate Limiting** — Proteção contra abuso de tools MCP
3. **Circuit Breaker** — APIs externas com `failure_threshold=3`, `recovery_timeout=300s`
4. **Whitelist de relações** — Validação de relações no grafo
5. **Error isolation** — Um candidato com erro não bloqueia o loop
6. **Trajectory Safety Monitor** — Monitoramento de execução multi-step

---

## 8. Agent Evaluation & Benchmarks

### Benchmarks Estabelecidos

| Benchmark | Foco | URL |
|-----------|------|-----|
| **SWE-bench** | Software engineering real-world | github.com/princeton-nlp/SWE-bench |
| **GAIA** | General AI Assistants | huggingface.co/gaia-benchmark |
| **AgentBench** | Multi-environment LLM agents | github.com/THUDM/AgentBench |
| **WebArena** | Web environment realistic | github.com/xlang-ai/WebArena |
| **Plan-RewardBench** | Trajectory-level reward modeling | arXiv 2604.08178 |
| **KDR** | Knowledgeable Deep Research | arXiv 2604.07720 |

### Métricas de Produção

- **Recall@K / Precision@K** — Qualidade de retrieval
- **Task completion rate** — % de tarefas concluídas com sucesso
- **Latency P95/P99** — Tempo de resposta em percentis
- **Cost per task** — Custo médio por tarefa
- **Human approval rate** — Taxa de aprovação humana
- **Error recovery rate** — Taxa de recuperação de erros

---

## 9. Papers Selecionados (Abril 2026)

### Agent Architecture & Cognition

1. **Can Current Agents Close the Discovery-to-Application Gap? A Case Study in Minecraft** — Avaliação crítica de agentes atuais em ambientes abertos
2. **The Last Human-Written Paper: Agent-Native Research Artifacts** — Pesquisa gerada nativamente por agentes
3. **Agent-Centric Visual Reinforcement Learning under Dynamic Perturbations** — RL visual para agentes

### Safety & Governance

4. **AgentWard: A Lifecycle Security Architecture for Autonomous AI Agents** — Segurança end-to-end
5. **Governing What You Cannot Observe: Adaptive Runtime Governance for Autonomous AI Agents** — Governança adaptativa
6. **The Price of Agreement: Measuring LLM Sycophancy in Agentic Financial Applications** — Sycophancy em agentes financeiros

### Memory & Skills

7. **ZenBrain: A Neuroscience-Inspired 7-Layer Memory Architecture for Autonomous AI Systems**
8. **GraphPlanner: Graph Memory-Augmented Agentic Routing for Multi-Agent LLMs**
9. **Skill Retrieval Augmentation for Agentic AI**
10. **From Skill Text to Skill Structure: The Scheduling-Structural-Logical Representation for Agent Skills**

### RAG & Retrieval

11. **XGRAG: A Graph-Native Framework for Explaining KG-based Retrieval-Augmented Generation**
12. **Prism-Reranker: Beyond Relevance Scoring -- Jointly Producing Contributions and Evidence for Agentic Retrieval**
13. **S2G-RAG: Structured Sufficiency and Gap Judging for Iterative Retrieval-Augmented QA**
14. **MEG-RAG: Quantifying Multi-modal Evidence Grounding for Evidence Selection in RAG**

### Computer Use & GUI

15. **AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark**
16. **VLAA-GUI: Knowing When to Stop, Recover, and Search, A Modular Framework for GUI Automation**
17. **Temporal UI State Inconsistency in Desktop GUI Agents: Formalizing and Defending Against TOCTOU Attacks**
18. **Human-Guided Harm Recovery for Computer Use Agents**

### Multi-Agent

19. **AlphaLab: Autonomous Multi-Agent Research Across Optimization Domains**
20. **SkillClaw: Collective Skill Evolution in Multi-User Agent Ecosystems**
21. **Dissecting Bug Triggers in Modern Agentic Frameworks** — 409 bugs em CrewAI, AutoGen

---

## 10. Repositórios & Projetos Notáveis

### Agentes Autônomos

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — Experimento original GPT-4 autônomo
- [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) — Agentes comunicativos para software development
- [OpenGVLab/GITM](https://github.com/OpenGVLab/GITM) — Ghost in the Minecraft
- [anthropics/anthropic-quickstarts](https://github.com/anthropics/anthropic-quickstarts) — Quickstarts incluindo computer use demo

### Infraestrutura

- [modelcontextprotocol/specification](https://github.com/modelcontextprotocol/specification) — Especificação MCP
- [langchain-ai/langsmith](https://github.com/langchain-ai/langsmith) — Observabilidade para agentes
- [langfuse/langfuse](https://github.com/langfuse/langfuse) — Open-source observability para LLM apps
- [traceloop/openllmetry](https://github.com/traceloop/openllmetry) — Telemetria OpenTelemetry para LLMs

---

## 11. Videos, Cursos & Comunidades

### Cursos

- [LangChain Academy](https://academy.langchain.com/) — Cursos gratuitos de agent development
- [DeepLearning.AI — AI Agents](https://www.deeplearning.ai/courses/) — Cursos de agentes e multi-agent systems
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) — Guia completo com code examples

### Conferências

- **Interrupt: The Agent Conference by LangChain** (Maio 2026)
- **AI Dev x SF 2026** — DeepLearning.AI developer conference
- **AI Engineer Foundation** — Talks sobre AI agents e infraestrutura

### Comunidades

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) — Discussão de LLM agents e local deployment
- [Hugging Face Papers](https://huggingface.co/papers) — Daily curated AI research
- [Hugging Face Daily Papers](https://huggingface.co/papers) — Papers diários da comunidade

---

## 12. Tendências & Previsões

### O que está mudando AGORA

1. **Agentes nativos vs. wrappers** — Frameworks como DeepTutor são "agent-native" desde o design, não wrappers em cima de LLMs
2. **Memória como primeira classe** — ZenBrain, GraphPlanner — memória não é mais afterthought
3. **Skills como RAG** — Skill Retrieval Augmentation — skills são recuperadas dinamicamente
4. **Segurança por design** — AgentWard, runtime governance — segurança não é bolt-on
5. **Multi-agent como padrão** — Não mais exceção, mas padrão para tarefas complexas
6. **RAG agentico** — Retrieval não é passivo; agentes decidem quando e o que buscar
7. **World models** — Agentes construindo modelos internos do ambiente (Genie 3, SIMA 2)
8. **Agentes de longa duração** — Long-running Claude, Deep Agents — dias/semanas de execução

### O que vem por aí

- **A2A (Agent-to-Agent) Protocol** — Protocolo para comunicação entre agentes de diferentes vendors
- **Agent-native IDEs** — IDEs onde agentes são cidadãos de primeira classe
- **Regulatory frameworks** — Regulação de agentes autônomos em produção
- **Agent marketplaces** — Marketplaces de skills e agentes (tipo Project Deal da Anthropic)

---

*Compilado em Abril 2026. 50+ papers, 30+ repositórios, 20+ ferramentas e frameworks.*
