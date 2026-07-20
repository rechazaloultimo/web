// src/data/quizzes.ts
export interface Question {
  text: string;
  options: string[];
  correct: number;
}

export interface QuizMeta {
  id: string;
  category?: string;
  title: string;
  description: string;
  questions: Question[];
}

export const quizzes: QuizMeta[] = [
  //Auriculoterapia

  //  "title": "Auriculoterapia - Anatomía y Diagnóstico Visual - Clase 1",
  {
    id: "anatomia-diagnostico-auricular",
    category: "auriculoterapia",
    title: "Auriculoterapia - Anatomía y Diagnóstico Visual - Clase 1",
    description:
      "Estudio de las estructuras de la oreja y la interpretación de señales visuales según la Medicina China.",
    questions: [
      // ========== 1. ANATOMÍA Y TOPOGRAFÍA ==========
      {
        text: "¿Quién desarrolló en 1972 la cartografía que representa el cuerpo humano como un feto en posición invertida en la oreja?",
        options: ["Huang Di", "Paul Nogier", "Li Shi Zhen", "Sun Simiao"],
        correct: 1,
      },
      {
        text: "¿Qué estructura anatómica se encuentra entre el hélix y el antehélix?",
        options: ["Fosa Triangular", "Concha Cava", "Fosa Escafoidea", "Cisura Intertrágica"],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina la bifurcación superior del antehélix?",
        options: [
          "Rama superior del antehélix",
          "Cresta del hélix",
          "Raíz del hélix",
          "Surco posterior",
        ],
        correct: 0,
      },
      {
        text: "¿En qué zona anatómica se localizan generalmente los órganos internos (vísceras)?",
        options: [
          "En el lóbulo",
          "En las conchas (Cava y Cimba)",
          "En el hélix",
          "En la fosa escafoidea",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la estructura carnosa y blanda de la parte inferior de la oreja donde se refleja la cara y la cabeza?",
        options: ["Trago", "Antitrago", "Lóbulo", "Hélix"],
        correct: 2,
      },

      // ========== 2. DIAGNÓSTICO POR COLOR ==========
      {
        text: "En el diagnóstico auricular, ¿qué indican generalmente las manchas de color rojo brillante?",
        options: [
          "Patología crónica",
          "Deficiencia de sangre",
          "Proceso agudo, inflamación o dolor",
          "Presencia de tumores",
        ],
        correct: 2,
      },
      {
        text: "¿Qué interpretación clínica tiene una mancha de color rojo muy oscuro o marrón en una zona específica?",
        options: [
          "Calor por insuficiencia",
          "Estancamiento de sangre o posibles tumoraciones",
          "Frío interno",
          "Mejoría del cuadro clínico",
        ],
        correct: 1,
      },
      {
        text: "¿Qué sugiere el hallazgo de una zona con piel blanca y aspecto seco o descamado?",
        options: [
          "Inflamación aguda",
          "Exceso de energía Yang",
          "Patología crónica o un estado de deficiencia (Xu)",
          "Infección bacteriana",
        ],
        correct: 2,
      },
      {
        text: "Si se observa un círculo rojo en la zona refleja del corazón, ¿qué patología podría estar indicando según los presupuestos básicos?",
        options: [
          "Hipertensión",
          "Fiebre reumática cardíaca",
          "Taquicardia emocional",
          "Insomnio crónico",
        ],
        correct: 1,
      },

      // ========== 3. MORFOLOGÍA Y ALTERACIONES ==========
      {
        text: "¿Qué indican las pápulas, quistes o el engrosamiento de la piel en una zona de la oreja?",
        options: [
          "Presencia de Humedad en la zona refleja",
          "Falta de higiene",
          "Exceso de Viento-Calor",
          "Recuperación rápida",
        ],
        correct: 0,
      },
      {
        text: "¿Qué sospecha clínica genera la presencia de un pliegue diagonal en el lóbulo (desde la incisura intertrágica hacia la base)?",
        options: [
          "Problemas digestivos",
          "Problemas coronarios o hipertensión",
          "Miopía",
          "Dolor lumbar",
        ],
        correct: 1,
      },
      {
        text: "Un pliegue vertical en el lóbulo (desde la incisura intertrágica hasta la incisura lóbulo-heliana) suele asociarse con:",
        options: ["Tinnitus (acúfenos)", "Dolor de muelas", "Diabetes", "Asma"],
        correct: 0,
      },
      {
        text: "¿Qué indica el hallazgo de una zona con cartílago duro o una malformación en el antehélix?",
        options: [
          "Pérdida de audición",
          "Tensión muscular, estancamiento de Qi o posibles hernias discales",
          "Exceso de calcio",
          "Nada, es una variante normal",
        ],
        correct: 1,
      },

      // ========== 4. RELACIÓN CUERPO-OREJA ==========
      {
        text: "¿Qué parte del cuerpo se refleja en la fosa triangular?",
        options: [
          "La columna vertebral",
          "El sistema urogenital y pelvis",
          "Los miembros superiores",
          "El tórax",
        ],
        correct: 1,
      },
      {
        text: "Siguiendo la analogía del feto invertido, ¿dónde esperarías encontrar la zona de la columna cervical?",
        options: [
          "En la parte superior del hélix",
          "En la base del antehélix, cerca del antitrago",
          "En el centro del lóbulo",
          "Dentro del canal auditivo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal de las orejas como parte del aparato auditivo?",
        options: [
          "Equilibrar la presión arterial",
          "Captar, concentrar y dirigir las ondas sonoras",
          "Filtrar el aire",
          "Regular la temperatura cerebral",
        ],
        correct: 1,
      },
      {
        text: "¿Es necesario que exista una alteración en la audición para que se manifiesten señales de enfermedad en la oreja?",
        options: [
          "Sí, siempre van de la mano",
          "No, la presencia de anomalías reflejas no implica alteración auditiva",
          "Solo en casos de dolor óseo",
          "Solo si el hélix está afectado",
        ],
        correct: 1,
      },

      // ========== 5. SIGNOS DE HUMEDAD Y CALOR ==========
      {
        text: "¿Qué signo visual en la piel auricular indica típicamente la presencia de Humedad?",
        options: [
          "Piel con grasitud o brillo aceitoso",
          "Piel muy pálida",
          "Descamación seca",
          "Hundimiento de la zona",
        ],
        correct: 0,
      },
      {
        text: "Si una zona presenta un relieve o protuberancia (pápula) de color blanco, ¿qué tipo de cronicidad representa?",
        options: ["Aguda", "Subaguda", "Crónica con estancamiento", "No tiene valor diagnóstico"],
        correct: 2,
      },
      {
        text: "¿Qué se debe evaluar primero en una consulta de auriculoterapia según los materiales revisados?",
        options: [
          "La presión arterial",
          "La inspección visual de la forma, color y signos cutáneos de la oreja",
          "El pulso radial",
          "La temperatura del pie",
        ],
        correct: 1,
      },
    ],
  },

  //    title: "Auriculoterapia - Los 10 Puntos Maestros",
  {
    id: "master-puntos-auriculares",
    category: "auriculoterapia",
    title: "Auriculoterapia - Los 10 Puntos Maestros",
    description:
      "Evaluación sobre la localización exacta y las funciones terapéuticas de los 10 puntos pilares de la medicina auricular.",
    questions: [
      // ==========================================
      // 1. PUNTO CERO
      // ==========================================
      {
        text: "¿Cuál es la ubicación exacta del Punto Cero?",
        options: [
          "En el centro del lóbulo",
          "En la raíz del hélix, donde surge de la concha",
          "En la fosa triangular",
          "En el ápice de la oreja",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal del Punto Cero?",
        options: [
          "Tratar el asma",
          "Actuar como punto de reset, equilibrando la energía y el centro del cuerpo",
          "Sedar el dolor de muelas",
          "Aumentar la presión arterial",
        ],
        correct: 1,
      },

      // ==========================================
      // 2. SHEN MEN
      // ==========================================
      {
        text: "¿Dónde se localiza el punto Shen Men (Puerta del Espíritu)?",
        options: [
          "En el centro de la concha cava",
          "En el tercio superior de la fosa triangular",
          "En el trago",
          "Detrás del lóbulo",
        ],
        correct: 1,
      },
      {
        text: "El punto Shen Men es fundamental para:",
        options: [
          "Tratar infecciones urinarias",
          "Aliviar el estreñimiento",
          "Calmar la mente, reducir la ansiedad y potenciar otros puntos",
          "Bajar la fiebre agudamente",
        ],
        correct: 2,
      },

      // ==========================================
      // 3. SIMPÁTICO
      // ==========================================
      {
        text: "¿Dónde se sitúa el Punto Simpático?",
        options: [
          "En el borde interno del hélix, cubierto por la rama inferior del antehélix",
          "En el centro del antitrago",
          "En el ápice del trago",
          "En la fosa escafoidea",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal del Punto Simpático?",
        options: [
          "Regular el sistema nervioso autónomo, tratar dolores viscerales y espasmos",
          "Estimular la glándula pineal",
          "Mejorar la audición",
          "Aumentar la temperatura corporal",
        ],
        correct: 0,
      },

      // ==========================================
      // 4. ENDOCRINO
      // ==========================================
      {
        text: "El Punto Endocrino se localiza en la base de la concha cava, cerca de la incisura intertrágica. ¿Cuál es su uso principal?",
        options: [
          "Tratar fracturas óseas",
          "Regular hormonas, tratar menstruación irregular y reumatismo",
          "Mejorar la audición",
          "Tratar la caspa",
        ],
        correct: 1,
      },
      {
        text: "¿En qué zona de la oreja se encuentra el Punto Endocrino?",
        options: [
          "En el lóbulo",
          "En la base de la concha cava, cerca de la incisura intertrágica",
          "En la raíz del hélix",
          "En la fosa triangular",
        ],
        correct: 1,
      },

      // ==========================================
      // 5. TÁLAMO
      // ==========================================
      {
        text: "¿Cuál es la ubicación del Máster Tálamo?",
        options: [
          "En el lóbulo",
          "En la parte interna del antitrago hacia la concha",
          "En la raíz del hélix",
          "En la fosa triangular",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué se utiliza principalmente el Máster Tálamo?",
        options: [
          "Control del dolor crónico y agudo (analgesia) y trastornos mentales",
          "Problemas de visión",
          "Fortalecer los huesos",
          "Tratar hemorroides",
        ],
        correct: 0,
      },

      // ==========================================
      // 6. OSCILACIÓN
      // ==========================================
      {
        text: "¿Dónde se localiza el Máster Oscilación?",
        options: [
          "En la raíz del hélix",
          "En la parte interna del tubérculo inferior del trago",
          "En el lóbulo",
          "En el centro de la oreja",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto equilibra los hemisferios cerebrales y ayuda en trastornos de aprendizaje como la dislexia?",
        options: ["Shen Men", "Máster Oscilación", "Punto Cero", "Punto Alergia"],
        correct: 1,
      },

      // ==========================================
      // 7. ALERGIA
      // ==========================================
      {
        text: "¿Dónde se ubica típicamente el Punto Alergia?",
        options: [
          "En el centro de la concha",
          "En el ápice del hélix o cerca del borde superior",
          "En el trago",
          "Debajo del lóbulo",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal del Punto Alergia?",
        options: [
          "Tratar alergias, asma y urticaria",
          "Regular la presión arterial",
          "Mejorar la digestión",
          "Calmar el dolor de cabeza",
        ],
        correct: 0,
      },

      // ==========================================
      // 8. SENSORIAL
      // ==========================================
      {
        text: "¿Dónde se localiza el Punto Sensorial (Máster Sensorial)?",
        options: [
          "En el centro del lóbulo",
          "En el trago",
          "En la raíz del hélix",
          "En la concha cimba",
        ],
        correct: 0,
      },
      {
        text: "El Punto Sensorial se utiliza para:",
        options: [
          "Problemas de vista, oído y olfato",
          "Dolor de espalda",
          "Mejorar la digestión",
          "Aumentar la energía de Riñón",
        ],
        correct: 0,
      },

      // ==========================================
      // 9. CEREBRO (MÁSTER CEREBRAL)
      // ==========================================
      {
        text: "¿Cuál es la función del Punto Cerebro (Máster Cerebral)?",
        options: [
          "Regular el sueño y las funciones cognitivas superiores",
          "Tratar la diarrea",
          "Mejorar la fuerza en las manos",
          "Drenar la vejiga",
        ],
        correct: 0,
      },
      {
        text: "¿En qué zona de la oreja se encuentra generalmente el Punto Cerebro?",
        options: [
          "En el antitrago (zona cerebral)",
          "En el lóbulo",
          "En la fosa triangular",
          "En el trago",
        ],
        correct: 0,
      },

      // ==========================================
      // 10. TRANQUILIZANTE
      // ==========================================
      {
        text: "¿Dónde se encuentra el Punto Tranquilizante?",
        options: [
          "En el trago (generalmente en la parte inferior)",
          "En el antitrago",
          "En el lóbulo",
          "En la base de la fosa triangular",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal del Punto Tranquilizante?",
        options: [
          "Sedante, trata el insomnio y la ansiedad",
          "Estimula el apetito",
          "Mejora la memoria",
          "Aumenta la presión arterial",
        ],
        correct: 0,
      },
    ],
  },

  //"title": "Auriculoterapia - Formas Terapéuticas y Aplicación Clínica",
  {
    id: "terapeutica-auricular",
    category: "auriculoterapia",
    title: "Auriculoterapia - Formas Terapéuticas y Aplicación Clínica",
    description:
      "Evaluación sobre métodos de tratamiento, técnicas de sangría y funciones específicas del Hélix.",
    questions: [
      // ========== 1. MÉTODOS Y PRINCIPIOS ==========
      {
        text: "¿Cuál es una de las principales ventajas de utilizar el método de semillas en auriculoterapia?",
        options: [
          "Es más doloroso que la aguja",
          "Permite que el paciente se trate durante un tiempo más largo, creando efectos duraderos",
          "No requiere localización precisa",
          "Solo sirve para problemas estéticos",
        ],
        correct: 1,
      },
      {
        text: "Según los principios de la Medicina Auricular, ¿cómo se trata al paciente?",
        options: [
          "Solo se trata el síntoma local",
          "Como un 'Todo', considerando el cuerpo de anterior a posterior y de arriba a abajo",
          "Solo se consideran los órganos internos",
          "Se ignora la causa para enfocarse en el dolor",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál de estos NO es un método de tratamiento mencionado en el manual de terapéutica?",
        options: [
          "Sangrado auricular",
          "Yeso magnético auricular",
          "Cirugía de cartílago",
          "Láser auricular",
        ],
        correct: 2,
      },

      // ========== 2. TÉCNICA DE SANGRÍA (BLOODLETTING) ==========
      {
        text: "¿Para qué tipo de patologías se requiere sangrar la oreja con más frecuencia que la dosis normal?",
        options: [
          "Enfermedades crónicas de larga data",
          "Enfermedades agudas",
          "Cansancio leve",
          "Problemas de crecimiento",
        ],
        correct: 1,
      },
      {
        text: "¿Con qué frecuencia se recomienda realizar la técnica de sangría normalmente?",
        options: [
          "Cada 24 horas",
          "Una vez cada 3 a 5 días",
          "Una vez al mes",
          "Cada vez que el paciente coma",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es un requisito fundamental al realizar sangrías frecuentes en tratamientos agudos?",
        options: [
          "Usar siempre la misma oreja",
          "Asegurarse de cambiar de oreja entre sesiones",
          "Sangrar al menos 10 puntos a la vez",
          "No limpiar la zona",
        ],
        correct: 1,
      },

      // ========== 3. ÁPICE DE LA OREJA ==========
      {
        text: "¿Cuál de las siguientes es una de las 'Seis funciones del Ápice del oído'?",
        options: [
          "Aumentar el hambre",
          "Reducir la temperatura corporal (bajar la fiebre)",
          "Provocar estreñimiento",
          "Aumentar la presión arterial",
        ],
        correct: 1,
      },
      {
        text: "Además de la fiebre y la inflamación, ¿qué otro efecto tiene el sangrado del Ápice?",
        options: [
          "Sedante para mejorar el sueño",
          "Aumentar la ansiedad",
          "Disminuir la visión",
          "Debilitar el sistema inmune",
        ],
        correct: 0,
      },

      // ========== 4. FUNCIONES DE HELIX 1 A 6 ==========
      {
        text: "¿Qué punto del Hélix se utiliza para dolores de extremidades, artritis y síndrome del túnel carpiano?",
        options: ["Hélix 1", "Hélix 3", "Hélix 5", "Hélix 6"],
        correct: 0,
      },
      {
        text: "El punto Hélix 2 es especialmente efectivo para:",
        options: [
          "Dolor lumbar",
          "Alergias, codo de tenista y problemas de audición",
          "Gastritis",
          "Fiebre alta",
        ],
        correct: 1,
      },
      {
        text: "¿Qué zona del Hélix se indica para dolor de hombro y fibromialgia de espalda?",
        options: ["Hélix 1", "Hélix 2", "Hélix 3", "Hélix 4"],
        correct: 2,
      },
      {
        text: "El punto Hélix 4 está relacionado con:",
        options: [
          "Degeneración o lesiones en las vértebras cervicales",
          "Problemas en los pies",
          "Infecciones dentales",
          "Falta de memoria",
        ],
        correct: 0,
      },
      {
        text: "¿Qué puntos del Hélix son comúnmente utilizados para realizar sangrías?",
        options: [
          "Solo el Hélix 1",
          "Del Hélix 1 al Hélix 6",
          "Solo los puntos impares",
          "Ninguno, el Hélix no se sangra",
        ],
        correct: 1,
      },

      // ========== 5. ABORDAJES ESPECÍFICOS ==========
      {
        text: "¿Qué método se describe como simple, instantáneo, efectivo e indoloro?",
        options: [
          "La cirugía estética",
          "El tratamiento auricular",
          "La cauterización",
          "El ayuno prolongado",
        ],
        correct: 1,
      },
      {
        text: "¿Qué técnica es útil para limpiar la mente y mejorar la visión según el manual?",
        options: [
          "Sangría en el Ápice",
          "Masaje en el lóbulo",
          "Moxa en el trago",
          "Imanes en la concha",
        ],
        correct: 0,
      },
      {
        text: "En el tratamiento de alergias, ¿qué combinación de Hélix y Ápice sería lógica?",
        options: ["Ápice y Hélix 2", "Solo Hélix 6", "Ápice y Lóbulo central", "Hélix 1 y Hélix 5"],
        correct: 0,
      },
      {
        text: "El entumecimiento y hormigueo en las manos se trata principalmente en:",
        options: ["Hélix 1", "Hélix 4", "Ápice", "Hélix 6"],
        correct: 0,
      },
      {
        text: "¿Para qué se utiliza el masaje auricular según la introducción?",
        options: [
          "Como método preventivo y relajante",
          "Solo para diagnóstico",
          "Para reemplazar la medicación",
          "No tiene uso clínico",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función terapéutica del Hélix 5 y 6?",
        options: [
          "Tratar problemas de la zona sacra y miembros inferiores",
          "Tratar solo la cara",
          "Mejorar la digestión",
          "Bajar la presión ocular",
        ],
        correct: 0,
      },
      {
        text: "La Medicina Auricular se considera una profesión independiente que no necesita incorporación de otras terapias.",
        options: ["Verdadero", "Falso"],
        correct: 0,
      },
    ],
  },

  // "title": "Auriculoterapia - Columna y Miembro Inferior",
  {
    id: "cartografia-somatica-inferior",
    category: "auriculoterapia",
    title: "Auriculoterapia - Columna y Miembro Inferior",
    description:
      "Evaluación detallada sobre las zonas reflejas del sistema musculoesquelético en la oreja.",
    questions: [
      // ========== 1. COLUMNA VERTEBRAL (ANTEHÉLIX) ==========
      {
        text: "¿En qué estructura anatómica de la oreja se refleja la columna vertebral?",
        options: ["El hélix", "El antehélix", "La concha cava", "El lóbulo"],
        correct: 1,
      },
      {
        text: "Siguiendo la lógica del feto invertido, ¿dónde se localiza la zona cervical?",
        options: [
          "En la parte superior del antehélix",
          "En la parte inferior del antehélix, cerca del antitrago",
          "En la fosa escafoidea",
          "En el trago",
        ],
        correct: 1,
      },
      {
        text: "¿Qué zona de la columna se encuentra en el cuerpo central del antehélix?",
        options: ["Cervical", "Dorsal (Torácica)", "Lumbar", "Sacra"],
        correct: 1,
      },
      {
        text: "¿Dónde se localiza la zona lumbar en la oreja?",
        options: [
          "Cerca de la bifurcación del antehélix",
          "En el lóbulo",
          "En la concha cimba",
          "En el hélix",
        ],
        correct: 0,
      },
      {
        text: "¿Qué patología indica una malformación o dureza en la línea del antehélix?",
        options: [
          "Problemas digestivos",
          "Tensión muscular o posibles hernias discales",
          "Alergias respiratorias",
          "Miopía",
        ],
        correct: 1,
      },
      {
        text: "¿Para qué se utiliza el punto de la zona Sacra?",
        options: [
          "Dolor en la frente",
          "Dolor en la región inferior de la espalda y ciática",
          "Gastritis",
          "Asma",
        ],
        correct: 1,
      },

      // ========== 2. MIEMBRO INFERIOR (FOSA TRIANGULAR Y RAMAS) ==========
      {
        text: "¿En qué zona se localizan los puntos de la cadera, rodilla y tobillo?",
        options: [
          "En la fosa escafoidea",
          "En la fosa triangular y las ramas del antehélix",
          "En la concha cimba",
          "En el trago",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la función principal del Punto Cadera?",
        options: [
          "Tratar el dolor de muelas",
          "Aliviar dolor de cadera y región inferior de la espalda",
          "Mejorar la visión",
          "Tratar la afonía",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto se utiliza específicamente para esguinces, fracturas y dolores articulares de la pierna?",
        options: ["Punto Tobillo", "Punto Rodilla", "Punto Hombro", "Punto Muñeca"],
        correct: 1,
      },
      {
        text: "El Punto Tobillo es útil tanto para el dolor como para:",
        options: [
          "La acidez estomacal",
          "El edema de tobillo (hinchazón)",
          "La caída del cabello",
          "La rinitis",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se localiza el punto de los Dedos del Pie?",
        options: [
          "Cerca del ápice de la fosa triangular",
          "En el lóbulo",
          "En el antitrago",
          "En el orificio auditivo",
        ],
        correct: 0,
      },
      {
        text: "¿Qué punto auricular alivia los calambres en los gemelos?",
        options: ["Punto Muslo", "Punto Pantorrilla", "Punto Cadera", "Punto Talón"],
        correct: 1,
      },

      // ========== 3. RELACIÓN CON EL DOLOR CIÁTICO ==========
      {
        text: "¿Qué combinación de zonas es clave para tratar una ciatalgia (dolor ciático)?",
        options: [
          "Lóbulo y Trago",
          "Zona Lumbar, Sacro e Isquion",
          "Ojo y Oído interno",
          "Hélix 1 y 2",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto alivia la tensión en la espalda y la degeneración discal?",
        options: [
          "Punto de Ligamentos Sacroiliacos",
          "Punto de Amígdala",
          "Punto de Uretra",
          "Punto de Boca",
        ],
        correct: 0,
      },

      // ========== 4. MIEMBRO SUPERIOR (FOSA ESCAFOIDEA) ==========
      {
        text: "¿En qué estructura anatómica se reflejan los brazos y manos?",
        options: [
          "Fosa Triangular",
          "Fosa Escafoidea (entre hélix y antehélix)",
          "Concha Cava",
          "Lóbulo",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto se encuentra en la parte superior de la fosa escafoidea?",
        options: ["Punto Dedos de la Mano", "Punto Hombro", "Punto Codo", "Punto Muñeca"],
        correct: 0,
      },
      {
        text: "El punto para tratar el 'Codo de Tenista' se localiza en:",
        options: ["El centro de la fosa escafoidea", "La raíz del hélix", "El trago", "El lóbulo"],
        correct: 0,
      },
      {
        text: "¿Qué punto se utiliza para el Síndrome del Túnel Carpiano en la fosa escafoidea?",
        options: ["Punto Hombro", "Punto Muñeca", "Punto Clavícula", "Punto Cuello"],
        correct: 1,
      },
      {
        text: "¿Dónde se localiza el punto Hombro?",
        options: [
          "En la parte inferior de la fosa escafoidea, cerca del nivel del antehélix",
          "En el ápice de la oreja",
          "En el trago",
          "En la fosa triangular",
        ],
        correct: 0,
      },

      // ========== 5. PUNTOS COADYUVANTES Y SÍNTOMAS ==========
      {
        text: "¿Qué punto auricular se asocia con el alivio de desgarros en los isquiotibiales?",
        options: ["Punto Muslo", "Punto Cuello", "Punto Corazón", "Punto Hígado"],
        correct: 0,
      },
      {
        text: "¿En qué zona se ubican los puntos para las vértebras dorsales?",
        options: [
          "Parte superior del lóbulo",
          "Parte media del antehélix",
          "Punta del trago",
          "Base de la concha",
        ],
        correct: 1,
      },
      {
        text: "¿Qué indica un cambio de color rojo en la zona lumbar?",
        options: [
          "Hipotensión",
          "Dolor agudo o inflamación en la espalda baja",
          "Cansancio visual",
          "Falta de sueño",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto se encuentra inmediatamente por encima de la zona lumbar?",
        options: ["Zona Sacra", "Zona Cervical", "Punto Ojo", "Punto Estómago"],
        correct: 0,
      },
      {
        text: "¿Cuál es la función del punto Clavícula en la auriculoterapia?",
        options: [
          "Tratar asma",
          "Tratar dolor de hombro y zona superior del tórax",
          "Mejorar la audición",
          "Bajar la fiebre",
        ],
        correct: 1,
      },

      // ========== 6. TOPOGRAFÍA GENERAL ==========
      {
        text: "Si dividimos el antehélix en tres, la parte superior (ramas) corresponde a:",
        options: ["La cabeza", "Los miembros inferiores", "Los órganos internos", "Los brazos"],
        correct: 1,
      },
      {
        text: "El punto Talón se localiza cerca de:",
        options: ["Los Dedos del pie y Tobillo", "El Lóbulo", "La Concha Cava", "El Trago"],
        correct: 0,
      },
      {
        text: "¿Qué zona refleja el sistema nervioso central en relación con la columna?",
        options: [
          "La parte interna del antehélix",
          "La parte externa del hélix",
          "El lóbulo central",
          "La fosa triangular",
        ],
        correct: 0,
      },
      {
        text: "En auriculoterapia, el 'Isquion' se localiza en:",
        options: ["La rama inferior del antehélix", "El trago", "El hélix 1", "El lóbulo"],
        correct: 0,
      },
      {
        text: "Para tratar un dolor cervical con rigidez, ¿qué punto maestro potenciaría mejor la zona cervical?",
        options: ["Shen Men", "Punto de Boca", "Punto de Ojo", "Punto de Hígado"],
        correct: 0,
      },
      {
        text: "¿Qué parte de la columna está más cerca del antitrago?",
        options: ["Columna Cervical", "Columna Lumbar", "Columna Sacra", "Coxis"],
        correct: 0,
      },
    ],
  },

  //san bao
  {
    id: "sanbao",
    title: "Diagnostico Chino - Clase 1 - Los Tres Tesoros (Sānbǎo)",
    description: "Jīng, Qì y Shén en Medicina Tradicional China",
    questions: [
      // ========== 1. DEFINICIÓN GENERAL DE LOS TRES TESOROS ==========
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

      // ========== 2. JĪNG (ESENCIA): PRENATAL, POSTNATAL Y FUNCIONES ==========
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
        text: "¿Cómo se relacionan el Jīng prenatal y el Jīng postnatal?",
        options: [
          "Son completamente independientes, no se mezclan",
          "El postnatal se transforma en prenatal si se medita",
          "La esencia postnatal se combina con una porción de Jīng prenatal para formar Qì, sangre y líquidos; malos hábitos agotan más rápido el Jīng prenatal",
          "El Jīng prenatal se regenera con la esencia postnatal ilimitadamente",
        ],
        correct: 2,
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

      // ========== 3. QÌ (ENERGÍA): ORIGEN, TIPOS Y FUNCIONES ==========
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
        text: "El 'Zhōng Dāntián' (centro del pecho) es la residencia principal del:",
        options: ["Jīng", "Qì", "Shén", "Xué (sangre)"],
        correct: 1,
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

      // ========== 4. SHÉN (ESPÍRITU/CONCIENCIA): IDEograma, aspectos y distribución ==========
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
        text: "¿Cuál de los siguientes NO es un aspecto del Shén fragmentado en los órganos Zàng?",
        options: ["Hún (alma etérea)", "Pò (alma corpórea)", "Yì (pensamiento)", "Xuè (sangre)"],
        correct: 3,
      },
      {
        text: "¿Cuál de los siguientes órganos almacena el Hún (魂), el alma etérea relacionada con la creatividad y los sueños?",
        options: ["Corazón", "Pulmones", "Hígado", "Riñones"],
        correct: 2,
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
        text: "El Zhì (志), que reside en el riñón, se asocia con:",
        options: [
          "La memoria a corto plazo y el pensamiento analítico",
          "La voluntad, la perseverancia y la determinación",
          "La percepción sensorial y el instinto",
          "La alegría y la expansión emocional",
        ],
        correct: 1,
      },

      // ========== 5. INTERRELACIONES, DĀNTIÁN Y CONCEPTOS CLÍNICOS ==========
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
        text: "En la dinámica de clase se mencionó que el consumo excesivo de alimentos de mala calidad afecta principalmente a:",
        options: [
          "El Shén, generando confusión mental",
          "El Jīng prenatal, agotándolo más rápidamente",
          "El Qì defensivo (Wèiqì)",
          "La sangre sin relación con los Tesoros",
        ],
        correct: 1,
      },
    ],
  },

  //  "title": "Dietoterapia China - Clase 1",
  {
    id: "dietoterapia-china-fundamentos",
    title: "Dietoterapia China - Clase 1",
    description:
      "Evaluación sobre la importancia de la alimentación en MTC, la naturaleza térmica de los alimentos y el proceso de digestión energética.",
    questions: [
      // ========== 1. FILOSOFÍA Y DEFINICIÓN ==========
      {
        text: "Según el proverbio citado en clase, ¿quién es considerada 'la madre' de la enfermedad?",
        options: ["Las emociones", "Los alimentos", "El clima", "La genética"],
        correct: 1,
      },
      {
        text: "¿Qué sucede con quien toma medicina pero rechaza la dieta según el proverbio chino?",
        options: [
          "Se cura más rápido",
          "Malgasta las habilidades del médico",
          "Necesita más dosis de medicina",
          "Fortalece su energía Wei",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el objetivo principal de conocer la naturaleza térmica de los alimentos?",
        options: [
          "Saber cuántas calorías tienen",
          "Armonizar el Yin-Yang interno según la estación y la constitución",
          "Cocinar más rápido",
          "Aumentar el sabor de las comidas",
        ],
        correct: 1,
      },

      // ========== 2. GENERACIÓN DEL QI Y FISIOLOGÍA DIGESTIVA ==========
      {
        text: "¿Cómo se denomina el proceso de digestión desde el punto de vista de la Medicina China?",
        options: ["Wei Qi", "Xiao Hua", "Zhong Qi", "Zhen Qi"],
        correct: 1,
      },
      {
        text: "¿Qué órganos forman el binomio principal encargado del proceso de transporte y transformación de los alimentos?",
        options: ["Hígado y Vesícula", "Corazón y Pulmón", "Bazo y Estómago", "Riñón y Vejiga"],
        correct: 2,
      },
      {
        text: "¿En qué 'Calentador' se sitúa la función digestiva principal?",
        options: [
          "Calentador Superior",
          "Calentador Medio",
          "Calentador Inferior",
          "En los tres por igual",
        ],
        correct: 1,
      },
      {
        text: "Según el Clásico del Emperador Amarillo (Huang Di Nei Jing), ¿qué es la salud?",
        options: [
          "La ausencia de virus",
          "El equilibrio del Qi",
          "Tener mucha fuerza física",
          "Comer solo vegetales",
        ],
        correct: 1,
      },

      // ========== 3. FUNCIONES DEL QI ==========
      {
        text: "¿Cuál de las siguientes es una función de la regulación del Qi mencionada en el material?",
        options: [
          "Regular la temperatura del cuerpo",
          "Proteger contra agentes patógenos externos",
          "Ayudar en la transformación de alimentos y fluidos en energía",
          "Todas las anteriores son correctas",
        ],
        correct: 3,
      },
      {
        text: "Cuando el Qi está desordenado, ¿qué aparece según la MTC?",
        options: ["El hambre", "La enfermedad", "El sueño", "El calor"],
        correct: 1,
      },

      // ========== 4. NATURALEZA Y SABORES ==========
      {
        text: "En la Dietoterapia China, los alimentos no solo nutren, sino que se consideran una herramienta para:",
        options: [
          "Resolver, prevenir y mantener el equilibrio energético",
          "Suplir la falta de ejercicio",
          "Eliminar el uso de agujas",
          "Cambiar la estructura ósea",
        ],
        correct: 0,
      },
      {
        text: "¿Qué aspecto de los alimentos se usa para contrarrestar los desajustes emocionales?",
        options: [
          "El precio",
          "La naturaleza térmica y el sabor",
          "La cantidad de agua",
          "El color del envase",
        ],
        correct: 1,
      },
      {
        text: "¿Qué sucede con el Qi cuando hay desajustes físicos?",
        options: [
          "Se multiplica",
          "Sufre excesos o deficiencias en ciertos órganos y meridianos",
          "Se detiene por completo",
          "Cambia de color",
        ],
        correct: 1,
      },

      // ========== 5. CONCEPTOS AVANZADOS DEL PROGRAMA ==========
      {
        text: "¿Qué se entiende por 'Nutrición Energética'?",
        options: [
          "Comer alimentos procesados",
          "La dietoterapia basada en los principios de la MTC",
          "Una dieta alta en azúcares",
          "Contar macronutrientes exclusivamente",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la vía por la cual ingresan los líquidos y sólidos al organismo?",
        options: ["La piel", "La vía digestiva (Xiao Hua)", "La respiración", "Los poros"],
        correct: 1,
      },
      {
        text: "¿Qué función cumple el Qi respecto a los agentes patógenos?",
        options: [
          "Los atrae",
          "Protege al cuerpo de su exposición",
          "Los alimenta",
          "No tiene relación",
        ],
        correct: 1,
      },
      {
        text: "El equilibrio entre lo que entra, sale, asciende y desciende en el organismo se realiza a través de:",
        options: [
          "Los huesos",
          "Los meridianos y centros energéticos",
          "El sistema nervioso únicamente",
          "La piel",
        ],
        correct: 1,
      },
      {
        text: "¿Qué elemento es fundamental para la transformación del aire en energía vital?",
        options: ["El Qi", "El descanso", "El frío", "El sedentarismo"],
        correct: 0,
      },

      {
        text: "La frase 'El equilibrio del Qi es salud' pertenece a:",
        options: [
          "Un proverbio japonés",
          "El Clásico del Emperador Amarillo",
          "Un manual de anatomía moderno",
          "Un tratado de farmacología",
        ],
        correct: 1,
      },
      {
        text: "Para la MTC, ¿cuál es el origen de diversas infecciones según el material?",
        options: ["La falta de higiene", "Desarreglos energéticos", "El exceso de sol", "La vejez"],
        correct: 1,
      },
    ],
  },

  //Anatomia - Osea
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

  // Meridiano de Pulmon
  {
    id: "meridiano-pulmon-completo",
    category: "meridianos",
    title: "Pulmón – Nombres, Ubicación y Clínica (Shǒu Tàiyīn)",
    description:
      "Nomenclatura (Pīnyīn y traducción), localización anatómica y funciones clínicas principales de cada punto del meridiano de Pulmón.",
    questions: [
      // ==========================================
      // FASE 1: NOMENCLATURA (10 preguntas)
      // ==========================================
      {
        text: "¿Cuál es el nombre en Pīnyīn y la traducción del punto P1 del meridiano de Pulmón?",
        options: [
          "Yúnmén (Puerta de las Nubes)",
          "Zhōngfǔ (Granero Central / Residencia Central)",
          "Tiānfǔ (Palacio del Cielo)",
          "Chǐzé (Pantano del Codo)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto P2 del meridiano de Pulmón?",
        options: [
          "Zhōngfǔ (Granero Central)",
          "Yúnmén (Puerta de las Nubes)",
          "Xiábái (Blancura del Surco)",
          "Kǒngzuì (Apertura Máxima)",
        ],
        correct: 1,
      },
      {
        text: "El punto P3 se llama Tiānfǔ. ¿Cuál es su traducción correcta según el texto?",
        options: ["Pantano del Codo", "Blancura del Surco", "Palacio del Cielo", "Secuencia Rota"],
        correct: 2,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn del punto conocido como 'Blancura del Surco' (P4)?",
        options: ["Tiānfǔ", "Kǒngzuì", "Xiábái", "Jīngqú"],
        correct: 2,
      },
      {
        text: "El punto P5 se localiza en el pliegue del codo. ¿Cuál es su nombre y traducción?",
        options: [
          "Shàoshāng (Pequeño Comerciante)",
          "Tàiyuān (Abismo Supremo)",
          "Chǐzé (Pantano del Codo)",
          "Yújì (Borde del Pez)",
        ],
        correct: 2,
      },
      {
        text: "¿Qué punto del meridiano de Pulmón se traduce como 'Apertura Máxima'?",
        options: ["P5 (Chǐzé)", "P6 (Kǒngzuì)", "P7 (Lièquē)", "P8 (Jīngqú)"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn del punto P7, traducido como 'Secuencia Rota'?",
        options: ["Jīngqú", "Lièquē", "Tàiyuān", "Yújì"],
        correct: 1,
      },
      {
        text: "El punto P8 se encuentra en la apófisis estiloides del radio. ¿Cuál es su nombre?",
        options: [
          "Lièquē (Secuencia Rota)",
          "Tàiyuān (Abismo Supremo)",
          "Jīngqú (Canal del Río)",
          "Shàoshāng (Pequeño Comerciante)",
        ],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina en Pīnyīn el punto P9, conocido como 'Abismo Supremo'?",
        options: ["Tàiyuān", "Yújì", "Shàoshāng", "Zhōngfǔ"],
        correct: 0,
      },
      {
        text: "El punto P10 se llama Yújì. ¿Cuál es la traducción de este nombre?",
        options: ["Pequeño Comerciante", "Borde del Pez", "Abismo Supremo", "Puerta de las Nubes"],
        correct: 1,
      },

      // ==========================================
      // FASE 2: UBICACIÓN ANATÓMICA SIN DISTANCIAS (11 preguntas)
      // ==========================================
      {
        text: "¿En qué espacio intercostal se localiza P1 (Zhōngfǔ)?",
        options: [
          "En el segundo espacio intercostal",
          "En el primer espacio intercostal",
          "En el tercer espacio intercostal",
          "Directamente sobre la clavícula",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se sitúa P1 (Zhōngfǔ) respecto a P2 (Yúnmén)?",
        options: [
          "Directamente por encima",
          "Directamente por debajo",
          "En el lado lateral del brazo",
          "Sobre la misma línea horizontal",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál de las siguientes describe mejor la ubicación de P2 (Yúnmén)?",
        options: [
          "En el extremo anterior del pliegue axilar",
          "A dos traveses de dedo lateralmente del punto medio de la clavícula, bajo su borde inferior",
          "En el centro del esternón",
          "Sobre la apófisis coracoides",
        ],
        correct: 1,
      },
      {
        text: "¿En qué surco del brazo se localizan P3 (Tiānfǔ) y P4 (Xiábái)?",
        options: [
          "En el surco cubital del bíceps braquial",
          "En el surco radial del músculo bíceps braquial",
          "Entre los tendones del antebrazo",
          "En el canal bicipital interno",
        ],
        correct: 1,
      },
      {
        text: "¿En relación a qué tendón se encuentra P5 (Chǐzé) en el pliegue del codo?",
        options: [
          "En el lado cubital del tendón del bíceps braquial",
          "En el lado radial del tendón del músculo bíceps braquial",
          "En el centro del tendón del tríceps",
          "Entre los tendones del palmar largo y flexor radial",
        ],
        correct: 1,
      },
      {
        text: "¿Sobre qué hueso y en qué borde se palpa P6 (Kǒngzuì)?",
        options: [
          "En el borde posterior del cúbito",
          "En el borde interno del radio",
          "En el borde externo del radio",
          "Sobre la cabeza del peroné",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se sitúa P7 (Lièquē)?",
        options: [
          "En la depresión entre los tendones extensores de la muñeca",
          "En el origen de la apófisis estiloides del radio",
          "En el lado radial del hueso pisiforme",
          "En el centro del pliegue de la muñeca",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la referencia ósea para localizar P8 (Jīngqú)?",
        options: [
          "La cabeza del cúbito",
          "El lado interno de la apófisis estiloides del radio, en la prominencia más alta",
          "El epicóndilo medial del húmero",
          "El hueso trapecio, en el pliegue de la muñeca",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se encuentra P9 (Tàiyuān) en la muñeca?",
        options: [
          "En el pliegue transversal distal, en el lado radial del hueso trapecio",
          "En el lado cubital del pisiforme, en el pliegue proximal",
          "Entre los tendones del palmar largo y el flexor radial del carpo",
          "En el dorso de la mano, en la tabaquera anatómica",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la localización de P10 (Yújì)?",
        options: [
          "En la punta del dedo pulgar",
          "Detrás de la articulación metacarpofalángica, en el borde radial del primer hueso metacarpiano",
          "En el centro de la palma, entre el segundo y tercer metacarpiano",
          "En el pliegue interdigital entre pulgar e índice",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se encuentra el punto P11 (Shàoshāng)?",
        options: [
          "En el centro de la uña del dedo índice",
          "En el lado radial del dedo pulgar, en la parte posterior al ángulo ungueal",
          "En el lado cubital del meñique",
          "En la base del primer metacarpiano, en la eminencia tenar",
        ],
        correct: 1,
      },

      // ==========================================
      // FASE 3: CARACTERÍSTICAS CLÍNICAS (11 preguntas)
      // ==========================================
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

  // Meridiano de Intestino Grueso
  {
    id: "meridiano-ig-completo",
    category: "meridianos",
    title: "Intestino Grueso – Nombres, Ubicación y Clínica (Shǒu Yángmíng)",
    description:
      "Nomenclatura (Pīnyīn y traducción), localización anatómica y acciones clínicas principales de los 20 puntos del meridiano de Intestino Grueso según Yang Jiasan.",
    questions: [
      // ==========================================
      // FASE 1: NOMENCLATURA (20 preguntas)
      // ==========================================
      {
        text: "¿Cuál es el nombre en Pīnyīn y la traducción del punto IG1?",
        options: [
          "Èrjiān (Segunda Interlínea)",
          "Shāngyáng (Comerciante del Yang)",
          "Sānjiān (Tercera Interlínea)",
          "Hégǔ (Unión del Valle)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina en Pīnyīn el punto IG2, situado en la parte anterior de la articulación metacarpofalángica del segundo metacarpiano?",
        options: ["Shāngyáng", "Sānjiān", "Èrjiān (Segunda Interlínea)", "Yángxī"],
        correct: 2,
      },
      {
        text: "El punto IG3 se llama Sānjiān. ¿Cuál es su traducción?",
        options: ["Segunda Interlínea", "Tercera Interlínea", "Unión del Valle", "Arroyo del Yang"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto IG4?",
        options: [
          "Yángxī (Arroyo del Yang)",
          "Qūchí (Estanque Curvo)",
          "Hégǔ (Unión del Valle)",
          "Yíngxiāng (Bienvenida de la Fragancia)",
        ],
        correct: 2,
      },
      {
        text: "El punto IG5 se localiza en la muñeca entre dos tendones. ¿Cómo se llama?",
        options: [
          "Piānlì (Desvío del Pasaje)",
          "Wēnliū (Calor Persistente)",
          "Yángxī (Arroyo del Yang)",
          "Shǒusānlǐ (Tres Millas de la Mano)",
        ],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina el punto IG6, punto de conexión (Luò) con el meridiano de Pulmón?",
        options: [
          "Yángxī",
          "Piānlì (Desvío del Pasaje)",
          "Wēnliū (Calor Persistente)",
          "Xiàlián (Ángulo Inferior)",
        ],
        correct: 1,
      },
      {
        text: "El punto IG7 es conocido como Wēnliū. ¿Cuál es la traducción de este nombre?",
        options: ["Ángulo Superior", "Calor Persistente", "Estanque Curvo", "Hueso del Hombro"],
        correct: 1,
      },
      {
        text: "¿Cómo se llama el punto IG8, ubicado en el lado externo del radio?",
        options: [
          "Shànglián (Ángulo Superior)",
          "Xiàlián (Ángulo Inferior)",
          "Shǒusānlǐ (Tres Millas de la Mano)",
          "Qūchí (Estanque Curvo)",
        ],
        correct: 1,
      },
      {
        text: "El punto IG9, que se encuentra en el lado interno del radio, recibe el nombre de:",
        options: ["Xiàlián", "Shànglián (Ángulo Superior)", "Shǒusānlǐ", "Zhǒuliáo"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn del punto IG10, traducido como 'Tres Millas de la Mano'?",
        options: ["Shànglián", "Qūchí", "Shǒusānlǐ", "Bìnào"],
        correct: 2,
      },
      {
        text: "El punto IG11 se llama Qūchí. ¿Cuál es su traducción?",
        options: ["Estanque Curvo", "Hendidura del Codo", "Músculo del Brazo", "Trípode Celestial"],
        correct: 0,
      },
      {
        text: "¿Cómo se denomina el punto IG12, localizado por encima del epicóndilo externo del húmero?",
        options: ["Shǒuwǔlǐ", "Bìnào", "Zhǒuliáo (Hendidura del Codo)", "Jiānyú"],
        correct: 2,
      },
      {
        text: "El punto IG13 es Shǒuwǔlǐ. ¿Qué significa su traducción?",
        options: [
          "Cinco Millas de la Mano",
          "Tres Millas de la Mano",
          "Músculo del Brazo",
          "Hueso Grande",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre del punto IG14, situado donde el deltoides se une con el húmero?",
        options: ["Jiānyú", "Jùgǔ", "Bìnào (Músculo del Brazo)", "Tiāndǐng"],
        correct: 2,
      },
      {
        text: "El punto IG15, ubicado en la depresión por debajo del acromion, se llama:",
        options: ["Bìnào", "Jiānyú (Hueso del Hombro)", "Fútū del cuello", "Kǒuhéliáo"],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto IG16, en la depresión entre la clavícula y la espina escapular?",
        options: ["Tiāndǐng", "Fútū del cuello", "Jùgǔ (Hueso Grande)", "Yíngxiāng"],
        correct: 2,
      },
      {
        text: "El punto IG17, situado en el músculo esternocleidomastoideo, se llama:",
        options: ["Fútū del cuello", "Tiāndǐng (Trípode Celestial)", "Rényíng", "Tiānchuāng"],
        correct: 1,
      },
      {
        text: "¿Cómo se conoce el punto IG18, que se encuentra en el centro del músculo esternocleidomastoideo a nivel del hioides?",
        options: [
          "Tiāndǐng",
          "Fútū del cuello (Protuberancia que Sobresale)",
          "Kǒuhéliáo",
          "Yíngxiāng",
        ],
        correct: 1,
      },
      {
        text: "El punto IG19, situado bajo el borde interno del ala de la nariz, recibe el nombre de:",
        options: ["Yíngxiāng", "Héliáo (Hendidura de la Armonía)", "Rénzhōng", "Sùliáo"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción del último punto del meridiano (IG20)?",
        options: [
          "Héliáo (Hendidura de la Armonía)",
          "Chéngjiāng (Receptáculo de Saliva)",
          "Yíngxiāng (Bienvenida de la Fragancia)",
          "Quánliáo (Hendidura del Pómulo)",
        ],
        correct: 2,
      },

      // ==========================================
      // FASE 2: UBICACIÓN ANATÓMICA (20 preguntas)
      // ==========================================
      {
        text: "¿Dónde se localiza IG1 (Shāngyáng)?",
        options: [
          "En el lado cubital del meñique",
          "En la raíz del ángulo ungueal, en el lado radial del dedo índice",
          "En la punta del dedo medio",
          "En el pliegue interdigital entre pulgar e índice",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se sitúan IG2 (Èrjiān) e IG3 (Sānjiān) respecto a la articulación metacarpofalángica del segundo metacarpiano?",
        options: [
          "Ambos en la parte posterior",
          "En la parte anterior y posterior respectivamente, en el lado radial",
          "En los lados cubital y radial respectivamente",
          "Uno en la cabeza del metacarpiano y otro en la base",
        ],
        correct: 1,
      },
      {
        text: "¿Entre qué estructuras se encuentra el punto IG4 (Hégǔ)?",
        options: [
          "Entre los tendones del extensor largo y corto del pulgar",
          "Entre el radio y el cúbito",
          "Entre las uniones del primer y segundo metacarpiano y el borde de la membrana interdigital del pulgar e índice",
          "En la depresión entre el olécranon y el epicóndilo",
        ],
        correct: 2,
      },
      {
        text: "¿Con qué posición del brazo se localiza IG5 (Yángxī)?",
        options: [
          "Brazo extendido y palma hacia abajo",
          "Flexionado el brazo, con la palma hacia el pecho",
          "Brazo en rotación externa forzada",
          "Codo apoyado y muñeca en flexión",
        ],
        correct: 1,
      },
      {
        text: "¿En qué depresión concreta se encuentra IG5 (Yángxī)?",
        options: [
          "Entre el tendón del palmar largo y el flexor radial del carpo",
          "Entre los dos tendones de la muñeca: extensor largo y extensor corto del pulgar",
          "En el lado radial del hueso pisiforme",
          "En el dorso, entre el cúbito y el radio",
        ],
        correct: 1,
      },
      {
        text: "IG6 (Piānlì) se sitúa en el lado externo del radio. ¿A qué altura respecto a IG5 (Yángxī)?",
        options: [
          "A 3 cun por arriba de Yángxī",
          "A 1 cun por debajo de Yángxī",
          "Al mismo nivel que Yángxī",
          "En el pliegue del codo",
        ],
        correct: 0,
      },
      {
        text: "¿En qué lado del radio se encuentra IG7 (Wēnliū)?",
        options: [
          "En el lado interno del radio",
          "En el lado externo del radio",
          "En el borde posterior del cúbito",
          "Entre ambos huesos del antebrazo",
        ],
        correct: 1,
      },
      {
        text: "IG8 (Xiàlián) está a 4 cun por debajo de Qūchí. ¿En qué borde óseo se localiza?",
        options: [
          "En el lado interno del radio",
          "En el lado externo del radio",
          "En el borde anterior del cúbito",
          "En la membrana interósea",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se localiza IG10 (Shǒusānlǐ)?",
        options: [
          "A 2 cun por debajo de Qūchí, en el lado interno del radio",
          "A 3 cun por debajo de Qūchí, en el lado externo del radio",
          "En la depresión bajo el acromion",
          "En el extremo del pliegue del codo",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la referencia anatómica exacta para IG11 (Qūchí)?",
        options: [
          "En el olécranon, con el codo recto",
          "Con el codo flexionado, en el pliegue transversal del codo, al lado interno del radio",
          "A 1 cun por encima del epicóndilo medial",
          "En el centro del pliegue de la muñeca",
        ],
        correct: 1,
      },
      {
        text: "IG12 (Zhǒuliáo) se localiza por encima del epicóndilo externo del húmero. ¿En qué borde?",
        options: [
          "En el borde interno",
          "En el borde externo",
          "En el centro",
          "En el surco radial",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se sitúa IG13 (Shǒuwǔlǐ)?",
        options: [
          "A 3 cun por arriba del epicóndilo externo, en el borde interno",
          "A 3 cun por debajo del epicóndilo, en el borde externo",
          "En el centro del músculo bíceps",
          "En el surco cubital",
        ],
        correct: 0,
      },
      {
        text: "IG14 (Bìnào) se localiza en la unión del músculo deltoides con el húmero. ¿En qué extremo?",
        options: [
          "En el extremo superointerno del deltoides",
          "En el punto donde el extremo inferoanterior del músculo deltoides se cruza con el húmero",
          "En la inserción posterior del deltoides en la escápula",
          "En el vientre medio del deltoides",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la ubicación precisa de IG15 (Jiānyú)?",
        options: [
          "En la punta de la clavícula",
          "En el hombro, en la depresión por debajo del acromion",
          "En la fosa supraclavicular",
          "En la espina de la escápula",
        ],
        correct: 1,
      },
      {
        text: "IG16 (Jùgǔ) se encuentra en una depresión entre dos estructuras. ¿Cuáles son?",
        options: [
          "Entre la clavícula y el esternón",
          "Entre el extremo acromial de la clavícula y la espina escapular",
          "Entre el acromion y la cabeza humeral",
          "Entre la apófisis coracoides y el troquíter",
        ],
        correct: 1,
      },
      {
        text: "¿En qué músculo se localiza IG17 (Tiāndǐng)?",
        options: [
          "En el esternocleidomastoideo, donde se reúnen la cabeza esternal y clavicular",
          "En el trapecio, a nivel de C7",
          "En el escaleno anterior",
          "En el masetero",
        ],
        correct: 0,
      },
      {
        text: "IG18 (Fútū del cuello) se sitúa en el centro del esternocleidomastoideo. ¿A qué nivel?",
        options: [
          "A nivel del cartílago tiroides",
          "A nivel del hueso hioides",
          "A nivel del ángulo de la mandíbula",
          "A nivel de la clavícula",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se encuentra IG19 (Héliáo)?",
        options: [
          "En el surco nasolabial",
          "A 0,5 cun lateralmente a Rénzhōng, por debajo del borde interno de las alas de la nariz",
          "En la comisura de los labios",
          "Directamente bajo la pupila",
        ],
        correct: 1,
      },
      {
        text: "IG20 (Yíngxiāng) se localiza en el surco nasolabial. ¿A qué altura exacta?",
        options: [
          "A nivel del borde inferior del ala de la nariz",
          "A nivel del punto medio del borde externo de las alas de la nariz",
          "A nivel del ángulo de la boca",
          "En la raíz del ala nasal",
        ],
        correct: 1,
      },
      {
        text: "¿En qué zona general del cuerpo se agrupan la mayoría de los puntos del canal de Intestino Grueso?",
        options: [
          "En el dorso del pie y la pierna",
          "En el miembro superior (mano, antebrazo, brazo y hombro)",
          "En la región lumbar y sacra",
          "En el cuero cabelludo exclusivamente",
        ],
        correct: 1,
      },

      // ==========================================
      // FASE 3: CARACTERÍSTICAS CLÍNICAS (20 preguntas)
      // ==========================================
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

  // Meridiano de Estomago
  {
    id: "meridiano-e-completo",
    category: "meridianos",
    title: "Estómago – Nombres, Ubicación y Clínica (Zú Yángmíng)",
    description:
      "Nomenclatura (Pīnyīn y traducción), localización anatómica y acciones clínicas principales de los 45 puntos del meridiano de Estómago según la tradición.",
    questions: [
      // ==========================================
      // FASE 1: NOMENCLATURA (45 preguntas)
      // ==========================================
      {
        text: "¿Cuál es el nombre en Pīnyīn y la traducción del punto E1?",
        options: [
          "Chéngqì (Receptáculo de las Lágrimas)",
          "Sìbái (Cuatro Blancos)",
          "Jùliáo (Gran Hendidura)",
          "Dìcāng (Granero de la Tierra)",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se denomina el punto E2, situado en el foramen infraorbitario?",
        options: [
          "Chéngqì",
          "Sìbái (Cuatro Blancos)",
          "Dàyíng (Gran Acogida)",
          "Jiāchē (Carro de la Mandíbula)",
        ],
        correct: 1,
      },
      {
        text: "El punto E3 se llama Jùliáo. ¿Cuál es su traducción?",
        options: [
          "Receptáculo de las Lágrimas",
          "Cuatro Blancos",
          "Gran Hendidura",
          "Puerta Inferior",
        ],
        correct: 2,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto E4?",
        options: [
          "Dìcāng (Granero de la Tierra)",
          "Dàyíng (Gran Acogida)",
          "Jiāchē (Carro de la Mandíbula)",
          "Xiàguān (Puerta Inferior)",
        ],
        correct: 0,
      },
      {
        text: "El punto E5, en el ángulo de la mandíbula, se conoce como:",
        options: ["Dìcāng", "Dàyíng (Gran Acogida)", "Jiāchē", "Tóuwéi (Sujeción de la Cabeza)"],
        correct: 1,
      },
      {
        text: "¿Cómo se llama el punto E6, situado en el músculo masetero?",
        options: [
          "Xiàguān (Puerta Inferior)",
          "Jiāchē (Carro de la Mandíbula)",
          "Rényíng (Acogida del Hombre)",
          "Shuǐtū (Prominencia del Agua)",
        ],
        correct: 1,
      },
      {
        text: "El punto E7, debajo del arco cigomático, se denomina:",
        options: [
          "Xiàguān (Puerta Inferior)",
          "Tóuwéi (Sujeción de la Cabeza)",
          "Rényíng",
          "Qìshè (Alojamiento del Qi)",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn y traducción del punto E8?",
        options: [
          "Tóuwéi (Sujeción de la Cabeza)",
          "Rényíng (Acogida del Hombre)",
          "Shuǐtū (Prominencia del Agua)",
          "Qìshè (Alojamiento del Qi)",
        ],
        correct: 0,
      },
      {
        text: "El punto E9, en el cuello a nivel del cartílago tiroides, se llama:",
        options: [
          "Rényíng (Acogida del Hombre)",
          "Shuǐtū (Prominencia del Agua)",
          "Qìshè (Alojamiento del Qi)",
          "Quēpén (Cuenca Vacía)",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se denomina el punto E10, situado en el borde anterior del ECM a nivel del hioides?",
        options: [
          "Rényíng",
          "Shuǐtū (Prominencia del Agua)",
          "Qìshè",
          "Kùfáng (Almacén del Pecho)",
        ],
        correct: 1,
      },
      {
        text: "El punto E11 se llama Qìshè. ¿Cuál es su traducción?",
        options: ["Alojamiento del Qi", "Cuenca Vacía", "Puerta del Qi", "Almacén del Pecho"],
        correct: 0,
      },
      {
        text: "¿Cómo se llama el punto E12, en la fosa supraclavicular?",
        options: ["Qìshè", "Quēpén (Cuenca Vacía)", "Qìhù (Puerta del Qi)", "Kùfáng"],
        correct: 1,
      },
      {
        text: "El punto E13, debajo de la clavícula, recibe el nombre de:",
        options: [
          "Qìhù (Puerta del Qi)",
          "Kùfáng (Almacén del Pecho)",
          "Wūyì (Cubierta de la Casa)",
          "Yīngchuāng (Ventana del Pecho)",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn y traducción de E14?",
        options: [
          "Kùfáng (Almacén del Pecho)",
          "Wūyì (Cubierta de la Casa)",
          "Yīngchuāng (Ventana del Pecho)",
          "Rǔzhōng (Centro del Pecho)",
        ],
        correct: 0,
      },
      {
        text: "El punto E15 se llama Wūyì. ¿Qué significa?",
        options: [
          "Almacén del Pecho",
          "Cubierta de la Casa",
          "Ventana del Pecho",
          "Centro del Pecho",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto E16, en el cuarto espacio intercostal?",
        options: [
          "Wūyì",
          "Yīngchuāng (Ventana del Pecho)",
          "Rǔzhōng (Centro del Pecho)",
          "Rǔgēn (Raíz del Pecho)",
        ],
        correct: 1,
      },
      {
        text: "El punto E17, situado en el pezón, se llama:",
        options: [
          "Rǔzhōng (Centro del Pecho)",
          "Rǔgēn (Raíz del Pecho)",
          "Bùróng (No Lleno)",
          "Chéngmǎn (Lleno Pleno)",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto E18?",
        options: [
          "Rǔgēn (Raíz del Pecho)",
          "Bùróng (No Lleno)",
          "Chéngmǎn (Lleno Pleno)",
          "Liángmén (Puerta del Granero)",
        ],
        correct: 0,
      },
      {
        text: "El punto E19 se llama Bùróng. ¿Qué significa?",
        options: ["No Lleno", "Lleno Pleno", "Puerta del Granero", "Puerta de Paso"],
        correct: 0,
      },
      {
        text: "¿Cómo se denomina el punto E20, a 5 cun sobre el ombligo?",
        options: ["Bùróng", "Chéngmǎn (Lleno Pleno)", "Liángmén", "Guānmén (Puerta de Paso)"],
        correct: 1,
      },
      {
        text: "El punto E21 se llama Liángmén. ¿Cuál es su traducción?",
        options: [
          "Puerta del Granero",
          "Puerta de Paso",
          "Supremo Uno",
          "Puerta de la Carne Grasa",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se llama el punto E22, a 3 cun sobre el ombligo?",
        options: [
          "Liángmén",
          "Guānmén (Puerta de Paso)",
          "Tàiyǐ (Supremo Uno)",
          "Huáròumén (Puerta de la Carne Grasa)",
        ],
        correct: 1,
      },
      {
        text: "El punto E23, a 2 cun sobre el ombligo, se denomina:",
        options: ["Guānmén", "Tàiyǐ (Supremo Uno)", "Huáròumén", "Tiānshū (Pivote Celestial)"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn y traducción de E24?",
        options: [
          "Tàiyǐ (Supremo Uno)",
          "Huáròumén (Puerta de la Carne Grasa)",
          "Tiānshū (Pivote Celestial)",
          "Wàilíng (Montículo Externo)",
        ],
        correct: 1,
      },
      {
        text: "El punto E25, a 2 cun lateral del ombligo, se llama:",
        options: [
          "Tiānshū (Pivote Celestial)",
          "Wàilíng (Montículo Externo)",
          "Dàjù (Gran Gigante)",
          "Shuǐdào (Vía del Agua)",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se denomina el punto E26, a 1 cun bajo el ombligo?",
        options: [
          "Tiānshū",
          "Wàilíng (Montículo Externo)",
          "Dàjù (Gran Gigante)",
          "Guīlái (Retorno)",
        ],
        correct: 1,
      },
      {
        text: "El punto E27, a 2 cun bajo el ombligo, se llama:",
        options: ["Wàilíng", "Dàjù (Gran Gigante)", "Shuǐdào (Vía del Agua)", "Guīlái (Retorno)"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción de E28?",
        options: [
          "Dàjù (Gran Gigante)",
          "Shuǐdào (Vía del Agua)",
          "Guīlái (Retorno)",
          "Qìchōng (Afluente del Qi)",
        ],
        correct: 1,
      },
      {
        text: "El punto E29 se llama Guīlái. ¿Qué significa?",
        options: ["Vía del Agua", "Retorno", "Afluente del Qi", "Rodilla de la Barrera"],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto E30, en el pliegue inguinal?",
        options: [
          "Guīlái",
          "Qìchōng (Afluente del Qi)",
          "Bìguān (Rodilla de la Barrera)",
          "Fútù (Protuberancia Aplastada)",
        ],
        correct: 1,
      },
      {
        text: "El punto E31, en el muslo anterior, se llama:",
        options: [
          "Bìguān (Rodilla de la Barrera)",
          "Fútù (Protuberancia Aplastada)",
          "Yīnshì (Ciudad del Yin)",
          "Liángqiū (Colina del Granero)",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn y traducción de E32?",
        options: [
          "Bìguān (Rodilla de la Barrera)",
          "Fútù (Protuberancia Aplastada)",
          "Yīnshì (Ciudad del Yin)",
          "Liángqiū (Colina del Granero)",
        ],
        correct: 1,
      },
      {
        text: "El punto E33, a 3 cun sobre la rótula, se denomina:",
        options: [
          "Fútù",
          "Yīnshì (Ciudad del Yin)",
          "Liángqiū (Colina del Granero)",
          "Dúbí (Nariz de Buey)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se llama el punto E34, a 2 cun sobre la rótula?",
        options: [
          "Yīnshì",
          "Liángqiū (Colina del Granero)",
          "Dúbí (Nariz de Buey)",
          "Zúsānlǐ (Tres Millas del Pie)",
        ],
        correct: 1,
      },
      {
        text: "El punto E35 se llama Dúbí. ¿Cuál es su traducción?",
        options: [
          "Colina del Granero",
          "Nariz de Buey",
          "Tres Millas del Pie",
          "Gran Vacío Superior",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto E36, a 3 cun bajo la rótula?",
        options: [
          "Dúbí",
          "Zúsānlǐ (Tres Millas del Pie)",
          "Shàngjùxū (Gran Vacío Superior)",
          "Tiáokǒu (Boca Abierta)",
        ],
        correct: 1,
      },
      {
        text: "El punto E37, a 6 cun bajo la rótula, se llama:",
        options: [
          "Zúsānlǐ",
          "Shàngjùxū (Gran Vacío Superior)",
          "Tiáokǒu (Boca Abierta)",
          "Xiàjùxū (Gran Vacío Inferior)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción de E38?",
        options: [
          "Shàngjùxū (Gran Vacío Superior)",
          "Tiáokǒu (Boca Abierta)",
          "Xiàjùxū (Gran Vacío Inferior)",
          "Fēnglóng (Cumbre del Viento)",
        ],
        correct: 1,
      },
      {
        text: "El punto E39, a 9 cun bajo la rótula, se denomina:",
        options: [
          "Tiáokǒu",
          "Xiàjùxū (Gran Vacío Inferior)",
          "Fēnglóng (Cumbre del Viento)",
          "Jiěxī (Arroyo Separado)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se llama el punto E40, punto de conexión (Luò) del meridiano?",
        options: [
          "Xiàjùxū",
          "Fēnglóng (Cumbre del Viento)",
          "Jiěxī (Arroyo Separado)",
          "Chōngyáng (Afluente del Yang)",
        ],
        correct: 1,
      },
      {
        text: "El punto E41, en el dorso del pie, se llama:",
        options: [
          "Fēnglóng",
          "Jiěxī (Arroyo Separado)",
          "Chōngyáng (Afluente del Yang)",
          "Xiàngǔ (Valle del Límite)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn y traducción de E42?",
        options: [
          "Jiěxī (Arroyo Separado)",
          "Chōngyáng (Afluente del Yang)",
          "Xiàngǔ (Valle del Límite)",
          "Nèitíng (Palacio Interior)",
        ],
        correct: 1,
      },
      {
        text: "El punto E43 se llama Xiàngǔ. ¿Qué significa?",
        options: ["Afluente del Yang", "Valle del Límite", "Palacio Interior", "Agudo Riguroso"],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto E44, en el dorso del pie entre el 2º y 3º dedo?",
        options: ["Xiàngǔ", "Nèitíng (Palacio Interior)", "Lìduì (Agudo Riguroso)", "Jiěxī"],
        correct: 1,
      },
      {
        text: "El punto E45, el último del meridiano, se llama:",
        options: ["Nèitíng", "Lìduì (Agudo Riguroso)", "Chōngyáng", "Fēnglóng"],
        correct: 1,
      },

      // ==========================================
      // FASE 2: UBICACIÓN ANATÓMICA (45 preguntas)
      // ==========================================
      {
        text: "¿Dónde se localiza E1 (Chéngqì)?",
        options: [
          "En el foramen infraorbitario",
          "Directamente debajo de la pupila, en la órbita inferior",
          "En la comisura de los labios",
          "En el ángulo de la mandíbula",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es la referencia ósea de E2 (Sìbái)?",
        options: [
          "En el borde inferior de la órbita, en el foramen infraorbitario",
          "En la sien, en la esquina anterior del cabello",
          "En el arco cigomático",
          "En la fosa supraclavicular",
        ],
        correct: 0,
      },
      {
        text: "E3 (Jùliáo) se sitúa:",
        options: [
          "A 0,5 cun lateral a la comisura de los labios",
          "A 0,5 cun lateral al borde de la nariz, a nivel del ala nasal",
          "En el surco nasolabial",
          "En la depresión infraorbitaria",
        ],
        correct: 1,
      },
      {
        text: "¿Dónde se encuentra E4 (Dìcāng)?",
        options: [
          "En el ángulo de la mandíbula",
          "En la comisura de los labios, lateral a 0,4 cun",
          "En el centro del surco nasolabial",
          "Debajo del pómulo",
        ],
        correct: 1,
      },
      {
        text: "E5 (Dàyíng) se localiza:",
        options: [
          "En el ángulo de la mandíbula, anterior al masetero",
          "En el borde inferior del arco cigomático",
          "En la fosa supraclavicular",
          "En el borde anterior del ECM",
        ],
        correct: 0,
      },
      {
        text: "E6 (Jiāchē) se sitúa en el ángulo de la mandíbula, exactamente:",
        options: [
          "En la inserción del músculo masetero, 1 cun por delante del ángulo",
          "En la depresión entre el masetero y el hueso",
          "En el borde posterior del masetero",
          "En el centro del músculo temporal",
        ],
        correct: 0,
      },
      {
        text: "E7 (Xiàguān) se localiza:",
        options: [
          "En la depresión debajo del arco cigomático, anterior al cóndilo de la mandíbula",
          "En la sien, en la esquina anterior del cabello",
          "En la fosa infraorbitaria",
          "En el borde superior del maxilar",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la ubicación de E8 (Tóuwéi)?",
        options: [
          "En la sien, en la esquina anterior de la línea del cabello, 1,5 cun por encima de la ceja",
          "En el vértice de la cabeza",
          "En la región occipital",
          "En el borde superior del arco cigomático",
        ],
        correct: 0,
      },
      {
        text: "E9 (Rényíng) se encuentra:",
        options: [
          "A nivel del cartílago tiroides, en el borde anterior del ECM",
          "A nivel del hioides, en el borde anterior del ECM",
          "En la fosa supraclavicular",
          "En el borde posterior del ECM",
        ],
        correct: 0,
      },
      {
        text: "E10 (Shuǐtū) se sitúa:",
        options: [
          "A nivel del cartílago tiroides, en el borde anterior del ECM",
          "A nivel del hioides, en el borde anterior del ECM",
          "En la fosa supraclavicular",
          "En la depresión entre los extremos esternales de la clavícula",
        ],
        correct: 1,
      },
      {
        text: "E11 (Qìshè) se localiza:",
        options: [
          "En el borde superior de la clavícula, en la fosa supraclavicular",
          "En el borde inferior de la clavícula, en el 1er espacio intercostal",
          "En la fosa supraesternal",
          "En el borde anterior del trapecio",
        ],
        correct: 0,
      },
      {
        text: "E12 (Quēpén) se encuentra:",
        options: [
          "En la fosa supraclavicular, entre los extremos esternales de la clavícula y el esternón",
          "En la fosa infraclavicular",
          "En el 2do espacio intercostal",
          "En la región axilar",
        ],
        correct: 0,
      },
      {
        text: "E13 (Qìhù) está:",
        options: [
          "Debajo de la clavícula, en el 1er espacio intercostal, a 4 cun del esternón",
          "En el 2do espacio intercostal, a 4 cun del esternón",
          "En el 3er espacio intercostal, a 4 cun del esternón",
          "En el 4to espacio intercostal, a 4 cun del esternón",
        ],
        correct: 0,
      },
      {
        text: "E14 (Kùfáng) se sitúa:",
        options: [
          "En el 1er espacio intercostal, a 4 cun del esternón",
          "En el 2do espacio intercostal, a 4 cun del esternón",
          "En el 3er espacio intercostal, a 4 cun del esternón",
          "En el 4to espacio intercostal, a 4 cun del esternón",
        ],
        correct: 1,
      },
      {
        text: "E15 (Wūyì) se localiza en el:",
        options: [
          "3er espacio intercostal, a 4 cun del esternón",
          "4to espacio intercostal, a 4 cun del esternón",
          "5to espacio intercostal, a 4 cun del esternón",
          "2do espacio intercostal, a 4 cun del esternón",
        ],
        correct: 0,
      },
      {
        text: "E16 (Yīngchuāng) está en el:",
        options: [
          "3er espacio intercostal, a 4 cun del esternón",
          "4to espacio intercostal, a 4 cun del esternón",
          "5to espacio intercostal, a 4 cun del esternón",
          "6to espacio intercostal, a 4 cun del esternón",
        ],
        correct: 1,
      },
      {
        text: "E17 (Rǔzhōng) se localiza:",
        options: [
          "En el pezón, en el 4to espacio intercostal",
          "Debajo del pezón, en el 5to espacio intercostal",
          "En el 3er espacio intercostal",
          "En el 5to espacio intercostal, a 6 cun del esternón",
        ],
        correct: 0,
      },
      {
        text: "E18 (Rǔgēn) se encuentra:",
        options: [
          "En el pezón",
          "Debajo del pezón, en el 5to espacio intercostal",
          "En el 6to espacio intercostal",
          "En el 4to espacio intercostal, a 6 cun del esternón",
        ],
        correct: 1,
      },
      {
        text: "E19 (Bùróng) se localiza en el abdomen, a:",
        options: [
          "6 cun sobre el ombligo y 2 cun lateral",
          "5 cun sobre el ombligo y 2 cun lateral",
          "4 cun sobre el ombligo y 2 cun lateral",
          "3 cun sobre el ombligo y 2 cun lateral",
        ],
        correct: 0,
      },
      {
        text: "E20 (Chéngmǎn) se sitúa a:",
        options: [
          "6 cun sobre el ombligo y 2 cun lateral",
          "5 cun sobre el ombligo y 2 cun lateral",
          "4 cun sobre el ombligo y 2 cun lateral",
          "3 cun sobre el ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E21 (Liángmén) se localiza a:",
        options: [
          "5 cun sobre el ombligo y 2 cun lateral",
          "4 cun sobre el ombligo y 2 cun lateral",
          "3 cun sobre el ombligo y 2 cun lateral",
          "2 cun sobre el ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E22 (Guānmén) está a:",
        options: [
          "4 cun sobre el ombligo y 2 cun lateral",
          "3 cun sobre el ombligo y 2 cun lateral",
          "2 cun sobre el ombligo y 2 cun lateral",
          "1 cun sobre el ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E23 (Tàiyǐ) se sitúa a:",
        options: [
          "3 cun sobre el ombligo y 2 cun lateral",
          "2 cun sobre el ombligo y 2 cun lateral",
          "1 cun sobre el ombligo y 2 cun lateral",
          "al nivel del ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E24 (Huáròumén) se localiza a:",
        options: [
          "2 cun sobre el ombligo y 2 cun lateral",
          "1 cun sobre el ombligo y 2 cun lateral",
          "al nivel del ombligo y 2 cun lateral",
          "1 cun bajo el ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E25 (Tiānshū) está:",
        options: [
          "A 2 cun lateral al ombligo",
          "A 1 cun lateral al ombligo",
          "A 3 cun lateral al ombligo",
          "En la línea media del ombligo",
        ],
        correct: 0,
      },
      {
        text: "E26 (Wàilíng) se sitúa:",
        options: [
          "A 1 cun bajo el ombligo y 2 cun lateral",
          "A 2 cun bajo el ombligo y 2 cun lateral",
          "A 3 cun bajo el ombligo y 2 cun lateral",
          "A 4 cun bajo el ombligo y 2 cun lateral",
        ],
        correct: 0,
      },
      {
        text: "E27 (Dàjù) está a:",
        options: [
          "1 cun bajo el ombligo y 2 cun lateral",
          "2 cun bajo el ombligo y 2 cun lateral",
          "3 cun bajo el ombligo y 2 cun lateral",
          "4 cun bajo el ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E28 (Shuǐdào) se localiza a:",
        options: [
          "2 cun bajo el ombligo y 2 cun lateral",
          "3 cun bajo el ombligo y 2 cun lateral",
          "4 cun bajo el ombligo y 2 cun lateral",
          "5 cun bajo el ombligo y 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E29 (Guīlái) está a:",
        options: [
          "3 cun bajo el ombligo y 2 cun lateral",
          "4 cun bajo el ombligo y 2 cun lateral",
          "5 cun bajo el ombligo y 2 cun lateral",
          "en el pliegue inguinal",
        ],
        correct: 1,
      },
      {
        text: "E30 (Qìchōng) se localiza:",
        options: [
          "A 4 cun bajo el ombligo y 2 cun lateral",
          "A 5 cun bajo el ombligo y 2 cun lateral, en el pliegue inguinal",
          "A 1 cun bajo el pliegue inguinal",
          "En el muslo anterior",
        ],
        correct: 1,
      },
      {
        text: "E31 (Bìguān) se sitúa:",
        options: [
          "En la ingle, 1 cun por debajo del pliegue inguinal",
          "En el muslo anterior, 6 cun sobre la rótula",
          "En el muslo anterior, 3 cun sobre la rótula",
          "En el muslo anterior, 2 cun sobre la rótula",
        ],
        correct: 0,
      },
      {
        text: "E32 (Fútù) se localiza en el muslo anterior, a:",
        options: [
          "3 cun sobre la rótula",
          "6 cun sobre la rótula",
          "2 cun sobre la rótula",
          "1 cun sobre la rótula",
        ],
        correct: 1,
      },
      {
        text: "E33 (Yīnshì) está a:",
        options: [
          "6 cun sobre la rótula",
          "3 cun sobre la rótula",
          "2 cun sobre la rótula",
          "1 cun sobre la rótula",
        ],
        correct: 1,
      },
      {
        text: "E34 (Liángqiū) se sitúa a:",
        options: [
          "3 cun sobre la rótula",
          "2 cun sobre la rótula",
          "1 cun sobre la rótula",
          "en la depresión lateral inferior de la rótula",
        ],
        correct: 1,
      },
      {
        text: "E35 (Dúbí) se localiza:",
        options: [
          "En la depresión lateral inferior de la rótula",
          "En la depresión medial inferior de la rótula",
          "En la depresión superolateral de la rótula",
          "En el centro de la rótula",
        ],
        correct: 0,
      },
      {
        text: "E36 (Zúsānlǐ) está:",
        options: [
          "A 3 cun bajo la rótula, 1 cun lateral a la cresta tibial",
          "A 6 cun bajo la rótula, 1 cun lateral",
          "A 8 cun bajo la rótula, 1 cun lateral",
          "A 9 cun bajo la rótula, 1 cun lateral",
        ],
        correct: 0,
      },
      {
        text: "E37 (Shàngjùxū) se sitúa:",
        options: [
          "A 3 cun bajo la rótula, 1 cun lateral",
          "A 6 cun bajo la rótula, 1 cun lateral",
          "A 8 cun bajo la rótula, 1 cun lateral",
          "A 9 cun bajo la rótula, 1 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E38 (Tiáokǒu) está a:",
        options: [
          "A 6 cun bajo la rótula, 1 cun lateral",
          "A 8 cun bajo la rótula, 1 cun lateral",
          "A 9 cun bajo la rótula, 1 cun lateral",
          "A 3 cun bajo la rótula, 1 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E39 (Xiàjùxū) se sitúa:",
        options: [
          "A 6 cun bajo la rótula, 1 cun lateral",
          "A 8 cun bajo la rótula, 1 cun lateral",
          "A 9 cun bajo la rótula, 1 cun lateral",
          "A 3 cun bajo la rótula, 1 cun lateral",
        ],
        correct: 2,
      },
      {
        text: "E40 (Fēnglóng) se localiza:",
        options: [
          "A 8 cun bajo la rótula, 1 cun lateral",
          "A 8 cun bajo la rótula, 2 cun lateral",
          "A 9 cun bajo la rótula, 1 cun lateral",
          "A 9 cun bajo la rótula, 2 cun lateral",
        ],
        correct: 1,
      },
      {
        text: "E41 (Jiěxī) se sitúa en el dorso del pie:",
        options: [
          "En la depresión entre los tendones del extensor largo del dedo gordo y extensor largo de los dedos, a nivel del tobillo",
          "En la depresión entre el 2º y 3º metatarsiano",
          "En la base del 2º dedo",
          "En la punta del 2º dedo",
        ],
        correct: 0,
      },
      {
        text: "E42 (Chōngyáng) se localiza:",
        options: [
          "En la depresión entre los tendones, sobre la arteria pedia",
          "En la articulación entre el 2º y 3º metatarsiano",
          "En la base del 2º y 3º dedo",
          "En la punta del 2º dedo",
        ],
        correct: 0,
      },
      {
        text: "E43 (Xiàngǔ) se encuentra:",
        options: [
          "En la depresión entre el 2º y 3º metatarsiano",
          "En la base del 2º y 3º dedo",
          "En la punta del 2º dedo",
          "En la depresión del tobillo",
        ],
        correct: 0,
      },
      {
        text: "E44 (Nèitíng) se sitúa:",
        options: [
          "En la depresión entre el 2º y 3º metatarsiano",
          "En la base del 2º y 3º dedo, proximal a los dedos",
          "En la punta del 2º dedo",
          "En el dorso del pie, a nivel del tobillo",
        ],
        correct: 1,
      },
      {
        text: "E45 (Lìduì) se localiza:",
        options: [
          "En la base del 2º dedo",
          "En la punta del 2º dedo, lado lateral de la uña",
          "En la punta del 1er dedo",
          "En la punta del 3er dedo",
        ],
        correct: 1,
      },

      // ==========================================
      // FASE 3: CARACTERÍSTICAS CLÍNICAS (45 preguntas)
      // ==========================================
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

  // Meridiano de Bazo/Pancreas
  {
    id: "meridiano-bp-completo",
    category: "meridianos",
    title: "Bazo / Páncreas – Nombres, Ubicación y Clínica (Zú Tài Yīn)",
    description:
      "Nomenclatura (Pīnyīn y traducción), localización anatómica y acciones clínicas principales de los 21 puntos del meridiano de Bazo según la tradición.",
    questions: [
      // ==========================================
      // FASE 1: NOMENCLATURA (21 preguntas)
      // ==========================================
      {
        text: "¿Cuál es el nombre en Pīnyīn y la traducción del punto BP1?",
        options: [
          "Dàdū (Gran Capital)",
          "Tàibái (Gran Blanco)",
          "Yǐnbái (Blanco Oculto)",
          "Gōngsūn (Abuelo Nieto)",
        ],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina el punto BP2, situado proximal a la cabeza del primer metatarsiano?",
        options: [
          "Yǐnbái",
          "Dàdū (Gran Capital)",
          "Tàibái (Gran Blanco)",
          "Shāngqiū (Colina del Comercio)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP3 se llama Tàibái. ¿Cuál es su traducción?",
        options: ["Blanco Oculto", "Gran Capital", "Gran Blanco", "Abuelo Nieto"],
        correct: 2,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto BP4?",
        options: [
          "Gōngsūn (Abuelo Nieto)",
          "Shāngqiū (Colina del Comercio)",
          "Sānyīnjiāo (Intersección de los Tres Yin)",
          "Lòugǔ (Valle con Fugas)",
        ],
        correct: 0,
      },
      {
        text: "El punto BP5, en la depresión anteroinferior del maléolo medial, se llama:",
        options: [
          "Gōngsūn",
          "Shāngqiū (Colina del Comercio)",
          "Sānyīnjiāo (Intersección de los Tres Yin)",
          "Dìjī (Mecanismo de la Tierra)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto BP6, punto de confluencia de los tres meridianos Yin de la pierna?",
        options: [
          "Shāngqiū",
          "Sānyīnjiāo (Intersección de los Tres Yin)",
          "Lòugǔ (Valle con Fugas)",
          "Yīnlíngquán (Manantial del Montículo Yin)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP7 se llama Lòugǔ. ¿Cuál es la traducción de este nombre?",
        options: [
          "Valle con Fugas",
          "Mecanismo de la Tierra",
          "Manantial del Montículo Yin",
          "Mar de Sangre",
        ],
        correct: 0,
      },
      {
        text: "¿Cómo se llama el punto BP8, situado 3 cun por encima del maléolo medial?",
        options: [
          "Lòugǔ",
          "Dìjī (Mecanismo de la Tierra)",
          "Yīnlíngquán",
          "Xuèhǎi (Mar de Sangre)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP9, que se encuentra en la depresión inferomedial de la rótula, recibe el nombre de:",
        options: [
          "Dìjī",
          "Yīnlíngquán (Manantial del Montículo Yin)",
          "Xuèhǎi (Mar de Sangre)",
          "Jīmén (Puerta del Cedazo)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn del punto BP10, traducido como 'Mar de Sangre'?",
        options: ["Yīnlíngquán", "Xuèhǎi", "Jīmén", "Chōngmén (Puerta de la Irrupción)"],
        correct: 1,
      },
      {
        text: "El punto BP11 se llama Jīmén. ¿Cuál es su traducción?",
        options: [
          "Mar de Sangre",
          "Puerta del Cedazo",
          "Puerta de la Irrupción",
          "Residencia de la Mansión",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto BP12, situado en el pliegue inguinal?",
        options: [
          "Jīmén",
          "Chōngmén (Puerta de la Irrupción)",
          "Fǔshè (Residencia de la Mansión)",
          "Fùjié (Nudo del Abdomen)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP13 es Fǔshè. ¿Qué significa su traducción?",
        options: [
          "Puerta de la Irrupción",
          "Residencia de la Mansión",
          "Nudo del Abdomen",
          "Gran Horizontal",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre del punto BP14, ubicado a 1,3 cun por debajo del ombligo y 4 cun lateral?",
        options: [
          "Fǔshè",
          "Fùjié (Nudo del Abdomen)",
          "Dàhéng (Gran Horizontal)",
          "Fù'āi (Tristeza del Abdomen)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP15, en la línea mamaria a nivel del ombligo, se llama:",
        options: [
          "Fùjié",
          "Dàhéng (Gran Horizontal)",
          "Fù'āi (Tristeza del Abdomen)",
          "Shídòu (Orificio del Alimento)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto BP16, situado 3 cun por encima del ombligo y 4 cun lateral?",
        options: [
          "Dàhéng",
          "Fù'āi (Tristeza del Abdomen)",
          "Shídòu (Orificio del Alimento)",
          "Tiānxī (Arroyo Celestial)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP17, en el 5º espacio intercostal, recibe el nombre de:",
        options: [
          "Fù'āi",
          "Shídòu (Orificio del Alimento)",
          "Xiōngxiāng (Fragancia del Pecho)",
          "Dàbāo (Gran Envoltura)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se conoce el punto BP18, en el 4º espacio intercostal?",
        options: [
          "Shídòu",
          "Tiānxī (Arroyo Celestial)",
          "Xiōngxiāng (Fragancia del Pecho)",
          "Zhōuróng (Circunferencia de la Gloria)",
        ],
        correct: 1,
      },
      {
        text: "El punto BP19, situado en el 3º espacio intercostal, se llama:",
        options: [
          "Tiānxī",
          "Xiōngxiāng (Fragancia del Pecho)",
          "Zhōuróng (Circunferencia de la Gloria)",
          "Dàbāo (Gran Envoltura)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto BP20, en el 2º espacio intercostal?",
        options: [
          "Xiōngxiāng",
          "Zhōuróng (Circunferencia de la Gloria)",
          "Dàbāo (Gran Envoltura)",
          "Tiānxī",
        ],
        correct: 1,
      },
      {
        text: "El punto BP21, el último del meridiano, se conoce como:",
        options: ["Zhōuróng", "Dàbāo (Gran Envoltura)", "Xiōngxiāng", "Shídòu"],
        correct: 1,
      },

      // ==========================================
      // FASE 2: UBICACIÓN ANATÓMICA (21 preguntas)
      // ==========================================
      {
        text: "¿Dónde se localiza BP1 (Yǐnbái)?",
        options: [
          "En el borde medial de la uña del primer dedo del pie",
          "En el borde lateral de la uña del primer dedo del pie",
          "En la punta del segundo dedo del pie",
          "En el borde medial de la uña del segundo dedo",
        ],
        correct: 0,
      },
      {
        text: "BP2 (Dàdū) se sitúa en el borde medial del pie. ¿En qué parte del primer metatarsiano?",
        options: [
          "En la base de la cabeza del primer metatarsiano, en la articulación",
          "En la base del primer metatarsiano, proximal",
          "En el centro del metatarsiano",
          "En la articulación metatarsofalángica del segundo dedo",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la referencia ósea exacta para BP3 (Tàibái)?",
        options: [
          "En la base del primer metatarsiano, en la depresión posterior a la cabeza",
          "En la depresión anteroinferior del maléolo medial",
          "En la punta del maléolo lateral",
          "En la articulación del tobillo",
        ],
        correct: 0,
      },
      {
        text: "BP4 (Gōngsūn) se localiza en el borde medial del pie. ¿Entre qué estructuras?",
        options: [
          "En el borde inferior de la base del primer metatarsiano",
          "En la depresión anterior a la articulación del tobillo",
          "En la unión del hueso navicular con la base del primer metatarsiano",
          "En el tendón de Aquiles",
        ],
        correct: 2,
      },
      {
        text: "BP5 (Shāngqiū) se sitúa en la depresión:",
        options: [
          "Anteroinferior al maléolo medial",
          "Posteroinferior al maléolo medial",
          "Anterosuperior al maléolo lateral",
          "Posterior al maléolo lateral",
        ],
        correct: 0,
      },
      {
        text: "BP6 (Sānyīnjiāo) se encuentra a 3 cun por encima del maléolo medial. ¿En qué borde óseo?",
        options: [
          "En el borde posterior de la tibia",
          "En el borde anterior de la tibia",
          "En el borde medial de la tibia",
          "En el borde lateral de la tibia, entre los músculos",
        ],
        correct: 0,
      },
      {
        text: "BP7 (Lòugǔ) se localiza a 6 cun por encima del maléolo medial. ¿En qué posición respecto a la tibia?",
        options: [
          "En el borde anterior de la tibia",
          "En el borde posterior de la tibia",
          "En la línea media de la cara medial de la tibia",
          "En el borde lateral de la tibia",
        ],
        correct: 1,
      },
      {
        text: "BP8 (Dìjī) se encuentra a 3 cun por debajo de Yīnlíngquán. ¿Cuánto es desde el maléolo medial?",
        options: [
          "6 cun por encima del maléolo medial",
          "7 cun por encima del maléolo medial",
          "8 cun por encima del maléolo medial",
          "9 cun por encima del maléolo medial",
        ],
        correct: 2,
      },
      {
        text: "BP9 (Yīnlíngquán) se localiza en:",
        options: [
          "En la depresión lateral del tendón rotuliano",
          "En la depresión medial inferior de la rótula, en el borde de la meseta tibial",
          "En la depresión posterior de la rodilla",
          "En la cabeza del peroné",
        ],
        correct: 1,
      },
      {
        text: "BP10 (Xuèhǎi) se sitúa en la cara medial del muslo, a:",
        options: [
          "3 cun por encima del borde superior de la rótula",
          "2 cun por encima del borde superior de la rótula",
          "1 cun por encima del borde superior de la rótula",
          "al nivel de la rótula",
        ],
        correct: 1,
      },
      {
        text: "BP11 (Jīmén) se encuentra en el muslo. ¿Entre qué pliegues?",
        options: [
          "En el borde inferior del pliegue inguinal, 6 cun por encima del borde superior de la rótula",
          "En el pliegue poplíteo",
          "En la ingle, 3 cun por debajo del pliegue",
          "En la cara anterior del muslo, a 5 cun de la ingle",
        ],
        correct: 0,
      },
      {
        text: "BP12 (Chōngmén) se localiza en el pliegue inguinal. ¿En qué punto de referencia?",
        options: [
          "A 3,5 cun lateral al punto Ren 2 (Qūgǔ)",
          "A 2 cun lateral al punto Ren 2",
          "A 4 cun lateral al punto Ren 2",
          "En la línea media del pliegue inguinal",
        ],
        correct: 0,
      },
      {
        text: "BP13 (Fǔshè) se encuentra en el abdomen inferior, a:",
        options: [
          "4 cun bajo el ombligo y 4 cun lateral",
          "4 cun bajo el ombligo y 3 cun lateral",
          "3 cun bajo el ombligo y 4 cun lateral",
          "5 cun bajo el ombligo y 4 cun lateral",
        ],
        correct: 0,
      },
      {
        text: "BP14 (Fùjié) se sitúa a 1,3 cun por debajo del ombligo. ¿A cuántos cun lateralmente?",
        options: ["2 cun lateral", "3 cun lateral", "4 cun lateral", "5 cun lateral"],
        correct: 2,
      },
      {
        text: "BP15 (Dàhéng) está a nivel del ombligo. ¿A cuántos cun lateral?",
        options: ["2 cun lateral", "3 cun lateral", "4 cun lateral", "5 cun lateral"],
        correct: 2,
      },
      {
        text: "BP16 (Fù'āi) se localiza en el abdomen superior, a:",
        options: [
          "3 cun por encima del ombligo y 4 cun lateral",
          "4 cun por encima del ombligo y 3 cun lateral",
          "2 cun por encima del ombligo y 4 cun lateral",
          "5 cun por encima del ombligo y 4 cun lateral",
        ],
        correct: 0,
      },
      {
        text: "BP17 (Shídòu) se encuentra en el tórax. ¿En qué espacio intercostal y a qué distancia del esternón?",
        options: [
          "5º espacio intercostal, a 4 cun del esternón",
          "5º espacio intercostal, a 6 cun del esternón",
          "4º espacio intercostal, a 4 cun del esternón",
          "6º espacio intercostal, a 6 cun del esternón",
        ],
        correct: 1,
      },
      {
        text: "BP18 (Tiānxī) se sitúa en el 4º espacio intercostal. ¿A cuántos cun del esternón?",
        options: [
          "4 cun del esternón",
          "6 cun del esternón",
          "3 cun del esternón",
          "5 cun del esternón",
        ],
        correct: 1,
      },
      {
        text: "BP19 (Xiōngxiāng) se localiza en el 3er espacio intercostal, a 6 cun del esternón. ¿A qué nivel de la línea mamilar?",
        options: [
          "En la línea mamilar",
          "1 cun por fuera de la línea mamilar",
          "2 cun por dentro de la línea mamilar",
          "En la línea axilar anterior",
        ],
        correct: 0,
      },
      {
        text: "BP20 (Zhōuróng) se sitúa en el 2º espacio intercostal. ¿A qué distancia del esternón?",
        options: [
          "A 4 cun del esternón",
          "A 5 cun del esternón",
          "A 6 cun del esternón",
          "A 3 cun del esternón",
        ],
        correct: 2,
      },
      {
        text: "BP21 (Dàbāo) se encuentra en el costado del tórax, en la línea axilar media. ¿En qué espacio intercostal?",
        options: [
          "En el 4º espacio intercostal",
          "En el 5º espacio intercostal",
          "En el 6º espacio intercostal",
          "En el 7º espacio intercostal",
        ],
        correct: 2,
      },

      // ==========================================
      // FASE 3: CARACTERÍSTICAS CLÍNICAS (21 preguntas)
      // ==========================================
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

  // Meridiano de Corazón
  {
    id: "meridiano-c-completo",
    category: "meridianos",
    title: "Corazón – Nombres, Ubicación y Clínica (Shǒu Shǎo Yīn)",
    description:
      "Nomenclatura (Pīnyīn y traducción), localización anatómica y acciones clínicas principales de los 9 puntos del meridiano del Corazón según la tradición.",
    questions: [
      // ==========================================
      // FASE 1: NOMENCLATURA (9 preguntas)
      // ==========================================
      {
        text: "¿Cuál es el nombre en Pīnyīn y la traducción del punto C1?",
        options: [
          "Qīnglíng (Colina Verde)",
          "Jíquán (Manantial Extremo)",
          "Shàohǎi (Mar Menor)",
          "Língdào (Vía del Alma)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto C2, situado en el surco del bíceps?",
        options: [
          "Jíquán",
          "Qīnglíng (Colina Verde)",
          "Shàohǎi (Mar Menor)",
          "Yīnlíng (Montículo Yin)",
        ],
        correct: 1,
      },
      {
        text: "El punto C3 se llama Shàohǎi. ¿Cuál es su traducción?",
        options: ["Mar Menor", "Colina Verde", "Vía del Alma", "Manantial del Corazón"],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto C4?",
        options: [
          "Língdào (Vía del Alma)",
          "Xīmén (Puerta del Crecimiento)",
          "Shénmén (Puerta del Espíritu)",
          "Tōnglǐ (Comunicación Interior)",
        ],
        correct: 0,
      },
      {
        text: "El punto C5, situado a 2 cun proximal a la muñeca, se llama:",
        options: [
          "Tōnglǐ (Comunicación Interior)",
          "Xīmén (Puerta del Crecimiento)",
          "Shénmén (Puerta del Espíritu)",
          "Yīnxī (Arroyo Yin)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto C6, a 1,5 cun proximal a la muñeca?",
        options: [
          "Tōnglǐ (Comunicación Interior)",
          "Yīnxī (Arroyo Yin)",
          "Shénmén (Puerta del Espíritu)",
          "Xiǎochōng (Pequeño Irruptor)",
        ],
        correct: 0,
      },
      {
        text: "El punto C7 se llama Shénmén. ¿Cuál es su traducción?",
        options: ["Puerta del Espíritu", "Arroyo Yin", "Pequeño Irruptor", "Comunicación Interior"],
        correct: 0,
      },
      {
        text: "¿Cómo se llama el punto C8, en la palma de la mano?",
        options: ["Shénmén", "Yīnxī (Arroyo Yin)", "Xiǎochōng (Pequeño Irruptor)", "Língdào"],
        correct: 1,
      },
      {
        text: "El punto C9, el último del meridiano, se conoce como:",
        options: [
          "Yīnxī",
          "Xiǎochōng (Pequeño Irruptor)",
          "Shàochōng (Pequeño Irruptor)",
          "Jíquán",
        ],
        correct: 2,
      },

      // ==========================================
      // FASE 2: UBICACIÓN ANATÓMICA (9 preguntas)
      // ==========================================
      {
        text: "¿Dónde se localiza C1 (Jíquán)?",
        options: [
          "En la axila, en la depresión del borde inferior del músculo pectoral mayor",
          "En la fosa infraclavicular",
          "En la parte anterior del hombro",
          "En la cara lateral del tórax",
        ],
        correct: 0,
      },
      {
        text: "C2 (Qīnglíng) se sitúa en el brazo. ¿En qué referencia exacta?",
        options: [
          "A 3 cun por encima del pliegue del codo, en el surco del bíceps",
          "A 2 cun por encima del pliegue del codo",
          "A 1 cun por encima del pliegue del codo",
          "En el pliegue del codo",
        ],
        correct: 0,
      },
      {
        text: "C3 (Shàohǎi) se localiza en el pliegue del codo. ¿En qué lado y entre qué estructuras?",
        options: [
          "En el lado radial, entre el tendón del bíceps y el radio",
          "En el lado cubital, entre el tendón del bíceps y el epicóndilo medial",
          "En el centro del pliegue del codo",
          "En el lado radial, entre el bíceps y el epicóndilo lateral",
        ],
        correct: 1,
      },
      {
        text: "C4 (Língdào) se encuentra en el antebrazo. ¿A qué distancia de la muñeca?",
        options: [
          "A 2 cun proximal a la muñeca, entre los tendones del flexor radial y palmar",
          "A 1,5 cun proximal a la muñeca",
          "A 3 cun proximal a la muñeca",
          "A 1 cun proximal a la muñeca",
        ],
        correct: 0,
      },
      {
        text: "C5 (Xīmén) se localiza a 5 cun proximal a la muñeca. ¿Entre qué tendones?",
        options: [
          "Entre los tendones del flexor radial y el palmar mayor",
          "Entre los tendones del palmar mayor y el flexor cubital",
          "Entre el flexor cubital y el cubito",
          "Entre el bíceps y el radio",
        ],
        correct: 0,
      },
      {
        text: "C6 (Tōnglǐ) se sitúa a 1,5 cun proximal a la muñeca. ¿En qué surco tendinoso?",
        options: [
          "En el surco lateral del tendón del flexor radial",
          "En el surco medial del tendón del flexor radial",
          "Entre el palmar largo y el cubital",
          "En el centro de la muñeca",
        ],
        correct: 1,
      },
      {
        text: "C7 (Shénmén) se encuentra en la muñeca. ¿Cuál es su referencia exacta?",
        options: [
          "En el pliegue distal de la muñeca, lado radial, en la depresión de la articulación",
          "En el pliegue distal de la muñeca, lado cubital, en la depresión de la articulación",
          "En el centro del pliegue de la muñeca",
          "En el dorso de la muñeca",
        ],
        correct: 1,
      },
      {
        text: "C8 (Yīnxī) se localiza en la palma. ¿Entre qué estructuras?",
        options: [
          "En el centro de la palma, entre el 2º y 3º metacarpianos",
          "En la palma, en la depresión entre el 4º y 5º metacarpianos, proximal",
          "En la eminencia tenar",
          "En la eminencia hipotenar",
        ],
        correct: 1,
      },
      {
        text: "C9 (Shàochōng) se sitúa en la mano. ¿Dónde exactamente?",
        options: [
          "En la punta del pulgar, lado radial de la uña",
          "En la punta del dedo medio",
          "En la punta del dedo meñique, lado radial de la uña",
          "En la punta del dedo anular",
        ],
        correct: 2,
      },

      // ==========================================
      // FASE 3: CARACTERÍSTICAS CLÍNICAS (9 preguntas)
      // ==========================================
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

  // Meridiano de ID
  {
    id: "meridiano-id-completo",
    category: "meridianos",
    title: "Intestino Delgado – Nombres, Ubicación y Clínica (Shǒu Tài Yáng)",
    description:
      "Nomenclatura (Pīnyīn y traducción), localización anatómica y acciones clínicas principales de los 19 puntos del meridiano de Intestino Delgado según la tradición.",
    questions: [
      // ==========================================
      // FASE 1: NOMENCLATURA (19 preguntas)
      // ==========================================
      {
        text: "¿Cuál es el nombre en Pīnyīn y la traducción del punto ID1?",
        options: [
          "Qiángǔ (Valle Anterior)",
          "Hòuxī (Arroyo Posterior)",
          "Shàozé (Pequeño Pantano)",
          "Wāngǔ (Hueso de la Muñeca)",
        ],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina el punto ID2, situado en el borde cubital del quinto dedo?",
        options: [
          "Shàozé",
          "Qiángǔ (Valle Anterior)",
          "Hòuxī (Arroyo Posterior)",
          "Yánggǔ (Valle del Yang)",
        ],
        correct: 1,
      },
      {
        text: "El punto ID3 se llama Hòuxī. ¿Cuál es su traducción?",
        options: ["Valle Anterior", "Arroyo Posterior", "Hueso de la Muñeca", "Pequeño Pantano"],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto ID4?",
        options: [
          "Wāngǔ (Hueso de la Muñeca)",
          "Yánggǔ (Valle del Yang)",
          "Yǎnglǎo (Cuidar al Anciano)",
          "Zhīzhèng (Rama Recta)",
        ],
        correct: 0,
      },
      {
        text: "El punto ID5, en la depresión del lado cubital de la muñeca, se llama:",
        options: [
          "Wāngǔ",
          "Yánggǔ (Valle del Yang)",
          "Yǎnglǎo (Cuidar al Anciano)",
          "Xiǎohǎi (Mar Pequeño)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto ID6, situado en la depresión sobre la cabeza del cúbito?",
        options: [
          "Yánggǔ",
          "Yǎnglǎo (Cuidar al Anciano)",
          "Zhīzhèng (Rama Recta)",
          "Jiānzhēn (Rectitud del Hombro)",
        ],
        correct: 1,
      },
      {
        text: "El punto ID7 se llama Zhīzhèng. ¿Cuál es su traducción?",
        options: ["Cuidar al Anciano", "Rama Recta", "Mar Pequeño", "Hueso de la Muñeca"],
        correct: 1,
      },
      {
        text: "¿Cómo se llama el punto ID8, ubicado entre el olécranon y el epicóndilo medial?",
        options: [
          "Zhīzhèng",
          "Xiǎohǎi (Mar Pequeño)",
          "Jiānzhēn (Rectitud del Hombro)",
          "Nàoshū (Transporte del Brazo)",
        ],
        correct: 1,
      },
      {
        text: "El punto ID9, en la parte posterior de la axila, recibe el nombre de:",
        options: [
          "Jiānzhēn (Rectitud del Hombro)",
          "Nàoshū (Transporte del Brazo)",
          "Tiānzōng (Reunión Celestial)",
          "Bǐngfēng (Agarrar el Viento)",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre en Pīnyīn del punto ID10, traducido como 'Transporte del Brazo'?",
        options: ["Jiānzhēn", "Nàoshū", "Tiānzōng", "Qūyuán (Muro Curvo)"],
        correct: 1,
      },
      {
        text: "El punto ID11 se llama Tiānzōng. ¿Cuál es su traducción?",
        options: ["Reunión Celestial", "Agarrar el Viento", "Muro Curvo", "Ventana Celestial"],
        correct: 0,
      },
      {
        text: "¿Cómo se denomina el punto ID12, en la fosa supraespinosa?",
        options: [
          "Tiānzōng",
          "Bǐngfēng (Agarrar el Viento)",
          "Qūyuán (Muro Curvo)",
          "Jiānwàishū (Transporte Externo del Hombro)",
        ],
        correct: 1,
      },
      {
        text: "El punto ID13 es Qūyuán. ¿Qué significa su traducción?",
        options: [
          "Muro Curvo",
          "Transporte Externo del Hombro",
          "Ventana Celestial",
          "Rostro Celestial",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es el nombre del punto ID14, a 3 cun lateral a la vértebra T1?",
        options: [
          "Qūyuán",
          "Jiānwàishū (Transporte Externo del Hombro)",
          "Jiānzhōngshū (Transporte Medio del Hombro)",
          "Tiānchuāng (Ventana Celestial)",
        ],
        correct: 1,
      },
      {
        text: "El punto ID15, a 2 cun lateral a la vértebra C7, se llama:",
        options: [
          "Jiānwàishū",
          "Jiānzhōngshū (Transporte Medio del Hombro)",
          "Tiānchuāng (Ventana Celestial)",
          "Tiānróng (Rostro Celestial)",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denomina el punto ID16, situado en el borde posterior del esternocleidomastoideo a nivel del cartílago tiroides?",
        options: [
          "Jiānzhōngshū",
          "Tiānchuāng (Ventana Celestial)",
          "Tiānróng (Rostro Celestial)",
          "Quánliáo (Hendidura del Pómulo)",
        ],
        correct: 1,
      },
      {
        text: "El punto ID17, en el borde posterior del esternocleidomastoideo a nivel del ángulo de la mandíbula, se llama:",
        options: [
          "Tiānchuāng",
          "Tiānróng (Rostro Celestial)",
          "Quánliáo (Hendidura del Pómulo)",
          "Tīnggōng (Palacio de la Audición)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuál es el nombre y la traducción del punto ID18, debajo del pómulo?",
        options: [
          "Tiānróng",
          "Quánliáo (Hendidura del Pómulo)",
          "Tīnggōng (Palacio de la Audición)",
          "Shàozé",
        ],
        correct: 1,
      },
      {
        text: "El punto ID19, el último del meridiano, se conoce como:",
        options: ["Quánliáo", "Tīnggōng (Palacio de la Audición)", "Tiānróng", "Jiānzhōngshū"],
        correct: 1,
      },

      // ==========================================
      // FASE 2: UBICACIÓN ANATÓMICA (19 preguntas)
      // ==========================================
      {
        text: "¿Dónde se localiza ID1 (Shàozé)?",
        options: [
          "En la punta del pulgar, lado radial",
          "En la punta del dedo meñique, lado cubital de la uña",
          "En la punta del dedo anular",
          "En la base del dedo meñique",
        ],
        correct: 1,
      },
      {
        text: "ID2 (Qiángǔ) se sitúa en el borde cubital de la mano. ¿En qué referencia exacta?",
        options: [
          "En la base del quinto dedo, en la articulación metacarpofalángica",
          "En la cabeza del quinto metacarpiano",
          "En la base del cuarto metacarpiano",
          "En la articulación metacarpofalángica del pulgar",
        ],
        correct: 0,
      },
      {
        text: "ID3 (Hòuxī) se encuentra en el borde cubital de la mano. ¿Entre qué estructuras?",
        options: [
          "En la depresión proximal a la cabeza del quinto metacarpiano",
          "En la depresión distal a la cabeza del quinto metacarpiano",
          "En la articulación de la muñeca",
          "En la base del cuarto metacarpiano",
        ],
        correct: 0,
      },
      {
        text: "ID4 (Wāngǔ) se localiza en la muñeca. ¿Cuál es su referencia ósea?",
        options: [
          "En la depresión entre el hueso pisiforme y el ganchoso",
          "En la depresión entre el hueso piramidal y el pisiforme",
          "En la depresión sobre la apófisis estiloides del cúbito",
          "En el centro del pliegue de la muñeca",
        ],
        correct: 0,
      },
      {
        text: "ID5 (Yánggǔ) se sitúa en el lado cubital de la muñeca. ¿En qué depresión?",
        options: [
          "Entre el cúbito y el hueso piramidal",
          "Entre el radio y el escafoides",
          "En la apófisis estiloides del radio",
          "En el centro de la muñeca",
        ],
        correct: 0,
      },
      {
        text: "ID6 (Yǎnglǎo) se encuentra en el antebrazo. ¿A qué altura y en qué hueso?",
        options: [
          "A 1 cun proximal a la apófisis estiloides del cúbito",
          "A 1 cun distal a la apófisis estiloides del cúbito",
          "A 2 cun proximal a la muñeca, en el radio",
          "En el pliegue del codo",
        ],
        correct: 0,
      },
      {
        text: "ID7 (Zhīzhèng) se sitúa en el antebrazo. ¿A qué distancia de la muñeca?",
        options: [
          "A 3 cun proximal a la muñeca, en el borde cubital",
          "A 5 cun proximal a la muñeca, en el borde cubital",
          "A 2 cun proximal a la muñeca, en el borde radial",
          "A 4 cun proximal a la muñeca, en el borde cubital",
        ],
        correct: 1,
      },
      {
        text: "ID8 (Xiǎohǎi) se localiza en el codo. ¿Entre qué estructuras?",
        options: [
          "Entre el olécranon y el epicóndilo medial, en la depresión",
          "Entre el olécranon y el epicóndilo lateral",
          "En el centro del pliegue del codo",
          "En la fosa cubital",
        ],
        correct: 0,
      },
      {
        text: "ID9 (Jiānzhēn) se encuentra en el hombro. ¿En qué posición respecto a la axila?",
        options: [
          "En la depresión posterior a la axila, 1 cun por encima del pliegue axilar",
          "En la depresión anterior a la axila",
          "En el centro del hombro",
          "En la fosa supraclavicular",
        ],
        correct: 0,
      },
      {
        text: "ID10 (Nàoshū) se sitúa en el hombro. ¿En qué depresión?",
        options: [
          "En la depresión bajo la espina de la escápula",
          "En la depresión bajo el acromion, posterior",
          "En la fosa supraespinosa",
          "En la articulación acromioclavicular",
        ],
        correct: 0,
      },
      {
        text: "ID11 (Tiānzōng) se localiza en la escápula. ¿En qué fosa?",
        options: [
          "En la fosa supraespinosa",
          "En la fosa infraespinosa, en el centro",
          "En el borde medial de la escápula",
          "En el borde lateral de la escápula",
        ],
        correct: 1,
      },
      {
        text: "ID12 (Bǐngfēng) se encuentra en la fosa supraespinosa. ¿En qué punto de referencia?",
        options: [
          "En el centro de la fosa supraespinosa",
          "En el borde superior de la espina de la escápula",
          "En el borde medial de la escápula",
          "En el acromion",
        ],
        correct: 0,
      },
      {
        text: "ID13 (Qūyuán) se sitúa en la escápula. ¿Entre qué estructuras?",
        options: [
          "En el borde medial de la escápula, entre las espinas C7 y T1",
          "En el borde lateral de la escápula",
          "En el centro de la fosa infraespinosa",
          "En el borde inferior de la escápula",
        ],
        correct: 0,
      },
      {
        text: "ID14 (Jiānwàishū) se localiza en la espalda. ¿A qué distancia de la columna?",
        options: [
          "A 3 cun lateral a la apófisis espinosa de T1",
          "A 2 cun lateral a la apófisis espinosa de T1",
          "A 4 cun lateral a la apófisis espinosa de T1",
          "A 3 cun lateral a la apófisis espinosa de C7",
        ],
        correct: 0,
      },
      {
        text: "ID15 (Jiānzhōngshū) se sitúa en la espalda. ¿A qué nivel y distancia de la columna?",
        options: [
          "A 3 cun lateral a la apófisis espinosa de T1",
          "A 3 cun lateral a la apófisis espinosa de C7",
          "A 2 cun lateral a la apófisis espinosa de C7",
          "A 2 cun lateral a la apófisis espinosa de T1",
        ],
        correct: 2,
      },
      {
        text: "ID16 (Tiānchuāng) se encuentra en el cuello. ¿En qué músculo y a qué nivel?",
        options: [
          "En el borde posterior del ECM, a nivel del cartílago tiroides",
          "En el borde anterior del ECM, a nivel del cartílago tiroides",
          "En el borde posterior del ECM, a nivel del hioides",
          "En el borde anterior del ECM, a nivel del hioides",
        ],
        correct: 0,
      },
      {
        text: "ID17 (Tiānróng) se localiza en el cuello. ¿En qué referencia exacta?",
        options: [
          "En el borde posterior del ECM, a nivel del ángulo de la mandíbula",
          "En el borde anterior del ECM, a nivel del ángulo de la mandíbula",
          "Detrás del lóbulo de la oreja",
          "En la fosa supraclavicular",
        ],
        correct: 0,
      },
      {
        text: "ID18 (Quánliáo) se sitúa en la cara. ¿Dónde exactamente?",
        options: [
          "Debajo de la pupila, en el foramen infraorbitario",
          "Debajo del pómulo, en la depresión en el borde inferior del arco cigomático",
          "En el surco nasolabial",
          "En la comisura de los labios",
        ],
        correct: 1,
      },
      {
        text: "ID19 (Tīnggōng) se localiza en la cara. ¿En qué depresión?",
        options: [
          "Delante del lóbulo de la oreja, en la depresión entre el cóndilo mandibular y el trago",
          "Detrás del lóbulo de la oreja",
          "En el trago",
          "En la sien",
        ],
        correct: 0,
      },

      // ==========================================
      // FASE 3: CARACTERÍSTICAS CLÍNICAS (19 preguntas)
      // ==========================================
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
