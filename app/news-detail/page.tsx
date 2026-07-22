import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR | ณัฐชญา คลินิก Natchaya Clinic",
  description:
    "บทสัมภาษณ์ นพ. ทรงพจน์ ชัยมณี (หมอบอส) ศัลยแพทย์ผู้เชี่ยวชาญด้านศัลยกรรม ณัฐชญา คลินิก ในนิตยสาร BAZAAR",
};

export default function NewsDetailPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <Link href="/blog" className="hover:text-brand-700">บทความ & ข่าวสาร</Link> <span className="px-1">/</span> <span className="text-ink">สัมภาษณ์คุณหมอบอส</span>
          </nav>
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">บทสัมภาษณ์ นพ. ทรงพจน์ ชัยมณี (หมอบอส) ศัลยแพทย์ผู้เชี่ยวชาญด้านศัลยกรรม ณัฐชญา คลินิก</p>
        </div>
      </section>

      {/* ============ ARTICLE ============ */}
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://placehold.co/960x600/f2eed9/7f6f1d?text=BAZAAR+Interview" alt="บทสัมภาษณ์ นพ. ทรงพจน์ ชัยมณี (หมอบอส) ในนิตยสาร BAZAAR" width="960" height="600" className="w-full rounded-2xl object-cover shadow-soft-lg" />
          <figcaption className="mt-3 text-center text-xs text-ink-soft">บทสัมภาษณ์ใน นิตยสาร BAZAAR — เนื้อหาต้นฉบับเป็นภาพ</figcaption>
        </figure>

        <div className="mt-10 space-y-5">
          <p className="leading-relaxed text-ink-muted">
            นิตยสาร BAZAAR ได้สัมภาษณ์ นพ. ทรงพจน์ ชัยมณี (หมอบอส) ศัลยแพทย์ผู้เชี่ยวชาญด้านศัลยกรรม
            หนึ่งในทีมแพทย์เฉพาะทางของ ณัฐชญา คลินิก
          </p>
          <p className="leading-relaxed text-ink-muted">
            ภายใต้ปรัชญาการทำงานของคลินิก “Beauty’s in Good Hands” ความเชี่ยวชาญที่จริงใจและใส่ใจในทุกรายละเอียดของความงาม
            พร้อมมาตรฐานการทำงานที่ถูกต้องตามหลักวิชาการ เพื่อความพึงพอใจและปลอดภัยอย่างสูงสุดของลูกค้า
          </p>
          <p className="leading-relaxed text-ink-muted">
            หมายเหตุ: เนื้อหาบทสัมภาษณ์ต้นฉบับนำเสนอในรูปแบบภาพถ่ายสกู๊ปนิตยสาร โปรดติดตามภาพสปรดเต็มได้ด้านล่าง
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://placehold.co/600x800/faf8f0/7f6f1d?text=BAZAAR+Spread+1" alt="ภาพสปรดนิตยสาร BAZAAR หน้า 1" loading="lazy" width="600" height="800" className="w-full rounded-2xl object-cover shadow-soft" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://placehold.co/600x800/f2eed9/7f6f1d?text=BAZAAR+Spread+2" alt="ภาพสปรดนิตยสาร BAZAAR หน้า 2" loading="lazy" width="600" height="800" className="w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </article>

      {/* ============ RELATED NEWS ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">News & Activity</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ข่าว & กิจกรรมอื่นๆ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/news-detail" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/480x300/f2eed9/7f6f1d?text=COSMOPOLITAN" alt="นิตยสาร COSMOPOLITAN" loading="lazy" className="aspect-[8/5] w-full object-cover" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
                <h3 className="mt-3 font-semibold transition group-hover:text-brand-700">นิตยสาร COSMOPOLITAN</h3>
                <p className="mt-1 text-sm text-ink-muted">ฟีเจอร์ ณัฐชญา คลินิก ในนิตยสาร COSMOPOLITAN</p>
              </div>
            </Link>
            <Link href="/news-detail" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/480x300/faf8f0/7f6f1d?text=Hello" alt="นิตยสาร Hello!" loading="lazy" className="aspect-[8/5] w-full object-cover" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
                <h3 className="mt-3 font-semibold transition group-hover:text-brand-700">นิตยสาร Hello!</h3>
                <p className="mt-1 text-sm text-ink-muted">ฟีเจอร์ ณัฐชญา คลินิก ในนิตยสาร Hello!</p>
              </div>
            </Link>
            <Link href="/news-detail" className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/480x300/f2eed9/7f6f1d?text=Private+Preview" alt="เปิดตัว ณัฐชญา คลินิก The Exclusive Private Preview" loading="lazy" className="aspect-[8/5] w-full object-cover" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">กิจกรรม</span>
                <h3 className="mt-3 font-semibold transition group-hover:text-brand-700">เปิดตัว ณัฐชญา คลินิก — The Exclusive Private Preview</h3>
                <p className="mt-1 text-sm text-ink-muted">งานเปิดตัว “The Exclusive Private Preview of Natchaya Clinic”</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
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
