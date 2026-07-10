# F.A.R.O Commands Quick Reference

### NMAP
- Enumerar portas rapidamente: `nmap -p- --min-rate 1000 -T4 <IP>`
- Scan detalhado TCP: `nmap -sC -sV -p <PORTAS> <IP>`
- Extrair IPs vivos: `nmap -sn -T4 <RDE> -oG - | grep "Up" | awk '{print $2}'`

### Active Directory / SMB
- Kerberoasting (Impacket): `GetUserSPNs.py -request -dc-ip <DC_IP> <DOMAIN>/<USER>:<PASS>`
- ASREPRoasting (Impacket): `GetNPUsers.py -request -dc-ip <DC_IP> -usersfile users.txt <DOMAIN>/`
- Validar Credenciais SMB (NetExec): `nxc smb <TARGET_IPS> -u <USER> -p <PASS> --shares`

### Web Enumeration
- Dirb/Gobuster básico: `gobuster dir -u <URL> -w /usr/share/wordlists/dirb/common.txt -t 50`
- Fuzzing de vhosts (ffuf): `ffuf -w subdomains.txt -u http://<IP> -H "Host: FUZZ.<DOMAIN>"`

### Hash Cracking
- NTLM Hashcat: `hashcat -m 1000 hashes.txt rockyou.txt`
- Kerberoast Hashcat (TGS-REP etype 23): `hashcat -m 13100 hashes.txt rockyou.txt`
