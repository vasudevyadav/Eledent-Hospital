"use client";
import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className=" lg:my-12 my-6 lg:mx-24 mx-4">
            
            <section className="relative z-0 h-[350px] lg:h-[650px] w-full bg-gray-300 rounded-4xl ">
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
                    <div className="bg-gray-800/95 backdrop-blur rounded-xl shadow-2xl px-8 py-6 w-full max-w-5xl mx-auto">
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-2.5 rounded-lg">
                                    <PhoneCall className="w-8 h-8 text-[#484847]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-base text-gray-300 mb-1">Need a Dental Service?</p>
                                    <p className="text-2xl font-medium text-white">+91 77997 19994</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-2.5 rounded-lg">
                                    <Clock className="w-8 h-8 text-[#484847]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-base text-gray-300 mb-1">Visiting Hours</p>
                                    <p className="text-2xl font-medium text-white">Mon - Sun 9 AM to 9 PM</p>
                                </div>
                            </div>

                            <button className="bg-primary text-white px-8 py-3 rounded-sm font-semibold text-base uppercase tracking-wider transition-all duration-300">
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
