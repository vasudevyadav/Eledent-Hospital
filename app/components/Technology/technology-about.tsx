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
    title: "CEREC – Single Visit Dentistry",
    body: [
      {
        type: "p",
        text: "Now with the updated technology of CAD & CAM , CEREC has made everything easy right from the scanning to the designing and structuring of your tooth care restoration. The CEREC Omnicam fits in your hand easily and can scan your dental condition to give a clearer picture in order to align a treatment accordingly. Check rejuvenate medical group. The whole scanning is analyzed and the best results are given by the CEREC software.",
      },
      {
        type: "p",
        text: "We have CEREC milling and grinding units as well which helps in making it more involved with website to design the restoration and give the restoration the required smooth look. With CEREC, we will make sure that your dental issue are fixed in one go without the much need to visit the clinic several times.",
      },

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
      {
        type: "p",
        text: "We have the updated technology when it comes to CBCT ( Cone beam computed tomography ) that is Cbct sirona orthophos where the scanning is done easily and gives 3D images with clear visualization making things easier for our experts.",
      },

    ],
    imageSrc: "/technology/technology-1.png",
    imageAlt: "CBCT OPG and CEPH dental scan",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-2",
    title: "Digital Smile Designing",
    body: [
      {
        type: "p",
        text: "DSD is a software that helps in the process of restoration and assist in designing the perfect smile to the patients. The software makes the work much easy where the patient will have a complete picture of how the structural evaluation is done. Read more about it support san diego ca. This software makes it easy for the experts to show the tooth structure and they can also take inputs from the patient on various aspects.",
      },

    ],
    imageSrc: "/technology/technology-2.png",
    imageAlt: "Digital smile designing technology",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-2",
    title: "Advance Lasers Equipment",
    body: [
      {
        type: "p",
        text: "We are equipped with the finest and advanced laser technology to make the procedures free flowing. They assist in efficient invasive treatments that can be completed with minimal bleeding without causing noticeable pain.",
      },

    ],
    imageSrc: "/technology/technology-4.png",
    imageAlt: "Advanced dental laser equipment",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-3",
    title: "Integrated Implantology",
    body: [
      {
        type: "p",
        text: "Integrated Implantology will enable us to improve our workflow while benefiting the patients who expect perfect solution from one source resources in the nearby future.",
      },

    ],
    imageSrc: "/technology/technology-5.png",
    imageAlt: "Integrated implantology system",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-3",
    title: "Zoom Whitening",
    body: [
      {
        type: "p",
        text: "Do you often visit your Dentist to get a tooth whitening done? How often do you visit? Maybe twice in a month? we are sure that you should be tired of your tooth staining due to the foods & drinks that you consume every day?",
      },
      {
        type: "p",
        text: "We are here to make your lives easier with Zoom whitening. This is an advanced bleaching dental process that is far better and considerable compared to the traditional whitening. This evolved technology helps in cleaning out stains and discoloration perfectly.You will be able to redeem your white teeth over a long period of time now!",
      },
      {
        type: "li",
        text: "Basic checkup and teeth cleaning is done as a part of the initial phase.",
      },
      {
        type: "li",
        text: "The gums portion is carefully covered with the help of a cap.",
      },
      {
        type: "li",
        text: "Our dentist then applies the patented zoom Hydrogen peroxide whitening gel to your teeth.",
      },
      {
        type: "li",
        text: "This Hydrogen Peroxide penetrates well in all the areas of teeth and breaks up the stains and discoloration, giving you healthy white teeth which can help you flaunt your perfect smile!",
      },
    ],
    imageSrc: "/technology/technology-6.png",
    imageAlt: "Zoom teeth whitening treatment",
    textFirst: false,
    imageFit: "cover",
  },
  {
    id: "cerec-4",
    title: "Dental Chair",
    body: [
      {
        type: "p",
        text: "The dental chair on which a patient lies and gets his or her tooth care treatment plays a crucial role both for the patient as well as the Dentist. The chair needs to be comfortable for the patient as the patient is going to spend a long time in the chair and also at the same time, the chair needs to be advanced with all the technology equipped so that it’s easy for the Dentist to handle things immediately then and there without the need for fetching the requirements every time.",
      },
      {
        type: "p",
        text: "At Eledent, patients comfort is our top most priority and that’s the reason we have the advanced technology in place with our Dental Chair.The chair is designed in a way that it keeps the patient relaxed over a long time and is equipped with additional facilities compared to a regular dental chair that you should have seen in many places.Dental Disinfection system",
      },
      {
        type: "p",
        text: "We have the best possible self disinfection system in place which is automated and makes sure that the dental equipment are properly sterilized before they can be used for another patient.",
      },

    ],
    imageSrc: "/technology/technology-7.png",
    imageAlt: "Advanced dental chair",
    textFirst: true,
    imageFit: "cover",
  },
  {
    id: "cbct-5",
    title: "Sterilization Techniques",
    body: [

      {
        type: "li",
        text: "We follow the process of Fumigation wherein Formalin fumes is used to disinfect the room. The rooms are sealed and closed during the process to make the process effective!",
      },
      {
        type: "li",
        text: "We use Autoclave class b when it comes to sterilizing the dental tools and equipment be it hollow, porous or wrapped items. They are placed in the autoclave bags and a timer is set for the sterilization. This is a vacuum-based technology and helps in 100% disinfection..",
      },
      {
        type: "li",
        text: "We also use an Ultrasonic cleaner to remove the biological traces on the dental equipment used for the patient. A sterilization solution is prepared here with the help of the sound waves and water and the equipment are thoroughly cleaned through this process.",
      },
      {
        type: "li",
        text: "After all the equipment are sterilized, we use UV chambers to store the equipment so that they remain disinfected and can be used as per convenience.",
      },
    ],
    imageSrc: "/technology/technology-6.png",
    imageAlt: "Zoom teeth whitening treatment",
    textFirst: false,
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