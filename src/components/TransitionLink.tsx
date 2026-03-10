"use client"

import { ReactNode } from "react"
import Link from "next/link"

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

// Renders a real anchor for SEO/accessibility with optional disabled behavior
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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || target === "_blank") {
      return
    }

    if (disabled) {
      e.preventDefault()
      return
    }

    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </Link>
  )
}
