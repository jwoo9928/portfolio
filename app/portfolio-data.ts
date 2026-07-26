export type Locale = "en" | "ko";
export type ProjectSlug = "aiops" | "audit" | "writing" | "shakespeare";
export type ProjectTheme = "blue" | "green" | "violet" | "orange";

export type ProjectStep = {
  title: string;
  body: string;
  tags?: string[];
};

export type ProjectFocus = {
  label: string;
  title: string;
  body: string;
  items: string[];
};

export type Project = {
  slug: ProjectSlug;
  index: string;
  theme: ProjectTheme;
  track: string;
  title: string;
  subtitle: string;
  status: string;
  statusDetail: string;
  overview: string;
  problem: string;
  client: string;
  workplace: string;
  period: string;
  role: string;
  contribution: string;
  delivery: string;
  metrics: Array<{ value: string; label: string }>;
  chapterTitle: string;
  chapterBody: string;
  flow: ProjectStep[];
  focus: ProjectFocus[];
  results: Array<{ label: string; value: string; note: string }>;
  boundaries: string[];
  technologies: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  duties: string[];
};

export const projects: Project[] = [
  {
    slug: "aiops",
    index: "01",
    theme: "blue",
    track: "AGENT HARNESS · MODEL SERVING",
    title: "AIOps-PoC",
    subtitle:
      "A reusable Agent Harness that runs the full AI proof-of-concept lifecycle",
    status: "In production use",
    statusDetail: "Used in consulting delivery",
    overview:
      "When an institution submits a business problem, specialized agents analyze the domain, data, infrastructure, and evaluation constraints. The system then composes the required AI models into an execution DAG and connects serving, a request-specific Playground, user validation, evaluation, and final reporting.",
    problem:
      "The consulting team repeatedly received AI PoC requests, but outsourcing and rebuilding the architecture for every short validation cycle made each request unnecessarily expensive and slow. A PoC needed a reusable internal delivery system—not another one-off application.",
    client: "Seoul AI Foundation",
    workplace: "Seoul AI Foundation",
    period: "Feb 2026 – Jul 2026",
    role:
      "Requirements analysis, product planning, solution architecture, agent and runtime engineering, full-stack development, model serving, deployment",
    contribution: "Independent build · 100%",
    delivery: "Six-month build · currently used by the consulting team",
    metrics: [
      { value: "6 months", label: "Independent product build" },
      { value: "In use", label: "Consulting delivery workflow" },
      { value: "8 × A100", label: "40 GB GPU serving fleet" },
      { value: "8 stages", label: "Requirement-to-report lifecycle" },
    ],
    chapterTitle: "From institutional requirements to an executable AI PoC",
    chapterBody:
      "The Agent Harness does not run a fixed model workflow. It assembles the right analysis roles, AI capabilities, and execution order for each request, then preserves the same configuration through validation and reporting.",
    flow: [
      {
        title: "Requirement intake",
        body: "Structure the institution’s business problem, data, target outcome, and constraints.",
      },
      {
        title: "Specialist analysis",
        body: "Review the request from domain, data, model, infrastructure, and evaluation perspectives.",
      },
      {
        title: "AI solution design",
        body: "Define the solution functions and the method used to validate feasibility.",
      },
      {
        title: "Model composition",
        body: "Select the AI models and processing techniques required for the problem.",
        tags: [
          "Detection",
          "Pointing",
          "OCR",
          "VLM",
          "Video-to-Text",
          "Embedding",
          "Clustering",
        ],
      },
      {
        title: "Execution DAG",
        body: "Convert selected models and processing steps into nodes, edges, and entry points.",
      },
      {
        title: "Serving & Playground",
        body: "Provision model endpoints, data connections, and a request-specific test environment.",
      },
      {
        title: "User validation",
        body: "Collect institution and consultant tests, quantitative results, and qualitative feedback.",
      },
      {
        title: "Evaluation & report",
        body: "Produce final evaluation and AI validation reports from the accumulated evidence.",
      },
    ],
    focus: [
      {
        label: "AGENT PLANNING",
        title: "RuntimeGraphIntent",
        body:
          "Agents propose the models, processing nodes, data flow, entry points, and fallback paths required to solve the request.",
        items: [
          "Specialized sub-agent analysis",
          "Candidate model and route selection",
          "Typed graph intent output",
        ],
      },
      {
        label: "DETERMINISTIC VALIDATION",
        title: "Graph Intent Compiler",
        body:
          "Code-based rules validate the proposal before any runtime is created. Invalid types, disconnected graphs, unavailable models, or impossible GPU allocations are blocked.",
        items: [
          "I/O type and topology checks",
          "Model readiness and resource checks",
          "Explicit warning and blocking states",
        ],
      },
      {
        label: "RUNTIME CONTRACT",
        title: "ServingPipelineSpec",
        body:
          "Only a validated specification reaches the runtime. A human approves the plan before serving and Playground provisioning begin.",
        items: [
          "Bound models and endpoints",
          "Execution order and resource allocation",
          "Playground and evaluation binding",
        ],
      },
    ],
    results: [
      {
        label: "OPERATING RESULT",
        value: "Consulting delivery",
        note: "The product is used for live AI PoC work rather than retained as a demonstration.",
      },
      {
        label: "DELIVERY MODEL",
        value: "Reusable internal system",
        note: "Repeated external outsourcing and bespoke redevelopment were replaced by a reusable workflow.",
      },
      {
        label: "SERVING",
        value: "A100 + Blackwell",
        note: "Open models are selected, optimized, served, and managed directly for each PoC.",
      },
    ],
    boundaries: [
      "No Laguna incident RCA metric is used as portfolio evidence.",
      "Latency, concurrency, and cost claims remain excluded until a shared benchmark protocol is completed.",
      "Agents propose plans; deterministic contracts and human approval retain execution authority.",
    ],
    technologies: [
      "Multi-agent orchestration",
      "LangGraph",
      "Typed runtime contracts",
      "vLLM",
      "Multimodal pipelines",
      "PostgreSQL",
      "Next.js",
      "A100",
      "RTX PRO 6000 Blackwell",
      "poolside/Laguna-S-2.1",
      "Solar Open 2",
      "Qwen NVFP4",
      "GLM-OCR",
      "LocateAnything",
      "Jina",
      "Nemotron ASR",
      "NVFP4",
      "FlashAttention 4",
    ],
    image: {
      src: "/projects/aiops-plan-approval.png",
      alt: "AIOps-PoC execution plan approval screen",
      caption:
        "Actual PLAN_APPROVAL screen. Runtime provisioning begins only after a person reviews and approves the agent-generated execution plan.",
    },
  },
  {
    slug: "audit",
    index: "02",
    theme: "green",
    track: "REGULATED AI · HUMAN APPROVAL",
    title: "AI Automated Daily Audit",
    subtitle:
      "A source-grounded review system for public-contract pre-audits",
    status: "Institutional beta",
    statusDetail: "Internal validation complete",
    overview:
      "The system reviews public-contract documents against versioned laws and internal regulations, retrieves supporting passages, records accepted evidence, applies deterministic decision rules, and presents a traceable review opinion for authenticated human approval.",
    problem:
      "Daily pre-audits in Korean public institutions depended on manual document review. The work created a bottleneck, took hours, and made it difficult to apply frequently changing laws and internal rules consistently while preserving an explanation for every review opinion.",
    client: "Public-sector validation initiative",
    workplace: "Seoul AI Foundation",
    period: "Institutional beta in progress",
    role:
      "Business analysis, AI transformation planning, solution architecture, retrieval and knowledge system engineering, full-stack development, validation, deployment",
    contribution: "Independent end-to-end delivery · 100%",
    delivery: "Internal validation complete · beta testing with a prospective institution",
    metrics: [
      { value: "Hours → ~5 min", label: "Representative internal validation" },
      { value: "Beta", label: "Institutional user validation" },
      { value: "Versioned", label: "Regulations and source documents" },
      { value: "Human", label: "Authenticated final approval" },
    ],
    chapterTitle: "A review opinion that remains connected to its source",
    chapterBody:
      "The product is designed as review assistance, not an autonomous authority. Retrieval, evidence acceptance, rule evaluation, and human release are separated so that every decision can be traced to the regulation version and source passage used at that moment.",
    flow: [
      {
        title: "Document intake",
        body: "Parse the audit request and HWP/HWPX contract documents into reviewable units.",
      },
      {
        title: "Applicable-rule scope",
        body: "Select the versioned laws, regulations, and internal rules relevant to the request.",
      },
      {
        title: "Hybrid retrieval",
        body: "Combine dense, sparse, ColBERT, BM25, and reranking to locate candidate evidence.",
      },
      {
        title: "Evidence acceptance",
        body: "Preserve source identity, version, passage, and retrieval lineage as a ProofRecord.",
      },
      {
        title: "Decision logic",
        body: "Apply deterministic checks to accepted evidence and draft a review opinion.",
      },
      {
        title: "Human release",
        body: "An authenticated reviewer verifies the evidence and approves the final response.",
      },
    ],
    focus: [
      {
        label: "SOURCE CONTROL",
        title: "Versioned authority",
        body:
          "Regulations and source documents retain their effective version. A later rule update does not silently rewrite the basis of an earlier review.",
        items: [
          "Effective-date and version identity",
          "Document-to-rule relationships",
          "Original passage preservation",
        ],
      },
      {
        label: "EVIDENCE RETRIEVAL",
        title: "ProofRecord chain",
        body:
          "Retrieved text is not treated as a decision by itself. Accepted evidence is stored with its source, position, retrieval route, and review state.",
        items: [
          "Hybrid and bidirectional retrieval",
          "Knowledge-graph relationships",
          "Accepted evidence provenance",
        ],
      },
      {
        label: "DECISION AUTHORITY",
        title: "Deterministic rules + reviewer",
        body:
          "Code-based checks use accepted evidence to construct a review result; the institution’s reviewer retains final release authority.",
        items: [
          "Explainable rule execution",
          "Authenticated approval",
          "Auditable review history",
        ],
      },
    ],
    results: [
      {
        label: "VALIDATION",
        value: "Hours → about 5 minutes",
        note: "Observed in a representative internal validation; not presented as institution-wide production performance.",
      },
      {
        label: "CURRENT STAGE",
        value: "Institutional beta",
        note: "Internal validation is complete and a prospective institution is testing the system.",
      },
      {
        label: "WORKFLOW CHANGE",
        value: "Review assistance",
        note: "The system reduces evidence-finding and draft-review work while retaining human accountability.",
      },
    ],
    boundaries: [
      "The five-minute result is a representative internal validation, not a production-wide SLA.",
      "Institutional beta is in progress; production traffic and adoption metrics are not claimed.",
      "The system supports an auditor’s judgment and does not replace the institution’s legal authority.",
    ],
    technologies: [
      "Knowledge graphs",
      "Hybrid retrieval",
      "Dense · sparse · ColBERT · BM25",
      "Reranking",
      "Neo4j",
      "Qdrant",
      "Proof records",
      "Deterministic decision logic",
      "Human-in-the-loop",
      "HWP/HWPX",
    ],
  },
  {
    slug: "writing",
    index: "03",
    theme: "violet",
    track: "APPLIED LLM · EDUCATION WORKFLOW",
    title: "AI English Writing Feedback",
    subtitle:
      "A web service that standardizes the first-pass review of student writing",
    status: "Delivered",
    statusDetail: "ICT Global Internship · San Jose",
    overview:
      "Students submit English writing through a web service and receive AI-assisted feedback based on a consistent review flow. The product was designed to reduce repeated first-pass correction work while leaving expert teaching judgment outside the system’s claimed scope.",
    problem:
      "Manual corrections depended on when English teachers were available, required a high stipend per review, and took a long time to return. Because the same teacher could not always review every submission, the level and criteria of feedback also varied.",
    client: "ICT Global Internship Program",
    workplace: "San Jose, California",
    period: "Jul 2024 – Sep 2024",
    role:
      "Existing-workflow analysis, AI service planning, correction-flow design, LLM integration, Next.js development, testing, deployment",
    contribution: "End-to-end product delivery",
    delivery: "Internship project delivered in three months",
    metrics: [
      { value: "3 months", label: "Analysis to delivery" },
      { value: "Consistent", label: "First-pass feedback flow" },
      { value: "Web", label: "Student submission and response" },
      { value: "LLM", label: "AI-assisted correction" },
    ],
    chapterTitle: "A consistent first-pass feedback workflow",
    chapterBody:
      "The project began with the operating problem rather than the model. I mapped who submitted writing, why feedback was delayed, where quality varied, and which part of the process could be standardized safely through an LLM-backed service.",
    flow: [
      {
        title: "Writing submission",
        body: "A student submits an English composition through the web interface.",
      },
      {
        title: "Input structuring",
        body: "The service prepares the writing and review context for a consistent correction request.",
      },
      {
        title: "AI-assisted review",
        body: "The LLM produces first-pass feedback through the designed review flow.",
      },
      {
        title: "Feedback delivery",
        body: "The student receives the correction result in the same web experience.",
      },
      {
        title: "Teacher judgment retained",
        body: "The service supports repeated first-pass work without claiming to replace expert instruction.",
      },
    ],
    focus: [
      {
        label: "WORKFLOW ANALYSIS",
        title: "Delay and cost",
        body:
          "The service targeted the repeatable review steps that created teacher workload, high correction stipends, and slow turnaround.",
        items: [
          "Submission-to-feedback journey",
          "Availability-dependent bottleneck",
          "Repeated first-pass work",
        ],
      },
      {
        label: "QUALITY CONSISTENCY",
        title: "Shared review flow",
        body:
          "The correction request and output structure were standardized so that students did not receive entirely different feedback patterns whenever the reviewer changed.",
        items: [
          "Consistent request structure",
          "Repeatable response format",
          "Bounded educational use",
        ],
      },
      {
        label: "PRODUCT DELIVERY",
        title: "LLM-backed web service",
        body:
          "I connected the service design to a working web product, completing the implementation and deployment during the internship.",
        items: [
          "LLM integration",
          "Next.js interface",
          "Testing and deployment",
        ],
      },
    ],
    results: [
      {
        label: "PROCESS CHANGE",
        value: "On-demand first pass",
        note: "Students no longer needed to wait for a teacher’s free time for every initial review step.",
      },
      {
        label: "QUALITY DESIGN",
        value: "Consistent workflow",
        note: "The product applied one designed correction flow instead of changing the review pattern with each available teacher.",
      },
      {
        label: "DELIVERY",
        value: "Working web service",
        note: "Requirements analysis, service planning, implementation, testing, and deployment were completed during the internship.",
      },
    ],
    boundaries: [
      "No unverified user count, accuracy rate, or cost-reduction percentage is claimed.",
      "The system is described as AI-assisted first-pass feedback, not a replacement for an English teacher.",
      "Only the verified technology scope—LLM and Next.js—is published.",
    ],
    technologies: [
      "Applied LLM",
      "Prompt and response flow design",
      "Next.js",
      "TypeScript",
      "Education workflow analysis",
      "Web product delivery",
    ],
  },
  {
    slug: "shakespeare",
    index: "04",
    theme: "orange",
    track: "FIELD AI PRODUCT · WINDOWS",
    title: "AI Shakespeare",
    subtitle:
      "A walk-up AI kiosk that turns a visitor’s story into a printed one-act play",
    status: "Field launch scheduled",
    statusDetail: "Installation planned for Aug 2026",
    overview:
      "Visitors enter a concern or situation, receive a structured one-act play, and take the result away as an 80 mm thermal receipt. The system connects an AI-generated cultural experience to a physical artifact that can operate as a self-contained Windows kiosk.",
    problem:
      "The Seoul Foundation for Arts and Culture wanted to revive cultural participation around Hyehwa and Daehangno, especially among university students. The proposed booth needed to make theatre approachable in a few minutes and produce something tangible that visitors would keep.",
    client: "Seoul Foundation for Arts and Culture",
    workplace: "Seoul AI Foundation",
    period: "Field installation scheduled for Aug 2026",
    role:
      "Requirements analysis, experience planning, product architecture, Electron development, AI integration, printer integration, Windows packaging, installation preparation",
    contribution: "Independent product development · operations handed to the foundation",
    delivery: "On-site installation scheduled for the first week of Aug 2026",
    metrics: [
      { value: "80 mm", label: "Thermal receipt output" },
      { value: "Windows", label: "Self-contained kiosk app" },
      { value: "3 tries", label: "Bounded generation attempts" },
      { value: "Aug 2026", label: "Scheduled field installation" },
    ],
    chapterTitle: "From a visitor’s concern to a physical play",
    chapterBody:
      "The product journey is intentionally short: enter a situation, generate a structured dramatic arc, preview the result, and print it. The engineering work sits behind that simplicity—serialized requests, bounded retries, secure secrets, local state, printer control, and an operator-ready installer.",
    flow: [
      {
        title: "Visitor input",
        body: "Capture a concern, situation, or idea through a walk-up kiosk interface.",
      },
      {
        title: "Structured generation",
        body: "Transform the input into a one-act play with a controlled output structure.",
      },
      {
        title: "Preview",
        body: "Render the generated play in the desktop application before printing.",
      },
      {
        title: "Thermal print",
        body: "Format the play for a hidden Windows print window and an 80 mm receipt printer.",
      },
      {
        title: "Takeaway",
        body: "The visitor leaves with a physical cultural artifact linked to Daehangno’s theatre identity.",
      },
    ],
    focus: [
      {
        label: "FIELD RELIABILITY",
        title: "Bounded desktop runtime",
        body:
          "Requests run sequentially through a Promise queue with an 85-second timeout and at most three attempts, preventing overlapping kiosk sessions from corrupting state.",
        items: [
          "Sequential request processing",
          "85-second timeout",
          "Maximum three attempts",
        ],
      },
      {
        label: "SECURITY & STATE",
        title: "Operator-safe local product",
        body:
          "The Electron app uses sandboxing, Windows safeStorage, scrypt, and local SQLite state so secrets and sessions are not exposed through the public kiosk UI.",
        items: [
          "Sandboxed Electron renderer",
          "Encrypted secret storage",
          "Local SQLite records",
        ],
      },
      {
        label: "PHYSICAL DELIVERY",
        title: "Windows printer integration",
        body:
          "The generated play is converted into a receipt layout, printed through a hidden window, and packaged as an NSIS installer for foundation operators.",
        items: [
          "80 mm receipt layout",
          "Windows print control",
          "NSIS packaging and handoff",
        ],
      },
    ],
    results: [
      {
        label: "PRODUCT",
        value: "End-to-end kiosk",
        note: "Input, generation, preview, local state, printing, and Windows packaging are implemented.",
      },
      {
        label: "FIELD STAGE",
        value: "Installation scheduled",
        note: "The Seoul Foundation for Arts and Culture plans to install and operate the product in Aug 2026.",
      },
      {
        label: "OPERATIONS",
        value: "Foundation handoff",
        note: "I own product development through installation preparation; the cultural foundation owns field operations.",
      },
    ],
    boundaries: [
      "Visitor records are retained for six months by operating policy; automatic six-month deletion is not claimed as implemented code.",
      "Field usage, print success, and visitor-satisfaction metrics will be measured after installation.",
      "The model provider is accessed through an external API; inference is not performed on-device.",
    ],
    technologies: [
      "Electron",
      "TypeScript",
      "OpenAI API",
      "Structured generation",
      "SQLite",
      "Windows safeStorage",
      "scrypt",
      "Thermal printer integration",
      "NSIS",
    ],
    image: {
      src: "/projects/ai-shakespeare-title.jpg",
      alt: "AI Shakespeare product title artwork",
      caption:
        "Title artwork used in the actual Windows kiosk product. The generated one-act play is formatted and printed as an 80 mm thermal receipt.",
    },
  },
];

export const projectsKo: Project[] = [
  {
    ...projects[0],
    track: "AGENT HARNESS · 모델 서빙",
    subtitle: "AI 실증 전 과정을 수행하는 재사용형 Agent Harness",
    status: "컨설팅 실사용",
    statusDetail: "실제 수요기관 AI 실증 업무에 적용",
    overview:
      "수요기관의 요구사항이 입력되면 전문 에이전트가 문제와 제약조건을 분석하고, 해결 전략과 필요한 AI 기술을 도출합니다. 이후 모델과 처리 단계를 실행 DAG로 구성해 모델 서빙, 요청별 Playground 구축, 사용자 검증, 성능 평가와 최종 보고서 작성까지 연결합니다.",
    problem:
      "컨설팅 팀은 AI 서비스 PoC 요청을 반복해서 받았지만, 짧은 실증을 위해 매번 외주를 주거나 설계와 개발을 처음부터 반복하면 비용과 시간이 불필요하게 커졌습니다. 일회성 도구가 아니라 여러 요구사항에 다시 사용할 수 있는 내부 실증 체계가 필요했습니다.",
    client: "서울AI재단",
    workplace: "서울AI재단",
    period: "2026.02 – 2026.07",
    role:
      "기관 요구사항 분석, 서비스 기획, 솔루션 아키텍처 설계, Agent Harness 및 런타임 개발, 모델 서빙, 배포",
    contribution: "단독 구축 · 기여도 100%",
    delivery: "6개월 구축 · 현재 컨설팅 실사용",
    metrics: [
      { value: "6개월", label: "단독 제품 구축" },
      { value: "실사용", label: "컨설팅 업무 적용" },
      { value: "A100 8대", label: "40GB GPU 서빙 환경" },
      { value: "8단계", label: "요구사항부터 보고서까지" },
    ],
    chapterTitle: "수요기관의 요구사항에서 실행 가능한 AI PoC까지",
    chapterBody:
      "AIOps-PoC는 정해진 모델을 실행하는 워크플로 도구가 아닙니다. 요청마다 필요한 분석 역할과 AI 기술, 실행 순서를 새롭게 조합하고, 같은 실행 구성을 사용자 검증과 최종 보고서까지 유지하는 재사용형 Agent Harness입니다.",
    flow: [
      {
        title: "요구사항 접수",
        body: "수요기관의 업무 문제와 데이터, 목표, 제약조건을 구조화합니다.",
      },
      {
        title: "전문 에이전트 분석",
        body: "도메인·데이터·모델·인프라·평가 관점에서 요구사항을 검토합니다.",
      },
      {
        title: "AI 솔루션 설계",
        body: "문제 해결 전략과 기능 구성, 실증 방법을 설계합니다.",
      },
      {
        title: "모델 및 기술 조합",
        body: "문제에 필요한 AI 모델과 처리 기술을 선택합니다.",
        tags: [
          "Detection",
          "Pointing",
          "OCR",
          "VLM",
          "Video-to-Text",
          "Embedding",
          "Clustering",
        ],
      },
      {
        title: "실행 DAG 생성",
        body: "모델과 처리 단계를 노드와 엣지, 진입점으로 변환합니다.",
      },
      {
        title: "서빙·Playground 구성",
        body: "모델 엔드포인트와 데이터 연결, 요청별 테스트 환경을 구축합니다.",
      },
      {
        title: "사용자 검증",
        body: "수요기관과 컨설턴트의 테스트, 정량 평가, 피드백을 수집합니다.",
      },
      {
        title: "평가·보고서",
        body: "축적된 근거로 최종 평가 보고서와 AI 실증 결과 보고서를 작성합니다.",
      },
    ],
    focus: [
      {
        label: "AGENT PLANNING",
        title: "RuntimeGraphIntent",
        body:
          "전문 에이전트가 문제 해결에 필요한 모델과 처리 노드, 데이터 흐름, 진입점과 대체 경로를 제안합니다.",
        items: [
          "전문 Sub-agent 분석",
          "후보 모델·처리 경로 선정",
          "타입이 정의된 그래프 의도",
        ],
      },
      {
        label: "DETERMINISTIC VALIDATION",
        title: "Graph Intent Compiler",
        body:
          "실행 전 코드 규칙으로 입력·출력 타입과 DAG 구조, 모델 준비 상태, GPU 자원 제약을 검사합니다. 실행할 수 없는 계획은 명시적으로 차단합니다.",
        items: [
          "타입 호환성·그래프 구조 검증",
          "모델 준비 상태·자원 검증",
          "경고·차단 상태 분류",
        ],
      },
      {
        label: "RUNTIME CONTRACT",
        title: "ServingPipelineSpec",
        body:
          "검증을 통과한 실행 명세만 런타임으로 전달합니다. 담당자가 계획을 승인한 뒤에만 모델 서빙과 Playground 구축을 시작합니다.",
        items: [
          "확정 모델·엔드포인트",
          "실행 순서·자원 할당",
          "Playground·평가 연결",
        ],
      },
    ],
    results: [
      {
        label: "운영 결과",
        value: "컨설팅 실사용",
        note: "데모에 그치지 않고 실제 수요기관 AI 실증 업무에 사용하고 있습니다.",
      },
      {
        label: "업무 전환",
        value: "재사용형 내부 체계",
        note: "외주와 개별 재개발을 반복하던 방식을 하나의 재사용형 실증 흐름으로 전환했습니다.",
      },
      {
        label: "모델 운영",
        value: "A100 + Blackwell",
        note: "PoC에 필요한 오픈 모델을 직접 비교하고 최적화해 서빙·관리합니다.",
      },
    ],
    boundaries: [
      "Laguna 장애 RCA 수치는 포트폴리오 근거에서 제외했습니다.",
      "동시성·지연시간·비용 수치는 공통 벤치마크가 완료되기 전까지 성과로 제시하지 않습니다.",
      "에이전트는 계획을 제안하고, 코드 계약과 사람의 승인이 실행 권한을 유지합니다.",
    ],
    image: {
      ...projects[0].image!,
      alt: "AIOps-PoC 실행 계획 승인 화면",
      caption:
        "실제 PLAN_APPROVAL 화면입니다. 담당자가 에이전트가 작성한 실행 계획을 검토하고 승인한 뒤에만 런타임 구성 단계로 이동합니다.",
    },
  },
  {
    ...projects[1],
    track: "규제 업무 AI · 사람의 최종 승인",
    title: "AI 자동 일상감사 시스템",
    subtitle: "법령·내규와 감사 의견을 근거 단위로 연결하는 공공계약 검토 시스템",
    status: "수요기관 베타 검증",
    statusDetail: "내부 실증 완료",
    overview:
      "감사 대상 문서를 적용 시점에 맞는 법령·내규와 대조하고, 관련 조항을 찾아 검토 근거로 구조화합니다. 채택된 근거에 결정 규칙을 적용해 검토 의견을 작성하며, 최종 확정 권한은 인증된 담당자에게 남깁니다.",
    problem:
      "대한민국 공공·행정기관의 일상감사는 담당자가 계약 문서와 최신 법령, 내부 규정을 직접 대조해야 했습니다. 검토에 몇 시간이 걸려 계약 업무가 지연됐고, 자주 바뀌는 규정을 일관되게 반영하면서 각 의견의 근거까지 남기기 어려웠습니다.",
    client: "공공기관 수요 검증 과제",
    workplace: "서울AI재단",
    period: "수요기관 베타 검증 진행 중",
    role:
      "업무 분석, AI 전환 기획, 솔루션 아키텍처 설계, 검색·지식 시스템 개발, 서비스 개발, 검증, 배포",
    contribution: "전 과정 단독 수행 · 기여도 100%",
    delivery: "내부 실증 완료 · 수요기관과 베타테스트 진행 중",
    metrics: [
      { value: "수 시간 → 약 5분", label: "대표 내부 실증 결과" },
      { value: "베타", label: "수요기관 사용자 검증" },
      { value: "버전 관리", label: "법령·내규·원문" },
      { value: "담당자", label: "최종 검토·승인 권한" },
    ],
    chapterTitle: "검토 의견과 원문 근거의 연결",
    chapterBody:
      "이 시스템은 담당자를 대신해 법적 판단을 내리는 자동 감사 도구가 아닙니다. 규정 검색, 근거 채택, 결정 규칙, 최종 승인을 분리해 어떤 시점의 어떤 조항이 검토 의견에 사용됐는지 다시 확인할 수 있도록 설계했습니다.",
    flow: [
      {
        title: "감사 문서 접수",
        body: "감사 요청서와 HWP/HWPX 계약 문서를 검토 가능한 단위로 변환합니다.",
      },
      {
        title: "적용 규정 확정",
        body: "요청 시점과 업무에 맞는 법령·내규 버전을 선택합니다.",
      },
      {
        title: "하이브리드 검색",
        body: "Dense·Sparse·ColBERT·BM25와 재순위화를 조합해 후보 근거를 찾습니다.",
      },
      {
        title: "근거 채택",
        body: "출처와 버전, 원문 위치, 검색 경로를 ProofRecord로 보존합니다.",
      },
      {
        title: "결정 규칙 적용",
        body: "채택된 근거에 코드 규칙을 적용해 검토 의견 초안을 작성합니다.",
      },
      {
        title: "담당자 최종 승인",
        body: "인증된 검토자가 근거와 의견을 확인하고 최종 결과를 확정합니다.",
      },
    ],
    focus: [
      {
        label: "SOURCE CONTROL",
        title: "시점이 보존된 규정",
        body:
          "법령·내규와 원문 문서의 적용 버전을 유지합니다. 규정이 개정돼도 이전 검토에 사용된 근거가 새 조항으로 바뀌지 않습니다.",
        items: [
          "시행일·버전 식별",
          "문서와 규정의 관계",
          "원문 구간 보존",
        ],
      },
      {
        label: "EVIDENCE RETRIEVAL",
        title: "ProofRecord 근거 체계",
        body:
          "검색된 문장을 곧바로 판단으로 사용하지 않습니다. 검토에 채택된 근거의 출처와 위치, 검색 경로, 상태를 함께 기록합니다.",
        items: [
          "복합·양방향 검색",
          "지식그래프 관계",
          "채택 근거의 출처 추적",
        ],
      },
      {
        label: "DECISION AUTHORITY",
        title: "결정 규칙과 담당자 승인",
        body:
          "코드 규칙이 채택된 근거로 검토 결과를 구성하고, 기관 담당자가 최종 확정합니다.",
        items: [
          "설명 가능한 규칙 실행",
          "인증된 담당자 승인",
          "검토 이력 보존",
        ],
      },
    ],
    results: [
      {
        label: "내부 실증",
        value: "수 시간 → 약 5분",
        note: "대표 내부 검증 사례에서 확인한 결과이며, 기관 전체의 운영 SLA로 확대해 표현하지 않습니다.",
      },
      {
        label: "현재 단계",
        value: "수요기관 베타",
        note: "내부 실증을 완료하고 수요기관과 실제 업무 적용 가능성을 검증하고 있습니다.",
      },
      {
        label: "업무 변화",
        value: "근거 중심 검토 지원",
        note: "담당자가 근거를 찾고 의견 초안을 작성하는 시간을 줄이되 최종 책임은 유지합니다.",
      },
    ],
    boundaries: [
      "약 5분은 대표 내부 실증 결과이며 기관 전체 운영 성능을 의미하지 않습니다.",
      "현재 베타 검증 단계이므로 실제 운영 트래픽과 도입률을 성과로 제시하지 않습니다.",
      "담당자의 판단을 지원하는 시스템이며 기관의 법적 권한을 대체하지 않습니다.",
    ],
  },
  {
    ...projects[2],
    track: "교육 업무 AI · LLM 웹서비스",
    title: "AI 영작문 자동 첨삭 서비스",
    subtitle: "학생 영작문의 1차 첨삭 흐름을 일관되게 제공하는 AI 웹서비스",
    status: "프로젝트 완료",
    statusDetail: "ICT Global Internship · San Jose",
    overview:
      "학생이 웹에서 영작문을 제출하면 설계된 첨삭 흐름에 따라 AI가 1차 피드백을 제공합니다. 반복되는 초기 검토 업무를 줄이되, 영어 교사의 전문적인 교육 판단까지 대체한다고 주장하지 않도록 범위를 정했습니다.",
    problem:
      "영어 교사가 영작문을 직접 첨삭하면 결과를 받기까지 오래 걸리고 건별 수당도 높았습니다. 교사가 시간이 날 때마다 처리하다 보니 늘 같은 교사가 맡지 못했고, 첨삭 기준과 결과의 수준도 일정하지 않았습니다.",
    client: "ICT Global Internship Program",
    workplace: "미국 캘리포니아 새너제이",
    period: "2024.07 – 2024.09",
    role:
      "기존 첨삭 업무 분석, AI 서비스 전환 기획, 첨삭 흐름 설계, LLM 연동, Next.js 개발, 테스트, 배포",
    contribution: "요구사항 분석부터 서비스 배포까지 수행",
    delivery: "3개월 인턴십 프로젝트 완료",
    metrics: [
      { value: "3개월", label: "분석부터 배포까지" },
      { value: "일관된 흐름", label: "1차 첨삭 기준" },
      { value: "웹서비스", label: "제출과 결과 확인" },
      { value: "LLM", label: "AI 첨삭 지원" },
    ],
    chapterTitle: "교사의 반복 업무를 줄이는 일관된 1차 첨삭",
    chapterBody:
      "모델부터 선택하지 않고 기존 업무를 먼저 분석했습니다. 누가 글을 제출하는지, 왜 결과가 늦어지는지, 첨삭 품질이 어느 지점에서 달라지는지 확인하고 반복 가능한 1차 검토 범위를 LLM 웹서비스로 전환했습니다.",
    flow: [
      {
        title: "영작문 제출",
        body: "학생이 웹 화면에서 영작문을 제출합니다.",
      },
      {
        title: "입력 구조화",
        body: "일관된 첨삭 요청을 위해 글과 검토 맥락을 정리합니다.",
      },
      {
        title: "AI 1차 첨삭",
        body: "설계된 첨삭 흐름에 따라 LLM이 1차 피드백을 생성합니다.",
      },
      {
        title: "결과 제공",
        body: "학생이 같은 웹서비스에서 첨삭 결과를 확인합니다.",
      },
      {
        title: "교사 판단 유지",
        body: "반복적인 1차 검토를 지원하되 전문적인 교육 판단의 대체로 표현하지 않습니다.",
      },
    ],
    focus: [
      {
        label: "WORKFLOW ANALYSIS",
        title: "대기 시간과 비용",
        body:
          "교사의 가용 시간에 따라 달라지던 처리 속도와 높은 첨삭 수당, 반복되는 1차 검토 업무를 개선 대상으로 정의했습니다.",
        items: [
          "제출부터 피드백까지의 흐름",
          "교사 일정에 따른 병목",
          "반복되는 초기 검토",
        ],
      },
      {
        label: "QUALITY CONSISTENCY",
        title: "공통 첨삭 흐름",
        body:
          "담당 교사가 바뀔 때마다 피드백 방식이 크게 달라지지 않도록 첨삭 요청과 결과 구조를 일관된 흐름으로 설계했습니다.",
        items: [
          "공통 입력 구조",
          "반복 가능한 결과 형식",
          "교육적 활용 범위 설정",
        ],
      },
      {
        label: "PRODUCT DELIVERY",
        title: "LLM 기반 웹서비스",
        body:
          "업무 분석 결과를 실제 제품으로 연결하고, 인턴십 기간 안에 웹서비스 개발과 테스트, 배포를 완료했습니다.",
        items: [
          "LLM 연동",
          "Next.js 화면 개발",
          "테스트와 배포",
        ],
      },
    ],
    results: [
      {
        label: "업무 변화",
        value: "필요할 때 받는 1차 첨삭",
        note: "모든 초기 검토를 교사의 여유 시간까지 기다려야 했던 흐름을 개선했습니다.",
      },
      {
        label: "품질 설계",
        value: "일관된 첨삭 흐름",
        note: "그때 가능한 교사에 따라 첨삭 방식이 달라지는 문제를 공통 서비스 흐름으로 보완했습니다.",
      },
      {
        label: "프로젝트 완료",
        value: "동작하는 웹서비스",
        note: "업무 분석, 서비스 기획, 개발, 테스트, 배포를 인턴십 기간에 수행했습니다.",
      },
    ],
    boundaries: [
      "확인되지 않은 사용자 수, 정확도, 비용 절감률은 제시하지 않습니다.",
      "영어 교사를 대체하는 시스템이 아니라 반복되는 1차 첨삭을 지원하는 서비스로 설명합니다.",
      "검증된 기술 범위인 LLM과 Next.js만 공개합니다.",
    ],
  },
  {
    ...projects[3],
    track: "현장형 AI 제품 · WINDOWS",
    title: "AI 셰익스피어",
    subtitle: "방문자의 이야기를 한 편의 희곡과 80mm 영수증으로 만드는 참여형 키오스크",
    status: "현장 설치 예정",
    statusDetail: "2026년 8월 설치 계획",
    overview:
      "방문자가 고민이나 상황을 입력하면 한 편의 단막 희곡을 만들고, 결과를 80mm 감열 영수증으로 출력해 가져갈 수 있습니다. AI 문화 체험과 물리적 결과물을 하나의 Windows 키오스크 제품으로 구현했습니다.",
    problem:
      "서울문화재단은 침체된 혜화·대학로에서 대학생의 문화 체험률을 높일 방법을 고민했습니다. 짧은 시간 안에 공연 문화를 친근하게 경험하고, 방문자가 직접 만든 결과물을 가져갈 수 있는 부스형 콘텐츠가 필요했습니다.",
    client: "서울문화재단",
    workplace: "서울AI재단",
    period: "2026년 8월 현장 설치 예정",
    role:
      "요구사항 분석, 체험 기획, 제품 아키텍처 설계, Electron 개발, AI 연동, 프린터 연동, Windows 패키징, 설치 준비",
    contribution: "제품 개발 단독 수행 · 설치 후 운영은 서울문화재단",
    delivery: "2026년 8월 첫째 주 현장 설치 예정",
    metrics: [
      { value: "80mm", label: "감열 영수증 출력" },
      { value: "Windows", label: "독립 실행형 키오스크" },
      { value: "최대 3회", label: "제한된 생성 재시도" },
      { value: "2026년 8월", label: "현장 설치 예정" },
    ],
    chapterTitle: "방문자의 고민에서 손에 남는 한 편의 희곡까지",
    chapterBody:
      "사용 흐름은 짧게 유지했습니다. 상황을 입력하고, 구조화된 희곡을 생성하고, 결과를 확인한 뒤 바로 출력합니다. 그 단순한 체험을 위해 요청 직렬화, 제한된 재시도, 비밀정보 보호, 로컬 상태, 프린터 제어와 운영자용 설치 파일을 함께 구현했습니다.",
    flow: [
      {
        title: "방문자 입력",
        body: "키오스크에서 자신의 고민이나 상황, 아이디어를 입력합니다.",
      },
      {
        title: "희곡 생성",
        body: "입력 내용을 정해진 구조의 단막 희곡으로 변환합니다.",
      },
      {
        title: "결과 확인",
        body: "생성된 희곡을 데스크톱 화면에서 확인합니다.",
      },
      {
        title: "감열 출력",
        body: "숨겨진 Windows 인쇄 창에서 80mm 영수증 형식으로 출력합니다.",
      },
      {
        title: "물리적 결과물",
        body: "방문자가 대학로의 공연 정체성이 담긴 희곡을 직접 가져갑니다.",
      },
    ],
    focus: [
      {
        label: "FIELD RELIABILITY",
        title: "제한이 명확한 데스크톱 런타임",
        body:
          "Promise 큐로 요청을 한 번에 하나씩 처리하고, 생성 시간은 85초, 시도 횟수는 최대 세 번으로 제한해 키오스크 세션이 서로 충돌하지 않도록 했습니다.",
        items: [
          "요청 순차 처리",
          "85초 제한 시간",
          "최대 3회 시도",
        ],
      },
      {
        label: "SECURITY & STATE",
        title: "운영자를 고려한 로컬 제품",
        body:
          "Electron 샌드박스, Windows safeStorage, scrypt, SQLite를 사용해 API 비밀정보와 세션 데이터가 공개 키오스크 화면에 노출되지 않도록 구성했습니다.",
        items: [
          "Electron 렌더러 샌드박스",
          "암호화된 비밀정보 저장",
          "SQLite 로컬 상태",
        ],
      },
      {
        label: "PHYSICAL DELIVERY",
        title: "Windows 프린터 연동",
        body:
          "희곡을 영수증 레이아웃으로 변환하고 숨겨진 인쇄 창으로 출력하며, 문화재단 운영자가 설치할 수 있도록 NSIS 패키지로 제공합니다.",
        items: [
          "80mm 영수증 레이아웃",
          "Windows 인쇄 제어",
          "NSIS 패키징·인수인계",
        ],
      },
    ],
    results: [
      {
        label: "제품 구현",
        value: "키오스크 전체 흐름",
        note: "입력, 생성, 결과 확인, 로컬 상태, 감열 출력, Windows 패키징을 구현했습니다.",
      },
      {
        label: "현장 단계",
        value: "설치 예정",
        note: "서울문화재단이 2026년 8월 현장에 설치해 운영할 계획입니다.",
      },
      {
        label: "운영 인계",
        value: "문화재단 운영",
        note: "저는 설치 준비까지의 제품 개발을 담당하고, 설치 후 현장 운영은 서울문화재단이 맡습니다.",
      },
    ],
    boundaries: [
      "방문 기록은 운영 정책상 6개월 보관 대상이지만, 6개월 뒤 자동 삭제 기능이 구현됐다고 주장하지 않습니다.",
      "실사용 건수와 출력 성공률, 방문자 만족도는 현장 설치 이후 측정할 항목입니다.",
      "외부 모델 API를 사용하는 제품이며, 기기 내부에서 모델 추론을 수행한다고 표현하지 않습니다.",
    ],
    image: {
      ...projects[3].image!,
      alt: "AI 셰익스피어 실제 제품 타이틀 이미지",
      caption:
        "실제 Windows 키오스크 제품에 사용한 타이틀 이미지입니다. 생성된 단막 희곡은 80mm 감열 영수증 형식으로 편집해 출력합니다.",
    },
  },
];

export const experience: Experience[] = [
  {
    company: "Seoul AI Foundation",
    role: "AI Agent Engineer · AI Solutions Architect",
    period: "Oct 2025 – Present",
    location: "Seoul, Korea",
    duties: [
      "Analyze institutional workflows and define AI transformation opportunities.",
      "Plan AI services and design solution architectures for operating constraints.",
      "Build multi-agent systems, AI services, evaluation flows, and full-stack products.",
      "Serve, evaluate, deploy, and operate the foundation’s AI model infrastructure.",
    ],
  },
  {
    company: "ICT Global Internship Program",
    role: "Software Development Intern",
    period: "Jul 2024 – Sep 2024",
    location: "San Jose, California",
    duties: [
      "Analyzed the manual English-writing correction workflow and planned its AI-assisted service transition.",
      "Designed the correction flow and student submission-to-feedback experience.",
      "Built and deployed the LLM-integrated Next.js web service.",
    ],
  },
  {
    company: "Chungnam National University",
    role: "Teaching Assistant · Web Development",
    period: "Jun 2023 – Nov 2023",
    location: "Daejeon, Korea",
    duties: [
      "Supported web-development course operations, assignment and code review, technical Q&A, debugging, and learner progress.",
    ],
  },
  {
    company: "PILAB Technology · BIFROST",
    role: "Mobile Engineer",
    period: "Nov 2021 – Aug 2023",
    location: "Seoul, Korea",
    duties: [
      "Led React Native development for the Biport and Pockie multichain wallet applications.",
      "Built multi-mnemonic key controllers, multichain transfers, transaction tracking, and gas-fee optimization.",
      "Integrated and maintained Bifrost cross-chain swap flows in the mobile products.",
    ],
  },
  {
    company: "SOLIF · NAUEM",
    role: "Founding Member",
    period: "Nov 2021 – May 2023",
    duties: [
      "Planned and launched an early-stage reading curation service and a mobile/web community for people with disabilities.",
    ],
  },
  {
    company: "dangamsoft",
    role: "Mobile & Web Developer",
    period: "Mar 2021 – Oct 2021",
    location: "Seoul, Korea",
    duties: [
      "Developed and released the Gurumirangi pet-community application with React Native and API integrations.",
    ],
  },
];

export const experienceKo: Experience[] = [
  {
    company: "서울AI재단",
    role: "AI Agent Engineer · AI Solutions Architect",
    period: "2025.10 – 현재",
    location: "대한민국 서울",
    duties: [
      "기관 업무 요구사항 분석 및 AI 전환 기획",
      "AI 서비스 기획 및 솔루션 아키텍처 설계",
      "멀티에이전트 시스템 및 AI 서비스 개발",
      "재단 AI 모델 서빙·평가·배포 및 운영 관리",
    ],
  },
  {
    company: "ICT Global Internship Program",
    role: "Software Development Intern",
    period: "2024.07 – 2024.09",
    location: "미국 캘리포니아 새너제이",
    duties: [
      "기존 영작문 첨삭 업무 분석 및 AI 서비스 전환 기획",
      "AI 영작문 첨삭 기준과 학생 제출·결과 확인 흐름 설계",
      "LLM 연동 및 Next.js 웹서비스 개발·테스트·배포",
    ],
  },
  {
    company: "충남대학교",
    role: "웹 개발 Teaching Assistant",
    period: "2023.06 – 2023.11",
    location: "대한민국 대전",
    duties: [
      "웹 개발 교육 운영, 과제·코드 검토, 기술 질의응답, 디버깅 지원, 학습 진행 관리",
    ],
  },
  {
    company: "PILAB Technology · BIFROST",
    role: "Mobile Engineer",
    period: "2021.11 – 2023.08",
    location: "대한민국 서울",
    duties: [
      "Biport·Pockie 멀티체인 지갑의 React Native 모바일 앱 개발 주도",
      "복수 니모닉 기반 키 컨트롤러, 멀티체인 송금, 트랜잭션 추적, 가스비 최적화 개발",
      "Bifrost 크로스체인 스왑 기능을 모바일 제품에 연동하고 유지보수",
    ],
  },
  {
    company: "SOLIF · NAUEM",
    role: "Founding Member",
    period: "2021.11 – 2023.05",
    duties: [
      "독서 큐레이션 서비스와 장애인 대상 모바일·웹 커뮤니티의 요구사항 분석, 서비스 기획, 초기 제품 개발·운영",
    ],
  },
  {
    company: "dangamsoft",
    role: "Mobile & Web Developer",
    period: "2021.03 – 2021.10",
    location: "대한민국 서울",
    duties: [
      "반려동물 커뮤니티 Gurumirangi의 React Native 앱과 API 연동 기능 개발·출시",
    ],
  },
];

export function getProject(slug: ProjectSlug, locale: Locale = "en") {
  const source = locale === "ko" ? projectsKo : projects;
  const project = source.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
