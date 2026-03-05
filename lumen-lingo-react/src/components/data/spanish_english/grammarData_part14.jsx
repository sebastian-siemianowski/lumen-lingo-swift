/**
 * SPANISH → ENGLISH GRAMMAR - PART 14
 * 4 categories, 15 questions each
 */

import { Layers, Package, Sparkles, Gem } from "lucide-react";

export const part14Categories = {
  make_vs_do: {
    name: "Make vs Do",
    description: "Distinguir entre crear y realizar actividades",
    icon: Layers,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "make_do_1",
        question: "I need to _____ my homework before dinner tonight.",
        translation: "Necesito hacer mi tarea antes de la cena esta noche.",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Usamos 'do' con tareas, trabajos y actividades generales: 'do homework, do exercises, do work'. En español usamos 'hacer' para ambos casos, pero el inglés distingue. 'Do' se asocia con acciones y actividades que no producen objeto físico. Esta expresión común sobre responsabilidades escolares establece prioridad antes del tiempo de cena."
      },
      {
        id: "make_do_2",
        question: "She always _____ delicious cakes for special occasions.",
        translation: "Ella siempre hace pasteles deliciosos para ocasiones especiales.",
        options: ["makes", "does", "making", "doing"],
        correct: "makes",
        explanation: "Usamos 'make' para CREAR o PRODUCIR algo físico: 'make cakes, make dinner, make a dress'. En español 'hacer pasteles' no distingue, pero inglés usa 'make' porque produces objeto tangible. Esta habilidad culinaria para eventos especiales muestra talento para repostería que contribuye a celebraciones memorables."
      },
      {
        id: "make_do_3",
        question: "I have to _____ a phone call to my boss right now.",
        translation: "Tengo que hacer una llamada telefónica a mi jefe ahora mismo.",
        options: ["make", "do", "making", "doing"],
        correct: "make",
        explanation: "Con comunicaciones usamos 'make': 'make a phone call, make a reservation'. Es creación de contacto o conexión. En español 'hacer una llamada' usa 'hacer' genérico. La urgencia 'right now' sugiere que es asunto importante que no puede esperar, requiriendo atención inmediata del supervisor."
      },
      {
        id: "make_do_4",
        question: "They _____ a lot of mistakes on the test unfortunately.",
        translation: "Ellos cometieron muchos errores en el examen desafortunadamente.",
        options: ["made", "did", "make", "do"],
        correct: "made",
        explanation: "Para errores usamos 'make mistakes' (no 'do mistakes'). Es expresión fija que hay que memorizar. En español 'cometer errores' usa verbo diferente. El pasado 'made' indica que el examen ya ocurrió. Esta cantidad alta de errores sugiere que el material era difícil o la preparación fue insuficiente."
      },
      {
        id: "make_do_5",
        question: "Can you _____ me a favor and help me move?",
        translation: "¿Puedes hacerme un favor y ayudarme a mudarme?",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "La expresión fija es 'do a favor' (no 'make a favor'). Es una de muchas collocations con 'do' que hay que aprender. En español 'hacer un favor' no distingue. Esta petición de ayuda con mudanza es favor grande que requiere tiempo y esfuerzo físico significativo."
      },
      {
        id: "make_do_6",
        question: "I'm going to _____ breakfast for everyone tomorrow morning.",
        translation: "Voy a hacer desayuno para todos mañana en la mañana.",
        options: ["make", "do", "making", "doing"],
        correct: "make",
        explanation: "Para preparar comidas usamos 'make': 'make breakfast, make lunch, make dinner'. Produces algo consumible. En español 'hacer desayuno' es neutral. Este gesto generoso de cocinar para grupo completo muestra hospitalidad y cuidado, especialmente apreciado en mañanas cuando todos tienen prisa."
      },
      {
        id: "make_do_7",
        question: "She _____ the dishes every evening after dinner regularly.",
        translation: "Ella lava los platos cada noche después de la cena regularmente.",
        options: ["does", "makes", "doing", "making"],
        correct: "does",
        explanation: "Para tareas domésticas usamos 'do': 'do the dishes, do the laundry, do the cleaning'. No produces objeto nuevo sino completas tarea. En español 'lavar los platos' usa verbo específico. Esta rutina nocturna de limpieza mantiene orden en el hogar y es responsabilidad compartida común."
      },
      {
        id: "make_do_8",
        question: "He _____ a big mistake by quitting his job hastily.",
        translation: "Él cometió un gran error al renunciar a su trabajo apresuradamente.",
        options: ["made", "did", "make", "do"],
        correct: "made",
        explanation: "Nuevamente 'make a mistake' es expresión fija. El adjetivo 'big' enfatiza la gravedad del error. En español 'cometió un error' puede usar 'hizo' también. El adverbio 'hastily' sugiere que la decisión fue impulsiva sin consideración suficiente de consecuencias."
      },
      {
        id: "make_do_9",
        question: "I need to _____ an appointment with the dentist soon.",
        translation: "Necesito hacer una cita con el dentista pronto.",
        options: ["make", "do", "making", "doing"],
        correct: "make",
        explanation: "Para citas y reservaciones usamos 'make': 'make an appointment, make a reservation'. Creas el compromiso temporal. En español 'hacer una cita' también es común. La urgencia 'soon' indica que probablemente hay molestia dental que requiere atención profesional próxima."
      },
      {
        id: "make_do_10",
        question: "We _____ our best to finish the project on time.",
        translation: "Hicimos nuestro mejor esfuerzo para terminar el proyecto a tiempo.",
        options: ["did", "made", "do", "make"],
        correct: "did",
        explanation: "La expresión idiomática es 'do your best' (no 'make your best'). Es esfuerzo máximo que no produce objeto tangible. En español 'hicimos nuestro mejor esfuerzo' usa 'hacer'. Esta frase reconoce que aunque el resultado quizás no fue perfecto, el esfuerzo genuino estuvo presente."
      },
      {
        id: "make_do_11",
        question: "She _____ a promise to visit her parents more often.",
        translation: "Ella hizo una promesa de visitar a sus padres más seguido.",
        options: ["made", "did", "make", "do"],
        correct: "made",
        explanation: "Para promesas, planes y decisiones usamos 'make': 'make a promise, make a decision, make plans'. Creas compromiso. En español 'hacer una promesa' también usa 'hacer'. Esta promesa de mayor contacto familiar reconoce que la frecuencia actual de visitas es insuficiente y necesita mejorar."
      },
      {
        id: "make_do_12",
        question: "I always _____ exercise in the morning before work.",
        translation: "Siempre hago ejercicio en la mañana antes del trabajo.",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Para actividades físicas usamos 'do': 'do exercise, do yoga, do sports'. Es actividad no creación de objeto. En español 'hacer ejercicio' no distingue. Esta rutina matutina de ejercicio antes del trabajo muestra disciplina y compromiso con salud física a pesar de horarios ocupados."
      },
      {
        id: "make_do_13",
        question: "He _____ a lot of money from his online business.",
        translation: "Él gana mucho dinero de su negocio en línea.",
        options: ["makes", "does", "making", "doing"],
        correct: "makes",
        explanation: "Para dinero/ingresos usamos 'make money' (no 'do money'). Aunque dinero ya existe, 'make' se usa para ganarlo. En español 'ganar dinero' usa verbo diferente. Esta expresión sobre ingresos de emprendimiento digital refleja oportunidades modernas de trabajo remoto y negocios virtuales."
      },
      {
        id: "make_do_14",
        question: "Can you _____ the shopping while I cook dinner?",
        translation: "¿Puedes hacer las compras mientras yo cocino la cena?",
        options: ["do", "make", "doing", "making"],
        correct: "do",
        explanation: "Para compras usamos 'do the shopping' (no 'make the shopping'). Es tarea/actividad que no crea objeto. En español 'hacer las compras' o 'ir de compras' son opciones. Esta división de tareas domésticas muestra cooperación eficiente donde ambos contribuyen simultáneamente a preparativos de cena."
      },
      {
        id: "make_do_15",
        question: "She _____ friends easily wherever she goes.",
        translation: "Ella hace amigos fácilmente dondequiera que va.",
        options: ["makes", "does", "making", "doing"],
        correct: "makes",
        explanation: "Para relaciones usamos 'make friends' (no 'do friends'). Aunque amigos son personas, 'make' sugiere creación de conexión. En español 'hacer amigos' también usa 'hacer'. Esta habilidad social de conectar fácilmente con otros es don valioso que facilita adaptación a nuevos ambientes."
      }
    ]
  },

  can_could_be_able: {
    name: "Can, Could, Be Able To",
    description: "Expresar habilidad en diferentes tiempos",
    icon: Package,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "can_able_1",
        question: "She _____ speak three languages fluently now.",
        translation: "Ella puede hablar tres idiomas con fluidez ahora.",
        options: ["can", "could", "is able to", "was able to"],
        correct: "can",
        explanation: "Para habilidad general PRESENTE usamos 'can'. Es más simple y común que 'is able to' para capacidades actuales. En español 'puede hablar' también expresa habilidad presente. Esta capacidad trilingüe impresionante muestra dedicación al aprendizaje de idiomas y probablemente ventajas profesionales significativas."
      },
      {
        id: "can_able_2",
        question: "When I was younger, I _____ run very fast.",
        translation: "Cuando era más joven, podía correr muy rápido.",
        options: ["could", "can", "am able to", "was able to"],
        correct: "could",
        explanation: "Para habilidad general PASADA usamos 'could'. Es forma simple para capacidades que teníamos antes. También podríamos usar 'was able to' pero 'could' es más común. En español 'podía' (imperfecto) describe esta habilidad juvenil ahora perdida. Esta nostalgia por capacidad física pasada es común al envejecer."
      },
      {
        id: "can_able_3",
        question: "After hours of trying, he _____ _____ _____ fix the computer.",
        translation: "Después de horas de intentar, pudo arreglar la computadora.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para logro ESPECÍFICO en el pasado (éxito particular después de esfuerzo) usamos 'was able to' NO 'could'. Esta distinción es sutil pero importante. En español 'pudo' (pretérito) marca el logro específico. La persistencia de horas finalmente resultó exitosa, mostrando que no rendirse trae recompensas."
      },
      {
        id: "can_able_4",
        question: "I _____ swim when I was five years old already.",
        translation: "Podía nadar cuando tenía cinco años ya.",
        options: ["could", "can", "was able to", "am able to"],
        correct: "could",
        explanation: "Para habilidad general que teníamos en el pasado (no logro específico) usamos 'could'. La edad temprana hace este logro impresionante. En español 'podía nadar' (imperfecto) también describe habilidad adquirida tempranamente. Aprender a nadar joven es ventaja de seguridad importante."
      },
      {
        id: "can_able_5",
        question: "Will you _____ _____ _____ attend the meeting tomorrow?",
        translation: "¿Podrás asistir a la reunión mañana?",
        options: ["be able to", "can", "could", "able to"],
        correct: "be able to",
        explanation: "Para habilidad FUTURA no podemos usar 'can' o 'could'. DEBEMOS usar 'will be able to'. Esta es regla fija del inglés. En español 'podrás' (futuro de poder) es directo. Esta consulta sobre disponibilidad futura ayuda a planificar si la persona estará presente o ausente."
      },
      {
        id: "can_able_6",
        question: "Despite the injury, she _____ _____ _____ finish the race.",
        translation: "A pesar de la lesión, pudo terminar la carrera.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para logro específico en circunstancias difíciles usamos 'was able to'. Esto enfatiza el éxito particular a pesar del obstáculo. En español 'pudo terminar' (pretérito) también marca este logro heroico. La perseverancia de terminar pesar de dolor muestra determinación admirable."
      },
      {
        id: "can_able_7",
        question: "I _____ see the mountains clearly from my window.",
        translation: "Puedo ver las montañas claramente desde mi ventana.",
        options: ["can", "could", "am able to", "was able to"],
        correct: "can",
        explanation: "Para habilidad presente simple usamos 'can'. Es más natural que 'am able to' para capacidades actuales. En español 'puedo ver' también es presente. Esta vista privilegiada desde la ventana es característica apreciada de la vivienda que probablemente influyó en decisión de vivir ahí."
      },
      {
        id: "can_able_8",
        question: "He _____ play the piano since he was seven years old.",
        translation: "Él ha podido tocar el piano desde que tenía siete años.",
        options: ["has been able to", "can", "could", "was able to"],
        correct: "has been able to",
        explanation: "Para habilidad que CONTINÚA desde el pasado hasta ahora usamos presente perfecto: 'has been able to'. No podemos usar 'can' con presente perfecto. En español 'ha podido' también usa perfecto con 'desde'. Esta habilidad musical cultivada desde niñez probablemente es ahora parte integral de su identidad."
      },
      {
        id: "can_able_9",
        question: "_____ you help me carry these heavy bags upstairs?",
        translation: "¿Puedes ayudarme a cargar estas bolsas pesadas escaleras arriba?",
        options: ["Can", "Could", "Are able to", "Were able to"],
        correct: "Can",
        explanation: "Para petición directa de ayuda inmediata usamos 'can'. También podríamos usar 'could' para sonar más cortés. En español '¿puedes?' también es directo. Esta solicitud de ayuda física reconoce que las bolsas son demasiado pesadas para una persona y requiere asistencia."
      },
      {
        id: "can_able_10",
        question: "After practicing for months, I _____ _____ _____ pass the driving test.",
        translation: "Después de practicar por meses, pude pasar el examen de manejo.",
        options: ["was able to", "could", "can", "am able to"],
        correct: "was able to",
        explanation: "Para logro específico (pasar el examen particular) después de preparación, usamos 'was able to'. Esto marca éxito concreto no habilidad general. En español 'pude pasar' (pretérito) también es específico. Los meses de práctica finalmente rindieron fruto en este logro importante de independencia."
      },
      {
        id: "can_able_11",
        question: "I _____ swim very well when I was younger.",
        translation: "Podía nadar muy bien cuando era más joven.",
        options: ["could", "can", "was able to", "am able to"],
        correct: "could",
        explanation: "Para habilidad general pasada (no evento específico) usamos 'could'. Describe capacidad que teníamos habitualmente. En español 'podía nadar' (imperfecto) también es habilidad pasada general. Esta reflexión sobre habilidades atléticas perdidas es común al comparar nuestro yo actual con versión más joven y ágil."
      },
      {
        id: "can_able_12",
        question: "They haven't _____ _____ _____ contact him for days.",
        translation: "No han podido contactarlo por días.",
        options: ["been able to", "could", "can", "was able to"],
        correct: "been able to",
        explanation: "Con presente perfecto negativo usamos 'haven't been able to' (no 'haven't could'). 'Can' y 'could' no tienen forma de presente perfecto. En español 'no han podido' también usa perfecto. Esta dificultad prolongada de comunicación puede indicar problema técnico o que la persona está evitando contacto."
      },
      {
        id: "can_able_13",
        question: "_____ I borrow your pen for a moment, please?",
        translation: "¿Podría prestar tu pluma por un momento, por favor?",
        options: ["Could", "Can", "Am able to", "Was able to"],
        correct: "Could",
        explanation: "Para peticiones MUY corteses usamos 'could' (no 'can'). Aunque 'can' también funciona, 'could' suena más educado y formal. En español '¿podría?' también es más cortés que '¿puedo?'. Esta forma de pedir prestado algo pequeño con máxima cortesía muestra buenos modales."
      },
      {
        id: "can_able_14",
        question: "She _____ _____ _____ come to the party because she's sick.",
        translation: "Ella no podrá venir a la fiesta porque está enferma.",
        options: ["won't be able to", "can't", "couldn't", "isn't able to"],
        correct: "won't be able to",
        explanation: "Para incapacidad FUTURA usamos 'won't be able to' (no 'won't can'). Los modales 'can/could' no tienen forma futura. En español 'no podrá' (futuro de poder) es directo. La enfermedad es razón legítima de ausencia que esperamos otros entiendan sin ofenderse."
      },
      {
        id: "can_able_15",
        question: "I wish I _____ play a musical instrument like you.",
        translation: "Desearía poder tocar un instrumento musical como tú.",
        options: ["could", "can", "am able to", "was able to"],
        correct: "could",
        explanation: "Después de 'wish' para habilidades deseadas usamos 'could' (forma pasada de 'can'). Expresa anhelo de capacidad que no poseemos. En español 'desearía poder' o subjuntivo 'pudiera' también marcan irrealidad. Esta admiración por talento musical ajeno motiva quizás a empezar a aprender instrumento propio."
      }
    ]
  },

  must_have_to_should: {
    name: "Must, Have To, Should",
    description: "Diferentes niveles de obligación y consejo",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "must_have_1",
        question: "You _____ wear a seatbelt when driving - it's the law.",
        translation: "Debes usar cinturón de seguridad al manejar - es la ley.",
        options: ["must", "should", "have to", "ought to"],
        correct: "must",
        explanation: "Usamos 'must' para obligaciones fuertes, reglas o leyes. Es mandato autoritario. También podríamos usar 'have to' pero 'must' es más fuerte y enfático. En español 'debes' expresa esta obligación legal. El cinturón es medida de seguridad crucial que puede salvar vidas en accidentes."
      },
      {
        id: "must_have_2",
        question: "I _____ _____ _____ go to the dentist next week.",
        translation: "Tengo que ir al dentista la próxima semana.",
        options: ["have to", "must", "should", "ought to"],
        correct: "have to",
        explanation: "Usamos 'have to' para obligaciones externas (cita hecha). Es menos personal que 'must'. Para hablar de citas futuras específicas 'have to' es más natural. En español 'tengo que' también es obligación externa. Esta cita dental probablemente fue programada por molestia que requiere atención profesional."
      },
      {
        id: "must_have_3",
        question: "You _____ try the chocolate cake - it's delicious!",
        translation: "Deberías probar el pastel de chocolate - ¡está delicioso!",
        options: ["should", "must", "have to", "ought"],
        correct: "should",
        explanation: "Usamos 'should' para RECOMENDACIONES y consejos (no obligaciones fuertes). Es sugerencia amistosa basada en experiencia positiva. En español 'deberías' también es consejo. Esta recomendación entusiasta sobre postre específico comparte descubrimiento culinario delicioso que vale la pena experimentar."
      },
      {
        id: "must_have_4",
        question: "We _____ be quiet in the library to respect others.",
        translation: "Debemos estar en silencio en la biblioteca para respetar a otros.",
        options: ["must", "should", "have to", "ought to"],
        correct: "must",
        explanation: "Para reglas de comportamiento social usamos 'must'. Es obligación comunitaria no negociable. En español 'debemos' también marca necesidad social. Esta norma de silencio en bibliotecas permite que todos se concentren en lectura o estudio sin distracciones molestas."
      },
      {
        id: "must_have_5",
        question: "She _____ _____ _____ wake up early tomorrow for flight.",
        translation: "Ella tiene que despertarse temprano mañana para el vuelo.",
        options: ["has to", "must", "should", "ought to"],
        correct: "has to",
        explanation: "Para obligaciones externas específicas (horario de vuelo) con tercera persona usamos 'has to'. Es más neutro que 'must'. En español 'tiene que' también es obligación impuesta por circunstancia. Los vuelos matutinos requieren sacrificar sueño, pero a veces son la única opción disponible."
      },
      {
        id: "must_have_6",
        question: "You _____ see a doctor if you feel sick for long.",
        translation: "Deberías ver a un doctor si te sientes enfermo por mucho tiempo.",
        options: ["should", "must", "have to", "ought"],
        correct: "should",
        explanation: "Para consejo médico sensato usamos 'should'. No es obligación legal sino recomendación sabia. En español 'deberías' también aconseja. La condición 'if you feel sick for long' establece cuándo este consejo aplica. Esta orientación de salud preventiva es importante para evitar que problemas menores se vuelvan serios."
      },
      {
        id: "must_have_7",
        question: "I _____ finish this report by Friday deadline.",
        translation: "Debo terminar este informe para la fecha límite del viernes.",
        options: ["must", "should", "have to", "ought to"],
        correct: "must",
        explanation: "Para auto-imposición fuerte o determinación personal usamos 'must'. Es sentimiento interno de obligación. También 'have to' funciona pero 'must' es más enfático. En español 'debo' también es determinación. Esta fecha límite próxima crea urgencia que requiere concentración y priorización del trabajo."
      },
      {
        id: "must_have_8",
        question: "They _____ _____ _____ wear uniforms at their school.",
        translation: "Ellos tienen que usar uniformes en su escuela.",
        options: ["have to", "must", "should", "ought to"],
        correct: "have to",
        explanation: "Para reglas institucionales impuestas externamente usamos 'have to'. Es política escolar no elección personal. En español 'tienen que' también es obligación externa. Los uniformes escolares son política común que busca igualdad y reducir distracciones, aunque algunos estudiantes los encuentran restrictivos."
      },
      {
        id: "must_have_9",
        question: "You _____ smoke in here - it's prohibited strictly.",
        translation: "No debes fumar aquí - está estrictamente prohibido.",
        options: ["mustn't", "don't have to", "shouldn't", "oughtn't to"],
        correct: "mustn't",
        explanation: "Para PROHIBICIONES usamos 'must not' (mustn't). Es prohibición fuerte, no ausencia de obligación. 'Don't have to' significa 'no es necesario' (muy diferente). En español 'no debes' puede ser ambiguo pero aquí es prohibición. Esta regla estricta protege salud de todos en espacio cerrado."
      },
      {
        id: "must_have_10",
        question: "You _____ _____ _____ buy expensive gifts - it's not necessary.",
        translation: "No tienes que comprar regalos caros - no es necesario.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para AUSENCIA de obligación usamos 'don't have to' (no es necesario). Es muy diferente de 'mustn't' (prohibido). En español 'no tienes que' también indica opcionalidad. Esta tranquilidad sobre regalos económicos elimina presión financiera, enfocando en el gesto no el costo."
      },
      {
        id: "must_have_11",
        question: "She _____ apologize for being honest with her opinion.",
        translation: "Ella no debería disculparse por ser honesta con su opinión.",
        options: ["shouldn't", "mustn't", "doesn't have to", "can't"],
        correct: "shouldn't",
        explanation: "Para consejo negativo (no deberías) usamos 'shouldn't'. Es opinión que algo no es buena idea. En español 'no debería' también aconseja contra algo. Esta defensa de honestidad sin disculpas valida que expresar opiniones sinceras es derecho que no requiere pedir perdón."
      },
      {
        id: "must_have_12",
        question: "We _____ respect other people's opinions even when different.",
        translation: "Debemos respetar las opiniones de otras personas incluso cuando son diferentes.",
        options: ["must", "should", "have to", "ought to"],
        correct: "must",
        explanation: "Para obligaciones morales o éticas usamos 'must'. Es imperativo social fuerte. En español 'debemos' también marca deber moral. Esta afirmación sobre tolerancia y respeto mutuo es fundamental para convivencia pacífica en sociedades diversas con múltiples perspectivas."
      },
      {
        id: "must_have_13",
        question: "He _____ _____ _____ work late every day last month.",
        translation: "Él tuvo que trabajar hasta tarde todos los días el mes pasado.",
        options: ["had to", "must", "should", "was able to"],
        correct: "had to",
        explanation: "Para obligación en PASADO usamos 'had to' (no existe 'musted'). Es única forma de expresar obligación pasada. En español 'tuvo que' también es pasado de obligación. Este período de trabajo extendido el mes pasado sugiere proyecto intenso o crisis temporal que requirió dedicación extraordinaria."
      },
      {
        id: "must_have_14",
        question: "You _____ eat more vegetables for better health.",
        translation: "Deberías comer más vegetales para mejor salud.",
        options: ["should", "must", "have to", "ought"],
        correct: "should",
        explanation: "Para consejos de salud usamos 'should'. Es recomendación no orden. En español 'deberías' también sugiere sin obligar. Esta orientación nutricional común reconoce que vegetales son esenciales para salud pero respeta autonomía personal sobre elecciones alimentarias."
      },
      {
        id: "must_have_15",
        question: "I _____ _____ _____ remember to call my mother today.",
        translation: "Debo recordar llamar a mi madre hoy.",
        options: ["have to", "must", "should", "ought to"],
        correct: "have to",
        explanation: "Para recordatorio personal de tarea importante usamos 'have to' o 'must'. Ambos funcionan para auto-recordatorios. En español 'debo recordar' también es auto-obligación. Esta nota mental sobre mantener contacto familiar muestra que aunque la intención existe, necesita esfuerzo consciente para no olvidar en medio de día ocupado."
      }
    ]
  },

  word_order_statements: {
    name: "Orden de Palabras en Declaraciones",
    description: "Lugar, manera, tiempo - secuencia correcta",
    icon: Gem,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "word_ord_1",
        question: "She drives _____ _____ _____ every morning.",
        translation: "Ella maneja al trabajo cuidadosamente cada mañana.",
        options: ["to work carefully", "carefully to work", "to carefully work", "work carefully to"],
        correct: "to work carefully",
        explanation: "El orden inglés estándar es: LUGAR (to work) + MANERA (carefully) + TIEMPO (every morning). Esta secuencia difiere del español donde 'cuidadosamente al trabajo' podría sonar más natural. En inglés el destino típicamente precede la manera de hacer algo. Esta rutina matutina de conducción cuidadosa muestra responsabilidad en carretera."
      },
      {
        id: "word_ord_2",
        question: "I go _____ _____ _____ on weekends.",
        translation: "Voy al gimnasio regularmente los fines de semana.",
        options: ["to the gym regularly", "regularly to the gym", "to regularly the gym", "gym regularly to"],
        correct: "to the gym regularly",
        explanation: "El orden es: LUGAR (to the gym) antes de FRECUENCIA (regularly) antes de TIEMPO (on weekends). El lugar del evento va antes de descripciones de frecuencia. En español 'regularmente al gimnasio' puede invertir el orden. Esta rutina de ejercicio de fin de semana muestra compromiso con fitness."
      },
      {
        id: "word_ord_3",
        question: "They arrived _____ _____ _____.",
        translation: "Ellos llegaron al aeropuerto temprano ayer.",
        options: ["at the airport early yesterday", "early at the airport yesterday", "yesterday at the airport early", "at the airport yesterday early"],
        correct: "at the airport early yesterday",
        explanation: "La secuencia correcta es: LUGAR (at the airport) + MANERA/TIEMPO (early) + TIEMPO ESPECÍFICO (yesterday). En español 'temprano al aeropuerto ayer' puede variar. Esta llegada anticipada al aeropuerto muestra precaución sensata para evitar perder vuelo por contratiempos."
      },
      {
        id: "word_ord_4",
        question: "He speaks _____ _____ _____.",
        translation: "Él habla español perfectamente ahora.",
        options: ["Spanish perfectly now", "perfectly Spanish now", "now Spanish perfectly", "Spanish now perfectly"],
        correct: "Spanish perfectly now",
        explanation: "El orden es: OBJETO (Spanish) + MANERA (perfectly) + TIEMPO (now). El objeto directo va inmediatamente después del verbo. En español 'español perfectamente ahora' también sigue secuencia similar. Este logro de dominio del idioma muestra resultado de estudio y práctica persistentes."
      },
      {
        id: "word_ord_5",
        question: "We walked _____ _____ _____ last night.",
        translation: "Caminamos por el parque lentamente anoche.",
        options: ["through the park slowly", "slowly through the park", "through slowly the park", "park slowly through"],
        correct: "through the park slowly",
        explanation: "El orden es: LUGAR/DIRECCIÓN (through the park) + MANERA (slowly). El lugar precede la descripción de cómo se realizó la acción. En español 'lentamente por el parque' invierte el orden. Este paseo nocturno pausado sugiere momento relajante de reflexión o conversación íntima."
      },
      {
        id: "word_ord_6",
        question: "She sings _____ _____ _____ during practice.",
        translation: "Ella canta en el escenario hermosamente durante la práctica.",
        options: ["on stage beautifully", "beautifully on stage", "on beautifully stage", "stage on beautifully"],
        correct: "on stage beautifully",
        explanation: "El orden es: LUGAR (on stage) + MANERA (beautifully). La ubicación física donde canta va antes de la evaluación de cómo canta. En español 'hermosamente en el escenario' podría invertirse. Esta práctica de canto en escenario real prepara para presentaciones, acostumbrándose al espacio de actuación."
      },
      {
        id: "word_ord_7",
        question: "I study _____ _____ _____ before exams.",
        translation: "Estudio en la biblioteca intensamente antes de los exámenes.",
        options: ["in the library intensely", "intensely in the library", "in intensely the library", "library in intensely"],
        correct: "in the library intensely",
        explanation: "El orden estándar es: LUGAR (in the library) + MANERA (intensely). El dónde estudias precede el cómo estudias. En español 'intensamente en la biblioteca' puede variar. Este hábito de estudio concentrado en ambiente apropiado antes de exámenes muestra preparación seria y uso inteligente de recursos."
      },
      {
        id: "word_ord_8",
        question: "They play _____ _____ _____ after school.",
        translation: "Ellos juegan fútbol juntos después de la escuela.",
        options: ["soccer together", "together soccer", "soccer after together", "together after soccer"],
        correct: "soccer together",
        explanation: "El orden es: OBJETO (soccer) + MANERA/COMPAÑÍA (together) + TIEMPO (after school). El deporte específico va primero, seguido de con quién juegan. En español 'fútbol juntos' también pone objeto primero. Esta actividad cooperativa después de clase fortalece amistades y proporciona ejercicio saludable."
      },
      {
        id: "word_ord_9",
        question: "She explained _____ _____ _____ this morning.",
        translation: "Ella explicó el problema claramente esta mañana.",
        options: ["the problem clearly", "clearly the problem", "the clearly problem", "problem the clearly"],
        correct: "the problem clearly",
        explanation: "El OBJETO (the problem) va inmediatamente después del verbo, luego MANERA (clearly), después TIEMPO (this morning). En español 'el problema claramente' sigue secuencia similar. Esta explicación clara matutina probablemente ayudó a resolver malentendidos o confusiones sobre situación compleja."
      },
      {
        id: "word_ord_10",
        question: "We'll meet _____ _____ _____ tomorrow.",
        translation: "Nos encontraremos en el café temprano mañana.",
        options: ["at the café early", "early at the café", "at early the café", "café at early"],
        correct: "at the café early",
        explanation: "El orden es: LUGAR (at the café) + TIEMPO RELATIVO (early) + TIEMPO ESPECÍFICO (tomorrow). El lugar de encuentro va primero en la secuencia. En español 'temprano en el café' puede invertirse. Esta cita matutina temprana sugiere que tienen día ocupado y necesitan aprovechar tiempo disponible."
      },
      {
        id: "word_ord_11",
        question: "He answered _____ _____ _____ in class.",
        translation: "Él respondió todas las preguntas correctamente en clase.",
        options: ["all the questions correctly", "correctly all the questions", "all correctly the questions", "the questions all correctly"],
        correct: "all the questions correctly",
        explanation: "El cuantificador 'all' va antes del objeto completo 'the questions', luego adverbio de manera 'correctly', finalmente lugar 'in class'. En español 'todas las preguntas correctamente' también agrupa cuantificador con objeto. Este desempeño perfecto en clase demuestra comprensión completa del material."
      },
      {
        id: "word_ord_12",
        question: "She writes _____ _____ _____ at night.",
        translation: "Ella escribe sus emails profesionalmente de noche.",
        options: ["her emails professionally", "professionally her emails", "her professionally emails", "emails her professionally"],
        correct: "her emails professionally",
        explanation: "El objeto posesivo completo 'her emails' va junto después del verbo, seguido del adverbio de manera 'professionally'. En español 'sus emails profesionalmente' mantiene objeto unido. Este hábito de trabajar en correspondencia durante horas nocturnas puede indicar horario flexible o carga de trabajo que se desborda."
      },
      {
        id: "word_ord_13",
        question: "I learned _____ _____ _____ last year.",
        translation: "Aprendí a cocinar bien el año pasado.",
        options: ["to cook well", "well to cook", "to well cook", "cook to well"],
        correct: "to cook well",
        explanation: "El infinitivo completo 'to cook' va junto, seguido del adverbio 'well', finalmente el tiempo 'last year'. En español 'a cocinar bien' también mantiene infinitivo unido. Esta nueva habilidad culinaria adquirida recientemente probablemente aumentó independencia y capacidad de cuidarse a sí mismo."
      },
      {
        id: "word_ord_14",
        question: "They work _____ _____ _____ every day.",
        translation: "Ellos trabajan en la oficina eficientemente todos los días.",
        options: ["in the office efficiently", "efficiently in the office", "in efficiently the office", "office in efficiently"],
        correct: "in the office efficiently",
        explanation: "El orden es: LUGAR (in the office) + MANERA (efficiently) + FRECUENCIA (every day). El lugar laboral va antes de la evaluación de productividad. En español 'eficientemente en la oficina' puede invertirse. Esta rutina de trabajo eficiente diario sugiere equipo bien organizado."
      },
      {
        id: "word_ord_15",
        question: "He played _____ _____ _____ yesterday.",
        translation: "Él jugó en el parque felizmente ayer.",
        options: ["in the park happily", "happily in the park", "in happily the park", "park in happily"],
        correct: "in the park happily",
        explanation: "La secuencia es: LUGAR (in the park) + MANERA/ESTADO (happily) + TIEMPO (yesterday). El lugar de la actividad precede la descripción emocional de cómo se sintió. En español 'felizmente en el parque' puede variar. Este juego alegre al aire libre representa momento simple de alegría y ejercicio."
      }
    ]
  }
};

export default part14Categories;