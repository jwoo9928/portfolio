import type { Metadata } from "next";
import Link from "next/link";
import { projectsKo, type Project } from "../../portfolio-data";
import { PrintButton } from "./print-button";
import styles from "./career-page.module.css";

export const metadata: Metadata = {
  title: "한국 지원용 경력기술서",
  description:
    "박재우의 AI Agent Engineering, AI Solutions Architecture, 모델 서빙, 모바일·Web3 제품 개발 경력을 정리한 한국 지원용 경력기술서입니다.",
  alternates: {
    canonical: "/ko/career",
  },
  openGraph: {
    locale: "ko_KR",
    url: "/ko/career",
    title: "박재우 — AI Agent Engineer · AI Solutions Architect 경력기술서",
    description:
      "업무 요구사항 분석부터 AI 아키텍처, 제품 개발, 배포와 운영 인계까지 연결한 전체 경력기술서",
    images: ["/og.png"],
  },
};

const careerRecords = [
  {
    company: "서울AI재단",
    role: "AI Agent Engineer · AI Solutions Architect",
    period: "2025.10 – 현재",
    location: "서울 · 정규직",
    summary:
      "공공·행정기관과 내부 컨설팅 조직의 업무 요구를 분석해 AI 적용 범위와 검증 방법, 운영 제약을 정의하고, 이를 실제로 사용할 수 있는 에이전트 시스템과 AI 제품으로 구현합니다.",
    duties: [
      "기관 업무 요구사항 분석 및 AI 전환 과제 기획",
      "AI 서비스 기획 및 운영 조건을 반영한 솔루션 아키텍처 설계",
      "멀티에이전트 시스템, 평가 흐름, AI 서비스와 운영 도구 개발",
      "재단 AI 모델의 서빙·평가·배포 및 GPU 운영 환경 관리",
      "사용자 검증, 실증 결과 정리, 배포와 운영 인계",
    ],
    outputs: [
      "AIOps-PoC · 컨설팅 실사용",
      "AI 자동 일상감사 시스템 · 수요기관 베타 검증",
      "AI 셰익스피어 · 2026년 8월 현장 설치 예정",
    ],
  },
  {
    company: "ICT Global Internship Program",
    role: "Software Development Intern",
    period: "2024.07 – 2024.09",
    location: "미국 캘리포니아 새너제이 · 인턴",
    summary:
      "영어 교사의 수작업 첨삭이 교사 일정과 높은 첨삭 수당에 의존하고, 담당 교사가 바뀔 때마다 결과의 기준도 달라지는 문제를 분석했습니다. 학생이 필요할 때 일관된 1차 피드백을 받을 수 있는 AI 영작문 자동 첨삭 서비스로 업무 흐름을 전환했습니다.",
    duties: [
      "기존 교사 첨삭 과정과 학생 제출·결과 확인 흐름 분석",
      "AI 첨삭 기준, 결과 구조와 사용자 경험 설계",
      "LLM 연동 및 Next.js 웹서비스 개발",
      "사용자 흐름 테스트와 서비스 배포",
    ],
    outputs: ["AI 영작문 자동 첨삭 서비스 · 요구사항 분석부터 배포까지 수행"],
  },
  {
    company: "충남대학교",
    role: "웹 개발 Teaching Assistant",
    period: "2023.06 – 2023.11",
    location: "대전 · 하이브리드",
    summary:
      "충남대학교 소프트웨어 아카데미 웹 개발 교육의 운영과 학습자 기술 지원을 담당했습니다.",
    duties: [
      "웹 개발 수업 운영과 학습 진행 관리",
      "과제·코드 검토와 기술 질의응답",
      "오류 재현, 디버깅과 구현 방향 안내",
    ],
    outputs: ["충남대학교 소프트웨어 아카데미 3기 웹 개발 교육 지원"],
  },
  {
    company: "PILAB Technology · BIFROST",
    role: "Mobile Engineer",
    period: "2021.11 – 2023.08",
    location: "서울 · 정규직",
    summary:
      "Biport와 Pockie 멀티체인 지갑의 모바일 개발을 주도했습니다. 여러 니모닉과 네트워크, 전송 상태를 안전하게 다뤄야 하는 지갑 핵심 로직을 모바일 제품에 구현했습니다.",
    duties: [
      "Biport·Pockie React Native 모바일 애플리케이션 개발 주도",
      "복수 니모닉 기반 키 컨트롤러와 계정·네트워크 상태 관리",
      "멀티체인 송금, 트랜잭션 상태 추적과 가스비 최적화",
      "Bifrost 크로스체인 스왑 흐름의 모바일 연동과 유지보수",
    ],
    outputs: ["Biport · Pockie 멀티체인 지갑 모바일 제품"],
  },
  {
    company: "SOLIF",
    role: "Founding Member",
    period: "2022.09 – 2023.05",
    location: "서울 · 하이브리드",
    summary:
      "독서 습관을 지속하기 어려운 사용자를 위해 매달 한 권의 도서와 프롤로그·에필로그 콘텐츠를 제공하는 큐레이션 서비스를 기획하고 초기 운영에 참여했습니다.",
    duties: [
      "사용자 문제와 서비스 요구사항 정의",
      "월간 큐레이션 상품과 이메일 콘텐츠 흐름 기획",
      "초기 서비스 제작과 운영 검증",
    ],
    outputs: ["월간 독서 큐레이션 서비스"],
  },
  {
    company: "NAUEM",
    role: "Founding Member",
    period: "2021.11 – 2022.10",
    location: "경기도 구리 · 하이브리드",
    summary:
      "장애인이 겪는 정보 부족, 사회적 고립과 자립생활의 어려움을 다루는 커뮤니티 서비스를 기획하고 모바일·웹 제품 개발에 참여했습니다.",
    duties: [
      "대상 사용자의 문제와 커뮤니티 요구사항 분석",
      "서비스 구조와 핵심 기능 기획",
      "모바일·웹 초기 제품 개발",
    ],
    outputs: ["장애인 대상 모바일·웹 커뮤니티"],
  },
  {
    company: "dangamsoft",
    role: "Mobile & Web Developer",
    period: "2021.03 – 2021.10",
    location: "서울 · 정규직",
    summary:
      "반려동물 보호자가 일상과 정보를 공유하는 커뮤니티 애플리케이션 Gurumirangi의 모바일 기능을 개발하고 출시했습니다.",
    duties: [
      "React Native 기반 커뮤니티 화면과 사용자 기능 개발",
      "백엔드 API 연동과 상태·오류 처리",
      "모바일 빌드와 출시 대응",
    ],
    outputs: ["Gurumirangi 반려동물 커뮤니티 애플리케이션"],
  },
] as const;

const capabilityGroups = [
  {
    title: "Agentic AI 시스템",
    description:
      "전문 에이전트의 분석 결과를 타입이 정의된 실행 의도로 받고, 결정적 검증과 사람의 승인을 거쳐 런타임에 전달하는 구조",
    evidence: "AIOps-PoC",
    keywords:
      "Multi-agent orchestration · DeepAgents · LangGraph · Typed intent · Human approval · Runtime contract",
  },
  {
    title: "AI 솔루션 아키텍처",
    description:
      "기관의 업무, 데이터, 사용자, 규정, 인프라 제약을 구조화하고 PoC·제품·운영 인계까지 이어지는 전체 시스템 설계",
    evidence: "AIOps-PoC · 일상감사 · 영작문 · 셰익스피어",
    keywords:
      "Requirements discovery · Workflow redesign · Architecture · Validation · Deployment · Handoff",
  },
  {
    title: "모델 서빙과 평가",
    description:
      "멀티모달 모델을 GPU 환경에 직접 서빙하고 양자화·추론 최적화, 준비 상태 점검, 사용자 평가와 보고 흐름을 운영",
    evidence: "AIOps-PoC",
    keywords:
      "vLLM · A100 · Blackwell · NVFP4 · FlashAttention 4 · Evaluation · Observability",
  },
  {
    title: "근거 기반 AI와 검색",
    description:
      "법령·내규·원문 문서의 버전과 검색 근거를 보존하고, 모델 판단과 코드 규칙, 사람의 승인을 분리한 감사 지원 구조",
    evidence: "AI 자동 일상감사 시스템",
    keywords:
      "Knowledge graph · Neo4j · Qdrant · Hybrid retrieval · Reranking · ProofRecord",
  },
  {
    title: "AI 제품·현장 소프트웨어",
    description:
      "웹서비스뿐 아니라 Windows 키오스크, 로컬 상태, 비밀정보, 프린터와 설치 패키지까지 포함한 현장 제품 구현",
    evidence: "AI 셰익스피어 · AI 영작문 자동 첨삭",
    keywords:
      "Next.js · TypeScript · Electron · SQLite · Windows printing · NSIS",
  },
  {
    title: "모바일·Web3 엔지니어링",
    description:
      "멀티체인 지갑의 키, 계정, 네트워크, 송금과 스왑 상태를 모바일 애플리케이션의 핵심 로직으로 구현",
    evidence: "Biport · Pockie",
    keywords:
      "React Native · TypeScript · Multi-mnemonic · Multichain transfer · Cross-chain swap",
  },
] as const;

const roleEvidence = [
  {
    label: "업무 문제 정의",
    value: "기관 요구와 운영 제약을 AI 시스템 요구사항으로 구조화",
    proof: "4개 AI 프로젝트의 기획·설계",
  },
  {
    label: "에이전트 실행 구조",
    value: "Agent planning과 deterministic runtime 사이의 검증 계약 구현",
    proof: "AIOps-PoC Agent Harness",
  },
  {
    label: "모델 운영",
    value: "GPU 서빙, 모델 준비 상태, 평가와 사용자 검증 흐름 운영",
    proof: "A100 40GB × 8 · RTX PRO 6000",
  },
  {
    label: "현장 전달",
    value: "웹·데스크톱·모바일 제품의 배포와 운영 인계",
    proof: "컨설팅 실사용 · 기관 베타 · 현장 설치",
  },
] as const;

const projectLinks: Record<Project["slug"], string> = {
  aiops: "/ko/work/aiops",
  audit: "/ko/work/audit",
  writing: "/ko/work/writing",
  shakespeare: "/ko/work/shakespeare",
};

function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p>
        <span>{index}</span>
        {label}
      </p>
      <h2>{title}</h2>
      {description ? <p className={styles.sectionDescription}>{description}</p> : null}
    </header>
  );
}

function ProjectRecord({ project }: { project: Project }) {
  return (
    <article
      className={`${styles.projectRecord} ${styles[`project_${project.theme}`]}`}
    >
      <header className={styles.projectHeader}>
        <div>
          <p>
            PROJECT {project.index} · {project.track}
          </p>
          <h3>{project.title}</h3>
          <strong>{project.subtitle}</strong>
        </div>
        <Link href={projectLinks[project.slug]}>
          상세 사례 보기 <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <dl className={styles.projectMeta}>
        <div>
          <dt>기간</dt>
          <dd>{project.period}</dd>
        </div>
        <div>
          <dt>발주·근무</dt>
          <dd>{project.client}</dd>
        </div>
        <div>
          <dt>역할</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>기여도</dt>
          <dd>{project.contribution}</dd>
        </div>
      </dl>

      <div className={styles.problemSolution}>
        <div>
          <p>문제</p>
          <h4>바꿔야 했던 업무 흐름</h4>
          <p>{project.problem}</p>
        </div>
        <div>
          <p>구현</p>
          <h4>설계하고 전달한 시스템</h4>
          <p>{project.overview}</p>
        </div>
      </div>

      <div className={styles.projectSubsection}>
        <h4>핵심 실행 흐름</h4>
        <ol className={styles.flow}>
          {project.flow.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
                {step.tags ? (
                  <small>{step.tags.join(" · ")}</small>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.projectSubsection}>
        <h4>핵심 설계·구현 결정</h4>
        <div className={styles.decisionGrid}>
          {project.focus.map((focus) => (
            <section key={focus.title}>
              <p>{focus.label}</p>
              <h5>{focus.title}</h5>
              <p>{focus.body}</p>
              <ul>
                {focus.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className={styles.projectSubsection}>
        <h4>결과와 확인 가능한 근거</h4>
        <dl className={styles.resultList}>
          {project.results.map((result) => (
            <div key={result.label}>
              <dt>{result.label}</dt>
              <dd>
                <strong>{result.value}</strong>
                <span>{result.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.boundaryRow}>
        <div>
          <h4>성과 해석 범위</h4>
          <ul>
            {project.boundaries.map((boundary) => (
              <li key={boundary}>{boundary}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>기술·역량</h4>
          <p>{project.technologies.join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}

export default function KoreanCareerDocument() {
  return (
    <main className={styles.page} id="top" lang="ko">
      <header className={styles.utilityBar}>
        <Link className={styles.wordmark} href="/ko">
          JAEWOO PARK
        </Link>
        <nav aria-label="경력기술서 목차">
          <a href="#summary">요약</a>
          <a href="#experience">경력</a>
          <a href="#projects">프로젝트</a>
          <a href="#capabilities">기술 역량</a>
        </nav>
        <div>
          <Link href="/ko">포트폴리오</Link>
          <PrintButton />
        </div>
      </header>

      <header className={styles.hero}>
        <p className={styles.kicker}>CAREER DOCUMENT · UPDATED 2026.07.26</p>
        <div className={styles.heroGrid}>
          <div>
            <h1>
              박재우
              <span>AI Agent Engineer · AI Solutions Architect</span>
            </h1>
            <p className={styles.heroLead}>
              기관의 업무 문제와 운영 제약을 분석해 실행 가능한 AI 시스템의
              구조로 바꾸고, 에이전트·모델·서비스를 조합해 배포와 운영
              인계까지 구현합니다.
            </p>
          </div>
          <dl className={styles.contactList}>
            <div>
              <dt>EMAIL</dt>
              <dd>
                <a href="mailto:jwoo9928@gmail.com">jwoo9928@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>PHONE · KR</dt>
              <dd>
                <a href="tel:+8255839928">+82-5583-9928</a>
              </dd>
            </div>
            <div>
              <dt>PHONE · US</dt>
              <dd>
                <a href="tel:+14082109171">+1 408 210-9171</a>
              </dd>
            </div>
            <div>
              <dt>LINKS</dt>
              <dd>
                <a href="https://github.com/jwoo9928">GitHub</a>
                <span> · </span>
                <a href="https://www.linkedin.com/in/jaewoo9928">LinkedIn</a>
              </dd>
            </div>
          </dl>
        </div>
        <dl className={styles.heroFacts}>
          <div>
            <dt>경력</dt>
            <dd>약 4년의 소프트웨어 개발</dd>
          </div>
          <div>
            <dt>현재</dt>
            <dd>서울AI재단 · AI Agent / Solutions Architecture</dd>
          </div>
          <div>
            <dt>제품 범위</dt>
            <dd>Agent · Web · Windows · Mobile · Web3</dd>
          </div>
          <div>
            <dt>전달 범위</dt>
            <dd>요구사항 분석 · 설계 · 개발 · 평가 · 배포 · 운영 인계</dd>
          </div>
        </dl>
      </header>

      <div className={styles.documentLayout}>
        <aside className={styles.sideNav}>
          <p>CONTENTS</p>
          <ol>
            <li>
              <a href="#summary">
                <span>01</span> 직무 요약
              </a>
            </li>
            <li>
              <a href="#experience">
                <span>02</span> 경력
              </a>
            </li>
            <li>
              <a href="#projects">
                <span>03</span> 주요 프로젝트
              </a>
            </li>
            <li>
              <a href="#product">
                <span>04</span> 제품 개발 기반
              </a>
            </li>
            <li>
              <a href="#capabilities">
                <span>05</span> 기술 역량
              </a>
            </li>
            <li>
              <a href="#education">
                <span>06</span> 교육
              </a>
            </li>
          </ol>
          <p className={styles.sideNote}>
            공개 가능한 구현과 검증 결과만 기재했습니다.
          </p>
        </aside>

        <div className={styles.documentBody}>
          <section className={styles.section} id="summary">
            <SectionHeading
              index="01"
              label="ROLE SUMMARY"
              title="직무 요약"
              description="AI 경력만을 4년으로 확장하지 않습니다. 모바일·웹 제품 개발에서 시작한 약 4년의 소프트웨어 엔지니어링 경험 위에, 현재 AI Agent Engineering과 AI Solutions Architecture 역량을 집중해 왔습니다."
            />
            <p className={styles.summaryLead}>
              사용자의 요구를 기능 목록으로 옮기는 데서 끝내지 않습니다. 업무가
              왜 지연되는지, 어떤 근거와 승인 절차가 필요한지, 모델이 틀렸을 때
              시스템이 어떻게 멈춰야 하는지까지 정의한 뒤 작동하는 제품과 운영
              구조로 구현합니다.
            </p>
            <dl className={styles.roleEvidence}>
              {roleEvidence.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <strong>{item.value}</strong>
                    <span>{item.proof}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.section} id="experience">
            <SectionHeading
              index="02"
              label="PROFESSIONAL EXPERIENCE"
              title="경력"
              description="최근 경력부터 역할, 해결한 문제, 담당 범위와 결과물을 함께 정리했습니다."
            />
            <div className={styles.careerTimeline}>
              {careerRecords.map((record) => (
                <article key={`${record.company}-${record.period}`}>
                  <header>
                    <p>{record.period}</p>
                    <div>
                      <h3>{record.company}</h3>
                      <strong>{record.role}</strong>
                      <span>{record.location}</span>
                    </div>
                  </header>
                  <div className={styles.careerContent}>
                    <p>{record.summary}</p>
                    <div>
                      <h4>담당 업무</h4>
                      <ul>
                        {record.duties.map((duty) => (
                          <li key={duty}>{duty}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.outputRow}>
                      <h4>주요 결과물</h4>
                      <p>{record.outputs.join(" · ")}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} id="projects">
            <SectionHeading
              index="03"
              label="SELECTED AI PROJECTS"
              title="주요 AI 프로젝트"
              description="프로젝트명보다 해결한 업무 문제, 실제로 내린 설계 결정, 배포 단계와 확인 가능한 성과를 중심으로 정리했습니다."
            />
            <div className={styles.projectList}>
              {projectsKo.map((project) => (
                <ProjectRecord key={project.slug} project={project} />
              ))}
            </div>
          </section>

          <section className={styles.section} id="product">
            <SectionHeading
              index="04"
              label="PRODUCT ENGINEERING FOUNDATION"
              title="AI 이전부터 이어진 제품 개발 기반"
              description="AI 기능을 시연하는 데 그치지 않고 실제 제품의 상태, 오류, 배포와 사용자 경험까지 구현할 수 있는 기반입니다."
            />
            <div className={styles.productFoundation}>
              <article>
                <p>01 · MOBILE / WEB3</p>
                <h3>Biport·Pockie 멀티체인 지갑</h3>
                <p>
                  복수 니모닉을 다루는 키 컨트롤러와 멀티체인 송금,
                  트랜잭션 추적, 가스비 최적화, Bifrost 크로스체인 스왑을
                  React Native 모바일 제품에 구현했습니다.
                </p>
                <strong>React Native · TypeScript · Key management · Multichain</strong>
              </article>
              <article>
                <p>02 · MOBILE PRODUCT</p>
                <h3>Gurumirangi 반려동물 커뮤니티</h3>
                <p>
                  커뮤니티 화면과 사용자 기능, 백엔드 API 연동, 모바일 상태와
                  오류 처리를 개발하고 실제 출시 과정에 대응했습니다.
                </p>
                <strong>React Native · API integration · Release</strong>
              </article>
              <article>
                <p>03 · EARLY-STAGE PRODUCT</p>
                <h3>SOLIF·NAUEM</h3>
                <p>
                  독서 큐레이션과 장애인 커뮤니티의 사용자 문제를 정의하고,
                  서비스 구조와 핵심 기능을 기획한 뒤 초기 모바일·웹 제품과
                  운영 흐름을 만들었습니다.
                </p>
                <strong>Discovery · Product planning · Mobile / Web</strong>
              </article>
              <article>
                <p>04 · EDUCATION</p>
                <h3>웹 개발 교육 지원</h3>
                <p>
                  학습자의 코드를 검토하고 오류를 재현해 설명하면서, 구현
                  문제를 작은 단위로 분해하고 기술적 판단을 전달하는 경험을
                  쌓았습니다.
                </p>
                <strong>Code review · Debugging · Technical communication</strong>
              </article>
            </div>
          </section>

          <section className={styles.section} id="capabilities">
            <SectionHeading
              index="05"
              label="CAPABILITY MATRIX"
              title="기술 역량"
              description="단순한 기술명 나열이 아니라, 어떤 시스템을 만들 수 있는지와 이를 증명하는 프로젝트를 연결했습니다."
            />
            <div className={styles.capabilityMatrix}>
              {capabilityGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <dl>
                    <div>
                      <dt>근거</dt>
                      <dd>{group.evidence}</dd>
                    </div>
                    <div>
                      <dt>기술</dt>
                      <dd>{group.keywords}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} id="education">
            <SectionHeading
              index="06"
              label="EDUCATION & TRAINING"
              title="교육"
            />
            <div className={styles.educationList}>
              <article>
                <p>대학교</p>
                <h3>충남대학교</h3>
                <strong>컴퓨터융합학부</strong>
              </article>
              <article>
                <p>소프트웨어 교육</p>
                <h3>42 Seoul</h3>
                <strong>1기 Cadet · 2020.02 – 2021.03</strong>
              </article>
            </div>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <p>JAEWOO PARK · CAREER DOCUMENT</p>
          <strong>AI Agent Engineer · AI Solutions Architect</strong>
        </div>
        <div>
          <a href="mailto:jwoo9928@gmail.com">jwoo9928@gmail.com</a>
          <a href="https://github.com/jwoo9928">github.com/jwoo9928</a>
          <a href="#top">맨 위로 ↑</a>
        </div>
      </footer>
    </main>
  );
}
