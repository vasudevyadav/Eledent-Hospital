"use client";

import React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryItem = {
  src: string;
  alt: string;
};

function clampIndex(i: number, len: number) {
  return (i + len) % len;
}

export default function LocationGallery({ gallery }: { gallery: GalleryItem[] }) {
  const [active, setActive] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [paused, setPaused] = React.useState(false);

  // ✅ slug change / gallery change -> reset
  React.useEffect(() => {
    setActive(0);
    setOpen(false);
  }, [gallery]);

  if (!gallery || gallery.length === 0) return null;

  const close = () => setOpen(false);

  const prev = React.useCallback(
    () => setActive((p) => clampIndex(p - 1, gallery.length)),
    [gallery.length]
  );

  const next = React.useCallback(
    () => setActive((p) => clampIndex(p + 1, gallery.length)),
    [gallery.length]
  );

  // ✅ autoplay
  React.useEffect(() => {
    if (open || paused) return;
    if (gallery.length <= 1) return;

    const t = window.setInterval(() => {
      setActive((p) => clampIndex(p + 1, gallery.length));
    }, 3000);

    return () => window.clearInterval(t);
  }, [open, paused, gallery.length]);

  const leftIndex = clampIndex(active - 1, gallery.length);
  const rightIndex = clampIndex(active + 1, gallery.length);

  const cards = [
    { idx: leftIndex, position: "left" as const },
    { idx: active, position: "center" as const },
    { idx: rightIndex, position: "right" as const },
  ];

  const openAt = (idx: number) => {
    setActive(idx);
    setOpen(true);
  };

  // ESC close + keyboard arrows (modal)
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, prev, next]);

  // lock scroll when modal open
  React.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="py-8 sm:py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-[20px] sm:text-[22px] md:text-[28px] font-semibold text-[#f36d00]">
            See Our Gallery
          </h2>

          {/* Slider */}
          <div
            className="relative mt-8 sm:mt-10 flex items-center justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-10">
              {cards.map(({ idx, position }) => {
                const item = gallery[idx];

                const sizeClasses =
                  position === "center"
                    ? "w-[86vw] max-w-[360px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[370px] md:h-[350px]"
                    : "hidden md:block md:w-[300px] md:h-[280px]";

                const styleClasses =
                  position === "center"
                    ? "shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    : "shadow-[0_12px_28px_rgba(15,23,42,0.12)] opacity-95";

                return (
                  <button
                    key={`${position}-${idx}`}
                    type="button"
                    onClick={() => openAt(idx)}
                    className={[
                      "relative rounded-[14px] overflow-hidden bg-white",
                      "transition-all duration-300",
                      sizeClasses,
                      styleClasses,
                      position === "center" ? "scale-[1.01]" : "scale-100",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35",
                    ].join(" ")}
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 370px"
                      priority={false}
                    />

                    <span className="pointer-events-none absolute right-2 top-2 h-[6px] w-[6px] rounded-full bg-black/35" />
                    <span className="pointer-events-none absolute right-4 top-2 h-[6px] w-[6px] rounded-full bg-black/15" />
                  </button>
                );
              })}
            </div>

            {/* ✅ Mobile arrows */}
            {gallery.length > 1 && (
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-900 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-900 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Dots */}
          {gallery.length > 1 && (
            <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full transition-all",
                    i === active ? "bg-[#f36d00]" : "bg-black/25",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35",
                  ].join(" ")}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-[2px] flex items-center justify-center px-3 sm:px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-12 right-0 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-900 shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35"
            >
              <X className="h-5 w-5" />
            </button>

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-12 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-900 shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-12 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-900 shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/35"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1000px"
                priority
              />
            </div>

            <div className="mt-4 text-center text-sm text-white/90">
              {active + 1} / {gallery.length}
            </div>

            {gallery.length > 1 && (
              <div className="mt-3 flex items-center justify-center gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={`m-${i}`}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Open image ${i + 1}`}
                    className={[
                      "h-2 w-2 rounded-full transition-all",
                      i === active ? "bg-[#f36d00]" : "bg-white/35",
                    ].join(" ")}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}