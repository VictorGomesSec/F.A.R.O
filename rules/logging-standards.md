# Logging Standards

Padrões de logging seguro e útil para detecção/forense, fonte única para `../agents/logging-specialist.md`, `../agents/detection-engineer.md` e `../agents/digital-forensics-specialist.md`.

## Princípios

1. **Nunca logar segredos ou PII em texto claro** — senhas, tokens, números de documento, dados de cartão são mascarados/hasheados na origem, antes de qualquer log ser escrito.
2. **Formato estruturado** — logs em formato estruturado (ex.: JSON) com campos consistentes (timestamp, nível, serviço, correlation-ID, ator, ação, resultado), evitando ambiguidade de parsing e risco de log injection.
3. **Sanitização contra log forging** — qualquer input do usuário incluído em log é sanitizado contra caracteres de controle (CRLF) que poderiam forjar entradas.
4. **Eventos de segurança são sempre logados** — login/logout, falha de autenticação, mudança de privilégio, ação administrativa, falha de autorização.
5. **Correlation-ID/trace-ID propagado entre serviços** — permite reconstruir uma transação completa em arquitetura distribuída.
6. **Integridade e imutabilidade** — logs de segurança são enviados a um destino externo com acesso de escrita restrito, não dependem apenas de armazenamento local mutável.
7. **Retenção alinhada a requisito real** — tempo de retenção definido por requisito legal/contratual/forense explícito, não por padrão arbitrário da ferramenta.

## Checklist de revisão

- [ ] Nenhum campo sensível (senha, token, PII, dado de cartão) aparece em log, nem em nível DEBUG.
- [ ] Input do usuário incluído em log é sanitizado contra injeção de caracteres de controle.
- [ ] Eventos de segurança críticos (lista acima) estão de fato instrumentados, não apenas planejados.
- [ ] Logs de segurança são replicados para destino externo tamper-evident.
- [ ] Política de retenção está documentada e alinhada a um requisito concreto.

## Referências

- CWE-117 (Improper Output Neutralization for Logs), CWE-532 (Insertion of Sensitive Information into Log File).
- OWASP Logging Cheat Sheet, OWASP A09 (Security Logging and Monitoring Failures).

## Quem consome esta regra

`logging-specialist`, `detection-engineer`, `digital-forensics-specialist`, `incident-response-advisor`.
