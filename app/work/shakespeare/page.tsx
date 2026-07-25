import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject } from "../../portfolio-data";

const project = getProject("shakespeare");

export const metadata: Metadata = {
  title: `${project.title} — Jaewoo Park`,
  description: project.subtitle,
  alternates: { canonical: "/work/shakespeare" },
};

export default function ShakespeareCaseStudy() {
  return <CaseStudyPage project={project} />;
}
