---
name: RSpec Testing
description: Escrever testes RSpec seguindo Better Specs e Shoulda Matchers
---

# RSpec Testing

> TDD não é burocracia — é compromisso com excelência.

## Gems Essenciais

```ruby
# Gemfile
group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'shoulda-matchers'
  gem 'webmock'
  gem 'vcr'
  gem 'faker'
end

group :test do
  gem 'database_cleaner-active_record'
  gem 'simplecov', require: false
end
```

---

## Estrutura de Arquivos

```
spec/
├── rails_helper.rb
├── spec_helper.rb
├── factories/
│   └── users.rb
├── models/
│   └── user_spec.rb
├── services/
│   └── sync_accounts_service_spec.rb
├── queries/
│   └── filtered_query_spec.rb
├── requests/
│   └── api/v1/accounts_spec.rb
└── support/
    ├── factory_bot.rb
    ├── shoulda_matchers.rb
    └── shared_examples/
```

---

## Configuração

```ruby
# spec/rails_helper.rb
require 'spec_helper'
require 'simplecov'
SimpleCov.start 'rails'

ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

RSpec.configure do |config|
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
  
  # Expect syntax only
  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end
```

```ruby
# spec/support/shoulda_matchers.rb
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```

```ruby
# spec/support/factory_bot.rb
RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end
```

---

## Describe Methods

Use `.` para class methods e `#` para instance methods:

```ruby
# ❌ Ruim
describe 'the authenticate method for User' do

# ✅ Bom
describe '.authenticate' do  # class method
describe '#admin?' do       # instance method
```

---

## Use Contexts

Contextos começam com `when`, `with` ou `without`:

```ruby
# ❌ Ruim
it 'has 200 status code if logged in' do
it 'has 401 status code if not logged in' do

# ✅ Bom
describe '#show' do
  context 'when user is authenticated' do
    it { is_expected.to respond_with 200 }
  end

  context 'when user is not authenticated' do
    it { is_expected.to respond_with 401 }
  end
end
```

---

## Use let e let!

```ruby
# ❌ Ruim (before com variáveis de instância)
before { @user = FactoryBot.create(:user) }

# ✅ Bom (let é lazy-loaded)
let(:user) { create(:user) }
let(:account) { create(:account, user: user) }

# Use let! quando precisa criar antes do teste
let!(:existing_record) { create(:user, email: 'taken@example.com') }
```

---

## Subject

```ruby
# Named subject para clareza
describe User do
  subject(:user) { build(:user) }

  it 'is valid with valid attributes' do
    expect(user).to be_valid
  end

  # One-liner com is_expected
  it { is_expected.to be_valid }
end
```

---

## Model Specs (Shoulda Matchers)

```ruby
# spec/models/user_spec.rb
RSpec.describe User, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:accounts).dependent(:destroy) }
    it { is_expected.to have_many(:transactions).through(:accounts) }
    it { is_expected.to belong_to(:organization).optional }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_length_of(:password).is_at_least(8) }
    it { is_expected.to have_secure_password }
  end

  describe 'enums' do
    it { is_expected.to define_enum_for(:role).with_values(user: 'USER', admin: 'ADMIN') }
  end

  describe 'database' do
    it { is_expected.to have_db_column(:email).of_type(:string).with_options(null: false) }
    it { is_expected.to have_db_index(:email).unique }
  end

  describe 'encryption' do
    it { is_expected.to encrypt(:cpf) }
  end

  describe '#full_name' do
    subject(:user) { build(:user, first_name: 'John', last_name: 'Doe') }

    it 'returns concatenated name' do
      expect(user.full_name).to eq('John Doe')
    end
  end
end
```

---

## Service Specs

```ruby
# spec/services/pluggy/sync_accounts_service_spec.rb
RSpec.describe Pluggy::SyncAccountsService, type: :service do
  describe '.call' do
    subject(:result) { described_class.call(user: user, item_id: item_id) }

    let(:user) { create(:user) }
    let(:item_id) { 'pluggy_item_123' }

    context 'when sync is successful' do
      before do
        allow(Pluggy::Client).to receive(:accounts)
          .with(item_id: item_id)
          .and_return([{ id: 'acc_1', name: 'Checking' }])
      end

      it 'returns success' do
        expect(result).to be_success
      end

      it 'creates accounts' do
        expect { result }.to change(Account, :count).by(1)
      end

      it 'returns synced accounts' do
        expect(result.data).to include(have_attributes(name: 'Checking'))
      end
    end

    context 'when API fails' do
      before do
        allow(Pluggy::Client).to receive(:accounts)
          .and_raise(Pluggy::Client::ApiError.new('Connection failed'))
      end

      it 'returns failure' do
        expect(result).not_to be_success
      end

      it 'returns error message' do
        expect(result.error).to include('Connection failed')
      end
    end
  end
end
```

---

## Query Specs

```ruby
# spec/queries/spending_by_category_query_spec.rb
RSpec.describe SpendingByCategoryQuery, type: :query do
  describe '#call' do
    subject(:result) { described_class.new(user.transactions).call(start_date:, end_date:) }

    let(:user) { create(:user) }
    let(:start_date) { 30.days.ago }
    let(:end_date) { Time.current }

    let!(:food_transaction) { create(:transaction, user: user, category: 'Food', amount: -100) }
    let!(:transport_transaction) { create(:transaction, user: user, category: 'Transport', amount: -50) }
    let!(:old_transaction) { create(:transaction, user: user, category: 'Food', amount: -200, date: 60.days.ago) }

    it 'returns spending grouped by category' do
      expect(result).to include(
        hash_including(category: 'Food', total: 100),
        hash_including(category: 'Transport', total: 50)
      )
    end

    it 'excludes transactions outside date range' do
      expect(result.sum { |r| r[:total] }).to eq(150)
    end
  end
end
```

---

## Request Specs

```ruby
# spec/requests/api/v1/accounts_spec.rb
RSpec.describe 'Api::V1::Accounts', type: :request do
  let(:user) { create(:user) }
  let(:headers) { auth_headers(user) }

  describe 'GET /api/v1/accounts' do
    let!(:user_account) { create(:account, user: user) }
    let!(:other_account) { create(:account) }

    before { get '/api/v1/accounts', headers: headers }

    it 'returns 200' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns only user accounts' do
      expect(json_body['data'].size).to eq(1)
    end

    context 'without authentication' do
      let(:headers) { {} }

      it 'returns 401' do
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'GET /api/v1/accounts/:id' do
    context 'when account exists' do
      let(:account) { create(:account, user: user) }

      before { get "/api/v1/accounts/#{account.id}", headers: headers }

      it 'returns account' do
        expect(json_body['data']['id']).to eq(account.id)
      end
    end

    context 'when account belongs to another user' do
      let(:other_account) { create(:account) }

      before { get "/api/v1/accounts/#{other_account.id}", headers: headers }

      it 'returns 404' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
```

---

## Stubbing HTTP (WebMock/VCR)

```ruby
# spec/support/webmock.rb
require 'webmock/rspec'
WebMock.disable_net_connect!(allow_localhost: true)

# Em specs:
context 'when API returns 401' do
  before do
    stub_request(:get, 'https://api.pluggy.ai/accounts')
      .to_return(status: 401, body: { error: 'Unauthorized' }.to_json)
  end

  it 'handles unauthorized error' do
    expect(result.error).to include('Unauthorized')
  end
end
```

---

## Shared Examples

```ruby
# spec/support/shared_examples/authenticable.rb
RSpec.shared_examples 'requires authentication' do
  context 'without authentication' do
    let(:headers) { {} }

    it 'returns 401' do
      expect(response).to have_http_status(:unauthorized)
    end
  end
end

# Uso:
describe 'GET /api/v1/accounts' do
  before { get '/api/v1/accounts', headers: headers }
  
  it_behaves_like 'requires authentication'
end
```

---

## Factories

```ruby
# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    password { 'password123' }
    full_name { Faker::Name.name }

    trait :admin do
      role { :admin }
    end

    trait :with_accounts do
      transient do
        accounts_count { 2 }
      end

      after(:create) do |user, evaluator|
        create_list(:account, evaluator.accounts_count, user: user)
      end
    end
  end
end

# Uso:
create(:user)
create(:user, :admin)
create(:user, :with_accounts, accounts_count: 3)
```

---

## Helpers

```ruby
# spec/support/request_helpers.rb
module RequestHelpers
  def json_body
    JSON.parse(response.body)
  end

  def auth_headers(user)
    token = JwtService.encode(user.id)
    { 'Authorization' => "Bearer #{token}" }
  end
end

RSpec.configure do |config|
  config.include RequestHelpers, type: :request
end
```

---

## Matchers Reference

### ActiveModel
| Matcher | Testa |
|---------|-------|
| `validate_presence_of` | `validates :attr, presence: true` |
| `validate_uniqueness_of` | `validates :attr, uniqueness: true` |
| `validate_length_of` | `validates :attr, length: {}` |
| `validate_numericality_of` | `validates :attr, numericality: {}` |
| `validate_inclusion_of` | `validates :attr, inclusion: {}` |
| `allow_value` | Valores específicos válidos/inválidos |
| `have_secure_password` | `has_secure_password` |

### ActiveRecord
| Matcher | Testa |
|---------|-------|
| `belong_to` | `belongs_to :association` |
| `have_many` | `has_many :associations` |
| `have_one` | `has_one :association` |
| `have_db_column` | Coluna no banco |
| `have_db_index` | Índice no banco |
| `define_enum_for` | `enum status: {}` |
| `encrypt` | `encrypts :attr` |

---

## Regras

1. **Expect syntax:** Sempre use `expect()`, nunca `should`
2. **Uma expectation por teste:** Em testes unitários isolados
3. **Factories > Fixtures:** Use FactoryBot, nunca fixtures
4. **let > before:** Prefira `let` a variáveis de instância
5. **Contexts claros:** Comece com `when`, `with`, `without`
6. **Descriptions curtas:** Máximo 40 caracteres
7. **Stub APIs externas:** Nunca dependa de serviços externos
8. **Test behavior:** Teste comportamento, não implementação
9. **Minimal changes:** Altere o mínimo possível; pesquise padrões antes de implementar
