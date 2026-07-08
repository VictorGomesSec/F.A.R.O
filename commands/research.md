# /research

## Descrição

Reconhecimento passivo via fontes públicas sobre um alvo/organização, invocando `../agents/osint-researcher.md`. Não realiza nenhuma interação ativa com o alvo.

## Parâmetros

- `target` (obrigatório) — domínio, organização ou marca a pesquisar.
- `purpose` (opcional) — `attack-surface` (mapear infraestrutura exposta), `pretext` (insumo para engenharia social autorizada), `exposure` (vazamentos de credenciais/dados). Padrão: `attack-surface`.

## Exemplos

- `/research target:empresa.com purpose:attack-surface`
- `/research target:"Empresa S.A." purpose:exposure`

## Saída Esperada

Dossiê estruturado (mapa de superfície, exposição de dados, classificação de risco por item), com fonte e data de coleta de cada dado, seguindo `../agents/osint-researcher.md#formato-de-resposta`. Achados que requerem validação ativa são encaminhados ao especialista correspondente, nunca validados diretamente por este comando.
