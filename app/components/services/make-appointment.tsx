"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/** Subtle hex background as inline SVG (data-uri) */
const HEX_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%23e5e7eb' stroke-width='1'%3E%3Cpath opacity='0.55' d='M30 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.35' d='M90 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M150 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M60 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3Cpath opacity='0.18' d='M120 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3C/g%3E%3C/svg%3E")`;

interface StatIconCircleProps {
    iconSrc: string;
    iconAlt: string;
}

function StatIconCircle({ iconSrc, iconAlt }: StatIconCircleProps) {
    return (
        <div className="relative inline-flex items-center justify-center">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 bg-white flex items-center justify-center">
                {/* Background decorative image */}
                <div
                    className="absolute inset-[6px] rounded-full"
                    style={{
                        backgroundImage: "url('/services/top-services-icon.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                    }}
                />

                {/* Center icon image */}
                <div className="relative z-10 flex items-center justify-center">
                    <Image
                        src={iconSrc}
                        alt={iconAlt}
                        width={42}
                        height={42}
                        className="object-contain w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                    />
                </div>
            </div>
        </div>
    );
}

interface AnimatedCountProps {
    value: number;
    decimals?: number;
    suffix?: string;
    duration?: number;
}

function AnimatedCount({
    value,
    decimals = 0,
    suffix = "",
    duration = 1400,
}: AnimatedCountProps) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLSpanElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting && !hasAnimatedRef.current) {
                    setStarted(true);
                    hasAnimatedRef.current = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        if (!started) return;

        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            const nextValue = value * eased;

            setCount(nextValue);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [started, value, duration]);

    const formatted = useMemo(() => {
        return `${count.toFixed(decimals)}${suffix}`;
    }, [count, decimals, suffix]);

    const finalFormatted = `${value.toFixed(decimals)}${suffix}`;

    return (
        <span ref={ref} aria-label={finalFormatted}>
            {started ? formatted : `0${decimals > 0 ? "." + "0".repeat(decimals) : ""}${suffix}`}
        </span>
    );
}

interface Stat {
    iconSrc: string;
    iconAlt: string;
    value: number;
    decimals?: number;
    suffix?: string;
    label: string;
}

export default function CommanTopRated() {
    const stats: Stat[] = [
        {
            iconSrc: "/services/rating-icon.png",
            iconAlt: "Rating icon",
            value: 4.9,
            decimals: 1,
            suffix: "/5",
            label: "Rating on Average by Patients",
        },
        {
            iconSrc: "/services/award-icon.png",
            iconAlt: "Awards icon",
            value: 10,
            suffix: "+",
            label: "Awards and Recognitions",
        },
        {
            iconSrc: "/services/year-icon.png",
            iconAlt: "Experience icon",
            value: 100,
            suffix: "+",
            label: "Years of Collective Experience",
        },
        {
            iconSrc: "/services/implant-icon.png",
            iconAlt: "Implants icon",
            value: 27000,
            suffix: "+",
            label: "Implants",
        },
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Top hex pattern strip */}
            <div
                className="absolute top-0 left-0 w-full h-[140px] sm:h-[160px] opacity-60"
                style={{
                    backgroundImage: HEX_BG,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                }}
            />

            {/* Hero */}
            <div className="relative pt-[80px] sm:pt-[90px]">
                <div className="relative bg-[#f47920]">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="relative min-h-[390px] sm:min-h-[400px] lg:min-h-[380px]">
                            {/* NOTE: mobile-only right padding added to avoid text/image overlap. Desktop unchanged */}
                            <div className="relative z-10 max-w-xl pr-0 sm:pr-[34%] lg:pr-0 pt-8 sm:pt-10 pb-8 lg:pt-14 lg:pb-40">
                                <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                                    Top-Rated Implantologists
                                    <br />
                                    in Hyderabad
                                </h1>

                                <p className="text-xs sm:text-base text-white/95 mb-5 sm:mb-6 leading-relaxed">
                                    Backed by 20+ years of experience and 27,000+ successful implant
                                    cases, our team is a trusted name for dental implants in Hyderabad,
                                    offering the same high standard of care across our Banjara Hills,
                                    Kondapur, Kukatpally, and Manikonda clinics.
                                </p>

                                <div>
                                    <button className="bg-black hover:bg-neutral-900 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium tracking-wide transition-colors shadow-sm whitespace-nowrap">
                                        Get an Appointment
                                    </button>
                                </div>
                            </div>

                            {/* Desktop doctor (UNCHANGED) */}
                            <div className="absolute right-0 bottom-0 top-[-70px] w-[46%] lg:w-[48%] hidden lg:block">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/home/nurse-1.png"
                                        alt="Doctor"
                                        fill
                                        priority
                                        className="object-contain object-bottom"
                                        style={{ filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.12))" }}
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* Stats card */}
            <div className="relative -mt-[85px] lg:-mt-[70px] pb-10 lg:pb-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white shadow-xl rounded-2xl lg:rounded-3xl overflow-hidden">
                        {/* Background layers: image + hex pattern */}
                        <div
                            className="absolute inset-0 opacity-90"
                            style={{
                                backgroundImage: `url('/services/service-count-bg.png'), ${HEX_BG}`,
                                backgroundRepeat: "no-repeat, repeat",
                                backgroundPosition: "center, center",
                                backgroundSize: "cover, auto",
                            }}
                        />

                        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-4 lg:py-6 pt-5 lg:pt-8 px-3 sm:px-6 lg:px-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <StatIconCircle iconSrc={stat.iconSrc} iconAlt={stat.iconAlt} />

                                    <div className="mt-1 sm:mt-2 text-[#f47920] font-bold text-lg sm:text-2xl lg:text-3xl leading-none">
                                        <AnimatedCount
                                            value={stat.value}
                                            decimals={stat.decimals}
                                            suffix={stat.suffix}
                                        />
                                    </div>

                                    <div className="mt-1 text-gray-600 text-[11px] sm:text-sm lg:text-base font-medium leading-tight max-w-[130px] sm:max-w-[180px]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}