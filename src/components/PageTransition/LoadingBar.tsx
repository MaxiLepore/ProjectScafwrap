'use client'

import { motion } from 'framer-motion'
import { usePageTransitionContext } from '@/components/PageTransition/PageTransitionProvider'

export default function LoadingBar() {
  const { isLoading } = usePageTransitionContext()

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-[#00AEEF] to-[#008CD2]"
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0, transformOrigin: "right" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  )
}
