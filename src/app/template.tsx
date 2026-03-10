'use client'

import { ReactNode, useEffect, useState } from 'react'

interface TemplateProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
}

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4
}

// Cache module reference to avoid re-importing on each navigation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let MotionDivCached: any = null

export default function Template({ children }: TemplateProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [MotionDiv, setMotionDiv] = useState<any>(MotionDivCached)

  useEffect(() => {
    if (MotionDivCached) return
    import('framer-motion').then(mod => {
      MotionDivCached = mod.motion.div
      setMotionDiv(() => mod.motion.div)
    })
  }, [])

  if (!MotionDiv) {
    return <div className="w-full">{children}</div>
  }

  return (
    <MotionDiv
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </MotionDiv>
  )
}
