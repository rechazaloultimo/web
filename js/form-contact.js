/* eslint-env browser */
document.addEventListener('DOMContentLoaded', () => {
  // ---- constantes ----------------------------------------------------------
  const contactForm      = document.getElementById('contact-form');
  const formStatus       = document.getElementById('form-status');

  // ---- helpers -------------------------------------------------------------
  /**
   * Obtiene el elemento span de error asociado a un campo del formulario.
   * @param {string} id - El ID del campo de formulario (o el ID del span de error directamente).
   * @returns {HTMLElement|null} El elemento span de error o null si no se encuentra.
   */
  const spanOf = id => document.getElementById(`err-${id}`);

  /**
   * Muestra un mensaje de error para un campo específico del formulario.
   * Añade la clase 'error-border' al campo y muestra el mensaje en el span de error asociado.
   * @param {HTMLElement|string} field - El elemento HTML del campo o su ID.
   * @param {string} msg - El mensaje de error a mostrar.
   */
  const showErr = (field, msg) => {
    const span = typeof field === 'string' ? spanOf(field) : spanOf(field.id);
    if (span) {
      span.textContent = msg;
      span.classList.remove('hidden');
    }
    if (field instanceof HTMLElement) {
      field.classList.add('error-border');
    }
  };

  /**
   * Limpia los mensajes de error y las clases de error de un campo del formulario.
   * @param {HTMLElement|string} f - El elemento HTML del campo o su ID.
   */
  const clearErr = f => {
    const span = typeof f === 'string' ? spanOf(f) : spanOf(f.id);
    if (span) {
      span.classList.add('hidden');
    }
    if (f instanceof HTMLElement) {
      f.classList.remove('error-border');
    }
  };

  // ---- envío ---------------------------------------------------------------
  // Si el formulario o el div de estado no existen, salimos.
  if (!contactForm || !formStatus) return;

  contactForm.addEventListener('submit', async ev => {
    ev.preventDefault();
    let ok = true;

    // Obtenemos las referencias a los campos del formulario
    const nombre   = document.getElementById('nombre');
    const email    = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const asunto   = document.getElementById('asunto');
    const mensaje  = document.getElementById('mensaje');
    const sendCopy = document.getElementById('send-copy'); // El checkbox "Enviarme una copia"
    const btn = contactForm.querySelector('button[type="submit"]'); // Referencia al botón

    // Limpiamos errores previos y el estado del formulario
    [nombre, email, telefono, asunto, mensaje].forEach(clearErr);
    formStatus.textContent = '';
    formStatus.className   = 'mt-4 text-center text-base';

    // Restablecemos el botón a su estado original (texto y color) antes de la validación
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Enviar Mensaje';
      // Eliminar clases de éxito si estaban presentes y añadir clases originales
      btn.classList.remove('bg-green-600', 'hover:bg-green-700', 'border-green-700', 'text-white');
      btn.classList.add('button-manuscript'); // Asegúrate de que esta clase restaure el estilo original
    }

    // ---- validaciones básicas del lado del cliente --------------------------
    if (!nombre.value.trim())                              { showErr(nombre,   'Completa tu nombre.'); ok = false; }
    if (!/^\S+@\S+\.\S+$/.test(email.value.trim()))        { showErr(email,    'Email inválido.');     ok = false; }
    if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(telefono.value.trim()))
                                                           { showErr(telefono, 'Teléfono inválido.');  ok = false; }
    if (!asunto.value)                                     { showErr(asunto,   'Selecciona un asunto.');ok = false; }
    if (!mensaje.value.trim())                             { showErr(mensaje,  'Escribe tu mensaje.'); ok = false; }

    if (!ok) {
        formStatus.textContent = 'Corrige los errores en el formulario.';
        formStatus.className = 'mt-4 text-center error-text text-sm';
        return;
    }

    // ---- Preparar y enviar datos a Formspree -------------------------------
    formStatus.textContent = 'Enviando…';
    formStatus.className   = 'mt-4 text-center text-sm';
    if (btn) btn.disabled = true; // Deshabilitamos el botón durante el envío

    const formData = new FormData(contactForm);

    if (sendCopy.checked) {
        formData.set('_cc', email.value.trim());
    } else {
        formData.delete('_cc');
    }

    try {
      const formAction = contactForm.action;
      const res = await fetch(formAction, {
        method : 'POST',
        body   : formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await res.json();

      if (res.ok) {
        formStatus.textContent = '¡Mensaje enviado!';
        formStatus.style.color = '#28A745'; // Color verde para el mensaje de estado

        // ---- MODIFICACIONES DEL BOTÓN TRAS ENVÍO EXITOSO ----
        if (btn) {
          btn.textContent = '¡Mensaje enviado!'; // Cambia el texto del botón
          btn.classList.remove('button-manuscript'); // Elimina la clase original
          btn.classList.add('bg-green-600', 'hover:bg-green-700', 'border-green-700', 'text-white'); // Añade clases para color verde
          btn.disabled = true; // Deshabilita el botón permanentemente (hasta recargar la página)
        }
        // ---- FIN MODIFICACIONES DEL BOTÓN ----

        contactForm.reset(); // Limpiamos todos los campos del formulario
        // Opcional: Podrías deshabilitar todos los campos del formulario aquí
        // Array.from(contactForm.elements).forEach(element => {
        //   if (element !== btn) element.disabled = true;
        // });

      } else {
        let errorMessage = 'Ha ocurrido un error al enviar el mensaje. Por favor, intenta de nuevo.';
        if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          errorMessage = data.errors.map(err => err.message).join(' | ');
        } else if (data.error) {
          errorMessage = data.error;
        }
        formStatus.textContent = `Error: ${errorMessage}`;
        formStatus.className   = 'mt-4 text-center error-text text-sm';
        if (btn) btn.disabled = false; // Vuelve a habilitar el botón si hubo un error
      }
    } catch (e) {
      formStatus.textContent = `Error de conexión: No se pudo contactar al servidor. (${e.message})`;
      formStatus.className   = 'mt-4 text-center error-text text-sm';
      if (btn) btn.disabled = false; // Vuelve a habilitar el botón si hubo un error de conexión
    }
    // El 'finally' ya no es tan crítico porque el 'disabled' se maneja dentro de los try/catch
  });
});