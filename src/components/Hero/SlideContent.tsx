'use client'

import { useSyncExternalStore } from 'react'
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
  hidden: { opacity: 0, x: 36, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -36, filter: 'blur(8px)' }
}

const itemVariants = {
  hidden: { opacity: 0, x: 24, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -24, filter: 'blur(4px)' }
}

const buttonVariants = {
  hidden: { opacity: 0, x: 24, scale: 0.95, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -24, scale: 0.95, filter: 'blur(4px)' }
}

const titleClass =
  'font-heading font-bold uppercase text-white drop-shadow-2xl text-left lg:text-right text-balance break-words hyphens-none text-[clamp(26px,7vw,30px)] leading-[1.15] sm:text-[32px] sm:leading-tight md:text-[38px] lg:text-[44px] xl:text-[50px]'

const descClass =
  'mt-4 lg:mt-5 font-body text-white drop-shadow-lg text-left lg:text-right text-pretty max-w-full text-[15px] leading-relaxed sm:text-[15px] sm:leading-relaxed md:text-[16px] lg:text-[17px]'

const btnWrapClass =
  'mt-7 sm:mt-5 lg:mt-6 flex justify-start lg:justify-end'

const btnClass =
  'w-full sm:w-auto max-w-[340px] px-6 py-2.5 bg-secondary text-white uppercase tracking-wide text-[13px] md:text-[14px] font-semibold shadow-xl hover:bg-white hover:text-black border-2 border-secondary hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-sm min-h-[44px] min-w-[140px] flex items-center justify-center touch-manipulation focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

// No-op subscription: el valor de hidratación nunca cambia tras montar
const emptySubscribe = () => () => {}

export const SlideContent = ({ slide, isActive, className = '' }: SlideContentProps) => {
  // false en el server y en el primer render del cliente → asegura match de hidratación
  // Tras hidratar, useSyncExternalStore re-renderiza con true → los slides animan
  const hasHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

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
              className="w-full sm:w-auto"
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
