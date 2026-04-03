import type { MetadataRoute } from 'next'

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eledenthospitals.com'

// SERVICES (static list from UI)
const services = [
    'advanced-and-painless-dental-implants',
    'braces-aligners',
    'dental-crowns',
    'dental-veneers',
    'laser-gum-treatment',
    'orthodontic-treatment',
    'single-visit-dentistry',
    'teeth-gap-treatment',
    'tooth-pain-treatment',
    'atraumatic-extraction',
    'conscious-sedation',
    'dental-fillings',
    'invisalign-treatment',
    'microscopic-dentistry',
    'root-canal-treatment',
    'smile-makeover',
    'teeth-whitening',
    'wisdom-teeth-removal',
]

// LOCATIONS
const locations = [
    'kondapur',
    'kukatpally',
    'manikonda',
    'banjara-hills',
    'kompally',
]

// BLOGS (replace with API later)
async function getBlogs() {
    return [
        { slug: 'best-dental-implants-in-hyderabad', updatedAt: '2026-04-03' },
        { slug: 'root-canal-treatment-cost', updatedAt: '2026-04-02' },
    ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogs()

    // STATIC PAGES
    const staticPages = [
        '',
        '/about-us',
        '/services',
        '/dental-tourism',
        '/technology',
        '/facilities',
        '/contact-us',
        '/locations',
        '/blogs',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // SERVICE PAGES
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // LOCATION PAGES
    const locationPages = locations.map((location) => ({
        url: `${baseUrl}/locations/${location}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }))

    // BLOG PAGES
    const blogPages = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...servicePages, ...locationPages, ...blogPages]
}