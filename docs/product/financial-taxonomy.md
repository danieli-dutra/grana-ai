# Taxonomia Financeira

**Documento:** PRD-006  
**Versão:** 1.0  
**Última atualização:** 05/07/2026  
**Status:** 🚧 Em evolução

---

# Objetivo

Este documento define a taxonomia financeira oficial do Grana.ai.

Seu objetivo é estabelecer um conjunto padronizado de categorias para organização das receitas e despesas registradas pelo usuário.

A taxonomia representa o domínio financeiro do produto e serve como referência para todas as camadas do sistema, incluindo interface, banco de dados, API, agentes de IA e futuras integrações via MCP.

---

# Princípios

A taxonomia foi construída seguindo os seguintes princípios:

- cada transação pertence a uma única categoria principal;
- categorias representam o propósito financeiro da transação;
- descrições informadas pelo usuário não definem necessariamente a categoria final;
- uma categoria pode possuir diversos aliases reconhecidos pelo agente;
- a taxonomia deve permanecer estável mesmo com a evolução da IA.

---

# Estrutura da Taxonomia

## Receitas

| Categoria | Status | Observação |
|-----------|--------|------------|
| Salário | ✅ Implementada | Validada em testes |
| Reembolso | ✅ Implementada | Validada em testes |
| Renda Extra | ⚠️ Parcialmente validada | Reconhecida em alguns cenários |
| Investimentos | 🚧 Planejada | Ainda não implementada |
| Outros | ✅ Implementada | Categoria genérica |

---

## Despesas

| Categoria | Status | Observação |
|-----------|--------|------------|
| Alimentação | ✅ Implementada | Validada em testes |
| Moradia | ✅ Implementada | Validada em testes |
| Transporte | ✅ Implementada | Validada em testes |
| Saúde | ✅ Implementada | Validada em testes |
| Educação | ✅ Implementada | Validada em testes |
| Lazer | ✅ Implementada | Validada em testes |
| Streaming | ✅ Implementada | Validada em testes |
| Assinaturas | ⚠️ Parcialmente validada | Necessita novos testes |
| Compras Online | ⚠️ Parcialmente validada | Necessita novos testes |
| Pets | 🚧 Planejada | Categoria prevista |
| Impostos | 🚧 Planejada | Categoria prevista |
| Investimentos | 🚧 Planejada | Aportes financeiros |
| Viagens | 🚧 Planejada | Categoria prevista |
| Presentes | 🚧 Planejada | Categoria prevista |
| Doações | 🚧 Planejada | Categoria prevista |
| Apostas | ✅ Implementada | Validada em testes |
| Outros | ✅ Implementada | Categoria genérica |

---

# Categoria Transitória

Durante os testes do agente foi identificado o uso da categoria:

- Mercado

Atualmente essa categoria é utilizada como uma classificação intermediária para determinados lançamentos.

Exemplo:

> Compra no mercado

↓

Categoria inicial:

> Mercado

Posteriormente o usuário pode normalizar essa classificação para:

> Alimentação

A categoria **Mercado** não faz parte da taxonomia oficial e deverá ser substituída por categorias financeiras consolidadas nas próximas versões do sistema.

---

# Atributos da Transação (Planejamento)

Além da categoria principal, a arquitetura futura prevê que cada transação possa possuir atributos independentes da classificação financeira.

Exemplos:

- recorrente;
- assinatura;
- parcelada;
- prevista;
- conciliada.

Esses atributos não representam categorias financeiras e poderão coexistir com qualquer categoria da taxonomia.

Exemplo:

```json
{
  "type": "expense",
  "category": "Streaming",
  "subscription": true,
  "recurring": true
}
```

---

# Evolução da Taxonomia

Novas categorias somente deverão ser adicionadas quando:

- representarem um domínio financeiro distinto;
- possuírem relevância para análises e indicadores;
- reduzirem ambiguidades existentes;
- forem reutilizáveis para diferentes usuários.

Categorias não devem representar estabelecimentos específicos.

Por exemplo:

❌ Netflix

✅ Streaming

---

❌ Carrefour

✅ Alimentação

---

❌ Uber

✅ Transporte

---

# Relação com a IA

A taxonomia define apenas as categorias oficiais do sistema.

A forma como o agente interpreta descrições, reconhece aliases, escolhe categorias ou solicita correções é documentada separadamente em:

`docs/ai/categorization.md`

---

# Dependências

Este documento relaciona-se com:

- `overview.md`
- `principles.md`
- `categorization.md`
