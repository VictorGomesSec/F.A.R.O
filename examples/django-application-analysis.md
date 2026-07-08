# Exemplo: Analisar uma Aplicação Django

## Cenário

Uma equipe quer avaliar a segurança de uma aplicação Django antes de um lançamento em produção, incluindo o backend, a API REST exposta e a configuração de deploy.

## Comando/Workflow Utilizado

`../workflows/code-review.md` combinado com `../workflows/api-assessment.md` (a aplicação expõe uma API REST via Django REST Framework).

## Agentes Engajados

1. `../agents/source-code-auditor.md` — revisa uso de ORM (risco de injeção via `raw()`/`extra()`), templates (risco de XSS se `autoescape` for desabilitado), e configuração de `SECRET_KEY`/`DEBUG` em produção.
2. `../agents/authentication-specialist.md` — revisa configuração de sessão do Django, hashing de senha (`PASSWORD_HASHERS`), e fluxos de login customizados.
3. `../agents/authorization-specialist.md` — revisa uso de `permission_classes` no DRF e possíveis BOLA em `ViewSets` que não filtram queryset por usuário.
4. `../agents/supply-chain-security-specialist.md` — audita `requirements.txt`/`poetry.lock` por dependências vulneráveis.
5. `../agents/devsecops-engineer.md` — revisa pipeline de deploy (`collectstatic`, migrações automáticas, segredos em variáveis de ambiente).

## Achados Típicos Encontrados Neste Tipo de Análise

- `DEBUG = True` acidentalmente habilitado em configuração de produção, expondo stack traces detalhados (CWE-209).
- `ViewSet` do DRF retornando `Model.objects.all()` sem filtrar por usuário autenticado (BOLA, CWE-639).
- Uso de `.raw()` com f-string interpolando input do usuário diretamente na query (SQL Injection, CWE-89).

## Saída

Relatório seguindo `../templates/code-review.md` (achados de código) e `../templates/api-review.md` (achados da API DRF), consolidados por `../agents/report-writer.md`.
