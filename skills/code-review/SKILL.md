---
name: code-review
description: Revisão de código especializada para Ruby on Rails com foco em segurança, performance, qualidade e manutenibilidade. Use para revisar PRs, identificar vulnerabilidades, otimizar queries e garantir padrões do projeto.
---

# Code Review

> "Código bom é código que outras pessoas podem entender, manter e melhorar."

---

## Quando Usar

- Revisão de Pull Requests
- Identificação de vulnerabilidades de segurança
- Otimização de performance (N+1, queries lentas)
- Garantia de padrões do projeto (Shopify-style)
- Validação de testes e cobertura

---

## Dimensões de Revisão

### 1. Segurança (CRÍTICO)

| Check | O que verificar |
|-------|-----------------|
| SQL Injection | Queries usando placeholders (`?`) e não interpolação |
| XSS | Uso de `html_safe`, `raw`, `<%==` |
| Mass Assignment | Strong Parameters definidos corretamente |
| Autorização | Resources acessados via escopo do usuário |
| Secrets | Nenhum hardcoded, uso de `Rails.credentials` |
| Uploads | Validação de tipos, sanitização |

```ruby
# ❌ Vulnerável
User.where("email = '#{params[:email]}'")

# ✅ Seguro
User.where(email: params[:email])
```

### 2. Performance

| Check | O que verificar |
|-------|-----------------|
| N+1 | Uso de `includes`, `preload`, `eager_load` |
| Queries | `.count` vs `.size`, `.pluck` vs `.map` |
| Memória | Uso de `find_each` para batches |
| Caching | Fragment caching, Russian Doll caching |
| Background | Jobs para operações pesadas |

```ruby
# ❌ N+1
User.all.map { |u| u.posts.count }

# ✅ Eager loading
User.includes(:posts).map { |u| u.posts.size }
```

### 3. Qualidade de Código

| Princípio | Verificação |
|-----------|-------------|
| SRP | Método/classe faz uma coisa só |
| DRY | Duplicação extraída |
| Nomes | Descritivos, sem necessidade de comentários |
| Tamanho | Métodos < 20 linhas, classes < 150 linhas |
| Aninhamento | Máximo 2 níveis, preferir guard clauses |

### 4. Rails Idiomático

| Padrão | Implementação |
|--------|---------------|
| Service Objects | Lógica de negócio em `app/services/` |
| Query Objects | Consultas complexas em `app/queries/` |
| Concerns | Comportamento compartilhado em `app/models/concerns/` |
| Validations | No model, não no controller |
| Callbacks | Evitar lógica complexa, preferir Services |

### 5. Testes

| Check | Critério |
|-------|----------|
| Cobertura | Testes para novas funcionalidades |
| Isolamento | Mocks para APIs externas |
| Factory Bot | Uso de factories, não fixtures |
| Descrição | `it` deve ler como frase em inglês |
| Edge cases | Erros, nil, arrays vazios |

---

## Checklist de Revisão

```markdown
## PR Review Checklist

### Segurança
- [ ] Inputs validados com Strong Parameters
- [ ] Queries usam placeholders (nunca interpolação)
- [ ] Resources acessados via escopo do usuário (`current_user.xxx`)
- [ ] Nenhum uso de `html_safe`, `raw`, `<%==`
- [ ] Dados sensíveis filtrados dos logs

### Performance
- [ ] N+1 detectado e corrigido
- [ ] Queries otimizadas (índices considerados)
- [ ] Operações pesadas em background jobs

### Qualidade
- [ ] Código segue padrões do projeto (Shopify-style)
- [ ] Métodos pequenos e focados
- [ ] Nomes descritivos
- [ ] Sem comentários desnecessários

### Testes
- [ ] Testes cobrem a funcionalidade
- [ ] Testes passam localmente
- [ ] Mocks para APIs externas

### Documentação
- [ ] ADR criado se necessário
- [ ] CHANGELOG atualizado
```

---

## Comentários de Review

### Estrutura

```
[NÍVEL] Arquivo:linha - Descrição do problema

Explicação do porquê é um problema e como corrigir.

```sugestão de código```
```

### Níveis

| Nível | Quando usar | Bloqueia merge? |
|-------|-------------|-----------------|
| 🔴 **BLOCKER** | Bug, vulnerabilidade de segurança | Sim |
| 🟡 **WARNING** | Performance, manutenibilidade | Não, mas deve ser justificado |
| 🟢 **SUGGESTION** | Estilo, preferência pessoal | Não |
| 💡 **QUESTION** | Dúvida de entendimento | Não |

### Exemplos

```
🔴 [BLOCKER] app/controllers/api/v1/users_controller.rb:15

SQL Injection: Query usando interpolação de string permite injeção.

```ruby
# ❌
User.where("email = '#{params[:email]}'")

# ✅
User.where(email: params[:email])
```
```

```
🟡 [WARNING] app/services/create_order.rb:42

N+1 Query: Loop iterando sobre items faz query para cada um.

Considere usar `includes(:product)` antes do loop.
```

---

## Anti-Patterns Comuns em Rails

### 1. Fat Models

```ruby
# ❌ Model com lógica de negócio complexa
class Order < ApplicationRecord
  def process_payment
    # 50 linhas de código...
  end
  
  def send_confirmation_email
    # 30 linhas de código...
  end
end

# ✅ Service Objects
class Orders::ProcessPaymentService < ApplicationService
  def call
    # lógica de pagamento
  end
end
```

### 2. Fat Controllers

```ruby
# ❌ Controller com lógica de negócio
class OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)
    
    if @order.save
      ProcessPayment.new(@order).call
      SendConfirmationEmail.new(@order).call
      UpdateInventory.new(@order).call
      # ...
    end
  end
end

# ✅ Controller delega para Service
class OrdersController < ApplicationController
  def create
    result = Orders::CreateService.call(order_params, current_user)
    
    if result.success?
      render json: result.data, status: :created
    else
      render_error(result.error)
    end
  end
end
```

### 3. Magic Numbers

```ruby
# ❌
if user.orders.count > 5
  user.premium!
end

# ✅
PREMIUM_THRESHOLD = 5

if user.orders.count > PREMIUM_THRESHOLD
  user.premium!
end
```

---

## Ferramentas de Apoio

```bash
# Análise estática
bundle exec rubocop

# Segurança
bundle exec brakeman -q -w2
bundle exec bundle-audit

# Performance de queries (development log)
tail -f log/development.log | grep -E "(SELECT|N\+1|Completed)"
```

---

## Lembre-se

> "O objetivo do code review não é encontrar defeitos, mas compartilhar conhecimento e melhorar juntos."

- Seja **construtivo**, não crítico
- Explique o **porquê**, não apenas o **o quê**
- Reconheça código bom, não apenas problemas
- Aprenda com o código que está revisando
