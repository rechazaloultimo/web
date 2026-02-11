(() => {
  const ONE_OPEN = true; // true = modo acordeón (solo una abierta). false = permite múltiples
  const cards = Array.from(document.querySelectorAll('.postura-card'));

  function closeCard(card) {
    const btn = card.querySelector('.pc-toggle');
    const panel = card.querySelector('.pc-panel');
    if (!btn || !panel) return;
    card.classList.remove('expanded');
    card.classList.add('collapsed');
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');

    // animación altura: colapsar desde scrollHeight
    const h = panel.scrollHeight;
    panel.style.height = h + 'px';
    requestAnimationFrame(() => {
      panel.style.height = '0px';
    });
    // limpiar inline style tras transición
    panel.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'height') return;
      panel.style.height = '';
      panel.removeEventListener('transitionend', onEnd);
    });
  }

  function openCard(card) {
    const btn = card.querySelector('.pc-toggle');
    const panel = card.querySelector('.pc-panel');
    if (!btn || !panel) return;

    if (ONE_OPEN) {
      // cerrar otras
      cards.forEach(c => {
        if (c !== card && c.classList.contains('expanded')) closeCard(c);
      });
    }

    card.classList.remove('collapsed');
    card.classList.add('expanded');
    btn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');

    // animación desde 0 a scrollHeight
    panel.style.display = 'block';
    panel.style.height = '0px';
    const h = panel.scrollHeight;
    requestAnimationFrame(() => {
      panel.style.height = h + 'px';
    });
    panel.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'height') return;
      panel.style.height = 'auto';
      panel.removeEventListener('transitionend', onEnd);
    });

    // desplazar suavemente para que quede visible (si es necesario)
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 260);
  }

  function toggleCard(card) {
    if (card.classList.contains('expanded')) closeCard(card);
    else openCard(card);
  }

  // setup: botones & click en tarjeta
  cards.forEach(card => {
    const btn = card.querySelector('.pc-toggle');
    const panel = card.querySelector('.pc-panel');

    // estado inicial: colapsado (asegurar)
    card.classList.add('collapsed');
    if (panel) {
      panel.style.height = '0px';
      panel.setAttribute('aria-hidden', 'true');
    }
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCard(card);
      });
    }

    // clic en tarjeta (no sobre el botón) también abre/ciierra
    card.addEventListener('click', (e) => {
      // ignorar si el click fue en el botón o en elementos interactivos
      if (e.target.closest('.pc-toggle') || e.target.closest('a') || e.target.closest('button')) return;
      toggleCard(card);
    });

    // tecla Enter / Space para accesibilidad
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card);
      } else if (e.key === 'Escape' && card.classList.contains('expanded')) {
        closeCard(card);
      }
    });
  });

  // Abrir si el hash apunta a un id de tarjeta
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target && target.classList.contains('postura-card')) {
      openCard(target);
    }
  }
})();
