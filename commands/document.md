# /document

## Descrição

Atualiza a documentação do próprio framework FARO (README, docs/) ou a documentação de um achado/decisão, invocando `../agents/technical-writer.md`.

## Parâmetros

- `target` (obrigatório) — o que documentar (arquivo do framework, decisão arquitetural, guia de uso).
- `audience` (opcional) — `new-user`, `contributor`, `client`. Padrão: `new-user`.

## Exemplos

- `/document target:../docs/creating-agents.md`
- `/document target:"decisão de adotar SLSA nível 2 no pipeline" audience:contributor`

## Saída Esperada

Documento markdown atualizado/criado, com pelo menos um exemplo concreto, seguindo `../rules/documentation-standards.md`. Quando o alvo é uma decisão arquitetural relevante, sugerir também entrada correspondente no `../CHANGELOG.md`.
