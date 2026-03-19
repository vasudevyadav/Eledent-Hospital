"use client";
import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
    return (
        <div className="lg:my-12 my-6 lg:mx-24 mx-6 lg:mt-40 mt-36">

            <section className="relative z-0 lg:h-[420px] h-[300px] w-full overflow-hidden rounded-3xl">
                <Image
                    src="/about-us/about-us-hero.png"
                    alt="About Us banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold">
                        About Us
                    </h1>
                    <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl">
                        Multi-Speciality Dental Hospital Chain in Hyderabad
                    </p>
                </div>


                <Link href="/" className="absolute inset-0 z-10" aria-label="Go to Home" />


            </section>

        </div>
    );
}
