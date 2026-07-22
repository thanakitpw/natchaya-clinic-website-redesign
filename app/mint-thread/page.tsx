import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ร้อยไหมปรับรูปหน้า ยกกระชับใบหน้า | ณัฐชญา คลินิก Natchaya Clinic",
  description: "ร้อยไหมปรับรูปหน้า ยกกระชับใบหน้าเห็นผลตั้งแต่วันที่ทำ พร้อมกระตุ้นคอลลาเจนระยะยาว เป็นหัตถการที่ทำโดยแพทย์ ที่ ณัฐชญา คลินิก",
};

export default function MintThreadPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">ร้อยไหมปรับรูปหน้า</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Face Lift</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">ร้อยไหมปรับรูปหน้า</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">ยกกระชับและปรับรูปหน้า เห็นผลตั้งแต่วันที่ทำ</p>
          <p className="mt-3 max-w-2xl text-sm text-ink-soft">เป็นหัตถการที่ทำโดยแพทย์ · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
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
            <Image src="/assets/generated/imagegen/service-mint-thread.jpg" alt="ร้อยไหมปรับรูปหน้า ยกกระชับใบหน้า" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ร้อยไหมปรับรูปหน้า คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              ร้อยไหมปรับรูปหน้า คือหัตถการยกกระชับที่แพทย์สอดเส้นไหมชนิดที่ร่างกายสลายได้เองเข้าไปใต้ผิว
              เพื่อดึงเนื้อเยื่อที่หย่อนคล้อยให้กลับขึ้นไปอยู่ในตำแหน่งที่ต้องการ โดยไม่ต้องผ่าตัด
            </p>
            <p className="mt-4 text-ink-muted">
              นอกจากผลยกที่เห็นได้ตั้งแต่วันที่ทำแล้ว การมีเส้นไหมอยู่ใต้ผิวยังกระตุ้นให้ร่างกายสร้างคอลลาเจนใหม่ขึ้นรอบแนวไหม
              จึงช่วยเรื่องโครงสร้างผิวในระยะยาวควบคู่กันไป ชนิดและแนวทางที่เหมาะกับแต่ละคนแตกต่างกัน แพทย์จะเป็นผู้ประเมินและเลือกให้
            </p>
            <p className="mt-4 text-sm text-ink-soft">ร้อยไหมปรับรูปหน้า เป็นหัตถการที่ทำโดยแพทย์ · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How It Works</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทำงานอย่างไร — ให้ผล 2 ทางพร้อมกัน</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">ร้อยไหมปรับรูปหน้าทำงานทั้งเชิงกลไกและเชิงชีวภาพในเวลาเดียวกัน</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-base font-bold text-brand-700">1</span>
              <h3 className="mt-4 text-lg font-semibold">ผลยกทันที (Mechanical Lift)</h3>
              <p className="mt-3 text-ink-muted">
                แพทย์สอดเส้นไหมผ่านเข็มนำเข้าใต้ผิว เส้นไหมเกี่ยวยึดเนื้อเยื่อที่หย่อน แล้วดึงกลับขึ้นในทิศทางที่ต้องการ
                <strong className="font-semibold text-ink">เห็นการยกได้ตั้งแต่วันที่ทำ</strong>
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-base font-bold text-brand-700">2</span>
              <h3 className="mt-4 text-lg font-semibold">ผลกระตุ้นคอลลาเจนระยะยาว (Biostimulation)</h3>
              <p className="mt-3 text-ink-muted">
                เมื่อเส้นไหมค่อย ๆ สลาย ร่างกายตอบสนองด้วยการสร้างคอลลาเจนใหม่รอบแนวไหม ทำให้ผิวบริเวณนั้นแน่นและมีโครงสร้างรองรับดีขึ้น
                แม้ไหมจะสลายไปแล้วก็ตาม
              </p>
            </div>
          </div>
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
                ผู้ที่ผิวหน้าหย่อนคล้อยชัดเจน จนการทำเครื่องยกกระชับอย่างเดียวอาจไม่เพียงพอ
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่มีแก้มตก ร่องแก้มลึก หรือกรอบหน้าไม่ชัด
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ต้องการเห็นผลการยกทันที ไม่ต้องการรอให้คอลลาเจนสร้างใหม่หลายเดือน
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ต้องการปรับรูปหน้าให้เรียวขึ้น ยกมุมปากและแก้ม
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ยังไม่พร้อมเข้ารับการผ่าตัดดึงหน้า
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">* ความเหมาะสมและแนวทางการดูแลขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</p>
          </div>
          <div>
            <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เพื่อประเมินความเหมาะสมก่อนร้อยไหมปรับรูปหน้า" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>
      </section>

      {/* ============ COMBINE WITH / TIMELINE ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Combination</p>
              <h2 className="mt-2 text-2xl font-bold">ใช้ร่วมกับเครื่องยกกระชับ</h2>
              <p className="mt-4 text-ink-muted">
                ร้อยไหมปรับรูปหน้ามักใช้ร่วมกับเครื่องยกกระชับ เช่น <Link href="/ulthera" className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-600">Ulthera</Link>
                หรือ <Link href="/emface" className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-600">EMFACE</Link>
                เพื่อให้ได้ทั้งการยกเชิงโครงสร้างจากเส้นไหม และการกระชับผิวจากการกระตุ้นคอลลาเจนด้วยพลังงาน
                แผนการดูแลที่เหมาะสมกับแต่ละคนแตกต่างกัน แพทย์จะเป็นผู้ประเมินและวางแผนให้
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Timeline</p>
              <h2 className="mt-2 text-2xl font-bold">ระยะเวลาและผลลัพธ์</h2>
              <ul className="mt-5 space-y-4 text-ink-muted">
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  <span><strong className="font-semibold text-ink">ระยะเวลาทำ</strong> — หัตถการใช้เวลาประมาณ 1 ชั่วโมง</span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                  <span><strong className="font-semibold text-ink">ผลลัพธ์</strong> — เห็นการยกได้ตั้งแต่วันที่ทำ และผลลัพธ์มักเข้าที่ชัดเจนประมาณ 1 เดือนหลังทำ</span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>
                  <span><strong className="font-semibold text-ink">ความคงอยู่</strong> — ข้อมูลจากผู้ผลิตระบุว่าผลลัพธ์อยู่ได้ประมาณ 1 ปี</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-ink-soft">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ขึ้นกับสภาพผิว อายุ ระดับความหย่อนคล้อย และการดูแลตนเองหลังทำ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RECOVERY / AFTERCARE ============ */}
      {/* TODO: ขอคำแนะนำการดูแลตัวเองหลังทำ + ข้อห้าม/ผลข้างเคียง ฉบับจริงจากแพทย์ของคลินิกมาใส่ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Recovery & Aftercare</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">การพักฟื้นและการดูแลตัวเอง</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">ร้อยไหมเป็นหัตถการที่มีการลงเข็ม <strong className="font-semibold text-ink">จึงมีระยะพักฟื้น</strong> ข้อมูลส่วนนี้เราตั้งใจเขียนไว้อย่างตรงไปตรงมา เพื่อให้ผู้เข้ารับบริการเตรียมตัวได้ถูกต้อง</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
            <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
            <h3 className="mt-4 text-lg font-semibold">มีระยะพักฟื้น</h3>
            <p className="mt-3 text-ink-muted">หลังทำอาจมีอาการบวม ช้ำ หรือรู้สึกตึงรั้งบริเวณที่ร้อยไหมในช่วงแรก ซึ่งเป็นเรื่องปกติของหัตถการนี้</p>
          </div>
          <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
            <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <h3 className="mt-4 text-lg font-semibold">มีข้อควรปฏิบัติหลังทำ</h3>
            <p className="mt-3 text-ink-muted">ต้องทำตามคำแนะนำอย่างเคร่งครัด เช่น หลีกเลี่ยงการอ้าปากกว้าง การนวดหน้า และการนอนตะแคง ตามระยะเวลาที่แพทย์กำหนด</p>
          </div>
          <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
            <svg className="h-7 w-7 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/></svg>
            <h3 className="mt-4 text-lg font-semibold">แพทย์อธิบายก่อนและหลังทำทุกครั้ง</h3>
            <p className="mt-3 text-ink-muted">แพทย์จะอธิบายคำแนะนำการดูแลตัวเองอย่างละเอียดทั้งก่อนและหลังทำทุกครั้ง หากมีข้อสงสัยสามารถสอบถามได้ตลอด</p>
          </div>
        </div>
        <p className="mt-8 rounded-2xl bg-surface-alt px-6 py-5 text-sm text-ink-muted ring-1 ring-line">
          <strong className="font-semibold text-ink">หมายเหตุ:</strong> ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ข้อมูลบนหน้านี้มีวัตถุประสงค์เพื่อให้ความรู้เบื้องต้นเท่านั้น ไม่ใช่คำวินิจฉัยหรือคำแนะนำทางการแพทย์เฉพาะบุคคล
          ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการทุกครั้ง
        </p>
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
              <span>ร้อยไหมปรับรูปหน้า คืออะไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              คือหัตถการยกกระชับที่แพทย์สอดเส้นไหมชนิดที่ร่างกายสลายได้เองเข้าไปใต้ผิว เพื่อเกี่ยวยึดเนื้อเยื่อที่หย่อนคล้อยให้กลับขึ้นไปในตำแหน่งที่ต้องการ ช่วยยกกระชับและปรับรูปหน้าโดยไม่ต้องผ่าตัด เป็นหัตถการที่ทำโดยแพทย์
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ต้องพักฟื้นกี่วัน?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ร้อยไหมเป็นหัตถการที่มีการลงเข็ม จึงมีระยะพักฟื้น หลังทำอาจมีอาการบวม ช้ำ หรือรู้สึกตึงรั้งในช่วงแรกได้ ซึ่งเป็นเรื่องปกติ และมีข้อควรปฏิบัติที่ต้องทำตามอย่างเคร่งครัด เช่น หลีกเลี่ยงการอ้าปากกว้าง การนวดหน้า และการนอนตะแคง ตามระยะเวลาที่แพทย์กำหนด ระยะเวลาพักฟื้นของแต่ละคนไม่เท่ากัน แพทย์จะประเมินและอธิบายคำแนะนำการดูแลตัวเองให้อย่างละเอียดก่อนและหลังทำทุกครั้ง
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ผลอยู่ได้นานแค่ไหน?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              เห็นการยกได้ตั้งแต่วันที่ทำ และผลลัพธ์มักเข้าที่ชัดเจนประมาณ 1 เดือนหลังทำ ทั้งนี้ผลลัพธ์และระยะเวลาที่อยู่ได้ขึ้นอยู่กับแต่ละบุคคล ทั้งสภาพผิว อายุ ระดับความหย่อนคล้อย และการดูแลตนเองหลังทำ แพทย์จะประเมินและอธิบายให้ก่อนตัดสินใจ
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ไหมสลายไปแล้ว ผิวจะกลับไปหย่อนเหมือนเดิมไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              เมื่อเส้นไหมสลายไป คอลลาเจนที่ร่างกายสร้างขึ้นรอบแนวไหมยังคงอยู่ ทำให้ผิวบริเวณนั้นยังมีโครงสร้างรองรับ แต่ผิวจะยังเปลี่ยนแปลงตามวัยต่อไปตามธรรมชาติ แพทย์จะประเมินและวางแผนการดูแลระยะยาวที่เหมาะกับแต่ละบุคคลให้
            </div>
          </div>
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
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Ulthera</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับด้วยอัลตราซาวด์ พร้อมระบบภาพเรียลไทม์</p></div>
            </Link>
            <Link href="/emface" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-emface.jpg" alt="EMFACE ยกกระชับใบหน้าโดยไม่ใช้เข็ม" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">EMFACE</h3><p className="mt-1 text-sm text-ink-muted">ดูแลทั้งผิวและกล้ามเนื้อใบหน้า ไม่ใช้เข็ม</p></div>
            </Link>
            <Link href="/nc-neo" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="NC Neo ดูแลผิวหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Neo</h3><p className="mt-1 text-sm text-ink-muted">โปรแกรมดูแลผิวหน้าของคลินิก</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจร้อยไหมปรับรูปหน้า? ปรึกษาทีมแพทย์ของเรา</h2>
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
