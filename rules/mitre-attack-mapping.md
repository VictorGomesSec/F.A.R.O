# MITRE ATT&CK Mapping

Fonte única de referência ao framework MITRE ATT&CK (Enterprise, e ATLAS para superfícies de IA) usada por qualquer agente que classifique comportamento adversário por tática/técnica. Evita que cada agente ofensivo/defensivo mantenha sua própria lista parcial de táticas — todos citam o mesmo vocabulário e a mesma matriz de referência.

## Como usar esta regra

Todo achado ou IOC/TTP reportado por um agente consumidor deve, quando aplicável, citar `Tática (TAxxxx) → Técnica (Txxxx[.xxx])` no formato oficial do ATT&CK, não uma descrição livre equivalente. Isso permite que `detection-engineer` e `purple-team-advisor` cruzem achados de agentes diferentes sem reconciliação manual de vocabulário.

## Táticas Enterprise e agentes que mais as trabalham

| Tática | Exemplos de técnica | Agente(s) que tipicamente testam/observam |
|---|---|---|
| Reconnaissance (TA0043) | Gather Victim Network Information (T1590), Active Scanning (T1595) | `osint-researcher`, `web-pentester` |
| Initial Access (TA0001) | Phishing (T1566), Exploit Public-Facing Application (T1190), Valid Accounts (T1078) | `web-pentester`, `api-security-specialist`, `exploit-developer` |
| Execution (TA0002) | Command and Scripting Interpreter (T1059), Exploitation for Client Execution (T1203) | `exploit-developer`, `malware-analyst` |
| Persistence (TA0003) | Scheduled Task/Job (T1053), Server Software Component (T1505), Create Account (T1136) | `windows-internals-specialist`, `linux-security-specialist`, `incident-response-advisor` |
| Privilege Escalation (TA0004) | Valid Accounts (T1078), Access Token Manipulation (T1134), Exploitation for Privilege Escalation (T1068) | `windows-internals-specialist`, `linux-security-specialist`, `active-directory-specialist` |
| Defense Evasion (TA0005) | Obfuscated Files or Information (T1027), Impair Defenses (T1562), Masquerading (T1036) | `malware-analyst`, `reverse-engineer`, `detection-engineer` |
| Credential Access (TA0006) | OS Credential Dumping (T1003), Kerberoasting (T1558.003), Brute Force (T1110) | `active-directory-specialist`, `windows-internals-specialist` |
| Discovery (TA0007) | Account Discovery (T1087), Network Service Discovery (T1046), Cloud Service Discovery (T1526) | `active-directory-specialist`, `cloud-security-specialist`, `infrastructure-reviewer` |
| Lateral Movement (TA0008) | Remote Services (T1021), Pass the Hash (T1550.002) | `active-directory-specialist`, `purple-team-advisor` |
| Collection (TA0009) | Data from Cloud Storage (T1530), Data from Local System (T1005) | `digital-forensics-specialist`, `cloud-security-specialist` |
| Command and Control (TA0011) | Application Layer Protocol (T1071), Encrypted Channel (T1573) | `detection-engineer`, `malware-analyst` |
| Exfiltration (TA0010) | Exfiltration Over C2 Channel (T1041), Transfer Data to Cloud Account (T1537) | `digital-forensics-specialist`, `cloud-security-specialist` |
| Impact (TA0040) | Data Encrypted for Impact (T1486), Account Access Removal (T1531) | `incident-response-advisor` |

Cobertura de container/Kubernetes usa a matriz **ATT&CK for Containers** (mesma numeração de táticas, técnicas específicas como T1610 Deploy Container) — consumida por `container-security-specialist`/`kubernetes-security-specialist`. Cobertura de superfícies de IA/LLM usa **MITRE ATLAS** (ex.: AML.T0051 LLM Prompt Injection) — consumida por `ai-security-reviewer`/`llm-security-specialist`/`prompt-security-specialist` (ver também `prompt-engineering.md`).

## Checklist de uso

- [ ] Toda técnica citada usa o ID oficial (`Txxxx` ou `Txxxx.xxx`), não só o nome descritivo.
- [ ] Achados de exercício purple team (`purple-team-advisor`) mapeiam a técnica emulada à detecção correspondente (ou à lacuna, se não detectada).
- [ ] `detection-engineer` referencia esta matriz ao declarar cobertura/gap de regra de detecção.
- [ ] Mobile usa a submatriz **ATT&CK for Mobile** quando aplicável (`mobile-security-specialist`, `android-security`, `ios-security`).

## Referências

- MITRE ATT&CK Enterprise Matrix (attack.mitre.org).
- MITRE ATT&CK for Containers, ATT&CK for Mobile.
- MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems).

## Quem consome esta regra

`detection-engineer`, `windows-internals-specialist`, `malware-analyst`, `active-directory-specialist`, `android-security`, `ios-security`, `cloud-security-specialist`, `container-security-specialist`, `infrastructure-reviewer`, `kubernetes-security-specialist`, `mobile-security-specialist`, `purple-team-advisor`, `reverse-engineer`, `threat-modeler`.
