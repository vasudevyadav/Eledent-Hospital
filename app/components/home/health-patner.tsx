"use client";

import Image from "next/image";
import type { JSX } from "react";

type FeatureItem = {
    title: string;
    desc: string;
    icon: JSX.Element;
};

type Align = "left" | "right";

type FeatureRowProps = FeatureItem & {
    align?: Align;
};

export default function HealthPatner(): JSX.Element {
    const leftItems: FeatureItem[] = [
        {
            title: "Whole-Body, Whole-Family\nCare",
            desc: "Nec tristique sed rutrum fringilla, it fringilla condimentum purus.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                        d="M8.5 10.2c1.3 0 2.3-1.05 2.3-2.35S9.8 5.5 8.5 5.5 6.2 6.55 6.2 7.85 7.2 10.2 8.5 10.2Zm7 0c1.3 0 2.3-1.05 2.3-2.35S16.8 5.5 15.5 5.5s-2.3 1.05-2.3 2.35 1 2.35 2.3 2.35Z"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                    />
                    <path
                        d="M3.8 18.2c.5-2.8 2.7-4.6 5.1-4.6h.1c2.5 0 4.7 1.8 5.2 4.6"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                    />
                    <path
                        d="M13.8 18.2c.4-2.3 2.2-3.9 4.4-3.9h.1c1.1 0 2.1.4 2.9 1.1"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            title: "Door-to-Door Service\nOptions",
            desc: "Nec tristique sed rutrum fringilla, it fringilla condimentum purus.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M7 10.5V20h10v-9.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                    <path
                        d="M5 11.5 12 5l7 6.5"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.2 20v-5.2c0-.9.7-1.6 1.6-1.6h.4c.9 0 1.6.7 1.6 1.6V20"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            title: "Transparent,\nWallet-Friendly Pricing",
            desc: "Nec tristique sed rutrum fringilla, it fringilla condimentum purus.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                        d="M7.5 9.2c0-2.1 1.8-3.7 4.5-3.7s4.5 1.6 4.5 3.7c0 2.4-2.1 3.2-4.5 3.7-2.4.5-4.5 1.3-4.5 3.7 0 2.1 1.8 3.7 4.5 3.7s4.5-1.6 4.5-3.7"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                    />
                    <path d="M12 4v16" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                </svg>
            ),
        },
    ];

    const rightItems: FeatureItem[] = [
        {
            title: "Hospital-Level Technology,\nBoutique Feel",
            desc: "Nec tristique sed rutrum fringilla, it fringilla condimentum purus.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                        d="M7 20V6.5c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5V20"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                    />
                    <path d="M9.3 9h5.4M9.3 12h5.4M9.3 15h5.4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                </svg>
            ),
        },
        {
            title: "Rapid Results, Proven\nOutcomes",
            desc: "Nec tristique sed rutrum fringilla, it fringilla condimentum purus.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                        d="M7 12l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 21a9 9 0 1 0-9-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                </svg>
            ),
        },
        {
            title: "Compassion Centred\nCulture",
            desc: "Nec tristique sed rutrum fringilla, it fringilla condimentum purus.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                        d="M12 20s-7-4.5-7-10.2C5 7.1 6.7 5.5 9 5.5c1.4 0 2.6.7 3 1.8.4-1.1 1.6-1.8 3-1.8 2.3 0 4 1.6 4 4.3C19 15.5 12 20 12 20Z"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-[22px] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                    {/* soft blobs */}
                    <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
                    <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

                    <div className="relative px-6 py-12 sm:px-10">
                        {/* heading */}
                        <div className="text-center">
                            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400">WHY CHOOSE US</p>
                            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                                The Health Partner You&apos;ve Been Looking For
                            </h2>
                        </div>

                        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-3">


                            <div className="space-y-8">
                                {rightItems.map((it, idx) => (
                                    <FeatureRow key={`r-${idx}`} {...it} align="right" />
                                ))}
                            </div>
                            <div className="relative mx-auto w-full max-w-[360px]">
                                <div className="relative mx-auto aspect-[3/4] w-[260px] sm:w-[300px]">
                                    <Image
                                        src="/home/Special-1.png"
                                        alt="Doctor"
                                        fill
                                        sizes="(max-width: 640px) 260px, 300px"
                                        className="rounded-2xl object-cover"
                                        priority
                                    />
                                </div>

                                {/* faint stethoscope stroke */}
                                <svg
                                    className="pointer-events-none absolute -right-10 top-10 hidden h-[420px] w-[420px] opacity-10 lg:block"
                                    viewBox="0 0 500 500"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M330 70c30 40 20 120-20 150-25 18-50 7-68-10-30-28-55-18-55 20 0 40 40 90 95 112 50 20 78 55 78 95"
                                        stroke="#0f172a"
                                        strokeWidth={8}
                                        strokeLinecap="round"
                                    />
                                    <circle cx="405" cy="440" r="26" stroke="#0f172a" strokeWidth={8} />
                                </svg>
                            </div>

                            <div className="space-y-8">
                                {leftItems.map((it, idx) => (
                                    <FeatureRow key={`l-${idx}`} {...it} align="left" />
                                ))}
                            </div>
                        </div>

                        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-28 w-[520px] -translate-x-1/2 rounded-[26px] bg-sky-100/60 blur-sm" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureRow({ title, desc, icon, align = "left" }: FeatureRowProps): JSX.Element {
    const isRight = align === "right";

    return (
        <div className={`flex items-start gap-4 ${isRight ? "lg:flex-row-reverse lg:text-right" : ""}`}>
            <div className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f47200] text-white shadow-[0_10px_25px_-18px_rgba(244,114,0,0.9)]">
                {icon}
            </div>

            <div className={isRight ? "lg:pr-1" : "lg:pl-1"}>
                <h3 className="whitespace-pre-line text-[15px] font-semibold leading-snug text-slate-900">{title}</h3>
                <p className="mt-2 max-w-[260px] text-[12.5px] leading-relaxed text-slate-500 lg:max-w-[280px]">{desc}</p>
            </div>
        </div>
    );
}
