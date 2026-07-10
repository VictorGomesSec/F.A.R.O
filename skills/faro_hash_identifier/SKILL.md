---
name: faro_hash_identifier
description: Skill para identificar assinaturas de hashes (MD5, SHA, NTLM, etc.) e recomendar o comando Hashcat/John correspondente.
---

# faro_hash_identifier

Permite que o agente deduza o tipo de hash rapidamente e estruture o ataque de cracking.

## Quando usar
- O usuário envia uma string hex (ex: `aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0`).
- O usuário pede para crackear um ticket de Kerberos ou hash de banco de dados.

## Instruções de Execução
1. Analise o comprimento (length) da string hexadecimal ou do formato estruturado (ex: `$krb5tgs$23$*`).
2. Compare com padrões comuns:
   - 32 chars HEX: MD5 ou NTLM.
   - 64 chars HEX: SHA-256.
   - Formatos Kerberoasting: Iniciam com `$krb5tgs$23$` ou `$krb5tgs$18$`.
   - Formatos ASREPRoasting: Iniciam com `$krb5asrep$23$`.
3. Retorne o módulo exato do Hashcat (`-m <CODE>`) correspondente e um comando de exemplo com as wordlists recomendadas (ex: `rockyou.txt`).

## Exemplo
```markdown
**Tipo Identificado:** NTLM
**Hashcat Module:** 1000
**Comando Recomendado:** `hashcat -a 0 -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt`
```
