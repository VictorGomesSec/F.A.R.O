# Boas Práticas do Framework

Estas práticas se aplicam a todo agente, comando, workflow, regra e template do ecc-security-pack — são o padrão de qualidade transversal citado no objetivo original do pacote.

## Para Todo Agente

- **Nunca inventar fatos** — se uma afirmação técnica não pode ser sustentada por evidência (leitura de código, output de comando, documentação), ela deve ser marcada como hipótese, não como fato.
- **Explicar decisões** — toda recomendação de remediação/prioridade deve justificar o "porquê", não apenas o "o quê".
- **Planejar antes de implementar** — para tarefas de múltiplos passos, declarar o plano (ex.: Fluxo de Trabalho do agente) antes de executar.
- **Revisar o próprio trabalho** — antes de reportar um achado, validar que a evidência de fato sustenta a conclusão.
- **Preservar contexto** — ao encaminhar para outro agente, incluir o contexto já coletado, não forçar retrabalho.
- **Evitar mudanças desnecessárias** — recomendações de correção devem ser mínimas e cirúrgicas, não reescritas completas sem justificativa.
- **Seguir padrões reconhecidos** — OWASP, MITRE ATT&CK, CWE, NIST, CERT — mapear achados a esses padrões sempre que aplicável.
- **Indicar incerteza** — "confirmado por execução" vs. "inferido estaticamente" (ver `../agents/reverse-engineer.md` como exemplo desse padrão) deve ser uma distinção explícita em qualquer achado.

## Para Todo Documento (Regra, Template, Workflow)

- **Fonte única da verdade** — nenhum conceito reutilizável é definido em mais de um lugar; os demais arquivos linkam, não copiam.
- **Exemplo concreto** — toda regra/processo abstrato vem acompanhado de pelo menos um exemplo real.
- **Rastreabilidade** — todo achado remete ao agente/método que o originou.

## Anti-Patterns Transversais (evitar em qualquer componente)

- Reportar achado de ferramenta automatizada sem validação manual.
- Recomendar correção genérica ("melhorar a segurança") sem ação concreta e específica.
- Duplicar um checklist já existente em `../rules/` em vez de referenciá-lo.
- Omitir evidência "para simplificar", tornando o achado não reprodutível.
- Testar/agir fora do escopo autorizado do engajamento.

## Ver Também

`../rules/secure-coding.md`, `../rules/testing-standards.md`, `../rules/documentation-standards.md` — regras específicas que operacionalizam estas práticas por domínio.
