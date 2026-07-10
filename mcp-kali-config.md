# Guia de Instalação: Zebbern Kali MCP (via Docker)

Como você decidiu usar o Zebbern Kali MCP, o F.A.R.O. agora delegará a execução das ferramentas de hacking (nmap, ffuf, nuclei, sqlmap, etc) para as **tools nativas (funções)** do servidor MCP em um container Docker, em vez de depender de comandos instáveis via bash.

## 1. Pré-requisitos
Certifique-se de que o Docker está instalado e o serviço está ativo no seu Kali Linux:
```bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable docker --now
```

## 2. Adicionando o Servidor MCP no Claude Code
O `zebbern-kali-mcp` é configurado via stdio utilizando o comando docker. O Claude Code suporta adicionar servidores facilmente com o comando `claude mcp add`.

Abra o terminal do Kali onde você roda suas sessões e execute:
```bash
claude mcp add zebbern-kali-mcp docker run -i --rm zebbern/kali-mcp
```
*Se você usar uma versão mais antiga do Claude Code que não suporta o comando add, coloque a seguinte configuração no seu arquivo `~/.claude.json` ou `.mcp.json`:*
```json
{
  "mcpServers": {
    "zebbern-kali-mcp": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "zebbern/kali-mcp"]
    }
  }
}
```

## 3. Confirmação
Após reiniciar o seu `claude`, você pode conferir as novas capacidades digitando o comando:
```bash
/mcp list
```
Você deverá ver a lista de mais de 100 ferramentas do Kali expostas como funções diretas (ex: `run_nmap`, `run_nikto`, `run_nuclei`). O agente usará elas automaticamente graças ao `faro_kali_arsenal`.
