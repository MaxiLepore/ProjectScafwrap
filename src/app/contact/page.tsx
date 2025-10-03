import ContactPage from "@/sections/Contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Scafwrap NZ | Get a Free Quote Auckland",
  description: "Contact Scafwrap for professional shrinkwrap services in Auckland. Get a free, no-obligation quote for marine, construction, or reclad projects.",
  keywords: [
    "contact scafwrap", "shrinkwrap quote Auckland", "free quote NZ",
    "scafwrap contact", "Auckland shrinkwrap contact", "marine quote",
    "construction quote Auckland", "reclad quote", "weatherproofing contact"
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz/contact",
    siteName: "Scafwrap New Zealand",
    title: "Contact Scafwrap NZ | Get a Free Quote Auckland",
    description: "Contact Scafwrap for professional shrinkwrap services in Auckland. Get a free, no-obligation quote for marine, construction, or reclad projects.",
    images: [
      {
        url: "/images/construction.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Scafwrap for professional shrinkwrap services in Auckland"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@scafwrapnz",
    title: "Contact Scafwrap NZ | Get a Free Quote Auckland",
    description: "Contact Scafwrap for professional shrinkwrap services in Auckland. Get a free, no-obligation quote for marine, construction, or reclad projects.",
    images: ["/images/construction.jpg"]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz/contact"
  },
  category: "Contact",
  classification: "Contact Information"
};

export default function Contact() {
  return <ContactPage />;
}
