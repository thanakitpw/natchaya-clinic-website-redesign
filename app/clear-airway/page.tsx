import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Airway เลเซอร์ลดเสียงกรน ไม่ต้องผ่าตัด | ณัฐชญา คลินิก Natchaya Clinic",
  description: "Clear Airway ใช้พลังงานเลเซอร์กระตุ้นให้เนื้อเยื่อเพดานอ่อนกระชับขึ้น เพื่อลดเสียงกรน ไม่ต้องผ่าตัด ไม่มีแผล — เป็นหัตถการที่มุ่งลดเสียงกรน ไม่ใช่การรักษาภาวะหยุดหายใจขณะหลับ ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ควรเข้ารับการประเมินจากแพทย์ก่อน ที่ ณัฐชญา คลินิก",
};

export default function ClearAirwayPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">Clear Airway</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Clear Airway Program</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Clear Airway</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">เลเซอร์ลดเสียงกรน โดยไม่ต้องผ่าตัดและไม่มีแผล</p>
          {/* TODO (ต้องถามคลินิก — ดู content/research/07-clear-airway.md ข้อ 1-6):
               เครื่องที่ใช้จริง + เลขที่ อย. เครื่องมือแพทย์ (ไทย) + โปรโตคอลจริง (กี่นาที กี่ครั้ง ห่างกันเท่าไร)
               ตามคำสั่งลูกค้า 2026-07-17: บนเว็บใช้ชื่อโปรแกรม "Clear Airway" เท่านั้น ไม่ระบุยี่ห้อ/รุ่นเครื่อง */}
          <p className="mt-2 text-sm text-ink-soft">เป็นหัตถการที่ทำโดยแพทย์ · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">จองคิว / ปรึกษาแพทย์</Link>
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
              ปรึกษาฟรีทาง LINE
            </a>
          </div>
        </div>
      </section>

      {/* ============ เสียงกรน — empathetic, medical framing ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Snoring</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เสียงกรน ไม่ได้รบกวนแค่คนข้าง ๆ</h2>
          <p className="mt-5 text-ink-muted">
            เสียงกรนเกิดจากการสั่นสะเทือนของเนื้อเยื่ออ่อนในทางเดินหายใจส่วนบนขณะหายใจเข้าออกตอนหลับ
            หลายคนมองว่าเป็นเรื่องเล็กหรือเรื่องน่าอาย จนปล่อยไว้เป็นปี ทั้งที่มันกระทบคุณภาพการนอนของทั้งตัวเองและคนที่นอนด้วย
          </p>
          <p className="mt-4 text-ink-muted">
            Clear Airway เป็นหนึ่งในทางเลือกของการดูแลเสียงกรน โดยใช้พลังงานเลเซอร์กระตุ้นให้เนื้อเยื่อบริเวณนั้นกระชับขึ้น
            แต่สาเหตุของการกรนในแต่ละคนไม่เหมือนกัน และบางสาเหตุต้องรักษาที่ต้นเหตุก่อน
            <strong className="font-semibold text-ink">จึงต้องได้รับการประเมินจากแพทย์ก่อนเสมอ</strong>
          </p>
        </div>
      </section>

      {/* ============ 🔴 คำเตือน OSA — บังคับตาม research/07-clear-airway.md — ห้ามตัดออก และห้ามย้ายลงล่าง ============
           เหตุผล: เป็นประเด็นความปลอดภัย การลดเสียงกรนโดยไม่ตรวจหาสาเหตุ อาจทำให้ OSA ถูกมองข้ามและไม่ได้รับการรักษา */}
      <section className="border-y-2 border-brand-600 bg-brand-50">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3">
              <svg className="mt-1 h-7 w-7 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">สิ่งที่ควรรู้ก่อนตัดสินใจ</h2>
                <p className="mt-3 text-ink-muted"><strong className="text-ink">การนอนกรน กับ ภาวะหยุดหายใจขณะหลับ (Obstructive Sleep Apnea – OSA) ไม่ใช่เรื่องเดียวกัน</strong></p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-brand-200 sm:p-7">
              <p className="text-ink-muted">
                เสียงกรนเกิดจากการสั่นสะเทือนของเนื้อเยื่อในทางเดินหายใจ แต่
                <strong className="font-semibold text-ink">ภาวะหยุดหายใจขณะหลับ คือภาวะที่ทางเดินหายใจปิดกั้นจนหยุดหายใจเป็นช่วง ๆ ขณะนอนหลับ</strong>
                ซึ่งเป็นภาวะทางการแพทย์ที่ส่งผลต่อหัวใจ ความดันโลหิต และสมองในระยะยาว
              </p>
              <p className="mt-4 rounded-xl bg-brand-100 p-4 font-semibold text-ink">
                โปรแกรม Clear Airway เป็นหัตถการที่มุ่งลดเสียงกรน ไม่ใช่การรักษาภาวะหยุดหายใจขณะหลับ
              </p>
            </div>

            <p className="mt-7 font-semibold">หากคุณมีอาการเหล่านี้ ควรได้รับการตรวจการนอนหลับ (Sleep Test) และประเมินโดยแพทย์ก่อน:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
                <span className="text-ink-muted">มีคนสังเกตเห็นว่าคุณ <span className="font-semibold text-ink">หยุดหายใจเป็นช่วง ๆ ขณะหลับ</span></span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
                <span className="text-ink-muted"><span className="font-semibold text-ink">สะดุ้งตื่น หายใจเฮือก หรือสำลักขณะหลับ</span></span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
                <span className="text-ink-muted"><span className="font-semibold text-ink">ง่วงนอนมากผิดปกติในเวลากลางวัน</span> หลับในระหว่างขับรถหรือทำงาน</span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
                <span className="text-ink-muted">ตื่นมาแล้ว<span className="font-semibold text-ink">ปวดศีรษะ ไม่สดชื่น</span> ทั้งที่นอนครบชั่วโมง</span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
                <span className="text-ink-muted">มี<span className="font-semibold text-ink">ความดันโลหิตสูง หรือรอบคอหนา</span></span>
              </li>
            </ul>

            <p className="mt-7 rounded-2xl bg-brand-100 p-5 font-semibold text-ink">
              คลินิกจะประเมินคุณก่อนเสมอ และหากสงสัยภาวะหยุดหายใจขณะหลับ แพทย์จะแนะนำให้ตรวจการนอนหลับหรือส่งต่อแพทย์เฉพาะทางก่อน
              เพราะการลดเพียงเสียงกรนโดยไม่ตรวจหาสาเหตุ อาจทำให้ภาวะหยุดหายใจขณะหลับถูกมองข้ามและไม่ได้รับการรักษาที่ถูกต้อง
            </p>
            <Link href="/#contact" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">ปรึกษาแพทย์เพื่อประเมินก่อน</Link>
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            {/* TODO: ขอภาพจริงของหมวดนี้จากคลินิก — ตอนนี้ยืมภาพปรึกษาแพทย์มาใช้ชั่วคราว
                 หมายเหตุ: ห้ามใช้ภาพจากชุดสื่อของผู้ผลิตเครื่อง เป็นภาพ stock ที่ผู้ผลิตซื้อสิทธิ์ไว้ใช้เอง */}
            <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เพื่อประเมินสาเหตุของการนอนกรนก่อนทำ Clear Airway" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Clear Airway คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              คือหัตถการที่ใช้พลังงานเลเซอร์แบบไม่ผ่าตัด ยิงไปที่เนื้อเยื่ออ่อนบริเวณเพดานอ่อน ลิ้นไก่
              และเนื้อเยื่อรอบทางเดินหายใจส่วนบน เพื่อกระตุ้นให้เนื้อเยื่อบริเวณนั้นกระชับและตึงตัวขึ้น
            </p>
            <p className="mt-4 text-ink-muted">
              เมื่อเนื้อเยื่อตึงขึ้น <strong className="font-semibold text-ink">การสั่นสะเทือนขณะหายใจจะลดลง</strong>
              ซึ่งการสั่นสะเทือนนี้เองคือต้นเหตุของเสียงกรน
            </p>
            <p className="mt-4 text-ink-muted">
              <strong className="font-semibold text-ink">ไม่ต้องผ่าตัด ไม่ต้องฉีดยาชา ไม่มีแผล ไม่ต้องนอนโรงพยาบาล</strong>
              และไม่ต้องใส่อุปกรณ์ใด ๆ ขณะนอน
            </p>
            {/* TODO: research/07 ข้อ 3 — "Clear Airway จมูก" เป็นคนละหัตถการกับการยิงเพดานอ่อน
                 มีข้อบ่งใช้/ความเสี่ยงของตัวเอง ต้องได้รายละเอียดจากคลินิกก่อนจึงจะเขียนอธิบายได้ */}
            <p className="mt-4 text-sm text-ink-soft">โปรแกรมมีหลายรูปแบบตามบริเวณที่ทำ แพทย์จะเป็นผู้ประเมินและเลือกแนวทางที่เหมาะกับคุณ</p>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How It Works</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทำงานอย่างไร</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">
              เลเซอร์ปล่อยพลังงานเป็นชุดของพัลส์สั้น ๆ ที่ระดับต่ำกว่าการทำลายผิว (sub-ablative)
              ทำให้เกิดความร้อนที่ผิวเยื่อบุแล้วแผ่ลงสู่ชั้นเนื้อเยื่อที่ลึกกว่า โดยไม่ทำให้เยื่อบุด้านบนเป็นแผล
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-base font-bold text-brand-700">1</span>
              <h3 className="mt-4 text-lg font-semibold">คอลลาเจนเดิมหดตัว</h3>
              <p className="mt-3 text-ink-muted">
                ความร้อนทำให้คอลลาเจนที่มีอยู่เดิมหดตัว เนื้อเยื่อบริเวณเพดานอ่อนจึง<strong className="font-semibold text-ink">ตึงขึ้น</strong>
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-base font-bold text-brand-700">2</span>
              <h3 className="mt-4 text-lg font-semibold">กระตุ้นการสร้างคอลลาเจนใหม่</h3>
              <p className="mt-3 text-ink-muted">
                ร่างกายค่อย ๆ สร้างคอลลาเจนใหม่ในบริเวณนั้น ทำให้เนื้อเยื่อแข็งแรงและกระชับขึ้นในสัปดาห์ต่อ ๆ มา
                <strong className="font-semibold text-ink">ผลจึงค่อย ๆ ชัดขึ้น ไม่ใช่เห็นผลทันทีทั้งหมด</strong>
              </p>
            </div>
          </div>
          <p className="mt-7 max-w-3xl text-ink-muted">
            ผลรวมคือเยื่อบุบริเวณคอหอยและเพดานอ่อนสั่นสะเทือนน้อยลง และยุบตัวลงมาปิดทางเดินหายใจน้อยลง
            ทางเดินหายใจส่วนบนจึงเปิดกว้างขึ้น และเสียงกรนเบาลง
          </p>
        </div>
      </section>

      {/* ============ WHO IS IT FOR ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">For You</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เหมาะกับใคร</h2>
            <ul className="mt-6 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่มีเสียงกรนดัง รบกวนคนข้างเคียง
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ตรวจแล้ว<strong className="font-semibold text-ink">ไม่พบภาวะหยุดหายใจขณะหลับ</strong> หรือมีในระดับเล็กน้อย
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ไม่ต้องการผ่าตัด และไม่ต้องการใส่เครื่องช่วยหายใจขณะนอน
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่เคยลองวิธีอื่นแล้ว เช่น ลดน้ำหนัก ปรับท่านอน แต่ยังกรนอยู่
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่มีเนื้อเยื่อเพดานอ่อนหรือลิ้นไก่หย่อนคล้อยเป็นสาเหตุหลักของการกรน (แพทย์เป็นผู้ประเมิน)
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">* ความเหมาะสมและแนวทางการดูแลขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
          </div>
          <div className="rounded-2xl bg-surface-alt p-7 ring-1 ring-line">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Highlights</p>
            <h3 className="mt-2 text-xl font-bold">จุดเด่น</h3>
            <ul className="mt-5 space-y-3 text-ink-muted">
              <li className="flex gap-3"><span className="text-brand-600">•</span>ไม่ต้องผ่าตัด ไม่มีแผล ไม่ต้องดมยาสลบ</li>
              <li className="flex gap-3"><span className="text-brand-600">•</span>ไม่ต้องพักฟื้น กลับไปทำงานได้ทันที</li>
              <li className="flex gap-3"><span className="text-brand-600">•</span>ไม่ต้องใส่อุปกรณ์ใด ๆ ขณะนอน</li>
              <li className="flex gap-3"><span className="text-brand-600">•</span><strong className="font-semibold text-ink">มีงานวิจัยแบบสุ่มมีกลุ่มควบคุมหลอกรองรับ</strong> ซึ่งหัตถการกลุ่มนี้ส่วนใหญ่ไม่มี</li>
              <li className="flex gap-3"><span className="text-brand-600">•</span>คลินิกประเมินและคัดกรองก่อนทำทุกราย</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ PROTOCOL ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Protocol</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทำกี่ครั้ง ใช้เวลาเท่าไร</h2>
          </div>
          {/* TODO: ตัวเลขชุดนี้อ้างอิงโปรโตคอลจากงานวิจัย — ต้องให้คลินิกยืนยันโปรโตคอลที่ใช้จริง */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-3xl font-bold text-brand-700">20–30</p>
              <p className="mt-1 font-semibold">นาที/ครั้ง</p>
              <p className="mt-2 text-sm text-ink-muted">ไม่ต้องเตรียมตัวเป็นพิเศษ</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-3xl font-bold text-brand-700">3</p>
              <p className="mt-1 font-semibold">ครั้ง</p>
              <p className="mt-2 text-sm text-ink-muted">ตามโปรโตคอลในงานวิจัย</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-3xl font-bold text-brand-700">~6</p>
              <p className="mt-1 font-semibold">สัปดาห์</p>
              <p className="mt-2 text-sm text-ink-muted">เว้นระยะห่างประมาณ 2–3 สัปดาห์</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-3xl font-bold text-brand-700">0</p>
              <p className="mt-1 font-semibold">วันพักฟื้น</p>
              <p className="mt-2 text-sm text-ink-muted">กินอาหารอ่อนและเลี่ยงของร้อนจัดในวันแรก</p>
            </div>
          </div>
          <p className="mt-7 max-w-3xl text-ink-muted">
            ผลมักค่อย ๆ ชัดขึ้นตามการสร้างคอลลาเจน และ<strong className="font-semibold text-ink">อาจต้องทำซ้ำเพื่อคงผลในระยะยาว</strong>
            ระยะเวลาและจำนวนครั้งที่เหมาะกับแต่ละคนไม่เท่ากัน แพทย์จะประเมินและวางแผนให้
          </p>
        </div>
      </section>

      {/* ============ EVIDENCE — ตรงไปตรงมาตาม research ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Evidence</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">หลักฐานทางวิชาการ — และข้อจำกัดที่เราบอกตรง ๆ</h2>
          <p className="mt-5 text-ink-muted">
            หัตถการนี้มี<strong className="font-semibold text-ink">งานวิจัยแบบสุ่มมีกลุ่มควบคุมหลอก (randomized sham-controlled trial)</strong> รองรับ
            ซึ่งเป็นรูปแบบงานวิจัยที่น่าเชื่อถือ และหัตถการในกลุ่มนี้ส่วนใหญ่ไม่มี งานวิจัยพบว่ากลุ่มที่ได้รับเลเซอร์จริงมีคะแนนเสียงกรนดีขึ้น
            ทั้งจากการประเมินของตัวผู้เข้าร่วมเองและจากคู่นอน ขณะที่กลุ่มควบคุมหลอกไม่เปลี่ยนแปลง
          </p>
          <div className="mt-7 rounded-2xl border-l-4 border-brand-500 bg-surface-alt p-6 sm:p-7">
            <h3 className="text-lg font-bold">ข้อจำกัดที่ควรรู้</h3>
            <ul className="mt-4 space-y-3 text-ink-muted">
              <li className="flex gap-3"><span className="text-brand-600">•</span><strong className="font-semibold text-ink">ไม่ใช่ทุกคนที่ตอบสนอง</strong> — งานวิจัยเองระบุไว้ชัดเจน</li>
              <li className="flex gap-3"><span className="text-brand-600">•</span>จำนวนผู้เข้าร่วมในงานวิจัยยังน้อย และติดตามผลเพียง 3 เดือน</li>
              <li className="flex gap-3"><span className="text-brand-600">•</span>หลักฐานที่มีรองรับเฉพาะกลุ่มที่<strong className="font-semibold text-ink">ไม่มีภาวะหยุดหายใจขณะหลับระดับรุนแรง</strong></li>
              <li className="flex gap-3"><span className="text-brand-600">•</span>ผลไม่ถาวร อาจต้องทำซ้ำเพื่อคงผล</li>
            </ul>
          </div>
          <div className="mt-6 rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <h3 className="font-semibold">ผลข้างเคียงที่พบได้</h3>
            <p className="mt-3 text-ink-muted">
              จากงานวิจัย พบ<strong className="font-semibold text-ink">อาการเจ็บคอเล็กน้อยชั่วคราวประมาณ 20–25%</strong> และ
              <strong className="font-semibold text-ink">คอแห้งประมาณ 15%</strong> ซึ่งหายได้เอง
              แพทย์จะอธิบายคำแนะนำการดูแลตัวเองก่อนและหลังทำทุกครั้ง
            </p>
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ข้อมูลบนหน้านี้มีวัตถุประสงค์เพื่อให้ความรู้เบื้องต้นเท่านั้น ไม่ใช่คำวินิจฉัยหรือคำแนะนำทางการแพทย์เฉพาะบุคคล
            ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการทุกครั้ง
          </p>
        </div>
      </section>

      {/* ============ CONTRAINDICATIONS (mandatory, prominent) ============ */}
      <section className="border-y-2 border-brand-600 bg-brand-50">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3">
              <svg className="mt-1 h-7 w-7 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">ไม่เหมาะกับใคร / ต้องตรวจก่อน</h2>
                <p className="mt-3 text-ink-muted">ผู้ที่มีภาวะต่อไปนี้ <span className="font-semibold text-ink">อาจไม่เหมาะกับหัตถการนี้ หรือต้องได้รับการตรวจและรักษาที่ต้นเหตุก่อน</span></p>
              </div>
            </div>

            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">มี<span className="font-semibold text-ink">ภาวะหยุดหายใจขณะหลับ (OSA) ระดับปานกลางถึงรุนแรง</span></span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">มีโครงสร้างทางเดินหายใจผิดปกติ เช่น <span className="font-semibold text-ink">ต่อมทอนซิลโต ผนังกั้นจมูกคด</span> — อาจต้องรักษาที่ต้นเหตุก่อน</span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">มี<span className="font-semibold text-ink">น้ำหนักเกินมาก</span> — การลดน้ำหนักเป็นการรักษาหลักที่มีหลักฐานรองรับ</span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">อยู่ระหว่าง<span className="font-semibold text-ink">ตั้งครรภ์</span> หรือมี<span className="font-semibold text-ink">การติดเชื้อในช่องปากหรือลำคอ</span></span>
              </li>
            </ul>

            <p className="mt-7 rounded-2xl bg-brand-100 p-5 font-semibold text-ink">
              แพทย์จะซักประวัติและประเมินความเหมาะสมก่อนเข้ารับบริการทุกราย หากคุณมีโรคประจำตัว โปรดแจ้งแพทย์ทุกครั้ง
            </p>
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
              <span>Clear Airway คืออะไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              คือหัตถการที่ใช้พลังงานเลเซอร์แบบไม่ผ่าตัด กระตุ้นให้เนื้อเยื่อบริเวณเพดานอ่อนและรอบทางเดินหายใจส่วนบนกระชับตึงขึ้น เพื่อลดการสั่นสะเทือนซึ่งเป็นต้นเหตุของเสียงกรน ไม่ต้องผ่าตัด ไม่มีแผล เป็นหัตถการที่ทำโดยแพทย์ และควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ใช้รักษาภาวะหยุดหายใจขณะหลับได้ไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              <strong className="font-semibold text-ink">ไม่ได้</strong> — Clear Airway เป็นหัตถการที่มุ่งลดเสียงกรน ไม่ใช่การรักษาภาวะหยุดหายใจขณะหลับ (OSA) และไม่ใช่สิ่งทดแทนการรักษา OSA ที่แพทย์สั่ง หากสงสัยว่ามีภาวะนี้ ควรได้รับการตรวจการนอนหลับและประเมินโดยแพทย์ก่อน เพราะ OSA ที่ไม่ได้รับการรักษาส่งผลต่อหัวใจ ความดันโลหิต และสมองในระยะยาว
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ต้องพักฟื้นไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              หัตถการนี้ไม่ต้องผ่าตัดและไม่ต้องฉีดยาชา ไม่ต้องพักฟื้น กลับไปทำงานได้ทันที จากงานวิจัยพบผลข้างเคียงชั่วคราวได้ เช่น เจ็บคอเล็กน้อยประมาณ 20–25% และคอแห้งประมาณ 15% ซึ่งหายได้เอง แนะนำให้กินอาหารอ่อนและเลี่ยงของร้อนจัดในวันแรกตามที่แพทย์แนะนำ
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องทำกี่ครั้ง ผลอยู่ได้นานแค่ไหน?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              โปรโตคอลตามงานวิจัยคือ 3 ครั้ง ภายในประมาณ 6 สัปดาห์ (ห่างกันประมาณ 2–3 สัปดาห์) ผลมักค่อย ๆ ชัดขึ้นตามการสร้างคอลลาเจน และอาจต้องทำซ้ำเพื่อคงผลในระยะยาว ทั้งนี้ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล และไม่ใช่ทุกคนที่ตอบสนองเท่ากัน แพทย์จะประเมินและวางแผนที่เหมาะกับคุณให้
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ทำแล้วจะหายกรนเลยไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              หัตถการนี้มุ่ง<strong className="font-semibold text-ink">ลดความดังของเสียงกรน</strong> ไม่ใช่การทำให้หายขาด งานวิจัยระบุชัดเจนว่าไม่ใช่ทุกคนที่ตอบสนอง และผลไม่ถาวร นอกจากนี้การกรนมีได้หลายสาเหตุ บางสาเหตุต้องแก้ที่ต้นเหตุ เช่น น้ำหนักตัว หรือโครงสร้างทางเดินหายใจ แพทย์จะประเมินสาเหตุของคุณก่อนเสมอ
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More Services</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นที่คุณอาจสนใจ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/nc-chair" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-nc-chair.jpg" alt="NC Chair" width={400} height={260} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Chair</h3><p className="mt-1 text-sm text-ink-muted">ดูแลปัญหาปัสสาวะเล็ด โดยไม่ต้องผ่าตัด</p></div>
            </Link>
            <Link href="/nc-neo" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="NC Neo" width={400} height={260} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Neo</h3><p className="mt-1 text-sm text-ink-muted">ดูแลโดยทีมแพทย์ ปรึกษาเพื่อประเมินก่อนรับบริการ</p></div>
            </Link>
            <Link href="/emface" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-emface.jpg" alt="EMFACE" width={400} height={260} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">EMFACE</h3><p className="mt-1 text-sm text-ink-muted">ดูแลผิวหน้าโดยไม่ต้องใช้เข็ม</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">กรนจนรบกวนคนข้าง ๆ? ปรึกษาทีมแพทย์ของเราได้</h2>
          <p className="max-w-xl text-white/80">ทีมแพทย์จะซักประวัติและประเมินสาเหตุของการกรนให้ก่อนทุกราย และหากสงสัยภาวะหยุดหายใจขณะหลับ จะแนะนำให้ตรวจการนอนหลับก่อน</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
