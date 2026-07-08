# API Checklist

Checklist operacional de segurança de API (REST/GraphQL/RPC), complementar ao `owasp-checklist.md`. Fonte única para `../agents/api-security-specialist.md` e usado como referência por `../agents/authorization-specialist.md` e `../agents/authentication-specialist.md` quando o alvo é uma API.

## Autenticação e autorização

- [ ] Toda rota exige autenticação explícita, exceto as documentadas como públicas (allowlist, não denylist).
- [ ] Autorização é verificada por objeto (BOLA) e por função (BFLA) em cada endpoint, não apenas no nível de rota.
- [ ] Tokens (JWT ou opacos) são validados em assinatura, expiração e audience/issuer a cada request — nunca decodificados sem verificação.
- [ ] Chaves de API de serviço têm escopo mínimo e são roteáveis a rotação sem downtime.

## Validação e exposição de dados

- [ ] Payloads de request/response são validados contra schema explícito (OpenAPI/GraphQL SDL), rejeitando campos não declarados.
- [ ] Respostas não incluem campos internos/sensíveis por padrão (over-fetching) — serialização é allowlist de campos, não blacklist.
- [ ] Paginação e filtros não permitem enumeração ilimitada de recursos (ex.: `limit` sem teto máximo).
- [ ] Em GraphQL: profundidade e complexidade de query têm limite explícito (mitiga DoS por query aninhada).

## Transporte e infraestrutura

- [ ] TLS obrigatório em todas as rotas, sem fallback para HTTP.
- [ ] CORS configurado com allowlist de origem explícita, nunca `*` combinado com credenciais.
- [ ] Rate limiting por chave de API/usuário/IP em endpoints custosos ou sensíveis (ver `../agents/performance-engineer.md`).
- [ ] Versionamento de API permite descontinuar versões antigas sem deixá-las sem os mesmos controles de segurança da versão atual.

## Logging e observabilidade

- [ ] Requests/responses logados sem incluir corpo completo quando contém dado sensível (ver `logging-standards.md`).
- [ ] Erros de autenticação/autorização são logados com contexto suficiente para detecção de abuso (ver `../agents/detection-engineer.md`).

## Referências

- OWASP API Security Top 10.
- CWE-639 (BOLA/IDOR), CWE-284 (Improper Access Control), CWE-770 (Allocation of Resources Without Limits — rate limiting/paginação).

## Quem consome esta regra

`api-security-specialist`, `authorization-specialist`, `authentication-specialist`, `devsecops-engineer` (para gates de contrato de API no pipeline).
