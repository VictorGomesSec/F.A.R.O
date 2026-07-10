# Guia de Instalação: Zebbern Kali MCP (via Docker)

O F.A.R.O. agora integra oficialmente o Zebbern Kali MCP. Isso permite delegar a execução de ferramentas de segurança ofensiva (nmap, ffuf, sqlmap, etc.) diretamente para o servidor MCP em um container Docker, garantindo maior estabilidade e isolamento.

## 1. Subindo o Backend (Container Kali)
Nós empacotamos as configurações necessárias dentro da pasta oficial de integrações do F.A.R.O.

No seu terminal, navegue até a pasta da integração e inicie o container:
```bash
cd integrations/zebbern-mcp
docker compose up -d
```
*(Se for a primeira vez, o Docker baixará a imagem, o que pode levar alguns minutos).*

## 2. Adicionando o Servidor MCP no Claude Code
O cliente MCP deste projeto é distribuído via `uvx`. Para conectar o Claude ao container que acabamos de ligar, rode no terminal:
```bash
claude mcp add zebbern-kali-mcp -- uvx zebbern-kali-mcp
```

## 3. Resolução de Problemas
Se você estiver em um ambiente corporativo (como atrás de um Zscaler ou Netskope) e o `docker compose up -d` falhar com um erro `403 Forbidden` no Docker Hub:
1. Pause ou desative temporariamente seu agente SASE/SWG.
2. Rode o `docker compose up -d` novamente (ou conecte-se a uma rede não corporativa, como 4G, apenas para o primeiro download).## 4. Confirmação
Após reiniciar o seu `claude`, você pode conferir as novas capacidades digitando o comando dentro do prompt do Claude:
```bash
/mcp list
```
Você deverá ver a lista de mais de 100 ferramentas do Kali expostas como funções diretas (ex: `run_nmap`, `run_nikto`, `run_nuclei`). O agente usará elas automaticamente graças ao `faro_kali_arsenal`.
