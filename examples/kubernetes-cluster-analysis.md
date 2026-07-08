# Exemplo: Analisar um Cluster Kubernetes

## Cenário

Uma organização quer avaliar a segurança de um cluster Kubernetes de produção que hospeda múltiplas cargas de trabalho multi-tenant.

## Comando/Workflow Utilizado

`../workflows/container-assessment.md` combinado com `../workflows/infrastructure-assessment.md`.

## Agentes Engajados

1. `../agents/kubernetes-security-specialist.md` — revisa RBAC (bindings excessivamente permissivos), Network Policies (isolamento entre namespaces/tenants), Pod Security Standards, e configuração de admission controllers.
2. `../agents/container-security-specialist.md` — audita as imagens em execução (camadas, usuário root, capabilities excessivas em `securityContext`).
3. `../agents/linux-security-specialist.md` — avalia hardening dos nós worker subjacentes.
4. `../rules/secrets-management.md` (regra, aplicada por `../agents/kubernetes-security-specialist.md`) — avalia uso de `Secrets` do Kubernetes (que são apenas base64, não criptografados por padrão) vs. integração com cofre externo.
5. `../agents/supply-chain-security-specialist.md` — audita origem e assinatura das imagens usadas nos manifests.

## Achados Típicos Encontrados Neste Tipo de Análise

- `ClusterRoleBinding` concedendo `cluster-admin` a uma service account de uma aplicação que só precisa de acesso de leitura a um namespace específico (violação de menor privilégio).
- Ausência de `NetworkPolicy`, permitindo que qualquer pod em qualquer namespace se comunique livremente com qualquer outro (falha de isolamento multi-tenant).
- Pods executando com `securityContext: { privileged: true }` sem necessidade real, ampliando a superfície de fuga de container para o host.

## Saída

Relatório com achados no formato `../templates/finding.md`, priorizados por exposição cross-tenant e escalonamento de privilégio, consolidados por `../agents/report-writer.md`.
