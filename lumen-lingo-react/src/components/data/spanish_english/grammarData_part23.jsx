/**
 * SPANISH → ENGLISH GRAMMAR - PART 23
 * 3 categories, 15 questions each
 */

import { Zap, Star, Heart } from "lucide-react";

export const part23Categories = {
  countable_uncountable_advanced: {
    name: "Contables e Incontables Avanzado",
    description: "Casos especiales y palabras engañosas - sutilezas importantes",
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "count_adv_1",
        question: "Can I give you _____ advice about your situation?",
        translation: "¿Puedo darte un consejo sobre tu situación?",
        options: ["some", "an", "a", "advices"],
        correct: "some",
        explanation: "La palabra 'advice' (consejo) es INCONTABLE en inglés, nunca 'advices' ni 'an advice'. Usamos 'some advice' o 'a piece of advice'. En español 'un consejo' es contable singular. Esta es diferencia crucial: inglés trata 'advice' como sustancia no como unidades, requiriendo 'some' no artículo."
      },
      {
        id: "count_adv_2",
        question: "I need to buy _____ new furniture for my apartment soon.",
        translation: "Necesito comprar muebles nuevos para mi apartamento pronto.",
        options: ["some", "a", "furnitures", "an"],
        correct: "some",
        explanation: "La palabra 'furniture' (muebles) es INCONTABLE en inglés, nunca plural 'furnitures'. Usamos 'some furniture' o 'a piece of furniture' para uno. En español 'muebles' es plural contable. Esta diferencia confunde porque en español podemos contar muebles individuales pero inglés los trata como categoría colectiva."
      },
      {
        id: "count_adv_3",
        question: "She gave me _____ useful information about the job yesterday.",
        translation: "Ella me dio información útil sobre el trabajo ayer.",
        options: ["some", "an", "informations", "a"],
        correct: "some",
        explanation: "La palabra 'information' es INCONTABLE, nunca 'informations' ni 'an information'. Usamos 'some information'. En español 'información' también es incontable singular. Esta orientación laboral útil compartida generosamente puede ser factor decisivo en decisión sobre aceptar posición o no."
      },
      {
        id: "count_adv_4",
        question: "We had _____ beautiful weather during our vacation week.",
        translation: "Tuvimos clima hermoso durante nuestra semana de vacaciones.",
        options: ["-", "a", "weathers", "some"],
        correct: "-",
        explanation: "La palabra 'weather' (clima) es INCONTABLE y NO lleva artículo en general: 'beautiful weather' sin 'a' ni 'the'. En español 'clima hermoso' tampoco lleva artículo típicamente. Este clima perfecto durante vacaciones es bendición que permite disfrutar plenamente de actividades al aire libre planeadas."
      },
      {
        id: "count_adv_5",
        question: "I need _____ new luggage for my upcoming trip abroad.",
        translation: "Necesito equipaje nuevo para mi próximo viaje al extranjero.",
        options: ["some", "a", "luggages", "an"],
        correct: "some",
        explanation: "La palabra 'luggage' (equipaje) es INCONTABLE, nunca 'luggages'. Usamos 'some luggage' o 'a piece of luggage'. En español 'equipaje' también es incontable aunque 'maletas' es contable. Esta compra de equipaje nuevo sugiere que el viejo está dañado o que viaje requiere tipo específico de maletas."
      },
      {
        id: "count_adv_6",
        question: "He's making good _____ learning the new software program.",
        translation: "Él está haciendo buen progreso aprendiendo el nuevo programa de software.",
        options: ["progress", "a progress", "progresses", "the progress"],
        correct: "progress",
        explanation: "La palabra 'progress' (progreso) es INCONTABLE, no lleva artículo: 'making good progress'. En español 'buen progreso' también es incontable. Esta mejora en dominar software nuevo muestra que dedicó tiempo a aprender herramienta que mejorará su productividad laboral."
      },
      {
        id: "count_adv_7",
        question: "Could you give me _____ _____ of paper, please?",
        translation: "¿Podrías darme una hoja de papel, por favor?",
        options: ["a piece", "a sheet", "some", "a"],
        correct: "a sheet",
        explanation: "Aunque 'paper' es incontable, para HOJA específica usamos 'a sheet of paper'. También 'a piece of paper' funciona. En español 'una hoja' es contable. Esta petición de material de escritura único muestra necesidad inmediata de anotar algo rápidamente."
      },
      {
        id: "count_adv_8",
        question: "They're doing _____ research on climate change currently.",
        translation: "Están haciendo investigación sobre cambio climático actualmente.",
        options: ["-", "a", "researches", "some"],
        correct: "-",
        explanation: "La palabra 'research' (investigación) es INCONTABLE como actividad general: 'doing research' sin artículo. En español 'investigación' también puede ser incontable. Este trabajo científico sobre tema crucial de cambio climático contribuye a comprensión colectiva de crisis ambiental."
      },
      {
        id: "count_adv_9",
        question: "I'd like _____ glass of water, please - I'm thirsty.",
        translation: "Quisiera un vaso de agua, por favor - tengo sed.",
        options: ["a", "some", "an", "waters"],
        correct: "a",
        explanation: "Aunque 'water' es incontable, para PORCIÓN servida usamos 'a glass of water': el contenedor es contable. En español 'un vaso de agua' también cuenta el recipiente. Esta petición de hidratación muestra sed que necesita satisfacerse inmediatamente."
      },
      {
        id: "count_adv_10",
        question: "She got _____ job at the new company last month finally.",
        translation: "Ella consiguió trabajo en la nueva compañía el mes pasado finalmente.",
        options: ["a", "some", "works", "an"],
        correct: "a",
        explanation: "La palabra 'job' (trabajo como puesto) es CONTABLE: 'a job'. Pero 'work' (trabajo como actividad) es incontable. En español 'trabajo' puede ser ambos. Esta oferta laboral después de búsqueda (sugerida por 'finally') trae alivio y nueva etapa profesional."
      },
      {
        id: "count_adv_11",
        question: "We need _____ equipment for the science experiment tomorrow.",
        translation: "Necesitamos equipo para el experimento científico mañana.",
        options: ["some", "an", "equipments", "a"],
        correct: "some",
        explanation: "La palabra 'equipment' (equipo/equipamiento) es INCONTABLE, nunca 'equipments'. Usamos 'some equipment'. En español 'equipo' es incontable colectivo. Esta necesidad de herramientas científicas para experimento requiere planificación y verificar que laboratorio tiene todo necesario antes de clase."
      },
      {
        id: "count_adv_12",
        question: "He's had _____ bad luck lately with everything attempted.",
        translation: "Él ha tenido mala suerte últimamente con todo lo intentado.",
        options: ["-", "a", "lucks", "some"],
        correct: "-",
        explanation: "La palabra 'luck' (suerte) es INCONTABLE: 'bad luck' sin artículo. En español 'mala suerte' tampoco lleva artículo. Esta racha de mala fortuna donde todo sale mal es frustrante y puede hacer sentir que universo conspira contra ti."
      },
      {
        id: "count_adv_13",
        question: "I bought _____ _____ of bread at the bakery this morning.",
        translation: "Compré un pan en la panadería esta mañana.",
        options: ["a loaf", "a bread", "some", "breads"],
        correct: "a loaf",
        explanation: "Aunque 'bread' es incontable, para UNIDAD completa usamos 'a loaf of bread': el pan entero. En español 'un pan' es contable. Esta compra matutina de pan fresco es placer simple especialmente si panadería es artesanal con aroma tentador."
      },
      {
        id: "count_adv_14",
        question: "She needs _____ accommodation for her stay in the city.",
        translation: "Ella necesita alojamiento para su estancia en la ciudad.",
        options: ["some", "an", "accommodations", "a"],
        correct: "some",
        explanation: "La palabra 'accommodation' (alojamiento) es INCONTABLE en singular, aunque 'accommodations' existe en plural americano. En británico es 'some accommodation'. En español 'alojamiento' también es incontable. Esta búsqueda de lugar donde quedarse es necesidad práctica inmediata para visitante temporal."
      },
      {
        id: "count_adv_15",
        question: "They shared _____ news about their engagement with family yesterday.",
        translation: "Ellos compartieron las noticias sobre su compromiso con la familia ayer.",
        options: ["the", "a", "some", "newses"],
        correct: "the",
        explanation: "La palabra 'news' es INCONTABLE singular aunque parece plural: 'the news' no 'a news'. En español 'las noticias' es plural. Este anuncio de compromiso a familia es momento emotivo importante que probablemente generó celebración y felicitaciones de seres queridos."
      }
    ]
  },

  subjunctive_suggestions: {
    name: "Subjuntivo en Sugerencias",
    description: "I suggest/recommend/insist that + subjuntivo - estructuras formales",
    icon: Star,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "subj_sug_1",
        question: "I suggest that he _____ a doctor immediately for checkup.",
        translation: "Sugiero que él vea a un doctor inmediatamente para chequeo.",
        options: ["see", "sees", "saw", "seeing"],
        correct: "see",
        explanation: "Después de 'suggest that' usamos SUBJUNTIVO (forma base del verbo sin 's'): 'suggest that he see'. Es muy formal. En español 'sugiero que vea' usa subjuntivo completo. Esta forma gramatical inglesa elimina la 's' de tercera persona, creando estructura especial para recomendaciones formales."
      },
      {
        id: "subj_sug_2",
        question: "The doctor recommended that she _____ more rest daily.",
        translation: "El doctor recomendó que ella descanse más diariamente.",
        options: ["get", "gets", "got", "getting"],
        correct: "get",
        explanation: "Después de 'recommend that' usamos forma base: 'recommend that she get rest'. No 'gets' con 's'. En español 'recomendó que descanse' usa subjuntivo. Esta prescripción médica de descanso es tratamiento común para estrés o fatiga que requiere cambios de estilo de vida."
      },
      {
        id: "subj_sug_3",
        question: "They insisted that we _____ present at the ceremony tomorrow.",
        translation: "Ellos insistieron en que estemos presentes en la ceremonia mañana.",
        options: ["be", "are", "were", "being"],
        correct: "be",
        explanation: "Después de 'insist that' usamos forma base del verbo 'be': 'insist that we be present'. Es 'be' para todas las personas. En español 'insistieron en que estemos' usa subjuntivo. Esta exigencia de asistencia sugiere que evento es suficientemente importante para requerir presencia obligatoria."
      },
      {
        id: "subj_sug_4",
        question: "I propose that the meeting _____ rescheduled for next week.",
        translation: "Propongo que la reunión sea reprogramada para la próxima semana.",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "Después de 'propose that' con voz pasiva usamos 'be': 'propose that meeting be rescheduled'. Es forma base de verbo 'be'. En español 'propongo que sea' también usa subjuntivo pasivo. Esta sugerencia de cambio de fecha probablemente responde a conflictos de agenda o necesidad de más preparación."
      },
      {
        id: "subj_sug_5",
        question: "She demanded that he _____ an apology for his behavior.",
        translation: "Ella exigió que él diera una disculpa por su comportamiento.",
        options: ["give", "gives", "gave", "giving"],
        correct: "give",
        explanation: "Después de 'demand that' (exigir que) usamos subjuntivo: 'demand that he give'. Es exigencia fuerte. En español 'exigió que diera' usa subjuntivo imperfecto. Esta demanda de disculpa sugiere que comportamiento fue suficientemente ofensivo para requerir reconocimiento formal del error."
      },
      {
        id: "subj_sug_6",
        question: "The teacher insisted that everyone _____ on time always.",
        translation: "El profesor insistió en que todos lleguen a tiempo siempre.",
        options: ["arrive", "arrives", "arrived", "arriving"],
        correct: "arrive",
        explanation: "Con 'insist that' usamos forma base: 'insist that everyone arrive'. El sujeto 'everyone' normalmente lleva 's' pero en subjuntivo no. En español 'insistió en que lleguen' usa subjuntivo. Esta regla estricta de puntualidad establece expectativa clara de disciplina en clase."
      },
      {
        id: "subj_sug_7",
        question: "I suggest that she _____ taking those pills for pain.",
        translation: "Sugiero que ella deje de tomar esas pastillas para el dolor.",
        options: ["stop", "stops", "stopped", "stopping"],
        correct: "stop",
        explanation: "Con 'suggest that' para DEJAR hábito usamos forma base: 'suggest that she stop taking'. En español 'sugiero que deje' usa subjuntivo. Esta preocupación sobre medicación puede basarse en efectos secundarios observados o conocimiento de que no son apropiadas para su condición."
      },
      {
        id: "subj_sug_8",
        question: "The law requires that all drivers _____ insurance valid.",
        translation: "La ley requiere que todos los conductores tengan seguro válido.",
        options: ["have", "has", "had", "having"],
        correct: "have",
        explanation: "Después de 'require that' (requerir que) usamos subjuntivo: 'require that drivers have insurance'. Es requisito legal. En español 'requiere que tengan' usa subjuntivo. Esta obligación legal de seguro automotriz protege tanto a conductores como a víctimas potenciales de accidentes."
      },
      {
        id: "subj_sug_9",
        question: "He proposed that the project _____ delayed until next month.",
        translation: "Él propuso que el proyecto sea retrasado hasta el próximo mes.",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "Con 'propose that' en voz pasiva usamos 'be': 'propose that project be delayed'. En español 'propuso que sea' también es subjuntivo pasivo. Esta sugerencia de postponer puede ser por necesidad de más recursos, tiempo o simplemente reconocimiento de que deadline actual es irrealista."
      },
      {
        id: "subj_sug_10",
        question: "I recommend that you _____ the contract before signing it.",
        translation: "Recomiendo que leas el contrato antes de firmarlo.",
        options: ["read", "reads", "reading", "to read"],
        correct: "read",
        explanation: "Después de 'recommend that' usamos forma base: 'recommend that you read'. En español 'recomiendo que leas' usa subjuntivo. Esta precaución legal de leer antes de firmar es sabiduría fundamental que protege contra comprometerse a términos que no entiendes o no aceptas."
      },
      {
        id: "subj_sug_11",
        question: "She suggested that we _____ a different approach this time.",
        translation: "Ella sugirió que intentemos un enfoque diferente esta vez.",
        options: ["try", "tries", "tried", "trying"],
        correct: "try",
        explanation: "Con 'suggest that' para CAMBIO de método usamos subjuntivo: 'suggest that we try'. En español 'sugirió que intentemos' usa subjuntivo. Esta propuesta de probar estrategia alternativa reconoce que método previo no funcionó y necesita innovación."
      },
      {
        id: "subj_sug_12",
        question: "The rules stipulate that no one _____ without permission first.",
        translation: "Las reglas estipulan que nadie salga sin permiso primero.",
        options: ["leave", "leaves", "left", "leaving"],
        correct: "leave",
        explanation: "Después de 'stipulate that' (estipular que) usamos subjuntivo: 'stipulate that no one leave'. Es regla formal escrita. En español 'estipulan que nadie salga' usa subjuntivo. Esta restricción de salida requiere autorización previa, típica en ambientes controlados como escuelas o instituciones."
      },
      {
        id: "subj_sug_13",
        question: "I insist that he _____ the truth about what happened.",
        translation: "Insisto en que él diga la verdad sobre lo que pasó.",
        options: ["tell", "tells", "told", "telling"],
        correct: "tell",
        explanation: "Con 'insist that' para EXIGIR honestidad usamos subjuntivo: 'insist that he tell truth'. En español 'insisto en que diga' también usa subjuntivo. Esta demanda firme de transparencia sugiere que hay sospecha de que información completa está siendo ocultada deliberadamente."
      },
      {
        id: "subj_sug_14",
        question: "The boss demanded that the report _____ submitted by Friday.",
        translation: "El jefe exigió que el informe sea entregado para el viernes.",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "Con 'demand that' en pasivo usamos 'be': 'demanded that report be submitted'. Es exigencia autoritaria. En español 'exigió que sea' usa subjuntivo. Este deadline estricto de viernes crea presión temporal que requiere priorizar este trabajo sobre otras tareas."
      },
      {
        id: "subj_sug_15",
        question: "I suggest that she _____ _____ about this decision carefully first.",
        translation: "Sugiero que ella piense sobre esta decisión cuidadosamente primero.",
        options: ["think", "thinks", "thought", "thinking"],
        correct: "think",
        explanation: "Con 'suggest that' para REFLEXIÓN usamos forma base: 'suggest that she think'. En español 'sugiero que piense' usa subjuntivo. Este consejo de deliberar antes de decidir reconoce que decisión tiene implicaciones importantes que requieren consideración profunda no acción impulsiva."
      }
    ]
  },

  get_phrasal_verbs: {
    name: "Verbos Frasales con GET",
    description: "Get up, get over, get along - combinaciones comunes con get",
    icon: Heart,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "get_ph_1",
        question: "I usually _____ _____ at 6 AM for work every weekday.",
        translation: "Usualmente me levanto a las 6 AM para el trabajo cada día de semana.",
        options: ["get up", "get on", "get off", "get in"],
        correct: "get up",
        explanation: "El verbo frasal 'get up' significa levantarse de la cama. Es uno de los primeros que aprendemos porque describe acción diaria universal. En español 'me levanto' es reflexivo. Esta rutina matutina temprana de días laborales contrasta probablemente con despertar más tarde en fines de semana."
      },
      {
        id: "get_ph_2",
        question: "It took me months to _____ _____ my ex-boyfriend completely.",
        translation: "Me tomó meses superar a mi ex-novio completamente.",
        options: ["get over", "get up", "get on", "get through"],
        correct: "get over",
        explanation: "El verbo frasal 'get over' significa superar emocionalmente algo doloroso: 'get over a breakup, get over sadness'. En español 'superar' es directo. Este proceso de sanación post-ruptura requiere tiempo y los meses mencionados muestran que fue relación significativa."
      },
      {
        id: "get_ph_3",
        question: "I don't _____ _____ _____ my neighbor - he's difficult.",
        translation: "No me llevo bien con mi vecino - es difícil.",
        options: ["get along with", "get up with", "get over with", "get on with"],
        correct: "get along with",
        explanation: "El verbo frasal 'get along with' significa llevarse bien con alguien. En inglés británico también 'get on with'. En español 'me llevo bien con' también describe relación. Esta fricción vecinal crea tensión en vida diaria que idealmente debería resolverse con comunicación."
      },
      {
        id: "get_ph_4",
        question: "She _____ _____ the bus at the next stop, please.",
        translation: "Ella se baja del autobús en la próxima parada, por favor.",
        options: ["gets off", "gets on", "gets up", "gets in"],
        correct: "gets off",
        explanation: "El verbo frasal 'get off' significa bajar de transporte público (bus, tren): opuesto de 'get on' (subir). En español 'se baja de' también describe descenso. Esta instrucción al conductor o simple narración establece dónde termina su viaje en esta ruta."
      },
      {
        id: "get_ph_5",
        question: "Let's _____ _____ _____ work - we have a lot to do!",
        translation: "Pongámonos a trabajar - ¡tenemos mucho que hacer!",
        options: ["get down to", "get up to", "get over to", "get on to"],
        correct: "get down to",
        explanation: "El verbo frasal 'get down to' significa ponerse a trabajar seriamente, dejar de procrastinar: 'get down to work, get down to business'. En español 'pongámonos a' también inicia acción. Esta exhortación reconoce que hay mucho trabajo pendiente y es hora de dejar distracciones."
      },
      {
        id: "get_ph_6",
        question: "How are you _____ _____ with your studies this semester?",
        translation: "¿Cómo te está yendo con tus estudios este semestre?",
        options: ["getting on", "getting up", "getting off", "getting over"],
        correct: "getting on",
        explanation: "El verbo frasal 'get on' (británico) o 'get along' (americano) puede significar 'progresar': 'How are you getting on?' pregunta sobre progreso. En español '¿cómo te va?' también pregunta progreso. Esta consulta sobre desempeño académico muestra interés genuino en bienestar estudiantil."
      },
      {
        id: "get_ph_7",
        question: "I need to _____ _____ shape before summer starts.",
        translation: "Necesito ponerme en forma antes de que empiece el verano.",
        options: ["get in", "get on", "get up", "get over"],
        correct: "get in",
        explanation: "La expresión 'get in shape' significa ponerse en forma físicamente: alcanzar estado fitness. En español 'ponerme en forma' también es reflexivo. Esta meta pre-verano es común porque temporada de playa motiva a mejorar condición física para sentirse cómodo en traje de baño."
      },
      {
        id: "get_ph_8",
        question: "She can't _____ _____ without her morning coffee ritual.",
        translation: "Ella no puede funcionar sin su ritual de café matutino.",
        options: ["get by", "get up", "get on", "get off"],
        correct: "get by",
        explanation: "El verbo frasal 'get by' significa arreglárselas o funcionar mínimamente: 'can't get by without coffee'. En español 'no puede funcionar' es más directo. Esta dependencia de cafeína matutina es común entre quienes usan café como herramienta para despertar completamente."
      },
      {
        id: "get_ph_9",
        question: "Let's _____ _____ the car - it's starting to rain now!",
        translation: "Subámonos al auto - ¡está empezando a llover ahora!",
        options: ["get in", "get on", "get up", "get off"],
        correct: "get in",
        explanation: "Para ENTRAR a vehículo cerrado (auto, taxi) usamos 'get in': te metes adentro. Para vehículos abiertos (bus, tren) es 'get on'. En español 'subirse al auto' también describe entrada. Esta urgencia por lluvia inminente motiva movimiento rápido hacia refugio seco."
      },
      {
        id: "get_ph_10",
        question: "He's trying to _____ _____ smoking for his health's sake.",
        translation: "Él está intentando dejar de fumar por el bien de su salud.",
        options: ["give up", "get up", "get over", "get on"],
        correct: "give up",
        explanation: "El verbo frasal 'give up' (no 'get up') significa dejar un hábito: 'give up smoking'. Es abandonar algo difícil. En español 'dejar de fumar' usa 'dejar de'. Este intento de romper adicción a tabaco es decisión de salud importante que requiere fuerza de voluntad considerable."
      },
      {
        id: "get_ph_11",
        question: "We _____ _____ _____ well with our new neighbors.",
        translation: "Nos llevamos bien con nuestros nuevos vecinos.",
        options: ["get along", "get up", "get over", "get through"],
        correct: "get along",
        explanation: "Para relación ARMONIOSA usamos 'get along well with': convivencia pacífica. En español 'nos llevamos bien' también es positivo. Esta buena relación vecinal inicial es alivio porque vecinos difíciles pueden hacer vida en casa estresante."
      },
      {
        id: "get_ph_12",
        question: "She finally _____ _____ her fear of public speaking recently.",
        translation: "Ella finalmente superó su miedo a hablar en público recientemente.",
        options: ["got over", "got up", "got on", "got in"],
        correct: "got over",
        explanation: "Para SUPERAR miedo usamos 'get over': pasado 'got over' marca que venció el temor. En español 'superó su miedo' también es victoria emocional. Esta conquista de fobia social común abre nuevas oportunidades profesionales que antes evitaba por ansiedad."
      },
      {
        id: "get_ph_13",
        question: "I can't _____ _____ _____ this difficult situation alone.",
        translation: "No puedo salir de esta situación difícil solo.",
        options: ["get out of", "get up from", "get on from", "get over from"],
        correct: "get out of",
        explanation: "El verbo frasal 'get out of' significa salir de o escapar de situación: 'get out of trouble, get out of a difficult situation'. En español 'salir de' también escapa. Esta admisión de necesitar ayuda muestra humildad y reconocimiento de que algunos desafíos son demasiado grandes para enfrentar solo."
      },
      {
        id: "get_ph_14",
        question: "They _____ _____ late last night - I heard them arrive.",
        translation: "Ellos llegaron tarde anoche - los escuché llegar.",
        options: ["got in", "got on", "got up", "got off"],
        correct: "got in",
        explanation: "Para LLEGAR a casa usamos 'get in': 'got in late' significa llegaron tarde. En español 'llegaron tarde' es directo. Esta observación auditiva de llegada nocturna tardía sugiere que paredes son delgadas o que hicieron ruido notable al entrar."
      },
      {
        id: "get_ph_15",
        question: "I'm trying to _____ _____ _____ my work before deadline.",
        translation: "Estoy intentando ponerme al día con mi trabajo antes de la fecha límite.",
        options: ["get caught up with", "get up with", "get on with", "get over with"],
        correct: "get caught up with",
        explanation: "La expresión 'get caught up with' significa ponerse al día con trabajo atrasado: alcanzar donde deberías estar. En español 'ponerme al día' también recupera retraso. Esta carrera contra reloj para recuperar trabajo pendiente antes de deadline crea estrés que pudo evitarse con mejor gestión de tiempo."
      }
    ]
  }
};

export default part23Categories;