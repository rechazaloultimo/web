// src/js/photoswipe-init.js

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css'; 

function setupPhotoSwipe() {
    if (typeof window === 'undefined') return;

    const galleries = document.querySelectorAll('.pswp-gallery-container');
    if (galleries.length === 0) return;

    console.log(`[PhotoSwipe] Inicializando ${galleries.length} galerías...`);

    galleries.forEach((galleryElement) => {
        // 1. PRIMERO: Creamos la instancia del lightbox
        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryElement, 
    children: '.pswp-gallery__item',
    pswpModule: () => import('photoswipe'), 
    showHideAnimationType: 'fade',
    // --- AJUSTE DE TAMAÑO ---
    // Añade un margen del 10% (o los píxeles que quieras) alrededor de la foto
    padding: { top: 40, bottom: 80, left: 40, right: 40 }, 
        });

        // 2. SEGUNDO: Añadimos el filtro (Ahora sí existe la variable 'lightbox')
        lightbox.addFilter('itemData', (itemData, index) => {
            const linkEl = itemData.element;
            if (linkEl) {
                // Mapea el atributo de Astro al objeto de datos de PhotoSwipe
                itemData.altText = linkEl.getAttribute('data-pswp-alt-text');
            }
            return itemData;
        });

        // 3. TERCERO: Registramos los elementos de la interfaz (Botones y Caption)
        lightbox.on('uiRegister', function() {
            
            // --- BOTÓN COPIAR ---
            lightbox.pswp.ui.registerElement({
                name: 'copy-url-button',
                order: 8,
                is: (el) => !!el.closest('.pswp__button--copy'),
                html: '<button class="pswp__button pswp__button--copy" title="Copiar URL"><i class="fas fa-clipboard"></i></button>',
                onClick: (event, el) => {
                    const imageUrl = lightbox.pswp.currSlide.data.src;
                    navigator.clipboard.writeText(imageUrl).then(() => {
                        const prevTitle = el.title;
                        el.title = '¡Copiado!';
                        setTimeout(() => { el.title = prevTitle; }, 1000);
                    });
                }
            });

            // --- BOTÓN DESCARGAR ---
            lightbox.pswp.ui.registerElement({
                name: 'download-button',
                order: 9,
                appendTo: 'bar',
                html: '<button class="pswp__button pswp__button--download" title="Descargar"><i class="fas fa-download"></i></button>',
                onClick: (event, el) => {
                    const slide = lightbox.pswp.currSlide;
                    const a = document.createElement('a');
                    a.href = slide.data.src;
                    
                    // Aquí ya funciona slide.data.altText gracias al filtro de arriba
                    const name = slide.data.altText ? 
                        slide.data.altText.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'imagen';
                    
                    a.download = `${name}.jpg`;
                    a.click();
                }
            });

            // --- PIE DE FOTO (CAPTION) ---
            lightbox.pswp.ui.registerElement({
                name: 'custom-caption',
                order: 9,
                is: (el) => true,
                appendTo: 'root',
                onInit: (el, pswp) => {
                                        el.style.cssText = `
                                            position: absolute;
                                            bottom: 0;
                                            left: 0;
                                            width: 100%;
                                            padding: 40px 20px 20px; /* Más padding arriba para el degradado */
                                            text-align: center;
                                            color: #ffffff;
                                            font-size: 1.1rem;
                                            font-weight: 300;
                                            letter-spacing: 0.5px;
                                            pointer-events: none;
                                            /* Degradado de negro a transparente para que el texto siempre se lea */
                                            background: linear-gradient(to top, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0) 100%);
                                            z-index: 20;
                                        `;   
                        pswp.on('change', () => {
                        el.innerHTML = pswp.currSlide.data.altText || '';
                    });
                }
            });
        });

        // 4. ÚLTIMO: Inicializamos
        lightbox.init(); 
    });
}

setupPhotoSwipe();