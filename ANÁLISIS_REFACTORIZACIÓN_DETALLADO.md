# 📊 ANÁLISIS DETALLADO PARTE 2 - PATRONES Y CÓDIGO

---

## 8. 🎯 PATRONES TAILWIND - ANÁLISIS PROFUNDO

### 8.1 Combinaciones Tailwind Top 20 (Más de 3 repeticiones)

#### Grupo 1: Headings (15+ usos)

```tailwind
font-title text-4xl md:text-5xl text-title-ink mb-12 text-center
font-title text-3xl md:text-4xl text-title-ink mb-8 text-center
font-title text-lg md:text-2xl text-title-ink
```

**Consolidación sugerida:**

```css
.section-heading-xl {
  @apply font-title text-4xl md:text-5xl text-title-ink mb-12 text-center;
}
.section-heading-lg {
  @apply font-title text-3xl md:text-4xl text-title-ink mb-8 text-center;
}
.section-heading-md {
  @apply font-title text-lg md:text-2xl text-title-ink;
}
```

#### Grupo 2: Párrafos (20+ usos)

```tailwind
text-lg text-ink mb-4 leading-relaxed
text-xl text-ink leading-relaxed
text-sm text-text-secondary
```

**Consolidación:**

```css
.prose-standard {
  @apply text-lg text-ink mb-4 leading-relaxed;
}
.prose-large {
  @apply text-xl text-ink leading-relaxed;
}
.prose-small {
  @apply text-sm text-text-secondary;
}
```

#### Grupo 3: Contenedores de página (8+ usos)

```tailwind
px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12
px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-4xl mx-auto
```

**Consolidación:**

```css
.page-section-container {
  @apply px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12;
}
.page-section-container--narrow {
  @apply px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-4xl mx-auto;
}
```

#### Grupo 4: Animaciones + spacing (12+ usos)

```tailwind
mb-16 md:mb-20 fade-in
mb-16 md:mb-20 fade-in container mx-auto px-6
```

**Consolidación:**

```css
.fade-in-section {
  @apply mb-16 md:mb-20 fade-in;
}
.fade-in-section-container {
  @apply mb-16 md:mb-20 fade-in container mx-auto px-6;
}
```

#### Grupo 5: Galerías grid (8+ usos con variantes)

```tailwind
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6
grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-4
grid grid-cols-1 md:grid-cols-2 gap-4 mt-2
```

**Consolidación:**

```css
.gallery-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6;
}
.gallery-grid--sm {
  @apply grid grid-cols-2 md:grid-cols-3 gap-4;
}
```

### 8.2 Oportunidades de Consolidación CSS

**Archivo recomendado: `src/styles/utilities.css`**

```css
/* ========================================
   UTILITIES Y COMPONENTES REUTILIZABLES
   ======================================== */

/* --- HEADINGS --- */
.section-heading-xl {
  @apply font-title text-4xl md:text-5xl text-title-ink mb-12 text-center;
}
.section-heading-lg {
  @apply font-title text-3xl md:text-4xl text-title-ink mb-8 text-center;
}

/* --- PROSE --- */
.prose-standard {
  @apply text-lg text-ink mb-4 leading-relaxed;
}
.prose-large {
  @apply text-xl text-ink leading-relaxed;
}

/* --- CONTAINERS --- */
.page-section-container {
  @apply px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12;
}

/* --- SECTIONS CON ANIMACIÓN --- */
.fade-in-section {
  @apply mb-16 md:mb-20 fade-in;
}

/* --- GALERÍAS --- */
.gallery-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6;
}

/* --- CARDS --- */
.card-image {
  @apply rounded-none shadow-xl w-full aspect-[4/5] border-2 p-1 object-cover;
}

/* --- BORDERS --- */
.accent-border-left {
  @apply border-l-4 border-chinese-seal-red pl-4;
}
```

**Impacto esperado:**

- Líneas HTML/Astro reducidas: 300-400
- CSS nuevas líneas: 50
- **Neto:** -250 líneas

---

## 9. 🔍 ANÁLISIS LÍNEA A LÍNEA - DUPLICACIÓN

### 9.1 ClasesGrupales vs ClasesParticulares - Comparación

**Línea 1-15 (Estructura HTML):**

```astro
<!-- ClasesGrupales.astro -->
<main id="info-grupales-content" class="px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12">
  <!-- ClasesParticulares.astro -->
  <main
    id="info-particulares-content"
    class="px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-5xl mx-auto mb-12"
  >
  </main>
</main>
```

**Única diferencia:** ID del contenedor

**Línea 16-20 (Sección intro):**

```astro
<!-- ClasesGrupales.astro -->
<section id="intro-contenido-clases" class="mb-16 md:mb-20 fade-in">
  <!-- ClasesParticulares.astro -->
  <section id="intro-contenido-clases" class="mb-16 md:mb-20 fade-in"></section>
</section>
```

**Duplicación:** 100% idéntico

**Línea 21-25 (Heading):**

```astro
<!-- ClasesGrupales.astro -->
<h2 class="font-title text-4xl md:text-5xl text-title-ink mb-12 text-center">
  Práctica Consciente y Transformadora
</h2>

<!-- ClasesParticulares.astro -->
<h2 class="font-title text-4xl md:text-5xl text-title-ink mb-12 text-center">
  Tus Clases Personalizadas y Particulares de Qígōng y Tàijíquán
</h2>
```

**Duplicación:** Estructura 100%, solo contenido diferente

**Proyección:** Patrón se repite 50+ veces en estos 3 archivos

---

## 10. 📝 ESPECIFICACIÓN DE COMPONENTE PROPUESTO

### 10.1 ClassesSection.astro (Nuevo Componente)

**Archivo:** `src/components/ClassesSection.astro`

```astro
---
import CardGaleria from "@/components/galerias/CardGaleria.astro";
import PhotoSwipeUI from "@/components/galerias/PhotoSwipeUI.astro";

interface Props {
  type: "grupales" | "particulares" | "virtuales";
  title: string;
  contentId: string; // Para la <section>
  galleryId: string; // Para la <article>
  galleryImages: Array<{
    imgPath: string;
    altText: string;
    width: number;
    height: number;
  }>;
  galleryGridClass?: string; // Para variantes grid
}

const {
  type,
  title,
  contentId,
  galleryId,
  galleryImages,
  galleryGridClass = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
} = Astro.props;
---

<main id={`info-${type}-content`} class="page-section-container">
  <section id={contentId} class="fade-in-section">
    <h2 class="section-heading-xl">
      {title}
    </h2>

    <!-- Slot para contenido personalizado -->
    <slot name="intro" />
  </section>

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

**Uso en ClasesGrupales.astro (después de refactor):**

```astro
---
import ClassesSection from "@/components/ClassesSection.astro";
---

<ClassesSection
  type="grupales"
  title="Práctica Consciente y Transformadora"
  contentId="intro-contenido-clases"
  galleryId="galeria-chuan"
  galleryImages={[
    { imgPath: "chuan (9).webp", altText: "...", width: 960, height: 1200 },
    // ...
  ]}
>
  <fragment slot="intro">
    <p class="prose-standard">Si buscás la motivación que surgen de practicar en conjunto...</p>
    <!-- más párrafos -->
  </fragment>
</ClassesSection>
```

**Reducción de líneas por archivo:**

- Antes: ~150 líneas
- Después: ~30 líneas (+ datos)
- **Reducción:** 120 líneas × 3 archivos = **360 líneas totales**

---

## 11. 🗂️ RESTRUCTURA DE DIRECTORIOS PROPUESTA

### Estructura Actual

```
src/
├── components/
│   ├── ClasesGrupales.astro
│   ├── ClasesParticulares.astro
│   ├── ClasesVirtuales.astro
│   ├── Contacto.astro
│   ├── Footer.astro
│   ├── Navegadores/
│   │   ├── Navbar.astro
│   │   ├── NavGeneral.astro ❌ REDUNDANTE
│   │   ├── Nav-Mawangdui.astro
│   │   └── Nav-WudangQigong.astro
│   ├── galerias/
│   │   ├── CardGaleria.astro
│   │   ├── ImagenEstatica.astro ❓ NO USADO
│   │   └── PhotoSwipeUI.astro ❓ NO ENCONTRADO
│   └── quizzes/
│       └── QuizDisplay.astro
├── layouts/
│   ├── MainLayout.astro
│   └── MainQuizzes.astro ⚠️ DUPLICADO
├── styles/
│   ├── main.css
│   ├── nav.css
│   ├── hero.css
│   ├── multimedia.css
│   ├── quiz-engine.css ❌ REDUNDANTE
│   ├── quizzes.css ❌ REDUNDANTE
│   └── (falta: utilities.css)
└── js/
    ├── animations.js ✅
    ├── global.js ✅
    ├── form-contact.js ✅
    ├── navigation.js ✅
    ├── theme-toggle.js ⚠️ FUSION SUGERIDA
    ├── photoswipe-init.js ✅
    ├── hero-preload.js ✅
    └── estaticas.js ✅
```

### Estructura Propuesta

```
src/
├── components/
│   ├── ClassesSection.astro ✨ NUEVO
│   ├── Contacto.astro
│   ├── Footer.astro
│   ├── Navigation/
│   │   ├── Navbar.astro
│   │   ├── Nav-Mawangdui.astro
│   │   └── Nav-WudangQigong.astro
│   ├── Gallery/
│   │   ├── CardGaleria.astro
│   │   └── PhotoSwipeUI.astro
│   └── Quiz/
│       └── QuizDisplay.astro
├── layouts/
│   ├── BaseLayout.astro ✨ NUEVO (compartido)
│   ├── MainLayout.astro (hereda BaseLayout)
│   └── MainQuizzes.astro (hereda BaseLayout)
├── styles/
│   ├── main.css
│   ├── nav.css
│   ├── hero.css
│   ├── multimedia.css
│   ├── quiz.css ✨ CONSOLIDADO
│   └── utilities.css ✨ NUEVO
├── types/ ✨ NUEVA CARPETA
│   ├── layout.ts
│   ├── navbar.ts
│   └── quiz.ts
└── js/
    ├── animations.js
    ├── main.js ✨ CONSOLIDADO (global + theme-toggle)
    ├── form-contact.js
    ├── navigation.js
    ├── photoswipe-init.js
    ├── hero-preload.js
    └── estaticas.js
```

**Cambios principales:**

1. ❌ Eliminar: NavGeneral.astro, quiz-engine.css, quizzes.css
2. ✨ Crear: ClassesSection.astro, BaseLayout.astro, utilities.css, types/
3. 📁 Renombrar/organizar: Carpetas más claras (Navigation/, Gallery/, Quiz/)
4. 🔗 Consolidar: theme-toggle.js → main.js

---

## 12. 🔐 VERIFICACIÓN DE DEPENDENCIAS

### 12.1 Impacto de cambios

#### Si eliminamos NavGeneral.astro:

```
Búsqueda: "from.*NavGeneral"
Resultado: NO ENCONTRADO en el proyecto
✅ Seguro eliminar
```

#### Si consolidamos MainLayout y MainQuizzes:

```
Imports de MainLayout:
  └─ src/pages/*.astro (algunas)

Imports de MainQuizzes:
  └─ src/pages/servicios/multiples-choices.astro

Con BaseLayout:
  ✅ Ambas heredan, cambios centralizados
```

#### Si eliminamos quiz-engine.css:

```
Imports:
  └─ MainQuizzes.astro (línea 7)

Clases usadas:
  └─ En src/pages/servicios/multiples-choices.astro

Solución:
  ✅ Consolidar en quiz.css
```

---

## 13. 📋 CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: CRÍTICA (2-3 horas)

- [ ] **T1.1** Fijar Footer en MainQuizzes.astro
  - Archivo: `src/layouts/MainQuizzes.astro`
  - Cambio: Mover `<Footer />` dentro de `<body>`
  - Tiempo: 5 min

- [ ] **T1.2** Eliminar NavGeneral.astro
  - Archivo: `src/components/Navegadores/NavGeneral.astro`
  - Cambio: Verificar que no hay importaciones, eliminar
  - Tiempo: 10 min

- [ ] **T1.3** Crear BaseLayout.astro
  - Basarse en: Código común de MainLayout + MainQuizzes
  - Extraer: Head, metadatos, Footer, scripts base
  - Tiempo: 45 min

- [ ] **T1.4** Refactorizar MainLayout y MainQuizzes
  - Cambio: Hereden de BaseLayout
  - Importar: CSS adicionales solo en MainQuizzes
  - Tiempo: 30 min

- [ ] **T1.5** Consolidar quiz.css
  - Acción: Combinar quiz-engine.css + quizzes.css
  - Verificar: Clases usadas en HTML
  - Eliminar: Archivos originales
  - Tiempo: 30 min

- [ ] **T1.6** Crear types/layout.ts
  - Extraer: Interface Props de layouts
  - Exportar: LayoutProps
  - Usar: En MainLayout, MainQuizzes, BaseLayout
  - Tiempo: 20 min

### Fase 2: ALTA (6-8 horas)

- [ ] **T2.1** Crear ClassesSection.astro
  - Definir: Props interface
  - Implementar: Slots para contenido
  - Tiempo: 1 h

- [ ] **T2.2** Refactorizar ClasesGrupales.astro
  - Usar: ClassesSection
  - Prueba: Que funcione en desarrollo
  - Tiempo: 30 min

- [ ] **T2.3** Refactorizar ClasesParticulares.astro
  - Usar: ClassesSection
  - Prueba: que funcione
  - Tiempo: 30 min

- [ ] **T2.4** Refactorizar ClasesVirtuales.astro
  - Usar: ClassesSection
  - Prueba: que funcione
  - Tiempo: 30 min

- [ ] **T2.5** Crear styles/utilities.css
  - Definir: Clases reutilizables (heading, prose, containers)
  - Importar: En MainLayout
  - Tiempo: 1 h

- [ ] **T2.6** Aplicar clases utilities en HTML
  - Buscar/reemplazar: Patrones Tailwind comunes
  - Revertir: Si algo falla visualmente
  - Tiempo: 2-3 h

### Fase 3: MEDIA (3-4 horas)

- [ ] **T3.1** Consolidar main.js (animations + theme-toggle)
  - Combinar: theme-toggle.js dentro de main.js
  - Eliminar: theme-toggle.js original
  - Tiempo: 30 min

- [ ] **T3.2** Auditar componentes no usados
  - Buscar: ImagenEstatica.astro, PhotoSwipeUI.astro
  - Determinar: Si existen y se usan
  - Tiempo: 30 min

- [ ] **T3.3** Limpiar Props no usados
  - Remover: keywords, lang, author, canonicalUrl
  - Actualizar: Interfaces en types/
  - Tiempo: 20 min

- [ ] **T3.4** Documentar estructura de datos
  - Archivo: STRUCTURE.md
  - Contenido: Cómo usar quizzes.ts, datos, etc.
  - Tiempo: 45 min

### Testing (Por cada fase)

- [ ] Revisar visualmente cada página
- [ ] Validar HTML en https://validator.w3.org
- [ ] Verificar consola del navegador (sin errores)
- [ ] Probar responsividad (mobile, tablet, desktop)
- [ ] Probar dark mode toggle
- [ ] Probar navegación (menús, móvil, scroll)
- [ ] Probar galerías (PhotoSwipe)

---

## 14. 🎓 MÉTRICAS ANTES/DESPUÉS

### Líneas de Código

| Métrica                      | Antes    | Después  | Cambio          |
| ---------------------------- | -------- | -------- | --------------- |
| Archivos Astro (componentes) | 12       | 9        | -3 (-25%)       |
| Líneas HTML/Astro            | 3500+    | 3150+    | -350 (-10%)     |
| Líneas CSS                   | 1900+    | 1650+    | -250 (-13%)     |
| Líneas JS                    | 720      | 670      | -50 (-7%)       |
| **Total líneas**             | **6120** | **5470** | **-650 (-11%)** |

### Complejidad

| Métrica                  | Antes | Después        |
| ------------------------ | ----- | -------------- |
| Componentes duplicados   | 3+    | 0              |
| Layouts duplicados       | 2     | 1 (compartido) |
| Archivos CSS redundantes | 2     | 0              |
| Props interfaces         | 8     | 5              |
| Tipos compartidos        | 0     | 3+             |

### Mantenibilidad (subjetivo)

| Aspecto                 | Antes   | Después   |
| ----------------------- | ------- | --------- |
| Consistencia de estilos | Baja    | Alta      |
| Reusabilidad            | Baja    | Alta      |
| Documentación           | Nula    | Mejorada  |
| Testing                 | Difícil | Más fácil |
| Curva de aprendizaje    | Media   | Baja      |

---

## 15. 🚀 VENTAJAS DESPUÉS DE REFACTORIZAR

### Para el Desarrollador

1. **Más rápido:** Cambiar un estilo afecta múltiples lugares al mismo tiempo
2. **Menos error:** Menos código = menos bugs
3. **Más claro:** Componentes con responsabilidad única
4. **Mejor TypeScript:** Tipos compartidos = autocompletar mejor

### Para el Usuario

1. **CSS más pequeño:** Archivo CSS comprimido ~5-10% menos
2. **Mejor rendimiento:** Scripts cargados solo cuando se necesitan
3. **HTML válido:** DOM HTML5 correcto
4. **Mismo UX:** Todas las funcionalidades intactas

### Para Mantenimiento Futuro

1. **Escalabilidad:** Fácil agregar nuevas páginas/componentes
2. **Consistencia:** Patrones claros a seguir
3. **Documentación:** Estructura es autoexplicativa
4. **Migración:** Preparado para futuras versiones de Astro

---

## 📄 ARCHIVOS DE REFERENCIA

- Análisis principal: `ANÁLISIS_REFACTORIZACIÓN.md`
- Este documento: `ANÁLISIS_REFACTORIZACIÓN_DETALLADO.md`
- Notas de sesión: `/memories/session/astro-refactoring-plan.md`

---

**Fin del análisis detallado**  
Última actualización: 1 de Junio 2026
