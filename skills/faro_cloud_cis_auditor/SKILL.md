---
name: faro_cloud_cis_auditor
description: Skill para traduzir ou cruzar achados de ferramentas cloud (Prowler, ScoutSuite) contra o framework CIS Benchmarks.
---

# faro_cloud_cis_auditor

Utilizada para estruturar vulnerabilidades Cloud de acordo com padrões de mercado.

## Quando usar
- Ao analisar relatórios gerados pelo Prowler ou ScoutSuite para AWS, GCP ou Azure.
- Quando o usuário quiser auditar se o S3, IAM ou VPC estão aderentes ao "CIS Foundations Benchmark".

## Instruções de Execução
1. Mapeie o achado da ferramenta (ex: "S3 Bucket Public Read") para a regra CIS correspondente (ex: `CIS AWS 1.2.0 - 2.1.1`).
2. Filtre e apresente primeiro os achados que afetam IAM (Identity and Access Management) e Storage Exposto, que geram risco iminente de escalonamento.
3. Formate a saída como:
```markdown
**Recurso:** arn:aws:s3:::meu-bucket
**Vulnerabilidade:** Acesso de leitura público ativado.
**Referência CIS:** CIS 2.1.1
**Severidade:** Alta
**Comando AWS CLI para mitigação:** `aws s3api put-public-access-block ...`
```
