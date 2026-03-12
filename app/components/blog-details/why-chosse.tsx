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
            title: "Consistent, High-Quality Care",
            desc: "Our dental professionals keep up with current research in order to offer the latest evidence-based treatment options.",
            iconSrc: "/about-us/why-chose-1.png",
            iconAlt: "Consistent care icon",
        },
        {
            title: "Whenever You Need An Expert Dentist, You Can:",
            desc: "One of the most crucial factors in dentistry is the continuity and integrity of the treatment. We ensure the same dentist treats our patients year after year.",
            iconSrc: "/about-us/why-chose-2.png",
            iconAlt: "Expert dentist icon",
        },
        {
            title: "We Offer Flexible Appointments To Fit Your Busy Schedule",
            desc: "We know how difficult it can be to fit dental appointments into an already busy lifestyle, so we offer flexible hours to fit your schedule.",
            iconSrc: "/about-us/why-chose-3.png",
            iconAlt: "Flexible appointments icon",
        },
    ];

    const rightItems: FeatureItem[] = [
        {
            title: "We Use State-Of-The-Art Dental Technology & High-Quality Materials",
            desc: "Our dental centers and laboratories are highly equipped with materials that meet global standards which can help you to achieve teeth restoration in a single visit.",
            iconSrc: "/about-us/why-chose-4.png",
            iconAlt: "Technology icon",
        },
        {
            title: "Same-Day Dental Emergency Treatment",
            desc: "During a visit, you won’t have to wait long for a diagnosis. We provide same-day dentistry for dental emergencies, so you don’t have to wait.",
            iconSrc: "/about-us/why-chose-5.png",
            iconAlt: "Emergency icon",
        },
        {
            title: "All Under One Roof",
            desc: "We offer quality, affordable private dental care for every need, all under one roof, making the process easier and hassle-free.",
            iconSrc: "/about-us/why-chose-6.png",
            iconAlt: "All under one roof icon",
        },
    ];

    const valueItems: ValueItem[] = [
        {
            title: "Care For The Whole Teeth",
            desc: "Comprehensive dental care that supports long-term oral health and daily comfort.",
            iconSrc: "/about-us/value-1.png",
            iconAlt: "Whole care icon",
        },
        {
            title: "Advanced Equipment",
            desc: "Modern tools and tech for accurate diagnosis and smoother, faster treatments.",
            iconSrc: "/about-us/value-2.png",
            iconAlt: "Advanced equipment icon",
        },
        {
            title: "Experienced Doctors",
            desc: "Skilled teams focused on precision, comfort, and predictable results.",
            iconSrc: "/about-us/value-3.png",
            iconAlt: "Experienced doctors icon",
        },
        {
            title: "Safe & Sterile Setup",
            desc: "Strict hygiene and sterilization protocols followed at every step.",
            iconSrc: "/about-us/value-4.png",
            iconAlt: "Sterile setup icon",
        },
    ];

    return (
        <section className="w-full bg-white py-3 pt-4 lg:pt-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                {/* ================= WHY CHOOSE CARD SECTION ================= */}
                <div className="rounded-t-[22px] bg-[#e9eaeb] px-4 py-10 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] sm:px-8 sm:py-12">
                    {/* heading */}
                    <div className="text-center">
                        <span className="inline-flex bg-[#f47200] px-3 py-1.5 text-sm font-semibold tracking-[0.14em] text-white">
                            WHY CHOOSE US
                        </span>

                        <h2 className="mt-4 text-xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                            The Dental Health Partner You&apos;ve Been Looking For
                        </h2>
                    </div>

                    {/* MOBILE/TABLET CENTER IMAGE */}
                    <div className="mt-8 flex justify-center hidden">
                        <div className="relative h-[320px] w-[240px] sm:h-[380px] sm:w-[300px]">
                            <Image
                                src="/about-us/why-chose-doctor.png"
                                alt="Doctor"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-3 lg:items-center">
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
                                    src="/about-us/why-chose-doctor.png"
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
                                    We Have A Unique Value
                                    <br className="hidden sm:block" />
                                    This Sets Us Apart From
                                    <br className="hidden sm:block" />
                                    Others
                                </h3>

                                <p className="mt-4 max-w-md text-xs leading-relaxed text-white sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suscipit
                                </p>
                            </div>
                        </div>

                        {/* RIGHT IMAGE + CARDS (FIXED: NO CUT-OFF) */}
                        <div className="relative bg-black">
                            <Image
                                src="/about-us/why-chose-right.jpg"
                                alt="Dental Background"
                                fill
                                className="object-cover opacity-60"
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