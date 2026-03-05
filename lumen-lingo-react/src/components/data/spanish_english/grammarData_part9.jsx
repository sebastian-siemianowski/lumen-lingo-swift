/**
 * SPANISH → ENGLISH GRAMMAR - PART 9
 * 4 categories, 15 questions each
 */

import { Target, Gift, Flame, Users } from "lucide-react";

export const part9Categories = {
  used_to_would: {
    name: "Used to vs Would",
    description: "Expresar hábitos y estados pasados",
    icon: Target,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "used_would_1",
        question: "I _____ _____ live in Mexico City when I was young.",
        translation: "Solía vivir en la Ciudad de México cuando era joven.",
        options: ["used to", "would", "use to", "was used to"],
        correct: "used to",
        explanation: "Usamos 'used to' para ESTADOS o HÁBITOS pasados que ya no existen. Aquí describe dónde vivías antes (estado pasado). NO podemos usar 'would' para estados, solo para acciones repetidas. En español 'solía' o imperfecto 'vivía' expresan lo mismo. La forma 'used to' siempre lleva 'd' al final, nunca 'use to' en afirmativo."
      },
      {
        id: "used_would_2",
        question: "My grandmother _____ tell us stories every night.",
        translation: "Mi abuela nos contaba historias cada noche.",
        options: ["would", "used to", "use to", "was"],
        correct: "would",
        explanation: "Para ACCIONES repetidas en el pasado podemos usar 'would' o 'used to'. Aquí 'would tell' describe un hábito nostálgico de contar cuentos. Esta forma tiene tono más literario y emotivo que 'used to'. En español el imperfecto 'contaba' captura esta repetición pasada. 'Would' en este contexto evoca memorias cálidas de rutinas familiares perdidas."
      },
      {
        id: "used_would_3",
        question: "There _____ _____ be a park here before they built the mall.",
        translation: "Solía haber un parque aquí antes de que construyeran el centro comercial.",
        options: ["used to", "would", "use to", "was"],
        correct: "used to",
        explanation: "Para describir estados o existencia pasada que cambió, SOLO 'used to' funciona. No podemos decir 'would be' en este contexto. La construcción 'there used to be' describe algo que existía pero ya no. En español 'solía haber' o 'había' (imperfecto) también marcan esta existencia pasada ya desaparecida."
      },
      {
        id: "used_would_4",
        question: "When I was a student, I _____ stay up late studying.",
        translation: "Cuando era estudiante, me quedaba despierto hasta tarde estudiando.",
        options: ["would", "used to", "use to", "will"],
        correct: "would",
        explanation: "Para acciones habituales específicas del pasado, 'would' funciona bien. Esta forma evoca memorias de malos hábitos estudiantiles. También podríamos usar 'used to' pero 'would' suena más nostálgico. En español el imperfecto 'me quedaba' describe esta rutina nocturna. Ambas formas permiten reminiscencia sobre comportamientos pasados."
      },
      {
        id: "used_would_5",
        question: "Did you _____ _____ play soccer when you were younger?",
        translation: "¿Solías jugar fútbol cuando eras más joven?",
        options: ["use to", "used to", "would", "using to"],
        correct: "use to",
        explanation: "En PREGUNTAS con 'did' usamos 'use to' SIN la 'd' porque 'did' ya marca el pasado. Esta es excepción importante a la regla. Nunca decimos 'did you used to'. En español '¿solías?' o '¿jugabas?' son las formas. El auxiliar 'did' absorbe la marca de pasado, dejando 'use' en forma base."
      },
      {
        id: "used_would_6",
        question: "She _____ _____ have long hair, but now it's short.",
        translation: "Ella solía tener cabello largo, pero ahora es corto.",
        options: ["used to", "would", "use to", "was"],
        correct: "used to",
        explanation: "Para describir estados físicos pasados que cambiaron, solo 'used to' funciona. El contraste con 'but now' enfatiza el cambio. No usamos 'would' para estados. En español 'solía tener' o 'tenía' (imperfecto) marcan el estado anterior. Esta estructura es común para describir transformaciones personales a lo largo del tiempo."
      },
      {
        id: "used_would_7",
        question: "We _____ go to the beach every summer as children.",
        translation: "Íbamos a la playa cada verano cuando éramos niños.",
        options: ["would", "used to", "use to", "will"],
        correct: "would",
        explanation: "Para tradiciones familiares repetidas, 'would' evoca nostalgia. También podríamos usar 'used to' pero 'would' tiene tono más cálido y literario. En español el imperfecto 'íbamos' describe estas vacaciones recurrentes. Esta forma gramatical ayuda a compartir memorias felices de infancia con tonalidad emotiva apropiada."
      },
      {
        id: "used_would_8",
        question: "He didn't _____ _____ like vegetables, but now he does.",
        translation: "No le gustaban las verduras, pero ahora sí.",
        options: ["use to", "used to", "would", "using"],
        correct: "use to",
        explanation: "En negativo con 'didn't' usamos 'use to' sin 'd'. Esta es misma regla que en preguntas. Para gustos pasados solo 'used to' funciona, no 'would'. En español 'no le gustaban' usa imperfecto. El contraste 'but now he does' muestra cambio de preferencias alimenticias, común al madurar."
      },
      {
        id: "used_would_9",
        question: "My father _____ take us fishing on weekends.",
        translation: "Mi padre nos llevaba a pescar los fines de semana.",
        options: ["would", "used to", "use to", "will"],
        correct: "would",
        explanation: "Para actividades recreativas repetidas del pasado, 'would' evoca memorias paternas cálidas. Esta forma tiene cualidad nostálgica especial. También funciona 'used to' pero 'would' añade afecto. En español 'llevaba' o 'nos llevaba' (imperfecto) describe estas excursiones familiares. Esta estructura permite honrar tradiciones familiares y momentos de conexión."
      },
      {
        id: "used_would_10",
        question: "There _____ _____ be more trees in this neighborhood.",
        translation: "Solía haber más árboles en este vecindario.",
        options: ["used to", "would", "use to", "was used to"],
        correct: "used to",
        explanation: "Para cambios ambientales o de paisaje urbano, solo 'used to' funciona. Describe existencia pasada que desapareció. En español 'solía haber' o 'había más' marcan esta pérdida ecológica. Esta estructura permite lamentar cambios en nuestro entorno, expresando nostalgia por cómo las cosas eran antes del desarrollo."
      },
      {
        id: "used_would_11",
        question: "I _____ _____ be afraid of dogs, but not anymore.",
        translation: "Solía tenerle miedo a los perros, pero ya no.",
        options: ["used to", "would", "use to", "was"],
        correct: "used to",
        explanation: "Para emociones o miedos pasados que superamos, usamos 'used to'. Este estado emocional cambió con tiempo. No usamos 'would' para emociones. En español 'solía tenerle miedo' o 'les tenía miedo' describen este miedo infantil superado. Esta forma permite hablar de crecimiento personal y miedos conquistados."
      },
      {
        id: "used_would_12",
        question: "Every morning, he _____ run 5 kilometers before breakfast.",
        translation: "Cada mañana, corría 5 kilómetros antes del desayuno.",
        options: ["would", "used to", "use to", "will"],
        correct: "would",
        explanation: "Para rutinas específicas y disciplinadas del pasado, 'would' añade tono de dedicación. La frase 'every morning' enfatiza la regularidad impresionante. También funciona 'used to' pero 'would' suena más admirativo. En español el imperfecto 'corría' describe este régimen. Esta estructura reconoce hábitos saludables pasados que quizás ya no mantenemos."
      },
      {
        id: "used_would_13",
        question: "She _____ _____ work for that company years ago.",
        translation: "Ella solía trabajar para esa compañía hace años.",
        options: ["used to", "would", "use to", "was"],
        correct: "used to",
        explanation: "Para empleos o trabajos pasados que terminaron, usamos 'used to'. Describe empleo anterior que ya no tiene. En español 'solía trabajar' o 'trabajaba' (imperfecto) marcan este empleo pasado. Esta forma es común en contexto de CV o al explicar nuestra historia laboral y cómo hemos cambiado de carreras."
      },
      {
        id: "used_would_14",
        question: "Whenever it rained, we _____ play board games inside.",
        translation: "Cada vez que llovía, jugábamos juegos de mesa adentro.",
        options: ["would", "used to", "use to", "will"],
        correct: "would",
        explanation: "Con 'whenever' (cada vez que) preferimos 'would' para hábitos condicionales. Esta estructura describe lo que hacíamos en circunstancias específicas repetidas. En español el imperfecto 'jugábamos' también captura esta rutina dependiente del clima. 'Would' aquí evoca memorias de días lluviosos convertidos en diversión familiar."
      },
      {
        id: "used_would_15",
        question: "I _____ _____ believe in ghosts when I was a child.",
        translation: "Solía creer en fantasmas cuando era niño.",
        options: ["used to", "would", "use to", "was"],
        correct: "used to",
        explanation: "Para creencias o opiniones pasadas que cambiaron, solo 'used to' funciona. Describe estado mental de la niñez que madurez alteró. En español 'solía creer' o 'creía' expresan esta convicción infantil perdida. Esta forma permite hablar de cómo nuestro pensamiento evoluciona, compartiendo creencias ingenuas que una vez tuvimos pero abandonamos al crecer."
      }
    ]
  },

  wish_regret_structures: {
    name: "Deseos y Arrepentimientos",
    description: "I wish, if only - expresar anhelos",
    icon: Gift,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "wish_1",
        question: "I wish I _____ speak Chinese fluently.",
        translation: "Desearía poder hablar chino con fluidez.",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "Después de 'I wish' para situaciones presentes irreales usamos pasado simple o modales pasados. Con habilidades usamos 'could' (no 'can'). Esto expresa deseo de algo que NO es realidad ahora. En español 'desearía poder' o subjuntivo 'pudiera' también marca irrealidad. Esta estructura permite expresar anhelos sobre capacidades que no poseemos."
      },
      {
        id: "wish_2",
        question: "I wish I _____ more money to travel the world.",
        translation: "Desearía tener más dinero para viajar por el mundo.",
        options: ["had", "have", "will have", "would have"],
        correct: "had",
        explanation: "Después de 'I wish' usamos pasado simple 'had' (no presente 'have') para situaciones actuales irreales. Esto indica que NO tenemos suficiente dinero ahora. En español subjuntivo 'tuviera' o condicional 'tendría' expresan este deseo. Esta estructura común expresa frustraciones económicas que limitan nuestros sueños de viajar."
      },
      {
        id: "wish_3",
        question: "I wish you _____ stop making so much noise!",
        translation: "¡Desearía que dejaras de hacer tanto ruido!",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Para quejas o irritación sobre comportamiento presente de otros usamos 'wish + would'. Esto expresa molestia y deseo de cambio. Es más fuerte que simple 'wish you stopped'. En español subjuntivo 'dejaras' o 'pudieras dejar' capturan esta frustración. Esta forma permite expresar molestia de manera gramaticalmente sofisticada pero clara."
      },
      {
        id: "wish_4",
        question: "If only I _____ studied harder for the exam!",
        translation: "¡Si tan solo hubiera estudiado más para el examen!",
        options: ["had", "have", "would have", "did"],
        correct: "had",
        explanation: "La expresión 'if only' es más fuerte que 'I wish'. Para arrepentimientos pasados usamos pasado perfecto 'had studied'. Esto lamenta algo que NO hicimos. En español 'hubiera estudiado' (pluscuamperfecto subjuntivo) también expresa este pesar. Esta estructura comunica remordimiento sobre decisiones pasadas que afectaron resultados importantes."
      },
      {
        id: "wish_5",
        question: "I wish it _____ raining right now.",
        translation: "Desearía que no estuviera lloviendo ahora mismo.",
        options: ["wasn't", "isn't", "won't be", "wouldn't be"],
        correct: "wasn't",
        explanation: "Para situaciones presentes que queremos diferentes usamos pasado simple después de 'wish'. Aquí 'wasn't raining' (no 'isn't raining') expresa deseo sobre clima actual. En español subjuntivo imperfecto 'no estuviera lloviendo' también usa tiempo pasado para presente irreal. Esta estructura expresa descontento con circunstancias presentes fuera de nuestro control."
      },
      {
        id: "wish_6",
        question: "If only I _____ listened to your advice!",
        translation: "¡Si tan solo hubiera escuchado tu consejo!",
        options: ["had", "have", "would", "did"],
        correct: "had",
        explanation: "El arrepentimiento pasado con 'if only' usa pasado perfecto 'had listened'. Esto lamenta NO haber escuchado cuando debíamos. Es admisión de error pasado. En español 'hubiera escuchado' también marca este pesar. Esta forma permite reconocer humildemente que rechazar buenos consejos tuvo consecuencias negativas que ahora lamentamos."
      },
      {
        id: "wish_7",
        question: "I wish you _____ here with me right now.",
        translation: "Desearía que estuvieras aquí conmigo ahora mismo.",
        options: ["were", "are", "will be", "would be"],
        correct: "were",
        explanation: "Con el verbo 'be' después de 'wish' usamos 'were' para TODAS las personas (incluso con I, he, she). Esta es forma subjuntiva especial del inglés. Expresa deseo de compañía actual. En español subjuntivo 'estuvieras' también marca anhelo. Esta frase emotiva expresa soledad y deseo de cercanía física con seres queridos."
      },
      {
        id: "wish_8",
        question: "She wishes she _____ have accepted that job offer.",
        translation: "Ella desea haber aceptado esa oferta de trabajo.",
        options: ["had", "has", "would", "could"],
        correct: "had",
        explanation: "Para arrepentimientos pasados en tercera persona usamos 'wishes' (presente) + 'had' + participio. Ella lamenta decisión pasada de rechazar trabajo. En español 'desea haber aceptado' usa infinitivo compuesto. Esta estructura expresa remordimiento sobre oportunidades profesionales perdidas que ahora reconocemos fueron errores."
      },
      {
        id: "wish_9",
        question: "I wish I _____ taller - I'm too short!",
        translation: "Desearía ser más alto - ¡soy demasiado bajo!",
        options: ["were", "am", "will be", "would be"],
        correct: "were",
        explanation: "Para deseos sobre características permanentes actuales usamos 'were' (forma subjuntiva). Esto expresa deseo imposible sobre atributo físico. Es más emocional que racional. En español subjuntivo 'fuera' también expresa este deseo irrealizable. Esta estructura permite expresar insatisfacciones con aspectos inmutables de nosotros mismos."
      },
      {
        id: "wish_10",
        question: "If only we _____ more time to finish the project!",
        translation: "¡Si tan solo tuviéramos más tiempo para terminar el proyecto!",
        options: ["had", "have", "will have", "would have"],
        correct: "had",
        explanation: "Para deseo sobre situación presente usamos pasado simple 'had' después de 'if only'. Esto expresa que NO tenemos suficiente tiempo ahora. Es más enfático que 'I wish'. En español subjuntivo 'tuviéramos' marca esta carencia actual. Esta frase común expresa presión de deadlines y el universal deseo de más tiempo para hacer las cosas bien."
      },
      {
        id: "wish_11",
        question: "I wish I _____ have said those hurtful words.",
        translation: "Desearía no haber dicho esas palabras hirientes.",
        options: ["hadn't", "haven't", "didn't", "don't"],
        correct: "hadn't",
        explanation: "Para arrepentimiento pasado usamos negativo 'hadn't' + participio. Lamentamos palabras ya dichas que no podemos retirar. En español 'no hubiera dicho' (pluscuamperfecto subjuntivo) también expresa este pesar. Esta estructura permite pedir perdón indirectamente reconociendo que nuestras palabras causaron dolor que ahora lamentamos sinceramente."
      },
      {
        id: "wish_12",
        question: "She wishes she _____ live closer to her family.",
        translation: "Ella desea vivir más cerca de su familia.",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "Con 'wishes' (tercera persona) para situación presente irreal usamos 'could'. Esto expresa deseo de posibilidad que circunstancias actuales no permiten. En español subjuntivo 'pudiera vivir' también marca este anhelo. Esta frase refleja realidad de muchos que viven lejos de familia por trabajo, deseando cercanía que la distancia niega."
      },
      {
        id: "wish_13",
        question: "I wish people _____ be more kind to each other.",
        translation: "Desearía que la gente fuera más amable entre sí.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Para deseos sobre comportamiento general de otros usamos 'would'. Esto expresa frustración con cómo las personas actúan. Es deseo social amplio no sobre persona específica. En español subjuntivo 'fuera' también expresa este ideal. Esta estructura permite expresar valores y cómo desearíamos que el mundo funcionara diferente."
      },
      {
        id: "wish_14",
        question: "If only I _____ take back what I said yesterday!",
        translation: "¡Si tan solo pudiera retirar lo que dije ayer!",
        options: ["could", "can", "would", "will"],
        correct: "could",
        explanation: "Para imposibilidad presente de cambiar el pasado usamos 'could'. Esto expresa deseo de poder viajar en el tiempo y deshacer acciones. Es emocionalmente potente. En español 'pudiera retirar' también marca esta imposibilidad. Esta estructura comunica el dolor de no poder borrar errores pasados, reconociendo que las palabras una vez dichas no pueden recuperarse."
      },
      {
        id: "wish_15",
        question: "I wish I _____ have to work on weekends.",
        translation: "Desearía no tener que trabajar los fines de semana.",
        options: ["didn't", "don't", "wouldn't", "won't"],
        correct: "didn't",
        explanation: "Para obligaciones presentes que deseamos no tener usamos 'didn't' después de 'wish'. Esto expresa deseo de no tener que trabajar ahora. En español subjuntivo 'no tuviera que' también marca este deseo. Esta queja común sobre balance vida-trabajo refleja el anhelo universal de más tiempo libre para descanso y familia."
      }
    ]
  },

  causative_have_get: {
    name: "Estructuras Causativas",
    description: "Have/get something done - hacer que otros hagan",
    icon: Flame,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "caus_1",
        question: "I need to _____ my car _____ this week.",
        translation: "Necesito hacer reparar mi auto esta semana.",
        options: ["have / repaired", "have / repair", "get / repair", "make / repaired"],
        correct: "have / repaired",
        explanation: "La estructura causativa 'have + objeto + participio pasado' significa que OTROS hacen el servicio por ti. No reparas tú mismo sino que pagas a un mecánico. En español 'hacer reparar' o 'mandar a reparar' expresan esta delegación. Esta construcción es práctica para hablar de servicios profesionales que contratamos regularmente."
      },
      {
        id: "caus_2",
        question: "She's going to _____ her hair _____ tomorrow.",
        translation: "Ella va a cortarse el cabello mañana.",
        options: ["get / cut", "get / cutting", "have / cutting", "make / cut"],
        correct: "get / cut",
        explanation: "La estructura 'get + objeto + participio' es variante más informal de 'have something done'. Ambas significan que otra persona hace el corte (estilista). En español 'cortarse el pelo' es reflexivo pero implica que peluquero lo hace. Esta forma describe visitas al salón donde profesionales brindan servicios de belleza."
      },
      {
        id: "caus_3",
        question: "We _____ our house _____ last year.",
        translation: "Hicimos pintar nuestra casa el año pasado.",
        options: ["had / painted", "had / paint", "got / paint", "made / painted"],
        correct: "had / painted",
        explanation: "Pasado simple de la causativa: 'had + objeto + participio'. Contratamos pintores para hacer el trabajo. No pintamos nosotros mismos. En español 'hicimos pintar' o 'mandamos a pintar' delegan la acción. Esta estructura es común para proyectos de renovación del hogar que requieren profesionales especializados."
      },
      {
        id: "caus_4",
        question: "I must _____ my eyes _____ soon - I can't see well.",
        translation: "Debo hacerme revisar los ojos pronto - no veo bien.",
        options: ["have / tested", "have / test", "get / test", "make / tested"],
        correct: "have / tested",
        explanation: "Con 'have + eyes + tested' indicamos que doctor u optometrista hace el examen. Es chequeo médico profesional. En español 'hacerme revisar' o 'mandar a revisar' delegan al profesional. Esta construcción es esencial para hablar de cuidado médico preventivo y consultas de salud que todos necesitamos periódicamente."
      },
      {
        id: "caus_5",
        question: "He wants to _____ his computer _____ before it crashes.",
        translation: "Él quiere hacer reparar su computadora antes de que se dañe.",
        options: ["get / fixed", "get / fix", "have / fix", "make / fixed"],
        correct: "get / fixed",
        explanation: "Después de 'want to' usamos infinitivo causativo 'get + objeto + participio'. El técnico hará la reparación. La frase 'before it crashes' muestra previsión inteligente. En español 'hacer reparar' anticipa el problema. Esta forma refleja mantenimiento preventivo, abordando problemas antes de que se vuelvan crisis."
      },
      {
        id: "caus_6",
        question: "Where do you _____ your car _____ usually?",
        translation: "¿Dónde sueles hacer lavar tu auto?",
        options: ["have / washed", "have / wash", "get / wash", "make / washed"],
        correct: "have / washed",
        explanation: "En preguntas la estructura causativa se mantiene: 'have + objeto + participio'. Esta pregunta busca recomendación de servicio de lavado. El adverbio 'usually' indica es rutina regular. En español '¿dónde lo lavas?' puede ser ambiguo entre hacerlo tú o pagar servicio, pero el inglés con causativa es claro sobre delegar."
      },
      {
        id: "caus_7",
        question: "She's _____ her wedding dress _____ by a famous designer.",
        translation: "Ella está haciendo diseñar su vestido de novia por un diseñador famoso.",
        options: ["having / made", "having / make", "getting / make", "making / made"],
        correct: "having / made",
        explanation: "La causativa en presente continuo 'is having + objeto + participio' describe proceso en curso. Un diseñador famoso crea el vestido a medida. En español 'está haciendo diseñar' o 'está mandando a hacer' describen esta comisión especial. Esta construcción refleja preparativos importantes donde contratamos talento específico."
      },
      {
        id: "caus_8",
        question: "I _____ my teeth _____ every six months regularly.",
        translation: "Me hago limpiar los dientes cada seis meses regularmente.",
        options: ["have / cleaned", "have / clean", "get / clean", "make / cleaned"],
        correct: "have / cleaned",
        explanation: "Para chequeos dentales rutinarios usamos causativa 'have + teeth + cleaned'. El dentista hace la limpieza profesional. Esta oración describe cuidado dental preventivo. En español 'me los limpio' es reflexivo pero implica que dentista hace el trabajo. La frecuencia semestral es recomendación estándar dental."
      },
      {
        id: "caus_9",
        question: "They're going to _____ their photos _____ professionally.",
        translation: "Van a hacer tomar sus fotos profesionalmente.",
        options: ["have / taken", "have / take", "get / take", "make / taken"],
        correct: "have / taken",
        explanation: "Futuro causativo 'going to have + objeto + participio' indica planes de contratar fotógrafo profesional. El adverbio 'professionally' refuerza que es servicio experto. En español 'hacer tomar' o 'mandarse a tomar' delegan al fotógrafo. Esta estructura es común para eventos especiales que requieren calidad profesional."
      },
      {
        id: "caus_10",
        question: "We should _____ the roof _____ before winter comes.",
        translation: "Deberíamos hacer reparar el techo antes de que llegue el invierno.",
        options: ["get / repaired", "get / repair", "have / repair", "make / repaired"],
        correct: "get / repaired",
        explanation: "Después de modal 'should' usamos infinitivo causativo 'get + objeto + participio'. Esto es recomendación sobre contratar servicio. La urgencia temporal 'before winter' motiva la acción. En español 'hacer reparar' también delega. Esta estructura refleja planificación hogareña responsable anticipando necesidades estacionales."
      },
      {
        id: "caus_11",
        question: "I'm _____ my smartphone _____ right now at the shop.",
        translation: "Estoy haciendo reparar mi smartphone ahora mismo en la tienda.",
        options: ["having / repaired", "having / repair", "getting / repair", "making / repaired"],
        correct: "having / repaired",
        explanation: "Causativa en presente continuo 'am having + objeto + participio' describe servicio en progreso ahora. El técnico está trabajando en ello. En español 'estoy haciendo reparar' también indica proceso actual. Esta forma comunica que estamos sin dispositivo temporalmente mientras recibe atención profesional."
      },
      {
        id: "caus_12",
        question: "How often do you _____ your oil _____?",
        translation: "¿Cada cuánto haces cambiar tu aceite?",
        options: ["have / changed", "have / change", "get / change", "make / changed"],
        correct: "have / changed",
        explanation: "Esta pregunta sobre frecuencia de mantenimiento usa causativa. Es servicio automotriz esencial regular. En español '¿cada cuánto lo cambias?' puede ser ambiguo pero causativa inglesa clarifica que mecánico lo hace. Esta consulta es común entre conductores compartiendo consejos sobre cuidado preventivo de vehículos."
      },
      {
        id: "caus_13",
        question: "She wants to _____ her nails _____ for the wedding.",
        translation: "Ella quiere hacerse arreglar las uñas para la boda.",
        options: ["get / done", "get / do", "have / do", "make / done"],
        correct: "get / done",
        explanation: "La expresión 'get nails done' es idiomática para manicura profesional. El participio 'done' es genérico para servicios de belleza. En español 'hacerse arreglar' o 'mandarse a hacer' las uñas delega al profesional. Esta preparación es común antes de eventos especiales donde la apariencia cuidada es importante."
      },
      {
        id: "caus_14",
        question: "We _____ our documents _____ yesterday at the office.",
        translation: "Hicimos traducir nuestros documentos ayer en la oficina.",
        options: ["had / translated", "had / translate", "got / translate", "made / translated"],
        correct: "had / translated",
        explanation: "Pasado de causativa 'had + objeto + participio' para servicio completado. Traductor profesional hizo el trabajo. En español 'hicimos traducir' o 'mandamos a traducir' describen esta contratación. Esta estructura es necesaria en contextos oficiales donde traducciones certificadas requieren profesionales acreditados, no podemos hacerlas nosotros."
      },
      {
        id: "caus_15",
        question: "You should _____ your vision _____ if you have headaches.",
        translation: "Deberías hacerte revisar la vista si tienes dolores de cabeza.",
        options: ["have / checked", "have / check", "get / check", "make / checked"],
        correct: "have / checked",
        explanation: "Esta recomendación médica usa causativa con modal 'should have + objeto + participio'. Oftalmólogo hará el examen profesional. En español 'hacerte revisar' delega al especialista. Los dolores de cabeza frecuentes pueden indicar problemas visuales, y esta estructura aconseja buscar evaluación profesional apropiada."
      }
    ]
  }
};

export default part9Categories;