# Exemplo: Analisar um Projeto .NET

## Cenário

Uma equipe quer revisar a segurança de uma aplicação ASP.NET Core que expõe uma API interna consumida por outros serviços da organização.

## Comando/Workflow Utilizado

`../workflows/code-review.md` combinado com `../workflows/api-assessment.md`.

## Agentes Engajados

1. `../agents/source-code-auditor.md` — revisa uso de Entity Framework (risco de injeção via `FromSqlRaw` com concatenação), desserialização insegura (`BinaryFormatter` ou `JsonSerializer` com `TypeNameHandling` permissivo), e configuração de `appsettings.json` (segredos, connection strings).
2. `../agents/authentication-specialist.md` — revisa configuração de autenticação (Identity, JWT Bearer, Windows Auth se aplicável) e políticas de senha.
3. `../agents/authorization-specialist.md` — revisa uso de `[Authorize]`/políticas customizadas e se todos os controllers/actions sensíveis têm autorização explícita, não apenas `[Authorize]` genérico.
4. `../agents/supply-chain-security-specialist.md` — audita `.csproj`/`packages.lock.json` por dependências NuGet vulneráveis.
5. `../agents/cryptography-reviewer.md` — engajado se a aplicação implementa criptografia customizada em vez de usar as APIs padrão do `System.Security.Cryptography`.

## Achados Típicos Encontrados Neste Tipo de Análise

- Uso de `BinaryFormatter` para desserializar dados de uma fila de mensagens, permitindo execução remota de código se um atacante controla o conteúdo da mensagem (CWE-502).
- Connection string com credenciais em texto claro em `appsettings.json` versionado no repositório (CWE-798).
- Controller com `[Authorize]` mas sem verificação de propriedade do recurso em uma action que aceita um `id` arbitrário (BOLA, CWE-639).

## Saída

Relatório seguindo `../templates/code-review.md` e `../templates/api-review.md`, consolidado por `../agents/report-writer.md`.
