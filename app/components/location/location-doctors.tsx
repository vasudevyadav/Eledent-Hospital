import { fetchDoctors } from "@/lib/doctors-api";
import { DOCTORS } from "@/lib/doctors-data";
import LocationDoctorsSlider from "./location-doctors-slider";

const BRANCH_BY_SLUG: Record<string, string> = {
    kondapur: "Kondapur",
    kukatpally: "KPHB",
    manikonda: "Manikonda",
    "banjara-hills": "Banjara Hills",
    kompally: "Kompally",
};

export default async function LocationDoctors({ locationSlug }: { locationSlug: string }) {
    const branch = BRANCH_BY_SLUG[locationSlug];
    if (!branch) return null;

    // Slugs that belong to this branch (from static data, used as a filter)
    const branchSlugs = new Set(
        DOCTORS.filter((d) => d.branch === branch).map((d) => d.slug)
    );

    // Fetch from API and filter to this branch's doctors
    const apiDoctors = await fetchDoctors();
    const doctors = apiDoctors.filter((d) => branchSlugs.has(d.slug));

    // If API returns nothing, hide the section entirely
    if (doctors.length === 0) return null;

    const branchDisplayName = branch === "KPHB" ? "Kukatpally" : branch;

    return (
        <LocationDoctorsSlider
            doctors={doctors}
            branchDisplayName={branchDisplayName}
        />
    );
}
