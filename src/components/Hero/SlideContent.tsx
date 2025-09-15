'use client'

import TransitionLink from '@/components/TransitionLink'

interface SlideData {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

interface SlideContentProps {
  slide: SlideData
  isActive: boolean
  className?: string
}

export const SlideContent = ({ slide, isActive, className = '' }: SlideContentProps) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {/* Título mejorado para mobile y desktop */}
      <h1 
        className="font-heading font-bold uppercase text-white drop-shadow-2xl text-center sm:text-left lg:text-right text-[24px] leading-[1.2] sm:text-[32px] sm:leading-tight md:text-[38px] lg:text-[44px] xl:text-[52px] px-2 sm:px-0 opacity-100"
        style={{ 
          animation: 'fadeInUp 0.8s ease-out forwards',
          animationDelay: '0s'
        }}
      >
        {slide.title}
      </h1>
      
      {/* Descripción mejorada con mejor legibilidad y espaciado */}
      <p 
        className="mt-4 sm:mt-4 lg:mt-5 font-body text-white drop-shadow-lg text-center sm:text-left lg:text-right max-w-full text-[15px] leading-relaxed sm:text-[15px] sm:leading-relaxed md:text-[16px] lg:text-[17px] px-2 sm:px-0 opacity-100"
        style={{ 
          animation: 'fadeInUp 0.8s ease-out forwards',
          animationDelay: '0.1s'
        }}
      >
        {slide.description}
      </p>
      
      {/* Botón mejorado con mejor touch target y espaciado */}
      <div 
        className="mt-6 sm:mt-5 lg:mt-6 flex justify-center sm:justify-start lg:justify-end px-2 sm:px-0 opacity-100"
        style={{ 
          animation: 'fadeInUp 0.8s ease-out forwards',
          animationDelay: '0.2s'
        }}
      >
        <TransitionLink
          href={`/${slide.buttonLink}`}
          className="px-8 py-4 bg-secondary text-white uppercase tracking-wide text-[13px] sm:text-[13px] md:text-[14px] font-semibold shadow-xl hover:bg-white hover:text-secondary border-2 border-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-sm min-h-[52px] min-w-[140px] flex items-center justify-center touch-manipulation"
        >
          {slide.buttonText}
        </TransitionLink>
      </div>
    </div>
  )
}
