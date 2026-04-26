---
name: Rails Query Object
description: Criar Query Objects para consultas complexas ao banco de dados
---

# Rails Query Object

Query Objects encapsulam **consultas complexas** ao banco de dados.

## Quando Usar

✅ **USE quando:**
- Query com mais de 2 condições/joins
- Query reutilizada em múltiplos lugares
- Dados para dashboards/relatórios
- Agregações complexas (sum, group, having)
- Queries com paginação

❌ **NÃO use quando:**
- Query simples → Use scope no Model
- Query de um registro → Use `Model.find`

## Estrutura

```
app/queries/
├── base_query.rb
└── [domínio]/
    └── [nome_descritivo]_query.rb
```

**Naming:** `ModelQuery` ou `DescriptiveQuery` (ex: `TransactionsByPeriodQuery`, `FinancialSummaryQuery`)

---

## Template Base

```ruby
# app/queries/base_query.rb
class BaseQuery
  def initialize(relation = default_relation)
    @relation = relation
  end

  def call
    raise NotImplementedError
  end

  private

  def default_relation
    raise NotImplementedError
  end
end
```

---

## Exemplo Completo

```ruby
# app/queries/dashboard/spending_by_category_query.rb
module Queries
  module Dashboard
    class SpendingByCategoryQuery
      ALLOWED_PERIODS = %w[week month quarter year].freeze

      def initialize(user, period: 'month')
        @user = user
        @period = validate_period(period)
      end

      def call
        user_transactions
          .where(transaction_type: 'DEBIT')
          .where(transaction_date: date_range)
          .group(:category)
          .select('category, SUM(amount) as total, COUNT(*) as count')
          .order('total DESC')
          .map { |r| { category: r.category || 'Sem categoria', total: r.total, count: r.count } }
      end

      private

      def validate_period(period)
        ALLOWED_PERIODS.include?(period) ? period : 'month'
      end

      def date_range
        case @period
        when 'week' then 1.week.ago..Time.current
        when 'month' then 1.month.ago..Time.current
        when 'quarter' then 3.months.ago..Time.current
        when 'year' then 1.year.ago..Time.current
        end
      end

      def user_transactions
        AccountTransaction
          .joins(:account)
          .where(accounts: { user_id: @user.id })
      end
    end
  end
end
```

---

## Query Composável com Filtros

```ruby
# app/queries/transactions/filtered_query.rb
module Queries
  module Transactions
    class FilteredQuery < BaseQuery
      def call(filters = {})
        @relation
          .then { |rel| filter_by_date(rel, filters[:start_date], filters[:end_date]) }
          .then { |rel| filter_by_category(rel, filters[:category]) }
          .then { |rel| filter_by_amount(rel, filters[:min_amount], filters[:max_amount]) }
          .then { |rel| filter_by_type(rel, filters[:type]) }
          .order(transaction_date: :desc)
      end

      private

      def default_relation
        AccountTransaction.all
      end

      def filter_by_date(rel, start_date, end_date)
        return rel unless start_date || end_date
        
        start_date ||= 1.year.ago
        end_date ||= Time.current
        rel.where(transaction_date: start_date..end_date)
      end

      def filter_by_category(rel, category)
        category.present? ? rel.where(category: category) : rel
      end

      def filter_by_amount(rel, min, max)
        rel = rel.where('amount >= ?', min) if min.present?
        rel = rel.where('amount <= ?', max) if max.present?
        rel
      end

      def filter_by_type(rel, type)
        return rel unless type.present?
        
        # Validar contra allowlist
        valid_types = %w[CREDIT DEBIT]
        return rel unless valid_types.include?(type.upcase)
        
        rel.where(transaction_type: type.upcase)
      end
    end
  end
end
```

---

## SQL Injection Prevention

```ruby
# ❌ VULNERÁVEL - NUNCA faça isso!
def call(name:)
  @relation.where("name LIKE '%#{name}%'")
end

# ❌ VULNERÁVEL - interpolação de string
def call(category:)
  @relation.where("category = '#{category}'")
end

# ✅ SEGURO - Use placeholders
def call(name:)
  @relation.where('name LIKE ?', "%#{sanitize_like(name)}%")
end

# ✅ SEGURO - Use hash syntax
def call(category:)
  @relation.where(category: category)
end

# ✅ SEGURO - Sanitize para LIKE
def call(search:)
  sanitized = ActiveRecord::Base.sanitize_sql_like(search)
  @relation.where('description ILIKE ?', "%#{sanitized}%")
end
```

---

## Paginação

```ruby
# app/queries/transactions/paginated_query.rb
module Queries
  module Transactions
    class PaginatedQuery < BaseQuery
      DEFAULT_PER_PAGE = 25
      MAX_PER_PAGE = 100

      def call(page: 1, per_page: DEFAULT_PER_PAGE)
        per_page = [[per_page.to_i, 1].max, MAX_PER_PAGE].min
        page = [page.to_i, 1].max

        @relation
          .order(created_at: :desc)
          .page(page)
          .per(per_page)
      end
    end
  end
end

# Uso no controller
def index
  transactions = Queries::Transactions::PaginatedQuery
    .new(current_user.transactions)
    .call(page: params[:page], per_page: params[:per_page])

  render json: {
    data: transactions,
    meta: {
      current_page: transactions.current_page,
      total_pages: transactions.total_pages,
      total_count: transactions.total_count
    }
  }
end
```

---

## Performance Tips

```ruby
# ✅ Use select para limitar colunas
.select(:id, :amount, :description, :transaction_date)

# ✅ Use includes para evitar N+1
.includes(:account, :category)

# ✅ Use pluck para dados simples
.pluck(:id, :amount)

# ✅ Use find_each para grandes volumes
def call
  @relation.find_each(batch_size: 1000) do |record|
    yield record
  end
end

# ✅ Use explain para debug
Rails.logger.debug @relation.explain
```

---

## Testing

```ruby
# spec/queries/dashboard/spending_by_category_query_spec.rb
RSpec.describe Queries::Dashboard::SpendingByCategoryQuery do
  subject(:result) { described_class.new(user, period: period).call }

  let(:user) { create(:user) }
  let(:account) { create(:account, user: user) }
  let(:period) { 'month' }

  describe '#call' do
    context 'with transactions' do
      before do
        create(:transaction, account: account, category: 'Food', amount: 100, transaction_type: 'DEBIT')
        create(:transaction, account: account, category: 'Food', amount: 50, transaction_type: 'DEBIT')
        create(:transaction, account: account, category: 'Transport', amount: 30, transaction_type: 'DEBIT')
      end

      it 'groups by category and sums amounts' do
        expect(result).to include(
          { category: 'Food', total: 150, count: 2 },
          { category: 'Transport', total: 30, count: 1 }
        )
      end

      it 'orders by total descending' do
        expect(result.first[:category]).to eq('Food')
      end
    end

    context 'with invalid period' do
      let(:period) { 'invalid' }

      it 'defaults to month' do
        # Não levanta erro, usa default
        expect { result }.not_to raise_error
      end
    end
  end
end
```

---

## Regras

1. **Um método público:** `#call` com parâmetros nomeados
2. **Receber relation:** permitir composição de queries
3. **Retornar ActiveRecord::Relation:** quando possível, para encadeamento
4. **Namespacing:** organizar por domínio (`Dashboard::`, `Reports::`)
5. **Usar `.then`:** para filtros opcionais (mais legível)
6. **Validar inputs:** usar allowlists para valores de usuário
7. **Nunca interpolar strings:** prevenir SQL Injection
8. **Paginar resultados:** evitar queries que retornam milhares de registros
9. **Minimal changes:** altere o mínimo possível; pesquise padrões antes de implementar

