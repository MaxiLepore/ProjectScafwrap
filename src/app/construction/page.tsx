// src/app/construction/page.tsx
import Banner from "@/sections/Construction/Banner"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Shrink Wrap Auckland | ScafWrap NZ",
  description: "Professional construction shrink wrap services in Auckland. Weatherproofing, scaffolding protection, and building site enclosures.",
  keywords: [
    "construction shrink wrap Auckland", "scaffolding weatherproofing", "building protection NZ",
    "leaky building repairs Auckland", "construction site protection", "scaffold enclosure",
    "weather barrier construction", "building renovation wrap", "construction dust containment",
    "temporary building protection", "industrial wrapping Auckland", "construction contractors NZ"
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/construction",
    siteName: "ScafWrap New Zealand",
    title: "Construction Shrink Wrap Auckland | ScafWrap NZ",
    description: "Professional construction shrink wrap services in Auckland. Weatherproofing, scaffolding protection, and building site enclosures.",
    images: [
      {
        url: "/images/construction-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construction shrink wrap services Auckland - scaffolding and building protection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@scafwrapnz",
    title: "Construction Shrink Wrap Auckland | ScafWrap NZ",
    description: "Professional construction shrink wrap services in Auckland. Weatherproofing, scaffolding protection, and building site enclosures.",
    images: ["/images/construction-og-image.jpg"]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/construction"
  },
  category: "Construction Services",
  classification: "Construction Shrink Wrap"
};

export default function ConstructionPage() {
  return (
    <main>
      <Banner />
    </main>
  );
}
