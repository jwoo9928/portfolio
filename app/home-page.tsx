import Link from "next/link";
import {
  Arrow,
  Footer,
  type Locale,
  MetricGrid,
  SiteNav,
  StatusBadge,
  SystemMap,
  TechRow,
} from "./components";
import type { Project } from "./portfolio-data";

const homeCopy = {
  en: {
    eyebrow: "JAEWOO PARK / BUILDER-FIRST AI SYSTEMS",
    hero: ["Discover the workflow.", "Build the system.", "Earn the proof."],
    lede:
      "Builder-first AI Solutions Architect and Agentic AI Engineer with approximately four years of end-to-end ownership. I turn ambiguous operating problems into bounded agent systems, ship the product and infrastructure, and keep deployment claims tied to evidence.",
    explore: "Explore case studies",
    lifecycleLabel: "End-to-end delivery lifecycle",
    accountable: "ONE ACCOUNTABLE BUILDER",
    fullLifecycle: "FULL LIFECYCLE",
    lifecycle: [
      ["01", "DISCOVER", "Business problem & constraints"],
      ["02", "ARCHITECT", "Boundaries, decisions & proof"],
      ["03", "BUILD", "Agents, product & infrastructure"],
      ["04", "EVALUATE", "Quality, latency, cost & failure"],
      ["05", "DEPLOY", "Operations, incidents & iteration"],
    ],
    lifecycleNote:
      "Requirements, architecture, code, evaluation, deployment, and operational hardening—owned without a handoff gap.",
    heroMetrics: [
      ["≈4 years", "applied AI delivery"],
      ["2 flagships", "agent engineering + solution architecture"],
      ["Sole owner", "discovery through deployment"],
    ],
    positioningLabel: "Professional positioning",
    positioning:
      "I turn ambiguous, high-stakes workflows into bounded AI systems with explicit authority, measurable proof, and an honest deployment state.",
    maturityLabel: "Portfolio maturity overview",
    maturity: [
      ["Active internal use", "AIOps-PoC", "maturity-live"],
      ["Institutional beta", "AI Automated Daily Audit", "maturity-beta"],
      ["Field launch scheduled", "AI Shakespeare", "maturity-scheduled"],
    ],
    selected: "SELECTED SYSTEMS / 2026",
    selectedTitle: "Two flagship systems. One supporting field product.",
    selectedBody:
      "AIOps-PoC demonstrates agent infrastructure and model operations. AI Automated Daily Audit demonstrates regulated solution architecture. AI Shakespeare adds a compact edge and public-experience case before field results are available.",
    role: "Role",
    ownership: "Ownership",
    systemFlow: "system flow",
    boundary: "Evidence boundary",
    fullCase: "Full case study",
    repository: "Repository",
    proofEyebrow: "REUSABLE OPERATING ASSETS",
    proofTitle: "The work produced systems that can be reused beyond one demo.",
    proof: [
      [
        "Typed runtime contracts",
        "Agent intent, deterministic authority, runtime identity, terminal state, and proof are represented as explicit contracts instead of prompt conventions.",
      ],
      [
        "Evaluation and admission gates",
        "Evaluation is bound to the executable runtime. Unsupported inputs, missing evidence, model readiness, and production qualification remain explicit gates.",
      ],
      [
        "Evidence and review ledgers",
        "Versioned sources, immutable run snapshots, human release, and local operational state preserve what happened and who retained authority.",
      ],
      [
        "Model and edge operations",
        "The portfolio covers direct vLLM serving and inference RCA as well as secured Electron packaging, local persistence, and physical printing.",
      ],
    ],
    rolePathEyebrow: "ROLE-SPECIFIC READING PATHS",
    rolePathTitle: "Start with the evidence closest to the role.",
    rolePathBody:
      "The same builder owned discovery, architecture, code, evaluation, deployment, and operations. The emphasis changes by role.",
    approachEyebrow: "HOW I BUILD",
    approachTitle: "Architecture is a chain of accountable decisions.",
    principles: [
      [
        "Bound the model.",
        "Separate probabilistic proposals from deterministic authority. Make permissions, transitions, and terminal states explicit.",
      ],
      [
        "Evaluate the real path.",
        "Test the runtime contract users execute. Track quality, latency, cost, regressions, failures, and human judgment.",
      ],
      [
        "Design for operators.",
        "Readiness gates, immutable evidence, incident traces, secure configuration, and useful failure messages are product features.",
      ],
      [
        "Translate both ways.",
        "Move from stakeholder pain to executable architecture—and explain technical trade-offs in terms of adoption, risk, and value.",
      ],
    ],
    roles: [
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "Regulated workflow to operating system",
        href: "/work/audit",
        proof:
          "Start with AI Automated Daily Audit: versioned policy, dual retrieval, evidence lineage, fail-closed decisions, authenticated review, and institutional beta.",
        items: [
          "Discovery and use-case qualification",
          "Reusable reference architectures",
          "Regulated and public-sector workflows",
          "PoC-to-production operating plans",
        ],
      },
      {
        label: "AGENTIC AI ENGINEER",
        title: "Agent runtime to model operations",
        href: "/work/aiops",
        proof:
          "Start with AIOps-PoC: typed agent contracts, deterministic compilation, durable lifecycle execution, exact-runtime evaluation, vLLM serving, and incident RCA.",
        items: [
          "Typed agent state and tool contracts",
          "Evaluation and failure-mode design",
          "RAG, model serving, and inference optimization",
          "Reliability, security, and observability",
        ],
      },
    ],
    contactEyebrow: "BUILD SOMETHING THAT HOLDS UP",
    contactTitle: ["Complex workflow.", "Clear system."],
    contactBody:
      "I am interested in AI Solutions Architect and Agentic AI Engineer roles where architecture, code, evaluation, and customer outcomes belong in the same conversation.",
  },
  ko: {
    eyebrow: "PARK JAEWOO / BUILDER-FIRST AI SYSTEMS",
    hero: ["업무를 발견하고.", "시스템을 구축하고.", "증거로 증명합니다."],
    lede:
      "약 4년 경력의 Builder-first AI Solutions Architect이자 Agentic AI Engineer입니다. 모호한 운영 문제를 권한이 제한된 에이전트 시스템으로 바꾸고, 제품과 인프라를 직접 배포하며, 모든 배포 주장을 증거에 연결합니다.",
    explore: "프로젝트 사례 보기",
    lifecycleLabel: "엔드투엔드 전달 생명주기",
    accountable: "한 명의 책임 있는 빌더",
    fullLifecycle: "전체 생명주기",
    lifecycle: [
      ["01", "발굴", "비즈니스 문제와 제약"],
      ["02", "설계", "경계, 의사결정, 증거"],
      ["03", "구현", "에이전트, 제품, 인프라"],
      ["04", "평가", "품질, 지연, 비용, 실패"],
      ["05", "배포", "운영, 장애, 반복 개선"],
    ],
    lifecycleNote:
      "요구사항, 아키텍처, 코드, 평가, 배포, 운영 안정화까지 인수인계 공백 없이 직접 책임졌습니다.",
    heroMetrics: [
      ["약 4년", "응용 AI 구축"],
      ["대표 2건", "Agent Engineering + Solution Architecture"],
      ["단독 책임", "문제 발굴부터 배포까지"],
    ],
    positioningLabel: "전문 역량 포지셔닝",
    positioning:
      "모호하고 중요한 업무 흐름을 명시적인 권한 경계, 측정 가능한 증거, 정직한 배포 상태를 갖춘 AI 시스템으로 전환합니다.",
    maturityLabel: "포트폴리오 성숙도 개요",
    maturity: [
      ["컨설팅 팀 내부 사용 중", "AIOps-PoC", "maturity-live"],
      ["수요 기관 베타테스트", "AI 자동 일상감사 시스템", "maturity-beta"],
      ["현장 출시 예정", "AI 셰익스피어", "maturity-scheduled"],
    ],
    selected: "주요 시스템 / 2026",
    selectedTitle: "대표 시스템 두 건. 현장 제품 사례 한 건.",
    selectedBody:
      "AIOps-PoC는 에이전트 인프라와 모델 운영을, AI 자동 일상감사는 규제 업무 솔루션 아키텍처를 보여줍니다. AI 셰익스피어는 현장 성과가 나오기 전까지 edge·공공 경험을 보완하는 사례입니다.",
    role: "역할",
    ownership: "담당 범위",
    systemFlow: "시스템 흐름",
    boundary: "증거 경계",
    fullCase: "전체 사례 보기",
    repository: "저장소",
    proofEyebrow: "재사용 가능한 운영 자산",
    proofTitle: "한 번의 데모를 넘어 재사용할 수 있는 시스템을 만들었습니다.",
    proof: [
      [
        "타입 기반 런타임 계약",
        "에이전트 의도, 결정론적 권한, 런타임 식별자, 최종 상태, 증거를 프롬프트 관례가 아닌 명시적 계약으로 표현합니다.",
      ],
      [
        "평가와 승인 게이트",
        "평가를 실행 런타임에 연결하고, 미지원 입력, 근거 누락, 모델 준비 상태, 프로덕션 검증을 명시적 게이트로 유지합니다.",
      ],
      [
        "증거와 검토 원장",
        "버전이 있는 원천, 불변 실행 스냅샷, 사람의 승인, 로컬 운영 상태로 무슨 일이 있었고 누가 권한을 가졌는지 보존합니다.",
      ],
      [
        "모델과 Edge 운영",
        "vLLM 직접 서빙과 추론 장애 분석부터 Electron 보안·패키징·로컬 저장·물리 출력까지 다룹니다.",
      ],
    ],
    rolePathEyebrow: "역할별 읽기 경로",
    rolePathTitle: "지원 역할과 가장 가까운 증거부터 확인할 수 있습니다.",
    rolePathBody:
      "문제 발굴, 아키텍처, 코드, 평가, 배포, 운영을 동일한 빌더가 책임했습니다. 역할에 따라 강조점만 달라집니다.",
    approachEyebrow: "구축 원칙",
    approachTitle: "아키텍처는 책임 있는 의사결정의 연쇄입니다.",
    principles: [
      [
        "모델의 권한을 제한합니다.",
        "확률적인 제안과 결정론적인 권한을 분리하고, 권한·전이·종료 상태를 명시합니다.",
      ],
      [
        "실제 경로를 평가합니다.",
        "사용자가 실행하는 런타임 계약을 시험하고 품질, 지연, 비용, 회귀, 실패, 사람의 판단을 추적합니다.",
      ],
      [
        "운영자를 위해 설계합니다.",
        "준비 상태 게이트, 불변 증거, 장애 추적, 안전한 설정, 유용한 실패 메시지도 제품 기능입니다.",
      ],
      [
        "비즈니스와 기술을 연결합니다.",
        "이해관계자의 문제를 실행 가능한 아키텍처로 바꾸고, 기술 선택을 도입·위험·가치의 언어로 설명합니다.",
      ],
    ],
    roles: [
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "규제 업무에서 운영 시스템까지",
        href: "/ko/work/audit",
        proof:
          "AI 자동 일상감사부터 확인: 버전 관리 정책, 이중 검색, 증거 lineage, fail-closed 판정, 인증된 검토, 기관 베타.",
        items: [
          "문제 발굴과 사용 사례 적합성 판단",
          "재사용 가능한 참조 아키텍처",
          "규제·공공 부문 업무 흐름",
          "PoC에서 프로덕션까지의 운영 계획",
        ],
      },
      {
        label: "AGENTIC AI ENGINEER",
        title: "에이전트 런타임에서 모델 운영까지",
        href: "/ko/work/aiops",
        proof:
          "AIOps-PoC부터 확인: 타입 기반 에이전트 계약, 결정론적 컴파일, 지속 가능한 생명주기, 정확한 런타임 평가, vLLM 서빙, 장애 RCA.",
        items: [
          "타입이 있는 에이전트 상태와 도구 계약",
          "평가와 실패 모드 설계",
          "RAG, 모델 서빙, 추론 최적화",
          "신뢰성, 보안, 관측 가능성",
        ],
      },
    ],
    contactEyebrow: "운영을 견디는 시스템을 만듭니다",
    contactTitle: ["복잡한 업무 흐름.", "명확한 시스템."],
    contactBody:
      "아키텍처, 코드, 평가, 고객 성과를 하나의 대화에서 다루는 AI Solutions Architect 및 Agentic AI Engineer 역할을 찾고 있습니다.",
  },
} as const;

export function HomePage({
  locale,
  projects,
}: {
  locale: Locale;
  projects: Project[];
}) {
  const copy = homeCopy[locale];
  const routePrefix = locale === "ko" ? "/ko" : "";

  return (
    <main id="top" lang={locale}>
      <SiteNav locale={locale} alternateHref={locale === "en" ? "/ko" : "/"} />

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.hero[0]}
            <br />
            {copy.hero[1]}
            <br />
            <em>{copy.hero[2]}</em>
          </h1>
          <p className="hero-lede">{copy.lede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {copy.explore} <Arrow />
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/jaewoo9928"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          </div>
        </div>

        <aside className="hero-system" aria-label={copy.lifecycleLabel}>
          <div className="system-topline">
            <span>{copy.accountable}</span>
            <span className="live-dot">{copy.fullLifecycle}</span>
          </div>
          <ol>
            {copy.lifecycle.map(([index, title, detail]) => (
              <li key={title}>
                <span>{index}</span>
                <strong>{title}</strong>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
          <p>{copy.lifecycleNote}</p>
        </aside>

        <dl className="hero-metrics">
          {copy.heroMetrics.map(([value, label]) => (
            <div key={value}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="positioning" aria-label={copy.positioningLabel}>
        <p>BUILDER-FIRST</p>
        <h2>{copy.positioning}</h2>
      </section>

      <section className="maturity-strip" aria-label={copy.maturityLabel}>
        {copy.maturity.map(([status, title, className]) => (
          <div key={title}>
            <span className={`maturity-dot ${className}`} />
            <p>{status}</p>
            <strong>{title}</strong>
          </div>
        ))}
      </section>

      <section className="role-paths" id="tracks">
        <div className="section-heading">
          <p className="eyebrow">{copy.rolePathEyebrow}</p>
          <h2>{copy.rolePathTitle}</h2>
          <p>{copy.rolePathBody}</p>
        </div>
        <div className="role-fit">
          {copy.roles.map((role) => (
            <article key={role.label}>
              <p className="detail-label">{role.label}</p>
              <h3>{role.title}</h3>
              <p className="role-proof">{role.proof}</p>
              <ul>
                {role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={role.href}>
                {copy.fullCase} <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">{copy.selected}</p>
          <h2>{copy.selectedTitle}</h2>
          <p>{copy.selectedBody}</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.theme} ${
                project.portfolioTier.includes("SUPPORTING") ||
                project.portfolioTier.includes("보조")
                  ? "project-supporting"
                  : "project-flagship"
              }`}
              key={project.slug}
            >
              <div className="project-card-top">
                <span className="project-index" aria-hidden="true">
                  {project.index}
                </span>
                <StatusBadge project={project} />
              </div>

              <div className="project-card-header">
                <div className="project-designation">
                  <span>{project.portfolioTier}</span>
                  <strong>{project.portfolioTrack}</strong>
                </div>
                <p className="eyebrow">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-lede">{project.lede}</p>
              </div>

              <MetricGrid metrics={project.metrics} />
              <SystemMap
                items={project.flow}
                label={`${project.title} ${copy.systemFlow}`}
              />

              <div className="ownership-strip">
                <div>
                  <p>{copy.role}</p>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <p>{copy.ownership}</p>
                  <strong>{project.ownership}</strong>
                </div>
              </div>

              <TechRow items={project.technologies} locale={locale} />

              <div className="project-card-footer">
                <div className="evidence-note">
                  <span>{copy.boundary}</span>
                  {project.evidenceBoundary}
                </div>
                <div className="project-links">
                  <Link href={`${routePrefix}/work/${project.slug}`}>
                    {copy.fullCase} <Arrow />
                  </Link>
                  {project.repository && (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      {copy.repository} <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-contract" id="evidence">
        <div className="section-heading inverse">
          <p className="eyebrow">{copy.proofEyebrow}</p>
          <h2>{copy.proofTitle}</h2>
        </div>
        <div className="proof-grid">
          {copy.proof.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-heading inverse">
          <p className="eyebrow">{copy.approachEyebrow}</p>
          <h2>{copy.approachTitle}</h2>
        </div>
        <div className="principles">
          {copy.principles.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">{copy.contactEyebrow}</p>
        <h2>
          {copy.contactTitle[0]}
          <br />
          {copy.contactTitle[1]}
        </h2>
        <p>{copy.contactBody}</p>
        <div className="contact-links">
          <a href="https://github.com/jwoo9928" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/jaewoo9928"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
