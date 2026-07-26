# Jaewoo Park — AI Systems Portfolio

Bilingual EN/KO portfolio for AI Agent Engineer and AI Solutions Architect roles.

## Projects

- **AIOps-PoC** — reusable Agent Harness for requirement analysis, model composition, execution DAGs, model serving, user validation, evaluation, and reporting
- **AI Automated Daily Audit** — source-grounded public-contract pre-audit review with versioned regulations and authenticated human approval
- **AI English Writing Feedback** — AI-assisted first-pass writing feedback designed around a consistent education workflow
- **AI Shakespeare** — Windows kiosk that turns visitor input into a one-act play and prints it on an 80 mm thermal receipt

English routes start at `/`. Korean routes start at `/ko`.

## Local development

```bash
npm ci
npm run dev
```

## Vercel deployment

The repository uses the standard Next.js build path expected by Vercel.

- Framework preset: `Next.js`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave unset
- Node.js: `22.x`

No production environment variables are required for the portfolio.

## Validation

```bash
npm run build
npm run test
npx eslint app tests
```

`npm run test` creates the Sites-compatible vinext build and verifies all EN/KO pages, project facts, metadata, accessibility rules, and color contrast. `npm run build` is the Vercel production build.

## Current deployment

[jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site](https://jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site)
