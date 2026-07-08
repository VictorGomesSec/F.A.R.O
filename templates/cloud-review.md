# Template: Cloud Review

Estrutura de saída de `../workflows/cloud-assessment.md` e `../commands/cloud-review.md`.

---

# Revisão de Ambiente Cloud — {{Conta/Projeto}}

## Escopo

- **Provider**: {{AWS/Azure/GCP}}
- **Conta(s)/Projeto(s)**: {{lista}}
- **Foco da revisão**: {{iam/network/storage/logging/secrets}}

## Achados por Área

### IAM

{{Bloco(s) de `finding.md` — privilégio excessivo, políticas permissivas, ausência de MFA em contas privilegiadas.}}

### Rede

{{Bloco(s) de `finding.md` — exposição pública não intencional, segmentação insuficiente.}}

### Armazenamento

{{Bloco(s) de `finding.md` — buckets/discos com acesso público não intencional, ausência de criptografia em repouso.}}

### Logging e Monitoramento

{{Resumo da avaliação de `../agents/logging-specialist.md` — eventos de IAM/acesso a dado sensível logados.}}

## Priorização

{{Achados ordenados por exposição pública combinada com privilégio, não apenas por severidade isolada.}}
