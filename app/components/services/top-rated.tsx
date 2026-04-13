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

export default function OverValue(): JSX.Element {
    // ✅ LEFT ITEMS (icons are images)
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

    // ✅ RIGHT ITEMS (icons are images)
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

    // ✅ OUR VALUE cards
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
        <section className="w-full bg-white pb-10">
            <div className="mx-auto max-w-7xl px-6">

                {/* ================= UNIQUE VALUE SECTION ================= */}
                <div className="mt-0 overflow-hidden rounded-[22px] shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]">
                    <div className="grid lg:grid-cols-2">
                        {/* LEFT DARK CONTENT */}
                        <div className="bg-[#2a2a2a] px-10 py-4 text-white h-full flex items-center justify-center">
                            <div>
                                <p className="mb-2 text-xl text-orange-500">Our Value</p>
                                <h3 className="text-3xl font-semibold leading-light">
                                    How to Begin Your Journey <br />
                                    With Dental Hyderabad?
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-relaxed text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                        </div>

                        <div className="relative min-h-[520px] bg-black overflow-visible">
                            <Image
                                src="/about-us/why-chose-right.jpg"
                                alt="Dental Background"
                                fill
                                   unoptimized
                                className="object-cover opacity-60"
                            />

                            <div className="absolute inset-0 flex items-center">
                                <div className="grid grid-cols-2 gap-6 p-10 lg:-translate-x-20">
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
            {/* ORANGE ICON CIRCLE (image inside) */}
            <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f47200] text-white shadow-[0_12px_26px_-18px_rgba(244,114,0,0.95)]">
                <div className="relative h-7 w-7">
                    <Image
                        src={iconSrc}
                        alt={iconAlt || title}
                        fill
                           unoptimized
                        sizes="20px"
                        className="object-contain brightness-0 invert" // ✅ makes icon white
                    />
                </div>
            </div>

            <div className={isRight ? "lg:pr-1" : "lg:pl-1"}>
                <h3 className="text-base font-semibold leading-snug text-slate-900">{title}</h3>
                <p className="mt-2 max-w-[320px] text-[13px] font-medium leading-relaxed text-slate-600">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function ValueCard({ title, desc, iconSrc, iconAlt }: ValueItem) {
    return (
        <div
            className="group rounded-xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300
      bg-[#e9eaeb] text-black hover:text-white hover:bg-[#f47200] hover:text-white"
        >
            <div className="flex items-center gap-3">
                {/* ICON CIRCLE */}
                <div
                    className="relative transition-all duration-300"
                >
                    <div className="relative h-9 w-9">
                        <Image
                            src={iconSrc}
                            alt={iconAlt || title}
                            fill
                            sizes="35px"
                               unoptimized
                            className="object-contain"
                        />
                    </div>
                </div>

                <h4 className="text-[15px] font-semibold">{title}</h4>
            </div>

            <p className="mt-4 text-sm font-medium transition-all duration-300">
                {desc}
            </p>
        </div>
    );
}
