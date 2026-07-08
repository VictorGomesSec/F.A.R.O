# OWASP Checklist

Fonte única do checklist OWASP (Top 10 Web, API Security Top 10 e itens-chave do ASVS) usado por agentes ofensivos e de revisão. Evita que `../agents/web-pentester.md`, `../agents/api-security-specialist.md`, `../agents/authentication-specialist.md` e `../agents/authorization-specialist.md` reescrevam a mesma lista.

## OWASP Top 10 (Web) — cobertura esperada

1. **A01 Broken Access Control** — testado por `../agents/authorization-specialist.md` (BOLA/BFLA, escalonamento).
2. **A02 Cryptographic Failures** — testado por `../agents/cryptography-reviewer.md`.
3. **A03 Injection** — testado por `../agents/web-pentester.md`/`../agents/api-security-specialist.md`/`../agents/source-code-auditor.md`.
4. **A04 Insecure Design** — avaliado por `../agents/threat-modeler.md` na fase de design.
5. **A05 Security Misconfiguration** — avaliado por `../agents/infrastructure-reviewer.md`/`../agents/cloud-security-specialist.md`.
6. **A06 Vulnerable and Outdated Components** — avaliado por `../agents/supply-chain-security-specialist.md`.
7. **A07 Identification and Authentication Failures** — avaliado por `../agents/authentication-specialist.md`.
8. **A08 Software and Data Integrity Failures** — avaliado por `../agents/devsecops-engineer.md`/`../agents/supply-chain-security-specialist.md`.
9. **A09 Security Logging and Monitoring Failures** — avaliado por `../agents/logging-specialist.md`/`../agents/detection-engineer.md`.
10. **A10 Server-Side Request Forgery (SSRF)** — testado por `../agents/web-pentester.md`/`../agents/api-security-specialist.md`.

## OWASP API Security Top 10 — itens específicos de API

- API1 Broken Object Level Authorization (BOLA), API2 Broken Authentication, API3 Broken Object Property Level Authorization, API5 Broken Function Level Authorization (BFLA), API6 Unrestricted Access to Sensitive Business Flows, API8 Security Misconfiguration, API10 Unsafe Consumption of APIs. Ver detalhamento operacional em `api-checklist.md`.

## Itens ASVS priorizados (autenticação/sessão)

- Política de hashing de senha com fator de custo adequado (V2.4).
- Rotação/invalidação de token de sessão em eventos sensíveis (V3.3).
- Validação de `redirect_uri`, `state` e `nonce` em fluxos OAuth2/OIDC (V3.7-adjacent).

## Como usar esta checklist

Cada agente que testa contra esta lista deve, ao final do engajamento, declarar explicitamente quais categorias foram cobertas e quais foram excluídas do escopo (não simplesmente omitir). Achados devem referenciar a categoria OWASP correspondente no formato de saída (ver `../templates/finding.md`).

## Referências

- OWASP Top 10 (2021 e revisões subsequentes), OWASP API Security Top 10, OWASP ASVS 4.x/5.x.
- CWE mapeado por categoria (ex.: A03 → CWE-89/79/78).

## Quem consome esta regra

`web-pentester`, `api-security-specialist`, `authentication-specialist`, `authorization-specialist`, `source-code-auditor`, `threat-modeler`.
