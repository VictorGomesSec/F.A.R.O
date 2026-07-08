# Reverse Engineering

## Objetivo

Reconstruir a lógica de um binário na ausência de código-fonte, produzindo artefatos de análise (pseudocódigo, CFG, indicadores técnicos) que sustentem triagem, exploração ou resposta a incidente.

## Entrada

- Binário/artefato a analisar e contexto conhecido (origem, suspeita).

## Saída

Relatório seguindo o formato de `../agents/reverse-engineer.md#formato-de-resposta`.

## Agentes Utilizados

`../agents/reverse-engineer.md` (principal), `../agents/malware-analyst.md` (se o binário exibe comportamento malicioso), `../agents/exploit-developer.md` (se há primitiva explorável), `../agents/windows-internals-specialist.md`/`../agents/linux-security-specialist.md` (contexto de SO específico).

## Ordem de Execução

1. `reverse-engineer` realiza triagem (formato, arquitetura, proteções, packer).
2. Análise estática: desmontagem, recuperação de funções e estruturas.
3. Validação dinâmica em ambiente isolado quando necessário.
4. Consolidação em pseudocódigo e CFG das rotinas críticas.
5. Encaminhamento condicional: comportamento malicioso → `malware-analyst`; primitiva explorável → `exploit-developer`; especificidade de SO → especialista correspondente.

## Checklists

N/A (metodologia própria descrita no agente principal).

## Artefatos Gerados

Relatório técnico com pseudocódigo e indicadores, `../templates/finding.md` quando aplicável.
