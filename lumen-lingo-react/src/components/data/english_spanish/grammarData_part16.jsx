/**
 * ENGLISH → SPANISH GRAMMAR - PART 16
 * 5 advanced categories, 15 questions each - Professional and nuanced contexts
 */

import { Briefcase, BookOpen, Users2, Target, Wrench } from "lucide-react";

export const part16Categories = {
  modal_verbs_advanced: {
    name: "Modal Verbs - Advanced Uses",
    description: "Poder, deber, querer in complex contexts",
    icon: Wrench,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "modal_1",
        question: "Deberías _____ visitado a tu abuela cuando estuvo enferma en el hospital.",
        translation: "(You should have visited your grandmother when she was sick in the hospital)",
        options: ["haber", "de", "que", "haberle"],
        correct: "haber",
        explanation: "Conditional + haber + past participle for past obligation. 'Deberías haber' expresses regret about unmet duty."
      },
      {
        id: "modal_2",
        question: "No puede _____ que ella no sepa nada sobre este importante asunto.",
        translation: "(It can't be that she doesn't know anything about this important matter)",
        options: ["ser", "estar", "haber", "tener"],
        correct: "ser",
        explanation: "'No puede ser que' expresses disbelief. Impossibility of situation requires 'ser'."
      },
      {
        id: "modal_3",
        question: "Pudiera _____ que estén equivocados en sus conclusiones apresuradas.",
        translation: "(It could be they're wrong in their hasty conclusions)",
        options: ["ser", "estar", "haber", "tener"],
        correct: "ser",
        explanation: "'Pudiera ser que' expresses possibility. Imperfect subjunctive 'pudiera' softens suggestion."
      },
      {
        id: "modal_4",
        question: "Habría _____ llegar más temprano si hubiera sabido sobre el tráfico.",
        translation: "(I should have arrived earlier if I had known about the traffic)",
        options: ["debido", "podido", "querido", "tenido que"],
        correct: "debido",
        explanation: "Conditional perfect 'habría debido' for past obligation. Recognizing what should have been done."
      },
      {
        id: "modal_5",
        question: "¿Podrías _____ el favor de cerrar esa ventana que está abierta?",
        translation: "(Could you do me the favor of closing that window that's open?)",
        options: ["hacerme", "darme", "traerme", "decirme"],
        correct: "hacerme",
        explanation: "'¿Podrías hacerme el favor?' polite request formula. Standard courteous asking pattern."
      },
      {
        id: "modal_6",
        question: "Debe de _____ muy caro vivir en esa zona tan exclusiva de la ciudad.",
        translation: "(It must be very expensive to live in that very exclusive area of the city)",
        options: ["ser", "estar", "haber", "tener"],
        correct: "ser",
        explanation: "'Debe de' expresses supposition/probability. 'De' indicates conjecture rather than obligation."
      },
      {
        id: "modal_7",
        question: "No quisiera _____ grosero, pero tu propuesta tiene varios problemas.",
        translation: "(I wouldn't want to be rude, but your proposal has several problems)",
        options: ["ser", "estar", "parecer", "sonar"],
        correct: "ser",
        explanation: "'No quisiera ser' for polite disagreement. Conditional softens potentially offensive statement."
      },
      {
        id: "modal_8",
        question: "Pueden _____ terminado el trabajo si hubieran empezado más temprano.",
        translation: "(They could have finished the work if they had started earlier)",
        options: ["haber", "de haber", "que haber", "haberse"],
        correct: "haber",
        explanation: "'Pueden haber' + past participle for past possibility. Potential completion prevented by late start."
      },
      {
        id: "modal_9",
        question: "Deberías de _____ más cuidado con tus pertenencias personales valiosas.",
        translation: "(You should be more careful with your valuable personal belongings)",
        options: ["tener", "haber", "ser", "estar"],
        correct: "tener",
        explanation: "'Deber de' can express advice. Though 'deber' alone is more common, both work."
      },
      {
        id: "modal_10",
        question: "No podemos _____ esperado un resultado mejor dadas las circunstancias.",
        translation: "(We couldn't have expected a better result given the circumstances)",
        options: ["haber", "de", "que", "habernos"],
        correct: "haber",
        explanation: "'No poder haber' + past participle. Impossibility of past expectation."
      },
      {
        id: "modal_11",
        question: "Querría _____ una consulta sobre los servicios que ustedes ofrecen.",
        translation: "(I would like to make an inquiry about the services you offer)",
        options: ["hacer", "tener", "dar", "poner"],
        correct: "hacer",
        explanation: "'Querría hacer' very polite request form. Conditional 'querría' softer than 'quiero'."
      },
      {
        id: "modal_12",
        question: "Debiste _____ dicho la verdad desde el principio del asunto.",
        translation: "(You should have told the truth from the beginning of the matter)",
        options: ["haber", "de", "que", "haberte"],
        correct: "haber",
        explanation: "'Debiste haber' for strong past obligation. Criticism of past failure to act."
      },
      {
        id: "modal_13",
        question: "Pudiste _____ evitado todo este lío si hubieras sido más honesto.",
        translation: "(You could have avoided all this mess if you had been more honest)",
        options: ["haber", "de", "que", "haberte"],
        correct: "haber",
        explanation: "'Pudiste haber' for missed past opportunity. Avoidable problem due to dishonesty."
      },
      {
        id: "modal_14",
        question: "No quiso _____ sus verdaderos motivos para tomar esa decisión drástica.",
        translation: "(He didn't want to reveal his true motives for making that drastic decision)",
        options: ["revelar", "haber revelado", "que revelar", "revelando"],
        correct: "revelar",
        explanation: "'Querer' + infinitive for unwillingness. Preterite 'quiso' for specific refusal."
      },
      {
        id: "modal_15",
        question: "Habría _____ ayudarte más si me hubieras explicado mejor la situación.",
        translation: "(I would have been able to help you more if you had explained the situation better)",
        options: ["podido", "debido", "querido", "tenido"],
        correct: "podido",
        explanation: "'Habría podido' for past potential. Better explanation would have enabled more help."
      }
    ]
  },

  relative_clauses_advanced: {
    name: "Relative Clauses - Advanced",
    description: "Complex quien, cual, cuyo constructions",
    icon: Target,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "rel_adv_1",
        question: "El médico con _____ hablé ayer me recomendó cambiar mi dieta completamente.",
        translation: "(The doctor with whom I spoke yesterday recommended I change my diet completely)",
        options: ["quien", "el que", "que", "cual"],
        correct: "quien",
        explanation: "After prepositions referring to people, use 'quien/quienes'. Professional contexts need formal relative pronouns."
      },
      {
        id: "rel_adv_2",
        question: "La razón por _____ renuncié al trabajo era el ambiente tóxico laboral.",
        translation: "(The reason for which I resigned from the job was the toxic work environment)",
        options: ["la cual", "la que", "que", "quien"],
        correct: "la cual",
        explanation: "After 'por' with abstract feminine noun, 'la cual' or 'la que' work. 'Cual' is more formal."
      },
      {
        id: "rel_adv_3",
        question: "Esos son los colegas en _____ confío plenamente para este proyecto.",
        translation: "(Those are the colleagues in whom I fully trust for this project)",
        options: ["quienes", "los que", "que", "cuales"],
        correct: "quienes",
        explanation: "After preposition with plural people, use 'quienes'. Professional trust requires formal structure."
      },
      {
        id: "rel_adv_4",
        question: "La empresa para _____ trabajo ofrece excelentes beneficios a empleados.",
        translation: "(The company for which I work offers excellent benefits to employees)",
        options: ["la que", "la cual", "que", "quien"],
        correct: "la que",
        explanation: "After 'para' with organization, use 'la que/la cual'. Both are acceptable."
      },
      {
        id: "rel_adv_5",
        question: "El estudiante _____ trabajo recibió la nota más alta es mi mejor amigo.",
        translation: "(The student whose paper received the highest grade is my best friend)",
        options: ["cuyo", "que su", "del que", "de quien"],
        correct: "cuyo",
        explanation: "'Cuyo' means 'whose' and agrees with possessed thing. Here 'cuyo' (masculine) agrees with 'trabajo'."
      },
      {
        id: "rel_adv_6",
        question: "_____ más me impresionó fue su increíble dedicación al proyecto difícil.",
        translation: "(What impressed me most was his incredible dedication to the difficult project)",
        options: ["Lo que", "Que", "Cual", "Quien"],
        correct: "Lo que",
        explanation: "'Lo que' at sentence start means 'what'. Refers to abstract concept or whole idea."
      },
      {
        id: "rel_adv_7",
        question: "La manera en _____ resolvió el problema demostró su gran inteligencia.",
        translation: "(The way in which he solved the problem demonstrated his great intelligence)",
        options: ["la que", "que", "la cual", "como"],
        correct: "la que",
        explanation: "After 'manera' use 'en la que/la cual'. More formal than just 'como'."
      },
      {
        id: "rel_adv_8",
        question: "Aquellos _____ deseen participar deben inscribirse antes del viernes que viene.",
        translation: "(Those who wish to participate must register before next Friday)",
        options: ["que", "quienes", "cuales", "los que"],
        correct: "que",
        explanation: "'Aquellos que' for 'those who' in formal announcements. Simple 'que' after demonstrative."
      },
      {
        id: "rel_adv_9",
        question: "El edificio en _____ vivimos tiene más de cien años de antigüedad.",
        translation: "(The building in which we live is over one hundred years old)",
        options: ["el que", "que", "el cual", "donde"],
        correct: "el que",
        explanation: "After 'en' with buildings, use 'el que/el cual'. Though 'donde' also works."
      },
      {
        id: "rel_adv_10",
        question: "La profesora _____ clases son las más interesantes ganó un premio.",
        translation: "(The professor whose classes are the most interesting won an award)",
        options: ["cuyas", "que sus", "de quien", "de la que"],
        correct: "cuyas",
        explanation: "'Cuyas' (feminine plural) agrees with 'clases'. Possession relative pronoun must agree."
      },
      {
        id: "rel_adv_11",
        question: "Todo _____ necesitas para triunfar ya está dentro de ti mismo.",
        translation: "(Everything you need to succeed is already inside yourself)",
        options: ["lo que", "que", "cual", "quien"],
        correct: "lo que",
        explanation: "'Todo lo que' for 'everything that'. 'Lo que' required after 'todo'."
      },
      {
        id: "rel_adv_12",
        question: "Los documentos sin _____ no podemos proceder están en camino.",
        translation: "(The documents without which we cannot proceed are on their way)",
        options: ["los cuales", "los que", "que", "quienes"],
        correct: "los cuales",
        explanation: "After 'sin' with things, use 'los cuales/los que'. Formal business language."
      },
      {
        id: "rel_adv_13",
        question: "Esa es la chica de _____ te hablé tanto la semana pasada.",
        translation: "(That's the girl about whom I talked to you so much last week)",
        options: ["quien", "la que", "que", "cual"],
        correct: "quien",
        explanation: "After preposition referring to person, 'quien' is standard. Talking about someone specific."
      },
      {
        id: "rel_adv_14",
        question: "El momento en _____ tomé esa decisión cambió completamente mi vida.",
        translation: "(The moment in which I made that decision completely changed my life)",
        options: ["el que", "que", "el cual", "cuando"],
        correct: "el que",
        explanation: "Time moments use 'en el que/el cual'. Though 'cuando' works, 'en el que' is more formal."
      },
      {
        id: "rel_adv_15",
        question: "Personas _____ nunca han viajado al extranjero tienen visión limitada.",
        translation: "(People who have never traveled abroad have a limited vision)",
        options: ["que", "quienes", "las que", "cuales"],
        correct: "que",
        explanation: "'Que' simplest for restrictive clauses about people. Most natural choice."
      }
    ]
  },

  business_professional: {
    name: "Business and Professional Spanish",
    description: "Workplace and formal business contexts",
    icon: Briefcase,
    color: "from-slate-600 to-gray-700",
    level: "advanced",
    questions: [
      {
        id: "bus_1",
        question: "Tengo el placer de _____ que su solicitud ha sido aprobada.",
        translation: "(I have the pleasure of informing you that your application has been approved)",
        options: ["comunicarle", "decirle", "avisarle", "contarle"],
        correct: "comunicarle",
        explanation: "'Comunicar' most formal for business announcements. Professional correspondence requires formal verbs."
      },
      {
        id: "bus_2",
        question: "Le _____ adjunto el informe trimestral que me solicitó la semana pasada.",
        translation: "(I'm sending you attached the quarterly report you requested last week)",
        options: ["envío", "mando", "remito", "doy"],
        correct: "envío",
        explanation: "'Enviar adjunto' standard business phrase. Professional email language."
      },
      {
        id: "bus_3",
        question: "Agradeceríamos que nos _____ su respuesta antes del próximo viernes.",
        translation: "(We would appreciate if you could give us your response before next Friday)",
        options: ["hiciera llegar", "diera", "enviara", "mandara"],
        correct: "hiciera llegar",
        explanation: "'Hacer llegar' very formal business expression. Ultra-professional request phrasing."
      },
      {
        id: "bus_4",
        question: "Nos _____ en informarle que el pedido ha sido procesado exitosamente.",
        translation: "(We are pleased to inform you the order has been successfully processed)",
        options: ["complace", "gusta", "alegra", "satisface"],
        correct: "complace",
        explanation: "'Complacer' very formal pleasure expression. Business satisfaction statement."
      },
      {
        id: "bus_5",
        question: "Le ruego que _____ la presente como confirmación oficial del acuerdo.",
        translation: "(I ask you to consider this letter as official confirmation of the agreement)",
        options: ["considere", "considera", "considerará", "consideró"],
        correct: "considere",
        explanation: "'Rogar que' formal request with subjunctive. Business letters use 'rogar' for polite asking."
      },
      {
        id: "bus_6",
        question: "Me _____ poner a su disposición para cualquier consulta adicional.",
        translation: "(I am pleased to make myself available for any additional questions)",
        options: ["es grato", "gusta", "alegra", "complace"],
        correct: "es grato",
        explanation: "'Me es grato' ultra-formal pleasure phrase. Business correspondence closing."
      },
      {
        id: "bus_7",
        question: "Quedamos _____ la espera de sus gratas noticias al respecto.",
        translation: "(We remain awaiting your favorable news regarding this matter)",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "'Quedar a la espera' formal waiting expression. Business letter standard closing."
      },
      {
        id: "bus_8",
        question: "Sin otro _____, aprovecho la ocasión para saludarle atentamente.",
        translation: "(Without further matter, I take this opportunity to greet you respectfully)",
        options: ["particular", "asunto", "tema", "motivo"],
        correct: "particular",
        explanation: "'Sin otro particular' archaic formal closing. Traditional business letter ending."
      },
      {
        id: "bus_9",
        question: "Nos _____ mucho en disculparnos por las molestias ocasionadas.",
        translation: "(We are very sorry to apologize for the inconveniences caused)",
        options: ["complacemos", "place", "gusta", "satisface"],
        correct: "complacemos",
        explanation: "'Nos complacemos en' formal apology introduction. Professional regret expression."
      },
      {
        id: "bus_10",
        question: "Tengo el honor de _____ a la inauguración de nuestras nuevas oficinas.",
        translation: "(I have the honor of inviting you to the inauguration of our new offices)",
        options: ["invitarle", "invitarlo", "convidarle", "llamarle"],
        correct: "invitarle",
        explanation: "'Invitar' formal for business events. 'Le' maintains formal tone."
      },
      {
        id: "bus_11",
        question: "Le _____ que se comunique con nuestro departamento de atención al cliente.",
        translation: "(We request that you contact our customer service department)",
        options: ["rogamos", "pedimos", "solicitamos", "suplicamos"],
        correct: "rogamos",
        explanation: "'Rogar' most polite formal request. Business courtesy language."
      },
      {
        id: "bus_12",
        question: "Me _____ en agradecerle su valiosa colaboración en este proyecto importante.",
        translation: "(I am pleased to thank you for your valuable collaboration on this important project)",
        options: ["complazco", "gusta", "alegro", "satisface"],
        correct: "complazco",
        explanation: "'Me complazco en' ultra-formal gratitude. Professional thank you phrasing."
      },
      {
        id: "bus_13",
        question: "_____ a su conocimiento que la reunión ha sido pospuesta.",
        translation: "(We bring to your attention that the meeting has been postponed)",
        options: ["Ponemos", "Hacemos", "Traemos", "Damos"],
        correct: "Ponemos",
        explanation: "'Poner a su conocimiento' formal notification phrase. Business announcement language."
      },
      {
        id: "bus_14",
        question: "Le saluda _____ y queda a su entera disposición para servir.",
        translation: "(Greets you respectfully and remains at your complete disposal to serve)",
        options: ["atentamente", "cordialmente", "respetuosamente", "sinceramente"],
        correct: "atentamente",
        explanation: "'Atentamente' most formal business greeting. Standard professional salutation."
      },
      {
        id: "bus_15",
        question: "_____ acusar recibo de su comunicación del pasado día quince.",
        translation: "(We acknowledge receipt of your communication of the fifteenth)",
        options: ["Acusamos", "Damos", "Hacemos", "Tenemos"],
        correct: "Acusamos",
        explanation: "'Acusar recibo' archaic formal acknowledgment. Traditional business confirmation phrase."
      }
    ]
  },

  literary_subjunctive: {
    name: "Literary Subjunctive",
    description: "Subjunctive in literature and formal writing",
    icon: BookOpen,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "lit_1",
        question: "Ojalá que este sueño maravilloso nunca _____.",
        translation: "(If only this wonderful dream would never end)",
        options: ["termine", "termina", "terminará", "terminó"],
        correct: "termine",
        explanation: "'Ojalá que' always triggers subjunctive. Expressing fervent wishes about present or future."
      },
      {
        id: "lit_2",
        question: "Tal vez _____ la respuesta que buscamos en lugares inesperados.",
        translation: "(Perhaps we'll find the answer we seek in unexpected places)",
        options: ["encontremos", "encontramos", "encontraremos", "encontrábamos"],
        correct: "encontremos",
        explanation: "'Tal vez' can use subjunctive or indicative. Subjunctive emphasizes uncertainty more."
      },
      {
        id: "lit_3",
        question: "Quizás _____ demasiado tarde para cambiar el destino que nos espera.",
        translation: "(Perhaps it's too late to change the destiny that awaits us)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Quizás' with subjunctive emphasizes doubt. Literary uncertainty prefers subjunctive."
      },
      {
        id: "lit_4",
        question: "Aunque me _____ la vida entera, jamás olvidaré ese momento mágico.",
        translation: "(Even if I live my whole life, I'll never forget that magical moment)",
        options: ["dure", "dura", "durará", "duró"],
        correct: "dure",
        explanation: "'Aunque' with hypothetical concession uses subjunctive. Literary emphasis on hypothetical duration."
      },
      {
        id: "lit_5",
        question: "Quienquiera que _____, tendrá que enfrentar las graves consecuencias.",
        translation: "(Whoever it may be, will have to face the serious consequences)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "'Quienquiera que' (whoever) always requires subjunctive. Unknown identity needs subjunctive."
      },
      {
        id: "lit_6",
        question: "Dondequiera que _____, mi corazón siempre estará contigo en espíritu.",
        translation: "(Wherever you go, my heart will always be with you in spirit)",
        options: ["vayas", "vas", "irás", "fuiste"],
        correct: "vayas",
        explanation: "'Dondequiera que' (wherever) requires subjunctive. Indefinite location needs this mood."
      },
      {
        id: "lit_7",
        question: "Acaso _____ la verdad escondida detrás de todas estas mentiras.",
        translation: "(Perhaps we'll discover the truth hidden behind all these lies)",
        options: ["descubramos", "descubrimos", "descubriremos", "descubríamos"],
        correct: "descubramos",
        explanation: "'Acaso' literary equivalent of 'quizás'. Subjunctive preferred in literature."
      },
      {
        id: "lit_8",
        question: "Sea como _____, debemos aceptar las circunstancias que la vida nos presenta.",
        translation: "(Be that as it may, we must accept the circumstances life presents us)",
        options: ["fuere", "sea", "es", "será"],
        correct: "fuere",
        explanation: "'Sea como fuere' archaic literary phrase. Fixed expression meaning 'be that as it may'."
      },
      {
        id: "lit_9",
        question: "Que yo _____, nadie ha logrado resolver este antiguo misterio todavía.",
        translation: "(As far as I know, nobody has managed to solve this ancient mystery yet)",
        options: ["sepa", "sé", "sabré", "supe"],
        correct: "sepa",
        explanation: "'Que yo sepa' for 'as far as I know'. Personal knowledge limitation expression."
      },
      {
        id: "lit_10",
        question: "Por mucho que _____, la felicidad verdadera siempre parecía inalcanzable.",
        translation: "(However much he searched, true happiness always seemed unattainable)",
        options: ["buscara", "buscaba", "busca", "busque"],
        correct: "buscara",
        explanation: "'Por mucho que' with imperfect subjunctive in past narrative. Futile search in story."
      },
      {
        id: "lit_11",
        question: "Ojalá _____ sido diferente, pero ya no se puede cambiar el pasado.",
        translation: "(If only it had been different, but the past can no longer be changed)",
        options: ["hubiera", "habría", "haya", "ha"],
        correct: "hubiera",
        explanation: "'Ojalá' with pluperfect subjunctive for impossible past wishes. Regret about unchangeable past."
      },
      {
        id: "lit_12",
        question: "Cualquiera que _____ sus razones, no justifica ese comportamiento inaceptable.",
        translation: "(Whatever his reasons may be, it doesn't justify that unacceptable behavior)",
        options: ["sean", "son", "serán", "fueron"],
        correct: "sean",
        explanation: "'Cualquiera que' (whatever) requires subjunctive. Unknown or irrelevant reasons."
      },
      {
        id: "lit_13",
        question: "Aunque _____ esa batalla crucial, no perdieron la guerra final.",
        translation: "(Although they lost that crucial battle, they didn't lose the final war)",
        options: ["perdieron", "perdieran", "pierdan", "pierden"],
        correct: "perdieron",
        explanation: "'Aunque' with indicative states known fact. When concession is fact, use indicative."
      },
      {
        id: "lit_14",
        question: "Posiblemente _____ llegado ya a su destino final si no se hubieran perdido.",
        translation: "(They possibly would have already arrived at their final destination if they hadn't gotten lost)",
        options: ["habrían", "hubieran", "han", "habían"],
        correct: "habrían",
        explanation: "'Posiblemente' with conditional perfect for past possibility. Hypothetical past arrival."
      },
      {
        id: "lit_15",
        question: "Fuera lo que _____, nunca reveló su secreto más profundo a nadie.",
        translation: "(Whatever it was, he never revealed his deepest secret to anyone)",
        options: ["fuese", "fuera", "sea", "es"],
        correct: "fuese",
        explanation: "'Fuera lo que fuese/fuera' literary fixed expression. Alternative imperfect subjunctive form."
      }
    ]
  },

  colloquial_register: {
    name: "Colloquial Register",
    description: "Informal spoken Spanish patterns",
    icon: Users2,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    questions: [
      {
        id: "colloq_1",
        question: "¿_____? ¿Qué tal todo por tu barrio últimamente?",
        translation: "(What's up? How's everything in your neighborhood lately?)",
        options: ["Qué pasa", "Qué tal", "Cómo estás", "Qué hay"],
        correct: "Qué pasa",
        explanation: "'¿Qué pasa?' very casual greeting. Street-level informal Spanish."
      },
      {
        id: "colloq_2",
        question: "Estoy _____ de todo este asunto complicado que no termina nunca.",
        translation: "(I'm totally fed up with all this complicated matter that never ends)",
        options: ["hasta las narices", "harto", "cansado", "aburrido"],
        correct: "hasta las narices",
        explanation: "'Hasta las narices' strong colloquial expression. Extreme frustration in informal speech."
      },
      {
        id: "colloq_3",
        question: "Me _____ completamente cuando me dijeron que había ganado la lotería.",
        translation: "(I was completely shocked when they told me I had won the lottery)",
        options: ["quedé flipado", "sorprendí", "asombré", "impresioné"],
        correct: "quedé flipado",
        explanation: "'Quedarse flipado' very colloquial amazement. Youth slang for extreme surprise."
      },
      {
        id: "colloq_4",
        question: "Ese examen estaba _____, no entendí casi nada de las preguntas.",
        translation: "(That exam was super hard, I didn't understand almost any of the questions)",
        options: ["tirado", "difícil", "complicado", "duro"],
        correct: "tirado",
        explanation: "'Estar tirado' colloquial for very difficult. Informal expression for extreme difficulty (ironic meaning)."
      },
      {
        id: "colloq_5",
        question: "¿Te _____ si vamos al cine esta noche en vez de quedarnos?",
        translation: "(Do you feel like going to the movies tonight instead of staying in?)",
        options: ["apetece", "gusta", "quieres", "deseas"],
        correct: "apetece",
        explanation: "'¿Te apetece?' casual for 'feel like'. Common in conversational Spanish."
      },
      {
        id: "colloq_6",
        question: "No me _____ ni un pelo de lo que dice ese político corrupto.",
        translation: "(I don't believe even a bit of what that corrupt politician says)",
        options: ["creo", "fío", "confío", "pienso"],
        correct: "creo",
        explanation: "'No creer ni un pelo' colloquial total disbelief. Informal complete skepticism."
      },
      {
        id: "colloq_7",
        question: "Está _____ que ganemos el partido después de jugar tan mal.",
        translation: "(It's impossible we'll win the game after playing so badly)",
        options: ["tirado", "difícil", "imposible", "complicado"],
        correct: "tirado",
        explanation: "'Estar tirado' can mean impossible (colloquial). Informal way to say very unlikely."
      },
      {
        id: "colloq_8",
        question: "Me da _____ tener que pedirle dinero prestado a mi padre otra vez.",
        translation: "(It embarrasses me to have to borrow money from my father again)",
        options: ["corte", "vergüenza", "pena", "pudor"],
        correct: "corte",
        explanation: "'Dar corte' colloquial embarrassment in Spain. Informal shame expression."
      },
      {
        id: "colloq_9",
        question: "Ese tipo me cae _____, siempre está criticando a todo el mundo.",
        translation: "(I can't stand that guy, he's always criticizing everyone)",
        options: ["fatal", "mal", "gordo", "pesado"],
        correct: "fatal",
        explanation: "'Caer fatal' strong dislike. More intense than 'caer mal'."
      },
      {
        id: "colloq_10",
        question: "¡Qué _____ de fiesta! Me divertí muchísimo con todos mis amigos.",
        translation: "(What an awesome party! I had so much fun with all my friends)",
        options: ["pasada", "buena", "genial", "estupenda"],
        correct: "pasada",
        explanation: "'Qué pasada de' colloquial for amazing. Youth slang for excellent."
      },
      {
        id: "colloq_11",
        question: "Esto está _____, no hay manera de resolverlo fácilmente.",
        translation: "(This is screwed up, there's no way to solve it easily)",
        options: ["chungo", "mal", "difícil", "complicado"],
        correct: "chungo",
        explanation: "'Estar chungo' colloquial for problematic. Informal expression for bad situation."
      },
      {
        id: "colloq_12",
        question: "Me _____ mogollón tu nuevo coche deportivo tan elegante.",
        translation: "(I really like your elegant new sports car a lot)",
        options: ["mola", "gusta", "encanta", "fascina"],
        correct: "mola",
        explanation: "'Molar' colloquial for liking. Youth slang equivalent of 'gustar'."
      },
      {
        id: "colloq_13",
        question: "Ese restaurante está _____, tienen la mejor comida de toda la ciudad.",
        translation: "(That restaurant is awesome, they have the best food in the entire city)",
        options: ["genial", "bueno", "excelente", "estupendo"],
        correct: "genial",
        explanation: "'Estar genial' colloquial excellence. Informal high praise."
      },
      {
        id: "colloq_14",
        question: "No tengo ni _____ de lo que está hablando ese profesor aburrido.",
        translation: "(I don't have the slightest idea what that boring professor is talking about)",
        options: ["pajolera idea", "idea", "pista", "noción"],
        correct: "pajolera idea",
        explanation: "'Ni pajolera idea' emphatic colloquial ignorance. Strong informal expression."
      },
      {
        id: "colloq_15",
        question: "Me _____ mogollón cuando la gente llega tarde sin avisar antes.",
        translation: "(It really bugs me when people arrive late without warning first)",
        options: ["mosquea", "molesta", "enfada", "irrita"],
        correct: "mosquea",
        explanation: "'Mosquear' colloquial for annoying. Informal irritation expression."
      }
    ]
  },

  academic_formal: {
    name: "Academic and Formal Register",
    description: "Scholarly and formal written Spanish",
    icon: BookOpen,
    color: "from-indigo-600 to-blue-700",
    level: "advanced",
    questions: [
      {
        id: "acad_1",
        question: "Cabe _____ que los resultados pueden variar según las circunstancias.",
        translation: "(It should be noted that results may vary according to circumstances)",
        options: ["señalar", "decir", "mencionar", "indicar"],
        correct: "señalar",
        explanation: "'Cabe señalar' formal academic phrase. Scholarly writing uses 'cabe' for noting."
      },
      {
        id: "acad_2",
        question: "A _____ de esta investigación, se puede concluir lo siguiente.",
        translation: "(Based on this research, the following can be concluded)",
        options: ["raíz", "base", "partir", "través"],
        correct: "raíz",
        explanation: "'A raíz de' formal for 'based on'. Academic foundation statement."
      },
      {
        id: "acad_3",
        question: "_____ destacar la importancia fundamental de este descubrimiento científico.",
        translation: "(It is worth highlighting the fundamental importance of this scientific discovery)",
        options: ["Cabe", "Debe", "Puede", "Hay que"],
        correct: "Cabe",
        explanation: "'Cabe destacar' academic emphasis phrase. Scholarly highlighting of significance."
      },
      {
        id: "acad_4",
        question: "En _____ a los datos presentados, se observa una tendencia clara.",
        translation: "(Regarding the data presented, a clear trend is observed)",
        options: ["cuanto", "relación", "referencia", "cuestion"],
        correct: "cuanto",
        explanation: "'En cuanto a' formal for 'regarding'. Academic transitional phrase."
      },
      {
        id: "acad_5",
        question: "Se _____ concluir que la hipótesis inicial era correcta después de todo.",
        translation: "(It can be concluded that the initial hypothesis was correct after all)",
        options: ["puede", "debe", "tiene que", "ha de"],
        correct: "puede",
        explanation: "'Se puede concluir' formal conclusion statement. Academic result presentation."
      },
      {
        id: "acad_6",
        question: "_____ la evidencia presentada, resulta claro que se necesitan más estudios.",
        translation: "(Given the evidence presented, it's clear more studies are needed)",
        options: ["Dada", "Con", "Según", "Por"],
        correct: "Dada",
        explanation: "'Dada' (given) formal academic conditional. Scholarly reasoning based on evidence."
      },
      {
        id: "acad_7",
        question: "Los resultados _____ a demostrar la validez de nuestra teoría propuesta.",
        translation: "(The results tend to demonstrate the validity of our proposed theory)",
        options: ["tienden", "suelen", "pueden", "deben"],
        correct: "tienden",
        explanation: "'Tender a' academic for showing tendency. Scholarly analysis of patterns."
      },
      {
        id: "acad_8",
        question: "_____ resaltar que este método tiene limitaciones que deben considerarse.",
        translation: "(It should be emphasized this method has limitations that must be considered)",
        options: ["Conviene", "Debe", "Puede", "Tiene que"],
        correct: "Conviene",
        explanation: "'Conviene resaltar' formal academic advisement. Scholarly cautionary statement."
      },
      {
        id: "acad_9",
        question: "Los hallazgos _____ en concordancia con estudios previos realizados.",
        translation: "(The findings are in agreement with previous studies conducted)",
        options: ["están", "son", "se encuentran", "resultan"],
        correct: "están",
        explanation: "'Estar en concordancia' formal agreement phrase. Academic alignment statement."
      },
      {
        id: "acad_10",
        question: "Cabe _____ la posibilidad de que existan factores no considerados anteriormente.",
        translation: "(The possibility exists that there are factors not previously considered)",
        options: ["contemplar", "pensar", "ver", "mirar"],
        correct: "contemplar",
        explanation: "'Cabe contemplar' academic consideration phrase. Scholarly openness to alternatives."
      },
      {
        id: "acad_11",
        question: "En _____ de lo anterior, se propone una nueva metodología de análisis.",
        translation: "(In view of the foregoing, a new analysis methodology is proposed)",
        options: ["virtud", "base", "función", "razón"],
        correct: "virtud",
        explanation: "'En virtud de' formal for 'in view of'. Legal and academic reasoning."
      },
      {
        id: "acad_12",
        question: "Los datos _____ la necesidad de realizar investigaciones adicionales profundas.",
        translation: "(The data suggest the need to conduct additional in-depth research)",
        options: ["sugieren", "indican", "muestran", "demuestran"],
        correct: "sugieren",
        explanation: "'Sugerir' academic for tentative conclusions. Scholarly caution about implications."
      },
      {
        id: "acad_13",
        question: "_____ mencionar que la muestra utilizada podría no ser representativa.",
        translation: "(It's worth mentioning the sample used might not be representative)",
        options: ["Cabe", "Debe", "Puede", "Conviene"],
        correct: "Cabe",
        explanation: "'Cabe mencionar' academic caveat phrase. Scholarly acknowledgment of limitations."
      },
      {
        id: "acad_14",
        question: "Se _____ por tanto que se requiere más investigación en este campo.",
        translation: "(It follows therefore that more research is required in this field)",
        options: ["desprende", "deduce", "concluye", "infiere"],
        correct: "desprende",
        explanation: "'Se desprende' formal for 'it follows'. Academic logical conclusion."
      },
      {
        id: "acad_15",
        question: "A _____ de lo expuesto, podemos afirmar con certeza razonable que...",
        translation: "(In light of what has been presented, we can state with reasonable certainty that...)",
        options: ["tenor", "base", "raíz", "partir"],
        correct: "tenor",
        explanation: "'A tenor de' very formal for 'in light of'. High-level academic phrasing."
      }
    ]
  }
};

export default part16Categories;