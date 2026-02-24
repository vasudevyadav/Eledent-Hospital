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
                "Eleifend aliquet enim ultrices nullam. Pellentesque ultrices amet eget nibh. Est accumsan vitae vulputate sed mattis pellentesque. Gravida est lorem ultrices in blandit amet sollicitudin. Eget purus molestie bibendum egestas pretium sit.",
        },
        {
            id: 2,
            question: "What are the operating hours of this hospital/clinic?",
            answer:
                "Our hospital is open 24/7 for emergency services. Regular outpatient services are available Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM.",
        },
        {
            id: 3,
            question: "What medical services are offered here?",
            answer:
                "We offer a comprehensive range of medical services including cardiology, neurology, orthopedics, pediatrics, general surgery, emergency care, diagnostic imaging, and laboratory services.",
        },
    ];

    const toggleFaq = (id: number) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="relative w-full bg-white py-24">
            {/* Left faint stethoscope bg (replace src with your asset) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-full w-[55%]">
                    <Image
                        src="/home/faq-bg.png" // <-- replace with your stethoscope bg
                        alt=""
                        fill
                        priority={false}
                        className="object-cover opacity-20"
                    />
                    {/* soft white fade like screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
                </div>
            </div>

            <div className="relative mx-auto max-w-[1120px] px-6">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                    {/* Left */}
                    <div className="max-w-[520px]">
                        <div className="text-[11px] font-semibold tracking-[0.22em] text-[#f47200]">
                            FAQ
                        </div>

                        <h2 className="mt-4 text-[36px] font-extrabold leading-[1.15] text-slate-900 sm:text-[42px]">
                            Need Answers? We’re
                            <br />
                            Here to Help
                        </h2>

                        <p className="mt-6 text-[14px] leading-7 text-slate-500">
                            Urna sed elementum lacus netus duis sagittis turpis. Dolor sams ultrices magna
                            etiam nulla ut quis ullamcorper iaculis facis bibendum egestas.
                        </p>
                    </div>

                    {/* Right: Accordion */}
                    <div className="space-y-5">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id;

                            return (
                                <div
                                    key={faq.id}
                                    className="overflow-hidden rounded-[12px] bg-white shadow-[0_18px_55px_-42px_rgba(2,6,23,0.35)]"
                                >
                                    {/* Header */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(faq.id)}
                                        aria-expanded={isOpen}
                                        className={[
                                            "flex w-full items-center justify-between gap-4 px-7 py-5 text-left",
                                            "transition-colors",
                                            isOpen ? "bg-[#f47200] text-white" : "bg-white text-slate-900",
                                        ].join(" ")}
                                    >
                                        <span className="text-[13px] font-semibold">
                                            {faq.id}. {faq.question}
                                        </span>

                                        {/* Right icon box (matches screenshot style) */}
                                        <span
                                            className={[
                                                "grid h-8 w-8 shrink-0 place-items-center rounded-[6px]",
                                                isOpen ? "bg-[#111827] text-white" : "bg-[#f47200] text-white",
                                            ].join(" ")}
                                        >
                                            {isOpen ? (
                                                // minus
                                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                                    <path
                                                        d="M5 12h14"
                                                        stroke="currentColor"
                                                        strokeWidth={2.2}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            ) : (
                                                // plus
                                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                                    <path
                                                        d="M12 5v14M5 12h14"
                                                        stroke="currentColor"
                                                        strokeWidth={2.2}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                    </button>

                                    {/* Body */}
                                    <div
                                        className={[
                                            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                                        ].join(" ")}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="bg-[#f5f8ff] px-7 py-5 text-[13px] leading-7 text-slate-600">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
