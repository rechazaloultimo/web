# 🔧 GUÍA TÉCNICA DE IMPLEMENTACIÓN

---

## FASE 1: CAMBIOS CRÍTICOS (Debe hacer primero)

### 1.1 FIX: Footer fuera de `<body>` en MainQuizzes.astro

**Archivo:** `src/layouts/MainQuizzes.astro`  
**Línea actual:** 68

**ANTES:**

```astro
<Footer />
```

**DESPUÉS:**

```astro
<Footer />
```

**Por qué:** El Footer debe estar dentro del `<body>` para HTML válido.

---

### 1.2 DELETE: NavGeneral.astro (Completamente redundante)

**Archivo a eliminar:** `src/components/Navegadores/NavGeneral.astro`

**Contenido actual:**

```astro
---
import Navbar from "@/components/Navegadores/Navbar.astro";
---

<Navbar />
```

**Verificación previa:**

```bash
# Buscar si se importa en algún lado
grep -r "NavGeneral" src/
# Resultado esperado: Ninguno
```

**Acción:** Eliminar archivo directamente.

---

### 1.3 CREAR: `src/types/layout.ts` (Tipos compartidos)

**Nuevo archivo:** `src/types/layout.ts`

```typescript
/**
 * Tipos compartidos para layouts
 */

export interface LayoutProps {
  title: string;
  description: string;
  ogImage?: string;
  author?: string;
  // Nota: canonicalUrl se calcula automáticamente
  // Nota: keywords y lang no están implementados actualmente
}
```

**Razón:** Centralizar interface que actualmente está duplicada en MainLayout y MainQuizzes.

---

### 1.4 CREAR: `src/layouts/BaseLayout.astro` (Layout compartido)

**Nuevo archivo:** `src/layouts/BaseLayout.astro`

```astro
---
import type { LayoutProps } from "@/types/layout";
import Footer from "@/components/Footer.astro";
import "@/styles/main.css";
import "@/styles/nav.css";
import "@/styles/multimedia.css";
import "@/styles/hero.css";

type Props = LayoutProps;

const { title, description, ogImage } = Astro.props;
const canonicalURL = "https://rodrigopizarro.com.ar" + Astro.url.pathname;
const defaultOgImage = "https://rodrigopizarro.com.ar/img-mias/001.jpg";
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>{title}</title>
    <meta name="description" content={description} />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    <link rel="canonical" href={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage ?? defaultOgImage} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />

    <script
      type="application/ld+json"
      set:html={`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rodrigo Pizarro",
        "description": "${description}",
        "url": "${canonicalURL}"
      }
    `}
    />

    <slot name="extra-head" />
  </head>

  <body class="rice-paper-bg flex flex-col min-h-screen">
    <main>
      <slot />
    </main>

    <Footer />

    <!-- Scripts base (todos los layouts) -->
    <script>
      import "../js/animations.js";
      import "../js/main.js"; // Incluye global + theme-toggle
      import "../js/navigation.js";
    </script>

    <!-- Slot para scripts adicionales (ej: quizzes, galerías) -->
    <slot name="extra-scripts" />
  </body>
</html>
```

---

### 1.5 REFACTOR: `src/layouts/MainLayout.astro` (Hereda BaseLayout)

**Archivo:** `src/layouts/MainLayout.astro` (ACTUALIZAR)

```astro
---
import BaseLayout from "./BaseLayout.astro";
import type { LayoutProps } from "@/types/layout";

type Props = LayoutProps;

const { title, description, ogImage } = Astro.props;
---

<BaseLayout title={title} description={description} ogImage={ogImage}>
  <slot />

  <!-- Scripts adicionales para esta layout -->
  <script slot="extra-scripts">
    import "../js/photoswipe-init.js";
    import "../js/hero-preload.js";
  </script>
</BaseLayout>
```

**Cambios:**

- ❌ Eliminar: Todo el HTML/head/body (ahora en BaseLayout)
- ✅ Mantener: Interface Props
- ✅ Usar: Slots para scripts adicionales

---

### 1.6 REFACTOR: `src/layouts/MainQuizzes.astro` (Hereda BaseLayout)

**Archivo:** `src/layouts/MainQuizzes.astro` (ACTUALIZAR)

```astro
---
import BaseLayout from "./BaseLayout.astro";
import type { LayoutProps } from "@/types/layout";

type Props = LayoutProps;

const { title, description, ogImage } = Astro.props;
---

<BaseLayout title={title} description={description} ogImage={ogImage}>
  <slot />

  <!-- Scripts y estilos específicos para quizzes -->
  <script slot="extra-scripts">
    import "../js/photoswipe-init.js";
    import "../js/estaticas.js";
  </script>
</BaseLayout>
```

**Extra en <head> si es necesario:**

```astro
<fragment slot="extra-head">
  <!-- Si necesitas algo específico -->
</fragment>
```

---

### 1.7 CONSOLIDAR: `src/styles/quiz.css` (Fusión de 2 archivos)

**Archivos a consolidar:**

- `src/styles/quiz-engine.css` (DELETE después)
- `src/styles/quizzes.css` (DELETE después)

**Nuevo archivo:** `src/styles/quiz.css`

```css
/* ========================================
   QUIZ.CSS - Estilos consolidados de Quiz
   ======================================== */

/* ========================================= */
/* VARIABLES DE TEMA (Luz / Oscuridad)       */
/* ========================================= */

:root {
  /* Modo Luz (Default) */
  --quiz-bg-main: #ffffff;
  --quiz-bg-header: #f6f3e4; /* Beige pergamino */
  --quiz-bg-secondary: #fafafa;
  --quiz-text-title: #1a1a1a;
  --quiz-text-body: #333333;
  --quiz-text-muted: #6b7280;
  --quiz-border: #dee2e6;
  --quiz-accent: #b31010; /* Rojo Sello Chino */
  --quiz-success: #15803d;
  --quiz-shadow: rgba(0, 0, 0, 0.08);
  --quiz-opt-bg: #ffffff;
  --quiz-opt-hover: #fdfbf2;
  --quiz-error: #e74c3c;
}

body.dark-mode {
  --quiz-bg-main: #1e1e1e;
  --quiz-bg-header: #2a2a26;
  --quiz-bg-secondary: #252525;
  --quiz-text-title: #f3f4f6;
  --quiz-text-body: #e5e7eb;
  --quiz-text-muted: #9ca3af;
  --quiz-border: #374151;
  --quiz-shadow: rgba(0, 0, 0, 0.4);
  --quiz-opt-bg: #2d2d2d;
  --quiz-opt-hover: #353530;
}

/* === COMPONENTES DEL QUIZ === */

/* Tarjeta base del quiz */
.quiz-card {
  width: 100%;
  max-width: 100%;
  margin: 0;
  background-color: var(--quiz-bg-main);
  border: 1px solid var(--quiz-border);
  box-shadow: 0 10px 30px var(--quiz-shadow);
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* Header del quiz */
.quiz-header-custom {
  padding: 1rem;
  background-color: var(--quiz-bg-header);
  border-bottom: 1px solid var(--quiz-border);
  text-align: center;
}

.quiz-header-custom h1 {
  font-family: serif;
  font-size: 1rem;
  color: var(--quiz-text-title);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-top: 0.25rem;
  margin-bottom: 0;
}

.quiz-header-custom .sub {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--quiz-text-muted);
}

/* === CARDS MANUSCRITAS === */

.card-manuscript {
  background-color: var(--color-bg-card, #fbfbf9);
  border: 1px solid var(--color-border-subtle, #dee2e6);
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;
}

.quiz-card-link.is-active {
  border: 2px solid var(--color-chinese-seal-red, #b31010);
  background-color: var(--color-bg-section, #f6f3e4);
  margin-bottom: 2rem;
}

.quiz-card-link.is-active .active-badge {
  display: block !important;
  position: absolute;
  bottom: -24px;
  left: -2px;
  background-color: var(--color-chinese-seal-red, #b31010);
  color: #ffffff;
  padding: 4px 12px;
  font-size: 0.65rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 0;
  z-index: 20;
}

.active-badge {
  display: none;
}

.card-manuscript:hover {
  border: 2px solid var(--color-chinese-seal-red, #b31010);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

/* === OPCIONES DE RESPUESTA === */

.opt-btn {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: var(--quiz-opt-bg);
  border: 1px solid var(--quiz-border);
  border-radius: none;
  margin-bottom: 0.25rem;
  color: var(--quiz-text-body);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.opt-btn:hover:not(.is-locked) {
  border-color: var(--quiz-accent);
  background-color: var(--quiz-opt-hover);
  transform: translateY(-2px);
}

.opt-btn-indicator {
  min-width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--quiz-bg-secondary);
  border: 1px solid var(--quiz-border);
  margin-right: 1.2rem;
  font-family: monospace;
  font-weight: bold;
  font-size: 0.8rem;
  color: var(--quiz-text-muted);
}

/* Estados de respuesta */
.opt-btn.is-correct {
  border-color: var(--quiz-success) !important;
  background-color: rgba(21, 128, 61, 0.1) !important;
  color: var(--quiz-success) !important;
}

.opt-btn.is-incorrect {
  border-color: var(--quiz-accent) !important;
  background-color: rgba(179, 16, 16, 0.1) !important;
  color: var(--quiz-accent) !important;
}

/* === TIPOGRAFÍA ESPECIALIZADA === */

#quiz-engine-mount,
#quiz-engine-mount * {
  font-family: var(--font-title, Georgia, "Times New Roman", serif) !important;
}

#quiz-engine-mount .opt-btn-indicator,
#quiz-engine-mount .section-label,
#quiz-engine-mount .score-badge,
#quiz-engine-mount .incorrect-badge,
#quiz-engine-mount .unanswered-badge,
#quiz-engine-mount .start-btn-classic,
#quiz-engine-mount button {
  font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace) !important;
}

/* === PROGRESS Y TIMER === */

.progress-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.75rem;
  background-color: var(--quiz-bg-main);
  border-bottom: 1px solid var(--quiz-border);
  gap: 1rem;
}

.score-badge,
.incorrect-badge,
.unanswered-badge {
  padding: 0.4rem 1rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: #ffffff;
}

.score-badge {
  background-color: var(--quiz-success);
}
.incorrect-badge {
  background-color: var(--quiz-accent);
}
.unanswered-badge {
  background-color: #6b7280;
}

.timer-container {
  width: 100%;
  height: 5px;
  background-color: var(--quiz-border);
}

.timer-bar {
  height: 100%;
  background-color: var(--quiz-accent);
  transition: width 1s linear;
}

/* === PREGUNTAS === */

.question-body {
  padding: 2rem 1rem;
}

.question-text {
  font-family: serif;
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--quiz-text-title);
  margin-bottom: 2.5rem;
  border-left: 6px solid var(--quiz-accent);
  padding-left: 1.25rem;
}

.options-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .options-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* === UTILIDADES === */

.setup-group {
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
}

.setup-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #b31010;
  margin-bottom: 1rem;
}

.radio-stack {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.radio-option {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: background 0.2s;
}

.radio-option input[type="radio"] {
  margin-top: 0.3rem;
  accent-color: #b31010;
  width: 18px;
  height: 18px;
}

.radio-text strong {
  display: block;
  font-size: 0.95rem;
  font-family: serif;
}

.radio-text span {
  font-size: 0.8rem;
  color: #666;
}

.btn-primary-chinese {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 1.2rem;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary-chinese:hover {
  background: #b31010;
}

/* === SCROLL SUAVE === */

html {
  scroll-behavior: smooth;
}

.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
```

**Verificación:** Buscar todas las clases `.quiz-` y `.card-` en HTML para asegurar que están aquí.

---

## FASE 2: CREAR UTILIDADES CSS

### 2.1 CREAR: `src/styles/utilities.css`

**Nuevo archivo:** `src/styles/utilities.css`

```css
/* ========================================
   UTILITIES.CSS - Clases Reutilizables
   ======================================== */

/* === HEADINGS === */

.section-heading-xl {
  @apply font-title text-4xl md:text-5xl text-title-ink mb-12 text-center;
}

.section-heading-lg {
  @apply font-title text-3xl md:text-4xl text-title-ink mb-8 text-center;
}

.section-heading-md {
  @apply font-title text-lg md:text-2xl text-title-ink;
}

/* === PROSE / PÁRRAFOS === */

.prose-standard {
  @apply text-lg text-ink mb-4 leading-relaxed;
}

.prose-large {
  @apply text-xl text-ink leading-relaxed;
}

.prose-small {
  @apply text-sm text-text-secondary;
}

/* === CONTENEDORES === */

.page-section-container {
  @apply px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12;
}

.page-section-container--narrow {
  @apply px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-4xl mx-auto;
}

.page-section-container--wide {
  @apply px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-6xl mx-auto;
}

/* === SECCIONES CON ANIMACIÓN === */

.fade-in-section {
  @apply mb-16 md:mb-20 fade-in;
}

.fade-in-section-container {
  @apply mb-16 md:mb-20 fade-in container mx-auto px-6;
}

/* === GALERÍAS === */

.gallery-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6;
}

.gallery-grid--sm {
  @apply grid grid-cols-2 md:grid-cols-3 gap-4;
}

.gallery-grid--lg {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

/* === CARDS E IMÁGENES === */

.card-image {
  @apply rounded-none shadow-xl w-full aspect-[4/5] border-2 p-1 object-cover;
}

.card-hover {
  @apply transition-all duration-300 hover:shadow-2xl;
}

/* === BORDERS Y ACCENTS === */

.accent-border-left {
  @apply border-l-4 border-chinese-seal-red pl-4;
}

.accent-border-top {
  @apply border-t-4 border-chinese-seal-red;
}

/* === CONTENEDORES CENTRADOS === */

.container-centered {
  @apply max-w-5xl mx-auto px-6;
}

.container-centered--narrow {
  @apply max-w-3xl mx-auto px-6;
}

/* === FLEXBOX COMUNES === */

.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex items-center justify-between;
}

.flex-col-center {
  @apply flex flex-col items-center justify-center;
}
```

**Importar en MainLayout:**

```astro
import "@/styles/utilities.css"; // AGREGAR esta línea
```

---

## FASE 3: CREAR COMPONENTE REUTILIZABLE

### 3.1 CREAR: `src/components/ClassesSection.astro`

**Nuevo archivo:** `src/components/ClassesSection.astro`

```astro
---
/**
 * Componente reutilizable para secciones de clases
 * Uso: Grupales, Particulares, Virtuales
 */

import CardGaleria from "@/components/galerias/CardGaleria.astro";
import type { ImageMetadata } from "astro";

interface GalleryImage {
  imgPath: string;
  altText: string;
  width: number;
  height: number;
}

interface Props {
  type: "grupales" | "particulares" | "virtuales";
  title: string;
  contentId: string;
  galleryId: string;
  galleryImages: GalleryImage[];
  galleryGridClass?: string;
}

const {
  type,
  title,
  contentId,
  galleryId,
  galleryImages,
  galleryGridClass = "gallery-grid",
} = Astro.props;
---

<main id={`info-${type}-content`} class="page-section-container">
  <!-- Sección de introducción -->
  <section id={contentId} class="fade-in-section">
    <h2 class="section-heading-xl">
      {title}
    </h2>

    <!-- Contenido inyectado via slot -->
    <slot name="intro" />
  </section>

  <!-- Galería -->
  <article id={galleryId} class="fade-in-section-container">
    <div class={`pswp-gallery-container ${galleryGridClass}`}>
      {
        galleryImages.map((img) => (
          <CardGaleria
            imgPath={img.imgPath}
            altText={img.altText}
            width={img.width}
            height={img.height}
          />
        ))
      }
    </div>
  </article>
</main>
```

---

### 3.2 REFACTOR: `src/components/ClasesGrupales.astro`

**Archivo:** `src/components/ClasesGrupales.astro` (REEMPLAZAR TODO)

```astro
---
import ClassesSection from "@/components/ClassesSection.astro";

const galleryImages = [
  {
    imgPath: "chuan (9).webp",
    altText: "Forma 42 de Tàijíquán - Combinación de las 5 Familias con la base Yang",
    width: 960,
    height: 1200,
  },
  {
    imgPath: "chuan (8).webp",
    altText: "Forma 42 de Tàijíquán - Combinación de las 5 Familias con la base Yang",
    width: 960,
    height: 1200,
  },
  {
    imgPath: "qigong (7).webp",
    altText: "El Ascenso del Dragón",
    width: 960,
    height: 1200,
  },
  // ... resto de imágenes
];
---

<ClassesSection
  type="grupales"
  title="Práctica Consciente y Transformadora"
  contentId="intro-contenido-clases"
  galleryId="galeria-chuan"
  galleryImages={galleryImages}
>
  <fragment slot="intro">
    <p class="prose-standard">
      Si buscás la motivación que surgen de practicar en conjunto, te invito a mis clases grupales
      de Tàijíquán y Qígōng...
    </p>
    <!-- Resto de párrafos con clase prose-standard -->
  </fragment>
</ClassesSection>
```

**Cambios clave:**

- ✅ Usar `ClassesSection` en lugar de HTML duplicado
- ✅ Todos los párrafos usan clase `.prose-standard`
- ✅ Imágenes en array separado
- ✅ Reducción de ~120 líneas

---

## CHECKLIST DE IMPLEMENTACIÓN (CON PASOS EXACTOS)

### ✅ Paso 1: Limpiar (5 minutos)

- [ ] Eliminar `src/components/Navegadores/NavGeneral.astro`
- [ ] Verificar que no hay imports

### ✅ Paso 2: Tipos (10 minutos)

- [ ] Crear `src/types/layout.ts` (copiar código arriba)

### ✅ Paso 3: Layouts Base (30 minutos)

- [ ] Crear `src/layouts/BaseLayout.astro`
- [ ] Actualizar `src/layouts/MainLayout.astro`
- [ ] Actualizar `src/layouts/MainQuizzes.astro`
- [ ] ✅ Test: `npm run dev` y verificar que no hay errores

### ✅ Paso 4: CSS (30 minutos)

- [ ] Crear `src/styles/quiz.css` (copiar contenido consolidado)
- [ ] Actualizar `src/layouts/MainQuizzes.astro` para importar quiz.css
- [ ] ❌ Eliminar `src/styles/quiz-engine.css`
- [ ] ❌ Eliminar `src/styles/quizzes.css`
- [ ] ✅ Test: verificar página de quizzes

### ✅ Paso 5: Utilities (15 minutos)

- [ ] Crear `src/styles/utilities.css`
- [ ] Importar en `src/layouts/BaseLayout.astro`
- [ ] ✅ Test: verificar estilos

### ✅ Paso 6: Componente Reutilizable (30 minutos)

- [ ] Crear `src/components/ClassesSection.astro`
- [ ] Refactor `ClasesGrupales.astro`
- [ ] ✅ Test: verificar página de clases grupales visualmente
- [ ] Refactor `ClasesParticulares.astro`
- [ ] ✅ Test: verificar página particulares
- [ ] Refactor `ClasesVirtuales.astro`
- [ ] ✅ Test: verificar página virtuales

### ✅ Paso 7: Aplicar Utilities (1-2 horas)

- [ ] Reemplazar clases Tailwind por utilities en Contacto.astro
- [ ] Reemplazar en Footer.astro
- [ ] Reemplazar en otros componentes
- [ ] ✅ Test: visual regression en todas las páginas

### ✅ Paso 8: Scripts (15 minutos - OPCIONAL)

- [ ] Consolidar `theme-toggle.js` en `main.js`
- [ ] Actualizar imports en BaseLayout
- [ ] ❌ Eliminar `src/js/theme-toggle.js`

### ✅ Paso 9: Final Testing

- [ ] ✅ Build: `npm run build`
- [ ] ✅ Visual: Revisar todas las páginas
- [ ] ✅ Validación: https://validator.w3.org
- [ ] ✅ Consola: Sin errores/warnings
- [ ] ✅ Dark mode: Funciona en todas las páginas
- [ ] ✅ Responsive: Mobile (320px), Tablet (768px), Desktop (1024px+)
- [ ] ✅ Interacción: Menús, galerías, formularios
- [ ] ✅ Links: Todos los enlaces funcionan

---

**Fin de guía técnica**
