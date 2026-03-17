"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export default function TourismFaq(): JSX.Element {
    const [openId, setOpenId] = useState<number | null>(1);

    const faqs: FaqItem[] = [
        {
            id: 1,
            question: "Why do international patients choose dental tourism in Hyderabad?",
            answer:
                "International patients choose dental tourism in Hyderabad for affordable treatment, experienced dentists, advanced technology, and easier treatment planning without long waiting periods. Hyderabad also offers good travel connectivity, accommodation options, and access to modern dental care in one city.",
        },
        {
            id: 2,
            question: "Why is India a popular destination for dental tourism?",
            answer:
                "Dental tourism in India is popular because patients can access advanced dental treatments at lower costs compared to many countries. India also offers qualified dentists, modern dental technology, favourable exchange value, and a wide range of restorative and cosmetic dental treatments.",
        },
        {
            id: 3,
            question: "What treatments are available under dental tourism at Eledent Dental Hospital?",
            answer:
                "At Eledent Dental Hospital, international patients can plan treatments such as dental implants, root canal treated teeth, veneers, smile correction, fractured tooth restoration, gap closure, and cosmetic dental procedures. The treatment plan depends on the patient’s dental condition, goals, and travel schedule.",
        },
        {
            id: 4,
            question: "How does Eledent Dental Hospital help international dental patients before they travel?",
            answer:
                "Before travel, the team at Eledent Dental Hospital can arrange an e-consultation, review your dental X-rays or scans, and explain the overall treatment plan and expected cost. This helps international patients plan their visit with more clarity before coming to Hyderabad.",
        },
        {
            id: 5,
            question: "Can Eledent Dental Hospital help with visa, travel, and accommodation for dental tourism?",
            answer:
                "Yes. For dental tourism in Hyderabad, Eledent Dental Hospital can guide patients with visa-related information, travel planning, and accommodation support. The team can also assist with pre-treatment coordination and help patients manage their visit more smoothly.",
        },
        {
            id: 6,
            question: "Is Hyderabad a good city for dental tourism in India?",
            answer:
                "Yes. Hyderabad is one of the preferred cities for dental tourism in India because it combines advanced dental care, good infrastructure, airport connectivity, accommodation options, and a strong mix of modern convenience and cultural experience.",
        },
        {
            id: 7,
            question: "How do I start planning dental treatment in Hyderabad with Eledent Dental Hospital?",
            answer:
                "You can start by contacting Eledent Dental Hospital through WhatsApp, call, or enquiry form. After that, the team can schedule an e-consultation, review your reports, and help you plan the treatment timeline before you book your travel.",
        },
        {
            id: 8,
            question: "Can I get a treatment plan and cost estimate before travelling to India?",
            answer:
                "Yes. If you already have dental X-rays or scan copies, you can send them to Eledent Dental Hospital for evaluation. Based on the findings, the team can suggest the likely treatment plan, estimated cost, and the steps required during your dental tourism visit.",
        },
        {
            id: 9,
            question: "Is communication easy for international patients at Eledent Dental Hospital?",
            answer:
                "Yes. The page states that doctors and staff are proficient in English, and language translator support can also be arranged if required. This makes international dental treatment in Hyderabad easier to plan and understand.",
        },
        {
            id: 10,
            question: "Why choose Eledent Dental Hospital for dental tourism in Hyderabad?",
            answer:
                "Patients choose Eledent Dental Hospital for dental tourism in Hyderabad because it combines specialist-led treatment, digital dentistry, competitive pricing, accommodation support, and a smoother treatment journey for international patients from consultation to follow-up.",
        },
    ];

    const toggleFaq = (id: number) => setOpenId((p) => (p === id ? null : id));

    return (
        <section className="relative w-full overflow-hidden bg-white lg:py-24 py-6">
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
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px]">
                        <p className="text-[11px] font-semibold tracking-[0.28em] text-[#f47200]">
                            FAQ
                        </p>

                        <h2 className="mt-4 lg:text-[38px] text-2xl font-extrabold leading-[1.12] text-[#111827]">
                            Need Answer? We’re
                            <br />
                            Here to Help
                        </h2>

                        {/* <p className="lg:mt-6 mt-3 max-w-[430px] text-[13px] leading-6 text-[#6B7280]">
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
                                        <div className="bg-[#E5E7EB] px-6 py-5 text-sm leading-5 text-[#6B7280]">
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
