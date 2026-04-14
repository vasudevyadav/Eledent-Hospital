"use client";

import Link from "next/link";
import BookingBlog from "../comman/booking-blog";

type RecentArticle = {
  id: number;
  title: string;
  image: string;
  href: string;
};

type BlogDetailsAboutProps = {
  htmlContent: string;
  recentArticles?: RecentArticle[];
};

function RecentArticleCard({ article }: { article: RecentArticle }) {
  return (
    <Link
      href={`/blogs/${article.href}`}
      className="flex gap-3 rounded-[6px] bg-white p-2 transition hover:opacity-90 items-center"
    >
      <div className="relative h-[56px] w-[56px] flex-shrink-0 overflow-hidden rounded-[4px] bg-[#f3f3f3]">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="min-w-0">
        <p className="line-clamp-3 text-[11px] font-medium leading-[1.35] text-[#333333]">
          {article.title}
        </p>
      </div>
    </Link>
  );
}

export default function BlogDetailsAbout({
  htmlContent,
  recentArticles = [],
}: BlogDetailsAboutProps) {
  return (
    <section className="bg-white px-4 py-5 lg:px-6 lg:py-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_250px] xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="mb-2 min-w-0">
            <div
              className="
                blog-content
                break-words
                overflow-x-auto
                [&>*]:max-w-full

                [&_p]:mb-6
                [&_p]:text-[15px]
                [&_p]:leading-[1.75]
                [&_p]:text-[#555555]

                [&_span]:text-[15px]
                [&_span]:leading-[1.75]
                [&_span]:text-[#555555]

                [&_p>strong]:block
                [&_p>strong]:mt-2
                [&_p>strong]:mb-2

                [&_p>b]:block
                [&_p>b]:mt-2
                [&_p>b]:mb-2

                [&_li>b]:block
                [&_li>b]:mt-1
                [&_li>b]:mb-1

                [&_li>strong]:block
                [&_li>strong]:mt-1
                [&_li>strong]:mb-1

                [&_h2]:mt-10
                [&_h2]:mb-5
                [&_h2]:text-[20px]
                [&_h2]:font-bold
                [&_h2]:leading-[1.35]
                [&_h2]:text-[#f47c20]
                lg:[&_h2]:text-[21px]

                [&_h3]:mt-8
                [&_h3]:mb-4
                [&_h3]:text-[20px]
                [&_h3]:font-bold
                [&_h3]:leading-[1.35]
                [&_h3]:text-[#f47c20]
                lg:[&_h3]:text-[21px]

                [&_strong]:font-semibold
                [&_strong]:text-[#222222]

                [&_b]:font-semibold
                [&_b]:text-[#222222]

                [&_ul]:mb-6
                [&_ul]:pl-5
                [&_ul]:list-disc

                [&_ol]:mb-6
                [&_ol]:pl-5
                [&_ol]:list-decimal

                [&_li]:mb-2
                [&_li]:text-[15px]
                [&_li]:leading-[1.7]
                [&_li]:text-[#555555]
                [&_li]:list-item

                [&_a]:font-semibold
                [&_a]:text-[#db5e32]
                [&_a]:underline
                [&_a]:underline-offset-2
                hover:[&_a]:opacity-80

                [&_img]:my-8
                [&_img]:h-auto
                [&_img]:w-full
                [&_img]:rounded-[8px]

                [&_.aligncenter]:mx-auto
                [&_.size-full]:w-full

                [&_table]:my-8
                [&_table]:w-full
                [&_table]:border-collapse
                [&_table]:font-[Arial,sans-serif]

                [&_thead_th]:border
                [&_thead_th]:border-dashed
                [&_thead_th]:border-[#ccc]
                [&_thead_th]:p-[10px]
                [&_thead_th]:text-left
                [&_thead_th]:align-top
                [&_thead_th]:text-[15px]
                [&_thead_th]:font-semibold
                [&_thead_th]:text-[#222222]

                [&_tbody_td]:border
                [&_tbody_td]:border-dashed
                [&_tbody_td]:border-[#ccc]
                [&_tbody_td]:p-[10px]
                [&_tbody_td]:text-left
                [&_tbody_td]:align-top
                [&_tbody_td]:text-[15px]
                [&_tbody_td]:leading-[1.7]
                [&_tbody_td]:text-[#555555]

                [&_tbody_tr]:align-top
              "
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          <aside className="self-start lg:sticky lg:top-36">
            <div className="mb-12 rounded-[15px] bg-[#ef6d2f] px-3 py-4">
              <h1 className="text-[16px] font-bold text-white">
                Recent Article
              </h1>

              <div className="no-scrollbar mt-4 max-h-[410px] space-y-3 overflow-y-auto">
                {recentArticles.length > 0 ? (
                  recentArticles.map((article) => (
                    <RecentArticleCard key={article.id} article={article} />
                  ))
                ) : (
                  <div className="rounded-[8px] bg-white p-3 text-[12px] text-[#555555]">
                    No recent articles available.
                  </div>
                )}
              </div>
            </div>

            <div>
              <BookingBlog />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}