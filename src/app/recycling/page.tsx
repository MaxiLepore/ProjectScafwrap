// src/app/recycling/page.tsx
import type { Metadata } from "next"
import Banner from "@/sections/Recycling/Banner"

export const metadata: Metadata = {
  title: "ScafWrap NZ",
  description: "Professional recycling and environmental services in Auckland. Eco-friendly waste management and sustainable practices for marine and construction industries.",
  keywords: [
    "recycling Auckland", "environmental services", "waste management Auckland", 
    "eco-friendly disposal", "sustainable practices", "construction waste recycling",
    "marine waste management", "environmental compliance Auckland"
  ],
  authors: [{ name: "ScafWrap NZ" }],
  creator: "ScafWrap",
  publisher: "ScafWrap New Zealand",
  openGraph: {
    title: "ScafWrap NZ",
    description: "Leading recycling and environmental services in Auckland. Sustainable waste management for marine and construction sectors.",
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/recycling",
    siteName: "ScafWrap New Zealand"
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/recycling"
  }
}

export default function RecyclingPage() {
  return (
    <>
      <Banner />
    </>
  )
}
