export type DoctorListItem = {
    name: string;
    education: string;
    post: string;
    image: string;
    slug: string;
    facebook: string;
    instagram: string;
    linkedin: string;
};

export function nameToSlug(name: string): string {
    return name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}

export async function fetchDoctors(): Promise<DoctorListItem[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_V2}/doctors`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) return [];
        const json = await res.json();
        if (!json.status) return [];
        return (json.data as Array<{ name: string; education: string; post: string; image: string; facebook: string; instagram: string; linkedin: string }>).map((d) => ({
            name: d.name,
            education: d.education,
            post: d.post,
            image: d.image,
            slug: nameToSlug(d.name),
            facebook: d.facebook,
            instagram: d.instagram,
            linkedin: d.linkedin,
        }));
    } catch {
        return [];
    }
}

export type DoctorAPIData = {
    id: number;
    basicInfo: {
        name: string;
        slug: string;
        education: string;
        designation: string;
        experience: string;
        profileImage: string;
    };
    clinicInfo: {
        branch: string;
        consultationFee: string;
        visitingDays: string;
        visitingTime: string;
    };
    contactInfo: {
        phone: string;
        email: string;
        website: string;
    };
    professionalInfo: {
        languages: { name: string }[];
        expertise: { name: string }[];
    };
    offers: {
        medibuddyDiscount: string;
    };
    seo: {
        title: string;
        description: string;
    };
};

export async function fetchDoctor(slug: string): Promise<DoctorAPIData | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/doctor/${slug}`,
            { next: { revalidate: 3600 } }
        );
        if (!res.ok) return null;
        const json = await res.json();
        if (!json.success) return null;
        return json.data as DoctorAPIData;
    } catch {
        return null;
    }
}
