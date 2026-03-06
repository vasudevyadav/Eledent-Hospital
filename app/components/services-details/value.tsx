"use client";

import Image from "next/image";
import type { OverValueSection } from "@/data/serviceDetails";

type Props = {
    data?: OverValueSection | null;
};

type ValueCardItemBase = OverValueSection["valueItems"][number];


type ValueCardItem = ValueCardItemBase & {
    iconHoverSrc?: string;
};

export default function OverValue({ data }: Props) {
    if (!data) return null;

    const {
        leftBadge,
        leftTitle,
        leftDescription,
        rightBgImageSrc,
        rightBgImageAlt,
        valueItems,
    } = data;

    return (
        <section className="w-full bg-white lg:pb-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mt-0 overflow-hidden lg:rounded-[22px] rounded-xl shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]">
                    <div className="grid lg:grid-cols-2">

                        <div className="flex h-full items-center justify-center bg-[#2a2a2a] lg:px-10 px-4 lg:py-4 py-10 text-white">
                            <div>
                                {leftBadge ? (
                                    <p className="mb-2 lg:text-xl text-base text-orange-500">{leftBadge}</p>
                                ) : null}

                                <h3 className="whitespace-pre-line lg:text-[35px] text-xl font-semibold">
                                    {leftTitle}
                                </h3>

                                {leftDescription ? (
                                    <p className="lg:mt-6 mt-2 max-w-md lg:text-base text-sm leading-relaxed text-white">
                                        {leftDescription}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        {/* RIGHT IMAGE + CARDS */}
                        <div className="relative min-h-[520px] overflow-visible bg-black">
                            {rightBgImageSrc ? (
                                <Image
                                    src={rightBgImageSrc}
                                    alt={rightBgImageAlt ?? "Background image"}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover opacity-60"
                                />
                            ) : null}

                            <div className="lg:absolute inset-0 flex items-center">
                                <div className="grid grid-cols-1 gap-4 p-6  sm:grid-cols-2 sm:gap-6 sm:p-10  sm:!pr-0 lg:-translate-x-20">
                                    {(valueItems ?? []).map((item, idx) => (
                                        <ValueCard key={`${item.title}-${idx}`} {...(item as ValueCardItem)} />
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

function ValueCard({
    title,
    desc,
    iconSrc,
    iconAlt,
    iconHoverSrc,
}: ValueCardItem) {
    return (
        <div className="group rounded-xl bg-[#e9eaeb] p-6 text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#f47200] hover:text-white">
            <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 shrink-0">
                    <Image
                        src={iconSrc}
                        alt={iconAlt || title}
                        fill
                        sizes="36px"
                        className={`object-contain transition-opacity duration-300 ${iconHoverSrc ? "opacity-100 group-hover:opacity-0" : ""
                            }`}
                    />

                    {iconHoverSrc ? (
                        <Image
                            src={iconHoverSrc}
                            alt={iconAlt || title}
                            fill
                            sizes="36px"
                            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    ) : null}


                </div>

                <h4 className="text-[15px] font-semibold leading-snug">{title}</h4>
            </div>

            <p className="mt-4 text-sm font-medium leading-relaxed transition-all duration-300">
                {desc}
            </p>
        </div>
    );
}