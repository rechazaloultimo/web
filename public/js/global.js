
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
