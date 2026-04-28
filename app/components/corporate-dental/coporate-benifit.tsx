"use client";

import Image from "next/image";
import type { FC } from "react";


type MVItem = {
    id: "vision" | "mission";
    title: string;
    desc: string;
    image: string;
};

type BenefitItem = {
    id: string;
    title: string;
    desc: string;
    icon: string;
};

type EmployeeBenefitPoint = {
    id: string;
    label: string;
    desc: string;
};

const MV_ITEMS: MVItem[] = [
    {
        id: "vision",
        title: "Vision",
        desc: "To create a dental care experience where every patient feels informed, comfortable, and confident about treatment through specialist expertise, modern technology, and patient-first care.",
        image: "/about-us/vision.png",
    },
    {
        id: "mission",
        title: "Mission",
        desc: "To deliver multi-speciality dental care with clear diagnosis, precise treatment planning, and modern dentistry that supports healthier, long-lasting smiles.",
        image: "/about-us/mission.png",
    },
];

const BENEFIT_ITEMS: BenefitItem[] = [
    {
        id: "preventive",
        title: "Better Preventive Care",
        desc: "Workplace dental camps help identify problems before they become painful, urgent, or more expensive.",
        icon: "/healthcare.png",
    },
    {
        id: "employee",
        title: "Improved Employee Support",
        desc: "Employees value benefits that are easy to understand, easy to use, and clearly helpful in real life.",
        icon: "/service.png",
    },
    {
        id: "wellness",
        title: "Stronger Wellness Positioning",
        desc: "A dental wellness partnership strengthens your company's employee health support in a visible and practical way.",
        icon: "/veteran.png",
    },
    {
        id: "delays",
        title: "Reduced Delays in Treatment",
        desc: "Employees are more likely to act on dental concerns when screening and treatment benefits are already in place.",
        icon: "/expired.png",
    },
];

const EMPLOYEE_BENEFIT_POINTS: EmployeeBenefitPoint[] = [
    {
        id: "onsite",
        label: "On-Site Dental Screening",
        desc: "Employees can attend workplace dental camps without needing to plan a separate clinic visit.",
    },
    {
        id: "cost",
        label: "Cost Benefit on Treatments",
        desc: "The 15% treatment benefit helps reduce the financial barrier to further dental care.",
    },
    {
        id: "specialist",
        label: "Access to Specialist Care",
        desc: "Employees can consult the right dental specialist without moving between multiple clinics.",
    },
    {
        id: "flexible",
        label: "Flexible Visit Convenience",
        desc: "With Eledent centres across Hyderabad, employees can choose the location most convenient for them.",
    },
];


const CorporateTieUpBenefits: FC = () => {
    return (
        <section className="px-4 lg:px-10 py-6 lg:py-16 mt-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#E67735] rounded-[18px] px-6 sm:px-10 lg:px-16 py-10 lg:py-14">

                    <div className="text-center mb-10">
                        <h2 className="text-white font-extrabold text-xl lg:text-4xl leading-tight">
                            Corporate Dental Tie-Ups Benefits for Organisations
                        </h2>
                        <p className="text-white/90 text-sm lg:text-base font-medium mt-3 max-w-[700px] mx-auto leading-relaxed">
                            A corporate dental tie-up adds real-time value to your employee wellness program by
                            making dental care more accessible and easier to act on.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
                        {BENEFIT_ITEMS.map((item) => (
                            <div key={item.id} className="flex flex-col items-start gap-3">
                                <div className="w-18 h-18 rounded-full mx-auto flex items-center justify-center shrink-0">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                        className="w-14 object-contain brightness-0 invert"
                                    />
                                </div>
                                <h4 className="text-white font-bold text-sm sm:text-base text-center leading-snug w-full">
                                    {item.title}
                                </h4>
                                <p className="text-white/80 text-xs sm:text-sm leading-relaxed text-center">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

const CorporateTieUpEmployees: FC = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-16 py-2 lg:py-6 mb-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <div className="overflow-hidden rounded-2xl lg:rounded-[24px] shadow-lg">
                        <Image
                            src="/corporate-employe.webp"
                            alt="Corporate dental tie-up for employees"
                            width={1200}
                            height={1000}
                            priority
                            className="w-full h-[320px] lg:h-[560px] object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-600 leading-tight">
                            Corporate Dental Tie-Ups for Your Employees
                        </h2>

                        <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mt-4 max-w-xl">
                            Earlier access to dental care helps with treatment savings and assists employees move
                            from ignoring a dental issue to getting it checked and treated on time.
                        </p>

                        <ul className="mt-10 space-y-4">
                            {EMPLOYEE_BENEFIT_POINTS.map((point) => (
                                <li key={point.id} className="flex items-start gap-3">
                                    <span className="mt-[7px] w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                                    <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">
                                        <span className="font-bold text-gray-800">{point.label}</span>
                                        {" – "}
                                        {point.desc}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
const CorporateBenefitPage: FC = () => {
    return (
        <>
            <CorporateTieUpBenefits />
            <CorporateTieUpEmployees />
        </>
    );
};

export default CorporateBenefitPage;