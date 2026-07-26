import type { Metadata } from "next";
import { HomePage } from "../home-page";
import { projectsKo } from "../portfolio-data";

export const metadata: Metadata = {
  title: "박재우 — AI Agent Engineer & AI Solutions Architect",
  description:
    "에이전트 오케스트레이션, 공공 일상감사, 교육 업무 자동화, 현장형 Windows 키오스크까지 네 가지 AI 제품을 설계하고 구현한 포트폴리오입니다.",
  alternates: {
    canonical: "/ko",
    languages: { en: "/", ko: "/ko" },
  },
  openGraph: {
    locale: "ko_KR",
    url: "/ko",
    title: "박재우 — AI Agent Engineer & AI Solutions Architect",
    description:
      "기관의 업무 요구사항을 분석해 AI 제품의 구조를 설계하고, 개발부터 배포와 운영 인계까지 수행합니다.",
  },
};

export default function KoreanHome() {
  return <HomePage locale="ko" projects={projectsKo} />;
}
