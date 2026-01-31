import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aaruchudar.com';

  return [
    { url: `${baseUrl}/`, priority: 1.0 },

    { url: `${baseUrl}/about`, priority: 0.9 },
    { url: `${baseUrl}/blog`, priority: 0.9 },
    { url: `${baseUrl}/research`, priority: 0.9 },
    { url: `${baseUrl}/productpage`, priority: 0.9 },

    { url: `${baseUrl}/hi-courses`, priority: 0.9 },
    { url: `${baseUrl}/hi-workshops`, priority: 0.9 },
    { url: `${baseUrl}/hi-events`, priority: 0.9 },
    { url: `${baseUrl}/hi-labs`, priority: 0.9 },

    { url: `${baseUrl}/neuro`, priority: 0.8 },
    { url: `${baseUrl}/internship`, priority: 0.8 },
    { url: `${baseUrl}/testimonials`, priority: 0.7 },
    { url: `${baseUrl}/franchise`, priority: 0.7 },

    { url: `${baseUrl}/contact`, priority: 0.6 },
    { url: `${baseUrl}/quiz`, priority: 0.6 },
    { url: `${baseUrl}/careers`, priority: 0.6 },

    { url: `${baseUrl}/privacy`, priority: 0.5 },
  ];
}
