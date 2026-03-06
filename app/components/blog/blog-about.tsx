"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useMemo, useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  shortTitle: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

type CategoryItem = {
  id: string;
  label: string;
  href: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    shortTitle: "Get Your Wisdom Tooth Removed to Prevent Tooth Loss",
    title: "Get your wisdom tooth removed to prevent tooth loss",
    date: "February 27, 2026",
    description:
      "If you wear dentures and the skin under them looks red, or eating feels like burning, do not ignore it. This can be denture stomatitis, a common denture related inflammation that needs timely care.",
    image: "/blog/blog-image.png",
    href: "/blog/get-your-wisdom-tooth-removed",
  },
  {
    id: "2",
    shortTitle: "Get Your Wisdom Tooth Removed to Prevent Tooth Loss",
    title: "Get your wisdom tooth removed to prevent tooth loss",
    date: "February 27, 2026",
    description:
      "If you wear dentures and the skin under them looks red, or eating feels like burning, do not ignore it. This can be denture stomatitis, a common denture related inflammation that needs timely care.",
    image: "/blog/blog-image.png",
    href: "/blog/get-your-wisdom-tooth-removed",
  },
  {
    id: "3",
    shortTitle: "Get Your Wisdom Tooth Removed to Prevent Tooth Loss",
    title: "Get your wisdom tooth removed to prevent tooth loss",
    date: "February 27, 2026",
    description:
      "If you wear dentures and the skin under them looks red, or eating feels like burning, do not ignore it. This can be denture stomatitis, a common denture related inflammation that needs timely care.",
    image: "/blog/blog-image.png",
    href: "/blog/get-your-wisdom-tooth-removed",
  },
  {
    id: "4",
    shortTitle: "Get Your Wisdom Tooth Removed to Prevent Tooth Loss",
    title: "Get your wisdom tooth removed to prevent tooth loss",
    date: "February 27, 2026",
    description:
      "If you wear dentures and the skin under them looks red, or eating feels like burning, do not ignore it. This can be denture stomatitis, a common denture related inflammation that needs timely care.",
    image: "/blog/blog-image.png",
    href: "/blog/get-your-wisdom-tooth-removed",
  },
  {
    id: "5",
    shortTitle: "How To Keep Your Teeth Healthy",
    title: "How to keep your teeth healthy every day",
    date: "March 01, 2026",
    description:
      "Daily oral care matters more than most people think. A simple routine can reduce cavities, gum swelling, and long term dental issues.",
    image: "/blog/blog-image.png",
    href: "/blog/how-to-keep-your-teeth-healthy",
  },
  {
    id: "6",
    shortTitle: "Signs You Need A Dental Checkup",
    title: "Signs you need a dental checkup sooner",
    date: "March 03, 2026",
    description:
      "Tooth pain, bleeding gums, sensitivity, and bad breath should not be ignored. Early dental care helps prevent bigger treatment later.",
    image: "/blog/blog-image.png",
    href: "/blog/signs-you-need-a-dental-checkup",
  },
  {
    id: "7",
    shortTitle: "Benefits Of Dental Implants",
    title: "Benefits of dental implants for missing teeth",
    date: "March 04, 2026",
    description:
      "Dental implants help restore chewing, appearance, and confidence. They are one of the most stable options for tooth replacement.",
    image: "/blog/blog-image.png",
    href: "/blog/benefits-of-dental-implants",
  },
  {
    id: "8",
    shortTitle: "Why Clear Aligners Are Popular",
    title: "Why clear aligners are becoming more popular",
    date: "March 05, 2026",
    description:
      "Clear aligners are discreet, easy to manage, and fit well into daily life. They are a practical option for many teens and adults.",
    image: "/blog/blog-image.png",
    href: "/blog/why-clear-aligners-are-popular",
  },
];

const CATEGORIES: CategoryItem[] = [
  { id: "1", label: "Blog", href: "/blog/category/blog" },
  { id: "2", label: "Bridges & Crowns", href: "/blog/category/bridges-crowns" },
  { id: "3", label: "Clear Aligner", href: "/blog/category/clear-aligner" },
  { id: "4", label: "Cosmetic Dentistry", href: "/blog/category/cosmetic-dentistry" },
  { id: "5", label: "Dental Abscess", href: "/blog/category/dental-abscess" },
  { id: "6", label: "Dental Ablation", href: "/blog/category/dental-ablation" },
  { id: "7", label: "Dental Care", href: "/blog/category/dental-care" },
  { id: "8", label: "Dental Crown", href: "/blog/category/dental-crown" },
  { id: "9", label: "Dental Fillings", href: "/blog/category/dental-fillings" },
  { id: "10", label: "Dental Granuloma", href: "/blog/category/dental-granuloma" },
  { id: "11", label: "Dental Implants", href: "/blog/category/dental-implants" },
  { id: "12", label: "Dental Implant Treatment", href: "/blog/category/dental-implant-treatment" },
  { id: "13", label: "Dental Pulp", href: "/blog/category/dental-pulp" },
];

const RECENT_POSTS: BlogPost[] = [
  {
    id: "r1",
    shortTitle: "Denture Stomatitis",
    title: "Denture Stomatitis",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/denture-stomatitis",
  },
  {
    id: "r2",
    shortTitle: "Causes, Symptoms, Diagnosis, Treatment, and Recovery",
    title: "Causes, Symptoms, Diagnosis, Treatment, and Recovery",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/causes-symptoms-diagnosis-treatment-recovery",
  },
  {
    id: "r3",
    shortTitle: "Tooth Canal Abscess, Causes, Treatment and Prevention",
    title: "Tooth Canal Abscess, Causes, Treatment and Prevention",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/tooth-canal-abscess",
  },
  {
    id: "r4",
    shortTitle: "Four Best Mouthwash Tips",
    title: "Four Best Mouthwash Tips",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/four-best-mouthwash-tips",
  },
  {
    id: "r5",
    shortTitle: "Why Do My Teeth Hurt More in Cold Weather",
    title: "Why Do My Teeth Hurt More in Cold Weather",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/why-do-my-teeth-hurt-more-in-cold-weather",
  },
  {
    id: "r6",
    shortTitle: "Causes of Re-Registered Nerves",
    title: "Causes of Re-Registered Nerves",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/causes-of-re-registered-nerves",
  },
  {
    id: "r7",
    shortTitle: "Crown Which Is Better For",
    title: "Crown Which Is Better For",
    date: "February 27, 2026",
    description: "",
    image: "/blog/blog-banner.png",
    href: "/blog/crown-which-is-better-for",
  },
];

const BLOGS_PER_PAGE = 3;

const BlogCard: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="rounded-[20px] border border-[#8d8d8d] bg-[#efefef] p-4 md:p-5">
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1.05fr_1.3fr]">
        <div>
          <div className="relative h-[230px] w-full overflow-hidden rounded-[18px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-black">{post.date}</p>

          <h3 className="mt-2 max-w-[420px] text-lg leading-[1.1] text-[#f47c20] lg:text-[26px] lg:font-semibold">
            {post.title}
          </h3>

          <p className="mt-3 max-w-[430px] text-sm leading-[1.5] text-[#555]">
            {post.description}
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

const SidebarCard: FC<{ title: string; children: React.ReactNode }> = ({
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

const CategoriesList: FC = () => {
  return (
    <SidebarCard title="Categories">
      <div className="max-h-[320px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="space-y-2">
          {CATEGORIES.map((category) => (
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

const RecentPostsList: FC = () => {
  return (
    <SidebarCard title="Recent Posts">
      <div className="max-h-[320px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="space-y-3">
          {RECENT_POSTS.map((post) => (
            <li
              key={post.id}
              className="border-b border-white/20 pb-2 last:border-b-0 last:pb-0"
            >
              <Link
                href={post.href}
                className="flex items-start gap-2 text-sm leading-[1.45] text-white transition hover:opacity-85"
              >
                <span className="mt-[6px] block h-[4px] w-[4px] flex-shrink-0 rounded-full bg-white" />
                <span>{post.shortTitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarCard>
  );
};

const BlogListingSection: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BLOG_POSTS.length / BLOGS_PER_PAGE);

  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const endIndex = startIndex + BLOGS_PER_PAGE;
    return BLOG_POSTS.slice(startIndex, endIndex);
  }, [currentPage]);

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
              {currentBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <CategoriesList />
            <RecentPostsList />
          </aside>
        </div>

        <div className="pb-2 pt-12">
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