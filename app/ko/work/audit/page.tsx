import type { Metadata } from "next";
import { CaseStudyPage } from "../../../case-study-page";
import { getProject, projectsKo } from "../../../portfolio-data";

const project = getProject("audit", "ko");

export const metadata: Metadata = {
  title: project.title,
  description: project.subtitle,
  alternates: {
    canonical: "/ko/work/audit",
    languages: { en: "/work/audit", ko: "/ko/work/audit" },
  },
};

export default function Page() {
  return <CaseStudyPage project={project} projects={projectsKo} locale="ko" />;
}
