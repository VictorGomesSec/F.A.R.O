# Changelog

Todas as mudanças notáveis deste pacote são documentadas aqui.

## [0.4.0] — 2026-07-09

Auditoria estrutural própria — cobertura de `rules/` para o roster ofensivo/forense/cloud/mobile, e automação da verificação de consistência que antes era manual.

### Adicionado

- `rules/mitre-attack-mapping.md` — fonte única de referência ao MITRE ATT&CK (Enterprise, Containers, Mobile, e ATLAS para IA). Consumida por 14 agentes que citavam táticas/técnicas inline sem regra compartilhada: `detection-engineer`, `windows-internals-specialist`, `malware-analyst`, `active-directory-specialist`, `android-security`, `ios-security`, `cloud-security-specialist`, `container-security-specialist`, `infrastructure-reviewer`, `kubernetes-security-specialist`, `mobile-security-specialist`, `purple-team-advisor`, `reverse-engineer`, `threat-modeler`.
- `rules/mobile-security-checklist.md` — checklist OWASP MASVS/MASTG. Consumida por `mobile-security-specialist`, `android-security`, `ios-security`.
- `rules/cloud-security-baseline.md` — CIS Benchmarks (AWS/Azure/GCP) e shared responsibility model. Consumida por `cloud-security-specialist`, `kubernetes-security-specialist`, `infrastructure-reviewer`.
- `rules/incident-response-standards.md` — fases NIST SP 800-61r2 e cadeia de custódia forense. Consumida por `incident-response-advisor`, `digital-forensics-specialist`.
- `scripts/check-consistency.js` — auditoria estrutural determinística (zero dependências): links relativos quebrados, frontmatter de `agents/*.md`, e contagens de arquivo citadas em prosa (`README.md`, `docs/architecture.md`, incluindo a derivação "N agentes do roster" em `chief-security-architect.md`). Substitui a verificação manual por agente a cada lote.
- `.github/workflows/consistency.yml` — roda `scripts/check-consistency.js` em push/PR para `master`/`main`.
- `TASKS.md` seção 10 — passa a servir como checklist vivo de manutenção pós-lançamento, não só histórico da construção inicial (v0.1.0).

### Corrigido

- 3 agentes já citados como consumidores em regras existentes, mas sem link de volta: `technical-writer` → `rules/documentation-standards.md`; `llm-security-specialist` e `ai-security-reviewer` → `rules/prompt-engineering.md`.
- Contagem de `rules/` desatualizada em `README.md` e `docs/architecture.md` ("14 regras" → "18 regras", refletindo as 4 regras novas).

### Notas de Processo

- `agents/exploit-developer.md` permanece sem link para `rules/` — nenhuma regra atual cobre o domínio de weaponization de exploit; confirmado como gap legítimo, não corrigido artificialmente.
- Auditoria rodada via `scripts/check-consistency.js` após todas as mudanças acima: 0 links quebrados, 38/38 agentes com frontmatter válido, contagens em prosa consistentes.

## [0.3.0] — 2026-07-09

Catálogo de MCPs opcionais — sem MCP conectado por padrão, documentação apenas.

### Adicionado

- `docs/mcp-servers.md` — catálogo de servidores MCP reais e verificados, organizado em 5 fases por risco (OSINT/vuln intel → código/build → cloud → exploração ativa → container/K8s/forense de rede), com credencial necessária, repositório de origem e mapeamento para os agentes que passam a usá-los. Nenhum MCP é instalado automaticamente com o plugin; ativação é manual e por engajamento.
- Seção "MCPs Opcionais" em `docs/installation.md` apontando para o catálogo.
- Nota em `docs/creating-agents.md` sobre a convenção `mcp__<servidor>__<tool>` para o campo `tools:`, com a regra de nunca adivinhar o nome de uma tool antes de conectar o servidor e confirmar de verdade.

### Notas de Processo

- `plugin.json` estava desatualizado (`0.1.0`) em relação ao `CHANGELOG.md` (que já documentava `0.2.0`) — corrigido para acompanhar esta versão.
- Frontmatter (`tools:`) dos agentes ainda **não** foi alterado — os nomes exatos das tools de cada MCP só serão adicionados depois que cada servidor for conectado e verificado ao vivo (ver passo a passo em `docs/mcp-servers.md`).

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
