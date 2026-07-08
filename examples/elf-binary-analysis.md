# Exemplo: Analisar um Binário ELF

## Cenário

Um binário ELF de origem desconhecida foi encontrado em um servidor Linux e precisa ser analisado para determinar sua função, antes de decidir se há necessidade de resposta a incidente.

## Comando/Workflow Utilizado

`../workflows/reverse-engineering.md`, com possível transição para `../workflows/malware-analysis.md` ou `../workflows/incident-response.md` dependendo do resultado inicial.

## Agentes Engajados

1. `../agents/reverse-engineer.md` — identifica formato, arquitetura, proteções (stripped symbols, packer), realiza desmontagem estática e recuperação de funções.
2. `../agents/malware-analyst.md` — engajado se a análise estática revela comportamento de malware (persistência, C2, exfiltração).
3. `../agents/linux-security-specialist.md` — avalia o contexto do host onde o binário foi encontrado (permissões, como chegou ali, se há persistência via systemd/cron).
4. `../agents/incident-response-advisor.md` — engajado se há indício de que o binário está/esteve ativo em produção.

## Achados Típicos Encontrados Neste Tipo de Análise

- Binário com seção `.text` de alta entropia, indicando packer customizado; unpacking revela rotina de decodificação de uma lista de domínios de C2.
- Binário instalado com persistência via unidade `systemd` customizada, disfarçada com nome similar a um serviço legítimo do sistema.
- Ausência de proteções modernas (sem stack canary, sem PIE), sugerindo compilação antiga ou intencionalmente simplificada para facilitar exploração de outros binários no mesmo host.

## Saída

Relatório técnico seguindo o formato de `../agents/reverse-engineer.md#formato-de-resposta`, com indicadores encaminhados a `../agents/detection-engineer.md` e, se aplicável, ativação do workflow `../workflows/incident-response.md`.
