# /refactor

## Descrição

Recomenda refatoração de código motivada por achado de segurança (ex.: centralizar verificação de autorização espalhada), invocando `../agents/secure-developer.md` com o achado de origem como insumo.

## Parâmetros

- `target` (obrigatório) — arquivo(s)/módulo a refatorar.
- `finding` (obrigatório) — achado de segurança que motiva a refatoração (referência a um achado de outro comando/agente).
- `constraints` (opcional) — restrições a respeitar (compatibilidade de API pública, prazo, cobertura de teste mínima).

## Exemplos

- `/refactor target:./src/auth finding:"autorização verificada de forma inconsistente entre 6 endpoints"`
- `/refactor target:./src/logging finding:"dados sensíveis logados em 3 módulos distintos" constraints:"manter compatibilidade com dashboards existentes"`

## Saída Esperada

Plano de refatoração incremental (não um rewrite completo) que elimina a causa raiz do achado, com indicação de testes de regressão necessários (ver `../rules/testing-standards.md`) antes de considerar a refatoração concluída.
