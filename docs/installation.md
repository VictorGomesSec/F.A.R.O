# Instalação

## Requisitos

- Um ambiente Claude Code (ou compatível com ECC) capaz de carregar agentes/comandos a partir de arquivos markdown com frontmatter YAML.
- Git (o pacote é distribuído e versionado como repositório).

## Instalação

1. Clonar o repositório:
   ```
   git clone <url-do-repositorio> ecc-security-pack
   ```
2. Apontar seu ambiente ECC/Claude Code para o diretório `agents/` do pacote (ou copiar/linkar os arquivos de `agents/` para o diretório de agentes do seu projeto, conforme a convenção do seu ambiente).
3. Os `commands/` seguem a mesma lógica — disponibilizar os arquivos de `commands/` para o mecanismo de slash-commands do seu ambiente.
4. `rules/`, `workflows/`, `templates/`, `examples/` e `docs/` não precisam ser "instalados" separadamente — são referenciados por link relativo pelos agentes/comandos e podem ser lidos diretamente pelo agente durante a execução.

## Verificação

Depois de instalado, peça ao `chief-security-architect` (ver `../agents/chief-security-architect.md`) para descrever os especialistas disponíveis — se ele conseguir listar os 38 agentes corretamente, a instalação está funcional.

## Atualização

Para atualizar o pacote, sincronize a partir do repositório de origem (`git pull` ou equivalente) e rode uma auditoria de consistência com `../agents/framework-maintainer.md` antes de considerar a atualização concluída, especialmente se você tiver customizações locais.

## Customização Local

Se seu contexto exige agentes adicionais ou regras específicas da organização, adicione-os seguindo as convenções em `creating-agents.md`/`creating-commands.md`/`creating-workflows.md` — evite modificar os arquivos existentes diretamente, para facilitar merges futuros com o repositório de origem.
