import type { Metadata } from "next";
import { HomePage } from "../home-page";
import { projectsKo } from "../portfolio-data-ko";

export const metadata: Metadata = {
  title: "박재우 — AI 솔루션 아키텍트 & 에이전틱 AI 엔지니어",
  description:
    "요구사항 발굴부터 아키텍처, 모델 서빙, 평가, 배포까지 직접 책임지는 Builder-first AI Solutions Architect이자 Agentic AI Engineer의 포트폴리오.",
  alternates: {
    canonical: "/ko",
    languages: { en: "/", ko: "/ko" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/ko",
    siteName: "박재우 — AI 시스템 포트폴리오",
    title: "박재우 — AI 솔루션 아키텍트 & 에이전틱 AI 엔지니어",
    description: "시스템을 설계하고, 코드를 배포하고, 운영 가능성을 증명합니다.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "박재우 — AI 솔루션 아키텍트 및 에이전틱 AI 엔지니어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "박재우 — AI 솔루션 아키텍트 & 에이전틱 AI 엔지니어",
    description: "시스템을 설계하고, 코드를 배포하고, 운영 가능성을 증명합니다.",
    images: ["/og.png"],
  },
};

export default function KoreanHome() {
  return <HomePage locale="ko" projects={projectsKo} />;
}
