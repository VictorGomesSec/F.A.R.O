# F.A.R.O

Framework independente para Claude Code especializado em Application Security, Offensive Security, Defensive Security, Red Team, Purple Team, Cloud Security, Secure Software Engineering, Code Review, Threat Modeling, Malware Analysis, Reverse Engineering e Infrastructure Review.

Não é um conjunto de prompts isolados — é um framework modular onde agentes, comandos, workflows, regras e templates se referenciam entre si, com uma fonte única de verdade para cada conceito reutilizável. É instalável como plugin próprio (ver `docs/installation.md`) e não depende de nenhum outro plugin/framework para funcionar — a convenção de arquivo de agente (frontmatter `name`/`description`/`tools`) segue um padrão comum ao ecossistema Claude Code, mas o FARO não é uma extensão do ECC nem de qualquer outro pacote.

## Estrutura

```
F.A.R.O/
  agents/       38 especialistas de segurança
  commands/     19 comandos (/review, /web-pentest, /threat-model, ...)
  workflows/    18 processos multi-agente de ponta a ponta
  rules/        18 regras/checklists reutilizáveis (OWASP, MITRE ATT&CK, MASVS, CIS, CWE, NIST, CERT)
  templates/    13 modelos de documento de saída
  examples/     9 cenários completos de uso (Django, Spring Boot, Kubernetes, AD, ELF, malware, Node.js, .NET, Go)
  docs/         guias de arquitetura, instalação, extensão e boas práticas
  TASKS.md      checklist de construção do próprio pacote
  CHANGELOG.md  histórico de versões
```

## Início Rápido

1. Instalar como plugin: `/plugin marketplace add /caminho/para/F.A.R.O` → `/plugin install F.A.R.O@F.A.R.O` → `/reload-plugins`. Ver `docs/installation.md` para detalhes e a alternativa sem empacotamento de plugin.
2. Não sabe por onde começar? Invoque `/F.A.R.O:review` ou fale diretamente com `@F.A.R.O:chief-security-architect` — ele identifica o tipo de alvo e seleciona os especialistas certos.
3. Sabe exatamente o que quer avaliar? Vá direto ao comando especializado (`/faro:web-pentest`, `/faro:api-review`, `/F.A.R.O:cloud-review`, `/F.A.R.O:ad-review`, `/F.A.R.O:reverse`, `/F.A.R.O:malware`, etc. — lista completa em `commands/`).
4. Para um cenário multi-domínio complexo, use `/faro:planning` antes de executar.

## Orquestrador

`agents/chief-security-architect.md` nunca executa a análise técnica diretamente — ele identifica o problema, seleciona especialistas, define ordem de execução, coordena o engajamento, revisa as entregas e produz o resumo final.

## Documentação

- [`docs/architecture.md`](docs/architecture.md) — arquitetura e terminologia do framework.
- [`docs/installation.md`](docs/installation.md) — instalação.
- [`docs/mcp-servers.md`](docs/mcp-servers.md) — catálogo de MCPs opcionais por fase de risco.
- [`docs/creating-agents.md`](docs/creating-agents.md), [`docs/creating-commands.md`](docs/creating-commands.md), [`docs/creating-workflows.md`](docs/creating-workflows.md) — como estender o framework.
- [`docs/contributing.md`](docs/contributing.md) — processo de contribuição.
- [`docs/best-practices.md`](docs/best-practices.md) — padrão de qualidade transversal.
- [`docs/use-cases.md`](docs/use-cases.md) — quando usar qual comando/workflow.

## Padrões de Qualidade

Todo componente deste pacote segue: nunca inventar fatos, explicar decisões, planejar antes de implementar, revisar o próprio trabalho, preservar contexto, evitar mudanças desnecessárias, seguir OWASP/MITRE ATT&CK/CWE/NIST/CERT, priorizar o uso de ferramentas de linha de comando nativas (Bash) antes de recorrer a scripts complexos, e indicar incerteza quando houver. Ver `docs/best-practices.md`.

## Licença

Ver [`LICENSE`](LICENSE) (MIT).

## Status & Contribuições

O projeto conta com um CI/CD automatizado via GitHub Actions (`check-consistency.js`) que garante 100% de integridade estrutural (links, frontmatter e arquitetura) a cada contribuição. 

Ver [`TASKS.md`](TASKS.md) para o roadmap de construção e [`CHANGELOG.md`](CHANGELOG.md) para o histórico de versões.
