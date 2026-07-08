# Como Criar um Novo Agente

## Quando criar um novo agente vs. estender um existente

Crie um novo agente quando o domínio de conhecimento é distinto o suficiente para ter seu próprio escopo/limitações claros (ex.: `ios-security` vs. `android-security`, apesar de ambos serem "mobile"). Estenda um agente existente quando a nova capacidade é apenas mais uma responsabilidade dentro do mesmo domínio já coberto.

Se estiver em dúvida, consulte `../agents/agent-designer.md` (para desenhar o novo agente) e `../agents/framework-maintainer.md` (para avaliar se não há sobreposição excessiva com um agente já existente).

## Frontmatter Obrigatório

```yaml
---
name: <slug-kebab-case>
description: <uma frase: quando invocar este agente>
tools: [Read, Grep, Glob, Bash, ...]
---
```

- `name` deve ser idêntico ao nome do arquivo (sem `.md`).
- `description` deve deixar claro o gatilho de uso, não apenas repetir o nome.
- `tools` deve refletir realisticamente o que o agente precisa — um agente de OSINT não precisa de `Bash`, um agente de forense binária não precisa de `WebSearch`.

## Seções Obrigatórias (nesta ordem)

1. **Missão** — uma frase/parágrafo do propósito central.
2. **Responsabilidades** — lista do que o agente faz.
3. **Escopo** — os limites do que está dentro do domínio.
4. **Limitações** — o que o agente explicitamente não faz, com encaminhamento a outro agente.
5. **Fluxo de Trabalho** — passos numerados de como o agente opera.
6. **Formato de Resposta** — a estrutura exata da saída.
7. **Critérios de Qualidade** — como saber se o trabalho do agente está bom.
8. **Exemplos** — pelo menos dois cenários concretos.
9. **Quando Chamar Outro Agente** — lista de encaminhamentos com o slug exato do agente de destino.
10. **Boas Práticas** — heurísticas do que fazer.
11. **Anti-Patterns** — erros comuns a evitar.

## Regra de Não-Duplicação

Se o novo agente precisa de um checklist/princípio que já existe (ex.: OWASP Top 10), **não o reescreva** — referencie `../rules/<regra>.md`. Se o checklist não existe ainda, considere criar a regra primeiro em `rules/` e depois referenciá-la.

## Checklist Antes de Adicionar

- [ ] Frontmatter válido e completo.
- [ ] As 11 seções presentes, na ordem correta.
- [ ] Nenhum conteúdo duplicado de uma regra existente.
- [ ] Todos os agentes referenciados em "Quando Chamar Outro Agente" existem de fato.
- [ ] `../agents/framework-maintainer.md` rodou a auditoria de consistência após a adição.
