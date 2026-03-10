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

  const handleVideoLoad = () => {
    logger.performanceMark('hero-video-loaded')
    logger.info('Hero video loaded successfully', { src })
    onVideoLoad?.()
  }

  const handleVideoError = () => {
    logger.error('Error loading video, falling back to static content', { src })
    onVideoError?.()
  }

  const handleCanPlayThrough = () => {
    logger.performanceMark('hero-video-ready')
    logger.performanceMeasure('hero-video-load-time', 'hero-video-start', 'hero-video-ready')
  }

  // Optimización: Pausar video cuando no es visible
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

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
        preload="auto"
        poster="/images/hero/video-poster.webp"
        src={src}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlayThrough={handleCanPlayThrough}
      />
    </div>
  )
}
