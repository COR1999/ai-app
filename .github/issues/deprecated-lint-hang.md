# Issue: Deprecated `next lint` hangs CI

**Repo:** ai-app
**Severity:** Medium (breaks CI on Next.js 16 upgrade)
**Status:** Open — fix in branch `feat/agent-workbench-scan` (`63d6356`)
**Root cause:** `package.json` line 9 uses deprecated `next lint`.
**Fix applied (not merged):** `npx eslint .`
**Verification:** `npx tsc --noEmit` passes; `npm run lint` no longer hangs.
**Agent skills:** agentic-vocabulary, sweep-the-class, capture-lesson
