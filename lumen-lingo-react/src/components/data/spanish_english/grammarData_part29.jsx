/**
 * SPANISH → ENGLISH GRAMMAR - PART 29
 * 4 categories, 15 questions each
 */

import { Wifi, Umbrella, Target, Music } from "lucide-react";

export const part29Categories = {
  still_yet_already: {
    name: "Still, Yet, Already",
    description: "Continuidad y completitud temporal - matices de tiempo",
    icon: Wifi,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "still_yet_1",
        question: "I'm _____ working on the project - not finished yet.",
        translation: "Aún estoy trabajando en el proyecto - todavía no termino.",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Usamos 'still' (todavía/aún) para indicar que acción CONTINÚA sin terminar. Va en medio de la oración. En español 'aún estoy' también continúa. La palabra 'still' enfatiza que a pesar del tiempo transcurrido, la actividad sigue en progreso sin haber alcanzado completitud esperada."
      },
      {
        id: "still_yet_2",
        question: "Have you finished your homework _____?",
        translation: "¿Ya terminaste tu tarea?",
        options: ["yet", "still", "already", "now"],
        correct: "yet",
        explanation: "En PREGUNTAS sobre completitud usamos 'yet' (ya): 'Have you finished yet?' Va al final. En español '¿ya terminaste?' usa 'ya'. La palabra 'yet' en preguntas con presente perfecto busca saber si acción esperada finalmente ocurrió o si sigue pendiente."
      },
      {
        id: "still_yet_3",
        question: "She has _____ left for the airport - she's gone now.",
        translation: "Ella ya se fue al aeropuerto - ya se fue.",
        options: ["already", "yet", "still", "now"],
        correct: "already",
        explanation: "Usamos 'already' (ya) para indicar que algo ocurrió ANTES de lo esperado. Va en medio de verbo. En español 'ya se fue' también anticipa. Esta partida temprana al aeropuerto sugiere que quería llegar con tiempo de sobra para no arriesgarse a perder vuelo."
      },
      {
        id: "still_yet_4",
        question: "I _____ haven't received your email with the documents.",
        translation: "Aún no he recibido tu email con los documentos.",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Para PERSISTENCIA de estado negativo usamos 'still' con 'haven't': 'still haven't received'. Enfatiza que ausencia continúa. En español 'aún no he recibido' también espera. Esta demora en recibir email esperado puede ser por problemas técnicos o porque remitente no lo ha enviado todavía."
      },
      {
        id: "still_yet_5",
        question: "They haven't arrived _____ - we're still waiting for them.",
        translation: "Ellos todavía no han llegado - aún los estamos esperando.",
        options: ["yet", "still", "already", "now"],
        correct: "yet",
        explanation: "En NEGATIVO al final usamos 'yet': 'haven't arrived yet'. En español 'todavía no han llegado' también espera. La adición de 'we're still waiting' enfatiza que espera continúa, probablemente generando impaciencia creciente sobre su tardanza y preocupación sobre posibles problemas."
      },
      {
        id: "still_yet_6",
        question: "He's _____ sleeping even though it's noon already!",
        translation: "¡Él aún está durmiendo aunque ya es mediodía!",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Para CONTINUACIÓN sorprendente de acción usamos 'still sleeping': no ha despertado. En español 'aún está durmiendo' también sorprende. Esta extensión de sueño hasta mediodía puede ser recuperación de trasnochar, fin de semana de descanso, o preocupación sobre salud si es inusual."
      },
      {
        id: "still_yet_7",
        question: "I've _____ seen that movie three times this month!",
        translation: "¡Ya he visto esa película tres veces este mes!",
        options: ["already", "yet", "still", "now"],
        correct: "already",
        explanation: "Para enfatizar REPETICIÓN temprana en período usamos 'already': 'already seen three times'. En español 'ya he visto' también enfatiza. Esta frecuencia de tres visionados en un solo mes sugiere que película es favorita personal o que acompañas a diferentes personas a verla repetidamente."
      },
      {
        id: "still_yet_8",
        question: "She _____ lives with her parents at age 30 surprisingly.",
        translation: "Ella aún vive con sus padres a los 30 años sorprendentemente.",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Para CONTINUIDAD de situación usamos 'still lives': no se ha mudado. En español 'aún vive' también continúa. Esta permanencia en casa parental a los 30 puede ser por economía, cultura, cuidado de padres o simplemente preferencia, siendo más común en algunas culturas que otras."
      },
      {
        id: "still_yet_9",
        question: "Have they made a decision about the proposal _____?",
        translation: "¿Ya tomaron una decisión sobre la propuesta?",
        options: ["yet", "still", "already", "now"],
        correct: "yet",
        explanation: "En pregunta sobre decisión pendiente usamos 'yet': '¿ya decidieron?' En español '¿ya tomaron?' también pregunta completitud. Esta consulta sobre estatus de decisión importante muestra impaciencia de quien espera respuesta, necesitando saber para poder planificar próximos pasos."
      },
      {
        id: "still_yet_10",
        question: "I _____ don't understand why he left so suddenly yesterday.",
        translation: "Aún no entiendo por qué se fue tan súbitamente ayer.",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Para PERSISTENCIA de confusión usamos 'still don't understand': incomprensión continúa. En español 'aún no entiendo' también persiste. Esta partida súbita sin explicación clara dejó preguntas sin respuesta que siguen molestando, creando necesidad de entender qué motivó salida abrupta."
      },
      {
        id: "still_yet_11",
        question: "She has _____ finished - she completed it an hour ago!",
        translation: "Ella ya terminó - ¡lo completó hace una hora!",
        translation: "Ella ya terminó - ¡lo completó hace una hora!",
        options: ["already", "yet", "still", "now"],
        correct: "already",
        explanation: "Para COMPLETITUD temprana usamos 'already finished': antes de lo esperado. En español 'ya terminó' también anticipa. Esta eficiencia de completar trabajo una hora antes muestra productividad alta y buena gestión de tiempo que permite descanso extra o avanzar a siguiente tarea."
      },
      {
        id: "still_yet_12",
        question: "We're _____ waiting for your response to our email sent.",
        translation: "Aún estamos esperando tu respuesta a nuestro email enviado.",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Para ESPERA que persiste usamos 'still waiting': continuamos esperando. En español 'aún estamos esperando' también persiste. Esta persistencia de espera por respuesta sugiere que ha pasado tiempo razonable y que emisor empieza a impacientarse o preocuparse sobre si email fue recibido."
      },
      {
        id: "still_yet_13",
        question: "Haven't you eaten lunch _____ at this late hour?",
        translation: "¿Todavía no has almorzado a esta hora tan tarde?",
        options: ["yet", "still", "already", "now"],
        correct: "yet",
        explanation: "En pregunta negativa usamos 'yet': sorpresa de que no ha comido. En español '¿todavía no has almorzado?' también sorprende. Esta hora tardía para almorzar genera preocupación sobre bienestar de persona que probablemente está ocupada o distraída al punto de saltarse comida importante."
      },
      {
        id: "still_yet_14",
        question: "The baby is _____ crying after two hours straight now!",
        translation: "¡El bebé aún está llorando después de dos horas seguidas ya!",
        options: ["still", "yet", "already", "now"],
        correct: "still",
        explanation: "Para PERSISTENCIA agotadora de llanto usamos 'still crying': no se ha calmado. En español 'aún está llorando' también continúa. Estas dos horas de llanto continuo son extremadamente estresantes para padres y sugieren que bebé puede tener cólicos o malestar que necesita atención."
      },
      {
        id: "still_yet_15",
        question: "I've _____ told you this information several times before!",
        translation: "¡Ya te dije esta información varias veces antes!",
        options: ["already", "yet", "still", "now"],
        correct: "already",
        explanation: "Para FRUSTRACIÓN de haber dicho antes usamos 'already told you': repetición innecesaria. En español 'ya te dije' también frustra. Esta exasperación de tener que repetir misma información múltiples veces sugiere que oyente no está prestando atención adecuada o que información no se está reteniendo."
      }
    ]
  },

  even_though_even_if: {
    name: "Even Though vs Even If",
    description: "Aunque vs incluso si - realidad vs hipotético",
    icon: Umbrella,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "even_1",
        question: "_____ _____ it's raining now, I'll go for a walk outside.",
        translation: "Aunque está lloviendo ahora, iré a caminar afuera.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Usamos 'even though' (aunque) con HECHO REAL actual: realmente está lloviendo ahora. En español 'aunque está lloviendo' también es real. Esta determinación de salir pesar de lluvia actual muestra que el deseo de caminar es lo suficientemente fuerte para ignorar clima inconveniente."
      },
      {
        id: "even_2",
        question: "_____ _____ it rains tomorrow, I will still go hiking.",
        translation: "Incluso si llueve mañana, aún iré de excursión.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Usamos 'even if' (incluso si) con SITUACIÓN HIPOTÉTICA futura: no sabemos si lloverá. En español 'incluso si llueve' también es condicional. Esta declaración de intención firme establece que lluvia potencial futura no cambiará planes, mostrando compromiso inquebrantable con actividad planeada."
      },
      {
        id: "even_3",
        question: "_____ _____ he's rich, he lives very simply and modestly.",
        translation: "Aunque es rico, él vive muy simple y modestamente.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Para CONTRASTE con hecho conocido (es rico) usamos 'even though'. En español 'aunque es rico' también contrasta realidad. Esta modestia pesar de riqueza es virtud que muestra que dinero no cambió sus valores fundamentales ni lo llevó a ostentación excesiva."
      },
      {
        id: "even_4",
        question: "_____ _____ I win the lottery, I wouldn't quit my job.",
        translation: "Incluso si ganara la lotería, no renunciaría a mi trabajo.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Para HIPOTÉTICO improbable usamos 'even if': ganar lotería es fantasía. En español 'incluso si ganara' también especula. Esta lealtad al trabajo pesar de riqueza hipotética sugiere que encuentra significado y propósito en labor, no solo lo hace por necesidad financiera."
      },
      {
        id: "even_5",
        question: "_____ _____ I'm tired right now, I can help you with this.",
        translation: "Aunque estoy cansado ahora mismo, puedo ayudarte con esto.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Para ESTADO actual real (estás cansado) usamos 'even though'. En español 'aunque estoy cansado' también reconoce realidad. Esta generosidad de ofrecer ayuda pesar de fatiga personal muestra que priorizas necesidad de otro sobre tu propio cansancio."
      },
      {
        id: "even_6",
        question: "_____ _____ he apologizes, I won't forgive him easily.",
        translation: "Incluso si se disculpa, no lo perdonaré fácilmente.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Para CONDICIÓN futura incierta usamos 'even if': no sabemos si se disculpará. En español 'incluso si se disculpa' también especula. Esta dureza de no perdonar fácilmente incluso con disculpa sugiere que ofensa fue seria y que palabras solas no son suficientes para reparar daño."
      },
      {
        id: "even_7",
        question: "_____ _____ she studied hard, she failed the exam unfortunately.",
        translation: "Aunque estudió duro, ella reprobó el examen desafortunadamente.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Para HECHO confirmado (sí estudió) usamos 'even though': esfuerzo real no produjo éxito. En español 'aunque estudió duro' también reconoce esfuerzo. Este resultado decepcionante pesar de dedicación puede indicar que examen era muy difícil o que método de estudio necesita mejora."
      },
      {
        id: "even_8",
        question: "_____ _____ I had more time, I couldn't finish everything.",
        translation: "Incluso si tuviera más tiempo, no podría terminar todo.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Para HIPOTÉTICO irreal (no tienes más tiempo) usamos 'even if' con pasado: situación imaginaria. En español 'incluso si tuviera' también usa subjuntivo. Esta admisión de que incluso con tiempo extra sería insuficiente reconoce que tarea es tan grande que es fundamentalmente imposible completar."
      },
      {
        id: "even_9",
        question: "_____ _____ we're late, we should still go to the meeting.",
        translation: "Aunque lleguemos tarde, aún deberíamos ir a la reunión.",
        options: ["Even if", "Even though", "Even", "Though"],
        correct: "Even if",
        explanation: "Para POSIBILIDAD de tardanza usamos 'even if': no sabemos si seremos tarde. En español 'aunque lleguemos tarde' también contempla posibilidad. Esta determinación de asistir independientemente de puntualidad muestra que participación es más importante que llegar exactamente a tiempo."
      },
      {
        id: "even_10",
        question: "_____ _____ it's expensive, I'm going to buy it anyway.",
        translation: "Aunque es caro, lo voy a comprar de todas formas.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Para HECHO conocido (precio alto) usamos 'even though': sabes que es caro. En español 'aunque es caro' también reconoce precio. Esta decisión de comprar pesar de costo alto sugiere que valor, necesidad o deseo del artículo supera objeción del precio elevado."
      },
      {
        id: "even_11",
        question: "_____ _____ you don't believe me, it's absolutely true.",
        translation: "Incluso si no me crees, es absolutamente cierto.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Para POSIBILIDAD de incredulidad usamos 'even if': no sabes si te cree. En español 'incluso si no me crees' también especula. Esta insistencia en veracidad pesar de posible escepticismo establece que estás seguro de hechos independientemente de reacción del oyente."
      },
      {
        id: "even_12",
        question: "_____ _____ I'm not hungry, I should eat something healthy.",
        translation: "Aunque no tengo hambre, debería comer algo saludable.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Para ESTADO actual (sin hambre) usamos 'even though': falta de apetito es real. En español 'aunque no tengo hambre' también reconoce estado. Esta decisión de comer pesar de falta de apetito probablemente es por conocimiento de que cuerpo necesita nutrición regular independientemente de señales de hambre."
      },
      {
        id: "even_13",
        question: "_____ _____ it takes years, I'll learn this skill completely.",
        translation: "Incluso si toma años, aprenderé esta habilidad completamente.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Para COMPROMISO con duración incierta usamos 'even if': no sabes cuánto tomará. En español 'incluso si toma años' también compromete. Esta dedicación a largo plazo sin importar tiempo requerido muestra determinación seria y paciencia para dominar habilidad compleja sin atajos."
      },
      {
        id: "even_14",
        question: "_____ _____ we disagreed, we remained friends afterwards.",
        translation: "Aunque no estuvimos de acuerdo, permanecimos amigos después.",
        options: ["Even though", "Even if", "Even", "Though"],
        correct: "Even though",
        explanation: "Para HECHO pasado (sí hubo desacuerdo) usamos 'even though'. En español 'aunque no estuvimos de acuerdo' también reconoce conflicto. Esta capacidad de mantener amistad pesar de diferencias de opinión muestra madurez emocional donde puedes separar desacuerdo de afecto personal."
      },
      {
        id: "even_15",
        question: "_____ _____ they offered me more money, I wouldn't take that job.",
        translation: "Incluso si me ofrecieran más dinero, no tomaría ese trabajo.",
        options: ["Even if", "Even though", "Even", "If"],
        correct: "Even if",
        explanation: "Para RECHAZO de oferta hipotética mejorada usamos 'even if': dinero extra no cambiaría decisión. En español 'incluso si ofrecieran' también rechaza. Esta firmeza de que ni siquiera salario mayor te tentaría sugiere que razones para rechazar trabajo van más allá de compensación financiera."
      }
    ]
  },

  articles_advanced: {
    name: "Artículos Avanzados",
    description: "A, an, the, zero - casos especiales y excepciones",
    icon: Target,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "art_adv_1",
        question: "I play _____ guitar every evening at home for relaxation.",
        translation: "Toco la guitarra cada tarde en casa para relajación.",
        options: ["the", "a", "-", "an"],
        correct: "the",
        explanation: "Con INSTRUMENTOS musicales usamos 'the': 'play the guitar, play the piano'. Es regla fija. En español 'toco la guitarra' también usa artículo definido. Esta práctica vespertina regular de instrumento es pasatiempo creativo que proporciona escape artístico del estrés diario."
      },
      {
        id: "art_adv_2",
        question: "She's in _____ hospital recovering from surgery right now.",
        translation: "Ella está en el hospital recuperándose de cirugía ahora mismo.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "En inglés BRITÁNICO 'in hospital' sin artículo significa como paciente. En AMERICANO 'in the hospital' con artículo. En español 'en el hospital' usa artículo. Esta diferencia regional de inglés es importante: sin 'the' implica internación, con 'the' podría ser solo visita."
      },
      {
        id: "art_adv_3",
        question: "I go to _____ bed around 11 PM every night regularly.",
        translation: "Me voy a la cama alrededor de las 11 PM cada noche regularmente.",
        options: ["-", "the", "a", "my"],
        correct: "-",
        explanation: "Con rutinas de 'bed' NO usamos artículo: 'go to bed, in bed'. Son expresiones fijas. En español 'me voy a la cama' sí usa artículo. Esta hora de dormir de 11 PM establece rutina nocturna que permite suficiente descanso si despierta temprano para trabajo."
      },
      {
        id: "art_adv_4",
        question: "_____ life is beautiful if you know how to live it.",
        translation: "La vida es hermosa si sabes cómo vivirla.",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Con conceptos ABSTRACTOS generales (life, love, death) NO usamos artículo: 'life is beautiful'. En español 'la vida' sí usa artículo. Esta filosofía sobre belleza de existencia es reflexión universal que invita a apreciar experiencia humana con perspectiva positiva y gratitud."
      },
      {
        id: "art_adv_5",
        question: "She's studying _____ medicine at the university currently.",
        translation: "Ella está estudiando medicina en la universidad actualmente.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Con CARRERAS o materias académicas NO usamos artículo: 'study medicine, study law'. En español 'estudiar medicina' tampoco usa. Esta elección de carrera médica es camino educativo largo y desafiante que requiere años de dedicación antes de practicar profesionalmente."
      },
      {
        id: "art_adv_6",
        question: "I usually have _____ breakfast at 7 AM every morning.",
        translation: "Usualmente desayuno a las 7 AM cada mañana.",
        options: ["-", "the", "a", "my"],
        correct: "-",
        explanation: "Con COMIDAS en general (breakfast, lunch, dinner) NO usamos artículo. En español 'desayuno' tampoco lo requiere típicamente. Esta rutina matutina puntual de desayunar a hora fija estructura inicio del día y asegura que cuerpo recibe energía temprano."
      },
      {
        id: "art_adv_7",
        question: "She became _____ doctor after years of difficult study.",
        translation: "Ella se convirtió en doctora después de años de estudio difícil.",
        options: ["a", "the", "-", "an"],
        correct: "a",
        explanation: "Con PROFESIONES después de 'become' usamos 'a/an': 'became a doctor'. En español 'se convirtió en doctora' usa 'en'. Esta culminación de años de estudio médico riguroso marca transformación de estudiante a profesional, siendo logro que justifica sacrificio de educación prolongada."
      },
      {
        id: "art_adv_8",
        question: "_____ Mount Everest is the highest mountain in the world.",
        translation: "El Monte Everest es la montaña más alta del mundo.",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Con nombres de MONTAÑAS individuales NO usamos artículo: 'Mount Everest' sin 'the'. Pero cadenas montañosas sí: 'the Alps'. En español 'el Monte Everest' usa artículo. Este pico supremo mundial es desafío definitivo de montañismo que pocos logran conquistar en vida."
      },
      {
        id: "art_adv_9",
        question: "I love _____ classical music from the Baroque period especially.",
        translation: "Amo la música clásica del período Barroco especialmente.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Con géneros MUSICALES NO usamos artículo: 'love classical music, jazz, rock'. En español 'amo la música clásica' sí usa. Esta preferencia por música barroca específica muestra gusto refinado por composiciones de era dorada de Bach, Vivaldi y Handel."
      },
      {
        id: "art_adv_10",
        question: "She's _____ best student in the entire school this year.",
        translation: "Ella es la mejor estudiante de toda la escuela este año.",
        options: ["the", "a", "-", "an"],
        correct: "the",
        explanation: "Con SUPERLATIVOS siempre usamos 'the': 'the best, the worst, the tallest'. En español 'la mejor' también requiere artículo. Este reconocimiento de excelencia académica suprema entre todos los estudiantes es logro prestigioso que probablemente abre oportunidades especiales de becas o programas."
      },
      {
        id: "art_adv_11",
        question: "He's going to _____ work early tomorrow morning as usual.",
        translation: "Él va al trabajo temprano mañana en la mañana como siempre.",
        options: ["-", "the", "a", "his"],
        correct: "-",
        explanation: "La expresión 'go to work' NO usa artículo: es actividad de ir a trabajar. En español 'va al trabajo' sí usa artículo. Esta salida temprana matutina habitual establece que es persona madrugadora que probablemente aprecia tranquilidad de oficina antes de que llegue resto del personal."
      },
      {
        id: "art_adv_12",
        question: "They traveled to _____ Japan for their honeymoon last month.",
        translation: "Ellos viajaron a Japón para su luna de miel el mes pasado.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Con PAÍSES (mayoría) NO usamos artículo: 'to Japan, to Spain, to Poland'. Excepciones tienen 'the': the USA, the UK. En español 'a Japón' tampoco usa. Este destino exótico de luna de miel japonés promete experiencia cultural rica mezclando tradición milenaria con modernidad futurista."
      },
      {
        id: "art_adv_13",
        question: "I'm learning to play _____ chess in my spare time now.",
        translation: "Estoy aprendiendo a jugar ajedrez en mi tiempo libre ahora.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Con DEPORTES y JUEGOS NO usamos artículo: 'play chess, play football'. En español 'jugar ajedrez' tampoco requiere. Este aprendizaje de ajedrez es desafío mental que desarrolla estrategia, paciencia y pensamiento anticipado, siendo hobby intelectualmente estimulante."
      },
      {
        id: "art_adv_14",
        question: "She went to _____ church every Sunday morning faithfully.",
        translation: "Ella iba a la iglesia cada domingo en la mañana fielmente.",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Para PROPÓSITO espiritual 'go to church' NO usa artículo: implica actividad religiosa. Si vas al edificio físicamente usarías 'the church'. En español 'iba a la iglesia' usa artículo. Esta asistencia dominical regular refleja fe religiosa activa y compromiso espiritual sostenido."
      },
      {
        id: "art_adv_15",
        question: "_____ animals are important part of our ecosystem balance.",
        translation: "Los animales son parte importante del balance de nuestro ecosistema.",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Para hablar de categoría GENERAL (todos los animales) NO usamos artículo. En español 'los animales' sí usa artículo definido. Esta declaración ecológica sobre importancia de fauna reconoce que cada especie juega rol en equilibrio natural que mantiene salud planetaria."
      }
    ]
  },

  word_order_questions: {
    name: "Orden en Preguntas",
    description: "Inversión sujeto-verbo - estructura interrogativa correcta",
    icon: Music,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "q_order_1",
        question: "Where _____ you _____ last summer for vacation?",
        translation: "¿Dónde fuiste el verano pasado de vacaciones?",
        options: ["did / go", "went / -", "do / go", "did / went"],
        correct: "did / go",
        explanation: "En preguntas con PASADO SIMPLE invertimos con auxiliar 'did': 'Where did you go?' El verbo principal va en forma base (go, no went). En español '¿dónde fuiste?' conjuga el verbo directamente. Esta pregunta sobre destino vacacional pasado inicia conversación sobre experiencias de viaje."
      },
      {
        id: "q_order_2",
        question: "What _____ she _____ right now in her office?",
        translation: "¿Qué está haciendo ella ahora mismo en su oficina?",
        options: ["is / doing", "does / do", "do / doing", "is / do"],
        correct: "is / doing",
        explanation: "Con PRESENTE CONTINUO invertimos 'be': 'What is she doing?' No usamos 'does'. En español '¿qué está haciendo?' también usa estar + gerundio. Esta pregunta sobre actividad actual muestra curiosidad sobre qué ocupa su tiempo en este momento específico."
      },
      {
        id: "q_order_3",
        question: "How long _____ you _____ _____ here in this city?",
        translation: "¿Cuánto tiempo has estado viviendo aquí en esta ciudad?",
        options: ["have / been living", "have / lived", "are / living", "do / live"],
        correct: "have / been living",
        explanation: "Para DURACIÓN que continúa hasta ahora usamos presente perfecto continuo: 'How long have you been living?' En español '¿cuánto tiempo has estado viviendo?' también usa gerundio. Esta pregunta sobre antigüedad en ciudad ayuda a contextualizar si eres recién llegado o residente establecido."
      },
      {
        id: "q_order_4",
        question: "Why _____ he _____ so angry yesterday at the meeting?",
        translation: "¿Por qué estaba él tan enojado ayer en la reunión?",
        options: ["was / -", "did / was", "was / be", "did / be"],
        correct: "was / -",
        explanation: "Con verbo 'BE' en pasado invertimos directamente: 'Why was he angry?' Sin auxiliar 'did'. En español '¿por qué estaba enojado?' también invierte estar. Esta pregunta sobre emoción negativa visible en reunión busca entender qué trigger o situación causó reacción emocional tan fuerte."
      },
      {
        id: "q_order_5",
        question: "What time _____ the train _____ tomorrow morning?",
        translation: "¿A qué hora sale el tren mañana en la mañana?",
        options: ["does / leave", "do / leave", "is / leaving", "leaves / -"],
        correct: "does / leave",
        explanation: "Para horarios PROGRAMADOS usamos presente simple con inversión: 'What time does the train leave?' En español '¿a qué hora sale?' también pregunta horario. Esta consulta sobre hora de salida es esencial para planificar llegada a estación con tiempo suficiente antes de partida."
      },
      {
        id: "q_order_6",
        question: "Where _____ they _____ when the accident happened?",
        translation: "¿Dónde estaban ellos cuando ocurrió el accidente?",
        options: ["were / -", "did / were", "was / -", "did / be"],
        correct: "were / -",
        explanation: "Con 'BE' en pasado plural invertimos: 'Where were they?' Sin 'did'. En español '¿dónde estaban?' también invierte. Esta pregunta sobre ubicación durante accidente busca establecer si fueron testigos, víctimas o si estaban en otro lugar completamente ajenos al incidente."
      },
      {
        id: "q_order_7",
        question: "How often _____ you _____ to the gym for exercise?",
        translation: "¿Qué tan seguido vas al gimnasio para ejercicio?",
        options: ["do / go", "did / go", "are / going", "goes / -"],
        correct: "do / go",
        explanation: "Para FRECUENCIA habitual usamos presente simple: 'How often do you go?' En español '¿qué tan seguido vas?' también pregunta regularidad. Esta consulta sobre rutina de ejercicio ayuda a entender compromiso con fitness y potencialmente encontrar compañero de entrenamiento."
      },
      {
        id: "q_order_8",
        question: "Who _____ this delicious cake for the party yesterday?",
        translation: "¿Quién hizo este pastel delicioso para la fiesta ayer?",
        options: ["made", "did make", "make", "did made"],
        correct: "made",
        explanation: "Cuando 'WHO' es SUJETO de pregunta, NO invertimos ni usamos 'did': 'Who made this cake?' Pregunta quién ejecutó acción. En español '¿quién hizo?' también es directo. Este elogio de pastel busca identificar al talentoso panadero para agradecerle o pedir receta."
      },
      {
        id: "q_order_9",
        question: "What _____ you _____ if you won the lottery jackpot?",
        translation: "¿Qué harías si ganaras el premio mayor de lotería?",
        options: ["would / do", "will / do", "did / do", "do / do"],
        correct: "would / do",
        explanation: "Para pregunta HIPOTÉTICA sobre futuro irreal usamos 'would': 'What would you do if...' En español '¿qué harías si?' también usa condicional. Esta fantasía común de riqueza súbita revela prioridades y sueños, mostrando qué harías con libertad financiera completa."
      },
      {
        id: "q_order_10",
        question: "Whose _____ is that parked outside our house right now?",
        translation: "¿De quién es ese auto estacionado afuera de nuestra casa ahora mismo?",
        options: ["car", "car is", "is car", "cars"],
        correct: "car",
        explanation: "Con 'WHOSE' preguntando por sujeto, orden es 'Whose car is': posesivo + sustantivo + verbo. En español '¿de quién es ese auto?' separa posesión. Esta pregunta sobre vehículo desconocido puede ser simple curiosidad o ligera preocupación sobre por qué hay auto extraño en propiedad."
      },
      {
        id: "q_order_11",
        question: "How much _____ this jacket _____ at the store today?",
        translation: "¿Cuánto cuesta esta chaqueta en la tienda hoy?",
        options: ["does / cost", "do / cost", "is / costing", "costs / -"],
        correct: "does / cost",
        explanation: "Para preguntar PRECIO usamos 'How much does it cost?' Con tercera persona singular necesitas 'does'. En español '¿cuánto cuesta?' conjuga verbo directamente. Esta consulta de precio es paso esencial antes de decidir compra para verificar si está dentro de presupuesto."
      },
      {
        id: "q_order_12",
        question: "When _____ you _____ married to your spouse exactly?",
        translation: "¿Cuándo te casaste con tu cónyuge exactamente?",
        options: ["did / get", "do / get", "were / get", "did / got"],
        correct: "did / get",
        explanation: "Para evento PASADO específico usamos 'did' + infinitivo: 'When did you get married?' En español '¿cuándo te casaste?' conjuga directamente. Esta pregunta sobre fecha de matrimonio puede ser curiosidad social o necesidad de saber para celebrar aniversario apropiadamente."
      },
      {
        id: "q_order_13",
        question: "Which _____ do you prefer - the red or the blue?",
        translation: "¿Cuál prefieres - el rojo o el azul?",
        options: ["one", "ones", "is one", "are ones"],
        correct: "one",
        explanation: "Para preguntar entre opciones usamos 'which one': 'one' reemplaza sustantivo ya mencionado. En español '¿cuál prefieres?' omite sustantivo. Esta consulta de preferencia entre dos opciones coloridas facilita decisión de compra o regalo al entender gusto personal específico."
      },
      {
        id: "q_order_14",
        question: "What kind of music _____ she _____ to most regularly?",
        translation: "¿Qué tipo de música escucha ella más regularmente?",
        options: ["does / listen", "do / listen", "is / listening", "listens / -"],
        correct: "does / listen",
        explanation: "Para HÁBITOS con tercera persona usamos 'does': 'What kind does she listen to?' En español '¿qué tipo escucha?' también pregunta preferencia. Esta pregunta sobre gustos musicales es forma común de conocer personalidad y potencialmente encontrar intereses compartidos para conexión."
      },
      {
        id: "q_order_15",
        question: "How _____ it _____ you to get to work daily?",
        translation: "¿Cuánto tiempo te toma llegar al trabajo diariamente?",
        options: ["long does / take", "long do / take", "much does / take", "many does / take"],
        correct: "long does / take",
        explanation: "Para DURACIÓN de commute usamos 'How long does it take?' La estructura 'it takes' es impersonal. En español '¿cuánto tiempo te toma?' usa pronombre. Esta pregunta sobre tiempo de desplazamiento diario ayuda a entender cuánto de día se pierde en transporte versus productividad."
      }
    ]
  }
};

export default part29Categories;