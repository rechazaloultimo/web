// Script para los botones de audio
document.querySelectorAll(".audio-btn").forEach((btn) => {
  let audio = null;
  const label = btn.querySelector(".audio-label");
  const textoEscuchar = "Escuchar el contenido";
  const textoParar = "Parar el contenido";

  btn.addEventListener("click", function () {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio = null;
      btn.classList.remove("playing");
      label.textContent = textoEscuchar;
      return;
    }

    audio = new Audio(btn.dataset.audio);
    audio.play();
    btn.classList.add("playing");
    label.textContent = textoParar;

    audio.addEventListener("ended", function () {
      btn.classList.remove("playing");
      label.textContent = textoEscuchar;
      audio = null;
    });

    audio.addEventListener("pause", function () {
      btn.classList.remove("playing");
      label.textContent = textoEscuchar;
      audio = null;
    });
  });
});

// Script para mostrar/ocultar paneles de información
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");
  // Seleccionamos todos los paneles que llevan la clase base
  const panels = document.querySelectorAll(".info-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);

      // 1. Lógica de Cierre/Toggle (si el panel ya está abierto)
      if (targetPanel && targetPanel.classList.contains("is-active")) {
        targetPanel.classList.remove("is-active");
        // Retrasamos el 'display: none' (clase hidden) para que se vea el fade-out.
        // El tiempo debe ser igual o menor a la duración de la transición CSS (700ms).
        setTimeout(() => targetPanel.classList.add("hidden"), 700);
        return;
      }

      // 2. Ocultar y desactivar todos los demás paneles
      panels.forEach((panel) => {
        if (panel.classList.contains("is-active")) {
          panel.classList.remove("is-active");
          // Aseguramos que se oculte después del fade-out
          setTimeout(() => panel.classList.add("hidden"), 700);
        }
      });

      // 3. Mostrar el panel seleccionado
      if (targetPanel) {
        // Quitar 'hidden' para que 'display: block' se aplique.
        targetPanel.classList.remove("hidden");

        // Pequeño delay para que el navegador registre el cambio de 'display'
        setTimeout(() => {
          // Aplicamos la clase que dispara el fade-in (opacity: 1, transform: 0)
          targetPanel.classList.add("is-active");

          // --- CÓDIGO DE SCROLL CORREGIDO Y AVANZADO (Con Offset) ---

          // 1. Obtenemos el contenedor padre (punto de inicio del contenido)
          const infoArea = document.getElementById("info-display-area");

          if (infoArea) {
            // ALTURA DE COMPENSACIÓN (OFFSET)
            // ESTE VALOR DEBE SER MAYOR QUE LA ALTURA DE TU BARRA DE NAVEGACIÓN FIJA.
            const offset = 90; // Usamos 90px como ejemplo. Ajusta si tu nav es más alta/baja.

            // 2. Calculamos la posición donde debe estar el contenedor.
            // getBoundingClientRect().top obtiene la posición relativa al viewport.
            // window.scrollY es el scroll actual de la página.
            const targetPosition = infoArea.getBoundingClientRect().top + window.scrollY - offset;

            // 3. Realizamos el scroll suave
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }

          // --- FIN CÓDIGO CORREGIDO ---
        }, 50);
      }
    });
  });
});

// src/js/titulo-mov.js
function startTitleMarquee(originalTitle, speed = 600) {
  if (!document.title || originalTitle.trim() === "") {
    return;
  }

  // 1. Prepara el texto a desplazar
  // Añadimos espacios al inicio para que el título 'entre' suavemente.
  // El separador ||| es un carácter que no suele usarse.
  const separator = " ◎ ";
  const fullText = originalTitle + separator;
  let titleIndex = 0;
  let animationInterval;

  // 2. Función que genera el desplazamiento carácter por carácter
  const animateTitle = () => {
    // Obtenemos el segmento actual a mostrar
    let currentSegment = fullText.substring(titleIndex) + fullText.substring(0, titleIndex);

    // Asignamos el segmento al título del documento
    document.title = currentSegment;

    // Incrementamos el índice para el siguiente ciclo
    titleIndex++;

    // Si el índice llega al final del texto completo, lo reiniciamos
    if (titleIndex >= fullText.length) {
      titleIndex = 0;
    }
  };

  // 3. Control de visibilidad para iniciar/detener
  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      // Pestaña oculta: Inicia la animación
      if (!animationInterval) {
        animationInterval = setInterval(animateTitle, speed);
      }
    } else {
      // Pestaña visible: Detiene la animación y restaura el título
      if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
        document.title = originalTitle;
      }
    }
  };

  // Inicializa la animación si la pestaña ya está oculta al cargar
  if (document.visibilityState === "hidden") {
    animationInterval = setInterval(animateTitle, speed);
  }

  // Escucha los cambios de visibilidad
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

// 🚨 EJECUCIÓN 🚨
document.addEventListener("DOMContentLoaded", () => {
  // Usamos el título que Astro ya ha renderizado en el <head>
  const title = document.title;

  // NOTA: Si quieres que el título se mueva SIEMPRE, llama a startTitleMarquee(title, 200) aquí sin la lógica de visibilitychange.
  startTitleMarquee(title, 600);
});
