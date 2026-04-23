import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogDetailsHero from "@/app/components/blog-details/blog-details-hero";
import BlogDetailsAbout from "@/app/components/blog-details/blog-details-about";
import BlogDetailsFaq from "@/app/components/blog-details/blog-details-faq";
import { notFound } from "next/navigation";
import { getMetadataByPath } from "@/lib/metadata";


type RecentArticle = {
  id: number;
  title: string;
  image: string;
  href: string;
};

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type FaqSection = {
  tag: string;
  heading: string;
  description: string;
  backgroundImage: string;
  items: FaqItem[];
};

type RawBlogApiResponse = {
  data: {
    content: string;
    image: string;
    faqSection: FaqSection;
  };
};

type WpPost = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url?: string;
    }>;
  };
};

function stripHtml(html: string) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(html: string) {
  return html
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8211;/gi, "-")
    .replace(/&#8212;/gi, "-");
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function extractFirstParagraph(html: string) {
  const match = html.match(/<(p|span)[^>]*>(.*?)<\/(p|span)>/i);
  return match?.[2] ? stripHtml(decodeHtml(match[2])) : "";
}

async function getRawBlogData(slug: string) {
  try {
    const res = await fetch(
      `https://backend.eledenthospitals.com/wp-json/custom/v1/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const json: RawBlogApiResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

async function getRecentBlogs(currentSlug: string): Promise<RecentArticle[]> {
  try {
    const res = await fetch(
      "https://backend.eledenthospitals.com/wp-json/wp/v2/posts?per_page=8&_embed",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return [];

    const posts: WpPost[] = await res.json();

    return posts
      .filter((post) => post.slug !== currentSlug)
      .slice(0, 6)
      .map((post) => ({
        id: post.id,
        title: stripHtml(post.title?.rendered || ""),
        href: `/blogs/${post.slug}`,
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      }));
  } catch (error) {
    console.error("Failed to fetch recent blogs:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const path = `/blogs/${slug}`;
  const metadata = await getMetadataByPath(path);

  // fallback if API metadata is missing or default
  if (
    metadata.title === "Eledent Dental Hospitals" ||
    metadata.description ===
    "Eledent Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad."
  ) {
    const rawBlogData = await getRawBlogData(slug);

    if (!rawBlogData) {
      return {
        title: "Blog Not Found - Eledent Dental Hospitals",
        description: "The requested blog could not be found.",
      };
    }

    return {
      ...metadata,
      title: `${slugToTitle(slug)} - Eledent Dental Hospitals`,
      description:
        extractFirstParagraph(rawBlogData.content) ||
        "Read expert dental insights, treatment guidance, and oral health information from Eledent Dental Hospitals.",
    };
  }

  return metadata;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [rawBlogData, recentArticles] = await Promise.all([
    getRawBlogData(slug),
    getRecentBlogs(slug),
  ]);

  if (!rawBlogData) {
    notFound();
  }

  const hero = {
    title: slugToTitle(slug),
    image: rawBlogData.image || "/blog/blog-image.png",
  };

  const faqSection = rawBlogData.faqSection;

  return (
    <div>
      <Navbar />
      <main>
        <BlogDetailsHero hero={hero} />
        <BlogDetailsAbout
          htmlContent={rawBlogData.content}
          recentArticles={recentArticles}
        />
        {faqSection?.items?.length > 0 ? (
          <BlogDetailsFaq faqSection={faqSection} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}