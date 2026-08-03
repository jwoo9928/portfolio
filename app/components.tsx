import Link from "next/link";
import type { Locale, Project } from "./portfolio-data";

const navCopy = {
  en: {
    label: "Primary navigation",
    work: "Work",
    experience: "Experience",
    contact: "Contact",
    career: "Resume",
    menu: "Menu",
  },
  ko: {
    label: "주요 메뉴",
    work: "프로젝트",
    experience: "경력",
    contact: "연락처",
    career: "경력기술서",
    menu: "메뉴",
  },
} as const;

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteNav({
  locale = "en",
  alternateHref = locale === "en" ? "/ko" : "/",
  compact = false,
}: {
  locale?: Locale;
  alternateHref?: string;
  compact?: boolean;
}) {
  const copy = navCopy[locale];
  const prefix = locale === "ko" ? "/ko" : "";

  return (
    <nav
      className={`site-nav${compact ? " is-compact" : ""}`}
      aria-label={copy.label}
    >
      <Link className="wordmark" href={prefix || "/"}>
        JAEWOO PARK
      </Link>
      <div className="nav-links">
        <Link href={`${prefix}/#work`}>{copy.work}</Link>
        <Link href={`${prefix}/#experience`}>{copy.experience}</Link>
        <Link href={`${prefix}/#contact`}>{copy.contact}</Link>
        <Link
          href={
            locale === "ko"
              ? "/ko/career"
              : "/Jaewoo_Park_AI_Resume_2026.html"
          }
        >
          {copy.career}
        </Link>
      </div>
      <div className="nav-actions">
        <div className="language-switch" aria-label="Language">
          {locale === "en" ? (
            <span aria-current="page">EN</span>
          ) : (
            <Link href={alternateHref} hrefLang="en" lang="en">
              EN
            </Link>
          )}
          <span aria-hidden="true">/</span>
          {locale === "ko" ? (
            <span aria-current="page">KO</span>
          ) : (
            <Link href={alternateHref} hrefLang="ko" lang="ko">
              KO
            </Link>
          )}
        </div>
        <a
          className="nav-github"
          href="https://github.com/jwoo9928"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </div>
      <details className="mobile-nav">
        <summary>{copy.menu}</summary>
        <div>
          <Link href={`${prefix}/#work`}>{copy.work}</Link>
          <Link href={`${prefix}/#experience`}>{copy.experience}</Link>
          <Link href={`${prefix}/#contact`}>{copy.contact}</Link>
          <Link
            href={
              locale === "ko"
                ? "/ko/career"
                : "/Jaewoo_Park_AI_Resume_2026.html"
            }
          >
            {copy.career}
          </Link>
          <Link href={alternateHref}>
            {locale === "en" ? "한국어" : "English"}
          </Link>
        </div>
      </details>
    </nav>
  );
}

export function StatusBadge({ project }: { project: Project }) {
  return (
    <div className="status-badge">
      <span aria-hidden="true" />
      <div>
        <strong>{project.status}</strong>
        <small>{project.statusDetail}</small>
      </div>
    </div>
  );
}

export function MetricGrid({ metrics }: { metrics: Project["metrics"] }) {
  return (
    <dl className="metric-grid">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`}>
          <dt>{metric.value}</dt>
          <dd>{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TechRow({ items }: { items: string[] }) {
  return (
    <ul className="tech-row" aria-label="Technology and capability areas">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Footer({ locale = "en" }: { locale?: Locale }) {
  return (
    <footer className="site-footer">
      <p>© 2026 Jaewoo Park</p>
      <p>
        {locale === "ko"
          ? "AI Agent Engineer · AI Solutions Architect"
          : "AI Agent Engineer · AI Solutions Architect"}
      </p>
      <a href="#top">{locale === "ko" ? "맨 위로" : "Back to top"} ↑</a>
    </footer>
  );
}
