import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulthera (Ultherapy) ยกกระชับผิวหน้าไม่ผ่าตัด ด้วยเทคนิค SPT | ณัฐชญา คลินิก Natchaya Clinic",
  description: "Ulthera (Ultherapy) จาก Merz Aesthetics ยกกระชับผิวหน้าโดยไม่ต้องผ่าตัด ด้วยคลื่นอัลตราซาวด์แบบโฟกัสระดับไมโครและระบบภาพเรียลไทม์ ทำงานด้วยเทคนิค SPT (See–Plan–Treat) โดยทีมแพทย์ที่ ณัฐชญา คลินิก",
};

export default function UltheraPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/services" className="hover:text-brand-700">บริการ</Link> <span className="px-1">/</span> <span className="text-ink">Ulthera</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Face Lift</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Ulthera</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">ยกกระชับผิวหน้าโดยไม่ต้องผ่าตัด ด้วยเทคนิค SPT</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-line">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            Merz Aesthetics — เครื่อง Ultherapy<sup>®</sup> แท้
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
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="Ulthera ยกกระชับผิวหน้าด้วยคลื่นอัลตราซาวด์แบบโฟกัสระดับไมโคร" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Ulthera คืออะไร</h2>
            <p className="mt-4 text-ink-muted">
              Ulthera (Ultherapy<sup>®</sup> จาก <strong className="font-semibold text-ink">Merz Aesthetics</strong>) คือเทคโนโลยียกกระชับผิวหน้าแบบไม่ผ่าตัด
              ใช้คลื่นอัลตราซาวด์แบบโฟกัสระดับไมโคร (Micro-Focused Ultrasound) ส่งพลังงานความร้อนลงสู่ผิวชั้นลึก
            </p>
            <p className="mt-4 text-ink-muted">
              จุดที่ทำให้ต่างจาก HIFU ทั่วไปคือ <strong className="font-semibold text-ink">ระบบภาพอัลตราซาวด์แบบเรียลไทม์ (DeepSEE<sup>®</sup>)</strong>
              ที่ทำให้แพทย์ “มองเห็น” ชั้นผิวและเนื้อเยื่อใต้ผิวได้ลึกถึงประมาณ 8 มม. ทั้งก่อนและระหว่างการปล่อยพลังงาน
              จึงเป็นที่มาของชื่อเทคโนโลยี <strong className="font-semibold text-ink">MFU-V</strong> (Microfocused Ultrasound with Visualization)
            </p>
          </div>
        </div>
      </section>

      {/* ============ SPT TECHNIQUE (See – Plan – Treat) ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Signature Technique</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เทคนิค SPT — See · Plan · Treat</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">แนวทางการทำ Ulthera ที่เริ่มจาก “การมองเห็นชั้นผิวจริง” ของคนไข้แต่ละราย ก่อนจะวางแผนและลงมือทำ</p>
          </div>

          <ol className="grid gap-6 md:grid-cols-3">
            <li className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-400 text-lg font-bold text-ink">S</span>
              <h3 className="mt-5 text-lg font-semibold">See — มองเห็น</h3>
              <p className="mt-2 text-sm text-ink-muted">ใช้ระบบภาพเรียลไทม์ส่องดูชั้นผิวจริงของคนไข้แต่ละราย เห็นความหนาบางของผิว ตำแหน่งไขมัน และชั้น SMAS</p>
            </li>
            <li className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-400 text-lg font-bold text-ink">P</span>
              <h3 className="mt-5 text-lg font-semibold">Plan — วางแผน</h3>
              <p className="mt-2 text-sm text-ink-muted">ประเมินโครงสร้างผิวจากภาพที่เห็น วางแผนว่าจะยิงตรงไหน ที่ความลึกเท่าไร และใช้กี่ไลน์</p>
            </li>
            <li className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-400 text-lg font-bold text-ink">T</span>
              <h3 className="mt-5 text-lg font-semibold">Treat — ลงมือทำ</h3>
              <p className="mt-2 text-sm text-ink-muted">ยิงพลังงานตามแผนที่วางไว้ ให้ลงตรงชั้นเป้าหมายอย่างแม่นยำ</p>
            </li>
          </ol>

          <div className="mt-8 flex gap-4 rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
            <svg className="mt-0.5 h-6 w-6 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <div>
              <h3 className="font-semibold">ทำไมการ “เห็นก่อนยิง” จึงสำคัญ</h3>
              <p className="mt-1.5 text-sm text-ink-muted">เครื่อง HIFU ทั่วไปที่ไม่มีระบบภาพ แพทย์จะยิงโดยไม่เห็นชั้นผิวจริงของคนไข้ การเห็นภาพชั้นผิวก่อนยิงจึงช่วยให้วางแผนการรักษาได้ตรงกับกายวิภาคของแต่ละคน</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ "ไลน์" EXPLAINER ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Lines Explained</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">“ไลน์” คืออะไร</h2>
            <p className="mt-4 text-ink-muted">หน่วยของ Ulthera คือ <strong className="font-semibold text-ink">“ไลน์”</strong> ไม่ใช่ “ช็อต” แบบ HIFU ทั่วไป เป็นคำที่มีผู้สอบถามเข้ามาบ่อย จึงขออธิบายให้ชัดเจน</p>
            <ul className="mt-6 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                <span><strong className="font-semibold text-ink">1 ไลน์</strong> = การกดปุ่มปล่อยพลังงาน 1 ครั้ง สร้างจุดความร้อนขนาดเล็ก (Thermal Coagulation Points) เรียงต่อกันเป็นแนวเส้น</span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                <span>ยิ่งจำนวนไลน์มาก = ครอบคลุมพื้นที่ได้มากขึ้น และวางจุดความร้อนได้ถี่ขึ้น</span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                <span>จำนวนไลน์ที่เหมาะสมของแต่ละคน <strong className="font-semibold text-ink">ไม่เท่ากัน</strong> ขึ้นอยู่กับอายุ ขนาดใบหน้า และระดับความหย่อนคล้อย</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-200">
              <p className="text-sm text-ink-muted"><strong className="font-semibold text-brand-700">แพทย์เป็นผู้ประเมิน</strong> ว่าแต่ละคนควรใช้กี่ไลน์ และลงที่บริเวณใดบ้าง — ไม่ใช่ตัวเลขสำเร็จรูปที่ใช้ได้กับทุกคน</p>
            </div>
          </div>
          <div>
            <Image src="/assets/generated/imagegen/diagram-ulthera-lines.jpg" alt="แผนภาพอธิบายว่า 1 ไลน์ของ Ulthera คือแนวจุดความร้อนขนาดเล็กเรียงต่อกัน" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">How It Works</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทำงานอย่างไร</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <h3 className="text-lg font-semibold">โฟกัสความร้อนที่จุดเดียวใต้ผิว</h3>
              <p className="mt-2 text-sm text-ink-muted">คลื่นอัลตราซาวด์โฟกัสไปรวมที่จุดเดียวใต้ผิว เกิดความร้อนเฉพาะจุดจนเนื้อเยื่อหดตัว <strong className="font-semibold text-ink">โดยไม่ทำลายผิวชั้นบน</strong></p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <h3 className="text-lg font-semibold">ลงลึกถึงชั้น SMAS</h3>
              <p className="mt-2 text-sm text-ink-muted">ยิงได้ถึงชั้น <strong className="font-semibold text-ink">SMAS</strong> ซึ่งเป็นชั้นเดียวกับที่ศัลยแพทย์ดึงในการผ่าตัดดึงหน้า โดยไม่ต้องผ่าตัดและไม่มีแผล</p>
            </div>
            <div className="rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line">
              <h3 className="text-lg font-semibold">กระตุ้นคอลลาเจนใหม่ต่อเนื่อง</h3>
              <p className="mt-2 text-sm text-ink-muted">จุดความร้อนกระตุ้นกระบวนการซ่อมแซมของร่างกาย ให้สร้างคอลลาเจนและอีลาสตินใหม่อย่างต่อเนื่องหลังทำ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHO IS IT FOR ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">For You</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เหมาะกับใคร / ดูแลปัญหาใดได้บ้าง</h2>
            <ul className="mt-6 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผิวหน้าหย่อนคล้อย แก้มตก กรอบหน้าไม่ชัด
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                หางคิ้วตก เปลือกตาบนดูหนัก
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                เหนียง ผิวใต้คางและลำคอหย่อน
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ริ้วรอยบริเวณหน้าอกส่วนบน (décolletage)
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                ผู้ที่ยังไม่ต้องการผ่าตัดดึงหน้า แต่ต้องการดูแลความหย่อนคล้อย
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">* ความเหมาะสมและแนวทางการดูแลขึ้นอยู่กับการประเมินของแพทย์เป็นรายบุคคล</p>
          </div>
          <div>
            <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ปรึกษาแพทย์เพื่อประเมินความเหมาะสมก่อนทำ Ulthera" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          </div>
        </div>
      </section>

      {/* ============ PROTOCOL / RESULTS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Protocol</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">จำนวนครั้ง ผลลัพธ์ และการพักฟื้น</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
              <h3 className="mt-4 font-semibold">จำนวนครั้ง</h3>
              <p className="mt-1.5 text-sm text-ink-muted">โดยทั่วไปทำครั้งเดียวต่อคอร์ส</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              <h3 className="mt-4 font-semibold">ผลลัพธ์</h3>
              <p className="mt-1.5 text-sm text-ink-muted">เห็นการกระชับบางส่วนตั้งแต่ช่วงแรก คอลลาเจนสร้างใหม่ต่อเนื่อง ผลชัดเจนขึ้นใน 2–3 เดือน</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>
              <h3 className="mt-4 font-semibold">ความคงอยู่</h3>
              <p className="mt-1.5 text-sm text-ink-muted">ข้อมูลผู้ผลิตระบุว่าผลลัพธ์บริเวณใบหน้าอยู่ได้ประมาณ 1 ปีขึ้นไป</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line">
              <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              <h3 className="mt-4 font-semibold">การพักฟื้น</h3>
              <p className="mt-1.5 text-sm text-ink-muted">ไม่ต้องพักฟื้น อาจมีรอยแดงหรือบวมเล็กน้อยชั่วคราวหลังทำ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATION / US FDA CLEARANCES ============ */}
      {/* TODO: ขอเลขที่ อย. ไทย + ยืนยันว่าเป็นรุ่น Ulthera legacy หรือ Ultherapy PRIME */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Certification</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">การรับรอง</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">ระบบ Ulthera<sup>®</sup> <strong className="font-semibold text-ink">ได้รับการรับรองจาก US FDA</strong> ในข้อบ่งใช้ต่อไปนี้</p>
        </div>
        <div className="overflow-x-auto rounded-2xl bg-surface shadow-soft ring-1 ring-line">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <caption className="sr-only">ตารางข้อบ่งใช้ที่ระบบ Ulthera ได้รับการรับรองจาก US FDA</caption>
            <thead>
              <tr className="border-b border-line bg-surface-alt">
                <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">ปี</th>
                <th scope="col" className="px-5 py-4 font-semibold">ข้อบ่งใช้</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr className="border-b border-line">
                <th scope="row" className="whitespace-nowrap px-5 py-4 font-medium text-ink">ก.ย. 2009</th>
                <td className="px-5 py-4">ยกกระชับคิ้ว (non-invasive brow lift)</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="whitespace-nowrap px-5 py-4 font-medium text-ink">ต.ค. 2012</th>
                <td className="px-5 py-4">ยกกระชับผิวบริเวณลำคอและใต้คาง</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="whitespace-nowrap px-5 py-4 font-medium text-ink">ธ.ค. 2013</th>
                <td className="px-5 py-4">การแสดงภาพอัลตราซาวด์ของชั้นผิวหนังแท้และชั้นใต้ผิวหนัง</td>
              </tr>
              <tr>
                <th scope="row" className="whitespace-nowrap px-5 py-4 font-medium text-ink">มิ.ย. 2014</th>
                <td className="px-5 py-4">ลดเลือนริ้วรอยบริเวณหน้าอกส่วนบน (décolletage)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-soft">การรับรองข้างต้นเป็นการรับรองของเครื่องมือแพทย์โดย US FDA (FDA cleared) ไม่ใช่การรับรองผลการรักษาของผู้รับบริการรายบุคคล</p>

        {/* ============ MEDICAL DISCLAIMER ============ */}
        <div className="mt-8 flex gap-4 rounded-2xl bg-surface-alt p-6 ring-1 ring-line">
          <svg className="mt-0.5 h-6 w-6 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/></svg>
          <div>
            <h3 className="font-semibold">ข้อควรทราบก่อนตัดสินใจ</h3>
            <p className="mt-1.5 text-sm text-ink-muted">
              <strong className="font-semibold text-ink">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</strong> ขึ้นกับสภาพผิว อายุ ระดับความหย่อนคล้อย และการดูแลตนเองหลังทำ
              ข้อมูลบนหน้านี้มีวัตถุประสงค์เพื่อให้ความรู้เบื้องต้นเท่านั้น ไม่ใช่คำวินิจฉัยหรือคำแนะนำทางการแพทย์เฉพาะบุคคล
              <strong className="font-semibold text-ink">ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการ</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">คำถามที่พบบ่อย</h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-3">
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                <span>Ulthera คืออะไร?</span>
                <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
              </button>
              <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
                Ulthera (Ultherapy<sup>®</sup> จาก Merz Aesthetics) คือเทคโนโลยียกกระชับผิวหน้าแบบไม่ผ่าตัด ใช้คลื่นอัลตราซาวด์แบบโฟกัสระดับไมโครส่งพลังงานความร้อนลงสู่ผิวชั้นลึกถึงชั้น SMAS เพื่อให้เนื้อเยื่อหดตัวและกระตุ้นการสร้างคอลลาเจนใหม่ โดยไม่ทำลายผิวชั้นบนและไม่มีแผล
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                <span>Ulthera ต่างจาก HIFU ทั่วไปอย่างไร?</span>
                <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
              </button>
              <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
                ความต่างทางเทคนิคคือ Ulthera <strong className="font-semibold text-ink">มีระบบภาพอัลตราซาวด์แบบเรียลไทม์</strong> ให้แพทย์เห็นชั้นผิวและเนื้อเยื่อใต้ผิวก่อนและระหว่างการยิง ซึ่งเครื่อง HIFU ทั่วไปไม่มี แพทย์จึงวางแผนตำแหน่งและความลึกได้ตรงกับกายวิภาคของคนไข้แต่ละราย — นี่คือที่มาของเทคนิค SPT (See–Plan–Treat)
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                <span>“ไลน์” คิดยังไง ต้องใช้กี่ไลน์?</span>
                <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
              </button>
              <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
                1 ไลน์ คือการกดปุ่มปล่อยพลังงาน 1 ครั้ง ซึ่งสร้างจุดความร้อนขนาดเล็กเรียงต่อกันเป็นแนวเส้น (ไม่ใช่ “ช็อต” แบบ HIFU ทั่วไป) ยิ่งจำนวนไลน์มาก ก็ยิ่งครอบคลุมพื้นที่ได้มากขึ้น จำนวนไลน์ที่เหมาะสมของแต่ละคนไม่เท่ากัน ขึ้นกับอายุ ขนาดใบหน้า และระดับความหย่อนคล้อย จึงต้องให้แพทย์เป็นผู้ประเมิน
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                <span>เจ็บไหม? ต้องพักฟื้นไหม?</span>
                <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
              </button>
              <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
                ระหว่างทำจะรู้สึกร้อนหรือจี๊ดเป็นจังหวะตามการปล่อยพลังงาน ความรู้สึกแตกต่างกันไปในแต่ละบุคคล หลังทำ<strong className="font-semibold text-ink">ไม่ต้องพักฟื้น</strong> กลับไปใช้ชีวิตตามปกติได้ อาจมีรอยแดงหรือบวมเล็กน้อยชั่วคราว แนะนำให้แจ้งแพทย์หากมีข้อกังวลหรือมีประวัติสุขภาพที่ควรระวัง
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <button data-accordion-trigger aria-expanded="false" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                <span>ผลอยู่ได้นานแค่ไหน?</span>
                <svg className="h-5 w-5 flex-none text-brand-700 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
              </button>
              <div className="hidden border-t border-line px-5 py-4 text-ink-muted">
                เห็นการกระชับบางส่วนตั้งแต่ช่วงแรก และคอลลาเจนจะถูกสร้างใหม่ต่อเนื่อง ทำให้ผลชัดเจนขึ้นในช่วง 2–3 เดือน ข้อมูลผู้ผลิตระบุว่าผลลัพธ์บริเวณใบหน้าอยู่ได้ประมาณ 1 ปีขึ้นไป ทั้งนี้ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล และผิวยังคงมีความเสื่อมตามวัยต่อไปตามธรรมชาติ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More in Face Lift</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการอื่นในหมวด FACE LIFT</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/emface" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/imagegen/service-emface.jpg" alt="EMFACE ยกกระชับใบหน้าโดยไม่ใช้เข็ม" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">EMFACE</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับใบหน้าโดยไม่ใช้เข็ม ดูแลทั้งผิวและกล้ามเนื้อ</p></div>
          </Link>
          <Link href="/mint-thread" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/imagegen/service-mint-thread.jpg" alt="ร้อยไหมปรับรูปหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">ร้อยไหมปรับรูปหน้า</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับเชิงโครงสร้าง เห็นการยกตั้งแต่วันที่ทำ</p></div>
          </Link>
          <Link href="/nc-neo" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="NC Neo ดูแลผิวหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold group-hover:text-brand-700">NC Neo</h3><p className="mt-1 text-sm text-ink-muted">โปรแกรมดูแลผิวหน้าให้ดูกระชับและเรียบเนียนขึ้น</p></div>
          </Link>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจ Ulthera? ปรึกษาทีมแพทย์ของเรา</h2>
          <p className="max-w-xl text-white/80">นัดหมายเพื่อให้แพทย์ประเมินชั้นผิวและวางแผนจำนวนไลน์ที่เหมาะกับคุณ ทีมงานพร้อมดูแลและให้คำปรึกษาแบบเฉพาะบุคคล</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
