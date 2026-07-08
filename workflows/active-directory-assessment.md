# Active Directory Assessment

## Objetivo

Mapear e comprovar caminhos de escalonamento de privilégio em um domínio/floresta Active Directory, de um ponto de apoio de baixo privilégio até Domain Admin ou outro objetivo crítico.

## Entrada

- Conta de teste de usuário padrão (sem privilégio elevado) e escopo autorizado do domínio/floresta.
- Objetivo(s) crítico(s) a avaliar (ex.: Domain Admins, contas de serviço específicas).

## Saída

Grafo de caminho de ataque e relatório técnico seguindo `../templates/technical-report.md`.

## Agentes Utilizados

`../agents/active-directory-specialist.md` (principal), `../agents/cloud-security-specialist.md` (se houver sincronização com Entra ID/Azure AD), `../agents/detection-engineer.md` (regras a partir dos achados), `../agents/report-writer.md`.

## Ordem de Execução

1. `active-directory-specialist` realiza enumeração inicial sem credenciais elevadas.
2. Identificação de contas kerberoastable/ASREPRoastable e tentativa de quebra offline dentro do escopo autorizado.
3. Construção do grafo de ACLs/delegação/grupos e identificação dos caminhos mais curtos até o objetivo.
4. Validação mínima de cada salto do caminho, sem ação destrutiva/irreversível.
5. Se o caminho cruza para identidade cloud sincronizada, `cloud-security-specialist` avalia a extensão do risco.
6. `detection-engineer` transforma as técnicas exploradas em regras de detecção.
7. `report-writer` consolida o grafo e os achados em relatório final.

## Checklists

`../rules/architecture-principles.md` (menor privilégio), `../rules/secrets-management.md`.

## Artefatos Gerados

`../templates/technical-report.md`, `../templates/finding.md`.
