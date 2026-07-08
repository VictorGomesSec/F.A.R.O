# TASKS — FARO build checklist

Incremental build order: **agents → rules → commands → workflows → templates → examples → docs → root files → audit**.
Check items off as each stage completes. See canonical file lists in each directory once populated.

## 0. Scaffold
- [x] `git init`
- [x] Directory skeleton (`agents/ commands/ workflows/ rules/ templates/ examples/ docs/`)
- [x] `TASKS.md` (this file)

## 1. agents/ (38 files) — DONE
- [x] Batch A — web-pentester, api-security-specialist, exploit-developer, active-directory-specialist, osint-researcher
- [x] Batch B — reverse-engineer, malware-analyst, digital-forensics-specialist, incident-response-advisor, detection-engineer
- [x] Batch C — cloud-security-specialist, infrastructure-reviewer, container-security-specialist, kubernetes-security-specialist, devsecops-engineer, supply-chain-security-specialist
- [x] Batch D — source-code-auditor, secure-developer, cryptography-reviewer, authentication-specialist, authorization-specialist, logging-specialist
- [x] Batch E — mobile-security-specialist, android-security, ios-security, windows-internals-specialist, linux-security-specialist
- [x] Batch F — ai-security-reviewer, llm-security-specialist, prompt-security-specialist, agent-designer, framework-maintainer
- [x] Batch G — chief-security-architect, threat-modeler, purple-team-advisor, report-writer, technical-writer, performance-engineer

Verified: 38/38 files present in `agents/`.

## 2. rules/ (14 files) — DONE
- [x] secure-coding, owasp-checklist, api-checklist, threat-modeling, prompt-engineering, architecture-principles, git-workflow, documentation-standards, performance-review, logging-standards, secrets-management, dependency-review, supply-chain-security, testing-standards

Verified: 14/14 files present in `rules/`.

## 3. commands/ (19 files) — DONE
- [x] review, security-review, code-review, threat-model, web-pentest, api-review, cloud-review, ad-review, reverse, malware, exploit-dev, detection, report, architecture, refactor, tests, document, research, planning

Verified: 19/19 files present in `commands/`.

## 4. workflows/ (16 files) — DONE
- [x] web-application-assessment, api-assessment, cloud-assessment, active-directory-assessment, container-assessment, infrastructure-assessment, code-review, threat-modeling, malware-analysis, reverse-engineering, incident-response, purple-team-exercise, secure-sdlc, bug-hunting, architecture-review, devsecops-pipeline-review

Verified: 16/16 files present in `workflows/`.

## 5. templates/ (13 files) — DONE
- [x] security-report, executive-report, technical-report, threat-model, risk-register, architecture-review, code-review, api-review, cloud-review, finding, mitigation, poc, executive-summary

Verified: 13/13 files present in `templates/`.

## 6. examples/ (9 files) — DONE
- [x] django-application-analysis, spring-boot-project-analysis, kubernetes-cluster-analysis, active-directory-environment-analysis, elf-binary-analysis, malware-sample-analysis, nodejs-project-analysis, dotnet-project-analysis, go-repository-analysis

Verified: 9/9 files present in `examples/`.

## 7. docs/ (8 files) — DONE
- [x] architecture, installation, creating-agents, creating-commands, creating-workflows, contributing, best-practices, use-cases

Verified: 8/8 files present in `docs/`.

## 8. Root — DONE
- [x] README.md
- [x] CHANGELOG.md (v0.1.0)
- [x] LICENSE (MIT)

## 9. Final audit — DONE
- [x] Broken internal links check — 1 real bug found and fixed (`examples/kubernetes-cluster-analysis.md`: `../agents/secrets-management.md` → `../rules/secrets-management.md`). 2 false positives confirmed intentional (fictional examples in `agents/framework-maintainer.md` and `docs/creating-commands.md`).
- [x] Duplicate-content check — no significant duplication found; agents correctly link to `rules/`.
- [x] Frontmatter validity on all agents/ — 38/38 valid (`name` matches filename, `description` and `tools` present).
- [x] File-count check against canonical lists — 38/19/16/14/13/9/8, all correct.
- [x] Initial commit
