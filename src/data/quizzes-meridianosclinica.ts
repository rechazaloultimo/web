import type { QuizMeta } from "./quiz-types";

export const meridianosclinicaQuizzes: QuizMeta[] = [
  // ==========================================
  // MERIDIANO DE PULMÓN (11 preguntas de clínica)
  // ==========================================
  {
    id: "meridiano-pulmon-clinica",
    category: "meridianos-clinica",
    title: "Pulmón – Indicaciones Clínicas (Shǒu Tàiyīn)",
    description:
      "Funciones y aplicaciones clínicas principales de los puntos del meridiano de Pulmón.",
    questions: [
      {
        text: "¿Cuál es la función clínica principal de P1 (Zhōngfǔ)?",
        options: [
          "Expulsa el viento y alivia el dolor facial",
          "Punto de alarma del pulmón, calma la tos",
          "Tonifica el Qi de riñón",
          "Elimina la humedad del Bazo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué acción describe mejor las funciones de P2 (Yúnmén)?",
        options: [
          "Purifica el pulmón y calma la tos",
          "Tonifica la sangre y nutre el corazón",
          "Dispersa el frío del estómago",
          "Regula el meridiano de vejiga",
        ],
        correct: 0,
      },
      {
        text: "¿Para qué síntoma está especialmente indicado P3 (Tiānfǔ)?",
        options: ["Dolor lumbar agudo", "Insomnio y palpitaciones", "Tos", "Diarrea crónica"],
        correct: 2,
      },
      {
        text: "Al igual que P3, el punto P4 (Xiábái) trata principalmente:",
        options: ["La retención de orina", "La tos", "La cefalea tensional", "El estreñimiento"],
        correct: 1,
      },
      {
        text: "¿Cuáles son las acciones clínicas destacadas de P5 (Chǐzé)?",
        options: [
          "Tonifica el Yang y calienta el útero",
          "Seda el pulmón, enriquece el Yin del pulmón y trata la tos, disnea y enfermedades infecciosas del pulmón",
          "Moviliza la flema en el Jiao Inferior",
          "Elimina el viento interno y las convulsiones",
        ],
        correct: 1,
      },
      {
        text: "P6 (Kǒngzuì) se caracteriza por purificar el pulmón. ¿Qué afección respiratoria aborda principalmente?",
        options: [
          "Congestión nasal crónica",
          "Tos y enfermedades respiratorias",
          "Asma de origen renal",
          "Sinusitis alérgica",
        ],
        correct: 1,
      },
      {
        text: "Además de tratar la tos y la disnea, ¿qué otras afecciones cubre P7 (Lièquē)?",
        options: [
          "Parálisis y dolor del antebrazo",
          "Hernia discal lumbar",
          "Diarrea y vómitos",
          "Vértigo por hipertensión",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal de P8 (Jīngqú) según el texto?",
        options: [
          "Abrir los orificios de la cabeza",
          "Aclarar el pulmón y calmar la tos",
          "Drenar la vesícula biliar",
          "Tonificar el Bazo y el Estómago",
        ],
        correct: 1,
      },
      {
        text: "P9 (Tàiyuān) es el punto de tonificación del pulmón. ¿Qué otra acción clínica posee?",
        options: [
          "Moviliza la mucosidad y calma la tos",
          "Elimina el calor del corazón",
          "Desciende el Qi de estómago",
          "Fortalece la memoria",
        ],
        correct: 0,
      },
      {
        text: "¿Qué efecto tiene P10 (Yújì) sobre la garganta y el Yin?",
        options: [
          "Enriquece el Yin, descarga la garganta y trata enfermedades respiratorias",
          "Dispersa el Yang del hígado",
          "Calienta el Yang de riñón",
          "Humedece los intestinos",
        ],
        correct: 0,
      },
      {
        text: "¿En qué situaciones de emergencia se utiliza P11 (Shàoshāng)?",
        options: [
          "En cólicos biliares",
          "En inflamación aguda de la laringe, fiebre alta, ACV y trastornos de conciencia",
          "En fracturas óseas expuestas",
          "En shock hipovolémico",
        ],
        correct: 1,
      },
    ],
  },

  // ==========================================
  // MERIDIANO DE INTESTINO GRUESO (20 preguntas de clínica)
  // ==========================================
  {
    id: "meridiano-ig-clinica",
    category: "meridianos-clinica",
    title: "Intestino Grueso – Indicaciones Clínicas (Shǒu Yángmíng)",
    description:
      "Funciones y aplicaciones clínicas principales de los puntos del meridiano de Intestino Grueso.",
    questions: [
      {
        text: "¿Cuál es la acción principal del punto IG1 (Shāngyáng) como punto Jing-Pozo?",
        options: [
          "Tonificar el Qi de Intestino Grueso",
          "Restaurar la conciencia y aliviar el dolor de garganta agudo",
          "Movilizar la flema en el pulmón",
          "Regular la digestión y la diarrea",
        ],
        correct: 1,
      },
      {
        text: "IG2 (Èrjiān) es el punto de Dispersión del canal. ¿Qué tipo de calor ayuda a eliminar?",
        options: [
          "Calor por deficiencia de Yin",
          "Calor externo con fiebre y dolor de garganta",
          "Calor en la sangre con erupciones",
          "Calor húmedo en el Jiao Inferior",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué afección local se usan especialmente IG2 (Èrjiān) e IG3 (Sānjiān)?",
        options: [
          "Dolor y rigidez del dedo índice y la mano",
          "Parálisis facial",
          "Dolor lumbar",
          "Estreñimiento crónico",
        ],
        correct: 0,
      },
      {
        text: "IG4 (Hégǔ) es un punto Fuente. ¿Cuál es su acción principal?",
        options: [
          "Dispersar el viento, aliviar el dolor facial y las cefaleas",
          "Tonificar el Yang de Riñón",
          "Nutrir la Sangre y calmar la mente",
          "Drenar la humedad del Bazo",
        ],
        correct: 0,
      },
      {
        text: "¿En qué situación está contraindicado el uso de IG4 (Hégǔ)?",
        options: [
          "Dolor de muelas",
          "Estreñimiento",
          "Embarazo (puede inducir el parto)",
          "Resfriado común",
        ],
        correct: 2,
      },
      {
        text: "IG5 (Yángxī) es un punto Río. ¿Qué problema de garganta y voz ayuda a tratar?",
        options: [
          "Afonía por nódulos en cuerdas vocales",
          "Pérdida de voz y fiebre",
          "Sinusitis crónica",
          "Carraspera por flema",
        ],
        correct: 1,
      },
      {
        text: "¿Qué tipo de punto especial es IG6 (Piānlì) y qué función tiene?",
        options: [
          "Punto de Alarma (Mù) del Intestino Grueso",
          "Punto de Conexión (Luò) que comunica con el meridiano de Pulmón",
          "Punto de Hendidura (Xī) para el dolor agudo",
          "Punto Mar Inferior para el abdomen",
        ],
        correct: 1,
      },
      {
        text: "IG7 (Wēnliū) es el punto de Hendidura (Xī) del canal. ¿Qué afección aguda trata con preferencia?",
        options: [
          "Dolor agudo en el brazo y trastornos intestinales agudos",
          "Epistaxis (sangrado nasal)",
          "Contractura del trapecio",
          "Hernia discal cervical",
        ],
        correct: 0,
      },
      {
        text: "IG8 (Xiàlián) e IG9 (Shànglián) se usan conjuntamente para:",
        options: [
          "Regular el Qi y la sangre del brazo, tratar codo y hombro",
          "Tonificar el Riñón",
          "Disipar el viento y el frío",
          "Enfriar el corazón",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la acción principal de IG10 (Shǒusānlǐ) en el miembro superior?",
        options: [
          "Tratar exclusivamente problemas oculares",
          "Regular Qi y sangre del brazo, tratar dolor de hombro, codo y parálisis",
          "Bajar la fiebre alta",
          "Tonificar el Qi de Pulmón",
        ],
        correct: 1,
      },
      {
        text: "IG11 (Qūchí) es el punto de Tonificación del canal. ¿Qué función térmica y dérmica tiene?",
        options: [
          "Calienta el Yang y elimina edemas",
          "Enfría el calor, elimina toxinas y trata problemas de piel (urticaria, eczemas)",
          "Dispersa el frío interno del estómago",
          "Tonifica el Qi defensivo sin sudor",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué problema local del codo se emplea IG12 (Zhǒuliáo)?",
        options: [
          "Bursitis olecraneana",
          "Dolor y rigidez de codo",
          "Luxación del codo",
          "Fractura de olécranon",
        ],
        correct: 1,
      },
      {
        text: "IG13 (Shǒuwǔlǐ) se usa clínicamente para:",
        options: [
          "Dolor de hombro, codo y contractura muscular del brazo",
          "Trastornos digestivos exclusivamente",
          "Insomnio y ansiedad",
          "Afecciones de la rodilla",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la indicación principal de IG14 (Bìnào) y IG15 (Jiānyú)?",
        options: [
          "Problemas locales de hombro y brazo (periartritis, parálisis del miembro superior)",
          "Dolor de muelas",
          "Estreñimiento crónico",
          "Tinnitus y sordera",
        ],
        correct: 0,
      },
      {
        text: "IG16 (Jùgǔ) se localiza cerca del hombro. ¿Para qué problema se usa?",
        options: [
          "Dolor y limitación del hombro, especialmente en la articulación acromioclavicular",
          "Dolor torácico",
          "Neuralgia intercostal",
          "Mastitis",
        ],
        correct: 0,
      },
      {
        text: "IG17 (Tiāndǐng) se sitúa en el cuello. ¿Qué afección de la garganta aborda?",
        options: [
          "Amigdalitis y dolor de garganta",
          "Nódulos tiroideos",
          "Rinitis alérgica",
          "Otitis media",
        ],
        correct: 0,
      },
      {
        text: "IG18 (Fútū del cuello) puede tratar problemas de voz. ¿Cuál es su uso más común?",
        options: [
          "Afonía y tos",
          "Sinusitis frontal",
          "Vértigo por oído interno",
          "Contractura cervical alta",
        ],
        correct: 0,
      },
      {
        text: "IG19 (Héliáo) se utiliza para afecciones nasales y faciales. ¿Cuál es su indicación principal?",
        options: [
          "Congestión nasal, epistaxis y dolor facial",
          "Dolor de muelas superior",
          "Parálisis de Bell",
          "Acné facial",
        ],
        correct: 0,
      },
      {
        text: "IG20 (Yíngxiāng) es el punto maestro de la nariz. ¿Qué afección trata directamente?",
        options: [
          "Congestión nasal, sinusitis y rinitis",
          "Desviación del tabique nasal",
          "Pólipos nasales",
          "Sinusitis frontal crónica",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la combinación clásica de IG4 (Hégǔ) e IG11 (Qūchí)?",
        options: [
          "Expulsar viento-calor y tratar fiebre con enfermedades febriles exantemáticas",
          "Tonificar el Yang de Bazo y Riñón",
          "Drenar la humedad del Jiao Inferior",
          "Nutrir el Yin de Pulmón en tos seca",
        ],
        correct: 0,
      },
    ],
  },

  // ==========================================
  // MERIDIANO DE ESTÓMAGO (45 preguntas de clínica)
  // ==========================================
  {
    id: "meridiano-e-clinica",
    category: "meridianos-clinica",
    title: "Estómago – Indicaciones Clínicas (Zú Yángmíng)",
    description:
      "Funciones y aplicaciones clínicas principales de los puntos del meridiano de Estómago.",
    questions: [
      {
        text: "¿Cuál es la acción principal de E1 (Chéngqì)?",
        options: [
          "Tratar dolor ocular, lagrimeo y visión borrosa",
          "Aliviar la congestión nasal",
          "Dispersar el viento facial",
          "Regular el qi del estómago",
        ],
        correct: 0,
      },
      {
        text: "E2 (Sìbái) se usa principalmente para:",
        options: [
          "Dolor facial y dental superior",
          "Dolor ocular y blefaritis",
          "Sinusitis y rinitis",
          "Parálisis facial",
        ],
        correct: 0,
      },
      {
        text: "E3 (Jùliáo) es útil para:",
        options: [
          "Dolor facial, rinitis y epistaxis",
          "Dolor de muelas inferiores",
          "Trastornos digestivos",
          "Cefalea occipital",
        ],
        correct: 0,
      },
      {
        text: "E4 (Dìcāng) se emplea en:",
        options: [
          "Parálisis facial, espasmo del orbicular de los labios",
          "Dolor dental",
          "Trismus",
          "Sordera",
        ],
        correct: 0,
      },
      {
        text: "E5 (Dàyíng) está indicado para:",
        options: [
          "Dolor de mandíbula, trismus y parotiditis",
          "Dolor de garganta",
          "Tinnitus",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "E6 (Jiāchē) es un punto clave para:",
        options: [
          "Dolor de muelas, trismus y parálisis facial",
          "Dolor de oído",
          "Sinusitis",
          "Dolor cervical",
        ],
        correct: 0,
      },
      {
        text: "E7 (Xiàguān) se usa en:",
        options: [
          "Dolor de oído, sordera y artritis temporomandibular",
          "Dolor de muelas superiores",
          "Parálisis facial",
          "Cefalea frontal",
        ],
        correct: 0,
      },
      {
        text: "E8 (Tóuwéi) es un punto local para:",
        options: ["Cefalea, migraña y dolor ocular", "Dolor de oído", "Vértigo", "Sinusitis"],
        correct: 0,
      },
      {
        text: "E9 (Rényíng) se usa principalmente para:",
        options: ["Dolor de garganta, afonía y asma", "Náuseas", "Hipertensión", "Sordera"],
        correct: 0,
      },
      {
        text: "E10 (Shuǐtū) está indicado para:",
        options: ["Afonía, tos y dolor de garganta", "Nódulos tiroideos", "Vértigo", "Epistaxis"],
        correct: 0,
      },
      {
        text: "E11 (Qìshè) se emplea en:",
        options: [
          "Dolor y rigidez de cuello, asma y tos",
          "Dolor de muelas",
          "Cefalea",
          "Trastornos digestivos",
        ],
        correct: 0,
      },
      {
        text: "E12 (Quēpén) es útil para:",
        options: ["Dolor de cuello, rigidez y tos", "Dolor de hombro", "Palpitaciones", "Náuseas"],
        correct: 0,
      },
      {
        text: "E13 (Qìhù) se usa para:",
        options: [
          "Dolor torácico, asma y tos",
          "Dolor de espalda",
          "Dolor abdominal",
          "Palpitaciones",
        ],
        correct: 0,
      },
      {
        text: "E14 (Kùfáng) está indicado para:",
        options: ["Dolor de pecho, tos y asma", "Mastitis", "Dolor epigástrico", "Palpitaciones"],
        correct: 0,
      },
      {
        text: "E15 (Wūyì) se emplea en:",
        options: ["Dolor torácico, mastitis y tos", "Dolor abdominal", "Estreñimiento", "Cefalea"],
        correct: 0,
      },
      {
        text: "E16 (Yīngchuāng) es útil para:",
        options: [
          "Dolor torácico, mastitis y tos",
          "Dolor de hombro",
          "Trastornos digestivos",
          "Insomnio",
        ],
        correct: 0,
      },
      {
        text: "E17 (Rǔzhōng) generalmente no se punza, pero se usa como:",
        options: [
          "Referencia para otros puntos y en moxibustión (con precaución)",
          "Punto de tonificación del estómago",
          "Punto de dispersión del calor",
          "Punto maestro del pecho",
        ],
        correct: 0,
      },
      {
        text: "E18 (Rǔgēn) se usa para:",
        options: ["Mastitis, falta de leche y dolor torácico", "Tos", "Asma", "Palpitaciones"],
        correct: 0,
      },
      {
        text: "E19 (Bùróng) está indicado para:",
        options: [
          "Dolor epigástrico, distensión y vómitos",
          "Estreñimiento",
          "Diarrea",
          "Dolor de espalda",
        ],
        correct: 0,
      },
      {
        text: "E20 (Chéngmǎn) se emplea en:",
        options: [
          "Dolor epigástrico, distensión y gastralgia",
          "Diarrea",
          "Estreñimiento",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "E21 (Liángmén) es un punto clave para:",
        options: [
          "Gastralgia, vómitos y distensión abdominal",
          "Estreñimiento",
          "Diarrea",
          "Regulación del qi",
        ],
        correct: 0,
      },
      {
        text: "E22 (Guānmén) se usa para:",
        options: ["Dolor epigástrico, distensión y anorexia", "Diarrea", "Edema", "Palpitaciones"],
        correct: 0,
      },
      {
        text: "E23 (Tàiyǐ) está indicado para:",
        options: [
          "Dolor epigástrico, distensión y vómitos",
          "Estreñimiento",
          "Insomnio",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "E24 (Huáròumén) se emplea en:",
        options: ["Dolor epigástrico, vómitos y anorexia", "Diarrea", "Edema", "Asma"],
        correct: 0,
      },
      {
        text: "E25 (Tiānshū) es el punto Mù del Intestino Grueso, usado para:",
        options: [
          "Trastornos intestinales: diarrea, estreñimiento, dolor abdominal",
          "Trastornos gástricos",
          "Regulación de la menstruación",
          "Dolor lumbar",
        ],
        correct: 0,
      },
      {
        text: "E26 (Wàilíng) se usa para:",
        options: [
          "Dolor abdominal, hernia y trastornos del intestino",
          "Diarrea",
          "Estreñimiento",
          "Regulación de la vejiga",
        ],
        correct: 0,
      },
      {
        text: "E27 (Dàjù) está indicado para:",
        options: [
          "Dolor abdominal, hernia y problemas de vejiga",
          "Trastornos gástricos",
          "Diarrea",
          "Estreñimiento",
        ],
        correct: 0,
      },
      {
        text: "E28 (Shuǐdào) se emplea en:",
        options: [
          "Trastornos del agua: edema, retención urinaria, hernia",
          "Diarrea",
          "Estreñimiento",
          "Dolor lumbar",
        ],
        correct: 0,
      },
      {
        text: "E29 (Guīlái) es útil para:",
        options: [
          "Trastornos ginecológicos, hernia y dolor abdominal",
          "Trastornos urinarios",
          "Diarrea",
          "Estreñimiento",
        ],
        correct: 0,
      },
      {
        text: "E30 (Qìchōng) se usa para:",
        options: [
          "Trastornos ginecológicos, hernia y dolor de ingle",
          "Trastornos digestivos",
          "Dolor de rodilla",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "E31 (Bìguān) se emplea en:",
        options: [
          "Dolor y rigidez de la articulación de la cadera y muslo",
          "Dolor de rodilla",
          "Parálisis de miembros inferiores",
          "Dolor lumbar",
        ],
        correct: 0,
      },
      {
        text: "E32 (Fútù) está indicado para:",
        options: [
          "Dolor de muslo, parálisis y atrofia muscular",
          "Dolor de rodilla",
          "Dolor lumbar",
          "Trastornos digestivos",
        ],
        correct: 0,
      },
      {
        text: "E33 (Yīnshì) se usa para:",
        options: [
          "Dolor de muslo, rodilla y parálisis",
          "Dolor abdominal",
          "Trastornos ginecológicos",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "E34 (Liángqiū) es el punto Xī (Hendidura) del Estómago, útil para:",
        options: [
          "Dolor agudo de rodilla, gastralgia y mastitis",
          "Dolor de cadera",
          "Trastornos intestinales",
          "Edema",
        ],
        correct: 0,
      },
      {
        text: "E35 (Dúbí) se emplea para:",
        options: [
          "Dolor y rigidez de rodilla, artritis",
          "Dolor de cadera",
          "Parálisis de pierna",
          "Trastornos digestivos",
        ],
        correct: 0,
      },
      {
        text: "E36 (Zúsānlǐ) es el punto de tonificación más importante; su acción principal es:",
        options: [
          "Tonificar el Qi y la Sangre, armonizar el estómago y el bazo",
          "Dispersar el viento",
          "Eliminar la humedad",
          "Calmar la mente",
        ],
        correct: 0,
      },
      {
        text: "E37 (Shàngjùxū) es el punto Mar Inferior del Intestino Grueso, usado para:",
        options: [
          "Trastornos intestinales: diarrea, estreñimiento, apendicitis",
          "Trastornos gástricos",
          "Dolor de rodilla",
          "Trastornos urinarios",
        ],
        correct: 0,
      },
      {
        text: "E38 (Tiáokǒu) se usa para:",
        options: [
          "Dolor de hombro y cuello, además de trastornos gastrointestinales",
          "Dolor de rodilla",
          "Parálisis de pierna",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "E39 (Xiàjùxū) es el punto Mar Inferior del Intestino Delgado, usado para:",
        options: [
          "Trastornos del intestino delgado, dolor abdominal y diarrea",
          "Trastornos del estómago",
          "Dolor de rodilla",
          "Edema",
        ],
        correct: 0,
      },
      {
        text: "E40 (Fēnglóng) es el punto Luò del Estómago y se usa principalmente para:",
        options: [
          "Transformar la flema, tratar trastornos mentales y dolor de cabeza",
          "Tonificar el Qi",
          "Eliminar el viento",
          "Regular la menstruación",
        ],
        correct: 0,
      },
      {
        text: "E41 (Jiěxī) se emplea para:",
        options: [
          "Dolor de tobillo, pie y cefalea",
          "Trastornos digestivos",
          "Edema",
          "Parálisis de pierna",
        ],
        correct: 0,
      },
      {
        text: "E42 (Chōngyáng) es el punto Fuente del Estómago, usado para:",
        options: [
          "Dolor de pie, trastornos gastrointestinales y cefalea",
          "Dolor de rodilla",
          "Trastornos urinarios",
          "Edema",
        ],
        correct: 0,
      },
      {
        text: "E43 (Xiàngǔ) se usa para:",
        options: [
          "Dolor de pie, hinchazón y trastornos digestivos",
          "Dolor de tobillo",
          "Cefalea",
          "Trastornos ginecológicos",
        ],
        correct: 0,
      },
      {
        text: "E44 (Nèitíng) es un punto de dispersión del calor, usado para:",
        options: [
          "Dolor de muelas, gingivitis y trastornos digestivos",
          "Dolor de pie",
          "Cefalea",
          "Edema",
        ],
        correct: 0,
      },
      {
        text: "E45 (Lìduì) es el punto Jing-Pozo del Estómago, su acción principal es:",
        options: [
          "Restaurar la conciencia y tratar trastornos mentales agudos",
          "Tonificar el estómago",
          "Eliminar el viento",
          "Tratar el dolor de muelas",
        ],
        correct: 0,
      },
    ],
  },

  // ==========================================
  // MERIDIANO DE BAZO/PÁNCREAS (21 preguntas de clínica)
  // ==========================================
  {
    id: "meridiano-bp-clinica",
    category: "meridianos-clinica",
    title: "Bazo / Páncreas – Indicaciones Clínicas (Zú Tài Yīn)",
    description:
      "Funciones y aplicaciones clínicas principales de los puntos del meridiano de Bazo.",
    questions: [
      {
        text: "BP1 (Yǐnbái) es un punto Jing-Pozo. ¿Cuál es su acción principal?",
        options: [
          "Detener la hemorragia y restaurar la conciencia",
          "Tonificar el Qi del Bazo",
          "Eliminar la humedad",
          "Calmar la mente",
        ],
        correct: 0,
      },
      {
        text: "BP2 (Dàdū) es el punto de Dispersión (Yíng) del Bazo. ¿Qué tipo de calor trata?",
        options: [
          "Calor por deficiencia",
          "Calor húmedo en el Bazo y Estómago",
          "Calor en la sangre",
          "Calor de Riñón",
        ],
        correct: 1,
      },
      {
        text: "BP3 (Tàibái) es el punto Fuente del Bazo. ¿Para qué se usa principalmente?",
        options: [
          "Tonificar el Bazo y transformar la humedad",
          "Detener hemorragias",
          "Regular el intestino",
          "Dispersar el viento",
        ],
        correct: 0,
      },
      {
        text: "BP4 (Gōngsūn) es el punto Luo del Bazo, y se conecta con el Estómago. ¿Cuál es su acción principal?",
        options: [
          "Trastornos del estómago y dolor epigástrico",
          "Trastornos ginecológicos",
          "Dolor de cabeza",
          "Trastornos renales",
        ],
        correct: 0,
      },
      {
        text: "BP5 (Shāngqiū) es un punto Río (Jīng). ¿Qué tipo de afecciones trata?",
        options: [
          "Trastornos de huesos y articulaciones del pie y tobillo",
          "Trastornos digestivos",
          "Trastornos respiratorios",
          "Trastornos de la vejiga",
        ],
        correct: 0,
      },
      {
        text: "BP6 (Sānyīnjiāo) es el punto de intersección de los 3 Yin. ¿Cuál es su indicación más amplia?",
        options: [
          "Trastornos ginecológicos, urinarios y digestivos",
          "Solo trastornos digestivos",
          "Solo trastornos de la piel",
          "Solo dolor de rodilla",
        ],
        correct: 0,
      },
      {
        text: "BP7 (Lòugǔ) se usa principalmente para:",
        options: [
          "Dolor y distensión abdominal",
          "Diarrea y edema",
          "Trastornos ginecológicos",
          "Dolor de pierna",
        ],
        correct: 0,
      },
      {
        text: "BP8 (Dìjī) es el punto Xī (Hendidura) del Bazo. ¿Para qué afección aguda se usa?",
        options: [
          "Dismenorrea y dolor abdominal agudo",
          "Diarrea aguda",
          "Vómitos agudos",
          "Dolor de rodilla agudo",
        ],
        correct: 0,
      },
      {
        text: "BP9 (Yīnlíngquán) es el punto He (Mar) del Bazo. ¿Cuál es su acción principal?",
        options: [
          "Transformar la humedad y eliminar el edema",
          "Tonificar el Yang del Bazo",
          "Calmar el espíritu",
          "Regular la menstruación",
        ],
        correct: 0,
      },
      {
        text: "BP10 (Xuèhǎi) es el punto principal para:",
        options: [
          "Regular la sangre y tratar trastornos ginecológicos y de la piel",
          "Tonificar la Sangre",
          "Detener hemorragias",
          "Movilizar la sangre estancada",
        ],
        correct: 0,
      },
      {
        text: "BP11 (Jīmén) se usa para:",
        options: [
          "Trastornos urinarios e inguinales",
          "Dolor de cadera",
          "Trastornos ginecológicos",
          "Dolor lumbar",
        ],
        correct: 0,
      },
      {
        text: "BP12 (Chōngmén) se emplea en:",
        options: [
          "Dolor y distensión inguinal, hernia y problemas ginecológicos",
          "Trastornos digestivos",
          "Dolor de rodilla",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "BP13 (Fǔshè) está indicado para:",
        options: [
          "Dolor abdominal inferior, hernia y estreñimiento",
          "Diarrea",
          "Trastornos ginecológicos",
          "Dolor lumbar",
        ],
        correct: 0,
      },
      {
        text: "BP14 (Fùjié) se usa para:",
        options: [
          "Dolor abdominal, estreñimiento y diarrea",
          "Trastornos del apetito",
          "Edema",
          "Dolor de cadera",
        ],
        correct: 0,
      },
      {
        text: "BP15 (Dàhéng) es un punto clave para:",
        options: [
          "Trastornos intestinales y dolor abdominal",
          "Trastornos gástricos",
          "Trastornos de la vesícula biliar",
          "Dolor lumbar",
        ],
        correct: 0,
      },
      {
        text: "BP16 (Fù'āi) se usa para:",
        options: [
          "Dolor epigástrico y abdominal",
          "Estreñimiento",
          "Diarrea",
          "Trastornos respiratorios",
        ],
        correct: 0,
      },
      {
        text: "BP17 (Shídòu) se emplea en:",
        options: [
          "Dolor torácico y costal, tos y asma",
          "Trastornos digestivos",
          "Dolor de pecho",
          "Palpitaciones",
        ],
        correct: 0,
      },
      {
        text: "BP18 (Tiānxī) está indicado para:",
        options: [
          "Dolor torácico, tos y mastitis",
          "Trastornos gastrointestinales",
          "Insomnio",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "BP19 (Xiōngxiāng) se usa para:",
        options: [
          "Dolor torácico, tos y opresión en el pecho",
          "Dolor abdominal",
          "Trastornos renales",
          "Vértigo",
        ],
        correct: 0,
      },
      {
        text: "BP20 (Zhōuróng) está indicado para:",
        options: [
          "Dolor torácico, tos y dificultad respiratoria",
          "Trastornos hepáticos",
          "Dolor de hombro",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "BP21 (Dàbāo) es el punto de Gran Envoltura (Luo del Bazo) y se usa para:",
        options: [
          "Dolor torácico, costal y articular generalizado",
          "Trastornos digestivos",
          "Trastornos ginecológicos",
          "Regulación de la sangre",
        ],
        correct: 0,
      },
    ],
  },

  // ==========================================
  // MERIDIANO DE CORAZÓN (9 preguntas de clínica)
  // ==========================================
  {
    id: "meridiano-c-clinica",
    category: "meridianos-clinica",
    title: "Corazón – Indicaciones Clínicas (Shǒu Shǎo Yīn)",
    description:
      "Funciones y aplicaciones clínicas principales de los puntos del meridiano del Corazón.",
    questions: [
      {
        text: "C1 (Jíquán) se usa principalmente para:",
        options: [
          "Dolor de axila y problemas circulatorios del brazo",
          "Palpitaciones y ansiedad",
          "Trastornos respiratorios",
          "Dolor de hombro",
        ],
        correct: 0,
      },
      {
        text: "C2 (Qīnglíng) está indicado para:",
        options: ["Dolor de brazo y rigidez del codo", "Insomnio", "Palpitaciones", "Cefalea"],
        correct: 0,
      },
      {
        text: "C3 (Shàohǎi) es el punto He (Mar) del Corazón. ¿Qué acción principal tiene?",
        options: [
          "Calmar el espíritu y tratar palpitaciones",
          "Dispersar el viento",
          "Tonificar el Yang del Corazón",
          "Regular la menstruación",
        ],
        correct: 0,
      },
      {
        text: "C4 (Língdào) se usa para:",
        options: [
          "Trastornos mentales, ansiedad y palpitaciones",
          "Dolor de brazo",
          "Problemas digestivos",
          "Dolor de cabeza",
        ],
        correct: 0,
      },
      {
        text: "C5 (Xīmén) es el punto Xī (Hendidura) del Corazón. ¿Para qué afecciones agudas se usa?",
        options: [
          "Dolor precordial agudo y palpitaciones",
          "Diarrea aguda",
          "Vómitos",
          "Dolor de cabeza agudo",
        ],
        correct: 0,
      },
      {
        text: "C6 (Tōnglǐ) es el punto Luo del Corazón. ¿Cuál es su acción principal?",
        options: [
          "Comunicar el corazón y tratar afonía y palpitaciones",
          "Tonificar la sangre",
          "Calmar la mente",
          "Regular la sudoración",
        ],
        correct: 0,
      },
      {
        text: "C7 (Shénmén) es el punto Fuente del Corazón. ¿Cuál es su indicación más importante?",
        options: [
          "Trastornos mentales, insomnio, palpitaciones y ansiedad",
          "Dolor de muñeca",
          "Dolor de cabeza",
          "Regulación de la presión arterial",
        ],
        correct: 0,
      },
      {
        text: "C8 (Yīnxī) está indicado para:",
        options: [
          "Palpitaciones, dolor precordial y sudoración nocturna",
          "Dolor de mano",
          "Trastornos digestivos",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "C9 (Shàochōng) es el punto Jing-Pozo del Corazón. ¿Cuál es su acción principal?",
        options: [
          "Restaurar la conciencia y tratar trastornos mentales agudos",
          "Tonificar el Corazón",
          "Eliminar el calor",
          "Regular la sangre",
        ],
        correct: 0,
      },
    ],
  },

  // ==========================================
  // MERIDIANO DE INTESTINO DELGADO (19 preguntas de clínica)
  // ==========================================
  {
    id: "meridiano-id-clinica",
    category: "meridianos-clinica",
    title: "Intestino Delgado – Indicaciones Clínicas (Shǒu Tài Yáng)",
    description:
      "Funciones y aplicaciones clínicas principales de los puntos del meridiano de Intestino Delgado.",
    questions: [
      {
        text: "ID1 (Shàozé) es el punto Jing-Pozo del Intestino Delgado. ¿Cuál es su acción principal?",
        options: [
          "Restaurar la conciencia y aliviar el dolor de garganta",
          "Tonificar el Qi del Intestino Delgado",
          "Eliminar el calor del corazón",
          "Regular la digestión",
        ],
        correct: 0,
      },
      {
        text: "ID2 (Qiángǔ) es el punto de Dispersión (Yíng) del canal. ¿Qué tipo de calor trata?",
        options: [
          "Calor externo con fiebre y dolor de cabeza",
          "Calor por deficiencia de Yin",
          "Calor húmedo en el Jiao Inferior",
          "Calor en la sangre",
        ],
        correct: 0,
      },
      {
        text: "ID3 (Hòuxī) es un punto muy importante, punto de confluencia del Vaso Gobernador. ¿Para qué se usa principalmente?",
        options: [
          "Dolor de cuello, rigidez y problemas de la columna cervical",
          "Trastornos digestivos",
          "Dolor de rodilla",
          "Insomnio",
        ],
        correct: 0,
      },
      {
        text: "ID4 (Wāngǔ) es el punto Fuente del Intestino Delgado. ¿Qué acción tiene?",
        options: [
          "Tratar problemas de la muñeca y dolor de cabeza",
          "Tonificar el Bazo",
          "Eliminar la flema",
          "Regular la menstruación",
        ],
        correct: 0,
      },
      {
        text: "ID5 (Yánggǔ) es el punto Río (Jīng) del canal. ¿Para qué se usa?",
        options: [
          "Dolor de muñeca, tinnitus y sordera",
          "Dolor de codo",
          "Trastornos digestivos",
          "Cefalea frontal",
        ],
        correct: 0,
      },
      {
        text: "ID6 (Yǎnglǎo) es el punto Xī (Hendidura) del Intestino Delgado. ¿Qué afección aguda trata?",
        options: [
          "Dolor agudo de muñeca y problemas oculares",
          "Diarrea aguda",
          "Vómitos",
          "Dolor de cabeza agudo",
        ],
        correct: 0,
      },
      {
        text: "ID7 (Zhīzhèng) es el punto Luo del Intestino Delgado. ¿Cuál es su función principal?",
        options: [
          "Armonizar el canal y tratar dolor de cabeza y cuello",
          "Tonificar la sangre",
          "Calmar el espíritu",
          "Regular la digestión",
        ],
        correct: 0,
      },
      {
        text: "ID8 (Xiǎohǎi) es el punto He (Mar) del Intestino Delgado. ¿Qué tipo de afecciones trata?",
        options: [
          "Dolor de codo y trastornos del intestino delgado",
          "Dolor de hombro",
          "Trastornos mentales",
          "Dolor de cabeza",
        ],
        correct: 0,
      },
      {
        text: "ID9 (Jiānzhēn) se usa principalmente para:",
        options: [
          "Dolor de hombro y brazo, especialmente en la región escapular",
          "Dolor de cuello",
          "Trastornos respiratorios",
          "Dolor torácico",
        ],
        correct: 0,
      },
      {
        text: "ID10 (Nàoshū) está indicado para:",
        options: [
          "Dolor de hombro y rigidez del brazo",
          "Dolor de codo",
          "Trastornos digestivos",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "ID11 (Tiānzōng) se usa para:",
        options: [
          "Dolor de hombro, rigidez y periartritis escapular",
          "Dolor lumbar",
          "Trastornos respiratorios",
          "Dolor torácico",
        ],
        correct: 0,
      },
      {
        text: "ID12 (Bǐngfēng) está indicado para:",
        options: [
          "Dolor y rigidez del hombro y cuello",
          "Dolor de cabeza",
          "Trastornos digestivos",
          "Dolor de brazo",
        ],
        correct: 0,
      },
      {
        text: "ID13 (Qūyuán) se usa para:",
        options: [
          "Dolor y rigidez del hombro y la región escapular",
          "Dolor lumbar",
          "Cefalea",
          "Trastornos gastrointestinales",
        ],
        correct: 0,
      },
      {
        text: "ID14 (Jiānwàishū) está indicado para:",
        options: [
          "Dolor y rigidez del hombro y cuello",
          "Dolor de codo",
          "Trastornos digestivos",
          "Dolor de cabeza",
        ],
        correct: 0,
      },
      {
        text: "ID15 (Jiānzhōngshū) se usa para:",
        options: [
          "Dolor de hombro, rigidez y tos",
          "Dolor lumbar",
          "Cefalea",
          "Trastornos del intestino",
        ],
        correct: 0,
      },
      {
        text: "ID16 (Tiānchuāng) está indicado para:",
        options: [
          "Dolor de garganta, afonía y rigidez de cuello",
          "Sordera",
          "Tinnitus",
          "Dolor dental",
        ],
        correct: 0,
      },
      {
        text: "ID17 (Tiānróng) se usa para:",
        options: [
          "Dolor de garganta, afonía y problemas del oído",
          "Congestión nasal",
          "Dolor facial",
          "Cefalea",
        ],
        correct: 0,
      },
      {
        text: "ID18 (Quánliáo) está indicado para:",
        options: [
          "Dolor facial, parálisis facial y neuralgia del trigémino",
          "Dolor de muelas",
          "Sinusitis",
          "Dolor de oído",
        ],
        correct: 0,
      },
      {
        text: "ID19 (Tīnggōng) es el punto principal para:",
        options: [
          "Tinnitus, sordera y problemas del oído",
          "Dolor facial",
          "Dolor de garganta",
          "Dolor dental",
        ],
        correct: 0,
      },
    ],
  },
];
