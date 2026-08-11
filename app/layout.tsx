import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "찬양과 말씀 | Worship & Message",
  description: "은혜로운 찬양과 말씀을 한곳에서 만나보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header />{children}<Footer /></body></html>;
}
