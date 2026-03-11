'use client'

import { useRef, useEffect } from 'react'
import { logger } from '@/lib/logger'

interface BackgroundVideoProps {
  src: string
  onVideoLoad?: () => void
  onVideoError?: () => void
  className?: string
}

export const BackgroundVideo = ({
  src,
  onVideoLoad,
  onVideoError,
  className = ''
}: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleCanPlayThrough = () => {
    logger.performanceMark('hero-video-ready')
    logger.performanceMeasure('hero-video-load-time', 'hero-video-start', 'hero-video-ready')
    onVideoLoad?.()
  }

  const handleVideoError = () => {
    logger.error('Error loading video, falling back to static content', { src })
    onVideoError?.()
  }

  // Pausar video cuando no es visible (ahorro de recursos)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    logger.performanceMark('hero-video-start')

    // Pausar/reanudar basado en visibilidad — play() en video ya reproduciendo es un no-op
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
      { threshold: 0.1 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [src])

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {/* Poster estático como fondo — se ve mientras el video carga */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero/video-poster.webp)' }}
      />

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={handleCanPlayThrough}
        onError={handleVideoError}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
