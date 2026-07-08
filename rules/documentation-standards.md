# Documentation Standards

Padrões de documentação aplicados a todo o ecc-security-pack, fonte única para `../agents/technical-writer.md` e `../agents/report-writer.md`.

## Princípios

1. **Terminologia única e centralizada** — cada conceito (achado, severidade, agente especialista, workflow, etc.) é definido uma vez em `../docs/architecture.md` e usado de forma idêntica em todo o repositório.
2. **Exemplo concreto sempre** — todo guia/documento que descreve um processo inclui pelo menos um exemplo real e reproduzível, não apenas descrição abstrata.
3. **Rastreabilidade de fonte** — documentos derivados de análise técnica (relatórios) citam o agente/método de origem de cada achado.
4. **Consistência de estrutura por tipo de arquivo** — todo arquivo do mesmo tipo (`agents/`, `rules/`, `workflows/`, etc.) segue exatamente a mesma ordem de seções, facilitando leitura cruzada.
5. **Documentação como código** — documentação vive no mesmo repositório versionado que o conteúdo que descreve, revisada com o mesmo rigor de PR.
6. **Escrita para o leitor que nunca viu o framework** — mesmo documentos avançados fornecem contexto mínimo de orientação antes de aprofundar.

## Checklist de revisão de documentação

- [ ] Todo termo técnico usado é definido em algum lugar central, com link, na primeira ocorrência relevante.
- [ ] Todo guia de processo tem exemplo executável/concreto.
- [ ] Nenhum documento referencia um arquivo/agente que não existe mais no repositório.
- [ ] A estrutura de seções do documento corresponde à convenção do seu tipo de arquivo.

## Referências

- Convenções internas descritas em `../docs/architecture.md`.

## Quem consome esta regra

`technical-writer`, `report-writer`, `framework-maintainer` (auditoria de aderência).
