# /tests

## Descrição

Gera ou avalia testes de segurança/regressão para um achado ou componente, seguindo `../rules/testing-standards.md`. Invoca o especialista de domínio do achado (ex.: `../agents/authorization-specialist.md` para um teste de regressão de BOLA) em conjunto com `../agents/secure-developer.md`.

## Parâmetros

- `target` (obrigatório) — componente/achado para o qual gerar teste.
- `type` (opcional) — `regression` (evita reintrodução de um achado corrigido), `coverage` (cobertura sistemática de uma categoria, ex. OWASP), `poc` (teste que reproduz um achado ainda não corrigido). Padrão: `regression`.

## Exemplos

- `/tests target:"achado #7 IDOR em /invoices/{id}" type:regression`
- `/tests target:./src/api type:coverage`

## Saída Esperada

Casos de teste (descrição do cenário, input, resultado esperado) prontos para incorporação na suíte existente, com referência ao achado/categoria de origem. Testes de `type:regression` são acompanhados de confirmação de que falham no código anterior à correção e passam após.
