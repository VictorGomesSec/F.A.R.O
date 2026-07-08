# Exemplo: Analisar um Projeto Node.js

## Cenário

Uma equipe quer revisar a segurança de um backend Node.js/Express que expõe uma API pública e usa múltiplas dependências de terceiros.

## Comando/Workflow Utilizado

`../workflows/code-review.md` combinado com `../workflows/api-assessment.md`.

## Agentes Engajados

1. `../agents/source-code-auditor.md` — revisa uso de `eval`/`child_process` com input não sanitizado, prototype pollution em merges de objetos, e middlewares de segurança (helmet, CORS) configurados.
2. `../agents/authentication-specialist.md` — revisa implementação de JWT (biblioteca usada, validação de `alg`, expiração) e gerenciamento de sessão se usar `express-session`.
3. `../agents/authorization-specialist.md` — revisa middlewares de autorização e se são aplicados consistentemente em todas as rotas Express.
4. `../agents/supply-chain-security-specialist.md` — audita `package.json`/`package-lock.json`, incluindo risco de dependency confusion em pacotes com scope interno.
5. `../agents/performance-engineer.md` — revisa regexes usadas em validação de input por risco de ReDoS, comum em middlewares de validação customizados.

## Achados Típicos Encontrados Neste Tipo de Análise

- Endpoint de upload de arquivo aceita `req.body` e faz merge recursivo profundo sem proteção, permitindo prototype pollution que afeta comportamento de outras requisições (CWE-1321).
- JWT verificado sem especificar o algoritmo esperado explicitamente, permitindo ataque de confusão de algoritmo (`alg: none` ou troca RS256→HS256) dependendo da biblioteca usada (CWE-347).
- Dependência transitiva de baixo uso com `postinstall` script fazendo requisição de rede não documentada.

## Saída

Relatório seguindo `../templates/code-review.md` e `../templates/api-review.md`, consolidado por `../agents/report-writer.md`.
