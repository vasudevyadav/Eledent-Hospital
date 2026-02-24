"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Clock } from "lucide-react";
import type { ServicesHeroSection } from "@/data/serviceDetails";

type Props = {
  data: ServicesHeroSection;
};

export default function ServicesHero({ data }: Props) {
  return (
    <div className="lg:my-12 my-6 px-4">
      <div className="mx-auto w-full max-w-6xl pb-16">
        <section className="relative lg:h-[400px] h-[270px] w-full overflow-visible rounded-3xl md:h-[420px] py-10 lg:py-0">
          <Image
            src={data.bannerImage}
            alt={data.bannerImageAlt}
            fill
            priority
            className="rounded-3xl object-cover"

          />

          <div className="absolute inset-0 rounded-3xl bg-black/35" />

          <div className="absolute lg:inset-0 z-20 flex flex-col items-center justify-center px-6 text-center lg:mb-10">
            <h1 className="text-2xl font-semibold leading-tight text-white lg:text-5xl">
              {data.title}
            </h1>

            <p className="mt-3 max-w-xl text-sm text-white/80 lg:text-base">
              {data.subtitle}
            </p>
          </div>

          <Link
            href={data.overlayLinkHref || "#"}
            aria-label="Open service"
            className="absolute inset-0 z-10"
          />

          <div className="absolute lg:-bottom-8 -bottom-20 left-1/2 z-30 w-full -translate-x-1/2 px-4">
            <div className="mx-auto lg:flex w-full max-w-4xl items-center justify-between gap-5 rounded-xl bg-[#484847]/95 px-10 py-6 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3 lg:mb-0 mb-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500">
                  <PhoneCall className="h-7 w-7 text-[#2f2f2f]" strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <p className="mb-1.5 text-sm text-white/70">{data.phoneLabel}</p>
                  <p className="text-sm font-semibold text-white md:text-lg">
                    {data.phoneNumber}
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/15 md:block" />

              <div className="hidden items-center gap-3 md:flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500">
                  <Clock className="h-8 w-8 text-[#2f2f2f]" strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <p className="mb-1.5 text-sm text-white/70">{data.hoursLabel}</p>
                  <p className="text-sm font-semibold text-white md:text-lg">
                    {data.visitingHours}
                  </p>
                </div>
              </div>

              <Link
                href={data.ctaHref}
                className="rounded-md bg-orange-500 px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:brightness-95"
              >
                {data.ctaText}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}