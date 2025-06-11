document.addEventListener('DOMContentLoaded', () => {
    // Verifica si GLightbox está disponible
    if (typeof GLightbox !== 'function') {
        // console.warn('GLightbox no está cargado.');
        return;
    }

    // Verifica si existen elementos con el selector
    const lightboxElements = document.querySelectorAll('.glightbox');
    if (lightboxElements.length === 0) {
        // console.info('No se encontraron elementos .glightbox en la página.');
        return;
    }

    // Inicializa GLightbox con más opciones y eventos
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        closeButton: true,
        zoomable: true,
        autoplayVideos: false,
        plyr: {
            css: 'https://cdn.plyr.io/3.7.8/plyr.css',
            js: 'https://cdn.plyr.io/3.7.8/plyr.min.js'
        },
        openEffect: 'fade',
        closeEffect: 'zoom',
        slideEffect: 'slide',
        // theme: 'clean', // Descomenta si tu tema GLightbox lo soporta
        beforeSlideLoad: (slide) => {
            // Evento antes de cargar cada slide
            // console.log('Cargando slide:', slide);
        }
    });

    // Ejemplo de eventos adicionales
    lightbox.on('open', () => {
        // console.log('GLightbox abierto');
    });

    lightbox.on('close', () => {
        // console.log('GLightbox cerrado');
    });

    lightbox.on('slide_changed', ({ prev, current }) => {
        // console.log('Slide cambiado:', { prev, current });
    });
});
