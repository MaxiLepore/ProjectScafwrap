// src/lib/seo/SEOService.ts
import { Metadata } from "next";

// Interface segregation - cada tipo de página tiene sus requisitos
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
}

// Open/Closed: Abierto para extensión, cerrado para modificación
export abstract class BaseSEOService {
  protected baseUrl = "https://scafwrap.co.nz";
  
  // Template method pattern
  public generateMetadata(config: SEOConfig, pagePath = ""): Metadata {
    return {
      title: this.buildTitle(config.title),
      description: config.description,
      keywords: config.keywords,
      openGraph: this.buildOpenGraph(config, pagePath),
      twitter: this.buildTwitterCard(config),
      alternates: {
        canonical: config.canonical || `${this.baseUrl}${pagePath}`
      }
    };
  }
  
  protected abstract buildTitle(title: string): string;
  
  protected buildOpenGraph(config: SEOConfig, path: string) {
    return {
      title: config.title,
      description: config.description,
      url: `${this.baseUrl}${path}`,
      images: config.images || []
    };
  }
  
  protected buildTwitterCard(config: SEOConfig) {
    return {
      card: "summary_large_image" as const,
      title: config.title,
      description: config.description
    };
  }
}

// Dependency Inversion: Implementaciones específicas
export class MarineSEOService extends BaseSEOService {
  protected buildTitle(title: string): string {
    return `${title} | Marine Shrink Wrap Auckland - ScafWrap NZ`;
  }
}

export class ConstructionSEOService extends BaseSEOService {
  protected buildTitle(title: string): string {
    return `${title} | Construction Scaffolding Wrap Auckland - ScafWrap NZ`;
  }
}

export class HomeSEOService extends BaseSEOService {
  protected buildTitle(title: string): string {
    return `${title} | Professional Shrink Wrap Services Auckland NZ`;
  }
}
