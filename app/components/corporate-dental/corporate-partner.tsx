"use client";

import Image from "next/image";
import type { JSX } from "react";

type PartnerCardItem = {
    title: string;
    desc: string;
    iconSrc: string;
    iconAlt?: string;
};

export default function WhyPartner (): JSX.Element {

    const partnerCards: PartnerCardItem[] = [
        {
            title: "19+ Years of Experience",
            desc: "A long-standing dental hospital brand trusted for specialist-led dental care.",
            iconSrc: "/veteran.png",
            iconAlt: "Experience icon",
        },
        {
            title: "Multi-Speciality Dental Team",
            desc: "Implantologists, orthodontists, endodontists, prosthodontists, periodontists, oral surgeons, cosmetic dental surgeons, and general dentists under one roof.",
            iconSrc: "/service.png",
            iconAlt: "Team icon",
        },
        {
            title: "5 Locations Across Hyderabad",
            desc: "Kondapur, KPHB, Manikonda, Banjara Hills, and Kompally for easier employee access.",
            iconSrc: "/healthcare.png",
            iconAlt: "Locations icon",
        },
        {
            title: "Advanced Dental Care",
            desc: "Modern dental technology supports better diagnosis, clearer treatment planning, and efficient care.",
            iconSrc: "/expired.png",
            iconAlt: "Advanced care icon",
        },
        {
            title: "Patient-Friendly Approach",
            desc: "Our team focuses on clear communication, practical treatment guidance, and comfortable care.",
            iconSrc: "/veteran.png",
            iconAlt: "Patient friendly icon",
        },
        {
            title: "Trusted Healthcare Associations",
            desc: "Associated with Vipul Health, Civil Health, and Fourth Lens.",
            iconSrc: "/service.png",
            iconAlt: "Associations icon",
        },
        {
            title: "Support for Recognised Employee Groups",
            desc: "Reimbursement support for Telangana Government employees and recognition for Telangana Electricity Board employees.",
            iconSrc: "/healthcare.png",
            iconAlt: "Employee support icon",
        },
        {
            title: "NABH-Accredited Dental Hospital",
            desc: "A recognised standard of quality, safety, and patient-focused healthcare delivery.",
            iconSrc: "/expired.png",
            iconAlt: "NABH icon",
        },
    ];

    return (
        <section className="w-full bg-white py-4 sm:py-8">
            <div className="mx-auto max-w-7xl">

                <div className="rounded-[22px] bg-[#f4f4f5] px-4 py-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] lg:py-10">

                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-[#f47200] lg:text-4xl mb-2">
                            Why Partner with Eledent Dental Hospital?
                        </h2>
                        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 lg:text-base">
                            Eledent Dental Hospital offers a strong corporate healthcare partnership in Hyderabad because it combines specialist expertise, treatment access, and practical employee benefits.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 sm:gap-5 lg:gap-6">
                        {partnerCards.map((card, idx) => (
                            <PartnerCard key={idx} {...card} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function PartnerCard({ title, desc, iconSrc, iconAlt }: PartnerCardItem): JSX.Element {
    return (

        <>
            <div className="group rounded-xl border border-[#eee] bg-white p-4 text-center transition-all duration-300 hover:border-[#f47200] hover:shadow-[0_6px_24px_-8px_rgba(244,114,0,0.25)] sm:p-5">
                {/* Icon */}
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-xl border border-[#e46713] bg-[#e46713]">
                    <div className="relative w-12 h-12">
                        <Image
                            src={iconSrc}
                            alt={iconAlt || title}
                            fill
                            sizes="28px"
                            className="object-contain"
                        />
                    </div>
                </div>
                <h4 className=" text-sm lg:text-base font-semibold leading-snug text-slate-900">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-4">{desc}</p>
            </div>

        </>
    );
}