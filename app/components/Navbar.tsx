"use client";
import { Phone, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
    Mail,
    Clock,
    PhoneCall,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import BookingModel from "./comman/booking-model";

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
    const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

    const closeModal = () => setAppointmentModalOpen(false);

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

    useEffect(() => {
        if (mobileMenuOpen || appointmentModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen, appointmentModalOpen]);

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
            { type: "dropdown", name: "Services", key: "services", href: "/services" },
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
    const isLocationsActive = pathname.startsWith("/location");

    const isDropdownActive = (key: NavDropdownItem["key"]) => {
        if (key === "services") return isServicesActive;
        if (key === "locations") return isLocationsActive;
        return false;
    };

    return (
        <>
            <header className="fixed top-0 z-50 w-full">
                <div className="w-full bg-[#E87733] text-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
                        <div className="flex flex-wrap items-center gap-x-4 text-[11px] sm:gap-x-8 sm:text-[13px]">
                            <span className="inline-flex items-center gap-1.5 sm:gap-2">
                                <PhoneCall className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                                <a href="tel:+919983868366" className="hover:underline">
                                    +91 99838 68366
                                </a>
                            </span>

                            <span className="hidden items-center gap-2 sm:inline-flex">
                                <Mail className="h-4 w-4 flex-shrink-0" />
                                <a href="mailto:contact@eledenthospitals.com" className="hover:underline">
                                    contact@eledenthospitals.com
                                </a>
                            </span>

                            <span className="inline-flex items-center gap-1.5 sm:gap-2">
                                <Clock className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                                <span className="whitespace-nowrap">09:00 am to 09:00 pm</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href="https://www.instagram.com/eledenthospitals/"
                                aria-label="Instagram"
                                className="flex h-6 w-6 items-center justify-center rounded-sm bg-white transition hover:opacity-90 sm:h-7 sm:w-7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <Image
                                    src="/home/instagram.png"
                                    alt="Eledent logo"
                                    className="h-3 w-3 sm:h-5 sm:w-5"
                                    width={500}
                                    height={500}
                                    priority
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/EledentHospitals/"
                                aria-label="Facebook"
                                className="flex h-6 w-6 items-center justify-center rounded-sm bg-white transition hover:opacity-90 sm:h-7 sm:w-7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/home/facebook.png"
                                    alt="Eledent logo"
                                    className="h-3 w-3 sm:h-5 sm:w-5"
                                    width={500}
                                    height={500}
                                    priority
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg"
                                aria-label="YouTube"
                                className="flex h-6 w-6 items-center justify-center rounded-sm bg-white transition hover:opacity-90 sm:h-7 sm:w-7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/home/youtube.png"
                                    alt="Eledent logo"
                                    className="h-3 w-3 sm:h-5 sm:w-5"
                                    width={500}
                                    height={500}
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
                        <Link href="/" className="relative z-50 flex items-center">
                            <Image
                                src="/White-Logo1.png"
                                alt="Eledent logo"
                                className="w-28 sm:w-28 lg:w-40"
                                width={500}
                                height={500}
                                priority
                            />
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="relative z-50 p-2 text-gray-700 transition-colors hover:text-[#E87733] lg:hidden"
                            aria-label="Toggle menu"
                            type="button"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        <nav className="relative hidden items-center lg:flex">
                            <div className="flex items-center gap-8 rounded-full bg-[#E8E5E6] py-3 pl-10 pr-40">
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
                                                        className={`whitespace-nowrap transition-colors hover:text-[#E87733] ${isActive(item.href) ? "text-[#E87733]" : ""
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
                                                            className={`flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#E87733] ${isDropdownActive("services") ? "text-[#E87733]" : ""
                                                                }`}
                                                        >
                                                            {item.name}
                                                            <ChevronDown className="h-3 w-3" />
                                                        </Link>


                                                        {servicesOpen && (

                                                            <div className="absolute left-0 top-6 z-50 mt-0 w-[38.5rem] rounded-lg border border-gray-100 bg-white py-3 px-4 shadow-xl">
                                                                <div className="grid grid-cols-2 gap-4">
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
                                                                                className={`block px-3 py-1 text-[13px] transition-colors hover:bg-gray-50 border-b border-gray-400 hover:text-[#E87733] ${isActive(s.href)
                                                                                    ? "bg-[#E87733] border-b-1 rounded text-[#fff] py-2"
                                                                                    : "text-gray-700"
                                                                                    }`}
                                                                            >
                                                                                {s.name}
                                                                            </Link>
                                                                        ))
                                                                    ) : (
                                                                        <div className="col-span-2 px-4 py-2 text-[13px] text-gray-600">
                                                                            Services Loading.
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            // <div className="absolute left-0 top-6 z-50 mt-0 w-[38.5rem] rounded-lg border border-gray-100 bg-white py-1 shadow-xl">
                                                            //     <div className="grid grid-cols-2 gap-1">
                                                            //         {servicesLoading ? (
                                                            //             <>
                                                            //                 {Array.from({ length: 8 }).map((_, i) => (
                                                            //                     <span
                                                            //                         key={i}
                                                            //                         className="block px-4 py-2 text-[13px] text-gray-400"
                                                            //                     >
                                                            //                         Loading...
                                                            //                     </span>
                                                            //                 ))}
                                                            //             </>
                                                            //         ) : servicesItems.length ? (
                                                            //             servicesItems.map((s) => (
                                                            //                 <Link
                                                            //                     key={s.href}
                                                            //                     href={s.href}
                                                            //                     className={`block px-4 py-2 text-[13px] transition-colors hover:bg-gray-50 hover:text-[#E87733] ${isActive(s.href)
                                                            //                         ? "bg-gray-50 text-[#E87733]"
                                                            //                         : "text-gray-700"
                                                            //                         }`}
                                                            //                 >
                                                            //                     {s.name}
                                                            //                 </Link>
                                                            //             ))
                                                            //         ) : (
                                                            //             <div className="col-span-2 px-4 py-2 text-[13px] text-gray-600">
                                                            //                 Services abhi load nahi ho paaye.
                                                            //             </div>
                                                            //         )}
                                                            //     </div>
                                                            // </div>
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
                                                        className={`flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#E87733] ${isDropdownActive("locations") ? "text-[#E87733]" : ""
                                                            }`}
                                                        type="button"
                                                    >
                                                        {item.name}
                                                        <ChevronDown className="h-3 w-3" />
                                                    </button>

                                                    {locationsOpen && (
                                                        <div className="absolute -right-10 top-full z-50 mt-0 w-40 rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
                                                            {locationsItems.map((l) => (
                                                                <Link
                                                                    key={l.href}
                                                                    href={l.href}
                                                                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 hover:text-[#E87733] ${isActive(l.href)
                                                                        ? "bg-gray-50 text-[#E87733]"
                                                                        : "text-gray-700"
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

                                <div className="absolute -right-10 top-[1px] z-50 py-0.5">
                                    <button
                                        type="button"
                                        onClick={() => setAppointmentModalOpen(true)}
                                        className="whitespace-nowrap rounded bg-[#E87733] px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#d66b2b]"
                                    >
                                        Book an Appointment
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <div
                            className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="flex items-center justify-between border-b border-gray-200 p-4">
                                <Image
                                    src="/White-Logo.webp"
                                    alt="Eledent logo"
                                    className="w-24"
                                    width={500}
                                    height={500}
                                    priority
                                />
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                                    aria-label="Close menu"
                                    type="button"
                                >
                                    <X className="h-6 w-6 text-gray-700" />
                                </button>
                            </div>

                            <div className="h-[calc(100%-73px)] overflow-y-auto p-4">
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
                                                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive(link.href)
                                                        ? "bg-orange-50 text-[#E87733]"
                                                        : "text-gray-700 hover:bg-gray-50 hover:text-[#E87733]"
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
                                                className={`flex-1 rounded-lg px-4 py-3 text-base font-medium transition-colors ${isServicesActive
                                                    ? "bg-orange-50 text-[#E87733]"
                                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#E87733]"
                                                    }`}
                                            >
                                                Services
                                            </Link>

                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className="shrink-0 rounded-lg p-3 transition-colors hover:bg-gray-50"
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
                                            <div className="ml-4 mt-1 space-y-1">
                                                {servicesLoading ? (
                                                    <>
                                                        {Array.from({ length: 6 }).map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className="block rounded-lg px-4 py-2 text-sm text-gray-400"
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
                                                            className={`block rounded-lg px-4 py-2 text-sm transition-colors ${isActive(s.href)
                                                                ? "bg-orange-50 text-[#E87733]"
                                                                : "text-gray-600 hover:bg-gray-50 hover:text-[#E87733]"
                                                                }`}
                                                        >
                                                            {s.name}
                                                        </Link>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-2 text-sm text-gray-600">
                                                        Services abhi load nahi ho paaye.
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                                            className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${isLocationsActive
                                                ? "bg-orange-50 text-[#E87733]"
                                                : "text-gray-700 hover:bg-gray-50 hover:text-[#E87733]"
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
                                            <div className="ml-4 mt-1 space-y-1">
                                                {locationsItems.map((l) => (
                                                    <Link
                                                        key={l.href}
                                                        href={l.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className={`block rounded-lg px-4 py-2 text-sm transition-colors ${isActive(l.href)
                                                            ? "bg-orange-50 text-[#E87733]"
                                                            : "text-gray-600 hover:bg-gray-50 hover:text-[#E87733]"
                                                            }`}
                                                    >
                                                        {l.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setAppointmentModalOpen(true);
                                        }}
                                        className="mt-4 rounded-lg bg-[#E87733] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d66b2b]"
                                    >
                                        Book an Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>


            <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-0 hidden sm:block lg:block ">
                <a
                    href="tel:+919983868366"
                    aria-label="Call Now"
                    className="group mr-0 flex h-[56px] w-[52px] items-center justify-center rounded-tl-[14px] bg-[#e14b4b] shadow-lg transition hover:bg-[#cf3f3f]"
                >
                    <Phone size={20} strokeWidth={2.5} className="text-white" />
                </a>

                {/* <a
                    href="https://wa.me/919983868366"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="group mr-0 flex h-[56px] w-[52px] items-center justify-center bg-[#25D366] shadow-lg transition hover:bg-[#1fb85a]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                </a> */}


                <button
                    type="button"
                    onClick={() => setAppointmentModalOpen(true)}
                    className="group mr-0 flex h-[56px] w-[52px] items-center justify-center rounded-bl-[14px] bg-[#E87733] shadow-lg transition hover:bg-[#cf6428]"
                >   <CalendarDays size={24} strokeWidth={2.3} className="text-white" />
                </button>

            </div>

            <div className="fixed inset-x-0 bottom-0 z-50 md:hidden overflow-hidden border-t border-gray-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-2 w-full">
                    <a
                        href="tel:+919983868366"
                        className="flex min-w-0 flex-col items-center justify-center gap-1 bg-[#25D366] px-2 py-2 text-center text-sm font-semibold text-white"
                    >
                        <span className="mb-1 flex items-center justify-center leading-none">
                            <Phone size={20} strokeWidth={2.5} className="text-white" />
                        </span>
                        <span>Call</span>
                    </a>

                    <button
                        type="button"
                        onClick={() => setAppointmentModalOpen(true)}
                        className="flex min-w-0 flex-col items-center justify-center gap-1 bg-[#E87733] px-2 py-2 text-center text-sm font-semibold text-white"
                    >
                        <span className="mb-1 flex items-center justify-center leading-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#fff"
                                viewBox="0 0 16 16"
                            >
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </span>
                        <span>Book Now</span>
                    </button>
                </div>
            </div>

            {appointmentModalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
                        onClick={() => setAppointmentModalOpen(false)}
                    />

                    <BookingModel closeModal={closeModal} />

                </div>
            )
            }
        </>
    );
}