import Hero from "@/sections/Home/Hero"
import Services from "@/sections/Home/Services"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://scafwrap.co.nz"
  }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}
