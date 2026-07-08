# Template: API Review

Estrutura de saída de `../workflows/api-assessment.md` e `../commands/api-review.md`, mapeada ao OWASP API Security Top 10 (ver `../rules/api-checklist.md`).

---

# Revisão de API — {{Nome da API}}

## Escopo

- **Especificação**: {{OpenAPI/GraphQL SDL/URL base}}
- **Perfis de acesso testados**: {{lista}}
- **Foco da revisão**: {{categorias priorizadas}}

## Cobertura OWASP API Security Top 10

| Categoria | Testado? | Achados |
|---|---|---|
| API1 BOLA | {{sim/não}} | {{IDs}} |
| API2 Broken Authentication | {{...}} | {{...}} |
| API5 BFLA | {{...}} | {{...}} |
| API6 Unrestricted Sensitive Business Flows | {{...}} | {{...}} |
| API8 Security Misconfiguration | {{...}} | {{...}} |

## Achados Detalhados

{{Um bloco de `finding.md` por achado.}}

## Rate Limiting e Consumo de Recursos

{{Resumo da avaliação de `../agents/performance-engineer.md`.}}
