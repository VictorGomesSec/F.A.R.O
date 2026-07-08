# Changelog

Todas as mudanças notáveis deste pacote são documentadas aqui.

## [0.2.0] — 2026-07-08

Renomeado de `ecc-security-pack` para **FARO** e empacotado como plugin Claude Code instalável.

### Alterado

- Nome do pacote/diretório: `ecc-security-pack` → `faro`. Todas as menções em prosa/títulos atualizadas para "FARO"; referências técnicas (nome de diretório, caminho de clone) atualizadas para `faro`.
- README e `docs/architecture.md` deixam explícito que o FARO é um framework **independente**, não uma extensão do ECC — a semelhança de convenções (frontmatter de agente) é apenas por seguir um padrão comum ao ecossistema Claude Code.

### Adicionado

- `plugin.json` — manifesto mínimo do plugin (`name`, `description`, `version`).
- `.claude-plugin/marketplace.json` — o próprio repositório funciona como marketplace de um único plugin (`faro`), usando `"source": "./"`.
- `docs/installation.md` — seção "Instalação (como plugin — recomendado)" com os comandos exatos (`/plugin marketplace add`, `/plugin install faro@F.A.R.O`, `/reload-plugins`), mantendo a instalação manual (cópia para `.claude/agents/`/`.claude/commands/`) como alternativa.

## [0.1.0] — 2026-07-08

Versão inicial do FARO.

### Adicionado

- **agents/** (38) — especialistas cobrindo AppSec, ofensiva web/API/AD, cloud, infraestrutura, containers/Kubernetes, criptografia, autenticação/autorização, logging, forense/resposta a incidente, malware/reverse engineering, mobile (Android/iOS), Windows/Linux internals, segurança de IA/LLM/prompt, e governança do próprio framework (`chief-security-architect`, `framework-maintainer`, `agent-designer`, `report-writer`, `technical-writer`).
- **rules/** (14) — regras reutilizáveis (secure coding, OWASP, API checklist, threat modeling, prompt engineering, arquitetura, git workflow, documentação, performance, logging, secrets, dependências, supply chain, testes) como fonte única de verdade referenciada por agentes/comandos/workflows.
- **commands/** (19) — pontos de entrada nomeados para os workflows/agentes principais.
- **workflows/** (16) — processos multi-agente de ponta a ponta para os principais tipos de engajamento.
- **templates/** (13) — modelos de documento de saída (relatórios, achado, PoC, mitigação, threat model, risk register).
- **examples/** (9) — cenários completos de uso em stacks reais (Django, Spring Boot, Kubernetes, Active Directory, ELF, malware, Node.js, .NET, Go).
- **docs/** (8) — arquitetura, instalação, guias de extensão (agentes/comandos/workflows), contribuição, boas práticas, casos de uso.
- `TASKS.md` — checklist incremental de construção do pacote.

### Auditoria Final

- Contagem de arquivos verificada contra as listas canônicas: `agents/` 38, `commands/` 19, `workflows/` 16, `rules/` 14, `templates/` 13, `examples/` 9, `docs/` 8.
- Corrigido link incorreto em `examples/kubernetes-cluster-analysis.md` (referenciava `../agents/secrets-management.md`; `secrets-management` é uma regra, corrigido para `../rules/secrets-management.md`).
- Frontmatter de todos os 38 agentes validado (`name` consistente com o nome do arquivo, `description` e `tools` presentes).
- Nenhuma duplicação significativa de checklist entre agentes identificada.

### Notas de Processo

- Construído em ordem incremental: agentes → regras → comandos → workflows → templates → exemplos → docs → arquivos raiz, com verificação de contagem de arquivos a cada etapa.
- Um lote paralelo inicial de subagentes para `agents/` foi interrompido a meio caminho (25/38 arquivos concluídos); os 13 agentes restantes (`linux-security-specialist`, `framework-maintainer`, `report-writer`, `technical-writer`, `performance-engineer`, entre outros) foram completados manualmente, um arquivo por vez, mantendo a mesma convenção de frontmatter e seções dos arquivos gerados no lote inicial.
