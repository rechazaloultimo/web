import type { QuizMeta } from './quiz-types';

export const anatomiaQuizzes: QuizMeta[] = [
  {
    id: "anatomia-osea",
    category: "anatomia",
    title: "Anatomía Ósea – Terminología y Reparos (Glosario Interactivo)",
    description:
      "Definiciones de términos anatómicos relacionados exclusivamente con el sistema óseo: posiciones, partes de los huesos, clasificaciones, columna vertebral y reparos palpables.",
    questions: [
      // ==========================================
      // SECCIÓN 1: POSICIONES Y DECÚBITOS
      // ==========================================
      {
        text: "¿Qué significa 'decúbito supino' o 'dorsal'?",
        options: [
          "Acostado boca abajo",
          "Acostado de lado",
          "Acostado boca arriba",
          "Sentado con las piernas elevadas",
        ],
        correct: 2,
      },
      {
        text: "¿Qué es el 'decúbito prono' o 'ventral'?",
        options: [
          "Acostado boca arriba",
          "Acostado boca abajo",
          "Posición de pie",
          "Decúbito lateral derecho",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es el 'decúbito lateral'?",
        options: [
          "Acostado boca arriba",
          "Acostado de lado (izquierdo o derecho)",
          "Acostado en posición fetal",
          "Posición de Trendelenburg",
        ],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 2: HUESOS Y SUS PARTES (CLASIFICACIÓN Y ESTRUCTURA)
      // ==========================================
      {
        text: "¿Qué son las 'epífisis' en un hueso largo?",
        options: [
          "La porción central o cuerpo del hueso",
          "Los extremos o cabezas del hueso, que forman parte de la articulación",
          "Las membranas que envuelven el hueso",
          "Las cavidades donde se aloja la médula ósea",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es la 'diáfisis' de un hueso largo?",
        options: [
          "La porción central y alargada (cuerpo) del hueso",
          "El cartílago que recubre los extremos articulares",
          "La capa externa de tejido conectivo denso",
          "La zona de crecimiento en niños",
        ],
        correct: 0,
      },
      {
        text: "¿Qué son las 'apófisis' óseas?",
        options: [
          "Depresiones o cavidades en el hueso",
          "Salientes, eminencias o protuberancias del hueso donde se insertan tendones y ligamentos",
          "Líneas de fractura",
          "Células formadoras de hueso",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es una 'cavidad articular'?",
        options: [
          "El espacio dentro de la médula ósea",
          "La depresión en un hueso donde se aloja otro hueso para formar una articulación",
          "Un orificio por donde pasan nervios",
          "Una fractura hundida",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es el 'periostio'?",
        options: [
          "La membrana que recubre la superficie externa del hueso (excepto en zonas articulares), rica en vasos y nervios",
          "El tejido que rellena la cavidad medular",
          "El cartílago que amortigua las articulaciones",
          "El líquido sinovial que lubrica la articulación",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es la 'cavidad medular'?",
        options: [
          "El espacio interior de la diáfisis de los huesos largos que contiene médula ósea",
          "La superficie articular cubierta de cartílago",
          "El canal por donde pasan los nervios periféricos",
          "La depresión donde se inserta un ligamento",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se clasifica un 'hueso largo'?",
        options: [
          "Aquel donde el ancho y el largo son similares (ej. vértebras)",
          "Aquel donde predomina la longitud sobre el ancho y el espesor (ej. fémur, húmero)",
          "Aquel que es delgado y protege órganos (ej. escápula, esternón)",
          "Aquel que se encuentra dentro de un tendón (ej. rótula)",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es un 'hueso plano'?",
        options: [
          "Un hueso con forma cilíndrica y largo",
          "Un hueso de forma irregular con múltiples apófisis",
          "Un hueso delgado, aplanado y generalmente curvo, que protege órganos (ej. omóplato, huesos del cráneo)",
          "Un hueso pequeño y redondeado incluido en un tendón",
        ],
        correct: 2,
      },
      {
        text: "¿Qué es un 'hueso corto'?",
        options: [
          "Un hueso muy largo pero delgado",
          "Un hueso con dimensiones de largo, ancho y espesor aproximadamente iguales (ej. huesos del carpo y tarso)",
          "Un hueso que protege vísceras",
          "Un hueso con cavidad neumática",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es un 'hueso sesamoideo'?",
        options: [
          "Un hueso que forma parte de la bóveda craneal",
          "Un pequeño hueso redondeado que se desarrolla dentro de un tendón (ej. la rótula)",
          "Un hueso que articula con el esternón",
          "Un tipo de vértebra",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es un 'hueso irregular'?",
        options: [
          "Un hueso que no encaja en las categorías de largo, plano o corto, con forma compleja (ej. vértebras, huesos de la cara)",
          "Un hueso que ha sufrido una fractura",
          "Un hueso que no tiene médula ósea",
          "Un hueso que solo se encuentra en el cráneo",
        ],
        correct: 0,
      },
      {
        text: "¿Qué nombre recibe una prominencia ósea redondeada que articula con otro hueso?",
        options: ["Tuberosidad", "Cóndilo", "Fosa", "Agujero"],
        correct: 1,
      },
      {
        text: "¿Qué es una 'fosa' en anatomía ósea?",
        options: [
          "Una elevación alargada en la superficie del hueso",
          "Una depresión o cavidad poco profunda en el hueso",
          "Un conducto que atraviesa el hueso",
          "Un extremo redondeado de un hueso",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es una 'tuberosidad' ósea?",
        options: [
          "Una pequeña depresión para la inserción de ligamentos",
          "Una prominencia grande y rugosa donde se insertan músculos y tendones",
          "Un agujero por donde pasa un nervio",
          "Una superficie articular lisa",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es un 'agujero' (foramen) en un hueso?",
        options: [
          "Un orificio que permite el paso de vasos sanguíneos, nervios o ligamentos",
          "Una elevación en la superficie ósea",
          "Una cavidad articular",
          "Un extremo de un hueso largo",
        ],
        correct: 0,
      },

      // ==========================================
      // SECCIÓN 3: COLUMNA VERTEBRAL
      // ==========================================
      {
        text: "¿Cuál es la curvatura fisiológica de la columna cervical?",
        options: [
          "Cifosis (concavidad anterior)",
          "Lordosis (concavidad posterior)",
          "Escoliosis",
          "Rectitud",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de curvatura presenta la región torácica de la columna?",
        options: ["Lordosis", "Cifosis", "Escoliosis", "Hiperlordosis"],
        correct: 1,
      },
      {
        text: "¿Qué es un 'disco intervertebral'?",
        options: [
          "Una almohadilla de cartílago situada entre las vértebras, que amortigua y permite flexibilidad",
          "Un ligamento que une las apófisis espinosas",
          "Parte del arco vertebral",
          "La articulación sinovial de la columna",
        ],
        correct: 0,
      },
      {
        text: "¿Qué estructura ósea forma la 'apófisis espinosa' de una vértebra?",
        options: [
          "La parte anterior del cuerpo vertebral",
          "La prolongación que se dirige hacia atrás y se palpa en la línea media de la espalda",
          "La proyección lateral que sirve de inserción muscular",
          "El agujero vertebral",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántas vértebras cervicales tiene la columna vertebral humana?",
        options: ["5", "7", "12", "4"],
        correct: 1,
      },
      {
        text: "¿Qué región de la columna tiene 12 vértebras?",
        options: ["Cervical", "Torácica", "Lumbar", "Sacro"],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 4: REPAROS ÓSEOS PALPABLES Y REFERENCIAS
      // ==========================================
      {
        text: "¿Qué es la 'cresta ilíaca'?",
        options: [
          "La prominencia ósea en la parte superior de la cadera (hueso ilíaco), que se palpa en la cintura",
          "El borde inferior de las costillas",
          "La apófisis espinosa de C7",
          "La parte anterior de la tibia",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es el 'trocanter mayor' del fémur?",
        options: [
          "La cabeza redonda que articula con la cadera",
          "Una gran prominencia ósea en la parte superior lateral del fémur, punto de inserción muscular palpable",
          "El cóndilo interno de la rodilla",
          "La tuberosidad tibial anterior",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es el 'acromion'?",
        options: [
          "La apófisis de la escápula que forma la punta del hombro y se articula con la clavícula",
          "La cavidad glenoidea de la escápula",
          "El extremo esternal de la clavícula",
          "El tubérculo menor del húmero",
        ],
        correct: 0,
      },
      {
        text: "¿Qué estructura ósea constituye la 'espina de la escápula'?",
        options: [
          "Una cresta ósea en la cara posterior de la escápula, palpable en la espalda",
          "El borde lateral del omóplato",
          "La apófisis coracoides",
          "El ángulo inferior de la escápula",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el hueso más largo del cuerpo humano?",
        options: ["El húmero", "El fémur", "La tibia", "El radio"],
        correct: 1,
      },
      {
        text: "¿Qué hueso forma la prominencia del codo (olécranon)?",
        options: ["El radio", "El cúbito", "El húmero", "La clavícula"],
        correct: 1,
      },
      {
        text: "¿Qué hueso forma la parte anterior de la rodilla (rótula)?",
        options: [
          "Un hueso sesamoideo incluido en el tendón del cuádriceps",
          "Un hueso corto del tarso",
          "Un hueso plano del cráneo",
          "Una vértebra lumbar",
        ],
        correct: 0,
      },
    ],
  },

  //Anatomia - Articulaciones y Ligamentos
  {
    id: "anatomia-articulaciones-ligamentos",
    category: "anatomia",
    title: "Articulaciones y Ligamentos – Terminología Esencial (Glosario Interactivo)",
    description:
      "Definiciones de los conceptos fundamentales sobre articulaciones (clasificación, tipos, componentes) y ligamentos (función y ejemplos principales).",
    questions: [
      // ==========================================
      // SECCIÓN 1: DEFINICIÓN Y CLASIFICACIÓN FUNCIONAL
      // ==========================================
      {
        text: "¿Qué es una articulación en anatomía?",
        options: [
          "La unión entre dos o más huesos o entre un hueso y un cartílago",
          "El tejido que conecta un músculo con un hueso",
          "La cavidad donde se aloja la médula ósea",
          "El espacio entre dos vértebras",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se clasifican las articulaciones según su movilidad?",
        options: [
          "Fijas, semimóviles y móviles",
          "Simples y compuestas",
          "Primarias y secundarias",
          "Fibrosas, cartilaginosas y sinoviales",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es una 'sinartrosis'?",
        options: [
          "Una articulación inmóvil o fija (ej. suturas del cráneo)",
          "Una articulación semimóvil (ej. sínfisis púbica)",
          "Una articulación libremente móvil (ej. rodilla)",
          "Una articulación que se ha luxado",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es una 'anfiartrosis'?",
        options: [
          "Una articulación completamente inmóvil",
          "Una articulación semimóvil, unida por cartílago (ej. discos intervertebrales, sínfisis púbica)",
          "Una diartrosis sin cápsula",
          "La unión de dos huesos largos",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es una 'diartrosis' (articulación sinovial)?",
        options: [
          "Una articulación fija sin cavidad",
          "Una articulación libremente móvil que contiene líquido sinovial y cápsula articular (ej. rodilla, hombro)",
          "La unión entre dos vértebras",
          "Un tipo de sutura craneal",
        ],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 2: CLASIFICACIÓN ESTRUCTURAL (FIBROSAS, CARTILAGINOSAS, SINOVIALES)
      // ==========================================
      {
        text: "¿Qué tipo de articulación es una sutura craneal según su estructura?",
        options: [
          "Articulación fibrosa",
          "Articulación cartilaginosa",
          "Articulación sinovial",
          "Articulación elastoide",
        ],
        correct: 0,
      },
      {
        text: "¿Qué tipo de articulación es la sínfisis púbica según su estructura?",
        options: ["Fibrosa", "Cartilaginosa", "Sinovial", "Membranosa"],
        correct: 1,
      },
      {
        text: "¿Qué tipo de articulación es la rodilla según su estructura?",
        options: ["Fibrosa", "Cartilaginosa", "Sinovial", "Anfiartrosis"],
        correct: 2,
      },
      {
        text: "¿Qué tipo de articulación es la articulación temporomandibular?",
        options: ["Fibrosa", "Cartilaginosa", "Sinovial", "Sinartrosis"],
        correct: 2,
      },

      // ==========================================
      // SECCIÓN 3: COMPONENTES DE LA ARTICULACIÓN SINOVIAL
      // ==========================================
      {
        text: "¿Qué es la 'cápsula articular'?",
        options: [
          "El líquido que lubrica la articulación",
          "El cartílago que recubre las superficies óseas",
          "La envoltura fibrosa que rodea la articulación y mantiene los huesos en contacto",
          "El espacio entre dos huesos",
        ],
        correct: 2,
      },
      {
        text: "¿Qué función tiene el 'cartílago articular' en una articulación sinovial?",
        options: [
          "Producir líquido sinovial",
          "Reducir la fricción y absorber impactos",
          "Unir los huesos mediante ligamentos",
          "Dar estabilidad pasiva",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es el 'líquido sinovial'?",
        options: [
          "Un fluido viscoso que lubrica la articulación y nutre el cartílago",
          "El tejido que forma los ligamentos",
          "El recubrimiento externo del hueso",
          "El material del disco intervertebral",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es un 'menisco' en anatomía articular?",
        options: [
          "Un ligamento intraarticular",
          "Un disco de fibrocartílago en forma de medialuna que mejora la congruencia articular (ej. en la rodilla)",
          "La membrana que envuelve el tendón",
          "Un tipo de hueso sesamoideo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué estructura recubre internamente la cápsula articular y segrega líquido sinovial?",
        options: [
          "El periostio",
          "La membrana sinovial",
          "El cartílago hialino",
          "El ligamento cruzado",
        ],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 4: TIPOS DE MOVIMIENTOS ARTICULARES
      // ==========================================
      {
        text: "¿Qué movimiento se conoce como 'flexión'?",
        options: [
          "Aumentar el ángulo de una articulación",
          "Alejar una parte del cuerpo de la línea media",
          "Disminuir el ángulo de una articulación, acercando los segmentos corporales",
          "Rotar el tronco",
        ],
        correct: 2,
      },
      {
        text: "¿Qué movimiento es la 'extensión'?",
        options: [
          "Disminuir el ángulo articular",
          "Aumentar el ángulo articular, enderezando la articulación",
          "Alejar la extremidad de la línea media",
          "Girar hacia adentro",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es la 'abducción'?",
        options: [
          "Doblar una articulación disminuyendo el ángulo",
          "Alejar una extremidad de la línea media del cuerpo",
          "Girar el antebrazo para poner la palma hacia abajo",
          "Acercar una extremidad a la línea media",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es la 'aducción'?",
        options: [
          "Alejar una extremidad de la línea media",
          "Acercar una extremidad a la línea media del cuerpo",
          "Doblar hacia atrás",
          "Girar hacia fuera",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es la 'rotación interna' o 'medial' de una extremidad?",
        options: [
          "Girar el miembro hacia la línea media del cuerpo",
          "Girar el miembro hacia fuera",
          "Doblar la articulación hacia adelante",
          "Extender la articulación",
        ],
        correct: 0,
      },
      {
        text: "¿Qué movimiento combina flexión, extensión, abducción y aducción en secuencia sin rotar?",
        options: ["Circunducción", "Pronación", "Supinación", "Inversión"],
        correct: 0,
      },

      // ==========================================
      // SECCIÓN 5: LIGAMENTOS – DEFINICIÓN Y EJEMPLOS
      // ==========================================
      {
        text: "¿Qué son los 'ligamentos' en anatomía?",
        options: [
          "Bandas de tejido conectivo fibroso que conectan hueso con hueso, dando estabilidad a la articulación",
          "Bandas que conectan músculo con hueso",
          "Vasos sanguíneos periarticulares",
          "Nervios que inervan la articulación",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal de un ligamento?",
        options: [
          "Generar movimiento activo",
          "Limitar los movimientos excesivos y proporcionar estabilidad pasiva a la articulación",
          "Producir líquido sinovial",
          "Absorber impactos",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ligamento de la rodilla evita el desplazamiento anterior de la tibia?",
        options: [
          "Ligamento colateral medial",
          "Ligamento cruzado anterior (LCA)",
          "Ligamento cruzado posterior (LCP)",
          "Ligamento rotuliano",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ligamento de la rodilla evita el desplazamiento posterior de la tibia?",
        options: [
          "Ligamento cruzado anterior (LCA)",
          "Ligamento cruzado posterior (LCP)",
          "Ligamento colateral lateral",
          "Ligamento poplíteo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ligamento une la cabeza del fémur con el acetábulo en la cadera?",
        options: [
          "Ligamento redondo (ligamento de la cabeza femoral)",
          "Ligamento iliofemoral",
          "Ligamento pubofemoral",
          "Ligamento isquiofemoral",
        ],
        correct: 0,
      },
      {
        text: "¿Qué ligamento es el más fuerte del cuerpo humano y estabiliza la articulación de la cadera?",
        options: [
          "Ligamento iliofemoral",
          "Ligamento pubofemoral",
          "Ligamento redondo",
          "Ligamento sacroilíaco",
        ],
        correct: 0,
      },
      {
        text: "¿Qué ligamento del hombro forma parte del manguito rotador?",
        options: [
          "Ligamento coracohumeral",
          "Ligamento acromioclavicular",
          "Ligamento glenohumeral",
          "Ligamento transversoS",
        ],
        correct: 2,
      },
      {
        text: "¿Qué ligamento estabiliza la articulación acromioclavicular del hombro?",
        options: [
          "Ligamento coracoclavicular",
          "Ligamento acromioclavicular",
          "Ligamento coracoacromial",
          "Ligamento glenohumeral",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es un 'esguince' en relación con los ligamentos?",
        options: [
          "Una fractura del hueso adyacente",
          "Un estiramiento o desgarro de un ligamento",
          "Una inflamación del cartílago",
          "La pérdida de líquido sinovial",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ligamento une el cúbito con el radio a nivel de la muñeca (lado cubital)?",
        options: [
          "Ligamento colateral cubital de la muñeca",
          "Ligamento colateral radial de la muñeca",
          "Ligamento escafolunar",
          "Ligamento semilunar",
        ],
        correct: 0,
      },
    ],
  },

  //Anatomia - Musculos y Tendones
  {
    id: "anatomia-musculos-tendones",
    category: "anatomia",
    title: "Músculos y Tendones – Terminología Esencial (Glosario Interactivo)",
    description:
      "Definiciones de los conceptos fundamentales sobre músculos (tipos, funciones, nomenclatura) y tendones (estructura, función, ejemplos principales).",
    questions: [
      // ==========================================
      // SECCIÓN 1: DEFINICIONES BÁSICAS
      // ==========================================
      {
        text: "¿Qué es un músculo en anatomía?",
        options: [
          "Un tejido especializado en la contracción, que permite el movimiento, la estabilidad y la generación de calor",
          "Un hueso que protege órganos internos",
          "Un ligamento que conecta dos huesos",
          "Un órgano que bombea sangre",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es un tendón?",
        options: [
          "Una estructura fibrosa que conecta un músculo con un hueso",
          "Una banda que conecta hueso con hueso",
          "Un tipo de cartílago que amortigua articulaciones",
          "Un fluido que lubrica las articulaciones",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal de un músculo esquelético?",
        options: [
          "Producir calor y movimiento voluntario",
          "Bombear sangre",
          "Regular la presión arterial",
          "Absorber nutrientes",
        ],
        correct: 0,
      },

      // ==========================================
      // SECCIÓN 2: TIPOS DE TEJIDO MUSCULAR
      // ==========================================
      {
        text: "¿Qué caracteriza al 'músculo liso'?",
        options: [
          "Es voluntario y se inserta en los huesos",
          "Es involuntario y se encuentra en las paredes de las vísceras (vasos sanguíneos, intestinos, vejiga)",
          "Es estriado y forma el corazón",
          "Es el responsable de mover las extremidades",
        ],
        correct: 1,
      },
      {
        text: "¿Qué caracteriza al 'músculo estriado esquelético'?",
        options: [
          "Es involuntario y no tiene estrías",
          "Es voluntario, con estrías transversales, y se inserta en los huesos",
          "Es involuntario y forma el corazón",
          "Se encuentra solo en las vísceras",
        ],
        correct: 1,
      },
      {
        text: "¿Qué caracteriza al 'músculo cardíaco' (miocardio)?",
        options: [
          "Es voluntario y estriado",
          "Es involuntario, estriado, y se encuentra exclusivamente en el corazón",
          "Es liso y se contrae rítmicamente",
          "Es voluntario y no tiene estrías",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de músculo controlamos de forma voluntaria (consciente)?",
        options: [
          "El músculo liso",
          "El músculo estriado esquelético",
          "El músculo cardíaco",
          "Todos los músculos son voluntarios",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de músculo se contrae de forma involuntaria (automática)?",
        options: [
          "El músculo estriado esquelético",
          "El músculo liso y el cardíaco",
          "Solo el músculo liso",
          "Solo el músculo cardíaco",
        ],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 3: PARTES DE UN MÚSCULO Y FUNCIONES
      // ==========================================
      {
        text: "¿Qué es el 'vientre muscular'?",
        options: [
          "La porción central y carnosa del músculo, donde se produce la contracción",
          "El extremo tendinoso que se inserta en el hueso",
          "La membrana que recubre el músculo",
          "El punto de origen del músculo",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es el 'origen' de un músculo?",
        options: [
          "La inserción más móvil del músculo",
          "El punto de fijación más estable o proximal del músculo",
          "El tendón que conecta con el hueso",
          "La fascia que lo envuelve",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es la 'inserción' de un músculo?",
        options: [
          "El punto de fijación más móvil o distal del músculo",
          "El punto de origen fijo",
          "La vaina tendinosa que lo protege",
          "El ligamento que lo estabiliza",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es la 'aponeurosis'?",
        options: [
          "Una lámina de tejido conectivo fibroso que envuelve o fija un músculo",
          "Un ligamento articular",
          "Un tipo de hueso sesamoideo",
          "Una bolsa sinovial",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es el 'músculo agonista'?",
        options: [
          "El músculo que se opone al movimiento",
          "El músculo principal que realiza un movimiento específico",
          "El que estabiliza la articulación",
          "El que se relaja durante el movimiento",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es el 'músculo antagonista'?",
        options: [
          "El músculo que ayuda al agonista en el movimiento",
          "El que se opone o se relaja para permitir el movimiento del agonista",
          "El que fija la postura",
          "El que inicia el movimiento",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es un 'músculo sinergista'?",
        options: [
          "El que se opone al agonista",
          "El que colabora con el agonista para realizar el movimiento de forma más eficiente",
          "El que fija el hueso",
          "El que no participa en el movimiento",
        ],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 4: NOMENCLATURA MUSCULAR (NOMBRES SEGÚN FORMA, TAMAÑO, ACCIÓN)
      // ==========================================
      {
        text: "¿Qué indica el nombre 'bíceps' en un músculo?",
        options: [
          "Que tiene dos cabezas o vientres de origen",
          "Que tiene tres cabezas",
          "Que tiene cuatro cabezas",
          "Que tiene forma de trapecio",
        ],
        correct: 0,
      },
      {
        text: "¿Qué indica el nombre 'tríceps'?",
        options: [
          "Que tiene dos cabezas",
          "Que tiene tres cabezas",
          "Que tiene cuatro cabezas",
          "Que tiene forma de rombo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué músculo tiene cuatro cabezas (cuádriceps)?",
        options: [
          "El bíceps braquial",
          "El músculo de la pantorrilla",
          "El cuádriceps femoral (extensor de la rodilla)",
          "El deltoides",
        ],
        correct: 2,
      },
      {
        text: "¿Qué indica en el nombre de un músculo el término 'recto' (ej. recto abdominal)?",
        options: [
          "Que tiene forma triangular",
          "Que sus fibras son paralelas y rectas",
          "Que se inserta en la cabeza",
          "Que es ancho y plano",
        ],
        correct: 1,
      },
      {
        text: "¿Qué indica el término 'deltoides' en un músculo?",
        options: [
          "Que tiene forma de triángulo (delta)",
          "Que tiene dos cabezas",
          "Que tiene forma redonda",
          "Que es alargado",
        ],
        correct: 0,
      },
      {
        text: "¿Qué músculo se llama así por su forma de 'trapecio'?",
        options: [
          "El trapecio de la espalda",
          "El deltoides del hombro",
          "El bíceps del brazo",
          "El glúteo mayor",
        ],
        correct: 0,
      },

      // ==========================================
      // SECCIÓN 5: TENDONES – DEFINICIÓN, FUNCIÓN Y EJEMPLOS
      // ==========================================
      {
        text: "¿Cuál es la función principal de un tendón?",
        options: [
          "Conectar músculo a hueso y transmitir la fuerza de contracción",
          "Conectar hueso a hueso para dar estabilidad",
          "Amortiguar las articulaciones",
          "Producir líquido sinovial",
        ],
        correct: 0,
      },
      {
        text: "¿Qué estructura envuelve a los tendones para reducir la fricción en zonas de roce?",
        options: [
          "La vaina tendinosa",
          "El periostio",
          "La membrana sinovial",
          "La cápsula articular",
        ],
        correct: 0,
      },
      {
        text: "¿Qué tendón es el más fuerte y grande del cuerpo humano?",
        options: [
          "El tendón del bíceps",
          "El tendón rotuliano",
          "El tendón de Aquiles",
          "El tendón del tríceps",
        ],
        correct: 2,
      },
      {
        text: "¿Qué tendón conecta el músculo cuádriceps con la tibia (rótula)?",
        options: [
          "El tendón rotuliano (ligamento rotuliano)",
          "El tendón de Aquiles",
          "El tendón del bíceps femoral",
          "El tendón del glúteo",
        ],
        correct: 0,
      },
      {
        text: "¿Qué tendón del hombro suele lesionarse en la tendinitis del manguito rotador?",
        options: [
          "Tendón del bíceps",
          "Tendón del supraespinoso",
          "Tendón del tríceps",
          "Tendón del deltoides",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tendón se inflama en la 'tendinitis de Quervain' en la muñeca?",
        options: [
          "Tendón del extensor corto del pulgar y abductor largo del pulgar",
          "Tendón del flexor radial del carpo",
          "Tendón del extensor común de los dedos",
          "Tendón del cubital anterior",
        ],
        correct: 0,
      },
      {
        text: "¿Qué es una 'vaina tendinosa'?",
        options: [
          "Un revestimiento sinovial que envuelve el tendón para reducir la fricción",
          "Una bolsa llena de líquido sinovial",
          "Un ligamento que fija el tendón",
          "Una capa de cartílago",
        ],
        correct: 0,
      },

      // ==========================================
      // SECCIÓN 6: EJEMPLOS DE MÚSCULOS IMPORTANTES
      // ==========================================
      {
        text: "¿Cuál es la función principal del bíceps braquial?",
        options: [
          "Extender el codo",
          "Flexionar el codo y supinar el antebrazo",
          "Abducir el hombro",
          "Rotar el brazo hacia fuera",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal del tríceps braquial?",
        options: [
          "Flexionar el codo",
          "Extender el codo (estirar el brazo)",
          "Abducir el hombro",
          "Rotar la muñeca",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal del músculo deltoides?",
        options: [
          "Flexionar y abducir el hombro",
          "Extender el codo",
          "Flexionar la muñeca",
          "Rotar el cuello",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal del cuádriceps femoral?",
        options: [
          "Flexionar la rodilla",
          "Extender la rodilla (enderezar la pierna)",
          "Abducir la cadera",
          "Flexionar la cadera",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal de los isquiotibiales (muslo posterior)?",
        options: [
          "Extender la rodilla",
          "Flexionar la rodilla y extender la cadera",
          "Abducir la cadera",
          "Rotar el pie",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal del músculo gastrocnemio (gemelo) de la pantorrilla?",
        options: [
          "Flexionar el pie hacia arriba (dorsiflexión)",
          "Extender el pie hacia abajo (flexión plantar) y flexionar la rodilla",
          "Rotar el pie hacia fuera",
          "Invertir el pie",
        ],
        correct: 1,
      },
    ],
  },
];
