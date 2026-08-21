# ai-app — cianorourke.com

Portfolio site for Cian O'Rourke, live at [cianorourke.com](https://cianorourke.com).

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and deployed on Vercel.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (runs lint + type checking)
npm run lint
npx tsc --noEmit
```

### Environment variables

The contact form uses EmailJS. Copy the variable names into `.env.local` (values come from your EmailJS dashboard):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Without them the site still builds and deploys — the contact form degrades to a mailto fallback.

## Structure

```
app/                  routes (home, about, skills, projects, contact) + SEO (sitemap, robots, OG image)
components/           Header, Footer, ProjectCard, ProjectModal, Contactform, credential embeds
constants/            single source of truth: personal-info.ts, projects.ts, navigation.ts, ui.ts
hooks/useModal.ts     modal open/close state
lib/project-status.ts shared status badge styles/labels
types/project.ts      Project interface
```

Content lives in `constants/` — to add or edit a project, edit `constants/projects.ts`; the grid, modal, and counts update automatically.

## Deployment

Vercel. The repo-root `vercel.json` in the parent folder builds this directory (`cd ai-app && npm run build`). Every push to `main` deploys; PRs get preview URLs.
