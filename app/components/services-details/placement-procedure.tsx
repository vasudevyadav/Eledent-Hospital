"use client";

import Image from "next/image";

type ProcedureMedia = {
  type?: "image" | "video";
  image_src?: string;
  image_alt?: string;
  embed_url?: string;
  title?: string;
};

type ProcedureItem = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  knowMoreText?: string;
  knowMoreHref?: string;
  media?: ProcedureMedia;
};

type ProcedureBlock = {
  premiumCard?: {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    features?: string[];
    featureIconSrc?: string;
  };
  procedureContent?: ProcedureItem[];
};

type PlacementProcedureProps = {
  procedureBlock?: ProcedureBlock | null;
};

function KnowMoreButton({
  text,
  href,
}: {
  text?: string;
  href?: string;
}) {
  if (!text) return null;

  const innerContent = (
    <>
      {text}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#F47A20] px-6 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white"
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#F47A20] px-6 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white"
    >
      {innerContent}
    </button>
  );
}

function MediaBlock({
  media,
  fallbackTitle,
}: {
  media?: ProcedureMedia;
  fallbackTitle?: string;
}) {
  if (media?.type === "image" && media.image_src) {
    return (
      <div className="relative min-h-[320px] w-full overflow-hidden rounded-xl bg-gray-100 md:min-h-[400px] lg:min-h-[500px]">
        <Image
          src={media.image_src}
          alt={media.image_alt ?? fallbackTitle ?? "Procedure image"}
          fill
          className="object-cover object-center"
        />
      </div>
    );
  }

  if (media?.type === "video" && media.embed_url) {
    return (
      <div className="relative w-full text-center">
        <iframe
          src={media.embed_url}
          title={media.title ?? fallbackTitle ?? "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mx-auto h-[320px] w-full rounded-xl md:h-[400px] lg:h-[500px] lg:w-[90%]"
        />
      </div>
    );
  }

  return <div className="min-h-[320px] w-full rounded-xl bg-gray-100 md:min-h-[400px]" />;
}

export default function PlacementProcedure({
  procedureBlock,
}: PlacementProcedureProps) {
  if (!procedureBlock) return null;

  const premiumCard = procedureBlock.premiumCard;
  const procedureContent = Array.isArray(procedureBlock.procedureContent)
    ? procedureBlock.procedureContent
    : [];

  const features = premiumCard?.features ?? [];
  const featureIconSrc =
    premiumCard?.featureIconSrc ?? "/services/place-icon.png";

  if (!premiumCard && procedureContent.length === 0) return null;

  return (
    <>
      {/* Premium Card */}
      {premiumCard ? (
        <section className="w-full bg-white py-2 md:py-6">
          <div className="mx-auto px-4 lg:max-w-6xl">
            <div className="rounded-[18px] bg-[#EEF2F2] p-5 md:p-7">
              <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[360px_1fr]">
                {premiumCard.imageSrc ? (
                  <div className="overflow-hidden rounded-[14px] bg-[#D9DEDF] min-h-[260px]">
                    <div className="relative h-full min-h-[260px] w-full">
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

                <div className="pt-1 md:pt-3">
                  <h2 className="text-xl font-bold leading-[1.25] text-[#F47A20] md:text-3xl">
                    {premiumCard.title ?? "Premium Dental Implants"}
                  </h2>

                  {premiumCard.description ? (
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
                            "flex items-start gap-3 py-3 text-xs font-medium text-[#484847] w-full lg:w-[35rem] lg:text-[15px]",
                            "border-b-2 border-[#D3D8D8]",
                            idx === features.length - 1 ? "border-b-0" : "",
                          ].join(" ")}
                        >
                          <Image
                            src={featureIconSrc}
                            alt=""
                            width={18}
                            height={18}
                            className="mt-[2px] shrink-0"
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
      ) : null}

      {/* Procedure Sections */}
      {procedureContent.map((item, index) => {
        const isReverse = index % 2 !== 0;
        const paragraphs = Array.isArray(item.paragraphs) ? item.paragraphs : [];

        return (
          <section key={index} className="w-full bg-white py-10 md:py-14">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
                {/* Text */}
                <div className={isReverse ? "md:order-2" : "md:order-1"}>
                  <h2 className="text-xl font-bold leading-tight text-gray-900 md:text-3xl">
                    {item.title ?? "Placement Procedure"}
                  </h2>

                  {item.subtitle ? (
                    <p className="mt-2 text-sm leading-relaxed text-gray-800 md:text-lg">
                      {item.subtitle}
                    </p>
                  ) : null}

                  {paragraphs.length > 0 ? (
                    <div className="mt-5 space-y-4 text-[13px] leading-[1.8] text-gray-600 md:text-sm">
                      {paragraphs.map((para, idx) => (
                        <p key={`${idx}-${para.slice(0, 30)}`}>{para}</p>
                      ))}
                    </div>
                  ) : null}

                  <KnowMoreButton
                    text={item.knowMoreText}
                    href={item.knowMoreHref}
                  />
                </div>

                {/* Media */}
                <div className={isReverse ? "md:order-1" : "md:order-2"}>
                  <MediaBlock
                    media={item.media}
                    fallbackTitle={item.title}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}