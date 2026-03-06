"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import { useMemo, useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  shortTitle: string;
  date: string;
  description?: string;
  image: string;
  href: string;
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
  shortTitle: string;
  date: string;
  image: string;
  href: string;
};

type BlogListingSectionProps = {
  blogsPerPage?: number;
  posts?: BlogPost[];
  categories?: CategoryItem[];
  recentPosts?: RecentPost[];
};

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

const BlogCard: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="rounded-[20px] border border-[#8d8d8d] bg-[#efefef] p-4 md:p-5">
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

          <h3 className="mt-2 max-w-[420px] text-lg leading-[1.1] text-[#f47c20] lg:text-[26px] lg:font-semibold">
            {post.title}
          </h3>

          <p className="mt-3 max-w-[430px] text-sm leading-[1.5] text-[#555]">
            {post.description || "Read the full blog to know more."}
          </p>

          <Link
            href={post.href}
            className="mt-4 inline-flex items-center gap-2 rounded-[4px] bg-[#3c3c3c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
          >
            Find Out More
          </Link>
        </div>
      </div>
    </div>
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

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f47c20] text-xl font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {"<"}
      </button>

      {pages.map((page) => (
        <button
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
    <div className="rounded-[10px] bg-[#f47c20] p-6 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
};

const CategoriesList: FC<{ categories: CategoryItem[] }> = ({ categories }) => {
  return (
    <SidebarCard title="Categories">
      <div className="max-h-[320px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
      </div>
    </SidebarCard>
  );
};

const RecentPostsList: FC<{ recentPosts: RecentPost[] }> = ({ recentPosts }) => {
  return (
    <SidebarCard title="Recent Posts">
      <div className="max-h-[320px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li
              key={post.id}
              className="border-b border-white/20 pb-2 last:border-b-0 last:pb-0"
            >
              <Link
                href={post.href}
                className="flex items-start gap-2 text-sm leading-[1.45] text-white transition hover:opacity-85"
              >
                <span className="mt-[6px] block h-[4px] w-[4px] flex-shrink-0 rounded-full bg-white" />
                <span>{post.shortTitle || post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarCard>
  );
};

const BlogListingSection: FC<BlogListingSectionProps> = ({
  blogsPerPage = 3,
  posts = [],
  categories = [],
  recentPosts = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / blogsPerPage);

  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return posts.slice(startIndex, endIndex);
  }, [currentPage, posts, blogsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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