"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

type BlogFaqProps = {
    tag?: string;
    heading?: string;
    description?: string;
    backgroundImage?: string;
    items?: FaqItem[];
};

export default function BlogFaq({
    tag = "FAQ",
    heading = "Need Answer? We’re Here to Help",
    description = "Find quick answers to common questions about appointments, visits, and dental care.",
    backgroundImage = "/about-us/faq-image.png",
    items = [],
}: BlogFaqProps): JSX.Element {
    const [openId, setOpenId] = useState<string | null>(items?.[0]?.id || null);

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative w-full overflow-hidden bg-white lg:py-12 py-10 lg:pb-24 pb-16">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

            <div className="absolute inset-0 z-0 hidden lg:block">
                <div className="relative h-full w-[58%]">
                    <Image
                        src={backgroundImage}
                        alt="FAQ Background"
                        fill
                           unoptimized
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0" />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1120px] px-6">
                <div className="grid grid-cols-1 items-center lg:gap-16 gap-10 lg:grid-cols-2">
                    <div className="max-w-[520px]">
                        <p className="lg:text-2xl text-sm font-semibold tracking-[0.28em] text-[#f47200]">
                            {tag}
                        </p>

                        <h2 className="mt-4 lg:text-[38px] text-2xl font-extrabold leading-[1.12] text-[#111827]">
                            {heading}
                        </h2>

                        <p className="lg:mt-6 mt-2 max-w-[430px] text-[13px] leading-6 text-[#6B7280]">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-5">
                        {items.length > 0 ? (
                            items.map((faq, index) => {
                                const isOpen = openId === faq.id;

                                return (
                                    <div
                                        key={faq.id}
                                        className="overflow-hidden rounded-[12px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(faq.id)}
                                            className={`flex w-full items-center justify-between px-6 py-[18px] text-left text-[13px] font-semibold transition ${isOpen
                                                ? "bg-[#f47200] text-white"
                                                : "bg-white text-[#374151]"
                                                }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className={isOpen ? "text-white" : "text-[#9CA3AF]"}>
                                                    {index + 1}.
                                                </span>
                                                <span className={isOpen ? "text-white" : "text-[#374151]"}>
                                                    {faq.question}
                                                </span>
                                            </span>

                                            <span
                                                className={`grid h-7 w-7 place-items-center rounded-[6px] text-[14px] leading-none ${isOpen
                                                    ? "bg-[#111827] text-white"
                                                    : "bg-[#f47200] text-white"
                                                    }`}
                                            >
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="bg-[#E5E7EB] px-6 py-5 text-[11px] leading-5 text-[#6B7280]">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="rounded-[12px] bg-white p-6 text-sm text-[#6B7280] shadow-[0_14px_30px_rgba(0,0,0,0.10)]">
                                No FAQs available.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}