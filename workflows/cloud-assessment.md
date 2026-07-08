# Cloud Assessment

## Objetivo

Avaliar a postura de segurança de um ambiente cloud (IAM, rede, armazenamento, serviços gerenciados) e da infraestrutura como código que o provisiona.

## Entrada

- Acesso de leitura à conta/projeto/subscription cloud ou ao repositório de infraestrutura como código.
- Contexto de criticidade dos dados/serviços hospedados.

## Saída

Relatório seguindo `../templates/cloud-review.md`.

## Agentes Utilizados

`../agents/cloud-security-specialist.md` (principal), `../agents/infrastructure-reviewer.md`, `../agents/kubernetes-security-specialist.md` (se houver cargas em Kubernetes), `../agents/container-security-specialist.md` (se houver containers), `../agents/logging-specialist.md`, `../agents/report-writer.md`.

## Ordem de Execução

1. `cloud-security-specialist` mapeia contas, identidades (IAM), redes e serviços expostos publicamente.
2. `infrastructure-reviewer` avalia configuração de rede/segmentação e hardening de recursos de computação.
3. Se aplicável, `kubernetes-security-specialist` e `container-security-specialist` avaliam as cargas em cluster/imagens.
4. `logging-specialist` avalia se eventos de segurança relevantes (mudança de IAM, acesso a dado sensível) são logados.
5. `report-writer` consolida achados priorizados por exposição pública e privilégio excessivo.

## Checklists

`../rules/architecture-principles.md`, `../rules/secrets-management.md`, `../rules/logging-standards.md`.

## Artefatos Gerados

`../templates/cloud-review.md`, `../templates/finding.md`.
