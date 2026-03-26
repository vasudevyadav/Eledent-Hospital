"use client";

import Image from "next/image";
import type { FC } from "react";

type BodyItem = {
  type: "p" | "li";
  text: string;
};

type TechSection = {
  id: string;
  title: string;
  body: BodyItem[];
  imageSrc: string;
  imageAlt: string;
  textFirst?: boolean;
  imageFit?: "contain" | "cover";
};

const SECTIONS: TechSection[] = [
  {
    id: "cerec-1",
    title: "CEREC Single Visit Dentistry",
    body: [
      {
        type: "p",
        text: " Same Day Restorations With Digital Precision ",
      },
      {
        type: "p",
        text: " CEREC technology helps our dentists scan, design, and prepare selected restorations in a single visit. With CEREC Omnicam and CAD-CAM support, we can create suitable crowns, inlays, onlays, veneers, and other restorations with greater speed, better fit, and fewer clinic visits. ",
      },

    ],
    imageSrc: "/technology/technology.webp",
    imageAlt: "CEREC single visit dentistry machine",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-1",
    title: " CBCT, OPG and CEPH ",
    body: [
      {
        type: "p",
        text: "3D Imaging For Clearer Diagnosis And Planning",
      },
      {
        type: "p",
        text: "CBCT, OPG, and CEPH scans help our specialists examine teeth, bone support, jaw structure, and surrounding areas in greater detail. This advanced dental imaging is especially useful for dental implants in Hyderabad, orthodontic treatment planning, oral surgery, and other complex dental concerns.",
      },

    ],
    imageSrc: "/technology/Intraoral-Digital-Scanners.jpg",
    imageAlt: "CBCT OPG and CEPH dental scan",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-2",
    title: "Intraoral Digital Scanners",
    body: [
      {
        type: "p",
        text: "Digital Scans Without Messy Impressions",
      },
      {
        type: "p",
        text: "Intraoral scanners capture precise digital images of your teeth and bite in a faster and more comfortable way. These scans help improve treatment planning for crowns, aligners, smile makeovers, implants, and restorative dentistry where accuracy matters from the beginning.",
      },

    ],
    imageSrc: "/technology/technology-1.png",
    imageAlt: "Digital smile designing technology",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-2",
    title: "Digital Smile Design",
    body: [
      {
        type: "p",
        text: "Better Smile Planning Before Treatment Begins",
      },
      {
        type: "p",
        text: "Digital smile planning helps our dentists evaluate tooth shape, alignment, smile balance, and facial harmony before starting cosmetic treatment. This improves planning for veneers, crowns, aligners, whitening, and smile makeover procedures by making the expected result easier to understand.",
      },

    ],
    imageSrc: "/technology/Digital-Smile-Design.jpg",
    imageAlt: "Advanced dental laser equipment",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-3",
    title: "Microscopic Dentistry",
    body: [
      {
        type: "p",
        text: "Magnified Precision For Detailed Dental Procedures",
      },
      {
        type: "p",
        text: "  Microscopic dentistry allows our specialists to work with much higher visual precision during selected treatments. It is especially useful in root canal treatment in Hyderabad, restorative care, and delicate procedures where better visibility can help preserve more healthy tooth structure.",
      },



    ],
    imageSrc: "/technology/Microscopic-Dentistry.jpg",
    imageAlt: "Integrated implantology system",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-3",
    title: " Guided Biofilm Therapy (GBT) ",
    body: [
      {
        type: "p",
        text: "Advanced Cleaning For Healthier Teeth And Gums",
      },
      {
        type: "p",
        text: "Guided Biofilm Therapy is a modern preventive dental technology that helps remove plaque and biofilm in a more targeted and comfortable way. It supports gum health, preventive care, and cleaner maintenance for patients with braces, implants, or long-term oral hygiene needs.",
      },

    ],
    imageSrc: "/technology/Guided-Biofilm-Therapy-(GBT).jpg",
    imageAlt: "Zoom teeth whitening treatment",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-4",
    title: "Conscious Sedation",
    body: [
      {
        type: "p",
        text: " More Comfortable Care For Anxious Dental Patients ",
      },
      {
        type: "p",
        text: "Conscious sedation helps patients feel more relaxed during dental treatment while staying awake and responsive. It can be especially helpful for anxious patients, longer procedures, or those who feel nervous about dental treatment in Hyderabad.",
      },

    ],
    imageSrc: "/technology/Conscious-Sedation.jpg",
    imageAlt: "Advanced dental chair",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-5",
    title: "Integrated Implantology",
    body: [

      {
        type: "p",
        text: "Technology-Driven Planning For Implant Precision",
      },
      {
        type: "p",
        text: "Dental implants require careful evaluation of bone, bite, position, and long-term function. Our implant planning technology helps specialists assess the site more accurately, place implants with better precision, and support stronger natural-looking tooth replacement.",
      },

    ],
    imageSrc: "/technology/Integrated-Implantology.jpg",
    imageAlt: "Zoom teeth whitening treatment",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cbct-6",
    title: "Zoom Teeth Whitening",
    body: [

      {
        type: "p",
        text: "Professional Whitening For Brighter Smiles",
      },
      {
        type: "p",
        text: "Zoom teeth whitening is an advanced in-clinic whitening system designed to improve tooth shade safely and effectively. It is a suitable option for patients looking for faster, more noticeable whitening results under professional supervision.",
      },

    ],
    imageSrc: "/technology/Zoom-Teeth-Whitening.jpg",
    imageAlt: "Advanced dental chair",
    textFirst: true,
    imageFit: "cover",
  },
];

const TechnologyAbout: FC = () => {
  return (
    <section className="bg-white py-1 lg:py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10 lg:space-y-14">
          {SECTIONS.map((sec) => {
            const paragraphItems = sec.body.filter((item) => item.type === "p");
            const listItems = sec.body.filter((item) => item.type === "li");

            const textBlock = (
              <div className="px-2 sm:px-4 lg:px-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-[#f37021]">
                  {sec.title}
                </h2>

                <div className="mt-4 text-sm sm:text-sm leading-7 text-gray-700 max-w-xl">
                  <div className="space-y-4">
                    {paragraphItems.map((item, i) => (
                      <p key={`${sec.id}-p-${i}`}>{item.text}</p>
                    ))}
                  </div>

                  {listItems.length > 0 && (
                    <ul className="mt-4 list-disc pl-5 space-y-2">
                      {listItems.map((item, i) => (
                        <li key={`${sec.id}-li-${i}`}>{item.text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );

            const imageBlock = (
              <div>
                <div className="w-full max-w-[560px] rounded-2xl overflow-hidden bg-[#f6f6f6]">
                  <div className="relative w-full h-[260px] lg:h-[450px]">
                    <Image
                      src={sec.imageSrc}
                      alt={sec.imageAlt}
                      fill
                      priority
                      className={sec.imageFit === "cover" ? "object-cover" : "object-contain"}

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