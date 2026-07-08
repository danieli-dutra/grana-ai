# Guardrails

**Documento:** AI-011  
**Versão:** 1.0  
**Última atualização:** 08/07/2026  
**Status:** ✅ Implementado (MVP)

---

# Objetivo

Este documento define as regras obrigatórias de execução do agente financeiro.

Os guardrails existem para garantir previsibilidade, consistência e segurança durante a interpretação e execução das mensagens do usuário.

Essas regras possuem prioridade sobre respostas conversacionais e devem ser respeitadas independentemente da implementação utilizada.

---

# Princípios

O agente deve sempre priorizar:

1. Confiabilidade
2. Consistência
3. Contexto
4. Clareza
5. Conversação natural

Quando houver conflito entre automação e precisão, a precisão deve prevalecer.

---

# Prioridade de Execução

Toda mensagem deve seguir obrigatoriamente o fluxo definido em `decision-pipeline.md`.

```text
Intent

↓

Parser

↓

Confiança

↓

Contexto

↓

Ferramenta

↓

Atualização do estado

↓

Resposta
```

Nenhuma etapa pode ser ignorada.

---

# Regras Gerais

## Nunca inventar informações

O agente nunca deve:

- inventar valores;
- inventar categorias;
- inventar metas;
- inventar datas;
- assumir intenções sem evidências suficientes.

Quando houver dúvida, deve solicitar esclarecimentos.

---

## Nunca registrar transações incompletas

Caso uma transação não possua informações suficientes para ser registrada com segurança, o agente deve solicitar os dados faltantes.

Exemplo:

```text
Comprei uma bicicleta.
```

↓

Perguntar:

```text
Qual foi o valor?
```

ou

```text
Em qual categoria esse gasto entra?
```

Nunca registrar utilizando valores ou categorias assumidas.

---

## Nunca assumir categorias com baixa confiança

Quando a categorização possuir baixa confiança:

- interromper o registro;
- solicitar a categoria ao usuário;
- concluir o lançamento apenas após confirmação.

Essa regra possui prioridade sobre o fluxo normal de interpretação. 

---

## Sempre utilizar o mapeamento determinístico primeiro

Antes de utilizar interpretação contextual, o sistema deve consultar o mecanismo de categorização determinística.

Somente quando não houver correspondência conhecida o agente poderá solicitar confirmação ao usuário. 

---

# Guardrails de Contexto

## Operações pendentes possuem prioridade

Quando existir uma operação pendente, nenhuma nova intenção deve ser executada antes da conclusão dessa operação.

Estados conhecidos:

- pending_clarification
- pending_correction
- pending_goal
- pending_amount

Enquanto um desses estados existir, o pipeline normal deve permanecer suspenso. 

---

## Nunca perder o contexto da conversa

Após iniciar:

- uma correção;
- uma confirmação;
- uma definição de categoria;
- uma contribuição para meta;

o agente deve manter esse contexto até:

- concluir a operação;
- ou o usuário cancelá-la.

Nunca tratar a resposta seguinte como uma nova conversa. 

---

## Não aceitar entradas inválidas durante uma operação pendente

Durante uma correção de categoria, apenas categorias válidas (ou aliases conhecidos) podem concluir a operação.

Caso o usuário envie qualquer outra mensagem, o agente deve solicitar novamente a categoria, mantendo a operação pendente ativa. :contentReference[oaicite:5]{index=5}

---

# Guardrails Financeiros

## Nunca registrar metas como despesas

Contribuições para metas não representam gastos do orçamento.

Esses valores devem atualizar apenas o progresso da meta e os indicadores financeiros relacionados. 

---

## Nunca criar recorrências automaticamente

O agente pode identificar padrões recorrentes.

Entretanto, o cadastro somente poderá ocorrer após confirmação explícita do usuário. :contentReference[oaicite:7]{index=7}

---

## Nunca bloquear uma transação por causa de análises

Sempre que uma transação válida for identificada, a ordem deve ser:

1. registrar lançamento;
2. atualizar estado financeiro;
3. recalcular dashboard;
4. gerar insights.

Análises financeiras nunca devem impedir o registro de uma transação. 

---

## Nunca responder análises utilizando estado inconsistente

Consultas como:

- Como está minha saúde financeira?
- Estou gastando muito?
- Como estou financeiramente?

devem utilizar o estado financeiro mais recente disponível.

As respostas devem refletir o mesmo estado utilizado pelo dashboard.

---

# Guardrails Conversacionais

## Sempre confirmar ações

Após qualquer operação financeira concluída, o agente deve confirmar claramente a ação executada.

Exemplo:

```text
Feito 🙂
Atualizei esse lançamento para Alimentação.
```

---

## Não responder "Não entendi" para intenções conhecidas

Pedidos de:

- correção;
- ajuda financeira;
- saúde financeira;
- situação financeira;
- categorização;

devem sempre produzir uma resposta específica.

Respostas genéricas devem ser utilizadas apenas quando nenhuma intenção puder ser identificada. 

---

## Gerar insights somente após concluir a operação principal

O agente pode produzir recomendações e observações financeiras.

Entretanto:

A operação solicitada pelo usuário deve sempre ser concluída antes da geração de qualquer insight.

---

# Bugs Observados

Durante a auditoria do MVP foram identificados comportamentos que violam alguns guardrails.

## Correção interrompida por insight

Em determinados cenários, durante uma correção de categoria, o agente respondeu apenas um insight financeiro, deixando de confirmar a alteração solicitada.

---

## Inconsistência entre Chat e Dashboard

Em alguns testes, o score apresentado pelo dashboard diferiu daquele informado pelo chat imediatamente após alterações financeiras.

Ambos devem utilizar a mesma fonte de dados.

---

## Planejamento

Para versões futuras, recomenda-se ampliar os guardrails para contemplar:

- contexto temporal ("hoje", "ontem", "amanhã");
- múltiplas intenções em uma mesma mensagem;
- validação cruzada entre memória conversacional e memória financeira;
- confirmação para exclusão de lançamentos;
- prevenção de operações duplicadas;
- resolução de ambiguidades envolvendo múltiplas metas ou lançamentos semelhantes.

---

# Dependências

Este documento complementa:

- `decision-pipeline.md`
- `parser.md`
- `memory.md`
- `tools.md`
