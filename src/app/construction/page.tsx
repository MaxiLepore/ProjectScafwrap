// src/app/construction/page.tsx
import Banner from "@/sections/Construction/Banner"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScafWrap NZ",
  description: "Professional construction shrink wrap services in Auckland. Scaffolding weatherproofing, building protection, leaky building repairs & construction site enclosures.",
  keywords: [
    "construction shrink wrap Auckland", "scaffolding weatherproofing", "building protection NZ",
    "leaky building repairs Auckland", "construction site protection", "scaffold enclosure",
    "weather barrier construction", "building renovation wrap", "construction dust containment",
    "temporary building protection", "industrial wrapping Auckland", "construction contractors NZ"
  ],
  openGraph: {
    title: "ScafWrap NZ", 
    description: "Leading construction shrink wrap specialists in Auckland. Professional scaffolding weatherproofing & building protection services.",
    url: "https://scafwrap.co.nz/construction",
    images: [
      {
        url: "/images/construction-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construction shrink wrap services Auckland - scaffolding and building protection"
      }
    ]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/construction"
  }
};;

export default function ConstructionPage() {
  return (
    <main>
      <Banner />
    </main>
  );
}
