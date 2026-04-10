"use client";

import React from "react";
import Image from "next/image";

type Variant = "dashed-teal" | "blue-frame";

export type TrustCardType = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  variant?: Variant;
};

function TrustCard({
  title,
  imageSrc,
  imageAlt,
  bullets,
  variant,
}: TrustCardType) {
  return (
    <div className="rounded-[18px] bg-white border border-slate-200 shadow-[0_12px_26px_rgba(15,23,42,0.10)] overflow-hidden">
      <div className="relative">
        <div className="relative h-[300px] w-full rounded-[14px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority={false}
          />

          {/* {variant === "dashed-teal" && (
            <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2">
              <div className="h-[150px] w-[150px] rounded-full border-[5px] border-dashed border-cyan-400/70 opacity-80" />
            </div>
          )}

          {variant === "blue-frame" && (
            <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-2 ring-sky-200/80" />
          )} */}
        </div>
      </div>

      <div className="px-6 pb-6 mt-5">
        <h3 className="lg:text-2xl text-xl font-semibold text-[#f36d00]">{title}</h3>

        <ul className="mt-4 space-y-3 text-sm leading-5 text-slate-600">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex gap-3 mb-4">
              <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-slate-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function LocationTrust({
  city,
  trustHeading,
  trustCards,
}: {
  city: string;
  trustHeading?: string; // optional custom heading
  trustCards: TrustCardType[];
}) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-[20px] lg:text-3xl font-bold text-[#f36d00]">
            {trustHeading ? (
              trustHeading
            ) : (
              <>
                Why Patients Trust Eledent Dental Hospital
                <br className="hidden sm:block" />
                in {city}?
              </>
            )}
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            {trustCards.map((card, idx) => (
              <TrustCard key={`${card.title}-${idx}`} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}