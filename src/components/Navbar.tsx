// src/components/Navbar.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  // Función para manejar navegación en móviles
  const handleMobileNavigation = (href: string) => {
    setMenuOpen(false)
    // Pequeño delay para que se vea la animación de cierre
    setTimeout(() => {
      window.location.href = href
    }, 200)
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
          <Link href="/" className="relative w-[140px] h-[48px] sm:w-[260px] sm:h-[80px] cursor-pointer">
            <Image
              src="/logoScafwrap.png"
              alt="Scafwrap Logo"
              fill
              sizes="(max-width: 640px) 140px, 260px"
              className="object-contain hover:opacity-90 transition-opacity duration-200"
              priority
            />
          </Link>
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
        {/* Mobile: Botón menú animado */}
        <motion.button
          className="sm:hidden flex items-center justify-center p-2 text-2xl text-[#00AEEF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          variants={hamburgerVariants}
          animate={menuOpen ? "open" : "closed"}
        >
          {menuOpen ? (
            <motion.span
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              &#10005;
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              &#9776;
            </motion.span>
          )}
        </motion.button>
      </div>
      
      {/* Mobile: Menú desplegable animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden bg-white border-t border-gray-200 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-4 pb-4 flex flex-col items-end"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.span 
                className="block text-xs font-semibold text-[#1E1E1E] text-right mt-2 mb-2"
                variants={itemVariants}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                PH. <span className="text-[#008CD2] ml-1">0800 722 397</span>
              </motion.span>
              
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
