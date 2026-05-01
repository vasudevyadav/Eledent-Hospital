"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/lib/doctors-data";

type AccordionItem = {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
};

function AccordionPanel({ items }: { items: AccordionItem[] }) {
    const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");

    return (
        <div className="divide-y divide-gray-100 border border-gray-200 rounded-2xl overflow-hidden">
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div key={item.id}>
                        <button
                            onClick={() => setOpenId(isOpen ? "" : item.id)}
                            className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-white hover:bg-orange-50 transition-colors text-left"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-[#f47200] shrink-0">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`text-[#f47200] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        {/* grid-rows trick: 0fr→1fr gives flicker-free smooth expand */}
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-4 sm:px-6 py-5 bg-orange-50/40">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function DoctorDetail({ doctor }: { doctor: Doctor }) {
    const initials = doctor.name
        .replace("Dr. ", "")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    const accordionItems: AccordionItem[] = [
        {
            id: "personal",
            title: "Personal Information",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            content: (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                    {[
                        { label: "Phone", value: doctor.phone },
                        { label: "Email", value: doctor.email },
                        { label: "Website", value: doctor.website },
                        { label: "Branch", value: doctor.branch },
                        { label: "Consultation Fee", value: doctor.consultationFee },
                        { label: "Visiting Days", value: doctor.visitingDays },
                        { label: "Visiting Time", value: doctor.visitingTime },
                        { label: "Languages Known", value: doctor.languages.join(", ") },
                        { label: "MediBuddy Discount", value: `${doctor.medibuddyDiscount} Discount` },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex flex-col gap-0.5">
                            <dt className="text-xs font-semibold text-[#f47200] uppercase tracking-wide">{label}</dt>
                            <dd className="text-slate-700 font-medium">{value}</dd>
                        </div>
                    ))}
                </dl>
            ),
        },
        {
            id: "expertise",
            title: "Areas Of Expertise",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            content: (
                <ul className="space-y-3">
                    {doctor.expertise.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#f47200] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="lg:my-6 my-4 lg:mx-24 mx-6 lg:mt-40 mt-36">
                <section className="relative z-0 lg:h-[500px] h-[300px] w-full overflow-hidden rounded-3xl">
                    <Image
                        src="/about-us/about-us.jpg"
                        alt={doctor.name}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-white text-4xl md:text-5xl font-semibold">
                            {doctor.name}
                        </h1>
                        <p className="mt-3 text-orange-400 text-base md:text-lg font-medium">
                            {doctor.post} · {doctor.education} · {doctor.experience}
                        </p>
                    </div>
                </section>
            </div>

            <div className="lg:mx-24 mx-4 sm:mx-6 mt-8 mb-16">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 flex-wrap">
                    <Link href="/doctors" className="hover:text-[#f47200] transition-colors">Our Doctors</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-none">{doctor.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left — doctor profile card */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-32 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                            {/* Photo */}
                            <div className="relative h-64 sm:h-80 w-full bg-gradient-to-br from-orange-50 to-orange-100">
                                {doctor.image ? (
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-7xl font-bold text-orange-300">{initials}</span>
                                    </div>
                                )}
                            </div>

                            {/* Name / title */}
                            <div className="p-5 sm:p-6">
                                <p className="text-xl font-bold text-slate-900">{doctor.name}</p>
                                <p className="mt-1 text-sm font-semibold text-[#f47200] uppercase tracking-wide">{doctor.post}</p>
                                <p className="mt-1 text-sm text-slate-500">{doctor.education} · {doctor.experience}</p>

                                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f47200] shrink-0">
                                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{doctor.branch} Branch</span>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f47200] shrink-0">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.5 19.79 19.79 0 0 1 1.1 4.82 2 2 0 0 1 3.09 2.64h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
                                    </svg>
                                    <span>{doctor.phone}</span>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Right — accordion */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <span className="inline-flex bg-[#f47200] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-white rounded">
                                Doctor Profile
                            </span>
                            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                                About {doctor.name}
                            </h2>
                            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                {doctor.education}, {doctor.post} with {doctor.experience.toLowerCase()} at Eledent Dental Hospital, {doctor.branch}.
                            </p>
                        </div>

                        <AccordionPanel items={accordionItems} />
                    </div>
                </div>
            </div>
        </div>
    );
}
