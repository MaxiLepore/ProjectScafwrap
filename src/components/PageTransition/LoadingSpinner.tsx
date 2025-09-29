'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  isVisible: boolean
}

export default function LoadingSpinner({ isVisible }: LoadingSpinnerProps) {
  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 backdrop-blur-sm pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.25, 
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
      }}
      style={{ willChange: 'opacity' }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Logo de ScafWrap */}
        <motion.div
          className="relative w-12 h-12 mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Círculo de fondo con colores de marca */}
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#008CD2] shadow-lg"></div>
          
          {/* Spinner simple - solo un arco */}
          <motion.div
            className="absolute inset-1 w-10 h-10 rounded-full border-2 border-transparent border-t-white/60"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ 
              willChange: 'transform',
              transform: 'translateZ(0)', // Force hardware acceleration
              backfaceVisibility: 'hidden'
            }}
          />
        </motion.div>

        {/* Texto minimalista */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.15, 
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h3 
            className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
            style={{ textShadow: 'none' }}
          >
            ScafWrap
          </h3>
          <p 
            className="text-sm text-gray-500 my-1"
            style={{ textShadow: 'none' }}
          >
            Loading...
          </p>
        </motion.div>

        {/* Puntos flotantes de carga */}
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-gradient-to-br from-[#00AEEF] to-[#008CD2] rounded-full"
              animate={{
                y: [0, -6, 0],
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 1.0,
                repeat: Infinity,
                delay: i * 0.15,
                ease: [0.4, 0, 0.6, 1] // easeInOut más suave
              }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}