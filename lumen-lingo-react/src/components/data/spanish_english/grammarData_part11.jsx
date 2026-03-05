/**
 * SPANISH → ENGLISH GRAMMAR - PART 11
 * 3 categories, 15 questions each
 */

import { Navigation, ShoppingBag, Award } from "lucide-react";

export const part11Categories = {
  count_noncount_quantifiers: {
    name: "Contables vs Incontables",
    description: "Many/much, few/little - cuantificadores correctos",
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "count_1",
        question: "I don't have _____ time to finish this work.",
        translation: "No tengo mucho tiempo para terminar este trabajo.",
        options: ["much", "many", "a lot", "few"],
        correct: "much",
        explanation: "Con sustantivos INCONTABLES (time, water, money) usamos 'much' en negativas y preguntas. 'Time' no se puede contar en unidades individuales. En español 'mucho tiempo' también es incontable. Esta distinción es fundamental: 'much' para cosas abstractas o líquidas, 'many' para objetos que podemos enumerar uno por uno."
      },
      {
        id: "count_2",
        question: "How _____ students are in your class this semester?",
        translation: "¿Cuántos estudiantes hay en tu clase este semestre?",
        options: ["many", "much", "few", "little"],
        correct: "many",
        explanation: "Con sustantivos CONTABLES (students, books, cars) usamos 'many' en preguntas. Podemos contar estudiantes uno por uno. En español también 'cuántos estudiantes' cuenta individuos. La pregunta 'how many' busca número específico, común en contextos educativos para entender tamaño de grupo."
      },
      {
        id: "count_3",
        question: "There is _____ water left in the bottle.",
        translation: "Queda poca agua en la botella.",
        options: ["little", "few", "a little", "a few"],
        correct: "little",
        explanation: "Con incontables (water) usamos 'little' para cantidades pequeñas. 'Little' tiene connotación negativa (no mucha). En español 'poca agua' también es incontable. La diferencia entre 'little' (casi nada, preocupante) y 'a little' (algo, suficiente) es importante: 'little' sugiere que pronto nos quedaremos sin agua."
      },
      {
        id: "count_4",
        question: "She has _____ friends in this city who can help her.",
        translation: "Ella tiene pocos amigos en esta ciudad que puedan ayudarla.",
        options: ["few", "little", "a few", "a little"],
        correct: "few",
        explanation: "Con contables (friends) usamos 'few' para cantidades pequeñas. 'Few' tiene connotación negativa (no muchos). En español 'pocos amigos' también es contable. La diferencia es que 'few' implica soledad o falta de red de apoyo, mientras 'a few' sería más optimista sugiriendo que aunque no son muchos, tiene algunos."
      },
      {
        id: "count_5",
        question: "I need _____ advice on this matter from someone experienced.",
        translation: "Necesito algún consejo sobre este asunto de alguien experimentado.",
        options: ["some", "any", "many", "few"],
        correct: "some",
        explanation: "Con incontables como 'advice' (consejo) usamos 'some' en afirmativas para cantidades indefinidas. 'Advice' NUNCA es plural en inglés. En español 'consejo' puede ser singular o plural 'consejos', pero en inglés siempre incontable. Esta diferencia confunde a hispanohablantes que quieren decir 'advices' pero no existe."
      },
      {
        id: "count_6",
        question: "Are there _____ questions about the assignment?",
        translation: "¿Hay algunas preguntas sobre la tarea?",
        options: ["any", "some", "much", "little"],
        correct: "any",
        explanation: "En preguntas usamos 'any' con contables (questions) e incontables. 'Any' es neutral para ambos tipos. En español 'algunas preguntas' es normal. Esta pregunta abierta al final de explicación invita participación y clarificación, mostrando que el profesor está disponible para resolver dudas pendientes."
      },
      {
        id: "count_7",
        question: "We have _____ _____ time before the train leaves.",
        translation: "Tenemos un poco de tiempo antes de que salga el tren.",
        options: ["a little", "a few", "little", "few"],
        correct: "a little",
        explanation: "Con incontable 'time' usamos 'a little' que tiene connotación POSITIVA (algo es suficiente). Es opuesto de 'little' (casi nada). En español 'un poco de tiempo' también es optimista. Esta frase tranquiliza que aunque el tiempo es limitado, no hay que entrar en pánico porque aún hay margen."
      },
      {
        id: "count_8",
        question: "I bought _____ _____ apples for the recipe I'm making.",
        translation: "Compré algunas manzanas para la receta que estoy haciendo.",
        options: ["a few", "a little", "few", "little"],
        correct: "a few",
        explanation: "Con contable 'apples' usamos 'a few' que significa 'algunos/unas cuantas'. Es positivo, cantidad pequeña pero suficiente. En español 'algunas manzanas' también cuenta pocas unidades. Esta frase describe compra modesta pero adecuada para necesidad culinaria específica, sin exceso."
      },
      {
        id: "count_9",
        question: "There isn't _____ information available about this topic online.",
        translation: "No hay mucha información disponible sobre este tema en línea.",
        options: ["much", "many", "few", "little"],
        correct: "much",
        explanation: "Incontable 'information' con negativo usa 'much'. En español 'información' también es incontable (no 'informaciones' en este contexto). Esta frase lamenta escasez de recursos sobre tema específico. La falta de información en internet es frustrante porque esperamos encontrar todo en línea actualmente."
      },
      {
        id: "count_10",
        question: "How _____ money do you need to borrow?",
        translation: "¿Cuánto dinero necesitas pedir prestado?",
        options: ["much", "many", "few", "little"],
        correct: "much",
        explanation: "Incontable 'money' usa 'how much' en preguntas. No podemos decir 'how many money'. En español 'cuánto dinero' también es singular incontable. Esta pregunta directa sobre cantidad específica necesaria ayuda a evaluar si podemos ayudar financieramente o no, requiriendo honestidad sobre capacidades."
      },
      {
        id: "count_11",
        question: "She made _____ mistakes on the test - only two!",
        translation: "Ella cometió pocos errores en el examen - ¡solo dos!",
        options: ["few", "little", "a few", "a little"],
        correct: "few",
        explanation: "Aunque 'few' es típicamente negativo, aquí el contexto '- only two!' lo hace positivo. Con contable 'mistakes' usamos 'few'. En español 'pocos errores' también cuenta unidades. El entusiasmo sobre solo dos errores muestra que el desempeño fue excelente, celebrando precisión en conocimiento demostrado."
      },
      {
        id: "count_12",
        question: "I have _____ patience for people who are always late.",
        translation: "Tengo poca paciencia con personas que siempre llegan tarde.",
        options: ["little", "few", "a little", "a few"],
        correct: "little",
        explanation: "Incontable abstracto 'patience' (paciencia) usa 'little' para cantidad pequeña negativa. Esto expresa frustración con impuntualidad crónica. En español 'poca paciencia' también es incontable. Esta admisión honesta de intolerancia para tardanzas repetidas establece límites claros sobre lo que estamos dispuestos a aceptar."
      },
      {
        id: "count_13",
        question: "Could you give me _____ help with this problem?",
        translation: "¿Podrías darme algo de ayuda con este problema?",
        options: ["some", "any", "many", "few"],
        correct: "some",
        explanation: "En peticiones corteses usamos 'some' (no 'any') incluso en preguntas. 'Help' es incontable. 'Some help' suena más hopeful y educado. En español 'algo de ayuda' o 'un poco de ayuda' también pide cantidad indefinida. Esta forma de pedir es más suave que exigir cantidad específica."
      },
      {
        id: "count_14",
        question: "We saw _____ interesting things at the museum yesterday.",
        translation: "Vimos muchas cosas interesantes en el museo ayer.",
        options: ["many", "much", "little", "few"],
        correct: "many",
        explanation: "Contable 'things' usa 'many' para cantidad grande en afirmativas. En español 'muchas cosas' también cuenta plurales. Esta frase entusiasta sobre visita cultural comparte que la experiencia fue rica en contenido valioso. La abundancia de cosas interesantes justifica la recomendación implícita de visitar."
      },
      {
        id: "count_15",
        question: "There's _____ hope for improving the situation quickly.",
        translation: "Hay poca esperanza de mejorar la situación rápidamente.",
        options: ["little", "few", "a little", "a few"],
        correct: "little",
        explanation: "Abstracto incontable 'hope' (esperanza) usa 'little' para expresar pesimismo. Es evaluación sombría de posibilidades. En español 'poca esperanza' también es incontable y pesimista. Esta construcción permite expresar realismo sobre situaciones difíciles sin ser completamente derrotista, reconociendo que aunque hay poca esperanza, técnicamente existe algo."
      }
    ]
  },

  so_such_constructions: {
    name: "So vs Such",
    description: "Intensificadores con diferentes estructuras",
    icon: Award,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "so_such_1",
        question: "The movie was _____ boring that I fell asleep.",
        translation: "La película era tan aburrida que me quedé dormido.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "Usamos 'so' directamente antes de ADJETIVOS o ADVERBIOS: 'so boring'. La estructura 'so...that' muestra resultado extremo. En español 'tan aburrida que' también usa 'tan' con adjetivo. Esta construcción dramática expresa que algo fue tan intenso que causó consecuencia específica, justificando nuestra reacción extrema."
      },
      {
        id: "so_such_2",
        question: "It was _____ _____ beautiful day that we went to the beach.",
        translation: "Era un día tan hermoso que fuimos a la playa.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Usamos 'such' antes de artículo + SUSTANTIVO: 'such a beautiful day'. No podemos decir 'so a'. Con 'such' el adjetivo va entre artículo y sustantivo. En español 'un día tan hermoso' pone 'tan' después del sustantivo. Esta estructura justifica decisión espontánea de cambiar planes para aprovechar clima perfecto."
      },
      {
        id: "so_such_3",
        question: "She spoke _____ quietly that nobody could hear her.",
        translation: "Ella habló tan bajito que nadie pudo escucharla.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "Con ADVERBIOS (quietly) usamos 'so', no 'such'. La estructura 'so...that' muestra la consecuencia de hablar demasiado bajo. En español 'tan bajito que' también usa 'tan' con adverbio. Esta situación ilustra problema de comunicación donde volumen insuficiente impide que el mensaje llegue a la audiencia."
      },
      {
        id: "so_such_4",
        question: "They are _____ nice people - everyone loves them!",
        translation: "Son personas tan agradables - ¡todos los quieren!",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "Antes de sustantivo PLURAL sin artículo usamos solo 'such': 'such nice people'. No necesitamos 'a' con plurales. En español 'personas tan agradables' es normal. Esta construcción explica popularidad universal. El entusiasmo en la segunda parte justifica el uso de 'such' para intensificar cuán agradables son."
      },
      {
        id: "so_such_5",
        question: "I'm _____ tired that I can barely keep my eyes open.",
        translation: "Estoy tan cansado que apenas puedo mantener los ojos abiertos.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "Con adjetivo solo (tired) usamos 'so', no 'such'. La consecuencia dramática después de 'that' enfatiza el extremo agotamiento. En español 'tan cansado que' también usa 'tan' antes del adjetivo. Esta exageración expresiva comunica fatiga extrema de manera vívida que todos reconocemos."
      },
      {
        id: "so_such_6",
        question: "It was _____ _____ difficult exam that many students failed.",
        translation: "Era un examen tan difícil que muchos estudiantes reprobaron.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con sustantivo singular (exam) usamos 'such a': artículo indefinido + adjetivo + sustantivo. En español 'un examen tan difícil' también estructura similar. La consecuencia de muchas reprobaciones justifica describir el examen como excepcionalmente difícil, no excusa personal sino evaluación objetiva de dificultad extrema."
      },
      {
        id: "so_such_7",
        question: "He drives _____ fast that it makes me nervous!",
        translation: "Él maneja tan rápido que me pone nervioso.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "Con adverbio (fast) usamos 'so'. La consecuencia emocional (makes me nervous) muestra el impacto de su velocidad. En español 'tan rápido que' también modifica adverbio. Esta queja sobre conducción peligrosa es forma educada de expresar incomodidad sin acusar directamente, relacionando velocidad con respuesta emocional."
      },
      {
        id: "so_such_8",
        question: "She has _____ _____ lovely voice for singing opera.",
        translation: "Ella tiene una voz tan encantadora para cantar ópera.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con 'voice' (sustantivo contable singular) usamos 'such a lovely voice'. El adjetivo 'lovely' va entre 'a' y 'voice'. En español 'una voz tan encantadora' también alaba. Este cumplido sobre talento vocal es específico y genuino, reconociendo que su voz tiene cualidad especial apropiada para género musical específico."
      },
      {
        id: "so_such_9",
        question: "I've never seen _____ many people in one place before!",
        translation: "¡Nunca había visto tanta gente en un lugar antes!",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "Con cuantificador 'many' usamos 'so' para intensificar: 'so many people'. Esto es excepción porque 'many' funciona como adverbio aquí. En español 'tanta gente' también expresa multitud abrumadora. Esta expresión de asombro ante multitudes masivas captura esa sensación de ser tragado por mar humano en eventos grandes."
      },
      {
        id: "so_such_10",
        question: "The restaurant had _____ good food that we went back twice!",
        translation: "El restaurante tenía comida tan buena que regresamos dos veces.",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "Con sustantivo incontable sin artículo (food) usamos 'such': 'such good food'. No hay 'a' porque 'food' es incontable. En español 'comida tan buena' también es incontable. El hecho de regresar dos veces es prueba contundente de calidad excepcional, validando el uso de 'such' para intensificar."
      },
      {
        id: "so_such_11",
        question: "I'm not _____ stupid as to believe that lie.",
        translation: "No soy tan estúpido como para creer esa mentira.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "La estructura 'so...as to' expresa grado seguido de infinitivo con consecuencia. Con adjetivo (stupid) usamos 'so'. Es defensa de la inteligencia propia. En español 'tan...como para' también conecta grado con acción. Esta forma permite rechazar insultos implícitos estableciendo que tenemos discernimiento suficiente."
      },
      {
        id: "so_such_12",
        question: "It was _____ _____ surprise to see you here today!",
        translation: "¡Fue una sorpresa tan grande verte aquí hoy!",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con 'surprise' (sustantivo contable) usamos 'such a big surprise'. El adjetivo 'big' está implícito o explícito. En español 'una sorpresa tan grande' también estructura con sustantivo. Esta exclamación de sorpresa genuina ante encuentro inesperado comunica la alegría y shock simultáneos de coincidencias fortuitas."
      },
      {
        id: "so_such_13",
        question: "He's _____ generous with his time helping others.",
        translation: "Él es tan generoso con su tiempo ayudando a otros.",
        options: ["so", "such", "such a", "very"],
        correct: "so",
        explanation: "Con adjetivo solo (generous) usamos 'so'. Aquí sin 'that' clause pero el énfasis permanece. En español 'tan generoso' también intensifica cualidad. Este reconocimiento de generosidad temporal es elogio significativo en mundo donde el tiempo es recurso escaso que protegemos celosamente."
      },
      {
        id: "so_such_14",
        question: "They have _____ _____ small apartment for a family of five.",
        translation: "Tienen un apartamento tan pequeño para una familia de cinco.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con sustantivo singular (apartment) usamos 'such a small apartment'. Esta construcción expresa lástima por condiciones de vivienda apretadas. En español 'un apartamento tan pequeño' también lamenta. Esta observación reconoce desafíos de familias grandes viviendo en espacios reducidos, situación común en ciudades caras."
      },
      {
        id: "so_such_15",
        question: "I've had _____ _____ long day - I need to rest now.",
        translation: "He tenido un día tan largo - necesito descansar ahora.",
        options: ["such a", "so", "so a", "such"],
        correct: "such a",
        explanation: "Con 'day' (sustantivo contable) usamos 'such a long day'. La necesidad de descanso justifica describir el día como excepcionalmente largo. En español 'un día tan largo' también explica fatiga. Esta estructura común al final del día permite expresar agotamiento y justificar necesidad de tiempo personal para recuperación."
      }
    ]
  },

  purpose_result_clauses: {
    name: "Cláusulas de Propósito y Resultado",
    description: "To, in order to, so that - expresar intención",
    icon: Navigation,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "purp_res_1",
        question: "I'm studying hard _____ pass my exams successfully.",
        translation: "Estoy estudiando mucho para pasar mis exámenes exitosamente.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Para expresar propósito de manera simple usamos infinitivo con 'to'. Es forma más común y natural. En español 'para pasar' también usa preposición con infinitivo. Esta estructura básica pero esencial conecta esfuerzo presente con meta futura deseada, mostrando que nuestras acciones tienen propósito claro."
      },
      {
        id: "purp_res_2",
        question: "She's saving money _____ _____ _____ buy a car next year.",
        translation: "Ella está ahorrando dinero para poder comprar un auto el próximo año.",
        options: ["in order to", "to", "so that", "for"],
        correct: "in order to",
        explanation: "La expresión 'in order to' es más formal que simple 'to' pero significa lo mismo. Enfatiza la intención deliberada y planificada. En español 'para poder' o solo 'para' comprar son equivalentes. Esta forma más formal es apropiada en contextos donde queremos sonar más serios sobre nuestras metas financieras."
      },
      {
        id: "purp_res_3",
        question: "I'll speak slowly _____ _____ you can understand me better.",
        translation: "Hablaré lentamente para que puedas entenderme mejor.",
        options: ["so that", "to", "in order to", "for"],
        correct: "so that",
        explanation: "Cuando el propósito involucra a OTRA PERSONA haciendo algo, usamos 'so that' con sujeto y verbo. No podemos usar solo 'to' aquí. En español 'para que' también requiere subjuntivo con sujeto diferente. Esta estructura muestra consideración al ajustar nuestra comunicación para facilitar comprensión del oyente."
      },
      {
        id: "purp_res_4",
        question: "He woke up early _____ catch the first train.",
        translation: "Se despertó temprano para alcanzar el primer tren.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Simple 'to' más infinitivo expresa propósito cuando el sujeto de ambas acciones es el mismo. Él despertó y él alcanzó (mismo sujeto). En español 'para alcanzar' también usa mismo sujeto implícito. Esta estructura describe planificación intencional matutina para lograr objetivo específico de transporte."
      },
      {
        id: "purp_res_5",
        question: "I'm learning English _____ I can get a better job.",
        translation: "Estoy aprendiendo inglés para que pueda conseguir un mejor trabajo.",
        options: ["so that", "to", "in order to", "for"],
        correct: "so that",
        explanation: "Aunque el sujeto es el mismo (I), cuando usamos 'can' o modal, preferimos 'so that': 'so that I can get'. También funciona 'to get' pero 'so that' con modal suena más natural. En español 'para que pueda' usa subjuntivo. Esta meta laboral es motivación común para estudio de idiomas."
      },
      {
        id: "purp_res_6",
        question: "She went to the store _____ buy some groceries for dinner.",
        translation: "Ella fue a la tienda para comprar comida para la cena.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Propósito simple con mismo sujeto usa 'to' más infinitivo. Fue y compró (misma persona). En español 'para comprar' también es directo. El propósito específico (groceries for dinner) muestra planificación hogareña típica. Esta estructura básica es fundamental para explicar por qué hacemos nuestras actividades diarias."
      },
      {
        id: "purp_res_7",
        question: "He studied medicine _____ become a doctor like his father.",
        translation: "Estudió medicina para convertirse en doctor como su padre.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "El infinitivo con 'to' expresa meta profesional a largo plazo. La comparación 'like his father' añade motivación familiar. En español 'para convertirse' también usa propósito con infinitivo. Esta estructura describe aspiraciones de carrera influenciadas por modelos familiares y el deseo de seguir pasos de progenitores admirados."
      },
      {
        id: "purp_res_8",
        question: "I'm calling _____ make an appointment with the dentist.",
        translation: "Estoy llamando para hacer una cita con el dentista.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "El propósito de la llamada se expresa con 'to make'. Es acción directa con objetivo claro. En español 'para hacer' también conecta llamada con propósito. Esta frase describe gestión proactiva de salud dental, tomando iniciativa de programar cuidado preventivo necesario."
      },
      {
        id: "purp_res_9",
        question: "They left early _____ _____ they wouldn't miss their flight.",
        translation: "Salieron temprano para que no perdieran su vuelo.",
        options: ["so that", "to", "in order to", "for"],
        correct: "so that",
        explanation: "Para evitar algo negativo (missing flight) con modal negativo 'wouldn't', usamos 'so that'. En español 'para que no perdieran' usa subjuntivo. Esta planificación cautelosa de viaje muestra previsión inteligente. La estructura 'so that...wouldn't' es común para expresar prevención de resultados no deseados."
      },
      {
        id: "purp_res_10",
        question: "We arrived early _____ get good seats at the concert.",
        translation: "Llegamos temprano para conseguir buenos asientos en el concierto.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Propósito simple de llegar temprano: 'to get good seats'. Estrategia común en eventos populares. En español 'para conseguir' también es directo. Esta táctica refleja que en eventos sin asientos asignados, llegar primero es clave para mejores ubicaciones, justificando el sacrificio de llegar con anticipación."
      },
      {
        id: "purp_res_11",
        question: "I'll write it down _____ I don't forget later.",
        translation: "Lo escribiré para que no se me olvide después.",
        options: ["so that", "to", "for", "because"],
        correct: "so that",
        explanation: "Para prevención con modal 'don't forget' usamos 'so that'. Aunque el sujeto es el mismo, la estructura con negación prefiere 'so that'. En español 'para que no se me olvide' también previene. Esta acción práctica reconoce limitaciones de memoria y toma medidas concretas para compensarlas."
      },
      {
        id: "purp_res_12",
        question: "He's taking classes _____ improve his computer skills.",
        translation: "Está tomando clases para mejorar sus habilidades de computación.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Propósito educativo usa 'to improve'. La meta es desarrollo de habilidades técnicas. En español 'para mejorar' también expresa esta meta de superación. Esta estructura describe inversión en educación continua, reconociendo que en mundo tecnológico actual, actualizar habilidades regularmente es necesario para mantenerse relevante."
      },
      {
        id: "purp_res_13",
        question: "She wore sunglasses _____ protect her eyes from the sun.",
        translation: "Usó lentes de sol para proteger sus ojos del sol.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Propósito de protección usa 'to protect'. Es uso funcional de accesorio. En español 'para proteger' también es preventivo. Esta estructura describe decisiones prácticas de salud donde usamos objetos con propósito específico de prevenir daño. El sol puede dañar ojos, y esta acción sensata muestra cuidado personal."
      },
      {
        id: "purp_res_14",
        question: "We're meeting _____ discuss the new project details.",
        translation: "Nos estamos reuniendo para discutir los detalles del nuevo proyecto.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "Propósito de reunión profesional usa 'to discuss'. Es agenda clara de encuentro. En español 'para discutir' también establece objetivo. Esta estructura es común en contextos laborales donde reuniones siempre tienen propósitos específicos y agendas definidas para optimizar tiempo colectivo."
      },
      {
        id: "purp_res_15",
        question: "I brought an umbrella _____ _____ I wouldn't get wet.",
        translation: "Traje un paraguas para que no me mojara.",
        options: ["so that", "to", "for", "because"],
        correct: "so that",
        explanation: "Para prevenir algo negativo (getting wet) con modal, preferimos 'so that'. También podríamos decir 'to avoid getting wet' pero esta estructura con 'wouldn't' es más directa. En español 'para que no me mojara' usa subjuntivo. Esta previsión contra lluvia muestra planificación inteligente basada en pronóstico del tiempo."
      }
    ]
  }
};

export default part11Categories;