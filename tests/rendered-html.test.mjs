import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, `${pathname} should render`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("server-renders the evidence-first portfolio home page", async () => {
  const html = await htmlFor("/");

  assert.match(
    html,
    /<title>Jaewoo Park — AI Solutions Architect &amp; Agentic AI Engineer<\/title>/i,
  );
  assert.match(html, /Architect the system\./);
  assert.match(html, /Three systems\. Three distinct stages/);
  assert.match(html, /AIOps-PoC/);
  assert.match(html, /AI Automated Daily Audit/);
  assert.match(html, /AI Shakespeare/);
  assert.match(html, /Institutional beta/);
  assert.match(html, /Field launch scheduled/);
  assert.match(html, /github\.com\/jwoo9928/);
  assert.match(html, /linkedin\.com\/in\/jaewoo9928/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /launch-ready|Three production paths/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders all three deep case studies with explicit evidence states", async () => {
  const cases = [
    ["/work/aiops", /poolside\/Laguna-S-2\.1/],
    ["/work/audit", /Production qualification is blocked/],
    ["/work/shakespeare", /Six-month visitor-record retention is an operator policy/],
  ];

  for (const [pathname, expected] of cases) {
    const html = await htmlFor(pathname);
    assert.match(html, /What is proven, bounded, and still open/);
    assert.match(html, /Confirmed/);
    assert.match(html, /Bounded claim/);
    assert.match(html, /Open measurement/);
    assert.match(html, expected);
  }
});

test("keeps accessibility and social assets in the source contract", async () => {
  const [page, layout, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<SiteNav/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /twitter:/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /\.mobile-nav/);
  assert.doesNotMatch(packageJson, /drizzle/);

  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
