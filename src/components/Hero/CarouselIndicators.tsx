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
    <div className={`absolute left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 ${className}`}
         style={{
           animation: 'fade-in-up 0.6s ease-out 0.5s both'
         }}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className="p-2.5 touch-manipulation flex items-center justify-center"
          aria-label={`Ir al slide ${index + 1}`}
          aria-pressed={index === currentSlide}
        >
          {/* Indicador estilo barra de progreso */}
          <span
            className={`block h-[5px] rounded-full transition-all duration-300 ease-out ${
              index === currentSlide
                ? 'w-6 sm:w-7 bg-accent shadow-md'
                : 'w-[5px] bg-white/40 hover:bg-white/70 active:bg-white'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
