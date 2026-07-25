import type { Metadata } from "next";
import { CaseStudyPage } from "../../../case-study-page";
import { getProjectKo, projectsKo } from "../../../portfolio-data-ko";

const project = getProjectKo("shakespeare");

export const metadata: Metadata = {
  title: `${project.title} — 박재우`,
  description: project.subtitle,
  alternates: {
    canonical: "/ko/work/shakespeare",
    languages: { en: "/work/shakespeare", ko: "/ko/work/shakespeare" },
  },
  openGraph: {
    locale: "ko_KR",
    url: "/ko/work/shakespeare",
    title: `${project.title} — 박재우`,
    description: project.subtitle,
  },
};

export default function KoreanShakespeareCaseStudy() {
  return <CaseStudyPage project={project} projects={projectsKo} locale="ko" />;
}
