import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import InfluencerReviews from "@/components/InfluencerReviews";

export const metadata: Metadata = {
  title: "รีวิวจากลูกค้า | ณัฐชญา คลินิก Natchaya Clinic",
  description:
    "รีวิวจากลูกค้า ณัฐชญา คลินิก — ภาพก่อน-หลังจริง ดูดไขมัน ศัลยกรรม เลเซอร์ตาสองชั้น ดูแลโดยทีมแพทย์เฉพาะทาง (ผลการรักษาขึ้นอยู่กับเฉพาะบุคคล)",
};

export default function ReviewPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <span className="text-ink">รีวิว</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Customer Reviews</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">รีวิวจากลูกค้า</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">ภาพก่อน-หลังจริงจากลูกค้า ณัฐชญา คลินิก ดูดไขมัน ศัลยกรรม และเลเซอร์ตาสองชั้น ดูแลโดยทีมแพทย์เฉพาะทาง</p>
        </div>
      </section>

      {/* ============ REVIEW GALLERY + FILTER ============ */}
      <section className="mx-auto max-w-content px-4 py-14" data-tabs>
        {/* filter pills */}
        <div className="mb-9 flex flex-wrap justify-center gap-2">
          <button data-tab="all" className="is-active rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="true">ทั้งหมด</button>
          <button data-tab="lipo" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">ดูดไขมัน</button>
          <button data-tab="surgery" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">ศัลยกรรม</button>
          <button data-tab="laser" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">เลเซอร์-ตา</button>
        </div>

        {/* PANEL: ทั้งหมด */}
        <div data-panel="all" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* 171 ดูดไขมันท้อง (lipo) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันท้อง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันท้อง</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพก่อน/หลังทำ</p>
            </div>
          </Link>
          {/* 172 ดูดไขมันเอวหลัง (lipo) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันเอวหลัง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันเอวหลัง</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพก่อนทำ - หลังทำ</p>
            </div>
          </Link>
          {/* 176 ดูดไขมันแขน (lipo) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันแขน หลังทำ 2 เดือน" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันแขน หลังทำ 2 เดือน</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพหลังทำ 2 เดือน</p>
            </div>
          </Link>
          {/* 218 ลดน่อง (lipo) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ลดน่อง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ลดน่อง</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพก่อน/หลังทำ</p>
            </div>
          </Link>
          {/* ดูดไขมันเหนียง/กรอบหน้า (lipo, testimonial) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-review-face.jpg" alt="ดูดไขมันเหนียง กรอบหน้า" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันเหนียง กรอบหน้า</h3>
              <p className="mt-1 text-sm text-ink-muted">น้ำหนักขึ้น เหนียงก็มา ทำให้หน้าใหญ่มีคางสองชั้น เลยดูดไขมันให้ใบหน้ากลับมาเรียวเล็กสวยเหมือนเดิม</p>
            </div>
          </Link>
          {/* 219 เลเซอร์ตาสองชั้น (laser) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-review-eyelid.jpg" alt="เปลี่ยนตาเศร้าให้เป็นตาสองชั้นสวยคมโตด้วยเลเซอร์" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">เลเซอร์-ตา</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">เปลี่ยนตาเศร้าให้เป็นตาสองชั้นสวยคมโตด้วยเลเซอร์</h3>
              <p className="mt-1 text-sm text-ink-muted">ทำตา 2 ชั้นด้วย Plexr Plasma Laser แก้ปัญหาหนังตาเกิน หนังตาตก โดยไม่ต้องผ่าตัด ตาดูโตขึ้น แววตาสดใส</p>
            </div>
          </Link>
          {/* เสริมหน้าอก (surgery, testimonial) */}
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-surgery.jpg" alt="เสริมหน้าอก" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ศัลยกรรม</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">เสริมหน้าอก</h3>
              <p className="mt-1 text-sm text-ink-muted">ใฝ่ฝันอยากมีหน้าอก สานฝันให้เป็นจริงด้วยการทำศัลยกรรมเสริมหน้าอก ให้มีอกสวยอย่างเป็นธรรมชาติ</p>
            </div>
          </Link>
        </div>

        {/* PANEL: ดูดไขมัน */}
        <div data-panel="lipo" className="hidden grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันท้อง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันท้อง</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพก่อน/หลังทำ</p>
            </div>
          </Link>
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันเอวหลัง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันเอวหลัง</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพก่อนทำ - หลังทำ</p>
            </div>
          </Link>
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันแขน หลังทำ 2 เดือน" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันแขน หลังทำ 2 เดือน</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพหลังทำ 2 เดือน</p>
            </div>
          </Link>
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-body.jpg" alt="ลดน่อง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ลดน่อง</h3>
              <p className="mt-1 text-sm text-ink-muted">ภาพก่อน/หลังทำ</p>
            </div>
          </Link>
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-review-face.jpg" alt="ดูดไขมันเหนียง กรอบหน้า" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">ดูดไขมันเหนียง กรอบหน้า</h3>
              <p className="mt-1 text-sm text-ink-muted">น้ำหนักขึ้น เหนียงก็มา ทำให้หน้าใหญ่มีคางสองชั้น เลยดูดไขมันให้ใบหน้ากลับมาเรียวเล็กสวยเหมือนเดิม</p>
            </div>
          </Link>
        </div>

        {/* PANEL: ศัลยกรรม */}
        <div data-panel="surgery" className="hidden grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-service-surgery.jpg" alt="เสริมหน้าอก" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">ศัลยกรรม</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">เสริมหน้าอก</h3>
              <p className="mt-1 text-sm text-ink-muted">ใฝ่ฝันอยากมีหน้าอก สานฝันให้เป็นจริงด้วยการทำศัลยกรรมเสริมหน้าอก ให้มีอกสวยอย่างเป็นธรรมชาติ</p>
            </div>
          </Link>
        </div>

        {/* PANEL: เลเซอร์-ตา */}
        <div data-panel="laser" className="hidden grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link href="/review-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-review-eyelid.jpg" alt="เปลี่ยนตาเศร้าให้เป็นตาสองชั้นสวยคมโตด้วยเลเซอร์" width={1448} height={1086} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">เลเซอร์-ตา</span>
              <h3 className="mt-1 font-semibold transition group-hover:text-brand-700">เปลี่ยนตาเศร้าให้เป็นตาสองชั้นสวยคมโตด้วยเลเซอร์</h3>
              <p className="mt-1 text-sm text-ink-muted">ทำตา 2 ชั้นด้วย Plexr Plasma Laser แก้ปัญหาหนังตาเกิน หนังตาตก โดยไม่ต้องผ่าตัด ตาดูโตขึ้น แววตาสดใส</p>
            </div>
          </Link>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-10 rounded-xl bg-surface-alt px-4 py-3 text-center text-sm text-ink-soft ring-1 ring-line">* ผลการรักษาขึ้นอยู่กับเฉพาะบุคคล</p>

        {/* PAGINATION */}
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="หน้ารีวิว">
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm text-ink-muted transition hover:bg-surface-alt" aria-label="หน้าก่อนหน้า">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </a>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-sm font-semibold text-ink shadow-soft" aria-current="page">1</a>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm text-ink-muted transition hover:bg-surface-alt">2</a>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm text-ink-muted transition hover:bg-surface-alt">3</a>
          <span className="px-1 text-sm text-ink-soft">…</span>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm text-ink-muted transition hover:bg-surface-alt" aria-label="หน้าถัดไป">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </a>
        </nav>
      </section>

      <InfluencerReviews layout="grid" />

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">อยากได้ผลลัพธ์แบบนี้บ้าง?</h2>
          <p className="max-w-xl text-white/80">ปรึกษาทีมแพทย์เฉพาะทางของเรา ประเมินปัญหาและวางแผนการดูแลแบบเฉพาะบุคคล</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
