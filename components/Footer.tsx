import Link from "next/link";
import Image from "next/image";

const sitemap: Array<{ href: string; label: string }> = [
  { href: "/beautycare#body", label: "BODY · ดูดไขมัน-กระชับสัดส่วน" },
  { href: "/beautycare#surgery", label: "SURGERY · ศัลยกรรม" },
  { href: "/beautycare#treatment-laser", label: "TREATMENT & LASER" },
  { href: "/beautycare#facial-design", label: "FACIAL DESIGN" },
  { href: "/beautycare#health-program", label: "HEALTH PROGRAM" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface-alt bg-[url('/assets/footer-bg.png')] bg-cover bg-center">
      <div className="relative z-10 mx-auto grid max-w-content items-stretch gap-6 px-4 py-16 md:grid-cols-3">
        {/* CARD 1: brand + description + highlights + socials */}
        <div className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line/70">
          <Image src="/assets/logo.png" alt="ณัฐชญา คลินิก Natchaya Clinic" width={129} height={53} className="h-12 w-auto self-start" />
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">ณัฐชญา คลินิก คลินิกเสริมความงาม ดูแลรูปร่าง ผิวพรรณ และศัลยกรรม โดยทีมแพทย์เฉพาะทาง ด้วยเทคโนโลยีมาตรฐานและความปลอดภัยเป็นอันดับแรก เน้นผลลัพธ์ที่เป็นธรรมชาติ</p>
          <ul className="mt-6 space-y-2.5 text-sm text-ink-muted">
            <li className="flex items-start gap-2"><svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg><span>ทีมแพทย์เฉพาะทางมากประสบการณ์</span></li>
            <li className="flex items-start gap-2"><svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg><span>เทคโนโลยีมาตรฐาน ความปลอดภัยสูง</span></li>
            <li className="flex items-start gap-2"><svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg><span>ดูแลต่อเนื่อง ตั้งแต่ปรึกษาจนถึงติดตามผล</span></li>
          </ul>
          <div className="mt-auto flex items-center gap-2.5 pt-7">
            <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg></a>
            <a href="https://line.me/ti/p/~natchayaclinic" aria-label="LINE" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg></a>
            <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32C15.51 4.01 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 1.8A3.14 3.14 0 1 0 15.14 12 3.14 3.14 0 0 0 12 8.86Zm5.08-3.24a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z"/></svg></a>
            <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.5 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6Z"/></svg></a>
            <a href="#" aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.86a2.36 2.36 0 0 1-2.36 2.3 2.36 2.36 0 0 1-.6-4.64v-3.28a5.56 5.56 0 0 0-4.84 5.5A5.56 5.56 0 0 0 10.1 21a5.56 5.56 0 0 0 5.56-5.56V9.04a7.45 7.45 0 0 0 4.34 1.39V7.2a4.28 4.28 0 0 1-3.4-1.38Z"/></svg></a>
          </div>
        </div>

        {/* CARD 2: sitemap / services */}
        <div className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line/70">
          <div className="mb-5 flex items-center gap-4">
            <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">แผนผังเว็บไซต์</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-brand-300 to-transparent"></span>
          </div>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            {sitemap.map((s) => (
              <li key={s.href}><Link href={s.href} className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* CARD 3: contact */}
        <div className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line/70">
          <div className="mb-5 flex items-center gap-4">
            <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">ติดต่อเรา</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-brand-300 to-transparent"></span>
          </div>
          <ul className="space-y-4 text-sm text-ink-muted">
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
              <span>9 9-11 ถนนเสรีไทย แขวงรามอินทรา เขตคันนายาว กรุงเทพมหานคร 10230</span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
              <span><a href="tel:021025964" className="transition hover:text-brand-700">02-102-5964, 02-102-5965</a><br />Hotline 084-422-2962, 086-400-0466</span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              <span>เปิดทุกวัน 10:00–20:00 น.</span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-line_green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
              <a href="https://line.me/ti/p/~natchayaclinic" className="font-semibold text-line_green">LINE @natchayaclinic</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 bg-brand-700 py-3.5 text-center text-xs text-white/85">© 2026 · ณัฐชญา คลินิก (Natchaya Clinic) · สงวนลิขสิทธิ์ทุกประการ</div>
    </footer>
  );
}
