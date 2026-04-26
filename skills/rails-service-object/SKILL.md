---
name: Rails Service Object
description: Criar Service Objects seguindo o padrão Shopify com Result pattern
---

# Rails Service Object

Service Objects encapsulam **toda a lógica de negócio complexa** do projeto.

## Quando Usar

✅ **USE quando:**
- Lógica de negócio complexa (mais de 3 passos)
- Integração com APIs externas
- Orquestração de múltiplos componentes
- Background jobs com lógica complexa
- Transações que envolvem múltiplos models

❌ **NÃO use quando:**
- Só faz CRUD simples → Use Model
- Só formata dados → Use Presenter
- Só faz query → Use Query Object

## Estrutura

```
app/services/
├── base_service.rb
└── [domínio]/
    └── [verbo]_[substantivo]_service.rb
```

**Naming:** `VerbNounService` (ex: `SyncAccountsService`, `CategorizeTransactionService`)

---

## Template Base

```ruby
# app/services/base_service.rb
class BaseService
  Result = Struct.new(:success?, :data, :error, keyword_init: true)

  def self.call(...)
    new(...).call
  end

  private

  def success(data = nil)
    Result.new(success?: true, data: data)
  end

  def failure(error)
    Result.new(success?: false, error: error)
  end

  def log_info(message)
    Rails.logger.info("[#{self.class.name}] #{message}")
  end

  def log_error(error, context = {})
    Rails.logger.error("[#{self.class.name}] #{error.message} | #{context.to_json}")
    # Opcional: enviar para Sentry/Bugsnag
    # Sentry.capture_exception(error, extra: context)
  end
end
```

---

## Exemplo Completo

```ruby
# app/services/pluggy/sync_accounts_service.rb
module Pluggy
  class SyncAccountsService < BaseService
    def initialize(user:, item_id:)
      @user = user
      @item_id = item_id
    end

    def call
      validate_input!
      
      ActiveRecord::Base.transaction do
        accounts_data = fetch_accounts
        synced = accounts_data.map { |data| sync_account(data) }
        update_sync_status!
        
        success(synced)
      end
    rescue ValidationError => e
      failure(e.message)
    rescue Clients::Pluggy::ApiError => e
      log_error(e, item_id: @item_id)
      failure("Erro ao conectar com Pluggy: #{e.message}")
    rescue ActiveRecord::RecordInvalid => e
      log_error(e, item_id: @item_id)
      failure("Erro ao salvar dados: #{e.message}")
    rescue StandardError => e
      log_error(e, item_id: @item_id)
      failure("Erro inesperado")
    end

    private

    class ValidationError < StandardError; end

    def validate_input!
      raise ValidationError, "User é obrigatório" unless @user
      raise ValidationError, "Item ID é obrigatório" unless @item_id.present?
    end

    def fetch_accounts
      log_info("Fetching accounts for item #{@item_id}")
      client.get_accounts(@item_id)
    end

    def sync_account(data)
      Account.find_or_initialize_by(
        user: @user,
        external_account_id: data['id']
      ).tap do |account|
        account.update!(
          account_type: data['type'],
          account_name: data['name'],
          current_balance: data['balance'],
          currency: data['currencyCode'],
          last_sync_at: Time.current
        )
      end
    end

    def update_sync_status!
      @user.update!(accounts_synced_at: Time.current)
    end

    def client
      @client ||= Clients::Pluggy::Client.new
    end
  end
end
```

---

## Uso no Controller

```ruby
# app/controllers/api/v1/sync_controller.rb
def create
  result = Pluggy::SyncAccountsService.call(
    user: current_user,
    item_id: params[:item_id]
  )

  if result.success?
    render_success(result.data)
  else
    render_error(result.error)
  end
end
```

---

## Error Handling

```ruby
# Hierarquia de erros customizados
module Pluggy
  class Error < StandardError; end
  class ValidationError < Error; end
  class ApiError < Error; end
  class RateLimitError < ApiError; end
end

# No service, capture erros específicos ANTES de genéricos
rescue Pluggy::RateLimitError => e
  failure("Muitas requisições, tente novamente em #{e.retry_after}s")
rescue Pluggy::ApiError => e
  failure("Erro na API: #{e.message}")
rescue StandardError => e
  # Log completo mas retorne mensagem genérica (segurança!)
  log_error(e)
  failure("Erro inesperado")
```

---

## Logging Seguro

```ruby
# ❌ NUNCA logue dados sensíveis
log_info("User #{user.email} com CPF #{user.cpf}")

# ✅ Use IDs e dados não-sensíveis
log_info("Syncing accounts for user_id=#{user.id}")

# ✅ Para debug, use filtered_attributes
log_info("Params: #{params.except(:password, :token)}")
```

---

## Testing

```ruby
# spec/services/pluggy/sync_accounts_service_spec.rb
RSpec.describe Pluggy::SyncAccountsService do
  subject(:result) { described_class.call(user: user, item_id: item_id) }

  let(:user) { create(:user) }
  let(:item_id) { 'valid-item-id' }
  let(:client) { instance_double(Clients::Pluggy::Client) }

  before do
    allow(Clients::Pluggy::Client).to receive(:new).and_return(client)
  end

  describe '#call' do
    context 'when successful' do
      before do
        allow(client).to receive(:get_accounts).and_return([
          { 'id' => 'acc-1', 'type' => 'BANK', 'name' => 'Conta', 'balance' => 1000 }
        ])
      end

      it 'returns success' do
        expect(result.success?).to be true
        expect(result.data.size).to eq(1)
      end

      it 'creates account record' do
        expect { result }.to change(Account, :count).by(1)
      end
    end

    context 'when API fails' do
      before do
        allow(client).to receive(:get_accounts)
          .and_raise(Clients::Pluggy::ApiError.new('timeout'))
      end

      it 'returns failure with message' do
        expect(result.success?).to be false
        expect(result.error).to include('Pluggy')
      end
    end

    context 'with invalid input' do
      let(:user) { nil }

      it 'returns validation error' do
        expect(result.success?).to be false
        expect(result.error).to include('obrigatório')
      end
    end
  end
end
```

---

## Regras

1. **Um método público:** apenas `#call`
2. **Injeção via construtor:** receber dependências no `initialize`
3. **Retornar Result:** sempre usar `success()` ou `failure()`
4. **Namespacing:** organizar por domínio (`Sync::`, `Pluggy::`)
5. **Não acessar params:** receber dados já extraídos
6. **Transactions:** usar `ActiveRecord::Base.transaction` para operações múltiplas
7. **Logging seguro:** nunca logar dados sensíveis (senhas, tokens, CPF)
8. **Error handling:** capturar erros específicos, retornar mensagens genéricas
9. **Minimal changes:** altere o mínimo possível; pesquise padrões antes de implementar

