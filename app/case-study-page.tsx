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
    selected: "Selected systems",
    engagement: "Engagement",
    engagementTitle: "The problem and my exact ownership.",
    facts: ["Role", "Team", "Ownership", "Stage", "Environment"],
    architecture: "Architecture",
    architectureTitle: "Bounded autonomy with an explicit proof chain.",
    architectureFlow: "architecture flow",
    decisions: "Decisions",
    decisionsTitle: "Architecture is the record of what was allowed to fail.",
    evidence: "Evidence",
    evidenceTitle: "What is proven, bounded, and still open.",
    evidenceStates: {
      confirmed: "Confirmed",
      bounded: "Bounded claim",
      open: "Open measurement",
    },
    boundary: "Evidence boundary",
    measurement: "Measurement",
    measurementTitle: "The next claims must be earned with these measurements.",
    artifacts: "ARTIFACTS",
    repository: "Repository",
    privateRepository: "Private repository",
    next: "NEXT CASE STUDY",
  },
  ko: {
    selected: "주요 시스템",
    engagement: "프로젝트 범위",
    engagementTitle: "해결할 문제와 정확한 담당 범위.",
    facts: ["역할", "팀", "담당 범위", "단계", "환경"],
    architecture: "아키텍처",
    architectureTitle: "명시적인 증거 체계를 갖춘 제한된 자율성.",
    architectureFlow: "아키텍처 흐름",
    decisions: "설계 결정",
    decisionsTitle: "아키텍처는 어떤 실패를 허용했는지 남기는 기록입니다.",
    evidence: "증거",
    evidenceTitle: "검증된 것, 범위를 제한한 주장, 아직 측정할 것.",
    evidenceStates: {
      confirmed: "검증됨",
      bounded: "범위 제한 주장",
      open: "측정 예정",
    },
    boundary: "증거 경계",
    measurement: "측정",
    measurementTitle: "다음 주장은 아래 측정으로 증명해야 합니다.",
    artifacts: "산출물",
    repository: "저장소",
    privateRepository: "비공개 저장소",
    next: "다음 프로젝트 사례",
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
            <p className="eyebrow">{project.kicker}</p>
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
          </div>
          <StatusBadge project={project} />
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
        <div className="measurement-grid">
          <div>
            <h2>{copy.measurementTitle}</h2>
            <ol>
              {project.measurementPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
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
              <span>{project.demoNote}</span>
            </div>
          </aside>
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
