"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export default function ContactFaq(): JSX.Element {
    const [openId, setOpenId] = useState<number | null>(1);

    const faqs: FaqItem[] = [
        {
            id: 1,
            question: "How can I contact Eledent Dental Hospital for an appointment?",
            answer:
                "You can contact Eledent Dental Hospital by calling +91 7799619994 during working hours. You can also email contact@eledenthospitals.com to enquire about appointments, treatments, or the nearest branch.",
        },
        {
            id: 2,
            question: " What are the working hours of Eledent Dental Hospital in Hyderabad?",
            answer:
                " Eledent Dental Hospital is open Monday to Sunday, from 09:00 AM to 09:00 PM. You can contact the team, book an appointment, or plan your visit during these hours. ",
        },
        {
            id: 3,
            question: " Do I need to book an appointment before visiting Eledent Dental Hospital? ",
            answer:
                "Yes, booking an appointment before visiting Eledent Dental Hospital is recommended. It helps reduce waiting time, improves coordination, and connects you with the right dental specialist more quickly.",
        },
        {
            id: 4,
            question: " How can I choose the nearest Eledent Dental Hospital location? ",
            answer:
                "You can choose the nearest Eledent Dental Hospital location based on your home, workplace, or travel convenience. We’re located at Kondapur, Kukatpally, Manikonda, Banjara Hills and Kompally. If you are unsure, call +91 7799619994 and our team will guide you to the most suitable branch. ",
        },

        {
            id: 5,
            question: " Can I contact Eledent Dental Hospital for dental emergencies? ",
            answer:
                " Yes, you can contact Eledent Dental Hospital for urgent dental concerns such as tooth pain, swelling, broken teeth, or sudden discomfort. Call +91 7799619994 so the team can guide you on the next step as early as possible. ",
        },
    ];

    const toggleFaq = (id: number) => setOpenId((p) => (p === id ? null : id));

    return (
        <section className="relative w-full overflow-hidden bg-white lg:py-16 py-6">
            {/* bottom thin orange line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

            {/* LEFT BACKGROUND IMAGE + FADE (same as screenshot) */}
            <div className="absolute inset-0 z-0">
                <div className="relative h-full w-[58%]">
                    <Image
                        src="/about-us/faq-image.png"
                        alt="FAQ Background"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* make bg very subtle + fade into white on right */}
                    <div className="absolute inset-0 " />

                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1120px] px-6">
                <div className="grid grid-cols-1 items-center lg:gap-16 gap-6 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px]">
                        <p className="text-sm lg:text-2xl font-semibold tracking-[0.28em] text-[#f47200]">
                            FAQ
                        </p>

                        <h2 className="mt-4 lg:text-[38px] text-2xl font-extrabold leading-[1.12] text-[#111827]">
                            Need Answer? We’re
                            <br />
                            Here to Help
                        </h2>

                        {/* <p className="lg:mt-6 max-w-[430px] text-[13px] leading-6 text-[#6B7280]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                        </p> */}
                    </div>

                    {/* RIGHT ACCORDION */}
                    <div className="space-y-5">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id;

                            return (
                                <div
                                    key={faq.id}
                                    className="overflow-hidden rounded-[12px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                                >
                                    {/* HEADER */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(faq.id)}
                                        className={`flex w-full items-center justify-between px-6 py-[18px] text-left text-[13px] font-semibold transition
                      ${isOpen
                                                ? "bg-[#f47200] text-white"
                                                : "bg-white text-[#374151]"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className={`${isOpen ? "text-white" : "text-[#9CA3AF]"}`}>
                                                {faq.id}.
                                            </span>
                                            <span className={`${isOpen ? "text-white" : "text-[#374151]"}`}>
                                                {faq.question}
                                            </span>
                                        </span>

                                        {/* +/- square */}
                                        <span
                                            className={`grid h-7 w-7 place-items-center rounded-[6px] text-[14px] leading-none
                        ${isOpen ? "bg-[#111827] text-white" : "bg-[#f47200] text-white"}
                      `}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {/* BODY */}
                                    {isOpen && (
                                        <div className="bg-[#E5E7EB] px-6 py-5 text-[11px] leading-5 text-[#6B7280]">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* MOBILE: keep it clean (still same look) */}
            <style jsx>{`
        @media (max-width: 1023px) {
          section :global(div[style]) {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
