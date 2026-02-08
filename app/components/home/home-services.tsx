"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import {
    Smile,
    Sparkles,
    Braces,
    ShieldPlus,
    ScanFace,
    Baby,
    Stethoscope,
    Crown,
    Replace,
    Pill,
} from "lucide-react";

const stats = [
    { count: "10+", label: "Years\nExperience", icon: <ShieldPlus className="w-5 h-5" /> },
    { count: "25K+", label: "Happy\nPatients", icon: <Smile className="w-5 h-5" /> },
    { count: "15+", label: "Specialists\nTeam", icon: <Stethoscope className="w-5 h-5" /> },
    { count: "24/7", label: "Emergency\nSupport", icon: <Phone className="w-5 h-5" /> },
];

const services = [
    { label: "DENTAL IMPLANTS", icon: <Replace className="w-6 h-6" /> },
    { label: "FULL TEETH REPLACEMENT", icon: <Replace className="w-6 h-6" /> },
    { label: "ROOT CANAL TREATMENT", icon: <Pill className="w-6 h-6" /> },
    { label: "DIGITAL SMILE DESIGNING", icon: <ScanFace className="w-6 h-6" /> },
    { label: "LASER GUM TREATMENT", icon: <Sparkles className="w-6 h-6" /> },
    { label: "ONE VISIT DENTISTRY", icon: <Stethoscope className="w-6 h-6" /> },
    { label: "ZIRCONIUM CROWNS", icon: <Crown className="w-6 h-6" /> },
    { label: "DENTAL BRACES", icon: <Braces className="w-6 h-6" /> },
    { label: "INVISIBLE ALIGNERS", icon: <Smile className="w-6 h-6" /> },
    { label: "DIMPLEPLASTY", icon: <Sparkles className="w-6 h-6" /> },
    { label: "TEETH WHITENING", icon: <Sparkles className="w-6 h-6" /> },
    { label: "PAEDIATRIC DENTISTRY", icon: <Baby className="w-6 h-6" /> },
    { label: "GENERAL DENTISTRY", icon: <Replace className="w-6 h-6" /> },
    { label: "TOOTH JEWELLERY", icon: <Sparkles className="w-6 h-6" /> },
];


function ServiceCard({
    label,
    icon,
    active,
}: {
    label: string;
    icon: React.ReactNode;
    active?: boolean;
}) {
    return (
        <button
            type="button"
            className={[
                "group w-full rounded-[14px] border transition-all",
                "px-4 py-5 text-center",
                active
                    ? "bg-[#f47200] border-[#f47200] shadow-[0_12px_26px_rgba(244,114,0,0.25)]"
                    : "bg-white border-slate-200/70 hover:shadow-md hover:-translate-y-[1px]",
            ].join(" ")}
            aria-label={label}
        >
            <div
                className={[
                    "mx-auto w-12 h-12 rounded-full flex items-center justify-center",
                    active
                        ? "bg-white/18 text-white ring-1 ring-white/30"
                        : "bg-[#f47200] text-white",
                ].join(" ")}
            >
                {icon}
            </div>

            <div
                className={[
                    "mt-3 text-[10px] font-extrabold tracking-[0.12em] leading-tight",
                    active ? "text-white" : "text-slate-700",
                ].join(" ")}
            >
                {label}
            </div>
        </button>
    );
}

export default function HomeServices() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="relative h-[70px] bg-white">
                <div className="absolute inset-0 opacity-[0.08] hex-pattern" />
            </div>



            <div className="pb-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="relative rounded-[22px] bg-[#f6f8fb] border border-slate-200/60 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.08] hex-pattern" />

                        <div className="relative px-6 md:px-10 py-10">
                            <div className="text-center">
                                <div className="inline-flex flex-col items-center">
                                    <span className="inline-flex items-center justify-center h-5 px-3 rounded-full bg-[#f47200] text-white text-[11px] font-bold">
                                        Our
                                    </span>
                                    <h2 className="mt-2 text-[28px] md:text-[32px] font-extrabold text-slate-800">
                                        Services
                                    </h2>
                                </div>
                            </div>

                            {/* Grid */}
                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                                {services.map((s, idx) => (
                                    <ServiceCard
                                        key={s.label}
                                        label={s.label}
                                        icon={s.icon}
                                        active={idx === 0}
                                    />
                                ))}
                            </div>
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
