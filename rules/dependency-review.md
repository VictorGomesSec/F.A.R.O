# Dependency Review

Critérios de revisão de dependências de terceiros, fonte única para `../agents/supply-chain-security-specialist.md` e `../agents/devsecops-engineer.md`. Complementar a `supply-chain-security.md`, que trata do processo/proveniência de build; esta regra trata da avaliação de cada dependência individual.

## Critérios de avaliação por dependência

1. **Vulnerabilidades conhecidas** — CVEs abertas, severidade e disponibilidade de exploit público.
2. **Manutenção ativa** — frequência de release, tempo de resposta a CVEs reportadas, número de mantenedores.
3. **Superfície de execução** — a dependência roda em runtime de produção ou apenas em build/teste/desenvolvimento (risco proporcional à exposição real).
4. **Permissões/comportamento de instalação** — scripts de pós-instalação com comportamento não declarado (rede, escrita fora do diretório do projeto).
5. **Integridade de distribuição** — pacote é instalado com hash/checksum pinado, não apenas por número de versão semântica.
6. **Risco de nome** — para pacotes internos, verificar se o nome está reservado/registrado no registry público correspondente (mitigar dependency confusion).

## Checklist rápido

- [ ] SBOM gerado e revisado, incluindo dependências transitivas.
- [ ] Nenhuma dependência de produção com CVE crítica/alta e exploit público conhecido sem mitigação.
- [ ] Lockfile presente e versionado; instalação usa hash pinado quando o gerenciador de pacotes suporta.
- [ ] Scripts de instalação de dependências revisados por comportamento inesperado.
- [ ] Nomes de pacotes internos verificados contra disponibilidade em registry público.

## Referências

- OWASP Top 10 A06 (Vulnerable and Outdated Components).
- CWE-1104 (Use of Unmaintained Third Party Components).
- NIST SSDF (Secure Software Development Framework) práticas PW.4.

## Quem consome esta regra

`supply-chain-security-specialist`, `devsecops-engineer`, `source-code-auditor` (ao identificar uso específico de uma API vulnerável de uma dependência).
