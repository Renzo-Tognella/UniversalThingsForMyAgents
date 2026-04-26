---
name: documentation
description: Geração e manutenção de documentação técnica para projetos Ruby on Rails. Crie API docs, guias, READMEs e documentação arquitetural que permanece atualizada com o código.
---

# Documentation — Documentação Técnica

> "Documentação é um processo, não um evento. Documentação viva ou está morta."

---

## Quando Usar

- Criar documentação de API
- Escrever READMEs de qualidade
- Documentar arquitetura do sistema
- Gerar guias para novos desenvolvedores
- Manter CHANGELOG atualizado
- Criar ADRs (Architecture Decision Records)

**NÃO use para:**
- Comentar código (código deve ser autodocumentado)
- Documentar o óbvio
- Criar documentação que ninguém vai ler

---

## Princípios

| Princípio | Significado |
|-----------|-------------|
| **DRY** | Não duplique informação entre código e docs |
| **Close to Code** | Docs próximas ao que documentam |
| **Executable** | Exemplos de código funcionam |
| **Versioned** | Docs acompanham versões do código |
| **Discoverable** | Fácil de encontrar e navegar |

---

## Estrutura de Documentação

```
docs/
├── README.md                 # Visão geral da documentação
├── api/
│   ├── README.md            # Índice da API
│   ├── authentication.md    # Como autenticar
│   ├── errors.md            # Códigos de erro
│   └── endpoints/
│       ├── users.md
│       └── orders.md
├── architecture/
│   ├── README.md            # Visão arquitetural
│   ├── data-flow.md         # Fluxo de dados
│   └── deployment.md        # Arquitetura de deploy
├── adr/                     # Architecture Decision Records
│   ├── 001-escolha-framework.md
│   └── 002-api-pagination.md
├── guides/
│   ├── setup.md             # Setup do projeto
│   ├── testing.md           # Como testar
│   └── deployment.md        # Como deployar
└── development/
    ├── conventions.md       # Convenções de código
    └── workflow.md          # Fluxo de trabalho
```

---

## Tipos de Documentação

### 1. README do Projeto

```markdown
# Nome do Projeto

> One-liner descrevendo o propósito

[![Tests](https://github.com/org/repo/workflows/tests/badge.svg)](link)

## O que é

Parágrafo explicando o problema que resolve e para quem.

## Stack

- Ruby 3.2
- Rails 7.1
- PostgreSQL
- Redis
- Sidekiq

## Setup

```bash
# Clone
gh repo clone org/repo
cd repo

# Dependências
bundle install

# Banco
cp config/database.yml.example config/database.yml
rails db:create db:migrate db:seed

# Variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações

# Testes
bundle exec rspec
```

## Desenvolvimento

```bash
rails server
./bin/dev  # ou foreman
```

## Deploy

[Link para docs/deployment.md]

## Documentação

- [API](docs/api/README.md)
- [Arquitetura](docs/architecture/README.md)
- [Contribuição](CONTRIBUTING.md)

## Licença

[MIT](LICENSE)
```

### 2. Documentação de API

```markdown
# Users API

## Autenticação

Todas as requisições requerem header:
```
Authorization: Bearer {access_token}
```

## Endpoints

### GET /api/v1/users

Lista usuários paginados.

#### Parâmetros

| Nome | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| page | integer | Não | Página (default: 1) |
| per_page | integer | Não | Itens por página (max: 100) |
| search | string | Não | Busca por nome ou email |

#### Exemplo de Requisição

```bash
curl -H "Authorization: Bearer $TOKEN" \
  "https://api.example.com/api/v1/users?page=1&per_page=10"
```

#### Resposta de Sucesso (200)

```json
{
  "data": [
    {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 10,
    "total_count": 95
  }
}
```

#### Respostas de Erro

| Status | Código | Descrição |
|--------|--------|-----------|
| 401 | unauthorized | Token inválido ou expirado |
| 403 | forbidden | Sem permissão |
| 429 | rate_limited | Muitas requisições |
```

### 3. Documentação de Arquitetura

```markdown
# Arquitetura do Sistema

## Visão Geral

```mermaid
diagram: Sistema de E-commerce
  Client[Next.js Frontend] -->|HTTPS| API[Rails API]
  API --> DB[(PostgreSQL)]
  API --> Cache[(Redis)]
  API --> Queue[Sidekiq]
  Queue --> Workers[Background Jobs]
  API --> S3[AWS S3]
```

## Componentes

### API (Rails)
- **Responsabilidade:** Lógica de negócio e persistência
- **Padrão:** Shopify-style (Services, Queries, Clients)
- **Escalabilidade:** Horizontal com load balancer

### Frontend (Next.js)
- **Responsabilidade:** Interface do usuário
- **SSR:** Para SEO e performance inicial
- **CSR:** Para interatividade

### Background Jobs (Sidekiq)
- **Responsabilidade:** Processamento assíncrono
- **Jobs:** Emails, relatórios, integrações
- **Retries:** Exponencial backoff

## Fluxo de Dados

1. Cliente faz pedido → API cria registro
2. API dispara job para processamento de pagamento
3. Job atualiza status do pedido
4. Webhook notifica cliente

## Decisões Arquiteturais

- [ADR-001: Escolha de Rails sobre Node](adr/001-rails-framework.md)
- [ADR-002: API REST sobre GraphQL](adr/002-api-rest.md)
```

### 4. Guia de Setup

```markdown
# Setup de Desenvolvimento

## Pré-requisitos

- Ruby 3.2+ (`rbenv` ou `asdf` recomendado)
- PostgreSQL 14+
- Redis 7+
- Node.js 20+ (para frontend)

## Passo a Passo

### 1. Instalação de Dependências

```bash
# Ruby gems
bundle install

# Node packages (se tiver frontend)
npm install
```

### 2. Configuração do Banco

```bash
# Copie o exemplo
cp config/database.yml.example config/database.yml

# Edite com suas credenciais
# Rode as migrations
rails db:create db:migrate db:seed
```

### 3. Variáveis de Ambiente

```bash
cp .env.example .env
```

Edite `.env`:
```
DATABASE_URL=postgresql://localhost:5432/myapp_development
REDIS_URL=redis://localhost:6379/0
JWT_SECRET=sua_chave_secreta_aqui
```

### 4. Verificação

```bash
# Testes devem passar
bundle exec rspec

# Servidor deve subir
rails server
```

## Troubleshooting

### Erro: "PG::ConnectionBad"

PostgreSQL não está rodando:
```bash
# macOS
brew services start postgresql

# Linux
sudo service postgresql start
```

### Erro: "Redis::CannotConnectError"

Redis não está rodando:
```bash
redis-server
```
```

---

## Geração Automática de Docs

### YARD para Documentação de Código

```ruby
# app/services/users/create_service.rb
# frozen_string_literal: true

module Users
  # Cria um novo usuário com validações e notificações
  #
  # @example Criar usuário básico
  #   result = CreateService.call(email: 'user@example.com', password: 'secret')
  #   result.success? # => true
  #   result.data # => #<User id: 1>
  #
  # @example Falha de validação
  #   result = CreateService.call(email: 'invalid')
  #   result.success? # => false
  #   result.error.code # => 'validation_error'
  #
  class CreateService < ApplicationService
    # @param email [String] Email do usuário
    # @param password [String] Senha em texto plano (será hasheada)
    # @param name [String, nil] Nome opcional
    def initialize(email:, password:, name: nil)
      @email = email
      @password = password
      @name = name
    end

    # @return [Result<User>] Resultado com usuário criado ou erro
    def call
      # implementação
    end
  end
end
```

Gerar docs:
```bash
gem install yard
yard doc
# Abrir doc/index.html
```

### OpenAPI/Swagger

```yaml
# spec/swagger.yaml
openapi: 3.0.0
info:
  title: API Documentation
  version: 1.0.0
paths:
  /api/v1/users:
    get:
      summary: Lista usuários
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        '200':
          description: Lista de usuários
```

Gerar UI:
```bash
# Usando docker
docker run -p 8080:8080 -e SWAGGER_JSON=/tmp/swagger.yaml \
  -v $(pwd)/spec/swagger.yaml:/tmp/swagger.yaml \
  swaggerapi/swagger-ui
```

---

## Mantendo Documentação Atualizada

### Checklist de Manutenção

```markdown
- [ ] README reflete setup atual
- [ ] API docs têm todos os endpoints
- [ ] Exemplos de código funcionam (teste!)
- [ ] ADRs novos foram criados
- [ ] CHANGELOG tem entry para versão
- [ ] Links não quebram (use markdown-link-check)
```

### CI para Documentação

```yaml
# .github/workflows/docs.yml
name: Documentation

on:
  push:
    paths:
      - 'docs/**'
      - 'README.md'

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check links
        uses: lycheeverse/lychee-action@v1
        with:
          args: docs/ README.md
      
      - name: Markdown lint
        uses: DavidAnson/markdownlint-cli2-action@v9
        with:
          globs: 'docs/**/*.md'
```

---

## Templates Rápidos

### Novo Endpoint

```markdown
## MÉTODO /caminho

Descrição em uma frase.

### Auth
[Tipo de autenticação necessária]

### Params
| Nome | Tipo | Req | Descrição |

### Request Example
```bash
```

### Response 200
```json
```

### Errors
| Status | Código | Quando |
```

### Nova Feature

```markdown
# Feature: [Nome]

## O que é
[Descrição em 2-3 frases]

## Por que
[Problema que resolve]

## Como usar
[Exemplo mínimo]

## Limitações
[O que não cobre]
```

---

## Lembre-se

> "Documentação é como um jardim — requer manutenção constante ou vira mato."

- **Escreva para o leitor**, não para si mesmo
- **Mostre, não diga** — exemplos > explicações
- **Mantenha junto do código** — docs distantes ficam obsoletas
- **Teste exemplos** — código quebrado é pior que nenhum código
- **Menos é mais** — remova docs que ninguém lê
