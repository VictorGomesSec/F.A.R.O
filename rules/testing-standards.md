# Testing Standards (Security Lens)

Padrões de teste com foco em segurança, fonte única para todos os agentes que produzem ou avaliam evidência de teste (`../agents/secure-developer.md`, `../agents/web-pentester.md`, `../agents/api-security-specialist.md`, `../agents/purple-team-advisor.md`).

## Princípios

1. **Toda vulnerabilidade reportada tem PoC reproduzível** — "possível" sem evidência não é um achado aceitável; a exceção é explicitamente marcada como hipótese não validada.
2. **Cobertura sistemática, não amostragem aleatória** — testes de segurança declaram o que foi testado e o que foi excluído do escopo, não apenas o que foi encontrado.
3. **Falso positivo é validado manualmente antes de reportar** — saída de scanner automatizado nunca é reportada sem confirmação humana do impacto real.
4. **Testes de segurança são parte do gate de CI, não apenas de auditoria pontual** — quando possível, um achado corrigido ganha um teste de regressão que o mantenha corrigido.
5. **Ambiente de teste isolado de produção** — testes ofensivos/exhaustion nunca são executados contra produção sem autorização explícita e janela de manutenção acordada.
6. **Evidência preservada e reprodutível** — request/response, comandos executados e ambiente usado são documentados o suficiente para outro analista reproduzir o achado.

## Checklist rápido

- [ ] Todo achado crítico/alto tem PoC reproduzível documentado passo a passo.
- [ ] Escopo testado e não testado está explicitamente declarado no relatório final.
- [ ] Nenhum achado de ferramenta automatizada é reportado sem validação manual.
- [ ] Testes destrutivos/exhaustion têm autorização e janela de execução acordada antes de rodar.

## Referências

- OWASP Testing Guide.
- NIST SP 800-115 (Technical Guide to Information Security Testing and Assessment).

## Quem consome esta regra

`secure-developer`, `web-pentester`, `api-security-specialist`, `purple-team-advisor`, `performance-engineer`.
