import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/thank-you/', '/private/'],
      },
    ],
    sitemap: 'https://www.eledenthospitals.com/sitemap.xml',
    host: 'https://www.eledenthospitals.com',
  }
}