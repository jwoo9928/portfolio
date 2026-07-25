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
  flow: string[];
  architectureNote: string;
  decisions: Array<{
    label: string;
    title: string;
    body: string;
  }>;
  evidence: EvidenceItem[];
  measurementPlan: string[];
  technologies: string[];
  repository?: string;
  repositoryNote: string;
  demoNote: string;
  evidenceBoundary: string;
};

export const projects: Project[] = [
  {
    slug: "aiops",
    index: "01",
    theme: "blue",
    kicker: "AGENTIC INFRASTRUCTURE",
    title: "AIOps-PoC",
    subtitle: "A reusable control plane for evaluated AI proofs of concept",
    status: "Active internal use",
    statusDetail: "Used by a consulting team",
    lede:
      "Consulting teams repeatedly paid the cost of scoping, designing, and rebuilding AI proofs of concept. I built one bounded lifecycle that turns requirements into an executable, evaluated AI system.",
    problem:
      "A PoC should reduce uncertainty, not create another bespoke software project. The system had to preserve use-case flexibility while preventing agents from silently inventing runtime capabilities, deployment state, or proof.",
    role: "Sole builder",
    team: "Independent delivery; consulting team as operators",
    ownership:
      "Discovery, architecture, agent design, model serving, product engineering, evaluation, deployment, and operations",
    duration: "6 months",
    environment: "8 × A100 40 GB; RTX PRO 6000 Blackwell profile",
    metrics: [
      { value: "6 months", label: "independent build" },
      { value: "In use", label: "consulting workflow" },
      { value: "8 × A100", label: "40 GB serving fleet" },
      { value: "Blackwell", label: "RTX PRO 6000 profile" },
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
    repository: "https://github.com/jwoo9928/AIOps",
    repositoryNote:
      "Public implementation snapshot; deployment benchmark evidence will be published separately.",
    demoNote: "Demo video placeholder — recording pending",
    evidenceBoundary:
      "The portfolio claims active internal use and implemented serving profiles. It does not claim production-scale load, public benchmark reproducibility, or quantified adoption yet.",
  },
  {
    slug: "audit",
    index: "02",
    theme: "olive",
    kicker: "REGULATED AI / GOVTECH",
    title: "AI Automated Daily Audit",
    subtitle: "Evidence-grounded review for Korean public procurement",
    status: "Institutional beta",
    statusDetail: "Production qualification remains blocked",
    lede:
      "Korean public institutions must review contracts against changing laws and internal rules. Manual review creates a bottleneck; a free-form LLM answer creates unacceptable authority risk.",
    problem:
      "The system had to shorten a multi-hour review without allowing an LLM to decide compliance, hide missing evidence, or evaluate a document against an untraceable version of the rules.",
    role: "Sole builder",
    team: "Independent delivery; demand-side institution in beta testing",
    ownership:
      "Requirements, architecture, document pipeline, RAG and graph design, backend, frontend, serving, security, evaluation, deployment, and beta support",
    duration: "Internal validation complete; beta in progress",
    environment: "Korean HWP/HWPX, PDF, and DOCX review workflow",
    metrics: [
      { value: "Hours → ≈5 min", label: "internal validation cycle" },
      { value: "Beta", label: "demand-side institution" },
      { value: "Fail-closed", label: "insufficient evidence" },
      { value: "Human release", label: "authenticated approval" },
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
    demoNote: "Demo video placeholder — recording pending",
    evidenceBoundary:
      "The five-minute result is an internal-validation observation, not a production SLA. Beta accuracy, reviewer agreement, and production qualification remain explicitly open.",
  },
  {
    slug: "shakespeare",
    index: "03",
    theme: "orange",
    kicker: "PUBLIC EXPERIENCE / EDGE AI",
    title: "AI Shakespeare",
    subtitle: "A field-ready generative theatre kiosk for Daehak-ro",
    status: "Field launch scheduled",
    statusDetail: "On-site installation planned for August 2026",
    lede:
      "For the Seoul Foundation for Arts and Culture, I built a kiosk that turns a visitor’s characters and personal situation into a short one-scene play they can read and take home as an 80 mm receipt.",
    problem:
      "The experience had to feel immediate and playful in a public venue while surviving rate limits, overlapping sessions, abandoned requests, local restarts, printer constraints, and nontechnical operations.",
    role: "Sole product and engineering owner",
    team: "Independent development; foundation owns post-launch operations",
    ownership:
      "Experience design, architecture, Electron application, generation flow, local persistence, print path, security, packaging, installation build, and operator handoff",
    duration: "On-site launch scheduled for August 2026",
    environment: "Windows Electron kiosk with silent 80 mm thermal printing",
    metrics: [
      { value: "August 2026", label: "scheduled field launch" },
      { value: "222 MB", label: "installer after RCA" },
      { value: "80 mm", label: "thermal receipt" },
      { value: "85 sec", label: "provider timeout" },
    ],
    flow: [
      "Visitor story",
      "Serialized generation",
      "Transactional ledger",
      "Receipt print",
      "Satisfaction",
    ],
    architectureNote:
      "An Electron-only field surface owns one active generation at a time, cancels abandoned upstream work, commits operational state transactionally, and sends a bounded receipt to the selected Windows printer.",
    decisions: [
      {
        label: "CONCURRENCY",
        title: "Serialize the public experience.",
        body:
          "Consecutive use exposed overlapping sessions and rate-limit amplification. One active generation, upstream cancellation, bounded retries, and session ownership now protect the interaction.",
      },
      {
        label: "PERSISTENCE",
        title: "Treat partial writes as an operational incident.",
        body:
          "The local SQLite ledger records request, result, print, satisfaction, and error state transactionally so a restart cannot silently present incomplete work as a successful visit.",
      },
      {
        label: "PACKAGING RCA",
        title: "1.27 GB was a build-graph bug, not a product requirement.",
        body:
          "Electron build output and package output shared one directory, recursively packaging previous artifacts. Isolating them reduced the verified installer to 222 MB; the sanitized field architecture later removed the embedded Next.js runtime.",
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
          "Build history records the 1,268.53 MB packaging fault, root cause, rebuilt 222 MB installer, hash verification, installation, and launch smoke test.",
        state: "confirmed",
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
    repository: "https://github.com/seoul-ai-foundation/AI-Drama",
    repositoryNote: "Sanitized Electron snapshot",
    demoNote: "Demo video placeholder — recording pending",
    evidenceBoundary:
      "The field build and installer are verified. On-site printer reliability, visitor outcomes, and satisfaction are not claimed before the August launch.",
  },
];

export function getProject(slug: Project["slug"]) {
  return projects.find((project) => project.slug === slug)!;
}
