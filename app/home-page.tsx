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
    eyebrow: "PARK JAEWOO / 직접 설계하고 구현하는 AI 시스템 빌더",
    hero: [
      "문제의 본질을 찾습니다.",
      "작동하는 시스템을 만듭니다.",
      "검증 가능한 결과를 남깁니다.",
    ],
    lede:
      "약 4년 동안 AI 서비스의 요구사항 분석부터 설계, 개발, 평가, 배포까지 전 과정을 직접 맡아 왔습니다. 모호한 업무 문제를 권한과 책임이 명확한 에이전트 시스템으로 구체화하고, 제품과 인프라를 실제 환경에 배포하며, 성과는 검증된 근거가 있는 범위에서만 설명합니다.",
    explore: "프로젝트 자세히 보기",
    lifecycleLabel: "AI 시스템 구축 전 과정",
    accountable: "한 사람이 끝까지 책임",
    fullLifecycle: "전 과정 직접 수행",
    lifecycle: [
      ["01", "문제 정의", "업무 문제와 제약 파악"],
      ["02", "설계", "권한 범위, 핵심 결정, 검증 기준"],
      ["03", "구현", "에이전트, 제품, 인프라"],
      ["04", "검증", "품질, 지연 시간, 비용, 실패 조건"],
      ["05", "배포·운영", "운영 안정화, 장애 대응, 개선"],
    ],
    lifecycleNote:
      "요구사항 분석, 아키텍처 설계, 개발, 평가, 배포, 운영 안정화까지 중간에 다른 팀으로 넘기지 않고 직접 수행했습니다.",
    heroMetrics: [
      ["약 4년", "AI 시스템 구축 실무"],
      ["대표 프로젝트 2건", "에이전트 엔지니어링·솔루션 아키텍처"],
      ["전 과정 단독 수행", "요구사항 분석부터 배포까지"],
    ],
    positioningLabel: "핵심 역량",
    positioning:
      "불명확하고 실패 비용이 큰 업무를, 권한 범위가 명확하고 성과를 측정할 수 있으며 현재 운영 수준을 과장하지 않는 AI 시스템으로 구현합니다.",
    maturityLabel: "프로젝트 진행 상태",
    maturity: [
      ["컨설팅 팀 실무 사용 중", "AIOps-PoC", "maturity-live"],
      ["수요 기관과 베타테스트 중", "AI 자동 일상감사 시스템", "maturity-beta"],
      ["2026년 8월 현장 운영 예정", "AI 셰익스피어", "maturity-scheduled"],
    ],
    selected: "주요 시스템 / 2026",
    selectedTitle: "대표 프로젝트 2건과 현장형 제품 1건.",
    selectedBody:
      "AIOps-PoC에서는 에이전트 실행 인프라와 모델 운영 역량을, AI 자동 일상감사 시스템에서는 규제 업무를 위한 솔루션 아키텍처 역량을 확인할 수 있습니다. AI 셰익스피어는 공공 현장에 설치되는 생성형 AI 제품을 설계하고 패키징한 사례이며, 이용 성과는 설치 후 측정할 예정입니다.",
    role: "역할",
    ownership: "담당 범위",
    systemFlow: "시스템 흐름",
    boundary: "검증된 범위",
    fullCase: "프로젝트 자세히 보기",
    repository: "저장소",
    proofEyebrow: "다음 프로젝트에도 재사용할 수 있는 운영 자산",
    proofTitle: "일회성 데모가 아니라 반복해서 쓸 수 있는 기반을 만들었습니다.",
    proof: [
      [
        "명시적인 런타임 계약",
        "에이전트의 제안 범위, 코드가 행사하는 권한, 실제 실행 환경, 종료 상태, 검증 결과를 프롬프트 관례가 아닌 타입 계약으로 정의했습니다.",
      ],
      [
        "평가와 배포 통과 조건",
        "사용자가 실제로 실행할 환경에서 평가하고, 지원하지 않는 입력, 근거 누락, 모델 준비 여부, 운영 전환 조건을 명시적으로 확인합니다.",
      ],
      [
        "검증 및 검토 이력",
        "자료의 출처와 버전, 변경할 수 없는 실행 기록, 사람의 승인, 로컬 운영 상태를 남겨 어떤 결과가 어떻게 나왔고 최종 권한은 누구에게 있었는지 추적할 수 있습니다.",
      ],
      [
        "모델 서빙과 현장 운영",
        "vLLM 기반 모델 서빙과 추론 장애 분석부터 Electron 보안, 패키징, 로컬 저장, 감열 프린터 출력까지 직접 구현하고 운영했습니다.",
      ],
    ],
    rolePathEyebrow: "지원 직무별 추천 프로젝트",
    rolePathTitle: "지원 직무와 가장 맞닿아 있는 프로젝트부터 확인하세요.",
    rolePathBody:
      "세 프로젝트 모두 문제 정의부터 설계, 개발, 평가, 배포까지 직접 수행했습니다. 다만 직무에 따라 먼저 살펴볼 기술적 근거가 다릅니다.",
    approachEyebrow: "구축 원칙",
    approachTitle: "좋은 아키텍처는 책임 소재가 분명한 결정의 연속입니다.",
    principles: [
      [
        "모델의 권한을 제한합니다.",
        "확률적 모델이 만드는 제안과 코드가 행사하는 최종 권한을 분리합니다. 허용된 동작, 상태 전이, 종료 조건을 명시적으로 정의합니다.",
      ],
      [
        "실제 경로를 평가합니다.",
        "사용자가 실제로 이용할 실행 경로를 그대로 검증합니다. 품질, 지연 시간, 비용, 회귀, 실패 조건, 사람의 판단을 함께 기록합니다.",
      ],
      [
        "운영자를 위해 설계합니다.",
        "실행 준비 여부, 변경할 수 없는 검증 기록, 장애 추적, 안전한 설정, 이해하기 쉬운 오류 메시지까지 제품 기능으로 설계합니다.",
      ],
      [
        "비즈니스와 기술을 연결합니다.",
        "이해관계자가 겪는 문제를 구현 가능한 아키텍처로 구체화하고, 기술적 선택이 도입 가능성·위험·사업 가치에 미치는 영향을 설명합니다.",
      ],
    ],
    roles: [
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "규제 업무를 실제 운영 시스템으로",
        href: "/ko/work/audit",
        proof:
          "AI 자동 일상감사 시스템에서는 규정 버전 관리, 양방향 검색, 근거 추적, 근거 부족 시 차단하는 판정 구조, 담당자 최종 승인, 기관 베타테스트까지 확인할 수 있습니다.",
        items: [
          "업무 문제 발굴과 AI 적용 가능성 판단",
          "재사용 가능한 참조 아키텍처",
          "규제·공공 분야 업무 설계",
          "PoC에서 실제 운영까지의 전환 계획",
        ],
      },
      {
        label: "AGENTIC AI ENGINEER",
        title: "에이전트 실행 환경부터 모델 운영까지",
        href: "/ko/work/aiops",
        proof:
          "AIOps-PoC에서는 타입 기반 에이전트 계약, 결정론적 컴파일, 중단·재개 가능한 실행 흐름, 실제 런타임 평가, vLLM 모델 서빙, 장애 원인 분석까지 확인할 수 있습니다.",
        items: [
          "타입으로 정의한 에이전트 상태와 도구 계약",
          "평가 체계와 실패 조건 설계",
          "RAG, 모델 서빙, 추론 최적화",
          "신뢰성, 보안, 관측성",
        ],
      },
    ],
    contactEyebrow: "설계에 그치지 않고 실제로 작동하게 만듭니다",
    contactTitle: ["복잡한 업무를 이해합니다.", "명확한 시스템으로 만듭니다."],
    contactBody:
      "고객의 문제를 이해하는 일부터 아키텍처 설계, 개발, 평가, 배포 성과까지 한 흐름으로 책임질 수 있는 AI Solutions Architect 및 Agentic AI Engineer 직무를 찾고 있습니다.",
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
