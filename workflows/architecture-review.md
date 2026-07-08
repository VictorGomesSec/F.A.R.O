# Architecture Review

## Objetivo

Avaliar uma arquitetura de sistema (existente ou proposta) contra princípios de segurança fundamentais, identificando violações sistêmicas em vez de apenas achados pontuais.

## Entrada

- Diagrama de arquitetura, documento de design ou repositório de infraestrutura como código.

## Saída

Relatório seguindo `../templates/architecture-review.md`.

## Agentes Utilizados

`../agents/chief-security-architect.md` (principal), `../agents/infrastructure-reviewer.md`, `../agents/cloud-security-specialist.md` (se aplicável), `../agents/secure-developer.md`, `../agents/report-writer.md`.

## Ordem de Execução

1. `chief-security-architect` avalia a arquitetura contra `../rules/architecture-principles.md` (defesa em profundidade, menor privilégio, isolamento de limites de confiança, etc.).
2. `infrastructure-reviewer`/`cloud-security-specialist` aprofundam violações específicas de infraestrutura identificadas.
3. `secure-developer` avalia se decisões de design se refletem corretamente na implementação real (não apenas no diagrama).
4. `report-writer` consolida violações sistêmicas e recomenda ordem de correção por impacto arquitetural.

## Checklists

`../rules/architecture-principles.md`.

## Artefatos Gerados

`../templates/architecture-review.md`, `../templates/finding.md`.
