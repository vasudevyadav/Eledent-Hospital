"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

type FooterLink = { name: string; href: string };

export default function Footer(): JSX.Element {
    // Services (same as your list, screenshot style)
    const servicesItems: FooterLink[] = [
        { name: "Advanced And Painless Dental Implants", href: "/services/dental-implants" },
        { name: "Atraumatic Extraction", href: "/services/atraumatic-extraction" },
        { name: "Braces & Aligners", href: "/services/braces-aligners" },
        { name: "Dental Crowns", href: "/services/dental-crowns" },
        { name: "Dental Fillings", href: "/services/dental-fillings" },
        { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
        { name: "Single Visit Dentistry", href: "/services/single-visit-dentistry" },
        { name: "Teeth Whitening", href: "/services/teeth-whitening" },
        { name: "Conseous Sedation", href: "/services/conseous-sedation" },
        { name: "Guided Biofilm Therapy (GBT)", href: "/services/guided-biofilm-therapy" },
        { name: "Microscopic Dentistry", href: "/services/microscopic-dentistry" },
        // Screenshot me “KOMPALLY” ke neeche 2 local links dikh rahe the (optional)
        { name: "KOMPALLY", href: "/locations/kompally" },
        { name: "Best Dental Clinic in Kompally, Hyderabad", href: "/best-dental-clinic-in-kompally" },
        { name: "Best Dentist in Kompally, Hyderabad", href: "/best-dentist-in-kompally" },
    ];

    // Quick links (screenshot style)
    const quickLinks: FooterLink[] = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Dental Tourism", href: "/dental-tourism" },
        { name: "Facility", href: "/facilities" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms And Conditions", href: "/terms-and-conditions" },
        { name: "Blogs", href: "/blogs" },
    ];

    return (
        <footer className="relative w-full">
            {/* ORANGE FOOTER BG (match screenshot) */}
            <div className="bg-gradient-to-b from-[#e46d2b] to-[#E87733] text-white">
                <div className="mx-auto max-w-[1180px] px-6 py-10">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                        {/* LOGO */}
                        <div className="md:col-span-3">
                            <Link href="/" className="inline-flex items-start">
                                <Image
                                    src="/White-Logo.webp" // same logo you used
                                    alt="Eledent"
                                    width={220}
                                    height={80}
                                    className="h-auto w-[200px]"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* SERVICES */}
                        <div className="md:col-span-4">
                            <h3 className="text-[13px] font-semibold opacity-90">Services</h3>

                            <ul className="mt-4 space-y-3 text-[12px] leading-5">
                                {servicesItems.map((item) => (
                                    <li key={item.href} className="flex gap-2">
                                        <span className="mt-[6px] inline-block h-[5px] w-[5px] rounded-full bg-white/85" />
                                        <Link href={item.href} className="hover:underline hover:underline-offset-4">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="md:col-span-3">
                            <h3 className="text-[13px] font-semibold opacity-90">Quick Links</h3>

                            <ul className="mt-4 space-y-3 text-[12px] leading-5">
                                {quickLinks.map((item) => (
                                    <li key={item.href} className="flex gap-2">
                                        <span className="mt-[6px] inline-block h-[5px] w-[5px] rounded-full bg-white/85" />
                                        <Link href={item.href} className="hover:underline hover:underline-offset-4">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTACT US */}
                        <div className="md:col-span-2">
                            <h3 className="text-[13px] font-semibold opacity-90">Contact Us</h3>

                            <div className="mt-4 space-y-2 text-[12px] leading-5">
                                <div className="opacity-95">09:00 AM To 09:00 PM</div>

                                <a
                                    href="mailto:contact@eledenthospitals.com"
                                    className="block opacity-95 hover:underline hover:underline-offset-4"
                                >
                                    contact@eledenthospitals.com
                                </a>

                                <a
                                    href="tel:+917799719994"
                                    className="block opacity-95 hover:underline hover:underline-offset-4"
                                >
                                    77996 99994
                                </a>
                            </div>

                            {/* Social icons (small colored squares like screenshot) */}
                            <div className="mt-4 flex items-center gap-2">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="grid h-6 w-6 place-items-center rounded-[3px] bg-[#2d5fd3]"
                                >
                                    <Facebook className="h-3.5 w-3.5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="grid h-6 w-6 place-items-center rounded-[3px] bg-[#1b9bd7]"
                                >
                                    <Instagram className="h-3.5 w-3.5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="grid h-6 w-6 place-items-center rounded-[3px] bg-[#e53935]"
                                >
                                    <Youtube className="h-3.5 w-3.5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom subtle line like screenshot edge */}
                <div className="h-[1px] w-full bg-white/20" />
            </div>

            {/* Chat widget (bottom-right like screenshot) */}
            <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
                <button
                    type="button"
                    className="rounded-full bg-white px-4 py-2 text-[12px] font-medium text-slate-700 shadow-lg"
                >
                    Chat with us 👋
                </button>

                <button
                    type="button"
                    aria-label="Open chat"
                    className="grid h-11 w-11 place-items-center rounded-full bg-[#ff4fa3] text-white shadow-lg"
                >
                    {/* small chat icon */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                        <path
                            d="M7 17l-3 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 8h8M8 11h6"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
        </footer>
    );
}
