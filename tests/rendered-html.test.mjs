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
  assert.match(html, /Discover the workflow\./);
  assert.match(html, /Two flagship systems\. One supporting field product/);
  assert.match(html, /ROLE-SPECIFIC READING PATHS/);
  assert.match(html, /REUSABLE OPERATING ASSETS/);
  assert.match(html, /AIOps-PoC/);
  assert.match(html, /AI Automated Daily Audit/);
  assert.match(html, /AI Shakespeare/);
  assert.match(html, /Institutional beta/);
  assert.match(html, /Field launch scheduled/);
  assert.match(html, /github\.com\/jwoo9928/);
  assert.match(html, /linkedin\.com\/in\/jaewoo9928/);
  assert.match(html, /href="\/ko"/);
  assert.match(html, /hreflang="ko"/i);
  assert.match(html, /property="og:image"/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /github\.com\/jwoo9928\/AIOps/);
  assert.doesNotMatch(html, /github\.com\/seoul-ai-foundation\/AI-Drama/);
  assert.doesNotMatch(html, /Demo video placeholder/);
  assert.doesNotMatch(html, /launch-ready|Three production paths/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the Korean home page with locale-aware metadata and navigation", async () => {
  const html = await htmlFor("/ko");

  assert.match(
    html,
    /<title>박재우 — AI 솔루션 아키텍트 &amp; 에이전틱 AI 엔지니어<\/title>/,
  );
  assert.match(html, /<main[^>]+lang="ko"/);
  assert.match(html, /업무를 발견하고\./);
  assert.match(html, /대표 시스템 두 건\. 현장 제품 사례 한 건/);
  assert.match(html, /역할별 읽기 경로/);
  assert.match(html, /재사용 가능한 운영 자산/);
  assert.match(html, /AI 자동 일상감사 시스템/);
  assert.match(html, /AI 셰익스피어/);
  assert.match(html, /href="\/"/);
  assert.match(html, /hreflang="en"/i);
  assert.match(html, /href="[^"]*\/ko"[^>]+rel="canonical"|rel="canonical"[^>]+href="[^"]*\/ko"/i);
});

test("server-renders all three deep case studies with explicit evidence states", async () => {
  const cases = [
    ["/work/aiops", /poolside\/Laguna-S-2\.1/],
    ["/work/audit", /Production qualification is blocked/],
    ["/work/shakespeare", /Six-month visitor-record retention is an operator policy/],
  ];

  for (const [pathname, expected] of cases) {
    const html = await htmlFor(pathname);
    assert.match(html, /Observed results, their proof, and their boundary/);
    assert.match(html, /Confirmed/);
    assert.match(html, /Bounded claim/);
    assert.match(html, /Open measurement/);
    assert.match(html, /Representative workflow/);
    assert.match(html, /Operating constraints/);
    assert.match(html, /IMPLEMENTATION ARTIFACTS/);
    assert.match(html, expected);
  }

  const shakespeare = await htmlFor("/work/shakespeare");
  assert.match(shakespeare, /Session-abandon cancellation is not claimed/);
  assert.match(shakespeare, /physical print outcome is not yet recorded/);
  assert.doesNotMatch(shakespeare, /records request, result, print, satisfaction/);
  assert.doesNotMatch(shakespeare, /cancels abandoned upstream work/);
});

test("does not publish the removed Laguna diagnostic replay", async () => {
  const [english, korean] = await Promise.all([
    htmlFor("/work/aiops"),
    htmlFor("/ko/work/aiops"),
  ]);

  for (const html of [english, korean]) {
    assert.doesNotMatch(html, /86-second|8,192-completion-token|779 completion/);
    assert.doesNotMatch(html, /86초|완료 토큰 8,192|Laguna 장애 재현/);
  }
});

test("server-renders all three Korean case studies with the same evidence boundaries", async () => {
  const cases = [
    ["/ko/work/aiops", /poolside\/Laguna-S-2\.1/],
    ["/ko/work/audit", /프로덕션 검증은 차단 상태/],
    ["/ko/work/shakespeare", /방문자 기록 6개월 보관은 운영 정책/],
  ];

  for (const [pathname, expected] of cases) {
    const html = await htmlFor(pathname);
    assert.match(html, /관찰된 결과, 그 증거, 그리고 증거의 경계/);
    assert.match(html, /검증됨/);
    assert.match(html, /범위 제한 주장/);
    assert.match(html, /측정 예정/);
    assert.match(html, /대표 업무 흐름/);
    assert.match(html, /운영 제약/);
    assert.match(html, /구현 산출물/);
    assert.match(html, /href="\/work\//);
    assert.match(html, expected);
  }
});

test("keeps accessibility and social assets in the source contract", async () => {
  const [homePage, layout, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/home-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(homePage, /<SiteNav/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /twitter:/);
  assert.match(layout, /languages:/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /\.mobile-nav/);
  assert.doesNotMatch(packageJson, /drizzle/);

  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});

test("keeps Korean multiline display type above overlapping line boxes", async () => {
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const selectors = [
    '[lang="ko"] .hero h1',
    '[lang="ko"] .positioning h2',
    '[lang="ko"] .section-heading h2',
    '[lang="ko"] .project-card-header h3',
    '[lang="ko"] .contact h2',
    '[lang="ko"] .case-hero h1',
    '[lang="ko"] .case-section h2',
    '[lang="ko"] .next-case a strong',
  ];

  for (const selector of selectors) {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const block = styles.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`));
    assert.ok(block, `${selector} should have a Korean override`);
    const lineHeight = block[1].match(/line-height:\s*([0-9.]+)/);
    assert.ok(lineHeight, `${selector} should define line-height`);
    assert.ok(
      Number(lineHeight[1]) >= 1.08,
      `${selector} line-height should prevent Hangul overlap`,
    );
  }
});

test("keeps English multiline display type above overlapping line boxes", async () => {
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const selectors = [
    ".hero h1",
    ".positioning h2",
    ".section-heading h2",
    ".project-card-header h3",
    ".contact h2",
    ".case-hero h1",
    ".case-section h2",
    ".next-case a strong",
  ];

  for (const selector of selectors) {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const block = styles.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`));
    assert.ok(block, `${selector} should exist`);
    const lineHeight = block[1].match(/line-height:\s*([0-9.]+)/);
    assert.ok(lineHeight, `${selector} should define line-height`);
    assert.ok(
      Number(lineHeight[1]) >= 1,
      `${selector} line-height should prevent Latin display overlap`,
    );
  }
});

test("keeps the core palette at WCAG AA text contrast", async () => {
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const root = styles.match(/:root\s*\{([^}]+)\}/)?.[1] ?? "";
  const tokens = Object.fromEntries(
    [...root.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)].map((match) => [
      match[1],
      match[2],
    ]),
  );

  const luminance = (hex) => {
    const channels = hex
      .slice(1)
      .match(/../g)
      .map((value) => Number.parseInt(value, 16) / 255)
      .map((value) =>
        value <= 0.04045
          ? value / 12.92
          : ((value + 0.055) / 1.055) ** 2.4,
      );
    return (
      0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
    );
  };
  const contrast = (foreground, background) => {
    const first = luminance(tokens[foreground]);
    const second = luminance(tokens[background]);
    return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
  };

  for (const [foreground, background] of [
    ["ink", "paper"],
    ["muted", "paper"],
    ["cobalt", "paper"],
    ["white", "ink"],
    ["white", "cobalt"],
    ["white", "olive"],
    ["white", "orange"],
  ]) {
    assert.ok(
      contrast(foreground, background) >= 4.5,
      `${foreground} on ${background} should meet WCAG AA`,
    );
  }
});
