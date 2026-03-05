/**
 * SPANISH → ENGLISH GRAMMAR - PART 10
 * 4 categories, 15 questions each
 */

import { Box, Lightbulb, Crown, Zap } from "lucide-react";

export const part10Categories = {
  conditionals_mixed: {
    name: "Condicionales Mixtos",
    description: "Combinaciones de diferentes tipos condicionales",
    icon: Box,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "cond_mix_1",
        question: "If I had studied medicine, I _____ be a doctor now.",
        translation: "Si hubiera estudiado medicina, sería doctor ahora.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "Este es condicional mixto: condición pasada irreal (had studied) con resultado presente irreal (would be). La decisión del pasado afecta la realidad presente. En español también mezclamos tiempos: 'hubiera estudiado' (pasado) con 'sería' (presente). Esta estructura refleja cómo decisiones pasadas moldean nuestro presente actual."
      },
      {
        id: "cond_mix_2",
        question: "If she were more organized, she _____ _____ _____ so many things.",
        translation: "Si ella fuera más organizada, no habría perdido tantas cosas.",
        options: ["wouldn't have lost", "won't lose", "didn't lose", "wouldn't lose"],
        correct: "wouldn't have lost",
        explanation: "Condicional mixto inverso: condición presente irreal (were organized) con resultado pasado irreal (wouldn't have lost). Su falta actual de organización causó pérdidas pasadas. En español 'fuera' (presente subjuntivo) con 'no habría perdido' (condicional perfecto) también mezcla tiempos. Esta estructura conecta rasgos de personalidad con consecuencias históricas."
      },
      {
        id: "cond_mix_3",
        question: "If we had left earlier, we _____ be stuck in traffic now.",
        translation: "Si hubiéramos salido más temprano, no estaríamos atascados en el tráfico ahora.",
        options: ["wouldn't", "won't", "wouldn't have", "didn't"],
        correct: "wouldn't",
        explanation: "Condición pasada (had left) con resultado presente (wouldn't be). La decisión de salida tardía causa problema actual. En español 'hubiéramos salido' (pasado) con 'no estaríamos' (presente) mezcla tiempos. Esta estructura lamenta decisiones pasadas mientras experimentamos sus consecuencias molestas en el momento presente."
      },
      {
        id: "cond_mix_4",
        question: "If I were you, I _____ _____ _____ that job offer.",
        translation: "Si yo fuera tú, habría aceptado esa oferta de trabajo.",
        options: ["would have accepted", "will accept", "would accept", "had accepted"],
        correct: "would have accepted",
        explanation: "La frase hipotética 'if I were you' (condición irreal presente) con resultado pasado irreal (would have accepted). Das consejo retrospectivo sobre decisión pasada. En español 'si fuera tú' con 'habría aceptado' también da esta perspectiva alternativa. Esta forma permite criticar gentilmente decisiones pasadas ofreciendo qué habrías hecho diferente."
      },
      {
        id: "cond_mix_5",
        question: "If you had listened to me, you _____ have this problem now.",
        translation: "Si me hubieras escuchado, no tendrías este problema ahora.",
        options: ["wouldn't", "won't", "wouldn't have", "didn't"],
        correct: "wouldn't",
        explanation: "Condición pasada negativa (hadn't listened) con resultado presente negativo (wouldn't have). Tu rechazo pasado de mi consejo causó problema actual. En español 'hubieras escuchado' (pasado) con 'no tendrías' (presente) mezcla tiempos. Es forma de decir 'te lo advertí' conectando advertencia ignorada con problema actual."
      },
      {
        id: "cond_mix_6",
        question: "If he liked his job, he _____ _____ _____ it last month.",
        translation: "Si le gustara su trabajo, no lo habría dejado el mes pasado.",
        options: ["wouldn't have quit", "won't quit", "didn't quit", "wouldn't quit"],
        correct: "wouldn't have quit",
        explanation: "Condición presente irreal (liked) con resultado pasado (wouldn't have quit). Su disgusto actual explica renuncia pasada. En español 'si le gustara' (presente subjuntivo) con 'no habría dejado' (condicional perfecto) también mezcla. Esta estructura conecta sentimientos actuales con acciones pasadas que ya no pueden cambiarse."
      },
      {
        id: "cond_mix_7",
        question: "If I had known about the party, I _____ be here now.",
        translation: "Si hubiera sabido de la fiesta, estaría aquí ahora.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "Falta de información pasada (hadn't known) resulta en ausencia presente (would be here). La ignorancia pasada determina situación actual. En español 'hubiera sabido' (pasado) con 'estaría' (presente condicional) mezcla tiempos. Esta estructura explica ausencias actuales por falta de comunicación previa."
      },
      {
        id: "cond_mix_8",
        question: "If she were healthier, she _____ _____ _____ sick so often.",
        translation: "Si ella fuera más saludable, no se habría enfermado tan seguido.",
        options: ["wouldn't have gotten", "won't get", "didn't get", "wouldn't get"],
        correct: "wouldn't have gotten",
        explanation: "Estado presente irreal (were healthier) con resultado pasado (wouldn't have gotten). Su mala salud actual explica enfermedades frecuentes pasadas. En español 'si fuera' (presente) con 'no se habría enfermado' (pasado) también conecta estado crónico con episodios históricos. Esta estructura vincula condiciones de salud con su historial médico."
      },
      {
        id: "cond_mix_9",
        question: "If we had invested wisely, we _____ be rich now.",
        translation: "Si hubiéramos invertido sabiamente, seríamos ricos ahora.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "Decisión financiera pasada mala (hadn't invested) causa situación económica presente (wouldn't be rich). Es lamento sobre oportunidades económicas perdidas. En español 'hubiéramos invertido' (pasado) con 'seríamos' (presente) expresa mismo pesar. Esta estructura refleja arrepentimientos financieros donde malas decisiones pasadas afectan prosperidad actual."
      },
      {
        id: "cond_mix_10",
        question: "If you weren't so stubborn, you _____ _____ _____ that mistake.",
        translation: "Si no fueras tan terco, no habrías cometido ese error.",
        options: ["wouldn't have made", "won't make", "didn't make", "wouldn't make"],
        correct: "wouldn't have made",
        explanation: "Rasgo de personalidad presente (weren't stubborn) con consecuencia pasada (wouldn't have made). Tu terquedad actual explica error pasado. En español 'si no fueras' (presente) con 'no habrías cometido' (pasado) conecta carácter con acciones. Esta forma vincula defectos de personalidad persistentes con sus manifestaciones históricas."
      },
      {
        id: "cond_mix_11",
        question: "If I had taken that job, I _____ still be living abroad.",
        translation: "Si hubiera tomado ese trabajo, todavía estaría viviendo en el extranjero.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "Decisión laboral pasada (had taken) con situación de vida presente (would be living). El rechazo del trabajo determinó tu ubicación actual. En español 'hubiera tomado' (pasado) con 'estaría viviendo' (presente) también contempla camino no elegido. Esta estructura permite imaginar cómo sería la vida con decisiones diferentes."
      },
      {
        id: "cond_mix_12",
        question: "If he were taller, he _____ _____ _____ the basketball team.",
        translation: "Si él fuera más alto, habría entrado al equipo de básquetbol.",
        options: ["could have joined", "can join", "could join", "had joined"],
        correct: "could have joined",
        explanation: "Característica física presente inmutable (weren't taller) con oportunidad pasada perdida (couldn't have joined). Su altura actual explica rechazo pasado del equipo. En español 'si fuera' (presente) con 'habría entrado' (pasado) también lamenta esta limitación. Esta estructura reconoce cómo atributos permanentes afectan oportunidades disponibles."
      },
      {
        id: "cond_mix_13",
        question: "If we had bought tickets earlier, we _____ have good seats now.",
        translation: "Si hubiéramos comprado boletos antes, tendríamos buenos asientos ahora.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "Acción pasada (hadn't bought) determina situación presente mala (wouldn't have good seats). La procrastinación pasada causa asientos malos ahora. En español 'hubiéramos comprado' (pasado) con 'tendríamos' (presente) conecta demora con consecuencia actual. Esta estructura es común para lamentar no haber actuado con anticipación suficiente."
      },
      {
        id: "cond_mix_14",
        question: "If she knew how to swim, she _____ _____ _____ drowning.",
        translation: "Si supiera nadar, no habría estado a punto de ahogarse.",
        options: ["wouldn't have risked", "won't risk", "didn't risk", "wouldn't risk"],
        correct: "wouldn't have risked",
        explanation: "Falta de habilidad presente (doesn't know) con incidente pasado peligroso (wouldn't have risked). No saber nadar actualmente explica susto pasado. En español 'si supiera' (presente) con 'no habría estado' (pasado) también conecta carencia con evento. Esta estructura muestra cómo limitaciones actuales nos pusieron en riesgo históricamente."
      },
      {
        id: "cond_mix_15",
        question: "If I had won the lottery, I _____ still be working here.",
        translation: "Si hubiera ganado la lotería, no seguiría trabajando aquí.",
        options: ["wouldn't", "won't", "wouldn't have", "didn't"],
        correct: "wouldn't",
        explanation: "Evento pasado hipotético (had won lottery) con situación laboral presente (wouldn't be working). El no ganar explica por qué sigues en este trabajo. En español 'hubiera ganado' (pasado) con 'no seguiría trabajando' (presente) también fantasea sobre independencia financiera. Esta estructura común refleja sueños de escape del trabajo actual."
      }
    ]
  },

  emphasis_structures: {
    name: "Estructuras Enfáticas",
    description: "Do/does/did para énfasis - destacar acciones",
    icon: Lightbulb,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "emph_1",
        question: "I _____ like your new haircut - it looks great!",
        translation: "Sí me gusta tu nuevo corte de cabello - ¡se ve genial!",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "Añadir 'do' antes del verbo principal enfatiza la afirmación. 'I do like' es más fuerte que solo 'I like'. Esto contradice una negación previa o duda. En español podríamos decir 'sí me gusta' con énfasis en 'sí'. Esta estructura es útil para corregir malentendidos o asegurar a alguien que realmente apreciamos algo."
      },
      {
        id: "emph_2",
        question: "She _____ finish her work on time yesterday.",
        translation: "Ella sí terminó su trabajo a tiempo ayer.",
        options: ["did", "does", "do", "was"],
        correct: "did",
        explanation: "En pasado usamos 'did' para énfasis antes del verbo en forma base. 'Did finish' contradice duda sobre si completó. Es afirmación enfática de logro. En español 'sí terminó' con énfasis vocal en 'sí' funciona similar. Esta forma defiende el cumplimiento de alguien cuando su esfuerzo es cuestionado injustamente."
      },
      {
        id: "emph_3",
        question: "He _____ know how to play the guitar very well.",
        translation: "Él sí sabe tocar la guitarra muy bien.",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "Para tercera persona singular usamos 'does' enfático. 'Does know' es más fuerte que 'knows'. Esto contradice subestimación de su habilidad. En español 'sí sabe' con énfasis vocal también afirma capacidad. Esta estructura defiende las habilidades de alguien contra dudas o cuando su talento ha sido minimizado."
      },
      {
        id: "emph_4",
        question: "I _____ want to go to the party, I'm just tired.",
        translation: "Sí quiero ir a la fiesta, solo estoy cansado.",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "Aquí 'do want' enfatiza que el deseo existe a pesar de parecer lo contrario. Esto clarifica que el cansancio no significa falta de interés. En español enfatizamos 'sí quiero' vocalmente. Esta forma es valiosa para aclarar que nuestras acciones (no ir) no reflejan nuestros sentimientos (sí querer ir)."
      },
      {
        id: "emph_5",
        question: "We _____ appreciate your help with this project.",
        translation: "Sí apreciamos tu ayuda con este proyecto.",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "Usar 'do appreciate' enfatiza gratitud sincera. Es afirmación más cálida que simple 'appreciate'. Esto asegura que la ayuda no pasó desapercibida. En español 'sí apreciamos' con énfasis también transmite gratitud genuina. Esta estructura fortalece expresiones de agradecimiento cuando queremos que la persona sepa cuánto valoramos su apoyo."
      },
      {
        id: "emph_6",
        question: "They _____ arrive late, but they called to let us know.",
        translation: "Sí llegaron tarde, pero llamaron para avisarnos.",
        options: ["did", "do", "does", "were"],
        correct: "did",
        explanation: "El 'did arrive' enfatiza que el evento ocurrió a pesar de ser negativo. Reconoce la tardanza pero también su cortesía de avisar. En español 'sí llegaron tarde' admite el problema. Esta forma equilibra crítica con reconocimiento de consideración, útil para feedback constructivo que reconoce tanto fallas como esfuerzos positivos."
      },
      {
        id: "emph_7",
        question: "She _____ love chocolate - she eats it every day!",
        translation: "A ella sí le encanta el chocolate - ¡lo come todos los días!",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "El énfasis 'does love' subraya la intensidad del gusto. La evidencia diaria refuerza la afirmación. En español 'sí le encanta' o 'realmente le encanta' añaden intensidad. Esta estructura permite defender afirmaciones sobre gustos de otros cuando tenemos evidencia observable clara de sus preferencias."
      },
      {
        id: "emph_8",
        question: "I _____ understand your point, I just disagree.",
        translation: "Sí entiendo tu punto, solo estoy en desacuerdo.",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "El 'do understand' aclara que la comprensión existe aunque haya desacuerdo. Separa entendimiento de acuerdo. En español 'sí entiendo' también hace esta distinción crucial. Esta forma es diplomática en debates, mostrando que escuchaste y comprendiste pero mantienes posición diferente, evitando que te acusen de no entender."
      },
      {
        id: "emph_9",
        question: "He _____ call you yesterday - check your phone.",
        translation: "Él sí te llamó ayer - revisa tu teléfono.",
        options: ["did", "do", "does", "was"],
        correct: "did",
        explanation: "El 'did call' enfatiza que la llamada ocurrió contra la creencia de que no. Esto defiende a alguien acusado de no llamar. En español 'sí te llamó' también defiende. Esta estructura es útil cuando alguien no recibió mensaje o llamada que definitivamente se hizo, sugiriendo revisar nuevamente."
      },
      {
        id: "emph_10",
        question: "We _____ try our best even when things are difficult.",
        translation: "Sí nos esforzamos al máximo incluso cuando las cosas son difíciles.",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "El énfasis 'do try' afirma esfuerzo genuino a pesar de resultados imperfectos. Esto defiende la intención contra críticas sobre desempeño. En español 'sí nos esforzamos' también valida el intento. Esta forma permite reconocer que aunque los resultados no sean perfectos, el esfuerzo honesto está presente."
      },
      {
        id: "emph_11",
        question: "She _____ remember to lock the door last night.",
        translation: "Ella sí recordó cerrar la puerta anoche.",
        options: ["did", "do", "does", "was"],
        correct: "did",
        explanation: "El 'did remember' enfatiza que la acción de seguridad se completó. Esto tranquiliza preocupaciones sobre haber dejado la casa vulnerable. En español 'sí recordó' también asegura. Esta estructura es reconfortante cuando alguien duda si cumplió responsabilidad de seguridad importante, confirmando que todo está bien."
      },
      {
        id: "emph_12",
        question: "I _____ believe you're telling the truth.",
        translation: "Sí creo que estás diciendo la verdad.",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "El 'do believe' expresa confianza enfática en la honestidad de alguien. Esto es apoyo emocional importante cuando alguien se siente no creído. En español 'sí creo' o 'sí te creo' con énfasis transmite esta fe. Esta forma valida a personas que han sido dudadas, ofreciendo el regalo de confianza."
      },
      {
        id: "emph_13",
        question: "They _____ make mistakes, but they always learn from them.",
        translation: "Sí cometen errores, pero siempre aprenden de ellos.",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "El 'do make' admite que los errores ocurren pero enfatiza el aprendizaje. Es reconocimiento honesto balanceado con aspecto positivo. En español 'sí cometen' admite imperfección. Esta estructura permite feedback constructivo que reconoce errores sin ser devastador, enfocándose en crecimiento."
      },
      {
        id: "emph_14",
        question: "He _____ seem tired lately - maybe he needs rest.",
        translation: "Sí se ve cansado últimamente - quizás necesita descanso.",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "El énfasis 'does seem' valida una observación sobre el estado de alguien. Esto confirma que otros también han notado el cansancio. En español 'sí se ve' también valida la percepción. Esta forma es útil en conversaciones donde queremos confirmar observaciones sobre la salud o bienestar de alguien, mostrando que nuestra preocupación está justificada."
      },
      {
        id: "emph_15",
        question: "I _____ hope you'll reconsider your decision.",
        translation: "Sí espero que reconsideres tu decisión.",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "El 'do hope' intensifica una súplica o deseo fuerte. Es apelación emocional más intensa que simple 'hope'. En español 'de verdad espero' o 'realmente espero' añaden intensidad similar. Esta estructura se usa cuando queremos enfatizar cuánto nos importa que alguien cambie de opinión sobre algo significativo."
      }
    ]
  },

  inversion_questions: {
    name: "Inversión en Preguntas",
    description: "Rarely, seldom, never - inversión con adverbios negativos",
    icon: Crown,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "inv_1",
        question: "Rarely _____ I seen such a beautiful sunset.",
        translation: "Rara vez he visto un atardecer tan hermoso.",
        options: ["have", "I have", "do I", "am I"],
        correct: "have",
        explanation: "Cuando empezamos oración con adverbio negativo como 'rarely', invertimos sujeto y auxiliar: 'have I' (no 'I have'). Esta inversión es formal y literaria. En español mantenemos orden normal 'rara vez he visto'. Esta estructura añade drama y énfasis a declaraciones, haciéndolas más impactantes y memorables."
      },
      {
        id: "inv_2",
        question: "Never _____ _____ been so embarrassed in my life!",
        translation: "¡Nunca había estado tan avergonzado en mi vida!",
        options: ["have I", "I have", "I am", "am I"],
        correct: "have I",
        explanation: "Con 'never' al inicio, invertimos: 'have I been' (no 'I have been'). Esta inversión enfatiza la intensidad de la vergüenza. Es estructura dramática. En español 'nunca había estado' mantiene orden normal. El inglés formal usa esta inversión para expresiones extremas que queremos destacar con máxima fuerza retórica."
      },
      {
        id: "inv_3",
        question: "Seldom _____ he go to bed before midnight.",
        translation: "Rara vez se acuesta antes de medianoche.",
        options: ["does", "do", "is", "has"],
        correct: "does",
        explanation: "Con 'seldom' (rara vez) invertimos usando auxiliar 'does' con tercera persona. El verbo principal queda en forma base 'go'. En español 'rara vez se acuesta' es orden normal. Esta estructura formal del inglés añade sofisticación a la crítica de malos hábitos de sueño, sonando más literaria que directa."
      },
      {
        id: "inv_4",
        question: "Not only _____ she speak English, but she also speaks French.",
        translation: "No solo habla inglés, sino que también habla francés.",
        options: ["does", "do", "is", "has"],
        correct: "does",
        explanation: "La estructura 'not only' al inicio requiere inversión: 'does she speak'. La segunda parte 'but also' mantiene orden normal. Esta construcción presenta habilidades de manera impresionante. En español 'no solo habla' mantiene orden normal. El inglés usa inversión para enfatizar que sus habilidades lingüísticas van más allá de lo esperado."
      },
      {
        id: "inv_5",
        question: "Little _____ he know about the surprise party we planned.",
        translation: "Poco sabía sobre la fiesta sorpresa que planeamos.",
        options: ["did", "does", "is", "has"],
        correct: "did",
        explanation: "Con 'little' (poco) que implica casi nada (negativo), invertimos: 'did he know'. Esta estructura dramática es común en narrativas. En español 'poco sabía' es orden normal. El inglés usa esta inversión para crear suspenso en historias, enfatizando la ignorancia de alguien sobre secretos o sorpresas preparadas."
      },
      {
        id: "inv_6",
        question: "Under no circumstances _____ you open that door!",
        translation: "¡Bajo ninguna circunstancia abras esa puerta!",
        options: ["should", "you should", "do you", "are you"],
        correct: "should",
        explanation: "La frase negativa enfática 'under no circumstances' al inicio causa inversión: 'should you' (no 'you should'). Esto es advertencia muy seria. En español el imperativo negativo '¡no abras!' es directo. Esta inversión inglesa añade gravedad extrema a prohibiciones absolutas donde la desobediencia podría ser peligrosa."
      },
      {
        id: "inv_7",
        question: "Only after the exam _____ I realize my mistake.",
        translation: "Solo después del examen me di cuenta de mi error.",
        options: ["did", "I did", "do I", "I do"],
        correct: "did",
        explanation: "Cuando 'only' empieza expresión de tiempo, invertimos: 'did I realize'. Esta estructura enfatiza el timing del descubrimiento. En español 'me di cuenta' es orden normal. La inversión inglesa subraya lo tarde que llegó la comprensión, añadiendo elemento de frustración temporal a la realización."
      },
      {
        id: "inv_8",
        question: "Hardly _____ we arrived when the rain started pouring.",
        translation: "Apenas habíamos llegado cuando empezó a llover fuertemente.",
        options: ["had", "we had", "did we", "have we"],
        correct: "had",
        explanation: "Con 'hardly' (apenas) al inicio invertimos: 'had we arrived'. Esta estructura enfatiza lo justo del tiempo. En español 'apenas habíamos llegado' mantiene orden. La inversión inglesa dramatiza la coincidencia de timing casi perfecto entre dos eventos, creando narrativa más vívida."
      },
      {
        id: "inv_9",
        question: "Not until yesterday _____ I understand the truth.",
        translation: "No fue hasta ayer que entendí la verdad.",
        options: ["did", "I did", "do I", "I do"],
        correct: "did",
        explanation: "La frase 'not until' al inicio causa inversión: 'did I understand'. Esto enfatiza lo tardía que llegó la comprensión. En español 'no fue hasta' o 'solo ayer' son opciones. Esta estructura dramática es perfecta para revelar momentos de revelación o epifanías que llegaron después de largo tiempo de confusión."
      },
      {
        id: "inv_10",
        question: "Nowhere _____ you find better prices than here!",
        translation: "¡En ningún lugar encontrarás mejores precios que aquí!",
        options: ["will", "you will", "do you", "can you"],
        correct: "will",
        explanation: "El adverbio negativo 'nowhere' (en ningún lugar) al inicio causa inversión: 'will you find'. Esta es afirmación publicitaria enfática. En español '¡en ningún lugar encontrarás!' es orden normal. La inversión inglesa añade fuerza persuasiva a promesas comerciales sobre superioridad de ofertas."
      },
      {
        id: "inv_11",
        question: "Scarcely _____ she finished speaking when everyone applauded.",
        translation: "Apenas había terminado de hablar cuando todos aplaudieron.",
        options: ["had", "she had", "did she", "has she"],
        correct: "had",
        explanation: "Con 'scarcely' (apenas) invertimos: 'had she finished'. Esta estructura dramática enfatiza inmediatez de la reacción. En español 'apenas había terminado' mantiene orden normal. La inversión crea narrativa cinematográfica donde el aplauso explosivo siguió inmediatamente al final del discurso."
      },
      {
        id: "inv_12",
        question: "No sooner _____ I sat down than the phone rang.",
        translation: "No más me senté cuando sonó el teléfono.",
        options: ["had", "I had", "did I", "have I"],
        correct: "had",
        explanation: "La estructura fija 'no sooner...than' requiere inversión: 'had I sat'. Esto describe dos eventos casi simultáneos. En español 'no más me senté' o 'apenas me senté' son normales. Esta forma inglesa enfatiza lo frustrante de interrupciones que llegan en el peor momento posible."
      },
      {
        id: "inv_13",
        question: "At no time _____ he mention your name in the meeting.",
        translation: "En ningún momento mencionó tu nombre en la reunión.",
        options: ["did", "he did", "does he", "he does"],
        correct: "did",
        explanation: "La frase negativa 'at no time' al inicio requiere inversión: 'did he mention'. Esta afirmación enfática asegura ausencia total de menciones. En español 'en ningún momento mencionó' es normal. Esta forma es útil para tranquilizar a alguien preocupado de que se habló de ellos negativamente."
      },
      {
        id: "inv_14",
        question: "Not once _____ she complain during the entire trip.",
        translation: "Ni una sola vez se quejó durante todo el viaje.",
        options: ["did", "she did", "does she", "she does"],
        correct: "did",
        explanation: "Con 'not once' (ni una vez) invertimos: 'did she complain'. Esta estructura enfatiza actitud positiva admirable. En español 'ni una sola vez se quejó' es normal. La inversión inglesa magnifica el elogio, destacando cuán notable es mantener actitud positiva durante viaje potencialmente difícil."
      },
      {
        id: "inv_15",
        question: "Only then _____ I realize how much I loved her.",
        translation: "Solo entonces me di cuenta de cuánto la amaba.",
        options: ["did", "I did", "do I", "I do"],
        correct: "did",
        explanation: "Con 'only then' al inicio invertimos: 'did I realize'. Esta estructura marca momento crucial de comprensión emocional tardía. En español 'solo entonces me di cuenta' es normal. La inversión inglesa añade peso dramático a revelaciones sentimentales que llegaron demasiado tarde, típico en narrativas románticas de oportunidades perdidas."
      }
    ]
  },

  question_tags_advanced: {
    name: "Question Tags Avanzados",
    description: "Casos especiales y excepciones en confirmaciones",
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "tag_adv_1",
        question: "Let's have dinner together, _____ _____?",
        translation: "Cenemos juntos, ¿sí?",
        options: ["shall we", "will we", "do we", "are we"],
        correct: "shall we",
        explanation: "Después de sugerencias con 'Let's' el tag SIEMPRE es 'shall we'. Esta es excepción fija que no sigue reglas normales. En español '¿sí?' o '¿te parece?' funcionan universalmente. Esta forma convierte propuesta en consulta colaborativa donde ambas partes tienen voz en la decisión sobre planes sociales."
      },
      {
        id: "tag_adv_2",
        question: "I'm late for the meeting, _____ _____?",
        translation: "Llego tarde a la reunión, ¿verdad?",
        options: ["aren't I", "am not I", "am I", "isn't I"],
        correct: "aren't I",
        explanation: "Con 'I am' el tag es irregular 'aren't I' (no lógico 'am not I'). Esta excepción histórica es común. En formal británico usan 'am I not' pero 'aren't I' es universal. En español '¿verdad?' o '¿no?' son simples. Esta irregularidad es una de varias curiosidades gramaticales inglesas que simplemente hay que memorizar."
      },
      {
        id: "tag_adv_3",
        question: "Nothing happened while I was gone, _____ _____?",
        translation: "Nada pasó mientras estuve fuera, ¿verdad?",
        options: ["did it", "didn't it", "did nothing", "didn't nothing"],
        correct: "did it",
        explanation: "Palabras negativas como 'nothing' hacen la oración negativa, por eso el tag es positivo 'did it'. El sujeto 'nothing' se convierte en 'it' en el tag. En español 'nada pasó, ¿verdad?' es directo. Esta pregunta busca tranquilidad de que todo estuvo bien durante ausencia."
      },
      {
        id: "tag_adv_4",
        question: "Everyone enjoyed the party, _____ _____?",
        translation: "Todos disfrutaron la fiesta, ¿no?",
        options: ["didn't they", "did they", "didn't everyone", "did everyone"],
        correct: "didn't they",
        explanation: "La palabra 'everyone' (singular gramaticalmente) se convierte en 'they' (plural) en el tag. Esta es convención del inglés moderno que prefiere plural para incluir a todos. En español 'todos disfrutaron, ¿no?' es consistente. El tag busca confirmación de que el evento fue éxito universal para todos los asistentes."
      },
      {
        id: "tag_adv_5",
        question: "There weren't any problems with the order, _____ _____?",
        translation: "No hubo ningún problema con la orden, ¿verdad?",
        options: ["were there", "weren't there", "was there", "wasn't there"],
        correct: "were there",
        explanation: "Negativo 'weren't' se vuelve positivo 'were there' en el tag. Con 'there is/are' el tag usa 'there' también. El plural 'problems' requiere 'were'. En español 'no hubo problemas, ¿verdad?' es normal. Esta pregunta busca confirmación de que transacción o servicio estuvo libre de complicaciones."
      },
      {
        id: "tag_adv_6",
        question: "Somebody left their umbrella here, _____ _____?",
        translation: "Alguien dejó su paraguas aquí, ¿no?",
        options: ["didn't they", "did they", "didn't somebody", "did somebody"],
        correct: "didn't they",
        explanation: "La palabra indefinida 'somebody' se convierte en 'they' en el tag. Aunque 'somebody' es singular, usamos plural 'they' por neutralidad de género. En español 'alguien dejó, ¿no?' mantiene singular. Esta pregunta busca identificar al dueño del objeto olvidado para devolverlo."
      },
      {
        id: "tag_adv_7",
        question: "None of them speaks English, _____ _____?",
        translation: "Ninguno de ellos habla inglés, ¿verdad?",
        options: ["do they", "don't they", "does he", "doesn't he"],
        correct: "do they",
        explanation: "Aunque 'none' es negativo, gramaticalmente puede tomar verbo singular o plural. Aquí 'speaks' es singular pero el tag usa plural 'they' por 'them'. Negativo 'none' hace tag positivo 'do they'. Esta pregunta verifica barrera idiomática en grupo, importante para planificar comunicación."
      },
      {
        id: "tag_adv_8",
        question: "This is your first time here, _____ _____?",
        translation: "Esta es tu primera vez aquí, ¿cierto?",
        options: ["isn't it", "is it", "aren't you", "are you"],
        correct: "isn't it",
        explanation: "El sujeto 'this' (no 'you') determina el tag 'isn't it'. Aunque hablamos de experiencia de 'you', el sujeto gramatical es 'this'. En español 'es tu primera vez, ¿cierto?' es más directo. Esta pregunta muestra interés en la experiencia del visitante y ofrece potencialmente ayudar u orientar."
      },
      {
        id: "tag_adv_9",
        question: "These books belong to the library, _____ _____?",
        translation: "Estos libros pertenecen a la biblioteca, ¿verdad?",
        options: ["don't they", "do they", "doesn't it", "does it"],
        correct: "don't they",
        explanation: "El sujeto plural 'books' requiere tag 'don't they'. El verbo 'belong' es presente simple. Esta pregunta confirma propiedad institucional. En español 'pertenecen, ¿verdad?' es normal. Verificar propiedad es importante antes de tomar libros para asegurar que podemos llevarlos o si deben permanecer."
      },
      {
        id: "tag_adv_10",
        question: "He'd rather stay home tonight, _____ _____?",
        translation: "Él preferiría quedarse en casa esta noche, ¿no?",
        options: ["wouldn't he", "would he", "doesn't he", "does he"],
        correct: "wouldn't he",
        explanation: "La contracción 'he'd rather' significa 'he would rather' (preferiría). El tag es 'wouldn't he'. Esto confirma preferencia por quedarse. En español 'preferiría, ¿no?' también consulta. Esta estructura cortés reconoce que aunque tal vez haya planes, respetar preferencia personal de descanso es también válido."
      },
      {
        id: "tag_adv_11",
        question: "You'd better leave now, _____ _____?",
        translation: "Será mejor que te vayas ahora, ¿no?",
        options: ["hadn't you", "had you", "wouldn't you", "would you"],
        correct: "hadn't you",
        explanation: "La expresión 'you'd better' (deberías/mejor que) técnicamente viene de 'you had better', por eso el tag es 'hadn't you'. Esta es forma arcaica pero estándar. Es advertencia fuerte pero educada. En español 'será mejor que' también aconseja firmemente. Esta estructura es más fuerte que simple sugerencia."
      },
      {
        id: "tag_adv_12",
        question: "He's never been to Asia before, _____ _____?",
        translation: "Él nunca ha estado en Asia antes, ¿verdad?",
        options: ["has he", "hasn't he", "is he", "isn't he"],
        correct: "has he",
        explanation: "La palabra 'never' hace la oración negativa, por eso tag es positivo 'has he'. Aunque la contracción 'he's' parece 'is', aquí es 'has' (presente perfecto). En español 'nunca ha estado, ¿verdad?' es normal. Esta pregunta confirma que será primera experiencia en continente nuevo."
      },
      {
        id: "tag_adv_13",
        question: "There's hardly anyone here today, _____ _____?",
        translation: "Casi no hay nadie aquí hoy, ¿verdad?",
        options: ["is there", "isn't there", "are there", "aren't there"],
        correct: "is there",
        explanation: "La palabra 'hardly' (apenas/casi no) es negativa, haciendo tag positivo 'is there'. Aunque 'anyone' es singular, 'there's' determina el tag. En español 'casi no hay nadie, ¿verdad?' es normal. Esta observación sobre baja asistencia puede expresar decepción o extrañeza sobre el día inusualmente vacío."
      },
      {
        id: "tag_adv_14",
        question: "You used to live in London, _____ _____?",
        translation: "Solías vivir en Londres, ¿cierto?",
        options: ["didn't you", "used you", "usedn't you", "did you"],
        correct: "didn't you",
        explanation: "Con 'used to' el tag es 'didn't you' (no 'used you' o arcaico 'usedn't you'). Esta es forma estándar moderna. En español 'solías vivir, ¿cierto?' es normal. Esta pregunta inicia conversación sobre experiencias pasadas de vida, potencialmente compartiendo memorias o conexiones sobre lugares comunes."
      },
      {
        id: "tag_adv_15",
        question: "Nobody likes to wait in long lines, _____ _____?",
        translation: "A nadie le gusta esperar en filas largas, ¿verdad?",
        options: ["do they", "don't they", "does he", "doesn't he"],
        correct: "do they",
        explanation: "El sujeto negativo 'nobody' hace tag positivo. 'Nobody' se convierte en 'they' (plural neutro). En español 'a nadie le gusta, ¿verdad?' es normal. Esta afirmación sobre frustración universal con filas busca solidaridad compartida en experiencia molesta común que todos reconocemos y detestamos."
      }
    ]
  }
};

export default part10Categories;