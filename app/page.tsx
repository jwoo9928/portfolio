const Arrow = () => <span aria-hidden="true">↗</span>;

const TechRow = ({ items }: { items: string[] }) => (
  <ul className="tech-row" aria-label="Technology stack">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Flow = ({ items }: { items: string[] }) => (
  <ol className="flow" aria-label="System flow">
    {items.map((item, index) => (
      <li key={item}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{item}</strong>
      </li>
    ))}
  </ol>
);

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Jaewoo Park, home">
          JP<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-github"
          href="https://github.com/jwoo9928"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            JAEWOO PARK <span>/</span> AI SYSTEMS
          </p>
          <h1>
            I build AI systems
            <br />
            that earn the right
            <br />
            <em>to operate.</em>
          </h1>
          <p className="hero-lede">
            AI Agent Engineer and AI Solutions Architect with 4 years of
            end-to-end ownership—from problem discovery and architecture to
            model serving, evaluation, deployment, and field hardening.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore case studies <span aria-hidden="true">↓</span>
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
            <span>END-TO-END OWNERSHIP</span>
            <span className="live-dot">ACTIVE</span>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>DISCOVER</strong>
              <small>Business problem &amp; constraints</small>
            </li>
            <li>
              <span>02</span>
              <strong>ARCHITECT</strong>
              <small>System boundaries &amp; decisions</small>
            </li>
            <li>
              <span>03</span>
              <strong>BUILD</strong>
              <small>Agents, products &amp; infrastructure</small>
            </li>
            <li>
              <span>04</span>
              <strong>EVALUATE</strong>
              <small>Quality, safety, cost &amp; latency</small>
            </li>
            <li>
              <span>05</span>
              <strong>DEPLOY</strong>
              <small>Operations, incidents &amp; iteration</small>
            </li>
          </ol>
          <p>One accountable builder across the full system lifecycle.</p>
        </aside>

        <dl className="hero-metrics">
          <div>
            <dt>4 years</dt>
            <dd>building applied AI systems</dd>
          </div>
          <div>
            <dt>3 systems</dt>
            <dd>from enterprise PoC to public service</dd>
          </div>
          <div>
            <dt>Full stack</dt>
            <dd>agent logic, serving, product, and operations</dd>
          </div>
        </dl>
      </header>

      <section className="positioning" aria-label="Professional positioning">
        <p>BUILDER-FIRST</p>
        <h2>
          I turn ambiguous, high-stakes workflows into bounded, measurable AI
          systems—not one-off demos.
        </h2>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED SYSTEMS / 2026</p>
          <h2>Three problems. Three production paths.</h2>
          <p>
            Each system started with an operational bottleneck and ended with
            an executable product, explicit authority boundaries, and a path to
            measurable adoption.
          </p>
        </div>

        <article className="project project-aiops" id="aiops">
          <div className="project-index" aria-hidden="true">
            01
          </div>
          <div className="project-header">
            <p className="eyebrow">AGENTIC INFRASTRUCTURE</p>
            <h3>AIOps-PoC</h3>
            <p className="project-subtitle">Agentic AI PoC Control Plane</p>
            <p className="project-lede">
              Consulting teams repeatedly paid the cost of scoping, designing,
              and rebuilding AI proofs of concept. I built a reusable control
              plane that turns requirements into an evaluated, runnable AI
              workflow.
            </p>
          </div>

          <dl className="project-metrics">
            <div>
              <dt>6 months</dt>
              <dd>independent build</dd>
            </div>
            <div>
              <dt>In use</dt>
              <dd>by a consulting team</dd>
            </div>
            <div>
              <dt>8 × A100</dt>
              <dd>40 GB model-serving fleet</dd>
            </div>
            <div>
              <dt>RTX PRO 6000</dt>
              <dd>Blackwell serving profile</dd>
            </div>
          </dl>

          <Flow
            items={[
              "Requirement",
              "Agent plan",
              "Deterministic compile",
              "Prepared runtime",
              "Evaluate & report",
            ]}
          />

          <div className="project-grid">
            <div>
              <p className="detail-label">THE SYSTEM</p>
              <p>
                A bounded multi-agent lifecycle for LLM, RAG, OCR, vision, and
                speech PoCs. Agents propose typed intent; deterministic commit
                layers validate authority, compile executable graphs, and
                publish immutable preparation artifacts.
              </p>
            </div>
            <div>
              <p className="detail-label">THE HARD PART</p>
              <p>
                Preventing drift between what the agent designed, what the
                evaluator tested, and what the serving layer executed. A shared
                runtime contract now drives evaluation, the playground, and
                final delivery.
              </p>
            </div>
            <div>
              <p className="detail-label">MODEL OPERATIONS</p>
              <p>
                I benchmarked, quantized, served, and operated the model fleet
                directly: Solar Open 2 INT4 on A100 infrastructure, plus
                Blackwell-native NVFP4 generation, GLM-OCR, LocateAnything,
                Jina embeddings, and Nemotron ASR runtimes.
              </p>
            </div>
            <div>
              <p className="detail-label">TRUST BOUNDARY</p>
              <p>
                Runtime readiness is fail-closed and separate from
                configuration completion. Human O/X review becomes evaluation
                evidence instead of an informal approval outside the system.
              </p>
            </div>
          </div>

          <TechRow
            items={[
              "Python",
              "LangGraph",
              "FastAPI",
              "vLLM",
              "PostgreSQL",
              "Qdrant",
              "Next.js",
              "Docker",
              "NVFP4",
            ]}
          />

          <div className="project-footer">
            <div className="evidence-note">
              <span>Evidence boundary</span>
              Active consulting-team use is confirmed. Production-scale load
              results are not claimed yet.
            </div>
            <div className="project-links">
              <a
                href="https://github.com/jwoo9928/AIOps"
                target="_blank"
                rel="noreferrer"
              >
                View repository <Arrow />
              </a>
              <span aria-disabled="true">Demo video · coming soon</span>
            </div>
          </div>
        </article>

        <article className="project project-audit" id="audit">
          <div className="project-index" aria-hidden="true">
            02
          </div>
          <div className="project-header">
            <p className="eyebrow">REGULATED AI / GOVTECH</p>
            <h3>AI Daily Audit</h3>
            <p className="project-subtitle">
              Evidence-grounded review for Korean public procurement
            </p>
            <p className="project-lede">
              Public institutions must review contracts against changing laws
              and internal rules. Manual review creates a bottleneck, while a
              free-form LLM answer is too risky. I built an evidence-first
              review system with deterministic decision authority.
            </p>
          </div>

          <dl className="project-metrics">
            <div>
              <dt>Hours → ≈5 min</dt>
              <dd>internal validation cycle</dd>
            </div>
            <div>
              <dt>Beta</dt>
              <dd>with a demand-side institution</dd>
            </div>
            <div>
              <dt>Fail-closed</dt>
              <dd>insufficient evidence never passes</dd>
            </div>
            <div>
              <dt>Human release</dt>
              <dd>authenticated final approval</dd>
            </div>
          </dl>

          <Flow
            items={[
              "Versioned rules",
              "Dual retrieval",
              "Evidence graph",
              "Deterministic decision",
              "Human release",
            ]}
          />

          <div className="project-grid">
            <div>
              <p className="detail-label">THE SYSTEM</p>
              <p>
                Korean HWP/HWPX, PDF, and DOCX sources become versioned audit
                criteria. Contract documents are converted into an evidence
                graph, retrieved from both target- and rule-driven directions,
                and recorded as immutable proof.
              </p>
            </div>
            <div>
              <p className="detail-label">AUTHORITY DESIGN</p>
              <p>
                The LLM may propose schema-bound candidate facts. It cannot
                decide compliance, publish findings, or declare readiness.
                Backend policy owns evidence acceptance and every final
                decision.
              </p>
            </div>
            <div>
              <p className="detail-label">TRACEABILITY</p>
              <p>
                Exact-generation RAG, pinned rule bundles, obligation ledgers,
                proof records, and immutable run snapshots make each result
                reproducible against the rules that were active at review time.
              </p>
            </div>
            <div>
              <p className="detail-label">DEPLOYMENT STATUS</p>
              <p>
                Internal validation is complete and institutional beta testing
                is underway. Quality and reviewer-agreement measurements remain
                explicitly open until the beta sample is complete.
              </p>
            </div>
          </div>

          <TechRow
            items={[
              "Python",
              "FastAPI",
              "PostgreSQL",
              "Neo4j",
              "vLLM",
              "BGE-M3",
              "Reranking",
              "Next.js",
              "Docker",
            ]}
          />

          <div className="project-footer">
            <div className="evidence-note">
              <span>Evidence boundary</span>
              The ≈5-minute cycle is an internal-validation result; beta
              accuracy and reviewer agreement are still being measured.
            </div>
            <div className="project-links">
              <span aria-disabled="true">Private repository</span>
              <span aria-disabled="true">Demo video · coming soon</span>
            </div>
          </div>
        </article>

        <article className="project project-drama" id="shakespeare">
          <div className="project-index" aria-hidden="true">
            03
          </div>
          <div className="project-header">
            <p className="eyebrow">PUBLIC EXPERIENCE / EDGE AI</p>
            <h3>AI Shakespeare</h3>
            <p className="project-subtitle">
              On-site generative theatre kiosk
            </p>
            <p className="project-lede">
              To help university students engage with Daehak-ro&apos;s theatre
              culture, I built a kiosk that transforms a visitor&apos;s
              characters and personal situation into a short play they can
              read and take home.
            </p>
          </div>

          <dl className="project-metrics">
            <div>
              <dt>August 2026</dt>
              <dd>scheduled on-site launch</dd>
            </div>
            <div>
              <dt>80 mm</dt>
              <dd>thermal receipt output</dd>
            </div>
            <div>
              <dt>85 sec</dt>
              <dd>bounded provider timeout</dd>
            </div>
            <div>
              <dt>6 months</dt>
              <dd>data-retention policy</dd>
            </div>
          </dl>

          <Flow
            items={[
              "Visitor story",
              "Structured generation",
              "Local ledger",
              "Receipt print",
              "Satisfaction",
            ]}
          />

          <div className="project-grid">
            <div>
              <p className="detail-label">THE PRODUCT</p>
              <p>
                A Windows Electron kiosk that generates a constrained one-scene
                play, stores an operational ledger locally, prints a silent
                thermal receipt, and collects satisfaction for the operating
                arts foundation.
              </p>
            </div>
            <div>
              <p className="detail-label">FIELD RELIABILITY</p>
              <p>
                Consecutive use exposed rate-limit amplification, abandoned
                provider calls, overlapping sessions, and partial writes. I
                added serialized generation, upstream cancellation, bounded
                retries, and transactional persistence.
              </p>
            </div>
            <div>
              <p className="detail-label">ARCHITECTURE EVOLUTION</p>
              <p>
                A packaging fault once inflated the installer to 1.27 GB. After
                isolating build outputs it fell to 222 MB; the final sanitized
                architecture then removed the embedded Next.js runtime entirely
                for a simpler Electron-only field surface.
              </p>
            </div>
            <div>
              <p className="detail-label">SECURITY &amp; PRIVACY</p>
              <p>
                API keys use OS-backed secure storage, the renderer is
                sandboxed with a restrictive CSP, administrator credentials are
                hashed, and the operating policy limits visitor-record
                retention to six months.
              </p>
            </div>
          </div>

          <TechRow
            items={[
              "Electron",
              "TypeScript",
              "SQLite",
              "OpenAI API",
              "Windows",
              "NSIS",
              "Thermal Print",
              "CSP",
            ]}
          />

          <div className="project-footer">
            <div className="evidence-note">
              <span>Evidence boundary</span>
              The product is launch-ready. Visitor volume, print success, and
              satisfaction will be published after the August field launch.
            </div>
            <div className="project-links">
              <a
                href="https://github.com/seoul-ai-foundation/AI-Drama"
                target="_blank"
                rel="noreferrer"
              >
                View repository <Arrow />
              </a>
              <span aria-disabled="true">Demo video · coming soon</span>
            </div>
          </div>
        </article>
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
              Make permissions, transitions, and failure states explicit.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Evaluate the real path.</h3>
            <p>
              Test the same runtime contract that users execute. Track quality,
              latency, cost, regressions, and human judgment.
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
              Move from stakeholder pain to an executable system—and explain
              technical trade-offs in terms of adoption, risk, and value.
            </p>
          </article>
        </div>

        <div className="role-fit">
          <div>
            <p className="detail-label">AI AGENT ENGINEER</p>
            <h3>Deep systems work</h3>
            <ul>
              <li>Typed agent state and tool contracts</li>
              <li>Evaluation and failure-mode design</li>
              <li>RAG, model serving, and inference optimization</li>
              <li>Reliability, security, and observability</li>
            </ul>
          </div>
          <div>
            <p className="detail-label">AI SOLUTIONS ARCHITECT</p>
            <h3>End-to-end delivery</h3>
            <ul>
              <li>Discovery and use-case qualification</li>
              <li>Reusable reference architectures</li>
              <li>Regulated and public-sector workflows</li>
              <li>PoC-to-production operating plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">LET&apos;S BUILD SOMETHING THAT HOLDS UP</p>
        <h2>
          Complex workflow.
          <br />
          Clear system.
        </h2>
        <p>
          I&apos;m interested in AI Agent Engineering and AI Solutions
          Architecture roles where architecture, code, evaluation, and customer
          outcomes belong in the same conversation.
        </p>
        <div className="contact-links">
          <a
            href="https://github.com/jwoo9928"
            target="_blank"
            rel="noreferrer"
          >
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

      <footer>
        <p>© 2026 Jaewoo Park</p>
        <p>AI Agent Engineer · AI Solutions Architect</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
