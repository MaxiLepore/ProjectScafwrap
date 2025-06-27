// src/app/reclads/page.tsx
import type { Metadata } from "next"
import Banner from "@/sections/Reclads/Banner"

export const metadata: Metadata = {
  title: "ScafWrap NZ",
  description: "Expert building reclad and weathertightness solutions in Auckland. Residential & commercial building envelope upgrades, leaky building repairs, and heritage restoration services.",
  keywords: [
    "reclad Auckland", "building envelope Auckland", "weathertightness Auckland", 
    "leaky building repair", "residential reclad", "commercial reclad", 
    "building restoration Auckland", "cladding replacement", "weatherproofing Auckland",
    "heritage building restoration", "building consent Auckland", "reclad specialists NZ"
  ],
  authors: [{ name: "ScafWrap NZ" }],
  creator: "ScafWrap",
  publisher: "ScafWrap New Zealand",
  openGraph: {
    title: "ScafWrap NZ",
    description: "Leading reclad specialists in Auckland. Expert building envelope solutions, weathertightness repairs, and heritage restoration services. Licensed Building Practitioners.",
    images: [
      {
        url: "/images/reclads-og.jpg",
        width: 1200,
        height: 630,
        alt: "ScafWrap professional reclad and building envelope services Auckland"
      }
    ],
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/reclads",
    siteName: "ScafWrap New Zealand"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Reclad Services Auckland | ScafWrap",
    description: "Expert building envelope solutions and weathertightness reclad services across Auckland. Licensed Building Practitioners.",
    images: ["/images/reclads-twitter.jpg"]
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
