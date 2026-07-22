"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

// The standard footer is shared by 16 pages. /services carries a bespoke footer variant
// and /design-system embeds its own demo footer in the page body — both render their footer
// inside their own page component, so the shared one is suppressed here.
export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/services" || pathname === "/design-system") return null;
  return <Footer />;
}
