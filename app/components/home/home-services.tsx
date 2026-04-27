"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ServiceItem = {
    imageSrc: string;
    imageAlt: string;
    iconSrc: string;
    title: string;
    description: string;
    slug: string;
};

function ServiceCard({
    label,
    image,
    href,
    active,
    onActive,
}: {
    label: string;
    image: string;
    href: string;
    active?: boolean;
    onActive?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onActive}
            className={[
                "group w-full rounded-[14px] transition-all duration-300 ease-out",
                "h-[112px] sm:h-[150px]",
                "flex flex-col items-center justify-center gap-3",
                "bg-transparent border border-transparent",
                "hover:bg-[#f36d00] hover:border-[#1f1f1f] hover:shadow-[0_10px_22px_rgba(243,109,0,0.25)]",
                "hover:-translate-y-[1px] hover:scale-[1.01]",
                active
                    ? "bg-[#f36d00] border-[#1f1f1f] -translate-y-[1px] scale-[1.01]"
                    : "",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f36d00]/40",
            ].join(" ")}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            title={label}
        >
            <div
                className={[
                    "relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 ease-out mb-2",
                    "rounded-full bg-[#f36d00] shadow-[0_18px_45px_rgba(0,0,0,0.18)] p-3",
                    "group-hover:bg-[#000] group-hover:rounded-[10px] group-hover:invert",
                    active ? "bg-[#f36d00] rounded-[10px]" : "",
                ].join(" ")}
            >
                <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-contain p-3 transition-all duration-300 ease-out group-hover:scale-110"
                    unoptimized
                />
            </div>

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
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(
                    "https://cms.eledenthospitals.com/wp-json/custom/v1/services"
                );
                const data = await res.json();
                setServices(data?.data || []);
            } catch (error) {
                console.error("Failed to fetch services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden lg:pt-14 pt-4">
            <div className="lg:pb-6 pb-2">
                <div className="mx-auto max-w-7xl lg:px-6 px-4">
                    <div className="relative rounded-[22px] bg-[#f7f9fc] home-servic-bg border border-slate-200/60 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.08] hex-pattern" />

                        <div className="relative px-2 md:px-10 lg:py-10 py-6">
                            <div className="text-center">
                                {/* <span className="inline-flex items-center justify-center px-5 py-1 text-sm bg-[#f36d00] text-white font-bold">
                                    Our
                                </span> */}
                                <h2 className="mt-2 text-[28px] md:text-[32px] font-bold text-slate-800">
                                    Services
                                </h2>
                            </div>

                            {loading ? (
                                <div className="mt-6 text-center text-slate-500">Loading...</div>
                            ) : (
                                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                                    {services.map((service, idx) => (
                                        <ServiceCard
                                            key={service.slug}
                                            label={service.title}
                                            image={service.iconSrc}
                                            href={`/services/${service.slug}`}
                                            active={idx === activeIndex}
                                            onActive={() => setActiveIndex(idx)}
                                        />
                                    ))}
                                </div>
                            )}
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