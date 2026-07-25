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

const caseCopy = {
  en: {
    selected: "Selected work",
    engagement: "Context & responsibility",
    engagementTitle: "The problem, users, and engineering scope.",
    facts: ["Responsibility", "Users & stakeholders", "Built", "Delivery stage", "Environment"],
    constraints: "Operating constraints",
    architecture: "System architecture",
    architectureTitle: "How the system works.",
    architectureFlow: "architecture flow",
    scenario: "End-to-end workflow",
    decisions: "Technical decisions",
    decisionsTitle: "Key engineering decisions and trade-offs.",
    evidence: "Results",
    evidenceTitle: "Implemented system and observed results.",
    evidenceStates: {
      confirmed: "Implemented / verified",
      bounded: "Observed in current scope",
      open: "Next measurement",
    },
    boundary: "Validation scope",
    measurement: "Technical record",
    measurementTitle: "Artifacts, stack, and next measurements.",
    artifacts: "TECHNOLOGY & ARTIFACTS",
    artifactStates: {
      implemented: "Implemented",
      available: "Internal evidence",
      pending: "Pending",
    },
    nextValidation: "NEXT MEASUREMENTS",
    repository: "Repository",
    privateRepository: "Repository not publicly verified",
    demo: "Demo video",
    comingSoon: "Coming soon",
    next: "NEXT CASE STUDY",
  },
  ko: {
    selected: "프로젝트",
    engagement: "문제·사용자·담당",
    engagementTitle: "해결한 문제와 사용 환경, 구현 범위",
    facts: ["담당", "사용자·이해관계자", "구현 범위", "진행 단계", "운영 환경"],
    constraints: "운영 환경의 핵심 제약",
    architecture: "아키텍처",
    architectureTitle: "시스템 동작 방식",
    architectureFlow: "아키텍처 흐름",
    scenario: "처리 과정",
    decisions: "기술적 결정",
    decisionsTitle: "신뢰성과 운영을 좌우한 핵심 결정",
    evidence: "결과",
    evidenceTitle: "구현 내용과 확인된 결과",
    evidenceStates: {
      confirmed: "구현 확인",
      bounded: "현재 범위에서 확인",
      open: "추가 측정 예정",
    },
    boundary: "검증 범위",
    measurement: "기술 자료",
    measurementTitle: "구현 산출물, 기술 스택, 다음 측정 항목",
    artifacts: "기술 스택 및 산출물",
    artifactStates: {
      implemented: "코드로 구현",
      available: "내부 자료 보유",
      pending: "추가 준비 필요",
    },
    nextValidation: "다음 측정 항목",
    repository: "저장소",
    privateRepository: "외부에 공개된 저장소가 없습니다",
    demo: "데모 영상",
    comingSoon: "준비 중",
    next: "다음 프로젝트",
  },
} as const;

export function CaseStudyPage({
  project,
  projects,
  locale = "en",
}: {
  project: Project;
  projects: Project[];
  locale?: Locale;
}) {
  const copy = caseCopy[locale];
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const routePrefix = locale === "ko" ? "/ko" : "";
  const alternateHref =
    locale === "ko"
      ? `/work/${project.slug}`
      : `/ko/work/${project.slug}`;

  return (
    <main
      className={`case-page theme-${project.theme}`}
      id="top"
      lang={locale}
    >
      <SiteNav
        compact
        locale={locale}
        alternateHref={alternateHref}
      />

      <header className="case-hero">
        <div className="case-breadcrumb">
          <Link href={`${routePrefix}/#work`}>{copy.selected}</Link>
          <span>/</span>
          <span>{project.index}</span>
        </div>
        <div className="case-hero-grid">
          <div>
            <div className="project-designation">
              <strong>{project.portfolioTrack}</strong>
            </div>
            <p className="eyebrow">{project.kicker}</p>
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
          </div>
          <div className="case-hero-status">
            <StatusBadge project={project} />
            <span className="demo-placeholder">
              {copy.demo} · {copy.comingSoon}
            </span>
          </div>
        </div>
        <p className="case-lede">{project.lede}</p>
        <MetricGrid metrics={project.metrics} />
      </header>

      <section
        className="case-section case-engagement"
        aria-labelledby="engagement-title"
      >
        <div className="section-marker">
          <span>01</span>
          <p id="engagement-title">{copy.engagement}</p>
        </div>
        <div className="engagement-content">
          <h2>{copy.engagementTitle}</h2>
          <p className="large-copy">{project.problem}</p>
          <dl className="fact-list">
            {[
              project.role,
              project.team,
              project.ownership,
              project.duration,
              project.environment,
            ].map((value, index) => (
              <div key={copy.facts[index]}>
                <dt>{copy.facts[index]}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="constraint-block">
            <p className="detail-label">{copy.constraints}</p>
            <ul>
              {project.constraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="case-section architecture-section"
        aria-labelledby="architecture-title"
      >
        <div className="section-marker">
          <span>02</span>
          <p id="architecture-title">{copy.architecture}</p>
        </div>
        <div>
          <h2>{copy.architectureTitle}</h2>
          <SystemMap
            items={project.flow}
            label={`${project.title} ${copy.architectureFlow}`}
          />
          <p className="architecture-note">{project.architectureNote}</p>
          <div className="scenario-block">
            <p className="detail-label">{copy.scenario}</p>
            <h3>{project.scenario.title}</h3>
            <p>{project.scenario.summary}</p>
            <ol>
              {project.scenario.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="decisions-title">
        <div className="section-marker">
          <span>03</span>
          <p id="decisions-title">{copy.decisions}</p>
        </div>
        <div>
          <h2>{copy.decisionsTitle}</h2>
          <div className="decision-grid">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{decision.label}</p>
                </div>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="case-section evidence-section"
        aria-labelledby="evidence-title"
      >
        <div className="section-marker">
          <span>04</span>
          <p id="evidence-title">{copy.evidence}</p>
        </div>
        <div>
          <h2>{copy.evidenceTitle}</h2>
          <div className="evidence-ledger">
            {project.evidence.map((item) => (
              <article key={item.label}>
                <div className={`evidence-state evidence-${item.state}`}>
                  <span aria-hidden="true" />
                  {copy.evidenceStates[item.state]}
                </div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
          <div className="boundary-callout">
            <p>{copy.boundary}</p>
            <strong>{project.evidenceBoundary}</strong>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="measurement-title">
        <div className="section-marker">
          <span>05</span>
          <p id="measurement-title">{copy.measurement}</p>
        </div>
        <div>
          <h2>{copy.measurementTitle}</h2>
          <div className="artifact-grid">
            {project.artifacts.map((artifact) => (
              <article key={artifact.title}>
                <div
                  className={`artifact-state artifact-${artifact.state}`}
                >
                  <span aria-hidden="true" />
                  {copy.artifactStates[artifact.state]}
                </div>
                <h3>{artifact.title}</h3>
                <p>{artifact.body}</p>
              </article>
            ))}
          </div>
          <div className="delivery-grid">
            <aside>
              <p className="detail-label">{copy.artifacts}</p>
              <TechRow items={project.technologies} locale={locale} />
              <p className="artifact-note">{project.repositoryNote}</p>
              <div className="artifact-links">
                {project.repository ? (
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    {copy.repository} <Arrow />
                  </a>
                ) : (
                  <span>{copy.privateRepository}</span>
                )}
              </div>
            </aside>
            <div className="next-validation">
              <p className="detail-label">{copy.nextValidation}</p>
              <ol>
                {project.measurementPlan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="next-case">
        <p className="eyebrow">{copy.next}</p>
        <Link href={`${routePrefix}/work/${nextProject.slug}`}>
          <span>{nextProject.kicker}</span>
          <strong>{nextProject.title}</strong>
          <Arrow />
        </Link>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
