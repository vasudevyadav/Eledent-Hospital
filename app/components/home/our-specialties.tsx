"use client";

import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useMemo, useState } from "react";

type Service = {
    title: string;
    image: string;
    detailImage: string;
    description: string[];
};

export default function OurSpecialties() {
    const services: Service[] = useMemo(
        () => [
            {
                title: "Pain Relief",
                image: "/home/Special-1.png",
                detailImage: "/home/Special-1.png",
                description: [
                    "For a long time, pain and dentistry have been associated together and have made a great team, but the time has finally come for them to part ways.",
                    "Welcome to the Modern World of Painless Dentistry at Eledent Dental Hospital. With the advent of new technology, knowledge, and the latest equipment, dentistry ensures superior quality of dental care and focuses on painless, comfortable treatment.",
                ],
            },
            {
                title: "Painless Tooth Removal",
                image: "/home/Special-2.png",
                detailImage: "/home/Special-2.png",
                description: [
                    "Experience stress-free tooth extractions with advanced painless techniques.",
                    "Our dentists ensure minimal discomfort and faster recovery using modern anesthesia and precision tools.",
                ],
            },
            {
                title: "Teeth Straightening",
                image: "/home/Special-3.png",
                detailImage: "/home/Special-3.png",
                description: [
                    "Transform your smile with braces and clear aligners.",
                    "Personalised orthodontic plans using modern technology for comfort and results.",
                ],
            },
        ],
        []
    );

    const [activeService, setActiveService] = useState(0);

    const goPrev = () =>
        setActiveService((prev) => (prev - 1 + services.length) % services.length);
    const goNext = () => setActiveService((prev) => (prev + 1) % services.length);

    const active = services[activeService];

    return (
        <section className="pb-2 lg:pt-24 pt-4 px-4 sm:px-8 lg:px-20 relative">
            <div className=" overflow-hidden bg-[#f9fbff] px-6 py-10 rounded-3xl">

                <div className="pointer-events-none absolute right-0 -bottom-10 h-full w-[75%]">
                    <Image
                        src="/home/specialties-image.png"
                        alt=""
                        fill
                        priority={false}
                        className="object-cover object-bottom object-right opacity-60"
                    />
                </div>

                <div className="relative max-w-[1240px] mx-auto">
                    <div className="grid lg:grid-cols-[380px_1fr] gap-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl lg:h-[700px] h-[350px] bg-white">
                            <Image
                                src="/home/special-img.png"
                                alt="Dentist"
                                width={380}
                                height={700}
                                className="w-full h-full object-cover"
                                priority
                            />

                            <div className="absolute bottom-10 left-6 right-6 bg-[#e67735] text-white rounded-[16px] px-6 py-5">
                                <p className="text-center lg:text-2xl text-lg leading-snug font-medium">
                                    We Are A Full Service <br /> Clinic With Modern <br /> Technology
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#484847]">
                                Our Specialties
                            </h2>

                            <div className="flex items-center gap-3 mt-3 mb-8">
                                <div className="w-20 h-[3px] bg-[#FF8A3D]" />
                                <div className="flex-1 h-px bg-gray-300" />
                            </div>

                            <div className="grid lg:grid-cols-[1fr_340px] gap-8">

                                <div>
                                    <h3 className="text-2xl font-bold text-[#FF8A3D] mb-2">
                                        {active.title}
                                    </h3>

                                    <div className="space-y-4 text-base leading-[1.9] text-gray-600 max-w-[520px]">
                                        {active.description.map((p, i) => (
                                            <p className="line-clamp-3" key={`${active.title}-${i}`}>
                                                {p}
                                            </p>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="mt-6 inline-flex items-center gap-3 bg-[#2F2F2F] text-white px-5 py-2 rounded-full"
                                    >
                                        Read More
                                        <span className="w-6 h-6 rounded-full bg-[#FF8A3D] text-black flex items-center justify-center">
                                            <ChevronRight size={20} />
                                        </span>
                                    </button>
                                </div>

                                <div className="rounded-[16px] overflow-hidden shadow-lg h-[320px] bg-white">
                                    <Image
                                        src={active.detailImage}
                                        alt={active.title}
                                        width={340}
                                        height={320}
                                        className="w-full h-[320px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* BOTTOM SERVICES */}
                            <div className="mt-12 grid sm:grid-cols-3 gap-6">
                                {services.map((service, index) => {
                                    const isActive = activeService === index;

                                    return (
                                        <button
                                            key={service.title}
                                            type="button"
                                            onClick={() => setActiveService(index)}
                                            className="text-left"
                                            aria-pressed={isActive}
                                        >
                                            <div
                                                className={`relative aspect-[4/3] rounded-[14px] overflow-hidden shadow-lg bg-white
                        ${isActive ? "ring-2 ring-[#FF8A3D] ring-offset-2" : ""
                                                    }`}
                                            >
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, 33vw"
                                                    className="object-cover"
                                                />

                                                {isActive && (
                                                    <div className="absolute inset-0 bg-[#FF8A3D]/60 flex items-center justify-center">
                                                        <span className="text-white text-[90px] font-light">
                                                            +
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <p
                                                className={`mt-3 text-center text-[14px] font-semibold ${isActive ? "text-[#FF8A3D]" : "text-[#3D3D3D]"
                                                    }`}
                                            >
                                                {service.title}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* ARROWS */}
                            <div className="flex justify-center gap-3 mt-8">
                                <button
                                    type="button"
                                    onClick={goPrev}
                                    className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center"
                                    aria-label="Previous specialty"
                                >
                                    <ChevronLeft size={16} />
                                </button>

                                <button
                                    type="button"
                                    onClick={goNext}
                                    className="w-9 h-9 rounded-full bg-[#2F2F2F] text-white flex items-center justify-center"
                                    aria-label="Next specialty"
                                >
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