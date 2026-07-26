import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  Footer,
  MetricGrid,
  SiteNav,
  StatusBadge,
  TechRow,
} from "./components";
import type { Locale, Project } from "./portfolio-data";

const copy = {
  en: {
    back: "Selected work",
    demo: "Demo video · coming soon",
    facts: "Project facts",
    labels: {
      client: "Client / initiative",
      workplace: "Workplace",
      period: "Period / stage",
      role: "Responsibility",
      contribution: "Contribution",
      delivery: "Delivery",
    },
    problem: "Operating problem",
    process: "Product workflow",
    architecture: "Architecture decisions",
    evidence: "Results & evidence",
    boundaries: "Evidence boundaries",
    stack: "Technology & capability areas",
    next: "Next project",
  },
  ko: {
    back: "주요 프로젝트",
    demo: "데모 영상 · 추후 추가 예정",
    facts: "프로젝트 정보",
    labels: {
      client: "발주처·과제",
      workplace: "근무처",
      period: "기간·단계",
      role: "참여 역할",
      contribution: "기여도",
      delivery: "구축·운영 상태",
    },
    problem: "해결한 업무 문제",
    process: "제품 실행 흐름",
    architecture: "핵심 설계",
    evidence: "성과와 검증 범위",
    boundaries: "성과 해석 범위",
    stack: "기술·구현 영역",
    next: "다음 프로젝트",
  },
} as const;

function AIOpsControlVisual({ locale }: { locale: Locale }) {
  const labels =
    locale === "ko"
      ? [
          ["AGENT", "실행 의도 제안"],
          ["COMPILER", "코드 규칙 검증"],
          ["HUMAN", "실행 계획 승인"],
          ["RUNTIME", "검증된 명세 실행"],
        ]
      : [
          ["AGENT", "Propose intent"],
          ["COMPILER", "Validate by code"],
          ["HUMAN", "Approve plan"],
          ["RUNTIME", "Execute bound spec"],
        ];
  return (
    <div className="control-chain" aria-label="Agent to runtime control chain">
      {labels.map(([name, detail], index) => (
        <div key={name}>
          <span>0{index + 1}</span>
          <strong>{name}</strong>
          <small>{detail}</small>
        </div>
      ))}
    </div>
  );
}

function AuditEvidenceVisual({ locale }: { locale: Locale }) {
  const labels =
    locale === "ko"
      ? ["법령·내규 버전", "원문 구간", "ProofRecord", "결정 규칙", "담당자 승인"]
      : [
          "Regulation version",
          "Source passage",
          "ProofRecord",
          "Decision rule",
          "Reviewer approval",
        ];
  return (
    <div className="evidence-chain" aria-label="Source-to-decision evidence chain">
      {labels.map((label, index) => (
        <div key={label}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  );
}

function WritingProblemVisual({ locale }: { locale: Locale }) {
  const before =
    locale === "ko"
      ? ["교사 일정에 따른 대기", "높은 건별 첨삭 수당", "담당자별 기준 차이"]
      : [
          "Wait for teacher availability",
          "High stipend per correction",
          "Different reviewer criteria",
        ];
  const after =
    locale === "ko"
      ? ["필요할 때 1차 첨삭", "반복 업무 보조", "공통 서비스 흐름"]
      : [
          "On-demand first pass",
          "Reduced repeated work",
          "Shared service workflow",
        ];
  return (
    <div className="writing-change">
      <div>
        <p>{locale === "ko" ? "기존 업무" : "BEFORE"}</p>
        {before.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <strong aria-hidden="true">→</strong>
      <div>
        <p>{locale === "ko" ? "AI 보조 흐름" : "AI-ASSISTED FLOW"}</p>
        {after.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ReceiptVisual({ locale }: { locale: Locale }) {
  return (
    <div className="receipt-visual" aria-label="Thermal receipt output concept">
      <p>AI SHAKESPEARE</p>
      <span>{locale === "ko" ? "오늘의 단막 희곡" : "A ONE-ACT PLAY FOR TODAY"}</span>
      <div />
      <h4>{locale === "ko" ? "막이 오르기 전" : "BEFORE THE CURTAIN RISES"}</h4>
      <p>
        {locale === "ko"
          ? "방문자의 고민과 상황이 등장인물, 장면, 대사가 있는 한 편의 희곡으로 이어집니다."
          : "A visitor’s concern becomes a play with characters, scenes, and dialogue."}
      </p>
      <div />
      <small>HYEHWA · DAEHANGNO · 80 mm</small>
    </div>
  );
}

function ProjectSignature({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  if (project.slug === "aiops") return <AIOpsControlVisual locale={locale} />;
  if (project.slug === "audit") return <AuditEvidenceVisual locale={locale} />;
  if (project.slug === "writing") return <WritingProblemVisual locale={locale} />;
  return <ReceiptVisual locale={locale} />;
}

function ProjectMedia({ project }: { project: Project }) {
  if (!project.image) return null;
  const dimensions =
    project.slug === "shakespeare"
      ? { width: 1280, height: 640 }
      : { width: 1600, height: 1000 };

  return (
    <figure className={`project-media project-media-${project.slug}`}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={dimensions.width}
        height={dimensions.height}
        sizes="(max-width: 900px) 100vw, 1200px"
      />
      <figcaption>{project.image.caption}</figcaption>
    </figure>
  );
}

export function CaseStudyPage({
  project,
  projects,
  locale = "en",
}: {
  project: Project;
  projects: Project[];
  locale?: Locale;
}) {
  const t = copy[locale];
  const prefix = locale === "ko" ? "/ko" : "";
  const current = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(current + 1) % projects.length];
  const alternateHref =
    locale === "ko"
      ? `/work/${project.slug}`
      : `/ko/work/${project.slug}`;
  const facts = [
    [t.labels.client, project.client],
    [t.labels.workplace, project.workplace],
    [t.labels.period, project.period],
    [t.labels.role, project.role],
    [t.labels.contribution, project.contribution],
    [t.labels.delivery, project.delivery],
  ];

  return (
    <main
      className={`case-page theme-${project.theme} case-${project.slug}`}
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
          <Link href={`${prefix}/#work`}>← {t.back}</Link>
          <span>{project.index} / 04</span>
        </div>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.track}</p>
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
          </div>
          <div className="case-status">
            <StatusBadge project={project} />
            <small>{t.demo}</small>
          </div>
        </div>
        <p className="case-overview">{project.overview}</p>
        <MetricGrid metrics={project.metrics} />
      </header>

      <section className="case-context">
        <div className="case-section-heading">
          <span>01</span>
          <div>
            <p className="eyebrow">{t.problem}</p>
            <h2>{project.problem}</h2>
          </div>
        </div>
        <aside className="project-facts">
          <p>{t.facts}</p>
          <dl>
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="case-workflow">
        <div className="case-section-heading">
          <span>02</span>
          <div>
            <p className="eyebrow">{t.process}</p>
            <h2>{project.chapterTitle}</h2>
            <p>{project.chapterBody}</p>
          </div>
        </div>
        <ol className={`workflow-grid workflow-${project.slug}`}>
          {project.flow.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.tags ? (
                <ul>
                  {step.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="signature-section">
        <div className="case-section-heading">
          <span>03</span>
          <div>
            <p className="eyebrow">{t.architecture}</p>
            <h2>
              {project.slug === "aiops" &&
                (locale === "ko"
                  ? "에이전트의 판단과 실행 권한의 분리"
                  : "Separation of agent judgment and execution authority")}
              {project.slug === "audit" &&
                (locale === "ko"
                  ? "규정 원문부터 최종 승인까지 이어지는 근거"
                  : "Evidence from source regulation to final approval")}
              {project.slug === "writing" &&
                (locale === "ko"
                  ? "기존 첨삭 업무를 바꾸는 서비스 구조"
                  : "A service design that changes the correction workflow")}
              {project.slug === "shakespeare" &&
                (locale === "ko"
                  ? "현장 체험을 완성하는 데스크톱 제품"
                  : "A desktop product designed for a field experience")}
            </h2>
          </div>
        </div>
        <ProjectSignature project={project} locale={locale} />
        <div className="focus-grid">
          {project.focus.map((item) => (
            <article key={item.title}>
              <p className="detail-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <ProjectMedia project={project} />
      </section>

      <section className="results-section">
        <div className="case-section-heading">
          <span>04</span>
          <div>
            <p className="eyebrow">{t.evidence}</p>
            <h2>
              {locale === "ko"
                ? "확인된 결과와 아직 측정하지 않은 항목의 구분"
                : "Verified outcomes, separated from claims not yet measured"}
            </h2>
          </div>
        </div>
        <div className="result-grid">
          {project.results.map((result) => (
            <article key={result.label}>
              <p className="detail-label">{result.label}</p>
              <h3>{result.value}</h3>
              <p>{result.note}</p>
            </article>
          ))}
        </div>
        <div className="boundary-panel">
          <p className="detail-label">{t.boundaries}</p>
          <ul>
            {project.boundaries.map((boundary) => (
              <li key={boundary}>{boundary}</li>
            ))}
          </ul>
        </div>
        <div className="stack-panel">
          <p className="detail-label">{t.stack}</p>
          <TechRow items={project.technologies} />
        </div>
      </section>

      <nav className={`next-project theme-${next.theme}`} aria-label={t.next}>
        <p>{t.next}</p>
        <Link href={`${prefix}/work/${next.slug}`}>
          <span>{next.index}</span>
          <strong>{next.title}</strong>
          <Arrow />
        </Link>
      </nav>

      <Footer locale={locale} />
    </main>
  );
}
