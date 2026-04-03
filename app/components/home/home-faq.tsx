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
            question: "How do I know which dental treatment I need?",
            answer:
                "The right treatment depends on the cause of the problem, your tooth condition, gum health, and overall dental needs. Visit Eledent Dental Hospital for a consultation so our specialists can examine the issue, take scans if needed, and guide you to the right treatment plan.",
        },
        {
            id: 2,
            question: "Do I need an appointment before visiting Eledent Dental Hospital branches in Hyderabad?",
            answer:
                "Booking an appointment before visiting Eledent Dental Hospital is recommended because it helps reduce waiting time and connects you with the right specialist faster. Call +91 7799619994 or +91 7799619994 to book your appointment at any of the 5 Hyderabad branches most convenient for you.",
        },
        {
            id: 3,
            question: "Do dental specialists at Eledent Dental Hospital treat both children and adults?",
            answer:
                "Yes. Our expert dentists in Hyderabad at Eledent Dental Hospital provide dental care for children, teenagers, adults, and senior patients. You can book an appointment for child dental care, braces, smile correction, pain treatment, or missing teeth solutions based on your family’s needs.",
        },
        {
            id: 4,
            question: "What should I expect during my first visit to Eledent Dental Hospital?",
            answer:
                "Your first visit at the best dental clinic in Hyderabad usually includes a discussion about your concern, a dental examination, and scans or X-rays if required. After that, our team explains the diagnosis, treatment options, expected timeline, and the next step, so you can move forward with clarity. ",
        },
        {
            id: 5,
            question: "Can I visit Eledent Dental Hospital for tooth pain or a dental emergency?",
            answer:
                "Yes. If you have tooth pain, swelling, a broken tooth, gum infection, or sudden discomfort, visit Eledent Dental Hospital as early as possible for prompt evaluation. Our specialists will identify the cause and help you start the right treatment without unnecessary delay.",
        },
        {
            id: 6,
            question: "Do you offer smile correction and cosmetic dental treatments at Eledent Dental Hospital?",
            answer:
                "Yes. Eledent Dental Hospital offers smile-focused treatments such as teeth whitening, veneers, crowns, aligners, and smile makeovers based on your dental condition and cosmetic goals. Book a consultation to understand which option suits your smile best.",
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

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
                    {/* LEFT CONTENT */}
                    <div>
                        <p className="text-sm sm:text-base lg:text-2xl font-semibold tracking-[0.2em] sm:tracking-[0.24em] lg:tracking-[0.28em] text-[#f47200]">
                            FAQ
                        </p>

                        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#111827]">
                            Need Answers? We’re
                            <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            Here to Help!
                        </h2>

                        <p className="mt-3 max-w-[430px] text-sm sm:text-[15px] leading-6 text-[#6B7280]">
                            Get quick answers to common dental concerns and next steps.
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
                                                className={`leading-5 break-words text-[13px] ${isOpen ? "text-white" : "text-[#374151]"
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