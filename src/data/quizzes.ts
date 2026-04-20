// src/data/quizzes.ts
export interface Question {
  text: string;
  options: string[];
  correct: number;
}

export interface QuizMeta {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const quizzes: QuizMeta[] = [
  {
    id: "sanbao",
    title: "Los Tres Tesoros (Sānbǎo)",
    description: "Jīng, Qì y Shén en Medicina Tradicional China",
    questions: [
      {
        text: "Según la clase, ¿cuál es la definición más completa de los Tres Tesoros (Sānbǎo) en la fisiología china?",
        options: [
          "Cuerpo, mente y emociones separadas",
          "Jīng (esencia/estructura), Qì (energía/función), Shén (espíritu/conciencia)",
          "Yīn, Yáng y energía universal",
          "Sangre, fluidos y órganos internos",
        ],
        correct: 1,
      },
      {
        text: "El Jīng prenatal (esencia del cielo anterior) se caracteriza por:",
        options: [
          "Ser ilimitado y renovable mediante la respiración",
          "Almacenarse en el hígado y reponerse con ejercicio",
          "Ser un recurso limitado heredado, que se agota con el desorden y el tiempo",
          "Provenir únicamente de los alimentos sólidos",
        ],
        correct: 2,
      },
      {
        text: "¿Qué órganos son clave para transformar la esencia postnatal (Jīng adquirido) en sustancias fundamentales como Qì, sangre y líquidos?",
        options: [
          "Corazón e Intestino Delgado",
          "Bazo y Estómago",
          "Riñón y Vejiga",
          "Pulmón e Intestino Grueso",
        ],
        correct: 1,
      },
      {
        text: "Según la explicación de los ideogramas, ¿cómo se compone el ideograma de Qì (氣)?",
        options: [
          "Semilla + fuego → energía pura",
          "Vapor (inmaterial) + arroz/semilla (material) → transformación",
          "Cielo + tierra → movimiento eterno",
          "Agua + madera → flujo vital",
        ],
        correct: 1,
      },
      {
        text: "El Qì prenatal (Yuánqì) se almacena principalmente en:",
        options: [
          "El Dāntián superior (cabeza)",
          "El corazón, como Shén",
          "El Dāntián inferior (sistema de riñones / Mìngmén)",
          "El centro del pecho (Shānzhōng)",
        ],
        correct: 2,
      },
      {
        text: "¿Cuál es la función principal del Qì en el organismo?",
        options: [
          "Formar únicamente la estructura ósea",
          "Impulsar las funciones orgánicas, mover sangre y líquidos, y regular órganos",
          "Almacenar memorias ancestrales",
          "Ser el asiento exclusivo de las emociones",
        ],
        correct: 1,
      },
      {
        text: "Patologías asociadas con disfunción del Qì incluyen:",
        options: [
          "Solo alergias cutáneas",
          "Cansancio, agotamiento, dolor, problemas de circulación e indigestión",
          "Fracturas óseas hereditarias",
          "Únicamente insomnio severo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué representa el Shén (神) dentro del marco de los Tres Tesoros?",
        options: [
          "La esencia física y los fluidos",
          "La fuerza muscular instintiva",
          "La conciencia, el espíritu, el calor que transforma y la expresión mental/emocional",
          "El sistema inmunológico adquirido",
        ],
        correct: 2,
      },
      {
        text: "Las 'Cinco Almas' (aspectos del Shén) se distribuyen en los órganos Zàng. ¿Cuál es la correspondencia CORRECTA?",
        options: [
          "Hún → Pulmón; Pò → Hígado; Yì → Corazón; Zhì → Bazo",
          "Shén → Corazón; Hún → Hígado; Pò → Pulmones; Yì → Bazo; Zhì → Riñón",
          "Shén → Bazo; Hún → Riñón; Pò → Corazón; Yì → Pulmón; Zhì → Hígado",
          "Zhì → Hígado; Shén → Pulmón; Yì → Corazón; Pò → Riñón; Hún → Bazo",
        ],
        correct: 1,
      },
      {
        text: "El Pò (alma corpórea) se aloja en los pulmones y está relacionado con:",
        options: [
          "La voluntad y perseverancia",
          "La percepción física, lo corpóreo y las sensaciones",
          "La creatividad y los sueños",
          "La memoria a largo plazo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué ocurre según la teoría de la incoherencia entre Jīng, Qì y Shén?",
        options: [
          "La persona alcanza automáticamente la iluminación",
          "Cuando hay desequilibrio o incoherencia entre los tres ámbitos, la salud se afecta y puede llevar a enfermedad",
          "Solo afecta al estado de ánimo, sin repercusión física",
          "Se considera un estado normal de la vida",
        ],
        correct: 1,
      },
      {
        text: "El Yì (意), que reside en el bazo-páncreas, se encarga principalmente de:",
        options: [
          "La voluntad de vivir y la perseverancia",
          "El pensamiento cotidiano, la reflexión y la memoria a corto plazo",
          "La creatividad onírica",
          "La inteligencia instintiva",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se relacionan el Jīng prenatal y el Jīng postnatal?",
        options: [
          "Son completamente independientes, no se mezclan",
          "El postnatal se transforma en prenatal si se medita",
          "La esencia postnatal (alimentos/respiración) se combina con una porción de Jīng prenatal para formar Qì, sangre y líquidos; malos hábitos agotan más rápido el Jīng prenatal",
          "El Jīng prenatal se regenera con la esencia postnatal ilimitadamente",
        ],
        correct: 2,
      },
      {
        text: "El término 'Zhēn Qì' (Qì verdadero) se forma por:",
        options: [
          "Solo el Qì de la respiración externa",
          "La combinación del Yuánqì (prenatal) y el Zhōngqì (postnatal de digestión/respiración)",
          "La energía de los cinco sabores sin mezcla",
          "El Shén más la sangre",
        ],
        correct: 1,
      },
      {
        text: "¿Qué relación tienen las articulaciones con los Tres Tesoros según la clase?",
        options: [
          "Codos y rodillas se asocian a problemas de Qì; muñecas, tobillos y cuello se asocian a Shén; caderas y hombros a agotamiento de Jīng",
          "Todas las articulaciones corresponden solo al elemento Tierra",
          "Solo las rodillas indican desequilibrio de Shén",
          "No existe relación en la medicina china",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función del Dāntián inferior en relación con los Tres Tesoros?",
        options: [
          "Almacenar el Shén y regular la conciencia",
          "Almacenar el Jīng prenatal y el Yuánqì (Qì renal)",
          "Transformar los alimentos en Qì postnatal",
          "Gobernar la respiración y el alma corpórea (Pò)",
        ],
        correct: 1,
      },
      {
        text: "El ideograma de Shén (神) representa la unión de:",
        options: [
          "Cielo, tierra y ser humano, con la fuerza del principio que desciende del cielo",
          "Vapor y arroz, indicando transformación",
          "Semilla y crecimiento, simbolizando la esencia",
          "Fuego y agua, equilibrio dinámico",
        ],
        correct: 0,
      },
      {
        text: "¿Qué significa Zhōngqì (中气) en la teoría del Qì?",
        options: [
          "Qì defensivo que circula por la superficie",
          "Qì central que resulta de la respiración y la digestión",
          "Qì ancestral almacenado en los riñones",
          "Qì nutritivo que forma la sangre",
        ],
        correct: 1,
      },
      {
        text: "El Yuánqì (元气) o Qì prenatal se caracteriza por:",
        options: [
          "Provenir del aire y los alimentos, renovable diariamente",
          "Ser la fuerza que activa los órganos y se almacena en el riñón",
          "Ser exclusivo de la función respiratoria",
          "Manifestarse solo en la piel y los músculos",
        ],
        correct: 1,
      },
      {
        text: "Según la clase, la esencia postnatal (Jīng adquirido) se obtiene principalmente de:",
        options: [
          "La herencia genética de los padres",
          "La meditación profunda y el cultivo espiritual",
          "Los alimentos, la respiración y la asimilación por bazo-estómago",
          "La energía electromagnética del entorno",
        ],
        correct: 2,
      },
      {
        text: "¿Cuál de los siguientes órganos almacena el Hún (魂), el alma etérea relacionada con la creatividad y los sueños?",
        options: ["Corazón", "Pulmones", "Hígado", "Riñones"],
        correct: 2,
      },
      {
        text: "El Zhì (志), que reside en el riñón, se asocia con:",
        options: [
          "La memoria a corto plazo y el pensamiento analítico",
          "La voluntad, la perseverancia y la determinación",
          "La percepción sensorial y el instinto",
          "La alegría y la expansión emocional",
        ],
        correct: 1,
      },
      {
        text: "En la dinámica de clase se mencionó que el consumo excesivo de alimentos de mala calidad afecta principalmente a:",
        options: [
          "El Shén, generando confusión mental",
          "El Jīng prenatal, agotándolo más rápidamente",
          "El Qì defensivo (Wèiqì)",
          "La sangre sin relación con los Tesoros",
        ],
        correct: 1,
      },
      {
        text: "El 'calor del Shén' tiene una función fisiológica clave: iniciar el metabolismo. ¿Dónde prende la 'pequeña llama' que permite la transformación?",
        options: [
          "En el Dāntián inferior",
          "En el corazón (Shén) para que el Mìngmén transforme las esencias",
          "En los pulmones para dispersar el Qì",
          "En el bazo para digerir",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la principal diferencia entre el Jīng prenatal y el Jīng postnatal?",
        options: [
          "El prenatal se puede regenerar con ejercicio, el postnatal no",
          "El prenatal es limitado y heredado; el postnatal se adquiere de alimentos y respiración",
          "El prenatal es yīn y el postnatal es yáng",
          "No hay diferencia, son el mismo concepto",
        ],
        correct: 1,
      },
      {
        text: "El 'Zhōng Dāntián' (centro del pecho) es la residencia principal del:",
        options: ["Jīng", "Qì", "Shén", "Xué (sangre)"],
        correct: 1,
      },
      {
        text: "La combinación del Yuánqì (prenatal) y el Zhōngqì (postnatal) forma el Zhēn Qì, que constituye:",
        options: [
          "La energía superficial defensiva",
          "La identidad única e inmunológica de cada persona",
          "La esencia reproductiva",
          "La energía que mueve las extremidades",
        ],
        correct: 1,
      },
      {
        text: "¿Qué patología se asocia típicamente con una deficiencia o agotamiento del Jīng según la clase?",
        options: [
          "Indigestión leve",
          "Lesiones en caderas, hombros y enfermedades crónicas intensas",
          "Insomnio ocasional",
          "Palpitaciones sin causa orgánica",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál de los siguientes NO es un aspecto del Shén fragmentado en los órganos Zàng?",
        options: ["Hún (alma etérea)", "Pò (alma corpórea)", "Yì (pensamiento)", "Xuè (sangre)"],
        correct: 3,
      },
      {
        text: "Según la cosmovisión china, el Qì se origina por el encuentro de:",
        options: [
          "El Sol y la Luna",
          "El Yīn (tierra/esencia) y el Yáng (cielo/tiempo/espacio)",
          "Los cinco elementos",
          "El frío y el calor",
        ],
        correct: 1,
      },
    ],
  },

  // Agrega este objeto al array 'quizzes' en src/data/quizzes.ts

  {
    id: "anatomia",
    title: "Anatomía Básica para Acupuntura",
    description: "Planos, ejes, huesos, articulaciones y reparos anatómicos esenciales",
    questions: [
      {
        text: "¿Cuál es la posición anatómica universal de referencia?",
        options: [
          "De pie, con los brazos cruzados sobre el pecho",
          "De pie, con las palmas de las manos hacia adelante",
          "Acostado boca arriba (decúbito dorsal)",
          "Sentado, con las manos sobre las rodillas",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina la posición del paciente acostado boca abajo?",
        options: [
          "Decúbito supino",
          "Decúbito lateral",
          "Decúbito prono o ventral",
          "Posición de Fowler",
        ],
        correct: 2,
      },
      {
        text: "¿Qué plano anatómico divide el cuerpo en mitad izquierda y mitad derecha?",
        options: [
          "Plano coronal o frontal",
          "Plano transversal u horizontal",
          "Plano sagital",
          "Plano oblicuo",
        ],
        correct: 2,
      },
      {
        text: "¿Qué movimiento ocurre en el plano sagital alrededor del eje frontal?",
        options: [
          "Rotación de la cabeza",
          "Abducción y aducción",
          "Flexión y extensión",
          "Circunducción",
        ],
        correct: 2,
      },
      {
        text: "¿Qué movimiento está asociado al eje sagital o anteroposterior?",
        options: [
          "Flexión del codo",
          "Rotación del tronco",
          "Abducción (alejar el brazo del cuerpo)",
          "Extensión de la rodilla",
        ],
        correct: 2,
      },
      {
        text: "Según la clase, ¿qué estructura envuelve todo el cuerpo y es el sitio por donde se cree que circula el Chi?",
        options: ["La piel (dermis)", "El sistema linfático", "La fascia", "Los vasos sanguíneos"],
        correct: 2,
      },
      {
        text: "¿Qué teoría de medicina china relaciona la profundidad de la punción con la estimulación de órganos?",
        options: [
          "Estimular el músculo influye en el hígado",
          "Estimular el tendón influye en el bazo",
          "Estimular superficialmente la piel influye en el pulmón",
          "Estimular el hueso influye en el corazón",
        ],
        correct: 2,
      },
      {
        text: "¿Qué huesos forman la cintura escapular?",
        options: [
          "Esternón y costillas",
          "Clavícula y omóplato (escápula)",
          "Huesos ilíacos",
          "Húmero y radio",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se clasifica el fémur según sus dimensiones predominantes?",
        options: ["Hueso plano", "Hueso corto", "Hueso largo", "Hueso irregular"],
        correct: 2,
      },
      {
        text: "¿Qué tipo de hueso es el omóplato (escápula)?",
        options: ["Hueso largo", "Hueso plano", "Hueso corto", "Hueso sesamoideo"],
        correct: 1,
      },
      {
        text: "¿Cómo se denominan las salientes o eminencias de los huesos que sirven para la inserción de tendones y ligamentos?",
        options: ["Cavidades articulares", "Diáfisis", "Apófisis", "Epífisis"],
        correct: 2,
      },
      {
        text: "¿Qué tipo de articulación son las suturas del cráneo?",
        options: [
          "Diartrosis (móviles)",
          "Anfiartrosis (semimóviles)",
          "Sinartrosis (inmóviles)",
          "Enartrosis",
        ],
        correct: 2,
      },
      {
        text: "¿Qué tipo de articulación es la unión entre las vértebras mediante el disco intervertebral?",
        options: ["Sinartrosis", "Anfiartrosis", "Diartrosis", "Sínfisis púbica exclusivamente"],
        correct: 1,
      },
      {
        text: "¿Qué tipo de articulación es la cadera?",
        options: [
          "Sinartrosis (inmóvil)",
          "Anfiartrosis (semimóvil)",
          "Diartrosis (móvil)",
          "Sutura",
        ],
        correct: 2,
      },
      {
        text: "¿Qué estructuras mantienen las superficies articulares en contacto y dan estabilidad a las articulaciones móviles?",
        options: [
          "Los tendones exclusivamente",
          "Los músculos agonistas",
          "La cápsula articular y los ligamentos",
          "Las apófisis óseas",
        ],
        correct: 2,
      },
      {
        text: "¿Qué tipo de músculo forma parte de las vísceras, es involuntario y está controlado por el sistema nervioso autónomo?",
        options: [
          "Músculo estriado esquelético",
          "Músculo estriado cardíaco",
          "Músculo liso",
          "Músculo sinergista",
        ],
        correct: 2,
      },
      {
        text: "¿Cómo se clasifican los músculos que producen la fuerza principal para un movimiento?",
        options: ["Antagonistas", "Sinergistas", "Agonistas", "Fijadores"],
        correct: 2,
      },
      {
        text: "¿Cuántos pares de costillas forman la caja torácica?",
        options: ["10 pares", "11 pares", "12 pares", "14 pares"],
        correct: 2,
      },
      {
        text: "¿Por qué son importantes los puntos Shu ubicados a ambos lados de la columna vertebral?",
        options: [
          "Porque drenan linfa exclusivamente",
          "Porque estimulan el sistema nervioso simpático a cada nivel",
          "Porque están sobre los discos intervertebrales",
          "Porque son el único punto de entrada del Chi defensivo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué músculo principal separa el tórax del abdomen y es clave en la respiración?",
        options: [
          "El psoas ilíaco",
          "El transverso del abdomen",
          "El diafragma",
          "El recto anterior",
        ],
        correct: 2,
      },
      {
        text: "¿Qué órganos se encuentran en el hipocondrio derecho según la sectorización del abdomen?",
        options: [
          "Estómago y bazo",
          "Lóbulo hepático, vesícula biliar y parte del riñón",
          "Cola del páncreas y ángulo esplénico del colon",
          "Vejiga y recto",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántas vértebras componen la columna cervical?",
        options: ["5 vértebras", "12 vértebras", "7 vértebras", "4 vértebras"],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina la curvatura fisiológica de entrada (cóncava) de la columna?",
        options: ["Cifosis", "Lordosis", "Escoliosis", "Rectificación"],
        correct: 1,
      },
      {
        text: "¿Qué característica permite identificar la vértebra cervical C7 (prominente) al tacto?",
        options: [
          "Desaparece bajo los dedos al levantar la cabeza",
          "Permanece bajo los dedos al levantar la cabeza",
          "Se encuentra a la altura de los hombros",
          "Es la única que no tiene apófisis espinosa",
        ],
        correct: 1,
      },
      {
        text: "¿Qué reparo anatómico se utiliza para localizar el punto de Vejiga 17?",
        options: [
          "La apófisis mastoides",
          "El vértice (borde inferior) de la escápula",
          "La cresta ilíaca",
          "La tuberosidad de la tibia",
        ],
        correct: 1,
      },
      {
        text: "¿Qué referencia anatómica guía la localización de la vértebra lumbar L4?",
        options: [
          "El borde inferior de las costillas",
          "La apófisis xifoides del esternón",
          "La cresta ilíaca (con las manos en jarra)",
          "El trocánter mayor del fémur",
        ],
        correct: 2,
      },
      {
        text: "¿Cuál de los siguientes músculos NO forma parte del manguito rotador?",
        options: ["Supraespinoso", "Infraespinoso", "Redondo menor", "Deltoides"],
        correct: 3,
      },
      {
        text: "¿Qué músculo del manguito rotador es el principal responsable de iniciar la abducción (separar el brazo)?",
        options: ["Subescapular", "Supraespinoso", "Infraespinoso", "Redondo menor"],
        correct: 1,
      },
      {
        text: "¿Qué sucede con los discos intervertebrales en una hernia discal?",
        options: [
          "Se calcifican y sueldan las vértebras",
          "Se luxan y pueden presionar los nervios",
          "Aumentan su hidratación",
          "Se convierten en tejido óseo",
        ],
        correct: 1,
      },
      {
        text: "¿Por qué la articulación del hombro (cintura escapular) es más propensa a luxaciones que la cadera?",
        options: [
          "Porque tiene más ligamentos",
          "Porque la cápsula articular es más profunda",
          "Por su inestabilidad articular y diseño para la movilidad",
          "Porque carece de cartílago articular",
        ],
        correct: 2,
      },
    ],
  },

  // Agrega este objeto al array 'quizzes' en src/data/quizzes.ts

  {
    id: "meridiano-pulmon",
    title: "Meridiano de Pulmón (Shǒu Tàiyīn)",
    description: "Recorrido, puntos principales y funciones del canal de Pulmón",
    questions: [
      {
        text: "¿A qué elemento pertenece el meridiano de Pulmón según la teoría de los 5 Movimientos (Wǔ Xíng)?",
        options: ["Madera (Mù)", "Fuego (Huǒ)", "Metal (Jīn)", "Agua (Shuǐ)"],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina el meridiano de Pulmón en la nomenclatura de los 6 Grandes Canales?",
        options: [
          "Shǒu Shàoyīn (Corazón)",
          "Shǒu Tàiyáng (Intestino Delgado)",
          "Shǒu Tàiyīn (Pulmón)",
          "Shǒu Juéyīn (Pericardio)",
        ],
        correct: 2,
      },
      {
        text: "¿Cuántos puntos de acupuntura externos tiene el recorrido superficial del meridiano de Pulmón?",
        options: ["9 puntos", "10 puntos", "11 puntos", "12 puntos"],
        correct: 2,
      },
      {
        text: "¿Cuál es el ancho del dedo pulgar del paciente utilizado como unidad de medida en acupuntura?",
        options: ["1 Fēn", "1 Cùn (o Tǔn)", "1 Chǐ", "1 Zhàng"],
        correct: 1,
      },
      {
        text: "¿Dónde se localiza P1 (Zhōngfǔ - Residencia Central / Granero Central)?",
        options: [
          "En la fosa infraclavicular, debajo del acromion",
          "A 6 Cùn de la línea media, en el 1er espacio intercostal",
          "A 3 Cùn del pliegue axilar",
          "En el pliegue del codo, lado radial",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de punto especial es P1 (Zhōngfǔ)?",
        options: [
          "Punto de Tonificación (Bǔ)",
          "Punto de Alarma (Mù) o Heraldo del Pulmón",
          "Punto de Dispersión (Xiè)",
          "Punto de Reunión (Huì)",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se encuentra P2 (Yúnmén - Puerta de las Nubes)?",
        options: [
          "1 Cùn por debajo de P1",
          "1 Cùn por encima de P1, bajo la clavícula",
          "A 3 Cùn del pezón",
          "En el centro del esternón",
        ],
        correct: 1,
      },
      {
        text: "P3 (Tiānfǔ - Palacio del Cielo) se ubica a 3 Cùn por debajo del pliegue axilar. ¿Con qué emoción se relaciona especialmente este punto?",
        options: ["Ira (Nù)", "Alegría excesiva (Xǐ)", "Tristeza y llanto (Bēi)", "Miedo (Kǒng)"],
        correct: 2,
      },
      {
        text: "¿Qué punto se encuentra en el pliegue del codo, en la depresión radial del tendón del bíceps braquial?",
        options: ["P3 (Tiānfǔ)", "P5 (Chǐzé)", "P6 (Kǒngzuì)", "P9 (Tàiyuān)"],
        correct: 1,
      },
      {
        text: "¿Cuál es la acción principal de P5 (Chǐzé - Pantano del Codo)?",
        options: [
          "Tonificar la energía del Pulmón",
          "Sedar, dispersar calor y tratar infecciones del Pulmón",
          "Movilizar específicamente la flema",
          "Tratar exclusivamente el dolor de hombro",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto P6 (Kǒngzuì - Apertura Máxima) y cuál es su ubicación característica?",
        options: [
          "Punto Río; a 1,5 Cùn de la muñeca",
          "Punto Xi (Hendidura); a 7 Cùn de la muñeca",
          "Punto Arroyo; en la tabaquera anatómica",
          "Punto Manantial; en el ángulo de la uña",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué tipo de patología es especialmente efectivo P6 (Kǒngzuì)?",
        options: [
          "Dolor crónico de más de un año",
          "Dolor agudo en el trayecto del meridiano",
          "Problemas ginecológicos",
          "Insomnio severo",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se localiza P7 (Lièquē - Secuencia Rota)?",
        options: [
          "En el centro del pliegue de la muñeca",
          "A 1,5 Cùn del pliegue de la muñeca, sobre la apófisis estiloides del radio",
          "En el borde cubital de la muñeca",
          "A 3 Cùn del codo",
        ],
        correct: 1,
      },
      {
        text: "P7 (Lièquē) es famoso por tratar la rigidez de cuello y ser punto de apertura de un vaso extraordinario. ¿Qué acción fisiológica genera al inicio de un resfriado?",
        options: [
          "Retiene el sudor para evitar la deshidratación",
          "Estimula la sudoración para expulsar el patógeno",
          "Tonifica el Riñón",
          "Sedación del Hígado",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto se encuentra a 1 Cùn del pliegue de la muñeca, en la depresión entre la apófisis estiloides del radio y la arteria radial?",
        options: ["P7 (Lièquē)", "P8 (Jīngqú)", "P9 (Tàiyuān)", "P10 (Yújì)"],
        correct: 1,
      },
      {
        text: "¿Cuál es el punto de Tonificación (Bǔ) principal del canal de Pulmón?",
        options: ["P5 (Chǐzé)", "P7 (Lièquē)", "P9 (Tàiyuān)", "P11 (Shàoshāng)"],
        correct: 2,
      },
      {
        text: "P9 (Tàiyuān - Abismo Supremo) se localiza en el pliegue de la muñeca. ¿Qué estructura anatómica importante se debe evitar puncionar en esta zona?",
        options: [
          "El nervio mediano",
          "El tendón del bíceps",
          "La arteria radial",
          "La vena cefálica",
        ],
        correct: 2,
      },
      {
        text: "¿Qué punto se encuentra en el centro del primer hueso metacarpiano, en el límite de la piel roja y blanca (vientre de la eminencia tenar)?",
        options: ["P8 (Jīngqú)", "P9 (Tàiyuān)", "P10 (Yújì)", "P11 (Shàoshāng)"],
        correct: 2,
      },
      {
        text: "¿Qué punto es especialmente útil para tratar la fiebre alta, el calor en el pulmón y la inflamación de garganta por su naturaleza de 'punto Manantial' (Yíng)?",
        options: ["P5 (Chǐzé)", "P9 (Tàiyuān)", "P10 (Yújì)", "P7 (Lièquē)"],
        correct: 2,
      },
      {
        text: "¿Dónde se encuentra el punto P11 (Shàoshāng - Pequeño Comerciante)?",
        options: [
          "En el ángulo ungueal radial del dedo pulgar",
          "En el centro de la uña del pulgar",
          "En el ángulo ungueal cubital del índice",
          "En la base del dedo pulgar",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal de P11 (Shàoshāng) en situaciones de emergencia?",
        options: [
          "Tonificar el Qi del Bazo",
          "Restaurar la conciencia, tratar desmayos y dolor de garganta severo",
          "Fortalecer la zona lumbar",
          "Drenar la humedad del Intestino Grueso",
        ],
        correct: 1,
      },
      {
        text: "Según el recorrido interno (profundo) del meridiano, ¿qué órgano/víscera atraviesa el canal de Pulmón además del pulmón mismo?",
        options: [
          "El Estómago (Wèi)",
          "El Intestino Grueso (Dàcháng)",
          "La Vejiga (Pángguāng)",
          "El Corazón (Xīn)",
        ],
        correct: 1,
      },
      {
        text: "¿Qué distancia proporcional estándar hay entre el pliegue de la muñeca y el pliegue del codo?",
        options: ["9 Cùn", "12 Cùn", "5 Cùn", "16 Cùn"],
        correct: 1,
      },
      {
        text: "En la práctica clínica, para tratar un problema orgánico como asma o tos, ¿cómo se suele tratar el meridiano de Pulmón?",
        options: [
          "Solo en el lado derecho",
          "Solo en el lado izquierdo",
          "Bilateralmente (ambos brazos)",
          "Contralateral al síntoma",
        ],
        correct: 2,
      },
      {
        text: "¿Qué punto es conocido por ayudar a movilizar la flema y las mucosidades, especialmente cuando son espesas?",
        options: ["P5 (Chǐzé)", "P9 (Tàiyuān)", "P11 (Shàoshāng)", "P1 (Zhōngfǔ)"],
        correct: 1,
      },
      {
        text: "¿Qué estructura corporal se relaciona directamente con la salud del Pulmón en Medicina China?",
        options: [
          "Los huesos y la médula",
          "La piel y el vello corporal",
          "Los labios y la boca",
          "Los ojos y la visión",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántos Fēn (divisiones) componen 1 Cùn?",
        options: ["5 Fēn", "8 Fēn", "10 Fēn", "12 Fēn"],
        correct: 2,
      },
      {
        text: "¿Qué punto se considera el 'Punto Río' (Jīng) del canal de Pulmón, útil para tratar tos con flema que dificulta la respiración?",
        options: ["P5 (Chǐzé)", "P8 (Jīngqú)", "P9 (Tàiyuān)", "P11 (Shàoshāng)"],
        correct: 1,
      },
      {
        text: "P3 (Tiānfǔ) ayuda a tratar la epistaxis (sangrado nasal). ¿Qué otro punto del mismo meridiano también es muy útil para detener hemorragias nasales?",
        options: ["P1 (Zhōngfǔ)", "P5 (Chǐzé)", "P9 (Tàiyuān)", "P11 (Shàoshāng)"],
        correct: 2,
      },
      {
        text: "Según lo visto en clase, ¿cuál es una herramienta fundamental para medir el Cùn en la práctica si no se usa el dedo del paciente?",
        options: [
          "Una cinta métrica de costura",
          "Un Cunómetro (elástico)",
          "Un calibre digital",
          "El palillo de moxa",
        ],
        correct: 1,
      },
    ],
  },
  // Aquí puedes agregar más quizzes en el futuro (anatomía, auriculoterapia, etc.)
];
