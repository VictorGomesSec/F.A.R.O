# /ad-review

## Descrição

Avaliação de segurança de um ambiente Active Directory, invocando `../agents/active-directory-specialist.md` para mapear caminhos de escalonamento de privilégio até Domain Admin.

## Parâmetros

- `target` (obrigatório) — domínio/floresta a avaliar e ponto de apoio inicial (conta de teste de baixo privilégio).
- `objective` (opcional) — objeto/grupo alvo do caminho de ataque (padrão: Domain Admins).
- `aggressiveness` (opcional) — `enumeration-only` (sem quebra de hash/ticket) ou `full`. Padrão: `enumeration-only`.

## Exemplos

- `/ad-review target:corp.empresa.local objective:"Domain Admins"`
- `/ad-review target:corp.empresa.local aggressiveness:full`

## Saída Esperada

Grafo de caminho de ataque e tabela de achados mapeados a MITRE ATT&CK, seguindo `../templates/finding.md`. Ver `../workflows/active-directory-assessment.md` para o processo completo.
