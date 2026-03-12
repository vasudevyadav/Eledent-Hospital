"use client";

import Image from "next/image";
import Link from "next/link";

type RecentArticle = {
  id: number;
  title: string;
  image: string;
  href: string;
};

type BlogSection = {
  id: number;
  heading: string;
  paragraphs: string[];
  points: string[];
};

type BlogDetailsAboutProps = {
  content: {
    heroImage: string;
    centerImage: string;
    introParagraphs: string[];
    sections: BlogSection[];
    recentArticles: RecentArticle[];
  };
};

function RecentArticleCard({ article }: { article: RecentArticle }) {
  return (
    <Link
      href={`/blog/${article.href}`}
      className="flex gap-3 rounded-[6px] bg-white p-2 transition hover:opacity-90"
    >
      <div className="relative h-[56px] w-[56px] flex-shrink-0 overflow-hidden rounded-[4px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="line-clamp-3 text-[11px] font-medium leading-[1.35] text-[#333333]">
          {article.title}
        </p>
      </div>
    </Link>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[20px] font-bold leading-[1.35] text-[#f47c20] lg:text-[21px]">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-[1.75] text-[#555555]">{children}</p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-1 text-[15px] leading-[1.7] text-[#555555]">
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default function BlogDetailsAbout({ content }: BlogDetailsAboutProps) {
  return (
    <section className="bg-white px-4 py-5 lg:px-6 lg:py-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_250px] xl:grid-cols-[minmax(0,1fr)_270px]">
          <div className="mb-2">
            <div className="relative w-full h-[260px] lg:h-[500px]">
              <Image
                src={content.heroImage}
                alt="Dental implant procedure"
                fill
                priority
                className="object-cover rounded-[8px]"
              />
            </div>

            <div className="mt-10 space-y-7">
              {content.introParagraphs?.map((item, index) => (
                <Paragraph key={index}>{item}</Paragraph>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {content.sections?.map((section, index) => (
                <div key={section.id}>
                  <SectionHeading>{section.heading}</SectionHeading>

                  <div className="mt-5 space-y-6">
                    {section.paragraphs?.map((item, paragraphIndex) => (
                      <Paragraph key={paragraphIndex}>{item}</Paragraph>
                    ))}

                    {section.points?.length > 0 && (
                      <BulletList items={section.points} />
                    )}
                  </div>

                  {index === 1 && content.centerImage && (
                    <div className="mt-12 flex justify-center">
                      <div className="w-full">
                        <Image
                          src={content.centerImage}
                          alt="Dental implant procedure step"
                          width={980}
                          height={400}
                          className="h-[300px] lg:h-[550px] w-full object-cover rounded-[8px]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-24">
            <div className="rounded-[0_0_18px_18px] bg-[#ef6d2f] px-3 py-4">
              <h3 className="text-[16px] font-bold text-white">
                Recent Article
              </h3>

              <div className="mt-4 space-y-3">
                {content.recentArticles?.map((article) => (
                  <RecentArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}