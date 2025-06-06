document.addEventListener('DOMContentLoaded', () => {
    if (typeof GLightbox === 'function') {
        GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: false,
        });
    }
});
