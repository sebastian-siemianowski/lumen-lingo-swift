
/**
 * ENGLISH → SPANISH GRAMMAR - PART 5
 * 5 advanced grammar categories, 15 questions each
 */

import { UserCircle, ArrowRightLeft, RefreshCw, Clock, Layers } from "lucide-react";

export const part5Categories = {
  object_pronouns: {
    name: "Object Pronouns",
    description: "Master direct and indirect object pronouns",
    icon: UserCircle,
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
  },

  por_vs_para: {
    name: "Por vs Para",
    description: "Learn when to use por and para correctly",
    icon: ArrowRightLeft,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "pp_1",
        question: "Este regalo es _____ ti.",
        translation: "(This gift is for you)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' indicates recipient or destination. Use para for intended recipients of gifts."
      },
      {
        id: "pp_2",
        question: "Caminamos _____ el parque.",
        translation: "(We walked through the park)",
        options: ["por", "para", "hacia", "en"],
        correct: "por",
        explanation: "'Por' indicates movement through or along a place. It describes the path of movement."
      },
      {
        id: "pp_3",
        question: "Estudio _____ ser médico.",
        translation: "(I'm studying to be a doctor)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' expresses purpose or goal. Use para with infinitive to show purpose."
      },
      {
        id: "pp_4",
        question: "Gracias _____ todo.",
        translation: "(Thanks for everything)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Por' expresses cause or reason. 'Gracias por' is always used, never 'gracias para'."
      },
      {
        id: "pp_5",
        question: "Trabajo _____ una empresa grande.",
        translation: "(I work for a large company)",
        options: ["para", "por", "en", "de"],
        correct: "para",
        explanation: "'Para' indicates employment relationship. Use para when stating your employer."
      },
      {
        id: "pp_6",
        question: "Lucharon _____ la libertad.",
        translation: "(They fought for freedom)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Por' expresses motivation or fighting for a cause. It shows the motivating force behind action."
      },
      {
        id: "pp_7",
        question: "Lo necesito _____ mañana.",
        translation: "(I need it for tomorrow)",
        options: ["para", "por", "en", "a"],
        correct: "para",
        explanation: "'Para' indicates deadline or specific time. Use para when something is due by a certain time."
      },
      {
        id: "pp_8",
        question: "Lo hizo _____ amor.",
        translation: "(He did it for love)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Por' indicates motive or reason. It shows the cause that motivated the action."
      },
      {
        id: "pp_9",
        question: "Salimos _____ Madrid.",
        translation: "(We're leaving for Madrid)",
        options: ["para", "por", "a", "hacia"],
        correct: "para",
        explanation: "'Para' indicates destination with departure verbs. Use para when heading toward a place."
      },
      {
        id: "pp_10",
        question: "Pagué $20 _____ esta camisa.",
        translation: "(I paid $20 for this shirt)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Por' is used for exchanges and prices. It marks what you give to get something."
      },
      {
        id: "pp_11",
        question: "Ella estudia tres horas _____ día.",
        translation: "(She studies three hours per day)",
        options: ["por", "para", "cada", "de"],
        correct: "por",
        explanation: "'Por' means 'per' in rates and frequencies. English 'per' equals Spanish 'por'."
      },
      {
        id: "pp_12",
        question: "_____ un niño, es muy maduro.",
        translation: "(For a child, he's very mature)",
        options: ["Para", "Por", "De", "Como"],
        correct: "Para",
        explanation: "'Para' in comparisons means 'considering that'. It frames opinions relative to circumstances."
      },
      {
        id: "pp_13",
        question: "Te llamé _____ teléfono.",
        translation: "(I called you on the phone)",
        options: ["por", "para", "en", "con"],
        correct: "por",
        explanation: "'Por' indicates means or method. English 'by' or 'via' equals Spanish 'por'."
      },
      {
        id: "pp_14",
        question: "Este libro es _____ aprender español.",
        translation: "(This book is to learn Spanish)",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "'Para' with infinitive shows purpose. Use para to explain what something is for."
      },
      {
        id: "pp_15",
        question: "Fue arrestado _____ robo.",
        translation: "(He was arrested for theft)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Por' indicates reason for something happening. Use por for cause, not purpose."
      }
    ]
  },

  reflexive_verbs: {
    name: "Reflexive Verbs",
    description: "Master reflexive constructions",
    icon: RefreshCw,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "ref_1",
        question: "_____ despierto a las 7.",
        translation: "(I wake up at 7 AM)",
        options: ["Me", "Te", "Se", "Yo"],
        correct: "Me",
        explanation: "Reflexive verbs use reflexive pronouns showing action done to oneself. 'Despertarse' needs 'me' for first person."
      },
      {
        id: "ref_2",
        question: "Ella _____ está vistiendo.",
        translation: "(She is getting dressed)",
        options: ["se", "está", "le", "la"],
        correct: "se",
        explanation: "Progressive tenses keep reflexive pronoun before conjugated auxiliary. Alternative: 'está vistiéndose'."
      },
      {
        id: "ref_3",
        question: "_____ sentamos aquí.",
        translation: "(We sit down here)",
        options: ["Nos", "Se", "Me", "Les"],
        correct: "Nos",
        explanation: "First person plural reflexive pronoun is 'nos'. 'Sentarse' requires reflexive for 'sit down'."
      },
      {
        id: "ref_4",
        question: "¡No _____ preocupes!",
        translation: "(Don't worry! - informal singular)",
        options: ["te", "se", "me", "le"],
        correct: "te",
        explanation: "Negative tú command with reflexive pronoun. Reflexive 'te' goes before negative command."
      },
      {
        id: "ref_5",
        question: "_____ lavan las manos.",
        translation: "(They wash their hands)",
        options: ["Se", "Les", "Las", "Sus"],
        correct: "Se",
        explanation: "Reflexive pronouns with body parts - no possessive needed! Use reflexive 'se' plus article 'las'."
      },
      {
        id: "ref_6",
        question: "_____ voy a acostar temprano.",
        translation: "(I'm going to go to bed early)",
        options: ["Me", "Te", "Se", "Yo"],
        correct: "Me",
        explanation: "With ir + a + infinitive, reflexive pronoun goes before conjugated verb. Alternative: 'voy a acostarme'."
      },
      {
        id: "ref_7",
        question: "_____ durmió rápidamente.",
        translation: "(She fell asleep quickly)",
        options: ["Se", "Le", "La", "Ella"],
        correct: "Se",
        explanation: "'Dormirse' (fall asleep) is reflexive, different from 'dormir' (sleep). Reflexive changes the meaning."
      },
      {
        id: "ref_8",
        question: "_____ casamos el año pasado.",
        translation: "(We got married last year)",
        options: ["Nos", "Se", "Me", "Les"],
        correct: "Nos",
        explanation: "'Casarse' is reciprocal reflexive meaning 'married each other'. 'Nos' shows mutual action."
      },
      {
        id: "ref_9",
        question: "_____ afeita cada mañana.",
        translation: "(He shaves every morning)",
        options: ["Se", "Le", "Lo", "El"],
        correct: "Se",
        explanation: "'Afeitarse' (shave oneself) requires reflexive. Daily grooming verbs are typically reflexive in Spanish."
      },
      {
        id: "ref_10",
        question: "_____ estoy divirtiendo en la fiesta.",
        translation: "(I'm having fun at the party)",
        options: ["Me", "Se", "Te", "Le"],
        correct: "Me",
        explanation: "'Divertirse' (enjoy oneself) is reflexive. Progressive form puts reflexive before 'estoy'."
      },
      {
        id: "ref_11",
        question: "_____ enojaron.",
        translation: "(They got angry)",
        options: ["Se", "Les", "Los", "Ellos"],
        correct: "Se",
        explanation: "'Enojarse' (get angry) is reflexive showing emotional state change. Emotion verbs use reflexive structure."
      },
      {
        id: "ref_12",
        question: "¡_____!",
        translation: "(Remember! - informal singular)",
        options: ["Acuérdate", "Acuerda", "Se acuerde", "Acordarse"],
        correct: "Acuérdate",
        explanation: "Affirmative tú command with attached reflexive. Command 'acuerda' + 'te' = 'acuérdate' with accent."
      },
      {
        id: "ref_13",
        question: "_____ cepillo los dientes dos veces al día.",
        translation: "(I brush my teeth twice a day)",
        options: ["Me", "Mis", "Los", "Le"],
        correct: "Me",
        explanation: "Reflexive with body parts uses reflexive pronoun and article, not possessive. 'Me' makes clear they're your teeth."
      },
      {
        id: "ref_14",
        question: "_____ vamos a encontrar a las 5.",
        translation: "(We're going to meet at 5 PM)",
        options: ["Nos", "Se", "Me", "Les"],
        correct: "Nos",
        explanation: "'Encontrarse' (meet each other) is reciprocal reflexive. 'Nos' shows mutual meeting action."
      },
      {
        id: "ref_15",
        question: "Ella _____ siente feliz hoy.",
        translation: "(She feels happy today)",
        options: ["se", "le", "la", "está"],
        correct: "se",
        explanation: "'Sentirse' (feel emotion/state) is reflexive. Different from 'sentir' which means perceive externally."
      }
    ]
  },

  past_subjunctive: {
    name: "Past Subjunctive",
    description: "Learn the imperfect subjunctive forms and uses",
    icon: Clock,
    color: "from-violet-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "psub_1",
        question: "Deseaba que _____ aquí.",
        translation: "(I wished you were here)",
        options: ["estuvieras", "estás", "estarás", "estabas"],
        correct: "estuvieras",
        explanation: "Past tense main verb triggers imperfect subjunctive in dependent clause. Past desire requires past subjunctive form."
      },
      {
        id: "psub_2",
        question: "Ella dudaba que él _____.",
        translation: "(She doubted that he would come)",
        options: ["viniera", "viene", "vendrá", "vino"],
        correct: "viniera",
        explanation: "Doubt in past uses imperfect subjunctive. Past doubt + imperfect subjunctive = proper sequence of tenses."
      },
      {
        id: "psub_3",
        question: "Era importante que _____.",
        translation: "(It was important that they studied)",
        options: ["estudiaran", "estudian", "estudiarán", "estudiaron"],
        correct: "estudiaran",
        explanation: "Past impersonal expressions use imperfect subjunctive. The pattern holds across all similar expressions."
      },
      {
        id: "psub_4",
        question: "Quería que ella me _____.",
        translation: "(I wanted her to call me)",
        options: ["llamara", "llama", "llamará", "llamó"],
        correct: "llamara",
        explanation: "Wanting in past triggers imperfect subjunctive. Past desire requires past subjunctive form."
      },
      {
        id: "psub_5",
        question: "Recomendó que _____ al médico.",
        translation: "(He recommended that we go to the doctor)",
        options: ["fuéramos", "vamos", "iremos", "fuimos"],
        correct: "fuéramos",
        explanation: "Recommendations in past use imperfect subjunctive. 'Ir' has irregular imperfect subjunctive forms."
      },
      {
        id: "psub_6",
        question: "Buscaban a alguien que _____ francés.",
        translation: "(They were looking for someone who spoke French)",
        options: ["hablara", "habla", "hablará", "habló"],
        correct: "hablara",
        explanation: "Adjective clauses with indefinite antecedent use subjunctive. Seeking something that may not exist requires subjunctive."
      },
      {
        id: "psub_7",
        question: "Esperaba que _____.",
        translation: "(I hoped that you would understand)",
        options: ["entendieras", "entiendes", "entenderás", "entendiste"],
        correct: "entendieras",
        explanation: "Hope in past requires imperfect subjunctive. Past hope about uncertain outcome uses past subjunctive."
      },
      {
        id: "psub_8",
        question: "Pidió que _____ temprano.",
        translation: "(She asked that we arrive early)",
        options: ["llegáramos", "llegamos", "llegaremos", "llegaron"],
        correct: "llegáramos",
        explanation: "Requests in past trigger imperfect subjunctive. Both preterite and imperfect main verbs trigger it."
      },
      {
        id: "psub_9",
        question: "Temía que _____ perdieran.",
        translation: "(I was afraid that they would get lost)",
        options: ["se", "les", "los", "ellos"],
        correct: "se",
        explanation: "Fear in past with reflexive verb uses imperfect subjunctive. Reflexive stays with verb even in subjunctive."
      },
      {
        id: "psub_10",
        question: "Era imposible que él _____.",
        translation: "(It was impossible that he knew)",
        options: ["supiera", "sabe", "sabrá", "supo"],
        correct: "supiera",
        explanation: "Impossibility in past triggers imperfect subjunctive. 'Saber' has irregular imperfect subjunctive 'supiera'."
      },
      {
        id: "psub_11",
        question: "Sugirieron que _____ unas vacaciones.",
        translation: "(They suggested that I take a vacation)",
        options: ["tomara", "tomo", "tomaré", "tomé"],
        correct: "tomara",
        explanation: "Suggestion in past requires imperfect subjunctive. Both preterite and imperfect trigger it."
      },
      {
        id: "psub_12",
        question: "No creía que ella _____ razón.",
        translation: "(I didn't think she was right)",
        options: ["tuviera", "tiene", "tendrá", "tuvo"],
        correct: "tuviera",
        explanation: "Negative belief in past triggers imperfect subjunctive. Negative 'no creía' makes it subjunctive."
      },
      {
        id: "psub_13",
        question: "Quería que lo _____.",
        translation: "(He wanted us to help him)",
        options: ["ayudáramos", "ayudamos", "ayudaremos", "ayudaron"],
        correct: "ayudáramos",
        explanation: "Past wanting requires imperfect subjunctive. Accent on 'á' distinguishes first person plural."
      },
      {
        id: "psub_14",
        question: "Era necesario que _____ inmediatamente.",
        translation: "(It was necessary that they leave immediately)",
        options: ["salieran", "salen", "saldrán", "salieron"],
        correct: "salieran",
        explanation: "Past necessity requires imperfect subjunctive. The subjunctive mood persists into past tense."
      },
      {
        id: "psub_15",
        question: "Prefería que no _____ nada.",
        translation: "(She preferred that we not say anything)",
        options: ["dijéramos", "decimos", "diremos", "dijimos"],
        correct: "dijéramos",
        explanation: "Past preference uses imperfect subjunctive. 'Decir' has irregular imperfect subjunctive stem."
      }
    ]
  },

  compound_tenses: {
    name: "Compound Tenses",
    description: "Master perfect tenses with haber",
    icon: Layers,
    color: "from-emerald-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "comp_t1",
        question: "_____ visitado España dos veces.",
        translation: "(I have visited Spain twice)",
        options: ["He", "Visité", "Había", "Habré"],
        correct: "He",
        explanation: "Present perfect uses present of 'haber' + past participle. Use for life experiences up to now."
      },
      {
        id: "comp_t2",
        question: "Ella ya _____ salido cuando llegué.",
        translation: "(She had already left when I arrived)",
        options: ["había", "salió", "ha", "habrá"],
        correct: "había",
        explanation: "Pluperfect uses imperfect of 'haber' + past participle. Shows action completed before another past action."
      },
      {
        id: "comp_t3",
        question: "Para mañana, _____ terminado el proyecto.",
        translation: "(By tomorrow, I will have finished the project)",
        options: ["habré", "he", "había", "terminaré"],
        correct: "habré",
        explanation: "Future perfect uses future of 'haber' + past participle. Shows completion by specific future time."
      },
      {
        id: "comp_t4",
        question: "¿_____ estado alguna vez en México?",
        translation: "(Have you ever been to Mexico?)",
        options: ["Has", "Estuviste", "Habías", "Estarás"],
        correct: "Has",
        explanation: "Present perfect for life experiences. Use with 'alguna vez' (ever) for asking about experiences."
      },
      {
        id: "comp_t5",
        question: "No _____ habían visto en años.",
        translation: "(They hadn't seen each other in years)",
        options: ["se", "les", "han", "los"],
        correct: "se",
        explanation: "Reflexive reciprocal verb in pluperfect maintains reflexive pronoun. 'Se' goes before 'habían'."
      },
      {
        id: "comp_t6",
        question: "Dudo que _____ llegado todavía.",
        translation: "(I doubt that he has arrived yet)",
        options: ["haya", "ha", "había", "llegó"],
        correct: "haya",
        explanation: "Present perfect subjunctive uses present subjunctive of 'haber' + past participle. Doubt triggers subjunctive."
      },
      {
        id: "comp_t7",
        question: "_____ vivido aquí por cinco años.",
        translation: "(We have lived here for five years)",
        options: ["Hemos", "Vivimos", "Habíamos", "Viviremos"],
        correct: "Hemos",
        explanation: "Present perfect with duration shows time continuing to present. Emphasizes the continuing nature."
      },
      {
        id: "comp_t8",
        question: "Nunca _____ probado sushi antes.",
        translation: "(I had never tried sushi before)",
        options: ["había", "probé", "he", "probaré"],
        correct: "había",
        explanation: "Pluperfect with 'nunca' before a past reference point. Shows lack of experience before past moment."
      },
      {
        id: "comp_t9",
        question: "Para la semana que viene, _____ habrán mudado.",
        translation: "(By next week, they will have moved)",
        options: ["se", "les", "han", "los"],
        correct: "se",
        explanation: "Reflexive verb in future perfect keeps reflexive pronoun. 'Se' goes before 'habrán'."
      },
      {
        id: "comp_t10",
        question: "_____ estudiado toda la mañana.",
        translation: "(She has studied all morning)",
        options: ["Ha", "Estudió", "Había", "Estudiará"],
        correct: "Ha",
        explanation: "Present perfect for recent completed action still relevant now. Emphasizes connection to present moment."
      },
      {
        id: "comp_t11",
        question: "Me alegro de que _____ venido.",
        translation: "(I'm glad you have come)",
        options: ["hayas", "has", "habías", "veniste"],
        correct: "hayas",
        explanation: "Present perfect subjunctive after emotion in present. 'Hayas' is subjunctive of haber."
      },
      {
        id: "comp_t12",
        question: "Ya _____ comido cuando lo invitamos.",
        translation: "(He had already eaten when we invited him)",
        options: ["había", "comió", "ha", "comerá"],
        correct: "había",
        explanation: "Pluperfect for action completed before another past action. Eating happened before inviting."
      },
      {
        id: "comp_t13",
        question: "Esta es la mejor película que _____ visto.",
        translation: "(This is the best movie I have seen)",
        options: ["he", "vi", "había", "veré"],
        correct: "he",
        explanation: "Present perfect with superlative for life experiences. Keeps experiences open to future."
      },
      {
        id: "comp_t14",
        question: "_____ ido si hubiera sabido.",
        translation: "(I would have gone if I had known)",
        options: ["Habría", "Iría", "Fui", "He"],
        correct: "Habría",
        explanation: "Conditional perfect for past hypotheticals. Conditional of 'haber' + past participle."
      },
      {
        id: "comp_t15",
        question: "Para cuando llegues, ya _____ salido.",
        translation: "(By the time you arrive, I will have left)",
        options: ["habré", "he", "había", "saldré"],
        correct: "habré",
        explanation: "Future perfect for action completed before future moment. Note subjunctive 'llegues' in time clause."
      }
    ]
  }
};

export default part5Categories;
