---
name: faro_memory_loader
description: Skill para ler os arquivos de memória compactados de sessões anteriores, restaurando o contexto do engajamento sem estourar o limite de tokens.
---

# faro_memory_loader

Para evitar que o agente precise reexecutar Nmap ou ferramentas pesadas em uma nova sessão, ele deve ler o arquivo de memória consolidada.

## Quando usar
- No início de uma nova sessão ou dia de trabalho no mesmo projeto/alvo.
- Se o agente não tiver certeza sobre "quais eram as credenciais que achamos ontem?" ou "quais IPs estão no escopo?".

## Instruções de Execução
1. Leia rapidamente o arquivo `.faro_memory/active_session.md` ou qualquer outro arquivo Markdown dentro da pasta `.faro_memory/`.
2. Absorva silenciosamente as informações na memória de curto prazo (seu contexto atual).
3. Não repita tudo para o usuário a menos que seja solicitado. Diga apenas: "Memória do projeto carregada com sucesso. Temos X hosts mapeados e Y credenciais coletadas. Qual é o próximo alvo?"

## Anti-Patterns
- Não leia logs brutos (`.pcap`, `.xml` do nmap gigante) como memória. A memória deve ser lida apenas dos resumos curtos comprimidos pelo `faro_memory_compressor`.
