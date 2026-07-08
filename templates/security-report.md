# Template: Security Report

Template "guarda-chuva" que combina sumário executivo e detalhamento técnico em um único documento — usar quando não há necessidade de dois documentos separados (`executive-report.md` + `technical-report.md`).

---

# Relatório de Segurança — {{Nome do Engajamento/Sistema}}

{{Inserir bloco de `executive-summary.md` aqui.}}

## Metodologia e Escopo

{{Ver seção equivalente em `technical-report.md`.}}

## Achados Detalhados

{{Um bloco de `finding.md` por achado, em ordem de severidade decrescente. Achados críticos/altos podem incluir bloco de `poc.md`.}}

## Plano de Mitigação

{{Um bloco de `mitigation.md` por causa raiz agrupada.}}

## Riscos Aceitos

{{Riscos identificados que a organização decidiu não corrigir no momento, com responsável e justificativa.}}

## Apêndices

{{Ambiente de teste, ferramentas, limitações do engajamento — ver `technical-report.md`.}}
