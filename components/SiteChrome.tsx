"use client";

import { usePathname } from "next/navigation";
import Fab from "./Fab";
import StickyCta from "./StickyCta";

// Floating widgets, matching the originals exactly:
//  - the desktop speed-dial (Fab) appeared on home only
//  - the mobile sticky contact bar appeared on every page except /design-system
export default function SiteChrome() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <Fab />}
      {pathname !== "/design-system" && <StickyCta />}
    </>
  );
}
