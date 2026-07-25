# Jaewoo Park — AI Systems Portfolio

Bilingual EN/KO portfolio for a builder-first AI Solutions Architect and
Agentic AI Engineer.

Live site:
[jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site](https://jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site)

- English: `/`
- 한국어: `/ko`

## Case studies

- **AIOps-PoC** — bounded agentic control plane for reusable, evaluated AI PoCs
- **AI Automated Daily Audit** — evidence-grounded Korean public-procurement review
- **AI Shakespeare** — Windows Electron theatre kiosk with receipt printing

Each case study separates:

- implemented architecture;
- operator-confirmed or internally validated outcomes;
- bounded claims that are not independently reproducible yet; and
- open measurements required before stronger production claims.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm audit --omit=dev
```

`npm test` creates the Cloudflare-compatible vinext build and verifies both
languages across the server-rendered home pages, case-study routes, localized
metadata, language alternates, social image, and evidence-boundary language.
