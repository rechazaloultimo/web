// hero-preload.js
const setupHeroPreload = () => {
  const heroes = document.querySelectorAll(".hero-fullscreen-bg");

  heroes.forEach((hero) => {
    const style = getComputedStyle(hero);
    const bg = style.backgroundImage;

    // Extraer la URL limpia de la propiedad background-image
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    const imageUrl = match ? match[1] : null;

    if (imageUrl && imageUrl !== "none") {
      // 1. Ocultar el hero inicialmente
      hero.classList.add("preload-hidden");

      // 2. Crear y añadir el spinner (usando tus clases de hero.css)
      const overlay = document.createElement("div");
      overlay.className = "hero-loading-overlay";
      overlay.innerHTML = '<div class="hero-spinner"></div>';
      hero.appendChild(overlay);

      // 3. Precargar la imagen
      const img = new Image();
      img.src = imageUrl;

      const revealHero = () => {
        hero.classList.remove("preload-hidden");
        overlay.classList.add("fade-out");
        // Limpiar el DOM después de la transición
        overlay.addEventListener("transitionend", () => overlay.remove(), { once: true });
      };

      img.onload = revealHero;
      img.onerror = revealHero; // Revelar de todos modos si falla la carga
    }
  });
};

// Ejecutar en cada navegación (importante para SPAs o transiciones de Astro)
document.addEventListener("DOMContentLoaded", setupHeroPreload);
