import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Sarabun } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import SiteChrome from "@/components/SiteChrome";
import Interactions from "@/components/Interactions";

// Body copy — Sarabun (ฟอนต์มีหัว). Headings — IBM Plex Sans Thai (ฟอนต์ไม่มีหัว),
// bound to h1–h6 / header nav in globals.css via these CSS variables.
const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});
const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ณัฐชญา คลินิก | Natchaya Clinic คลินิกเสริมความงาม",
  description:
    "Natchaya Clinic คลินิกเสริมความงาม ดูแลรูปร่าง ผิวพรรณ ศัลยกรรม โดยทีมแพทย์เฉพาะทาง",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${sarabun.variable} ${ibmPlexThai.variable}`}>
      <body className="overflow-x-hidden bg-surface font-sans text-ink">
        <Header />
        {children}
        <SiteFooter />
        <SiteChrome />
        <Interactions />
      </body>
    </html>
  );
}
