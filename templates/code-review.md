# Template: Code Review

Estrutura de saída de `../workflows/code-review.md` e `../commands/code-review.md`.

---

# Revisão de Código — {{Repositório/Diretório/PR}}

## Escopo

- **Alvo**: {{caminho/diff}}
- **Linguagem(ns)**: {{lista}}
- **Foco da revisão**: {{categorias priorizadas, ex.: injection, auth, crypto}}

## Sumário de Achados

| ID | Arquivo:Linha | Categoria | Severidade | CWE |
|---|---|---|---|---|
| {{F-01}} | {{arquivo:linha}} | {{categoria}} | {{severidade}} | {{CWE}} |

## Achados Detalhados

{{Um bloco de `finding.md` por achado.}}

## Avaliação de Dependências

{{Resumo do que `../agents/supply-chain-security-specialist.md` encontrou, se incluído no escopo.}}

## Padrões Recorrentes

{{Se o mesmo tipo de falha aparece em múltiplos arquivos, documentar como padrão sistêmico e sugerir correção centralizada (ex.: middleware, biblioteca compartilhada) em vez de N correções pontuais.}}
