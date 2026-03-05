/**
 * SPANISH → ENGLISH GRAMMAR - PART 31
 * 3 categories, 15 questions each
 */

import { Globe, Award, Sparkles } from "lucide-react";

export const part31Categories = {
  relative_clauses_defining: {
    name: "Cláusulas Relativas Definitorias",
    description: "That, which, who sin comas - información esencial",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "def_rel_1",
        question: "The book _____ I bought yesterday is on the table.",
        translation: "El libro que compré ayer está en la mesa.",
        options: ["that", "which", ",which", ",that"],
        correct: "that",
        explanation: "Para cláusula DEFINITORIA (esencial - identifica CUÁL libro) usamos 'that' o 'which' SIN COMAS. En español 'el libro que compré' tampoco usa comas. Esta información es necesaria para saber de qué libro hablas entre varios posibles, no es detalle extra prescindible."
      },
      {
        id: "def_rel_2",
        question: "People _____ live in glass houses shouldn't throw stones.",
        translation: "La gente que vive en casas de vidrio no debería tirar piedras.",
        options: ["who", ",who", "which", "that"],
        correct: "who",
        explanation: "Para PERSONAS en cláusula definitoria usamos 'who' sin comas: identifica QUÉ gente específicamente. En español 'gente que vive' tampoco usa comas. Este proverbio sobre no criticar cuando tienes defectos similares usa cláusula definitoria para especificar a quiénes aplica el consejo."
      },
      {
        id: "def_rel_3",
        question: "The restaurant _____ we went to last night was expensive.",
        translation: "El restaurante al que fuimos anoche era caro.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Cláusula definitoria SIN COMAS especifica CUÁL restaurante: 'the restaurant that we went to'. En español 'el restaurante al que fuimos' tampoco separa. Esta información es esencial porque sin ella no sabrías de cuál restaurante hablas entre muchos posibles."
      },
      {
        id: "def_rel_4",
        question: "The woman _____ lives next door is very kind always.",
        translation: "La mujer que vive al lado es muy amable siempre.",
        options: ["who", ",who", "which", "that"],
        correct: "who",
        explanation: "Para identificar PERSONA específica usamos 'who' sin comas: 'the woman who lives next door'. En español 'la mujer que vive' tampoco usa comas. Esta cláusula es necesaria para distinguir esta vecina de otras mujeres, haciendo información crítica no opcional."
      },
      {
        id: "def_rel_5",
        question: "I don't like movies _____ have sad endings at all ever.",
        translation: "No me gustan las películas que tienen finales tristes para nada.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Cláusula definitoria limita QUÉ TIPO de películas no gustas: 'movies that have sad endings'. En español 'películas que tienen' tampoco usa comas. Sin esta cláusula la oración sería 'I don't like movies' (no te gustan todas), pero cláusula especifica solo las de finales tristes."
      },
      {
        id: "def_rel_6",
        question: "The car _____ he drives is very old and unreliable now.",
        translation: "El auto que él maneja es muy viejo y poco confiable ahora.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Para identificar CUÁL auto usamos cláusula definitoria sin comas: 'the car that he drives'. En español 'el auto que maneja' tampoco separa. Esta especificación es esencial porque sin ella no sabrías de cuál de sus posibles autos hablas."
      },
      {
        id: "def_rel_7",
        question: "Students _____ don't study regularly often fail exams badly.",
        translation: "Los estudiantes que no estudian regularmente a menudo reprueban exámenes gravemente.",
        options: ["who", ",who", "which", "that"],
        correct: "who",
        explanation: "Cláusula definitoria identifica SUBGRUPO específico de estudiantes: solo los que no estudian. En español 'estudiantes que no estudian' tampoco usa comas. Esta generalización advierte sobre consecuencia específica para grupo particular, no para todos los estudiantes universalmente."
      },
      {
        id: "def_rel_8",
        question: "The house _____ we're buying needs major renovations soon.",
        translation: "La casa que estamos comprando necesita renovaciones mayores pronto.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Para especificar CUÁL casa (la que compramos) usamos definitoria sin comas. En español 'la casa que estamos comprando' tampoco separa. Esta información es esencial porque clarifica que hablas de compra específica en proceso, no de tu casa actual."
      },
      {
        id: "def_rel_9",
        question: "The keys _____ were on the table have disappeared completely!",
        translation: "¡Las llaves que estaban en la mesa han desaparecido completamente!",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Cláusula definitoria identifica CUÁLES llaves: las que estaban en mesa específica. En español 'las llaves que estaban' tampoco usa comas. Sin esta información no podrías distinguir estas llaves perdidas de otras llaves que podrías tener en otros lugares."
      },
      {
        id: "def_rel_10",
        question: "The teacher _____ taught me math retired last year finally.",
        translation: "El profesor que me enseñó matemáticas se jubiló el año pasado finalmente.",
        options: ["who", ",who", "which", "that"],
        correct: "who",
        explanation: "Para identificar CUÁL profesor entre varios usamos 'who' sin comas: especifica el de matemáticas. En español 'el profesor que me enseñó' tampoco separa. Esta especificación es necesaria porque probablemente tuviste múltiples profesores en escuela."
      },
      {
        id: "def_rel_11",
        question: "Animals _____ live in cold climates have thick fur coats.",
        translation: "Los animales que viven en climas fríos tienen pelaje grueso.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Cláusula definitoria limita a SUBGRUPO de animales: solo los de climas fríos. En español 'animales que viven' tampoco usa comas. Esta generalización zoológica es verdad solo para animales polares específicos, no para toda fauna global."
      },
      {
        id: "def_rel_12",
        question: "The food _____ you cooked last night was absolutely delicious!",
        translation: "¡La comida que cocinaste anoche estaba absolutamente deliciosa!",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Para especificar CUÁL comida (la de anoche) usamos definitoria: esencial saber de cuál hablas. En español 'la comida que cocinaste' tampoco separa. Este elogio específico sobre cena de ayer es cumplido que chef casero apreciará, validando esfuerzo culinario."
      },
      {
        id: "def_rel_13",
        question: "The dog _____ bit me belongs to my neighbor unfortunately.",
        translation: "El perro que me mordió pertenece a mi vecino desafortunadamente.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Cláusula definitoria identifica CUÁL perro específicamente: el que mordió. En español 'el perro que me mordió' tampoco usa comas. Esta especificación es crucial porque vecino probablemente tiene solo un perro, pero entre todos los perros del mundo, este es el específico."
      },
      {
        id: "def_rel_14",
        question: "The advice _____ she gave me was very helpful truly.",
        translation: "El consejo que ella me dio fue muy útil verdaderamente.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Para identificar CUÁL consejo usamos definitoria: el que ella dio específicamente. En español 'el consejo que me dio' tampoco separa. Esta gratitud por orientación específica recibida reconoce que sus palabras tuvieron impacto positivo en decisión o situación."
      },
      {
        id: "def_rel_15",
        question: "The shop _____ sells organic products is closed today sadly.",
        translation: "La tienda que vende productos orgánicos está cerrada hoy tristemente.",
        options: ["that", ",which", "which", ",that"],
        correct: "that",
        explanation: "Cláusula definitoria identifica tienda ESPECÍFICA: la de productos orgánicos. En español 'la tienda que vende' tampoco usa comas. Esta especificación es esencial porque probablemente hay múltiples tiendas en área, pero esta es la única con productos orgánicos que buscas."
      }
    ]
  },

  wish_regrets_past: {
    name: "Deseos y Arrepentimientos",
    description: "I wish I had... - lamentar acciones pasadas",
    icon: Award,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "wish_regret_1",
        question: "I wish I _____ _____ more attention in class years ago.",
        translation: "Desearía haber prestado más atención en clase hace años.",
        options: ["had paid", "have paid", "paid", "pay"],
        correct: "had paid",
        explanation: "Para ARREPENTIMIENTO sobre pasado usamos 'wish' + pasado perfecto: 'wish I had paid attention'. En español 'desearía haber prestado' también lamenta. Esta estructura expresa que NO lo hiciste y ahora lamentas esa falta de atención que probablemente afecta conocimiento actual."
      },
      {
        id: "wish_regret_2",
        question: "She wishes she _____ _____ that expensive car last year.",
        translation: "Ella desea no haber comprado ese auto caro el año pasado.",
        options: ["hadn't bought", "hasn't bought", "didn't buy", "doesn't buy"],
        correct: "hadn't bought",
        explanation: "Para ARREPENTIMIENTO de compra usamos 'wish' + pasado perfecto negativo: 'wish she hadn't bought'. En español 'desea no haber comprado' también lamenta. Esta regret sobre gasto grande probablemente es por problemas financieros resultantes o porque auto resultó ser problemático."
      },
      {
        id: "wish_regret_3",
        question: "I wish I _____ travel more when I was younger and free.",
        translation: "Desearía haber viajado más cuando era más joven y libre.",
        options: ["had", "have", "could", "can"],
        correct: "had",
        explanation: "Para lamentar OPORTUNIDADES perdidas usamos 'wish I had traveled': no viajaste suficiente. En español 'desearía haber viajado' también lamenta. Esta nostalgia por aventuras no tomadas en juventud es común al madurar y tener más responsabilidades que limitan libertad de viajar espontáneamente."
      },
      {
        id: "wish_regret_4",
        question: "He wishes he _____ _____ to university after high school.",
        translation: "Él desea haber ido a la universidad después de la preparatoria.",
        options: ["had gone", "has gone", "went", "goes"],
        correct: "had gone",
        explanation: "Para lamentar DECISIÓN educativa pasada usamos 'wish he had gone': no fue a universidad. En español 'desea haber ido' también lamenta. Este arrepentimiento sobre educación superior perdida probablemente surge al ver cómo limitó oportunidades profesionales comparado con pares que sí estudiaron."
      },
      {
        id: "wish_regret_5",
        question: "I wish I _____ _____ him the truth from the beginning.",
        translation: "Desearía haberle dicho la verdad desde el principio.",
        options: ["had told", "have told", "told", "tell"],
        correct: "had told",
        explanation: "Para ARREPENTIMIENTO de deshonestidad usamos 'wish I had told the truth': no fuiste honesto inicialmente. En español 'desearía haber dicho' también lamenta. Esta mentira o omisión inicial probablemente complicó situación y ahora reconoces que honestidad desde inicio hubiera evitado problemas."
      },
      {
        id: "wish_regret_6",
        question: "She wishes she _____ _____ that embarrassing photo online.",
        translation: "Ella desea no haber publicado esa foto vergonzosa en línea.",
        options: ["hadn't posted", "hasn't posted", "didn't post", "doesn't post"],
        correct: "hadn't posted",
        explanation: "Para ARREPENTIMIENTO de redes sociales usamos 'wish she hadn't posted': acción digital irreversible. En español 'desea no haber publicado' también lamenta. Esta lección sobre permanencia de internet reconoce que contenido embarazoso compartido impulsivamente puede perseguirte digitalmente por años."
      },
      {
        id: "wish_regret_7",
        question: "I wish we _____ _____ that house when we had the chance.",
        translation: "Desearía que hubiéramos comprado esa casa cuando tuvimos la oportunidad.",
        options: ["had bought", "have bought", "bought", "buy"],
        correct: "had bought",
        explanation: "Para lamentar OPORTUNIDAD inmobiliaria perdida usamos 'wish we had bought': no compraron cuando pudieron. En español 'desearía que hubiéramos comprado' también lamenta. Esta casa que se escapó probablemente ahora vale mucho más o ya no está disponible, generando arrepentimiento financiero."
      },
      {
        id: "wish_regret_8",
        question: "He wishes he _____ _____ harder when he was in school before.",
        translation: "Él desea haber estudiado más duro cuando estaba en la escuela antes.",
        options: ["had studied", "has studied", "studied", "studies"],
        correct: "had studied",
        explanation: "Para ARREPENTIMIENTO académico usamos 'wish he had studied harder': no se esforzó suficiente. En español 'desea haber estudiado' también lamenta. Esta realización tardía de que educación era oportunidad desperdiciada es común al ver cómo afecta opciones profesionales actuales."
      },
      {
        id: "wish_regret_9",
        question: "I wish I _____ _____ in touch with my old friends better.",
        translation: "Desearía haber mantenido el contacto con mis viejos amigos mejor.",
        options: ["had kept", "have kept", "kept", "keep"],
        correct: "had kept",
        explanation: "Para lamentar RELACIONES descuidadas usamos 'wish I had kept in touch': dejaste que amistades se desvanecieran. En español 'desearía haber mantenido' también lamenta. Esta tristeza por conexiones perdidas reconoce que amistad requiere esfuerzo sostenido que no diste."
      },
      {
        id: "wish_regret_10",
        question: "She wishes she _____ _____ a different career path originally.",
        translation: "Ella desea haber elegido una trayectoria profesional diferente originalmente.",
        options: ["had chosen", "has chosen", "chose", "chooses"],
        correct: "had chosen",
        explanation: "Para ARREPENTIMIENTO de carrera usamos 'wish she had chosen': decisión profesional lamentada. En español 'desea haber elegido' también contempla alternativa. Esta insatisfacción laboral que hace desear haber tomado camino diferente desde inicio es crisis de mediana edad común."
      },
      {
        id: "wish_regret_11",
        question: "I wish I _____ _____ more time with my grandparents before.",
        translation: "Desearía haber pasado más tiempo con mis abuelos antes.",
        options: ["had spent", "have spent", "spent", "spend"],
        correct: "had spent",
        explanation: "Para lamentar TIEMPO no aprovechado usamos 'wish I had spent more time': oportunidad perdida. En español 'desearía haber pasado' también lamenta. Este arrepentimiento probablemente surge después de su fallecimiento, cuando ya es tarde para recuperar momentos que nunca priorizaste."
      },
      {
        id: "wish_regret_12",
        question: "He wishes he _____ _____ smoking years ago like advised.",
        translation: "Él desea haber dejado de fumar hace años como le aconsejaron.",
        options: ["had quit", "has quit", "quit", "quits"],
        correct: "had quit",
        explanation: "Para ARREPENTIMIENTO de salud usamos 'wish he had quit': no dejó hábito cuando debió. En español 'desea haber dejado' también lamenta. Este pesar sobre no abandonar tabaco cuando fue advertido probablemente surge al enfrentar consecuencias de salud actuales de años de fumar."
      },
      {
        id: "wish_regret_13",
        question: "I wish I _____ _____ that argument with my sister then.",
        translation: "Desearía no haber tenido esa discusión con mi hermana entonces.",
        options: ["hadn't had", "haven't had", "didn't have", "don't have"],
        correct: "hadn't had",
        explanation: "Para lamentar CONFLICTO familiar usamos 'wish I hadn't had that argument': peleas que dañaron relación. En español 'desearía no haber tenido' también lamenta. Este arrepentimiento sobre palabras hirientes dichas en calor del momento reconoce que daño a relación familiar no valió la pena."
      },
      {
        id: "wish_regret_14",
        question: "She wishes she _____ _____ that job offer last month when given.",
        translation: "Ella desea haber aceptado esa oferta de trabajo el mes pasado cuando se la dieron.",
        options: ["had accepted", "has accepted", "accepted", "accepts"],
        correct: "had accepted",
        explanation: "Para ARREPENTIMIENTO de oportunidad profesional usamos 'wish she had accepted': rechazó y ahora lamenta. En español 'desea haber aceptado' también lamenta. Esta decisión pasada de rechazar oferta que ahora parece fue error puede ser por comparar con situación laboral actual menos satisfactoria."
      },
      {
        id: "wish_regret_15",
        question: "I wish I _____ _____ a foreign language when I was young.",
        translation: "Desearía haber aprendido un idioma extranjero cuando era joven.",
        options: ["had learned", "have learned", "learned", "learn"],
        correct: "had learned",
        explanation: "Para lamentar HABILIDAD no adquirida usamos 'wish I had learned': oportunidad de juventud perdida. En español 'desearía haber aprendido' también lamenta. Este arrepentimiento reconoce que niñez es período óptimo para adquirir idiomas y que ahora como adulto es mucho más difícil."
      }
    ]
  },

  so_that_purpose: {
    name: "So That para Propósito",
    description: "Para que/de modo que - expresar intención con resultado",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "so_that_1",
        question: "I'm studying hard _____ _____ I can pass the exam next week.",
        translation: "Estoy estudiando duro para que pueda pasar el examen la próxima semana.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PROPÓSITO con cláusula completa usamos 'so that' + sujeto + verbo: 'so that I can pass'. En español 'para que pueda' también introduce propósito. Esta estructura conecta acción presente (estudiar) con meta futura deseada (pasar), mostrando planificación intencional."
      },
      {
        id: "so_that_2",
        question: "She saved money _____ _____ she could buy a new car later.",
        translation: "Ella ahorró dinero para que pudiera comprar un auto nuevo después.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para explicar RAZÓN de ahorro usamos 'so that she could': propósito financiero específico. En español 'para que pudiera' también explica. Este ahorro disciplinado con meta clara de vehículo nuevo muestra planificación financiera inteligente que posterga gratificación inmediata."
      },
      {
        id: "so_that_3",
        question: "He's working overtime _____ _____ he will finish the project earlier.",
        translation: "Él está trabajando horas extra para que termine el proyecto más temprano.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PROPÓSITO de acelerar completitud usamos 'so that he will finish': meta de anticipar deadline. En español 'para que termine' también establece objetivo. Este sacrificio de tiempo personal para trabajo muestra dedicación al proyecto o presión de entregar antes de fecha límite."
      },
      {
        id: "so_that_4",
        question: "I spoke slowly _____ _____ everyone could understand me clearly.",
        translation: "Hablé lentamente para que todos pudieran entenderme claramente.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PROPÓSITO comunicativo usamos 'so that everyone could understand': facilitar comprensión. En español 'para que todos pudieran' también busca claridad. Esta consideración de modificar velocidad del habla para acomodar a audiencia muestra empatía y deseo genuino de comunicación efectiva."
      },
      {
        id: "so_that_5",
        question: "We left early _____ _____ we wouldn't miss the train departure.",
        translation: "Salimos temprano para que no perdiéramos la salida del tren.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PREVENIR resultado negativo usamos 'so that we wouldn't': propósito de evitar. En español 'para que no perdiéramos' también previene. Esta planificación de salida temprana con buffer de tiempo muestra previsión sensata sobre posibles demoras en camino."
      },
      {
        id: "so_that_6",
        question: "She's learning English _____ _____ she can work abroad someday.",
        translation: "Ella está aprendiendo inglés para que pueda trabajar en el extranjero algún día.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para META profesional futura usamos 'so that she can work': propósito de movilidad internacional. En español 'para que pueda trabajar' también establece objetivo. Esta motivación laboral para estudiar idioma es práctica y común en mundo globalizado donde multilingüismo abre puertas."
      },
      {
        id: "so_that_7",
        question: "I'm writing it down _____ _____ I won't forget the information.",
        translation: "Lo estoy escribiendo para que no olvide la información.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PREVENIR olvido usamos 'so that I won't forget': propósito de preservar memoria. En español 'para que no olvide' también previene. Esta acción práctica de documentar reconoce limitaciones de memoria humana y toma medidas para compensarlas confiablemente."
      },
      {
        id: "so_that_8",
        question: "He saved the file _____ _____ he wouldn't lose his work progress.",
        translation: "Él guardó el archivo para que no perdiera su progreso de trabajo.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PROTEGER trabajo usamos 'so that he wouldn't lose': precaución contra pérdida. En español 'para que no perdiera' también protege. Este hábito de guardar frecuentemente es lección aprendida probablemente después de experiencia traumática previa de perder horas de trabajo."
      },
      {
        id: "so_that_9",
        question: "We're leaving now _____ _____ we can arrive on time for dinner.",
        translation: "Nos vamos ahora para que podamos llegar a tiempo para la cena.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para ASEGURAR puntualidad usamos 'so that we can arrive on time': propósito de timing. En español 'para que podamos llegar' también planifica. Esta salida calculada para llegar puntualmente muestra respeto por anfitrión y otros comensales que esperan."
      },
      {
        id: "so_that_10",
        question: "She's practicing daily _____ _____ she will improve her skills faster.",
        translation: "Ella está practicando diariamente para que mejore sus habilidades más rápido.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para ACELERAR mejora usamos 'so that she will improve': propósito de progreso rápido. En español 'para que mejore' también busca desarrollo. Esta dedicación diaria muestra comprensión de que práctica consistente es clave para dominar cualquier habilidad compleja."
      },
      {
        id: "so_that_11",
        question: "I'm calling you _____ _____ you know about the change immediately.",
        translation: "Te estoy llamando para que sepas sobre el cambio inmediatamente.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para INFORMAR urgentemente usamos 'so that you know': propósito de comunicación inmediata. En español 'para que sepas' también informa. Esta llamada proactiva para notificar cambio muestra consideración de asegurar que información importante llegue rápido antes de que cause confusión."
      },
      {
        id: "so_that_12",
        question: "We bought insurance _____ _____ we would be protected financially.",
        translation: "Compramos seguro para que estemos protegidos financieramente.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para PROTECCIÓN futura usamos 'so that we would be protected': propósito de seguridad. En español 'para que estemos protegidos' también asegura. Esta inversión en seguro es planificación prudente que prepara para imprevistos, dando paz mental sobre emergencias potenciales."
      },
      {
        id: "so_that_13",
        question: "She's taking notes _____ _____ she can remember everything later.",
        translation: "Ella está tomando notas para que pueda recordar todo después.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para CAPTURAR información usamos 'so that she can remember': propósito de preservación. En español 'para que pueda recordar' también documenta. Esta práctica de tomar notas durante reuniones o clases reconoce que memoria sola no retiene todos detalles importantes."
      },
      {
        id: "so_that_14",
        question: "I locked the door _____ _____ nobody could enter while away.",
        translation: "Cerré con llave la puerta para que nadie pudiera entrar mientras estuviera fuera.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para SEGURIDAD del hogar usamos 'so that nobody could enter': prevención de intrusión. En español 'para que nadie pudiera' también protege. Esta precaución básica de asegurar propiedad durante ausencia es responsabilidad fundamental de proteger posesiones y privacidad."
      },
      {
        id: "so_that_15",
        question: "He's exercising regularly _____ _____ he will lose weight successfully.",
        translation: "Él está ejercitándose regularmente para que pierda peso exitosamente.",
        options: ["so that", "so", "that", "for that"],
        correct: "so that",
        explanation: "Para META de fitness usamos 'so that he will lose weight': propósito de transformación. En español 'para que pierda peso' también busca cambio. Esta rutina regular de ejercicio con objetivo específico de pérdida de peso muestra compromiso serio con salud y cambio de estilo de vida."
      }
    ]
  }
};

export default part31Categories;