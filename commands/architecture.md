# /architecture

## Descrição

Revisão arquitetural de segurança de um sistema, invocando `../agents/chief-security-architect.md` com apoio de `../agents/infrastructure-reviewer.md`/`../agents/cloud-security-specialist.md` conforme o alvo, avaliada contra `../rules/architecture-principles.md`.

## Parâmetros

- `target` (obrigatório) — descrição da arquitetura, diagrama ou repositório com infraestrutura como código.
- `focus` (opcional) — lista de princípios a priorizar (`isolation`, `least-privilege`, `fail-safe`, `observability`). Padrão: todos.

## Exemplos

- `/architecture target:./docs/arquitetura-atual.md`
- `/architecture target:./infra focus:isolation,least-privilege`

## Saída Esperada

Relatório seguindo `../templates/architecture-review.md`, identificando violações sistêmicas dos princípios (não apenas achados pontuais) e recomendação de quais especialistas engajar para aprofundar cada lacuna.
