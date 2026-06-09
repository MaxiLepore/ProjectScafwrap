import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de imágenes optimizadas
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimizaciones
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Tree-shake barrel imports for large packages
  experimental: {
    optimizePackageImports: ['framer-motion']
  },

  // Headers de seguridad y caching.
  async headers() {
    // Content-Security-Policy estática. La home es SSG (estática), así que un
    // nonce por-request es incompatible: el HTML cacheado no puede llevar el
    // nonce fresco de cada response. Permitimos los scripts inline que Next
    // inyecta para la hidratación vía 'unsafe-inline'. Los scripts propios se
    // sirven como archivos externos desde 'self' (/_next/static/...).
    // En dev, React usa eval() (Fast Refresh); solo ahí añadimos 'unsafe-eval'.
    const scriptSrc =
      process.env.NODE_ENV === "development"
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'";

    const csp = [
      "default-src 'self'",
      scriptSrc,
      // Tailwind / framer-motion inyectan estilos inline.
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "media-src 'self' blob: data:",
      // EmailJS API — el formulario de contacto envía desde el cliente.
      "connect-src 'self' https://api.emailjs.com",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "frame-src 'none'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains"
          },
        ],
      },
      {
        source: "/video/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
