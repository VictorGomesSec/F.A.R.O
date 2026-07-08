# Threat Modeling

Metodologia de modelagem de ameaças reutilizável, fonte única para `../agents/threat-modeler.md` e referenciada pelo workflow `../workflows/threat-modeling.md`.

## Metodologia

1. **Decompor o sistema** — diagrama de fluxo de dados (DFD) identificando processos, armazenamentos de dados, fluxos e limites de confiança (trust boundaries).
2. **Identificar ameaças por elemento** usando STRIDE:
   - **S**poofing — identidade pode ser falsificada?
   - **T**ampering — dado pode ser adulterado em trânsito/repouso?
   - **R**epudiation — uma ação pode ser negada por falta de evidência?
   - **I**nformation Disclosure — dado sensível pode ser exposto indevidamente?
   - **D**enial of Service — o componente pode ser tornado indisponível?
   - **E**levation of Privilege — um ator pode obter privilégio maior que o concedido?
3. **Mapear cada ameaça a um controle existente ou lacuna** — se não há controle, é uma lacuna a priorizar.
4. **Priorizar por risco** — combinar probabilidade de exploração (superfície exposta, habilidade necessária) com impacto (confidencialidade/integridade/disponibilidade/negócio).
5. **Documentar decisões de risco aceito** — quando um risco identificado não será mitigado, registrar quem aceitou e por quê.

## Quando aplicar

- Antes de implementar uma nova feature que introduz um novo limite de confiança (nova integração externa, novo tipo de usuário, novo fluxo de dados sensível).
- Ao revisar uma arquitetura existente que nunca passou por modelagem formal.
- Como insumo de priorização antes de um pentest/red team (definir onde concentrar esforço ofensivo).

## Formato de saída

Ver `../templates/threat-model.md` para a estrutura completa (DFD, tabela de ameaças STRIDE por elemento, matriz de risco, decisões de risco aceito).

## Referências

- OWASP Threat Modeling process, Microsoft STRIDE.
- MITRE ATT&CK como catálogo de técnicas para instanciar ameaças concretas a partir de categorias STRIDE abstratas.
- NIST SP 800-154 (Guide to Data-Centric System Threat Modeling).

## Quem consome esta regra

`threat-modeler`, `chief-security-architect` (para decidir quais especialistas engajar com base nas lacunas identificadas), `secure-developer` (na fase de design de novas features).
