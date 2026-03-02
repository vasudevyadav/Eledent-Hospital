"use client";

import React from "react";
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

type ServiceItem = {
  label: string;
  href: string;
  icon: keyof typeof ICONS;
};

type Props = {
  services: ServiceItem[];
};

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

function ServiceCard({
  label,
  Icon,
  href,
}: {
  label: string;
  Icon: LucideIcon;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "group w-full rounded-[14px] transition-all",
        "h-[112px] sm:h-[150px]",
        "flex flex-col items-center justify-center gap-3",
        "bg-transparent",
        "hover:bg-[#f36d00] hover:border-[#1f1f1f] hover:border hover:shadow-[0_10px_22px_rgba(243,109,0,0.25)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/40",
      ].join(" ")}
      aria-label={label}
      title={label}
    >
      <div className="w-14 h-14 rounded-full bg-[#f36d00] flex items-center justify-center text-white transition-all group-hover:bg-white group-hover:rounded-[10px] mb-2">
        <Icon className="w-6 h-6 transition-all group-hover:text-[#f36d00]" />
      </div>

      <div className="text-xs lg:text-sm font-semibold text-center text-slate-700 transition-colors group-hover:text-white">
        {label}
      </div>
    </Link>
  );
}

export default function LocationServices({ services }: Props) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="lg:pb-16 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-[22px] bg-[#f7f9fc] border border-slate-200/60 overflow-hidden">
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
                {services.map((s) => {
                  const Icon = ICONS[s.icon];
                  return (
                    <ServiceCard
                      key={s.label}
                      label={s.label}
                      Icon={Icon}
                      href={s.href}
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