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