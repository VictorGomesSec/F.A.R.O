# Template: Technical Report

Relatório técnico completo para o time de engenharia/segurança, com evidência reprodutível. Produzido por `../agents/report-writer.md` a partir de achados de qualquer agente ofensivo/defensivo.

---

# Relatório Técnico — {{Nome do Engajamento/Sistema}}

## Metodologia e Escopo

- **Alvo(s)**: {{descrição/URLs/repositórios}}
- **Período**: {{data início — data fim}}
- **Metodologia**: {{referência ao workflow usado, ex.: `../workflows/web-application-assessment.md`}}
- **Escopo testado**: {{o que foi de fato testado}}
- **Escopo excluído**: {{o que ficou fora, e por quê}}
- **Ferramentas/agentes utilizados**: {{lista}}

## Sumário de Achados

| ID | Título | Severidade | CWE |
|---|---|---|---|
| {{F-01}} | {{título}} | {{severidade}} | {{CWE}} |

## Achados Detalhados

{{Um bloco de `finding.md` por achado, em ordem de severidade decrescente.}}

## Apêndice A — Ambiente de Teste

{{Versões de ferramentas, configuração de ambiente, contas de teste usadas (sem credenciais reais).}}

## Apêndice B — Limitações do Engajamento

{{O que não pôde ser testado e por quê (tempo, acesso, escopo contratual).}}
