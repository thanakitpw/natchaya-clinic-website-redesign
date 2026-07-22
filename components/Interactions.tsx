"use client";

// Ports the prototype's assets/ui.js 1:1 into a single client component.
// Behaviour is identical — same [data-*] hooks, same delegated listeners — so the
// server-rendered markup from every page/component stays plain and framework-free.
// Renders nothing; it only wires up interactions.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type SliderEl = HTMLElement & { _idx?: number };

function goToSlide(slider: SliderEl, i: number) {
  const track = slider.querySelector<HTMLElement>("[data-slider-track]");
  const slides = slider.querySelectorAll("[data-slide]");
  const dots = slider.querySelectorAll("[data-slide-dot]");
  if (!track || !slides.length) return;
  const n = slides.length;
  const idx = ((i % n) + n) % n;
  slider._idx = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle("is-active", j === idx));
}

export default function Interactions() {
  const pathname = usePathname();

  // Delegated click + scroll handlers — installed once, they read the DOM live.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;

      // Hero slider controls
      const sprev = target.closest("[data-slide-prev]");
      const snext = target.closest("[data-slide-next]");
      const sdot = target.closest("[data-slide-dot]");
      if (sprev || snext || sdot) {
        const slider = (sprev || snext || sdot)!.closest("[data-slider]") as SliderEl | null;
        if (slider) {
          if (sdot) {
            const dots = [...slider.querySelectorAll("[data-slide-dot]")];
            goToSlide(slider, dots.indexOf(sdot));
          } else {
            goToSlide(slider, (slider._idx || 0) + (snext ? 1 : -1));
          }
        }
      }

      // Mobile nav toggle
      const navBtn = target.closest("[data-nav-toggle]");
      if (navBtn) document.querySelector("[data-nav-menu]")?.classList.toggle("hidden");

      // Floating "back to top" button
      if (target.closest("[data-scroll-top]")) window.scrollTo({ top: 0, behavior: "smooth" });

      // Floating contact speed-dial (open/close)
      const fab = document.querySelector("[data-fab]");
      if (fab) {
        const toggle = target.closest("[data-fab-toggle]");
        if (toggle && fab.contains(toggle)) {
          const open = fab.classList.toggle("is-open");
          toggle.setAttribute("aria-expanded", String(open));
        } else if (!target.closest("[data-fab]")) {
          fab.classList.remove("is-open");
          fab.querySelector("[data-fab-toggle]")?.setAttribute("aria-expanded", "false");
        }
      }

      // Accordion (FAQ)
      const acc = target.closest("[data-accordion-trigger]");
      if (acc) {
        const panel = acc.nextElementSibling;
        panel?.classList.toggle("hidden");
        acc.setAttribute("aria-expanded", String(!!panel && !panel.classList.contains("hidden")));
      }

      // Carousel arrows
      const cprev = target.closest("[data-carousel-prev]");
      const cnext = target.closest("[data-carousel-next]");
      if (cprev || cnext) {
        const wrap = (cprev || cnext)!.closest("[data-carousel]");
        const track = wrap?.querySelector<HTMLElement>("[data-carousel-track]");
        if (track) track.scrollBy({ left: (cnext ? 1 : -1) * Math.round(track.clientWidth * 0.85), behavior: "smooth" });
      }

      // Tabs (review / video filters)
      const tab = target.closest("[data-tab]");
      if (tab) {
        const group = tab.closest("[data-tabs]");
        if (group) {
          const key = tab.getAttribute("data-tab");
          group.querySelectorAll("[data-tab]").forEach((b) => {
            const on = b === tab;
            b.classList.toggle("is-active", on);
            b.setAttribute("aria-selected", String(on));
          });
          group.querySelectorAll("[data-panel]").forEach((p) => {
            p.classList.toggle("hidden", p.getAttribute("data-panel") !== key);
          });
        }
      }
    };

    const onScroll = () => {
      const past = window.scrollY > 300;

      const el = document.querySelector("[data-sticky-cta]");
      if (el) {
        el.classList.toggle("translate-y-0", past);
        el.classList.toggle("translate-y-full", !past);
      }

      const top = document.querySelector("[data-scroll-top]");
      if (top) {
        top.classList.toggle("opacity-0", !past);
        top.classList.toggle("translate-y-2", !past);
        top.classList.toggle("pointer-events-none", !past);
      }
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Slider init + autoplay — re-run after every client-side navigation so a slider
  // on a freshly mounted page still initialises.
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<SliderEl>("[data-slider]").forEach((slider) => {
      goToSlide(slider, 0);
      const delay = parseInt(slider.getAttribute("data-slider-autoplay") || "0", 10);
      if (delay > 0) {
        let timer = window.setInterval(() => goToSlide(slider, (slider._idx || 0) + 1), delay);
        const enter = () => window.clearInterval(timer);
        const leave = () => {
          window.clearInterval(timer);
          timer = window.setInterval(() => goToSlide(slider, (slider._idx || 0) + 1), delay);
        };
        slider.addEventListener("mouseenter", enter);
        slider.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          window.clearInterval(timer);
          slider.removeEventListener("mouseenter", enter);
          slider.removeEventListener("mouseleave", leave);
        });
      }
    });
    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
