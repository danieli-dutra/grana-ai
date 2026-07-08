# Metas Financeiras

**Documento:** AI-008  
**Versão:** 1.0  
**Última atualização:** 08/07/2026  
**Status:** ⚠️ Parcialmente Implementado

---

# Objetivo

Este documento descreve como o agente financeiro utiliza metas para contextualizar lançamentos, acompanhar o progresso financeiro do usuário e gerar recomendações durante a conversa.

As metas representam objetivos financeiros que podem receber contribuições ao longo do tempo e servir como referência para sugestões do agente.

---

# Conceito

Uma meta representa um objetivo financeiro definido pelo usuário.

Exemplos:

- Viagem
- Revisão do Carro
- Reserva de Emergência
- Notebook Novo

O agente utiliza essas informações para interpretar lançamentos, registrar contribuições e produzir respostas contextualizadas.

---

# Fluxo

Fluxo simplificado:

```text
Mensagem do usuário
        │
        ▼
Parser
        │
        ▼
Reconhecimento da intenção
        │
        ▼
Consulta às metas
        │
        ▼
Atualização ou recomendação
        │
        ▼
Resposta ao usuário
```

---

# Funcionalidades Implementadas

## Associação de Receitas

Quando uma nova receita é registrada, o agente pode sugerir que parte desse valor seja destinada a uma meta existente.

Exemplo validado:

Usuário:

```text
Recebi um reembolso da Amazon 20
```

↓

Agente:

```text
Esse valor pode representar um avanço na sua meta "Viagem Europa".
```

---

## Registro de Contribuições

O usuário pode registrar valores destinados diretamente para uma meta.

Exemplo validado:

```text
guardar 400 para revisão
```

↓

O agente identifica a meta correspondente e registra a contribuição.

---

## Reconhecimento Semântico

O agente consegue resolver referências aproximadas ao nome de uma meta.

Exemplo validado:

```text
guardar 400 para revisão
```

↓

Meta encontrada:

```text
Revisão do Carro
```

Não é necessário informar exatamente o nome completo da meta.

---

## Cálculo de Progresso

Após registrar uma contribuição, o agente informa o progresso atual da meta.

Exemplo observado:

```text
Você já tem 50% da meta "Revisão do Carro".
```

O percentual é calculado automaticamente pelo sistema.

---

## Correção de Contribuições

Caso uma contribuição seja associada à meta incorreta, o usuário pode solicitar a correção.

Exemplo validado:

Usuário:

```text
Foi errado. Esse 400 era meta Revisão do Carro.
```

↓

Agente:

```text
Feito. Corrigi esse lançamento para sua meta "Revisão do Carro".
```

---

# Contexto Conversacional

O agente utiliza o contexto da conversa para relacionar novas receitas, economias e contribuições às metas cadastradas.

Essa informação é utilizada para gerar recomendações contextualizadas durante a interação.

---

# Limitações Atuais

Durante os testes foram observadas as seguintes limitações:

- o agente não responde consultas genéricas sobre metas (ex.: "Posso revisar minha meta?");
- não explica como o percentual de progresso foi calculado;
- não revisa automaticamente cálculos quando questionado pelo usuário;
- não apresenta o histórico de contribuições realizadas;
- não lista metas existentes sob solicitação;
- edição e exclusão completas de metas ainda não foram validadas;
- gerenciamento simultâneo de múltiplas metas ainda não foi validado.

---

# Planejamento

As seguintes funcionalidades fazem parte da evolução prevista para o sistema.

## Gestão Completa

Permitir ao usuário:

- criar metas;
- editar metas;
- excluir metas;
- arquivar metas;
- listar metas existentes.

---

## Transparência dos Cálculos

O agente deverá ser capaz de explicar:

- valor da meta;
- valor acumulado;
- percentual atual;
- contribuições consideradas no cálculo.

---

## Planejamento Inteligente

O agente poderá sugerir automaticamente:

- quanto guardar;
- quando guardar;
- distribuição entre diferentes metas;
- impacto financeiro de novos gastos;
- previsão de conclusão da meta.

---

## Priorização

O usuário poderá definir prioridades entre metas.

Essas prioridades poderão ser consideradas durante recomendações financeiras.

---

## Integração MCP

Na arquitetura baseada em MCP, o gerenciamento das metas poderá ser realizado por uma ferramenta especializada responsável por:

- criar metas;
- atualizar metas;
- registrar contribuições;
- consultar progresso;
- listar metas;
- gerar recomendações.

---

# Dependências

Este documento relaciona-se com:

- `memory.md`
- `decision-pipeline.md`
- `recurring.md`
- `tools.md`
