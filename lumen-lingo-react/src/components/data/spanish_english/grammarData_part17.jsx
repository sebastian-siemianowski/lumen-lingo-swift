/**
 * SPANISH → ENGLISH GRAMMAR - PART 17
 * 4 categories, 15 questions each
 */

import { Zap, Waves, Umbrella, Camera } from "lucide-react";

export const part17Categories = {
  short_answers: {
    name: "Respuestas Cortas",
    description: "Yes/No con auxiliares - responder correctamente",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "short_ans_1",
        question: "'Do you like pizza?' - 'Yes, _____ _____.'",
        translation: "'¿Te gusta la pizza?' - 'Sí, me gusta.'",
        options: ["I do", "I like", "I am", "I have"],
        correct: "I do",
        explanation: "En respuestas cortas repetimos el AUXILIAR de la pregunta, no el verbo principal. La pregunta usó 'do', entonces respondemos 'Yes, I do' (no 'I like'). En español 'sí, me gusta' repite el verbo. Esta estructura inglesa es más económica y suena más natural que repetir toda la oración completa."
      },
      {
        id: "short_ans_2",
        question: "'Can she speak French?' - 'No, _____ _____.'",
        translation: "'¿Puede ella hablar francés?' - 'No, no puede.'",
        options: ["she can't", "she doesn't", "she isn't", "she hasn't"],
        correct: "she can't",
        explanation: "Con verbos modales como 'can' repetimos el MODAL en la respuesta: 'No, she can't' (she cannot). En español 'no, no puede' también repite el modal. Esta negación corta sobre habilidad lingüística es más elegante que decir 'No, she cannot speak French' completo."
      },
      {
        id: "short_ans_3",
        question: "'Are they coming to the party?' - 'Yes, _____ _____.'",
        translation: "'¿Vienen ellos a la fiesta?' - 'Sí, vienen.'",
        options: ["they are", "they do", "they will", "they have"],
        correct: "they are",
        explanation: "Con presente continuo 'are coming' repetimos el verbo 'be': 'Yes, they are'. En español 'sí, vienen' es más simple. La respuesta corta inglesa mantiene el tiempo verbal de la pregunta, confirmando asistencia futura usando el mismo auxiliar que apareció en la consulta."
      },
      {
        id: "short_ans_4",
        question: "'Have you finished your homework?' - 'No, _____ _____.'",
        translation: "'¿Has terminado tu tarea?' - 'No, no la he terminado.'",
        options: ["I haven't", "I didn't", "I don't", "I'm not"],
        correct: "I haven't",
        explanation: "Con presente perfecto 'have finished' repetimos 'have': 'No, I haven't'. En español 'no, no la he terminado' también usa presente perfecto. Esta respuesta honesta sobre trabajo pendiente admite que la tarea aún no está completa, estableciendo expectativa clara de que necesita más tiempo."
      },
      {
        id: "short_ans_5",
        question: "'Did you enjoy the concert?' - 'Yes, _____ _____!'",
        translation: "'¿Disfrutaste el concierto?' - '¡Sí, lo disfruté!'",
        options: ["I did", "I enjoyed", "I was", "I have"],
        correct: "I did",
        explanation: "Con pasado simple 'did you enjoy' usamos 'did' en la respuesta: 'Yes, I did'. Es más natural que repetir 'I enjoyed it' completo. En español 'sí, lo disfruté' puede repetir verbo. El entusiasmo en la exclamación sugiere que el concierto fue experiencia memorable muy positiva."
      },
      {
        id: "short_ans_6",
        question: "'Will you help me tomorrow?' - 'Yes, _____ _____.'",
        translation: "'¿Me ayudarás mañana?' - 'Sí, te ayudaré.'",
        options: ["I will", "I do", "I am", "I can"],
        correct: "I will",
        explanation: "Con futuro 'will you help' repetimos 'will': 'Yes, I will'. Es promesa de ayuda futura. En español 'sí, te ayudaré' repite verbo en futuro. Esta confirmación de apoyo futuro tranquiliza a quien pregunta, asegurándole que puede contar con asistencia cuando la necesite."
      },
      {
        id: "short_ans_7",
        question: "'Is she your sister?' - 'No, _____ _____.'",
        translation: "'¿Es ella tu hermana?' - 'No, no lo es.'",
        options: ["she isn't", "she doesn't", "she hasn't", "she won't"],
        correct: "she isn't",
        explanation: "Con verbo 'be' (is) repetimos 'be' en respuesta: 'No, she isn't'. En español 'no, no lo es' también usa 'ser'. Esta clarificación de relación familiar corrige suposición incorrecta, probablemente basada en similitud física o cercanía que hizo pensar que eran hermanas."
      },
      {
        id: "short_ans_8",
        question: "'Has he ever been to Japan?' - 'Yes, _____ _____.'",
        translation: "'¿Alguna vez ha estado en Japón?' - 'Sí, ha estado.'",
        options: ["he has", "he did", "he was", "he is"],
        correct: "he has",
        explanation: "Con presente perfecto 'has been' usamos 'has' en respuesta corta: 'Yes, he has'. En español 'sí, ha estado' también mantiene perfecto. Esta confirmación de experiencia japonesa previa sugiere que puede compartir historias o consejos sobre viajar a ese país fascinante."
      },
      {
        id: "short_ans_9",
        question: "'Were they at home yesterday?' - 'No, _____ _____.'",
        translation: "'¿Estaban ellos en casa ayer?' - 'No, no estaban.'",
        options: ["they weren't", "they didn't", "they haven't", "they aren't"],
        correct: "they weren't",
        explanation: "Con pasado de 'be' (were) repetimos 'be' en pasado: 'No, they weren't'. En español 'no, no estaban' también usa pasado de 'estar'. Esta respuesta sobre ausencia de ayer establece que no estuvieron en casa en ese momento específico del pasado."
      },
      {
        id: "short_ans_10",
        question: "'Should we leave now?' - 'Yes, _____ _____.'",
        translation: "'¿Deberíamos irnos ahora?' - 'Sí, deberíamos.'",
        options: ["we should", "we do", "we are", "we will"],
        correct: "we should",
        explanation: "Con modal 'should' repetimos el modal: 'Yes, we should'. Es acuerdo con sugerencia sobre timing de salida. En español 'sí, deberíamos' también repite modal. Esta confirmación indica consenso grupal sobre que es momento apropiado de partir."
      },
      {
        id: "short_ans_11",
        question: "'Does he play the guitar?' - 'Yes, _____ _____.'",
        translation: "'¿Él toca la guitarra?' - 'Sí, la toca.'",
        options: ["he does", "he plays", "he is", "he can"],
        correct: "he does",
        explanation: "Con presente simple tercera persona 'does he play' usamos 'does': 'Yes, he does'. En español 'sí, la toca' puede repetir verbo principal. Esta confirmación de habilidad musical abre posibilidad de pedirle que toque en reuniones sociales o eventos."
      },
      {
        id: "short_ans_12",
        question: "'Am I late for the meeting?' - 'No, _____ _____.'",
        translation: "'¿Llego tarde a la reunión?' - 'No, no llegas tarde.'",
        options: ["you aren't", "you don't", "you haven't", "you won't"],
        correct: "you aren't",
        explanation: "Con 'am I' la respuesta cambia pronombre a 'you': 'No, you aren't' (you are not). El auxiliar 'be' se mantiene. En español 'no, no llegas tarde' también cambia perspectiva. Esta tranquilización sobre puntualidad elimina ansiedad de persona preocupada por llegar retrasada."
      },
      {
        id: "short_ans_13",
        question: "'Would you like some coffee?' - 'Yes, _____ _____.'",
        translation: "'¿Quisieras algo de café?' - 'Sí, quisiera.'",
        options: ["I would", "I do", "I will", "I should"],
        correct: "I would",
        explanation: "Con ofrecimiento cortés 'would you like' repetimos 'would': 'Yes, I would' (I would like some). También podríamos decir 'Yes, please' informalmente. En español 'sí, quisiera' o 'sí, por favor' aceptan oferta. Esta aceptación educada de hospitalidad crea momento social cálido."
      },
      {
        id: "short_ans_14",
        question: "'Had she left when you arrived?' - 'Yes, _____ _____.'",
        translation: "'¿Ella se había ido cuando llegaste?' - 'Sí, se había ido.'",
        options: ["she had", "she did", "she was", "she has"],
        correct: "she had",
        explanation: "Con pasado perfecto 'had left' repetimos 'had': 'Yes, she had'. En español 'sí, se había ido' también usa pluscuamperfecto. Esta confirmación de que la partida precedió la llegada establece secuencia temporal clara donde los dos eventos no coincidieron, resultando en oportunidad perdida de encuentro."
      },
      {
        id: "short_ans_15",
        question: "'Might it rain tomorrow?' - 'Yes, _____ _____.'",
        translation: "'¿Podría llover mañana?' - 'Sí, podría.'",
        options: ["it might", "it does", "it will", "it is"],
        correct: "it might",
        explanation: "Con modal de posibilidad 'might' repetimos el mismo modal: 'Yes, it might'. Mantiene el nivel de incertidumbre de la pregunta original. En español 'sí, podría' también usa condicional de posibilidad. Esta respuesta cautelosa sobre pronóstico meteorológico reconoce que es posibilidad pero no certeza."
      }
    ]
  },

  each_every_all: {
    name: "Each, Every, All",
    description: "Totalidad y distribución - matices de 'todos'",
    icon: Waves,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "each_every_1",
        question: "_____ student must submit the assignment by Friday.",
        translation: "Cada estudiante debe entregar la tarea para el viernes.",
        options: ["Each", "Every", "All", "All the"],
        correct: "Each",
        explanation: "Usamos 'each' (cada) cuando pensamos en individuos SEPARADAMENTE, uno por uno. Va con singular. También podríamos usar 'every' pero 'each' enfatiza más la individualidad. En español 'cada estudiante' también es singular. Esta instrucción asegura que TODOS sin excepción cumplan con responsabilidad individual."
      },
      {
        id: "each_every_2",
        question: "_____ child in the class received a prize today.",
        translation: "Cada niño en la clase recibió un premio hoy.",
        options: ["Every", "Each", "All", "All the"],
        correct: "Every",
        explanation: "Usamos 'every' (cada/todo) cuando pensamos en el GRUPO como totalidad. Va con singular. Es casi intercambiable con 'each' pero 'every' piensa más en conjunto. En español 'cada niño' es singular. Esta distribución universal de premios asegura que ningún niño se sienta excluido, creando experiencia positiva para todos."
      },
      {
        id: "each_every_3",
        question: "_____ students must wear uniforms at this school.",
        translation: "Todos los estudiantes deben usar uniformes en esta escuela.",
        options: ["All", "Every", "Each", "All of"],
        correct: "All",
        explanation: "Para grupos completos en plural usamos 'all' (todos). Va directamente antes del sustantivo plural sin 'the'. En español 'todos los estudiantes' también es plural. La diferencia: 'each/every' son singular, 'all' es plural. Esta regla institucional se aplica sin excepciones a toda la población estudiantil."
      },
      {
        id: "each_every_4",
        question: "She calls her mother _____ day without fail.",
        translation: "Ella llama a su madre cada día sin falta.",
        options: ["every", "each", "all", "all the"],
        correct: "every",
        explanation: "Para rutinas o frecuencia regular preferimos 'every': 'every day, every week'. Es más idiomático que 'each' para expresiones de tiempo. En español 'cada día' también indica regularidad. Esta comunicación diaria con madre muestra lazo familiar fuerte y ritual de conexión que se mantiene consistente."
      },
      {
        id: "each_every_5",
        question: "_____ _____ them contributed money for the gift.",
        translation: "Cada uno de ellos contribuyó dinero para el regalo.",
        options: ["Each of", "Every of", "All", "All of"],
        correct: "Each of",
        explanation: "Cuando 'each' se refiere a miembros de grupo específico usamos 'each of' + pronombre/artículo: 'each of them'. NO existe 'every of'. En español 'cada uno de ellos' también especifica. Esta contribución individual de todos los miembros muestra cooperación donde cada persona hizo su parte para regalo colectivo."
      },
      {
        id: "each_every_6",
        question: "_____ my friends are coming to the birthday party.",
        translation: "Todos mis amigos vienen a la fiesta de cumpleaños.",
        options: ["All", "Every", "Each", "All of"],
        correct: "All",
        explanation: "Antes de posesivo (my) usamos 'all' directamente: 'all my friends'. No podemos decir 'every my friends'. En español 'todos mis amigos' también es plural con posesivo. Esta asistencia completa del círculo social es cumplido al homenajeado, indicando popularidad y que la gente quiere celebrar con él."
      },
      {
        id: "each_every_7",
        question: "I go to the gym _____ other day regularly.",
        translation: "Voy al gimnasio cada dos días regularmente.",
        options: ["every", "each", "all", "all the"],
        correct: "every",
        explanation: "La expresión 'every other day' (cada dos días/día por medio) es fija con 'every'. Describe frecuencia alternada. En español 'cada dos días' también expresa este patrón. Esta rutina de ejercicio con día de descanso entre sesiones permite recuperación muscular mientras mantiene consistencia general."
      },
      {
        id: "each_every_8",
        question: "_____ person has their own unique talents and abilities.",
        translation: "Cada persona tiene sus propios talentos y habilidades únicos.",
        options: ["Each", "Every", "All", "All the"],
        correct: "Each",
        explanation: "Para enfatizar INDIVIDUALIDAD única usamos 'each': cada uno diferente. Con singular. También funciona 'every' pero 'each' enfatiza más la singularidad. En español 'cada persona' es singular. Esta afirmación sobre diversidad de talentos reconoce que no todos destacamos en las mismas áreas."
      },
      {
        id: "each_every_9",
        question: "We enjoyed _____ minute of the vacation trip.",
        translation: "Disfrutamos cada minuto del viaje de vacaciones.",
        options: ["every", "each", "all", "all the"],
        correct: "every",
        explanation: "Para totalidad de tiempo con medidas temporales usamos 'every': 'every minute, every second'. En español 'cada minuto' también enfatiza completitud. Esta hipérbole sobre disfrutar absolutamente todo el tiempo expresa cuán maravillosas fueron las vacaciones sin momentos negativos."
      },
      {
        id: "each_every_10",
        question: "_____ _____ the players on the team scored a goal.",
        translation: "Todos los jugadores en el equipo anotaron un gol.",
        options: ["All of", "Every", "Each", "Every of"],
        correct: "All of",
        explanation: "Con artículo definido 'the' usamos 'all of the players'. Es grupo específico completo. En español 'todos los jugadores' también usa artículo. Este logro colectivo donde cada jugador contribuyó gol es resultado excepcional que muestra ataque balanceado y participación equitativa del equipo completo."
      },
      {
        id: "each_every_11",
        question: "_____ time I see him, he's on his phone constantly.",
        translation: "Cada vez que lo veo, está en su teléfono constantemente.",
        options: ["Every", "Each", "All", "All the"],
        correct: "Every",
        explanation: "La expresión fija es 'every time' (cada vez que), no 'each time'. Describe patrón repetido en múltiples ocasiones. En español 'cada vez que' también es expresión común. Esta observación sobre adicción a teléfono es queja moderna sobre cómo tecnología domina atención incluso en interacciones sociales."
      },
      {
        id: "each_every_12",
        question: "_____ the information you need is in this folder.",
        translation: "Toda la información que necesitas está en esta carpeta.",
        options: ["All", "Every", "Each", "All of"],
        correct: "All",
        explanation: "Con sustantivos incontables (information) usamos 'all' sin 'the': 'all the information'. No podemos usar 'every' con incontables. En español 'toda la información' también es singular colectivo. Esta afirmación de completitud asegura que no falta nada y todo está centralizado en un solo lugar."
      },
      {
        id: "each_every_13",
        question: "He gave _____ _____ us a different book to read.",
        translation: "Él dio a cada uno de nosotros un libro diferente para leer.",
        options: ["each of", "every of", "all", "all of"],
        correct: "each of",
        explanation: "Para distribución individual a miembros específicos usamos 'each of us'. La palabra 'different' refuerza la individualización. En español 'a cada uno' también distribuye. Esta asignación personalizada de lecturas diferentes muestra que el profesor consideró intereses o niveles individuales, no dio todos el mismo libro."
      },
      {
        id: "each_every_14",
        question: "_____ employee will receive a bonus this year!",
        translation: "¡Cada empleado recibirá un bono este año!",
        options: ["Every", "Each", "All", "All the"],
        correct: "Every",
        explanation: "Para anuncios generales que aplican a todos usamos 'every employee' (singular). Es política universal. También funciona 'each' pero 'every' suena más oficial. En español 'cada empleado' es singular. Esta buena noticia financiera universal probablemente aumenta moral y motivación de toda la plantilla laboral."
      },
      {
        id: "each_every_15",
        question: "_____ _____ them brought a dish to the potluck dinner.",
        translation: "Cada uno de ellos trajo un plato para la cena de compartir.",
        options: ["Each of", "Every of", "All", "All of"],
        correct: "Each of",
        explanation: "Para grupo específico donde cada miembro contribuyó individualmente usamos 'each of them'. En español 'cada uno de ellos' también individualiza. Esta participación universal donde todos aportaron plato diferente crea variedad culinaria rica en comida compartida comunitaria."
      }
    ]
  },

  double_comparatives: {
    name: "Comparativos Dobles",
    description: "The more... the more - relaciones proporcionales",
    icon: Umbrella,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "dbl_comp_1",
        question: "_____ more you practice, _____ better you'll become at it.",
        translation: "Mientras más practiques, mejor te volverás en ello.",
        options: ["The / the", "More / more", "The / more", "More / the"],
        correct: "The / the",
        explanation: "La estructura 'the more...the more' (mientras más...más) muestra relación proporcional directa. AMBOS lados necesitan 'the' antes del comparativo. En español 'mientras más...más' o 'cuanto más...más' también duplica. Esta fórmula motivacional establece que incremento en esfuerzo garantiza incremento en habilidad."
      },
      {
        id: "dbl_comp_2",
        question: "_____ earlier you arrive, _____ better seats you'll get.",
        translation: "Mientras más temprano llegues, mejores asientos conseguirás.",
        options: ["The / the", "More / more", "The / more", "More / the"],
        correct: "The / the",
        explanation: "Otra vez 'the...the' con comparativos en ambos lados: 'the earlier...the better'. Establece causa-efecto temporal. En español 'mientras más temprano...mejores' también correlaciona tiempo con beneficio. Esta lógica de eventos sin asientos asignados incentiva puntualidad para obtener ubicaciones preferenciales."
      },
      {
        id: "dbl_comp_3",
        question: "_____ less you eat, _____ hungrier you feel later on.",
        translation: "Mientras menos comas, más hambre sentirás después.",
        options: ["The / the", "Less / more", "The / more", "Less / the"],
        correct: "The / the",
        explanation: "Funciona con cualquier comparativo, incluso 'less': 'the less...the hungrier'. Ambos necesitan 'the'. En español 'mientras menos...más' también usa esta estructura. Esta observación sobre hambre creciente con restricción alimentaria es hecho fisiológico que todos experimentamos cuando saltamos comidas."
      },
      {
        id: "dbl_comp_4",
        question: "_____ bigger the house, _____ more it costs usually.",
        translation: "Mientras más grande la casa, más cuesta usualmente.",
        options: ["The / the", "More / more", "The / more", "Bigger / more"],
        correct: "The / the",
        explanation: "Con comparativo 'bigger' también seguimos regla 'the...the': cada lado necesita su 'the'. En español 'mientras más grande...más cuesta' también correlaciona tamaño con precio. Esta realidad del mercado inmobiliario donde espacio tiene precio premium es consideración importante al comprar vivienda."
      },
      {
        id: "dbl_comp_5",
        question: "_____ faster you drive, _____ more dangerous it becomes.",
        translation: "Mientras más rápido manejes, más peligroso se vuelve.",
        options: ["The / the", "More / more", "The / more", "Faster / more"],
        correct: "The / the",
        explanation: "Esta estructura advierte sobre relación proporcional negativa: 'the faster...the more dangerous'. A mayor velocidad, mayor riesgo. En español 'mientras más rápido...más peligroso' también advierte. Esta advertencia de seguridad vial es importante porque la velocidad excesiva es factor principal en accidentes graves."
      },
      {
        id: "dbl_comp_6",
        question: "_____ older I get, _____ more I appreciate my parents.",
        translation: "Mientras más viejo me hago, más aprecio a mis padres.",
        options: ["The / the", "More / more", "The / more", "Older / more"],
        correct: "The / the",
        explanation: "Esta reflexión sobre madurez usa 'the older...the more': edad trae apreciación. En español 'mientras más viejo...más aprecio' también crece con edad. Esta sabiduría de reconocer sacrificios parentales con madurez es realización común al experimentar propias responsabilidades adultas."
      },
      {
        id: "dbl_comp_7",
        question: "_____ longer you wait, _____ worse the situation will get.",
        translation: "Mientras más esperes, peor se pondrá la situación.",
        options: ["The / the", "More / more", "The / more", "Longer / worse"],
        correct: "The / the",
        explanation: "Esta estructura de advertencia usa 'the longer...the worse': demora empeora cosas. En español 'mientras más esperes...peor' también urge acción. Esta observación sobre problemas que se agravan con tiempo motiva abordar dificultades inmediatamente antes de que escalen a crisis inmanejables."
      },
      {
        id: "dbl_comp_8",
        question: "_____ more I learn, _____ more I realize how much I don't know.",
        translation: "Mientras más aprendo, más me doy cuenta de cuánto no sé.",
        options: ["The / the", "More / more", "The / more", "Learn / realize"],
        correct: "The / the",
        explanation: "Esta paradoja intelectual usa 'the more...the more': conocimiento revela ignorancia. En español 'mientras más aprendo...más me doy cuenta' también es paradójico. Esta humildad creciente con educación reconoce que el conocimiento profundo en un área revela cuánto más existe por explorar."
      },
      {
        id: "dbl_comp_9",
        question: "_____ harder you work, _____ luckier you seem to be.",
        translation: "Mientras más duro trabajes, más suerte pareces tener.",
        options: ["The / the", "More / more", "The / more", "Harder / luckier"],
        correct: "The / the",
        explanation: "Este dicho sobre 'crear tu propia suerte' usa 'the harder...the luckier': trabajo genera oportunidades. En español 'mientras más duro...más suerte' también conecta esfuerzo con fortuna. Esta sabiduría práctica sugiere que lo que parece suerte es a menudo resultado de preparación que encuentra oportunidad."
      },
      {
        id: "dbl_comp_10",
        question: "_____ higher you climb, _____ better the view becomes.",
        translation: "Mientras más alto subas, mejor se vuelve la vista.",
        options: ["The / the", "More / more", "The / more", "Higher / better"],
        correct: "The / the",
        explanation: "Esta metáfora física usa 'the higher...the better': altitud mejora panorama. En español 'mientras más alto...mejor' también es proporcional. Esta verdad literal sobre escalada o construcciones altas también funciona metafóricamente sobre que esfuerzos mayores traen recompensas mejores."
      },
      {
        id: "dbl_comp_11",
        question: "_____ more expensive the restaurant, _____ better the food usually.",
        translation: "Mientras más caro el restaurante, mejor la comida usualmente.",
        options: ["The / the", "More / more", "The / more", "Expensive / better"],
        correct: "The / the",
        explanation: "Esta generalización sobre precio y calidad usa 'the more expensive...the better': correlación común. En español 'mientras más caro...mejor' también asume esta relación. Aunque no siempre cierta, existe percepción general de que restaurantes premium cobran más porque ofrecen calidad superior."
      },
      {
        id: "dbl_comp_12",
        question: "_____ quieter you are, _____ more you hear around you.",
        translation: "Mientras más callado estés, más escucharás a tu alrededor.",
        options: ["The / the", "More / more", "The / more", "Quieter / more"],
        correct: "The / the",
        explanation: "Esta observación meditativa usa 'the quieter...the more': silencio aumenta percepción. En español 'mientras más callado...más escucharás' también es proporcional. Esta sabiduría sobre atención consciente sugiere que reducir nuestro ruido mental y verbal permite captar más del ambiente circundante."
      },
      {
        id: "dbl_comp_13",
        question: "_____ sooner we start, _____ sooner we'll finish the project.",
        translation: "Mientras más pronto empecemos, más pronto terminaremos el proyecto.",
        options: ["The / the", "More / more", "The / more", "Sooner / sooner"],
        correct: "The / the",
        explanation: "Usando mismo comparativo ambos lados: 'the sooner...the sooner' muestra relación directa de timing. En español 'mientras más pronto...más pronto' también repite. Esta lógica simple sobre que inicio temprano permite finalización temprana motiva dejar de procrastinar y comenzar ya."
      },
      {
        id: "dbl_comp_14",
        question: "_____ darker it gets, _____ harder it is to see clearly.",
        translation: "Mientras más oscuro se pone, más difícil es ver claramente.",
        options: ["The / the", "More / more", "The / more", "Darker / harder"],
        correct: "The / the",
        explanation: "Esta observación sobre visibilidad usa 'the darker...the harder': oscuridad impide visión. En español 'mientras más oscuro...más difícil' también correlaciona. Esta relación obvia entre luz y capacidad de ver se vuelve crítica al conducir de noche, donde visibilidad reducida aumenta peligro."
      },
      {
        id: "dbl_comp_15",
        question: "_____ more complicated the problem, _____ longer it takes to solve.",
        translation: "Mientras más complicado el problema, más tiempo toma resolverlo.",
        options: ["The / the", "More / more", "The / more", "Complicated / longer"],
        correct: "The / the",
        explanation: "Esta lógica de resolución de problemas usa 'the more complicated...the longer': complejidad requiere tiempo. En español 'mientras más complicado...más tiempo' también es proporcional. Esta expectativa realista sobre que problemas difíciles no tienen soluciones rápidas ayuda a gestionar paciencia y persistencia en trabajo complejo."
      }
    ]
  },

  let_make_have: {
    name: "Let, Make, Have (Causativos)",
    description: "Permitir, obligar, hacer que otros hagan",
    icon: Camera,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "caus_let_1",
        question: "My parents don't _____ me stay out late on weekdays.",
        translation: "Mis padres no me dejan quedarme fuera tarde entre semana.",
        options: ["let", "make", "have", "allow"],
        correct: "let",
        explanation: "El verbo 'let' (dejar/permitir) va con INFINITIVO SIN 'to': 'let me stay' (no 'let me to stay'). Es permiso o prohibición. En español 'no me dejan quedarme' también niega permiso. Esta regla parental sobre horarios escolares protege sueño necesario para rendimiento académico durante semana laboral."
      },
      {
        id: "caus_let_2",
        question: "The teacher _____ us redo the test after we complained.",
        translation: "El profesor nos dejó rehacer el examen después de quejarnos.",
        options: ["let", "made", "had", "allowed"],
        correct: "let",
        explanation: "Cuando alguien PERMITE algo (no obliga) usamos 'let': 'let us redo'. Es concesión generosa. En español 'nos dejó rehacer' también es permiso. Esta segunda oportunidad dada después de quejas muestra flexibilidad pedagógica y reconocimiento de que quizás el examen inicial tuvo problemas."
      },
      {
        id: "caus_let_3",
        question: "She _____ me wash the dishes after dinner every night.",
        translation: "Ella me hace lavar los platos después de la cena cada noche.",
        options: ["makes", "lets", "has", "allows"],
        correct: "makes",
        explanation: "El verbo 'make' (hacer/obligar) también va con infinitivo SIN 'to': 'makes me wash'. Es obligación impuesta. En español 'me hace lavar' también obliga. Esta tarea doméstica asignada como responsabilidad regular enseña disciplina y contribución a tareas del hogar."
      },
      {
        id: "caus_let_4",
        question: "I'll _____ the mechanic check the car tomorrow morning.",
        translation: "Haré que el mecánico revise el auto mañana en la mañana.",
        options: ["have", "let", "make", "allow"],
        correct: "have",
        explanation: "El verbo 'have' en este contexto causativo significa 'hacer que alguien haga' (arranging for service): 'have the mechanic check'. También sin 'to'. En español 'haré que revise' o 'mandaré a revisar' delega servicio. Esta es forma de expresar que organizarás que profesional realice trabajo."
      },
      {
        id: "caus_let_5",
        question: "Don't _____ anyone tell you that you can't succeed!",
        translation: "¡No dejes que nadie te diga que no puedes tener éxito!",
        options: ["let", "make", "have", "allow"],
        correct: "let",
        explanation: "Imperativo con 'let' para NO permitir influencia negativa: 'don't let anyone tell you'. Es sobre mantener control sobre qué voces escuchas. En español 'no dejes que nadie' también previene. Esta frase motivacional empodera a ignorar pesimismo externo y confiar en capacidades propias."
      },
      {
        id: "caus_let_6",
        question: "My boss _____ me work overtime without extra pay last week.",
        translation: "Mi jefe me hizo trabajar horas extra sin pago adicional la semana pasada.",
        options: ["made", "let", "had", "allowed"],
        correct: "made",
        explanation: "Cuando alguien te OBLIGA a hacer algo usamos 'made': 'made me work overtime'. Es coerción, no elección. En español 'me hizo trabajar' también implica obligación. Esta situación laboral de horas extra no compensadas es potencialmente abusiva y viola derechos laborales en muchos países."
      },
      {
        id: "caus_let_7",
        question: "Please _____ me know when you arrive at the airport.",
        translation: "Por favor déjame saber cuando llegues al aeropuerto.",
        options: ["let", "make", "have", "allow"],
        correct: "let",
        explanation: "La expresión fija es 'let me know' (avísame/déjame saber). Va con infinitivo sin 'to'. En español 'déjame saber' o 'avísame' son comunes. Esta petición de comunicación al llegar tranquiliza a quien espera y permite coordinar recogida o siguiente paso del plan."
      },
      {
        id: "caus_let_8",
        question: "The coach _____ all players practice extra hours for championship.",
        translation: "El entrenador hizo que todos los jugadores practicaran horas extra para el campeonato.",
        options: ["made", "let", "had", "allowed"],
        correct: "made",
        explanation: "Para entrenamiento obligatorio usamos 'made': 'made all players practice'. Es exigencia del coach, no opción. En español 'hizo que practicaran' también obliga. Esta intensificación de entrenamiento antes de campeonato importante muestra seriedad sobre preparación para competencia crucial."
      },
      {
        id: "caus_let_9",
        question: "I _____ my hair cut at the salon yesterday afternoon.",
        translation: "Me hice cortar el cabello en el salón ayer en la tarde.",
        options: ["had", "let", "made", "allowed"],
        correct: "had",
        explanation: "Para servicios profesionales que otros hacen POR ti usamos 'had': 'had my hair cut' (participio). Es diferente de 'make/let' que usan infinitivo. En español 'me hice cortar' o 'me corté el pelo' (donde otro lo hace). Esta visita al salón es cuidado personal regular que muchos programan mensualmente."
      },
      {
        id: "caus_let_10",
        question: "The strict rules _____ us follow specific procedures exactly.",
        translation: "Las reglas estrictas nos hacen seguir procedimientos específicos exactamente.",
        options: ["make", "let", "have", "allow"],
        correct: "make",
        explanation: "Cuando reglas o circunstancias OBLIGAN (no personas) usamos 'make': 'rules make us follow'. Es fuerza impersonal. En español 'nos hacen seguir' también obliga. Esta rigidez procedimental puede ser por seguridad, calidad o regulaciones que no permiten desviación del protocolo establecido."
      },
      {
        id: "caus_let_11",
        question: "Will you _____ me borrow your laptop for my presentation?",
        translation: "¿Me dejarás pedir prestada tu laptop para mi presentación?",
        options: ["let", "make", "have", "allow"],
        correct: "let",
        explanation: "Para pedir permiso de usar algo de alguien usamos 'let': 'let me borrow'. Es solicitud de préstamo. En español '¿me dejarás?' también pide permiso. Esta petición de equipo tecnológico para presentación importante muestra que no tienes acceso propio y dependes de generosidad de otros."
      },
      {
        id: "caus_let_12",
        question: "The noise _____ me wake up several times during the night.",
        translation: "El ruido me hizo despertar varias veces durante la noche.",
        options: ["made", "let", "had", "allowed"],
        correct: "made",
        explanation: "Cuando algo CAUSA involuntariamente una acción usamos 'made': 'made me wake up'. No fue elección sino consecuencia. En español 'me hizo despertar' también es involuntario. Esta interrupción de sueño por ruido es frustrante porque afecta descanso necesario, especialmente cuando es repetida."
      },
      {
        id: "caus_let_13",
        question: "She _____ her assistant send the emails yesterday morning.",
        translation: "Ella hizo que su asistente enviara los emails ayer en la mañana.",
        options: ["had", "made", "let", "allowed"],
        correct: "had",
        explanation: "Para delegar tareas a personal usamos 'had': 'had her assistant send'. Es delegación profesional estándar. En español 'hizo que enviara' o 'mandó a enviar' delega. Esta distribución de trabajo a asistente es uso apropiado de recursos humanos en contexto laboral jerárquico."
      },
      {
        id: "caus_let_14",
        question: "Don't _____ fear stop you from trying new things!",
        translation: "¡No dejes que el miedo te detenga de intentar cosas nuevas!",
        options: ["let", "make", "have", "allow"],
        correct: "let",
        explanation: "Para NO permitir que emoción negativa controle acciones usamos 'don't let': 'don't let fear stop you'. Es consejo sobre superar miedo. En español 'no dejes que el miedo' también previene. Esta frase inspiracional anima a no permitir que ansiedad sea barrera para crecimiento y experiencias nuevas."
      },
      {
        id: "caus_let_15",
        question: "The doctor _____ me stay in bed for three days to recover.",
        translation: "El doctor me hizo quedarme en cama por tres días para recuperarme.",
        options: ["made", "let", "had", "allowed"],
        correct: "made",
        explanation: "Para órdenes médicas estrictas usamos 'made': 'made me stay in bed'. Es instrucción profesional obligatoria. En español 'me hizo quedarme' también es orden médica. Este reposo prescrito es tratamiento necesario para recuperación adecuada de enfermedad o lesión que requiere descanso completo."
      }
    ]
  }
};

export default part17Categories;