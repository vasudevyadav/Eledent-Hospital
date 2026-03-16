"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="home-about-bg">
            {/* keep your desktop spacing same, but make mobile/tablet nicer */}
            <div className="mt-24 sm:mt-32 lg:mt-40 mx-4 sm:mx-8 lg:mx-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* IMAGE */}
                    <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                            <div>
                                <iframe className="w-full h-[280px] lg:h-[400px]" src="https://www.youtube-nocookie.com/embed/JrqoTfgYkLE?si=zJBiKkx4xKdiWGz0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="text-left">
                        <div className="w-fit bg-primary text-white px-2 py-0.5 text-sm sm:text-base font-semibold mb-5 sm:mb-6">
                            About
                        </div>

                        <h2 className="text-2xl lg:text-[30px] font-bold text-primary leading-tight mb-2">
                            Eledent Dental Hospital
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-800 font-medium mb-4">
                            Best Dental Clinic in Hyderabad
                        </p>

                        <div className="space-y-4 text-gray-600 text-xs sm:text-sm leading-relaxed mb-7">
                            <p>
                                At Eledent Dental Hospital, we bring advanced multi-speciality dental care closer to patients across Hyderabad. With 19+ years of experience, specialist-led treatment, and modern digital technology, we offer complete care for dental implants, full mouth rehabilitation, root canal treatment, braces, aligners, smile makeovers, and kids dentistry, and have restored 30,000+ smiles.

                            </p>

                            <p>
                                Our team brings implantologists, orthodontists, endodontists, prosthodontists, periodontists, pedodontists, oral and maxillofacial surgeons, cosmetic dental surgeons, and general dentists under one roof. With 5 locations in Hyderabad, including Kondapur, KPHB, Manikonda, Banjara Hills, and Kompally, we focus on clear treatment planning, patient-friendly care, and lasting results.
                            </p>


                        </div>

                        <Link href="/about-us" className="bg-primary text-white px-4 py-2 rounded-sm font-medium text-sm uppercase flex items-center gap-2 group w-fit justify-center sm:justify-start">
                            Know More
                            <ChevronRight className="w-6 h-6 bg-white text-primary p-[1px] rounded-full group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}