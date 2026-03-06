"use client";

import Image from "next/image";
import Link from "next/link";

type BlogHeroProps = {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
};

export default function BlogHero({
  title = "Blog",
  subtitle = "Tincidunt suspendisse semper integer elementum maecenas.",
  backgroundImage = "/blog/blog-banner.png",
}: BlogHeroProps) {
  return (
    <div className="lg:my-12 my-4 lg:mx-24 mx-6">
      <section className="relative z-0 lg:h-[450px] h-[350px] w-full overflow-hidden rounded-3xl">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-semibold">
            {title}
          </h1>

          <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl">
            {subtitle}
          </p>
        </div>

        <Link href="/" className="absolute inset-0 z-10" aria-label="Go to Home" />
      </section>
    </div>
  );
}