// src/js/titulo-mov.js

/**
 * Inicia el efecto de desplazamiento del título (Marquee)
 * Se activa solo cuando la pestaña no está activa (mejor UX).
 * * @param {string} originalTitle - El título base de la página (ej: "Mi Sitio Web").
 * @param {number} speed - La velocidad de actualización del marco (ms).
 */
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
        if (document.visibilityState === 'hidden') {
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
    if (document.visibilityState === 'hidden') {
        animationInterval = setInterval(animateTitle, speed);
    }
    
    // Escucha los cambios de visibilidad
    document.addEventListener('visibilitychange', handleVisibilityChange);
}


// 🚨 EJECUCIÓN 🚨
document.addEventListener('DOMContentLoaded', () => {
    // Usamos el título que Astro ya ha renderizado en el <head>
    const title = document.title;
    
    // NOTA: Si quieres que el título se mueva SIEMPRE, llama a startTitleMarquee(title, 200) aquí sin la lógica de visibilitychange.
    startTitleMarquee(title, 600); 
});