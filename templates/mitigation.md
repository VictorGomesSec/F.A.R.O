# Template: Mitigation

Documenta o plano de correção de um achado (ou grupo de achados com causa raiz comum). Complementa `finding.md` — um plano de mitigação pode cobrir múltiplos achados.

---

## Mitigação para {{ID(s) do(s) achado(s) relacionado(s)}}

- **Causa raiz comum**: {{descrição da causa raiz, não apenas do sintoma}}
- **Responsável sugerido**: {{time/papel, ex.: "time de plataforma", "squad de pagamentos"}}
- **Prioridade**: {{Imediata | Próximo ciclo | Backlog}}

### Ação de Correção

{{Passo a passo concreto. Se a correção é uma refatoração, referenciar `../commands/refactor.md`.}}

### Ação de Mitigação Temporária (se a correção definitiva não é imediata)

{{Controle compensatório enquanto a correção definitiva não é implementada — ex.: WAF rule, feature flag, rate limit temporário.}}

### Verificação

{{Como confirmar que a correção elimina o achado — idealmente um teste de regressão, ver `../rules/testing-standards.md` e `../commands/tests.md`.}}

### Risco Residual

{{O que permanece de risco após a mitigação, se houver, e se foi formalmente aceito.}}
