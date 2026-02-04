
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [locationsOpen, setLocationsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

    // Services submenu items (from screenshot)
    const servicesItems = [
        { name: "Advanced And Painless Dental Implants", href: "/services/dental-implants" },
        { name: "Braces & Aligners", href: "/services/braces-aligners" },
        { name: "Dental Fillings", href: "/services/dental-fillings" },
        { name: "Single Visit Dentistry", href: "/services/single-visit-dentistry" },
        { name: "Conseous Sedation", href: "/services/conseous-sedation" },
        { name: "Microscopic Dentistry", href: "/services/microscopic-dentistry" },
        { name: "Invisalign Treatment", href: "/services/invisalign-treatment" },
        { name: "Wisdom Teeth Removal", href: "/services/wisdom-teeth-removal" },
        { name: "Dental Veneers", href: "/services/dental-veneers" },
        { name: "Tooth Pain Treatment", href: "/services/tooth-pain-treatment" },
        { name: "Atraumatic Extraction", href: "/services/atraumatic-extraction" },
        { name: "Dental Crowns", href: "/services/dental-crowns" },
        { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
        { name: "Teeth Whitening", href: "/services/teeth-whitening" },
        { name: "Guided Biofilm Therapy (GBT)", href: "/services/guided-biofilm-therapy" },
        { name: "Advanced And Painless Dental Implants", href: "/services/advanced-dental-implants" },
        { name: "Smile Makeover", href: "/services/smile-makeover" },
        { name: "Laser Gum Treatment", href: "/services/laser-gum-treatment" },
        { name: "Orthodontist", href: "/services/orthodontist" },
        { name: "Teeth Gap Treatment", href: "/services/teeth-gap-treatment" },
    ];

    // Locations submenu items (from screenshot)
    const locationsItems = [
        { name: "kondapur", href: "/locations/kondapur" },
        { name: "Kukatpally", href: "/locations/kukatpally" },
        { name: "Manikonda", href: "/locations/manikonda" },
        { name: "Banjara Hills", href: "/locations/banjara-hills" },
        { name: "Kompally", href: "/locations/kompally" },
    ];

    const isActive = (path: string) => pathname === path;
    const isServicesActive = pathname.startsWith("/services");
    const isLocationsActive = pathname.startsWith("/locations");

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
                            <a
                                href="mailto:contact@eledenthospitals.com"
                                className="hover:underline"
                            >
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

            {/* MAIN NAV */}
            <div className="w-full bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center relative z-50">
                        <Image
                            src="/White-Logo.webp"
                            alt="Eledent logo"
                            className="h-10 sm:h-12 w-auto"
                            width={500}
                            height={500}
                            priority
                        />
                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2 text-gray-700 hover:text-[#E87733] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>


                    <nav className="hidden lg:flex items-center relative">
                        <div className="flex items-center gap-8 rounded-full bg-[#E8E5E6] pl-10 pr-40 py-3">

                            <div className="flex items-center gap-4 text-[15px] font-medium text-[#4A4A4A]">
                                <Link
                                    href="/"
                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive("/") ? "text-[#E87733]" : ""
                                        }`}
                                >
                                    Home
                                </Link>
                                <span className="mx-2 text-[#999]">•</span>

                                <Link
                                    href="/about"
                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive("/about") ? "text-[#E87733]" : ""
                                        }`}
                                >
                                    About Us
                                </Link>
                                <span className="mx-2 text-[#999]">•</span>


                                <div
                                    className="relative"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <button
                                        className={`flex items-center gap-1 hover:text-[#E87733] whitespace-nowrap transition-colors ${isServicesActive ? "text-[#E87733]" : ""
                                            }`}
                                    >
                                        Services
                                        <ChevronDown className="h-3 w-3" />
                                    </button>

                                    {servicesOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-[35rem] rounded-lg bg-white shadow-xl py-3 z-50 border border-gray-100">
                                            <div className="grid grid-cols-2 gap-1">
                                                {servicesItems.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={`block px-4 py-2 text-[13px] hover:bg-gray-50 hover:text-[#E87733] transition-colors ${isActive(item.href)
                                                            ? "text-[#E87733] bg-gray-50"
                                                            : "text-gray-700"
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <span className="mx-2 text-[#999]">•</span>

                                <Link
                                    href="/dental-tourism"
                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive("/dental-tourism") ? "text-[#E87733]" : ""
                                        }`}
                                >
                                    Dental Tourism
                                </Link>
                                <span className="mx-2 text-[#999]">•</span>

                                <Link
                                    href="/technology"
                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive("/technology") ? "text-[#E87733]" : ""
                                        }`}
                                >
                                    Technology
                                </Link>
                                <span className="mx-2 text-[#999]">•</span>

                                <Link
                                    href="/facilities"
                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive("/facilities") ? "text-[#E87733]" : ""
                                        }`}
                                >
                                    Facilities
                                </Link>
                                <span className="mx-2 text-[#999]">•</span>

                                <Link
                                    href="/contact"
                                    className={`hover:text-[#E87733] whitespace-nowrap transition-colors ${isActive("/contact") ? "text-[#E87733]" : ""
                                        }`}
                                >
                                    Contact Us
                                </Link>
                                <span className="mx-2 text-[#999]">•</span>


                                <div
                                    className="relative"
                                    onMouseEnter={() => setLocationsOpen(true)}
                                    onMouseLeave={() => setLocationsOpen(false)}
                                >
                                    <button
                                        className={`flex items-center gap-1 hover:text-[#E87733] whitespace-nowrap transition-colors ${isLocationsActive ? "text-[#E87733]" : ""
                                            }`}
                                    >
                                        Locations
                                        <ChevronDown className="h-3 w-3" />
                                    </button>

                                    {locationsOpen && (
                                        <div className="absolute top-full -right-10 mt-2 w-32 rounded-lg bg-white shadow-xl py-2 z-50 border border-gray-100">
                                            {locationsItems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className={`block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#E87733] transition-colors ${isActive(item.href)
                                                        ? "text-[#E87733] bg-gray-50"
                                                        : "text-gray-700"
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className=" absolute -right-10 top-0 py-2 z-50">

                                <Link
                                    href="/book-appointment"
                                    className="rounded-md bg-[#E87733] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#d66b2b] whitespace-nowrap"
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
                        className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >

                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <span className="text-lg font-semibold text-gray-800">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6 text-gray-700" />
                            </button>
                        </div>


                        <div className="overflow-y-auto h-[calc(100%-73px)] p-4">
                            <div className="flex flex-col space-y-1">

                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive("/")
                                        ? "text-[#E87733] bg-orange-50"
                                        : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                        }`}
                                >
                                    Home
                                </Link>


                                <Link
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive("/about")
                                        ? "text-[#E87733] bg-orange-50"
                                        : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                        }`}
                                >
                                    About Us
                                </Link>


                                <div>
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg transition-colors ${isServicesActive
                                            ? "text-[#E87733] bg-orange-50"
                                            : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                            }`}
                                    >
                                        Services
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {mobileServicesOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {servicesItems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`block py-2 px-4 text-sm rounded-lg transition-colors ${isActive(item.href)
                                                        ? "text-[#E87733] bg-orange-50"
                                                        : "text-gray-600 hover:text-[#E87733] hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <Link
                                    href="/dental-tourism"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive("/dental-tourism")
                                        ? "text-[#E87733] bg-orange-50"
                                        : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                        }`}
                                >
                                    Dental Tourism
                                </Link>


                                <Link
                                    href="/technology"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive("/technology")
                                        ? "text-[#E87733] bg-orange-50"
                                        : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                        }`}
                                >
                                    Technology
                                </Link>


                                <Link
                                    href="/facilities"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive("/facilities")
                                        ? "text-[#E87733] bg-orange-50"
                                        : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                        }`}
                                >
                                    Facilities
                                </Link>


                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${isActive("/contact")
                                        ? "text-[#E87733] bg-orange-50"
                                        : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                        }`}
                                >
                                    Contact Us
                                </Link>


                                <div>
                                    <button
                                        onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                                        className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg transition-colors ${isLocationsActive
                                            ? "text-[#E87733] bg-orange-50"
                                            : "text-gray-700 hover:text-[#E87733] hover:bg-gray-50"
                                            }`}
                                    >
                                        Locations
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {mobileLocationsOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {locationsItems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`block py-2 px-4 text-sm rounded-lg transition-colors ${isActive(item.href)
                                                        ? "text-[#E87733] bg-orange-50"
                                                        : "text-gray-600 hover:text-[#E87733] hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {item.name}
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