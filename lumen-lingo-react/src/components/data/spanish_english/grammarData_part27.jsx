/**
 * SPANISH → ENGLISH GRAMMAR - PART 27
 * 3 categories, 15 questions each
 */

import { Radio, Smile, Puzzle } from "lucide-react";

export const part27Categories = {
  modal_have_to_variations: {
    name: "Variaciones de Have To",
    description: "Don't have to vs mustn't - obligación vs prohibición",
    icon: Radio,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "modal_var_1",
        question: "You _____ _____ _____ wear a suit - casual is fine here.",
        translation: "No tienes que usar traje - casual está bien aquí.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para indicar AUSENCIA de obligación (no es necesario) usamos 'don't have to': es opcional. Es MUY diferente de 'mustn't' (prohibido). En español 'no tienes que' puede ser ambiguo. Esta aclaración sobre código de vestimenta relajado elimina estrés de formalidad excesiva."
      },
      {
        id: "modal_var_2",
        question: "You _____ smoke in here - it's strictly prohibited!",
        translation: "¡No debes fumar aquí - está estrictamente prohibido!",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para PROHIBICIÓN fuerte usamos 'mustn't' (must not): está prohibido hacer. En español 'no debes' en este contexto es prohibición. La diferencia crítica: 'don't have to' = no obligatorio (puedes si quieres), 'mustn't' = prohibido (no puedes bajo ninguna circunstancia)."
      },
      {
        id: "modal_var_3",
        question: "She _____ _____ _____ cook tonight - we're eating out.",
        translation: "Ella no tiene que cocinar esta noche - vamos a comer fuera.",
        options: ["doesn't have to", "mustn't", "shouldn't", "can't"],
        correct: "doesn't have to",
        explanation: "Para liberar de RESPONSABILIDAD usamos 'doesn't have to cook': no es necesario que cocine. En español 'no tiene que cocinar' también libera. Esta decisión de comer afuera elimina trabajo de preparar cena, dando descanso merecido de tareas culinarias domésticas."
      },
      {
        id: "modal_var_4",
        question: "We _____ be late for this important client meeting today.",
        translation: "No debemos llegar tarde a esta importante reunión con cliente hoy.",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para PROHIBICIÓN basada en importancia usamos 'mustn't be late': llegar tarde no es opción aceptable. En español 'no debemos' también prohibe. Esta reunión con cliente crucial requiere puntualidad absoluta porque tardanza proyectaría imagen no profesional que podría costar negocio."
      },
      {
        id: "modal_var_5",
        question: "You _____ _____ _____ pay now - you can pay later.",
        translation: "No tienes que pagar ahora - puedes pagar después.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para FLEXIBILIDAD de pago usamos 'don't have to pay now': no hay obligación inmediata. En español 'no tienes que pagar ahora' también da opción. Esta generosidad de permitir pago diferido reduce presión financiera inmediata, mostrando confianza y flexibilidad comercial."
      },
      {
        id: "modal_var_6",
        question: "Children _____ play near the swimming pool unsupervised.",
        translation: "Los niños no deben jugar cerca de la piscina sin supervisión.",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para SEGURIDAD infantil crítica usamos 'mustn't': es prohibición absoluta por peligro. En español 'no deben' es prohibición de seguridad. Esta regla protege a niños del riesgo de ahogamiento que piscinas sin supervisión presentan, siendo precaución vital no negociable."
      },
      {
        id: "modal_var_7",
        question: "I _____ _____ _____ go to work tomorrow - it's my day off!",
        translation: "¡No tengo que ir a trabajar mañana - es mi día libre!",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para celebrar AUSENCIA de obligación laboral usamos 'don't have to go': día sin trabajo. En español 'no tengo que ir' también celebra libertad. Esta alegría de día libre permite descanso o actividades personales que horario laboral normal no permite."
      },
      {
        id: "modal_var_8",
        question: "Students _____ use phones during the exam period.",
        translation: "Los estudiantes no deben usar teléfonos durante el período de examen.",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para REGLA académica estricta usamos 'mustn't use phones': prohibición anti-trampa. En español 'no deben' prohibe. Esta regla de examen previene deshonestidad académica, asegurando que evaluación mide conocimiento real del estudiante no capacidad de buscar respuestas."
      },
      {
        id: "modal_var_9",
        question: "You _____ _____ _____ bring anything - we have everything ready.",
        translation: "No tienes que traer nada - tenemos todo listo.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para liberar de RESPONSABILIDAD de contribuir usamos 'don't have to bring': no es necesario traer. En español 'no tienes que traer' también libera. Esta hospitalidad completa donde anfitrión provee todo elimina carga de invitado de preparar o comprar algo."
      },
      {
        id: "modal_var_10",
        question: "We _____ touch the exhibits in the museum at all.",
        translation: "No debemos tocar las exhibiciones en el museo para nada.",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para PROHIBICIÓN de museo usamos 'mustn't touch': regla de preservación. En español 'no debemos tocar' prohibe. Esta restricción protege artefactos valiosos o frágiles del daño de aceites de manos y manipulación que podría deteriorar piezas históricas irremplazables."
      },
      {
        id: "modal_var_11",
        question: "He _____ _____ _____ attend every meeting - only important ones.",
        translation: "Él no tiene que asistir a cada reunión - solo las importantes.",
        options: ["doesn't have to", "mustn't", "shouldn't", "can't"],
        correct: "doesn't have to",
        explanation: "Para SELECTIVIDAD de asistencia usamos 'doesn't have to attend every': no todas son obligatorias. En español 'no tiene que asistir' también da opción. Esta flexibilidad de asistir solo a reuniones cruciales reconoce que reuniones excesivas reducen productividad."
      },
      {
        id: "modal_var_12",
        question: "You _____ tell anyone about this secret information please.",
        translation: "No debes contarle a nadie sobre esta información secreta por favor.",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para CONFIDENCIALIDAD estricta usamos 'mustn't tell': prohibición de compartir secreto. En español 'no debes contar' también prohibe. Esta solicitud de discreción establece que información es sensible y divulgarla podría tener consecuencias serias para personas involucradas."
      },
      {
        id: "modal_var_13",
        question: "I _____ _____ _____ finish this today - I can do it tomorrow.",
        translation: "No tengo que terminar esto hoy - puedo hacerlo mañana.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para FLEXIBILIDAD de deadline usamos 'don't have to finish today': no hay urgencia. En español 'no tengo que terminar' también da margen. Esta ausencia de presión temporal permite trabajar a ritmo sostenible sin estrés de completar todo inmediatamente."
      },
      {
        id: "modal_var_14",
        question: "Visitors _____ park in the reserved spots - those are for staff.",
        translation: "Los visitantes no deben estacionarse en los lugares reservados - esos son para personal.",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "Para PROHIBICIÓN de estacionamiento reservado usamos 'mustn't park': violación resultaría en multa o remolque. En español 'no deben estacionarse' prohibe. Esta restricción mantiene espacios disponibles para quienes los necesitan regularmente, evitando conflictos de estacionamiento."
      },
      {
        id: "modal_var_15",
        question: "You _____ _____ _____ answer all the questions if you're unsure.",
        translation: "No tienes que responder todas las preguntas si no estás seguro.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "Para OPCIONALIDAD en examen usamos 'don't have to answer all': algunas pueden omitirse. En español 'no tienes que responder todas' también da opción. Esta flexibilidad de dejar preguntas en blanco cuando inseguro es mejor que adivinar aleatoriamente si respuestas incorrectas penalizan."
      }
    ]
  },

  expressing_frequency: {
    name: "Expresar Frecuencia",
    description: "Once, twice, three times - cuantificar ocurrencias",
    icon: Smile,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    questions: [
      {
        id: "freq_expr_1",
        question: "I go to the gym _____ a week regularly.",
        translation: "Voy al gimnasio tres veces a la semana regularmente.",
        options: ["three times", "three time", "third times", "three"],
        correct: "three times",
        explanation: "Para FRECUENCIA específica usamos número + 'times': 'three times a week'. La palabra 'time' se pluraliza 'times' con números mayores a uno. En español 'tres veces a la semana' también cuenta ocurrencias. Esta rutina de ejercicio de tres días semanales equilibra fitness con recuperación."
      },
      {
        id: "freq_expr_2",
        question: "She visits her parents _____ a month without fail.",
        translation: "Ella visita a sus padres una vez al mes sin falta.",
        options: ["once", "one time", "one", "first"],
        correct: "once",
        explanation: "Para UNA vez usamos 'once' (no 'one time' aunque técnicamente correcto): 'once a month'. Es forma más natural y común. En español 'una vez al mes' también es singular. Esta visita mensual a padres mantiene lazos familiares mientras respeta independencia de vida adulta separada."
      },
      {
        id: "freq_expr_3",
        question: "He's been to Paris _____ in his entire life so far.",
        translation: "Él ha estado en París dos veces en toda su vida hasta ahora.",
        options: ["twice", "two times", "two", "second"],
        correct: "twice",
        explanation: "Para DOS veces usamos 'twice' (no 'two times' aunque funciona): es más elegante y común. En español 'dos veces' cuenta. Esta experiencia parisina limitada a dos visitas sugiere que son viajes especiales espaciados en tiempo, no destino frecuente."
      },
      {
        id: "freq_expr_4",
        question: "I check my email _____ _____ an hour during work.",
        translation: "Reviso mi email varias veces por hora durante el trabajo.",
        options: ["several times", "several time", "much times", "many time"],
        correct: "several times",
        explanation: "Para MÚLTIPLES veces indefinidas usamos 'several times' (varias veces): cantidad no especificada pero más de dos. En español 'varias veces' también es indefinido plural. Esta frecuencia alta de revisar email durante trabajo muestra dependencia de comunicación digital constante en ambientes laborales modernos."
      },
      {
        id: "freq_expr_5",
        question: "We eat out _____ or _____ a month maximum.",
        translation: "Comemos fuera una o dos veces al mes máximo.",
        options: ["once / twice", "one / two times", "one / two", "first / second"],
        correct: "once / twice",
        explanation: "Para rango de UNA a DOS veces usamos 'once or twice': es expresión común fija. En español 'una o dos veces' también presenta rango. Esta frecuencia baja de restaurantes puede ser por economía o preferencia por comida casera, limitando gastos en comida externa."
      },
      {
        id: "freq_expr_6",
        question: "She exercises _____ _____ a day - morning and evening.",
        translation: "Ella hace ejercicio dos veces al día - mañana y tarde.",
        options: ["twice", "two times", "two", "second"],
        correct: "twice",
        explanation: "Para DOS sesiones diarias usamos 'twice a day': rutina dividida. En español 'dos veces al día' también especifica. Esta dedicación de ejercicio doble diario muestra compromiso serio con fitness, probablemente entrenando para competencia o manteniendo régimen muy disciplinado."
      },
      {
        id: "freq_expr_7",
        question: "I've told you _____ already - please listen carefully!",
        translation: "¡Ya te lo he dicho varias veces - por favor escucha cuidadosamente!",
        options: ["several times", "several time", "much times", "many time"],
        correct: "several times",
        explanation: "Para REPETICIÓN frustrada usamos 'several times': múltiples explicaciones. En español 'varias veces' también repite. Esta exasperación de tener que repetir misma información múltiples veces sugiere que oyente no está prestando atención adecuada o información es compleja."
      },
      {
        id: "freq_expr_8",
        question: "He's called me _____ today but I missed all the calls.",
        translation: "Él me ha llamado tres veces hoy pero perdí todas las llamadas.",
        options: ["three times", "three time", "third times", "three"],
        correct: "three times",
        explanation: "Para INTENTOS múltiples de contacto usamos 'three times': persistencia. En español 'tres veces' también cuenta. Esta insistencia de tres llamadas perdidas sugiere que asunto es importante o urgente, requiriendo devolver llamada prioritariamente cuando veas los mensajes perdidos."
      },
      {
        id: "freq_expr_9",
        question: "I go shopping for groceries _____ _____ a week usually.",
        translation: "Voy de compras de comida una vez a la semana usualmente.",
        options: ["once", "one time", "one", "first"],
        correct: "once",
        explanation: "Para RUTINA semanal única usamos 'once a week': compra consolidada. En español 'una vez a la semana' también es singular. Esta estrategia de compra semanal única es eficiente en tiempo y ayuda a planificar menús y presupuesto alimentario de manera organizada."
      },
      {
        id: "freq_expr_10",
        question: "She's won the competition _____ in a row now!",
        translation: "¡Ella ha ganado la competencia cuatro veces seguidas ya!",
        options: ["four times", "four time", "fourth times", "four"],
        correct: "four times",
        explanation: "Para VICTORIAS consecutivas impresionantes usamos 'four times in a row': racha ganadora. En español 'cuatro veces seguidas' también celebra. Esta dominación competitiva de cuatro victorias consecutivas establece a esta persona como campeona claramente superior a competidores."
      },
      {
        id: "freq_expr_11",
        question: "I've seen that movie _____ - I know it well!",
        translation: "He visto esa película varias veces - ¡la conozco bien!",
        options: ["several times", "several time", "much times", "many time"],
        correct: "several times",
        explanation: "Para REPETICIÓN de ver mismo contenido usamos 'several times': múltiples visionados. En español 'varias veces' también repite. Esta familiaridad profunda con película por verla repetidamente sugiere que es favorita personal que vale la pena revisitar múltiples veces."
      },
      {
        id: "freq_expr_12",
        question: "He brushes his teeth _____ a day - after every meal.",
        translation: "Él se cepilla los dientes tres veces al día - después de cada comida.",
        options: ["three times", "three time", "third times", "three"],
        correct: "three times",
        explanation: "Para HIGIENE dental óptima usamos 'three times a day': después desayuno, almuerzo, cena. En español 'tres veces al día' también especifica. Esta rutina rigurosa de cepillado excede recomendación mínima de dos veces, mostrando cuidado dental excepcional."
      },
      {
        id: "freq_expr_13",
        question: "We meet for coffee _____ _____ _____ a month to catch up.",
        translation: "Nos reunimos para café una o dos veces al mes para ponernos al día.",
        options: ["once or twice", "one or two times", "one or two", "first or second"],
        correct: "once or twice",
        explanation: "Para frecuencia VARIABLE mensual usamos 'once or twice a month': depende del mes. En español 'una o dos veces' también varía. Esta tradición de café mensual mantiene amistad viva con actualizaciones regulares sin exigir compromiso semanal más demandante."
      },
      {
        id: "freq_expr_14",
        question: "I've explained this _____ _____ now - do you understand?",
        translation: "He explicado esto varias veces ya - ¿entiendes?",
        options: ["several times", "several time", "much times", "many time"],
        correct: "several times",
        explanation: "Para PACIENCIA agotándose usamos 'several times now': múltiples explicaciones sin comprensión. En español 'varias veces ya' también muestra frustración. Esta pregunta directa '¿entiendes?' busca confirmación final de que información finalmente se captó después de explicaciones repetidas."
      },
      {
        id: "freq_expr_15",
        question: "She travels abroad _____ a year for business meetings.",
        translation: "Ella viaja al extranjero una vez al año por reuniones de negocios.",
        options: ["once", "one time", "one", "first"],
        correct: "once",
        explanation: "Para VIAJE anual único de trabajo usamos 'once a year': frecuencia baja pero regular. En español 'una vez al año' también es singular anual. Este viaje internacional anual probablemente es para conferencia importante o reunión con clientes extranjeros clave que requiere presencia en persona."
      }
    ]
  },

  verbs_followed_by_gerund: {
    name: "Verbos Seguidos de Gerundio",
    description: "Enjoy, finish, avoid - verbos que siempre van con -ing",
    icon: Puzzle,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "v_ger_1",
        question: "I enjoy _____ books in my free time regularly.",
        translation: "Disfruto leer libros en mi tiempo libre regularmente.",
        options: ["reading", "to read", "read", "reads"],
        correct: "reading",
        explanation: "Después de 'enjoy' SIEMPRE gerundio: 'enjoy reading' (nunca 'enjoy to read'). Es regla fija sin excepciones. En español 'disfruto leer' usa infinitivo donde inglés requiere -ing. Verbos de gusto/disgusto (enjoy, like, love, hate) generalmente prefieren gerundio en inglés."
      },
      {
        id: "v_ger_2",
        question: "She finished _____ the house around noon today.",
        translation: "Ella terminó de limpiar la casa alrededor del mediodía hoy.",
        options: ["cleaning", "to clean", "clean", "cleans"],
        correct: "cleaning",
        explanation: "Después de 'finish' SIEMPRE gerundio: 'finished cleaning' (nunca 'to clean'). En español 'terminó de limpiar' usa 'de' más infinitivo. Verbos de completitud o finalización (finish, stop, quit) requieren gerundio. Esta limpieza matutina completada libera tarde para otras actividades."
      },
      {
        id: "v_ger_3",
        question: "He avoided _____ about the uncomfortable topic yesterday.",
        translation: "Él evitó hablar sobre el tema incómodo ayer.",
        options: ["talking", "to talk", "talk", "talks"],
        correct: "talking",
        explanation: "Después de 'avoid' SIEMPRE gerundio: 'avoided talking'. Verbos de evasión van con -ing. En español 'evitó hablar' usa infinitivo. Esta táctica de evadir tema sensible es mecanismo de defensa común que protege de confrontación pero puede impedir resolución de problemas subyacentes."
      },
      {
        id: "v_ger_4",
        question: "I miss _____ with my old friends from school.",
        translation: "Extraño pasar tiempo con mis viejos amigos de la escuela.",
        options: ["spending time", "to spend time", "spend time", "spends time"],
        correct: "spending time",
        explanation: "Después de 'miss' SIEMPRE gerundio: 'miss spending time' (extrañar hacer algo). En español 'extraño pasar' usa infinitivo. Esta nostalgia por amistades de juventud es sentimiento común cuando vida adulta y distancia reducen frecuencia de contacto con conexiones tempranas."
      },
      {
        id: "v_ger_5",
        question: "She keeps _____ the same mistake repeatedly at work.",
        translation: "Ella sigue cometiendo el mismo error repetidamente en el trabajo.",
        options: ["making", "to make", "make", "makes"],
        correct: "making",
        explanation: "Después de 'keep' (continuar/seguir) SIEMPRE gerundio: 'keeps making mistakes'. Indica persistencia de acción. En español 'sigue cometiendo' también usa gerundio. Esta repetición frustrante del mismo error sugiere que no ha aprendido la lección o que hábito está muy arraigado."
      },
      {
        id: "v_ger_6",
        question: "He doesn't mind _____ for you if you're late.",
        translation: "A él no le importa esperar por ti si llegas tarde.",
        options: ["waiting", "to wait", "wait", "waits"],
        correct: "waiting",
        explanation: "Después de 'mind' (importar) SIEMPRE gerundio: 'doesn't mind waiting'. En negativo significa que acepta. En español 'no le importa esperar' también acepta. Esta paciencia con tardanza de otros muestra flexibilidad y comprensión de que imprevistos ocurren en vida de todos."
      },
      {
        id: "v_ger_7",
        question: "I suggest _____ the project into smaller parts first.",
        translation: "Sugiero dividir el proyecto en partes más pequeñas primero.",
        options: ["dividing", "to divide", "divide", "divides"],
        correct: "dividing",
        explanation: "Después de 'suggest' usamos gerundio: 'suggest dividing'. También funciona 'suggest that we divide' con subjuntivo. En español 'sugiero dividir' usa infinitivo. Esta estrategia de desglose hace proyectos grandes menos abrumadores, facilitando progreso medible y sostenible."
      },
      {
        id: "v_ger_8",
        question: "She can't help _____ when she watches sad movies.",
        translation: "Ella no puede evitar llorar cuando ve películas tristes.",
        options: ["crying", "to cry", "cry", "cries"],
        correct: "crying",
        explanation: "La expresión 'can't help' + gerundio significa no poder evitar: 'can't help crying'. Es reacción involuntaria. En español 'no puede evitar llorar' también es involuntario. Esta respuesta emocional automática a contenido triste muestra empatía alta y sensibilidad emocional que películas dramáticas deliberadamente provocan."
      },
      {
        id: "v_ger_9",
        question: "They quit _____ last year for health reasons finally.",
        translation: "Ellos dejaron de fumar el año pasado por razones de salud finalmente.",
        options: ["smoking", "to smoke", "smoke", "smokes"],
        correct: "smoking",
        explanation: "Después de 'quit' (dejar hábito) SIEMPRE gerundio: 'quit smoking'. En español 'dejaron de fumar' usa 'de' más infinitivo. Esta decisión de salud de abandonar tabaco es cambio de vida importante que requiere fuerza de voluntad considerable para superar adicción física y psicológica."
      },
      {
        id: "v_ger_10",
        question: "I don't feel like _____ out tonight - I'm too tired.",
        translation: "No tengo ganas de salir esta noche - estoy demasiado cansado.",
        options: ["going", "to go", "go", "goes"],
        correct: "going",
        explanation: "La expresión 'feel like' + gerundio significa tener ganas: 'don't feel like going'. En español 'no tengo ganas de' también usa infinitivo. Esta falta de motivación para actividad social después de día agotador es válida, priorizando descanso sobre diversión."
      },
      {
        id: "v_ger_11",
        question: "He admitted _____ the mistake to his boss yesterday.",
        translation: "Él admitió cometer el error a su jefe ayer.",
        options: ["making", "to make", "make", "makes"],
        correct: "making",
        explanation: "Después de 'admit' (admitir) usamos gerundio: 'admitted making the mistake'. En español 'admitió cometer' usa infinitivo. Esta honestidad de reconocer error ante superior muestra integridad y responsabilidad, cualidades que generalmente se aprecian más que tratar de ocultar errores."
      },
      {
        id: "v_ger_12",
        question: "She postponed _____ the difficult decision until next week.",
        translation: "Ella pospuso tomar la decisión difícil hasta la próxima semana.",
        options: ["making", "to make", "make", "makes"],
        correct: "making",
        explanation: "Después de 'postpone' (posponer) usamos gerundio: 'postponed making'. En español 'pospuso tomar' usa infinitivo. Esta procrastinación de decisión difícil da tiempo adicional para considerar opciones pero también puede ser evasión de responsabilidad incómoda."
      },
      {
        id: "v_ger_13",
        question: "I can't stand _____ in long queues at the supermarket.",
        translation: "No soporto esperar en filas largas en el supermercado.",
        options: ["waiting", "to wait", "wait", "waits"],
        correct: "waiting",
        explanation: "Después de 'can't stand' (no soportar) usamos gerundio: 'can't stand waiting'. Expresa intolerancia fuerte. En español 'no soporto esperar' usa infinitivo. Esta aversión a filas largas es frustración moderna con tiempo desperdiciado en esperas que tecnología y eficiencia deberían haber eliminado."
      },
      {
        id: "v_ger_14",
        question: "We risk _____ the train if we don't leave now immediately.",
        translation: "Arriesgamos perder el tren si no salimos ahora inmediatamente.",
        options: ["missing", "to miss", "miss", "misses"],
        correct: "missing",
        explanation: "Después de 'risk' (arriesgar) usamos gerundio: 'risk missing the train'. En español 'arriesgamos perder' usa infinitivo. Esta advertencia urgente de consecuencia potencial motiva salida inmediata para evitar resultado negativo de perder transporte y llegar tarde a destino."
      },
      {
        id: "v_ger_15",
        question: "He denied _____ anything about the incident at all.",
        translation: "Él negó saber nada sobre el incidente para nada.",
        options: ["knowing", "to know", "know", "knows"],
        correct: "knowing",
        explanation: "Después de 'deny' (negar) usamos gerundio: 'denied knowing'. En español 'negó saber' usa infinitivo. Esta negación de conocimiento sobre evento puede ser verdad genuina de ignorancia o evasión deliberada de admitir involucramiento en situación problemática."
      }
    ]
  }
};

export default part27Categories;