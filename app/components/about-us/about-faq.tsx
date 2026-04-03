"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export default function AboutFaq(): JSX.Element {
    const [openId, setOpenId] = useState<number | null>(1);

    const faqs: FaqItem[] = [
        {
            id: 1,
            question: " What kind of dental hospital is Eledent Dental Hospital?",
            answer:
                "Eledent Dental Hospital is a multi-speciality dental hospital in Hyderabad offering specialist-led care under one roof. Patients can visit for advanced dental care in Hyderabad, including dental implants, root canal treatment, braces and aligners, smile makeovers, and kids dentistry.",
        },
        {
            id: 2,
            question: "How many Eledent Dental Hospital branches are there in Hyderabad?",
            answer:
                "Eledent Dental Hospital is a growing dental hospital chain in Hyderabad with five locations, including Kondapur, KPHB, Manikonda, Banjara Hills, and Kompally. This helps patients access expert dental care closer to where they live or work.",
        },
        {
            id: 3,
            question: " What makes Eledent Dental Hospital different from a regular dental clinic?",
            answer:
                "Unlike a single-doctor setup, Eledent Dental Hospital brings multiple dental specialists in Hyderabad under one roof. Patients get clearer diagnosis, better treatment planning, and access to both routine and advanced dental care in one place.",
        },
        {
            id: 4,
            question: " Do different dental specialists work together at Eledent Dental Hospital? ",
            answer:
                "Yes. Eledent Dental Hospital brings implantologists, orthodontists, endodontists, prosthodontists, pedodontists, periodontists, oral surgeons, cosmetic dental surgeons, and general dentists together. This makes it easier to access the right dental specialist in Hyderabad for your concern.",
        },
        {
            id: 5,
            question: " Is Eledent Dental Hospital suitable for both children and adults? ",
            answer:
                "Yes. Eledent Dental Hospital provides dental care for children, teenagers, adults, and senior patients. Families can visit for kids dentistry in Hyderabad, preventive dental care, smile correction, pain relief, and advanced treatments like dental implants in Hyderabad.",
        },
        {
            id: 6,
            question: " What technologies are used at Eledent Dental Hospital?",
            answer:
                "Unlike a single-doctor setup, Eledent Dental Hospital brings multiple dental specialists in Hyderabad under one roof. Patients get clearer diagnosis, better treatment planning, and access to both routine and advanced dental care in one place.",
        },
        {
            id: 7,
            question: " Can I visit Eledent Dental Hospital for both simple and advanced dental treatments?",
            answer:
                "Yes. Patients visit Eledent Dental Hospital for regular check-ups, preventive care, and pain relief, as well as root canal treatment in Hyderabad, braces and aligners in Hyderabad, smile makeovers, and full mouth rehabilitation.",
        },
        {
            id: 8,
            question: " How do I contact Eledent Dental Hospital for a consultation? ",
            answer:
                " You can contact Eledent Dental Hospital by calling 7799619994 or 7799769994. You can also email contact@eledenthospitals.com to book a consultation with one of our dental specialists in Hyderabad. ",
        },
    ];

    const toggleFaq = (id: number) => setOpenId((p) => (p === id ? null : id));

    return (
        <section className="relative w-full overflow-hidden bg-white lg:py-24 py-0 lg:pb-24 pb-16">
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
                <div className="grid grid-cols-1 items-center lg:gap-16 gap-10 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px]">
                        <p className="lg:text-2xl text-sm font-semibold tracking-[0.28em] text-[#f47200]">
                            FAQ
                        </p>

                        <h2 className="mt-4 lg:text-[38px] text-xl font-extrabold leading-[1.12] text-[#111827]">
                            Need Answers? We’re
                            <br />
                            Here to Help!
                        </h2>

                        <p className="lg:mt-6 mt-2 max-w-[430px] text-[13px] leading-6 text-[#6B7280]">
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
