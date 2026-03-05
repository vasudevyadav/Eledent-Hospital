"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="home-about-bg">
            {/* keep your desktop spacing same, but make mobile/tablet nicer */}
            <div className="mt-24 sm:mt-32 lg:mt-40 mx-4 sm:mx-8 lg:mx-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* IMAGE */}
                    <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                            <Image
                                src="/home/home-about.png"
                                alt="Dental treatment"
                                width={700}
                                height={900}
                                priority
                                className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                                <div className="bg-primary rounded-full p-4 sm:p-5 lg:p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                                    <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white fill-white ml-1" />
                                </div>
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

                        <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
                            <p>
                                At Eledent, we live by our motto, &quot;Everyone has the right to
                                smile,&quot; and we ensure that by providing high-quality dental
                                care and always staying on top of trends compared to other
                                dentists in Hyderabad.
                            </p>

                            <p>
                                Equipped with state-of-the-art facilities and skilled dental
                                practitioners, the Eledent Dental Hospital provides complete
                                dental care services from routine dental cleaning, aesthetics to
                                advanced orthodontics and full mouth rehabilitation to cover
                                preventative and restorative dental practices.
                            </p>

                            <p>
                                For the past many years, we have been ensuring patients&apos;
                                satisfaction and happiness with their smiles, and we will strive
                                to do so in the coming years too.
                            </p>
                        </div>

                        <button className="bg-primary text-white px-4 py-2 rounded-sm font-medium text-sm uppercase flex items-center gap-2 group w-full sm:w-fit justify-center sm:justify-start">
                            Know More
                            <ChevronRight className="w-6 h-6 bg-white text-primary p-[1px] rounded-full group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}