import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fifa — Frontend Developer for hire",
  description:
    "รับทำ landing page และเว็บไซต์ ที่ช่วยปิดการขาย ด้วย Next.js + TypeScript + Tailwind — โหลดไว SEO ดี convert สูง โดยฟีฟ่า Frontend Developer จากขอนแก่น",
  keywords: [
    "freelance",
    "frontend",
    "next.js",
    "landing page",
    "thai freelance",
    "ขอนแก่น",
    "รับทำเว็บ",
  ],
  authors: [{ name: "Phurimart Sudanich" }],
  openGraph: {
    title: "Fifa — Frontend Developer for hire",
    description:
      "Landing pages & websites that convert. Built with Next.js + TypeScript.",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
