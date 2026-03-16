"use client";

import Image from "next/image";
import type { JSX } from "react";

type AwardItem = {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
    date?: string;
};

const awardsData: AwardItem[] = [
    {
        id: 1,
        image: "/home/home-blog.png",
        alt: "Best Dental Excellence Award",
        title: "Best Dental Excellence Award",
        description:
            "Recognised for quality patient care, advanced treatment standards, and trusted clinical outcomes.",
        date: "Mar 06, 2026",
    },
    {
        id: 2,
        image: "/home/home-blog.png",
        alt: "Trusted Patient Care Recognition",
        title: "Trusted Patient Care Recognition",
        description:
            "Awarded for compassionate support, treatment transparency, and a patient-first approach.",
        date: "Mar 06, 2026",
    },
    {
        id: 3,
        image: "/home/home-blog.png",
        alt: "Clinical Innovation Award",
        title: "Clinical Innovation Award",
        description:
            "Honoured for modern diagnostics, advanced technology, and better treatment planning.",
        date: "Mar 06, 2026",
    },
];

export default function AwardsSection(): JSX.Element {
    return (
        <section className="w-full bg-[#f8f8f8] py-8 lg:py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                <div className="mb-8 text-center lg:mb-12">
                    <p className="mx-auto w-fit rounded-full bg-[#f36d00] px-4 py-1 text-sm font-semibold text-white">
                        OUR AWARDS
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                        Recognition That Reflects Our Care
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                        Our commitment to patient care, clinical quality, and modern treatment
                        standards has earned trust and recognition.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {awardsData.map((award) => (
                        <AwardCard key={award.id} award={award} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AwardCard({ award }: { award: AwardItem }): JSX.Element {
    return (
        <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
            <div className="relative h-[250px] w-full">
                <Image
                    src={award.image}
                    alt={award.alt}
                    fill
                    className="object-cover"
                />

                {award.date ? (
                    <div className="absolute bottom-0 right-0 rounded-tl-xl bg-[#f36d00] px-4 py-1.5 text-xs font-medium text-white">
                        {award.date}
                    </div>
                ) : null}
            </div>

            <div className="p-5 lg:p-6">
                <h3 className="text-xl font-semibold leading-snug text-[#f36d00] line-clamp-1">
                    {award.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                    {award.description}
                </p>
            </div>
        </div>
    );
}