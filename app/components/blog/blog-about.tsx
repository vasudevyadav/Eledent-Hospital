"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import { useMemo, useState } from "react";
import BookingBlog from "../comman/booking-blog";

type BlogPost = {
  id: string;
  title: string;
  shortTitle?: string;
  date: string;
  description?: string;
  image: string;
  href?: string;
  slug?: string;
  content?: string;
  category?: {
    id: string;
    label: string;
    slug: string;
  };
};

type CategoryItem = {
  id: string;
  label: string;
  slug: string;
  href: string;
};

type RecentPost = {
  id: string;
  title: string;
  shortTitle?: string;
  date: string;
  image: string;
  href?: string;
  slug?: string;
};

type BlogListingSectionProps = {
  posts?: BlogPost[];
  categories?: CategoryItem[];
  recentPosts?: RecentPost[];
};

const BLOGS_PER_PAGE = 6;

const formatDate = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

const getSlugFromHref = (href?: string) => {
  if (!href) return "";
  return href.split("/").filter(Boolean).pop() || "";
};

const getBlogHref = (post: BlogPost) => {
  if (post.href) return post.href;

  const slug = post.slug || getSlugFromHref(post.href);
  return slug ? `/blog/${slug}` : "#";
};

const getRecentPostHref = (post: RecentPost) => {
  if (post.href) return post.href;

  const slug = post.slug || getSlugFromHref(post.href);
  return slug ? `/blog/${slug}` : "#";
};

const BlogCard: FC<{ post: BlogPost }> = ({ post }) => {
  const blogHref = getBlogHref(post);

  return (
    <Link href={blogHref} className="block">
      <div className="rounded-[20px] border border-[#8d8d8d] bg-[#efefef] p-4 transition hover:shadow-md md:p-5">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1.05fr_1.3fr]">
          <div>
            <div className="relative h-[230px] w-full overflow-hidden rounded-[18px]">
              <Image
                src={post.image || "/blog/blog-image.png"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-black">{formatDate(post.date)}</p>

            <h3 className="mt-2 max-w-[420px] text-xl font-semibold leading-[1.1] text-[#f47c20] lg:text-[26px]">
              {post.title}
            </h3>

            <p className="mt-3 max-w-[430px] text-sm leading-[1.5] text-[#555]">
              {post.description || "Read the full blog to know more."}
            </p>

            <span className="mt-4 inline-flex items-center gap-2 rounded-[4px] bg-[#3c3c3c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black">
              Find Out More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const BlogPagination: FC<BlogPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f47c20] text-xl font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {"<"}
      </button>

      {pages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => onPageChange(page)}
          className={[
            "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition",
            currentPage === page
              ? "bg-[#c95f10] text-white"
              : "bg-[#f47c20] text-white hover:scale-105",
          ].join(" ")}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f47c20] text-xl font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
};

const SidebarCard: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="no-scrollbar max-h-[380px] overflow-y-auto rounded-[10px] bg-[#f47c20] p-6 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
};

const CategoriesList: FC<{ categories: CategoryItem[] }> = ({ categories }) => {
  return (
    <SidebarCard title="Categories">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={category.href}
              className="flex items-start gap-2 text-base leading-[1.4] text-white transition hover:opacity-85"
            >
              <span className="mt-[7px] block h-[4px] w-[4px] flex-shrink-0 rounded-full bg-white" />
              <span>{category.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
};

const RecentPostsList: FC<{ recentPosts: RecentPost[] }> = ({ recentPosts }) => {
  return (
    <SidebarCard title="Recent Posts">
      <ul className="space-y-3">
        {recentPosts.map((post) => (
          <li
            key={post.id}
            className="border-b border-white/20 pb-2 last:border-b-0 last:pb-0"
          >
            <Link
              href={getRecentPostHref(post)}
              className="flex items-start gap-2 text-sm leading-[1.45] text-white transition hover:opacity-85"
            >
              <span className="mt-[6px] block h-[4px] w-[4px] flex-shrink-0 rounded-full bg-white" />
              <span>{post.shortTitle || post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
};

const BlogListingSection: FC<BlogListingSectionProps> = ({
  posts = [],
  categories = [],
  recentPosts = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / BLOGS_PER_PAGE);

  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const endIndex = startIndex + BLOGS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  }, [currentPage, posts]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f2f2f2] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <div className="space-y-6">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((post) => <BlogCard key={post.id} post={post} />)
              ) : (
                <div className="rounded-[20px] border border-[#8d8d8d] bg-[#efefef] p-6 text-center text-[#555]">
                  No blogs found.
                </div>
              )}
            </div>

            <div className="block pb-2 pt-12 lg:hidden">
              {totalPages > 1 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>

          <aside className="space-y-5">
            {categories.length > 0 && <CategoriesList categories={categories} />}
            {recentPosts.length > 0 && (
              <RecentPostsList recentPosts={recentPosts} />
            )}
            <BookingBlog />
          </aside>
        </div>

        <div className="hidden pb-2 pt-12 lg:block">
          {totalPages > 1 && (
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogListingSection;