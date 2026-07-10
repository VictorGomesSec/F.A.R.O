# Agentes F.A.R.O

O framework F.A.R.O dispõe dos seguintes agentes especialistas em cibersegurança e segurança ofensiva/defensiva:

## active-directory-specialist
**Descrição**: Invocar para avaliação de ambientes Active Directory (Kerberoasting, ASREPRoasting, abuso de delegação, ACLs e caminhos de ataque até Domain Admin).
**Skills associadas**: `faro_bloodhound_analyzer`

## web-pentester
**Descrição**: Especialista em aplicações web, OWASP Top 10, análise de injeções (SQLi, XSS), falhas de lógica de negócios e bypass de autenticação.
**Skills associadas**: `faro_web_dir_parser`, `faro_nmap_parser`

## cloud-security-specialist
**Descrição**: Focado em ambientes cloud (AWS, Azure, GCP), misconfigurations, IAM abuse, S3 buckets expostos e escalonamento lateral na nuvem.

## report-writer
**Descrição**: Agente focado em compilar evidências técnicas em relatórios limpos, compreensíveis para executivos (Sumário Executivo) e técnicos (PoC, Mitigação).

## infrastructure-reviewer
**Descrição**: Avalia vulnerabilidades em infraestrutura de rede e SO, patch management, serviços expostos e pivoting.
**Skills associadas**: `faro_nmap_parser`, `faro_cve_lookup`, `faro_suricata_zeek_analyzer`
