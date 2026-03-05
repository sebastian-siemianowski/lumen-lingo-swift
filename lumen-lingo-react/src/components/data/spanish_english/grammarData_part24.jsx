
/**
 * SPANISH → ENGLISH GRAMMAR - PART 24
 * 4 categories, 15 questions each
 */

import { User, Map, Repeat, Building, Trophy } from "lucide-react";

export const part24Categories = {
  reflexive_pronouns: {
    name: "Pronombres Reflexivos",
    description: "Myself, yourself, himself - acciones hacia uno mismo",
    icon: User,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "reflex_1",
        question: "I cut _____ while cooking dinner last night.",
        translation: "Me corté mientras cocinaba la cena anoche.",
        options: ["myself", "me", "by myself", "mine"],
        correct: "myself",
        explanation: "Usamos pronombres reflexivos (myself, yourself, himself) cuando el sujeto hace la acción A SÍ MISMO. 'I cut myself' significa que yo me corté a mí, no a otra persona. En español 'me corté' usa pronombre reflexivo 'me'. Esta distinción es importante: 'cut me' sería que alguien más me cortó, 'cut myself' es que yo me lastimé accidentalmente."
      },
      {
        id: "reflex_2",
        question: "She always makes _____ breakfast every morning.",
        translation: "Ella siempre se hace el desayuno cada mañana.",
        options: ["herself", "her", "by herself", "hers"],
        correct: "herself",
        explanation: "Con tercera persona femenina usamos 'herself' cuando ella hace algo para sí misma: 'makes herself breakfast'. En español 'se hace' también es reflexivo con 'se'. Esta autonomía matutina de preparar propio desayuno muestra independencia y auto-suficiencia en rutina diaria antes de comenzar el día."
      },
      {
        id: "reflex_3",
        question: "The children can dress _____ now without help.",
        translation: "Los niños pueden vestirse ahora sin ayuda.",
        options: ["themselves", "them", "by themselves", "their"],
        correct: "themselves",
        explanation: "Para plural (niños) usamos 'themselves' cuando ellos hacen acción a sí mismos: 'dress themselves'. En español 'vestirse' es verbo reflexivo. Este logro de desarrollo infantil de vestirse independientemente marca etapa importante de autonomía que reduce carga de padres en rutina matutina."
      },
      {
        id: "reflex_4",
        question: "Did you hurt _____ when you fell down the stairs?",
        translation: "¿Te lastimaste cuando te caíste por las escaleras?",
        options: ["yourself", "you", "by yourself", "yours"],
        correct: "yourself",
        explanation: "Para segunda persona 'you' usamos 'yourself' (singular) o 'yourselves' (plural): 'Did you hurt yourself?' En español 'te lastimaste' usa 'te' reflexivo. Esta pregunta de preocupación después de caída verifica si hay lesiones que requieran atención médica, mostrando cuidado genuino."
      },
      {
        id: "reflex_5",
        question: "We enjoyed _____ at the party last Saturday night.",
        translation: "Nos divertimos en la fiesta el sábado pasado por la noche.",
        options: ["ourselves", "us", "by ourselves", "ours"],
        correct: "ourselves",
        explanation: "Para primera persona plural usamos 'ourselves': 'we enjoyed ourselves' significa que nos divertimos nosotros mismos. En español 'nos divertimos' usa 'nos'. La expresión 'enjoy yourself/ourselves' es idiomática para pasarla bien en evento social, capturando que la experiencia fue placentera."
      },
      {
        id: "reflex_6",
        question: "He lives by _____ in a small apartment downtown.",
        translation: "Él vive solo en un apartamento pequeño en el centro.",
        options: ["himself", "him", "his", "his own"],
        correct: "himself",
        explanation: "La expresión 'by himself' significa SOLO, sin compañía: 'lives by himself'. Es diferente de 'himself' reflexivo simple. En español 'vive solo' es más directo. Esta vida en soledad puede ser elección de independencia o circunstancia de estar soltero, trabajando lejos de familia."
      },
      {
        id: "reflex_7",
        question: "Please help _____ to some food and drinks here!",
        translation: "¡Por favor sírvanse comida y bebidas aquí!",
        options: ["yourselves", "yourself", "you", "yours"],
        correct: "yourselves",
        explanation: "Para invitación a grupo usamos 'help yourselves' (plural): significa servirse uno mismo. En español 'sírvanse' también es plural reflexivo. Esta hospitalidad de permitir que invitados se sirvan libremente crea ambiente relajado informal donde pueden tomar lo que quieran cuando quieran."
      },
      {
        id: "reflex_8",
        question: "The cat can clean _____ without needing a bath.",
        translation: "El gato puede limpiarse sin necesitar un baño.",
        options: ["itself", "it", "by itself", "its"],
        correct: "itself",
        explanation: "Para animales o cosas usamos 'itself': 'the cat cleans itself'. En español 'se limpia' es reflexivo. Esta capacidad felina de auto-limpieza mediante lamido es instinto natural que hace gatos mascotas convenientes que requieren menos mantenimiento que perros en cuanto a higiene."
      },
      {
        id: "reflex_9",
        question: "I taught _____ to play guitar using online videos.",
        translation: "Me enseñé a tocar guitarra usando videos en línea.",
        options: ["myself", "me", "by myself", "mine"],
        correct: "myself",
        explanation: "Para aprendizaje autodidacta usamos 'taught myself': sin maestro, aprendí solo. En español 'me enseñé' o 'aprendí solo' también marca auto-educación. Este logro de adquirir habilidad musical mediante recursos digitales muestra iniciativa, disciplina y capacidad de auto-motivación sin instrucción formal."
      },
      {
        id: "reflex_10",
        question: "They found _____ lost in the forest at night.",
        translation: "Se encontraron perdidos en el bosque de noche.",
        options: ["themselves", "them", "by themselves", "their"],
        correct: "themselves",
        explanation: "La expresión 'found themselves' significa descubrirse en situación: 'found themselves lost'. En español 'se encontraron perdidos' también es reflexivo. Esta situación de desorientación nocturna en bosque es escenario de supervivencia que requiere calma y habilidades de orientación para encontrar salida."
      },
      {
        id: "reflex_11",
        question: "You should be proud of _____ for this achievement!",
        translation: "¡Deberías estar orgulloso de ti mismo por este logro!",
        options: ["yourself", "you", "yours", "your"],
        correct: "yourself",
        explanation: "Después de preposiciones (of, to, for) usamos pronombre reflexivo: 'proud of yourself'. En español 'orgulloso de ti mismo' también usa reflexivo. Esta celebración de logro personal reconoce que el éxito merece auto-reconocimiento y que está bien sentir orgullo sano por trabajo bien hecho."
      },
      {
        id: "reflex_12",
        question: "She talks to _____ when she's thinking deeply.",
        translation: "Ella se habla a sí misma cuando está pensando profundamente.",
        options: ["herself", "her", "by herself", "hers"],
        correct: "herself",
        explanation: "Para hablar consigo mismo usamos 'talk to herself': conversación interna verbalizada. En español 'se habla a sí misma' también es reflexivo. Este hábito de verbalizar pensamientos es común cuando procesamos ideas complejas, y aunque parezca extraño, es estrategia cognitiva válida de muchas personas."
      },
      {
        id: "reflex_13",
        question: "We need to remind _____ to buy groceries tomorrow.",
        translation: "Necesitamos recordarnos comprar comida mañana.",
        options: ["ourselves", "us", "by ourselves", "ours"],
        correct: "ourselves",
        explanation: "Para recordatorio a nosotros mismos usamos 'remind ourselves': auto-recordatorio grupal. En español 'recordarnos' también es reflexivo plural. Esta nota mental compartida sobre responsabilidad doméstica muestra planificación colaborativa donde ambos se hacen responsables de no olvidar tarea importante."
      },
      {
        id: "reflex_14",
        question: "The problem will solve _____ if we just wait patiently.",
        translation: "El problema se resolverá solo si esperamos pacientemente.",
        options: ["itself", "it", "by itself", "its"],
        correct: "itself",
        explanation: "Para cosas que ocurren automáticamente usamos 'solve itself': sin intervención. En español 'se resolverá solo' también indica auto-resolución. Esta filosofía de no-intervención sugiere que a veces la mejor acción es paciencia, permitiendo que tiempo y circunstancias naturalmente corrijan situación."
      },
      {
        id: "reflex_15",
        question: "He always blames _____ when things go wrong at work.",
        translation: "Él siempre se culpa a sí mismo cuando las cosas salen mal en el trabajo.",
        options: ["himself", "him", "by himself", "his"],
        correct: "himself",
        explanation: "Para auto-culpa usamos 'blames himself': dirige la culpa hacia sí. En español 'se culpa a sí mismo' también es reflexivo. Este patrón de auto-responsabilización excesiva puede ser problemático si no distingue entre errores genuinos propios versus circunstancias fuera de control."
      }
    ]
  },

  there_is_there_are: {
    name: "There Is/There Are",
    description: "Expresar existencia - singular y plural",
    icon: Building,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    questions: [
      {
        id: "there_1",
        question: "_____ _____ a beautiful park near my house.",
        translation: "Hay un parque hermoso cerca de mi casa.",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Para indicar EXISTENCIA de algo singular usamos 'there is': 'there is a park' (hay un parque). En español 'hay' sirve para singular y plural, pero inglés distingue. La palabra 'there' no significa 'ahí/allí' aquí sino que es estructura fija para expresar que algo existe en algún lugar."
      },
      {
        id: "there_2",
        question: "_____ _____ three books on the table right now.",
        translation: "Hay tres libros en la mesa ahora mismo.",
        options: ["There are", "There is", "It is", "They are"],
        correct: "There are",
        explanation: "Para plural (tres libros) usamos 'there are': la cantidad determina si es 'is' o 'are'. En español 'hay' no cambia para plural. Esta estructura describe ubicación de objetos múltiples, útil para inventarios rápidos o describir escenas a alguien que no puede ver."
      },
      {
        id: "there_3",
        question: "_____ _____ any milk left in the refrigerator?",
        translation: "¿Hay leche en el refrigerador?",
        options: ["Is there", "Are there", "Is it", "Are they"],
        correct: "Is there",
        explanation: "En PREGUNTAS invertimos: 'Is there any milk?' (no 'There is'). Con incontables (milk) usamos singular 'is'. En español '¿hay leche?' también pregunta sobre existencia. Esta verificación de despensa es común antes de desayuno o al hacer lista de compras."
      },
      {
        id: "there_4",
        question: "_____ _____ many people waiting outside the store.",
        translation: "Hay muchas personas esperando afuera de la tienda.",
        options: ["There are", "There is", "It is", "They are"],
        correct: "There are",
        explanation: "Con 'many people' (plural) usamos 'there are'. La palabra 'many' ya indica plural. En español 'hay muchas personas' también es plural. Esta observación de multitud esperando sugiere que tienda está a punto de abrir, hay oferta especial, o es lanzamiento de producto popular."
      },
      {
        id: "there_5",
        question: "_____ _____ no time to waste - we must hurry now!",
        translation: "No hay tiempo que perder - ¡debemos apurarnos ahora!",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Con 'no time' (incontable) usamos 'there is'. La palabra 'no' no cambia la estructura. En español 'no hay tiempo' también es singular. Esta urgencia temporal crea presión inmediata para acción rápida sin demora, típica cuando deadline se acerca peligrosamente."
      },
      {
        id: "there_6",
        question: "How many students _____ _____ in your class this year?",
        translation: "¿Cuántos estudiantes hay en tu clase este año?",
        options: ["are there", "is there", "are they", "is it"],
        correct: "are there",
        explanation: "Con 'how many' (cuántos) usamos 'are there' porque pregunta cantidad plural: 'how many students are there'. En español '¿cuántos estudiantes hay?' también cuenta. Esta pregunta sobre tamaño de clase es común en contextos educativos donde número de estudiantes afecta dinámica y atención individual."
      },
      {
        id: "there_7",
        question: "_____ _____ a problem with my computer today.",
        translation: "Hay un problema con mi computadora hoy.",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Para problema singular usamos 'there is a problem'. En español 'hay un problema' también es singular. Esta declaración de dificultad técnica es inicio típico de solicitud de ayuda o explicación de por qué trabajo está retrasado, estableciendo que obstáculo existe."
      },
      {
        id: "there_8",
        question: "_____ _____ some cookies in the jar if you want one.",
        translation: "Hay algunas galletas en el frasco si quieres una.",
        options: ["There are", "There is", "It is", "They are"],
        correct: "There are",
        explanation: "Con 'some cookies' (plural) usamos 'there are'. La oferta 'if you want' es hospitalaria. En español 'hay algunas galletas' también es plural. Esta generosidad de compartir golosinas disponibles crea momento de amabilidad, invitando a otros a disfrutar de algo dulce."
      },
      {
        id: "there_9",
        question: "_____ _____ anything I can do to help you now?",
        translation: "¿Hay algo que pueda hacer para ayudarte ahora?",
        options: ["Is there", "Are there", "Is it", "Are they"],
        correct: "Is there",
        explanation: "Con 'anything' (algo - singular) usamos 'is there': pregunta sobre existencia de posibilidades. En español '¿hay algo?' también pregunta. Esta oferta abierta de ayuda muestra disposición genuina de asistir sin especificar qué, dejando que quien necesita ayuda defina cómo puede contribuir."
      },
      {
        id: "there_10",
        question: "_____ _____ a lot of traffic on the highway this morning.",
        translation: "Hubo mucho tráfico en la autopista esta mañana.",
        options: ["There was", "There were", "It was", "They were"],
        correct: "There was",
        explanation: "Para pasado con incontable (traffic) usamos 'there was': singular en pasado. En español 'hubo' también es pasado de 'hay'. Esta congestión matutina explica tardanza o menciona obstáculo que afectó viaje, validando demora como causada por circunstancia fuera de control personal."
      },
      {
        id: "there_11",
        question: "_____ _____ be more opportunities in the future for us.",
        translation: "Habrá más oportunidades en el futuro para nosotros.",
        options: ["There will", "There is", "There are", "It will"],
        correct: "There will",
        explanation: "Para FUTURO usamos 'there will be' (singular y plural usan 'will'): 'there will be opportunities'. En español 'habrá' también es futuro de 'hay'. Esta perspectiva optimista sobre oportunidades venideras ofrece esperanza cuando situación presente es difícil, recordando que futuro trae posibilidades nuevas."
      },
      {
        id: "there_12",
        question: "_____ _____ used to be a cinema here years ago.",
        translation: "Solía haber un cine aquí hace años.",
        options: ["There", "There is", "There are", "It"],
        correct: "There",
        explanation: "Con 'used to be' usamos solo 'there' al inicio: 'there used to be a cinema'. Es combinación de estructura de existencia con hábito pasado. En español 'solía haber' también combina. Esta nostalgia por establecimiento que cerró evoca memorias de ver películas ahí en el pasado."
      },
      {
        id: "there_13",
        question: "_____ _____ been several complaints about the noise recently.",
        translation: "Ha habido varias quejas sobre el ruido recientemente.",
        options: ["There have", "There has", "It has", "They have"],
        correct: "There have",
        explanation: "Con presente perfecto plural usamos 'there have been': 'there have been complaints'. Para singular sería 'there has been'. En español 'ha habido' es singular pero puede usarse para plural. Estas quejas acumuladas sobre ruido sugieren problema persistente que necesita atención antes de que más vecinos se molesten."
      },
      {
        id: "there_14",
        question: "_____ _____ nothing we can do about this situation now.",
        translation: "No hay nada que podamos hacer sobre esta situación ahora.",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Con 'nothing' (nada - singular) usamos 'there is': 'there is nothing we can do'. En español 'no hay nada' también es singular. Esta admisión de impotencia ante circunstancias reconoce límites de control personal, aceptando que algunas situaciones están fuera de nuestra capacidad de cambiar."
      },
      {
        id: "there_15",
        question: "_____ _____ going to be a test next Friday.",
        translation: "Va a haber un examen el próximo viernes.",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Para futuro con 'going to' usamos 'there is going to be': singular o plural depende de lo que sigue. En español 'va a haber' también es futuro. Este anuncio de examen próximo da tiempo de preparación, permitiendo a estudiantes organizarse con semana de anticipación para estudiar adecuadamente."
      }
    ]
  },

  prepositions_of_place: {
    name: "Preposiciones de Lugar",
    description: "In, on, at, under, above - ubicar objetos correctamente",
    icon: Map,
    color: "from-emerald-500 to-teal-600",
    level: "beginner",
    questions: [
      {
        id: "prep_place_1",
        question: "The book is _____ the table right now.",
        translation: "El libro está sobre la mesa ahora mismo.",
        options: ["on", "in", "at", "over"],
        correct: "on",
        explanation: "Para objetos que están SOBRE superficies usamos 'on': 'on the table, on the floor'. Hay contacto directo. En español 'sobre la mesa' o 'en la mesa' también describe. Esta preposición indica que libro descansa directamente en superficie plana de mesa, no está flotando ni dentro de algo."
      },
      {
        id: "prep_place_2",
        question: "She lives _____ London with her family now.",
        translation: "Ella vive en Londres con su familia ahora.",
        options: ["in", "on", "at", "to"],
        correct: "in",
        explanation: "Para CIUDADES y países usamos 'in': 'in London, in Spain'. Son espacios grandes donde estás dentro. En español 'en Londres' también usa 'en'. Esta ubicación londinense de residencia familiar establece contexto geográfico que probablemente influye en estilo de vida, acceso a cultura y oportunidades."
      },
      {
        id: "prep_place_3",
        question: "I'll meet you _____ the bus stop at 5 PM.",
        translation: "Te veré en la parada de autobús a las 5 PM.",
        options: ["at", "in", "on", "to"],
        correct: "at",
        explanation: "Para PUNTOS específicos de encuentro usamos 'at': 'at the bus stop, at the corner'. Es ubicación precisa. En español 'en la parada' usa 'en'. Esta coordinación de lugar y hora específicos para encuentro es planificación clara que evita confusiones sobre dónde reunirse."
      },
      {
        id: "prep_place_4",
        question: "The cat is hiding _____ the bed right now.",
        translation: "El gato se está escondiendo debajo de la cama ahora mismo.",
        options: ["under", "on", "in", "at"],
        correct: "under",
        explanation: "Para DEBAJO de algo usamos 'under': 'under the bed, under the table'. Indica posición inferior. En español 'debajo de' también es inferior. Este escondite felino clásico bajo cama es comportamiento común de gatos asustados o jugando, buscando espacio oscuro y protegido."
      },
      {
        id: "prep_place_5",
        question: "There's a beautiful painting _____ the wall in the living room.",
        translation: "Hay una pintura hermosa en la pared de la sala.",
        options: ["on", "in", "at", "over"],
        correct: "on",
        explanation: "Para cosas ADHERIDAS a superficies verticales usamos 'on': 'on the wall' (en la pared). En español 'en la pared' usa 'en'. Esta obra de arte colgada en pared probablemente es punto focal decorativo de sala que refleja gusto personal y añade carácter al espacio."
      },
      {
        id: "prep_place_6",
        question: "I'm _____ home working on my project today.",
        translation: "Estoy en casa trabajando en mi proyecto hoy.",
        options: ["at", "in", "on", "to"],
        correct: "at",
        explanation: "Para ubicación en 'home' usamos 'at home' (en casa): es punto de ubicación. También decimos 'at work, at school'. En español 'en casa' usa 'en'. Esta jornada de trabajo desde hogar es común en era de trabajo remoto donde oficina doméstica es espacio laboral válido."
      },
      {
        id: "prep_place_7",
        question: "The plane is flying _____ the clouds now.",
        translation: "El avión está volando sobre las nubes ahora.",
        options: ["above", "on", "in", "at"],
        correct: "above",
        explanation: "Para ARRIBA sin contacto usamos 'above' (sobre/encima): 'above the clouds'. Es opuesto de 'below/under'. En español 'sobre las nubes' también indica altura superior. Esta imagen de vuelo elevado sobre nubes evoca sensación de tranquilidad por encima del clima terrestre."
      },
      {
        id: "prep_place_8",
        question: "She put her phone _____ her bag before leaving.",
        translation: "Ella puso su teléfono en su bolsa antes de irse.",
        options: ["in", "on", "at", "into"],
        correct: "in",
        explanation: "Para DENTRO de contenedores usamos 'in': 'in the bag, in the box'. Está contenido adentro. En español 'en su bolsa' también usa 'en'. Esta acción de guardar teléfono antes de salir es precaución contra robo o pérdida, manteniéndolo seguro en lugar cerrado."
      },
      {
        id: "prep_place_9",
        question: "The children are playing _____ the park this afternoon.",
        translation: "Los niños están jugando en el parque esta tarde.",
        options: ["in", "on", "at", "to"],
        correct: "in",
        explanation: "Para ÁREAS abiertas amplias usamos 'in': 'in the park, in the garden'. Estás dentro del espacio. En español 'en el parque' también usa 'en'. Esta actividad recreativa al aire libre es saludable para niños, proporcionando ejercicio y socialización fuera de ambientes cerrados."
      },
      {
        id: "prep_place_10",
        question: "There's a spider _____ the ceiling - I'm scared!",
        translation: "¡Hay una araña en el techo - tengo miedo!",
        options: ["on", "in", "at", "under"],
        correct: "on",
        explanation: "Para cosas en superficies SUPERIORES usamos 'on': 'on the ceiling' (en el techo). Está adherida arriba. En español 'en el techo' usa 'en'. Este descubrimiento de araña arriba genera miedo común en personas con aracnofobia, y ubicación alta hace difícil eliminarla sin herramienta."
      },
      {
        id: "prep_place_11",
        question: "We're staying _____ a hotel near the beach for vacation.",
        translation: "Nos estamos quedando en un hotel cerca de la playa de vacaciones.",
        options: ["at", "in", "on", "to"],
        correct: "at",
        explanation: "Para EDIFICIOS como lugares temporales de estadía usamos 'at': 'at a hotel, at a friend's house'. En español 'en un hotel' usa 'en'. Esta elección de alojamiento cerca de playa optimiza acceso a actividades playeras, minimizando tiempo de desplazamiento durante días de vacaciones preciosos."
      },
      {
        id: "prep_place_12",
        question: "The picture is hanging _____ the door in the hallway.",
        translation: "El cuadro está colgado sobre la puerta en el pasillo.",
        options: ["above", "on", "in", "at"],
        correct: "above",
        explanation: "Para ENCIMA sin tocar usamos 'above': 'above the door' está en el espacio superior. En español 'sobre la puerta' también indica posición superior. Esta ubicación alta de foto aprovecha espacio de pared que frecuentemente queda desaprovechado, maximizando área de exhibición decorativa."
      },
      {
        id: "prep_place_13",
        question: "I'm sitting _____ my desk working right now.",
        translation: "Estoy sentado en mi escritorio trabajando ahora mismo.",
        options: ["at", "on", "in", "by"],
        correct: "at",
        explanation: "Para MUEBLES de trabajo usamos 'at': 'at my desk, at the table'. Indica posición de uso. En español 'en mi escritorio' usa 'en'. Esta ubicación de trabajo establece que estás activamente usando el escritorio para tareas, no solo cerca de él."
      },
      {
        id: "prep_place_14",
        question: "The keys are _____ the drawer where I left them.",
        translation: "Las llaves están en el cajón donde las dejé.",
        options: ["in", "on", "at", "into"],
        correct: "in",
        explanation: "Para DENTRO de espacios cerrados usamos 'in': 'in the drawer, in the cupboard'. Están contenidas adentro. En español 'en el cajón' también indica interior. Esta ubicación recordada de llaves facilita encontrarlas rápidamente cuando se necesitan, evitando búsqueda frustrante."
      },
      {
        id: "prep_place_15",
        question: "She's standing _____ the window looking outside at the rain.",
        translation: "Ella está parada junto a la ventana mirando afuera la lluvia.",
        options: ["by", "on", "in", "at"],
        correct: "by",
        explanation: "Para JUNTO A o AL LADO usamos 'by' o 'next to': 'standing by the window'. Indica proximidad. En español 'junto a la ventana' también usa cercanía. Esta imagen contemplativa de persona mirando lluvia desde ventana evoca momento melancólico o tranquilo de observación de clima."
      }
    ]
  },

  superlatives: {
    name: "Superlativos",
    description: "The best, the worst, the most - expresar extremos",
    icon: Trophy,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "super_1",
        question: "She is _____ _____ student in the entire class.",
        translation: "Ella es la mejor estudiante de toda la clase.",
        options: ["the best", "the better", "best", "better"],
        correct: "the best",
        explanation: "Para SUPERLATIVO (el/la más) siempre usamos 'the' antes: 'the best student'. Es extremo positivo. En español 'la mejor estudiante' también usa artículo. El superlativo compara UNO contra TODOS los demás del grupo, identificando quién o qué está en posición superior absoluta."
      },
      {
        id: "super_2",
        question: "This is _____ _____ interesting book I've ever read!",
        translation: "¡Este es el libro más interesante que he leído jamás!",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con adjetivos LARGOS (3+ sílabas) usamos 'the most' + adjetivo: 'the most interesting'. Para cortos añadimos -est. En español 'el más interesante' también usa 'más'. La estructura con 'ever' enfatiza que de TODOS los libros en tu vida, este es supremo."
      },
      {
        id: "super_3",
        question: "That was _____ _____ movie I've seen this year so far.",
        translation: "Esa fue la peor película que he visto este año hasta ahora.",
        options: ["the worst", "the worse", "worst", "worse"],
        correct: "the worst",
        explanation: "Para extremo NEGATIVO usamos 'the worst': opuesto de 'the best'. Es superlativo irregular. En español 'la peor' también es superlativo negativo. Esta evaluación extremadamente negativa sugiere que película fue tan mala que destaca entre todas las vistas, memorablemente terrible."
      },
      {
        id: "super_4",
        question: "He's _____ _____ person I know in my entire life.",
        translation: "Él es la persona más alta que conozco en toda mi vida.",
        options: ["the tallest", "the taller", "tallest", "taller"],
        correct: "the tallest",
        explanation: "Con adjetivos CORTOS (1 sílaba) formamos superlativo con -est: 'tall' se vuelve 'the tallest'. Siempre con 'the'. En español 'la persona más alta' usa 'más'. Esta observación sobre estatura excepcional identifica a alguien que destaca físicamente por altura impresionante entre todos conocidos."
      },
      {
        id: "super_5",
        question: "This is _____ _____ expensive restaurant in the city!",
        translation: "¡Este es el restaurante más caro de la ciudad!",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con 'expensive' (largo) usamos 'the most expensive': no podemos decir 'expensivest'. En español 'el más caro' también usa 'más'. Este precio supremo de restaurante puede indicar calidad excepcional, exclusividad o simplemente ubicación premium que justifica costo elevado."
      },
      {
        id: "super_6",
        question: "She's _____ _____ singer I've ever heard perform live!",
        translation: "¡Ella es la mejor cantante que he escuchado actuar en vivo!",
        options: ["the best", "the better", "best", "better"],
        correct: "the best",
        explanation: "Superlativo irregular 'good' se vuelve 'the best': máxima calidad vocal. En español 'la mejor cantante' también es superlativo. Esta experiencia de concierto excepcional establece nuevo estándar contra el cual todas las futuras presentaciones en vivo serán comparadas."
      },
      {
        id: "super_7",
        question: "Today was _____ _____ day of my entire life!",
        translation: "¡Hoy fue el peor día de toda mi vida!",
        options: ["the worst", "the worse", "worst", "worse"],
        correct: "the worst",
        explanation: "Superlativo negativo 'the worst' marca extremo inferior: día terrible supremo. En español 'el peor día' también es superlativo. Esta hipérbole dramática expresa que día fue excepcionalmente malo, acumulando múltiples problemas que lo hacen memorablemente horrible."
      },
      {
        id: "super_8",
        question: "This is _____ _____ difficult exam we've had this semester.",
        translation: "Este es el examen más difícil que hemos tenido este semestre.",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con 'difficult' (largo) usamos 'the most difficult': compara este examen con todos los otros del semestre. En español 'el más difícil' también compara. Esta evaluación de dificultad extrema puede justificar desempeño bajo si muchos estudiantes también lucharon con él."
      },
      {
        id: "super_9",
        question: "He's _____ _____ runner on the entire team consistently.",
        translation: "Él es el corredor más rápido de todo el equipo consistentemente.",
        options: ["the fastest", "the faster", "fastest", "faster"],
        correct: "the fastest",
        explanation: "Adjetivo corto 'fast' añade -est: 'the fastest runner'. Es velocidad suprema del equipo. En español 'el más rápido' usa 'más'. Esta posición de atleta más veloz probablemente lo pone en carreras importantes o competencias donde velocidad es factor decisivo."
      },
      {
        id: "super_10",
        question: "This was _____ _____ delicious meal I've tasted recently!",
        translation: "¡Esta fue la comida más deliciosa que he probado recientemente!",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con 'delicious' (largo) usamos 'the most delicious': sabor supremo. En español 'la más deliciosa' también usa 'más'. Este elogio culinario extremo sugiere que experiencia gastronómica superó todas las expectativas, probablemente resultará en recomendación entusiasta del lugar."
      },
      {
        id: "super_11",
        question: "Mount Everest is _____ _____ mountain in the world entirely.",
        translation: "El Monte Everest es la montaña más alta del mundo enteramente.",
        options: ["the highest", "the higher", "highest", "higher"],
        correct: "the highest",
        explanation: "Adjetivo corto 'high' se vuelve 'the highest': pico supremo mundial. En español 'la más alta' usa 'más'. Este hecho geográfico sobre Everest como cumbre terrestre suprema lo hace destino soñado de montañistas que buscan desafío último de escalada."
      },
      {
        id: "super_12",
        question: "She's _____ _____ generous person I've ever known personally.",
        translation: "Ella es la persona más generosa que he conocido personalmente.",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con 'generous' (largo) usamos 'the most generous': máxima generosidad observada. En español 'la más generosa' también usa 'más'. Este reconocimiento de generosidad excepcional honra a alguien cuya disposición de dar supera a todos los demás, mostrando carácter extraordinario."
      },
      {
        id: "super_13",
        question: "This is _____ _____ I can do with available resources.",
        translation: "Esto es lo mejor que puedo hacer con los recursos disponibles.",
        options: ["the best", "the better", "best", "better"],
        correct: "the best",
        explanation: "La expresión 'the best I can do' (lo mejor que puedo hacer) es superlativo de capacidad: máximo esfuerzo posible. En español 'lo mejor que puedo' también es superlativo. Esta admisión de límites establece expectativas realistas dadas restricciones de recursos, tiempo o habilidad."
      },
      {
        id: "super_14",
        question: "That's _____ _____ beautiful sunset I've ever seen anywhere!",
        translation: "¡Ese es el atardecer más hermoso que he visto en cualquier lugar!",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con 'beautiful' (largo) usamos 'the most beautiful': belleza suprema observada. En español 'el más hermoso' también usa 'más'. Esta maravilla natural que supera todos los atardeceres previos crea momento de asombro que probablemente quedará grabado en memoria como experiencia especial."
      },
      {
        id: "super_15",
        question: "He's _____ _____ intelligent student in his grade level.",
        translation: "Él es el estudiante más inteligente de su nivel de grado.",
        options: ["the most", "the more", "most", "more"],
        correct: "the most",
        explanation: "Con 'intelligent' (largo) usamos 'the most intelligent': intelecto supremo de su año. En español 'el más inteligente' también usa 'más'. Esta distinción académica reconoce capacidad excepcional que probablemente le trae tanto ventajas (mejores calificaciones) como presión de expectativas altas."
      }
    ]
  },

  present_perfect_continuous: {
    name: "Presente Perfecto Continuo",
    description: "Have been doing - acciones que empezaron y continúan",
    icon: Repeat,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "ppc_1",
        question: "I _____ _____ _____ for three hours straight now!",
        translation: "¡He estado estudiando por tres horas seguidas ya!",
        options: ["have been studying", "have studied", "am studying", "was studying"],
        correct: "have been studying",
        explanation: "Para acción que EMPEZÓ en pasado y AÚN CONTINÚA con énfasis en DURACIÓN usamos presente perfecto continuo: 'have been studying'. Es diferente de presente perfecto simple que enfoca en completitud. En español 'he estado estudiando' también usa gerundio. Este tiempo verbal enfatiza la continuidad agotadora de actividad prolongada."
      },
      {
        id: "ppc_2",
        question: "She _____ _____ _____ for the exam all week long.",
        translation: "Ella ha estado preparándose para el examen toda la semana.",
        options: ["has been preparing", "has prepared", "is preparing", "was preparing"],
        correct: "has been preparing",
        explanation: "Con tercera persona usamos 'has been' + gerundio: 'has been preparing all week'. La duración 'all week' es clave. En español 'ha estado preparándose' también continúa. Esta preparación sostenida durante semana completa muestra dedicación seria y probablemente resultará en buen desempeño."
      },
      {
        id: "ppc_3",
        question: "How long _____ you _____ _____ Spanish actively?",
        translation: "¿Cuánto tiempo has estado aprendiendo español activamente?",
        options: ["have / been learning", "have / learned", "are / learning", "did / learn"],
        correct: "have / been learning",
        explanation: "Para preguntar DURACIÓN de aprendizaje que continúa usamos 'how long have you been learning': enfoca en el proceso continuo. En español '¿cuánto tiempo has estado aprendiendo?' también usa gerundio. Esta pregunta sobre trayectoria de estudio ayuda a contextualizar nivel actual de competencia."
      },
      {
        id: "ppc_4",
        question: "They _____ _____ _____ here since early this morning.",
        translation: "Ellos han estado esperando aquí desde temprano esta mañana.",
        options: ["have been waiting", "have waited", "are waiting", "were waiting"],
        correct: "have been waiting",
        explanation: "Con 'since' (desde) para marcar inicio usamos presente perfecto continuo: 'have been waiting since morning'. Enfatiza la larga duración de espera. En español 'han estado esperando' también usa gerundio. Esta espera extendida desde mañana genera frustración creciente sobre demora."
      },
      {
        id: "ppc_5",
        question: "I _____ _____ _____ to call you for hours now!",
        translation: "¡He estado tratando de llamarte por horas ya!",
        options: ["have been trying", "have tried", "am trying", "was trying"],
        correct: "have been trying",
        explanation: "Para INTENTOS repetidos continuos usamos 'have been trying': enfatiza esfuerzo persistente sin éxito. En español 'he estado tratando' también marca continuidad. Esta frustración de múltiples intentos fallidos de contacto sugiere que la otra persona no responde o tiene teléfono apagado."
      },
      {
        id: "ppc_6",
        question: "She _____ _____ _____ all morning about the news.",
        translation: "Ella ha estado llorando toda la mañana sobre las noticias.",
        options: ["has been crying", "has cried", "is crying", "was crying"],
        correct: "has been crying",
        explanation: "Para EMOCIÓN continua que empezó y aún continúa usamos 'has been crying': duración emocional. En español 'ha estado llorando' también usa gerundio. Esta tristeza sostenida toda la mañana sugiere que noticias fueron particularmente devastadoras o tocaron profundamente sus emociones."
      },
      {
        id: "ppc_7",
        question: "We _____ _____ _____ for a new house for months.",
        translation: "Hemos estado buscando una casa nueva por meses.",
        options: ["have been looking", "have looked", "are looking", "were looking"],
        correct: "have been looking",
        explanation: "Para BÚSQUEDA prolongada continua usamos 'have been looking for months': enfatiza proceso extendido. En español 'hemos estado buscando' también continúa. Esta búsqueda de meses de vivienda adecuada muestra que encontrar casa perfecta requiere paciencia y probablemente múltiples visitas y rechazos."
      },
      {
        id: "ppc_8",
        question: "You look tired - _____ you _____ _____ all night?",
        translation: "Te ves cansado - ¿has estado trabajando toda la noche?",
        options: ["have / been working", "have / worked", "are / working", "did / work"],
        correct: "have / been working",
        explanation: "Para deducir causa de cansancio visible usamos pregunta en presente perfecto continuo: 'have you been working all night?' En español '¿has estado trabajando?' también deduce. Esta observación preocupada sobre apariencia agotada busca confirmar sospecha de trabajo nocturno que explica fatiga evidente."
      },
      {
        id: "ppc_9",
        question: "It _____ _____ _____ for two days without stopping.",
        translation: "Ha estado lloviendo por dos días sin parar.",
        options: ["has been raining", "has rained", "is raining", "was raining"],
        correct: "has been raining",
        explanation: "Para CLIMA continuo desde el pasado usamos 'has been raining': lluvia sostenida. En español 'ha estado lloviendo' también usa gerundio. Esta lluvia persistente de 48 horas puede causar inundaciones, cancelación de eventos al aire libre, y deseo desesperado de que sol finalmente aparezca."
      },
      {
        id: "ppc_10",
        question: "I _____ _____ _____ the same question repeatedly today!",
        translation: "¡He estado recibiendo la misma pregunta repetidamente hoy!",
        options: ["have been getting", "have gotten", "am getting", "was getting"],
        correct: "have been getting",
        explanation: "Para RECEPCIÓN repetida continua usamos 'have been getting': patrón que persiste hoy. En español 'he estado recibiendo' también marca repetición. Esta frustración de responder misma pregunta múltiples veces sugiere que debería haber comunicación más clara inicial para evitar consultas redundantes."
      },
      {
        id: "ppc_11",
        question: "They _____ _____ _____ in that house for 10 years now.",
        translation: "Ellos han estado viviendo en esa casa por 10 años ya.",
        options: ["have been living", "have lived", "are living", "were living"],
        correct: "have been living",
        explanation: "Para residencia de LARGA duración que continúa podemos usar presente perfecto continuo: 'have been living for 10 years'. También funciona simple 'have lived' pero continuo enfatiza la prolongación. En español 'han estado viviendo' enfatiza duración. Esta década en misma casa crea raíces profundas en comunidad."
      },
      {
        id: "ppc_12",
        question: "He _____ _____ _____ very strangely lately - is he okay?",
        translation: "Él ha estado actuando muy extrañamente últimamente - ¿está bien?",
        options: ["has been acting", "has acted", "is acting", "was acting"],
        correct: "has been acting",
        explanation: "Para COMPORTAMIENTO inusual reciente continuo usamos 'has been acting': patrón preocupante. En español 'ha estado actuando' también nota cambio. Esta observación de comportamiento anormal genera preocupación legítima sobre bienestar mental o emocional que motiva verificar si necesita ayuda."
      },
      {
        id: "ppc_13",
        question: "I _____ _____ _____ to reach you since yesterday afternoon!",
        translation: "¡He estado intentando contactarte desde ayer en la tarde!",
        options: ["have been trying", "have tried", "am trying", "was trying"],
        correct: "have been trying",
        explanation: "Para INTENTOS persistentes desde punto específico usamos 'have been trying since yesterday': combina duración con punto de inicio. En español 'he estado intentando desde' también enfatiza persistencia. Esta dificultad prolongada de contacto genera preocupación creciente sobre por qué no responde."
      },
      {
        id: "ppc_14",
        question: "She _____ _____ _____ English for five years successfully.",
        translation: "Ella ha estado enseñando inglés por cinco años exitosamente.",
        options: ["has been teaching", "has taught", "is teaching", "was teaching"],
        correct: "has been teaching",
        explanation: "Para CARRERA o actividad profesional prolongada usamos 'has been teaching for five years': enfatiza continuidad de labor. En español 'ha estado enseñando' también marca duración. Estos cinco años de experiencia docente han desarrollado habilidades pedagógicas y comprensión profunda de cómo estudiantes aprenden."
      },
      {
        id: "ppc_15",
        question: "We _____ _____ _____ this issue for weeks without solution.",
        translation: "Hemos estado discutiendo este problema por semanas sin solución.",
        options: ["have been discussing", "have discussed", "are discussing", "were discussing"],
        correct: "have been discussing",
        explanation: "Para DEBATE prolongado sin resolución usamos 'have been discussing for weeks': enfatiza falta de progreso. En español 'hemos estado discutiendo' también marca estancamiento. Esta discusión circular de semanas sin llegar a consenso sugiere necesidad de cambiar enfoque o aceptar que acuerdo es imposible."
      }
    ]
  }
};

export default part24Categories;
