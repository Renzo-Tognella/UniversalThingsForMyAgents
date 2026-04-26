---
name: tdd-workflow
description: Test-Driven Development para Ruby on Rails com RSpec. Ciclo Red-Green-Refactor, estratégias de teste e padrões de testes. Use ANTES de escrever qualquer código de produção.
---

# TDD Workflow — Test-Driven Development

> "Se você não viu o teste falhar, você não sabe se ele testa a coisa certa."

---

## A Lei de Ferro do TDD

```
NENHUM CÓDIGO DE PRODUÇÃO SEM UM TESTE FALHANDO ANTES
```

Escreveu código antes do teste? **Delete. Comece de novo.**

Não há exceções:
- Não mantenha como "referência"
- Não "adapte" enquanto escreve testes
- Não olhe para o código
- **Deletar significa deletar**

---

## O Ciclo Red-Green-Refactor

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   RED       │────▶│   GREEN      │────▶│  REFACTOR   │
│ (escreve    │     │ (código mínimo│     │ (limpeza    │
│  teste que  │     │  para passar)│     │  mantendo   │
│  falha)     │     │              │     │  verde)     │
└─────────────┘     └──────────────┘     └──────┬──────┘
       ▲─────────────────────────────────────────┘
```

### 1. RED — Escreva o Teste Falhando

```ruby
# spec/services/orders/create_service_spec.rb
RSpec.describe Orders::CreateService do
  describe '#call' do
    context 'com dados válidos' do
      let(:user) { create(:user) }
      let(:items) { [create(:item), create(:item)] }
      
      it 'cria um pedido com status pending' do
        result = described_class.call(user: user, items: items)
        
        expect(result).to be_success
        expect(result.data).to be_pending
        expect(result.data.total).to eq(items.sum(&:price))
      end
      
      it 'associa o usuário ao pedido' do
        result = described_class.call(user: user, items: items)
        
        expect(result.data.user).to eq(user)
      end
    end
    
    context 'com itens vazios' do
      let(:user) { create(:user) }
      
      it 'retorna erro de validação' do
        result = described_class.call(user: user, items: [])
        
        expect(result).to be_failure
        expect(result.error.code).to eq('empty_items')
      end
    end
  end
end
```

**Execute:**
```bash
bundle exec rspec spec/services/orders/create_service_spec.rb

# Esperado: FALHA (classe não existe ainda)
# NameError: uninitialized constant Orders::CreateService
```

✅ **Verifique:** O teste falha pelo motivo CERTO

### 2. GREEN — Código Mínimo para Passar

```ruby
# app/services/orders/create_service.rb
module Orders
  class CreateService < ApplicationService
    def initialize(user:, items:)
      @user = user
      @items = items
    end
    
    def call
      return failure(:empty_items) if @items.blank?
      
      order = Order.create!(
        user: @user,
        items: @items,
        status: :pending,
        total: @items.sum(&:price)
      )
      
      success(order)
    rescue ActiveRecord::RecordInvalid => e
      failure(:validation_error, e.message)
    end
  end
end
```

**Execute:**
```bash
bundle exec rspec spec/services/orders/create_service_spec.rb

# Esperado: PASSA (verde)
```

✅ **Verifique:** Todos os testes verdes

### 3. REFACTOR — Limpe Sem Quebrar

```ruby
# Antes (funciona, mas pode melhorar)
def call
  return failure(:empty_items) if @items.blank?
  
  order = Order.create!(
    user: @user,
    items: @items,
    status: :pending,
    total: @items.sum(&:price)
  )
  
  success(order)
end

# Depois (melhorado)
def call
  return failure(:empty_items) if items.blank?
  
  success(create_order!)
end

private

def create_order!
  Order.create!(
    user: user,
    items: items,
    status: :pending,
    total: calculate_total
  )
end

def calculate_total
  items.sum(&:price)
end
```

**Execute:**
```bash
bundle exec rspec spec/services/orders/create_service_spec.rb

# Esperado: AINDA PASSA (verde)
```

✅ **Verifique:** Refactor não quebrou nada

---

## Estratégia de Testes

### Pirâmide de Testes

```
        /
       / \      E2E (poucos, lentos)
      /   \     ~5% da cobertura
     /─────\
    /         \   Integration (alguns, médios)
   /           \  ~15% da cobertura
  /─────────────\
 /               \  Unit (muitos, rápidos)
/                 \ ~80% da cobertura
───────────────────
```

### Quando Usar Cada Tipo

| Tipo | O que testa | Velocidade | Quantidade |
|------|-------------|------------|------------|
| **Unit** | Métodos, classes isoladas | < 10ms | Milhares |
| **Integration** | Interação entre componentes | < 100ms | Centenas |
| **E2E** | Fluxo completo do usuário | > 1s | Dezenas |
| **Contract** | APIs entre serviços | < 50ms | Por endpoint |

---

## Padrões de Teste RSpec

### 1. Describe/Context/It

```ruby
RSpec.describe User do
  # Classe ou método sendo testado
  describe '#active?' do
    # Estado/condição
    context 'quando usuário confirmou email' do
      let(:user) { create(:user, email_confirmed_at: 1.day.ago) }
      
      # Expectativa específica
      it 'retorna true' do
        expect(user.active?).to be true
      end
    end
    
    context 'quando email não foi confirmado' do
      let(:user) { create(:user, email_confirmed_at: nil) }
      
      it 'retorna false' do
        expect(user.active?).to be false
      end
    end
  end
end
```

### 2. Let vs Let!

```ruby
# let — lazy (só cria quando usado)
let(:user) { create(:user) }

# let! — eager (cria antes de cada teste)
let!(:user) { create(:user) }

# Use let! quando o side effect é necessário
```

### 3. Subjects Explícitos

```ruby
# Ruim — subject implícito
it { is_expected.to be_valid }

# Bom — subject explícito
describe '#valid?' do
  subject(:valid?) { user.valid? }
  
  it { is_expected.to be true }
end
```

### 4. Mocks e Stubs

```ruby
# Stub — retorna valor fixo
allow(api_client).to receive(:fetch_user).and_return(mock_user)

# Mock — verifica se foi chamado
expect(mailer).to receive(:deliver).with(user)

# Stub chain
allow(ApiClient).to receive(:new).and_return(
  instance_double(ApiClient, fetch: { data: 'response' })
)

# Partial double
allow_any_instance_of(User).to receive(:calculate_score).and_return(100)
```

### 5. Shared Examples

```ruby
# spec/support/shared_examples/authenticatable.rb
RSpec.shared_examples 'authenticatable' do
  describe '#authenticate' do
    context 'com senha correta' do
      it 'retorna o recurso' do
        expect(described_class.authenticate(valid_credentials)).to eq(resource)
      end
    end
    
    context 'com senha incorreta' do
      it 'retorna nil' do
        expect(described_class.authenticate(invalid_credentials)).to be_nil
      end
    end
  end
end

# Uso
RSpec.describe User do
  it_behaves_like 'authenticatable'
end

RSpec.describe Admin do
  it_behaves_like 'authenticatable'
end
```

---

## Fixtures com Factory Bot

```ruby
# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { 'password123' }
    name { 'John Doe' }
    
    trait :admin do
      role { 'admin' }
    end
    
    trait :unconfirmed do
      email_confirmed_at { nil }
    end
    
    trait :with_orders do
      after(:create) do |user|
        create_list(:order, 3, user: user)
      end
    end
  end
end

# Uso
user = create(:user)
admin = create(:user, :admin)
unconfirmed = create(:user, :unconfirmed)
user_with_orders = create(:user, :with_orders)
```

---

## Matchers Essenciais

```ruby
# Igualdade
expect(result).to eq(expected)
expect(result).not_to eq(other)

# Verdadeiro/Falso
expect(user.active?).to be true
expect(user.active?).to be_falsey

# Nil
expect(user.name).to be_nil
expect(user.name).not_to be_nil

# Coleções
expect(users).to include(user)
expect(users).to be_empty
expect(users.count).to eq(3)

# Exceptions
expect { risky_operation }.to raise_error(ArgumentError)
expect { risky_operation }.to raise_error(/mensagem/)

# Mudanças
expect { user.activate! }.to change(user, :active?).from(false).to(true)
expect { user.save! }.to change(User, :count).by(1)

# Validations (shoulda-matchers)
it { is_expected.to validate_presence_of(:email) }
it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
it { is_expected.to belong_to(:account) }
it { is_expected.to have_many(:orders) }
```

---

## Anti-Patterns de Teste

| ❌ Não Faça | ✅ Faça |
|-------------|---------|
| Testar implementação | Testar comportamento |
| `expect(user.save).to be true` | Testar o estado após a ação |
| Mocks em excesso | Testar integração quando relevante |
| Testes dependentes de ordem | Testes independentes |
| `sleep` em testes | Mocks de tempo (`travel_to`) |
| Banco de dados em unit tests | In-memory quando possível |

---

## Comandos RSpec

```bash
# Rodar todos
bundle exec rspec

# Rodar arquivo específico
bundle exec rspec spec/services/orders/create_service_spec.rb

# Rodar por linha
bundle exec rspec spec/services/orders/create_service_spec.rb:25

# Rodar com tag
bundle exec rspec --tag focus
bundle exec rspec --tag ~slow

# Formato documentação
bundle exec rspec --format documentation

# Profile (lentos)
bundle exec rspec --profile 10

# Cobertura
COVERAGE=true bundle exec rspec
```

---

## Checklist TDD

```markdown
## Antes de codar
- [ ] Entendi o requisito
- [ ] Identifiquei casos de borda
- [ ] Escrevi teste que FALHA

## Durante o GREEN
- [ ] Código mínimo para passar
- [ ] Sem preocupação com elegância
- [ ] Teste passa

## Durante o REFACTOR
- [ ] Código está limpo
- [ ] Nomes são descritivos
- [ ] Duplicação eliminada
- [ ] Testes ainda passam

## Finalizando
- [ ] Todos os testes passam
- [ ] Cobertura aceitável (>80%)
- [ ] Sem mocks desnecessários
```

---

## Lembre-se

> "TDD não é burocracia — é compromisso com excelência."

- **Red** — Teste falhando prova que você sabe o que quer
- **Green** — Código mínimo prova que funciona
- **Refactor** — Limpeza prova que você se importa

- Se pular o Red, você não sabe se o teste é válido
- Se pular o Refactor, você acumula dívida técnica
- TDD é sobre design, não apenas sobre testes
