// src/lib/performance/ImageOptimizer.ts
export class ImageOptimizer {
  private static instance: ImageOptimizer;
  
  private constructor() {}
  
  public static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }
  
  // Single Responsibility: Solo optimiza imágenes
  public getOptimizedImageProps(src: string, alt: string, priority = false) {
    return {
      src,
      alt,
      fill: true,
      sizes: this.getResponsiveSizes(),
      priority,
      quality: 85,
      placeholder: 'blur' as const,
      blurDataURL: this.generateBlurDataURL(),
      loading: priority ? 'eager' as const : 'lazy' as const
    };
  }
  
  private getResponsiveSizes(): string {
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw";
  }
  
  private generateBlurDataURL(): string {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
  }
}

// Singleton para reutilizar configuración
