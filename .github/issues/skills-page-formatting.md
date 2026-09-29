# Issue: `skills/page.tsx` HTML nesting / indentation broken

**Repo:** ai-app
**Severity:** Low (visual/maintainability)
**Status:** Open — fix attempted but reverted due to encoding corruption
**Location:** `app/skills/page.tsx` lines 180–230
**Finding:** `h2` and inner `div` for Software Development Diploma improperly nested; indentation mismatched.
**Fix needed:** Manual/prettier reformat (encoding-safe).
**Agent skills:** sweep-the-class (no systemic class; single instance)
