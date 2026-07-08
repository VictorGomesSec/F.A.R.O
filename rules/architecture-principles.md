# Architecture Principles

Princípios arquiteturais de segurança agnósticos de stack, fonte única para `../agents/chief-security-architect.md`, `../agents/infrastructure-reviewer.md`, `../agents/cloud-security-specialist.md` e `../agents/secure-developer.md`.

## Princípios

1. **Defesa em profundidade** — nenhum controle único é suficiente; camadas independentes (rede, aplicação, identidade, dado) devem cada uma assumir que as demais podem falhar.
2. **Menor privilégio e menor superfície** — cada componente tem exatamente o acesso necessário à sua função; superfícies não usadas (portas, endpoints, permissões) são removidas, não apenas desabilitadas.
3. **Isolamento de limites de confiança** — componentes com diferentes níveis de confiança (ex.: serviço público vs. serviço interno com acesso a dados sensíveis) são segregados por rede/identidade, não apenas por convenção de código.
4. **Falha segura e degradação previsível** — quando um componente falha, o sistema degrada para o estado mais seguro (nega acesso, não expõe dado), nunca para o estado mais permissivo.
5. **Imutabilidade de infraestrutura** — infraestrutura é provisionada por código versionado e reproduzível; mudanças manuais ad-hoc ("shadow IT" de configuração) são tratadas como risco.
6. **Observabilidade desde o design** — pontos de decisão de segurança (autenticação, autorização, ação privilegiada) são projetados para gerar sinal auditável desde o início, não adicionados depois.
7. **Design para revogação** — credenciais, sessões e acessos são projetados para poderem ser revogados individualmente e rapidamente, sem exigir rotação global.
8. **Simplicidade sobre generalidade prematura** — arquiteturas mais simples têm menor superfície de erro de configuração; complexidade adicional deve se justificar por um requisito real, não por antecipação especulativa.

## Como aplicar

`chief-security-architect` usa estes princípios como lente ao revisar entregas de outros especialistas — um achado técnico correto mas que viola um destes princípios de forma sistêmica deve ser escalado como risco arquitetural, não apenas como item pontual de correção.

## Referências

- NIST SP 800-160 (Systems Security Engineering).
- OWASP Security Design Principles.
- CIS Critical Security Controls (visão de controles em camadas).

## Quem consome esta regra

`chief-security-architect`, `infrastructure-reviewer`, `cloud-security-specialist`, `secure-developer`, `kubernetes-security-specialist`.
