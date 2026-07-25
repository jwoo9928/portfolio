import Link from "next/link";
import type { Project } from "./portfolio-data";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteNav({ compact = false }: { compact?: boolean }) {
  return (
    <nav className={`site-nav${compact ? " site-nav-compact" : ""}`} aria-label="Primary navigation">
      <Link className="wordmark" href="/" aria-label="Jaewoo Park, home">
        JP<span>.</span>
      </Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/#evidence">Evidence</Link>
        <Link href="/#approach">Approach</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <a
        className="nav-github"
        href="https://github.com/jwoo9928"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <Arrow />
      </a>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <div>
          <Link href="/#work">Work</Link>
          <Link href="/#evidence">Evidence</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#contact">Contact</Link>
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

export function TechRow({ items }: { items: string[] }) {
  return (
    <ul className="tech-row" aria-label="Technology stack">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer>
      <p>© 2026 Jaewoo Park</p>
      <p>AI Solutions Architect · Agentic AI Engineer</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
