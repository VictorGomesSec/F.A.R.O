# Cloud Security Baseline (CIS Benchmarks)

Fonte única de baseline de hardening cloud (CIS Benchmarks para AWS/Azure/GCP e princípios do shared responsibility model) usada por `cloud-security-specialist`, `kubernetes-security-specialist` e `infrastructure-reviewer`. Evita que cada agente reescreva a mesma lista de controles de IAM/rede/storage/logging por provedor.

## Shared Responsibility Model

Antes de qualquer achado, classificar explicitamente se o controle ausente é responsabilidade do provedor (infraestrutura física, hypervisor, isolamento de rede física) ou do cliente (IAM, configuração de serviço, dados, criptografia aplicada, patching de workload) — achados só se aplicam ao lado "cliente" da divisão.

## Domínios de controle — cobertura esperada (CIS Benchmarks AWS/Azure/GCP)

1. **IAM** — MFA obrigatório para contas privilegiadas, ausência de credencial estática de longa duração quando role/OIDC federado é viável, política de menor privilégio (nunca `*:*`), rotação de chave de acesso, conta root/global admin sem uso operacional direto.
2. **Storage** — buckets/containers sem acesso público não intencional, criptografia em repouso habilitada (KMS gerenciado pelo cliente quando o dado for sensível), versionamento/soft-delete para dados críticos.
3. **Rede** — security groups/NSGs sem regra `0.0.0.0/0` para portas de administração (22/3389/etc.), segmentação entre camadas (público/aplicação/dados), uso de private endpoints para serviços gerenciados quando disponível.
4. **Logging & Monitoring** — trilha de auditoria (CloudTrail/Activity Log/Cloud Audit Logs) habilitada, imutável e centralizada; alertas configurados para mudança de política IAM, desabilitação de logging, criação de credencial privilegiada.
5. **Criptografia** — dados em trânsito sempre via TLS; chaves gerenciadas via KMS do provedor ou HSM, nunca hardcoded (ver `secrets-management.md`).
6. **Configuração de serviço gerenciado** — bancos de dados/filas/funções sem exposição pública não intencional, versão de runtime sem EOL conhecido.

## Kubernetes (interseção com `kubernetes-security-specialist`)

CIS Kubernetes Benchmark cobre control plane (API server flags, etcd criptografado, RBAC sem `cluster-admin` amplo) e node (kubelet sem anonymous-auth, container runtime hardening) — ver detalhamento operacional em `../agents/kubernetes-security-specialist.md`; esta regra cobre apenas a camada cloud/IAM que hospeda o cluster (ex.: IAM role do node group, exposição do endpoint da API gerenciada).

## Checklist rápido de revisão

- [ ] Toda credencial usada na avaliação é somente leitura (nunca permissão de escrita/alteração real) — ver `../docs/mcp-servers.md` para o mesmo princípio aplicado a MCPs de Fase 3.
- [ ] MFA habilitado em todas as contas com privilégio administrativo ou de billing.
- [ ] Nenhum storage com acesso público não documentado/intencional.
- [ ] Logging de auditoria centralizado, imutável e com retenção adequada à política do cliente.
- [ ] Achado classificado explicitamente como responsabilidade do cliente antes de ser reportado.

## Referências

- CIS Benchmarks (Amazon Web Services Foundations, Microsoft Azure Foundations, Google Cloud Platform Foundation).
- AWS/Azure/GCP Well-Architected Framework — pilar de segurança.
- MITRE ATT&CK Cloud Matrix (ver `mitre-attack-mapping.md`).

## Quem consome esta regra

`cloud-security-specialist`, `kubernetes-security-specialist`, `infrastructure-reviewer`.
