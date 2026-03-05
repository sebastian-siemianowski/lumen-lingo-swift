/**
 * ENGLISH → SPANISH GRAMMAR - PART 13
 * 5 advanced categories, 15 questions each - Higher quality with complex sentences
 */

import { BookMarked, Workflow, Shield, Layers2, Flame } from "lucide-react";

export const part13Categories = {
  subjunctive_after_conjunctions: {
    name: "Subjunctive After Conjunctions",
    description: "Master cuando, aunque, para que, sin que",
    icon: Workflow,
    color: "from-purple-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "subj_conj_1",
        question: "Te llamaré cuando _____ del trabajo esta noche.",
        translation: "(I'll call you when I get out of work tonight)",
        options: ["salga", "salgo", "saldré", "salí"],
        correct: "salga",
        explanation: "Future time clauses with 'cuando' require subjunctive. Even though it's future, Spanish treats the uncertainty with subjunctive mood."
      },
      {
        id: "subj_conj_2",
        question: "Lo haré aunque _____ muy difícil y me tome mucho tiempo.",
        translation: "(I'll do it even though it may be very difficult and take me a long time)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Aunque' with subjunctive expresses uncertainty or hypothetical concession. When the speaker isn't affirming the truth, subjunctive is required."
      },
      {
        id: "subj_conj_3",
        question: "Te explico todo esto para que _____ la situación completamente.",
        translation: "(I'm explaining all this to you so that you understand the situation completely)",
        options: ["entiendas", "entiendes", "entenderás", "entendiste"],
        correct: "entiendas",
        explanation: "'Para que' (so that) always triggers subjunctive. Purpose clauses express intent, which is inherently uncertain and future-oriented."
      },
      {
        id: "subj_conj_4",
        question: "No puedo tomar una decisión sin que mi jefe lo _____.",
        translation: "(I can't make a decision without my boss knowing about it)",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "'Sin que' (without) always requires subjunctive. Negative purpose inherently involves uncertainty about whether something will happen."
      },
      {
        id: "subj_conj_5",
        question: "En caso de que _____ mañana, cancelaremos el evento al aire libre.",
        translation: "(In case it rains tomorrow, we'll cancel the outdoor event)",
        options: ["llueva", "llueve", "lloverá", "llovió"],
        correct: "llueva",
        explanation: "'En caso de que' (in case) expresses contingency requiring subjunctive. Planning for uncertain possibilities demands this mood."
      },
      {
        id: "subj_conj_6",
        question: "Voy a estudiar mucho antes de que _____ el examen final.",
        translation: "(I'm going to study a lot before the final exam starts)",
        options: ["empiece", "empieza", "empezará", "empezó"],
        correct: "empiece",
        explanation: "'Antes de que' (before) requires subjunctive when subjects differ. Events that haven't happened yet need subjunctive mood."
      },
      {
        id: "subj_conj_7",
        question: "Lo compraré con tal de que me _____ un buen descuento.",
        translation: "(I'll buy it provided that they give me a good discount)",
        options: ["den", "dan", "darán", "dieron"],
        correct: "den",
        explanation: "'Con tal de que' (provided that) expresses condition requiring subjunctive. Conditional clauses deal with uncertain future outcomes."
      },
      {
        id: "subj_conj_8",
        question: "Te presto mi coche a menos que lo _____ mañana temprano.",
        translation: "(I'll lend you my car unless I need it early tomorrow morning)",
        options: ["necesite", "necesito", "necesitaré", "necesité"],
        correct: "necesite",
        explanation: "'A menos que' (unless) introduces exception requiring subjunctive. Exceptions are inherently uncertain conditions."
      },
      {
        id: "subj_conj_9",
        question: "Voy a esperar aquí hasta que ellos _____ de la reunión.",
        translation: "(I'm going to wait here until they come out of the meeting)",
        options: ["salgan", "salen", "saldrán", "salieron"],
        correct: "salgan",
        explanation: "'Hasta que' with future reference requires subjunctive. Waiting for something that hasn't happened yet needs subjunctive."
      },
      {
        id: "subj_conj_10",
        question: "Siempre saluda a todos con una sonrisa aunque no _____ de buen humor.",
        translation: "(She always greets everyone with a smile even when she's not in a good mood)",
        options: ["esté", "está", "estará", "estaba"],
        correct: "esté",
        explanation: "'Aunque' with habitual actions and subjunctive shows the action happens regardless. The mood emphasizes the irrelevance of the condition."
      },
      {
        id: "subj_conj_11",
        question: "Te doy mi número de teléfono en caso de que me _____ contactar urgentemente.",
        translation: "(I'm giving you my phone number in case you need to contact me urgently)",
        options: ["necesites", "necesitas", "necesitarás", "necesitaste"],
        correct: "necesites",
        explanation: "'En caso de que' plans for contingencies requiring subjunctive. Preparedness for uncertain events demands this mood."
      },
      {
        id: "subj_conj_12",
        question: "No voy a decir nada a menos que tú me lo _____ directamente.",
        translation: "(I'm not going to say anything unless you ask me directly)",
        options: ["pidas", "pides", "pedirás", "pediste"],
        correct: "pidas",
        explanation: "'A menos que' introduces negative condition with subjunctive. The exception may or may not occur."
      },
      {
        id: "subj_conj_13",
        question: "Vamos a salir tan pronto como _____ de llover afuera.",
        translation: "(We're going to leave as soon as it stops raining outside)",
        options: ["deje", "deja", "dejará", "dejó"],
        correct: "deje",
        explanation: "'Tan pronto como' (as soon as) with future event requires subjunctive. Time expressions about future are uncertain."
      },
      {
        id: "subj_conj_14",
        question: "Lo haré de manera que todos _____ entenderlo fácilmente.",
        translation: "(I'll do it in such a way that everyone can understand it easily)",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "'De manera que' (so that) expressing purpose requires subjunctive. Intended results are uncertain and need this mood."
      },
      {
        id: "subj_conj_15",
        question: "Voy a trabajar horas extras a fin de que mi familia _____ vivir mejor.",
        translation: "(I'm going to work overtime so that my family can live better)",
        options: ["pueda", "puede", "podrá", "podía"],
        correct: "pueda",
        explanation: "'A fin de que' (in order that) expresses purpose with subjunctive. Goals and purposes are inherently uncertain outcomes."
      }
    ]
  },

  reciprocal_verbs: {
    name: "Reciprocal Verbs",
    description: "Express mutual actions - each other, one another",
    icon: Shield,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "recip_1",
        question: "Mi hermana y yo _____ todos los días por teléfono.",
        translation: "(My sister and I talk to each other every day on the phone)",
        options: ["nos hablamos", "hablamos", "se hablan", "nos hablan"],
        correct: "nos hablamos",
        explanation: "Reciprocal actions use reflexive pronouns to show 'each other'. 'Nos hablamos' means we talk to one another."
      },
      {
        id: "recip_2",
        question: "María y Pedro _____ hace cinco años en la universidad.",
        translation: "(María and Pedro met each other five years ago at the university)",
        options: ["se conocieron", "conocieron", "nos conocimos", "les conocieron"],
        correct: "se conocieron",
        explanation: "Reciprocal 'conocerse' means meet each other. Third person plural 'se' shows mutual introduction."
      },
      {
        id: "recip_3",
        question: "Mis padres _____ profundamente después de tantos años juntos.",
        translation: "(My parents love each other deeply after so many years together)",
        options: ["se quieren", "quieren", "nos quieren", "les quieren"],
        correct: "se quieren",
        explanation: "'Quererse' as reciprocal verb expresses mutual love. 'Se' makes clear it's reciprocal, not just loving someone else."
      },
      {
        id: "recip_4",
        question: "Los dos equipos _____ con mucho respeto durante el partido.",
        translation: "(The two teams treated each other with great respect during the match)",
        options: ["se trataron", "trataron", "nos tratamos", "les trataron"],
        correct: "se trataron",
        explanation: "Reciprocal 'tratarse' shows mutual treatment. Sports context often uses reciprocal verbs for interactions."
      },
      {
        id: "recip_5",
        question: "Nosotros _____ en el café que está cerca de la oficina.",
        translation: "(We're going to meet each other at the café near the office)",
        options: ["nos vamos a encontrar", "vamos a encontrar", "se van a encontrar", "encontramos"],
        correct: "nos vamos a encontrar",
        explanation: "Future reciprocal with 'ir a' + infinitive keeps reflexive pronoun. 'Nos' before conjugated verb shows mutual meeting."
      },
      {
        id: "recip_6",
        question: "Los vecinos no _____ desde hace meses por una discusión.",
        translation: "(The neighbors haven't spoken to each other for months because of an argument)",
        options: ["se hablan", "hablan", "nos hablamos", "les hablan"],
        correct: "se hablan",
        explanation: "Negative reciprocal maintains reflexive pronoun. 'No se hablan' emphasizes the mutual silence."
      },
      {
        id: "recip_7",
        question: "Mis amigos y yo siempre _____ con mensajes de texto.",
        translation: "(My friends and I always write to each other with text messages)",
        options: ["nos escribimos", "escribimos", "se escriben", "nos escriben"],
        correct: "nos escribimos",
        explanation: "Habitual reciprocal action uses reflexive pronoun. 'Nos escribimos' shows ongoing mutual correspondence."
      },
      {
        id: "recip_8",
        question: "Las dos empresas _____ para crear un proyecto conjunto.",
        translation: "(The two companies contacted each other to create a joint project)",
        options: ["se contactaron", "contactaron", "nos contactamos", "les contactaron"],
        correct: "se contactaron",
        explanation: "Business reciprocal verbs show mutual professional interaction. 'Se contactaron' emphasizes bilateral communication."
      },
      {
        id: "recip_9",
        question: "Los estudiantes _____ para preparar la presentación grupal.",
        translation: "(The students are helping each other to prepare the group presentation)",
        options: ["se están ayudando", "están ayudando", "nos estamos ayudando", "les están ayudando"],
        correct: "se están ayudando",
        explanation: "Progressive reciprocal keeps reflexive with auxiliary. 'Se están ayudando' shows ongoing mutual assistance."
      },
      {
        id: "recip_10",
        question: "Después de la pelea, tardaron semanas en _____ de nuevo.",
        translation: "(After the fight, it took them weeks to speak to each other again)",
        options: ["hablarse", "hablar", "hablarnos", "hablarles"],
        correct: "hablarse",
        explanation: "Infinitive reciprocal keeps reflexive pronoun attached. 'Hablarse' infinitive shows the reciprocal nature."
      },
      {
        id: "recip_11",
        question: "Los líderes mundiales _____ cada año en la cumbre internacional.",
        translation: "(World leaders meet each other every year at the international summit)",
        options: ["se reúnen", "reúnen", "nos reunimos", "les reúnen"],
        correct: "se reúnen",
        explanation: "Formal reciprocal for official meetings. 'Reunirse' emphasizes mutual gathering rather than one-sided meeting."
      },
      {
        id: "recip_12",
        question: "Mi mejor amiga y yo _____ desde que éramos niñas pequeñas.",
        translation: "(My best friend and I have known each other since we were little girls)",
        options: ["nos conocemos", "conocemos", "se conocen", "nos conocen"],
        correct: "nos conocemos",
        explanation: "Present tense for ongoing reciprocal relationship from past. 'Nos conocemos' emphasizes the mutual acquaintance."
      },
      {
        id: "recip_13",
        question: "Los dos candidatos _____ durante todo el debate político.",
        translation: "(The two candidates interrupted each other throughout the entire political debate)",
        options: ["se interrumpieron", "interrumpieron", "nos interrumpimos", "les interrumpieron"],
        correct: "se interrumpieron",
        explanation: "Reciprocal in preterite for completed mutual actions. Political debates often involve mutual interruption."
      },
      {
        id: "recip_14",
        question: "Es importante que los colegas _____ en el ambiente laboral.",
        translation: "(It's important that colleagues respect each other in the work environment)",
        options: ["se respeten", "respeten", "nos respetemos", "les respeten"],
        correct: "se respeten",
        explanation: "Subjunctive reciprocal after importance expression. Mutual respect as desired workplace behavior requires subjunctive."
      },
      {
        id: "recip_15",
        question: "Los hermanos gemelos _____ tan bien que parecen leer mentes.",
        translation: "(The twin brothers understand each other so well they seem to read minds)",
        options: ["se entienden", "entienden", "nos entendemos", "les entienden"],
        correct: "se entienden",
        explanation: "Deep reciprocal understanding between people. 'Entenderse' goes beyond simple comprehension to mutual understanding."
      }
    ]
  },

  subjunctive_adverbial_clauses: {
    name: "Subjunctive in Adverbial Clauses",
    description: "Complex subordinate clause patterns",
    icon: BookMarked,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "adv_cl_1",
        question: "Te ayudaré siempre que tú también _____ tu mejor esfuerzo.",
        translation: "(I'll help you as long as you also put in your best effort)",
        options: ["pongas", "pones", "pondrás", "pusiste"],
        correct: "pongas",
        explanation: "'Siempre que' (as long as/provided that) introduces condition requiring subjunctive. Conditional help depends on uncertain reciprocal action."
      },
      {
        id: "adv_cl_2",
        question: "Vamos a comenzar el proyecto después de que el cliente _____ el contrato.",
        translation: "(We're going to start the project after the client signs the contract)",
        options: ["firme", "firma", "firmará", "firmó"],
        correct: "firme",
        explanation: "'Después de que' with future reference requires subjunctive. Waiting for uncertain future event to trigger action."
      },
      {
        id: "adv_cl_3",
        question: "Te doy mi contraseña con tal de que no la _____ con nadie más.",
        translation: "(I'll give you my password provided you don't share it with anyone else)",
        options: ["compartas", "compartes", "compartirás", "compartiste"],
        correct: "compartas",
        explanation: "'Con tal de que' (provided that) sets condition with subjunctive. Trust given conditionally on uncertain future behavior."
      },
      {
        id: "adv_cl_4",
        question: "Siempre reviso mis correos electrónicos antes de que _____ de casa.",
        translation: "(I always check my emails before I leave the house)",
        options: ["salga", "salgo", "saldré", "salí"],
        correct: "salga",
        explanation: "'Antes de que' requires subjunctive even for habitual actions. The sequencing of events involves anticipated action."
      },
      {
        id: "adv_cl_5",
        question: "No podemos tomar ninguna decisión hasta que _____ los resultados.",
        translation: "(We can't make any decision until we receive the results)",
        options: ["recibamos", "recibimos", "recibiremos", "recibimos"],
        correct: "recibamos",
        explanation: "'Hasta que' (until) with pending action requires subjunctive. Decision-making depends on uncertain future receipt."
      },
      {
        id: "adv_cl_6",
        question: "Lo haré como tú _____ que sea mejor para todos.",
        translation: "(I'll do it however you think it's best for everyone)",
        options: ["creas", "crees", "creerás", "creíste"],
        correct: "creas",
        explanation: "'Como' meaning 'however' with subjunctive shows deference to others' judgment. Manner depends on uncertain opinion."
      },
      {
        id: "adv_cl_7",
        question: "Voy adonde me _____ mis superiores en la empresa.",
        translation: "(I go wherever my superiors in the company send me)",
        options: ["manden", "mandan", "mandarán", "mandaron"],
        correct: "manden",
        explanation: "'Adonde' (wherever) with indefinite destination requires subjunctive. Unknown or variable locations need subjunctive mood."
      },
      {
        id: "adv_cl_8",
        question: "Puedes quedarte en mi apartamento mientras _____ en la ciudad.",
        translation: "(You can stay in my apartment while you're in the city)",
        options: ["estés", "estás", "estarás", "estuviste"],
        correct: "estés",
        explanation: "'Mientras' (while) with future or indefinite time uses subjunctive. Duration of stay is uncertain."
      },
      {
        id: "adv_cl_9",
        question: "Te llamaré en cuanto _____ más información sobre el asunto.",
        translation: "(I'll call you as soon as I have more information about the matter)",
        options: ["tenga", "tengo", "tendré", "tuve"],
        correct: "tenga",
        explanation: "'En cuanto' (as soon as) with future triggers subjunctive. Immediate future action upon uncertain condition."
      },
      {
        id: "adv_cl_10",
        question: "No podré relajarme hasta que no _____ todos mis pendientes.",
        translation: "(I won't be able to relax until I finish all my pending tasks)",
        options: ["termine", "termino", "terminaré", "terminé"],
        correct: "termine",
        explanation: "'Hasta que' with negative main clause requires subjunctive. Relaxation depends on uncertain task completion."
      },
      {
        id: "adv_cl_11",
        question: "Por más que _____, nunca logro convencerlo de mi punto de vista.",
        translation: "(No matter how much I try, I never manage to convince him of my point of view)",
        options: ["intente", "intento", "intentaré", "intenté"],
        correct: "intente",
        explanation: "'Por más que' (no matter how much) introduces concession with subjunctive. Futile efforts despite trying require this mood."
      },
      {
        id: "adv_cl_12",
        question: "Vamos a esperar aquí hasta que _____ el autobús que nos lleva.",
        translation: "(We're going to wait here until the bus that takes us arrives)",
        options: ["llegue", "llega", "llegará", "llegó"],
        correct: "llegue",
        explanation: "'Hasta que' waiting for uncertain arrival uses subjunctive. Future-oriented waiting requires subjunctive mood."
      },
      {
        id: "adv_cl_13",
        question: "Te lo explicaré de nuevo para que lo _____ perfectamente bien.",
        translation: "(I'll explain it to you again so that you understand it perfectly well)",
        options: ["entiendas", "entiendes", "entenderás", "entendiste"],
        correct: "entiendas",
        explanation: "'Para que' purpose clause always uses subjunctive. Explaining with intent for understanding is uncertain outcome."
      },
      {
        id: "adv_cl_14",
        question: "No importa cuánto dinero _____, nunca parece ser suficiente.",
        translation: "(No matter how much money he earns, it never seems to be enough)",
        options: ["gane", "gana", "ganará", "ganó"],
        correct: "gane",
        explanation: "'No importa cuánto' (no matter how much) with subjunctive shows irrelevance. Amount is irrelevant to insufficiency."
      },
      {
        id: "adv_cl_15",
        question: "Lo haré siempre y cuando me _____ todo el apoyo necesario.",
        translation: "(I'll do it as long as they give me all the necessary support)",
        options: ["den", "dan", "darán", "dieron"],
        correct: "den",
        explanation: "'Siempre y cuando' (as long as) introduces strong condition with subjunctive. Commitment depends on uncertain support."
      }
    ]
  },

  preterite_vs_imperfect_advanced: {
    name: "Preterite vs Imperfect - Advanced",
    description: "Nuanced differences in storytelling",
    icon: Layers2,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "pret_imp_1",
        question: "_____ las diez de la noche cuando finalmente _____ a casa.",
        translation: "(It was ten at night when I finally arrived home)",
        options: ["Eran / llegué", "Fueron / llegaba", "Eran / llegaba", "Fueron / llegué"],
        correct: "Eran / llegué",
        explanation: "Time in background uses imperfect; specific arrival is preterite. 'Eran' sets scene, 'llegué' is the completed event."
      },
      {
        id: "pret_imp_2",
        question: "_____ muy cansado, así que _____ acostarme temprano.",
        translation: "(I was very tired, so I decided to go to bed early)",
        options: ["Estaba / decidí", "Estuve / decidía", "Estaba / decidía", "Estuve / decidí"],
        correct: "Estaba / decidí",
        explanation: "Ongoing condition uses imperfect; specific decision is preterite. Tiredness was state, deciding was event."
      },
      {
        id: "pret_imp_3",
        question: "Mientras yo _____ la cena, mi esposo _____ las noticias.",
        translation: "(While I was preparing dinner, my husband watched the news)",
        options: ["preparaba / vio", "preparé / veía", "preparaba / veía", "preparé / vio"],
        correct: "preparaba / vio",
        explanation: "'Mientras' shows ongoing background with imperfect; completed watching is preterite. Simultaneous but different aspects."
      },
      {
        id: "pret_imp_4",
        question: "Cuando era joven, siempre _____ al gimnasio, pero ayer no _____ ir.",
        translation: "(When I was young, I always used to go to the gym, but yesterday I couldn't go)",
        options: ["iba / pude", "fui / podía", "iba / podía", "fui / pude"],
        correct: "iba / pude",
        explanation: "Habitual past uses imperfect; specific failed attempt is preterite. 'Iba' for routine, 'pude' for one-time inability."
      },
      {
        id: "pret_imp_5",
        question: "_____ en ese momento cuando _____ que algo estaba mal.",
        translation: "(It was at that moment when I realized something was wrong)",
        options: ["Fue / me di cuenta", "Era / me daba cuenta", "Fue / me daba cuenta", "Era / me di cuenta"],
        correct: "Fue / me di cuenta",
        explanation: "Specific moment is preterite; realization is completed mental event. Both actions are specific completed events."
      },
      {
        id: "pret_imp_6",
        question: "Todos los veranos _____ a la playa, pero ese año _____ a las montañas.",
        translation: "(Every summer we went to the beach, but that year we went to the mountains)",
        options: ["íbamos / fuimos", "fuimos / íbamos", "íbamos / íbamos", "fuimos / fuimos"],
        correct: "íbamos / fuimos",
        explanation: "Repeated summer pattern uses imperfect; specific year's exception is preterite. Contrast between habit and one-time change."
      },
      {
        id: "pret_imp_7",
        question: "El profesor _____ explicando cuando de repente _____ la luz.",
        translation: "(The professor was explaining when suddenly the light went out)",
        options: ["estaba / se fue", "estuvo / se iba", "estaba / se iba", "estuvo / se fue"],
        correct: "estaba / se fue",
        explanation: "Progressive background uses imperfect; sudden interruption is preterite. Ongoing action cut short by sudden event."
      },
      {
        id: "pret_imp_8",
        question: "_____ once años cuando mis padres _____ mudarme a otra ciudad.",
        translation: "(I was eleven years old when my parents decided to move to another city)",
        options: ["Tenía / decidieron", "Tuve / decidían", "Tenía / decidían", "Tuve / decidieron"],
        correct: "Tenía / decidieron",
        explanation: "Age is descriptive imperfect; decision is specific preterite event. Age provides background; decision is the story."
      },
      {
        id: "pret_imp_9",
        question: "Cada vez que lo _____, me _____ muy nervioso sin poder controlarlo.",
        translation: "(Every time I saw him, I would get very nervous without being able to control it)",
        options: ["veía / ponía", "vi / puse", "veía / puse", "vi / ponía"],
        correct: "veía / ponía",
        explanation: "Repeated circumstances use double imperfect. 'Cada vez que' signals habitual pattern requiring both imperfects."
      },
      {
        id: "pret_imp_10",
        question: "_____ lloviendo fuertemente cuando _____ el accidente grave.",
        translation: "(It was raining heavily when the serious accident happened)",
        options: ["Estaba / ocurrió", "Estuvo / ocurría", "Estaba / ocurría", "Estuvo / ocurrió"],
        correct: "Estaba / ocurrió",
        explanation: "Weather as ongoing background is imperfect; sudden accident is preterite. Rain sets scene, accident is main event."
      },
      {
        id: "pret_imp_11",
        question: "Yo _____ veinte años cuando finalmente _____ mi primer trabajo.",
        translation: "(I was twenty years old when I finally got my first job)",
        options: ["tenía / conseguí", "tuve / conseguía", "tenía / conseguía", "tuve / conseguí"],
        correct: "tenía / conseguí",
        explanation: "Age description uses imperfect; achievement is preterite. Ongoing state vs. completed milestone."
      },
      {
        id: "pret_imp_12",
        question: "Antes de mudarme, _____ en un apartamento pequeño que me _____ mucho.",
        translation: "(Before moving, I lived in a small apartment that I liked a lot)",
        options: ["vivía / gustaba", "viví / gustó", "vivía / gustó", "viví / gustaba"],
        correct: "vivía / gustaba",
        explanation: "Ongoing past residence uses imperfect; ongoing liking uses imperfect. Both describe continuous past states."
      },
      {
        id: "pret_imp_13",
        question: "La primera vez que _____ comida tailandesa, no me _____ para nada.",
        translation: "(The first time I tried Thai food, I didn't like it at all)",
        options: ["probé / gustó", "probaba / gustaba", "probé / gustaba", "probaba / gustó"],
        correct: "probé / gustó",
        explanation: "One-time trying is preterite; instant reaction is preterite. Both are specific completed experiences."
      },
      {
        id: "pret_imp_14",
        question: "Cuando _____ niño, siempre _____ que sería astronauta algún día.",
        translation: "(When I was a child, I always thought I would be an astronaut someday)",
        options: ["era / pensaba", "fui / pensé", "era / pensé", "fui / pensaba"],
        correct: "era / pensaba",
        explanation: "Childhood state uses imperfect; habitual childhood thinking uses imperfect. Both describe ongoing past mental states."
      },
      {
        id: "pret_imp_15",
        question: "_____ un día perfecto hasta que _____ las malas noticias.",
        translation: "(It was a perfect day until I received the bad news)",
        options: ["Era / recibí", "Fue / recibía", "Era / recibía", "Fue / recibí"],
        correct: "Era / recibí",
        explanation: "Ongoing perfect day uses imperfect; specific news reception is preterite. Background condition interrupted by specific event."
      }
    ]
  },

  sequence_of_tenses: {
    name: "Sequence of Tenses",
    description: "Match tenses correctly in complex sentences",
    icon: Flame,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "seq_1",
        question: "Me dijo ayer que _____ venir a la fiesta este fin de semana.",
        translation: "(He told me yesterday that he would come to the party this weekend)",
        options: ["vendría", "vendrá", "viene", "vino"],
        correct: "vendría",
        explanation: "Past main verb pulls conditional in reported speech. Future from past perspective becomes conditional."
      },
      {
        id: "seq_2",
        question: "Espero que ya _____ los deberes antes de que lleguemos.",
        translation: "(I hope you have already finished your homework before we arrive)",
        options: ["hayas terminado", "has terminado", "termines", "terminarás"],
        correct: "hayas terminado",
        explanation: "Present perfect subjunctive after hope for completed action. Hoping about action already done requires perfect subjunctive."
      },
      {
        id: "seq_3",
        question: "Si hubiera sabido la verdad, nunca te _____ dicho eso.",
        translation: "(If I had known the truth, I would never have told you that)",
        options: ["habría", "hubiera", "había", "he"],
        correct: "habría",
        explanation: "Pluperfect subjunctive condition requires conditional perfect result. Past contrary-to-fact needs both perfect forms."
      },
      {
        id: "seq_4",
        question: "Dudo mucho que ellos _____ a tiempo para la reunión importante.",
        translation: "(I doubt very much that they will arrive on time for the important meeting)",
        options: ["lleguen", "llegan", "llegarán", "llegaron"],
        correct: "lleguen",
        explanation: "Present doubt about future uses present subjunctive. Future events after doubt expressions take present subjunctive."
      },
      {
        id: "seq_5",
        question: "Me sorprendió que nadie _____ a mi cumpleaños el mes pasado.",
        translation: "(I was surprised that nobody came to my birthday last month)",
        options: ["viniera", "vino", "viene", "venga"],
        correct: "viniera",
        explanation: "Past surprise about past event uses imperfect subjunctive. Past emotion about past action requires past subjunctive."
      },
      {
        id: "seq_6",
        question: "Es probable que para mañana ya _____ la respuesta oficial.",
        translation: "(It's likely that by tomorrow we will have received the official response)",
        options: ["hayamos recibido", "hemos recibido", "recibamos", "recibiremos"],
        correct: "hayamos recibido",
        explanation: "Probability about future completion uses present perfect subjunctive. Future completed action after probability expression."
      },
      {
        id: "seq_7",
        question: "Temía que ellos no _____ llegar antes de que cerrara el museo.",
        translation: "(I was afraid they wouldn't manage to arrive before the museum closed)",
        options: ["pudieran", "pueden", "podrán", "podían"],
        correct: "pudieran",
        explanation: "Past fear about simultaneous past possibility uses imperfect subjunctive. Past emotion requires past subjunctive form."
      },
      {
        id: "seq_8",
        question: "No creo que _____ buena idea invertir todo tu dinero ahora.",
        translation: "(I don't think it's a good idea to invest all your money now)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "Negative belief about present triggers present subjunctive. 'No creo que' makes present situation subjunctive."
      },
      {
        id: "seq_9",
        question: "Cuando _____ pequeña, soñaba con que algún día _____ doctora.",
        translation: "(When I was little, I dreamed that someday I would be a doctor)",
        options: ["era / sería", "fui / era", "era / era", "fui / sería"],
        correct: "era / sería",
        explanation: "Childhood state uses imperfect; future from past uses conditional. Background condition and future-in-past both align."
      },
      {
        id: "seq_10",
        question: "Ojalá que ellos _____ encontrado una solución al problema complejo.",
        translation: "(I hope they have found a solution to the complex problem)",
        options: ["hayan", "han", "hubieran", "habían"],
        correct: "hayan",
        explanation: "'Ojalá' with present perfect subjunctive hopes for completed action. Wishing about possible past completion."
      },
      {
        id: "seq_11",
        question: "Le pedí que me _____ cuando tuviera tiempo libre disponible.",
        translation: "(I asked him to call me when he had free time available)",
        options: ["llamara", "llama", "llamará", "llame"],
        correct: "llamara",
        explanation: "Past request triggers imperfect subjunctive. Past command about future action requires past subjunctive."
      },
      {
        id: "seq_12",
        question: "Es extraño que todavía no _____ ninguna noticia sobre el resultado.",
        translation: "(It's strange that we still haven't received any news about the result)",
        options: ["hayamos recibido", "hemos recibido", "recibamos", "recibiremos"],
        correct: "hayamos recibido",
        explanation: "Present strangeness about lack of completion uses present perfect subjunctive. Reaction to non-event up to now."
      },
      {
        id: "seq_13",
        question: "Si _____ más tiempo libre, _____ aprender otro idioma extranjero.",
        translation: "(If I had more free time, I would learn another foreign language)",
        options: ["tuviera / aprendería", "tengo / aprenderé", "tendría / aprendería", "tenía / aprendía"],
        correct: "tuviera / aprendería",
        explanation: "Hypothetical present condition uses imperfect subjunctive + conditional. Contrary-to-fact present requires these forms."
      },
      {
        id: "seq_14",
        question: "Me alegré mucho de que tú _____ conseguir ese trabajo tan importante.",
        translation: "(I was very happy that you had managed to get that very important job)",
        options: ["hubieras conseguido", "habías conseguido", "consiguieras", "conseguiste"],
        correct: "hubieras conseguido",
        explanation: "Past emotion about prior completion uses pluperfect subjunctive. Past happiness about earlier achievement."
      },
      {
        id: "seq_15",
        question: "Será mejor que _____ antes de que sea demasiado tarde.",
        translation: "(It will be better if we leave before it's too late)",
        options: ["salgamos", "salimos", "saldremos", "salimos"],
        correct: "salgamos",
        explanation: "Future recommendation about present action uses present subjunctive. 'Será mejor que' triggers subjunctive regardless of tense."
      }
    ]
  },

  idiomatic_verb_expressions: {
    name: "Idiomatic Verb Expressions",
    description: "Common verb phrases and their meanings",
    icon: Flame,
    color: "from-fuchsia-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "idiom_v_1",
        question: "Después de mucho esfuerzo, finalmente _____ sacar adelante mi negocio.",
        translation: "(After much effort, I finally managed to get my business going)",
        options: ["logré", "conseguí", "pude", "tuve"],
        correct: "logré",
        explanation: "'Lograr' expresses achievement after difficulty. 'Sacar adelante' is idiom for making something succeed."
      },
      {
        id: "idiom_v_2",
        question: "No te _____ caso cuando te digo que estudies más para el examen.",
        translation: "(You don't pay attention to me when I tell you to study more for the exam)",
        options: ["hago", "doy", "pongo", "tengo"],
        correct: "hago",
        explanation: "'Hacer caso' means pay attention/heed advice. Fixed expression with 'hacer', not other verbs."
      },
      {
        id: "idiom_v_3",
        question: "Mi hermano siempre _____ de menos a su familia cuando viaja.",
        translation: "(My brother always misses his family when he travels)",
        options: ["echa", "hace", "da", "pone"],
        correct: "echa",
        explanation: "'Echar de menos' is standard idiom for missing someone/something. Cannot use other verbs."
      },
      {
        id: "idiom_v_4",
        question: "_____ en cuenta que mañana tenemos una reunión importante temprano.",
        translation: "(Keep in mind that tomorrow we have an important meeting early)",
        options: ["Ten", "Pon", "Haz", "Da"],
        correct: "Ten",
        explanation: "'Tener en cuenta' means keep in mind/consider. Command 'ten' from 'tener', not other verbs."
      },
      {
        id: "idiom_v_5",
        question: "Los dos hermanos se parecen tanto que a veces _____ confundirlos.",
        translation: "(The two brothers look so much alike that sometimes I tend to confuse them)",
        options: ["suelo", "puedo", "quiero", "debo"],
        correct: "suelo",
        explanation: "'Soler' expresses habitual tendency. Shows repeated action or usual occurrence."
      },
      {
        id: "idiom_v_6",
        question: "No _____ remedio más que aceptar las condiciones que nos ofrecieron.",
        translation: "(We had no choice but to accept the conditions they offered us)",
        options: ["quedó", "hubo", "fue", "estuvo"],
        correct: "quedó",
        explanation: "'No quedar más remedio' idiom means have no choice. Expresses lack of alternatives."
      },
      {
        id: "idiom_v_7",
        question: "Voy a _____ de vista a mis abuelos este domingo por la tarde.",
        translation: "(I'm going to visit my grandparents this Sunday afternoon)",
        options: ["hacer una", "dar una", "tener una", "poner una"],
        correct: "hacer una",
        explanation: "'Hacer una visita' or 'hacer visita de' is formal visiting expression. More formal than just 'visitar'."
      },
      {
        id: "idiom_v_8",
        question: "Ella siempre _____ cara a los problemas en lugar de evitarlos.",
        translation: "(She always faces problems instead of avoiding them)",
        options: ["hace", "da", "pone", "tiene"],
        correct: "hace",
        explanation: "'Hacer cara a' or 'hacer frente a' means confront/face. Idiom for dealing with challenges directly."
      },
      {
        id: "idiom_v_9",
        question: "_____ cuenta de mi error demasiado tarde para corregirlo.",
        translation: "(I realized my mistake too late to correct it)",
        options: ["Me di", "Hice", "Tuve", "Puse"],
        correct: "Me di",
        explanation: "'Darse cuenta de' means realize/notice. Reflexive idiom for becoming aware."
      },
      {
        id: "idiom_v_10",
        question: "No _____ ni idea de cómo resolver este problema complicado.",
        translation: "(I don't have the slightest idea how to solve this complicated problem)",
        options: ["tengo", "hago", "doy", "pongo"],
        correct: "tengo",
        explanation: "'No tener ni idea' means have no clue. Strong expression of complete ignorance."
      },
      {
        id: "idiom_v_11",
        question: "Voy a _____ todo lo posible por ayudarte con tu proyecto.",
        translation: "(I'm going to do everything possible to help you with your project)",
        options: ["hacer", "dar", "poner", "tener"],
        correct: "hacer",
        explanation: "'Hacer todo lo posible' means do everything possible. Shows maximum effort."
      },
      {
        id: "idiom_v_12",
        question: "El nuevo empleado _____ buena impresión en su primera semana.",
        translation: "(The new employee made a good impression in his first week)",
        options: ["causó", "hizo", "dio", "puso"],
        correct: "causó",
        explanation: "'Causar buena impresión' means make good impression. Also 'dar buena impresión' works."
      },
      {
        id: "idiom_v_13",
        question: "No le _____ importancia a los comentarios negativos de otras personas.",
        translation: "(Don't give importance to other people's negative comments)",
        options: ["des", "hagas", "pongas", "tengas"],
        correct: "des",
        explanation: "'Dar importancia a' means attach importance to. Shows what you consider significant."
      },
      {
        id: "idiom_v_14",
        question: "_____ ganas de viajar por toda Europa el próximo verano.",
        translation: "(I feel like traveling through all of Europe next summer)",
        options: ["Tengo", "Hago", "Doy", "Pongo"],
        correct: "Tengo",
        explanation: "'Tener ganas de' means feel like/want to. Expresses desire or inclination."
      },
      {
        id: "idiom_v_15",
        question: "_____ mucha falta que vengas a visitarme pronto.",
        translation: "(I really need you to come visit me soon)",
        options: ["Hace", "Da", "Tiene", "Pone"],
        correct: "Hace",
        explanation: "'Hacer falta' means need/be necessary. Emotional need for someone's presence."
      }
    ]
  },

  verbs_of_becoming: {
    name: "Verbs of Becoming",
    description: "Express changes - ponerse, volverse, hacerse, llegar a ser",
    icon: Layers2,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "become_1",
        question: "Cuando escuché las malas noticias, _____ muy triste inmediatamente.",
        translation: "(When I heard the bad news, I became very sad immediately)",
        options: ["me puse", "me hice", "me volví", "llegué a ser"],
        correct: "me puse",
        explanation: "'Ponerse' for sudden emotional or physical changes. Quick, temporary state changes use 'ponerse' + adjective."
      },
      {
        id: "become_2",
        question: "Después de años de estudio y práctica, finalmente _____ médico.",
        translation: "(After years of study and practice, I finally became a doctor)",
        options: ["me hice", "me puse", "me volví", "llegué a ser"],
        correct: "me hice",
        explanation: "'Hacerse' for professions and voluntary changes. Effort-based becoming, especially careers."
      },
      {
        id: "become_3",
        question: "Con el tiempo y la edad, mi abuelo _____ muy sabio.",
        translation: "(With time and age, my grandfather became very wise)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' for gradual personality or character changes. Long-term internal transformations."
      },
      {
        id: "become_4",
        question: "Después de muchos años de esfuerzo, _____ un experto reconocido.",
        translation: "(After many years of effort, he became a recognized expert)",
        options: ["llegó a ser", "se hizo", "se puso", "se volvió"],
        correct: "llegó a ser",
        explanation: "'Llegar a ser' emphasizes process of becoming something prestigious. Reaching important status."
      },
      {
        id: "become_5",
        question: "Cuando vio la serpiente en el jardín, _____ muy pálido del susto.",
        translation: "(When he saw the snake in the garden, he turned very pale from fright)",
        options: ["se puso", "se hizo", "se volvió", "llegó a ser"],
        correct: "se puso",
        explanation: "'Ponerse' for sudden physical appearance changes. Quick visible reactions to situations."
      },
      {
        id: "become_6",
        question: "Ella _____ vegetariana hace tres años por razones éticas.",
        translation: "(She became vegetarian three years ago for ethical reasons)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse' for lifestyle or belief changes. Voluntary adoption of new way of living."
      },
      {
        id: "become_7",
        question: "Mi profesor _____ muy estricto después del incidente en clase.",
        translation: "(My teacher became very strict after the incident in class)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' for gradual behavioral changes. Lasting personality shift over time."
      },
      {
        id: "become_8",
        question: "Cuando le dijeron que ganó la lotería, _____ loco de alegría.",
        translation: "(When they told him he won the lottery, he went crazy with joy)",
        options: ["se puso", "se hizo", "se volvió", "llegó a ser"],
        correct: "se puso",
        explanation: "'Ponerse' for extreme emotional reactions. Sudden intense emotional states."
      },
      {
        id: "become_9",
        question: "A través de su dedicación y talento, _____ una de las mejores.",
        translation: "(Through her dedication and talent, she became one of the best)",
        options: ["llegó a ser", "se hizo", "se puso", "se volvió"],
        correct: "llegó a ser",
        explanation: "'Llegar a ser' emphasizes achievement of high status. Reaching excellence through journey."
      },
      {
        id: "become_10",
        question: "Después de vivir en España, _____ completamente bilingüe.",
        translation: "(After living in Spain, he became completely bilingual)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse' for acquired skills or abilities. Voluntary development of capability."
      },
      {
        id: "become_11",
        question: "Cuando oyó los gritos, _____ muy nervioso y preocupado.",
        translation: "(When he heard the screams, he became very nervous and worried)",
        options: ["se puso", "se hizo", "se volvió", "llegó a ser"],
        correct: "se puso",
        explanation: "'Ponerse' for immediate emotional state changes. Sudden reaction to alarming stimulus."
      },
      {
        id: "become_12",
        question: "Con los años de vivir solo, _____ una persona muy independiente.",
        translation: "(With years of living alone, she became a very independent person)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' for gradual personality evolution. Long-term character development."
      },
      {
        id: "become_13",
        question: "Cuando _____ rico, no olvidó sus humildes orígenes.",
        translation: "(When he became rich, he didn't forget his humble origins)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse rico' for acquiring wealth. Effort-based financial change."
      },
      {
        id: "become_14",
        question: "Al enterarse de la tragedia, todos _____ muy serios y silenciosos.",
        translation: "(Upon learning of the tragedy, everyone became very serious and silent)",
        options: ["se pusieron", "se hicieron", "se volvieron", "llegaron a ser"],
        correct: "se pusieron",
        explanation: "'Ponerse' for sudden group mood change. Immediate collective emotional shift."
      },
      {
        id: "become_15",
        question: "Gracias a su perseverancia increíble, _____ campeón mundial.",
        translation: "(Thanks to his incredible perseverance, he became world champion)",
        options: ["llegó a ser", "se hizo", "se puso", "se volvió"],
        correct: "llegó a ser",
        explanation: "'Llegar a ser' for achieving prestigious titles. Reaching pinnacle of success."
      }
    ]
  },

  impersonal_se_advanced: {
    name: "Advanced Impersonal 'Se'",
    description: "Complex impersonal and passive se constructions",
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "imp_se_1",
        question: "_____ prohibido estrictamente fumar en todos los edificios públicos.",
        translation: "(Smoking is strictly prohibited in all public buildings)",
        options: ["Se", "Está", "Es", "Hay"],
        correct: "Se",
        explanation: "'Se prohibe' or 'Se prohíbe' for impersonal prohibition. Passive se is more natural than 'estar prohibido'."
      },
      {
        id: "imp_se_2",
        question: "_____ dice que va a llover mucho durante todo el fin de semana.",
        translation: "(They say it's going to rain a lot throughout the entire weekend)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se dice que' means 'it is said/they say'. Impersonal reporting without specific source."
      },
      {
        id: "imp_se_3",
        question: "_____ necesitan más voluntarios para ayudar con el evento benéfico.",
        translation: "(More volunteers are needed to help with the charity event)",
        options: ["Se", "Son", "Están", "Hay"],
        correct: "Se",
        explanation: "'Se necesitan' plural because 'voluntarios' is plural. Impersonal passive agrees with logical subject."
      },
      {
        id: "imp_se_4",
        question: "_____ vive muy bien en esta ciudad si tienes un buen salario.",
        translation: "(One lives very well in this city if you have a good salary)",
        options: ["Se", "Uno", "Es", "Está"],
        correct: "Se",
        explanation: "'Se vive' for general lifestyle statements. More natural than 'uno vive' in modern Spanish."
      },
      {
        id: "imp_se_5",
        question: "En mi país _____ cena muy tarde, normalmente después de las nueve.",
        translation: "(In my country people eat dinner very late, usually after nine)",
        options: ["se", "es", "está", "hay"],
        correct: "se",
        explanation: "'Se cena' for cultural dining customs. Impersonal statement about general practices."
      },
      {
        id: "imp_se_6",
        question: "_____ busca empleado con experiencia en ventas y marketing digital.",
        translation: "(Employee with sales and digital marketing experience sought)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se busca' singular for singular employee wanted. Job posting impersonal passive."
      },
      {
        id: "imp_se_7",
        question: "_____ puede aprender mucho observando a los expertos trabajar.",
        translation: "(One can learn a lot by observing experts work)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se puede' for general possibility. Impersonal statement about universal capability."
      },
      {
        id: "imp_se_8",
        question: "_____ dice que la paciencia es una virtud muy importante.",
        translation: "(It is said that patience is a very important virtue)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se dice que' introduces general wisdom or saying. Common way to cite collective knowledge."
      },
      {
        id: "imp_se_9",
        question: "_____ vendieron todas las entradas para el concierto en pocas horas.",
        translation: "(All the tickets for the concert were sold in a few hours)",
        options: ["Se", "Fueron", "Estuvieron", "Hubieron"],
        correct: "Se",
        explanation: "'Se vendieron' plural passive for plural tickets. Impersonal passive is preferred over ser passive."
      },
      {
        id: "imp_se_10",
        question: "_____ sabe que el ejercicio regular es esencial para la salud.",
        translation: "(It is known that regular exercise is essential for health)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se sabe que' for common knowledge. Stating universally accepted facts."
      },
      {
        id: "imp_se_11",
        question: "_____ hablan varios idiomas diferentes en esa región multicultural.",
        translation: "(Several different languages are spoken in that multicultural region)",
        options: ["Se", "Son", "Están", "Hay"],
        correct: "Se",
        explanation: "'Se hablan' plural for plural languages. Impersonal passive describing linguistic diversity."
      },
      {
        id: "imp_se_12",
        question: "_____ come muy bien en ese restaurante italiano del centro.",
        translation: "(One eats very well in that Italian restaurant downtown)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se come bien' for restaurant quality statement. General evaluation of dining experience."
      },
      {
        id: "imp_se_13",
        question: "_____ trabajó muy duro para completar el proyecto antes del plazo.",
        translation: "(People worked very hard to complete the project before the deadline)",
        options: ["Se", "Fue", "Estuvo", "Hubo"],
        correct: "Se",
        explanation: "'Se trabajó' impersonal for collective work. Emphasizes work done without specifying who."
      },
      {
        id: "imp_se_14",
        question: "_____ ruega a los pasajeros que no dejen sus pertenencias desatendidas.",
        translation: "(Passengers are asked not to leave their belongings unattended)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se ruega que' for formal public requests. Official announcements use impersonal se."
      },
      {
        id: "imp_se_15",
        question: "_____ necesita mucha dedicación para dominar un idioma extranjero.",
        translation: "(A lot of dedication is needed to master a foreign language)",
        options: ["Se", "Es", "Está", "Hay"],
        correct: "Se",
        explanation: "'Se necesita' singular for uncountable 'dedicación'. Impersonal statement about requirements."
      }
    ]
  }
};

export default part13Categories;