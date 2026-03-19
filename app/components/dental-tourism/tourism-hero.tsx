"use client";

import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAppointmentModal } from "@/app/context/AppointmentModalContext";

const heroData = {
    title: "Dental Tourism",
    subtitle: "Tincidunt suspendisse semper integer elementum maecenas.",
    bannerImage: "/dental-tourism/dental-tourism-banner.png",
    bannerImageAlt: "Dental Tourism banner",
    overlayLinkHref: "/",
    phoneLabel: "Need Dental Assistance?",
    phoneNumber: "+91 99838 68366",
    hoursLabel: "Visiting Hours",
    visitingHours: "Mon - Sun 9 AM to 9 PM",
    ctaText: "Book An Appointment",
    ctaHref: "/contact",
};

export default function TourismHero() {
    const { openModal } = useAppointmentModal();

    return (
        <div className="lg:my-12 my-6 lg:mx-24 mx-4 lg:mt-40 mt-36">
            <div className="mx-auto w-full max-w-7xl pb-20 lg:pb-16">
                <section className="relative z-0 h-[350px] w-full overflow-visible rounded-2xl lg:h-[440px] lg:rounded-3xl">
                    <Image
                        src={heroData.bannerImage}
                        alt={heroData.bannerImageAlt}
                        fill
                        priority
                        className="rounded-2xl object-cover lg:rounded-3xl"
                    />

                    <div className="absolute inset-0 rounded-2xl bg-black/20 lg:rounded-3xl" />

                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-4xl font-semibold text-white md:text-5xl">
                            {heroData.title}
                        </h1>
                        <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
                            {heroData.subtitle}
                        </p>
                    </div>

                    <Link
                        href={heroData.overlayLinkHref}
                        className="absolute inset-0 z-10"
                        aria-label="Go to page"
                    />

                    <div className="absolute -bottom-24 left-1/2 z-30 w-full -translate-x-1/2 px-4 lg:-bottom-8">
                        <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-5 rounded-xl bg-[#484847]/95 px-6 py-6 shadow-2xl backdrop-blur md:flex-row md:items-center md:px-10">
                            <div className="flex items-center gap-3">
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

                            <div className="flex items-center gap-3">
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

                            <button
                                type="button"
                                onClick={openModal}
                                className="rounded-md bg-orange-500 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:brightness-95"
                            >
                                {heroData.ctaText}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}