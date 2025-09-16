'use client'

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

export const SlideContent = ({ slide, isActive, className = '' }: SlideContentProps) => {
  // Variantes de animación para la entrada
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.05
    }
  }

  // Variantes para elementos individuales
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    },
    exit: {
      opacity: 0,
      y: -15,
      x: 10
    }
  }

  // Variantes específicas para el botón
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={slide.title} // Key única para forzar re-render
          className={className}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.15,
            delayChildren: 0.1
          }}
          layout
        >
          {/* Título con animación fluida */}
          <motion.h1 
            className="font-heading font-bold uppercase text-white drop-shadow-2xl text-center sm:text-left lg:text-right text-[24px] leading-[1.2] sm:text-[32px] sm:leading-tight md:text-[38px] lg:text-[44px] xl:text-[52px] px-2 sm:px-0"
            variants={itemVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
            layout
          >
            {slide.title}
          </motion.h1>
          
          {/* Descripción con animación fluida */}
          <motion.p 
            className="mt-4 sm:mt-4 lg:mt-5 font-body text-white drop-shadow-lg text-center sm:text-left lg:text-right max-w-full text-[15px] leading-relaxed sm:text-[15px] sm:leading-relaxed md:text-[16px] lg:text-[17px] px-2 sm:px-0"
            variants={itemVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
            layout
          >
            {slide.description}
          </motion.p>
          
          {/* Botón con animación fluida */}
          <motion.div 
            className="mt-6 sm:mt-5 lg:mt-6 flex justify-center sm:justify-start lg:justify-end px-2 sm:px-0"
            variants={buttonVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3
            }}
            layout
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <TransitionLink
                href={`/${slide.buttonLink}`}
                className="px-8 py-4 bg-secondary text-white uppercase tracking-wide text-[13px] sm:text-[13px] md:text-[14px] font-semibold shadow-xl hover:bg-white hover:text-secondary border-2 border-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-sm min-h-[52px] min-w-[140px] flex items-center justify-center touch-manipulation"
              >
                {slide.buttonText}
              </TransitionLink>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
