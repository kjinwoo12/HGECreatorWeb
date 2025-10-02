import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "HGE Creator - 인디 게임과 크리에이터를 연결하는 플랫폼",
  description: "260명의 다양한 크리에이터와 인디 게임 개발자를 연결하여 게임 업계의 성장과 발전에 기여하는 HGE Creator 플랫폼입니다.",
  keywords: "인디게임, 크리에이터, 게임개발, 스트리밍, 일러스트, 성우, 협업",
  openGraph: {
    title: "HGE Creator",
    description: "인디 게임과 크리에이터를 연결하는 플랫폼",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
