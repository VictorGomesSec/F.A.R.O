---
name: web-app-assessment
description: Fluxo de trabalho para avaliação de segurança de aplicações web e APIs.
---

# Workflow: Web Application Assessment

O foco deste fluxo é a identificação de falhas em aplicações e APIs na camada 7.

## Fases

### 1. Descoberta de Superfície (Mapping)
- Executar e processar outputs de fuzzer de diretório com `faro_web_dir_parser` para encontrar endpoints ocultos, `/api/v1/`, arquivos `.bak`, etc.
- Identificar os parâmetros da aplicação (GET, POST, Headers).

### 2. Avaliação de Autenticação e Sessão
- Testar falhas no registro de usuário, reset de senha, e gerenciamento de token JWT (assinatura none, brute force do segredo HMAC).
- Verificar bypass de 2FA.

### 3. Injeções e Execução
- Testar Injeção SQL, NoSQL.
- Cross-Site Scripting (Refletido, Armazenado, DOM).
- Avaliar vulnerabilidades de XML External Entity (XXE) e Server-Side Request Forgery (SSRF).

### 4. Controle de Acesso (IDOR/BOLA)
- Alterar IDs de recursos (ex: `/api/users/123` para `/124`) para validar permissão horizontal e vertical.

### 5. Documentação
- Requerimento obrigatório: Todo achado do Web Pentest deve conter uma PoC em formato HTTP Request ou cURL e deve ser documentado usando `finding.md`.
