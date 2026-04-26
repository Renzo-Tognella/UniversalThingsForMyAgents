---
name: architecture
description: Framework para decisões arquiteturais em Ruby on Rails. Use para análise de requisitos, avaliação de trade-offs, criação de ADRs e definição de padrões arquiteturais. Especialista em Shopify-style, Domain-Driven Design e modularização.
---

# Architecture — Framework de Decisões

> "Simplicidade é a sofisticação final. Requisitos definem a arquitetura. Trade-offs informam decisões. ADRs capturam a razão."

---

## Quando Usar

- Nova feature que afeta múltiplos domínios
- Decisão com impacto em > 1 time
- Mudança de padrão arquitetural
- Escolha de tecnologia/ferramenta
- Refatoração estrutural

**NÃO use para:**
- Bug fixes simples
- Alterações triviais de código
- Decisões já documentadas

---

## Princípio Fundamental

> "Comece simples. Adicione complexidade SÓ quando provado necessário."

- Você sempre pode adicionar padrões depois
- Remover complexidade é MUITO mais difícil que adicionar
- A solução mais simples que funciona é a melhor

---

## Processo de Decisão

### 1. Entendimento do Contexto

```markdown
## Contexto

### Requisitos Funcionais
1. O que deve ser feito?
2. Quem são os usuários?
3. Quais são os casos de uso principais?

### Requisitos Não-Funcionais
| Aspecto | Requisito |
|---------|-----------|
| Performance | Tempo de resposta, throughput |
| Escalabilidade | Usuários simultâneos, crescimento |
| Disponibilidade | SLA, tempo de downtime aceitável |
| Segurança | Compliance, proteção de dados |
| Manutenibilidade | Time size, expertise disponível |

### Restrições
- Orçamento
- Prazo
- Tecnologias existentes
- Expertise do time
```

### 2. Opções Consideradas

Sempre considere pelo menos 3 alternativas:

1. **Opção A (Recomendada)** — Descrição
2. **Opção B (Alternativa)** — Descrição
3. **Opção C (Status quo)** — Manter como está

### 3. Análise de Trade-offs

| Critério | Opção A | Opção B | Opção C |
|----------|---------|---------|---------|
| Simplicidade | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Performance | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Custo | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Time to Market | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Risco | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Legenda:** ⭐ = ruim, ⭐⭐⭐⭐⭐ = excelente

### 4. Decisão

```markdown
## Decisão

Escolhemos **Opção A** porque:
1. [Razão principal]
2. [Razão secundária]
3. [Mitigação de riscos da alternativa]

## Consequências

### Positivas
- [Benefício 1]
- [Benefício 2]

### Negativas (aceitáveis)
- [Custo/sacrifício 1]
- [Custo/sacrifício 2]

### Mitigações
- Como vamos lidar com as consequências negativas
```

---

## Template de ADR (Architecture Decision Record)

Nome do arquivo: `docs/adr/NNN-titulo-descritivo.md`

```markdown
# ADR-042: Uso de Service Objects para Lógica de Negócio

## Status
- Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Contexto

Nossos controllers estão crescendo além de 100 linhas com lógica de negócio misturada. Models também estão acumulando responsabilidades. Precisamos de um padrão claro para organizar código de negócio.

## Decisão

Adotaremos o padrão **Service Objects** (estilo Shopify):
- Um método público: `#call`
- Injeção via construtor
- Result pattern (`success`/`failure`)
- Namespace por domínio

## Consequências

### Positivas
- Controllers finos (máx 10 linhas por action)
- Testabilidade isolada
- Reutilização de lógica
- Clareza de responsabilidade

### Negativas
- Mais arquivos para navegar
- Curva de aprendizado para novos devs

### Mitigações
- Documentação em `SKILL.md`
- Code review valida aderência
- Gerador Rails para criar services

## Alternativas Consideradas

1. **Transactions no Model**
   - Rejeitado: Models ficariam inchados
   
2. **Interactor Pattern**
   - Rejeitado: Mais complexo, não justifica para nosso caso
   
3. **Status quo (controllers gordos)**
   - Rejeitado: Não escalável
```

---

## Catálogo de Padrões Arquiteturais

### Para Rails (Shopify-style)

| Padrão | Quando Usar | Exemplo |
|--------|-------------|---------|
| **Service Object** | Lógica de negócio complexa | `Orders::CreateService` |
| **Query Object** | Consulta complexa reutilizável | `Users::ActiveQuery` |
| **Form Object** | Validação multi-modelo | `RegistrationForm` |
| **Policy Object** | Autorização complexa | `PostDeletionPolicy` |
| **Value Object** | Dados imutáveis com comportamento | `Money`, `Address` |
| **Decorator** | Apresentação de dados | `UserDecorator` |

### Decisões Arquiteturais Comuns

```markdown
## Escolhendo um Padrão

### Muitas condicionais?
→ Strategy Pattern ou Polymorphism

### Código repetido entre classes?
→ Concern ou Module

### Acoplamento alto?
→ Dependency Injection

### Lógica de criação complexa?
→ Factory Pattern

### Necessita de estado compartilhado?
→ Singleton (com cuidado!) ou Service

### Processamento em pipeline?
→ Chain of Responsibility
```

---

## Modularização (Packwerk-style)

```
app/
├── packages/
│   ├── users/
│   │   ├── app/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   └── services/
│   │   ├── config/routes.rb
│   │   └── package.yml
│   └── orders/
│       └── ...
```

**package.yml:**
```yaml
enforce_dependencies: true
enforce_privacy: true
dependencies:
  - users
```

---

## Checklist de Decisão Arquitetural

```markdown
- [ ] Requisitos claramente entendidos
- [ ] Restrições identificadas
- [ ] Pelo menos 3 alternativas consideradas
- [ ] Trade-offs documentados
- [ ] Alternativas mais simples descartadas (com justificativa)
- [ ] ADR escrito
- [ ] Time revisou e concordou
- [ ] Rollback plan definido (se aplicável)
```

---

## Ferramentas de Documentação

```bash
# Estrutura de docs
mkdir -p docs/adr docs/architecture docs/decisions

# Gerar índice de ADRs
ls -1 docs/adr/*.md | sort -V | while read f; do
  title=$(head -1 "$f" | sed 's/# //')
  echo "- [$title]($f)"
done > docs/adr/README.md
```

---

## Exemplos de Decisões

### Exemplo 1: Banco de Dados

```markdown
## Contexto
Precisamos escolher entre PostgreSQL e MySQL para nova aplicação.

## Trade-offs
| Critério | PostgreSQL | MySQL |
|----------|------------|-------|
| JSON/Document | Nativo, índices GIN | JSON possível, limitado |
| Full-text search | tsvector nativo | Requires Elasticsearch |
| Time team | 80% conhecem | 20% conhecem |
| Rails support | Excelente | Excelente |

## Decisão: PostgreSQL
Time expertise é o fator decisivo. JSON nativo é bônus para features futuras.
```

### Exemplo 2: Autenticação

```markdown
## Contexto
Escolher entre Devise + JWT vs Auth0 para API.

## Trade-offs
| Critério | Devise+JWT | Auth0 |
|----------|------------|-------|
| Custo | Grátis | $23/mil usuários |
| Controle | Total | Limitada |
| Time to market | 2 semanas | 3 dias |
| Manutenção | Nossa responsabilidade | Terceirizada |

## Decisão: Devise+JWT
Para MVP, controle e custo zero são prioritários. Reavaliar após 10k usuários.
```

---

## Lembre-se

> "A melhor arquitetura é aquela que permite mudar de arquitetura."

- Documente o **porquê**, não apenas o **o quê**
- Decisões são reversíveis — marque como "Proposed" primeiro
- Revisite ADRs antigos periodicamente
- Consistência vale mais que perfeição
