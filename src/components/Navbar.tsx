// src/components/Navbar.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "MARINE", href: "/marine" },
  { label: "CONSTRUCTION", href: "/construction" },
  { label: "RECLADS", href: "/reclads" },
  { label: "RECYCLING", href: "/recycling" },
  { label: "CONTACT", href: "/contact" },
]

export const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-heading w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-start justify-between">
        {/* Izquierda: Logo con espacio rectangular */}
        <div className="flex items-center w-[180px] sm:w-2/5">
          <div className="relative w-[140px] h-[48px] sm:w-[260px] sm:h-[80px]">
            <Image
              src="/logoScafwrap.png"
              alt="Scafwrap Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Desktop: Número y secciones */}
        <div className="hidden sm:flex flex-col w-3/5 items-end">
          <span className="text-xs md:text-sm font-semibold text-[#1E1E1E] text-right mb-4 mt-2">
            PH. <span className="text-[#008CD2] ml-1">0800 722 397</span>
          </span>
          <nav className="flex gap-4 md:gap-5 lg:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs md:text-sm ${isActive ? "font-bold" : "font-normal"} uppercase tracking-wide px-2 py-1 transition-colors duration-200
                    ${isActive ? "text-[#00AEEF]" : "text-[#1E1E1E]"}
                    hover:text-[#00BFFF]`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#00AEEF] rounded"></span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
        {/* Mobile: Botón menú */}
        <button
          className="sm:hidden flex items-center justify-center p-2 text-2xl text-[#00AEEF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <span>&#10005;</span> // X
          ) : (
            <span>&#9776;</span> // ☰
          )}
        </button>
      </div>
      {/* Mobile: Menú desplegable */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-4 pb-4 animate-fade-in flex flex-col items-end">
          <span className="block text-xs font-semibold text-[#1E1E1E] text-right mt-2 mb-2">
            PH. <span className="text-[#008CD2] ml-1">0800 722 397</span>
          </span>
          <nav className="flex flex-col gap-2 w-full items-end">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm ${isActive ? "font-bold" : "font-normal"} uppercase tracking-wide px-2 py-1 transition-colors duration-200 w-fit
                    ${isActive ? "text-[#00AEEF]" : "text-[#1E1E1E]"}
                    hover:text-[#00BFFF]`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#00AEEF] rounded"></span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
