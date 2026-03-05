"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export default function HomeFaq(): JSX.Element {
    const [openId, setOpenId] = useState<number | null>(1);

    const faqs: FaqItem[] = [
        {
            id: 1,
            question: "Do I need to make an appointment before visiting?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            id: 2,
            question: "Do I need to make an appointment before visiting?",
            answer:
                "Regular outpatient services are available Monday through Friday from 8:00 AM to 6:00 PM.",
        },
        {
            id: 3,
            question: "Do I need to make an appointment before visiting?",
            answer:
                "We offer a comprehensive range of medical services including cardiology, neurology, orthopedics and more.",
        },
    ];

    const toggleFaq = (id: number) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="relative w-full overflow-hidden bg-white py-12 lg:py-16">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

            <div className="absolute inset-0 z-0 hidden lg:block">
                <div className="relative h-full w-[58%] xl:w-[54%]">
                    <Image
                        src="/about-us/faq-image.png"
                        alt="FAQ Background"
                        fill
                        priority
                        className="object-cover object-left"
                    />
                    {/* subtle fade into white */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/25 to-white" />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-6">
                <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px]">
                        <p className="text-sm sm:text-base lg:text-xl font-semibold tracking-[0.2em] sm:tracking-[0.24em] lg:tracking-[0.28em] text-[#f47200]">
                            FAQ
                        </p>

                        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#111827]">
                            Need Answer? We’re
                            <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            Here to Help
                        </h2>

                        <p className="mt-3 max-w-[430px] text-sm sm:text-[15px] leading-6 text-[#6B7280]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                        </p>
                    </div>

                    {/* RIGHT FAQ LIST */}
                    <div className="space-y-4 sm:space-y-5">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id;
                            const panelId = `faq-panel-${faq.id}`;
                            const buttonId = `faq-button-${faq.id}`;

                            return (
                                <div
                                    key={faq.id}
                                    className="overflow-hidden rounded-xl sm:rounded-[12px] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.08)] sm:shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                                >
                                    {/* HEADER */}
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggleFaq(faq.id)}
                                        className={`flex w-full items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-[18px] text-left text-sm font-semibold transition-colors
                    ${isOpen
                                                ? "bg-[#f47200] text-white"
                                                : "bg-white text-[#374151]"
                                            }`}
                                    >
                                        <span className="flex min-w-0 items-start gap-2">
                                            <span
                                                className={`shrink-0 ${isOpen ? "text-white" : "text-[#9CA3AF]"
                                                    }`}
                                            >
                                                {faq.id}.
                                            </span>
                                            <span
                                                className={`leading-5 break-words ${isOpen ? "text-white" : "text-[#374151]"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>
                                        </span>

                                        {/* +/- square */}
                                        <span
                                            className={`grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-md sm:rounded-[6px] text-base leading-none
                      ${isOpen
                                                    ? "bg-[#111827] text-white"
                                                    : "bg-[#f47200] text-white"
                                                }`}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {/* BODY */}
                                    {isOpen && (
                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            className="bg-[#E5E7EB] px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-[13px] leading-5 sm:leading-6 text-[#6B7280]"
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}