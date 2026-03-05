/**
 * ENGLISH → SPANISH GRAMMAR - PART 19
 * 5 advanced categories, 15 questions each - Professional and literary contexts
 */

import { Award, Scroll, Binary, Flame, Crown } from "lucide-react";

export const part19Categories = {
  subjunctive_opinion_doubt: {
    name: "Subjunctive - Opinion and Doubt",
    description: "Certainty vs uncertainty in complex contexts",
    icon: Binary,
    color: "from-purple-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "opin_1",
        question: "Estoy convencido de que ella _____ la mejor candidata para dirigir el departamento.",
        translation: "(I'm convinced she is the best candidate to lead the department)",
        options: ["es", "sea", "será", "fuera"],
        correct: "es",
        explanation: "Strong conviction uses indicative. 'Estar convencido que' expresses certainty requiring indicative."
      },
      {
        id: "opin_2",
        question: "No estoy convencido de que esta _____ la solución más adecuada al problema.",
        translation: "(I'm not convinced this is the most adequate solution to the problem)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "Negative conviction triggers subjunctive. Lack of certainty requires subjunctive mood."
      },
      {
        id: "opin_3",
        question: "Me parece evidente que ellos no _____ suficiente experiencia en este campo específico.",
        translation: "(It seems evident to me they don't have enough experience in this specific field)",
        options: ["tienen", "tengan", "tendrán", "tuvieran"],
        correct: "tienen",
        explanation: "'Me parece evidente que' expresses certainty with indicative. Clear observation uses indicative."
      },
      {
        id: "opin_4",
        question: "No me parece que _____ justo castigar a todos por el error de uno solo.",
        translation: "(It doesn't seem fair to me to punish everyone for one person's mistake)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "Negative 'no parece que' triggers subjunctive. Questioning fairness requires subjunctive."
      },
      {
        id: "opin_5",
        question: "Es obvio que tú _____ mucho esfuerzo en preparar esta presentación profesional.",
        translation: "(It's obvious you put a lot of effort into preparing this professional presentation)",
        options: ["pusiste", "pusieras", "pongas", "pones"],
        correct: "pusiste",
        explanation: "'Es obvio que' expresses certainty with indicative. Evident fact uses indicative."
      },
      {
        id: "opin_6",
        question: "No es obvio para mí que esta _____ la única alternativa viable que tenemos.",
        translation: "(It's not obvious to me this is the only viable alternative we have)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "Negative certainty expression triggers subjunctive. Questioning obviousness requires subjunctive."
      },
      {
        id: "opin_7",
        question: "Supongo que ya _____ las instrucciones detalladas que te envié por correo.",
        translation: "(I suppose you already received the detailed instructions I sent you by email)",
        options: ["recibiste", "recibieras", "recibas", "recibes"],
        correct: "recibiste",
        explanation: "'Suponer que' mild assumption uses indicative. Supposing probable fact uses indicative."
      },
      {
        id: "opin_8",
        question: "No es que no me _____ tu propuesta, sino que necesito más tiempo para considerarla.",
        translation: "(It's not that I don't like your proposal, but rather I need more time to consider it)",
        options: ["guste", "gusta", "gustará", "gustara"],
        correct: "guste",
        explanation: "'No es que' always requires subjunctive. Clarifying misunderstanding with subjunctive."
      },
      {
        id: "opin_9",
        question: "Es indudable que el cambio climático _____ un problema global muy serio.",
        translation: "(It's undeniable climate change is a very serious global problem)",
        options: ["es", "sea", "será", "fuera"],
        correct: "es",
        explanation: "'Es indudable que' expresses absolute certainty. Indisputable facts use indicative."
      },
      {
        id: "opin_10",
        question: "Puede ser que _____ razón en tu análisis detallado de la situación actual.",
        translation: "(It may be you're right in your detailed analysis of the current situation)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Puede ser que' expresses possibility with subjunctive. Acknowledging potential correctness."
      },
      {
        id: "opin_11",
        question: "Está claro que necesitamos _____ más recursos humanos para este proyecto ambicioso.",
        translation: "(It's clear we need to hire more human resources for this ambitious project)",
        options: ["contratar", "contratemos", "contratáramos", "contratando"],
        correct: "contratar",
        explanation: "'Está claro que necesitamos' + infinitive. After expression of need, infinitive is natural."
      },
      {
        id: "opin_12",
        question: "No está nada claro que ellos _____ cumplir con los plazos establecidos firmemente.",
        translation: "(It's not at all clear they can meet the firmly established deadlines)",
        options: ["puedan", "pueden", "podrán", "pudieran"],
        correct: "puedan",
        explanation: "Negative clarity triggers subjunctive. Uncertainty about capability requires subjunctive."
      },
      {
        id: "opin_13",
        question: "Doy por sentado que todos _____ leído el informe antes de esta reunión importante.",
        translation: "(I take for granted everyone has read the report before this important meeting)",
        options: ["han", "hayan", "habían", "hubieran"],
        correct: "han",
        explanation: "'Dar por sentado que' assumes fact with indicative. Taking something as given uses indicative."
      },
      {
        id: "opin_14",
        question: "No doy por sentado que _____ de acuerdo con mi punto de vista personal.",
        translation: "(I don't take for granted you agree with my personal point of view)",
        options: ["estés", "estás", "estarás", "estuvieras"],
        correct: "estés",
        explanation: "Negative assumption triggers subjunctive. Not presuming agreement requires subjunctive."
      },
      {
        id: "opin_15",
        question: "Tengo la certeza absoluta de que este proyecto _____ un éxito rotundo en el mercado.",
        translation: "(I have absolute certainty this project will be a resounding success in the market)",
        options: ["será", "sea", "sería", "fuera"],
        correct: "será",
        explanation: "'Tener certeza de que' expresses conviction with indicative. Certainty about future uses future indicative."
      }
    ]
  },

  pronominal_verbs: {
    name: "Pronominal Verbs",
    description: "Verbs that change meaning with reflexive pronouns",
    icon: Flame,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "pron_v_1",
        question: "Me _____ de todos mis viejos amigos del colegio con mucho cariño y nostalgia.",
        translation: "(I remember all my old school friends with great affection and nostalgia)",
        options: ["acuerdo", "recuerdo", "acordé", "recordé"],
        correct: "acuerdo",
        explanation: "'Acordarse de' means remember (requires 'de'). Different from 'recordar' which doesn't need 'de'."
      },
      {
        id: "pron_v_2",
        question: "Ella se _____ en su nuevo trabajo después de solo tres meses de esfuerzo constante.",
        translation: "(She became established in her new job after only three months of constant effort)",
        options: ["estableció", "puso", "hizo", "volvió"],
        correct: "estableció",
        explanation: "'Establecerse' means become established/settle. Reflexive shows self-positioning in role."
      },
      {
        id: "pron_v_3",
        question: "Me _____ cuenta inmediatamente de que algo extraño estaba ocurriendo en la oficina.",
        translation: "(I realized immediately something strange was happening in the office)",
        options: ["di", "hice", "puse", "eché"],
        correct: "di",
        explanation: "'Darse cuenta de' means realize. Fixed reflexive expression for awareness."
      },
      {
        id: "pron_v_4",
        question: "Se _____ a llorar desconsoladamente cuando escuchó las terribles noticias familiares.",
        translation: "(She burst out crying inconsolably when she heard the terrible family news)",
        options: ["puso", "echó", "hizo", "dio"],
        correct: "puso",
        explanation: "'Ponerse a' + infinitive means start suddenly. Abrupt beginning of emotional reaction."
      },
      {
        id: "pron_v_5",
        question: "Nos _____ en el café de siempre a las cinco de la tarde puntualmente.",
        translation: "(We met at the usual café at five in the afternoon punctually)",
        options: ["encontramos", "vimos", "reunimos", "juntamos"],
        correct: "encontramos",
        explanation: "'Encontrarse' means meet by arrangement. Reciprocal meeting at agreed place."
      },
      {
        id: "pron_v_6",
        question: "Se _____ con todas sus fuerzas para lograr su sueño de ser atleta olímpico.",
        translation: "(He strove with all his strength to achieve his dream of being an Olympic athlete)",
        options: ["esforzó", "forzó", "intentó", "trabajó"],
        correct: "esforzó",
        explanation: "'Esforzarse' means strive/make effort. Reflexive intensifies personal exertion."
      },
      {
        id: "pron_v_7",
        question: "Me _____ de menos mi ciudad natal cada vez que estoy lejos por trabajo.",
        translation: "(I miss my hometown every time I'm away for work)",
        options: ["echo", "hago", "pongo", "doy"],
        correct: "echo",
        explanation: "'Echar de menos' means miss someone/something. Standard expression for longing."
      },
      {
        id: "pron_v_8",
        question: "Se _____ muy triste cuando sus mejores amigos se mudaron al extranjero.",
        translation: "(He became very sad when his best friends moved abroad)",
        options: ["puso", "hizo", "volvió", "quedó"],
        correct: "puso",
        explanation: "'Ponerse' for sudden emotional change. Quick shift to sadness."
      },
      {
        id: "pron_v_9",
        question: "Nos _____ profundamente del comportamiento grosero que tuvimos con ustedes.",
        translation: "(We deeply regret the rude behavior we had with you)",
        options: ["arrepentimos", "arrepentamos", "lamentamos", "sentimos"],
        correct: "arrepentimos",
        explanation: "'Arrepentirse de' means regret/repent. Deep remorse for past actions."
      },
      {
        id: "pron_v_10",
        question: "Me _____ completamente en blanco durante el examen oral por los nervios.",
        translation: "(I went completely blank during the oral exam because of nerves)",
        options: ["quedé", "puse", "hice", "volví"],
        correct: "quedé",
        explanation: "'Quedarse en blanco' means go blank/forget. Mental block under pressure."
      },
      {
        id: "pron_v_11",
        question: "Se _____ a estudiar seriamente después de reprobar el primer examen importante.",
        translation: "(He got down to studying seriously after failing the first important exam)",
        options: ["puso", "echó", "metió", "dio"],
        correct: "puso",
        explanation: "'Ponerse a' + infinitive means begin seriously. Starting focused activity."
      },
      {
        id: "pron_v_12",
        question: "Me _____ muy orgulloso cuando mi hija se graduó con honores de la universidad.",
        translation: "(I felt very proud when my daughter graduated with honors from university)",
        options: ["sentí", "puse", "hice", "volví"],
        correct: "sentí",
        explanation: "'Sentirse' expresses emotional state felt. Internal emotional experience."
      },
      {
        id: "opin_13",
        question: "Se _____ loco de contento al enterarse de que había ganado la beca completa.",
        translation: "(He went crazy with joy upon finding out he had won the full scholarship)",
        options: ["volvió", "puso", "hizo", "quedó"],
        correct: "volvió",
        explanation: "'Volverse loco' means go crazy. Extreme emotional reaction to news."
      },
      {
        id: "pron_v_14",
        question: "Nos _____ en contacto regular después de terminar nuestros estudios universitarios juntos.",
        translation: "(We stayed in regular contact after finishing our university studies together)",
        options: ["mantuvimos", "quedamos", "pusimos", "hicimos"],
        correct: "mantuvimos",
        explanation: "'Mantenerse en contacto' means stay in touch. Continuing communication relationship."
      },
      {
        id: "pron_v_15",
        question: "Se _____ cuenta tarde de que había cometido un error grave e irreversible.",
        translation: "(He realized late he had made a serious and irreversible mistake)",
        options: ["dio", "hizo", "puso", "echó"],
        correct: "dio",
        explanation: "'Darse cuenta' for realization. Becoming aware of situation or truth."
      }
    ]
  },

  negative_expressions_advanced: {
    name: "Advanced Negative Expressions",
    description: "Complex negation patterns and double negatives",
    icon: Award,
    color: "from-slate-600 to-gray-700",
    level: "advanced",
    questions: [
      {
        id: "neg_adv_1",
        question: "No he visto a _____ en toda la tarde aquí en la oficina central.",
        translation: "(I haven't seen anyone all afternoon here in the central office)",
        options: ["nadie", "alguien", "alguno", "ninguno"],
        correct: "nadie",
        explanation: "After negative verb, use negative indefinite. Double negative is required in Spanish."
      },
      {
        id: "neg_adv_2",
        question: "_____ ha llamado por teléfono en todo el día desde temprano esta mañana.",
        translation: "(Nobody has called on the phone all day since early this morning)",
        options: ["Nadie", "Alguien", "Ninguno", "Alguno"],
        correct: "Nadie",
        explanation: "'Nadie' as subject doesn't need 'no'. Negative word before verb makes verb affirmative."
      },
      {
        id: "neg_adv_3",
        question: "No tengo _____ interés en participar en ese proyecto tan poco claro.",
        translation: "(I have no interest whatsoever in participating in that very unclear project)",
        options: ["ningún", "algún", "un", "cualquier"],
        correct: "ningún",
        explanation: "After negative, 'ningún' before masculine noun. Absolute lack of interest."
      },
      {
        id: "neg_adv_4",
        question: "_____ me dijo _____ sobre los cambios importantes en la empresa ayer.",
        translation: "(Nobody told me anything about the important changes in the company yesterday)",
        options: ["Nadie / nada", "Alguien / algo", "Ninguno / nada", "Nadie / algo"],
        correct: "Nadie / nada",
        explanation: "Double negative required. 'Nadie' subject with 'nada' object, no 'no' needed."
      },
      {
        id: "neg_adv_5",
        question: "No quiero _____ trato especial, trátame como a cualquier otro empleado normal.",
        translation: "(I don't want any special treatment, treat me like any other normal employee)",
        options: ["ningún", "algún", "un", "cualquier"],
        correct: "ningún",
        explanation: "After 'no quiero', use 'ningún'. Rejecting special consideration entirely."
      },
      {
        id: "neg_adv_6",
        question: "_____ iré _____ a ese lugar horrible después de lo que me pasó.",
        translation: "(I'll never go back to that horrible place after what happened to me)",
        options: ["Nunca / más", "No / nunca", "Jamás / nunca", "Nunca / jamás"],
        correct: "Nunca / más",
        explanation: "'Nunca más' means never again. Emphatic refusal to return."
      },
      {
        id: "neg_adv_7",
        question: "No he estado _____ tan nervioso en toda mi vida profesional hasta ahora.",
        translation: "(I've never been so nervous in my entire professional life until now)",
        options: ["nunca", "jamás", "nada", "nadie"],
        correct: "nunca",
        explanation: "'No...nunca' emphasizes negative. Redundant negation for emphasis in Spanish."
      },
      {
        id: "neg_adv_8",
        question: "_____ le he contado a _____ sobre mis planes secretos de mudanza.",
        translation: "(I haven't told anyone about my secret moving plans)",
        options: ["No / nadie", "Nunca / alguien", "Jamás / nadie", "No / alguno"],
        correct: "No / nadie",
        explanation: "'No' + verb + 'nadie' standard negative pattern. Double negative for complete denial."
      },
      {
        id: "neg_adv_9",
        question: "En mi vida he visto _____ tan hermoso como este paisaje natural impresionante.",
        translation: "(Never in my life have I seen anything as beautiful as this impressive natural landscape)",
        options: ["nada", "algo", "ninguna cosa", "alguna cosa"],
        correct: "nada",
        explanation: "'En mi vida' implies negation, use 'nada'. Lifetime superlative with negative."
      },
      {
        id: "neg_adv_10",
        question: "No voy a _____ a ese restaurante caro después de la mala experiencia pasada.",
        translation: "(I'm not going to that expensive restaurant ever again after the bad past experience)",
        options: ["volver nunca más", "ir jamás", "regresar más", "volver jamás"],
        correct: "volver nunca más",
        explanation: "'No volver nunca más' emphatic refusal. Multiple negatives emphasize determination."
      },
      {
        id: "neg_adv_11",
        question: "_____ tengo _____ ganas de discutir contigo sobre este tema tan delicado.",
        translation: "(I have absolutely no desire to argue with you about this very delicate topic)",
        options: ["No / ningunas", "No / algunas", "Nunca / ningunas", "Jamás / algunas"],
        correct: "No / ningunas",
        explanation: "'No tener ningunas ganas' emphatic unwillingness. Feminine plural intensifies rejection."
      },
      {
        id: "neg_adv_12",
        question: "_____ dijo _____ palabra durante toda la reunión tensa que duró horas.",
        translation: "(He didn't say a single word during the entire tense meeting that lasted hours)",
        options: ["No / ni una", "Nunca / alguna", "Jamás / ninguna", "No / una"],
        correct: "No / ni una",
        explanation: "'No...ni una palabra' emphasizes complete silence. Total absence of speech."
      },
      {
        id: "neg_adv_13",
        question: "No me gusta _____ de lo que propusiste en tu presentación de ayer.",
        translation: "(I don't like anything about what you proposed in your presentation yesterday)",
        options: ["nada", "algo", "ninguna cosa", "cualquier cosa"],
        correct: "nada",
        explanation: "'No me gusta nada de' complete rejection. Nothing appealing in proposal."
      },
      {
        id: "neg_adv_14",
        question: "_____ vez en mi carrera profesional había enfrentado un desafío tan grande.",
        translation: "(Never in my professional career had I faced such a great challenge)",
        options: ["Nunca", "No", "Jamás", "Ninguna"],
        correct: "Nunca",
        explanation: "'Nunca' before verb, no 'no' needed. Negative word as subject makes verb affirmative."
      },
      {
        id: "neg_adv_15",
        question: "No conozco a _____ de las personas que asistieron a esa conferencia internacional.",
        translation: "(I don't know any of the people who attended that international conference)",
        options: ["ninguna", "alguna", "una", "cualquiera"],
        correct: "ninguna",
        explanation: "'No...ninguna de' for total absence. Not knowing any single person."
      }
    ]
  },

  subjunctive_after_cuando: {
    name: "Cuando - Indicative vs Subjunctive",
    description: "Master when to use each mood with cuando",
    icon: Scroll,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "cuando_1",
        question: "Cuando _____ pequeño en mi infancia, jugaba todo el día en la calle con amigos.",
        translation: "(When I was little in my childhood, I played all day in the street with friends)",
        options: ["era", "fuera", "sea", "soy"],
        correct: "era",
        explanation: "'Cuando' with factual past uses imperfect indicative. Known past state uses indicative."
      },
      {
        id: "cuando_2",
        question: "Cuando _____ mayor y tenga mi propio dinero, viajaré por todo el mundo.",
        translation: "(When I'm older and have my own money, I'll travel all over the world)",
        options: ["sea", "soy", "seré", "era"],
        correct: "sea",
        explanation: "'Cuando' with future reference requires subjunctive. Uncertain future time uses subjunctive."
      },
      {
        id: "cuando_3",
        question: "Cuando _____ ayer a casa del trabajo, me encontré con mi antiguo profesor.",
        translation: "(When I returned home from work yesterday, I ran into my old teacher)",
        options: ["volví", "volviera", "vuelva", "vuelvo"],
        correct: "volví",
        explanation: "'Cuando' with completed specific past uses preterite. Definite past moment uses indicative."
      },
      {
        id: "cuando_4",
        question: "Te llamaré cuando _____ del médico esta tarde con los resultados de análisis.",
        translation: "(I'll call you when I get back from the doctor this afternoon with the test results)",
        options: ["vuelva", "vuelvo", "volveré", "volví"],
        correct: "vuelva",
        explanation: "'Cuando' with pending future uses subjunctive. Planned future call after uncertain return."
      },
      {
        id: "cuando_5",
        question: "Cuando _____ en el extranjero hace años, aprendí mucho sobre otras culturas.",
        translation: "(When I lived abroad years ago, I learned a lot about other cultures)",
        options: ["vivía", "viviera", "viva", "vivo"],
        correct: "vivía",
        explanation: "'Cuando' with habitual past uses imperfect indicative. Repeated past state uses indicative."
      },
      {
        id: "cuando_6",
        question: "Cuando finalmente _____ el proyecto completo, celebraremos con una gran fiesta.",
        translation: "(When we finally finish the complete project, we'll celebrate with a big party)",
        options: ["terminemos", "terminamos", "terminaremos", "terminábamos"],
        correct: "terminemos",
        explanation: "'Cuando' with future completion uses subjunctive. Anticipated finish requires subjunctive."
      },
      {
        id: "cuando_7",
        question: "Cuando _____ la noticia impactante ayer, no supe qué decir ni hacer.",
        translation: "(When I heard the shocking news yesterday, I didn't know what to say or do)",
        options: ["escuché", "escuchara", "escuche", "escucho"],
        correct: "escuché",
        explanation: "'Cuando' with specific past moment uses preterite. Definite past event uses indicative."
      },
      {
        id: "cuando_8",
        question: "Cuando _____ en el mismo edificio que mi oficina, caminaba al trabajo cada día.",
        translation: "(When I lived in the same building as my office, I walked to work every day)",
        options: ["vivía", "viviera", "viva", "vivo"],
        correct: "vivía",
        explanation: "'Cuando' describing habitual past uses imperfect. Routine past situation uses indicative."
      },
      {
        id: "cuando_9",
        question: "Avísame cuando _____ listo para salir de casa hacia el aeropuerto internacional.",
        translation: "(Let me know when you're ready to leave home for the international airport)",
        options: ["estés", "estás", "estarás", "estabas"],
        correct: "estés",
        explanation: "'Cuando' with future readiness uses subjunctive. Unknown timing of readiness."
      },
      {
        id: "cuando_10",
        question: "Cuando _____ ese programa en la televisión, siempre me hace reír muchísimo.",
        translation: "(When I watch that program on television, it always makes me laugh a lot)",
        options: ["veo", "vea", "veré", "vi"],
        correct: "veo",
        explanation: "'Cuando' with habitual present uses indicative. Regular occurrence uses indicative."
      },
      {
        id: "cuando_11",
        question: "Cuando tú _____ mañana, yo ya habré salido para el trabajo temprano.",
        translation: "(When you wake up tomorrow, I will have already left for work early)",
        options: ["despiertes", "despiertas", "despertarás", "despertaste"],
        correct: "despiertes",
        explanation: "'Cuando' with tomorrow's action uses subjunctive. Future morning event requires subjunctive."
      },
      {
        id: "cuando_12",
        question: "Cuando él _____ la verdad completa hace años, todo cambió en su vida.",
        translation: "(When he discovered the complete truth years ago, everything changed in his life)",
        options: ["descubrió", "descubriera", "descubra", "descubre"],
        correct: "descubrió",
        explanation: "'Cuando' with definite past discovery uses preterite. Life-changing past moment uses indicative."
      },
      {
        id: "cuando_13",
        question: "Cuando _____ suficiente experiencia acumulada, podrás solicitar ese ascenso laboral.",
        translation: "(When you have enough accumulated experience, you'll be able to apply for that job promotion)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Cuando' with future acquisition uses subjunctive. Uncertain timing of readiness."
      },
      {
        id: "cuando_14",
        question: "Cuando _____ joven y sin responsabilidades, viajé por toda Europa sin planificar.",
        translation: "(When I was young and without responsibilities, I traveled all over Europe without planning)",
        options: ["era", "fuera", "sea", "soy"],
        correct: "era",
        explanation: "'Cuando' describing past youth uses imperfect. Known past state of being."
      },
      {
        id: "cuando_15",
        question: "Cuando _____ todos los requisitos necesarios, podrás graduarte oficialmente de la universidad.",
        translation: "(When you complete all the necessary requirements, you'll be able to officially graduate from university)",
        options: ["cumplas", "cumples", "cumplirás", "cumpliste"],
        correct: "cumplas",
        explanation: "'Cuando' with future fulfillment uses subjunctive. Uncertain timing of completion."
      }
    ]
  },

  formal_written_expressions: {
    name: "Formal Written Expressions",
    description: "Academic and professional writing patterns",
    icon: Scroll,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "formal_1",
        question: "_____ a los datos estadísticos presentados, se observa una tendencia clara.",
        translation: "(With respect to the statistical data presented, a clear trend is observed)",
        options: ["Con respecto", "Respecto", "Sobre", "De"],
        correct: "Con respecto",
        explanation: "'Con respecto a' formal regarding phrase. Academic reference to data."
      },
      {
        id: "formal_2",
        question: "_____ se puede apreciar en el gráfico adjunto, los resultados son concluyentes.",
        translation: "(As can be appreciated in the attached graph, the results are conclusive)",
        options: ["Como", "Que", "Cual", "Cuando"],
        correct: "Como",
        explanation: "'Como se puede apreciar' formal observation phrase. Directing attention to evidence."
      },
      {
        id: "formal_3",
        question: "_____ efectos prácticos, consideraremos ambas opciones como igualmente válidas.",
        translation: "(For practical purposes, we'll consider both options as equally valid)",
        options: ["A", "Para", "Por", "De"],
        correct: "A",
        explanation: "'A efectos de' formal purpose phrase. Legal/academic specification of intent."
      },
      {
        id: "formal_4",
        question: "_____ lo anterior, resulta evidente que se requieren más investigaciones profundas.",
        translation: "(In view of the above, it's evident more in-depth research is required)",
        options: ["En vista de", "Viendo", "Mirando", "Con"],
        correct: "En vista de",
        explanation: "'En vista de' formal considering phrase. Drawing conclusions from prior evidence."
      },
      {
        id: "formal_5",
        question: "Los resultados obtenidos se encuentran _____ concordancia con estudios previos realizados.",
        translation: "(The obtained results are in agreement with previous studies conducted)",
        options: ["en", "de", "con", "por"],
        correct: "en",
        explanation: "'En concordancia con' formal agreement phrase. Academic alignment with literature."
      },
      {
        id: "formal_6",
        question: "_____ subrayar la importancia fundamental de estos hallazgos para la ciencia.",
        translation: "(It's worth emphasizing the fundamental importance of these findings for science)",
        options: ["Cabe", "Debe", "Puede", "Conviene"],
        correct: "Cabe",
        explanation: "'Cabe subrayar' academic emphasis phrase. Scholarly highlighting of significance."
      },
      {
        id: "formal_7",
        question: "_____ al tema principal de nuestra discusión, debemos tomar una decisión.",
        translation: "(Returning to the main topic of our discussion, we must make a decision)",
        options: ["Volviendo", "Regresando", "Retornando", "Vuelto"],
        correct: "Volviendo",
        explanation: "'Volviendo a' refocuses discussion. Professional meeting redirection."
      },
      {
        id: "formal_8",
        question: "_____ marco de este estudio científico, analizamos cincuenta casos detalladamente.",
        translation: "(Within the framework of this scientific study, we analyzed fifty cases in detail)",
        options: ["En el", "Dentro del", "Al", "Del"],
        correct: "En el",
        explanation: "'En el marco de' formal scope phrase. Academic context specification."
      },
      {
        id: "formal_9",
        question: "_____ que antecede, se propone implementar las siguientes medidas correctivas.",
        translation: "(Based on what precedes, it's proposed to implement the following corrective measures)",
        options: ["Dado lo", "Dando", "Por lo", "Con lo"],
        correct: "Dado lo",
        explanation: "'Dado lo que antecede' formal reasoning phrase. Legal/academic argumentation."
      },
      {
        id: "formal_10",
        question: "_____ lugar a dudas razonables, estos resultados demuestran la validez de la teoría.",
        translation: "(Without room for reasonable doubts, these results demonstrate the theory's validity)",
        options: ["Sin", "No", "Fuera", "Lejos"],
        correct: "Sin",
        explanation: "'Sin lugar a dudas' formal certainty phrase. Academic confidence expression."
      },
      {
        id: "formal_11",
        question: "Los datos _____ la necesidad imperativa de modificar nuestra estrategia actual.",
        translation: "(The data point to the imperative need to modify our current strategy)",
        options: ["apuntan a", "señalan", "muestran", "indican"],
        correct: "apuntan a",
        explanation: "'Apuntar a' formal indication phrase. Data suggesting direction."
      },
      {
        id: "formal_12",
        question: "_____ de la investigación exhaustiva, podemos afirmar con certeza razonable que...",
        translation: "(Based on the exhaustive investigation, we can state with reasonable certainty that...)",
        options: ["A partir", "Desde", "Por", "Con"],
        correct: "A partir",
        explanation: "'A partir de' formal basis phrase. Foundation for conclusions."
      },
      {
        id: "formal_13",
        question: "_____ destacar que estos resultados deben interpretarse con prudencia metodológica.",
        translation: "(It's worth highlighting these results must be interpreted with methodological prudence)",
        options: ["Conviene", "Debe", "Puede", "Cabe"],
        correct: "Conviene",
        explanation: "'Conviene destacar' academic advisement. Scholarly caution recommendation."
      },
      {
        id: "formal_14",
        question: "_____ tenor de los hallazgos, se sugiere continuar con investigaciones adicionales.",
        translation: "(In light of the findings, it's suggested to continue with additional investigations)",
        options: ["A", "En", "Por", "De"],
        correct: "A",
        explanation: "'A tenor de' very formal consideration phrase. High-level academic reasoning."
      },
      {
        id: "formal_15",
        question: "_____ modo de conclusión final, cabe afirmar que la hipótesis fue validada.",
        translation: "(By way of final conclusion, it can be stated the hypothesis was validated)",
        options: ["A", "En", "De", "Por"],
        correct: "A",
        explanation: "'A modo de' formal framing phrase. Introducing concluding statement type."
      }
    ]
  },

  ser_estar_context: {
    name: "Ser vs Estar - Contextual Nuances",
    description: "Subtle meaning changes with different verbs",
    icon: Crown,
    color: "from-amber-500 to-yellow-600",
    level: "advanced",
    questions: [
      {
        id: "ser_est_ctx_1",
        question: "Mi abuela _____ muy joven cuando se casó con mi abuelo en la posguerra.",
        translation: "(My grandmother was very young when she married my grandfather in the postwar period)",
        options: ["era", "estaba", "fue", "estuvo"],
        correct: "era",
        explanation: "'Ser joven' describes inherent age characteristic. Permanent state at that life stage."
      },
      {
        id: "ser_est_ctx_2",
        question: "Mi abuela _____ muy joven y radiante en las fotos de su boda antigua.",
        translation: "(My grandmother looked very young and radiant in her old wedding photos)",
        options: ["estaba", "era", "estuvo", "fue"],
        correct: "estaba",
        explanation: "'Estar joven' describes appearance in specific moment. How she looked in photo."
      },
      {
        id: "ser_est_ctx_3",
        question: "Estas manzanas _____ deliciosas, tienen un sabor dulce natural incomparable.",
        translation: "(These apples are delicious, they have an incomparable natural sweet flavor)",
        options: ["son", "están", "fueron", "estuvieron"],
        correct: "son",
        explanation: "'Ser delicioso' describes inherent quality. Natural characteristic of apple type."
      },
      {
        id: "ser_est_ctx_4",
        question: "Estas manzanas _____ deliciosas hoy porque las acaban de cosechar frescas.",
        translation: "(These apples are delicious today because they just harvested them fresh)",
        options: ["están", "son", "estuvieron", "fueron"],
        correct: "están",
        explanation: "'Estar delicioso' describes current state. Temporary peak freshness condition."
      },
      {
        id: "ser_est_ctx_5",
        question: "El director general _____ muy ocupado siempre con sus múltiples responsabilidades importantes.",
        translation: "(The general manager is always very busy with his multiple important responsibilities)",
        options: ["es", "está", "fue", "estuvo"],
        correct: "es",
        explanation: "'Ser ocupado' describes characteristic tendency. Habitually busy as personality trait."
      },
      {
        id: "ser_est_ctx_6",
        question: "El director _____ muy ocupado ahora mismo, ¿puede volver en una hora?",
        translation: "(The director is very busy right now, can you come back in an hour?)",
        options: ["está", "es", "estuvo", "fue"],
        correct: "está",
        explanation: "'Estar ocupado' describes current temporary state. Busy at this specific moment."
      },
      {
        id: "ser_est_ctx_7",
        question: "Mi hermano _____ muy listo y siempre saca las mejores notas sin estudiar mucho.",
        translation: "(My brother is very smart and always gets the best grades without studying much)",
        options: ["es", "está", "fue", "estuvo"],
        correct: "es",
        explanation: "'Ser listo' means be smart/clever. Inherent intelligence as characteristic."
      },
      {
        id: "ser_est_ctx_8",
        question: "Ya _____ listo para salir, solo necesito ponerme los zapatos y la chaqueta.",
        translation: "(I'm already ready to leave, I just need to put on my shoes and jacket)",
        options: ["estoy", "soy", "estuve", "fui"],
        correct: "estoy",
        explanation: "'Estar listo' means be ready/prepared. Temporary state of readiness."
      },
      {
        id: "ser_est_ctx_9",
        question: "Ese actor famoso _____ muy aburrido como persona en la vida real privada.",
        translation: "(That famous actor is very boring as a person in real private life)",
        options: ["es", "está", "fue", "estuvo"],
        correct: "es",
        explanation: "'Ser aburrido' means be boring (inherent trait). Personality characteristic."
      },
      {
        id: "ser_est_ctx_10",
        question: "_____ muy aburrido en esta fiesta tan monótona, ¿podemos irnos ya?",
        translation: "(I'm very bored at this very monotonous party, can we leave now?)",
        options: ["Estoy", "Soy", "Estuve", "Fui"],
        correct: "Estoy",
        explanation: "'Estar aburrido' means feel bored. Temporary emotional state of boredom."
      },
      {
        id: "ser_est_ctx_11",
        question: "La situación _____ grave y requiere nuestra atención inmediata y decisiva.",
        translation: "(The situation is serious and requires our immediate and decisive attention)",
        options: ["es", "está", "fue", "estuvo"],
        correct: "es",
        explanation: "'Ser grave' for inherent seriousness. Situation's nature is serious."
      },
      {
        id: "ser_est_ctx_12",
        question: "Mi padre _____ grave en el hospital después del accidente automovilístico severo.",
        translation: "(My father is in serious condition in the hospital after the severe car accident)",
        options: ["está", "es", "estuvo", "fue"],
        correct: "está",
        explanation: "'Estar grave' for health condition. Temporary critical medical state."
      },
      {
        id: "ser_est_ctx_13",
        question: "Esta sopa _____ muy rica, tiene un sabor casero tradicional auténtico.",
        translation: "(This soup is very tasty, it has an authentic traditional homemade flavor)",
        options: ["está", "es", "estuvo", "fue"],
        correct: "está",
        explanation: "'Estar rico' for food taste. Current delicious state of prepared food."
      },
      {
        id: "ser_est_ctx_14",
        question: "Él _____ un hombre muy rico que posee varias propiedades inmobiliarias importantes.",
        translation: "(He is a very rich man who owns several important real estate properties)",
        options: ["es", "está", "fue", "estuvo"],
        correct: "es",
        explanation: "'Ser rico' for wealth status. Inherent financial characteristic."
      },
      {
        id: "ser_est_ctx_15",
        question: "Esa profesora _____ muy buena explicando conceptos matemáticos complejos a estudiantes.",
        translation: "(That teacher is very good at explaining complex mathematical concepts to students)",
        options: ["es", "está", "fue", "estuvo"],
        correct: "es",
        explanation: "'Ser bueno' for inherent skill. Characteristic teaching ability."
      }
    ]
  },

  verb_patterns_prepositions: {
    name: "Verb + Preposition Patterns",
    description: "Required prepositions after specific verbs",
    icon: Crown,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "verb_prep_1",
        question: "Dejé _____ fumar hace exactamente tres años por razones de salud importantes.",
        translation: "(I stopped smoking exactly three years ago for important health reasons)",
        options: ["de", "a", "por", "∅"],
        correct: "de",
        explanation: "'Dejar de' + infinitive means stop doing. Required preposition for cessation."
      },
      {
        id: "verb_prep_2",
        question: "Empecé _____ trabajar en esta empresa cuando tenía solo veintidós años.",
        translation: "(I started working at this company when I was only twenty-two years old)",
        options: ["a", "de", "por", "∅"],
        correct: "a",
        explanation: "'Empezar a' + infinitive means begin to. Required 'a' for starting action."
      },
      {
        id: "verb_prep_3",
        question: "Me olvidé completamente _____ comprar leche en el supermercado esta mañana.",
        translation: "(I completely forgot to buy milk at the supermarket this morning)",
        options: ["de", "a", "∅", "por"],
        correct: "de",
        explanation: "'Olvidarse de' requires 'de'. Forgetting to do something needs preposition."
      },
      {
        id: "verb_prep_4",
        question: "Insistió _____ pagar toda la cuenta completa del restaurante caro ayer.",
        translation: "(He insisted on paying the entire bill at the expensive restaurant yesterday)",
        options: ["en", "de", "a", "por"],
        correct: "en",
        explanation: "'Insistir en' requires 'en'. Persistence about action needs this preposition."
      },
      {
        id: "verb_prep_5",
        question: "Sueño _____ viajar algún día a Japón y conocer su cultura fascinante.",
        translation: "(I dream of traveling someday to Japan and getting to know its fascinating culture)",
        options: ["con", "de", "en", "a"],
        correct: "con",
        explanation: "'Soñar con' means dream of/about. Dreams and aspirations use 'con'."
      },
      {
        id: "verb_prep_6",
        question: "Acabamos _____ llegar del aeropuerto después de un vuelo internacional agotador.",
        translation: "(We just arrived from the airport after an exhausting international flight)",
        options: ["de", "a", "por", "∅"],
        correct: "de",
        explanation: "'Acabar de' + infinitive means just finished. Recent completion requires 'de'."
      },
      {
        id: "verb_prep_7",
        question: "Se negó rotundamente _____ aceptar las nuevas condiciones laborales propuestas.",
        translation: "(He categorically refused to accept the proposed new labor conditions)",
        options: ["a", "de", "en", "por"],
        correct: "a",
        explanation: "'Negarse a' means refuse to. Refusal to act requires 'a'."
      },
      {
        id: "verb_prep_8",
        question: "Aprendí _____ tocar la guitarra clásica cuando era adolescente en el instituto.",
        translation: "(I learned to play classical guitar when I was a teenager in high school)",
        options: ["a", "de", "∅", "por"],
        correct: "a",
        explanation: "'Aprender a' + infinitive means learn to. Acquiring skill requires 'a'."
      },
      {
        id: "verb_prep_9",
        question: "Me atreví finalmente _____ decirle la verdad completa sobre mis sentimientos.",
        translation: "(I finally dared to tell her the complete truth about my feelings)",
        options: ["a", "de", "en", "por"],
        correct: "a",
        explanation: "'Atreverse a' means dare to. Courage to act requires 'a'."
      },
      {
        id: "verb_prep_10",
        question: "Tardé mucho tiempo _____ entender completamente las reglas complicadas del juego.",
        translation: "(It took me a long time to completely understand the complicated rules of the game)",
        options: ["en", "a", "de", "para"],
        correct: "en",
        explanation: "'Tardar en' means take time to. Duration before accomplishment uses 'en'."
      },
      {
        id: "verb_prep_11",
        question: "Quedamos _____ vernos mañana a las tres en punto en el café del centro.",
        translation: "(We agreed to see each other tomorrow at three o'clock sharp at the downtown café)",
        options: ["en", "de", "a", "por"],
        correct: "en",
        explanation: "'Quedar en' means agree to/arrange. Making plans requires 'en'."
      },
      {
        id: "verb_prep_12",
        question: "Ayúdame _____ cargar todas estas cajas pesadas hasta el coche estacionado afuera.",
        translation: "(Help me carry all these heavy boxes to the car parked outside)",
        options: ["a", "de", "en", "∅"],
        correct: "a",
        explanation: "'Ayudar a' someone to do something. Assistance with action requires 'a'."
      },
      {
        id: "verb_prep_13",
        question: "Renunció definitivamente _____ su puesto directivo después de veinte años de servicio.",
        translation: "(He definitively resigned from his managerial position after twenty years of service)",
        options: ["a", "de", "∅", "por"],
        correct: "a",
        explanation: "'Renunciar a' means resign from. Giving up position requires 'a'."
      },
      {
        id: "verb_prep_14",
        question: "Pensamos seriamente _____ mudarnos a otra ciudad más tranquila el próximo año.",
        translation: "(We're seriously thinking about moving to another calmer city next year)",
        options: ["en", "de", "a", "sobre"],
        correct: "en",
        explanation: "'Pensar en' means think about. Considering action requires 'en'."
      },
      {
        id: "verb_prep_15",
        question: "Confío plenamente _____ que tú harás lo correcto en esta situación tan delicada.",
        translation: "(I fully trust you'll do the right thing in this very delicate situation)",
        options: ["en", "de", "a", "por"],
        correct: "en",
        explanation: "'Confiar en' means trust in. Faith in person or outcome uses 'en'."
      }
    ]
  }
};

export default part19Categories;