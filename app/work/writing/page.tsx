import type { Metadata } from "next";
import { CaseStudyPage } from "../../case-study-page";
import { getProject, projects } from "../../portfolio-data";

const project = getProject("writing");

export const metadata: Metadata = {
  title: project.title,
  description: project.subtitle,
  alternates: {
    canonical: "/work/writing",
    languages: { en: "/work/writing", ko: "/ko/work/writing" },
  },
};

export default function Page() {
  return <CaseStudyPage project={project} projects={projects} />;
}
