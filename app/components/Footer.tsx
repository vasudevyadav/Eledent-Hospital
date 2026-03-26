"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type JSX } from "react";

type FooterLink = { name: string; href: string };

type ApiItem =
    | {
        id?: number | string;
        name?: string;
        title?: string;
        slug?: string;
        link?: string;
        url?: string;
        href?: string;
        post_name?: string;
        post_title?: string;
        service_name?: string;
    }
    | any;

function toSlug(input: string) {
    return input
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export default function Footer(): JSX.Element {
    const [servicesItems, setServicesItems] = useState<FooterLink[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function loadServices() {
            try {
                setLoading(true);

                const res = await fetch(
                    "https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/services",
                    { cache: "no-store" }
                );

                const data: ApiItem[] = await res.json();

                const list: ApiItem[] = Array.isArray(data)
                    ? data
                    : Array.isArray((data as any)?.data)
                        ? (data as any).data
                        : Array.isArray((data as any)?.services)
                            ? (data as any).services
                            : [];

                const mapped = list
                    .map((s) => {
                        const label = String(
                            s?.name || s?.title || s?.service_name || s?.post_title || ""
                        ).trim();

                        if (!label) return null;

                        const direct =
                            (typeof s?.href === "string" && s.href) ||
                            (typeof s?.link === "string" && s.link) ||
                            (typeof s?.url === "string" && s.url);

                        let href = "";
                        if (direct) {
                            try {
                                const u = new URL(direct);
                                href = u.pathname || direct;
                            } catch {
                                href = direct;
                            }
                        } else {
                            const slug = String(s?.slug || s?.post_name || toSlug(label)).trim();
                            href = `/services/${slug}`;
                        }

                        return { name: label, href };
                    })
                    .filter(Boolean) as FooterLink[];

                mapped.sort((a, b) => a.name.localeCompare(b.name));

                if (!cancelled) setServicesItems(mapped);
            } catch {
                if (!cancelled) setServicesItems([]);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadServices();

        return () => {
            cancelled = true;
        };
    }, []);

    const quickLinks: FooterLink[] = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Dental Tourism", href: "/dental-tourism" },
        { name: "Technology", href: "/technology" },
        { name: "Facilities", href: "/facilities" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms And Conditions", href: "/terms-and-conditions" },
        { name: "Blogs", href: "/blog" },
    ];

    const phoneNumber = "+919983868366";
    const whatsappNumber = "919983868366";
    const bookAppointmentLink = "/contact-us";

    return (
        <>
            <footer className="relative w-full">
                <div className="bg-gradient-to-b from-[#e46d2b] to-[#E87733] text-white">
                    <div className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                            {/* LOGO */}
                            <div className="mt-2 md:col-span-3">
                                <Link href="/" className="inline-flex items-start">
                                    <Image
                                        src="/home/White-Logo.webp"
                                        alt="Eledent"
                                        width={220}
                                        height={80}
                                        className="h-auto w-[180px] sm:w-[200px]"
                                        priority
                                    />
                                </Link>
                            </div>

                            {/* SERVICES */}
                            <div className="md:col-span-4">
                                <h3 className="text-xl font-semibold opacity-90">Services</h3>

                                <ul className="mt-4 space-y-3 text-[15px] leading-5">
                                    {loading ? (
                                        <>
                                            {Array.from({ length: 6 }).map((_, i) => (
                                                <li key={i} className="text-white/70">
                                                    Loading...
                                                </li>
                                            ))}
                                        </>
                                    ) : servicesItems.length ? (
                                        servicesItems.map((item) => (
                                            <li key={item.href + item.name} className="flex gap-2">
                                                <span className="mt-[6px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-white/85" />
                                                <Link
                                                    href={item.href}
                                                    className="break-words hover:underline hover:underline-offset-4"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-white/80">Services load nahi ho paaye.</li>
                                    )}
                                </ul>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-semibold opacity-90">Quick Links</h3>

                                <ul className="mt-4 space-y-3 text-[15px] leading-5">
                                    {quickLinks.map((item) => (
                                        <li key={item.href + item.name} className="flex gap-2">
                                            <span className="mt-[6px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-white/85" />
                                            <Link
                                                href={item.href}
                                                className="break-words hover:underline hover:underline-offset-4"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CONTACT */}
                            <div className="md:col-span-3">
                                <h3 className="text-xl font-semibold opacity-90">Contact Us</h3>

                                <div className="mt-4 space-y-2 text-[15px] leading-5">
                                    <div className="opacity-95">09:00 AM To 09:00 PM</div>

                                    <a
                                        href="mailto:contact@eledenthospitals.com"
                                        className="block break-words opacity-95 hover:underline hover:underline-offset-4"
                                    >
                                        contact@eledenthospitals.com
                                    </a>

                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="block opacity-95 hover:underline hover:underline-offset-4"
                                    >
                                        +91 99838 68366
                                    </a>
                                </div>

                                <div className="mt-4 flex items-center gap-2">
                                    <a
                                        href="https://www.facebook.com/EledentHospitals/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="grid h-8 w-8 place-items-center rounded-[5px] bg-white"
                                    >
                                        <Image
                                            src="/home/facebook.png"
                                            alt="Facebook"
                                            className="h-3 w-3 sm:h-6 sm:w-6"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/eledenthospitals/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="grid h-8 w-8 place-items-center rounded-[5px] bg-white"
                                    >
                                        <Image
                                            src="/home/instagram.png"
                                            alt="Instagram"
                                            className="h-3 w-3 sm:h-6 sm:w-6"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>

                                    <a
                                        href="https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="YouTube"
                                        className="grid h-8 w-8 place-items-center rounded-[5px] bg-white"
                                    >
                                        <Image
                                            src="/home/youtube.png"
                                            alt="YouTube"
                                            className="h-3 w-3 sm:h-6 sm:w-6"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-white/20" />
                </div>

                <div className="bg-gradient-to-b from-[#e46d2b] to-[#E87733] py-4 text-center text-white lg:mb-0 mb-16">
                    <h3 className="text-base leading-snug">
                        <a href="/">© 2026 ELEDENT HOSPITALS LLP.</a> All rights reserved.
                    </h3>
                </div>
            </footer>


        </>
    );
}