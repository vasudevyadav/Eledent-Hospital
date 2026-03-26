"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import type { LocationService } from "../../../lib/location-api";

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

type IconName = keyof typeof ICONS;

type Props = {
  services: LocationService[];
};

function isImageUrl(value: string | null | undefined) {
  if (!value) return false;
  return value.startsWith("http://") || value.startsWith("https://");
}

function ServiceIcon({
  icon,
  label,
}: {
  icon: string | null | undefined;
  label: string;
}) {
  if (isImageUrl(icon)) {
    return (
      <Image
        src={icon as string}
        alt={label}
        width={28}
        height={28}
        className="h-8 w-8 object-contain"
      />
    );
  }



  const Icon =
    icon && icon in ICONS ? ICONS[icon as IconName] : Sparkles;

  return <Icon className="h-6 w-6 transition-all group-hover:text-[#f36d00]" />;
}

function ServiceCard({
  label,
  icon,
  href,
}: {
  label: string;
  icon: string | null | undefined;
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
      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#f36d00] text-white transition-all group-hover:rounded-[10px] group-hover:bg-black">
        <ServiceIcon icon={icon} label={label} />
      </div>

      <div className="text-center text-xs font-semibold text-slate-700 transition-colors group-hover:text-white lg:text-sm">
        {label}
      </div>
    </Link>
  );
}

export default function LocationServices({ services }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pb-8 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[22px] border border-slate-200/60 bg-[#f7f9fc]">
            <div className="hex-pattern absolute inset-0 opacity-[0.08]" />

            <div className="relative px-2 py-6 md:px-10 lg:py-10">
              <div className="text-center">
                <span className="inline-flex items-center justify-center bg-[#f36d00] px-5 py-1 text-sm font-bold text-white">
                  Our
                </span>
                <h2 className="mt-2 text-[28px] font-bold text-slate-800 md:text-[32px]">
                  Services
                </h2>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {services.map((service, index) => {
                  return (
                    <ServiceCard
                      key={`${service.label}-${index}`}
                      label={service.label}
                      icon={service.icon}
                      href={service.href}
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
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTYwIDEyMCc+PGcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOTRhM2I4JyBzdHJva2Utb3BhY2l0eT0nMC4yMicgc3Ryb2tlLXdpZHRoPScxJz48cGF0aCBkPSdNMzAgMTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PHBhdGggZD0nTTgwIDEwIGwxOCAxMCB2MjAgbC0xOCAxMCBsLTE4LTEwIHYtMjAgeicvPjxwYXRoIGQ9J00xMzAgMTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PHBhdGggZD0nTTU1IDUwIGwxOCAxMCB2MjAgbC0xOCAxMCBsLTE4LTEwIHYtMjAgeicvPjxwYXRoIGQ9J00xMDUgNTAgbDE4IDEwIHYyMCBsLTE4IDEwIGwtMTgtMTAgdi0yMCB6Jy8+PC9nPjwvc3ZnPg==");
          background-size: 260px 200px;
          background-repeat: repeat;
          background-position: center;
        }
      `}</style>
    </section>
  );
}