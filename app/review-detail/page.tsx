import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เปลี่ยนตาเศร้าให้เป็นตาสองชั้นด้วยเลเซอร์ | รีวิว | ณัฐชญา คลินิก Natchaya Clinic",
  description: "รีวิวทำตา 2 ชั้น ด้วย Plexr Plasma Laser ที่ณัฐชญาคลินิก — แก้ปัญหาหนังตาเกิน หนังตาตก กระชับหนังตาให้ตึงขึ้นโดยไม่ต้องผ่าตัด พร้อมภาพหลังทำ 1 วัน และ 7 วัน",
};

export default function ReviewDetailPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span>{" "}
            <Link href="/review" className="hover:text-brand-700">รีวิว</Link> <span className="px-1">/</span>{" "}
            <span className="text-ink">ทำตาสองชั้นด้วยเลเซอร์</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Customer Review</p>
          <h1 className="mt-2 max-w-3xl text-2xl font-bold sm:text-3xl md:text-4xl">เปลี่ยนตาเศร้าให้เป็นตาสองชั้นสวยคมโตด้วยเลเซอร์ ที่ณัฐชญาคลินิก</h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">หมวด: ตาสองชั้น</span>
            <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 font-medium text-ink-muted ring-1 ring-line">Plexr Plasma Laser</span>
          </div>
        </div>
      </section>

      {/* ============ REVIEW CONTENT ============ */}
      <section className="mx-auto max-w-content px-4 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT: images */}
          <div>
            <figure className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/720x540/f2eed9/7f6f1d?text=Plexr+Plasma+Laser" alt="รีวิวทำตาสองชั้นด้วย Plexr Plasma Laser ที่ณัฐชญาคลินิก" width="720" height="540" className="aspect-[4/3] w-full object-cover" />
            </figure>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Before &amp; After</p>
            <h2 className="mt-1 text-xl font-bold sm:text-2xl">ภาพเปรียบเทียบก่อน — หลังทำ</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <figure className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/480x480/e8eaf0/5b6173?text=Before" alt="ก่อนทำ — หนังตาเกิน หนังตาตก" loading="lazy" width="480" height="480" className="aspect-square w-full object-cover" />
                <figcaption className="px-4 py-3 text-center text-sm font-medium text-ink">ก่อนทำ</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/480x480/f2eed9/7f6f1d?text=After" alt="หลังทำ 1 วัน" loading="lazy" width="480" height="480" className="aspect-square w-full object-cover" />
                <figcaption className="px-4 py-3 text-center text-sm font-medium text-ink">หลังทำ 1 วัน</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/480x480/f2eed9/7f6f1d?text=After" alt="หลังทำ 7 วัน" loading="lazy" width="480" height="480" className="aspect-square w-full object-cover" />
                <figcaption className="px-4 py-3 text-center text-sm font-medium text-ink">หลังทำ 7 วัน</figcaption>
              </figure>
            </div>
          </div>

          {/* RIGHT: testimonial */}
          <div>
            <div className="rounded-2xl bg-surface p-6 shadow-soft ring-1 ring-line sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">รีวิวจากลูกค้า</p>
              <h2 className="mt-1 text-xl font-bold sm:text-2xl">รีวิวทำตา 2 ชั้น ด้วย Plexr Plasma Laser</h2>
              <div className="mt-5 space-y-4 text-ink-muted">
                <p>รีวิวทำตา 2 ชั้น ด้วย Plexr Plasma Laser ช่วยแก้ปัญหาหนังตาเกิน หนังตาตก กระชับหนังตาให้ตึงขึ้น โดยไม่ต้องผ่าตัด</p>
                <p><span className="font-semibold text-ink">ภาพหลังทำ 1 วัน</span> ตาดูโตและมีสะเก็ดแผลเริ่มเด่นชัดขึ้นกว่าเดิมค่ะ แต่สะเก็ดจะค่อยๆ หลุดออกไปเองภายใน 7 วันค่ะ</p>
                <p><span className="font-semibold text-ink">ภาพหลังทำ 7 วัน</span> สะเก็ดแผลได้หลุดออกหมด ชั้นตาตกลงมาเล็กน้อยกว่าตอนหลังทำ 1 วัน หลังจากทำแล้ว ตาดูโตขึ้น เห็นแววตาสดใสชัดเจนขึ้น</p>
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-300">
              <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/></svg>
              <div>
                <p className="font-semibold text-brand-700">ผลการรักษาขึ้นอยู่กับเฉพาะบุคคล</p>
                <p className="mt-1 text-sm text-ink-muted">ผลลัพธ์ที่ได้อาจแตกต่างกันไปในแต่ละบุคคล ขึ้นอยู่กับสภาพผิวและการดูแลหลังทำ ควรปรึกษาแพทย์เพื่อประเมินก่อนเข้ารับบริการ</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-line_green px-6 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาทำตาสองชั้นทาง LINE</a>
              <Link href="/review" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-brand-300 px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">ดูรีวิวทั้งหมด</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED REVIEWS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More Reviews</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">รีวิวอื่นๆ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/review" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/480x360/f2eed9/7f6f1d?text=Tummy+Lipo" alt="รีวิวดูดไขมันท้อง" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold transition group-hover:text-brand-700">ดูดไขมันท้อง</h3>
                <p className="mt-1 text-sm text-ink-muted">ภาพก่อน/หลังทำ ลดไขมันหน้าท้องให้กระชับ</p>
              </div>
            </Link>
            <Link href="/review" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/480x360/faf8f0/7f6f1d?text=Arm+Lipo" alt="รีวิวดูดไขมันแขน" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold transition group-hover:text-brand-700">ดูดไขมันแขน</h3>
                <p className="mt-1 text-sm text-ink-muted">ดูดไขมันแขน หลังทำ 2 เดือน แขนเรียวกระชับ</p>
              </div>
            </Link>
            <Link href="/review" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/480x360/f2eed9/7f6f1d?text=Calf+Reduction" alt="รีวิวลดน่อง" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold transition group-hover:text-brand-700">ลดน่อง</h3>
                <p className="mt-1 text-sm text-ink-muted">ลดน่อง ปรับรูปขาให้เรียวสวยได้สัดส่วน</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจทำตาสองชั้นด้วยเลเซอร์?</h2>
          <p className="max-w-xl text-white/80">ปรึกษาทีมแพทย์เฉพาะทางของณัฐชญาคลินิก ประเมินปัญหาหนังตาแบบเฉพาะบุคคล นัดหมายหรือสอบถามได้เลย</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
