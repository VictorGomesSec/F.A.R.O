---
name: faro_nmap_parser
description: Analisa e converte saídas complexas de NMAP (grepable, XML ou txt) em resumos executáveis para uso em pentests e threat modeling. 
---

# faro_nmap_parser

Esta skill capacita o agente a parsear eficientemente grandes arquivos de output do NMAP (especialmente o formato Grepable ou XML) sem se perder no volume de dados.

## Quando usar
- Quando o usuário fornecer um arquivo `.nmap`, `.gnmap` ou `.xml` gerado pelo NMAP.
- Quando for necessário identificar rapidamente as portas abertas (open) e os serviços rodando para delegar para outros agentes (ex: web-pentester para as portas 80/443).

## Instruções de Execução
1. Utilize comandos bash nativos (`grep`, `awk`) se o arquivo for `.gnmap` (grepable) para extrair rapidamente as portas `open`.
2. Se for um output `.nmap` padrão muito grande, não tente ler o arquivo todo. Faça um grep por "open".
3. Apresente os resultados sempre no formato: `[IP] - [Porta]/[Protocolo] - [Serviço] ([Versão se disponível])`.
4. Ignore portas `filtered` ou `closed` a menos que explicitamente solicitado pelo usuário.

## Exemplos
```bash
# Para extrair portas abertas de um .gnmap:
grep "open" scan.gnmap | awk '{print $2}'
```
