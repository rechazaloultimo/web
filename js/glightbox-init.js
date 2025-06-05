document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de GLightbox
    console.log('Intentando inicializar GLightbox...');
    if (typeof GLightbox === 'function') {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: false,
        });
        console.log('GLightbox inicializado correctamente.', lightbox);
    } else {
        console.error('Error: GLightbox no está definido o no es una función. Verifica el orden de carga de los scripts en tu HTML.');
    }
});