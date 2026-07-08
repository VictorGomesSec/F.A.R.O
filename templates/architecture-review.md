# Template: Architecture Review

Estrutura de saída de `../workflows/architecture-review.md`, avaliada contra `../rules/architecture-principles.md`.

---

# Revisão Arquitetural — {{Sistema}}

## Visão Geral da Arquitetura

{{Resumo dos componentes principais e como se relacionam.}}

## Avaliação por Princípio

| Princípio | Aderência | Evidência | Violação Sistêmica? |
|---|---|---|---|
| Defesa em profundidade | {{Alta/Média/Baixa}} | {{evidência}} | {{sim/não}} |
| Menor privilégio | {{...}} | {{...}} | {{...}} |
| Isolamento de limites de confiança | {{...}} | {{...}} | {{...}} |
| Falha segura | {{...}} | {{...}} | {{...}} |
| Observabilidade desde o design | {{...}} | {{...}} | {{...}} |
| Design para revogação | {{...}} | {{...}} | {{...}} |

## Violações Sistêmicas Identificadas

{{Padrões que se repetem em múltiplos componentes — priorizar estes sobre achados isolados.}}

## Recomendações Priorizadas

{{Ordenadas por impacto arquitetural, com especialista sugerido para aprofundar cada uma.}}
