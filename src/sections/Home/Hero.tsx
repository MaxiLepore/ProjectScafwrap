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
    eyebrow: "Marine Refits",
    title: "Shrinkwrap for Marine Refits",
    description:
      "Scafwrap work closely with yacht captains and Auckland shipyards, supplying weatherproof shrinkwrapping solutions for boats, yachts and all marine refits.",
    buttonText: "MORE INFO",
    buttonLink: "marine",
  },
  {
    eyebrow: "Construction & Scaffolding",
    title: "Shrinkwrap for Construction",
    description:
      "Scafwrap provide shrinkwrap solutions for large construction & scaffolding companies, small builders and home owners on all types of building projects.",
    buttonText: "MORE INFO",
    buttonLink: "construction",
  },
  {
    eyebrow: "Building Reclads",
    title: "Shrinkwrap for Reclads",
    description:
      "Scafwrap provide a unique, full encapsulation shrinkwrap solution for weatherproofing leaky homes and all types of building reclads.",
    buttonText: "MORE INFO",
    buttonLink: "reclads",
  },
  {
    eyebrow: "Sustainability",
    title: "Shrinkwrap for Recycling",
    description:
      "Scafwrap actively work with a local recycling facility in Auckland to recycle our Shrinkwrap.",
    buttonText: "MORE INFO",
    buttonLink: "recycling",
  },
] as const;

// Hoisted handlers — only log, no dependency on component state
const handleVideoLoad = () => {
  logger.info('Hero section video loaded successfully');
};

const handleVideoError = () => {
  logger.warn('Hero section video failed to load, using fallback content');
};

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
    pauseOnHover: true
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

  return (
    <section
      className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video de fondo optimizado */}
      <BackgroundVideo
        src="/video/videohome.mp4"
        onVideoLoad={handleVideoLoad}
        onVideoError={handleVideoError}
      />

      {/* Overlays decorativos - Solo en desktop */}
      <DecorativeOverlays />

      {/* Scrim de fondo — fuerte en mobile para legibilidad sobre cualquier frame del video */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-transparent sm:from-black/60 sm:via-black/20 sm:to-transparent sm:bg-black/40 lg:bg-black/30" />

      {/* Contenido del carrusel de descripciones - Mejorado para mobile y desktop */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-end z-20 px-5 pb-28 sm:pb-12 sm:px-6 sm:bottom-8 sm:left-4 sm:right-auto sm:items-start lg:bottom-20 lg:right-20 lg:left-auto lg:items-end lg:px-8">
        <div className="relative w-full max-w-lg sm:max-w-md lg:max-w-2xl xl:max-w-3xl">
          <SlideContent
            slide={slides[currentSlide]}
            isActive={true}
          />
        </div>
      </div>

      {/* Indicadores del carrusel mejorados */}
      <CarouselIndicators
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
        className="bottom-6 sm:bottom-6 lg:bottom-8"
      />
    </section>
  );
}
