# Bug Hunting

## Objetivo

Buscar vulnerabilidades de forma exploratória e ampla em um alvo (não limitada a um checklist fixo), priorizando criatividade e cobertura de casos de borda sobre metodologia rígida.

## Entrada

- Alvo (aplicação, API, binário) e escopo de bug bounty/engajamento, incluindo o que está fora de escopo.

## Saída

Lista de achados priorizados por severidade/recompensa potencial, cada um com PoC.

## Agentes Utilizados

`../agents/web-pentester.md`/`../agents/api-security-specialist.md` (conforme o alvo), `../agents/authorization-specialist.md`, `../agents/exploit-developer.md` (se um achado exige PoC de execução de código), `../agents/report-writer.md`.

## Ordem de Execução

1. Especialista de domínio (web/API) mapeia a superfície e gera hipóteses de falha fora do óbvio (edge cases, fluxos multi-step, estados de erro).
2. Cada hipótese é testada e validada com PoC mínimo antes de ser reportada.
3. Achados de controle de acesso são aprofundados por `authorization-specialist`.
4. Achados que exigem exploração de memória são aprofundados por `exploit-developer`.
5. `report-writer` prioriza os achados por severidade e clareza de impacto para submissão.

## Checklists

`../rules/testing-standards.md` (PoC obrigatório), `../rules/owasp-checklist.md` como piso mínimo, não teto.

## Artefatos Gerados

`../templates/finding.md`, `../templates/poc.md`.
