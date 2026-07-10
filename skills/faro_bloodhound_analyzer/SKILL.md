---
name: faro_bloodhound_analyzer
description: Skill para processamento e análise de arquivos .json extraídos do BloodHound (SharpHound) para encontrar caminhos de ataque.
---

# faro_bloodhound_analyzer

Esta skill permite ao agente ler arquivos JSON enormes gerados por SharpHound ou AzureHound, focando em buscar nós (usuários/grupos/computadores) com as relações mais interessantes (GenericAll, WriteDacl, AdminTo, MemberOf).

## Quando usar
- O usuário fornecer um arquivo terminando em `.json` do BloodHound (como `users.json`, `computers.json`, `groups.json`).
- Quando solicitado para identificar caminhos curtos de escalonamento para Domain Admin.

## Instruções de Execução
1. Utilize comandos bash nativos (`jq`, `grep`) para filtrar o JSON gigante em vez de tentar ler tudo de uma vez.
2. Identifique os SIDs dos grupos-alvo (como Domain Admins, Enterprise Admins).
3. Busque por "Aces" (Access Control Entries) nos objetos JSON buscando permissões críticas (ex: "GenericAll", "ForceChangePassword").
4. Construa o caminho de ataque informando o Nó de Origem -> Permissão/Relacionamento -> Nó de Destino.

## Exemplo
```bash
# Extrair computadores onde um usuário específico tem AdminTo:
cat computers.json | jq '.data[] | select(.Aces[] | select(.PrincipalSID == "S-1-5-21-XXX-YYY")) | .Properties.name'
```
