"use client";

import Image from "next/image";
import type { ReactElement } from "react";

/** Subtle hex background as inline SVG (data-uri) */
const HEX_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%23e5e7eb' stroke-width='1'%3E%3Cpath opacity='0.55' d='M30 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.35' d='M90 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M150 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M60 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3Cpath opacity='0.18' d='M120 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3C/g%3E%3C/svg%3E")`;

// --- Custom Icon Components (keep your originals) ---
const TeethIcon = () => (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
        <path
            d="M12 2C10.5 2 9 3 8 4.5C7 3 5.5 2 4 2C2 2 1 3.5 1 6C1 9 2 12 3 14C4 16 5 18 6 20C6.5 21 7 22 8 22C9 22 9.5 21 10 20C10.5 19 11 18 11.5 17C11.8 16.5 12 16 12 15.5C12 16 12.2 16.5 12.5 17C13 18 13.5 19 14 20C14.5 21 15 22 16 22C17 22 17.5 21 18 20C19 18 20 16 21 14C22 12 23 9 23 6C23 3.5 22 2 20 2C18.5 2 17 3 16 4.5C15 3 13.5 2 12 2Z"
            fill="#F97316"
        />
    </svg>
);

const RootCanalIcon = () => (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L10 6H14L12 2Z" fill="#F97316" />
        <rect x="10" y="6" width="4" height="12" fill="#F97316" />
        <circle cx="12" cy="20" r="2" fill="#F97316" />
    </svg>
);

const ImplantIcon = () => (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
        <path
            d="M12 2V8M12 8L8 12M12 8L16 12M12 12V22M8 12L6 14M16 12L18 14"
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="12" cy="22" r="2" fill="#F97316" />
    </svg>
);

const SmileIcon = () => (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#F97316" strokeWidth="2" />
        <path
            d="M6 8H10M14 8H18M7 14C7 14 9 16 12 16C15 16 17 14 17 14"
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

interface StatIconCircleProps {
    children: React.ReactNode;
}

function StatIconCircle({ children }: StatIconCircleProps) {
    return (
        <div className="relative inline-flex items-center justify-center">
            {/* connector line */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-200" />
            {/* top dot */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-200" />

            {/* dotted ring */}
            <div className="relative w-[76px] h-[76px] rounded-full border-2 border-dotted border-gray-200 bg-white flex items-center justify-center">
                {/* extra small dots around ring (like design) */}
                <span className="absolute -top-1 left-4 w-2 h-2 rounded-full bg-gray-200" />
                <span className="absolute top-3 -right-1 w-2 h-2 rounded-full bg-gray-200" />
                <span className="absolute bottom-4 -left-1 w-2 h-2 rounded-full bg-gray-200" />

                {children}
            </div>
        </div>
    );
}

interface Stat {
    icon: ReactElement;
    count: string;
    label: string;
}

export default function MakeAppointment() {
    const stats: Stat[] = [
        { icon: <TeethIcon />, count: "30000+", label: "Cases" },
        { icon: <RootCanalIcon />, count: "27000+", label: "Root Canals" },
        { icon: <ImplantIcon />, count: "22000+", label: "Implants" },
        { icon: <SmileIcon />, count: "5000+", label: "Digital Smile\nDesigning" },
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-[160px] opacity-60"
                style={{
                    backgroundImage: HEX_BG,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative pt-[90px]">
                <div className="relative bg-[#f47920]">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="relative min-h-[360px] lg:min-h-[380px]">


                            <div className="relative z-10 max-w-xl pt-10 pb-24 lg:pt-14 lg:pb-40">
                                <p className="text-base uppercase tracking-[0.28em] font-semibold text-white/90 mb-2 pl-2">
                                    NEED A DOCTOR FOR CHECK-UP?
                                </p>

                                <h1 className="text-xl  lg:text-4xl font-extrabold text-white mb-4">
                                    Just Make an Appointment
                                    <br />
                                    and You&apos;re Done!
                                </h1>

                                <p className="text-base text-white/90 mb-1">Get Your Quote or Call:</p>

                                <a
                                    href="tel:+917799719994"
                                    className="inline-block text-[18px] lg:text-2xl font-extrabold text-white mb-6 hover:opacity-90 transition-opacity"
                                >
                                    +91 77997 19994
                                </a>

                                <div>
                                    <button className="bg-[#1f2937] hover:bg-black text-white px-8 py-3 rounded-md text-base font-medium tracking-wide transition-colors shadow-sm">
                                        Get an Appointment
                                    </button>
                                </div>
                            </div>


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

                            {/* Mobile doctor */}
                            <div className="lg:hidden absolute right-0 bottom-0 top-[-30px] w-[52%]">
                                <div className="relative w-full h-[360px]">
                                    <Image
                                        src="/home/nurse-1.png"
                                        alt="Doctor"
                                        fill
                                        priority
                                        className="object-contain object-bottom"
                                        style={{ filter: "drop-shadow(0 10px 16px rgba(0,0,0,0.12))" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative -mt-[70px] pb-12 lg:pb-16">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="relative bg-white shadow-xl overflow-hidden">

                        <div
                            className="absolute inset-0 opacity-35"
                            style={{
                                backgroundImage: HEX_BG,
                                backgroundRepeat: "repeat",
                                backgroundPosition: "center",
                            }}
                        />
                        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 py-3 lg:py-6 pt-6 lg:pt-10 px-6 lg:px-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <StatIconCircle>{stat.icon}</StatIconCircle>

                                    <div className="mt-4 text-[#f47920] font-extrabold text-[18px]">
                                        {stat.count}
                                    </div>

                                    <div className="mt-1.5 text-gray-600 text-[12px] font-medium whitespace-pre-line leading-tight">
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
