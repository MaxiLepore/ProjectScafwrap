// src/app/reclads/page.tsx
import type { Metadata } from "next"
import Banner from "@/sections/Reclads/Banner"

export const metadata: Metadata = {
  title: "Reclad & Weathertightness Auckland | ScafWrap NZ",
  description: "Expert building reclad and weathertightness solutions in Auckland. Residential & commercial upgrades, leaky building repairs, and heritage restoration.",
  keywords: [
    "reclad Auckland", "building envelope Auckland", "weathertightness Auckland", 
    "leaky building repair", "residential reclad", "commercial reclad", 
    "building restoration Auckland", "cladding replacement", "weatherproofing Auckland",
    "heritage building restoration", "building consent Auckland", "reclad specialists NZ"
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/reclads",
    siteName: "ScafWrap New Zealand",
    title: "Reclad & Weathertightness Auckland | ScafWrap NZ",
    description: "Expert building reclad and weathertightness solutions in Auckland. Residential & commercial upgrades, leaky building repairs, and heritage restoration.",
    images: [
      {
        url: "/images/reclads-og.jpg",
        width: 1200,
        height: 630,
        alt: "ScafWrap professional reclad and building envelope services Auckland"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@scafwrapnz",
    title: "Reclad & Weathertightness Auckland | ScafWrap NZ",
    description: "Expert building reclad and weathertightness solutions in Auckland. Residential & commercial upgrades, leaky building repairs, and heritage restoration.",
    images: ["/images/reclads-og.jpg"]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/reclads"
  },
  category: "Building Services",
  classification: "Reclad and Building Envelope Services"
}

export default function RecladsPage() {
  return (
    <div>
      <Banner />
    </div>
  )
}
