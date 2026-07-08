# API Assessment

## Objetivo

Avaliar a segurança de uma API (REST/GraphQL/RPC) contra o OWASP API Security Top 10, com foco em controle de acesso a nível de objeto/função e consumo abusivo de recursos.

## Entrada

- Especificação da API (OpenAPI/GraphQL SDL) ou URL base.
- Tokens/credenciais de teste em múltiplos perfis de acesso.

## Saída

Relatório seguindo `../templates/api-review.md`, com achados no formato `../templates/finding.md`.

## Agentes Utilizados

`../agents/api-security-specialist.md` (principal), `../agents/authorization-specialist.md`, `../agents/authentication-specialist.md`, `../agents/performance-engineer.md` (rate limiting/exhaustion), `../agents/report-writer.md`.

## Ordem de Execução

1. `api-security-specialist` mapeia todos os endpoints/operações e schemas esperados.
2. `authentication-specialist` valida os mecanismos de autenticação (tokens, chaves de API, OAuth2/OIDC).
3. `authorization-specialist` testa BOLA/BFLA sistematicamente entre perfis.
4. `api-security-specialist` testa mass assignment, over-fetching e SSRF em endpoints relevantes.
5. `performance-engineer` avalia rate limiting e amplificação de custo em endpoints custosos.
6. `report-writer` consolida os achados.

## Checklists

`../rules/api-checklist.md`, `../rules/owasp-checklist.md`, `../rules/performance-review.md`.

## Artefatos Gerados

`../templates/api-review.md`, `../templates/finding.md`.
