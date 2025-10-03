// src/app/layout.tsx
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { ReactNode } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import PageTransitionProvider from "@/components/PageTransition/PageTransitionProvider"

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
  title: "Scafwrap NZ | Shrinkwrap Auckland - Marine & Construction Weatherproofing",
  description: "Shrinkwrap specialists in Auckland. Professional protection for yachts, boats, scaffolding, and construction sites. Weatherproof and sustainable solutions in New Zealand.",
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
      { url: "/logoScafwrap.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" }
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
    title: "Scafwrap NZ | Shrinkwrap Auckland - Marine & Construction Weatherproofing",
    description: "Shrinkwrap specialists in Auckland. Professional protection for yachts, boats, scaffolding, and construction sites. Weatherproof and sustainable solutions in New Zealand.",
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
    title: "Scafwrap NZ | Shrinkwrap Auckland - Marine & Construction Weatherproofing",
    description: "Shrinkwrap specialists in Auckland. Professional protection for yachts, boats, scaffolding, and construction sites. Weatherproof and sustainable solutions in New Zealand.",
    images: ["/images/scafwrap-og-image.jpg"]
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-NZ"
      className={`${montserrat.variable} ${istok.variable}`}
    >
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/logoScafwrap.jpeg" type="image/jpeg" sizes="any" />
        <link rel="shortcut icon" href="/logoScafwrap.jpeg" />
        <link rel="apple-touch-icon" href="/logoScafwrap.jpeg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logoScafwrap.jpeg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/logoScafwrap.jpeg" />
        <meta name="msapplication-TileColor" content="#00AEEF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#00AEEF" />
        <meta name="google-site-verification" content="hCXuWlL4pDm1LOqZJusDxK4FzmXPZyzxNZdyUNaoqxk" />
        
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://scafwrap.co.nz/#business",
                  "name": "Scafwrap New Zealand",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://scafwrap.co.nz/logoScafwrap.jpeg",
                    "width": 400,
                    "height": 300
                  },
                  "description": "Professional shrinkwrap services for marine and construction applications in Auckland, New Zealand",
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
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://scafwrap.co.nz/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
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
        <PageTransitionProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  )
}
