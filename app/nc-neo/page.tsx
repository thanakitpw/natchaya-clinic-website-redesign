import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NC Neo (BTL Emsculpt NEO) สลายไขมัน + สร้างกล้ามเนื้อ ในครั้งเดียว | ณัฐชญา คลินิก Natchaya Clinic",
  description: "NC Neo (BTL Emsculpt NEO) เทคโนโลยีที่ยิง RF และ HIFEM+ พร้อมกันในหัวเดียว ช่วยสลายไขมันและสร้างกล้ามเนื้อในครั้งเดียว 30 นาที ไม่ต้องพักฟื้น ณัฐชญา คลินิก ลงเครื่องเป็นที่แรกในไทย",
};

export default function NcNeoPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">NC Neo</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">กระชับสัดส่วน</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">NC Neo</h1>
          <p className="mt-2 text-lg font-medium text-brand-700">เครื่อง BTL Emsculpt NEO</p>
          <p className="mt-3 max-w-2xl text-ink-muted">
            เทคโนโลยีเดียวที่ยิงคลื่นวิทยุ (RF) และคลื่นแม่เหล็กไฟฟ้าความเข้มสูง (HIFEM+) พร้อมกันในหัวเดียว
            ช่วยสลายไขมันและสร้างกล้ามเนื้อไปพร้อมกันในการทำครั้งเดียว
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-200">
            <svg className="h-4 w-4 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
            ณัฐชญา คลินิก ลงเครื่อง Emsculpt NEO เป็นที่แรกในประเทศไทย
          </p>
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
      {/* ภาพจริงของเครื่อง Emsculpt NEO (BTL official assets) อยู่ในโฟลเดอร์ Google Drive ของคลินิก — ใช้แทน placeholder ก่อนขึ้น production */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="เครื่อง NC Neo (BTL Emsculpt NEO) ที่ณัฐชญา คลินิก" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">NC Neo คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              NC Neo คือชื่อโปรแกรมของณัฐชญา คลินิก ที่ใช้เครื่อง <strong className="font-semibold text-ink">BTL Emsculpt NEO</strong>
              ซึ่งเป็นเทคโนโลยีเดียวที่ปล่อยพลังงาน 2 ชนิดพร้อมกันจากหัวเดียว คือ
              <strong className="font-semibold text-ink">RF (คลื่นวิทยุ)</strong> และ
              <strong className="font-semibold text-ink">HIFEM+ (คลื่นแม่เหล็กไฟฟ้าความเข้มสูง)</strong>
            </p>
            <p className="mt-4 text-ink-muted">
              การทำงานร่วมกันของพลังงานทั้งสอง ทำให้ในการทำครั้งเดียวสามารถดูแลได้ทั้ง
              <strong className="font-semibold text-ink">การสลายไขมัน</strong> และ
              <strong className="font-semibold text-ink">การสร้างกล้ามเนื้อ</strong> ในบริเวณเดียวกัน
            </p>
            <p className="mt-6 text-sm text-ink-soft">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล · ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
          </div>
        </div>
      </section>

      {/* ============ CLINICAL NUMBERS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Clinical Data</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ตัวเลขจากงานวิจัยของผู้ผลิต</h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface p-8 text-center shadow-soft ring-1 ring-line">
              <p className="text-4xl font-bold text-brand-700 sm:text-5xl">+25%</p>
              <p className="mt-3 font-semibold">มวลกล้ามเนื้อเพิ่มขึ้น</p>
              <p className="mt-1 text-sm text-ink-muted">ในบริเวณที่เข้ารับการรักษา</p>
            </div>
            <div className="rounded-2xl bg-surface p-8 text-center shadow-soft ring-1 ring-line">
              <p className="text-4xl font-bold text-brand-700 sm:text-5xl">−30%</p>
              <p className="mt-3 font-semibold">ไขมันลดลง</p>
              <p className="mt-1 text-sm text-ink-muted">ในบริเวณที่เข้ารับการรักษา</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-soft">
            ค่าเฉลี่ยจากงานวิจัยทางคลินิก 3 ฉบับของผู้ผลิต · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
          </p>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How It Works</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">กลไกการทำงาน 4 ขั้นตอน</h2>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 font-bold text-ink">1</span>
            <h3 className="mt-4 font-semibold">Warm-up</h3>
            <p className="mt-2 text-sm text-ink-muted">ภายใน 4 นาทีแรก คลื่น RF ทำให้อุณหภูมิของกล้ามเนื้อสูงขึ้น เปรียบได้กับการวอร์มอัพก่อนออกกำลังกาย</p>
          </li>
          <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 font-bold text-ink">2</span>
            <h3 className="mt-4 font-semibold">Fat Breakdown</h3>
            <p className="mt-2 text-sm text-ink-muted">อุณหภูมิในชั้นไขมันเพิ่มขึ้นถึงระดับที่ทำให้เซลล์ไขมันเสียหายอย่างถาวร</p>
          </li>
          <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 font-bold text-ink">3</span>
            <h3 className="mt-4 font-semibold">Supramaximal Contraction</h3>
            <p className="mt-2 text-sm text-ink-muted">คลื่น HIFEM+ กระตุ้นให้กล้ามเนื้อหดตัวในระดับที่การออกกำลังกายตามปกติทำไม่ได้</p>
          </li>
          <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 font-bold text-ink">4</span>
            <h3 className="mt-4 font-semibold">After Treatment</h3>
            <p className="mt-2 text-sm text-ink-muted">ร่างกายค่อย ๆ กำจัดเซลล์ไขมันที่เสียหายออกไป และใยกล้ามเนื้อเริ่มกระบวนการสร้างใหม่</p>
          </li>
        </ol>
      </section>

      {/* ============ AREAS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Treatment Areas</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริเวณที่ทำได้</h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <li className="rounded-2xl bg-surface p-4 text-center font-medium shadow-soft ring-1 ring-line">หน้าท้อง</li>
            <li className="rounded-2xl bg-surface p-4 text-center font-medium shadow-soft ring-1 ring-line">สะโพก / ก้น</li>
            <li className="rounded-2xl bg-surface p-4 text-center font-medium shadow-soft ring-1 ring-line">ต้นแขน (biceps / triceps)</li>
            <li className="rounded-2xl bg-surface p-4 text-center font-medium shadow-soft ring-1 ring-line">ต้นขา (หน้า / หลัง / ใน / นอก)</li>
            <li className="rounded-2xl bg-surface p-4 text-center font-medium shadow-soft ring-1 ring-line">น่อง</li>
          </ul>
          <p className="mt-6 text-sm text-ink-soft">* บริเวณที่เหมาะสมกับแต่ละบุคคลขึ้นอยู่กับการประเมินของแพทย์</p>
        </div>
      </section>

      {/* ============ PROTOCOL ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Protocol</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ขั้นตอนและระยะเวลา</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <h3 className="mt-4 font-semibold">30 นาที ต่อครั้ง</h3>
            <p className="mt-2 text-sm text-ink-muted">ใช้เวลาทำประมาณ 30 นาทีต่อ 1 บริเวณ</p>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
            <h3 className="mt-4 font-semibold">4 ครั้ง สัปดาห์ละครั้ง</h3>
            <p className="mt-2 text-sm text-ink-muted">โปรโตคอลที่ผู้ผลิตแนะนำคือ 4 ครั้ง โดยเว้นระยะสัปดาห์ละครั้ง</p>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            <h3 className="mt-4 font-semibold">ไม่ต้องพักฟื้น</h3>
            <p className="mt-2 text-sm text-ink-muted">ไม่ต้องใช้ยาชา เดินเข้า–เดินออกได้เลย กลับไปทำกิจกรรมตามปกติได้</p>
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
                  ผู้ที่มีค่าดัชนีมวลกาย (BMI) ไม่เกิน 35
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ผู้ที่ต้องการดูแลทั้งการลดไขมันและการสร้างกล้ามเนื้อไปพร้อมกัน
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ผู้ที่ไม่สะดวกพักฟื้น ต้องการกลับไปทำกิจกรรมตามปกติได้ทันที
                </li>
              </ul>
              <p className="mt-6 text-sm text-ink-soft">* ความเหมาะสมและแนวทางการดูแลขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล</p>
            </div>
            <div>
              <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เพื่อประเมินความเหมาะสมก่อนทำ NC Neo" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEEL / RESULTS TIMELINE ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">During</p>
            <h2 className="mt-2 text-2xl font-bold">ระหว่างทำรู้สึกอย่างไร</h2>
            <ul className="mt-5 space-y-3 text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-1 h-3 w-3 flex-none text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                รู้สึกเหมือนกำลังออกกำลังกายหนัก จากการหดตัวของกล้ามเนื้อ
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 h-3 w-3 flex-none text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                รู้สึกอุ่นบริเวณที่ทำ จากการทำงานของคลื่น RF
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 h-3 w-3 flex-none text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                ไม่ต้องใช้ยาชา และไม่ต้องพักฟื้นหลังทำ
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Timeline</p>
            <h2 className="mt-2 text-2xl font-bold">เห็นผลเมื่อไหร่</h2>
            <ul className="mt-5 space-y-3 text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-1 h-3 w-3 flex-none text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                เริ่มรู้สึกได้ทันทีหลังทำ
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 h-3 w-3 flex-none text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                ผลชัดเจนขึ้นในช่วง 2–4 สัปดาห์หลังการทำครั้งสุดท้าย
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 h-3 w-3 flex-none text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>
                และดีขึ้นได้ต่อเนื่องหลังจากนั้น
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
          </div>
        </div>
      </section>

      {/* ============ EVIDENCE & CERTIFICATION ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Evidence</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">งานวิจัยและการรับรอง</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-3xl font-bold text-brand-700">30+</p>
              <h3 className="mt-3 font-semibold">งานวิจัย HIFEM ที่ตีพิมพ์</h3>
              <p className="mt-2 text-sm text-ink-muted">เทคโนโลยี HIFEM มีงานวิจัยตีพิมพ์มากกว่า 30 ฉบับ ตั้งแต่ปี 2018 เป็นต้นมา</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <p className="text-3xl font-bold text-brand-700">7</p>
              <h3 className="mt-3 font-semibold">Clinical studies ของ Emsculpt NEO</h3>
              <p className="mt-2 text-sm text-ink-muted">เครื่อง Emsculpt NEO มีการศึกษาทางคลินิกรองรับจำนวน 7 ฉบับ</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
              <h3 className="mt-3 font-semibold">การรับรองมาตรฐาน</h3>
              <p className="mt-2 text-sm text-ink-muted">
                เครื่อง Emsculpt NEO ได้รับการรับรองจาก US FDA และ CE (ยุโรป)
                {/* TODO: ขอเลขที่ อย. ไทย จากคลินิกมาใส่ */}
              </p>
            </div>
          </div>

          {/* ============ MEDICAL DISCLAIMER (บังคับตาม พ.ร.บ. สถานพยาบาล) ============ */}
          <div className="mt-10 rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-brand-200 sm:p-7">
            <div className="flex gap-4">
              <svg className="mt-0.5 h-6 w-6 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
              <div>
                <h3 className="font-semibold">ข้อมูลสำคัญก่อนตัดสินใจ</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                  <li><strong className="font-semibold text-ink">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</strong> ตัวเลขจากงานวิจัยเป็นค่าเฉลี่ยของกลุ่มตัวอย่าง ไม่ใช่ผลลัพธ์ที่รับรองได้กับทุกคน</li>
                  <li><strong className="font-semibold text-ink">ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</strong> เพื่อพิจารณาข้อบ่งใช้ ข้อห้าม และความเหมาะสมเฉพาะบุคคล</li>
                  <li>ผู้ที่มีโลหะหรืออุปกรณ์อิเล็กทรอนิกส์ฝังในร่างกาย เช่น เครื่องกระตุ้นหัวใจ (pacemaker) ควรแจ้งแพทย์ก่อนเข้ารับบริการทุกครั้ง</li>
                </ul>
              </div>
            </div>
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
            <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>NC Neo คืออะไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              NC Neo คือชื่อโปรแกรมของณัฐชญา คลินิก ที่ใช้เครื่อง BTL Emsculpt NEO ซึ่งปล่อยพลังงาน RF (คลื่นวิทยุ) และ HIFEM+ (คลื่นแม่เหล็กไฟฟ้าความเข้มสูง) พร้อมกันจากหัวเดียว เพื่อดูแลทั้งการสลายไขมันและการสร้างกล้ามเนื้อในการทำครั้งเดียว โดยณัฐชญา คลินิก ลงเครื่องนี้เป็นที่แรกในประเทศไทย
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต่างจากการดูดไขมันอย่างไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              NC Neo เป็นหัตถการที่ไม่ต้องผ่าตัด ไม่ต้องใช้เข็ม และไม่ต้องใช้ยาชา โดยใช้พลังงาน RF และ HIFEM+ ผ่านผิวหนัง จึงทำงานได้ทั้งกับชั้นไขมันและชั้นกล้ามเนื้อ ต่างจากการดูดไขมันซึ่งเป็นการผ่าตัดเพื่อนำไขมันออกโดยตรงและต้องมีระยะพักฟื้น การเลือกวิธีที่เหมาะสมควรให้แพทย์ประเมินเป็นรายบุคคล
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ต้องพักฟื้นไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ระหว่างทำจะรู้สึกเหมือนกำลังออกกำลังกายหนักจากการหดตัวของกล้ามเนื้อ ร่วมกับความรู้สึกอุ่นบริเวณที่ทำ ไม่ต้องใช้ยาชา ไม่ต้องพักฟื้น สามารถเดินเข้า–เดินออกและกลับไปทำกิจกรรมตามปกติได้ ทั้งนี้ความรู้สึกระหว่างทำแตกต่างกันในแต่ละบุคคล
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องทำกี่ครั้ง?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              โปรโตคอลที่ผู้ผลิตแนะนำคือ 4 ครั้ง ครั้งละประมาณ 30 นาที โดยเว้นระยะสัปดาห์ละครั้ง จำนวนครั้งที่เหมาะสมกับแต่ละบุคคลขึ้นอยู่กับการประเมินของแพทย์
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ใครทำไม่ได้บ้าง?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ความเหมาะสมต้องให้แพทย์ประเมินเป็นรายบุคคล ผู้ที่มีโลหะหรืออุปกรณ์อิเล็กทรอนิกส์ฝังในร่างกาย เช่น เครื่องกระตุ้นหัวใจ (pacemaker) ควรแจ้งแพทย์ก่อนเข้ารับบริการ รวมถึงควรแจ้งโรคประจำตัว ยาที่ใช้อยู่ และภาวะตั้งครรภ์ ให้แพทย์ทราบทุกครั้ง เพื่อพิจารณาข้อบ่งใช้และข้อห้ามก่อนตัดสินใจ
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More Services</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นที่น่าสนใจ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/emface" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-emface.jpg" alt="EMFACE ยกกระชับผิวหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">EMFACE</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวหน้าและกล้ามเนื้อใบหน้า ไม่ต้องใช้เข็ม</p></div>
            </Link>
            <Link href="/nc-chair" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-nc-chair.jpg" alt="NC Chair ดูแลกล้ามเนื้ออุ้งเชิงกราน" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Chair</h3><p className="mt-1 text-sm text-ink-muted">เก้าอี้กระตุ้นกล้ามเนื้ออุ้งเชิงกราน นั่งทำได้โดยไม่ต้องเปลี่ยนเสื้อผ้า</p></div>
            </Link>
            <Link href="/ulthera" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="Ulthera ยกกระชับผิวด้วยคลื่นอัลตราซาวด์" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Ulthera</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวด้วยคลื่นอัลตราซาวด์ ลงลึกถึงชั้นใต้ผิว</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจ NC Neo? ปรึกษาทีมแพทย์ของเรา</h2>
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
