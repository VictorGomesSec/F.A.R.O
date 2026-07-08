# Secure Coding

Fonte única de princípios de codificação segura, agnóstica de linguagem. Agentes como `../agents/secure-developer.md`, `../agents/source-code-auditor.md` e `../agents/devsecops-engineer.md` referenciam esta regra em vez de repetir a lista.

## Princípios

1. **Validação de input na fronteira** — todo dado que entra no sistema (request HTTP, argumento de CLI, mensagem de fila, arquivo importado) é validado por allowlist (formato/tipo/tamanho esperado), nunca por denylist.
2. **Saída codificada para o contexto de destino** — encoding correto para HTML, SQL, shell, URL, cabeçalho HTTP; nunca concatenação direta de dado não confiável em um interpretador.
3. **Menor privilégio por padrão** — processos, contas de serviço e conexões de banco operam com o menor conjunto de permissões necessário à função, nunca com privilégio administrativo "por conveniência".
4. **Falha segura** — em erro/exceção, o sistema nega acesso/ação por padrão (fail closed), nunca permite por padrão (fail open).
5. **Nenhum segredo em código-fonte** — credenciais, chaves e tokens vêm de cofre de segredos/variável de ambiente injetada em runtime; ver `secrets-management.md`.
6. **Dependências com origem verificável** — ver `dependency-review.md` e `supply-chain-security.md`.
7. **Imutabilidade e previsibilidade de estado** — preferir estruturas imutáveis e transições de estado explícitas, reduzindo superfície de race conditions e estados inconsistentes exploráveis.
8. **Tratamento de erro que não vaza informação** — mensagens de erro para o usuário final não expõem stack trace, versão de dependência ou detalhe de infraestrutura interna.
9. **Criptografia via biblioteca revisada, nunca implementação própria** — ver `../agents/cryptography-reviewer.md` para avaliação de uso correto.
10. **Concorrência com sincronização explícita** — acesso a recursos compartilhados protegido por primitivas de sincronização apropriadas; nenhuma suposição implícita de atomicidade.

## Checklist rápido de revisão

- [ ] Toda entrada externa é validada antes de uso (tipo, tamanho, formato).
- [ ] Toda saída para HTML/SQL/shell/log usa encoding/parametrização apropriada ao contexto.
- [ ] Nenhuma credencial, chave ou token está hardcoded no repositório.
- [ ] Erros não vazam stack trace/versão/infraestrutura para o cliente final.
- [ ] Operações privilegiadas exigem verificação explícita de autorização, não apenas de autenticação.
- [ ] Recursos compartilhados (arquivos, contadores, caches) têm sincronização explícita sob concorrência.

## Referências

- OWASP Top 10 e OWASP ASVS (ver `owasp-checklist.md`).
- CWE relevantes: CWE-20 (Improper Input Validation), CWE-79/89/78 (famílias de injeção), CWE-798 (Hardcoded Credentials), CWE-209 (Information Exposure Through Error Message).
- NIST SP 800-53 (controles SI-10 Input Validation, SC-28 Protection of Information at Rest).

## Quem consome esta regra

`secure-developer`, `source-code-auditor`, `devsecops-engineer`, `web-pentester`, `api-security-specialist` (como referência de baseline esperado ao reportar desvio).
