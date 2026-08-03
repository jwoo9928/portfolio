import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "./print-button";
import styles from "./resume-page.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Jaewoo Park - AI Agent Engineer and AI Solutions Architect. Approximately four years of software engineering experience across agentic AI, model serving, full-stack products, mobile, and Web3.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    locale: "en_US",
    url: "/resume",
    title: "Jaewoo Park - AI Agent Engineer · AI Solutions Architect",
    description:
      "Hands-on AI systems engineering from requirements and architecture through evaluation, deployment, and operating handoff.",
    images: ["/og.png"],
  },
};

const contacts = [
  {
    label: "Email",
    value: "jwoo9928@gmail.com",
    href: "mailto:jwoo9928@gmail.com",
  },
  {
    label: "Phone",
    value: "+1 408 210 9171",
    href: "tel:+14082109171",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jaewoo9928",
    href: "https://www.linkedin.com/in/jaewoo9928",
  },
  {
    label: "GitHub",
    value: "github.com/jwoo9928",
    href: "https://github.com/jwoo9928",
  },
] as const;

const deliverySignals = [
  {
    value: "Discovery → Delivery",
    label: "Stakeholder-led AI solutions",
    note: "Interview · architecture · implementation",
  },
  {
    value: "Hours → ~5 min",
    label: "Representative internal audit validation",
    note: "Institutional beta underway",
  },
  {
    value: "8 × A100",
    label: "40 GB GPU model-serving fleet",
    note: "Plus Blackwell optimization",
  },
] as const;

function SectionTitle({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={styles.sectionTitle}>
      <span>{index}</span>
      {children}
    </h2>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ResumePage() {
  return (
    <main className={styles.page} lang="en">
      <div className={styles.toolbar}>
        <Link href="/">Portfolio</Link>
        <p>US technical resume · Updated July 2026</p>
        <div>
          <Link href="/ko/career">한국어 경력기술서</Link>
          <a
            className={styles.downloadButton}
            href="/resume/Jaewoo_Park_AI_Agent_Engineer_Resume_2026.pdf"
            download
          >
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <article className={styles.sheet} aria-label="Jaewoo Park resume">
        <header className={styles.identity}>
          <div>
            <p className={styles.documentLabel}>RESUME · 2026</p>
            <h1>Jaewoo Park</h1>
            <p className={styles.role}>
              AI Agent Engineer <span>/</span> AI Solutions Architect
            </p>
          </div>
          <p className={styles.positioning}>
            Turning stakeholder needs into working AI solutions.
          </p>
        </header>

        <address className={styles.contacts}>
          <span>Seoul, South Korea</span>
          {contacts.map((contact) => (
            <a href={contact.href} key={contact.label}>
              <small>{contact.label}</small>
              {contact.value}
            </a>
          ))}
          <ExternalLink href="https://jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site">
            <small>Portfolio</small>
            jaewoo-park-ai-portfolio
          </ExternalLink>
        </address>

        <section className={styles.summary} aria-labelledby="summary-title">
          <h2 id="summary-title">Profile</h2>
          <p>
            Software engineer with approximately four years of experience
            across mobile, Web3, web, and AI products. I interview
            institutional stakeholders and internal consultants, translate
            ambiguous needs and operational constraints into solution
            requirements, design the appropriate AI architecture, and
            implement, validate, and deploy the resulting product.
          </p>
        </section>

        <dl className={styles.signals}>
          {deliverySignals.map((signal) => (
            <div key={signal.value}>
              <dt>{signal.value}</dt>
              <dd>
                <strong>{signal.label}</strong>
                <span>{signal.note}</span>
              </dd>
            </div>
          ))}
        </dl>

        <section className={styles.section} aria-labelledby="experience-title">
          <SectionTitle index="01">Experience</SectionTitle>

          <div className={styles.experienceList} id="experience-title">
            <article className={styles.experience}>
              <header className={styles.experienceHeader}>
                <div>
                  <h3>Seoul AI Foundation</h3>
                  <p>AI Agent Engineer · AI Solutions Architect</p>
                </div>
                <div>
                  <time>Oct 2025 - Present</time>
                  <span>Seoul, South Korea</span>
                </div>
              </header>
              <ul className={styles.bullets}>
                <li>
                  Interview institutional stakeholders and internal consultants
                  to understand workflows, constraints, and success criteria,
                  then translate those findings into AI solution architectures
                  and working products.
                </li>
                <li>
                  Independently built{" "}
                  <ExternalLink href="/work/aiops">AIOps-PoC</ExternalLink>, a
                  reusable Agent Harness that turns institutional requirements
                  into specialist-agent plans, validated execution DAGs,
                  model-serving environments, request-specific Playgrounds,
                  user evaluation, and reporting; adopted by the consulting
                  team after a six-month build.
                </li>
                <li>
                  Separated agent planning from execution through{" "}
                  <strong>
                    RuntimeGraphIntent → Graph Intent Compiler →
                    ServingPipelineSpec
                  </strong>
                  , with deterministic topology, type, entry-point,
                  model-readiness, and GPU checks plus human approval. Operate
                  vLLM across 8 × A100 40 GB GPUs and RTX PRO 6000 Blackwell
                  for LLM, VLM, OCR, embedding, and ASR workloads.
                </li>
                <li>
                  Built an{" "}
                  <ExternalLink href="/work/audit">
                    evidence-grounded public-contract pre-audit system
                  </ExternalLink>{" "}
                  combining versioned regulations, hybrid retrieval, knowledge
                  graphs, proof records, deterministic decision rules, and
                  authenticated human approval. A representative internal
                  review fell from hours to approximately five minutes;
                  institutional beta validation is underway.
                </li>
                <li>
                  Delivered{" "}
                  <ExternalLink href="/work/shakespeare">
                    AI Shakespeare
                  </ExternalLink>
                  , a Windows Electron kiosk that generates a structured
                  one-act play and prints it on an 80 mm thermal receipt, with
                  serialized requests, bounded retries, encrypted secrets,
                  SQLite state, printer integration, and NSIS packaging;
                  on-site installation is scheduled for August 2026.
                </li>
              </ul>
            </article>

            <article className={styles.experience}>
              <header className={styles.experienceHeader}>
                <div>
                  <h3>ICT Global Internship Program</h3>
                  <p>Software Development Intern</p>
                </div>
                <div>
                  <time>Jul 2024 - Sep 2024</time>
                  <span>San Jose, California</span>
                </div>
              </header>
              <ul className={styles.bullets}>
                <li>
                  Reframed an availability-dependent, inconsistent manual
                  English-writing review process as an LLM-assisted service;
                  designed the submission-to-feedback workflow and shipped the
                  Next.js product.
                </li>
              </ul>
            </article>

            <article className={styles.experience}>
              <header className={styles.experienceHeader}>
                <div>
                  <h3>PILAB Technology, Inc. · BIFROST</h3>
                  <p>Mobile Engineer</p>
                </div>
                <div>
                  <time>Nov 2021 - Aug 2023</time>
                  <span>Seoul, South Korea</span>
                </div>
              </header>
              <ul className={styles.bullets}>
                <li>
                  Led React Native development for the Biport and Pockie
                  self-custodial multichain wallets; built controllers for
                  multiple mnemonic seed phrases, account and network state,
                  transfers, transaction tracking, and gas-fee optimization.
                </li>
                <li>
                  Integrated Bifrost Cross-Chain Swap into both mobile clients,
                  enabling in-app bridge-and-swap flows across supported
                  networks.
                </li>
              </ul>
            </article>

            <article className={`${styles.experience} ${styles.condensed}`}>
              <header className={styles.experienceHeader}>
                <div>
                  <h3>dangamsoft</h3>
                  <p>Mobile &amp; Web Developer</p>
                </div>
                <div>
                  <time>Mar 2021 - Oct 2021</time>
                  <span>Seoul, South Korea</span>
                </div>
              </header>
              <p>
                Developed and released Gurumirangi, a React Native pet-community
                application with production API integrations.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle index="02">Additional Experience</SectionTitle>
          <div className={styles.additional}>
            <p>
              <strong>Web Development Teaching Assistant</strong> · Chungnam
              National University · Jun-Nov 2023
            </p>
            <p>
              <strong>Founding Member</strong> · SOLIF / NAUEM · 2021-2023 ·
              Reading curation and accessibility-community products
            </p>
            <p>
              <strong>1st Cadet</strong> · 42 Seoul · Feb 2020-Mar 2021
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle index="03">Education</SectionTitle>
          <div className={styles.education}>
            <p>
              <strong>Chungnam National University</strong>
              <span>Division of Computer Convergence · 2019-2025</span>
            </p>
          </div>
        </section>
      </article>

      <p className={styles.screenNote}>
        Designed as a single-column, ATS-readable US Letter resume. Download the
        verified PDF for applications.
      </p>
    </main>
  );
}
