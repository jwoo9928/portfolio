import Link from "next/link";
import {
  Arrow,
  Footer,
  MetricGrid,
  SiteNav,
  StatusBadge,
  SystemMap,
  TechRow,
} from "./components";
import { projects } from "./portfolio-data";

const lifecycle = [
  ["01", "DISCOVER", "Business problem & constraints"],
  ["02", "ARCHITECT", "Boundaries, decisions & proof"],
  ["03", "BUILD", "Agents, product & infrastructure"],
  ["04", "EVALUATE", "Quality, latency, cost & failure"],
  ["05", "DEPLOY", "Operations, incidents & iteration"],
];

export default function Home() {
  return (
    <main id="top">
      <SiteNav />

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            JAEWOO PARK <span>/</span> BUILDER-FIRST AI SYSTEMS
          </p>
          <h1>
            Architect the system.
            <br />
            Ship the code.
            <br />
            <em>Prove it can operate.</em>
          </h1>
          <p className="hero-lede">
            Builder-first AI Solutions Architect and Agentic AI Engineer with
            approximately four years of end-to-end ownership—from discovery and
            architecture to model serving, evaluation, deployment, and field
            hardening.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore case studies <Arrow />
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

        <aside className="hero-system" aria-label="End-to-end delivery lifecycle">
          <div className="system-topline">
            <span>ONE ACCOUNTABLE BUILDER</span>
            <span className="live-dot">FULL LIFECYCLE</span>
          </div>
          <ol>
            {lifecycle.map(([index, title, detail]) => (
              <li key={title}>
                <span>{index}</span>
                <strong>{title}</strong>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
          <p>
            Requirements, architecture, code, evaluation, deployment, and
            operational hardening—owned without a handoff gap.
          </p>
        </aside>

        <dl className="hero-metrics">
          <div>
            <dt>≈4 years</dt>
            <dd>building applied AI systems</dd>
          </div>
          <div>
            <dt>3 systems</dt>
            <dd>active use, institutional beta, and scheduled field launch</dd>
          </div>
          <div>
            <dt>Full lifecycle</dt>
            <dd>discovery through deployment</dd>
          </div>
        </dl>
      </header>

      <section className="positioning" aria-label="Professional positioning">
        <p>BUILDER-FIRST</p>
        <h2>
          I turn ambiguous, high-stakes workflows into bounded AI systems with
          explicit authority, measurable proof, and an honest deployment state.
        </h2>
      </section>

      <section className="maturity-strip" aria-label="Portfolio maturity overview">
        <div>
          <span className="maturity-dot maturity-live" />
          <p>Active internal use</p>
          <strong>AIOps-PoC</strong>
        </div>
        <div>
          <span className="maturity-dot maturity-beta" />
          <p>Institutional beta</p>
          <strong>AI Automated Daily Audit</strong>
        </div>
        <div>
          <span className="maturity-dot maturity-scheduled" />
          <p>Field launch scheduled</p>
          <strong>AI Shakespeare</strong>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED SYSTEMS / 2026</p>
          <h2>Three systems. Three distinct stages of operational proof.</h2>
          <p>
            Each case separates implemented architecture, operator-confirmed
            use, bounded claims, and measurements that remain open.
          </p>
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
              <SystemMap items={project.flow} label={`${project.title} system flow`} />

              <div className="ownership-strip">
                <div>
                  <p>Role</p>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <p>Ownership</p>
                  <strong>{project.ownership}</strong>
                </div>
              </div>

              <TechRow items={project.technologies} />

              <div className="project-card-footer">
                <div className="evidence-note">
                  <span>Evidence boundary</span>
                  {project.evidenceBoundary}
                </div>
                <div className="project-links">
                  <Link href={`/work/${project.slug}`}>
                    Full case study <Arrow />
                  </Link>
                  {project.repository && (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      Repository <Arrow />
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
          <p className="eyebrow">THE EVIDENCE CONTRACT</p>
          <h2>A portfolio claim should expose its proof and its boundary.</h2>
        </div>
        <div className="proof-grid">
          <article>
            <span>01</span>
            <h3>Architecture artifact</h3>
            <p>
              Show the real runtime path, authority split, state transitions,
              and operational dependencies—not a generic agent loop.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Evaluation unit</h3>
            <p>
              Define the dataset, baseline, sample size, metric, distribution,
              and human judgment behind every performance claim.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Deployment state</h3>
            <p>
              Separate implemented, internally validated, beta, field-ready,
              and production-qualified states.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Open measurement</h3>
            <p>
              Name what is not yet proven. A visible evidence boundary is a
              reliability feature, not a disclaimer.
            </p>
          </article>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-heading inverse">
          <p className="eyebrow">HOW I BUILD</p>
          <h2>Architecture is a chain of accountable decisions.</h2>
        </div>
        <div className="principles">
          <article>
            <span>01</span>
            <h3>Bound the model.</h3>
            <p>
              Separate probabilistic proposals from deterministic authority.
              Make permissions, transitions, and terminal states explicit.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Evaluate the real path.</h3>
            <p>
              Test the runtime contract users execute. Track quality, latency,
              cost, regressions, failures, and human judgment.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Design for operators.</h3>
            <p>
              Readiness gates, immutable evidence, incident traces, secure
              configuration, and useful failure messages are product features.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Translate both ways.</h3>
            <p>
              Move from stakeholder pain to executable architecture—and explain
              technical trade-offs in terms of adoption, risk, and value.
            </p>
          </article>
        </div>

        <div className="role-fit">
          <div>
            <p className="detail-label">AI SOLUTIONS ARCHITECT</p>
            <h3>Business problem to operating system</h3>
            <ul>
              <li>Discovery and use-case qualification</li>
              <li>Reusable reference architectures</li>
              <li>Regulated and public-sector workflows</li>
              <li>PoC-to-production operating plans</li>
            </ul>
          </div>
          <div>
            <p className="detail-label">AGENTIC AI ENGINEER</p>
            <h3>Deep systems work</h3>
            <ul>
              <li>Typed agent state and tool contracts</li>
              <li>Evaluation and failure-mode design</li>
              <li>RAG, model serving, and inference optimization</li>
              <li>Reliability, security, and observability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">BUILD SOMETHING THAT HOLDS UP</p>
        <h2>
          Complex workflow.
          <br />
          Clear system.
        </h2>
        <p>
          I am interested in AI Solutions Architect and Agentic AI Engineer
          roles where architecture, code, evaluation, and customer outcomes
          belong in the same conversation.
        </p>
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
        <p className="contact-note">
          Résumé and direct email CTA will be added when the public assets are
          provided.
        </p>
      </section>

      <Footer />
    </main>
  );
}
