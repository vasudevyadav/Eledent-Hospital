"use client";

import Image from "next/image";

type BlogDetailsHeroProps = {
  hero: {
    title: string;
    image: string;
  };
};

export default function BlogDetailsHero({ hero }: BlogDetailsHeroProps) {
  return (
    <div className="lg:my-12 my-6 lg:mx-24 mx-6 lg:mt-40 mt-36">
      <section className="relative z-0 lg:h-[500px] object-cover h-[120px] w-full overflow-hidden rounded-3xl">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          {/* <h1 className="text-white text-xl lg:text-4xl font-semibold">
            {hero.title}
          </h1> */}
        </div>
      </section>
    </div>
  );
}