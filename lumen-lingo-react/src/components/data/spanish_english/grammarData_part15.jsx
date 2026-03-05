/**
 * SPANISH → ENGLISH GRAMMAR - PART 15
 * 3 categories, 15 questions each
 */

import { Palette, Mountain, Wand } from "lucide-react";

export const part15Categories = {
  linking_verbs: {
    name: "Verbos Copulativos",
    description: "Seem, appear, become - verbos que conectan sujeto con descripción",
    icon: Palette,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "link_v_1",
        question: "She _____ tired after the long journey home.",
        translation: "Ella se ve cansada después del largo viaje a casa.",
        options: ["looks", "look", "looking", "looked"],
        correct: "looks",
        explanation: "El verbo copulativo 'look' (verse/parecer) conecta sujeto con ADJETIVO (tired), no adverbio. Después de 'look' va adjetivo describiendo al sujeto. En español 'se ve cansada' también usa adjetivo. Estos verbos funcionan como 'ser/estar' conectando sujeto con descripción de su estado o apariencia."
      },
      {
        id: "link_v_2",
        question: "The soup _____ delicious - what's in it?",
        translation: "La sopa huele deliciosa - ¿qué lleva?",
        options: ["smells", "smell", "smelling", "smelled"],
        correct: "smells",
        explanation: "El verbo copulativo 'smell' (oler) con adjetivo 'delicious' describe la sopa. No decimos 'smells deliciously' (adverbio) porque no describe cómo huele sino cómo ES el olor. En español 'huele deliciosa' también usa adjetivo. Esta percepción aromática positiva crea anticipación sobre saborear la sopa."
      },
      {
        id: "link_v_3",
        question: "He _____ angry when he heard the bad news.",
        translation: "Él se puso enojado cuando escuchó las malas noticias.",
        options: ["became", "become", "becoming", "becomes"],
        correct: "became",
        explanation: "El verbo 'become' (ponerse/volverse) indica CAMBIO de estado. Pasó de neutral a enojado. Va con adjetivo 'angry' describiendo el nuevo estado. En español 'se puso enojado' también marca transformación emocional. Esta reacción a noticias negativas muestra que la información recibida provocó cambio emocional inmediato."
      },
      {
        id: "link_v_4",
        question: "This coffee _____ bitter - did you add sugar?",
        translation: "Este café sabe amargo - ¿le agregaste azúcar?",
        options: ["tastes", "taste", "tasting", "tasted"],
        correct: "tastes",
        explanation: "El verbo copulativo 'taste' (saber/tener sabor) con adjetivo 'bitter' describe la experiencia gustativa. No usamos adverbio aquí porque el sabor ES amargo, no que sabe DE MANERA amarga. En español 'sabe amargo' también usa adjetivo. Esta pregunta sobre azúcar sugiere que el amargor es defecto que puede corregirse."
      },
      {
        id: "link_v_5",
        question: "The situation _____ worse with each passing day.",
        translation: "La situación se pone peor con cada día que pasa.",
        options: ["gets", "get", "getting", "got"],
        correct: "gets",
        explanation: "El verbo 'get' (ponerse/volverse) indica cambio progresivo. Con comparativo 'worse' muestra deterioro continuo. En español 'se pone peor' también indica empeoramiento. Esta observación sobre situación que se degrada sugiere necesidad urgente de intervención antes de que se vuelva crisis inmanejable."
      },
      {
        id: "link_v_6",
        question: "Your idea _____ interesting - tell me more about it.",
        translation: "Tu idea suena interesante - cuéntame más sobre ella.",
        options: ["sounds", "sound", "sounding", "sounded"],
        correct: "sounds",
        explanation: "El verbo copulativo 'sound' (sonar/parecer) conecta 'idea' con evaluación 'interesting'. Es impresión auditiva pero usado metafóricamente. En español 'suena interesante' también evalúa. Esta respuesta positiva inicial invita a elaborar, mostrando que captaste atención del oyente exitosamente."
      },
      {
        id: "link_v_7",
        question: "They _____ happy with their new apartment finally.",
        translation: "Ellos se sienten felices con su nuevo apartamento finalmente.",
        options: ["feel", "feels", "feeling", "felt"],
        correct: "feel",
        explanation: "El verbo 'feel' (sentirse) conecta sujeto plural 'they' con estado emocional 'happy'. Es percepción interna de bienestar. En español 'se sienten felices' también es reflexivo. La palabra 'finally' sugiere que la búsqueda de vivienda fue larga y este hallazgo trae alivio."
      },
      {
        id: "link_v_8",
        question: "The weather _____ cold and rainy this week.",
        translation: "El clima se ha vuelto frío y lluvioso esta semana.",
        options: ["has turned", "has become", "turns", "becomes"],
        correct: "has turned",
        explanation: "El verbo 'turn' (volverse) con presente perfecto indica cambio reciente que afecta el presente. Va con adjetivos 'cold and rainy'. En español 'se ha vuelto' también marca transformación climática. Este cambio meteorológico desagradable puede requerir ajustar planes o vestimenta para condiciones más frías."
      },
      {
        id: "link_v_9",
        question: "This material _____ soft and comfortable to touch.",
        translation: "Este material se siente suave y cómodo al tacto.",
        options: ["feels", "feel", "feeling", "felt"],
        correct: "feels",
        explanation: "El verbo 'feel' aquí describe textura táctil, no emoción. Conecta 'material' con cualidades físicas 'soft and comfortable'. En español 'se siente suave' también describe tacto. Esta evaluación positiva de textura sugiere que el material es agradable y de buena calidad para su propósito."
      },
      {
        id: "link_v_10",
        question: "He _____ upset after hearing the criticism.",
        translation: "Él se volvió molesto después de escuchar la crítica.",
        options: ["got", "get", "getting", "gets"],
        correct: "got",
        explanation: "El verbo 'get' (volverse/ponerse) en pasado indica cambio emocional que ocurrió. Pasó de neutral a upset. En español 'se volvió molesto' o 'se puso molesto' también marca transformación. La crítica como gatillo emocional es común cuando sentimos que nuestro trabajo es juzgado negativamente."
      },
      {
        id: "link_v_11",
        question: "The flowers _____ wonderful in the spring garden.",
        translation: "Las flores huelen maravilloso en el jardín de primavera.",
        options: ["smell", "smells", "smelling", "smelled"],
        correct: "smell",
        explanation: "Con sujeto plural 'flowers' el verbo copulativo 'smell' no añade 's'. Va con adjetivo 'wonderful' no adverbio. En español 'huelen maravilloso' también usa adjetivo. Los aromas florales de primavera son uno de los placeres sensoriales que marcan el cambio de estación."
      },
      {
        id: "link_v_12",
        question: "She _____ more confident after the training course.",
        translation: "Ella se volvió más segura después del curso de capacitación.",
        options: ["became", "become", "becoming", "becomes"],
        correct: "became",
        explanation: "El verbo 'become' en pasado indica transformación personal completada. El comparativo 'more confident' muestra mejora específica. En español 'se volvió más segura' también marca cambio positivo. Esta ganancia de confianza del entrenamiento muestra que la capacitación cumplió su objetivo de empoderamiento."
      },
      {
        id: "link_v_13",
        question: "Your plan _____ unrealistic given our limited budget.",
        translation: "Tu plan parece poco realista dado nuestro presupuesto limitado.",
        options: ["seems", "seem", "seeming", "seemed"],
        correct: "seems",
        explanation: "El verbo 'seem' (parecer) conecta 'plan' con evaluación 'unrealistic'. Es percepción u opinión sobre viabilidad. En español 'parece poco realista' también evalúa. Esta crítica constructiva basada en restricción presupuestaria es observación práctica que invita a revisar la propuesta."
      },
      {
        id: "link_v_14",
        question: "The situation _____ complicated with all these new problems.",
        translation: "La situación se está volviendo complicada con todos estos nuevos problemas.",
        options: ["is getting", "gets", "get", "got"],
        correct: "is getting",
        explanation: "El presente continuo de 'get' indica transformación EN PROCESO ahora. 'Is getting complicated' muestra que la complejidad aumenta actualmente. En español 'se está volviendo complicada' también usa gerundio. Esta observación sobre deterioro en curso sugiere necesidad de intervención antes de que sea demasiado tarde."
      },
      {
        id: "link_v_15",
        question: "This fabric _____ smooth against my skin.",
        translation: "Esta tela se siente suave contra mi piel.",
        options: ["feels", "feel", "feeling", "felt"],
        correct: "feels",
        explanation: "El verbo 'feel' describe sensación táctil de la tela. Conecta 'fabric' con cualidad 'smooth'. En español 'se siente suave' también describe textura. Esta percepción sensorial positiva sugiere que la tela es de buena calidad y cómoda de usar, importante para prendas que tocan piel directamente."
      }
    ]
  },

  still_yet_already: {
    name: "Still, Yet, Already",
    description: "Expresar continuidad y completitud temporal",
    icon: Mountain,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "still_yet_1",
        question: "I'm _____ waiting for your response to my email.",
        translation: "Todavía estoy esperando tu respuesta a mi email.",
        options: ["still", "yet", "already", "anymore"],
        correct: "still",
        explanation: "Usamos 'still' (todavía) en AFIRMATIVAS para indicar que algo continúa cuando esperaríamos que hubiera terminado. Va antes del verbo principal o después de 'be'. En español 'todavía estoy esperando' también expresa esta continuación. Esta espera prolongada puede reflejar frustración por falta de respuesta oportuna."
      },
      {
        id: "still_yet_2",
        question: "Have you finished your homework _____?",
        translation: "¿Ya has terminado tu tarea?",
        options: ["yet", "still", "already", "anymore"],
        correct: "yet",
        explanation: "En PREGUNTAS usamos 'yet' (ya/todavía) al final de la oración. Pregunta si algo ya se completó. En español '¿ya has terminado?' pone 'ya' al inicio. Esta pregunta común de padres o profesores verifica cumplimiento de responsabilidades académicas pendientes."
      },
      {
        id: "still_yet_3",
        question: "She has _____ completed the report - so fast!",
        translation: "Ella ya ha completado el informe - ¡qué rápido!",
        options: ["already", "yet", "still", "anymore"],
        correct: "already",
        explanation: "Usamos 'already' (ya) en afirmativas para indicar que algo ocurrió antes de lo esperado. Va entre auxiliar y participio o al final. En español 'ya ha completado' también indica anticipación. La exclamación de sorpresa confirma que la velocidad de completitud superó expectativas."
      },
      {
        id: "still_yet_4",
        question: "They _____ haven't called me back about the job.",
        translation: "Todavía no me han devuelto la llamada sobre el trabajo.",
        options: ["still", "yet", "already", "anymore"],
        correct: "still",
        explanation: "En NEGATIVAS usamos 'still' (todavía) antes del auxiliar negativo para enfatizar que la situación problemática continúa. También podríamos usar 'yet' al final pero 'still' es más enfático. En español 'todavía no' también marca frustración. Esta falta de respuesta sobre aplicación laboral genera ansiedad comprensible."
      },
      {
        id: "still_yet_5",
        question: "I haven't eaten lunch _____ today because I'm so busy.",
        translation: "No he almorzado todavía hoy porque estoy muy ocupado.",
        options: ["yet", "still", "already", "anymore"],
        correct: "yet",
        explanation: "En negativas 'yet' va al FINAL significando 'todavía no'. Es más neutral que 'still'. En español 'todavía no he almorzado' puede poner 'todavía' al inicio. Esta situación de saltar comida por trabajo excesivo no es saludable y sugiere necesidad de mejor balance."
      },
      {
        id: "still_yet_6",
        question: "He's _____ living with his parents at age 30.",
        translation: "Él todavía vive con sus padres a los 30 años.",
        options: ["still", "yet", "already", "anymore"],
        correct: "still",
        explanation: "Para situaciones que continúan inesperadamente usamos 'still' en afirmativas. La edad 30 implica que se esperaría independencia. En español 'todavía vive' también sugiere que es tiempo de cambio. Esta situación puede ser por razones económicas o culturales donde vivir en familia es normal."
      },
      {
        id: "still_yet_7",
        question: "They've _____ left for the airport - they're early!",
        translation: "Ya se han ido al aeropuerto - ¡son tempranos!",
        options: ["already", "yet", "still", "anymore"],
        correct: "already",
        explanation: "Usamos 'already' cuando algo ocurrió antes de tiempo esperado. Puede ir entre auxiliar y participio o al final. En español 'ya se han ido' también indica anticipación. Esta puntualidad excesiva para vuelos muestra precaución extrema pero comprensible para evitar perder vuelo."
      },
      {
        id: "still_yet_8",
        question: "Is the store _____ open at this late hour?",
        translation: "¿La tienda todavía está abierta a esta hora tan tarde?",
        options: ["still", "yet", "already", "anymore"],
        correct: "still",
        explanation: "En preguntas sobre continuación de estado usamos 'still' (todavía). Va después del verbo 'be'. En español '¿todavía está abierta?' también pregunta sobre estado continuo. Esta pregunta sobre horario tardío muestra esperanza de encontrar tienda abierta a pesar de hora poco convencional."
      },
      {
        id: "still_yet_9",
        question: "I don't work there _____ - I quit last month.",
        translation: "Ya no trabajo ahí - renuncié el mes pasado.",
        options: ["anymore", "still", "yet", "already"],
        correct: "anymore",
        explanation: "Para indicar que algo que continuaba YA NO continúa usamos 'anymore' al final de negativa. Es opuesto de 'still'. En español 'ya no trabajo' marca este cese. La renuncia el mes pasado explica por qué la situación cambió de continuar a terminar."
      },
      {
        id: "still_yet_10",
        question: "Has the mail arrived _____? I'm expecting an important letter.",
        translation: "¿Ya llegó el correo? Estoy esperando una carta importante.",
        options: ["yet", "still", "already", "anymore"],
        correct: "yet",
        explanation: "En preguntas sobre si algo ya ocurrió usamos 'yet' al final. Pregunta por completitud. En español '¿ya llegó?' pone 'ya' al inicio. La carta importante esperada añade urgencia a la pregunta, haciendo que la espera del correo sea particularmente ansiosa."
      },
      {
        id: "still_yet_11",
        question: "She _____ remembers her first day of school clearly.",
        translation: "Ella todavía recuerda su primer día de escuela claramente.",
        options: ["still", "yet", "already", "anymore"],
        correct: "still",
        explanation: "Para memorias que persisten usamos 'still' indicando que el recuerdo no se ha desvanecido. Va antes del verbo 'remembers'. En español 'todavía recuerda' también marca persistencia. El primer día de escuela es memoria formativa que muchos conservan vívidamente por décadas por su impacto emocional."
      },
      {
        id: "still_yet_12",
        question: "I've _____ seen that movie three times this month!",
        translation: "¡Ya he visto esa película tres veces este mes!",
        options: ["already", "yet", "still", "anymore"],
        correct: "already",
        explanation: "Usamos 'already' para enfatizar que vimos la película más veces de lo esperado o apropiado. Va entre auxiliar y participio. En español 'ya he visto' también indica exceso sorpresivo. Ver la misma película tres veces en un mes sugiere obsesión o que es extraordinariamente buena."
      },
      {
        id: "still_yet_13",
        question: "Haven't you left for vacation _____? You're still here!",
        translation: "¿No te has ido de vacaciones todavía? ¡Todavía estás aquí!",
        options: ["yet", "still", "already", "anymore"],
        correct: "yet",
        explanation: "En pregunta negativa sobre algo que esperábamos hubiera ocurrido usamos 'yet' al final. Expresa sorpresa de que aún no se fue. En español '¿todavía no?' también marca extrañeza. Esta presencia inesperada cuando debería estar de viaje sugiere retraso o cambio de planes."
      },
      {
        id: "still_yet_14",
        question: "The problem _____ exists even after we tried to fix it.",
        translation: "El problema todavía existe incluso después de intentar arreglarlo.",
        options: ["still", "yet", "already", "anymore"],
        correct: "still",
        explanation: "Para persistencia frustrante de problema usamos 'still' en afirmativa. Va antes del verbo 'exists'. En español 'todavía existe' también lamenta continuación. Esta persistencia a pesar de intentos de solución sugiere que el problema es más complejo de lo anticipado."
      },
      {
        id: "still_yet_15",
        question: "We haven't decided on a name for the baby _____.",
        translation: "Todavía no hemos decidido un nombre para el bebé.",
        options: ["yet", "still", "already", "anymore"],
        correct: "yet",
        explanation: "En negativa sobre decisión pendiente usamos 'yet' al final. Indica que el proceso continúa. En español 'todavía no hemos decidido' también marca indecisión. La elección de nombre de bebé es decisión importante que muchos padres toman con mucho cuidado y deliberación."
      }
    ]
  },

  no_vs_not: {
    name: "No vs Not",
    description: "Diferentes tipos de negación según contexto",
    icon: Wand,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "no_not_1",
        question: "I have _____ time to talk right now - I'm busy.",
        translation: "No tengo tiempo para hablar ahora mismo - estoy ocupado.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Usamos 'no' directamente antes de SUSTANTIVOS: 'no time'. Es más enfático que 'not any time'. En español 'no tengo tiempo' usa 'no' con el verbo. Esta declaración directa de falta de disponibilidad establece límite claro sobre capacidad presente de conversar."
      },
      {
        id: "no_not_2",
        question: "She's _____ happy with the service she received.",
        translation: "Ella no está feliz con el servicio que recibió.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "Usamos 'not' con VERBOS y ADJETIVOS. Va después del verbo auxiliar 'is': 'is not happy'. En español 'no está feliz' usa 'no' antes del verbo. Esta expresión de insatisfacción con servicio probablemente resultará en queja formal o cambio de proveedor."
      },
      {
        id: "no_not_3",
        question: "There's _____ reason to worry about this situation.",
        translation: "No hay razón para preocuparse por esta situación.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Directamente antes de sustantivo 'reason' usamos 'no'. Es negación completa de existencia de razones. En español 'no hay razón' también niega existencia. Esta tranquilización intenta calmar ansiedades innecesarias sobre situación que realmente está bajo control."
      },
      {
        id: "no_not_4",
        question: "I'm _____ sure if I can attend the conference.",
        translation: "No estoy seguro si puedo asistir a la conferencia.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "Con adjetivos (sure) usamos 'not' después de 'be': 'am not sure'. En español 'no estoy seguro' también usa 'no' con verbo. Esta incertidumbre sobre asistencia puede ser por conflictos de horario u otras obligaciones que necesitan resolverse primero."
      },
      {
        id: "no_not_5",
        question: "There are _____ students in the classroom today.",
        translation: "No hay estudiantes en el salón hoy.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Antes de sustantivo plural 'students' usamos 'no'. Es negación directa de presencia. También podríamos decir 'not any students' pero 'no' es más conciso. En español 'no hay estudiantes' es directo. Esta aula vacía puede ser por día festivo o cancelación de clase."
      },
      {
        id: "no_not_6",
        question: "He did _____ pass the exam despite studying hard.",
        translation: "Él no pasó el examen a pesar de estudiar mucho.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "Con auxiliares (did, has, will) usamos 'not' para negar el verbo: 'did not pass'. En español 'no pasó' pone 'no' antes del verbo. La frase 'despite studying hard' añade frustración porque el esfuerzo no se tradujo en éxito."
      },
      {
        id: "no_not_7",
        question: "There's _____ point in arguing about this anymore.",
        translation: "No tiene sentido discutir sobre esto ya.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Antes de sustantivo 'point' (sentido/propósito) usamos 'no'. Esta expresión común 'no point in' indica futilidad. En español 'no tiene sentido' es similar. Esta declaración de cese de debate reconoce que continuar sería improductivo y es momento de aceptar desacuerdo."
      },
      {
        id: "no_not_8",
        question: "I'm _____ interested in watching that show anymore.",
        translation: "Ya no estoy interesado en ver ese programa.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "Con adjetivos (interested) usamos 'not'. La palabra 'anymore' indica cambio de estado previo. En español 'ya no estoy interesado' también marca pérdida de interés. Este cambio de gusto puede ser por calidad decreciente del programa o simplemente evolución de preferencias."
      },
      {
        id: "no_not_9",
        question: "He has _____ idea what you're talking about right now.",
        translation: "Él no tiene idea de qué estás hablando ahora mismo.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Antes de sustantivo 'idea' usamos 'no': 'has no idea'. Esta expresión común indica confusión total. En español 'no tiene idea' también es directo. Esta falta absoluta de comprensión sobre tema de conversación sugiere que necesita contexto o explicación adicional."
      },
      {
        id: "no_not_10",
        question: "She's _____ going to the party tonight after all.",
        translation: "Ella no va a ir a la fiesta esta noche después de todo.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "Para negar futuro 'going to' usamos 'not' después de 'is': 'is not going'. En español 'no va a ir' también niega verbo. La frase 'after all' indica cambio de planes previos, quizás por razón que surgió recientemente."
      },
      {
        id: "no_not_11",
        question: "There's _____ milk left - we need to buy more.",
        translation: "No queda leche - necesitamos comprar más.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Antes de sustantivo incontable 'milk' usamos 'no'. También podríamos decir 'not any milk' pero 'no' es más directo. En español 'no queda leche' es simple. Esta depleción de producto básico requiere añadirlo inmediatamente a lista de compras."
      },
      {
        id: "no_not_12",
        question: "I'm _____ feeling well today - I might be getting sick.",
        translation: "No me siento bien hoy - puede que me esté enfermando.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "Con gerundio 'feeling' usamos 'not' después de 'am': 'am not feeling well'. En español 'no me siento bien' también niega verbo. Esta admisión de malestar con especulación sobre enfermedad inminente sugiere necesidad de descanso o atención médica preventiva."
      },
      {
        id: "no_not_13",
        question: "There's _____ chance I'll miss this important opportunity.",
        translation: "No hay posibilidad de que pierda esta oportunidad importante.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Antes de sustantivo 'chance' (posibilidad) usamos 'no' para negación enfática. En español 'no hay posibilidad' también es rotundo. Esta declaración de determinación absoluta muestra que la persona está comprometida a no dejar escapar esta oportunidad valiosa."
      },
      {
        id: "no_not_14",
        question: "He's _____ as tall as his brother despite being older.",
        translation: "Él no es tan alto como su hermano a pesar de ser mayor.",
        options: ["not", "no", "any", "none"],
        correct: "not",
        explanation: "En comparaciones con 'as...as' usamos 'not' para negar: 'not as tall as'. En español 'no es tan alto como' también usa 'no' con verbo. Esta comparación física entre hermanos es común, y ser menor pero más alto es fenómeno genético curioso."
      },
      {
        id: "no_not_15",
        question: "There are _____ tickets available for tonight's show.",
        translation: "No hay boletos disponibles para el espectáculo de esta noche.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Antes de sustantivo plural 'tickets' usamos 'no' para indicar ausencia completa. En español 'no hay boletos' también niega existencia. Esta situación de entradas agotadas es decepcionante pero común con eventos populares, requiriendo planificación anticipada."
      }
    ]
  }
};

export default part15Categories;