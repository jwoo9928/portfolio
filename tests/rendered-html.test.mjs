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

test("renders the English home page with four projects and accurate career framing", async () => {
  const html = await htmlFor("/");

  assert.match(
    html,
    /Software engineer with approximately four years of experience/,
  );
  assert.doesNotMatch(
    html,
    /four years (building|of experience building) applied AI systems/i,
  );
  assert.match(html, /AIOps-PoC/);
  assert.match(html, /AI Automated Daily Audit/);
  assert.match(html, /AI English Writing Feedback/);
  assert.match(html, /AI Shakespeare/);
  assert.match(html, /Seoul AI Foundation/);
  assert.match(html, /PILAB Technology/);
  assert.match(html, /linkedin\.com\/in\/jaewoo9928/);
  assert.match(html, /href="\/ko"/);
});

test("renders natural Korean copy without mojibake or the incorrect four-year AI claim", async () => {
  const html = await htmlFor("/ko");

  assert.match(html, /약 4년의 소프트웨어 개발 경력/);
  assert.match(html, /기관의 업무 요구사항을 분석해 AI 제품의 구조를 설계/);
  assert.match(html, /AI 영작문 자동 첨삭 서비스/);
  assert.match(html, /서울AI재단/);
  assert.match(html, /복수 니모닉 기반 키 컨트롤러/);
  assert.doesNotMatch(html, /약 4년간 AI/);
  assert.doesNotMatch(html, /�|援ы쁽|\?꾨줈|吏곷Т/);
  assert.match(html, /hreflang="en"/i);
});

test("renders four distinct English case studies with verified project facts", async () => {
  const cases = [
    [
      "/work/aiops",
      [
        /From institutional requirements to an executable AI PoC/,
        /poolside\/Laguna-S-2\.1/,
        /Graph Intent Compiler/,
        /Consulting delivery/,
      ],
    ],
    [
      "/work/audit",
      [
        /source-grounded review system/,
        /Hours → about 5 minutes/,
        /ProofRecord/,
        /Institutional beta/,
      ],
    ],
    [
      "/work/writing",
      [
        /Manual corrections depended on when English teachers were available/,
        /High stipend per correction/,
        /Next\.js/,
        /Jul 2024 – Sep 2024/,
      ],
    ],
    [
      "/work/shakespeare",
      [
        /80 mm thermal receipt/,
        /85-second timeout/,
        /NSIS/,
        /Installation scheduled/,
      ],
    ],
  ];

  for (const [route, expectations] of cases) {
    const html = await htmlFor(route);
    assert.match(html, /Project facts/);
    assert.match(html, /Results &amp; evidence/);
    assert.match(html, /Evidence boundaries/);
    for (const expected of expectations) assert.match(html, expected);
  }
});

test("renders the same verified scope in all four Korean case studies", async () => {
  const cases = [
    [
      "/ko/work/aiops",
      [
        /요구사항 접수/,
        /전문 에이전트 분석/,
        /서빙·Playground 구성/,
        /컨설팅 실사용/,
      ],
    ],
    [
      "/ko/work/audit",
      [/수 시간 → 약 5분/, /수요기관 베타/, /ProofRecord/, /담당자 최종 승인/],
    ],
    [
      "/ko/work/writing",
      [/높은 첨삭 수당/, /일관된 1차 첨삭/, /2024\.07 – 2024\.09/, /Next\.js/],
    ],
    [
      "/ko/work/shakespeare",
      [/80mm/, /85초 제한 시간/, /NSIS/, /2026년 8월 현장 설치 예정/],
    ],
  ];

  for (const [route, expectations] of cases) {
    const html = await htmlFor(route);
    assert.match(html, /프로젝트 정보/);
    assert.match(html, /성과와 검증 범위/);
    assert.match(html, /성과 해석 범위/);
    assert.doesNotMatch(html, /�|援ы쁽|\?꾨줈|吏곷Т/);
    for (const expected of expectations) assert.match(html, expected);
  }
});

test("renders the Korean career document with full career and project evidence", async () => {
  const html = await htmlFor("/ko/career");

  assert.match(html, /한국 지원용 경력기술서/);
  assert.match(html, /약 4년의 소프트웨어 개발/);
  assert.match(html, /서울AI재단/);
  assert.match(html, /ICT Global Internship Program/);
  assert.match(html, /충남대학교/);
  assert.match(html, /PILAB Technology/);
  assert.match(html, /SOLIF/);
  assert.match(html, /NAUEM/);
  assert.match(html, /dangamsoft/);
  assert.match(html, /AIOps-PoC/);
  assert.match(html, /AI 자동 일상감사 시스템/);
  assert.match(html, /AI 영작문 자동 첨삭 서비스/);
  assert.match(html, /AI 셰익스피어/);
  assert.match(html, /복수 니모닉 기반 키 컨트롤러/);
  assert.match(html, /PDF로 저장/);
  assert.doesNotMatch(html, /약 4년간 AI/);
  assert.doesNotMatch(html, /�|援ы쁽|\?꾨줈|吏곷Т/);
});

test("renders the US resume as a concise ATS-readable HTML document", async () => {
  const html = await htmlFor("/resume");

  assert.match(html, /Jaewoo Park/);
  assert.match(html, /AI Agent Engineer/);
  assert.match(html, /approximately four years of experience/);
  assert.match(html, /AIOps-PoC/);
  assert.match(html, /RuntimeGraphIntent/);
  assert.match(html, /Hours → ~5 min/);
  assert.match(html, /8 × A100/);
  assert.match(html, /AI Shakespeare/);
  assert.match(html, /ICT Global Internship Program/);
  assert.match(html, /PILAB Technology/);
  assert.match(html, /multiple mnemonic seed phrases/);
  assert.match(html, /Chungnam National University/);
  assert.match(html, /Download PDF/);
  assert.match(
    html,
    /Jaewoo_Park_AI_Agent_Engineer_Resume_2026\.pdf/,
  );
  assert.doesNotMatch(html, /four years of AI experience/i);
  assert.doesNotMatch(html, /A2A protocol|reinforcement learning|fine-tun/i);
});

test("keeps removed or unverified claims out of published case studies", async () => {
  const pages = await Promise.all([
    htmlFor("/work/aiops"),
    htmlFor("/work/audit"),
    htmlFor("/work/writing"),
    htmlFor("/work/shakespeare"),
  ]);
  const combined = pages.join("\n");

  assert.doesNotMatch(combined, /Laguna incident.*\d+ (seconds|tokens)/i);
  assert.doesNotMatch(combined, /218 ?KB/);
  assert.doesNotMatch(combined, /Edge AI/i);
  assert.doesNotMatch(combined, /automatic six-month deletion is implemented/i);
});

test("publishes real project assets and social metadata", async () => {
  const [layout, home] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    htmlFor("/"),
  ]);

  assert.match(layout, /openGraph:/);
  assert.match(layout, /twitter:/);
  assert.match(home, /property="og:image"/);
  await access(new URL("../public/og.png", import.meta.url));
  await access(
    new URL("../public/projects/aiops-plan-approval.png", import.meta.url),
  );
  await access(
    new URL("../public/projects/ai-shakespeare-title.jpg", import.meta.url),
  );
  await access(
    new URL(
      "../public/resume/Jaewoo_Park_AI_Agent_Engineer_Resume_2026.pdf",
      import.meta.url,
    ),
  );
});

test("keeps readable display line-height, focus states, and mobile navigation", async () => {
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(styles, /:focus-visible/);
  assert.match(styles, /\.mobile-nav/);
  assert.match(styles, /\[lang="ko"\] \.hero-main h1[\s\S]*?line-height:\s*1\.16/);
  assert.match(styles, /\.hero-main h1[\s\S]*?line-height:\s*1\.03/);
  assert.match(styles, /@media \(max-width: 760px\)/);
});

test("keeps the resume on a print-oriented single-column Letter layout", async () => {
  const styles = await readFile(
    new URL("../app/resume/resume-page.module.css", import.meta.url),
    "utf8",
  );

  assert.match(styles, /width:\s*8\.5in/);
  assert.match(styles, /height:\s*11in/);
  assert.match(styles, /size:\s*Letter/);
  assert.match(styles, /@media print/);
  assert.match(styles, /\.experienceList[\s\S]*?display:\s*grid/);
  assert.doesNotMatch(styles, /grid-template-columns:\s*repeat\(2,\s*1fr\).*experienceList/);
});

test("keeps core text colors at WCAG AA contrast", async () => {
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
  const contrast = (first, second) => {
    const a = luminance(tokens[first]);
    const b = luminance(tokens[second]);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  };

  for (const [foreground, background] of [
    ["ink", "paper"],
    ["muted", "paper"],
    ["white", "blue"],
    ["white", "green"],
    ["white", "violet"],
    ["white", "orange"],
  ]) {
    assert.ok(
      contrast(foreground, background) >= 4.5,
      `${foreground} on ${background} should meet WCAG AA`,
    );
  }
});
