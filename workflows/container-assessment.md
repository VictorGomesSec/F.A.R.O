# Container Assessment

## Objetivo

Avaliar a segurança de imagens de container e sua execução em runtime, cobrindo camadas da imagem, configuração do Dockerfile e isolamento em tempo de execução.

## Entrada

- Imagem de container ou Dockerfile/repositório de build.
- Contexto de orquestração (standalone, Docker Compose, Kubernetes) para avaliar escopo.

## Saída

Relatório com achados no formato `../templates/finding.md`.

## Agentes Utilizados

`../agents/container-security-specialist.md` (principal), `../agents/linux-security-specialist.md` (host subjacente), `../agents/supply-chain-security-specialist.md` (composição de pacotes na imagem), `../agents/kubernetes-security-specialist.md` (se orquestrado por Kubernetes), `../agents/report-writer.md`.

## Ordem de Execução

1. `container-security-specialist` analisa camadas da imagem, usuário de execução e superfície exposta.
2. `supply-chain-security-specialist` gera/avalia o SBOM da imagem.
3. `linux-security-specialist` avalia hardening do host/base image (capabilities, SUID, isolamento de namespace).
4. Se orquestrado por Kubernetes, `kubernetes-security-specialist` avalia o contexto de segurança do pod/deployment.
5. `report-writer` consolida achados priorizados por exposição em runtime.

## Checklists

`../rules/dependency-review.md`, `../rules/supply-chain-security.md`, `../rules/secure-coding.md` (Dockerfile como código).

## Artefatos Gerados

`../templates/finding.md`, apêndice de SBOM.
