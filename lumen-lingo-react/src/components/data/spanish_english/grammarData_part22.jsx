/**
 * SPANISH → ENGLISH GRAMMAR - PART 22
 * 4 categories, 15 questions each
 */

import { Droplet, Flame, Leaf, Cloud } from "lucide-react";

export const part22Categories = {
  for_since_ago: {
    name: "For, Since, Ago",
    description: "Expresar duración y puntos en el tiempo - diferencias críticas",
    icon: Droplet,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "dur_1",
        question: "I have lived here _____ five years now continuously.",
        translation: "He vivido aquí por cinco años ya continuamente.",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Usamos 'for' (por/durante) con DURACIÓN de tiempo: 'for five years' indica período. Va con presente perfecto porque continúa hasta ahora. En español 'por cinco años' también indica duración. La palabra 'for' responde 'cuánto tiempo' y se usa con números o cantidades de tiempo."
      },
      {
        id: "dur_2",
        question: "She has been working here _____ 2020 without breaks.",
        translation: "Ella ha estado trabajando aquí desde 2020 sin descansos.",
        options: ["since", "for", "ago", "from"],
        correct: "since",
        explanation: "Usamos 'since' (desde) con PUNTO de inicio específico: 'since 2020' marca cuándo comenzó. Va con presente perfecto. En español 'desde 2020' también marca inicio. La palabra 'since' responde 'desde cuándo' y se usa con fechas, años o momentos específicos."
      },
      {
        id: "dur_3",
        question: "They moved to this city three years _____ exactly.",
        translation: "Ellos se mudaron a esta ciudad hace tres años exactamente.",
        options: ["ago", "since", "for", "before"],
        correct: "ago",
        explanation: "Usamos 'ago' (hace) con PASADO SIMPLE para contar hacia atrás desde ahora: 'three years ago'. SIEMPRE va con pasado simple, nunca presente perfecto. En español 'hace tres años' también cuenta hacia atrás. Esta mudanza marca momento específico completado en pasado que cambió su vida."
      },
      {
        id: "dur_4",
        question: "I haven't eaten anything _____ breakfast this morning early.",
        translation: "No he comido nada desde el desayuno esta mañana temprano.",
        options: ["since", "for", "ago", "from"],
        correct: "since",
        explanation: "Con evento específico como punto de inicio usamos 'since': 'since breakfast' marca última vez que comiste. En español 'desde el desayuno' también marca punto. Esta larga ausencia de comida probablemente significa que ahora tiene mucha hambre y necesita comer pronto."
      },
      {
        id: "dur_5",
        question: "We have been friends _____ more than ten years now.",
        translation: "Hemos sido amigos por más de diez años ya.",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Con DURACIÓN (más de diez años) usamos 'for': indica período largo. En español 'por más de diez años' también es duración. Esta amistad de década demuestra lealtad y conexión profunda que ha sobrevivido a cambios de vida, distancias y desafíos temporales."
      },
      {
        id: "dur_6",
        question: "He started learning English two months _____ from scratch.",
        translation: "Él empezó a aprender inglés hace dos meses desde cero.",
        options: ["ago", "since", "for", "before"],
        correct: "ago",
        explanation: "Con INICIO de acción en pasado usamos 'ago': 'two months ago' con pasado simple 'started'. En español 'hace dos meses' también es pasado. Este período relativamente corto de aprendizaje desde cero sugiere que aún está en etapas iniciales pero ha mostrado iniciativa de comenzar."
      },
      {
        id: "dur_7",
        question: "I have known her _____ we were children together.",
        translation: "La he conocido desde que éramos niños juntos.",
        options: ["since", "for", "ago", "from"],
        correct: "since",
        explanation: "Después de 'since' puede ir CLÁUSULA completa: 'since we were children'. Marca momento de inicio lejano. En español 'desde que éramos' también usa cláusula. Esta amistad de toda la vida desde infancia representa conexión especial con historia compartida extensa."
      },
      {
        id: "dur_8",
        question: "They have been married _____ 25 years - silver anniversary!",
        translation: "Han estado casados por 25 años - ¡bodas de plata!",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Con DURACIÓN de matrimonio usamos 'for': 'for 25 years'. Este cuarto de siglo juntos es logro significativo. En español 'por 25 años' también es duración. Las bodas de plata celebran este hito matrimonial que representa compromiso sostenido a través de décadas."
      },
      {
        id: "dur_9",
        question: "I last saw him a week _____ at the supermarket.",
        translation: "Lo vi por última vez hace una semana en el supermercado.",
        options: ["ago", "since", "for", "before"],
        correct: "ago",
        explanation: "Para último encuentro en pasado usamos 'ago': 'a week ago' con pasado simple 'saw'. En español 'hace una semana' también cuenta hacia atrás. Este encuentro casual reciente en supermercado fue último contacto, y período de semana sin verse no es preocupante todavía."
      },
      {
        id: "dur_10",
        question: "She has been studying _____ three hours straight without break!",
        translation: "Ella ha estado estudiando por tres horas seguidas sin descanso.",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Con DURACIÓN continua usamos 'for': 'for three hours straight'. El continuo perfecto enfatiza que aún continúa. En español 'por tres horas' también es duración. Esta sesión de estudio maratónica sin pausas muestra dedicación intensa pero probablemente necesita descanso para mantener efectividad."
      },
      {
        id: "dur_11",
        question: "We haven't spoken _____ our last argument unfortunately.",
        translation: "No hemos hablado desde nuestra última discusión desafortunadamente.",
        options: ["since", "for", "ago", "from"],
        correct: "since",
        explanation: "Con EVENTO que causó silencio usamos 'since': 'since our last argument' marca punto donde comunicación cesó. En español 'desde nuestra última discusión' también marca ruptura. Esta falta de comunicación post-conflicto sugiere que ambos están esperando que el otro de primer paso hacia reconciliación."
      },
      {
        id: "dur_12",
        question: "The restaurant opened ten years _____ and thrived since.",
        translation: "El restaurante abrió hace diez años y ha prosperado desde entonces.",
        options: ["ago", "since", "for", "before"],
        correct: "ago",
        explanation: "Para APERTURA en pasado usamos 'ago': 'ten years ago' con pasado simple 'opened'. En español 'hace diez años' también es pasado. Esta longevidad de década en industria restaurantera es impresionante dado que muchos negocios culinarios fallan en primeros años."
      },
      {
        id: "dur_13",
        question: "I've been waiting _____ over an hour for the bus!",
        translation: "¡He estado esperando por más de una hora el autobús!",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Con DURACIÓN de espera usamos 'for': 'for over an hour'. La exclamación muestra frustración. En español 'por más de una hora' también es duración. Esta espera excesiva de transporte público es frustración urbana común que hace cuestionar confiabilidad del servicio."
      },
      {
        id: "dur_14",
        question: "She has lived abroad _____ she graduated from university.",
        translation: "Ella ha vivido en el extranjero desde que se graduó de la universidad.",
        options: ["since", "for", "ago", "from"],
        correct: "since",
        explanation: "Con evento específico (graduación) como punto de inicio usamos 'since': puede ir con cláusula completa. En español 'desde que se graduó' también marca inicio. Esta decisión de vivir internacionalmente post-universidad muestra aventurerismo y probablemente desarrollo profesional en mercado global."
      },
      {
        id: "dur_15",
        question: "We met five minutes _____ just outside the building.",
        translation: "Nos conocimos hace cinco minutos justo afuera del edificio.",
        options: ["ago", "since", "for", "before"],
        correct: "ago",
        explanation: "Para encuentro MUY reciente usamos 'ago': 'five minutes ago' con pasado simple. En español 'hace cinco minutos' también es pasado reciente. Este conocimiento súper fresco sugiere que probablemente aún están en proceso de presentaciones iniciales y primeras impresiones."
      }
    ]
  },

  probability_must_might_cant: {
    name: "Deducción y Probabilidad",
    description: "Must be, might be, can't be - expresar certeza e incertidumbre",
    icon: Flame,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "prob_1",
        question: "She _____ _____ tired - she worked 12 hours today!",
        translation: "Ella debe estar cansada - ¡trabajó 12 horas hoy!",
        options: ["must be", "might be", "can't be", "could be"],
        correct: "must be",
        explanation: "Para DEDUCCIÓN lógica fuerte (casi certeza) usamos 'must be': la evidencia (12 horas trabajo) hace el cansancio obvio. En español 'debe estar' también deduce. Esta no es obligación sino conclusión lógica basada en información que hace casi imposible que NO esté cansada."
      },
      {
        id: "prob_2",
        question: "He _____ _____ at home - his car is not here.",
        translation: "Él no puede estar en casa - su auto no está aquí.",
        options: ["can't be", "must be", "might be", "could be"],
        correct: "can't be",
        explanation: "Para IMPOSIBILIDAD lógica basada en evidencia usamos 'can't be': 'can't be at home'. La ausencia del auto prueba que no está. En español 'no puede estar' también deduce imposibilidad. Esta deducción detectivesca usa evidencia observable para concluir sobre ubicación."
      },
      {
        id: "prob_3",
        question: "They _____ _____ late - the traffic is very bad now.",
        translation: "Ellos podrían llegar tarde - el tráfico está muy malo ahora.",
        options: ["might be", "must be", "can't be", "should be"],
        correct: "might be",
        explanation: "Para POSIBILIDAD (no certeza) usamos 'might be' o 'could be': existe probabilidad pero no seguridad. En español 'podrían llegar tarde' también es posibilidad. El tráfico malo es factor que aumenta probabilidad de tardanza pero no la garantiza completamente."
      },
      {
        id: "prob_4",
        question: "That _____ _____ true - it sounds impossible to me!",
        translation: "Eso no puede ser verdad - ¡me suena imposible!",
        options: ["can't be", "must be", "might be", "could be"],
        correct: "can't be",
        explanation: "Para INCREDULIDAD o rechazo lógico usamos 'can't be': 'can't be true'. Tu razón dice que es imposible. En español 'no puede ser verdad' también rechaza. Esta expresión de escepticismo pide evidencia adicional antes de aceptar afirmación que contradice lógica o experiencia."
      },
      {
        id: "prob_5",
        question: "She _____ _____ sick - she looks very pale today.",
        translation: "Ella debe estar enferma - se ve muy pálida hoy.",
        options: ["must be", "might be", "can't be", "could be"],
        correct: "must be",
        explanation: "Para DEDUCCIÓN basada en apariencia física usamos 'must be': la palidez es síntoma que sugiere enfermedad. En español 'debe estar enferma' también deduce de evidencia visual. Esta observación preocupada sobre salud de otra persona puede llevar a ofrecer ayuda."
      },
      {
        id: "prob_6",
        question: "He _____ _____ joking - he can't be serious about that!",
        translation: "Él debe estar bromeando - ¡no puede estar hablando en serio sobre eso!",
        options: ["must be", "might be", "can't be", "could be"],
        correct: "must be",
        explanation: "Para CERTEZA sobre broma (porque lo dicho es absurdo) usamos 'must be joking': deducción fuerte. En español 'debe estar bromeando' también concluye. Esta incredulidad sobre seriedad de declaración sugiere que lo dicho es tan extremo que solo puede ser humor."
      },
      {
        id: "prob_7",
        question: "They _____ _____ rich - look at their expensive car!",
        translation: "Ellos deben ser ricos - ¡mira su auto caro!",
        options: ["must be", "might be", "can't be", "could be"],
        correct: "must be",
        explanation: "Para DEDUCCIÓN de riqueza basada en posesiones usamos 'must be': el auto costoso es evidencia visible. En español 'deben ser ricos' también deduce de objetos materiales. Esta evaluación de estatus económico basada en símbolos de riqueza es común aunque puede ser incorrecta."
      },
      {
        id: "prob_8",
        question: "It _____ _____ raining - the ground is still dry here.",
        translation: "No puede estar lloviendo - el suelo aún está seco aquí.",
        options: ["can't be", "must be", "might be", "could be"],
        correct: "can't be",
        explanation: "Para IMPOSIBILIDAD basada en evidencia física usamos 'can't be': suelo seco prueba ausencia de lluvia. En español 'no puede estar lloviendo' también niega basándose en prueba. Esta deducción lógica usa observación directa para contradecir afirmación sobre clima."
      },
      {
        id: "prob_9",
        question: "She _____ _____ at the library studying for exams now.",
        translation: "Ella podría estar en la biblioteca estudiando para exámenes ahora.",
        options: ["might be", "must be", "can't be", "should be"],
        correct: "might be",
        explanation: "Para ESPECULACIÓN sin certeza usamos 'might be' o 'could be': posibilidad razonable pero no confirmada. En español 'podría estar' también especula. Esta suposición sobre su ubicación basada en período de exámenes es conjetura educada pero requiere confirmación."
      },
      {
        id: "prob_10",
        question: "He _____ _____ _____ forgotten about our meeting today entirely.",
        translation: "Él debe haber olvidado nuestra reunión hoy completamente.",
        options: ["must have", "might have", "can't have", "could have"],
        correct: "must have",
        explanation: "Para DEDUCCIÓN sobre PASADO usamos 'must have' + participio: 'must have forgotten'. Su ausencia sugiere fuertemente que olvidó. En español 'debe haber olvidado' también deduce sobre pasado. Esta es única explicación lógica para su falta de aparición en cita programada."
      },
      {
        id: "prob_11",
        question: "That _____ _____ expensive - it looks very cheap quality.",
        translation: "Eso no puede ser caro - se ve de calidad muy barata.",
        options: ["can't be", "must be", "might be", "could be"],
        correct: "can't be",
        explanation: "Para IMPOSIBILIDAD basada en apariencia usamos 'can't be': la calidad baja visible contradice precio alto. En español 'no puede ser caro' también rechaza. Esta evaluación de valor basada en apariencia protege contra pagar demasiado por productos de baja calidad."
      },
      {
        id: "prob_12",
        question: "They _____ _____ lost - they should be here by now.",
        translation: "Ellos deben estar perdidos - deberían estar aquí ya.",
        options: ["must be", "might be", "can't be", "could be"],
        correct: "must be",
        explanation: "Para DEDUCCIÓN basada en tardanza usamos 'must be lost': retraso sugiere que no encuentran camino. En español 'deben estar perdidos' también concluye. Esta preocupación razonable sobre su ubicación puede motivar llamada para verificar si necesitan direcciones."
      },
      {
        id: "prob_13",
        question: "She _____ _____ the answer - she's very smart always.",
        translation: "Ella podría saber la respuesta - es muy inteligente siempre.",
        options: ["might know", "must know", "can't know", "could know"],
        correct: "might know",
        explanation: "Para POSIBILIDAD basada en inteligencia usamos 'might know': su capacidad sugiere que quizás sabe. En español 'podría saber' también es posibilidad. Esta especulación sobre su conocimiento reconoce su inteligencia pero no asume con certeza que tiene la respuesta."
      },
      {
        id: "prob_14",
        question: "He _____ _____ _____ received my email yet - he hasn't replied.",
        translation: "Él no puede haber recibido mi email todavía - no ha respondido.",
        options: ["can't have", "must have", "might have", "could have"],
        correct: "can't have",
        explanation: "Para IMPOSIBILIDAD en pasado basada en falta de respuesta usamos 'can't have' + participio. En español 'no puede haber recibido' también deduce sobre pasado. La ausencia de respuesta es evidencia que sugiere que email no llegó o fue a spam."
      },
      {
        id: "prob_15",
        question: "You _____ _____ hungry - you just ate an hour ago!",
        translation: "¡No puedes tener hambre - acabas de comer hace una hora!",
        options: ["can't be", "must be", "might be", "could be"],
        correct: "can't be",
        explanation: "Para IMPOSIBILIDAD lógica basada en timing usamos 'can't be': comió muy recientemente. En español 'no puedes tener hambre' también rechaza. Esta incredulidad sobre hambre tan rápida después de comer sugiere que quizás es antojo no hambre verdadera."
      }
    ]
  },

  comparison_structures: {
    name: "Estructuras Comparativas",
    description: "As...as, less than, more than - diferentes formas de comparar",
    icon: Leaf,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_str_1",
        question: "She is _____ tall _____ her older sister now.",
        translation: "Ella es tan alta como su hermana mayor ahora.",
        options: ["as / as", "more / than", "less / than", "so / as"],
        correct: "as / as",
        explanation: "Para IGUALDAD en comparación usamos 'as...as': 'as tall as'. Ambos tienen misma altura. En español 'tan...como' también compara igualdad. Esta igualación de altura entre hermanas a pesar de diferencia de edad sugiere que la menor alcanzó a la mayor en crecimiento."
      },
      {
        id: "comp_str_2",
        question: "This exam is _____ difficult _____ the last one we took.",
        translation: "Este examen es menos difícil que el último que tomamos.",
        options: ["less / than", "as / as", "more / than", "so / as"],
        correct: "less / than",
        explanation: "Para INFERIORIDAD usamos 'less...than': 'less difficult than'. Es opuesto de 'more...than'. En español 'menos difícil que' también compara inferioridad. Esta evaluación comparativa de dificultad trae alivio al saber que este examen será más manejable que el anterior terrible."
      },
      {
        id: "comp_str_3",
        question: "He runs _____ _____ his brother in every race.",
        translation: "Él corre más rápido que su hermano en cada carrera.",
        options: ["faster than", "as fast as", "less fast than", "so fast as"],
        correct: "faster than",
        explanation: "Para SUPERIORIDAD con adverbio usamos comparativo + 'than': 'faster than his brother'. En español 'más rápido que' también compara superioridad. Esta ventaja atlética consistente sobre hermano probablemente crea rivalidad competitiva amistosa entre ellos."
      },
      {
        id: "comp_str_4",
        question: "This coffee isn't _____ hot _____ I usually like it.",
        translation: "Este café no está tan caliente como usualmente me gusta.",
        options: ["as / as", "more / than", "less / than", "so / as"],
        correct: "as / as",
        explanation: "Para comparar con ESTÁNDAR personal en negativo usamos 'not as...as': no alcanza tu preferencia. En español 'no está tan...como' también compara con ideal. Esta queja sobre temperatura inadecuada de café es válida porque bebida caliente debe servirse a temperatura que realce sabor."
      },
      {
        id: "comp_str_5",
        question: "Living here is _____ expensive _____ living in the capital.",
        translation: "Vivir aquí es más caro que vivir en la capital.",
        options: ["more / than", "as / as", "less / than", "so / as"],
        correct: "more / than",
        explanation: "Para COSTO superior usamos 'more expensive than': comparación de precios entre ubicaciones. En español 'más caro que' también compara costos. Esta observación sorpresiva sobre que área no-capital es más cara invierte expectativa usual de que capitales son siempre más costosas."
      },
      {
        id: "prob_6",
        question: "She speaks English _____ _____ _____ a native speaker would.",
        translation: "Ella habla inglés tan bien como lo haría un hablante nativo.",
        options: ["as well as", "better than", "worse than", "more well than"],
        correct: "as well as",
        explanation: "Para IGUALDAD con adverbio 'well' usamos 'as well as': nivel nativo de competencia. En español 'tan bien como' también compara igualdad. Este cumplido sobre dominio del idioma reconoce que alcanzó nivel indistinguible de nativos, logro impresionante para aprendiz."
      },
      {
        id: "comp_str_7",
        question: "Today is _____ cold _____ yesterday was fortunately.",
        translation: "Hoy no está tan frío como estuvo ayer afortunadamente.",
        options: ["not as / as", "more / than", "less / than", "so / as"],
        correct: "not as / as",
        explanation: "Para inferioridad usando estructura de igualdad negativa usamos 'not as cold as': menos frío que ayer. En español 'no está tan frío como' también compara. Esta mejora climática trae alivio especialmente si ayer fue incómodamente frío."
      },
      {
        id: "comp_str_8",
        question: "This book is _____ interesting _____ the movie version.",
        translation: "Este libro es menos interesante que la versión de película.",
        options: ["less / than", "as / as", "more / than", "so / as"],
        correct: "less / than",
        explanation: "Para DECEPCIÓN de libro comparado con película usamos 'less interesting than': caso raro donde adaptación supera original. En español 'menos interesante que' también compara. Usualmente libros son mejores, pero aquí película capturó algo que texto no logró."
      },
      {
        id: "comp_str_9",
        question: "He's _____ _____ organized _____ his wife is always.",
        translation: "Él no es tan organizado como su esposa siempre es.",
        options: ["not as / as", "more / than", "less / than", "so / as"],
        correct: "not as / as",
        explanation: "Para comparar falta de cualidad usamos 'not as...as': él tiene menos organización. En español 'no es tan organizado como' también compara. Esta diferencia de hábitos organizacionales entre pareja probablemente causa fricción ocasional pero puede ser complementaria."
      },
      {
        id: "comp_str_10",
        question: "My new job is _____ stressful _____ my old one was.",
        translation: "Mi nuevo trabajo es menos estresante que mi viejo trabajo era.",
        options: ["less / than", "as / as", "more / than", "so / as"],
        correct: "less / than",
        explanation: "Para MEJORA de condiciones laborales usamos 'less stressful than': comparación favorable. En español 'menos estresante que' también compara positivamente. Esta reducción de estrés en nuevo empleo probablemente fue factor importante en decisión de cambiar trabajos."
      },
      {
        id: "comp_str_11",
        question: "She sings _____ beautifully _____ a professional would perform.",
        translation: "Ella canta tan hermosamente como un profesional lo haría.",
        options: ["as / as", "more / than", "less / than", "so / as"],
        correct: "as / as",
        explanation: "Para IGUALDAD con adverbio usamos 'as beautifully as': nivel profesional. En español 'tan hermosamente como' también equipara. Este talento natural que alcanza calidad profesional sugiere que podría considerar carrera musical si no lo ha hecho ya."
      },
      {
        id: "comp_str_12",
        question: "This phone is _____ _____ expensive _____ that one over there.",
        translation: "Este teléfono es tres veces más caro que ese de allá.",
        options: ["three times more / than", "as / as", "less / than", "more / as"],
        correct: "three times more / than",
        explanation: "Para MÚLTIPLOS en comparación usamos 'three times more...than': es tres veces el precio. En español 'tres veces más caro que' también multiplica. Esta diferencia de precio dramática entre modelos ayuda a decidir si características adicionales justifican costo significativamente mayor."
      },
      {
        id: "comp_str_13",
        question: "I don't have _____ _____ time _____ you do daily.",
        translation: "No tengo tanto tiempo como tú tienes diariamente.",
        options: ["as much / as", "more / than", "less / than", "so much / as"],
        correct: "as much / as",
        explanation: "Para comparar CANTIDADES de incontables (time) en negativo usamos 'not as much...as': menos tiempo disponible. En español 'no tengo tanto tiempo como' también compara cantidades. Esta disparidad de tiempo libre entre personas puede crear envidia o frustración sobre distribución desigual."
      },
      {
        id: "comp_str_14",
        question: "We have _____ students _____ last year in our class.",
        translation: "Tenemos menos estudiantes que el año pasado en nuestra clase.",
        options: ["fewer / than", "less / than", "as many / as", "more / than"],
        correct: "fewer / than",
        explanation: "Para CONTABLES (students) usamos 'fewer than' no 'less than': 'fewer students than last year'. En español 'menos estudiantes que' no distingue. Esta reducción en matrícula puede preocupar a administradores escolares sobre popularidad o viabilidad del programa."
      },
      {
        id: "comp_str_15",
        question: "This solution is _____ _____ effective _____ the previous one clearly.",
        translation: "Esta solución es mucho más efectiva que la anterior claramente.",
        options: ["much more / than", "as / as", "less / than", "so more / than"],
        correct: "much more / than",
        explanation: "Para INTENSIFICAR comparativo usamos 'much more...than': énfasis en superioridad. En español 'mucho más efectiva que' también intensifica. Esta mejora significativa sobre método anterior justifica cambio de enfoque y valida esfuerzo de buscar alternativas mejores."
      }
    ]
  },

  purpose_clauses_advanced: {
    name: "Cláusulas de Propósito Avanzadas",
    description: "So as to, in order not to - propósitos negativos y formales",
    icon: Cloud,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "purp_adv_1",
        question: "I'm saving money _____ _____ _____ buy a house next year.",
        translation: "Estoy ahorrando dinero para poder comprar una casa el próximo año.",
        options: ["so as to", "in order to", "for to", "to"],
        correct: "so as to",
        explanation: "Para propósito MUY FORMAL usamos 'so as to': es sinónimo de 'in order to' pero más formal aún. En español 'para poder' añade 'poder'. Esta meta de ahorro para vivienda requiere disciplina financiera sostenida y sacrificio de gastos inmediatos por objetivo a largo plazo."
      },
      {
        id: "purp_adv_2",
        question: "She left early _____ _____ _____ _____ be late for the meeting.",
        translation: "Ella salió temprano para no llegar tarde a la reunión.",
        options: ["in order not to", "so as to", "for not to", "to not"],
        correct: "in order not to",
        explanation: "Para propósito NEGATIVO formal usamos 'in order not to': evitar resultado no deseado. En español 'para no llegar tarde' también es negativo. Esta previsión de salir temprano para prevenir tardanza muestra profesionalismo y respeto por tiempo de otros participantes."
      },
      {
        id: "purp_adv_3",
        question: "He's studying hard _____ _____ _____ pass his final exams.",
        translation: "Él está estudiando duro para poder pasar sus exámenes finales.",
        options: ["so as to", "in order to", "for to", "to"],
        correct: "so as to",
        explanation: "Para propósito formal con ESFUERZO usamos 'so as to': énfasis en la meta. También funciona simple 'to'. En español 'para poder pasar' también marca propósito. Esta dedicación intensiva pre-exámenes muestra que reconoce importancia de estos exámenes para su futuro académico."
      },
      {
        id: "purp_adv_4",
        question: "We locked the door _____ _____ _____ _____ disturb anyone sleeping.",
        translation: "Cerramos la puerta para no molestar a nadie durmiendo.",
        options: ["so as not to", "in order to", "for not to", "to not"],
        correct: "so as not to",
        explanation: "Para propósito negativo MUY formal usamos 'so as not to': evitar molestia a otros. En español 'para no molestar' también es considerado. Esta cortesía nocturna de cerrar puerta silenciosamente muestra consideración por quienes descansan, priorizando su sueño sobre comodidad propia."
      },
      {
        id: "purp_adv_5",
        question: "I'm learning English _____ _____ _____ get a better job opportunity.",
        translation: "Estoy aprendiendo inglés para conseguir una mejor oportunidad laboral.",
        options: ["in order to", "so as to", "for to", "to"],
        correct: "in order to",
        explanation: "Para propósito PROFESIONAL formal usamos 'in order to': clarifica la meta claramente. En español 'para conseguir' también es propósito. Esta motivación laboral para estudiar idioma es práctica y común, reconociendo que multilingüismo abre puertas profesionales adicionales."
      },
      {
        id: "purp_adv_6",
        question: "She whispered _____ _____ _____ _____ wake the baby sleeping.",
        translation: "Ella susurró para no despertar al bebé durmiendo.",
        options: ["so as not to", "in order to", "for not to", "to not"],
        correct: "so as not to",
        explanation: "Para PRECAUCIÓN de no causar efecto usamos 'so as not to': evitar despertar. En español 'para no despertar' también previene. Esta delicadeza vocal alrededor de bebé durmiente muestra experiencia parental o consideración extrema sobre cuán difícil es conseguir que bebé duerma."
      },
      {
        id: "purp_adv_7",
        question: "We arrived early _____ _____ _____ get good seats for the show.",
        translation: "Llegamos temprano para conseguir buenos asientos para el espectáculo.",
        options: ["in order to", "so as to", "for to", "to"],
        correct: "in order to",
        explanation: "Para ESTRATEGIA de obtener ventaja usamos 'in order to': propósito claro. En español 'para conseguir' también es estratégico. Esta táctica de llegar temprano a eventos sin asientos asignados es común entre quienes valoran buena vista sobre comodidad de llegar justo a tiempo."
      },
      {
        id: "purp_adv_8",
        question: "He's exercising daily _____ _____ _____ lose weight for health.",
        translation: "Él está haciendo ejercicio diariamente para perder peso para la salud.",
        options: ["so as to", "in order to", "for to", "to"],
        correct: "so as to",
        explanation: "Para META de salud física usamos 'so as to': propósito de transformación corporal. En español 'para perder peso' también es meta. Esta rutina diaria de ejercicio muestra compromiso serio con cambio de estilo de vida, no esfuerzo temporal sino transformación sostenida."
      },
      {
        id: "purp_adv_9",
        question: "I wrote it down _____ _____ _____ _____ forget the information.",
        translation: "Lo escribí para no olvidar la información.",
        options: ["in order not to", "so as to", "for not to", "to not"],
        correct: "in order not to",
        explanation: "Para PREVENCIÓN de olvido usamos 'in order not to': propósito negativo de proteger memoria. En español 'para no olvidar' también previene. Esta acción práctica de escribir reconoce limitaciones de memoria y toma medidas para compensarlas."
      },
      {
        id: "purp_adv_10",
        question: "They're working overtime _____ _____ _____ finish the project earlier.",
        translation: "Están trabajando horas extra para terminar el proyecto más temprano.",
        options: ["so as to", "in order to", "for to", "to"],
        correct: "so as to",
        explanation: "Para ACELERAR completitud usamos 'so as to': propósito de anticipar deadline. En español 'para terminar' también es propósito. Este sacrificio de tiempo personal para trabajo muestra dedicación al proyecto o presión de entregar antes de fecha límite original."
      },
      {
        id: "purp_adv_11",
        question: "She spoke slowly _____ _____ _____ _____ make any mistakes while presenting.",
        translation: "Ella habló lentamente para no cometer ningún error mientras presentaba.",
        options: ["so as not to", "in order to", "for not to", "to not"],
        correct: "so as not to",
        explanation: "Para EVITAR errores en situación de presión usamos 'so as not to': precaución deliberada. En español 'para no cometer' también previene. Esta estrategia de hablar despacio durante presentación importante prioriza precisión sobre velocidad, mostrando que entiende que claridad es más importante que rapidez."
      },
      {
        id: "purp_adv_12",
        question: "I'm calling _____ _____ _____ confirm my appointment for tomorrow.",
        translation: "Estoy llamando para confirmar mi cita para mañana.",
        options: ["in order to", "so as to", "for to", "to"],
        correct: "in order to",
        explanation: "Para VERIFICACIÓN formal usamos 'in order to': propósito administrativo. En español 'para confirmar' también verifica. Esta llamada de confirmación es cortesía profesional que permite a ambas partes asegurar que cita sigue vigente y evita malentendidos."
      },
      {
        id: "purp_adv_13",
        question: "We're leaving now _____ _____ _____ _____ miss the beginning.",
        translation: "Nos vamos ahora para no perdernos el inicio.",
        options: ["so as not to", "in order to", "for not to", "to not"],
        correct: "so as not to",
        explanation: "Para EVITAR perder inicio usamos 'so as not to': propósito negativo de no llegar tarde. En español 'para no perdernos' también previene. Esta salida puntual reconoce que perderse inicio de película o evento afecta disfrute de experiencia completa."
      },
      {
        id: "purp_adv_14",
        question: "He saved the document _____ _____ _____ _____ lose his work.",
        translation: "Él guardó el documento para no perder su trabajo.",
        options: ["in order not to", "so as to", "for not to", "to not"],
        correct: "in order not to",
        explanation: "Para PROTECCIÓN contra pérdida usamos 'in order not to': propósito preventivo. En español 'para no perder' también protege. Este hábito de guardar frecuentemente es lección aprendida probablemente después de experiencia traumática previa de perder horas de trabajo por no guardar."
      },
      {
        id: "purp_adv_15",
        question: "She's taking notes _____ _____ _____ remember everything discussed.",
        translation: "Ella está tomando notas para recordar todo lo discutido.",
        options: ["so as to", "in order to", "for to", "to"],
        correct: "so as to",
        explanation: "Para CAPTURAR información usamos 'so as to': propósito de preservar conocimiento. En español 'para recordar' también es objetivo. Esta práctica de tomar notas durante reuniones o clases es hábito de buenos estudiantes que reconocen que memoria sola no es suficiente."
      }
    ]
  }
};

export default part22Categories;