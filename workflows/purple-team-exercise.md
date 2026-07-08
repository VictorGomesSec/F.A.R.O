# Purple Team Exercise

## Objetivo

Validar a eficácia real de detecção e resposta contra técnicas de ataque específicas, através de emulação coordenada entre ofensiva (red) e detecção (blue).

## Entrada

- Perfil de ameaça/técnicas MITRE ATT&CK a emular.
- Acordo de janela de execução e escopo de sistemas envolvidos.

## Saída

Matriz de cobertura de detecção (técnica emulada vs. detectada) e recomendações de melhoria.

## Agentes Utilizados

`../agents/purple-team-advisor.md` (principal/coordenador), agente ofensivo relevante à técnica (`../agents/web-pentester.md`, `../agents/active-directory-specialist.md`, etc.), `../agents/detection-engineer.md`, `../agents/report-writer.md`.

## Ordem de Execução

1. `purple-team-advisor` seleciona as técnicas a emular com base no perfil de ameaça do cliente.
2. O agente ofensivo correspondente emula cada técnica em ambiente controlado.
3. `detection-engineer` verifica se cada técnica gerou o alerta esperado, documentando falso negativo/positivo.
4. `purple-team-advisor` prioriza lacunas de detecção por técnica de maior probabilidade/impacto.
5. `report-writer` consolida a matriz de cobertura e recomendações.

## Checklists

`../rules/testing-standards.md` (validação de achado real).

## Artefatos Gerados

Matriz de cobertura MITRE ATT&CK, `../templates/finding.md` por lacuna identificada.
