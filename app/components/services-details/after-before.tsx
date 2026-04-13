"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { JSX, PointerEvent } from "react";
import type { BeforeAfterSection, BeforeAfterItem } from "@/data/serviceDetails";

type Props = {
  data?: BeforeAfterSection;
};

export default function AfterBefore({ data }: Props): JSX.Element | null {
  if (!data) return null;

  return (
    <section className="w-full bg-white pb-10">
      <div className="mx-auto max-w-7xl lg:px-6 px-4">
        <div className="mt-10">
          <div className="lg:rounded-[20px] rounded-2xl bg-[#f3f4f6] lg:px-8 px-4 lg:py-16 py-6 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.15)]">
            <div className="mb-8 text-center">
              <h2 className="lg:text-3xl text-2xl font-bold text-primary">{data.heading}</h2>
              <p className="mt-1 lg:text-xl font-semibold text-black">{data.subheading}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.items.map((item, idx) => (
                <BeforeAfterCard key={idx} item={item} cardHeightClass={(data as any).cardHeightClass} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Before & After Card */
function BeforeAfterCard({
  item,
  cardHeightClass = " h-68 lg:h-80",
}: {
  item: BeforeAfterItem;
  cardHeightClass?: string;
}): JSX.Element {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const clamp = (n: number) => Math.min(100, Math.max(0, n));

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(pct));
  };

  const onHandlePointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onHandlePointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    if (!btn.hasPointerCapture(e.pointerId)) return;
    setFromClientX(e.clientX);
  };

  const onHandlePointerUp = (e: PointerEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    if (btn.hasPointerCapture(e.pointerId)) btn.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden rounded-2xl bg-white shadow-md ${cardHeightClass}`}
      aria-label={`Before and After${item.alt ? `: ${item.alt}` : ""}`}
    >
      {/* BEFORE */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={item.beforeSrc}
          alt={item.alt ? `Before - ${item.alt}` : "Before"}
          fill
             unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* AFTER */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        aria-hidden="true"
      >
        <Image
          src={item.afterSrc}
          alt={item.alt ? `After - ${item.alt}` : "After"}
          fill
             unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <div className="h-full w-[2px] bg-white/90" />
      </div>

      {/* Drag handle */}
      <div
        className="absolute top-1/2"
        style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
      >
        <button
          type="button"
          aria-label="Drag to compare before and after"
          onPointerDown={onHandlePointerDown}
          onPointerMove={onHandlePointerMove}
          onPointerUp={onHandlePointerUp}
          onPointerCancel={onHandlePointerUp}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#facc15] shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
          style={{ touchAction: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111827"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M10 8l-4 4 4 4" />
            <path d="M14 8l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}