# Template: Threat Model

Estrutura de saída de `../workflows/threat-modeling.md`, seguindo a metodologia de `../rules/threat-modeling.md`.

---

# Modelagem de Ameaças — {{Sistema/Feature}}

## Diagrama de Fluxo de Dados

{{Descrição textual estruturada ou referência a arquivo de diagrama: processos, armazenamentos de dados, fluxos, limites de confiança.}}

## Tabela de Ameaças (STRIDE por elemento)

| Elemento | Categoria STRIDE | Ameaça | Controle Existente | Lacuna |
|---|---|---|---|---|
| {{elemento}} | {{S/T/R/I/D/E}} | {{descrição da ameaça}} | {{controle atual, se houver}} | {{sim/não — descrever}} |

## Matriz de Risco

| Lacuna | Probabilidade | Impacto | Risco | Prioridade |
|---|---|---|---|---|
| {{lacuna}} | {{Alta/Média/Baixa}} | {{Alta/Média/Baixa}} | {{combinação}} | {{P1/P2/P3}} |

## Decisões de Risco Aceito

| Lacuna | Justificativa | Aceito por | Data |
|---|---|---|---|
| {{lacuna}} | {{motivo}} | {{responsável}} | {{data}} |

## Encaminhamentos

{{Lacunas priorizadas → especialista designado para validar/aprofundar (ex.: `../agents/authorization-specialist.md` para lacuna de Elevation of Privilege).}}
