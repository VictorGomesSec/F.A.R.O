# DevSecOps Pipeline Review

## Objetivo

Avaliar a segurança do pipeline CI/CD — gates de segurança, gestão de segredos, isolamento de runners e proveniência de artefatos — antes que ele se torne o vetor de comprometimento da cadeia de entrega.

## Entrada

- Configuração do pipeline (CI/CD) e acesso de leitura ao histórico de execuções recentes.

## Saída

Relatório de achados priorizados por segredo exposto, gate ausente e falta de proveniência.

## Agentes Utilizados

`../agents/devsecops-engineer.md` (principal), `../agents/supply-chain-security-specialist.md`, `../agents/container-security-specialist.md` (se o pipeline builda imagens), `../agents/report-writer.md`.

## Ordem de Execução

1. `devsecops-engineer` mapeia todas as etapas do pipeline, segredos consumidos e permissões de cada etapa.
2. Identificação de segredos expostos em configuração/logs de build.
3. Avaliação de gates de SAST/SCA/DAST existentes e sua calibração de bloqueio.
4. `supply-chain-security-specialist` avalia a proveniência de build e assinatura de artefatos.
5. Se o pipeline builda imagens, `container-security-specialist` avalia a imagem final gerada.
6. `report-writer` consolida achados priorizados por exposição imediata (segredo) sobre lacuna estrutural (gate ausente).

## Checklists

`../rules/secrets-management.md`, `../rules/supply-chain-security.md`, `../rules/git-workflow.md`.

## Artefatos Gerados

`../templates/finding.md`.
