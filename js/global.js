// Variable global para indicar si reCAPTCHA está cargado
let recaptchaReady = false;

// Función global que se llama cuando la API de reCAPTCHA está completamente cargada
// Se asigna a window para asegurar que reCAPTCHA la encuentre globalmente.
window.onRecaptchaLoad = function() { // ¡Asegúrate de que está asignado a window!
    console.log('API de reCAPTCHA v3 cargada y lista.');
    recaptchaReady = true;
};

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
        mensaje: document.getElementById('err-mensaje'),
        recaptcha: document.getElementById('err-recaptcha')
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
        mensaje: document.getElementById('err-mensaje'),
        recaptcha: document.getElementById('err-recaptcha')
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

// Deshabilitar menú contextual y copia (se mantiene global por su naturaleza)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('copy', function(event) {
    event.preventDefault();
});