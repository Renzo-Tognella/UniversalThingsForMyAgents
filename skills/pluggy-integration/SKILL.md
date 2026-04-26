---
name: Pluggy Integration
description: Integrar com Pluggy API para Open Finance - conexões bancárias, transações, contas
---

# Pluggy Integration

Pluggy é um agregador de Open Finance que simplifica a conexão com instituições financeiras brasileiras.

## Conceitos Fundamentais

### Glossário

| Conceito | Descrição |
|----------|-----------|
| **Product** | Dados padronizados: Accounts, Credit Cards, Investments, Transactions, Identity |
| **Connector** | Integração com uma instituição financeira específica |
| **Item** | Conexão de um usuário com um Connector. Entry point para acessar Products |
| **API Key** | Token do servidor, expira em 2 horas. Usado para todas requests autenticadas |
| **Connect Token** | Token do cliente, expira em 30 minutos. Usado no Widget frontend |

### Fluxo de Integração

```
1. Backend gera Connect Token (POST /connect_token)
2. Frontend inicializa Pluggy Connect Widget com o token
3. Usuário seleciona instituição e autentica
4. Widget retorna itemId via callback
5. Backend usa itemId para buscar dados (accounts, transactions)
6. Webhooks notificam sobre atualizações
```

---

## API Reference

### Autenticação

```ruby
# 1. Criar API Key (server-side, expira em 2h)
POST https://api.pluggy.ai/auth
{
  "clientId": "your-client-id",
  "clientSecret": "your-client-secret"
}
# Response: { "apiKey": "..." }

# 2. Criar Connect Token (para Widget, expira em 30min)
POST https://api.pluggy.ai/connect_token
Authorization: Bearer <apiKey>
{
  "itemId": "uuid-opcional-para-update"  # opcional
}
# Response: { "accessToken": "..." }
```

### Items (Conexões)

```ruby
# Criar Item (geralmente feito via Widget)
POST https://api.pluggy.ai/items
{
  "connectorId": 201,
  "parameters": {
    "cpf": "123.456.789-00",
    "password": "senha"
  }
}

# Buscar Item
GET https://api.pluggy.ai/items/:id

# Atualizar Item (resync)
PATCH https://api.pluggy.ai/items/:id

# Deletar Item
DELETE https://api.pluggy.ai/items/:id
```

### Item Status (Lifecycle)

| Status | Descrição |
|--------|-----------|
| `UPDATING` | Sincronização em andamento |
| `UPDATED` | ✅ Sincronizado com sucesso |
| `LOGIN_ERROR` | Credenciais inválidas |
| `OUTDATED` | Erro inesperado (ver `executionStatus`) |
| `WAITING_USER_INPUT` | Aguardando MFA do usuário |

### Accounts

```ruby
GET https://api.pluggy.ai/accounts?itemId=:itemId

# Response Account (BANK type)
{
  "id": "uuid",
  "type": "BANK",
  "subtype": "CHECKING_ACCOUNT",  # ou SAVINGS_ACCOUNT
  "number": "0001/12345-0",
  "name": "Conta Corrente",
  "balance": 120950,  # em centavos
  "currencyCode": "BRL",
  "bankData": {
    "transferNumber": "123/0001/12345-0",
    "closingBalance": 120950,
    "overdraftContractedLimit": 0
  }
}

# Response Account (CREDIT type)
{
  "id": "uuid",
  "type": "CREDIT",
  "subtype": "CREDIT_CARD",
  "number": "1234",  # últimos 4 dígitos
  "balance": 14241,  # fatura atual em centavos
  "creditData": {
    "level": "PLATINUM",
    "brand": "MASTERCARD",
    "creditLimit": 51800,
    "availableCreditLimit": 51300,
    "balanceCloseDate": "2020-07-08",
    "balanceDueDate": "2020-07-17"
  }
}
```

### Transactions

```ruby
GET https://api.pluggy.ai/transactions?accountId=:accountId

# Response
{
  "total": 100,
  "page": 1,
  "results": [
    {
      "id": "uuid",
      "description": "TED Example",
      "amount": 1500,  # em centavos, positivo = crédito
      "date": "2021-04-12T00:00:00.000Z",
      "balance": 3500,
      "category": "Transfer",
      "categoryId": "05000000",
      "accountId": "uuid",
      "type": "CREDIT",  # CREDIT ou DEBIT
      "status": "POSTED",  # POSTED ou PENDING
      "creditCardMetadata": {
        "installmentNumber": 1,
        "totalInstallments": 6,
        "totalAmount": 9000
      }
    }
  ]
}
```

---

## Webhooks

### Registrar Webhook

```ruby
POST https://api.pluggy.ai/webhooks
{
  "event": "item/updated",
  "url": "https://your-api.com/webhooks/pluggy"
}
```

### Eventos Disponíveis

| Evento | Descrição |
|--------|-----------|
| `item/created` | Item criado e sincronizado com sucesso |
| `item/updated` | Item atualizado com sucesso |
| `item/deleted` | Item deletado |
| `item/error` | Erro na sincronização |
| `item/waiting_user_input` | Aguardando MFA |
| `item/login_succeeded` | Login OK, coletando dados |
| `transactions/created` | Novas transações disponíveis |
| `transactions/updated` | Transações atualizadas |
| `transactions/deleted` | Transações removidas |
| `connector/status_updated` | Status do connector mudou |

### Payload do Webhook

```json
{
  "event": "item/created",
  "eventId": "uuid",
  "itemId": "uuid",
  "triggeredBy": "USER",  // USER, CLIENT, SYNC, INTERNAL
  "clientUserId": "your-user-id"
}

// Para item/error
{
  "event": "item/error",
  "itemId": "uuid",
  "error": {
    "code": "USER_INPUT_TIMEOUT",
    "message": "User requested input had expired"
  }
}
```

---

## Implementação Rails

### Client

```ruby
# app/clients/pluggy/client.rb
module Clients
  module Pluggy
    class Client
      BASE_URL = 'https://api.pluggy.ai'.freeze

      def initialize
        @credentials = Rails.application.credentials.pluggy
      end

      def create_api_key
        response = connection(authenticated: false).post('/auth') do |req|
          req.body = {
            clientId: @credentials[:client_id],
            clientSecret: @credentials[:client_secret]
          }
        end
        response.body['apiKey']
      end

      def create_connect_token(item_id: nil)
        response = connection.post('/connect_token') do |req|
          req.body = { itemId: item_id }.compact
        end
        response.body['accessToken']
      end

      def get_item(item_id)
        connection.get("/items/#{item_id}").body
      end

      def get_accounts(item_id)
        connection.get('/accounts', { itemId: item_id }).body['results']
      end

      def get_transactions(account_id, from: nil, to: nil)
        params = { accountId: account_id, from: from, to: to }.compact
        connection.get('/transactions', params).body['results']
      end

      private

      def connection(authenticated: true)
        Faraday.new(url: BASE_URL) do |f|
          f.request :json
          f.response :json
          if authenticated
            f.request :authorization, 'Bearer', -> { api_key }
          end
          f.adapter Faraday.default_adapter
        end
      end

      def api_key
        @api_key ||= Rails.cache.fetch('pluggy_api_key', expires_in: 1.hour) do
          create_api_key
        end
      end
    end
  end
end
```

### Service para Sync

```ruby
# app/services/pluggy/sync_accounts_service.rb
module Pluggy
  class SyncAccountsService < BaseService
    def initialize(user:, item_id:)
      @user = user
      @item_id = item_id
    end

    def call
      client = Clients::Pluggy::Client.new
      
      # Verificar status do Item
      item = client.get_item(@item_id)
      return failure("Item status: #{item['status']}") unless item['status'] == 'UPDATED'

      # Buscar e salvar accounts
      accounts = client.get_accounts(@item_id)
      synced = accounts.map { |data| sync_account(data) }

      success(synced)
    rescue StandardError => e
      failure(e.message)
    end

    private

    def sync_account(data)
      Account.find_or_initialize_by(
        user: @user,
        external_account_id: data['id']
      ).tap do |account|
        account.update!(
          account_type: data['type'],
          account_subtype: data['subtype'],
          account_number: data['number'],
          account_name: data['name'],
          current_balance: data['balance'],
          currency: data['currencyCode']
        )
      end
    end
  end
end
```

### Controller para Widget Token

```ruby
# app/controllers/api/v1/pluggy_controller.rb
module Api
  module V1
    class PluggyController < BaseController
      def connect_token
        client = Clients::Pluggy::Client.new
        token = client.create_connect_token(item_id: params[:item_id])
        
        render_success(access_token: token)
      end
    end
  end
end
```

### Webhook Controller

```ruby
# app/controllers/api/v1/webhooks/pluggy_controller.rb
module Api
  module V1
    module Webhooks
      class PluggyController < ApplicationController
        skip_before_action :authenticate_user!

        def create
          case params[:event]
          when 'item/created', 'item/updated'
            Pluggy::SyncItemJob.perform_later(params[:itemId])
          when 'item/error'
            handle_item_error(params)
          when 'transactions/created'
            Pluggy::SyncTransactionsJob.perform_later(params[:itemId])
          end

          head :ok
        end

        private

        def handle_item_error(params)
          Rails.logger.error("[Pluggy] Item error: #{params[:error]}")
        end
      end
    end
  end
end
```

---

## Links Úteis

- [Documentação Oficial](https://docs.pluggy.ai/)
- [API Reference](https://docs.pluggy.ai/reference/auth-create)
- [Dashboard](https://dashboard.pluggy.ai/)
- [Status Page](https://status.pluggy.ai/)
- [Quickstart GitHub](https://github.com/pluggyai/quickstart)
