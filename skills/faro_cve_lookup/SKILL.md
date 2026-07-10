---
name: faro_cve_lookup
description: Skill para pesquisar rapidamente informações sobre uma CVE específica e mapear se existe exploit público (ex: Exploit-DB, Metasploit).
---

# faro_cve_lookup

Esta skill dita como o F.A.R.O deve abordar a busca e apresentação de informações sobre Common Vulnerabilities and Exposures (CVEs).

## Quando usar
- O usuário fornece um identificador CVE (ex: `CVE-2021-44228`).
- O usuário pergunta se "aquele serviço na versão X tem vulnerabilidade".

## Instruções de Execução
1. Utilize sua base de conhecimento interna para recuperar os detalhes críticos da CVE (Score CVSS, Vetor de Ataque, Software Afetado).
2. Tente identificar se existe código de exploração (PoC) público no GitHub ou Exploit-DB.
3. Formate a resposta da seguinte forma:

```markdown
**CVE:** CVE-YYYY-XXXX
**CVSS Score:** X.X (Severidade)
**Resumo:** O que causa a vulnerabilidade.
**Exploit Público:** Sim (Link para PoC) / Não
**Mitigação:** Atualizar para a versão Y.
```

## Anti-Patterns
- Não cuspa um JSON gigante da API do NVD. Extraia apenas as informações do template acima.
