"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export default function TechnologyFaq(): JSX.Element {
    const [openId, setOpenId] = useState<number | null>(1);

    const faqs: FaqItem[] = [
        {
            id: 1,
            question: "What dental technologies are used at Eledent Dental Hospital?",
            answer:
                "Eledent Dental Hospital uses advanced dental technology such as CEREC, CAD-CAM, CBCT, OPG, CEPH, intraoral scanners, Digital Smile Design, microscopic dentistry, Guided Biofilm Therapy, conscious sedation, integrated implantology, and Zoom teeth whitening.",
        },
        {
            id: 2,
            question: "How does CEREC single visit dentistry help patients?",
            answer:
                "CEREC single visit dentistry helps patients complete selected restorations in one appointment instead of making multiple visits. It uses digital scanning and CAD-CAM dentistry to design and prepare suitable restorations with more speed and precision.",
        },
        {
            id: 3,
            question: "What is CBCT used for in dental treatment?",
            answer:
                "CBCT is used to create detailed 3D dental images that help dentists assess bone support, tooth position, jaw structure, and surrounding areas. It is especially useful for dental implants in Hyderabad, orthodontic planning, and oral surgery.",
        },
        {
            id: 4,
            question: "Are intraoral scanners better than traditional dental impressions?",
            answer:
                "Intraoral scanners are often more comfortable than traditional impressions because they create digital scans without messy materials. They also improve accuracy for crowns, aligners, implants, and smile correction treatment planning.",
        },
        {
            id: 5,
            question: "How does microscopic dentistry improve treatment?",
            answer:
                "Microscopic dentistry improves treatment by giving dentists a magnified view of fine details inside the tooth and treatment area. This helps support more precise root canal treatment, restorative care, and preservation of healthy tooth structure.",
        },
        {
            id: 6,
            question: "What is Guided Biofilm Therapy used for?",
            answer:
                "Guided Biofilm Therapy is used for advanced preventive dental cleaning and biofilm removal. It helps improve gum health, supports implant and braces maintenance, and offers a more targeted cleaning approach than routine polishing alone.",
        },
        {
            id: 7,
            question: "Is conscious sedation available for anxious dental patients?",
            answer:
                "Yes. Conscious sedation at Eledent Dental Hospital helps anxious dental patients feel calmer and more comfortable during treatment while remaining awake and responsive throughout the procedure.",
        },
        {
            id: 8,
            question: "Why is advanced dental technology important for dental implants?",
            answer:
                "Advanced dental technology helps dentists assess bone, implant position, bite alignment, and surrounding structures more accurately. This improves planning, supports safer implant placement, and helps achieve stronger long-term results.",
        },
        {
            id: 9,
            question: "Can modern dental technology make treatment more comfortable?",
            answer:
                "Yes. Modern dental technology can make treatment more comfortable by reducing manual steps, improving diagnosis, and helping dentists plan procedures more clearly. It can also reduce repeated visits in selected treatments.",
        },
        {
            id: 10,
            question: "Where can I get advanced dental care in Hyderabad?",
            answer:
                "You can visit Eledent Dental Hospital for advanced dental care in Hyderabad. Our specialists use modern digital dentistry to support clearer diagnosis, better planning, and more efficient treatment across a wide range of dental concerns.",
        },
    ];

    const toggleFaq = (id: number) => setOpenId((p) => (p === id ? null : id));

    return (
        <section className="relative w-full overflow-hidden bg-white lg:py-24 py-8">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

            <div className="absolute inset-0 z-0">
                <div className="relative h-full w-[58%]">
                    <Image
                        src="/about-us/faq-image.png"
                        alt="FAQ Background"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 " />

                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1120px] px-6">
                <div className="grid grid-cols-1 items-center lg:gap-16 gap-8 lg:grid-cols-2">

                    <div className="max-w-[520px]">
                        <p className="text-[11px] font-semibold tracking-[0.28em] text-[#f47200]">
                            FAQ
                        </p>

                        <h2 className="mt-4 lg:text-[38px] text-2xl font-extrabold leading-[1.12] text-[#111827]">
                            Need Answers?

                            <br />
                            We’re Here to Help!
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
