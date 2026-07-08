# /report

## Descrição

Consolida achados de um ou mais agentes/comandos em um relatório final, invocando `../agents/report-writer.md`.

## Parâmetros

- `findings` (obrigatório) — achados brutos a consolidar (referência a outputs de comandos anteriores, ou caminho para arquivos de achados).
- `audience` (opcional) — `executive`, `technical`, `both`. Padrão: `both`.
- `template` (opcional) — template específico a usar (ver `../templates/`). Padrão: `../templates/security-report.md`.

## Exemplos

- `/report findings:"achados de /web-pentest e /api-review desta sessão" audience:both`
- `/report findings:./achados-brutos.md template:../templates/executive-report.md audience:executive`

## Saída Esperada

Documento final estruturado (sumário executivo, metodologia, achados priorizados, apêndices), com terminologia e severidade normalizadas entre todas as fontes de achado, seguindo `../rules/documentation-standards.md`.
