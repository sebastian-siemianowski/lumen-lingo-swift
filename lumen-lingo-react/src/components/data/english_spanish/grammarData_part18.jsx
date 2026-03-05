/**
 * ENGLISH → SPANISH GRAMMAR - PART 18
 * 5 advanced categories, 15 questions each - Nuanced grammar contexts
 */

import { Globe, Mic, Users, Palette, Mountain } from "lucide-react";

export const part18Categories = {
  subjunctive_indefinite_antecedent: {
    name: "Subjunctive - Indefinite Antecedent",
    description: "Adjective clauses with unknown or nonexistent referents",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "indef_ant_1",
        question: "Busco un apartamento que _____ cerca del metro y que no sea demasiado caro.",
        translation: "(I'm looking for an apartment that's close to the metro and that's not too expensive)",
        options: ["esté", "está", "estará", "estaba"],
        correct: "esté",
        explanation: "Unknown apartment requires subjunctive. Seeking something that may or may not exist."
      },
      {
        id: "indef_ant_2",
        question: "Necesitamos contratar a alguien que _____ hablar perfectamente tres idiomas europeos.",
        translation: "(We need to hire someone who can speak three European languages perfectly)",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "Indefinite person with required skill uses subjunctive. Searching for qualified but unknown candidate."
      },
      {
        id: "indef_ant_3",
        question: "¿Hay alguien aquí que _____ arreglar computadoras con problemas de hardware?",
        translation: "(Is there anyone here who knows how to fix computers with hardware problems?)",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "Question about possible person uses subjunctive. Unknown if such person exists."
      },
      {
        id: "indef_ant_4",
        question: "No conozco a nadie que _____ trabajar tan duro como ella sin quejarse nunca.",
        translation: "(I don't know anyone who works as hard as she does without ever complaining)",
        options: ["trabaje", "trabaja", "trabajará", "trabajó"],
        correct: "trabaje",
        explanation: "Negative antecedent 'nadie' requires subjunctive. Denying existence of such person."
      },
      {
        id: "indef_ant_5",
        question: "Queremos vivir en un lugar donde _____ tranquilidad y belleza natural incomparable.",
        translation: "(We want to live in a place where there's tranquility and incomparable natural beauty)",
        options: ["haya", "hay", "habrá", "había"],
        correct: "haya",
        explanation: "Indefinite ideal place uses subjunctive. Seeking location that may be idealized."
      },
      {
        id: "indef_ant_6",
        question: "No hay ningún restaurante en esta zona que _____ comida vegetariana orgánica.",
        translation: "(There's no restaurant in this area that serves organic vegetarian food)",
        options: ["sirva", "sirve", "servirá", "sirvió"],
        correct: "sirva",
        explanation: "Negative existence 'ningún' requires subjunctive. Denying any restaurant with feature."
      },
      {
        id: "indef_ant_7",
        question: "Buscamos una solución innovadora que _____ resolver todos estos problemas complejos.",
        translation: "(We're looking for an innovative solution that can solve all these complex problems)",
        options: ["pueda", "puede", "podrá", "pudo"],
        correct: "pueda",
        explanation: "Indefinite solution being sought uses subjunctive. Unknown if such solution exists."
      },
      {
        id: "indef_ant_8",
        question: "¿Conoces algún libro que _____ sobre la historia medieval de España en detalle?",
        translation: "(Do you know any book that talks about medieval Spanish history in detail?)",
        options: ["hable", "habla", "hablará", "habló"],
        correct: "hable",
        explanation: "Question about possible book uses subjunctive. Uncertain if such book is known."
      },
      {
        id: "indef_ant_9",
        question: "No encuentro a nadie que me _____ entender realmente en momentos difíciles.",
        translation: "(I can't find anyone who really understands me in difficult moments)",
        options: ["pueda", "puede", "podrá", "pudo"],
        correct: "pueda",
        explanation: "Negative finding with 'nadie' requires subjunctive. Lamenting absence of understanding person."
      },
      {
        id: "indef_ant_10",
        question: "Necesito un coche que _____ espacio suficiente para toda mi familia numerosa.",
        translation: "(I need a car that has enough space for my entire large family)",
        options: ["tenga", "tiene", "tendrá", "tenía"],
        correct: "tenga",
        explanation: "Seeking unidentified car with feature uses subjunctive. Need for vehicle meeting criteria."
      },
      {
        id: "indef_ant_11",
        question: "Queremos contratar empleados que _____ comprometidos con los valores de nuestra empresa.",
        translation: "(We want to hire employees who are committed to our company's values)",
        options: ["estén", "están", "estarán", "estaban"],
        correct: "estén",
        explanation: "Desired but unidentified employees use subjunctive. Seeking people with specific qualities."
      },
      {
        id: "indef_ant_12",
        question: "Buscan un candidato que _____ experiencia previa en gestión de proyectos internacionales.",
        translation: "(They're looking for a candidate who has previous experience in international project management)",
        options: ["tenga", "tiene", "tendrá", "tenía"],
        correct: "tenga",
        explanation: "Job requirement for unknown candidate uses subjunctive. Qualification search for indefinite person."
      },
      {
        id: "indef_ant_13",
        question: "No hay nada que me _____ más feliz que pasar tiempo con mi familia.",
        translation: "(There's nothing that makes me happier than spending time with my family)",
        options: ["haga", "hace", "hará", "hizo"],
        correct: "haga",
        explanation: "Superlative with 'nada que' requires subjunctive. Extreme comparison with negative."
      },
      {
        id: "indef_ant_14",
        question: "¿Hay alguna farmacia por aquí que _____ abierta las veinticuatro horas del día?",
        translation: "(Is there any pharmacy around here that's open twenty-four hours a day?)",
        options: ["esté", "está", "estará", "estaba"],
        correct: "esté",
        explanation: "Question about possible business uses subjunctive. Uncertain if 24-hour pharmacy exists nearby."
      },
      {
        id: "indef_ant_15",
        question: "Quiero comprar una casa que _____ jardín grande y piscina para los niños.",
        translation: "(I want to buy a house that has a large garden and pool for the children)",
        options: ["tenga", "tiene", "tendrá", "tenía"],
        correct: "tenga",
        explanation: "Desired but unidentified house uses subjunctive. Dream home requirements require subjunctive."
      }
    ]
  },

  imperatives_irregular: {
    name: "Irregular Imperative Forms",
    description: "Master irregular command conjugations",
    icon: Mic,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "irreg_imp_1",
        question: "_____ más cuidado con tus cosas personales cuando viajes al extranjero.",
        translation: "(Have more care with your personal belongings when you travel abroad - informal)",
        options: ["Ten", "Tiene", "Tenga", "Tener"],
        correct: "Ten",
        explanation: "Irregular tú command of 'tener' is 'ten'. Drops -er and adds -en becomes 'ten'."
      },
      {
        id: "irreg_imp_2",
        question: "_____ paciente, todo llegará a su debido tiempo en la vida.",
        translation: "(Be patient, everything will come in its due time in life - informal)",
        options: ["Sé", "Eres", "Sea", "Ser"],
        correct: "Sé",
        explanation: "Irregular tú command of 'ser' is 'sé'. Very irregular, same as 'yo sé' from saber."
      },
      {
        id: "irreg_imp_3",
        question: "_____ a la tienda y compra leche, pan y huevos frescos para el desayuno.",
        translation: "(Go to the store and buy milk, bread, and fresh eggs for breakfast - informal)",
        options: ["Ve", "Vas", "Vaya", "Ir"],
        correct: "Ve",
        explanation: "Irregular tú command of 'ir' is 've'. Extremely irregular command form."
      },
      {
        id: "irreg_imp_4",
        question: "No _____ miedo de intentar cosas nuevas y desafiantes en tu vida.",
        translation: "(Don't be afraid to try new and challenging things in your life - informal)",
        options: ["tengas", "tienes", "ten", "tener"],
        correct: "tengas",
        explanation: "Negative tú command uses present subjunctive. 'No tengas' for don't have/be."
      },
      {
        id: "irreg_imp_5",
        question: "_____ lo que te digo y sígueme sin hacer preguntas ahora mismo.",
        translation: "(Do what I tell you and follow me without asking questions right now - informal)",
        options: ["Haz", "Haces", "Haga", "Hacer"],
        correct: "Haz",
        explanation: "Irregular tú command of 'hacer' is 'haz'. Drops -cer ending irregularly."
      },
      {
        id: "irreg_imp_6",
        question: "_____ responsable de tus propias acciones y decisiones importantes en la vida.",
        translation: "(Be responsible for your own actions and important decisions in life - informal)",
        options: ["Sé", "Eres", "Sea", "Estar"],
        correct: "Sé",
        explanation: "Irregular 'ser' command for character trait. 'Sé responsable' is standard advice."
      },
      {
        id: "irreg_imp_7",
        question: "_____ usted la amabilidad de esperar un momento aquí en la sala, por favor.",
        translation: "(Please be so kind as to wait a moment here in the waiting room - formal)",
        options: ["Tenga", "Ten", "Tiene", "Tener"],
        correct: "Tenga",
        explanation: "Formal usted command of 'tener' is 'tenga'. Professional courtesy requires formal command."
      },
      {
        id: "irreg_imp_8",
        question: "No _____ eso nunca más, fue una falta de respeto grave e inaceptable.",
        translation: "(Don't do that ever again, it was a serious and unacceptable lack of respect - informal)",
        options: ["hagas", "haces", "haz", "hacer"],
        correct: "hagas",
        explanation: "Negative tú command uses subjunctive. 'No hagas' for prohibition."
      },
      {
        id: "irreg_imp_9",
        question: "_____ con nosotros al evento especial que organizamos para recaudar fondos.",
        translation: "(Come with us to the special event we're organizing to raise funds - informal)",
        options: ["Ven", "Vienes", "Venga", "Venir"],
        correct: "Ven",
        explanation: "Irregular tú command of 'venir' is 'ven'. Invitation to accompany."
      },
      {
        id: "irreg_imp_10",
        question: "_____ la verdad completa, aunque sea difícil de escuchar para todos.",
        translation: "(Tell the truth, even if it's difficult for everyone to hear - informal)",
        options: ["Di", "Dices", "Diga", "Decir"],
        correct: "Di",
        explanation: "Irregular tú command of 'decir' is 'di'. Very short irregular form."
      },
      {
        id: "irreg_imp_11",
        question: "_____ constante en tu esfuerzo y verás resultados positivos muy pronto.",
        translation: "(Be constant in your effort and you'll see positive results very soon - informal)",
        options: ["Sé", "Eres", "Sea", "Estar"],
        correct: "Sé",
        explanation: "'Ser' command for character quality. 'Sé constante' encourages perseverance."
      },
      {
        id: "irreg_imp_12",
        question: "_____ usted la bondad de firmar estos documentos oficiales aquí abajo.",
        translation: "(Please be so kind as to sign these official documents down here - formal)",
        options: ["Tenga", "Ten", "Tiene", "Tener"],
        correct: "Tenga",
        explanation: "Formal request with 'tener la bondad'. Polite business transaction language."
      },
      {
        id: "irreg_imp_13",
        question: "No _____ tan impaciente, las cosas buenas requieren tiempo y paciencia.",
        translation: "(Don't be so impatient, good things require time and patience - informal)",
        options: ["seas", "eres", "sé", "ser"],
        correct: "seas",
        explanation: "Negative command of 'ser' uses subjunctive. 'No seas' for character correction."
      },
      {
        id: "irreg_imp_14",
        question: "_____ amable con todas las personas que conozcas en tu camino de vida.",
        translation: "(Be kind to all people you meet on your life path - informal)",
        options: ["Sé", "Eres", "Sea", "Estar"],
        correct: "Sé",
        explanation: "'Ser' command for moral instruction. 'Sé amable' is common life advice."
      },
      {
        id: "irreg_imp_15",
        question: "_____ precaución al conducir en estas condiciones climáticas tan peligrosas.",
        translation: "(Have caution when driving in these very dangerous weather conditions - informal)",
        options: ["Ten", "Tienes", "Tenga", "Tener"],
        correct: "Ten",
        explanation: "'Tener' command for safety advice. 'Ten precaución' warns of danger."
      }
    ]
  },

  conditional_sentences_complex: {
    name: "Complex Conditional Sentences",
    description: "Si clauses with mixed tenses and moods",
    icon: Mountain,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "cond_sent_1",
        question: "Si _____ más tiempo libre disponible, viajaría por todo el mundo sin parar.",
        translation: "(If I had more free time available, I would travel all over the world non-stop)",
        options: ["tuviera", "tengo", "tendría", "tenía"],
        correct: "tuviera",
        explanation: "Hypothetical present uses imperfect subjunctive + conditional. Contrary to current reality."
      },
      {
        id: "cond_sent_2",
        question: "Si hubieras estudiado más para el examen, lo _____ aprobado fácilmente ayer.",
        translation: "(If you had studied more for the exam, you would have passed it easily yesterday)",
        options: ["habrías", "aprobarías", "hubieras", "habías"],
        correct: "habrías",
        explanation: "Past contrary-to-fact uses pluperfect subjunctive + conditional perfect. Unrealized past possibility."
      },
      {
        id: "cond_sent_3",
        question: "Si mañana _____ buen tiempo, iremos a la playa a disfrutar del sol.",
        translation: "(If tomorrow has good weather, we'll go to the beach to enjoy the sun)",
        options: ["hace", "haga", "haría", "hiciera"],
        correct: "hace",
        explanation: "Real possible future condition uses present indicative. Likely future weather uses indicative."
      },
      {
        id: "cond_sent_4",
        question: "Si yo _____ tú en esta situación complicada, renunciaría inmediatamente al trabajo.",
        translation: "(If I were you in this complicated situation, I would resign immediately from the job)",
        options: ["fuera", "soy", "sería", "era"],
        correct: "fuera",
        explanation: "'Si yo fuera tú' standard advice formula. Hypothetical identity swap uses imperfect subjunctive."
      },
      {
        id: "cond_sent_5",
        question: "Si no _____ lloviendo ahora mismo, saldríamos a caminar por el vecindario.",
        translation: "(If it weren't raining right now, we would go out to walk around the neighborhood)",
        options: ["estuviera", "está", "estaría", "estaba"],
        correct: "estuviera",
        explanation: "Contrary to present fact uses imperfect subjunctive. It IS raining, so hypothetical uses subjunctive."
      },
      {
        id: "cond_sent_6",
        question: "Si _____ ganado la lotería el año pasado, ahora estaría viviendo en una mansión.",
        translation: "(If I had won the lottery last year, I would now be living in a mansion)",
        options: ["hubiera", "gané", "habría", "había"],
        correct: "hubiera",
        explanation: "Past condition with present result mixes pluperfect subjunctive + present conditional. Past hypothetical affecting now."
      },
      {
        id: "cond_sent_7",
        question: "Si tú _____ conmigo mañana al médico, me sentiri mucho más tranquilo.",
        translation: "(If you come with me tomorrow to the doctor, I'll feel much calmer)",
        options: ["vienes", "vinieras", "vendrías", "viniste"],
        correct: "vienes",
        explanation: "Real likely future uses present indicative. Probable accompaniment doesn't need subjunctive."
      },
      {
        id: "cond_sent_8",
        question: "Si _____ podido elegir libremente, habría estudiado arquitectura en la universidad.",
        translation: "(If I had been able to choose freely, I would have studied architecture at university)",
        options: ["hubiera", "he", "habría", "había"],
        correct: "hubiera",
        explanation: "Past impossible condition uses pluperfect subjunctive + conditional perfect. Unrealized past choice."
      },
      {
        id: "cond_sent_9",
        question: "Si no fuera por tu ayuda valiosa, nunca _____ completado este proyecto a tiempo.",
        translation: "(If it weren't for your valuable help, I would never have completed this project on time)",
        options: ["habría", "completaría", "hubiera", "había"],
        correct: "habría",
        explanation: "'Si no fuera por' with past result uses conditional perfect. Acknowledging crucial assistance."
      },
      {
        id: "cond_sent_10",
        question: "Si me lo _____ pedido amablemente, te habría ayudado con mucho gusto.",
        translation: "(If you had asked me kindly, I would have helped you very gladly)",
        options: ["hubieras", "pides", "pedirías", "pedías"],
        correct: "hubieras",
        explanation: "Past hypothetical request uses pluperfect subjunctive. Different past approach would have changed outcome."
      },
      {
        id: "cond_sent_11",
        question: "Si _____ rico y famoso, no cambiaría mi forma de ser ni mis valores.",
        translation: "(If I were rich and famous, I wouldn't change my way of being or my values)",
        options: ["fuera", "soy", "sería", "era"],
        correct: "fuera",
        explanation: "Hypothetical present state uses imperfect subjunctive. Contrary to current reality."
      },
      {
        id: "cond_sent_12",
        question: "Si _____ más cuidadoso con el dinero, ahora no tendrías problemas financieros.",
        translation: "(If you had been more careful with money, you wouldn't have financial problems now)",
        options: ["hubieras sido", "eres", "serías", "eras"],
        correct: "hubieras sido",
        explanation: "Past condition affecting present uses pluperfect subjunctive + present conditional. Past habits impact now."
      },
      {
        id: "cond_sent_13",
        question: "Si el tren _____ a tiempo esta mañana, llegaremos perfectamente a la reunión.",
        translation: "(If the train arrives on time this morning, we'll arrive perfectly to the meeting)",
        options: ["llega", "llegue", "llegaría", "llegara"],
        correct: "llega",
        explanation: "Real likely condition uses present indicative. Expected arrival uses indicative."
      },
      {
        id: "cond_sent_14",
        question: "Si no _____ sido por aquel accidente grave, mi vida sería completamente diferente ahora.",
        translation: "(If it hadn't been for that serious accident, my life would be completely different now)",
        options: ["hubiera", "fue", "habría", "había"],
        correct: "hubiera",
        explanation: "Past event affecting present uses pluperfect subjunctive + conditional. Life-changing past event."
      },
      {
        id: "cond_sent_15",
        question: "Si _____ la oportunidad de vivir en otro país, ¿dónde te gustaría estar?",
        translation: "(If you had the opportunity to live in another country, where would you like to be?)",
        options: ["tuvieras", "tienes", "tendrías", "tenías"],
        correct: "tuvieras",
        explanation: "Hypothetical opportunity uses imperfect subjunctive. Imagining unlikely scenario."
      }
    ]
  },

  mood_distinction: {
    name: "Indicative vs Subjunctive Distinction",
    description: "Subtle mood differences changing meaning",
    icon: Palette,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "mood_1",
        question: "Busco el libro que _____ sobre la Segunda Guerra Mundial en Europa.",
        translation: "(I'm looking for the book that talks about World War II in Europe - I know it exists)",
        options: ["habla", "hable", "hablará", "habló"],
        correct: "habla",
        explanation: "Indicative for known specific book. Speaker knows which book, so uses indicative."
      },
      {
        id: "mood_2",
        question: "Busco un libro que _____ sobre la Segunda Guerra Mundial con nuevas perspectivas.",
        translation: "(I'm looking for a book that talks about World War II with new perspectives - don't know if it exists)",
        options: ["hable", "habla", "hablará", "habló"],
        correct: "hable",
        explanation: "Subjunctive for indefinite unknown book. Not sure if such book exists."
      },
      {
        id: "mood_3",
        question: "Aunque _____ mucho dinero ahorrado, nunca gasta en cosas innecesarias o frívolas.",
        translation: "(Although he has a lot of money saved, he never spends on unnecessary or frivolous things - FACT)",
        options: ["tiene", "tenga", "tendrá", "tuviera"],
        correct: "tiene",
        explanation: "'Aunque' with indicative states known fact. Speaker affirms he does have money."
      },
      {
        id: "mood_4",
        question: "Aunque _____ mucho dinero disponible, no podría comprar la felicidad verdadera.",
        translation: "(Even if I had a lot of money available, I couldn't buy true happiness - HYPOTHETICAL)",
        options: ["tuviera", "tengo", "tendría", "tenía"],
        correct: "tuviera",
        explanation: "'Aunque' with subjunctive for hypothetical. Speaker doesn't have money, imagining if they did."
      },
      {
        id: "mood_5",
        question: "Cuando _____ niño pequeño, siempre jugaba con mis primos en el campo.",
        translation: "(When I was a little child, I always used to play with my cousins in the countryside - PAST FACT)",
        options: ["era", "fuera", "sea", "soy"],
        correct: "era",
        explanation: "'Cuando' referring to factual past uses imperfect indicative. Childhood is known fact."
      },
      {
        id: "mood_6",
        question: "Cuando _____ grande y adulto, quiero ser médico como mi padre es ahora.",
        translation: "(When I'm big and grown up, I want to be a doctor like my father is now - FUTURE)",
        options: ["sea", "soy", "seré", "era"],
        correct: "sea",
        explanation: "'Cuando' with future reference requires subjunctive. Uncertain future time uses subjunctive."
      },
      {
        id: "mood_7",
        question: "Como _____ tarde al trabajo otra vez, el jefe se enfadará muchísimo contigo.",
        translation: "(If you arrive late to work again, the boss will get very angry with you - WARNING)",
        options: ["llegues", "llegas", "llegarás", "llegaste"],
        correct: "llegues",
        explanation: "'Como' meaning 'if' in warning uses subjunctive. Conditional warning about future."
      },
      {
        id: "mood_8",
        question: "Como _____ tarde a la reunión importante, perdí información clave del proyecto.",
        translation: "(Since I arrived late to the important meeting, I missed key project information - FACT)",
        options: ["llegué", "llegara", "llegue", "llego"],
        correct: "llegué",
        explanation: "'Como' meaning 'since/because' uses indicative. Explaining factual past cause."
      },
      {
        id: "mood_9",
        question: "Creo firmemente que él _____ la capacidad de resolver este problema complejo.",
        translation: "(I firmly believe he has the capacity to solve this complex problem - BELIEF)",
        options: ["tiene", "tenga", "tendrá", "tuviera"],
        correct: "tiene",
        explanation: "Affirmative 'creer que' uses indicative. Stating belief as fact requires indicative."
      },
      {
        id: "mood_10",
        question: "No creo en absoluto que él _____ la capacidad necesaria para este puesto.",
        translation: "(I don't believe at all he has the necessary capacity for this position - DOUBT)",
        options: ["tenga", "tiene", "tendrá", "tuviera"],
        correct: "tenga",
        explanation: "Negative 'no creer que' triggers subjunctive. Doubt about capacity requires subjunctive."
      },
      {
        id: "mood_11",
        question: "Tal vez _____ razón en lo que dices sobre la situación económica actual.",
        translation: "(Perhaps you're right in what you say about the current economic situation - UNCERTAINTY)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Tal vez' with subjunctive emphasizes doubt. Uncertain agreement uses subjunctive."
      },
      {
        id: "mood_12",
        question: "Tal vez _____ razón ayer cuando me advertiste sobre ese peligro evidente.",
        translation: "(Perhaps you were right yesterday when you warned me about that evident danger - PAST FACT)",
        options: ["tenías", "tuvieras", "tienes", "tengas"],
        correct: "tenías",
        explanation: "'Tal vez' can use indicative for past facts. Past agreement uses imperfect indicative."
      },
      {
        id: "mood_13",
        question: "Donde tú _____, yo también iré para apoyarte en todo momento difícil.",
        translation: "(Wherever you go, I'll also go to support you in every difficult moment - FUTURE)",
        options: ["vayas", "vas", "irás", "fuiste"],
        correct: "vayas",
        explanation: "'Donde' with future reference requires subjunctive. Unknown future locations need subjunctive."
      },
      {
        id: "mood_14",
        question: "Donde él _____ ayer, encontró exactamente lo que estaba buscando desde hace tiempo.",
        translation: "(Where he went yesterday, he found exactly what he had been looking for - PAST FACT)",
        options: ["fue", "fuera", "vaya", "va"],
        correct: "fue",
        explanation: "'Donde' with known past fact uses preterite indicative. Definite past location."
      },
      {
        id: "mood_15",
        question: "Mientras tú _____ aquí conmigo, no te faltará nada que necesites para vivir.",
        translation: "(While you're here with me, you won't lack anything you need to live - FUTURE)",
        options: ["estés", "estás", "estarás", "estabas"],
        correct: "estés",
        explanation: "'Mientras' with future or indefinite time uses subjunctive. Open-ended future duration."
      }
    ]
  },

  discourse_markers: {
    name: "Discourse Markers and Connectors",
    description: "Structure complex arguments and narratives",
    icon: Users,
    color: "from-lime-500 to-green-600",
    level: "advanced",
    questions: [
      {
        id: "disc_1",
        question: "_____, me gustaría comentar algunos puntos importantes sobre la propuesta presentada.",
        translation: "(First of all, I would like to comment on some important points about the presented proposal)",
        options: ["En primer lugar", "Primero", "Al principio", "Antes"],
        correct: "En primer lugar",
        explanation: "'En primer lugar' formal for introducing first point. Academic/professional discourse structure."
      },
      {
        id: "disc_2",
        question: "_____, debemos considerar las implicaciones financieras de esta decisión empresarial.",
        translation: "(On the other hand, we must consider the financial implications of this business decision)",
        options: ["Por otro lado", "Por otra parte", "Además", "También"],
        correct: "Por otro lado",
        explanation: "'Por otro lado' introduces contrasting perspective. Presenting alternative viewpoint."
      },
      {
        id: "disc_3",
        question: "_____, quiero agradecer a todos los que contribuyeron al éxito del proyecto.",
        translation: "(Finally, I want to thank everyone who contributed to the project's success)",
        options: ["Por último", "Al final", "Finalmente", "Para terminar"],
        correct: "Por último",
        explanation: "'Por último' formal conclusion marker. Professional closing of discourse."
      },
      {
        id: "disc_4",
        question: "Los resultados fueron positivos; _____, debemos mantener la cautela en el análisis.",
        translation: "(The results were positive; however, we must maintain caution in the analysis)",
        options: ["sin embargo", "pero", "aunque", "no obstante"],
        correct: "sin embargo",
        explanation: "'Sin embargo' formal adversative connector. Academic caution despite positive results."
      },
      {
        id: "disc_5",
        question: "_____, me parece importante resaltar que este método tiene limitaciones claras.",
        translation: "(In addition, it seems important to me to highlight this method has clear limitations)",
        options: ["Asimismo", "También", "Y", "Más"],
        correct: "Asimismo",
        explanation: "'Asimismo' very formal addition marker. Academic discourse adding related point."
      },
      {
        id: "disc_6",
        question: "El proyecto es viable; _____, requiere una inversión inicial significativa y sostenida.",
        translation: "(The project is viable; nevertheless, it requires a significant and sustained initial investment)",
        options: ["no obstante", "pero", "sin embargo", "aunque"],
        correct: "no obstante",
        explanation: "'No obstante' formal concession marker. Acknowledging drawback despite viability."
      },
      {
        id: "disc_7",
        question: "_____, podemos concluir que la hipótesis planteada era correcta desde el principio.",
        translation: "(In conclusion, we can conclude the stated hypothesis was correct from the beginning)",
        options: ["En conclusión", "Por fin", "Al final", "Finalmente"],
        correct: "En conclusión",
        explanation: "'En conclusión' formal ending marker. Academic final statement introduction."
      },
      {
        id: "disc_8",
        question: "_____ que hemos analizado, los datos sugieren una tendencia clara y consistente.",
        translation: "(According to what we've analyzed, the data suggest a clear and consistent trend)",
        options: ["Según lo", "Como", "De acuerdo", "Por"],
        correct: "Según lo",
        explanation: "'Según lo que' references prior analysis. Basing conclusion on evidence discussed."
      },
      {
        id: "disc_9",
        question: "_____ una cosa, _____ otra, el resultado final fue positivo para todos.",
        translation: "(Between one thing and another, the final result was positive for everyone)",
        options: ["Entre / y", "De / a", "Por / y", "Con / y"],
        correct: "Entre / y",
        explanation: "'Entre una cosa y otra' means between various factors. Acknowledging multiple influences."
      },
      {
        id: "disc_10",
        question: "_____ de vista personal, considero que esta es la mejor opción disponible.",
        translation: "(From a personal point of view, I consider this is the best available option)",
        options: ["Desde el punto", "Del punto", "En el punto", "Por el punto"],
        correct: "Desde el punto",
        explanation: "'Desde el punto de vista' introduces perspective. Framing opinion source."
      },
      {
        id: "disc_11",
        question: "_____ palabras, necesitamos más tiempo para completar adecuadamente el análisis requerido.",
        translation: "(In other words, we need more time to adequately complete the required analysis)",
        options: ["En otras", "Con otras", "De otras", "Por otras"],
        correct: "En otras",
        explanation: "'En otras palabras' rephrases for clarity. Reformulating for better understanding."
      },
      {
        id: "disc_12",
        question: "_____ todo lo expuesto anteriormente, propongo que aceptemos la oferta recibida.",
        translation: "(Given everything stated previously, I propose we accept the received offer)",
        options: ["Dado", "Dando", "Por", "Con"],
        correct: "Dado",
        explanation: "'Dado' introduces basis for conclusion. Formal reasoning connector."
      },
      {
        id: "disc_13",
        question: "_____ de lo contrario, procederemos según lo planeado originalmente en la reunión.",
        translation: "(Unless otherwise indicated, we'll proceed according to what was originally planned in the meeting)",
        options: ["A menos", "Si no", "Excepto", "Salvo"],
        correct: "A menos",
        explanation: "'A menos que' in formal 'salvo indicación contraria'. Business contingency language."
      },
      {
        id: "disc_14",
        question: "_____ lugar a dudas, este es el mejor curso de acción dadas las circunstancias.",
        translation: "(Without a doubt, this is the best course of action given the circumstances)",
        options: ["Sin", "No", "Ni", "Fuera"],
        correct: "Sin",
        explanation: "'Sin lugar a dudas' formal certainty expression. Emphatic confidence marker."
      },
      {
        id: "disc_15",
        question: "_____ resumidas cuentas, el balance general del año fiscal fue muy positivo.",
        translation: "(In short, the overall balance of the fiscal year was very positive)",
        options: ["En", "A", "De", "Por"],
        correct: "En",
        explanation: "'En resumidas cuentas' formal summary phrase. Concluding financial discussion."
      }
    ]
  }
};

export default part18Categories;