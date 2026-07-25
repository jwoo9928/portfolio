import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject } from "../../portfolio-data";

const project = getProject("audit");

export const metadata: Metadata = {
  title: `${project.title} — Jaewoo Park`,
  description: project.subtitle,
  alternates: { canonical: "/work/audit" },
};

export default function AuditCaseStudy() {
  return <CaseStudyPage project={project} />;
}
