/**
 * SPANISH → ENGLISH GRAMMAR - PART 4
 * 4 categories, 15 questions each
 */

import { Clock, Zap, Users, Link } from "lucide-react";

export const part4Categories = {
  past_progressive: {
    name: "Pretérito Imperfecto Continuo",
    description: "Acciones en progreso en el pasado",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "past_prog_1",
        question: "I _____ _____ a book when you called me.",
        translation: "Estaba leyendo un libro cuando me llamaste.",
        options: ["was reading", "were reading", "am reading", "read"],
        correct: "was reading",
        explanation: "El pasado continuo en inglés se forma con 'was/were' más el gerundio (-ing). Aquí usamos 'was' porque el sujeto es 'I'. Esta estructura describe una acción que estaba en progreso cuando otra acción la interrumpió. En español usamos el imperfecto 'estaba leyendo' para expresar lo mismo, y la estructura es muy similar en ambos idiomas."
      },
      {
        id: "past_prog_2",
        question: "They _____ _____ dinner at 8 PM last night.",
        translation: "Estaban cenando a las 8 PM anoche.",
        options: ["were having", "was having", "are having", "had"],
        correct: "were having",
        explanation: "Con sujetos plurales como 'they' usamos 'were' en el pasado continuo. El verbo 'have' se convierte en 'having' con la terminación -ing. Esta forma describe una acción que estaba ocurriendo en un momento específico del pasado. Es como el español 'estaban cenando', donde también indicamos que la acción estaba en desarrollo en ese momento exacto."
      },
      {
        id: "past_prog_3",
        question: "She _____ _____ TV when the lights went out.",
        translation: "Estaba viendo TV cuando se fueron las luces.",
        options: ["was watching", "were watching", "is watching", "watched"],
        correct: "was watching",
        explanation: "Para 'she' usamos 'was' en el pasado continuo. El verbo 'watch' se convierte en 'watching'. Esta estructura es perfecta para describir una acción interrumpida por otra. El español también usa esta construcción con 'estaba viendo', mostrando que la actividad estaba en curso cuando ocurrió el apagón. Ambos idiomas expresan la simultaneidad de manera similar."
      },
      {
        id: "past_prog_4",
        question: "We _____ _____ for the bus in the rain.",
        translation: "Estábamos esperando el autobús bajo la lluvia.",
        options: ["were waiting", "was waiting", "are waiting", "waited"],
        correct: "were waiting",
        explanation: "El sujeto 'we' requiere 'were' en el pasado continuo. 'Wait' se transforma en 'waiting'. Esta forma enfatiza la duración de la espera en ese momento del pasado. Es similar al español 'estábamos esperando', donde también destacamos que la acción estaba en proceso. La lluvia añade contexto a la escena, haciendo la situación más vívida."
      },
      {
        id: "past_prog_5",
        question: "He _____ _____ very loudly during the meeting.",
        translation: "Estaba hablando muy alto durante la reunión.",
        options: ["was talking", "were talking", "is talking", "talked"],
        correct: "was talking",
        explanation: "Para 'he' usamos 'was' seguido del gerundio 'talking'. El adverbio 'loudly' describe cómo hablaba. Esta construcción muestra una acción continua durante todo un período. En español 'estaba hablando' funciona igual, indicando que el comportamiento molesto se mantuvo durante toda la reunión, no fue solo un momento breve."
      },
      {
        id: "past_prog_6",
        question: "What _____ you _____ at 3 PM yesterday?",
        translation: "¿Qué estabas haciendo a las 3 PM ayer?",
        options: ["were / doing", "was / doing", "are / doing", "did / do"],
        correct: "were / doing",
        explanation: "En preguntas con 'you' usamos 'were' en pasado continuo. El verbo 'do' se convierte en 'doing'. Esta pregunta busca saber qué actividad estaba en curso en un momento específico. Es como preguntar '¿qué estabas haciendo?' en español, donde también queremos conocer la acción que estaba ocurriendo en ese instante particular del día."
      },
      {
        id: "past_prog_7",
        question: "The children _____ _____ in the park all afternoon.",
        translation: "Los niños estaban jugando en el parque toda la tarde.",
        options: ["were playing", "was playing", "are playing", "played"],
        correct: "were playing",
        explanation: "El sujeto plural 'children' requiere 'were'. El verbo 'play' se vuelve 'playing'. La frase 'all afternoon' indica duración extendida. En español 'estaban jugando' también sugiere una actividad continua y prolongada. Esta forma es ideal para describir acciones que ocuparon un período largo de tiempo en el pasado."
      },
      {
        id: "past_prog_8",
        question: "I _____ _____ to music while cleaning my room.",
        translation: "Estaba escuchando música mientras limpiaba mi cuarto.",
        options: ["was listening", "were listening", "am listening", "listened"],
        correct: "was listening",
        explanation: "Con 'I' usamos 'was' más 'listening'. La palabra 'while' conecta dos acciones simultáneas. Esta estructura muestra que ambas acciones ocurrían al mismo tiempo. El español 'estaba escuchando mientras limpiaba' también expresa esta simultaneidad. Es común realizar múltiples tareas, y esta forma gramatical captura perfectamente esa realidad."
      },
      {
        id: "past_prog_9",
        question: "She _____ _____ when I arrived home.",
        translation: "Estaba cocinando cuando llegué a casa.",
        options: ["was cooking", "were cooking", "is cooking", "cooked"],
        correct: "was cooking",
        explanation: "Para 'she' usamos 'was' con el gerundio 'cooking'. Esta oración muestra una acción en progreso interrumpida por otra. Es exactamente como el español 'estaba cocinando cuando llegué', donde la cocina estaba en curso y mi llegada fue el punto de interrupción. Esta construcción es muy útil para narrar eventos del pasado."
      },
      {
        id: "past_prog_10",
        question: "They _____ not _____ attention to the teacher.",
        translation: "No estaban prestando atención al profesor.",
        options: ["were / paying", "was / paying", "are / paying", "did / pay"],
        correct: "were / paying",
        explanation: "La negación en pasado continuo usa 'were not' (o 'weren't') más el gerundio. Con 'they' siempre es 'were'. La expresión 'pay attention' significa prestar atención. En español también decimos 'no estaban prestando atención', manteniendo la misma estructura negativa. Esta forma describe un comportamiento continuo que no estaba ocurriendo."
      },
      {
        id: "past_prog_11",
        question: "My phone _____ _____ all morning yesterday.",
        translation: "Mi teléfono estuvo sonando toda la mañana ayer.",
        options: ["was ringing", "were ringing", "is ringing", "rang"],
        correct: "was ringing",
        explanation: "El sujeto 'phone' es singular, por eso usamos 'was'. El verbo 'ring' se convierte en 'ringing'. La frase 'all morning' indica una acción repetida durante un período largo. En español 'estuvo sonando' o 'estaba sonando' expresa la misma idea de una actividad molesta que continuó durante horas. El contexto sugiere múltiples llamadas interrumpiendo la mañana."
      },
      {
        id: "past_prog_12",
        question: "We _____ _____ about you just now!",
        translation: "¡Estábamos hablando de ti justo ahora!",
        options: ["were talking", "was talking", "are talking", "talked"],
        correct: "were talking",
        explanation: "Con 'we' usamos 'were' en pasado continuo. 'Talk' se transforma en 'talking'. La expresión 'just now' significa hace un momento. Esta frase muestra una coincidencia temporal interesante: estaban hablando de alguien justo cuando esa persona apareció. En español 'estábamos hablando' captura perfectamente esta casualidad del momento."
      },
      {
        id: "past_prog_13",
        question: "It _____ _____ heavily when we left the house.",
        translation: "Estaba lloviendo fuertemente cuando salimos de casa.",
        options: ["was raining", "were raining", "is raining", "rained"],
        correct: "was raining",
        explanation: "Para 'it' (clima) usamos 'was'. El verbo 'rain' se vuelve 'raining'. El adverbio 'heavily' describe la intensidad de la lluvia. Esta oración muestra condiciones climáticas en curso cuando tomamos una acción. El español 'estaba lloviendo' también describe el clima como telón de fondo de nuestras acciones, estableciendo la atmósfera de la situación."
      },
      {
        id: "past_prog_14",
        question: "You _____ _____ too fast on that road.",
        translation: "Estabas conduciendo demasiado rápido en esa carretera.",
        options: ["were driving", "was driving", "are driving", "drove"],
        correct: "were driving",
        explanation: "Con 'you' usamos 'were' en pasado continuo. 'Drive' se convierte en 'driving'. La frase 'too fast' indica exceso de velocidad. Esta construcción puede implicar una advertencia o crítica sobre un comportamiento continuo en el pasado. El español 'estabas conduciendo' también puede llevar ese tono de observación crítica sobre una acción peligrosa."
      },
      {
        id: "past_prog_15",
        question: "The dog _____ _____ at strangers all day.",
        translation: "El perro estuvo ladrando a extraños todo el día.",
        options: ["was barking", "were barking", "is barking", "barked"],
        correct: "was barking",
        explanation: "El sujeto 'dog' es singular, usamos 'was'. 'Bark' se transforma en 'barking'. La frase 'all day' enfatiza la duración molesta del ladrido. Esta forma describe un comportamiento repetitivo y continuo. En español 'estuvo ladrando' o 'estaba ladrando' también sugiere una actividad persistente y probablemente irritante que se mantuvo durante horas."
      }
    ]
  },

  future_perfect: {
    name: "Futuro Perfecto",
    description: "Acciones completadas antes de un punto futuro",
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "fut_perf_1",
        question: "By next year, I _____ _____ my degree.",
        translation: "Para el próximo año, habré terminado mi carrera.",
        options: ["will have finished", "will finish", "have finished", "finished"],
        correct: "will have finished",
        explanation: "El futuro perfecto se forma con 'will have' más el participio pasado. Usamos esta estructura para hablar de acciones que estarán completadas antes de un momento futuro específico. Es similar al español 'habré terminado', donde también proyectamos la finalización de algo antes de una fecha futura. La frase 'by next year' marca ese punto de referencia en el futuro."
      },
      {
        id: "fut_perf_2",
        question: "She _____ _____ _____ the report by Friday.",
        translation: "Ella habrá completado el informe para el viernes.",
        options: ["will have completed", "will complete", "has completed", "completed"],
        correct: "will have completed",
        explanation: "Con 'she' seguimos usando 'will have' más el participio. El futuro perfecto no cambia según la persona. La palabra 'by Friday' establece el límite temporal. Esta construcción es muy útil en contextos laborales para establecer expectativas claras sobre cuándo algo estará listo. El español 'habrá completado' funciona de manera idéntica."
      },
      {
        id: "fut_perf_3",
        question: "They _____ _____ _____ for 10 years by December.",
        translation: "Habrán estado casados por 10 años en diciembre.",
        options: ["will have been married", "will be married", "have been married", "were married"],
        correct: "will have been married",
        explanation: "El futuro perfecto con 'been' más participio describe un estado que continuará hasta un punto futuro. Aquí calculamos la duración de su matrimonio hasta diciembre. El español 'habrán estado casados' también usa el futuro perfecto para esta proyección temporal. Esta forma es común para calcular aniversarios y celebrar hitos que están por venir."
      },
      {
        id: "fut_perf_4",
        question: "By the time you arrive, we _____ _____ _____ dinner.",
        translation: "Para cuando llegues, habremos terminado de cenar.",
        options: ["will have finished", "will finish", "have finished", "finished"],
        correct: "will have finished",
        explanation: "La frase 'by the time' indica que una acción estará completa antes de que otra ocurra. Usamos futuro perfecto para la acción que se completará primero. Es como el español 'habremos terminado para cuando', donde también establecemos la secuencia temporal. Esta estructura es útil para coordinar actividades y gestionar expectativas sobre el tiempo."
      },
      {
        id: "fut_perf_5",
        question: "He _____ _____ _____ all the books by next month.",
        translation: "Él habrá leído todos los libros para el próximo mes.",
        options: ["will have read", "will read", "has read", "read"],
        correct: "will have read",
        explanation: "El participio de 'read' se escribe igual que el presente pero se pronuncia diferente. El futuro perfecto aquí muestra un compromiso con completar una tarea antes de una fecha límite. El español 'habrá leído' también proyecta esta meta hacia el futuro. Esta forma es motivadora porque visualiza el logro antes de que ocurra."
      },
      {
        id: "fut_perf_6",
        question: "I _____ _____ _____ my homework before the class starts.",
        translation: "Habré hecho mi tarea antes de que empiece la clase.",
        options: ["will have done", "will do", "have done", "did"],
        correct: "will have done",
        explanation: "Usamos futuro perfecto para asegurar que algo estará completo antes de un evento futuro. La palabra 'before' marca claramente la secuencia. El participio de 'do' es 'done'. En español 'habré hecho' también promete que la tarea estará lista a tiempo. Esta construcción es útil para planificar y cumplir con responsabilidades académicas."
      },
      {
        id: "fut_perf_7",
        question: "By 2030, scientists _____ _____ _____ a cure.",
        translation: "Para 2030, los científicos habrán encontrado una cura.",
        options: ["will have found", "will find", "have found", "found"],
        correct: "will have found",
        explanation: "El futuro perfecto expresa esperanza o predicción sobre logros futuros. Aquí proyectamos un descubrimiento científico antes de 2030. El español 'habrán encontrado' también transmite esta expectativa optimista. Esta forma gramatical permite hablar con confianza sobre avances que esperamos ver, combinando esperanza con proyección temporal específica."
      },
      {
        id: "fut_perf_8",
        question: "We _____ _____ _____ this project by the deadline.",
        translation: "Habremos completado este proyecto para la fecha límite.",
        options: ["will have completed", "will complete", "have completed", "completed"],
        correct: "will have completed",
        explanation: "Esta oración hace una promesa firme sobre cumplir un plazo. El futuro perfecto muestra compromiso con la puntualidad. La palabra 'deadline' establece el límite temporal claro. El español 'habremos completado' también comunica esta determinación. En contextos profesionales, esta forma gramatical transmite confiabilidad y seriedad sobre las fechas de entrega."
      },
      {
        id: "fut_perf_9",
        question: "She _____ _____ _____ three countries by next summer.",
        translation: "Ella habrá visitado tres países para el próximo verano.",
        options: ["will have visited", "will visit", "has visited", "visited"],
        correct: "will have visited",
        explanation: "El futuro perfecto cuenta logros que se acumularán hasta un punto futuro. Aquí planeamos viajes que estarán completos para el verano. El español 'habrá visitado' también enumera experiencias futuras. Esta forma es emocionante para planear aventuras y visualizar las experiencias culturales que vendrán."
      },
      {
        id: "fut_perf_10",
        question: "By midnight, they _____ _____ _____ for 12 hours.",
        translation: "Para la medianoche, habrán trabajado por 12 horas.",
        options: ["will have worked", "will work", "have worked", "worked"],
        correct: "will have worked",
        explanation: "Esta oración calcula cuánto tiempo habrá pasado en una actividad para un momento futuro. Usamos futuro perfecto para estas proyecciones temporales. El español 'habrán trabajado' también hace este cálculo de horas acumuladas. La larga jornada de 12 horas sugiere un día demandante que requiere reconocimiento del esfuerzo."
      },
      {
        id: "fut_perf_11",
        question: "You _____ _____ _____ your money by then.",
        translation: "Habrás ahorrado tu dinero para entonces.",
        options: ["will have saved", "will save", "have saved", "saved"],
        correct: "will have saved",
        explanation: "El futuro perfecto aquí proyecta logros financieros futuros. La expresión 'by then' se refiere a un momento futuro previamente mencionado. El español 'habrás ahorrado' también planifica metas económicas. Esta forma gramatical es motivadora porque visualiza el éxito financiero antes de que ocurra, ayudando a mantener la disciplina del ahorro."
      },
      {
        id: "fut_perf_12",
        question: "He _____ _____ _____ his new car by the end of the month.",
        translation: "Él habrá comprado su auto nuevo para fin de mes.",
        options: ["will have bought", "will buy", "has bought", "bought"],
        correct: "will have bought",
        explanation: "Esta construcción proyecta una compra importante que estará completa antes de fin de mes. El participio irregular 'bought' viene del verbo 'buy'. El español 'habrá comprado' también anticipa esta adquisición. Usar futuro perfecto para compras grandes muestra planificación financiera y establece una meta temporal concreta."
      },
      {
        id: "fut_perf_13",
        question: "By tomorrow morning, the storm _____ _____ _____.",
        translation: "Para mañana en la mañana, la tormenta habrá pasado.",
        options: ["will have passed", "will pass", "has passed", "passed"],
        correct: "will have passed",
        explanation: "El futuro perfecto predice cuándo un evento natural habrá terminado. Aquí proyectamos el fin de la tormenta. El español 'habrá pasado' también hace esta predicción meteorológica. Esta forma es reconfortante porque proyecta el fin de una situación difícil, dando esperanza de que las condiciones mejorarán pronto."
      },
      {
        id: "fut_perf_14",
        question: "I _____ _____ _____ to five different cities by the end of the trip.",
        translation: "Habré viajado a cinco ciudades diferentes para el final del viaje.",
        options: ["will have traveled", "will travel", "have traveled", "traveled"],
        correct: "will have traveled",
        explanation: "Esta oración enumera experiencias que se acumularán durante un viaje. El futuro perfecto cuenta los destinos que habrás visitado. El español 'habré viajado' también suma estas aventuras futuras. Esta forma gramatical es emocionante para planificar itinerarios ambiciosos y visualizar todas las experiencias culturales que tendrás."
      },
      {
        id: "fut_perf_15",
        question: "She _____ _____ _____ English for 5 years by June.",
        translation: "Ella habrá estudiado inglés por 5 años en junio.",
        options: ["will have studied", "will study", "has studied", "studied"],
        correct: "will have studied",
        explanation: "El futuro perfecto calcula el tiempo acumulado de estudio hasta un punto futuro. Aquí medimos la dedicación al aprendizaje del inglés. El español 'habrá estudiado' también contabiliza estos años de esfuerzo. Esta forma permite celebrar hitos educativos antes de que lleguen, reconociendo la perseverancia continua en el aprendizaje de idiomas."
      }
    ]
  },

  conditional_perfect: {
    name: "Condicional Perfecto",
    description: "Situaciones hipotéticas en el pasado",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "cond_perf_1",
        question: "I _____ _____ _____ you if I had known.",
        translation: "Te habría ayudado si hubiera sabido.",
        options: ["would have helped", "would help", "will have helped", "helped"],
        correct: "would have helped",
        explanation: "El condicional perfecto se forma con 'would have' más el participio pasado. Esta estructura expresa arrepentimiento por no haber actuado porque faltaba información. Es como el español 'habría ayudado', donde también expresamos que la acción no ocurrió pero podría haber ocurrido bajo diferentes circunstancias. Esta forma es común para explicar por qué no hicimos algo."
      },
      {
        id: "cond_perf_2",
        question: "She _____ _____ _____ the exam if she had studied more.",
        translation: "Ella habría pasado el examen si hubiera estudiado más.",
        options: ["would have passed", "would pass", "will have passed", "passed"],
        correct: "would have passed",
        explanation: "Esta oración conecta causa y efecto hipotéticos en el pasado. El condicional perfecto en la cláusula principal muestra el resultado no realizado. El español 'habría pasado' también expresa este lamento por el esfuerzo insuficiente. Esta estructura es útil para reflexionar sobre decisiones pasadas y sus consecuencias potenciales."
      },
      {
        id: "cond_perf_3",
        question: "They _____ _____ _____ the house if it had been cheaper.",
        translation: "Habrían comprado la casa si hubiera sido más barata.",
        options: ["would have bought", "would buy", "will have bought", "bought"],
        correct: "would have bought",
        explanation: "El condicional perfecto aquí muestra una oportunidad perdida por razones económicas. Con 'they' seguimos usando 'would have'. El participio 'bought' es irregular. El español 'habrían comprado' también lamenta esta compra no realizada. Esta forma expresa cómo las circunstancias financieras afectaron una decisión importante del pasado."
      },
      {
        id: "cond_perf_4",
        question: "We _____ _____ _____ to the party if we had been invited.",
        translation: "Habríamos ido a la fiesta si hubiéramos sido invitados.",
        options: ["would have gone", "would go", "will have gone", "went"],
        correct: "would have gone",
        explanation: "Esta oración explica una ausencia por falta de invitación. El participio 'gone' viene del verbo irregular 'go'. El condicional perfecto muestra disposición que no pudo materializarse. El español 'habríamos ido' también expresa este deseo no cumplido. Es una forma diplomática de señalar que la falta de invitación fue la razón de la ausencia."
      },
      {
        id: "cond_perf_5",
        question: "He _____ _____ _____ the job if they had offered it to him.",
        translation: "Él habría aceptado el trabajo si se lo hubieran ofrecido.",
        options: ["would have accepted", "would accept", "will have accepted", "accepted"],
        correct: "would have accepted",
        explanation: "El condicional perfecto muestra una oportunidad laboral que nunca llegó. Con 'he' mantenemos 'would have'. Esta estructura expresa interés en algo que no se materializó. El español 'habría aceptado' también comunica esta disposición no realizada. Es una forma de expresar que estabas abierto a una posibilidad que nunca se presentó."
      },
      {
        id: "cond_perf_6",
        question: "You _____ _____ _____ the movie if you had come with us.",
        translation: "Habrías disfrutado la película si hubieras venido con nosotros.",
        options: ["would have enjoyed", "would enjoy", "will have enjoyed", "enjoyed"],
        correct: "would have enjoyed",
        explanation: "Esta oración lamenta que alguien se perdió una experiencia agradable. El condicional perfecto sugiere que su ausencia fue una oportunidad perdida. El español 'habrías disfrutado' también expresa este sentimiento. Es una forma amable de decirle a alguien que se perdió algo bueno, quizás incentivándolo a unirse la próxima vez."
      },
      {
        id: "cond_perf_7",
        question: "It _____ _____ _____ better if we had started earlier.",
        translation: "Habría sido mejor si hubiéramos empezado más temprano.",
        options: ["would have been", "would be", "will have been", "was"],
        correct: "would have been",
        explanation: "El verbo 'be' en condicional perfecto es 'would have been'. Esta oración reflexiona sobre una decisión de tiempo que afectó el resultado. El español 'habría sido' también hace esta evaluación retrospectiva. Es una observación útil para aprender de experiencias pasadas y mejorar la planificación futura."
      },
      {
        id: "cond_perf_8",
        question: "She _____ _____ _____ angry if you had told her the truth.",
        translation: "Ella habría estado enojada si le hubieras dicho la verdad.",
        options: ["would have been", "would be", "will have been", "was"],
        correct: "would have been",
        explanation: "Esta oración explica por qué se ocultó información: temor a una reacción negativa. El condicional perfecto proyecta la emoción que habría resultado. El español 'habría estado enojada' también predice esta reacción hipotética. Aunque la honestidad es importante, esta estructura reconoce que a veces anticipamos reacciones difíciles."
      },
      {
        id: "cond_perf_9",
        question: "We _____ _____ _____ the train if we had hurried.",
        translation: "Habríamos alcanzado el tren si nos hubiéramos apurado.",
        options: ["would have caught", "would catch", "will have caught", "caught"],
        correct: "would have caught",
        explanation: "El condicional perfecto aquí lamenta una oportunidad perdida por falta de prisa. El participio 'caught' es irregular. Esta estructura conecta la acción que faltó (apurarse) con la consecuencia (perder el tren). El español 'habríamos alcanzado' también expresa este arrepentimiento. Es una lección sobre la importancia de la puntualidad."
      },
      {
        id: "cond_perf_10",
        question: "They _____ _____ _____ the concert if tickets had been available.",
        translation: "Habrían asistido al concierto si hubieran habido boletos disponibles.",
        options: ["would have attended", "would attend", "will have attended", "attended"],
        correct: "would have attended",
        explanation: "Esta oración explica una ausencia por falta de boletos. El condicional perfecto muestra interés no satisfecho. Con 'they' usamos 'would have'. El español 'habrían asistido' también comunica esta frustración por boletos agotados. Los eventos populares suelen venderse rápido, y esta estructura expresa el deseo de haber podido participar."
      },
      {
        id: "cond_perf_11",
        question: "I _____ _____ _____ differently if I were you.",
        translation: "Yo habría actuado diferente si fuera tú.",
        options: ["would have acted", "would act", "will have acted", "acted"],
        correct: "would have acted",
        explanation: "Esta frase mezcla condicional perfecto con condicional simple para dar consejos retrospectivos. Ponerse en el lugar del otro ('if I were you') permite criticar suavemente decisiones pasadas. El español 'habría actuado' también ofrece esta perspectiva alternativa. Es una forma diplomática de sugerir que hubo mejores opciones disponibles."
      },
      {
        id: "cond_perf_12",
        question: "He _____ _____ _____ the car if he had seen the red light.",
        translation: "Él habría detenido el auto si hubiera visto la luz roja.",
        options: ["would have stopped", "would stop", "will have stopped", "stopped"],
        correct: "would have stopped",
        explanation: "Esta oración explica un accidente o casi-accidente por no ver una señal. El condicional perfecto establece que la falta de visibilidad causó el problema. El español 'habría detenido' también conecta la percepción visual con la acción de frenar. Esta estructura es útil para explicar incidentes de tráfico y entender qué falló."
      },
      {
        id: "cond_perf_13",
        question: "You _____ _____ _____ the answer if you had paid attention.",
        translation: "Habrías sabido la respuesta si hubieras prestado atención.",
        options: ["would have known", "would know", "will have known", "knew"],
        correct: "would have known",
        explanation: "Esta frase conecta la falta de atención con no saber una respuesta. El condicional perfecto muestra causa y efecto hipotéticos. El participio de 'know' es irregular: 'known'. El español 'habrías sabido' también hace esta conexión entre estar atento y tener conocimiento. Es un recordatorio suave sobre la importancia de concentrarse."
      },
      {
        id: "cond_perf_14",
        question: "We _____ _____ _____ lost if we had brought a map.",
        translation: "No nos habríamos perdido si hubiéramos traído un mapa.",
        options: ["wouldn't have gotten", "wouldn't get", "won't have gotten", "didn't get"],
        correct: "wouldn't have gotten",
        explanation: "La forma negativa del condicional perfecto es 'wouldn't have' más participio. Esta oración lamenta olvidar un mapa y las consecuencias. El español 'no nos habríamos perdido' también expresa este arrepentimiento. Antes de los GPS, los mapas eran esenciales, y esta estructura recuerda la importancia de prepararse adecuadamente."
      },
      {
        id: "cond_perf_15",
        question: "She _____ _____ _____ happier with a different decision.",
        translation: "Ella habría sido más feliz con una decisión diferente.",
        options: ["would have been", "would be", "will have been", "was"],
        correct: "would have been",
        explanation: "Esta reflexión evalúa cómo una decisión diferente habría afectado la felicidad. El condicional perfecto permite imaginar vidas alternativas. El comparativo 'happier' añade que no solo habría sido feliz, sino MÁS feliz. El español 'habría sido' también permite esta contemplación de caminos no tomados. Es natural preguntarse qué habría pasado con elecciones diferentes."
      }
    ]
  },

  relative_pronouns: {
    name: "Pronombres Relativos",
    description: "Who, which, that, whose - conectores de ideas",
    icon: Link,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "rel_pron_1",
        question: "The woman _____ lives next door is a doctor.",
        translation: "La mujer que vive al lado es doctora.",
        options: ["who", "which", "whose", "what"],
        correct: "who",
        explanation: "Usamos 'who' para referirnos a personas en cláusulas relativas. Aquí 'who' conecta 'the woman' con información adicional sobre ella. Es como el 'que' en español cuando hablamos de personas. Este pronombre relativo es esencial para construir oraciones más complejas y dar más detalles sobre las personas que mencionamos en nuestras conversaciones."
      },
      {
        id: "rel_pron_2",
        question: "The book _____ I bought yesterday is very interesting.",
        translation: "El libro que compré ayer es muy interesante.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Para cosas u objetos usamos 'that' o 'which' en cláusulas relativas. Aquí 'that' conecta 'the book' con la acción de comprarlo. Es equivalente al 'que' español para objetos. Este pronombre nos permite combinar dos ideas en una oración fluida, haciendo la comunicación más eficiente y natural al hablar de nuestras compras o posesiones."
      },
      {
        id: "rel_pron_3",
        question: "The car _____ is parked outside belongs to my brother.",
        translation: "El auto que está estacionado afuera pertenece a mi hermano.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Nuevamente 'that' para un objeto (el auto). Podríamos también usar 'which' aquí. La cláusula relativa 'that is parked outside' da información esencial sobre cuál auto. En español también usamos 'que' de la misma manera. Esta estructura es muy práctica para especificar de qué cosa estamos hablando cuando hay múltiples opciones."
      },
      {
        id: "rel_pron_4",
        question: "The teacher _____ class I'm taking is very patient.",
        translation: "El profesor cuya clase estoy tomando es muy paciente.",
        options: ["whose", "who", "that", "which"],
        correct: "whose",
        explanation: "El pronombre 'whose' indica posesión y significa 'cuyo/cuya'. Aquí conecta al profesor con su clase. Es más formal que el español donde podemos decir 'del cual' o 'cuya'. Este pronombre es útil para mostrar relaciones de pertenencia sin necesidad de oraciones separadas, haciendo la expresión más sofisticada y fluida."
      },
      {
        id: "rel_pron_5",
        question: "I visited the museum _____ has ancient artifacts.",
        translation: "Visité el museo que tiene artefactos antiguos.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Para lugares e instituciones usamos 'that' o 'which'. Aquí describimos una característica del museo. El verbo 'has' concuerda con 'museum' (singular). En español 'que tiene' funciona igual. Esta construcción permite compartir detalles interesantes sobre lugares que visitamos, enriqueciendo nuestras descripciones de experiencias culturales."
      },
      {
        id: "rel_pron_6",
        question: "The people _____ we met at the conference were very friendly.",
        translation: "Las personas que conocimos en la conferencia eran muy amables.",
        options: ["that", "which", "whose", "what"],
        correct: "that",
        explanation: "Aunque 'that' típicamente es para cosas, también puede usarse para personas en inglés informal. 'Who' sería más formal aquí. El español 'que conocimos' es neutro para personas y cosas. Esta flexibilidad del inglés permite un lenguaje más casual y directo al describir encuentros y conexiones sociales en eventos profesionales."
      },
      {
        id: "rel_pron_7",
        question: "The restaurant _____ we ate last night was excellent.",
        translation: "El restaurante donde comimos anoche era excelente.",
        options: ["where", "which", "that", "who"],
        correct: "where",
        explanation: "Usamos 'where' para lugares cuando nos referimos a la ubicación donde ocurrió algo. Es equivalente al 'donde' español. Aunque también podríamos decir 'that we ate at', 'where' es más natural y elegante. Esta forma es perfecta para recomendar o describir experiencias en lugares específicos, especialmente restaurantes."
      },
      {
        id: "rel_pron_8",
        question: "The day _____ I met you was the best day of my life.",
        translation: "El día que te conocí fue el mejor día de mi vida.",
        options: ["when", "which", "where", "who"],
        correct: "when",
        explanation: "Para referencias temporales usamos 'when', que significa 'cuando' en español. Conecta un momento específico con un evento significativo. Aunque podríamos omitir 'when' en inglés casual, incluirlo hace la oración más clara y formal. Esta estructura es romántica y emotiva, perfecta para expresar la importancia de momentos especiales en nuestras vidas."
      },
      {
        id: "rel_pron_9",
        question: "The movie _____ won the award was directed by her.",
        translation: "La película que ganó el premio fue dirigida por ella.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Para películas y obras artísticas usamos 'that' o 'which'. Aquí 'that won the award' especifica cuál película. El verbo 'was directed' está en voz pasiva. El español 'que ganó' funciona idénticamente. Esta construcción es común al hablar de logros y reconocimientos en el mundo del entretenimiento."
      },
      {
        id: "rel_pron_10",
        question: "The girl _____ father is a pilot wants to fly planes too.",
        translation: "La niña cuyo padre es piloto también quiere volar aviones.",
        options: ["whose", "who", "that", "which"],
        correct: "whose",
        explanation: "El pronombre posesivo 'whose' conecta a la niña con su padre. Es como 'cuyo' en español. Esta forma permite describir relaciones familiares y cómo influencian las aspiraciones. La oración muestra inspiración generacional: los padres influyen en los sueños de sus hijos. 'Whose' es clave para expresar estas conexiones familiares de manera elegante."
      },
      {
        id: "rel_pron_11",
        question: "This is the house _____ I grew up in.",
        translation: "Esta es la casa donde crecí.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Podemos usar 'that' o 'which' para lugares cuando hay una preposición ('in') al final. También podríamos decir 'where I grew up'. El español 'donde crecí' es más simple. Esta oración evoca nostalgia y memorias de infancia. La casa donde crecemos tiene significado emocional profundo, y esta estructura nos permite compartir esa conexión."
      },
      {
        id: "rel_pron_12",
        question: "The reason _____ I'm late is the traffic.",
        translation: "La razón por la que llego tarde es el tráfico.",
        options: ["why", "that", "which", "because"],
        correct: "why",
        explanation: "Para razones usamos 'why', que significa 'por qué' o 'por la que'. Conecta 'the reason' con la explicación. Podríamos también usar 'that', pero 'why' es más específico. El español 'por la que' es similar. Esta construcción es muy útil para dar explicaciones y justificar situaciones, especialmente cuando llegamos tarde."
      },
      {
        id: "rel_pron_13",
        question: "The student _____ answered correctly won a prize.",
        translation: "El estudiante que respondió correctamente ganó un premio.",
        options: ["who", "which", "whose", "what"],
        correct: "who",
        explanation: "Para personas que realizan una acción usamos 'who'. Aquí describe al estudiante que tuvo éxito. El verbo 'answered' está en pasado simple. En español 'que respondió' funciona igual. Esta estructura permite celebrar logros individuales y reconocer el esfuerzo. Es motivador ver que el conocimiento correcto es recompensado con premios."
      },
      {
        id: "rel_pron_14",
        question: "The company _____ products we use is very innovative.",
        translation: "La compañía cuyos productos usamos es muy innovadora.",
        options: ["whose", "that", "which", "who"],
        correct: "whose",
        explanation: "El pronombre posesivo 'whose' conecta la compañía con sus productos. Muestra la relación de propiedad o creación. El español 'cuyos productos' funciona idénticamente. Esta forma es común al hablar de marcas y empresas que admiramos. Permite vincular organizaciones con lo que producen de manera clara y profesional."
      },
      {
        id: "rel_pron_15",
        question: "Everything _____ he said was true.",
        translation: "Todo lo que él dijo era verdad.",
        options: ["that", "who", "which", "what"],
        correct: "that",
        explanation: "Después de 'everything' usamos 'that' (no 'which'). Es una regla fija del inglés. La palabra 'everything' es muy inclusiva y absoluta. El español 'todo lo que' también es comprehensivo. Esta estructura es poderosa para validar completamente las palabras de alguien, mostrando confianza total en lo que expresaron."
      }
    ]
  },

  present_perfect_continuous: {
    name: "Presente Perfecto Continuo",
    description: "Acciones que empezaron en el pasado y continúan",
    icon: Clock,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "pres_perf_cont_1",
        question: "I _____ _____ _____ English for three years.",
        translation: "He estado estudiando inglés por tres años.",
        options: ["have been studying", "has been studying", "am studying", "studied"],
        correct: "have been studying",
        explanation: "El presente perfecto continuo se forma con 'have/has been' más el gerundio (-ing). Con 'I' usamos 'have been'. Esta estructura enfatiza la duración de una acción que comenzó en el pasado y continúa ahora. El español 'he estado estudiando' funciona similar. Esta forma es perfecta para hablar del tiempo dedicado al aprendizaje de idiomas."
      },
      {
        id: "pres_perf_cont_2",
        question: "She _____ _____ _____ here since 9 AM.",
        translation: "Ella ha estado esperando aquí desde las 9 AM.",
        options: ["has been waiting", "have been waiting", "is waiting", "waited"],
        correct: "has been waiting",
        explanation: "Con tercera persona singular (she, he, it) usamos 'has been' más gerundio. La palabra 'since' indica el punto de inicio de la espera. Esta construcción enfatiza tanto la duración como la continuidad de la acción. El español 'ha estado esperando' también resalta la paciencia y el tiempo transcurrido. Es útil para expresar situaciones donde alguien ha esperado mucho."
      },
      {
        id: "pres_perf_cont_3",
        question: "They _____ _____ _____ in this city for five years.",
        translation: "Han estado viviendo en esta ciudad por cinco años.",
        options: ["have been living", "has been living", "are living", "lived"],
        correct: "have been living",
        explanation: "Con sujetos plurales como 'they' usamos 'have been' más gerundio. El verbo 'live' se convierte en 'living'. La duración de cinco años sugiere que ya están establecidos pero quizás no permanentemente. El español 'han estado viviendo' también implica una residencia continua que podría cambiar. Esta forma es común al describir períodos de vida en diferentes lugares."
      },
      {
        id: "pres_perf_cont_4",
        question: "How long _____ you _____ _____ for me?",
        translation: "¿Cuánto tiempo has estado esperando por mí?",
        options: ["have / been waiting", "has / been waiting", "are / waiting", "did / wait"],
        correct: "have / been waiting",
        explanation: "En preguntas con 'how long' el presente perfecto continuo es ideal porque preguntamos por la duración. Con 'you' usamos 'have been'. Esta pregunta muestra preocupación por haber hecho esperar a alguien. El español '¿cuánto tiempo has estado esperando?' también busca saber la extensión de la espera. Es una pregunta cortés que reconoce la paciencia del otro."
      },
      {
        id: "pres_perf_cont_5",
        question: "We _____ _____ _____ this problem all morning.",
        translation: "Hemos estado trabajando en este problema toda la mañana.",
        options: ["have been working", "has been working", "are working", "worked"],
        correct: "have been working",
        explanation: "La expresión 'all morning' indica duración extendida, perfecta para el presente perfecto continuo. Con 'we' usamos 'have been'. La preposición 'on' después de 'working' conecta con 'this problem'. El español 'hemos estado trabajando' también enfatiza el esfuerzo sostenido. Esta forma muestra dedicación persistente a resolver un desafío."
      },
      {
        id: "pres_perf_cont_6",
        question: "He _____ _____ _____ very tired lately.",
        translation: "Él ha estado sintiéndose muy cansado últimamente.",
        options: ["has been feeling", "have been feeling", "is feeling", "felt"],
        correct: "has been feeling",
        explanation: "Con 'he' usamos 'has been' seguido del gerundio 'feeling'. La palabra 'lately' indica un período reciente pero continuo. Esta estructura describe un estado que ha persistido durante algún tiempo. El español 'ha estado sintiéndose' también expresa esta condición prolongada. Es útil para describir estados físicos o emocionales que han durado días o semanas."
      },
      {
        id: "pres_perf_cont_7",
        question: "It _____ _____ _____ since last night.",
        translation: "Ha estado lloviendo desde anoche.",
        options: ["has been raining", "have been raining", "is raining", "rained"],
        correct: "has been raining",
        explanation: "Para clima usamos 'it' con 'has been'. El verbo 'rain' se vuelve 'raining'. 'Since last night' marca cuando comenzó la lluvia continua. Esta forma describe condiciones meteorológicas persistentes. El español 'ha estado lloviendo' también captura esta lluvia prolongada. Es una queja común sobre mal tiempo que no cesa."
      },
      {
        id: "pres_perf_cont_8",
        question: "You _____ _____ _____ too much time on your phone.",
        translation: "Has estado pasando demasiado tiempo en tu teléfono.",
        options: ["have been spending", "has been spending", "are spending", "spent"],
        correct: "have been spending",
        explanation: "Con 'you' usamos 'have been' más 'spending'. La expresión 'too much' indica exceso. Esta frase puede ser una observación crítica sobre un hábito reciente. El español 'has estado pasando' también puede sonar como reproche suave. Es relevante en la era digital donde el uso excesivo de pantallas es preocupación común."
      },
      {
        id: "pres_perf_cont_9",
        question: "My neighbors _____ _____ _____ loud music all week.",
        translation: "Mis vecinos han estado tocando música alta toda la semana.",
        options: ["have been playing", "has been playing", "are playing", "played"],
        correct: "have been playing",
        explanation: "El sujeto plural 'neighbors' requiere 'have been'. El verbo 'play' se convierte en 'playing'. La frase 'all week' muestra que es un problema persistente. Esta estructura expresa frustración con un comportamiento molesto continuo. El español 'han estado tocando' también comunica esta molestia acumulada. Es una queja válida sobre ruido vecinal que no cesa."
      },
      {
        id: "pres_perf_cont_10",
        question: "She _____ _____ _____ to lose weight for months.",
        translation: "Ella ha estado intentando bajar de peso por meses.",
        options: ["has been trying", "have been trying", "is trying", "tried"],
        correct: "has been trying",
        explanation: "Con 'she' usamos 'has been' más 'trying'. El verbo 'try' se duplica la 'y' para formar 'trying'. Esta oración describe un esfuerzo sostenido que aún continúa. El español 'ha estado intentando' también muestra perseverancia en una meta personal. Esta forma reconoce que algunos objetivos requieren tiempo y esfuerzo continuo."
      },
      {
        id: "pres_perf_cont_11",
        question: "The baby _____ _____ _____ all night.",
        translation: "El bebé ha estado llorando toda la noche.",
        options: ["has been crying", "have been crying", "is crying", "cried"],
        correct: "has been crying",
        explanation: "El sujeto singular 'baby' requiere 'has been'. El verbo 'cry' cambia la 'y' por 'i' y añade 'ing': 'crying'. La expresión 'all night' indica una noche sin dormir para los padres. Esta estructura comunica agotamiento por una situación prolongada. El español 'ha estado llorando' también evoca esa fatiga. Es una experiencia común que muchos padres reconocen."
      },
      {
        id: "pres_perf_cont_12",
        question: "I _____ _____ _____ a strange noise coming from the engine.",
        translation: "He estado escuchando un ruido extraño viniendo del motor.",
        options: ["have been hearing", "has been hearing", "am hearing", "heard"],
        correct: "have been hearing",
        explanation: "Con 'I' usamos 'have been' más 'hearing'. Aunque 'hear' generalmente no se usa en continuo, aquí funciona para indicar una percepción repetida. Esta oración expresa preocupación por un problema mecánico persistente. El español 'he estado escuchando' también sugiere inquietud. Es importante atender estos ruidos extraños antes de que se conviertan en problemas mayores."
      },
      {
        id: "pres_perf_cont_13",
        question: "We _____ _____ _____ for a new apartment for weeks.",
        translation: "Hemos estado buscando un nuevo apartamento por semanas.",
        options: ["have been looking", "has been looking", "are looking", "looked"],
        correct: "have been looking",
        explanation: "El sujeto 'we' usa 'have been' con 'looking'. La duración de 'weeks' sugiere una búsqueda prolongada y quizás frustrante. Esta estructura enfatiza el esfuerzo continuo sin resultado todavía. El español 'hemos estado buscando' también implica esta búsqueda activa sin éxito aún. Encontrar vivienda puede ser proceso largo que requiere paciencia."
      },
      {
        id: "pres_perf_cont_14",
        question: "He _____ _____ _____ the same song on repeat.",
        translation: "Él ha estado escuchando la misma canción en repetición.",
        options: ["has been listening", "have been listening", "is listening", "listened"],
        correct: "has been listening",
        explanation: "Con 'he' usamos 'has been' más 'listening'. La expresión 'on repeat' significa en bucle continuo. Esta oración sugiere obsesión con una canción particular. El español 'ha estado escuchando' también captura este comportamiento repetitivo. Cuando amamos una canción, es natural querer escucharla múltiples veces seguidas."
      },
      {
        id: "pres_perf_cont_15",
        question: "They _____ _____ _____ about moving to another country.",
        translation: "Han estado pensando en mudarse a otro país.",
        options: ["have been thinking", "has been thinking", "are thinking", "thought"],
        correct: "have been thinking",
        explanation: "El sujeto 'they' requiere 'have been' con 'thinking'. La preposición 'about' conecta con el gerundio 'moving'. Esta estructura describe una consideración prolongada de un cambio de vida importante. El español 'han estado pensando' también muestra esta deliberación continua. Mudarse a otro país es una decisión grande que naturalmente requiere mucha reflexión."
      }
    ]
  }
};

export default part4Categories;