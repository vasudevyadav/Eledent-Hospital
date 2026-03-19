import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogDetailsHero from "@/app/components/blog-details/blog-details-hero";
import BlogDetailsAbout from "@/app/components/blog-details/blog-details-about";
import BlogDetailsFaq from "@/app/components/blog-details/blog-details-faq";
import { notFound } from "next/navigation";

type BlogSection = {
  id: number;
  heading: string;
  paragraphs: string[];
  points: string[];
};

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

type BlogApiResponse = {
  data: {
    hero: {
      title: string;
      image: string;
    };
    content: {
      heroImage: string;
      centerImage: string;
      introParagraphs: string[];
      sections: BlogSection[];
      recentArticles: RecentArticle[];
    };
    faqSection: {
      tag: string;
      heading: string;
      description: string;
      backgroundImage: string;
      items: FaqItem[];
    };
  };
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

function getAbsoluteImageUrl(image?: string) {
  if (!image) return `${siteUrl}/og-image.jpg`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
}

async function getBlogData(slug: string) {
  try {
    const res = await fetch(
      `https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const json: BlogApiResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogData = await getBlogData(slug);

  if (!blogData) {
    return {
      title: "Blog Not Found - Eledent Dental Hospitals",
      description: "The requested blog could not be found.",
    };
  }

  const title = `${blogData.hero?.title || "Blog"} - Eledent Dental Hospitals`;

  const description =
    blogData.faqSection?.description ||
    blogData.content?.introParagraphs?.[0] ||
    "Read expert dental insights, treatment guidance, and oral health information from Eledent Dental Hospitals.";

  const image = getAbsoluteImageUrl(
    blogData.hero?.image || blogData.content?.heroImage
  );

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
          alt: blogData.hero?.title || "Eledent Blog",
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
  const blogData = await getBlogData(slug);

  if (!blogData) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <main>
        <BlogDetailsHero hero={blogData.hero} />
        <BlogDetailsAbout content={blogData.content} />
        <BlogDetailsFaq faqSection={blogData.faqSection} />
      </main>
      <Footer />
    </div>
  );
}