# Casos de Uso

## Antes de um Lançamento em Produção

`/security-review` ou `../workflows/web-application-assessment.md` — validação abrangente antes de expor uma nova aplicação/feature.

## Durante o Ciclo de Desenvolvimento (contínuo)

`../workflows/secure-sdlc.md` — integração de gates de segurança em cada fase, não apenas auditoria pontual.

## Revisão de uma Pull Request

`/code-review` — foco em vulnerabilidades introduzidas pela mudança específica, não em auditoria completa do repositório.

## Avaliação de Ambiente Cloud/Infraestrutura Existente

`/cloud-review`, `../workflows/infrastructure-assessment.md`, `../workflows/container-assessment.md` — conforme o alvo seja cloud público, infraestrutura on-premises ou containers.

## Validação de Postura contra Ameaça Específica

`../workflows/purple-team-exercise.md` — mede se a detecção existente de fato pega a técnica em questão, não apenas se o controle "deveria" funcionar na teoria.

## Resposta a um Incidente Ativo

`../workflows/incident-response.md` — contenção, investigação forense e erradicação coordenadas.

## Análise de um Artefato Suspeito (binário/malware)

`/reverse` ou `/malware`, conforme o artefato exiba comportamento malicioso confirmado ou ainda não classificado.

## Modelagem de Ameaças de uma Nova Feature (antes de implementar)

`/threat-model` — usar na fase de design, antes que a arquitetura esteja consolidada em código, para que lacunas sejam mais baratas de corrigir.

## Auditoria do Próprio Ambiente Active Directory

`/ad-review` — validar se um comprometimento inicial de baixo privilégio poderia escalar a Domain Admin.

## Planejamento de um Engajamento Complexo/Multi-Domínio

`/planning` — quando o escopo cruza múltiplos domínios (web + cloud + AD, por exemplo) e não está claro qual workflow único cobre tudo; o `chief-security-architect` desenha a sequência antes da execução.

## Manutenção do Próprio Framework

`../agents/framework-maintainer.md` (consistência estrutural) e `../agents/technical-writer.md` (documentação) — usar periodicamente após lotes de novos componentes adicionados.
