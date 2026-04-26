---
name: clean-code
description: Padrões pragmáticos de código limpo para Ruby on Rails. Conciso, direto, sem over-engineering. Use para escrever código legível, manutenível e idiomático seguindo SRP, DRY, KISS, YAGNI.
---

# Clean Code — Padrões Pragmáticos

> "O código deve ser tão claro que não precise de explicação. Se precisa de comentário, o nome está errado."

---

## Princípios Fundamentais

| Princípio | Significado | Regra |
|-----------|-------------|-------|
| **SRP** | Single Responsibility | Uma classe/método faz UMA coisa só |
| **DRY** | Don't Repeat Yourself | Extraia duplicações, reutilize |
| **KISS** | Keep It Simple | A solução mais simples que funciona |
| **YAGNI** | You Aren't Gonna Need It | Não construa o que não precisa |
| **Boy Scout** | Deixe mais limpo | Código melhor do que encontrou |

---

## Regras de Nomenclatura

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| **Variáveis** | Revela intenção | `user_count` não `n` |
| **Métodos** | Verbo + substantivo | `find_user_by_email` não `user` |
| **Booleanos** | Forma de pergunta | `active?`, `admin?`, `can_edit?` |
| **Constantes** | SCREAMING_SNAKE | `MAX_RETRY_COUNT`, `DEFAULT_TIMEOUT` |
| **Classes** | Substantivo descritivo | `UserRegistrationService` |
| **Concerns** | Termina em able/ible | `Authenticatable`, `Trackable` |

> **Regra de Ouro:** Se você precisa de comentário para explicar o nome, renomeie.

---

## Regras de Métodos

| Regra | Descrição |
|-------|-----------|
| **Pequeno** | Máximo 20 linhas, ideal 5-10 |
| **Uma coisa** | Faz uma coisa, faz bem feito |
| **Um nível** | Um nível de abstração por método |
| **Poucos args** | Máximo 3 argumentos, prefira 0-2 |
| **Sem side effects** | Não muta inputs inesperadamente |

```ruby
# ❌ Ruim — múltiplas responsabilidades, nome vago
def process(data)
  # valida
  return nil unless data.valid?
  
  # transforma
  result = data.transform
  
  # salva
  result.save!
  
  # notifica
  NotificationMailer.success(result).deliver
  
  # loga
  Rails.logger.info "Processado: #{result.id}"
  
  result
end

# ✅ Bom — delega para métodos focados
def process_user_registration(data)
  return failure(:invalid_data) unless data.valid?
  
  create_user(data)
    .and_then { |user| send_welcome_email(user) }
    .and_then { |user| log_registration(user) }
end

private

def create_user(data)
  User.create!(data)
  success(user)
rescue ActiveRecord::RecordInvalid => e
  failure(:create_failed, e.message)
end
```

---

## Guard Clauses (Retornos Antecipados)

```ruby
# ❌ Aninhamento profundo
def activate_user(user)
  if user.present?
    if user.active?
      if user.email_verified?
        user.activate!
        :activated
      else
        :email_not_verified
      end
    else
      :already_active
    end
  else
    :user_not_found
  end
end

# ✅ Guard clauses — flat é melhor que aninhado
def activate_user(user)
  return :user_not_found unless user.present?
  return :already_active if user.active?
  return :email_not_verified unless user.email_verified?
  
  user.activate!
  :activated
end
```

---

## Composição sobre Herança

```ruby
# ❌ Herança profunda
class Animal
  def speak; end
end

class Mammal < Animal
  def warm_blooded?; true; end
end

class Dog < Mammal
  def speak; "woof"; end
end

# ✅ Composição com concerns
module Speakable
  def speak(sound)
    "#{name} says: #{sound}"
  end
end

module WarmBlooded
  def warm_blooded?; true; end
end

class Dog
  include Speakable
  include WarmBlooded
  
  def initialize(name)
    @name = name
  end
  
  def speak
    super("woof")
  end
end
```

---

## Estilo de Código Ruby

### Preferências Idiomáticas

```ruby
# ❌ Verbosidade
if user.present? && user.active == true
  return true
else
  return false
end

# ✅ Expressividade
user.present? && user.active?

# ❌ Atribuição condicional confusa
value = if condition
          something
        else
          other_thing
        end

# ✅ Modifier form para simples
value = condition ? something : other_thing

# ❌ Loop imperativo
result = []
users.each do |user|
  result << user.name if user.active?
end
result

# ✅ Functional style
users.select(&:active?).map(&:name)
```

### Safe Navigation

```ruby
# ❌ Cadeia de verificações
if user && user.address && user.address.city
  user.address.city.name
end

# ✅ Safe navigation operator
user&.address&.city&.name
```

### Memoization

```ruby
# ❌ Query repetida
def total_orders
  orders.count + pending_orders.count
end

# ✅ Memoization

def total_orders
  @total_orders ||= orders.count + pending_orders.count
end
```

---

## Anti-Patterns (NÃO FAÇA)

| ❌ Anti-Pattern | ✅ Correção |
|-----------------|------------|
| Comentar cada linha | Apague comentários óbvios |
| Helper para one-liner | Inline o código |
| Factory para 2 objetos | Instanciação direta |
| `utils.rb` com 1 função | Coloque código onde é usado |
| "Primeiro importamos..." | Apenas escreva o código |
| Números mágicos | Constantes nomeadas |
| God classes | Divida por responsabilidade |
| Feature flags desnecessárias | YAGNI — remova se não usa |

---

## Comentários — Quando Usar

**Regra Absoluta:** Código Ruby deve ser autodocumentado. Comentários são ruído, exceto:

| Permitido | Exemplo |
|-----------|---------|
| Documentação pública (YARD) | `# @param email [String] Email do usuário` |
| Complexidade de negócio | `# NOTE: Regra fiscal brasileira NFe 4.0` |
| Workarounds temporários | `# FIXME: Remove quando API v2 estiver estável` |
| Decisões arquiteturais | `# OPTIMIZE: Cache de 5min devido a limitação da API externa` |

```ruby
# ❌ Comentário óbvio
# Verifica se usuário é admin
if user.admin?

# ✅ Código autodocumentado
def admin?
  role == 'admin'
end
```

---

## Organização de Arquivos

```
app/
├── controllers/
│   └── api/
│       └── v1/
│           ├── users_controller.rb      # 5-10 linhas por action
│           └── base_controller.rb       # Autenticação comum
├── models/
│   ├── user.rb                          # Apenas associações e validações
│   └── concerns/
│       └── authenticatable.rb           # Comportamento compartilhado
├── services/                            # Lógica de negócio
│   └── users/
│       ├── create_service.rb
│       └── deactivate_service.rb
├── queries/                             # Consultas complexas
│   └── users/
│       └── active_query.rb
└── clients/                             # APIs externas
    └── payment_gateway/
        └── client.rb
```

---

## Antes de Editar Qualquer Arquivo

**Pergunte-se:**

| Pergunta | Por quê |
|----------|---------|
| O que importa este arquivo? | Podem quebrar |
| O que este arquivo importa? | Mudanças de interface |
| Quais testes cobrem isso? | Podem falhar |
| Isso é um componente compartilhado? | Múltiplos lugares afetados |

---

## Checklist Clean Code

```markdown
- [ ] Nomes revelam intenção
- [ ] Métodos fazem uma coisa só
- [ ] Guard clauses em vez de aninhamento
- [ ] Sem comentários desnecessários
- [ ] Sem duplicação (DRY)
- [ ] Sem números/strings mágicas
- [ ] Máximo 3 argumentos por método
- [ ] Classes < 150 linhas
- [ ] Métodos < 20 linhas
```

---

## Lembre-se

> "Perfeição é alcançada não quando não há mais nada para adicionar, mas quando não há mais nada para remover." — Antoine de Saint-Exupéry

- **Simples > Complexo**
- **Claro > Esperto**
- **Explícito > Implícito**
- **Menos código > Mais código**
