'use client'

interface DecorativeOverlaysProps {
  className?: string
}

export const DecorativeOverlays = ({ className = '' }: DecorativeOverlaysProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none z-10 hidden lg:block ${className}`}>
      {/* Triángulos principales mejorados */}
      <div className="absolute left-0 top-0 w-48 h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-cyan-400/90 to-cyan-500/70 clip-top-left-triangle transition-all duration-700 shadow-2xl" />
      <div className="absolute right-0 bottom-0 w-48 h-48 xl:w-56 xl:h-56 bg-gradient-to-tl from-cyan-400/90 to-cyan-500/70 clip-bottom-right-triangle transition-all duration-700 shadow-2xl" />

      {/* Triángulos adicionales más pequeños para efecto layered */}
      <div className="absolute left-6 top-6 xl:left-8 xl:top-8 w-24 h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-white/30 to-cyan-300/50 clip-top-left-triangle transition-all duration-500 delay-100 shadow-lg" />
      <div className="absolute right-6 bottom-6 xl:right-8 xl:bottom-8 w-24 h-24 xl:w-28 xl:h-28 bg-gradient-to-tl from-white/30 to-cyan-300/50 clip-bottom-right-triangle transition-all duration-500 delay-100 shadow-lg" />

      {/* Elementos decorativos adicionales para desktop */}
      <div className="absolute top-1/2 left-8 w-2 h-16 bg-gradient-to-b from-cyan-400/60 to-transparent rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-8 w-2 h-16 bg-gradient-to-b from-cyan-400/60 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </div>
  )
}
