---
name: faro_kali_arsenal
description: Matriz de decisão de ferramentas do Kali Linux. Indica quais ferramentas usar para cada tarefa e fornece opções de fallback caso a primeira falhe.
---

# faro_kali_arsenal

Esta skill é o "Cérebro de Ferramentas" do F.A.R.O. **Você NUNCA deve tentar usar uma ferramenta web (Google/WebSearch) para realizar tarefas técnicas descritas abaixo.** Sempre use o terminal (`run_command`) executando as ferramentas locais do Kali Linux.

## Regra de Fallback (MUITO IMPORTANTE)
1. Escolha a categoria do seu ataque abaixo.
2. Comece SEMPRE pela ferramenta número 1.
3. Se a ferramenta número 1 falhar, não estiver instalada, ou já constar na sua "Memória de Ferramentas Utilizadas", **você é OBRIGADO a pular para a ferramenta número 2**. Nunca repita uma ferramenta que já falhou na sessão atual.

## Matriz de Arsenal

### 🕵️‍♂️ OSINT & Reconhecimento de Usuários
- **Busca de Usuários/E-mails:**
  1. `holehe <email>`
  2. `sherlock <username>`
  3. `whatsmyname -u <username>`
  4. `h8mail -t <email>`
- **Busca de Subdomínios/Infra:**
  1. `subfinder -d <domain>`
  2. `amass enum -d <domain>`
  3. `assetfinder <domain>`

### 🌐 Aplicações Web (Web Pentester)
- **Fuzzing de Diretórios / Arquivos:**
  1. `ffuf -w /usr/share/wordlists/dirb/common.txt -u http://<target>/FUZZ`
  2. `feroxbuster -u http://<target>`
  3. `gobuster dir -u http://<target> -w /usr/share/wordlists/dirb/common.txt`
- **Scanner de Vulnerabilidades Web:**
  1. `nuclei -u <target> -jsonl -t cves/`
  2. `nikto -h <target>`
- **Injeções Específicas:**
  - SQLi: `sqlmap -u <target>`
  - XSS: `dalfox url <target>`

### 🏢 Active Directory & SMB
- **Enumeração Rápida / Validação de Senha:**
  1. `nxc smb <target> -u <user> -p <pass>` (NetExec)
  2. `enum4linux-ng -A <target>`
  3. `smbmap -H <target>`
- **Mapeamento Gráfico / Caminhos de Ataque:**
  1. `bloodhound-python -c All -u <user> -p <pass> -d <domain> -ns <dc_ip>`

### 🖥️ Infraestrutura (Rede Interna/Externa)
- **Port Scanning:**
  1. `nmap -sC -sV -p- -T4 <target>`
  2. `rustscan -a <target> -- -A`
  3. `masscan -p1-65535 <target> --rate=1000`
- **Brute-force de Serviços (SSH, FTP, etc):**
  1. `hydra -L users.txt -P passwords.txt <ip> ssh`
  2. `medusa -u <user> -P passwords.txt -h <ip> -M ssh`

### ☁️ Cloud Security
- **Auditoria Geral de Conta AWS/Azure:**
  1. `prowler aws`
  2. `scoutsuite`

### 🔑 Autenticação e Hashes
- **Cracking Offline:**
  1. `hashcat -m <id> hashes.txt rockyou.txt`
  2. `john --wordlist=rockyou.txt hashes.txt`
- **Geração de Wordlists customizadas:**
  1. `cewl -d 2 -m 5 https://<target>`

## Instrução de Processamento
Quando executar `nuclei`, `nmap` ou ferramentas verborrágicas, extraia apenas as saídas cruciais (usando `grep`, `jq` ou awk na mesma linha do shell) para poupar os tokens da nossa sessão.
