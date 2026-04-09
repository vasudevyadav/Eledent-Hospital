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

// Cache so API sirf ek baar call ho (build time pe)
let metaCache: Record<string, MetaEntry> | null = null;

async function fetchMetaMap(): Promise<Record<string, MetaEntry>> {
  if (metaCache) return metaCache;

  try {
    const res = await fetch(
      "https://backend.eledenthospitals.com/wp-json/custom/v2/meta-data",
      {
        next: { revalidate: 3600 }, // 1 hour cache (ISR)
      }
    );

    if (!res.ok) throw new Error("API fetch failed");

    const data: { path: string; title: string; description: string }[] =
      await res.json();

    metaCache = data.reduce((acc, item) => {
      acc[item.path] = {
        title: item.title,
        description: item.description,
      };
      return acc;
    }, {} as Record<string, MetaEntry>);

    return metaCache;
  } catch (err) {
    console.error("Meta API error:", err);
    return {};
  }
}

export async function getMetadataByPath(path: string): Promise<Metadata> {
  const cleanPath = path.replace(/\/$/, "") || "/";
  const metaMap = await fetchMetaMap();
  const current = metaMap[cleanPath];

  const title = current?.title || defaultTitle;
  const description = current?.description || defaultDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: cleanPath === "/" ? siteUrl : `${siteUrl}${cleanPath}`,
      siteName: "Eledent Dental Hospitals",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
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
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}