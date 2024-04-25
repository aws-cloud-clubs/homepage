import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const pretendard = localFont({
  src: "../public/PretendardVariable.woff2",
  display: "swap",
  weight: "400 500 700",
});

export const metadata: Metadata = {
  title: "ACC South Korea",
  description: "AWS Cloud Club in South Korea - ACC South Korea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
