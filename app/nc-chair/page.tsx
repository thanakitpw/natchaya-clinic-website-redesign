import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NC Chair (BTL EMSELLA) เก้าอี้ HIFEM ดูแลปัญหาปัสสาวะเล็ด | ณัฐชญา คลินิก Natchaya Clinic",
  description: "NC Chair เก้าอี้ HIFEM (BTL EMSELLA) สำหรับผู้ที่มีภาวะปัสสาวะเล็ด นั่งโดยสวมเสื้อผ้าตามปกติ 28 นาที ไม่ต้องผ่าตัด ไม่ต้องพักฟื้น ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ควรเข้ารับการประเมินจากแพทย์ก่อน ที่ ณัฐชญา คลินิก",
};

export default function NcChairPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">NC Chair</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Repair — ฟื้นฟูสมรรถภาพ</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">NC Chair</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">เก้าอี้ HIFEM ดูแลปัญหาปัสสาวะเล็ด โดยไม่ต้องผ่าตัด</p>
          {/* TODO: ยืนยันกับคลินิกว่าเป็น BTL EMSELLA ของแท้ (มีเครื่อง HIFEM ยี่ห้ออื่นในตลาด) + ขอเลขที่ อย. ไทย */}
          <p className="mt-2 text-sm text-ink-soft">เทคโนโลยี <span className="font-semibold text-ink-muted">HIFEM<sup>®</sup></span> (High-Intensity Focused Electromagnetic) · เครื่อง <span className="font-semibold text-ink-muted">BTL EMSELLA</span></p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">จองคิว / ปรึกษาแพทย์</Link>
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
              ปรึกษาฟรีทาง LINE
            </a>
          </div>
        </div>
      </section>

      {/* ============ ปัญหาปัสสาวะเล็ด — empathetic, medical framing ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Urinary Incontinence</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ปัสสาวะเล็ด เป็นปัญหาสุขภาพที่พบได้บ่อย และดูแลได้</h2>
          <p className="mt-5 text-ink-muted">
            อาการปัสสาวะเล็ดเวลาไอ จาม หัวเราะ หรือยกของหนัก เป็นภาวะทางการแพทย์ที่พบได้ทั่วไป
            มักเกิดจากกล้ามเนื้ออุ้งเชิงกรานอ่อนแรงลงหลังคลอดบุตรหรือตามวัย
            หลายคนรู้สึกอึดอัดที่จะพูดถึงจนปล่อยไว้เป็นเวลานาน ทั้งที่เป็นเรื่องที่ปรึกษาแพทย์ได้และมีแนวทางดูแล
          </p>
          <p className="mt-4 text-ink-muted">
            NC Chair เป็นหนึ่งในทางเลือกของการดูแลภาวะนี้ โดยการฝึกกล้ามเนื้ออุ้งเชิงกรานด้วยคลื่นแม่เหล็กไฟฟ้า
            ทั้งนี้ความรุนแรงและสาเหตุของอาการในแต่ละคนไม่เหมือนกัน จึงควรได้รับการประเมินจากแพทย์ก่อนเสมอ
          </p>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Image src="/assets/generated/imagegen/service-nc-chair.jpg" alt="เก้าอี้ HIFEM สำหรับกระตุ้นกล้ามเนื้ออุ้งเชิงกราน" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">NC Chair คืออะไร</h2>
              <p className="mt-4 text-ink-muted">
                NC Chair คือเก้าอี้บำบัดที่ใช้คลื่นแม่เหล็กไฟฟ้าความเข้มสูงแบบโฟกัส (HIFEM<sup>®</sup> — High-Intensity Focused Electromagnetic)
                กระตุ้นกล้ามเนื้ออุ้งเชิงกรานให้หดตัวอย่างต่อเนื่อง เพื่อดูแลผู้ที่มีภาวะปัสสาวะเล็ด
              </p>
              <p className="mt-4 text-ink-muted">
                ผู้เข้ารับบริการ <span className="font-semibold text-ink">นั่งบนเก้าอี้โดยสวมเสื้อผ้าตามปกติ ไม่ต้องถอดเสื้อผ้า ไม่ต้องสอดใส่อุปกรณ์ใด ๆ และไม่เจ็บ</span>
                ใช้เวลาครั้งละ 28 นาที เสร็จแล้วสามารถกลับไปทำกิจวัตรตามปกติได้ทันที
              </p>
              <p className="mt-4 text-sm text-ink-soft">* ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล และควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How It Works</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">กลไกการทำงาน</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">1</span>
            <h3 className="mt-4 font-semibold">คลื่นแม่เหล็กไฟฟ้าทะลุผ่านเสื้อผ้าและผิวหนัง</h3>
            <p className="mt-2 text-sm text-ink-muted">คลื่นแม่เหล็กไฟฟ้าความเข้มสูงแบบโฟกัสเดินทางผ่านเสื้อผ้าและผิวหนัง เข้าไปกระตุ้นเซลล์ประสาทสั่งการ (motor neurons) ของกล้ามเนื้ออุ้งเชิงกรานโดยตรง</p>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">2</span>
            <h3 className="mt-4 font-semibold">เกิดการหดตัวแบบ supramaximal contraction</h3>
            <p className="mt-2 text-sm text-ink-muted">กล้ามเนื้ออุ้งเชิงกรานหดตัวแรงกว่าที่เราสั่งกล้ามเนื้อเองได้ โดยกระตุ้นให้หดตัวหลายพันครั้งต่อการทำ 1 ครั้ง ซึ่งเป็นระดับที่ไม่สามารถทำได้ด้วยการขมิบเอง</p>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">3</span>
            <h3 className="mt-4 font-semibold">กล้ามเนื้ออุ้งเชิงกรานแข็งแรงขึ้น</h3>
            <p className="mt-2 text-sm text-ink-muted">เมื่อกล้ามเนื้ออุ้งเชิงกรานแข็งแรงขึ้น การควบคุมการกลั้นปัสสาวะจึงทำได้ดีขึ้น ทั้งนี้ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
          </div>
        </div>
      </section>

      {/* ============ WHO IS IT FOR ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">For You</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เหมาะกับใคร</h2>
              <ul className="mt-6 space-y-4 text-ink-muted">
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ผู้ที่มีปัญหาปัสสาวะเล็ดเวลาไอ จาม หัวเราะ ยกของหนัก หรือออกกำลังกาย (stress urinary incontinence)
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ผู้ที่มีอาการปวดปัสสาวะกะทันหันจนกลั้นไม่อยู่ (urge incontinence)
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ผู้ที่กล้ามเนื้ออุ้งเชิงกรานอ่อนแรงหลังคลอดบุตรหรือตามวัย
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ผู้ที่ขมิบเองไม่เป็น หรือขมิบแล้วยังไม่ได้ผลเท่าที่ควร
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  <span className="font-semibold text-ink">ใช้ได้ทั้งผู้หญิงและผู้ชาย</span> — เพราะกล้ามเนื้ออุ้งเชิงกรานอ่อนแรงเกิดขึ้นได้กับทั้งสองเพศ
                </li>
              </ul>
              <p className="mt-6 text-sm text-ink-soft">* แพทย์จะซักประวัติและประเมินความเหมาะสมเป็นรายบุคคลก่อนเข้ารับบริการทุกราย</p>
            </div>
            <div>
              <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เพื่อประเมินภาวะปัสสาวะเล็ดก่อนเข้ารับบริการ" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Highlights</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">จุดเด่นของ NC Chair</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <h3 className="font-semibold">ไม่ต้องถอดเสื้อผ้า</h3>
            <p className="mt-2 text-sm text-ink-muted">นั่งบนเก้าอี้โดยสวมเสื้อผ้าตามปกติ 28 นาที ไม่ต้องสอดใส่อุปกรณ์ใด ๆ</p>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <h3 className="font-semibold">ไม่ต้องผ่าตัด</h3>
            <p className="mt-2 text-sm text-ink-muted">ไม่ต้องใช้ยาชา ไม่มีแผล</p>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <h3 className="font-semibold">ไม่ต้องพักฟื้น</h3>
            <p className="mt-2 text-sm text-ink-muted">ทำเสร็จสามารถกลับไปทำงานหรือทำกิจวัตรประจำวันต่อได้ทันที</p>
          </div>
        </div>
      </section>

      {/* ============ PROTOCOL ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Protocol</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ระยะเวลาและจำนวนครั้ง</h2>
          </div>
          {/* TODO: ยืนยันโปรโตคอลจริงของคลินิก (6 / 8 / 10 ครั้ง) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-sm text-ink-soft">ระยะเวลาต่อครั้ง</p>
              <p className="mt-1 text-xl font-bold">28 นาที</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-sm text-ink-soft">โปรโตคอลมาตรฐาน</p>
              <p className="mt-1 text-xl font-bold">6 ครั้ง</p>
              <p className="mt-1 text-sm text-ink-muted">สัปดาห์ละ 2 ครั้ง (ห่างกัน 2–3 วัน)</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-sm text-ink-soft">ระยะเวลารวม</p>
              <p className="mt-1 text-xl font-bold">ประมาณ 3 สัปดาห์</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-sm text-ink-soft">การพักฟื้น</p>
              <p className="mt-1 text-xl font-bold">ไม่ต้องพักฟื้น</p>
            </div>
          </div>
          <p className="mt-6 text-ink-muted">
            หลายรายเริ่มรู้สึกถึงการเปลี่ยนแปลงหลังทำประมาณ 2–3 ครั้ง แต่ <span className="font-semibold text-ink">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</span>
            และอาจต้องทำซ้ำเป็นระยะเพื่อคงผล จำนวนครั้งที่เหมาะสมจะพิจารณาจากการประเมินของแพทย์
          </p>
        </div>
      </section>

      {/* ============ CERTIFICATION ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Certification</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">การรับรอง</h2>
          <div className="mt-6 flex gap-3">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            <p className="text-ink-muted">
              เทคโนโลยี HIFEM<sup>®</sup> ของเครื่อง BTL EMSELLA
              <span className="font-semibold text-ink">ได้รับการรับรองจาก US FDA (FDA cleared) สำหรับข้อบ่งใช้ “การรักษาภาวะกลั้นปัสสาวะไม่อยู่ (urinary incontinence)”</span>
            </p>
          </div>
          {/* TODO: ขอเลขที่ อย. ไทย */}
          <p className="mt-5 border-t border-line pt-5 text-sm text-ink-soft">
            การรับรองข้างต้นครอบคลุมเฉพาะข้อบ่งใช้เรื่องภาวะกลั้นปัสสาวะไม่อยู่เท่านั้น
            ทั้งนี้ ภาวะปัสสาวะเล็ดบางชนิดที่มีความรุนแรงยังคงต้องได้รับการรักษาทางการแพทย์หรือการผ่าตัด
            แพทย์จะเป็นผู้ประเมินว่าแนวทางใดเหมาะสมกับคุณ
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
                <h2 className="text-2xl font-bold sm:text-3xl">ข้อห้ามและข้อควรระวัง</h2>
                <p className="mt-3 text-ink-muted">ผู้ที่มีภาวะต่อไปนี้ <span className="font-semibold text-ink">ไม่สามารถเข้ารับบริการได้ หรือต้องแจ้งแพทย์ก่อน</span></p>
              </div>
            </div>

            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">มีโลหะหรืออุปกรณ์อิเล็กทรอนิกส์ฝังในร่างกาย เช่น <span className="font-semibold text-ink">เครื่องกระตุ้นหัวใจ (pacemaker), ห่วงอนามัยทองแดง, ข้อสะโพกโลหะ, สกรูหรือแผ่นโลหะ</span></span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">อยู่ระหว่าง<span className="font-semibold text-ink">ตั้งครรภ์</span></span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">อยู่ระหว่าง<span className="font-semibold text-ink">มีประจำเดือน</span></span>
              </li>
              <li className="flex gap-3 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-brand-200">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
                <span className="text-ink-muted">มี<span className="font-semibold text-ink">ไข้ หรือมีการติดเชื้อ</span></span>
              </li>
            </ul>

            <p className="mt-7 rounded-2xl bg-brand-100 p-5 font-semibold text-ink">
              แพทย์จะซักประวัติและประเมินความเหมาะสมก่อนเข้ารับบริการทุกราย
              หากคุณมีโรคประจำตัวหรือมีอุปกรณ์ฝังในร่างกาย โปรดแจ้งแพทย์ทุกครั้ง
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
              <span>NC Chair คืออะไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              NC Chair คือเก้าอี้บำบัดที่ใช้คลื่นแม่เหล็กไฟฟ้าความเข้มสูงแบบโฟกัส (HIFEM<sup>®</sup>) กระตุ้นกล้ามเนื้ออุ้งเชิงกรานให้หดตัวอย่างต่อเนื่อง เพื่อดูแลผู้ที่มีภาวะปัสสาวะเล็ด โดยไม่ต้องผ่าตัด ทั้งนี้ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องถอดเสื้อผ้าไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ไม่ต้องครับ/ค่ะ — นั่งบนเก้าอี้ได้เลยโดยสวมเสื้อผ้าตามปกติ ไม่ต้องถอดเสื้อผ้า และไม่ต้องสอดใส่อุปกรณ์ใด ๆ เพราะคลื่นแม่เหล็กไฟฟ้าสามารถผ่านเสื้อผ้าและผิวหนังไปกระตุ้นกล้ามเนื้ออุ้งเชิงกรานได้โดยตรง
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ระหว่างทำรู้สึกอย่างไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ไม่เจ็บ ระหว่างทำจะรู้สึกเหมือนกล้ามเนื้ออุ้งเชิงกรานหดและคลายเป็นจังหวะ คล้ายการขมิบแต่แรงกว่า ไม่ต้องใช้ยาชา และนั่งอ่านหนังสือหรือใช้โทรศัพท์ระหว่างทำได้ตามปกติ หากรู้สึกไม่สบายระหว่างทำ สามารถแจ้งเจ้าหน้าที่เพื่อปรับระดับความเข้มได้
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องทำกี่ครั้ง?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              โปรโตคอลมาตรฐานคือ 28 นาทีต่อครั้ง จำนวน 6 ครั้ง สัปดาห์ละ 2 ครั้ง (ห่างกัน 2–3 วัน) รวมประมาณ 3 สัปดาห์ หลายรายเริ่มรู้สึกถึงการเปลี่ยนแปลงหลังทำ 2–3 ครั้ง แต่ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล และอาจต้องทำซ้ำเป็นระยะเพื่อคงผล จำนวนครั้งที่เหมาะสมจะพิจารณาจากการประเมินของแพทย์
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ผู้ชายทำได้ไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ได้ — ภาวะกล้ามเนื้ออุ้งเชิงกรานอ่อนแรงเกิดขึ้นได้ทั้งในผู้หญิงและผู้ชาย NC Chair จึงใช้ได้กับทั้งสองเพศ โดยแพทย์จะซักประวัติและประเมินความเหมาะสมเป็นรายบุคคลก่อนเข้ารับบริการ
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-soft">
          ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล · ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ
        </p>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More Services</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นที่คุณอาจสนใจ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/nc-neo" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="NC Neo" width={400} height={260} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Neo</h3><p className="mt-1 text-sm text-ink-muted">ดูแลโดยทีมแพทย์ ปรึกษาเพื่อประเมินก่อนรับบริการ</p></div>
            </Link>
            <Link href="/emface" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-emface.jpg" alt="EMFACE" width={400} height={260} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">EMFACE</h3><p className="mt-1 text-sm text-ink-muted">ดูแลผิวหน้าโดยไม่ต้องใช้เข็ม</p></div>
            </Link>
            <Link href="/ulthera" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="Ulthera" width={400} height={260} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Ulthera</h3><p className="mt-1 text-sm text-ink-muted">คลื่นอัลตราซาวด์ดูแลผิวหน้า</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">มีปัญหาปัสสาวะเล็ด? ปรึกษาทีมแพทย์ของเราได้</h2>
          <p className="max-w-xl text-white/80">เป็นเรื่องที่พูดคุยกับแพทย์ได้อย่างเป็นส่วนตัว ทีมแพทย์จะซักประวัติและประเมินความเหมาะสมให้ก่อนเข้ารับบริการทุกราย</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
