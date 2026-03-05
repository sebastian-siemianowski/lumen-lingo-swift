/**
 * SPANISH → ENGLISH GRAMMAR - PART 6
 * 4 categories, 15 questions each
 */

import { Users, ArrowRightLeft, Scale, TrendingUp } from "lucide-react";

export const part6Categories = {
  object_pronouns_advanced: {
    name: "Pronombres de Objeto Directo e Indirecto",
    description: "Me, you, him, her - posiciones y usos",
    icon: Users,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "obj_pron_1",
        question: "She gave _____ a present for my birthday.",
        translation: "Ella me dio un regalo para mi cumpleaños.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "Los pronombres de objeto en inglés usan formas especiales. 'Me' es objeto (no 'I' que es sujeto). Aquí 'me' es el objeto indirecto que recibe el regalo. El español también diferencia 'yo' (sujeto) de 'me' (objeto). Esta distinción es fundamental para construir oraciones correctas y claras sobre quién da y quién recibe."
      },
      {
        id: "obj_pron_2",
        question: "I saw _____ at the mall yesterday afternoon.",
        translation: "Lo vi a él en el centro comercial ayer en la tarde.",
        options: ["him", "he", "his", "himself"],
        correct: "him",
        explanation: "Para objeto masculino usamos 'him' (no 'he' que es sujeto). El verbo 'saw' requiere un objeto directo. En español 'lo vi' usa el pronombre 'lo' que es diferente de 'él'. Esta forma es común para contar encuentros casuales. El pronombre correcto hace que la oración fluya naturalmente al compartir estas coincidencias cotidianas."
      },
      {
        id: "obj_pron_3",
        question: "Can you help _____ with this problem?",
        translation: "¿Puedes ayudarme con este problema?",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "Después del verbo 'help' necesitamos un pronombre objeto: 'me'. Esta es una petición de ayuda directa. El verbo modal 'can' añade cortesía a la pregunta. El español 'ayudarme' combina el verbo con el pronombre. Esta construcción es muy útil cuando enfrentamos dificultades y necesitamos apoyo de otros."
      },
      {
        id: "obj_pron_4",
        question: "They invited _____ to their wedding celebration.",
        translation: "Nos invitaron a su boda.",
        options: ["us", "we", "our", "ours"],
        correct: "us",
        explanation: "El pronombre objeto plural es 'us' (no 'we' que es sujeto). Después de 'invited' necesitamos forma objeto. El español 'nos invitaron' también usa forma objeto. Esta oración comunica una invitación especial a un evento importante. Ser incluido en celebraciones familiares es un honor que muestra aprecio."
      },
      {
        id: "obj_pron_5",
        question: "I told _____ about the surprise party.",
        translation: "Le conté a ella sobre la fiesta sorpresa.",
        options: ["her", "she", "hers", "herself"],
        correct: "her",
        explanation: "Para objeto femenino usamos 'her'. El verbo 'told' requiere objeto indirecto (a quién le contaste). En español 'le conté' usa pronombre indirecto también. Esta oración sugiere que alguien compartió un secreto, lo cual puede arruinar la sorpresa. Es importante pensar bien antes de revelar información confidencial."
      },
      {
        id: "obj_pron_6",
        question: "The teacher explained the lesson to _____.",
        translation: "El profesor nos explicó la lección.",
        options: ["us", "we", "our", "ours"],
        correct: "us",
        explanation: "Después de la preposición 'to' usamos pronombre objeto: 'us'. Esta estructura muestra a quién se dirigió la explicación. El verbo 'explained' requiere tanto objeto directo (the lesson) como indirecto (to us). El español 'nos explicó' es más compacto. Esta construcción describe una experiencia educativa donde todos recibieron información."
      },
      {
        id: "obj_pron_7",
        question: "Please give _____ your answer by tomorrow.",
        translation: "Por favor dame tu respuesta para mañana.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "El verbo 'give' requiere objeto indirecto: 'me' recibe la respuesta. La palabra 'please' añade cortesía. El límite temporal 'by tomorrow' establece urgencia. El español 'dame' combina verbo con pronombre. Esta forma es común en contextos donde necesitamos decisiones rápidas o respuestas a propuestas importantes."
      },
      {
        id: "obj_pron_8",
        question: "I'll call _____ when I arrive at the airport.",
        translation: "Te llamaré cuando llegue al aeropuerto.",
        options: ["you", "your", "yours", "yourself"],
        correct: "you",
        explanation: "El pronombre 'you' funciona tanto para sujeto como objeto en inglés. Después de 'call' necesitamos objeto directo. Esta promesa de comunicación tranquiliza a quien espera. El español 'te llamaré' también usa forma objeto. Es cortés mantener informados a otros sobre nuestro paradero, especialmente cuando viajamos."
      },
      {
        id: "obj_pron_9",
        question: "She sent _____ a message this morning.",
        translation: "Ella me envió un mensaje esta mañana.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "Después de 'sent' usamos pronombre objeto 'me' como receptor del mensaje. El verbo 'send' puede tener dos objetos: indirecto (me) y directo (a message). El español 'me envió' es similar. Esta estructura describe comunicación moderna donde los mensajes digitales son forma principal de contacto diario."
      },
      {
        id: "obj_pron_10",
        question: "We showed _____ our vacation photos.",
        translation: "Les mostramos nuestras fotos de vacaciones.",
        options: ["them", "they", "their", "theirs"],
        correct: "them",
        explanation: "El pronombre objeto plural es 'them' (no 'they' que es sujeto). El verbo 'showed' requiere objeto indirecto. El español 'les mostramos' usa pronombre indirecto también. Compartir fotos de viajes es forma común de revivir experiencias y conectar con amigos y familia sobre nuestras aventuras."
      },
      {
        id: "obj_pron_11",
        question: "Can you lend _____ some money until Friday?",
        translation: "¿Puedes prestarme algo de dinero hasta el viernes?",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "El verbo 'lend' (prestar) requiere objeto indirecto: 'me' recibe el préstamo. La frase 'until Friday' establece cuando se devolverá. El español 'prestarme' combina verbo con pronombre. Pedir prestado dinero requiere confianza mutua, y esta forma cortés con 'can you' mantiene la dignidad en la petición."
      },
      {
        id: "obj_pron_12",
        question: "The waiter brought _____ the wrong order.",
        translation: "El mesero nos trajo la orden equivocada.",
        options: ["us", "we", "our", "ours"],
        correct: "us",
        explanation: "Después de 'brought' usamos 'us' como objeto indirecto. El objeto directo es 'the wrong order'. Esta situación frustrante en restaurantes requiere corrección. El español 'nos trajo' también usa objeto indirecto. Es importante comunicar errores educadamente para que el servicio pueda corregirlos rápidamente."
      },
      {
        id: "obj_pron_13",
        question: "I need to tell _____ something important.",
        translation: "Necesito decirte algo importante.",
        options: ["you", "your", "yours", "yourself"],
        correct: "you",
        explanation: "El verbo 'tell' requiere objeto directo: 'you'. La frase 'something important' añade misterio e intriga. Esta construcción crea anticipación sobre información significativa. El español 'decirte' une verbo con pronombre. Es una forma de captar atención antes de compartir noticias importantes, generando curiosidad."
      },
      {
        id: "obj_pron_14",
        question: "He asked _____ for directions to the station.",
        translation: "Él me pidió direcciones a la estación.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "El verbo 'ask' puede tener objeto indirecto: 'me' es a quien preguntó. La preposición 'for' introduce qué pidió. El español 'me pidió' usa objeto indirecto similar. Pedir direcciones a desconocidos es interacción social común que requiere coraje, especialmente cuando viajamos en lugares nuevos."
      },
      {
        id: "obj_pron_15",
        question: "My parents bought _____ a car for graduation.",
        translation: "Mis padres me compraron un auto para la graduación.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "El verbo 'bought' tiene dos objetos: indirecto (me - receptor) y directo (a car - cosa comprada). Esta estructura describe un regalo generoso. El español 'me compraron' también usa objeto indirecto. Es un regalo significativo que marca un hito importante, mostrando el orgullo parental por logros académicos."
      }
    ]
  },

  por_vs_para_advanced: {
    name: "Por vs Para - Usos Avanzados",
    description: "Distinción entre razón y propósito",
    icon: ArrowRightLeft,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "por_para_1",
        question: "I did it _____ you.",
        translation: "Lo hice por ti.",
        options: ["for", "by", "to", "at"],
        correct: "for",
        explanation: "En inglés, 'for' puede traducirse como 'por' o 'para' dependiendo del contexto. Aquí 'for you' significa 'por ti' (beneficio/razón). Esta frase expresa que alguien fue la motivación de la acción. El inglés es más simple que el español que distingue claramente 'por' y 'para'. Esta construcción muestra cariño o sacrificio hecho pensando en otra persona."
      },
      {
        id: "por_para_2",
        question: "This gift is _____ your mother.",
        translation: "Este regalo es para tu madre.",
        options: ["for", "by", "to", "at"],
        correct: "for",
        explanation: "Aquí 'for your mother' significa 'para tu madre' (destinatario). La misma palabra 'for' en inglés cubre ambos conceptos que el español separa. Esta estructura identifica el receptor del regalo. Aunque el inglés es más simple, el contexto siempre aclara si es razón o destino. Los regalos siempre tienen un destinatario específico en mente."
      },
      {
        id: "por_para_3",
        question: "We walked _____ the park to get home.",
        translation: "Caminamos por el parque para llegar a casa.",
        options: ["through", "for", "by", "to"],
        correct: "through",
        explanation: "Para movimiento A TRAVÉS de un espacio usamos 'through'. Es diferente de 'for' y traduce el 'por' español de movimiento. Esta distinción es importante para describir rutas. El inglés tiene varias palabras donde el español usa 'por': through (a través), by (cerca de), for (a favor de). Esta especificidad hace las direcciones más claras."
      },
      {
        id: "por_para_4",
        question: "The book was written _____ a famous author.",
        translation: "El libro fue escrito por un autor famoso.",
        options: ["by", "for", "from", "of"],
        correct: "by",
        explanation: "En voz pasiva, 'by' indica quién realizó la acción. Traduce el 'por' español de agente. Esta construcción atribuye autoría. El español 'por un autor' también identifica al creador. Es la forma estándar de dar crédito en literatura, arte y cualquier trabajo creativo, reconociendo el talento detrás de la obra."
      },
      {
        id: "por_para_5",
        question: "I'm studying _____ the exam next week.",
        translation: "Estoy estudiando para el examen de la próxima semana.",
        options: ["for", "by", "to", "at"],
        correct: "for",
        explanation: "Aquí 'for the exam' indica propósito o preparación, equivale al 'para' español. Estudiamos CON UN OBJETIVO en mente. Esta estructura muestra planificación y preparación intencional. El inglés usa 'for' para expresar esta meta. Es la forma natural de explicar por qué dedicamos tiempo al estudio."
      },
      {
        id: "por_para_6",
        question: "Thank you _____ helping me with my homework.",
        translation: "Gracias por ayudarme con mi tarea.",
        options: ["for", "by", "to", "of"],
        correct: "for",
        explanation: "Después de 'thank you' usamos 'for' más gerundio para agradecer acciones. Aquí traduce el 'por' español de razón. El gerundio 'helping' funciona como sustantivo. Esta construcción expresa gratitud específica. Es importante ser específico al agradecer, reconociendo exactamente qué acción apreciamos, lo que hace el agradecimiento más significativo."
      },
      {
        id: "por_para_7",
        question: "I'll be there _____ 3 PM.",
        translation: "Estaré allí para las 3 PM.",
        options: ["by", "for", "at", "in"],
        correct: "by",
        explanation: "La preposición 'by' con tiempo significa 'para/antes de' una hora límite. No es exactamente 'at 3 PM' (a las 3) sino 'antes de las 3'. Esta distinción es sutil pero importante. El español 'para las 3' también indica límite no hora exacta. Es útil para promesas sobre puntualidad con cierta flexibilidad."
      },
      {
        id: "por_para_8",
        question: "We drove _____ the city center to avoid traffic.",
        translation: "Conducimos por el centro de la ciudad para evitar tráfico.",
        options: ["through", "for", "by", "across"],
        correct: "through",
        explanation: "Nuevamente 'through' para movimiento a través de un área. Aquí describe la ruta elegida. La razón se expresa con 'to avoid' (infinitivo de propósito). El español 'por el centro' usa 'por' para la ruta. Esta oración muestra decisiones de navegación urbana para optimizar tiempo de viaje."
      },
      {
        id: "por_para_9",
        question: "This is a gift _____ being such a good friend.",
        translation: "Este es un regalo por ser tan buen amigo.",
        options: ["for", "by", "to", "of"],
        correct: "for",
        explanation: "Aquí 'for being' indica la razón del regalo, traduce 'por ser'. El gerundio después de 'for' expresa la causa. Esta estructura reconoce y celebra cualidades personales. El español 'por ser' también vincula el regalo con la amistad. Es una forma hermosa de expresar aprecio por las relaciones valiosas en nuestras vidas."
      },
      {
        id: "por_para_10",
        question: "The package was delivered _____ courier.",
        translation: "El paquete fue entregado por mensajero.",
        options: ["by", "for", "with", "through"],
        correct: "by",
        explanation: "En contexto de entrega, 'by courier' indica el medio/método. Traduce 'por mensajero' (agente). Esta construcción describe cómo se transportó algo. El español 'por mensajero' también especifica el servicio usado. Es información útil al rastrear paquetes y entender la logística de entregas."
      },
      {
        id: "por_para_11",
        question: "I'm saving money _____ a new computer.",
        translation: "Estoy ahorrando dinero para una computadora nueva.",
        options: ["for", "by", "to", "at"],
        correct: "for",
        explanation: "Aquí 'for a computer' indica el propósito del ahorro, equivale a 'para'. Ahorrar CON UN OBJETIVO claro ayuda a mantener disciplina financiera. Esta estructura muestra planificación y metas. El español 'para una computadora' también expresa este objetivo. Tener una meta concreta hace el ahorro más motivador y sostenible."
      },
      {
        id: "por_para_12",
        question: "He apologized _____ being late to the meeting.",
        translation: "Se disculpó por llegar tarde a la reunión.",
        options: ["for", "by", "to", "of"],
        correct: "for",
        explanation: "Después de 'apologize' usamos 'for' más gerundio para especificar la razón de la disculpa. Aquí traduce 'por llegar tarde'. El gerundio 'being late' funciona como sustantivo. El español también usa 'por' en este contexto. Es importante ser específico al disculparse, mostrando que entendemos exactamente qué causó la molestia."
      },
      {
        id: "por_para_13",
        question: "The house was sold _____ a very good price.",
        translation: "La casa fue vendida por un muy buen precio.",
        options: ["for", "by", "at", "in"],
        correct: "for",
        explanation: "Con precios usamos 'for' que traduce el 'por' español de costo. Esta construcción especifica cuánto se pagó. Es diferente del 'by' que indicaría quién vendió. El español 'por un buen precio' también se enfoca en el valor de transacción. Esta información es relevante al evaluar si una venta fue exitosa."
      },
      {
        id: "por_para_14",
        question: "I'm leaving _____ the airport in an hour.",
        translation: "Salgo para el aeropuerto en una hora.",
        options: ["for", "to", "at", "by"],
        correct: "for",
        explanation: "Usamos 'for' con destinos cuando el verbo es 'leave'. Traduce 'para' de destino. También podríamos usar 'to go to' pero 'leaving for' es más natural. El español 'para el aeropuerto' también indica destino. Esta frase comunica planes de viaje inminentes, creando urgencia sobre preparativos finales."
      },
      {
        id: "por_para_15",
        question: "She was punished _____ breaking the rules.",
        translation: "Fue castigada por romper las reglas.",
        options: ["for", "by", "to", "of"],
        correct: "for",
        explanation: "Aquí 'for breaking' indica la razón del castigo, traduce 'por romper'. El gerundio después de 'for' expresa la causa. Esta estructura establece consecuencias de acciones. El español 'por romper' también conecta el comportamiento con la consecuencia. Es la forma de explicar que las reglas tienen repercusiones cuando se violan."
      }
    ]
  },

  ser_estar_contexts: {
    name: "Ser vs Estar - Contextos Ingleses",
    description: "Cómo el inglés expresa estados permanentes vs temporales",
    icon: Scale,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "ser_estar_1",
        question: "She _____ a teacher at the local school.",
        translation: "Ella es profesora en la escuela local.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "En inglés solo existe 'to be' pero aquí traduce 'ser' porque hablamos de profesión (identidad/característica permanente). El verbo 'is' para tercera persona singular. El español distingue 'es' (permanente) de 'está' (temporal). Esta oración describe lo que alguien ES, su rol profesional que define parte de su identidad."
      },
      {
        id: "ser_estar_2",
        question: "The coffee _____ cold now.",
        translation: "El café está frío ahora.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Aunque en inglés usamos 'is', en español sería 'está' porque el frío es estado temporal. La palabra 'now' enfatiza el estado actual. El café no ES frío por naturaleza, sino que ESTÁ frío en este momento. El inglés no distingue gramaticalmente pero el contexto (now) sugiere temporalidad. Entender esta diferencia ayuda a pensar en español."
      },
      {
        id: "ser_estar_3",
        question: "This book _____ very interesting and educational.",
        translation: "Este libro es muy interesante y educativo.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Aquí 'is' traduce 'es' porque hablamos de cualidades inherentes del libro. Los adjetivos 'interesting' y 'educational' describen características permanentes de la obra. El español usa 'es' para propiedades intrínsecas. Esta diferencia del español donde 'está interesante' implicaría sorpresa o evaluación temporal, mientras 'es' declara cualidad fundamental."
      },
      {
        id: "ser_estar_4",
        question: "I _____ tired after the long journey.",
        translation: "Estoy cansado después del largo viaje.",
        options: ["am", "is", "are", "was"],
        correct: "am",
        explanation: "El verbo 'am' con 'I' traduce 'estoy' aquí porque el cansancio es estado temporal causado por el viaje. No es característica permanente de la persona. El español claramente usa 'estoy' no 'soy'. La frase 'after the long journey' explica por qué es estado temporal que pasará con descanso."
      },
      {
        id: "ser_estar_5",
        question: "The meeting _____ in the conference room on the third floor.",
        translation: "La reunión es en la sala de conferencias del tercer piso.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Para ubicación de eventos usamos 'is' que traduce el 'es' español de ubicación. Esto es diferente de 'estar' que usaríamos para objetos físicos. En español podemos decir 'es en' o 'está en' dependiendo de si hablamos de evento programado o ubicación física. El inglés simplifica con solo 'is'."
      },
      {
        id: "ser_estar_6",
        question: "My sister _____ happy with her new job.",
        translation: "Mi hermana está feliz con su nuevo trabajo.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Aunque usamos 'is', en español sería 'está' porque la felicidad aquí es estado emocional temporal relacionado con el trabajo nuevo. No decimos que ES feliz (rasgo de personalidad) sino que ESTÁ feliz (emoción actual). El contexto 'with her new job' clarifica que es estado actual relacionado con circunstancia específica."
      },
      {
        id: "ser_estar_7",
        question: "The movie _____ from Spain and won many awards.",
        translation: "La película es de España y ganó muchos premios.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Para origen o procedencia usamos 'is from' que traduce 'es de' español (característica permanente). El origen de una película no cambia. Esta estructura identifica nacionalidad o procedencia. El español usa 'ser' para origen porque es hecho inmutable. Los premios mencionados validan la calidad del cine español."
      },
      {
        id: "ser_estar_8",
        question: "The soup _____ too salty for my taste.",
        translation: "La sopa está demasiado salada para mi gusto.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Usamos 'is' pero en español sería 'está' porque evaluamos el sabor actual, no una cualidad permanente. El adverbio 'too' indica exceso. La sopa podría corregirse, es estado temporal del plato servido. El español distingue claramente que el exceso de sal es problema actual de esta preparación específica, no receta."
      },
      {
        id: "ser_estar_9",
        question: "My keys _____ on the table where I left them.",
        translation: "Mis llaves están en la mesa donde las dejé.",
        options: ["are", "is", "were", "been"],
        correct: "are",
        explanation: "Para ubicación física de objetos usamos 'are' que traduce 'están' español (posición temporal). Las llaves pueden moverse, su ubicación no es permanente. El sujeto plural 'keys' requiere 'are'. Esta distinción es clara en español: objetos ESTÁN en lugares, no SON lugares. El inglés simplifica con 'be'."
      },
      {
        id: "ser_estar_10",
        question: "He _____ from Colombia but lives in the United States.",
        translation: "Él es de Colombia pero vive en Estados Unidos.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Origen permanente usa 'is from' que traduce 'es de'. Aunque viva en otro país, su origen no cambia. El contraste con 'lives' (presente del lugar actual) es interesante. El español mantiene 'ser' para origen inmutable. Esta estructura describe la realidad de muchos inmigrantes cuya identidad incluye ambos países."
      },
      {
        id: "ser_estar_11",
        question: "The concert _____ next Saturday at 8 PM.",
        translation: "El concierto es el próximo sábado a las 8 PM.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Para eventos programados usamos 'is' que traduce el 'es' español de horarios. Aquí indica CUÁNDO ocurre el evento. Es dato fijo en la agenda. El español usa 'ser' para horarios establecidos porque son hechos programados inmutables. Esta información es esencial para planificar la asistencia al evento."
      },
      {
        id: "ser_estar_12",
        question: "You _____ looking very elegant tonight.",
        translation: "Te ves muy elegante esta noche.",
        options: ["are", "is", "were", "am"],
        correct: "are",
        explanation: "Con 'looking' (verbo de percepción) traducimos al español 'te ves' más que 'estás'. El inglés usa 'are looking' en presente continuo. Esta es una apariencia temporal de esta noche específica. Es un cumplido sobre esfuerzo especial en vestirse. El español podría decir 'estás elegante' o 'te ves elegante', ambos temporales."
      },
      {
        id: "ser_estar_13",
        question: "This restaurant _____ always crowded on weekends.",
        translation: "Este restaurante está siempre lleno los fines de semana.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Aunque 'always' parece indicar permanencia, 'crowded' es estado temporal que se repite. En español usaríamos 'está' porque ser lleno no es característica del restaurante sino situación recurrente. El adverbio 'always' establece el patrón regular. Esta información es útil para planificar visitas en horarios menos concurridos."
      },
      {
        id: "ser_estar_14",
        question: "My brother _____ tall and athletic by nature.",
        translation: "Mi hermano es alto y atlético.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Para características físicas permanentes usamos 'is' que traduce 'es' español. Los adjetivos 'tall' y 'athletic' describen atributos físicos estables. La frase 'by nature' refuerza la permanencia. El español usa 'ser' para estas cualidades inherentes. Esta distinción es clara: lo que somos físicamente usa 'ser'."
      },
      {
        id: "ser_estar_15",
        question: "The door _____ open - someone forgot to close it.",
        translation: "La puerta está abierta - alguien olvidó cerrarla.",
        options: ["is", "are", "was", "been"],
        correct: "is",
        explanation: "Aunque usamos 'is', en español es claramente 'está' porque el estado abierto es temporal y accidental. La puerta puede cerrarse. La explicación posterior confirma que es situación no intencional. El participio 'open' funciona como adjetivo de estado. Esta diferencia entre estado accidental versus característica es fundamental en español."
      }
    ]
  },

  preterite_imperfect_distinction: {
    name: "Pretérito vs Imperfecto en Inglés",
    description: "Cómo expresar acciones completadas vs continuas",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "pret_imp_1",
        question: "I _____ to the store when it started raining.",
        translation: "Iba a la tienda cuando empezó a llover.",
        options: ["was going", "went", "go", "have gone"],
        correct: "was going",
        explanation: "El imperfecto español 'iba' se traduce con pasado continuo 'was going' en inglés. Describe una acción en progreso que fue interrumpida por la lluvia. El pretérito 'empezó' se traduce con pasado simple 'started'. Esta distinción entre acción en curso versus acción completada es fundamental. El pasado continuo en inglés captura la naturaleza progresiva del imperfecto español."
      },
      {
        id: "pret_imp_2",
        question: "She _____ the book in two days.",
        translation: "Ella leyó el libro en dos días.",
        options: ["read", "was reading", "reads", "has read"],
        correct: "read",
        explanation: "El pretérito español 'leyó' (acción completada en tiempo específico) se traduce con pasado simple 'read'. La frase 'in two days' marca la duración total y completitud. Si dijéramos 'was reading' implicaría proceso no completitud. El español distingue entre 'leía' (imperfecto/proceso) y 'leyó' (pretérito/completo). El inglés usa diferentes estructuras para esta distinción."
      },
      {
        id: "pret_imp_3",
        question: "When I was young, I _____ in the countryside.",
        translation: "Cuando era joven, vivía en el campo.",
        options: ["lived", "was living", "live", "have lived"],
        correct: "lived",
        explanation: "Para descripciones habituales del pasado, el inglés puede usar pasado simple 'lived' donde el español usa imperfecto 'vivía'. No es acción específica sino estado prolongado de la infancia. Ambas formas son aceptables en inglés (lived/was living) pero 'lived' es más común para períodos largos. Describe parte de la historia personal permanente de esa época."
      },
      {
        id: "pret_imp_4",
        question: "It _____ when we left the house this morning.",
        translation: "Estaba lloviendo cuando salimos de casa esta mañana.",
        options: ["was raining", "rained", "rains", "has rained"],
        correct: "was raining",
        explanation: "El imperfecto español 'estaba lloviendo' requiere pasado continuo 'was raining' en inglés. La lluvia era la condición de fondo cuando salimos (pretérito 'salimos' = 'left'). Esta estructura establece el escenario. El pasado continuo describe condiciones atmosféricas que estaban en curso, pintando el contexto de nuestras acciones."
      },
      {
        id: "pret_imp_5",
        question: "I _____ my ankle while playing soccer yesterday.",
        translation: "Me torcí el tobillo mientras jugaba fútbol ayer.",
        options: ["twisted", "was twisting", "twist", "have twisted"],
        correct: "twisted",
        explanation: "La lesión específica 'me torcí' (pretérito) se traduce con pasado simple 'twisted'. La acción de fondo 'jugaba' (imperfecto) es 'was playing' en gerundio. Esta combinación es típica: acción interrumpida (pasado continuo) más evento súbito (pasado simple). La estructura captura perfectamente el momento del accidente."
      },
      {
        id: "pret_imp_6",
        question: "He always _____ coffee for breakfast when he was younger.",
        translation: "Él siempre tomaba café en el desayuno cuando era más joven.",
        options: ["drank", "was drinking", "drinks", "has drunk"],
        correct: "drank",
        explanation: "Para hábitos del pasado, el inglés usa pasado simple 'drank' donde el español usa imperfecto 'tomaba'. La palabra 'always' indica rutina repetida. Podríamos decir 'used to drink' para enfatizar el hábito. El español imperfecto es perfecto para rutinas pasadas. Esta forma describe costumbres de otra época de la vida."
      },
      {
        id: "pret_imp_7",
        question: "They _____ TV when the power went out suddenly.",
        translation: "Estaban viendo TV cuando se fue la luz de repente.",
        options: ["were watching", "watched", "watch", "have watched"],
        correct: "were watching",
        explanation: "El imperfecto 'estaban viendo' se traduce con pasado continuo 'were watching'. El corte de luz (pretérito 'se fue' = 'went out') interrumpió la actividad continua. La palabra 'suddenly' enfatiza lo abrupto del evento. Esta estructura narrativa es muy común: establecer lo que estaba pasando antes de que algo inesperado ocurriera."
      },
      {
        id: "pret_imp_8",
        question: "We _____ three museums during our trip last summer.",
        translation: "Visitamos tres museos durante nuestro viaje el verano pasado.",
        options: ["visited", "were visiting", "visit", "have visited"],
        correct: "visited",
        explanation: "La acción específica completada 'visitamos' (pretérito) usa pasado simple 'visited'. El número específico (tres) y tiempo definido (last summer) requieren pretérito/pasado simple. Si dijéramos 'were visiting' sonaría incompleto. Esta forma es apropiada para enumerar logros turísticos concretos durante viajes."
      },
      {
        id: "pret_imp_9",
        question: "She _____ beautiful in her wedding dress.",
        translation: "Se veía hermosa en su vestido de novia.",
        options: ["looked", "was looking", "looks", "has looked"],
        correct: "looked",
        explanation: "Para describir apariencia en un momento específico pasado, usamos 'looked' (pasado simple). En español podríamos decir 'se veía' o 'estaba' hermosa. El contexto del vestido de novia marca un momento único e irrepetible. Esta forma captura la belleza de ese día especial preservado en memoria y fotografías."
      },
      {
        id: "pret_imp_10",
        question: "I _____ breakfast when you called me this morning.",
        translation: "Estaba desayunando cuando me llamaste esta mañana.",
        options: ["was having", "had", "have", "am having"],
        correct: "was having",
        explanation: "El imperfecto 'estaba desayunando' requiere pasado continuo 'was having'. El pretérito 'llamaste' es pasado simple 'called'. Esta combinación describe una actividad interrumpida por una llamada. Es situación muy común en la vida moderna donde las llamadas interrumpen rutinas matutinas."
      },
      {
        id: "pret_imp_11",
        question: "The children _____ in the garden all afternoon.",
        translation: "Los niños jugaron en el jardín toda la tarde.",
        options: ["played", "were playing", "play", "have played"],
        correct: "played",
        explanation: "Aunque 'all afternoon' indica duración, el pasado simple 'played' es correcto para una actividad vista como bloque completo de tiempo. En español podríamos usar pretérito 'jugaron' o imperfecto 'jugaban'. El inglés acepta ambas (played/were playing) con matices sutiles. Aquí tratamos la tarde como unidad completa de juego."
      },
      {
        id: "pret_imp_12",
        question: "He _____ his keys and couldn't enter his apartment.",
        translation: "Perdió sus llaves y no pudo entrar a su apartamento.",
        options: ["lost", "was losing", "loses", "has lost"],
        correct: "lost",
        explanation: "El pretérito 'perdió' (evento específico) es pasado simple 'lost' en inglés. La consecuencia 'no pudo' también es pasado simple 'couldn't'. Ambos son eventos completos en secuencia. Esta situación frustrante requiere narración clara de causa y efecto. El pasado simple funciona perfectamente para esta cadena de eventos desafortunados."
      },
      {
        id: "pret_imp_13",
        question: "It _____ cold, so I wore a jacket.",
        translation: "Hacía frío, así que me puse una chaqueta.",
        options: ["was", "was being", "is", "has been"],
        correct: "was",
        explanation: "El imperfecto 'hacía' (condición de fondo) se traduce con pasado simple 'was' para clima. No necesitamos continuo aquí. El pretérito 'me puse' es 'wore'. La palabra 'so' conecta la condición con la acción lógica. Esta estructura muestra cómo respondemos sensatamente a condiciones climáticas."
      },
      {
        id: "pret_imp_14",
        question: "She _____ every day until she got too busy.",
        translation: "Ella corría todos los días hasta que estuvo muy ocupada.",
        options: ["ran", "was running", "runs", "has run"],
        correct: "ran",
        explanation: "El imperfecto de hábito 'corría' puede traducirse con pasado simple 'ran' en inglés cuando hay indicadores de repetición como 'every day'. También podríamos usar 'used to run' para enfatizar el hábito. El pretérito 'estuvo' es 'got'. Esta forma describe rutinas saludables que las circunstancias de vida cambian."
      },
      {
        id: "pret_imp_15",
        question: "We _____ dinner when the guests arrived unexpectedly.",
        translation: "Estábamos cenando cuando los invitados llegaron inesperadamente.",
        options: ["were having", "had", "have", "are having"],
        correct: "were having",
        explanation: "El imperfecto 'estábamos cenando' es pasado continuo 'were having' en inglés. El pretérito 'llegaron' es pasado simple 'arrived'. El adverbio 'unexpectedly' añade sorpresa. Esta estructura narrativa combina actividad en curso con interrupción inesperada. Es perfecta para contar anécdotas sobre situaciones sorpresivas."
      }
    ]
  }
};

export default part6Categories;