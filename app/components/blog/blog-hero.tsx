"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Clock } from "lucide-react";

const heroData = {
  title: " Blog",
  subtitle: "        Tincidunt suspendisse semper integer elementum maecenas.",
  bannerImage: "/blog/blog-banner.png",
  bannerImageAlt: "Dental implants banner",
  overlayLinkHref: "/services/dental-implants",
  phoneLabel: "Need a Dental Service?",
  phoneNumber: "+91 99838 68366",
  hoursLabel: "Visiting Hours",
  visitingHours: "Mon - Sun 9 AM to 9 PM",
  ctaText: "Book An Appointment",
  ctaHref: "/contact",
};

export default function BlogHero() {
  return (
    <div className="lg:my-12 my-6 lg:mx-24 mx-4 lg:mt-40 mt-36 ">
      <div className="mx-auto w-full max-w-7xl pb-16 ">
        <section className="relative lg:h-[400px] h-[270px] w-full overflow-visible rounded-3xl md:h-[420px] py-10 lg:py-0">
          <Image
            src={heroData.bannerImage}
            alt={heroData.bannerImageAlt}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-4xl md:text-5xl font-semibold">
              {heroData.title}
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl">
              {heroData.subtitle}
            </p>
          </div>

          <Link
            href={heroData.overlayLinkHref || "#"}
            aria-label="Open service"
            className="absolute inset-0 z-10"
          />

          <div className="absolute lg:-bottom-8 -bottom-20 left-1/2 z-30 w-full -translate-x-1/2 px-4">
            <div className="mx-auto lg:flex w-full max-w-4xl items-center justify-between gap-5 rounded-xl bg-[#484847]/95 px-10 py-6 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3 lg:mb-0 mb-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500">
                  <PhoneCall
                    className="h-7 w-7 text-[#2f2f2f]"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="leading-tight">
                  <p className="mb-1.5 text-sm text-white/70">
                    {heroData.phoneLabel}
                  </p>
                  <p className="text-sm font-semibold text-white md:text-lg">
                    {heroData.phoneNumber}
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/15 md:block" />

              <div className="hidden items-center gap-3 md:flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500">
                  <Clock
                    className="h-8 w-8 text-[#2f2f2f]"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="leading-tight">
                  <p className="mb-1.5 text-sm text-white/70">
                    {heroData.hoursLabel}
                  </p>
                  <p className="text-sm font-semibold text-white md:text-lg">
                    {heroData.visitingHours}
                  </p>
                </div>
              </div>

              <Link
                href={heroData.ctaHref}
                className="rounded-md bg-orange-500 px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:brightness-95"
              >
                {heroData.ctaText}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}