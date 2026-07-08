# /planning

## Descrição

Planeja um engajamento de segurança multi-especialista (qual workflow usar, em qual ordem, com quais agentes), invocando `../agents/chief-security-architect.md` em modo de planejamento — sem executar a análise em si.

## Parâmetros

- `objective` (obrigatório) — objetivo do engajamento (ex.: "avaliar postura de segurança antes de auditoria SOC 2", "validar detecção contra ameaça X").
- `constraints` (opcional) — restrições de tempo, orçamento, ambiente (produção vs. staging) ou escopo já excluído.

## Exemplos

- `/planning objective:"avaliar aplicação web nova antes do lançamento" constraints:"apenas ambiente de staging, 3 dias"`
- `/planning objective:"medir cobertura de detecção contra técnicas de ransomware"`

## Saída Esperada

Plano de engajamento: workflow(s) recomendado(s) (ver `../workflows/`), ordem de especialistas, artefatos esperados em cada etapa e critério de conclusão. Não produz achados técnicos — apenas o plano, que o usuário aprova antes da execução real via os comandos/workflows correspondentes.
