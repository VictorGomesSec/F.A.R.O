# Template: Proof of Concept (PoC)

Documenta uma prova de conceito reproduzível para um achado, especialmente exploração de vulnerabilidade (`../agents/exploit-developer.md`) ou achados ofensivos web/API.

---

## PoC — {{ID do achado relacionado}}

### Pré-requisitos

{{Ambiente, versão do software/alvo, contas de teste, ferramentas necessárias.}}

### Cadeia de Exploração

{{Passo a passo numerado, do estado inicial até o impacto demonstrado. Para exploits de memória: primitiva → bypass de mitigação → controle de fluxo → payload.}}

1. {{passo 1}}
2. {{passo 2}}
3. {{...}}

### Payload / Comando

```
{{payload exato, request HTTP completo, ou comando usado — o mínimo necessário para reproduzir, sem passos supérfluos}}
```

### Resultado Observado

{{Output/comportamento que confirma o impacto — screenshot referenciado, resposta do servidor, crash dump, etc.}}

### Confiabilidade

{{Determinístico | Probabilístico (% de sucesso observado em N tentativas) | Requer condição de corrida (descrever a janela)}}

### Ambiente de Teste

{{Ferramentas e versões usadas, para reprodutibilidade por outro analista.}}
