// src/app/layout.tsx
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { ReactNode } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import { Montserrat, Istok_Web } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap", // Evita FOIT (Flash of Invisible Text)
  preload: true,   // Precarga la fuente crítica
  fallback: ["system-ui", "arial"] // Fallbacks mientras carga
})

const istok = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-istok",
  display: "swap",
  preload: false, // No precargar fuente secundaria
  fallback: ["system-ui", "arial"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://scafwrap.co.nz'),
  title: "ScafWrap NZ",
  description: "Leading shrink wrap specialists in Auckland, New Zealand. Professional marine yacht wrapping, construction site weatherproofing & scaffolding enclosure services. 90-day warranty.",
  keywords: [
    "shrink wrap Auckland", "marine shrink wrap NZ", "yacht wrapping Auckland", 
    "construction weatherproofing", "scaffolding wrap", "boat shrink wrap", 
    "building protection Auckland", "scaffold enclosure", "marine refit Auckland",
    "weather protection New Zealand", "ScafWrap", "shrink wrap specialists",
    "yacht maintenance Auckland", "construction site protection", "marine services NZ"
  ],
  authors: [{ name: "ScafWrap NZ" }],
  creator: "ScafWrap",
  publisher: "ScafWrap New Zealand",
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://scafwrap.co.nz",
    siteName: "ScafWrap New Zealand",
    title: "ScafWrap NZ",
    description: "Leading shrink wrap specialists in Auckland. Marine yacht wrapping, construction weatherproofing & scaffolding services. Contact us for professional solutions.",
    images: [
      {
        url: "/images/scafwrap-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScafWrap professional shrink wrap services Auckland New Zealand"
      }
    ]
  },
  alternates: {
    canonical: "https://scafwrap.co.nz"
  },
  category: "Business Services",
  classification: "Marine and Construction Services",
  referrer: "origin-when-cross-origin"
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
  colorScheme: "light"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-NZ"
      className={`${montserrat.variable} ${istok.variable}`}
    >
      <head>
        {/* Critical Resource Hints - Load First */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://scafwrap.co.nz" />
        
        {/* Preload Critical Assets - Solo para homepage */}
        {/* <link rel="preload" href="/images/marine.jpg" as="image" type="image/jpeg" /> */}
        
        {/* SEO Geo Tags */}
        <meta name="geo.region" content="NZ-AUK" />
        <meta name="geo.placename" content="Auckland" />
        <meta name="geo.position" content="-36.8485;174.7633" />
        <meta name="ICBM" content="-36.8485, 174.7633" />
        
        {/* Verification - Replace with real codes */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Structured Data - Non-blocking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://scafwrap.co.nz/#business",
                  "name": "ScafWrap New Zealand",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://scafwrap.co.nz/images/logo.png",
                    "width": 400,
                    "height": 300
                  },
                  "description": "Professional shrink wrap services for marine and construction applications in Auckland, New Zealand",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Auckland",
                    "addressRegion": "Auckland",
                    "addressCountry": "NZ"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -36.8485,
                    "longitude": 174.7633
                  },
                  "url": "https://scafwrap.co.nz",
                  "telephone": "+64-XXX-XXXX",
                  "priceRange": "$$",
                  "serviceArea": {
                    "@type": "State",
                    "name": "New Zealand"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Shrink Wrap Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Marine Shrink Wrap",
                          "description": "Professional yacht and boat shrink wrapping services"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Construction Weatherproofing",
                          "description": "Scaffolding and construction site weather protection"
                        }
                      }
                    ]
                  },
                  "openingHours": "Mo-Fr 08:00-17:00",
                  "paymentAccepted": ["Cash", "Credit Card"],
                  "currenciesAccepted": "NZD"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://scafwrap.co.nz/#website",
                  "url": "https://scafwrap.co.nz",
                  "name": "ScafWrap New Zealand",
                  "description": "Professional shrink wrap services for marine and construction",
                  "publisher": {
                    "@id": "https://scafwrap.co.nz/#business"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://scafwrap.co.nz/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Sitemap and Alternates */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" hrefLang="en-nz" href="https://scafwrap.co.nz" />
        <link rel="alternate" hrefLang="en" href="https://scafwrap.co.nz" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
