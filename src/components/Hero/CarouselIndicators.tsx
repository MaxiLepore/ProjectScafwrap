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
           animation: 'fade-in-up 0.6s ease-out forwards',
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
          {/* Indicador estilo barra de progreso */}
          <span
            className={`block h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 sm:w-10 bg-accent shadow-lg'
                : 'w-2.5 bg-white/50 hover:bg-white/80 active:bg-white'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
