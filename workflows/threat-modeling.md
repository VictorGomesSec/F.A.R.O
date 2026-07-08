# Threat Modeling

## Objetivo

Modelar ameaças a um sistema/feature usando STRIDE antes ou durante o desenvolvimento, priorizando lacunas por risco e definindo quais especialistas devem validar cada uma.

## Entrada

- Descrição do sistema/feature, diagrama de arquitetura ou documento de design.

## Saída

Documento de modelagem de ameaças seguindo `../templates/threat-model.md`.

## Agentes Utilizados

`../agents/threat-modeler.md` (principal), `../agents/chief-security-architect.md` (decide quais especialistas engajar para validar cada lacuna), especialistas de domínio conforme as lacunas identificadas.

## Ordem de Execução

1. `threat-modeler` decompõe o sistema em diagrama de fluxo de dados com limites de confiança.
2. `threat-modeler` identifica ameaças por elemento usando STRIDE.
3. Cada ameaça é mapeada a um controle existente ou registrada como lacuna.
4. `chief-security-architect` prioriza as lacunas por risco e seleciona o especialista para validar/aprofundar cada uma.
5. Decisões de risco aceito (lacunas não mitigadas) são registradas explicitamente.

## Checklists

`../rules/threat-modeling.md`, `../rules/architecture-principles.md`.

## Artefatos Gerados

`../templates/threat-model.md`, `../templates/risk-register.md`.
