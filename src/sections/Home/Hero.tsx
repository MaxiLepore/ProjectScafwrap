"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { useTouchGestures } from "@/hooks/useTouchGestures";
import { BackgroundVideo } from "@/components/Hero/BackgroundVideo";
import { DecorativeOverlays } from "@/components/Hero/DecorativeOverlays";
import { SlideContent } from "@/components/Hero/SlideContent";
import { CarouselIndicators } from "@/components/Hero/CarouselIndicators";
import { logger } from "@/lib/logger";

// Datos de los slides del carrusel
const slides = [
  {
    title: "Shrinkwrap for Marine Refits",
    description:
      "Scafwrap work closely with yacht captains and Auckland shipyards, supplying weatherproof shrinkwrapping solutions for boats, yachts and all marine refits.",
    buttonText: "MORE INFO",
    buttonLink: "marine",
  },
  {
    title: "Shrinkwrap for Construction",
    description:
      "Scafwrap provide shrinkwrap solutions for large construction & scaffolding companies, small builders and home owners on all types of building projects.",
    buttonText: "MORE INFO",
    buttonLink: "construction",
  },
  {
    title: "Shrinkwrap for Reclads",
    description:
      "Scafwrap provide a unique, full encapsulation shrinkwrap solution for weatherproofing leaky homes and all types of building reclads.",
    buttonText: "MORE INFO",
    buttonLink: "reclads",
  },
  {
    title: "Shrinkwrap for Recycling",
    description:
      "Scafwrap actively work with a local recycling facility in Auckland to recycle our Shrinkwrap.",
    buttonText: "MORE INFO",
    buttonLink: "recycling",
  },
] as const;

export default function Hero() {
  // Hook personalizado para manejar el carrusel
  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    handleMouseEnter,
    handleMouseLeave
  } = useCarousel({
    totalSlides: slides.length,
    autoPlayInterval: 5000,
    pauseOnHover: false
  });

  // Hook para gestos táctiles en mobile
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useTouchGestures({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 50
  });

  // Manejar carga del video
  const handleVideoLoad = () => {
    logger.info('Hero section video loaded successfully');
  };

  // Manejar errores del video
  const handleVideoError = () => {
    logger.warn('Hero section video failed to load, using fallback content');
  };

  return (
    <section 
      className="relative w-full sm:h-[85vh] lg:h-[90vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video de fondo optimizado */}
      <BackgroundVideo
        src="/video/videohome.MP4"
        poster="/images/hero/Marine.jpg"
        onVideoLoad={handleVideoLoad}
        onVideoError={handleVideoError}
      />

      {/* Overlays decorativos - Solo en desktop */}
      <DecorativeOverlays />

      {/* Overlay oscuro mejorado para mejor legibilidad - Reducido en mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent sm:from-black/60 sm:via-black/20 sm:bg-black/40 lg:bg-black/30 z-10 transition-opacity duration-700" />

      {/* Contenido del carrusel de descripciones - Mejorado para mobile y desktop */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end z-20 px-4 pb-20 sm:pb-12 sm:px-6 sm:bottom-8 sm:left-4 sm:right-auto sm:items-start lg:bottom-20 lg:right-20 lg:left-auto lg:items-end lg:px-8">
        <div className="relative w-full max-w-lg sm:max-w-md lg:max-w-2xl xl:max-w-3xl">
          <SlideContent
            slide={slides[currentSlide]}
            isActive={true}
          />
        </div>
      </div>

      {/* Indicadores del carrusel mejorados */}
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselIndicators
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
          className="bottom-2 sm:bottom-4 lg:bottom-8"
        />
      </div>
      {/* Estilos globales mejorados para el componente Hero */}
      <style jsx global>{`
        .clip-top-left-triangle {
          clip-path: polygon(0 0, 100% 0, 0 100%);
          filter: drop-shadow(0 4px 12px rgba(34, 211, 238, 0.4));
        }
        .clip-bottom-right-triangle {
          clip-path: polygon(100% 100%, 100% 0, 0 100%);
          filter: drop-shadow(0 -4px 12px rgba(34, 211, 238, 0.4));
        }
        
        /* Optimizaciones para video de fondo */
        video {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Animaciones mejoradas para slides de texto */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Mejoras específicas para mobile */
        @media (max-width: 640px) {
          video {
            object-position: center center;
          }
          
          .animate-fade-in-up {
            animation-duration: 0.6s;
          }
          
          /* Mejorar touch targets */
          button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Mejorar legibilidad del texto */
          h1 {
            text-shadow: 0 2px 8px rgba(0,0,0,0.8);
          }
          
          p {
            text-shadow: 0 1px 4px rgba(0,0,0,0.7);
          }
          
          /* Evitar problemas con viewport height */
          section {
            min-height: 100vh;
            min-height: 100dvh; /* Dynamic viewport height para iOS */
          }
        }
        
        /* Optimizaciones para tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          video {
            object-position: center center;
          }
          
          /* Mejorar spacing en tablets */
          section {
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
        
        /* Optimizaciones para desktop */
        @media (min-width: 1025px) {
          video {
            object-position: right center;
          }
          
          .animate-fade-in-up {
            animation-duration: 1s;
          }
        }
        
        /* Mejoras de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
          
          .animate-pulse-slow {
            animation: none;
            opacity: 0.6;
          }
        }
        
        /* Optimizaciones para conexiones lentas */
        @media (prefers-reduced-data: reduce) {
          video {
            display: none;
          }
          
          .animate-pulse-slow {
            animation: none;
            opacity: 0.7;
          }
        }
        
        /* Mejoras para modo oscuro */
        @media (prefers-color-scheme: dark) {
          .animate-fade-in-up {
            animation-duration: 0.7s;
          }
        }
      `}</style>
    </section>
  );
}
