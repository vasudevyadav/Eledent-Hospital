"use client";
import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className=" my-12 mx-24">
            <section className="relative z-0 h-[650px] w-full bg-gray-300 rounded-4xl ">
                <div className="absolute inset-0 z-10" />
                <Link href="/">
                    <div className="relative z-20 h-full flex items-center justify-center max-w-7xl mx-auto">


                        <Image
                            src="/home/home-hero-image.png"
                            alt="Eledent logo"
                            className=" w-full h-full"
                            width={1000}
                            height={1000}
                            priority
                        />

                    </div>
                </Link>

                <div className="absolute -bottom-13 left-1/2 -translate-x-1/2 w-full px-4 z-[999]">
                    <div className="bg-gray-800/95 backdrop-blur rounded-2xl shadow-2xl px-8 py-6 w-full max-w-5xl mx-auto">
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-4 rounded-lg">
                                    <PhoneCall className="w-6 h-6 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">Need a Dental Service?</p>
                                    <p className="text-2xl font-semibold text-white">+91 77997 19994</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-4 rounded-lg">
                                    <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">Visiting Hours</p>
                                    <p className="text-2xl font-semibold text-white">Mon - Sun 9 AM to 9 PM</p>
                                </div>
                            </div>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300">
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
