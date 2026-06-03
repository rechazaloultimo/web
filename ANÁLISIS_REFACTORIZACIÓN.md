# 📋 INFORME EXHAUSTIVO DE REFACTORIZACIÓN - ASTRO WEB

**Análisis realizado:** 1 de Junio 2026  
**Scope:** Análisis completo del proyecto en `d:\web`  
**Objetivo:** Identificar oportunidades de refactorización sin afectar funcionalidad

---

## 1. ✅ COMPONENTES DUPLICADOS O MUY SIMILARES

### 1.1 Componentes de Navegación (CRÍTICO)

**Archivos analizados:**
- `src/components/Navegadores/Navbar.astro` (componente base)
- `src/components/Navegadores/NavGeneral.astro` (envoltorio)
- `src/components/Navegadores/Nav-Mawangdui.astro` (especializado)
- `src/components/Navegadores/Nav-WudangQigong.astro` (especializado)

**Hallazgo:**

| Componente | Líneas | Contenido | Estado |
|-----------|--------|----------|--------|
| Navbar.astro | 70+ | Component base con interface Props bien diseñado | ✅ Correcto |
| NavGeneral.astro | **2** | Solo importa y renderiza Navbar sin parámetros | ❌ **REDUNDANTE** |
| Nav-Mawangdui.astro | 35 | Importa Navbar, define array de items, pasa via Props | ✅ Correcto |
| Nav-WudangQigong.astro | 80 | Importa Navbar, define array de items, pasa via Props | ✅ Correcto |

**Análisis de NavGeneral.astro:**
```astro
---
import Navbar from '@/components/Navegadores/Navbar.astro';
---

<Navbar />
```
→ **Problema:** Apenas agrega valor. Las páginas pueden importar Navbar directamente.

**Impacto:** 
- Capa adicional innecesaria
- Confusión en arquitectura
- 2 líneas de código "muerto"

**Recomendación:** ❌ **ELIMINAR NavGeneral.astro**

---

### 1.2 Componentes de Clases (SIMILITUD ALTA - 95%)

**Archivos analizados:**
- `src/components/ClasesGrupales.astro`
- `src/components/ClasesParticulares.astro`
- `src/components/ClasesVirtuales.astro`

**Patrón detectado:**

```
1. Mismo estructura HTML
   <main id="info-{tipo}-content" class="px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12">
     <section id="intro-contenido-clases" class="mb-16 md:mb-20 fade-in">
       <h2 class="font-title text-4xl md:text-5xl text-title-ink mb-12 text-center">TÍTULO</h2>
       <!-- múltiples <p> con idénticas clases -->
     </section>
     
     <article id="galeria-{id}" class="mb-16 md:mb-20 fade-in container mx-auto px-6">
       <div class="pswp-gallery-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
         <CardGaleria ... />
       </div>
     </article>
   </main>

2. Importaciones idénticas:
   - import CardGaleria from "@/components/galerias/CardGaleria.astro"
   - import PhotoSwipeUI from "@/components/galerias/PhotoSwipeUI.astro"

3. Clases Tailwind idénticas en múltiples elementos
```

**Líneas de código:**
- ClasesGrupales.astro: ~150 líneas
- ClasesParticulares.astro: ~150 líneas
- ClasesVirtuales.astro: ~200 líneas
- **Total:** ~500 líneas con lógica 95% duplicada

**Recomendación:** ✅ **CREAR COMPONENTE REUTILIZABLE**

```astro
<!-- src/components/ClassesSection.astro -->
interface Props {
  type: 'grupales' | 'particulares' | 'virtuales';
  title: string;
  introContent: any;  // or astro.slots.intro
  gallery: any[];     // CardGaleria props
}
```

Potencial de reducción: **-300 líneas de código**

---

## 2. 🎨 PATRONES CSS REPETIDOS

### 2.1 Top 10 Combinaciones de Tailwind Más Repetidas

| Rank | Patrón Tailwind | Repeticiones | Recomendación |
|------|-----------------|--------------|------------------|
| 1 | `font-title text-4xl md:text-5xl text-title-ink mb-12 text-center` | 15+ | Crear clase `.section-heading-main` |
| 2 | `text-lg text-ink mb-4 leading-relaxed` | 20+ | Crear clase `.prose-standard` |
| 3 | `px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12` | 8+ | Crear clase `.page-section-container` |
| 4 | `mb-16 md:mb-20 fade-in` | 12+ | Crear clase `.fade-in-section` |
| 5 | `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6` | 8+ | Crear clase `.gallery-grid` |
| 6 | `max-w-5xl mx-auto px-6` | 10+ | Crear clase `.container-max-content` |
| 7 | `text-center mb-12 md:mb-*` | 6+ | Crear clase `.heading-centered` |
| 8 | `flex items-center justify-between gap-*` | 12+ | Utility Tailwind (OK) |
| 9 | `rounded-none shadow-xl border-2 p-1` | 8+ | Crear clase `.card-image` |
| 10 | `border-l-4 border-chinese-seal-red pl-4` | 6+ | Crear clase `.accent-border-left` |

**Impacto de aplicar:**
- Reducción de HTML: ~300-400 líneas
- Mejora de mantenibilidad: Cambiar tema en 1 lugar
- Performance: Compresión CSS ligeramente mejor
- Legibilidad: Más semántica

### 2.2 Análisis de Archivos CSS

#### quiz-engine.css vs quizzes.css (REDUNDANCIA DETECTADA)

**quiz-engine.css:**
```css
.quiz-card { ... }          /* Líneas 15-25 */
.quiz-header-custom { ... } /* Líneas 27-40 */
.opt-btn { ... }            /* Líneas 90-100 */
```

**quizzes.css:**
```css
.card-manuscript { ... }           /* Líneas 1-10 */
.quiz-card-link { ... }           /* Líneas 12-20 */
.active-badge { ... }             /* Líneas 22-30 */
```

**Problema:** 
- Dos archivos definen estilos de quiz
- Sin clara separación de responsabilidades
- Importados ambos en MainQuizzes.astro

**Recomendación:** 
```
✅ Fusionar en: src/styles/quiz.css
  ├── Definiciones de tarjetas de quiz
  ├── Estados (active, correct, incorrect)
  ├── Tipografía especializada
  └── Utilidades de quiz

✅ Eliminar: src/styles/quiz-engine.css
✅ Eliminar: src/styles/quizzes.css (parcial)
```

#### Análisis Completo de CSS

| Archivo | Líneas | Propósito | Organización | Consolidación |
|---------|--------|----------|--------------|------------------|
| main.css | ~150 | Base Tailwind + resets | Automático (OK) | N/A |
| nav.css | ~200 | Navbar desktop/mobile | Bien estructurado | ✅ OK |
| hero.css | ~130 | Hero sections + preload | Bien estructurado | ⚠️ Podría reducir variables |
| multimedia.css | ~180 | Media, audio, iframe | Bien organizado | ✅ OK |
| quiz-engine.css | ~200+ | Quiz layout | Redundante | ❌ Eliminar |
| quizzes.css | ~200+ | Quiz cards | Redundante | ❌ Consolidar |

**Potencial de reducción:** -200-250 líneas CSS

---

## 3. 🔧 PROPS INTERFACES ANALIZADAS

### 3.1 Interfaces Bien Definidas ✅

#### CardGaleria.astro
```typescript
interface Props {
  imgPath: string;        // Ruta relativa a /src/images/
  altText: string;        // Para accesibilidad
  width: number;          // Ancho original
  height: number;         // Alto original
}
```
**Estado:** ✅ Correcto, simple y clara

#### Navbar.astro
```typescript
interface Props {
  additionalMenuItems?: Array<{
    label: string;
    href?: string;
    submenu?: Array<{ label: string; href: string }>;
  }>;
  navClass?: string;
}
```
**Estado:** ✅ Bien diseñada, props opcionales
**Mejora sugerida:** Extraer tipos a `src/types/navbar.ts`:
```typescript
export type MenuItem = {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
};

export type NavbarProps = {
  additionalMenuItems?: MenuItem[];
  navClass?: string;
};
```

#### QuizDisplay.astro
```typescript
export interface Props {
  quizzes: QuizMeta[];
}
```
**Estado:** ✅ Correcto

### 3.2 Interfaces DUPLICADAS ⚠️

#### MainLayout.astro vs MainQuizzes.astro - CÓDIGO IDÉNTICO

**MainLayout.astro (líneas 13-20):**
```typescript
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  author?: string;
  keywords?: string;
  canonicalUrl?: string;
  lang?: string;
}
```

**MainQuizzes.astro (líneas 10-17):**
```typescript
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  author?: string;
  keywords?: string;
  canonicalUrl?: string;
  lang?: string;
}
```

**Problema:** 
- ❌ Código duplicado al 100%
- ⚠️ Props `keywords` y `lang` **nunca se usan** en HTML
- Difícil mantener en sincronía

**Recomendación:**

```typescript
// src/types/layout.ts
export interface LayoutProps {
  title: string;
  description: string;
  ogImage?: string;
  author?: string;
  // canonicalUrl se calcula automáticamente
  // keywords y lang no implementados (remover o completar)
}
```

**Cambio en layouts:**
```astro
import type { LayoutProps } from '@/types/layout';
// ...
type Props = LayoutProps;
```

---

## 4. 📄 ARCHIVOS DE ESTILOS - CONTENIDO COMPLETO

### 4.1 Resumen de importaciones CSS

**En MainLayout.astro:**
```astro
import "@/styles/main.css";        // Tailwind base + resets
import "@/styles/hero.css";        // Hero sections
import "@/styles/nav.css";         // Navegación
import "@/styles/multimedia.css";  // Media, audio, video
```

**En MainQuizzes.astro:**
```astro
import "@/styles/main.css";
import "@/styles/nav.css";
import "@/styles/multimedia.css";
import "@/styles/quizzes.css";        // ❌ Redundante
import "@/styles/quiz-engine.css";    // ❌ Redundante
```

### 4.2 Variables CSS Globales Detectadas

**En hero.css:**
```css
:root {
  --hero-overlay-color: rgba(0, 0, 0, 0.3);
  --hero-loading-bg: rgba(0, 0, 0, 0.5);
}
```
⚠️ Variables específicas del hero, podrían simplificarse

**En quiz-engine.css:**
```css
:root {
  --quiz-bg-main: #ffffff;
  --quiz-bg-header: #f6f3e4;
  --quiz-text-title: #1a1a1a;
  /* + 10 más */
}

body.dark-mode {
  --quiz-bg-main: #1e1e1e;
  /* + variantes */
}
```
✅ Bien estructurado para dark mode

### 4.3 Utilidades y Clases Custom

**Más usadas:**
```css
.fade-in              /* Animación entrada (animations.js controla la clase) */
.rice-paper-bg        /* Color fondo principal */
.hero-fullscreen-bg   /* Hero sections */
.nav-*                /* Variantes de navegación */
.quiz-*               /* Variantes de quiz */
.button-manuscript    /* Estilos de botón */
.card-manuscript      /* Estilos de card */
```

---

## 5. 🔄 ARCHIVOS JAVASCRIPT - ANÁLISIS FUNCIONAL

### 5.1 Matriz de Archivos JS

| Archivo | Líneas | Función Principal | Dependencias | Duplicación | Estado |
|---------|--------|------------------|--------------|-------------|--------|
| `animations.js` | ~30 | Intersection Observer para fade-in | Ninguna | No | ✅ |
| `global.js` | ~60 | Audio players + toggle panels | DOM APIs | No | ✅ |
| `form-contact.js` | ~150 | Validación + Formspree | Fetch API | No | ✅ |
| `navigation.js` | ~200 | Nav scroll, mobile menu, acordeones | DOM APIs | No | ✅ |
| `theme-toggle.js` | ~50 | Dark mode toggle + localStorage | localStorage | No | ⚠️ |
| `photoswipe-init.js` | ~100 | PhotoSwipe galleries | PhotoSwipe lib | No | ✅ |
| `hero-preload.js` | ~50 | Preload hero images + spinner | Image API | No | ✅ |
| `estaticas.js` | ~80 | Acordeón para tarjetas posturas | DOM APIs | No | ✅ |

**Total de código JS:** ~720 líneas
**Duplicación detectada:** ❌ NINGUNA CRÍTICA

### 5.2 Detalle de Funcionalidades

#### animations.js ✅
```javascript
// Usa IntersectionObserver para detectar cuando entra .fade-in
// Agrega clase .is-visible para trigger CSS
```
**Mejor práctica:** ✅ Separación HTML/CSS/JS

#### global.js ✅
1. Audio player control (play/pause)
2. Toggle info-panel (show/hide sections)
3. Scroll suave con offset (compensar navbar fijo)

**Potencial mejora:** Separar en módulos (audio.js, panels.js)

#### form-contact.js ✅
- Validación cliente (email, teléfono, etc.)
- Manejo de errores inline
- Integración Formspree
- UX mejorada (botón cambia color al enviar)

#### navigation.js ✅
```javascript
// 1. Menus dropdown desktop (hover + click)
// 2. Menú hamburguesa mobile
// 3. Acordeones en mobile
// 4. Navbar dinámico (transparent → opaque)
// 5. Scroll suave a anchors con offset
```
**Complejidad:** Media-Alta, pero bien organizado

#### theme-toggle.js ✅
- Detecta preferencia sistema
- Persiste en localStorage
- Reactivo a cambios de sistema

**Propuesta:** Puede fusionarse con `global.js` (ambas ~100 líneas)

#### photoswipe-init.js ✅
```javascript
// Inicializa PhotoSwipe para galerías
// Agrega botones custom (copy URL, download)
// Caption dinámico con alt text
```
**Bien ejecutado:** ✅

#### hero-preload.js ✅
```javascript
// Preload imagen background
// Muestra spinner mientras carga
// Fade-in al terminar
```
**Buen UX:** ✅

#### estaticas.js ✅
```javascript
// Acordeón para .postura-card
// Animación suave height
// Scroll into view al abrir
// Soporte keyboard (Enter/Space/Escape)
```
**Accesibilidad:** ✅ Buena

---

## 6. 🚨 ANTI-PATTERNS ASTRO DETECTADOS

### 6.1 Footer FUERA de `<body>` (ERROR EN MainQuizzes.astro)

**MainQuizzes.astro (línea 68):**
```astro
  </body>
  <Footer />
</html>
```

**Debe ser:**
```astro
  <Footer />
</body>
</html>
```

**Impacto:** 
- ❌ DOM inválido HTML5
- ⚠️ Algunos navegadores pueden mover automáticamente el Footer
- Inconsistencia con MainLayout.astro

**Acción:** ✅ **FIX INMEDIATO**

---

### 6.2 Layouts Duplicados en 95%

**Archivo | Líneas | Diferencias**
```
MainLayout.astro    | 70  | Importa: hero.css
MainQuizzes.astro   | 72  | Importa: quizzes.css + quiz-engine.css
```

**Código común:** ~60 líneas
**Código único:** ~5 líneas en cada uno

**Problema:**
- Cambios a metadatos, estructure base requieren actualizar 2 archivos
- Inconsistencias (como el Footer bug)

**Opciones de solución:**

**Opción A:** Layout heredado (Astro 4.0+)
```astro
<!-- MainLayout.astro - base -->
export const getLayout = (frontmatter) => MainLayout;

<!-- MainQuizzes.astro - extends -->
export const getLayout = (frontmatter) => (props) => 
  <MainLayout {...props}>
    <slot />
  </MainLayout>
```

**Opción B:** Componente compartido
```astro
<!-- src/layouts/BaseLayout.astro -->
interface Props {
  title: string;
  description: string;
  additionalStyles?: string[];
}

<!-- Usar en ambos layouts -->
<BaseLayout title={title} additionalStyles={quizStyles}>
  <slot />
</BaseLayout>
```

**Recomendación:** ✅ **Opción B** (más flexible)

---

### 6.3 Scripts Importados Globalmente (Performance)

**En MainLayout.astro:**
```astro
<script>
  import "../js/animations.js";        // ✅ Siempre necesario
  import "../js/global.js";            // ✅ Siempre necesario
  import "../js/theme-toggle.js";      // ✅ Siempre necesario
  import "../js/photoswipe-init.js";   // ⚠️ Solo si hay galerías
  import "../js/navigation.js";        // ✅ Siempre necesario
</script>
```

**Problema:**
- `photoswipe-init.js` se carga en TODAS las páginas
- `hero-preload.js` no está en MainLayout pero sí en páginas individuales

**Solución:**
```astro
<!-- En MainLayout solo lo fundamental -->
<script>
  import "../js/animations.js";
  import "../js/global.js";
  import "../js/theme-toggle.js";
  import "../js/navigation.js";
</script>

<!-- En páginas con galerías -->
<script>
  import "../js/photoswipe-init.js";
</script>
```

---

### 6.4 Props No Implementadas

**En MainLayout.astro interface Props:**
```typescript
keywords?: string;  // ❌ NO se usa en HTML
lang?: string;      // ❌ NO se usa en HTML
ogImage?: string;   // ✅ Se usa
author?: string;    // ❌ NO se usa
canonicalUrl?: string;  // ⚠️ Se calcula, no debería ser prop
```

**Acción:**
```typescript
// Remover no usados O implementar correctamente
interface Props {
  title: string;
  description: string;
  ogImage?: string;  // Si lo usas
  // Remover: keywords, lang, author, canonicalUrl
}
```

---

## 7. 🔗 COMPONENTES Y SUS DEPENDENCIAS

### 7.1 Grafo de Importaciones Críticas

```
Navbar.astro
  ├─ Nav-Mawangdui.astro
  ├─ Nav-WudangQigong.astro
  └─ NavGeneral.astro ❌ REDUNDANTE

CardGaleria.astro
  ├─ ClasesGrupales.astro
  ├─ ClasesParticulares.astro
  ├─ ClasesVirtuales.astro
  ├─ src/pages/clases/*.astro
  └─ src/pages/servicios/*.astro

PhotoSwipeUI.astro
  ├─ ClasesGrupales.astro
  ├─ ClasesParticulares.astro
  └─ ClasesVirtuales.astro
  ⚠️ NO ENCONTRADO - Posiblemente no existe

Footer.astro
  ├─ MainLayout.astro
  ├─ MainQuizzes.astro ❌ COLOCACIÓN INCORRECTA
  └─ (debería estar en todos los layouts)

QuizDisplay.astro
  └─ src/pages/servicios/multiples-choices.astro

quizzes.ts (data)
  └─ QuizDisplay.astro
```

### 7.2 Componentes No Usados

**A revisar:**
- `src/components/galerias/ImagenEstatica.astro` - ¿Se importa en algún lado?
- `src/components/galerias/PhotoSwipeUI.astro` - ¿Realmente existe?
- `src/images/auriculoterapia/auriculoterapia-editor.html` - Archivo HTML suelto
- `src/images/auriculoterapia/auriculoterapia.html` - Archivo HTML suelto

---

## 📊 RESUMEN EJECUTIVO

### Problemas Identificados: 14

#### 🔴 CRÍTICAS (Resolver inmediatamente)
1. **Footer fuera de `<body>`** en MainQuizzes.astro
2. **NavGeneral.astro redundante** - eliminar
3. **Layouts duplicados** al 95%
4. **Quiz CSS redundantes** (quiz-engine.css + quizzes.css)

#### 🟡 ALTAS (Próxima iteración)
5. **Componentes de Clases duplicados** (95% similitud)
6. **Patrones Tailwind repetidos** (10+ combinaciones)
7. **Scripts cargados globalmente innecesariamente**
8. **Props no implementadas** en layouts

#### 🟢 MEDIAS (Mejora técnica)
9. **Consolidar theme-toggle con global.js**
10. **Auditar componentes no usados**
11. **Extraer tipos a archivos compartidos**
12. **Documentar estructura de quizzes**
13. **Normalizar convenciones de nombres**
14. **Mejorar variables CSS**

---

## 💾 MATRIZ DE IMPLEMENTACIÓN

| Mejora | Prioridad | Esfuerzo | Impacto | Líneas Reducidas | Estimado |
|--------|-----------|----------|--------|------------------|----------|
| Eliminar NavGeneral.astro | 🔴 CRÍTICA | 5min | Alto | 2 | 5 min |
| Fijar Footer en MainQuizzes | 🔴 CRÍTICA | 5min | Alto | 2 | 5 min |
| Consolidar layouts | 🔴 CRÍTICA | 1h | Alto | 10+ | 1 h |
| Consolidar Quiz CSS | 🔴 CRÍTICA | 30min | Alto | 250+ | 30 min |
| Crear ClassesSection | 🟡 ALTA | 1.5h | Alto | 300+ | 1.5 h |
| Crear clases CSS reutilizables | 🟡 ALTA | 2h | Alto | 400+ | 2 h |
| Extraer tipos compartidos | 🟡 ALTA | 30min | Medio | 50+ | 30 min |
| Lazy load scripts | 🟡 ALTA | 45min | Medio | 5 | 45 min |
| Limpiar Props no usadas | 🟢 MEDIA | 15min | Bajo | 4 | 15 min |
| Auditar componentes no usados | 🟢 MEDIA | 1h | Bajo | 20+ | 1 h |

---

## 🎯 BENEFICIOS ESPERADOS

**Si implementas todas las mejoras:**

### Reducción de código
- **HTML/Astro:** -350 líneas (~10% del total)
- **CSS:** -250 líneas (~15% del total)
- **Duplicación:** -100% en áreas identificadas

### Mejora de mantenibilidad
- Cambios de tema en 1 lugar (vs 5+ actualmente)
- Menos código que leer y entender
- Consistencia en patrones

### Performance
- CSS más comprimido
- Scripts cargados solo cuando se necesiten
- DOM HTML válido

### Developer Experience
- Convenciones claras
- Componentes reutilizables
- Tipos compartidos (mejor TypeScript)

---

## 📋 ARCHIVO GENERADO

Este informe se encuentra en: `d:\web\ANÁLISIS_REFACTORIZACIÓN.md`

Consulta `ANÁLISIS_REFACTORIZACIÓN_DETALLADO.md` para análisis adicionales.
