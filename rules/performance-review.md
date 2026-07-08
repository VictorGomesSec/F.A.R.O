# Performance Review (Security Lens)

Critérios de revisão de performance com foco em segurança (não em otimização geral), fonte única para `../agents/performance-engineer.md`.

## Princípios

1. **Toda complexidade não-linear alimentada por input do usuário é suspeita até medida** — regex, parsing recursivo, comparação de estruturas aninhadas devem ter complexidade avaliada contra o tamanho máximo de input aceito.
2. **Nenhum recurso é ilimitado por padrão** — memória, tempo de processamento, tamanho de payload, número de conexões e cota de chamadas a serviços de terceiros têm um limite explícito e testado.
3. **Rate limiting é um controle de segurança, não apenas de capacidade** — deve ser dimensionado considerando abuso intencional, não apenas uso legítimo de pico.
4. **Amplificação de custo é uma classe de risco própria** — avaliar se um request pequeno pode gerar trabalho ou custo desproporcional (processamento, chamadas pagas a terceiros, armazenamento).
5. **Concorrência sob carga não deve degradar consistência** — comportamento sob alta concorrência é testado, não apenas assumido a partir do comportamento sob baixa carga.

## Checklist de revisão

- [ ] Toda operação com complexidade não-linear tem seu input de tamanho máximo validado e testado no limite.
- [ ] Endpoints custosos (upload, geração de relatório, chamadas externas) têm rate limiting dimensionado e testado.
- [ ] Timeouts e limites de memória/payload existem em toda operação que processa dado de tamanho variável controlado pelo usuário.
- [ ] Nenhum endpoint permite amplificação de custo sem limite (ex.: intervalo de data ilimitado, quantidade de itens ilimitada).

## Referências

- CWE-400 (Uncontrolled Resource Consumption), CWE-770 (Allocation of Resources Without Limits or Throttling), CWE-1333 (Inefficient Regular Expression Complexity).
- OWASP API Security Top 10 (API4 Unrestricted Resource Consumption).

## Quem consome esta regra

`performance-engineer`, `api-security-specialist` (rate limiting), `infrastructure-reviewer` (dimensionamento de limites em infraestrutura).
