// src/hooks/usePerformanceOptimization.ts
"use client";

import { useEffect, useCallback } from 'react';

interface PerformanceConfig {
  enableImageLazyLoading?: boolean;
  preloadCriticalImages?: boolean;
  optimizeScrollPerformance?: boolean;
}

// Interface Segregation: Solo lo que necesitas
export const usePerformanceOptimization = (config: PerformanceConfig = {}) => {
  const {
    enableImageLazyLoading = true,
    preloadCriticalImages = true,
    optimizeScrollPerformance = true
  } = config;

  // Lazy loading de imágenes no críticas
  const observeImages = useCallback(() => {
    if (!enableImageLazyLoading || typeof window === 'undefined') return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    // Observar imágenes con data-src
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });

    return () => imageObserver.disconnect();
  }, [enableImageLazyLoading]);

  // Preload de recursos críticos
  const preloadCriticalResources = useCallback(() => {
    if (!preloadCriticalImages || typeof window === 'undefined') return;

    const criticalImages = [
      '/images/marine.jpg',
      '/images/construction.jpg',
      '/images/PequeLogo.png'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [preloadCriticalImages]);

  // Optimización de scroll
  const optimizeScroll = useCallback(() => {
    if (!optimizeScrollPerformance || typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Lógica de scroll optimizada
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [optimizeScrollPerformance]);

  useEffect(() => {
    const cleanup1 = observeImages();
    const cleanup2 = optimizeScroll();
    preloadCriticalResources();

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, [observeImages, optimizeScroll, preloadCriticalResources]);

  return {
    observeImages,
    preloadCriticalResources,
    optimizeScroll
  };
};
