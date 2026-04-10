import { NextResponse } from "next/server";

type ServiceCardItem = {
    imageSrc: string;
    imageAlt: string;
    iconSrc?: string;
    title: string;
    description: string;
    slug: string;
};

type ServicesApiResponse = {
    data: ServiceCardItem[];
};

const WORDPRESS_API_URL =
    "https://backend.eledenthospitals.com/wp-json/custom/v1/services";

export async function GET() {
    try {
        const response = await fetch(WORDPRESS_API_URL, {
            method: "GET",
            cache: "no-store",
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch services (${response.status})` },
                { status: response.status }
            );
        }

        const result: ServicesApiResponse = await response.json();
        const safeData = Array.isArray(result?.data) ? result.data : [];

        const normalizedData: ServiceCardItem[] = safeData.map((item, index) => ({
            imageSrc: item?.imageSrc || "/images/placeholder-service.jpg",
            imageAlt: item?.imageAlt || item?.title || `Service image ${index + 1}`,
            iconSrc: item?.iconSrc || "",
            title: item?.title || `Service ${index + 1}`,
            description:
                (item?.description || "").trim() || "Service details will be updated soon.",
            slug: (item?.slug || "").trim() || "#",
        }));

        return NextResponse.json(
            { data: normalizedData },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Internal services API error:", error);

        return NextResponse.json(
            { error: "Something went wrong while loading services." },
            { status: 500 }
        );
    }
}