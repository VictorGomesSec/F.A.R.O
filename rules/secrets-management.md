# Secrets Management

Regras de tratamento de credenciais/segredos, fonte única para todos os agentes que encontram ou manipulam segredos durante uma análise (`../agents/devsecops-engineer.md`, `../agents/supply-chain-security-specialist.md`, `../agents/osint-researcher.md`, `../agents/authentication-specialist.md`).

## Princípios

1. **Segredo nunca vive em código-fonte, imagem de container ou log** — origem correta é cofre de segredos (vault) ou variável de ambiente injetada em runtime a partir dele.
2. **Rotação, não apenas remoção** — encontrar um segredo exposto exige rotação imediata da credencial real, não apenas remoção do arquivo/commit onde apareceu (o valor antigo permanece potencialmente comprometido).
3. **Escopo mínimo e expiração curta** — preferir credenciais federadas/de curta duração (OIDC, tokens temporários) sobre segredos estáticos de longa duração.
4. **Nenhuma reprodução de segredo real em relatório/documentação** — achados que envolvem segredo expõem apenas localização, tipo e impacto, nunca o valor em texto claro.
5. **Histórico de versionamento não é seguro por remoção** — um segredo commitado permanece no histórico git mesmo após um commit de remoção; tratamento correto exige rotação da credencial e, se necessário, reescrita coordenada do histórico.
6. **Acesso a segredos é auditável** — todo acesso a um segredo em runtime gera log (quem/o quê acessou, quando), sem logar o valor do segredo em si.

## Procedimento ao encontrar um segredo exposto

1. Não reproduzir o valor do segredo em nenhum relatório, chat ou log adicional.
2. Notificar imediatamente o responsável para rotação da credencial real.
3. Verificar se o segredo foi potencialmente usado por terceiros (se sim, escalar para `../agents/incident-response-advisor.md`).
4. Registrar o achado com localização, tipo de segredo e data de descoberta, sem o valor.
5. Se o segredo estava em histórico de git, avaliar com `../agents/devsecops-engineer.md` se reescrita de histórico é necessária e coordenável.

## Referências

- CWE-798 (Use of Hard-coded Credentials), CWE-522 (Insufficiently Protected Credentials).
- NIST SP 800-57 (gestão de chaves criptográficas).

## Quem consome esta regra

`devsecops-engineer`, `supply-chain-security-specialist`, `osint-researcher`, `authentication-specialist`, `incident-response-advisor`.
