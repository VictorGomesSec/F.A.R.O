# /api-review

## Descrição

Revisão de segurança de uma API (REST/GraphQL/RPC), invocando `../agents/api-security-specialist.md` contra o checklist de `../rules/api-checklist.md` e `../rules/owasp-checklist.md`.

## Parâmetros

- `target` (obrigatório) — especificação OpenAPI/GraphQL SDL, URL base da API, ou repositório com o código da API.
- `auth` (opcional) — credenciais/tokens de teste por perfil de acesso.
- `focus` (opcional) — lista de categorias a priorizar (`bola`, `bfla`, `rate-limiting`, `mass-assignment`, `ssrf`). Padrão: todas.

## Exemplos

- `/api-review target:./openapi.yaml`
- `/api-review target:https://api.empresa.com/v1 auth:token_user:...,token_admin:... focus:bola,bfla`

## Saída Esperada

Relatório seguindo `../templates/api-review.md`, com achados mapeados ao OWASP API Security Top 10. Ver `../workflows/api-assessment.md` para o processo completo.
