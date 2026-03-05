/**
 * SPANISH → ENGLISH GRAMMAR - PART 7
 * 4 categories, 15 questions each
 */

import { Repeat, BookOpen, MapPin, Award } from "lucide-react";

export const part7Categories = {
  reflexive_verbs_advanced: {
    name: "Verbos Reflexivos Avanzados",
    description: "Myself, yourself, themselves - acciones reflexivas",
    icon: Repeat,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "reflex_adv_1",
        question: "I need to prepare _____ for the interview tomorrow.",
        translation: "Necesito prepararme para la entrevista de mañana.",
        options: ["myself", "me", "my", "mine"],
        correct: "myself",
        explanation: "Los pronombres reflexivos en inglés terminan en '-self' (singular) o '-selves' (plural). Aquí 'myself' significa 'a mí mismo'. El español usa 'prepararme' donde el 'me' es reflexivo. En inglés separamos el pronombre. Esta forma enfatiza que uno mismo es responsable de su preparación, nadie más puede hacerlo por ti."
      },
      {
        id: "reflex_adv_2",
        question: "She looked at _____ in the mirror.",
        translation: "Ella se miró en el espejo.",
        options: ["herself", "her", "hers", "she"],
        correct: "herself",
        explanation: "El pronombre reflexivo femenino es 'herself'. Después de 'looked at' necesitamos objeto, y como es reflexivo (se miró a sí misma) usamos 'herself'. El español 'se miró' integra el reflexivo en el verbo. Mirarse en el espejo es acción cotidiana que hacemos varias veces al día sin pensar."
      },
      {
        id: "reflex_adv_3",
        question: "The children can dress _____ now - they're old enough.",
        translation: "Los niños pueden vestirse solos ahora - tienen edad suficiente.",
        options: ["themselves", "them", "their", "they"],
        correct: "themselves",
        explanation: "El pronombre reflexivo plural es 'themselves'. El verbo 'dress' significa vestirse. Esta oración celebra independencia infantil creciente. El español 'vestirse' combina verbo con reflexivo. Aprender a vestirse solo es hito importante en el desarrollo infantil que marca creciente autonomía."
      },
      {
        id: "reflex_adv_4",
        question: "You should be proud of _____ for graduating.",
        translation: "Deberías estar orgulloso de ti mismo por graduarte.",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "Después de 'proud of' usamos reflexivo 'yourself'. Este cumplido reconoce logro personal. El gerundio 'graduating' explica la razón del orgullo. El español 'de ti mismo' también usa forma reflexiva. La graduación es momento de celebración personal que merece auto-reconocimiento por el esfuerzo y dedicación."
      },
      {
        id: "reflex_adv_5",
        question: "We enjoyed _____ at the party last night.",
        translation: "Nos divertimos en la fiesta anoche.",
        options: ["ourselves", "us", "our", "we"],
        correct: "ourselves",
        explanation: "El verbo 'enjoy' con reflexivo 'ourselves' significa divertirse. El español 'nos divertimos' integra el reflexivo. Esta estructura expresa que pasamos buen tiempo. En inglés el reflexivo es más explícito. Es la forma natural de describir experiencias placenteras en eventos sociales donde la diversión fue compartida."
      },
      {
        id: "reflex_adv_6",
        question: "He hurt _____ while playing basketball.",
        translation: "Se lastimó mientras jugaba básquetbol.",
        options: ["himself", "him", "his", "he"],
        correct: "himself",
        explanation: "El pronombre reflexivo masculino 'himself' indica que se lastimó a sí mismo (accidente). El verbo 'hurt' puede ser reflexivo o no. El gerundio 'while playing' da contexto. El español 'se lastimó' es más compacto. Los deportes conllevan riesgo de lesiones, y esta forma describe estos accidentes comunes de manera clara."
      },
      {
        id: "reflex_adv_7",
        question: "Make _____ comfortable - you're welcome to stay.",
        translation: "Ponte cómodo - eres bienvenido a quedarte.",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "El imperativo reflexivo 'make yourself comfortable' es expresión hospitalaria común. El español 'ponte cómodo' también invita a relajarse. Esta frase demuestra hospitalidad genuina, diciendo al visitante que puede sentirse como en casa. Es forma cálida de hacer que otros se sientan bienvenidos en tu espacio."
      },
      {
        id: "reflex_adv_8",
        question: "Don't push _____ too hard at the gym.",
        translation: "No te exijas demasiado en el gimnasio.",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "Imperativo negativo reflexivo 'Don't push yourself' aconseja moderación. El adverbio 'too hard' advierte sobre exceso. El español 'no te exijas' también previene sobre-esfuerzo. Es consejo sabio sobre ejercicio: el progreso viene con consistencia no con esfuerzo extremo que cause lesiones."
      },
      {
        id: "reflex_adv_9",
        question: "They found _____ lost in the forest.",
        translation: "Se encontraron perdidos en el bosque.",
        options: ["themselves", "them", "their", "they"],
        correct: "themselves",
        explanation: "El pronombre reflexivo 'themselves' con 'found' describe darse cuenta de su situación. El adjetivo 'lost' describe el estado en que se encontraban. El español 'se encontraron' también es reflexivo. Esta construcción narrativa captura el momento de realización sobre estar desorientados, situación que genera ansiedad."
      },
      {
        id: "reflex_adv_10",
        question: "I taught _____ how to play the guitar.",
        translation: "Me enseñé a mí mismo a tocar la guitarra.",
        options: ["myself", "me", "my", "mine"],
        correct: "myself",
        explanation: "El verbo 'teach' con reflexivo 'myself' significa ser autodidacta. No tuve profesor sino que aprendí solo. El español 'me enseñé' o más natural 'aprendí solo' expresa lo mismo. Aprender instrumentos sin maestro requiere disciplina y motivación interna extraordinarias, mostrando determinación personal admirable."
      },
      {
        id: "reflex_adv_11",
        question: "She talks to _____ when she's nervous.",
        translation: "Ella se habla a sí misma cuando está nerviosa.",
        options: ["herself", "her", "hers", "she"],
        correct: "herself",
        explanation: "Hablar consigo mismo 'talks to herself' es hábito que muchos tenemos bajo estrés. El español 'se habla' o 'habla consigo misma' también describe este comportamiento. La frase 'when she's nervous' explica cuándo ocurre. Es mecanismo de afrontamiento común que ayuda a procesar pensamientos y calmar ansiedades."
      },
      {
        id: "reflex_adv_12",
        question: "We need to take care of _____ better.",
        translation: "Necesitamos cuidarnos mejor.",
        options: ["ourselves", "us", "our", "we"],
        correct: "ourselves",
        explanation: "La expresión 'take care of ourselves' significa auto-cuidado. El reflexivo 'ourselves' enfatiza responsabilidad personal por bienestar. El comparativo 'better' sugiere que no lo estamos haciendo bien actualmente. El español 'cuidarnos' integra el reflexivo. Es recordatorio importante en vida moderna estresante sobre priorizar salud propia."
      },
      {
        id: "reflex_adv_13",
        question: "The cat cleaned _____ after eating fish.",
        translation: "El gato se limpió después de comer pescado.",
        options: ["itself", "it", "its", "it's"],
        correct: "itself",
        explanation: "Para animales o cosas usamos el pronombre reflexivo 'itself'. Los gatos son famosos por su higiene personal. El español 'se limpió' también es reflexivo. Esta oración describe comportamiento animal natural. Aunque usamos reflexivo para animales, reconocemos sus comportamientos instintivos de auto-cuidado que los mantienen saludables."
      },
      {
        id: "reflex_adv_14",
        question: "You'll hurt _____ if you're not careful!",
        translation: "¡Te lastimarás si no tienes cuidado!",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "Advertencia usando futuro 'will hurt yourself'. El reflexivo indica auto-lesión accidental. La condición 'if you're not careful' advierte sobre el peligro. El español '¡te lastimarás!' también previene. Es forma apropiada de expresar preocupación por seguridad ajena, anticipando posible accidente si no hay precaución."
      },
      {
        id: "reflex_adv_15",
        question: "They introduced _____ to the new neighbors yesterday.",
        translation: "Se presentaron a los nuevos vecinos ayer.",
        options: ["themselves", "them", "their", "they"],
        correct: "themselves",
        explanation: "El verbo 'introduce' con reflexivo 'themselves' significa presentarse. Es acto social de cortesía. El español 'se presentaron' también es reflexivo. Esta acción demuestra buena vecindad y apertura social. Conocer a vecinos nuevos fortalece la comunidad local y puede iniciar amistades duraderas."
      }
    ]
  },

  gerunds_infinitives: {
    name: "Gerundios e Infinitivos",
    description: "Cuándo usar -ing vs to + verbo",
    icon: BookOpen,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "ger_inf_1",
        question: "I enjoy _____ books in my free time.",
        translation: "Disfruto leer libros en mi tiempo libre.",
        options: ["reading", "to read", "read", "reads"],
        correct: "reading",
        explanation: "Después del verbo 'enjoy' SIEMPRE usamos gerundio (-ing), nunca infinitivo. Es una regla fija del inglés. 'Reading' funciona como sustantivo aquí. El español usa infinitivo 'leer' donde el inglés requiere gerundio. Esta diferencia es importante: ciertos verbos ingleses exigen gerundio específicamente."
      },
      {
        id: "ger_inf_2",
        question: "She decided _____ a new language this year.",
        translation: "Ella decidió aprender un idioma nuevo este año.",
        options: ["to learn", "learning", "learn", "learns"],
        correct: "to learn",
        explanation: "Después de 'decide' usamos infinitivo con 'to', no gerundio. Es otra regla fija. El español también usa infinitivo 'aprender'. Algunos verbos ingleses prefieren infinitivo (want, decide, plan, hope). Esta estructura expresa decisiones y metas para el futuro. Aprender idiomas es resolución popular que requiere compromiso sostenido."
      },
      {
        id: "ger_inf_3",
        question: "He avoided _____ about his problems.",
        translation: "Él evitó hablar sobre sus problemas.",
        options: ["talking", "to talk", "talk", "talks"],
        correct: "talking",
        explanation: "El verbo 'avoid' requiere gerundio 'talking', no infinitivo. Esta es regla que hay que memorizar. El español usa infinitivo 'hablar' donde inglés usa gerundio. Esta oración describe evasión emocional común donde la gente evita confrontar dificultades. Es comportamiento humano comprensible aunque no siempre saludable."
      },
      {
        id: "ger_inf_4",
        question: "I want _____ the world someday.",
        translation: "Quiero viajar por el mundo algún día.",
        options: ["to travel", "traveling", "travel", "travels"],
        correct: "to travel",
        explanation: "Después de 'want' usamos infinitivo 'to travel'. Esta es regla consistente con verbos de deseo. El español también usa infinitivo 'viajar'. La palabra 'someday' añade esperanza sobre futuro. Esta construcción expresa sueños y aspiraciones. Viajar por el mundo es meta común que inspira a muchos a trabajar y ahorrar."
      },
      {
        id: "ger_inf_5",
        question: "She keeps _____ the same mistake repeatedly.",
        translation: "Ella sigue cometiendo el mismo error repetidamente.",
        options: ["making", "to make", "make", "makes"],
        correct: "making",
        explanation: "El verbo 'keep' (seguir/continuar) requiere gerundio 'making'. Esta estructura describe comportamiento repetitivo frustrante. El adverbio 'repeatedly' enfatiza la frecuencia. El español 'sigue cometiendo' también usa gerundio. Esta forma expresa frustración sobre patrones que no se rompen, situación común que requiere auto-conciencia para cambiar."
      },
      {
        id: "ger_inf_6",
        question: "They hope _____ their family next month.",
        translation: "Esperan visitar a su familia el próximo mes.",
        options: ["to visit", "visiting", "visit", "visits"],
        correct: "to visit",
        explanation: "Después de 'hope' usamos infinitivo con 'to'. Esta es regla para verbos de expectativa. El español también usa infinitivo 'visitar'. La frase 'next month' establece el marco temporal. Esta construcción expresa anticipación de reuniones familiares. Las visitas familiares son importantes para mantener lazos emocionales fuertes."
      },
      {
        id: "ger_inf_7",
        question: "I don't mind _____ for you outside.",
        translation: "No me importa esperarte afuera.",
        options: ["waiting", "to wait", "wait", "waits"],
        correct: "waiting",
        explanation: "El verbo 'mind' (importar/molestar) requiere gerundio 'waiting'. En negativo 'don't mind' significa 'no me molesta'. El español usa infinitivo 'esperar' donde inglés usa gerundio. Esta frase muestra paciencia y consideración. Es forma educada de decir que estás dispuesto a acomodarte a las necesidades de otros."
      },
      {
        id: "ger_inf_8",
        question: "He promised _____ me tomorrow morning.",
        translation: "Él prometió llamarme mañana en la mañana.",
        options: ["to call", "calling", "call", "calls"],
        correct: "to call",
        explanation: "Después de 'promise' usamos infinitivo 'to call'. Los verbos de compromiso prefieren infinitivo. El objeto 'me' va después del infinitivo en inglés. El español 'llamarme' combina verbo con pronombre. Las promesas de comunicación son importantes para mantener relaciones, y esta estructura formaliza ese compromiso."
      },
      {
        id: "ger_inf_9",
        question: "She suggested _____ to a different restaurant.",
        translation: "Ella sugirió ir a un restaurante diferente.",
        options: ["going", "to go", "go", "goes"],
        correct: "going",
        explanation: "El verbo 'suggest' requiere gerundio 'going', no infinitivo. Esta regla puede confundir porque el español usa infinitivo 'ir'. Esta sugerencia muestra flexibilidad en planes. El adjetivo 'different' indica cambio de planes originales. Es común ajustar decisiones grupales para satisfacer preferencias de todos."
      },
      {
        id: "ger_inf_10",
        question: "I learned _____ the piano when I was seven.",
        translation: "Aprendí a tocar el piano cuando tenía siete años.",
        options: ["to play", "playing", "play", "plays"],
        correct: "to play",
        explanation: "Después de 'learn' usamos infinitivo 'to play'. El español también usa infinitivo 'tocar'. Ambos idiomas coinciden aquí. La edad siete es tiempo común para empezar música. Esta estructura describe adquisición de habilidades en la niñez. El aprendizaje musical temprano desarrolla disciplina y apreciación artística que duran toda la vida."
      },
      {
        id: "ger_inf_11",
        question: "We finished _____ dinner at 9 PM.",
        translation: "Terminamos de cenar a las 9 PM.",
        options: ["having", "to have", "have", "has"],
        correct: "having",
        explanation: "El verbo 'finish' siempre requiere gerundio 'having'. El español 'terminar de' usa preposición más infinitivo, diferente del inglés. La hora específica marca el final de la actividad. Esta construcción describe la completitud de una actividad. Saber cuándo terminó una comida ayuda a planificar actividades posteriores de la tarde."
      },
      {
        id: "ger_inf_12",
        question: "She plans _____ abroad for graduate school.",
        translation: "Ella planea estudiar en el extranjero para posgrado.",
        options: ["to study", "studying", "study", "studies"],
        correct: "to study",
        explanation: "Después de 'plan' usamos infinitivo 'to study'. Los verbos de planificación prefieren infinitivo. El español también usa infinitivo 'estudiar'. La frase 'abroad' añade dimensión internacional. Estudios de posgrado en el extranjero son meta ambiciosa que combina educación superior con experiencia cultural internacional."
      },
      {
        id: "ger_inf_13",
        question: "I can't stand _____ in long lines.",
        translation: "No soporto esperar en filas largas.",
        options: ["waiting", "to wait", "wait", "waits"],
        correct: "waiting",
        explanation: "La expresión 'can't stand' (no soportar) requiere gerundio 'waiting'. Esta frase expresa fuerte aversión. El español usa infinitivo 'esperar' donde inglés usa gerundio. Las filas largas prueban paciencia de todos. Esta construcción comunica una molestia común que casi todos compartimos en vida moderna."
      },
      {
        id: "ger_inf_14",
        question: "They agreed _____ early to avoid traffic.",
        translation: "Acordaron salir temprano para evitar tráfico.",
        options: ["to leave", "leaving", "leave", "leaves"],
        correct: "to leave",
        explanation: "Después de 'agree' usamos infinitivo 'to leave'. Los verbos de acuerdo prefieren infinitivo. El propósito 'to avoid traffic' explica por qué. El español también usa infinitivo 'salir'. Esta decisión grupal muestra cooperación y planificación inteligente para optimizar el tiempo de viaje."
      },
      {
        id: "ger_inf_15",
        question: "He admitted _____ the expensive vase.",
        translation: "Él admitió romper el jarrón costoso.",
        options: ["breaking", "to break", "break", "breaks"],
        correct: "breaking",
        explanation: "El verbo 'admit' (admitir) requiere gerundio 'breaking'. Esta es confesión honesta sobre accidente. El adjetivo 'expensive' añade gravedad. El español usa infinitivo 'romper' donde inglés usa gerundio. Admitir errores especialmente con objetos valiosos requiere valentía y honestidad, cualidades que merecen respeto."
      }
    ]
  },

  prepositions_time_place: {
    name: "Preposiciones de Tiempo y Lugar",
    description: "In, on, at - ubicación temporal y espacial",
    icon: MapPin,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_time_1",
        question: "I'll meet you _____ 3 PM at the café.",
        translation: "Te veré a las 3 PM en el café.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para horas específicas usamos 'at': 'at 3 PM, at noon, at midnight'. Es regla fija. El español usa 'a las' para horas. Esta preposición precisa es esencial para coordinar encuentros. Usar la preposición correcta evita confusiones sobre cuándo exactamente encontrarse, especialmente importante en citas y reuniones profesionales."
      },
      {
        id: "prep_time_2",
        question: "My birthday is _____ May 15th every year.",
        translation: "Mi cumpleaños es el 15 de mayo cada año.",
        options: ["on", "at", "in", "by"],
        correct: "on",
        explanation: "Para fechas específicas usamos 'on': 'on Monday, on May 15th, on Christmas Day'. El español usa 'el' para fechas. Esta regla se aplica a días y fechas específicas del calendario. Los cumpleaños son fechas fijas anuales que todos celebramos, y esta preposición correcta ayuda a comunicar claramente cuándo festejar."
      },
      {
        id: "prep_time_3",
        question: "We usually go on vacation _____ summer.",
        translation: "Usualmente vamos de vacaciones en verano.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para estaciones del año, meses y años usamos 'in': 'in summer, in July, in 2024'. El español también usa 'en' para estaciones. Esta preposición marca períodos amplios de tiempo. El verano es época tradicional de vacaciones para muchas familias, cuando el clima cálido permite disfrutar actividades al aire libre."
      },
      {
        id: "prep_time_4",
        question: "The store is _____ Main Street near the bank.",
        translation: "La tienda está en la calle Main cerca del banco.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para calles usamos 'on': 'on Main Street, on Fifth Avenue'. El español usa 'en' para calles. Esta distinción ayuda a dar direcciones claras. La referencia 'near the bank' añade punto de orientación adicional. Dar ubicaciones precisas combinando calle con edificios reconocibles ayuda a encontrar lugares más fácilmente."
      },
      {
        id: "prep_time_5",
        question: "I live _____ a small town in the mountains.",
        translation: "Vivo en un pueblo pequeño en las montañas.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para ciudades, pueblos y países usamos 'in': 'in Madrid, in Mexico, in a town'. El español también usa 'en' para lugares geográficos. Esta preposición indica que estás dentro de los límites de ese lugar. La ubicación montañosa añade contexto pintoresco sobre el tipo de ambiente donde la persona reside."
      },
      {
        id: "prep_time_6",
        question: "The meeting is _____ the morning, not the afternoon.",
        translation: "La reunión es en la mañana, no en la tarde.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para partes del día usamos 'in': 'in the morning, in the afternoon, in the evening'. Excepción: 'at night'. El español usa 'en' o 'por' para partes del día. Esta clarificación previene confusiones sobre horarios. Es importante especificar la parte del día correcta para evitar que alguien llegue en el momento equivocado."
      },
      {
        id: "prep_time_7",
        question: "She arrived _____ the airport two hours early.",
        translation: "Ella llegó al aeropuerto dos horas antes.",
        options: ["at", "in", "on", "to"],
        correct: "at",
        explanation: "Para lugares específicos como aeropuertos, estaciones, edificios usamos 'at'. El español usa 'a' o 'al' para destinos. Esta distinción ubica a la persona en un punto específico. Llegar dos horas antes muestra precaución con vuelos. Esta preposición correcta es fundamental para describir llegadas a lugares determinados."
      },
      {
        id: "prep_time_8",
        question: "I was born _____ 1995 in a small hospital.",
        translation: "Nací en 1995 en un hospital pequeño.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para años usamos 'in': 'in 1995, in 2020'. El español también usa 'en' para años. Esta preposición marca el año de nacimiento. La información adicional sobre el hospital añade detalle personal. Nuestro año de nacimiento es dato fundamental de identidad que contextualiza nuestra generación."
      },
      {
        id: "prep_time_9",
        question: "The picture is hanging _____ the wall in the living room.",
        translation: "El cuadro está colgando en la pared de la sala.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para superficies verticales como paredes usamos 'on': 'on the wall, on the ceiling'. El español usa 'en' para paredes. Esta distinción describe adhesión a superficie. El gerundio 'hanging' describe cómo está el cuadro. Los cuadros en paredes son elementos decorativos que personalizan espacios y los hacen acogedores."
      },
      {
        id: "prep_time_10",
        question: "We'll finish the project _____ three weeks.",
        translation: "Terminaremos el proyecto en tres semanas.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Para expresar 'dentro de X tiempo' usamos 'in': 'in three weeks, in two months'. El español también usa 'en'. Esta estructura proyecta completitud futura. Es diferente de 'by' que sería límite. Esta promesa sobre cronograma del proyecto establece expectativas claras sobre cuándo esperar resultados finales."
      },
      {
        id: "prep_time_11",
        question: "She works _____ night and sleeps during the day.",
        translation: "Ella trabaja de noche y duerme durante el día.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para 'night' usamos 'at' (excepción a la regla de 'in' para partes del día): 'at night'. El español usa 'de noche' o 'por la noche'. Esta oración describe turnos nocturnos. Los trabajadores nocturnos tienen horarios invertidos que afectan su vida social. Esta preposición correcta ayuda a describir estos horarios no convencionales."
      },
      {
        id: "prep_time_12",
        question: "The keys are _____ the table where you left them.",
        translation: "Las llaves están en la mesa donde las dejaste.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Para objetos sobre superficies horizontales usamos 'on': 'on the table, on the desk'. El español usa 'en' o 'sobre' para mesas. Esta ubicación específica ayuda a encontrar objetos perdidos. La frase relativa 'where you left them' añade que están exactamente donde se dejaron, sin que nadie las haya movido."
      },
      {
        id: "prep_time_13",
        question: "I'll see you _____ Christmas for the family dinner.",
        translation: "Te veré en Navidad para la cena familiar.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para festividades usamos 'at': 'at Christmas, at Easter'. Es excepción porque son períodos no días específicos. El español usa 'en' para festividades. Esta promesa de reunión familiar es tradicional. Las reuniones navideñas son momentos especiales que reúnen familias dispersas geográficamente para celebrar juntos."
      },
      {
        id: "prep_time_14",
        question: "He's waiting _____ the bus stop for his friend.",
        translation: "Él está esperando en la parada de autobús por su amigo.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Para puntos de encuentro o paradas usamos 'at': 'at the bus stop, at the corner'. El español usa 'en' para paradas. Esta preposición ubica a la persona en un punto específico. Esperar en paradas es parte de usar transporte público. La preposición correcta ayuda a describir exactamente dónde encontrarse."
      },
      {
        id: "prep_time_15",
        question: "The conference will be held _____ Monday morning.",
        translation: "La conferencia se llevará a cabo el lunes en la mañana.",
        options: ["on", "at", "in", "by"],
        correct: "on",
        explanation: "Para días específicos más parte del día usamos 'on': 'on Monday morning, on Friday evening'. El español usa 'el lunes por la mañana'. Esta combinación especifica exactamente cuándo. La frase pasiva 'will be held' es formal para eventos. Dar tiempo preciso de eventos profesionales es esencial para buena asistencia."
      }
    ]
  },

  comparatives_superlatives_advanced: {
    name: "Comparativos y Superlativos Avanzados",
    description: "More/most, -er/-est, irregulares y construcciones complejas",
    icon: Award,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "comp_sup_adv_1",
        question: "This exercise is _____ difficult than the last one.",
        translation: "Este ejercicio es más difícil que el anterior.",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "Para adjetivos largos (dos o más sílabas) usamos 'more' para comparativo. 'Difficult' es largo así que 'more difficult'. La comparación usa 'than' (que). El español 'más difícil que' es similar. Esta estructura permite comparar niveles de dificultad entre tareas, útil para evaluar progreso o desafíos crecientes."
      },
      {
        id: "comp_sup_adv_2",
        question: "She is the _____ intelligent student in the class.",
        translation: "Ella es la estudiante más inteligente de la clase.",
        options: ["most", "more", "much", "very"],
        correct: "most",
        explanation: "Para superlativos de adjetivos largos usamos 'most'. Siempre va con artículo 'the'. 'Most intelligent' significa 'más inteligente de todos'. El español 'la más inteligente' también usa artículo. Esta construcción celebra excelencia académica destacada. Reconocer a los mejores estudiantes motiva el logro y establece modelos a seguir."
      },
      {
        id: "comp_sup_adv_3",
        question: "My car is _____ than yours but uses less gas.",
        translation: "Mi auto es más rápido que el tuyo pero usa menos gasolina.",
        options: ["faster", "more fast", "fastest", "most fast"],
        correct: "faster",
        explanation: "Para adjetivos cortos (una sílaba) añadimos '-er' para comparativo: 'fast' se vuelve 'faster'. No usamos 'more' con adjetivos cortos. El español 'más rápido' siempre usa 'más'. La comparación con 'than yours' es estándar. Esta oración compara dos características: velocidad versus eficiencia, mostrando que cada auto tiene ventajas."
      },
      {
        id: "comp_sup_adv_4",
        question: "This is the _____ movie I've ever seen!",
        translation: "¡Esta es la mejor película que he visto!",
        options: ["best", "better", "good", "most good"],
        correct: "best",
        explanation: "El superlativo de 'good' es IRREGULAR: 'best' (no 'goodest'). Siempre con 'the'. La frase 'I've ever seen' enfatiza que es el mejor de todos los tiempos personales. El español 'la mejor' también es irregular. Esta forma expresa máxima aprobación y entusiasmo sobre una experiencia cinematográfica excepcional."
      },
      {
        id: "comp_sup_adv_5",
        question: "Today's weather is _____ than yesterday's weather.",
        translation: "El clima de hoy es peor que el de ayer.",
        options: ["worse", "more bad", "worst", "badder"],
        correct: "worse",
        explanation: "El comparativo de 'bad' es IRREGULAR: 'worse' (no 'badder' o 'more bad'). Esta irregularidad hay que memorizarla. El español 'peor' también es irregular. La comparación entre días muestra deterioro climático. Esta forma permite expresar decepción sobre empeoramiento de condiciones sin usar muchas palabras."
      },
      {
        id: "comp_sup_adv_6",
        question: "Mount Everest is the _____ mountain in the world.",
        translation: "El Monte Everest es la montaña más alta del mundo.",
        options: ["highest", "higher", "high", "most high"],
        correct: "highest",
        explanation: "Adjetivos cortos forman superlativo con '-est': 'high' se vuelve 'highest'. Siempre con artículo 'the'. El español 'la más alta' usa 'más'. Esta afirmación establece récord mundial geográfico. El Everest es símbolo de desafío máximo, y esta forma superlativa captura su estatus único como cumbre suprema."
      },
      {
        id: "comp_sup_adv_7",
        question: "This problem is _____ complicated than I thought.",
        translation: "Este problema es más complicado de lo que pensé.",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "Adjetivos largos como 'complicated' usan 'more' para comparativo. Comparamos con nuestras expectativas previas. El español 'más complicado' es paralelo. Esta estructura expresa cuando la realidad supera expectativas iniciales. Es común subestimar dificultad de tareas, y esta forma reconoce honestamente esa subestimación."
      },
      {
        id: "comp_sup_adv_8",
        question: "He runs _____ than anyone else on the team.",
        translation: "Él corre más rápido que cualquier otro en el equipo.",
        options: ["faster", "more fast", "fastest", "most fast"],
        correct: "faster",
        explanation: "Adverbios cortos forman comparativo igual que adjetivos: 'fast' añade '-er'. Describe CÓMO corre (adverbio no adjetivo). El español 'más rápido' funciona igual para adjetivo y adverbio. La comparación 'than anyone else' establece superioridad sobre todos. Este reconocimiento de velocidad superior motiva y celebra habilidad atlética."
      },
      {
        id: "comp_sup_adv_9",
        question: "This is the _____ expensive restaurant in town.",
        translation: "Este es el restaurante más caro del pueblo.",
        options: ["most", "more", "much", "very"],
        correct: "most",
        explanation: "Adjetivos largos como 'expensive' usan 'most' para superlativo. Siempre con 'the'. El español 'el más caro' es similar. Esta información advierte sobre precios altos. Conocer los restaurantes más caros ayuda a decidir dónde comer según presupuesto. La reputación de ser el más caro puede ser prestigio o advertencia."
      },
      {
        id: "comp_sup_adv_10",
        question: "My sister is three years _____ than me.",
        translation: "Mi hermana es tres años mayor que yo.",
        options: ["older", "more old", "oldest", "elder"],
        correct: "older",
        explanation: "El comparativo de 'old' para edad es 'older' (añade -er). Hay variante 'elder' pero es más formal y limitada. El español 'mayor' también es forma especial. Especificar la diferencia exacta de edad entre hermanos es común en presentaciones familiares. Esta información contextualiza la dinámica entre hermanos."
      },
      {
        id: "comp_sup_adv_11",
        question: "The _____ you practice, the better you'll become.",
        translation: "Mientras más practiques, mejor te volverás.",
        options: ["more", "most", "much", "many"],
        correct: "more",
        explanation: "La estructura 'The more...the better' muestra relación proporcional directa. Más práctica resulta en mejor habilidad. El español 'mientras más...mejor' funciona similar. Esta construcción es motivadora porque establece que el esfuerzo garantiza mejora. Es principio fundamental del aprendizaje que aplica a cualquier habilidad."
      },
      {
        id: "comp_sup_adv_12",
        question: "This book is _____ as interesting as the movie.",
        translation: "Este libro es tan interesante como la película.",
        options: ["just", "as", "so", "very"],
        correct: "just",
        explanation: "La estructura 'just as...as' significa 'tan...como' e indica igualdad exacta. 'Just' intensifica la igualdad. También podríamos usar solo 'as...as'. El español 'tan...como' es directo. Esta comparación equilibrada reconoce que tanto libro como película tienen mérito igual, sin favorecer uno sobre otro."
      },
      {
        id: "comp_sup_adv_13",
        question: "She speaks English _____ fluently than her brother.",
        translation: "Ella habla inglés más fluidamente que su hermano.",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "Adverbios que terminan en '-ly' usan 'more' para comparativo: 'more fluently'. El español 'más fluidamente' también usa 'más'. Esta comparación entre hermanos es común en familias donde ambos aprenden idiomas. Reconocer diferentes niveles de habilidad es parte natural del proceso de aprendizaje."
      },
      {
        id: "comp_sup_adv_14",
        question: "That was the _____ day of my entire life!",
        translation: "¡Ese fue el peor día de toda mi vida!",
        options: ["worst", "worse", "bad", "most bad"],
        correct: "worst",
        explanation: "El superlativo de 'bad' es IRREGULAR: 'worst' (no 'baddest'). Expresa el día más terrible experimentado. El español 'el peor' también es irregular. Esta hipérbole dramática comunica que fue día extremadamente difícil. Todos tenemos días malos ocasionales, y esta forma superlativa permite expresar la intensidad del sufrimiento."
      },
      {
        id: "comp_sup_adv_15",
        question: "My apartment is _____ comfortable than my old one.",
        translation: "Mi apartamento es menos cómodo que el anterior.",
        options: ["less", "least", "more", "most"],
        correct: "less",
        explanation: "Para inferioridad usamos 'less' (menos) con adjetivos largos. Es opuesto de 'more'. El español 'menos cómodo' es paralelo. Esta comparación expresa cierta nostalgia o descontento con la vivienda actual. Reconocer que un cambio no mejoró las cosas es honesto, y esta forma permite expresarlo con precisión."
      }
    ]
  }
};

export default part7Categories;