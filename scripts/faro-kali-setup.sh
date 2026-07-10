#!/bin/bash
# f.a.r.o-kali-setup.sh
# Script de setup adaptativo para instalar o arsenal de OSINT e Scanning do F.A.R.O no Kali Linux

echo "[*] Iniciando instalacao do arsenal F.A.R.O..."

# Atualiza repositorios
sudo apt update -y

# Instala ferramentas nativas do APT (Nuclei, Sherlock, Feroxbuster, etc)
echo "[*] Instalando ferramentas APT..."
sudo apt install -y nuclei sherlock feroxbuster subfinder amass assetfinder ffuf gobuster nikto sqlmap hydra medusa hashcat john cewl jq curl wget python3-pip pipx

# Atualiza templates do Nuclei
echo "[*] Atualizando templates do Nuclei..."
nuclei -update-templates || true

# Instala ferramentas Python via pipx (para isolamento seguro de dependencias)
echo "[*] Instalando ferramentas via pipx (Holehe, NetExec, BloodHound.py, etc)..."
pipx ensurepath
pipx install holehe
pipx install netexec
pipx install bloodhound
pipx install dalfox

echo "[+] Setup do arsenal F.A.R.O concluido com sucesso no Kali Linux!"
echo "[+] As ferramentas estao prontas para uso via bash (run_command)."
