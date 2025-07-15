'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  isVisible: boolean
}

export default function LoadingSpinner({ isVisible }: LoadingSpinnerProps) {
  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner principal */}
        <motion.div
          className="relative w-12 h-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-3 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-3 border-[#00AEEF] border-t-transparent rounded-full"></div>
        </motion.div>

        {/* Texto de carga */}
        <motion.p
          className="text-sm text-gray-600 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Loading...
        </motion.p>

        {/* Puntos animados */}
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#00AEEF] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}