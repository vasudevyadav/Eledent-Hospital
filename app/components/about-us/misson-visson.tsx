"use client";

import Image from "next/image";
import type { FC } from "react";

type MVItem = {
    id: "vision" | "mission";
    title: string;
    desc: string;
    image: string;
};

const MissionVision: FC = () => {
    const CARD_BG_IMAGE = "/about-us/vission.png";

    const MV_ITEMS: MVItem[] = [
        {
            id: "vision",
            title: "Vision",
            desc: "To create a dental care experience where every patient feels informed, comfortable, and confident about treatment through specialist expertise, modern technology, and patient-first care.",
            image: "/about-us/vision.png",
        },
        {
            id: "mission",
            title: "Mission",
            desc: "To deliver multi-speciality dental care with clear diagnosis, precise treatment planning, and modern dentistry that supports healthier, long-lasting smiles.",
            image: "/about-us/mission.png",
        },
    ];

    return (
        <section className="lg:pt-20 pt-12 pb-10 px-4 sm:px-8 lg:px-20">
            <div className="max-w-[1240px] mx-auto">

                <div className="relative overflow-visible">

                    <div className="relative h-[320px] sm:h-[270px] rounded-[18px] lg:bg-[#E67735] overflow-visible">

                        <div className="h-full w-full px-6 sm:px-36 py-12 sm:py-10 lg:flex flex-col justify-center">
                            <p className="text-white/85 text-xs sm:text-sm mb-4">Our Purpose </p>

                            <h3 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl max-w-[420px]">
                                Advanced Dental Care More Clearer, Comfortable & Easier in Hyderabad
                            </h3>
                        </div>

                        <div
                            className={[
                                "absolute z-20",
                                "top-1/2 -translate-y-1/2",

                                "lg:right-28 md:right-[-40px]",

                                "right-0 sm:right-2",

                                "w-[340px] sm:w-[400px] md:w-[420px]",
                            ].join(" ")}
                        >
                            <div className="relative rounded-[18px] bg-white shadow-2xl overflow-hidden">

                                <div
                                    className="absolute inset-0 bg-cover bg-bottom bg-center "
                                    style={{ backgroundImage: `url('${CARD_BG_IMAGE}')` }}
                                />


                                <div className="relative px-6 py-6 mt-1">
                                    {MV_ITEMS.map((item, idx) => (
                                        <div key={item.id}>
                                            <div className="flex gap-4 items-start">
                                                <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={900}
                                                        height={900}
                                                        priority
                                                        className="w-5 "
                                                    />

                                                </div>

                                                <div>
                                                    <h4 className="text-[#2F2F2F] font-bold text-base">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1 max-w-[280px]">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            {idx !== MV_ITEMS.length - 1 && (
                                                <div className="my-5 h-px bg-gray-200" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="absolute right-0 top-0 h-full w-[90px] sm:w-[110px] rounded-[18px] bg-[#E67735]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
