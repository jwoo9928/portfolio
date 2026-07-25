import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://jaewoo-park-ai-portfolio.jwoo9928.chatgpt.site",
  ),
  title: {
    default: "Jaewoo Park — AI Solutions Architect & Agentic AI Engineer",
    template: "%s",
  },
  description:
    "Builder-first AI Solutions Architect and Agentic AI Engineer. Three evidence-bounded systems spanning agentic infrastructure, regulated public-sector AI, and a field-ready generative kiosk.",
  keywords: [
    "AI Solutions Architect",
    "Agentic AI Engineer",
    "AI Agent Engineer",
    "LLM systems",
    "AI evaluation",
    "model serving",
    "Jaewoo Park",
  ],
  authors: [{ name: "Jaewoo Park", url: "https://github.com/jwoo9928" }],
  creator: "Jaewoo Park",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Jaewoo Park — AI Systems Portfolio",
    title: "Jaewoo Park — AI Solutions Architect & Agentic AI Engineer",
    description:
      "Architect the system. Ship the code. Prove it can operate.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Jaewoo Park — AI Solutions Architect and Agentic AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaewoo Park — AI Solutions Architect & Agentic AI Engineer",
    description:
      "Architect the system. Ship the code. Prove it can operate.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
