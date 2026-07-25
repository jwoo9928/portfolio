import Link from "next/link";
import type { Project } from "./portfolio-data";

export type Locale = "en" | "ko";

export const Arrow = () => <span aria-hidden="true">↗</span>;

const navigation = {
  en: {
    label: "Primary navigation",
    home: "Jaewoo Park, home",
    menu: "Menu",
    links: [
      ["Work", "/#work"],
      ["Evidence", "/#evidence"],
      ["Approach", "/#approach"],
      ["Contact", "/#contact"],
    ],
  },
  ko: {
    label: "주요 메뉴",
    home: "박재우, 홈",
    menu: "메뉴",
    links: [
      ["프로젝트", "/ko#work"],
      ["증거", "/ko#evidence"],
      ["원칙", "/ko#approach"],
      ["연락", "/ko#contact"],
    ],
  },
} as const;

export function SiteNav({
  compact = false,
  locale = "en",
  alternateHref = locale === "en" ? "/ko" : "/",
}: {
  compact?: boolean;
  locale?: Locale;
  alternateHref?: string;
}) {
  const copy = navigation[locale];
  const homeHref = locale === "ko" ? "/ko" : "/";
  const alternateLocale = locale === "en" ? "ko" : "en";

  return (
    <nav
      className={`site-nav${compact ? " site-nav-compact" : ""}`}
      aria-label={copy.label}
    >
      <Link className="wordmark" href={homeHref} aria-label={copy.home}>
        JP<span>.</span>
      </Link>
      <div className="nav-links">
        {copy.links.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
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
            <Link href={alternateHref} hrefLang={alternateLocale} lang="ko">
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
          {copy.links.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <a href="https://github.com/jwoo9928" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </div>
      </details>
    </nav>
  );
}

export function StatusBadge({ project }: { project: Project }) {
  return (
    <div className={`status-badge status-${project.theme}`}>
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

export function SystemMap({
  items,
  label = "System architecture flow",
}: {
  items: string[];
  label?: string;
}) {
  return (
    <ol className="system-map" aria-label={label}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

export function TechRow({
  items,
  locale = "en",
}: {
  items: string[];
  locale?: Locale;
}) {
  return (
    <ul
      className="tech-row"
      aria-label={locale === "ko" ? "기술 스택" : "Technology stack"}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Footer({ locale = "en" }: { locale?: Locale }) {
  return (
    <footer>
      <p>© 2026 Jaewoo Park</p>
      <p>
        {locale === "ko"
          ? "AI 솔루션 아키텍트 · 에이전틱 AI 엔지니어"
          : "AI Solutions Architect · Agentic AI Engineer"}
      </p>
      <a href="#top">{locale === "ko" ? "맨 위로 ↑" : "Back to top ↑"}</a>
    </footer>
  );
}
