/**
 * SPANISH → ENGLISH GRAMMAR - PART 5
 * 4 categories, 15 questions each
 */

import { Shield, Wand2, MessageSquare, Flag } from "lucide-react";

export const part5Categories = {
  passive_voice_advanced: {
    name: "Voz Pasiva Avanzada",
    description: "Construcciones pasivas en diferentes tiempos",
    icon: Shield,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "pass_adv_1",
        question: "The letter _____ _____ yesterday.",
        translation: "La carta fue enviada ayer.",
        options: ["was sent", "were sent", "is sent", "sent"],
        correct: "was sent",
        explanation: "La voz pasiva en pasado simple usa 'was/were' más el participio pasado. Con un sujeto singular como 'letter' usamos 'was'. El participio de 'send' es 'sent'. Esta estructura pone el foco en la carta (lo que recibió la acción) no en quien la envió. El español 'fue enviada' funciona idénticamente, cambiando el enfoque de la oración."
      },
      {
        id: "pass_adv_2",
        question: "The documents _____ _____ _____ right now.",
        translation: "Los documentos están siendo revisados ahora mismo.",
        options: ["are being reviewed", "is being reviewed", "were being reviewed", "have been reviewed"],
        correct: "are being reviewed",
        explanation: "La voz pasiva en presente continuo usa 'am/is/are being' más participio. Con sujeto plural 'documents' usamos 'are being'. Esta forma describe una acción pasiva que está ocurriendo en este momento. El español 'están siendo revisados' también muestra este proceso actual. Es común en contextos administrativos para informar sobre el estado de documentos."
      },
      {
        id: "pass_adv_3",
        question: "The house _____ _____ _____ last year.",
        translation: "La casa fue construida el año pasado.",
        options: ["was built", "were built", "is built", "has been built"],
        correct: "was built",
        explanation: "El participio irregular de 'build' es 'built'. Usamos pasado simple pasivo 'was built' para un evento completado. Con 'house' (singular) va 'was'. Esta estructura es típica para hablar de construcción de edificios. El español 'fue construida' también usa la voz pasiva para describir cuándo se completó un proyecto de construcción."
      },
      {
        id: "pass_adv_4",
        question: "The movie _____ _____ _____ by millions of people.",
        translation: "La película ha sido vista por millones de personas.",
        options: ["has been watched", "have been watched", "was watched", "is watched"],
        correct: "has been watched",
        explanation: "El presente perfecto pasivo usa 'has/have been' más participio. Con 'movie' (singular) usamos 'has been'. El participio de 'watch' es regular: 'watched'. Esta forma describe una acción pasiva con resultados que continúan al presente. El español 'ha sido vista' también acumula todas las visualizaciones hasta ahora. Es impresionante cuando hablamos de éxitos cinematográficos masivos."
      },
      {
        id: "pass_adv_5",
        question: "The problem _____ _____ _____ tomorrow.",
        translation: "El problema será resuelto mañana.",
        options: ["will be solved", "is solved", "was solved", "has been solved"],
        correct: "will be solved",
        explanation: "La voz pasiva en futuro simple usa 'will be' más participio pasado. El verbo 'solve' se convierte en 'solved'. Esta estructura hace una promesa sobre resolver un problema. El español 'será resuelto' también proyecta la solución hacia el futuro. Es reconfortante escuchar que un problema será atendido, dando esperanza de resolución próxima."
      },
      {
        id: "pass_adv_6",
        question: "The cake _____ _____ _____ by my grandmother.",
        translation: "El pastel fue hecho por mi abuela.",
        options: ["was made", "were made", "is made", "has been made"],
        correct: "was made",
        explanation: "El participio irregular de 'make' es 'made'. Usamos 'was' con el sujeto singular 'cake'. La frase 'by my grandmother' identifica quién realizó la acción. Esta construcción honra el esfuerzo culinario de alguien. El español 'fue hecho por' también reconoce al creador. Es una forma cariñosa de dar crédito a nuestros seres queridos por su trabajo."
      },
      {
        id: "pass_adv_7",
        question: "English _____ _____ in many countries around the world.",
        translation: "El inglés es hablado en muchos países alrededor del mundo.",
        options: ["is spoken", "are spoken", "was spoken", "speaks"],
        correct: "is spoken",
        explanation: "Para verdades generales en voz pasiva usamos presente simple: 'is/are' más participio. 'English' es singular así que 'is spoken'. El participio irregular de 'speak' es 'spoken'. Esta oración establece un hecho sobre la distribución global del inglés. El español 'es hablado' también funciona para estas verdades universales sobre idiomas."
      },
      {
        id: "pass_adv_8",
        question: "The invitations _____ already _____ _____.",
        translation: "Las invitaciones ya han sido enviadas.",
        options: ["have / been sent", "has / been sent", "were / sent", "are / sent"],
        correct: "have / been sent",
        explanation: "El presente perfecto pasivo con sujeto plural usa 'have been' más participio. La palabra 'already' enfatiza que la tarea está completa. El participio de 'send' es 'sent'. Esta estructura informa que un proceso está terminado. El español 'ya han sido enviadas' también comunica este cumplimiento. Es útil para actualizar sobre el progreso de preparativos."
      },
      {
        id: "pass_adv_9",
        question: "The store _____ _____ at 9 PM every day.",
        translation: "La tienda es cerrada a las 9 PM todos los días.",
        options: ["is closed", "are closed", "was closed", "closes"],
        correct: "is closed",
        explanation: "Presente simple pasivo para rutinas habituales: 'is closed'. El participio de 'close' es 'closed'. Esta forma describe una acción pasiva que ocurre regularmente. El español 'es cerrada' también establece el horario de cierre. Aunque en español también podemos decir 'se cierra' (voz media), la pasiva enfatiza la acción sobre la tienda."
      },
      {
        id: "pass_adv_10",
        question: "The new bridge _____ _____ _____ next year.",
        translation: "El nuevo puente será inaugurado el próximo año.",
        options: ["will be inaugurated", "is inaugurated", "was inaugurated", "has been inaugurated"],
        correct: "will be inaugurated",
        explanation: "Futuro simple pasivo: 'will be' más participio. El verbo formal 'inaugurate' significa abrir oficialmente. Esta estructura anuncia eventos futuros importantes. El español 'será inaugurado' también hace este tipo de anuncios públicos. Las inauguraciones de infraestructura son eventos cívicos significativos que mejoran la comunidad."
      },
      {
        id: "pass_adv_11",
        question: "The decision _____ _____ _____ by the committee last week.",
        translation: "La decisión fue tomada por el comité la semana pasada.",
        options: ["was made", "were made", "is made", "has been made"],
        correct: "was made",
        explanation: "Pasado simple pasivo con 'was made'. El sujeto singular 'decision' requiere 'was'. La frase 'by the committee' identifica quién decidió. El español 'fue tomada' también distribuye la responsabilidad al grupo. En contextos formales, la voz pasiva permite hablar de decisiones sin personalizar excesivamente, manteniendo un tono más oficial."
      },
      {
        id: "pass_adv_12",
        question: "The windows _____ _____ _____ this morning.",
        translation: "Las ventanas fueron limpiadas esta mañana.",
        options: ["were cleaned", "was cleaned", "are cleaned", "have been cleaned"],
        correct: "were cleaned",
        explanation: "Sujeto plural 'windows' requiere 'were' en pasado pasivo. El participio regular 'cleaned' viene de 'clean'. Esta oración informa sobre una tarea doméstica completada. El español 'fueron limpiadas' también reporta este trabajo. Es satisfactorio comunicar cuando las tareas de limpieza están hechas, mostrando que el hogar está cuidado."
      },
      {
        id: "pass_adv_13",
        question: "The conference _____ _____ _____ due to bad weather.",
        translation: "La conferencia fue cancelada debido al mal clima.",
        options: ["was cancelled", "were cancelled", "is cancelled", "has been cancelled"],
        correct: "was cancelled",
        explanation: "Pasado simple pasivo 'was cancelled' para un evento único. La palabra 'due to' explica la razón. El participio puede escribirse 'canceled' (EE.UU.) o 'cancelled' (Reino Unido). El español 'fue cancelada' también informa esta decepcionante noticia. El clima impredecible a veces obliga a cancelar planes importantes."
      },
      {
        id: "pass_adv_14",
        question: "This song _____ _____ _____ by many famous artists.",
        translation: "Esta canción ha sido interpretada por muchos artistas famosos.",
        options: ["has been performed", "have been performed", "was performed", "is performed"],
        correct: "has been performed",
        explanation: "Presente perfecto pasivo con sujeto singular: 'has been performed'. El verbo 'perform' significa interpretar o ejecutar artísticamente. Esta forma acumula todas las interpretaciones hasta el presente. El español 'ha sido interpretada' también cuenta estas versiones múltiples. Las canciones icónicas son reinterpretadas constantemente, mostrando su impacto cultural duradero."
      },
      {
        id: "pass_adv_15",
        question: "The results _____ _____ _____ by email soon.",
        translation: "Los resultados serán enviados por email pronto.",
        options: ["will be sent", "are sent", "were sent", "have been sent"],
        correct: "will be sent",
        explanation: "Futuro simple pasivo 'will be sent' para una acción venidera. El sujeto plural 'results' no afecta 'will be'. La palabra 'soon' indica que sucederá en breve. Esta estructura es común en contextos educativos o profesionales para informar sobre entregas próximas. El español 'serán enviados' también calma la ansiedad de quienes esperan noticias importantes."
      }
    ]
  },

  subjunctive_present: {
    name: "Modo Subjuntivo - Presente",
    description: "Expresar deseos, dudas y posibilidades",
    icon: Wand2,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "subj_pres_1",
        question: "It's important that he _____ on time.",
        translation: "Es importante que él llegue a tiempo.",
        options: ["be", "is", "was", "are"],
        correct: "be",
        explanation: "En inglés, el subjuntivo presente usa la forma base del verbo sin conjugar. Después de expresiones como 'it's important that' usamos subjuntivo. Aquí 'be' no cambia a 'is' aunque el sujeto sea 'he'. El español tiene un sistema subjuntivo más desarrollado con 'llegue'. Aunque el subjuntivo inglés es más limitado, existe y es importante en contextos formales."
      },
      {
        id: "subj_pres_2",
        question: "I suggest that she _____ a doctor.",
        translation: "Sugiero que ella vea a un doctor.",
        options: ["see", "sees", "saw", "seeing"],
        correct: "see",
        explanation: "Después de verbos como 'suggest, recommend, insist' usamos subjuntivo. La forma base es 'see' sin la 's' de tercera persona. Esta estructura hace recomendaciones o sugerencias. El español 'vea' usa subjuntivo completo. En inglés el subjuntivo es sutil pero importante para sonar educado y formal al dar consejos médicos."
      },
      {
        id: "subj_pres_3",
        question: "They demand that the company _____ them fairly.",
        translation: "Exigen que la compañía los pague justamente.",
        options: ["pay", "pays", "paid", "paying"],
        correct: "pay",
        explanation: "El verbo 'demand' requiere subjuntivo en la cláusula que sigue. Usamos la forma base 'pay' sin cambios por persona. Esta estructura expresa exigencias o demandas fuertes. El español 'pague' usa subjuntivo también. En contextos laborales, esta forma comunica derechos de trabajadores de manera firme pero gramaticalmente correcta."
      },
      {
        id: "subj_pres_4",
        question: "It's essential that we _____ prepared.",
        translation: "Es esencial que estemos preparados.",
        options: ["be", "are", "were", "being"],
        correct: "be",
        explanation: "Con expresiones de necesidad como 'it's essential' usamos subjuntivo. La forma 'be' permanece sin conjugar aunque el sujeto sea 'we'. Esta construcción enfatiza la importancia crítica de la preparación. El español 'estemos' requiere subjuntivo completo. Ambos idiomas reconocen gramaticalmente cuando algo es absolutamente necesario versus simplemente deseable."
      },
      {
        id: "subj_pres_5",
        question: "The teacher insists that every student _____ the homework.",
        translation: "El profesor insiste en que cada estudiante haga la tarea.",
        options: ["do", "does", "did", "doing"],
        correct: "do",
        explanation: "Después de 'insist' usamos subjuntivo. La forma base 'do' se mantiene igual para todos los sujetos. Esta estructura comunica una regla no negociable del profesor. El español 'haga' usa subjuntivo porque es una exigencia no un hecho. Es la forma gramatical apropiada para establecer expectativas claras en el aula."
      },
      {
        id: "subj_pres_6",
        question: "I recommend that he _____ more vegetables.",
        translation: "Recomiendo que él coma más vegetales.",
        options: ["eat", "eats", "ate", "eating"],
        correct: "eat",
        explanation: "El verbo 'recommend' activa el subjuntivo. Usamos 'eat' sin la 's' de tercera persona. Esta es una sugerencia de salud típica. El español 'coma' requiere subjuntivo completo para recomendaciones. Las recomendaciones nutricionales suenan más profesionales y menos impositivas cuando usamos la forma subjuntiva apropiada."
      },
      {
        id: "subj_pres_7",
        question: "It's necessary that you _____ early tomorrow.",
        translation: "Es necesario que llegues temprano mañana.",
        options: ["arrive", "arrives", "arrived", "arriving"],
        correct: "arrive",
        explanation: "La expresión 'it's necessary that' requiere subjuntivo. La forma base 'arrive' no cambia por persona. Esta estructura establece un requerimiento claro. El español 'llegues' usa subjuntivo para esta necesidad. Es más suave que un comando directo, manteniendo la cortesía mientras comunica la importancia de la puntualidad."
      },
      {
        id: "subj_pres_8",
        question: "She proposes that the meeting _____ postponed.",
        translation: "Ella propone que la reunión sea pospuesta.",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "Después de 'propose' usamos subjuntivo. El verbo 'be' en subjuntivo no cambia. Esta construcción presenta una sugerencia formal sobre cambiar planes. El español 'sea pospuesta' también requiere subjuntivo para propuestas. En entornos profesionales, esta forma permite sugerir cambios sin imponer, respetando el proceso democrático de toma de decisiones."
      },
      {
        id: "subj_pres_9",
        question: "It's crucial that they _____ the deadline.",
        translation: "Es crucial que ellos cumplan la fecha límite.",
        options: ["meet", "meets", "met", "meeting"],
        correct: "meet",
        explanation: "Con 'it's crucial' usamos subjuntivo. La forma 'meet' (cumplir/alcanzar) permanece sin cambios. Esta estructura enfatiza la importancia crítica de la puntualidad. El español 'cumplan' usa subjuntivo para esta urgencia. En proyectos importantes, esta forma gramatical comunica que no hay flexibilidad con las fechas establecidas."
      },
      {
        id: "subj_pres_10",
        question: "I insist that he _____ me the truth.",
        translation: "Insisto en que él me diga la verdad.",
        options: ["tell", "tells", "told", "telling"],
        correct: "tell",
        explanation: "El verbo 'insist' requiere subjuntivo en la cláusula siguiente. Usamos 'tell' sin modificar por persona. Esta construcción exige honestidad de manera firme. El español 'diga' usa subjuntivo completo para esta demanda. Es la forma gramaticalmente correcta de expresar que no aceptaremos menos que total transparencia."
      },
      {
        id: "subj_pres_11",
        question: "It's vital that we _____ immediately.",
        translation: "Es vital que actuemos inmediatamente.",
        options: ["act", "acts", "acted", "acting"],
        correct: "act",
        explanation: "La expresión 'it's vital' indica máxima urgencia y requiere subjuntivo. La forma base 'act' se usa sin cambios. Esta estructura comunica que el tiempo es crítico. El español 'actuemos' también usa subjuntivo para esta emergencia. En situaciones de crisis, esta forma gramatical transmite la necesidad imperiosa de acción rápida."
      },
      {
        id: "subj_pres_12",
        question: "She suggests that I _____ a break.",
        translation: "Ella sugiere que yo tome un descanso.",
        options: ["take", "takes", "took", "taking"],
        correct: "take",
        explanation: "Después de 'suggest' usamos subjuntivo. La forma base es 'take' para todas las personas. Esta es una recomendación de cuidado personal. El español 'tome' usa subjuntivo para sugerencias. Es una forma considerada de aconsejar descanso sin sonar mandona, reconociendo que todos necesitamos pausas ocasionales."
      },
      {
        id: "subj_pres_13",
        question: "It's imperative that he _____ his medication daily.",
        translation: "Es imperativo que él tome su medicamento diariamente.",
        options: ["take", "takes", "took", "taking"],
        correct: "take",
        explanation: "La palabra 'imperative' indica absoluta necesidad y requiere subjuntivo. Usamos 'take' sin modificar. Esta estructura enfatiza instrucciones médicas cruciales. El español 'tome' también usa subjuntivo para esta orden médica. Es la forma apropiada para comunicar que seguir el tratamiento no es opcional sino vital para la salud."
      },
      {
        id: "subj_pres_14",
        question: "I request that the report _____ submitted by Friday.",
        translation: "Solicito que el informe sea entregado para el viernes.",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "El verbo 'request' activa el subjuntivo. Con voz pasiva en subjuntivo usamos 'be' más participio ('be submitted'). Esta es una solicitud formal con fecha límite. El español 'sea entregado' también combina subjuntivo con pasiva. En comunicación profesional, esta construcción permite hacer solicitudes con autoridad pero manteniendo cortesía."
      },
      {
        id: "subj_pres_15",
        question: "It's important that she _____ informed of any changes.",
        translation: "Es importante que ella sea informada de cualquier cambio.",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "Después de 'it's important' usamos subjuntivo 'be'. Esta construcción pasiva en subjuntivo ('be informed') es compleja. Esta estructura establece que mantenerla informada es una prioridad. El español 'sea informada' también usa subjuntivo pasivo. Es la forma respetuosa de establecer que alguien tiene derecho a estar al tanto de los desarrollos."
      }
    ]
  },

  commands_imperatives: {
    name: "Comandos e Imperativos",
    description: "Dar órdenes, instrucciones y consejos",
    icon: Flag,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "imper_1",
        question: "_____ the door, please!",
        translation: "¡Cierra la puerta, por favor!",
        options: ["Close", "Closes", "Closing", "Closed"],
        correct: "Close",
        explanation: "Los imperativos en inglés usan la forma base del verbo sin sujeto. Para dar órdenes directas simplemente decimos 'Close' sin 'you'. La palabra 'please' suaviza el comando haciéndolo más cortés. El español '¡Cierra!' también es directo. Aunque parezca abrupto, es la forma estándar de dar instrucciones rápidas."
      },
      {
        id: "imper_2",
        question: "Don't _____ in the library!",
        translation: "¡No hables en la biblioteca!",
        options: ["talk", "talks", "talking", "talked"],
        correct: "talk",
        explanation: "Para imperativos negativos usamos 'Don't' más la forma base del verbo. Aquí 'Don't talk' establece una regla de comportamiento. El español '¡No hables!' también es directo. Esta forma es apropiada para recordar normas de conducta en espacios públicos donde el silencio es importante para que todos puedan concentrarse."
      },
      {
        id: "imper_3",
        question: "_____ careful with that knife!",
        translation: "¡Ten cuidado con ese cuchillo!",
        options: ["Be", "Is", "Are", "Being"],
        correct: "Be",
        explanation: "El verbo 'be' en imperativo es simplemente 'Be'. Esta es una advertencia de seguridad importante. El adjetivo 'careful' describe el estado que queremos. El español '¡Ten cuidado!' o '¡Sé cuidadoso!' también advierte peligro. Es la forma apropiada de expresar preocupación por la seguridad de alguien, especialmente con objetos afilados."
      },
      {
        id: "imper_4",
        question: "_____ forget to call your mother!",
        translation: "¡No olvides llamar a tu madre!",
        options: ["Don't", "Doesn't", "Didn't", "Not"],
        correct: "Don't",
        explanation: "El imperativo negativo siempre comienza con 'Don't' seguido de la forma base. Aquí es un recordatorio familiar afectuoso. El verbo 'forget' se mantiene sin cambios. El español '¡No olvides!' también es un recordatorio gentil. Las madres aprecian las llamadas de sus hijos, y este comando suave nos recuerda mantener el contacto familiar."
      },
      {
        id: "imper_5",
        question: "_____ your hands before eating!",
        translation: "¡Lávate las manos antes de comer!",
        options: ["Wash", "Washes", "Washing", "Washed"],
        correct: "Wash",
        explanation: "Imperativo simple 'Wash' para una instrucción de higiene básica. Este comando es fundamental para la salud. El español '¡Lávate!' incluye el pronombre reflexivo que el inglés omite. Esta forma es apropiada para recordar buenos hábitos sanitarios, especialmente importante enseñar a niños desde pequeños."
      },
      {
        id: "imper_6",
        question: "Let's _____ a movie tonight!",
        translation: "¡Veamos una película esta noche!",
        options: ["watch", "watches", "watching", "watched"],
        correct: "watch",
        explanation: "La construcción 'Let's' (let us) más forma base crea un imperativo inclusivo que significa 'hagamos'. No es un comando sino una sugerencia grupal. El español '¡Veamos!' también incluye al hablante. Esta forma es amistosa para proponer actividades compartidas, creando un sentido de cooperación y diversión conjunta."
      },
      {
        id: "imper_7",
        question: "_____ quietly in the hallway!",
        translation: "¡Camina silenciosamente en el pasillo!",
        options: ["Walk", "Walks", "Walking", "Walked"],
        correct: "Walk",
        explanation: "Imperativo 'Walk' seguido del adverbio 'quietly' que describe cómo caminar. Esta instrucción es común en escuelas u hospitales. El español '¡Camina silenciosamente!' también pide consideración. Es la forma educada de pedir respeto por otros que necesitan tranquilidad, enseñando conciencia del entorno."
      },
      {
        id: "imper_8",
        question: "_____ worry about it!",
        translation: "¡No te preocupes por eso!",
        options: ["Don't", "Doesn't", "Didn't", "Not"],
        correct: "Don't",
        explanation: "Imperativo negativo 'Don't worry' es una frase reconfortante muy común. Ofrece tranquilidad a alguien estresado. El verbo 'worry' significa preocuparse. El español '¡No te preocupes!' también calma ansiedades. Es una expresión de apoyo emocional que todos necesitamos escuchar cuando enfrentamos dificultades."
      },
      {
        id: "imper_9",
        question: "_____ to bring your passport!",
        translation: "¡Recuerda traer tu pasaporte!",
        options: ["Remember", "Remembers", "Remembering", "Remembered"],
        correct: "Remember",
        explanation: "Imperativo 'Remember' es un recordatorio importante para viajes. La forma base del verbo se usa directamente. El infinitivo 'to bring' sigue al imperativo. El español '¡Recuerda traer!' también es un aviso crucial. Esta forma es esencial para recordatorios de viaje, evitando problemas serios en el aeropuerto."
      },
      {
        id: "imper_10",
        question: "_____ that again!",
        translation: "¡No hagas eso otra vez!",
        options: ["Don't do", "Doesn't do", "Didn't do", "Not do"],
        correct: "Don't do",
        explanation: "Imperativo negativo enfático 'Don't do that again' expresa frustración o advertencia. El adverbio 'again' enfatiza que no debe repetirse. El español '¡No hagas eso otra vez!' también comunica molestia. Es la forma apropiada de establecer límites sobre comportamientos inaceptables que ya ocurrieron."
      },
      {
        id: "imper_11",
        question: "Please _____ me when you arrive.",
        translation: "Por favor avísame cuando llegues.",
        options: ["tell", "tells", "telling", "told"],
        correct: "tell",
        explanation: "Imperativo educado con 'Please' al inicio. El verbo 'tell' se usa en forma base. Esta es una solicitud cortés de comunicación. El español 'avísame' es similar en tono. Esta forma muestra respeto mientras pide que alguien mantenga informado, útil para coordinar encuentros."
      },
      {
        id: "imper_12",
        question: "_____ so much noise!",
        translation: "¡No hagas tanto ruido!",
        options: ["Don't make", "Doesn't make", "Didn't make", "Not make"],
        correct: "Don't make",
        explanation: "El imperativo negativo 'Don't make' con 'noise' es una queja común sobre ruido. La expresión 'so much' enfatiza el exceso. El español '¡No hagas tanto ruido!' también expresa molestia. Es la forma directa de pedir silencio cuando el ruido está afectando a otros, especialmente en espacios compartidos."
      },
      {
        id: "imper_13",
        question: "_____ something warm - it's cold outside!",
        translation: "¡Ponte algo abrigado - hace frío afuera!",
        options: ["Wear", "Wears", "Wearing", "Wore"],
        correct: "Wear",
        explanation: "Imperativo 'Wear' seguido de 'something warm' es un consejo maternal. La explicación adicional después del guión justifica el consejo. El español '¡Ponte!' es más reflexivo que el inglés. Esta forma muestra cuidado por el bienestar de alguien, advirtiendo sobre el clima para prevenir que se enfermen."
      },
      {
        id: "imper_14",
        question: "Let's _____ be late for the appointment!",
        translation: "¡No lleguemos tarde a la cita!",
        options: ["not", "don't", "doesn't", "no"],
        correct: "not",
        explanation: "Para hacer negativo 'Let's' usamos 'Let's not' (no 'Let's don't'). Esta forma sugiere puntualidad grupal. El infinitivo 'be late' sigue a 'not'. El español '¡No lleguemos!' también incluye al hablante. Es una forma motivadora de asegurar que el grupo entero llegue a tiempo."
      },
      {
        id: "imper_15",
        question: "_____ your seatbelt while driving!",
        translation: "¡Usa tu cinturón de seguridad mientras conduces!",
        options: ["Wear", "Wears", "Wearing", "Wore"],
        correct: "Wear",
        explanation: "Imperativo de seguridad 'Wear your seatbelt' es una instrucción vital. El gerundio 'while driving' añade el contexto temporal. El español '¡Usa tu cinturón!' también es un recordatorio de seguridad crucial. Esta forma comunica una regla de tránsito que puede salvar vidas, haciendo énfasis en la prevención de accidentes."
      }
    ]
  }
};

export default part5Categories;