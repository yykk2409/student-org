import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SFC Hub - 未来を創造する学生の集まり",
  description: "学生団体の公式ホームページ。学びと成長を通じて社会に貢献することを目指す学生の集まりです。",
  keywords: "学生団体,大学,学習,成長,活動,イベント,交流",
  authors: [{ name: "SFC Hub" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
  openGraph: {
    title: "SFC Hub - 未来を創造する学生の集まり",
    description: "学生団体の公式ホームページ。学びと成長を通じて社会に貢献することを目指す学生の集まりです。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "SFC Hub - 未来を創造する学生の集まり",
    description: "学生団体の公式ホームページ。学びと成長を通じて社会に貢献することを目指す学生の集まりです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}