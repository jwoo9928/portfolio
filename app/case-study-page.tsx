import Link from "next/link";
import { Arrow, Footer, MetricGrid, SiteNav, StatusBadge, SystemMap, TechRow } from "./components";
import { projects, type Project } from "./portfolio-data";

const evidenceLabels = {
  confirmed: "Confirmed",
  bounded: "Bounded claim",
  open: "Open measurement",
} as const;

export function CaseStudyPage({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className={`case-page theme-${project.theme}`} id="top">
      <SiteNav compact />

      <header className="case-hero">
        <div className="case-breadcrumb">
          <Link href="/#work">Selected systems</Link>
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

      <section className="case-section case-engagement" aria-labelledby="engagement-title">
        <div className="section-marker">
          <span>01</span>
          <p id="engagement-title">Engagement</p>
        </div>
        <div className="engagement-content">
          <h2>The problem and my exact ownership.</h2>
          <p className="large-copy">{project.problem}</p>
          <dl className="fact-list">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.team}</dd>
            </div>
            <div>
              <dt>Ownership</dt>
              <dd>{project.ownership}</dd>
            </div>
            <div>
              <dt>Stage</dt>
              <dd>{project.duration}</dd>
            </div>
            <div>
              <dt>Environment</dt>
              <dd>{project.environment}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="case-section architecture-section" aria-labelledby="architecture-title">
        <div className="section-marker">
          <span>02</span>
          <p id="architecture-title">Architecture</p>
        </div>
        <div>
          <h2>Bounded autonomy with an explicit proof chain.</h2>
          <SystemMap items={project.flow} label={`${project.title} architecture flow`} />
          <p className="architecture-note">{project.architectureNote}</p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="decisions-title">
        <div className="section-marker">
          <span>03</span>
          <p id="decisions-title">Decisions</p>
        </div>
        <div>
          <h2>Architecture is the record of what was allowed to fail.</h2>
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

      <section className="case-section evidence-section" aria-labelledby="evidence-title">
        <div className="section-marker">
          <span>04</span>
          <p id="evidence-title">Evidence</p>
        </div>
        <div>
          <h2>What is proven, bounded, and still open.</h2>
          <div className="evidence-ledger">
            {project.evidence.map((item) => (
              <article key={item.label}>
                <div className={`evidence-state evidence-${item.state}`}>
                  <span aria-hidden="true" />
                  {evidenceLabels[item.state]}
                </div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
          <div className="boundary-callout">
            <p>Evidence boundary</p>
            <strong>{project.evidenceBoundary}</strong>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="measurement-title">
        <div className="section-marker">
          <span>05</span>
          <p id="measurement-title">Measurement</p>
        </div>
        <div className="measurement-grid">
          <div>
            <h2>The next claims must be earned with these measurements.</h2>
            <ol>
              {project.measurementPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <aside>
            <p className="detail-label">ARTIFACTS</p>
            <TechRow items={project.technologies} />
            <p className="artifact-note">{project.repositoryNote}</p>
            <div className="artifact-links">
              {project.repository ? (
                <a href={project.repository} target="_blank" rel="noreferrer">
                  Repository <Arrow />
                </a>
              ) : (
                <span>Private repository</span>
              )}
              <span>{project.demoNote}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="next-case">
        <p className="eyebrow">NEXT CASE STUDY</p>
        <Link href={`/work/${nextProject.slug}`}>
          <span>{nextProject.kicker}</span>
          <strong>{nextProject.title}</strong>
          <Arrow />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
