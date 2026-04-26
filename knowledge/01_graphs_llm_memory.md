# Graphs Applied to LLM Memory & Graph Learning for AI

A curated collection of high-quality resources covering knowledge graph memory systems for LLMs, GraphRAG, graph neural networks for memory, and graph-based AI architectures.

---

## Articles

### Foundational Papers & Surveys

- [Retrieval-Augmented Generation with Graphs (GraphRAG)](https://arxiv.org/abs/2501.00309) - Comprehensive survey on GraphRAG techniques, defining key components: query processor, retriever, organizer, generator, and data source
- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](https://arxiv.org/abs/2404.16130) - The original Microsoft GraphRAG paper introducing structured hierarchical RAG via knowledge graphs
- [A Survey of Large Language Models for Graphs (KDD'24)](https://arxiv.org/abs/2405.08011) - Comprehensive survey of LLMs applied to graph tasks
- [A Survey of Graph Meets Large Language Model: Progress and Future Directions (IJCAI'24)](https://arxiv.org/abs/2311.12399) - Survey on the intersection of graph-based techniques with LLMs
- [Large Language Models on Graphs: A Comprehensive Survey (TKDE'24)](https://arxiv.org/abs/2312.02783) - Detailed survey covering LLMs for graph-structured data
- [Memory-Augmented Graph Neural Networks: A Brain-Inspired Review](https://arxiv.org/abs/2209.10818) - First systematic review of memory-augmented GNNs for structured representation learning
- [Knowledge Graphs, Large Language Models, and Hallucinations (JoWS 2025)](https://www.sciencedirect.com/science/article/pii/S1570826824000301) - NLP perspective on how KGs can reduce LLM hallucinations
- [Knowledge Graph and LLM Integration](https://www.sciencedirect.com/science/article/pii/S0925231225019022) - Comprehensive review of KG-LLM integration techniques
- [Graph Neural Networks: A Review of Methods and Applications](https://www.sciencedirect.com/science/article/pii/S2666651021000012) - Review of GCN, GAT, GRN variants and their applications
- [A Review of Graph Neural Networks: Concepts, Architectures, Techniques](https://link.springer.com/article/10.1186/s40537-023-00876-4) - Comprehensive review of GNN architectures and techniques

### GraphRAG & Knowledge Graph Memory

- [GraphRAG: Unlocking LLM Discovery on Narrative Private Data](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/) - Microsoft Research blog introducing GraphRAG for private dataset analysis
- [GraphRAG: New Tool for Complex Data Discovery Now on GitHub](https://www.microsoft.com/en-us/research/blog/graphrag-new-tool-for-complex-data-discovery-now-on-github/) - Announcement of the open-source GraphRAG library
- [LazyGraphRAG: Setting a New Standard for Quality and Cost](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/) - LazyGraphRAG approach blending vector RAG and Graph RAG with deferred LLM use
- [GraphRAG Auto-Tuning Provides Rapid Adaptation to New Domains](https://www.microsoft.com/en-us/research/blog/graphrag-auto-tuning-provides-rapid-adaptation-to-new-domains/) - Auto-tuning for domain-specific GraphRAG
- [Introducing DRIFT Search: Combining Global and Local Search Methods](https://www.microsoft.com/en-us/research/blog/introducing-drift-search-combining-global-and-local-search-methods-to-improve-quality-and-efficiency/) - DRIFT search mechanism for GraphRAG
- [GraphRAG: Improving Global Search via Dynamic Community Selection](https://www.microsoft.com/en-us/research/blog/graphrag-improving-global-search-via-dynamic-community-selection/) - Dynamic community selection for improved global search
- [Moving to GraphRAG 1.0 - Streamlining Ergonomics](https://www.microsoft.com/en-us/research/blog/moving-to-graphrag-1-0-streamlining-ergonomics-for-developers-and-users/) - GraphRAG 1.0 release and developer experience improvements
- [What is GraphRAG? - IBM](https://www.ibm.com/think/topics/graphrag) - IBM's overview of GraphRAG and its advantages over baseline RAG
- [GraphRAG: The Complete Guide to Graph-Powered RAG](https://medium.com/@brian-curry-research/graphrag-the-complete-guide-to-graph-powered-retrieval-augmented-generation-eeb58a6bb4d1) - In-depth guide to GraphRAG concepts and implementation
- [GraphRAG: Knowledge Graph Enhanced Retrieval Augmented Generation](https://calmops.com/algorithms/graphrag-hybrid-retrieval/) - Technical deep-dive into GraphRAG hybrid retrieval with 85%+ accuracy
- [GraphRAG with a Knowledge Graph](https://graphrag.com/) - GraphRAG pattern catalogue and community resource
- [The GraphRAG Manifesto](https://neo4j.com/blog/graphrag-manifesto/) - Neo4j's manifesto on why knowledge graphs are essential for next-generation RAG
- [GraphRAG Field Guide: Navigating the World of Advanced RAG Patterns](https://neo4j.com/developer-blog/graphrag-field-guide-rag-patterns/) - Neo4j's field guide to advanced GraphRAG patterns
- [Implementing GraphRAG with Neo4j, GDS and LangChain](https://neo4j.com/developer-blog/global-graphrag-neo4j-langchain/) - Practical implementation guide for GraphRAG with Neo4j
- [Document GraphRAG: Knowledge Graph Enhanced RAG (MDPI)](https://www.mdpi.com/2079-9292/14/11/2102) - Document GraphRAG framework for improved retrieval robustness

### Graph Memory for LLM Agents

- [AriGraph: Learning Knowledge Graph World Models with Episodic Memory (IJCAI'25)](https://arxiv.org/abs/2407.04363) - Knowledge graph world model integrating semantic and episodic memories for LLM agents
- [HyperMem: Hypergraph Memory for Long-Term Conversations (ACL'26)](https://arxiv.org/abs/2604.08256) - Hypergraph-based hierarchical memory architecture for long-term conversations
- [HingeMem: Boundary Guided Long-Term Memory with Query Adaptive Retrieval (WWW'26)](https://arxiv.org/abs/2604.06845) - Boundary-guided long-term memory with event segmentation theory
- [GAAMA: Graph Augmented Associative Memory for Agents](https://arxiv.org/abs/2603.27910) - Graph-augmented associative memory system with Personalized PageRank retrieval
- [GSEM: Graph-based Self-Evolving Memory for Experience Augmented Clinical Reasoning](https://arxiv.org/abs/2603.22096) - Dual-layer memory graph for clinical decision-making agents
- [ByteRover: Agent-Native Memory Through LLM-Curated Hierarchical Context](https://arxiv.org/abs/2604.01599) - Hierarchical Context Tree (file-based knowledge graph) for agent memory
- [HippoRAG: Retrieval-Augmented Generation Inspired by Hippocampal Memory (NeurIPS'24)](https://github.com/OSU-NLP-Group/HippoRAG) - RAG framework inspired by human long-term memory with hippocampal indexing
- [Comparing Memory Systems for LLM Agents: Vector, Graph, and Event Logs](https://www.marktechpost.com/2025/11/10/comparing-memory-systems-for-llm-agents-vector-graph-and-event-logs/) - Comparison of vector, graph, and event log memory systems for multi-agent planning
- [Graph Neural Networks: Structuring Memory for MAG Systems](https://www.linkedin.com/pulse/graph-neural-networks-structuring-memory-mag-systems-sarvex-jatasra-qcnjc) - How GNNs structure memory in Memory-Augmented Generation systems
- [SuperLocalMemory V3.3: The Living Brain](https://arxiv.org/abs/2604.04514) - Biologically-inspired agent memory with entity graph, spreading activation, and Ebbinghaus forgetting
- [Memory-augmented Query Reconstruction for LLM-based Knowledge Graph QA](https://aclanthology.org/2025.findings-acl.1234.pdf) - Memory-augmented query reconstruction for KGQA
- [Codebase-Memory: Tree-Sitter-Based Knowledge Graphs for LLM Code Exploration via MCP](https://arxiv.org/abs/2603.27277) - Persistent knowledge graph for codebase exploration via MCP
- [MemReward: Graph-Based Experience Memory for LLM Reward Prediction](https://arxiv.org/abs/2603.19310) - Heterogeneous graph for propagating rewards to unlabeled LLM rollouts

### Graph Learning & Foundation Models

- [Graph Meets LLMs: Towards Large Graph Models](https://arxiv.org/abs/2308.14522) - Vision for large graph models in the era of LLMs
- [Towards Graph Foundation Models: A Survey and Beyond](https://arxiv.org/abs/2310.11829) - Survey on building general-purpose graph foundation models
- [GraphGPT: Graph Instruction Tuning for Large Language Models (SIGIR'24)](https://arxiv.org/abs/2310.13023) - Graph instruction tuning framework aligning LLMs with graph structures
- [Graph Machine Learning in the Era of Large Language Models](https://arxiv.org/abs/2404.14928) - Survey on combining graph ML with LLM capabilities
- [Talk Like a Graph: Encoding Graphs for Large Language Models (ICLR'24)](https://arxiv.org/abs/2310.04560) - Methods for encoding graph structures for LLM consumption
- [Graph Chain-of-Thought: Augmenting LLMs by Reasoning on Graphs (ACL'24)](https://arxiv.org/abs/2404.07103) - Chain-of-thought reasoning over graph structures
- [LLaGA: Large Language and Graph Assistant (ICML'24)](https://arxiv.org/abs/2402.08170) - General-purpose graph-language model assistant
- [HiGPT: Heterogeneous Graph Language Model (KDD'24)](https://arxiv.org/abs/2402.16024) - Heterogeneous graph language model for diverse graph reasoning
- [UniGraph: Learning a Cross-Domain Graph Foundation Model From Natural Language (KDD'25)](https://arxiv.org/abs/2402.13630) - Cross-domain graph foundation model using natural language
- [GOFA: A Generative One-For-All Model for Joint Graph Language Modeling (ICLR'25)](https://arxiv.org/abs/2407.09709) - Joint graph-language modeling approach
- [Riemannian Geometry Speaks Louder Than Words: From Graph Foundation Model to Next-Generation Graph Intelligence](https://arxiv.org/abs/2603.21601) - Riemannian Foundation Model for next-generation graph intelligence
- [From Static Templates to Dynamic Runtime Graphs: Workflow Optimization for LLM Agents](https://arxiv.org/abs/2603.22386) - Survey of agentic computation graph optimization

### Neo4j & Graph Database Ecosystem

- [Neo4j GenAI Ecosystem](https://neo4j.com/labs/genai-ecosystem/) - Neo4j's complete GenAI ecosystem with GraphRAG tools, MCP servers, and framework integrations
- [Neo4j Developer Blog: LLMs](https://neo4j.com/developer-blog/tagged/llm/) - Neo4j's developer blog posts on LLM integration
- [GraphAcademy: Neo4j & LLM Courses](https://graphacademy.neo4j.com/categories/llms/) - Free courses on Neo4j + LLM integration
- [Tomaz Bratanic's Medium Blog](https://bratanic-tomaz.medium.com/) - Neo4j developer blog on GraphRAG and knowledge graphs
- [Unifying Large Language Models and Knowledge Graphs](https://neo4j.com/blog/unifying-llm-knowledge-graph/) - Neo4j's overview of LLM + KG integration

### LLM+Graph Workshops & Conferences

- [LLM+Graph Workshop 2025](https://seucoin.github.io/workshop/llmg2025/) - Workshop on LLMs and graph data interactions
- [LLM-Empowered Knowledge Graphs](https://www.emergentmind.com/topics/llm-empowered-knowledge-graph-construction) - Emergent Mind's curated KG+LLM resource page

---

## Repositories

### GraphRAG & Knowledge Graph RAG

- [microsoft/graphrag](https://github.com/microsoft/graphrag) - Microsoft's modular graph-based RAG system (32k+ stars)
- [microsoft/benchmark-qed](https://github.com/microsoft/benchmark-qed) - Automated benchmarking of RAG systems
- [Graph-RAG/GraphRAG](https://github.com/Graph-RAG/GraphRAG) - Survey repository for GraphRAG paper with comprehensive bibliography
- [OSU-NLP-Group/HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG) - HippoRAG: RAG framework inspired by hippocampal memory (3.4k stars, NeurIPS'24)
- [neo4j/neo4j-graphrag-python](https://github.com/neo4j/neo4j-graphrag-python) - Neo4j's official GraphRAG Python package

### Graph Memory Systems for LLMs

- [gannonh/memento-mcp](https://github.com/gannonh/memento-mcp) - Memento MCP: Knowledge Graph Memory System for LLMs (Neo4j-based)
- [verygoodplugins/automem](https://github.com/verygoodplugins/automem) - Graph-vector memory service with Qdrant for AI assistants (700+ stars)
- [Dataojitori/nocturne_memory](https://github.com/Dataojitori/nocturne_memory) - Long-Term Memory Server for MCP Agents, visual and rollbackable (940+ stars)
- [InfinitiBit/graphbit](https://github.com/InfinitiBit/graphbit) - Enterprise-grade agentic AI framework with Rust core and graph memory
- [0xK3vin/MegaMemory](https://github.com/0xK3vin/MegaMemory) - Persistent project knowledge graph for coding agents via MCP
- [pacifio/cersei](https://github.com/pacifio/cersei) - Rust SDK for building coding agents with graph memory and sub-agent orchestration
- [TuGraph-family/chat2graph](https://github.com/TuGraph-family/chat2graph) - Graph Native Agentic System (410+ stars)
- [microsoft/RPG-ZeroRepo](https://github.com/microsoft/RPG-ZeroRepo) - Repository Planning Graph for codebase generation (ICLR 2026)
- [qualixar/superlocalmemory](https://github.com/qualixar/superlocalmemory) - Local-first agent memory with entity graph and spreading activation
- [xhan1022/gsem](https://github.com/xhan1022/gsem) - Graph-based Self-Evolving Memory for clinical reasoning

### Awesome Lists & Curated Collections

- [XiaoxinHe/Awesome-Graph-LLM](https://github.com/XiaoxinHe/Awesome-Graph-LLM) - Curated collection of Graph-Related LLM papers (2.4k stars)
- [HKUDS/Awesome-LLM4Graph-Papers](https://github.com/HKUDS/Awesome-LLM4Graph-Papers) - Survey of LLMs for Graphs paper collection
- [yhLeeee/Awesome-LLMs-in-Graph-tasks](https://github.com/yhLeeee/Awesome-LLMs-in-Graph-tasks) - Awesome list of LLMs applied to graph tasks
- [PeterGriffinJin/Awesome-Language-Model-on-Graphs](https://github.com/PeterGriffinJin/Awesome-Language-Model-on-Graphs) - Language models on graphs paper collection

### Graph Foundation Models & General Graph LLMs

- [HKUDS/GraphGPT](https://github.com/HKUDS/GraphGPT) - Graph Instruction Tuning for LLMs
- [HKUDS/HiGPT](https://github.com/HKUDS/HiGPT) - Heterogeneous Graph Language Model
- [HKUDS/AnyGraph](https://github.com/HKUDS/AnyGraph) - Graph Foundation Model in the Wild
- [HKUDS/GraphEdit](https://github.com/HKUDS/GraphEdit) - LLMs for Graph Structure Learning
- [VITA-Group/LLaGA](https://github.com/VITA-Group/LLaGA) - Large Language and Graph Assistant
- [LechengKong/OneForAll](https://github.com/LechengKong/OneForAll) - Training one graph model for all classification tasks
- [JiaruiFeng/GOFA](https://github.com/JiaruiFeng/GOFA) - Generative One-For-All Model for Joint Graph Language Modeling
- [alibaba/GraphTranslator](https://github.com/alibaba/GraphTranslator) - Aligning Graph Model to LLM for Open-ended Tasks
- [agiresearch/InstructGLM](https://github.com/agiresearch/InstructGLM) - Natural Language is All a Graph Needs

### Graph Reasoning & Benchmarks

- [PeterGriffinJin/Graph-CoT](https://github.com/PeterGriffinJin/Graph-CoT) - Graph Chain-of-Thought for augmenting LLMs
- [nuochenpku/Graph-Reasoning-LLM](https://github.com/nuochenpku/Graph-Reasoning-LLM) - GraphWiz: Instruction-following model for graph problems
- [Arthur-Heng/NLGraph](https://github.com/Arthur-Heng/NLGraph) - Can Language Models Solve Graph Problems in Natural Language?
- [squareRoot3/GraphArena](https://github.com/squareRoot3/GraphArena) - Evaluating LLMs on Graph Computation (ICLR'25)
- [NineAbyss/GLBench](https://github.com/NineAbyss/GLBench) - Comprehensive benchmark for Graph with LLMs

### Neo4j & LLM Integrations

- [neo4j-contrib/neo4j-apoc-procedures](https://github.com/neo4j-contrib/neo4j-apoc-procedures) - APOC procedures including GenAI integration
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) - LangChain with Neo4j vector/graph integration
- [run-llama/llama_index](https://github.com/run-llama/llama_index) - LlamaIndex with Neo4j Knowledge Graph support
- [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) - Turn any knowledge base into an interactive knowledge graph (8.3k stars)

---

## Videos

### Microsoft GraphRAG Series

- [GraphRAG: Unlocking LLM Discovery on Narrative Private Data - Microsoft Research](https://www.microsoft.com/en-us/research/video/claimify-extracting-high-quality-claims-from-language-model-outputs/) - Microsoft Research overview of GraphRAG
- [Claimify: Extracting High-Quality Claims from LLM Outputs](https://www.microsoft.com/en-us/research/video/claimify-extracting-high-quality-claims-from-language-model-outputs/) - Video on claim extraction for GraphRAG
- [VeriTrail: Detecting Hallucination and Tracing Provenance in AI Workflows](https://www.microsoft.com/en-us/research/video/veritrail-detect-hallucination-and-trace-provenance-in-ai-workflows/) - Video on hallucination detection in graph workflows

### Neo4j & Knowledge Graph Videos

- [Neo4j YouTube Channel](https://www.youtube.com/neo4j) - Official Neo4j channel with GraphRAG tutorials and talks
- [Unifying Large Language Models and Knowledge Graphs - Neo4j](https://neo4j.com/blog/unifying-llm-knowledge-graph/) - Talk on LLM + KG integration with video
- [DeepLearning.AI Knowledge Graph Course](https://dev.neo4j.com/dlai-kg) - Free DeepLearning.AI course on knowledge graphs for AI
- [GraphAcademy GenAI Courses](https://graphacademy.neo4j.com/categories/llms/) - Neo4j's free GenAI courses with video content
- [Neo4j & LLM Fundamentals Course](https://graphacademy.neo4j.com/courses/llm-fundamentals/) - Free course on Neo4j + LLM integration
- [Build a Chatbot with Python and Neo4j](https://graphacademy.neo4j.com/courses/llm-chatbot-python/) - Hands-on course building a GraphRAG chatbot

### Conference Talks & Tutorials

- [LLM+Graph Workshop 2025](https://seucoin.github.io/workshop/llmg2025/) - Workshop on LLMs and graph data with presentations
- [AAAI 2025 Tutorial: Graph Neural Networks](https://gnn.seas.upenn.edu/wp-content/uploads/2025/02/AAAI_Tutorial_MNN-1.pdf) - AAAI tutorial slides on GNN architectures
- [LLMs as Zero-shot Graph Learners](https://arxiv.org/abs/2408.14512) - Paper with video presentation on aligning GNN representations with LLM token embeddings

### Graph Learning & GNN Videos

- [Graph Neural Networks: An In-Depth Introduction - GeeksForGeeks](https://www.geeksforgeeks.org/deep-learning/graph-neural-networks-an-in-depth-introduction-and-practical-applications/) - Comprehensive GNN introduction with visual explanations
- [Graph Neural Networks - Wikipedia](https://en.wikipedia.org/wiki/Graph_neural_network) - Overview with references to key GNN tutorials and videos
- [NVIDIA MeshGraphNet Tutorial](https://docs.nvidia.com/physicsnemo/latest/user-guide/model_architecture/meshgraphnet.html) - NVIDIA tutorial on MeshGraphNet GNN architecture

### Community & Educational Content

- [GraphRAG Discord](http://discord.gg/graphrag) - Community Discord for GraphRAG discussions and help
- [Tomaz Bratanic's Medium Blog](https://bratanic-tomaz.medium.com/) - Neo4j developer with numerous GraphRAG video tutorials
- [Joshua Yu's Medium Blog](https://medium.com/@yu-joshua) - Knowledge graph and LLM integration articles
- [DataCamp: GraphRAG Tutorial](https://www.datacamp.com/tutorial/graphrag) - DataCamp tutorial on Graph-Based Retrieval-Augmented Generation
- [(Free) Knowledge Graph Book](https://dev.neo4j.com/free-kg-book) - Free comprehensive knowledge graph book by Neo4j
- [Neo4j Graph Data Science Fundamentals Course](https://graphacademy.neo4j.com/courses/gds-product-introduction/) - Free course on graph data science algorithms

---

## Additional Key Resources

### Arxiv Search Results (276+ papers)
- [Arxiv: graph memory LLM search results](https://arxiv.org/search/?query=graph+memory+LLM&searchtype=all&order=-announced_date_first) - 276+ papers matching "graph memory LLM"
- [Arxiv: GraphRAG search results](https://arxiv.org/search/?query=graphRAG&searchtype=all) - Growing collection of GraphRAG papers
- [Arxiv: knowledge graph LLM memory](https://arxiv.org/search/?query=knowledge+graph+LLM+memory&searchtype=all) - Papers on KG-based LLM memory

### Key Search Queries for Further Research
- `graph memory LLM agent architecture`
- `knowledge graph augmented generation`
- `graph neural network temporal memory`
- `neo4j GraphRAG implementation`
- `hippocampal memory LLM knowledge graph`
- `hypergraph memory conversation`
- `graph-based experience memory reinforcement learning`
- `structured memory LLM knowledge graph`
- `graph retrieval augmented generation survey`
- `knowledge graph embedding memory systems`

---

*Last updated: April 2026. Total resources: 120+*
