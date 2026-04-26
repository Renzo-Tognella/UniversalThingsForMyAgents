# Multi-Agent Systems & Complex Systems

## Articles & Research

### Foundational Papers & Surveys
- [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation](https://arxiv.org/abs/2308.08155) - Seminal paper on multi-agent conversation frameworks from Microsoft Research
- [The Promise of Multi-Agent AI (Forbes)](https://www.forbes.com/sites/joannechen/2024/05/24/the-promise-of-multi-agent-ai/) - Foundation Capital on multi-agent AI potential
- [From Reasoning to Agentic: Credit Assignment in RL for LLMs](https://arxiv.org/abs/2604.09459) - Survey of 47 credit assignment methods across reasoning and agentic RL
- [Multi-User Large Language Model Agents](https://arxiv.org/abs/2604.08567) - First systematic study of multi-user interaction with LLM agents
- [Every Response Counts: Quantifying Uncertainty of LLM-based Multi-Agent Systems](https://arxiv.org/abs/2604.08708) - MATU framework for uncertainty quantification in MAS via tensor decomposition
- [Enhancing LLM Problem Solving via Tutor-Student Multi-Agent Interaction](https://arxiv.org/abs/2604.08931) - PETITE framework using tutor-student role differentiation for coding tasks
- [From Safety Risk to Design Principle: Peer-Preservation in Multi-Agent LLM Systems](https://arxiv.org/abs/2604.08465) - Emergent alignment phenomena in frontier LLM multi-agent systems
- [Semantic Intent Fragmentation: Attack on Multi-Agent AI Pipelines](https://arxiv.org/abs/2604.08608) - Security vulnerability class in LLM orchestration systems
- [Dissecting Bug Triggers in Modern Agentic Frameworks](https://arxiv.org/abs/2604.08906) - Empirical study of 409 bugs from CrewAI, AutoGen and other frameworks
- [Strategic Algorithmic Monoculture in Multi-Agent Coordination Games](https://arxiv.org/abs/2604.09502) - LLMs in multi-agent coordination with experimental evidence

### Agent Architecture & Design Patterns
- [What's Next for AI Agentic Workflows (Andrew Ng)](https://youtu.be/sal78ACtGTc) - Andrew Ng at Sequoia Capital AI Ascent on agentic design patterns
- [AI Agentic Design Patterns with AutoGen (DeepLearning.AI)](https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen) - Course on agentic design patterns
- [Multi AI Agent Systems with CrewAI (DeepLearning.AI)](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) - Fundamentals of multi-agent systems
- [Practical Multi AI Agents and Advanced Use Cases (DeepLearning.AI)](https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/) - Advanced multi-agent implementations
- [A2A: The Agent2Agent Protocol (DeepLearning.AI)](https://goo.gle/dlai-a2a) - Course on agent-to-agent communication protocol
- [AlphaLab: Autonomous Multi-Agent Research Across Optimization Domains](https://arxiv.org/abs/2604.08590) - Autonomous research harness using frontier LLMs for GPU experiments

### Agent Orchestration & Communication
- [Agent2Agent (A2A) Protocol Specification](https://a2a-protocol.org/latest/specification/) - Open protocol for inter-agent communication by Google (Linux Foundation)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Open-source standard for connecting AI applications to external systems (Anthropic)
- [Trustworthy Agents in Practice (Anthropic)](https://www.anthropic.com/research/trustworthy-agents) - Anthropic research on building trustworthy AI agents
- [Project Vend Phase Two (Anthropic)](https://www.anthropic.com/research/project-vend-2) - Experiment with AI shopkeeper running a real store

### Framework Documentation
- [AutoGen Documentation](https://microsoft.github.io/autogen/) - Official docs for Microsoft's multi-agent framework
- [CrewAI Documentation](https://docs.crewai.com) - Official CrewAI framework documentation
- [LangGraph Documentation](https://docs.langchain.com/oss/python/langgraph/overview) - Official LangGraph docs for building stateful agents
- [Deep Agents Documentation](https://docs.langchain.com/oss/python/deepagents/overview) - LangChain's batteries-included agent harness
- [Microsoft Agent Framework Documentation](https://learn.microsoft.com/en-us/agent-framework/) - Enterprise-grade agent framework docs
- [AG2 Documentation](https://docs.ag2.ai/) - Open-source AgentOS for AI agents (formerly AutoGen)
- [OpenAI Agents SDK Documentation](https://openai.github.io/openai-agents-python/) - Official docs for OpenAI's multi-agent SDK
- [LangChain Academy: Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph) - Free structured course on LangGraph

### Complex Systems & Emergent Behavior
- [Emotion Concepts and Their Function in a Large Language Model (Anthropic)](https://www.anthropic.com/research/emotion-concepts-function) - Interpretability research on emergent emotional behavior in LLMs
- [A "Diff" Tool for AI: Finding Behavioral Differences in New Models (Anthropic)](https://www.anthropic.com/research/diff-tool) - Techniques for understanding model behavioral changes
- [Constitutional Classifiers: Defending Against Universal Jailbreaks (Anthropic)](https://www.anthropic.com/research/constitutional-classifiers) - Safety research on defending against multi-agent attacks
- [Labor Market Impacts of AI (Anthropic)](https://www.anthropic.com/research/labor-market-impacts) - Economic implications of AI agent deployment

### OpenAI Research
- [OpenAI Research Index](https://openai.com/research/index/) - Complete index of OpenAI research publications
- [Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/) - Advanced frontier model for long-running agents
- [OpenAI o3 and o4-mini](https://openai.com/index/introducing-o3-and-o4-mini/) - Reasoning models with tool access for agentic use
- [Introducing Next-Generation Audio Models / Voice Agents](https://openai.com/index/introducing-our-next-generation-audio-models/) - Voice agent capabilities in the API

### arXiv Research (Recent 2026)
- [SkillMOO: Multi-Objective Optimization of Agent Skills for Software Engineering](https://arxiv.org/abs/2604.09297) - Evolving skill bundles for coding agents
- [SAGE: Service Agent Graph-guided Evaluation Benchmark](https://arxiv.org/abs/2604.09285) - Multi-agent benchmark for service SOPs
- [SPASM: Stable Persona-driven Agent Simulation for Multi-turn Dialogue](https://arxiv.org/abs/2604.09212) - Framework reducing persona drift in multi-agent dialogue
- [GeoMMAgent: Multi-agent Framework for Geoscience](https://arxiv.org/abs/2604.08896) - Multi-agent system integrating retrieval, perception, reasoning
- [LMGenDrive: LLM-based Multimodal Understanding for End-to-End Driving](https://arxiv.org/abs/2604.08719) - Multi-agent framework combining multimodal understanding with generative world models

## Repositories

### Major Multi-Agent Frameworks
- [microsoft/autogen](https://github.com/microsoft/autogen) - Programming framework for agentic AI (57k stars, now maintenance mode)
- [microsoft/agent-framework](https://github.com/microsoft/agent-framework) - Enterprise-ready successor to AutoGen with Python & .NET support (9.4k stars)
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) - Fast, standalone multi-agent framework built from scratch (48.8k stars)
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) - Low-level orchestration for stateful agents as graphs (29.2k stars)
- [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) - Batteries-included agent harness with planning, filesystem, sub-agents (20.6k stars)
- [openai/openai-agents-python](https://github.com/openai/openai-agents-python) - Lightweight, powerful framework for multi-agent workflows (20.8k stars)
- [openai/swarm](https://github.com/openai/swarm) - Educational framework for lightweight multi-agent orchestration (21.3k stars, replaced by Agents SDK)
- [ag2ai/ag2](https://github.com/ag2ai/ag2) - Open-source AgentOS for AI agents, evolved from AutoGen (4.4k stars)
- [a2aproject/A2A](https://github.com/a2aproject/a2A) - Agent2Agent protocol for inter-agent communication (23.2k stars)

### Agent SDKs & Libraries
- [a2aproject/a2a-python](https://github.com/a2aproject/a2a-python) - Official Python SDK for A2A protocol (`pip install a2a-sdk`)
- [a2aproject/a2a-js](https://github.com/a2aproject/a2a-js) - JavaScript SDK for A2A protocol
- [a2aproject/a2a-go](https://github.com/a2aproject/a2a-go) - Go SDK for A2A protocol
- [a2aproject/a2a-java](https://github.com/a2aproject/a2a-java) - Java SDK for A2A protocol
- [a2aproject/a2a-dotnet](https://github.com/a2aproject/a2a-dotnet) - .NET SDK for A2A protocol
- [a2aproject/a2a-samples](https://github.com/a2aproject/a2a-samples) - Sample implementations using A2A protocol
- [langchain-ai/langgraphjs](https://github.com/langchain-ai/langgraphjs) - JavaScript/TypeScript version of LangGraph
- [langchain-ai/deepagentsjs](https://github.com/langchain-ai/deepagentsjs) - JavaScript/TypeScript version of Deep Agents
- [langchain-ai/langchain-mcp-adapters](https://github.com/langchain-ai/langchain-mcp-adapters) - MCP integration for LangChain agents
- [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) - Official MCP Python SDK
- [openai/openai-agents-js](https://github.com/openai/openai-agents-js) - JavaScript/TypeScript version of OpenAI Agents SDK

### Examples & Learning Resources
- [crewAIInc/crewAI-examples](https://github.com/crewAIInc/crewAI-examples) - Complete CrewAI applications (marketing, stock analysis, trip planning, etc.)
- [crewAIInc/crewAI-cookbook](https://github.com/crewAIInc/crewAI-cookbook) - Feature-focused tutorials and guides for CrewAI
- [ag2ai/build-with-ag2](https://github.com/ag2ai/build-with-ag2) - Example applications built with AG2
- [openai/openai-agents-python/examples](https://github.com/openai/openai-agents-python/tree/main/examples) - Official examples for OpenAI Agents SDK
- [langchain-ai/langgraph/examples](https://github.com/langchain-ai/langgraph/tree/main/examples) - LangGraph example implementations

### Magentic-One & Research Agents
- [microsoft/autogen Magentic-One](https://github.com/microsoft/autogen/tree/main/python/packages/magentic-one-cli) - State-of-the-art multi-agent team for web browsing, code execution, file handling
- [brendanhogan/alphalab](https://brendanhogan.github.io/alphalab-paper/) - Autonomous multi-agent research harness for GPU experiments

### Agent Benchmarks & Evaluation
- [microsoft/autogen/packages/agbench](https://github.com/microsoft/autogen/tree/main/python/packages/agbench) - Benchmarking suite for evaluating agent performance

## Videos

### Framework Introductions & Tutorials
- [Microsoft Agent Framework Introduction (30 min)](https://www.youtube.com/watch?v=AAgdMhftj8w) - Full overview of Microsoft Agent Framework
- [DevUI in Action (1 min)](https://www.youtube.com/watch?v=mOAaGY4WPvc) - Interactive developer UI for agent development
- [CrewAI Getting Started Tutorial](https://www.youtube.com/watch?v=-kSOTtYzgEw) - Official CrewAI getting started guide
- [CrewAI Quick Tutorial](https://www.youtube.com/watch?v=tnejrr-0a94) - Step-by-step CrewAI tutorial
- [CrewAI Job Postings Demo](https://www.youtube.com/watch?v=u98wEMz-9to) - Multi-agent job description generation
- [CrewAI Trip Planner Demo](https://www.youtube.com/watch?v=xis7rWp-hjs) - Multi-agent travel planning
- [CrewAI Stock Analysis Demo](https://www.youtube.com/watch?v=e0Uj4yWdaAg) - Financial analysis with SEC data

### Research Talks
- [AI in the Real World: Exploring Multi-Agent AI and AutoGen](https://www.youtube.com/watch?v=RLwyXRVvlNk) - Foundation Capital interview with Chi Wang on multi-agent AI
- [Andrew Ng: What's Next for AI Agentic Workflows](https://youtu.be/sal78ACtGTc) - Sequoia Capital AI Ascent keynote
- [A2A DeepLearning.AI Course](https://www.youtube.com/watch?v=4gYm0Rp7VHc) - Google Cloud & IBM on the Agent2Agent Protocol

## Protocols & Standards

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Anthropic's open standard for connecting AI to external systems (like USB-C for AI)
- [Agent2Agent (A2A)](https://a2a-protocol.org/) - Google's open protocol for inter-agent communication under Linux Foundation
- [MCP Architecture Concepts](https://modelcontextprotocol.io/docs/learn/architecture) - Core concepts and architecture of MCP
- [MCP Build Server Guide](https://modelcontextprotocol.io/docs/develop/build-server) - How to create MCP servers
- [MCP Build Client Guide](https://modelcontextprotocol.io/docs/develop/build-client) - How to develop MCP clients
- [MCP Apps Overview](https://modelcontextprotocol.io/extensions/apps/overview) - Building interactive apps inside AI clients

## Ecosystem & Community

- [AutoGen Discord](https://aka.ms/autogen-discord) - Community support for AutoGen
- [AG2 Discord](https://discord.gg/pAbnFJrkgZ) - Community support for AG2
- [Microsoft Agent Framework Discord](https://discord.gg/b5zjErwbQM) - Microsoft Foundry community
- [LangChain Forum](https://forum.langchain.com) - LangChain community discussions
- [CrewAI Community](https://community.crewai.com) - CrewAI community discussions
- [CrewAI Learn Platform](https://learn.crewai.com) - 100,000+ certified developers courses
- [LangSmith](https://www.langchain.com/langsmith) - Observability and deployment for LangGraph agents
- [LangSmith Studio](https://docs.langchain.com/langsmith/studio) - Visual prototyping for agents
- [Built with LangGraph](https://www.langchain.com/built-with-langgraph) - Case studies of industry leaders using LangGraph
- [CrewAI Cloud](https://app.crewai.com) - Crew Control Plane for enterprise agent management
