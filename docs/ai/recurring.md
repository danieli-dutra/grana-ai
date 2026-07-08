# Lançamentos Recorrentes

**Documento:** AI-007  
**Versão:** 1.0  
**Última atualização:** 08/07/2026  
**Status:** ⚠️ Parcialmente Implementado

---

# Objetivo

Este documento descreve como o agente identifica possíveis lançamentos recorrentes e conduz o fluxo de criação de recorrências.

O objetivo é reduzir o esforço do usuário no registro de transações que acontecem regularmente.

---

# Conceito

Uma recorrência representa uma transação que tende a acontecer periodicamente.

Exemplos:

- salário;
- aluguel;
- mensalidades;
- assinaturas;
- contas fixas.

O agente pode sugerir transformar um lançamento em recorrente quando identifica esse padrão.

---

# Fluxo Atual

Após registrar uma transação, o agente pode identificar que aquele lançamento possui características de recorrência.

Fluxo observado:

```text
Usuário

↓

Recebi 3000 de salário

↓

Transação registrada

↓

Agente identifica possível recorrência

↓

Pergunta ao usuário

↓

Deseja salvar como recorrente?

↓

Confirmação

↓

Recorrência criada
```

---

# Confirmação Obrigatória

O agente nunca cria uma recorrência automaticamente.

Sempre solicita confirmação do usuário antes do cadastro.

Exemplo validado:

Usuário:

```text
Recebi 3000 de salário
```

↓

Agente:

```text
Percebi que salário pode ser recorrente.

Deseja salvar como recorrente?

Salário — R$3000
```

↓

Usuário confirma.

↓

Recorrência criada.

---

# Identificação

Na implementação atual, a identificação ocorre por inferência baseada na descrição da transação.

Até o momento foi validado o reconhecimento para:

- Salário

Outros padrões ainda não foram formalmente testados.

---

# Estado Conversacional

Durante o fluxo de confirmação o agente mantém temporariamente o contexto da operação.

Isso permite concluir o cadastro mesmo quando a confirmação ocorre em mensagens posteriores.

---

# Relação com a Memória

O fluxo de recorrência utiliza a memória conversacional para:

- lembrar qual transação está sendo analisada;
- aguardar confirmação;
- concluir o cadastro após a resposta do usuário.

A memória utilizada nesse processo está documentada em:

`memory.md`

---

# Limitações Atuais

Até a versão atual foram observadas as seguintes limitações:

- apenas alguns padrões de recorrência foram validados;
- não existe edição de recorrências;
- não existe exclusão de recorrências;
- não existe gerenciamento de recorrências já cadastradas;
- não foram validadas diferentes periodicidades;
- o agente não identifica automaticamente mudanças em recorrências existentes.

---

# Planejamento

As seguintes funcionalidades fazem parte da evolução prevista do sistema.

## Periodicidade

Cada recorrência deverá possuir uma periodicidade explícita.

Exemplos:

- diária;
- semanal;
- quinzenal;
- mensal;
- anual.

---

## Gerenciamento

O usuário poderá:

- listar recorrências;
- editar recorrências;
- pausar recorrências;
- excluir recorrências.

---

## Execução Automática

Na arquitetura futura, recorrências poderão gerar lançamentos automaticamente nas datas previstas.

---

## Aprendizado

Após identificar padrões repetitivos, o agente poderá sugerir novas recorrências mesmo sem palavras-chave específicas.

---

## Integração MCP

Na arquitetura baseada em MCP, o gerenciamento de recorrências poderá ser realizado por uma ferramenta especializada responsável por:

- criar recorrências;
- atualizar recorrências;
- remover recorrências;
- executar recorrências programadas.

---

# Dependências

Este documento relaciona-se com:

- `memory.md`
- `decision-pipeline.md`
- `goals.md`
- `tools.md`
