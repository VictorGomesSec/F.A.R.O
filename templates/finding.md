# Template: Finding

Unidade estrutural de um achado individual, usada por praticamente todos os relatórios do framework. Preencher um bloco por achado.

---

## {{ID}} — {{Título do achado}}

- **Severidade**: {{Crítica | Alta | Média | Baixa}}
- **CWE**: {{CWE-XXX}}
- **Categoria**: {{ex.: OWASP A01, MITRE ATT&CK T1558.003}}
- **Componente/Endpoint/Ativo afetado**: {{caminho, URL, host, arquivo:linha}}
- **Agente de origem**: {{ex.: web-pentester, source-code-auditor}}

### Descrição

{{O que é a falha, em 2-4 frases, sem jargão desnecessário.}}

### Evidência

```
{{Request/response, trecho de código, comando executado, ou referência ao PoC em ../templates/poc.md}}
```

### Impacto

{{Impacto técnico e de negócio — o que um atacante consegue fazer e por que isso importa para a organização.}}

### Remediação Recomendada

{{Ação concreta e específica — não "corrigir a vulnerabilidade" genérico. Referenciar `../rules/` relevante quando aplicável.}}

### Status

{{Aberto | Em correção | Corrigido | Risco aceito — se "Risco aceito", registrar quem aceitou e por quê.}}
