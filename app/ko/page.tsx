import type { Metadata } from "next";
import { HomePage } from "../home-page";
import { projectsKo } from "../portfolio-data-ko";

export const metadata: Metadata = {
  title: "박재우 — AI 에이전트 엔지니어 & AI 솔루션 아키텍트",
  description:
    "AI 에이전트 플랫폼, 공공 규제 시스템, 현장 설치형 생성형 AI 제품을 구축한 박재우의 포트폴리오입니다.",
  alternates: {
    canonical: "/ko",
    languages: { en: "/", ko: "/ko" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/ko",
    siteName: "박재우 — AI 시스템 포트폴리오",
    title: "박재우 — AI 에이전트 엔지니어 & AI 솔루션 아키텍트",
    description:
      "에이전트 인프라, 공공계약 감사, 현장 문화 체험을 실제 AI 시스템으로 구현했습니다.",
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
    title: "박재우 — AI 에이전트 엔지니어 & AI 솔루션 아키텍트",
    description:
      "AI 에이전트 플랫폼, 공공 규제 시스템, 현장 설치형 생성형 AI 제품 포트폴리오.",
    images: ["/og.png"],
  },
};

export default function KoreanHome() {
  return <HomePage locale="ko" projects={projectsKo} />;
}
