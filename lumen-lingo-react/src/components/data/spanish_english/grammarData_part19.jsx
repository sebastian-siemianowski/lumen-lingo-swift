/**
 * SPANISH → ENGLISH GRAMMAR - PART 19
 * 3 categories, 15 questions each - Final categories
 */

import { Cloud, Gift, Award } from "lucide-react";

export const part19Categories = {
  wish_hypothetical_advanced: {
    name: "Wish Hipotético Avanzado",
    description: "Deseos complejos y situaciones irreales - estructuras sofisticadas",
    icon: Cloud,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "wish_hyp_1",
        question: "I wish I _____ _____ to the concert last weekend with you.",
        translation: "Desearía haber ido al concierto el fin de semana pasado contigo.",
        options: ["had gone", "have gone", "went", "would go"],
        correct: "had gone",
        explanation: "Para lamentar acciones PASADAS que no hicimos usamos 'wish' + pasado perfecto: 'wish I had gone'. Es arrepentimiento sobre oportunidad perdida. En español 'desearía haber ido' también usa infinitivo compuesto. Esta estructura expresa pesar por decisión pasada de no asistir, reconociendo que fue error perderse la experiencia."
      },
      {
        id: "wish_hyp_2",
        question: "She wishes her boss _____ give her more responsibilities.",
        translation: "Ella desea que su jefe le diera más responsabilidades.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Para deseo sobre COMPORTAMIENTO futuro de otros usamos 'wish' + 'would': expresa frustración con situación actual. En español 'desea que le diera' usa subjuntivo imperfecto. Esta ambición de asumir más tareas muestra iniciativa profesional y deseo de crecimiento que actualmente no está siendo satisfecho."
      },
      {
        id: "wish_hyp_3",
        question: "I wish you _____ _____ me earlier about the problem.",
        translation: "Desearía que me hubieras dicho antes sobre el problema.",
        options: ["had told", "have told", "told", "would tell"],
        correct: "had told",
        explanation: "Para lamentar FALTA de comunicación pasada usamos 'wish' + pasado perfecto: 'wish you had told me'. En español 'desearía que me hubieras dicho' también es pluscuamperfecto subjuntivo. Esta queja sobre información tardía sugiere que conocer antes habría permitido mejor respuesta o preparación."
      },
      {
        id: "wish_hyp_4",
        question: "If only I _____ _____ that mistake in the presentation!",
        translation: "¡Si tan solo no hubiera cometido ese error en la presentación!",
        options: ["hadn't made", "haven't made", "didn't make", "wouldn't make"],
        correct: "hadn't made",
        explanation: "La expresión 'if only' (si tan solo) con pasado perfecto NEGATIVO expresa fuerte arrepentimiento: 'if only I hadn't made'. En español 'si tan solo no hubiera cometido' también lamenta. Este error público en presentación causa vergüenza que persiste, deseando poder retroceder tiempo y evitarlo."
      },
      {
        id: "wish_hyp_5",
        question: "I wish it _____ stop raining so we could go outside!",
        translation: "¡Desearía que dejara de llover para que pudiéramos salir!",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Para deseo de CAMBIO en situación actual molesta usamos 'wish' + 'would': 'wish it would stop'. Expresa impaciencia con condición presente. En español 'desearía que dejara' usa subjuntivo. Esta frustración con lluvia persistente que impide actividades al aire libre es sentimiento universal."
      },
      {
        id: "wish_hyp_6",
        question: "She wishes she _____ _____ born in a different era entirely.",
        translation: "Ella desea haber nacido en una era diferente completamente.",
        options: ["had been", "have been", "was", "were"],
        correct: "had been",
        explanation: "Para deseo imposible sobre CIRCUNSTANCIA de nacimiento pasada usamos 'wish' + pasado perfecto: 'wish she had been born'. En español 'desea haber nacido' usa infinitivo compuesto. Esta fantasía romántica sobre vivir en época diferente refleja descontento con modernidad o fascinación con historia."
      },
      {
        id: "wish_hyp_7",
        question: "I wish people _____ be more considerate of others always.",
        translation: "Desearía que la gente fuera más considerada con otros siempre.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Para deseo general sobre COMPORTAMIENTO social usamos 'wish' + 'would': es aspiración sobre cómo deberían actuar otros. En español 'desearía que fuera' usa subjuntivo. Esta esperanza de mayor empatía colectiva refleja ideal social donde consideración mutua mejoraría convivencia comunitaria."
      },
      {
        id: "wish_hyp_8",
        question: "If only we _____ _____ the lottery last year!",
        translation: "¡Si tan solo hubiéramos ganado la lotería el año pasado!",
        options: ["had won", "have won", "won", "would win"],
        correct: "had won",
        explanation: "Para fantasía sobre evento pasado que no ocurrió usamos 'if only' + pasado perfecto: 'if only we had won'. En español 'si tan solo hubiéramos ganado' también es pluscuamperfecto subjuntivo. Esta fantasía financiera retrospectiva imagina cómo la vida sería diferente con golpe de suerte."
      },
      {
        id: "wish_hyp_9",
        question: "I wish I _____ _____ more attention in class back then.",
        translation: "Desearía haber prestado más atención en clase en ese entonces.",
        options: ["had paid", "have paid", "paid", "would pay"],
        correct: "had paid",
        explanation: "Para lamentar FALTA de atención pasada durante educación usamos 'wish' + pasado perfecto: 'wish I had paid attention'. En español 'desearía haber prestado' también lamenta. Esta realización tardía de que no aprovechaste oportunidades educativas es común al madurar y reconocer valor del conocimiento."
      },
      {
        id: "wish_hyp_10",
        question: "She wishes her neighbors _____ make less noise at night.",
        translation: "Ella desea que sus vecinos hicieran menos ruido de noche.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Para molestia actual con comportamiento de otros usamos 'wish' + 'would': es queja sobre situación que queremos que cambie. En español 'desea que hicieran' usa subjuntivo. Esta frustración con ruido nocturno vecinal es problema común de vida en apartamentos con paredes delgadas."
      },
      {
        id: "wish_hyp_11",
        question: "I wish I _____ _____ that embarrassing photo online yesterday!",
        translation: "¡Desearía no haber publicado esa foto vergonzosa en línea ayer!",
        options: ["hadn't posted", "haven't posted", "didn't post", "wouldn't post"],
        correct: "hadn't posted",
        explanation: "Para arrepentimiento sobre acción de redes sociales pasada usamos 'wish' + pasado perfecto negativo: 'wish I hadn't posted'. En español 'desearía no haber publicado' también lamenta. Esta lección sobre impulsividad digital reconoce que internet es permanente y decisiones apresuradas tienen consecuencias duraderas."
      },
      {
        id: "wish_hyp_12",
        question: "If only there _____ more hours in the day to accomplish things!",
        translation: "¡Si tan solo hubiera más horas en el día para lograr cosas!",
        options: ["were", "are", "was", "would be"],
        correct: "were",
        explanation: "Para deseo imposible sobre realidad inmutable usamos 'if only' + 'were' (subjuntivo): 'if only there were more hours'. En español 'si tan solo hubiera' también usa subjuntivo. Este anhelo universal de más tiempo refleja sensación de estar abrumado con responsabilidades múltiples."
      },
      {
        id: "wish_hyp_13",
        question: "I wish I _____ afford to buy that expensive car someday.",
        translation: "Desearía poder permitirme comprar ese auto caro algún día.",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "Para capacidad deseada PRESENTE o futura usamos 'wish' + 'could': expresa anhelo de posibilidad económica. En español 'desearía poder' también usa infinitivo. Esta aspiración material reconoce brecha entre deseo y realidad financiera actual, soñando con futura prosperidad."
      },
      {
        id: "wish_hyp_14",
        question: "She wishes she _____ _____ _____ different career path originally.",
        translation: "Ella desea haber elegido una trayectoria profesional diferente originalmente.",
        options: ["had chosen", "have chosen", "chose", "would choose"],
        correct: "had chosen",
        explanation: "Para lamento sobre DECISIÓN de carrera pasada usamos 'wish' + pasado perfecto: 'wish she had chosen'. En español 'desea haber elegido' también refleja sobre camino no tomado. Esta contemplación de carrera alternativa es común en momentos de insatisfacción laboral."
      },
      {
        id: "wish_hyp_15",
        question: "If only the traffic _____ so bad during rush hour daily!",
        translation: "¡Si tan solo el tráfico no fuera tan malo durante hora pico diariamente!",
        translation: "¡Si tan solo el tráfico no fuera tan malo durante hora pico diariamente!",
        options: ["weren't", "isn't", "wasn't", "wouldn't be"],
        correct: "weren't",
        explanation: "Para queja sobre situación presente recurrente usamos 'if only' + pasado simple: 'if only traffic weren't'. Con 'traffic' usamos 'were' (subjuntivo). En español 'si tan solo no fuera' también usa subjuntivo. Esta frustración con congestión diaria es experiencia compartida de commuters urbanos."
      }
    ]
  },

  inversion_conditionals: {
    name: "Inversión en Condicionales",
    description: "Had I known, Should you need - condicionales formales sin 'if'",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "inv_cond_1",
        question: "_____ I known about the meeting, I would have attended.",
        translation: "Si hubiera sabido sobre la reunión, habría asistido.",
        options: ["Had", "If had", "Have", "If have"],
        correct: "Had",
        explanation: "En condicionales formales podemos OMITIR 'if' e INVERTIR sujeto con auxiliar: 'Had I known' en lugar de 'If I had known'. Es muy formal y literario. En español 'si hubiera sabido' mantiene 'si'. Esta estructura elegante es común en escritura formal o discursos donde se busca sofisticación lingüística."
      },
      {
        id: "inv_cond_2",
        question: "_____ you need any help, please don't hesitate to ask.",
        translation: "Si necesitas ayuda, por favor no dudes en preguntar.",
        options: ["Should", "If should", "Would", "If would"],
        correct: "Should",
        explanation: "Para condicional de posibilidad futura podemos invertir: 'Should you need' = 'If you should need'. Es formal y cortés. En español 'si necesitas' es simple. Esta oferta anticipada de ayuda con estructura formal muestra profesionalismo y genuina disposición a asistir si surgiera necesidad."
      },
      {
        id: "inv_cond_3",
        question: "_____ she apologized, I would have forgiven her immediately.",
        translation: "Si ella se hubiera disculpado, la habría perdonado inmediatamente.",
        options: ["Had", "If had", "Have", "If have"],
        correct: "Had",
        explanation: "Inversión de pasado perfecto: 'Had she apologized' = 'If she had apologized'. Omitimos 'if' por formalidad. En español 'si se hubiera disculpado' mantiene 'si'. Esta estructura expresa que el perdón estaba disponible pero falta de disculpa impidió la reconciliación."
      },
      {
        id: "inv_cond_4",
        question: "_____ there be any problems, contact me right away.",
        translation: "Si hubiera algún problema, contáctame de inmediato.",
        options: ["Should", "If should", "Would", "If would"],
        correct: "Should",
        explanation: "Inversión con 'should': 'Should there be' = 'If there should be'. Es formal para contingencias. En español 'si hubiera' usa subjuntivo. Esta instrucción preventiva establece protocolo claro de comunicación inmediata en caso de dificultades, mostrando que estás disponible para resolver problemas."
      },
      {
        id: "inv_cond_5",
        question: "_____ I rich, I would travel the world extensively.",
        translation: "Si fuera rico, viajaría por el mundo extensivamente.",
        options: ["Were", "If were", "Was", "If was"],
        correct: "Were",
        explanation: "Inversión con 'be' en subjuntivo: 'Were I rich' = 'If I were rich'. Siempre 'were' para todas las personas. En español 'si fuera rico' también usa subjuntivo. Esta fantasía de riqueza con viajes globales es sueño común que inspira, aunque quizás no sea realista para la mayoría."
      },
      {
        id: "inv_cond_6",
        question: "_____ they arrived earlier, they could have gotten tickets.",
        translation: "Si hubieran llegado más temprano, habrían conseguido boletos.",
        options: ["Had", "If had", "Have", "If have"],
        correct: "Had",
        explanation: "Inversión de condicional pasado irreal: 'Had they arrived' = 'If they had arrived'. Es formal y literario. En español 'si hubieran llegado' mantiene 'si'. Esta conexión entre tardanza y pérdida de boletos establece causa-efecto claro donde timing fue crucial."
      },
      {
        id: "inv_cond_7",
        question: "_____ you require further information, please visit our website.",
        translation: "Si requiere información adicional, por favor visite nuestro sitio web.",
        options: ["Should", "If should", "Would", "If would"],
        correct: "Should",
        explanation: "Inversión formal en contexto de servicio al cliente: 'Should you require' = 'If you should require'. Es extremadamente cortés. En español 'si requiere' es formal también. Esta redirección a recursos online es común en atención al cliente moderna donde información detallada está disponible en web."
      },
      {
        id: "inv_cond_8",
        question: "_____ the weather good tomorrow, we'll have picnic outside.",
        translation: "Si el clima fuera bueno mañana, tendremos picnic afuera.",
        options: ["Were", "If were", "Was", "If was"],
        correct: "Were",
        explanation: "Inversión con 'be' para condición futura: 'Were the weather good' = 'If the weather were good'. Es formal. En español 'si el clima fuera' usa subjuntivo. Esta planificación de picnic contingente en clima requiere flexibilidad para posible cambio a plan interior si llueve."
      },
      {
        id: "inv_cond_9",
        question: "_____ I _____ his phone number, I would call him now.",
        translation: "Si tuviera su número telefónico, lo llamaría ahora.",
        options: ["Had / -", "If had / -", "Have / -", "If have / -"],
        correct: "Had / -",
        explanation: "Inversión presente: 'Had I his phone number' = 'If I had his number'. Omite verbo 'have' después de 'number'. Es muy formal y literario. En español 'si tuviera su número' es normal. Esta falta de información de contacto impide comunicación deseada, creando frustración."
      },
      {
        id: "inv_cond_10",
        question: "_____ anyone call while I'm out, take a message please.",
        translation: "Si alguien llama mientras estoy fuera, toma un mensaje por favor.",
        options: ["Should", "If should", "Would", "If would"],
        correct: "Should",
        explanation: "Inversión para instrucción condicional: 'Should anyone call' = 'If anyone should call'. Es formal y clara. En español 'si alguien llama' es simple. Esta delegación de responsabilidad de mensajes durante ausencia asegura que ninguna llamada importante se pierda."
      },
      {
        id: "inv_cond_11",
        question: "_____ we not received your payment, service will be suspended.",
        translation: "Si no hubiéramos recibido su pago, el servicio será suspendido.",
        options: ["Had", "If had", "Have", "If have"],
        correct: "Had",
        explanation: "Inversión negativa: 'Had we not received' = 'If we had not received'. Muy formal para avisos oficiales. En español 'si no hubiéramos recibido' mantiene 'si'. Esta advertencia de suspensión de servicio por falta de pago es comunicación seria que urge acción correctiva inmediata."
      },
      {
        id: "inv_cond_12",
        question: "_____ the opportunity arise, I would definitely take it.",
        translation: "Si la oportunidad surgiera, definitivamente la tomaría.",
        options: ["Should", "If should", "Would", "If would"],
        correct: "Should",
        explanation: "Para oportunidad hipotética futura invertimos: 'Should the opportunity arise' = 'If the opportunity should arise'. En español 'si surgiera la oportunidad' usa subjuntivo. Esta declaración de disposición a actuar muestra que estás listo para aprovechar oportunidades cuando se presenten."
      },
      {
        id: "inv_cond_13",
        question: "_____ I _____ younger, I would join the military service.",
        translation: "Si fuera más joven, me uniría al servicio militar.",
        options: ["Were / -", "If were / -", "Was / -", "If was / -"],
        correct: "Were / -",
        explanation: "Inversión con 'be' comparativo: 'Were I younger' = 'If I were younger'. Siempre 'were' en subjuntivo. En español 'si fuera más joven' también usa subjuntivo. Esta reflexión sobre limitación de edad para servicio militar lamenta que esa opción ya no está disponible."
      },
      {
        id: "inv_cond_14",
        question: "_____ this information prove useful, please let us know.",
        translation: "Si esta información resultara útil, por favor háznoslo saber.",
        options: ["Should", "If should", "Would", "If would"],
        correct: "Should",
        explanation: "Inversión cortés solicitando feedback: 'Should this prove useful' = 'If this should prove useful'. Es formal y profesional. En español 'si resultara útil' también es cortés. Esta apertura a retroalimentación muestra interés genuino en saber si el recurso proporcionado cumplió su propósito."
      },
      {
        id: "inv_cond_15",
        question: "_____ the situation _____ different, I might reconsider my decision.",
        translation: "Si la situación fuera diferente, podría reconsiderar mi decisión.",
        options: ["Were / -", "If were / -", "Was / -", "If was / -"],
        correct: "Were / -",
        explanation: "Inversión con 'be' para circunstancia hipotética: 'Were the situation different' = 'If the situation were different'. En español 'si fuera diferente' usa subjuntivo. Esta apertura a cambiar de opinión bajo circunstancias alteradas muestra flexibilidad mental y que decisiones no son absolutamente rígidas."
      }
    ]
  },

  verb_patterns_complex: {
    name: "Patrones Verbales Complejos",
    description: "Suggest, recommend, insist - estructuras con gerundio o that",
    icon: Award,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "verb_pat_1",
        question: "I suggest _____ early to avoid traffic tomorrow morning.",
        translation: "Sugiero salir temprano para evitar tráfico mañana en la mañana.",
        options: ["leaving", "to leave", "leave", "that leave"],
        correct: "leaving",
        explanation: "Después de 'suggest' podemos usar GERUNDIO: 'suggest leaving'. Esta es forma más común en inglés británico. También existe 'suggest that' + subjuntivo (americano). En español 'sugiero salir' usa infinitivo. Esta recomendación práctica sobre timing ayuda a evitar frustración de congestión matutina."
      },
      {
        id: "verb_pat_2",
        question: "She recommended _____ that new Italian restaurant downtown.",
        translation: "Ella recomendó probar ese nuevo restaurante italiano del centro.",
        options: ["trying", "to try", "try", "that try"],
        correct: "trying",
        explanation: "Después de 'recommend' usamos gerundio: 'recommend trying'. Es sugerencia basada en experiencia positiva previa. En español 'recomendó probar' usa infinitivo. Esta endorsación de restaurante específico sugiere que ella ya lo visitó y la experiencia fue lo suficientemente buena para compartir."
      },
      {
        id: "verb_pat_3",
        question: "He insisted _____ paying for dinner despite our protests.",
        translation: "Él insistió en pagar la cena a pesar de nuestras protestas.",
        options: ["on", "to", "in", "that"],
        correct: "on",
        explanation: "El verbo 'insist' con gerundio requiere preposición 'on': 'insisted on paying'. Es determinación fuerte. En español 'insistió en pagar' también usa 'en'. Esta generosidad insistente a pesar de objeciones muestra que para él era importante cubrir el costo como gesto de hospitalidad."
      },
      {
        id: "verb_pat_4",
        question: "They suggested _____ _____ we postpone the meeting until next week.",
        translation: "Ellos sugirieron que pospusiéramos la reunión hasta la próxima semana.",
        options: ["that", "to", "on", "-"],
        correct: "that",
        explanation: "Con 'suggest that' introducimos cláusula con subjuntivo (forma base): 'suggested that we postpone'. Es formal. En español 'sugirieron que pospusiéramos' usa subjuntivo completo. Esta propuesta de reprogramación puede ser por conflictos de agenda o necesidad de más tiempo de preparación."
      },
      {
        id: "verb_pat_5",
        question: "I recommend _____ a doctor if symptoms continue for days.",
        translation: "Recomiendo ver a un doctor si los síntomas continúan por días.",
        options: ["seeing", "to see", "see", "that see"],
        correct: "seeing",
        explanation: "Con 'recommend' usamos gerundio: 'recommend seeing a doctor'. Es consejo médico prudente. En español 'recomiendo ver' usa infinitivo. Esta orientación de buscar atención profesional ante síntomas persistentes es consejo responsable que puede prevenir que problema menor se vuelva serio."
      },
      {
        id: "verb_pat_6",
        question: "She insisted _____ everyone _____ present at the ceremony.",
        translation: "Ella insistió en que todos estuvieran presentes en la ceremonia.",
        options: ["that / be", "on / being", "to / be", "that / are"],
        correct: "that / be",
        explanation: "Con 'insist that' usamos subjuntivo (forma base del verbo): 'insisted that everyone be'. Es más formal que gerundio. En español 'insistió en que estuvieran' usa subjuntivo completo. Esta exigencia de asistencia universal muestra que el evento es suficientemente importante para requerir presencia de todos."
      },
      {
        id: "verb_pat_7",
        question: "I suggest _____ we take a break from this work now.",
        translation: "Sugiero que tomemos un descanso de este trabajo ahora.",
        options: ["that", "to", "on", "-"],
        correct: "that",
        explanation: "Con 'suggest that' en forma inclusiva 'we' proponemos acción grupal: 'suggest that we take'. El verbo 'take' está en forma base (subjuntivo). En español 'sugiero que tomemos' usa subjuntivo. Esta recomendación de pausa reconoce que descansos periódicos mejoran productividad y concentración."
      },
      {
        id: "verb_pat_8",
        question: "The doctor recommended _____ more water daily for health.",
        translation: "El doctor recomendó beber más agua diariamente para la salud.",
        options: ["drinking", "to drink", "drink", "that drink"],
        correct: "drinking",
        explanation: "Con 'recommend' usamos gerundio: 'recommended drinking more water'. Es consejo médico común. En español 'recomendó beber' usa infinitivo. Esta orientación de hidratación es una de las recomendaciones de salud más universales y fundamentales que médicos dan regularmente."
      },
      {
        id: "verb_pat_9",
        question: "He insisted _____ _____ the bill despite it being expensive.",
        translation: "Él insistió en pagar la cuenta a pesar de ser cara.",
        options: ["on paying", "to pay", "that pay", "in paying"],
        correct: "on paying",
        explanation: "Con 'insist on' usamos gerundio: 'insisted on paying'. La preposición 'on' es fija con este verbo. En español 'insistió en pagar' también usa 'en'. Esta determinación de cubrir cuenta costosa puede ser generosidad, orgullo o cumplimiento de promesa previa de invitar."
      },
      {
        id: "verb_pat_10",
        question: "I suggested _____ the project into smaller tasks first.",
        translation: "Sugerí dividir el proyecto en tareas más pequeñas primero.",
        options: ["dividing", "to divide", "divide", "that divide"],
        correct: "dividing",
        explanation: "Con 'suggest' usamos gerundio: 'suggested dividing'. Es estrategia de manejo de proyectos. En español 'sugerí dividir' usa infinitivo. Este consejo de desglosar trabajo grande en partes manejables es técnica probada de productividad que reduce abrumamiento y facilita progreso medible."
      },
      {
        id: "verb_pat_11",
        question: "They recommend _____ _____ all employees attend training.",
        translation: "Ellos recomiendan que todos los empleados asistan al entrenamiento.",
        options: ["that", "to", "on", "-"],
        correct: "that",
        explanation: "Con 'recommend that' para política corporativa usamos subjuntivo: 'recommend that employees attend'. El verbo 'attend' está en forma base. En español 'recomiendan que asistan' usa subjuntivo. Esta capacitación obligatoria se presenta como 'recomendación' pero probablemente es requisito disfrazado."
      },
      {
        id: "verb_pat_12",
        question: "She insisted _____ going alone without any company tonight.",
        translation: "Ella insistió en ir sola sin ninguna compañía esta noche.",
        options: ["on", "to", "that", "in"],
        correct: "on",
        explanation: "Para determinación personal sobre hacer algo solo usamos 'insist on' + gerundio: 'insisted on going alone'. En español 'insistió en ir' también usa 'en'. Esta afirmación de independencia rechaza ofertas de acompañamiento, estableciendo que prefiere soledad o tiempo personal."
      },
      {
        id: "verb_pat_13",
        question: "I suggest _____ _____ he reconsider his hasty decision soon.",
        translation: "Sugiero que él reconsidere su decisión apresurada pronto.",
        options: ["that", "to", "on", "-"],
        correct: "that",
        explanation: "Con 'suggest that' para consejo a tercero usamos subjuntivo: 'suggest that he reconsider'. Forma base sin 's'. En español 'sugiero que reconsidere' también usa subjuntivo. Esta apelación a repensar decisión impulsiva muestra preocupación de que fue hecha sin suficiente reflexión sobre consecuencias."
      },
      {
        id: "verb_pat_14",
        question: "The guide recommended _____ comfortable shoes for hiking trip.",
        translation: "El guía recomendó usar zapatos cómodos para el viaje de senderismo.",
        options: ["wearing", "to wear", "wear", "that wear"],
        correct: "wearing",
        explanation: "Con 'recommend' usamos gerundio: 'recommended wearing comfortable shoes'. Es consejo práctico de experto. En español 'recomendó usar' también aconseja. Esta orientación sobre calzado apropiado es crucial para senderismo donde zapatos inadecuados pueden causar ampollas dolorosas o lesiones."
      },
      {
        id: "verb_pat_15",
        question: "She insisted _____ I _____ the truth about what happened.",
        translation: "Ella insistió en que yo dijera la verdad sobre lo que pasó.",
        options: ["that / tell", "on / telling", "to / tell", "that / told"],
        correct: "that / tell",
        explanation: "Con 'insist that' para exigir honestidad de otros usamos subjuntivo: 'insisted that I tell'. La forma base 'tell' (no 'told'). En español 'insistió en que dijera' usa subjuntivo imperfecto. Esta demanda de transparencia sugiere que sospecha que información completa está siendo ocultada."
      }
    ]
  }
};

export default part19Categories;