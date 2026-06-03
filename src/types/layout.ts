/**
 * Tipos compartidos para layouts
 */

export interface LayoutProps {
  title: string;
  description: string;
  ogImage?: string;
  // Nota: canonicalUrl se calcula automáticamente desde Astro.url.pathname
}
