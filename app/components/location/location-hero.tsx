"use client";

import Image from "next/image";
import { PhoneCall, Clock } from "lucide-react";
import { useParams } from "next/navigation";
import { useAppointmentModal } from "@/app/context/AppointmentModalContext";

type LocationHeroProps = {
  city: string;
  subtitle?: string;
  bannerSrc?: string;
  phoneLabel?: string;
  hoursLabel?: string;
  ctaText?: string;
};

const FALLBACK_BANNER =
  "https://cms.eledenthospitals.com/wp-content/uploads/2026/03/atraumatic-4.jpg";

const locationDetails: Record<
  string,
  {
    phoneNumber: string;
    visitingHours: string;
  }
> = {
  kondapur: {
    phoneNumber: "77996 39994",
    visitingHours: "Mon - Sun 9 AM to 8 PM",
  },
  kukatpally: {
    phoneNumber: "90598 90578",
    visitingHours: "Mon - Sun 9 AM to 9 PM",
  },
  manikonda: {
    phoneNumber: "77996 59994",
    visitingHours: "Mon - Sun 10 AM to 8 PM",
  },
  "banjara-hills": {
    phoneNumber: "77996 49994",
    visitingHours: "Mon - Sun 9:30 AM to 9 PM",
  },
  kompally: {
    phoneNumber: "77997 69994",
    visitingHours: "Mon - Sun 9 AM to 9 PM",
  },
};

function normalizeLocationSlug(slug: string): string {
  const cleanSlug = slug.toLowerCase().trim();

  if (locationDetails[cleanSlug]) return cleanSlug;

  if (cleanSlug.includes("kondapur")) return "kondapur";
  if (cleanSlug.includes("kukatpally")) return "kukatpally";
  if (cleanSlug.includes("manikonda")) return "manikonda";
  if (cleanSlug.includes("banjara-hills")) return "banjara-hills";
  if (cleanSlug.includes("kompally")) return "kompally";

  return "";
}

export default function LocationHero({
  city,
  subtitle = "Expert dental care with advanced technology and specialist doctors.",
  bannerSrc,
  phoneLabel = "Need a Dental Service?",
  hoursLabel = "Visiting Hours",
  ctaText = "Book Appointment",
}: LocationHeroProps) {
  const { openModal } = useAppointmentModal();
  const params = useParams();

  const rawSlug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const normalizedSlug =
    typeof rawSlug === "string" ? normalizeLocationSlug(rawSlug) : "";

  const locationInfo = locationDetails[normalizedSlug] || {
    phoneNumber: "+91 7799619994",
    visitingHours: "Mon - Sun 9 AM to 9 PM",
  };

  const finalBannerSrc =
    typeof bannerSrc === "string" && bannerSrc.trim() !== ""
      ? bannerSrc.trim()
      : FALLBACK_BANNER;

  return (
    <div className="mx-4 my-6 mt-36 rounded lg:mx-24 lg:my-12 lg:mt-40">
      <div className="mx-auto w-full max-w-7xl pb-24 lg:pb-16">
        <section className="group relative z-0 h-[330px] w-full overflow-visible lg:h-[440px]">
          <Image
            src={finalBannerSrc}
            alt={`${city} banner`}
            fill
            unoptimized
            priority
            className="rounded-2xl object-cover object-center transition lg:rounded-3xl"
          />

          <div className="absolute inset-0 rounded-2xl bg-black/35 lg:rounded-3xl" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-semibold text-white transition duration-300 group-hover:-translate-y-1 md:text-5xl">
              {city}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 transition duration-300 group-hover:text-white md:text-base">
              {subtitle}
            </p>
          </div>

          <div className="absolute left-1/2 z-30 w-full -translate-x-1/2 px-4 lg:-bottom-8 -bottom-36">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 rounded-xl bg-[#484847]/95 px-6 py-5 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500 transition duration-300 hover:scale-105">
                  <PhoneCall
                    className="h-7 w-7 text-[#2f2f2f]"
                    strokeWidth={2.5}
                  />
                </div>

                <div className="leading-tight">
                  <p className="mb-1.5 text-sm text-white/70">{phoneLabel}</p>
                  <a
                    href={`tel:${locationInfo.phoneNumber.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-white transition hover:text-orange-400 md:text-lg"
                  >
                    {locationInfo.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/15 lg:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500 transition duration-300 hover:scale-105">
                  <Clock
                    className="h-7 w-7 text-[#2f2f2f]"
                    strokeWidth={2.5}
                  />
                </div>

                <div className="leading-tight">
                  <p className="mb-1.5 text-sm text-white/70">{hoursLabel}</p>
                  <p className="text-sm font-semibold text-white md:text-lg">
                    {locationInfo.visitingHours}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}