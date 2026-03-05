"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
    Mail,
    Clock,
    Instagram,
    Facebook,
    Youtube,
    PhoneCall,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";

type NavLinkItem = {
    type: "link";
    name: string;
    href: string;
};

type NavDropdownItem = {
    type: "dropdown";
    name: string;
    key: "services" | "locations";
    href?: string;
};

type NavItem = NavLinkItem | NavDropdownItem;

type ApiService =
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

export default function Navbar() {
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [locationsOpen, setLocationsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

    // Services from API
    const [servicesItems, setServicesItems] = useState<{ name: string; href: string }[]>([]);
    const [servicesLoading, setServicesLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function loadServices() {
            try {
                setServicesLoading(true);

                const res = await fetch(
                    "https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/services",
                    { cache: "no-store" }
                );

                const data: ApiService[] = await res.json();

                const list: ApiService[] = Array.isArray(data)
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
                    .filter(Boolean) as { name: string; href: string }[];

                mapped.sort((a, b) => a.name.localeCompare(b.name));

                if (!cancelled) setServicesItems(mapped);
            } catch {
                if (!cancelled) setServicesItems([]);
            } finally {
                if (!cancelled) setServicesLoading(false);
            }
        }

        loadServices();
        return () => {
            cancelled = true;
        };
    }, []);

    const locationsItems = useMemo(
        () => [
            { name: "Kondapur", href: "/location/kondapur" },
            { name: "Kukatpally", href: "/location/kukatpally" },
            { name: "Manikonda", href: "/location/manikonda" },
            { name: "Banjara Hills", href: "/location/banjara-hills" },
            { name: "Kompally", href: "/location/kompally" },
        ],
        []
    );

    const navItems: NavItem[] = useMemo(
        () => [
            { type: "link", name: "Home", href: "/" },
            { type: "link", name: "About Us", href: "/about-us" },
            { type: "dropdown", name: "Services", key: "services", href: "/services" }, // ✅ clickable
            { type: "link", name: "Dental Tourism", href: "/dental-tourism" },
            { type: "link", name: "Technology", href: "/technology" },
            { type: "link", name: "Facilities", href: "/facilities" },
            { type: "link", name: "Contact Us", href: "/contact-us" },
            { type: "dropdown", name: "Locations", key: "locations" },
        ],
        []
    );

    const isActive = (path: string) => pathname === path;

    const isServicesActive = pathname.startsWith("/services");
    const isLocationsActive = pathname.startsWith("/location"); // ✅ fix

    const isDropdownActive = (key: NavDropdownItem["key"]) => {
        if (key === "services") return isServicesActive;
        if (key === "locations") return isLocationsActive;
        return false;
    };

    return (
        <header className="w-full">
            {/* TOP BAR */}
            <div className="w-full bg-[#E87733] text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5">
                    <div className="flex items-center gap-x-4 sm:gap-x-8 text-[11px] sm:text-[13px] flex-wrap">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2">
                            <PhoneCall className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <a href="tel:+917799719994" className="hover:underline">
                                +91 77997 19994
                            </a>
                        </span>

                        <span className="hidden sm:inline-flex items-center gap-2">
                            <Mail className="h-4 w-4 flex-shrink-0" />
                            <a href="mailto:contact@eledenthospitals.com" className="hover:underline">
                                contact@eledenthospitals.com
                            </a>
                        </span>

                        <span className="inline-flex items-center gap-1.5 sm:gap-2">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">09:00 am to 09:00 pm</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-sm bg-white transition hover:opacity-90"
                        >
                            <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-[#E87733]" />
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-sm bg-white transition hover:opacity-90"
                        >
                            <Facebook className="h-3 w-3 sm:h-4 sm:w-4 text-[#E87733]" />
                        </a>
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-sm bg-white transition hover:opacity-90"
                        >
                            <Youtube className="h-3 w-3 sm:h-4 sm:w-4 text-[#E87733]" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="w-full bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
                    <Link href="/" className="flex items-center relative z-50">
                        <Image
                            src="/White-Logo.webp"
                            alt="Eledent logo"
                            className=" w-20 lg:w-40 sm:w-32 "
                            width={500}
                            height={500}
                            priority
                        />
                    </Link>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2 text-gray-700 hover:text-[#E87733] transition-colors"
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <nav className="hidden lg:flex items-center relative">
                        <div className="flex items-center gap-8 rounded-full bg-[#E8E5E6] pl-10 pr-40 py-3">
                            <div className="flex items-center gap-2 text-[15px] font-medium text-[#4A4A4A]">
                                {navItems.map((item, idx) => {
                                    const isLast = idx === navItems.length - 1;

                                    const separator = !isLast ? (
                                        <span className="mx-2 text-[#999]" key={`sep-${idx}`}>
                                            •
                                        </span>
                                    ) : null;

                                    if (item.type === "link") {
                                        return (
                                            <span key={item.href} className="flex items-center">
                                                <Link
                                                    href={item.href}
                                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive(item.href) ? "text-[#E87733]" : ""
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                                {separator}
                                            </span>
                                        );
                                    }

                                    if (item.key === "services") {
                                        return (
                                            <span key={item.key} className="flex items-center">
                                                <div
                                                    className="relative"
                                                    onMouseEnter={() => setServicesOpen(true)}
                                                    onMouseLeave={() => setServicesOpen(false)}
                                                >
                                                    <Link
                                                        href={item.href || "/services"}
                                                        className={`flex items-center gap-1 hover:text-[#E87733] whitespace-nowrap transition-colors ${isDropdownActive("services") ? "text-[#E87733]" : ""
                                                            }`}
                                                    >
                                                        {item.name}
                                                        <ChevronDown className="h-3 w-3" />
                                                    </Link>

                                                    {servicesOpen && (
                                                        <div className="absolute top-6 left-0 mt-0 w-[38.5rem] rounded-lg bg-white shadow-xl py-1 z-50 border border-gray-100">
                                                            <div className="grid grid-cols-2 gap-1">
                                                                {servicesLoading ? (
                                                                    <>
                                                                        {Array.from({ length: 8 }).map((_, i) => (
                                                                            <span
                                                                                key={i}
                                                                                className="block px-4 py-2 text-[13px] text-gray-400"
                                                                            >
                                                                                Loading...
                                                                            </span>
                                                                        ))}
                                                                    </>
                                                                ) : servicesItems.length ? (
                                                                    servicesItems.map((s) => (
                                                                        <Link
                                                                            key={s.href}
                                                                            href={s.href}
                                                                            className={`block px-4 py-2 text-[13px] hover:bg-gray-50 hover:text-[#E87733] transition-colors ${isActive(s.href)
                                                                                ? "text-[#E87733] bg-gray-50"
                                                                                : "text-gray-700"
                                                                                }`}
                                                                        >
                                                                            {s.name}
                                                                        </Link>
                                                                    ))
                                                                ) : (
                                                                    <div className="col-span-2 px-4 py-2 text-[13px] text-gray-600">
                                                                        Services abhi load nahi ho paaye.
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {separator}
                                            </span>
                                        );
                                    }

                                    return (
                                        <span key={item.key} className="flex items-center">
                                            <div
                                                className="relative"
                                                onMouseEnter={() => setLocationsOpen(true)}
                                                onMouseLeave={() => setLocationsOpen(false)}
                                            >
                                                <button
                                                    className={`flex items-center gap-1 hover:text-[#E87733] whitespace-nowrap transition-colors ${isDropdownActive("locations") ? "text-[#E87733]" : ""
                                                        }`}
                                                    type="button"
                                                >
                                                    {item.name}
                                                    <ChevronDown className="h-3 w-3" />
                                                </button>

                                                {locationsOpen && (
                                                    <div className="absolute top-full -right-10 mt-0 w-40 rounded-lg bg-white shadow-xl py-2 z-50 border border-gray-100">
                                                        {locationsItems.map((l) => (
                                                            <Link
                                                                key={l.href}
                                                                href={l.href}
                                                                className={`block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#E87733] transition-colors ${isActive(l.href) ? "text-[#E87733] bg-gray-50" : "text-gray-700"
                                                                    }`}
                                                            >
                                                                {l.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="absolute -right-10 top-[2px] py-2 z-50">
                                <Link
                                    href="/book-appointment"
                                    className="rounded bg-[#E87733] px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#d66b2b] whitespace-nowrap"
                                >
                                    Book an Appointment
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {mobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <div
                        className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <span className="text-lg font-semibold text-gray-800">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                                type="button"
                            >
                                <X className="h-6 w-6 text-gray-700" />
                            </button>
                        </div>

                        <div className="overflow-y-auto h-[calc(100%-73px)] p-4">
                            <div className="flex flex-col space-y-1">
                                {navItems
                                    .filter((i) => i.type === "link")
                                    .map((i) => {
                                        const link = i as NavLinkItem;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive(link.href)
                                                    ? "text-[#E87733] bg-orange-50"
                                                    : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href="/services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex-1 py-3 px-4 text-base font-medium rounded-lg transition-colors ${isServicesActive
                                                ? "text-[#E87733] bg-orange-50"
                                                : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                                }`}
                                        >
                                            Services
                                        </Link>

                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="shrink-0 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            aria-label="Toggle services"
                                            type="button"
                                        >
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {mobileServicesOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {servicesLoading ? (
                                                <>
                                                    {Array.from({ length: 6 }).map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className="block py-2 px-4 text-sm rounded-lg text-gray-400"
                                                        >
                                                            Loading...
                                                        </span>
                                                    ))}
                                                </>
                                            ) : servicesItems.length ? (
                                                servicesItems.map((s) => (
                                                    <Link
                                                        key={s.href}
                                                        href={s.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className={`block py-2 px-4 text-sm rounded-lg transition-colors ${isActive(s.href)
                                                            ? "text-[#E87733] bg-orange-50"
                                                            : "text-gray-600 hover:text-[#E87733] hover:bg-gray-50"
                                                            }`}
                                                    >
                                                        {s.name}
                                                    </Link>
                                                ))
                                            ) : (
                                                <div className="py-2 px-4 text-sm text-gray-600">
                                                    Services abhi load nahi ho paaye.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <button
                                        onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                                        className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg transition-colors ${isLocationsActive
                                            ? "text-[#E87733] bg-orange-50"
                                            : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                            }`}
                                        type="button"
                                    >
                                        Locations
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {mobileLocationsOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {locationsItems.map((l) => (
                                                <Link
                                                    key={l.href}
                                                    href={l.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`block py-2 px-4 text-sm rounded-lg transition-colors ${isActive(l.href)
                                                        ? "text-[#E87733] bg-orange-50"
                                                        : "text-gray-600 hover:text-[#E87733] hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {l.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href="/book-appointment"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-4 rounded-lg bg-[#E87733] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d66b2b]"
                                >
                                    Book an Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}