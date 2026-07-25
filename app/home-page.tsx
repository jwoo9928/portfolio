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
    hero: ["Architect the system.", "Ship the code.", "Prove it can operate."],
    lede:
      "Builder-first AI Solutions Architect and Agentic AI Engineer with approximately four years of end-to-end ownership—from discovery and architecture to model serving, evaluation, deployment, and field hardening.",
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
      ["≈4 years", "building applied AI systems"],
      ["3 systems", "active use, institutional beta, and scheduled field launch"],
      ["Full lifecycle", "discovery through deployment"],
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
    selectedTitle: "Three systems. Three distinct stages of operational proof.",
    selectedBody:
      "Each case separates implemented architecture, operator-confirmed use, bounded claims, and measurements that remain open.",
    role: "Role",
    ownership: "Ownership",
    systemFlow: "system flow",
    boundary: "Evidence boundary",
    fullCase: "Full case study",
    repository: "Repository",
    proofEyebrow: "THE EVIDENCE CONTRACT",
    proofTitle: "A portfolio claim should expose its proof and its boundary.",
    proof: [
      [
        "Architecture artifact",
        "Show the real runtime path, authority split, state transitions, and operational dependencies—not a generic agent loop.",
      ],
      [
        "Evaluation unit",
        "Define the dataset, baseline, sample size, metric, distribution, and human judgment behind every performance claim.",
      ],
      [
        "Deployment state",
        "Separate implemented, internally validated, beta, field-ready, and production-qualified states.",
      ],
      [
        "Open measurement",
        "Name what is not yet proven. A visible evidence boundary is a reliability feature, not a disclaimer.",
      ],
    ],
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
        title: "Business problem to operating system",
        items: [
          "Discovery and use-case qualification",
          "Reusable reference architectures",
          "Regulated and public-sector workflows",
          "PoC-to-production operating plans",
        ],
      },
      {
        label: "AGENTIC AI ENGINEER",
        title: "Deep systems work",
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
    contactNote:
      "Résumé and direct email CTA will be added when the public assets are provided.",
  },
  ko: {
    eyebrow: "PARK JAEWOO / BUILDER-FIRST AI SYSTEMS",
    hero: ["시스템을 설계하고.", "코드를 배포하고.", "운영 가능성을 증명합니다."],
    lede:
      "약 4년 경력의 Builder-first AI Solutions Architect이자 Agentic AI Engineer입니다. 요구사항 발굴과 아키텍처부터 모델 서빙, 평가, 배포, 현장 안정화까지 전 과정을 책임집니다.",
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
      ["약 4년", "응용 AI 시스템 구축"],
      ["3개 시스템", "내부 사용, 기관 베타, 현장 출시 예정"],
      ["전체 생명주기", "문제 발굴부터 배포까지"],
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
    selectedTitle: "세 개의 시스템. 서로 다른 세 단계의 운영 증거.",
    selectedBody:
      "각 사례는 구현된 아키텍처, 운영자 확인 사용, 범위가 제한된 주장, 아직 측정할 항목을 구분합니다.",
    role: "역할",
    ownership: "담당 범위",
    systemFlow: "시스템 흐름",
    boundary: "증거 경계",
    fullCase: "전체 사례 보기",
    repository: "저장소",
    proofEyebrow: "증거 계약",
    proofTitle: "포트폴리오의 모든 주장은 증거와 경계를 함께 보여야 합니다.",
    proof: [
      [
        "아키텍처 산출물",
        "일반적인 에이전트 반복도가 아니라 실제 런타임 경로, 권한 분리, 상태 전이, 운영 의존성을 보여줍니다.",
      ],
      [
        "평가 단위",
        "모든 성능 주장에 대해 데이터셋, 기준선, 표본 수, 지표, 분포, 사람의 판단을 정의합니다.",
      ],
      [
        "배포 상태",
        "구현, 내부 검증, 베타, 현장 준비, 프로덕션 검증 상태를 명확히 구분합니다.",
      ],
      [
        "미측정 항목",
        "아직 증명되지 않은 것을 밝힙니다. 보이는 증거 경계는 변명이 아니라 신뢰성 기능입니다.",
      ],
    ],
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
        title: "비즈니스 문제에서 운영 시스템까지",
        items: [
          "문제 발굴과 사용 사례 적합성 판단",
          "재사용 가능한 참조 아키텍처",
          "규제·공공 부문 업무 흐름",
          "PoC에서 프로덕션까지의 운영 계획",
        ],
      },
      {
        label: "AGENTIC AI ENGINEER",
        title: "깊이 있는 시스템 구현",
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
    contactNote:
      "공개 가능한 이력서와 직접 연락 이메일을 제공받으면 CTA를 추가할 예정입니다.",
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

        <div className="role-fit">
          {copy.roles.map((role) => (
            <div key={role.label}>
              <p className="detail-label">{role.label}</p>
              <h3>{role.title}</h3>
              <ul>
                {role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
        <p className="contact-note">{copy.contactNote}</p>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
