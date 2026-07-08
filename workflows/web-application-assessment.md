# Web Application Assessment

## Objetivo

Avaliar de forma abrangente a postura de segurança de uma aplicação web, cobrindo autenticação, autorização, lógica de negócio e injeções, produzindo um relatório priorizado por risco real.

## Entrada

- URL(s)/ambiente autorizado para teste e regras de engajamento.
- Contas de teste em pelo menos dois perfis de usuário distintos.
- Acesso opcional ao código-fonte (acelera a fase de triagem de causa raiz).

## Saída

Relatório técnico (`../templates/technical-report.md`) e, se solicitado, relatório executivo (`../templates/executive-report.md`), com achados no formato `../templates/finding.md`.

## Agentes Utilizados

`../agents/web-pentester.md` (principal), `../agents/authentication-specialist.md`, `../agents/authorization-specialist.md`, `../agents/api-security-specialist.md` (se a aplicação expõe API própria), `../agents/cryptography-reviewer.md` (se houver suspeita de falha criptográfica), `../agents/report-writer.md` (consolidação final).

## Ordem de Execução

1. `web-pentester` realiza reconhecimento e mapeamento de superfície.
2. `authentication-specialist` avalia fluxos de login/MFA/recuperação de conta em paralelo.
3. `authorization-specialist` testa BOLA/BFLA/escalonamento com as contas de teste fornecidas.
4. `web-pentester` testa injeções, SSRF e falhas de lógica de negócio usando o mapa de superfície e os achados de autenticação/autorização como contexto.
5. Achados que exigem análise binária/criptográfica são encaminhados a `cryptography-reviewer` conforme necessário.
6. `report-writer` consolida todos os achados em um único relatório priorizado.

## Checklists

`../rules/owasp-checklist.md`, `../rules/secrets-management.md` (se credenciais forem encontradas durante o teste).

## Artefatos Gerados

`../templates/technical-report.md`, `../templates/executive-report.md`, `../templates/finding.md` (um por achado).
