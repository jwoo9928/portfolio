import type { Metadata } from "next";
import { CaseStudyPage } from "../../../case-study-page";
import { getProjectKo, projectsKo } from "../../../portfolio-data-ko";

const project = getProjectKo("aiops");

export const metadata: Metadata = {
  title: `${project.title} — 박재우`,
  description: project.subtitle,
  alternates: {
    canonical: "/ko/work/aiops",
    languages: { en: "/work/aiops", ko: "/ko/work/aiops" },
  },
  openGraph: {
    locale: "ko_KR",
    url: "/ko/work/aiops",
    title: `${project.title} — 박재우`,
    description: project.subtitle,
  },
};

export default function KoreanAIOpsCaseStudy() {
  return <CaseStudyPage project={project} projects={projectsKo} locale="ko" />;
}
