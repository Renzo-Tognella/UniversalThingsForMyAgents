# AI Agents - Vanguard & Frontier

A curated collection of high-quality links covering autonomous AI agents, agentic AI systems, and the cutting edge of agent technology.

## Articles & Research Papers

### Foundational Papers

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) - Seminal paper on interleaving reasoning traces with task-specific actions for LLM agents
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) - Stanford's landmark paper on believable human simulacra using LLMs with memory, reflection, and planning
- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) - Nvidia's lifelong learning agent in Minecraft with automatic curriculum, skill library, and iterative prompting
- [LLM+P: Empowering Large Language Models with Optimal Planning Proficiency](https://arxiv.org/abs/2304.11477) - Integrating classical planners (PDDL) with LLMs for optimal planning
- [Ghost in the Minecraft (GITM)](https://arxiv.org/abs/2305.17144) - Generally capable agents for open-world environments via LLMs with text-based knowledge and memory
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) - Systematic exploration of reasoning paths for complex planning
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) - Agents that learn from verbal feedback and self-reflection without weight updates
- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) - Meta's approach to self-supervised tool usage in LLMs
- [HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face](https://arxiv.org/abs/2303.17580) - LLM as controller managing AI models for complex tasks
- [AutoGPT: An Autonomous GPT-4 Experiment](https://news.agpt.co/) - Early autonomous agent experiment chaining GPT-4 calls
- [BabyAGI: Task-Driven Autonomous Agent](https://github.com/yoheinakajima/babyagi) - Simple task-driven autonomous agent framework using LLMs
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) - Foundation for agent reasoning capabilities
- [Self-Refine: Iterative Refinement with Self-Feedback](https://arxiv.org/abs/2303.17651) - Agents that iteratively improve their own outputs

### Surveys & Landscape Reviews

- [LLM-based Multi-Agents: A Survey of Progress and Challenges](https://arxiv.org/abs/2402.01680) - Comprehensive survey covering domains, profiling, communication, and capacity growth in multi-agent systems
- [The Landscape of Emerging AI Agent Architectures for Reasoning, Planning, and Tool Calling](https://arxiv.org/abs/2404.11584) - Survey of single-agent and multi-agent architectures with design pattern analysis
- [A Survey on Large Language Model based Autonomous Agents](https://arxiv.org/abs/2308.11432) - Comprehensive survey of LLM-based autonomous agents covering architecture, profiling, memory, planning, and action
- [Large Language Models based Autonomous Agents: A Survey](https://arxiv.org/abs/2308.11432) - Fudan University survey covering profiling, memory, planning, and action modules
- [If LLMs are the Future of AI Agents, What Should They Learn?](https://arxiv.org/abs/2404.12497) - Investigating what capabilities LLM agents should acquire
- [From LLM to Agent: A Survey on Tuning LLMs for Agent Applications](https://arxiv.org/abs/2404.11584) - Tuning strategies for building agent-capable LLMs

### Agent Architectures & Design Patterns

- [Building Effective Agents - Anthropic](https://www.anthropic.com/research/building-effective-agents) - Anthropic's guide to agentic patterns: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer
- [Trustworthy Agents in Practice - Anthropic](https://www.anthropic.com/research/trustworthy-agents) - Anthropic's research on making AI agents trustworthy and reliable in production
- [Global Workspace Agents (GWA): A Cognitive Architecture Based on Global Workspace Theory](https://arxiv.org/abs/2604.08206) - Cognitive architecture for LLM agents inspired by Global Workspace Theory with entropy-based intrinsic drive
- [Dynamic Attentional Context Scoping (DACS)](https://arxiv.org/abs/2604.07911) - Agent-triggered focus sessions for isolated per-agent steering in multi-agent LLM orchestration
- [AlphaLab: Autonomous Multi-Agent Research Across Optimization Domains](https://arxiv.org/abs/2604.08590) - Autonomous research harness leveraging frontier LLM agentic capabilities for full experimental cycles
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Anthropic's open protocol for connecting AI agents to data sources and tools
- [Enhancing LLM Problem Solving via Tutor-Student Multi-Agent Interaction (PETITE)](https://arxiv.org/abs/2604.08931) - Multi-agent framework using role-based tutor-student interaction for enhanced problem solving
- [SkillClaw: Collective Skill Evolution in Multi-User Agent Ecosystems](https://arxiv.org/abs/2604.08377) - Framework for cross-user skill evolution in agent ecosystems
- [MCP Server for Quantum Execution](https://arxiv.org/abs/2604.08318) - AI agent framework for autonomous quantum computing workflows via Model Context Protocol

### Agent Memory, Planning & Reasoning

- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) - Memory stream, reflection, and retrieval architecture for believable agents
- [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) - Virtual context management for LLM agents with hierarchical memory
- [Experiential Co-Learning of Software-Developing Agents](https://arxiv.org/abs/2312.17025) - ChatDev's framework for agents learning from historical trajectories
- [AutoAct: Automatic Agent Learning from Scratch for QA](https://arxiv.org/abs/2401.05268) - Self-planning agent with automatic trajectory synthesis and division-of-labor
- [Multi-User Large Language Model Agents](https://huggingface.co/papers/2604.08567) - Stanford research on multi-user LLM agent interactions
- [Plan-RewardBench: Trajectory-Level Reward Modeling](https://arxiv.org/abs/2604.08178) - Benchmark for evaluating trajectory-level preference in tool-using agent scenarios

### Multi-Agent Systems & Orchestration

- [Conformal Social Choice for Safe Multi-Agent Deliberation](https://arxiv.org/abs/2604.07667) - Post-hoc decision layer for calibrated act-versus-escalate decisions in multi-agent debate
- [Multi-Agent Orchestration for High-Throughput Materials Screening on HPC](https://arxiv.org/abs/2604.07681) - Hierarchical multi-agent framework for orchestrating scientific workflows
- [Dissecting Bug Triggers in Modern Agentic Frameworks](https://arxiv.org/abs/2604.08906) - Empirical study of 409 bugs from CrewAI, AutoGen, and other agentic frameworks
- [Your Agent Is Mine: Malicious Intermediary Attacks on LLM Supply Chain](https://arxiv.org/abs/2604.08407) - Security analysis of LLM agent API router attack surfaces
- [Networking-Aware Energy Efficiency in Agentic AI Inference](https://arxiv.org/abs/2604.07857) - Survey of computational and communication energy costs in agentic AI systems

### Agent Safety, Alignment & Evaluation

- [TraceSafe: Assessment of LLM Guardrails on Multi-Step Tool-Calling Trajectories](https://arxiv.org/abs/2604.07223) - Systematic safety assessment for agentic tool use
- [Aligning Agents via Planning: A Benchmark for Trajectory-Level Reward Modeling](https://arxiv.org/abs/2604.08178) - Evaluating reward models in tool-integrated environments
- [Constitutional Classifiers: Defending Against Universal Jailbreaks - Anthropic](https://www.anthropic.com/research/constitutional-classifiers) - Defending AI agents from adversarial attacks
- [Beyond Human-Readable: Rethinking SE Conventions for the Agentic Era](https://arxiv.org/abs/2604.07502) - How agentic AI development changes software engineering conventions
- [Knowledgeable Deep Research (KDR)](https://arxiv.org/abs/2604.07720) - Framework and benchmark for deep research agents combining structured and unstructured knowledge

### World Models & Embodied Agents

- [LMGenDrive: Bridging Multimodal Understanding and Generative World Modeling](https://arxiv.org/abs/2604.08719) - First framework combining LLM-based understanding with generative world models for autonomous driving
- [SIMA 2 - Google DeepMind](https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/) - Agent that plays, reasons, and learns in virtual 3D worlds
- [Gemini Robotics - Google DeepMind](https://deepmind.google/models/gemini-robotics/) - General-purpose robotic agents that perceive, reason, and interact
- [Genie 3 - Google DeepMind](https://deepmind.google/models/genie/) - General-purpose world model generating interactive environments
- [Vision-Language Navigation for Aerial Robots](https://arxiv.org/abs/2604.07705) - Survey of LLM-powered UAV navigation
- [TOOLCAD: Tool-Using LLMs in Text-to-CAD Generation with RL](https://arxiv.org/abs/2604.07960) - LLM agents as tool-using agents for CAD modeling
- [Matrix-Game 3.0: Real-Time Interactive World Model](https://arxiv.org/abs/2604.08995) - Streaming interactive world model with long-horizon memory

### OpenAI Research

- [OpenAI Research Index](https://openai.com/research/index/) - Complete index of OpenAI research publications
- [Learning to Reason with LLMs (o1)](https://openai.com/index/learning-to-reason-with-llms/) - Chain-of-thought reasoning models for agent planning
- [Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/) - Advanced frontier model for professional work and long-running agents
- [OpenAI o3 and o4-mini](https://openai.com/index/introducing-o3-and-o4-mini/) - Smartest models with full tool access for agentic workflows
- [Computer Use - Anthropic Quickstarts](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) - Claude's computer use reference implementation

### DeepMind Research

- [Google DeepMind Research](https://deepmind.google/research/) - Main research hub for DeepMind's breakthroughs
- [Measuring Progress Toward AGI: A Cognitive Framework](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/measuring-agi-cognitive-framework) - DeepMind's framework for evaluating AGI progress
- [AlphaGo](https://deepmind.google/research/alphago/) - Foundation of sequential decision-making agents
- [AlphaZero and MuZero](https://deepmind.google/research/alphazero-and-muzero/) - Self-learning agents for games and planning
- [AlphaFold](https://deepmind.google/science/alphafold/) - AI agent for protein structure prediction

### Industry & Thought Leadership

- [LangChain](https://langchain.com/) - Agent engineering platform with observability, evaluation, and deployment
- [LangGraph](https://langchain.com/langgraph) - Framework for building reliable agents with low-level control
- [DeepLearning.AI The Batch](https://www.deeplearning.ai/the-batch/) - Andrew Ng's weekly AI newsletter covering agent developments
- [Hugging Face Daily Papers](https://huggingface.co/papers) - Community-curated daily AI research papers including agent research
- [Anthropic Research](https://www.anthropic.com/research) - Anthropic's research hub on agent safety, interpretability, and alignment
- [Project Vend Phase Two - Anthropic](https://www.anthropic.com/research/project-vend-2) - AI shopkeeper experiment: Claude running a real store autonomously
- [Long-Running Claude for Scientific Computing](https://www.anthropic.com/research/long-running-Claude) - Anthropic's research on long-running autonomous agents for science

## Repositories

### Major Agent Frameworks

- [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) - The Multi-Agent Framework: First AI Software Company (67k stars)
- [microsoft/autogen](https://github.com/microsoft/autogen) - Microsoft's programming framework for agentic AI (57k stars)
- [openai/openai-agents-python](https://github.com/openai/openai-agents-python) - OpenAI's lightweight, powerful framework for multi-agent workflows (20.8k stars)
- [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero) - Agent Zero AI framework for autonomous agents (17k stars)
- [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) - AI Agent Framework, the Pydantic way (16.3k stars)
- [microsoft/agent-framework](https://github.com/microsoft/agent-framework) - Microsoft's framework for building, orchestrating and deploying AI agents (9.4k stars)
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) - Framework for building stateful, multi-actor applications with LLMs
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) - Framework for developing applications powered by LLMs
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-playing autonomous AI agents
- [TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework) - Open-source framework for conversational voice AI agents (10.4k stars)
- [livekit/agents](https://github.com/livekit/agents) - Framework for building realtime voice AI agents (10k stars)
- [alibaba/spring-ai-alibaba](https://github.com/alibaba/spring-ai-alibaba) - Agentic AI Framework for Java Developers (9.2k stars)

### Notable Agent Implementations

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) - Original autonomous GPT-4 agent experiment
- [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) - Task-driven autonomous agent
- [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) - Communicative agents for software development
- [OpenGVLab/GITM](https://github.com/OpenGVLab/GITM) - Ghost in the Minecraft: generally capable agents
- [react-lm/ReAct](https://react-lm.github.io/) - Official ReAct implementation
- [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) - Open phone agent model and framework (24.9k stars)
- [anthropics/anthropic-quickstarts](https://github.com/anthropics/anthropic-quickstarts) - Anthropic's quickstart projects including computer use demo
- [brendanhogan/alphalab-paper](https://brendanhogan.github.io/alphalab-paper/) - AlphaLab: autonomous multi-agent research harness code

### Agent Evaluation & Benchmarking

- [princeton-nlp/SWE-bench](https://github.com/princeton-nlp/SWE-bench) - Benchmark for evaluating LLMs on real-world software engineering
- [xlang-ai/WebArena](https://github.com/xlang-ai/WebArena) - Realistic web environment for building autonomous agents
- [GAIA-benchmark/GAIA](https://huggingface.co/gaia-benchmark) - General AI Assistants benchmark for evaluating agents
- [THUDM/AgentBench](https://github.com/THUDM/AgentBench) - Comprehensive benchmark for LLM agents across multiple environments

### Infrastructure & Tools

- [modelcontextprotocol](https://modelcontextprotocol.io/) - Model Context Protocol specification for connecting AI to data sources
- [anthropics/claude-code](https://docs.anthropic.com/en/docs/claude-code) - Anthropic's agentic coding tool
- [strandsagents/strands-agents-sdk](https://strandsagents.com/latest/) - AWS Strands Agents SDK for building AI agents
- [Google Antigravity](https://antigravity.google/) - Google's agentic development platform

## Videos & Courses

### Conference Talks & Lectures

- [Andrew Ng: AI Agents - DeepLearning.AI](https://www.deeplearning.ai/the-batch/) - Weekly coverage of AI agent developments by Andrew Ng
- [Google DeepMind Podcast](https://deepmind.google/the-podcast/) - Hannah Fry explores AI agent transformations including robotics and world models
- [LangChain YouTube Channel](https://www.youtube.com/@LangChain) - Tutorials and deep-dives on building production AI agents
- [LangChain Academy](https://academy.langchain.com/) - Free courses on agent development with LangGraph and LangChain
- [DeepLearning.AI Courses](https://www.deeplearning.ai/courses/) - Courses on AI agents, multi-agent systems, and tool use
- [Building with Andrew](https://www.deeplearning.ai/the-batch/) - Course on building AI applications with agentic patterns
- [Andrej Karpathy: Let's build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY) - Foundational understanding of transformer architecture for agents
- [Yannic Kilcher Channel](https://www.youtube.com/@YannicKilcher) - Paper explanations covering agent research
- [AI Engineer Foundation](https://www.youtube.com/@aiengineerfoundation) - Conference talks on AI agents and infrastructure
- [Interrupt: The Agent Conference by LangChain](https://interrupt.langchain.com/) - Annual agent conference (May 2026)

### Tutorials & Guides

- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - Complete guide to agentic design patterns with code examples
- [Claude Agent SDK Documentation](https://platform.claude.com/docs/en/agent-sdk/overview) - Official Anthropic agent SDK docs
- [OpenAI Agents Python Docs](https://github.com/openai/openai-agents-python) - OpenAI's multi-agent framework documentation
- [LangGraph How-to Guides](https://langchain-ai.github.io/langgraph/how-tos/) - Practical guides for building stateful agents
- [MCP Documentation](https://modelcontextprotocol.io/tutorials/building-a-client) - Tutorials for building MCP clients and servers
- [Efficient Inference with SGLang - DeepLearning.AI](https://www.deeplearning.ai/courses/) - Course on efficient agent inference

## Additional Resources

### Community & News

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) - Active community discussing LLM agents and local deployment
- [Hugging Face Papers](https://huggingface.co/papers) - Daily curated AI research papers
- [arXiv cs.AI](https://arxiv.org/list/cs.AI/recent) - Latest AI research papers
- [Papers With Code - Agents](https://paperswithcode.com/task/autonomous-agents) - Benchmarks and implementations for agent research
- [AI Dev x SF 26](https://ai-dev.deeplearning.ai/) - DeepLearning.AI developer conference

### Books & Long-form

- [Artificial Intelligence: A Modern Approach (Russell & Norvig)](https://aima.cs.berkeley.edu/) - Foundational textbook covering intelligent agent design
- [Designing Autonomous Agents (MIT Press)](https://mitpress.mit.edu/) - Classic reference on autonomous agent architecture
- [The Batch by DeepLearning.AI](https://www.deeplearning.ai/the-batch/) - Weekly long-form analysis of AI agent developments

### Emerging Frontiers (2025-2026)

- [Measuring Progress Toward AGI - DeepMind](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/measuring-agi-cognitive-framework) - Cognitive framework for AGI evaluation
- [Introducing DeepLearning.AI Pro](https://www.deeplearning.ai/the-batch/introducing-deeplearning-ai-pro/) - 150+ courses including advanced agent topics
- [Anthropic Claude Mythos](https://www.anthropic.com/glasswing) - Anthropic's frontier model preview
- [GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/) - OpenAI's coding agent built on GPT-5.3
- [Google Antigravity](https://antigravity.google/) - Google's agentic development platform
- [LangSmith Fleet](https://langchain.com/langsmith/fleet) - Enterprise agents for the whole company
- [Deep Agents by LangChain](https://langchain.com/deep-agents) - Framework for long-running autonomous agents
- [Context Hub by DeepLearning.AI](https://www.deeplearning.ai/the-batch/issue-343/) - Tool for giving coding agents API documentation
- [AgentSwing: Adaptive Parallel Context Management](https://arxiv.org/abs/2603.27490) - Long-horizon web agents with adaptive context routing
