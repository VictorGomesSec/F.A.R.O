# Git Workflow (Security Lens)

Convenções de fluxo de trabalho git com foco em segurança, fonte única para `../agents/devsecops-engineer.md` e `../agents/framework-maintainer.md` (aplicado ao próprio repositório do FARO).

## Princípios

1. **Branch protection obrigatória em branches de release** — nenhum push direto, merge exige revisão de pelo menos um par e checks de CI verdes (incluindo gates de segurança).
2. **Commits assinados quando o ambiente suportar** — reduz risco de impersonação de autoria em repositórios com múltiplos colaboradores.
3. **Nenhum segredo commitado, nunca** — mesmo remoção posterior não é suficiente (o segredo permanece no histórico); ver `secrets-management.md` para o procedimento de rotação/purga quando isso ocorrer.
4. **Mensagens de commit descrevem o "porquê", não apenas o "o quê"** — facilita auditoria posterior de decisões de segurança (ex.: por que um gate foi ajustado).
5. **Histórico não é reescrito em branches compartilhados** (`rebase`/`force-push`) sem coordenação explícita — reescrita descoordenada quebra rastreabilidade de auditoria e pode mascarar remoção de evidência.
6. **Revisão obrigatória de mudanças em arquivos sensíveis** — configuração de CI/CD, políticas de acesso, `Dockerfile`/manifests de infraestrutura exigem revisão adicional além do padrão de código de aplicação.

## Checklist antes de um merge sensível

- [ ] Nenhum segredo/credencial no diff (scan automatizado, não apenas revisão visual).
- [ ] Checks de CI de segurança (SAST/SCA) passaram ou exceções foram justificadas e registradas.
- [ ] Mudança em arquivo de política/infraestrutura tem revisor com contexto adequado, não apenas aprovação automática.
- [ ] Mensagem de commit/PR explica o motivo da mudança quando ela afeta um controle de segurança existente.

## Referências

- CIS Software Supply Chain Security Guide (seção de controle de código-fonte).
- OWASP Source Code Management best practices.

## Quem consome esta regra

`devsecops-engineer`, `framework-maintainer`, `supply-chain-security-specialist` (proveniência de commit como parte da cadeia de build).
