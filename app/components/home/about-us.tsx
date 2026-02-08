"use client";
import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="my-24 mx-4 sm:mx-8 lg:mx-24">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                <div className="relative">

                    <div className="absolute -inset-20 opacity-30 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                                    <path d="M25,0 L75,0 L100,43.5 L75,87 L25,87 L0,43.5 Z"
                                        fill="none"
                                        stroke="#e0e0e0"
                                        strokeWidth="1.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hexagons)" />
                        </svg>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                        <Image
                            src="/home/home-about.png"
                            alt="Dental treatment"
                            className="w-full h-[400px] object-cover"
                            width={600}
                            height={850}
                            priority
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                            <div className="bg-primary rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>


                <div>

                    <div className=" w-fit bg-primary text-white px-1 py-0 text-base font-semibold mb-6">
                        About
                    </div>

                    <h2 className="text-2xl lg:text-[32px] font-bold text-primary leading-tight mb-1">
                        Eledent Dental Hospital
                    </h2>

                    <p className="text-[22px] text-gray-800 font-medium mb-3">
                        Best Dental Clinic in Hyderabad
                    </p>

                    <div className="space-y-4 text-gray-600 text-base mb-7 leading-relaxed">
                        <p>
                            At Eledent, we live by our motto, "Everyone has the right to smile," and we ensure that by providing high-quality dental care and always staying on top of trends compared to other dentists in Hyderabad.
                        </p>

                        <p>
                            Equipped with state-of-the-art facilities and skilled dental practitioners, the Eledent Dental Hospital provides complete dental care services from routine dental cleaning, aesthetics to advanced orthodontics and full mouth rehabilitation to cover preventative and restorative dental practices.
                        </p>

                        <p>
                            For the past many years, we have been ensuring patients' satisfaction and happiness with their smiles, and we will strive to do so in the coming years too.
                        </p>
                    </div>

                    <button className="bg-primary text-white px-4 py-1.5 rounded-sm font-medium  text-sm uppercase flex items-center gap-2 group">
                        Know More
                        <ChevronRight className="w-6 h-6 bg-white text-primary p-[1px] rounded-full group-hover:translate-x-1 transition-transform" />
                    </button>

                </div>
            </div>
        </div>
    );
}