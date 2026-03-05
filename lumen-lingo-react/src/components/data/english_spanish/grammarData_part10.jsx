
/**
 * ENGLISH → SPANISH GRAMMAR - PART 10
 * 5 categories, 15 questions each
 */

import { Percent, Code, Mic2, MessageCircle, Coffee } from "lucide-react";

export const part10Categories = {
  percentages_fractions: {
    name: "Percentages and Fractions",
    description: "Express parts and percentages",
    icon: Percent,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "perc_1",
        question: "_____ cincuenta por ciento está de acuerdo.",
        translation: "(Fifty percent agrees)",
        options: ["El", "La", "Los", "Un"],
        correct: "El",
        explanation: "Percentages are masculine. Use 'el' + number + 'por ciento'."
      },
      {
        id: "perc_2",
        question: "_____ mitad de los estudiantes aprobó.",
        translation: "(Half of the students passed)",
        options: ["La", "El", "Una", "Un"],
        correct: "La",
        explanation: "'La mitad' (the half) is feminine. Fixed expression for one half."
      },
      {
        id: "perc_3",
        question: "Comí _____ tercio del pastel.",
        translation: "(I ate one third of the cake)",
        options: ["un", "el", "una", "la"],
        correct: "un",
        explanation: "Fractions are masculine. 'Un tercio' (one third), 'un cuarto' (one fourth)."
      },
      {
        id: "perc_4",
        question: "_____ cien por cien de los votos.",
        translation: "(One hundred percent of the votes)",
        options: ["El", "La", "Un", "Los"],
        correct: "El",
        explanation: "'Por cien' or 'por ciento' both work. Always masculine article."
      },
      {
        id: "perc_5",
        question: "Necesito _____ cuarto de kilo.",
        translation: "(I need a quarter kilo)",
        options: ["un", "una", "el", "la"],
        correct: "un",
        explanation: "'Un cuarto' (one quarter) is masculine fraction."
      },
      {
        id: "perc_6",
        question: "_____ dos tercios ya están listos.",
        translation: "(Two thirds are already ready)",
        options: ["Los", "Las", "El", "La"],
        correct: "Los",
        explanation: "Plural fractions use plural article. 'Los dos tercios' (the two thirds)."
      },
      {
        id: "perc_7",
        question: "El veinte por ciento _____ falta.",
        translation: "(Twenty percent is missing)",
        options: ["falta", "faltan", "es", "son"],
        correct: "falta",
        explanation: "Percentages take singular verb. Treated as singular amount."
      },
      {
        id: "perc_8",
        question: "Dame _____ media taza de café.",
        translation: "(Give me half a cup of coffee)",
        options: ["media", "medio", "la mitad", "el medio"],
        correct: "media",
        explanation: "'Media/medio' (half) agrees with noun. 'Media taza' (feminine)."
      },
      {
        id: "perc_9",
        question: "_____ treinta por ciento son mujeres.",
        translation: "(Thirty percent are women)",
        options: ["El", "Los", "La", "Las"],
        correct: "El",
        explanation: "Percentage is masculine even when referring to feminine group."
      },
      {
        id: "perc_10",
        question: "Bebí _____ botella.",
        translation: "(I drank half the bottle)",
        options: ["media", "medio", "la mitad de la", "el medio de la"],
        correct: "media",
        explanation: "'Media botella' (half bottle). Adjective form agrees with 'botella'."
      },
      {
        id: "perc_11",
        question: "_____ quinto de la población vive allí.",
        translation: "(One fifth of the population lives there)",
        options: ["Un", "Una", "El", "La"],
        correct: "Un",
        explanation: "Ordinal numbers as fractions are masculine. 'Un quinto' (one fifth)."
      },
      {
        id: "perc_12",
        question: "El cincuenta por ciento _____ aprobado.",
        translation: "(Fifty percent has passed)",
        options: ["ha", "han", "es", "son"],
        correct: "ha",
        explanation: "Percentage as subject takes singular verb. Singular 'ha'."
      },
      {
        id: "perc_13",
        question: "Quedó _____ litro de leche.",
        translation: "(Half a liter of milk remained)",
        options: ["medio", "media", "la mitad", "el medio"],
        correct: "medio",
        explanation: "'Medio litro' (masculine). 'Medio/a' agrees with following noun."
      },
      {
        id: "perc_14",
        question: "_____ tres cuartos están completos.",
        translation: "(Three quarters are complete)",
        options: ["Los", "Las", "El", "La"],
        correct: "Los",
        explanation: "Plural fraction takes plural article. 'Los tres cuartos'."
      },
      {
        id: "perc_15",
        question: "Ahorré _____ de mi sueldo.",
        translation: "(I saved half of my salary)",
        options: ["la mitad", "medio", "media", "el medio"],
        correct: "la mitad",
        explanation: "'La mitad de' means 'half of' as noun. Use for general portions."
      }
    ]
  },

  informal_expressions: {
    name: "Informal Expressions",
    description: "Learn casual Spanish phrases",
    icon: Coffee,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    questions: [
      {
        id: "inf_1",
        question: "¿_____?",
        translation: "(What's up? - informal greeting)",
        options: ["Qué tal", "Cómo estás", "Qué pasa", "Qué onda"],
        correct: "Qué tal",
        explanation: "'¿Qué tal?' is casual 'how are you'. Very common informal greeting."
      },
      {
        id: "inf_2",
        question: "Estoy _____.",
        translation: "(I'm broke / without money - slang)",
        options: ["sin blanca", "sin dinero", "pobre", "arruinado"],
        correct: "sin blanca",
        explanation: "'Estar sin blanca' is slang for broke. Regional informal expression."
      },
      {
        id: "inf_3",
        question: "¡Qué _____!",
        translation: "(How cool! / How awesome!)",
        options: ["guay", "bien", "bueno", "bonito"],
        correct: "guay",
        explanation: "'¡Qué guay!' is Spanish slang for cool. Regional variations exist."
      },
      {
        id: "inf_4",
        question: "Estoy _____.",
        translation: "(I'm fed up / sick of it)",
        options: ["harto", "cansado", "aburrido", "enfadado"],
        correct: "harto",
        explanation: "'Estar harto' means fed up. Stronger than just tired."
      },
      {
        id: "inf_5",
        question: "_____ un ratito.",
        translation: "(Wait a little bit - informal)",
        options: ["Espera", "Espere", "Aguarda", "Para"],
        correct: "Espera",
        explanation: "'Espera un ratito' is casual wait. 'Ratito' is diminutive of 'rato'."
      },
      {
        id: "inf_6",
        question: "¡_____!",
        translation: "(Come on! / Let's go!)",
        options: ["Venga", "Vamos", "Anda", "Vale"],
        correct: "Venga",
        explanation: "'¡Venga!' as interjection means come on. Encouragement in Spain."
      },
      {
        id: "inf_7",
        question: "Me da _____ hacerlo.",
        translation: "(I'm too lazy to do it - informal)",
        options: ["pereza", "flojera", "sueño", "hambre"],
        correct: "pereza",
        explanation: "'Dar pereza' means to feel lazy about. Informal expression."
      },
      {
        id: "inf_8",
        question: "_____.",
        translation: "(Okay / Alright - agreement)",
        options: ["Vale", "Bien", "Bueno", "Sí"],
        correct: "Vale",
        explanation: "'Vale' is Spanish for okay/alright. Very common agreement word."
      },
      {
        id: "inf_9",
        question: "Tengo un _____ de hambre.",
        translation: "(I'm starving - informal)",
        options: ["montón", "mucho", "poco", "nada"],
        correct: "montón",
        explanation: "'Un montón de' means tons of. Emphasizes large amount informally."
      },
      {
        id: "inf_10",
        question: "¡Qué _____!",
        translation: "(What a drag! / How boring!)",
        options: ["rollo", "lata", "pesado", "aburrido"],
        correct: "rollo",
        explanation: "'¡Qué rollo!' means what a drag. Colloquial for boring situation."
      },
      {
        id: "inf_11",
        question: "No tengo ni _____.",
        translation: "(I don't have the slightest idea)",
        options: ["idea", "pista", "noción", "concepto"],
        correct: "idea",
        explanation: "'No tener ni idea' means no idea at all. Common informal phrase."
      },
      {
        id: "inf_12",
        question: "Me _____ de risa.",
        translation: "(I died laughing - informal)",
        options: ["morí", "reí", "partí", "caí"],
        correct: "morí",
        explanation: "'Morirse de risa' means die laughing. Exaggerated informal expression."
      },
      {
        id: "inf_13",
        question: "Estoy _____.",
        translation: "(I'm super tired - informal intensifier)",
        options: ["súper cansado", "muy cansado", "cansadísimo", "muerto de cansancio"],
        correct: "súper cansado",
        explanation: "'Súper' as intensifier is informal. More casual than 'muy'."
      },
      {
        id: "inf_14",
        question: "¡No me _____!",
        translation: "(No way! / You're kidding! - disbelief)",
        options: ["digas", "cuentes", "hables", "mientas"],
        correct: "digas",
        explanation: "'¡No me digas!' expresses surprise/disbelief. Common informal reaction."
      },
      {
        id: "inf_15",
        question: "Me da _____ pedirle ayuda.",
        translation: "(I'm embarrassed to ask him for help)",
        options: ["vergüenza", "pena", "miedo", "asco"],
        correct: "vergüenza",
        explanation: "'Dar vergüenza' means to be embarrassed. Common with asking favors."
      }
    ]
  },

  formal_vs_informal: {
    name: "Formal vs Informal Address",
    description: "Master tú vs usted distinctions",
    icon: Code,
    color: "from-purple-500 to-violet-600",
    level: "beginner",
    questions: [
      {
        id: "form_1",
        question: "¿Cómo _____ usted?",
        translation: "(How are you? - formal)",
        options: ["está", "estás", "es", "eres"],
        correct: "está",
        explanation: "'Usted' uses third person conjugation. 'Está' not 'estás' for formal."
      },
      {
        id: "form_2",
        question: "_____ ayudarte.",
        translation: "(I can help you - informal)",
        options: ["Puedo", "Podría", "Puede", "Pueden"],
        correct: "Puedo",
        explanation: "With 'tú' use any verb form. 'Ayudarte' (not 'ayudarle') shows informal."
      },
      {
        id: "form_3",
        question: "¿Quiere _____ algo?",
        translation: "(Do you want something? - formal)",
        options: ["usted", "tú", "∅", "tu"],
        correct: "usted",
        explanation: "Include 'usted' for clarity in formal. Third person verb already shows formality."
      },
      {
        id: "form_4",
        question: "¿Dónde vive _____?",
        translation: "(Where do you live? - formal)",
        options: ["usted", "tú", "∅", "tu"],
        correct: "usted",
        explanation: "Add 'usted' to make formality explicit. Third person 'vive' indicates formal."
      },
      {
        id: "form_5",
        question: "_____ muy amable.",
        translation: "(You are very kind - formal)",
        options: ["Es", "Eres", "Está", "Estás"],
        correct: "Es",
        explanation: "'Ser' third person 'es' for usted. Formal address uses él/ella forms."
      },
      {
        id: "form_6",
        question: "¿Cómo te _____?",
        translation: "(What's your name? - informal)",
        options: ["llamas", "llama", "llamás", "llaman"],
        correct: "llamas",
        explanation: "'Te' shows informal. Use second person 'llamas' with tú."
      },
      {
        id: "form_7",
        question: "Por favor, _____ aquí.",
        translation: "(Please, sit here - formal)",
        options: ["siéntese", "siéntate", "sentarse", "siente"],
        correct: "siéntese",
        explanation: "Formal command uses usted subjunctive + reflexive. 'Siéntese' is formal."
      },
      {
        id: "form_8",
        question: "¿_____ me puede ayudar?",
        translation: "(Can you help me? - very formal/polite)",
        options: ["Usted", "Tú", "∅", "Tu"],
        correct: "Usted",
        explanation: "Include 'usted' at start for very polite requests."
      },
      {
        id: "form_9",
        question: "_____ tienes razón.",
        translation: "(You're right - informal)",
        options: ["Tú", "Usted", "∅", "Tu"],
        correct: "Tú",
        explanation: "Can include 'tú' for emphasis. Second person 'tienes' shows informal."
      },
      {
        id: "form_10",
        question: "¿Le _____ un café?",
        translation: "(Can I offer you a coffee? - formal)",
        options: ["ofrezco", "traigo", "doy", "sirvo"],
        correct: "ofrezco",
        explanation: "'Le' (not 'te') indicates formal. Use with third person verbs."
      },
      {
        id: "form_11",
        question: "_____ esperando aquí.",
        translation: "(Wait here - formal command)",
        options: ["Espere", "Espera", "Esperen", "Esperar"],
        correct: "Espere",
        explanation: "Usted command uses subjunctive form. 'Espere' is formal singular."
      },
      {
        id: "form_12",
        question: "¿_____ puedo preguntar algo?",
        translation: "(May I ask you something? - formal)",
        options: ["Le", "Te", "Lo", "La"],
        correct: "Le",
        explanation: "'Le' is formal indirect object. 'Te' would be informal."
      },
      {
        id: "form_13",
        question: "_____ nombre es María.",
        translation: "(Your name is María - informal)",
        options: ["Tu", "Su", "Tú", "Usted"],
        correct: "Tu",
        explanation: "'Tu' (no accent) possessive for informal you. 'Su' for formal."
      },
      {
        id: "form_14",
        question: "Muchas gracias, señor. _____ muy amable.",
        translation: "(Thank you very much, sir. You're very kind - formal)",
        options: ["Es", "Eres", "Está", "Estás"],
        correct: "Es",
        explanation: "Third person 'es' for formal usted. Title 'señor' confirms formality."
      },
      {
        id: "form_15",
        question: "¿_____ hablas español?",
        translation: "(Do you speak Spanish? - informal)",
        options: ["Tú", "∅", "Usted", "Tu"],
        correct: "∅",
        explanation: "Subject pronoun optional with informal. Second person 'hablas' clear enough."
      }
    ]
  },

  expressing_opinions: {
    name: "Expressing Opinions",
    description: "Share your thoughts and beliefs",
    icon: Mic2,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "op_1",
        question: "_____ que es una buena idea.",
        translation: "(I think it's a good idea)",
        options: ["Creo", "Pienso", "Opino", "Digo"],
        correct: "Creo",
        explanation: "'Creer que' is most common for 'I think'. Use with indicative."
      },
      {
        id: "op_2",
        question: "En mi _____, es demasiado caro.",
        translation: "(In my opinion, it's too expensive)",
        options: ["opinión", "idea", "pensamiento", "creencia"],
        correct: "opinión",
        explanation: "'En mi opinión' is standard phrase. Formal opinion introduction."
      },
      {
        id: "op_3",
        question: "_____ mi parecer, deberías ir.",
        translation: "(In my view, you should go)",
        options: ["A", "En", "De", "Por"],
        correct: "A",
        explanation: "'A mi parecer' means in my view. Alternative to 'en mi opinión'."
      },
      {
        id: "op_4",
        question: "No _____ que sea correcto.",
        translation: "(I don't think it's correct)",
        options: ["creo", "pienso", "opino", "digo"],
        correct: "creo",
        explanation: "'No creo que' triggers subjunctive. Negative opinion uses subjunctive."
      },
      {
        id: "op_5",
        question: "_____ mi punto de vista, es importante.",
        translation: "(From my point of view, it's important)",
        options: ["Desde", "De", "En", "Por"],
        correct: "Desde",
        explanation: "'Desde mi punto de vista' is formal phrase. Expressing perspective."
      },
      {
        id: "op_6",
        question: "Me _____ que tienes razón.",
        translation: "(It seems to me you're right)",
        options: ["parece", "gusta", "importa", "interesa"],
        correct: "parece",
        explanation: "'Parecer' (seem) for gentle opinions. 'Me parece que' is polite."
      },
      {
        id: "op_7",
        question: "_____ de acuerdo contigo.",
        translation: "(I agree with you)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar de acuerdo' means to agree. Fixed expression with estar."
      },
      {
        id: "op_8",
        question: "No _____ de acuerdo.",
        translation: "(I don't agree)",
        options: ["estoy", "soy", "tengo", "hago"],
        correct: "estoy",
        explanation: "'No estar de acuerdo' for disagreement. Polite way to disagree."
      },
      {
        id: "op_9",
        question: "_____ mi juicio, es la mejor opción.",
        translation: "(In my judgment, it's the best option)",
        options: ["A", "En", "De", "Por"],
        correct: "A",
        explanation: "'A mi juicio' is formal opinion phrase. Similar to 'a mi parecer'."
      },
      {
        id: "op_10",
        question: "_____ duda, vale la pena.",
        translation: "(Without doubt, it's worth it)",
        options: ["Sin", "No", "Ninguna", "Con"],
        correct: "Sin",
        explanation: "'Sin duda' means without doubt. Expresses certainty."
      },
      {
        id: "op_11",
        question: "_____ seguro de que vendrá.",
        translation: "(I'm sure he will come)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar seguro' for being sure/certain. Use estar with certainty."
      },
      {
        id: "op_12",
        question: "_____ razón en eso.",
        translation: "(You're right about that)",
        options: ["Tienes", "Eres", "Estás", "Haces"],
        correct: "Tienes",
        explanation: "'Tener razón' means to be right. Use tener, not ser/estar."
      },
      {
        id: "op_13",
        question: "_____ la verdad, no me gusta.",
        translation: "(To tell the truth, I don't like it)",
        options: ["A decir", "Decir", "Diciendo", "Para decir"],
        correct: "A decir",
        explanation: "'A decir verdad' is fixed phrase. Honest opinion introduction."
      },
      {
        id: "op_14",
        question: "_____ equivocado.",
        translation: "(You're wrong / mistaken)",
        options: ["Estás", "Eres", "Tienes", "Haces"],
        correct: "Estás",
        explanation: "'Estar equivocado' means to be wrong. Use estar for states."
      },
      {
        id: "op_15",
        question: "_____ convencido de que sí.",
        translation: "(I'm convinced that yes)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar convencido' for being convinced. Mental state uses estar."
      }
    ]
  },

  making_suggestions: {
    name: "Making Suggestions",
    description: "Propose ideas and recommendations",
    icon: MessageCircle,
    color: "from-lime-500 to-green-600",
    level: "beginner",
    questions: [
      {
        id: "sug_1",
        question: "¿_____ vamos al cine?",
        translation: "(Why don't we go to the movies?)",
        options: ["Por qué no", "Qué tal si", "Podemos", "Vamos"],
        correct: "Por qué no",
        explanation: "'¿Por qué no?' + nosotros form makes suggestion. Casual proposal."
      },
      {
        id: "sug_2",
        question: "_____ salir a cenar.",
        translation: "(Let's go out to dinner)",
        options: ["Vamos a", "Vayamos a", "Podemos", "Debemos"],
        correct: "Vamos a",
        explanation: "'Vamos a' + infinitive for suggestions. Most common let's structure."
      },
      {
        id: "sug_3",
        question: "¿Qué tal si _____ una película?",
        translation: "(How about we watch a movie?)",
        options: ["vemos", "veamos", "ver", "viendo"],
        correct: "vemos",
        explanation: "'¿Qué tal si?' + present indicative. Casual suggestion form."
      },
      {
        id: "sug_4",
        question: "_____ ir al parque.",
        translation: "(We could go to the park)",
        options: ["Podríamos", "Podemos", "Deberíamos", "Vamos"],
        correct: "Podríamos",
        explanation: "'Podríamos' (conditional) for polite suggestion. Softer than present."
      },
      {
        id: "sug_5",
        question: "Te _____ que descanses.",
        translation: "(I suggest you rest)",
        options: ["sugiero", "recomiendo", "aconsejo", "propongo"],
        correct: "sugiero",
        explanation: "'Sugerir que' + subjunctive for suggestions. Triggers subjunctive mood."
      },
      {
        id: "sug_6",
        question: "¿_____ te parece si vamos mañana?",
        translation: "(What do you think if we go tomorrow?)",
        options: ["Qué", "Cómo", "Cuál", "Cuándo"],
        correct: "Qué",
        explanation: "'¿Qué te parece si?' asks for opinion on suggestion. Common proposal."
      },
      {
        id: "sug_7",
        question: "_____ mejor estudiar ahora.",
        translation: "(It would be better to study now)",
        options: ["Sería", "Es", "Está", "Fuera"],
        correct: "Sería",
        explanation: "Conditional 'sería' for polite suggestion. Less direct than 'es mejor'."
      },
      {
        id: "sug_8",
        question: "_____ probarlo primero.",
        translation: "(You should try it first)",
        options: ["Deberías", "Debes", "Tienes que", "Puedes"],
        correct: "Deberías",
        explanation: "Conditional 'deberías' for gentle advice. Softer than 'debes'."
      },
      {
        id: "sug_9",
        question: "¿_____ no descansamos un rato?",
        translation: "(Why don't we rest a while?)",
        options: ["Por qué", "Para qué", "Qué", "Cómo"],
        correct: "Por qué",
        explanation: "'¿Por qué no?' makes friendly suggestion. Rhetorical why not."
      },
      {
        id: "sug_10",
        question: "Te _____ que llames primero.",
        translation: "(I recommend you call first)",
        options: ["recomiendo", "sugiero", "aconsejo", "pido"],
        correct: "recomiendo",
        explanation: "'Recomendar que' + subjunctive. Strong suggestion or recommendation."
      },
      {
        id: "sug_11",
        question: "_____ idea ir en tren.",
        translation: "(It's a good idea to go by train)",
        options: ["Buena", "Buen", "Bien", "Mejor"],
        correct: "Buena",
        explanation: "'Buena idea' + infinitive. Approving suggestion."
      },
      {
        id: "sug_12",
        question: "Yo que tú, _____ más temprano.",
        translation: "(If I were you, I would leave earlier)",
        options: ["saldría", "salgo", "salí", "sale"],
        correct: "saldría",
        explanation: "'Yo que tú' + conditional for advice. Hypothetical suggestion."
      },
      {
        id: "sug_13",
        question: "¿_____ comemos juntos?",
        translation: "(Shall we eat together?)",
        options: ["Comemos", "Vamos a comer", "Comamos", "Comeremos"],
        correct: "Comemos",
        explanation: "Simple present as question makes suggestion. Rising intonation."
      },
      {
        id: "sug_14",
        question: "_____ mejor que esperemos.",
        translation: "(It's better that we wait)",
        options: ["Es", "Sería", "Está", "Sea"],
        correct: "Es",
        explanation: "'Es mejor que' + subjunctive. Strong suggestion about better option."
      },
      {
        id: "sug_15",
        question: "_____ pensarlo bien.",
        translation: "(You should think about it carefully)",
        options: ["Deberías", "Debes", "Puedes", "Tienes que"],
        correct: "Deberías",
        explanation: "Conditional for gentle suggestion. 'Deberías' softer than obligation."
      }
    ]
  },

  idiomatic_expressions: {
    name: "Common Idioms",
    description: "Learn everyday Spanish expressions",
    icon: Mic2,
    color: "from-indigo-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "idiom_1",
        question: "Hace _____ de perros.",
        translation: "(The weather is awful - idiom)",
        options: ["un tiempo", "mucho tiempo", "buen tiempo", "mal tiempo"],
        correct: "un tiempo",
        explanation: "'Hacer un tiempo de perros' means terrible weather. Literally 'dog's weather'."
      },
      {
        id: "idiom_2",
        question: "Me costó un _____ de la cara.",
        translation: "(It cost me an arm and a leg)",
        options: ["ojo", "brazo", "riñón", "pelo"],
        correct: "ojo",
        explanation: "'Costar un ojo de la cara' means very expensive. Literally 'cost an eye'."
      },
      {
        id: "idiom_3",
        question: "_____ en el aire.",
        translation: "(I'm building castles in the air / daydreaming)",
        options: ["Hago castillos", "Estoy", "Vivo", "Pienso"],
        correct: "Hago castillos",
        explanation: "'Hacer castillos en el aire' means unrealistic plans. Daydreaming idiom."
      },
      {
        id: "idiom_4",
        question: "No tiene _____ de tonto.",
        translation: "(He's no fool - idiom)",
        options: ["un pelo", "nada", "poco", "algo"],
        correct: "un pelo",
        explanation: "'No tener un pelo de tonto' means not foolish at all. Negative emphasis."
      },
      {
        id: "idiom_5",
        question: "Me _____ los dedos estudiando.",
        translation: "(I killed myself studying - worked hard)",
        options: ["quemé", "rompí", "corté", "lastimé"],
        correct: "quemé",
        explanation: "'Quemarse los dedos' means work very hard. Literally 'burn fingers'."
      },
      {
        id: "idiom_6",
        question: "Tiene _____ en la boca.",
        translation: "(He was born with a silver spoon - privileged)",
        options: ["pájaros", "flores", "estrellas", "oro"],
        correct: "pájaros",
        explanation: "'Tener pájaros en la cabeza' means scatter-brained. Different idiom."
      },
      {
        id: "idiom_7",
        question: "_____ cuatro gatos en la fiesta.",
        translation: "(There were hardly any people at the party)",
        options: ["Había", "Eran", "Estaban", "Fueron"],
        correct: "Había",
        explanation: "'Cuatro gatos' idiom means very few people. Literally 'four cats'."
      },
      {
        id: "idiom_8",
        question: "Le _____ el agua al cuello.",
        translation: "(He's in deep trouble - water to neck)",
        options: ["llega", "está", "tiene", "pone"],
        correct: "llega",
        explanation: "'Llegar el agua al cuello' means desperate situation. Serious trouble."
      },
      {
        id: "idiom_9",
        question: "Ese tema me _____ sin cuidado.",
        translation: "(I couldn't care less about that topic)",
        options: ["trae", "importa", "interesa", "gusta"],
        correct: "trae",
        explanation: "'Traer sin cuidado' means not care at all. Complete indifference."
      },
      {
        id: "idiom_10",
        question: "_____ moscas con miel que con vinagre.",
        translation: "(You catch more flies with honey than vinegar)",
        options: ["Se cazan más", "Hay más", "Vienen más", "Están más"],
        correct: "Se cazan más",
        explanation: "Proverb about being nice. Same meaning in both languages."
      },
      {
        id: "idiom_11",
        question: "Habla por los _____.",
        translation: "(He talks a lot - talks through elbows)",
        options: ["codos", "dedos", "brazos", "pies"],
        correct: "codos",
        explanation: "'Hablar por los codos' means talk excessively. Literally 'talk through elbows'."
      },
      {
        id: "idiom_12",
        question: "_____ la pata.",
        translation: "(I messed up / made a mistake)",
        options: ["Metí", "Puse", "Hice", "Tuve"],
        correct: "Metí",
        explanation: "'Meter la pata' means make blunder. Literally 'put in the paw'."
      },
      {
        id: "idiom_13",
        question: "Eso es _____ aparte.",
        translation: "(That's a different matter / another story)",
        options: ["harina de otro costal", "otra cosa", "diferente", "aparte"],
        correct: "harina de otro costal",
        explanation: "'Harina de otro costal' means different matter. Literally 'flour from another sack'."
      },
      {
        id: "idiom_14",
        question: "No _____ con rodeos.",
        translation: "(Don't beat around the bush)",
        options: ["vengas", "vayas", "hables", "digas"],
        correct: "vengas",
        explanation: "'No vengas con rodeos' means be direct. Literally 'don't come with detours'."
      },
      {
        id: "idiom_15",
        question: "Me _____ de memoria.",
        translation: "(I know it by heart)",
        options: ["lo sé", "lo conozco", "lo tengo", "lo hago"],
        correct: "lo sé",
        explanation: "'Saber de memoria' means know by heart. Memorized knowledge."
      }
    ]
  }
};

export default part10Categories;
