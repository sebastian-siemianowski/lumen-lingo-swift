/**
 * SPANISH → ENGLISH GRAMMAR - PART 26
 * 4 categories, 15 questions each
 */

import { Waves, Thermometer, Calculator, Key } from "lucide-react";

export const part26Categories = {
  too_enough_very: {
    name: "Too, Enough, Very",
    description: "Intensificadores - diferencias entre exceso, suficiencia y grado",
    icon: Thermometer,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "intens_1",
        question: "This coffee is _____ hot - I can't drink it yet.",
        translation: "Este café está demasiado caliente - no puedo tomarlo todavía.",
        options: ["too", "very", "enough", "so"],
        correct: "too",
        explanation: "Usamos 'too' (demasiado) cuando hay EXCESO que causa PROBLEMA: 'too hot to drink'. Siempre implica consecuencia negativa. En español 'demasiado caliente' también indica problema. La diferencia crucial: 'very' solo intensifica sin problema, 'too' significa que exceso impide algo."
      },
      {
        id: "intens_2",
        question: "She's _____ tall to reach the shelf without help.",
        translation: "Ella no es suficientemente alta para alcanzar el estante sin ayuda.",
        options: ["not / enough", "too", "very", "so"],
        correct: "not / enough",
        explanation: "Para INSUFICIENCIA usamos 'not tall enough': falta altura necesaria. 'Enough' va DESPUÉS de adjetivos. En español 'no es suficientemente alta' pone 'suficientemente' antes. Esta limitación física requiere usar escalera o pedir ayuda a alguien más alto para acceder a objetos almacenados arriba."
      },
      {
        id: "intens_3",
        question: "The movie was _____ interesting and entertaining throughout.",
        translation: "La película fue muy interesante y entretenida a lo largo.",
        options: ["very", "too", "enough", "so"],
        correct: "very",
        explanation: "Usamos 'very' (muy) para INTENSIFICAR sin implicar problema: solo hace el adjetivo más fuerte. En español 'muy interesante' también intensifica. La diferencia: 'very' es neutral o positivo, 'too' implica exceso negativo. Esta película muy buena mantuvo atención durante toda su duración."
      },
      {
        id: "intens_4",
        question: "I don't have _____ money to buy that expensive car.",
        translation: "No tengo suficiente dinero para comprar ese auto caro.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Con SUSTANTIVOS 'enough' va ANTES: 'enough money'. Para adjetivos va después. En español 'suficiente dinero' también va antes del sustantivo. Esta limitación financiera para compra deseada es realidad común donde aspiraciones superan recursos actuales disponibles."
      },
      {
        id: "intens_5",
        question: "This bag is _____ heavy for me to carry alone.",
        translation: "Esta bolsa está demasiado pesada para que yo la cargue solo.",
        options: ["too", "very", "enough", "so"],
        correct: "too",
        explanation: "Para EXCESO de peso que impide acción usamos 'too heavy to carry': causa imposibilidad. En español 'demasiado pesada' también excede capacidad. Esta admisión de límites físicos es sensata, reconociendo que intentar cargar algo muy pesado solo puede causar lesión."
      },
      {
        id: "intens_6",
        question: "She's _____ talented - she can sing, dance, and act!",
        translation: "Ella es muy talentosa - ¡puede cantar, bailar y actuar!",
        options: ["very", "too", "enough", "so"],
        correct: "very",
        explanation: "Para ELOGIO intenso sin problema usamos 'very talented': pura admiración. En español 'muy talentosa' también elogia. La lista de múltiples talentos (cantar, bailar, actuar) valida que el intensificador 'very' está justificado por versatilidad artística excepcional."
      },
      {
        id: "intens_7",
        question: "Are you strong _____ to help me move this furniture?",
        translation: "¿Eres suficientemente fuerte para ayudarme a mover este mueble?",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Para preguntar sobre SUFICIENCIA de capacidad usamos 'strong enough to help': ¿tienes fuerza necesaria? En español '¿suficientemente fuerte?' también pregunta capacidad. Esta consulta antes de pedir ayuda física es cortés, verificando que persona puede realmente asistir sin riesgo de lesión."
      },
      {
        id: "intens_8",
        question: "The music is _____ loud - my ears hurt from it!",
        translation: "La música está demasiado alta - ¡me duelen los oídos!",
        options: ["too", "very", "enough", "so"],
        correct: "too",
        explanation: "Para VOLUMEN excesivo que causa dolor usamos 'too loud': el problema físico valida el 'too'. En español 'demasiado alta' también causa malestar. Esta queja legítima sobre nivel de sonido dañino requiere reducción inmediata para proteger audición de todos presentes."
      },
      {
        id: "intens_9",
        question: "I have _____ time to finish everything before leaving.",
        translation: "Tengo suficiente tiempo para terminar todo antes de irme.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Para SUFICIENCIA de tiempo usamos 'enough time': hay cantidad necesaria. En español 'suficiente tiempo' también indica adecuación. Esta tranquilidad de tener margen temporal suficiente elimina estrés de apurarse, permitiendo trabajar a ritmo razonable sin ansiedad de deadline inminente."
      },
      {
        id: "intens_10",
        question: "This soup isn't warm _____ - please heat it more.",
        translation: "Esta sopa no está suficientemente caliente - por favor caliéntala más.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "En NEGATIVO 'not warm enough' indica insuficiencia de temperatura. En español 'no está suficientemente caliente' también pide más calor. Esta queja sobre sopa tibia es válida en restaurante donde platos calientes deben servirse a temperatura que realce sabor y experiencia."
      },
      {
        id: "intens_11",
        question: "He's _____ smart but needs to study more consistently.",
        translation: "Él es muy inteligente pero necesita estudiar más consistentemente.",
        options: ["very", "too", "enough", "so"],
        correct: "very",
        explanation: "Para reconocer INTELIGENCIA alta sin problema usamos 'very smart': es elogio puro. En español 'muy inteligente' también reconoce. El 'but' después introduce crítica separada sobre falta de esfuerzo, mostrando que inteligencia sola no garantiza éxito sin trabajo."
      },
      {
        id: "intens_12",
        question: "There isn't _____ space in this room for everyone.",
        translation: "No hay suficiente espacio en este cuarto para todos.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Para INSUFICIENCIA de espacio usamos 'not enough space': falta capacidad. En español 'no hay suficiente espacio' también lamenta. Esta situación de sobrecupo requiere encontrar salón más grande o reducir número de asistentes para acomodar a todos cómodamente."
      },
      {
        id: "intens_13",
        question: "She drives _____ carefully to avoid any accidents always.",
        translation: "Ella maneja muy cuidadosamente para evitar accidentes siempre.",
        options: ["very", "too", "enough", "so"],
        correct: "very",
        explanation: "Para ELOGIAR conducción segura usamos 'very carefully': intensifica sin problema. En español 'muy cuidadosamente' también intensifica adverbio. Esta precaución extrema al volante probablemente significa que nunca ha tenido accidente, mostrando que prudencia excesiva es mejor que riesgo."
      },
      {
        id: "intens_14",
        question: "I'm _____ tired to go out tonight after working.",
        translation: "Estoy demasiado cansado para salir esta noche después de trabajar.",
        options: ["too", "very", "enough", "so"],
        correct: "too",
        explanation: "Para FATIGA que impide actividad social usamos 'too tired to go out': cansancio excesivo causa cancelación. En español 'demasiado cansado para' también rechaza. Esta decisión razonable de priorizar descanso sobre diversión reconoce que cuerpo necesita recuperación después de día agotador."
      },
      {
        id: "intens_15",
        question: "This explanation is clear _____ for everyone to understand easily.",
        translation: "Esta explicación es suficientemente clara para que todos entiendan fácilmente.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Para SUFICIENCIA de claridad usamos 'clear enough to understand': tiene nivel de claridad necesario. En español 'suficientemente clara' también indica adecuación. Esta accesibilidad de explicación asegura que incluso quienes tienen dificultad con el tema pueden comprender, cumpliendo propósito comunicativo."
      }
    ]
  },

  modals_of_possibility: {
    name: "Modales de Posibilidad",
    description: "May, might, could - diferentes niveles de probabilidad",
    icon: Waves,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "mod_poss_1",
        question: "It _____ rain tomorrow according to the forecast.",
        translation: "Podría llover mañana según el pronóstico.",
        options: ["might", "must", "should", "will"],
        correct: "might",
        explanation: "Para POSIBILIDAD futura (no certeza) usamos 'might' o 'may' o 'could': 'it might rain'. Es 50% de probabilidad aproximadamente. En español 'podría llover' también es incierto. Esta predicción tentativa de lluvia sugiere llevar paraguas por precaución aunque no es seguro que lloverá."
      },
      {
        id: "mod_poss_2",
        question: "She _____ be at home now - I'm not completely sure.",
        translation: "Ella podría estar en casa ahora - no estoy completamente seguro.",
        options: ["may", "must", "should", "will"],
        correct: "may",
        explanation: "Para ESPECULACIÓN sobre ubicación actual usamos 'may' o 'might': posibilidad sin confirmación. En español 'podría estar' también especula. Esta incertidumbre sobre paradero sugiere que no has verificado directamente, solo estás haciendo conjetura basada en patrones usuales o información limitada."
      },
      {
        id: "mod_poss_3",
        question: "He _____ come to the party if he finishes work early.",
        translation: "Él podría venir a la fiesta si termina el trabajo temprano.",
        options: ["might", "must", "should", "will"],
        correct: "might",
        explanation: "Para POSIBILIDAD condicional usamos 'might': su asistencia depende de terminar trabajo. En español 'podría venir si' también condiciona. Esta respuesta tentativa a invitación reconoce que trabajo impredecible puede interferir con planes sociales, manteniendo opciones abiertas."
      },
      {
        id: "mod_poss_4",
        question: "I _____ go to the gym later, but I'm still deciding.",
        translation: "Podría ir al gimnasio más tarde, pero aún estoy decidiendo.",
        options: ["may", "must", "should", "will"],
        correct: "may",
        explanation: "Para PLANES indecisos usamos 'may' o 'might': no hay compromiso firme todavía. En español 'podría ir' también es tentativo. Esta falta de decisión sobre ejercicio puede reflejar conflicto interno entre motivación de fitness y tentación de relajarse en casa."
      },
      {
        id: "mod_poss_5",
        question: "They _____ have forgotten about our appointment today entirely.",
        translation: "Ellos podrían haber olvidado nuestra cita hoy completamente.",
        options: ["might", "must", "should", "will"],
        correct: "might",
        explanation: "Para POSIBILIDAD sobre pasado usamos 'might have' + participio: 'might have forgotten'. Es especulación sobre qué ocurrió. En español 'podrían haber olvidado' también especula pasado. Su ausencia genera esta teoría como explicación posible aunque no confirmada de por qué no aparecieron."
      },
      {
        id: "mod_poss_6",
        question: "You _____ want to bring a jacket - it's cold outside.",
        translation: "Podrías querer traer una chaqueta - hace frío afuera.",
        options: ["might", "must", "will", "can"],
        correct: "might",
        explanation: "Para SUGERENCIA suave basada en posibilidad usamos 'might want to': consejo no insistente. En español 'podrías querer' también sugiere gentilmente. Esta recomendación sobre ropa adicional es cuidado por bienestar de otro sin sonar mandón o controlador."
      },
      {
        id: "mod_poss_7",
        question: "She _____ be sleeping now - her lights are off.",
        translation: "Ella podría estar durmiendo ahora - sus luces están apagadas.",
        options: ["could", "must", "should", "will"],
        correct: "could",
        explanation: "Para POSIBILIDAD basada en evidencia usamos 'could' o 'might': 'could be sleeping'. Luces apagadas sugieren pero no prueban. En español 'podría estar durmiendo' también deduce. Esta observación de luces apagadas como indicador de sueño es deducción razonable pero no certeza absoluta."
      },
      {
        id: "mod_poss_8",
        question: "I _____ have left my keys in the car earlier.",
        translation: "Podría haber dejado mis llaves en el auto más temprano.",
        options: ["may", "must", "should", "will"],
        correct: "may",
        explanation: "Para POSIBILIDAD sobre dónde dejaste algo usamos 'may have left': no estás seguro. En español 'podría haber dejado' también especula sobre pasado. Esta incertidumbre sobre ubicación de llaves motiva revisar auto antes de buscar exhaustivamente en otros lugares."
      },
      {
        id: "mod_poss_9",
        question: "It _____ snow tonight if the temperature drops further.",
        translation: "Podría nevar esta noche si la temperatura baja más.",
        options: ["might", "must", "should", "will"],
        correct: "might",
        explanation: "Para POSIBILIDAD meteorológica condicional usamos 'might': depende de temperatura. En español 'podría nevar si' también condiciona. Esta predicción de nieve contingente en descenso adicional de temperatura ayuda a prepararse para posible clima invernal llevando ropa apropiada."
      },
      {
        id: "mod_poss_10",
        question: "We _____ need to hire more people for this project.",
        translation: "Podríamos necesitar contratar más gente para este proyecto.",
        options: ["may", "must", "will", "can"],
        correct: "may",
        explanation: "Para POSIBLE necesidad futura usamos 'may need': no es decisión firme todavía. En español 'podríamos necesitar' también es tentativo. Esta consideración de expansión de equipo sugiere que alcance de proyecto puede ser mayor de lo inicialmente anticipado."
      },
      {
        id: "mod_poss_11",
        question: "He _____ not remember me - it's been 10 years since we met.",
        translation: "Él podría no recordarme - han pasado 10 años desde que nos vimos.",
        options: ["might", "must", "should", "will"],
        correct: "might",
        explanation: "Para POSIBILIDAD negativa usamos 'might not' o 'may not': quizás no recuerda. En español 'podría no recordarme' también es posible. Esta preocupación realista sobre memoria después de década sin contacto reconoce que personas olvidan, especialmente si encuentro original fue breve."
      },
      {
        id: "mod_poss_12",
        question: "They _____ have arrived already - check if they're here.",
        translation: "Ellos podrían haber llegado ya - verifica si están aquí.",
        options: ["may", "must", "should", "will"],
        correct: "may",
        explanation: "Para POSIBILIDAD de llegada previa usamos 'may have arrived': no estás seguro si ya están. En español 'podrían haber llegado' también especula. Esta sugerencia de verificar físicamente su presencia en lugar de solo asumir muestra que posibilidad existe pero confirmación es necesaria."
      },
      {
        id: "mod_poss_13",
        question: "I _____ take a vacation next month if work allows.",
        translation: "Podría tomar vacaciones el próximo mes si el trabajo lo permite.",
        options: ["might", "must", "will", "can"],
        correct: "might",
        explanation: "Para PLAN tentativo futuro usamos 'might take': no es compromiso firme. En español 'podría tomar' también es condicional. Esta vacación potencial depende de aprobación laboral y carga de trabajo, mostrando que aunque deseo existe, realización está sujeta a circunstancias."
      },
      {
        id: "mod_poss_14",
        question: "She _____ be right about this - she usually is.",
        translation: "Ella podría tener razón sobre esto - usualmente la tiene.",
        options: ["could", "must", "will", "can"],
        correct: "could",
        explanation: "Para POSIBILIDAD basada en historial usamos 'could be right': su track record sugiere probabilidad. En español 'podría tener razón' también especula. Esta admisión tentativa de que probablemente tiene razón se basa en que históricamente sus juicios han sido acertados."
      },
      {
        id: "mod_poss_15",
        question: "You _____ be tired after such a long journey today.",
        translation: "Podrías estar cansado después de un viaje tan largo hoy.",
        options: ["must", "might", "may", "could"],
        correct: "must",
        explanation: "Para DEDUCCIÓN fuerte (casi certeza) usamos 'must be tired': la lógica dice que viaje largo causa cansancio. En español 'debes estar cansado' también deduce. Aunque pregunta es sobre modales de posibilidad, 'must' es deducción lógica más que posibilidad, mostrando alta probabilidad basada en evidencia."
      }
    ]
  },

  countable_uncountable_food: {
    name: "Contables e Incontables - Comida",
    description: "Bread vs loaves, water vs glasses - comida y bebida",
    icon: Calculator,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "food_count_1",
        question: "I need to buy _____ bread for breakfast tomorrow.",
        translation: "Necesito comprar pan para el desayuno de mañana.",
        options: ["some", "a", "breads", "an"],
        correct: "some",
        explanation: "La palabra 'bread' (pan) es INCONTABLE en inglés: usamos 'some bread' no 'a bread'. Para unidad específica decimos 'a loaf of bread'. En español 'pan' también puede ser incontable o 'un pan' contable. Esta diferencia confunde porque en español podemos contar panes pero inglés trata 'bread' como sustancia."
      },
      {
        id: "food_count_2",
        question: "Could you buy _____ _____ of milk at the store?",
        translation: "¿Podrías comprar una botella de leche en la tienda?",
        options: ["a bottle", "some", "milks", "an"],
        correct: "a bottle",
        explanation: "Aunque 'milk' es incontable, para PORCIÓN específica usamos contenedor: 'a bottle of milk'. El contenedor es contable. En español 'una botella de leche' también cuenta recipiente. Esta especificación de botella (no cartón o galón) indica preferencia de presentación o tamaño necesario."
      },
      {
        id: "food_count_3",
        question: "She ate _____ apple for her afternoon snack today.",
        translation: "Ella comió una manzana para su refrigerio de tarde hoy.",
        options: ["an", "some", "apples", "-"],
        correct: "an",
        explanation: "La palabra 'apple' es CONTABLE: 'an apple' (una manzana). Frutas individuales son contables. En español 'una manzana' también es contable. Esta elección de fruta como snack saludable entre comidas muestra hábitos alimenticios nutritivos que muchos nutri cionistas recomiendan."
      },
      {
        id: "food_count_4",
        question: "We need _____ sugar for the recipe we're making.",
        translation: "Necesitamos azúcar para la receta que estamos haciendo.",
        options: ["some", "a", "sugars", "an"],
        correct: "some",
        explanation: "La palabra 'sugar' (azúcar) es INCONTABLE: 'some sugar' no 'a sugar'. Para cantidad específica decimos 'a spoonful of sugar'. En español 'azúcar' también es incontable generalmente. Esta necesidad de endulzante para cocinar es ingrediente común en postres y algunas comidas."
      },
      {
        id: "food_count_5",
        question: "He drinks three _____ of water daily for hydration.",
        translation: "Él toma tres vasos de agua diariamente para hidratación.",
        options: ["glasses", "glass", "waters", "water"],
        correct: "glasses",
        explanation: "Aunque 'water' es incontable, CONTAMOS contenedores: 'three glasses of water'. El plural es en 'glasses'. En español 'tres vasos de agua' también cuenta recipientes. Esta ingesta de agua recomendada médicamente muestra hábito saludable de hidratación constante durante día."
      },
      {
        id: "food_count_6",
        question: "I'd like _____ cheese on my sandwich, please.",
        translation: "Quisiera queso en mi sándwich, por favor.",
        options: ["some", "a", "cheeses", "an"],
        correct: "some",
        explanation: "La palabra 'cheese' (queso) es INCONTABLE como sustancia: 'some cheese'. Para tipo específico 'a cheese' podría significar un tipo de queso. En español 'queso' puede ser contable o incontable según contexto. Esta petición de porción de queso en sándwich es personalización común de orden."
      },
      {
        id: "food_count_7",
        question: "She made _____ _____ of tea for her guests politely.",
        translation: "Ella hizo una tetera de té para sus invitados cortésmente.",
        options: ["a pot", "some", "teas", "an"],
        correct: "a pot",
        explanation: "Aunque 'tea' es incontable, para CANTIDAD grande servida usamos contenedor: 'a pot of tea'. En español 'una tetera de té' también cuenta recipiente. Esta preparación generosa de té suficiente para múltiples invitados muestra hospitalidad planificada que anticipa necesidades de grupo."
      },
      {
        id: "food_count_8",
        question: "There are _____ eggs in the refrigerator currently.",
        translation: "No hay huevos en el refrigerador actualmente.",
        options: ["no", "not", "any", "none"],
        correct: "no",
        explanation: "Para AUSENCIA de contables usamos 'no eggs' o 'not any eggs': ambos niegan existencia. En español 'no hay huevos' también niega. Esta falta de ingrediente básico de desayuno requiere viaje urgente a tienda o cambio de menú matutino a algo que no requiera huevos."
      },
      {
        id: "food_count_9",
        question: "I need _____ _____ of rice for dinner tonight.",
        translation: "Necesito una taza de arroz para la cena de esta noche.",
        options: ["a cup", "some", "rices", "an"],
        correct: "a cup",
        explanation: "Aunque 'rice' es incontable, para MEDIDA de cocina usamos: 'a cup of rice'. En español 'una taza de arroz' también mide. Esta cantidad específica es importante en recetas donde proporciones incorrectas pueden arruinar plato, haciendo medición precisa crucial."
      },
      {
        id: "food_count_10",
        question: "Would you like _____ coffee after this meal?",
        translation: "¿Quisieras café después de esta comida?",
        options: ["some", "a", "coffees", "an"],
        correct: "some",
        explanation: "Para BEBIDA en general 'coffee' es incontable: 'some coffee'. Si hablamos de tazas servidas podríamos decir 'a coffee' coloquialmente. En español 'café' también puede ser ambos. Esta oferta post-comida es cortesía de hospitalidad que permite sobremesa conversacional."
      },
      {
        id: "food_count_11",
        question: "She bought five _____ of bread at the bakery today.",
        translation: "Ella compró cinco panes en la panadería hoy.",
        options: ["loaves", "breads", "bread", "loaf"],
        correct: "loaves",
        explanation: "Para UNIDADES completas de pan usamos 'loaves' (plural de loaf): 'five loaves of bread'. En español 'cinco panes' es simple. Esta compra de múltiples panes sugiere familia grande o que está aprovechando pan fresco de panadería para congelar algunos."
      },
      {
        id: "food_count_12",
        question: "There's _____ butter left in the container - very little.",
        translation: "Queda poca mantequilla en el recipiente - muy poca.",
        options: ["little", "few", "a little", "a few"],
        correct: "little",
        explanation: "Con incontable 'butter' usamos 'little' (poca - negativo): casi no queda. En español 'poca mantequilla' también es escasa. Esta cantidad insuficiente probablemente no alcanzará para cocinar plato que requiere mantequilla generosa, necesitando comprar más o ajustar receta."
      },
      {
        id: "food_count_13",
        question: "I'll have _____ _____ of orange juice, please.",
        translation: "Tomaré un vaso de jugo de naranja, por favor.",
        options: ["a glass", "some", "juices", "an"],
        correct: "a glass",
        explanation: "Para PORCIÓN servida de bebida usamos contenedor: 'a glass of orange juice'. En español 'un vaso de' también especifica porción. Esta orden de bebida matutina nutritiva llena de vitamina C es elección saludable para comenzar día con energía natural."
      },
      {
        id: "food_count_14",
        question: "We don't have _____ meat for the dinner recipe.",
        translation: "No tenemos carne para la receta de cena.",
        options: ["any", "a", "meats", "an"],
        correct: "any",
        explanation: "Para AUSENCIA de incontable 'meat' en negativo usamos 'any': 'don't have any meat'. En español 'no tenemos carne' también niega. Esta falta de proteína principal para cena planeada requiere cambio de menú o compra de último minuto en tienda."
      },
      {
        id: "food_count_15",
        question: "She added _____ _____ of salt to the soup carefully.",
        translation: "Ella añadió una pizca de sal a la sopa cuidadosamente.",
        options: ["a pinch", "some", "salts", "an"],
        correct: "a pinch",
        explanation: "Para CANTIDAD muy pequeña de sal usamos medida específica: 'a pinch of salt' (una pizca). En español 'una pizca de sal' también mide. Esta adición cautelosa de sal muestra que sabe que poco sal realza sabor pero exceso arruina plato, requiriendo mano delicada."
      }
    ]
  },

  some_any_compounds: {
    name: "Compuestos con Some/Any",
    description: "Someone, anything, nowhere - combinaciones de indefinidos",
    icon: Key,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "compound_1",
        question: "_____ is knocking on the door right now loudly.",
        translation: "Alguien está tocando la puerta ahora mismo fuertemente.",
        options: ["Someone", "Anyone", "No one", "Everyone"],
        correct: "Someone",
        explanation: "Para indicar PERSONA no identificada en afirmativo usamos 'someone' (alguien): 'someone is knocking'. En español 'alguien' también es indefinido. Esta presencia desconocida golpeando puerta crea curiosidad sobre quién podría ser, especialmente si no esperas visita en este momento."
      },
      {
        id: "compound_2",
        question: "I don't know _____ about fixing computers at all.",
        translation: "No sé nada sobre arreglar computadoras para nada.",
        options: ["anything", "something", "nothing", "everything"],
        correct: "anything",
        explanation: "En NEGATIVO usamos 'anything' (nada): 'don't know anything' = no sé nada. En español 'no sé nada' usa negación doble. Esta admisión honesta de falta total de conocimiento técnico establece que esta persona necesitará ayuda profesional para cualquier problema de computadora."
      },
      {
        id: "compound_3",
        question: "Is there _____ I can do to help you right now?",
        translation: "¿Hay algo que pueda hacer para ayudarte ahora mismo?",
        options: ["anything", "something", "nothing", "everything"],
        correct: "anything",
        explanation: "En PREGUNTAS generalmente usamos 'anything' (algo): 'Is there anything?' Es abierto y neutral. En español '¿hay algo?' también pregunta. Esta oferta amplia de ayuda sin especificar qué muestra disposición genuina de asistir en lo que sea necesario."
      },
      {
        id: "compound_4",
        question: "_____ came to the meeting - it was completely empty!",
        translation: "¡Nadie vino a la reunión - estaba completamente vacía!",
        options: ["Nobody", "Somebody", "Anybody", "Everybody"],
        correct: "Nobody",
        explanation: "Para indicar AUSENCIA total de personas usamos 'nobody' o 'no one': 'nobody came'. En español 'nadie' también niega presencia. Esta sala de reuniones vacía es situación embarazosa para organizador que puede indicar mala comunicación de horario o falta de interés en tema."
      },
      {
        id: "compound_5",
        question: "Would you like _____ to drink with your meal?",
        translation: "¿Quisieras algo para tomar con tu comida?",
        options: ["something", "anything", "nothing", "everything"],
        correct: "something",
        explanation: "En OFRECIMIENTOS usamos 'something' aunque sea pregunta: 'Would you like something?' Suena más cortés que 'anything'. En español '¿algo para tomar?' también ofrece. Esta hospitalidad de ofrecer bebida con comida es servicio estándar de restaurante o anfitrión atento."
      },
      {
        id: "compound_6",
        question: "I've looked _____ for my keys but can't find them!",
        translation: "¡He buscado en todas partes mis llaves pero no las encuentro!",
        options: ["everywhere", "somewhere", "anywhere", "nowhere"],
        correct: "everywhere",
        explanation: "Para búsqueda EXHAUSTIVA en todos los lugares usamos 'everywhere' (en todas partes): 'looked everywhere'. En español 'en todas partes' también es completo. Esta búsqueda intensiva sin éxito genera frustración creciente sobre dónde podrían estar las llaves perdidas."
      },
      {
        id: "compound_7",
        question: "Did _____ call while I was out this afternoon?",
        translation: "¿Alguien llamó mientras estuve fuera esta tarde?",
        options: ["anyone", "someone", "no one", "everyone"],
        correct: "anyone",
        explanation: "En PREGUNTAS sobre personas usamos 'anyone' (alguien): 'Did anyone call?' Es neutral. En español '¿alguien llamó?' también pregunta. Esta consulta sobre llamadas perdidas durante ausencia verifica si hubo contactos importantes que requieren devolución de llamada."
      },
      {
        id: "compound_8",
        question: "There's _____ wrong with my computer - it won't start!",
        translation: "¡Hay algo mal con mi computadora - no arranca!",
        options: ["something", "anything", "nothing", "everything"],
        correct: "something",
        explanation: "Para indicar PROBLEMA no identificado usamos 'something wrong': algo anda mal. En español 'algo mal' o 'algo anda mal' también señala problema. Esta declaración de mal funcionamiento técnico es inicio de solicitud de ayuda o frustración con tecnología que no coopera."
      },
      {
        id: "compound_9",
        question: "I can't find my glasses _____ in this house today!",
        translation: "¡No puedo encontrar mis lentes en ningún lugar de esta casa hoy!",
        options: ["anywhere", "somewhere", "everywhere", "nowhere"],
        correct: "anywhere",
        explanation: "En NEGATIVO para lugares usamos 'anywhere' (en ningún lugar): 'can't find anywhere' = no encuentro en ningún lado. En español 'en ningún lugar' también niega. Esta desesperación de búsqueda infructuosa de anteojos necesarios para ver es frustración común especialmente para quienes dependen de ellos."
      },
      {
        id: "compound_10",
        question: "_____ knows the answer to this difficult question.",
        translation: "Todos saben la respuesta a esta pregunta difícil.",
        options: ["Everyone", "Someone", "Anyone", "No one"],
        correct: "Everyone",
        explanation: "Para TOTALIDAD de personas usamos 'everyone' (todos): 'everyone knows'. Es singular gramaticalmente. En español 'todos saben' es plural. Esta pregunta que todos pueden responder indica que es conocimiento fundamental o que grupo está bien preparado en este tema."
      },
      {
        id: "compound_11",
        question: "I left my bag _____ at the office - I just forgot!",
        translation: "Dejé mi bolsa en algún lugar de la oficina - ¡simplemente olvidé!",
        options: ["somewhere", "anywhere", "nowhere", "everywhere"],
        correct: "somewhere",
        explanation: "Para LUGAR indefinido pero que SÍ existe usamos 'somewhere' (en algún lugar): 'left somewhere'. Sabes que está en algún lado. En español 'en algún lugar' también es indefinido pero existente. Esta memoria difusa de ubicación requiere búsqueda en oficina para recuperar bolsa olvidada."
      },
      {
        id: "compound_12",
        question: "Is _____ listening to what I'm saying right now?",
        translation: "¿Alguien está escuchando lo que estoy diciendo ahora mismo?",
        options: ["anyone", "someone", "no one", "everyone"],
        correct: "anyone",
        explanation: "Para pregunta sobre ATENCIÓN usamos 'anyone': '¿alguien está escuchando?' En español '¿alguien?' también pregunta. Esta frustración de sentir ignorado en conversación o presentación expresa necesidad de que al menos una persona preste atención a lo que dices."
      },
      {
        id: "compound_13",
        question: "There's _____ to hide - I'll tell you the truth.",
        translation: "No hay nada que ocultar - te diré la verdad.",
        options: ["nothing", "something", "anything", "everything"],
        correct: "nothing",
        explanation: "Para afirmar AUSENCIA total usamos 'nothing to hide': transparencia completa. En español 'nada que ocultar' también es honesto. Esta declaración de apertura total invita a confianza, estableciendo que no hay secretos que puedan causar problemas posteriores."
      },
      {
        id: "compound_14",
        question: "Have you seen my phone _____? I can't remember!",
        translation: "¿Has visto mi teléfono en algún lugar? ¡No recuerdo!",
        options: ["anywhere", "somewhere", "nowhere", "everywhere"],
        correct: "anywhere",
        explanation: "En pregunta sobre ubicación perdida usamos 'anywhere': '¿lo has visto en algún lugar?' En español '¿en algún lugar?' también busca. Esta pregunta desesperada sobre teléfono perdido es urgente en era moderna donde teléfono es esencial para comunicación y organización."
      },
      {
        id: "compound_15",
        question: "_____ wants to volunteer for this task it seems.",
        translation: "Nadie quiere ser voluntario para esta tarea parece.",
        options: ["Nobody", "Somebody", "Anybody", "Everybody"],
        correct: "Nobody",
        explanation: "Para FALTA de voluntarios usamos 'nobody wants': ausencia de interés. En español 'nadie quiere' también rechaza. Esta resistencia colectiva a tarea probablemente indica que es trabajo difícil, aburrido o no recompensado, requiriendo eventualmente asignación forzada o incentivos."
      }
    ]
  }
};

export default part26Categories;