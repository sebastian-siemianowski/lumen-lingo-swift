/**
 * SPANISH → ENGLISH GRAMMAR - PART 28
 * 4 categories, 15 questions each
 */

import { Coffee, Palmtree, Watch, Briefcase } from "lucide-react";

export const part28Categories = {
  make_vs_do: {
    name: "Make vs Do",
    description: "Crear vs ejecutar - verbos confusos con usos específicos",
    icon: Coffee,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "make_do_1",
        question: "I need to _____ my homework before dinner tonight.",
        translation: "Necesito hacer mi tarea antes de la cena esta noche.",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Con TAREAS o TRABAJO usamos 'do': 'do homework, do the dishes, do exercise'. En español 'hacer tarea' usa 'hacer' para ambos, pero inglés separa. 'Do' es para ACTIVIDADES o TAREAS que ejecutas. Esta distinción parece arbitraria pero hay patrones: 'do' es más sobre ejecutar acciones."
      },
      {
        id: "make_do_2",
        question: "She _____ a cake for the birthday party yesterday.",
        translation: "Ella hizo un pastel para la fiesta de cumpleaños ayer.",
        options: ["made", "did", "making", "doing"],
        correct: "made",
        explanation: "Para CREAR o CONSTRUIR algo usamos 'make': 'make a cake, make dinner'. En español 'hacer un pastel' usa 'hacer'. 'Make' implica CREACIÓN de algo nuevo que antes no existía. Este pastel casero hecho con dedicación probablemente será más apreciado que uno comprado."
      },
      {
        id: "make_do_3",
        question: "Can you _____ me a favor and help me move?",
        translation: "¿Puedes hacerme un favor y ayudarme a mudar?",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "La expresión fija es 'do someone a favor' (hacer un favor): no se puede cambiar. En español 'hacerme un favor' usa 'hacer'. Esta petición de ayuda con mudanza es solicitud significativa que requiere esfuerzo físico considerable, mostrando que pedir este favor indica confianza en la relación."
      },
      {
        id: "make_do_4",
        question: "He _____ a lot of money working in finance sector.",
        translation: "Él gana mucho dinero trabajando en el sector financiero.",
        options: ["makes", "does", "making", "doing"],
        correct: "makes",
        explanation: "Para GANAR dinero usamos 'make money': expresión fija de ingreso. En español 'gana dinero' usa 'ganar'. La estructura 'make money' es universal en inglés para hablar de ingresos, sin importar si es salario, negocio o inversiones. Este ingreso alto en finanzas refleja salarios típicamente elevados del sector."
      },
      {
        id: "make_do_5",
        question: "I always _____ the laundry on Sundays regularly.",
        translation: "Siempre hago la lavandería los domingos regularmente.",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Para TAREAS domésticas usamos 'do': 'do the laundry, do the cleaning'. En español 'hacer la lavandería' usa 'hacer'. Las tareas de casa generalmente van con 'do' porque son trabajos que EJECUTAS no cosas que CREAS. Esta rutina dominical de lavado organiza semana de ropa limpia."
      },
      {
        id: "make_do_6",
        question: "She _____ a mistake in her calculations yesterday.",
        translation: "Ella cometió un error en sus cálculos ayer.",
        options: ["made", "did", "making", "doing"],
        correct: "made",
        explanation: "Para ERRORES usamos 'make a mistake': no 'do a mistake'. Es expresión fija. En español 'cometió un error' usa 'cometer'. Este error matemático puede tener consecuencias dependiendo del contexto, desde simple corrección en tarea hasta problema serio en presupuesto o proyecto importante."
      },
      {
        id: "make_do_7",
        question: "We need to _____ a decision about this matter soon.",
        translation: "Necesitamos tomar una decisión sobre este asunto pronto.",
        options: ["make", "do", "making", "doing"],
        correct: "make",
        explanation: "Para DECISIONES usamos 'make a decision': proceso de elegir. En español 'tomar una decisión' usa 'tomar'. La estructura 'make a decision' enfatiza que estás CREANDO una elección donde antes había incertidumbre. La urgencia 'soon' indica que postponer más causa problemas."
      },
      {
        id: "make_do_8",
        question: "He's _____ his best to finish on time today.",
        translation: "Él está haciendo su mejor esfuerzo para terminar a tiempo hoy.",
        options: ["doing", "making", "do", "make"],
        correct: "doing",
        explanation: "La expresión 'do your best' (hacer tu mejor esfuerzo) es fija con 'do': máximo esfuerzo posible. En español 'hacer su mejor esfuerzo' también usa 'hacer'. Esta dedicación de dar todo lo posible muestra que aunque resultado final sea incierto, el compromiso y esfuerzo son totales."
      },
      {
        id: "make_do_9",
        question: "I _____ breakfast for my family every morning early.",
        translation: "Hago desayuno para mi familia cada mañana temprano.",
        options: ["make", "do", "making", "doing"],
        correct: "make",
        explanation: "Para PREPARAR comidas usamos 'make': 'make breakfast, make lunch, make dinner'. En español 'hacer desayuno' usa 'hacer'. Las comidas van con 'make' porque CREAS el platillo. Esta rutina matutina de alimentar a familia muestra cuidado y servicio que estructura inicio del día de todos."
      },
      {
        id: "make_do_10",
        question: "She _____ well on the exam - she got 95%!",
        translation: "A ella le fue bien en el examen - ¡sacó 95%!",
        options: ["did", "made", "doing", "making"],
        correct: "did",
        explanation: "Para DESEMPEÑO usamos 'do well/badly': cómo te fue. En español 'le fue bien' usa 'ir'. La estructura 'do well' describe resultado de ejecución en tarea, examen o actividad. Este 95% es resultado excepcional que valida el esfuerzo de estudio invertido previamente."
      },
      {
        id: "make_do_11",
        question: "We _____ plans for our vacation last night together.",
        translation: "Hicimos planes para nuestras vacaciones anoche juntos.",
        options: ["made", "did", "making", "doing"],
        correct: "made",
        explanation: "Para PLANIFICACIÓN usamos 'make plans': crear itinerario. En español 'hacer planes' usa 'hacer'. 'Make' funciona aquí porque CREAS el plan desde cero. Esta sesión nocturna de planificación vacacional probablemente incluyó investigar destinos, presupuesto y actividades deseadas."
      },
      {
        id: "make_do_12",
        question: "He always _____ excuses when he's late for work.",
        translation: "Él siempre pone excusas cuando llega tarde al trabajo.",
        options: ["makes", "does", "making", "doing"],
        correct: "makes",
        explanation: "Para EXCUSAS usamos 'make excuses': inventar justificaciones. En español 'poner excusas' usa 'poner'. Esta tendencia de fabricar explicaciones para tardanzas repetidas sugiere falta de responsabilidad o que tiene problemas subyacentes no resueltos con puntualidad o motivación laboral."
      },
      {
        id: "make_do_13",
        question: "I _____ yoga every morning for flexibility and health.",
        translation: "Hago yoga cada mañana para flexibilidad y salud.",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Para DEPORTES o EJERCICIOS usamos 'do': 'do yoga, do karate, do aerobics'. En español 'hacer yoga' también usa 'hacer'. Los ejercicios y deportes son actividades que EJECUTAS regularmente. Esta práctica matutina de yoga establece tono tranquilo y centrado para resto del día."
      },
      {
        id: "make_do_14",
        question: "She _____ progress in learning the new language now.",
        translation: "Ella está haciendo progreso en aprender el nuevo idioma ahora.",
        options: ["is making", "is doing", "makes", "does"],
        correct: "is making",
        explanation: "Para PROGRESO usamos 'make progress': avanzar hacia meta. En español 'hacer progreso' usa 'hacer'. La palabra 'progress' va con 'make' porque es algo que CONSTRUYES gradualmente. El presente continuo enfatiza que mejora está ocurriendo activamente en este período de aprendizaje."
      },
      {
        id: "make_do_15",
        question: "We _____ business together for over ten years now.",
        translation: "Hacemos negocios juntos por más de diez años ya.",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Para NEGOCIOS usamos 'do business': relación comercial. En español 'hacer negocios' usa 'hacer'. La expresión 'do business with' describe asociación comercial continua. Esta década de colaboración empresarial sugiere relación de confianza mutua y probablemente múltiples proyectos exitosos compartidos."
      }
    ]
  },

  adjective_order: {
    name: "Orden de Adjetivos",
    description: "Secuencia correcta - opinión, tamaño, edad, color",
    icon: Palmtree,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "adj_order_1",
        question: "She has a _____ _____ _____ car parked outside.",
        translation: "Ella tiene un auto rojo pequeño hermoso estacionado afuera.",
        options: ["beautiful small red", "red small beautiful", "small beautiful red", "small red beautiful"],
        correct: "beautiful small red",
        explanation: "El orden inglés de adjetivos es FIJO: opinión (beautiful) + tamaño (small) + color (red). En español 'auto rojo pequeño hermoso' pone color primero. Esta regla inglesa no es lógica, solo hay que memorizarla: OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose)."
      },
      {
        id: "adj_order_2",
        question: "I bought an _____ _____ table for my dining room.",
        translation: "Compré una mesa de madera antigua hermosa para mi comedor.",
        options: ["old wooden beautiful", "beautiful old wooden", "wooden beautiful old", "wooden old beautiful"],
        correct: "beautiful old wooden",
        explanation: "El orden correcto es opinión (beautiful) + edad (old) + material (wooden). En español el orden es más flexible. Esta secuencia específica suena natural en inglés mientras que otros órdenes suenan inmediatamente incorrectos para hablantes nativos, aunque todos sean gramaticalmente comprensibles."
      },
      {
        id: "adj_order_3",
        question: "They live in a _____ _____ _____ house on the hill.",
        translation: "Ellos viven en una casa blanca grande antigua en la colina.",
        options: ["large old white", "white large old", "old large white", "old white large"],
        correct: "large old white",
        explanation: "Seguimos tamaño (large) + edad (old) + color (white). En español 'casa blanca grande antigua' varía más libremente. Esta casa en colina con tres características destacables (tamaño, antigüedad, color) probablemente es propiedad notable visible desde lejos que define el paisaje local."
      },
      {
        id: "adj_order_4",
        question: "She's wearing a _____ _____ silk dress tonight.",
        translation: "Ella está usando un vestido de seda largo hermoso esta noche.",
        options: ["beautiful long", "long beautiful", "silk beautiful", "beautiful silk"],
        correct: "beautiful long",
        explanation: "Opinión (beautiful) va ANTES de tamaño/longitud (long), luego material (silk). En español 'vestido largo hermoso' puede invertirse. Este vestido elegante de seda para evento nocturno sugiere ocasión formal o especial que requiere vestimenta refinada."
      },
      {
        id: "adj_order_5",
        question: "I found an _____ _____ _____ coin in the attic.",
        translation: "Encontré una moneda de oro redonda antigua en el ático.",
        options: ["old round gold", "gold old round", "round old gold", "gold round old"],
        correct: "old round gold",
        explanation: "El orden es edad (old) + forma (round) + material (gold). En español 'moneda de oro redonda antigua' pone material primero. Este descubrimiento de moneda antigua en ático puede tener valor histórico o monetario significativo, creando emoción de encontrar tesoro oculto."
      },
      {
        id: "adj_order_6",
        question: "We stayed at a _____ _____ French hotel in Paris.",
        translation: "Nos quedamos en un hotel francés pequeño encantador en París.",
        options: ["charming little", "little charming", "French charming", "charming French"],
        correct: "charming little",
        explanation: "Opinión (charming) + tamaño (little) + origen (French). En español 'hotel francés pequeño encantador' varía. Esta combinación de características hace hotel memorable: no solo francés sino específicamente pequeño y con carácter encantador que grandes cadenas internacionales no capturan."
      },
      {
        id: "adj_order_7",
        question: "He drives a _____ _____ _____ sports car daily.",
        translation: "Él maneja un auto deportivo italiano rojo hermoso diariamente.",
        options: ["beautiful red Italian", "Italian red beautiful", "red beautiful Italian", "red Italian beautiful"],
        correct: "beautiful red Italian",
        explanation: "Opinión (beautiful) + color (red) + origen (Italian) + propósito (sports). En español 'auto deportivo italiano rojo' agrupa diferente. Este vehículo de lujo deportivo italiano rojo probablemente atrae miradas y comentarios dondequiera que se estaciona, siendo símbolo de estatus o pasión por autos."
      },
      {
        id: "adj_order_8",
        question: "She has _____ _____ _____ eyes that shine brightly.",
        translation: "Ella tiene ojos azules grandes hermosos que brillan intensamente.",
        options: ["beautiful big blue", "blue big beautiful", "big beautiful blue", "blue beautiful big"],
        correct: "beautiful big blue",
        explanation: "Opinión (beautiful) + tamaño (big) + color (blue) es orden estándar. En español 'ojos azules grandes hermosos' pone color primero. Esta descripción poética de rasgos faciales llamativos probablemente es cumplido que reconoce característica física distintiva que hace a persona memorable."
      },
      {
        id: "adj_order_9",
        question: "I want to buy that _____ _____ leather jacket.",
        translation: "Quiero comprar esa chaqueta de cuero negra hermosa.",
        options: ["beautiful black", "black beautiful", "leather beautiful", "beautiful leather"],
        correct: "beautiful black",
        explanation: "Opinión (beautiful) + color (black) + material (leather). En español 'chaqueta de cuero negra hermosa' pone material primero. Esta chaqueta de cuero negra clásica es prenda versátil que nunca pasa de moda, siendo inversión de guardarropa que dura años."
      },
      {
        id: "adj_order_10",
        question: "They bought a _____ _____ _____ rug for the living room.",
        translation: "Ellos compraron una alfombra persa redonda grande para la sala.",
        options: ["large round Persian", "Persian round large", "round large Persian", "Persian large round"],
        correct: "large round Persian",
        explanation: "Tamaño (large) + forma (round) + origen (Persian). En español 'alfombra persa redonda grande' varía libremente. Esta alfombra persa grande y redonda probablemente es pieza central decorativa de sala que define estilo y color del espacio, siendo inversión significativa."
      },
      {
        id: "adj_order_11",
        question: "She gave me a _____ _____ wooden box as gift.",
        translation: "Ella me dio una caja de madera pequeña preciosa como regalo.",
        options: ["lovely little", "little lovely", "wooden lovely", "lovely wooden"],
        correct: "lovely little",
        explanation: "Opinión (lovely) + tamaño (little) + material (wooden). En español 'caja de madera pequeña preciosa' agrupa diferente. Este regalo de caja pequeña artesanal probablemente tiene valor sentimental por lo cuidadosamente elegido, mostrando que el pensamiento detrás importa más que tamaño."
      },
      {
        id: "adj_order_12",
        question: "He wore his _____ _____ wedding suit to the ceremony.",
        translation: "Él usó su traje de boda negro elegante para la ceremonia.",
        options: ["elegant black", "black elegant", "wedding elegant", "elegant wedding"],
        correct: "elegant black",
        explanation: "Opinión (elegant) + color (black) + propósito (wedding). En español 'traje de boda negro elegante' puede variar. Este traje formal negro para boda propia es selección clásica tradicional que nunca falla, proyectando sofisticación y seriedad apropiada para ocasión."
      },
      {
        id: "adj_order_13",
        question: "We saw a _____ _____ Chinese painting at the museum.",
        translation: "Vimos una pintura china antigua hermosa en el museo.",
        options: ["beautiful old", "old beautiful", "Chinese beautiful", "beautiful Chinese"],
        correct: "beautiful old",
        explanation: "Opinión (beautiful) + edad (old) + origen (Chinese). En español 'pintura china antigua hermosa' pone origen primero. Esta obra de arte oriental antigua exhibida en museo probablemente tiene siglos de historia y valor cultural inmenso que trasciende precio monetario."
      },
      {
        id: "adj_order_14",
        question: "She has _____ _____ _____ hair that everyone admires.",
        translation: "Ella tiene cabello rubio largo hermoso que todos admiran.",
        options: ["beautiful long blonde", "blonde long beautiful", "long beautiful blonde", "blonde beautiful long"],
        correct: "beautiful long blonde",
        explanation: "Opinión (beautiful) + longitud (long) + color (blonde). En español 'cabello rubio largo hermoso' invierte. Esta descripción de cabellera admirada probablemente requiere cuidado considerable para mantener salud y apariencia, siendo característica física que define primera impresión."
      },
      {
        id: "adj_order_15",
        question: "They own a _____ _____ _____ apartment in the city center.",
        translation: "Ellos son dueños de un apartamento moderno espacioso lujoso en el centro.",
        options: ["luxurious spacious modern", "modern spacious luxurious", "spacious modern luxurious", "spacious luxurious modern"],
        correct: "luxurious spacious modern",
        explanation: "Opinión (luxurious) + tamaño (spacious) + edad (modern). En español 'apartamento moderno espacioso lujoso' pone edad primero. Este apartamento triple-amenidad en centro urbano probablemente tiene precio premium pero ofrece combinación ideal de lujo, espacio y conveniencias modernas."
      }
    ]
  },

  despite_in_spite_of: {
    name: "Despite vs In Spite Of",
    description: "A pesar de - expresiones de contraste sinónimas",
    icon: Watch,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "despite_1",
        question: "_____ the rain, we went hiking in the mountains.",
        translation: "A pesar de la lluvia, fuimos de excursión a las montañas.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Usamos 'despite' DIRECTAMENTE con sustantivo (sin 'of'): 'despite the rain'. Es más conciso que 'in spite of'. En español 'a pesar de la lluvia' también va directo a sustantivo. Esta decisión de caminar bajo lluvia muestra determinación de no dejar que clima arruine planes de aventura natural."
      },
      {
        id: "despite_2",
        question: "_____ _____ _____ his age, he's very active and energetic.",
        translation: "A pesar de su edad, él es muy activo y energético.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Usamos 'in spite of' con sustantivo: es SINÓNIMO exacto de 'despite' pero tres palabras en lugar de una. En español 'a pesar de su edad' también usa frase. Esta vitalidad que desafía expectativas de edad muestra que números no determinan capacidad física ni entusiasmo por vida."
      },
      {
        id: "despite_3",
        question: "_____ being tired, I finished all my work today.",
        translation: "A pesar de estar cansado, terminé todo mi trabajo hoy.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con GERUNDIO usamos 'despite' o 'in spite of': 'despite being tired'. En español 'a pesar de estar' también usa infinitivo. Esta perseverancia de completar responsabilidades a pesar de fatiga muestra ética de trabajo fuerte y compromiso con cumplir obligaciones sin importar cómo te sientas."
      },
      {
        id: "despite_4",
        question: "_____ _____ _____ the warnings, they went swimming in the ocean.",
        translation: "A pesar de las advertencias, ellos fueron a nadar al océano.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Con plural 'warnings' usamos 'in spite of' o 'despite': ambos funcionan igual. En español 'a pesar de las advertencias' también ignora avisos. Esta decisión de nadar ignorando advertencias puede ser valentía o imprudencia dependiendo de naturaleza de los peligros mencionados."
      },
      {
        id: "despite_5",
        question: "_____ her busy schedule, she always makes time for family.",
        translation: "A pesar de su agenda ocupada, ella siempre hace tiempo para familia.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con posesivo + sustantivo usamos 'despite': 'despite her schedule'. En español 'a pesar de su agenda' también usa posesivo. Esta priorización de familia sobre trabajo ocupado muestra valores claros donde relaciones personales no se sacrifican completamente por demandas profesionales."
      },
      {
        id: "despite_6",
        question: "_____ _____ _____ what you said, I still disagree with you.",
        translation: "A pesar de lo que dijiste, aún no estoy de acuerdo contigo.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Con cláusula tipo 'what you said' usamos 'in spite of' o 'despite': ambos van con sustantivos o gerundios. En español 'a pesar de lo que dijiste' también va con cláusula nominal. Este desacuerdo persistente después de escuchar argumentos muestra que posiciones están firmemente establecidas."
      },
      {
        id: "despite_7",
        question: "_____ trying hard, he didn't pass the difficult exam.",
        translation: "A pesar de intentar duro, él no pasó el examen difícil.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con gerundio 'trying' usamos 'despite': esfuerzo no garantizó éxito. En español 'a pesar de intentar' también usa infinitivo. Esta situación donde dedicación no se tradujo en aprobación puede indicar que examen era excepcionalmente desafiante o que método de estudio necesita ajuste."
      },
      {
        id: "despite_8",
        question: "_____ _____ _____ the high cost, they decided to buy it.",
        translation: "A pesar del alto costo, ellos decidieron comprarlo.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Con artículo definido 'the cost' usamos 'in spite of' o 'despite': precio no impidió compra. En español 'a pesar del alto costo' también procede. Esta decisión de comprar pesar de precio elevado sugiere que valor percibido o necesidad del artículo superó objeción financiera."
      },
      {
        id: "despite_9",
        question: "_____ having no experience, she got the job offer.",
        translation: "A pesar de no tener experiencia, ella consiguió la oferta de trabajo.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con gerundio negativo 'not having' usamos 'despite': falta de experiencia no fue barrera. En español 'a pesar de no tener' también niega. Esta contratación sin experiencia previa sugiere que sus otras cualidades (actitud, potencial, educación) impresionaron suficiente para tomar riesgo."
      },
      {
        id: "despite_10",
        question: "_____ _____ _____ all our efforts, we failed to win.",
        translation: "A pesar de todos nuestros esfuerzos, fallamos en ganar.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Con 'all our efforts' usamos 'in spite of' o 'despite': esfuerzo total no produjo victoria. En español 'a pesar de todos nuestros esfuerzos' también lamenta. Esta derrota pesar de dedicación completa es decepción profunda pero también reconocimiento de que a veces dar todo no es suficiente."
      },
      {
        id: "despite_11",
        question: "_____ the difficulties, we completed the project on time.",
        translation: "A pesar de las dificultades, completamos el proyecto a tiempo.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con plural 'difficulties' usamos 'despite': obstáculos no impidieron completitud puntual. En español 'a pesar de las dificultades' también supera. Este éxito de terminar a tiempo pesar de problemas es logro que merece celebración, mostrando resiliencia y capacidad de equipo de adaptarse."
      },
      {
        id: "despite_12",
        question: "_____ _____ _____ feeling sick, she came to work anyway.",
        translation: "A pesar de sentirse enferma, ella vino a trabajar de todas formas.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Con gerundio 'feeling sick' usamos 'in spite of' o 'despite': enfermedad no detuvo asistencia. En español 'a pesar de sentirse enferma' también continúa. Esta dedicación de trabajar enfermo puede ser admirable o problemática dependiendo de si contagia a otros o empeora su propia salud."
      },
      {
        id: "despite_13",
        question: "_____ my fear, I gave the presentation successfully.",
        translation: "A pesar de mi miedo, di la presentación exitosamente.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con sustantivo abstracto 'fear' usamos 'despite': emoción no impidió acción. En español 'a pesar de mi miedo' también supera. Esta victoria sobre ansiedad de hablar público muestra coraje de actuar pesar de nervios, experiencia que probablemente aumenta confianza para futuras presentaciones."
      },
      {
        id: "despite_14",
        question: "_____ _____ _____ being late, he was allowed to enter the exam.",
        translation: "A pesar de llegar tarde, a él le permitieron entrar al examen.",
        options: ["In spite of", "Despite of", "Despite", "Although"],
        correct: "In spite of",
        explanation: "Con gerundio 'being late' usamos 'in spite of' o 'despite': tardanza fue perdonada. En español 'a pesar de llegar tarde' también recibe permiso. Esta flexibilidad de permitir entrada tardía es generosidad que no todos los examinadores mostrarían, dando segunda oportunidad valiosa."
      },
      {
        id: "despite_15",
        question: "_____ everything, I still love this city very much.",
        translation: "A pesar de todo, aún amo mucho esta ciudad.",
        options: ["Despite", "Despite of", "In spite", "Although"],
        correct: "Despite",
        explanation: "Con palabra general 'everything' usamos 'despite': todos los problemas no destruyen afecto. En español 'a pesar de todo' también es general. Esta lealtad urbana pesar de problemas (tráfico, costo, ruido) muestra apego emocional profundo que trasciende inconveniencias prácticas de vida citadina."
      }
    ]
  },

  so_such_intensifiers: {
    name: "So vs Such",
    description: "Tan vs tal - intensificadores con estructuras diferentes",
    icon: Briefcase,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "so_such_1",
        question: "She's _____ talented that everyone admires her skills!",
        translation: "Ella es tan talentosa que todos admiran sus habilidades.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con ADJETIVOS solos usamos 'so': 'so talented, so beautiful'. Enfatiza intensidad que causa resultado. En español 'tan talentosa que' también usa 'tan'. La estructura 'so...that' conecta intensidad con consecuencia, mostrando que su talento es TAN grande que naturalmente genera admiración universal."
      },
      {
        id: "so_such_2",
        question: "It was _____ _____ beautiful day that we stayed outside all afternoon.",
        translation: "Era un día tan hermoso que nos quedamos afuera toda la tarde.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con SUSTANTIVO SINGULAR contable usamos 'such a': 'such a beautiful day'. El adjetivo va entre 'such a' y sustantivo. En español 'un día tan hermoso' pone artículo primero. Este clima excepcional que motiva pasar todo el tiempo al aire libre es bendición que debe aprovecharse."
      },
      {
        id: "so_such_3",
        question: "He speaks _____ quickly that I can't understand him clearly.",
        translation: "Él habla tan rápido que no puedo entenderlo claramente.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con ADVERBIOS (quickly, slowly) usamos 'so': 'so quickly'. En español 'tan rápido que' también intensifica adverbio. Esta velocidad del habla excesiva crea barrera de comprensión que hace comunicación efectiva imposible, frustrando a oyente que quiere entender pero no puede procesar palabras."
      },
      {
        id: "so_such_4",
        question: "They're _____ nice people that everyone wants to be their friend.",
        translation: "Ellos son gente tan agradable que todos quieren ser su amigo.",
        options: ["such", "so", "such a", "very"],
        correct: "such",
        explanation: "Con SUSTANTIVO PLURAL usamos 'such' (sin 'a'): 'such nice people'. No va artículo con plurales. En español 'gente tan agradable' usa 'tan'. Esta popularidad basada en amabilidad genuina es resultado natural de tratar bien a otros, creando red social amplia."
      },
      {
        id: "so_such_5",
        question: "The movie was _____ boring that I fell asleep during it.",
        translation: "La película era tan aburrida que me quedé dormido durante ella.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con adjetivo solo 'boring' usamos 'so': intensifica al máximo. En español 'tan aburrida que' también intensifica. Esta película tan tediosa que induce sueño es fracaso cinematográfico total donde incluso personas que pagaron por verla no pueden mantener atención hasta el final."
      },
      {
        id: "so_such_6",
        question: "It's _____ _____ long journey that we need to rest halfway.",
        translation: "Es un viaje tan largo que necesitamos descansar a mitad de camino.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con sustantivo singular 'journey' usamos 'such a long journey'. En español 'un viaje tan largo' también necesita artículo. Esta distancia que requiere pausa intermedia reconoce límites de resistencia humana y necesidad de descanso para completar travesía de manera segura."
      },
      {
        id: "so_such_7",
        question: "She has _____ many friends that she can't invite all of them.",
        translation: "Ella tiene tantos amigos que no puede invitar a todos.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con 'many/much/few/little' usamos SIEMPRE 'so': 'so many friends'. Nunca 'such' con estos cuantificadores. En español 'tantos amigos' también cuantifica. Esta popularidad que excede capacidad de espacio de evento es problema de abundancia que requiere selección difícil de quién invitar."
      },
      {
        id: "so_such_8",
        question: "They had _____ _____ good time that they didn't want to leave.",
        translation: "Ellos la pasaron tan bien que no querían irse.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "La expresión idiomática es 'such a good time': experiencia tan placentera. En español 'la pasaron tan bien' usa 'tan'. Esta experiencia tan positiva que genera resistencia a terminarla indica que evento o lugar superó expectativas, creando memorias que querrán repetir."
      },
      {
        id: "so_such_9",
        question: "The test was _____ difficult that most students failed it.",
        translation: "El examen era tan difícil que la mayoría de los estudiantes reprobaron.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con adjetivo 'difficult' solo usamos 'so': intensidad extrema. En español 'tan difícil que' también causa falla. Este nivel de dificultad que resulta en fracaso masivo sugiere que examen fue injustamente difícil o que instrucción previa fue inadecuada para preparar estudiantes."
      },
      {
        id: "so_such_10",
        question: "It was _____ _____ horrible experience that I never want to repeat it.",
        translation: "Fue una experiencia tan horrible que nunca quiero repetirla.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con sustantivo singular 'experience' usamos 'such a horrible experience'. En español 'una experiencia tan horrible' también traumatiza. Esta vivencia tan negativa que genera determinación de evitarla para siempre probablemente dejó impacto emocional que durará largo tiempo."
      },
      {
        id: "so_such_11",
        question: "He's _____ lucky to have such supportive friends around him.",
        translation: "Él es tan afortunado de tener amigos tan solidarios a su alrededor.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con adjetivo 'lucky' usamos 'so': intensifica fortuna. En español 'tan afortunado' también intensifica. Esta gratitud por red de apoyo reconoce que tener amigos que realmente apoyan es bendición que no todos tienen, siendo recurso valioso en tiempos difíciles."
      },
      {
        id: "so_such_12",
        question: "There was _____ _____ noise that we couldn't hear ourselves talk.",
        translation: "Había tanto ruido que no podíamos escucharnos hablar.",
        options: ["so much", "such a", "such", "so many"],
        correct: "so much",
        explanation: "Con incontable 'noise' usamos 'so much': cantidad excesiva. En español 'tanto ruido que' también excede. Este volumen de sonido que impide comunicación básica es situación extremadamente molesta que requiere mudarse a lugar más tranquilo o pedir reducción de ruido."
      },
      {
        id: "so_such_13",
        question: "She's _____ _____ kind person that she helps everyone around her.",
        translation: "Ella es una persona tan amable que ayuda a todos a su alrededor.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con 'person' (sustantivo) usamos 'such a kind person'. En español 'una persona tan amable' también describe. Esta bondad que se extiende universalmente a todos sin distinción es cualidad rara y valiosa que hace a esta persona pilar de su comunidad."
      },
      {
        id: "so_such_14",
        question: "The food was _____ delicious that we ordered more of it.",
        translation: "La comida era tan deliciosa que ordenamos más de ella.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con adjetivo 'delicious' usamos 'so': sabor tan bueno motiva repetir. En español 'tan deliciosa que' también motiva. Esta calidad culinaria que genera deseo de continuar comiendo pesar de estar satisfecho es señal de cocina excepcional que vale la pena pagar extra."
      },
      {
        id: "so_such_15",
        question: "We had _____ _____ problems that we almost gave up completely.",
        translation: "Tuvimos tantos problemas que casi nos rendimos completamente.",
        options: ["so many", "such a", "such", "so much"],
        correct: "so many",
        explanation: "Con contable plural 'problems' usamos 'so many': cantidad abrumadora. En español 'tantos problemas que' también abruma. Esta acumulación de dificultades que casi causa rendición muestra que perseverar requirió fuerza extraordinaria y que estuvieron muy cerca de abandonar."
      }
    ]
  },

  no_none_any: {
    name: "No, None, Any",
    description: "Negaciones múltiples - ausencia total vs parcial",
    icon: Watch,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "no_none_1",
        question: "There are _____ apples left in the basket at all.",
        translation: "No quedan manzanas en la canasta para nada.",
        options: ["no", "none", "not any", "any"],
        correct: "no",
        explanation: "Antes de SUSTANTIVO usamos 'no': 'no apples left'. Es negación directa sin verbo auxiliar negativo. En español 'no quedan manzanas' también niega. Esta ausencia total de fruta requiere compra inmediata si las necesitas o cambio de menú para receta que las requería como ingrediente."
      },
      {
        id: "no_none_2",
        question: "_____ of the students passed the extremely difficult exam.",
        translation: "Ninguno de los estudiantes pasó el examen extremadamente difícil.",
        options: ["None", "No", "Not any", "Any"],
        correct: "None",
        explanation: "Para 'ninguno de' usamos 'none of': pronombre que reemplaza sustantivo. En español 'ninguno de los estudiantes' también usa pronombre. Esta falla colectiva total sugiere que examen fue injustamente difícil o que hubo desconexión seria entre material enseñado y contenido evaluado."
      },
      {
        id: "no_none_3",
        question: "I don't have _____ money with me right now.",
        translation: "No tengo nada de dinero conmigo ahora mismo.",
        options: ["any", "no", "none", "some"],
        correct: "any",
        explanation: "En NEGATIVO con 'don't' usamos 'any': 'don't have any money'. No usamos 'no' porque 'don't' ya niega. En español 'no tengo dinero' usa una sola negación. Esta falta de efectivo inmediato puede requerir usar tarjeta, pedir prestado o posponer compra."
      },
      {
        id: "no_none_4",
        question: "_____ was hurt in the accident fortunately for everyone.",
        translation: "Nadie resultó herido en el accidente afortunadamente para todos.",
        options: ["No one", "None", "Not anyone", "Any one"],
        correct: "No one",
        explanation: "Para PERSONAS usamos 'no one' (nadie): dos palabras. También 'nobody'. En español 'nadie resultó herido' también es singular. Este resultado milagroso de accidente sin lesiones es enorme alivio que hace situación mucho menos grave de lo que pudo haber sido."
      },
      {
        id: "no_none_5",
        question: "There's _____ time to lose - we must hurry immediately!",
        translation: "No hay tiempo que perder - ¡debemos apurarnos inmediatamente!",
        options: ["no", "none", "not any", "any"],
        correct: "no",
        explanation: "Antes de sustantivo incontable 'time' usamos 'no time': negación directa. En español 'no hay tiempo' también niega. Esta urgencia extrema que no permite demora alguna crea presión de actuar instantáneamente sin pausas para deliberación o preparación adicional."
      },
      {
        id: "no_none_6",
        question: "_____ of this makes sense to me at all right now.",
        translation: "Nada de esto tiene sentido para mí para nada ahora mismo.",
        options: ["None", "No", "Not any", "Any"],
        correct: "None",
        explanation: "Para 'nada de esto' usamos 'none of this': pronombre que refiere a cosas. En español 'nada de esto' también generaliza. Esta confusión total donde nada es comprensible indica que explicación fue inadecuada o que concepto es muy complejo, requiriendo re-explicación más clara."
      },
      {
        id: "no_none_7",
        question: "I haven't seen _____ of my old friends recently at all.",
        translation: "No he visto a ninguno de mis viejos amigos recientemente para nada.",
        options: ["any", "no", "none", "some"],
        correct: "any",
        explanation: "Con 'haven't' (negativo) usamos 'any of': doble negación no funciona en inglés estándar. En español 'no he visto a ninguno' usa doble negativo. Esta ausencia de contacto con amistades antiguas puede ser por mudanza, cambios de vida o simplemente que conexiones se debilitaron con tiempo."
      },
      {
        id: "no_none_8",
        question: "_____ _____ was home when I arrived there this afternoon.",
        translation: "Nadie estaba en casa cuando llegué ahí esta tarde.",
        options: ["No one", "None", "Not anyone", "Any one"],
        correct: "No one",
        explanation: "Para ausencia de PERSONAS usamos 'no one': casa vacía. En español 'nadie estaba' también niega presencia. Esta llegada a casa vacía puede ser esperada (todos trabajan) o inesperada (esperabas encontrar alguien), creando soledad o preocupación dependiendo del contexto."
      },
      {
        id: "no_none_9",
        question: "There are _____ good restaurants in this neighborhood unfortunately.",
        translation: "No hay buenos restaurantes en este vecindario desafortunadamente.",
        options: ["no", "none", "not any", "any"],
        correct: "no",
        explanation: "Antes de 'restaurants' (sustantivo) usamos 'no good restaurants'. En español 'no hay buenos restaurantes' también niega. Esta falta de opciones gastronómicas de calidad en área es inconveniencia que requiere viajar lejos para comer bien fuera de casa."
      },
      {
        id: "no_none_10",
        question: "_____ of the answers were correct on the test paper.",
        translation: "Ninguna de las respuestas eran correctas en el examen.",
        options: ["None", "No", "Not any", "Any"],
        correct: "None",
        explanation: "Para 'ninguna de las respuestas' usamos 'none of the answers'. En español 'ninguna de las respuestas' también usa pronombre. Este resultado de cero respuestas correctas es devastador y puede indicar que estudiante no estudió nada o que entendió mal completamente el material."
      },
      {
        id: "no_none_11",
        question: "I don't want _____ help with this project - I can do it alone.",
        translation: "No quiero ninguna ayuda con este proyecto - puedo hacerlo solo.",
        options: ["any", "no", "none", "some"],
        correct: "any",
        explanation: "Con 'don't want' (negativo) usamos 'any help'. En español 'no quiero ninguna ayuda' usa doble negativo. Esta independencia de rechazar asistencia puede ser orgullo, confianza en habilidades propias, o simplemente preferencia por trabajar sin colaboración que complica proceso."
      },
      {
        id: "no_none_12",
        question: "_____ _____ called while I was out this morning at all.",
        translation: "Nadie llamó mientras estuve fuera esta mañana para nada.",
        options: ["No one", "None", "Not anyone", "Any one"],
        correct: "No one",
        explanation: "Para ausencia de llamadas de PERSONAS usamos 'no one called'. En español 'nadie llamó' también niega. Esta falta de comunicación durante ausencia puede ser alivio (sin problemas urgentes) o decepción (esperabas llamada importante que no llegó)."
      },
      {
        id: "no_none_13",
        question: "There's _____ milk in the refrigerator right now - it's empty.",
        translation: "No hay leche en el refrigerador ahora mismo - está vacío.",
        options: ["no", "none", "not any", "any"],
        correct: "no",
        explanation: "Antes de sustantivo incontable 'milk' usamos 'no milk'. En español 'no hay leche' también niega. Esta ausencia de lácteo básico requiere ajustar plan de desayuno o hacer compra urgente si el café con leche matutino es ritual no negociable."
      },
      {
        id: "no_none_14",
        question: "_____ of us knew the answer to that question initially.",
        translation: "Ninguno de nosotros sabía la respuesta a esa pregunta inicialmente.",
        options: ["None", "No", "Not any", "Any"],
        correct: "None",
        explanation: "Para 'ninguno de nosotros' usamos 'none of us': grupo completo ignorante. En español 'ninguno de nosotros' también usa pronombre. Esta ignorancia colectiva sobre pregunta probablemente motivó investigación grupal para encontrar respuesta juntos, convirtiendo desconocimiento en oportunidad de aprendizaje colaborativo."
      },
      {
        id: "no_none_15",
        question: "I haven't eaten _____ today because I'm fasting now.",
        translation: "No he comido nada hoy porque estoy ayunando ahora.",
        options: ["anything", "nothing", "something", "everything"],
        correct: "anything",
        explanation: "Con 'haven't eaten' (negativo) usamos 'anything': no doble negativo. En español 'no he comido nada' sí usa doble. Este ayuno intencional puede ser religioso, médico o de salud, representando disciplina de abstenerse voluntariamente de alimento pesar de hambre natural."
      }
    ]
  }
};

export default part28Categories;