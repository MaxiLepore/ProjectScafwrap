import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://scafwrap.co.nz'
  
  // Usar fecha estática para evitar cambios en cada build
  // Actualizar esta fecha cuando hagas cambios importantes al sitio
  const lastUpdate = '2025-10-03'
  
  return [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/marine`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/construction`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reclads`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recycling`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
