/**
 * SPANISH → ENGLISH GRAMMAR - PART 21
 * 4 categories, 15 questions each
 */

import { Wifi, Battery, Circle, Square } from "lucide-react";

export const part21Categories = {
  expressing_ability_past: {
    name: "Expresar Habilidad Pasada",
    description: "Could vs was able to - logros específicos vs capacidad general",
    icon: Wifi,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "abil_past_1",
        question: "After trying many times, I _____ _____ _____ open the door.",
        translation: "Después de intentar muchas veces, pude abrir la puerta.",
        options: ["was able to", "could", "can", "am able to"],
        correct: "was able to",
        explanation: "Para LOGRO específico en el pasado (éxito después de esfuerzo) usamos 'was able to' NO 'could'. Esta distinción es crucial: 'could' es habilidad general, 'was able to' es logro concreto. En español 'pude' (pretérito) marca este éxito específico. Los múltiples intentos antes del éxito hacen que el logro sea más satisfactorio."
      },
      {
        id: "abil_past_2",
        question: "When I was young, I _____ climb trees very easily.",
        translation: "Cuando era joven, podía trepar árboles muy fácilmente.",
        options: ["could", "was able to", "can", "am able to"],
        correct: "could",
        explanation: "Para HABILIDAD general pasada (no logro específico) usamos 'could': describe capacidad que tenías habitualmente. En español 'podía' (imperfecto) también es habilidad general. Esta nostalgia por agilidad juvenil perdida es reflexión común sobre cómo nuestras capacidades físicas cambian con edad."
      },
      {
        id: "abil_past_3",
        question: "She _____ _____ _____ convince him after a long discussion.",
        translation: "Ella pudo convencerlo después de una larga discusión.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para ÉXITO específico en persuasión (después de esfuerzo) usamos 'was able to': logró convencer en esta ocasión particular. En español 'pudo convencerlo' (pretérito) también es logro específico. La discusión larga sugiere que no fue fácil pero su persistencia finalmente funcionó."
      },
      {
        id: "abil_past_4",
        question: "We _____ see the mountains clearly from our old house.",
        translation: "Podíamos ver las montañas claramente desde nuestra vieja casa.",
        options: ["could", "was able to", "can", "are able to"],
        correct: "could",
        explanation: "Para CIRCUNSTANCIA general pasada (visibilidad habitual) usamos 'could': describe condición que existía regularmente. En español 'podíamos' (imperfecto) también es capacidad general pasada. Esta vista privilegiada de montañas era característica apreciada de la vivienda anterior que ya no tienen."
      },
      {
        id: "abil_past_5",
        question: "He _____ _____ _____ fix the computer after hours of trying.",
        translation: "Él pudo arreglar la computadora después de horas de intentar.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para LOGRO después de esfuerzo prolongado usamos 'was able to': marca éxito específico difícil. En español 'pudo arreglar' (pretérito) también es logro concreto. Las horas invertidas antes del éxito demuestran que fue problema complejo que requirió persistencia y conocimiento técnico."
      },
      {
        id: "abil_past_6",
        question: "I _____ swim when I was five years old already.",
        translation: "Podía nadar cuando tenía cinco años ya.",
        options: ["could", "was able to", "can", "am able to"],
        correct: "could",
        explanation: "Para HABILIDAD adquirida en edad temprana (capacidad general) usamos 'could': describe lo que sabías hacer habitualmente. En español 'podía nadar' (imperfecto) también es habilidad general. Aprender a nadar a los cinco años es logro temprano importante de seguridad acuática."
      },
      {
        id: "abil_past_7",
        question: "Despite the injury, she _____ _____ _____ finish the race.",
        translation: "A pesar de la lesión, ella pudo terminar la carrera.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para LOGRO heroico específico a pesar de obstáculo usamos 'was able to': éxito particular contra dificultad. En español 'pudo terminar' (pretérito) también marca logro. Esta determinación de completar carrera pesar de dolor muestra carácter fuerte y compromiso con meta."
      },
      {
        id: "abil_past_8",
        question: "They _____ speak English when they lived abroad before.",
        translation: "Ellos podían hablar inglés cuando vivían en el extranjero antes.",
        options: ["could", "was able to", "can", "are able to"],
        correct: "could",
        explanation: "Para HABILIDAD que tenían durante período pasado usamos 'could': capacidad que poseían entonces. En español 'podían hablar' (imperfecto) también es habilidad general pasada. Vivir en país anglófono desarrolló esta capacidad lingüística que ahora quizás han perdido por falta de práctica."
      },
      {
        id: "abil_past_9",
        question: "He _____ _____ _____ escape from the burning building safely.",
        translation: "Él pudo escapar del edificio en llamas de manera segura.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para LOGRO de supervivencia específico (evento único crítico) usamos 'was able to': marca éxito en situación de emergencia. En español 'pudo escapar' (pretérito) también es logro vital. Este escape exitoso de peligro mortal es experiencia traumática que probablemente dejó impacto emocional duradero."
      },
      {
        id: "abil_past_10",
        question: "I _____ play the piano quite well as a teenager.",
        translation: "Podía tocar el piano bastante bien cuando era adolescente.",
        options: ["could", "was able to", "can", "am able to"],
        correct: "could",
        explanation: "Para HABILIDAD musical pasada (capacidad general en período) usamos 'could': lo que sabías hacer habitualmente. En español 'podía tocar' (imperfecto) también es habilidad general. Esta habilidad adolescente quizás se perdió por falta de práctica después de años sin tocar."
      },
      {
        id: "abil_past_11",
        question: "She _____ _____ _____ pass the difficult driving test yesterday.",
        translation: "Ella pudo pasar el difícil examen de manejo ayer.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para ÉXITO en examen específico (evento único ayer) usamos 'was able to': logro concreto en momento particular. En español 'pudo pasar' (pretérito) también es logro. Este éxito en examen difícil después de preparación marca hito importante hacia independencia con licencia de conducir."
      },
      {
        id: "abil_past_12",
        question: "We _____ understand him because he spoke too fast.",
        translation: "No podíamos entenderlo porque hablaba demasiado rápido.",
        options: ["couldn't", "wasn't able to", "can't", "aren't able to"],
        correct: "couldn't",
        explanation: "Para INCAPACIDAD general en situación pasada podemos usar 'couldn't' (más común) o 'wasn't able to'. Aquí 'couldn't' es más natural. En español 'no podíamos' (imperfecto) también es incapacidad general. La velocidad excesiva del habla creó barrera de comprensión que impidió comunicación efectiva."
      },
      {
        id: "abil_past_13",
        question: "After training hard, he _____ _____ _____ win the competition.",
        translation: "Después de entrenar duro, él pudo ganar la competencia.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Para VICTORIA específica en competencia (logro concreto) usamos 'was able to': éxito particular después de preparación. En español 'pudo ganar' (pretérito) también es logro específico. Los meses de entrenamiento intenso finalmente se tradujeron en este triunfo que hace que el esfuerzo valiera la pena."
      },
      {
        id: "abil_past_14",
        question: "I _____ ride a bicycle without training wheels at age six.",
        translation: "Podía montar bicicleta sin ruedas de entrenamiento a los seis años.",
        options: ["could", "was able to", "can", "am able to"],
        correct: "could",
        explanation: "Para HABILIDAD adquirida en infancia (capacidad general) usamos 'could': lo que sabías hacer a esa edad. En español 'podía montar' (imperfecto) también es habilidad general. Este logro de equilibrio infantil es hito de desarrollo que muchos recuerdan con orgullo de niñez."
      },
      {
        id: "abil_past_15",
        question: "They _____ _____ _____ find a solution to the complex problem.",
        translation: "Ellos pudieron encontrar una solución al problema complejo.",
        options: ["were able to", "could", "can", "are able to"],
        correct: "were able to",
        explanation: "Para ÉXITO grupal en resolver problema específico usamos 'were able to': logro colectivo particular. En español 'pudieron encontrar' (pretérito) también es logro concreto. Esta solución a problema complejo muestra que colaboración y pensamiento conjunto superaron desafío que individualmente hubiera sido imposible."
      }
    ]
  },

  prepositions_time_in_on_at: {
    name: "Preposiciones de Tiempo",
    description: "In, on, at - usar correctamente con diferentes tiempos",
    icon: Battery,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_time_1",
        question: "I wake up _____ 6 AM every morning without an alarm.",
        translation: "Me despierto a las 6 AM cada mañana sin alarma.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para HORAS específicas usamos 'at': 'at 6 AM, at noon, at midnight'. Es punto exacto en el tiempo. En español 'a las 6 AM' también usa 'a'. Esta rutina matutina temprana sin alarma sugiere reloj biológico bien entrenado o hábito de sueño muy disciplinado."
      },
      {
        id: "prep_time_2",
        question: "She was born _____ May 15th, 1995 in the morning.",
        translation: "Ella nació el 15 de mayo de 1995 en la mañana.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para FECHAS específicas usamos 'on': 'on May 15th'. Incluye días y fechas completas. En español 'el 15 de mayo' usa artículo. Esta fecha de nacimiento específica es información biográfica básica que define cuándo comenzó su vida y probablemente se celebra anualmente."
      },
      {
        id: "prep_time_3",
        question: "We usually go on vacation _____ summer every year.",
        translation: "Usualmente vamos de vacaciones en verano cada año.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para ESTACIONES del año usamos 'in': 'in summer, in winter'. También para meses e años. En español 'en verano' también usa 'en'. Esta tradición vacacional estival es común porque clima cálido facilita actividades al aire libre y coincide con vacaciones escolares."
      },
      {
        id: "prep_time_4",
        question: "The meeting starts _____ Monday morning at the office.",
        translation: "La reunión comienza el lunes en la mañana en la oficina.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para DÍAS de la semana usamos 'on': 'on Monday, on Friday'. En español 'el lunes' usa artículo. Esta reunión al inicio de semana probablemente establece agenda y prioridades para los próximos días laborales."
      },
      {
        id: "prep_time_5",
        question: "I was born _____ 1990 during a very cold winter.",
        translation: "Nací en 1990 durante un invierno muy frío.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para AÑOS usamos 'in': 'in 1990, in 2020'. También meses y estaciones. En español 'en 1990' también usa 'en'. El detalle del invierno frío añade contexto climático al nacimiento que quizás se menciona en historias familiares sobre ese día."
      },
      {
        id: "prep_time_6",
        question: "She arrived _____ night when everyone was sleeping peacefully.",
        translation: "Ella llegó de noche cuando todos dormían pacíficamente.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para partes del día usamos 'at' con 'night': 'at night, at noon'. Pero 'in the morning/afternoon/evening' usa 'in'. En español 'de noche' o 'en la noche' también marca período nocturno. Esta llegada nocturna silenciosa evitó despertar a otros durmientes."
      },
      {
        id: "prep_time_7",
        question: "They're getting married _____ December 25th this year happily.",
        translation: "Se van a casar el 25 de diciembre este año felizmente.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para fecha específica completa usamos 'on': 'on December 25th'. En español 'el 25 de diciembre' usa artículo. Elegir Navidad como día de boda crea celebración doble y probablemente hace la fecha aún más memorable para la pareja."
      },
      {
        id: "prep_time_8",
        question: "I'll finish this work _____ the end of the week.",
        translation: "Terminaré este trabajo para el final de la semana.",
        options: ["by", "at", "in", "on"],
        correct: "by",
        explanation: "Para LÍMITE temporal (no más tarde que) usamos 'by': 'by the end of the week'. Es deadline. En español 'para el final' también marca límite. Esta auto-imposición de deadline de fin de semana crea estructura temporal que ayuda a priorizar y organizar el trabajo pendiente."
      },
      {
        id: "prep_time_9",
        question: "He studies best _____ the morning before breakfast time.",
        translation: "Él estudia mejor en la mañana antes del tiempo de desayuno.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para período general del día (no hora específica) usamos 'in': 'in the morning, in the afternoon'. En español 'en la mañana' también usa 'en'. Esta preferencia por estudio matutino aprovecha cuando mente está más fresca antes de que día traiga distracciones."
      },
      {
        id: "prep_time_10",
        question: "The store closes _____ 9 PM on weekdays regularly.",
        translation: "La tienda cierra a las 9 PM entre semana regularmente.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para HORA de cierre usamos 'at': 'at 9 PM'. Es momento preciso. En español 'a las 9 PM' también marca hora exacta. Este horario de cierre nocturno da tiempo suficiente después del trabajo para compras pero no es demasiado tarde para empleados."
      },
      {
        id: "prep_time_11",
        question: "I haven't seen her _____ months now - I miss her.",
        translation: "No la he visto en meses ya - la extraño.",
        options: ["in", "for", "since", "at"],
        correct: "in",
        explanation: "Para expresar 'dentro de' un período usamos 'in': 'haven't seen her in months' (en meses). También podríamos usar 'for months' (por meses). En español 'en meses' también funciona. Esta ausencia prolongada de contacto crea sentimiento de nostalgia y deseo de reconexión."
      },
      {
        id: "prep_time_12",
        question: "We'll arrive _____ two hours approximately from now.",
        translation: "Llegaremos en dos horas aproximadamente desde ahora.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para FUTURO cercano (dentro de) usamos 'in': 'in two hours' significa dos horas desde ahora. En español 'en dos horas' también indica futuro próximo. Esta estimación de tiempo de llegada ayuda a quien espera a planificar y saber cuándo prepararse para recibir."
      },
      {
        id: "prep_time_13",
        question: "She usually exercises _____ Mondays and Thursdays consistently.",
        translation: "Ella usualmente hace ejercicio los lunes y jueves consistentemente.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para días REGULARES de la semana usamos 'on': 'on Mondays' (todos los lunes). En español 'los lunes' usa artículo plural. Esta rutina de ejercicio de dos días por semana muestra compromiso con fitness mientras permite días de recuperación entre sesiones."
      },
      {
        id: "prep_time_14",
        question: "I was sleeping _____ midnight when the phone rang loudly.",
        translation: "Estaba durmiendo a medianoche cuando sonó el teléfono fuertemente.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para MEDIANOCHE o MEDIODÍA usamos 'at': 'at midnight, at noon'. Son puntos específicos. En español 'a medianoche' también usa 'a'. Esta interrupción nocturna del sueño por llamada a hora inapropiada probablemente era emergencia o error de quien llamó sobre zona horaria."
      },
      {
        id: "prep_time_15",
        question: "They lived in Paris _____ the 1990s during their youth.",
        translation: "Ellos vivieron en París en los años 90 durante su juventud.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para DÉCADAS usamos 'in': 'in the 1990s, in the 2000s'. En español 'en los años 90' también usa 'en'. Esta época parisina de juventud probablemente está llena de memorias románticas sobre vida bohemia y aventuras culturales en ciudad icónica."
      }
    ]
  },

  giving_advice_should_ought: {
    name: "Dar Consejos",
    description: "Should, ought to, had better - diferentes niveles de recomendación",
    icon: Circle,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "advice_1",
        question: "You _____ see a doctor if you feel sick.",
        translation: "Deberías ver a un doctor si te sientes enfermo.",
        options: ["should", "ought", "had better", "must"],
        correct: "should",
        explanation: "Para CONSEJO general o recomendación usamos 'should': 'you should see a doctor'. Es sugerencia no orden. En español 'deberías' también aconseja. Esta orientación médica es sensata cuando síntomas persisten, priorizando salud sobre esperar que problemas se resuelvan solos."
      },
      {
        id: "advice_2",
        question: "She _____ _____ study harder if she wants to pass.",
        translation: "Ella debería estudiar más duro si quiere pasar.",
        options: ["ought to", "should", "had better", "must"],
        correct: "ought to",
        explanation: "Usamos 'ought to' (debería) como sinónimo más formal de 'should': son intercambiables. En español 'debería estudiar' también recomienda. Esta conexión entre esfuerzo de estudio y éxito en examen es obvia pero importante recordar cuando tentación de procrastinar es fuerte."
      },
      {
        id: "advice_3",
        question: "You _____ _____ leave now or you'll miss the train!",
        translation: "Será mejor que te vayas ahora o perderás el tren.",
        options: ["had better", "should", "ought to", "must"],
        correct: "had better",
        explanation: "Para ADVERTENCIA urgente con consecuencia negativa usamos 'had better': es más fuerte que 'should', casi amenaza. En español 'será mejor que' también advierte firmemente. Esta urgencia temporal crea presión inmediata para actuar ahora o enfrentar resultado indeseable de perder transporte."
      },
      {
        id: "advice_4",
        question: "I think you _____ apologize to her for what you said.",
        translation: "Creo que deberías disculparte con ella por lo que dijiste.",
        options: ["should", "ought", "had better", "must"],
        correct: "should",
        explanation: "Para consejo sobre RELACIONES interpersonales usamos 'should': sugerencia sobre acción correcta. En español 'deberías disculparte' también aconseja. Esta recomendación de pedir perdón reconoce que palabras hirientes necesitan reparación para sanar relación dañada."
      },
      {
        id: "advice_5",
        question: "We _____ _____ respect other people's opinions always.",
        translation: "Deberíamos respetar las opiniones de otras personas siempre.",
        options: ["ought to", "should", "had better", "must"],
        correct: "ought to",
        explanation: "Para principio MORAL o ético usamos 'ought to': tiene tono más moral que 'should'. En español 'deberíamos respetar' también es deber ético. Este valor de tolerancia y respeto mutuo es fundamental para convivencia pacífica en sociedad diversa con múltiples perspectivas."
      },
      {
        id: "advice_6",
        question: "He _____ _____ _____ stop smoking for his health's sake.",
        translation: "Él será mejor que deje de fumar por el bien de su salud.",
        options: ["had better", "should", "ought to", "must"],
        correct: "had better",
        explanation: "Para consejo URGENTE sobre salud con consecuencias serias usamos 'had better': más fuerte que 'should'. En español 'será mejor que' también es advertencia. Esta presión sobre dejar hábito dañino reconoce que fumar tiene consecuencias graves que requieren acción inmediata."
      },
      {
        id: "advice_7",
        question: "You _____ eat more vegetables for better nutrition daily.",
        translation: "Deberías comer más vegetales para mejor nutrición diariamente.",
        options: ["should", "ought", "had better", "must"],
        correct: "should",
        explanation: "Para recomendación NUTRICIONAL general usamos 'should': consejo de salud sin urgencia extrema. En español 'deberías comer' también sugiere. Esta orientación dietética común reconoce que vegetales son esenciales para salud aunque muchos prefieren otras comidas."
      },
      {
        id: "advice_8",
        question: "I _____ _____ go to bed early tonight for tomorrow's exam.",
        translation: "Debería irme a la cama temprano esta noche para el examen de mañana.",
        options: ["ought to", "should", "had better", "must"],
        correct: "ought to",
        explanation: "Para AUTO-CONSEJO sobre preparación usamos 'ought to' o 'should': reconocimiento de lo que sería prudente hacer. En español 'debería irme' también es auto-recomendación. Este reconocimiento de necesidad de descanso antes de examen importante muestra madurez y planificación sensata."
      },
      {
        id: "advice_9",
        question: "They _____ save money for emergencies that might happen.",
        translation: "Ellos deberían ahorrar dinero para emergencias que podrían pasar.",
        options: ["should", "ought", "had better", "must"],
        correct: "should",
        explanation: "Para consejo FINANCIERO prudente usamos 'should': recomendación de planificación. En español 'deberían ahorrar' también aconseja. Este consejo sobre fondo de emergencia es sabiduría financiera básica que protege contra imprevistos que la vida inevitablemente trae."
      },
      {
        id: "advice_10",
        question: "You _____ _____ hurry or the shop will close soon!",
        translation: "Será mejor que te apures o la tienda cerrará pronto.",
        options: ["had better", "should", "ought to", "must"],
        correct: "had better",
        explanation: "Para URGENCIA con consecuencia inmediata usamos 'had better': advertencia fuerte sobre actuar ya. En español 'será mejor que' también urge. Esta presión temporal sobre cierre inminente de tienda requiere decisión rápida de apurarse ahora o perder oportunidad de comprar."
      },
      {
        id: "advice_11",
        question: "She _____ _____ drink more water every day for hydration.",
        translation: "Ella debería tomar más agua cada día para hidratación.",
        options: ["ought to", "should", "had better", "must"],
        correct: "ought to",
        explanation: "Para recomendación de SALUD general usamos 'ought to' o 'should': consejo sobre hábito saludable. En español 'debería tomar' también aconseja. Esta orientación de hidratación es consejo médico universal que muchos olvidan en rutina diaria ocupada."
      },
      {
        id: "advice_12",
        question: "We _____ check the weather before going hiking tomorrow.",
        translation: "Deberíamos revisar el clima antes de ir de excursión mañana.",
        options: ["should", "ought", "had better", "must"],
        correct: "should",
        explanation: "Para PRECAUCIÓN razonable antes de actividad usamos 'should': sugerencia de preparación inteligente. En español 'deberíamos revisar' también es precaución. Esta planificación meteorológica es esencial para senderismo donde condiciones pueden cambiar dramáticamente y afectar seguridad."
      },
      {
        id: "advice_13",
        question: "You _____ _____ be careful with that knife - it's sharp!",
        translation: "Será mejor que tengas cuidado con ese cuchillo - ¡está filoso!",
        options: ["had better", "should", "ought to", "must"],
        correct: "had better",
        explanation: "Para ADVERTENCIA de seguridad inmediata usamos 'had better': peligro requiere cuidado ahora. En español 'será mejor que' también advierte sobre peligro. Esta alerta sobre objeto peligroso busca prevenir accidente cortante que podría ocurrir si no se maneja con precaución adecuada."
      },
      {
        id: "advice_14",
        question: "He _____ practice more if he wants to improve skills.",
        translation: "Él debería practicar más si quiere mejorar habilidades.",
        options: ["should", "ought", "had better", "must"],
        correct: "should",
        explanation: "Para consejo sobre MEJORA personal usamos 'should': sugerencia de desarrollo. En español 'debería practicar' también recomienda. Esta conexión entre práctica y mejora es principio fundamental de aprendizaje que aplica a cualquier habilidad que queramos desarrollar."
      },
      {
        id: "advice_15",
        question: "I _____ _____ listen to your advice - you were right!",
        translation: "Debería haber escuchado tu consejo - ¡tenías razón!",
        options: ["should have", "ought have", "had better", "must have"],
        correct: "should have",
        explanation: "Para ARREPENTIMIENTO sobre no seguir consejo pasado usamos 'should have' + participio: 'should have listened'. Es crítica de decisión pasada. En español 'debería haber escuchado' también lamenta. Esta admisión de error muestra humildad al reconocer que rechazar buenos consejos tuvo consecuencias negativas."
      }
    ]
  },

  neither_nor_so_too: {
    name: "Acuerdo Negativo y Positivo",
    description: "Neither/nor, so/too - expresar acuerdo con declaraciones",
    icon: Square,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "agree_1",
        question: "I don't like coffee. - _____ do I, I prefer tea.",
        translation: "No me gusta el café. - A mí tampoco, prefiero el té.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo con declaración NEGATIVA usamos 'Neither do I' (tampoco yo): estructura es 'Neither + auxiliar + sujeto'. En español 'a mí tampoco' también concuerda negativamente. Esta coincidencia de preferencias por té sobre café crea punto de conexión entre personas con gustos similares."
      },
      {
        id: "agree_2",
        question: "I love traveling. - _____ do I, it's amazing!",
        translation: "Me encanta viajar. - A mí también, ¡es increíble!",
        options: ["So", "Neither", "Too", "Either"],
        correct: "So",
        explanation: "Para acuerdo con declaración POSITIVA usamos 'So do I' (también yo): estructura es 'So + auxiliar + sujeto'. En español 'a mí también' concuerda positivamente. Esta pasión compartida por viajes puede resultar en futuras aventuras juntos o intercambio de historias de destinos visitados."
      },
      {
        id: "agree_3",
        question: "She doesn't eat meat. - _____ does her sister either.",
        translation: "Ella no come carne. - Su hermana tampoco.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo sobre terceras personas usamos 'Neither does': 'Neither does her sister'. Es patrón familiar de dieta compartida. En español 'tampoco' también es negativo. Esta elección vegetariana compartida entre hermanas puede ser influencia mutua o valores familiares sobre alimentación."
      },
      {
        id: "agree_4",
        question: "I'm tired. - I am, _____. Let's rest now.",
        translation: "Estoy cansado. - Yo también. Descansemos ahora.",
        options: ["too", "so", "neither", "either"],
        correct: "too",
        explanation: "Para acuerdo positivo al FINAL de oración usamos 'too': 'I am, too' (yo también). Es menos formal que 'So am I'. En español 'yo también' puede ir en varias posiciones. Este cansancio compartido hace lógica la sugerencia de descanso conjunto."
      },
      {
        id: "agree_5",
        question: "He can't swim. - _____ can his brother at all.",
        translation: "Él no puede nadar. - Su hermano tampoco para nada.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo con MODAL usamos 'Neither can': 'Neither can his brother'. Repite el modal de la declaración original. En español 'tampoco puede' también es negativo. Esta falta compartida de habilidad acuática entre hermanos sugiere que no tuvieron oportunidad de aprender nadar en niñez."
      },
      {
        id: "agree_6",
        question: "I have been to France. - _____ have I, twice actually!",
        translation: "He estado en Francia. - Yo también, ¡dos veces de hecho!",
        options: ["So", "Neither", "Too", "Either"],
        correct: "So",
        explanation: "Para acuerdo positivo con PRESENTE PERFECTO usamos 'So have I': repite el auxiliar 'have'. En español 'yo también' es neutral. Esta experiencia compartida de Francia probablemente resultará en intercambio animado de historias sobre lugares visitados y recomendaciones mutuas."
      },
      {
        id: "agree_7",
        question: "I won't go to the party. - _____ will I tonight.",
        translation: "No iré a la fiesta. - Yo tampoco esta noche.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo FUTURO usamos 'Neither will I': repite 'will' de la negativa. En español 'yo tampoco' también declina. Esta decisión compartida de no asistir puede ser por falta de interés o porque prefieren hacer otra actividad juntos."
      },
      {
        id: "agree_8",
        question: "She's learning Spanish. - I am, _____. It's fun!",
        translation: "Ella está aprendiendo español. - Yo también. ¡Es divertido!",
        options: ["too", "so", "neither", "either"],
        correct: "too",
        explanation: "Para acuerdo positivo informal al FINAL usamos 'too': 'I am, too'. Es conversacional. En español 'yo también' es común. Esta coincidencia de estar aprendiendo mismo idioma crea oportunidad perfecta para practicar juntos y motivarse mutuamente en el proceso."
      },
      {
        id: "agree_9",
        question: "I didn't see the movie. - _____ did I last weekend.",
        translation: "No vi la película. - Yo tampoco el fin de semana pasado.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo en PASADO usamos 'Neither did I': repite auxiliar 'did' de la negativa. En español 'yo tampoco' es simple. Esta experiencia compartida de no haber visto película puede llevar a plan de verla juntos próximamente."
      },
      {
        id: "agree_10",
        question: "He enjoys reading. - _____ does she every evening.",
        translation: "Él disfruta leer. - Ella también cada tarde.",
        options: ["So", "Neither", "Too", "Either"],
        correct: "So",
        explanation: "Para acuerdo positivo sobre HÁBITOS usamos 'So does she': repite 'does' del presente simple. En español 'ella también' concuerda. Este placer compartido por lectura vespertina sugiere que ambos valoran tiempo tranquilo con libros como forma de relajación."
      },
      {
        id: "agree_11",
        question: "I'm not hungry. - _____ am I right now either.",
        translation: "No tengo hambre. - Yo tampoco ahora mismo.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo con 'BE' usamos 'Neither am I': repite el verbo 'be'. En español 'yo tampoco' también concuerda. Esta falta simultánea de apetito puede ser porque ambos comieron recientemente o simplemente no es hora de comida todavía."
      },
      {
        id: "agree_12",
        question: "She's excited about the trip. - _____ am I truly!",
        translation: "Ella está emocionada sobre el viaje. - ¡Yo también verdaderamente!",
        options: ["So", "Neither", "Too", "Either"],
        correct: "So",
        explanation: "Para acuerdo positivo con EMOCIÓN usamos 'So am I': repite 'am' del verbo 'be'. En español 'yo también' comparte emoción. Esta excitación compartida sobre viaje próximo multiplica la anticipación y probablemente han estado planeando juntos los detalles."
      },
      {
        id: "agree_13",
        question: "I haven't finished yet. - _____ have I so far.",
        translation: "No he terminado todavía. - Yo tampoco hasta ahora.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo con PRESENTE PERFECTO usamos 'Neither have I': ambos están en mismo estado de incompletitud. En español 'yo tampoco' también está pendiente. Esta situación compartida de trabajo inacabado puede motivar a continuar juntos o extender deadline."
      },
      {
        id: "agree_14",
        question: "He's studying hard. - She is, _____. They're dedicated!",
        translation: "Él está estudiando duro. - Ella también. ¡Son dedicados!",
        options: ["too", "so", "neither", "either"],
        correct: "too",
        explanation: "Para acuerdo positivo INFORMAL con continuo usamos 'too' al final: 'She is, too'. En español 'ella también' concuerda. Esta dedicación compartida al estudio muestra que ambos son estudiantes serios comprometidos con su educación."
      },
      {
        id: "agree_15",
        question: "I wasn't invited. - _____ was I to the party.",
        translation: "No fui invitado. - Yo tampoco a la fiesta.",
        options: ["Neither", "So", "Too", "Either"],
        correct: "Neither",
        explanation: "Para acuerdo negativo en PASADO con 'be' usamos 'Neither was I': ambos excluidos de invitación. En español 'yo tampoco' también fue excluido. Esta omisión compartida puede ser hiriente o liberadora dependiendo de si querían asistir o no al evento."
      }
    ]
  }
};

export default part21Categories;