# Prompt Engineering (Security Lens)

Boas práticas de engenharia de prompt e segurança de IA generativa, fonte única para `../agents/prompt-security-specialist.md`, `../agents/llm-security-specialist.md` e `../agents/ai-security-reviewer.md`.

## Princípios de design seguro de prompt/sistema

1. **Separação entre instrução e dado** — o prompt de sistema/instrução nunca deve ser concatenado sem delimitação clara com conteúdo controlado pelo usuário ou por fontes externas (documentos, resultados de busca, respostas de ferramentas).
2. **Fronteira de confiança explícita** — todo conteúdo vindo de fonte externa (web, arquivo, ferramenta, e-mail) é tratado como dado não confiável, nunca como instrução, mesmo que contenha texto formatado como comando.
3. **Menor privilégio de ferramentas** — um agente/assistente só tem acesso às ferramentas/ações estritamente necessárias à sua função; ações irreversíveis exigem confirmação explícita fora do fluxo automatizado.
4. **Validação de saída antes de ação** — antes de executar uma ação com efeito no mundo real (enviar mensagem, modificar dado, comprar algo) a partir de uma decisão do modelo, validar que a decisão está de fato dentro do escopo autorizado pelo usuário.
5. **Detecção de injeção de prompt** — testar sistematicamente se conteúdo externo pode alterar o comportamento do sistema (ex.: instruções escondidas em um documento que o assistente resume).
6. **Log de decisões do agente** — decisões automatizadas relevantes (uso de ferramenta, ação externa) são logadas com o input que as motivou, para auditoria posterior (ver `logging-standards.md`).

## Checklist de revisão de sistema baseado em LLM

- [ ] Prompt de sistema é enviado em canal/campo distinto do input do usuário na API (não concatenado em uma única string sem delimitação).
- [ ] Conteúdo de fontes externas (RAG, ferramentas, web) é explicitamente rotulado como dado, não instrução, no prompt construído.
- [ ] Ações irreversíveis/sensíveis exigem confirmação humana ou segundo fator de validação.
- [ ] Existe teste adversarial de prompt injection direta e indireta antes do deploy (ver `../agents/prompt-security-specialist.md`).
- [ ] Saídas do modelo destinadas a serem executadas como código/comando são validadas/sandboxed antes da execução.

## Referências

- OWASP Top 10 for LLM Applications (Prompt Injection, Insecure Output Handling, Excessive Agency, Sensitive Information Disclosure).
- MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems).
- NIST AI Risk Management Framework (AI RMF 1.0).

## Quem consome esta regra

`prompt-security-specialist`, `llm-security-specialist`, `ai-security-reviewer`, `agent-designer` (ao desenhar novos agentes com acesso a ferramentas).
