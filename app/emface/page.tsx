import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMFACE ยกกระชับใบหน้า โดยไม่ต้องใช้เข็ม | ณัฐชญา คลินิก Natchaya Clinic",
  description: "EMFACE (BTL) เทคโนโลยียกกระชับใบหน้าที่ยิง Synchronized RF + HIFES พร้อมกัน ดูแลถึงชั้นกล้ามเนื้อใบหน้า ไม่ต้องใช้เข็ม ไม่ต้องพักฟื้น ใช้เวลา 20 นาทีต่อครั้ง ที่ ณัฐชญา คลินิก",
};

export default function EmfacePage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">EMFACE</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Face Lift</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">EMFACE</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">ยกกระชับใบหน้า โดยไม่ต้องใช้เข็ม — ดูแลทั้งชั้นผิว เนื้อเยื่อเกี่ยวพัน และชั้นกล้ามเนื้อใบหน้า ใช้เวลา 20 นาทีต่อครั้ง</p>
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
      {/* ภาพเครื่องและภาพนางแบบทางการของ BTL EMFACE มีอยู่ในโฟลเดอร์ Google Drive ของคลินิก — ให้นำมาแทน placeholder ทั้งหมดในหน้านี้ก่อนขึ้นจริง */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Image src="/assets/generated/imagegen/service-emface.jpg" alt="เครื่อง EMFACE ของ BTL สำหรับยกกระชับใบหน้าโดยไม่ต้องใช้เข็ม" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">EMFACE คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              EMFACE คือเทคโนโลยียกกระชับใบหน้าที่ยิง <strong className="font-semibold text-ink">Synchronized RF + HIFES พร้อมกัน</strong>
              จึงทำงานได้ครบทุกชั้น ทั้งชั้นผิว ชั้นเนื้อเยื่อเกี่ยวพัน และ<strong className="font-semibold text-ink">ชั้นกล้ามเนื้อใบหน้า</strong>
            </p>
            <p className="mt-4 text-ink-muted">
              นี่คือจุดที่ต่างจากเครื่องยกกระชับทั่วไป ซึ่งโดยมากทำงานเฉพาะชั้นผิว — EMFACE จึงดูแลโครงสร้างที่พยุงใบหน้าไปพร้อมกับผิวด้านบน โดยไม่ต้องใช้เข็มและไม่ต้องพักฟื้น
            </p>
            <div className="mt-6 rounded-2xl bg-surface-alt p-5 ring-1 ring-line">
              <p className="text-sm font-semibold text-ink">การรับรองมาตรฐาน</p>
              <p className="mt-1.5 text-sm text-ink-muted">เครื่อง EMFACE ได้รับการรับรองจาก US FDA</p>
              {/* TODO: ขอเลขที่ อย. ไทย จากคลินิก */}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Benefits</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">จุดเด่นของ EMFACE</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
              <h3 className="mt-4 font-semibold">ผิวหน้าเฟิร์ม ยก กระชับ</h3>
              <p className="mt-1.5 text-sm text-ink-muted">ดูแลทั้งชั้นผิวและชั้นกล้ามเนื้อที่พยุงโครงหน้า</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12c3-4 6-4 9 0s6 4 9 0"/></svg>
              <h3 className="mt-4 font-semibold">ลดเลือนริ้วรอย ผิวเรียบเนียน</h3>
              <p className="mt-1.5 text-sm text-ink-muted">ปรับผิวหน้าให้ดูเรียบเนียนขึ้น</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m14.5-6.5-11 11m0-11 11 11"/></svg>
              <h3 className="mt-4 font-semibold">กระตุ้นคอลลาเจนและอีลาสติน</h3>
              <p className="mt-1.5 text-sm text-ink-muted">กระตุ้นการสร้างคอลลาเจนและอีลาสตินในชั้นผิว</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12M6 12h12M6 18h12"/></svg>
              <h3 className="mt-4 font-semibold">สร้างเส้นใยกล้ามเนื้อใหม่</h3>
              <p className="mt-1.5 text-sm text-ink-muted">HIFES ทำงานกับชั้นกล้ามเนื้อใบหน้าโดยตรง</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/></svg>
              <h3 className="mt-4 font-semibold">ไม่ต้องใช้เข็ม ไม่ต้องใช้ยาชา</h3>
              <p className="mt-1.5 text-sm text-ink-muted">ไม่มีแผล ไม่เจ็บ ระหว่างทำเพียงวางหัวทรีตเมนต์บนผิว</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              <h3 className="mt-4 font-semibold">ใช้เวลา 20 นาที ไม่ต้องพักฟื้น</h3>
              <p className="mt-1.5 text-sm text-ink-muted">กลับไปทำกิจกรรมตามปกติได้หลังทำ</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-ink-soft">* ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
        </div>
      </section>

      {/* ============ PROTOCOL ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Protocol</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ขั้นตอนและระยะเวลา</h2>
            <dl className="mt-6 space-y-4">
              <div className="rounded-2xl bg-surface-alt p-5 ring-1 ring-line">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">ระยะเวลาต่อครั้ง</dt>
                <dd className="mt-1.5 text-ink-muted">ใช้เวลา <strong className="font-semibold text-ink">20 นาที</strong> ต่อครั้ง</dd>
              </div>
              <div className="rounded-2xl bg-surface-alt p-5 ring-1 ring-line">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">จำนวนครั้งที่แนะนำ</dt>
                <dd className="mt-1.5 text-ink-muted">แนะนำ <strong className="font-semibold text-ink">4 ครั้ง เว้นระยะห่างครั้งละ 7 วัน</strong></dd>
              </div>
              <div className="rounded-2xl bg-surface-alt p-5 ring-1 ring-line">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">การพักฟื้น</dt>
                <dd className="mt-1.5 text-ink-muted">ไม่ต้องพักฟื้น ไม่ต้องใช้ยาชา และไม่มีแผลจากเข็ม</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-ink-soft">* จำนวนครั้งและแนวทางการดูแลที่เหมาะสมขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล</p>
          </div>
          <div>
            <Image src="/assets/generated/imagegen/service-emface.jpg" alt="หัวทรีตเมนต์ EMFACE ที่วางบนใบหน้าระหว่างทำหัตถการ" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>
      </section>

      {/* ============ TREATMENT AREAS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Treatment Areas</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริเวณที่ทำได้</h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <li className="rounded-2xl bg-surface p-5 text-center shadow-soft ring-1 ring-line">
              <p className="font-medium">หน้าผาก</p>
            </li>
            <li className="rounded-2xl bg-surface p-5 text-center shadow-soft ring-1 ring-line">
              <p className="font-medium">แก้ม</p>
            </li>
            <li className="rounded-2xl bg-surface p-5 text-center shadow-soft ring-1 ring-line">
              <p className="font-medium">ใต้คาง / เหนียง</p>
              <p className="mt-1 text-xs text-ink-soft">submentum</p>
            </li>
            <li className="rounded-2xl bg-surface p-5 text-center shadow-soft ring-1 ring-line">
              <p className="font-medium">รอบดวงตา</p>
              <p className="mt-1 text-xs text-ink-soft">มีหัว eye applicator แยก</p>
            </li>
          </ul>
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
                ผู้ที่ผิวหน้าเริ่มหย่อนคล้อยตามวัย
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่กลัวเข็ม และไม่ต้องการหัตถการที่มีแผล
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ไม่มีเวลาพักฟื้น
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ต้องการดูแลชั้นกล้ามเนื้อใบหน้าควบคู่ไปกับชั้นผิว
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">* ความเหมาะสมและแนวทางการดูแลขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล ผู้ที่มีโลหะหรืออุปกรณ์อิเล็กทรอนิกส์ฝังในร่างกาย ควรแจ้งแพทย์ก่อนเข้ารับบริการ</p>
          </div>
          <div>
            <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เฉพาะทางเพื่อประเมินก่อนทำ EMFACE" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>
      </section>

      {/* ============ CLINICAL RESEARCH ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Clinical Research</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">งานวิจัยรองรับ</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">EMFACE มีงานวิจัยทางคลินิกที่ศึกษาทั้งกลไกการทำงาน การยกกระชับใบหน้า ริ้วรอย และการเปลี่ยนแปลงในชั้นผิวและชั้นกล้ามเนื้อ</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Cotofana et al.</p>
              <h3 className="mt-2 font-semibold">Mechanism of Action</h3>
              <p className="mt-1.5 text-sm text-ink-muted">กลไกการทำงานของ Synchronized RF + HIFES</p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Kinney</p>
              <h3 className="mt-2 font-semibold">Facial Lifting Study</h3>
              <p className="mt-1.5 text-sm text-ink-muted">การศึกษาเรื่องการยกกระชับใบหน้า</p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Halaas</p>
              <h3 className="mt-2 font-semibold">Muscle Ultrasound Study</h3>
              <p className="mt-1.5 text-sm text-ink-muted">การตรวจอัลตราซาวด์ชั้นกล้ามเนื้อใบหน้า</p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Halaas</p>
              <h3 className="mt-2 font-semibold">Wrinkle Study</h3>
              <p className="mt-1.5 text-sm text-ink-muted">การศึกษาเรื่องริ้วรอย</p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Kent</p>
              <h3 className="mt-2 font-semibold">Skin Histology Study</h3>
              <p className="mt-1.5 text-sm text-ink-muted">จุลกายวิภาคของผิวหนัง</p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Kinney</p>
              <h3 className="mt-2 font-semibold">Muscle Histology Study</h3>
              <p className="mt-1.5 text-sm text-ink-muted">จุลกายวิภาคของกล้ามเนื้อ</p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Lal</p>
              <h3 className="mt-2 font-semibold">Human Skin Histology</h3>
              <p className="mt-1.5 text-sm text-ink-muted">จุลกายวิภาคของผิวหนังมนุษย์</p>
            </li>
          </ul>
          <p className="mt-8 text-sm text-ink-soft">เอกสารงานวิจัยฉบับเต็มมีให้ตรวจสอบที่คลินิก · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>

          {/* Physician-investigator quote (จากเอกสารของผู้ผลิต ไม่ใช่รีวิวผู้รับบริการ) */}
          <figure className="mt-10 rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line md:p-9">
            <svg className="h-8 w-8 text-brand-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.5 5C6.46 5 4 7.46 4 10.5S6.46 16 9.5 16c.35 0 .68-.03 1-.1-.6 1.7-2.06 2.9-3.9 3.1v1.9c4.2-.3 7.4-3.9 7.4-8.4V10.5C14 7.46 12.54 5 9.5 5Zm10 0C16.46 5 14 7.46 14 10.5S16.46 16 19.5 16c.35 0 .68-.03 1-.1-.6 1.7-2.06 2.9-3.9 3.1v1.9c4.2-.3 7.4-3.9 7.4-8.4V10.5C24 7.46 22.54 5 19.5 5Z"/></svg>
            <blockquote className="mt-4 text-xl font-semibold leading-relaxed sm:text-2xl">“EMFACE is the EMSCULPT NEO for the face”</blockquote>
            <figcaption className="mt-5 text-sm text-ink-muted">
              <span className="font-semibold text-ink">Richard Gentile, M.D.</span><br />
              Board Certified Facial Plastic Surgeon · EMFACE Clinical Investigator
            </figcaption>
          </figure>
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
              <span>EMFACE คืออะไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              EMFACE คือเทคโนโลยียกกระชับใบหน้าที่ยิง Synchronized RF + HIFES พร้อมกัน ทำงานได้ครบทุกชั้น ทั้งชั้นผิว ชั้นเนื้อเยื่อเกี่ยวพัน และชั้นกล้ามเนื้อใบหน้า โดยไม่ต้องใช้เข็ม เครื่องได้รับการรับรองจาก US FDA
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต่างจาก HIFU หรือ RF ทั่วไปอย่างไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              EMFACE ทำงานถึงชั้นกล้ามเนื้อใบหน้าด้วย ไม่ใช่แค่ชั้นผิว โดยยิงพลังงาน RF และ HIFES พร้อมกัน — RF ดูแลชั้นผิวและเนื้อเยื่อเกี่ยวพัน ส่วน HIFES ทำงานกับชั้นกล้ามเนื้อ การเลือกหัตถการที่เหมาะกับสภาพผิวและโครงหน้าของแต่ละคน ควรให้แพทย์เป็นผู้ประเมิน
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ต้องพักฟื้นไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              EMFACE ไม่ต้องใช้เข็มและไม่ต้องใช้ยาชา ระหว่างทำเป็นการวางหัวทรีตเมนต์บนผิวเท่านั้น จึงไม่เจ็บและไม่มีแผล หลังทำไม่ต้องพักฟื้น สามารถกลับไปทำกิจกรรมตามปกติได้ ทั้งนี้ความรู้สึกระหว่างทำอาจแตกต่างกันในแต่ละบุคคล
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องทำกี่ครั้ง?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              โปรโตคอลมาตรฐานแนะนำ 4 ครั้ง เว้นระยะห่างครั้งละ 7 วัน แต่ละครั้งใช้เวลา 20 นาที จำนวนครั้งที่เหมาะสมกับแต่ละบุคคลขึ้นอยู่กับการประเมินของแพทย์ และผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ใครทำไม่ได้บ้าง?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ผู้ที่มีโลหะหรืออุปกรณ์อิเล็กทรอนิกส์ฝังในร่างกาย เช่น เครื่องกระตุ้นหัวใจ ควรแจ้งแพทย์ก่อนเข้ารับบริการ รวมถึงผู้ที่มีโรคประจำตัวหรืออยู่ระหว่างตั้งครรภ์ ควรแจ้งประวัติสุขภาพให้แพทย์ทราบ ทุกกรณีต้องให้แพทย์เป็นผู้ประเมินความเหมาะสมก่อนเข้ารับบริการ
            </div>
          </div>
        </div>

        {/* ============ COMPLIANCE NOTICE (บังคับทุกหน้าหัตถการ) ============ */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-surface-alt p-6 ring-1 ring-line">
          <p className="text-sm font-semibold text-ink">ข้อควรทราบ</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li className="flex gap-2"><span className="text-brand-700">•</span><span>ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</span></li>
            <li className="flex gap-2"><span className="text-brand-700">•</span><span>ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</span></li>
          </ul>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More in Face Lift</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นในหมวด FACE LIFT</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/ulthera" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="Ulthera ยกกระชับผิวหน้าด้วยคลื่นอัลตราซาวด์" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Ulthera</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวหน้าด้วยคลื่นอัลตราซาวด์</p></div>
            </Link>
            <Link href="/mint-thread" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-mint-thread.jpg" alt="ร้อยไหมปรับรูปหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">ร้อยไหมปรับรูปหน้า</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับและปรับรูปหน้า เห็นผลตั้งแต่วันที่ทำ</p></div>
            </Link>
            <Link href="/nc-neo" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="NC Neo ดูแลรูปหน้าให้กระชับ" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Neo</h3><p className="mt-1 text-sm text-ink-muted">ดูแลรูปหน้าให้เรียวกระชับ</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจ EMFACE? ปรึกษาทีมแพทย์ของเรา</h2>
          <p className="max-w-xl text-white/80">นัดหมายหรือสอบถามข้อมูลบริการ ทีมงานพร้อมดูแลและให้คำปรึกษาแบบเฉพาะบุคคล</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
