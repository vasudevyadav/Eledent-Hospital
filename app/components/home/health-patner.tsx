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
            title: "Expertise in Dental Implants",
            desc: "Single-piece and two-piece implant solutions for faster, stronger, natural-looking tooth replacement. ",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
            title: "5 Multi-Speciality Dental Hospitals ",
            desc: "Kondapur, KPHB, Manikonda, Banjara Hills, and Kompally for easier access across Hyderabad.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
            title: "Patient-Focused Care",
            desc: "Clear diagnosis, personalised treatment planning, painless and comfortable dental care.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
            title: "Experienced Dental Specialists",
            desc: "Implantologists, orthodontists, endodontists, prosthodontists, pedodontists, periodontists, and oral surgeons under one roof.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
            title: "Advanced Technology",
            desc: "CBCT, intraoral scanners, CEREC CAD-CAM, Zoom whitening, and integrated implantology for precise treatment. ",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
            title: "Complete Dental Care",
            desc: "Restorative, cosmetic, orthodontic, and children’s dental care in one place.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
        <section className="w-full bg-white lg:pt-10 pt-4">
            <div className="mx-auto max-w-7xl lg:px-6 px-4">
                <div className="relative overflow-hidden rounded-t-[22px] border border-slate-100 bg-[#f9fbff] pt-10 lg:pb-5 pb-0">

                    <div className="relative px-6 py-0 sm:px-10">
                        <div className="text-center">

                            <p className=" w-fit mx-auto text-slate-400  lg:px-5 px-3 py-1 text-sm bg-[#f36d00] text-white font-semibold ">WHY CHOOSE US</p>
                            <h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-3xl">
                                Multi-Speciality Dental Hospital Backed by Specialists & Advanced Tech
                            </h2>
                        </div>

                        <div className="lg:mt-10 mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-3">


                            <div className="space-y-8 order-1">
                                {rightItems.map((it, idx) => (
                                    <FeatureRow key={`r-${idx}`} {...it} align="right" />
                                ))}
                            </div>
                            <div className="relative mx-auto w-full max-w-[360px] lg:order-2 order-3">
                                <div className="relative mx-auto aspect-[3/4] w-[260px] sm:w-[300px]">
                                    <Image
                                        src="/about-us/why-chose-doctor.png"
                                        alt="Doctor"
                                        fill
                                        className="rounded-2xl object-contain"
                                        priority
                                    />
                                </div>


                            </div>

                            <div className="space-y-8 lg:order-3 order-2">
                                {leftItems.map((it, idx) => (
                                    <FeatureRow key={`l-${idx}`} {...it} align="left" />
                                ))}
                            </div>
                        </div>

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
            <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f47200] text-white shadow-[0_10px_25px_-18px_rgba(244,114,0,0.9)]">
                {icon}
            </div>

            <div className={isRight ? "lg:pr-1" : "lg:pl-1"}>
                <h3 className="whitespace-pre-line text-sm font-semibold leading-snug text-slate-900">{title}</h3>
                <p className=" max-w-[260px] text-xs leading-relaxed font-medium text-slate-500 lg:max-w-[280px]">{desc}</p>
            </div>
        </div>
    );
}
