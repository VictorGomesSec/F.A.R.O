# Infrastructure Assessment

## Objetivo

Avaliar a segurança de infraestrutura on-premises/híbrida (rede, hosts, serviços expostos), fora do escopo específico de cloud público ou Active Directory.

## Entrada

- Inventário de hosts/serviços e escopo de rede autorizado para teste.

## Saída

Relatório técnico seguindo `../templates/technical-report.md`.

## Agentes Utilizados

`../agents/infrastructure-reviewer.md` (principal), `../agents/linux-security-specialist.md`, `../agents/windows-internals-specialist.md`, `../agents/active-directory-specialist.md` (se houver domínio Windows integrado), `../agents/report-writer.md`.

## Ordem de Execução

1. `infrastructure-reviewer` mapeia hosts, serviços expostos e segmentação de rede.
2. `linux-security-specialist`/`windows-internals-specialist` avaliam hardening dos hosts conforme o sistema operacional.
3. Se há domínio Active Directory integrado, achados relevantes são encaminhados a `active-directory-specialist`.
4. `report-writer` consolida achados priorizados por exposição de rede e caminho de escalonamento.

## Checklists

`../rules/architecture-principles.md`, `../rules/secure-coding.md` (configuração como código, quando aplicável).

## Artefatos Gerados

`../templates/technical-report.md`, `../templates/finding.md`.
