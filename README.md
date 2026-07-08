# ecc-security-pack

Pacote de extensão do ECC (Everything Claude Code) especializado em Application Security, Offensive Security, Defensive Security, Red Team, Purple Team, Cloud Security, Secure Software Engineering, Code Review, Threat Modeling, Malware Analysis, Reverse Engineering e Infrastructure Review.

Não é um conjunto de prompts isolados — é um framework modular onde agentes, comandos, workflows, regras e templates se referenciam entre si, com uma fonte única de verdade para cada conceito reutilizável.

## Estrutura

```
ecc-security-pack/
  agents/       38 especialistas de segurança
  commands/     19 comandos (/review, /web-pentest, /threat-model, ...)
  workflows/    16 processos multi-agente de ponta a ponta
  rules/        14 regras/checklists reutilizáveis (OWASP, MITRE ATT&CK, CWE, NIST, CERT)
  templates/    13 modelos de documento de saída
  examples/     9 cenários completos de uso (Django, Spring Boot, Kubernetes, AD, ELF, malware, Node.js, .NET, Go)
  docs/         guias de arquitetura, instalação, extensão e boas práticas
  TASKS.md      checklist de construção do próprio pacote
  CHANGELOG.md  histórico de versões
```

## Início Rápido

1. Ver `docs/installation.md` para instalar/apontar seu ambiente ECC/Claude Code para este pacote.
2. Não sabe por onde começar? Invoque `/review` ou fale diretamente com `agents/chief-security-architect.md` — ele identifica o tipo de alvo e seleciona os especialistas certos.
3. Sabe exatamente o que quer avaliar? Vá direto ao comando especializado (`/web-pentest`, `/api-review`, `/cloud-review`, `/ad-review`, `/reverse`, `/malware`, etc. — lista completa em `commands/`).
4. Para um cenário multi-domínio complexo, use `/planning` antes de executar.

## Orquestrador

`agents/chief-security-architect.md` nunca executa a análise técnica diretamente — ele identifica o problema, seleciona especialistas, define ordem de execução, coordena o engajamento, revisa as entregas e produz o resumo final.

## Documentação

- [`docs/architecture.md`](docs/architecture.md) — arquitetura e terminologia do framework.
- [`docs/installation.md`](docs/installation.md) — instalação.
- [`docs/creating-agents.md`](docs/creating-agents.md), [`docs/creating-commands.md`](docs/creating-commands.md), [`docs/creating-workflows.md`](docs/creating-workflows.md) — como estender o framework.
- [`docs/contributing.md`](docs/contributing.md) — processo de contribuição.
- [`docs/best-practices.md`](docs/best-practices.md) — padrão de qualidade transversal.
- [`docs/use-cases.md`](docs/use-cases.md) — quando usar qual comando/workflow.

## Padrões de Qualidade

Todo componente deste pacote segue: nunca inventar fatos, explicar decisões, planejar antes de implementar, revisar o próprio trabalho, preservar contexto, evitar mudanças desnecessárias, seguir OWASP/MITRE ATT&CK/CWE/NIST/CERT, e indicar incerteza quando houver. Ver `docs/best-practices.md`.

## Licença

Ver [`LICENSE`](LICENSE) (MIT).

## Status

Ver [`TASKS.md`](TASKS.md) para o checklist de construção e [`CHANGELOG.md`](CHANGELOG.md) para o histórico de versões.
