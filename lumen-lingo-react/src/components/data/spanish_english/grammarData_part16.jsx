/**
 * SPANISH → ENGLISH GRAMMAR - PART 16
 * 4 categories, 15 questions each
 */

import { Film, Volume2, Sparkle, Music } from "lucide-react";

export const part16Categories = {
  like_as_usage: {
    name: "Like vs As",
    description: "Comparaciones y funciones - diferencias sutiles",
    icon: Film,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "like_as_1",
        question: "She sings _____ a professional artist on stage.",
        translation: "Ella canta como una artista profesional en el escenario.",
        options: ["like", "as", "alike", "same"],
        correct: "like",
        explanation: "Usamos 'like' (como) para COMPARACIONES cuando significa 'similar a'. Va seguido de sustantivo o pronombre. En español 'como' funciona para ambos casos, pero inglés distingue 'like' (comparación) de 'as' (función/rol). Esta diferencia es sutil pero importante para sonar natural en inglés."
      },
      {
        id: "like_as_2",
        question: "He works _____ a teacher at the local school.",
        translation: "Él trabaja como profesor en la escuela local.",
        options: ["as", "like", "alike", "such"],
        correct: "as",
        explanation: "Usamos 'as' (como) cuando hablamos de FUNCIÓN o ROL real que alguien desempeña. No es comparación sino lo que realmente ES. En español 'como profesor' usa 'como' para ambos, pero inglés requiere 'as' cuando describes ocupación o rol actual. Esta distinción marca si es trabajo real versus comparación."
      },
      {
        id: "like_as_3",
        question: "It looks _____ it's going to rain soon today.",
        translation: "Parece como que va a llover pronto hoy.",
        options: ["like", "as", "alike", "similar"],
        correct: "like",
        explanation: "Con cláusulas completas (sujeto + verbo) informalmente usamos 'like': 'looks like it's going to rain'. Formalmente sería 'as if' o 'as though', pero 'like' es común en conversación. En español 'parece que' también introduce cláusula. Esta predicción meteorológica basada en observación visual es conversación casual común."
      },
      {
        id: "like_as_4",
        question: "Do _____ I told you and follow the instructions carefully.",
        translation: "Haz como te dije y sigue las instrucciones cuidadosamente.",
        options: ["as", "like", "alike", "same"],
        correct: "as",
        explanation: "Para instrucciones o manera específica de hacer algo usamos 'as': 'do as I told you'. Significa 'de la manera que'. En español 'como te dije' usa 'como'. Esta es construcción de instrucción donde 'as' introduce cómo debe ejecutarse la acción, siguiendo método o ejemplo específico previamente explicado."
      },
      {
        id: "like_as_5",
        question: "You look _____ your mother - same eyes and smile!",
        translation: "Te pareces a tu madre - ¡los mismos ojos y sonrisa!",
        options: ["like", "as", "alike", "similar"],
        correct: "like",
        explanation: "Para similitud física usamos 'like': 'look like your mother'. Es comparación de apariencia. En español 'te pareces a' usa 'a', pero inglés usa 'like'. Esta observación sobre parecido familiar es cumplido común que reconoce herencia genética visible en rasgos faciales compartidos entre generaciones."
      },
      {
        id: "like_as_6",
        question: "_____ I mentioned before, the meeting is tomorrow.",
        translation: "Como mencioné antes, la reunión es mañana.",
        options: ["As", "Like", "Alike", "Such"],
        correct: "As",
        explanation: "Para referirse a algo dicho anteriormente usamos 'as': 'as I mentioned'. Es formal y conecta con información previa. En español 'como mencioné' también usa 'como'. Esta frase es útil para recordar información ya compartida sin sonar repetitivo, reforzando puntos importantes de manera cortés."
      },
      {
        id: "like_as_7",
        question: "He treats me _____ a child, not an adult!",
        translation: "Él me trata como a un niño, ¡no como adulto!",
        options: ["like", "as", "alike", "same"],
        correct: "like",
        explanation: "Para comparar cómo te tratan versus cómo deberían tratarte usamos 'like'. No eres realmente niño, solo te tratan SIMILAR a uno. En español 'como a un niño' también compara. Esta queja sobre falta de respeto expresa frustración con ser infantilizado en lugar de recibir trato apropiado a la edad."
      },
      {
        id: "like_as_8",
        question: "_____ you know, I've been studying English for years.",
        translation: "Como sabes, he estado estudiando inglés por años.",
        options: ["As", "Like", "Alike", "Such"],
        correct: "As",
        explanation: "La expresión 'as you know' (como sabes) introduce información que el oyente ya conoce. Es formal y cortés. En español 'como sabes' también usa 'como'. Esta frase contextualiza información recordando conocimiento compartido, útil para no explicar todo desde cero cuando hablas con alguien familiarizado."
      },
      {
        id: "like_as_9",
        question: "She doesn't eat meat _____ her sister does.",
        translation: "Ella no come carne como lo hace su hermana.",
        options: ["like", "as", "alike", "similar"],
        correct: "like",
        explanation: "Cuando comparamos acciones completas de dos personas usamos 'like': 'doesn't eat like her sister does'. Compara dos comportamientos diferentes. En español 'como lo hace' también compara acciones. Esta diferencia dietética entre hermanas muestra que cada persona tiene preferencias alimentarias únicas."
      },
      {
        id: "like_as_10",
        question: "This tastes exactly _____ chicken, but it's tofu!",
        translation: "Esto sabe exactamente como pollo, ¡pero es tofu!",
        options: ["like", "as", "alike", "same"],
        correct: "like",
        explanation: "Para comparar sabores o experiencias sensoriales usamos 'like'. El adverbio 'exactly' intensifica la similitud sorprendente. En español 'sabe como pollo' también compara sabores. Esta observación sobre sustituto vegetariano convincente muestra avances en alternativas de proteína que imitan texturas y sabores tradicionales."
      },
      {
        id: "like_as_11",
        question: "_____ usual, he arrived late to the meeting again.",
        translation: "Como de costumbre, llegó tarde a la reunión otra vez.",
        options: ["As", "Like", "Alike", "Same"],
        correct: "As",
        explanation: "La expresión fija es 'as usual' (como de costumbre), no 'like usual'. Esta es frase idiomática que hay que memorizar. En español 'como de costumbre' también usa 'como'. Esta observación sobre tardanza predecible sugiere que es patrón establecido que ya no sorprende a nadie."
      },
      {
        id: "like_as_12",
        question: "She's working _____ a waitress to pay for college.",
        translation: "Ella está trabajando como mesera para pagar la universidad.",
        options: ["as", "like", "alike", "such"],
        correct: "as",
        explanation: "Para trabajo o rol temporal que realmente desempeñas usamos 'as': 'working as a waitress'. Es su trabajo actual real, no comparación. En español 'trabajando como mesera' usa 'como'. Este trabajo temporal mientras estudia es realidad común de muchos estudiantes que financian su educación."
      },
      {
        id: "like_as_13",
        question: "The movie wasn't _____ good as the book version.",
        translation: "La película no fue tan buena como la versión del libro.",
        options: ["as", "like", "so", "such"],
        correct: "as",
        explanation: "En comparaciones de igualdad/desigualdad con estructura 'as...as' usamos 'as' dos veces: 'as good as'. No podemos usar 'like' aquí. En español 'tan...como' también usa dos palabras. Esta comparación común entre adaptación cinematográfica y obra literaria original típicamente favorece al libro."
      },
      {
        id: "like_as_14",
        question: "He ran _____ the wind to catch the bus!",
        translation: "¡Él corrió como el viento para alcanzar el autobús!",
        options: ["like", "as", "alike", "same"],
        correct: "like",
        explanation: "Para comparaciones metafóricas o figurativas usamos 'like': 'ran like the wind'. Es expresión poética comparando velocidad con elemento natural. En español 'como el viento' también es metáfora. Esta imagen vívida de velocidad desesperada captura la urgencia de alcanzar transporte que está a punto de irse."
      },
      {
        id: "like_as_15",
        question: "Just _____ I expected, the test was very difficult.",
        translation: "Justo como esperaba, el examen fue muy difícil.",
        options: ["as", "like", "alike", "same"],
        correct: "as",
        explanation: "Para conformidad con expectativas usamos 'as': 'just as I expected'. Significa que la realidad coincidió con la predicción. En español 'como esperaba' también usa 'como'. Esta validación de predicción negativa sobre dificultad de examen confirma que la preparación mental para desafío estaba justificada."
      }
    ]
  },

  say_tell_speak_talk: {
    name: "Say, Tell, Speak, Talk",
    description: "Verbos de comunicación - usos específicos",
    icon: Volume2,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "comm_v_1",
        question: "She _____ me that she would be late today.",
        translation: "Ella me dijo que llegaría tarde hoy.",
        options: ["told", "said", "spoke", "talked"],
        correct: "told",
        explanation: "El verbo 'tell' SIEMPRE requiere objeto personal (me, you, him). Decimos 'told me' no solo 'told'. En español 'me dijo' también requiere pronombre. Esta estructura directa con receptor hace la comunicación personal y clara sobre a quién se dirigió el mensaje."
      },
      {
        id: "comm_v_2",
        question: "He _____ 'hello' when he saw me this morning.",
        translation: "Él dijo 'hola' cuando me vio esta mañana.",
        options: ["said", "told", "spoke", "talked"],
        correct: "said",
        explanation: "El verbo 'say' se usa para citar palabras exactas o frases. No requiere objeto personal directo. En español 'dijo hola' también cita palabras. La diferencia clave: 'say' para PALABRAS específicas, 'tell' para INFORMACIÓN con receptor. Este saludo matutino es cortesía social básica."
      },
      {
        id: "comm_v_3",
        question: "Can you _____ Spanish fluently after studying?",
        translation: "¿Puedes hablar español con fluidez después de estudiar?",
        options: ["speak", "say", "tell", "talk"],
        correct: "speak",
        explanation: "Para habilidad de IDIOMAS usamos 'speak': 'speak Spanish, speak French'. Es capacidad lingüística general. En español 'hablar español' también usa 'hablar'. Los verbos 'say' y 'tell' no funcionan con idiomas. Esta pregunta sobre competencia lingüística evalúa resultado del aprendizaje formal."
      },
      {
        id: "comm_v_4",
        question: "We need to _____ about our plans for the weekend.",
        translation: "Necesitamos hablar sobre nuestros planes para el fin de semana.",
        options: ["talk", "speak", "say", "tell"],
        correct: "talk",
        explanation: "Para conversaciones o discusiones usamos 'talk about': implica intercambio bidireccional. En español 'hablar sobre' también indica conversación. La diferencia: 'speak' es más formal/unidireccional, 'talk' es conversación mutua informal. Esta necesidad de coordinar planes requiere diálogo colaborativo."
      },
      {
        id: "comm_v_5",
        question: "Please _____ the truth - don't lie to me.",
        translation: "Por favor di la verdad - no me mientas.",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "Con 'the truth' usamos 'tell': es expresión fija 'tell the truth'. Requiere objeto personal (me) porque le dices a alguien. En español 'di la verdad' también es directo. Esta petición de honestidad establece que la confianza mutua depende de comunicación veraz."
      },
      {
        id: "comm_v_6",
        question: "He _____ at the conference about climate change.",
        translation: "Él habló en la conferencia sobre el cambio climático.",
        options: ["spoke", "said", "told", "talked"],
        correct: "spoke",
        explanation: "Para presentaciones formales o discursos usamos 'speak' (no 'talk'). Es más formal. La preposición 'about' introduce el tema. En español 'habló sobre' es neutral. Este contexto de conferencia académica requiere el tono más formal que 'spoke' proporciona versus 'talked' que sería demasiado casual."
      },
      {
        id: "comm_v_7",
        question: "Don't _____ lies - always be honest with people.",
        translation: "No digas mentiras - siempre sé honesto con la gente.",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "Con 'lies' (mentiras) usamos 'tell': expresión fija 'tell lies'. Es opuesto de 'tell the truth'. En español 'decir mentiras' usa 'decir'. Esta advertencia moral sobre honestidad usa el verbo apropiado para falsedades, que es el mismo que se usa para verdades."
      },
      {
        id: "comm_v_8",
        question: "Can I _____ to the manager about this problem?",
        translation: "¿Puedo hablar con el gerente sobre este problema?",
        options: ["speak", "say", "tell", "talk"],
        correct: "speak",
        explanation: "Para solicitud formal de conversación con autoridad usamos 'speak to': es cortés y profesional. También funciona 'talk to' pero 'speak' es más formal. En español 'hablar con' es neutral. Esta petición de acceso a nivel superior sugiere que el problema requiere intervención gerencial."
      },
      {
        id: "comm_v_9",
        question: "She _____ goodbye before leaving the office.",
        translation: "Ella dijo adiós antes de salir de la oficina.",
        options: ["said", "told", "spoke", "talked"],
        correct: "said",
        explanation: "Para despedidas o saludos usamos 'say': 'say goodbye, say hello'. Son palabras específicas que pronunciamos. En español 'dijo adiós' también usa 'decir'. Esta cortesía de despedirse antes de irse muestra buenos modales profesionales y respeto por colegas."
      },
      {
        id: "comm_v_10",
        question: "Could you _____ me the time, please?",
        translation: "¿Podrías decirme la hora, por favor?",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "Para dar información específica a alguien usamos 'tell': 'tell me the time'. Requiere objeto personal. En español 'decirme la hora' también requiere pronombre. Esta petición cortés de información temporal es interacción social común cuando no tienes reloj disponible."
      },
      {
        id: "comm_v_11",
        question: "They _____ on the phone for two hours last night!",
        translation: "¡Ellos hablaron por teléfono por dos horas anoche!",
        options: ["talked", "spoke", "said", "told"],
        correct: "talked",
        explanation: "Para conversaciones largas informales por teléfono usamos 'talk on the phone'. Es intercambio mutuo prolongado. En español 'hablaron por teléfono' también usa 'hablar'. La duración de dos horas sugiere conversación profunda o chismes extensos entre amigos cercanos."
      },
      {
        id: "comm_v_12",
        question: "What did she _____ when you asked her opinion?",
        translation: "¿Qué dijo ella cuando le pediste su opinión?",
        options: ["say", "tell", "speak", "talk"],
        correct: "say",
        explanation: "Para preguntar sobre palabras o respuesta específica usamos 'say': 'what did she say'. Buscamos las palabras exactas. En español '¿qué dijo?' también usa 'decir'. Esta pregunta sobre opinión expresada muestra interés en conocer la perspectiva particular de esa persona sobre el tema."
      },
      {
        id: "comm_v_13",
        question: "I _____ to my neighbor yesterday about the noise.",
        translation: "Hablé con mi vecino ayer sobre el ruido.",
        options: ["spoke", "said", "told", "talked"],
        correct: "spoke",
        explanation: "Para conversación con alguien sobre tema específico usamos 'spoke to' o 'talked to'. Aquí 'spoke' es ligeramente más formal que 'talked'. En español 'hablé con' es neutral. Esta conversación sobre problema vecinal muestra intento de resolver conflicto directamente con comunicación civilizada."
      },
      {
        id: "comm_v_14",
        question: "Please _____ your name and address clearly on form.",
        translation: "Por favor di tu nombre y dirección claramente en el formulario.",
        options: ["say", "tell", "speak", "talk"],
        correct: "say",
        explanation: "Para pronunciar o declarar información en voz alta usamos 'say'. Es acto de articular palabras. En español 'di tu nombre' también usa 'decir'. Esta instrucción en contexto administrativo pide claridad vocal para asegurar que información importante se registre correctamente sin errores de transcripción."
      },
      {
        id: "comm_v_15",
        question: "He _____ me a joke that made everyone laugh.",
        translation: "Él me contó un chiste que hizo reír a todos.",
        options: ["told", "said", "spoke", "talked"],
        correct: "told",
        explanation: "Para contar historias, chistes o narrativas usamos 'tell': 'tell a joke, tell a story'. Requiere objeto personal. En español 'contó un chiste' usa 'contar'. Esta habilidad de contar chistes que entretienen al grupo muestra carisma social y sentido del humor que aligeran ambiente."
      }
    ]
  },

  although_despite_however: {
    name: "Although, Despite, However",
    description: "Expresar contraste y concesión - conectores",
    icon: Sparkle,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "contrast_1",
        question: "_____ it was raining, we went to the park.",
        translation: "Aunque estaba lloviendo, fuimos al parque.",
        options: ["Although", "Despite", "However", "In spite"],
        correct: "Although",
        explanation: "Usamos 'although' (aunque) seguido de sujeto + verbo: 'although it was raining'. Es conjunción que introduce cláusula completa. En español 'aunque' también va con verbo conjugado. Esta decisión de salir a pesar de mal tiempo muestra determinación o que la lluvia no fue lo suficientemente fuerte para detener planes."
      },
      {
        id: "contrast_2",
        question: "_____ the rain, we enjoyed our picnic outdoors.",
        translation: "A pesar de la lluvia, disfrutamos nuestro picnic al aire libre.",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "Usamos 'despite' (a pesar de) seguido directamente de SUSTANTIVO o gerundio, NO de cláusula con verbo. En español 'a pesar de' también va con sustantivo. Esta estructura es más concisa que 'although' cuando el contraste puede expresarse con sustantivo simple en lugar de cláusula completa."
      },
      {
        id: "contrast_3",
        question: "She studied hard; _____, she didn't pass the exam.",
        translation: "Ella estudió mucho; sin embargo, no pasó el examen.",
        options: ["however", "although", "despite", "though"],
        correct: "however",
        explanation: "Usamos 'however' (sin embargo) para conectar DOS ORACIONES COMPLETAS separadas por punto y coma o punto. Va entre las oraciones, no dentro. En español 'sin embargo' también conecta oraciones independientes. Esta decepción de no pasar a pesar del esfuerzo sugiere que el examen era excepcionalmente difícil."
      },
      {
        id: "contrast_4",
        question: "_____ _____ being tired, I finished all my work.",
        translation: "A pesar de estar cansado, terminé todo mi trabajo.",
        options: ["In spite of", "Although", "However", "Though"],
        correct: "In spite of",
        explanation: "La expresión 'in spite of' (a pesar de) es sinónimo de 'despite' y también va con sustantivo o gerundio 'being tired'. Es ligeramente más formal que 'despite'. En español 'a pesar de estar' también usa infinitivo/gerundio. Esta perseverancia a pesar de fatiga muestra fuerte ética de trabajo."
      },
      {
        id: "contrast_5",
        question: "The food was expensive. _____, it was delicious.",
        translation: "La comida era cara. Sin embargo, estaba deliciosa.",
        options: ["However", "Although", "Despite", "Though"],
        correct: "However",
        explanation: "Usamos 'however' al INICIO de segunda oración para contrastar con la primera. Requiere punto o punto y coma antes. En español 'sin embargo' también separa oraciones. Este reconocimiento de valor a pesar de precio alto justifica el gasto, indicando que la calidad culinaria compensó el costo."
      },
      {
        id: "contrast_6",
        question: "_____ he's young, he's very mature for his age.",
        translation: "Aunque es joven, es muy maduro para su edad.",
        options: ["Although", "Despite", "However", "In spite"],
        correct: "Although",
        explanation: "Para contrastar dos cualidades con cláusulas completas usamos 'although': conecta 'he's young' con 'he's mature'. En español 'aunque es' también introduce cláusula. Este cumplido sobre madurez temprana reconoce que la edad cronológica no siempre corresponde a madurez emocional o mental."
      },
      {
        id: "contrast_7",
        question: "_____ _____ the high cost, they decided to buy the house.",
        translation: "A pesar del alto costo, decidieron comprar la casa.",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "Con sustantivo directo 'the high cost' usamos 'despite' (no 'although' que necesitaría verbo). En español 'a pesar del' también va con sustantivo. Esta decisión financiera importante muestra que otros factores (ubicación, tamaño, características) superaron la objeción del precio elevado."
      },
      {
        id: "contrast_8",
        question: "I wanted to go; _____, I was too sick to leave.",
        translation: "Quería ir; sin embargo, estaba demasiado enfermo para salir.",
        options: ["however", "although", "despite", "though"],
        correct: "however",
        explanation: "Entre dos oraciones independientes que contrastan, 'however' funciona perfecto. Muestra que el deseo no pudo cumplirse por obstáculo. En español 'sin embargo' también separa ideas opuestas. La enfermedad como barrera física impidió cumplir deseo, mostrando que intención existía pero capacidad no."
      },
      {
        id: "contrast_9",
        question: "_____ feeling unwell, she came to work today anyway.",
        translation: "Aunque se sentía mal, vino a trabajar hoy de todos modos.",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "Con gerundio 'feeling unwell' usamos 'despite' (a pesar de). También podríamos decir 'although she felt unwell' con cláusula completa. En español 'aunque se sentía' usa verbo conjugado. Esta dedicación de trabajar enfermo puede ser admirable o problemática dependiendo de si contagia a otros."
      },
      {
        id: "contrast_10",
        question: "The movie was long. It was entertaining, _____.",
        translation: "La película era larga. Sin embargo, era entretenida.",
        options: ["however", "although", "despite", "though"],
        correct: "however",
        explanation: "Cuando 'however' va al FINAL de segunda oración (entre comas) añade contraste suave. Es posición alternativa a ponerlo al inicio. En español 'sin embargo' típicamente va al inicio, pero 'era entretenida de todos modos' capta la idea. La duración excesiva se compensa con calidad del contenido."
      },
      {
        id: "contrast_11",
        question: "_____ the warnings, he went swimming in the ocean.",
        translation: "A pesar de las advertencias, fue a nadar al océano.",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "Con sustantivo plural 'the warnings' usamos 'despite'. Indica que ignoró consejos de seguridad. En español 'a pesar de' también va con sustantivo. Esta decisión de nadar ignorando advertencias puede ser valentía o imprudencia dependiendo de cuán serias eran las advertencias sobre condiciones peligrosas."
      },
      {
        id: "contrast_12",
        question: "_____ I disagree with you, I respect your opinion.",
        translation: "Aunque no estoy de acuerdo contigo, respeto tu opinión.",
        options: ["Although", "Despite", "However", "In spite"],
        correct: "Although",
        explanation: "Para contrastar desacuerdo con respeto usamos 'although' con cláusula completa. Es diplomático y maduro. En español 'aunque no estoy de acuerdo' también separa opinión de respeto. Esta distinción importante muestra que podemos discrepar civilizadamente sin faltarnos al respeto."
      },
      {
        id: "contrast_13",
        question: "The test was difficult; _____, most students passed it.",
        translation: "El examen era difícil; sin embargo, la mayoría de los estudiantes lo pasaron.",
        options: ["however", "although", "despite", "though"],
        correct: "however",
        explanation: "Usamos 'however' entre dos oraciones para contrastar dificultad con éxito. Muestra que la preparación superó el desafío. En español 'sin embargo' también conecta ideas contrastantes. Este resultado positivo a pesar de dificultad valida que el esfuerzo de estudio colectivo fue efectivo."
      },
      {
        id: "contrast_14",
        question: "_____ _____ his injury, he played the entire game.",
        translation: "A pesar de su lesión, jugó el partido completo.",
        options: ["In spite of", "Although", "However", "Though"],
        correct: "In spite of",
        explanation: "Con sustantivo posesivo 'his injury' usamos 'in spite of' (o 'despite'). Ambos significan lo mismo. En español 'a pesar de su lesión' también usa sustantivo. Esta perseverancia atlética a pesar del dolor muestra dedicación extrema al equipo, aunque podría empeorar la lesión."
      },
      {
        id: "contrast_15",
        question: "I like winter _____ I don't enjoy cold weather much.",
        translation: "Me gusta el invierno aunque no disfruto mucho el clima frío.",
        options: ["although", "despite", "however", "in spite"],
        correct: "although",
        explanation: "Para contrastar preferencia general con aspecto negativo específico usamos 'although' con cláusula. Es paradoja común donde gustas algo a pesar de no gustar sus características. En español 'aunque no disfruto' también usa conjunción con verbo. Esta contradicción interna muestra que nuestros gustos son complejos y no siempre lógicos."
      }
    ]
  },

  adjectives_ending_ed_ing: {
    name: "Adjetivos -ed vs -ing",
    description: "Emoción sentida vs causa de emoción",
    icon: Music,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "ed_ing_1",
        question: "I'm very _____ in learning about astronomy.",
        translation: "Estoy muy interesado en aprender sobre astronomía.",
        options: ["interested", "interesting", "interest", "interests"],
        correct: "interested",
        explanation: "Cuando TÚ sientes la emoción usamos terminación '-ed': 'I'm interested' (yo siento interés). Es tu estado emocional. En español 'estoy interesado' también describe tu sentimiento. La terminación '-ed' siempre describe a la PERSONA que experimenta la emoción, no a la cosa que la causa."
      },
      {
        id: "ed_ing_2",
        question: "The documentary was really _____ and educational.",
        translation: "El documental era realmente interesante y educativo.",
        options: ["interesting", "interested", "interest", "interests"],
        correct: "interesting",
        explanation: "Cuando algo CAUSA la emoción en otros usamos '-ing': 'the documentary is interesting' (el documental causa interés). En español 'interesante' es forma única que no cambia. La terminación '-ing' describe la cosa que PROVOCA la emoción en quienes la experimentan, no el sentimiento mismo."
      },
      {
        id: "ed_ing_3",
        question: "She felt _____ after watching the sad movie.",
        translation: "Ella se sintió deprimida después de ver la película triste.",
        options: ["depressed", "depressing", "depress", "depresses"],
        correct: "depressed",
        explanation: "La PERSONA que siente tristeza usa '-ed': 'felt depressed'. Ella experimentó la emoción. En español 'se sintió deprimida' describe su estado emocional. Esta reacción a película triste es normal; el cine puede evocar respuestas emocionales fuertes que persisten después de terminar de verla."
      },
      {
        id: "ed_ing_4",
        question: "The news was _____ - nobody expected it.",
        translation: "Las noticias eran sorprendentes - nadie las esperaba.",
        options: ["surprising", "surprised", "surprise", "surprises"],
        correct: "surprising",
        explanation: "Las noticias CAUSAN sorpresa, por eso usamos '-ing': 'the news was surprising'. Es la fuente de la emoción. En español 'sorprendentes' modifica a noticias. La naturaleza inesperada de la información es lo que genera la reacción de shock en quienes la reciben."
      },
      {
        id: "ed_ing_5",
        question: "I'm completely _____ - I've been working for 12 hours!",
        translation: "Estoy completamente exhausto - ¡he estado trabajando 12 horas!",
        options: ["exhausted", "exhausting", "exhaust", "exhausts"],
        correct: "exhausted",
        explanation: "El cansancio que SIENTES usa '-ed': 'I'm exhausted'. Tú experimentas el agotamiento. En español 'exhausto' describe tu estado. La causa del agotamiento (12 horas de trabajo) se menciona después, pero el adjetivo describe tu condición resultante como persona afectada."
      },
      {
        id: "ed_ing_6",
        question: "This job is really _____ - I work too many hours.",
        translation: "Este trabajo es realmente agotador - trabajo demasiadas horas.",
        options: ["exhausting", "exhausted", "exhaust", "exhausts"],
        correct: "exhausting",
        explanation: "El trabajo que CAUSA agotamiento usa '-ing': 'the job is exhausting'. Es la fuente del cansancio. En español 'agotador' modifica a trabajo. La descripción de horas excesivas explica por qué el trabajo tiene esta cualidad de drenar energía de quienes lo desempeñan."
      },
      {
        id: "ed_ing_7",
        question: "The children were _____ when they saw the clown.",
        translation: "Los niños estaban emocionados cuando vieron al payaso.",
        options: ["excited", "exciting", "excite", "excites"],
        correct: "excited",
        explanation: "Los niños SIENTEN emoción, por eso '-ed': 'were excited'. Ellos experimentan el sentimiento. En español 'estaban emocionados' también describe su estado. El payaso fue el estímulo que generó esta emoción, pero el adjetivo describe la respuesta emocional de los niños."
      },
      {
        id: "ed_ing_8",
        question: "The magic show was very _____ for everyone watching.",
        translation: "El espectáculo de magia era muy emocionante para todos viendo.",
        options: ["exciting", "excited", "excite", "excites"],
        correct: "exciting",
        explanation: "El espectáculo que PROVOCA emoción usa '-ing': 'the show was exciting'. Es la fuente de excitación para la audiencia. En español 'emocionante' modifica al espectáculo. Esta cualidad del show de generar entusiasmo en espectadores es lo que lo hace exitoso y memorable."
      },
      {
        id: "ed_ing_9",
        question: "I was _____ by the sudden loud noise outside.",
        translation: "Estaba asustado por el ruido fuerte repentino afuera.",
        options: ["frightened", "frightening", "fright", "frightens"],
        correct: "frightened",
        explanation: "La persona que SIENTE miedo usa '-ed': 'I was frightened'. Tú experimentas el susto. En español 'estaba asustado' describe tu reacción. El ruido fue el estímulo externo que causó esta respuesta de miedo, pero el adjetivo describe tu estado emocional resultante como receptor."
      },
      {
        id: "ed_ing_10",
        question: "That horror movie was _____ - I couldn't sleep!",
        translation: "Esa película de terror era aterradora - ¡no pude dormir!",
        options: ["frightening", "frightened", "fright", "frightens"],
        correct: "frightening",
        explanation: "La película que CAUSA miedo usa '-ing': 'the movie was frightening'. Es la fuente del terror. En español 'aterradora' modifica a película. La consecuencia de insomnio demuestra cuán efectivamente la película cumplió su propósito de asustar, dejando impresión duradera incluso después de terminar."
      },
      {
        id: "ed_ing_11",
        question: "We're _____ with the service at this restaurant.",
        translation: "Estamos satisfechos con el servicio en este restaurante.",
        options: ["satisfied", "satisfying", "satisfy", "satisfies"],
        correct: "satisfied",
        explanation: "Los clientes que SIENTEN satisfacción usan '-ed': 'we're satisfied'. Experimentan el sentimiento positivo. En español 'satisfechos' también describe el estado de los clientes. Esta evaluación positiva del servicio sugiere que el restaurante cumplió o superó expectativas."
      },
      {
        id: "ed_ing_12",
        question: "The meal was _____ - we all enjoyed it very much.",
        translation: "La comida era satisfactoria - todos la disfrutamos mucho.",
        options: ["satisfying", "satisfied", "satisfy", "satisfies"],
        correct: "satisfying",
        explanation: "La comida que PROVOCA satisfacción usa '-ing': 'the meal was satisfying'. Causó el sentimiento positivo en quienes la comieron. En español 'satisfactoria' modifica a comida. El disfrute colectivo confirma que la comida tenía calidad para generar esta respuesta positiva en todos los comensales."
      },
      {
        id: "ed_ing_13",
        question: "He seems _____ about something - he won't tell me what.",
        translation: "Él parece preocupado por algo - no me dirá qué.",
        options: ["worried", "worrying", "worry", "worries"],
        correct: "worried",
        explanation: "La persona que SIENTE preocupación usa '-ed': 'seems worried'. Él experimenta la inquietud. En español 'preocupado' describe su estado. El misterio sobre la fuente de su preocupación añade elemento de suspenso, y su silencio puede indicar que es asunto privado o difícil de verbalizar."
      },
      {
        id: "ed_ing_14",
        question: "The situation is becoming _____ for all of us.",
        translation: "La situación se está volviendo preocupante para todos nosotros.",
        options: ["worrying", "worried", "worry", "worries"],
        correct: "worrying",
        explanation: "La situación que CAUSA preocupación usa '-ing': 'situation is worrying'. Es la fuente de inquietud colectiva. En español 'preocupante' modifica a situación. El verbo 'becoming' indica que el nivel de alarma está aumentando progresivamente, sugiriendo deterioro que requiere atención antes de crisis."
      },
      {
        id: "ed_ing_15",
        question: "I found the lecture _____ and fell asleep during it.",
        translation: "Encontré la conferencia aburrida y me quedé dormido durante ella.",
        options: ["boring", "bored", "bore", "bores"],
        correct: "boring",
        explanation: "La conferencia que CAUSA aburrimiento usa '-ing': 'the lecture was boring'. Es la fuente de tedio. En español 'aburrida' modifica a conferencia. La consecuencia de quedarse dormido es evidencia extrema de cuán poco interesante era la presentación, validando la evaluación negativa."
      }
    ]
  },

  would_rather_prefer: {
    name: "Would Rather, Prefer, Would Prefer",
    description: "Expresar preferencias de diferentes maneras",
    icon: Music,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "pref_1",
        question: "I _____ _____ stay home than go to the party.",
        translation: "Preferiría quedarme en casa que ir a la fiesta.",
        options: ["would rather", "prefer", "would prefer", "like better"],
        correct: "would rather",
        explanation: "La estructura 'would rather' va con INFINITIVO SIN 'to': 'would rather stay'. La comparación usa 'than'. En español 'preferiría' también compara opciones. Esta expresión de preferencia fuerte es útil cuando tienes que elegir entre dos actividades y una claramente te atrae más que la otra."
      },
      {
        id: "pref_2",
        question: "She _____ coffee to tea in the mornings.",
        translation: "Ella prefiere café a té en las mañanas.",
        options: ["prefers", "would rather", "would prefer", "likes better"],
        correct: "prefers",
        explanation: "Para preferencias generales habituales usamos presente simple 'prefer'. La comparación usa 'to' (no 'than'). En español 'prefiere café a té' también compara bebidas. Esta preferencia matutina específica muestra que para energía inicial del día, el café es su elección consistente sobre el té."
      },
      {
        id: "pref_3",
        question: "I _____ _____ to walk than take the bus today.",
        translation: "Preferiría caminar que tomar el autobús hoy.",
        options: ["would prefer", "would rather", "prefer", "like better"],
        correct: "would prefer",
        explanation: "La estructura 'would prefer' va con INFINITIVO CON 'to': 'would prefer to walk'. La comparación también usa 'than'. Es más formal que 'would rather'. En español 'preferiría caminar' también usa infinitivo. Esta elección de ejercicio sobre transporte puede ser por salud, clima agradable o ahorro de dinero."
      },
      {
        id: "pref_4",
        question: "They _____ watching movies to reading books usually.",
        translation: "Ellos prefieren ver películas a leer libros usualmente.",
        options: ["prefer", "would rather", "would prefer", "like better"],
        correct: "prefer",
        explanation: "Para hábitos regulares con gerundio usamos 'prefer' seguido de gerundio '-ing'. La estructura es 'prefer watching to reading'. En español 'prefieren ver' usa infinitivo donde inglés usa gerundio. Esta preferencia por entretenimiento visual sobre literario es común en era digital."
      },
      {
        id: "pref_5",
        question: "Would you _____ have pizza or pasta for dinner?",
        translation: "¿Preferirías tener pizza o pasta para la cena?",
        options: ["rather", "prefer", "like better", "want better"],
        correct: "rather",
        explanation: "En preguntas 'would you rather' se separa: 'would' + sujeto + 'rather'. Usa 'or' para opciones (no 'than'). En español '¿preferirías pizza o pasta?' también usa 'o'. Esta consulta sobre preferencia de cena permite al comensal elegir entre dos opciones populares italianas."
      },
      {
        id: "pref_6",
        question: "I _____ not talk about this topic right now, please.",
        translation: "Preferiría no hablar de este tema ahora mismo, por favor.",
        options: ["would rather", "prefer", "would prefer", "like better"],
        correct: "would rather",
        explanation: "Para preferencia negativa 'would rather not' va con infinitivo sin 'to'. Es rechazo cortés de tema de conversación. En español 'preferiría no hablar' también es negativo. Esta petición de evitar tema sensible establece límites de conversación de manera educada pero firme."
      },
      {
        id: "pref_7",
        question: "She _____ _____ swimming to running for exercise.",
        translation: "Ella prefiere nadar a correr para ejercicio.",
        options: ["prefers", "would rather", "would prefer", "likes better"],
        correct: "prefers",
        explanation: "Con gerundios comparando actividades usamos 'prefer': 'prefers swimming to running'. Ambas actividades en '-ing'. En español 'prefiere nadar a correr' usa infinitivos. Esta preferencia por ejercicio de bajo impacto puede ser por protección de articulaciones o simplemente disfrute mayor del agua."
      },
      {
        id: "pref_8",
        question: "We'd _____ eat at home than at a restaurant tonight.",
        translation: "Preferiríamos comer en casa que en un restaurante esta noche.",
        options: ["rather", "prefer", "like better", "want better"],
        correct: "rather",
        explanation: "La contracción 'we'd rather' (we would rather) va con infinitivo sin 'to'. Compara dos ubicaciones con 'than'. En español 'preferiríamos comer en casa' también expresa preferencia casera. Esta elección puede ser por economía, comodidad o deseo de privacidad sobre ambiente público."
      },
      {
        id: "pref_9",
        question: "I _____ _____ to stay a bit longer if possible.",
        translation: "Preferiría quedarme un poco más si es posible.",
        options: ["would prefer", "would rather", "prefer", "like better"],
        correct: "would prefer",
        explanation: "Para solicitud cortés de extensión usamos 'would prefer to stay'. Es más formal y educado que 'would rather'. En español 'preferiría quedarme' también es cortés. Esta petición tentativa con 'if possible' muestra que respetas las circunstancias y no presionas si no es conveniente."
      },
      {
        id: "pref_10",
        question: "He _____ playing video games to studying most days.",
        translation: "Él prefiere jugar videojuegos a estudiar la mayoría de los días.",
        options: ["prefers", "would rather", "would prefer", "likes better"],
        correct: "prefers",
        explanation: "Para patrones habituales de preferencia con gerundios usamos 'prefer': 'prefers playing to studying'. En español 'prefiere jugar' usa infinitivos. Esta priorización de entretenimiento sobre educación es dilema común de estudiantes que requiere balance y autodisciplina para no afectar rendimiento académico."
      },
      {
        id: "pref_11",
        question: "I'd _____ you didn't smoke in the house, please.",
        translation: "Preferiría que no fumes en la casa, por favor.",
        options: ["rather", "prefer", "like better", "want better"],
        correct: "rather",
        explanation: "Para preferencias sobre comportamiento de OTROS usamos 'would rather' + sujeto + pasado simple: 'I'd rather you didn't smoke'. Es estructura especial donde pasado expresa presente. En español 'preferiría que no fumes' usa subjuntivo. Esta petición cortés sobre regla de casa establece límite sobre comportamiento aceptable en espacio compartido."
      },
      {
        id: "pref_12",
        question: "Which _____ you _____, tea or coffee right now?",
        translation: "¿Cuál prefieres, té o café ahora mismo?",
        options: ["do / prefer", "would / rather", "would / prefer", "can / prefer"],
        correct: "do / prefer",
        explanation: "En preguntas con 'prefer' usamos auxiliar 'do': 'which do you prefer'. Las opciones se presentan con 'or'. En español '¿cuál prefieres?' también pregunta directamente. Esta oferta de bebidas calientes es hospitalidad común donde el anfitrión quiere asegurar que ofreces lo que el visitante realmente quiere."
      },
      {
        id: "pref_13",
        question: "I _____ not to comment on this situation publicly.",
        translation: "Prefiero no comentar sobre esta situación públicamente.",
        options: ["prefer", "would rather", "would prefer", "like better"],
        correct: "prefer",
        explanation: "Para evitar algo de manera general usamos 'prefer not to' con infinitivo. Es menos enfático que 'would rather not'. En español 'prefiero no comentar' también declina participación. Esta decisión diplomática de permanecer neutral o callado sobre tema controvertido muestra prudencia y discreción."
      },
      {
        id: "pref_14",
        question: "She'd _____ live in the city than in the countryside.",
        translation: "Ella preferiría vivir en la ciudad que en el campo.",
        options: ["rather", "prefer", "like better", "want better"],
        correct: "rather",
        explanation: "Para preferencia de estilo de vida usamos 'would rather' con infinitivo sin 'to': 'would rather live'. Compara dos entornos con 'than'. En español 'preferiría vivir en' también contrasta ubicaciones. Esta preferencia urbana sobre rural puede basarse en acceso a servicios, cultura, trabajo u oportunidades sociales."
      },
      {
        id: "pref_15",
        question: "I _____ _____ traveling by train to flying when possible.",
        translation: "Prefiero viajar en tren a volar cuando es posible.",
        options: ["prefer", "would rather", "would prefer", "like better"],
        correct: "prefer",
        explanation: "Para preferencias generales con gerundios comparando métodos usamos 'prefer': 'prefer traveling to flying'. Ambos en '-ing' con 'to' conectando. En español 'prefiero viajar' usa infinitivos. Esta preferencia por tren sobre avión puede ser por vistas panorámicas, menor estrés, ecología o miedo a volar."
      }
    ]
  }
};

export default part16Categories;