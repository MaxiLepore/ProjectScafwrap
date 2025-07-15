'use client'

import { createContext, useContext, ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePageTransition } from '@/hooks/usePageTransition'
import LoadingSpinner from './LoadingSpinner'
import LoadingBar from './LoadingBar'

interface PageTransitionContextType {
  isTransitioning: boolean
  isLoading: boolean
  transitionTo: (href: string) => Promise<void>
  quickTransition: (href: string) => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

interface PageTransitionProviderProps {
  children: ReactNode
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const transitionHook = usePageTransition()

  return (
    <PageTransitionContext.Provider value={transitionHook}>
      {children}
      <LoadingBar />
      <AnimatePresence mode="wait">
        <LoadingSpinner isVisible={transitionHook.isLoading} />
      </AnimatePresence>
    </PageTransitionContext.Provider>
  )
}

export function usePageTransitionContext() {
  const context = useContext(PageTransitionContext)
  if (context === undefined) {
    throw new Error('usePageTransitionContext debe usarse dentro de PageTransitionProvider')
  }
  return context
}

export default PageTransitionProvider