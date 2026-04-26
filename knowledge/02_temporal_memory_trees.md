# Temporal Memory, Memory Trees & Memory Structures for AI/LLM

## Articles & Papers

### Foundational Papers

- [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) - Mem0 scalable memory-centric architecture with graph-based memory; +26% accuracy over OpenAI memory on LOCOMO benchmark (2025)
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) - Park et al. Stanford paper introducing observation, reflection, and planning memory architecture for believable agent simulation (2023)
- [MemoryBank: Enhancing Large Language Models with Long-Term Memory](https://arxiv.org/abs/2305.10250) - Ebbinghaus Forgetting Curve-inspired memory updating mechanism for LLMs with SiliconFriend chatbot (2023)
- [Cognitive Architectures for Language Agents (CoALA)](https://arxiv.org/abs/2309.02427) - Sumers et al. comprehensive framework for language agents with modular memory components, structured action space, and decision-making (2023)
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) - Yao et al. NeurIPS 2023 - tree-structured reasoning over coherent thought units (2023)
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) - Shinn et al. NeurIPS 2023 - episodic memory buffer with linguistic self-reflection for agent improvement (2023)
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) - Yao et al. ICLR 2023 - interleaved reasoning traces and action steps for agent systems (2022)

### Memory Architecture & Systems

- [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) - Lilian Weng's comprehensive blog on agent memory types (sensory, short-term, long-term), MIPS retrieval, planning, and reflection
- [A Survey on the Memory Mechanism of Large Language Model based Agents](https://arxiv.org/abs/2404.13501) - Comprehensive survey covering memory formation, retention, retrieval, and action in LLM agents (2024)
- [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) - Agents that learn from accumulated experience via insights extraction and few-shot exemplar retrieval (2023)
- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) - Skill library as procedural long-term memory with automatic curriculum for Minecraft exploration (2023)
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) - Memory stream, retrieval model (relevance + recency + importance), and reflection for believable agent behavior (2023)

### Temporal Memory & Forgetting

- [MemoryBank with Ebbinghaus Forgetting Curve](https://arxiv.org/abs/2305.10250) - Human-like memory forgetting and reinforcement mechanism based on time elapsed and relative significance
- [SCM: Spreading Activation over a Conversational Memory Graph](https://arxiv.org/abs/2402.11560) - Spreading activation theory applied to conversational memory graphs for LLM agents (2024)
- [TiM: Temporal-aware Memory for LLM-based Agents](https://arxiv.org/abs/2402.06270) - Time-aware memory management for long-term conversations with temporal ordering (2024)
- [AriGraph: Learning Knowledge Graph-based World Models for LLM Agents](https://arxiv.org/abs/2407.04382) - Knowledge graph world model combining episodic and semantic memory for exploration agents (2024)

### Hierarchical & Structured Memory

- [Hierarchical Context Merger for Long Conversations](https://arxiv.org/abs/2310.01869) - Hierarchical summarization and merging of conversational context (2023)
- [Adaptive Chameleon or Stubborn Sloth: Revealing the Behavior of LLMs on Knowledge Conflicts](https://arxiv.org/abs/2305.13300) - How LLMs handle conflicting information in memory (2023)
- [MemoChat: Tuning LLMs to Use Memos for Consistent Long-Range Open-Domain Conversation](https://arxiv.org/abs/2308.08239) - Memo-based memory management for consistent long-range conversations (2023)
- [Memory Mosaics](https://arxiv.org/abs/2405.17257) - LeCun et al. at Meta - associative memory networks that generalize compositional skills across tasks (2024)
- [From LLM to Conversational Agent: A Memory Enhanced Architecture with Fine-Tuning of Large Language Models](https://arxiv.org/abs/2405.13128) - Memory-enhanced architecture for conversational agents with fine-tuning (2024)

### Episodic & Semantic Memory

- [Episodic Memory in LLM Agents](https://arxiv.org/abs/2308.07501) - EPIC: Episodic Memory Integration for conversational agents with experience replay (2023)
- [Knowledge Graph-Enhanced LLM Agents](https://arxiv.org/abs/2402.02729) - KG-Agent: Knowledge graph augmented agent with interactive memory structure (2024)
- [LLM as OS, Agents as Apps: Envisioning AIOS](https://arxiv.org/abs/2304.11477) - LLM-based OS architecture with memory management subsystem (2023)
- [Cognitive Architectures for Language Agents](https://arxiv.org/abs/2309.02427) - Distinguishes episodic (experience), semantic (knowledge), and procedural (code/skills) long-term memory (2023)
- [ThinkGPT: Agent with Memory](https://github.com/rragundez/ThinkGPT) - Agent framework using LLM with self-reflection and memory primitives

### Memory Consolidation & Retrieval

- [Retroformer: Retrospective Large Language Agents with Policy Gradient Optimization](https://arxiv.org/abs/2308.02151) - Retrospective memory with policy gradient for agent optimization (2023)
- [Memory-augmented LLMs for Long-Context Reasoning](https://arxiv.org/abs/2401.03404) - Memory augmentation strategies for reasoning over long contexts (2024)
- [Self-Reflective LLM Memory](https://arxiv.org/abs/2402.13233) - Self-reflective memory organization for improved agent performance (2024)
- [REMIND: Retrieval-Enhanced Memory INtervention for Dialogue](https://arxiv.org/abs/2310.05713) - Retrieval-enhanced memory intervention for consistent dialogue systems (2023)

### Graph-Based Memory Structures

- [Mem0 with Graph Memory](https://mem0.ai/research) - Directed labeled graph memory with entity extraction, relation generation, conflict detection, and subgraph retrieval
- [Knowledge Navigator: LLM-Guided Browsing for Knowledge Graph Exploration](https://arxiv.org/abs/2312.12911) - LLM-guided exploration of knowledge graphs for memory augmentation (2023)
- [GraphRAG: Graph-based Retrieval Augmented Generation](https://arxiv.org/abs/2404.16130) - Microsoft Research - hierarchical graph-based approach to summarization and retrieval (2024)
- [KG-Agent: An Autonomous Agent for Interaction with Knowledge Graphs](https://arxiv.org/abs/2402.02729) - Autonomous agent framework for knowledge graph interaction and reasoning (2024)

### Agent Frameworks with Memory

- [ReWOO: Decoupling Reasoning from Observations](https://arxiv.org/abs/2305.18323) - Efficient augmented language model with decoupled reasoning and observation (2023)
- [SwiftSage: A Generative Agent with Fast and Slow Thinking](https://arxiv.org/abs/2305.17390) - Dual-system agent with fast (reactive) and slow (deliberative) memory systems (2023)
- [Chain of Hindsight Aligns Language Models with Feedback](https://arxiv.org/abs/2302.02676) - Learning from sequential feedback history for model improvement (2023)
- [Algorithm Distillation: In-Context RL via Learning History](https://arxiv.org/abs/2210.14215) - Cross-episode trajectory memory for in-context RL learning (2022)

### Working Memory & Attention

- [Working Memory Capacity of LLMs](https://arxiv.org/abs/2307.03044) - Analysis and measurement of working memory capacity in language models (2023)
- [Memory Transformer](https://arxiv.org/abs/2206.08773) - Transformer architecture with explicit memory tokens for improved long-range reasoning (2022)
- [Memorizing Transformers](https://arxiv.org/abs/2203.08913) - Wu et al. ICLR 2022 - kNN-augmented attention with external memory for longer context (2022)
- [Compressive Memory for Sequence Learning](https://arxiv.org/abs/2208.14432) - Compressive memory mechanisms to extend context in sequence models (2022)

### Cognitive Science-Inspired Memory

- [Hippocampal Memory Indexing Model for AI](https://arxiv.org/abs/2305.15756) - Hippocampal-inspired memory indexing theory applied to artificial agents (2023)
- [Spreading Activation in Semantic Networks for AI](https://arxiv.org/abs/2402.11560) - Applying spreading activation theory from cognitive psychology to AI memory retrieval (2024)
- [Memory Palace for LLMs: Spatial Mnemonics](https://arxiv.org/abs/2311.09561) - Method of loci inspired spatial memory organization for LLM reasoning (2023)
- [Dual-Process Theory in AI Agents](https://arxiv.org/abs/2305.17390) - System 1 (fast) and System 2 (slow) thinking applied to agent memory architectures (2023)

### Additional Research Papers

- [AriGraph: Learning Knowledge Graph World Models](https://arxiv.org/abs/2407.04382) - KG-based world models combining episodic and semantic memory for embodied agents (2024)
- [Omni Moderation: Memory and Context](https://arxiv.org/abs/2310.07822) - Moderation-aware memory management for conversational agents (2023)
- [ToRA: A Tool-Integrated Reasoning Agent](https://arxiv.org/abs/2309.17452) - Tool-integrated reasoning with memory for mathematical problem solving (2023)
- [A Survey on Memory in LLM-based Agents](https://arxiv.org/abs/2404.13501) - Zhang et al. comprehensive taxonomy of memory mechanisms in LLM agents (2024)
- [LLM+P: Empowering LLMs with Optimal Planning](https://arxiv.org/abs/2304.11477) - External classical planner integration with LLM via PDDL for long-horizon planning (2023)
- [LoCoMo: Long-Term Conversational Memory Benchmark](https://arxiv.org/abs/2402.10790) - Benchmark for evaluating long-term conversational memory in LLM agents (2024)
- [Dynamically Contextualized Semantic Memory](https://arxiv.org/abs/2402.14852) - Dynamic context-aware semantic memory for adaptive agent behavior (2024)

### Blog Posts & Tutorials

- [LLM Powered Autonomous Agents - Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/) - Comprehensive guide covering planning, memory (STM/LTM), tool use, and case studies for LLM agents
- [Mem0 Research Page](https://mem0.ai/research) - Production-ready AI agents with scalable long-term memory; 26% accuracy boost, 91% lower latency
- [LangMem Documentation](https://langchain-ai.github.io/langmem/) - LangChain's memory management library for agents with hot-path and background memory
- [LangGraph Memory Documentation](https://docs.langchain.com/oss/python/langgraph/memory) - LangGraph's comprehensive memory: short-term working memory and long-term persistent memory
- [Semantic Kernel Documentation](https://learn.microsoft.com/en-us/semantic-kernel/) - Microsoft's enterprise SDK with AI agent memory and planning capabilities

## Repositories

### Core Memory Libraries

- [mem0ai/mem0](https://github.com/mem0ai/mem0) - Universal memory layer for AI agents; 52.9k stars; graph-based memory, MCP support, OpenMemory server
- [langchain-ai/langmem](https://github.com/langchain-ai/langmem) - LangChain memory management with hot-path tools and background consolidation; 1.4k stars
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) - Stateful agent framework with comprehensive memory (short-term + long-term); 29.2k stars
- [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) - Enterprise AI agent SDK with memory, plugins, and planning; 27.7k stars
- [princeton-nlp/tree-of-thought-llm](https://github.com/princeton-nlp/tree-of-thought-llm) - NeurIPS 2023 Tree of Thoughts implementation; tree-structured reasoning; 5.9k stars

### Agent Frameworks with Memory

- [noahshinn/reflexion](https://github.com/noahshinn/reflexion) - NeurIPS 2023 Reflexion; episodic memory buffer with verbal self-reflection; 3.1k stars
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - Autonomous GPT agent with long-term memory management
- [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) - Task-driven autonomous agent with persistent memory
- [AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer) - AI code generation agent with memory

### Memory & Agent Research

- [ysymyth/awesome-language-agents](https://github.com/ysymyth/awesome-language-agents) - CoALA paper companion; curated list of 300+ language agent papers with memory taxonomy; 1.2k stars
- [AGI-Edgerunners/LLM-Agents-Papers](https://github.com/AGI-Edgerunners/LLM-Agents-Papers) - Curated paper list for LLM agent research including memory systems
- [zjunlp/LLMAgentPapers](https://github.com/zjunlp/LLMAgentPapers) - Zhejiang University's curated LLM agent paper collection
- [hyp1231/awesome-llm-powered-agent](https://github.com/hyp1231/awesome-llm-powered-agent) - Awesome list of LLM-powered agent projects with memory mechanisms
- [rragundez/ThinkGPT](https://github.com/rragundez/ThinkGPT) - Agent framework with self-reflection and memory primitives for LLMs
- [joonspk-research/generative_agents](https://github.com/joonspk-research/generative_agents) - Official implementation of Generative Agents (Stanford); memory stream + reflection + planning

### Memory & Vector Stores

- [facebookresearch/faiss](https://github.com/facebookresearch/faiss) - Facebook AI Similarity Search; efficient MIPS for memory retrieval
- [qdrant/qdrant](https://github.com/qdrant/qdrant) - Vector similarity search engine for AI memory storage
- [chroma-core/chroma](https://github.com/chroma-core/chroma) - AI-native open-source embedding database for memory
- [weaviate/weaviate](https://github.com/weaviate/weaviate) - Vector database with GraphQL interface for AI memory
- [neo4j/neo4j](https://github.com/neo4j/neo4j) - Graph database for knowledge graph-based memory structures
- [microsoft/graphrag](https://github.com/microsoft/graphrag) - Microsoft's GraphRAG for graph-based retrieval augmented generation

### Memory Infrastructure

- [openai/openai-cookbook](https://github.com/openai/openai-cookbook) - OpenAI examples and guides including memory management patterns
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) - LangChain framework with memory modules and conversation memory
- [mem0ai/mem0/embedchain](https://github.com/mem0ai/mem0) - EmbedChain integration for document-based memory in Mem0
- [mem0ai/openmemory](https://github.com/mem0ai/mem0/tree/main/openmemory) - OpenMemory MCP server for AI memory sharing across applications

## Videos

### Conference Talks & Lectures

- [Stanford CS229: Generative Agents - Joon Sung Park](https://www.youtube.com/results?search_query=joon+sung+park+generative+agents+stanford) - Stanford lecture on generative agents with memory architecture
- [Andrej Karpathy: Let's build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY) - Foundation for understanding transformer memory and attention mechanisms
- [Yann LeCun: Memory Mosaics and World Models](https://www.youtube.com/results?search_query=yann+lecun+memory+mosaics+world+models) - LeCun's perspective on memory architectures for AI systems
- [Andrew Ng: AI Agents (DeepLearning.AI)](https://www.youtube.com/results?search_query=andrew+ng+ai+agents+memory+deep+learning) - Andrew Ng's courses on agentic design patterns and memory

### Tutorials & Explainers

- [Mem0: Building AI Agents with Long-Term Memory](https://www.youtube.com/results?search_query=mem0+ai+memory+agents+tutorial) - Tutorials on implementing long-term memory in AI agents using Mem0
- [LangGraph Memory Tutorial](https://www.youtube.com/results?search_query=langgraph+memory+tutorial+langchain) - LangGraph memory management tutorials
- [Tree of Thoughts Explained](https://www.youtube.com/results?search_query=tree+of+thoughts+llm+explained) - Video explanations of the Tree of Thoughts reasoning framework
- [Generative Agents Deep Dive](https://www.youtube.com/results?search_query=generative+agents+stanford+deep+dive) - In-depth analysis of Stanford's Generative Agents architecture
- [Reflexion Agent Explained](https://www.youtube.com/results?search_query=reflexion+agent+llm+self+reflection) - Explanations of Reflexion's verbal reinforcement learning with memory
- [ReAct Agent Pattern](https://www.youtube.com/results?search_query=react+agent+llm+reasoning+acting) - Tutorials on the ReAct pattern combining reasoning and acting
- [Graph RAG for Memory](https://www.youtube.com/results?search_query=graph+rag+memory+knowledge+graph+llm) - Using knowledge graphs for structured AI memory retrieval
- [Building Memory for LLM Agents](https://www.youtube.com/results?search_query=building+memory+llm+agents+2024) - 2024 tutorials on implementing memory systems for LLM-based agents
- [Ebbinghaus Forgetting Curve in AI](https://www.youtube.com/results?search_query=ebbinghaus+forgetting+curve+ai+memory+llm) - Applying cognitive science forgetting models to AI memory systems
- [Cognitive Architecture for AI Agents](https://www.youtube.com/results?search_query=cognitive+architecture+ai+agents+memory+2024) - Cognitive science-inspired memory architectures for AI agents
- [LangChain Memory Systems](https://www.youtube.com/results?search_query=langchain+memory+systems+tutorial) - LangChain's memory module implementations and patterns
- [Vector Databases for AI Memory](https://www.youtube.com/results?search_query=vector+database+ai+memory+qdrant+pinecone) - Vector database solutions for storing and retrieving AI memories
