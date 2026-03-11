'use client'

import { useState, useEffect } from 'react'
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
  hidden: { opacity: 0, x: 80, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -80, filter: 'blur(8px)' }
}

const itemVariants = {
  hidden: { opacity: 0, x: 50, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -50, filter: 'blur(4px)' }
}

const buttonVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -50, scale: 0.95, filter: 'blur(4px)' }
}

const titleClass =
  'font-heading font-bold uppercase text-white drop-shadow-2xl text-center sm:text-left lg:text-right text-[24px] leading-[1.2] sm:text-[32px] sm:leading-tight md:text-[38px] lg:text-[44px] xl:text-[52px] px-2 sm:px-0'

const descClass =
  'mt-4 sm:mt-4 lg:mt-5 font-body text-white drop-shadow-lg text-center sm:text-left lg:text-right max-w-full text-[15px] leading-relaxed sm:text-[15px] sm:leading-relaxed md:text-[16px] lg:text-[17px] px-2 sm:px-0'

const btnWrapClass =
  'mt-6 sm:mt-5 lg:mt-6 flex justify-center sm:justify-start lg:justify-end px-2 sm:px-0'

const btnClass =
  'px-8 py-4 bg-secondary text-white uppercase tracking-wide text-[13px] sm:text-[13px] md:text-[14px] font-semibold shadow-xl hover:bg-white hover:text-black border-2 border-secondary hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-sm min-h-[52px] min-w-[140px] flex items-center justify-center touch-manipulation'

export const SlideContent = ({ slide, isActive, className = '' }: SlideContentProps) => {
  // false on both server and client initial render → ensures hydration match
  // After hydration, useEffect flips to true → subsequent slides animate in
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={slide.title}
          className={className}
          variants={containerVariants}
          initial={hasHydrated ? 'hidden' : false}
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.12,
            delayChildren: 0.08
          }}
        >
          <motion.h1
            className={titleClass}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            className={descClass}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {slide.description}
          </motion.p>

          <motion.div
            className={btnWrapClass}
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
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
