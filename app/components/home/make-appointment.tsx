"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

// Custom Icon Components (keep exactly like your icons)
const TeethIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2C10.5 2 9 3 8 4.5C7 3 5.5 2 4 2C2 2 1 3.5 1 6C1 9 2 12 3 14C4 16 5 18 6 20C6.5 21 7 22 8 22C9 22 9.5 21 10 20C10.5 19 11 18 11.5 17C11.8 16.5 12 16 12 15.5C12 16 12.2 16.5 12.5 17C13 18 13.5 19 14 20C14.5 21 15 22 16 22C17 22 17.5 21 18 20C19 18 20 16 21 14C22 12 23 9 23 6C23 3.5 22 2 20 2C18.5 2 17 3 16 4.5C15 3 13.5 2 12 2Z"
            fill="#F97316"
        />
    </svg>
);

const RootCanalIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L10 6H14L12 2Z" fill="#F97316" />
        <rect x="10" y="6" width="4" height="12" fill="#F97316" />
        <circle cx="12" cy="20" r="2" fill="#F97316" />
    </svg>
);

const ImplantIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#F97316" strokeWidth="2" />
        <path
            d="M6 8H10M14 8H18M7 14C7 14 9 16 12 16C15 16 17 14 17 14"
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

function StatIconCircle({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative grid place-items-center">
            {/* dotted outer ring like screenshot */}
            <div className="relative grid place-items-center w-[74px] h-[74px] rounded-full border border-dashed border-slate-200 bg-white">
                {children}
            </div>

            {/* small node + tiny line above (screenshot style) */}
            <span className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full border border-slate-200 bg-white" />
            <span className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-[1px] h-[12px] bg-slate-200/70" />
        </div>
    );
}

export default function MakeAppointment() {
    const stats = [
        { icon: <TeethIcon />, count: "30000+", label: "Cases" },
        { icon: <RootCanalIcon />, count: "27000+", label: "Root Canals" },
        { icon: <ImplantIcon />, count: "22000+", label: "Implants" },
        { icon: <SmileIcon />, count: "5000+", label: "Digital Smile\nDesigning" },
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Top white strip with faint hex pattern */}
            <div className="relative h-[70px] bg-white">
                <div className="absolute inset-0 opacity-[0.08] hex-pattern" />
            </div>

            {/* Orange hero band */}
            <div className="relative bg-[#f47200]">
                {/* faint hex pattern on orange */}
                <div className="absolute inset-0 opacity-[0.10] hex-pattern" />

                {/* tiny accent block top-right (as in screenshot) */}
                <div className="absolute top-6 right-0 w-10 h-10 bg-orange-300/40" />

                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[360px] py-10">
                        {/* Left content */}
                        <div className="text-white">
                            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold opacity-90 mb-3">
                                NEED A DOCTOR FOR CHECK-UP?
                            </p>

                            <h1 className="text-[34px] leading-[1.06] font-extrabold mb-10">
                                Just Make an Appointment
                                <br />
                                and You&apos;re Done!
                            </h1>

                            <p className="text-[12px] opacity-90 mb-2">Get Your Quote or Call:</p>

                            <a
                                href="tel:+917799719994"
                                className="inline-flex items-center gap-2 font-extrabold text-[18px] hover:opacity-90 transition-opacity"
                            >
                                <Phone className="w-4 h-4" />
                                +91 77997 19994
                            </a>

                            <div className="mt-6">
                                <button className="bg-[#1f2937] hover:bg-[#111827] text-white px-6 py-[10px] rounded-[3px] text-[11px] font-semibold shadow-sm">
                                    Get an Appointment
                                </button>
                            </div>
                        </div>

                        {/* Right doctor image */}
                        <div className="relative h-[290px] lg:h-[360px] flex items-end justify-center lg:justify-end">
                            <div className="relative w-full max-w-[420px] h-full">
                                {/* Put your doctor image here */}
                                <Image
                                    src="/doctor.png"
                                    alt="Doctor"
                                    fill
                                    priority
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* space for overlap card */}
                <div className="h-[120px]" />
            </div>

            {/* Overlapping stats card */}
            <div className="relative -mt-[92px] pb-10">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100">
                        {/* faint pattern in card */}
                        <div className="absolute inset-0 opacity-[0.09] hex-pattern" />

                        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 md:px-10">
                            {stats.map((s, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <StatIconCircle>{s.icon}</StatIconCircle>

                                    <div className="mt-4 text-[#f47200] font-extrabold text-[18px]">{s.count}</div>

                                    <div className="mt-1 text-slate-700 text-[12px] font-medium whitespace-pre-line leading-tight">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CSS for the faint hex background */}
            <style jsx>{`
        .hex-pattern {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTYwIDEyMCc+PGcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOTRhM2I4JyBzdHJva2Utb3BhY2l0eT0nMC4yMicgc3Ryb2tlLXdpZHRoPScxJz48cGF0aCBkPSdNMzAgMTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PHBhdGggZD0nTTgwIDEwIGwxOCAxMCB2MjAgbC0xOCAxMCBsLTE4LTEwIHYtMjAgeicvPjxwYXRoIGQ9J00xMzAgMTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PHBhdGggZD0nTTU1IDUwIGwxOCAxMCB2MjAgbC0xOCAxMCBsLTE4LTEwIHYtMjAgeicvPjxwYXRoIGQ9J00xMDUgNTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PC9nPjwvc3ZnPg==");
          background-size: 260px 200px;
          background-repeat: repeat;
          background-position: center;
        }
      `}</style>
        </section>
    );
}
