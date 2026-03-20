"use client";

import Image from "next/image";

type ProcedureBlock = {
  premiumCard?: {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    features?: string[];
    featureIconSrc?: string; // old icon: "/services/place-icon.png"
  };
  procedureContent?: {
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
    knowMoreText?: string;
    knowMoreHref?: string;
  };
  video?: {
    embedUrl?: string;
    title?: string;
  };
};

type PlacementProcedureProps = {
  procedureBlock?: ProcedureBlock | null;
};

export default function PlacementProcedure({
  procedureBlock,
}: PlacementProcedureProps) {
  if (!procedureBlock) return null;

  const premiumCard = procedureBlock.premiumCard;
  const procedureContent = procedureBlock.procedureContent;
  const video = procedureBlock.video;

  const features = premiumCard?.features ?? [];
  const paragraphs = procedureContent?.paragraphs ?? [];

  if (!premiumCard && !procedureContent && !video) return null;

  const featureIconSrc =
    premiumCard?.featureIconSrc ?? "/services/place-icon.png";

  return (
    <>
      {/* SECTION 1: Premium Card (same as old top card) */}
      <section className="w-full bg-white py-2 md:py-6">
        <div className="mx-auto lg:max-w-6xl px-4">
          <div className="rounded-[18px] bg-[#EEF2F2] p-5 md:p-7">
            <div className="grid gap-8 lg:grid-cols-[360px_1fr] grid-cols-1 md:gap-10">
              {/* Left image */}
              {premiumCard?.imageSrc ? (
                <div className="overflow-hidden rounded-[14px] bg-[#D9DEDF] min-h-[260px]">
                  <div className="relative w-full h-full">
                    <Image
                      src={premiumCard.imageSrc}
                      alt={
                        premiumCard.imageAlt ??
                        "Dentist showing X-ray to patient"
                      }
                      fill
                      priority
                      className="object-cover object-center"

                    />
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-[14px] bg-[#D9DEDF] min-h-[260px]" />
              )}

              {/* Right content */}
              <div className="pt-1 md:pt-3">
                <h2 className="text-xl font-bold leading-[1.25] text-[#F47A20] md:text-3xl">
                  {premiumCard?.title ?? "Premium Dental Implants"}
                </h2>

                {premiumCard?.description ? (
                  <p className="mt-3 max-w-2xl text-xs leading-[1.6] text-gray-700 md:text-base">
                    {premiumCard.description}
                  </p>
                ) : null}

                {features.length > 0 ? (
                  <ul className="mt-6">
                    {features.map((feature, idx) => (
                      <li
                        key={`${feature}-${idx}`}
                        className={[
                          "flex items-start gap-3 py-3 text-xs font-medium text-[#484847] lg:w-[35rem] w-72 lg:text-[15px]",
                          "border-b-2 border-[#D3D8D8]",
                          idx === features.length - 1 ? "border-b-0" : "",
                        ].join(" ")}
                      >
                        <Image
                          src={featureIconSrc}
                          alt=""
                          width={18}
                          height={18}
                          className="mt-[2px] flex-shrink-0"
                          priority
                          aria-hidden="true"
                        />
                        <span className="leading-[1.35]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Procedure + Video (same as old bottom section) */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 md:text-3xl leading-tight">
                {procedureContent?.title ?? "Placement Procedure"}
              </h2>

              {procedureContent?.subtitle ? (
                <p className="mt-2 text-sm text-gray-800 leading-relaxed md:text-lg">
                  {procedureContent.subtitle}
                </p>
              ) : null}

              {paragraphs.length > 0 ? (
                <div className="mt-5 space-y-3 text-[13px] text-gray-600 leading-[1.7] md:text-sm">
                  {paragraphs.map((para, idx) => (
                    <p key={`${idx}-${para.slice(0, 20)}`}>{para}</p>
                  ))}
                </div>
              ) : null}

              {procedureContent?.knowMoreText ? (
                procedureContent?.knowMoreHref ? (
                  <a
                    href={procedureContent.knowMoreHref}
                    className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#F47A20] px-6 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white"
                  >
                    {procedureContent.knowMoreText}

                    <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#F47A20] px-6 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white"
                  >
                    {procedureContent.knowMoreText}

                    <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                )
              ) : null}
            </div>

            {/* Right video */}
            {video?.embedUrl ? (
              <div className="relative w-full text-center">
                <iframe
                  src={video.embedUrl}
                  title={video.title ?? "YouTube video player"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="mx-auto rounded-xl lg:w-[420px] lg:h-[500px] h-[400px] w-full"

                />
              </div>
            ) : (
              <div className="w-full rounded-xl bg-gray-100 min-h-[420px]" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}