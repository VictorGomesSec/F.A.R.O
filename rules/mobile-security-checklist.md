# Mobile Security Checklist (MASVS/MASTG)

Fonte única do checklist OWASP MASVS (Mobile Application Security Verification Standard) e referência ao MASTG (Mobile Application Security Testing Guide) usada por `mobile-security-specialist`, `android-security` e `ios-security`. Evita que cada um reescreva as mesmas categorias MASVS com granularidade divergente.

## Categorias MASVS 2.x — cobertura esperada

1. **MASVS-STORAGE** — dados sensíveis persistidos sem criptografia adequada (SharedPreferences/NSUserDefaults em texto plano, backups incluindo dados sensíveis, keyboard cache, logs). Testado por `android-security`/`ios-security`.
2. **MASVS-CRYPTO** — uso de algoritmo/modo fraco, chave hardcoded, geração de chave sem KDF apropriado. Encaminhar para `cryptography-reviewer` quando envolver primitiva customizada.
3. **MASVS-AUTH** — biometria mal integrada (bypass de `LocalAuthentication`/`BiometricPrompt`), sessão sem expiração, autenticação client-side sem validação server-side equivalente.
4. **MASVS-NETWORK** — certificate pinning ausente/bypassável, TLS mal configurado (aceita self-signed, downgrade), dados sensíveis em texto plano na rede.
5. **MASVS-PLATFORM** — IPC insegura (Intents exportados sem permissão no Android, URL Schemes/Universal Links sem validação no iOS), WebView com JavaScript bridge exposta, permissões excessivas.
6. **MASVS-CODE** — build de debug/release mal configurado, uso de componentes de terceiros vulneráveis (ver `supply-chain-security.md`), validação de input client-side apenas.
7. **MASVS-RESILIENCE** — ausência de detecção de root/jailbreak, anti-tampering, anti-debugging, obfuscação insuficiente em app que manipula segredo/lógica sensível (ex.: app financeiro, DRM).
8. **MASVS-PRIVACY** — coleta de dado pessoal além do declarado, SDKs de terceiros com telemetria não documentada.

## Checklist rápido de revisão

- [ ] Nenhum dado sensível (token, PII, chave) em armazenamento local sem criptografia com chave protegida por Keystore/Keychain.
- [ ] Certificate pinning implementado e não removível via configuração pública do app.
- [ ] Componentes exportados (Android) ou URL Schemes/Universal Links (iOS) validam origem e input antes de agir.
- [ ] Bypass de detecção de root/jailbreak testado com as técnicas documentadas em `../agents/android-security.md`/`../agents/ios-security.md` (não apenas o binário "está presente" a detecção).
- [ ] Toda validação de segurança crítica (preço, saldo, permissão) é reafirmada no backend, nunca confiada só ao client.

## Referências

- OWASP MASVS 2.x (Mobile Application Security Verification Standard).
- OWASP MASTG (Mobile Application Security Testing Guide).
- MITRE ATT&CK for Mobile (ver `mitre-attack-mapping.md`).

## Quem consome esta regra

`mobile-security-specialist`, `android-security`, `ios-security`.
