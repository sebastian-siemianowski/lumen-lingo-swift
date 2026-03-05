/**
 * SPANISH → ENGLISH GRAMMAR - PART 13
 * 4 categories, 15 questions each
 */

import { Feather, Heart, Globe, Star } from "lucide-react";

export const part13Categories = {
  indirect_questions: {
    name: "Preguntas Indirectas",
    description: "Could you tell me... - preguntas más corteses",
    icon: Feather,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "indir_q_1",
        question: "Could you tell me where _____ _____?",
        translation: "¿Podrías decirme dónde está el baño?",
        options: ["the bathroom is", "is the bathroom", "the bathroom", "is bathroom"],
        correct: "the bathroom is",
        explanation: "En preguntas indirectas el orden se vuelve AFIRMATIVO, no interrogativo. Decimos 'where the bathroom is' (orden normal) no 'where is the bathroom' (orden de pregunta directa). En español también cambiamos el orden: '¿dónde está?' directo se vuelve 'dónde está' sin inversión en indirecto. Las preguntas indirectas suenan más corteses y formales."
      },
      {
        id: "indir_q_2",
        question: "Do you know what time _____ _____ _____?",
        translation: "¿Sabes a qué hora cierra la tienda?",
        options: ["the store closes", "closes the store", "does the store close", "the store close"],
        correct: "the store closes",
        explanation: "Después de 'do you know' la pregunta indirecta usa orden afirmativo normal: 'what time the store closes'. No invertimos ni usamos auxiliar 'does'. En español '¿a qué hora cierra?' también mantiene orden declarativo en la parte indirecta. Esta construcción cortés es preferida cuando pedimos información a desconocidos."
      },
      {
        id: "indir_q_3",
        question: "I wonder if _____ _____ to the meeting tomorrow.",
        translation: "Me pregunto si ella vendrá a la reunión mañana.",
        options: ["she will come", "will she come", "she comes", "does she come"],
        correct: "she will come",
        explanation: "El verbo 'wonder' (preguntarse) introduce pregunta indirecta con 'if' (si). El orden es afirmativo: 'she will come' no invertido. En español 'si ella vendrá' también mantiene orden declarativo. Esta expresión de duda sobre asistencia futura muestra incertidumbre que el hablante contempla internamente."
      },
      {
        id: "indir_q_4",
        question: "Can you explain how _____ _____ this machine?",
        translation: "¿Puedes explicar cómo funciona esta máquina?",
        options: ["this machine works", "works this machine", "does this machine work", "this machine work"],
        correct: "this machine works",
        explanation: "Después de 'can you explain' la pregunta indirecta mantiene orden afirmativo: 'how this machine works'. No usamos auxiliar 'does'. En español 'cómo funciona' también es orden declarativo. Esta petición de explicación técnica muestra deseo de entender el mecanismo para poder operarlo correctamente."
      },
      {
        id: "indir_q_5",
        question: "I'm not sure when _____ _____ back from vacation.",
        translation: "No estoy seguro de cuándo regresará de vacaciones.",
        options: ["he will be", "will he be", "he is", "is he"],
        correct: "he will be",
        explanation: "Después de 'I'm not sure' la pregunta indirecta usa orden normal: 'when he will be'. Esta expresión de incertidumbre sobre fecha de retorno es común cuando alguien está viajando. En español 'cuándo regresará' también es declarativo. La falta de fecha exacta de retorno puede complicar planificación."
      },
      {
        id: "indir_q_6",
        question: "Could you show me where _____ _____ my coat?",
        translation: "¿Podrías mostrarme dónde dejé mi abrigo?",
        options: ["I left", "left I", "did I leave", "I leave"],
        correct: "I left",
        explanation: "En pregunta indirecta sobre acción pasada propia usamos orden afirmativo: 'where I left'. No invertimos ni duplicamos 'did'. En español 'dónde dejé' también mantiene orden normal. Esta situación de olvidar dónde pusimos algo es experiencia universal que a menudo requiere ayuda de otros para recordar."
      },
      {
        id: "indir_q_7",
        question: "Do you remember what _____ _____ for homework?",
        translation: "¿Recuerdas qué dijo el profesor para la tarea?",
        options: ["the teacher said", "said the teacher", "did the teacher say", "the teacher say"],
        correct: "the teacher said",
        explanation: "Con 'do you remember' la pregunta indirecta mantiene orden afirmativo: 'what the teacher said'. El pasado 'said' no necesita auxiliar. En español 'qué dijo el profesor' también es declarativo. Esta pregunta entre compañeros de clase muestra dependencia mutua para recordar instrucciones importantes."
      },
      {
        id: "indir_q_8",
        question: "I'd like to know why _____ _____ so angry yesterday.",
        translation: "Me gustaría saber por qué estabas tan enojado ayer.",
        options: ["you were", "were you", "you was", "was you"],
        correct: "you were",
        explanation: "Después de 'I'd like to know' usamos orden afirmativo: 'why you were'. No invertimos el sujeto y verbo. En español 'por qué estabas' también es orden normal. Esta pregunta gentil sobre emociones pasadas muestra preocupación genuina y deseo de entender qué causó el malestar."
      },
      {
        id: "indir_q_9",
        question: "Can you tell me if _____ _____ any vegetarian options?",
        translation: "¿Puedes decirme si hay opciones vegetarianas?",
        options: ["there are", "are there", "there is", "is there"],
        correct: "there are",
        explanation: "En pregunta indirecta con 'if' sobre existencia, mantenemos orden afirmativo: 'if there are'. No invertimos a 'are there'. El plural 'options' requiere 'are'. En español 'si hay' también es orden declarativo. Esta consulta dietética común muestra consideración por restricciones alimentarias."
      },
      {
        id: "indir_q_10",
        question: "I wonder whether _____ _____ _____ the truth about it.",
        translation: "Me pregunto si ella sabe la verdad sobre eso.",
        options: ["she knows", "knows she", "does she know", "she know"],
        correct: "she knows",
        explanation: "El verbo 'wonder' con 'whether' (si) introduce duda indirecta con orden afirmativo: 'she knows'. No usamos auxiliar 'does'. En español 'si ella sabe' también mantiene orden normal. Esta contemplación sobre conocimiento ajeno de verdad importante sugiere que algo se ha mantenido oculto."
      },
      {
        id: "indir_q_11",
        question: "Could you explain why _____ _____ that decision back then?",
        translation: "¿Podrías explicar por qué tomaste esa decisión en ese entonces?",
        options: ["you made", "made you", "did you make", "you make"],
        correct: "you made",
        explanation: "Pregunta indirecta sobre decisión pasada mantiene orden afirmativo: 'why you made'. El pasado 'made' no necesita 'did' en contexto indirecto. En español 'por qué tomaste' también es declarativo. Esta petición de explicación sobre decisión pasada busca entender el razonamiento detrás de elecciones que quizás tuvieron consecuencias."
      },
      {
        id: "indir_q_12",
        question: "I'm curious about how _____ _____ your English so well.",
        translation: "Tengo curiosidad sobre cómo aprendiste tu inglés tan bien.",
        options: ["you learned", "learned you", "did you learn", "you learn"],
        correct: "you learned",
        explanation: "Después de 'curious about' la pregunta indirecta mantiene orden normal: 'how you learned'. Esta expresión de curiosidad es cumplido sobre logro lingüístico. En español 'cómo aprendiste' también es afirmativo. La pregunta busca secretos o métodos de aprendizaje que podrían ser útiles para el preguntante."
      },
      {
        id: "indir_q_13",
        question: "Do you know whose _____ _____ parked outside?",
        translation: "¿Sabes de quién es el auto estacionado afuera?",
        options: ["car is", "is car", "car are", "are car"],
        correct: "car is",
        explanation: "En pregunta indirecta con 'whose' el orden es 'whose car is' no invertido. Mantenemos estructura afirmativa incluso con interrogativo posesivo. En español '¿de quién es el auto?' puede mantener interrogación. Esta pregunta sobre propiedad de vehículo desconocido puede ser curiosidad o preocupación sobre intruso."
      },
      {
        id: "indir_q_14",
        question: "She asked me where _____ _____ _____ on vacation.",
        translation: "Ella me preguntó dónde había ido de vacaciones.",
        options: ["I had been", "had I been", "I have been", "have I been"],
        correct: "I had been",
        explanation: "En discurso indirecto la pregunta mantiene orden afirmativo: 'where I had been'. El pasado perfecto 'had been' es apropiado cuando reportamos pregunta hecha en el pasado. En español 'dónde había ido' también usa pluscuamperfecto. Esta pregunta social común sobre vacaciones inicia intercambio de experiencias de viaje."
      },
      {
        id: "indir_q_15",
        question: "I don't understand why _____ _____ so upset with me.",
        translation: "No entiendo por qué estás tan molesto conmigo.",
        options: ["you are", "are you", "you're being", "are you being"],
        correct: "you are",
        explanation: "Después de 'don't understand' la pregunta indirecta mantiene orden afirmativo: 'why you are'. No invertimos sujeto y verbo. En español 'por qué estás' también es declarativo. Esta expresión de confusión sobre enfado ajeno busca clarificación para resolver conflicto interpersonal no comprendido."
      }
    ]
  },

  enough_too: {
    name: "Enough vs Too",
    description: "Suficiencia vs exceso - construcciones correctas",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "enough_too_1",
        question: "This coffee is _____ hot to drink right now.",
        translation: "Este café está demasiado caliente para tomar ahora mismo.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "Usamos 'too' (demasiado) antes de ADJETIVOS cuando hay exceso negativo. La estructura 'too hot to drink' muestra que el exceso impide la acción. En español 'demasiado caliente para' también expresa esta imposibilidad. La palabra 'too' siempre implica problema, a diferencia de 'very' que solo intensifica."
      },
      {
        id: "enough_too_2",
        question: "She isn't tall _____ to reach the top shelf easily.",
        translation: "Ella no es lo suficientemente alta para alcanzar el estante superior fácilmente.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Usamos 'enough' (suficiente) DESPUÉS de adjetivos. La estructura es 'tall enough to reach'. En español 'suficientemente alta para' pone 'suficientemente' antes del adjetivo. Esta diferencia de posición es importante: 'enough' siempre va DESPUÉS en inglés cuando modifica adjetivos o adverbios."
      },
      {
        id: "enough_too_3",
        question: "We don't have _____ time to finish all this work today.",
        translation: "No tenemos suficiente tiempo para terminar todo este trabajo hoy.",
        options: ["enough", "too", "many", "much"],
        correct: "enough",
        explanation: "Con SUSTANTIVOS 'enough' va ANTES: 'enough time'. Es diferente de su posición con adjetivos donde va después. En español 'suficiente tiempo' también va antes del sustantivo. Esta falta de tiempo suficiente es queja laboral común que expresa sobrecarga de trabajo y plazos poco realistas."
      },
      {
        id: "enough_too_4",
        question: "The music is _____ loud - I can't concentrate on studying.",
        translation: "La música está demasiado alta - no puedo concentrarme en estudiar.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "Usamos 'too loud' cuando el volumen excesivo causa problema (no poder concentrarse). 'Too' siempre implica consecuencia negativa. En español 'demasiado alta' también indica exceso problemático. Esta situación de ruido que impide estudio es frustración común que requiere pedir reducción de volumen."
      },
      {
        id: "enough_too_5",
        question: "Are you strong _____ to lift this heavy box alone?",
        translation: "¿Eres lo suficientemente fuerte para levantar esta caja pesada solo?",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Pregunta sobre capacidad usa 'strong enough to lift'. El 'enough' va después del adjetivo 'strong'. La estructura con infinitivo 'to lift' expresa el objetivo. En español '¿suficientemente fuerte para?' también pregunta capacidad. Esta consulta antes de intentar levantar algo pesado muestra preocupación razonable por evitar lesiones."
      },
      {
        id: "enough_too_6",
        question: "He has _____ money to buy a new car this month.",
        translation: "Él tiene suficiente dinero para comprar un auto nuevo este mes.",
        options: ["enough", "too", "many", "much"],
        correct: "enough",
        explanation: "Con sustantivo 'money' usamos 'enough' ANTES: 'enough money'. La estructura con infinitivo 'to buy' muestra el propósito. En español 'suficiente dinero para' también va antes del sustantivo. Esta capacidad financiera de hacer compra significativa muestra ahorro exitoso o buenos ingresos."
      },
      {
        id: "enough_too_7",
        question: "This shirt is _____ small for me - I need a larger size.",
        translation: "Esta camisa está demasiado pequeña para mí - necesito talla más grande.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "El exceso negativo (demasiado pequeña) que impide uso se expresa con 'too small'. La consecuencia es necesitar talla diferente. En español 'demasiado pequeña' también indica que no sirve. Esta experiencia de probarse ropa que no queda bien es común en compras y requiere intercambio por talla correcta."
      },
      {
        id: "enough_too_8",
        question: "I don't earn _____ money to travel abroad frequently.",
        translation: "No gano suficiente dinero para viajar al extranjero frecuentemente.",
        options: ["enough", "too", "many", "much"],
        correct: "enough",
        explanation: "En negativo 'not enough money' expresa insuficiencia. Va antes del sustantivo 'money'. El infinitivo 'to travel' muestra lo que no es posible. En español 'no gano suficiente' también lamenta limitación económica. Esta restricción financiera común limita opciones de viaje internacional que muchos desearían tener."
      },
      {
        id: "enough_too_9",
        question: "She's _____ tired to go out tonight after working all day.",
        translation: "Ella está demasiado cansada para salir esta noche después de trabajar todo el día.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "El cansancio excesivo que impide actividad social se expresa con 'too tired'. La explicación 'after working all day' justifica este agotamiento. En español 'demasiado cansada para' también muestra que el cansancio es barrera. Esta elección razonable de descanso sobre socialización reconoce límites físicos."
      },
      {
        id: "enough_too_10",
        question: "Do we have _____ chairs for all the guests arriving?",
        translation: "¿Tenemos suficientes sillas para todos los invitados que llegan?",
        options: ["enough", "too", "many", "much"],
        correct: "enough",
        explanation: "Con sustantivo contable plural 'chairs' usamos 'enough' antes: 'enough chairs'. Esta pregunta práctica de preparación de evento muestra preocupación por comodidad de invitados. En español '¿suficientes sillas?' también va antes. Asegurar asientos adecuados es consideración básica de hospitalidad."
      },
      {
        id: "enough_too_11",
        question: "The soup isn't hot _____ - could you heat it more?",
        translation: "La sopa no está lo suficientemente caliente - ¿podrías calentarla más?",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "En negativo 'not hot enough' expresa insuficiencia de temperatura. Va después del adjetivo 'hot'. La petición cortés de recalentar es razonable. En español 'no está suficientemente caliente' también marca deficiencia. Esta queja educada sobre temperatura inadecuada de comida es válida en restaurantes."
      },
      {
        id: "enough_too_12",
        question: "He drove _____ fast and got a speeding ticket.",
        translation: "Él manejó demasiado rápido y recibió una multa por velocidad.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "Cuando 'too' va con ADVERBIO (fast) también significa exceso problemático. Va antes del adverbio. La consecuencia negativa (multa) valida el uso de 'too'. En español 'demasiado rápido' también precede al adverbio. Esta violación de límite de velocidad tuvo consecuencia financiera que pudo evitarse."
      },
      {
        id: "enough_too_13",
        question: "I didn't study _____ for the exam and failed it.",
        translation: "No estudié lo suficiente para el examen y lo reprobé.",
        options: ["enough", "too", "many", "much"],
        correct: "enough",
        explanation: "Cuando 'enough' modifica VERBO va DESPUÉS: 'study enough'. Esta insuficiencia de estudio resultó en fracaso. En español 'no estudié suficiente' también reconoce esfuerzo inadecuado. Esta admisión honesta de preparación insuficiente conecta directamente el poco estudio con el mal resultado."
      },
      {
        id: "enough_too_14",
        question: "There are _____ many people in this small room already.",
        translation: "Ya hay demasiadas personas en este cuarto pequeño.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "Con cuantificadores como 'many' usamos 'too' antes: 'too many people'. Indica exceso de cantidad. En español 'demasiadas personas' también expresa sobrecupo. Esta situación de espacio sobrepoblado crea incomodidad física y puede ser preocupación de seguridad o simplemente claustrofóbica."
      },
      {
        id: "enough_too_15",
        question: "She's old _____ to make her own decisions independently.",
        translation: "Ella es lo suficientemente mayor para tomar sus propias decisiones independientemente.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "La madurez suficiente se expresa con 'old enough to make'. El 'enough' después del adjetivo permite el infinitivo de capacidad. En español 'suficientemente mayor para' también marca esta autonomía. Esta declaración reconoce y respeta la capacidad de auto-determinación que viene con la madurez."
      }
    ]
  },

  some_any_no: {
    name: "Some, Any, No",
    description: "Cuantificadores en afirmativo, negativo e interrogativo",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "some_any_1",
        question: "I have _____ good news to share with everyone!",
        translation: "Tengo buenas noticias para compartir con todos.",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "En oraciones AFIRMATIVAS usamos 'some' con incontables (news) o contables plurales. 'Some' es indefinido positivo. En español 'buenas noticias' no siempre requiere cuantificador explícito. Esta introducción emocionante de noticias positivas crea anticipación y deseo de saber qué información alegre se compartirá."
      },
      {
        id: "some_any_2",
        question: "Do you have _____ questions about the assignment?",
        translation: "¿Tienes algunas preguntas sobre la tarea?",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "En PREGUNTAS generalmente usamos 'any'. Es neutral, no implica si esperamos respuesta positiva o negativa. En español 'algunas preguntas' o '¿tienes preguntas?' son comunes. Esta pregunta abierta del profesor invita a estudiantes a expresar confusiones sin presión, creando ambiente seguro para admitir dudas."
      },
      {
        id: "some_any_3",
        question: "There isn't _____ milk left in the refrigerator.",
        translation: "No queda leche en el refrigerador.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "En oraciones NEGATIVAS con 'not' usamos 'any'. La estructura 'isn't any' es negación estándar. También podríamos decir 'there is no milk' sin 'not'. En español 'no queda leche' o 'no hay leche' son directos. Esta ausencia de producto básico requiere viaje al supermercado."
      },
      {
        id: "some_any_4",
        question: "Would you like _____ coffee or tea right now?",
        translation: "¿Quisieras algo de café o té ahora mismo?",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "En OFRECIMIENTOS corteses usamos 'some' en preguntas, no 'any'. Esto sugiere expectativa positiva de aceptación. En español '¿quisieras café?' puede omitir cuantificador. Esta oferta hospitalaria de bebida caliente es gesto común de bienvenida que muestra consideración por comodidad del visitante."
      },
      {
        id: "some_any_5",
        question: "He doesn't have _____ friends in this new city yet.",
        translation: "Él no tiene ningún amigo en esta ciudad nueva todavía.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "Negativo 'doesn't have any' expresa ausencia completa. La palabra 'yet' sugiere que es temporal y cambiará. En español 'no tiene ningún amigo' o 'no tiene amigos' son equivalentes. Esta soledad inicial al mudarse a ciudad nueva es desafío común que requiere tiempo y esfuerzo para construir círculo social."
      },
      {
        id: "some_any_6",
        question: "There are _____ cookies left if you want one.",
        translation: "Quedan algunas galletas si quieres una.",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "Afirmativo 'there are some' indica existencia de cantidad indefinida positiva. La oferta condicional 'if you want' es hospitalaria. En español 'quedan algunas' también es afirmativo. Esta generosidad de compartir las últimas galletas muestra voluntad de dividir recursos limitados con otros."
      },
      {
        id: "some_any_7",
        question: "I don't need _____ help - I can do it myself, thanks.",
        translation: "No necesito ninguna ayuda - puedo hacerlo yo mismo, gracias.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "Negativo 'don't need any' rechaza ayuda. Es declaración de independencia cortés. El 'thanks' suaviza el rechazo. En español 'no necesito ninguna ayuda' también es negativo. Esta afirmación de auto-suficiencia muestra confianza en habilidades propias aunque debe comunicarse con apreciación para no ofender."
      },
      {
        id: "some_any_8",
        question: "Can I borrow _____ money until next Friday's payday?",
        translation: "¿Puedo pedir prestado algo de dinero hasta el próximo viernes día de pago?",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "En PETICIONES corteses usamos 'some' aunque sea pregunta. Esto suena más hopeful y educado que 'any'. La fecha específica de devolución hace la petición más seria. En español '¿algo de dinero?' también usa cantidad indefinida. Esta solicitud financiera a amigo o familiar requiere humildad y confianza mutua."
      },
      {
        id: "some_any_9",
        question: "There's _____ point in arguing about this anymore.",
        translation: "No tiene sentido discutir sobre esto ya.",
        options: ["no", "any", "some", "none"],
        correct: "no",
        explanation: "Usamos 'no' directamente antes de sustantivo para negación fuerte: 'no point'. Es más enfático que 'not any point'. En español 'no tiene sentido' también es negación directa. Esta declaración de futilidad sugiere que el debate se ha vuelto improductivo y es momento de dejar el tema."
      },
      {
        id: "some_any_10",
        question: "Have you seen _____ of my books around here?",
        translation: "¿Has visto algunos de mis libros por aquí?",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "En pregunta neutral sobre objetos perdidos usamos 'any'. Preguntamos sin expectativa específica de respuesta positiva. En español '¿algunos de mis libros?' o '¿mis libros?' son comunes. Esta búsqueda de libros extraviados es situación doméstica frecuente que requiere ayuda de otros que pudieron verlos."
      },
      {
        id: "some_any_11",
        question: "She made _____ mistakes on the test - it was perfect!",
        translation: "Ella no cometió ningún error en el examen - ¡estuvo perfecto!",
        options: ["no", "any", "some", "not"],
        correct: "no",
        explanation: "Usamos 'no mistakes' para negación directa sin necesitar 'not'. Es forma enfática de cero errores. En español 'ningún error' o 'no cometió errores' también celebran perfección. Este logro de examen sin errores merece reconocimiento especial y celebración del esfuerzo y conocimiento demostrado."
      },
      {
        id: "some_any_12",
        question: "Would you like _____ more dessert after dinner?",
        translation: "¿Quisieras algo más de postre después de la cena?",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "Ofrecimiento cortés usa 'some more' aunque sea pregunta. 'More' añade idea de adicional. Esta oferta generosa de segunda porción muestra hospitalidad abundante. En español '¿algo más de postre?' también ofrece gentilmente. El momento después de la cena es tradicional para postres y conversación relajada."
      },
      {
        id: "some_any_13",
        question: "I haven't received _____ emails from her recently.",
        translation: "No he recibido ningún email de ella recientemente.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "Negativo con presente perfecto 'haven't received any' expresa ausencia de comunicación. La palabra 'recently' marca período que continúa hasta ahora. En español 'no he recibido ningún email' también usa negación con perfecto. Esta falta de contacto reciente puede ser preocupante o simplemente observación neutral."
      },
      {
        id: "some_any_14",
        question: "There's _____ sugar in the container - we need to buy more.",
        translation: "No hay azúcar en el recipiente - necesitamos comprar más.",
        options: ["no", "any", "some", "not"],
        correct: "no",
        explanation: "Usamos 'no sugar' para indicar ausencia completa sin usar 'not'. Es negación directa y clara. La consecuencia inmediata es necesidad de comprar. En español 'no hay azúcar' también es directo. Esta depleción de producto básico de cocina requiere añadirlo a lista de compras inmediatamente."
      },
      {
        id: "some_any_15",
        question: "Could you give me _____ advice about learning English?",
        translation: "¿Podrías darme algún consejo sobre aprender inglés?",
        options: ["some", "any", "no", "a"],
        correct: "some",
        explanation: "Petición cortés de consejo usa 'some advice'. Recordar que 'advice' es INCONTABLE, nunca 'advices'. Esta solicitud de orientación muestra humildad y reconocimiento de que otros tienen experiencia valiosa para compartir. En español 'algún consejo' también pide sabiduría sobre proceso de aprendizaje."
      }
    ]
  },

  possessive_forms: {
    name: "Formas Posesivas",
    description: "My vs mine, 's, of - diferentes estructuras de posesión",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "poss_1",
        question: "This is _____ book - I bought it yesterday.",
        translation: "Este es mi libro - lo compré ayer.",
        options: ["my", "mine", "me", "I"],
        correct: "my",
        explanation: "Usamos 'my' (posesivo adjetivo) ANTES de sustantivos. Va directamente antes de 'book'. En español 'mi libro' también va antes del sustantivo. Esta es distinción crucial: 'my' siempre necesita sustantivo después, mientras 'mine' va solo. La compra reciente establece la propiedad nueva del objeto."
      },
      {
        id: "poss_2",
        question: "That pen is not yours - it's _____.",
        translation: "Esa pluma no es tuya - es mía.",
        options: ["mine", "my", "me", "I"],
        correct: "mine",
        explanation: "Usamos 'mine' (pronombre posesivo) cuando NO hay sustantivo después. Reemplaza 'my pen'. En español 'es mía' también funciona solo. Esta corrección sobre propiedad de objeto común establece límites claros sobre pertenencias en espacios compartidos como oficinas o escuelas."
      },
      {
        id: "poss_3",
        question: "The _____ car is parked in the garage.",
        translation: "El auto de mi padre está estacionado en el garaje.",
        options: ["father's", "fathers", "father", "fathers'"],
        correct: "father's",
        explanation: "Para posesión con nombres propios o personas usamos APÓSTROFO + S: 'father's car'. El apóstrofo va ANTES de la 's' con singular. En español 'el auto de mi padre' usa preposición 'de'. Esta estructura posesiva inglesa es más compacta que la construcción española con preposición."
      },
      {
        id: "poss_4",
        question: "Is this jacket _____ or your brother's?",
        translation: "¿Esta chaqueta es tuya o de tu hermano?",
        options: ["yours", "your", "you", "you're"],
        correct: "yours",
        explanation: "En comparación sin sustantivo después usamos pronombre posesivo 'yours'. Lo comparamos con 'your brother's' (que sí tiene apóstrofo). En español '¿es tuya?' también funciona solo. Esta pregunta de clarificación sobre propiedad entre hermanos es común cuando objetos similares se confunden."
      },
      {
        id: "poss_5",
        question: "The _____ toys are scattered all over the living room.",
        translation: "Los juguetes de los niños están dispersos por toda la sala.",
        options: ["children's", "childrens", "childrens'", "children"],
        correct: "children's",
        explanation: "El plural irregular 'children' (no termina en 's') añade apóstrofo + S: 'children's toys'. No es 'childrens'' porque 'children' ya es plural. En español 'los juguetes de los niños' usa preposición. Esta escena de juguetes regados es realidad común en hogares con niños pequeños."
      },
      {
        id: "poss_6",
        question: "These shoes are _____- she bought them last week.",
        translation: "Estos zapatos son de ella - los compró la semana pasada.",
        options: ["hers", "her", "she", "she's"],
        correct: "hers",
        explanation: "Pronombre posesivo femenino sin sustantivo es 'hers'. No decimos 'her' solo porque necesitaría sustantivo después. En español 'son de ella' usa preposición. La compra reciente confirma la propiedad nueva. Esta forma permite identificar dueño de objetos sin repetir el nombre del objeto."
      },
      {
        id: "poss_7",
        question: "The _____ decision will affect everyone in the company.",
        translation: "La decisión del gerente afectará a todos en la compañía.",
        options: ["manager's", "managers", "manager", "managers'"],
        correct: "manager's",
        explanation: "Posesivo singular con persona: 'manager's decision'. El apóstrofo va ANTES de la 's'. En español 'la decisión del gerente' usa artículo contracto 'del'. Esta decisión importante de liderazgo tiene impacto colectivo, por eso todos están atentos a qué decidirá la persona en poder."
      },
      {
        id: "poss_8",
        question: "All the _____ uniforms need to be washed tonight.",
        translation: "Todos los uniformes de los jugadores necesitan lavarse esta noche.",
        options: ["players'", "player's", "players", "player"],
        correct: "players'",
        explanation: "Para plural regular que termina en 's' solo añadimos APÓSTROFO al final: 'players'' (no 's). Esto indica que hay múltiples jugadores. En español 'los uniformes de los jugadores' usa 'de los'. Esta tarea de lavandería colectiva antes del próximo juego es parte de preparación del equipo."
      },
      {
        id: "poss_9",
        question: "This office is _____, that one is _____ neighbor's.",
        translation: "Esta oficina es mía, esa es de mi vecino.",
        options: ["mine / my", "my / mine", "mine / mine", "my / my"],
        correct: "mine / my",
        explanation: "Primera parte usa pronombre 'mine' (solo), segunda parte usa adjetivo 'my' antes de 'neighbor's'. Esta combinación muestra ambos usos en una oración. En español 'es mía' (pronombre) y 'de mi vecino' (adjetivo posesivo). Esta descripción de espacios de oficina adyacentes establece territorios de trabajo claros."
      },
      {
        id: "poss_10",
        question: "The roof _____ the house needs urgent repairs.",
        translation: "El techo de la casa necesita reparaciones urgentes.",
        options: ["of", "from", "in", "at"],
        correct: "of",
        explanation: "Para objetos inanimados a veces usamos 'of' en lugar de apóstrofo: 'roof of the house' (no 'house's roof' que suena extraño). En español 'el techo de la casa' también usa 'de'. Con edificios y partes de cosas, la construcción con 'of' es más natural que el posesivo con apóstrofo."
      },
      {
        id: "poss_11",
        question: "Whose turn is it? It's _____ turn now.",
        translation: "¿De quién es el turno? Es mi turno ahora.",
        options: ["my", "mine", "me", "I"],
        correct: "my",
        explanation: "Antes de sustantivo 'turn' usamos adjetivo posesivo 'my'. Aunque parezca que podría ser 'mine', necesitamos 'my' porque sigue el sustantivo. En español 'es mi turno' también usa posesivo adjetivo. Esta declaración en juegos o actividades establece que ahora es el momento de esta persona para participar."
      },
      {
        id: "poss_12",
        question: "All of _____ students passed the final exam successfully.",
        translation: "Todos sus estudiantes pasaron el examen final exitosamente.",
        options: ["his", "he's", "him", "he"],
        correct: "his",
        explanation: "El posesivo adjetivo masculino 'his' va antes del sustantivo 'students'. No confundir con contracción 'he's' (he is). En español 'sus estudiantes' también va antes. Este éxito colectivo de la clase refleja tanto esfuerzo estudiantil como calidad de enseñanza del profesor."
      },
      {
        id: "poss_13",
        question: "The _____ house is the one with the red door.",
        translation: "La casa de los Smith es la que tiene la puerta roja.",
        options: ["Smiths'", "Smith's", "Smiths", "Smith"],
        correct: "Smiths'",
        explanation: "Para apellidos plurales (la familia Smith) añadimos solo apóstrofo: 'Smiths'' porque ya termina en 's'. En español 'la casa de los Smith' usa preposición. La puerta roja es característica distintiva útil para dar direcciones o identificar la propiedad específica entre casas similares."
      },
      {
        id: "poss_14",
        question: "That beautiful voice is _____- she's a professional singer.",
        translation: "Esa hermosa voz es de ella - es cantante profesional.",
        options: ["hers", "her", "she", "she's"],
        correct: "hers",
        explanation: "Pronombre posesivo 'hers' funciona solo sin sustantivo después. La explicación sobre ser cantante profesional valida la calidad excepcional de su voz. En español 'es de ella' usa preposición. Esta conexión entre voz hermosa y profesión musical es lógica y muestra que su talento natural se convirtió en carrera."
      },
      {
        id: "poss_15",
        question: "I can't find _____ glasses anywhere in the house!",
        translation: "¡No puedo encontrar mis lentes en ningún lugar de la casa!",
        options: ["my", "mine", "me", "I"],
        correct: "my",
        explanation: "Antes de sustantivo 'glasses' usamos adjetivo posesivo 'my'. La frustración expresada con exclamación es común cuando perdemos objetos necesarios. En español 'mis lentes' también usa posesivo adjetivo. Esta búsqueda urgente de anteojos es especialmente estresante para quienes los necesitan para ver claramente."
      }
    ]
  }
};

export default part13Categories;