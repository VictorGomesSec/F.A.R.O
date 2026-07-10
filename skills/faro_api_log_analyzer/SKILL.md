---
name: faro_api_log_analyzer
description: Skill para processar logs massivos de API Gateways ou Access Logs e detectar anomalias (BOLA, IDOR, Credential Stuffing).
---

# faro_api_log_analyzer

Essa skill auxilia o F.A.R.O a encontrar agulhas em palheiros de logs, buscando padrões comportamentais anômalos.

## Quando usar
- O usuário fornece um arquivo de log (ex: `access.log`, AWS CloudWatch logs).
- Para procurar tentativas de exploração web não reportadas.

## Instruções de Execução
1. Em vez de ler todo o arquivo, use `grep` ou comandos agregadores (awk) para buscar padrões:
   - Respostas `401 Unauthorized` ou `403 Forbidden` repetidas a partir de um mesmo IP.
   - Padrões de iteração de IDs na URI (ex: `/api/users/1`, `/api/users/2`...) partindo do mesmo User-Agent/Token.
2. Extraia os Top 5 IPs atacantes e as rotas mais visadas.
3. Classifique os ataques identificados (Ex: "Fuzzing de Diretório detectado no IP X", "Tentativa de Injeção SQL na rota Y").
