# Guia de Instalação: Zebbern Kali MCP (via Docker)

Como você decidiu usar o Zebbern Kali MCP, o F.A.R.O. agora delegará a execução das ferramentas de hacking (nmap, ffuf, nuclei, sqlmap, etc) para as **tools nativas (funções)** do servidor MCP em um container Docker, em vez de depender de comandos instáveis via bash.

## 1. Pré-requisitos
Certifique-se de que o Docker está instalado e o serviço está ativo no seu Kali Linux:
```bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable docker --now
```

## 2. Subindo o Backend (Container Kali)
O `zebbern-kali-mcp` tem uma arquitetura dividida: as ferramentas rodam num container Docker (backend) e o Claude fala com um cliente Python (frontend).

Primeiro, inicie o backend no seu terminal do Kali:
```bash
curl -sLO https://raw.githubusercontent.com/zebbern/zebbern-kali-mcp/main/docker-compose.yml
docker compose up -d
```

## 3. Adicionando o Servidor MCP no Claude Code
O cliente MCP deste projeto é feito em Python e distribuído via `uvx`. Para conectar o Claude ao container que acabamos de ligar, rode no terminal:
```bash
claude mcp add zebbern-kali-mcp -- uvx zebbern-kali-mcp
```

## 4. Confirmação
Após reiniciar o seu `claude`, você pode conferir as novas capacidades digitando o comando dentro do prompt do Claude:
```bash
/mcp list
```
Você deverá ver a lista de mais de 100 ferramentas do Kali expostas como funções diretas (ex: `run_nmap`, `run_nikto`, `run_nuclei`). O agente usará elas automaticamente graças ao `faro_kali_arsenal`.
