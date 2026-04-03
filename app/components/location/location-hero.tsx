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

const locationDetails: Record<
  string,
  {
    phoneNumber: string;
    visitingHours: string;
  }
> = {
  kondapur: {
    phoneNumber: "077996 39994",
    visitingHours: " Mon - Sun  9 AM to 8 PM",
  },
  kukatpally: {
    phoneNumber: "090598 90578",
    visitingHours: " Mon - Sun  9 AM to 9 PM",
  },
  manikonda: {
    phoneNumber: "077996 59994",
    visitingHours: " Mon - Sun  10 AM to 8 PM",
  },
  "banjara-hills": {
    phoneNumber: "077996 49994",
    visitingHours: " Mon - Sun  9:30 AM to 9 PM",
  },
  kompally: {
    phoneNumber: "077997 69994",
    visitingHours: " Mon - Sun  9 AM to 9 PM",
  },
};

export default function LocationHero({
  city,
  subtitle = "Tincidunt suspendisse semper integer elementum maecenas.",
  bannerSrc = "/location/location-main.png",
  phoneLabel = "Need a Dental Service?",
  hoursLabel = "Visiting Hours",
  ctaText = "Book Appointment",
}: LocationHeroProps) {
  const { openModal } = useAppointmentModal();
  const params = useParams();

  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const normalizedSlug = typeof slug === "string" ? slug.toLowerCase() : "";

  const locationInfo = locationDetails[normalizedSlug] || {
    phoneNumber: "+91 7799619994",
    visitingHours: "Mon - Sun 9 AM to 9 PM",
  };

  return (
    <div className="lg:my-12 my-6 lg:mx-24 mx-4 lg:mt-40 mt-36 rounded">
      <div className="mx-auto w-full max-w-7xl pb-24 lg:pb-16">
        <section className="group relative z-0 lg:h-[440px] h-[330px] w-full overflow-visible">
          <Image
            src={bannerSrc}
            alt={`${city} banner`}
            fill
            priority
            className="object-cover transition lg:rounded-3xl rounded-2xl"
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-4xl md:text-5xl font-semibold transition duration-300 group-hover:-translate-y-1">
              {city}
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl transition duration-300 group-hover:text-white">
              {subtitle}
            </p>
          </div>

          <div className="absolute lg:-bottom-8 -bottom-36 left-1/2 z-30 w-full -translate-x-1/2 px-4">
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