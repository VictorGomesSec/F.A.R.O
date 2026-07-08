# Arquitetura do ecc-security-pack

## Visão Geral

O ecc-security-pack estende o ECC (Everything Claude Code) com um conjunto modular de agentes, comandos, workflows, regras e templates especializados em segurança ofensiva/defensiva. A ideia central é que **nenhum componente duplica conhecimento de outro**: cada tipo de arquivo tem uma responsabilidade única e os demais o referenciam por link relativo em vez de copiar seu conteúdo.

## Estrutura de Diretórios

```
ecc-security-pack/
  agents/       38 especialistas — "quem faz o trabalho"
  rules/        14 regras reutilizáveis — "o padrão contra o qual comparar"
  commands/     19 comandos — "como invocar um especialista/workflow"
  workflows/    16 processos multi-agente — "a orquestração de ponta a ponta"
  templates/    13 modelos de documento — "o formato da saída"
  examples/     9 cenários completos — "como isso se parece na prática"
  docs/         guias de uso e extensão do próprio framework
```

## Terminologia

- **Agente**: um especialista com missão, escopo e limitações bem definidos (`agents/<slug>.md`). Nunca duplica conteúdo de uma regra — referencia.
- **Regra**: fonte única de verdade para um checklist/princípio reutilizável (`rules/<slug>.md`). Um agente ou workflow não deve reescrever uma regra, apenas linká-la.
- **Comando**: ponto de entrada nomeado (`/nome`) que invoca um agente ou workflow com parâmetros definidos (`commands/<slug>.md`).
- **Workflow**: processo multi-agente com ordem de execução definida, do input ao artefato final (`workflows/<slug>.md`).
- **Template**: estrutura de documento de saída, com placeholders `{{...}}` a preencher (`templates/<slug>.md`).
- **Achado (finding)**: a unidade atômica de um problema de segurança identificado, sempre no formato de `templates/finding.md`.

## Fluxo Típico de Uso

1. O usuário invoca um `command` (ex.: `/web-pentest`) ou pede diretamente ao `chief-security-architect` para avaliar algo ambíguo (via `/review`).
2. O comando invoca o `workflow` correspondente (ou, para comandos simples, um único `agent`).
3. O workflow orquestra múltiplos `agents` em ordem definida, cada um produzindo achados no formato de `templates/finding.md`.
4. `report-writer` consolida os achados em um relatório final usando o `template` apropriado.
5. `framework-maintainer` e `technical-writer` mantêm a consistência estrutural e a documentação do próprio pacote ao longo do tempo.

## Orquestrador

`agents/chief-security-architect.md` é o ponto de entrada para engajamentos ambíguos ou multi-domínio — ele nunca executa a análise técnica diretamente, apenas identifica o problema, seleciona especialistas, define ordem de execução, revisa entregas e produz o resumo final.

## Ver Também

- `installation.md` — como instalar/usar o pacote.
- `creating-agents.md`, `creating-commands.md`, `creating-workflows.md` — como estender o framework.
- `best-practices.md` — princípios de qualidade que todo componente deve seguir.
