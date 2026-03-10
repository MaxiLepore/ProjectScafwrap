'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TransitionLink from '@/components/TransitionLink'

interface SlideData {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

interface SlideContentProps {
  slide: SlideData
  isActive: boolean
  className?: string
}

// Hoisted outside component — static data, no need to recreate each render
const containerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 1.05 }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, x: -10 },
  visible: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: -15, x: 10 }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -15, scale: 0.95 }
}

const titleClass =
  'font-heading font-bold uppercase text-white drop-shadow-2xl text-center sm:text-left lg:text-right text-[24px] leading-[1.2] sm:text-[32px] sm:leading-tight md:text-[38px] lg:text-[44px] xl:text-[52px] px-2 sm:px-0'

const descClass =
  'mt-4 sm:mt-4 lg:mt-5 font-body text-white drop-shadow-lg text-center sm:text-left lg:text-right max-w-full text-[15px] leading-relaxed sm:text-[15px] sm:leading-relaxed md:text-[16px] lg:text-[17px] px-2 sm:px-0'

const btnWrapClass =
  'mt-6 sm:mt-5 lg:mt-6 flex justify-center sm:justify-start lg:justify-end px-2 sm:px-0'

const btnClass =
  'px-8 py-4 bg-secondary text-white uppercase tracking-wide text-[13px] sm:text-[13px] md:text-[14px] font-semibold shadow-xl hover:bg-white hover:text-secondary border-2 border-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-sm min-h-[52px] min-w-[140px] flex items-center justify-center touch-manipulation'

export const SlideContent = ({ slide, isActive, className = '' }: SlideContentProps) => {
  const [mounted, setMounted] = useState(false)
  const hasAnimated = useRef(false)

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  // SSR + hydration: render static HTML (no motion = no hydration mismatch)
  if (!mounted) {
    if (!isActive) return null
    return (
      <div className={className}>
        <h1 className={titleClass}>{slide.title}</h1>
        <p className={descClass}>{slide.description}</p>
        <div className={btnWrapClass}>
          <div>
            <TransitionLink href={`/${slide.buttonLink}`} className={btnClass}>
              {slide.buttonText}
            </TransitionLink>
          </div>
        </div>
      </div>
    )
  }

  // After hydration: use Framer Motion for slide transitions
  // First render after mount: skip entry animation (initial={false})
  // Subsequent slide changes: animate from "hidden"
  const skipEntry = !hasAnimated.current
  if (isActive && !hasAnimated.current) {
    hasAnimated.current = true
  }

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={slide.title}
          className={className}
          variants={containerVariants}
          initial={skipEntry ? false : 'hidden'}
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeOut',
            staggerChildren: 0.08,
            delayChildren: 0.05
          }}
        >
          {/* Título con animación fluida */}
          <motion.h1
            className={titleClass}
            variants={itemVariants}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {slide.title}
          </motion.h1>

          {/* Descripción con animación fluida */}
          <motion.p
            className={descClass}
            variants={itemVariants}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {slide.description}
          </motion.p>

          {/* Botón con animación fluida */}
          <motion.div
            className={btnWrapClass}
            variants={buttonVariants}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.15 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            >
              <TransitionLink href={`/${slide.buttonLink}`} className={btnClass}>
                {slide.buttonText}
              </TransitionLink>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
