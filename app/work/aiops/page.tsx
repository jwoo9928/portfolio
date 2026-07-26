import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject, projects } from "../../portfolio-data";

const project = getProject("aiops");

export const metadata: Metadata = {
  title: project.title,
  description: project.subtitle,
  alternates: {
    canonical: "/work/aiops",
    languages: { en: "/work/aiops", ko: "/ko/work/aiops" },
  },
};

export default function Page() {
  return <CaseStudyPage project={project} projects={projects} />;
}
