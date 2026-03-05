
/**
 * ENGLISH → SPANISH GRAMMAR - PART 14
 * 5 advanced categories, 15 questions each - Complex sentence structures
 */

import { Lightbulb, Clock, GitBranch, Database, AlertTriangle } from "lucide-react";

export const part14Categories = {
  subjunctive_doubt_denial: {
    name: "Subjunctive - Doubt and Denial",
    description: "Master expressions of uncertainty and negation",
    icon: AlertTriangle,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "doubt_1",
        question: "No estoy seguro de que ellos _____ llegar a tiempo para la ceremonia.",
        translation: "(I'm not sure they can arrive on time for the ceremony)",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "Expressions of uncertainty trigger subjunctive. 'No estar seguro' expresses doubt requiring subjunctive mood."
      },
      {
        id: "doubt_2",
        question: "Dudo mucho que ella _____ la verdad sobre lo que realmente pasó.",
        translation: "(I doubt very much that she knows the truth about what really happened)",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "'Dudar que' always triggers subjunctive. Doubt is the classic trigger for subjunctive mood."
      },
      {
        id: "doubt_3",
        question: "No es cierto que nosotros _____ responsables de ese error grave.",
        translation: "(It's not true that we are responsible for that serious error)",
        options: ["seamos", "somos", "seremos", "éramos"],
        correct: "seamos",
        explanation: "Denial with 'no es cierto' requires subjunctive. Denying truth of statement needs subjunctive."
      },
      {
        id: "doubt_4",
        question: "Es dudoso que el proyecto _____ completado antes de la fecha límite.",
        translation: "(It's doubtful the project will be completed before the deadline)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Es dudoso que' expresses doubt requiring subjunctive. Impersonal doubt expressions trigger this mood."
      },
      {
        id: "doubt_5",
        question: "No pienso que _____ una buena idea invertir todo ahora mismo.",
        translation: "(I don't think it's a good idea to invest everything right now)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "Negative 'no pensar' triggers subjunctive. Affirmative 'pienso que' uses indicative, negative uses subjunctive."
      },
      {
        id: "doubt_6",
        question: "Es improbable que ellos _____ cambiar de opinión en este momento.",
        translation: "(It's unlikely they will change their minds at this point)",
        options: ["vayan a", "van a", "irán a", "iban a"],
        correct: "vayan a",
        explanation: "'Es improbable que' indicates low probability with subjunctive. Unlikely events require subjunctive mood."
      },
      {
        id: "doubt_7",
        question: "No creo en absoluto que ese plan _____ funcionar correctamente.",
        translation: "(I don't believe at all that that plan will work correctly)",
        options: ["vaya a", "va a", "irá a", "iba a"],
        correct: "vaya a",
        explanation: "Strong negative belief triggers subjunctive. 'No creo que' makes dependent clause subjunctive."
      },
      {
        id: "doubt_8",
        question: "Es cuestionable que _____ la mejor solución al problema complejo.",
        translation: "(It's questionable that this is the best solution to the complex problem)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Es cuestionable que' expresses questioning requiring subjunctive. Challenged assertions need this mood."
      },
      {
        id: "doubt_9",
        question: "No me parece que _____ suficiente tiempo para completar todo.",
        translation: "(It doesn't seem to me we have enough time to complete everything)",
        options: ["tengamos", "tenemos", "tendremos", "teníamos"],
        correct: "tengamos",
        explanation: "Negative 'parecer' triggers subjunctive. 'No me parece que' expresses doubt about sufficiency."
      },
      {
        id: "doubt_10",
        question: "Niego rotundamente que yo _____ algo que ver con ese asunto.",
        translation: "(I categorically deny that I have anything to do with that matter)",
        options: ["tenga", "tengo", "tendré", "tenía"],
        correct: "tenga",
        explanation: "'Negar que' (deny that) always requires subjunctive. Denial is rejection of truth."
      },
      {
        id: "doubt_11",
        question: "No estoy convencido de que esta _____ la mejor decisión posible.",
        translation: "(I'm not convinced this is the best possible decision)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "Lack of conviction triggers subjunctive. 'No estar convencido' expresses remaining doubt."
      },
      {
        id: "doubt_12",
        question: "Es poco probable que ellos _____ venir a la fiesta mañana.",
        translation: "(It's unlikely they can come to the party tomorrow)",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "'Es poco probable que' indicates low likelihood with subjunctive. Improbability requires subjunctive mood."
      },
      {
        id: "doubt_13",
        question: "No parece que _____ a nevar esta noche según el pronóstico.",
        translation: "(It doesn't seem like it's going to snow tonight according to the forecast)",
        options: ["vaya", "va", "irá", "iba"],
        correct: "vaya",
        explanation: "Negative appearance triggers subjunctive. 'No parece que' expresses doubt about forecast."
      },
      {
        id: "doubt_14",
        question: "Pongo en duda que ese método _____ tan efectivo como dicen.",
        translation: "(I doubt that that method is as effective as they say)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Poner en duda que' expresses skepticism with subjunctive. Questioning claims requires subjunctive."
      },
      {
        id: "doubt_15",
        question: "No hay evidencia de que ellos _____ cometido ningún crimen.",
        translation: "(There's no evidence that they have committed any crime)",
        options: ["hayan", "han", "hubieran", "habían"],
        correct: "hayan",
        explanation: "Lack of evidence triggers present perfect subjunctive. Absence of proof about past requires subjunctive."
      }
    ]
  },

  tener_expressions: {
    name: "Expressions with 'Tener'",
    description: "Master tener + noun for states and feelings",
    icon: Database,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    questions: [
      {
        id: "tener_1",
        question: "_____ mucha hambre porque no he comido nada desde esta mañana.",
        translation: "(I'm very hungry because I haven't eaten anything since this morning)",
        options: ["Tengo", "Soy", "Estoy", "Hay"],
        correct: "Tengo",
        explanation: "'Tener hambre' expresses being hungry. Physical sensations use 'tener', not 'ser' or 'estar'."
      },
      {
        id: "tener_2",
        question: "Los niños _____ sueño después de jugar todo el día afuera.",
        translation: "(The children are sleepy after playing outside all day)",
        options: ["tienen", "son", "están", "hay"],
        correct: "tienen",
        explanation: "'Tener sueño' means be sleepy. Physical state of tiredness uses 'tener'."
      },
      {
        id: "tener_3",
        question: "_____ mucho cuidado cuando cruces esa calle tan transitada.",
        translation: "(Be very careful when you cross that very busy street)",
        options: ["Ten", "Sé", "Está", "Hay"],
        correct: "Ten",
        explanation: "'Tener cuidado' means be careful. Command 'ten' from irregular 'tener'."
      },
      {
        id: "tener_4",
        question: "Mi abuela siempre _____ razón cuando da consejos sobre la vida.",
        translation: "(My grandmother is always right when she gives advice about life)",
        options: ["tiene", "es", "está", "da"],
        correct: "tiene",
        explanation: "'Tener razón' means be right/correct. Use 'tener', never 'ser' or 'estar'."
      },
      {
        id: "tener_5",
        question: "_____ mucha sed después de correr cinco kilómetros sin parar.",
        translation: "(I'm very thirsty after running five kilometers without stopping)",
        options: ["Tengo", "Soy", "Estoy", "Hay"],
        correct: "Tengo",
        explanation: "'Tener sed' for being thirsty. Physical need uses 'tener'."
      },
      {
        id: "tener_6",
        question: "No _____ miedo de hablar en público delante de mucha gente.",
        translation: "(I'm not afraid of speaking in public in front of many people)",
        options: ["tengo", "soy", "estoy", "hay"],
        correct: "tengo",
        explanation: "'Tener miedo' means be afraid. Fear as possession uses 'tener'."
      },
      {
        id: "tener_7",
        question: "_____ mucho calor aquí adentro, ¿podemos abrir una ventana?",
        translation: "(I'm very hot in here, can we open a window?)",
        options: ["Tengo", "Soy", "Estoy", "Hace"],
        correct: "Tengo",
        explanation: "'Tener calor' for person feeling hot. Different from 'hacer calor' for weather."
      },
      {
        id: "tener_8",
        question: "Ella siempre _____ prisa por las mañanas porque se despierta tarde.",
        translation: "(She's always in a hurry in the mornings because she wakes up late)",
        options: ["tiene", "es", "está", "va"],
        correct: "tiene",
        explanation: "'Tener prisa' means be in a hurry. State of rushing uses 'tener'."
      },
      {
        id: "tener_9",
        question: "_____ mucha suerte de tener amigos tan buenos y leales.",
        translation: "(I'm very lucky to have such good and loyal friends)",
        options: ["Tengo", "Soy", "Estoy", "Hay"],
        correct: "Tengo",
        explanation: "'Tener suerte' means be lucky. Luck as possession uses 'tener'."
      },
      {
        id: "tener_10",
        question: "Los estudiantes _____ ganas de terminar el semestre e irse de vacaciones.",
        translation: "(The students feel like finishing the semester and going on vacation)",
        options: ["tienen", "son", "están", "hay"],
        correct: "tienen",
        explanation: "'Tener ganas de' expresses desire to do something. Want or inclination uses 'tener'."
      },
      {
        id: "tener_11",
        question: "_____ vergüenza admitir que cometí ese error tan tonto.",
        translation: "(I'm embarrassed to admit I made such a silly mistake)",
        options: ["Tengo", "Soy", "Estoy", "Doy"],
        correct: "Tengo",
        explanation: "'Tener vergüenza' means be embarrassed/ashamed. Shame as possession."
      },
      {
        id: "tener_12",
        question: "Siempre _____ éxito en todo lo que emprende profesionalmente.",
        translation: "(She always has success in everything she undertakes professionally)",
        options: ["tiene", "es", "está", "hace"],
        correct: "tiene",
        explanation: "'Tener éxito' means be successful. Success uses 'tener', not 'ser'."
      },
      {
        id: "tener_13",
        question: "_____ la culpa de lo que pasó en la reunión de ayer.",
        translation: "(It's your fault what happened in yesterday's meeting)",
        options: ["Tienes", "Eres", "Estás", "Das"],
        correct: "Tienes",
        explanation: "'Tener la culpa' means be at fault. Blame/guilt uses 'tener'."
      },
      {
        id: "tener_14",
        question: "Hoy no _____ ganas de hacer absolutamente nada productivo.",
        translation: "(Today I don't feel like doing absolutely anything productive)",
        options: ["tengo", "soy", "estoy", "hay"],
        correct: "tengo",
        explanation: "'No tener ganas' expresses lack of desire. Unwillingness uses 'tener'."
      },
      {
        id: "tener_15",
        question: "_____ la impresión de que algo extraño está ocurriendo aquí.",
        translation: "(I have the impression something strange is happening here)",
        options: ["Tengo", "Soy", "Estoy", "Doy"],
        correct: "Tengo",
        explanation: "'Tener la impresión' means have the feeling/impression. Intuition uses 'tener'."
      }
    ]
  },

  hacer_expressions: {
    name: "Expressions with 'Hacer'",
    description: "Idiomatic uses of hacer in various contexts",
    icon: Lightbulb,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "hacer_1",
        question: "_____ muy buen tiempo hoy para ir a la playa a nadar.",
        translation: "(The weather is very nice today to go to the beach to swim)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer buen tiempo' for nice weather. Weather conditions use 'hacer'."
      },
      {
        id: "hacer_2",
        question: "Voy a _____ una pregunta muy importante sobre el tema.",
        translation: "(I'm going to ask a very important question about the topic)",
        options: ["hacer", "dar", "poner", "tener"],
        correct: "hacer",
        explanation: "'Hacer una pregunta' means ask a question. Use 'hacer', not 'preguntar una pregunta'."
      },
      {
        id: "hacer_3",
        question: "Ella siempre _____ caso a los consejos de su madre sabia.",
        translation: "(She always pays attention to her wise mother's advice)",
        options: ["hace", "da", "pone", "tiene"],
        correct: "hace",
        explanation: "'Hacer caso' means pay attention/heed. Fixed expression with 'hacer'."
      },
      {
        id: "hacer_4",
        question: "_____ tres años que no veo a mis primos que viven lejos.",
        translation: "(It's been three years since I've seen my cousins who live far away)",
        options: ["Hace", "Son", "Están", "Hay"],
        correct: "Hace",
        explanation: "'Hace + time + que' expresses duration. How long since something happened."
      },
      {
        id: "hacer_5",
        question: "Tenemos que _____ cola durante horas para comprar las entradas.",
        translation: "(We have to stand in line for hours to buy the tickets)",
        options: ["hacer", "estar", "poner", "dar"],
        correct: "hacer",
        explanation: "'Hacer cola' means stand in line/queue. Use 'hacer', not 'estar'."
      },
      {
        id: "hacer_6",
        question: "Voy a _____ todo lo posible para ayudarte con ese problema.",
        translation: "(I'm going to do everything possible to help you with that problem)",
        options: ["hacer", "dar", "poner", "tener"],
        correct: "hacer",
        explanation: "'Hacer todo lo posible' means do everything possible. Maximum effort expression."
      },
      {
        id: "hacer_7",
        question: "Ella _____ muy buen papel en la obra de teatro anoche.",
        translation: "(She played a very good role in the theater play last night)",
        options: ["hizo", "dio", "puso", "tuvo"],
        correct: "hizo",
        explanation: "'Hacer un papel' means play a role. Theatrical performance uses 'hacer'."
      },
      {
        id: "hacer_8",
        question: "No le _____ gracia mi broma y se enfadó bastante conmigo.",
        translation: "(My joke didn't amuse him and he got quite angry with me)",
        options: ["hizo", "dio", "puso", "tuvo"],
        correct: "hizo",
        explanation: "'Hacer gracia' means amuse/be funny to. Humor appreciation uses 'hacer'."
      },
      {
        id: "hacer_9",
        question: "Vamos a _____ una fiesta sorpresa para celebrar su cumpleaños.",
        translation: "(We're going to throw a surprise party to celebrate her birthday)",
        options: ["hacer", "dar", "poner", "tener"],
        correct: "hacer",
        explanation: "'Hacer una fiesta' means throw/have a party. Event hosting uses 'hacer'."
      },
      {
        id: "hacer_10",
        question: "Me _____ mucha ilusión viajar a Japón el próximo verano.",
        translation: "(I'm really excited about traveling to Japan next summer)",
        options: ["hace", "da", "pone", "tiene"],
        correct: "hace",
        explanation: "'Hacer ilusión' means excite/look forward to. Anticipation uses 'hacer'."
      },
      {
        id: "hacer_11",
        question: "Tengo que _____ las paces con mi hermano después de pelear.",
        translation: "(I have to make peace with my brother after fighting)",
        options: ["hacer", "dar", "poner", "tener"],
        correct: "hacer",
        explanation: "'Hacer las paces' means make peace/reconcile. Reconciliation idiom."
      },
      {
        id: "hacer_12",
        question: "No _____ falta que me lo recuerdes tantas veces seguidas.",
        translation: "(You don't need to remind me so many times in a row)",
        options: ["hace", "hay", "es", "está"],
        correct: "hace",
        explanation: "'Hacer falta' means be necessary/needed. Necessity expression with 'hacer'."
      },
      {
        id: "hacer_13",
        question: "Voy a _____ un viaje muy largo por toda Europa en verano.",
        translation: "(I'm going to take a very long trip through all of Europe in summer)",
        options: ["hacer", "dar", "tener", "ir"],
        correct: "hacer",
        explanation: "'Hacer un viaje' means take a trip. Travel uses 'hacer', not just 'ir'."
      },
      {
        id: "hacer_14",
        question: "_____ muy mal tiempo durante toda la semana de vacaciones.",
        translation: "(The weather was very bad throughout the entire vacation week)",
        options: ["Hizo", "Hubo", "Fue", "Estuvo"],
        correct: "Hizo",
        explanation: "'Hacer mal tiempo' for bad weather. Past weather uses preterite 'hizo'."
      },
      {
        id: "hacer_15",
        question: "Me _____ falta un diccionario para traducir este texto difícil.",
        translation: "(I need a dictionary to translate this difficult text)",
        options: ["hace", "hay", "es", "está"],
        correct: "hace",
        explanation: "'Hacer falta' means need/require. Necessity of something for task."
      }
    ]
  },

  estar_expressions: {
    name: "Expressions with 'Estar'",
    description: "Fixed phrases using estar for states",
    icon: Clock,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    questions: [
      {
        id: "estar_1",
        question: "_____ de acuerdo contigo en todo lo que dijiste durante la reunión.",
        translation: "(I agree with you on everything you said during the meeting)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar de acuerdo' means agree. Agreement state uses 'estar', not 'ser'."
      },
      {
        id: "estar_2",
        question: "Ella _____ de buen humor hoy porque recibió excelentes noticias.",
        translation: "(She's in a good mood today because she received excellent news)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar de buen humor' for good mood. Temporary emotional state uses 'estar'."
      },
      {
        id: "estar_3",
        question: "_____ de vacaciones en las montañas durante dos semanas completas.",
        translation: "(We're on vacation in the mountains for two full weeks)",
        options: ["Estamos", "Somos", "Tenemos", "Vamos"],
        correct: "Estamos",
        explanation: "'Estar de vacaciones' means be on vacation. Temporary vacation state."
      },
      {
        id: "estar_4",
        question: "El museo _____ abierto todos los días excepto los lunes.",
        translation: "(The museum is open every day except Mondays)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar abierto' for open state. Resulting condition uses 'estar'."
      },
      {
        id: "estar_5",
        question: "_____ de pie durante tres horas esperando en la fila.",
        translation: "(I was standing for three hours waiting in line)",
        options: ["Estuve", "Fui", "Tuve", "Hice"],
        correct: "Estuve",
        explanation: "'Estar de pie' means be standing. Physical position uses 'estar'."
      },
      {
        id: "estar_6",
        question: "Mi jefe _____ de viaje de negocios en Asia toda esta semana.",
        translation: "(My boss is on a business trip in Asia all this week)",
        options: ["está", "es", "tiene", "va"],
        correct: "está",
        explanation: "'Estar de viaje' means be traveling/on a trip. Temporary travel state."
      },
      {
        id: "estar_7",
        question: "_____ seguro de que tomé la decisión correcta para mi futuro.",
        translation: "(I'm sure I made the right decision for my future)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar seguro' means be sure/certain. Mental conviction uses 'estar'."
      },
      {
        id: "estar_8",
        question: "Todos los restaurantes _____ llenos los fines de semana por la noche.",
        translation: "(All restaurants are full on weekend nights)",
        options: ["están", "son", "tienen", "hay"],
        correct: "están",
        explanation: "'Estar lleno' means be full/crowded. Occupancy state uses 'estar'."
      },
      {
        id: "estar_9",
        question: "_____ harto de escuchar las mismas quejas todos los días.",
        translation: "(I'm fed up with hearing the same complaints every day)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar harto' means be fed up/sick of. Strong annoyance uses 'estar'."
      },
      {
        id: "estar_10",
        question: "La conferencia _____ a punto de comenzar en cinco minutos exactos.",
        translation: "(The conference is about to begin in exactly five minutes)",
        options: ["está", "es", "tiene", "va"],
        correct: "está",
        explanation: "'Estar a punto de' means be about to. Imminent action uses 'estar'."
      },
      {
        id: "estar_11",
        question: "_____ de moda llevar ese tipo de ropa entre los jóvenes.",
        translation: "(It's fashionable to wear that type of clothing among young people)",
        options: ["Está", "Es", "Tiene", "Hay"],
        correct: "Está",
        explanation: "'Estar de moda' means be in fashion. Current trend uses 'estar'."
      },
      {
        id: "estar_12",
        question: "Mi hermano _____ de novio con una chica muy simpática.",
        translation: "(My brother is dating a very nice girl)",
        options: ["está", "es", "tiene", "sale"],
        correct: "está",
        explanation: "'Estar de novio' means be dating/engaged. Relationship status uses 'estar'."
      },
      {
        id: "estar_13",
        question: "_____ en contra de esa nueva ley que quieren aprobar.",
        translation: "(I'm against that new law they want to pass)",
        options: ["Estoy", "Soy", "Tengo", "Pongo"],
        correct: "Estoy",
        explanation: "'Estar en contra de' means be against. Opposition stance uses 'estar'."
      },
      {
        id: "estar_14",
        question: "El supermercado _____ cerrado los domingos durante todo el año.",
        translation: "(The supermarket is closed on Sundays throughout the year)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar cerrado' for closed state. Resulting condition uses 'estar'."
      },
      {
        id: "estar_15",
        question: "_____ dispuesto a ayudarte con todo lo que necesites para el proyecto.",
        translation: "(I'm willing to help you with everything you need for the project)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar dispuesto' means be willing/ready. Readiness/willingness uses 'estar'."
      }
    ]
  },

  dar_expressions: {
    name: "Expressions with 'Dar'",
    description: "Common phrases using dar",
    icon: GitBranch,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "dar_1",
        question: "Me _____ mucha vergüenza hablar delante de tanta gente desconocida.",
        translation: "(It embarrasses me a lot to speak in front of so many unknown people)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar vergüenza' means embarrass/make ashamed. Emotion causation uses 'dar'."
      },
      {
        id: "dar_2",
        question: "Ese programa de televisión siempre me _____ mucha risa.",
        translation: "(That TV program always makes me laugh a lot)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar risa' means make laugh/be funny. Humor effect uses 'dar'."
      },
      {
        id: "dar_3",
        question: "Me _____ igual si vamos al cine o nos quedamos en casa.",
        translation: "(It's all the same to me if we go to the movies or stay home)",
        options: ["da", "hace", "es", "está"],
        correct: "da",
        explanation: "'Dar igual' means not matter/be indifferent. Indifference uses 'dar'."
      },
      {
        id: "dar_4",
        question: "Ella le _____ las gracias mil veces por toda su ayuda.",
        translation: "(She thanked him a thousand times for all his help)",
        options: ["dio", "hizo", "puso", "tuvo"],
        correct: "dio",
        explanation: "'Dar las gracias' means thank/give thanks. Gratitude expression uses 'dar'."
      },
      {
        id: "dar_5",
        question: "Me _____ mucha pena ver a los animales abandonados en la calle.",
        translation: "(It makes me very sad to see abandoned animals on the street)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar pena' means make sad/feel sorry. Sadness causation uses 'dar'."
      },
      {
        id: "dar_6",
        question: "Vamos a _____ un paseo por el parque ahora que hace buen tiempo.",
        translation: "(We're going to take a walk through the park now that the weather is nice)",
        options: ["dar", "hacer", "tener", "ir"],
        correct: "dar",
        explanation: "'Dar un paseo' means take a walk. Leisure walking uses 'dar'."
      },
      {
        id: "dar_7",
        question: "Me _____ rabia cuando la gente no respeta las normas básicas.",
        translation: "(It makes me angry when people don't respect basic rules)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar rabia' means make angry/infuriate. Anger causation uses 'dar'."
      },
      {
        id: "dar_8",
        question: "Le _____ mucha importancia a su salud y bienestar personal.",
        translation: "(He attaches great importance to his health and personal wellbeing)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar importancia a' means attach importance to. Value assignment uses 'dar'."
      },
      {
        id: "dar_9",
        question: "Ese tema me _____ igual, puedes decidir tú lo que prefieras.",
        translation: "(That topic is all the same to me, you can decide what you prefer)",
        options: ["da", "hace", "es", "pone"],
        correct: "da",
        explanation: "'Dar igual' expresses complete indifference. Lack of preference uses 'dar'."
      },
      {
        id: "dar_10",
        question: "_____ la casualidad de que nos encontramos en el mismo hotel.",
        translation: "(It so happened that we ran into each other at the same hotel)",
        options: ["Dio", "Hizo", "Fue", "Estuvo"],
        correct: "Dio",
        explanation: "'Dar la casualidad' means happen by chance. Coincidence uses 'dar'."
      },
      {
        id: "dar_11",
        question: "Me _____ miedo caminar solo por esa calle oscura de noche.",
        translation: "(It scares me to walk alone on that dark street at night)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar miedo' means scare/frighten. Fear causation uses 'dar'."
      },
      {
        id: "dar_12",
        question: "Él siempre _____ la cara por sus amigos en situaciones difíciles.",
        translation: "(He always stands up for his friends in difficult situations)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar la cara' means stand up for/face responsibility. Loyalty idiom."
      },
      {
        id: "dar_13",
        question: "Le voy a _____ un abrazo grande cuando lo vea después de tanto.",
        translation: "(I'm going to give him a big hug when I see him after so long)",
        options: ["dar", "hacer", "poner", "tener"],
        correct: "dar",
        explanation: "'Dar un abrazo' means give a hug. Physical affection uses 'dar'."
      },
      {
        id: "dar_14",
        question: "Me _____ mucha pereza levantarme tan temprano en la mañana.",
        translation: "(I'm very lazy about getting up so early in the morning)",
        options: ["da", "hace", "pone", "tiene"],
        correct: "da",
        explanation: "'Dar pereza' means make lazy/not feel like. Laziness feeling uses 'dar'."
      },
      {
        id: "dar_15",
        question: "Vamos a _____ una vuelta por el centro comercial este fin de semana.",
        translation: "(We're going to take a walk around the mall this weekend)",
        options: ["dar", "hacer", "tener", "ir"],
        correct: "dar",
        explanation: "'Dar una vuelta' means take a stroll/walk around. Casual walking uses 'dar'."
      }
    ]
  }
};

export default part14Categories;
