"use client";

import Image from "next/image";

type OverviewPart = {
  text: string;
};

type OverviewData = {
  badge?: string;
  heading?: string;
  intro?: string;
  partsTitle?: string;
  partsList?: OverviewPart[];
  conclusion?: string;
  doctorImageSrc?: string;
  doctorImageAlt?: string | boolean;
};

type Props = {
  data?: OverviewData;
};

function extractTextFromHtml(html: string) {
  if (!html) return "";
  if (typeof window === "undefined") {
    return html.replace(/<[^>]*>/g, "").trim();
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
}

export default function DentalImplantsSection({ data }: Props) {
  const {
    badge = "What",
    heading = "Exactly Are Dental Implants?",
    intro = "",
    partsTitle = "",
    partsList = [],
    conclusion = "",
    doctorImageSrc = "/services/services-what.png",
    doctorImageAlt = "Service illustration",
  } = data || {};

  const cleanHeading = extractTextFromHtml(heading);

  const imageAlt =
    typeof doctorImageAlt === "string" && doctorImageAlt.trim()
      ? doctorImageAlt
      : "Service illustration";

  const imageSrc =
    doctorImageSrc && doctorImageSrc.trim()
      ? doctorImageSrc
      : "/services/services-what.png";

  return (
    <section className="mb-10 w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {badge ? (
              <span className="inline-flex items-center bg-[#F47A20] px-4 py-1.5 text-base font-semibold leading-none text-white">
                {badge}
              </span>
            ) : null}

            {cleanHeading ? (
              <h2 className="mt-4 text-xl font-semibold text-[#F47A20] lg:text-[34px] lg:font-extrabold lg:leading-[1.15]">
                {cleanHeading}
              </h2>
            ) : null}

            {intro ? (
              <div
                className="wp-body-content mt-4 max-w-2xl"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
            ) : null}

            {(partsTitle || partsList.length > 0) && (
              <div className="mt-5">
                {partsTitle ? (
                  <div
                    className="wp-parts-title"
                    dangerouslySetInnerHTML={{ __html: partsTitle }}
                  />
                ) : null}

                {partsList.length > 0 ? (
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-base leading-relaxed text-[#6B7280]">
                    {partsList.map((item, index) => (
                      <li
                        key={index}
                        className="wp-list-item"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    ))}
                  </ol>
                ) : null}
              </div>
            )}

            {conclusion ? (
              <div
                className="wp-body-content mt-5 max-w-2xl"
                dangerouslySetInnerHTML={{ __html: conclusion }}
              />
            ) : null}
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto hidden w-full max-w-[420px] items-center justify-center lg:flex">
              <div className="absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 md:w-[400px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>

            <div className="block lg:hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={900}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}