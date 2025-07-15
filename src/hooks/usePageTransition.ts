'use client'

import { useState, useCallback, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pendingPath, setPendingPath] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Duración de las transiciones
  const TRANSITION_DURATION = 300
  const LOADING_MIN_DURATION = 500

  const transitionTo = useCallback(async (href: string) => {
    if (href === pathname) return

    try {
      setIsTransitioning(true)
      setIsLoading(true)
      setPendingPath(href)

      // Pequeño delay para mostrar la transición de salida
      await new Promise(resolve => setTimeout(resolve, TRANSITION_DURATION))

      // Navegar a la nueva página
      router.push(href)
      // Aquí NO esperamos el LOADING_MIN_DURATION todavía
      // Esperamos a que el pathname cambie (nueva página montada)
    } catch (error) {
      console.error('Error durante la transición:', error)
      setIsLoading(false)
      setIsTransitioning(false)
      setPendingPath(null)
    }
  }, [router, pathname, TRANSITION_DURATION])

  // Cuando el pathname cambie (nueva página montada), cerramos el loader tras el tiempo mínimo
  useEffect(() => {
    if (!pendingPath) return
    if (pendingPath !== pathname) return

    // Esperar el tiempo mínimo de loading antes de cerrar
    const timeout = setTimeout(() => {
      setIsLoading(false)
      setIsTransitioning(false)
      setPendingPath(null)
    }, LOADING_MIN_DURATION)

    return () => clearTimeout(timeout)
  }, [pathname, pendingPath, LOADING_MIN_DURATION])

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