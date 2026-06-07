// src/app/layout.tsx
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { ReactNode } from "react"
import { headers } from "next/headers"
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
  title: "Scafwrap | Specialist Weather Proofing & Containment Solutions",
  description: "Auckland's leading shrinkwrap specialists. Professional weatherproofing for yachts, boats, construction, scaffolding and building reclads.",
  keywords: [
    "shrink wrap Auckland", "marine shrink wrap NZ", "yacht wrapping Auckland", 
    "construction weatherproofing", "scaffolding wrap", "boat shrink wrap", 
    "building protection Auckland", "scaffold enclosure", "marine refit Auckland",
    "weather protection New Zealand", "ScafWrap", "shrink wrap specialists",
    "yacht maintenance Auckland", "construction site protection", "marine services NZ"
  ],
  authors: [{ name: "Scafwrap NZ" }],
  creator: "Scafwrap",
  publisher: "Scafwrap New Zealand",
  icons: {
    icon: [
      { url: "/logoScafwrap.jpeg", type: "image/jpeg" }
    ],
    shortcut: "/logoScafwrap.jpeg",
    apple: "/logoScafwrap.jpeg",
  },
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
    siteName: "Scafwrap New Zealand",
    title: "Scafwrap | Specialist Weather Proofing & Containment Solutions",
    description: "Auckland's leading shrinkwrap specialists. Professional weatherproofing for yachts, boats, construction, scaffolding and building reclads.",
    images: [
      {
        url: "/images/construction.jpg",
        width: 1200,
        height: 630,
        alt: "Scafwrap - professional shrinkwrap for yachts, boats, and construction in Auckland"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@scafwrapnz",
    title: "Scafwrap NZ | Auckland Shrinkwrap Specialists",
    description: "Auckland's leading shrinkwrap specialists. Professional weatherproofing for yachts, boats, construction, scaffolding and building reclads. Free quotes. Call 0800 722 397.",
    images: ["/images/construction.jpg"]
  },
  category: "Business Services",
  classification: "Marine and Construction Services",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "hCXuWlL4pDm1LOqZJusDxK4FzmXPZyzxNZdyUNaoqxk",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Scafwrap NZ",
    "application-name": "Scafwrap NZ",
    "msapplication-TileColor": "#00AEEF",
    "msapplication-config": "/browserconfig.xml",
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
  colorScheme: "light"
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined
  return (
    <html
      lang="en-NZ"
      className={`${montserrat.variable} ${istok.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/logoScafwrap.jpeg" />
        
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
        
        {/* Verification - Add your actual verification codes here */}
        {/* 
        🔧 PASO 1: Descomenta y reemplaza estos códigos con tus códigos reales
        <meta name="google-site-verification" content="TU_CODIGO_GOOGLE_AQUI" />
        <meta name="msvalidate.01" content="TU_CODIGO_BING_AQUI" />
        */}
        
        {/* Structured Data - Non-blocking */}
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://scafwrap.co.nz/#business",
                  "name": "Scafwrap New Zealand",
                  "alternateName": "Scafwrap NZ",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://scafwrap.co.nz/logoScafwrap.jpeg",
                    "width": 400,
                    "height": 300
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://scafwrap.co.nz/logoScafwrap.jpeg",
                    "width": 400,
                    "height": 300
                  },
                  "description": "Auckland's leading shrinkwrap specialists providing professional weatherproofing for marine, construction, and building applications throughout New Zealand",
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
                  "telephone": "0800722397",
                  "priceRange": "$$",
                  "sameAs": [
                    "https://www.facebook.com/scafwrap/",
                    "https://www.linkedin.com/company/scafwrap-limited/"
                  ],
                  "serviceArea": {
                    "@type": "State",
                    "name": "New Zealand"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Shrinkwrap Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Marine Shrinkwrap",
                          "description": "Professional yacht and boat shrinkwrapping services"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Construction Weatherproofing",
                          "description": "Scaffolding and construction site weather protection"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Building Reclads",
                          "description": "Shrinkwrap containment and weather protection for building reclad projects"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Recycling",
                          "description": "Shrinkwrap recycling and sustainable waste management services"
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
                  "name": "Scafwrap New Zealand",
                  "description": "Professional shrinkwrap services for marine and construction",
                  "publisher": {
                    "@id": "https://scafwrap.co.nz/#business"
                  }
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": ["Home", "Marine", "Construction", "Reclads", "Recycling", "Contact"],
                  "url": [
                    "https://scafwrap.co.nz/",
                    "https://scafwrap.co.nz/marine",
                    "https://scafwrap.co.nz/construction",
                    "https://scafwrap.co.nz/reclads",
                    "https://scafwrap.co.nz/recycling",
                    "https://scafwrap.co.nz/contact"
                  ]
                }
              ]
            })
          }}
        />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
