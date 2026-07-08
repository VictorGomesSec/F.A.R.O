# /security-review

## Descrição

Revisão de segurança abrangente de um alvo (aplicação, repositório ou ambiente), cobrindo código, dependências, configuração e, quando aplicável, superfície ofensiva. Orquestrado pelo `../agents/chief-security-architect.md`, que seleciona o subconjunto de especialistas relevante ao alvo em vez de rodar todos os 38 agentes indiscriminadamente.

## Parâmetros

- `target` (obrigatório) — repositório, diretório ou URL do sistema a revisar.
- `scope` (opcional) — lista de camadas a incluir: `code`, `dependencies`, `infra`, `web`, `api`, `cloud`. Padrão: todas as camadas detectáveis automaticamente a partir do `target`.
- `severity_floor` (opcional) — severidade mínima a reportar (`low`, `medium`, `high`, `critical`). Padrão: `low`.

## Exemplos

- `/security-review target:./repo scope:code,dependencies`
- `/security-review target:https://staging.empresa.com scope:web,api severity_floor:medium`

## Saída Esperada

Relatório consolidado seguindo `../templates/security-report.md`, com achados de cada especialista engajado, priorizados por risco. Ver o workflow `../workflows/secure-sdlc.md` para o processo completo quando a revisão faz parte de um ciclo de desenvolvimento contínuo.
