'use client'

import { useState, useCallback, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Duración de las transiciones
  const TRANSITION_DURATION = 300
  const LOADING_MIN_DURATION = 500

  const transitionTo = useCallback(async (href: string) => {
    // No hacer nada si ya estamos en esa página
    if (href === pathname) return

    try {
      setIsTransitioning(true)
      setIsLoading(true)

      // Pequeño delay para mostrar la transición de salida
      await new Promise(resolve => setTimeout(resolve, TRANSITION_DURATION))

      // Navegar a la nueva página
      router.push(href)

      // Mantener el loading por un tiempo mínimo para suavidad visual
      await new Promise(resolve => setTimeout(resolve, LOADING_MIN_DURATION))

    } catch (error) {
      console.error('Error durante la transición:', error)
    } finally {
      setIsLoading(false)
      setIsTransitioning(false)
    }
  }, [router, pathname, TRANSITION_DURATION, LOADING_MIN_DURATION])

  // Detectar cambios de ruta para limpiar estados
  useEffect(() => {
    setIsTransitioning(false)
    setIsLoading(false)
  }, [pathname])

  // Función para transición inmediata (sin loading)
  const quickTransition = useCallback((href: string) => {
    if (href === pathname) return
    router.push(href)
  }, [router, pathname])

  return {
    isTransitioning,
    isLoading,
    transitionTo,
    quickTransition,
    TRANSITION_DURATION
  }
}