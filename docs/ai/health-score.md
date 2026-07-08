# Saúde Financeira

**Documento:** AI-009  
**Versão:** 1.0  
**Última atualização:** 08/07/2026  
**Status:** ✅ Implementado

---

# Objetivo

Este documento descreve o funcionamento do módulo de Saúde Financeira do Grana.ai.

Esse módulo é responsável por analisar o estado financeiro do usuário a partir das transações registradas, produzindo indicadores, recomendações e respostas contextualizadas durante a conversa.

Além do card exibido no dashboard, o módulo também responde perguntas específicas do usuário sobre sua situação financeira.

---

# Componentes

O módulo é composto por quatro funcionalidades principais:

- Health Score
- Financial Health
- Spending Analysis
- Financial Situation

Todas utilizam as mesmas informações financeiras do mês corrente.

---

# Fluxo Geral

```text
Nova transação
        │
        ▼
Persistência
        │
        ▼
Recalcular indicadores
        │
        ▼
Atualizar dashboard
        │
        ▼
Gerar insights
        │
        ▼
Responder ao usuário
```

Sempre que uma transação altera o estado financeiro do usuário, o módulo recalcula automaticamente seus indicadores.

---

# Health Score

O Health Score representa uma avaliação resumida da saúde financeira do usuário.

O score é apresentado em uma escala de:

```text
0 ───────────────► 100
```

Além da pontuação numérica, o sistema apresenta uma classificação qualitativa.

Exemplos observados durante os testes:

- Saudável
- Crítica

---

## Atualização

O score é atualizado automaticamente após alterações financeiras relevantes.

Durante os testes foi validado que o score sofre alterações após:

- registro de receitas;
- registro de despesas;
- mudança do saldo mensal;
- alteração do comprometimento da renda.

---

# Financial Health

O agente responde perguntas específicas sobre a saúde financeira.

Exemplo validado:

```text
como está minha saúde financeira?
```

↓

Resposta:

```text
Sua saúde financeira está forte: 100/100.
Você já guardou R$100 para metas neste mês.
```

Essa resposta resume o estado financeiro atual utilizando o Health Score como referência.

---

# Spending Analysis

O agente também responde perguntas relacionadas ao ritmo de gastos.

Exemplo validado:

```text
estou gastando muito?
```

↓

Resposta:

```text
Você está num ritmo moderado:
87% da renda já foi para gastos.

O peso maior está em Transporte (43%).
```

Essa resposta utiliza informações como:

- percentual da renda comprometida;
- categoria predominante;
- distribuição das despesas.

---

# Financial Situation

O agente consegue resumir a situação financeira do mês.

Exemplo validado:

```text
como estou financeiramente?
```

↓

Resposta:

```text
Entradas

Saídas

Saldo

Próximo passo
```

Exemplo observado:

```text
Este mês você tem R$2000.00 de entradas e R$1748.90 de saídas, com saldo positivo de R$151.10.

Próximo passo:
revisar Transporte, que concentra 43% dos gastos.
```

---

# Insights Automáticos

Além das perguntas explícitas, o agente produz recomendações automaticamente após determinados eventos.

Exemplos validados:

Receita:

```text
Com o salário entrando, vale planejar o mês com calma.
```

Moradia:

```text
Contas de casa entram no grupo dos gastos essenciais.
```

Streaming:

```text
Vale revisar quais assinaturas você realmente usa.
```

Saldo negativo:

```text
Você já gastou mais do que recebe este mês.
```

Comprometimento superior a 90% da renda:

```text
Hora de pisar no freio.
```

Esses insights são produzidos de forma contextual conforme a evolução do cenário financeiro do usuário.

---

# Relação com Outros Componentes

O módulo utiliza informações produzidas por diversos componentes do sistema.

- parser
- categorization
- goals
- recurring
- memory

Além disso, alimenta diretamente:

- dashboard financeiro;
- card de saúde financeira;
- recomendações exibidas no chat.

---

# Limitações Atuais

Durante a validação foram observadas algumas limitações.

## Inconsistência entre Chat e Dashboard

Em alguns cenários o dashboard apresentou um score diferente daquele informado pelo chat imediatamente após alterações financeiras.

Essa inconsistência indica que ambos podem estar utilizando momentos diferentes de atualização.

---

## Prioridade de Resposta

Durante uma correção de categoria foi observado que o agente respondeu um insight financeiro em vez de confirmar a alteração realizada.

Exemplo observado:

```text
o mercado 259 é alimentação
```

↓

Resposta recebida:

```text
Você já gastou mais do que recebe este mês.
```

Em vez de confirmar a atualização da categoria.

---

## Explicabilidade

O agente informa o score, porém não explica detalhadamente:

- como o valor foi calculado;
- quais fatores aumentaram o score;
- quais fatores reduziram o score.

---

## Histórico

O sistema não apresenta:

- evolução histórica do score;
- comparação entre meses;
- tendência financeira.

---

# Planejamento

As seguintes evoluções estão previstas para futuras versões.

## Explicação do Score

Permitir que o usuário consulte:

- fatores positivos;
- fatores negativos;
- composição completa do cálculo.

---

## Histórico Financeiro

Exibir:

- evolução mensal;
- comparação entre períodos;
- tendência do score.

---

## Recomendações Personalizadas

Gerar recomendações considerando:

- perfil financeiro;
- comportamento histórico;
- metas;
- recorrências;
- sazonalidade.

---

## Motor de Análise Financeira

Na arquitetura baseada em MCP, o cálculo da saúde financeira deverá ser realizado por um serviço especializado responsável por:

- calcular indicadores;
- gerar insights;
- atualizar o dashboard;
- responder consultas financeiras;
- fornecer recomendações ao agente.

O agente passará a consumir esses dados por meio de ferramentas específicas, sem implementar diretamente as regras de negócio.

---

# Dependências

Este documento relaciona-se com:

- `decision-pipeline.md`
- `parser.md`
- `categorization.md`
- `goals.md`
- `memory.md`
- `tools.md`
