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
});