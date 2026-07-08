# Secure SDLC

## Objetivo

Integrar segurança em todas as fases do ciclo de desenvolvimento — design, implementação, build/release e operação — de forma contínua, não apenas como auditoria pontual.

## Entrada

- Repositório/projeto em desenvolvimento ativo e seu pipeline CI/CD.

## Saída

Relatório de maturidade por fase do SDLC e plano de integração de gates de segurança.

## Agentes Utilizados

`../agents/threat-modeler.md` (design), `../agents/secure-developer.md`/`../agents/source-code-auditor.md` (implementação), `../agents/devsecops-engineer.md` (build/release), `../agents/detection-engineer.md`/`../agents/logging-specialist.md` (operação), `../agents/chief-security-architect.md` (coordenação), `../agents/report-writer.md`.

## Ordem de Execução

1. `threat-modeler` avalia se novas features passam por modelagem de ameaças antes da implementação.
2. `secure-developer`/`source-code-auditor` avaliam práticas de codificação segura em uso.
3. `devsecops-engineer` avalia gates de SAST/SCA/DAST no pipeline de build/release.
4. `logging-specialist`/`detection-engineer` avaliam se a operação em produção tem visibilidade e detecção adequadas.
5. `chief-security-architect` consolida a maturidade por fase e prioriza investimento.
6. `report-writer` produz o relatório final.

## Checklists

`../rules/secure-coding.md`, `../rules/testing-standards.md`, `../rules/git-workflow.md`.

## Artefatos Gerados

Relatório de maturidade por fase, `../templates/finding.md` por lacuna.
