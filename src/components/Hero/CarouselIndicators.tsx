'use client'

interface CarouselIndicatorsProps {
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
  className?: string
}

export const CarouselIndicators = ({ 
  totalSlides, 
  currentSlide, 
  onSlideChange, 
  className = '' 
}: CarouselIndicatorsProps) => {
  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 z-30 flex gap-2 sm:gap-3 opacity-100 ${className}`}
         style={{ 
           animation: 'fadeInUp 0.6s ease-out forwards',
           animationDelay: '0.5s'
         }}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className="p-3 touch-manipulation flex items-center justify-center"
          aria-label={`Ir al slide ${index + 1}`}
          aria-pressed={index === currentSlide}
        >
          {/* Indicador visual interno más pequeño */}
          <span 
            className={`block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-cyan-400 scale-125 shadow-lg ring-2 ring-cyan-300/50'
                : 'bg-white/60 hover:bg-white/80 active:bg-white'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
