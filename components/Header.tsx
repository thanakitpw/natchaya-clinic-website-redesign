"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const serviceLinks: Array<{ href: string; label: string }> = [
  { href: "/services#body-contouring", label: "กระชับสัดส่วน" },
  { href: "/services#face-lift", label: "FACE LIFT · ยกกระชับใบหน้า" },
  { href: "/services#facial-rejuvenation", label: "ฟื้นฟูผิวหน้า · ฟิลเลอร์" },
  { href: "/services#botox", label: "BOTOX" },
  { href: "/services#laser", label: "LASER · เลเซอร์" },
  { href: "/services#facial-treatment", label: "FACIAL TREATMENT" },
  { href: "/services#repair", label: "REPAIR · ฟื้นฟูสมรรถภาพ" },
  { href: "/services#clear-airway", label: "เลเซอร์นอนกรน" },
  { href: "/beautycare#surgery", label: "SURGERY · ศัลยกรรม" },
];

// Active-item + dropdown vary per page in the original static pages; usePathname
// reproduces exactly which nav item is highlighted and where the บริการ dropdown shows
// (home only), from a single shared component.
function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/services") return "services";
  if (pathname === "/review" || pathname === "/review-detail") return "review";
  if (pathname === "/blog" || pathname === "/news-detail") return "blog";
  if (pathname === "/about") return "about";
  return "";
}

const NAV: Array<{ key: string; href: string; label: string; mpad: string; dropdown?: boolean }> = [
  { key: "home", href: "/", label: "หน้าแรก", mpad: "py-2.5" },
  { key: "services", href: "/services", label: "บริการ", mpad: "py-2.5", dropdown: true },
  { key: "review", href: "/review", label: "รีวิว", mpad: "py-2.5" },
  { key: "blog", href: "/blog", label: "บทความ", mpad: "py-2" },
  { key: "about", href: "/about", label: "ทีมแพทย์", mpad: "py-2" },
];

export default function Header() {
  const pathname = usePathname();
  const active = activeKey(pathname);
  const showDropdown = pathname === "/"; // only home carries the บริการ dropdown / submenu

  return (
    <header className="sticky top-0 z-40 bg-surface/95 shadow-soft backdrop-blur">
      {/* Main bar: logo (left) · nav (centered) · LINE (right) */}
      <div className="relative mx-auto flex max-w-content items-center justify-between border-b border-line px-4 py-3">
        <Link href="/" className="inline-flex items-center" aria-label="ณัฐชญา คลินิก หน้าแรก">
          <Image src="/assets/logo.png" alt="ณัฐชญา คลินิก Natchaya Clinic" width={129} height={53} className="h-14 w-auto" priority />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[15px] font-medium text-ink lg:flex" aria-label="เมนูหลัก">
          {NAV.map((item) => {
            const isActive = active === item.key;
            if (item.dropdown && showDropdown) {
              return (
                <div key={item.key} className="group relative">
                  <Link href="/services" className="inline-flex items-center gap-1 transition hover:text-brand-700">
                    บริการ
                    <svg className="h-4 w-4 transition duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-line bg-surface py-2 text-[15px] shadow-soft-lg">
                      {serviceLinks.map((s) => (
                        <Link key={s.href} href={s.href} className="block px-5 py-2.5 transition hover:bg-surface-alt hover:text-brand-700">{s.label}</Link>
                      ))}
                      <Link href="/services" className="mt-1 block border-t border-line px-5 pb-1 pt-3 font-semibold text-brand-700 transition hover:bg-surface-alt">ดูบริการทั้งหมด →</Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={item.key} href={item.href} className={isActive ? "text-brand-700" : "transition hover:text-brand-700"} aria-current={isActive ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
          <a href="#contact" className="transition hover:text-brand-700">ติดต่อเรา</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-line_green px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-95">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
            ปรึกษาฟรี
          </a>
          <button data-nav-toggle aria-label="เปิดเมนู" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink lg:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" /></svg>
          </button>
        </div>
      </div>

      <div data-nav-menu className="hidden border-b border-line bg-surface px-4 py-3 lg:hidden">
        <nav className="grid gap-1 text-[15px] font-medium text-ink">
          {NAV.map((item) => {
            const isActive = active === item.key;
            const base = `rounded-lg px-3 ${item.mpad}`;
            const cls = isActive ? `${base} bg-surface-alt text-brand-700` : `${base} hover:bg-surface-alt`;
            return (
              <Fragment key={item.key}>
                <Link href={item.href} className={cls} aria-current={isActive ? "page" : undefined}>{item.label}</Link>
                {item.dropdown && showDropdown && (
                  <div className="grid gap-0.5 border-l border-line pl-3 text-sm font-normal text-ink-muted">
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} className="rounded-lg px-3 py-2 hover:bg-surface-alt hover:text-brand-700">{s.label}</Link>
                    ))}
                  </div>
                )}
              </Fragment>
            );
          })}
          <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-surface-alt">ติดต่อเรา</a>
          <a href="tel:021025964" className="mt-1 rounded-lg bg-brand-50 px-3 py-2 font-semibold text-brand-700">โทร 02-102-5964</a>
        </nav>
      </div>
    </header>
  );
}
