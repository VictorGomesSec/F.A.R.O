# Incident Response & Forensics Standards

Fonte única das fases de resposta a incidente (NIST SP 800-61r2) e dos princípios de cadeia de custódia forense usada por `incident-response-advisor` e `digital-forensics-specialist`. Evita que os dois agentes mantenham descrições paralelas e potencialmente divergentes do mesmo ciclo de vida de incidente.

## Fases do ciclo de IR (NIST SP 800-61r2)

1. **Preparação** — playbooks por tipo de incidente, contatos/escalonamento definidos, ferramentas forenses e de contenção prontas antes do incidente, não durante.
2. **Detecção e Análise** — triagem inicial de alerta/relato, confirmação de que é de fato um incidente (vs. falso positivo), classificação de severidade/escopo preliminar. Consome achados de `detection-engineer`/`logging-specialist` quando disponíveis.
3. **Contenção, Erradicação e Recuperação** — conter sem destruir evidência (isolar, não desligar/reformatar direto quando análise forense ainda for necessária); erradicar causa raiz (não só o artefato observado); recuperar com validação de que o vetor de entrada foi de fato fechado, não apenas o sintoma.
4. **Atividade Pós-Incidente** — lições aprendidas documentadas, atualização de playbook/detecção (`detection-engineer`), timeline final para stakeholders (`report-writer`).

`incident-response-advisor` é responsável pela orquestração das 4 fases; `digital-forensics-specialist` atua principalmente dentro da fase 2-3, fornecendo evidência e timeline técnica que sustentam as decisões de contenção/erradicação.

## Cadeia de Custódia (aplicável a todo artefato coletado por `digital-forensics-specialist`)

1. **Identificação** — todo artefato (disco, memória, log, pcap) é identificado com timestamp, coletor, origem exata (host/caminho) antes de qualquer análise.
2. **Preservação** — coleta com write-blocker (disco) ou dump read-only (memória); hash (SHA-256 no mínimo) calculado imediatamente após a coleta e antes de qualquer análise.
3. **Aquisição** — cópia bit-a-bit (imagem forense), nunca análise direto na mídia original; hash da cópia conferido contra o hash da coleta original.
4. **Documentação** — todo passo (quem, quando, o quê, hash antes/depois) registrado de forma que resista a contestação — a ausência de documentação invalida a evidência independente da qualidade da análise técnica.
5. **Análise** — sempre sobre a cópia, nunca sobre o original; ferramentas e versão usadas registradas para reprodutibilidade.
6. **Apresentação** — timeline e achados vinculados de volta à evidência original com hash, permitindo verificação independente.

## Checklist de revisão

- [ ] Toda evidência coletada tem hash registrado no momento da coleta, antes de qualquer análise.
- [ ] Nenhuma análise foi feita sobre mídia/artefato original — sempre sobre cópia verificada.
- [ ] Contenção não destruiu evidência necessária para determinar causa raiz (ex.: desligar um host antes de dump de memória quando memória seria relevante).
- [ ] Timeline final reconstrói sequência de eventos com timestamp e fonte de cada entrada (não apenas lista de IOCs sem ordenação temporal).
- [ ] Lições aprendidas geram ação concreta em `detection-engineer` (nova regra) ou controle preventivo, não apenas registro do que aconteceu.

## Referências

- NIST SP 800-61r2 (Computer Security Incident Handling Guide).
- ISO/IEC 27037 (Guidelines for identification, collection, acquisition and preservation of digital evidence).
- SWGDE (Scientific Working Group on Digital Evidence) — boas práticas de aquisição forense.
- MITRE ATT&CK (ver `mitre-attack-mapping.md`) para classificação de TTP observado durante a análise.

## Quem consome esta regra

`incident-response-advisor`, `digital-forensics-specialist`.
