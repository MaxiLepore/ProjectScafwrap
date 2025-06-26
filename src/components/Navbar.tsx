// src/components/Navbar.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "MARINE", href: "/marine" },
    { label: "CONSTRUCTION", href: "/construction" },
    { label: "RECLADS", href: "/reclads" },
    { label: "RECYCLING", href: "/recycling" },
    { label: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-heading">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png" // reemplazá con tu logo
            alt="Scafwrap Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold tracking-wide text-textDark">
            SCAF<span className="text-primary">WRAP</span>
          </span>
        </div>

        {/* Teléfono (desktop) */}
        <div className="hidden md:block text-sm font-semibold text-textDark">
          PH. <span className="text-secondary">0800 722 397</span>
        </div>

        {/* Menú hamburguesa (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-primary"
        >
          ☰
        </button>
      </div>

      {/* Navegación */}
      <nav
        className={`md:flex justify-center items-center gap-8 pb-3 md:pb-0 ${
          open ? "block" : "hidden"
        } md:block`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-semibold uppercase text-textDark hover:text-primary tracking-wide"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
