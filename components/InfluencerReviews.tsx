"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Influencer / celebrity visit photos at the clinic. Two layouts share one source list:
//  - "carousel": horizontal scroller for the home teaser (arrows via the global [data-carousel] handler)
//  - "grid": full masonry gallery for the /review page
// Click any photo → full-screen lightbox with keyboard + prev/next navigation.
type Photo = { src: string; w: number; h: number };

const PHOTOS: Photo[] = [
  { src: "/assets/influencers/influencer-01.jpg", w: 1108, h: 1477 },
  { src: "/assets/influencers/influencer-02.jpg", w: 1479, h: 1109 },
  { src: "/assets/influencers/influencer-03.jpg", w: 1078, h: 1520 },
  { src: "/assets/influencers/influencer-04.jpg", w: 1134, h: 1444 },
  { src: "/assets/influencers/influencer-05.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-06.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-07.jpg", w: 1109, h: 1479 },
  { src: "/assets/influencers/influencer-08.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-09.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-10.jpg", w: 1098, h: 1492 },
  { src: "/assets/influencers/influencer-11.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-12.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-13.jpg", w: 1110, h: 1474 },
  { src: "/assets/influencers/influencer-14.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-15.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-16.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-17.jpg", w: 1109, h: 1479 },
  { src: "/assets/influencers/influencer-18.jpg", w: 1108, h: 1478 },
  { src: "/assets/influencers/influencer-19.jpg", w: 1109, h: 1479 },
  { src: "/assets/influencers/influencer-20.jpg", w: 1108, h: 1477 },
  { src: "/assets/influencers/influencer-21.jpg", w: 1108, h: 1477 },
];

const ALT = "อินฟลูเอนเซอร์และคนดังที่มารีวิว ณัฐชญา คลินิก";

function ZoomIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.3-4.3M11 8v6M8 11h6M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export default function InfluencerReviews({
  layout,
  viewAllHref,
}: {
  layout: "carousel" | "grid";
  viewAllHref?: string;
}) {
  const items = layout === "carousel" ? PHOTOS.filter((p) => p.h >= p.w) : PHOTOS;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) => setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Keyboard nav + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, step]);

  const cardHover =
    "group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-soft ring-1 ring-line transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft-lg hover:ring-brand-300";
  const imgHover = "w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110";
  const overlay = (
    <>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 scale-90 items-center justify-center rounded-full bg-surface/85 text-ink opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" aria-hidden="true">
        <ZoomIcon />
      </span>
    </>
  );

  return (
    <section id="influencers" className="mx-auto max-w-content px-4 py-16">
      <div className="mb-9 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Real Reviews</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">อินฟลูเอนเซอร์ &amp; คนดัง ไว้วางใจ ณัฐชญา</h2>
        <p className="mt-3 text-sm text-ink-muted">คนดังและอินฟลูเอนเซอร์มากมายเลือกมาดูแลความงามกับทีมแพทย์ของเรา</p>
      </div>

      {layout === "carousel" ? (
        <div data-carousel className="relative">
          <div data-carousel-track className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2">
            {items.map((p, i) => (
              <button key={p.src} type="button" onClick={() => setOpenIndex(i)} aria-label="ขยายรูป" className={`w-48 shrink-0 snap-start sm:w-56 ${cardHover}`}>
                <Image src={p.src} alt={ALT} width={p.w} height={p.h} className={`aspect-[3/4] ${imgHover}`} />
                {overlay}
              </button>
            ))}
          </div>
          <button data-carousel-prev aria-label="ก่อนหน้า" className="absolute -left-2 top-[46%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-soft-lg ring-1 ring-line transition hover:bg-surface md:flex">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </button>
          <button data-carousel-next aria-label="ถัดไป" className="absolute -right-2 top-[46%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-soft-lg ring-1 ring-line transition hover:bg-surface md:flex">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </button>
          {viewAllHref && (
            <div className="mt-8 text-center">
              <Link href={viewAllHref} className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:bg-brand-500">
                ดูรีวิวทั้งหมด →
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="[column-gap:1rem] columns-2 sm:columns-3 lg:columns-4">
          {items.map((p, i) => (
            <button key={p.src} type="button" onClick={() => setOpenIndex(i)} aria-label="ขยายรูป" className={`mb-4 break-inside-avoid ${cardHover}`}>
              <Image src={p.src} alt={ALT} width={p.w} height={p.h} className={imgHover} />
              {overlay}
            </button>
          ))}
        </div>
      )}

      <p className="mt-7 text-center text-xs text-ink-soft">* ภาพบรรยากาศจริงที่ ณัฐชญา คลินิก</p>

      {isOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="รูปขยาย"
        >
          <button type="button" onClick={close} aria-label="ปิด" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="รูปก่อนหน้า" className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 sm:left-6">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </button>
          <Image
            src={items[openIndex].src}
            alt={ALT}
            width={items[openIndex].w}
            height={items[openIndex].h}
            sizes="92vw"
            onClick={(e) => e.stopPropagation()}
            className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-soft-lg"
          />
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="รูปถัดไป" className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 sm:right-6">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {openIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </section>
  );
}
