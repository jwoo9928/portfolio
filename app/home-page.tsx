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
    eyebrow: "JAEWOO PARK / AI AGENT ENGINEER / AI SOLUTIONS ARCHITECT",
    hero: [
      "Built an agent platform,",
      "a regulated AI system,",
      "and an on-site generative AI product.",
    ],
    lede:
      "Approximately four years building applied AI systems from technical discovery through deployment. AIOps-PoC is used by a consulting team; AI Automated Daily Audit reduced a representative internal review from hours to about five minutes and is now in institutional beta.",
    explore: "View selected work",
    roleSignalLabel: "Role-relevant engineering evidence",
    roleSignalTag: "WHAT I SHIP",
    roleSignals: [
      ["01", "AGENT SYSTEMS", "Typed execution, tools, evaluation"],
      ["02", "MODEL RUNTIME", "vLLM, open models, GPU optimization"],
      ["03", "SOLUTION ARCHITECTURE", "Discovery, regulated workflows, rollout"],
      ["04", "PRODUCT DELIVERY", "Full stack, desktop, physical integration"],
    ],
    roleSignalNote:
      "The case studies show the problem, architecture, code-level decisions, deployment context, and results for each system.",
    heroMetrics: [
      ["In active use", "AIOps-PoC / consulting team"],
      ["Hours → ≈5 min", "Internal audit validation"],
      ["August 2026", "AI Shakespeare field installation"],
    ],
    selected: "SELECTED WORK",
    selectedTitle:
      "Agent infrastructure, public-sector audit, and an on-site cultural product.",
    selectedBody:
      "Each system solves a different operating problem: repeatable AI PoC delivery, source-grounded public-contract review, and a walk-up generative AI experience that ends in a physical printout.",
    role: "Responsibility",
    ownership: "Built",
    systemFlow: "system flow",
    fullCase: "Read case study",
    repository: "Repository",
    demo: "Demo video coming soon",
    proofEyebrow: "TECHNICAL RANGE",
    proofTitle: "Engineering depth across agents, models, evidence, and deployment.",
    proof: [
      [
        "Agent execution & evaluation",
        "AIOps-PoC turns a requirement into a typed runtime graph, compiles it into an executable serving contract, evaluates the same bound flow, and retains human approval.",
      ],
      [
        "Self-hosted model runtime",
        "Open models are served through vLLM across A100 and RTX PRO 6000 Blackwell environments, with NVFP4 and FlashAttention 4 used where the model and hardware support them.",
      ],
      [
        "Evidence-grounded decisions",
        "AI Automated Daily Audit binds decisions to versioned source documents, bidirectional retrieval, accepted evidence, deterministic rules, and authenticated human release.",
      ],
      [
        "Field product delivery",
        "AI Shakespeare combines a secured Electron kiosk, structured generation, local SQLite records, Windows printer integration, and an operator handoff for on-site use.",
      ],
    ],
    rolePathEyebrow: "ROLE FIT",
    rolePathTitle: "Hands-on engineering and customer-facing solution delivery.",
    rolePathBody:
      "The portfolio covers both target roles without separating architecture from implementation. Every claim below links to a system where the work is visible.",
    roles: [
      {
        label: "AI AGENT ENGINEER",
        title: "Agent behavior through production runtime",
        href: "/work/aiops",
        proof:
          "AIOps-PoC demonstrates agent orchestration, deterministic execution boundaries, durable lifecycle state, runtime evaluation, model serving, and readiness gates.",
        items: [
          "Typed agent state, tool, and execution contracts",
          "Evaluation, failure modes, and human feedback",
          "RAG, multimodal runtime, and model serving",
          "GPU-aware inference and deployment controls",
        ],
      },
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "Stakeholder problem through deployed system",
        href: "/work/audit",
        proof:
          "The audit and cultural projects show requirements discovery, workflow redesign, architecture trade-offs, hands-on implementation, stakeholder validation, and operations handoff.",
        items: [
          "Technical discovery and use-case qualification",
          "Reference architecture and integration design",
          "Evaluation criteria, risk, and rollout planning",
          "Technical communication with operators and institutions",
        ],
      },
    ],
    contactEyebrow: "AI AGENT ENGINEER / AI SOLUTIONS ARCHITECT",
    contactTitle: ["Looking for the next", "system worth shipping."],
    contactBody:
      "Interested in roles that combine customer discovery, agent and model engineering, evaluation, and real-world deployment.",
  },
  ko: {
    eyebrow: "PARK JAEWOO / AI AGENT ENGINEER / AI SOLUTIONS ARCHITECT",
    hero: [
      "AI 에이전트 플랫폼,",
      "공공 규제 시스템,",
      "현장 설치형 AI 제품을 구축했습니다.",
    ],
    lede:
      "약 4년간 현업의 요구를 AI 시스템으로 설계하고 배포했습니다. AIOps-PoC는 현재 컨설팅 팀이 사용하고 있으며, AI 자동 일상감사 시스템은 대표적인 내부 실증에서 수 시간 걸리던 검토를 약 5분으로 단축한 뒤 수요 기관과 베타테스트를 진행하고 있습니다.",
    explore: "프로젝트 보기",
    roleSignalLabel: "지원 직무와 연결되는 기술적 근거",
    roleSignalTag: "구축 범위",
    roleSignals: [
      ["01", "에이전트 시스템", "실행 계약, 도구, 평가"],
      ["02", "모델 런타임", "vLLM, 오픈 모델, GPU 최적화"],
      ["03", "솔루션 아키텍처", "요구사항 분석, 규제 업무, 도입"],
      ["04", "제품 구현", "웹·데스크톱·물리 장치 연동"],
    ],
    roleSignalNote:
      "각 프로젝트에서 해결한 문제, 아키텍처, 코드 수준의 결정, 배포 환경, 확인된 결과를 상세히 설명합니다.",
    heroMetrics: [
      ["실무 사용 중", "AIOps-PoC / 컨설팅 팀"],
      ["수 시간 → 약 5분", "일상감사 내부 실증"],
      ["2026년 8월", "AI 셰익스피어 현장 설치"],
    ],
    selected: "SELECTED WORK",
    selectedTitle:
      "에이전트 인프라, 공공계약 감사, 현장 문화 체험을 실제 제품으로 구현했습니다.",
    selectedBody:
      "세 프로젝트는 반복 가능한 AI PoC 구축, 규정과 근거에 기반한 공공계약 검토, 방문자의 이야기를 실물 희곡으로 출력하는 현장 체험이라는 서로 다른 업무 문제를 해결합니다.",
    role: "담당",
    ownership: "구현 범위",
    systemFlow: "시스템 흐름",
    fullCase: "프로젝트 자세히 보기",
    repository: "저장소",
    demo: "데모 영상 준비 중",
    proofEyebrow: "TECHNICAL RANGE",
    proofTitle: "에이전트, 모델, 근거 데이터, 배포 환경까지 직접 다룹니다.",
    proof: [
      [
        "에이전트 실행과 평가",
        "AIOps-PoC는 요구사항을 타입이 정의된 실행 그래프로 바꾸고, 실행 가능한 서빙 계약으로 컴파일하며, 실제로 연결된 흐름을 평가한 뒤 담당자의 승인을 남깁니다.",
      ],
      [
        "자체 모델 서빙",
        "A100과 RTX PRO 6000 Blackwell 환경에서 오픈 모델을 vLLM으로 서빙하며, 모델과 하드웨어가 지원하는 경우 NVFP4와 FlashAttention 4를 적용합니다.",
      ],
      [
        "근거 중심 판정",
        "AI 자동 일상감사 시스템은 규정과 원본 문서의 버전, 양방향 검색 결과, 채택된 근거, 규칙 기반 판정, 인증된 담당자의 최종 승인을 하나의 검토 이력으로 연결합니다.",
      ],
      [
        "현장 제품 구현",
        "AI 셰익스피어는 보안이 적용된 Electron 키오스크, 구조화된 희곡 생성, 로컬 SQLite 기록, Windows 프린터 연동, 운영자 인수인계를 하나의 제품으로 구현했습니다.",
      ],
    ],
    rolePathEyebrow: "ROLE FIT",
    rolePathTitle: "직접 구현하는 엔지니어링과 고객 중심의 솔루션 설계를 함께 수행합니다.",
    rolePathBody:
      "아키텍처와 구현을 별개의 역량으로 나누지 않았습니다. 아래 항목은 모두 실제 프로젝트의 설계와 코드에서 확인할 수 있습니다.",
    roles: [
      {
        label: "AI AGENT ENGINEER",
        title: "에이전트 동작부터 실제 런타임까지",
        href: "/ko/work/aiops",
        proof:
          "AIOps-PoC에서 에이전트 오케스트레이션, 결정론적 실행 경계, 중단·재개 가능한 상태, 런타임 평가, 모델 서빙, 준비 상태 검증을 구현했습니다.",
        items: [
          "타입으로 정의한 에이전트 상태·도구·실행 계약",
          "평가 체계, 실패 조건, 사람의 피드백",
          "RAG, 멀티모달 런타임, 모델 서빙",
          "GPU 환경을 고려한 추론 및 배포 제어",
        ],
      },
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "이해관계자의 요구부터 실제 시스템 도입까지",
        href: "/ko/work/audit",
        proof:
          "일상감사와 문화 체험 프로젝트에서 요구사항 분석, 업무 재설계, 아키텍처 결정, 구현, 이해관계자 검증, 운영 인수인계를 수행했습니다.",
        items: [
          "기술 요구사항 분석과 AI 적용 가능성 판단",
          "참조 아키텍처와 시스템 연동 설계",
          "평가 기준, 위험 관리, 도입 계획",
          "기관 담당자와 운영자를 위한 기술 설명",
        ],
      },
    ],
    contactEyebrow: "AI AGENT ENGINEER / AI SOLUTIONS ARCHITECT",
    contactTitle: ["다음에는 더 어려운 시스템을", "실제로 배포하고 싶습니다."],
    contactBody:
      "고객 요구사항 분석, 에이전트와 모델 엔지니어링, 평가, 실제 환경 배포를 함께 수행하는 직무를 찾고 있습니다.",
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

        <aside className="hero-system" aria-label={copy.roleSignalLabel}>
          <div className="system-topline">
            <span>{copy.roleSignalTag}</span>
            <span className="live-dot">2026</span>
          </div>
          <ol>
            {copy.roleSignals.map(([index, title, detail]) => (
              <li key={title}>
                <span>{index}</span>
                <strong>{title}</strong>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
          <p>{copy.roleSignalNote}</p>
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

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">{copy.selected}</p>
          <h2>{copy.selectedTitle}</h2>
          <p>{copy.selectedBody}</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.theme}`}
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
                <span className="demo-placeholder">{copy.demo}</span>
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
