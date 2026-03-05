/**
 * SPANISH → ENGLISH GRAMMAR - PART 20
 * 4 categories, 15 questions each
 */

import { Timer, Wind, Mountain, Sun } from "lucide-react";

export const part20Categories = {
  relative_clauses_who_which: {
    name: "Cláusulas Relativas",
    description: "Who, which, that - conectar información adicional",
    icon: Timer,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "rel_cl_1",
        question: "The woman _____ lives next door is a doctor.",
        translation: "La mujer que vive al lado es doctora.",
        options: ["who", "which", "what", "whose"],
        correct: "who",
        explanation: "Para PERSONAS usamos 'who' en cláusulas relativas. 'Who lives next door' añade información sobre la mujer. En español 'que' sirve para personas y cosas, pero inglés separa: 'who' para personas, 'which' para cosas. Esta estructura permite añadir detalles sin crear oraciones separadas múltiples."
      },
      {
        id: "rel_cl_2",
        question: "The book _____ I bought yesterday is very interesting.",
        translation: "El libro que compré ayer es muy interesante.",
        options: ["that", "who", "what", "whose"],
        correct: "that",
        explanation: "Para COSAS u objetos usamos 'that' o 'which'. Aquí 'that' es más común en inglés americano. La cláusula 'that I bought' especifica cuál libro. En español 'que compré' también añade esta información. El pronombre relativo conecta las dos ideas sobre el libro en una sola oración fluida."
      },
      {
        id: "rel_cl_3",
        question: "I have a friend _____ speaks five languages fluently.",
        translation: "Tengo un amigo que habla cinco idiomas con fluidez.",
        options: ["who", "which", "what", "that"],
        correct: "who",
        explanation: "Para describir PERSONA (amigo) usamos 'who'. La cláusula 'who speaks five languages' describe su habilidad impresionante. En español 'que habla' es neutral. Esta capacidad multilingüe es talento notable que merece mención en conversación."
      },
      {
        id: "rel_cl_4",
        question: "The car _____ he drives is very expensive and new.",
        translation: "El auto que él maneja es muy caro y nuevo.",
        options: ["that", "who", "what", "whose"],
        correct: "that",
        explanation: "Para OBJETO (auto) usamos 'that' o 'which'. La cláusula 'that he drives' identifica cuál auto específico. En español 'que él maneja' también especifica. Esta observación sobre vehículo costoso puede ser admiración o simple comentario sobre sus recursos financieros."
      },
      {
        id: "rel_cl_5",
        question: "The restaurant _____ we went to last night was amazing.",
        translation: "El restaurante al que fuimos anoche era increíble.",
        options: ["that", "who", "what", "whose"],
        correct: "that",
        explanation: "Para LUGAR (restaurante) usamos 'that' o 'which'. La cláusula 'that we went to' especifica cuál restaurante. En español 'al que fuimos' también localiza. Esta recomendación entusiasta sobre experiencia culinaria probablemente incluirá detalles sobre platillos específicos que disfrutaron."
      },
      {
        id: "rel_cl_6",
        question: "The teacher _____ taught me math retired last year.",
        translation: "El profesor que me enseñó matemáticas se jubiló el año pasado.",
        options: ["who", "which", "what", "that"],
        correct: "who",
        explanation: "Para PERSONA (profesor) usamos 'who'. La cláusula 'who taught me math' identifica cuál profesor específico de varios posibles. En español 'que me enseñó' también identifica. Esta mención de retiro marca fin de carrera docente que probablemente impactó a muchos estudiantes a lo largo de años."
      },
      {
        id: "rel_cl_7",
        question: "I don't like movies _____ have sad endings at all.",
        translation: "No me gustan las películas que tienen finales tristes para nada.",
        options: ["that", "who", "what", "whose"],
        correct: "that",
        explanation: "Para COSAS (películas) usamos 'that'. La cláusula 'that have sad endings' describe el tipo de películas. En español 'que tienen' también clasifica. Esta preferencia por finales felices es común porque las personas frecuentemente buscan entretenimiento que las haga sentir bien."
      },
      {
        id: "rel_cl_8",
        question: "The house _____ windows are broken needs urgent repairs.",
        translation: "La casa cuyas ventanas están rotas necesita reparaciones urgentes.",
        options: ["whose", "who", "which", "that"],
        correct: "whose",
        explanation: "Para POSESIÓN usamos 'whose': 'whose windows' significa 'las ventanas de la casa'. Es pronombre posesivo relativo que conecta la casa con sus ventanas. En español 'cuyas ventanas' también indica posesión. Esta descripción de deterioro establece necesidad urgente de mantenimiento estructural."
      },
      {
        id: "rel_cl_9",
        question: "The students _____ passed the exam celebrated together loudly.",
        translation: "Los estudiantes que pasaron el examen celebraron juntos ruidosamente.",
        options: ["who", "which", "what", "whose"],
        correct: "who",
        explanation: "Para PERSONAS en plural (estudiantes) usamos 'who'. La cláusula 'who passed' especifica el subgrupo que aprobó. En español 'que pasaron' también selecciona. Esta celebración colectiva de éxito académico compartido crea sentido de camaradería entre quienes superaron el desafío juntos."
      },
      {
        id: "rel_cl_10",
        question: "I need something _____ can help me with this problem.",
        translation: "Necesito algo que pueda ayudarme con este problema.",
        options: ["that", "who", "what", "whose"],
        correct: "that",
        explanation: "Para COSA indefinida (algo) usamos 'that'. La cláusula 'that can help' describe qué tipo de cosa necesitas. En español 'que pueda ayudarme' también especifica. Esta búsqueda de solución o herramienta muestra disposición a usar recursos disponibles para resolver dificultad."
      },
      {
        id: "rel_cl_11",
        question: "The girl _____ I met at the party is very kind.",
        translation: "La chica que conocí en la fiesta es muy amable.",
        options: ["who", "which", "what", "whose"],
        correct: "who",
        explanation: "Para PERSONA conocida en evento usamos 'who'. También podríamos usar 'that'. La cláusula 'who I met' identifica cuál chica específica. En español 'que conocí' también localiza temporalmente. Esta nueva conexión social en fiesta puede ser inicio de amistad prometedora."
      },
      {
        id: "rel_cl_12",
        question: "This is the place _____ I was born many years ago.",
        translation: "Este es el lugar donde nací hace muchos años.",
        options: ["where", "which", "that", "who"],
        correct: "where",
        explanation: "Para LUGARES usamos 'where' como alternativa a 'in which' o 'that'. Es más natural y común. La cláusula 'where I was born' añade significado emocional al lugar. En español 'donde nací' también usa adverbio relativo. Los lugares de nacimiento tienen significado sentimental especial."
      },
      {
        id: "rel_cl_13",
        question: "The dog _____ bit me last week belonged to my neighbor.",
        translation: "El perro que me mordió la semana pasada era de mi vecino.",
        options: ["that", "who", "what", "whose"],
        correct: "that",
        explanation: "Para ANIMALES generalmente usamos 'that' o 'which' (no 'who' a menos que sea mascota muy querida). La cláusula 'that bit me' identifica cuál perro específico. En español 'que me mordió' también especifica. Este incidente probablemente requirió conversación difícil con el vecino sobre control de mascota."
      },
      {
        id: "rel_cl_14",
        question: "I remember the day _____ we first met each other.",
        translation: "Recuerdo el día cuando nos conocimos por primera vez.",
        options: ["when", "which", "that", "who"],
        correct: "when",
        explanation: "Para TIEMPO usamos 'when': 'the day when we met'. Es más natural que 'the day on which'. La cláusula temporal añade contexto emotivo. En español 'cuando nos conocimos' también usa adverbio temporal. Los primeros encuentros significativos quedan grabados en memoria con claridad especial."
      },
      {
        id: "rel_cl_15",
        question: "That's the reason _____ I couldn't come to the party.",
        translation: "Esa es la razón por la que no pude venir a la fiesta.",
        options: ["why", "which", "that", "who"],
        correct: "why",
        explanation: "Para RAZONES usamos 'why': 'the reason why I couldn't come'. También podríamos omitir 'why' y decir solo 'the reason I couldn't come'. En español 'por la que no pude' usa 'por la que'. Esta explicación de ausencia justifica por qué no asististe a evento social importante."
      }
    ]
  },

  gerund_vs_infinitive: {
    name: "Gerundio vs Infinitivo",
    description: "To do o doing - elegir la forma correcta después de verbos",
    icon: Wind,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "ger_inf_1",
        question: "I enjoy _____ to music in my free time.",
        translation: "Disfruto escuchar música en mi tiempo libre.",
        options: ["listening", "to listen", "listen", "listened"],
        correct: "listening",
        explanation: "Después de 'enjoy' SIEMPRE usamos gerundio (-ing): 'enjoy listening'. Nunca infinitivo con 'to'. En español 'disfruto escuchar' usa infinitivo donde inglés requiere gerundio. Esta diferencia es una de las más difíciles para hispanohablantes porque no hay lógica clara, solo memorización de qué verbos requieren qué forma."
      },
      {
        id: "ger_inf_2",
        question: "She decided _____ a new language this year finally.",
        translation: "Ella decidió aprender un nuevo idioma este año finalmente.",
        options: ["to learn", "learning", "learn", "learned"],
        correct: "to learn",
        explanation: "Después de 'decide' usamos infinitivo con 'to': 'decided to learn'. Nunca gerundio. En español 'decidió aprender' también usa infinitivo. Los verbos de decisión, planes y deseos típicamente van con infinitivo en inglés. Esta meta de año nuevo de aprender idioma es propósito común que requiere compromiso sostenido."
      },
      {
        id: "ger_inf_3",
        question: "He avoided _____ about the embarrassing incident yesterday.",
        translation: "Él evitó hablar sobre el incidente vergonzoso de ayer.",
        options: ["talking", "to talk", "talk", "talked"],
        correct: "talking",
        explanation: "Después de 'avoid' usamos gerundio: 'avoided talking'. Verbos de evasión o escape van con -ing. En español 'evitó hablar' usa infinitivo. Esta decisión de no discutir tema incómodo es táctica de evitación que protege de revivir vergüenza pero quizás impide procesamiento emocional."
      },
      {
        id: "ger_inf_4",
        question: "They want _____ the concert next Saturday evening.",
        translation: "Ellos quieren asistir al concierto el próximo sábado en la tarde.",
        options: ["to attend", "attending", "attend", "attended"],
        correct: "to attend",
        explanation: "Después de 'want' usamos infinitivo: 'want to attend'. Verbos de deseo van con 'to'. En español 'quieren asistir' también usa infinitivo. Esta expresión de deseo sobre evento musical muestra interés que probablemente resultará en compra de boletos si están disponibles."
      },
      {
        id: "ger_inf_5",
        question: "I can't stand _____ in long lines at the store.",
        translation: "No soporto esperar en filas largas en la tienda.",
        options: ["waiting", "to wait", "wait", "waited"],
        correct: "waiting",
        explanation: "Después de 'can't stand' (no soportar) usamos gerundio: 'can't stand waiting'. Expresa algo que nos molesta intensamente. En español 'no soporto esperar' usa infinitivo. Esta frustración universal con filas es común en vida moderna donde valoramos eficiencia y tiempo es escaso."
      },
      {
        id: "ger_inf_6",
        question: "She promised _____ me with the project next week.",
        translation: "Ella prometió ayudarme con el proyecto la próxima semana.",
        options: ["to help", "helping", "help", "helped"],
        correct: "to help",
        explanation: "Después de 'promise' usamos infinitivo: 'promised to help'. Compromisos y promesas van con 'to'. En español 'prometió ayudarme' también usa infinitivo. Esta promesa de colaboración futura crea expectativa de apoyo que debe cumplirse para mantener confianza."
      },
      {
        id: "ger_inf_7",
        question: "We finished _____ the house around midnight last night.",
        translation: "Terminamos de limpiar la casa alrededor de medianoche anoche.",
        options: ["cleaning", "to clean", "clean", "cleaned"],
        correct: "cleaning",
        explanation: "Después de 'finish' usamos gerundio: 'finished cleaning'. Verbos de completitud van con -ing. En español 'terminamos de limpiar' usa preposición más infinitivo. Esta limpieza nocturna tardía sugiere que fue tarea grande o que se pospuso hasta último momento antes de evento."
      },
      {
        id: "ger_inf_8",
        question: "He refused _____ their unreasonable offer completely.",
        translation: "Él se negó a aceptar su oferta poco razonable completamente.",
        options: ["to accept", "accepting", "accept", "accepted"],
        correct: "to accept",
        explanation: "Después de 'refuse' usamos infinitivo: 'refused to accept'. Rechazos y negativas van con 'to'. En español 'se negó a aceptar' también usa 'a' más infinitivo. Esta firmeza en rechazar oferta injusta muestra que tiene límites claros sobre qué está dispuesto a tolerar."
      },
      {
        id: "ger_inf_9",
        question: "She suggested _____ early to avoid traffic tomorrow morning.",
        translation: "Ella sugirió salir temprano para evitar tráfico mañana en la mañana.",
        options: ["leaving", "to leave", "leave", "left"],
        correct: "leaving",
        explanation: "Después de 'suggest' usamos gerundio: 'suggested leaving'. En español 'sugirió salir' usa infinitivo. Esta recomendación práctica sobre timing ayuda a evitar frustración de congestión matutina. Los verbos de sugerencia típicamente van con gerundio en inglés."
      },
      {
        id: "ger_inf_10",
        question: "I hope _____ you again soon at another meeting.",
        translation: "Espero verte de nuevo pronto en otra reunión.",
        options: ["to see", "seeing", "see", "saw"],
        correct: "to see",
        explanation: "Después de 'hope' usamos infinitivo: 'hope to see you'. Esperanzas y deseos futuros van con 'to'. En español 'espero verte' también usa infinitivo. Esta expresión cordial al despedirse muestra que el encuentro fue positivo y hay interés en repetirlo."
      },
      {
        id: "ger_inf_11",
        question: "They considered _____ to another city for better jobs.",
        translation: "Ellos consideraron mudarse a otra ciudad para mejores trabajos.",
        options: ["moving", "to move", "move", "moved"],
        correct: "moving",
        explanation: "Después de 'consider' usamos gerundio: 'considered moving'. Verbos de contemplación van con -ing. En español 'consideraron mudarse' usa infinitivo reflexivo. Esta deliberación sobre reubicación por oportunidades laborales es decisión importante que requiere balance entre carrera y conexiones personales existentes."
      },
      {
        id: "ger_inf_12",
        question: "He agreed _____ us with the heavy furniture tomorrow.",
        translation: "Él aceptó ayudarnos con los muebles pesados mañana.",
        options: ["to help", "helping", "help", "helped"],
        correct: "to help",
        explanation: "Después de 'agree' usamos infinitivo: 'agreed to help'. Acuerdos y aceptaciones van con 'to'. En español 'aceptó ayudarnos' también usa infinitivo. Esta aceptación de ayudar con mudanza es favor significativo que requiere tiempo y esfuerzo físico considerable."
      },
      {
        id: "ger_inf_13",
        question: "I don't mind _____ for you if you're running late.",
        translation: "No me importa esperar por ti si vas retrasado.",
        options: ["waiting", "to wait", "wait", "waited"],
        correct: "waiting",
        explanation: "Después de 'mind' (importar) usamos gerundio: 'don't mind waiting'. En español 'no me importa esperar' usa infinitivo. Esta paciencia con tardanza de otros muestra flexibilidad y comprensión de que imprevistos ocurren. Es gesto de amistad verdadera."
      },
      {
        id: "ger_inf_14",
        question: "She plans _____ her own business next year ambitiously.",
        translation: "Ella planea comenzar su propio negocio el próximo año ambiciosamente.",
        options: ["to start", "starting", "start", "started"],
        correct: "to start",
        explanation: "Después de 'plan' usamos infinitivo: 'plans to start'. Planes futuros van con 'to'. En español 'planea comenzar' también usa infinitivo. Esta ambición emprendedora de independencia económica requiere planificación cuidadosa y coraje para asumir riesgos de negocio propio."
      },
      {
        id: "ger_inf_15",
        question: "We kept _____ even when we were very tired.",
        translation: "Seguimos trabajando incluso cuando estábamos muy cansados.",
        options: ["working", "to work", "work", "worked"],
        correct: "working",
        explanation: "Después de 'keep' (continuar/seguir) usamos gerundio: 'kept working'. Indica continuación de acción. En español 'seguimos trabajando' también usa gerundio. Esta perseverancia a pesar de fatiga muestra determinación de completar tarea importante sin importar cómo se sientan físicamente."
      }
    ]
  },

  passive_voice_advanced: {
    name: "Voz Pasiva Avanzada",
    description: "Diferentes tiempos en pasivo - transformaciones complejas",
    icon: Mountain,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "pass_adv_1",
        question: "The new hospital _____ _____ built next year by the city.",
        translation: "El nuevo hospital será construido el próximo año por la ciudad.",
        options: ["will be", "is being", "has been", "was"],
        correct: "will be",
        explanation: "Para futuro pasivo usamos 'will be' + participio: 'will be built'. El sujeto (hospital) recibe la acción pero no la ejecuta. En español 'será construido' también es futuro pasivo. Esta construcción enfoca en el proyecto no en quién lo hace, útil cuando el objeto es más importante que el agente."
      },
      {
        id: "pass_adv_2",
        question: "The house _____ _____ _____ painted when I arrived yesterday.",
        translation: "La casa estaba siendo pintada cuando llegué ayer.",
        options: ["was being", "is being", "has been", "will be"],
        correct: "was being",
        explanation: "Para acción pasiva EN PROGRESO en el pasado usamos 'was being' + participio: 'was being painted'. Es pasado continuo en voz pasiva. En español 'estaba siendo pintada' también usa gerundio pasivo. Esta escena de trabajo en curso muestra que llegaste durante el proceso de renovación."
      },
      {
        id: "pass_adv_3",
        question: "The letter _____ _____ _____ delivered yet to my address.",
        translation: "La carta no ha sido entregada todavía a mi dirección.",
        options: ["hasn't been", "wasn't", "isn't", "won't be"],
        correct: "hasn't been",
        explanation: "Para presente perfecto pasivo negativo usamos 'hasn't been' + participio: 'hasn't been delivered'. Conecta pasado con presente. En español 'no ha sido entregada' también usa presente perfecto. La palabra 'yet' típicamente indica presente perfecto, marcando que esperas pero aún no llegó."
      },
      {
        id: "pass_adv_4",
        question: "This song _____ _____ by millions of people worldwide.",
        translation: "Esta canción es amada por millones de personas en todo el mundo.",
        options: ["is loved", "was loved", "has loved", "loves"],
        correct: "is loved",
        explanation: "Para presente simple pasivo usamos 'is/are' + participio: 'is loved by millions'. Expresa estado actual permanente. En español 'es amada' también es pasivo presente. Esta popularidad global de canción establece su estatus icónico y conexión emocional que tiene con audiencia masiva."
      },
      {
        id: "ger_inf_5",
        question: "The project _____ _____ completed before the deadline yesterday.",
        translation: "El proyecto fue completado antes de la fecha límite ayer.",
        options: ["was", "has been", "is being", "will be"],
        correct: "was",
        explanation: "Para pasado simple pasivo usamos 'was/were' + participio: 'was completed'. Es acción pasada completada. En español 'fue completado' también es pretérito pasivo. El cumplimiento anticipado del deadline es logro que merece reconocimiento del equipo que trabajó eficientemente."
      },
      {
        id: "pass_adv_6",
        question: "The report _____ _____ _____ reviewed by the manager now.",
        translation: "El informe está siendo revisado por el gerente ahora.",
        options: ["is being", "has been", "was being", "will be"],
        correct: "is being",
        explanation: "Para presente continuo pasivo usamos 'is being' + participio: 'is being reviewed'. Acción en progreso ahora mismo. En español 'está siendo revisado' también usa gerundio. La palabra 'now' confirma que el proceso de revisión está ocurriendo en este momento exacto."
      },
      {
        id: "pass_adv_7",
        question: "Many languages _____ _____ in this multicultural country daily.",
        translation: "Muchos idiomas son hablados en este país multicultural diariamente.",
        options: ["are spoken", "is spoken", "were spoken", "have spoken"],
        correct: "are spoken",
        explanation: "Para presente simple pasivo con plural usamos 'are' + participio: 'languages are spoken'. En español 'son hablados' también es pasivo presente plural. Esta diversidad lingüística de país multicultural refleja riqueza cultural de inmigración y comunidades variadas coexistiendo."
      },
      {
        id: "pass_adv_8",
        question: "The building _____ _____ destroyed by fire last month sadly.",
        translation: "El edificio fue destruido por fuego el mes pasado tristemente.",
        options: ["was", "has been", "is being", "will be"],
        correct: "was",
        explanation: "Para evento pasado específico en pasivo usamos 'was' + participio: 'was destroyed'. Tiempo específico 'last month' requiere pasado simple. En español 'fue destruido' también es pretérito. Este incendio destructivo representa pérdida significativa de propiedad y posiblemente memorias si era edificio histórico."
      },
      {
        id: "pass_adv_9",
        question: "A new bridge _____ _____ _____ constructed here for years.",
        translation: "Un nuevo puente ha estado siendo construido aquí por años.",
        options: ["has been being", "is being", "was being", "will be"],
        correct: "has been being",
        explanation: "Para acción pasiva continua que empezó en pasado y continúa usamos 'has been being' + participio. Es presente perfecto continuo pasivo, muy formal. En español 'ha estado siendo construido' también es complejo. Esta construcción prolongada sugiere que proyecto ha enfrentado retrasos o es obra masiva."
      },
      {
        id: "pass_adv_10",
        question: "The cake _____ _____ eaten by the children quickly.",
        translation: "El pastel fue comido por los niños rápidamente.",
        options: ["was", "has been", "is being", "will be"],
        correct: "was",
        explanation: "Para acción completada en pasado usamos pasado simple pasivo: 'was eaten'. El adverbio 'quickly' enfatiza la velocidad de consumo. En español 'fue comido' también es pasado. Esta rapidez en devorar pastel muestra cuán delicioso era o cuán hambrientos estaban los niños."
      },
      {
        id: "pass_adv_11",
        question: "The documents _____ _____ signed by all members tomorrow.",
        translation: "Los documentos serán firmados por todos los miembros mañana.",
        options: ["will be", "are being", "have been", "were"],
        correct: "will be",
        explanation: "Para futuro pasivo usamos 'will be' + participio: 'will be signed tomorrow'. En español 'serán firmados' también es futuro pasivo. Esta firma colectiva programada sugiere acuerdo formal o contrato que requiere aprobación universal antes de entrar en vigor."
      },
      {
        id: "pass_adv_12",
        question: "This computer _____ _____ _____ used for ten years now.",
        translation: "Esta computadora ha sido usada por diez años ya.",
        options: ["has been", "is being", "was being", "will be"],
        correct: "has been",
        explanation: "Para duración que continúa hasta presente usamos presente perfecto pasivo: 'has been used'. La palabra 'now' confirma continuidad actual. En español 'ha sido usada' también conecta pasado con presente. Esta longevidad de computadora de diez años es impresionante en era de obsolescencia rápida."
      },
      {
        id: "pass_adv_13",
        question: "The problem _____ _____ solved if we work together cooperatively.",
        translation: "El problema será resuelto si trabajamos juntos cooperativamente.",
        options: ["will be", "is being", "has been", "was"],
        correct: "will be",
        explanation: "Para resultado futuro condicional en pasivo usamos 'will be' + participio: 'will be solved'. La condición 'if we work together' establece requisito. En español 'será resuelto' también es futuro. Esta optimismo sobre solución colaborativa enfatiza que cooperación es clave para superar dificultad."
      },
      {
        id: "pass_adv_14",
        question: "The windows _____ _____ _____ cleaned every week regularly.",
        translation: "Las ventanas son limpiadas cada semana regularmente.",
        options: ["are", "is being", "have been", "were"],
        correct: "are",
        explanation: "Para rutina regular presente en pasivo usamos presente simple: 'windows are cleaned'. La frecuencia 'every week' indica hábito. En español 'son limpiadas' también es presente habitual. Este mantenimiento semanal de ventanas mantiene edificio con apariencia cuidada y permite mejor entrada de luz."
      },
      {
        id: "pass_adv_15",
        question: "A solution _____ _____ _____ found before it's too late.",
        translation: "Una solución debe ser encontrada antes de que sea demasiado tarde.",
        options: ["must be", "is being", "has been", "was"],
        correct: "must be",
        explanation: "Para obligación o necesidad en pasivo usamos 'must be' + participio: 'must be found'. Expresa urgencia. En español 'debe ser encontrada' también usa modal. Esta presión temporal para encontrar solución crea sentido de urgencia que motiva acción inmediata antes de que problema empeore."
      }
    ]
  },

  have_has_possession_action: {
    name: "Have/Has - Posesión vs Acción",
    description: "Distinguir entre tener y experiencia - usos múltiples",
    icon: Sun,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "have_use_1",
        question: "I _____ a dog and two cats at my home.",
        translation: "Tengo un perro y dos gatos en mi casa.",
        options: ["have", "has", "am having", "had"],
        correct: "have",
        explanation: "Para POSESIÓN usamos 'have' (con I, you, we, they): 'I have a dog'. Es estado no acción, no usamos continuo. En español 'tengo' también es posesión. Este 'have' de posesión describe lo que tienes, no lo que haces. Las mascotas múltiples sugieren amor por animales."
      },
      {
        id: "have_use_2",
        question: "She _____ breakfast at 7 AM every morning without fail.",
        translation: "Ella desayuna a las 7 AM cada mañana sin falta.",
        options: ["has", "have", "is having", "had"],
        correct: "has",
        explanation: "Para RUTINA de comidas usamos 'have/has': 'she has breakfast'. Con tercera persona singular añadimos 's'. En español 'desayuna' usa verbo específico. Este 'have' significa comer/tomar. La puntualidad rigurosa de las 7 AM sugiere disciplina matutina estricta."
      },
      {
        id: "have_use_3",
        question: "We're _____ a great time at the beach today!",
        translation: "¡Estamos pasándola muy bien en la playa hoy!",
        options: ["having", "have", "has", "had"],
        correct: "having",
        explanation: "Para EXPERIENCIAS temporales usamos 'have' en CONTINUO: 'we're having a great time'. A diferencia de posesión, experiencias pueden ir en continuo. En español 'pasándola bien' o 'disfrutando' son equivalentes. Esta expresión de disfrute presente muestra que el momento actual es especialmente placentero."
      },
      {
        id: "have_use_4",
        question: "He _____ a headache since this morning unfortunately.",
        translation: "Él tiene dolor de cabeza desde esta mañana desafortunadamente.",
        options: ["has", "have", "is having", "had"],
        correct: "has",
        explanation: "Para DOLORES o molestias físicas usamos 'have/has': 'he has a headache'. No continuo generalmente. En español 'tiene dolor' también es presente. Esta molestia persistente desde la mañana probablemente está afectando su capacidad de concentrarse y puede requerir medicamento."
      },
      {
        id: "have_use_5",
        question: "They _____ three children - two boys and one girl.",
        translation: "Ellos tienen tres hijos - dos niños y una niña.",
        options: ["have", "has", "are having", "had"],
        correct: "have",
        explanation: "Para número de HIJOS (posesión familiar) usamos 'have': 'they have three children'. Es estado permanente. En español 'tienen tres hijos' también es posesión. Esta composición familiar de tres niños con especificación de géneros da imagen clara de la dinámica familiar."
      },
      {
        id: "have_use_6",
        question: "I usually _____ lunch around 1 PM at my office.",
        translation: "Usualmente almuerzo alrededor de la 1 PM en mi oficina.",
        options: ["have", "has", "am having", "had"],
        correct: "have",
        explanation: "Para rutina de COMIDA usamos 'have': 'I have lunch'. No continuo con rutinas. En español 'almuerzo' usa verbo específico. Este horario regular de almuerzo a la 1 PM estructura el día laboral y proporciona descanso necesario a mitad de jornada."
      },
      {
        id: "have_use_7",
        question: "She's _____ a baby next month - we're so excited!",
        translation: "Ella va a tener un bebé el próximo mes - ¡estamos tan emocionados!",
        options: ["having", "have", "has", "had"],
        correct: "having",
        explanation: "Para DAR A LUZ (tener bebé) usamos futuro continuo: 'is having a baby'. Es evento específico planeado futuro. En español 'va a tener' también indica futuro. Esta noticia emocionante de nacimiento próximo genera anticipación familiar y amistosa sobre llegada del nuevo miembro."
      },
      {
        id: "have_use_8",
        question: "We _____ dinner together as a family every Sunday night.",
        translation: "Cenamos juntos como familia cada domingo en la noche.",
        options: ["have", "has", "are having", "had"],
        correct: "have",
        explanation: "Para tradición SEMANAL de comida usamos presente simple: 'we have dinner'. Es rutina establecida. En español 'cenamos' usa verbo específico. Esta tradición dominical familiar crea ritual importante de conexión semanal donde todos comparten experiencias de la semana."
      },
      {
        id: "have_use_9",
        question: "He _____ a shower every morning before going to work.",
        translation: "Él se ducha cada mañana antes de ir al trabajo.",
        options: ["has", "have", "is having", "had"],
        correct: "has",
        explanation: "Para HIGIENE diaria usamos 'have/has': 'has a shower'. En inglés británico también 'have a bath'. En español 'se ducha' usa verbo reflexivo. Esta rutina matutina de higiene es preparación estándar para día laboral que ayuda a despertar y sentirse fresco."
      },
      {
        id: "have_use_10",
        question: "I _____ a meeting with my boss at 3 PM today.",
        translation: "Tengo una reunión con mi jefe a las 3 PM hoy.",
        options: ["have", "has", "am having", "had"],
        correct: "have",
        explanation: "Para CITAS o reuniones programadas usamos 'have': 'I have a meeting'. Es compromiso en agenda. En español 'tengo una reunión' también usa 'tener'. Este encuentro programado con superior probablemente es para evaluación de desempeño o discusión de proyecto importante."
      },
      {
        id: "have_use_11",
        question: "She _____ brown eyes and long dark hair naturally.",
        translation: "Ella tiene ojos marrones y cabello largo oscuro naturalmente.",
        options: ["has", "have", "is having", "had"],
        correct: "has",
        explanation: "Para CARACTERÍSTICAS físicas permanentes usamos 'have/has': 'she has brown eyes'. No usamos continuo con rasgos permanentes. En español 'tiene ojos marrones' también describe. Estas características inmutables forman parte de la identidad física de persona."
      },
      {
        id: "have_use_12",
        question: "We're _____ some problems with our internet connection today.",
        translation: "Estamos teniendo algunos problemas con nuestra conexión de internet hoy.",
        options: ["having", "have", "has", "had"],
        correct: "having",
        explanation: "Para PROBLEMAS temporales actuales podemos usar continuo: 'we're having problems'. Enfatiza que es situación temporal en curso. En español 'estamos teniendo' también puede usar gerundio. Esta dificultad técnica actual probablemente está afectando trabajo o entretenimiento en este momento."
      },
      {
        id: "have_use_13",
        question: "He _____ a lot of experience in teaching languages effectively.",
        translation: "Él tiene mucha experiencia en enseñar idiomas efectivamente.",
        options: ["has", "have", "is having", "had"],
        correct: "has",
        explanation: "Para EXPERIENCIA acumulada usamos 'have/has': 'has a lot of experience'. Es posesión de conocimiento. En español 'tiene mucha experiencia' también usa 'tener'. Esta expertise en enseñanza de idiomas sugiere que es profesor efectivo con años de práctica refinando métodos."
      },
      {
        id: "have_use_14",
        question: "I _____ a word with you about this issue privately.",
        translation: "Necesito hablar contigo sobre este asunto en privado.",
        options: ["have", "has", "am having", "had"],
        correct: "have",
        explanation: "La expresión idiomática 'have a word with someone' significa hablar brevemente. Es frase hecha. En español 'necesito hablar contigo' es más directo. Esta solicitud de conversación privada sugiere que hay tema delicado o importante que requiere discreción."
      },
      {
        id: "have_use_15",
        question: "She _____ a party next Friday for her birthday celebration.",
        translation: "Ella tendrá una fiesta el próximo viernes para su celebración de cumpleaños.",
        options: ["is having", "have", "has", "had"],
        correct: "is having",
        explanation: "Para EVENTO social futuro planeado usamos presente continuo: 'is having a party'. Indica plan definido próximo. En español 'tendrá una fiesta' usa futuro simple. Esta celebración de cumpleaños programada requiere preparativos y probablemente invitaciones ya enviadas."
      }
    ]
  },

  stative_verbs: {
    name: "Verbos Estativos",
    description: "Know, like, believe - verbos que raramente usan forma continua",
    icon: Sun,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "stat_v_1",
        question: "I _____ you're right about this matter completely.",
        translation: "Creo que tienes razón sobre este asunto completamente.",
        options: ["think", "am thinking", "thinks", "thought"],
        correct: "think",
        explanation: "Para OPINIÓN o CREENCIA usamos presente simple 'think' (no continuo): 'I think you're right'. Los verbos estativos de opinión no van en -ing. En español 'creo que' también es presente simple. Esta expresión de acuerdo valida la posición de la otra persona sobre el tema discutido."
      },
      {
        id: "stat_v_2",
        question: "She _____ three languages fluently since childhood.",
        translation: "Ella conoce tres idiomas con fluidez desde la niñez.",
        options: ["knows", "is knowing", "know", "knew"],
        correct: "knows",
        explanation: "El verbo 'know' (conocer/saber) es ESTATIVO, nunca continuo. Usamos 'she knows' no 'is knowing'. En español 'conoce' también es simple. Los verbos de conocimiento describen ESTADO mental no acción, por eso no pueden ir en forma progresiva."
      },
      {
        id: "stat_v_3",
        question: "They _____ in ghosts and supernatural phenomena strongly.",
        translation: "Ellos creen en fantasmas y fenómenos sobrenaturales fuertemente.",
        options: ["believe", "are believing", "believes", "believed"],
        correct: "believe",
        explanation: "El verbo 'believe' (creer) es ESTATIVO. Usamos 'they believe' no continuo. En español 'creen' también es presente simple. Las creencias son estados mentales permanentes o duraderos, no acciones temporales que ocurren en un momento, por eso no van en -ing."
      },
      {
        id: "stat_v_4",
        question: "I _____ what you mean by that comment now.",
        translation: "Entiendo lo que quieres decir con ese comentario ahora.",
        options: ["understand", "am understanding", "understands", "understood"],
        correct: "understand",
        explanation: "El verbo 'understand' (entender) es ESTATIVO. Usamos 'I understand' nunca continuo. En español 'entiendo' también es simple. La comprensión es estado de conocimiento, no proceso visible en progreso. La palabra 'now' indica que finalmente captaste el significado que antes era confuso."
      },
      {
        id: "stat_v_5",
        question: "This coffee _____ delicious - where did you buy it?",
        translation: "Este café sabe delicioso - ¿dónde lo compraste?",
        options: ["tastes", "is tasting", "taste", "tasted"],
        correct: "tastes",
        explanation: "Para describir SABOR usamos 'taste' como verbo estativo: 'coffee tastes delicious'. No es acción de probar sino calidad del sabor. En español 'sabe delicioso' también describe cualidad. Esta pregunta sobre origen del café expresa deseo de comprar el mismo por su calidad excepcional."
      },
      {
        id: "stat_v_6",
        question: "We _____ a new car - it's parked outside now.",
        translation: "Tenemos un auto nuevo - está estacionado afuera ahora.",
        options: ["have", "are having", "has", "had"],
        correct: "have",
        explanation: "Para POSESIÓN de objetos 'have' es estativo: 'we have a car'. No continuo. En español 'tenemos' también es estativo. La mención de que está afuera probablemente es invitación orgullosa a verlo, compartiendo emoción de adquisición reciente."
      },
      {
        id: "stat_v_7",
        question: "He _____ tired after working all day long today.",
        translation: "Él se siente cansado después de trabajar todo el día hoy.",
        options: ["feels", "is feeling", "feel", "felt"],
        correct: "feels",
        explanation: "Para ESTADO emocional o físico general usamos 'feel' simple: 'he feels tired'. Aunque 'feel' puede ir en continuo para estados temporales, aquí el simple es más común. En español 'se siente cansado' describe condición resultante del trabajo extendido que realizó durante el día."
      },
      {
        id: "stat_v_8",
        question: "I _____ you - you're my best friend forever.",
        translation: "Te quiero - eres mi mejor amigo para siempre.",
        options: ["love", "am loving", "loves", "loved"],
        correct: "love",
        explanation: "El verbo 'love' (amar/querer) es ESTATIVO. Nunca 'am loving' para emociones permanentes. En español 'te quiero' también es simple. Las emociones profundas se expresan en presente simple porque representan estados del corazón no acciones temporales."
      },
      {
        id: "stat_v_9",
        question: "She _____ like chocolate ice cream very much at all.",
        translation: "A ella no le gusta el helado de chocolate para nada.",
        options: ["doesn't", "isn't", "don't", "wasn't"],
        correct: "doesn't",
        explanation: "Para GUSTOS usamos 'like' como estativo: 'she doesn't like' (no 'isn't liking'). Preferencias son estados no acciones. En español 'no le gusta' también es estativo. Esta aversión al chocolate es preferencia personal clara que debe respetarse al ofrecer postres."
      },
      {
        id: "stat_v_10",
        question: "This room _____ like fresh flowers and perfume.",
        translation: "Esta habitación huele a flores frescas y perfume.",
        options: ["smells", "is smelling", "smell", "smelled"],
        correct: "smells",
        explanation: "Para OLOR que algo emite usamos 'smell' estativo: 'room smells like flowers'. No es acción de oler sino cualidad aromática. En español 'huele a' también describe. Este aroma agradable sugiere que alguien hizo esfuerzo de ambientar el espacio con fragancias placenteras."
      },
      {
        id: "stat_v_11",
        question: "We _____ where the keys are right now unfortunately.",
        translation: "No sabemos dónde están las llaves ahora mismo desafortunadamente.",
        options: ["don't know", "aren't knowing", "doesn't know", "didn't know"],
        correct: "don't know",
        explanation: "El verbo 'know' (saber) es ESTATIVO. Negativo es 'don't know' nunca 'aren't knowing'. En español 'no sabemos' también es simple. Esta falta de conocimiento sobre ubicación de llaves crea problema inmediato que requiere búsqueda o usar duplicado."
      },
      {
        id: "stat_v_12",
        question: "He _____ a blue shirt and black pants today.",
        translation: "Él lleva una camisa azul y pantalones negros hoy.",
        options: ["is wearing", "wears", "wear", "wore"],
        correct: "is wearing",
        explanation: "Para ropa que LLEVAS AHORA usamos 'wear' en CONTINUO: 'is wearing'. Aunque 'wear' puede ser estativo para hábitos, para lo que llevas puesto ahora va en -ing. En español 'lleva puesto' describe vestimenta actual. Esta descripción de outfit específico de hoy ayuda a identificar a persona en lugar público."
      },
      {
        id: "stat_v_13",
        question: "I _____ him - he's my colleague from university.",
        translation: "Lo conozco - es mi colega de la universidad.",
        options: ["know", "am knowing", "knows", "knew"],
        correct: "know",
        explanation: "Para CONOCER a persona usamos 'know' estativo: 'I know him'. Las relaciones son estados no acciones progresivas. En español 'lo conozco' también es simple. Esta conexión universitaria explica la familiaridad entre ambos y probablemente comparten historia académica."
      },
      {
        id: "stat_v_14",
        question: "This book _____ to my sister - please return it.",
        translation: "Este libro pertenece a mi hermana - por favor devuélvelo.",
        options: ["belongs", "is belonging", "belong", "belonged"],
        correct: "belongs",
        explanation: "El verbo 'belong' (pertenecer) es ESTATIVO: 'book belongs to'. Posesión es estado permanente. En español 'pertenece a' también es simple. Esta clarificación de propiedad con petición de devolución establece que el libro no es tuyo para quedarte."
      },
      {
        id: "stat_v_15",
        question: "We _____ in democracy and freedom for all people.",
        translation: "Creemos en democracia y libertad para todas las personas.",
        options: ["believe", "are believing", "believes", "believed"],
        correct: "believe",
        explanation: "Para VALORES o creencias filosóficas usamos 'believe' estativo: 'we believe in democracy'. Son convicciones profundas no acciones temporales. En español 'creemos en' también es presente. Estos valores fundamentales forman parte de identidad ideológica y guían decisiones sobre participación cívica."
      }
    ]
  }
};

export default part20Categories;