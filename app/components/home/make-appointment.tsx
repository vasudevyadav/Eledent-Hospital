"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAppointmentModal } from "@/app/context/AppointmentModalContext";

/** Subtle hex background as inline SVG (data-uri) */
const HEX_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%23e5e7eb' stroke-width='1'%3E%3Cpath opacity='0.55' d='M30 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.35' d='M90 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M150 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M60 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3Cpath opacity='0.18' d='M120 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3C/g%3E%3C/svg%3E")`;

type NumericLike = number | string;

interface AnimatedCountProps {
    value: NumericLike;
    decimals?: NumericLike;
    suffix?: string;
    duration?: number;
}

function toNumberSafe(input: NumericLike, fallback = 0) {
    if (typeof input === "number") return Number.isFinite(input) ? input : fallback;
    const n = Number(String(input).replace(/,/g, "").trim());
    return Number.isFinite(n) ? n : fallback;
}

function toIntSafe(input: NumericLike, fallback = 0) {
    const n = Math.trunc(toNumberSafe(input, fallback));
    return Number.isFinite(n) ? n : fallback;
}

function AnimatedCount({ value, decimals = 0, suffix = "", duration = 1400 }: AnimatedCountProps) {
    const safeValue = toNumberSafe(value, 0);
    const safeDecimals = Math.max(0, toIntSafe(decimals, 0));

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

            const eased = 1 - Math.pow(1 - progress, 3);
            const nextValue = safeValue * eased;

            setCount(nextValue);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [started, safeValue, duration]);

    const formatted = useMemo(() => `${count.toFixed(safeDecimals)}${suffix}`, [count, safeDecimals, suffix]);
    const finalFormatted = `${safeValue.toFixed(safeDecimals)}${suffix}`;

    return (
        <span ref={ref} aria-label={finalFormatted}>
            {started ? formatted : `0${safeDecimals > 0 ? "." + "0".repeat(safeDecimals) : ""}${suffix}`}
        </span>
    );
}

type StatItem = {
    id: string;
    iconSrc: string;
    iconAlt: string;
    value: number | string;
    decimals?: number | string;
    suffix?: string;
    label: string;
};

function StatIconCircle({ iconSrc, iconAlt }: { iconSrc: string; iconAlt: string }) {
    return (
        <div className="relative inline-flex items-center justify-center">
            <div className="relative mb-2 flex h-20 w-20 items-center justify-center bg-white lg:h-28 lg:w-28">
                <div
                    className="absolute inset-[6px] rounded-full"
                    style={{
                        backgroundImage: "url('/services/top-services-icon.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                    }}
                />
                <div className="relative z-10 flex items-center justify-center">
                    <Image
                        src={iconSrc}
                        alt={iconAlt}
                        width={42}
                        height={42}
                        className="h-6 w-6 object-contain lg:h-10 lg:w-10"
                    />
                </div>
            </div>
        </div>
    );
}

export default function MakeAppointmentStatic() {
    const { openModal } = useAppointmentModal();

    const heroItems = [
        { id: "eyebrow", type: "eyebrow" as const, text: "Need Expert Dental Care or Check-Up? " },
        { id: "title", type: "title" as const, text: "Book Your Appointment with Our Dental Specialists" },
        { id: "phoneLabel", type: "phoneLabel" as const, text: "Get your Consultation or Call:" },
    ];

    const phoneNumbers = [
        { label: "+91 9983868366", href: "tel:+919983868366" },
        { label: "+91 7799769994", href: "tel:+917799769994" },
    ];

    const ctaText = "Get an Appointment";
    const doctorImageSrc = "/home/Book-Your-Appointment.png";
    const doctorImageAlt = "Doctor";

    const stats: StatItem[] = [
        {
            id: "rating",
            iconSrc: "/home/rating-icon.png",
            iconAlt: "Rating",
            value: 27000,
            decimals: 0,
            suffix: "+",
            label: "Root Canals ",
        },
        {
            id: "awards",
            iconSrc: "/home/award-icon.png",
            iconAlt: "Awards",
            value: 22000,
            decimals: 0,
            suffix: "+",
            label: " Implants ",
        },
        {
            id: "experience",
            iconSrc: "/home/year-icon.png",
            iconAlt: "Experience",
            value: 5000,
            decimals: 0,
            suffix: "+",
            label: "Digital Smile",
        },
        {
            id: "implants",
            iconSrc: "/home/implant-icon.png",
            iconAlt: "Implants",
            value: 9500,
            decimals: 0,
            suffix: "+",
            label: "Braces Cases",
        },
    ];

    const statsBgImage = "/services/stats-bg.png";

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative w-full overflow-hidden bg-white">
                <div
                    className="absolute left-0 top-0 h-[140px] w-full opacity-60 sm:h-[160px]"
                    style={{
                        backgroundImage: HEX_BG,
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                    }}
                />

                <div className="relative pt-[0px] sm:pt-[90px]">
                    <div className="relative rounded-2xl bg-[#f47920]">
                        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                            <div className="relative min-h-[390px] sm:min-h-[400px] lg:min-h-[380px]">
                                <div className="relative z-10 max-w-xl pb-8 pr-0 pt-8 lg:pb-36 lg:pt-22">
                                    {heroItems.map((item) => {
                                        if (item.type === "eyebrow") {
                                            return (
                                                <p
                                                    key={item.id}
                                                    className="mb-2 text-[10px] font-semibold tracking-widest text-white/90 sm:text-base"
                                                >
                                                    {item.text}
                                                </p>
                                            );
                                        }

                                        if (item.type === "title") {
                                            return (
                                                <h2
                                                    key={item.id}
                                                    className="mb-2 text-lg font-bold leading-tight text-white sm:mb-3 sm:text-2xl lg:text-4xl"
                                                >
                                                    {item.text}
                                                </h2>
                                            );
                                        }

                                        if (item.type === "phoneLabel") {
                                            return (
                                                <p
                                                    key={item.id}
                                                    className="mb-2 text-[11px] font-semibold tracking-wide text-white/90 sm:text-base"
                                                >
                                                    {item.text}
                                                </p>
                                            );
                                        }

                                        return null;
                                    })}

                                    <div className="mb-6 mt-1 flex flex-wrap items-center gap-2 text-sm font-bold text-white sm:text-2xl">
                                        {phoneNumbers.map((phone, index) => (
                                            <span key={phone.href} className="flex items-center">
                                                <a
                                                    href={phone.href}
                                                    className="underline-offset-4 transition hover:underline"
                                                >
                                                    {phone.label}
                                                </a>
                                                {index < phoneNumbers.length - 1 && <span className="mx-2">|</span>}
                                            </span>
                                        ))}
                                    </div>

                                    <div>
                                        <button
                                            type="button"
                                            onClick={openModal}
                                            className="inline-block whitespace-nowrap rounded-md bg-black px-3 py-2.5 text-xs font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-neutral-900 sm:px-8 sm:py-3 sm:text-base lg:px-5 lg:text-sm"
                                        >
                                            {ctaText}
                                        </button>
                                    </div>
                                </div>

                                <div className="absolute right-0 -bottom-2 top-[-50px] hidden w-[32%] lg:block lg:w-[45%]">
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={doctorImageSrc}
                                            alt={doctorImageAlt}
                                            fill
                                            priority
                                            className="object-contain"
                                            style={{ filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.12))" }}
                                        />
                                    </div>
                                </div>

                                <div className="absolute bottom-26 right-0 block h-[130px] w-[130px] sm:h-[260px] sm:w-[260px] lg:bottom-0 lg:right-0 lg:hidden">
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={doctorImageSrc}
                                            alt={doctorImageAlt}
                                            fill
                                            className="object-contain object-bottom"
                                            style={{ filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.12))" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative -mt-[110px] pb-8 lg:-mt-[70px] lg:pb-8">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-16">
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl lg:rounded-3xl">
                            <div
                                className="absolute inset-0 opacity-90"
                                style={{
                                    backgroundImage: statsBgImage ? `url('${statsBgImage}'), ${HEX_BG}` : HEX_BG,
                                    backgroundRepeat: statsBgImage ? "no-repeat, repeat" : "repeat",
                                    backgroundPosition: "center, center",
                                    backgroundSize: statsBgImage ? "cover, auto" : "auto",
                                }}
                            />

                            <div className="relative grid grid-cols-2 gap-4 px-3 py-3 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-6">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="flex flex-col items-center text-center">
                                        <StatIconCircle iconSrc={stat.iconSrc} iconAlt={stat.iconAlt} />

                                        <div className="mb-3 mt-2 text-lg font-bold leading-none text-[#f47920] sm:mt-3 lg:text-[25px]">
                                            <AnimatedCount
                                                value={stat.value}
                                                decimals={stat.decimals ?? 0}
                                                suffix={stat.suffix ?? ""}
                                            />
                                        </div>

                                        <div className="mb-4 mt-1 max-w-[130px] text-[11px] font-medium leading-tight text-gray-600 sm:max-w-[180px] sm:text-sm lg:text-sm">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}