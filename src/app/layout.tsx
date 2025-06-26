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
  display: "swap",
})

const istok = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-istok",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ScafWrap – Specialist Weather Proofing",
  description: "Shrink wrap marine solutions in New Zealand",
  keywords: ["ScafWrap", "marine", "shrink wrap", "New Zealand", "construction"],
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${istok.variable}`}
    >
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
