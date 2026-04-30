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

  //Anatomia - terminologia
  {
    id: "anatomia-terminologia",
    title: "Anatomía - Terminología Esencial (Glosario Interactivo)",
    description:
      "Definiciones de los términos anatómicos fundamentales: posiciones, estructuras óseas, tipos de articulaciones, músculos y reparos anatómicos.",
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
      // SECCIÓN 2: HUESOS Y SUS PARTES
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

      // ==========================================
      // SECCIÓN 3: ARTICULACIONES
      // ==========================================
      {
        text: "¿Qué es una 'sinartrosis'?",
        options: [
          "Una articulación muy móvil como la cadera",
          "Una articulación inmóvil o fija, como las suturas del cráneo",
          "Una articulación semimóvil con disco cartilaginoso",
          "Una articulación que se ha luxado",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es una 'anfiartrosis'?",
        options: [
          "Una articulación completamente inmóvil",
          "Una articulación semimóvil, unida por cartílago, como la sínfisis púbica o los discos intervertebrales",
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
      {
        text: "¿Qué es una 'enartrosis'?",
        options: [
          "Un tipo de diartrosis donde una cabeza esférica encaja en una cavidad cóncava, permitiendo movimiento en todos los ejes (ej. cadera, hombro)",
          "Una articulación plana que solo permite deslizamiento",
          "Una articulación en bisagra como el codo",
          "Una articulación que une dos superficies planas",
        ],
        correct: 0,
      },
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
        text: "¿Qué son los 'ligamentos'?",
        options: [
          "Bandas de tejido conectivo fibroso que conectan hueso con hueso, dando estabilidad a la articulación",
          "Bandas que conectan músculo con hueso",
          "Vasos sanguíneos periarticulares",
          "Nervios que inervan la articulación",
        ],
        correct: 0,
      },
      {
        text: "¿Qué son los 'tendones'?",
        options: [
          "Bandas fibrosas que unen hueso con hueso",
          "Estructuras que conectan el músculo al hueso, transmitiendo la fuerza de contracción",
          "Almohadillas de cartílago dentro de la rodilla",
          "Vainas sinoviales que protegen los nervios",
        ],
        correct: 1,
      },

      // ==========================================
      // SECCIÓN 4: MÚSCULOS Y MOVIMIENTOS
      // ==========================================
      {
        text: "¿Qué caracteriza al 'músculo liso'?",
        options: [
          "Es voluntario y se inserta en los huesos",
          "Es estriado y forma el corazón",
          "Es involuntario y se encuentra en las paredes de las vísceras (vasos sanguíneos, intestinos)",
          "Es el responsable de mover las articulaciones",
        ],
        correct: 2,
      },
      {
        text: "¿Qué es un 'músculo agonista'?",
        options: [
          "El músculo que se opone al movimiento",
          "El músculo que estabiliza la articulación sin moverse",
          "El músculo o grupo muscular que produce la fuerza principal para un movimiento específico",
          "Un músculo paralizado",
        ],
        correct: 2,
      },
      {
        text: "¿Qué es un 'músculo antagonista'?",
        options: [
          "El que ayuda al agonista en el movimiento",
          "El que se relaja o alarga para permitir el movimiento del agonista",
          "El que fija la postura",
          "El que inicia el movimiento",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es el 'manguito rotador'?",
        options: [
          "Un conjunto de cuatro músculos que estabilizan la articulación de la cadera",
          "Un conjunto de cuatro músculos y sus tendones que estabilizan el hombro (supraespinoso, infraespinoso, redondo menor, subescapular)",
          "La vaina sinovial que envuelve el tendón del bíceps",
          "El ligamento cruzado de la rodilla",
        ],
        correct: 1,
      },
      {
        text: "¿Qué movimiento se conoce como 'abducción'?",
        options: [
          "Doblar una articulación disminuyendo el ángulo",
          "Alejar una extremidad de la línea media del cuerpo",
          "Girar el antebrazo para poner la palma hacia abajo",
          "Acercar una extremidad a la línea media",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es la 'flexión'?",
        options: [
          "Aumentar el ángulo de una articulación",
          "Alejar una parte del cuerpo",
          "Disminuir el ángulo de una articulación, acercando los segmentos corporales",
          "Rotar el tronco",
        ],
        correct: 2,
      },

      // ==========================================
      // SECCIÓN 5: COLUMNA VERTEBRAL Y TÉRMINOS ESPECÍFICOS
      // ==========================================
      {
        text: "¿Qué es una 'lordosis'?",
        options: [
          "Una desviación lateral de la columna",
          "Una curvatura fisiológica (o patológica) de la columna con concavidad posterior (cóncava hacia atrás) a nivel cervical y lumbar",
          "Una curvatura de concavidad anterior (joroba) a nivel torácico",
          "Una fractura de la vértebra",
        ],
        correct: 1,
      },
      {
        text: "¿Qué es una 'cifosis'?",
        options: [
          "Curvatura lateral de la columna",
          "Curvatura de concavidad anterior, normal a nivel torácico (y sacro), patológica si es excesiva (joroba)",
          "Curvatura lumbar excesiva",
          "Pérdida de la altura discal",
        ],
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
        text: "¿Qué se entiende por 'hernia discal'?",
        options: [
          "Calcificación del disco que suelda las vértebras",
          "Desplazamiento del núcleo pulposo del disco que puede presionar los nervios raquídeos",
          "Rotura de la apófisis transversa",
          "Inflamación de la articulación facetaria",
        ],
        correct: 1,
      },
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
    ],
  },

  // Meridiano de Pulmon
  {
    id: "meridiano-pulmon-completo",
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

  //  "title": "TEST ",
  {
    id: "TEST",
    title: "TEST China - Clase 1",
    description: "test",
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
    ],
  },
  // Aquí puedes agregar más quizzes en el futuro (anatomía, auriculoterapia, etc.)
];
