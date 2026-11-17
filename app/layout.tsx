import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const notoSans = Noto_Sans_KR({ variable: "--font-noto-sans", subsets: ["latin"], display: "swap" });
const notoSerif = Noto_Serif_KR({ variable: "--font-noto-serif", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { title: { default: "Seoul Stories — Korean drama discovery", template: "%s | Seoul Stories" }, description: "Find your next Korean drama. Explore curated stories by mood, genre, and favorite actors." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" className={`${playfair.variable} ${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning><body><Navbar/><main id="main-content">{children}</main><Footer/></body></html>; }
