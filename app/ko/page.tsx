import type { Metadata } from "next";
import { HomePage } from "../home-page";
import { projectsKo } from "../portfolio-data-ko";

export const metadata: Metadata = {
  title: "박재우 — AI 솔루션 아키텍트 & AI 에이전트 엔지니어",
  description:
    "요구사항 분석부터 아키텍처 설계, 서비스 개발, 모델 서빙, 평가, 배포까지 직접 수행한 AI 솔루션 아키텍트이자 AI 에이전트 엔지니어 박재우의 포트폴리오입니다.",
  alternates: {
    canonical: "/ko",
    languages: { en: "/", ko: "/ko" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/ko",
    siteName: "박재우 — AI 시스템 포트폴리오",
    title: "박재우 — AI 솔루션 아키텍트 & AI 에이전트 엔지니어",
    description:
      "문제의 본질을 찾고 작동하는 AI 시스템으로 구현합니다. 성과는 검증 가능한 근거와 함께 제시합니다.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "박재우 AI 솔루션 아키텍트 및 AI 에이전트 엔지니어 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "박재우 — AI 솔루션 아키텍트 & AI 에이전트 엔지니어",
    description:
      "문제의 본질을 찾고 작동하는 AI 시스템으로 구현합니다. 성과는 검증 가능한 근거와 함께 제시합니다.",
    images: ["/og.png"],
  },
};

export default function KoreanHome() {
  return <HomePage locale="ko" projects={projectsKo} />;
}
