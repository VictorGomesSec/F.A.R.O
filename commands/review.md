# /review

## Descrição

Comando genérico de revisão — o `chief-security-architect` inspeciona o alvo informado (código, PR, arquitetura, configuração) e decide quais especialistas engajar com base no tipo de conteúdo encontrado. Use este comando quando não tiver certeza de qual comando especializado chamar; para um domínio já conhecido, prefira `/security-review`, `/code-review`, `/threat-model`, etc.

## Parâmetros

- `target` (obrigatório) — caminho, PR, repositório ou descrição do que revisar.
- `depth` (opcional) — `quick` (triagem rápida) ou `deep` (engajamento completo com múltiplos especialistas). Padrão: `quick`.

## Exemplos

- `/review target:./src depth:deep`
- `/review target:"PR #128" `

## Saída Esperada

Resumo do `chief-security-architect` (ver `../agents/chief-security-architect.md`) indicando: tipo de conteúdo identificado, especialistas selecionados, achados consolidados (se `depth:deep`) ou recomendação de qual comando especializado rodar a seguir (se `depth:quick`). Ver `../templates/finding.md` para o formato de cada achado individual.
