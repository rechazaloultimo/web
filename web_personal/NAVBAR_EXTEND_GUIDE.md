# 📖 GUÍA: Cómo Crear Nuevos Navbars Especializados

## Quick Start: Crear un Nuevo Navbar

### Paso 1: Definir los Items Personalizados

```astro
// src/components/Navegadores/Nav-MiPagina.astro

const miMenuItems = [
  {
    label: 'Mi Sección 1',
    submenu: [
      { label: 'Subsección 1a', href: '#seccion1a' },
      { label: 'Subsección 1b', href: '#seccion1b' },
      { label: 'Subsección 1c', href: '#seccion1c' },
    ]
  },
  {
    label: 'Mi Sección 2',
    submenu: [
      { label: 'Item 2-1', href: '#item2-1' },
      { label: 'Item 2-2', href: '#item2-2' },
    ]
  }
];
```

### Paso 2: Pasar al Componente Navbar

```astro
---
import Navbar from '@/components/Navbar.astro';

const miMenuItems = [
  {
    label: 'Mi Sección 1',
    submenu: [
      { label: 'Subsección 1a', href: '#seccion1a' },
      { label: 'Subsección 1b', href: '#seccion1b' },
      { label: 'Subsección 1c', href: '#seccion1c' },
    ]
  },
  {
    label: 'Mi Sección 2',
    submenu: [
      { label: 'Item 2-1', href: '#item2-1' },
      { label: 'Item 2-2', href: '#item2-2' },
    ]
  }
];
---

<Navbar additionalMenuItems={miMenuItems} />
```

### Paso 3: Usar en tu Página

```astro
// pages/mi-pagina.astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import NavMiPagina from '@/components/Navegadores/Nav-MiPagina.astro';
---

<MainLayout title="Mi Página" description="Mi descripción">
  <NavMiPagina />
  <main>
    <!-- tu contenido -->
  </main>
</MainLayout>
```

## 📋 Estructura de MenuItems

### Tipo de Datos

```typescript
interface MenuItemConfig {
  label: string;           // Texto visible del item
  href?: string;          // Link del item (opcional si tiene submenu)
  submenu?: MenuItemConfig[]; // Array de subitems (opcional)
}
```

### Ejemplo Completo

```astro
const miMenuItems = [
  // Item simple (solo texto + link)
  {
    label: 'Acerca de',
    href: '#about'
  },

  // Item con submenu
  {
    label: 'Servicios',
    submenu: [
      { label: 'Servicio 1', href: '#service1' },
      { label: 'Servicio 2', href: '#service2' },
      { label: 'Servicio 3', href: '#service3' },
    ]
  },

  // Otro item con submenu
  {
    label: 'Recursos',
    submenu: [
      { label: 'Documentos', href: '#docs' },
      { label: 'Videos', href: '#videos' },
    ]
  },

  // Item simple nuevamente
  {
    label: 'Contacto',
    href: '#contact'
  }
];
```

## 🎨 Ejemplos Reales

### Ejemplo 1: Navbar para Página de Blog

```astro
// src/components/Navegadores/Nav-Blog.astro
---
import Navbar from '@/components/Navbar.astro';

const blogMenuItems = [
  {
    label: 'Por Categoría',
    submenu: [
      { label: 'JavaScript', href: '#categoria-js' },
      { label: 'Astro', href: '#categoria-astro' },
      { label: 'CSS', href: '#categoria-css' },
      { label: 'General', href: '#categoria-general' },
    ]
  },
  {
    label: 'Por Año',
    submenu: [
      { label: '2024', href: '#year-2024' },
      { label: '2023', href: '#year-2023' },
      { label: '2022', href: '#year-2022' },
    ]
  },
  {
    label: 'Populares',
    href: '#popular'
  }
];
---

<Navbar additionalMenuItems={blogMenuItems} />
```

### Ejemplo 2: Navbar para Portfolio

```astro
// src/components/Navegadores/Nav-Portfolio.astro
---
import Navbar from '@/components/Navbar.astro';

const portfolioMenuItems = [
  {
    label: 'Proyectos',
    submenu: [
      { label: 'Web Apps', href: '#projects-web' },
      { label: 'Mobile Apps', href: '#projects-mobile' },
      { label: 'Diseño', href: '#projects-design' },
      { label: 'Código Abierto', href: '#projects-oss' },
    ]
  },
  {
    label: 'Habilidades',
    href: '#skills'
  },
  {
    label: 'Experiencia',
    href: '#experience'
  }
];
---

<Navbar additionalMenuItems={portfolioMenuItems} />
```

### Ejemplo 3: Navbar para Documentación

```astro
// src/components/Navegadores/Nav-Docs.astro
---
import Navbar from '@/components/Navbar.astro';

const docsMenuItems = [
  {
    label: 'Primeros Pasos',
    submenu: [
      { label: 'Instalación', href: '#install' },
      { label: 'Configuración', href: '#config' },
      { label: 'Primer Proyecto', href: '#first-project' },
    ]
  },
  {
    label: 'Guías',
    submenu: [
      { label: 'API Reference', href: '#api' },
      { label: 'Ejemplos', href: '#examples' },
      { label: 'Mejores Prácticas', href: '#best-practices' },
      { label: 'Troubleshooting', href: '#troubleshooting' },
    ]
  },
  {
    label: 'Community',
    submenu: [
      { label: 'Foro', href: '#forum' },
      { label: 'Chat', href: '#chat' },
      { label: 'Contribuir', href: '#contribute' },
    ]
  }
];
---

<Navbar additionalMenuItems={docsMenuItems} />
```

## 🔧 Personalización Avanzada

### Cambiar Clase del Navbar

```astro
// Para hacerlo transparente en lugar de opaco
<Navbar navClass="nav-transparent" additionalMenuItems={myItems} />
```

### Sin Items Adicionales

```astro
// Solo usa el menú base
<Navbar />

// Es equivalente a:
<Navbar additionalMenuItems={[]} />
```

### Combinar Ambas Props

```astro
<Navbar 
  navClass="nav-transparent" 
  additionalMenuItems={myItems} 
/>
```

## 📂 Estructura Recomendada

```
src/
├── components/
│   ├── Navbar.astro                    ⭐ (componente base)
│   └── Navegadores/
│       ├── NavGeneral.astro            (menú general)
│       ├── Nav-WudangQigong.astro      (página específica)
│       ├── Nav-Mawangdui.astro         (página específica)
│       ├── Nav-Blog.astro              (ejemplo nuevo)
│       ├── Nav-Portfolio.astro         (ejemplo nuevo)
│       └── Nav-Docs.astro              (ejemplo nuevo)
├── pages/
│   ├── blog/
│   │   └── index.astro                 (usa Nav-Blog)
│   ├── portfolio/
│   │   └── index.astro                 (usa Nav-Portfolio)
│   └── docs/
│       └── index.astro                 (usa Nav-Docs)
└── styles/
    └── nav.css                          (estilos compartidos)
```

## 🎯 Patrón para Datos Dinámicos

Si tus items vienen de una base de datos o archivo JSON:

```astro
// src/components/Navegadores/Nav-Dinamico.astro
---
import Navbar from '@/components/Navbar.astro';

// Importar datos de archivo
import { getMenuItems } from '@/data/menu-items.ts';

// O de una API:
// const response = await fetch('https://api.ejemplo.com/menu');
// const menuItems = await response.json();

const menuItems = await getMenuItems();
---

<Navbar additionalMenuItems={menuItems} />
```

## 🚀 Performance Tips

1. **Datos estáticos**: Declara `const` fuera del script frontmatter si es posible
2. **Evita fetches innecesarios**: Cachea datos en build time
3. **Lazy load submenus**: Usa JavaScript para cargar items bajo demanda (si necesario)

## 📝 Naming Conventions

Recomendamos usar este patrón de nombres:

```
Nav-[NombrePagina].astro
Nav-[Categoria].astro
Nav-[Segun].astro

Ejemplos:
├── Nav-Blog.astro
├── Nav-Docs.astro
├── Nav-Portfolio.astro
├── Nav-WudangQigong.astro
├── Nav-Mawangdui.astro
└── NavGeneral.astro (excepción: menú general sin guion)
```

## ✅ Checklist para Nuevo Navbar

- [ ] Archivo creado en `src/components/Navegadores/Nav-*.astro`
- [ ] Importa `Navbar` correctamente
- [ ] Define `const menuItems` con estructura adecuada
- [ ] Pasa `additionalMenuItems={menuItems}` a `<Navbar />`
- [ ] Probado en página: items aparecen en desktop y mobile
- [ ] Estilos heredados de `nav.css` correctamente
- [ ] Links internos funcionan
- [ ] No tiene duplicación de código

## 🆘 Troubleshooting

### Los items no aparecen en el navbar

```astro
// ❌ Incorrecto
const items = [
  { label: 'Item', url: '#test' }  // url no link href
];

// ✅ Correcto
const items = [
  { label: 'Item', href: '#test' }  // href es correcto
];
```

### El submenu no se abre en mobile

- Verifica que `navigation.js` esté importado en `Navbar.astro` ✅
- Comprueba que hay `.mobile-accordion` wrapper ✅
- Revisa console del navegador por errores de JS

### Los estilos no se aplican

- Verifica que `nav.css` está importado en `MainLayout.astro` ✅
- Revisa que las clases CSS coinciden con `nav.css` ✅
- Comprueba especificidad de CSS (Tailwind precedence)

---

**¡Listo para crear nuevos navbars reutilizables!** 🎉
