# Supply Chain Security

Princípios de segurança de cadeia de suprimentos de software (processo e proveniência de build), fonte única para `../agents/supply-chain-security-specialist.md` e `../agents/devsecops-engineer.md`. Complementar a `dependency-review.md`, que trata da avaliação de cada dependência individual.

## Princípios

1. **Proveniência verificável de build** — todo artefato publicado deve ser rastreável de forma criptograficamente verificável até o commit e o pipeline que o gerou (nível SLSA apropriado ao risco do projeto).
2. **Builds reproduzíveis e herméticos** — o processo de build não depende de estado externo não versionado (rede não controlada durante build, cache mutável compartilhado sem verificação).
3. **Assinatura de artefatos** — artefatos finais (imagens, pacotes, binários) são assinados, e a verificação da assinatura é obrigatória antes do deploy.
4. **Isolamento de runners/agentes de build** — builds de branches não confiáveis (forks, PRs externos) não têm acesso a segredos de produção.
5. **SBOM publicado junto ao artefato** — permite auditoria e resposta rápida quando uma nova CVE afeta uma dependência já em uso.
6. **Revisão de terceiros além de bibliotecas** — ferramentas de build, plugins de CI e ações de terceiros (ex.: GitHub Actions de terceiros) são tratados com o mesmo rigor de dependências de código.

## Checklist rápido

- [ ] Pipeline gera atestado de proveniência (SLSA) verificável antes do deploy.
- [ ] Artefatos são assinados e a verificação de assinatura é obrigatória, não opcional, no deploy.
- [ ] Builds de contribuições externas (forks/PRs) não têm acesso a segredos de produção.
- [ ] Ações/plugins de terceiros no pipeline são pinados por hash de commit, não por tag mutável.

## Referências

- SLSA (Supply-chain Levels for Software Artifacts).
- NIST SSDF, Executive Order 14028 (integridade de cadeia de suprimentos de software, como referência de contexto regulatório).
- CWE-1357 (Reliance on Insufficiently Trustworthy Component).

## Quem consome esta regra

`supply-chain-security-specialist`, `devsecops-engineer`, `container-security-specialist` (assinatura/proveniência de imagens).
