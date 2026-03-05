
/**
 * SPANISH → ENGLISH GRAMMAR - PART 12
 * 4 categories, 15 questions each
 */

import { Compass, Coffee, Headphones, Briefcase, Award } from "lucide-react";

export const part12Categories = {
  adverbs_of_frequency: {
    name: "Adverbios de Frecuencia",
    description: "Always, usually, sometimes - posiciones correctas",
    icon: Compass,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "adv_freq_1",
        question: "She _____ goes to the gym in the morning.",
        translation: "Ella siempre va al gimnasio en la mañana.",
        options: ["always", "never", "rarely", "sometimes"],
        correct: "always",
        explanation: "Los adverbios de frecuencia como 'always' (siempre) van ANTES del verbo principal. Esta es la posición estándar en inglés. En español 'siempre' puede ir antes o después del verbo con más flexibilidad. La palabra 'always' indica que es una rutina que ocurre sin excepciones, mostrando disciplina constante en sus hábitos de ejercicio."
      },
      {
        id: "adv_freq_2",
        question: "I _____ drink coffee - I prefer tea instead.",
        translation: "Nunca tomo café - prefiero el té.",
        options: ["never", "always", "usually", "often"],
        correct: "never",
        explanation: "El adverbio negativo 'never' (nunca) va antes del verbo principal 'drink'. En español 'nunca' también puede ir antes o después del verbo. La estructura inglesa es más rígida en cuanto a la posición del adverbio. Esta preferencia absoluta por el té sobre el café muestra gustos personales bien definidos."
      },
      {
        id: "adv_freq_3",
        question: "They _____ arrive late to class on Mondays.",
        translation: "Usualmente llegan tarde a clase los lunes.",
        options: ["usually", "never", "always", "rarely"],
        correct: "usually",
        explanation: "El adverbio 'usually' (usualmente) se coloca antes del verbo principal 'arrive'. Indica alta frecuencia pero no absoluta como 'always'. En español 'usualmente' tiene más libertad de posición. Este patrón de tardanza los lunes puede reflejar dificultad común de empezar la semana laboral después del fin de semana."
      },
      {
        id: "adv_freq_4",
        question: "We _____ eat out on weekends - maybe once a month.",
        translation: "Rara vez comemos fuera los fines de semana - tal vez una vez al mes.",
        options: ["rarely", "always", "often", "usually"],
        correct: "rarely",
        explanation: "El adverbio 'rarely' (rara vez) va antes del verbo e indica muy baja frecuencia. La explicación 'once a month' confirma que es poco frecuente. En español 'rara vez' también indica escasez de ocurrencia. Esta baja frecuencia puede ser por razones económicas o preferencia por cocinar en casa."
      },
      {
        id: "adv_freq_5",
        question: "He is _____ on time for appointments.",
        translation: "Él siempre es puntual para las citas.",
        options: ["always", "never", "sometimes", "rarely"],
        correct: "always",
        explanation: "Con el verbo 'be' (is/are/am) el adverbio de frecuencia va DESPUÉS, no antes. Decimos 'is always' no 'always is'. Esta es excepción importante. En español también va después: 'es siempre'. Esta puntualidad consistente demuestra respeto por el tiempo de otros y profesionalismo en todas sus interacciones."
      },
      {
        id: "adv_freq_6",
        question: "I _____ go swimming - about three times a week.",
        translation: "Frecuentemente voy a nadar - como tres veces por semana.",
        options: ["often", "never", "rarely", "seldom"],
        correct: "often",
        explanation: "El adverbio 'often' (frecuentemente) indica regularidad alta. Va antes del verbo principal 'go'. La especificación 'three times a week' cuantifica exactamente qué significa 'often' en este contexto. Esta actividad regular de natación muestra compromiso con la salud y el ejercicio cardiovascular."
      },
      {
        id: "adv_freq_7",
        question: "She has _____ been to Europe before this trip.",
        translation: "Ella nunca ha estado en Europa antes de este viaje.",
        options: ["never", "always", "often", "usually"],
        correct: "never",
        explanation: "Con presente perfecto 'has been' el adverbio 'never' va ENTRE el auxiliar 'has' y el participio 'been'. Esta posición es diferente de verbos simples. En español 'nunca ha estado' mantiene orden similar. Esta es su primera experiencia europea, lo que hace el viaje especialmente emocionante y significativo."
      },
      {
        id: "adv_freq_8",
        question: "We _____ have dinner together as a family.",
        translation: "A veces cenamos juntos como familia.",
        options: ["sometimes", "never", "always", "rarely"],
        correct: "sometimes",
        explanation: "El adverbio 'sometimes' (a veces) indica frecuencia media e inconsistente. Va antes del verbo principal 'have'. En español 'a veces' tiene posición flexible. Esta frecuencia parcial de cenas familiares refleja la realidad de horarios ocupados modernos donde reunirse no siempre es posible."
      },
      {
        id: "adv_freq_9",
        question: "My parents are _____ very supportive of my decisions.",
        translation: "Mis padres siempre son muy apoyadores de mis decisiones.",
        options: ["always", "never", "sometimes", "rarely"],
        correct: "always",
        explanation: "Nuevamente, con verbo 'be' el adverbio va después: 'are always'. El adjetivo 'supportive' describe su actitud constante. En español 'son siempre' también coloca el adverbio después del verbo. Este apoyo incondicional parental crea base de confianza importante para tomar riesgos y crecer."
      },
      {
        id: "adv_freq_10",
        question: "Do you _____ check your email before breakfast?",
        translation: "¿Usualmente revisas tu email antes del desayuno?",
        options: ["usually", "never", "always", "rarely"],
        correct: "usually",
        explanation: "En preguntas el adverbio va DESPUÉS del sujeto: 'Do you usually check'. No va al principio ni al final. En español '¿usualmente revisas?' tiene más flexibilidad. Este hábito matutino de revisar email inmediatamente refleja la conectividad constante de la vida moderna donde el trabajo invade el tiempo personal."
      },
      {
        id: "adv_freq_11",
        question: "He _____ complains about anything - he's very positive.",
        translation: "Él rara vez se queja de nada - es muy positivo.",
        options: ["rarely", "always", "often", "usually"],
        correct: "rarely",
        explanation: "El adverbio 'rarely' (rara vez) antes del verbo indica baja frecuencia de quejas. La explicación posterior confirma su actitud positiva general. En español 'rara vez se queja' también expresa esta disposición optimista. Esta característica de personalidad que evita quejarse muestra madurez emocional y perspectiva positiva de vida."
      },
      {
        id: "adv_freq_12",
        question: "I can _____ understand her accent when she speaks fast.",
        translation: "Rara vez puedo entender su acento cuando habla rápido.",
        options: ["rarely", "always", "often", "usually"],
        correct: "rarely",
        explanation: "Con verbos modales como 'can' el adverbio va DESPUÉS del modal: 'can rarely understand'. Esta posición es específica con modales. En español 'rara vez puedo' también separa el adverbio del verbo principal. La velocidad del habla combinada con acento fuerte crea barrera de comprensión real."
      },
      {
        id: "adv_freq_13",
        question: "They _____ travel abroad for vacation every year.",
        translation: "Normalmente viajan al extranjero de vacaciones cada año.",
        options: ["normally", "never", "rarely", "seldom"],
        correct: "normally",
        explanation: "El adverbio 'normally' (normalmente) indica que es su patrón típico aunque puede haber excepciones. Va antes del verbo 'travel'. La frase 'every year' refuerza esta regularidad. Esta costumbre de viajes anuales internacionales muestra tanto recursos económicos como valoración de experiencias culturales diversas."
      },
      {
        id: "adv_freq_14",
        question: "She will _____ forget this special moment.",
        translation: "Ella nunca olvidará este momento especial.",
        options: ["never", "always", "sometimes", "often"],
        correct: "never",
        explanation: "Con futuro simple 'will' el adverbio va DESPUÉS: 'will never forget'. Esta construcción es común para promesas emocionales sobre memoria. En español 'nunca olvidará' también usa negación absoluta. La intensidad del momento garantiza que quedará grabado permanentemente en la memoria emocional."
      },
      {
        id: "adv_freq_15",
        question: "I have _____ seen such beautiful scenery in my life!",
        translation: "¡Nunca he visto paisaje tan hermoso en mi vida!",
        options: ["never", "always", "often", "usually"],
        correct: "never",
        explanation: "Con presente perfecto el adverbio 'never' va entre 'have' y el participio 'seen'. Esta posición intermedia es consistente con tiempos compuestos. En español 'nunca he visto' mantiene estructura similar. La exclamación enfatiza que esta experiencia visual supera todas las anteriores en belleza."
      }
    ]
  },

  both_either_neither: {
    name: "Both, Either, Neither",
    description: "Expresar opciones dobles y elecciones",
    icon: Coffee,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "both_either_1",
        question: "_____ of my parents speak English fluently.",
        translation: "Ambos de mis padres hablan inglés con fluidez.",
        options: ["Both", "Either", "Neither", "None"],
        correct: "Both",
        explanation: "Usamos 'both' (ambos) cuando hablamos de DOS elementos y AMBOS aplican. Siempre va con verbo en plural porque nos referimos a dos personas. En español 'ambos' funciona igual. Esta construcción enfatiza que no es solo uno sino los dos padres quienes tienen esta habilidad lingüística."
      },
      {
        id: "both_either_2",
        question: "You can choose _____ the red or the blue shirt.",
        translation: "Puedes elegir la camisa roja o la azul.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "Usamos 'either' (cualquiera de los dos) cuando hay DOS opciones y puedes elegir UNA. La estructura 'either...or' presenta las dos alternativas. En español 'cualquiera' o simplemente 'o' conecta opciones. Esta construcción da libertad de elección entre dos posibilidades específicas sin favorecer ninguna."
      },
      {
        id: "both_either_3",
        question: "_____ of the answers is correct - try again.",
        translation: "Ninguna de las respuestas es correcta - intenta de nuevo.",
        options: ["Neither", "Both", "Either", "None"],
        correct: "Neither",
        explanation: "Usamos 'neither' (ninguno de los dos) para DOS opciones cuando NINGUNA es válida. Va con verbo singular 'is' porque aunque son dos, nos referimos a cada uno individualmente. En español 'ninguna' también es negativo. Esta corrección clara indica que ambas opciones están equivocadas y necesita pensar en alternativa diferente."
      },
      {
        id: "both_either_4",
        question: "_____ my brother and I love playing soccer together.",
        translation: "Tanto mi hermano como yo amamos jugar fútbol juntos.",
        options: ["Both", "Either", "Neither", "Each"],
        correct: "Both",
        explanation: "La estructura 'both...and' (tanto...como) conecta dos sujetos que comparten la misma característica. El verbo va en plural 'love' porque hay dos personas. En español 'tanto...como' funciona similar. Esta construcción enfatiza que el amor por el fútbol es sentimiento compartido que une a los hermanos."
      },
      {
        id: "both_either_5",
        question: "I don't like _____ of those options available.",
        translation: "No me gusta ninguna de esas opciones disponibles.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "En oraciones negativas con 'don't' usamos 'either' (not...either = ninguno). Es equivalente a 'neither' pero en contexto negativo. En español 'ninguna' es directo. Esta expresión de descontento con todas las opciones presentadas sugiere necesidad de buscar alternativas adicionales no consideradas inicialmente."
      },
      {
        id: "both_either_6",
        question: "_____ coffee nor tea is available right now.",
        translation: "Ni café ni té están disponibles ahora mismo.",
        options: ["Neither", "Both", "Either", "Not"],
        correct: "Neither",
        explanation: "La estructura 'neither...nor' (ni...ni) es negación doble que rechaza ambas opciones. El verbo puede ser singular o plural dependiendo del sujeto más cercano. En español 'ni...ni' también funciona como negación múltiple. Esta falta de ambas bebidas calientes populares es situación inconveniente que limita opciones."
      },
      {
        id: "both_either_7",
        question: "_____ students passed the difficult exam with high scores.",
        translation: "Ambos estudiantes pasaron el examen difícil con altas calificaciones.",
        options: ["Both", "Either", "Neither", "Each"],
        correct: "Both",
        explanation: "Cuando 'both' se refiere a un grupo específico de dos, va antes del sustantivo plural. El verbo es plural 'passed'. En español 'ambos estudiantes' también precede al sustantivo. Este éxito compartido en examen difícil celebra el logro conjunto, mostrando que ambos estuvieron bien preparados."
      },
      {
        id: "both_either_8",
        question: "You can park on _____ side of the street today.",
        translation: "Puedes estacionar en cualquier lado de la calle hoy.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "Con 'either' más sustantivo singular 'side' indicamos que cualquiera de los DOS lados es válido. El verbo es singular. En español 'cualquier lado' también ofrece ambas opciones como válidas. Esta flexibilidad en el estacionamiento es conveniente y elimina estrés de encontrar el lado correcto."
      },
      {
        id: "both_either_9",
        question: "_____ of us wanted to go to that boring movie.",
        translation: "Ninguno de nosotros quería ir a esa película aburrida.",
        options: ["Neither", "Both", "Either", "None"],
        correct: "Neither",
        explanation: "Para DOS personas cuando ninguna quiere algo usamos 'neither'. Va con verbo singular 'wanted' aunque se refiere a dos. En español 'ninguno de nosotros' también es negativo. Esta falta de interés compartida simplificó la decisión de no ir, evitando desperdiciar tiempo en entretenimiento malo."
      },
      {
        id: "both_either_10",
        question: "I like _____ chocolate and vanilla ice cream equally.",
        translation: "Me gustan tanto el helado de chocolate como el de vainilla por igual.",
        options: ["both", "either", "neither", "any"],
        correct: "both",
        explanation: "Cuando disfrutamos AMBAS opciones por igual usamos 'both'. La palabra 'equally' refuerza que no hay preferencia. En español 'tanto...como' también expresa este gusto doble. Esta ausencia de preferencia entre sabores clásicos muestra apreciación equilibrada de ambos en lugar de tener que elegir favorito."
      },
      {
        id: "both_either_11",
        question: "_____ restaurant was open on Christmas Day unfortunately.",
        translation: "Ningún restaurante estaba abierto el día de Navidad desafortunadamente.",
        options: ["Neither", "Both", "Either", "Each"],
        correct: "Neither",
        explanation: "Cuando hablamos de DOS restaurantes específicos y ninguno está abierto usamos 'neither'. Va con singular 'was' porque se evalúa cada uno individualmente. En español 'ningún restaurante' también es negativo. Esta situación de encontrar todo cerrado en día festivo es frustración común que requiere planificación alternativa."
      },
      {
        id: "both_either_12",
        question: "He speaks _____ Spanish and Portuguese fluently.",
        translation: "Él habla tanto español como portugués con fluidez.",
        options: ["both", "either", "neither", "any"],
        correct: "both",
        explanation: "La construcción 'both...and' enfatiza la doble capacidad lingüística. El verbo 'speaks' concuerda con 'he' singular. En español 'tanto...como' también conecta ambos idiomas. Esta habilidad bilingüe en dos idiomas romances similares muestra talento para lenguas y probablemente facilita aprender el segundo."
      },
      {
        id: "both_either_13",
        question: "_____ answer A or answer B will be accepted.",
        translation: "Se aceptará la respuesta A o la respuesta B.",
        options: ["Either", "Both", "Neither", "Any"],
        correct: "Either",
        explanation: "Con 'either' más verbo singular indicamos que una de las dos es suficiente, no necesitas ambas. La estructura 'either...or' presenta las opciones válidas. En español 'se aceptará...o' también indica flexibilidad. Esta generosidad en corrección permite a estudiantes tener razón de múltiples formas."
      },
      {
        id: "both_either_14",
        question: "_____ of my hands are injured from the accident.",
        translation: "Ambas de mis manos están lesionadas del accidente.",
        options: ["Both", "Either", "Neither", "Each"],
        correct: "Both",
        explanation: "Para DOS manos cuando ambas están afectadas usamos 'both'. El verbo es plural 'are' porque hablamos de las dos simultáneamente. En español 'ambas manos' también es plural. Esta doble lesión es particularmente limitante porque no queda mano sana para compensar, dificultando actividades diarias básicas."
      },
      {
        id: "both_either_15",
        question: "I don't want _____ of those desserts - I'm full.",
        translation: "No quiero ninguno de esos postres - estoy lleno.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "En negativo 'don't want either' funciona como 'neither'. Rechazamos ambas opciones de postre. En español 'no quiero ninguno' también es negativo doble. La razón de estar lleno justifica rechazar ambas tentaciones dulces. Esta capacidad de declinar cuando estamos satisfechos muestra auto-control."
      }
    ]
  },

  question_formation_advanced: {
    name: "Formación de Preguntas Avanzadas",
    description: "Subject vs object questions - preguntas complejas",
    icon: Headphones,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "quest_form_1",
        question: "_____ called you last night at midnight?",
        translation: "¿Quién te llamó anoche a medianoche?",
        options: ["Who", "Whom", "What", "Which"],
        correct: "Who",
        explanation: "Cuando 'who' es el SUJETO de la pregunta, NO usamos auxiliar 'did'. Decimos 'Who called' no 'Who did call'. Esta es 'subject question' donde el pronombre interrogativo reemplaza al sujeto. En español '¿quién llamó?' también omite auxiliar. Esta pregunta directa busca identificar la persona detrás de la llamada nocturna inesperada."
      },
      {
        id: "quest_form_2",
        question: "_____ did you see at the party last weekend?",
        translation: "¿A quién viste en la fiesta el fin de semana pasado?",
        options: ["Who", "Whom", "What", "Which"],
        correct: "Who",
        explanation: "Cuando 'who' es el OBJETO de la pregunta, SÍ usamos auxiliar 'did'. Aunque formalmente sería 'whom', en inglés moderno usamos 'who' con 'did'. En español '¿a quién viste?' marca el objeto con 'a'. Esta pregunta sobre asistencia social busca saber qué amigos o conocidos estuvieron presentes en el evento."
      },
      {
        id: "quest_form_3",
        question: "_____ book are you reading right now?",
        translation: "¿Qué libro estás leyendo ahora mismo?",
        options: ["Which", "What", "Who", "Whose"],
        correct: "Which",
        explanation: "Usamos 'which' (cuál/qué) cuando hay selección entre opciones limitadas o específicas. Es más específico que 'what'. Con presente continuo mantenemos 'are you reading'. En español '¿qué libro?' es común pero 'cuál libro' también funciona. Esta pregunta muestra interés en las lecturas actuales de alguien."
      },
      {
        id: "quest_form_4",
        question: "_____ happened while I was away from home?",
        translation: "¿Qué pasó mientras estuve fuera de casa?",
        options: ["What", "Which", "Who", "How"],
        correct: "What",
        explanation: "Cuando 'what' es sujeto NO usamos auxiliar. Decimos 'What happened' no 'What did happen'. Esta es subject question. En español '¿qué pasó?' también omite auxiliar. Esta pregunta amplia solicita resumen de eventos durante ausencia, esperando potencialmente múltiples respuestas."
      },
      {
        id: "quest_form_5",
        question: "_____ made this delicious cake for the celebration?",
        translation: "¿Quién hizo este pastel delicioso para la celebración?",
        options: ["Who", "Whom", "What", "Which"],
        correct: "Who",
        explanation: "Subject question con 'who' como sujeto: no necesita auxiliar 'did'. El verbo 'made' está en pasado simple directamente. En español '¿quién hizo?' también es directo sin auxiliar. Esta pregunta busca identificar y felicitar al talentoso panadero responsable de la deliciosa creación."
      },
      {
        id: "quest_form_6",
        question: "_____ car is parked in front of our house?",
        translation: "¿De quién es el auto estacionado frente a nuestra casa?",
        options: ["Whose", "Who", "Which", "What"],
        correct: "Whose",
        explanation: "El pronombre posesivo interrogativo 'whose' (de quién) pregunta por el dueño. Va directamente antes del sustantivo 'car'. En español '¿de quién es?' separa el posesivo del sustantivo. Esta pregunta sobre propiedad de vehículo desconocido puede indicar preocupación o simple curiosidad sobre visitante inesperado."
      },
      {
        id: "quest_form_7",
        question: "_____ languages can you speak besides English?",
        translation: "¿Qué idiomas puedes hablar además del inglés?",
        options: ["What", "Which", "How many", "How much"],
        correct: "What",
        explanation: "Para preguntar sobre idiomas en general usamos 'what languages' (qué idiomas). Con modal 'can' el orden es 'can you speak'. En español '¿qué idiomas?' también es abierto. Esta pregunta de capacidad lingüística explora habilidades multilingües de manera amplia sin limitar opciones."
      },
      {
        id: "quest_form_8",
        question: "_____ of these two options do you prefer honestly?",
        translation: "¿Cuál de estas dos opciones prefieres honestamente?",
        options: ["Which", "What", "Who", "Whose"],
        correct: "Which",
        explanation: "Usamos 'which' cuando la elección es entre opciones específicas presentadas (estas dos). Es más restrictivo que 'what'. En español '¿cuál de estas?' también especifica el grupo limitado. La palabra 'honestly' pide opinión genuina sin influencias externas sobre las dos alternativas concretas."
      },
      {
        id: "quest_form_9",
        question: "_____ is knocking on the door so late?",
        translation: "¿Quién está tocando la puerta tan tarde?",
        options: ["Who", "Whom", "What", "Which"],
        correct: "Who",
        explanation: "Subject question en presente continuo: 'who is knocking' sin auxiliar adicional. El sujeto desconocido es lo que buscamos. En español '¿quién está tocando?' también mantiene estructura directa. La hora tarde añade elemento de misterio o preocupación sobre la identidad del visitante inesperado."
      },
      {
        id: "quest_form_10",
        question: "_____ did the accident happen on the highway?",
        translation: "¿Cómo ocurrió el accidente en la autopista?",
        options: ["How", "What", "When", "Where"],
        correct: "How",
        explanation: "El interrogativo 'how' (cómo) pregunta por el MODO o manera en que algo ocurrió. Con pasado simple necesitamos 'did' como auxiliar. En español '¿cómo ocurrió?' también busca explicación del proceso o circunstancias. Esta pregunta investiga las causas y secuencia de eventos del accidente."
      },
      {
        id: "quest_form_11",
        question: "_____ won the first prize in the competition?",
        translation: "¿Quién ganó el primer premio en la competencia?",
        options: ["Who", "Whom", "What", "Which"],
        correct: "Who",
        explanation: "Subject question: 'who' es el sujeto entonces no hay auxiliar 'did'. El verbo 'won' está directamente en pasado. En español '¿quién ganó?' también es directo. Esta pregunta sobre el ganador busca identificar al competidor exitoso que merece reconocimiento por su logro."
      },
      {
        id: "quest_form_12",
        question: "_____ are you talking to on the phone?",
        translation: "¿Con quién estás hablando por teléfono?",
        options: ["Who", "Whom", "What", "Which"],
        correct: "Who",
        explanation: "Aunque gramaticalmente debería ser 'whom' (objeto de preposición 'to'), el inglés moderno informal usa 'who'. La preposición 'to' va al final. En español '¿con quién?' pone la preposición al inicio. Esta pregunta sobre conversación telefónica puede ser curiosidad legítima o quizás celos sobre con quién habla."
      },
      {
        id: "quest_form_13",
        question: "_____ much money do you need for the trip?",
        translation: "¿Cuánto dinero necesitas para el viaje?",
        options: ["How", "What", "Which", "Who"],
        correct: "How",
        explanation: "La estructura 'how much' pregunta por cantidad de incontables (money). El verbo 'do you need' mantiene orden interrogativo normal. En español '¿cuánto dinero?' también pregunta cantidad. Esta pregunta práctica sobre presupuesto de viaje ayuda a planificar gastos y determinar si el viaje es financieramente viable."
      },
      {
        id: "quest_form_14",
        question: "_____ caused the delay in the flight schedule?",
        translation: "¿Qué causó el retraso en el horario del vuelo?",
        options: ["What", "Which", "Who", "How"],
        correct: "What",
        explanation: "Subject question con 'what' como sujeto: no necesita auxiliar 'did'. El verbo 'caused' está directamente en pasado. En español '¿qué causó?' también omite auxiliar. Esta pregunta busca entender la razón técnica o circunstancial del retraso frustrante que afecta planes de viaje."
      },
      {
        id: "quest_form_15",
        question: "_____ books have you read this year so far?",
        translation: "¿Cuántos libros has leído este año hasta ahora?",
        options: ["How many", "How much", "What", "Which"],
        correct: "How many",
        explanation: "Para contar objetos (books) usamos 'how many'. Con presente perfecto 'have you read' indicamos período que continúa hasta ahora. En español '¿cuántos libros?' también cuenta unidades. La frase 'so far' marca que el año no ha terminado y pueden ser más, invitando a contabilizar progreso de lectura actual."
      }
    ]
  },

  present_perfect_vs_simple_past: {
    name: "Presente Perfecto vs Pasado Simple",
    description: "Distinguir entre acciones con conexión presente vs pasado terminado",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "perf_simp_1",
        question: "I _____ my keys - can you help me find them?",
        translation: "He perdido mis llaves - ¿puedes ayudarme a encontrarlas?",
        options: ["have lost", "lost", "lose", "am losing"],
        correct: "have lost",
        explanation: "Usamos presente perfecto 'have lost' porque la acción pasada (perder) tiene resultado PRESENTE (no las tengo ahora). Esta conexión con el presente es clave para usar este tiempo. En español 'he perdido' también conecta pasado con ahora. La petición de ayuda actual confirma que el problema persiste en este momento."
      },
      {
        id: "perf_simp_2",
        question: "She _____ to Paris three times in her life.",
        translation: "Ella ha ido a París tres veces en su vida.",
        options: ["has been", "went", "goes", "was"],
        correct: "has been",
        explanation: "Para experiencias de vida acumuladas usamos presente perfecto 'has been'. El período 'in her life' está abierto (vida continúa), por eso presente perfecto. Si dijéramos 'last year' (período cerrado) usaríamos pasado simple. En español 'ha ido' también usa perfecto para experiencias vitales acumuladas."
      },
      {
        id: "perf_simp_3",
        question: "I _____ that movie last weekend with my friends.",
        translation: "Vi esa película el fin de semana pasado con mis amigos.",
        options: ["saw", "have seen", "see", "am seeing"],
        correct: "saw",
        explanation: "Con tiempo específico terminado 'last weekend' DEBEMOS usar pasado simple 'saw', no presente perfecto. El fin de semana ya terminó, es período cerrado. En español 'vi' (pretérito) también es pasado simple para momentos específicos. Esta regla es importante: tiempo específico pasado = pasado simple siempre."
      },
      {
        id: "perf_simp_4",
        question: "Have you ever _____ sushi before this meal?",
        translation: "¿Alguna vez has comido sushi antes de esta comida?",
        options: ["eaten", "ate", "eat", "eating"],
        correct: "eaten",
        explanation: "La palabra 'ever' (alguna vez) casi siempre indica presente perfecto. Usamos participio 'eaten' después de 'have you'. Preguntamos sobre experiencia de vida hasta este momento. En español '¿alguna vez has comido?' también usa perfecto. Esta pregunta sobre experiencia culinaria previa establece si es primera vez o no."
      },
      {
        id: "perf_simp_5",
        question: "We _____ our homework already - we can go play now!",
        translation: "Ya hemos terminado nuestra tarea - ¡ya podemos ir a jugar!",
        options: ["have finished", "finished", "finish", "are finishing"],
        correct: "have finished",
        explanation: "La palabra 'already' (ya) típicamente va con presente perfecto. El resultado presente es que están libres para jugar AHORA. En español 'ya hemos terminado' también usa perfecto. Esta completitud reciente de obligaciones abre la puerta inmediata a actividades recreativas como recompensa al esfuerzo."
      },
      {
        id: "perf_simp_6",
        question: "He _____ for this company for 10 years now.",
        translation: "Él ha trabajado para esta compañía por 10 años ya.",
        options: ["has worked", "worked", "works", "is working"],
        correct: "has worked",
        explanation: "Para períodos que CONTINÚAN hasta el presente usamos presente perfecto. Los 10 años no terminaron, sigue trabajando ahí. La palabra 'now' al final confirma continuidad. En español 'ha trabajado' también indica que aún continúa. Si hubiera dejado el trabajo usaríamos pasado simple 'worked'."
      },
      {
        id: "perf_simp_7",
        question: "I _____ my grandmother when I was a child.",
        translation: "Visitaba a mi abuela cuando era niño.",
        options: ["visited", "have visited", "visit", "am visiting"],
        correct: "visited",
        explanation: "Para hábitos o acciones repetidas en período TERMINADO (infancia) usamos pasado simple 'visited'. También podríamos usar 'used to visit' para enfatizar el hábito. En español 'visitaba' (imperfecto) describe esta rutina pasada. La infancia es período cerrado de vida, por eso no usamos presente perfecto."
      },
      {
        id: "perf_simp_8",
        question: "She _____ never _____ to Japan in her entire life.",
        translation: "Ella nunca ha estado en Japón en toda su vida.",
        options: ["has / been", "has / went", "did / go", "was / been"],
        correct: "has / been",
        explanation: "Con 'never' en contexto de experiencias de vida usamos presente perfecto. La estructura es 'has never been'. El período 'her entire life' continúa hasta ahora. En español 'nunca ha estado' también usa perfecto. Esta ausencia de experiencia japonesa hasta el momento presente sugiere que podría ocurrir en futuro."
      },
      {
        id: "perf_simp_9",
        question: "When _____ you graduate from university exactly?",
        translation: "¿Cuándo te graduaste de la universidad exactamente?",
        options: ["did", "have", "do", "are"],
        correct: "did",
        explanation: "Cuando preguntamos por el momento específico CUÁNDO ocurrió algo, usamos pasado simple con 'did'. No podemos usar presente perfecto con 'when' preguntando por tiempo exacto. En español '¿cuándo te graduaste?' también usa pretérito. La graduación es evento único en momento específico del pasado."
      },
      {
        id: "perf_simp_10",
        question: "I _____ him since we moved to this city.",
        translation: "No lo he visto desde que nos mudamos a esta ciudad.",
        options: ["haven't seen", "didn't see", "don't see", "am not seeing"],
        correct: "haven't seen",
        explanation: "La palabra 'since' (desde) siempre indica presente perfecto porque marca punto de inicio que continúa hasta ahora. El negativo es 'haven't seen'. En español 'no lo he visto desde' también usa perfecto negativo. Esta ausencia de contacto desde la mudanza sugiere que la reubicación causó distanciamiento."
      },
      {
        id: "perf_simp_11",
        question: "How long _____ you _____ in this house?",
        translation: "¿Cuánto tiempo has vivido en esta casa?",
        options: ["have / lived", "did / live", "do / live", "are / living"],
        correct: "have / lived",
        explanation: "La pregunta 'how long' sobre duración que continúa hasta ahora requiere presente perfecto. Todavía viven ahí, por eso 'have lived' no 'did live'. En español '¿cuánto tiempo has vivido?' también usa perfecto para duración continua. Si ya no vivieran ahí, usaríamos 'did you live'."
      },
      {
        id: "perf_simp_12",
        question: "We _____ breakfast an hour ago this morning.",
        translation: "Desayunamos hace una hora esta mañana.",
        options: ["had", "have had", "have", "are having"],
        correct: "had",
        explanation: "La expresión 'ago' (hace) SIEMPRE requiere pasado simple, nunca presente perfecto. 'An hour ago' es tiempo específico completado. En español 'desayunamos hace' también usa pretérito con 'hace'. Esta regla sin excepciones facilita decidir: si ves 'ago' en la oración, automáticamente es pasado simple."
      },
      {
        id: "perf_simp_13",
        question: "She _____ just _____ her final exam successfully!",
        translation: "¡Ella acaba de terminar su examen final exitosamente!",
        options: ["has / finished", "did / finish", "is / finishing", "was / finishing"],
        correct: "has / finished",
        explanation: "La palabra 'just' (recién/acabar de) típicamente usa presente perfecto en inglés. Indica acción muy reciente con relevancia inmediata. En español 'acaba de terminar' también enfatiza lo reciente. El presente perfecto captura perfectamente esta inmediatez temporal y la emoción del logro que aún se siente fresco."
      },
      {
        id: "perf_simp_14",
        question: "I _____ my phone in the taxi yesterday evening.",
        translation: "Dejé mi teléfono en el taxi ayer en la tarde.",
        options: ["left", "have left", "leave", "am leaving"],
        correct: "left",
        explanation: "Tiempo específico 'yesterday evening' requiere pasado simple 'left'. No podemos usar presente perfecto con ayer porque es período completamente cerrado. En español 'dejé ayer' también usa pretérito. Esta pérdida en momento específico del pasado probablemente ya se resolvió o está fuera de control presente."
      },
      {
        id: "perf_simp_15",
        question: "Have you _____ your decision about the job offer?",
        translation: "¿Ya has tomado tu decisión sobre la oferta de trabajo?",
        options: ["made", "make", "did make", "are making"],
        correct: "made",
        explanation: "Con 'have you' usamos participio 'made' para presente perfecto. Esta pregunta sobre decisión implica que el tiempo para decidir continúa hasta ahora. En español '¿ya has tomado?' también usa perfecto. La palabra 'yet' implícita pregunta si la decisión ya existe en el presente, conectando pasado con ahora."
      }
    ]
  },

  adjective_order: {
    name: "Orden de Adjetivos",
    description: "Opinión, tamaño, edad, forma, color - secuencia correcta",
    icon: Award,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "adj_ord_1",
        question: "She has a _____ _____ _____ dog as a pet.",
        translation: "Ella tiene un perro pequeño y lindo como mascota.",
        options: ["cute little", "little cute", "small cute", "cute small"],
        correct: "cute little",
        explanation: "En inglés el orden fijo es: OPINIÓN (cute) antes de TAMAÑO (little). Este orden no puede invertirse. En español 'un perro pequeño y lindo' tiene más flexibilidad y generalmente tamaño va primero. Esta regla de orden inglesa puede parecer arbitraria pero es absolutamente consistente y debe memorizarse."
      },
      {
        id: "adj_ord_2",
        question: "I bought a _____ _____ _____ table for my room.",
        translation: "Compré una mesa de madera redonda antigua para mi cuarto.",
        options: ["old round wooden", "wooden old round", "round wooden old", "wooden round old"],
        correct: "old round wooden",
        explanation: "El orden correcto es: EDAD (old) + FORMA (round) + MATERIAL (wooden). Esta secuencia específica es regla inquebrantable del inglés. En español 'una mesa redonda antigua de madera' permite más variación. Aunque complejo, este orden hace que descripciones con múltiples adjetivos suenen naturales a hablantes nativos."
      },
      {
        id: "adj_ord_3",
        question: "They live in a _____ _____ _____ house on the hill.",
        translation: "Ellos viven en una casa blanca grande hermosa en la colina.",
        options: ["beautiful big white", "big beautiful white", "white big beautiful", "white beautiful big"],
        correct: "beautiful big white",
        explanation: "La secuencia es: OPINIÓN (beautiful) + TAMAÑO (big) + COLOR (white). La opinión siempre va primero, seguida de características físicas objetivas. En español 'una casa grande blanca hermosa' varía el orden más libremente. Este orden inglés rígido asegura que todos los hablantes nativos describan objetos con misma secuencia."
      },
      {
        id: "adj_ord_4",
        question: "She wore a _____ _____ _____ dress to the party.",
        translation: "Ella usó un vestido de seda largo rojo para la fiesta.",
        options: ["long red silk", "red long silk", "silk long red", "red silk long"],
        correct: "long red silk",
        explanation: "El orden es: TAMAÑO (long) + COLOR (red) + MATERIAL (silk). Las características van de más subjetivas a más objetivas. En español 'un vestido largo rojo de seda' también puede variar. El material siempre va último porque es la característica más objetiva e inmutable del objeto."
      },
      {
        id: "adj_ord_5",
        question: "I want to buy a _____ _____ car for my family.",
        translation: "Quiero comprar un auto japonés nuevo para mi familia.",
        options: ["new Japanese", "Japanese new", "new Japan", "Japan new"],
        correct: "new Japanese",
        explanation: "El orden es: EDAD (new) + ORIGEN/NACIONALIDAD (Japanese). La edad viene antes que el origen en la secuencia estándar. En español 'un auto nuevo japonés' también puede invertirse a 'japonés nuevo'. El origen del auto puede indicar preferencia por calidad o tecnología asociada con fabricantes de ese país."
      },
      {
        id: "adj_ord_6",
        question: "He found an _____ _____ _____ coin in his garden.",
        translation: "Él encontró una moneda de plata pequeña antigua en su jardín.",
        options: ["old small silver", "small old silver", "silver small old", "silver old small"],
        correct: "old small silver",
        explanation: "La secuencia correcta es: EDAD (old) + TAMAÑO (small) + MATERIAL (silver). Edad siempre precede tamaño, y material va al final. En español 'una moneda antigua pequeña de plata' puede variar. Este hallazgo arqueológico casual en el jardín es descubrimiento emocionante que despierta curiosidad sobre su historia."
      },
      {
        id: "adj_ord_7",
        question: "She has _____ _____ _____ eyes that sparkle.",
        translation: "Ella tiene ojos azules grandes hermosos que brillan.",
        options: ["beautiful big blue", "big blue beautiful", "blue beautiful big", "blue big beautiful"],
        correct: "beautiful big blue",
        explanation: "El orden es: OPINIÓN (beautiful) + TAMAÑO (big) + COLOR (blue). La opinión subjetiva siempre va primero en la jerarquía. En español 'ojos grandes azules hermosos' tiene orden más flexible. El verbo 'sparkle' (brillan) añade cualidad adicional que hace los ojos aún más notables."
      },
      {
        id: "adj_ord_8",
        question: "We stayed in a _____ _____ _____ hotel near the beach.",
        translation: "Nos quedamos en un hotel francés moderno caro cerca de la playa.",
        options: ["expensive modern French", "French expensive modern", "modern French expensive", "French modern expensive"],
        correct: "expensive modern French",
        explanation: "La secuencia es: OPINIÓN/VALOR (expensive) + EDAD (modern) + ORIGEN (French). El precio es juicio de valor que va primero. En español 'un hotel moderno francés caro' varía el orden. La ubicación cerca de la playa probablemente contribuye al precio elevado del alojamiento."
      },
      {
        id: "adj_ord_9",
        question: "I need some _____ _____ plates for the dinner party.",
        translation: "Necesito algunos platos blancos grandes para la cena.",
        options: ["big white", "white big", "large white", "white large"],
        correct: "big white",
        explanation: "Aunque ambos son características físicas, TAMAÑO (big) va antes de COLOR (white). Esta es regla consistente sin excepciones. En español 'platos grandes blancos' puede invertirse más fácilmente. Los platos grandes son necesarios para servir porciones generosas en cenas formales con invitados."
      },
      {
        id: "adj_ord_10",
        question: "He drives a _____ _____ _____ sports car.",
        translation: "Él maneja un auto deportivo alemán rojo elegante.",
        options: ["sleek red German", "red German sleek", "German red sleek", "German sleek red"],
        correct: "sleek red German",
        explanation: "El orden es: OPINIÓN (sleek/elegante) + COLOR (red) + ORIGEN (German). La opinión estética va primero antes de características objetivas. En español 'un auto deportivo alemán rojo elegante' permite más variación. Este vehículo llamativo probablemente atrae atención y refleja gusto por velocidad y estilo."
      },
      {
        id: "adj_ord_11",
        question: "She found a _____ _____ _____ box in the attic.",
        translation: "Ella encontró una caja de madera rectangular vieja en el ático.",
        options: ["old rectangular wooden", "wooden old rectangular", "rectangular wooden old", "wooden rectangular old"],
        correct: "old rectangular wooden",
        explanation: "La secuencia correcta es: EDAD (old) + FORMA (rectangular) + MATERIAL (wooden). Edad primero, luego características de forma, finalmente composición. En español 'una caja vieja rectangular de madera' puede reorganizarse. Descubrimientos en áticos frecuentemente revelan tesoros olvidados o memorias familiares guardadas."
      },
      {
        id: "adj_ord_12",
        question: "We need a _____ _____ _____ rug for this room.",
        translation: "Necesitamos una alfombra persa grande nueva para este cuarto.",
        options: ["new big Persian", "big new Persian", "Persian big new", "Persian new big"],
        correct: "new big Persian",
        explanation: "El orden es: EDAD (new) + TAMAÑO (big) + ORIGEN (Persian). Esta secuencia prioriza edad sobre tamaño, y origen va al final. En español 'una alfombra grande nueva persa' tiene orden diferente. La alfombra persa específicamente sugiere búsqueda de calidad artesanal tradicional para decoración elegante."
      },
      {
        id: "adj_ord_13",
        question: "I love your _____ _____ _____ necklace!",
        translation: "¡Me encanta tu collar de oro antiguo hermoso!",
        options: ["beautiful old gold", "old beautiful gold", "gold beautiful old", "gold old beautiful"],
        correct: "beautiful old gold",
        explanation: "El orden es: OPINIÓN (beautiful) + EDAD (old) + MATERIAL (gold). La apreciación estética va primero, seguida de edad histórica, terminando con composición. En español 'collar hermoso antiguo de oro' puede variar. Las joyas antiguas de oro combinan valor material con valor histórico y sentimental."
      },
      {
        id: "adj_ord_14",
        question: "He collects _____ _____ stamps from around the world.",
        translation: "Él colecciona estampillas raras viejas de todo el mundo.",
        options: ["rare old", "old rare", "small old", "old small"],
        correct: "rare old",
        explanation: "Cuando tenemos OPINIÓN/VALOR (rare) y EDAD (old), la opinión va primero. 'Rare' es evaluación subjetiva de escasez, 'old' es hecho objetivo. En español 'estampillas raras viejas' o 'viejas raras' ambos suenan naturales. La filatelia es hobby que combina interés histórico con apreciación de rareza."
      },
      {
        id: "adj_ord_15",
        question: "They built a _____ _____ _____ fence around the property.",
        translation: "Construyeron una cerca de metal alta nueva alrededor de la propiedad.",
        options: ["new tall metal", "tall new metal", "metal new tall", "metal tall new"],
        correct: "new tall metal",
        explanation: "La secuencia es: EDAD (new) + TAMAÑO (tall) + MATERIAL (metal). Esta es aplicación clásica de la regla de orden en construcción. En español 'una cerca alta nueva de metal' varía el orden. La cerca nueva y alta sugiere preocupación por seguridad o privacidad de la propiedad."
      }
    ]
  }
};

export default part12Categories;
