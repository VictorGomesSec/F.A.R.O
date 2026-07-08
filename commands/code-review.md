# /code-review

## Descrição

Revisão estática de código-fonte focada em vulnerabilidades de segurança (não em estilo/qualidade geral). Invoca `../agents/source-code-auditor.md`, com apoio de `../agents/cryptography-reviewer.md`, `../agents/authentication-specialist.md` e `../agents/authorization-specialist.md` quando o código tocado envolve essas áreas.

## Parâmetros

- `target` (obrigatório) — diretório, arquivo ou diff/PR a revisar.
- `language` (opcional) — força o contexto de linguagem quando a detecção automática for ambígua.
- `focus` (opcional) — lista de categorias a priorizar (`injection`, `auth`, `crypto`, `access-control`, `secrets`). Padrão: todas.

## Exemplos

- `/code-review target:./src/payments focus:crypto,secrets`
- `/code-review target:"diff HEAD~5..HEAD"`

## Saída Esperada

Tabela de achados (`Arquivo:Linha | Vulnerabilidade | Severidade | CWE | Remediação`) seguindo `../templates/code-review.md`, referenciando `../rules/secure-coding.md` como baseline de comparação.
