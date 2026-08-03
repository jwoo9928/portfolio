# HTML Resume Solution Ownership Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the English HTML resume around stakeholder discovery, AI solution design, and hands-on implementation while removing the standalone Technical Scope section.

**Architecture:** Keep the existing `/resume` route, component structure, and CSS. Make copy-only changes in `app/resume/page.tsx`, add rendered-HTML regression assertions in the existing Node test file, then validate the existing US Letter print layout without introducing new components or dependencies.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Modules, Node test runner, vinext build

## Global Constraints

- Preserve the existing US Letter, single-column, ATS-readable structure and responsive rules.
- Keep approximately four years tied to total software engineering experience, not AI-only experience.
- Name both institutional stakeholders and internal consultants as interview participants.
- Preserve verified project facts and metrics; add no new technologies or unverified claims.
- Remove the complete `Technical Scope` section and renumber Education to `03`.
- Preserve unrelated working-tree changes.

---

### Task 1: Resume Narrative and Regression Coverage

**Files:**
- Modify: `tests/rendered-html.test.mjs`
- Modify: `app/resume/page.tsx`

**Interfaces:**
- Consumes: `htmlFor("/resume")` from the existing rendered HTML test harness.
- Produces: `/resume` HTML containing the approved solution-ownership copy and excluding `Technical Scope` and `In use`.

- [x] **Step 1: Add failing assertions for the approved resume contract**

Add these assertions inside `renders the US resume as a concise ATS-readable HTML document`:

```js
assert.match(html, /Turning stakeholder needs into working AI solutions\./);
assert.match(
  html,
  /I interview institutional stakeholders and internal consultants/,
);
assert.match(html, /Discovery → Delivery/);
assert.match(html, /Stakeholder-led AI solutions/);
assert.match(
  html,
  /Interview institutional stakeholders and internal consultants to understand workflows, constraints, and success criteria/,
);
assert.match(html, /<span>03<\/span>Education/);
assert.doesNotMatch(html, /Technical Scope/);
assert.doesNotMatch(html, />In use</);
```

- [x] **Step 2: Run the test to verify the old resume fails the new contract**

Run:

```powershell
npm run build:sites
node --test --test-name-pattern "US resume" tests/rendered-html.test.mjs
```

Expected: FAIL because the approved positioning, profile, signal, and first Seoul AI Foundation bullet are absent.

- [x] **Step 3: Apply the approved resume copy and remove Technical Scope**

In `app/resume/page.tsx`:

1. Replace the first `deliverySignals` item with:

```tsx
{
  value: "Discovery → Delivery",
  label: "Stakeholder-led AI solutions",
  note: "Interview · architecture · implementation",
},
```

2. Replace the `positioning` copy with:

```tsx
Turning stakeholder needs into working AI solutions.
```

3. Replace the Profile paragraph with:

```tsx
Software engineer with approximately four years of experience across
mobile, Web3, web, and AI products. I interview institutional
stakeholders and internal consultants, translate ambiguous needs and
operational constraints into solution requirements, design the
appropriate AI architecture, and implement, validate, and deploy the
resulting product.
```

4. Add the following as the first bullet under Seoul AI Foundation:

```tsx
<li>
  Interview institutional stakeholders and internal consultants to
  understand workflows, constraints, and success criteria, then
  translate those findings into AI solution architectures and working
  products.
</li>
```

5. Delete the complete section whose title is `Technical Scope`.
6. Change the Education section index from `04` to `03`.

- [x] **Step 4: Run the focused regression test**

Run:

```powershell
npm run build:sites
node --test --test-name-pattern "US resume" tests/rendered-html.test.mjs
```

Expected: PASS.

- [x] **Step 5: Commit the tested narrative change**

```powershell
git add -- app/resume/page.tsx tests/rendered-html.test.mjs
git commit -m "Refocus resume on solution ownership"
```

### Task 2: Production and Print Validation

**Files:**
- Verify: `app/resume/page.tsx`
- Verify: `app/resume/resume-page.module.css`
- Verify: `dist/client/resume/index.html`

**Interfaces:**
- Consumes: the updated `/resume` route from Task 1.
- Produces: a build-verified, one-page US Letter resume with no clipped or overlapping content.

- [x] **Step 1: Run the complete site test suite**

Run:

```powershell
npm test
```

Expected: all rendered HTML and layout contract tests pass.

- [x] **Step 2: Run the Next.js production build**

Run:

```powershell
npm run build
```

Expected: build completes successfully and includes `/resume`.

- [x] **Step 3: Verify generated HTML exclusions and approved copy**

Run:

```powershell
rg -n "Turning stakeholder needs|Discovery → Delivery|Stakeholder-led AI solutions|institutional stakeholders|Technical Scope|>In use<" dist/client/resume/index.html
```

Expected: approved copy is present; `Technical Scope` and `>In use<` are absent.

- [x] **Step 4: Print the resume route to PDF and render it for visual inspection**

Start the existing production server, print `/resume` with headless Edge using the route's Letter print CSS, and render the PDF page to PNG with Poppler.

Expected:

- exactly one US Letter page;
- no clipped sections or footer text;
- no text overlap;
- readable top evidence strip;
- Education numbered `03`.

- [x] **Step 5: Report verified completion**

Report the exact copy changes, removed section, test/build results, and print-layout result. Do not claim deployment unless it was explicitly performed.
