"use client";

import Image from "next/image";
import type { FC } from "react";

const steps = [
    {
        text: "You can simply contact us on 91-9985439499 via WhatsApp/call or fill in the enquiry form.",
    },
    {
        text: "Our team will contact you and arrange an e-consultation at your convenience.",
    },
    {
        text: "You can scan and send us the copies of X-ray if you already have it. After we evaluate the scan images, we would suggest the overall treatment plan and cost.",
    },
    {
        text: "You can select the date, confirm your flight for further treatment in India.",
    },
];

const JourneyDigitalDentistry: FC = () => {
    return (
        <section className="w-full lg:pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
                    Journey at the Eledent International
                    <br className="hidden sm:block" />
                    Digital Dentistry
                </h2>

                <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end">
                  
                    <div className="relative w-full">
                        <div className="relative mx-auto w-full max-w-xl aspect-[16/11]">
                             <Image
                                src="/dental-tourism/journey.png"
                                alt="Journey at Eledent International Digital Dentistry"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                   
                    <div className="w-full">
                        <div className="relative">
                         
                            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-[#f97316]" />

                            <div className="space-y-6 sm:space-y-7">
                                {steps.map((s, idx) => (
                                    <div key={idx} className="relative flex items-start gap-4">
                                       
                                        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#f97316] bg-white text-sm font-semibold text-gray-900">
                                            {idx + 1}
                                        </div>

                                        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                                            {s.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyDigitalDentistry;