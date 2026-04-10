import type { MetadataRoute } from 'next'

const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eledenthospitals.com'
).replace(/\/$/, '')

// CORE / STATIC PAGES
const staticPages = [
    { route: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { route: '/about-us', changeFrequency: 'monthly' as const, priority: 0.8 },
    { route: '/contact-us', changeFrequency: 'monthly' as const, priority: 0.8 },
    { route: '/facility', changeFrequency: 'monthly' as const, priority: 0.7 },
    { route: '/technology', changeFrequency: 'monthly' as const, priority: 0.7 },
    { route: '/blogs', changeFrequency: 'weekly' as const, priority: 0.7 },
    { route: '/guided-biofilm-therapy-gbt', changeFrequency: 'monthly' as const, priority: 0.7 },
    { route: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { route: '/terms-and-conditions', changeFrequency: 'yearly' as const, priority: 0.3 },
    { route: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
]

// SERVICES
const services = [
    { slug: 'advanced-and-painless-dental-implants', priority: 0.8 },
    { slug: 'single-visit-dentistry', priority: 0.8 },
    { slug: 'atraumatic-extraction', priority: 0.7 },
    { slug: 'teeth-whitening', priority: 0.8 },
    { slug: 'dental-crowns', priority: 0.8 },
    { slug: 'invisalign-treatment-hyderabad', priority: 0.8 },
    { slug: 'laser-gum-treatment-hyderabad', priority: 0.8 },
    { slug: 'smile-makeover-hyderabad', priority: 0.8 },
    { slug: 'wisdom-teeth-removal', priority: 0.8 },
    { slug: 'braces-aligners', priority: 0.8 },
    { slug: 'root-canal-treatment', priority: 0.8 },
    { slug: 'dental-veneers', priority: 0.8 },
    { slug: 'orthodontic-treatment', priority: 0.8 },
    { slug: 'tooth-pain-treatment', priority: 0.8 },
    { slug: 'teeth-gap-treatment', priority: 0.7 },
    { slug: 'dental-fillings', priority: 0.7 },
]

// LOCATION HUB PAGES
const locationPages = [
    'kondapur',
    'kukatpally',
    'manikonda',
    'kompally',
    'banjara-hills',
]

// LOCAL SEO PAGES
const localSeoPages = [
    { route: '/dental-clinic-in-kondapur', priority: 0.7 },
    { route: '/dentist-in-kondapur', priority: 0.7 },
    { route: '/best-dental-clinic-in-kukatpally', priority: 0.7 },
    { route: '/dentist-in-kukatpally', priority: 0.7 },
    { route: '/best-dentist-in-manikonda', priority: 0.7 },
    { route: '/best-dental-clinic-in-manikonda', priority: 0.7 },
    { route: '/best-dental-clinic-in-banjara-hills', priority: 0.7 },
    { route: '/best-dentist-in-banjara-hills', priority: 0.7 },
    { route: '/best-dental-hospital-in-hyderabad', priority: 0.8 },
    { route: '/best-dentist-in-hyderabad', priority: 0.8 },
    { route: '/best-dental-hospital-near-me', priority: 0.7 },
    { route: '/best-dental-clinic-in-hyderabad', priority: 0.8 },
    { route: '/best-dental-clinic-in-kompally', priority: 0.7 },
    { route: '/best-dentist-in-kompally', priority: 0.7 },
]

// BLOGS
async function getBlogs() {
    return [
        {
            slug: 'dental-implant-cost-in-hyderabad',
            updatedAt: '2026-04-10',
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const today = new Date()
    const blogs = await getBlogs()

    const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: today,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }))

    const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: service.priority,
    }))

    const locationEntries: MetadataRoute.Sitemap = locationPages.map((location) => ({
        url: `${baseUrl}/${location}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    const localSeoEntries: MetadataRoute.Sitemap = localSeoPages.map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: page.priority,
    }))

    const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: blog.changeFrequency,
        priority: blog.priority,
    }))

    return [
        ...staticEntries,
        ...serviceEntries,
        ...locationEntries,
        ...localSeoEntries,
        ...blogEntries,
    ]
}