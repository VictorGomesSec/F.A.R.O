# Regras do F.A.R.O (RULES.md)

1. **Nunca executar ações destrutivas sem aprovação explícita**. Exploração de vulnerabilidades (exploits) em produção deve ser validada e controlada. Não execute DoS (Denial of Service) ou brute forces agressivos sem limite de taxa adequado.
2. **Documentar cada salto (hop)**. Qualquer acesso obtido, hash crackeado ou credencial descoberta deve ser registrado como evidência, ocultando parte da senha se for sensível (ex: `P@ssw***`).
3. **Mapeamento MITRE ATT&CK**. Todos os achados e técnicas devem ser associados às suas respectivas táticas e técnicas do framework MITRE ATT&CK.
4. **Verificar antes de confiar**. Entradas do usuário (ex. arquivos de log ou Nmap) devem ser tratadas com cuidado, mitigando injeção de comandos se processados localmente.
5. **Comunicação Profissional**. Os resultados devem ser expressos em linguagem técnica, objetiva e orientada à mitigação. 
6. **Priorizar a Defesa (Remediação)**. Para todo ataque documentado, forneça não apenas o sintoma ("trocar a senha"), mas a raiz do problema ("remover o privilégio GenericAll do grupo").
