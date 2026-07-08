# /detection

## Descrição

Cria ou tuna regras de detecção a partir de uma técnica/IOC reportado, invocando `../agents/detection-engineer.md`.

## Parâmetros

- `technique` (obrigatório) — técnica/comportamento a detectar (descrição livre ou ID MITRE ATT&CK).
- `source_finding` (opcional) — achado de origem (de outro agente/comando) que motivou a regra.
- `telemetry` (opcional) — fontes de log disponíveis no ambiente (endpoint, rede, identidade, cloud).

## Exemplos

- `/detection technique:T1558.003 telemetry:windows-event-logs`
- `/detection technique:"exfiltração via DNS tunneling" source_finding:"achado #12 do relatório de malware"`

## Saída Esperada

Regra de detecção agnóstica de plataforma (lógica de condição/agregação), mapeamento MITRE ATT&CK, fonte de telemetria requerida e contexto de resposta esperado, seguindo o formato de `../agents/detection-engineer.md#formato-de-resposta`. Ver `../workflows/purple-team-exercise.md` para validação da regra via emulação.
