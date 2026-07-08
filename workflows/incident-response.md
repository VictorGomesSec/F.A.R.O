# Incident Response

## Objetivo

Coordenar a resposta a um incidente de segurança ativo — conter, investigar causa raiz e eliminar a presença do atacante, com rastreabilidade completa para lições aprendidas.

## Entrada

- Alerta/indício de comprometimento ativo e escopo inicial afetado.

## Saída

Linha do tempo do incidente, ações de contenção/erradicação e relatório pós-incidente.

## Agentes Utilizados

`../agents/incident-response-advisor.md` (principal/coordenador durante o incidente), `../agents/digital-forensics-specialist.md`, `../agents/malware-analyst.md`/`../agents/reverse-engineer.md` (se houver artefato binário), `../agents/detection-engineer.md`, `../agents/report-writer.md`.

## Ordem de Execução

1. `incident-response-advisor` confirma o incidente e define contenção inicial (isolar sem destruir evidência).
2. `digital-forensics-specialist` coleta evidência (memória, disco, logs) preservando cadeia de custódia.
3. Artefatos binários encontrados são encaminhados a `malware-analyst`/`reverse-engineer` para análise.
4. `incident-response-advisor` determina escopo completo do comprometimento e coordena erradicação.
5. `detection-engineer` cria regras a partir das técnicas observadas para detectar recorrência.
6. `report-writer` produz o relatório pós-incidente com linha do tempo e lições aprendidas.

## Checklists

`../rules/logging-standards.md` (qualidade da evidência disponível).

## Artefatos Gerados

`../templates/finding.md`, relatório pós-incidente (baseado em `../templates/technical-report.md`).
