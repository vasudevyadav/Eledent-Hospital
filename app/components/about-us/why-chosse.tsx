"use client";

import Image from "next/image";
import type { JSX } from "react";

type FeatureItem = {
    title: string;
    desc: string;
    iconSrc: string;
    iconAlt?: string;
};

type FeatureRowProps = FeatureItem & {
    align?: "left" | "right";
};

type ValueItem = {
    title: string;
    desc: string;
    iconSrc: string;
    iconAlt?: string;
};

export default function WhyChoose(): JSX.Element {
    const leftItems: FeatureItem[] = [
        {
            title: "Experienced Dental Specialists",
            desc: "Implantologists, orthodontists, endodontists, prosthodontists, pedodontists, periodontists, and oral surgeons under one roof.",
            iconSrc: "/about-us/why-chose-1.png",
            iconAlt: "Consistent care icon",
        },
        {
            title: "Advanced Technology",
            desc: "CBCT, intraoral scanners, CEREC CAD-CAM, Zoom whitening, and integrated implantology for precise treatment. ",
            iconSrc: "/about-us/why-chose-2.png",
            iconAlt: "Expert dentist icon",
        },
        {
            title: "Complete Dental Care",
            desc: "Restorative, cosmetic, orthodontic, and children’s dental care in one place.",
            iconSrc: "/about-us/why-chose-3.png",
            iconAlt: "Flexible appointments icon",
        },
    ];

    const rightItems: FeatureItem[] = [
        {
            title: "Expertise in Dental Implants",
            desc: "Single-piece and two-piece implant solutions for faster, stronger, natural-looking tooth replacement. ",
            iconSrc: "/about-us/why-chose-4.png",
            iconAlt: "Technology icon",
        },
        {
            title: "5 Multi-Speciality Dental Hospitals ",
            desc: "Kondapur, KPHB, Manikonda, Banjara Hills, and Kompally for easier access across Hyderabad.",
            iconSrc: "/about-us/why-chose-5.png",
            iconAlt: "Emergency icon",
        },
        {
            title: "Patient-Focused Care",
            desc: "Clear diagnosis, personalised treatment planning, painless and comfortable dental care.",
            iconSrc: "/about-us/why-chose-6.png",
            iconAlt: "All under one roof icon",
        },
    ];

    const valueItems: ValueItem[] = [
        {
            title: "Honest Guidance",
            desc: "We recommend treatments based on your dental condition, not just to sell unnecessary procedures.",
            iconSrc: "/about-us/guidence.png",
            iconAlt: "Whole care icon",
        },
        {
            title: "Thoughtful Planning",
            desc: "Every dental treatment plan is explained clearly, step by step, before the process begins.",
            iconSrc: "/about-us/Thoughtful-Planning.png",
            iconAlt: "Advanced equipment icon",
        },
        {
            title: "Long-Term Focus",
            desc: "We plan care to improve function, comfort, and oral health over time.",
            iconSrc: "/about-us/long-term-focus.png",
            iconAlt: "Experienced doctors icon",
        },
        {
            title: "Consistent Experience",
            desc: "Every Eledent Dental Hospital location follows the same patient-first approach to care.",
            iconSrc: "/about-us/Consistent-Experience.png",
            iconAlt: "Sterile setup icon",
        },
    ];

    return (
        <section className="w-full bg-white py-3 pt-4 lg:pt-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">

                <div className="rounded-t-[22px] bg-[#e9eaeb] px-4 py-10 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] sm:px-8 lg:py-12 lg:pb-0">

                    <div className="text-center">
                        <span className="inline-flex bg-[#f47200] px-3 py-1.5 text-sm font-semibold tracking-[0.14em] text-white">
                            Why Choose Us?
                        </span>

                        <h2 className="mt-4 text-xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                            Multi-Speciality Dental Hospital Backed by Specialists & Advanced Tech
                        </h2>
                    </div>

                    <div className="mt-8 flex justify-center hidden">
                        <div className="relative h-[320px] w-[240px] sm:h-[380px] sm:w-[300px]">
                            <Image
                                src="/about-us/why-choose-us.png"
                                alt="Doctor"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-3 lg:items-center">
                        {/* LEFT */}
                        <div className="space-y-8 sm:space-y-9">
                            {leftItems.map((it, idx) => (
                                <FeatureRow key={`l-${idx}`} {...it} align="right" />
                            ))}
                        </div>

                        {/* DESKTOP CENTER IMAGE */}
                        <div className="relative mx-auto hidden w-full max-w-[420px] lg:block">
                            <div className="relative mx-auto h-[480px] w-[330px]">
                                <Image
                                    src="/about-us/why-choose-us.png"
                                    alt="Doctor"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-8 sm:space-y-9">
                            {rightItems.map((it, idx) => (
                                <FeatureRow key={`r-${idx}`} {...it} align="left" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= UNIQUE VALUE SECTION ================= */}
                <div className="mt-0 overflow-hidden rounded-b-[22px] shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* LEFT DARK CONTENT */}
                        <div className="flex h-full items-center justify-center bg-[#2a2a2a] px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-4">
                            <div className="text-center lg:text-left">
                                <p className="mb-2 text-lg text-orange-500 sm:text-xl">Our Value</p>
                                <h3 className="lg:text-2xl text-lg font-semibold leading-snug sm:text-3xl">
                                    The Principles Behind
                                    <br className="hidden sm:block" />
                                    Our Care
                                </h3>

                                <p className="mt-4 max-w-md text-xs leading-relaxed text-white sm:text-base">
                                    At Eledent Dental Hospital, we value trust, clarity, and responsibility in every patient interaction. We believe patients should understand their treatment, feel respected in the process, and receive care that is planned around their real dental needs, comfort, and long-term oral health.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT IMAGE + CARDS (FIXED: NO CUT-OFF) */}
                        <div className="relative bg-black/50">
                            <Image
                                src="/about-us/Our-Value.png"
                                alt="Dental Background"
                                fill
                                className="object-cover"
                            />

                            {/* Cards container in normal flow */}
                            <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-12">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:-translate-x-20">
                                    {valueItems.map((item, idx) => (
                                        <ValueCard key={idx} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function FeatureRow({
    title,
    desc,
    iconSrc,
    iconAlt,
    align = "left",
}: FeatureRowProps): JSX.Element {
    const isRight = align === "right";

    return (
        <div className={`flex items-start gap-4 ${isRight ? "lg:flex-row-reverse lg:text-right" : ""}`}>
            {/* ORANGE ICON CIRCLE */}
            <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f47200] text-white shadow-[0_12px_26px_-18px_rgba(244,114,0,0.95)]">
                <div className="relative h-7 w-7">
                    <Image
                        src={iconSrc}
                        alt={iconAlt || title}
                        fill
                        sizes="20px"
                        className="object-contain brightness-0 invert"
                    />
                </div>
            </div>

            <div className={isRight ? "lg:pr-1" : "lg:pl-1"}>
                <h3 className="text-base font-semibold leading-snug text-slate-900">{title}</h3>
                <p className="mt-2 max-w-[520px] text-[13px] font-medium leading-relaxed text-slate-600 sm:text-sm">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function ValueCard({ title, desc, iconSrc, iconAlt }: ValueItem) {
    return (
        <div className="group w-full rounded-xl bg-[#e9eaeb] p-5 text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#f47200] hover:text-white sm:p-6">
            <div className="flex items-center gap-3">
                <div className="relative h-9 w-9">
                    <Image
                        src={iconSrc}
                        alt={iconAlt || title}
                        fill
                        sizes="35px"
                        className="object-contain"
                    />
                </div>

                <h4 className="text-[15px] font-semibold">{title}</h4>
            </div>

            <p className="mt-3 text-sm font-medium transition-all duration-300 sm:mt-4">
                {desc}
            </p>
        </div>
    );
}