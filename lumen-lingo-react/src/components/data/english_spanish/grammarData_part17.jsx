/**
 * ENGLISH → SPANISH GRAMMAR - PART 17
 * 5 advanced categories, 15 questions each - Complex discourse and style
 */

import { FileText, Headphones, Zap, BookText, Target } from "lucide-react";

export const part17Categories = {
  reported_speech_advanced: {
    name: "Reported Speech - Advanced",
    description: "Master complex indirect speech transformations",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "rep_sp_1",
        question: "Me prometió que me _____ cuando tuviera noticias importantes del proyecto.",
        translation: "(He promised me he would call me when he had important news about the project)",
        options: ["llamaría", "llamará", "llama", "llamó"],
        correct: "llamaría",
        explanation: "Future in direct speech becomes conditional in reported speech. Past reporting pulls future to conditional."
      },
      {
        id: "rep_sp_2",
        question: "Ella dijo que ya _____ terminado su trabajo antes de salir de la oficina.",
        translation: "(She said she had already finished her work before leaving the office)",
        options: ["había", "ha", "habría", "hubo"],
        correct: "había",
        explanation: "Present perfect in direct speech becomes pluperfect in past reported speech. Time reference shifts backward."
      },
      {
        id: "rep_sp_3",
        question: "Me preguntó si yo _____ ir con ellos al concierto del sábado próximo.",
        translation: "(He asked me if I could go with them to next Saturday's concert)",
        options: ["podría", "puedo", "podré", "pude"],
        correct: "podría",
        explanation: "Questions in reported speech use conditional for future possibility. 'Can you' becomes 'if I could'."
      },
      {
        id: "rep_sp_4",
        question: "Nos informaron que el vuelo _____ retrasado por problemas técnicos.",
        translation: "(They informed us the flight had been delayed due to technical problems)",
        options: ["había sido", "fue", "ha sido", "sería"],
        correct: "había sido",
        explanation: "Past event before reporting moment uses pluperfect. Prior completion relative to informing."
      },
      {
        id: "rep_sp_5",
        question: "Comentó que nunca _____ a España pero que le encantaría visitarla.",
        translation: "(He commented he had never been to Spain but would love to visit it)",
        options: ["había estado", "estuvo", "ha estado", "estaría"],
        correct: "había estado",
        explanation: "Never having done something by reporting time uses pluperfect. Life experience up to comment."
      },
      {
        id: "rep_sp_6",
        question: "El profesor nos advirtió que el examen final _____ mucho más difícil.",
        translation: "(The professor warned us the final exam would be much more difficult)",
        options: ["sería", "será", "es", "fue"],
        correct: "sería",
        explanation: "Future from past perspective uses conditional. Warning about future event in reported speech."
      },
      {
        id: "rep_sp_7",
        question: "Me confesó que _____ muy nervioso durante toda la entrevista de trabajo.",
        translation: "(He confessed to me he had been very nervous throughout the entire job interview)",
        options: ["había estado", "estuvo", "estaba", "estaría"],
        correct: "había estado",
        explanation: "Completed past state before confessing uses pluperfect. Interview happened before confession."
      },
      {
        id: "rep_sp_8",
        question: "Dijeron que nos _____ saber los resultados en cuanto los tuvieran listos.",
        translation: "(They said they would let us know the results as soon as they had them ready)",
        options: ["harían", "harán", "hacen", "hicieron"],
        correct: "harían",
        explanation: "Future promise from past uses conditional. 'Will let you know' becomes 'would let know'."
      },
      {
        id: "rep_sp_9",
        question: "Aseguró que para entonces ya _____ todo el dinero que debía al banco.",
        translation: "(He assured that by then he would have already paid all the money he owed to the bank)",
        options: ["habría pagado", "habrá pagado", "ha pagado", "había pagado"],
        correct: "habría pagado",
        explanation: "Future perfect in direct speech becomes conditional perfect in reported. Future completion from past perspective."
      },
      {
        id: "rep_sp_10",
        question: "Nos explicó que sus padres _____ viviendo en el extranjero desde hacía años.",
        translation: "(He explained to us his parents had been living abroad for years)",
        options: ["llevaban", "llevan", "llevaron", "llevarían"],
        correct: "llevaban",
        explanation: "Ongoing past duration uses imperfect in reported speech. Background state at time of explanation."
      },
      {
        id: "rep_sp_11",
        question: "Me aconsejó que _____ más atención en clase para mejorar mis notas.",
        translation: "(She advised me to pay more attention in class to improve my grades)",
        options: ["pusiera", "ponga", "pondría", "puse"],
        correct: "pusiera",
        explanation: "Commands/advice in reported speech become imperfect subjunctive. Recommendation from past uses past subjunctive."
      },
      {
        id: "rep_sp_12",
        question: "Afirmó rotundamente que él no _____ nada que ver con el escándalo.",
        translation: "(He categorically stated he had nothing to do with the scandal)",
        options: ["tenía", "tiene", "tendría", "tuvo"],
        correct: "tenía",
        explanation: "Present denial in direct becomes imperfect in reported. Ongoing non-involvement statement."
      },
      {
        id: "rep_sp_13",
        question: "Me comentó que _____ estudiando español desde hacía tres años sin interrupción.",
        translation: "(She told me she had been studying Spanish for three years without interruption)",
        options: ["llevaba", "lleva", "llevó", "llevaría"],
        correct: "llevaba",
        explanation: "Progressive duration statement uses imperfect in reported speech. Ongoing learning at comment time."
      },
      {
        id: "rep_sp_14",
        question: "Declaró públicamente que nunca _____ a renunciar a sus principios fundamentales.",
        translation: "(He publicly declared he would never give up his fundamental principles)",
        options: ["iba", "va", "iría", "fue"],
        correct: "iba",
        explanation: "Future intention from past uses imperfect of 'ir a'. Determination expressed in past."
      },
      {
        id: "rep_sp_15",
        question: "Mencionó que ese día _____ el más feliz de toda su vida hasta ahora.",
        translation: "(He mentioned that that day had been the happiest of his entire life so far)",
        options: ["había sido", "fue", "ha sido", "sería"],
        correct: "había sido",
        explanation: "Completed past event before mentioning uses pluperfect. Day completed before the telling."
      }
    ]
  },

  passive_voice_advanced: {
    name: "Passive Voice - Advanced Structures",
    description: "Complex passive and impersonal constructions",
    icon: Headphones,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "pass_adv_1",
        question: "El edificio histórico _____ por el famoso arquitecto Gaudí en 1910.",
        translation: "(The historic building was designed by the famous architect Gaudí in 1910)",
        options: ["fue diseñado", "se diseñó", "era diseñado", "estuvo diseñado"],
        correct: "fue diseñado",
        explanation: "'Ser' passive for specific completed action with agent. Definite past event with known doer uses 'fue'."
      },
      {
        id: "pass_adv_2",
        question: "_____ prohibido estrictamente fumar en todos los espacios cerrados del edificio.",
        translation: "(Smoking is strictly prohibited in all enclosed spaces of the building)",
        options: ["Está", "Es", "Se", "Hay"],
        correct: "Está",
        explanation: "'Estar' + past participle for resulting state. Current prohibition state from past action."
      },
      {
        id: "pass_adv_3",
        question: "La novela _____ traducida a más de cincuenta idiomas diferentes alrededor del mundo.",
        translation: "(The novel has been translated into more than fifty different languages around the world)",
        options: ["ha sido", "fue", "es", "está"],
        correct: "ha sido",
        explanation: "Present perfect passive for completed action relevant now. Translation history affecting present status."
      },
      {
        id: "pass_adv_4",
        question: "_____ vendieron todas las entradas para el espectáculo en menos de una hora.",
        translation: "(All tickets for the show were sold in less than one hour)",
        options: ["Se", "Fueron", "Están", "Han"],
        correct: "Se",
        explanation: "Passive 'se' preferred over 'ser' passive in Spanish. More natural for indefinite agent."
      },
      {
        id: "pass_adv_5",
        question: "Los documentos importantes _____ guardados bajo llave en la caja fuerte de seguridad.",
        translation: "(The important documents are kept under lock and key in the safety deposit box)",
        options: ["están", "son", "se", "fueron"],
        correct: "están",
        explanation: "'Estar' + participle for current location state. Resulting condition of storage."
      },
      {
        id: "pass_adv_6",
        question: "El proyecto _____ siendo supervisado personalmente por el director ejecutivo.",
        translation: "(The project is being personally supervised by the executive director)",
        options: ["está", "es", "se", "fue"],
        correct: "está",
        explanation: "Progressive passive uses 'estar siendo' + participle. Ongoing passive action right now."
      },
      {
        id: "pass_adv_7",
        question: "_____ construyendo un nuevo hospital moderno en las afueras de la ciudad.",
        translation: "(A new modern hospital is being built on the outskirts of the city)",
        options: ["Se está", "Está", "Es", "Fue"],
        correct: "Se está",
        explanation: "Progressive passive 'se' for ongoing construction. Current building process without agent."
      },
      {
        id: "pass_adv_8",
        question: "La teoría _____ formulada por el científico hace más de un siglo.",
        translation: "(The theory was formulated by the scientist over a century ago)",
        options: ["fue", "se", "era", "estuvo"],
        correct: "fue",
        explanation: "'Ser' passive with specific agent in definite past. Historical formulation with known scientist."
      },
      {
        id: "pass_adv_9",
        question: "_____ aceptan tarjetas de crédito en la mayoría de los comercios modernos.",
        translation: "(Credit cards are accepted in most modern businesses)",
        options: ["Se", "Son", "Están", "Han"],
        correct: "Se",
        explanation: "General passive 'se' for universal practice. Common business policy statement."
      },
      {
        id: "pass_adv_10",
        question: "El acuerdo comercial _____ firmado después de meses de negociaciones intensas.",
        translation: "(The commercial agreement was signed after months of intense negotiations)",
        options: ["fue", "se", "era", "estuvo"],
        correct: "fue",
        explanation: "'Ser' passive for completed formal event. Specific signing after negotiation process."
      },
      {
        id: "pass_adv_11",
        question: "_____ cerradas todas las ventanas antes de que empezara la tormenta fuerte.",
        translation: "(All windows were closed before the strong storm started)",
        options: ["Fueron", "Se", "Estaban", "Estuvieron"],
        correct: "Fueron",
        explanation: "'Ser' passive for completed action. Specific closing action before storm."
      },
      {
        id: "pass_adv_12",
        question: "La ceremonia _____ celebrada en el salón principal del palacio presidencial.",
        translation: "(The ceremony was celebrated in the main hall of the presidential palace)",
        options: ["fue", "se", "era", "estuvo"],
        correct: "fue",
        explanation: "'Ser' passive for formal ceremonial event. Specific celebration with location."
      },
      {
        id: "pass_adv_13",
        question: "_____ necesita personal con experiencia para el nuevo departamento de ventas.",
        translation: "(Experienced personnel is needed for the new sales department)",
        options: ["Se", "Es", "Está", "Son"],
        correct: "Se",
        explanation: "Impersonal 'se' for hiring needs. Job requirement statement without agent."
      },
      {
        id: "pass_adv_14",
        question: "Los resultados _____ anunciados mañana durante la conferencia de prensa oficial.",
        translation: "(The results will be announced tomorrow during the official press conference)",
        options: ["serán", "se", "estarán", "fueron"],
        correct: "serán",
        explanation: "Future 'ser' passive for planned formal announcement. Scheduled revelation of results."
      },
      {
        id: "pass_adv_15",
        question: "La decisión final _____ tomada por el comité directivo en reunión extraordinaria.",
        translation: "(The final decision was made by the board of directors in extraordinary meeting)",
        options: ["fue", "se", "era", "estuvo"],
        correct: "fue",
        explanation: "'Ser' passive with specific agent for important decision. Formal resolution by identified body."
      }
    ]
  },

  subjunctive_temporal_clauses: {
    name: "Subjunctive in Temporal Clauses",
    description: "Time expressions requiring subjunctive",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "temp_cl_1",
        question: "Te avisaré en cuanto _____ alguna novedad importante sobre el asunto.",
        translation: "(I'll let you know as soon as I have any important news about the matter)",
        options: ["tenga", "tengo", "tendré", "tuve"],
        correct: "tenga",
        explanation: "'En cuanto' with future reference requires subjunctive. Waiting for uncertain future information."
      },
      {
        id: "temp_cl_2",
        question: "Vamos a esperar aquí hasta que _____ nuestro amigo que viene en tren.",
        translation: "(We're going to wait here until our friend who's coming by train arrives)",
        options: ["llegue", "llega", "llegará", "llegó"],
        correct: "llegue",
        explanation: "'Hasta que' with pending action uses subjunctive. Future-oriented waiting requires this mood."
      },
      {
        id: "temp_cl_3",
        question: "Cuando _____ más experiencia laboral, podrás solicitar mejores puestos de trabajo.",
        translation: "(When you have more work experience, you'll be able to apply for better job positions)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "Future time clause with 'cuando' requires subjunctive. Hypothetical future moment needs subjunctive."
      },
      {
        id: "temp_cl_4",
        question: "Mientras _____ en esta casa, tendrás que respetar todas nuestras reglas.",
        translation: "(While you live in this house, you'll have to respect all our rules)",
        options: ["vivas", "vives", "vivirás", "viviste"],
        correct: "vivas",
        explanation: "'Mientras' with future or indefinite duration uses subjunctive. Ongoing future condition."
      },
      {
        id: "temp_cl_5",
        question: "Tan pronto como _____ del aeropuerto, iré directamente a verte a tu casa.",
        translation: "(As soon as I arrive from the airport, I'll go directly to see you at your house)",
        options: ["llegue", "llego", "llegaré", "llegué"],
        correct: "llegue",
        explanation: "'Tan pronto como' with future triggers subjunctive. Immediate future action upon condition."
      },
      {
        id: "temp_cl_6",
        question: "Antes de que _____ demasiado tarde, deberías disculparte sinceramente con ella.",
        translation: "(Before it's too late, you should apologize sincerely to her)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Antes de que' always requires subjunctive. Prevention of future undesirable state."
      },
      {
        id: "temp_cl_7",
        question: "Después de que _____ de llover afuera, saldremos a dar un paseo por el parque.",
        translation: "(After it stops raining outside, we'll go out for a walk through the park)",
        options: ["deje", "deja", "dejará", "dejó"],
        correct: "deje",
        explanation: "'Después de que' with future event requires subjunctive. Planning for uncertain future cessation."
      },
      {
        id: "temp_cl_8",
        question: "No podré relajarme hasta que no _____ terminado completamente este informe urgente.",
        translation: "(I won't be able to relax until I've completely finished this urgent report)",
        options: ["haya", "he", "habré", "había"],
        correct: "haya",
        explanation: "'Hasta que' with completion requires present perfect subjunctive. Future completion blocking relaxation."
      },
      {
        id: "temp_cl_9",
        question: "Una vez que _____ tu decisión final, no hay vuelta atrás en este proceso.",
        translation: "(Once you make your final decision, there's no turning back in this process)",
        options: ["tomes", "tomas", "tomarás", "tomaste"],
        correct: "tomes",
        explanation: "'Una vez que' with future consequence uses subjunctive. Irreversible future choice."
      },
      {
        id: "temp_cl_10",
        question: "Cada vez que _____ a ese restaurante, siempre pido el mismo plato delicioso.",
        translation: "(Every time I go to that restaurant, I always order the same delicious dish)",
        options: ["voy", "vaya", "iré", "fui"],
        correct: "voy",
        explanation: "'Cada vez que' with habitual action uses indicative. Repeated pattern uses indicative, not subjunctive."
      },
      {
        id: "temp_cl_11",
        question: "Cuando _____ pequeño, siempre jugaba en el parque con mis amigos del barrio.",
        translation: "(When I was little, I always used to play in the park with my neighborhood friends)",
        options: ["era", "fuera", "sea", "soy"],
        correct: "era",
        explanation: "'Cuando' referring to completed habitual past uses imperfect indicative. Childhood state is factual past."
      },
      {
        id: "temp_cl_12",
        question: "Apenas _____ el examen final, me iré de vacaciones bien merecidas a la playa.",
        translation: "(As soon as I finish the final exam, I'll go on well-deserved vacation to the beach)",
        options: ["termine", "termino", "terminaré", "terminé"],
        correct: "termine",
        explanation: "'Apenas' with future event requires subjunctive. Immediate action upon future completion."
      },
      {
        id: "temp_cl_13",
        question: "Cuando _____ la lotería el mes pasado, no pude creerlo al principio.",
        translation: "(When I won the lottery last month, I couldn't believe it at first)",
        options: ["gané", "ganara", "gane", "gano"],
        correct: "gané",
        explanation: "'Cuando' with completed specific past uses preterite indicative. Definite past event uses indicative."
      },
      {
        id: "temp_cl_14",
        question: "Siempre que _____ ayuda con algo, no dudes en llamarme cuando quieras.",
        translation: "(Whenever you need help with something, don't hesitate to call me whenever you want)",
        options: ["necesites", "necesitas", "necesitarás", "necesitaste"],
        correct: "necesites",
        explanation: "'Siempre que' meaning 'whenever' with future uses subjunctive. Open-ended future occasions."
      },
      {
        id: "temp_cl_15",
        question: "No saldremos de casa hasta que no _____ de llover completamente afuera.",
        translation: "(We won't leave the house until it completely stops raining outside)",
        options: ["haya dejado", "ha dejado", "deje", "dejará"],
        correct: "haya dejado",
        explanation: "'Hasta que' with completion uses present perfect subjunctive. Waiting for finished rain cessation."
      }
    ]
  },

  register_formality: {
    name: "Register and Formality",
    description: "Navigate formal vs informal language contexts",
    icon: BookText,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "reg_1",
        question: "¿_____ usted ayudarme con este problema técnico tan complicado, por favor?",
        translation: "(Could you help me with this very complicated technical problem, please?)",
        options: ["Podría", "Podrías", "Puedes", "Puede"],
        correct: "Podría",
        explanation: "Formal polite request uses conditional of 'poder' with usted. Professional courtesy requires conditional."
      },
      {
        id: "reg_2",
        question: "Le _____ mucho si pudiera responder a mi solicitud lo antes posible.",
        translation: "(I would appreciate it very much if you could respond to my request as soon as possible)",
        options: ["agradecería", "agradezco", "agradecí", "agradecía"],
        correct: "agradecería",
        explanation: "Formal gratitude uses conditional for politeness. Business correspondence requires conditional."
      },
      {
        id: "reg_3",
        question: "_____, ¿me pasas la sal que está al otro lado de la mesa?",
        translation: "(Hey, can you pass me the salt that's on the other side of the table?)",
        options: ["Oye", "Oiga", "Perdone", "Disculpe"],
        correct: "Oye",
        explanation: "Informal 'oye' for casual attention-getting. Friends and family use informal forms."
      },
      {
        id: "reg_4",
        question: "_____, ¿podría indicarme dónde se encuentra la oficina del director general?",
        translation: "(Excuse me, could you tell me where the general manager's office is located?)",
        options: ["Disculpe", "Disculpa", "Oye", "Perdona"],
        correct: "Disculpe",
        explanation: "Formal 'disculpe' for polite address to strangers. Professional environment requires formality."
      },
      {
        id: "reg_5",
        question: "Querido amigo, ¿_____ venir a mi fiesta de cumpleaños este sábado?",
        translation: "(Dear friend, can you come to my birthday party this Saturday?)",
        options: ["puedes", "puede", "podría", "pudiera"],
        correct: "puedes",
        explanation: "Informal direct question to friend uses present tense. Close relationships use simple forms."
      },
      {
        id: "reg_6",
        question: "Estimado señor Director, le escribo para _____ mi candidatura al puesto.",
        translation: "(Dear Director, I'm writing to present my application for the position)",
        options: ["presentar", "presentarle", "presentaros", "presentarte"],
        correct: "presentar",
        explanation: "Formal letter uses infinitive after 'para'. 'Le' already shows formal indirect object."
      },
      {
        id: "reg_7",
        question: "¿Te _____ si te hago una pregunta muy personal sobre tu familia?",
        translation: "(Do you mind if I ask you a very personal question about your family?)",
        options: ["importa", "importaría", "importará", "importó"],
        correct: "importa",
        explanation: "Informal direct question uses present. Close relationship allows simple present."
      },
      {
        id: "reg_8",
        question: "Le _____ que tome asiento mientras espera su turno para la consulta.",
        translation: "(I ask you to please take a seat while you wait your turn for the consultation)",
        options: ["ruego", "pido", "suplico", "solicito"],
        correct: "ruego",
        explanation: "'Rogar' most polite formal request. Medical/professional settings use highest formality."
      },
      {
        id: "reg_9",
        question: "Tío, ¿_____ prestarme tu coche para ir a la fiesta esta noche?",
        translation: "(Dude, can you lend me your car to go to the party tonight?)",
        options: ["puedes", "puede", "podría", "pudiera"],
        correct: "puedes",
        explanation: "Very informal 'tío' requires matching informal verb. Casual request between friends."
      },
      {
        id: "reg_10",
        question: "Señoría, _____ permiso para dirigirme al tribunal con mi testimonio.",
        translation: "(Your Honor, I request permission to address the court with my testimony)",
        options: ["solicito", "pido", "quiero", "necesito"],
        correct: "solicito",
        explanation: "'Solicitar' highest formality for legal contexts. Court proceedings require utmost formal register."
      },
      {
        id: "reg_11",
        question: "¿_____ acompañarme a la tienda? No quiero ir solo en este momento.",
        translation: "(Would you accompany me to the store? I don't want to go alone right now)",
        options: ["Me acompañas", "Me acompaña", "Me acompañaría", "Me acompañarías"],
        correct: "Me acompañas",
        explanation: "Informal friendly request uses present. Direct question to friend uses simple tense."
      },
      {
        id: "reg_12",
        question: "Quisiera _____ una consulta médica para la próxima semana si es posible.",
        translation: "(I would like to schedule a medical appointment for next week if possible)",
        options: ["solicitar", "pedir", "hacer", "programar"],
        correct: "solicitar",
        explanation: "'Quisiera solicitar' very formal medical request. Healthcare settings require formal register."
      },
      {
        id: "reg_13",
        question: "Oiga, _____, ¿este autobús va hasta el centro comercial de la ciudad?",
        translation: "(Excuse me, please, does this bus go to the city shopping center?)",
        options: ["por favor", "porfis", "porfa", "porfi"],
        correct: "por favor",
        explanation: "Full 'por favor' maintains formal tone with 'oiga'. Stranger address requires standard politeness."
      },
      {
        id: "reg_14",
        question: "Me _____ en comunicarle que su solicitud ha sido aprobada favorablemente.",
        translation: "(I am pleased to inform you that your application has been favorably approved)",
        options: ["complazco", "alegro", "gusta", "place"],
        correct: "complazco",
        explanation: "'Me complazco en' ultra-formal business announcement. Official communication requires highest formality."
      },
      {
        id: "rep_15",
        question: "Tío, ¿qué _____, vamos al cine o nos quedamos viendo películas en casa?",
        translation: "(Dude, what do you say, shall we go to the movies or stay watching films at home?)",
        options: ["dices", "dice", "diría", "dijera"],
        correct: "dices",
        explanation: "Casual 'tío' demands informal present tense. Very informal proposal between close friends."
      }
    ]
  },

  comparatives_superlatives_advanced: {
    name: "Comparatives and Superlatives - Advanced",
    description: "Complex comparison structures and nuances",
    icon: Target,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_adv_1",
        question: "Este restaurante es _____ el que fuimos la semana pasada al centro.",
        translation: "(This restaurant is much better than the one we went to downtown last week)",
        options: ["mucho mejor que", "más bueno que", "muy mejor que", "más mejor que"],
        correct: "mucho mejor que",
        explanation: "'Mejor' is irregular comparative. Intensify with 'mucho', never 'más mejor' or 'muy mejor'."
      },
      {
        id: "comp_adv_2",
        question: "Mi hermana es dos años _____ yo, nació en el mismo mes de julio.",
        translation: "(My sister is two years younger than me, she was born in the same month of July)",
        options: ["menor que", "más joven que", "más pequeña que", "menos vieja que"],
        correct: "menor que",
        explanation: "'Menor' for age comparison, especially with numbers. More natural than 'más joven' with specific years."
      },
      {
        id: "comp_adv_3",
        question: "Esta película es _____ todas las que he visto este año en el cine.",
        translation: "(This movie is the most interesting of all I've seen this year at the cinema)",
        options: ["la más interesante de", "más interesante de", "la más interesante que", "más interesante que"],
        correct: "la más interesante de",
        explanation: "Superlative requires article + más/menos + adjective + 'de'. Within group uses 'de'."
      },
      {
        id: "comp_adv_4",
        question: "Trabajo _____ horas _____ pensaba cuando acepté este puesto demandante.",
        translation: "(I work many more hours than I thought when I accepted this demanding position)",
        options: ["muchas más / de las que", "mucho más / que", "más muchas / que", "más / de las que"],
        correct: "muchas más / de las que",
        explanation: "Comparative with countable nouns uses 'muchas más'. 'De las que' for clause comparison."
      },
      {
        id: "comp_adv_5",
        question: "Cuanto _____ lo pienso detenidamente, menos seguro estoy de mi decisión inicial.",
        translation: "(The more I think about it carefully, the less sure I am of my initial decision)",
        options: ["más", "mucho", "muy", "tanto"],
        correct: "más",
        explanation: "'Cuanto más...menos' expresses proportional relationship. Increasing thought decreases certainty."
      },
      {
        id: "comp_adv_6",
        question: "Este problema es _____ complicado _____ parece a simple vista superficial.",
        translation: "(This problem is more complicated than it appears at superficial first glance)",
        options: ["más / de lo que", "más / que", "tan / como", "muy / que"],
        correct: "más / de lo que",
        explanation: "'Más...de lo que' for comparing with clause. Abstract comparison uses 'de lo que'."
      },
      {
        id: "comp_adv_7",
        question: "Ella es _____ inteligente _____ su hermana gemela que estudia medicina.",
        translation: "(She is as intelligent as her twin sister who studies medicine)",
        options: ["tan / como", "tanto / como", "tan / que", "más / que"],
        correct: "tan / como",
        explanation: "'Tan...como' for equal comparison of qualities. Adjectives use 'tan', not 'tanto'."
      },
      {
        id: "comp_adv_8",
        question: "Tengo _____ trabajo _____ tú en este momento del proyecto importante.",
        translation: "(I have as much work as you at this moment of the important project)",
        options: ["tanto / como", "tan / como", "mucho / que", "más / que"],
        correct: "tanto / como",
        explanation: "'Tanto...como' for equal amounts. Uncountable 'trabajo' uses 'tanto'."
      },
      {
        id: "comp_adv_9",
        question: "Es el _____ día de toda mi vida profesional hasta este momento.",
        translation: "(It's the best day of my entire professional life up to this moment)",
        options: ["mejor", "más bueno", "muy bueno", "buenísimo"],
        correct: "mejor",
        explanation: "Superlative of 'bueno' is irregular 'mejor'. Never use 'más bueno' for superlative."
      },
      {
        id: "comp_adv_10",
        question: "Tiene _____ experiencia _____ cualquier otro candidato que se presentó al puesto.",
        translation: "(He has more experience than any other candidate who applied for the position)",
        options: ["más / que", "más / de", "mucha / que", "mucho / de"],
        correct: "más / que",
        explanation: "Direct comparison uses 'más...que'. Comparing to another person uses 'que'."
      },
      {
        id: "comp_adv_11",
        question: "Este hotel es _____ caro _____ pensábamos después de ver los precios online.",
        translation: "(This hotel is less expensive than we thought after seeing the prices online)",
        options: ["menos / de lo que", "menos / que", "más barato / que", "no tan / como"],
        correct: "menos / de lo que",
        explanation: "'Menos...de lo que' for comparison with expectation. Comparing to thought uses 'de lo que'."
      },
      {
        id: "comp_adv_12",
        question: "Mi hermano _____ es médico cirujano especializado en traumatología avanzada.",
        translation: "(My older brother is a specialized surgeon in advanced traumatology)",
        options: ["mayor", "más grande", "más viejo", "grande"],
        correct: "mayor",
        explanation: "'Mayor' for older sibling. Age within family uses irregular comparative."
      },
      {
        id: "comp_adv_13",
        question: "Prefiero quedarme en casa _____ salir con este tiempo tan horrible afuera.",
        translation: "(I prefer staying home rather than going out in this horrible weather outside)",
        options: ["antes que", "más que", "mejor que", "que"],
        correct: "antes que",
        explanation: "'Preferir...antes que' for strong preference. Choosing one over another emphatically."
      },
      {
        id: "comp_adv_14",
        question: "La situación económica actual es _____ peor _____ la que vivimos hace diez años.",
        translation: "(The current economic situation is much worse than what we experienced ten years ago)",
        options: ["mucho peor que", "más mala que", "muy peor que", "más peor que"],
        correct: "mucho peor que",
        explanation: "'Peor' is irregular comparative. Intensify with 'mucho', never 'más peor' or 'muy peor'."
      },
      {
        id: "comp_adv_15",
        question: "Gastamos _____ dinero _____ habíamos presupuestado originalmente para el viaje.",
        translation: "(We spent more money than we had originally budgeted for the trip)",
        options: ["más / del que", "más / que", "mucho / que", "más / de lo que"],
        correct: "más / del que",
        explanation: "'Más...del que' when comparing quantities with specific noun. 'Dinero' is specified, use 'del que'."
      }
    ]
  },

  idiomatic_expressions_advanced: {
    name: "Advanced Idiomatic Expressions",
    description: "Complex phrases and cultural expressions",
    icon: Zap,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "idiom_adv_1",
        question: "No voy a _____ por las ramas, te diré directamente lo que pienso.",
        translation: "(I'm not going to beat around the bush, I'll tell you directly what I think)",
        options: ["andar", "ir", "dar", "poner"],
        correct: "andar",
        explanation: "'Andar por las ramas' means beat around the bush. Avoiding direct communication idiom."
      },
      {
        id: "idiom_adv_2",
        question: "Después de discutir por horas, finalmente _____ en un punto medio aceptable.",
        translation: "(After arguing for hours, we finally met halfway at an acceptable middle ground)",
        options: ["nos pusimos de acuerdo", "acordamos", "decidimos", "pensamos"],
        correct: "nos pusimos de acuerdo",
        explanation: "'Ponerse de acuerdo' means reach agreement. Mutual decision-making process."
      },
      {
        id: "idiom_adv_3",
        question: "Tiene que _____ los pies en la tierra y dejar de soñar despierto.",
        translation: "(He has to keep his feet on the ground and stop daydreaming)",
        options: ["poner", "meter", "tener", "dejar"],
        correct: "poner",
        explanation: "'Poner los pies en la tierra' means be realistic. Stop fantasizing and face reality."
      },
      {
        id: "idiom_adv_4",
        question: "Me _____ la lengua para no decir lo que realmente pensaba en ese momento.",
        translation: "(I bit my tongue to not say what I really thought at that moment)",
        options: ["mordí", "comí", "tragué", "corté"],
        correct: "mordí",
        explanation: "'Morderse la lengua' means bite your tongue. Self-censorship to avoid conflict."
      },
      {
        id: "idiom_adv_5",
        question: "No le _____ vueltas al asunto y toma una decisión de una vez por todas.",
        translation: "(Don't keep going over the matter and make a decision once and for all)",
        options: ["des", "hagas", "pongas", "tengas"],
        correct: "des",
        explanation: "'Dar vueltas' means overthink/go in circles. Excessive deliberation without action."
      },
      {
        id: "idiom_adv_6",
        question: "Me _____ la gota que colmó el vaso cuando llegó tarde otra vez.",
        translation: "(That was the straw that broke the camel's back when he arrived late again)",
        options: ["fue", "era", "estuvo", "había"],
        correct: "fue",
        explanation: "'La gota que colmó el vaso' means last straw. Final incident triggering reaction."
      },
      {
        id: "idiom_adv_7",
        question: "Estoy entre la espada y _____ con esta decisión tan difícil que debo tomar.",
        translation: "(I'm between a rock and a hard place with this very difficult decision I must make)",
        options: ["la pared", "el muro", "la piedra", "el suelo"],
        correct: "la pared",
        explanation: "'Entre la espada y la pared' means between rock and hard place. Impossible dilemma."
      },
      {
        id: "idiom_adv_8",
        question: "Voy a _____ el toro por los cuernos y enfrentar el problema directamente.",
        translation: "(I'm going to take the bull by the horns and face the problem directly)",
        options: ["coger", "tomar", "agarrar", "pillar"],
        correct: "coger",
        explanation: "'Coger el toro por los cuernos' means tackle problem head-on. Confronting challenges directly."
      },
      {
        id: "idiom_adv_9",
        question: "Le _____ cuatro verdades muy claras y se quedó completamente callado.",
        translation: "(I told him some hard truths very clearly and he was left completely silent)",
        options: ["dije", "canté", "hablé", "conté"],
        correct: "dije",
        explanation: "'Decir cuatro verdades' means tell hard truths. Speaking frankly about uncomfortable facts."
      },
      {
        id: "idiom_adv_10",
        question: "No voy a _____ paños calientes a la situación, es más grave de lo que parece.",
        translation: "(I'm not going to sugarcoat the situation, it's more serious than it appears)",
        options: ["poner", "dar", "hacer", "tener"],
        correct: "poner",
        explanation: "'Poner paños calientes' means sugarcoat/downplay. Avoiding harsh reality with mild language."
      },
      {
        id: "idiom_adv_11",
        question: "Me _____ los pelos de punta cuando escuché esos ruidos extraños en la noche.",
        translation: "(My hair stood on end when I heard those strange noises at night)",
        options: ["pusieron", "dieron", "hicieron", "dejaron"],
        correct: "pusieron",
        explanation: "'Poner los pelos de punta' means give goosebumps/terrify. Extreme fear reaction."
      },
      {
        id: "idiom_adv_12",
        question: "Ese comentario me _____ la mosca detrás de la oreja sobre sus verdaderas intenciones.",
        translation: "(That comment put the fly behind my ear about his true intentions)",
        options: ["puso", "metió", "dejó", "hizo"],
        correct: "puso",
        explanation: "'Poner la mosca detrás de la oreja' means raise suspicion. Creating doubt about trustworthiness."
      },
      {
        id: "idiom_adv_13",
        question: "Tienes que _____ el hombro y ayudarme con este proyecto tan importante.",
        translation: "(You have to put your shoulder to the wheel and help me with this very important project)",
        options: ["arrimar", "poner", "meter", "dar"],
        correct: "arrimar",
        explanation: "'Arrimar el hombro' means pitch in/help seriously. Contributing effort to collective task."
      },
      {
        id: "idiom_adv_14",
        question: "Siempre _____ las cosas por su nombre sin andarse con rodeos innecesarios.",
        translation: "(He always calls things by their name without beating around the bush unnecessarily)",
        options: ["llama", "dice", "pone", "hace"],
        correct: "llama",
        explanation: "'Llamar las cosas por su nombre' means call spade a spade. Direct honest communication."
      },
      {
        id: "idiom_adv_15",
        question: "Me _____ la mano con ese negocio que parecía tan prometedor al principio.",
        translation: "(That business that seemed so promising at first burned my hand)",
        options: ["quemó", "cortó", "rompió", "dolió"],
        correct: "quemó",
        explanation: "'Quemar la mano' means get burned in deal. Bad investment or betrayed trust."
      }
    ]
  },

  subjunctive_wishes_desires: {
    name: "Subjunctive - Wishes and Desires",
    description: "Express hopes, wishes, and volition",
    icon: Target,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    questions: [
      {
        id: "wish_1",
        question: "Espero sinceramente que _____ aprobar todos tus exámenes finales este semestre.",
        translation: "(I sincerely hope you manage to pass all your final exams this semester)",
        options: ["logres", "logras", "lograrás", "lograste"],
        correct: "logres",
        explanation: "'Esperar que' triggers subjunctive for hopes. Wishing for someone's success requires subjunctive."
      },
      {
        id: "wish_2",
        question: "Ojalá que mañana _____ buen tiempo para poder ir a la playa finalmente.",
        translation: "(I hope tomorrow has good weather so we can finally go to the beach)",
        options: ["haga", "hace", "hará", "hizo"],
        correct: "haga",
        explanation: "'Ojalá que' always uses subjunctive. Wishing for future weather condition."
      },
      {
        id: "wish_3",
        question: "Quiero que mis hijos _____ felices y exitosos en todo lo que emprendan.",
        translation: "(I want my children to be happy and successful in everything they undertake)",
        options: ["sean", "son", "serán", "fueron"],
        correct: "sean",
        explanation: "'Querer que' triggers subjunctive for desires. Wanting something for others requires subjunctive."
      },
      {
        id: "wish_4",
        question: "Deseo profundamente que _____ encontrar la solución que buscas tan arduamente.",
        translation: "(I deeply wish you find the solution you're searching for so arduously)",
        options: ["puedas", "puedes", "podrás", "pudiste"],
        correct: "puedas",
        explanation: "'Desear que' expresses strong wish with subjunctive. Hoping for capability requires this mood."
      },
      {
        id: "wish_5",
        question: "Prefiero que tú _____ la decisión final porque conoces mejor la situación.",
        translation: "(I prefer that you make the final decision because you know the situation better)",
        options: ["tomes", "tomas", "tomarás", "tomaste"],
        correct: "tomes",
        explanation: "'Preferir que' shows preference requiring subjunctive. Wanting someone else to decide."
      },
      {
        id: "wish_6",
        question: "Necesito urgentemente que alguien me _____ con esta tarea tan complicada.",
        translation: "(I urgently need someone to help me with this very complicated task)",
        options: ["ayude", "ayuda", "ayudará", "ayudó"],
        correct: "ayude",
        explanation: "'Necesitar que' expresses need with subjunctive. Requiring someone's assistance."
      },
      {
        id: "wish_7",
        question: "Me gustaría muchísimo que tú _____ venir a visitarme pronto a mi nueva casa.",
        translation: "(I would very much like you to come visit me soon at my new house)",
        options: ["pudieras", "puedes", "podrás", "pudiste"],
        correct: "pudieras",
        explanation: "'Me gustaría que' uses imperfect subjunctive for polite wish. Conditional main verb pulls imperfect subjunctive."
      },
      {
        id: "wish_8",
        question: "Espero que no _____ ningún problema grave durante tu viaje al extranjero.",
        translation: "(I hope you don't have any serious problems during your trip abroad)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "Hoping against problems uses negative subjunctive. Wishing for absence of difficulty."
      },
      {
        id: "wish_9",
        question: "Quiero que _____ la verdad antes de que sea demasiado tarde para actuar.",
        translation: "(I want you to know the truth before it's too late to act)",
        options: ["sepas", "sabes", "sabrás", "supiste"],
        correct: "sepas",
        explanation: "'Querer que' with knowledge verb uses subjunctive. Desiring someone's awareness."
      },
      {
        id: "wish_10",
        question: "Ojalá _____ podido asistir a tu boda, pero estaba fuera del país entonces.",
        translation: "(I wish I could have attended your wedding, but I was out of the country then)",
        options: ["hubiera", "habría", "haya", "he"],
        correct: "hubiera",
        explanation: "'Ojalá' with pluperfect subjunctive for impossible past wish. Regret about missed event."
      },
      {
        id: "wish_11",
        question: "Desearía que las cosas _____ sido diferentes en aquella época difícil.",
        translation: "(I wish things had been different in that difficult time)",
        options: ["hubieran", "habrían", "hayan", "han"],
        correct: "hubieran",
        explanation: "Conditional 'desearía' with pluperfect subjunctive for past contrary-to-fact. Impossible past wish."
      },
      {
        id: "wish_12",
        question: "Espero que este mensaje te _____ bien y con buena salud en estos momentos.",
        translation: "(I hope this message finds you well and in good health at this time)",
        options: ["encuentre", "encuentra", "encontrará", "encontró"],
        correct: "encuentre",
        explanation: "Letter formula 'espero que te encuentre' uses subjunctive. Formal correspondence wish."
      },
      {
        id: "wish_13",
        question: "Quisiera que me _____ más detalles específicos sobre el proyecto propuesto.",
        translation: "(I would like you to give me more specific details about the proposed project)",
        options: ["dieras", "das", "darás", "diste"],
        correct: "dieras",
        explanation: "'Quisiera que' polite request uses imperfect subjunctive. Conditional wish pulls past subjunctive."
      },
      {
        id: "wish_14",
        question: "Ojalá que todos _____ en paz y armonía en este mundo tan conflictivo.",
        translation: "(If only everyone could live in peace and harmony in this very conflictive world)",
        options: ["pudieran vivir", "pueden vivir", "podrán vivir", "viven"],
        correct: "pudieran vivir",
        explanation: "'Ojalá que' with imperfect subjunctive for unlikely present wish. Idealistic hope about current world."
      },
      {
        id: "wish_15",
        question: "Deseo fervientemente que _____ todos tus sueños más profundos y sinceros.",
        translation: "(I fervently wish all your deepest and most sincere dreams come true)",
        options: ["se cumplan", "se cumplen", "se cumplirán", "se cumplieron"],
        correct: "se cumplan",
        explanation: "'Desear que' with subjunctive for heartfelt wishes. Dream fulfillment requires subjunctive."
      }
    ]
  }
};

export default part17Categories;