import type { Metadata } from "next";
import { CaseStudyPage } from "../../../case-study-page";
import { getProject, projectsKo } from "../../../portfolio-data";

const project = getProject("writing", "ko");

export const metadata: Metadata = {
  title: project.title,
  description: project.subtitle,
  alternates: {
    canonical: "/ko/work/writing",
    languages: { en: "/work/writing", ko: "/ko/work/writing" },
  },
};

export default function Page() {
  return <CaseStudyPage project={project} projects={projectsKo} locale="ko" />;
}
