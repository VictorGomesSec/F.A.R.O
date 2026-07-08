# Exemplo: Analisar um Projeto Spring Boot

## Cenário

Uma equipe de plataforma quer uma revisão de segurança de um microsserviço Spring Boot que expõe endpoints REST e se conecta a um banco relacional e a uma fila de mensagens.

## Comando/Workflow Utilizado

`../workflows/code-review.md` combinado com `../workflows/api-assessment.md`.

## Agentes Engajados

1. `../agents/source-code-auditor.md` — revisa uso de JPA/Hibernate (risco de injeção via `@Query` nativo com concatenação), desserialização insegura em endpoints que aceitam objetos complexos, e configuração de `application.yml` (segredos, actuator endpoints expostos).
2. `../agents/authentication-specialist.md` — revisa configuração do Spring Security (filtros, `SecurityFilterChain`), uso de JWT (validação de assinatura/expiração) se aplicável.
3. `../agents/authorization-specialist.md` — revisa uso de `@PreAuthorize`/`@Secured` e se todos os endpoints sensíveis têm anotação de autorização, não apenas autenticação.
4. `../agents/supply-chain-security-specialist.md` — audita `pom.xml`/`build.gradle` por dependências vulneráveis (histórico relevante de CVEs em bibliotecas do ecossistema Spring).
5. `../agents/devsecops-engineer.md` — revisa se endpoints do Actuator (`/actuator/env`, `/actuator/heapdump`) estão protegidos ou desabilitados em produção.

## Achados Típicos Encontrados Neste Tipo de Análise

- Endpoint `/actuator/env` exposto publicamente, revelando variáveis de ambiente incluindo credenciais de banco (CWE-215).
- Método de repositório customizado com `@Query(value = "... " + userInput, nativeQuery = true)` (SQL Injection, CWE-89).
- Endpoint administrativo protegido apenas por `@PreAuthorize` sem verificação adicional de propriedade do recurso (BFLA, CWE-285).

## Saída

Relatório seguindo `../templates/code-review.md` e `../templates/api-review.md`, consolidados por `../agents/report-writer.md`.
