# Exemplo: Analisar um Repositório Go

## Cenário

Uma equipe quer revisar a segurança de um serviço Go que expõe uma API gRPC/REST interna e lida com concorrência intensiva (goroutines processando requisições em paralelo).

## Comando/Workflow Utilizado

`../workflows/code-review.md` combinado com `../workflows/api-assessment.md`.

## Agentes Engajados

1. `../agents/source-code-auditor.md` — revisa uso de `database/sql` (risco de injeção se houver concatenação em vez de placeholders), uso de `os/exec` com input não sanitizado, e manuseio de erros (padrão idiomático Go de não ignorar `err`).
2. `../agents/authorization-specialist.md` — revisa middlewares de autorização em handlers HTTP/gRPC interceptors e consistência entre eles.
3. `../agents/supply-chain-security-specialist.md` — audita `go.mod`/`go.sum` por dependências vulneráveis e verifica se os hashes em `go.sum` estão sendo validados na build (`GOFLAGS=-mod=readonly` ou equivalente).
4. `../agents/performance-engineer.md` — revisa acesso a recursos compartilhados entre goroutines (mutexes, channels) por race conditions que possam ser exploradas para negação de serviço ou inconsistência de estado explorável.

## Achados Típicos Encontrados Neste Tipo de Análise

- Handler HTTP passa parâmetro de query diretamente para `os/exec.Command` sem validação, permitindo injeção de comando (CWE-78).
- Mapa compartilhado entre goroutines acessado sem mutex, causando race condition que pode ser explorada para corromper estado de sessão sob requisições concorrentes (CWE-362).
- `go.sum` presente mas build configurada sem `-mod=readonly`, permitindo que uma dependência seja silenciosamente atualizada além do esperado.

## Saída

Relatório seguindo `../templates/code-review.md` e `../templates/api-review.md`, consolidado por `../agents/report-writer.md`.
