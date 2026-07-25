export type Metric = {
  value: string;
  label: string;
};

export type EvidenceItem = {
  label: string;
  value: string;
  state: "confirmed" | "bounded" | "open";
};

export type Project = {
  slug: "aiops" | "audit" | "shakespeare";
  index: string;
  theme: "blue" | "olive" | "orange";
  portfolioTrack: string;
  kicker: string;
  title: string;
  subtitle: string;
  status: string;
  statusDetail: string;
  lede: string;
  problem: string;
  role: string;
  team: string;
  ownership: string;
  duration: string;
  environment: string;
  metrics: Metric[];
  constraints: string[];
  flow: string[];
  architectureNote: string;
  scenario: {
    title: string;
    summary: string;
    steps: string[];
  };
  decisions: Array<{
    label: string;
    title: string;
    body: string;
  }>;
  evidence: EvidenceItem[];
  artifacts: Array<{
    title: string;
    body: string;
    state: "implemented" | "available" | "pending";
  }>;
  measurementPlan: string[];
  technologies: string[];
  repository?: string;
  repositoryNote: string;
  demoNote?: string;
  evidenceBoundary: string;
};

export const projects: Project[] = [
  {
    slug: "aiops",
    index: "01",
    theme: "blue",
    portfolioTrack: "AGENT SYSTEMS / LLM INFRASTRUCTURE",
    kicker: "AGENTIC INFRASTRUCTURE",
    title: "AIOps-PoC",
    subtitle: "A reusable control plane for evaluated AI proofs of concept",
    status: "Active internal use",
    statusDetail: "Used by a consulting team",
    lede:
      "Consulting teams repeatedly paid the cost of scoping, designing, and rebuilding AI proofs of concept. I built one bounded lifecycle that turns requirements into an executable, evaluated AI system.",
    problem:
      "A PoC should reduce uncertainty, not create another bespoke software project. The system had to preserve use-case flexibility while preventing agents from silently inventing runtime capabilities, deployment state, or proof.",
    role: "Product architecture and engineering",
    team: "Built independently; used by the consulting team",
    ownership:
      "Agent orchestration, runtime contracts, data preparation, evaluation, full-stack product, model serving, and deployment",
    duration: "6 months",
    environment: "8 × A100 40 GB; RTX PRO 6000 Blackwell profile",
    metrics: [
      { value: "6 months", label: "independent build" },
      { value: "In use", label: "consulting workflow" },
      { value: "8 × A100", label: "40 GB serving fleet" },
      { value: "Blackwell", label: "RTX PRO 6000 profile" },
    ],
    constraints: [
      "Support different PoC use cases without rebuilding the orchestration stack each time.",
      "Keep model proposals separate from authority to compile, prepare, evaluate, and release a runtime.",
      "Serve and operate open models across A100 and Blackwell profiles while preserving exact runtime identity.",
      "Expose unsupported inputs, unavailable models, and invalid graph bindings as explicit terminal states.",
    ],
    flow: [
      "Requirement contract",
      "Semantic agent plan",
      "Deterministic compile",
      "Prepared runtime",
      "Evaluation & HITL",
    ],
    architectureNote:
      "The agent owns bounded semantic intent. Deterministic lifecycle code owns authority checks, exact graph binding, compilation, readiness, and immutable proof artifacts.",
    scenario: {
      title: "From consultant request to an executable PoC",
      summary:
        "A consultant defines the business task and evidence requirement. The system converts that request into a typed plan, compiles only supported capabilities, prepares the exact runtime, and evaluates the same bound graph before it can be used.",
      steps: [
        "Capture the use case, inputs, outputs, constraints, and evaluation target as a requirement contract.",
        "Let agents propose semantic intent while typed schemas prevent unbounded runtime instructions.",
        "Compile the proposal against registered routes, models, topology, and required inputs.",
        "Prepare the durable runtime with fingerprint checks, interrupt/resume, and readiness gates.",
        "Run evaluation and HITL against the exact graph and model configuration that the consultant will use.",
      ],
    },
    decisions: [
      {
        label: "AUTHORITY",
        title: "Let the agent propose; never let it self-certify.",
        body:
          "Typed agent output is treated as a proposal. A deterministic compiler validates routes, inputs, topology, model availability, and executable contracts before a ServingPipelineSpec can be committed.",
      },
      {
        label: "RUNTIME TRUTH",
        title: "Evaluate the exact system users execute.",
        body:
          "Evaluation, playground execution, and delivery share the same bound runtime contract. This prevents a successful eval from describing a different graph or model configuration than the deployed PoC.",
      },
      {
        label: "MODEL OPERATIONS",
        title: "Operate the model fleet directly.",
        body:
          "A100 serving includes 4-bit poolside/Laguna-S-2.1 and Solar Open 2 profiles through vLLM. Blackwell profiles include Qwen3.5-9B-NVFP4, Qwen3.6-27B-NVFP4, GLM-OCR, LocateAnything, Jina embeddings, Nemotron ASR, and FlashAttention 4 where supported.",
      },
      {
        label: "FAILURE MODE",
        title: "Blocked is a valid terminal result.",
        body:
          "Missing runtime inputs, unsupported media, invalid bindings, or absent model readiness remain explicit blocks. The system does not convert infrastructure failure into a fabricated domain success.",
      },
    ],
    evidence: [
      {
        label: "Architecture",
        value:
          "Typed contracts, compiler-owned ServingPipelineSpec, runtime readiness gates, and HITL evidence are implemented in the current code and design record.",
        state: "confirmed",
      },
      {
        label: "Adoption",
        value:
          "Active consulting-team use is confirmed by the operator. User count and completed-PoC volume are not yet published.",
        state: "bounded",
      },
      {
        label: "Serving",
        value:
          "A100 and Blackwell deployment profiles are operator-confirmed. A public, reproducible benchmark report is still pending.",
        state: "bounded",
      },
      {
        label: "Scale",
        value:
          "Production-scale concurrency, p95 latency, cost per run, and sustained load results are not claimed.",
        state: "open",
      },
    ],
    artifacts: [
      {
        title: "Typed runtime contracts",
        body:
          "RuntimeGraphIntent, RuntimeGraphDecision, and ServingPipelineSpec outputs define what agents may propose and what deterministic code must certify.",
        state: "implemented",
      },
      {
        title: "Durable lifecycle implementation",
        body:
          "Compile, dispatch, interrupt/resume, fingerprint validation, readiness, and commit paths are implemented for the Data-preparation lifecycle.",
        state: "implemented",
      },
      {
        title: "Model-serving operations record",
        body:
          "A100 and Blackwell profiles, failure investigations, and runtime activation records exist internally. A redacted deployment status and repeatable benchmark are still required for public review.",
        state: "available",
      },
      {
        title: "Public benchmark scorecard",
        body:
          "TTFT, throughput, sustained concurrency, failure rate, GPU memory, and cost per run have not yet been published as one reproducible dataset.",
        state: "pending",
      },
    ],
    measurementPlan: [
      "PoC setup lead time: baseline vs. AIOps-assisted delivery",
      "Successful compile, preparation, and evaluation rate",
      "p50/p95 TTFT, throughput, concurrency, and failure rate by model profile",
      "Completed PoCs, active consultants, reuse rate, and operator corrections",
    ],
    technologies: [
      "Python",
      "LangGraph",
      "FastAPI",
      "vLLM",
      "PostgreSQL",
      "Qdrant",
      "Next.js",
      "Docker",
      "NVFP4",
      "FlashAttention 4",
    ],
    repositoryNote:
      "The implementation repository is currently not publicly accessible. A repository link will only be restored after anonymous-access verification; redacted architecture and benchmark evidence are the planned public artifacts.",
    evidenceBoundary:
      "The portfolio claims active internal use and implemented serving profiles. It does not claim production-scale load, public benchmark reproducibility, or quantified adoption yet.",
  },
  {
    slug: "audit",
    index: "02",
    theme: "olive",
    portfolioTrack: "AI SOLUTIONS ARCHITECTURE / GOVTECH",
    kicker: "REGULATED AI / GOVTECH",
    title: "AI Automated Daily Audit",
    subtitle: "Evidence-grounded review for Korean public procurement",
    status: "Institutional beta",
    statusDetail: "Internal validation complete; institutional beta in progress",
    lede:
      "Korean public institutions must review contracts against changing laws and internal rules. Manual review creates a bottleneck; a free-form LLM answer creates unacceptable authority risk.",
    problem:
      "The system had to shorten a multi-hour review without allowing an LLM to decide compliance, hide missing evidence, or evaluate a document against an untraceable version of the rules.",
    role: "Solution architecture and full-stack engineering",
    team: "Built independently; validating with a demand-side institution",
    ownership:
      "Document pipeline, RAG and graph retrieval, decision workflow, backend, frontend, model serving, security, evaluation, and deployment",
    duration: "Internal validation complete; beta in progress",
    environment: "Korean HWP/HWPX, PDF, and DOCX review workflow",
    metrics: [
      { value: "Hours → ≈5 min", label: "internal validation cycle" },
      { value: "Beta", label: "demand-side institution" },
      { value: "Fail-closed", label: "insufficient evidence" },
      { value: "Human release", label: "authenticated approval" },
    ],
    constraints: [
      "Bind every finding to the exact version of laws, rules, source files, and retrieval generation used for the review.",
      "Support Korean HWP/HWPX, PDF, and DOCX evidence without allowing parsing gaps to become silent compliance decisions.",
      "Keep LLM output advisory: deterministic policy and an authenticated reviewer retain decision and release authority.",
      "Fail closed when required obligations, evidence, qualification, or runtime identity are incomplete.",
    ],
    flow: [
      "Versioned rules",
      "Dual retrieval",
      "Evidence graph",
      "Deterministic decision",
      "Human release",
    ],
    architectureNote:
      "The LLM may propose schema-bound candidates. Versioned policy, evidence acceptance, readiness, findings, and release remain deterministic or authenticated-human authority.",
    scenario: {
      title: "From contract package to reviewer-approved finding",
      summary:
        "A review run pins its policy generation and source hashes before retrieval. Contract-driven and obligation-driven searches build an evidence graph; the model proposes candidates, deterministic policy decides whether evidence is sufficient, and an authenticated reviewer releases the result.",
      steps: [
        "Ingest the contract package and freeze document hashes, policy generation, and audit-ready bundle.",
        "Run target-driven and rule-driven retrieval using dense, sparse, ColBERT, and reranking signals.",
        "Bind accepted passages to obligations and preserve lineage in ProofRecords and an immutable run snapshot.",
        "Downgrade unsupported model proposals to review-required or insufficient-evidence states.",
        "Require an authenticated human reviewer to release the final review package.",
      ],
    },
    decisions: [
      {
        label: "SOURCE TRUTH",
        title: "Pin every result to the rules used at review time.",
        body:
          "Exact-generation retrieval, versioned rule bundles, source hashes, obligation ledgers, evidence bindings, and immutable run snapshots preserve the basis of each review.",
      },
      {
        label: "DUAL RETRIEVAL",
        title: "Search from both the contract and the obligation.",
        body:
          "Target-driven and rule-driven retrieval reduce the chance that a missing phrase or unfamiliar document structure silently removes a required review path.",
      },
      {
        label: "AUTHORITY",
        title: "The model cannot declare compliance.",
        body:
          "Model output remains a candidate. Backend policy accepts or rejects evidence, produces explicit insufficient-evidence states, and keeps authenticated human release as the final product authority.",
      },
      {
        label: "QUALIFICATION",
        title: "Separate a working beta from production proof.",
        body:
          "Internal validation and institutional beta are real milestones. Signed heterogeneous HWPX gold, repeated qualification runs, reviewer agreement, and production admission remain open gates.",
      },
    ],
    evidence: [
      {
        label: "Workflow",
        value:
          "The current implementation contains versioned corpus and target evidence planes, deterministic decision boundaries, immutable proof records, and authenticated human release.",
        state: "confirmed",
      },
      {
        label: "Cycle time",
        value:
          "A representative internal-validation cycle was reduced from hours to approximately five minutes. Sample definition and distribution are not yet published.",
        state: "bounded",
      },
      {
        label: "Beta",
        value:
          "Internal validation is complete and beta testing with a demand-side institution is underway.",
        state: "confirmed",
      },
      {
        label: "Production",
        value:
          "Production qualification is blocked pending signed heterogeneous gold, repeated isolated runs, and exact runtime admission.",
        state: "open",
      },
    ],
    artifacts: [
      {
        title: "Versioned evidence plane",
        body:
          "Source generations, document hashes, obligation ledgers, evidence bindings, and immutable run snapshots preserve the basis of each review.",
        state: "implemented",
      },
      {
        title: "Fail-closed decision engine",
        body:
          "Planning matrices, evidence qualification, deterministic decisions, and authenticated release keep model output outside compliance authority.",
        state: "implemented",
      },
      {
        title: "Beta workflow package",
        body:
          "Internal validation is complete and a demand-side institution is testing the review-assist workflow. Institution, document, and reviewer details remain confidential.",
        state: "available",
      },
      {
        title: "Production qualification pack",
        body:
          "Signed heterogeneous gold documents, repeated isolated runs, reviewer agreement, and exact runtime admission remain required before production qualification.",
        state: "pending",
      },
    ],
    measurementPlan: [
      "Cycle-time methodology: document class, page count, baseline, n, median, and p95",
      "Reviewer agreement and human correction time",
      "Required-obligation coverage and unsupported-claim rate",
      "Insufficient-evidence precision and production qualification gates",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Neo4j",
      "vLLM",
      "BGE-M3",
      "Reranking",
      "Next.js",
      "Docker",
    ],
    repositoryNote: "Private repository — architecture evidence available in a redacted review",
    evidenceBoundary:
      "The five-minute result is an internal-validation observation, not a production SLA. Beta accuracy, reviewer agreement, and production qualification remain explicitly open.",
  },
  {
    slug: "shakespeare",
    index: "03",
    theme: "orange",
    portfolioTrack: "AI PRODUCT DELIVERY / FIELD SYSTEMS",
    kicker: "PUBLIC EXPERIENCE / EDGE AI",
    title: "AI Shakespeare",
    subtitle: "A field-ready generative theatre kiosk for Daehak-ro",
    status: "Field launch scheduled",
    statusDetail: "On-site installation planned for August 2026",
    lede:
      "For the Seoul Foundation for Arts and Culture, I built a kiosk that turns a visitor’s characters and personal situation into a short one-scene play they can read and take home as an 80 mm receipt.",
    problem:
      "The experience had to feel immediate and playful in a public venue while surviving rate limits, overlapping sessions, abandoned requests, local restarts, printer constraints, and nontechnical operations.",
    role: "Product architecture and desktop engineering",
    team: "Built independently for the foundation; foundation owns post-launch operations",
    ownership:
      "Kiosk UX, Electron application, generation flow, secure configuration, SQLite, receipt printing, Windows packaging, and operator handoff",
    duration: "On-site launch scheduled for August 2026",
    environment: "Windows Electron kiosk with silent 80 mm thermal printing",
    metrics: [
      { value: "August 2026", label: "scheduled field launch" },
      { value: "Windows", label: "self-contained desktop app" },
      { value: "80 mm", label: "thermal receipt" },
      { value: "85 sec", label: "per-attempt timeout" },
    ],
    constraints: [
      "Keep a public kiosk responsive under provider rate limits and repeated visitor sessions.",
      "Operate on Windows with silent 80 mm thermal printing and a handoff suitable for nontechnical operators.",
      "Keep API credentials and administrator authority outside the visitor renderer.",
      "Preserve request and generation outcomes across local restarts while treating print telemetry as a current limitation.",
    ],
    flow: [
      "Visitor story",
      "Serialized generation",
      "Local request ledger",
      "Receipt print",
      "Satisfaction",
    ],
    architectureNote:
      "An Electron field application serializes generation through a single-flight queue, applies an 85-second timeout to each provider attempt, persists request and generation state locally, and sends a bounded receipt to the selected Windows printer.",
    scenario: {
      title: "From a visitor’s story to a take-home play",
      summary:
        "The visitor enters characters and a personal situation. The desktop process queues one generation at a time, applies bounded timeout and retry behavior, stores the request outcome, and prints the generated one-scene play as an 80 mm receipt.",
      steps: [
        "Collect the visitor’s characters and situation through the sandboxed renderer.",
        "Submit one active generation through the main-process queue with per-attempt timeout and bounded retry.",
        "Persist request, generated play or error, and later satisfaction state in local SQLite.",
        "Render a bounded receipt in a secured hidden print window and send it to the selected Windows printer.",
        "Return the kiosk to the next session; field reliability and visitor outcomes will be measured after installation.",
      ],
    },
    decisions: [
      {
        label: "CONCURRENCY",
        title: "Serialize the public experience.",
        body:
          "Consecutive use exposed overlapping sessions and rate-limit amplification. A promise queue permits one active generation, while per-attempt timeout and bounded retries prevent an unlimited provider wait. Session-abandon cancellation is not claimed.",
      },
      {
        label: "PERSISTENCE",
        title: "Persist what the current ledger actually observes.",
        body:
          "The local SQLite store records the request, generated result or error, and satisfaction state. The successful result update uses an immediate transaction; physical print outcome is not yet recorded as durable telemetry.",
      },
      {
        label: "FIELD DEPLOYMENT",
        title: "Package the experience as a Windows desktop product.",
        body:
          "The installed application runs without a local web server, Docker, Node.js installation, or an external database. Electron Builder produces an NSIS installer containing the compiled desktop processes, static visitor interface, and field assets.",
      },
      {
        label: "SECURITY",
        title: "Keep secrets and authority outside the renderer.",
        body:
          "API keys use OS-backed secure storage, administrator credentials use scrypt, the renderer is sandboxed behind a restrictive CSP, and operator access is separated from the visitor surface.",
      },
    ],
    evidence: [
      {
        label: "Application",
        value:
          "The sanitized Electron snapshot confirms the 85-second timeout, OS-backed key storage, scrypt credentials, sandboxing, CSP, local ledger, and 80 mm print configuration.",
        state: "confirmed",
      },
      {
        label: "Packaging",
        value:
          "The repository confirms the NSIS Windows packaging configuration and its bounded application files. The release binary, public checksum, and clean-machine smoke-test record are not committed to the sanitized repository.",
        state: "bounded",
      },
      {
        label: "Retention",
        value:
          "Six-month visitor-record retention is an operator policy. Automatic code-enforced deletion is not claimed in the sanitized snapshot.",
        state: "bounded",
      },
      {
        label: "Field outcomes",
        value:
          "Visitor volume, physical print success, satisfaction, and incident metrics remain pending until the August installation.",
        state: "open",
      },
    ],
    artifacts: [
      {
        title: "Sanitized Electron application",
        body:
          "The code confirms the single-flight generation queue, per-attempt timeout, bounded retry, secure configuration, SQLite state, and 80 mm print path.",
        state: "implemented",
      },
      {
        title: "Security boundary",
        body:
          "OS-backed secret storage, scrypt administrator credentials, restrictive CSP, context isolation, and renderer sandboxing are implemented.",
        state: "implemented",
      },
      {
        title: "Field installer",
        body:
          "The NSIS Windows release target is configured for field installation. A public checksum, clean-machine installation record, and smoke-test evidence are not attached yet.",
        state: "available",
      },
      {
        title: "Field outcome report",
        body:
          "Visitor completion, physical print success, latency distribution, satisfaction, and incident recovery remain pending until the August 2026 installation.",
        state: "pending",
      },
    ],
    measurementPlan: [
      "Completed-generation and physical print-success rate",
      "p50/p95 end-to-end generation time",
      "Visitor satisfaction and completion funnel",
      "Field incidents, recovery time, and retention-policy audit",
    ],
    technologies: [
      "Electron",
      "TypeScript",
      "SQLite",
      "OpenAI API",
      "Windows",
      "NSIS",
      "Thermal Print",
      "CSP",
    ],
    repositoryNote:
      "The sanitized implementation is not currently reachable through an anonymously verified public repository. The portfolio therefore describes the reviewed code without presenting a broken repository CTA.",
    evidenceBoundary:
      "The application code and operator-confirmed installer are distinct evidence levels. On-site printer reliability, visitor outcomes, and satisfaction are not claimed before the August launch.",
  },
];

export function getProject(slug: Project["slug"]) {
  return projects.find((project) => project.slug === slug)!;
}
