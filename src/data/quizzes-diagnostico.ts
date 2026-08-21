import type { QuizMeta } from "./quiz-types";

export const diagnosticoQuizzes: QuizMeta[] = [
  // ==========================================
  // QUIZ: SAN BAO (LOS TRES TESOROS)
  // Basado exclusivamente en el PDF "Anmo diagnóstico I SAN BAO JA 2026.pdf"
  // ==========================================
  {
    id: "sanbao",
    category: "diagnostico",
    title: "Diagnostico Chino - Clase 1 - Los Tres Tesoros (Sānbǎo)",
    description: "Jīng, Qì y Shén en Medicina Tradicional China según el material de clase.",
    questions: [
      // ========== 1. DEFINICIÓN GENERAL DE LOS TRES TESOROS ==========
      {
        text: "Según la cosmovisión China, ¿cuáles son los tres elementos constitutivos (Sānbǎo)?",
        options: [
          "Cuerpo, mente y emociones separadas",
          "Shén (Cielo/Espíritu), Qì (Humanidad/Energía), Jīng (Tierra/Esencia)",
          "Yīn, Yáng y energía universal",
          "Sangre, fluidos y órganos internos",
        ],
        correct: 1,
      },
      {
        text: "Según la cita del PDF, ¿qué ocurre si uno de los Tres Tesoros se desbalancea?",
        options: [
          "Solo se afecta el aspecto emocional",
          "Los tres son dañados",
          "El cuerpo se adapta automáticamente",
          "Solo se afecta el aspecto físico",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué determina el grado con el que protejamos los Tres Tesoros?",
        options: [
          "Nuestra profesión",
          "Nuestro estado de salud y la duración de nuestra vida",
          "Nuestro nivel educativo",
          "Nuestra situación económica",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué sufren aquellos que derrochan y abusan de los Tres Tesoros?",
        options: [
          "Solo problemas económicos",
          "La pobreza de la enfermedad crónica y la muerte prematura",
          "Problemas sociales",
          "Dificultades laborales",
        ],
        correct: 1,
      },

      // ========== 2. JĪNG (ESENCIA) ==========
      {
        text: "¿Qué representa el Jīng (Jing) según el PDF?",
        options: [
          "Solo la energía inmaterial",
          "La estructura física del cuerpo humano (lo tangible) y la capacidad motriz",
          "Únicamente los órganos reproductores",
          "La conciencia y el pensamiento",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se almacena el Jīng después del nacimiento según el PDF?",
        options: [
          "En el corazón",
          "En el sistema del riñón (órganos reproductores, glándulas suprarrenales y riñones)",
          "En el hígado",
          "En los pulmones",
        ],
        correct: 1,
      },
      {
        text: "¿En qué zona del cuerpo se localiza el 'Bajo Tantién' o 'Centro del Elixir' donde reside la vitalidad (Jīng)?",
        options: [
          "En el centro del pecho",
          "Alrededor de seis centímetros bajo y detrás del ombligo",
          "En la cabeza, detrás del entrecejo",
          "En la nuca",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál de las siguientes NO es una forma de expresión del Jīng según el PDF?",
        options: [
          "El instinto de preservación de la especie (defensa y pulsión sexual)",
          "La fuerza para crecer y desarrollarse",
          "El pensamiento analítico y la reflexión",
          "Las funciones autónomas que mantienen la vida y la regulación del medio interno",
        ],
        correct: 2,
      },
      {
        text: "Según el PDF, el Jīng prenatal se caracteriza por ser:",
        options: [
          "Ilimitado y renovable mediante la respiración",
          "La esencia heredada de nuestros padres, almacenada en los riñones",
          "Proveniente únicamente de los alimentos",
          "Una energía que se regenera con el ejercicio",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina la 'puerta del fuego de la vida' según el PDF?",
        options: ["Shanzhong", "Mìngmén", "Yintang", "Dantian superior"],
        correct: 1,
      },
      {
        text: "¿De dónde proviene el Jīng postnatal (adquirido) según el PDF?",
        options: [
          "Exclusivamente de la herencia genética",
          "De los alimentos y la respiración, extraído por el Bazo y el Estómago",
          "De la meditación profunda",
          "De la energía solar",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuáles son las causas de deficiencia o desequilibrio del Jīng?",
        options: [
          "Solo la mala nutrición",
          "La deficiencia o desequilibrio heredado, los malos hábitos, la mala nutrición y los excesos",
          "Únicamente el exceso de ejercicio",
          "Solo los problemas emocionales",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué tipo de lesiones físicas se asocian especialmente con afecciones del Jīng?",
        options: [
          "Lesiones de rodillas y codos",
          "Lesiones de cadera o de hombros",
          "Lesiones de muñecas y tobillos",
          "Lesiones de cuello",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué tipo de enfermedades afectan la esencia, especialmente del sistema de los riñones?",
        options: [
          "Enfermedades agudas leves",
          "Enfermedades crónicas",
          "Enfermedades respiratorias estacionales",
          "Enfermedades de la piel",
        ],
        correct: 1,
      },

      // ========== 3. QÌ (ENERGÍA) ==========
      {
        text: "Según el PDF, ¿qué es el Qì?",
        options: [
          "Solo la respiración",
          "La fuerza primordial de la vida que recarga cada célula y tejido y activa sus funciones vitales",
          "Únicamente la energía de los alimentos",
          "La energía eléctrica del cuerpo",
        ],
        correct: 1,
      },
      {
        text: "Según la filosofía China, ¿qué constituye el Qì?",
        options: [
          "Solo el cuerpo humano",
          "La sustancia fundamental que constituye todo el universo, que da vida y forma a todo lo que existe",
          "Exclusivamente el aire que respiramos",
          "Únicamente los alimentos que ingerimos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿de qué es responsable el Qì en la teoría del San Bao?",
        options: [
          "De la parte espiritual",
          "De la parte fisiológica, el metabolismo y todos los procesos de funcionamiento orgánico",
          "De la estructura física únicamente",
          "De las emociones exclusivamente",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿dónde reside el Qì?",
        options: [
          "En el Bajo Tantién",
          "En el medio Tantién y en el punto Shanzhong (Ren-17), en el centro del pecho",
          "En el Tantién superior",
          "En los riñones",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué función tiene el Qì respecto a la sangre y los líquidos orgánicos?",
        options: [
          "Los detiene",
          "Los mueve y hace circular",
          "Los elimina del cuerpo",
          "Los transforma en hueso",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Zōng Qì (宗气) se forma a partir de:",
        options: [
          "Solo la respiración",
          "La transformación de los alimentos (Bazo-Estómago) y la respiración (Pulmón)",
          "Exclusivamente de la esencia heredada",
          "Únicamente de la meditación",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Yuán Qì (元气) o Qì prenatal proviene de:",
        options: [
          "Los alimentos",
          "El cielo anterior (Jīng, Riñón)",
          "La respiración",
          "La transformación del Bazo",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué es el Zhēn Qì (Zheng Qi)?",
        options: [
          "El Qì de los alimentos",
          "La identidad inmunológica, formada por la transformación de energías exteriores",
          "El Qì de la respiración",
          "El Qì del corazón",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué patologías se asocian al Qì?",
        options: [
          "Solo problemas digestivos",
          "Cansancio, agotamiento, dolor (por estancamiento de Qì), y trastornos de articulaciones de rodillas y codos",
          "Exclusivamente enfermedades de la piel",
          "Solo problemas respiratorios",
        ],
        correct: 1,
      },

      // ========== 4. SHÉN (ESPÍRITU/CONCIENCIA) ==========
      {
        text: "Según el PDF, ¿qué abarca el Shén?",
        options: [
          "Solo el pensamiento",
          "Todos los aspectos de la mente: conciencia, conocimiento, pensamiento, sentimiento, voluntad y empeño",
          "Exclusivamente las emociones",
          "Únicamente la voluntad",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿de qué es responsable el Shén?",
        options: [
          "De la estructura física",
          "De la expresión de la mente y las emociones",
          "De la digestión",
          "De la respiración",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se ubica el Shén según el PDF?",
        options: [
          "En el Bajo Tantién",
          "En el Tantién superior, detrás del punto Yintang (entrecejo)",
          "En el centro del pecho",
          "En los riñones",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el área entre los puntos Du 20 (Bahui), Du 16 (FengFu) y Yintang corresponde a:",
        options: [
          "La ubicación del Jīng",
          "La ubicación del Shén",
          "La ubicación del Qì",
          "La ubicación de la sangre",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuál es la primera función de los órganos macizos (Zang)?",
        options: [
          "Digestión de alimentos",
          "Almacenar la porción del alma que les corresponde",
          "Filtrar la sangre",
          "Producir calor corporal",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué aspecto del Shén corresponde al Corazón?",
        options: ["Hún", "Pò", "Shén", "Zhì"],
        correct: 2,
      },
      {
        text: "Según el PDF, ¿qué aspecto del Shén corresponde al Hígado y se relaciona con el sueño y las emociones?",
        options: ["Shén", "Hún", "Pò", "Yì"],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué aspecto del Shén se relaciona con la infancia, el llanto y la respiración?",
        options: ["Hún", "Pò", "Yì", "Zhì"],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué aspecto del Shén se relaciona con el pensamiento, la memoria a corto plazo y la generación de ideas?",
        options: ["Shén", "Hún", "Pò", "Yì"],
        correct: 3,
      },
      {
        text: "Según el PDF, ¿qué aspecto del Shén se relaciona con la voluntad, la fuerza y la perseverancia?",
        options: ["Hún", "Pò", "Yì", "Zhì"],
        correct: 3,
      },
      {
        text: "Según el PDF, ¿qué manifestaciones patológicas se asocian al Shén?",
        options: [
          "Solo dolores físicos",
          "Alteraciones emocionales (preocupación, ansiedad, enojo, pánicos, miedos) y manifestaciones físicas como impotencia sexual, úlcera gástrica o lesiones dérmicas",
          "Exclusivamente problemas digestivos",
          "Solo alteraciones del sueño",
        ],
        correct: 1,
      },

      // ========== 5. INTERRELACIONES ENTRE JĪNG, QÌ Y SHÉN ==========
      {
        text: "Según el PDF, ¿cómo se relacionan el Jīng, el Qì y el Shén?",
        options: [
          "Son completamente independientes",
          "Son indisociables; sin Shén la vida no se manifiesta; Jīng es indispensable para la presencia del Shén; Qì es necesario para producir y mantener el Shén",
          "El Qì es más importante que los demás",
          "El Jīng no tiene relación con el Shén",
        ],
        correct: 1,
      },
      {
        text: "Según el principio taoísta citado en el PDF, ¿qué ocurre con la transformación del Jīng?",
        options: [
          "El Jīng se convierte en Qì",
          "La transformación del Jīng hace el Shén (Jing Hua Wei Shen)",
          "El Jīng se convierte en sangre",
          "El Jīng se elimina del cuerpo",
        ],
        correct: 1,
      },
    ],
  },

  // ==========================================
  // QUIZ: YIN-YANG (DIAGNÓSTICO - CLASE 1 Y 2)
  // Basado en el PDF "DIAGN 1 CLASE 1 Y 2 YIN YANG 2024 JA.pdf"
  // ==========================================
  {
    id: "yin-yang",
    category: "diagnostico",
    title: "Diagnóstico Chino - Clases 1 y 2 - Yin-Yang",
    description:
      "Fundamentos de la teoría del Yin-Yang en Medicina Tradicional China según el material de clase.",
    questions: [
      // ========== 1. CONCEPTO GENERAL ==========
      {
        text: "Según el Nei Jing (Ilza Veith), ¿cómo fueron creados el Cielo y la Tierra?",
        options: [
          "El Cielo como acumulación de Yin; la Tierra como acumulación de Yang",
          "El Cielo como acumulación de Yang; la Tierra como acumulación de Yin",
          "Ambos como acumulación de Qi",
          "Ambos como acumulación de los Cinco Elementos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué son el Agua y el Fuego en la teoría del Yin-Yang?",
        options: [
          "Los elementos que crean la vida",
          "Los símbolos del Yin y del Yang",
          "Los representantes de la Tierra y el Cielo",
          "Los orígenes de la enfermedad",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué constituye la fuente de la energía y el origen de todas las cosas en la creación?",
        options: [
          "El Cielo y la Tierra",
          "El Yin y el Yang",
          "El Qi y la Sangre",
          "Los Cinco Elementos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿a qué se reducen finalmente toda la fisiología, patología y tratamiento de la Medicina China?",
        options: [
          "A los Cinco Elementos",
          "A Yin-Yang",
          "A los Tres Tesoros",
          "A la teoría de los meridianos",
        ],
        correct: 1,
      },
      {
        text: "Según el Suwen, ¿qué son Yin y Yang?",
        options: [
          "Solo dos fuerzas opuestas",
          "La ley del Cielo y la Tierra, el perfil del Todo, padres del cambio, el origen del nacimiento y la destrucción",
          "Un concepto exclusivo de la farmacología china",
          "Una teoría sin aplicación clínica",
        ],
        correct: 1,
      },

      // ========== 2. ORIGEN DE LOS CARACTERES ==========
      {
        text: "¿Con qué están relacionados los caracteres chinos para 'Yin' y 'Yang'?",
        options: [
          "Con el día y la noche",
          "Con el lado oscuro (Yin) y soleado (Yang) de una colina",
          "Con el fuego y el agua",
          "Con el norte y el sur",
        ],
        correct: 1,
      },
      {
        text: "Por extensión, ¿qué indican los caracteres de Yin y Yang?",
        options: [
          "Yin es luz y Yang es oscuridad",
          "Yin es sombrío y oscuridad; Yang es luz y brillante",
          "Ambos representan la claridad",
          "Ambos representan la oscuridad",
        ],
        correct: 1,
      },

      // ========== 3. OPOSICIÓN Y COMPLEMENTARIEDAD ==========
      {
        text: "Según el PDF, ¿qué representan Yin y Yang?",
        options: [
          "Fuerzas independientes sin relación",
          "Cualidades opuestas y complementarias de un todo",
          "Dos aspectos que nunca se mezclan",
          "Elementos fijos e inmutables",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué sostiene la teoría del Yin y el Yang sobre el universo?",
        options: [
          "Que el universo es caótico",
          "Que el universo es una integridad material que resulta de la mutua oposición y unidad entre el Yin y el Yang",
          "Que el universo está compuesto por partes independientes",
          "Que el universo no tiene relación con el ser humano",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuál de las siguientes correspondencias es CORRECTA?",
        options: [
          "Yang → Oscuridad, Yin → Luz",
          "Yang → Luz, Yin → Oscuridad",
          "Yang → Tierra, Yin → Cielo",
          "Yang → Descanso, Yin → Actividad",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuál de las siguientes correspondencias es CORRECTA?",
        options: [
          "Yang → Tiempo, Yin → Espacio",
          "Yang → Espacio, Yin → Tiempo",
          "Yang → Plano, Yin → Circular",
          "Yang → Derecha, Yin → Izquierda",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, ¿cuál de las siguientes correspondencias es CORRECTA?",
        options: [
          "Yang → Inmaterial, Yin → Material",
          "Yang → Material, Yin → Inmaterial",
          "Yang → Sustancial, Yin → No sustancial",
          "Yang → Produce forma, Yin → Produce energía",
        ],
        correct: 0,
      },

      // ========== 4. YIN-YANG Y EL TIEMPO ==========
      {
        text: "Según el PDF, ¿qué son esencialmente Yin y Yang?",
        options: [
          "Dos fuerzas estáticas",
          "Una expresión de una dualidad en el tiempo, una alternancia de dos etapas opuestas en el tiempo",
          "Dos aspectos que no cambian",
          "Un concepto exclusivamente espacial",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué es la fuerza motriz del cambio y desarrollo de todo fenómeno en el universo?",
        options: [
          "La gravedad",
          "La alternancia de Yin y Yang",
          "La energía solar",
          "El movimiento de los planetas",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el amanecer-Primavera pertenece a:",
        options: ["Yin", "Yang", "Neutro", "Ambos por igual"],
        correct: 1,
      },
      {
        text: "Según el PDF, el ocaso-Otoño pertenece a:",
        options: ["Yang", "Yin", "Neutro", "Ambos por igual"],
        correct: 1,
      },

      // ========== 5. ETAPAS DE TRANSFORMACIÓN ==========
      {
        text: "Según el PDF, ¿qué representan Yin y Yang en el proceso de transformación?",
        options: [
          "Dos etapas fijas sin cambio",
          "Dos etapas de un proceso de cambio y transformación de todas las cosas en el universo",
          "Solo el inicio y el final de la vida",
          "Exclusivamente las estaciones del año",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Yang se caracteriza por:",
        options: ["Contracción", "Descenso", "Expansión y elevación", "Materialidad"],
        correct: 2,
      },
      {
        text: "Según el PDF, el Yin se caracteriza por:",
        options: ["Expansión", "Elevación", "Contracción y descenso", "Inmaterialidad"],
        correct: 2,
      },

      // ========== 6. TAI CHI ==========
      {
        text: "Según el PDF, ¿qué representa el Tai Chi?",
        options: [
          "El equilibrio perfecto",
          "El origen de todo (el Uno) del cual nacen Yin y Yang",
          "La ausencia de movimiento",
          "El fin del ciclo vital",
        ],
        correct: 1,
      },
      {
        text: "Según la cita de Lao Tze en el PDF: 'El Dao genera el Uno, el Uno genera el Dos, el Dos genera el Tres, el Tres genera...'",
        options: ["La armonía", "La vida", "Las diez mil cosas", "El equilibrio"],
        correct: 2,
      },

      // ========== 7. LOS 4 ASPECTOS DE LA DINÁMICA DEL YIN-YANG ==========
      {
        text: "Según el PDF, ¿cuáles son los cuatro aspectos de la dinámica del Yin-Yang?",
        options: [
          "Oposición, Interdependencia, Consumo Mutuo, Transformación",
          "Creación, Desarrollo, Decadencia, Renovación",
          "Calor, Frío, Humedad, Sequedad",
          "Nacimiento, Crecimiento, Madurez, Muerte",
        ],
        correct: 0,
      },

      // ========== 8. OPOSICIÓN ==========
      {
        text: "Según el PDF, ¿qué constituye la fuerza motriz de todos los cambios, desarrollo y decadencia de las cosas?",
        options: [
          "El tiempo",
          "La contradicción interna (oposición)",
          "La energía externa",
          "El destino",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cómo es la oposición de Yin-Yang?",
        options: [
          "Absoluta y fija",
          "Relativa, ya que nada es totalmente Yin o Yang y todas las cosas contienen el germen de su opuesto",
          "Inexistente en la naturaleza",
          "Exclusivamente matemática",
        ],
        correct: 1,
      },

      // ========== 9. INTERDEPENDENCIA ==========
      {
        text: "Según el PDF, ¿qué afirma la interdependencia de Yin y Yang?",
        options: [
          "Que uno es más importante que el otro",
          "Que uno no puede existir sin el otro",
          "Que son completamente independientes",
          "Que solo existen en el cuerpo humano",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuál es un punto clave de la interdependencia?",
        options: [
          "Yang es eterno, Yin es temporal",
          "Yang contiene el germen de Yin y viceversa",
          "Solo Yin puede transformarse",
          "Solo Yang puede transformarse",
        ],
        correct: 1,
      },

      // ========== 10. CONSUMO MUTUO ==========
      {
        text: "Según el PDF, ¿cómo se mantiene el equilibrio dinámico entre Yin y Yang?",
        options: [
          "Por un ajuste anual",
          "Por un continuo ajuste de los niveles relativos de Yin y Yang",
          "Por la intervención externa",
          "Por el reposo absoluto",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué tipo de cambio es el consumo mutuo?",
        options: [
          "Un cambio cualitativo",
          "Un cambio cuantitativo (cuando uno sube, el otro baja en cantidad)",
          "Un cambio repentino",
          "Un cambio irreversible",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué ocurre cuando el Yin o el Yang aumentan más allá de su límite normal?",
        options: [
          "El cuerpo se fortalece",
          "Conducen al consumo de su cualidad opuesta",
          "Se produce una curación espontánea",
          "No ocurre nada",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuáles son los cuatro posibles estados de desequilibrio de Yin y Yang?",
        options: [
          "Predominio del Yin, Predominio del Yang, Debilidad del Yin, Debilidad del Yang",
          "Exceso de Qi, Deficiencia de Xue, Calor interno, Frío externo",
          "Alta energía, Baja energía, Exceso emocional, Deficiencia física",
          "Desarmonía del Hígado, Estancamiento del Bazo, Sequedad del Pulmón, Calor del Corazón",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, ¿qué ocurre si el Yin se consume?",
        options: [
          "El Yang también se consume",
          "El Yang se incrementa",
          "Ambos permanecen igual",
          "Se produce una enfermedad leve",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en sentido fisiológico, el consumo mutuo de Yin y Yang es:",
        options: [
          "Un proceso patológico",
          "Un proceso normal que mantiene el equilibrio de las funciones fisiológicas",
          "Un signo de enfermedad grave",
          "Un fenómeno exclusivo de la vejez",
        ],
        correct: 1,
      },

      // ========== 11. INTERTRANSFORMACIÓN ==========
      {
        text: "Según el PDF, ¿qué tipo de cambio es la inter-transformación de Yin en Yang?",
        options: [
          "Un cambio cuantitativo",
          "Un cambio cualitativo (uno pasa a lo opuesto en un momento dado)",
          "Un cambio reversible",
          "Un cambio sin importancia",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿la transformación de Yin en Yang ocurre al azar?",
        options: [
          "Sí, es completamente aleatoria",
          "No, está determinada por la etapa de desarrollo y las condiciones internas",
          "Sí, depende del clima",
          "No, nunca ocurre realmente",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuáles son las DOS condiciones para la transformación de Yin en Yang y viceversa?",
        options: [
          "La edad y el género",
          "Las condiciones internas (causas internas) y el factor tiempo (etapa de desarrollo madura)",
          "La alimentación y el ejercicio",
          "El clima y la ubicación geográfica",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué ejemplifica la segunda condición para la transformación?",
        options: [
          "El agua que hierve",
          "El pollo que sale del huevo cuando ha transcurrido el tiempo suficiente",
          "La luna que crece",
          "El árbol que da frutos",
        ],
        correct: 1,
      },

      // ========== 12. YIN-YANG EN LA ESTRUCTURA DEL CUERPO ==========
      {
        text: "Según el PDF, en la estructura del cuerpo, ¿qué corresponde a Yin y a Yang?",
        options: [
          "Superior → Yang, Inferior → Yin",
          "Superior → Yin, Inferior → Yang",
          "Ambos son Yang",
          "Ambos son Yin",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, en la estructura del cuerpo, la relación Anterior-Posterior corresponde a:",
        options: [
          "Anterior → Yin, Posterior → Yang",
          "Anterior → Yang, Posterior → Yin",
          "Ambos son Yin",
          "Ambos son Yang",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en la estructura del cuerpo, la relación Lateral-Medial corresponde a:",
        options: [
          "Lateral → Yin, Medial → Yang",
          "Lateral → Yang, Medial → Yin",
          "Ambos son Yin",
          "Ambos son Yang",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en la estructura del cuerpo, la relación Exterior-Interior corresponde a:",
        options: [
          "Exterior → Yin, Interior → Yang",
          "Exterior → Yang, Interior → Yin",
          "Ambos son Yang",
          "Ambos son Yin",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en la estructura del cuerpo, la relación Órganos Macizos (Zang) - Órganos Huecos (Fu) corresponde a:",
        options: [
          "Zang → Yang, Fu → Yin",
          "Zang → Yin, Fu → Yang",
          "Ambos son Yang",
          "Ambos son Yin",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, la relación Función-Nutrición corresponde a:",
        options: [
          "Función → Yin, Nutrición → Yang",
          "Función → Yang, Nutrición → Yin",
          "Ambos son Yin",
          "Ambos son Yang",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, la relación Qi y Xue (Sangre) corresponde a:",
        options: [
          "Qi → Yin, Xue → Yang",
          "Qi → Yang, Xue → Yin",
          "Ambos son Yang",
          "Ambos son Yin",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Qi genera a la Sangre y la Sangre es:",
        options: ["El hijo del Qi", "La madre del Qi", "El enemigo del Qi", "Independiente del Qi"],
        correct: 1,
      },

      // ========== 13. EJE AGUA-FUEGO ==========
      {
        text: "Según el PDF, ¿qué representa el eje Agua-Fuego en la teoría del Yin-Yang?",
        options: [
          "La base de la digestión",
          "El símbolo de la relación entre Yin (Agua) y Yang (Fuego)",
          "La causa de las enfermedades",
          "El origen de los meridianos",
        ],
        correct: 1,
      },
    ],
  },

  // ==========================================
  // QUIZ: SUSTANCIAS FUNDAMENTALES (CLASE 5)
  // Basado en "DIAGNÓSTICO I sustancias ftales JA 2026.pdf"
  // ==========================================
  {
    id: "sustancias-fundamentales",
    category: "diagnostico",
    title: "Diagnóstico I - Clase 5 - Sustancias Fundamentales",
    description:
      "Qi, Xue (Sangre) y Jin Ye (Líquidos Orgánicos) en Medicina Tradicional China según el material de clase.",
    questions: [
      // ========== YUAN QI ==========
      {
        text: "Según el PDF, ¿qué es el Yuán Qì?",
        options: [
          "El Qi que proviene exclusivamente de los alimentos",
          "El Qi más importante, básico e individual, ligado al Jīng (Esencia), es Esencia transformada en Qi",
          "El Qi que circula por la superficie del cuerpo",
          "El Qi que se forma en el pecho",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Yuán Qì se origina de:",
        options: [
          "Solo del Jīng adquirido (alimentos)",
          "Del Jīng innato (herencia de los padres), se mantiene por el Jīng adquirido y por el Qi puro (Qing Qi) del aire",
          "Exclusivamente de la respiración",
          "Únicamente del Bazo y el Estómago",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿dónde se forma el Yuán Qì?",
        options: [
          "En el Jiao Superior",
          "En el Jiao Inferior gracias a la acción del Riñón y del Mìng Mén",
          "En el Jiao Medio",
          "En el corazón",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuál es la misión del Yuán Qì?",
        options: [
          "Solo digerir los alimentos",
          "Estimular e impulsar la actividad funcional de los Zang-Fu y del resto de las estructuras del organismo",
          "Exclusivamente calentar el cuerpo",
          "Únicamente proteger contra agentes patógenos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué marca la abundancia y el decrecimiento del Yuán Qì?",
        options: [
          "Las estaciones del año",
          "Las fases de crecimiento, desarrollo, madurez y envejecimiento del ser humano",
          "La cantidad de alimentos ingeridos",
          "La actividad física diaria",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿de qué depende la cualidad y cantidad del Yuán Qì?",
        options: [
          "Exclusivamente del ejercicio",
          "De la herencia (cualidad y cantidad) y de su mantenimiento del modo de vida",
          "Solo de los alimentos",
          "Únicamente de la edad",
        ],
        correct: 1,
      },

      // ========== ZONG QI ==========
      {
        text: "Según el PDF, el Zōng Qì (Qi del Pecho) se forma a partir de:",
        options: [
          "Solo los alimentos",
          "La transformación de los alimentos (Bazo-Estómago) y la respiración (Pulmón)",
          "Exclusivamente de la esencia heredada",
          "Únicamente de la respiración",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cuáles son las funciones del Zōng Qì?",
        options: [
          "Solo la digestión",
          "Alimenta al corazón y al pulmón; activa los pulmones para controlar la respiración y al corazón para gobernar los vasos sanguíneos",
          "Exclusivamente proteger la piel",
          "Únicamente calentar el cuerpo",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Zōng Qì tiene relación con:",
        options: ["El movimiento de los brazos", "La voz y la palabra", "La digestión", "La vista"],
        correct: 1,
      },

      // ========== YING QI ==========
      {
        text: "Según el PDF, el Yíng Qì (Qi Nutritivo) es:",
        options: [
          "El Qi que circula por la superficie",
          "La sustancia nutritiva de la energía alimenticia, producto de los alimentos procesados por el Bazo-Estómago",
          "El Qi que se almacena en los riñones",
          "El Qi que protege contra los patógenos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿dónde circula el Yíng Qì?",
        options: [
          "Por la superficie de la piel",
          "A través de los vasos junto con la sangre para nutrir todo el cuerpo",
          "Solo en el intestino",
          "Exclusivamente en el cerebro",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿cómo se denomina la relación entre el Yíng Qì y la Sangre?",
        options: [
          "Qi y Xue son opuestos",
          "Ying Xue (Sangre Nutritiva)",
          "Qi y Xue no se relacionan",
          "Xue es madre del Qi",
        ],
        correct: 1,
      },

      // ========== FUNCIONES GENERALES DEL QI ==========
      {
        text: "Según el PDF, ¿cuál de las siguientes es una función general del Qi?",
        options: [
          "Impulso (Tui Dong)",
          "Calentamiento (Wen Xu)",
          "Protección (Fang Yu)",
          "Todas las anteriores",
        ],
        correct: 3,
      },
      {
        text: "Según el PDF, ¿qué función del Qi se manifiesta en la activación de las funciones de crecimiento, desarrollo y estimulación de las Vísceras?",
        options: ["Calentamiento", "Protección", "Impulso (Tui Dong)", "Control (Gu She)"],
        correct: 2,
      },
      {
        text: "Según el PDF, cuando la función de Impulso (Tui Dong) del Qi está en disfunción, ¿qué puede ocurrir?",
        options: [
          "Retraso del crecimiento",
          "Hipofunciones diversas",
          "Trastornos de circulación de la Sangre y Líquidos",
          "Todas las anteriores",
        ],
        correct: 3,
      },
      {
        text: "Según el PDF, ¿qué función del Qi es responsable del mantenimiento de la temperatura corporal?",
        options: ["Impulso", "Protección", "Calentamiento (Wen Xu)", "Control"],
        correct: 2,
      },
      {
        text: "Según el PDF, cuando la función de Calentamiento (Wen Xu) está en disfunción, ¿qué aparece?",
        options: [
          "Fiebre",
          "Disminución de la temperatura corporal, miedo al frío, extremidades frías",
          "Sudoración excesiva",
          "Dolor",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué función del Qi expresa la capacidad de resistir a la penetración de energías patógenas?",
        options: ["Impulso", "Calentamiento", "Protección (Fang Yu)", "Transformación"],
        correct: 2,
      },
      {
        text: "Según el PDF, cuando la función de Protección (Fang Yu) está en disfunción, ¿qué ocurre?",
        options: [
          "Baja de defensas inmunológicas, vulnerabilidad a agentes patógenos",
          "Extremidades frías",
          "Retraso del crecimiento",
          "Hemorragias",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, ¿qué función del Qi permite contener la Sangre, los Líquidos orgánicos, el Jing y las Vísceras en sus lugares?",
        options: ["Impulso", "Control (Gu She)", "Transformación", "Protección"],
        correct: 1,
      },
      {
        text: "Según el PDF, cuando la función de Control (Gu She) está en disfunción, ¿qué puede ocurrir?",
        options: [
          "Extravasación sanguínea y hemorragias",
          "Incontinencia de orina",
          "Prolapsos y abortos naturales",
          "Todas las anteriores",
        ],
        correct: 3,
      },
      {
        text: "Según el PDF, ¿qué función del Qi permite la producción de sustratos vitales y la eliminación de residuos?",
        options: ["Impulso", "Protección", "Transformación del Qi (Qi Hua)", "Calentamiento"],
        correct: 2,
      },
      {
        text: "Según el PDF, cuando la función de Transformación (Qi Hua) está en disfunción, ¿qué aparece?",
        options: [
          "Trastornos de la digestión y asimilación",
          "Trastornos de producción de Qi, Sangre o Líquidos",
          "Trastornos de excreción",
          "Todas las anteriores",
        ],
        correct: 3,
      },

      // ========== XUE (SANGRE) ==========
      {
        text: "Según el PDF, ¿qué representa el ideograma de Xue (Sangre)?",
        options: [
          "Un río que fluye",
          "Un receptáculo ceremonial lleno de sangre utilizado en ritos y ofrendas",
          "El corazón y los vasos",
          "El color rojo de la vida",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿de qué naturaleza es la Sangre en relación con el Qi?",
        options: ["Yang", "Yin", "Neutra", "No tiene relación"],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué órgano es el encargado de impulsar la Sangre para que circule por los vasos?",
        options: ["Hígado", "Bazo", "Corazón", "Pulmón"],
        correct: 2,
      },
      {
        text: "Según el PDF, ¿qué órgano tiene la misión de contener la Sangre dentro de los vasos evitando que se extravase?",
        options: ["Hígado", "Bazo", "Pulmón", "Riñón"],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué órgano actúa sobre la Sangre asegurando la circulación libre de obstáculos del Qi y distribuyéndola según las necesidades?",
        options: ["Corazón", "Pulmón", "Hígado", "Bazo"],
        correct: 2,
      },

      // ========== RELACIÓN QI - XUE ==========
      {
        text: "Según el PDF, ¿cuál es la afirmación CORRECTA sobre la relación entre Qi y Sangre?",
        options: [
          "La Sangre mueve al Qi",
          "El Qi mueve la Sangre",
          "Qi y Sangre son independientes",
          "La Sangre controla al Qi",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué ocurre cuando el Qi se estanca?",
        options: [
          "La Sangre se vuelve más fluida",
          "La Sangre se coagula",
          "La Sangre desaparece",
          "La Sangre se enfría",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, 'El Qi es el comandante de la Sangre' significa que:",
        options: [
          "El Qi obedece a la Sangre",
          "El Qi genera, contiene y mueve a la Sangre",
          "La Sangre es más importante que el Qi",
          "El Qi y la Sangre no se relacionan",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué función tiene la Sangre respecto al Qi?",
        options: [
          "La Sangre mata al Qi",
          "La Sangre nutre al Qi y provee base material para que no flote",
          "La Sangre no tiene relación con el Qi",
          "La Sangre calienta al Qi",
        ],
        correct: 1,
      },

      // ========== FUNCIONES DE XUE ==========
      {
        text: "Según el PDF, ¿cuáles son las funciones de la Sangre (Xue)?",
        options: [
          "Nutrición de todo el organismo",
          "Base material del Shén",
          "Humectante (asegura que los tejidos no se sequen)",
          "Todas las anteriores",
        ],
        correct: 3,
      },
      {
        text: "Según el PDF, ¿qué es la Sangre para el Shén (espíritu/mente)?",
        options: [
          "No tiene relación",
          "Es el apoyo material del Shén",
          "Es el enemigo del Shén",
          "Es superior al Shén",
        ],
        correct: 1,
      },

      // ========== JIN YE (LÍQUIDOS ORGÁNICOS) ==========
      {
        text: "Según el PDF, ¿cuál es la diferencia entre los fluidos Jin y Ye?",
        options: [
          "Jin son densos, Ye son ligeros",
          "Jin son ligeros, acuosos, humectan piel y músculos; Ye son densos, pesados, humectan el interior (cerebro, médula, articulaciones)",
          "No hay diferencia",
          "Jin son internos, Ye son externos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, los fluidos Jin (Jīng) circulan con el Wei Qi por:",
        options: [
          "Los vasos sanguíneos",
          "El espacio entre la piel y los músculos y sobre la piel",
          "El interior de los huesos",
          "El cerebro y la médula",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, los fluidos Ye humectan:",
        options: [
          "Solo la piel",
          "El interior del cuerpo, el cerebro, la médula (LCR) y las articulaciones (líquido sinovial)",
          "Solo los músculos",
          "Exclusivamente los orificios externos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, ¿qué relación tienen los Jin Ye con la Sangre?",
        options: [
          "Rellenan constantemente la Sangre y la hacen más fina para que no coagule o estanque",
          "Son opuestos a la Sangre",
          "Destruyen la Sangre",
          "No tienen relación",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, ¿qué relación tiene el Qi con los Jin Ye?",
        options: [
          "El Qi mantiene los Jin Ye en el interior",
          "Los Jin Ye nutren al Qi",
          "El Qi transforma y transporta los Jin Ye",
          "Todas las anteriores",
        ],
        correct: 3,
      },

      // ========== PATOLOGÍAS DEL QI ==========
      {
        text: "Según el PDF, la 'Inversión del Qi' (Qi Ni) se refiere a:",
        options: [
          "El Qi que no se mueve",
          "El Qi que asciende cuando debería descender o viceversa (Qi a contracorriente)",
          "El Qi que se escapa",
          "El Qi que no calienta",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el 'Vacío o deficiencia de Qi' se manifiesta como:",
        options: [
          "Exceso de energía",
          "Prolapso, astenia, diarrea",
          "Dolor hipocondríaco",
          "Fiebre alta",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el 'Estancamiento de Qi' se manifiesta como:",
        options: [
          "Frialdad en extremidades",
          "Dolor hipocondríaco, masas, presión en pecho y dolor epigástrico",
          "Sudoración excesiva",
          "Prolapso",
        ],
        correct: 1,
      },

      // ========== PATOLOGÍAS DE XUE ==========
      {
        text: "Según el PDF, la 'Deficiencia de Xue' se caracteriza por:",
        options: [
          "Sangre oscura con coágulos",
          "Sangre recalentada que se desborda",
          "Falta de glóbulos rojos, anemia",
          "Sangre brillante de expulsión violenta",
        ],
        correct: 2,
      },
      {
        text: "Según el PDF, el 'Calor en la Sangre' se manifiesta por:",
        options: [
          "Sangre fría estancada",
          "Sangre recalentada que circula anormalmente o se desborda en hemorragias",
          "Sangre pálida",
          "Sangre espesa",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, la 'Éxtasis o Congelamiento de Xue' se caracteriza por:",
        options: [
          "Sangre roja brillante",
          "Sangre aguada y pálida",
          "Sangre oscura (azul, bordó), con coágulos, con dolor",
          "Sangre en poca cantidad",
        ],
        correct: 2,
      },

      // ========== JIN YE: PATOLOGÍAS ==========
      {
        text: "Según el PDF, la insuficiencia de Jin Ye se caracteriza por:",
        options: [
          "Edema y quistes",
          "Sequedad de labios, boca, garganta y piel, sed, orinas concentradas, heces secas",
          "Flemas y mucosidades",
          "Diarreas crónicas",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el estancamiento de Jin Ye puede producir:",
        options: [
          "Sequedad de piel",
          "Edema, quistes, miomas, adherencias, tumores, flema y humedad",
          "Fiebre alta",
          "Sudoración excesiva",
        ],
        correct: 1,
      },
    ],
  },

  // ==========================================
  // QUIZ: CINCO MOVIMIENTOS (CLASE 1 Y 2)
  // Basado en "diagn 1 cinco movim clase 1 y 2 completas.pdf"
  // ==========================================
  {
    id: "cinco-movimientos",
    category: "diagnostico",
    title: "Diagnóstico I - Clases 1 y 2 - Cinco Movimientos (Wu Xing)",
    description:
      "Los Cinco Movimientos (Madera, Fuego, Tierra, Metal, Agua) en Medicina Tradicional China según el material de clase.",
    questions: [
      // ========== DEFINICIÓN GENERAL ==========
      {
        text: "Según el 'Shang Shu' (1000-771 aC), ¿cuáles son los Cinco Movimientos?",
        options: [
          "Cielo, Tierra, Hombre, Energía, Espíritu",
          "Agua, Fuego, Madera, Metal y Tierra",
          "Yin, Yang, Qi, Xue, Jin",
          "Corazón, Hígado, Bazo, Pulmón, Riñón",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, los Cinco Movimientos representan:",
        options: [
          "Solo los elementos materiales",
          "Diferentes cualidades, estados inherentes a los fenómenos naturales, fases de un ciclo y capacidades de cambio",
          "Exclusivamente los órganos del cuerpo",
          "Únicamente las estaciones del año",
        ],
        correct: 1,
      },

      // ========== CARACTERÍSTICAS DE CADA ELEMENTO ==========
      {
        text: "Según el PDF, el elemento que representa la expansión es:",
        options: ["Metal", "Madera", "Fuego", "Tierra"],
        correct: 1,
      },
      {
        text: "Según el PDF, las propiedades de la Madera son:",
        options: [
          "La contracción y la dureza",
          "El crecimiento, la flexibilidad, el impulso vital y el movimiento libre",
          "El descenso y la acumulación",
          "La producción y transformación",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el elemento que representa la contracción es:",
        options: ["Madera", "Fuego", "Metal", "Agua"],
        correct: 2,
      },
      {
        text: "Según el PDF, el elemento que representa lo descendente es:",
        options: ["Fuego", "Tierra", "Metal", "Agua"],
        correct: 3,
      },
      {
        text: "Según el PDF, el elemento que representa lo ascendente es:",
        options: ["Agua", "Madera", "Fuego", "Metal"],
        correct: 2,
      },
      {
        text: "Según el PDF, el elemento que representa la neutralidad o estabilidad es:",
        options: ["Madera", "Tierra", "Metal", "Agua"],
        correct: 1,
      },

      // ========== SABORES Y COLORES ==========
      {
        text: "Según el 'Shang Shu', ¿qué sabor corresponde al Agua?",
        options: ["Ácido", "Amargo", "Dulce", "Picante", "Salado"],
        correct: 4,
      },
      {
        text: "Según el PDF, ¿qué color corresponde al elemento Fuego?",
        options: ["Verde", "Rojo", "Amarillo", "Blanco", "Negro"],
        correct: 1,
      },

      // ========== CORRESPONDENCIAS CON EL CUERPO ==========
      {
        text: "Según el PDF, el órgano asociado al elemento Madera es:",
        options: ["Corazón", "Bazo", "Pulmón", "Hígado", "Riñón"],
        correct: 3,
      },
      {
        text: "Según el PDF, la entraña (Fu) asociada al elemento Fuego es:",
        options: [
          "Vesícula biliar",
          "Intestino delgado / Triple Recalentador",
          "Estómago",
          "Intestino grueso",
          "Vejiga",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, los Cinco Órganos de los Sentidos se relacionan con los elementos de la siguiente manera:",
        options: [
          "Madera→Ojos, Fuego→Lengua, Tierra→Boca, Metal→Nariz, Agua→Oídos",
          "Madera→Oídos, Fuego→Ojos, Tierra→Nariz, Metal→Boca, Agua→Lengua",
          "Madera→Nariz, Fuego→Boca, Tierra→Ojos, Metal→Oídos, Agua→Lengua",
        ],
        correct: 0,
      },

      // ========== ESTACIONES ==========
      {
        text: "Según el PDF, la Madera se corresponde con la estación de:",
        options: ["Verano", "Otoño", "Invierno", "Primavera", "Fin del verano"],
        correct: 3,
      },
      {
        text: "Según el PDF, el Fuego se corresponde con la estación de:",
        options: ["Primavera", "Otoño", "Verano", "Invierno"],
        correct: 2,
      },
      {
        text: "Según el PDF, la Tierra se corresponde con:",
        options: [
          "El inicio de cada estación",
          "El fin de una estación / final del verano",
          "El equinoccio",
          "El solsticio",
        ],
        correct: 1,
      },

      // ========== CICLO DE GENERACIÓN (SHENG) ==========
      {
        text: "Según el PDF, ¿cuál es el orden del ciclo de Generación (Sheng)?",
        options: [
          "Madera→Fuego→Tierra→Metal→Agua→Madera",
          "Madera→Tierra→Metal→Agua→Fuego→Madera",
          "Fuego→Madera→Agua→Metal→Tierra→Fuego",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, 'La Madera es la Hija del Agua y la Madre del Fuego' significa que:",
        options: [
          "El Agua controla a la Madera y la Madera controla al Fuego",
          "El Agua engendra a la Madera y la Madera engendra al Fuego (ciclo de Generación)",
          "La Madera es más importante que el Agua y el Fuego",
          "El Fuego y el Agua se equilibran con la Madera",
        ],
        correct: 1,
      },

      // ========== CICLO DE CONTROL (KE) ==========
      {
        text: "Según el PDF, ¿cuál es el orden del ciclo de Control (Ke)?",
        options: [
          "Madera→Tierra→Agua→Fuego→Metal→Madera",
          "Madera→Fuego→Tierra→Metal→Agua→Madera",
          "Madera→Metal→Fuego→Agua→Tierra→Madera",
        ],
        correct: 0,
      },
      {
        text: "Según el 'Su Wen', 'el Metal corta a la Madera' ejemplifica:",
        options: [
          "El ciclo de Generación",
          "El ciclo de Control (Ke)",
          "La relación madre-hijo",
          "La transformación de elementos",
        ],
        correct: 1,
      },

      // ========== FISIOLOGÍA ==========
      {
        text: "Según el PDF, en el ciclo de Generación, ¿por qué el Hígado es la madre del Corazón?",
        options: [
          "Porque el Hígado controla al Corazón",
          "Porque el Hígado almacena la Sangre y la Sangre alberga la Mente; si la Sangre del Hígado es débil, el Corazón sufrirá",
          "Porque el Hígado envía Qi al Corazón",
          "Porque ambos son órganos Yang",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en el ciclo de Control, el Hígado controla a:",
        options: ["El Corazón", "El Estómago y el Bazo", "Los Pulmones", "Los Riñones"],
        correct: 1,
      },
      {
        text: "Según el PDF, en el ciclo de Control, el Pulmón controla al Hígado porque:",
        options: [
          "El Pulmón envía el Qi hacia arriba y el Hígado hacia abajo",
          "El Pulmón envía el Qi hacia abajo mientras que el Hígado lo difunde hacia arriba; si el Qi del Pulmón es débil, el Qi del Hígado puede ascender demasiado",
          "El Pulmón es más fuerte que el Hígado",
          "Ambos están en el Jiao Superior",
        ],
        correct: 1,
      },

      // ========== PATOLOGÍAS ==========
      {
        text: "Según el PDF, la relación patológica de opresión o sobrecontrol (Cheng) se produce cuando:",
        options: [
          "El movimiento dominante está en deficiencia",
          "El movimiento dominante está en exceso, el dominado está en deficiencia o se combinan ambos",
          "El movimiento dominado está en exceso",
          "El movimiento dominado y el dominante están en equilibrio",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, la relación patológica de rebelión o ofensa (Wu) se considera la más grave y se produce cuando:",
        options: [
          "El movimiento dominador está en exceso",
          "El movimiento dominador está en deficiencia, el dominado está en exceso o se combinan ambas",
          "Ambos movimientos están en equilibrio",
          "El movimiento dominado está en deficiencia",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, 'la enfermedad de la madre alcanza al hijo' (Mu Bing Ji Zi) corresponde a:",
        options: [
          "Una patología por Plenitud del ciclo Sheng",
          "Una patología por Vacío del ciclo Sheng (la madre vacía fatiga al hijo)",
          "Una patología del ciclo Ke",
          "Un caso de opresión",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, 'la enfermedad del hijo se vuelve contra la madre' (Zi Bing Pan Mu) corresponde a:",
        options: [
          "Una patología por Vacío del ciclo Sheng",
          "Una patología por Plenitud del ciclo Sheng (el hijo roba el Qi de la madre)",
          "Una patología del ciclo Ke",
          "Un caso de rebelión",
        ],
        correct: 1,
      },

      // ========== BIOTIPOS ==========
      {
        text: "Según el PDF, una persona con afinidad por la Madera se caracteriza por:",
        options: [
          "Ser meticulosa y organizada",
          "Ser un inspirado buscador, no le asustan los desafíos, es creadora y de acción",
          "Ser estable, buena consejera",
          "Ser filosófica y reflexiva",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en su estado negativo, la persona Madera puede:",
        options: [
          "Caer en apatía y tristeza",
          "Tornarse en un tirano agresivo y hostil, con cólera y tendencia a alzar la voz",
          "Volverse obsesiva y rígida",
          "Caer en miedo y desesperación",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el sonido característico de la Madera es:",
        options: ["La risa", "El grito", "El canto", "El sollozo", "El suspiro"],
        correct: 1,
      },
      {
        text: "Según el PDF, una persona con afinidad por el Fuego se caracteriza por:",
        options: [
          "Ser fría y distante",
          "Ser expresiva, amante de compartir, inspiradora y centro de atención",
          "Ser reservada y analítica",
          "Ser meticulosa y organizada",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, en su estado negativo, la persona Fuego puede:",
        options: [
          "Caer en un desenfrenado éxtasis de impresiones, disipando sus energías ('quemando la vela por los dos lados')",
          "Volverse agresiva y hostil",
          "Caer en tristeza y melancolía",
          "Volverse rígida y perfeccionista",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, una persona con afinidad por la Tierra se caracteriza por:",
        options: [
          "Su capacidad de razonar, ser buena negociadora, leal y servicial, transmite solidez y estabilidad",
          "Ser inspirada y creadora",
          "Ser filosófica y reflexiva",
          "Ser expresiva y centro de atención",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, la principal causa de disturbios emocionales de las personas Tierra es:",
        options: [
          "La cólera",
          "La preocupación y el 'sobre-pensamiento' (rumia mental)",
          "El miedo",
          "La tristeza",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, una persona con afinidad por el Metal se caracteriza por:",
        options: [
          "Ser inspirada y creadora",
          "Promover la ecuanimidad, ser hábil en buscar el orden, buena diplomática y virtuosa",
          "Ser expresiva y amante de compartir",
          "Ser filosófica y reflexiva",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, cuando el elemento Metal está alterado, la persona:",
        options: [
          "Solloza continuamente, se torna pesimista y depresiva",
          "Grita y se vuelve agresiva",
          "Se ríe desenfrenadamente",
          "Cae en ataques de pánico",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, una persona con afinidad por el Agua se caracteriza por:",
        options: [
          "Ser inspirada y creadora",
          "Ser expresiva y centro de atención",
          "Ser filosófica, reflexiva, perceptiva, modesta, con gran imaginación",
          "Ser organizada y meticulosa",
        ],
        correct: 2,
      },
      {
        text: "Según el PDF, ¿cuál es la emoción más dañina para el elemento Agua?",
        options: ["La cólera", "El miedo", "La preocupación", "La tristeza"],
        correct: 1,
      },
    ],
  },

  // ==========================================
  // QUIZ: DISFUNCIONES DE SUSTANCIAS FUNDAMENTALES (CLASE 3)
  // Basado en "DISF SUST FTALES 2026.pdf"
  // ==========================================
  {
    id: "disfunciones-sustancias-fundamentales",
    category: "diagnostico",
    title: "Diagnóstico II - Clase 3 - Disfunciones de Sustancias Fundamentales",
    description:
      "Patologías del Qi, Xue (Sangre) y Jin Ye (Líquidos Orgánicos) en Medicina Tradicional China según el material de clase.",
    questions: [
      // ========== DISFUNCIONES DEL QI ==========
      {
        text: "Según el PDF, ¿cuáles son los tipos de disfunciones del Qi?",
        options: [
          "Qi insuficiente (vacío de qi), Estancamiento de qi, Qi a contracorriente, Caída del qi, Obstrucción y escape del qi",
          "Solo vacío y estancamiento",
          "Calor y frío del Qi",
          "Ascenso y descenso del Qi",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, la Deficiencia de Qi (Vacío de Qi) se produce por:",
        options: [
          "Exceso de actividad física",
          "Deficiencia congénita en Yuan Qi, insuficiencia de evolución del Qi, agotamiento por factores emocionales o exceso de actividad",
          "Solo por mala alimentación",
          "Exclusivamente por factores climáticos",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, las manifestaciones del Vacío de Qi incluyen:",
        options: [
          "Fiebre alta y agitación",
          "Astenia física y mental, debilidad de los miembros, vahídos, transpiración espontánea, degradación del sistema inmunológico",
          "Dolor agudo y opresivo",
          "Hemorragias profusas",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Estancamiento de Qi se produce por:",
        options: [
          "Excesos alimentarios",
          "Factores emocionales, mucosidades, humedad, estancamiento de alimentos o estasis de Sangre",
          "Solo por el frío",
          "Exclusivamente por el calor",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, las manifestaciones del Estancamiento de Qi incluyen:",
        options: [
          "Frialdad en extremidades",
          "Opresión y distensión (pecho, costillas, abdomen), dolores, depresión",
          "Hemorragias y prolapsos",
          "Tos y disnea",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, la Contracción del Qi (Qi Ni) se caracteriza por:",
        options: [
          "Pérdida del equilibrio de las funciones de ascenso (excesivo) y de descenso (alterado)",
          "Aumento de la velocidad del Qi",
          "Caída del Qi",
          "Estancamiento del Qi",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las manifestaciones de la Contracción del Qi (Qi Ni) incluyen:",
        options: [
          "Prolapso y diarrea",
          "Tos, disnea y asma, náuseas, eructos, hipo, vómitos",
          "Edemas",
          "Equimosis",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Hundimiento del Qi (Qi Xian) se caracteriza por:",
        options: [
          "Perturbación de los movimientos de ascenso (insuficiente) y de descenso (excesivo) por Vacío de Qi",
          "Exceso de Qi ascendente",
          "Estancamiento de Qi",
          "Calor del Qi",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las manifestaciones del Hundimiento del Qi incluyen:",
        options: [
          "Tos y disnea",
          "Prolapsos, diarreas, metrorragias, más síntomas del Vacío de Qi",
          "Dolor opresivo",
          "Fiebre alta",
        ],
        correct: 1,
      },

      // ========== DISFUNCIONES DE LA SANGRE ==========
      {
        text: "Según el PDF, ¿cuáles son los tipos de disfunciones de la Sangre (Xue)?",
        options: [
          "Vacío de Sangre, Estasis de Sangre y Calor de Sangre",
          "Solo Vacío y Estasis",
          "Calor y Frío de Sangre",
          "Exceso y Deficiencia de Sangre",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, el Vacío de Sangre (Xue Xu) se produce por:",
        options: [
          "Exceso de ejercicio",
          "Hemorragia o producción insuficiente de Sangre",
          "Solo por mala alimentación",
          "Exclusivamente por factores emocionales",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, las manifestaciones del Vacío de Sangre incluyen:",
        options: [
          "Tez pálida, lengua pálida y seca, vahídos y vértigos, palpitaciones, pérdida de memoria, insomnio, piel seca",
          "Dolor agudo y fijo",
          "Sangre oscura con coágulos",
          "Fiebre alta",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, la Estasis de Sangre (Xue Yu) se produce por:",
        options: [
          "Estancamiento de Qi, Vacío de Qi, Mucosidades turbias, Frío, Calor, Traumatismo o Vacío de Sangre",
          "Solo por traumatismo",
          "Exclusivamente por calor",
          "Únicamente por frío",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las manifestaciones de la Estasis de Sangre incluyen:",
        options: [
          "Lengua pálida",
          "Equimosis, lengua violeta o bordó, petequias, uñas azuladas, labios azulados",
          "Tez sonrosada",
          "Piel hidratada",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, el Calor de Sangre (Xue Re) se produce por:",
        options: [
          "Calor patógeno que ha penetrado en la capa de la Sangre o perturbaciones emocionales que producen Fuego interno",
          "Exposición al frío",
          "Mala alimentación",
          "Exceso de ejercicio",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las manifestaciones del Calor de Sangre incluyen:",
        options: [
          "Síntomas hemorrágicos: hemoptisis, hematemesis, hematuria",
          "Sangre oscura con coágulos",
          "Extremidades frías",
          "Tez pálida",
        ],
        correct: 0,
      },

      // ========== DISFUNCIONES COMPLEJAS DE QI Y XUE ==========
      {
        text: "Según el PDF, el Estancamiento de Qi y Estasis de Sangre (Qi Zhi Xue Yu) se produce porque:",
        options: [
          "El Qi gobierna la Sangre; el estancamiento de Qi produce Estasis de Sangre",
          "La Sangre produce Qi",
          "Ambos son independientes",
          "El calor produce estasis",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, 'El Qi no puede retener la Sangre' (Qi Bu She Xue) se produce por:",
        options: [
          "Vacío de Qi crónico que pierde su capacidad de retención y control de la Sangre",
          "Exceso de Qi",
          "Estasis de Qi",
          "Calor de Sangre",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las manifestaciones de 'El Qi no puede retener la Sangre' incluyen:",
        options: [
          "Metrorragias, melena, cansancio generalizado, menstruación adelantada",
          "Sangre oscura con coágulos",
          "Dolor agudo",
          "Fiebre alta",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, 'El Qi se escapa a continuación de la Sangre' (Qi Sui Xue Tuo) se produce por:",
        options: [
          "Hemorragias o traumatismos que impliquen pérdida de Xue; la Sangre amarra al Qi",
          "Estancamiento de Qi",
          "Vacío de Qi",
          "Calor de Sangre",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las manifestaciones de 'El Qi se escapa a continuación de la Sangre' incluyen:",
        options: [
          "Tez pálida, extremidades frías, transpiración espontánea, respiración débil",
          "Fiebre alta",
          "Dolor opresivo",
          "Equimosis",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, el Vacío de Qi y de la Sangre (Qi Xue Liang Xu) puede ser causado por:",
        options: [
          "Vacío de Qi crónico que no produce Xue o Deficiencia de la Sangre que altera el Qi",
          "Exceso de Qi",
          "Calor de Sangre",
          "Estancamiento de Qi",
        ],
        correct: 0,
      },

      // ========== ALTERACIONES DE LOS LÍQUIDOS ORGÁNICOS ==========
      {
        text: "Según el PDF, hay que distinguir dos tipos principales de alteraciones de los Líquidos Orgánicos:",
        options: [
          "Insuficiencias y perturbaciones del metabolismo y circulación",
          "Exceso y defecto",
          "Calor y frío",
          "Ascenso y descenso",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, la Insuficiencia de los Líquidos Orgánicos se caracteriza por:",
        options: [
          "Edema y quistes",
          "Sequedad de los labios, boca, garganta y piel, sed, orinas infrecuentes y concentradas, heces secas",
          "Flemas y mucosidades abundantes",
          "Diarreas crónicas",
        ],
        correct: 1,
      },
      {
        text: "Según el PDF, las Mucosidades (Tan) pueden combinarse con diferentes energías patógenas:",
        options: [
          "Viento, Calor, Frío, Humedad, Sequedad",
          "Solo Calor y Frío",
          "Solo Viento y Humedad",
          "Solo Sequedad",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las Mucosidades-Viento (Feng Tan) se caracterizan por:",
        options: [
          "Vértigos, vahídos, pérdida de conocimiento, afasia, espasmos, desviación de boca y ojos",
          "Fiebre y agitación",
          "Tos con expectoración de mucosidades fluidas",
          "Náuseas y vómitos",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las Mucosidades-Calor (Re Tan) se caracterizan por:",
        options: [
          "Fiebre, agitación, irritabilidad, tos con expectoración de Mucosidades",
          "Vértigos",
          "Mucosidades fluidas y claras",
          "Náuseas y pérdida de apetito",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las Mucosidades-Frío (Han Tan) se caracterizan por:",
        options: [
          "Temor o aversión al Frío, tos con expectoración de Mucosidades fluidas y claras o vómitos de éstas",
          "Fiebre alta",
          "Mucosidades escasas y concentradas",
          "Nódulos subcutáneos",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las Mucosidades-Humedad (Shi Tan) se caracterizan por:",
        options: [
          "Náuseas, pérdida de apetito, tos con expectoración fácil de Mucosidades abundantes y blanquecinas, sensación de pesadez",
          "Vértigos",
          "Mucosidades concentradas",
          "Fiebre",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las Mucosidades-Sequedad (Zao Tan) se caracterizan por:",
        options: [
          "Boca, garganta y nariz secas, tos con expectoración dificultosa de Mucosidades escasas y concentradas",
          "Mucosidades abundantes",
          "Fiebre alta",
          "Náuseas",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, las Flemas (Yin) corresponden a 4 zonas:",
        options: [
          "Mucosidades y Flemas (Tan Yin), Flemas Suspendidas (Xuan Yin), Flemas Retenidas en los Bronquios (Zhi Yin), Flemas Desbordantes (Yi Yin)",
          "Solo Flemas de pulmón y de riñón",
          "Flemas de calor y de frío",
          "Flemas internas y externas",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, los Edemas (Shui Zhong) pueden tener causas externas e internas:",
        options: [
          "Causas externas: Viento, Humedad; Causas internas: Vacío de Yang del Bazo y/o Riñones",
          "Solo causas externas",
          "Solo causas internas",
          "Exclusivamente por mala alimentación",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, la 'Detención de los Líquidos Orgánicos y Obstrucción del Qi' (Jin Ting Qi Zhu) afecta a:",
        options: [
          "Pulmón (tos, disnea), Corazón (palpitaciones), Jiao Medio (pesadez de cabeza, plenitud gástrica), miembros (dolores sordos)",
          "Solo al Pulmón",
          "Solo al Hígado",
          "Solo al Riñón",
        ],
        correct: 0,
      },

      // ========== MECANISMOS INTERNOS DE PRODUCCIÓN DE ENFERMEDAD ==========
      {
        text: "Según el PDF, el Viento Interno (Feng Qi Li Dong) puede introducirse por:",
        options: [
          "El Yang del Hígado se transforma en Viento, el Calor extremo engendra Viento, el Vacío de Yin agita Viento, el Vacío de Sangre engendra Viento",
          "Solo por el Yang del Hígado",
          "Solo por el Calor extremo",
          "Solo por el Vacío de Yin",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, el 'Engendramiento del Frío a partir del Hogar Mediano' se debe a:",
        options: [
          "Vacío de Yang (esencialmente del Bazo y de los Riñones)",
          "Exceso de Yang",
          "Calor interno",
          "Estancamiento de Qi",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, el 'Engendramiento interno de la Humedad Turbia' proviene de:",
        options: [
          "Alteración de las funciones de transporte y transformación del Bazo y perturbaciones en el metabolismo de los Líquidos Orgánicos (Vacío de Bazo engendra Humedad)",
          "Exceso de agua",
          "Calor externo",
          "Viento interno",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, 'La superación de las 5 emociones se transforma en Fuego' porque:",
        options: [
          "Los excesos emocionales pueden transformarse en Fuego, perturbando el equilibrio del Yin/Yang, Qi, Sangre y Vísceras, especialmente el Hígado",
          "Las emociones siempre producen frío",
          "Las emociones no afectan al cuerpo",
          "Solo el miedo produce fuego",
        ],
        correct: 0,
      },
      {
        text: "Según el PDF, la 'Hiperactividad del Fuego debida al Vacío de Yin' (Yin Xu Huo Wang) se caracteriza por:",
        options: [
          "Calor de los Cinco Corazones, sensación de cocción de los huesos, transpiración nocturna, febrículas, boca y garganta secas, mejillas rojas",
          "Fiebre alta aguda",
          "Extremidades frías",
          "Piel pálida",
        ],
        correct: 0,
      },
    ],
  },
];
