# Exemplo: Analisar um Ambiente Active Directory

## Cenário

Uma organização quer validar se um usuário comum, se comprometido via phishing, poderia escalar até Domain Admin dentro do domínio corporativo.

## Comando/Workflow Utilizado

`../workflows/active-directory-assessment.md`.

## Agentes Engajados

1. `../agents/active-directory-specialist.md` — parte de uma conta de usuário padrão, enumera SPNs kerberoastable, ACLs mal configuradas e delegação, construindo o grafo de caminho de ataque até Domain Admins.
2. `../agents/cloud-security-specialist.md` — engajado se o domínio sincroniza identidades com Entra ID/Azure AD, para avaliar se o caminho se estende à nuvem.
3. `../agents/detection-engineer.md` — transforma as técnicas exploradas (Kerberoasting, abuso de ACL) em regras de detecção.
4. `../agents/report-writer.md` — consolida o grafo de ataque e os achados.

## Achados Típicos Encontrados Neste Tipo de Análise

- Conta de serviço com SPN configurado e senha com mais de 5 anos sem rotação, kerberoastable e quebrável offline em minutos.
- ACL `WriteDACL` concedida por engano a um grupo amplo de usuários sobre uma unidade organizacional que contém contas privilegiadas.
- Delegação irrestrita habilitada em um servidor de aplicação legado, permitindo captura de TGT de qualquer usuário que autentique nele.

## Saída

Grafo de caminho de ataque e relatório técnico seguindo `../templates/technical-report.md`, com achados mapeados a MITRE ATT&CK (ex.: T1558.003, T1484).
