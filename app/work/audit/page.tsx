import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject, projects } from "../../portfolio-data";

const project = getProject("audit");

export const metadata: Metadata = {
  title: project.title,
  description: project.subtitle,
  alternates: {
    canonical: "/work/audit",
    languages: { en: "/work/audit", ko: "/ko/work/audit" },
  },
};

export default function Page() {
  return <CaseStudyPage project={project} projects={projects} />;
}
