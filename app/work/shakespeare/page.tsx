import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject, projects } from "../../portfolio-data";

const project = getProject("shakespeare");

export const metadata: Metadata = {
  title: `${project.title} — Jaewoo Park`,
  description: project.subtitle,
  alternates: {
    canonical: "/work/shakespeare",
    languages: { en: "/work/shakespeare", ko: "/ko/work/shakespeare" },
  },
};

export default function ShakespeareCaseStudy() {
  return <CaseStudyPage project={project} projects={projects} />;
}
