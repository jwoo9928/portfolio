import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject } from "../../portfolio-data";

const project = getProject("aiops");

export const metadata: Metadata = {
  title: `${project.title} — Jaewoo Park`,
  description: project.subtitle,
  alternates: { canonical: "/work/aiops" },
};

export default function AIOpsCaseStudy() {
  return <CaseStudyPage project={project} />;
}
