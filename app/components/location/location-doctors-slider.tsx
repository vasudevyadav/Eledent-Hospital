"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { DoctorListItem } from "@/lib/doctors-api";

function ChevronLeft() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

type Props = {
    doctors: DoctorListItem[];
    branchDisplayName: string;
};

export default function LocationDoctorsSlider({ doctors, branchDisplayName }: Props) {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "prev" | "next") => {
        const el = trackRef.current;
        if (!el) return;
        const firstCard = el.firstElementChild as HTMLElement | null;
        const gap = 24;
        const cardW = firstCard ? firstCard.getBoundingClientRect().width + gap : 300;
        el.scrollBy({ left: dir === "next" ? cardW : -cardW, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                    <div>
                        <span className="inline-flex bg-[#f47200] px-3 py-1.5 text-sm font-semibold tracking-[0.14em] text-white">
                            Expert Team
                        </span>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                            Doctors at {branchDisplayName}
                        </h2>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-xl">
                            Meet the specialists dedicated to your dental health at our {branchDisplayName} branch.
                        </p>
                    </div>

                    {doctors.length > 1 && (
                        <div className="flex gap-3">
                            <button
                                onClick={() => scroll("prev")}
                                aria-label="Previous doctors"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm hover:border-[#f47200] hover:text-[#f47200] transition-colors"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                onClick={() => scroll("next")}
                                aria-label="Next doctors"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm hover:border-[#f47200] hover:text-[#f47200] transition-colors"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}
                </div>

                {/* Slider track */}
                <div
                    ref={trackRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {doctors.map((doctor, idx) => {
                        const initials = doctor.name
                            .replace("Dr. ", "")
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2);

                        return (
                            <Link
                                key={idx}
                                href={`/doctors/${doctor.slug}`}
                                className="group snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-60 w-full bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
                                    {doctor.image ? (
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-5xl font-bold text-orange-300">{initials}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {doctor.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-[#f47200] font-semibold uppercase tracking-wide">
                                        {doctor.post}
                                    </p>
                                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#f47200] shrink-0" />
                                        {doctor.education} · {doctor.post}
                                    </div>
                                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#f47200] group-hover:gap-2 transition-all">
                                        View Profile
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View all */}
                <div className="mt-8 text-center">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#f47200] hover:underline underline-offset-4"
                    >
                        View All Doctors
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}
