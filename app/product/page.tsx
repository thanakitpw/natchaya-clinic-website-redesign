import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ผลิตภัณฑ์ของณัฐชญา | ณัฐชญา คลินิก Natchaya Clinic",
  description: "ผลิตภัณฑ์ของณัฐชญา คลินิก — เซรั่มบำรุงผิวหน้า ผลิตภัณฑ์รักษาสิว และอาหารเสริม คัดสรรคุณภาพ ดูแลผิวสวยสุขภาพดีจากภายในสู่ภายนอก",
};

export default function ProductPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <span className="text-ink">ผลิตภัณฑ์</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Our Products</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">ผลิตภัณฑ์ของณัฐชญา</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">
            ผลิตภัณฑ์ดูแลผิวและอาหารเสริมที่คัดสรรคุณภาพจากณัฐชญา คลินิก ทั้งเซรั่มบำรุงผิวหน้า
            ผลิตภัณฑ์ดูแลปัญหาสิว และอาหารเสริม เพื่อความสวยสุขภาพดีจากภายในสู่ภายนอก
          </p>
        </div>
      </section>

      {/* ============ FACE CARE ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Face Care</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ผลิตภัณฑ์บำรุงผิวหน้า</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Hi-E serum 30 g. */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-serum-generic.jpg" alt="Hi-E serum 30 g." width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Hi-E serum 30 g.</h3>
              <p className="mt-2 text-sm text-ink-muted">ครีมบำรุงผิวที่อุดมไปด้วยคุณสมบัติเด่นของวิตามินอี Tocotrienol ซึ่งมีประสิทธิภาพสูงกว่า</p>
              <p className="mt-4 text-brand-700 font-semibold">900.-</p>
            </div>
          </article>
          {/* Hi-E Serum 15g. */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-serum-generic.jpg" alt="Hi - E Serum 15g." width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Hi - E Serum 15g.</h3>
              <p className="mt-2 text-sm text-ink-muted">ครีมบำรุงผิวที่อุดมไปด้วยคุณสมบัติเด่นของวิตามินอี</p>
              <p className="mt-4 text-brand-700 font-semibold">480.-</p>
            </div>
          </article>
          {/* Antioxidant Serum */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-serum-generic.jpg" alt="Antioxidant Serum 10 cc" width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Antioxidant Serum 10 cc</h3>
              <p className="mt-2 text-sm text-ink-muted">เซรั่มบำรุงผิว นวัตกรรมสารต่อต้านอนุมูลอิสระ ช่วยกำจัดอนุมูลอิสระได้มากกว่าวิตามินซี 125 เท่า</p>
              <p className="mt-4 text-brand-700 font-semibold">1,290.-</p>
            </div>
          </article>
        </div>
      </section>

      {/* ============ ACNE CARE ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Acne Care</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ผลิตภัณฑรักษาสิว</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Acne cleaning Gel 130 g. */}
            <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <Image src="/assets/generated/imagegen/product-cleanser-generic.jpg" alt="Acne cleaning Gel ขนาด 130 g." width={480} height={360} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">Acne cleaning Gel ขนาด 130 g.</h3>
                <p className="mt-2 text-sm text-ink-muted">เจลใสล้างหน้า สำหรับผู้มีปัญหาเรื่องสิวและผิวหน้ามัน</p>
                <p className="mt-4 text-brand-700 font-semibold">320.-</p>
              </div>
            </article>
            {/* Acne cleaning Gel 60 g. */}
            <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <Image src="/assets/generated/imagegen/product-cleanser-generic.jpg" alt="Acne cleaning Gel ขนาด 60 g." width={480} height={360} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">Acne cleaning Gel ขนาด 60 g.</h3>
                <p className="mt-2 text-sm text-ink-muted">เจลใสล้างหน้า สำหรับผู้มีปัญหาเรื่องสิวและผิวหน้ามัน</p>
                <p className="mt-4 text-brand-700 font-semibold">169.-</p>
              </div>
            </article>
            {/* Acne Solution Cleansing Mousse */}
            <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <Image src="/assets/generated/imagegen/product-cleanser-generic.jpg" alt="Acne Solution Cleansing Mousse 50 ml." width={480} height={360} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">Acne Solution Cleansing Mousse 50 ml.</h3>
                <p className="mt-2 text-sm text-ink-muted">โฟมล้างหน้าสูตร Non-inonic. pH Balance เนื้อเนียนนุ่ม</p>
                <p className="mt-4 text-brand-700 font-semibold">240.-</p>
              </div>
            </article>
            {/* Sensitive Cleansing Gel */}
            <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
              <Image src="/assets/generated/imagegen/product-cleanser-generic.jpg" alt="Sensitive Cleansing Gel 50 g." width={480} height={360} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">Sensitive Cleansing Gel 50 g.</h3>
                <p className="mt-2 text-sm text-ink-muted">ผลิตภัณฑ์เจลล้างหน้าสูตรอ่อนโยน ช่วยปรับสภาพผิว</p>
                <p className="mt-4 text-brand-700 font-semibold">169.-</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ SUPPLEMENTS ============ */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Supplements</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">อาหารเสริม</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Olizen */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-supplement-generic.jpg" alt="Olizen" width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Olizen</h3>
              <p className="mt-2 text-sm text-ink-muted">อาหารเสริม ลดฝ้า ช่วยปรับสภาพผิวให้ขาวกระจ่างใส ช่วยให้พื้นที่ ที่เป็นฝ้าลดลง</p>
              <p className="mt-4 text-brand-700 font-semibold">3,500.-</p>
            </div>
          </article>
          {/* Notty */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-supplement-generic.jpg" alt="Notty" width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Notty</h3>
              <p className="mt-2 text-sm text-ink-muted">ผลิตภัณฑ์อาหารเสริมสารสกัดจากชาเชียว, สารสกัดจากพริก, แอล-คาร์นิทีนและสารสกัดจากธรรมชาติ</p>
              <p className="mt-4 text-brand-700 font-semibold">1,890.-</p>
            </div>
          </article>
          {/* Organic life plus */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-supplement-generic.jpg" alt="Organic life plus" width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Organic life plus</h3>
              <p className="mt-2 text-sm text-ink-muted">อาหารเสริมลดนํ้าหนัก Organic Life Plus slim</p>
              <p className="mt-4 text-brand-700 font-semibold">1,890.-</p>
            </div>
          </article>
          {/* Gutty (BEST PRODUCT) */}
          <article className="relative overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-400 px-2.5 py-1 text-xs font-medium text-ink">BEST PRODUCT</span>
            <Image src="/assets/generated/imagegen/product-supplement-generic.jpg" alt="Gutty" width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Gutty</h3>
              <p className="mt-2 text-sm text-ink-muted">นวัตกรรมใหม่ ที่ใช้ในการปกป้องผิวจากการทำลายของแสงแดดและมลภาวะ</p>
              <p className="mt-4 text-brand-700 font-semibold">2,890.-</p>
            </div>
          </article>
          {/* Yarpun */}
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <Image src="/assets/generated/imagegen/product-supplement-generic.jpg" alt="ญาปัญ (Yarpun)" width={480} height={360} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">ญาปัญ (Yarpun)</h3>
              <p className="mt-2 text-sm text-ink-muted">ญาปัญ, Yarpun</p>
              <p className="mt-4 text-brand-700 font-semibold">สอบถามราคา</p>
            </div>
          </article>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">สนใจสั่งซื้อหรือสอบถามผลิตภัณฑ์</h2>
          <p className="max-w-xl text-white/80">ทักแชทสอบถามรายละเอียด ราคา และวิธีใช้ผลิตภัณฑ์ ทีมงานพร้อมดูแลและให้คำปรึกษาทาง LINE</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">สั่งซื้อ/สอบถามทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
