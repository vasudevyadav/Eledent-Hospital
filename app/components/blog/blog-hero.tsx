"use client";

import Image from "next/image";
import { PhoneCall, Clock } from "lucide-react";
import { useAppointmentModal } from "@/app/context/AppointmentModalContext";

type BlogHeroProps = {
  title?: string;
  subtitle?: string;
  bannerSrc?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  hoursLabel?: string;
  visitingHours?: string;
  ctaText?: string;
};

export default function BlogHero({
  title = "Blog",
  subtitle = "Tincidunt suspendisse semper integer elementum maecenas.",
  bannerSrc = "/blog/blog-banner.png",
  phoneLabel = "Need a Dental Service?",
  phoneNumber = "+91 99838 68366",
  hoursLabel = "Visiting Hours",
  visitingHours = "Mon - Sun 9 AM to 9 PM",
  ctaText = "Book Appointment",
}: BlogHeroProps) {
  const { openModal } = useAppointmentModal();

  return (
    <div className="lg:my-12 my-6 lg:mx-24 mx-4 lg:mt-40 mt-36 rounded">
      <div className="mx-auto w-full max-w-7xl pb-24 lg:pb-16">
        <section className="group relative z-0 lg:h-[440px] h-[330px] w-full overflow-visible">
          <Image
            src={bannerSrc}
            alt={`${title} banner`}
            fill
            priority
            className="object-cover transition lg:rounded-3xl rounded-2xl"
          />

          <div className="absolute inset-0 z-10 bg-black/30 lg:rounded-3xl rounded-2xl" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 mb-10 lg:mb-0">
            <h1 className="text-white text-4xl md:text-5xl font-semibold transition duration-300 group-hover:-translate-y-1">
              {title}
            </h1>
            {/* <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl transition duration-300 group-hover:text-white">
              {subtitle}
            </p> */}
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
                    href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-white transition hover:text-orange-400 md:text-lg"
                  >
                    {phoneNumber}
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
                    {visitingHours}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
              >
            Book Appointment
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}