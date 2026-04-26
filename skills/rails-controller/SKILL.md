---
name: Rails API Controller
description: Criar Controllers API RESTful seguindo convenções do projeto
---

# Rails API Controller

Controllers são a **camada de entrada** da aplicação. Devem ser **magros** e apenas delegar trabalho.

## Regras Fundamentais

1. **Máximo 5-10 linhas por action**
2. Só chama Services ou Queries
3. Usa Presenters para formatação de saída
4. Nunca acessa banco diretamente (exceto `find` simples com scope)
5. Herda de `Api::V1::BaseController`
6. Sempre usa Strong Parameters
7. Sempre verifica autorização (Pundit)

## Estrutura

```
app/controllers/
└── api/
    └── v1/
        ├── base_controller.rb
        ├── [recurso]_controller.rb
        └── webhooks/
            └── [provider]_controller.rb
```

---

## Base Controller

```ruby
# app/controllers/api/v1/base_controller.rb
module Api
  module V1
    class BaseController < ApplicationController
      include Pundit::Authorization
      include Pagination

      before_action :authenticate_user!
      after_action :verify_authorized, except: :index
      after_action :verify_policy_scoped, only: :index

      respond_to :json

      rescue_from Pundit::NotAuthorizedError, with: :render_forbidden
      rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

      private

      def current_user
        @current_user ||= User.find(decoded_token[:user_id])
      rescue JWT::DecodeError, ActiveRecord::RecordNotFound
        nil
      end

      def render_success(data, status: :ok)
        render json: { success: true, data: data }, status: status
      end

      def render_created(data)
        render json: { success: true, data: data }, status: :created
      end

      def render_error(message, status: :unprocessable_entity)
        render json: { success: false, error: message }, status: status
      end

      def render_forbidden
        render json: { success: false, error: 'Acesso negado' }, status: :forbidden
      end

      def render_not_found
        render json: { success: false, error: 'Recurso não encontrado' }, status: :not_found
      end
    end
  end
end
```

---

## Exemplo: CRUD Controller com Authorization

```ruby
# app/controllers/api/v1/accounts_controller.rb
module Api
  module V1
    class AccountsController < BaseController
      def index
        accounts = policy_scope(Account).includes(:institution)
        render_success(accounts.map { |a| AccountPresenter.new(a).as_json })
      end

      def show
        account = current_user.accounts.find(params[:id])
        authorize account
        
        render_success(AccountPresenter.new(account).as_json)
      end

      def transactions
        account = current_user.accounts.find(params[:id])
        authorize account, :show?
        
        transactions = Queries::Transactions::FilteredQuery
          .new(account.transactions)
          .call(filter_params)
        
        render_success(transactions.map { |t| TransactionPresenter.new(t).as_json })
      end

      private

      def filter_params
        params.permit(:start_date, :end_date, :category, :type)
      end
    end
  end
end
```

---

## Strong Parameters (Segurança)

```ruby
# ✅ SEMPRE use strong params
def user_params
  params.require(:user).permit(:email, :full_name, :avatar)
end

# ✅ Para nested attributes
def account_params
  params.require(:account).permit(
    :name,
    :account_type,
    settings: [:notifications, :currency]
  )
end

# ❌ NUNCA faça isso!
def create
  User.create(params[:user])  # Mass assignment vulnerability!
end

# ❌ NUNCA permita atributos sensíveis
def user_params
  params.require(:user).permit(:email, :role, :admin)  # role/admin = escalação de privilégio!
end
```

---

## Controller com Service

```ruby
# app/controllers/api/v1/sync_controller.rb
module Api
  module V1
    class SyncController < BaseController
      def create
        authorize :sync, :create?
        
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
    end
  end
end
```

---

## Webhook Controller (Sem Auth)

```ruby
# app/controllers/api/v1/webhooks/pluggy_controller.rb
module Api
  module V1
    module Webhooks
      class PluggyController < ApplicationController
        skip_before_action :authenticate_user!
        
        # Verificar assinatura do webhook
        before_action :verify_signature

        def create
          case webhook_params[:event]
          when 'item/created', 'item/updated'
            Pluggy::SyncItemJob.perform_later(webhook_params[:itemId])
          when 'item/error'
            Rails.logger.warn("[Pluggy Webhook] Error: #{webhook_params[:error]}")
          end

          head :ok
        end

        private

        def verify_signature
          # Implementar verificação de assinatura do webhook
          signature = request.headers['X-Pluggy-Signature']
          # ... validar signature
        end

        def webhook_params
          params.permit(:event, :eventId, :itemId, :triggeredBy, error: [:code, :message])
        end
      end
    end
  end
end
```

---

## Rotas

```ruby
# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :accounts, only: [:index, :show] do
        member do
          get :transactions
        end
      end

      resources :users, only: [:create, :show, :update]
      
      # Pluggy
      post 'pluggy/connect_token', to: 'pluggy#connect_token'

      # Sync
      post 'sync', to: 'sync#create'

      # Webhooks (sem autenticação)
      namespace :webhooks do
        post 'pluggy', to: 'pluggy#create'
      end
    end
  end
end
```

---

## Error Handling Global

```ruby
# app/controllers/concerns/error_handling.rb
module ErrorHandling
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError, with: :handle_standard_error
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
    rescue_from ActionController::ParameterMissing, with: :handle_bad_request
    rescue_from Pundit::NotAuthorizedError, with: :handle_forbidden
  end

  private

  def handle_standard_error(error)
    # Log completo para debug
    Rails.logger.error("[#{controller_name}##{action_name}] #{error.message}")
    Rails.logger.error(error.backtrace.first(10).join("\n"))
    
    # Retorna mensagem genérica (segurança!)
    render json: { success: false, error: 'Erro interno' }, status: :internal_server_error
  end

  def handle_not_found
    render json: { success: false, error: 'Recurso não encontrado' }, status: :not_found
  end

  def handle_bad_request(error)
    render json: { success: false, error: error.message }, status: :bad_request
  end

  def handle_forbidden
    render json: { success: false, error: 'Acesso negado' }, status: :forbidden
  end
end
```

---

## Testing

```ruby
# spec/requests/api/v1/accounts_spec.rb
RSpec.describe 'Api::V1::Accounts', type: :request do
  let(:user) { create(:user) }
  let(:token) { JwtService.encode(user.id) }
  let(:headers) { { 'Authorization' => "Bearer #{token}" } }

  describe 'GET /api/v1/accounts' do
    let!(:account) { create(:account, user: user) }
    let!(:other_account) { create(:account) }  # outro usuário

    it 'returns only user accounts' do
      get '/api/v1/accounts', headers: headers

      expect(response).to have_http_status(:ok)
      expect(json_response['data'].size).to eq(1)
      expect(json_response['data'].first['id']).to eq(account.id)
    end

    context 'without authentication' do
      it 'returns 401' do
        get '/api/v1/accounts'
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'GET /api/v1/accounts/:id' do
    let(:account) { create(:account, user: user) }

    it 'returns account details' do
      get "/api/v1/accounts/#{account.id}", headers: headers

      expect(response).to have_http_status(:ok)
      expect(json_response['data']['id']).to eq(account.id)
    end

    context 'accessing another user account' do
      let(:other_account) { create(:account) }

      it 'returns 404' do
        get "/api/v1/accounts/#{other_account.id}", headers: headers
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
```

---

## Regras de Segurança

1. **Strong Parameters:** Nunca permita mass assignment
2. **Authorization:** Sempre use Pundit em actions que acessam recursos
3. **Scope por usuário:** `current_user.accounts.find(id)` ao invés de `Account.find(id)`
4. **Webhooks:** Valide assinaturas antes de processar
5. **Error Messages:** Retorne mensagens genéricas, logue detalhes
6. **Rate Limiting:** Configure Rack::Attack para endpoints sensíveis
7. **Minimal changes:** Altere o mínimo possível; pesquise padrões antes de implementar

