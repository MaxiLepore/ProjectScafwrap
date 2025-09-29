"use client"

import React from "react"

interface Crumb {
  name: string
  item: string
}

interface BreadcrumbJsonLdProps {
  baseUrl?: string
  crumbs: Crumb[]
}

// Injects BreadcrumbList structured data to help Google understand site hierarchy
export default function BreadcrumbJsonLd({ baseUrl = "https://scafwrap.co.nz", crumbs }: BreadcrumbJsonLdProps) {
  const itemListElement = crumbs.map((c, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: c.name,
    item: c.item.startsWith("http") ? c.item : `${baseUrl}${c.item}`
  }))

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
