import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://scafwrap.co.nz'

  // Update this date whenever you make significant content changes
  const lastUpdate = '2026-03-10'

  return [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en-NZ': baseUrl,
        },
      },
      images: [
        `${baseUrl}/serviceimage/marineservice.jpg`,
        `${baseUrl}/serviceimage/constructionservice.jpg`,
        `${baseUrl}/serviceimage/recladsservice.jpg`,
        `${baseUrl}/serviceimage/recyclingservice.jpg`,
      ],
    },
    {
      url: `${baseUrl}/marine`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-NZ': `${baseUrl}/marine`,
        },
      },
      images: [
        `${baseUrl}/images/marine/Marine1.jpg`,
        `${baseUrl}/images/marine/Marine2.jpg`,
        `${baseUrl}/images/marine/Marine3.jpg`,
      ],
    },
    {
      url: `${baseUrl}/construction`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-NZ': `${baseUrl}/construction`,
        },
      },
      images: [
        `${baseUrl}/images/construction/Construction1.jpg`,
        `${baseUrl}/images/construction/Construction2.jpg`,
        `${baseUrl}/images/construction/Construction3.jpg`,
      ],
    },
    {
      url: `${baseUrl}/reclads`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-NZ': `${baseUrl}/reclads`,
        },
      },
      images: [
        `${baseUrl}/images/reclads/Reclads1.jpg`,
        `${baseUrl}/images/reclads/Reclads2.jpg`,
        `${baseUrl}/images/reclads/Reclads3.jpg`,
      ],
    },
    {
      url: `${baseUrl}/recycling`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-NZ': `${baseUrl}/recycling`,
        },
      },
      images: [
        `${baseUrl}/images/recycling/Recycling1.jpg`,
        `${baseUrl}/images/recycling/Recycling2.jpg`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdate,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-NZ': `${baseUrl}/contact`,
        },
      },
    },
  ]
}
