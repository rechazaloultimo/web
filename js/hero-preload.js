// Preload de la imagen del héroe con indicador de carga

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-fullscreen-bg');
    if (!hero) return;

    const style = getComputedStyle(hero);
    const bg = style.backgroundImage || '';
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    const imageUrl = match ? match[1] : null;
    if (!imageUrl) return;

    hero.classList.add('preload-hidden');

    const overlay = document.createElement('div');
    overlay.className = 'hero-loading-overlay';
    overlay.innerHTML = '<div class="hero-spinner"></div>';
    hero.appendChild(overlay);

    const img = new Image();
    img.src = imageUrl;
    const revealHero = () => {
        hero.classList.remove('preload-hidden');
        overlay.classList.add('fade-out');
        overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    };

    img.onload = revealHero;
    img.onerror = revealHero;
});
