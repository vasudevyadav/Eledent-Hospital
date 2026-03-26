"use client";

import Image from "next/image";
import type { FC } from "react";
import {
    ShieldCheck,
    Users,
    Building2,
    Sparkles,
    Smile,
    Microscope,
    TimerOff,
    Languages,
    ThumbsUp,
    MapPin,
    HandHelping,
    CreditCard,
} from "lucide-react";

const highlights = [
    {
        icon: ShieldCheck,
        text: "The standards of sterilization, dental techniques, types of equipment and materials used are on par or superior to most dental centres in the developed countries.",
    },
    {
        icon: Users,
        text: "A comprehensive team of highly experienced and qualified dentists with specialization in different types of treatment including implantology, cosmetic dentistry, orthodontics, Maxillofacial surgeries and more.",
    },
    {
        icon: Building2,
        text: "World-class infrastructure including cutting edge technologies in comparison to the best of clinics in the USA or UK Best quality, internationally approved, CE certified (European) material is only put to use at our clinic",
    },
    {
        icon: Sparkles,
        text: "The highest standards of sterilization protocol are followed along with extensive use of disposables, ensures a hygienic and completely safe environment around.",
    },
    {
        icon: Smile,
        text: "Option for conscious sedation for patients with anxiety.",
    },
    {
        icon: Microscope,
        text: "In-house digital diagnostic lab for oral pathology, radiology and microbiology.",
    },
    {
        icon: TimerOff,
        text: "No waiting time for any of the treatments.",
    },
    {
        icon: Languages,
        text: "Doctors and staff are well proficient with English. We can also arrange for a language translator in case there is a requirement of any other language besides English.",
    },
    {
        icon: ThumbsUp,
        text: "All dental procedures prices are very competitive compared to other dental hospitals.",
    },
    {
        icon: MapPin,
        text: "Strategic location, situated in the IT hub, near to Google office, 35 mins drive from the airport.",
    },
    {
        icon: HandHelping,
        text: "Accommodation assistance provided to all our clients.",
    },
    {
        icon: CreditCard,
        text: "All major credit cards accepted. Bank transfers are also possible if required.",
    },
];

const TourismWhy: FC = () => {
    return (
        <section className="w-full py-12">
            <div className="mx-auto max-w-7xl lg:px-6 px-4  ">
                <div className="lg:bg-[#f4f5f7] bg-[#e0e4ed] rounded-3xl p-6 shadow-lg">
                    {/* TOP: Why section */}
                    <div className="rounded-2xl md:p-10">
                        <div className="grid items-start gap-10 md:grid-cols-2">
                            {/* LEFT CONTENT */}
                            <div>
                                <h2 className="lg:text-3xl text-xl font-semibold leading-snug text-[#f97316]">
                                    Why Eledent International
                                    <br />
                                    Digital Dentistry?
                                </h2>

                                <div className="mt-5 space-y-4 lg:text-base text-sm leading-relaxed text-gray-600">
                                    <p>
                                        Eledent Dental Hospital has been at the vanguard of dental healthcare and has been a prominent brand that provides world-class dental care for all ages with state of the art facilities under one roof. The best part about the treatments is that they are entirely secure and affordable for all.
                                    </p>

                                    <p>
                                        The inception story behind the Eledent Hospital is based on the major finding by four enthusiastic doctors. They have been working at different hospitals for the past 13 years and have found the problems faced by international patients who fly so far just for their dental treatments.
                                    </p>

                                    <p>
                                        After a significant quantum of research and studies regarding the problems faced by international patients, Eledent digital dentistry was founded to serve the patients worldwide flawlessly.
                                    </p>

                                    <p>
                                        At Eledent we understand the concerns associated with travelling to a different country for dental treatment and we strive hard for your safe secure and happy experience before and after treatment.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="relative h-[320px] md:h-full w-full overflow-hidden rounded-2xl">
                                <Image
                                    src="/dental-tourism/Why-Eledent-International-Digital-Dentistry.jpg"
                                    alt="Digital Dentistry"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-14 px-2 md:px-10 pb-6 md:pb-10">
                        <h3 className="text-center text-xl lg:text-3xl font-semibold text-[#f97316]">
                            The key highlights of Eledent International     Digital
                            Dentistry are
                        </h3>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {highlights.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl shadow-md lg:px-6 px-4 py-7 text-center"
                                    >
                                        <div className="mx-auto mb-5 flex lg:h-18 lg:w-18 h-14 w-14 items-center justify-center rounded-xl bg-[#fff7ed]">
                                            <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-[#f97316]" />
                                        </div>
                                        <p className="lg:text-base text-sm leading-relaxed text-gray-700 line-clamp-4">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourismWhy;