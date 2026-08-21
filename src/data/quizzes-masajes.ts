import type { QuizMeta } from "./quiz-types";

export const masajesQuizzes: QuizMeta[] = [
  //     title: "Tuina - Fundamentos y Filosofía del Masaje Chino",
  {
    id: "tuina-fundamentos",
    category: "tuina",
    title: "Tuina - Fundamentos y Filosofía del Masaje Chino",
    description:
      "Principios básicos del Tuina: el contacto como medicina, neurociencia aplicada (SNA), biomecánica (peso vs fuerza), preparación del terapeuta, medios de contacto y contraindicaciones.",
    questions: [
      // ========== 1. CONTACTO COMO MEDICINA ==========
      {
        text: "Según los fundamentos del Tuina, ¿qué representa el contacto físico para el ser humano?",
        options: [
          "Un lujo que solo se utiliza en terapias alternativas",
          "Nuestra primera respuesta curativa, tan vital como el alimento en los primeros meses de vida",
          "Una técnica que debe evitarse por riesgo de contagio energético",
          "Un método exclusivo de diagnóstico sin valor terapéutico",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ocurre cuando un paciente llora durante una sesión de Tuina según la filosofía de la Escuela Taoísta?",
        options: [
          "Es una señal de que el terapeuta está aplicando demasiada presión",
          "Es una reacción negativa que indica que debe suspenderse el tratamiento",
          "El cuerpo del paciente siente, por primera vez, que alguien lo está escuchando a través del tacto",
          "Es un signo de que el paciente no está preparado para recibir el masaje",
        ],
        correct: 2,
      },

      // ========== 2. NEUROCIENCIA APLICADA ==========
      {
        text: "En la relación entre Tuina y el sistema nervioso autónomo (SNA), ¿qué representa el componente Simpático?",
        options: [
          "Yin - permite digerir, dormir y experimentar placer",
          "Yang - prepara el cuerpo para luchar o huir",
          "El estado de reposo y recuperación",
          "La relajación profunda y la calma",
        ],
        correct: 1,
      },
      {
        text: "En la relación entre Tuina y el sistema nervioso autónomo (SNA), ¿qué representa el componente Parasimpático?",
        options: [
          "Yang - prepara el cuerpo para luchar o huir",
          "Yin - permite digerir, dormir y experimentar placer",
          "El estado de alerta y actividad",
          "La respuesta de estrés",
        ],
        correct: 1,
      },
      {
        text: "¿Por qué el sistema nervioso autónomo no reacciona a técnicas que requieren pensamiento consciente (como la respiración controlada o la meditación) según los fundamentos del Tuina?",
        options: [
          "Porque el SNA solo responde a estímulos químicos",
          "Porque el SNA solo reacciona a lo que se percibe a través de los sentidos, especialmente el tacto",
          "Porque la meditación no tiene efectos fisiológicos",
          "Porque el SNA es completamente independiente del cerebro",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el órgano con más mecanorreceptores vinculados al sistema nervioso autónomo, lo que lo convierte en el más eficiente para flexibilizar el SNA?",
        options: ["La lengua", "Los ojos", "La piel", "El oído interno"],
        correct: 2,
      },

      // ========== 3. BIOMECÁNICA: PESO VS FUERZA ==========
      {
        text: "Según los fundamentos del Tuina, ¿cuál es el principio correcto para aplicar presión durante el masaje?",
        options: [
          "Usar la fuerza muscular del brazo para generar presión",
          "Transferir el peso del cuerpo del terapeuta a través de la mano como intermediario",
          "Aplicar la presión únicamente con la punta de los dedos",
          "Usar la fuerza del antebrazo sin involucrar el resto del cuerpo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ocurre cuando el terapeuta utiliza fuerza muscular en lugar de peso corporal durante el Tuina?",
        options: [
          "El paciente recibe una presión más profunda y efectiva",
          "Genera tensión, bloquea el flujo del Qi, agota al terapeuta y produce un tacto rígido y doloroso",
          "El terapeuta puede trabajar durante más tiempo sin cansarse",
          "El masaje se vuelve más relajante para el paciente",
        ],
        correct: 1,
      },
      {
        text: "¿Qué papel juega la postura del terapeuta en la aplicación correcta del Tuina?",
        options: [
          "Es irrelevante, solo importa la técnica de manos",
          "La postura correcta permite transferir el peso del cuerpo a la mano, aumentando la efectividad y reduciendo el esfuerzo muscular",
          "El terapeuta debe mantenerse completamente erguido sin flexionar las rodillas",
          "La postura solo afecta la comodidad del paciente, no la efectividad del masaje",
        ],
        correct: 1,
      },

      // ========== 4. PREPARACIÓN Y RESPIRACIÓN DEL TERAPEUTA ==========
      {
        text: "¿Dónde debe mantenerse la respiración del terapeuta durante el masaje Tuina?",
        options: [
          "En el pecho, para generar más fuerza",
          "En el Dantian (abdomen), libre y relajada",
          "Conteniendo la respiración durante las presiones profundas",
          "Sincronizada forzosamente con la respiración del paciente en todo momento",
        ],
        correct: 1,
      },
      {
        text: "¿Cuándo es útil acompañar la respiración del paciente durante el Tuina?",
        options: [
          "En todas las técnicas, siempre",
          "Durante presiones profundas (An fa) en la espalda, acompañando la exhalación del paciente",
          "Nunca, el terapeuta debe ignorar la respiración del paciente",
          "Solo durante los movimientos de percusión",
        ],
        correct: 1,
      },

      // ========== 5. LA MANO QUE ESCUCHA (AUSCULTACIÓN MANUAL) ==========
      {
        text: "¿Qué significa la 'auscultación manual' o 'la mano que escucha' en el contexto del Tuina?",
        options: [
          "Usar un estetoscopio para escuchar los sonidos corporales",
          "A través de los mecanorreceptores, la mano comprende, siente y percibe la realidad oculta del paciente",
          "Preguntar al paciente sobre sus síntomas mientras se masajea",
          "Escuchar los ruidos articulares durante el movimiento",
        ],
        correct: 1,
      },
      {
        text: "¿Qué información puede obtener el terapeuta a través de la palpación durante el Tuina?",
        options: [
          "Solo la temperatura de la piel",
          "Tensión, variaciones de temperatura (calor/frío) y resistencia o hundimiento del tejido",
          "Exclusivamente la frecuencia cardíaca del paciente",
          "Únicamente el estado de hidratación de la piel",
        ],
        correct: 1,
      },

      // ========== 6. MEDIOS DE CONTACTO ==========
      {
        text: "¿Cuál es el medio de contacto preferido en el Tuina y por qué?",
        options: [
          "El aceite, porque permite un deslizamiento más suave",
          "El talco, porque permite mantener un contacto fino y preciso con la piel sin resbalar",
          "La crema hidratante, porque nutre la piel del paciente",
          "No se utiliza ningún medio, el masaje se hace siempre sobre la ropa",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el problema de usar aceite en lugar de talco durante el Tuina?",
        options: [
          "El aceite es más caro y difícil de conseguir",
          "El aceite resbala y hace perder la línea específica del meridiano que se está trabajando",
          "El aceite mancha la ropa del paciente",
          "El aceite produce alergias en la mayoría de los pacientes",
        ],
        correct: 1,
      },
      {
        text: "¿Cuándo se recomienda utilizar aceite en lugar de talco en el Tuina?",
        options: [
          "Siempre, es el medio universalmente recomendado",
          "Nunca, el aceite está contraindicado en todas las técnicas",
          "Especialmente en técnicas de fricción (Ca fa) con aceites herbales como el Woodlock o aceite de flores rojas",
          "Solo en pacientes con piel seca",
        ],
        correct: 2,
      },

      // ========== 7. AUTORREGULACIÓN Y ÓSMOSIS ==========
      {
        text: "Según los fundamentos del Tuina, ¿por qué el cuerpo no rechaza la mano humana como sí puede rechazar otros agentes terapéuticos?",
        options: [
          "Porque la mano humana no genera ningún estímulo en el cuerpo",
          "Porque el cuerpo no percibe la mano humana como un agente externo o invasor, lo que genera un estado de ósmosis y autorregulación",
          "Porque la mano humana es la única herramienta que no puede causar daño",
          "Porque el cuerpo reconoce la mano humana como parte de sí mismo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de herramienta terapéutica es el Tuina según su naturaleza de autorregulación?",
        options: [
          "Una herramienta invasiva que altera el equilibrio del paciente",
          "Una herramienta preventiva fundamental, especialmente cuando el diagnóstico es complejo",
          "Un método exclusivo para tratar enfermedades graves",
          "Una técnica que solo funciona en combinación con acupuntura",
        ],
        correct: 1,
      },

      // ========== 8. ENTRENAMIENTO DEL TERAPEUTA ==========
      {
        text: "¿Qué herramienta se utiliza tradicionalmente en el entrenamiento del Tuina para desarrollar resistencia, elasticidad y fuerza en la mano?",
        options: [
          "Una pelota de goma",
          "Una almohada o bolsa de semillas (arroz)",
          "Un rodillo de espuma",
          "Una banda elástica de resistencia",
        ],
        correct: 1,
      },
      {
        text: "¿Qué problema previene el entrenamiento con la bolsa de semillas?",
        options: [
          "La aparición de callos en las manos",
          "El cansancio y el temblor de la mano durante presiones profundas y prolongadas",
          "La rigidez de la muñeca",
          "La pérdida de sensibilidad en los dedos",
        ],
        correct: 1,
      },

      // ========== 9. CONTRAINDICACIONES Y SEGURIDAD ==========
      {
        text: "¿Dónde está ABSOLUTAMENTE contraindicado aplicar fricción durante el Tuina?",
        options: [
          "En la espalda de pacientes con dolor crónico",
          "Sobre piel lastimada, alergias, psoriasis o heridas en reparación",
          "En el abdomen de mujeres embarazadas",
          "En zonas con contracturas musculares",
        ],
        correct: 1,
      },
      {
        text: "¿Qué se debe evitar manipular en pacientes según la regla de oro del Tuina?",
        options: [
          "Zonas con exceso de vello corporal",
          "Cuadros agudos de dolor insoportable",
          "Zonas con cicatrices viejas",
          "Puntos de acupuntura conocidos",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnica de fricción está especialmente recomendada para mujeres embarazadas?",
        options: [
          "Ca fa (fricción vigorosa)",
          "Mo fa (fricción circular) en el abdomen",
          "Tui fa (empuje unidireccional)",
          "Ninguna técnica está permitida durante el embarazo",
        ],
        correct: 1,
      },
    ],
  },

  // Anatomía y fisiología del Tuina: taxonomía de técnicas, niveles de penetración tisular y estructura de la sesión
  {
    id: "tuina-taxonomia",
    category: "tuina",
    title: "Tuina - Taxonomía y Arquitectura de la Sesión",
    description:
      "Clasificación de las técnicas por familias elementales (Fuego, Agua, Madera, Metal, Tierra), los tres niveles de penetración tisular (Celeste, Humana, Terrestre) y la estructura de una sesión clínica.",
    questions: [
      // ========== 1. LAS 5 FAMILIAS ELEMENTALES ==========
      {
        text: "¿Cuántas familias elementales organizan las maniobras básicas del Tuina?",
        options: ["Tres", "Cuatro", "Cinco", "Siete"],
        correct: 2,
      },
      {
        text: "¿Qué familia elemental del Tuina se caracteriza por generar calor, dispersar la estasis y activar la circulación local mediante cizallamiento tisular?",
        options: [
          "Agua (Presión)",
          "Fuego (Fricción)",
          "Madera (Ondulación)",
          "Metal (Movilización)",
        ],
        correct: 1,
      },
      {
        text: "¿Qué familia elemental del Tuina se caracteriza por penetrar hacia adentro y abajo, calmando el sistema nervioso y enraizando?",
        options: ["Fuego (Fricción)", "Agua (Presión)", "Madera (Ondulación)", "Tierra (Golpeo)"],
        correct: 1,
      },
      {
        text: "¿Qué familia elemental del Tuina se caracteriza por movimientos continuos y flexibles desde la muñeca, que fluyen y transforman suavemente el tejido?",
        options: [
          "Metal (Movilización)",
          "Agua (Presión)",
          "Madera (Ondulación)",
          "Fuego (Fricción)",
        ],
        correct: 2,
      },
      {
        text: "¿Qué familia elemental del Tuina se caracteriza por técnicas de precisión sobre la estructura (huesos y articulaciones) y vibraciones?",
        options: [
          "Tierra (Golpeo)",
          "Metal (Movilización y Vibración)",
          "Madera (Ondulación)",
          "Agua (Presión)",
        ],
        correct: 1,
      },
      {
        text: "¿Qué familia elemental del Tuina se caracteriza por percusiones rítmicas que asientan, centralizan y rompen patrones de tensión profunda?",
        options: ["Fuego (Fricción)", "Agua (Presión)", "Madera (Ondulación)", "Tierra (Golpeo)"],
        correct: 3,
      },
      {
        text: "¿Qué técnicas pertenecen a la familia Fuego (Fricción)?",
        options: [
          "An fa, Ya fa, Na fa",
          "Mo fa, Tui fa, Ca fa, Gua fa",
          "Rou fa, Gun fa, Nie fa",
          "Ji fa, Pai fa, Kou fa",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnicas pertenecen a la familia Agua (Presión)?",
        options: [
          "Mo fa, Tui fa, Ca fa",
          "An fa, Dian fa, Na fa",
          "Rou fa, Gun fa, Nie fa",
          "Yao fa, Ban fa, Zhen fa",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnicas pertenecen a la familia Madera (Ondulación)?",
        options: [
          "Mo fa, Tui fa, Ca fa",
          "An fa, Dian fa, Na fa",
          "Rou fa, Gun fa, Nie fa",
          "Ji fa, Pai fa, Kou fa",
        ],
        correct: 2,
      },
      {
        text: "¿Qué técnicas pertenecen a la familia Metal (Movilización y Vibración)?",
        options: [
          "Mo fa, Tui fa, Ca fa",
          "An fa, Dian fa, Na fa",
          "Yao fa, Ban fa, Ba Shen fa, Zhen fa, Dou fa",
          "Ji fa, Pai fa, Kou fa, Tan fa",
        ],
        correct: 2,
      },
      {
        text: "¿Qué técnicas pertenecen a la familia Tierra (Golpeo)?",
        options: [
          "Mo fa, Tui fa, Ca fa",
          "An fa, Dian fa, Na fa",
          "Yao fa, Ban fa, Zhen fa",
          "Ji fa, Pai fa, Kou fa, Tan fa",
        ],
        correct: 3,
      },

      // ========== 2. LOS 3 NIVELES DE PENETRACIÓN TISULAR ==========
      {
        text: "¿Cuáles son los tres niveles de tratamiento en la arquitectura del Tuina?",
        options: [
          "Superficial, Media y Profunda",
          "Capa Celeste, Capa Humana y Capa Terrestre",
          "Epidermis, Dermis e Hipodermis",
          "Capa Yang, Capa Yin y Capa Neutra",
        ],
        correct: 1,
      },
      {
        text: "¿Qué capa tisular del Tuina corresponde a la epidermis y dermis, y tiene como objetivo el contacto inicial y el calentamiento superficial?",
        options: ["Capa Terrestre", "Capa Humana", "Capa Celeste", "Capa Profunda"],
        correct: 2,
      },
      {
        text: "¿Qué capa tisular del Tuina corresponde a los vientres musculares y fascias, donde se realiza el trabajo muscular profundo y la búsqueda del punto A Shi?",
        options: ["Capa Celeste", "Capa Terrestre", "Capa Humana", "Capa Superficial"],
        correct: 2,
      },
      {
        text: "¿Qué capa tisular del Tuina corresponde a las inserciones tendinosas, articulaciones y hueso, donde se busca llegar al hueso y movilizar estancamientos crónicos?",
        options: ["Capa Celeste", "Capa Humana", "Capa Terrestre", "Capa Superficial"],
        correct: 2,
      },
      {
        text: "¿Qué familia elemental del Tuina trabaja principalmente en la Capa Celeste (superficial)?",
        options: [
          "Agua (Presión)",
          "Madera (Ondulación)",
          "Fuego (Fricción)",
          "Metal (Movilización)",
        ],
        correct: 2,
      },
      {
        text: "¿Qué familias elementales del Tuina trabajan principalmente en la Capa Humana (media)?",
        options: [
          "Fuego (Fricción) y Tierra (Golpeo)",
          "Madera (Ondulación) y Agua (Presión)",
          "Metal (Movilización) y Fuego",
          "Solo Agua (Presión)",
        ],
        correct: 1,
      },
      {
        text: "¿Qué familias elementales del Tuina trabajan principalmente en la Capa Terrestre (profunda)?",
        options: [
          "Fuego (Fricción) y Madera",
          "Agua (Presión profunda) y Metal (Movilización)",
          "Tierra (Golpeo) y Fuego",
          "Solo Metal",
        ],
        correct: 1,
      },

      // ========== 3. ESTRUCTURA DE UNA SESIÓN CLÍNICA ==========
      {
        text: "¿Cuál es la secuencia lógica de una sesión de Tuina de lo superficial a lo profundo?",
        options: [
          "Cuerpo → Apertura → Estructural → Descarga → Cierre",
          "Apertura → Cuerpo → Estructural → Descarga → Cierre",
          "Cierre → Apertura → Cuerpo → Estructural → Descarga",
          "Estructural → Apertura → Cuerpo → Descarga → Cierre",
        ],
        correct: 1,
      },
      {
        text: "¿Qué familia elemental se utiliza en la fase de Apertura de una sesión de Tuina?",
        options: [
          "Agua (Presión)",
          "Fuego (Fricción) - para calentar y establecer contacto",
          "Tierra (Golpeo)",
          "Metal (Movilización)",
        ],
        correct: 1,
      },
      {
        text: "¿Qué familias elementales se utilizan en la fase de Cuerpo de una sesión de Tuina?",
        options: [
          "Fuego (Fricción) y Tierra (Golpeo)",
          "Madera (Ondulación) y Agua (Presión)",
          "Metal (Movilización) y Fuego",
          "Solo Agua",
        ],
        correct: 1,
      },
      {
        text: "¿Qué familia elemental se utiliza en la fase Estructural de una sesión de Tuina?",
        options: [
          "Fuego (Fricción)",
          "Agua (Presión)",
          "Metal (Movilización articular)",
          "Tierra (Golpeo)",
        ],
        correct: 2,
      },
      {
        text: "¿Qué familia elemental se utiliza en la fase de Descarga de una sesión de Tuina?",
        options: ["Fuego (Fricción)", "Agua (Presión)", "Madera (Ondulación)", "Tierra (Golpeo)"],
        correct: 3,
      },
      {
        text: "¿Qué familias elementales se utilizan en la fase de Cierre de una sesión de Tuina?",
        options: [
          "Agua (Presión) y Metal",
          "Fuego (Fricción) y Madera (Ondulación)",
          "Tierra (Golpeo) y Fuego",
          "Solo Madera",
        ],
        correct: 1,
      },
      {
        text: "Según la matriz de combinación de técnicas, ¿qué cuadrante corresponde a técnicas superficiales y rápidas (entrada y liberación externa)?",
        options: [
          "Profundo + Rápido",
          "Superficial + Rápido",
          "Superficial + Lento/Continuo",
          "Profundo + Lento/Sostenido",
        ],
        correct: 1,
      },
      {
        text: "Según la matriz de combinación de técnicas, ¿qué cuadrante corresponde a técnicas profundas y rápidas (disipación estructural)?",
        options: [
          "Superficial + Rápido",
          "Profundo + Rápido",
          "Superficial + Lento/Continuo",
          "Profundo + Lento/Sostenido",
        ],
        correct: 1,
      },
      {
        text: "Según la matriz de combinación de técnicas, ¿qué cuadrante corresponde a técnicas superficiales y lentas/continuas (regulación neurológica y digestiva)?",
        options: [
          "Superficial + Rápido",
          "Profundo + Rápido",
          "Superficial + Lento/Continuo",
          "Profundo + Lento/Sostenido",
        ],
        correct: 2,
      },
      {
        text: "Según la matriz de combinación de técnicas, ¿qué cuadrante corresponde a técnicas profundas y lentas/sostenidas (trabajo analgésico y búsqueda del punto A Shi)?",
        options: [
          "Superficial + Rápido",
          "Profundo + Rápido",
          "Superficial + Lento/Continuo",
          "Profundo + Lento/Sostenido",
        ],
        correct: 3,
      },
    ],
  },

  {
    id: "tuina-friccion",
    category: "tuina",
    title: "Tuina - Técnicas de Fricción (Capa Celeste)",
    description:
      "Estudio de las técnicas de fricción del Tuina: Mo fa, Ma fa, Tui fa, Ca fa y Gua fa. Mecánica, efectos terapéuticos y aplicaciones clínicas en la capa superficial del cuerpo.",
    questions: [
      // ========== 1. MO FA (FRICCIÓN CIRCULAR) ==========
      {
        text: "¿Qué significa 'Mo fa' en el contexto del Tuina?",
        options: [
          "Empuje unidireccional",
          "Fricción circular, lenta y continua",
          "Fricción vigorosa de ida y vuelta",
          "Limpiar con movimientos cortos",
        ],
        correct: 1,
      },
      {
        text: "Según los fundamentos del Tuina, ¿cuál es la clave clínica para que Mo fa sea efectiva?",
        options: [
          "Aplicar mucha presión hacia abajo",
          "Realizar movimientos rápidos y vigorosos",
          "Requiere inmensa paciencia y continuidad; el estímulo sin variación induce un estado de profunda relajación",
          "Cambiar constantemente de dirección y velocidad",
        ],
        correct: 2,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Mo fa aplicada en el abdomen?",
        options: [
          "Generar calor intenso",
          "Activar el peristaltismo, calentar y armonizar el Jiao Medio",
          "Drenar los meridianos",
          "Despejar la cabeza",
        ],
        correct: 1,
      },
      {
        text: "En el abdomen, ¿qué dirección de Mo fa se utiliza para tratar la constipación?",
        options: [
          "Sentido antihorario",
          "Sentido horario (para incrementar el peristaltismo)",
          "Movimiento de ida y vuelta",
          "Sin dirección específica",
        ],
        correct: 1,
      },
      {
        text: "En el abdomen, ¿qué dirección de Mo fa se utiliza para tratar la diarrea?",
        options: [
          "Sentido horario",
          "Sentido antihorario",
          "Movimiento de ida y vuelta",
          "Sin dirección específica",
        ],
        correct: 1,
      },
      {
        text: "¿Con qué ritmo se recomienda aplicar Mo fa?",
        options: [
          "60-80 círculos por minuto",
          "100-120 círculos por minuto",
          "140-160 círculos por minuto",
          "200 círculos por minuto",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnica de Mo fa se aplica con ambas palmas solapadas sobre el abdomen?",
        options: ["Mo fa simple", "Tai chi Mo fa", "Mo fa con dedos", "Mo fa con palma"],
        correct: 1,
      },
      {
        text: "¿Qué efecto tiene Mo fa en la cabeza cuando se aplica con la palma y las yemas de los dedos?",
        options: [
          "Genera calor intenso",
          "Elimina Viento y dispersa Frío, calma el Shen",
          "Drena estancamiento de sangre",
          "Tonifica el Yang de Riñón",
        ],
        correct: 1,
      },

      // ========== 2. MA FA (LIMPIAR) ==========
      {
        text: "¿Qué significa 'Ma fa' en el contexto del Tuina?",
        options: [
          "Fricción circular lenta",
          "Limpiar con movimientos cortos, rápidos y superficiales",
          "Empuje unidireccional profundo",
          "Restregar vigoroso de ida y vuelta",
        ],
        correct: 1,
      },
      {
        text: "¿En qué zonas del cuerpo se aplica principalmente Ma fa?",
        options: [
          "Espalda y glúteos",
          "Cara, cabeza y cuello",
          "Abdomen y pelvis",
          "Piernas y pies",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Ma fa?",
        options: [
          "Generar calor profundo",
          "Calma el Shen, despeja la cabeza y lleva Qi a los órganos de los sentidos",
          "Romper adherencias profundas",
          "Tonificar el Bazo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la velocidad recomendada para Ma fa?",
        options: [
          "60-80 ciclos por minuto",
          "100-120 ciclos por minuto",
          "140-160 ciclos por minuto",
          "200 ciclos por minuto",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué tipo de pacientes está especialmente indicada Ma fa?",
        options: [
          "Pacientes con síndromes de Exceso",
          "Pacientes con ansiedad, insomnio y cefaleas",
          "Pacientes con hernias discales",
          "Pacientes con fiebre alta",
        ],
        correct: 1,
      },

      // ========== 3. TUI FA (EMPUJE) ==========
      {
        text: "¿Qué significa 'Tui fa' en el contexto del Tuina?",
        options: [
          "Fricción circular lenta",
          "Limpiar con movimientos cortos",
          "Empuje friccionado, pronunciado y largo, en una sola dirección",
          "Restregar vigoroso de ida y vuelta",
        ],
        correct: 2,
      },
      {
        text: "¿Con qué partes de la mano se puede realizar Tui fa?",
        options: [
          "Solo con el pulgar",
          "Con el pulgar, los dedos, la palma o el codo",
          "Solo con la palma",
          "Solo con el codo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la metáfora visual utilizada para entender el efecto de Tui fa?",
        options: [
          "Como un perro rascando la tierra",
          "Como abrir un canal para que un río recupere su caudal",
          "Como pulir una mesa de madera",
          "Como tocar un tambor",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Tui fa?",
        options: [
          "Generar calor intenso",
          "Movilizar, drenar y liberar el estancamiento de Qi",
          "Calmar el Shen",
          "Romper adherencias",
        ],
        correct: 1,
      },
      {
        text: "¿Qué recomendación se da sobre el medio de contacto para Tui fa?",
        options: [
          "Usar siempre aceite para facilitar el deslizamiento",
          "El uso de talco es preferible al aceite para mantener un contacto fino y preciso sobre la línea del meridiano",
          "No usar ningún medio de contacto",
          "Usar crema hidratante",
        ],
        correct: 1,
      },

      // ========== 4. CA FA (RESTREGAR) ==========
      {
        text: "¿Qué significa 'Ca fa' en el contexto del Tuina?",
        options: [
          "Fricción circular lenta",
          "Limpiar con movimientos cortos",
          "Empuje unidireccional",
          "Fricción rectilínea, vigorosa, de ida y vuelta",
        ],
        correct: 3,
      },
      {
        text: "¿Desde qué parte del cuerpo se impulsa el movimiento de Ca fa?",
        options: ["Desde la muñeca", "Desde el codo", "Desde el hombro", "Desde los dedos"],
        correct: 2,
      },
      {
        text: "¿Qué efecto produce Ca fa cuando se aplica correctamente?",
        options: [
          "Relajación profunda",
          "Calor profundo y rápido; la piel se siente quemante",
          "Sedación del sistema nervioso",
          "Drenaje de meridianos",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántos ciclos de Ca fa se recomienda aplicar en cada área para evitar ampollas?",
        options: ["5 ciclos", "10 ciclos", "20 ciclos", "50 ciclos"],
        correct: 1,
      },
      {
        text: "¿Qué tipo de medio se utiliza comúnmente con Ca fa?",
        options: [
          "Solo talco",
          "Aceites herbales como Woodlock o aceite de flores rojas",
          "Crema hidratante",
          "Agua",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es un uso clínico destacado de Ca fa?",
        options: [
          "Tratar el insomnio",
          "Aliviar la ansiedad",
          "Dolor lumbar, ciática y síndromes de Frío severo",
          "Tratar alergias",
        ],
        correct: 2,
      },
      {
        text: "Si un paciente con un síndrome Yang recibe Ca fa en la espalda y el enrojecimiento o el calor se demoran en aparecer, ¿qué información diagnóstica proporciona esto?",
        options: [
          "Que el paciente está en equilibrio",
          "Que hay una ausencia de respuesta que proporciona información diagnóstica vital",
          "Que el paciente no responde al tratamiento",
          "Que se debe aplicar más presión",
        ],
        correct: 1,
      },

      // ========== 5. GUA FA (RASPAR) ==========
      {
        text: "¿Qué significa 'Gua fa' en el contexto del Tuina?",
        options: [
          "Fricción circular lenta",
          "Raspar con las puntas de los dedos y pulgares en mudra de garra de águila",
          "Empuje unidireccional",
          "Restregar vigoroso de ida y vuelta",
        ],
        correct: 1,
      },
      {
        text: "¿Con qué técnica de la medicina china se relaciona estrechamente Gua fa?",
        options: ["Acupuntura", "Moxibustión", "Gua Sha", "Ventosas"],
        correct: 2,
      },
      {
        text: "¿En qué nivel de la teoría del Tuina trabaja principalmente Gua fa?",
        options: ["Capa Terrestre", "Capa Humana", "Capa Celeste (Wei Qi)", "Nivel estructural"],
        correct: 2,
      },
      {
        text: "¿Cuáles son las dos funciones principales de Gua fa?",
        options: [
          "Tonificar el Bazo y calmar el Shen",
          "Liberar el Exterior (eliminar invasión de Viento-Frío) y fortalecer/calentar el Wei Qi",
          "Romper adherencias y movilizar articulaciones",
          "Drenar estancamiento de sangre y generar calor",
        ],
        correct: 1,
      },
      {
        text: "¿En qué zonas del cuerpo se aplica principalmente Gua fa?",
        options: ["Cara y cabeza", "Espalda y cintura", "Abdomen y pelvis", "Extremidades"],
        correct: 1,
      },
      {
        text: "¿Cuándo se debe detener la aplicación de Gua fa?",
        options: [
          "Después de 5 minutos",
          "Cuando se sienta que la piel del paciente quema",
          "Cuando el paciente pide que pare",
          "Después de 20 ciclos",
        ],
        correct: 1,
      },
    ],
  },

  {
    id: "tuina-amasamiento",
    category: "tuina",
    title: "Tuina - Técnicas de Amasamiento y Agarre (Capa Humana)",
    description:
      "Estudio de las técnicas de amasamiento y agarre del Tuina: Rou fa, Gun fa, Na fa y Nian fa. Mecánica, efectos terapéuticos y aplicaciones clínicas en la capa media del cuerpo.",
    questions: [
      // ========== 1. ROU FA (AMASAR) ==========
      {
        text: "¿Qué significa 'Rou fa' en el contexto del Tuina?",
        options: [
          "Rodar con el dorso de la mano",
          "Amasar con movimiento circular y presión sostenida",
          "Agarrar y levantar el músculo",
          "Presión simple y sostenida",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la 'Regla de Oro' de Rou fa?",
        options: [
          "Siempre friccionar la superficie de la piel",
          "Mover siempre los músculos y fascias subyacentes, nunca deslizarse sobre la piel",
          "Aplicar la máxima presión posible",
          "Realizar movimientos rápidos y cortos",
        ],
        correct: 1,
      },
      {
        text: "¿Con qué partes de la mano se puede realizar Rou fa?",
        options: [
          "Solo con el pulgar",
          "Con el pulgar, dedos, palma, base de la palma, eminencias tenares, antebrazo o codo",
          "Solo con la palma",
          "Solo con el codo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el ritmo recomendado para Rou fa?",
        options: [
          "60-80 círculos por minuto",
          "100-120 círculos por minuto",
          "140-160 círculos por minuto",
          "200 círculos por minuto",
        ],
        correct: 0,
      },
      {
        text: "¿Qué efecto tiene Rou fa cuando se aplica con el codo o antebrazo en los puntos de Hígado de la espalda?",
        options: [
          "Tonifica el Bazo",
          "Somete el Yang de Hígado que asciende y calma el Hígado",
          "Fortalece el Riñón",
          "Drena la Vejiga",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál de los siguientes NO es un uso común de Rou fa?",
        options: [
          "Cefaleas y migraña",
          "Estreñimiento",
          "Fracturas óseas agudas",
          "Dolor y distensión epigástrica",
        ],
        correct: 2,
      },
      {
        text: "Para tonificar con Rou fa, ¿qué dirección y duración se recomienda?",
        options: [
          "Dirección antihoraria, 1.5 minutos",
          "Dirección horaria, 3 minutos mínimo",
          "Dirección horaria, 30 segundos",
          "Dirección antihoraria, 5 minutos",
        ],
        correct: 1,
      },
      {
        text: "Para dispersar con Rou fa, ¿qué dirección y duración se recomienda?",
        options: [
          "Dirección horaria, 3 minutos",
          "Dirección antihoraria, 1.5 minutos",
          "Dirección antihoraria, 5 minutos",
          "Dirección horaria, 30 segundos",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnica de amasamiento utiliza la punta del codo para trabajar puntos profundos como Huantiao VB30?",
        options: [
          "Rou fa con palma",
          "Rou fa con antebrazo",
          "Rou fa con codo",
          "Rou fa con pulgar",
        ],
        correct: 2,
      },

      // ========== 2. GUN FA (RODAR) ==========
      {
        text: "¿Qué significa 'Gun fa' en el contexto del Tuina?",
        options: [
          "Amasar con movimiento circular",
          "Rodar con el dorso de la mano, un movimiento pendular continuo impulsado por el codo",
          "Agarrar y levantar el músculo",
          "Presión simple y sostenida",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el punto pivote en la técnica Gun fa que nunca se separa de la piel?",
        options: [
          "La punta del pulgar",
          "La cabeza del cúbito",
          "El nudillo del meñique",
          "La eminencia tenar",
        ],
        correct: 2,
      },
      {
        text: "¿Desde qué parte del cuerpo se impulsa el movimiento de Gun fa?",
        options: [
          "Desde la mano",
          "Desde el codo y los músculos extensores del brazo",
          "Desde el hombro",
          "Desde los dedos",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el ritmo óptimo recomendado para Gun fa?",
        options: [
          "60-80 ciclos por minuto",
          "100-120 ciclos por minuto",
          "120-160 ciclos por minuto",
          "200 ciclos por minuto",
        ],
        correct: 2,
      },
      {
        text: "¿Cuánto tiempo de práctica diaria en la bolsa de arroz se recomienda antes de aplicar Gun fa en un paciente?",
        options: ["1 semana", "1 mes", "3 a 4 meses", "1 año"],
        correct: 2,
      },
      {
        text: "¿Cuánto tiempo mínimo de aplicación se recomienda para que Gun fa tenga efectos terapéuticos en un área?",
        options: ["5 minutos", "10 minutos", "20 minutos", "30 minutos"],
        correct: 2,
      },
      {
        text: "¿Cuál de los siguientes NO es un efecto terapéutico de Gun fa?",
        options: [
          "Drena los Jingluo",
          "Dispersa Viento, Frío y Humedad",
          "Promueve la circulación de Qi y Sangre",
          "Tonifica el Yang de Riñón",
        ],
        correct: 3,
      },
      {
        text: "¿Para qué tipo de condiciones está especialmente indicada Gun fa?",
        options: [
          "Problemas digestivos",
          "Síndrome Bi, dolor muscular, lesiones de tejidos blandos, secuelas post-ACV",
          "Problemas de la piel",
          "Trastornos menstruales",
        ],
        correct: 1,
      },

      // ========== 3. NA FA (AGARRAR) ==========
      {
        text: "¿Qué significa 'Na fa' en el contexto del Tuina?",
        options: [
          "Amasar con movimiento circular",
          "Rodar con el dorso de la mano",
          "Agarrar y levantar el músculo, creando un oleaje rítmico de agarre y liberación",
          "Presión simple y sostenida",
        ],
        correct: 2,
      },
      {
        text: "¿Qué debe formar la mano del terapeuta al aplicar Na fa?",
        options: [
          "Un puño cerrado",
          "Una pinza con las yemas de los dedos y la base de la palma",
          "Una palma plana",
          "Un garra con las uñas",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se genera el movimiento y la penetración de la pinza en Na fa?",
        options: [
          "Por la tensión aislada de la mano",
          "Por el balanceo del cuerpo del terapeuta",
          "Por la fuerza de los dedos",
          "Por la fuerza del antebrazo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el efecto terapéutico principal de Na fa?",
        options: [
          "Generar calor intenso",
          "Elimina Viento y disipa Frío, llevando Qi a áreas vacías y desnutridas",
          "Romper adhesiones profundas",
          "Calmar el Shen",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál de los siguientes NO es un uso común de Na fa?",
        options: [
          "Cuello rígido y dolores de hombros",
          "Resfrío común y cefaleas",
          "Fracturas óseas agudas",
          "Lesiones por trauma",
        ],
        correct: 2,
      },
      {
        text: "¿Qué técnica se recomienda aplicar después de usar An fa o Tian fa en un punto tenso?",
        options: [
          "Ca fa (restregar)",
          "Na fa (agarrar), para aumentar la circulación de Qi y sangre",
          "Gua fa (raspar)",
          "Ji dian fa (golpe de dedos)",
        ],
        correct: 1,
      },

      // ========== 4. NIAN FA (AGARRAR Y TORCER) ==========
      {
        text: "¿Qué significa 'Nian fa' en el contexto del Tuina?",
        options: [
          "Amasar con movimiento circular",
          "Agarrar y torcer rápidamente los dedos de manos y pies",
          "Agarrar y levantar el músculo",
          "Presión simple y sostenida",
        ],
        correct: 1,
      },
      {
        text: "¿En qué parte del cuerpo se aplica principalmente Nian fa?",
        options: [
          "Espalda y glúteos",
          "Dedos de manos y pies",
          "Abdomen y pelvis",
          "Cara y cabeza",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el efecto terapéutico principal de Nian fa?",
        options: [
          "Generar calor intenso",
          "Drena obstrucciones estancadas hacia el exterior y abre las articulaciones bloqueadas",
          "Calmar el Shen",
          "Tonificar el Bazo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué progresión se recomienda al aplicar Nian fa en los dedos?",
        options: [
          "De la punta a la raíz",
          "De la raíz a la punta (para despejar canales)",
          "Solo en la articulación afectada",
          "Sin dirección específica",
        ],
        correct: 1,
      },
      {
        text: "¿Qué imaginación visual ayuda a ejecutar correctamente Nian fa?",
        options: [
          "Como tocar un tambor",
          "Como pulir una moneda con el pulgar y los dedos",
          "Como abrir un canal para un río",
          "Como un perro rascando la tierra",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: "tuina-presion-acupresion",
    category: "tuina",
    title: "Tuina - Técnicas de Presión Profunda y Acupresión (Capa Terrestre)",
    description:
      "Estudio de las técnicas de presión profunda: An fa, Ya fa/Dian fa, principios de acupresión (Dian Xue), herramientas de digitopresión y los 7 puntos maestros del dolor.",
    questions: [
      // ========== 1. AN FA (PRESIONAR) ==========
      {
        text: "¿Qué significa 'An fa' en el contexto del Tuina?",
        options: [
          "Amasar con movimiento circular",
          "Presión simple, firme y sostenida con el pulpejo del dedo, la palma o el talón de la mano",
          "Agarrar y levantar el músculo",
          "Rodar con el dorso de la mano",
        ],
        correct: 1,
      },
      {
        text: "¿Cuáles son las dos aplicaciones principales de An fa?",
        options: [
          "Tonificación y dispersión",
          "Diagnóstica (presionar y retirar rápidamente) y terapéutica (presionar y sostener)",
          "Superficial y profunda",
          "Local y distal",
        ],
        correct: 1,
      },
      {
        text: "¿Cuánto tiempo se recomienda sostener la presión en An fa terapéutica?",
        options: ["30 segundos", "1 minuto", "3 minutos o más", "10 minutos"],
        correct: 2,
      },
      {
        text: "Si el paciente está muy Deficiente, ¿qué tipo de An fa se recomienda?",
        options: [
          "Presión intermitente y rápida",
          "Presión suave y moderada sostenida por 5 minutos",
          "Presión fuerte y profunda",
          "No aplicar An fa en pacientes deficientes",
        ],
        correct: 1,
      },
      {
        text: "Para movilizar estancamiento con An fa, ¿qué tipo de presión se recomienda?",
        options: [
          "Presión sostenida por 5 minutos",
          "Presión intermitente con pausas breves antes de liberar",
          "Presión muy superficial",
          "Presión con movimiento circular",
        ],
        correct: 1,
      },
      {
        text: "¿Con qué técnica se combina frecuentemente An fa?",
        options: ["Gun fa", "Rou fa (amasado)", "Tui fa", "Ca fa"],
        correct: 1,
      },
      {
        text: "¿Cuál de los siguientes NO es un efecto terapéutico de An fa sostenida por más de 3 minutos?",
        options: [
          "Tonificar y fortalecer los canales",
          "Calmar el Shen y dispersar la ansiedad",
          "Generar calor intenso en la superficie",
          "Fortalecer músculos y tendones",
        ],
        correct: 2,
      },

      // ========== 2. YA FA / DIAN FA (PRESIÓN PROFUNDA) ==========
      {
        text: "¿Qué significa 'Ya fa' o 'Dian fa' en el contexto del Tuina?",
        options: [
          "Presión simple y superficial",
          "Versión intensa de An fa, presión puntual profunda con codo, antebrazo o pulgar",
          "Amasamiento con movimiento circular",
          "Agarrar y levantar el músculo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué sensación busca generar Dian fa en el paciente?",
        options: [
          "Relajación superficial",
          "Deqi: dolor fuerte, calor irradiado o sensación de corriente",
          "Entumecimiento local",
          "Calor quemante en la piel",
        ],
        correct: 1,
      },
      {
        text: "¿En qué zonas del cuerpo se aplica principalmente Ya fa/Dian fa?",
        options: [
          "Cara y cabeza",
          "Grandes grupos musculares y puntos profundos como Huantiao VB30",
          "Dedos de manos y pies",
          "Abdomen",
        ],
        correct: 1,
      },
      {
        text: "¿Cuánto tiempo se recomienda sostener la presión en Dian fa?",
        options: [
          "30 segundos",
          "1 minuto",
          "3 minutos o hasta que el tejido se dilate",
          "10 minutos",
        ],
        correct: 2,
      },
      {
        text: "¿Qué técnica se utiliza para reforzar la presión en Ya fa?",
        options: [
          "Usar la otra mano para sostener el puño del brazo que trabaja",
          "Aumentar la velocidad del movimiento",
          "Cambiar de ángulo",
          "Usar aceite como medio",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Dian fa?",
        options: [
          "Generar calor superficial",
          "Efectos analgésicos y anestésicos potentes en dolor agudo o crónico",
          "Calmar el Shen",
          "Tonificar el Bazo",
        ],
        correct: 1,
      },

      // ========== 3. ACUPRESIÓN (DIAN XUE) ==========
      {
        text: "¿Qué significa 'Dian Xue' en el contexto del Tuina?",
        options: [
          "Masaje de fricción",
          "Masaje de presión de cavidades (acupresión o digitopresión)",
          "Masaje de percusión",
          "Masaje de movilización articular",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el objetivo principal de la acupresión (Dian Xue)?",
        options: [
          "Relajar los músculos superficiales",
          "Curar enfermedades producidas por el desequilibrio del Qi",
          "Generar calor en la superficie",
          "Mejorar la circulación sanguínea local",
        ],
        correct: 1,
      },
      {
        text: "¿Qué parte de la mano se utiliza para penetrar a bastante profundidad en la digitopresión?",
        options: ["La palma", "La punta de los dedos", "El codo", "La base de la palma"],
        correct: 1,
      },
      {
        text: "¿Por qué el dedo corazón se considera especialmente poderoso para la digitopresión?",
        options: [
          "Porque es el dedo más largo",
          "Porque su canal de Qi está conectado con el Pericardio",
          "Porque es el dedo más fuerte",
          "Porque es el dedo más flexible",
        ],
        correct: 1,
      },
      {
        text: "¿Qué parte de la mano se utiliza para áreas con grandes músculos y cavidades muy profundas en el Tui Na?",
        options: ["La punta de los dedos", "La falange de los dedos", "El codo", "La palma"],
        correct: 2,
      },
      {
        text: "En el frotado (Rou/Mo) con fines terapéuticos, ¿cuándo se considera que se está 'absorbiendo' Qi del paciente?",
        options: [
          "Frotando en sentido horario con la mano derecha",
          "Frotando en sentido antihorario con la mano derecha",
          "Frotando sin dirección específica",
          "Frotando solo con la mano izquierda",
        ],
        correct: 1,
      },

      // ========== 4. PUNTOS A SHI ==========
      {
        text: "¿Qué es un punto 'A Shi' en el contexto del Tuina?",
        options: [
          "Un punto de acupuntura de un meridiano específico",
          "Un punto de tensión, dolor o acúmulo energético que sobresale por la molestia que genera, esté o no en un meridiano",
          "Un punto que siempre está en el mismo lugar en todos los pacientes",
          "Un punto que solo se utiliza en acupuntura, no en masaje",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la estrategia de tratamiento para un punto A Shi en Tuina?",
        options: [
          "Aplicar presión directa inmediatamente",
          "Primero calentar y sensibilizar con fricción, luego amasar alrededor, y solo después aplicar presión directa",
          "Ignorarlo y tratar solo los meridianos principales",
          "Aplicar golpeteo fuerte directamente",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnica se utiliza para localizar puntos A Shi durante una sesión de Tuina?",
        options: [
          "Ca fa (restregar)",
          "Ma fa (limpiar)",
          "Na fa (agarrar) o exploración general con la mano",
          "Gua fa (raspar)",
        ],
        correct: 2,
      },

      // ========== 5. LOS 7 PUNTOS MAESTROS DEL DOLOR ==========
      {
        text: "¿Cuál es el punto maestro para el dolor de cara y cabeza según los 7 puntos maestros del dolor?",
        options: [
          "P7 (Pulmón 7)",
          "IG4 (Intestino Grueso 4)",
          "MC6 (Maestro Corazón 6)",
          "E36 (Estómago 36)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el punto maestro para el dolor de cuello según los 7 puntos maestros del dolor?",
        options: [
          "IG4 (Intestino Grueso 4)",
          "P7 (Pulmón 7)",
          "MC6 (Maestro Corazón 6)",
          "V40 (Vejiga 40)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el punto maestro para el dolor de tórax según los 7 puntos maestros del dolor?",
        options: [
          "IG4 (Intestino Grueso 4)",
          "P7 (Pulmón 7)",
          "MC6 (Maestro Corazón 6)",
          "E36 (Estómago 36)",
        ],
        correct: 2,
      },
      {
        text: "¿Cuál es el punto maestro para el dolor de vientre/abdomen según los 7 puntos maestros del dolor?",
        options: [
          "IG4 (Intestino Grueso 4)",
          "P7 (Pulmón 7)",
          "MC6 (Maestro Corazón 6)",
          "E36 (Estómago 36)",
        ],
        correct: 3,
      },
      {
        text: "¿Cuál es el punto maestro para el dolor de espalda/lumbar según los 7 puntos maestros del dolor?",
        options: ["IG4 (Intestino Grueso 4)", "P7 (Pulmón 7)", "V40 (Vejiga 40)", "BP6 (Bazo 6)"],
        correct: 2,
      },
      {
        text: "¿Cuál es el punto maestro para el dolor de pelvis/genitales según los 7 puntos maestros del dolor?",
        options: ["IG4 (Intestino Grueso 4)", "P7 (Pulmón 7)", "V40 (Vejiga 40)", "BP6 (Bazo 6)"],
        correct: 3,
      },
      {
        text: "¿Cuál es el séptimo punto maestro del dolor?",
        options: [
          "E36 (Estómago 36)",
          "MC6 (Maestro Corazón 6)",
          "El punto A Shi (punto de dolor)",
          "V40 (Vejiga 40)",
        ],
        correct: 2,
      },
      {
        text: "¿Cómo se estimulan los 7 puntos maestros del dolor?",
        options: [
          "Con Ca fa (restregar)",
          "Con An fa profundo",
          "Con Pai fa (palmeo)",
          "Con Tui fa (empuje)",
        ],
        correct: 1,
      },
    ],
  },

  {
    id: "tuina-vibracion-percusion",
    category: "tuina",
    title: "Tuina - Técnicas de Vibración, Movilización y Percusión (Metal y Tierra)",
    description:
      "Estudio de las técnicas de vibración (Zhen fa), movilización (Dou fa, Tan bo fa, Cuo fa, Nian fa) y percusión (Ji fa, Pai fa, Ji dian fa, Che fa). Mecánica, efectos y aplicaciones clínicas.",
    questions: [
      // ========== 1. ZHEN FA (VIBRAR) ==========
      {
        text: "¿Qué significa 'Zhen fa' en el contexto del Tuina?",
        options: [
          "Golpear con el borde cubital de la mano",
          "Transmisión de una vibración de alta frecuencia desde el Dantian del terapeuta a través del brazo",
          "Sacudir rítmicamente una extremidad",
          "Tirar transversalmente de un tendón",
        ],
        correct: 1,
      },
      {
        text: "¿Qué práctica es esencial para el desarrollo de Zhen fa?",
        options: [
          "Entrenamiento de fuerza con pesas",
          "Práctica de Qigong para desarrollar Qi interno",
          "Estiramientos de muñeca",
          "Meditación guiada",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la dirección correcta de la vibración en Zhen fa?",
        options: [
          "Lateral (izquierda-derecha)",
          "Vertical (arriba y abajo)",
          "Circular",
          "Diagonal",
        ],
        correct: 1,
      },
      {
        text: "¿Cuánto tiempo debe sostenerse Zhen fa para que sea terapéuticamente efectiva?",
        options: ["30 segundos", "1 minuto", "3 a 5 minutos", "10 minutos"],
        correct: 2,
      },
      {
        text: "¿Con qué partes de la mano se puede aplicar Zhen fa?",
        options: [
          "Solo con el pulgar",
          "Con un dedo (para puntos en cabeza) o palma completa (abdomen/sacro)",
          "Solo con el codo",
          "Solo con el antebrazo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué efecto terapéutico tiene Zhen fa en el abdomen?",
        options: [
          "Genera calor superficial",
          "Calienta el Jiao Medio e Inferior, rompe adhesiones y estancamiento de sangre",
          "Tonifica el Yang de Riñón",
          "Drena la Vejiga",
        ],
        correct: 1,
      },

      // ========== 2. DOU FA (SACUDIR) ==========
      {
        text: "¿Qué significa 'Dou fa' en el contexto del Tuina?",
        options: [
          "Frotar rodando entre ambas manos",
          "Sacudida rítmica de extremidades para relajar al final de la sesión",
          "Tirar transversalmente de un tendón",
          "Golpear con el borde cubital de la mano",
        ],
        correct: 1,
      },
      {
        text: "¿Qué se debe crear antes de iniciar la sacudida en Dou fa?",
        options: [
          "Presión hacia abajo",
          "Tracción axial (estirar la extremidad)",
          "Rotación de la articulación",
          "Golpeteo previo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué debe sentir el terapeuta al aplicar Dou fa correctamente?",
        options: [
          "Resistencia en la articulación",
          "Una onda vibratoria que viaja hasta el hombro o la cadera",
          "Calor en las manos",
          "Dolor en el paciente",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántas sacudidas se recomienda realizar como mínimo en Dou fa?",
        options: ["5 veces", "10-20 veces", "50 veces", "100 veces"],
        correct: 1,
      },
      {
        text: "¿Con qué técnica se alterna frecuentemente Dou fa al final del tratamiento?",
        options: ["Gun fa", "Cuo fa (frotar rodando)", "An fa", "Ca fa"],
        correct: 1,
      },

      // ========== 3. TAN BO FA (TIRAR) ==========
      {
        text: "¿Qué significa 'Tan bo fa' en el contexto del Tuina?",
        options: [
          "Sacudir rítmicamente una extremidad",
          "Tirar transversalmente de un tendón o músculo adherido, como si se rasgueara una cuerda de guitarra",
          "Frotar rodando entre ambas manos",
          "Golpear con el borde cubital de la mano",
        ],
        correct: 1,
      },
      {
        text: "¿En qué nivel de tratamiento se aplica Tan bo fa?",
        options: [
          "Capa Celeste (superficial)",
          "Capa Humana (media)",
          "Capa Terrestre (profunda), luego de mucho trabajo adaptativo",
          "Solo al inicio de la sesión",
        ],
        correct: 2,
      },
      {
        text: "¿Qué tipo de problemas trata principalmente Tan bo fa?",
        options: [
          "Problemas digestivos",
          "Adhesiones y tejido cicatricial, contracturas crónicas de fascias",
          "Problemas respiratorios",
          "Insomnio y ansiedad",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se recomienda comenzar la aplicación de Tan bo fa?",
        options: [
          "Con mucha fuerza desde el principio",
          "Siempre tirar levemente al comienzo y gradualmente incrementar la intensidad",
          "Con movimientos rápidos y cortos",
          "Sin contacto directo con la piel",
        ],
        correct: 1,
      },
      {
        text: "¿Qué variación de Tan bo fa se recomienda para trabajar adhesiones profundas?",
        options: [
          "Tirar básico con un pulgar",
          "Tirar con pulgar sostenido (flexionando la articulación distal 90°)",
          "Tirar con los dedos de ambas manos",
          "Tirar con el codo",
        ],
        correct: 1,
      },

      // ========== 4. CUO FA (FROTAR RODANDO) ==========
      {
        text: "¿Qué significa 'Cuo fa' en el contexto del Tuina?",
        options: [
          "Sacudir rítmicamente una extremidad",
          "Tirar transversalmente de un tendón",
          "Frotar y rodar vigorosamente entre ambas manos mientras se desciende por una extremidad",
          "Golpear con el borde cubital de la mano",
        ],
        correct: 2,
      },
      {
        text: "¿En qué zonas del cuerpo se aplica principalmente Cuo fa?",
        options: [
          "Cara y cabeza",
          "Costillas, hombros, brazos, manos, piernas y pies",
          "Abdomen y pelvis",
          "Espalda y glúteos",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Cuo fa?",
        options: [
          "Generar calor intenso",
          "Regular el flujo de Qi y Sangre, dispersar estancamiento, relajar músculos y tendones",
          "Calmar el Shen",
          "Tonificar el Bazo",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué problemas específicos se utiliza Cuo fa en las manos?",
        options: [
          "Artritis de muñeca",
          "Dedo gatillo, síndrome de túnel carpiano, calambre de escritor",
          "Fracturas de dedos",
          "Problemas de la piel",
        ],
        correct: 1,
      },

      // ========== 5. JI FA (PICAR) ==========
      {
        text: "¿Qué significa 'Ji fa' en el contexto del Tuina?",
        options: [
          "Golpear con la palma ahuecada",
          "Picar con el borde cubital (canto) de manos relajadas",
          "Golpear con los nudillos",
          "Percusión precisa con un solo dedo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la clave para aplicar Ji fa correctamente?",
        options: [
          "Fuerza en las manos",
          "Ritmo y relajación, con muñecas extremadamente elásticas",
          "Presión hacia abajo",
          "Velocidad lenta",
        ],
        correct: 1,
      },
      {
        text: "¿Qué metáfora se utiliza para entender el movimiento de Ji fa?",
        options: [
          "Como un perro rascando la tierra",
          "Las manos rebotan como palillos de batería",
          "Como abrir un canal para un río",
          "Como pulir una mesa de madera",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Ji fa?",
        options: [
          "Tonificar el Yang de Riñón",
          "Abrir el pecho, eliminar Flema profunda en pulmones, combatir la fatiga por estancamiento",
          "Calmar el Shen",
          "Drenar la Vejiga",
        ],
        correct: 1,
      },

      // ========== 6. PAI FA (PALMEAR) ==========
      {
        text: "¿Qué significa 'Pai fa' en el contexto del Tuina?",
        options: [
          "Picar con el borde cubital de la mano",
          "Golpear con la palma ahuecada o un puño relajado",
          "Golpear con los nudillos",
          "Percusión precisa con un solo dedo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué sonido debe producir Pai fa cuando se aplica correctamente?",
        options: [
          "Un sonido agudo",
          "Un sonido grave y hueco (como un tambor)",
          "Un sonido metálico",
          "Ningún sonido",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántos golpes por minuto se recomienda en Pai fa?",
        options: [
          "60 golpes/minuto",
          "120 golpes/minuto (velocidad moderada)",
          "200 golpes/minuto",
          "300 golpes/minuto",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el principal efecto terapéutico de Pai fa?",
        options: [
          "Tonificar el Bazo",
          "Despejar Humedad-Calor, aliviar tos con flema, descender el Yang de Hígado",
          "Calmar el Shen",
          "Generar calor superficial",
        ],
        correct: 1,
      },

      // ========== 7. JI DIAN FA (GOLPE DE DEDOS) ==========
      {
        text: "¿Qué significa 'Ji dian fa' en el contexto del Tuina?",
        options: [
          "Golpear con la palma ahuecada",
          "Golpeteo con la punta de uno, tres o cinco dedos",
          "Picar con el borde cubital de la mano",
          "Golpear con los nudillos",
        ],
        correct: 1,
      },
      {
        text: "¿De qué tradición se desarrolló Ji dian fa?",
        options: [
          "De la medicina herbaria",
          "De las artes marciales Shaolin",
          "De la acupuntura",
          "De la dietoterapia",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de reverberación produce Ji dian fa?",
        options: [
          "Superficial",
          "Profunda, fracturando bloqueos crónicos",
          "Local en la piel",
          "Exclusivamente muscular",
        ],
        correct: 1,
      },
      {
        text: "En el golpe liviano de Ji dian fa, ¿de dónde nace el movimiento?",
        options: ["Del hombro", "De la muñeca", "Del codo", "De los dedos"],
        correct: 1,
      },
      {
        text: "En el golpe moderado de Ji dian fa, ¿de dónde nace el movimiento?",
        options: ["Del hombro", "De la muñeca", "Del codo", "De los dedos"],
        correct: 2,
      },
      {
        text: "En el golpe pesado de Ji dian fa, ¿de dónde nace el movimiento?",
        options: ["Del hombro", "De la muñeca", "Del codo", "De los dedos"],
        correct: 0,
      },
      {
        text: "En casos de parálisis de un solo lado o síndrome Bi, ¿dónde se aplica el golpe pesado de Ji dian fa?",
        options: [
          "En el lado afectado",
          "En el lado sano, para que la onda resuene en el lado afectado",
          "En ambos lados por igual",
          "Solo en la columna vertebral",
        ],
        correct: 1,
      },

      // ========== 8. CHE FA (APRETAR Y SOLTAR) ==========
      {
        text: "¿Qué significa 'Che fa' en el contexto del Tuina?",
        options: [
          "Golpear con la palma ahuecada",
          "Pellizcar y tirar hacia arriba la piel/músculo superficial y soltarlo de golpe (como chasquear dedos)",
          "Picar con el borde cubital de la mano",
          "Tirar transversalmente de un tendón",
        ],
        correct: 1,
      },
      {
        text: "¿En qué nivel de la teoría del Tuina trabaja Che fa?",
        options: [
          "Capa Terrestre (profunda)",
          "Capa Celeste (Wei Qi), eliminando invasiones externas",
          "Capa Humana (media)",
          "Nivel estructural",
        ],
        correct: 1,
      },
      {
        text: "¿Qué sensación produce Che fa al ser recibida?",
        options: [
          "Relajación profunda",
          "A menudo resulta dolorosa, pero provoca una liberación inmediata",
          "Calor agradable",
          "Entumecimiento",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué tipo de patologías se utiliza Che fa?",
        options: [
          "Problemas digestivos crónicos",
          "Invasiones externas a nivel Wei Qi (Viento-Frío/Calor), resfríos, parálisis superficiales",
          "Problemas renales",
          "Trastornos hormonales",
        ],
        correct: 1,
      },
    ],
  },

  {
    id: "tuina-protocolos",
    category: "tuina",
    title: "Tuina - Protocolos Clínicos Específicos",
    description:
      "Estudio de protocolos de tratamiento para cervicalgias, dolor de hombro, codo, lumbar y rodilla. Puntos de acupresión, maniobras manuales, evaluación de efectividad y contraindicaciones.",
    questions: [
      // ========== 1. PROTOCOLO PARA CERVICALGIAS (FASE 1: MANIOBRAS MANUALES) ==========
      {
        text: "En el protocolo para cervicalgias, ¿qué técnica de rodamiento se aplica sobre los paravertebrales y trapecio durante 3-5 minutos?",
        options: ["Rou fa", "Gun fa", "Na fa", "Tui fa"],
        correct: 1,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué técnica de amasamiento con presión circular suave se aplica en la musculatura hipertónica durante 3 minutos?",
        options: ["Gun fa", "Na fa", "Rou fa", "An fa"],
        correct: 2,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué técnica de agarre y elevación del vientre muscular se repite 3-5 veces por lado en el trapecio (VB21)?",
        options: ["Gun fa", "Rou fa", "Na fa", "Mo fa"],
        correct: 2,
      },

      // ========== 2. PROTOCOLO PARA CERVICALGIAS (FASE 2: ACUPRESIÓN LOCAL) ==========
      {
        text: "En el protocolo para cervicalgias, ¿qué punto localizado en la depresión suboccipital entre el trapecio y el ECOM expulsa Viento exterior y relaja la nuca alta?",
        options: ["VB20 (Fengchi)", "V10 (Tianzhu)", "DU14 (Dazhui)", "VB21 (Jianjing)"],
        correct: 0,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto a 1,3 cun lateral a la línea media (C1/C2) calma el dolor occipital y destraba el canal Taiyang de Vejiga?",
        options: ["VB20 (Fengchi)", "V10 (Tianzhu)", "DU14 (Dazhui)", "VB21 (Jianjing)"],
        correct: 1,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto en el borde inferior de la apófisis espinosa de C7 libera el estancamiento general y dispersa el Frío?",
        options: ["VB20 (Fengchi)", "V10 (Tianzhu)", "DU14 (Dazhui)", "VB21 (Jianjing)"],
        correct: 2,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto en el punto medio entre C7 y el acromion desciende el Qi rebelde y libera la rigidez de hombros y trapecio?",
        options: ["VB20 (Fengchi)", "V10 (Tianzhu)", "DU14 (Dazhui)", "VB21 (Jianjing)"],
        correct: 3,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué puntos a 0,5 cun lateral a las apófisis espinosas (C2-C7) regulan la inervación segmentaria y relajan los paravertebrales profundos?",
        options: ["VB20 (Fengchi)", "V10 (Tianzhu)", "DU14 (Dazhui)", "Ex-B2 (Jiaji Cervical)"],
        correct: 3,
      },

      // ========== 3. PROTOCOLO PARA CERVICALGIAS (FASE 2: ACUPRESIÓN DISTAL) ==========
      {
        text: "En el protocolo para cervicalgias, ¿qué punto en la fosa infraespinosa destraba el elevador de la escápula y romboides?",
        options: ["ID11 (Tianzong)", "IG4 (Hegu)", "P7 (Lieque)", "ID3 (Houxi)"],
        correct: 0,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto de apertura de Du Mai es indispensable para dolor rígido de columna cervical posterior?",
        options: ["ID11 (Tianzong)", "IG4 (Hegu)", "P7 (Lieque)", "ID3 (Houxi)"],
        correct: 3,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto Yuan de IG4 es transmisor de analgesia general neurogénica y modulación del dolor del tronco superior?",
        options: ["ID11 (Tianzong)", "IG4 (Hegu)", "P7 (Lieque)", "ID3 (Houxi)"],
        correct: 1,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto comando clásico para afecciones de cabeza, nuca y cuello posterior es P7?",
        options: ["ID11 (Tianzong)", "IG4 (Hegu)", "P7 (Lieque)", "Ex-UE8 (Luozhen)"],
        correct: 2,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué punto empírico es de elección inmediata para tortícolis aguda?",
        options: ["ID11 (Tianzong)", "IG4 (Hegu)", "P7 (Lieque)", "Ex-UE8 (Luozhen)"],
        correct: 3,
      },

      // ========== 4. PROTOCOLO PARA CERVICALGIAS (FASE 3: TRACCIÓN Y MOVILIZACIÓN) ==========
      {
        text: "En el protocolo para cervicalgias, ¿cuánto tiempo se recomienda aplicar tracción axial sostenida en la base suboccipital?",
        options: ["5-10 segundos", "15-30 segundos", "1 minuto", "3 minutos"],
        correct: 1,
      },
      {
        text: "¿Cuál es la precaución principal al realizar movilización pasiva en cervicalgias?",
        options: [
          "Solo realizar en pacientes jóvenes",
          "No realizar maniobras bruscas de alta velocidad ante dolor agudo radicular o inestabilidad",
          "Siempre realizar con el paciente sentado",
          "Aplicar siempre tracción antes de la movilización",
        ],
        correct: 1,
      },

      // ========== 5. PROTOCOLO PARA CERVICALGIAS (FASE 4: CIERRE Y EVALUACIÓN) ==========
      {
        text: "En el protocolo para cervicalgias, ¿qué técnica de fricción térmica se aplica sobre DU14 (Dazhui) hasta generar calor profundo?",
        options: ["Mo fa", "Ma fa", "Ca fa", "Tui fa"],
        correct: 2,
      },
      {
        text: "En el protocolo para cervicalgias, ¿qué técnica de golpeteo suave ahuecado se aplica sobre los hombros para armonizar la circulación del Qi?",
        options: ["Ji fa", "Pai fa", "Ji dian fa", "Che fa"],
        correct: 1,
      },
      {
        text: "Según los criterios de efectividad para cervicalgias, ¿qué se debe testear inmediatamente después del masaje?",
        options: [
          "La temperatura de la piel",
          "La ganancia en el rango de movimiento (ROM) en rotación y flexo-extensión",
          "El color de la piel",
          "La frecuencia cardíaca",
        ],
        correct: 1,
      },
      {
        text: "¿Qué indica la transición de rigidez hipertónica dura a una fascia suave, elástica e irrigada durante el tratamiento de cervicalgias?",
        options: [
          "Que el paciente necesita más tiempo de masaje",
          "Un cambio positivo en la textura del tejido que indica efectividad",
          "Que el masaje fue demasiado suave",
          "Que se debe aplicar más presión",
        ],
        correct: 1,
      },
      {
        text: "En la evaluación de cervicalgias, ¿qué prueba evalúa el acortamiento de Trapecio Superior y Elevador de la Escápula?",
        options: [
          "Test del Vistazo al Hombro",
          "Inclinación Oreja al Hombro",
          "Flexo-Extensión",
          "Escala EVA",
        ],
        correct: 1,
      },

      // ========== 6. PROTOCOLO PARA CERVICALGIAS (PRECAUCIONES) ==========
      {
        text: "¿En qué pacientes está contraindicada la tracción fuerte o movilización brusca en cervicalgias?",
        options: [
          "Pacientes con hipertensión",
          "Pacientes con inestabilidad cervical o atlantoaxial",
          "Pacientes con diabetes",
          "Pacientes con alergias",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de maniobras se deben evitar en pacientes con compromiso radicular agudo o hernia discal cervical?",
        options: [
          "Manipulaciones bruscas de rotación sin pruebas vasculares previas",
          "Maniobras de flexión o rotación forzada si existen mareos, vértigo o parestesias irradiadas",
          "La acupresión distal suave",
          "El calor seco",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de maniobras están contraindicadas en pacientes con insuficiencia vertebrobasilar?",
        options: [
          "Manipulaciones bruscas tipo thrust de rotación sin pruebas vasculares previas",
          "La acupresión en puntos distales",
          "El masaje con Ca fa",
          "La aplicación de calor",
        ],
        correct: 0,
      },

      // ========== 7. PUNTOS DE ACUPRESIÓN PARA DOLOR DE HOMBRO ==========
      {
        text: "¿Qué punto de acupresión se utiliza para el dolor de hombro, localizado en la depresión anterior e inferior del acromion?",
        options: ["IG15 (Jianyu)", "TR14", "IG11 (Quchi)", "TR5 (Waiguan)"],
        correct: 0,
      },
      {
        text: "¿Qué punto de acupresión para dolor de hombro se encuentra en la depresión posterior e inferior del acromion?",
        options: ["IG15 (Jianyu)", "TR14", "IG11 (Quchi)", "TR5 (Waiguan)"],
        correct: 1,
      },
      {
        text: "¿Qué punto de acupresión para dolor de hombro se encuentra a 2 tsun del pliegue de la muñeca dorsal?",
        options: ["IG15 (Jianyu)", "TR14", "IG11 (Quchi)", "TR5 (Waiguan)"],
        correct: 3,
      },
      {
        text: "¿Qué punto de acupresión para dolor de hombro se encuentra por arriba de ID9 y por debajo de la espina del omóplato?",
        options: ["IG15 (Jianyu)", "TR14", "ID10 (Tianzong)", "IG11 (Quchi)"],
        correct: 2,
      },

      // ========== 8. PUNTOS DE ACUPRESIÓN PARA DOLOR DE CODO ==========
      {
        text: "¿Qué punto de acupresión para dolor de codo se encuentra al final del pliegue del codo?",
        options: ["IG11 (Quchi)", "TR10 (Tianjing)", "ID8 (Xiaohai)", "VB34 (Yanglingquan)"],
        correct: 0,
      },
      {
        text: "¿Qué punto de acupresión para dolor de codo se encuentra a 2 tsun de IG11?",
        options: ["IG10 (Shousanli)", "TR10 (Tianjing)", "ID8 (Xiaohai)", "VB34 (Yanglingquan)"],
        correct: 0,
      },
      {
        text: "¿Qué punto de acupresión para dolor de codo se encuentra 1 tsun por encima del olécranon?",
        options: ["IG10 (Shousanli)", "TR10 (Tianjing)", "ID8 (Xiaohai)", "VB34 (Yanglingquan)"],
        correct: 1,
      },
      {
        text: "¿Qué punto de acupresión para dolor de codo se encuentra entre la epitróclea y el olécranon?",
        options: ["IG10 (Shousanli)", "TR10 (Tianjing)", "ID8 (Xiaohai)", "VB34 (Yanglingquan)"],
        correct: 2,
      },
      {
        text: "¿Qué punto maestro de los tendones (VB34) se utiliza para el dolor de codo, localizado por delante y por debajo de la cabeza del peroné?",
        options: ["IG10 (Shousanli)", "TR10 (Tianjing)", "ID8 (Xiaohai)", "VB34 (Yanglingquan)"],
        correct: 3,
      },

      // ========== 9. PUNTOS DE ACUPRESIÓN PARA DOLOR LUMBAR ==========
      {
        text: "¿Qué punto de acupresión para dolor lumbar se encuentra 1,5 tsun de la apófisis espinosa de lumbar 2?",
        options: ["V23 (Shenshu)", "VB30 (Huantiao)", "V40 (Weizhong)", "V60 (Kunlun)"],
        correct: 0,
      },
      {
        text: "¿Qué punto de acupresión para dolor lumbar se encuentra en el hueco poplíteo?",
        options: ["V23 (Shenshu)", "VB30 (Huantiao)", "V40 (Weizhong)", "V60 (Kunlun)"],
        correct: 2,
      },
      {
        text: "¿Qué punto de acupresión para dolor lumbar se encuentra entre el maléolo externo y el tendón de Aquiles?",
        options: ["V23 (Shenshu)", "VB30 (Huantiao)", "V57 (Chengshan)", "V60 (Kunlun)"],
        correct: 3,
      },
      {
        text: "¿Qué punto de acupresión para dolor lumbar se encuentra entre el trocánter mayor y la unión del coxis y sacro, en el 1/3 hacia el trocánter?",
        options: ["V23 (Shenshu)", "VB30 (Huantiao)", "V40 (Weizhong)", "V60 (Kunlun)"],
        correct: 1,
      },

      // ========== 10. PUNTOS DE ACUPRESIÓN PARA DOLOR DE RODILLA ==========
      {
        text: "¿Qué punto de acupresión para dolor de rodilla se encuentra en el hueco poplíteo?",
        options: ["V40 (Weizhong)", "E35 (Dubi)", "E34 (Liangqiu)", "BP10 (Xuehai)"],
        correct: 0,
      },
      {
        text: "¿Qué punto de acupresión para dolor de rodilla se encuentra en el 'ojo de la rótula'?",
        options: ["V40 (Weizhong)", "E35 (Dubi)", "E34 (Liangqiu)", "BP10 (Xuehai)"],
        correct: 1,
      },
      {
        text: "¿Qué punto de acupresión para dolor de rodilla se encuentra 2 tsun del borde superior externo de la rótula?",
        options: ["V40 (Weizhong)", "E35 (Dubi)", "E34 (Liangqiu)", "BP10 (Xuehai)"],
        correct: 2,
      },
      {
        text: "¿Qué punto de acupresión para dolor de rodilla se encuentra 2 tsun del borde superior interno de la rótula?",
        options: ["V40 (Weizhong)", "E35 (Dubi)", "E34 (Liangqiu)", "BP10 (Xuehai)"],
        correct: 3,
      },
      {
        text: "¿Qué punto de acupresión para dolor de rodilla se encuentra 3 tsun del ojo de la rótula?",
        options: ["V40 (Weizhong)", "E35 (Dubi)", "E36 (Zusanli)", "BP10 (Xuehai)"],
        correct: 2,
      },
    ],
  },
];
