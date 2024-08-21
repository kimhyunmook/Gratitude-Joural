import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LangConfig from "@/lang/lang";

const inter = Inter({ subsets: ["latin"] });
const Lang = LangConfig('ko')
export const metadata: Metadata = {
  title: Lang.config.title,
  description: Lang.config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
