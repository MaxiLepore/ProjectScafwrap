"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePageTransitionContext } from "@/components/PageTransition/PageTransitionProvider"

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  target?: string
  rel?: string
  ariaLabel?: string
}

// Renders a real anchor for SEO/accessibility and intercepts clicks for animated transitions
export default function TransitionLink({
  href,
  children,
  className = "",
  disabled = false,
  onClick,
  target,
  rel,
  ariaLabel
}: TransitionLinkProps) {
  const { transitionTo, isLoading } = usePageTransitionContext()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow default behavior for modifier keys (open in new tab, copy link, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || target === "_blank") {
      return
    }

    e.preventDefault()

    if (disabled || isLoading) return

    onClick?.()
    await transitionTo(href)
  }

  const disabledClasses = isLoading || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`${className} ${disabledClasses}`}
    >
      {children}
    </Link>
  )
}
