# AGENTS.md — ai-app (cianorourke.com)

## What This Is

Personal portfolio site for Cian O'Rourke. Static Next.js 15 (App Router) site
deployed on Vercel. No database, no API routes, no server-side data fetching.

## Where Content Lives

All site content is in `constants/`:
- `personal-info.ts` — name, role, stats, social links, site metadata
- `projects.ts` — all project entries (add/edit here)
- `navigation.ts` — nav links
- `skills.ts` — technical skills data

To add a project: add an object to `projects.ts` matching the `Project` type
in `types/project.ts`. The grid, modal, and counts update automatically.

## Architecture

```
app/                  Next.js App Router pages
components/           Header, Footer, ProjectCard, ProjectModal, ProjectsBrowser,
                      ContactForm, CredlyBadge, CertificateEmbed
constants/            Content data (projects, personal info, navigation, skills)
hooks/useModal.ts     Generic modal state hook
lib/project-status.ts Status-to-CSS-class mapping
types/project.ts      Project interface
```

## Color System

Use semantic Tailwind tokens from `tailwind.config.js`:
- `primary` (charcoal #202c39) — main text, backgrounds
- `secondary` (sandy #f29559) — accents, buttons, highlights
- `accent` (buff #f2d492) — decorative accents
- `neutral` (sage #b8b08d) — muted text, borders

Do NOT use raw Tailwind colors (e.g., `gray-50`). Use semantic tokens instead:
- `bg-background-secondary` instead of `bg-gray-50`
- `text-text-primary` instead of `text-gray-900`
- `border-neutral/30` instead of `border-gray-200`

## Security

Security headers (CSP, HSTS, X-Frame-Options) are configured in `next.config.js`.
If you add external resources (scripts, images, fonts, stylesheets), you MUST
update the Content-Security-Policy header in `next.config.js` to allow the new
domain.

## External Integrations

- **EmailJS** (`@emailjs/browser`): Client-side contact form via `ContactForm.tsx`.
  Degrades to mailto link when `NEXT_PUBLIC_EMAILJS_*` env vars are missing.
  Don't convert to server-side.
- **Credly**: Badge embeds in `CredlyBadge.tsx` inject external JS from
  `cdn.credly.com`. This is intentional. Don't refactor the script injection.
- **Accredible**: Certificate images loaded from `api.accritical.com` via
  `CertificateEmbed.tsx`.

## How to Verify Changes

1. `npm test` — run Vitest tests
2. `npx tsc --noEmit` — type check
3. `npm run lint` — ESLint
4. `npm run build` — production build (includes type check + lint)

## Agent Workbench Skills

This project uses [Agent Workbench](https://github.com/COR1999/Agent-Workbench)
skills installed globally at `~/.claude/skills/`. They are available to any agent
working on this repo. Use them proactively when the trigger condition matches:

| Skill | When to use |
|---|---|
| `sweep-the-class` | After fixing a bug — check if the same defect exists elsewhere |
| `capture-lesson` | When something surprises you or costs you time — write a lesson |
| `grilling` | Before implementation — stress-test a plan or decision |
| `deslop` | After writing generated code — clean up AI noise before committing |
| `tdd` | Before creating a new test file — read the methodology first |
| `handoff` | When context is getting long — wrap up and hand off to next session |
| `explain-and-open-pr` | When changes are done — create a PR with a plain-English explanation |
| `design-handbook` | When asked to design/redesign UI — produce a visual handbook first |
| `agentic-vocabulary` | When an agentic-coding term is unclear — look up the definition |

## Key Files

- `types/project.ts` — Project interface with status union type
- `next.config.js` — security headers, image remote patterns (CommonJS)
- `tailwind.config.js` — color palette
- `constants/projects.ts` — all project data
- `constants/skills.ts` — skills grid data

## Don't Do

- Don't use raw Tailwind color classes (`gray-*`, `slate-*`) — use semantic tokens
- Don't add external scripts/resources without updating CSP in `next.config.js`
- Don't convert the contact form to server-side without understanding EmailJS degradation
- Don't add comments that restate the JSX
- Don't use `module.exports` in new files — use ESM (`export`/`import`)
