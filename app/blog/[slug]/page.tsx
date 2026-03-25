import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogDetailsHero from "@/app/components/blog-details/blog-details-hero";
import BlogDetailsAbout from "@/app/components/blog-details/blog-details-about";
import BlogDetailsFaq from "@/app/components/blog-details/blog-details-faq";
import { notFound } from "next/navigation";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

function getAbsoluteImageUrl(image?: string) {
  if (!image) return `${siteUrl}/og-image.jpg`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
}

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

function extractFirstImage(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || "";
}

function extractFirstParagraph(html: string) {
  const match = html.match(/<(p|span)[^>]*>(.*?)<\/(p|span)>/i);
  return match?.[2] ? stripHtml(decodeHtml(match[2])) : "";
}

async function getRawBlogData(slug: string) {
  try {
    const res = await fetch(
      `https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/${slug}`,
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
      "https://reinventmedia.in/eledenthospitals/wp-json/wp/v2/posts?per_page=8&_embed",
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
        href: post.slug,
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
  const rawBlogData = await getRawBlogData(slug);

  if (!rawBlogData) {
    return {
      title: "Blog Not Found - Eledent Dental Hospitals",
      description: "The requested blog could not be found.",
    };
  }

  const title = `${slugToTitle(slug)} - Eledent Dental Hospitals`;
  const description =
    extractFirstParagraph(rawBlogData.content) ||
    "Read expert dental insights, treatment guidance, and oral health information from Eledent Dental Hospitals.";
  const image = getAbsoluteImageUrl(extractFirstImage(rawBlogData.content));
  const canonicalUrl = `${siteUrl}/blogs/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Eledent Dental Hospitals",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: slugToTitle(slug),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
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
    image: extractFirstImage(rawBlogData.content) || "/blog/blog-image.png",
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