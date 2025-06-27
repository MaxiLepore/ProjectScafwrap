import Banner from "@/sections/Marine/Banner"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScafWrap NZ",
  description: "Professional marine shrink wrap services in Auckland. Yacht wrapping, boat protection, super yacht refits & marine facility weatherproofing. Expert marine specialists.",
  keywords: [
    "marine shrink wrap Auckland", "yacht wrapping Auckland", "boat shrink wrap NZ",
    "super yacht refit Auckland", "marine weatherproofing", "yacht protection",
    "boat covers Auckland", "marine facility wrapping", "yacht maintenance Auckland",
    "marine refit services", "boat transport protection", "yacht captains Auckland"
  ],
  openGraph: {
    title: "ScafWrap NZ",
    description: "Professional marine shrink wrap services in Auckland. Yacht wrapping, boat protection, super yacht refits & marine facility weatherproofing.",
    url: "https://scafwrap.co.nz/marine",
    images: [
      {
        url: "/images/marine-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marine shrink wrap services Auckland - yacht and boat wrapping"
      }
    ]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/marine"
  }
};

export default function MarinePage() {
  return (
    <>
      <Banner />
    </>
  )
}
