import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dual Yellow เลเซอร์สองความยาวคลื่น ดูแลฝ้า รอยแดง เส้นเลือดฝอย | ณัฐชญา คลินิก Natchaya Clinic",
  description: "Dual Yellow เลเซอร์คอปเปอร์โบรไมด์จาก Norseld (ออสเตรเลีย) ให้แสงสีเหลือง 578 nm และสีเขียว 511 nm พร้อมกันจากเครื่องเดียว ดูแลฝ้า ฝ้าดื้อ รอยแดง และเส้นเลือดฝอย ดูแลโดยทีมแพทย์ที่ ณัฐชญา คลินิก",
};

export default function DualYellowPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/beautycare#treatment-laser" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">Dual Yellow</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Laser</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Dual Yellow</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">เลเซอร์สองความยาวคลื่น ดูแลฝ้า รอยแดง และเส้นเลือดฝอย</p>
          <p className="mt-2 text-sm text-ink-soft">โดย Norseld Pty Ltd (ออสเตรเลีย)</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">จองคิว / ปรึกษาแพทย์</Link>
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
              ปรึกษาฟรีทาง LINE
            </a>
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Image src="/assets/generated/imagegen/service-dual-yellow.jpg" alt="เครื่องเลเซอร์ Dual Yellow สำหรับดูแลฝ้าและรอยแดง" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Dual Yellow คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              Dual Yellow คือเลเซอร์เทคโนโลยี <strong className="font-semibold text-ink">copper bromide (คอปเปอร์โบรไมด์)</strong> จาก <strong className="font-semibold text-ink">Norseld Pty Ltd ประเทศออสเตรเลีย</strong>
              จุดเด่นคือให้แสง <strong className="font-semibold text-ink">2 ความยาวคลื่นพร้อมกันจากเครื่องเดียว</strong> — <strong className="font-semibold text-ink">สีเหลือง 578 nm</strong> และ <strong className="font-semibold text-ink">สีเขียว 511 nm</strong>
            </p>
            <p className="mt-4 text-ink-muted">
              เครื่องปล่อยพลังงานแบบ micropulse ได้ถึง 22,000 พัลส์ต่อวินาที ทำให้เกิดปฏิกิริยาเชิงแสงเคมี (photochemical) ในชั้นผิว
              แทนการทำลายด้วยความร้อนรุนแรง จึงลดการบาดเจ็บของเนื้อเยื่อข้างเคียง
            </p>
            <p className="mt-6 text-sm text-ink-soft">* ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
          </div>
        </div>
      </section>

      {/* ============ TWO WAVELENGTHS (core concept) ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How it works</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">แสงสองสี ทำคนละหน้าที่</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">หัวใจของ Dual Yellow คือการทำงานของแสงสองความยาวคลื่นที่จับคนละเป้าหมายในผิว</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Yellow 578 nm */}
            <article className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-2 ring-brand-300">
              <span className="inline-flex w-fit items-center rounded-full bg-brand-400 px-4 py-1.5 text-sm font-semibold text-ink">สีเหลือง · 578 nm</span>
              <h3 className="mt-4 text-xl font-bold">จัดการเส้นเลือดฝอยและรอยแดง</h3>
              <p className="mt-3 text-ink-muted">
                แสงสีเหลือง 578 nm ถูก<strong className="font-semibold text-ink">ดูดซับโดยฮีโมโกลบินได้ตรงจุดสูงสุดพอดี</strong>
                จึงจัดการ <strong className="font-semibold text-ink">เส้นเลือดฝอยและรอยแดง</strong> ได้อย่างแม่นยำ
              </p>
              <p className="mt-3 text-ink-muted">
                และในกรณีฝ้า แสงจะลงลึกไปยับยั้ง <strong className="font-semibold text-ink">VEGF</strong> (Vascular Endothelial Growth Factor)
                ซึ่งเป็นปัจจัยกระตุ้นการสร้างหลอดเลือด และเชื่อว่าเป็นต้นตอเชิงลึกของฝ้า
              </p>
            </article>
            {/* Green 511 nm */}
            <article className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-2 ring-line">
              <span className="inline-flex w-fit items-center rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-white">สีเขียว · 511 nm</span>
              <h3 className="mt-4 text-xl font-bold">จัดการรอยดำและความหมองคล้ำ</h3>
              <p className="mt-3 text-ink-muted">
                แสงสีเขียว 511 nm ถูก<strong className="font-semibold text-ink">ดูดซับโดยเมลานินในเซลล์เม็ดสี</strong>
                จึงจัดการ <strong className="font-semibold text-ink">รอยดำและความหมองคล้ำ</strong> บนผิว
              </p>
              <p className="mt-3 text-ink-muted">
                เมื่อทำงานร่วมกับแสงสีเหลืองในครั้งเดียวกัน จึงดูแลได้ทั้งปัจจัยด้านเม็ดสีและปัจจัยด้านหลอดเลือดไปพร้อมกัน
              </p>
            </article>
          </div>

          {/* Differentiator callout */}
          <div className="mt-8 rounded-2xl border-l-4 border-brand-400 bg-brand-50 p-6 shadow-soft sm:p-8">
            <div className="flex gap-4">
              <svg className="mt-0.5 h-6 w-6 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">จุดที่ต่างจากเลเซอร์ฝ้าทั่วไป</h3>
                <p className="mt-3 text-ink-muted">
                  Dual Yellow <strong className="font-semibold text-ink">ไม่ได้แค่กระแทกเม็ดสีให้แตก แต่เข้าไปจัดการที่หลอดเลือดซึ่งเป็นกลไกเบื้องหลังฝ้า</strong>
                  จึงมักถูกเลือกใช้ในเคสฝ้าดื้อที่ตอบสนองไม่ดีต่อการรักษาแบบเดิม
                </p>
              </div>
            </div>
          </div>

          {/* Acne mechanism */}
          <div className="mt-6 rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line sm:p-8">
            <div className="flex gap-4">
              <svg className="mt-0.5 h-6 w-6 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">สำหรับสิว</h3>
                <p className="mt-3 text-ink-muted">
                  แสงเหลืองกระตุ้นสารพอร์ไฟรินในเชื้อ P. acnes ให้เกิดปฏิกิริยาทำลายตัวเชื้อ
                  พร้อมลดขนาดต่อมไขมันเพื่อลดการผลิตน้ำมันบนผิว
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT IT TREATS ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Indications</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ดูแลปัญหาผิวแบบไหนได้บ้าง</h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <span><strong className="font-semibold">ฝ้า</strong> โดยเฉพาะฝ้าเลือด ฝ้าดื้อ และฝ้าที่กลับมาเป็นซ้ำ</span>
          </li>
          <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <span><strong className="font-semibold">รอยแดง ผิวแพ้ง่าย</strong> และโรซาเซีย (Rosacea)</span>
          </li>
          <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <span><strong className="font-semibold">เส้นเลือดฝอยขยาย</strong> บนใบหน้าและขา (telangiectasia)</span>
          </li>
          <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <span><strong className="font-semibold">สิวอักเสบ</strong> (Inflammatory Acne Vulgaris)</span>
          </li>
          <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <span><strong className="font-semibold">ปาน ไฝแดง</strong> (cherry angioma) และปานแดงแต่กำเนิด</span>
          </li>
          <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <span><strong className="font-semibold">ผิวหมองคล้ำ</strong> สีผิวไม่สม่ำเสมอ</span>
          </li>
        </ul>
        <p className="mt-6 text-sm text-ink-soft">* ความเหมาะสมและแนวทางการดูแลขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Why Dual Yellow</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">จุดเด่นของ Dual Yellow</h2>
              <ul className="mt-6 space-y-4 text-ink-muted">
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ทำงานกับทั้งเม็ดสีและหลอดเลือดในครั้งเดียว — ตรงกับธรรมชาติของฝ้าที่มักมีทั้งสองปัจจัยร่วมกัน
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  พลังงานอ่อนโยน เหมาะกับผิวบอบบางและผิวแพ้ง่าย
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  แทบไม่มีระยะพักฟื้น
                </li>
              </ul>
            </div>
            <div>
              <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เพื่อประเมินการดูแลฝ้าด้วย Dual Yellow" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXPECTATION SETTING ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-brand-200 sm:p-10">
          <div className="flex gap-4">
            <svg className="mt-0.5 h-7 w-7 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Expectation</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">สิ่งที่ควรรู้ก่อนตัดสินใจ</h2>
              <ul className="mt-6 space-y-4 text-ink-muted">
                <li className="flex gap-3">
                  <svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                  <span>ฝ้าและรอยแดงเป็นภาวะที่ต้อง<strong className="font-semibold text-ink">รักษาต่อเนื่องเป็นคอร์ส ไม่ใช่ครั้งเดียวจบ</strong></span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                  <span>ฝ้า<strong className="font-semibold text-ink">มีโอกาสกลับมาเป็นซ้ำ</strong> การดูแลจึงต้องต่อเนื่อง</span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                  <span>จำนวนครั้งและระยะห่างระหว่างครั้ง<strong className="font-semibold text-ink">ต้องให้แพทย์ประเมินตามความรุนแรง</strong>ของแต่ละบุคคล</span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                  <span><strong className="font-semibold text-ink">การป้องกันแดดอย่างเคร่งครัด</strong>เป็นส่วนสำคัญของการดูแลฝ้า</span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                  <span>เป้าหมายของการดูแลคือ<strong className="font-semibold text-ink">ผิวดูกระจ่างขึ้น สีผิวสม่ำเสมอขึ้น</strong></span>
                </li>
              </ul>
              <p className="mt-7 rounded-xl bg-surface-alt px-5 py-4 text-sm font-medium text-ink">
                ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล · ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATION ============ */}
      {/* TODO: ขอเลขที่ อย. ไทย + ยืนยันว่า "Shining Bright" เป็นชื่อโปรแกรมของคลินิกหรือชื่อโปรโตคอลจาก Norseld */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Certification</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">การรับรอง</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex w-fit items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">US FDA 510(k)</span>
              <h3 className="mt-4 text-xl font-bold">K032397</h3>
              <p className="mt-3 text-ink-muted">
                Dual Yellow Laser โดย Norseld Pty., Ltd. <strong className="font-semibold text-ink">ได้รับการรับรองจาก US FDA</strong>
              </p>
              <p className="mt-3 text-ink-muted">
                ข้อบ่งใช้ที่ได้รับการรับรอง: <strong className="font-semibold text-ink">การรักษารอยโรคหลอดเลือดและรอยโรคเม็ดสี</strong>
                (vascular and pigmented lesions)
              </p>
            </article>
            <article className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex w-fit items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">มาตรฐานการผลิต</span>
              <h3 className="mt-4 text-xl font-bold">ISO 13485:2016</h3>
              <p className="mt-3 text-ink-muted">
                ผลิตภายใต้มาตรฐาน ISO 13485:2016 และผ่านการรับรองจากหน่วยงานกำกับดูแลในหลายประเทศ
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                <li className="rounded-full bg-surface-alt px-3.5 py-1.5 font-medium text-ink-muted ring-1 ring-line">TGA (ออสเตรเลีย)</li>
                <li className="rounded-full bg-surface-alt px-3.5 py-1.5 font-medium text-ink-muted ring-1 ring-line">CE (ยุโรป)</li>
                <li className="rounded-full bg-surface-alt px-3.5 py-1.5 font-medium text-ink-muted ring-1 ring-line">KFDA (เกาหลีใต้)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">คำถามที่พบบ่อย</h2>
        </div>
        <div className="mx-auto max-w-2xl space-y-3">
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>Dual Yellow คืออะไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              Dual Yellow เป็นเลเซอร์เทคโนโลยีคอปเปอร์โบรไมด์จาก Norseld Pty Ltd ประเทศออสเตรเลีย ที่ให้แสง 2 ความยาวคลื่นพร้อมกันจากเครื่องเดียว คือสีเหลือง 578 nm ซึ่งทำงานกับหลอดเลือดและรอยแดง และสีเขียว 511 nm ซึ่งทำงานกับเม็ดสีและความหมองคล้ำ โดยปล่อยพลังงานแบบ micropulse ทำให้เกิดปฏิกิริยาเชิงแสงเคมีแทนการทำลายด้วยความร้อนรุนแรง
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ทำไม Dual Yellow ถึงเหมาะกับฝ้าดื้อ?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              เพราะ Dual Yellow ไม่ได้ทำงานกับเม็ดสีเพียงอย่างเดียว แต่แสงสีเหลือง 578 nm ยังลงลึกไปยับยั้ง VEGF ซึ่งเป็นปัจจัยกระตุ้นการสร้างหลอดเลือดที่เชื่อว่าเป็นกลไกเบื้องหลังฝ้า จึงมักถูกเลือกใช้ในเคสฝ้าดื้อที่ตอบสนองไม่ดีต่อการรักษาแบบเดิม ทั้งนี้แพทย์จะเป็นผู้ประเมินว่าเหมาะสมกับสภาพผิวของแต่ละบุคคลหรือไม่
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ต้องพักฟื้นไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              Dual Yellow ใช้พลังงานที่อ่อนโยนและแทบไม่มีระยะพักฟื้น จึงเป็นทางเลือกที่มักใช้กับผิวบอบบางและผิวแพ้ง่าย อย่างไรก็ตาม ความรู้สึกระหว่างทำและอาการหลังทำแตกต่างกันไปในแต่ละบุคคล ควรแจ้งประวัติผิวและยาที่ใช้อยู่กับแพทย์เพื่อประเมินก่อนเข้ารับบริการ
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องทำกี่ครั้งถึงจะเห็นผล?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ฝ้าและรอยแดงเป็นภาวะที่ต้องรักษาต่อเนื่องเป็นคอร์ส ไม่ใช่ครั้งเดียวจบ จำนวนครั้งและระยะห่างระหว่างครั้งต้องให้แพทย์ประเมินตามความรุนแรงและลักษณะผิวของแต่ละบุคคล ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ฝ้าจะกลับมาเป็นอีกไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              มีโอกาสกลับมาเป็นซ้ำได้ ฝ้าเป็นภาวะที่ต้องดูแลต่อเนื่อง ไม่ใช่ทำครั้งเดียวแล้วจบถาวร การป้องกันแดดอย่างเคร่งครัดและการดูแลผิวตามคำแนะนำของแพทย์เป็นส่วนสำคัญที่ช่วยให้ผิวดูกระจ่างขึ้นและสีผิวสม่ำเสมอขึ้นในระยะยาว แนะนำให้เข้ารับการประเมินและติดตามผลกับแพทย์เป็นระยะ
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More Services</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นที่เกี่ยวข้อง</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/pico-enlighten" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-pico.jpg" alt="Pico Enlighten พิโคเลเซอร์ดูแลเม็ดสีและรอยดำ" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Pico Enlighten</h3><p className="mt-1 text-sm text-ink-muted">พิโคเลเซอร์ ดูแลเม็ดสีและรอยดำ</p></div>
            </Link>
            <Link href="/emface" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-emface.jpg" alt="Emface ยกกระชับใบหน้าโดยไม่ใช้เข็ม" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Emface</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับใบหน้าโดยไม่ใช้เข็ม</p></div>
            </Link>
            <Link href="/ulthera" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="Ulthera ยกกระชับผิวด้วยคลื่นอัลตราซาวด์" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Ulthera</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวด้วยคลื่นอัลตราซาวด์</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจ Dual Yellow? ปรึกษาทีมแพทย์ของเรา</h2>
          <p className="max-w-xl text-white/80">นัดหมายหรือสอบถามข้อมูลบริการ ทีมงานพร้อมดูแลและให้คำปรึกษาแบบเฉพาะบุคคล</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
          <p className="text-sm text-white/70">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล · ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
        </div>
      </section>
    </main>
  );
}
