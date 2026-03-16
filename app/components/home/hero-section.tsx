"use client";

import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="my-6 lg:my-12 mx-4 lg:mx-24 lg:mt-40">
            <section className="relative z-0 w-full rounded-4xl bg-gray-300 h-[350px] lg:h-[500px]">
                <div className="absolute inset-0 z-10" />

                <Link href="/" className="block h-full">
                    <div className="relative z-20 h-full max-w-7xl mx-auto flex items-center justify-center">
                        <Image
                            src="/home/home-hero-image.png"
                            alt="Eledent logo"
                            width={1600}
                            height={900}
                            priority
                            className="h-full w-full object-cover rounded-2xl"
                        />
                    </div>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 w-full px-4 z-[999] -bottom-14 lg:-bottom-13">
                    <div className="bg-gray-800/95 backdrop-blur rounded-xl shadow-2xl w-full max-w-5xl mx-auto px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">

                        <div className="hidden lg:flex items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-2.5 rounded-lg">
                                    <PhoneCall className="w-8 h-8 text-[#484847]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">Need a Dental Service?</p>
                                    <p className="text-xl font-medium text-white">+91 99838 68366</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-2.5 rounded-lg">
                                    <Clock className="w-8 h-8 text-[#484847]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">Visiting Hours</p>
                                    <p className="text-xl font-medium text-white">Mon - Sun 9 AM to 9 PM</p>
                                </div>
                            </div>

                            <button className="bg-primary text-white px-8 py-3 rounded-sm font-semibold text-base uppercase tracking-wider transition-all duration-300 hover:opacity-95">
                                Book An Appointment
                            </button>
                        </div>

                        {/* Mobile/Tablet: Responsive layout */}
                        <div className="lg:hidden">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-500 p-2 rounded-lg shrink-0">
                                        <PhoneCall className="w-6 h-6 text-[#484847]" strokeWidth={2.5} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-gray-300">Need a Dental Treatment?
                                        </p>
                                        <p className="text-lg font-medium text-white truncate">Call: 9983868366, 7799769994</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-500 p-2 rounded-lg shrink-0">
                                        <Clock className="w-6 h-6 text-[#484847]" strokeWidth={2.5} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-gray-300">Visiting Hours  </p>
                                        <p className="text-base font-medium text-white truncate"> Monday to Sunday, 9 AM to 9 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-4 w-full bg-primary text-white px-6 py-3 rounded-sm font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:opacity-95">
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}