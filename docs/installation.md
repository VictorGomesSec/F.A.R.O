# Instalação

## Requisitos

- Um ambiente Claude Code (ou compatível com ECC) capaz de carregar agentes/comandos a partir de arquivos markdown com frontmatter YAML.
- Git (o pacote é distribuído e versionado como repositório).

## Instalação (como plugin — recomendado)

O FARO é um plugin Claude Code autocontido: seu diretório raiz funciona tanto como marketplace quanto como o único plugin nele listado (`.claude-plugin/marketplace.json` + `plugin.json`).

1. Clonar o repositório:
   ```
   git clone <url-do-repositorio> faro
   ```
2. Dentro de uma sessão do Claude Code, registrar o diretório local como marketplace:
   ```
   /plugin marketplace add /caminho/para/faro
   ```
3. Instalar o plugin a partir desse marketplace:
   ```
   /plugin install faro@F.A.R.O
   ```
4. Ativar as mudanças na sessão atual:
   ```
   /reload-plugins
   ```

Os agentes e comandos passam a ficar namespaced sob o plugin — ex.: `agents/web-pentester.md` é invocado como `@faro:web-pentester`, e comandos como `/faro:web-pentest`.

`rules/`, `workflows/`, `templates/`, `examples/` e `docs/` não são primitivas nativas do Claude Code — continuam sendo material de referência, lido pelos agentes/comandos por link relativo, não "instalado" separadamente.

## Instalação Alternativa (sem empacotar como plugin)

Se preferir não usar o mecanismo de plugin, copie/linke manualmente os arquivos:

1. Copie os arquivos de `agents/` para o diretório de agentes do seu ambiente (ex.: `.claude/agents/` do seu projeto, ou `~/.claude/agents/` para uso global).
2. Copie os arquivos de `commands/` para o diretório de comandos equivalente (`.claude/commands/`).
3. `rules/`, `workflows/`, `templates/`, `examples/` e `docs/` continuam sendo lidos por referência relativa, sem instalação separada.

## Verificação

Depois de instalado, peça ao `chief-security-architect` (ver `../agents/chief-security-architect.md`) para descrever os especialistas disponíveis — se ele conseguir listar os 38 agentes corretamente, a instalação está funcional.

## Atualização

Para atualizar o pacote, sincronize a partir do repositório de origem (`git pull` ou equivalente) e rode uma auditoria de consistência com `../agents/framework-maintainer.md` antes de considerar a atualização concluída, especialmente se você tiver customizações locais.

## Customização Local

Se seu contexto exige agentes adicionais ou regras específicas da organização, adicione-os seguindo as convenções em `creating-agents.md`/`creating-commands.md`/`creating-workflows.md` — evite modificar os arquivos existentes diretamente, para facilitar merges futuros com o repositório de origem.
