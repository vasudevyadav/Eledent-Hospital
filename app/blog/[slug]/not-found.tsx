import Link from "next/link";

export default function NotFound() {
    return (
        <div className="px-6 py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Blog not found</h2>
            <p className="mt-3 text-gray-600">
                The blog you are looking for does not exist or could not be loaded.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-[#ef6d2f] px-6 py-3 text-white"
            >
                Go Home
            </Link>
        </div>
    );
}