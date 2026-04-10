import type { MetadataRoute } from 'next'

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eledenthospitals.com'

const today = new Date()

// STATIC PAGES
const staticPages = [
    '',
    '/about-us',
    '/services',
    '/dental-tourism',
    '/technology',
    '/facility',
    '/contact-us',
    '/blogs',
]

// SERVICES
const services = [
    'advanced-and-painless-dental-implants',
    'braces-aligners',
    'dental-crowns',
    'dental-veneers',
    'laser-gum-treatment-hyderabad',
    'orthodontic-treatment',
    'single-visit-dentistry',
    'teeth-gap-treatment',
    'tooth-pain-treatment',
    'atraumatic-extraction',
    'conscious-sedation',
    'dental-fillings',
    'invisalign-treatment-hyderabad',
    'microscopic-dentistry',
    'root-canal-treatment',
    'smile-makeover-hyderabad',
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

// BLOGS
async function getBlogs() {
    return [
        { slug: 'best-dental-implants-in-hyderabad', updatedAt: '2026-04-03' },
        { slug: 'root-canal-treatment-cost', updatedAt: '2026-04-02' },
    ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogs()

    const staticEntries = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: today,
        changeFrequency:
            route === '' || route === '/blogs' ? ('weekly' as const) : ('monthly' as const),
        priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.8,
    }))

    const serviceEntries = services.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const locationEntries = locations.map((location) => ({
        url: `${baseUrl}/${location}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const blogEntries = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [
        ...staticEntries,
        ...serviceEntries,
        ...locationEntries,
        ...blogEntries,
    ]
}