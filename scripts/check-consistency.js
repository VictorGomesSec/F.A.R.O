#!/usr/bin/env node
/*
 * Auditoria estrutural do FARO — substitui a verificação manual feita por
 * agents/framework-maintainer.md a cada lote de arquivos.
 *
 * Checa:
 *   1. Todo link relativo (`](../...)`/`](./...)`) em qualquer .md resolve a um arquivo real.
 *   2. Todo agents/*.md tem frontmatter válido (name === slug do arquivo, description e tools presentes).
 *   3. Contagens de arquivo citadas em prosa (README.md, docs/architecture.md) batem com a
 *      contagem real de cada diretório, incluindo a derivação "N agentes do roster" (= total - 1)
 *      usada em agents/chief-security-architect.md.
 *
 * Zero dependências externas. Uso: node scripts/check-consistency.js
 * Exit code 0 = tudo consistente. Exit code 1 = pelo menos um problema encontrado.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
let failures = 0;

function fail(msg) {
  console.error(`  [FALHA] ${msg}`);
  failures += 1;
}

function ok(msg) {
  console.log(`  [OK] ${msg}`);
}

function walk(dir, exts, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, acc);
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      acc.push(full);
    }
  }
  return acc;
}

// --- 1. Links relativos ---
function checkLinks() {
  console.log("\n== 1. Links relativos ==");
  const mdFiles = walk(ROOT, [".md"]);
  const linkRe = /\]\((\.\.?\/[^)#\s]+)\)/g;
  let checked = 0;
  for (const file of mdFiles) {
    // Remove inline code spans (`...`) antes de procurar links — evita falso positivo
    // quando um arquivo descreve a SINTAXE de um link como exemplo dentro de crase
    // (ex.: agents/framework-maintainer.md: "`](../rules/...)`" é ilustrativo, não um link real).
    const content = fs.readFileSync(file, "utf8").replace(/`[^`\n]*`/g, "");
    let m;
    while ((m = linkRe.exec(content)) !== null) {
      checked += 1;
      const target = m[1];
      const resolved = path.normalize(path.join(path.dirname(file), target));
      if (!fs.existsSync(resolved)) {
        fail(`${path.relative(ROOT, file)} → link quebrado: ${target}`);
      }
    }
  }
  if (failures === 0) ok(`${checked} links relativos verificados em ${mdFiles.length} arquivos, nenhum quebrado.`);
}

// --- 2. Frontmatter de agents/*.md ---
function checkFrontmatter() {
  console.log("\n== 2. Frontmatter de agents/*.md ==");
  const agentsDir = path.join(ROOT, "agents");
  const files = fs.readdirSync(agentsDir).filter((f) => f.endsWith(".md"));
  const before = failures;
  for (const f of files) {
    const slug = f.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(agentsDir, f), "utf8");
    if (!content.startsWith("---")) {
      fail(`agents/${f} → sem bloco de frontmatter`);
      continue;
    }
    const end = content.indexOf("\n---", 3);
    const fm = content.slice(3, end);
    const nameMatch = fm.match(/^name:\s*(.+)$/m);
    const hasDescription = /^description:/m.test(fm);
    const hasTools = /^tools:/m.test(fm);
    if (!nameMatch || nameMatch[1].trim() !== slug) {
      fail(`agents/${f} → campo "name" (${nameMatch ? nameMatch[1].trim() : "ausente"}) não bate com o nome do arquivo`);
    }
    if (!hasDescription) fail(`agents/${f} → sem campo "description"`);
    if (!hasTools) fail(`agents/${f} → sem campo "tools"`);
  }
  if (failures === before) ok(`${files.length}/${files.length} agentes com frontmatter válido.`);
}

// --- 3. Contagens de arquivo citadas em prosa ---
function countDirFiles(dirName) {
  return fs.readdirSync(path.join(ROOT, dirName)).filter((f) => f.endsWith(".md")).length;
}

function checkProseCounts() {
  console.log("\n== 3. Contagens de arquivo citadas em prosa ==");
  const before = failures;
  const dirs = {
    agents: countDirFiles("agents"),
    commands: countDirFiles("commands"),
    workflows: countDirFiles("workflows"),
    rules: countDirFiles("rules"),
    templates: countDirFiles("templates"),
    examples: countDirFiles("examples"),
  };

  // padrão: "<N> especialistas" / "<N> comandos" / "<N> processos" / "<N> regras" / "<N> modelos" / "<N> cenários"
  const patterns = [
    { key: "agents", re: /(\d+)\s+especialistas/g },
    { key: "commands", re: /(\d+)\s+comandos/g },
    { key: "workflows", re: /(\d+)\s+process(?:os|o)/g },
    { key: "rules", re: /(\d+)\s+regras/g },
    { key: "templates", re: /(\d+)\s+modelos/g },
    { key: "examples", re: /(\d+)\s+cenários/g },
  ];

  const filesToScan = ["README.md", "docs/architecture.md"];
  for (const relFile of filesToScan) {
    const full = path.join(ROOT, relFile);
    if (!fs.existsSync(full)) continue;
    const content = fs.readFileSync(full, "utf8");
    for (const { key, re } of patterns) {
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(content)) !== null) {
        const claimed = parseInt(m[1], 10);
        if (claimed !== dirs[key]) {
          fail(`${relFile} diz "${m[0]}" mas ${key}/ tem ${dirs[key]} arquivo(s) .md`);
        }
      }
    }
  }

  // derivação: agents/chief-security-architect.md cita "roster de N agentes" = total de agentes - 1 (exclui o próprio orquestrador)
  const csaPath = path.join(ROOT, "agents", "chief-security-architect.md");
  if (fs.existsSync(csaPath)) {
    const content = fs.readFileSync(csaPath, "utf8");
    const rosterRe = /(\d+)\s+agentes/g;
    let m;
    const expected = dirs.agents - 1;
    while ((m = rosterRe.exec(content)) !== null) {
      const claimed = parseInt(m[1], 10);
      if (claimed !== expected) {
        fail(`agents/chief-security-architect.md cita "${m[0]}" mas o roster de especialistas (agents/ menos o próprio orquestrador) é ${expected}`);
      }
    }
  }

  if (failures === before) ok("Todas as contagens em prosa (README.md, docs/architecture.md, chief-security-architect.md) batem com o estado real dos diretórios.");
}

checkLinks();
checkFrontmatter();
checkProseCounts();

console.log(`\n${failures === 0 ? "✅ Nenhuma inconsistência encontrada." : `❌ ${failures} inconsistência(s) encontrada(s).`}`);
process.exit(failures === 0 ? 0 : 1);
