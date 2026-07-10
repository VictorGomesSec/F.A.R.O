---
name: faro_ad_tier_auditor
description: Audita a infraestrutura do Active Directory buscando falhas no modelo de camadas (Tier 0, Tier 1, Tier 2) e contas privilegiadas expostas.
---

# faro_ad_tier_auditor

Esta skill estende as capacidades do `active-directory-specialist`, focando puramente na separação de privilégios (Tiering Model).

## Quando usar
- Para validar se administradores do Domínio (Tier 0) estão logando em workstations de usuários (Tier 2).
- Para encontrar caminhos lógicos que quebram o modelo de segurança da Microsoft (ESAE).

## Instruções de Execução
1. Analise grupos de segurança exportados (`Domain Admins`, `Enterprise Admins`, `Administrators`).
2. Busque se serviços em máquinas Tier 2 estão rodando com contas que pertencem ao Tier 0.
3. Se o input for uma query do BloodHound (ex: `Shortest Path to Domain Admins`), avalie se os nós intermediários do caminho constituem uma quebra de Tier (ex: usuário de helpdesk com reset_password em um Domain Admin).
4. Informe os achados como "Quebra de Tier 0", indicando qual controle preventivo falhou (ex: Authentication Policies / Silos).
