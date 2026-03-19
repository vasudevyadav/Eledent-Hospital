"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Clock } from "lucide-react";

export default function ServicesHero() {
    return (
        <div className=" lg:my-12 my-6 lg:mx-24 mx-4 lg:mt-40 mt-36 ">
            <div className="mx-auto w-full max-w-7xl lg:pb-16 pb-4">

                <section className="relative h-[330px] w-full overflow-visible rounded-3xl md:h-[420px]">

                    <Image
                        src="/services-main/our-services.png"
                        alt="Services banner"
                        fill
                        priority
                        className="object-cover rounded-3xl"
                        sizes="(max-width: 768px) 100vw, 1100px"
                    />


                    <div className="absolute inset-0 rounded-3xl bg-black/15" />


                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-white text-3xl font-semibold leading-tight md:text-5xl">
                            Our Services
                        </h1>
                        <p className="mt-3 max-w-xl text-xs text-white/80 md:text-sm">
                            Tincidunt suspendisse semper integer
                            elementum maecenas.
                        </p>
                    </div>

                    <Link href="/" aria-label="Go to Home" className="absolute inset-0 z-10" />

                </section>

            </div>
        </div>
    );
}
