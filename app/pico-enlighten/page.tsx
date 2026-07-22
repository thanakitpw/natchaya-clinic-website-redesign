import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pico Enlighten พิโคเลเซอร์ ดูแลเม็ดสีและหลุมสิว | ณัฐชญา คลินิก Natchaya Clinic",
  description:
    "Pico Enlighten พิโคเซคันด์เลเซอร์ Cutera enlighten นำเข้าจากสหรัฐอเมริกา ดูแลกระ จุดด่างดำ รอยดำจากสิว และหลุมสิวด้วยหัว MLA ความร้อนสะสมน้อย เสี่ยงรอยดำต่ำกว่าเลเซอร์แบบเก่า ที่ ณัฐชญา คลินิก",
};

export default function PicoEnlightenPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">Pico Enlighten</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Laser</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Pico Enlighten</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">พิโคเซคันด์เลเซอร์ ดูแลเม็ดสีและหลุมสิว ด้วยเครื่อง Cutera enlighten นำเข้าจากสหรัฐอเมริกา</p>
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
            <Image src="/assets/generated/imagegen/service-pico.jpg" alt="เครื่องพิโคเซคันด์เลเซอร์ Cutera enlighten ที่ณัฐชญา คลินิก" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">พิโคเลเซอร์คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              พิโคเซคันด์เลเซอร์คือเลเซอร์ที่ปล่อยพลังงานในช่วงเวลาสั้นระดับ <strong className="font-semibold text-ink">หนึ่งในล้านล้านของวินาที</strong>
              ที่ณัฐชญา คลินิก ใช้เครื่อง <strong className="font-semibold text-ink">Cutera enlighten</strong> (นำเข้าจากสหรัฐอเมริกา)
              ซึ่งให้ความยาวคลื่น <strong className="font-semibold text-ink">532 nm</strong> และ <strong className="font-semibold text-ink">1064 nm</strong>
              ครอบคลุมทั้งการดูแลเม็ดสี การลบรอยสัก และการดูแลหลุมสิวเมื่อใช้ร่วมกับหัวเลนส์พิเศษ
            </p>
            <p className="mt-4 text-ink-muted">
              เครื่องเดียวกันนี้ทำงานได้หลายโหมด คลินิกจึงแยกเรียกตามลักษณะการรักษาเป็น <strong className="font-semibold text-ink">Pico Reju</strong>
              (ฟื้นฟูผิวและลดเม็ดสี) และ <strong className="font-semibold text-ink">Pico Reju + MLA</strong> (สำหรับหลุมสิวโดยเฉพาะ)
            </p>
            {/* TODO: ยืนยันกับคลินิกว่าเป็นรุ่น enlighten SR หรือ enlighten III + ขอเลขที่ อย. ไทย */}
          </div>
        </div>
      </section>

      {/* ============ KEY MECHANISM ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How It Works</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">กลไก: “สั่นให้เม็ดสีแตก” ไม่ใช่ “เผา”</h2>
            <p className="mt-4 max-w-3xl text-ink-muted">
              เพราะพัลส์ของพิโคเลเซอร์สั้นมาก พลังงานจึงออกฤทธิ์แบบ <strong className="font-semibold text-ink">photomechanical (เชิงกล)</strong>
              คือสั่นให้เม็ดสีแตกตัว มากกว่าแบบ <strong className="font-semibold text-ink">photothermal (เชิงความร้อน)</strong> ที่อาศัยการเผาไหม้ด้วยความร้อน
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <h3 className="text-lg font-semibold">Photothermal — เลเซอร์แบบเก่า</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                อาศัยความร้อนเป็นหลักในการจัดการเม็ดสี ความร้อนที่สะสมในผิวจึงมากกว่า
                และเป็นที่มาของความเสี่ยง <strong className="font-semibold text-ink">รอยดำหลังการอักเสบ (PIH)</strong> ซึ่งพบได้บ่อยในผิวสีเข้ม
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-brand-300">
              <h3 className="text-lg font-semibold text-brand-700">Photomechanical — พิโคเลเซอร์</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                พัลส์สั้นระดับพิโควินาทีสร้างแรงสั่นเชิงกลให้เม็ดสีแตกตัว
                <strong className="font-semibold text-ink">ความร้อนสะสมน้อย ความเสี่ยงรอยดำหลังการอักเสบ (PIH) จึงต่ำกว่าเลเซอร์แบบเก่า</strong>
                ซึ่งเป็นประเด็นสำคัญมากสำหรับผิวคนไทย
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-200">
            <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/></svg>
            <p className="text-sm leading-relaxed text-ink-muted">
              เม็ดสีที่แตกออกเป็นผงละเอียดจะถูก <strong className="font-semibold text-ink">ระบบน้ำเหลืองกำจัดออกจากร่างกายเอง</strong> ตามธรรมชาติ
              ผิวจึงค่อย ๆ ดูกระจ่างขึ้นและสีผิวสม่ำเสมอขึ้น
            </p>
          </div>
        </div>
      </section>

      {/* ============ TWO MODES ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Two Modes</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เครื่องเดียวกัน สองโหมดการรักษา</h2>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Pico Enlighten ใช้ได้ทั้งสองโหมดจากเครื่องเดียวกัน แพทย์จะเลือกโหมดที่เหมาะกับปัญหาผิวของแต่ละคนหลังการประเมิน
          </p>
        </div>

        {/* MODE 1 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">โหมดที่ 1</span>
            <h3 className="mt-3 text-xl font-bold sm:text-2xl">Pico Reju — ฟื้นฟูผิว / ลดเม็ดสี</h3>
            <p className="mt-3 text-ink-muted">โหมดพื้นฐานของเครื่อง ทำงานที่ “เม็ดสี” เป็นหลัก เหมาะกับปัญหาผิวเหล่านี้</p>
            <ul className="mt-6 space-y-3 text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                กระตื้น กระลึก จุดด่างดำ ฝ้าแดด
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                รอยดำจากสิว (PIH)
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผิวหมองคล้ำ สีผิวไม่สม่ำเสมอ
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                รูขุมขนกว้าง
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ลบรอยสัก
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-surface-alt p-5 ring-1 ring-line">
              <p className="text-sm font-semibold">จุดเด่น</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                แทบไม่มีระยะพักฟื้น กลับไปทำงานได้ทันที อาจมีรอยแดงเล็กน้อยเพียงไม่กี่ชั่วโมง
              </p>
            </div>
          </div>
          <div>
            <Image src="/assets/generated/imagegen/service-pico.jpg" alt="Pico Reju โหมดฟื้นฟูผิวและลดเม็ดสีด้วยพิโคเลเซอร์" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>

        {/* MODE 2 */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">โหมดที่ 2</span>
            <h3 className="mt-3 text-xl font-bold sm:text-2xl">Pico Reju + MLA — สำหรับหลุมสิวโดยเฉพาะ</h3>
            <p className="mt-3 text-ink-muted">
              <strong className="font-semibold text-ink">MLA (Micro Lens Array)</strong> คือหัวเลนส์พิเศษที่สวมเพิ่มเข้ากับเครื่อง
              ทำหน้าที่ <strong className="font-semibold text-ink">แยกลำแสงเลเซอร์หนึ่งลำให้กลายเป็นจุดพลังงานสูงจำนวนมาก</strong> กระจายเป็นตาราง
              โดยมีพื้นที่พลังงานต่ำคั่นระหว่างจุด
            </p>
            <div className="mt-6 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-200">
              <p className="text-sm font-semibold text-brand-700">ความต่างสำคัญ</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Pico ธรรมดาทำงานที่ <strong className="font-semibold text-ink">“เม็ดสี”</strong>
                แต่ Pico + MLA ทำงานที่ <strong className="font-semibold text-ink">“โครงสร้างและพื้นผิว”</strong>
                จึงเป็นตัวเลือกสำหรับหลุมสิว
              </p>
            </div>
          </div>
          <div className="md:order-1">
            <Image src="/assets/generated/imagegen/service-pico.jpg" alt="หัวเลนส์ MLA แยกลำแสงเลเซอร์เป็นจุดพลังงานสูงจำนวนมากสำหรับหลุมสิว" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>
      </section>

      {/* ============ LIOB MECHANISM ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Mechanism</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">LIOB — กลไกที่ทำให้หลุมสิวตื้นขึ้น</h2>
            <p className="mt-4 max-w-3xl text-ink-muted">
              หัวใจของโหมด MLA คือปรากฏการณ์ <strong className="font-semibold text-ink">LIOB (Laser-Induced Optical Breakdown)</strong> ซึ่งเกิดขึ้น 4 ขั้นตอน
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-ink">1</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                หัว MLA รวมพลังงานให้เข้มข้นสูงมากที่ <strong className="font-semibold text-ink">จุดโฟกัสเล็ก ๆ ใต้ผิว</strong>
              </p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-ink">2</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                เนื้อเยื่อ ณ จุดนั้นแตกตัวเป็นพลาสม่า เกิด <strong className="font-semibold text-ink">โพรงอากาศขนาดจิ๋วใต้ผิว</strong>
              </p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-ink">3</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                เกิด <strong className="font-semibold text-ink">แรงกลเชิงกล</strong> แผ่ลงสู่ชั้นหนังแท้
              </p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-ink">4</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                แรงกลกระตุ้น <strong className="font-semibold text-ink">ไฟโบรบลาสต์ให้สร้างคอลลาเจนใหม่</strong> ผิวถูกปรับโครงสร้างใหม่ หลุมสิวค่อย ๆ ตื้นขึ้น
              </p>
            </li>
          </ol>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <h3 className="text-lg font-semibold">ทำไมจึงเหมาะกับผิวคนเอเชีย</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                LIOB สร้างการบาดเจ็บระดับจุลภาคใต้ผิว <strong className="font-semibold text-ink">โดยผิวชั้นบนแทบไม่ถูกทำลาย</strong>
                ต่างจากเลเซอร์ลอกผิวแบบเดิม จึงฟื้นตัวเร็วกว่าและเสี่ยงรอยดำน้อยกว่า
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <h3 className="text-lg font-semibold">จำนวนครั้ง</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                งานวิจัยในผู้ป่วยเอเชียที่มีหลุมสิวระดับน้อยถึงปานกลางใช้ <strong className="font-semibold text-ink">4 ครั้งต่อเนื่อง</strong> ในการประเมินผล
                จำนวนครั้งที่เหมาะกับแต่ละคนต้องให้แพทย์ประเมิน
              </p>
            </div>
          </div>

          {/* EXPECTATION SETTING */}
          <div className="mt-6 flex gap-4 rounded-2xl border-l-4 border-brand-600 bg-surface p-6 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-6 w-6 flex-none text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
            <div>
              <p className="font-semibold">สิ่งที่ควรเข้าใจก่อนตัดสินใจ</p>
              <p className="mt-2 leading-relaxed text-ink-muted">
                หลุมสิวเป็นปัญหาที่ต้องใช้เวลาและต้องทำหลายครั้ง
                <strong className="font-semibold text-ink">เป้าหมายของการรักษาคือ “ตื้นขึ้นและเรียบเนียนขึ้น” ไม่ใช่ “หายสนิท”</strong>
                การสื่อสารความคาดหวังตามจริงกับแพทย์ตั้งแต่ต้นจะช่วยให้วางแผนการดูแลได้อย่างเหมาะสม
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATION ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Certification</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">การรับรอง</h2>
          <p className="mt-4 max-w-3xl text-ink-muted">
            ข้อบ่งใช้ของเครื่อง Cutera enlighten ที่ <strong className="font-semibold text-ink">ได้รับการรับรองจาก US FDA</strong> แยกตามความยาวคลื่น
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-soft ring-1 ring-line">
          <table className="w-full min-w-[560px] border-collapse bg-surface text-left text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th scope="col" className="whitespace-nowrap border-b border-line px-5 py-4 font-semibold">ความยาวคลื่น</th>
                <th scope="col" className="border-b border-line px-5 py-4 font-semibold">ข้อบ่งใช้ที่ได้รับการรับรองจาก US FDA</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr>
                <th scope="row" className="whitespace-nowrap border-b border-line px-5 py-4 text-left font-semibold text-brand-700">1064 nm</th>
                <td className="border-b border-line px-5 py-4">
                  <ul className="space-y-1.5">
                    <li>รอยโรคเม็ดสีชนิดไม่ร้ายแรง (ทุกสีผิว)</li>
                    <li>ลบรอยสักหลายสี</li>
                    <li><strong className="font-semibold text-ink">หลุมสิว เมื่อใช้ร่วมกับหัว MLA (ผิว Fitzpatrick II–V)</strong></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row" className="whitespace-nowrap px-5 py-4 text-left font-semibold text-brand-700">532 nm</th>
                <td className="px-5 py-4">
                  <ul className="space-y-1.5">
                    <li>รอยโรคเม็ดสีชนิดไม่ร้ายแรง (ผิว Fitzpatrick I–IV)</li>
                    <li>ลบรอยสักหมึกแดงและเหลือง</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex gap-4 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-200">
          <svg className="mt-0.5 h-6 w-6 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.746 3.746 0 0 1 21 12Z"/></svg>
          <p className="text-sm leading-relaxed text-ink-muted">
            ข้อบ่งใช้ <strong className="font-semibold text-ink">“หลุมสิวเมื่อใช้ร่วมกับหัว MLA”</strong> เป็นการรับรองที่เฉพาะเจาะจงและตรงกับการใช้งานจริงของโหมดที่ 2
            ทั้งนี้การรับรองเป็นข้อมูลของตัวเครื่องมือแพทย์ ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
          </p>
        </div>
      </section>

      {/* ============ AFTERCARE ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Aftercare</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">การดูแลหลังทำ</h2>
              <ul className="mt-6 space-y-4 text-ink-muted">
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  <span><strong className="font-semibold text-ink">ต้องเลี่ยงแดดและทากันแดดอย่างสม่ำเสมอหลังทำ</strong> — เป็นขั้นตอนสำคัญในการลดความเสี่ยงรอยดำหลังการอักเสบ</span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  หลังทำอาจมีรอยแดงหรือบวมเล็กน้อยชั่วคราว ซึ่งจะค่อย ๆ จางลงเอง
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  ปฏิบัติตามคำแนะนำการดูแลผิวที่แพทย์ให้ไว้เฉพาะบุคคล และมาตามนัดติดตามผล
                </li>
              </ul>
              <div className="mt-8 rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
                <p className="font-semibold">ก่อนตัดสินใจ</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  <strong className="font-semibold text-ink">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</strong>
                  และ <strong className="font-semibold text-ink">ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</strong>
                  เพื่อวางแผนการดูแลที่เหมาะสมกับสภาพผิวและปัญหาของแต่ละคน
                </p>
              </div>
            </div>
            <div>
              <Image src="/assets/generated/imagegen/aftercare-skincare.jpg" alt="การดูแลผิวหลังทำพิโคเลเซอร์ เลี่ยงแดดและทากันแดดสม่ำเสมอ" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
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
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>พิโคเลเซอร์ต่างจากเลเซอร์ทั่วไปอย่างไร?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              พิโคเลเซอร์ปล่อยพลังงานในช่วงเวลาสั้นระดับหนึ่งในล้านล้านของวินาที พลังงานจึงออกฤทธิ์แบบเชิงกล (photomechanical) คือสั่นให้เม็ดสีแตก มากกว่าการอาศัยความร้อนเผา (photothermal) แบบเลเซอร์รุ่นเก่า ผลคือความร้อนสะสมในผิวน้อยกว่า และความเสี่ยงรอยดำหลังการอักเสบ (PIH) ต่ำกว่า ซึ่งเป็นข้อได้เปรียบสำหรับผิวคนไทย
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>Pico Reju กับ Pico Reju + MLA ต่างกันยังไง?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ทั้งสองใช้เครื่องเดียวกันแต่คนละโหมด Pico Reju ทำงานที่ “เม็ดสี” เหมาะกับกระ จุดด่างดำ รอยดำจากสิว และผิวหมองคล้ำ ส่วน Pico Reju + MLA เพิ่มหัวเลนส์ Micro Lens Array ที่แยกลำแสงเป็นจุดพลังงานสูงจำนวนมาก ทำงานที่ “โครงสร้างและพื้นผิว” จึงเป็นตัวเลือกสำหรับหลุมสิว แพทย์จะเป็นผู้เลือกโหมดที่เหมาะกับปัญหาผิวของแต่ละคน
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>เจ็บไหม ต้องพักฟื้นนานไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              โหมด Pico Reju แทบไม่มีระยะพักฟื้น กลับไปทำงานได้ทันที อาจมีรอยแดงเล็กน้อยเพียงไม่กี่ชั่วโมง ส่วนโหมด MLA อาจมีรอยแดงและบวมชั่วคราวได้มากกว่าเล็กน้อยแต่ระยะพักฟื้นยังสั้น ความรู้สึกระหว่างทำและการดูแลก่อน–หลังทำแตกต่างกันในแต่ละบุคคล ควรสอบถามแพทย์ผู้ทำหัตถการโดยตรง
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ต้องทำกี่ครั้งถึงเห็นผล?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              ขึ้นอยู่กับปัญหาผิวและโหมดที่ใช้ สำหรับหลุมสิว งานวิจัยในผู้ป่วยเอเชียที่มีหลุมสิวระดับน้อยถึงปานกลางใช้ 4 ครั้งต่อเนื่องในการประเมินผล และควรเข้าใจว่าเป้าหมายคือหลุมสิว “ตื้นขึ้นและเรียบเนียนขึ้น” ไม่ใช่ “หายสนิท” ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล จำนวนครั้งที่เหมาะสมต้องให้แพทย์ประเมิน
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <button data-accordion-trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              <span>ผิวคล้ำทำได้ไหม?</span>
              <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
            </button>
            <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
              พิโคเลเซอร์มีความร้อนสะสมน้อย ความเสี่ยงรอยดำจึงต่ำกว่าเลเซอร์แบบเก่า แต่ต้องให้แพทย์ประเมินสภาพผิวก่อนทุกครั้ง เพราะความเหมาะสม การตั้งค่าพลังงาน และแนวทางการดูแลจะต่างกันไปตามสีผิวและปัญหาของแต่ละบุคคล
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
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นที่เกี่ยวข้อง</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/dual-yellow" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              <Image src="/assets/generated/imagegen/service-dual-yellow.jpg" alt="Dual Yellow เลเซอร์เหลืองสองความยาวคลื่น" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">Dual Yellow</h3><p className="mt-1 text-sm text-ink-muted">ดูแลฝ้า รอยแดง และเส้นเลือดฝอย</p></div>
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจ Pico Enlighten? ปรึกษาทีมแพทย์ของเรา</h2>
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
