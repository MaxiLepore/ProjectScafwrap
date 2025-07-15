'use client'

import { ReactNode } from 'react'
import { usePageTransitionContext } from '@/components/PageTransition/PageTransitionProvider'

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export default function TransitionLink({ 
  href, 
  children, 
  className = "", 
  disabled = false,
  onClick 
}: TransitionLinkProps) {
  const { transitionTo, isLoading } = usePageTransitionContext()

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (disabled || isLoading) return
    
    if (onClick) {
      onClick()
    }
    
    await transitionTo(href)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${className} ${
        isLoading || disabled 
          ? "opacity-50 cursor-not-allowed" 
          : "cursor-pointer"
      }`}
    >
      {children}
    </button>
  )
}
