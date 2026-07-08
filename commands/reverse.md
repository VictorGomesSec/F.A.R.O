# /reverse

## Descrição

Análise estática/dinâmica de um binário para recuperação de lógica, invocando `../agents/reverse-engineer.md`.

## Parâmetros

- `target` (obrigatório) — caminho do binário/arquivo a analisar.
- `mode` (opcional) — `static` (apenas desmontagem/estrutura) ou `dynamic` (inclui execução controlada em ambiente isolado). Padrão: `static`.
- `hint` (opcional) — contexto conhecido (formato, origem, suspeita de packer) para acelerar a triagem.

## Exemplos

- `/reverse target:./samples/unknown.exe mode:static`
- `/reverse target:./samples/driver.sys hint:"suspeita de rootkit em kernel"`

## Saída Esperada

Relatório seguindo o formato descrito em `../agents/reverse-engineer.md#formato-de-resposta`: sumário executivo, metadados, pseudocódigo das rotinas centrais, indicadores técnicos e próximos passos recomendados (ex.: encaminhar a `../agents/malware-analyst.md` ou `../agents/exploit-developer.md`).
