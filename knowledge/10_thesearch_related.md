# TheSearch - Related Research & Resources

## Hybrid Storage & Search

- [Qdrant Hybrid Queries - RRF & DBSF Fusion](https://qdrant.tech/documentation/search/hybrid-queries/) - Native hybrid search with Reciprocal Rank Fusion and Distribution-Based Score Fusion
- [Hybrid Search with Reranking Tutorial](https://qdrant.tech/documentation/tutorials-search-engineering/reranking-hybrid-search/) - End-to-end hybrid search with reranking pipeline
- [Hybrid Search with FastEmbed](https://qdrant.tech/documentation/tutorials-search-engineering/hybrid-search-fastembed/) - Combining dense and sparse vectors using FastEmbed
- [Qdrant Search Relevance](https://qdrant.tech/documentation/search/search-relevance/) - Techniques for improving search quality and relevance scoring
- [Qdrant Low-Latency Search](https://qdrant.tech/documentation/search/low-latency-search/) - Optimizing search for real-time applications
- [Reciprocal Rank Fusion (Original Paper)](https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf) - Cormack et al. original RRF paper from SIGIR 2009
- [HetaRAG: Hybrid Deep Retrieval-Augmented Generation](https://arxiv.org/abs/2509.21336) - Orchestrating cross-modal evidence from heterogeneous data stores (vector, graph, full-text, relational)
- [STABLE: Efficient Hybrid Nearest Neighbor Search](https://arxiv.org/abs/2604.01617) - Robust hybrid ANNS handling data distribution heterogeneity
- [Allan-Poe: All-in-one Graph-based Indexing for Hybrid Search](https://arxiv.org/abs/2511.00855) - Unified graph index integrating dense, sparse, and full-text retrieval on GPUs
- [The Hybrid Multimodal Graph Index (HMGI)](https://arxiv.org/abs/2510.10123) - Framework bridging vector databases and graph databases for unified hybrid queries
- [Filtered ANN Search in Vector Databases](https://arxiv.org/abs/2602.11443) - System design and performance analysis for filtered approximate nearest neighbor search

## Neo4j & Knowledge Graphs

- [Neo4j Documentation](https://neo4j.com/docs/) - Official Neo4j documentation hub
- [Neo4j Python Driver](https://neo4j.com/docs/python-manual/current/) - Async Python driver for Neo4j
- [Cypher Query Language Manual](https://neo4j.com/docs/cypher-manual/current/) - Complete Cypher reference
- [Neo4j Vector Search Indexes](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/) - Native vector search within Neo4j
- [Neo4j Vector Search Functions](https://neo4j.com/docs/cypher-manual/current/functions/vector/) - Built-in vector similarity functions
- [Neo4j Embeddings & Vector Indexes Tutorial](https://neo4j.com/docs/genai/tutorials/embeddings-vector-indexes/) - GenAI integration tutorial for vector embeddings
- [Neo4j GraphRAG for Python](https://neo4j.com/docs/neo4j-graphrag-python/current/) - Official GraphRAG Python library
- [Neo4j Graph Data Science Library](https://neo4j.com/docs/graph-data-science/current/) - Graph algorithms and ML for knowledge graph analysis
- [Neo4j GenAI Integrations](https://neo4j.com/docs/cypher-manual/current/genai-integrations/) - LLM integration functions in Cypher
- [Neo4j Graph Data Modeling Course](https://graphacademy.neo4j.com/courses/modeling-fundamentals/?ref=docs-nav) - GraphAcademy data modeling fundamentals
- [Neo4j & LLM Fundamentals Course](https://graphacademy.neo4j.com/courses/llm-fundamentals/?ref=docs-nav) - GraphAcademy course on Neo4j + LLMs
- [MediGRAF: Hybrid Graph RAG for Clinical AI](https://arxiv.org/abs/2602.00009) - Combining Neo4j Text2Cypher with vector embeddings for EHR patient QA
- [Path-Constrained Retrieval (PCR)](https://arxiv.org/abs/2511.18313) - Combining structural graph constraints with semantic search for reliable LLM reasoning
- [Deterministic Legal Agents](https://arxiv.org/abs/2510.06002) - Auditable reasoning over temporal knowledge graphs with primitive APIs
- [CubeGraph: Efficient RAG for Spatial-Temporal Data](https://arxiv.org/abs/2604.06616) - Dynamic graph stitching for hybrid vector-spatial queries

## Qdrant & Vector Search

- [Qdrant Documentation](https://qdrant.tech/documentation/) - Official Qdrant documentation hub
- [Qdrant Quickstart](https://qdrant.tech/documentation/quickstart/) - Getting started with Qdrant
- [Qdrant Points](https://qdrant.tech/documentation/manage-data/points/) - Managing points (records with vectors + payload)
- [Qdrant Vectors](https://qdrant.tech/documentation/manage-data/vectors/) - Dense, sparse, and multi-vector configurations
- [Qdrant Payload](https://qdrant.tech/documentation/manage-data/payload/) - Payload (metadata) management for points
- [Qdrant Collections](https://qdrant.tech/documentation/manage-data/collections/) - Collection creation, configuration, and multitenancy
- [Qdrant Filtering](https://qdrant.tech/documentation/search/filtering/) - Advanced payload filtering with nested conditions
- [Qdrant Indexing](https://qdrant.tech/documentation/manage-data/indexing/) - Payload indexes, full-text indexes, tenant and principal indexes
- [Qdrant Quantization](https://qdrant.tech/documentation/manage-data/quantization/) - Scalar, product, and binary quantization
- [Qdrant Multitenancy](https://qdrant.tech/documentation/manage-data/multitenancy/) - Multi-user vector search with data isolation
- [Qdrant Async API](https://qdrant.tech/documentation/tutorials-develop/async-api/) - Python async client for non-blocking operations
- [Qdrant Bulk Operations](https://qdrant.tech/documentation/tutorials-develop/bulk-upload/) - Efficient batch ingestion of vectors
- [Qdrant Data Synchronization Patterns](https://qdrant.tech/documentation/edge/edge-data-synchronization-patterns/) - Patterns for syncing vector data between systems
- [Qdrant MCP Server](https://github.com/qdrant/mcp-server-qdrant) - Official Qdrant MCP server for LLM tool integration
- [FastEmbed & Qdrant](https://qdrant.tech/documentation/fastembed/fastembed-semantic-search/) - FastEmbed integration for local embedding generation
- [Qdrant Monitoring & Telemetry](https://qdrant.tech/documentation/operations/monitoring/) - Monitoring, metrics, and observability setup
- [Retrieval Quality Evaluation](https://qdrant.tech/documentation/tutorials-search-engineering/retrieval-quality/) - Evaluating and benchmarking search quality
- [Hippocampus: Efficient Memory Module for Agentic AI](https://arxiv.org/abs/2602.13594) - Compact binary signatures for semantic search in agentic memory

## MCP Protocol

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Official MCP specification and documentation
- [MCP Architecture Overview](https://modelcontextprotocol.io/docs/learn/architecture) - Core concepts: tools, resources, prompts, transport layers
- [Build MCP Servers](https://modelcontextprotocol.io/docs/develop/build-server) - Guide to creating MCP servers
- [Build MCP Clients](https://modelcontextprotocol.io/docs/develop/build-client) - Guide to creating MCP clients
- [MCP Specification](https://modelcontextprotocol.io/specification/latest) - Full protocol specification
- [FastMCP Documentation](https://gofastmcp.com/) - The standard Python framework for building MCP servers, clients, and apps
- [FastMCP Quickstart](https://gofastmcp.com/getting-started/quickstart) - Getting started with FastMCP
- [FastMCP Servers](https://gofastmcp.com/servers/server) - Building MCP servers with FastMCP
- [FastMCP Clients](https://gofastmcp.com/clients/client) - Connecting to MCP servers with FastMCP
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for MCP
- [MCP Reference Servers](https://github.com/modelcontextprotocol/servers) - Reference implementations of MCP servers

## Weight Systems & Memory Models

- [MemoriesDB: A Temporal-Semantic-Relational Database](https://arxiv.org/abs/2511.06179) - Unified time-series + vector + graph memory architecture with temporal-semantic surfaces
- [Domain-Contextualized Inference: 5-Layer Architecture](https://arxiv.org/abs/2604.04344) - Five-layer architecture for domain-scoped computation with substrate-agnostic execution
- [Ebbinghaus Forgetting Curve (Wikipedia)](https://en.wikipedia.org/wiki/Forgetting_curve) - Foundational model of memory decay that informs exponential weight decay
- [RAGdb: Embeddable Architecture for RAG on Edge](https://arxiv.org/abs/2602.22217) - Single-file knowledge container combining vector search with structured metadata

## Deduplication & Similarity

- [Jaro-Winkler Similarity (Wikipedia)](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance) - String similarity metric optimized for short strings like names
- [MinHash (Wikipedia)](https://en.wikipedia.org/wiki/MinHash) - Locality-sensitive hashing technique for estimating set similarity
- [Locality-Sensitive Hashing (Wikipedia)](https://en.wikipedia.org/wiki/Locality-sensitive_hashing) - Algorithm for approximate nearest neighbor search in high dimensions
- [Qdrant Search - Query Planning](https://qdrant.tech/documentation/search/search/) - How Qdrant plans search strategies including filter cardinality estimation
- [Qdrant Optimizer](https://qdrant.tech/documentation/operations/optimizer/) - Background optimization, segment merging, and vacuum processes

## Embeddings

- [Matryoshka Representation Learning (MRL)](https://arxiv.org/abs/2205.13147) - Embeddings at multiple granularity levels for efficient multi-stage search
- [ColBERT: Late Interaction Models](https://arxiv.org/abs/2112.01488) - Multi-vector representations for fine-grained token-level matching
- [Qdrant Multivectors & Late Interaction](https://qdrant.tech/documentation/tutorials-search-engineering/using-multivector-representations/) - Using multi-vector models like ColBERT with Qdrant
- [FastEmbed Quickstart](https://qdrant.tech/documentation/fastembed/fastembed-quickstart/) - Lightweight Python library for local embedding generation
- [FastEmbed with SPLADE](https://qdrant.tech/documentation/fastembed/fastembed-splade/) - Sparse embeddings via SPLADE for hybrid search
- [FastEmbed with ColBERT](https://qdrant.tech/documentation/fastembed/fastembed-colbert/) - Late interaction models for multi-vector retrieval
- [Qdrant Static Embeddings](https://qdrant.tech/documentation/tutorials-search-engineering/static-embeddings/) - Using static (non-contextual) embeddings for search

## Pydantic & Data Modeling

- [Pydantic Documentation](https://docs.pydantic.dev/latest/) - Official Pydantic v2 documentation
- [Pydantic Models](https://docs.pydantic.dev/latest/concepts/models/) - BaseModel, model validation, serialization
- [Pydantic Fields](https://docs.pydantic.dev/latest/concepts/fields/) - Field configuration, validators, and constraints
- [Pydantic JSON Schema](https://docs.pydantic.dev/latest/concepts/json_schema/) - Automatic JSON Schema generation from models
- [Pydantic Serialization](https://docs.pydantic.dev/latest/concepts/serialization/) - Model serialization and dump methods
- [Pydantic Validators](https://docs.pydantic.dev/latest/concepts/validators/) - Custom validation logic and field validators
- [Pydantic Settings Management](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) - Settings management for configuration
- [Pydantic Integrations: LLMs](https://docs.pydantic.dev/latest/integrations/llms/) - Using Pydantic with LLM providers for structured outputs
- [Pydantic AI](https://docs.pydantic.dev/docs/ai/overview/) - Agent framework built on Pydantic for type-safe AI applications
- [Pydantic Logfire](https://pydantic.dev/logfire) - Production observability platform for AI applications with OpenTelemetry

## Design Patterns for AI

- [Saga Pattern (Microservices.io)](https://microservices.io/patterns/data/saga.html) - Managing distributed transactions across services
- [Circuit Breaker Pattern (Microsoft)](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker) - Preventing cascading failures in distributed systems
- [Strategy Pattern (Refactoring.Guru)](https://refactoring.guru/design-patterns/strategy) - Runtime algorithm selection pattern
- [Chain of Responsibility (Refactoring.Guru)](https://refactoring.guru/design-patterns/chain-of-responsibility) - Passing requests along a chain of handlers
- [Repository Pattern (Microsoft)](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design) - Data access abstraction layer
- [Observer Pattern (Refactoring.Guru)](https://refactoring.guru/design-patterns/observer) - Event-driven communication between objects
- [Factory Pattern (Refactoring.Guru)](https://refactoring.guru/design-patterns/factory-method) - Object creation without specifying exact classes
- [Retrieval Pivot Attacks in Hybrid RAG](https://arxiv.org/abs/2602.08668) - Security patterns and boundary enforcement for hybrid retrieval systems

## Personal Knowledge Management

- [KATS: Task-Oriented Dataset Search](https://arxiv.org/abs/2512.15363) - Multi-agent knowledge graph construction with hybrid vector+graph retrieval
- [Personal Knowledge Management (Wikipedia)](https://en.wikipedia.org/wiki/Personal_knowledge_management) - Overview of PKM concepts and methodologies
- [Zettelkasten Method](https://zettelkasten.de/) - Connected note-taking method inspiring knowledge graph design
- [Semantic Search for Code](https://qdrant.tech/documentation/tutorials-search-engineering/code-search/) - Applying vector search to code and structured knowledge
- [Collaborative Filtering with Qdrant](https://qdrant.tech/documentation/tutorials-search-engineering/collaborative-filtering/) - Recommendation patterns applicable to knowledge suggestion

## Structured Logging & Telemetry

- [OpenTelemetry Python](https://opentelemetry.io/docs/languages/python/) - Distributed tracing, metrics, and logs for Python applications
- [Structlog](https://www.structlog.org/) - Structured logging library for Python with type-safe context
- [Python Logging Best Practices](https://docs.python.org/3/howto/logging.html) - Official Python logging how-to guide
- [Qdrant Monitoring & Telemetry](https://qdrant.tech/documentation/operations/monitoring/) - Monitoring and telemetry in Qdrant deployments

## Graph & Vector Integration

- [Neo4j Labs: Vector Index & Search](https://neo4j.com/labs/genai-ecosystem/vector-search/) - Neo4j Labs vector search capabilities
- [Neo4j Labs: LangChain Integration](https://neo4j.com/labs/genai-ecosystem/langchain/) - LangChain + Neo4j for GraphRAG
- [Neo4j Labs: LlamaIndex Integration](https://neo4j.com/labs/genai-ecosystem/llamaindex/) - LlamaIndex + Neo4j knowledge graph integration
- [Qdrant Learn](https://qdrant.tech/learn/) - Educational resources on vector search concepts
- [Qdrant Vector Quantization Article](https://qdrant.tech/articles/what-is-vector-quantization/) - Deep dive into vector quantization techniques
- [Qdrant Optimize Performance](https://qdrant.tech/documentation/operations/optimize/) - Performance optimization guide for Qdrant

## Memory Systems & Agents

- [AI Memory Systems Overview](https://www.anthropic.com/research/building-effective-agents) - Anthropic research on building effective AI agents with memory
- [LangChain Memory](https://python.langchain.com/docs/concepts/memory/) - Memory abstractions for LLM applications
- [LlamaIndex Memory](https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents/memory/) - Agent memory module in LlamaIndex
- [MemGPT / Letta](https://memgpt.readme.io/) - Virtual context management for LLMs with tiered memory

## Python Project Structure

- [uv Python Package Manager](https://docs.astral.sh/uv/) - Fast Python package installer and resolver
- [pyproject.toml Specification](https://packaging.python.org/en/latest/specifications/pyproject-toml/) - Python project metadata and build system configuration
- [Python AsyncIO](https://docs.python.org/3/library/asyncio.html) - Asynchronous I/O framework for concurrent operations
- [pytest Documentation](https://docs.pytest.org/) - Python testing framework with fixtures and parametrization

## Security & PII

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Top 10 web application security risks
- [Python Security Best Practices](https://python.readthedocs.io/en/stable/library/security_warnings.html) - Security considerations in Python
- [Qdrant Security](https://qdrant.tech/documentation/operations/security/) - Authentication, authorization, and encryption in Qdrant
- [Neo4j Authentication & Authorization](https://neo4j.com/docs/operations-manual/current/authentication-authorization/) - User management and role-based access control
