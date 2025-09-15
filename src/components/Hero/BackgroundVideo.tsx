'use client'

import { useRef, useEffect } from 'react'
import { logger } from '@/lib/logger'

interface BackgroundVideoProps {
  src: string
  poster?: string
  onVideoLoad?: () => void
  onVideoError?: () => void
  className?: string
}

export const BackgroundVideo = ({ 
  src, 
  poster, 
  onVideoLoad, 
  onVideoError,
  className = '' 
}: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoLoad = () => {
    // Marcar video como cargado para métricas de performance
    logger.performanceMark('hero-video-loaded')
    logger.info('Hero video loaded successfully', { src })
    onVideoLoad?.()
  }

  const handleVideoError = () => {
    // Log error de forma más profesional
    logger.error('Error loading video, falling back to static content', { src })
    onVideoError?.()
  }

  const handleCanPlayThrough = () => {
    // Marcar video como listo para reproducción
    logger.performanceMark('hero-video-ready')
    logger.performanceMeasure('hero-video-load-time', 'hero-video-start', 'hero-video-ready')
  }

  // Optimización: Pausar video cuando no es visible
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Marcar inicio de carga del video
    logger.performanceMark('hero-video-start')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            logger.warn('Video play failed', { error: error.message, src })
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [src])

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlayThrough={handleCanPlayThrough}
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback para navegadores que no soportan video */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-cyan-800 flex items-center justify-center">
          <p className="text-white text-xl">Video no soportado</p>
        </div>
      </video>
    </div>
  )
}
