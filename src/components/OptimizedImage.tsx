// src/components/OptimizedImage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOptimizer } from "@/lib/performance/ImageOptimizer";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import { logger } from "@/lib/logger";

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

// Dependency Inversion: Depende de abstracciones, no implementaciones
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  className = "",
  containerClassName = "relative overflow-hidden",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Usando el hook de optimización
  usePerformanceOptimization({
    enableImageLazyLoading: !priority,
    preloadCriticalImages: priority,
  });

  // Usando el servicio de optimización (Singleton)
  const imageOptimizer = ImageOptimizer.getInstance();
  const imageProps = imageOptimizer.getOptimizedImageProps(src, alt, priority);

  const handleLoad = () => {
    setIsLoaded(true);
    logger.info("Image loaded successfully", { src, priority });
    if (priority) {
      // Marcar como loaded para métricas de performance
      logger.performanceMark(`image-loaded-${src}`);
      logger.performanceMeasure(
        `image-load-time-${src}`,
        `image-start-${src}`,
        `image-loaded-${src}`
      );
    }
  };

  const handleError = () => {
    setHasError(true);
    logger.error("Failed to load image", { src, priority });
  };

  const handleLoadingComplete = () => {
    // Callback adicional cuando la imagen está completamente cargada
    logger.performanceMark(`image-complete-${src}`);
    logger.info("Image loading completed", { src });
  };

  return (
    <div className={containerClassName}>
      <Image
        {...imageProps}
        className={`transition-all duration-300 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } hover:scale-105 ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        onLoadingComplete={handleLoadingComplete}
        alt={imageProps.alt || alt}
        style={{
          ...imageProps.style,
          // Agregar estilos de optimización
          willChange: isLoaded ? "auto" : "transform",
        }}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Error loading image</span>
        </div>
      )}
    </div>
  );
};
