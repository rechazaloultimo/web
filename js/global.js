
// Helper para mostrar errores en campos de formulario
function showError(fieldOrId, message) {
    let fieldElement = typeof fieldOrId === 'string' ? document.getElementById(fieldOrId) : fieldOrId;
    let errorSpanId = typeof fieldOrId === 'string' ? fieldOrId : fieldOrId.id;
    if (!errorSpanId && typeof fieldOrId === 'string') errorSpanId = fieldOrId;

    const errorSpans = {
        nombre: document.getElementById('err-nombre'),
        email: document.getElementById('err-email'),
        telefono: document.getElementById('err-telefono'),
        asunto: document.getElementById('err-asunto'),
        mensaje: document.getElementById('err-mensaje')
    };

    if (errorSpans[errorSpanId]) {
        errorSpans[errorSpanId].textContent = message;
        errorSpans[errorSpanId].classList.remove('hidden');
    }
    if (fieldElement && fieldElement.classList && typeof fieldOrId !== 'string') {
        fieldElement.classList.add('error-border');
    }
}

// Helper para limpiar errores en campos de formulario
function clearError(fieldOrId) {
    let fieldElement = typeof fieldOrId === 'string' ? document.getElementById(fieldOrId) : fieldOrId;
    let errorSpanId = typeof fieldOrId === 'string' ? fieldOrId : fieldOrId.id;
    if (!errorSpanId && typeof fieldOrId === 'string') errorSpanId = fieldOrId;

    const errorSpans = {
        nombre: document.getElementById('err-nombre'),
        email: document.getElementById('err-email'),
        telefono: document.getElementById('err-telefono'),
        asunto: document.getElementById('err-asunto'),
        mensaje: document.getElementById('err-mensaje')
    };

    if (errorSpans[errorSpanId]) {
        errorSpans[errorSpanId].classList.add('hidden');
        errorSpans[errorSpanId].textContent = '';
    }
    if (fieldElement && fieldElement.classList && typeof fieldOrId !== 'string') {
        fieldElement.classList.remove('error-border');
    }
}

// Script para el año currentYear en el footer (se mantiene global o lo más temprano posible)
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

document.querySelectorAll('.audio-btn').forEach(btn => {
  let audio = null;
  const label = btn.querySelector('.audio-label');
  const textoEscuchar = 'Escuchar el contenido';
  const textoParar    = 'Parar el contenido';

  btn.addEventListener('click', function () {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio = null;
      btn.classList.remove('playing');
      label.textContent = textoEscuchar;
      return;
    }

    audio = new Audio(btn.dataset.audio);
    audio.play();
    btn.classList.add('playing');
    label.textContent = textoParar;

    audio.addEventListener('ended', function () {
      btn.classList.remove('playing');
      label.textContent = textoEscuchar;
      audio = null;
    });

    audio.addEventListener('pause', function () {
      btn.classList.remove('playing');
      label.textContent = textoEscuchar;
      audio = null;
    });
  });
});
