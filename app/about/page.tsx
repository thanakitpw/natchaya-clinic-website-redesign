import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | ณัฐชญา คลินิก Natchaya Clinic",
  description:
    "เกี่ยวกับ ณัฐชญา คลินิก — Beauty's in Good Hands คลินิกเสริมความงาม ดูแลโดยทีมแพทย์เฉพาะทาง ด้วยมาตรฐานวิชาการและความใส่ใจในความปลอดภัย",
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <span className="text-ink">เกี่ยวกับเรา</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">About Us</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">เกี่ยวกับ ณัฐชญา คลินิก</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">Beauty’s in Good Hands — ความงามที่อยู่ในมือที่คุณมั่นใจ</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div><Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="บรรยากาศ ณัฐชญา คลินิก" width={720} height={540} className="w-full rounded-2xl object-cover shadow-soft-lg" /></div>
          <div>
            <p className="text-lg font-semibold text-brand-700">“Beauty’s in Good Hands”</p>
            <p className="mt-3 text-ink-muted">
              คือปรัชญาในการทำงานของณัฐชญาคลีนิค ความเชี่ยวชาญที่จริงใจและใส่ใจในทุกรายละเอียดของความงาม
              พร้อมมาตรฐานการทำงานที่ถูกต้องตามหลักวิชาการ เพื่อความพึงพอใจและปลอดภัยอย่างสูงสุดของลูกค้า
              เป็นสิ่งที่ณัฐชญาคลีนิคและทีมงานให้ความสำคัญเป็นลำดับแรก
            </p>
            <p className="mt-3 text-ink-muted">
              เรามีทีมแพทย์เฉพาะทางและบุคลากรผู้มีประสบการณ์ ดูแลตั้งแต่การตรวจวิเคราะห์ปัญหาและความต้องการ
              แบบเฉพาะตัวบุคคล ผสมผสานองค์ความรู้ด้านวิทยาการและเครื่องมือที่ทันสมัย ไม่ใช่แค่ Body Center
              ที่ดูแลรูปร่างและผิวพรรณภายนอก แต่ยังดูแลให้คุณสวยสุขภาพดีจากภายใน ด้วยศาสตร์ เทคโนโลยี
              และนวัตกรรมด้าน Anti Aging ที่คัดสรรมาจากทุกมุมโลก
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-surface p-6 text-center shadow-soft ring-1 ring-line">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg></div>
              <h3 className="mt-4 font-semibold">มาตรฐานวิชาการ</h3>
              <p className="mt-2 text-sm text-ink-muted">ทำงานถูกต้องตามหลักการแพทย์ ปลอดภัยและใส่ใจทุกขั้นตอน</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 text-center shadow-soft ring-1 ring-line">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"/></svg></div>
              <h3 className="mt-4 font-semibold">ทีมแพทย์เฉพาะทาง</h3>
              <p className="mt-2 text-sm text-ink-muted">ดูแลแบบเฉพาะบุคคล ตั้งแต่วิเคราะห์ปัญหาจนถึงติดตามผล</p>
            </div>
            <div className="rounded-2xl bg-surface p-6 text-center shadow-soft ring-1 ring-line">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg></div>
              <h3 className="mt-4 font-semibold">ดูแลต่อเนื่อง</h3>
              <p className="mt-2 text-sm text-ink-muted">Beauty Care ดูแลความงามและสุขภาพจากภายใน</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Our Doctors</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทีมแพทย์เฉพาะทาง</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/doctors/doctor-thongpoj.png" alt="นพ. ทรงพจน์ ชัยมณี (หมอบอส)" width={720} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold">นพ. ทรงพจน์ ชัยมณี (หมอบอส)</h3><p className="mt-1 text-sm text-ink-muted">ศัลยแพทย์</p><p className="mt-1.5 text-xs font-medium tracking-wide text-brand-700">ใบประกอบวิชาชีพเวชกรรม ว.31668</p></div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/doctors/doctor-korn.png" alt="นพ. กรณ์ ลิมปกรณ์ (หมอกรณ์)" width={720} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold">นพ. กรณ์ ลิมปกรณ์ (หมอกรณ์)</h3><p className="mt-1.5 text-xs font-medium tracking-wide text-brand-700">ใบประกอบวิชาชีพเวชกรรม ว.28205</p></div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/doctors/doctor-natchaya.png" alt="พญ. ณัฐชญา ไมตรีเวช (หมอกุ๊กไก่)" width={720} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold">พญ. ณัฐชญา ไมตรีเวช (หมอกุ๊กไก่)</h3><p className="mt-1 text-sm text-ink-muted">แพทยศาสตรบัณฑิต (เกียรตินิยมอันดับ 1) คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น</p><p className="mt-1.5 text-xs font-medium tracking-wide text-brand-700">ใบประกอบวิชาชีพเวชกรรม ว.28198</p></div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/doctors/doctor-srisupha.png" alt="พญ. ศรีสุภา เลาห์ภากรณ์ (หมอติ๋ม)" width={720} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold">พญ. ศรีสุภา เลาห์ภากรณ์ (หมอติ๋ม)</h3><p className="mt-1.5 text-xs font-medium tracking-wide text-brand-700">ใบประกอบวิชาชีพเวชกรรม ว.28268</p></div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/doctors/doctor-orawinat.png" alt="พญ. อรวีณัฏฐ์ นิมิตรวงศ์สกุล (หมอหลี)" width={720} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold">พญ. อรวีณัฏฐ์ นิมิตรวงศ์สกุล (หมอหลี)</h3><p className="mt-1.5 text-xs font-medium tracking-wide text-brand-700">ใบประกอบวิชาชีพเวชกรรม ว.28301</p></div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/doctors/doctor-warataporn.png" alt="พญ. วรัทพร จันทร์ลลิต (หมอตาล)" width={720} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="font-semibold">พญ. วรัทพร จันทร์ลลิต (หมอตาล)</h3><p className="mt-1.5 text-xs font-medium tracking-wide text-brand-700">ใบประกอบวิชาชีพเวชกรรม ว.25906</p></div>
          </article>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">ปรึกษาทีมแพทย์ของเรา</h2>
          <p className="max-w-xl text-white/80">นัดหมายหรือสอบถามข้อมูลบริการ ทีมงานพร้อมดูแลและให้คำปรึกษา</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
