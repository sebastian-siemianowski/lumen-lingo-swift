/**
 * SPANISH → ENGLISH GRAMMAR - PART 25
 * 4 categories, 15 questions each
 */

import { MessageSquare, Link as LinkIcon, Scale, Compass } from "lucide-react";

export const part25Categories = {
  question_words: {
    name: "Palabras Interrogativas",
    description: "What, where, when, why, how - formular preguntas correctamente",
    icon: MessageSquare,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    questions: [
      {
        id: "q_word_1",
        question: "_____ is your name, if I may ask politely?",
        translation: "¿Cuál es tu nombre, si puedo preguntar cortésmente?",
        options: ["What", "Which", "Who", "How"],
        correct: "What",
        explanation: "Para preguntar NOMBRE o IDENTIFICACIÓN usamos 'what': 'What is your name?' En español '¿cuál es?' usa 'cuál'. Esta pregunta básica de presentación es primer paso de conocer a alguien nuevo, estableciendo identidad y creando base para conversación posterior."
      },
      {
        id: "q_word_2",
        question: "_____ do you live in the city or suburbs?",
        translation: "¿Dónde vives en la ciudad o suburbios?",
        options: ["Where", "What", "When", "How"],
        correct: "Where",
        explanation: "Para preguntar UBICACIÓN usamos 'where': 'Where do you live?' En español '¿dónde vives?' también pregunta lugar. Esta pregunta geográfica ayuda a entender contexto de vida de persona, distancias que debe recorrer, y potencialmente si viven cerca para facilitar encuentros futuros."
      },
      {
        id: "q_word_3",
        question: "_____ did you arrive at the office this morning?",
        translation: "¿Cuándo llegaste a la oficina esta mañana?",
        options: ["When", "What", "Where", "How"],
        correct: "When",
        explanation: "Para preguntar TIEMPO o MOMENTO usamos 'when': 'When did you arrive?' En español '¿cuándo llegaste?' también pregunta tiempo. Esta consulta sobre hora de llegada puede ser curiosidad, verificación de puntualidad, o intento de establecer si estabas presente cuando algo ocurrió."
      },
      {
        id: "q_word_4",
        question: "_____ are you so upset about right now?",
        translation: "¿Por qué estás tan molesto ahora mismo?",
        options: ["Why", "What", "How", "When"],
        correct: "Why",
        explanation: "Para preguntar RAZÓN o CAUSA usamos 'why': 'Why are you upset?' En español '¿por qué?' también busca razón. Esta pregunta preocupada sobre estado emocional negativo evidente busca entender qué causó el malestar para potencialmente ayudar o simplemente ofrecer empatía."
      },
      {
        id: "q_word_5",
        question: "_____ do you spell your last name correctly?",
        translation: "¿Cómo deletreas tu apellido correctamente?",
        options: ["How", "What", "Which", "Why"],
        correct: "How",
        explanation: "Para preguntar MANERA o MÉTODO usamos 'how': 'How do you spell?' En español '¿cómo deletreas?' también pregunta método. Esta consulta es común con apellidos inusuales o extranjeros donde ortografía no es obvia auditivamente, asegurando registro correcto en documentos."
      },
      {
        id: "q_word_6",
        question: "_____ old are you, if you don't mind sharing?",
        translation: "¿Cuántos años tienes, si no te importa compartir?",
        options: ["How", "What", "Which", "When"],
        correct: "How",
        explanation: "Para EDAD usamos 'how old': combinación fija de 'how' con adjetivo. En español '¿cuántos años?' cuenta años. La frase cortés 'if you don't mind' reconoce que edad puede ser tema sensible especialmente para adultos, dando opción de no responder."
      },
      {
        id: "q_word_7",
        question: "_____ time is the meeting starting this afternoon?",
        translation: "¿A qué hora comienza la reunión esta tarde?",
        options: ["What", "Which", "When", "How"],
        correct: "What",
        explanation: "Para preguntar HORA específica usamos 'what time': no 'which time' ni 'when time'. Es expresión fija. En español '¿a qué hora?' también pregunta tiempo específico. Esta consulta de horario preciso ayuda a planificar llegada puntual y organizar agenda del día."
      },
      {
        id: "q_word_8",
        question: "_____ book are you reading - the red or blue one?",
        translation: "¿Cuál libro estás leyendo - el rojo o el azul?",
        options: ["Which", "What", "Who", "How"],
        correct: "Which",
        explanation: "Para ELECCIÓN entre opciones limitadas específicas usamos 'which': 'which book - red or blue?' En español '¿cuál libro?' también elige entre opciones. Esta especificación de dos libros visibles hace 'which' más apropiado que 'what' que sería más abierto."
      },
      {
        id: "q_word_9",
        question: "_____ car is that parked in front of our house?",
        translation: "¿De quién es ese auto estacionado frente a nuestra casa?",
        options: ["Whose", "Who", "Which", "What"],
        correct: "Whose",
        explanation: "Para preguntar PROPIEDAD usamos 'whose': 'Whose car is that?' En español '¿de quién es?' separa posesivo. Esta pregunta sobre vehículo desconocido puede ser curiosidad o preocupación ligera sobre por qué hay auto extraño estacionado frente a propiedad."
      },
      {
        id: "q_word_10",
        question: "_____ did you decide to quit your job suddenly?",
        translation: "¿Por qué decidiste renunciar a tu trabajo súbitamente?",
        options: ["Why", "What", "How", "When"],
        correct: "Why",
        explanation: "Para pregunta sobre MOTIVACIÓN de decisión importante usamos 'why': 'Why did you decide?' En español '¿por qué decidiste?' también busca razón. Esta pregunta sobre renuncia súbita busca entender qué evento o realización precipitó cambio laboral tan drástico y aparentemente impulsivo."
      },
      {
        id: "q_word_11",
        question: "_____ many students are in your English class?",
        translation: "¿Cuántos estudiantes hay en tu clase de inglés?",
        options: ["How", "What", "Which", "Who"],
        correct: "How",
        explanation: "Para preguntar CANTIDAD usamos 'how many' con contables: 'How many students?' Con incontables sería 'how much'. En español '¿cuántos estudiantes?' también cuenta. Esta información sobre tamaño de clase ayuda a evaluar si atención será personalizada o si será grupo grande con menos interacción individual."
      },
      {
        id: "q_word_12",
        question: "_____ was your weekend - did you have fun?",
        translation: "¿Cómo estuvo tu fin de semana - te divertiste?",
        options: ["How", "What", "When", "Why"],
        correct: "How",
        explanation: "Para preguntar sobre CALIDAD de experiencia usamos 'how': 'How was your weekend?' En español '¿cómo estuvo?' también evalúa calidad. Esta pregunta social común de lunes inicia conversación sobre actividades recreativas, permitiendo intercambio de historias sobre descanso o aventuras."
      },
      {
        id: "q_word_13",
        question: "_____ language do you prefer learning - French or German?",
        translation: "¿Cuál idioma prefieres aprender - francés o alemán?",
        options: ["Which", "What", "How", "Why"],
        correct: "Which",
        explanation: "Para elección entre DOS opciones específicas presentadas usamos 'which': 'which language - French or German?' En español '¿cuál idioma?' también elige. Esta pregunta sobre preferencia lingüística ayuda a decidir en qué invertir tiempo de estudio, considerando utilidad personal y atractivo cultural."
      },
      {
        id: "q_word_14",
        question: "_____ _____ does this laptop cost at the store?",
        translation: "¿Cuánto cuesta esta laptop en la tienda?",
        options: ["How much", "How many", "What price", "Which cost"],
        correct: "How much",
        explanation: "Para preguntar PRECIO usamos 'how much': 'How much does it cost?' Con dinero siempre 'much' (incontable). En español '¿cuánto cuesta?' también pregunta precio. Esta consulta de costo es paso esencial antes de compra para determinar si está dentro de presupuesto disponible."
      },
      {
        id: "q_word_15",
        question: "_____ kind of music do you enjoy listening to most?",
        translation: "¿Qué tipo de música disfrutas escuchar más?",
        options: ["What", "Which", "How", "Who"],
        correct: "What",
        explanation: "Para preguntar TIPO o CLASE usamos 'what kind of': 'What kind of music?' Es pregunta abierta sin opciones predefinidas. En español '¿qué tipo de música?' también es abierto. Esta pregunta sobre gustos musicales es forma común de conocer preferencias personales y encontrar intereses compartidos."
      }
    ]
  },

  conjunctions_basic: {
    name: "Conjunciones Básicas",
    description: "And, but, or, so, because - conectar ideas correctamente",
    icon: LinkIcon,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "conj_1",
        question: "I like coffee _____ tea for my morning routine.",
        translation: "Me gusta el café y el té para mi rutina matutina.",
        options: ["and", "but", "or", "so"],
        correct: "and",
        explanation: "Para AÑADIR elementos usamos 'and' (y): 'coffee and tea'. Conecta dos cosas que ambas aplican. En español 'y' también suma. Esta preferencia dual por ambas bebidas calientes muestra que dependiendo del día o estado de ánimo, cualquiera de las dos satisface necesidad de bebida matutina."
      },
      {
        id: "conj_2",
        question: "She's smart _____ sometimes lazy about her studies.",
        translation: "Ella es inteligente pero a veces perezosa con sus estudios.",
        options: ["but", "and", "or", "so"],
        correct: "but",
        explanation: "Para CONTRASTAR ideas opuestas usamos 'but' (pero): 'smart but lazy'. Primera parte positiva, segunda negativa. En español 'pero' también contrasta. Esta combinación de inteligencia con falta de esfuerzo es frustración común de profesores que ven potencial desperdiciado por falta de aplicación."
      },
      {
        id: "conj_3",
        question: "Would you like tea _____ coffee with breakfast?",
        translation: "¿Quisieras té o café con el desayuno?",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "Para presentar OPCIONES entre las cuales elegir usamos 'or' (o): 'tea or coffee'. Solo puedes elegir una. En español 'o' también presenta alternativas. Esta oferta de bebidas calientes es hospitalidad matutina que permite al huésped seleccionar según preferencia personal."
      },
      {
        id: "conj_4",
        question: "I'm tired, _____ I'm going to bed early tonight.",
        translation: "Estoy cansado, así que me voy a la cama temprano esta noche.",
        options: ["so", "and", "but", "or"],
        correct: "so",
        explanation: "Para mostrar RESULTADO o CONSECUENCIA usamos 'so' (así que/entonces): 'tired, so going to bed'. La primera parte causa la segunda. En español 'así que' también conecta causa con efecto. Esta decisión lógica de dormir temprano por cansancio muestra auto-cuidado sensato."
      },
      {
        id: "conj_5",
        question: "She didn't come to work _____ she was feeling sick.",
        translation: "Ella no vino a trabajar porque se sentía enferma.",
        options: ["because", "and", "but", "so"],
        correct: "because",
        explanation: "Para dar RAZÓN o EXPLICACIÓN usamos 'because' (porque): 'didn't come because sick'. Introduce la causa. En español 'porque' también explica. Esta justificación de ausencia laboral por enfermedad es razón legítima que generalmente no requiere prueba adicional para ausencias ocasionales."
      },
      {
        id: "conj_6",
        question: "He studied hard, _____ he still failed the exam unfortunately.",
        translation: "Él estudió duro, pero aún así reprobó el examen desafortunadamente.",
        options: ["but", "and", "or", "so"],
        correct: "but",
        explanation: "Para contraste DECEPCIONANTE usamos 'but': el esfuerzo no produjo resultado esperado. En español 'pero' también frustra. Esta situación donde dedicación no se tradujo en éxito puede indicar que examen era excepcionalmente difícil o que método de estudio necesita ajuste."
      },
      {
        id: "conj_7",
        question: "Do you want to eat now _____ wait until later?",
        translation: "¿Quieres comer ahora o esperar hasta más tarde?",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "Para pregunta entre DOS momentos usamos 'or': 'now or later'. Presenta opciones temporales. En español 'o' también alterna. Esta consulta sobre timing de comida es considerada, permitiendo que hambre y conveniencia de la otra persona determinen cuándo comen juntos."
      },
      {
        id: "conj_8",
        question: "It's raining, _____ I'll take an umbrella with me.",
        translation: "Está lloviendo, así que llevaré un paraguas conmigo.",
        options: ["so", "and", "but", "because"],
        correct: "so",
        explanation: "Para CONSECUENCIA lógica de condición usamos 'so': 'raining, so taking umbrella'. La lluvia motiva acción preventiva. En español 'así que' también conecta clima con decisión. Esta planificación sensata de protección contra lluvia muestra previsión que evitará mojarse."
      },
      {
        id: "conj_9",
        question: "I want to go, _____ I don't have time today.",
        translation: "Quiero ir, pero no tengo tiempo hoy.",
        options: ["but", "and", "or", "so"],
        correct: "but",
        explanation: "Para contraste entre DESEO y REALIDAD usamos 'but': querer versus poder. En español 'pero' también separa intención de posibilidad. Esta situación común donde deseo existe pero circunstancias impiden acción refleja frustración de vida ocupada donde no todo lo que queremos hacer es factible."
      },
      {
        id: "conj_10",
        question: "She speaks Spanish _____ English fluently at work.",
        translation: "Ella habla español e inglés fluidamente en el trabajo.",
        options: ["and", "but", "or", "so"],
        correct: "and",
        explanation: "Para LISTAR habilidades usamos 'and': 'Spanish and English'. Ambos idiomas están presentes. En español 'e' (antes de 'i') también suma. Esta capacidad bilingüe es ventaja profesional significativa que probablemente aumenta valor en mercado laboral y abre oportunidades adicionales."
      },
      {
        id: "conj_11",
        question: "I didn't go _____ I was too busy with work.",
        translation: "No fui porque estaba demasiado ocupado con el trabajo.",
        options: ["because", "and", "but", "so"],
        correct: "because",
        explanation: "Para JUSTIFICAR ausencia usamos 'because': 'didn't go because busy'. Explica la razón. En español 'porque' también justifica. Esta explicación de no asistencia por carga laboral excesiva es razón comprensible que generalmente se acepta sin cuestionar en ambientes profesionales."
      },
      {
        id: "conj_12",
        question: "It's late, _____ we should leave the party now.",
        translation: "Es tarde, así que deberíamos irnos de la fiesta ahora.",
        options: ["so", "and", "but", "or"],
        correct: "so",
        explanation: "Para SUGERENCIA basada en circunstancia usamos 'so': 'it's late, so we should leave'. Hora motiva acción. En español 'así que' también propone. Esta decisión grupal de retirarse por hora avanzada muestra responsabilidad sobre descanso necesario para día siguiente."
      },
      {
        id: "conj_13",
        question: "The food is good, _____ a bit too salty for me.",
        translation: "La comida es buena, pero un poco demasiado salada para mí.",
        options: ["but", "and", "or", "so"],
        correct: "but",
        explanation: "Para ELOGIO con CRÍTICA menor usamos 'but': reconoce calidad pero señala defecto. En español 'pero' también equilibra. Esta retroalimentación constructiva de restaurante reconoce aspectos positivos mientras menciona área de mejora específica de salinidad."
      },
      {
        id: "conj_14",
        question: "I can help you today _____ tomorrow afternoon.",
        translation: "Puedo ayudarte hoy o mañana en la tarde.",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "Para ofrecer FLEXIBILIDAD de opciones temporales usamos 'or': 'today or tomorrow'. Cualquiera funciona. En español 'o' también alterna. Esta generosidad de ofrecer múltiples tiempos de disponibilidad facilita coordinación, aumentando probabilidad de encontrar momento que funcione para ambos."
      },
      {
        id: "conj_15",
        question: "He was hungry, _____ he made himself a sandwich quickly.",
        translation: "Tenía hambre, así que se hizo un sándwich rápidamente.",
        options: ["so", "and", "but", "because"],
        correct: "so",
        explanation: "Para ACCIÓN motivada por necesidad usamos 'so': 'hungry, so made sandwich'. Hambre causa preparación de comida. En español 'así que' también conecta necesidad con solución. Esta respuesta inmediata a hambre con comida rápida muestra auto-suficiencia y capacidad de resolver necesidades básicas."
      }
    ]
  },

  by_vs_until: {
    name: "By vs Until",
    description: "Límites temporales vs duración - diferencia crucial",
    icon: Scale,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "by_until_1",
        question: "Please finish the report _____ Friday deadline.",
        translation: "Por favor termina el informe para el viernes fecha límite.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Usamos 'by' (para/antes de) para LÍMITE FINAL - deadline: 'finish by Friday' significa completar no más tarde del viernes. En español 'para el viernes' también marca límite. La diferencia clave: 'by' es el punto final, 'until' es duración continua hasta ese punto."
      },
      {
        id: "by_until_2",
        question: "I'll wait here _____ you come back from the store.",
        translation: "Esperaré aquí hasta que vuelvas de la tienda.",
        options: ["until", "by", "at", "for"],
        correct: "until",
        explanation: "Usamos 'until' (hasta que) para DURACIÓN de acción que continúa hasta punto: 'wait until you come back'. La espera dura todo ese tiempo. En español 'hasta que' también marca duración. Esta paciencia de esperar durante todo el período necesario muestra compromiso de permanecer hasta que la otra persona regrese."
      },
      {
        id: "by_until_3",
        question: "You must arrive _____ 9 AM for the meeting start.",
        translation: "Debes llegar para las 9 AM para el inicio de la reunión.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para HORA LÍMITE de llegada usamos 'by': 'arrive by 9 AM' significa llegar no más tarde de esa hora. En español 'para las 9' también es límite. Esta puntualidad requerida antes de hora específica asegura que todos estén presentes cuando reunión comience oficialmente."
      },
      {
        id: "by_until_4",
        question: "The store is open _____ 10 PM every weekday.",
        translation: "La tienda está abierta hasta las 10 PM cada día de semana.",
        options: ["until", "by", "at", "to"],
        correct: "until",
        explanation: "Para DURACIÓN de horario usamos 'until': 'open until 10 PM' significa que permanece abierta todo ese tiempo. En español 'hasta las 10' también marca final de período. Este horario extendido nocturno permite compras después del trabajo para quienes salen tarde."
      },
      {
        id: "by_until_5",
        question: "I need to have this done _____ tomorrow morning latest.",
        translation: "Necesito tener esto hecho para mañana en la mañana a más tardar.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para COMPLETITUD antes de momento usamos 'by': 'done by tomorrow' establece que debe estar terminado para entonces. En español 'para mañana' también es límite. La frase 'latest' enfatiza que es deadline absoluto sin extensión posible."
      },
      {
        id: "by_until_6",
        question: "We'll stay at the party _____ midnight or so.",
        translation: "Nos quedaremos en la fiesta hasta medianoche más o menos.",
        options: ["until", "by", "at", "for"],
        correct: "until",
        explanation: "Para PERMANENCIA continua hasta momento usamos 'until': 'stay until midnight'. Estarán ahí todo ese tiempo. En español 'hasta medianoche' también marca duración. Esta planificación de quedarse varias horas muestra que están disfrutando pero tienen límite sensato para no trasnochar demasiado."
      },
      {
        id: "by_until_7",
        question: "The payment is due _____ the end of this month.",
        translation: "El pago vence para el final de este mes.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para VENCIMIENTO de pago usamos 'by': 'due by end of month' es fecha límite para pagar. En español 'para el final del mes' también es límite. Esta fecha de vencimiento establece que pago debe completarse antes de que mes termine para evitar cargos por mora."
      },
      {
        id: "by_until_8",
        question: "I won't leave _____ you arrive here safely.",
        translation: "No me iré hasta que llegues aquí a salvo.",
        options: ["until", "by", "at", "for"],
        correct: "until",
        explanation: "Para ESPERA que dura hasta evento usamos 'until': 'won't leave until you arrive'. La espera continúa todo ese período. En español 'hasta que llegues' también espera. Esta lealtad de quedarse hasta asegurar llegada segura muestra cuidado genuino y sentido de responsabilidad protectora."
      },
      {
        id: "by_until_9",
        question: "Can you call me _____ 5 PM today please?",
        translation: "¿Puedes llamarme para las 5 PM hoy por favor?",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para SOLICITUD con límite temporal usamos 'by': 'call me by 5 PM' significa antes de esa hora. En español 'para las 5' también es límite. Esta petición de llamada antes de hora específica probablemente es porque después estarás ocupado o la información es tiempo-sensitiva."
      },
      {
        id: "by_until_10",
        question: "The library is open _____ 8 PM on weekdays.",
        translation: "La biblioteca está abierta hasta las 8 PM entre semana.",
        options: ["until", "by", "at", "to"],
        correct: "until",
        explanation: "Para HORARIO de cierre usamos 'until': 'open until 8 PM' marca final de operación. En español 'hasta las 8' también marca cierre. Este horario vespertino extendido acomoda a estudiantes que trabajan durante día y solo pueden estudiar por tardes."
      },
      {
        id: "by_until_11",
        question: "I should finish this _____ next week at the latest.",
        translation: "Debería terminar esto para la próxima semana a más tardar.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para AUTO-DEADLINE usamos 'by': 'finish by next week' es meta de completitud. En español 'para la próxima semana' también establece límite. Esta auto-imposición de plazo crea estructura que ayuda a priorizar y evitar procrastinación indefinida de tarea importante."
      },
      {
        id: "by_until_12",
        question: "Don't worry - I'll be here _____ you get back later.",
        translation: "No te preocupes - estaré aquí hasta que regreses más tarde.",
        options: ["until", "by", "at", "for"],
        correct: "until",
        explanation: "Para PROMESA de permanencia usamos 'until': 'be here until you get back'. Permanencia continua todo ese tiempo. En español 'hasta que regreses' también promete. Esta seguridad de que alguien esperará elimina preocupación sobre llegar a lugar vacío."
      },
      {
        id: "by_until_13",
        question: "We need to decide _____ tomorrow morning definitively.",
        translation: "Necesitamos decidir para mañana en la mañana definitivamente.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para DECISIÓN que debe tomarse antes de momento usamos 'by': 'decide by tomorrow' es límite para deliberación. En español 'para mañana' también limita. Esta presión temporal de decidir rápidamente puede forzar elección antes de tener toda información deseada."
      },
      {
        id: "by_until_14",
        question: "She practiced _____ she was too tired to continue.",
        translation: "Ella practicó hasta que estuvo demasiado cansada para continuar.",
        options: ["until", "by", "at", "for"],
        correct: "until",
        explanation: "Para CONTINUACIÓN hasta límite físico usamos 'until': 'practiced until too tired'. La fatiga marca fin de práctica. En español 'hasta que' también marca límite. Esta dedicación de practicar hasta agotamiento muestra compromiso intenso pero también riesgo de sobreentrenamiento que puede ser contraproducente."
      },
      {
        id: "by_until_15",
        question: "I'll have everything ready _____ you arrive home.",
        translation: "Tendré todo listo para cuando llegues a casa.",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "Para PREPARACIÓN completada antes de momento usamos 'by': 'ready by the time you arrive'. En español 'para cuando llegues' también anticipa. Esta promesa de tener todo preparado antes de llegada muestra organización y consideración, eliminando demoras una vez que la persona llegue."
      }
    ]
  },

  both_and_either_or: {
    name: "Both...and, Either...or, Neither...nor",
    description: "Correlaciones dobles - conectar opciones correctamente",
    icon: Compass,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "correl_1",
        question: "_____ my brother _____ I enjoy playing soccer together.",
        translation: "Tanto mi hermano como yo disfrutamos jugar fútbol juntos.",
        options: ["Both / and", "Either / or", "Neither / nor", "Not / and"],
        correct: "Both / and",
        explanation: "La estructura 'both...and' (tanto...como) conecta DOS elementos que AMBOS aplican: 'both my brother and I'. El verbo es plural porque hay dos sujetos. En español 'tanto...como' también incluye ambos. Esta pasión compartida por fútbol une a hermanos en actividad recreativa común."
      },
      {
        id: "correl_2",
        question: "You can have _____ cake _____ ice cream for dessert.",
        translation: "Puedes tener pastel o helado de postre.",
        options: ["either / or", "both / and", "neither / nor", "not / or"],
        correct: "either / or",
        explanation: "La estructura 'either...or' (o...o) presenta DOS opciones donde eliges UNA: 'either cake or ice cream'. Solo una opción. En español 'o...o' también alterna. Esta oferta de postre permite elección según preferencia personal o apetito del momento sin obligar a comer ambos."
      },
      {
        id: "correl_3",
        question: "_____ John _____ Mary came to the party last night.",
        translation: "Ni John ni Mary vinieron a la fiesta anoche.",
        options: ["Neither / nor", "Both / and", "Either / or", "Not / and"],
        correct: "Neither / nor",
        explanation: "La estructura 'neither...nor' (ni...ni) es DOBLE NEGACIÓN: ninguno de los dos vino. El verbo puede ser singular o plural dependiendo del sujeto más cercano. En español 'ni...ni' también niega ambos. Esta ausencia dual sugiere que quizás no fueron invitados o decidieron no asistir juntos."
      },
      {
        id: "correl_4",
        question: "She speaks _____ English _____ French perfectly fluently.",
        translation: "Ella habla tanto inglés como francés perfectamente fluido.",
        options: ["both / and", "either / or", "neither / nor", "not / but"],
        correct: "both / and",
        explanation: "Para DOS habilidades que posee simultáneamente usamos 'both...and': 'speaks both English and French'. Ambos idiomas. En español 'tanto...como' también incluye. Esta capacidad bilingüe en dos lenguas globales importantes es ventaja profesional enorme que abre puertas internacionales."
      },
      {
        id: "correl_5",
        question: "We can meet _____ Monday _____ Wednesday afternoon.",
        translation: "Podemos reunirnos el lunes o el miércoles en la tarde.",
        options: ["either / or", "both / and", "neither / nor", "not / but"],
        correct: "either / or",
        explanation: "Para ofrecer FLEXIBILIDAD de días usamos 'either...or': cualquiera de los dos funciona. En español 'el lunes o el miércoles' también alterna. Esta disposición de acomodar múltiples opciones facilita encontrar tiempo que funcione para agenda de ambas personas."
      },
      {
        id: "correl_6",
        question: "_____ coffee _____ tea is available right now unfortunately.",
        translation: "Ni café ni té están disponibles ahora mismo desafortunadamente.",
        options: ["Neither / nor", "Both / and", "Either / or", "Not / and"],
        correct: "Neither / nor",
        explanation: "Para AUSENCIA de ambas opciones usamos 'neither...nor': ninguna bebida disponible. En español 'ni...ni' también niega ambas. Esta falta de ambas bebidas calientes populares es inconveniente significativo especialmente en mañana cuando muchos dependen de cafeína para despertar."
      },
      {
        id: "correl_7",
        question: "_____ the students _____ the teacher knew the answer initially.",
        translation: "Ni los estudiantes ni el profesor sabían la respuesta inicialmente.",
        options: ["Neither / nor", "Both / and", "Either / or", "Not / but"],
        correct: "Neither / nor",
        explanation: "Para IGNORANCIA compartida de ambas partes usamos 'neither...nor': nadie sabía. En español 'ni...ni' también niega conocimiento de ambos grupos. Esta situación de pregunta que nadie puede responder probablemente motivó investigación colectiva para encontrar respuesta juntos."
      },
      {
        id: "correl_8",
        question: "I like _____ the book _____ the movie equally well.",
        translation: "Me gustan tanto el libro como la película igualmente bien.",
        options: ["both / and", "either / or", "neither / nor", "not / but"],
        correct: "both / and",
        explanation: "Para gusto DUAL sin preferencia usamos 'both...and': disfrutas ambas versiones. En español 'tanto...como' también incluye. Esta ausencia de preferencia entre adaptación y original es rara; usualmente uno supera al otro, pero aquí ambos tienen méritos equivalentes."
      },
      {
        id: "correl_9",
        question: "You can pay _____ cash _____ credit card here.",
        translation: "Puedes pagar en efectivo o con tarjeta de crédito aquí.",
        options: ["either / or", "both / and", "neither / nor", "not / but"],
        correct: "either / or",
        explanation: "Para MÉTODOS de pago alternativos usamos 'either...or': cualquier forma es aceptada. En español 'en efectivo o' también alterna. Esta flexibilidad de pago acomoda preferencias y capacidades diversas de clientes, facilitando transacciones sin restricciones."
      },
      {
        id: "correl_10",
        question: "_____ my parents _____ my siblings live in the same city.",
        translation: "Tanto mis padres como mis hermanos viven en la misma ciudad.",
        options: ["Both / and", "Either / or", "Neither / nor", "Not / but"],
        correct: "Both / and",
        explanation: "Para DOS grupos familiares en mismo lugar usamos 'both...and': toda la familia cercana. En español 'tanto...como' también incluye. Esta proximidad familiar de tener padres y hermanos en misma ciudad facilita reuniones frecuentes y sistema de apoyo accesible."
      },
      {
        id: "correl_11",
        question: "_____ answer A _____ answer B is correct on the test.",
        translation: "Ni la respuesta A ni la respuesta B son correctas en el examen.",
        options: ["Neither / nor", "Both / and", "Either / or", "Not / but"],
        correct: "Neither / nor",
        explanation: "Para RECHAZO de ambas opciones usamos 'neither...nor': ninguna es válida. En español 'ni...ni' también rechaza. Esta situación de ambas respuestas incorrectas requiere pensar en tercera opción completamente diferente que no se presentó inicialmente."
      },
      {
        id: "correl_12",
        question: "He enjoys _____ reading _____ writing in his free time.",
        translation: "Él disfruta tanto leer como escribir en su tiempo libre.",
        options: ["both / and", "either / or", "neither / nor", "not / but"],
        correct: "both / and",
        explanation: "Para DOS pasatiempos que practica usamos 'both...and': hace ambas actividades. En español 'tanto...como' también incluye. Estas actividades literarias complementarias de lectura y escritura se alimentan mutuamente, donde leer inspira escritura y escribir profundiza apreciación de lectura."
      },
      {
        id: "correl_13",
        question: "_____ you _____ your sister can come to the event tomorrow.",
        translation: "Tú o tu hermana pueden venir al evento mañana.",
        options: ["Either / or", "Both / and", "Neither / nor", "Not / but"],
        correct: "Either / or",
        explanation: "Para invitación donde UNO de dos puede asistir usamos 'either...or': no es necesario que ambos vengan. En español 'tú o' también alterna. Esta flexibilidad de que cualquiera de los dos representaría bien a la familia facilita asistencia cuando conflictos de horario impiden que ambos vayan."
      },
      {
        id: "correl_14",
        question: "_____ the food _____ the service was good at that restaurant.",
        translation: "Ni la comida ni el servicio fueron buenos en ese restaurante.",
        options: ["Neither / nor", "Both / and", "Either / or", "Not / but"],
        correct: "Neither / nor",
        explanation: "Para EXPERIENCIA completamente negativa usamos 'neither...nor': ambos aspectos fallaron. En español 'ni...ni' también rechaza. Esta evaluación devastadora de restaurante donde tanto comida como servicio decepcionaron garantiza que no regresarás y probablemente advertirás a otros."
      },
      {
        id: "correl_15",
        question: "I want _____ the red shirt _____ the blue one please.",
        translation: "Quiero tanto la camisa roja como la azul por favor.",
        options: ["both / and", "either / or", "neither / nor", "not / but"],
        correct: "both / and",
        explanation: "Para COMPRA de ambos artículos usamos 'both...and': quieres los dos. En español 'tanto...como' también pide ambos. Esta decisión de comprar ambas camisas en lugar de elegir una sugiere que ambos colores te gustan suficiente para justificar doble gasto."
      }
    ]
  }
};

export default part25Categories;