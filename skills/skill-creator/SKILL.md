---
name: skill-creator
description: Crie novas skills para estender as capacidades dos agentes de IA. Guia para estrutura, convenções e boas práticas na criação de skills especializadas.
---

# Skill Creator — Criando Novas Skills

> "Skills são "onboarding guides" para domínios específicos — transformam um agente genérico em um especialista."

---

## O que é uma Skill

Skills são pacotes modulares que estendem as capacidades do agente de IA fornecendo:

1. **Workflows especializados** — Procedimentos multi-step para domínios específicos
2. **Integrações de ferramentas** — Instruções para APIs, arquivos específicos
3. **Conhecimento de domínio** — Regras de negócio, schemas, convenções
4. **Recursos empacotados** — Scripts, templates, referências

---

## Anatomia de uma Skill

```
skill-name/
├── SKILL.md              # (obrigatório) Instruções e metadata
│   ├── YAML frontmatter  # name e description
│   └── Markdown body     # Instruções
├── scripts/              # (opcional) Código executável
│   ├── analyze.rb
│   └── generate_report.py
├── references/           # (opcional) Documentação de referência
│   ├── api_docs.md
│   └── conventions.md
└── assets/               # (opcional) Templates, imagens, etc
    ├── template.html
    └── logo.png
```

---

## SKILL.md — Estrutura

### Frontmatter (Obrigatório)

```yaml
---
name: nome-da-skill
description: Descrição clara de quando usar. Seja específico!
---
```

**Regras do `name`:**
- Curto (2-3 palavras)
- Kebab-case (`clean-code`, não `cleanCode`)
- Sem prefixos redundantes (`rails-`, não `ruby-rails-`)

**Regras do `description`:**
- Primeira frase: quando usar
- Evite "ajuda com" ou "para trabalhar com"
- Seja específico: domínio + ação

### Body — Instruções

```markdown
# Título da Skill

> "Quote inspiracional curta"

---

## Quando Usar

- Situação específica 1
- Situação específica 2

## Quando NÃO Usar

- Fora do escopo 1
- Quando outra skill é melhor

## Conceitos Fundamentais

| Conceito | Definição |
|----------|-----------|
| Termo 1 | O que significa |
| Termo 2 | O que significa |

## Padrões/Regras

### Padrão A

Descrição do padrão.

```ruby
# ❌ Anti-pattern
# Explicação do problema

# ✅ Pattern correto
# Explicação da solução
```

### Padrão B
...

## Checklist

```markdown
- [ ] Item verificável 1
- [ ] Item verificável 2
```

## Exemplos

### Exemplo 1: Caso Simples

Contexto + código.

### Exemplo 2: Caso Complexo

Contexto + código.

## Referências

- [Link externo relevante]
- Outra skill relacionada

## Lembre-se

> "Quote de fechamento inspirador"
```

---

## Princípios de Design

### 1. Conciso é Melhor

O context window é um recurso limitado. Skills competem por espaço com:
- System prompt
- Histórico de conversa
- Outras skills
- Request do usuário

**Desafie cada palavra:**
- "Claude já é inteligente. Precisa desta explicação?"
- "Este parágrafo justifica seu custo em tokens?"

**Comparativo:**

```markdown
# ❌ Verbose (muitos tokens)
## Introdução

O Ruby on Rails é um framework de aplicação web full-stack que inclui 
tudo o que você precisa para criar aplicações web robustas. Foi criado 
por David Heinemeier Hansson em 2004 e segue o padrão MVC...

# ✅ Conciso (economiza tokens)
## Convenções Rails

| Padrão | Localização |
|--------|-------------|
| Controllers | `app/controllers/` |
| Models | `app/models/` |
| Services | `app/services/` |
```

### 2. Exemplos > Explicações

```markdown
# ❌ Explicação longa
Para criar um Service Object no estilo Shopify, você deve criar uma 
classe que herda de ApplicationService. Esta classe deve ter um método
`initialize` que aceita os parâmetros necessários...

# ✅ Exemplo direto
```ruby
class Orders::CreateService < ApplicationService
  def initialize(user:, items:)
    @user = user
    @items = items
  end
  
  def call
    # implementação
  end
end
```
```

### 3. Graus de Liberdade Apropriados

| Nível | Quando Usar | Formato |
|-------|-------------|---------|
| **Alto** | Múltiplas abordagens válidas | Instruções textuais |
| **Médio** | Padrão preferido, variação aceitável | Pseudocódigo |
| **Baixo** | Operação frágil, consistência crítica | Script específico |

### 4. Sem Duplicação

Informação deve estar em **SKILL.md** OU **references/**, não ambos.

- SKILL.md: Instruções essenciais e procedimentos
- references/: Detalhes, schemas, documentação extensa

---

## Recursos (Opcionais)

### scripts/

Use quando:
- Código é reescrito repetidamente
- Determinismo é crítico
- Lógica complexa de transformação

```python
# skills/pdf-processing/scripts/extract_text.py
import sys
import pdfplumber

def extract_text(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        return "\n".join(page.extract_text() for page in pdf.pages)

if __name__ == "__main__":
    print(extract_text(sys.argv[1]))
```

**Na SKILL.md:**
```markdown
## Extração de Texto

Use o script disponível:

```bash
python skills/pdf-processing/scripts/extract_text.py arquivo.pdf
```
```

### references/

Use quando:
- Documentação extensa (>1000 palavras)
- Informação de consulta (não procedimental)
- Schemas, contratos de API

**Estrutura:**
```markdown
# references/api-schema.md

## Autenticação

### POST /auth/login

Request:
```json
{
  "email": "string",
  "password": "string"
}
```

Response 200:
```json
{
  "access_token": "string",
  "refresh_token": "string",
  "expires_in": 3600
}
```
```

**Na SKILL.md:**
```markdown
## API Endpoints

Consulte `references/api-schema.md` para detalhes completos.
```

### assets/

Use quando:
- Templates de saída
- Imagens, fontes
- Boilerplate code

```
skills/slide-deck/assets/
├── template.pptx
├── logo.png
└── styles.css
```

---

## Checklist de Criação

```markdown
- [ ] Nome é curto e descritivo (kebab-case)
- [ ] Descrição explica QUANDO usar
- [ ] SKILL.md tem YAML frontmatter válido
- [ ] Body segue estrutura padrão
- [ ] Exemplos de código são válidos
- [ ] Anti-patterns mostram ❌ e ✅
- [ ] Checklist tem itens verificáveis
- [ ] Sem duplicação com references/
- [ ] Tamanho < 1000 linhas (ideal < 500)
- [ ] Revisado por outra pessoa
```

---

## Padrões de Nomenclatura

### Skills de Domínio

```
rails-controller       # Framework + componente
rspec-testing          # Ferramenta + uso
clean-code             # Conceito
api-design             # Domínio + ação
```

### Skills de Workflow

```
code-review            # Ação
tdd-workflow           # Processo + sufixo
documentation          # Entrega
```

### Evitar

```
ruby-on-rails-guide    # Muito longo
rails                  # Muito genérico
my-project-helpers     # Específico demais
help-with-testing      # Verbose
```

---

## Exemplo Completo

```markdown
---
name: rails-service-object
description: Criar Service Objects seguindo o padrão Shopify com Result 
  pattern. Use para lógica de negócio complexa, transações ou coordenação 
  de múltiplas operações.
---

# Rails Service Object

> "Controllers delegam, Services orquestram, Models representam."

---

## Quando Usar

- Lógica de negócio complexa (> 5 linhas)
- Múltiplas operações atômicas
- Coordenação entre múltiplos models
- Integração com APIs externas
- Geração de relatórios

## Quando NÃO Usar

- CRUD simples (use controller direto)
- Validações (use model)
- Queries complexas (use Query Object)
- Apresentação (use decorator/serializer)

---

## Estrutura Base

```ruby
# app/services/application_service.rb
class ApplicationService
  def self.call(...)
    new(...).call
  end
  
  def call
    raise NotImplementedError
  end
  
  private
  
  def success(data = nil)
    Result.success(data)
  end
  
  def failure(code, message = nil)
    Result.failure(code, message)
  end
end
```

## Convenções

| Aspecto | Convenção |
|---------|-----------|
| Localização | `app/services/{dominio}/` |
| Nome | `{Ação}{Sujeito}Service` |
| Método público | `call` |
| Parâmetros | Injeção via `initialize` |
| Retorno | `Result` object |

## Exemplo

```ruby
# app/services/orders/create_service.rb
module Orders
  class CreateService < ApplicationService
    def initialize(user:, items:, payment_method:)
      @user = user
      @items = items
      @payment_method = payment_method
    end
    
    def call
      return failure(:empty_items) if @items.blank?
      
      ActiveRecord::Base.transaction do
        order = create_order!
        process_payment!(order)
        send_confirmation!(order)
        
        success(order)
      end
    rescue PaymentError => e
      failure(:payment_failed, e.message)
    end
    
    private
    
    def create_order!
      Order.create!(
        user: @user,
        items: @items,
        total: calculate_total
      )
    end
    
    def calculate_total
      @items.sum(&:price)
    end
  end
end
```

## Uso no Controller

```ruby
class OrdersController < ApplicationController
  def create
    result = Orders::CreateService.call(
      user: current_user,
      items: items_from_params,
      payment_method: params[:payment_method]
    )
    
    if result.success?
      render json: result.data, status: :created
    else
      render_error(result.error)
    end
  end
end
```

## Checklist

- [ ] Herda de `ApplicationService`
- [ ] Um método público: `call`
- [ ] Parâmetros via `initialize`
- [ ] Retorna `Result` (success/failure)
- [ ] Transactions para operações atômicas
- [ ] Tratamento de erros específico
- [ ] Sem lógica de apresentação
- [ ] Testado isoladamente

## Lembre-se

> "Um bom Service é como um bom contrato — claro sobre entradas, saídas e responsabilidades."
```

---

## Integração com Agente

As skills ficam em `skills/` e são descobertas automaticamente.

```
skills/
├── rails-controller/SKILL.md
├── rails-service-object/SKILL.md
├── clean-code/SKILL.md
└── code-review/SKILL.md
```

O agente lê o `name` e `description` do frontmatter para decidir quando usar.

---

## Dicas Finais

1. **Comece pequeno** — Uma skill focada vale mais que uma genérica
2. **Teste a skill** — Peça ao agente para usar antes de finalizar
3. **Itere** — Skills evoluem com o uso
4. **Documente limitações** — O que a skill NÃO faz é tão importante
5. **Mantenha consistência** — Siga o estilo das skills existentes

---

## Lembre-se

> "A skill perfeita é aquela que faz o agente parecer um especialista sem que o usuário perceba que está usando uma skill."
