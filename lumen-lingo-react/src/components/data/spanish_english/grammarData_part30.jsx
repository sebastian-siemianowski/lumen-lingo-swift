/**
 * SPANISH → ENGLISH GRAMMAR - PART 30
 * 4 categories, 15 questions each
 */

import { Zap, Heart, Lightbulb, Camera } from "lucide-react";

export const part30Categories = {
  been_vs_gone: {
    name: "Have Been vs Have Gone",
    description: "Ir y volver vs ir sin volver - diferencia de ubicación actual",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "been_gone_1",
        question: "She has _____ to Paris - she's still there now.",
        translation: "Ella ha ido a París - aún está allá ahora.",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Usamos 'has gone' cuando persona FUE y AÚN NO REGRESA: está allá todavía. En español 'ha ido' puede ser ambiguo. Esta distinción es crucial: 'gone' = fue y sigue allá, 'been' = fue y ya regresó. La frase 'still there' confirma que ausencia continúa."
      },
      {
        id: "been_gone_2",
        question: "I have _____ to Japan twice - it's an amazing country!",
        translation: "He estado en Japón dos veces - ¡es un país increíble!",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Usamos 'have been' cuando FUI y YA REGRESÉ: experiencia completada. En español 'he estado' también indica retorno. El hecho de que puedas hablar sobre ello confirma que regresaste. Las dos visitas a Japón son experiencias que puedes contar porque ya volviste de ambas."
      },
      {
        id: "been_gone_3",
        question: "Where is mom? - She's _____ to the supermarket shopping.",
        translation: "¿Dónde está mamá? - Ha ido al supermercado de compras.",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para ausencia ACTUAL usamos 'has gone': fue y no está aquí ahora. En español 'ha ido' también marca ausencia presente. Esta explicación de ubicación actual responde pregunta sobre por qué mamá no está en casa, estableciendo que volverá pronto después de compras."
      },
      {
        id: "been_gone_4",
        question: "Have you ever _____ to New York City in your life?",
        translation: "¿Alguna vez has estado en la Ciudad de Nueva York en tu vida?",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Para EXPERIENCIA de vida con 'ever' usamos 'have been': pregunta sobre visita pasada. En español '¿has estado?' también pregunta experiencia. Como estás aquí conversando, obviamente si fuiste ya regresaste, por eso 'been' es correcto para experiencias de viaje."
      },
      {
        id: "been_gone_5",
        question: "My sister has _____ to Australia to live permanently there.",
        translation: "Mi hermana se ha ido a Australia para vivir permanentemente allá.",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para MUDANZA permanente usamos 'has gone': fue y no volverá (o no pronto). En español 'se ha ido' también marca partida. Esta emigración a Australia para residencia permanente es cambio de vida mayor que probablemente significa visitas familiares infrecuentes por distancia."
      },
      {
        id: "been_gone_6",
        question: "I've never _____ to Africa but I'd love to visit someday.",
        translation: "Nunca he estado en África pero me encantaría visitar algún día.",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Con 'never' hablando de EXPERIENCIA ausente usamos 'never been'. En español 'nunca he estado' también marca falta de experiencia. Esta aspiración de visitar África algún día reconoce brecha entre lugares deseados y visitados, manteniendo sueño de viaje futuro."
      },
      {
        id: "been_gone_7",
        question: "Dad isn't here - he's _____ to pick up the kids from school.",
        translation: "Papá no está aquí - ha ido a recoger a los niños de la escuela.",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para AUSENCIA temporal con propósito usamos 'has gone': salió con misión específica. En español 'ha ido a recoger' también explica ausencia. Esta responsabilidad parental de recoger niños explica dónde está y cuándo volverá, tranquilizando sobre su retorno inminente con familia."
      },
      {
        id: "been_gone_8",
        question: "We have _____ to that restaurant many times before already.",
        translation: "Hemos estado en ese restaurante muchas veces ya antes.",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Para VISITAS repetidas pasadas usamos 'have been': experiencias completadas múltiples. En español 'hemos estado' también cuenta visitas. Esta familiaridad con restaurante por visitas frecuentes sugiere que es favorito confiable donde saben que comida y servicio serán consistentemente buenos."
      },
      {
        id: "been_gone_9",
        question: "Where has John _____? I haven't seen him all day today!",
        translation: "¿Dónde se ha ido John? ¡No lo he visto en todo el día hoy!",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para preguntar sobre UBICACIÓN de ausente usamos 'Where has he gone?' En español '¿dónde se ha ido?' también busca. Esta preocupación de no haberlo visto en todo el día motiva averiguar su paradero, especialmente si usualmente está visible o accesible regularmente."
      },
      {
        id: "been_gone_10",
        question: "She has _____ to London three times for business trips.",
        translation: "Ella ha estado en Londres tres veces por viajes de negocios.",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Para VIAJES de trabajo completados usamos 'has been': fue y regresó tres veces. En español 'ha estado' también cuenta experiencias. Estos tres viajes londinenses probablemente incluyen reuniones con clientes británicos o conferencias que requieren presencia física internacional."
      },
      {
        id: "been_gone_11",
        question: "The children have _____ to bed already - they're sleeping now.",
        translation: "Los niños ya se han ido a la cama - están durmiendo ahora.",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para TRANSICIÓN a dormir usamos 'have gone to bed': fueron y están allá ahora. En español 'se han ido a la cama' también marca. Esta rutina nocturna completada libera a padres para tiempo adulto tranquilo después de acostar niños exitosamente."
      },
      {
        id: "been_gone_12",
        question: "I have _____ scuba diving in the Caribbean sea before - it's amazing!",
        translation: "He buceado en el mar Caribe antes - ¡es increíble!",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Para ACTIVIDAD experimentada usamos 'have been scuba diving': experiencia pasada completada. En español 'he buceado' también usa verbo directo. Este buceo caribeño previo probablemente vio corales coloridos y vida marina tropical, siendo experiencia memorable que vale la pena compartir."
      },
      {
        id: "been_gone_13",
        question: "He's _____ out to buy groceries - he'll be back soon.",
        translation: "Él ha salido a comprar comida - volverá pronto.",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para SALIDA con retorno esperado usamos 'has gone out': no está pero volverá. En español 'ha salido' también marca ausencia temporal. La promesa 'be back soon' tranquiliza que ausencia es breve y que regresará con provisiones necesarias para casa."
      },
      {
        id: "been_gone_14",
        question: "We have _____ skiing in the Alps - what an experience it was!",
        translation: "Hemos esquiado en los Alpes - ¡qué experiencia fue!",
        options: ["been", "gone", "went", "going"],
        correct: "been",
        explanation: "Para ACTIVIDAD en lugar específico usamos 'have been skiing': experiencia deportiva completada. En español 'hemos esquiado' también usa verbo directo. Este esquí alpino es aventura deportiva en montañas icónicas que probablemente combinó deporte extremo con vistas espectaculares."
      },
      {
        id: "been_gone_15",
        question: "My keys have _____ - I can't find them anywhere at all!",
        translation: "Mis llaves se han ido - ¡no las puedo encontrar en ningún lugar!",
        options: ["gone", "been", "went", "going"],
        correct: "gone",
        explanation: "Para objetos DESAPARECIDOS usamos 'have gone': no están donde deberían. En español 'se han ido' personifica llaves. Esta expresión idiomática trata objetos perdidos como si tuvieran vida propia y se hubieran ido solos, capturando frustración de búsqueda infructuosa."
      }
    ]
  },

  emphatic_do_does_did: {
    name: "Do/Does/Did Enfático",
    description: "Énfasis en afirmaciones - insistir en veracidad",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "emph_1",
        question: "I _____ like your new haircut - it looks great on you!",
        translation: "Sí me gusta tu nuevo corte de cabello - ¡te queda genial!",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para ENFATIZAR afirmación presente añadimos 'do' antes del verbo: 'I do like it!' (énfasis en que SÍ gusta). En español 'sí me gusta' enfatiza con 'sí'. Este énfasis tranquiliza a quien hizo cambio de look y estaba inseguro, confirmando fuertemente que cambio fue positivo."
      },
      {
        id: "emph_2",
        question: "She _____ finish her work on time despite the difficulties!",
        translation: "Ella sí terminó su trabajo a tiempo a pesar de las dificultades.",
        options: ["did", "does", "do", "-"],
        correct: "did",
        explanation: "Para ENFATIZAR logro pasado añadimos 'did': 'She did finish!' (énfasis en que SÍ terminó). En español 'sí terminó' usa 'sí'. Este énfasis contradice expectativa de que no podría terminar, celebrando que contra probabilidades logró completar trabajo puntualmente."
      },
      {
        id: "emph_3",
        question: "He _____ seem tired today - maybe he didn't sleep well.",
        translation: "Él sí parece cansado hoy - quizás no durmió bien.",
        options: ["does", "do", "did", "-"],
        correct: "does",
        explanation: "Con tercera persona presente añadimos 'does' para énfasis: 'He does seem tired'. En español 'sí parece cansado' confirma observación. Este reconocimiento enfático de fatiga visible valida que apariencia agotada es real y notable, no imaginación."
      },
      {
        id: "emph_4",
        question: "We _____ want to help you with this problem - really!",
        translation: "Sí queremos ayudarte con este problema - ¡de verdad!",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para INSISTIR en deseo genuino usamos 'do want': énfasis en sinceridad. En español 'sí queremos' también enfatiza. Esta insistencia múltiple (do + really) probablemente responde a duda expresada sobre si oferta de ayuda es genuina o solo cortesía superficial."
      },
      {
        id: "emph_5",
        question: "I _____ enjoy classical music, even though I'm young.",
        translation: "Sí disfruto la música clásica, aunque soy joven.",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para CONTRADECIR estereotipo usamos 'do enjoy': énfasis en gusto inesperado. En español 'sí disfruto' también contradice. Esta afirmación enfática desafía suposición de que jóvenes solo gustan música contemporánea, mostrando que apreciación musical trasciende edad."
      },
      {
        id: "emph_6",
        question: "They _____ arrive on time yesterday despite traffic issues!",
        translation: "Ellos sí llegaron a tiempo ayer a pesar de problemas de tráfico.",
        options: ["did", "do", "does", "-"],
        correct: "did",
        explanation: "Para ENFATIZAR logro pasado contra obstáculos usamos 'did arrive': lograron puntualidad. En español 'sí llegaron' también celebra. Este éxito de llegar puntualmente pesar de tráfico muestra planificación inteligente de salir extra temprano para compensar demoras esperadas."
      },
      {
        id: "emph_7",
        question: "She _____ understand what you're saying - she's not confused.",
        translation: "Ella sí entiende lo que estás diciendo - no está confundida.",
        options: ["does", "do", "did", "-"],
        correct: "does",
        explanation: "Para CONTRADECIR percepción de confusión usamos 'does understand': énfasis en comprensión. En español 'sí entiende' también aclara. Esta defensa de su comprensión probablemente responde a expresión facial que hizo pensar que no entendía, cuando en realidad sí captó el mensaje."
      },
      {
        id: "emph_8",
        question: "I _____ remember you from school - we were classmates!",
        translation: "Sí te recuerdo de la escuela - ¡éramos compañeros de clase!",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para INSISTIR en memoria genuina usamos 'do remember': énfasis en que SÍ recuerdas. En español 'sí te recuerdo' también confirma. Esta afirmación enfática probablemente responde a duda de la otra persona sobre si realmente recuerdas o solo finges reconocimiento por cortesía."
      },
      {
        id: "emph_9",
        question: "He _____ play the piano beautifully when he was younger.",
        translation: "Él sí tocaba el piano hermosamente cuando era más joven.",
        options: ["did", "do", "does", "-"],
        correct: "did",
        explanation: "Para ENFATIZAR habilidad pasada usamos 'did play': confirmación de talento previo. En español 'sí tocaba' también confirma. Este reconocimiento de habilidad musical pasada que quizás se perdió por falta de práctica evoca nostalgia por talento que existió pero ya no se cultiva."
      },
      {
        id: "emph_10",
        question: "We _____ appreciate your help with this difficult task - thank you!",
        translation: "Sí apreciamos tu ayuda con esta tarea difícil - ¡gracias!",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para GRATITUD enfática usamos 'do appreciate': énfasis en agradecimiento sincero. En español 'sí apreciamos' también intensifica. Esta expresión fuerte de gratitud asegura que ayuda recibida no se toma por garantizada sino que se valora genuinamente."
      },
      {
        id: "emph_11",
        question: "She _____ look like her mother - the resemblance is striking!",
        translation: "Ella sí se parece a su madre - ¡el parecido es impresionante!",
        options: ["does", "do", "did", "-"],
        correct: "does",
        explanation: "Para CONFIRMAR parecido obvio usamos 'does look like': énfasis en similitud. En español 'sí se parece' también confirma. Esta observación enfática sobre herencia genética visible probablemente es comentario que ambas (hija y madre) han escuchado repetidamente de extraños."
      },
      {
        id: "emph_12",
        question: "I _____ try my best always, even when it's difficult for me.",
        translation: "Sí intento mi mejor esfuerzo siempre, incluso cuando es difícil para mí.",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para DEFENDER esfuerzo personal usamos 'do try': énfasis en que realmente intentas. En español 'sí intento' también defiende. Esta afirmación probablemente responde a crítica de que no estás esforzándote suficiente, insistiendo en que tu dedicación es genuina aunque resultados no siempre lo reflejen."
      },
      {
        id: "emph_13",
        question: "They _____ finish the project on time last week successfully!",
        translation: "¡Ellos sí terminaron el proyecto a tiempo la semana pasada exitosamente!",
        options: ["did", "do", "does", "-"],
        correct: "did",
        explanation: "Para CELEBRAR éxito pasado contra dudas usamos 'did finish': énfasis en logro. En español 'sí terminaron' también celebra. Este cumplimiento de deadline que quizás otros dudaban que lograrían es victoria que merece reconocimiento especial por superar expectativas bajas."
      },
      {
        id: "emph_14",
        question: "I _____ care about what you think - your opinion matters to me!",
        translation: "Sí me importa lo que piensas - ¡tu opinión me importa!",
        options: ["do", "does", "did", "-"],
        correct: "do",
        explanation: "Para INSISTIR que importa usamos 'do care': énfasis en que SÍ te importa. En español 'sí me importa' también insiste. Esta afirmación probablemente responde a duda de otra persona sobre si realmente valoras su opinión o solo preguntas por cortesía."
      },
      {
        id: "emph_15",
        question: "She _____ work hard every single day without exception ever!",
        translation: "¡Ella sí trabaja duro cada día sin excepción jamás!",
        options: ["does", "do", "did", "-"],
        correct: "does",
        explanation: "Para DEFENDER ética de trabajo usamos 'does work hard': énfasis en dedicación. En español 'sí trabaja duro' también defiende. Esta afirmación enfática de consistencia laboral probablemente responde a crítica injusta o malentendido sobre su nivel de esfuerzo y compromiso profesional."
      }
    ]
  },

  both_neither_either_subject: {
    name: "Both/Neither/Either como Sujeto",
    description: "Ambos/ninguno/cualquiera - concordancia verbal correcta",
    icon: Lightbulb,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "both_subj_1",
        question: "_____ of the students _____ passed the exam successfully.",
        translation: "Ambos estudiantes pasaron el examen exitosamente.",
        options: ["Both / have", "Neither / has", "Either / has", "Both / has"],
        correct: "Both / have",
        explanation: "Cuando 'both' es sujeto usamos verbo PLURAL: 'both have passed'. Son dos personas actuando. En español 'ambos estudiantes' también es plural. Esta victoria dual donde los dos aprobaron es resultado ideal que permite celebración compartida de éxito académico conjunto."
      },
      {
        id: "both_subj_2",
        question: "_____ of the answers _____ correct on the test paper.",
        translation: "Ninguna de las respuestas es correcta en el examen.",
        options: ["Neither / is", "Both / are", "Either / are", "Neither / are"],
        correct: "Neither / is",
        explanation: "Cuando 'neither' es sujeto usamos verbo SINGULAR: 'neither is correct'. En español 'ninguna es' también es singular. Este resultado de cero respuestas correctas es devastador y sugiere malentendido fundamental del material o que preguntas fueron extremadamente engañosas."
      },
      {
        id: "both_subj_3",
        question: "_____ of the options _____ acceptable to me right now.",
        translation: "Cualquiera de las opciones es aceptable para mí ahora mismo.",
        options: ["Either / is", "Both / are", "Neither / is", "Either / are"],
        correct: "Either / is",
        explanation: "Cuando 'either' es sujeto usamos verbo SINGULAR: 'either is acceptable'. Aunque menciona dos, cada una individualmente es aceptable. En español 'cualquiera es' también es singular. Esta flexibilidad de aceptar cualquier opción facilita decisión porque elimina presión de elegir perfecta."
      },
      {
        id: "both_subj_4",
        question: "_____ my parents _____ living in the same city now.",
        translation: "Ambos mis padres están viviendo en la misma ciudad ahora.",
        options: ["Both / are", "Neither / is", "Either / is", "Both / is"],
        correct: "Both / are",
        explanation: "Con 'both' usamos PLURAL 'are': 'both are living'. Dos personas en misma acción. En español 'ambos están' también es plural. Esta proximidad de ambos padres juntos en misma ciudad facilita visitas familiares donde puedes ver a los dos en una sola trip."
      },
      {
        id: "both_subj_5",
        question: "_____ of us _____ ready to leave for the trip yet.",
        translation: "Ninguno de nosotros está listo para salir al viaje todavía.",
        options: ["Neither / is", "Both / are", "Either / is", "Neither / are"],
        correct: "Neither / is",
        explanation: "Con 'neither of us' usamos SINGULAR 'is': 'neither is ready'. Cada uno individualmente no está listo. En español 'ninguno está' también es singular. Esta falta de preparación compartida sugiere que necesitan más tiempo para empacar o que ambos son procrastinadores similares."
      },
      {
        id: "both_subj_6",
        question: "_____ restaurant _____ good - choose whichever you prefer.",
        translation: "Cualquier restaurante es bueno - elige el que prefieras.",
        options: ["Either / is", "Both / are", "Neither / is", "Either / are"],
        correct: "Either / is",
        explanation: "Sin 'of' solo 'either' como sujeto usa SINGULAR: 'either restaurant is'. En español 'cualquier restaurante es' también singulariza. Esta indiferencia entre opciones porque ambas son aceptables elimina estrés de decisión, delegando elección completamente a preferencia de otro."
      },
      {
        id: "both_subj_7",
        question: "_____ the boys _____ playing soccer in the park right now.",
        translation: "Ambos niños están jugando fútbol en el parque ahora mismo.",
        options: ["Both / are", "Neither / is", "Either / is", "Both / is"],
        correct: "Both / are",
        explanation: "Con 'both' usamos PLURAL continuo: 'both are playing'. Actividad simultánea de dos. En español 'ambos están jugando' también es plural. Esta actividad recreativa compartida al aire libre es saludable para niños, proporcionando ejercicio y socialización entre hermanos o amigos."
      },
      {
        id: "both_subj_8",
        question: "_____ of the cars _____ available for rent today unfortunately.",
        translation: "Ninguno de los autos está disponible para rentar hoy desafortunadamente.",
        options: ["Neither / is", "Both / are", "Either / is", "Neither / are"],
        correct: "Neither / is",
        explanation: "Con 'neither of' usamos SINGULAR: 'neither is available'. En español 'ninguno está' también es singular. Esta falta de vehículos disponibles para alquilar es inconveniente que requiere buscar otra compañía de renta o posponer viaje planeado."
      },
      {
        id: "both_subj_9",
        question: "_____ solution _____ perfect, but we must choose one soon.",
        translation: "Ninguna solución es perfecta, pero debemos elegir una pronto.",
        options: ["Neither / is", "Both / are", "Either / is", "Neither / are"],
        correct: "Neither / is",
        explanation: "Sin 'of' solo 'neither' usa SINGULAR: 'neither solution is perfect'. En español 'ninguna solución es' también singulariza. Esta realidad de que ambas opciones tienen defectos requiere aceptar imperfección y elegir la menos mala en lugar de esperar opción perfecta."
      },
      {
        id: "both_subj_10",
        question: "_____ of my friends _____ coming to the party tonight.",
        translation: "Ambos mis amigos vienen a la fiesta esta noche.",
        options: ["Both / are", "Neither / is", "Either / is", "Both / is"],
        correct: "Both / are",
        explanation: "Con 'both of' usamos PLURAL: 'both are coming'. Asistencia dual confirmada. En español 'ambos vienen' también es plural. Esta confirmación de asistencia de ambos amigos asegura que fiesta tendrá compañía conocida, haciendo evento más cómodo y divertido."
      },
      {
        id: "both_subj_11",
        question: "_____ book _____ suitable for beginners learning the language.",
        translation: "Cualquier libro es adecuado para principiantes aprendiendo el idioma.",
        options: ["Either / is", "Both / are", "Neither / is", "Either / are"],
        correct: "Either / is",
        explanation: "Sin 'of' solo 'either' usa SINGULAR: 'either book is suitable'. Cada uno sirve. En español 'cualquier libro es' también singulariza. Esta flexibilidad de que ambos libros funcionan para principiantes facilita elección basada en disponibilidad o precio en lugar de calidad."
      },
      {
        id: "both_subj_12",
        question: "_____ of them _____ responsible for the mistake made yesterday.",
        translation: "Ninguno de ellos es responsable del error cometido ayer.",
        options: ["Neither / is", "Both / are", "Either / is", "Neither / are"],
        correct: "Neither / is",
        explanation: "Con 'neither of them' usamos SINGULAR: 'neither is responsible'. En español 'ninguno es' también singulariza. Esta exoneración de ambos sugiere que error fue causado por tercero o por circunstancias sistémicas fuera del control de estas dos personas."
      },
      {
        id: "both_subj_13",
        question: "_____ teams _____ playing well in this championship tournament.",
        translation: "Ambos equipos están jugando bien en este torneo de campeonato.",
        options: ["Both / are", "Neither / is", "Either / is", "Both / is"],
        correct: "Both / are",
        explanation: "Con 'both teams' usamos PLURAL: 'both are playing'. Alto nivel mutuo. En español 'ambos equipos están' también es plural. Esta calidad de juego elevada de ambos lados hace competencia emocionante e impredecible, donde cualquiera podría ganar por márgenes estrechos."
      },
      {
        id: "both_subj_14",
        question: "_____ of the methods _____ effective for this problem solving.",
        translation: "Cualquiera de los métodos es efectivo para resolver este problema.",
        options: ["Either / is", "Both / are", "Neither / is", "Either / are"],
        correct: "Either / is",
        explanation: "Con 'either of' usamos SINGULAR: 'either is effective'. Cada método funciona solo. En español 'cualquiera es' también singulariza. Esta equivalencia de efectividad permite elegir método basado en preferencia personal o recursos disponibles en lugar de superioridad objetiva."
      },
      {
        id: "both_subj_15",
        question: "_____ of the candidates _____ qualified for this position offered.",
        translation: "Ninguno de los candidatos está calificado para esta posición ofrecida.",
        options: ["Neither / is", "Both / are", "Either / is", "Neither / are"],
        correct: "Neither / is",
        explanation: "Con 'neither of' usamos SINGULAR: 'neither is qualified'. Ambos carecen de calificaciones. En español 'ninguno está calificado' también singulariza. Esta situación de pool de candidatos inadecuados requiere ampliar búsqueda o reconsiderar requisitos de posición si son demasiado restrictivos."
      }
    ]
  },

  negative_questions: {
    name: "Preguntas Negativas",
    description: "Isn't, doesn't, haven't - expectativas y sorpresas",
    icon: Camera,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "neg_q_1",
        question: "_____ you coming to the party tonight with everyone?",
        translation: "¿No vienes a la fiesta esta noche con todos?",
        options: ["Aren't", "Are", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "Para pregunta negativa con 'be' usamos 'aren't': 'Aren't you coming?' Expresa sorpresa de que no vengas. En español '¿no vienes?' también sorprende. Esta pregunta sugiere expectativa de que SÍ asistirías, y negativa requeriría explicación de por qué no."
      },
      {
        id: "neg_q_2",
        question: "_____ she work at the same company as you do?",
        translation: "¿Ella no trabaja en la misma compañía que tú?",
        options: ["Doesn't", "Don't", "Isn't", "Aren't"],
        correct: "Doesn't",
        explanation: "Para pregunta negativa con tercera persona usamos 'doesn't': 'Doesn't she work?' Expresa sorpresa o confirmación. En español '¿no trabaja?' también verifica. Esta pregunta probablemente responde a realización súbita de que quizás están en mismo edificio sin haberlo notado antes."
      },
      {
        id: "neg_q_3",
        question: "_____ you finished your homework yet like you promised?",
        translation: "¿No has terminado tu tarea todavía como prometiste?",
        options: ["Haven't", "Have", "Don't", "Doesn't"],
        correct: "Haven't",
        explanation: "Para pregunta negativa con presente perfecto usamos 'haven't': 'Haven't you finished yet?' Expresa expectativa incumplida. En español '¿no has terminado?' también reclama suavemente. Esta pregunta implica que prometiste terminar y tiempo ya pasó sin cumplimiento visible."
      },
      {
        id: "neg_q_4",
        question: "_____ it strange that nobody called us today at all?",
        translation: "¿No es extraño que nadie nos llamó hoy para nada?",
        options: ["Isn't", "Aren't", "Don't", "Doesn't"],
        correct: "Isn't",
        explanation: "Para señalar algo RARO usamos pregunta negativa 'isn't it strange': invita acuerdo. En español '¿no es extraño?' también nota anomalía. Esta observación sobre ausencia inusual de llamadas puede generar preocupación sobre si teléfono funciona o si algo está mal."
      },
      {
        id: "neg_q_5",
        question: "_____ we meet at 6 PM like we agreed yesterday?",
        translation: "¿No nos vemos a las 6 PM como acordamos ayer?",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "Para CONFIRMAR plan acordado usamos 'don't we': verificación con expectativa de 'sí'. En español '¿no nos vemos?' también confirma. Esta pregunta retórica espera confirmación de acuerdo previo, asegurando que ambos recuerdan mismo horario."
      },
      {
        id: "neg_q_6",
        question: "_____ you think the weather is too cold today for swimming?",
        translation: "¿No crees que el clima está demasiado frío hoy para nadar?",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "Para invitar ACUERDO sobre opinión usamos 'don't you think': busca validación. En español '¿no crees?' también busca consenso. Esta observación sobre temperatura inadecuada para natación es sensata, sugiriendo que actividad debería posponerse hasta día más cálido."
      },
      {
        id: "neg_q_7",
        question: "_____ he the person who won the competition last year?",
        translation: "¿No es él la persona que ganó la competencia el año pasado?",
        options: ["Isn't", "Aren't", "Don't", "Doesn't"],
        correct: "Isn't",
        explanation: "Para VERIFICAR identidad usamos 'isn't he': confirmación de reconocimiento. En español '¿no es él?' también verifica. Esta pregunta de confirmación sugiere que reconoces la cara pero no estás completamente seguro de dónde conoces a esta persona."
      },
      {
        id: "neg_q_8",
        question: "_____ they supposed to arrive an hour ago already?",
        translation: "¿No se supone que deberían haber llegado hace una hora ya?",
        options: ["Weren't", "Wasn't", "Don't", "Doesn't"],
        correct: "Weren't",
        explanation: "Para señalar RETRASO usamos 'weren't they supposed': expectativa no cumplida. En español '¿no se supone?' también nota tardanza. Esta preocupación sobre retraso de una hora es legítima y puede motivar llamada para verificar que están bien."
      },
      {
        id: "neg_q_9",
        question: "_____ that a beautiful sunset over the ocean right now?",
        translation: "¿No es ese un hermoso atardecer sobre el océano ahora mismo?",
        options: ["Isn't", "Aren't", "Don't", "Doesn't"],
        correct: "Isn't",
        explanation: "Para COMPARTIR admiración usamos 'isn't that beautiful': invita a apreciar juntos. En español '¿no es hermoso?' también comparte. Esta exclamación disfrazada de pregunta busca que otro reconozca y aprecie belleza natural del momento compartido."
      },
      {
        id: "neg_q_10",
        question: "_____ you feel better after taking the medicine prescribed?",
        translation: "¿No te sientes mejor después de tomar la medicina recetada?",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "Para verificar MEJORÍA usamos 'don't you feel better': expectativa de que medicina funcionó. En español '¿no te sientes mejor?' también espera mejora. Esta pregunta preocupada verifica si tratamiento médico está teniendo efecto esperado o si necesita ajuste."
      },
      {
        id: "neg_q_11",
        question: "_____ she look exactly like her twin sister always?",
        translation: "¿Ella no se ve exactamente como su hermana gemela siempre?",
        options: ["Doesn't", "Don't", "Isn't", "Aren't"],
        correct: "Doesn't",
        explanation: "Para comentar sobre PARECIDO obvio usamos 'doesn't she look': invita acuerdo. En español '¿no se ve?' también nota similitud. Esta observación sobre gemelas idénticas es comentario que probablemente escuchan constantemente de personas que las conocen y se confunden entre ellas."
      },
      {
        id: "neg_q_12",
        question: "_____ we all agree on this decision made for the project?",
        translation: "¿No estamos todos de acuerdo en esta decisión hecha para el proyecto?",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "Para buscar CONSENSO grupal usamos 'don't we all agree': verificación colectiva. En español '¿no estamos todos de acuerdo?' también busca unanimidad. Esta pregunta de confirmación final antes de proceder asegura que no hay objeciones ocultas que puedan causar problemas después."
      },
      {
        id: "neg_q_13",
        question: "_____ you interested in learning more about this topic today?",
        translation: "¿No estás interesado en aprender más sobre este tema hoy?",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "Para expresar SORPRESA de falta de interés usamos 'aren't you interested': esperabas entusiasmo. En español '¿no estás interesado?' también sorprende. Esta pregunta sugiere que asumiste que tema sería de interés natural para esta persona basándote en sus intereses conocidos."
      },
      {
        id: "neg_q_14",
        question: "_____ this the restaurant you recommended to me last week?",
        translation: "¿No es este el restaurante que me recomendaste la semana pasada?",
        options: ["Isn't", "Aren't", "Don't", "Doesn't"],
        correct: "Isn't",
        explanation: "Para CONFIRMAR ubicación recomendada usamos 'isn't this': verificación de que llegaste al lugar correcto. En español '¿no es este?' también verifica. Esta pregunta asegura que siguiste recomendación correctamente y no confundiste el lugar con otro establecimiento similar."
      },
      {
        id: "neg_q_15",
        question: "_____ you think we should leave soon before it gets darker?",
        translation: "¿No crees que deberíamos irnos pronto antes de que oscurezca?",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "Para SUGERIR acción con pregunta usamos 'don't you think we should': invita acuerdo sobre plan. En español '¿no crees que deberíamos?' también sugiere. Esta propuesta disfrazada de pregunta es forma cortés de motivar salida sin sonar mandón."
      }
    ]
  }
};

export default part30Categories;