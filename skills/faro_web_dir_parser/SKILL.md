---
name: faro_web_dir_parser
description: Skill para processar saídas textuais ou JSON de ferramentas de brute-force de diretório como Gobuster, Dirb, ffuf.
---

# faro_web_dir_parser

Esta skill ajuda a filtrar longas listas de fuzzing HTTP, extraindo apenas os status codes interessantes (200 OK, 301/302 Redirects, 401/403 Forbidden/Unauthorized).

## Quando usar
- Ao analisar outputs `.txt`, `.out` ou `.json` de Gobuster ou ffuf.
- Para encontrar endpoints expostos após um ataque de brute-force de diretórios.

## Instruções de Execução
1. Faça um `grep` ou use `awk` para limpar os falsos positivos (ex: ignorar todos os status 404).
2. Agrupe as rotas por status HTTP.
3. Alerte imediatamente sobre rotas com extensões perigosas (ex: `.env`, `.bak`, `.git`, `.php`, `config/`).
4. Apresente os resultados em uma tabela Markdown limpa: `| Rota | Status Code | Tamanho |`.

## Exemplo
```bash
# Extrair todas as respostas 200 de um output do gobuster
grep "Status: 200" gobuster_output.txt | awk '{print $1}'
```
