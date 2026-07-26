import Link from "next/link";
import {
  Arrow,
  Footer,
  SiteNav,
  StatusBadge,
  TechRow,
} from "./components";
import {
  experience,
  experienceKo,
  type Locale,
  type Project,
} from "./portfolio-data";

const homeCopy = {
  en: {
    eyebrow: "AI AGENT ENGINEER · AI SOLUTIONS ARCHITECT",
    title: ["AI systems designed for", "real operating constraints."],
    intro:
      "Software engineer with approximately four years of experience, now specializing in AI Agent Engineering and AI Solutions Architecture. I translate institutional workflows into AI products and deliver the complete path from discovery and architecture through implementation, deployment, and operating handoff.",
    location: "Seoul, Korea · Open to US and global roles",
    viewWork: "View selected work",
    contact: "Contact",
    signals: [
      ["AIOps-PoC", "Consulting delivery in active use"],
      ["AI Automated Daily Audit", "Hours → about 5 minutes in representative internal validation"],
      ["AI Shakespeare", "Field installation scheduled for Aug 2026"],
    ],
    workEyebrow: "SELECTED WORK · 04",
    workTitle: "Four AI products built around four different operating problems.",
    workBody:
      "Each case study starts with the workflow that had to change, then shows the architecture, implementation boundaries, delivery stage, and evidence that can be verified.",
    openCase: "Open case study",
    operatingProblem: "Operating problem",
    delivered: "Delivered",
    roleEyebrow: "ROLE FIT",
    roleTitle: "Architecture decisions backed by working systems.",
    roleBody:
      "The work covers the two target roles without separating design from implementation: agent runtime engineering, model operations, customer and institutional discovery, solution architecture, evaluation, deployment, and handoff.",
    roles: [
      {
        label: "AI AGENT ENGINEER",
        title: "Agent planning through controlled execution",
        body:
          "Specialized agents, typed intent, deterministic graph compilation, human approval, runtime contracts, evaluation, and model serving.",
        proof: "Primary evidence: AIOps-PoC",
        href: "/work/aiops",
      },
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "Business workflow through deployed product",
        body:
          "Requirements discovery, process redesign, reference architecture, risk boundaries, full-stack delivery, user validation, and operating handoff.",
        proof: "Primary evidence: Audit · Writing · Shakespeare",
        href: "/work/audit",
      },
    ],
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Software engineering foundation, applied to AI systems.",
    experienceBody:
      "Approximately four years of software engineering experience across AI platforms, mobile products, web services, Web3 infrastructure, and education.",
    education:
      "Education · Chungnam National University, Division of Computer Convergence · 42 Seoul, 1st Cadet",
    contactEyebrow: "CONTACT",
    contactTitle: "Build the system that makes the workflow possible.",
    contactBody:
      "Target roles: AI Agent Engineer and AI Solutions Architect.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    demo: "Demo videos will be added",
  },
  ko: {
    eyebrow: "AI AGENT ENGINEER · AI SOLUTIONS ARCHITECT",
    title: ["현장의 제약까지 고려한", "AI 시스템을 만듭니다."],
    intro:
      "약 4년의 소프트웨어 개발 경력을 바탕으로, 현재 AI Agent Engineering과 AI Solutions Architecture를 중심으로 일하고 있습니다. 기관의 업무 요구사항을 분석해 AI 제품의 구조를 설계하고, 기획과 개발부터 배포, 검증, 운영 인계까지 직접 수행합니다.",
    location: "대한민국 서울 · 미국 및 글로벌 포지션 지원",
    viewWork: "프로젝트 보기",
    contact: "연락하기",
    signals: [
      ["AIOps-PoC", "컨설팅 실사용"],
      ["AI 자동 일상감사", "대표 내부 실증에서 수 시간 → 약 5분"],
      ["AI 셰익스피어", "2026년 8월 현장 설치 예정"],
    ],
    workEyebrow: "주요 프로젝트 · 04",
    workTitle: "서로 다른 네 가지 업무 문제를 해결한 AI 제품",
    workBody:
      "각 프로젝트는 바꿔야 했던 업무 흐름에서 시작합니다. 그다음 실제 아키텍처와 구현 범위, 배포 단계, 확인 가능한 결과를 구분해 설명합니다.",
    openCase: "프로젝트 상세 보기",
    operatingProblem: "해결한 업무 문제",
    delivered: "구현 결과",
    roleEyebrow: "직무 적합성",
    roleTitle: "작동하는 시스템으로 증명한 아키텍처 역량",
    roleBody:
      "두 목표 직무를 설계와 구현으로 분리하지 않습니다. 에이전트 런타임, 모델 운영, 기관 요구사항 분석, 솔루션 설계, 평가, 배포와 운영 인계를 하나의 프로젝트 안에서 수행했습니다.",
    roles: [
      {
        label: "AI AGENT ENGINEER",
        title: "에이전트 계획부터 통제된 실행까지",
        body:
          "전문 에이전트, 타입이 정의된 실행 의도, 결정적 그래프 컴파일, 사람의 승인, 런타임 계약, 평가와 모델 서빙을 구현했습니다.",
        proof: "대표 근거: AIOps-PoC",
        href: "/ko/work/aiops",
      },
      {
        label: "AI SOLUTIONS ARCHITECT",
        title: "업무 문제부터 배포된 제품까지",
        body:
          "요구사항 분석, 업무 재설계, 솔루션 아키텍처, 위험 범위 설정, 서비스 개발, 사용자 검증과 운영 인계를 수행했습니다.",
        proof: "대표 근거: 일상감사 · 영작문 · 셰익스피어",
        href: "/ko/work/audit",
      },
    ],
    experienceEyebrow: "경력",
    experienceTitle: "소프트웨어 엔지니어링 경험을 AI 시스템으로 확장했습니다.",
    experienceBody:
      "약 4년 동안 AI 플랫폼, 모바일 제품, 웹서비스, Web3 인프라, 교육 분야에서 소프트웨어를 개발했습니다.",
    education:
      "교육 · 충남대학교 컴퓨터융합학부 · 42 Seoul 1기 Cadet",
    contactEyebrow: "연락처",
    contactTitle: "업무가 실제로 바뀌는 시스템을 함께 만들겠습니다.",
    contactBody:
      "목표 직무: AI Agent Engineer · AI Solutions Architect",
    email: "이메일",
    linkedin: "LinkedIn",
    github: "GitHub",
    demo: "데모 영상은 추후 추가 예정",
  },
} as const;

export function HomePage({
  locale = "en",
  projects,
}: {
  locale?: Locale;
  projects: Project[];
}) {
  const copy = homeCopy[locale];
  const careers = locale === "ko" ? experienceKo : experience;
  const prefix = locale === "ko" ? "/ko" : "";

  return (
    <main id="top" lang={locale}>
      <SiteNav locale={locale} />

      <header className="home-hero">
        <div className="hero-main">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-intro">{copy.intro}</p>
          <p className="hero-location">{copy.location}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {copy.viewWork} <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#contact">
              {copy.contact}
            </a>
          </div>
        </div>
        <aside className="hero-signal" aria-label="Selected delivery results">
          <p>DELIVERY SIGNALS · 2026</p>
          <ol>
            {copy.signals.map(([title, detail], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </header>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">{copy.workEyebrow}</p>
          <h2>{copy.workTitle}</h2>
          <p>{copy.workBody}</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card theme-${project.theme}`}
              key={project.slug}
            >
              <div className="project-card-top">
                <span className="project-index">{project.index}</span>
                <span className="project-track">{project.track}</span>
                <StatusBadge project={project} />
              </div>
              <div className="project-card-title">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
              <div className="project-card-body">
                <div>
                  <p className="detail-label">{copy.operatingProblem}</p>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <p className="detail-label">{copy.delivered}</p>
                  <p>{project.overview}</p>
                </div>
              </div>
              <div className="project-card-footer">
                <TechRow items={project.technologies.slice(0, 5)} />
                <Link href={`${prefix}/work/${project.slug}`}>
                  {copy.openCase} <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="role-section" id="capabilities">
        <div className="section-heading section-heading-light">
          <p className="eyebrow">{copy.roleEyebrow}</p>
          <h2>{copy.roleTitle}</h2>
          <p>{copy.roleBody}</p>
        </div>
        <div className="role-grid">
          {copy.roles.map((role, index) => (
            <Link className="role-card" href={role.href} key={role.label}>
              <span>0{index + 1}</span>
              <p className="detail-label">{role.label}</p>
              <h3>{role.title}</h3>
              <p>{role.body}</p>
              <strong>
                {role.proof} <Arrow />
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">{copy.experienceEyebrow}</p>
          <h2>{copy.experienceTitle}</h2>
          <p>{copy.experienceBody}</p>
        </div>
        <div className="experience-list">
          {careers.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-period">
                <strong>{item.period}</strong>
                {item.location ? <span>{item.location}</span> : null}
              </div>
              <div className="experience-title">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <ul>
                {item.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="education-line">{copy.education}</p>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">{copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactBody}</p>
        </div>
        <div className="contact-links">
          <a href="mailto:jwoo9928@gmail.com">
            <span>{copy.email}</span>
            <strong>jwoo9928@gmail.com</strong>
            <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/jaewoo9928/"
            target="_blank"
            rel="noreferrer"
          >
            <span>{copy.linkedin}</span>
            <strong>linkedin.com/in/jaewoo9928</strong>
            <Arrow />
          </a>
          <a
            href="https://github.com/jwoo9928"
            target="_blank"
            rel="noreferrer"
          >
            <span>{copy.github}</span>
            <strong>github.com/jwoo9928</strong>
            <Arrow />
          </a>
          <p>{copy.demo}</p>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
