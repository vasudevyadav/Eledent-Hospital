"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Sparkles,
    Braces,
    ScanFace,
    Baby,
    Stethoscope,
    Crown,
    Replace,
    Pill,
    type LucideIcon,
} from "lucide-react";

const ICONS = {
    Sparkles,
    Braces,
    ScanFace,
    Baby,
    Stethoscope,
    Crown,
    Replace,
    Pill,
} as const;

type ServiceItem = {
    label: string;
    href: string;
    icon: keyof typeof ICONS;
};

// ✅ STATIC
const SERVICES: ServiceItem[] = [
    { label: "DENTAL IMPLANTS", href: "/services/dental-implants", icon: "Replace" },
    { label: "ROOT CANAL", href: "/services/rct", icon: "Pill" },
    { label: "DIGITAL SMILE DESIGN", href: "/services/dsd", icon: "ScanFace" },
    { label: "BRACES", href: "/services/braces", icon: "Braces" },
    { label: "TEETH WHITENING", href: "/services/teeth-whitening", icon: "Sparkles" },
    { label: "KIDS DENTISTRY", href: "/services/kids-dentistry", icon: "Baby" },
    { label: "GENERAL DENTISTRY", href: "/services/general", icon: "Stethoscope" },
    { label: "CROWNS", href: "/services/crowns", icon: "Crown" },
];

function ServiceCard({
    label,
    Icon,
    href,
    active,
    onActive,
}: {
    label: string;
    Icon: LucideIcon;
    href: string;
    active?: boolean;
    onActive?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onActive}
            className={[
                // base
                "group w-full rounded-[14px] transition-all duration-300 ease-out",
                "h-[112px] sm:h-[150px]",
                "flex flex-col items-center justify-center gap-3",
                "bg-transparent border border-transparent",

                // hover (your original)
                "hover:bg-[#f36d00] hover:border-[#1f1f1f] hover:shadow-[0_10px_22px_rgba(243,109,0,0.25)]",

                // motion on hover
                "hover:-translate-y-[1px] hover:scale-[1.01]",

                // active (selected)
                active
                    ? "bg-[#f36d00] border-[#1f1f1f]  -translate-y-[1px] scale-[1.01]"
                    : "",

                // focus
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/40",
            ].join(" ")}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            title={label}
        >
            {/* icon wrapper */}
            <div
                className={[
                    "w-14 h-14 flex items-center justify-center text-white transition-all duration-300 ease-out mb-2",
                    "rounded-full bg-[#f36d00]",
                    // hover behavior (your original)
                    "group-hover:bg-white group-hover:rounded-[10px]",
                    // active behavior
                    active ? "bg-[#f36d00] rounded-[10px]" : "",
                ].join(" ")}
            >
                <Icon
                    className={[
                        "w-6 h-6 transition-all duration-300 ease-out",
                        // hover icon color
                        "group-hover:text-[#f36d00]",
                        // subtle animation
                        "group-hover:scale-110",
                        // active icon color + keep scaled
                        active ? "text-white scale-110" : "",
                    ].join(" ")}
                />
            </div>

            {/* label */}
            <div
                className={[
                    "text-xs lg:text-sm font-semibold text-center transition-colors duration-300",
                    "text-slate-700",
                    "group-hover:text-white",
                    active ? "text-black" : "",
                ].join(" ")}
            >
                {label}
            </div>
        </Link>
    );
}

export default function HomeServicesStatic() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full bg-white overflow-hidden lg:pt-14 pt-4">
            <div className="lg:pb-6 pb-2">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative rounded-[22px] bg-[#f7f9fc] home-servic-bg border border-slate-200/60 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.08] hex-pattern" />

                        <div className="relative px-2 md:px-10 lg:py-10 py-6">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center px-5 py-1 text-sm bg-[#f36d00] text-white font-bold">
                                    Our
                                </span>
                                <h2 className="mt-2 text-[28px] md:text-[32px] font-bold text-slate-800">
                                    Services
                                </h2>
                            </div>

                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                                {SERVICES.map((s, idx) => {
                                    const Icon = ICONS[s.icon];
                                    return (
                                        <ServiceCard
                                            key={s.label}
                                            label={s.label}
                                            Icon={Icon}
                                            href={s.href}
                                            active={idx === activeIndex}
                                            onActive={() => setActiveIndex(idx)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hex-pattern {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTYwIDEyMCc+PGcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOTRhM2I4JyBzdHJva2Utb3BhY2l0eT0nMC4yMicgc3Ryb2tlLXdpZHRoPScxJz48cGF0aCBkPSdNMzAgMTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PHBhdGggZD0nTTgwIDEwIGwxOCAxMCB2MjAgbC0xOCAxMCBsLTE18LTEwIHYtMjAgeicvPjxwYXRoIGQ9J00xMzAgMTAgbDE4IDEwIHYyMCBsLTE18IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PHBhdGggZD0nTTU1IDUwIGwxOCAxMCB2MjAgbC0xOCAxMCBsLTE18LTEwIHYtMjAgeicvPjxwYXRoIGQ9J00xMDUgNTAgbDE4IDEwIHYyMCBsLTE18IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PC9nPjwvc3ZnPg==");
          background-size: 260px 200px;
          background-repeat: repeat;
          background-position: center;
        }
      `}</style>
        </section>
    );
}