export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LocationService = {
  label: string;
  href: string;
  icon: string | null;
};

export type TrustVariant = "dashed-teal" | "blue-frame";

export type TrustCardType = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  variant?: TrustVariant;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type TestimonialItem = {
  src: string;
  alt: string;
};

export type LocationHighlightPlace = {
  name: string;
  distance: string;
};

export type LocationHighlight = {
  title: string;
  icon: string;
  places: LocationHighlightPlace[];
};

export type LocationData = {
  slug: string;
  city: string;
  addressLines: string[];
  mapEmbedSrc: string;
  phone: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBannerSrc: string;

  aboutTitleLine1: string;
  aboutTitleLine2: string;
  aboutIntroParas: string[];
  aboutBottomParas: string[];
  aboutImageSrc: string;
  aboutImageAlt: string;

  services: LocationService[];

  trustHeading: string;
  trustCards: TrustCardType[];

  gallery: GalleryItem[];
  testimonials?: TestimonialItem[];

  locationHighlights?: LocationHighlight[];

  faqIntroText: string;
  faqs: FaqItem[];
};

type LocationApiResponse = {
  success: boolean;
  count: number;
  data: LocationData[];
};

const BASE_URL =
  "https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/locations";

export async function getLocationBySlug(
  slug: string
): Promise<LocationData | null> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch location: ${res.status} ${res.statusText}`);
      return null;
    }

    const json: LocationApiResponse = await res.json();

    if (!json.success || !json.data || json.data.length === 0) {
      return null;
    }

    return json.data[0];
  } catch (error) {
    console.error("Failed to fetch location:", error);
    return null;
  }
}