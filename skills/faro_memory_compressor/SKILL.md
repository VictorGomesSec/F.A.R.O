---
name: faro_memory_compressor
description: Skill para consolidar descobertas da sessão atual em um arquivo de memória compacto (.md), economizando tokens e limpando contexto desnecessário.
---

# faro_memory_compressor

Sessões de Red Team geram saídas gigantes (logs do Nmap, BloodHound, scans de vulnerabilidade). Essa skill ensina o F.A.R.O a extrair o essencial e salvar permanentemente, permitindo descartar o lixo.

## Quando usar
- Quando o contexto da conversa estiver ficando muito longo (aviso de limite de tokens).
- Quando o usuário disser "salve isso na memória" ou "vamos trocar de assunto, salve o progresso".
- Após terminar uma fase do pentest (ex: terminou o port scan).

## Instruções de Execução
1. Reúna todos os achados vitais da sessão atual (IPs vivos, credenciais válidas descobertas, CVEs confirmadas, portas abertas importantes).
2. Oculte credenciais muito sensíveis ou anote apenas o hash (para segurança).
3. Escreva/Adicione (append) essas informações de forma estruturada no arquivo de memória padrão: `.faro_memory/active_session.md`.
4. Utilize listas (bullet points) e tabelas curtas. Evite parágrafos narrativos longos.

## Exemplo de Saída no Arquivo de Memória
```markdown
## Sessão: 2026-07-10 - Enumeração Externa
- **Hosts Vivos**: 192.168.1.10 (DC), 192.168.1.15 (Web)
- **Portas**: DC (53, 88, 389, 445), Web (80, 443)
- **Credenciais Encontradas**: svc_sql : P@ssw*** (Descoberta em share público)
- **Vulnerabilidades Confirmadas**: XSS Refletido em `192.168.1.15/search?q=`
- **Ferramentas Já Utilizadas (NÃO REPETIR)**: `holehe` (Falhou), `sherlock` (Executado), `ffuf` (Executado)
```

**Meta**: "Comprimir o passado para dominar o futuro."
