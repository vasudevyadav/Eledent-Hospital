"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogCategory = {
  id: string;
  label: string;
  slug: string;
  href?: string;
};

type BlogPost = {
  id: string;
  title: string;
  shortTitle?: string;
  date: string;
  description?: string;
  image: string;
  href: string;
  category?: BlogCategory;
};

type BlogApiResponse = {
  success: boolean;
  message: string;
  data?: {
    listingSection?: {
      blogsPerPage?: number;
      posts?: BlogPost[];
      categories?: BlogCategory[];
      recentPosts?: BlogPost[];
    };
  };
};

type Props = {
  currentCategorySlug: string;
};

export default function RelatedBlogsSection({
  currentCategorySlug,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    let ignore = false;

    async function fetchBlogs() {
      try {
        setLoading(true);

        const res = await fetch(
          "https://eledenthospitals.com/wp-json/custom/v1/blogs",
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          if (!ignore) {
            setPosts([]);
            setLoading(false);
          }
          return;
        }

        const result: BlogApiResponse = await res.json();

        const allPosts = result?.data?.listingSection?.posts ?? [];

        const filteredPosts = allPosts.filter(
          (post) => post?.category?.slug === currentCategorySlug
        );

        if (!ignore) {
          setPosts(filteredPosts);
        }
      } catch (error) {
        console.error("Failed to fetch related blogs:", error);
        if (!ignore) {
          setPosts([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    if (currentCategorySlug) {
      fetchBlogs();
    } else {
      setPosts([]);
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, [currentCategorySlug]);

  const visiblePosts = useMemo(() => posts.slice(0, 3), [posts]);

  if (loading) return null;
  if (!visiblePosts.length) return null;

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#F47A20] lg:text-4xl">
            Related Blogs
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#6B7280] md:text-base">
            Read useful articles related to this treatment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={post.href} className="block">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>

              <div className="p-5">
                {post.category?.label ? (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F47A20]">
                    {post.category.label}
                  </p>
                ) : null}

                <p className="mb-2 text-sm text-[#6B7280]">{post.date}</p>

                <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-[#111827]">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                {post.description ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#6B7280]">
                    {post.description}
                  </p>
                ) : null}

                <div className="mt-4">
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#F47A20]"
                  >
                    Read More
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F47A20] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}