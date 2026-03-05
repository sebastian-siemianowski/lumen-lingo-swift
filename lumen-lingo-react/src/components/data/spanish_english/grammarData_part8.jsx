/**
 * SPANISH → ENGLISH GRAMMAR - PART 8
 * 4 categories, 15 questions each
 */

import { Bookmark, Layers, Calendar, MessageCircle } from "lucide-react";

export const part8Categories = {
  phrasal_verbs_common: {
    name: "Verbos Frasales Comunes",
    description: "Get up, look for, take off - combinaciones esenciales",
    icon: Bookmark,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "phrasal_1",
        question: "I need to _____ _____ early tomorrow for work.",
        translation: "Necesito levantarme temprano mañana para el trabajo.",
        options: ["get up", "get on", "get off", "get in"],
        correct: "get up",
        explanation: "El verbo frasal 'get up' significa levantarse de la cama. En español usamos un solo verbo 'levantarse', pero el inglés combina 'get' con 'up'. Esta es una de las primeras frases que aprendemos porque es acción diaria universal. La partícula 'up' añade la idea de movimiento hacia arriba desde la posición de dormir."
      },
      {
        id: "phrasal_2",
        question: "Can you _____ _____ my cat while I'm on vacation?",
        translation: "¿Puedes cuidar a mi gato mientras estoy de vacaciones?",
        options: ["look after", "look for", "look at", "look up"],
        correct: "look after",
        explanation: "El verbo frasal 'look after' significa cuidar o encargarse de alguien o algo. Es diferente de 'look for' (buscar) o 'look at' (mirar). En español 'cuidar' es un solo verbo, pero el inglés usa esta combinación. La partícula 'after' sugiere seguimiento continuo y atención, capturando la idea de responsabilidad temporal."
      },
      {
        id: "phrasal_3",
        question: "Please _____ _____ your shoes before entering the house.",
        translation: "Por favor quítate los zapatos antes de entrar a la casa.",
        options: ["take off", "put on", "take in", "put off"],
        correct: "take off",
        explanation: "El verbo frasal 'take off' significa quitarse ropa o zapatos. Lo opuesto es 'put on' (ponerse). En español usamos verbos reflexivos 'quitarse/ponerse', el inglés usa estas combinaciones de verbo más partícula. Esta es regla de cortesía en muchos hogares para mantener el piso limpio."
      },
      {
        id: "phrasal_4",
        question: "I'm _____ _____ my keys - have you seen them?",
        translation: "Estoy buscando mis llaves - ¿las has visto?",
        options: ["looking for", "looking at", "looking after", "looking up"],
        correct: "looking for",
        explanation: "El verbo frasal 'look for' significa buscar algo que está perdido o que necesitas encontrar. La forma continua 'looking for' enfatiza que la búsqueda está en proceso ahora mismo. En español 'buscando' es un solo verbo, pero captura la misma idea de búsqueda activa en este momento."
      },
      {
        id: "phrasal_5",
        question: "The plane will _____ _____ in 30 minutes.",
        translation: "El avión despegará en 30 minutos.",
        options: ["take off", "take on", "take in", "take up"],
        correct: "take off",
        explanation: "El mismo verbo frasal 'take off' tiene otro significado: despegar (para aviones). El contexto siempre aclara si hablamos de quitarse ropa o de aviones. En español también 'despegar' es específico para aviación. Los verbos frasales ingleses son versátiles y un mismo verbo puede tener múltiples significados según el contexto."
      },
      {
        id: "phrasal_6",
        question: "We _____ _____ of milk - I'll go buy some.",
        translation: "Se nos acabó la leche - iré a comprar.",
        options: ["ran out", "ran into", "ran over", "ran away"],
        correct: "ran out",
        explanation: "El verbo frasal 'run out of' significa quedarse sin algo, agotarse. Usamos pasado 'ran out' para indicar que ya no queda. En español 'se acabó' o 'se nos acabó' capta esta idea de depleción completa. Esta frase es muy común en situaciones domésticas cuando descubrimos que un producto se terminó."
      },
      {
        id: "phrasal_7",
        question: "Can you _____ _____ the volume? It's too loud.",
        translation: "¿Puedes bajar el volumen? Está muy alto.",
        options: ["turn down", "turn up", "turn on", "turn off"],
        correct: "turn down",
        explanation: "El verbo frasal 'turn down' significa bajar o reducir (volumen, temperatura, intensidad). Lo opuesto es 'turn up' (subir). En español usamos 'bajar', que es directo. El inglés usa 'turn' (girar) con 'down' porque históricamente girábamos perillas hacia abajo para reducir. Esta combinación ahora se usa incluso con controles digitales."
      },
      {
        id: "phrasal_8",
        question: "I need to _____ _____ this word in the dictionary.",
        translation: "Necesito buscar esta palabra en el diccionario.",
        options: ["look up", "look for", "look at", "look after"],
        correct: "look up",
        explanation: "El verbo frasal 'look up' significa buscar información en un libro, diccionario o internet. Es diferente de 'look for' que es buscar objetos físicos perdidos. En español 'buscar' sirve para ambos contextos. La partícula 'up' sugiere búsqueda de información que está 'arriba' en un libro de referencia."
      },
      {
        id: "phrasal_9",
        question: "She _____ _____ with her boyfriend last week.",
        translation: "Ella terminó con su novio la semana pasada.",
        options: ["broke up", "made up", "gave up", "put up"],
        correct: "broke up",
        explanation: "El verbo frasal 'break up' significa terminar una relación romántica. Es frase muy común en contextos personales. El pasado 'broke up' indica que la separación ya ocurrió. En español 'terminar con' o 'romper con' son equivalentes. La palabra 'break' (romper) metafóricamente describe el fin del vínculo emocional."
      },
      {
        id: "phrasal_10",
        question: "Please _____ _____ this form and return it tomorrow.",
        translation: "Por favor completa este formulario y devuélvelo mañana.",
        options: ["fill out", "fill in", "fill up", "take out"],
        correct: "fill out",
        explanation: "El verbo frasal 'fill out' (o 'fill in') significa completar un formulario escribiendo información. Ambas formas son correctas y comunes. En español 'llenar' o 'completar' son directos. Esta frase es esencial en contextos administrativos donde constantemente llenamos documentos, solicitudes y formularios diversos."
      },
      {
        id: "phrasal_11",
        question: "I _____ _____ an old friend at the mall yesterday.",
        translation: "Me encontré con un viejo amigo en el centro comercial ayer.",
        options: ["ran into", "ran out", "ran over", "ran away"],
        correct: "ran into",
        explanation: "El verbo frasal 'run into' significa encontrarse con alguien por casualidad, sin planearlo. Es encuentro inesperado. En español 'encontrarse con' o 'toparse con' capturan esta casualidad. La imagen de 'correr hacia' (run into) sugiere el elemento sorpresivo de estos encuentros no planificados que alegran el día."
      },
      {
        id: "phrasal_12",
        question: "Don't _____ _____ on your dreams!",
        translation: "¡No renuncies a tus sueños!",
        options: ["give up", "give in", "give away", "give out"],
        correct: "give up",
        explanation: "El verbo frasal 'give up' significa rendirse, abandonar un esfuerzo o meta. El imperativo negativo 'don't give up' es frase motivacional muy común. En español 'rendirse' o 'darse por vencido' expresan lo mismo. Esta combinación es poderosa porque habla de perseverancia, de no ceder ante las dificultades que todos enfrentamos."
      },
      {
        id: "phrasal_13",
        question: "Let me _____ _____ the situation before I decide.",
        translation: "Déjame pensar en la situación antes de decidir.",
        options: ["think about", "think of", "think over", "think up"],
        correct: "think over",
        explanation: "El verbo frasal 'think over' significa considerar algo cuidadosamente antes de decidir. Es más deliberado que solo 'think about'. En español 'pensar bien' o 'reflexionar sobre' capturan esta contemplación profunda. La partícula 'over' sugiere dar vueltas mentales a una idea, examinándola desde todos los ángulos antes de comprometerse."
      },
      {
        id: "phrasal_14",
        question: "She _____ _____ smoking last year for health reasons.",
        translation: "Ella dejó de fumar el año pasado por razones de salud.",
        options: ["gave up", "gave in", "gave away", "gave out"],
        correct: "gave up",
        explanation: "Aquí 'give up' significa dejar un hábito, especialmente uno difícil de romper. El contexto de salud es muy común con este verbo frasal. En español 'dejar de' más infinitivo es la construcción equivalente. Esta estructura es útil para hablar sobre cambios de vida importantes y decisiones saludables que requieren fuerza de voluntad."
      },
      {
        id: "phrasal_15",
        question: "I can't _____ _____ his behavior anymore!",
        translation: "¡Ya no puedo tolerar su comportamiento!",
        options: ["put up with", "put off", "put on", "put away"],
        correct: "put up with",
        explanation: "El verbo frasal 'put up with' significa tolerar o aguantar algo molesto. Es frase de tres palabras (verbo + dos partículas). La forma negativa con 'can't' expresa el límite de paciencia alcanzado. En español 'tolerar' o 'aguantar' son directos. Esta expresión comunica frustración acumulada con situaciones o personas que han probado nuestra paciencia."
      }
    ]
  },

  articles_usage: {
    name: "Uso de Artículos",
    description: "A/an, the - cuando usar y omitir artículos",
    icon: Layers,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "art_1",
        question: "She is _____ excellent teacher at our school.",
        translation: "Ella es una excelente profesora en nuestra escuela.",
        options: ["an", "a", "the", "-"],
        correct: "an",
        explanation: "Usamos 'an' (no 'a') antes de palabras que empiezan con sonido vocálico. 'Excellent' comienza con sonido de 'e', entonces requiere 'an'. En español usamos 'una' sin esta distinción. Esta regla fonética del inglés ayuda a la fluidez al hablar, evitando el choque entre dos sonidos vocálicos consecutivos que sería difícil de pronunciar."
      },
      {
        id: "art_2",
        question: "I have _____ dog and _____ cat at home.",
        translation: "Tengo un perro y un gato en casa.",
        options: ["a / a", "a / an", "the / the", "- / -"],
        correct: "a / a",
        explanation: "Con sustantivos contables en singular mencionados por primera vez usamos 'a' o 'an'. Aquí 'dog' y 'cat' son nuevos en la conversación, entonces 'a dog' y 'a cat'. En español también usamos 'un' para introducir elementos nuevos. Este artículo indefinido señala que no son perros o gatos específicos sino mascotas en general."
      },
      {
        id: "art_3",
        question: "_____ sun rises in the east every morning.",
        translation: "El sol sale por el este cada mañana.",
        options: ["The", "A", "An", "-"],
        correct: "The",
        explanation: "Para cosas únicas en el mundo (sol, luna, tierra) SIEMPRE usamos artículo definido 'the'. Solo hay un sol, por eso es 'the sun' nunca 'a sun'. En español también decimos 'el sol' con artículo definido. Esta regla aplica a todos los objetos celestiales y geográficos únicos que todos conocemos."
      },
      {
        id: "art_4",
        question: "I love _____ music, especially classical and jazz.",
        translation: "Amo la música, especialmente la clásica y el jazz.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Para conceptos abstractos o cosas en general NO usamos artículo en inglés. Decimos simplemente 'love music' sin 'the'. Esta es diferencia importante del español donde sí decimos 'amo la música'. El inglés omite artículos con conceptos generales cuando hablamos de categorías completas, no ejemplos específicos."
      },
      {
        id: "art_5",
        question: "She went to _____ hospital after the accident.",
        translation: "Ella fue al hospital después del accidente.",
        options: ["the", "a", "an", "-"],
        correct: "the",
        explanation: "Con lugares específicos conocidos en el contexto local usamos 'the'. Aquí 'the hospital' se refiere al hospital de la zona. En español también usamos artículo definido 'al hospital'. Aunque hay muchos hospitales en el mundo, en conversación local 'the hospital' se entiende como el más cercano o relevante."
      },
      {
        id: "art_6",
        question: "My sister is _____ doctor in New York.",
        translation: "Mi hermana es doctora en Nueva York.",
        options: ["a", "an", "the", "-"],
        correct: "a",
        explanation: "Para profesiones usamos artículo indefinido 'a' o 'an' en inglés. Decimos 'is a doctor' porque hay muchos doctores, ella es uno de ellos. En español NO usamos artículo: 'es doctora' directamente. Esta es diferencia estructural importante entre ambos idiomas al hablar de ocupaciones y roles profesionales."
      },
      {
        id: "art_7",
        question: "I play _____ piano and my brother plays _____ guitar.",
        translation: "Yo toco el piano y mi hermano toca la guitarra.",
        options: ["the / the", "- / -", "a / a", "the / a"],
        correct: "the / the",
        explanation: "Con instrumentos musicales SIEMPRE usamos 'the' en inglés: 'play the piano, play the guitar'. Esta es regla fija sin excepciones. En español también usamos artículo definido 'el piano, la guitarra'. Es una de las pocas áreas donde ambos idiomas coinciden perfectamente en el uso de artículos definidos."
      },
      {
        id: "art_8",
        question: "_____ life is beautiful but sometimes challenging.",
        translation: "La vida es hermosa pero a veces desafiante.",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Para conceptos filosóficos o abstractos en general, el inglés omite el artículo. Decimos solo 'life' sin 'the'. El español siempre usa 'la vida' con artículo. Esta diferencia refleja distintos enfoques lingüísticos: el inglés trata conceptos amplios sin artículo, mientras el español los define incluso cuando son abstractos."
      },
      {
        id: "art_9",
        question: "I need _____ new computer for my studies.",
        translation: "Necesito una computadora nueva para mis estudios.",
        options: ["a", "an", "the", "-"],
        correct: "a",
        explanation: "Con sustantivos contables que mencionamos por primera vez usamos 'a'. Aquí la computadora no es específica, cualquier computadora nueva sirve. En español también 'una computadora' es indefinido. El artículo 'a' señala que es un elemento de una categoría, no un objeto particular que ya conocemos."
      },
      {
        id: "art_10",
        question: "_____ dogs are very loyal animals by nature.",
        translation: "Los perros son animales muy leales por naturaleza.",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Para hablar de categorías completas en plural, el inglés NO usa artículo. Decimos solo 'dogs' sin 'the' cuando hablamos de perros en general. El español requiere 'los perros' con artículo. Esta es diferencia sistemática: el inglés omite artículos en generalizaciones plurales que el español siempre incluye."
      },
      {
        id: "art_11",
        question: "She goes to _____ church every Sunday morning.",
        translation: "Ella va a la iglesia cada domingo en la mañana.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Con ciertos lugares cuando hablamos de su función/propósito (no el edificio físico), omitimos artículo: 'go to church' (ir a rezar), 'go to school' (ir a estudiar), 'go to bed' (ir a dormir). Si hablamos del edificio específico usaríamos 'the church'. Esta distinción entre función y lugar físico es sutil pero importante."
      },
      {
        id: "art_12",
        question: "_____ English language is spoken worldwide today.",
        translation: "El idioma inglés se habla en todo el mundo hoy.",
        options: ["The", "A", "An", "-"],
        correct: "The",
        explanation: "Con idiomas específicos usamos 'the' cuando decimos 'the English language' (el idioma inglés). Pero si solo decimos 'English' como en 'I speak English', no lleva artículo. En español 'el inglés' siempre lleva artículo. Esta diferencia depende de si mencionamos la palabra 'language' o no en la frase."
      },
      {
        id: "art_13",
        question: "I had _____ amazing experience in Europe last summer.",
        translation: "Tuve una experiencia increíble en Europa el verano pasado.",
        options: ["an", "a", "the", "-"],
        correct: "an",
        explanation: "Usamos 'an' antes de 'amazing' porque empieza con sonido vocálico (a-). Aunque 'experience' es sustantivo abstracto, aquí es contable (una experiencia específica). En español 'una experiencia' también es indefinido. El artículo indefinido señala que fue una de muchas posibles experiencias, pero esta fue especial."
      },
      {
        id: "art_14",
        question: "He is _____ only person who can help us now.",
        translation: "Él es la única persona que puede ayudarnos ahora.",
        options: ["the", "a", "an", "-"],
        correct: "the",
        explanation: "Con palabras como 'only, same, first, last, best' SIEMPRE usamos 'the' porque especifican unicidad. Aquí 'the only person' enfatiza que es el único. En español también 'la única persona' usa artículo definido. Estas palabras que indican singularidad o superlatividad automáticamente requieren artículo definido."
      },
      {
        id: "art_15",
        question: "I usually eat _____ breakfast at 7 AM daily.",
        translation: "Usualmente desayuno a las 7 AM diariamente.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Con comidas en general (breakfast, lunch, dinner) NO usamos artículo en inglés. Decimos 'eat breakfast' sin 'the'. En español podemos decir 'desayunar' (verbo) o 'tomar el desayuno' (con artículo). El inglés trata las comidas como conceptos sin artículo cuando hablamos de la acción de comer, no del plato específico servido."
      }
    ]
  },

  tag_questions: {
    name: "Preguntas de Confirmación",
    description: "Isn't it? Don't you? - solicitar confirmación",
    icon: MessageCircle,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "tag_1",
        question: "You like coffee, _____ _____?",
        translation: "Te gusta el café, ¿verdad?",
        options: ["don't you", "do you", "aren't you", "are you"],
        correct: "don't you",
        explanation: "Las 'tag questions' confirman información. Si la oración es positiva ('you like'), el tag es negativo ('don't you'). Es como añadir '¿verdad?' o '¿no?' en español. Esta estructura invierte la polaridad: positivo se vuelve negativo y viceversa. Estas preguntas cortas al final muestran que esperamos acuerdo pero permitimos corrección educadamente."
      },
      {
        id: "tag_2",
        question: "She isn't coming to the party, _____ _____?",
        translation: "Ella no viene a la fiesta, ¿verdad?",
        options: ["is she", "isn't she", "does she", "doesn't she"],
        correct: "is she",
        explanation: "Cuando la oración es negativa ('isn't coming'), el tag es positivo ('is she'). Esta inversión es regla fundamental de las tag questions. Usamos 'is' porque el verbo principal es 'is coming' (presente continuo). El español '¿verdad?' funciona igual para positivo y negativo, pero el inglés requiere esta inversión específica."
      },
      {
        id: "tag_3",
        question: "They have finished their homework, _____ _____?",
        translation: "Ellos han terminado su tarea, ¿no?",
        options: ["haven't they", "have they", "don't they", "do they"],
        correct: "haven't they",
        explanation: "Con presente perfecto ('have finished') el tag usa el mismo auxiliar 'have'. La oración es positiva, entonces el tag es negativo 'haven't they'. El sujeto se invierte a pronombre. En español podemos decir '¿no?' o '¿verdad?' para ambos casos. El inglés es más preciso requiriendo el auxiliar exacto del verbo principal."
      },
      {
        id: "tag_4",
        question: "You can speak Spanish, _____ _____?",
        translation: "Puedes hablar español, ¿cierto?",
        options: ["can't you", "can you", "don't you", "do you"],
        correct: "can't you",
        explanation: "Con verbos modales como 'can' el tag usa el mismo modal. Positivo 'can' se vuelve negativo 'can't' en el tag. El pronombre se mantiene: 'you'. Esta estructura verifica habilidades o capacidades de manera cortés. En español '¿cierto?' o '¿verdad?' son neutrales, pero el inglés mantiene el modal específico."
      },
      {
        id: "tag_5",
        question: "It's a beautiful day, _____ _____?",
        translation: "Es un día hermoso, ¿no es así?",
        options: ["isn't it", "is it", "doesn't it", "does it"],
        correct: "isn't it",
        explanation: "Con 'it is' (contracción 'it's') el tag es 'isn't it'. Esta pregunta sobre el clima es muy común en conversaciones casuales. El sujeto 'it' se repite en el tag. En español '¿no?' o '¿verdad?' funcionan universalmente. Esta estructura es típica manera británica de iniciar conversaciones comentando sobre el tiempo."
      },
      {
        id: "tag_6",
        question: "We should leave now, _____ _____?",
        translation: "Deberíamos irnos ahora, ¿no crees?",
        options: ["shouldn't we", "should we", "don't we", "do we"],
        correct: "shouldn't we",
        explanation: "Con 'should' (verbo modal) el tag usa el mismo modal en negativo: 'shouldn't we'. Esta pregunta busca consenso sobre una decisión. El 'we' inclusivo sugiere decisión grupal. En español '¿no crees?' o '¿no te parece?' buscan acuerdo similar. Estas preguntas suavizan sugerencias haciéndolas colaborativas no impositivas."
      },
      {
        id: "tag_7",
        question: "He doesn't work here anymore, _____ _____?",
        translation: "Él ya no trabaja aquí, ¿verdad?",
        options: ["does he", "doesn't he", "is he", "isn't he"],
        correct: "does he",
        explanation: "La oración negativa 'doesn't work' requiere tag positivo 'does he'. Con presente simple usamos auxiliar 'do/does'. El adverbio 'anymore' indica cambio de situación. Esta estructura confirma información sobre cambios laborales. El español '¿verdad?' es simple, pero el inglés mantiene el auxiliar negativo convertido en positivo."
      },
      {
        id: "tag_8",
        question: "You haven't seen my keys, _____ _____?",
        translation: "No has visto mis llaves, ¿verdad?",
        options: ["have you", "haven't you", "did you", "didn't you"],
        correct: "have you",
        explanation: "Negativo 'haven't seen' (presente perfecto) se vuelve positivo 'have you' en el tag. Esta pregunta espera respuesta negativa (no, no las he visto). Es forma educada de pedir ayuda buscando objetos perdidos. El presente perfecto conecta el pasado reciente con el presente, perfecto para preguntar sobre algo que acabas de perder."
      },
      {
        id: "tag_9",
        question: "She will be there on time, _____ _____?",
        translation: "Ella llegará a tiempo, ¿no?",
        options: ["won't she", "will she", "isn't she", "is she"],
        correct: "won't she",
        explanation: "Con futuro 'will be' el tag usa el mismo auxiliar: positivo 'will' se vuelve negativo 'won't' (will not). Esta pregunta verifica puntualidad futura. El pronombre 'she' se mantiene. En español '¿no?' es neutral para todos los tiempos. Esta estructura muestra que esperamos confirmación pero dejamos espacio para corrección."
      },
      {
        id: "tag_10",
        question: "They were at the meeting yesterday, _____ _____?",
        translation: "Ellos estuvieron en la reunión ayer, ¿cierto?",
        options: ["weren't they", "were they", "didn't they", "did they"],
        correct: "weren't they",
        explanation: "Con pasado de 'be' ('were') el tag usa el mismo verbo: positivo 'were' se vuelve negativo 'weren't'. Esta confirma asistencia a evento pasado. El pronombre plural 'they' se repite. Esta estructura verifica presencia en eventos pasados cuando no estuvimos ahí o no recordamos bien quién asistió."
      },
      {
        id: "tag_11",
        question: "You would help me if I asked, _____ _____?",
        translation: "Me ayudarías si te lo pidiera, ¿verdad?",
        options: ["wouldn't you", "would you", "won't you", "will you"],
        correct: "wouldn't you",
        explanation: "Con condicional 'would help' el tag es 'wouldn't you'. Esta pregunta verifica disposición hipotética a ayudar. Es forma gentil de tantear apoyo potencial antes de pedir formalmente. El condicional en el tag mantiene el tono hipotético, no presiona sino que explora posibilidades de manera cortés."
      },
      {
        id: "tag_12",
        question: "Let's go to the movies tonight, _____ _____?",
        translation: "Vamos al cine esta noche, ¿sí?",
        options: ["shall we", "will we", "do we", "are we"],
        correct: "shall we",
        explanation: "Después de 'Let's' (sugerencia inclusiva) el tag SIEMPRE es 'shall we'. Esta es excepción a las reglas normales. Es forma muy británica pero usada globalmente. En español '¿sí?' o '¿te parece?' buscan acuerdo similar. Esta estructura convierte sugerencia en invitación colaborativa donde ambas partes deciden juntas."
      },
      {
        id: "tag_13",
        question: "I am right about this, _____ _____?",
        translation: "Tengo razón sobre esto, ¿no?",
        options: ["aren't I", "am I not", "isn't I", "am I"],
        correct: "aren't I",
        explanation: "Con 'I am' el tag es irregular: usamos 'aren't I' (no 'am not I' que sería gramaticalmente lógico). Esta es excepción histórica del inglés que se mantiene por uso. En formal británico a veces usan 'am I not' pero 'aren't I' es estándar universal. Esta irregularidad hay que memorizarla como caso especial."
      },
      {
        id: "tag_14",
        question: "Nobody called while I was out, _____ _____?",
        translation: "Nadie llamó mientras estuve fuera, ¿verdad?",
        options: ["did they", "didn't they", "did nobody", "didn't nobody"],
        correct: "did they",
        explanation: "Palabras negativas como 'nobody, nothing, never' hacen la oración negativa, entonces el tag es POSITIVO. Curiosamente, 'nobody' se convierte en 'they' en el tag (plural). Esta construcción es compleja pero lógica: la negación en la oración principal requiere afirmación en el tag para balance."
      },
      {
        id: "tag_15",
        question: "There's a problem with the computer, _____ _____?",
        translation: "Hay un problema con la computadora, ¿no?",
        options: ["isn't there", "is there", "doesn't there", "does there"],
        correct: "isn't there",
        explanation: "Con construcciones 'there is/are' el tag usa 'there' también: 'isn't there'. La contracción 'there's' es positiva, entonces tag negativo. Esta estructura se usa frecuentemente para confirmar existencia de problemas o situaciones. Es forma cortés de señalar algo que requiere atención sin sonar acusatorio."
      }
    ]
  },

  reported_speech: {
    name: "Discurso Indirecto",
    description: "He said that..., She told me... - reportar palabras",
    icon: Calendar,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "rep_sp_1",
        question: "She said, 'I am tired' → She said _____ _____ tired.",
        translation: "Ella dijo: 'Estoy cansada' → Ella dijo que estaba cansada.",
        options: ["she was", "she is", "I am", "I was"],
        correct: "she was",
        explanation: "Al convertir discurso directo a indirecto, cambiamos el pronombre ('I' se vuelve 'she') y el tiempo verbal ('am' se vuelve 'was'). Esto se llama 'backshifting' o retroceso temporal. En español también cambiamos: 'estoy' se vuelve 'estaba'. Esta transformación refleja que estamos reportando palabras dichas en momento pasado, no en el presente."
      },
      {
        id: "rep_sp_2",
        question: "He said, 'I will call you tomorrow' → He said _____ _____ call me.",
        translation: "Él dijo: 'Te llamaré mañana' → Él dijo que me llamaría.",
        options: ["he would", "he will", "I will", "I would"],
        correct: "he would",
        explanation: "En discurso indirecto 'will' se convierte en 'would' (retroceso temporal). El pronombre 'you' se vuelve 'me' según la perspectiva. En español el futuro 'llamaré' se vuelve condicional 'llamaría'. Esta transformación mantiene la relación temporal correcta entre el momento de hablar y el momento reportado."
      },
      {
        id: "rep_sp_3",
        question: "'Where do you live?' → She asked me where _____ _____.",
        translation: "'¿Dónde vives?' → Ella me preguntó dónde vivía.",
        options: ["I lived", "do I live", "I live", "did I live"],
        correct: "I lived",
        explanation: "En preguntas indirectas el orden se vuelve afirmativo (no invertido) y el tiempo retrocede. 'Do you live' (presente simple) se vuelve 'I lived' (pasado simple). En español también: '¿dónde vives?' se vuelve 'dónde vivía'. Este cambio de orden (de pregunta a declaración subordinada) es crucial para reportar preguntas correctamente."
      },
      {
        id: "rep_sp_4",
        question: "'Don't be late' → She told me _____ _____ late.",
        translation: "'No llegues tarde' → Ella me dijo que no llegara tarde.",
        options: ["not to be", "to not be", "don't be", "not be"],
        correct: "not to be",
        explanation: "Para reportar imperativos usamos 'told + objeto + (not) to + verbo'. El imperativo negativo 'don't be' se convierte en 'not to be'. En español el subjuntivo 'no llegara' o infinitivo 'no llegar' reportan órdenes. Esta estructura transforma comandos directos en instrucciones reportadas de manera suave y formal."
      },
      {
        id: "rep_sp_5",
        question: "'I have been waiting' → He said _____ _____ _____ waiting.",
        translation: "'He estado esperando' → Él dijo que había estado esperando.",
        options: ["he had been", "he has been", "I have been", "I had been"],
        correct: "he had been",
        explanation: "El presente perfecto continuo 'have been waiting' retrocede a pasado perfecto continuo 'had been waiting'. El pronombre cambia de 'I' a 'he'. En español 'he estado' se vuelve 'había estado'. Este doble retroceso (en tiempo y aspecto continuo) puede parecer complejo pero sigue el patrón consistente de retroceder un nivel temporal."
      },
      {
        id: "rep_sp_6",
        question: "'Can you help me?' → She asked _____ _____ help her.",
        translation: "'¿Puedes ayudarme?' → Ella preguntó si podía ayudarla.",
        options: ["if I could", "can I", "if I can", "could I"],
        correct: "if I could",
        explanation: "Las preguntas de 'yes/no' en discurso indirecto usan 'if' o 'whether'. El modal 'can' retrocede a 'could'. El orden se vuelve afirmativo. En español 'si podía' también usa 'si' para introducir la pregunta reportada. Esta estructura convierte preguntas directas en subordinadas suaves y formales."
      },
      {
        id: "rep_sp_7",
        question: "'I'm working late tonight' → He told me _____ _____ working late.",
        translation: "'Trabajo hasta tarde esta noche' → Él me dijo que trabajaba hasta tarde.",
        options: ["he was", "he is", "I am", "I was"],
        correct: "he was",
        explanation: "El presente continuo 'I'm working' (am working) retrocede a pasado continuo 'was working'. El pronombre cambia de 'I' a 'he'. La referencia temporal 'tonight' generalmente se omite o cambia a 'that night' en indirecto. El español 'trabajo' puede volverse 'trabajaba' (imperfecto) en estilo indirecto."
      },
      {
        id: "rep_sp_8",
        question: "'I didn't see the movie' → She said _____ _____ _____ the movie.",
        translation: "'No vi la película' → Ella dijo que no había visto la película.",
        options: ["she hadn't seen", "she didn't see", "I didn't see", "I hadn't seen"],
        correct: "she hadn't seen",
        explanation: "El pasado simple 'didn't see' retrocede a pasado perfecto 'hadn't seen' en discurso indirecto formal. El pronombre cambia de 'I' a 'she'. En español 'no vi' puede volverse 'no había visto'. Este retroceso adicional al pasado perfecto enfatiza que la acción de no ver ocurrió antes del momento de reportar."
      },
      {
        id: "rep_sp_9",
        question: "'We are moving next week' → They said _____ _____ moving.",
        translation: "'Nos mudamos la próxima semana' → Dijeron que se mudaban.",
        options: ["they were", "they are", "we are", "we were"],
        correct: "they were",
        explanation: "Presente continuo 'are moving' retrocede a pasado continuo 'were moving'. El pronombre cambia de 'we' a 'they' cuando reportamos sobre otros. La referencia temporal 'next week' a menudo se omite o cambia. En español 'nos mudamos' puede volverse 'se mudaban' o 'se iban a mudar' dependiendo del estilo."
      },
      {
        id: "rep_sp_10",
        question: "'I must finish this today' → She said _____ _____ _____ finish it.",
        translation: "'Debo terminar esto hoy' → Ella dijo que debía terminarlo.",
        options: ["she had to", "she must", "I must", "I had to"],
        correct: "she had to",
        explanation: "El modal 'must' tiene dos opciones en indirecto: puede quedarse 'must' o cambiar a 'had to'. Generalmente preferimos 'had to' para claridad temporal. El pronombre cambia de 'I' a 'she'. En español 'debo' se vuelve 'debía' o 'tenía que'. El uso de 'had to' hace explícita la obligación pasada."
      },
      {
        id: "rep_sp_11",
        question: "'Where have you been?' → He asked me where _____ _____.",
        translation: "'¿Dónde has estado?' → Él me preguntó dónde había estado.",
        options: ["I had been", "have I been", "I have been", "had I been"],
        correct: "I had been",
        explanation: "Pregunta en presente perfecto 'have you been' retrocede a pasado perfecto 'I had been'. El orden se vuelve afirmativo (no interrogativo). En español '¿dónde has estado?' se vuelve 'dónde había estado'. Esta transformación combina el cambio de orden más el retroceso temporal, dos ajustes simultáneos necesarios."
      },
      {
        id: "rep_sp_12",
        question: "'Please wait here' → He asked me _____ _____ there.",
        translation: "'Por favor espera aquí' → Él me pidió que esperara ahí.",
        options: ["to wait", "wait", "waiting", "waited"],
        correct: "to wait",
        explanation: "Para reportar peticiones o imperativos educados usamos 'asked + objeto + to + verbo'. El verbo 'wait' se vuelve infinitivo 'to wait'. El lugar 'here' cambia a 'there' por cambio de perspectiva. En español también cambiamos de imperativo 'espera' a subjuntivo 'esperara' en estilo formal indirecto."
      },
      {
        id: "rep_sp_13",
        question: "'I may be late' → She said _____ _____ be late.",
        translation: "'Puede que llegue tarde' → Ella dijo que podría llegar tarde.",
        options: ["she might", "she may", "I may", "I might"],
        correct: "she might",
        explanation: "El modal 'may' generalmente retrocede a 'might' en discurso indirecto. Ambos expresan posibilidad pero 'might' es menos probable. El pronombre cambia de 'I' a 'she'. En español 'puede que llegue' se vuelve 'podría llegar'. Esta transformación mantiene la incertidumbre original pero con marco temporal pasado."
      },
      {
        id: "rep_sp_14",
        question: "'We won the game!' → They shouted _____ _____ _____ the game.",
        translation: "'¡Ganamos el juego!' → Gritaron que habían ganado el juego.",
        options: ["they had won", "they won", "we won", "we had won"],
        correct: "they had won",
        explanation: "Pasado simple 'won' puede retroceder a pasado perfecto 'had won' en estilo formal. El pronombre cambia de 'we' a 'they'. El verbo 'shouted' (gritaron) sustituye 'said' añadiendo emoción. En español 'ganamos' se vuelve 'habían ganado'. El retroceso adicional al pasado perfecto enfatiza que la victoria precedió al reporte."
      },
      {
        id: "rep_sp_15",
        question: "'I'll never forget this' → He promised _____ _____ never forget it.",
        translation: "'Nunca olvidaré esto' → Él prometió que nunca lo olvidaría.",
        options: ["he would", "he will", "I will", "I would"],
        correct: "he would",
        explanation: "El futuro 'will forget' retrocede a condicional 'would forget'. El pronombre cambia de 'I' a 'he'. El adverbio 'never' se mantiene. El verbo 'promised' (prometió) es más específico que 'said'. En español 'olvidaré' se vuelve 'olvidaría'. Esta estructura captura promesas emocionales hechas en el pasado con su carga emotiva."
      }
    ]
  },

  time_clauses_when_while: {
    name: "Cláusulas Temporales",
    description: "When, while, as soon as - secuencias de tiempo",
    icon: Calendar,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "time_cl_1",
        question: "I was sleeping _____ the phone rang loudly.",
        translation: "Estaba durmiendo cuando sonó el teléfono fuertemente.",
        options: ["when", "while", "during", "as"],
        correct: "when",
        explanation: "Usamos 'when' para unir una acción continua (was sleeping) con un evento súbito que la interrumpe (rang). El 'when' introduce el momento específico de interrupción. En español 'cuando' funciona igual. Esta estructura narrativa es perfecta para contar anécdotas donde algo inesperado interrumpe nuestra rutina o actividad en curso."
      },
      {
        id: "time_cl_2",
        question: "_____ I was cooking, my sister was cleaning the house.",
        translation: "Mientras yo cocinaba, mi hermana limpiaba la casa.",
        options: ["While", "When", "During", "As soon as"],
        correct: "While",
        explanation: "Usamos 'while' para dos acciones continuas que ocurren simultáneamente. Ambas personas haciendo cosas diferentes al mismo tiempo. En español 'mientras' también conecta acciones paralelas. Esta estructura describe colaboración o multitarea donde diferentes personas o uno mismo realizan actividades simultáneas, coordinando esfuerzos."
      },
      {
        id: "time_cl_3",
        question: "Call me _____ _____ _____ you arrive at the airport.",
        translation: "Llámame tan pronto como llegues al aeropuerto.",
        options: ["as soon as", "while", "during", "when"],
        correct: "as soon as",
        explanation: "La expresión 'as soon as' significa 'tan pronto como' e indica inmediatez. La acción debe ocurrir inmediatamente después del evento. Es más urgente que solo 'when'. En español 'tan pronto como' también enfatiza la rapidez requerida. Esta frase es común en situaciones donde la comunicación rápida es importante para coordinar o tranquilizar."
      },
      {
        id: "time_cl_4",
        question: "I'll wait here _____ you finish your meeting.",
        translation: "Esperaré aquí hasta que termines tu reunión.",
        options: ["until", "while", "during", "as"],
        correct: "until",
        explanation: "La palabra 'until' significa 'hasta que' y marca el punto final de una acción. Esperaré durante todo el tiempo que dure la reunión. En español 'hasta que' funciona idénticamente. Esta estructura muestra paciencia y disposición a esperar el tiempo necesario, expresando compromiso de permanecer hasta que la otra persona esté lista."
      },
      {
        id: "time_cl_5",
        question: "_____ we were walking, it started to rain.",
        translation: "Mientras caminábamos, empezó a llover.",
        options: ["While", "When", "During", "Until"],
        correct: "While",
        explanation: "Usamos 'while' con acción continua (were walking) que proporciona el contexto para otro evento (started to rain). En español 'mientras' también establece este marco temporal. El pasado continuo con 'while' crea la escena, y el pasado simple describe lo que interrumpió o cambió la situación."
      },
      {
        id: "time_cl_6",
        question: "She smiled _____ she saw her children playing.",
        translation: "Ella sonrió cuando vio a sus hijos jugando.",
        options: ["when", "while", "during", "until"],
        correct: "when",
        explanation: "Usamos 'when' para el momento específico que provocó la reacción. Ver a los niños (evento) causó la sonrisa (reacción). En español 'cuando' también conecta el estímulo visual con la respuesta emocional. Esta estructura captura esos momentos tiernos donde una visión particular desencadena una expresión o sentimiento inmediato."
      },
      {
        id: "time_cl_7",
        question: "_____ the movie, please don't talk on your phone.",
        translation: "Durante la película, por favor no hables por teléfono.",
        options: ["During", "While", "When", "As"],
        correct: "During",
        explanation: "La preposición 'during' requiere un SUSTANTIVO (the movie), no una cláusula con verbo. Es diferente de 'while' que necesita verbo. En español 'durante' también va con sustantivos. Esta distinción es importante: 'during' para períodos nombrados con sustantivos, 'while' para acciones descritas con verbos conjugados."
      },
      {
        id: "time_cl_8",
        question: "I'll call you _____ I get home from work tonight.",
        translation: "Te llamaré cuando llegue a casa del trabajo esta noche.",
        options: ["when", "while", "during", "until"],
        correct: "when",
        explanation: "Después de 'when' en referencia futura, usamos presente simple ('get') NO futuro ('will get'). Esta es regla especial del inglés en cláusulas temporales. En español también usamos presente 'llegue' (subjuntivo) no futuro. Ambos idiomas evitan futuro en estas cláusulas subordinadas de tiempo, manteniendo el presente para mayor naturalidad."
      },
      {
        id: "time_cl_9",
        question: "_____ I heard the news, I called my family immediately.",
        translation: "Apenas escuché las noticias, llamé a mi familia inmediatamente.",
        options: ["As soon as", "While", "During", "Until"],
        correct: "As soon as",
        explanation: "La expresión 'as soon as' con pasado simple describe reacción inmediata. Escuchar las noticias y llamar fueron casi simultáneos. En español 'apenas' o 'tan pronto como' también indican esta inmediatez. Esta estructura narrativa muestra causa-efecto rápido, útil para contar cómo respondimos urgentemente a información importante."
      },
      {
        id: "time_cl_10",
        question: "Don't leave _____ I come back with your change.",
        translation: "No te vayas hasta que regrese con tu cambio.",
        options: ["until", "when", "while", "as"],
        correct: "until",
        explanation: "El imperativo negativo con 'until' pide que alguien permanezca durante todo un período. 'Don't leave until' establece condición clara de espera. En español 'no te vayas hasta que' también usa imperativo negativo con límite temporal. Esta estructura es común en transacciones donde necesitamos que alguien espere nuestra vuelta."
      },
      {
        id: "time_cl_11",
        question: "_____ you were out, someone called for you twice.",
        translation: "Mientras estabas fuera, alguien te llamó dos veces.",
        options: ["While", "When", "During", "Until"],
        correct: "While",
        explanation: "Usamos 'while' para establecer el marco temporal (estabas fuera) durante el cual ocurrieron las llamadas. En español 'mientras' funciona igual. Esta estructura es útil para dar mensajes sobre lo que pasó durante la ausencia de alguien. El 'twice' añade importancia sugiriendo urgencia del llamante."
      },
      {
        id: "time_cl_12",
        question: "We'll start the presentation _____ everyone arrives.",
        translation: "Comenzaremos la presentación cuando todos lleguen.",
        options: ["when", "while", "during", "until"],
        correct: "when",
        explanation: "En cláusula temporal futura usamos 'when' con presente simple 'arrives' (no 'will arrive'). Esta es regla fija de cláusulas temporales. En español 'cuando' con subjuntivo 'lleguen' también evita futuro. Esta estructura establece condición para inicio de actividad grupal, mostrando consideración por esperar a todos."
      },
      {
        id: "time_cl_13",
        question: "I read a book _____ waiting at the doctor's office.",
        translation: "Leí un libro mientras esperaba en el consultorio del doctor.",
        options: ["while", "when", "during", "until"],
        correct: "while",
        explanation: "Usamos 'while' con gerundio 'waiting' para acción simultánea. Es forma compacta sin necesitar sujeto repetido y verbo conjugado completo. En español 'mientras esperaba' es similar. Esta estructura describe cómo usamos el tiempo de espera productivamente, convirtiendo momentos potencialmente aburridos en oportunidades para otras actividades."
      },
      {
        id: "time_cl_14",
        question: "_____ the concert, my phone battery died completely.",
        translation: "Durante el concierto, la batería de mi teléfono murió completamente.",
        options: ["During", "While", "When", "As"],
        correct: "During",
        explanation: "Usamos 'during' porque 'the concert' es sustantivo sin verbo. Si dijéramos 'while the concert was happening' usaríamos 'while' con cláusula verbal. En español 'durante el concierto' también usa la preposición con sustantivo. Esta situación frustrante de batería muerta en momento inconveniente es experiencia moderna común."
      },
      {
        id: "time_cl_15",
        question: "I lived in Madrid _____ I was studying at university.",
        translation: "Viví en Madrid mientras estudiaba en la universidad.",
        options: ["while", "when", "during", "until"],
        correct: "while",
        explanation: "Usamos 'while' para conectar dos situaciones que coexistían en el pasado. Vivir en Madrid y estudiar eran simultáneos durante ese período de vida. En español 'mientras' también une estas dos realidades paralelas. Esta estructura describe períodos de vida donde múltiples circunstancias coexisten, típico al hablar de años universitarios."
      }
    ]
  }
};

export default part8Categories;