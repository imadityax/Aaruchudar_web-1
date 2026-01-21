import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aaruchudar.com'; // 🔴 prod domain

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },

    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/research`, lastModified: new Date(), priority: 0.9 },

    { url: `${baseUrl}/hi-courses`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/hi-workshops`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/hi-events`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/hi-labs`, lastModified: new Date(), priority: 0.9 },

    { url: `${baseUrl}/neuro`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), priority: 0.7 },

    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/quiz`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/login`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/register`, lastModified: new Date(), priority: 0.3 },
  ];
}
