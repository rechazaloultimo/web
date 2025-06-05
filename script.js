// Variable global para indicar si reCAPTCHA está cargado
let recaptchaReady = false;

// Función global que se llama cuando la API de reCAPTCHA está completamente cargada
// Se asigna a window para asegurar que reCAPTCHA la encuentre globalmente.
window.onRecaptchaLoad = function() {
    console.log('API de reCAPTCHA v3 cargada y lista.');
    recaptchaReady = true;
};

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Script para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Script para el año currentYear en el footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Script para la barra de navegación dinámica
    const mainNav = document.getElementById('mainNav');
    const scrollThreshold = 50;
    if (mainNav) {
        function handleNavScroll() {
            if (window.scrollY > scrollThreshold) {
                if (!mainNav.classList.contains('nav-opaque')) {
                    mainNav.classList.remove('nav-transparent');
                    mainNav.classList.add('nav-opaque');
                }
            } else {
                if (!mainNav.classList.contains('nav-transparent')) {
                    mainNav.classList.remove('nav-opaque');
                    mainNav.classList.add('nav-transparent');
                }
            }
        }
        handleNavScroll();
        window.addEventListener('scroll', handleNavScroll);
    }

    // Animaciones al hacer scroll (fade-in)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                 entry.target.style.opacity = '0';
                 entry.target.style.transform = 'translateY(20px)';
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Script para el Cambio de Tema (Sol/Luna)
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-toggle-sun-icon');
    const moonIcon = document.getElementById('theme-toggle-moon-icon');

    const applyTheme = (chosenTheme) => {
        if (chosenTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (sunIcon) sunIcon.classList.add('hidden');
            if (moonIcon) moonIcon.classList.remove('hidden');
        } else {
            document.body.classList.remove('dark-mode');
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
        }
    };

    let preferredTheme = localStorage.getItem('theme');
    if (!preferredTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            preferredTheme = 'dark';
        } else {
            preferredTheme = 'light';
        }
    }
    applyTheme(preferredTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const newTheme = isDarkMode ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (!localStorage.getItem('theme')) {
                const systemTheme = event.matches ? 'dark' : 'light';
                applyTheme(systemTheme);
            }
        });
    }

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

    // Deshabilitar menú contextual y copia
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    document.addEventListener('copy', function(event) {
        event.preventDefault();
    });
});