"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export default function FacilitiesFaq(): JSX.Element {
    const [openId, setOpenId] = useState<number | null>(1);

const faqs: FaqItem[] = [
    {
        id: 1,
        question: "What facilities are available at Eledent Dental Hospital?",
        answer:
            "Eledent Dental Hospital offers patient-focused facilities such as a comfortable reception area, in-house pharmacy, hygienic cafeteria, spacious waiting area, executive lounges, dress-up rooms, massage chairs, valet parking, and digital dental diagnostics to support a smoother dental visit.",
    },
    {
        id: 2,
        question: "Does Eledent Dental Hospital provide advanced diagnostic facilities?",
        answer:
            "Yes. Eledent Dental Hospital provides advanced diagnostic support as part of its dental hospital facilities in Hyderabad. This includes digital dental X-rays and modern infrastructure that help dentists assess the problem quickly and plan treatment more clearly.",
    },
    {
        id: 3,
        question: "Is Eledent Dental Hospital designed for patient comfort during treatment?",
        answer:
            "Yes. Patient comfort is a key part of the facilities at Eledent Dental Hospital. The hospital includes a comfortable ambience, air purifiers, aromatherapy support, furnished waiting spaces, and other comfort-focused features to help patients feel more at ease during their visit.",
    },
    {
        id: 4,
        question: "Does Eledent Dental Hospital have an in-house pharmacy?",
        answer:
            "Yes. Eledent Dental Hospital has an in-house pharmacy so patients can access prescribed medicines more conveniently after consultation or treatment. This makes the overall treatment experience more organised and time-saving.",
    },
    {
        id: 5,
        question: "Are there waiting and lounge facilities for patients and attendants?",
        answer:
            "Yes. Eledent Dental Hospital provides a spacious waiting area, executive lounges, and patient-friendly sitting spaces. These facilities are designed to make waiting more comfortable for both patients and accompanying family members.",
    },
    {
        id: 6,
        question: "Does Eledent Dental Hospital offer parking for patients?",
        answer:
            "Yes. Eledent Dental Hospital offers valet parking support, making it easier for patients and visitors to access the hospital without added parking stress during their appointment.",
    },
    {
        id: 7,
        question: "Are safety and hygiene standards maintained at Eledent Dental Hospital?",
        answer:
            "Yes. Eledent Dental Hospital follows strong hygiene and sterilisation standards to support safe dental care. The hospital also maintains uninterrupted electricity backup and clinical infrastructure designed to support smooth treatment without avoidable interruptions.",
    },
    {
        id: 8,
        question: "Does Eledent Dental Hospital have facilities for international or long-visit patients?",
        answer:
            "Yes. Eledent Dental Hospital offers comfort-oriented facilities such as a cafeteria, freshening-up spaces, waiting lounges, and coordinated patient support, which can be especially useful for patients visiting for longer treatments or dental tourism in Hyderabad.",
    },
];

    const toggleFaq = (id: number) => setOpenId((p) => (p === id ? null : id));

    return (
        <section className="relative w-full overflow-hidden bg-white lg:py-24 py-12">
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
                            Need Answers?
                            <br />
                            We’re Here to Help!
                        </h2>

                        <p className="mt-6 max-w-[430px] text-base leading-6 text-[#6B7280]">

                            Get quick answers to common dental concerns and next steps.
                        </p>
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
