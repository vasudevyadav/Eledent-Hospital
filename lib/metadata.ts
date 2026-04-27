import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const defaultTitle = "Eledent Dental Hospitals";
const defaultDescription =
  "Eledent Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.";

type MetaEntry = {
  title: string;
  description: string;
};

async function fetchMetaMap(): Promise<Record<string, MetaEntry>> {
  try {
    const res = await fetch(
      "https://cms.eledenthospitals.com/wp-json/custom/v2/meta-data",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`API fetch failed with status ${res.status}`);
    }

    const data: { path: string; title: string; description: string }[] =
      await res.json();

    return data.reduce((acc, item) => {
      const cleanPath = item.path.replace(/\/$/, "") || "/";

      acc[cleanPath] = {
        title: item.title,
        description: item.description,
      };

      return acc;
    }, {} as Record<string, MetaEntry>);
  } catch (error) {
    console.error("Meta API error:", error);
    return {};
  }
}

export async function getMetadataByPath(path: string): Promise<Metadata> {
  const cleanPath = path.replace(/\/$/, "") || "/";
  const metaMap = await fetchMetaMap();
  const current = metaMap[cleanPath];

  const title = current?.title || defaultTitle;
  const description = current?.description || defaultDescription;
  const canonicalUrl = cleanPath === "/" ? siteUrl : `${siteUrl}${cleanPath}`;

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
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.jpg`],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [
        {
          url: "/apple-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}