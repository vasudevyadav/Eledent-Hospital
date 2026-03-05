"use client";

import Image from "next/image";
import type { FC } from "react";

type TechSection = {
  id: string;
  title: string;
  body: string[];
  imageSrc: string;
  imageAlt: string;
  textFirst?: boolean;
  imageFit?: "contain" | "cover";
};

const SECTIONS: TechSection[] = [
  {
    id: "cerec-1",
    title: "CEREC – Single Visit Dentistry",
    body: [
      "Now with the updated technology of CAD & CAM, CEREC has made everything easy, right from the scanning to the designing and structuring of your tooth restoration. The CEREC Omnicam fits in your hand easily and can scan your dentition to give a clearer picture in order to start treatment immediately. Chairside scanning is done and the whole scanning is analysed and the best results are given by the CEREC software.",
      "We have CEREC milling and grinding units as well which helps in making it more involved with website to design the restoration and give the restoration the required smooth look. With CEREC, we will make sure that your dental issue are fixed in one go without much need to visit the clinic several times.",
    ],
    imageSrc: "/technology/technology.png",
    imageAlt: "CEREC single visit dentistry machine",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-1",
    title: "CBCT – OPG & CEPH",
    body: [
      "We have the updated technology when it comes to CBCT (Cone beam computed tomography) that is a CBCT scan orthodontics where the scanning is done easily and gives 3D images with clear visualisation making things easier for our experts.",
    ],
    imageSrc: "/technology/technology-1.png",
    imageAlt: "CBCT OPG and CEPH dental scan",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-2",
    title: "CEREC – Single Visit Dentistry",
    body: [
      "Now with the updated technology of CAD & CAM, CEREC has made everything easy, right from the scanning to the designing and structuring of your tooth restoration. The CEREC Omnicam fits in your hand easily and can scan your dentition to give a clearer picture in order to start treatment immediately. Chairside scanning is done and the whole scanning is analysed and the best results are given by the CEREC software.",
      "We have CEREC milling and grinding units as well which helps in making it more involved with website to design the restoration and give the restoration the required smooth look. With CEREC, we will make sure that your dental issue are fixed in one go without much need to visit the clinic several times.",
    ],
    imageSrc: "/technology/technology-2.png",
    imageAlt: "CEREC single visit dentistry machine",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-2",
    title: "CBCT – OPG & CEPH",
    body: [
      "We have the updated technology when it comes to CBCT (Cone beam computed tomography) that is a CBCT scan orthodontics where the scanning is done easily and gives 3D images with clear visualisation making things easier for our experts.",
    ],
    imageSrc: "/technology/technology-4.png",
    imageAlt: "CBCT OPG and CEPH dental scan",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-3",
    title: "CEREC – Single Visit Dentistry",
    body: [
      "Now with the updated technology of CAD & CAM, CEREC has made everything easy, right from the scanning to the designing and structuring of your tooth restoration. The CEREC Omnicam fits in your hand easily and can scan your dentition to give a clearer picture in order to start treatment immediately. Chairside scanning is done and the whole scanning is analysed and the best results are given by the CEREC software.",
      "We have CEREC milling and grinding units as well which helps in making it more involved with website to design the restoration and give the restoration the required smooth look. With CEREC, we will make sure that your dental issue are fixed in one go without much need to visit the clinic several times.",
    ],
    imageSrc: "/technology/technology-5.png",
    imageAlt: "CEREC single visit dentistry machine",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-3",
    title: "CBCT – OPG & CEPH",
    body: [
      "We have the updated technology when it comes to CBCT (Cone beam computed tomography) that is a CBCT scan orthodontics where the scanning is done easily and gives 3D images with clear visualisation making things easier for our experts.",
    ],
    imageSrc: "/technology/technology-6.png",
    imageAlt: "CBCT OPG and CEPH dental scan",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-4",
    title: "CEREC – Single Visit Dentistry",
    body: [
      "Now with the updated technology of CAD & CAM, CEREC has made everything easy, right from the scanning to the designing and structuring of your tooth restoration. The CEREC Omnicam fits in your hand easily and can scan your dentition to give a clearer picture in order to start treatment immediately. Chairside scanning is done and the whole scanning is analysed and the best results are given by the CEREC software.",
      "We have CEREC milling and grinding units as well which helps in making it more involved with website to design the restoration and give the restoration the required smooth look. With CEREC, we will make sure that your dental issue are fixed in one go without much need to visit the clinic several times.",
    ],
    imageSrc: "/technology/technology-7.png",
    imageAlt: "CEREC single visit dentistry machine",
    textFirst: true,
    imageFit: "cover",
  },
];

const TechnologyAbout: FC = () => {
  return (
    <section className="bg-white py-6 lg:py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10 lg:space-y-14">
          {SECTIONS.map((sec) => {
            const textBlock = (
              <div className="px-2 sm:px-4 lg:px-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-[#f37021]">
                  {sec.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm sm:text-base leading-7 text-gray-700 max-w-xl">
                  {sec.body.map((p, i) => (
                    <p key={`${sec.id}-p-${i}`}>{p}</p>
                  ))}
                </div>
              </div>
            );

            const imageBlock = (
              <div>
                <div className="w-full max-w-[560px] rounded-2xl overflow-hidden bg-[#f6f6f6]">
                  <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px]">
                    <Image
                      src={sec.imageSrc}
                      alt={sec.imageAlt}
                      fill
                      priority
                      className={`object-${sec.imageFit ?? "contain"}`}
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={sec.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
              >
                {sec.textFirst ? (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    <div className="order-1">{imageBlock}</div>
                    <div className="order-2 lg:pl-6">{textBlock}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyAbout;