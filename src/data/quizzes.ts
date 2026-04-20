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
  //Auriculoterapia

  //  "title": "Auriculoterapia - Anatomía y Diagnóstico Visual - Clase 1",
  {
    id: "anatomia-diagnostico-auricular",
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
    title: "Auriculoterapia - Los 10 Puntos Maestros",
    description:
      "Evaluación sobre la localización exacta y las funciones terapéuticas de los puntos pilares de la medicina auricular.",
    questions: [
      // ========== 1. PUNTO CERO ==========
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

      // ========== 2. SHEN MEN ==========
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

      // ========== 3. SIMPÁTICO Y ENDOCRINO ==========
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
        text: "El Punto Endocrino se localiza en la base de la concha cava, cerca de la incisura intertrágica. ¿Cuál es su uso principal?",
        options: [
          "Tratar fracturas óseas",
          "Regular hormonas, tratar menstruación irregular y reumatismo",
          "Mejorar la audición",
          "Tratar la caspa",
        ],
        correct: 1,
      },

      // ========== 4. TÁLAMO Y OSCILACIÓN ==========
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
      {
        text: "¿Qué punto equilibra los hemisferios cerebrales y ayuda en trastornos de aprendizaje como la dislexia?",
        options: ["Shen Men", "Máster Oscilación", "Punto Cero", "Punto Alergia"],
        correct: 1,
      },
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

      // ========== 5. ALERGIA Y SENSORIAL ==========
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
        text: "El Punto Sensorial (Máster Sensorial) se utiliza para:",
        options: [
          "Problemas de vista, oído y olfato",
          "Dolor de espalda",
          "Mejorar la digestión",
          "Aumentar la energía de Riñón",
        ],
        correct: 0,
      },
      {
        text: "¿Dónde se localiza el Punto Sensorial?",
        options: [
          "En el centro del lóbulo",
          "En el trago",
          "En la raíz del hélix",
          "En la concha cimba",
        ],
        correct: 0,
      },

      // ========== 6. PUNTOS DEL TRAGO (NICOTINA / HAMBRE) ==========
      {
        text: "¿Qué punto se encuentra en el trago y se usa para el control de adicciones y ansiedad?",
        options: [
          "Punto de Nicotina / Boca",
          "Punto de Rodilla",
          "Punto de Hígado",
          "Punto de Vejiga",
        ],
        correct: 0,
      },
      {
        text: "¿En qué zona se localiza el punto del Hambre para control de peso?",
        options: ["En el lóbulo", "En el trago", "En el hélix", "En la fosa triangular"],
        correct: 1,
      },

      // ========== 7. CEREBRO Y TRANQUILIZANTE ==========
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
        text: "¿Dónde se encuentra el Punto Tranquilizante?",
        options: [
          "En el trago",
          "En el antitrago",
          "En el lóbulo",
          "En la base de la fosa triangular",
        ],
        correct: 0,
      },

      // ========== 8. INTEGRACIÓN CLÍNICA ==========
      {
        text: "Si un paciente llega con mucho dolor y gran ansiedad por el tratamiento, ¿qué combinación de Master Puntos es la más adecuada para iniciar?",
        options: [
          "Punto Alergia y Endocrino",
          "Shen Men y Tálamo",
          "Oscilación y Punto Cero",
          "Nicotina y Sensorial",
        ],
        correct: 1,
      },
      {
        text: "¿Qué punto maestro es conocido como el 'Punto de Control Maestro' que regula a todos los demás?",
        options: ["Shen Men", "Punto Cero", "Tálamo", "Endocrino"],
        correct: 1,
      },
      {
        text: "¿Qué estructura de la oreja alberga al punto Máster Tálamo?",
        options: ["El Hélix", "El Antitrago", "El Trago", "La Fosa Escafoidea"],
        correct: 1,
      },
    ],
  },

  //"title": "Auriculoterapia - Formas Terapéuticas y Aplicación Clínica",
  {
    id: "terapeutica-auricular",
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

  //Anatomia
  {
    id: "anatomia",
    title: "Anatomía - Clase 1 - Generalidades y Ejes",
    description: "Planos, ejes, huesos, articulaciones y reparos anatómicos esenciales",
    questions: [
      // 1. POSICIÓN ANATÓMICA Y DECÚBITOS (2 preguntas)
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

      // 2. PLANOS ANATÓMICOS (1 pregunta)
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

      // 3. EJES Y MOVIMIENTOS (2 preguntas)
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

      // 4. GENERALIDADES DEL ESQUELETO Y HUESOS (4 preguntas)
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
        text: "¿Cuáles son las dos porciones principales en que se divide un hueso largo típico?",
        options: [
          "Cabeza y base",
          "Epífisis y diáfisis",
          "Cortical y esponjosa",
          "Apófisis y cavidad",
        ],
        correct: 1,
      },
      {
        text: "¿Cómo se denominan las salientes o eminencias de los huesos que sirven para la inserción de tendones y ligamentos?",
        options: ["Cavidades articulares", "Diáfisis", "Apófisis", "Epífisis"],
        correct: 2,
      },

      // 5. CLASIFICACIÓN DE ARTICULACIONES (4 preguntas)
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

      // 6. MÚSCULOS: TIPOS Y ACCIONES (2 preguntas)
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

      // 7. MANGUITO ROTADOR (2 preguntas)
      {
        text: "¿Cuál de los siguientes músculos NO forma parte del manguito rotador del hombro?",
        options: ["Supraespinoso", "Infraespinoso", "Redondo menor", "Deltoides"],
        correct: 3,
      },
      {
        text: "¿Qué músculo del manguito rotador es el principal responsable de iniciar la abducción (separar el brazo del cuerpo)?",
        options: ["Subescapular", "Supraespinoso", "Infraespinoso", "Redondo menor"],
        correct: 1,
      },

      // 8. COLUMNA VERTEBRAL (4 preguntas)
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
        text: "¿Qué sucede con los discos intervertebrales en una hernia discal?",
        options: [
          "Se calcifican y sueldan las vértebras",
          "Se luxan y pueden presionar los nervios raquídeos",
          "Aumentan su hidratación",
          "Se convierten en tejido óseo",
        ],
        correct: 1,
      },

      // 9. TÓRAX Y DIAFRAGMA (2 preguntas)
      {
        text: "¿Cuántos pares de costillas forman la caja torácica?",
        options: ["10 pares", "11 pares", "12 pares", "14 pares"],
        correct: 2,
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

      // 10. ABDOMEN Y REGIONES (2 preguntas)
      {
        text: "¿En cuál de las siguientes regiones abdominales se ubica típicamente el estómago?",
        options: [
          "Hipocondrio derecho",
          "Fosa ilíaca izquierda",
          "Epigastrio e hipocondrio izquierdo",
          "Mesogastrio derecho",
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

      // 11. CINTURAS ESCAPULAR Y PÉLVICA (2 preguntas)
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
        text: "¿Qué estructura forma la cintura pélvica?",
        options: [
          "El sacro y el cóccix",
          "Los dos huesos coxales (ilíacos)",
          "El fémur y el acetábulo",
          "Las vértebras lumbares",
        ],
        correct: 1,
      },

      // 12. REPAROS ANATÓMICOS PALPABLES (2 preguntas)
      {
        text: "¿Cómo se llama la membrana de tejido conectivo que envuelve la superficie externa de los huesos (excepto en las articulaciones)?",
        options: ["Endostio", "Periostio", "Peritoneo", "Fascia"],
        correct: 1,
      },
      {
        text: "¿Qué referencia anatómica se utiliza para localizar la cuarta vértebra lumbar (L4)?",
        options: [
          "El borde inferior de las costillas",
          "La apófisis xifoides del esternón",
          "La cresta ilíaca (a la altura de la cintura)",
          "El trocánter mayor del fémur",
        ],
        correct: 2,
      },

      // 13. ESTABILIDAD ARTICULAR (1 pregunta)
      {
        text: "¿Por qué la articulación del hombro (cintura escapular) es más propensa a luxaciones que la cadera?",
        options: [
          "Porque tiene más ligamentos",
          "Porque la cápsula articular es más profunda",
          "Por su gran movilidad y menor estabilidad ósea",
          "Porque carece de cartílago articular",
        ],
        correct: 2,
      },
    ],
  },

  // Meridiano de Pulmon
  {
    id: "meridiano-pulmon",
    title: "Puntos de Acupuntura - Meridiano de Pulmón (Shǒu Tàiyīn)",
    description: "Recorrido, puntos principales y funciones del canal de Pulmón",
    questions: [
      // ========== 1. GENERALIDADES DEL MERIDIANO ==========
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

      // ========== 2. UNIDADES DE MEDIDA (CÙN Y FĒN) ==========
      {
        text: "¿Cuál es el ancho del dedo pulgar del paciente utilizado como unidad de medida en acupuntura?",
        options: ["1 Fēn", "1 Cùn (o Tǔn)", "1 Chǐ", "1 Zhàng"],
        correct: 1,
      },
      {
        text: "¿Cuántos Fēn (divisiones) componen 1 Cùn?",
        options: ["5 Fēn", "8 Fēn", "10 Fēn", "12 Fēn"],
        correct: 2,
      },
      {
        text: "¿Qué distancia proporcional estándar hay entre el pliegue de la muñeca y el pliegue del codo?",
        options: ["9 Cùn", "12 Cùn", "5 Cùn", "16 Cùn"],
        correct: 1,
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

      // ========== 3. RECORRIDO INTERNO Y RELACIONES ==========
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
        text: "¿Qué estructura corporal se relaciona directamente con la salud del Pulmón en Medicina China?",
        options: [
          "Los huesos y la médula",
          "La piel y el vello corporal",
          "Los labios y la boca",
          "Los ojos y la visión",
        ],
        correct: 1,
      },

      // ========== 4. PUNTOS DEL MERIDIANO (EN ORDEN ANATÓMICO: TÓRAX → MANO) ==========

      // --- P1 (Zhōngfǔ) y P2 (Yúnmén) ---
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

      // --- P3 (Tiānfǔ) y P5 (Chǐzé) ---
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

      // --- P6 (Kǒngzuì) ---
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

      // --- P7 (Lièquē) ---
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

      // --- P8 (Jīngqú) y P9 (Tàiyuān) ---
      {
        text: "¿Qué punto se encuentra a 1 Cùn del pliegue de la muñeca, en la depresión entre la apófisis estiloides del radio y la arteria radial?",
        options: ["P7 (Lièquē)", "P8 (Jīngqú)", "P9 (Tàiyuān)", "P10 (Yújì)"],
        correct: 1,
      },
      {
        text: "¿Qué punto se considera el 'Punto Río' (Jīng) del canal de Pulmón, útil para tratar tos con flema que dificulta la respiración?",
        options: ["P5 (Chǐzé)", "P8 (Jīngqú)", "P9 (Tàiyuān)", "P11 (Shàoshāng)"],
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
        text: "¿Qué punto es conocido por ayudar a movilizar la flema y las mucosidades, especialmente cuando son espesas?",
        options: ["P5 (Chǐzé)", "P9 (Tàiyuān)", "P11 (Shàoshāng)", "P1 (Zhōngfǔ)"],
        correct: 1,
      },
      {
        text: "P3 (Tiānfǔ) ayuda a tratar la epistaxis (sangrado nasal). ¿Qué otro punto del mismo meridiano también es muy útil para detener hemorragias nasales?",
        options: ["P1 (Zhōngfǔ)", "P5 (Chǐzé)", "P9 (Tàiyuān)", "P11 (Shàoshāng)"],
        correct: 2,
      },

      // --- P10 (Yújì) y P11 (Shàoshāng) ---
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

      // ========== 5. CONCEPTOS CLÍNICOS ==========
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
    ],
  },

  // Meridiano de Intestino Grueso

  {
    id: "meridiano-intestino-grueso",
    title: "Puntos de Acupuntura -Meridiano de Intestino Grueso (Shǒu Yángmíng)",
    description: "Recorrido, puntos principales y funciones del canal de Intestino Grueso",
    questions: [
      // ========== 1. GENERALIDADES DEL MERIDIANO ==========
      {
        text: "¿A qué elemento pertenece el meridiano de Intestino Grueso según la teoría de los 5 Movimientos (Wǔ Xíng)?",
        options: ["Madera (Mù)", "Fuego (Huǒ)", "Metal (Jīn)", "Agua (Shuǐ)"],
        correct: 2,
      },
      {
        text: "¿Cómo se denomina el meridiano de Intestino Grueso en la nomenclatura de los 6 Grandes Canales?",
        options: [
          "Shǒu Tàiyīn (Pulmón)",
          "Shǒu Yángmíng (Intestino Grueso)",
          "Shǒu Shàoyáng (San Jiao)",
          "Shǒu Tàiyáng (Intestino Delgado)",
        ],
        correct: 1,
      },
      {
        text: "¿Cuántos puntos de acupuntura externos tiene el meridiano de Intestino Grueso?",
        options: ["11 puntos", "14 puntos", "20 puntos", "28 puntos"],
        correct: 2,
      },
      {
        text: "¿Cuál es el sentido de circulación de la energía en el meridiano de Intestino Grueso?",
        options: [
          "Desde el pecho hacia la mano",
          "Desde la mano hacia la cara (centrípeto)",
          "Desde el pie hacia el abdomen",
          "Desde la cara hacia el pie",
        ],
        correct: 1,
      },

      // ========== 2. RECORRIDO INTERNO Y RELACIONES ==========
      {
        text: "Según el recorrido interno del meridiano, ¿con qué órgano está acoplado (relación Biǎo-Lǐ) el Intestino Grueso?",
        options: ["Estómago (Wèi)", "Pulmón (Fèi)", "Riñón (Shèn)", "Corazón (Xīn)"],
        correct: 1,
      },
      {
        text: "El meridiano de Intestino Grueso atraviesa el surco nasolabial y termina en el punto IG20. ¿Cómo se llama ese punto?",
        options: [
          "Yíngxiāng (Bienvenida de la Fragancia)",
          "Rénzhōng (Surco del Filtrum)",
          "Chéngjiāng (Receptáculo de Saliva)",
          "Sùliáo (Agujero Blanco)",
        ],
        correct: 0,
      },
      {
        text: "¿Qué tejido corporal se relaciona estrechamente con la función del Intestino Grueso y el Pulmón en Medicina China?",
        options: [
          "Los tendones",
          "La piel y el vello corporal",
          "Los huesos",
          "Los vasos sanguíneos",
        ],
        correct: 1,
      },

      // ========== 3. UNIDADES DE MEDIDA (CÙN) ==========
      {
        text: "¿Qué distancia en Cùn hay entre el pliegue del codo y el pliegue de la muñeca?",
        options: ["9 Cùn", "12 Cùn", "5 Cùn", "16 Cùn"],
        correct: 1,
      },
      {
        text: "IG11 (Qūchí) se localiza en el extremo externo del pliegue del codo. ¿A qué distancia del pliegue de la muñeca se encuentra IG6 (Piānlì), punto de conexión (Luò) con Pulmón?",
        options: ["3 Cùn", "5 Cùn", "7 Cùn", "10 Cùn"],
        correct: 2,
      },

      // ========== 4. PUNTOS DEL MERIDIANO (EN ORDEN ANATÓMICO: MANO → ROSTRO) ==========

      // --- IG1 (Shāngyáng) ---
      {
        text: "¿Dónde se encuentra IG1 (Shāngyáng - Comerciante del Yang)?",
        options: [
          "En el ángulo ungueal radial del dedo índice",
          "En el ángulo ungueal cubital del dedo pulgar",
          "En el pliegue interdigital entre pulgar e índice",
          "En el centro de la uña del índice",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función principal de IG1 (Shāngyáng)?",
        options: [
          "Tonificar el Qi de Intestino Grueso",
          "Restaurar la conciencia y aliviar el dolor de garganta (punto Jing-pozo)",
          "Dispersar el frío del estómago",
          "Nutrir la sangre",
        ],
        correct: 1,
      },

      // --- IG4 (Hégǔ) ---
      {
        text: "IG4 (Hégǔ - Unión del Valle) es uno de los puntos más famosos. ¿Dónde se localiza?",
        options: [
          "En el ángulo ungueal del índice",
          "En la tabaquera anatómica",
          "Entre el primer y segundo metacarpiano, en el vientre muscular del aductor del pulgar",
          "En el pliegue de la muñeca, lado radial",
        ],
        correct: 2,
      },
      {
        text: "¿Qué acción importante tiene IG4 (Hégǔ)?",
        options: [
          "Dispersar el viento, aliviar el dolor facial y cefaleas",
          "Tonificar exclusivamente el Pulmón",
          "Drenar la humedad del Jiao Inferior",
          "Fortalecer los huesos",
        ],
        correct: 0,
      },
      {
        text: "¿En qué situación está CONTRAINDICADO el uso de IG4 (Hégǔ)?",
        options: [
          "Dolor de muelas",
          "Embarazo (puede inducir el parto)",
          "Estreñimiento",
          "Resfriado común",
        ],
        correct: 1,
      },

      // --- IG5 (Yángxī) y IG6 (Piānlì) ---
      {
        text: "¿Dónde se localiza IG5 (Yángxī - Arroyo del Yang)?",
        options: [
          "En el pliegue dorsal de la muñeca, en la tabaquera anatómica",
          "En el pliegue ventral de la muñeca",
          "A 3 Cùn del codo",
          "En la base del pulgar",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es la función de IG6 (Piānlì - Desvío del Pasaje)?",
        options: [
          "Punto Río del canal",
          "Punto de Conexión (Luò) que comunica con el meridiano de Pulmón",
          "Punto de Tonificación (Bǔ)",
          "Punto de Alarma (Mù)",
        ],
        correct: 1,
      },

      // --- IG10 (Shǒusānlǐ) y IG11 (Qūchí) ---
      {
        text: "IG10 (Shǒusānlǐ - Tres Millas de la Mano) se ubica a 2 Cùn por debajo de IG11. ¿Para qué se usa clínicamente?",
        options: [
          "Regular Qi y sangre del brazo, tratar hombro y codo",
          "Tratar exclusivamente problemas oculares",
          "Bajar la fiebre",
          "Tonificar el Riñón",
        ],
        correct: 0,
      },
      {
        text: "¿Dónde se localiza IG11 (Qūchí - Estanque Curvo)?",
        options: [
          "En el extremo externo del pliegue del codo, al flexionar el brazo",
          "En la depresión entre el olécranon y el epicóndilo medial",
          "A 1 Cùn de la muñeca",
          "En el centro del pliegue del codo",
        ],
        correct: 0,
      },
      {
        text: "¿Cuál es una de las acciones principales de IG11 (Qūchí)?",
        options: [
          "Enfriar el calor, eliminar toxinas y tratar problemas de piel",
          "Tonificar el Yang de Riñón",
          "Regular el Jiao Medio",
          "Calmar la tos",
        ],
        correct: 0,
      },

      // --- IG14 (Bì Nào) y IG15 (Jiānyú) ---
      {
        text: "IG14 (Bì Nào - Músculo del Brazo) y IG15 (Jiānyú - Hueso del Hombro) son puntos clave para tratar:",
        options: [
          "Problemas locales de hombro y brazo (periartritis, parálisis)",
          "Dolor de muelas",
          "Estreñimiento crónico",
          "Tinnitus",
        ],
        correct: 0,
      },
      {
        text: "¿Dónde se localiza IG15 (Jiānyú)?",
        options: [
          "En la depresión anterior e inferior del acromion, al levantar el brazo",
          "En la punta del hombro, sobre el acromion",
          "En la axila",
          "En la espina de la escápula",
        ],
        correct: 0,
      },

      // --- IG18 (Fútū) y puntos faciales ---
      {
        text: "IG18 (Fútū - Protuberancia que Sobresale) se localiza en el cuello, a 3 Cùn lateral a la nuez de Adán. ¿Qué estructura se debe proteger en esta zona?",
        options: ["Arteria carótida y nervio vago", "Tráquea", "Esófago", "Glándula tiroides"],
        correct: 0,
      },
      {
        text: "¿Qué punto del meridiano de Intestino Grueso se encuentra a nivel del borde inferior de la nariz, en el surco nasolabial?",
        options: ["IG19 (Kǒuhéliáo)", "IG20 (Yíngxiāng)", "IG18 (Fútū)", "IG17 (Tiāndǐng)"],
        correct: 0,
      },

      // --- IG20 (Yíngxiāng) ---
      {
        text: "IG20 (Yíngxiāng - Bienvenida de la Fragancia) es el último punto del meridiano. ¿Dónde se ubica exactamente?",
        options: [
          "En el surco nasolabial, a nivel del punto medio del borde externo del ala de la nariz",
          "En el ángulo interno del ojo",
          "En la comisura de los labios",
          "En el entrecejo",
        ],
        correct: 0,
      },
      {
        text: "¿Para qué trastorno nasal es imprescindible el uso de IG20 (Yíngxiāng)?",
        options: [
          "Epistaxis (sangrado nasal)",
          "Congestión nasal, sinusitis y rinitis",
          "Desviación del tabique",
          "Pólipos nasales",
        ],
        correct: 1,
      },

      // ========== 5. FUNCIONES ESPECÍFICAS Y PUNTOS DE COMANDO ==========
      {
        text: "¿Cuál es el punto de Tonificación (Bǔ) del canal de Intestino Grueso?",
        options: ["IG1 (Shāngyáng)", "IG4 (Hégǔ)", "IG11 (Qūchí)", "IG6 (Piānlì)"],
        correct: 2,
      },
      {
        text: "¿Cuál es el punto de Dispersión (Xiè) del canal de Intestino Grueso?",
        options: ["IG2 (Èrjiān)", "IG4 (Hégǔ)", "IG11 (Qūchí)", "IG1 (Shāngyáng)"],
        correct: 0,
      },
      {
        text: "¿Qué punto del canal de Intestino Grueso se considera el 'Punto Río' (Jīng) y se usa para problemas de voz y fiebre?",
        options: ["IG4 (Hégǔ)", "IG5 (Yángxī)", "IG6 (Piānlì)", "IG11 (Qūchí)"],
        correct: 1,
      },
      {
        text: "¿Dónde se encuentra el punto de Alarma (Mù) del Intestino Grueso?",
        options: [
          "En el meridiano de Intestino Grueso (IG4)",
          "En el meridiano de Estómago (E25 - Tiānshū)",
          "En el meridiano de Pulmón (P1)",
          "En el meridiano de Bazo (B15)",
        ],
        correct: 1,
      },

      // ========== 6. SÍNTOMAS Y APLICACIONES CLÍNICAS ==========
      {
        text: "¿Cuál de los siguientes síntomas NO corresponde típicamente a un desequilibrio del meridiano de Intestino Grueso?",
        options: [
          "Dolor de muelas y garganta",
          "Estreñimiento o diarrea",
          "Dolor en el recorrido del brazo (hombro, codo, índice)",
          "Palpitaciones y ansiedad",
        ],
        correct: 3,
      },
      {
        text: "En la práctica clínica, ¿qué punto se utiliza comúnmente para el dolor de muelas del maxilar inferior?",
        options: ["IG4 (Hégǔ)", "E6 (Jiáchē)", "IG20 (Yíngxiāng)", "IG11 (Qūchí)"],
        correct: 0,
      },
      {
        text: "Además de tratar problemas locales, IG11 (Qūchí) combinado con IG4 (Hégǔ) es una fórmula clásica para:",
        options: [
          "Expulsar viento-calor y tratar fiebre",
          "Tonificar el Yang",
          "Drenar la humedad del Jiao Inferior",
          "Nutrir el Yin de Riñón",
        ],
        correct: 0,
      },
    ],
  },
  // Aquí puedes agregar más quizzes en el futuro (anatomía, auriculoterapia, etc.)
];
