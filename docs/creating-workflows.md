# Como Criar um Novo Workflow

## Quando criar um workflow

Um workflow define um processo multi-agente com ordem de execução — crie um novo workflow quando um tipo de engajamento recorrente envolve **mais de um agente coordenado**, não apenas uma única chamada. Se um único agente já resolve o cenário completo, um `command` simples é suficiente e um workflow seria over-engineering.

## Estrutura Obrigatória (nesta ordem)

1. **Objetivo** — o que o workflow entrega ao final.
2. **Entrada** — o que precisa estar disponível para iniciar (acesso, credenciais de teste, escopo).
3. **Saída** — o(s) documento(s)/artefato(s) final(is), referenciando `../templates/`.
4. **Agentes Utilizados** — lista de agentes envolvidos, com link para cada um, indicando qual é o principal e quais são condicionais.
5. **Ordem de Execução** — passos numerados, indicando quais podem ocorrer em paralelo e quais dependem do resultado do passo anterior.
6. **Checklists** — regras de `../rules/` usadas como critério de cobertura.
7. **Artefatos Gerados** — templates de `../templates/` usados para a saída.

## Princípios de Design de Workflow

- **Menor conjunto de agentes necessário** — não inclua um agente "só para garantir"; cada agente na lista deve ter um papel claro no objetivo final.
- **Condicionalidade explícita** — se um agente só é engajado sob certa condição (ex.: "se houver Kubernetes"), declare isso explicitamente na Ordem de Execução, não deixe implícito.
- **Um agente de consolidação ao final** — praticamente todo workflow termina com `../agents/report-writer.md` (ou, para modelagem de ameaças, o próprio `threat-modeler`) consolidando os achados dos demais.

## Checklist Antes de Adicionar

- [ ] Todos os agentes/regras/templates referenciados existem de fato.
- [ ] A ordem de execução deixa claro o que é sequencial vs. paralelo/condicional.
- [ ] O workflow não duplica um já existente com escopo quase idêntico (consultar `../agents/framework-maintainer.md`).
- [ ] Existe pelo menos um `command` que invoca este workflow, ou está documentado como acionado diretamente.
