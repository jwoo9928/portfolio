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
    default: "Jaewoo Park — AI Agent Engineer & AI Solutions Architect",
    template: "%s",
  },
  description:
    "Jaewoo Park builds AI agent platforms, regulated AI systems, and on-site generative AI products—from model serving and evaluation to full-stack deployment.",
  keywords: [
    "AI Solutions Architect",
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
    title: "Jaewoo Park — AI Agent Engineer & AI Solutions Architect",
    description:
      "An agent platform, a public-sector audit system, and an on-site generative AI product—built for real users and operating environments.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Jaewoo Park — AI Agent Engineer and AI Solutions Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaewoo Park — AI Agent Engineer & AI Solutions Architect",
    description:
      "AI agent platforms, regulated AI systems, and field-deployed generative AI products.",
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
