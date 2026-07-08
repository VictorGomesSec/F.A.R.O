# /cloud-review

## Descrição

Revisão de segurança de ambiente cloud (IAM, redes, armazenamento, serviços gerenciados), invocando `../agents/cloud-security-specialist.md`.

## Parâmetros

- `target` (obrigatório) — conta/projeto/subscription cloud, ou código de infraestrutura como código (Terraform/CloudFormation/Bicep) a revisar.
- `provider` (opcional) — `aws`, `azure`, `gcp`. Detectado automaticamente quando possível a partir do `target`.
- `focus` (opcional) — lista de áreas a priorizar (`iam`, `network`, `storage`, `logging`, `secrets`). Padrão: todas.

## Exemplos

- `/cloud-review target:./infra/terraform provider:aws`
- `/cloud-review target:"conta-produção-azure" focus:iam,storage`

## Saída Esperada

Relatório seguindo `../templates/cloud-review.md`, com achados priorizados por exposição (público vs. interno) e por privilégio (menor privilégio violado). Ver `../workflows/cloud-assessment.md` para o processo completo.
