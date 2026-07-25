import type { Metadata } from "next";
import { CaseStudyPage } from "../../../case-study-page";
import { getProjectKo, projectsKo } from "../../../portfolio-data-ko";

const project = getProjectKo("audit");

export const metadata: Metadata = {
  title: `${project.title} — 박재우`,
  description: project.subtitle,
  alternates: {
    canonical: "/ko/work/audit",
    languages: { en: "/work/audit", ko: "/ko/work/audit" },
  },
  openGraph: {
    locale: "ko_KR",
    url: "/ko/work/audit",
    title: `${project.title} — 박재우`,
    description: project.subtitle,
  },
};

export default function KoreanAuditCaseStudy() {
  return <CaseStudyPage project={project} projects={projectsKo} locale="ko" />;
}
