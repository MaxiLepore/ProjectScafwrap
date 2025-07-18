// src/components/Navbar.tsx
"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePageTransitionContext } from "@/components/PageTransition/PageTransitionProvider"

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
  const { transitionTo, isLoading } = usePageTransitionContext()

  // Función para manejar navegación en móviles con transición
  const handleMobileNavigation = async (href: string) => {
    setMenuOpen(false)
    // Pequeño delay para que se vea la animación de cierre
    setTimeout(async () => {
      await transitionTo(href)
    }, 200)
  }

  // Función para manejar navegación en desktop con transición
  const handleDesktopNavigation = async (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    if (!isLoading) {
      await transitionTo(href)
    }
  }

  // Variantes de animación para el menú
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0
    },
    open: {
      opacity: 1,
      height: "auto"
    }
  }

  // Variantes para los elementos del menú
  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20
    },
    open: {
      opacity: 1,
      x: 0
    }
  }

  // Variantes para el contenedor de elementos
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  }

  // Variantes para el icono hamburguesa
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-heading w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-start justify-between">
        {/* Izquierda: Logo con espacio rectangular */}
        <div className="flex items-center w-[180px] sm:w-2/5">
          <button
            onClick={(e) => handleDesktopNavigation(e, "/")}
            disabled={isLoading}
            className={`relative w-[140px] h-[48px] sm:w-[260px] sm:h-[80px] ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <Image
              src="/logoScafwrap.jpeg"
              alt="Scafwrap Logo"
              fill
              sizes="(max-width: 640px) 140px, 260px"
              className="object-contain hover:opacity-90 transition-opacity duration-200"
              priority
            />
          </button>
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
                <button
                  key={item.href}
                  onClick={(e) => handleDesktopNavigation(e, item.href)}
                  disabled={isLoading || isActive}
                  className={`relative text-xs md:text-sm ${isActive ? "font-bold" : "font-normal"} uppercase tracking-wide px-2 py-1 transition-colors duration-200
                    ${isActive ? "text-[#00AEEF]" : "text-[#1E1E1E]"}
                    ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:text-[#00BFFF] cursor-pointer"}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#00AEEF] rounded"></span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>
        {/* Mobile: Botón menú animado */}
        <motion.button
          className="sm:hidden flex items-center justify-center p-2 text-2xl text-[#00AEEF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          variants={hamburgerVariants}
          animate={menuOpen ? "open" : "closed"}
        >
          {!menuOpen ? (
            <motion.span
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="28" height="2.5" rx="1.25" fill="#00AEEF" />
                <rect y="13" width="28" height="2.5" rx="1.25" fill="#00AEEF" />
                <rect y="20" width="28" height="2.5" rx="1.25" fill="#00AEEF" />
              </svg>
            </motion.span>
          ) : null}
        </motion.button>
      </div>
      
      {/* Mobile: Menú desplegable animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay oscuro */}
            <div
              className="w-[30vw] h-full bg-black bg-opacity-40"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menú lateral */}
            <motion.div
              className="w-[70vw] h-full bg-white border-l border-gray-200 overflow-y-auto flex flex-col px-4 pb-4 relative"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Fila superior: Teléfono a la izquierda, botón cerrar a la derecha */}
              <div className="flex items-center justify-between w-full h-16 mb-2">
                <span className="block text-xs font-semibold text-[#1E1E1E] text-left">
                  PH. <span className="text-[#008CD2] ml-1">0800 722 397</span>
                </span>
                {/* Botón de cerrar (hamburguesa animada) */}
                <motion.button
                  className="text-3xl text-[#00AEEF] focus:outline-none z-10 flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  whileTap={{ scale: 0.9 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  animate={menuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="6" width="28" height="2.5" rx="1.25" fill="#00AEEF" />
                    <rect y="13" width="28" height="2.5" rx="1.25" fill="#00AEEF" />
                    <rect y="20" width="28" height="2.5" rx="1.25" fill="#00AEEF" />
                  </svg>
                </motion.button>
              </div>
              {/* Opciones del menú debajo */}
              <motion.nav
                className="flex flex-col gap-2 w-full items-end"
                variants={containerVariants}
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <button
                        className={`relative text-sm ${isActive ? "font-bold" : "font-normal"} uppercase tracking-wide px-2 py-1 transition-colors duration-200 w-fit
                          ${isActive ? "text-[#00AEEF]" : "text-[#1E1E1E]"}
                          hover:text-[#00BFFF]`}
                        onClick={() => handleMobileNavigation(item.href)}
                      >
                        {item.label}
                        {isActive && (
                          <motion.span
                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#00AEEF] rounded"
                            layoutId="activeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }}
                          />
                        )}
                      </button>
                    </motion.div>
                  )
                })}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
