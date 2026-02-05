// src/js/photoswipe-init.js

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css'; 

function setupPhotoSwipe() {
    // Solo se ejecuta en el navegador
    if (typeof window === 'undefined') {
        return;
    }

    const galleries = document.querySelectorAll('.pswp-gallery-container');
    if (galleries.length === 0) {
        return;
    }

    console.log(`[PhotoSwipe] Inicializando ${galleries.length} galerías con funciones extendidas...`);

    // Iteramos sobre cada elemento de la galería encontrado
    galleries.forEach((galleryElement) => {
        
        const lightbox = new PhotoSwipeLightbox({
            // CRÍTICO: Pasamos el elemento DOM específico para inicializar esta galería
            gallery: galleryElement, 
            children: '.pswp-gallery__item',
            pswpModule: () => import('photoswipe'), 
            showHideAnimationType: 'fade',
        });

        // 🚨 REGISTRO DE NUEVOS BOTONES (COPIAR Y DESCARGAR) 🚨
        lightbox.on('uiRegister', function() {
            
            // --- 1. BOTÓN COPIAR URL ---
            lightbox.pswp.ui.registerElement({
                name: 'copy-url-button',
                order: 8, // Posición en la barra superior
                is(el) {
                    return !!el.closest('.pswp__button--copy');
                },
                // Usamos el icono de Font Awesome
                html: '<button class="pswp__button pswp__button--copy" title="Copiar URL"><i class="fas fa-clipboard"></i></button>',
                onClick: (event, el) => {
                    const currentSlide = lightbox.pswp.currSlide;
                    if (currentSlide) {
                        const imageUrl = currentSlide.data.src;
                        
                        // Usa la API de Clipboard
                        navigator.clipboard.writeText(imageUrl).then(() => {
                            // Feedback visual temporal
                            const originalTitle = el.title;
                            el.title = '¡Copiado!';
                            setTimeout(() => {
                                el.title = originalTitle;
                            }, 1000);
                        }).catch(err => {
                            console.error('No se pudo copiar la URL: ', err);
                        });
                    }
                }
            });

            // --- 2. BOTÓN DESCARGAR ---
            lightbox.pswp.ui.registerElement({
                name: 'download-button',
                order: 9, // Posición en la barra superior
                appendTo: 'bar',
                html: '<button class="pswp__button pswp__button--download" title="Descargar"><i class="fas fa-download"></i></button>',
                onClick: (event, el) => {
                    const currentSlide = lightbox.pswp.currSlide;
                    if (currentSlide) {
                        const imageUrl = currentSlide.data.src;
                        
                        // Crea un enlace temporal y simula un clic de descarga
                        const a = document.createElement('a');
                        a.href = imageUrl;
                        
                        // Intenta generar un nombre de archivo limpio
                        const fileName = currentSlide.data.altText ? 
                            currentSlide.data.altText.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 
                            'imagen';

                        // Determina la extensión basándose en la URL
                        const extensionMatch = imageUrl.match(/\.([a-z0-9]+)(?:\?|$)/i);
                        const extension = extensionMatch ? extensionMatch[1] : 'jpg';

                        a.download = `${fileName}.${extension}`;
                        
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                }
            });
        });

        lightbox.on('beforeOpen', (e) => {
            console.log("[PhotoSwipe] Clic interceptado. Abriendo visor.");
        });

        // Inicializa el lightbox para esta galería, aplicando los botones registrados
        lightbox.init(); 
    });
}

// 🚨 EJECUCIÓN INMEDIATA 🚨
setupPhotoSwipe();