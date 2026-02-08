"use client";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function OurSpecialties() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: "Pain Relief",
            image: "/home/Special-1.png",
            detailImage: "/home/Special-1.png",
            description: [
                "For a long time, pain and dentistry have been associated together and have made a great team, but the time has finally come for them to part ways.",
                "Welcome to the Modern World of Painless Dentistry at Eledent Dental Hospital. With the advent of new technology, knowledge, and the latest equipment, dentistry ensures superior quality of dental care and focuses on painless, comfortable treatment."
            ]
        },
        {
            title: "Painless Tooth Removal",
            image: "/home/Special-2.png",
            detailImage: "/home/Special-2.png",
            description: [
                "Experience stress-free tooth extractions with advanced painless techniques.",
                "Our dentists ensure minimal discomfort and faster recovery using modern anesthesia and precision tools."
            ]
        },
        {
            title: "Teeth Straightening",
            image: "/home/Special-3.png",
            detailImage: "/home/Special-3.png",
            description: [
                "Transform your smile with braces and clear aligners.",
                "Personalised orthodontic plans using modern technology for comfort and results."
            ]
        }
    ];

    return (
        <section className=" p-20">

            <div className="bg-[#F7F8FA] px-6 py-12 rounded-4xl">
                <div className="max-w-[1240px] mx-auto px-4">
                    <div className="grid lg:grid-cols-[380px_1fr] gap-12">

                        {/* LEFT IMAGE */}
                        <div className="relative rounded-[22px] overflow-hidden shadow-xl">
                            <Image
                                src="/home/special-img.png"
                                alt="Dentist"
                                width={380}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-24 left-6 right-6 bg-[#e67735] text-white rounded-[16px] px-6 py-5">
                                <p className="text-center text-xl leading-snug font-medium">
                                    We Are A Full Service <br /> Clinic With Modern <br /> Technology
                                </p>
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-[46px] font-extrabold text-[#3D3D3D]">
                                Our Specialties
                            </h2>

                            <div className="flex items-center gap-3 mt-3 mb-8">
                                <div className="w-20 h-[3px] bg-[#FF8A3D]" />
                                <div className="flex-1 h-px bg-gray-300" />
                            </div>

                            <div className="grid lg:grid-cols-[1fr_340px] gap-8">
                                <div>
                                    <h3 className="text-[28px] font-bold text-[#FF8A3D] mb-4">
                                        {services[activeService].title}
                                    </h3>

                                    <div className="space-y-4 text-[14px] leading-[1.9] text-gray-600 max-w-[520px]">
                                        {services[activeService].description.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>

                                    <button className="mt-6 flex items-center gap-3 bg-[#2F2F2F] text-white px-6 py-3 rounded-full">
                                        Read More
                                        <span className="w-7 h-7 rounded-full bg-[#FF8A3D] flex items-center justify-center">
                                            <ChevronRight size={16} />
                                        </span>
                                    </button>
                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="rounded-[16px] overflow-hidden shadow-lg">
                                    <Image
                                        src="/home/Special-1.png"
                                        alt="Detail"
                                        width={340}
                                        height={260}
                                        className="w-full h-[260px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* BOTTOM SERVICES */}
                            <div className="mt-12 grid sm:grid-cols-3 gap-6">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveService(index)}
                                        className="cursor-pointer"
                                    >
                                        <div
                                            className={`relative aspect-square rounded-[14px] overflow-hidden shadow-lg
                    ${activeService === index ? "ring-2 ring-[#FF8A3D] ring-offset-2" : ""}`}
                                        >
                                            <Image
                                                src="/home/Special-2.png"
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />

                                            {activeService === index && (
                                                <div className="absolute inset-0 bg-[#FF8A3D]/90 flex items-center justify-center">
                                                    <span className="text-white text-[90px] font-light">+</span>
                                                </div>
                                            )}
                                        </div>

                                        <p className={`mt-3 text-center text-[14px] font-semibold
                    ${activeService === index ? "text-[#FF8A3D]" : "text-[#3D3D3D]"}`}>
                                            {service.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* ARROWS */}
                            <div className="flex justify-center gap-3 mt-8">
                                <button className="w-9 h-9 rounded-full border flex items-center justify-center">
                                    <ChevronLeft size={16} />
                                </button>
                                <button className="w-9 h-9 rounded-full bg-[#2F2F2F] text-white flex items-center justify-center">
                                    <ChevronRight size={16} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
