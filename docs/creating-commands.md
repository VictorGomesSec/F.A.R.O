# Como Criar um Novo Comando

## Quando criar um comando

Um comando é um ponto de entrada nomeado e reutilizável (`/nome`) para invocar um agente ou workflow com parâmetros bem definidos. Crie um novo comando quando um cenário de uso é comum o suficiente para merecer um atalho — se o cenário é raro/único, invocar o agente/workflow diretamente é suficiente e não exige um novo comando.

## Estrutura Obrigatória (nesta ordem)

1. **Descrição** — o que o comando faz e qual agente/workflow invoca.
2. **Parâmetros** — lista de parâmetros, marcando quais são obrigatórios vs. opcionais, com valor padrão quando aplicável.
3. **Exemplos** — pelo menos dois exemplos de invocação realista.
4. **Saída Esperada** — o formato/template de saída, com link para o `template` correspondente em `../templates/`.

## Exemplo Mínimo

```markdown
# /meu-comando

## Descrição

Invoca `../agents/meu-agente.md` para [tarefa específica].

## Parâmetros

- `target` (obrigatório) — [o que é o alvo].
- `opcao` (opcional) — [o que controla]. Padrão: [valor].

## Exemplos

- `/meu-comando target:./algo`

## Saída Esperada

[Formato, referenciando um template em `../templates/`.]
```

## Regra de Consistência

Se o comando invoca um workflow multi-agente (não apenas um único agente), referencie o workflow em `../workflows/` explicitamente na seção "Saída Esperada" ou "Descrição", para que o usuário entenda que múltiplos especialistas serão engajados.

## Checklist Antes de Adicionar

- [ ] O agente/workflow referenciado existe.
- [ ] Parâmetros obrigatórios vs. opcionais estão claramente marcados.
- [ ] Pelo menos dois exemplos de uso realista.
- [ ] A saída esperada referencia um template real em `../templates/`.
