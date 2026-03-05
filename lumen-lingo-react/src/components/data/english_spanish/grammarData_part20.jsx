/**
 * ENGLISH → SPANISH GRAMMAR - PART 20
 * 5 advanced categories, 15 questions each - Final advanced topics
 */

import { Sparkles, Layers, GitMerge, Gem, Trophy } from "lucide-react";

export const part20Categories = {
  subjunctive_impersonal_expressions: {
    name: "Subjunctive - Impersonal Expressions",
    description: "Es + adjective + que constructions",
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "impers_1",
        question: "Es fundamental que todos _____ puntualmente a la reunión importante de mañana.",
        translation: "(It's fundamental everyone arrives punctually to tomorrow's important meeting)",
        options: ["lleguen", "llegan", "llegarán", "llegaron"],
        correct: "lleguen",
        explanation: "'Es fundamental que' expresses necessity with subjunctive. Important requirement needs subjunctive."
      },
      {
        id: "impers_2",
        question: "Es probable que _____ mañana según el pronóstico meteorológico actualizado.",
        translation: "(It's probable it will rain tomorrow according to the updated weather forecast)",
        options: ["llueva", "llueve", "lloverá", "llovió"],
        correct: "llueva",
        explanation: "'Es probable que' expresses likelihood with subjunctive. Probability requires subjunctive mood."
      },
      {
        id: "impers_3",
        question: "Es cierto que los precios _____ subido considerablemente en los últimos meses.",
        translation: "(It's certain prices have risen considerably in the last months)",
        options: ["han", "hayan", "habían", "hubieran"],
        correct: "han",
        explanation: "'Es cierto que' states fact with indicative. Certainty about reality uses indicative."
      },
      {
        id: "impers_4",
        question: "Es importante que _____ esta información confidencial en secreto absoluto.",
        translation: "(It's important you keep this confidential information in absolute secrecy)",
        options: ["guardes", "guardas", "guardarás", "guardaste"],
        correct: "guardes",
        explanation: "'Es importante que' triggers subjunctive for importance. Crucial action requires subjunctive."
      },
      {
        id: "impers_5",
        question: "Es verdad que el proyecto _____ más tiempo del originalmente estimado.",
        translation: "(It's true the project took more time than originally estimated)",
        options: ["tomó", "tomara", "tome", "toma"],
        correct: "tomó",
        explanation: "'Es verdad que' affirms fact with indicative. Truth statement uses indicative."
      },
      {
        id: "impers_6",
        question: "Es necesario que _____ más atención a los detalles pequeños pero importantes.",
        translation: "(It's necessary we pay more attention to small but important details)",
        options: ["prestemos", "prestamos", "prestaremos", "prestábamos"],
        correct: "prestemos",
        explanation: "'Es necesario que' expresses need with subjunctive. Necessity requires subjunctive mood."
      },
      {
        id: "impers_7",
        question: "Es evidente que ella _____ mucho talento natural para la música clásica.",
        translation: "(It's evident she has a lot of natural talent for classical music)",
        options: ["tiene", "tenga", "tendrá", "tuviera"],
        correct: "tiene",
        explanation: "'Es evidente que' states obvious fact. Evident truth uses indicative."
      },
      {
        id: "impers_8",
        question: "Es posible que ellos _____ cambiar de opinión después de escuchar los argumentos.",
        translation: "(It's possible they'll change their opinion after hearing the arguments)",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "'Es posible que' expresses possibility with subjunctive. Maybe-situation requires subjunctive."
      },
      {
        id: "impers_9",
        question: "Es una lástima que no _____ venir con nosotros al viaje maravilloso.",
        translation: "(It's a shame you can't come with us on the wonderful trip)",
        options: ["puedas", "puedes", "podrás", "podías"],
        correct: "puedas",
        explanation: "'Es una lástima que' expresses regret with subjunctive. Pity about situation requires subjunctive."
      },
      {
        id: "impers_10",
        question: "Es increíble que ya _____ pasado diez años desde que nos graduamos juntos.",
        translation: "(It's incredible ten years have already passed since we graduated together)",
        options: ["hayan", "han", "habían", "hubieran"],
        correct: "hayan",
        explanation: "'Es increíble que' can use subjunctive for amazement. Though fact, emotion triggers subjunctive."
      },
      {
        id: "impers_11",
        question: "Es mejor que _____ inmediatamente antes de que sea demasiado tarde para actuar.",
        translation: "(It's better we leave immediately before it's too late to act)",
        options: ["salgamos", "salimos", "saldremos", "salíamos"],
        correct: "salgamos",
        explanation: "'Es mejor que' gives advice with subjunctive. Recommendation requires subjunctive mood."
      },
      {
        id: "impers_12",
        question: "Es seguro que _____ muchos desafíos difíciles en el camino hacia el éxito.",
        translation: "(It's certain there will be many difficult challenges on the path to success)",
        options: ["habrá", "haya", "habría", "hubiera"],
        correct: "habrá",
        explanation: "'Es seguro que' expresses certainty with indicative. Sure future uses future indicative."
      },
      {
        id: "impers_13",
        question: "Es imprescindible que _____ todos los documentos requeridos antes del viernes próximo.",
        translation: "(It's essential you bring all required documents before next Friday)",
        options: ["traigas", "traes", "traerás", "trajiste"],
        correct: "traigas",
        explanation: "'Es imprescindible que' expresses absolute necessity. Essential requirement needs subjunctive."
      },
      {
        id: "impers_14",
        question: "Es lógico que _____ cansado después de trabajar doce horas seguidas sin parar.",
        translation: "(It's logical you're tired after working twelve hours straight without stopping)",
        options: ["estés", "estás", "estarás", "estabas"],
        correct: "estés",
        explanation: "'Es lógico que' can use subjunctive. Though logical, expressing understanding uses subjunctive."
      },
      {
        id: "impers_15",
        question: "Es un hecho comprobado que la Tierra _____ alrededor del Sol constantemente.",
        translation: "(It's a proven fact the Earth revolves around the Sun constantly)",
        options: ["gira", "gire", "girará", "girara"],
        correct: "gira",
        explanation: "'Es un hecho que' states scientific truth. Indisputable facts use indicative."
      }
    ]
  },

  subjunctive_purpose_clauses: {
    name: "Purpose Clauses - Para que, A fin de que",
    description: "Express intentions and goals with subjunctive",
    icon: Trophy,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "purp_1",
        question: "Te explico todo esto detalladamente para que _____ bien la situación compleja.",
        translation: "(I'm explaining all this to you in detail so you understand the complex situation well)",
        options: ["entiendas", "entiendes", "entenderás", "entendiste"],
        correct: "entiendas",
        explanation: "'Para que' always triggers subjunctive. Purpose of explaining requires subjunctive."
      },
      {
        id: "purp_2",
        question: "Trabajaré horas extras este mes a fin de que mi familia _____ vivir más cómodamente.",
        translation: "(I'll work overtime this month so that my family can live more comfortably)",
        options: ["pueda", "puede", "podrá", "pudo"],
        correct: "pueda",
        explanation: "'A fin de que' formal purpose clause with subjunctive. Goal for family requires subjunctive."
      },
      {
        id: "purp_3",
        question: "Le presté dinero para que _____ pagar sus deudas urgentes del banco.",
        translation: "(I lent him money so he could pay his urgent bank debts)",
        options: ["pudiera", "pudo", "puede", "podrá"],
        correct: "pudiera",
        explanation: "'Para que' in past context uses imperfect subjunctive. Past purpose requires past subjunctive."
      },
      {
        id: "purp_4",
        question: "Hablo despacio y claro para que todos me _____ entender perfectamente bien.",
        translation: "(I speak slowly and clearly so everyone can understand me perfectly well)",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "'Para que' with plural subject. Purpose for group understanding uses subjunctive."
      },
      {
        id: "purp_5",
        question: "Te doy mi número personal para que me _____ contactar cuando lo necesites urgentemente.",
        translation: "(I'm giving you my personal number so you can contact me when you urgently need to)",
        options: ["puedas", "puedes", "podrás", "podías"],
        correct: "puedas",
        explanation: "'Para que' enabling future contact. Purpose of giving information requires subjunctive."
      },
      {
        id: "purp_6",
        question: "Guardé todos los documentos importantes a fin de que no se _____ perder nunca.",
        translation: "(I kept all important documents so they wouldn't get lost ever)",
        options: ["fueran a", "van a", "irán a", "iban a"],
        correct: "fueran a",
        explanation: "'A fin de que' in past with negative purpose. Preventing loss requires past subjunctive."
      },
      {
        id: "purp_7",
        question: "Voy a repetir las instrucciones para que no _____ ninguna confusión posible.",
        translation: "(I'm going to repeat the instructions so there's no possible confusion)",
        options: ["haya", "hay", "habrá", "había"],
        correct: "haya",
        explanation: "'Para que' with negative purpose. Preventing confusion requires subjunctive."
      },
      {
        id: "purp_8",
        question: "Le mandé el correo electrónico para que _____ la información antes de la junta.",
        translation: "(I sent him the email so he would have the information before the meeting)",
        options: ["tuviera", "tuvo", "tiene", "tendrá"],
        correct: "tuviera",
        explanation: "'Para que' in past context requires imperfect subjunctive. Past purpose for past possession."
      },
      {
        id: "purp_9",
        question: "Encendí todas las luces del jardín para que los invitados _____ ver bien el camino.",
        translation: "(I turned on all the garden lights so guests could see the path well)",
        options: ["pudieran", "podían", "pueden", "puedan"],
        correct: "pudieran",
        explanation: "Past 'para que' uses imperfect subjunctive. Past action for past purpose."
      },
      {
        id: "purp_10",
        question: "Estudio mucho cada noche para que mis padres _____ orgullosos de mí.",
        translation: "(I study a lot every night so my parents are proud of me)",
        options: ["estén", "están", "estarán", "estaban"],
        correct: "estén",
        explanation: "'Para que' with emotional goal. Purpose of causing pride requires subjunctive."
      },
      {
        id: "purp_11",
        question: "Bajé el volumen de la música para que los vecinos no se _____ molestar.",
        translation: "(I lowered the music volume so the neighbors wouldn't get bothered)",
        options: ["fueran a", "van a", "vayan a", "iban a"],
        correct: "fueran a",
        explanation: "Past 'para que' with negative purpose uses past subjunctive. Preventing annoyance."
      },
      {
        id: "purp_12",
        question: "Reservé con anticipación para que _____ sitio disponible en el restaurante concurrido.",
        translation: "(I reserved in advance so there would be space available in the crowded restaurant)",
        options: ["hubiera", "haya", "hay", "había"],
        correct: "hubiera",
        explanation: "Past reservation with past purpose uses imperfect subjunctive. Ensuring past availability."
      },
      {
        id: "purp_13",
        question: "Les estoy enviando instrucciones detalladas para que _____ exactamente qué hacer.",
        translation: "(I'm sending you detailed instructions so you know exactly what to do)",
        options: ["sepan", "saben", "sabrán", "sabían"],
        correct: "sepan",
        explanation: "'Para que' with knowledge goal. Purpose of providing clarity requires subjunctive."
      },
      {
        id: "purp_14",
        question: "Compré un coche grande a fin de que toda mi familia _____ viajar cómodamente junta.",
        translation: "(I bought a big car so my entire family could travel comfortably together)",
        options: ["pudiera", "pudo", "puede", "podrá"],
        correct: "pudiera",
        explanation: "Past purchase for past purpose uses imperfect subjunctive. Enabling family comfort."
      },
      {
        id: "purp_15",
        question: "Voy a grabar la conferencia entera para que tú la _____ escuchar después.",
        translation: "(I'm going to record the entire conference so you can listen to it later)",
        options: ["puedas", "puedes", "podrás", "podías"],
        correct: "puedas",
        explanation: "'Para que' enabling future listening. Purpose of recording requires subjunctive."
      }
    ]
  },

  subjunctive_probability: {
    name: "Probability and Possibility Expressions",
    description: "Tal vez, quizás, probablemente with mood changes",
    icon: Layers,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "prob_1",
        question: "Tal vez _____ a visitarte este fin de semana si tengo tiempo libre disponible.",
        translation: "(Perhaps I'll come visit you this weekend if I have free time available)",
        options: ["vaya", "voy", "iré", "fui"],
        correct: "vaya",
        explanation: "'Tal vez' with subjunctive emphasizes uncertainty. Maybe-visit uses subjunctive for doubt."
      },
      {
        id: "prob_2",
        question: "Quizás ellos no _____ enterado todavía de las noticias importantes de hoy.",
        translation: "(Perhaps they haven't found out yet about today's important news)",
        options: ["se hayan", "se han", "se habían", "se hubieran"],
        correct: "se hayan",
        explanation: "'Quizás' with present perfect subjunctive for uncertain past. Maybe they know, maybe not."
      },
      {
        id: "prob_3",
        question: "Probablemente _____ mañana si el pronóstico del tiempo resulta correcto finalmente.",
        translation: "(It will probably rain tomorrow if the weather forecast turns out correct finally)",
        options: ["llueva", "llueve", "lloverá", "llovió"],
        correct: "llueva",
        explanation: "'Probablemente' can use subjunctive for emphasis. Though likely, subjunctive shows remaining doubt."
      },
      {
        id: "prob_4",
        question: "Posiblemente _____ que cambiar nuestros planes de vacaciones por el mal tiempo.",
        translation: "(We'll possibly have to change our vacation plans because of the bad weather)",
        options: ["tengamos", "tenemos", "tendremos", "teníamos"],
        correct: "tengamos",
        explanation: "'Posiblemente' with subjunctive emphasizes uncertainty. Possible need for change."
      },
      {
        id: "prob_5",
        question: "Acaso _____ la verdad escondida si investigamos más profundamente el caso.",
        translation: "(Perhaps we'll discover the hidden truth if we investigate the case more deeply)",
        options: ["descubramos", "descubrimos", "descubriremos", "descubríamos"],
        correct: "descubramos",
        explanation: "'Acaso' literary probability uses subjunctive. Uncertain discovery requires subjunctive."
      },
      {
        id: "prob_6",
        question: "A lo mejor _____ que posponer la boda por la situación familiar complicada.",
        translation: "(Maybe we'll have to postpone the wedding because of the complicated family situation)",
        options: ["tenemos", "tengamos", "tendremos", "teníamos"],
        correct: "tenemos",
        explanation: "'A lo mejor' always uses indicative. Colloquial maybe uses indicative, unlike 'tal vez'."
      },
      {
        id: "prob_7",
        question: "Puede que _____ razón en tu análisis crítico de la situación económica.",
        translation: "(It may be you're right in your critical analysis of the economic situation)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Puede que' always requires subjunctive. Acknowledging possible correctness."
      },
      {
        id: "prob_8",
        question: "Seguramente ya _____ de comer cuando lleguemos al restaurante a las nueve.",
        translation: "(They've surely already eaten when we arrive at the restaurant at nine)",
        options: ["habrán terminado", "hayan terminado", "han terminado", "habían terminado"],
        correct: "habrán terminado",
        explanation: "'Seguramente' with high certainty uses future perfect indicative. Confident prediction uses indicative."
      },
      {
        id: "prob_9",
        question: "Es probable que para esa fecha ya _____ mudado a nuestra casa nueva.",
        translation: "(It's probable that by that date we'll have already moved to our new house)",
        options: ["nos hayamos", "nos hemos", "nos habremos", "nos habíamos"],
        correct: "nos hayamos",
        explanation: "'Es probable que' with future completion uses present perfect subjunctive. Likely future state."
      },
      {
        id: "prob_10",
        question: "Quizás no _____ sido buena idea invertir todo nuestro dinero en ese negocio.",
        translation: "(Perhaps it wasn't a good idea to invest all our money in that business)",
        options: ["haya", "ha", "habría", "había"],
        correct: "haya",
        explanation: "'Quizás' with past uses present perfect subjunctive. Doubting past decision quality."
      },
      {
        id: "prob_11",
        question: "Tal vez _____ demasiado optimistas en nuestras proyecciones financieras iniciales.",
        translation: "(Perhaps we were too optimistic in our initial financial projections)",
        options: ["fuimos", "fuéramos", "seamos", "somos"],
        correct: "fuimos",
        explanation: "'Tal vez' with known past can use indicative. Reflecting on definite past attitude."
      },
      {
        id: "prob_12",
        question: "Puede ser que mañana _____ mejor día para tener esa conversación difícil.",
        translation: "(It may be tomorrow is a better day to have that difficult conversation)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Puede ser que' requires subjunctive. Possibility about better timing."
      },
      {
        id: "prob_13",
        question: "Probablemente no _____ suficiente tiempo para completar todo el trabajo pendiente.",
        translation: "(There probably isn't enough time to complete all the pending work)",
        options: ["haya", "hay", "habrá", "había"],
        correct: "haya",
        explanation: "'Probablemente' with negative can use subjunctive. Likely insufficiency with doubt."
      },
      {
        id: "prob_14",
        question: "Seguro que _____ olvidado nuestra cita porque no ha aparecido todavía.",
        translation: "(I'm sure he's forgotten our appointment because he hasn't shown up yet)",
        options: ["ha", "haya", "había", "hubiera"],
        correct: "ha",
        explanation: "'Seguro que' with high certainty uses indicative. Confident assumption about forgetting."
      },
      {
        id: "prob_15",
        question: "Posiblemente _____ cometido un error al tomar esa decisión tan apresurada.",
        translation: "(I possibly made a mistake in making that very hasty decision)",
        options: ["haya", "he", "había", "hubiera"],
        correct: "haya",
        explanation: "'Posiblemente' with past uses present perfect subjunctive. Uncertain past error."
      }
    ]
  },

  subjunctive_after_aunque: {
    name: "Aunque - Indicative vs Subjunctive",
    description: "Fact vs hypothesis with aunque",
    icon: GitMerge,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "aunque_1",
        question: "Aunque _____ mucho dinero ahorrado, vive de manera muy modesta y sencilla.",
        translation: "(Although he has a lot of money saved, he lives in a very modest and simple way - FACT)",
        options: ["tiene", "tenga", "tendrá", "tuviera"],
        correct: "tiene",
        explanation: "'Aunque' with indicative states known fact. Speaker knows he has money, states it as fact."
      },
      {
        id: "aunque_2",
        question: "Aunque _____ millonario y muy rico, no cambiaría mi forma de vida actual.",
        translation: "(Even if I were a millionaire and very rich, I wouldn't change my current lifestyle - HYPOTHETICAL)",
        options: ["fuera", "soy", "sería", "era"],
        correct: "fuera",
        explanation: "'Aunque' with subjunctive for hypothetical. Not a millionaire, imagining if I were."
      },
      {
        id: "aunque_3",
        question: "Aunque me _____ toda la noche sin dormir, terminaré este proyecto a tiempo.",
        translation: "(Even if I have to stay up all night, I'll finish this project on time)",
        options: ["quede", "quedo", "quedaré", "quedé"],
        correct: "quede",
        explanation: "'Aunque' with future hypothetical uses subjunctive. Uncertain if staying up will be necessary."
      },
      {
        id: "aunque_4",
        question: "Aunque _____ cansado ayer por la noche, fui al gimnasio como siempre hago.",
        translation: "(Although I was tired last night, I went to the gym as I always do - FACT)",
        options: ["estaba", "estuviera", "esté", "estoy"],
        correct: "estaba",
        explanation: "'Aunque' with known past fact uses imperfect. Speaker was definitely tired."
      },
      {
        id: "aunque_5",
        question: "Iré a trabajar mañana aunque _____ enfermo con fiebre alta y malestar.",
        translation: "(I'll go to work tomorrow even if I'm sick with high fever and malaise)",
        options: ["esté", "estoy", "estaré", "estaba"],
        correct: "esté",
        explanation: "'Aunque' with future uncertainty uses subjunctive. Don't know if will be sick tomorrow."
      },
      {
        id: "aunque_6",
        question: "Aunque me lo _____ muchas veces repetidamente, no logro entenderlo bien todavía.",
        translation: "(Although you've explained it to me many times repeatedly, I still can't understand it well - FACT)",
        options: ["has explicado", "hayas explicado", "explicaste", "expliques"],
        correct: "has explicado",
        explanation: "'Aunque' with factual past uses present perfect indicative. Known repeated explanations."
      },
      {
        id: "aunque_7",
        question: "Aunque _____ lloviendo torrencialmente afuera, tenemos que salir ahora mismo urgentemente.",
        translation: "(Even though it's pouring rain outside, we have to leave right now urgently - FACT)",
        options: ["está", "esté", "estará", "estuviera"],
        correct: "está",
        explanation: "'Aunque' with observable fact uses indicative. Currently raining, known fact."
      },
      {
        id: "aunque_8",
        question: "Aunque _____ a llover de repente, no cancelaremos el evento al aire libre.",
        translation: "(Even if it starts to rain suddenly, we won't cancel the outdoor event)",
        options: ["empiece", "empieza", "empezará", "empezó"],
        correct: "empiece",
        explanation: "'Aunque' with possible future uses subjunctive. Rain may or may not happen."
      },
      {
        id: "aunque_9",
        question: "Aunque no me _____ mucho ese género musical, iré al concierto contigo.",
        translation: "(Although I don't like that musical genre very much, I'll go to the concert with you - FACT)",
        options: ["gusta", "guste", "gustará", "gustara"],
        correct: "gusta",
        explanation: "'Aunque' stating personal fact uses indicative. Known preference stated as fact."
      },
      {
        id: "aunque_10",
        question: "Aunque me _____ un millón de euros, no dejaría de trabajar en mi profesión.",
        translation: "(Even if they gave me a million euros, I wouldn't stop working in my profession)",
        options: ["dieran", "dan", "darán", "dieron"],
        correct: "dieran",
        explanation: "'Aunque' with hypothetical offer uses imperfect subjunctive. Imagining unlikely scenario."
      },
      {
        id: "aunque_11",
        question: "Aunque _____ llovido mucho anoche, saldremos a caminar por el parque hoy.",
        translation: "(Although it rained a lot last night, we'll go out walking through the park today - FACT)",
        options: ["ha", "haya", "había", "hubiera"],
        correct: "ha",
        explanation: "'Aunque' with known past event uses perfect indicative. Definite past rain."
      },
      {
        id: "aunque_12",
        question: "Aunque _____ todo su esfuerzo máximo, no logró aprobar el examen difícil.",
        translation: "(Although he put in all his maximum effort, he didn't manage to pass the difficult exam - FACT)",
        options: ["puso", "pusiera", "ponga", "pone"],
        correct: "puso",
        explanation: "'Aunque' with known past action uses preterite. Factual past effort stated."
      },
      {
        id: "aunque_13",
        question: "Aunque me _____ disculpas sinceras ahora, no te perdonaré tan fácilmente.",
        translation: "(Even if you apologize sincerely to me now, I won't forgive you so easily)",
        options: ["pidas", "pides", "pedirás", "pediste"],
        correct: "pidas",
        explanation: "'Aunque' with hypothetical apology uses subjunctive. Uncertain if apology will come."
      },
      {
        id: "aunque_14",
        question: "Aunque siempre _____ tarde habitualmente, lo aprecio mucho como amigo leal.",
        translation: "(Although he always arrives late habitually, I appreciate him a lot as a loyal friend - FACT)",
        options: ["llega", "llegue", "llegará", "llegara"],
        correct: "llega",
        explanation: "'Aunque' with habitual fact uses indicative. Known pattern of tardiness."
      },
      {
        id: "aunque_15",
        question: "Aunque _____ cien años viviendo aquí, nunca me cansaría de este lugar hermoso.",
        translation: "(Even if I lived a hundred years here, I would never tire of this beautiful place)",
        options: ["viviera", "vivo", "viviré", "viví"],
        correct: "viviera",
        explanation: "'Aunque' with hypothetical duration uses imperfect subjunctive. Imagining extended timeframe."
      }
    ]
  },

  subjunctive_relative_clauses: {
    name: "Subjunctive in Relative Clauses",
    description: "Definite vs indefinite antecedents",
    icon: Gem,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "rel_cl_1",
        question: "Conozco a una persona que _____ hablar siete idiomas diferentes con fluidez.",
        translation: "(I know a person who can speak seven different languages fluently - DEFINITE)",
        options: ["puede", "pueda", "podrá", "pudiera"],
        correct: "puede",
        explanation: "Known specific person uses indicative. Identified individual with known ability."
      },
      {
        id: "rel_cl_2",
        question: "Busco una persona que _____ hablar chino mandarín para un proyecto internacional.",
        translation: "(I'm looking for a person who can speak Mandarin Chinese for an international project - INDEFINITE)",
        options: ["pueda", "puede", "podrá", "pudo"],
        correct: "pueda",
        explanation: "Unknown sought person uses subjunctive. Not sure if such person exists."
      },
      {
        id: "rel_cl_3",
        question: "Tengo un coche que _____ perfecto para viajes largos por carretera de vacaciones.",
        translation: "(I have a car that's perfect for long road trips on vacation - DEFINITE)",
        options: ["es", "sea", "será", "fuera"],
        correct: "es",
        explanation: "Possessed specific car uses indicative. Known car with identified quality."
      },
      {
        id: "rel_cl_4",
        question: "Quiero comprar un coche que _____ económico en combustible y espacioso también.",
        translation: "(I want to buy a car that's economical in fuel and also spacious - INDEFINITE)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "Desired but unidentified car uses subjunctive. Dream car not yet found."
      },
      {
        id: "rel_cl_5",
        question: "Hay un restaurante aquí cerca que _____ comida vegetariana orgánica excelente.",
        translation: "(There's a restaurant nearby that serves excellent organic vegetarian food - DEFINITE)",
        options: ["sirve", "sirva", "servirá", "sirviera"],
        correct: "sirve",
        explanation: "'Hay' with known restaurant uses indicative. Specific identified establishment."
      },
      {
        id: "rel_cl_6",
        question: "¿Hay algún restaurante por aquí que _____ comida italiana auténtica de calidad?",
        translation: "(Is there any restaurant around here that serves quality authentic Italian food? - QUESTION)",
        options: ["sirva", "sirve", "servirá", "sirvió"],
        correct: "sirva",
        explanation: "Question about unknown restaurant uses subjunctive. Uncertain if such place exists."
      },
      {
        id: "rel_cl_7",
        question: "El libro que me _____ tu hermano ayer es muy interesante y bien escrito.",
        translation: "(The book your brother lent me yesterday is very interesting and well-written - DEFINITE)",
        options: ["prestó", "prestara", "preste", "presta"],
        correct: "prestó",
        explanation: "Specific known book uses preterite indicative. Definite past lending."
      },
      {
        id: "rel_cl_8",
        question: "Necesito alguien que me _____ un libro bueno sobre historia medieval europea.",
        translation: "(I need someone who can lend me a good book about European medieval history - INDEFINITE)",
        options: ["preste", "presta", "prestará", "prestó"],
        correct: "preste",
        explanation: "Unknown helpful person uses subjunctive. Seeking someone with capability."
      },
      {
        id: "rel_cl_9",
        question: "No conozco a nadie que _____ mejor que ella ese deporte tan difícil.",
        translation: "(I don't know anyone who plays that very difficult sport better than she does - NEGATIVE)",
        options: ["juegue", "juega", "jugará", "jugó"],
        correct: "juegue",
        explanation: "Negative antecedent 'nadie' requires subjunctive. Denying existence of superior player."
      },
      {
        id: "rel_cl_10",
        question: "Vivimos en un barrio que _____ todos los servicios necesarios muy cerca.",
        translation: "(We live in a neighborhood that has all necessary services very close - DEFINITE)",
        options: ["tiene", "tenga", "tendrá", "tuviera"],
        correct: "tiene",
        explanation: "Current residence with known features uses indicative. Actual neighborhood characteristics."
      },
      {
        id: "rel_cl_11",
        question: "Queremos mudarnos a un barrio que _____ cerca de buenas escuelas públicas.",
        translation: "(We want to move to a neighborhood that's close to good public schools - INDEFINITE)",
        options: ["esté", "está", "estará", "estaba"],
        correct: "esté",
        explanation: "Desired but unidentified neighborhood uses subjunctive. Ideal location not yet found."
      },
      {
        id: "rel_cl_12",
        question: "El médico que me _____ ayer es muy profesional y experimentado en su campo.",
        translation: "(The doctor who treated me yesterday is very professional and experienced in his field - DEFINITE)",
        options: ["atendió", "atendiera", "atienda", "atiende"],
        correct: "atendió",
        explanation: "Specific doctor from past uses preterite indicative. Known past treatment."
      },
      {
        id: "rel_cl_13",
        question: "Necesito un médico que _____ especializado en medicina deportiva para atletas.",
        translation: "(I need a doctor who is specialized in sports medicine for athletes - INDEFINITE)",
        options: ["esté", "está", "estará", "estaba"],
        correct: "esté",
        explanation: "Seeking unknown specialist uses subjunctive. Uncertain if finding such doctor."
      },
      {
        id: "rel_cl_14",
        question: "Trabajo en una empresa que _____ oportunidades excelentes de desarrollo profesional.",
        translation: "(I work at a company that offers excellent professional development opportunities - DEFINITE)",
        options: ["ofrece", "ofrezca", "ofrecerá", "ofreciera"],
        correct: "ofrece",
        explanation: "Current employer with known benefits uses indicative. Actual workplace features."
      },
      {
        id: "rel_cl_15",
        question: "Busco trabajo en una empresa que _____ buen equilibrio entre vida y trabajo.",
        translation: "(I'm looking for work at a company that values good work-life balance - INDEFINITE)",
        options: ["valore", "valora", "valorará", "valoró"],
        correct: "valore",
        explanation: "Job search for unknown company uses subjunctive. Ideal employer not yet identified."
      }
    ]
  },

  expressions_with_subjunctive: {
    name: "Fixed Expressions with Subjunctive",
    description: "Set phrases requiring subjunctive mood",
    icon: Trophy,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "expr_subj_1",
        question: "_____ lo que _____, no voy a cambiar mi decisión final y definitiva.",
        translation: "(Whatever happens, I'm not going to change my final and definitive decision)",
        options: ["Pase / pase", "Pasa / pasa", "Pasará / pasará", "Pasó / pasó"],
        correct: "Pase / pase",
        explanation: "'Pase lo que pase' fixed expression. Whatever may happen uses double subjunctive."
      },
      {
        id: "expr_subj_2",
        question: "_____ quien _____, tendrá que seguir las normas establecidas de la empresa.",
        translation: "(Whoever it may be, will have to follow the established company rules)",
        options: ["Sea / sea", "Es / es", "Será / será", "Fue / fue"],
        correct: "Sea / sea",
        explanation: "'Sea quien sea' fixed expression. Unknown identity uses double subjunctive."
      },
      {
        id: "expr_subj_3",
        question: "_____ donde _____, siempre recordaré con cariño mi ciudad natal querida.",
        translation: "(Wherever I am, I'll always remember my beloved hometown with affection)",
        options: ["Esté / esté", "Estoy / estoy", "Estaré / estaré", "Estaba / estaba"],
        correct: "Esté / esté",
        explanation: "'Esté donde esté' fixed expression. Wherever location uses double subjunctive."
      },
      {
        id: "expr_subj_4",
        question: "_____ como _____, debemos aceptar las consecuencias de nuestras acciones pasadas.",
        translation: "(Be that as it may, we must accept the consequences of our past actions)",
        options: ["Sea / sea", "Es / es", "Será / será", "Fue / fue"],
        correct: "Sea / sea",
        explanation: "'Sea como sea' fixed expression. Regardless of circumstances uses double subjunctive."
      },
      {
        id: "expr_subj_5",
        question: "_____ lo que me _____, seguiré adelante con mis planes sin rendirme nunca.",
        translation: "(Whatever they say to me, I'll continue forward with my plans without ever giving up)",
        options: ["Digan / digan", "Dicen / dicen", "Dirán / dirán", "Dijeron / dijeron"],
        correct: "Digan / digan",
        explanation: "'Digan lo que digan' fixed expression. Whatever people say uses double subjunctive."
      },
      {
        id: "expr_subj_6",
        question: "_____ lo que _____, no pienso cambiar de opinión sobre este tema importante.",
        translation: "(No matter what you think, I don't plan to change my opinion about this important topic)",
        options: ["Pienses / pienses", "Piensas / piensas", "Pensarás / pensarás", "Pensaste / pensaste"],
        correct: "Pienses / pienses",
        explanation: "'Pienses lo que pienses' fixed expression. Regardless of opinion uses double subjunctive."
      },
      {
        id: "expr_subj_7",
        question: "_____ lo que _____, la vida continúa y debemos seguir adelante con esperanza.",
        translation: "(Whatever happens, life continues and we must go forward with hope)",
        options: ["Ocurra / ocurra", "Ocurre / ocurre", "Ocurrirá / ocurrirá", "Ocurrió / ocurrió"],
        correct: "Ocurra / ocurra",
        explanation: "'Ocurra lo que ocurra' fixed expression. Whatever events uses double subjunctive."
      },
      {
        id: "expr_subj_8",
        question: "_____ la hora que _____, siempre puedes llamarme si necesitas ayuda urgente.",
        translation: "(Whatever time it is, you can always call me if you need urgent help)",
        options: ["Sea / sea", "Es / es", "Será / será", "Fue / fue"],
        correct: "Sea / sea",
        explanation: "'Sea la hora que sea' fixed expression. Anytime availability uses double subjunctive."
      },
      {
        id: "expr_subj_9",
        question: "_____ donde _____, te encontraré porque te conozco muy bien desde hace años.",
        translation: "(Wherever you hide, I'll find you because I've known you very well for years)",
        options: ["Te escondas / te escondas", "Te escondes / te escondes", "Te esconderás / te esconderás", "Te escondiste / te escondiste"],
        correct: "Te escondas / te escondas",
        explanation: "'Te escondas donde te escondas' fixed expression. Wherever hiding uses double subjunctive."
      },
      {
        id: "expr_subj_10",
        question: "_____ duro que _____ el camino, nunca me rendiré ante los obstáculos difíciles.",
        translation: "(However hard the path may be, I'll never give up in the face of difficult obstacles)",
        options: ["Sea / sea", "Es / es", "Será / será", "Fue / fue"],
        correct: "Sea / sea",
        explanation: "'Sea duro que sea' fixed expression. However difficult uses double subjunctive."
      },
      {
        id: "expr_subj_11",
        question: "_____ temprano que _____, siempre hay tráfico pesado en esta autopista congestionada.",
        translation: "(However early you leave, there's always heavy traffic on this congested highway)",
        options: ["Salgas / salgas", "Sales / sales", "Saldrás / saldrás", "Saliste / saliste"],
        correct: "Salgas / salgas",
        explanation: "'Salgas temprano que salgas' fixed pattern. However early uses double subjunctive."
      },
      {
        id: "expr_subj_12",
        question: "_____ las razones que _____, no jusifican ese comportamiento inaceptable suyo.",
        translation: "(Whatever the reasons may be, they don't justify that unacceptable behavior of his)",
        options: ["Sean / sean", "Son / son", "Serán / serán", "Fueron / fueron"],
        correct: "Sean / sean",
        explanation: "'Sean las razones que sean' fixed expression. Whatever justifications use double subjunctive."
      },
      {
        id: "expr_subj_13",
        question: "_____ el precio que _____, voy a comprar ese regalo especial para mi madre.",
        translation: "(Whatever the price is, I'm going to buy that special gift for my mother)",
        options: ["Sea / sea", "Es / es", "Será / será", "Fue / fue"],
        correct: "Sea / sea",
        explanation: "'Sea el precio que sea' fixed expression. Regardless of cost uses double subjunctive."
      },
      {
        id: "expr_subj_14",
        question: "_____ el motivo que _____, no deberías haber actuado de esa manera tan grosera.",
        translation: "(Whatever the motive was, you shouldn't have acted in such a rude manner)",
        options: ["Fuera / fuera", "Fue / fue", "Sea / sea", "Es / es"],
        correct: "Fuera / fuera",
        explanation: "'Fuera el motivo que fuera' past fixed expression. Whatever past reason uses imperfect subjunctive."
      },
      {
        id: "expr_subj_15",
        question: "_____ tarde que _____, siempre me espera despierto hasta que llego a casa.",
        translation: "(However late I arrive, he always waits for me awake until I get home)",
        options: ["Llegue / llegue", "Llego / llego", "Llegaré / llegaré", "Llegué / llegué"],
        correct: "Llegue / llegue",
        explanation: "'Llegue tarde que llegue' fixed pattern. However late uses double subjunctive."
      }
    ]
  }
};

export default part20Categories;