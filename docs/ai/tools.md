# Ferramentas do Agente

**Documento:** AI-010  
**Versão:** 1.0  
**Última atualização:** 08/07/2026  
**Status:** ✅ Implementado (MVP)

---

# Objetivo

Este documento descreve as capacidades operacionais disponíveis para o agente financeiro.

As ferramentas representam ações que o agente pode executar após concluir o processo de interpretação da mensagem do usuário.

Elas não definem a implementação técnica dessas ações, apenas suas responsabilidades funcionais.

---

# Fluxo

Após interpretar a intenção do usuário, o agente seleciona uma ferramenta adequada para executar a ação solicitada.

Fluxo simplificado:

```text
Mensagem

        │

        ▼

Parser

        │

        ▼

Intenção

        │

        ▼

Ferramenta

        │

        ▼

Atualização do estado financeiro

        │

        ▼

Resposta ao usuário
```

Cada intenção deve resultar na execução de apenas uma ferramenta principal.

---

# Registro de Transações

## Registrar Receita

Responsável por registrar novas entradas financeiras.

Exemplos:

```text
Recebi 2500 de salário

Ganhei 300 de bônus

Recebi um PIX de 150
```

Resultado esperado:

- registrar receita;
- atualizar saldo;
- atualizar dashboard;
- atualizar indicadores financeiros;
- gerar resposta contextual.

---

## Registrar Despesa

Responsável por registrar novos gastos.

Exemplos:

```text
Paguei aluguel 600

Comprei mercado 250

Abasteci 180
```

Resultado esperado:

- registrar despesa;
- categorizar lançamento;
- atualizar dashboard;
- atualizar score financeiro;
- gerar insight contextual.

---

# Atualização de Categoria

Responsável por alterar a categoria de um lançamento já registrado.

Exemplos:

```text
mercado é alimentação

trocar categoria

isso era moradia
```

Resultado esperado:

- localizar lançamento;
- atualizar categoria;
- recalcular dashboard;
- recalcular indicadores financeiros;
- confirmar atualização.

---

# Gerenciamento de Metas

## Registrar Contribuição

Responsável por associar um valor a uma meta existente.

Exemplo:

```text
Guardar 300 para viagem
```

Resultado esperado:

- localizar meta;
- registrar contribuição;
- atualizar progresso;
- gerar resposta contextual.

---

## Corrigir Contribuição

Permite alterar posteriormente a meta associada a uma contribuição.

Exemplo validado:

```text
Esse 400 era para Revisão do Carro.
```

Resultado esperado:

- localizar contribuição;
- atualizar meta;
- recalcular progresso;
- confirmar alteração.

---

# Recorrências

Responsável por sugerir o cadastro de lançamentos recorrentes.

Exemplo:

```text
Recebi salário.
```

↓

Após recorrências identificadas:

```text
Percebi que salário pode ser recorrente.

Deseja salvar como recorrente?
```

O cadastro somente ocorre após confirmação do usuário. :contentReference[oaicite:1]{index=1}

---

# Consulta Financeira

## Saúde Financeira

Responde perguntas relacionadas ao Health Score.

Exemplo:

```text
Como está minha saúde financeira?
```

---

## Situação Financeira

Resume o estado financeiro do mês.

Exemplo:

```text
Como estou financeiramente?
```

---

## Análise de Gastos

Analisa o comportamento dos gastos.

Exemplo:

```text
Estou gastando muito?
```

Essas consultas utilizam os indicadores financeiros já calculados pelo sistema. 

---

# Recomendações Financeiras

O agente pode fornecer recomendações financeiras quando solicitado.

Exemplos:

```text
Como economizar?

Alguma dica de finanças?

Como melhorar meus gastos?
```

As recomendações devem considerar, sempre que possível:

- saldo atual;
- categorias predominantes;
- metas;
- gastos recorrentes;
- comportamento financeiro.

Não devem utilizar respostas genéricas. 

---

# Atualização de Estado

Após qualquer operação financeira, o agente deve atualizar automaticamente:

- saldo;
- dashboard;
- gráficos;
- totais por categoria;
- progresso das metas;
- indicadores financeiros;
- Health Score.

Essa atualização mantém todas as interfaces sincronizadas com o estado financeiro atual. 

---

# Dependências

As ferramentas utilizam informações produzidas por diversos componentes do sistema.

- `system.md`
- `intents.md`
- `decision-pipeline.md`
- `parser.md`
- `categorization.md`
- `memory.md`
- `recurring.md`
- `goals.md`
- `health-score.md`

---

# Observações

Este documento descreve apenas as capacidades funcionais atualmente implementadas pelo agente.

A arquitetura futura baseada em MCP utilizará essas capacidades como referência para definir ferramentas especializadas, mantendo a separação entre interpretação da linguagem natural, regras de negócio e persistência dos dados.
