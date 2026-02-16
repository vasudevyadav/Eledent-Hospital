"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Clock } from "lucide-react";

export default function ServicesHero() {
    return (
        <div className="my-12 px-4">
            {/* Wrapper gives bottom space so floating bar never gets cut */}
            <div className="mx-auto w-full max-w-6xl pb-16">

                <section className="relative h-[360px] w-full overflow-visible rounded-3xl md:h-[420px]">
                    {/* Background image */}
                    <Image
                        src="/services/services-banner.png"
                        alt="Services banner"
                        fill
                        priority
                        className="object-cover rounded-3xl"
                        sizes="(max-width: 768px) 100vw, 1100px"
                    />


                    <div className="absolute inset-0 rounded-3xl bg-black/35" />


                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-white text-3xl font-semibold leading-tight md:text-5xl">
                            Advanced And Painless <br className="hidden md:block" /> Dental Implants
                        </h1>
                        <p className="mt-3 max-w-xl text-xs text-white/80 md:text-sm">
                            Tincidunt suspendisse semper integer <br className="hidden md:block" />
                            elementum maecenas.
                        </p>
                    </div>


                    <Link href="/" aria-label="Go to Home" className="absolute inset-0 z-10" />


                    <div className="absolute -bottom-8 left-1/2 z-30 w-full -translate-x-1/2 px-4">
                        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-5 rounded-xl bg-[#484847]/95 px-10 py-6 shadow-2xl backdrop-blur">
                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500">
                                    <PhoneCall className="h-7 w-7 text-[#2f2f2f]" strokeWidth={2.5} />
                                </div>
                                <div className="leading-tight">
                                    <p className="text-sm text-white/70 mb-1.5">Need a Dental Service?</p>
                                    <p className="text-sm font-semibold text-white md:text-lg">
                                        +91 77997 19994
                                    </p>
                                </div>
                            </div>

                            <div className="hidden h-8 w-px bg-white/15 md:block" />

                            <div className="hidden items-center gap-3 md:flex">
                                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500">
                                    <Clock className="h-8 w-8 text-[#2f2f2f]" strokeWidth={2.5} />
                                </div>
                                <div className="leading-tight">
                                    <p className="text-sm mb-1.5 text-white/70">Visiting Hours</p>
                                    <p className="text-sm font-semibold text-white md:text-lg">
                                        Mon - Sun 9 AM to 9 PM
                                    </p>
                                </div>
                            </div>

                            <button className="rounded-md bg-orange-500 px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:brightness-95">
                                Book An Appointment
                            </button>

                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
}
