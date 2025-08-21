document.addEventListener('DOMContentLoaded', () => {
    // ===== Menús dropdown desktop =====
    const parents = document.querySelectorAll('#mainNav .nav-item-has-children');
    parents.forEach(li => {
      const btn = li.querySelector(':scope > .nav-parent-btn');
      const submenu = li.querySelector(':scope > .nav-submenu');
      if (!btn || !submenu) return;
  
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = li.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
  
        // Cerrar otros
        if (isOpen) {
          parents.forEach(other => {
            if (other !== li) {
              other.classList.remove('open');
              const b = other.querySelector(':scope > .nav-parent-btn');
              if (b) b.setAttribute('aria-expanded', 'false');
            }
          });
        }
      });
  
      // Cerrar al hacer click fuera
      document.addEventListener('click', (e) => {
        if (!li.contains(e.target)) {
          li.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  
    // ===== Menú hamburguesa (mobile) =====
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
      });
  
      // Cerrar menú mobile al hacer click en enlace
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.setAttribute('aria-expanded', 'false');
        });
      });
    }
  
    // ===== Acordeones en mobile =====
    document.querySelectorAll('#mobile-menu .mobile-accordion').forEach(acc => {
      const btn = acc.querySelector('.mobile-acc-btn');
      btn.addEventListener('click', () => {
        // Cerrar otros acordeones
        document.querySelectorAll('#mobile-menu .mobile-accordion').forEach(o => {
          if (o !== acc) o.classList.remove('open');
        });
        acc.classList.toggle('open');
      });
    });
  
    // ===== Barra de navegación dinámica =====
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
  