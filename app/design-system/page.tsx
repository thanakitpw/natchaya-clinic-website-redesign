import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System — Natchaya Clinic",
  description: "ระบบดีไซน์และคลังคอมโพเนนต์สำหรับเว็บไซต์ Natchaya Clinic",
};

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-content space-y-16 px-4 py-10">

      <section>
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">ระบบดีไซน์ Natchaya Clinic</h1>
        <p className="mt-2 max-w-2xl text-ink-muted">หน้านี้คือแหล่งอ้างอิงเดียว (single source of truth) ของสี ฟอนต์ ระยะห่าง และคอมโพเนนต์ทั้งหมด ทุกหน้าในเว็บจะประกอบขึ้นจากชิ้นส่วนเหล่านี้</p>
      </section>

      {/* ============ COLORS ============ */}
      <section id="colors">
        <h2 className="mb-1 text-2xl font-semibold">1. สี (Colors)</h2>
        <p className="mb-5 text-ink-muted">ทองคือสีหลักของแบรนด์ (จากโลโก้) · ม่วงพลัมเป็นสีรอง (accent)</p>

        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">Brand — Champagne Gold (จากโลโก้)</h3>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          <div><div className="h-16 rounded-xl bg-brand-50 ring-1 ring-line"></div><p className="mt-1 text-xs">50</p></div>
          <div><div className="h-16 rounded-xl bg-brand-100 ring-1 ring-line"></div><p className="mt-1 text-xs">100</p></div>
          <div><div className="h-16 rounded-xl bg-brand-200"></div><p className="mt-1 text-xs">200</p></div>
          <div><div className="h-16 rounded-xl bg-brand-300"></div><p className="mt-1 text-xs">300</p></div>
          <div><div className="h-16 rounded-xl bg-brand-400 ring-2 ring-ink/10"></div><p className="mt-1 text-xs font-semibold">400 · หลัก <span className="block font-normal text-ink-soft">#d6c152</span></p></div>
          <div><div className="h-16 rounded-xl bg-brand-500"></div><p className="mt-1 text-xs">500 · hover</p></div>
          <div><div className="h-16 rounded-xl bg-brand-600"></div><p className="mt-1 text-xs">600</p></div>
          <div><div className="h-16 rounded-xl bg-brand-700"></div><p className="mt-1 text-xs">700 · text <span className="block text-ink-soft">#7f6f1d</span></p></div>
        </div>
        <p className="mt-2 text-xs text-ink-soft">ทอง 400 เป็นสีหลัก (สว่าง) ใช้เป็นพื้นปุ่มคู่กับตัวอักษรสีเข้ม · ทอง 700 ใช้เป็นสีตัวอักษร/ลิงก์บนพื้นขาว</p>

        <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">Accent — Plum</h3>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          <div><div className="h-16 rounded-xl bg-accent-100 ring-1 ring-line"></div><p className="mt-1 text-xs">100 <span className="block text-ink-soft">#f6e7f5</span></p></div>
          <div><div className="h-16 rounded-xl bg-accent-500"></div><p className="mt-1 text-xs">500 <span className="block text-ink-soft">#5f055d</span></p></div>
          <div><div className="h-16 rounded-xl bg-accent-600"></div><p className="mt-1 text-xs">600 <span className="block text-ink-soft">#4a0448</span></p></div>
        </div>

        <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">Neutrals & System</h3>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          <div><div className="h-16 rounded-xl bg-ink"></div><p className="mt-1 text-xs">ink <span className="block text-ink-soft">#1f2433</span></p></div>
          <div><div className="h-16 rounded-xl bg-ink-muted"></div><p className="mt-1 text-xs">ink-muted</p></div>
          <div><div className="h-16 rounded-xl bg-surface-alt ring-1 ring-line"></div><p className="mt-1 text-xs">surface-alt</p></div>
          <div><div className="h-16 rounded-xl bg-surface ring-1 ring-line"></div><p className="mt-1 text-xs">surface</p></div>
          <div><div className="h-16 rounded-xl ring-1 ring-line" style={{ background: "#e8eaf0" }}></div><p className="mt-1 text-xs">line</p></div>
          <div><div className="h-16 rounded-xl bg-line_green"></div><p className="mt-1 text-xs">LINE <span className="block text-ink-soft">#06c755</span></p></div>
        </div>
      </section>

      {/* ============ TYPOGRAPHY ============ */}
      <section id="type">
        <h2 className="mb-1 text-2xl font-semibold">2. ฟอนต์ (Typography)</h2>
        <p className="mb-5 text-ink-muted">ใช้ <strong>IBM Plex Sans Thai</strong> ทั้งเว็บ — ทั้งภาษาไทย อังกฤษ และตัวเลข (ฟอนต์เดียว)</p>
        <div className="space-y-4 rounded-2xl bg-surface p-6 shadow-soft">
          <p className="text-5xl font-bold text-brand-700">Natchaya <span className="text-ink">Clinic</span></p>
          <p className="text-4xl font-bold leading-tight">หัวข้อใหญ่ ความงามที่ออกแบบเพื่อคุณ</p>
          <p className="text-2xl font-semibold">หัวข้อรอง บริการโดยแพทย์เฉพาะทาง</p>
          <p className="text-xl font-medium">หัวข้อย่อย ดูแลผิวพรรณและรูปร่าง</p>
          <p className="text-base">ข้อความเนื้อหา (body 16px) — คลินิกความงาม ดูแลโดยทีมแพทย์ผู้เชี่ยวชาญ ด้วยเทคโนโลยีที่ทันสมัยและปลอดภัย เน้นผลลัพธ์ที่เป็นธรรมชาติ</p>
          <p className="text-sm text-ink-muted">ข้อความเล็ก (small 14px) — เงื่อนไขเป็นไปตามที่คลินิกกำหนด</p>
          <p className="text-3xl font-semibold text-brand-700">15+ <span className="text-base font-normal text-ink-muted">ปีประสบการณ์</span></p>
        </div>
      </section>

      {/* ============ SPACING / RADIUS / SHADOW ============ */}
      <section id="tokens">
        <h2 className="mb-1 text-2xl font-semibold">3. ระยะห่าง · มุมโค้ง · เงา</h2>
        <p className="mb-5 text-ink-muted">ใช้สเกล 4/8px · มุมโค้ง xl–2xl · เงานุ่ม (Soft UI)</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-surface p-5 shadow-soft">
            <p className="mb-3 text-sm font-semibold">Spacing</p>
            <div className="space-y-2">
              <div className="h-3 bg-brand-300" style={{ width: "8px" }}></div>
              <div className="h-3 bg-brand-300" style={{ width: "16px" }}></div>
              <div className="h-3 bg-brand-300" style={{ width: "24px" }}></div>
              <div className="h-3 bg-brand-300" style={{ width: "48px" }}></div>
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-5 shadow-soft">
            <p className="mb-3 text-sm font-semibold">Radius</p>
            <div className="flex items-end gap-3">
              <div className="h-12 w-12 rounded-lg bg-brand-100 ring-1 ring-line"></div>
              <div className="h-12 w-12 rounded-xl bg-brand-100 ring-1 ring-line"></div>
              <div className="h-12 w-12 rounded-2xl bg-brand-100 ring-1 ring-line"></div>
              <div className="h-12 w-12 rounded-full bg-brand-100 ring-1 ring-line"></div>
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-5 shadow-soft">
            <p className="mb-3 text-sm font-semibold">Shadow</p>
            <div className="flex items-end gap-4">
              <div className="h-12 w-16 rounded-xl bg-surface shadow-soft"></div>
              <div className="h-12 w-16 rounded-xl bg-surface shadow-soft-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BUTTONS ============ */}
      <section id="buttons">
        <h2 className="mb-1 text-2xl font-semibold">4. ปุ่ม & CTA (Buttons)</h2>
        <p className="mb-5 text-ink-muted">ปุ่มหลัก 1 ปุ่มต่อหน้าจอ · ปุ่ม LINE/โทร เด่นเสมอ · ขนาดแตะ ≥44px</p>

        <div className="space-y-6 rounded-2xl bg-surface p-6 shadow-soft">
          {/* Primary */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-24 text-sm text-ink-soft">Primary</span>
            <button className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-brand-400 px-5 py-3 font-medium text-ink shadow-soft transition duration-200 hover:bg-brand-500 active:bg-brand-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
              จองคิวออนไลน์
            </button>
            <button className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-medium text-ink shadow-soft">hover</button>
            <button disabled className="inline-flex min-h-[44px] cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-brand-400 px-5 py-3 font-medium text-ink opacity-40">disabled</button>
          </div>
          {/* Secondary */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-24 text-sm text-ink-soft">Secondary</span>
            <button className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-500 bg-white px-5 py-3 font-medium text-brand-700 transition duration-200 hover:bg-brand-50">ดูบริการทั้งหมด</button>
          </div>
          {/* LINE + Call */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-24 text-sm text-ink-soft">LINE / โทร</span>
            <a href="#" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-line_green px-5 py-3 font-medium text-white shadow-soft transition hover:brightness-95">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
              แอดไลน์
            </a>
            <a href="tel:000" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 py-3 font-medium text-ink transition hover:border-brand-300 hover:text-brand-700">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              โทรเลย
            </a>
          </div>
        </div>
      </section>

      {/* ============ STICKY MOBILE CTA (demo) ============ */}
      <section id="sticky-cta">
        <h2 className="mb-1 text-2xl font-semibold">5. แถบ CTA ติดล่าง (มือถือ)</h2>
        <p className="mb-5 text-ink-muted">แสดงเฉพาะมือถือ · อยู่ติดขอบล่างตลอด · 3 ปุ่มหลัก โทร / LINE / จองคิว</p>
        <div className="overflow-hidden rounded-2xl bg-surface p-4 shadow-soft">
          <div className="mx-auto max-w-sm rounded-xl border border-line">
            <div className="grid grid-cols-3 divide-x divide-line">
              <a href="tel:000" className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-ink">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                <span className="text-xs font-medium">โทร</span>
              </a>
              <a href="#" className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-ink">
                <svg className="h-5 w-5 text-line_green" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
                <span className="text-xs font-medium">LINE</span>
              </a>
              <a href="#" className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-brand-400 py-2 text-ink">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                <span className="text-xs font-medium">จองคิว</span>
              </a>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-ink-soft">↑ ในหน้าจริงแถบนี้จะ fixed ที่ขอบล่าง เลื่อนหน้าแล้วค่อยปรากฏ</p>
        </div>
      </section>

      {/* ============ CARDS ============ */}
      <section id="cards">
        <h2 className="mb-1 text-2xl font-semibold">6. การ์ด (Cards)</h2>
        <p className="mb-5 text-ink-muted">การ์ดบริการ · บทความ · รีวิว (มีแบบ featured สำหรับรีวิวเซเลบ)</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Service card */}
          <article className="group overflow-hidden rounded-2xl bg-surface shadow-soft transition duration-200 hover:shadow-soft-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="ตัวอย่างบริการ" width={1333} height={1000} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">ดูดไขมัน</span>
              <h3 className="mt-3 text-lg font-semibold">VASER Liposuction</h3>
              <p className="mt-1 text-sm text-ink-muted line-clamp-2">สลายไขมันด้วยคลื่นอัลตราซาวด์ ฟื้นตัวไว เห็นผลชัดเจน</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:gap-2">
                ดูรายละเอียด
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </article>

          {/* Article card */}
          <article className="group overflow-hidden rounded-2xl bg-surface shadow-soft transition duration-200 hover:shadow-soft-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="ตัวอย่างบทความ" width={1333} height={1000} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <span className="rounded-full bg-surface-alt px-2.5 py-1 font-medium text-ink-muted">Beauty Care</span>
                <span>12 พ.ค. 2569</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug line-clamp-2">5 วิธีดูแลผิวหลังเลเซอร์ให้ฟื้นตัวไว</h3>
              <p className="mt-1 text-sm text-ink-muted line-clamp-2">เคล็ดลับการดูแลผิวหลังทำเลเซอร์ เพื่อผลลัพธ์ที่ดี</p>
            </div>
          </article>

          {/* Review card (featured / celeb) */}
          <article className="group relative overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-brand-300 transition duration-200 hover:shadow-soft-lg">
            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-brand-400 px-3 py-1 text-xs font-medium text-ink shadow-soft">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.2 4.46 4.92.72a.6.6 0 0 1 .33 1.02l-3.56 3.47.84 4.9a.6.6 0 0 1-.87.63L12 17.9l-4.4 2.31a.6.6 0 0 1-.87-.63l.84-4.9-3.56-3.47a.6.6 0 0 1 .33-1.02l4.92-.72L11.48 3.5Z"/></svg>
              รีวิวเซเลบ
            </span>
            <div className="grid grid-cols-2">
              <div className="relative aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/300x300/e8eaf0/5b6173?text=Before" alt="ก่อนทำ" className="h-full w-full object-cover" />
                <span className="absolute bottom-1 left-1 rounded bg-ink/70 px-1.5 py-0.5 text-[10px] text-white">ก่อน</span>
              </div>
              <div className="relative aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/300x300/f2eed9/7f6f1d?text=After" alt="หลังทำ" className="h-full w-full object-cover" />
                <span className="absolute bottom-1 left-1 rounded bg-brand-400/90 px-1.5 py-0.5 text-[10px] text-ink">หลัง</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-0.5 text-brand-500" aria-label="ให้คะแนน 5 ดาว">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.2 4.46 4.92.72a.6.6 0 0 1 .33 1.02l-3.56 3.47.84 4.9a.6.6 0 0 1-.87.63L12 17.9l-4.4 2.31a.6.6 0 0 1-.87-.63l.84-4.9-3.56-3.47a.6.6 0 0 1 .33-1.02l4.92-.72L11.48 3.5Z"/></svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.2 4.46 4.92.72a.6.6 0 0 1 .33 1.02l-3.56 3.47.84 4.9a.6.6 0 0 1-.87.63L12 17.9l-4.4 2.31a.6.6 0 0 1-.87-.63l.84-4.9-3.56-3.47a.6.6 0 0 1 .33-1.02l4.92-.72L11.48 3.5Z"/></svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.2 4.46 4.92.72a.6.6 0 0 1 .33 1.02l-3.56 3.47.84 4.9a.6.6 0 0 1-.87.63L12 17.9l-4.4 2.31a.6.6 0 0 1-.87-.63l.84-4.9-3.56-3.47a.6.6 0 0 1 .33-1.02l4.92-.72L11.48 3.5Z"/></svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.2 4.46 4.92.72a.6.6 0 0 1 .33 1.02l-3.56 3.47.84 4.9a.6.6 0 0 1-.87.63L12 17.9l-4.4 2.31a.6.6 0 0 1-.87-.63l.84-4.9-3.56-3.47a.6.6 0 0 1 .33-1.02l4.92-.72L11.48 3.5Z"/></svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.2 4.46 4.92.72a.6.6 0 0 1 .33 1.02l-3.56 3.47.84 4.9a.6.6 0 0 1-.87.63L12 17.9l-4.4 2.31a.6.6 0 0 1-.87-.63l.84-4.9-3.56-3.47a.6.6 0 0 1 .33-1.02l4.92-.72L11.48 3.5Z"/></svg>
              </div>
              <h3 className="mt-2 text-base font-semibold">คุณเอ — ร้อยไหมปรับรูปหน้า</h3>
              <p className="mt-1 text-sm text-ink-muted line-clamp-2">“ผลลัพธ์ดูเป็นธรรมชาติมาก หมอใจดี ดูแลดีทุกขั้นตอน”</p>
            </div>
          </article>
        </div>
      </section>

      {/* ============ FORMS ============ */}
      <section id="forms">
        <h2 className="mb-1 text-2xl font-semibold">7. ฟอร์ม (Forms)</h2>
        <p className="mb-5 text-ink-muted">ป้ายกำกับชัดเจน · error ใต้ช่อง · ปุ่มแสดงสถานะ</p>
        <form className="grid max-w-xl gap-4 rounded-2xl bg-surface p-6 shadow-soft">
          <div>
            <label htmlFor="ds-name" className="mb-1 block text-sm font-medium">ชื่อ-นามสกุล <span className="text-red-500">*</span></label>
            <input id="ds-name" type="text" placeholder="เช่น สมหญิง ใจดี" className="min-h-[44px] w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-300" />
          </div>
          <div>
            <label htmlFor="ds-phone" className="mb-1 block text-sm font-medium">เบอร์โทร <span className="text-red-500">*</span></label>
            <input id="ds-phone" type="tel" inputMode="tel" defaultValue="08" className="min-h-[44px] w-full rounded-xl border border-red-400 bg-white px-4 py-3 text-base outline-none ring-2 ring-red-100" aria-describedby="ds-phone-err" />
            <p id="ds-phone-err" className="mt-1 text-sm text-red-600">กรุณากรอกเบอร์โทรให้ครบ 10 หลัก</p>
          </div>
          <div>
            <label htmlFor="ds-service" className="mb-1 block text-sm font-medium">บริการที่สนใจ</label>
            <select id="ds-service" className="min-h-[44px] w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-300">
              <option>ดูดไขมัน</option><option>เลเซอร์</option><option>ร้อยไหมปรับรูปหน้า</option>
            </select>
          </div>
          <div>
            <label htmlFor="ds-msg" className="mb-1 block text-sm font-medium">ข้อความ</label>
            <textarea id="ds-msg" rows={3} placeholder="รายละเอียดเพิ่มเติม..." className="w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-300"></textarea>
          </div>
          <button type="submit" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-brand-400 px-5 py-3 font-medium text-ink shadow-soft transition hover:bg-brand-500">ส่งข้อมูลจองคิว</button>
        </form>
      </section>

      {/* ============ NAVBAR ============ */}
      <section id="nav">
        <h2 className="mb-1 text-2xl font-semibold">8. เนวิเกชัน (Navbar)</h2>
        <p className="mb-5 text-ink-muted">โลโก้ซ้าย · เมนูลิงก์จริง (ไม่มี <code>javascript:</code>) · แฮมเบอร์เกอร์บนมือถือ</p>
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <div className="border-b border-line bg-surface">
            <div className="flex items-center justify-between px-4 py-3">
              <Link href="/" className="inline-flex items-center" aria-label="Natchaya Clinic หน้าแรก"><Image src="/assets/logo.png" alt="Natchaya Clinic" width={129} height={53} className="h-10 w-auto" /></Link>
              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                <Link href="/services" className="hover:text-brand-700">บริการ</Link>
                <Link href="/review-detail" className="hover:text-brand-700">รีวิว</Link>
                <Link href="/news-detail" className="hover:text-brand-700">บทความ</Link>
                <Link href="/#contact" className="hover:text-brand-700">ติดต่อ</Link>
              </nav>
              <div className="flex items-center gap-2">
                <a href="#" className="hidden rounded-xl bg-brand-400 px-4 py-2 text-sm font-medium text-ink sm:inline-block">จองคิว</a>
                <button data-nav-toggle aria-label="เปิดเมนู" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line md:hidden">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" /></svg>
                </button>
              </div>
            </div>
            <div data-nav-menu className="hidden border-t border-line px-4 py-3 md:hidden">
              <nav className="grid gap-1 text-sm font-medium">
                <Link href="/services" className="rounded-lg px-3 py-2 hover:bg-surface-alt">บริการ</Link>
                <Link href="/review-detail" className="rounded-lg px-3 py-2 hover:bg-surface-alt">รีวิว</Link>
                <Link href="/news-detail" className="rounded-lg px-3 py-2 hover:bg-surface-alt">บทความ</Link>
                <Link href="/#contact" className="rounded-lg px-3 py-2 hover:bg-surface-alt">ติดต่อ</Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-soft">↑ กดปุ่มแฮมเบอร์เกอร์เพื่อทดสอบเมนูมือถือ (ย่อจอให้แคบกว่า 768px)</p>
      </section>

      {/* ============ BREADCRUMB / ACCORDION / PAGINATION / GALLERY ============ */}
      <section id="misc">
        <h2 className="mb-1 text-2xl font-semibold">9. ส่วนประกอบอื่น</h2>

        <h3 className="mb-2 mt-5 text-sm font-semibold uppercase tracking-wide text-ink-soft">Breadcrumb</h3>
        <nav className="flex items-center gap-2 text-sm text-ink-muted" aria-label="เส้นทาง">
          <Link href="/" className="hover:text-brand-700">หน้าแรก</Link>
          <span className="text-ink-soft">/</span>
          <a href="#" className="hover:text-brand-700">บริการ</a>
          <span className="text-ink-soft">/</span>
          <span className="text-ink">ดูดไขมัน VASER</span>
        </nav>

        <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">Accordion (FAQ)</h3>
        <div className="max-w-2xl divide-y divide-line overflow-hidden rounded-2xl bg-surface shadow-soft">
          <div>
            <button data-accordion-trigger aria-expanded="true" className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium">
              ดูดไขมันเจ็บไหม ใช้เวลาพักฟื้นกี่วัน?
              <svg className="h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <div className="px-5 pb-4 text-sm text-ink-muted">ใช้ยาชาเฉพาะที่ ระหว่างทำแทบไม่เจ็บ พักฟื้นประมาณ 3–7 วันก็กลับไปใช้ชีวิตปกติได้</div>
          </div>
          <div>
            <button data-accordion-trigger aria-expanded="false" className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium">
              มีบริการผ่อนชำระไหม?
              <svg className="h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <div className="hidden px-5 pb-4 text-sm text-ink-muted">มีบริการผ่อน 0% ผ่านบัตรเครดิตที่ร่วมรายการ สอบถามเพิ่มเติมทาง LINE</div>
          </div>
        </div>

        <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">Pagination</h3>
        <nav className="flex items-center gap-1" aria-label="หน้า">
          <a href="#" className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-line px-3 text-sm hover:bg-surface-alt">ก่อนหน้า</a>
          <a href="#" aria-current="page" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400 text-sm font-medium text-ink">1</a>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-sm hover:bg-surface-alt">2</a>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-sm hover:bg-surface-alt">3</a>
          <span className="px-2 text-ink-soft">…</span>
          <a href="#" className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-line px-3 text-sm hover:bg-surface-alt">ถัดไป</a>
        </nav>

        <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">Gallery grid</h3>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="แกลเลอรี 1" width={1333} height={1000} className="aspect-square w-full rounded-xl object-cover" />
          <Image src="/assets/generated/imagegen/service-pico.jpg" alt="แกลเลอรี 2" width={1333} height={1000} className="aspect-square w-full rounded-xl object-cover" />
          <Image src="/assets/generated/imagegen/service-emface.jpg" alt="แกลเลอรี 3" width={1333} height={1000} className="aspect-square w-full rounded-xl object-cover" />
          <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="แกลเลอรี 4" width={1250} height={1000} className="aspect-square w-full rounded-xl object-cover" />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <section id="footer">
        <h2 className="mb-1 text-2xl font-semibold">10. Footer</h2>
        <footer className="mt-3 overflow-hidden rounded-2xl bg-ink text-surface-alt shadow-soft">
          <div className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xl font-bold text-white">Natchaya Clinic</p>
              <p className="mt-2 text-sm text-white/70">คลินิกความงาม ดูแลโดยทีมแพทย์เฉพาะทาง</p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-white">บริการ</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">ดูดไขมัน</a></li>
                <li><a href="#" className="hover:text-white">เลเซอร์</a></li>
                <li><a href="#" className="hover:text-white">ร้อยไหมปรับรูปหน้า</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-white">ลิงก์</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="hover:text-white">รีวิว</a></li>
                <li><a href="#" className="hover:text-white">บทความ</a></li>
                <li><a href="#" className="hover:text-white">ติดต่อ</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-white">ติดต่อ</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>โทร 0X-XXX-XXXX</li>
                <li>LINE @natchaya</li>
                <li>กรุงเทพมหานคร</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 px-8 py-4 text-center text-xs text-white/50">© 2569 Natchaya Clinic. สงวนลิขสิทธิ์.</div>
        </footer>
      </section>

    </main>
  );
}
