import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans_SC, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HeroUI - 生产就绪的 React 组件库",
  description:
    "HeroUI 将 React Aria 的可访问性与 Tailwind CSS v4 的实用优先样式结合，提供简洁的复合组件 API，开箱即用。",
  keywords: ["HeroUI", "React", "组件库", "Tailwind CSS", "Next.js", "可访问性"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${notoSansSC.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
