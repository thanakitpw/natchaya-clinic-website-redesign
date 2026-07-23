import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "บทความ & ข่าวสาร | ณัฐชญา คลินิก Natchaya Clinic",
  description: "รวมบทความน่ารู้ ข่าวสาร และกิจกรรมของ ณัฐชญา คลินิก (Natchaya Clinic) — บทสัมภาษณ์ในนิตยสาร ความรู้ด้านความงามและสุขภาพจากทีมแพทย์เฉพาะทาง",
};

export default function BlogPage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <span className="text-ink">บทความ &amp; ข่าวสาร</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Articles &amp; News</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">บทความ &amp; ข่าวสาร</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">รวมบทความน่ารู้ด้านความงามและสุขภาพ บทสัมภาษณ์ในนิตยสาร และกิจกรรมของ ณัฐชญา คลินิก โดยทีมแพทย์เฉพาะทาง</p>
        </div>
      </section>

      {/* ============ ARTICLE LISTING ============ */}
      <section className="mx-auto max-w-content px-4 py-14" data-tabs>
        {/* filter pills */}
        <div className="mb-9 flex flex-wrap justify-center gap-2">
          <button data-tab="all" className="is-active rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="true">ทั้งหมด</button>
          <button data-tab="interview" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">บทสัมภาษณ์</button>
          <button data-tab="activity" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">กิจกรรม</button>
          <button data-tab="health" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">สุขภาพ</button>
        </div>

        {/* PANEL: ทั้งหมด */}
        <div data-panel="all" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* เปิดตัว (activity) */}
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/clinic/lobby.jpg" alt="เปิดตัว ณัฐชญา คลินิก The Exclusive Private Preview" width={1600} height={1068} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">กิจกรรม</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">เปิดตัว ณัฐชญา คลินิก — The Exclusive Private Preview</h2>
              <p className="mt-1 text-sm text-ink-muted">งานเปิดตัว “The Exclusive Private Preview of Natchaya Clinic” คอสเมติกส์ เมดิคอล เซอร์วิส</p>
            </div>
          </Link>
          {/* BAZAAR (interview) */}
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-review-face.jpg" alt="สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR" width={1448} height={1086} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR</h2>
              <p className="mt-1 text-sm text-ink-muted">บทสัมภาษณ์ นพ. ทรงพจน์ ชัยมณี (หมอบอส) ศัลยแพทย์ผู้เชี่ยวชาญ ณัฐชญา คลินิก</p>
            </div>
          </Link>
          {/* Energy Medicine (health) */}
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-article-antiaging.jpg" alt="Energy Medicine วิทยาการชะลอวัย" width={1586} height={992} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">สุขภาพ</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">Energy Medicine วิทยาการชะลอวัย</h2>
              <p className="mt-1 text-sm text-ink-muted">คลื่นพลังงานบำบัด วิทยาการชะลอความชรา ปรับสมดุลการทำงานของร่างกาย เพื่อชีวิตที่ยืนยาวอย่างสุขภาพดี</p>
            </div>
          </Link>
          {/* COSMOPOLITAN (interview) */}
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://placehold.co/480x300/f2eed9/7f6f1d?text=COSMOPOLITAN" alt="นิตยสาร COSMOPOLITAN" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">นิตยสาร COSMOPOLITAN</h2>
              <p className="mt-1 text-sm text-ink-muted">ฟีเจอร์ ณัฐชญา คลินิก ในนิตยสาร COSMOPOLITAN</p>
            </div>
          </Link>
          {/* Hello! (interview) */}
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://placehold.co/480x300/faf8f0/7f6f1d?text=Hello" alt="นิตยสาร Hello!" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">นิตยสาร Hello!</h2>
              <p className="mt-1 text-sm text-ink-muted">ฟีเจอร์ ณัฐชญา คลินิก ในนิตยสาร Hello!</p>
            </div>
          </Link>
        </div>

        {/* PANEL: บทสัมภาษณ์ */}
        <div data-panel="interview" className="hidden grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-review-face.jpg" alt="สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR" width={1448} height={1086} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR</h2>
              <p className="mt-1 text-sm text-ink-muted">บทสัมภาษณ์ นพ. ทรงพจน์ ชัยมณี (หมอบอส) ศัลยแพทย์ผู้เชี่ยวชาญ ณัฐชญา คลินิก</p>
            </div>
          </Link>
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://placehold.co/480x300/f2eed9/7f6f1d?text=COSMOPOLITAN" alt="นิตยสาร COSMOPOLITAN" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">นิตยสาร COSMOPOLITAN</h2>
              <p className="mt-1 text-sm text-ink-muted">ฟีเจอร์ ณัฐชญา คลินิก ในนิตยสาร COSMOPOLITAN</p>
            </div>
          </Link>
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://placehold.co/480x300/faf8f0/7f6f1d?text=Hello" alt="นิตยสาร Hello!" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">บทสัมภาษณ์</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">นิตยสาร Hello!</h2>
              <p className="mt-1 text-sm text-ink-muted">ฟีเจอร์ ณัฐชญา คลินิก ในนิตยสาร Hello!</p>
            </div>
          </Link>
        </div>

        {/* PANEL: กิจกรรม */}
        <div data-panel="activity" className="hidden grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/clinic/lobby.jpg" alt="เปิดตัว ณัฐชญา คลินิก The Exclusive Private Preview" width={1600} height={1068} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">กิจกรรม</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">เปิดตัว ณัฐชญา คลินิก — The Exclusive Private Preview</h2>
              <p className="mt-1 text-sm text-ink-muted">งานเปิดตัว “The Exclusive Private Preview of Natchaya Clinic” คอสเมติกส์ เมดิคอล เซอร์วิส</p>
            </div>
          </Link>
        </div>

        {/* PANEL: สุขภาพ */}
        <div data-panel="health" className="hidden grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/news-detail" className="group block overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
            <Image src="/assets/generated/real/real-article-antiaging.jpg" alt="Energy Medicine วิทยาการชะลอวัย" width={1586} height={992} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300">สุขภาพ</span>
              <h2 className="mt-3 font-semibold leading-snug transition group-hover:text-brand-700">Energy Medicine วิทยาการชะลอวัย</h2>
              <p className="mt-1 text-sm text-ink-muted">คลื่นพลังงานบำบัด วิทยาการชะลอความชรา ปรับสมดุลการทำงานของร่างกาย เพื่อชีวิตที่ยืนยาวอย่างสุขภาพดี</p>
            </div>
          </Link>
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
