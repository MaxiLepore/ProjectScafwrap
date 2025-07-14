// src/app/recycling/page.tsx
import type { Metadata } from "next"
import Banner from "@/sections/Recycling/Banner"

export const metadata: Metadata = {
  title: "Recycling & Sustainability Auckland | ScafWrap NZ",
  description: "Professional recycling and environmental services in Auckland. Eco-friendly waste management and sustainable practices for marine and construction industries.",
  keywords: [
    "recycling Auckland", "environmental services", "waste management Auckland", 
    "eco-friendly disposal", "sustainable practices", "construction waste recycling",
    "marine waste management", "environmental compliance Auckland"
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/recycling",
    siteName: "ScafWrap New Zealand",
    title: "Recycling & Sustainability Auckland | ScafWrap NZ",
    description: "Professional recycling and environmental services in Auckland. Eco-friendly waste management and sustainable practices for marine and construction industries.",
    images: [
      {
        url: "/images/recycling-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recycling and environmental services Auckland - ScafWrap"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@scafwrapnz",
    title: "Recycling & Sustainability Auckland | ScafWrap NZ",
    description: "Professional recycling and environmental services in Auckland. Eco-friendly waste management and sustainable practices for marine and construction industries.",
    images: ["/images/recycling-og-image.jpg"]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/recycling"
  },
  category: "Environmental Services",
  classification: "Recycling and Sustainability"
}

export default function RecyclingPage() {
  return (
    <>
      <Banner />
    </>
  )
}
