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
  
// ===== Acordeones en mobile (corregido) =====
document.querySelectorAll('#mobile-menu .mobile-accordion').forEach(acc => {
  const btn = acc.querySelector('.mobile-acc-btn');
  const panel = acc.querySelector('.mobile-acc-panel');

  // toggle correcto: classList.toggle(...) devuelve true si la clase quedó añadida
  btn.addEventListener('click', () => {
    // cerrar otros acordeones y limpiar sus alturas fijadas
    document.querySelectorAll('#mobile-menu .mobile-accordion').forEach(o => {
      if (o !== acc) {
        o.classList.remove('open');
        const p = o.querySelector('.mobile-acc-panel');
        if (p) p.style.maxHeight = null;
      }
    });

    // aplicar toggle y usar el resultado (isOpen = true si quedó abierto)
    const isOpen = acc.classList.toggle('open');

    if (isOpen) {
      // fijar la altura real para animación suave
      panel.style.maxHeight = panel.scrollHeight + 'px';
      // asegurar visibilidad dentro del contenedor scrollable del menú
      setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }, 80);
    } else {
      // cerrar: remover la altura fijada para que colapse por CSS
      panel.style.maxHeight = null;
    }
  });

  // Si se hace click en un <a> dentro del panel, colapsar el acordeón (UX esperado)
  panel.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return; // solo actuamos cuando se hizo click en un enlace
    acc.classList.remove('open');
    panel.style.maxHeight = null;
    // Nota: si ya tenés otro handler que cierra el menú móvil al clicar links, ese seguirá funcionando.
  });

 
  panel.addEventListener('click', (e) => {
    // si querés que un click en el área vacía del panel colapse el acordeón:
    if (e.target === panel) {
      acc.classList.remove('open');
      panel.style.maxHeight = null;
    }
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
  