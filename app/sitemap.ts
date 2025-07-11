import { MetadataRoute } from 'next'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sentencevizu.com'

  const staticRoutes: { url: string; changeFrequency: ChangeFrequency; priority: number }[] = [
    { url: `${baseUrl}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.5 },
  ]

  return staticRoutes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }))
} 