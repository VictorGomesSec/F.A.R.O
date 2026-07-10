# MCPs Opcionais

O FARO funciona inteiramente sem MCPs — todo agente lista `Read, Grep, Glob, Bash, WebFetch, WebSearch` (subconjunto conforme o domínio) no seu frontmatter, e isso continua sendo o fallback padrão. Este documento cataloga servidores MCP reais e verificados que dão a agentes específicos acesso estruturado a fontes que hoje eles só alcançam via scraping de `WebFetch`/`WebSearch` ou CLI solto via `Bash` — reconhecimento de infraestrutura, inteligência de vulnerabilidade, revisão de código/pipeline, postura de cloud e, quando o engajamento exigir, ferramentas de exploração ativa.

Nenhum destes é instalado automaticamente com o plugin. Conectar um MCP é uma decisão por usuário/engajamento — ative apenas os que você vai usar de fato.

## Como ativar um MCP (passo a passo)

1. Abra o repositório do servidor (link na tabela abaixo) e leia o README — confirme o comando de instalação exato (`npx`, `uvx`, binário, Docker, ou extensão de app desktop como Burp/ZAP/Ghidra) e o nome exato da variável de ambiente esperada. As tabelas abaixo indicam o tipo de credencial e um nome de env var plausível, mas **o README do projeto é a fonte de verdade**, não este documento.
2. Adicione uma entrada em `.mcp.json` na raiz do FARO (crie o arquivo se ainda não existir). Exemplo de formato para um servidor stdio via npm:
   ```json
   {
     "mcpServers": {
       "nome-do-servidor": {
         "command": "npx",
         "args": ["-y", "<pacote-do-readme>"],
         "env": { "NOME_DA_ENV_VAR": "${NOME_DA_ENV_VAR}" }
       }
     }
   }
   ```
   Para servidores remotos (ex.: GitHub oficial, GCP oficial), a entrada usa `"type": "http"` (ou `"sse"`) e `"url"` em vez de `command`/`args` — confira o formato exato no README.
3. **Nunca** escreva a chave literal no `.mcp.json` — sempre `${VAR}`. Exporte a variável no seu shell/perfil local antes de abrir o Claude Code.
4. Rode `/reload-plugins` (ou reinicie a sessão) e confirme que o servidor conecta e expõe tools.
5. Só depois de ver as tools reais expostas, adicione os nomes exatos (`mcp__<server>__<tool>`) ao campo `tools:` do(s) agente(s) relevante(s) na tabela de mapeamento abaixo. Não adivinhe nomes de tool antes de conectar de verdade.
6. Rode uma auditoria de consistência (`agents/framework-maintainer.md`) depois de editar frontmatter de agente.

## Fase 1 — OSINT/Recon + Inteligência de Vulnerabilidade

Menor risco: são todos MCPs de consulta/leitura, sem credencial de infraestrutura real.

| Servidor | Repositório | Credencial | Agentes |
|---|---|---|---|
| OSINT agregado (Shodan, Censys, SecurityTrails, DNS, WHOIS, cert transparency, BGP, Wayback, GeoIP) | [badchars/osint-mcp-server](https://github.com/badchars/osint-mcp-server) | Chaves por fonte (Shodan/Censys/SecurityTrails — ver README) | `osint-researcher`, `infrastructure-reviewer`, `web-pentester` |
| Have I Been Pwned | [darrenjrobinson/HIBP-MCP-Server](https://github.com/darrenjrobinson/HIBP-MCP-Server) | `HIBP_API_KEY` (haveibeenpwned.com/API/Key) | `osint-researcher`, `authentication-specialist` |
| CVE/OSV/EPSS/CISA KEV/MITRE ATT&CK agregado | [mukul975/cve-mcp-server](https://github.com/mukul975/cve-mcp-server) | Nenhuma obrigatória para a maioria das fontes (algumas chaves opcionais — ver README) | `supply-chain-security-specialist`, `secure-developer`, `source-code-auditor`, `malware-analyst`, `detection-engineer`, `purple-team-advisor`, `threat-modeler` |
| VirusTotal | [BurtTheCoder/mcp-virustotal](https://github.com/BurtTheCoder/mcp-virustotal) | `VIRUSTOTAL_API_KEY` | `malware-analyst`, `incident-response-advisor`, `digital-forensics-specialist` |

Substitui diretamente o allowlist ad-hoc já usado em engajamentos reais (visível em `.claude/settings.local.json`, não versionado): `crt.sh`, `dns.google`, `api.certspotter.com`, `builtwith.com`, `wappalyzer.com`, `who.is`, `whois.com`.

## Fase 2 — Código-fonte e Cadeia de Build

| Servidor | Repositório | Credencial | Agentes |
|---|---|---|---|
| GitHub (oficial) | [github/github-mcp-server](https://github.com/github/github-mcp-server) | OAuth (servidor remoto hospedado pela GitHub, sem token estático) | `source-code-auditor`, `devsecops-engineer`, `supply-chain-security-specialist`, `framework-maintainer` |
| Semgrep (oficial) | [semgrep/mcp](https://github.com/semgrep/mcp) | Nenhuma para scan local; `SEMGREP_APP_TOKEN` opcional para recursos da plataforma Semgrep AppSec | `source-code-auditor`, `secure-developer`, `ai-security-reviewer` |

Nota: o repositório `semgrep/mcp` está sendo absorvido pelo próprio binário `semgrep` (comando `semgrep mcp`) — confirmar no README qual forma instalar no momento da ativação.

## Fase 3 — Postura Cloud

Sensibilidade alta — usar **somente** credenciais/roles de leitura (nunca permissão de escrita/alteração de infraestrutura real).

| Servidor | Repositório | Credencial | Agentes |
|---|---|---|---|
| Prowler (oficial, multi-cloud) | [prowler-cloud/prowler](https://github.com/prowler-cloud/prowler) | Credenciais read-only do(s) provedor(es) auditado(s) | `cloud-security-specialist` |
| AWS (oficial, complementar) | [awslabs/mcp](https://github.com/awslabs/mcp) — `aws-api-mcp-server` + `iam-mcp-server` | Credenciais AWS com policy somente leitura (nunca chave estática de longa duração — preferir SSO/role assumido) | `cloud-security-specialist` |
| Azure (oficial, complementar) | [microsoft/mcp](https://github.com/microsoft/mcp) — `Azure.Mcp.Server` | `az login` com role `Reader` | `cloud-security-specialist` |
| GCP (oficial, complementar) | [google/mcp](https://github.com/google/mcp) | IAM com papel `roles/viewer`, auth via `gcloud auth login` | `cloud-security-specialist` |

Prowler entra primeiro por já normalizar ~600 checks/compliance nos três provedores; os MCPs oficiais de cada hyperscaler ficam como complemento para o que for específico do provedor e o Prowler não cobrir.

## Fase 4 — Exploração Ativa

**Maior risco de todas as fases.** Regra dura antes de conectar ou usar qualquer item desta fase: escopo/autorização por escrito do engajamento já confirmado (mesma exigência de `agents/web-pentester.md` e `agents/active-directory-specialist.md`, seção "Fluxo de Trabalho" passo 1). Preferir rodar Metasploit/BloodHound/Sliver C2 num attack-box isolado (VM/container dedicado) — nunca na máquina principal.

| Servidor | Repositório | Observação | Agentes |
|---|---|---|---|
| Kali toolbox (nmap, nikto, ffuf, sqlmap, Nuclei, NetExec, Hydra, John the Ripper, gobuster/dirbuster) | [zebbern/zebbern-kali-mcp](https://github.com/zebbern/zebbern-kali-mcp) (130 tools) ou [TriV3/MCP-Kali-Server](https://github.com/TriV3/MCP-Kali-Server) | Um único container Kali via MCP substitui ~8 MCPs de CLI individuais; cobre John the Ripper (não existe MCP dedicado só para JtR). | `web-pentester`, `api-security-specialist`, `infrastructure-reviewer`, `active-directory-specialist` |
| Metasploit (oficial Rapid7) | [`msfmcpd`, embutido em rapid7/metasploit-framework](https://github.com/rapid7/metasploit-framework/blob/master/msfmcpd) | Preferir ao invés de forks de terceiros — gerencia sessões/payloads com estado. | `exploit-developer`, `web-pentester`, `active-directory-specialist`, `purple-team-advisor` |
| Burp Suite (oficial PortSwigger) | [PortSwigger/mcp-server](https://github.com/PortSwigger/mcp-server) | Extensão instalada dentro do Burp; expõe Proxy history/Repeater. Requer licença Burp Pro/Community conforme o recurso. | `web-pentester`, `api-security-specialist` |
| OWASP ZAP (oficial Zaproxy) | Add-on "ZAP MCP Integration" (anunciado no blog oficial da Zaproxy) | Alternativa sem custo de licença ao Burp para spider/active scan. | `web-pentester`, `api-security-specialist` |
| BloodHound | [MorDavid/BloodHound-MCP-AI](https://github.com/MorDavid/BloodHound-MCP-AI) | Requer instância BloodHound CE + Neo4j já rodando; consulta via Cypher, não executa comando no alvo. | `active-directory-specialist`, `purple-team-advisor` |
| Ghidra | [LaurieWired/GhidraMCP](https://github.com/LaurieWired/GhidraMCP) | Plugin do Ghidra — requer Ghidra instalado localmente. | `reverse-engineer`, `malware-analyst`, `exploit-developer` |
| Sliver C2 | [schwarztim/sec-sliver-c2-mcp](https://github.com/schwarztim/sec-sliver-c2-mcp) | Framework de emulação de adversário — gerencia sessions/beacons/listeners. Uso restrito a exercícios de red/purple team autorizados. | `purple-team-advisor`, `exploit-developer` |

`netcat`, `Impacket`, `linpeas`, `ligolo-ng`: sem MCP dedicado confiável encontrado — continuam via `Bash` direto (que os agentes relevantes já têm). São CLIs/scripts simples ou processos de tunneling de longa duração; não há ganho real em embrulhar isso num MCP.

## Fase 5 — Container/Kubernetes/Forense de Rede

Risco moderado — leitura/scan, sem exploração ativa, mas envolve artefatos sensíveis (imagens, cluster, capturas de pacote).

| Servidor | Repositório | Credencial | Agentes |
|---|---|---|---|
| Trivy (oficial Aqua Security) | [aquasecurity/trivy-mcp](https://github.com/aquasecurity/trivy-mcp) | Nenhuma para scan local de imagem/repo; credenciais de registry se for escanear remotamente | `container-security-specialist`, `kubernetes-security-specialist`, `supply-chain-security-specialist` |
| Wireshark/tshark (análise de pcap) | [aws-samples/sample-pcap-analyzer-mcp](https://github.com/aws-samples/sample-pcap-analyzer-mcp) (46 tools) — para captura em tempo real: [0xKoda/WireMCP](https://github.com/0xKoda/WireMCP) | Nenhuma; requer `tshark` instalado localmente | `infrastructure-reviewer`, `digital-forensics-specialist`, `incident-response-advisor` |

## Least Privilege — obrigatório para MCPs de Fase 3/4/5

Estes MCPs executam ação real (chamada de API cloud, comando de exploração, scan de container) guiada por um LLM. O próprio README do `aws-api-mcp-server` alerta que a execução guiada por LLM é vulnerável a prompt injection — a mitigação primária é a credencial usada, não o MCP em si:

- Cloud (Fase 3): sempre role/policy somente leitura (`ReadOnlyAccess` na AWS, `Reader` no Azure, `roles/viewer` no GCP). Nunca uma credencial com permissão de escrita/alteração.
- Exploração ativa (Fase 4): escopo/autorização por escrito confirmado antes de conectar; attack-box isolado para Metasploit/BloodHound/Sliver C2.
- Nenhuma chave/token em texto plano no `.mcp.json` — sempre `${VAR}` resolvida do ambiente local de quem estiver usando o FARO.
