import Link from "next/link";
import Image from "next/image";
import InfluencerReviews from "@/components/InfluencerReviews";

export default function HomePage() {
  return (
    <main>
      {/* ============ HERO SLIDER — image only (text baked into each image) ============
           Desktop artwork 3:1 · Mobile 4:5. <picture> swaps the file at 767px (art direction,
           which next/image can't express) so the hero stays a plain <picture>/<img>. */}
      <section data-slider data-slider-autoplay="6500" className="relative overflow-hidden bg-surface-alt">
        <div data-slider-track className="flex transition-transform duration-500 ease-out">
          <div data-slide className="w-full shrink-0">
            <picture>
              <source media="(max-width: 767px)" srcSet="/assets/hero-1-mobile.jpg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/hero-1.jpg" alt="บรรยากาศการให้บริการของ ณัฐชญา คลินิก" className="aspect-[4/5] w-full object-cover md:aspect-[3/1]" />
            </picture>
          </div>
          <div data-slide className="w-full shrink-0">
            <picture>
              <source media="(max-width: 767px)" srcSet="/assets/hero-2-mobile.jpg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/hero-2.jpg" alt="ห้องหัตถการของ ณัฐชญา คลินิก" className="aspect-[4/5] w-full object-cover md:aspect-[3/1]" />
            </picture>
          </div>
          <div data-slide className="w-full shrink-0">
            <picture>
              <source media="(max-width: 767px)" srcSet="/assets/hero-3-mobile.jpg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/hero-3.jpg" alt="ทีมแพทย์ของ ณัฐชญา คลินิก" className="aspect-[4/5] w-full object-cover md:aspect-[3/1]" />
            </picture>
          </div>
        </div>

        <button data-slide-prev className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-ink shadow-soft backdrop-blur transition hover:bg-white md:flex" aria-label="สไลด์ก่อนหน้า">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/></svg>
        </button>
        <button data-slide-next className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-ink shadow-soft backdrop-blur transition hover:bg-white md:flex" aria-label="สไลด์ถัดไป">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>
        </button>
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          <button data-slide-dot className="h-2 w-7 rounded-full bg-brand-400 transition" aria-label="สไลด์ 1"><span className="sr-only">สไลด์ 1</span></button>
          <button data-slide-dot className="h-2 w-2 rounded-full bg-ink/25 transition" aria-label="สไลด์ 2"><span className="sr-only">สไลด์ 2</span></button>
          <button data-slide-dot className="h-2 w-2 rounded-full bg-ink/25 transition" aria-label="สไลด์ 3"><span className="sr-only">สไลด์ 3</span></button>
        </div>
      </section>

      <div className="relative z-20 mx-auto mt-6 max-w-content px-4">
        <div className="grid gap-3 rounded-2xl bg-surface p-3 shadow-soft-lg ring-1 ring-line sm:grid-cols-4">
          <a href="#before-after" className="flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink/90">รีวิวก่อน-หลัง</a>
          <a href="#videos" className="flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink/90">วิดีโอรีวิว</a>
          <Link href="/blog" className="flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink/90">บทความ</Link>
          <a href="#contact" className="flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-brand-400 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-500">จองคิว</a>
        </div>
      </div>

      <section id="reviews" className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Popular Reviews</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">รีวิวหัตถการยอดนิยมของ ณัฐชญา</h2>
          <p className="mt-3 text-sm text-ink-muted">จัดวางแบบ gallery ตาม reference ให้ลูกค้าเห็นหมวดรีวิวชัดตั้งแต่หน้าแรก</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          <Link href="/review" className="group"><Image src="/assets/generated/real/real-review-liposuction-person.jpg" alt="รีวิวดูดไขมัน" width={560} height={700} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft ring-1 ring-line transition duration-300 group-hover:-translate-y-1" /><p className="mt-3 text-center text-sm font-semibold">ดูดไขมัน</p></Link>
          <Link href="/review" className="group"><Image src="/assets/generated/real/real-review-nose.jpg" alt="รีวิวศัลยกรรมจมูก" width={1448} height={1086} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft ring-1 ring-line transition duration-300 group-hover:-translate-y-1" /><p className="mt-3 text-center text-sm font-semibold">ศัลยกรรมเสริมจมูก</p></Link>
          <Link href="/review" className="group"><Image src="/assets/generated/real/real-review-eyelid.jpg" alt="รีวิวตาสองชั้น" width={1448} height={1086} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft ring-1 ring-line transition duration-300 group-hover:-translate-y-1" /><p className="mt-3 text-center text-sm font-semibold">ทำตาสองชั้น</p></Link>
        </div>
        <p className="mt-7 text-center text-xs text-ink-soft">* ผลการรักษาขึ้นอยู่กับเฉพาะบุคคล</p>
      </section>

      <section id="before-after" className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Before &amp; After</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">รีวิวจริง — ดูดไขมันใต้คาง เก็บเหนียง กรอบหน้า V-Shape</h2>
          <p className="mt-3 text-sm text-ink-muted">เคสจริงหลังทำที่ ณัฐชญา คลินิก ใต้คางกระชับขึ้น กรอบหน้าคมชัด คอดูเรียวยาวอย่างเป็นธรรมชาติ</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <div className="grid grid-cols-2">
              <div className="relative">
                <Image src="/assets/reviews/chin-lipo-before-1.jpg" alt="ก่อนดูดไขมันใต้คาง มุมด้านข้าง" width={1476} height={1846} className="aspect-[4/5] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">ก่อน</span>
              </div>
              <div className="relative">
                <Image src="/assets/reviews/chin-lipo-after-1.jpg" alt="หลังดูดไขมันใต้คาง มุมด้านข้าง" width={590} height={738} className="aspect-[4/5] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-400 px-3 py-1 text-xs font-semibold text-ink">หลัง</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-ink-muted">ใต้คางเรียบขึ้น เส้นขากรรไกรชัด คอดูยาวเรียว</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <div className="grid grid-cols-2">
              <div className="relative">
                <Image src="/assets/reviews/chin-lipo-before-2.jpg" alt="ก่อนดูดไขมันใต้คาง มุมเฉียง" width={1372} height={1715} className="aspect-[4/5] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">ก่อน</span>
              </div>
              <div className="relative">
                <Image src="/assets/reviews/chin-lipo-after-2.jpg" alt="หลังดูดไขมันใต้คาง มุมเฉียง" width={667} height={834} className="aspect-[4/5] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-400 px-3 py-1 text-xs font-semibold text-ink">หลัง</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-ink-muted">กรอบหน้าเรียวเป็น V-Shape ดูสมส่วนเป็นธรรมชาติ</p>
            </div>
          </article>
        </div>
        <p className="mt-7 text-center text-xs text-ink-soft">* ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
      </section>

      <InfluencerReviews layout="carousel" viewAllHref="/review" />

      <section id="services" className="bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Services</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บริการของ ณัฐชญา</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Link href="/beautycare#body" className="group block rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line transition hover:-translate-y-1 hover:shadow-soft-lg">
              <Image src="/assets/generated/real/real-service-body.jpg" alt="BODY" width={1448} height={1086} className="aspect-[16/10] w-full rounded-xl object-cover" />
              <h3 className="mt-5 text-lg font-bold group-hover:text-brand-700">BODY</h3>
              <p className="mt-2 text-sm text-ink-muted">Evolve, RF, ดูดไขมันเฉพาะจุด ลดไขมันและกระชับสัดส่วน</p>
            </Link>
            <Link href="/beautycare#surgery" className="group block rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line transition hover:-translate-y-1 hover:shadow-soft-lg">
              <Image src="/assets/generated/real/real-service-surgery.jpg" alt="SURGERY" width={1448} height={1086} className="aspect-[16/10] w-full rounded-xl object-cover" />
              <h3 className="mt-5 text-lg font-bold group-hover:text-brand-700">SURGERY</h3>
              <p className="mt-2 text-sm text-ink-muted">ศัลยกรรมจมูก ตาสองชั้น เสริมหน้าอก ดึงหน้า โดยทีมแพทย์</p>
            </Link>
            <Link href="/beautycare#treatment-laser" className="group block rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line transition hover:-translate-y-1 hover:shadow-soft-lg">
              <Image src="/assets/generated/real/real-service-laser.jpg" alt="TREATMENT และ LASER" width={1448} height={1086} className="aspect-[16/10] w-full rounded-xl object-cover" />
              <h3 className="mt-5 text-lg font-bold group-hover:text-brand-700">TREATMENT &amp; LASER</h3>
              <p className="mt-2 text-sm text-ink-muted">Pico Enlighten, Dual Yellow, Ulthera ดูแลผิวและยกกระชับ</p>
            </Link>
            <Link href="/beautycare#facial-design" className="group block rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line transition hover:-translate-y-1 hover:shadow-soft-lg">
              <Image src="/assets/generated/real/real-service-facial.jpg" alt="FACIAL DESIGN" width={1448} height={1086} className="aspect-[16/10] w-full rounded-xl object-cover" />
              <h3 className="mt-5 text-lg font-bold group-hover:text-brand-700">FACIAL DESIGN</h3>
              <p className="mt-2 text-sm text-ink-muted">HA Filler, ร้อยไหมปรับรูปหน้า, Fat transfer เติมเต็มและออกแบบใบหน้า</p>
            </Link>
            <Link href="/beautycare#health-program" className="group block rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-line transition hover:-translate-y-1 hover:shadow-soft-lg">
              <Image src="/assets/generated/real/real-service-health.jpg" alt="HEALTH PROGRAM" width={1448} height={1086} className="aspect-[16/10] w-full rounded-xl object-cover" />
              <h3 className="mt-5 text-lg font-bold group-hover:text-brand-700">HEALTH PROGRAM</h3>
              <p className="mt-2 text-sm text-ink-muted">Chelation Therapy, Ondamed, EIS ดูแลสุขภาพจากภายใน</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="videos" className="bg-ink" data-tabs>
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Video Reviews</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">รวมคลิปวิดีโอรีวิว</h2>
          </div>
          <div className="mb-9 flex flex-wrap justify-center gap-2">
            <button data-tab="all" className="is-active rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="true">ทั้งหมด</button>
            <button data-tab="lipo" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">ดูดไขมัน</button>
            <button data-tab="eye" className="rounded-full px-4 py-1.5 text-sm font-medium transition" aria-selected="false">ตาสองชั้น</button>
          </div>

          <div data-panel="all" className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            <button className="group relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-white/10" aria-label="เล่นวิดีโอ ดูดไขมัน"><Image src="/assets/generated/real/real-video-review.jpg" alt="วิดีโอรีวิว ดูดไขมัน" width={941} height={1672} className="aspect-[9/16] w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/25"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-ink shadow-soft-lg transition group-hover:bg-brand-500"><svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span><span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white drop-shadow">ดูดไขมัน • ก่อน-หลัง</span></button>
            <button className="group relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-white/10" aria-label="เล่นวิดีโอ ตาสองชั้น"><Image src="/assets/generated/real/real-review-eyelid.jpg" alt="วิดีโอรีวิว ตาสองชั้น" width={1448} height={1086} className="aspect-[9/16] w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/25"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-ink shadow-soft-lg transition group-hover:bg-brand-500"><svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span><span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white drop-shadow">ทำตาสองชั้น</span></button>
            <button className="group relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-white/10" aria-label="เล่นวิดีโอ ร้อยไหมปรับรูปหน้า"><Image src="/assets/generated/real/real-video-thread.jpg" alt="วิดีโอรีวิว ร้อยไหมปรับรูปหน้า" width={941} height={1672} className="aspect-[9/16] w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/25"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-ink shadow-soft-lg transition group-hover:bg-brand-500"><svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span><span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white drop-shadow">ร้อยไหมปรับรูปหน้า</span></button>
          </div>
          <div data-panel="lipo" className="hidden grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            <button className="group relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-white/10" aria-label="เล่นวิดีโอ ดูดไขมัน"><Image src="/assets/generated/real/real-video-review.jpg" alt="วิดีโอรีวิว ดูดไขมัน 1" width={941} height={1672} className="aspect-[9/16] w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/25"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-ink"><svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span><span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white">ดูดไขมันหน้าท้อง</span></button>
            <button className="group relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-white/10" aria-label="เล่นวิดีโอ ดูดไขมันแขน"><Image src="/assets/generated/real/real-video-review.jpg" alt="วิดีโอรีวิว ดูดไขมันแขน" width={941} height={1672} className="aspect-[9/16] w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/25"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-ink"><svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span><span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white">ดูดไขมันแขน</span></button>
          </div>
          <div data-panel="eye" className="hidden grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            <button className="group relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-white/10" aria-label="เล่นวิดีโอ ตาสองชั้น"><Image src="/assets/generated/real/real-review-eyelid.jpg" alt="วิดีโอรีวิว ตาสองชั้น" width={1448} height={1086} className="aspect-[9/16] w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/25"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-ink"><svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span><span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white">เปลี่ยนตาเศร้าให้สดใส</span></button>
          </div>
        </div>
      </section>

      <section id="articles" className="mx-auto max-w-content px-4 py-16">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Articles</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">บทความน่ารู้</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg"><Image src="/assets/generated/real/real-hero-clinic.jpg" alt="เปิดตัว ณัฐชญา คลินิก" width={1600} height={900} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" /><div className="p-5"><span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">กิจกรรม</span><h3 className="mt-3 text-base font-semibold leading-snug">เปิดตัว ณัฐชญา คลินิก The Exclusive Private Preview</h3></div></article>
          <article className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg"><Image src="/assets/generated/real/real-review-face.jpg" alt="สัมภาษณ์หมอบอส BAZAAR" width={1448} height={1086} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" /><div className="p-5"><span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">บทสัมภาษณ์</span><h3 className="mt-3 text-base font-semibold leading-snug">สัมภาษณ์คุณหมอบอส นิตยสาร BAZAAR</h3></div></article>
          <article className="group overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg"><Image src="/assets/generated/real/real-article-antiaging.jpg" alt="Energy Medicine" width={1586} height={992} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" /><div className="p-5"><span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">สุขภาพ</span><h3 className="mt-3 text-base font-semibold leading-snug">Energy Medicine วิทยาการชะลอวัย</h3></div></article>
        </div>
      </section>

      <section id="about" className="bg-surface-alt">
        <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-16 md:grid-cols-2">
          <Image src="/assets/generated/real/real-hero-clinic.jpg" alt="บรรยากาศ ณัฐชญา คลินิก" width={720} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">About Us</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ความงามที่อยู่ในมือที่คุณมั่นใจ</h2>
            <p className="mt-4 text-ink-muted">“Beauty’s in Good Hands” คือปรัชญาในการทำงานของณัฐชญาคลีนิค ความเชี่ยวชาญที่จริงใจ ใส่ใจในรายละเอียด และมาตรฐานการทำงานที่ถูกต้องตามหลักวิชาการ</p>
            <ul className="mt-6 grid gap-3 text-sm text-ink">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-400" aria-hidden="true">{" "}</span>พ.ญ. ณัฐชญา ไมตรีเวช (หมอกุ๊กไก่) — เกียรตินิยมอันดับ 1 ม.ขอนแก่น</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-400" aria-hidden="true">{" "}</span>นพ. ทรงพจน์ ชัยมณี (หมอบอส) — ศัลยแพทย์ผู้เชี่ยวชาญ</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-400" aria-hidden="true">{" "}</span>นพ. ศุภศิษฐ์ จิรวัฒโนทัย (หมอแอ็ด) — Plastic Surgeon</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
