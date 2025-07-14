import Banner from "@/sections/Marine/Banner"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Shrink Wrap Auckland | ScafWrap NZ",
  description: "Professional marine shrink wrap services in Auckland. Protection for yachts, boats, and marine facilities. Weatherproofing and transport solutions.",
  keywords: [
    "marine shrink wrap Auckland", "yacht wrapping Auckland", "boat shrink wrap NZ",
    "super yacht refit Auckland", "marine weatherproofing", "yacht protection",
    "boat covers Auckland", "marine facility wrapping", "yacht maintenance Auckland",
    "marine refit services", "boat transport protection", "yacht captains Auckland"
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/marine",
    siteName: "ScafWrap New Zealand",
    title: "Marine Shrink Wrap Auckland | ScafWrap NZ",
    description: "Professional marine shrink wrap services in Auckland. Protection for yachts, boats, and marine facilities. Weatherproofing and transport solutions.",
    images: [
      {
        url: "/images/marine-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marine shrink wrap services Auckland - yacht and boat wrapping"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@scafwrapnz",
    title: "Marine Shrink Wrap Auckland | ScafWrap NZ",
    description: "Professional marine shrink wrap services in Auckland. Protection for yachts, boats, and marine facilities. Weatherproofing and transport solutions.",
    images: ["/images/marine-og-image.jpg"]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/marine"
  },
  category: "Marine Services",
  classification: "Marine Shrink Wrap"
};

export default function MarinePage() {
  return (
    <>
      <Banner />
    </>
  )
}
