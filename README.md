# Rodrigo Pizarro Website

Este repositorio contiene el código fuente del sitio personal de Rodrigo Pizarro. En él se presentan sus servicios de Qígōng, Tàijíquán, masajes terapéuticos y proyectos multimediales.

## Estructura del proyecto

Todo el contenido estático vive en la carpeta `public/`.

- `public/index.html` – página de inicio.
- `public/acerca-de-mi.html` – información personal.
- `public/clases-presenciales.html` – detalles de clases y talleres.
- `public/masajes-terapeuticos.html` – masajes Tuina y An Mo.
- `public/asistentes-ia.html` – asistentes de inteligencia artificial.
- `public/aulavirtual.html` – acceso al aula virtual.
- `public/404.html` – página de error.
- `public/js/` – archivos JavaScript (navegación, animaciones, etc.).
- `public/style.css` – hoja de estilos principal.
- `public/img-mias/`, `public/img-gallery/` y `public/background/` – recursos gráficos.
- `public/robots.txt` y `public/sitemap.xml` – archivos para SEO.

El diseño usa [Tailwind CSS](https://tailwindcss.com/) y fuentes alojadas mediante CDN.

## Despliegue

El sitio es estático y puede hospedarse en cualquier servidor web o en GitHub Pages.

Para probarlo de forma local ejecuta un servidor simple dentro de `public/`:

```bash
python3 -m http.server
```

Luego abre `http://localhost:8000` en tu navegador.

Para publicarlo en GitHub Pages:

1. Sube este repositorio a tu cuenta de GitHub.
2. Desde las opciones del repositorio activa **GitHub Pages** utilizando la rama principal y la carpeta raíz.

## Contribuciones

Las mejoras y correcciones son bienvenidas. Realiza un *fork* del proyecto y envía un _pull request_ explicando tus cambios. Procura seguir el estilo existente y probar el sitio de forma local antes de enviar tu propuesta.
