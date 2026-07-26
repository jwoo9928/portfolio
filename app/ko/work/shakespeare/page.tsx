import type { Metadata } from "next";
import { CaseStudyPage } from "../../../case-study-page";
import { getProject, projectsKo } from "../../../portfolio-data";

const project = getProject("shakespeare", "ko");

export const metadata: Metadata = {
  title: project.title,
  description: project.subtitle,
  alternates: {
    canonical: "/ko/work/shakespeare",
    languages: { en: "/work/shakespeare", ko: "/ko/work/shakespeare" },
  },
};

export default function Page() {
  return <CaseStudyPage project={project} projects={projectsKo} locale="ko" />;
}
