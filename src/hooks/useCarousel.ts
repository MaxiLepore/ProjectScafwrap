'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface UseCarouselOptions {
  totalSlides: number
  autoPlayInterval?: number
  pauseOnHover?: boolean
}

interface UseCarouselReturn {
  currentSlide: number
  isPlaying: boolean
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
  pause: () => void
  play: () => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export const useCarousel = ({
  totalSlides,
  autoPlayInterval = 5000,
  pauseOnHover = true
}: UseCarouselOptions): UseCarouselReturn => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Función para ir al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  // Función para ir al slide anterior
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Función para ir a un slide específico
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }, [totalSlides])

  // Función para pausar el autoplay
  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsPlaying(false)
  }, [])

  // Función para iniciar el autoplay
  const play = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
      setIsPlaying(true)
    }
  }, [nextSlide, autoPlayInterval])

  // Manejar hover para pausar/reanudar
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      pause()
    }
  }, [pauseOnHover, pause])

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      play()
    }
  }, [pauseOnHover, play])

  // Efecto para limpiar interval al desmontar
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Efecto para iniciar autoplay automáticamente
  useEffect(() => {
    play()
    return () => pause()
  }, [play, pause])

  return {
    currentSlide,
    isPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    pause,
    play,
    handleMouseEnter,
    handleMouseLeave
  }
}
