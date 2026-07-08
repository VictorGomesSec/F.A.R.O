# Code Review

## Objetivo

Realizar revisão de segurança de código-fonte de ponta a ponta — do código em si às dependências e à forma como ele é construído/publicado.

## Entrada

- Repositório, diretório ou diff/PR a revisar.

## Saída

Relatório seguindo `../templates/code-review.md`.

## Agentes Utilizados

`../agents/source-code-auditor.md` (principal), `../agents/cryptography-reviewer.md`, `../agents/authentication-specialist.md`, `../agents/authorization-specialist.md`, `../agents/supply-chain-security-specialist.md`, `../agents/devsecops-engineer.md`, `../agents/report-writer.md`.

## Ordem de Execução

1. `source-code-auditor` realiza a triagem inicial por categoria (injeção, controle de acesso, criptografia, segredos).
2. Achados de autenticação/autorização são aprofundados por `authentication-specialist`/`authorization-specialist`.
3. Achados de uso criptográfico são aprofundados por `cryptography-reviewer`.
4. `supply-chain-security-specialist` avalia as dependências usadas pelo código revisado.
5. `devsecops-engineer` avalia se os gates de CI existentes teriam capturado os achados encontrados.
6. `report-writer` consolida achados por severidade e causa raiz comum.

## Checklists

`../rules/secure-coding.md`, `../rules/owasp-checklist.md`, `../rules/dependency-review.md`.

## Artefatos Gerados

`../templates/code-review.md`, `../templates/finding.md`.
