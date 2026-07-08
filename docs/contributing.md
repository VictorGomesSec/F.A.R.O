# Como Contribuir

## Antes de Contribuir

Verifique se o que você quer adicionar já não existe com escopo equivalente — consulte a lista de agentes/regras/workflows em `../README.md` ou peça a `../agents/framework-maintainer.md` para verificar sobreposição.

## Tipos de Contribuição

- **Novo agente** — ver `creating-agents.md`.
- **Novo comando** — ver `creating-commands.md`.
- **Novo workflow** — ver `creating-workflows.md`.
- **Nova regra** — deve ser genuinamente reutilizável por mais de um agente; se só um agente a usaria, considere manter o conteúdo no próprio agente.
- **Novo template** — deve ter placeholders `{{...}}` claros e ser referenciado por pelo menos um workflow/comando.
- **Novo exemplo** — deve referenciar um workflow e agentes reais, com achados típicos plausíveis (não genéricos).
- **Correção/atualização** — mudanças em arquivos existentes devem preservar a estrutura de seções obrigatória do tipo de arquivo.

## Processo

1. Abra uma proposta descrevendo a lacuna que a contribuição preenche.
2. Escreva o(s) arquivo(s) seguindo a convenção do tipo (ver os guias `creating-*.md`).
3. Rode a auditoria de `../agents/framework-maintainer.md` (frontmatter, links, duplicação) antes de submeter.
4. Atualize `../CHANGELOG.md` com uma entrada descrevendo a adição/mudança.
5. Submeta para revisão — pelo menos um revisor familiar com o domínio técnico específico deve aprovar o conteúdo de segurança (não apenas a estrutura).

## Padrão de Qualidade Esperado

Toda contribuição deve: nunca inventar fatos técnicos, explicar decisões não óbvias, referenciar padrões reconhecidos (OWASP/MITRE ATT&CK/CWE/NIST/CERT) quando aplicável, e indicar incerteza explicitamente quando houver. Ver `best-practices.md`.

## Código de Conduta

Contribuições devem assumir uso em contexto de engajamento autorizado (pentest, red team, pesquisa de segurança legítima). Conteúdo que only serve técnicas destrutivas sem contexto defensivo/de teste autorizado não é aceito.
