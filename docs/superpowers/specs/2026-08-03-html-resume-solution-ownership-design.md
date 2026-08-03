# HTML Resume Solution Ownership Design

## Objective

Reframe the English HTML resume around Jaewoo Park's primary differentiator: interviewing institutional stakeholders and internal consultants, structuring ambiguous needs and operating constraints, deriving an appropriate AI solution, and implementing that solution as a working product.

The resume must continue to present him as a hands-on software engineer. It must not imply that he only advises, consults, or produces architecture documents.

## Approved Positioning

The narrative sequence is:

`Stakeholder interview -> Problem definition -> Solution design -> Architecture -> Working product`

The opening message will be:

> Turning stakeholder needs into working AI solutions.

The profile will be:

> Software engineer with approximately four years of experience across mobile, Web3, web, and AI products. I interview institutional stakeholders and internal consultants, translate ambiguous needs and operational constraints into solution requirements, design the appropriate AI architecture, and implement, validate, and deploy the resulting product.

## Page Changes

### Header

Replace the existing operational-constraints tagline with the approved stakeholder-to-solution message.

### Profile

Replace the current delivery-scope paragraph with the approved profile. Keep the total career duration explicitly tied to software engineering, not AI-only experience.

### Evidence Strip

Replace the abstract `In use` card with:

- Value: `Discovery -> Delivery`
- Label: `Stakeholder-led AI solutions`
- Note: `Interview · architecture · implementation`

Keep the audit validation and GPU-serving evidence cards unchanged.

### Seoul AI Foundation Experience

Add this as the first bullet:

> Interview institutional stakeholders and internal consultants to understand workflows, constraints, and success criteria, then translate those findings into AI solution architectures and working products.

Keep the project-specific bullets as implementation evidence. AIOps-PoC consulting adoption remains in its detailed project bullet rather than being reduced to an `In use` headline.

### Technical Scope

Remove the complete `Technical Scope` section. The experience bullets already provide technologies in context, and the standalone inventory weakens the solution-ownership narrative.

### Education

Renumber `Education` from `04` to `03` after removing `Technical Scope`.

## Layout and Responsive Behavior

Preserve the existing US Letter, single-column, ATS-readable structure and existing responsive rules. Do not introduce a new component, visual system, or data abstraction. The first evidence-card value may wrap on narrow screens but must remain readable in print.

## Validation

- Confirm `Technical Scope` and `In use` no longer appear in the resume route.
- Confirm the approved header, profile, evidence-card, and Seoul AI Foundation bullet appear exactly.
- Confirm Education is numbered `03`.
- Run the production build.
- Render or print-check the resume route to ensure the one-page Letter layout does not clip or overlap.
- Preserve all unrelated working-tree changes.

## Out of Scope

- Changes to the portfolio home page or project case studies.
- Changes to the Korean career document.
- New technologies, metrics, or unverified claims.
- Reordering the target roles or changing the resume to a consulting-only profile.
