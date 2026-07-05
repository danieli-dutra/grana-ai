# Intent Recognition

**Documento:** AI-003  
**Versão:** 1.0  
**Última atualização:** 03/07/2026  
**Status:** Implementado (com comportamento híbrido)

---

# Objetivo

Este documento descreve como o agente atualmente interpreta a intenção do usuário.

O sistema NÃO possui um classificador rígido de intents.

A identificação de intenção é baseada em interpretação contextual do modelo.

---

# Comportamento atual do sistema

O agente atualmente funciona de forma híbrida:

## 1. Interpretação de intenção

O modelo tenta inferir o objetivo do usuário com base no texto.

Exemplo:

> "gastei 30 no almoço"
→ intenção inferida: despesa

> "recebi meu salário"
→ intenção ambígua

---

## 2. Ambiguidade e fallback

Quando não há informação suficiente ou confiança na interpretação:

o sistema responde com uma mensagem de esclarecimento genérico.

Exemplo real:

Usuário:
> recebi meu salário

Resposta atual do sistema:
> Não entendi totalmente. Você quis registrar um gasto, corrigir uma categoria, ou buscar uma dica financeira?

---

# Especificação de intenções (implícitas no comportamento atual)

As intenções abaixo representam agrupamentos observados no comportamento do agente.

---

## Receita (implícita)

Reconhecida quando há indicação clara de entrada de dinheiro.

Exemplo:

> recebi 2000  
> ganhei dinheiro 55
> caiu pagamento 

⚠️ Não é reconhecida de forma consistente sem valor explícito.

---

## Despesa (implícita)

Reconhecida quando há indicação clara de gasto.

Exemplo:

> gastei 30  
> paguei 25 almoço

---

## Meta (implícita)

> quero juntar dinheiro  
> quero uma meta

---

## Consulta (implícita)

> quanto gastei  
> como está minha conta

---

## Correção (parcialmente detectada)

> era outra coisa  
> corrige isso

---

# Limitações atuais (importante)

## 1. Não há classificador determinístico de intents

A intenção depende de interpretação contextual do modelo.

---

## 2. Mensagens ambíguas geram fallback genérico

Exemplo:

> "recebi meu salário"

Resultado atual:

O sistema não resolve automaticamente como Receita.

---

## 3. Falta de separação entre intent e parser

Hoje o modelo mistura:

- intenção
- validação
- decisão de resposta

---

# Planejamento (não implementado)

## 🚧 Pipeline estruturado de intents

Definir um sistema determinístico com:

- FIN-001 Receita
- FIN-002 Despesa
- etc

com fallback controlado.

---

## 🚧 Fallback estruturado

Substituir resposta genérica por:

- solicitação de valor
- solicitação de contexto
- ou clarificação objetiva

Exemplo futuro:

> "Qual foi o valor recebido?"

---

# Conclusão

O sistema atual NÃO possui separação formal entre:

- intent recognition
- parsing
- decision making

Ele funciona como um modelo interpretativo com fallback genérico.
