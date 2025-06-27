// src/components/OptimizedImage.tsx
"use client";

import Image from "next/image";
import { ImageOptimizer } from "@/lib/performance/ImageOptimizer";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";

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
  containerClassName = "relative overflow-hidden"
}) => {
  // Usando el hook de optimización
  usePerformanceOptimization({
    enableImageLazyLoading: !priority,
    preloadCriticalImages: priority
  });

  // Usando el servicio de optimización (Singleton)
  const imageOptimizer = ImageOptimizer.getInstance();
  const imageProps = imageOptimizer.getOptimizedImageProps(src, alt, priority);

  return (
    <div className={containerClassName}>
      <Image
        {...imageProps}
        className={`transition-transform duration-300 hover:scale-105 ${className}`}
        onLoad={() => {
          // Callback cuando la imagen carga
          if (priority) {
            // Marcar como loaded para métricas de performance
            performance.mark(`image-loaded-${src}`);
          }
        }}
        onError={() => {
          console.warn(`Failed to load image: ${src}`);
        }}
      />
    </div>
  );
};
