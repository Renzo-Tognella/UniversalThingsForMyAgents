# Advanced RAG Variations & New RAG Techniques

Comprehensive collection of resources on next-generation Retrieval Augmented Generation techniques, including GraphRAG, Self-RAG, CRAG, Agentic RAG, Modular RAG, and more.

---

## Surveys & Foundational Papers

- [Retrieval-Augmented Generation for Large Language Models: A Survey](https://arxiv.org/abs/2312.10997) - Comprehensive survey covering Naive RAG, Advanced RAG, and Modular RAG paradigms with evaluation frameworks
- [Seven Failure Points When Engineering a RAG System](https://arxiv.org/abs/2401.05856) - Identifies 7 common failure points in RAG systems with lessons from case studies across research, education, and biomedical domains
- [Dense Passage Retrieval for Open-Domain Question Answering (DPR)](https://arxiv.org/abs/2004.04906) - Foundational paper on dense vector representations for passage retrieval, outperforming BM25 by 9-19%
- [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) - Programming model for systematically optimizing RAG pipelines without manual prompt engineering
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al.)](https://arxiv.org/abs/2005.11401) - The original RAG paper introducing the paradigm of combining retrieval with generation
- [A Survey on Retrieval-Augmented Text Generation](https://arxiv.org/abs/2202.01110) - Early survey covering retrieval-augmented methods for various text generation tasks
- [Benchmarking Large Language Models for Retrieval-Augmented Generation](https://arxiv.org/abs/2403.09673) - RAGAS framework for automated evaluation of RAG systems
- [Facet-Level Tracing of Evidence Uncertainty and Hallucination in RAG](https://arxiv.org/abs/2604.09174) - Decomposes RAG evaluation into atomic reasoning facets with evidence sufficiency analysis
- [ClashEval: Quantifying the tug-of-war between an LLM's internal prior and external evidence](https://arxiv.org/abs/2404.10198) - Studies how LLMs handle conflicting retrieved information vs internal knowledge
- [GuarantRAG: Guaranteeing Knowledge Integration with Joint Decoding](https://arxiv.org/abs/2604.08046) - Decouples reasoning from evidence integration to improve accuracy by up to 12.1%
- [Beyond Relevance: Utility-Centric Retrieval in the LLM Era](https://arxiv.org/abs/2604.08920) - Argues retrieval objectives must evolve from relevance to LLM-centric utility
- [Securing Retrieval-Augmented Generation: A Taxonomy of Attacks, Defenses, and Future Directions](https://arxiv.org/abs/2604.08304) - Comprehensive security analysis of RAG systems

## GraphRAG & Knowledge Graph-Enhanced RAG

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](https://arxiv.org/abs/2404.16130) - Microsoft's GraphRAG paper using LLM-generated knowledge graphs for whole-dataset reasoning
- [GraphRAG: Unlocking LLM discovery on narrative private data](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/) - Microsoft Research blog introducing GraphRAG
- [GraphRAG Official Documentation](https://microsoft.github.io/graphrag/) - Official docs for Microsoft GraphRAG with indexing, query modes (Global, Local, DRIFT), and configuration
- [Moving to GraphRAG 1.0 - Streamlining ergonomics](https://www.microsoft.com/en-us/research/blog/moving-to-graphrag-1-0-streamlining-ergonomics-for-developers-and-users/) - GraphRAG 1.0 release with improved developer experience
- [LazyGraphRAG: Setting a new standard for quality and cost](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/) - Cost-efficient variant of GraphRAG
- [GraphRAG: Improving global search via dynamic community selection](https://www.microsoft.com/en-us/research/blog/graphrag-improving-global-search-via-dynamic-community-selection/) - Dynamic community selection for improved global search
- [HyperMem: Hypergraph Memory for Long-Term Conversations](https://arxiv.org/abs/2604.08256) - Hypergraph-based hierarchical memory architecture capturing high-order associations (92.73% accuracy on LoCoMo)
- [RAG with Knowledge Graphs - LlamaIndex Guide](https://docs.llamaindex.ai/en/stable/examples/query_engine/knowledge_graph_query_engine/) - LlamaIndex tutorial on building RAG with knowledge graphs
- [LightRAG: Simple and Fast Retrieval-Augmented Generation](https://github.com/HKUDS/LightRAG) - Lightweight graph-enhanced RAG framework
- [GRAG: Graph-Based Retrieval-Augmented Generation](https://arxiv.org/abs/2405.19106) - Graph-structured retrieval for complex multi-hop reasoning
- [KG-RAG: Knowledge Graph-RAG Integration](https://arxiv.org/abs/2405.04221) - Bridging knowledge graphs with RAG for biomedical applications
- [Microsoft GraphRAG GitHub Repository](https://github.com/microsoft/graphrag) - Official open-source GraphRAG implementation

## Self-RAG & Self-Reflective RAG

- [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://arxiv.org/abs/2310.11511) - Framework where the LM adaptively retrieves, generates reflection tokens, and self-critiques
- [Self-RAG GitHub Repository](https://github.com/AkariAsai/self-rag) - Official implementation of Self-RAG
- [Self-RAG: Learning to Retrieve, Generate, and Critique - Paper page](https://selfrag.github.io/) - Project page with models, data, and demos
- [VerifAI: Verifiable Open-Source Search Engine with Post-Hoc Claim Verification](https://arxiv.org/abs/2604.08549) - RAG with decomposed atomic claim verification using NLI

## Corrective RAG (CRAG)

- [Corrective Retrieval Augmented Generation (CRAG)](https://arxiv.org/abs/2401.15884) - Lightweight retrieval evaluator with confidence-triggered knowledge retrieval actions and web search augmentation
- [CRAG Implementation in LangGraph](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_crag/) - LangGraph tutorial implementing Corrective RAG pattern
- [Corrective RAG with LangChain](https://blog.langchain.dev/langgraph-0-2/) - LangGraph 0.2 with corrective RAG workflows

## Adaptive RAG

- [Adaptive-RAG: Learning to Adapt Retrieval-Augmented LMs through Question Complexity](https://arxiv.org/abs/2403.14403) - Dynamically selects retrieval strategies based on query complexity
- [Adaptive-RAG GitHub](https://github.com/starz-sonyun/Adaptive-RAG) - Implementation of adaptive retrieval-augmented generation

## Agentic RAG

- [Agentic RAG with LangGraph](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/) - Tutorial building agent-based RAG with tool use and iterative retrieval
- [Agentic Retrieval-Augmented Generation: A Survey](https://arxiv.org/abs/2501.09936) - Comprehensive survey on agentic RAG patterns
- [Building Agentic RAG with LlamaIndex](https://docs.llamaindex.ai/en/stable/understanding/agentic_rag/) - LlamaIndex guide to building agentic RAG workflows
- [Agentic Document QA with RAG](https://weaviate.io/blog/agentic-rag-tutorial) - Weaviate tutorial on building agentic RAG systems
- [PRIME: Proactive Reasoning via Iterative Memory Evolution](https://arxiv.org/abs/2604.07645) - Gradient-free agentic learning framework with RAG-guided experience accumulation
- [VISOR: Agentic Visual RAG via Iterative Search and Over-horizon Reasoning](https://arxiv.org/abs/2604.09508) - Agentic VRAG framework with progressive cross-page reasoning
- [Weaviate Agentic AI](https://weaviate.io/agentic-ai) - Weaviate's agentic AI solutions page

## Modular RAG

- [Modular RAG: Transforming RAG Systems into Next-Gen](https://arxiv.org/abs/2407.21059) - Survey on modular RAG paradigm with interchangeable components
- [RAGFlow: Next-Gen RAG Engine](https://github.com/infiniflow/ragflow) - Open-source RAG engine with deep document understanding and modular pipeline
- [DCD: Domain-Oriented Design for Controlled RAG](https://arxiv.org/abs/2604.07590) - Hierarchical decomposition for structured knowledge in RAG without modifying the LLM
- [QAnything: Local RAG with Modular Architecture](https://github.com/netease-youdao/QAnything) - NetEase's modular RAG system supporting multiple file formats

## Reranking & Retrieval Optimization

- [ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction](https://arxiv.org/abs/2004.12832) - Late interaction model for fine-grained relevance estimation
- [RAGatouille: A Library for Advanced Retrieval Methods](https://github.com/bclavie/RAGatouille) - Library integrating ColBERT and other advanced retrieval methods
- [Mixedbread Reranking Models](https://www.mixedbread.ai/blog/mxbai-rerank-v1) - State-of-the-art reranking models for RAG pipelines
- [Cohere Rerank](https://docs.cohere.com/docs/reranking) - Commercial reranking API for improving RAG retrieval quality
- [Jina Reranker](https://jina.ai/reranker/) - Fast neural reranker for search and RAG
- [FlashRank: Ultra-lite Reranking for Search and RAG](https://github.com/PrithivirajDamodaran/FlashRank) - Lightweight reranking library for RAG pipelines
- [FlagEmbedding: BGE Reranker](https://github.com/FlagOpen/FlagEmbedding) - BAAI's embedding and reranking models
- [MAB-DQA: Multi-Armed Bandit for Document QA with RAG](https://arxiv.org/abs/2604.08952) - Uses multi-armed bandits to model varying importance of query aspects

## Query Transformation & Expansion

- [Query Rewriting for Retrieval-Augmented Large Language Models](https://arxiv.org/abs/2305.14283) - Methods for query rewriting to improve retrieval quality
- [Multi-Query Retrieval with LlamaIndex](https://docs.llamaindex.ai/en/stable/examples/query_engine/RetrieverQueryEngine_multi/) - Multi-query approach generating multiple query variants
- [HyDE: Precise Zero-Shot Dense Retrieval without Relevance Labels](https://arxiv.org/abs/2212.10496) - Hypothetical Document Embeddings for improved zero-shot retrieval
- [Step-Back Prompting for RAG](https://arxiv.org/abs/2310.06117) - Abstracting queries to higher-level concepts for better retrieval
- [Query2Doc: Query Expansion with LLM-generated Pseudo-documents](https://arxiv.org/abs/2303.07678) - Using LLM-generated documents to expand queries

## Chunking Strategies

- [Chunking Strategies for LLM Applications](https://www.pinecone.io/learn/chunking-strategies/) - Pinecone's comprehensive guide to text chunking methods
- [Semantic Chunking with LlamaIndex](https://docs.llamaindex.ai/en/stable/examples/node_parsers/semantic_chunking/) - Semantic-based chunking that splits on meaning boundaries
- [Late Chunking: Contextual Chunk Embeddings](https://jina.ai/news/late-chunking-in-long-context-embedding-models/) - Jina AI's approach to contextual chunk embeddings
- [Recursive Character Text Splitter](https://python.langchain.com/docs/modules/data_connection/document_transformers/recursive_text_splitter) - LangChain's recursive text splitting strategy
- [Document Layout Analysis for RAG](https://unstructured-io.github.io/unstructured/) - Unstructured.io for intelligent document parsing and chunking

## Hybrid Search & Multi-Modal RAG

- [Weaviate Hybrid Search](https://weaviate.io/hybrid-search) - Combining BM25 keyword search with vector similarity search
- [Pinecone Sparse-Dense Hybrid Search](https://docs.pinecone.io/guides/search/sparse-dense-hybrid-search) - Pinecone's approach to hybrid vector + sparse retrieval
- [Multimodal Embeddings and RAG: A Practical Guide](https://weaviate.io/blog/multimodal-guide) - Weaviate's guide to multimodal embeddings across text, images, audio, video
- [ColPali: Efficient Document Retrieval with Vision Language Models](https://arxiv.org/abs/2407.01449) - Using VLMs for visual document retrieval without OCR
- [Multi-Modal Search with Pinecone and AWS](https://www.pinecone.io/learn/multi-modal-search/) - Pinecone whitepaper on building multimodal search applications
- [CLIP-based RAG for Image-Text Retrieval](https://arxiv.org/abs/2402.14848) - Combining CLIP embeddings with RAG for multimodal retrieval

## RAG Evaluation & Benchmarks

- [RAGAS: Automated Evaluation of RAG Systems](https://arxiv.org/abs/2309.15217) - Framework evaluating faithfulness, answer relevance, context precision/recall
- [RAGAS GitHub Repository](https://github.com/explodinggradients/ragas) - Open-source RAG evaluation library
- [ARES: Automated RAG Evaluation System](https://arxiv.org/abs/2311.09476) - Automated evaluation using predicted rewards and lightweight LLM judges
- [RAGChecker: Advanced RAG Evaluation Framework](https://arxiv.org/abs/2408.08067) - Fine-grained evaluation with claim-level metrics
- [TruLens for RAG Evaluation](https://www.trulens.org/) - Framework for evaluating and tracking RAG app quality (RAG triad: groundedness, relevance, coherence)
- [CRAG: Comprehensive RAG Benchmark](https://arxiv.org/abs/2406.04744) - Meta's benchmark covering 8 knowledge domains with dynamic question generation
- [RAG Performance Prediction for Question Answering](https://arxiv.org/abs/2604.07985) - Predicting RAG gain using pre/post-retrieval and post-generation predictors

## RAG vs Fine-Tuning

- [RAG vs Fine-Tuning: When to Use Which](https://www.anthropic.com/research/building-effective-agents) - Anthropic's perspective on when to use RAG versus fine-tuning
- [RAFT: Retrieval Augmented Fine Tuning](https://arxiv.org/abs/2403.10131) - Combining RAG with fine-tuning by training on documents with distractors
- [When to Use RAG vs Fine-Tuning vs Both](https://www.pinecone.io/learn/rag-vs-fine-tuning/) - Pinecone's guide comparing RAG and fine-tuning approaches
- [RAG vs Fine-Tuning: A Comprehensive Comparison](https://arxiv.org/abs/2406.00734) - Systematic comparison of RAG and fine-tuning across dimensions

## Semantic Caching & Efficiency

- [GPTCache: Creating Semantic Cache for LLM Queries](https://github.com/zilliztech/GPTCache) - Open-source semantic cache to reduce LLM API calls
- [Semantic Caching for RAG with Redis](https://redis.io/blog/semantic-caching-redis/) - Using Redis for semantic caching in RAG pipelines
- [K2K: Efficient Internal Memory Retrieval for Healthcare RAG](https://arxiv.org/abs/2604.07659) - Replacing external retrieval with internal key-based knowledge access

## Frameworks & Libraries

- [LlamaIndex Advanced RAG Documentation](https://docs.llamaindex.ai/en/stable/optimizing/advanced_rag/) - LlamaIndex guide to advanced RAG patterns (sentence-window, auto-merging, etc.)
- [LangChain RAG Tutorials](https://python.langchain.com/docs/tutorials/rag/) - LangChain's RAG tutorials with various retrieval strategies
- [LangGraph for Agentic RAG](https://langchain-ai.github.io/langgraph/) - Framework for building stateful, multi-actor RAG workflows
- [Haystack by deepset](https://haystack.deepset.ai/) - End-to-end framework for building search pipelines and RAG applications
- [LlamaIndex GitHub](https://github.com/run-llama/llama_index) - Data framework for LLM-based applications with advanced RAG
- [LangChain GitHub](https://github.com/langchain-ai/langchain) - Framework for developing LLM-powered applications
- [DSPy GitHub](https://github.com/stanfordnlp/dspy) - Stanford's framework for programming with foundation models
- [CrewAI for Multi-Agent RAG](https://github.com/crewAIInc/crewAI) - Multi-agent framework supporting RAG-equipped agents
- [Weaviate Vector Database](https://github.com/weaviate/weaviate) - Open-source vector database with built-in RAG capabilities
- [Pinecone Vector Database](https://www.pinecone.io/) - Managed vector database for AI applications
- [Chroma: AI-native Embedding Database](https://github.com/chroma-core/chroma) - Open-source embedding database for RAG

## Context Engineering & Window Management

- [What is Context Engineering?](https://www.pinecone.io/learn/context-engineering/) - Pinecone's guide to context engineering for RAG
- [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) - Study showing LLMs struggle with information in the middle of long contexts
- [LongContext RAG with LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/advanced_rag/long_context_rag/) - RAG strategies optimized for long-context LLMs
- [Knowledge Needs a Meta-Knowledge Layer](https://www.pinecone.io/learn/series/beyond-retrieval/knowledge-needs-meta-knowledge/) - Pinecone series on building meta-knowledge for better retrieval
- [True, Relevant, and Wrong: The Applicability Problem in RAG](https://www.pinecone.io/learn/series/beyond-retrieval/rag-applicability-problem/) - Analysis of when retrieved information is technically relevant but wrong for the use case
- [Multi-domain RAG in n8n](https://www.pinecone.io/learn/n8n-multi-domain-rag-knowledge-base/) - Why one knowledge base is not enough for production RAG

## RAG Security

- [RAG with Access Control](https://www.pinecone.io/learn/rag-access-control/) - Implementing access control in RAG systems
- [Securing Enterprise AI with Weaviate](https://weaviate.io/blog/weaviate-security-enterprise) - Complete guide to OIDC, RBAC, and multi-tenant isolation
- [Trans-RAG: Query-Centric Vector Transformation for Secure RAG](https://arxiv.org/abs/2604.09541) - Secure cross-organizational RAG with mathematically isolated semantic spaces
- [PA-LLM-RAG: Policy-Aware Edge LLM-RAG](https://arxiv.org/abs/2604.09493) - Edge-deployed RAG with policy compliance for mission-critical systems

## Videos & Tutorials

- [Advanced RAG Techniques 2025 - Full Course](https://www.youtube.com/watch?v=Z4JV7YlQvY8) - Comprehensive tutorial on advanced RAG patterns
- [GraphRAG Explained - Microsoft Research](https://www.youtube.com/watch?v=r3AipMOzbOo) - Microsoft's explanation of GraphRAG architecture
- [Self-RAG and CRAG Explained](https://www.youtube.com/watch?v=jbGch0TLKc0) - Tutorial comparing Self-RAG and Corrective RAG approaches
- [Building Production RAG with LangChain](https://www.youtube.com/watch?v=LhnM1mCL0t0) - LangChain's guide to production-ready RAG
- [Advanced RAG with LlamaIndex - Deep Dive](https://www.youtube.com/watch?v=4lM4M_VQrnI) - LlamaIndex deep dive into advanced RAG patterns
- [Agentic RAG Explained](https://www.youtube.com/watch?v=aH4PvWnPanM) - Tutorial on building agentic RAG systems
- [RAG Evaluation with RAGAS](https://www.youtube.com/watch?v=lc3K70YwpBs) - Tutorial on evaluating RAG systems with RAGAS
- [Hybrid Search for RAG](https://www.youtube.com/watch?v=FnD7YmxXq6o) - Weaviate tutorial on hybrid search in RAG
- [RAG vs Fine-Tuning vs Prompt Engineering](https://www.youtube.com/watch?v=UE2KTVw3SMo) - Comparison of different LLM customization approaches
- [Building RAG with Knowledge Graphs](https://www.youtube.com/watch?v=Bfidmr5WyuY) - Tutorial on combining knowledge graphs with RAG
- [RAG From Scratch - LangChain Series](https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQKgKofIhb) - LangChain's complete RAG from scratch playlist
- [Multi-Modal RAG Explained](https://www.youtube.com/watch?v=Y1lHfim5Cjo) - Tutorial on building multi-modal RAG systems

## Notable Repositories

- [microsoft/graphrag](https://github.com/microsoft/graphrag) - Microsoft's GraphRAG implementation
- [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) - Stanford's DSPy framework for programming with foundation models
- [run-llama/llama_index](https://github.com/run-llama/llama_index) - LlamaIndex data framework for LLM apps
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) - LangChain framework
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) - LangGraph for stateful RAG workflows
- [explodinggradients/ragas](https://github.com/explodinggradients/ragas) - RAG evaluation framework
- [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) - Lightweight graph-enhanced RAG
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) - Deep document understanding RAG engine
- [FlagOpen/FlagEmbedding](https://github.com/FlagOpen/FlagEmbedding) - BAAI's embedding and reranking models
- [bclavie/RAGatouille](https://github.com/bclavie/RAGatouille) - Advanced retrieval methods library
- [zilliztech/GPTCache](https://github.com/zilliztech/GPTCache) - Semantic cache for LLM queries
- [netease-youdao/QAnything](https://github.com/netease-youdao/QAnything) - Local knowledge QA system
- [PrithivirajDamodaran/FlashRank](https://github.com/PrithivirajDamodaran/FlashRank) - Ultra-lite reranking
- [weaviate/weaviate](https://github.com/weaviate/weaviate) - Open-source vector database
- [AkariAsai/self-rag](https://github.com/AkariAsai/self-rag) - Self-RAG implementation
- [starz-sonyun/Adaptive-RAG](https://github.com/starz-sonyun/Adaptive-RAG) - Adaptive RAG implementation

## Blog Posts & Articles

- [Beyond Retrieval Series - Pinecone](https://www.pinecone.io/learn/series/beyond-retrieval/) - Pinecone series on next-gen RAG challenges
- [Building A Legal RAG App in 36 Hours - Weaviate](https://weaviate.io/blog/legal-rag-app) - Weaviate's experience building production RAG
- [Weaviate Agent Skills](https://weaviate.io/blog/weaviate-agent-skills) - Agent workflows with single prompts
- [Oh Memories, Where'd You Go - Weaviate](https://weaviate.io/blog/engram-internal-use-case) - Dogfooding Weaviate's memory product with Claude Code
- [The Limit in the Loop - Weaviate](https://weaviate.io/blog/limit-in-the-loop) - Memory as infrastructure for AI agents
- [Context Engineering - Pinecone](https://www.pinecone.io/learn/context-engineering/) - Guide to context engineering for AI
- [Chunking Strategies - Pinecone](https://www.pinecone.io/learn/chunking-strategies/) - Comprehensive chunking guide
- [LangChain Blog](https://blog.langchain.dev/) - LangChain's blog with regular RAG updates
- [LlamaIndex Blog](https://www.llamaindex.ai/blog) - LlamaIndex blog with advanced RAG tutorials
- [Weaviate Blog](https://weaviate.io/blog) - Weaviate's blog on vector search and RAG
- [Pinecone Learning Center](https://www.pinecone.io/learn/) - Pinecone's comprehensive learning resources
- [Jina AI Late Chunking](https://jina.ai/news/late-chunking-in-long-context-embedding-models/) - Contextual chunk embeddings approach
- [LangSmith CLI & Skills](https://blog.langchain.dev/langsmith-cli-skills/) - LangChain's agent skills framework
- [Deep Agents Deploy - LangChain](https://blog.langchain.dev/deep-agents-deploy-an-open-alternative-to-claude-managed-agents/) - Open alternative to managed agents with RAG
- [Continual Learning for AI Agents - LangChain](https://blog.langchain.dev/continual-learning-for-ai-agents/) - Three layers of agent learning with RAG
- [Your Harness, Your Memory - LangChain](https://blog.langchain.dev/your-harness-your-memory/) - Agent harnesses and memory integration
