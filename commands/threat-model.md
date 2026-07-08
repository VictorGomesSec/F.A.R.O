# /threat-model

## Descrição

Executa modelagem de ameaças formal (STRIDE) sobre um sistema, feature ou arquitetura proposta. Invoca `../agents/threat-modeler.md` seguindo a metodologia de `../rules/threat-modeling.md`.

## Parâmetros

- `target` (obrigatório) — descrição do sistema/feature, diagrama de arquitetura ou caminho para documento de design.
- `trust_boundaries` (opcional) — lista de limites de confiança já conhecidos, para acelerar a decomposição (ex.: `internet-to-api,api-to-db`).

## Exemplos

- `/threat-model target:"novo fluxo de pagamento via webhook de terceiro"`
- `/threat-model target:./docs/design/nova-integracao.md trust_boundaries:partner-api-to-internal`

## Saída Esperada

Documento seguindo `../templates/threat-model.md`: diagrama de fluxo de dados, tabela de ameaças STRIDE por elemento, matriz de risco priorizada e decisões de risco aceito registradas. Ver o workflow `../workflows/threat-modeling.md` para o processo completo, incluindo encaminhamento a especialistas para validar lacunas identificadas.
