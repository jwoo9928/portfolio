import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

const metadataBase = new URL(
  deploymentHost
    ? deploymentHost.startsWith("http")
      ? deploymentHost
      : `https://${deploymentHost}`
    : "https://jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site",
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Jaewoo Park — AI Agent Engineer & AI Solutions Architect",
    template: "%s — Jaewoo Park",
  },
  description:
    "Four AI products spanning agent orchestration, public-sector audit, education workflow, and a field-installed Windows kiosk.",
  keywords: [
    "AI Agent Engineer",
    "AI Solutions Architect",
    "Agentic AI",
    "multi-agent systems",
    "LLM evaluation",
    "model serving",
    "Jaewoo Park",
  ],
  authors: [{ name: "Jaewoo Park", url: "https://github.com/jwoo9928" }],
  creator: "Jaewoo Park",
  alternates: {
    canonical: "/",
    languages: { en: "/", ko: "/ko" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Jaewoo Park — AI Systems Portfolio",
    title: "Jaewoo Park — AI Agent Engineer & AI Solutions Architect",
    description:
      "AI systems designed for real operating constraints—from requirements and architecture through deployment and handoff.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Jaewoo Park, AI Agent Engineer and AI Solutions Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaewoo Park — AI Agent Engineer & AI Solutions Architect",
    description:
      "Agent systems, regulated AI, education workflow automation, and field AI products.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
