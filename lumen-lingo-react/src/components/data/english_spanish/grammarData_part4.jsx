
/**
 * ENGLISH → SPANISH GRAMMAR - PART 4
 * 5 grammar categories, 15 questions each
 *
 * STRUCTURE RULES:
 * - question: Spanish sentence with blanks (TARGET language)
 * - translation: English hint (SOURCE language)
 * - correct: STRING matching option
 * - explanation: Maximum 2 sentences
 */

import { GitBranch, Radio, MessageSquare, Megaphone, Scale } from "lucide-react";

export const part4Categories = {
  conditional_sentences: {
    name: "Conditional Sentences",
    description: "Master si clauses and conditional structures",
    icon: GitBranch,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "cond_1",
        question: "Si _____ tiempo, te _____.",
        translation: "(If I have time, I will call you)",
        options: ["tengo / llamaré", "tendré / llamo", "tuve / llamaré", "tenía / llamo"],
        correct: "tengo / llamaré",
        explanation: "Real future conditions use present tense after 'si' + future tense in result clause. Never use future after 'si' for real conditions."
      },
      {
        id: "cond_2",
        question: "Si _____ rico, _____ por el mundo.",
        translation: "(If I were rich, I would travel the world)",
        options: ["fuera / viajaría", "soy / viajaré", "era / viajaba", "fui / viajaré"],
        correct: "fuera / viajaría",
        explanation: "Hypothetical conditions use imperfect subjunctive + conditional. This expresses imaginary situations contrary to current reality."
      },
      {
        id: "cond_3",
        question: "Si _____ mañana, nos _____ en casa.",
        translation: "(If it rains tomorrow, we will stay home)",
        options: ["llueve / quedaremos", "lloviera / quedamos", "llueva / quedaremos", "lloverá / quedamos"],
        correct: "llueve / quedaremos",
        explanation: "Even with future time words, likely conditions use present indicative after 'si'. Spanish treats real future possibilities as extensions of present reality."
      },
      {
        id: "cond_4",
        question: "Si hubieras estudiado, _____ aprobado.",
        translation: "(If you had studied, you would have passed)",
        options: ["habrías", "aprobarías", "hubieras", "habías"],
        correct: "habrías",
        explanation: "Past contrary-to-fact uses pluperfect subjunctive + conditional perfect. This expresses regret about missed past opportunities."
      },
      {
        id: "cond_5",
        question: "_____ si _____.",
        translation: "(I would go if I could)",
        options: ["Iría / pudiera", "Voy / puedo", "Iré / pueda", "Fui / podía"],
        correct: "Iría / pudiera",
        explanation: "Conditional + imperfect subjunctive for hypothetical present situations. Word order is flexible in Spanish."
      },
      {
        id: "cond_6",
        question: "Si ella _____, dile que estoy ocupado.",
        translation: "(If she calls, tell her I'm busy)",
        options: ["llama", "llamara", "llame", "llamará"],
        correct: "llama",
        explanation: "Real conditions with imperative result use present indicative after 'si'. Commands in result clauses are common for conditional instructions."
      },
      {
        id: "cond_7",
        question: "Si hubiera sabido, no _____ venido.",
        translation: "(If I had known, I wouldn't have come)",
        options: ["habría", "vendría", "hubiera", "había"],
        correct: "habría",
        explanation: "Pluperfect subjunctive + conditional perfect expresses past regrets. Both parts remain in perfect forms for completed past actions."
      },
      {
        id: "cond_8",
        question: "Si la _____, salúdala de mi parte.",
        translation: "(If you see her, say hello for me)",
        options: ["ves", "vieras", "veas", "verás"],
        correct: "ves",
        explanation: "Present indicative after 'si' for real future possibilities. Never use future tense after 'si' in real conditions."
      },
      {
        id: "cond_9",
        question: "_____ una casa si _____ dinero.",
        translation: "(I would buy a house if I had money)",
        options: ["Compraría / tuviera", "Compro / tengo", "Compraré / tenga", "Compré / tuve"],
        correct: "Compraría / tuviera",
        explanation: "Conditional + imperfect subjunctive for hypothetical present. This clearly distinguishes imaginary from real future possibilities."
      },
      {
        id: "cond_10",
        question: "Si _____ ahora, _____ a tiempo.",
        translation: "(If we leave now, we will arrive on time)",
        options: ["salimos / llegaremos", "saliéramos / llegamos", "salimos / llegábamos", "saldremos / llegaremos"],
        correct: "salimos / llegaremos",
        explanation: "Present + future for real immediate future conditions. The 'ahora' doesn't change the rule of using present after 'si'."
      },
      {
        id: "cond_11",
        question: "Si yo _____ tú, _____ la oferta.",
        translation: "(If I were you, I would accept the offer)",
        options: ["fuera / aceptaría", "soy / aceptaré", "era / aceptaba", "seré / aceptaré"],
        correct: "fuera / aceptaría",
        explanation: "Classic advice structure using imperfect subjunctive + conditional. This is impossible (you can't be someone else) so it requires subjunctive."
      },
      {
        id: "cond_12",
        question: "Si hubieran llegado antes, lo _____ visto.",
        translation: "(If they had arrived earlier, they would have seen him)",
        options: ["habrían", "verían", "hubieran", "habían"],
        correct: "habrían",
        explanation: "Pluperfect subjunctive + conditional perfect for past contrary-to-fact. This expresses missed opportunities in the past."
      },
      {
        id: "cond_13",
        question: "Si _____ a diario, _____.",
        translation: "(If you practice daily, you will improve)",
        options: ["practicas / mejorarás", "practicaras / mejorarías", "practiques / mejorarás", "practicabas / mejorarás"],
        correct: "practicas / mejorarás",
        explanation: "Present + future for likely, realistic conditions. This expresses confident cause and effect."
      },
      {
        id: "cond_14",
        question: "Ella _____ ayudado si hubiera sabido.",
        translation: "(She would have helped if she had known)",
        options: ["habría", "ayudaría", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect + pluperfect subjunctive for past hypotheticals. Spanish allows flexible word order for si clauses."
      },
      {
        id: "cond_15",
        question: "Si _____ frío, _____ una chaqueta.",
        translation: "(If it's cold, I'll wear a jacket)",
        options: ["hace / llevaré", "hiciera / llevaría", "haga / llevaré", "hacía / llevaba"],
        correct: "hace / llevaré",
        explanation: "Present + future for real weather conditions. Spanish uses 'hacer' for weather expressions, not 'ser' or 'estar'."
      }
    ]
  },

  passive_voice: {
    name: "Passive Voice",
    description: "Learn passive constructions with ser and se",
    icon: Radio,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "pass_1",
        question: "La casa _____ construida en 1990.",
        translation: "(The house was built in 1990)",
        options: ["fue", "es", "está", "era"],
        correct: "fue",
        explanation: "Passive voice uses 'ser' + past participle agreeing in gender/number. Use preterite 'fue' for completed past actions with specific time."
      },
      {
        id: "pass_2",
        question: "_____ habla español aquí.",
        translation: "(Spanish is spoken here)",
        options: ["Se", "Es", "Está", "Español es"],
        correct: "Se",
        explanation: "Reflexive passive 'se' + verb is more natural than 'ser' passive for general statements. This construction is the preferred Spanish way."
      },
      {
        id: "pass_3",
        question: "Los libros _____ escritos por García Márquez.",
        translation: "(The books were written by García Márquez)",
        options: ["fueron", "son", "estaban", "escribieron"],
        correct: "fueron",
        explanation: "When mentioning the agent (by whom), use 'ser' passive not reflexive 'se'. The 'por' phrase requires this structure."
      },
      {
        id: "pass_4",
        question: "La puerta _____ abre a las 9.",
        translation: "(The door is opened at 9 AM)",
        options: ["se", "es", "está", "la"],
        correct: "se",
        explanation: "Habitual actions prefer reflexive passive over 'ser' construction. This describes regular daily routines."
      },
      {
        id: "pass_5",
        question: "La carta _____ enviada mañana.",
        translation: "(The letter will be sent tomorrow)",
        options: ["será", "es", "fue", "envía"],
        correct: "será",
        explanation: "Future passive uses future of 'ser' + past participle. Alternative 'se enviará' is also correct and perhaps more natural."
      },
      {
        id: "pass_6",
        question: "Esas casas _____ vendidas el año pasado.",
        translation: "(Those houses were sold last year)",
        options: ["fueron", "son", "vendieron", "se venden"],
        correct: "fueron",
        explanation: "Preterite 'ser' + past participle for completed past actions. Specific time markers like 'el año pasado' make preterite the natural choice."
      },
      {
        id: "pass_7",
        question: "_____ produce vino en esta región.",
        translation: "(Wine is produced in this region)",
        options: ["Se", "Es", "Está", "Vino es"],
        correct: "Se",
        explanation: "General facts strongly prefer reflexive passive. This is the natural Spanish way for stating general truths."
      },
      {
        id: "pass_8",
        question: "El coche _____ sido reparado.",
        translation: "(The car has been repaired)",
        options: ["ha", "es", "fue", "se repara"],
        correct: "ha",
        explanation: "Present perfect passive needs present perfect of 'ser' + past participle. Formula: haber + sido + past participle."
      },
      {
        id: "pass_9",
        question: "_____ hablan muchos idiomas en Nueva York.",
        translation: "(Many languages are spoken in New York)",
        options: ["Se", "Son", "Están", "Idiomas son"],
        correct: "Se",
        explanation: "Reflexive passive with plural verb for plural object. Use 'se hablan' (plural) because 'idiomas' is plural."
      },
      {
        id: "pass_10",
        question: "Las ventanas _____ rotas durante la tormenta.",
        translation: "(The windows were broken during the storm)",
        options: ["fueron", "son", "rompieron", "se rompen"],
        correct: "fueron",
        explanation: "Preterite passive emphasizes the specific past event. Alternative 'se rompieron' works but sounds less formal."
      },
      {
        id: "pass_11",
        question: "_____ enseña inglés en todas las escuelas.",
        translation: "(English is taught in all schools)",
        options: ["Se", "Es", "Está", "Inglés es"],
        correct: "Se",
        explanation: "Habitual general actions strongly prefer reflexive passive. This is fundamental Spanish idiom for repeated facts."
      },
      {
        id: "pass_12",
        question: "La película _____ dirigida por Almodóvar.",
        translation: "(The movie was directed by Almodóvar)",
        options: ["fue", "es", "está", "dirigió"],
        correct: "fue",
        explanation: "Use 'ser' passive when crediting the agent with 'por' phrase. You can't use reflexive 'se' when mentioning who did it."
      },
      {
        id: "pass_13",
        question: "Estas camisas _____ hacen en España.",
        translation: "(These shirts are made in Spain)",
        options: ["se", "son", "están", "las"],
        correct: "se",
        explanation: "Manufacturing and origin descriptions use reflexive passive. This is standard for describing where products are made."
      },
      {
        id: "pass_14",
        question: "El problema _____ resuelto pronto.",
        translation: "(The problem will be solved soon)",
        options: ["será", "es", "fue", "se resuelve"],
        correct: "será",
        explanation: "Future 'ser' + past participle for future passive. Alternative 'se resolverá' sounds more casual."
      },
      {
        id: "pass_15",
        question: "_____ cultiva café en Colombia.",
        translation: "(Coffee is grown in Colombia)",
        options: ["Se", "Es", "Está", "Café es"],
        correct: "Se",
        explanation: "Products and origins use reflexive passive. This construction dominates agricultural and production contexts."
      }
    ]
  },

  subjunctive_noun_clauses: {
    name: "Subjunctive in Noun Clauses",
    description: "Master when to use subjunctive after main verbs",
    icon: MessageSquare,
    color: "from-rose-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "subj_1",
        question: "Quiero que _____ conmigo.",
        translation: "(I want you to come with me)",
        options: ["vengas", "vienes", "viniste", "vendrás"],
        correct: "vengas",
        explanation: "Verbs of wanting trigger subjunctive when subject changes. 'Querer que' always requires subjunctive in the dependent clause."
      },
      {
        id: "subj_2",
        question: "Es importante que _____.",
        translation: "(It's important that they understand)",
        options: ["entiendan", "entienden", "entendieron", "entenderán"],
        correct: "entiendan",
        explanation: "Impersonal expressions of importance require subjunctive. These express opinions about what should happen, not facts."
      },
      {
        id: "subj_3",
        question: "Dudo que _____ la respuesta.",
        translation: "(I doubt that he knows the answer)",
        options: ["sepa", "sabe", "supo", "sabrá"],
        correct: "sepa",
        explanation: "Doubt expressions trigger subjunctive mood. When you doubt something, you're treating it as uncertain or unreal."
      },
      {
        id: "subj_4",
        question: "Ella espera que _____ temprano.",
        translation: "(She hopes that we arrive early)",
        options: ["lleguemos", "llegamos", "llegábamos", "llegaremos"],
        correct: "lleguemos",
        explanation: "Hope about others' actions triggers subjunctive. Hoping expresses desired future, not guaranteed reality."
      },
      {
        id: "subj_5",
        question: "Es necesario que _____ más.",
        translation: "(It's necessary that you study more)",
        options: ["estudies", "estudias", "estudiaste", "estudiarás"],
        correct: "estudies",
        explanation: "Necessity and obligation trigger subjunctive. This expresses what should happen, not what is happening."
      },
      {
        id: "subj_6",
        question: "Recomiendo que _____ a un médico.",
        translation: "(I recommend that she see a doctor)",
        options: ["vea", "ve", "vio", "verá"],
        correct: "vea",
        explanation: "Recommendation verbs require subjunctive. These express advice about uncertain future actions."
      },
      {
        id: "subj_7",
        question: "Temo que _____.",
        translation: "(I'm afraid that it will rain)",
        options: ["llueva", "llueve", "llovió", "lloverá"],
        correct: "llueva",
        explanation: "Emotions about uncertain events trigger subjunctive. Fear deals with events that might happen, not certainties."
      },
      {
        id: "subj_8",
        question: "Es bueno que _____ aquí.",
        translation: "(It's good that you're here)",
        options: ["estés", "estás", "estuviste", "estarás"],
        correct: "estés",
        explanation: "Value judgments require subjunctive even when fact is true. Spanish distinguishes objective truth from subjective evaluation."
      },
      {
        id: "subj_9",
        question: "Prefiero que no _____.",
        translation: "(I prefer that they not come)",
        options: ["vengan", "vienen", "vinieron", "vendrán"],
        correct: "vengan",
        explanation: "Preference verbs trigger subjunctive. Preferences express desires about uncertain events, not current reality."
      },
      {
        id: "subj_10",
        question: "Es posible que _____ razón.",
        translation: "(It's possible that he's right)",
        options: ["tenga", "tiene", "tuvo", "tendrá"],
        correct: "tenga",
        explanation: "Possibility expressions trigger subjunctive. Degree of certainty determines mood: possible = subjunctive, certain = indicative."
      },
      {
        id: "subj_11",
        question: "Me alegro de que _____.",
        translation: "(I'm happy that you're coming)",
        options: ["vengas", "vienes", "viniste", "vendrás"],
        correct: "vengas",
        explanation: "Emotion verbs about future/uncertain events trigger subjunctive. Spanish uses subjunctive for emotions about non-facts."
      },
      {
        id: "subj_12",
        question: "Es extraño que no _____.",
        translation: "(It's strange that she doesn't answer)",
        options: ["conteste", "contesta", "contestó", "contestará"],
        correct: "conteste",
        explanation: "Strangeness and surprise expressions trigger subjunctive. Subjective reactions to situations need subjunctive mood."
      },
      {
        id: "subj_13",
        question: "Piden que _____ callados.",
        translation: "(They ask that we be quiet)",
        options: ["estemos", "estamos", "estuvimos", "estaremos"],
        correct: "estemos",
        explanation: "Request verbs trigger subjunctive. Commands embedded in 'que' clauses always use subjunctive mood."
      },
      {
        id: "subj_14",
        question: "No creo que _____ en casa.",
        translation: "(I don't think she's at home)",
        options: ["esté", "está", "estuvo", "estará"],
        correct: "esté",
        explanation: "Negative opinion verbs trigger subjunctive. 'Creo que está' uses indicative, but 'no creo que esté' uses subjunctive."
      },
      {
        id: "subj_15",
        question: "Es imposible que _____ hoy.",
        translation: "(It's impossible that they finish today)",
        options: ["terminen", "terminan", "terminaron", "terminarán"],
        correct: "terminen",
        explanation: "Impossibility expressions trigger subjunctive. Impossible events aren't real, perfect for subjunctive mood."
      }
    ]
  },

  commands_imperatives: {
    name: "Commands and Imperatives",
    description: "Learn to give orders and instructions",
    icon: Megaphone,
    color: "from-amber-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "imp_1",
        question: "¡_____ despacio!",
        translation: "(Speak slowly! - informal singular)",
        options: ["Habla", "Hable", "Hablas", "Hablar"],
        correct: "Habla",
        explanation: "Affirmative tú commands use third person singular present. Take 'él habla' form for informal commands."
      },
      {
        id: "imp_2",
        question: "¡No _____ eso!",
        translation: "(Don't eat that! - informal singular)",
        options: ["comas", "comes", "come", "comer"],
        correct: "comas",
        explanation: "Negative tú commands use present subjunctive. All negative commands across all forms use subjunctive."
      },
      {
        id: "imp_3",
        question: "¡_____ aquí!",
        translation: "(Come here! - formal singular)",
        options: ["Venga", "Viene", "Ven", "Venir"],
        correct: "Venga",
        explanation: "Usted commands always use present subjunctive for both affirmative and negative. This is simpler than tú commands."
      },
      {
        id: "imp_4",
        question: "¡_____ cuidado!",
        translation: "(Be careful! - informal singular)",
        options: ["Ten", "Tiene", "Tenga", "Tener"],
        correct: "Ten",
        explanation: "'Tener' has irregular tú command 'ten'. Memorize eight irregular affirmative tú commands for common verbs."
      },
      {
        id: "imp_5",
        question: "¡No _____!",
        translation: "(Don't go! - informal singular)",
        options: ["vayas", "vas", "ve", "ir"],
        correct: "vayas",
        explanation: "Negative commands use subjunctive even for irregular verbs. Irregularity only affects affirmative tú commands."
      },
      {
        id: "imp_6",
        question: "¡_____ la verdad!",
        translation: "(Tell me the truth! - informal singular)",
        options: ["Dime", "Dice", "Diga", "Decir"],
        correct: "Dime",
        explanation: "Irregular 'di' + attached pronoun 'me' = 'Dime'. Pronouns always attach to affirmative commands."
      },
      {
        id: "imp_7",
        question: "¡_____ a la playa!",
        translation: "(Let's go to the beach!)",
        options: ["Vamos", "Vayamos", "Ir", "Van"],
        correct: "Vamos",
        explanation: "For 'let's go' specifically, use 'vamos' not subjunctive 'vayamos'. This is an exception to the normal pattern."
      },
      {
        id: "imp_8",
        question: "¡_____ ahora!",
        translation: "(Do it now! - formal singular)",
        options: ["Hágalo", "Hácelo", "Hace", "Hacer"],
        correct: "Hágalo",
        explanation: "Usted command 'haga' + attached pronoun 'lo' = 'Hágalo'. Accent maintains stress when pronoun attaches."
      },
      {
        id: "imp_9",
        question: "¡No _____ miedo!",
        translation: "(Don't be afraid! - informal singular)",
        options: ["tengas", "tienes", "tenga", "tener"],
        correct: "tengas",
        explanation: "Negative tú command uses regular subjunctive 'tengas'. Even irregular verbs follow negative = subjunctive rule."
      },
      {
        id: "imp_10",
        question: "¡_____ aquí!",
        translation: "(Put it here! - informal singular)",
        options: ["Ponlo", "Póngalo", "Pones", "Poner"],
        correct: "Ponlo",
        explanation: "Irregular command 'pon' + attached 'lo' = 'Ponlo'. No accent needed for monosyllables."
      },
      {
        id: "imp_11",
        question: "¡No _____ eso!",
        translation: "(Don't do that! - formal singular)",
        options: ["haga", "hace", "haz", "hacer"],
        correct: "haga",
        explanation: "Negative usted command uses subjunctive. Formal commands are consistent: both affirmative and negative use subjunctive."
      },
      {
        id: "imp_12",
        question: "¡_____!",
        translation: "(Write to me! - informal plural Spain)",
        options: ["Escribidme", "Escríbanme", "Escriben", "Escribir"],
        correct: "Escribidme",
        explanation: "Vosotros affirmative: infinitive minus -r plus -d. This form is mainly used in Spain."
      },
      {
        id: "imp_13",
        question: "¡_____!",
        translation: "(Listen! - formal plural)",
        options: ["Escuchen", "Escuchan", "Escuchad", "Escuchar"],
        correct: "Escuchen",
        explanation: "Ustedes command uses subjunctive third person plural. This works for all regions and formal plural contexts."
      },
      {
        id: "imp_14",
        question: "¡No _____!",
        translation: "(Don't forget! - informal singular)",
        options: ["olvides", "olvidas", "olvide", "olvidar"],
        correct: "olvides",
        explanation: "Negative tú command uses present subjunctive. This is the consistent pattern for all negative commands."
      },
      {
        id: "imp_15",
        question: "¡_____!",
        translation: "(Get out! - informal singular)",
        options: ["Sal", "Sale", "Salga", "Salir"],
        correct: "Sal",
        explanation: "'Salir' has irregular tú command 'sal'. This is one of eight essential irregular commands to memorize."
      }
    ]
  },

  comparatives_superlatives: {
    name: "Comparatives & Superlatives",
    description: "Compare things and express most/least",
    icon: Scale,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    questions: [
      {
        id: "comp_1",
        question: "Ella es _____ alta _____ yo.",
        translation: "(She is taller than me)",
        options: ["más / que", "más / de", "tan / que", "la más / que"],
        correct: "más / que",
        explanation: "Superiority comparisons use 'más...que' structure. This works for all regular comparisons in Spanish."
      },
      {
        id: "comp_2",
        question: "Este libro es _____ que ese.",
        translation: "(This book is better than that one)",
        options: ["mejor", "más bueno", "más mejor", "el mejor"],
        correct: "mejor",
        explanation: "'Bueno' has irregular comparative 'mejor'. Never say 'más bueno' for better."
      },
      {
        id: "comp_3",
        question: "Soy _____ alto _____ mi hermano.",
        translation: "(I am as tall as my brother)",
        options: ["tan / como", "más / que", "tan / que", "el más / como"],
        correct: "tan / como",
        explanation: "Equal comparisons use 'tan...como' structure. This is different from English using 'as' twice."
      },
      {
        id: "comp_4",
        question: "Él es _____ alto _____ la clase.",
        translation: "(He is the tallest in the class)",
        options: ["el más / de", "más / de", "el más / en", "tan / de"],
        correct: "el más / de",
        explanation: "Superlatives use 'el más' + adjective + 'de'. Always use 'de', never 'en' for location."
      },
      {
        id: "comp_5",
        question: "Ella corre _____ rápido _____ él.",
        translation: "(She runs faster than him)",
        options: ["más / que", "tan / que", "la más / que", "más / de"],
        correct: "más / que",
        explanation: "Comparatives work the same with adverbs as adjectives. Spanish uses 'más' consistently without adding -er."
      },
      {
        id: "comp_6",
        question: "Esta es _____ película que he visto.",
        translation: "(This is the worst movie I've seen)",
        options: ["la peor", "la más mala", "más peor", "tan mala"],
        correct: "la peor",
        explanation: "'Malo' has irregular comparative/superlative 'peor'. Like 'mejor', never use 'más malo'."
      },
      {
        id: "comp_7",
        question: "Tengo _____ dinero _____ tú.",
        translation: "(I have less money than you)",
        options: ["menos / que", "más poco / que", "tan / que", "el menos / que"],
        correct: "menos / que",
        explanation: "Inferiority comparisons use 'menos...que'. This is the mirror structure of 'más...que'."
      },
      {
        id: "comp_8",
        question: "Esta casa es _____ vieja _____ la mía.",
        translation: "(This house is older than mine)",
        options: ["más / que", "tan / que", "la más / que", "más / de"],
        correct: "más / que",
        explanation: "Standard 'más...que' for age comparisons. Possessive 'mía' requires article: 'la mía'."
      },
      {
        id: "comp_9",
        question: "Ella es _____ de la familia.",
        translation: "(She is the youngest of the family)",
        options: ["la menor", "la más joven", "más menor", "tan joven"],
        correct: "la menor",
        explanation: "'Menor' is standard for youngest in families. It's more traditional than 'más joven'."
      },
      {
        id: "comp_10",
        question: "Tengo _____ libros _____ tú.",
        translation: "(I have as many books as you)",
        options: ["tantos / como", "tan / como", "más / que", "los tantos / como"],
        correct: "tantos / como",
        explanation: "Equal quantities use 'tanto/a/os/as...como' agreeing with noun. Use 'tantos' for masculine plural 'libros'."
      },
      {
        id: "comp_11",
        question: "Él es _____ jugador del equipo.",
        translation: "(He is the best player on the team)",
        options: ["el mejor", "el más bueno", "más mejor", "tan bueno"],
        correct: "el mejor",
        explanation: "Superlative of 'bueno' is 'el mejor'. Article + irregular comparative creates superlative."
      },
      {
        id: "comp_12",
        question: "Este ejercicio es _____ fácil _____ el anterior.",
        translation: "(This exercise is easier than the previous one)",
        options: ["más / que", "tan / que", "el más / que", "más / del"],
        correct: "más / que",
        explanation: "Standard superiority comparison with 'más...que'. Spanish uses this consistently across all adjectives."
      },
      {
        id: "comp_13",
        question: "Ella trabaja _____ duro _____ su colega.",
        translation: "(She works as hard as her colleague)",
        options: ["tan / como", "más / que", "tan / que", "la más / como"],
        correct: "tan / como",
        explanation: "Equal intensity with adverbs uses 'tan...como'. This parallels adjective equal comparisons."
      },
      {
        id: "comp_14",
        question: "Este es el restaurante _____ caro _____ la ciudad.",
        translation: "(This is the most expensive restaurant in the city)",
        options: ["más / de", "más / en", "tan / de", "tan / en"],
        correct: "más / de",
        explanation: "Superlatives always use 'de' for location or group. English 'in' translates to Spanish 'de'."
      },
      {
        id: "comp_15",
        question: "Soy _____ que mi hermana.",
        translation: "(I am older than my sister)",
        options: ["mayor", "más viejo", "el mayor", "tan mayor"],
        correct: "mayor",
        explanation: "'Mayor' is standard for older in age comparisons. It's more natural than 'más viejo' for people."
      }
    ]
  },

  object_pronouns: {
    name: "Object Pronouns",
    description: "Master direct and indirect object pronouns",
    icon: null,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "obj_1",
        question: "_____ veo todos los días.",
        translation: "(I see her every day)",
        options: ["La", "Le", "Lo", "Les"],
        correct: "La",
        explanation: "Direct object pronoun for feminine singular is 'la'. Gender matters for direct objects."
      },
      {
        id: "obj_2",
        question: "Ella _____ da el libro.",
        translation: "(She gives him the book)",
        options: ["le", "lo", "la", "les"],
        correct: "le",
        explanation: "Indirect object pronoun 'le' means 'to him/her'. Context clarifies gender."
      },
      {
        id: "obj_3",
        question: "_____ voy a llamar mañana.",
        translation: "(I'm going to call you tomorrow - informal)",
        options: ["Te", "Lo", "Le", "La"],
        correct: "Te",
        explanation: "Direct object pronoun for informal 'you' is 'te'. It serves both direct and indirect object."
      },
      {
        id: "obj_4",
        question: "Ella _____ _____ dio.",
        translation: "(She gave it to me - the book masculine)",
        options: ["me lo", "lo me", "me la", "le lo"],
        correct: "me lo",
        explanation: "Indirect before direct always. 'Me' (to me) + 'lo' (it masculine) = 'me lo'."
      },
      {
        id: "obj_5",
        question: "_____ vemos cada semana.",
        translation: "(We see them every week - masculine)",
        options: ["Los", "Les", "Las", "Le"],
        correct: "Los",
        explanation: "Direct object pronoun for masculine plural is 'los'. Use for all-male or mixed groups."
      },
      {
        id: "obj_6",
        question: "_____ _____ está explicando.",
        translation: "(He's explaining it to us - the lesson feminine)",
        options: ["Nos la", "Nos lo", "La nos", "Le la"],
        correct: "Nos la",
        explanation: "Indirect 'nos' before direct 'la'. Lesson is feminine, so use 'la'."
      },
      {
        id: "obj_7",
        question: "¡No _____ _____ digas!",
        translation: "(Don't tell it to them! - the secret masculine)",
        options: ["se lo", "les lo", "lo les", "le lo"],
        correct: "se lo",
        explanation: "'Les' changes to 'se' before 'lo/la/los/las'. This prevents awkward 'le lo' combinations."
      },
      {
        id: "obj_8",
        question: "Quiero _____.",
        translation: "(I want to buy them - the shoes masculine)",
        options: ["comprarlos", "comprarlas", "comprarles", "los comprar"],
        correct: "comprarlos",
        explanation: "Pronouns attach to infinitives. 'Los' for masculine plural shoes."
      },
      {
        id: "obj_9",
        question: "Ella _____ manda cartas.",
        translation: "(She sends us letters)",
        options: ["nos", "les", "los", "le"],
        correct: "nos",
        explanation: "Indirect object pronoun for 'us' is 'nos'. It shows who receives the action."
      },
      {
        id: "obj_10",
        question: "Voy a _____.",
        translation: "(I'm going to give it to her - the gift masculine)",
        options: ["dárselo", "darle lo", "dar se lo", "darla lo"],
        correct: "dárselo",
        explanation: "Both pronouns attach to infinitive as one word: 'se' (to her) + 'lo' (it) = 'dárselo'. Accent maintains stress."
      },
      {
        id: "obj_11",
        question: "_____ _____ están trayendo.",
        translation: "(They're bringing it to me - the food feminine)",
        options: ["Me la", "Me lo", "La me", "Le la"],
        correct: "Me la",
        explanation: "Indirect 'me' before direct 'la'. Food is feminine, so use 'la'."
      },
      {
        id: "obj_12",
        question: "¡_____!",
        translation: "(Tell me! - formal)",
        options: ["Dígame", "Dime", "Dice me", "Me diga"],
        correct: "Dígame",
        explanation: "Pronouns attach to affirmative commands. Usted command 'diga' + 'me' = 'Dígame'."
      },
      {
        id: "obj_13",
        question: "_____ _____ está mostrando.",
        translation: "(She's showing them to us - the photos feminine)",
        options: ["Nos las", "Nos los", "Las nos", "Les las"],
        correct: "Nos las",
        explanation: "Indirect 'nos' before direct 'las'. Photos are feminine plural."
      },
      {
        id: "obj_14",
        question: "_____ escribo cada mes.",
        translation: "(I write to them every month)",
        options: ["Les", "Los", "Las", "Le"],
        correct: "Les",
        explanation: "Indirect object pronoun 'les' means 'to them'. Gender doesn't matter for indirect objects."
      },
      {
        id: "obj_15",
        question: "¡No _____ _____ des!",
        translation: "(Don't give it to him! - the money masculine)",
        options: ["se lo", "le lo", "lo le", "les lo"],
        correct: "se lo",
        explanation: "'Le' becomes 'se' before 'lo'. Pronouns go before negative commands."
      }
    ]
  }
};

export default part4Categories;
