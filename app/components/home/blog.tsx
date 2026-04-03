"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { JSX } from "react";

type BlogCard = {
  id: string;
  img: string;
  date: string;
  title: string;
  desc: string;
  author: string;
  href: string;
};

type ApiPost = {
  id: string;
  title?: string;
  shortTitle?: string;
  date?: string;
  description?: string;
  image?: string;
  href?: string;
  category?: {
    id?: string;
    label?: string;
    slug?: string;
  };
};

type ApiResponse = {
  success: boolean;
  message?: string;
  data?: {
    hero?: {
      title?: string;
      subtitle?: string;
    };
    listingSection?: {
      blogsPerPage?: number;
      posts?: ApiPost[];
    };
  };
};

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`;

function formatDate(dateString?: string): string {
  if (!dateString) return "No date";

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function normalizeBlogHref(href?: string): string {
  if (!href || href === "#") return "#";

  let finalHref = href.trim();

  try {
    if (finalHref.startsWith("http://") || finalHref.startsWith("https://")) {
      const parsed = new URL(finalHref);
      finalHref = parsed.pathname || "#";
    }
  } catch {
    // keep original href if URL parsing fails
  }

  if (!finalHref.startsWith("/")) {
    finalHref = `/${finalHref}`;
  }

  if (finalHref.startsWith("/blog/")) {
    finalHref = finalHref.replace(/^\/blog\//, "/blogs/");
  }

  return finalHref;
}

export default function BlogMain(): JSX.Element {
  const [cards, setCards] = useState<BlogCard[]>([]);
  const [heading, setHeading] = useState("Our Blog");
  const [subtitle, setSubtitle] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
          throw new Error("API base URL is missing in environment variables.");
        }

        const response = await fetch(API_URL, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blogs.");
        }

        const result: ApiResponse = await response.json();

        if (!result.success) {
          throw new Error(result.message || "API returned unsuccessful response.");
        }

        const hero = result.data?.hero;
        const posts = result.data?.listingSection?.posts || [];
        const blogsPerPage = result.data?.listingSection?.blogsPerPage || 3;

        setHeading(hero?.title || "Our Blog");
        setSubtitle(hero?.subtitle || "");

        const latestBlogs: BlogCard[] = [...posts]
          .sort((a, b) => {
            const dateA = new Date(a.date || "").getTime();
            const dateB = new Date(b.date || "").getTime();
            return dateB - dateA;
          })
          .slice(0, blogsPerPage > 0 ? blogsPerPage : 3)
          .map((item) => ({
            id: item.id,
            img: item.image || "/home/home-blog.png",
            date: formatDate(item.date),
            title: item.title || "Untitled Blog",
            desc: item.description || "No description available.",
            author: "Admin Rose",
            href: normalizeBlogHref(item.href),
          }));

        setCards(latestBlogs);
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError("Unable to load blogs right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="w-full bg-white pt-0 lg:py-16 lg:pt-10">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">
        <div className="text-center">
          <span className="inline-flex items-center justify-center bg-[#f47200] px-[10px] py-[6px] text-sm font-semibold leading-none text-white">
            Our
          </span>

          <h2 className="mt-3 text-[30px] font-semibold leading-none text-slate-700">
            {heading}
          </h2>

          {subtitle && (
            <p className="mx-auto mb-10 mt-3 max-w-[700px] text-sm leading-relaxed text-slate-500">
              {subtitle}
            </p>
          )}

          {!subtitle && <div className="mb-6" />}
        </div>

        {loading && (
          <div className="mt-10 text-center text-sm text-slate-500">
            Loading blogs...
          </div>
        )}

        {error && (
          <div className="mt-10 text-center text-sm text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && cards.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, idx) => (
              <article
                key={c.id}
                className="rounded-[10px] bg-white shadow-[0_18px_50px_-34px_rgba(15,30,42,0.85)] lg:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <div className="relative overflow-hidden rounded-[10px]">
                  <div className="relative h-[220px] w-full">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      priority={idx === 0}
                      unoptimized
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 rounded-tl-[6px] bg-[#f47200] px-4 py-1.5 text-xs font-medium text-white">
                    {c.date}
                  </div>
                </div>

                <div className="px-6 pb-5 pt-5">
                  {c.href && c.href !== "#" && (
                    <Link href={c.href}>
                      <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-[#f47200]">
                        {c.title}
                      </h3>
                    </Link>
                  )}

                  <p className="mt-2 !line-clamp-1 line-clamp-3 text-sm leading-relaxed text-black">
                    {c.desc}
                  </p>

                  <div className="mt-4 border-t border-slate-200/70" />

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span>
                      By <span className="text-slate-600">{c.author}</span>
                    </span>

                    <div className="flex items-center gap-4 text-[#f47200]">
                      <div className="flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 20s-7-4.5-7-10.2C5 7.1 6.7 5.5 9 5.5c1.4 0 2.6.7 3 1.8.4-1.1 1.6-1.8 3-1.8 2.3 0 4 1.6 4 4.3C19 15.5 12 20 12 20Z"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[10px] text-slate-400">0</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[10px] text-slate-400">0</span>
                      </div>

                      <button
                        type="button"
                        aria-label="Share"
                        className="inline-flex items-center justify-center"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 5v12"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.5 8.5 12 5l3.5 3.5"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 19h12"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {c.href && c.href !== "#" && (
                    <Link
                      href={c.href}
                      className="mt-4 inline-block text-sm font-medium text-[#f47200]"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && !error && cards.length === 0 && (
          <div className="mt-10 text-center text-sm text-slate-500">
            No blogs found.
          </div>
        )}
      </div>
    </section>
  );
}