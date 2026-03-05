/**
 * SPANISH → ENGLISH GRAMMAR - PART 18
 * 4 categories, 15 questions each
 */

import { Cookie, Rocket, Flower, Crown } from "lucide-react";

export const part18Categories = {
  few_little_lot: {
    name: "A few, A little, A lot of",
    description: "Cantidades pequeñas y grandes - matices positivos/negativos",
    icon: Cookie,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "quant_nuance_1",
        question: "I have _____ _____ friends who can help me with this.",
        translation: "Tengo algunos amigos que pueden ayudarme con esto.",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "Usamos 'a few' (algunos/unos pocos) con contables cuando la cantidad es PEQUEÑA pero SUFICIENTE y POSITIVA. Es opuesto de 'few' (pocos) que es negativo. En español 'algunos amigos' también es positivo. Esta frase reconoce que aunque no son muchos, los amigos disponibles son suficientes para la ayuda necesitada."
      },
      {
        id: "quant_nuance_2",
        question: "There's _____ _____ milk left - enough for one coffee.",
        translation: "Queda un poco de leche - suficiente para un café.",
        options: ["a little", "little", "a few", "few"],
        correct: "a little",
        explanation: "Usamos 'a little' (un poco de) con incontables cuando la cantidad es PEQUEÑA pero SUFICIENTE. Es opuesto de 'little' (poco) que implica insuficiencia. En español 'un poco de leche' también es positivo. La especificación 'enough for one coffee' confirma que aunque poca, la cantidad sirve para el propósito."
      },
      {
        id: "quant_nuance_3",
        question: "Very _____ people attended the meeting unfortunately.",
        translation: "Muy pocas personas asistieron a la reunión desafortunadamente.",
        options: ["few", "a few", "little", "a little"],
        correct: "few",
        explanation: "Usamos 'few' (pocos - negativo) con contables cuando queremos enfatizar ESCASEZ problemática. El adverbio 'very' intensifica. En español 'muy pocas personas' también es negativo. Esta baja asistencia decepcionante puede indicar falta de interés, mala comunicación o programación inconveniente."
      },
      {
        id: "quant_nuance_4",
        question: "We have _____ _____ time before the train leaves - hurry!",
        translation: "Tenemos poco tiempo antes de que salga el tren - ¡apúrate!",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "Usamos 'little' (poco - negativo) con incontables cuando la cantidad es INSUFICIENTE o preocupante. El imperativo 'hurry' confirma la urgencia. En español 'poco tiempo' también es negativo. Esta escasez temporal crea presión para moverse rápido y no perder el transporte."
      },
      {
        id: "quant_nuance_5",
        question: "She gave me _____ _____ _____ useful advice about the job.",
        translation: "Ella me dio muchos consejos útiles sobre el trabajo.",
        options: ["a lot of", "a few", "a little", "many"],
        correct: "a lot of",
        explanation: "Para gran cantidad (contables o incontables) usamos 'a lot of': 'a lot of advice'. Es versátil y funciona con ambos tipos. En español 'muchos consejos' también indica abundancia. Esta generosidad de compartir orientación extensiva sobre empleo muestra voluntad genuina de ayudar al éxito profesional."
      },
      {
        id: "quant_nuance_6",
        question: "There are _____ _____ reasons why I don't want to go.",
        translation: "Hay algunas razones por las que no quiero ir.",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "Con 'a few reasons' indicamos que existen VARIAS razones (positivo en cantidad aunque el sentimiento sea negativo). En español 'algunas razones' también cuenta múltiples motivos. Esta explicación de renuencia sugiere que la decisión de no ir está bien fundamentada en múltiples consideraciones."
      },
      {
        id: "quant_nuance_7",
        question: "He has _____ patience for people who are always late.",
        translation: "Él tiene poca paciencia con personas que siempre llegan tarde.",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "Con incontable 'patience' usamos 'little' (poco - negativo) cuando es CASI NADA. Expresa baja tolerancia. En español 'poca paciencia' también es escasa. Esta admisión de intolerancia para impuntualidad crónica establece expectativa clara de que tardanzas repetidas no serán bien recibidas."
      },
      {
        id: "quant_nuance_8",
        question: "We spent _____ _____ _____ money on vacation this summer.",
        translation: "Gastamos mucho dinero en vacaciones este verano.",
        options: ["a lot of", "a little", "a few", "many"],
        correct: "a lot of",
        explanation: "Para cantidades grandes de incontables (money) usamos 'a lot of'. Es neutral sobre si es bueno o malo. En español 'mucho dinero' también indica cantidad sustancial. Este gasto vacacional significativo puede ser inversión en experiencias memorables o quizás exceso que requiere ajuste presupuestario posterior."
      },
      {
        id: "quant_nuance_9",
        question: "I need _____ _____ help with moving these boxes upstairs.",
        translation: "Necesito un poco de ayuda con mover estas cajas escaleras arriba.",
        options: ["a little", "little", "a few", "few"],
        correct: "a little",
        explanation: "Con incontable 'help' usamos 'a little' cuando necesitas cantidad pequeña pero SUFICIENTE. Es positivo. En español 'un poco de ayuda' también pide asistencia modesta. Esta petición humilde reconoce que no necesitas mucha ayuda, solo asistencia breve para tarea física específica."
      },
      {
        id: "quant_nuance_10",
        question: "Very _____ information is available about this topic online.",
        translation: "Muy poca información está disponible sobre este tema en línea.",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "Con incontable 'information' usamos 'little' (poco - negativo) cuando es ESCASA problemáticamente. 'Very' intensifica la escasez. En español 'muy poca información' también lamenta. Esta falta de recursos digitales es frustrante en era donde esperamos encontrar todo online."
      },
      {
        id: "quant_nuance_11",
        question: "She has _____ _____ good ideas for improving the project.",
        translation: "Ella tiene algunas buenas ideas para mejorar el proyecto.",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "Con 'a few ideas' (contable) indicamos cantidad pequeña PERO VALIOSA. Es positivo. En español 'algunas buenas ideas' también aprecia. Esta contribución de sugerencias útiles aunque limitadas en número muestra pensamiento constructivo que puede significativamente mejorar el trabajo."
      },
      {
        id: "quant_nuance_12",
        question: "There's _____ hope of finding survivors after so many days.",
        translation: "Hay poca esperanza de encontrar sobrevivientes después de tantos días.",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "Con 'hope' (incontable) usamos 'little' para expresar ESCASEZ descorazonadora. Es evaluación sombría. En español 'poca esperanza' también es pesimista. Esta situación de rescate después de tiempo prolongado tristemente reduce probabilidad de encontrar personas vivas, pero no elimina completamente la posibilidad."
      },
      {
        id: "quant_nuance_13",
        question: "I've made _____ _____ mistakes in my life that I regret.",
        translation: "He cometido algunos errores en mi vida que lamento.",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "Con 'a few mistakes' (contable) admitimos errores PERO en cantidad razonable. Es honesto pero no dramático. En español 'algunos errores' también es moderado. Esta reflexión muestra auto-conciencia donde reconocemos imperfecciones pasadas sin ser devastadoramente autocríticos."
      },
      {
        id: "quant_nuance_14",
        question: "He showed _____ interest in learning about the topic.",
        translation: "Él mostró poco interés en aprender sobre el tema.",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "Con 'interest' (incontable) usamos 'little' para FALTA de entusiasmo (negativo). Sin 'a' es más negativo. En español 'poco interés' también es desinterés. Esta apatía sobre tema educativo puede indicar que no ve relevancia o simplemente que el tema no le atrae."
      },
      {
        id: "quant_nuance_15",
        question: "We have _____ _____ _____ work to do before the deadline.",
        translation: "Tenemos mucho trabajo que hacer antes de la fecha límite.",
        options: ["a lot of", "a few", "a little", "many"],
        correct: "a lot of",
        explanation: "Para gran cantidad de incontable 'work' usamos 'a lot of'. Indica carga laboral sustancial. En español 'mucho trabajo' también es abundante. Esta presión de deadline con volumen alto de tareas pendientes crea estrés que requiere organización eficiente y posiblemente horas extra para cumplir a tiempo."
      }
    ]
  },

  used_to_get_accustomed: {
    name: "Used to vs Be/Get Used to",
    description: "Hábitos pasados vs acostumbrarse - diferencias críticas",
    icon: Rocket,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "used_accust_1",
        question: "I _____ _____ live in Paris when I was younger.",
        translation: "Solía vivir en París cuando era más joven.",
        options: ["used to", "am used to", "get used to", "was used to"],
        correct: "used to",
        explanation: "Para hábitos o estados PASADOS que ya no existen usamos 'used to' + infinitivo: 'used to live'. En español 'solía vivir' o imperfecto 'vivía' expresan esto. Esta estructura específicamente marca que es algo que HACÍAS antes pero YA NO HACES, diferente de 'be used to' que es sobre estar acostumbrado."
      },
      {
        id: "used_accust_2",
        question: "I'm _____ _____ getting up early for work now.",
        translation: "Estoy acostumbrado a levantarme temprano para el trabajo ahora.",
        options: ["used to", "use to", "get used to", "got used to"],
        correct: "used to",
        explanation: "Para expresar que algo es FAMILIAR o estás ACOSTUMBRADO actualmente usamos 'be used to' + gerundio: 'am used to getting up'. En español 'estoy acostumbrado a' también usa infinitivo. Esta estructura es completamente diferente de 'used to' (hábito pasado) - aquí habla de adaptación presente a situación."
      },
      {
        id: "used_accust_3",
        question: "She needs to _____ _____ _____ the cold weather here.",
        translation: "Ella necesita acostumbrarse al clima frío aquí.",
        options: ["get used to", "used to", "be used to", "use to"],
        correct: "get used to",
        explanation: "Para PROCESO de acostumbrarse (adaptación en curso) usamos 'get used to' + gerundio/sustantivo: 'get used to the cold weather'. En español 'acostumbrarse al' también es proceso. Esta es acción de adaptación, diferente de 'be used to' que es ESTADO de ya estar acostumbrado."
      },
      {
        id: "used_accust_4",
        question: "We _____ _____ play in this park every weekend as kids.",
        translation: "Solíamos jugar en este parque cada fin de semana cuando éramos niños.",
        options: ["used to", "are used to", "get used to", "were used to"],
        correct: "used to",
        explanation: "Para actividad repetida PASADA que terminó usamos 'used to' + infinitivo: 'used to play'. En español 'solíamos jugar' o 'jugábamos' (imperfecto) son equivalentes. Esta nostalgia de infancia evoca memorias de juego libre en parque que era rutina regular de niñez ya pasada."
      },
      {
        id: "used_accust_5",
        question: "Are you _____ _____ working night shifts at hospital?",
        translation: "¿Estás acostumbrado a trabajar turnos nocturnos en el hospital?",
        options: ["used to", "use to", "get used to", "got used to"],
        correct: "used to",
        explanation: "Pregunta sobre ESTADO actual de familiaridad usa 'be used to' + gerundio: 'Are you used to working'. En español '¿estás acostumbrado a trabajar?' también pregunta sobre adaptación. Los turnos nocturnos requieren ajuste circadiano significativo, y esta pregunta verifica si ya completaste esa adaptación difícil."
      },
      {
        id: "used_accust_6",
        question: "He didn't _____ _____ drink coffee before moving to Italy.",
        translation: "Él no solía tomar café antes de mudarse a Italia.",
        options: ["use to", "used to", "be used to", "get used to"],
        correct: "use to",
        explanation: "En NEGATIVO o PREGUNTA con 'did' usamos 'use to' SIN 'd': 'didn't use to drink'. El 'did' ya marca pasado. En español 'no solía tomar' también niega hábito pasado. Esta ausencia de consumo de café antes de Italia sugiere que la cultura italiana lo convirtió en bebedor de café."
      },
      {
        id: "used_accust_7",
        question: "I'm slowly _____ _____ _____ the noise from traffic.",
        translation: "Lentamente me estoy acostumbrando al ruido del tráfico.",
        options: ["getting used to", "used to", "being used to", "use to"],
        correct: "getting used to",
        explanation: "Para proceso de adaptación EN CURSO usamos 'get used to' en continuo: 'getting used to the noise'. El adverbio 'slowly' enfatiza la gradualidad. En español 'me estoy acostumbrando' también es progresivo. Esta adaptación al ruido urbano es necesaria pero puede tomar tiempo antes de que deje de molestar."
      },
      {
        id: "used_accust_8",
        question: "They _____ _____ have a dog, but it passed away.",
        translation: "Ellos solían tener un perro, pero falleció.",
        options: ["used to", "are used to", "get used to", "were used to"],
        correct: "used to",
        explanation: "Para posesión PASADA que terminó usamos 'used to' + have: 'used to have a dog'. En español 'solían tener' o 'tenían' también marca posesión pasada perdida. Esta mención de mascota fallecida explica ausencia actual y puede evocar tristeza por pérdida del compañero animal."
      },
      {
        id: "used_accust_9",
        question: "You'll soon _____ _____ _____ your new job responsibilities.",
        translation: "Pronto te acostumbrarás a tus nuevas responsabilidades laborales.",
        options: ["get used to", "used to", "be used to", "use to"],
        correct: "get used to",
        explanation: "Para adaptación FUTURA que ocurrirá usamos futuro de 'get used to': 'will get used to'. Es predicción tranquilizadora. En español 'te acostumbrarás a' también es futuro. Esta seguridad sobre adaptación venidera calma ansiedad sobre nuevo rol que inicialmente puede parecer abrumador."
      },
      {
        id: "used_accust_10",
        question: "I'm not _____ _____ speaking in public yet - it's scary.",
        translation: "No estoy acostumbrado a hablar en público todavía - es aterrador.",
        options: ["used to", "use to", "get used to", "got used to"],
        correct: "used to",
        explanation: "Negativo de ESTADO actual de familiaridad es 'not used to' + gerundio: 'not used to speaking'. La palabra 'yet' indica que es proceso. En español 'no estoy acostumbrado a' también expresa incomodidad. Esta admisión honesta de miedo a hablar público es común; muchos luchan con esta ansiedad social."
      },
      {
        id: "used_accust_11",
        question: "She _____ _____ _____ living alone after a few months.",
        translation: "Ella se acostumbró a vivir sola después de unos meses.",
        options: ["got used to", "used to", "was used to", "use to"],
        correct: "got used to",
        explanation: "Para completar proceso de adaptación en PASADO usamos 'got used to' (pasado de get): 'got used to living alone'. En español 'se acostumbró a' también es pasado de adaptación. Los primeros meses solos son desafío, pero esta estructura muestra que eventualmente la soledad se volvió cómoda."
      },
      {
        id: "used_accust_12",
        question: "Did you _____ _____ exercise regularly before joining gym?",
        translation: "¿Solías hacer ejercicio regularmente antes de unirte al gimnasio?",
        options: ["use to", "used to", "be used to", "get used to"],
        correct: "use to",
        explanation: "En pregunta con 'did' usamos 'use to' SIN 'd': 'Did you use to exercise'. En español '¿solías hacer ejercicio?' también pregunta hábito pasado. Esta consulta sobre rutina de fitness previa establece línea base para entender si el gimnasio es nuevo hábito o continuación mejorada."
      },
      {
        id: "used_accust_13",
        question: "He's _____ _____ the spicy food in this country now.",
        translation: "Él está acostumbrado a la comida picante en este país ahora.",
        options: ["used to", "use to", "get used to", "got used to"],
        correct: "used to",
        explanation: "Para ESTADO completado de estar acostumbrado usamos 'be used to' + sustantivo/gerundio: 'is used to the spicy food'. La palabra 'now' indica que la adaptación ya ocurrió. En español 'está acostumbrado a' también es estado presente. Su paladar finalmente se ajustó al nivel de picante local."
      },
      {
        id: "used_accust_14",
        question: "There _____ _____ be a restaurant here years ago.",
        translation: "Solía haber un restaurante aquí hace años.",
        options: ["used to", "was used to", "got used to", "use to"],
        correct: "used to",
        explanation: "Para existencia PASADA que desapareció usamos 'there used to be': combinación de 'there' con 'used to'. En español 'solía haber' también marca existencia perdida. Esta memoria de establecimiento que cerró evoca nostalgia por lugares familiares que formaban parte del vecindario pero ya no existen."
      },
      {
        id: "used_accust_15",
        question: "It took me months to _____ _____ _____ driving on the left.",
        translation: "Me tomó meses acostumbrarme a manejar por la izquierda.",
        options: ["get used to", "used to", "be used to", "use to"],
        correct: "get used to",
        explanation: "Para expresar TIEMPO que tomó el proceso de adaptación usamos infinitivo 'to get used to': 'took months to get used to'. En español 'acostumbrarme a' también es infinitivo. Esta dificultad de ajustarse a reglas de tránsito opuestas es desafío real para quienes se mudan entre países con diferentes lados de conducción."
      }
    ]
  },

  unless_provided_as_long_as: {
    name: "Unless, Provided, As Long As",
    description: "Condiciones y restricciones - condicionales alternativos",
    icon: Flower,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "cond_alt_1",
        question: "I won't go _____ you come with me tomorrow.",
        translation: "No iré a menos que vengas conmigo mañana.",
        options: ["unless", "if", "provided", "as long as"],
        correct: "unless",
        explanation: "Usamos 'unless' (a menos que) para condición NEGATIVA: significa 'if not'. Es equivalente a 'if you don't come' pero más conciso. En español 'a menos que' también introduce condición negativa. Esta declaración de dependencia mutua sugiere que la compañía es requisito para la participación."
      },
      {
        id: "cond_alt_2",
        question: "You can borrow my car _____ _____ _____ you drive carefully.",
        translation: "Puedes pedir prestado mi auto siempre y cuando manejes cuidadosamente.",
        options: ["as long as", "unless", "if not", "provided not"],
        correct: "as long as",
        explanation: "Usamos 'as long as' (siempre y cuando/con tal de que) para condición POSITIVA que debe cumplirse. Es requisito para permiso. En español 'siempre y cuando' también establece condición. Esta precaución sobre conducción cuidadosa protege vehículo valioso mientras permite generosidad de préstamo."
      },
      {
        id: "cond_alt_3",
        question: "_____ it rains, we'll have the party outside in garden.",
        translation: "A menos que llueva, tendremos la fiesta afuera en el jardín.",
        options: ["Unless", "If", "Provided", "As long as"],
        correct: "Unless",
        explanation: "Para excepción que cambiaría planes usamos 'unless': 'unless it rains' = 'if it doesn't rain'. En español 'a menos que llueva' también es condición negativa. Esta planificación de evento al aire libre con contingencia para mal tiempo muestra previsión razonable sobre factor impredecible."
      },
      {
        id: "cond_alt_4",
        question: "You can stay here _____ you help with the housework.",
        translation: "Puedes quedarte aquí siempre que ayudes con las tareas domésticas.",
        options: ["provided", "unless", "if not", "except"],
        correct: "provided",
        explanation: "Usamos 'provided (that)' (siempre que/con tal de que) para establecer condición REQUERIDA. Es sinónimo de 'as long as' pero más formal. En español 'siempre que' también condiciona. Esta negociación de alojamiento a cambio de ayuda establece expectativa clara de contribución mutua."
      },
      {
        id: "cond_alt_5",
        question: "I'll help you _____ you promise to study harder next time.",
        translation: "Te ayudaré siempre y cuando prometas estudiar más duro la próxima vez.",
        options: ["as long as", "unless", "provided not", "if not"],
        correct: "as long as",
        explanation: "Para ayuda condicional basada en compromiso futuro usamos 'as long as': establece términos del apoyo. En español 'siempre y cuando' también condiciona ayuda. Esta negociación educativa vincula asistencia presente con promesa de mejor esfuerzo futuro, enseñando responsabilidad."
      },
      {
        id: "cond_alt_6",
        question: "_____ we leave now, we'll miss the beginning of movie.",
        translation: "A menos que salgamos ahora, perderemos el inicio de la película.",
        options: ["Unless", "If", "Provided", "As long as"],
        correct: "Unless",
        explanation: "Para urgencia donde FALTA de acción causa problema usamos 'unless': 'unless we leave' = 'if we don't leave'. En español 'a menos que salgamos' también urge. Esta presión temporal para salida inmediata crea sentido de urgencia motivando acción rápida para evitar consecuencia negativa."
      },
      {
        id: "cond_alt_7",
        question: "She'll come to the party _____ she's not feeling sick.",
        translation: "Ella vendrá a la fiesta siempre que no se sienta enferma.",
        options: ["provided", "unless", "as long as", "if only"],
        correct: "provided",
        explanation: "Para compromiso condicional basado en salud usamos 'provided': 'provided she's not sick'. Es condición razonable. En español 'siempre que no' también establece excepción. Esta respuesta tentativa a invitación reconoce que salud puede cambiar impredeciblemente y afectar capacidad de asistir."
      },
      {
        id: "cond_alt_8",
        question: "_____ you finish your vegetables, you can't have dessert.",
        translation: "A menos que termines tus vegetales, no puedes tener postre.",
        options: ["Unless", "If", "Provided", "As long as"],
        correct: "Unless",
        explanation: "Para establecer consecuencia negativa si no se cumple condición usamos 'unless': es ultimátum. En español 'a menos que' también establece requisito. Esta táctica parental común de condicionar postre a comer saludable intenta enseñar nutrición aunque efectividad es debatible."
      },
      {
        id: "cond_alt_9",
        question: "We can go swimming _____ _____ _____ the weather stays nice.",
        translation: "Podemos ir a nadar siempre y cuando el clima se mantenga lindo.",
        options: ["as long as", "unless", "provided not", "if not"],
        correct: "as long as",
        explanation: "Para actividad dependiente de condición favorable continuada usamos 'as long as': mientras la condición se mantenga. En español 'siempre y cuando' también depende de condición sostenida. Esta planificación de natación subordinada a clima requiere flexibilidad para cambiar planes si condiciones se deterioran."
      },
      {
        id: "cond_alt_10",
        question: "_____ you apologize, I won't forgive you for that.",
        translation: "A menos que te disculpes, no te perdonaré por eso.",
        options: ["Unless", "If", "Provided", "As long as"],
        correct: "Unless",
        explanation: "Para ultimátum emocional usamos 'unless': exige acción específica para reconciliación. En español 'a menos que te disculpes' también establece condición para perdón. Esta posición firme comunica que la disculpa no es opcional sino necesaria para reparar relación dañada."
      },
      {
        id: "cond_alt_11",
        question: "You can use my phone _____ you don't make long calls.",
        translation: "Puedes usar mi teléfono siempre que no hagas llamadas largas.",
        options: ["provided", "unless", "if only", "except"],
        correct: "provided",
        explanation: "Para permiso con restricción específica usamos 'provided that': establece límite de uso. En español 'siempre que no' también restringe. Esta generosidad de préstamo con límite razonable protege contra abuso mientras ayuda a quien necesita hacer contacto breve."
      },
      {
        id: "cond_alt_12",
        question: "_____ you hurry, you'll be late for your appointment!",
        translation: "A menos que te apures, llegarás tarde a tu cita.",
        options: ["Unless", "If", "Provided", "As long as"],
        correct: "Unless",
        explanation: "Para advertencia urgente sobre consecuencia de inacción usamos 'unless': si no te apuras, serás tarde. En español 'a menos que te apures' también advierte. Esta presión sobre tiempo requiere acción inmediata para evitar tardanza que podría tener consecuencias negativas profesionales o personales."
      },
      {
        id: "cond_alt_13",
        question: "I'll support your decision _____ _____ _____ it makes you happy.",
        translation: "Apoyaré tu decisión siempre y cuando te haga feliz.",
        options: ["as long as", "unless", "provided not", "if not"],
        correct: "as long as",
        explanation: "Para apoyo condicional basado en bienestar emocional usamos 'as long as': tu felicidad es criterio. En español 'siempre y cuando' también prioriza felicidad. Esta declaración de apoyo paternal o de pareja subordina aprobación a resultado emocional positivo, mostrando que lo importante es tu bienestar."
      },
      {
        id: "cond_alt_14",
        question: "_____ the weather improves, the game will be cancelled.",
        translation: "A menos que el clima mejore, el juego será cancelado.",
        options: ["Unless", "If", "Provided", "As long as"],
        correct: "Unless",
        explanation: "Para decisión que depende de mejora de condición usamos 'unless': sin mejora hay cancelación. En español 'a menos que mejore' también condiciona. Esta contingencia meteorológica es común en deportes al aire libre donde seguridad de jugadores depende de condiciones climáticas aceptables."
      },
      {
        id: "cond_alt_15",
        question: "You're welcome to visit _____ you call ahead first.",
        translation: "Eres bienvenido a visitar siempre que llames antes primero.",
        options: ["provided", "unless", "if not", "except"],
        correct: "provided",
        explanation: "Para hospitalidad con cortesía requerida usamos 'provided': llamar antes es condición razonable. En español 'siempre que llames' también requiere aviso. Esta expectativa de coordinación previa es cortesía social básica que permite al anfitrión prepararse y asegurar disponibilidad."
      }
    ]
  },

  singular_plural_agreement: {
    name: "Concordancia Singular/Plural",
    description: "Sujetos complejos y concordancia verbal",
    icon: Crown,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "agr_1",
        question: "Everyone _____ their own opinion about this matter.",
        translation: "Todos tienen su propia opinión sobre este asunto.",
        options: ["has", "have", "is having", "are having"],
        correct: "has",
        explanation: "La palabra 'everyone' es gramaticalmente SINGULAR aunque signifique 'todos'. Requiere verbo singular 'has'. En español 'todos tienen' es plural. Esta particularidad inglesa confunde porque semánticamente es plural pero gramaticalmente singular, regla que simplemente hay que memorizar y aplicar consistentemente."
      },
      {
        id: "agr_2",
        question: "The team _____ playing well together this season.",
        translation: "El equipo está jugando bien juntos esta temporada.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "Sustantivos colectivos como 'team' son SINGULARES en inglés americano: 'the team is'. En inglés británico pueden ser plural. En español 'el equipo está' también es singular. Esta unidad grupal funciona como entidad coherente, y el verbo singular refleja esta cohesión del grupo actuando como uno."
      },
      {
        id: "agr_3",
        question: "Neither of the answers _____ correct in this case.",
        translation: "Ninguna de las respuestas es correcta en este caso.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "Con 'neither of' (ninguno de) usamos verbo SINGULAR: 'neither is'. Aunque hablamos de dos cosas, evaluamos cada una individualmente. En español 'ninguna es' también es singular. Esta corrección que rechaza ambas opciones sugiere necesidad de pensar en alternativa completamente diferente."
      },
      {
        id: "agr_4",
        question: "The news _____ not good today unfortunately.",
        translation: "Las noticias no son buenas hoy desafortunadamente.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "La palabra 'news' (noticias) es SINGULAR en inglés aunque parezca plural. Siempre usa 'is'. En español 'las noticias son' es plural. Esta es otra peculiaridad del inglés donde forma plural semánticamente requiere verbo singular gramaticalmente, contrario al español."
      },
      {
        id: "agr_5",
        question: "Each of the students _____ a different book to read.",
        translation: "Cada uno de los estudiantes tiene un libro diferente para leer.",
        options: ["has", "have", "is having", "are having"],
        correct: "has",
        explanation: "Con 'each of' usamos verbo SINGULAR: 'each has'. Aunque mencionamos grupo plural 'students', 'each' enfoca en individuos uno por uno. En español 'cada uno tiene' también es singular. Esta asignación personalizada de lecturas diferentes reconoce que estudiantes tienen niveles o intereses variados."
      },
      {
        id: "agr_6",
        question: "Physics _____ my favorite subject in school always.",
        translation: "La física es mi materia favorita en la escuela siempre.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "Materias académicas que terminan en '-ics' (physics, mathematics, economics) son SINGULARES: 'physics is'. En español 'la física es' también es singular. Esta preferencia por ciencias exactas sugiere mente analítica que disfruta resolver problemas mediante lógica y matemáticas."
      },
      {
        id: "agr_7",
        question: "A number of people _____ waiting outside the building.",
        translation: "Un número de personas están esperando afuera del edificio.",
        options: ["are", "is", "was", "were"],
        correct: "are",
        explanation: "La expresión 'a number of' (un número de) toma verbo PLURAL: 'are waiting'. Es diferente de 'the number' que sería singular. En español 'un número de personas están' también es plural. Esta multitud esperando afuera puede ser para evento, venta o cualquier ocasión que atraiga grupo considerable."
      },
      {
        id: "agr_8",
        question: "The number of complaints _____ increasing every month.",
        translation: "El número de quejas está aumentando cada mes.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "Con 'the number of' (el número de) usamos verbo SINGULAR: 'the number is'. Hablamos del número en sí, no de las quejas. En español 'el número está' también es singular. Este incremento mensual de quejas es señal de alarma que indica deterioro de calidad o servicio que requiere atención urgente."
      },
      {
        id: "agr_9",
        question: "Somebody _____ left their umbrella in the classroom.",
        translation: "Alguien dejó su paraguas en el salón.",
        options: ["has", "have", "is having", "are having"],
        correct: "has",
        explanation: "Pronombres indefinidos como 'somebody, someone, anybody' son SINGULARES: 'somebody has'. Aunque usamos 'their' (plural) después por neutralidad de género. En español 'alguien dejó' también es singular. Este paraguas olvidado espera ser reclamado por su dueño distraído."
      },
      {
        id: "agr_10",
        question: "Ten dollars _____ not enough for lunch here anymore.",
        translation: "Diez dólares no son suficientes para almorzar aquí ya.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "Cantidades de dinero son SINGULARES: 'ten dollars is'. Pensamos en la suma total como unidad. En español 'diez dólares no son' es plural. Esta observación sobre inflación donde cantidad que antes era suficiente ya no lo es refleja aumento de costo de vida."
      },
      {
        id: "agr_11",
        question: "The police _____ investigating the crime scene carefully.",
        translation: "La policía está investigando la escena del crimen cuidadosamente.",
        options: ["are", "is", "was", "were"],
        correct: "are",
        explanation: "La palabra 'police' (policía) siempre es PLURAL en inglés: 'the police are'. Nunca 'is'. En español 'la policía está' es singular. Esta diferencia entre idiomas es importante: en inglés pensamos en policías (personas) no en institución, requiriendo plural."
      },
      {
        id: "agr_12",
        question: "None of the cake _____ left after the party last night.",
        translation: "Nada del pastel quedó después de la fiesta anoche.",
        options: ["was", "were", "is", "are"],
        correct: "was",
        explanation: "Con 'none of' y sustantivo INCONTABLE (cake) usamos SINGULAR: 'none was'. Si fuera contable plural podría ser 'were'. En español 'nada del pastel' también es singular. Esta completitud de consumo del pastel indica que fue muy popular o que las porciones fueron generosas."
      },
      {
        id: "agr_13",
        question: "My glasses _____ on the table where I left them.",
        translation: "Mis lentes están en la mesa donde los dejé.",
        options: ["are", "is", "was", "were"],
        correct: "are",
        explanation: "Objetos que vienen en PARES (glasses, scissors, pants) son siempre PLURALES: 'glasses are'. En español 'los lentes están' o 'las gafas están' también plural. Esta ubicación de anteojos en lugar recordado facilita encontrarlos rápidamente cuando se necesitan para ver."
      },
      {
        id: "agr_14",
        question: "Everybody _____ excited about the upcoming holiday trip.",
        translation: "Todos están emocionados sobre el próximo viaje de vacaciones.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "La palabra 'everybody' (todos) es SINGULAR: 'everybody is'. Es idéntico a 'everyone'. En español 'todos están' es plural. Esta excitación colectiva sobre viaje próximo crea ambiente de anticipación compartida donde grupo completo espera con entusiasmo la aventura."
      },
      {
        id: "agr_15",
        question: "The United States _____ a large country in North America.",
        translation: "Estados Unidos es un país grande en Norteamérica.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "Nombres de países aunque parezcan plurales (United States, Philippines) son SINGULARES: 'the United States is'. En español 'Estados Unidos es' también trata como singular. Esta regla aplica a todos los nombres de naciones independientemente de su forma plural aparente."
      }
    ]
  }
};

export default part18Categories;