# Categorização de Transações

**Documento:** AI-005  
**Versão:** 1.0  
**Última atualização:** 06/07/2026  
**Status:** ✅ Implementado (MVP)

---

# Objetivo

Este documento descreve como o agente financeiro classifica receitas e despesas em categorias financeiras oficiais.

A categorização é responsável por transformar descrições livres informadas pelo usuário em categorias padronizadas utilizadas pelo sistema para organização, geração de insights e análise financeira.

As categorias disponíveis são definidas em:

`docs/product/financial-taxonomy.md`

---

# Fluxo de Classificação

Após o parser extrair as informações da mensagem, o agente executa o processo de categorização.

Fluxo simplificado:

```text
Mensagem do usuário
        │
        ▼
Parser
        │
        ▼
Extração dos dados
        │
        ▼
Reconhecimento da categoria
        │
        ▼
Registro da transação
```

A categorização ocorre antes do registro definitivo da transação.

---

# Uso da Taxonomia

O agente utiliza exclusivamente as categorias definidas na taxonomia oficial do projeto.

Não são criadas categorias arbitrárias durante o processamento.

Caso uma descrição seja reconhecida por meio de aliases ou regras de inferência, ela será convertida para a categoria correspondente na taxonomia.

---

# Reconhecimento por Aliases

O agente reconhece diversos termos equivalentes para identificar automaticamente determinadas categorias.

Alguns exemplos validados durante os testes:

| Descrição | Categoria |
|------------|-----------|
| aluguel | Moradia |
| água | Moradia |
| luz | Moradia |
| abasteci | Transporte |
| Netflix | Streaming |
| curso na DIO | Educação |
| ida ao cinema | Lazer |
| fiz uma aposta | Apostas |
| recebi salário | Salário |
| recebi um reembolso | Reembolso |

Esses aliases representam apenas exemplos observados durante a implementação e não constituem uma lista completa.

---

# Correção Manual de Categoria

Caso a categoria atribuída não seja adequada, o usuário pode solicitar sua alteração.

Exemplo:

```text
compra no mercado 85
```

↓

Categoria inicial:

```text
Mercado
```

↓

Usuário:

```text
mercado é alimentação
```

↓

Categoria atualizada:

```text
Alimentação
```

Também é possível utilizar o fluxo conversacional:

```text
trocar categoria
```

↓

O agente solicita a nova categoria e realiza a atualização após a confirmação do usuário.

---

# Normalização

Em alguns cenários o agente utiliza categorias intermediárias durante o reconhecimento inicial.

Posteriormente essas categorias podem ser normalizadas para uma categoria oficial da taxonomia.

Exemplo validado:

```text
Mercado
```

↓

```text
Alimentação
```

Essa normalização permite que descrições específicas sejam convertidas para categorias mais adequadas ao modelo financeiro do sistema.

---

# Limitações Atuais

Até a versão atual foram identificadas as seguintes limitações:

- o agente não aprende automaticamente com correções realizadas pelo usuário;
- não existe histórico de preferências individuais de categorização;
- não existe suporte para categorias personalizadas;
- cada transação pertence a apenas uma categoria principal;
- o agente não apresenta nível de confiança da classificação.

---

# Planejamento

As seguintes melhorias estão previstas para versões futuras:

## Aprendizado de Preferências

Após múltiplas correções realizadas pelo usuário, o agente deverá aprender automaticamente sua preferência de categorização.

Exemplo:

```text
Mercado
↓

Alimentação
```

Após repetidas correções, novos lançamentos semelhantes poderão ser classificados automaticamente.

---

## Nível de Confiança

Cada categorização poderá retornar um índice de confiança.

Exemplo:

```json
{
    "category": "Alimentação",
    "confidence": 0.97
}
```

Esse valor poderá ser utilizado para decidir quando o agente deve solicitar confirmação ao usuário.

---

## Categorias Personalizadas

O sistema poderá permitir que usuários criem categorias próprias, preservando a taxonomia oficial como base para análises globais.

---

## Ferramenta Especializada

Na arquitetura MCP prevista para futuras versões, a categorização poderá ser realizada por uma ferramenta especializada, independente do modelo de linguagem.

Exemplo conceitual:

```text
categorizeTransaction()
```

---

# Dependências

Este documento relaciona-se com:

- `financial-taxonomy.md`
- `system.md`
- `decision-pipeline.md`
- `parser.md`
