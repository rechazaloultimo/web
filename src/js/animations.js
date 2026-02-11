document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.2
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // CUANDO ENTRA en la vista, se le añade la clase final.
                entry.target.classList.add('is-visible');
                // Opcional: deja de observar el elemento si solo quieres la animación una vez
                observer.unobserve(entry.target); 
            } else {
                // CUANDO SALE de la vista, se le quita la clase final.
                entry.target.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    elementsToAnimate.forEach(el => {
        // Aseguramos que la transición esté activa desde el principio.
        el.classList.add('can-transition');
        observer.observe(el);
    });
});