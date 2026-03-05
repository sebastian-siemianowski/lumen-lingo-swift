
/**
 * ENGLISH → SPANISH GRAMMAR - PART 15
 * 5 advanced categories, 15 questions each - Complex real-world sentences
 */

import { Heart, MessageCircle, TrendingUp, Repeat2, Clock } from "lucide-react";

export const part15Categories = {
  subjunctive_emotion_advanced: {
    name: "Subjunctive with Emotions - Advanced",
    description: "Complex emotional expressions and reactions",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "emo_adv_1",
        question: "Me alegro muchísimo de que finalmente _____ conseguir el trabajo.",
        translation: "(I'm very happy that you finally managed to get the job)",
        options: ["hayas conseguido", "has conseguido", "consiguieras", "conseguiste"],
        correct: "hayas conseguido",
        explanation: "Present emotion about completed past uses present perfect subjunctive. Joy about prior achievement requires this form."
      },
      {
        id: "emo_adv_2",
        question: "Es una pena que no _____ venir con nosotros al concierto anoche.",
        translation: "(It's a shame you couldn't come with us to the concert last night)",
        options: ["pudieras", "podías", "podrías", "puedes"],
        correct: "pudieras",
        explanation: "Present regret about past uses imperfect subjunctive. Pity about past inability requires past subjunctive."
      },
      {
        id: "emo_adv_3",
        question: "Me molesta mucho que siempre _____ tarde a nuestras reuniones.",
        translation: "(It bothers me a lot that you always arrive late to our meetings)",
        options: ["llegues", "llegas", "llegarás", "llegabas"],
        correct: "llegues",
        explanation: "Annoyance about repeated action triggers subjunctive. Present irritation about habitual behavior."
      },
      {
        id: "emo_adv_4",
        question: "Temía profundamente que mi familia _____ enterado de mi secreto.",
        translation: "(I deeply feared my family had found out about my secret)",
        options: ["se hubiera", "se había", "se haya", "se ha"],
        correct: "se hubiera",
        explanation: "Past fear about possible prior discovery uses pluperfect subjunctive. Fear in past about earlier event."
      },
      {
        id: "emo_adv_5",
        question: "Es increíble que nadie _____ cuenta del error tan obvio antes.",
        translation: "(It's incredible that nobody noticed the such obvious error before)",
        options: ["se diera", "se dio", "se da", "se dé"],
        correct: "se diera",
        explanation: "Present amazement about past oversight uses imperfect subjunctive. Surprise about past lack of noticing."
      },
      {
        id: "emo_adv_6",
        question: "Siento muchísimo que _____ tenido que pasar por esa situación difícil.",
        translation: "(I'm very sorry you had to go through that difficult situation)",
        options: ["hayas", "has", "hubieras", "habías"],
        correct: "hayas",
        explanation: "Present sorrow about past experience uses present perfect subjunctive. Sympathy for completed suffering."
      },
      {
        id: "emo_adv_7",
        question: "Me sorprende que todavía no _____ respondido a mi mensaje urgente.",
        translation: "(It surprises me you still haven't responded to my urgent message)",
        options: ["hayas", "has", "hubieras", "habías"],
        correct: "hayas",
        explanation: "Surprise about lack of completion uses present perfect subjunctive. Astonishment at non-action."
      },
      {
        id: "emo_adv_8",
        question: "Estoy encantado de que tú _____ participar en nuestro proyecto importante.",
        translation: "(I'm delighted that you can participate in our important project)",
        options: ["puedas", "puedes", "podrás", "podías"],
        correct: "puedas",
        explanation: "Delight about capability triggers subjunctive. Positive emotion about ability uses subjunctive."
      },
      {
        id: "emo_adv_9",
        question: "Me preocupa que ellos no _____ tomando este asunto con la seriedad necesaria.",
        translation: "(It worries me they're not taking this matter with the necessary seriousness)",
        options: ["estén", "están", "estarán", "estaban"],
        correct: "estén",
        explanation: "Worry about current situation triggers subjunctive. Concern about ongoing behavior."
      },
      {
        id: "emo_adv_10",
        question: "Es emocionante que finalmente _____ a realizar nuestro sueño compartido.",
        translation: "(It's exciting we're finally going to fulfill our shared dream)",
        options: ["vayamos", "vamos", "iremos", "íbamos"],
        correct: "vayamos",
        explanation: "Excitement about future plan triggers subjunctive. Emotional reaction to anticipated action."
      },
      {
        id: "emo_adv_11",
        question: "Lamento profundamente que las circunstancias no nos _____ reunir antes.",
        translation: "(I deeply regret the circumstances didn't allow us to meet earlier)",
        options: ["permitieran", "permitieron", "permitan", "permiten"],
        correct: "permitieran",
        explanation: "Present regret about past prevention uses imperfect subjunctive. Sorrow about missed opportunity."
      },
      {
        id: "emo_adv_12",
        question: "Me da rabia que siempre _____ excusas en lugar de admitir tus errores.",
        translation: "(It makes me angry you always invent excuses instead of admitting your mistakes)",
        options: ["inventes", "inventas", "inventarás", "inventabas"],
        correct: "inventes",
        explanation: "'Dar rabia' triggers subjunctive for anger cause. Frustration about habitual behavior."
      },
      {
        id: "emo_adv_13",
        question: "Es triste que tantas personas _____ sin hogar en ciudades ricas.",
        translation: "(It's sad that so many people are homeless in wealthy cities)",
        options: ["estén", "están", "estarán", "estaban"],
        correct: "estén",
        explanation: "Sadness about current reality triggers subjunctive. Emotional reaction to unfortunate fact."
      },
      {
        id: "emo_adv_14",
        question: "Me fascinó que ella _____ cinco idiomas con tanta fluidez natural.",
        translation: "(It fascinated me that she spoke five languages with such natural fluency)",
        options: ["hablara", "hablaba", "habla", "hable"],
        correct: "hablara",
        explanation: "Past fascination about simultaneous ability uses imperfect subjunctive. Amazement in past about concurrent skill."
      },
      {
        id: "emo_adv_15",
        question: "Espero sinceramente que todo _____ salido bien en tu entrevista importante.",
        translation: "(I sincerely hope everything went well in your important interview)",
        options: ["haya", "ha", "hubiera", "había"],
        correct: "haya",
        explanation: "Present hope about past outcome uses present perfect subjunctive. Hoping for successful past event."
      }
    ]
  },

  indirect_commands: {
    name: "Indirect Commands & Suggestions",
    description: "Que + subjunctive for third person commands",
    icon: MessageCircle,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "indir_1",
        question: "¡Que _____ buen viaje y que lo disfruten al máximo!",
        translation: "(Have a good trip and enjoy it to the fullest!)",
        options: ["tengan", "tienen", "tendrán", "tuvieron"],
        correct: "tengan",
        explanation: "'Que + subjunctive' for indirect wishes to third person. Wishing for others uses subjunctive."
      },
      {
        id: "indir_2",
        question: "¡Que _____ mucha suerte en su examen final de mañana!",
        translation: "(Good luck on your final exam tomorrow!)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Que tengas suerte' standard luck wish. Indirect command wishing fortune."
      },
      {
        id: "indir_3",
        question: "¡Que lo _____ muy bien en su nueva aventura profesional!",
        translation: "(May they do very well in their new professional adventure!)",
        options: ["pasen", "pasan", "pasarán", "pasaron"],
        correct: "pasen",
        explanation: "'Que + subjunctive' for wishing well to others. Third person well-wishes."
      },
      {
        id: "indir_4",
        question: "¡Que _____ a casa sano y salvo después del viaje largo!",
        translation: "(May he arrive home safe and sound after the long trip!)",
        options: ["llegue", "llega", "llegará", "llegó"],
        correct: "llegue",
        explanation: "Indirect wish for safe arrival uses subjunctive. Hoping for someone's safe journey."
      },
      {
        id: "indir_5",
        question: "¡Que _____ cumpleaños muy feliz rodeado de tu familia!",
        translation: "(Have a very happy birthday surrounded by your family!)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Que tengas' birthday wish is standard. Celebration wishes use subjunctive."
      },
      {
        id: "indir_6",
        question: "¡Que Dios te _____ siempre en todos tus emprendimientos!",
        translation: "(May God bless you always in all your endeavors!)",
        options: ["bendiga", "bendice", "bendecirá", "bendijo"],
        correct: "bendiga",
        explanation: "Religious blessings use subjunctive after 'que'. Divine wishes require subjunctive."
      },
      {
        id: "indir_7",
        question: "¡Que se _____ pronto de su enfermedad y vuelva al trabajo!",
        translation: "(May she recover soon from her illness and return to work!)",
        options: ["mejore", "mejora", "mejorará", "mejoró"],
        correct: "mejore",
        explanation: "Health recovery wishes use subjunctive. Hoping for someone's healing."
      },
      {
        id: "indir_8",
        question: "¡Que no _____ nunca lo importantes que son para nosotros!",
        translation: "(May they never forget how important they are to us!)",
        options: ["olviden", "olvidan", "olvidarán", "olvidaron"],
        correct: "olviden",
        explanation: "Negative indirect command uses subjunctive. Wishing against forgetting."
      },
      {
        id: "indir_9",
        question: "¡Que _____ todos sus sueños más grandes en la vida!",
        translation: "(May all your biggest dreams in life come true!)",
        options: ["se cumplan", "se cumplen", "se cumplirán", "se cumplieron"],
        correct: "se cumplan",
        explanation: "Wishes for dream fulfillment use subjunctive. Hoping for realization of aspirations."
      },
      {
        id: "indir_10",
        question: "¡Que te _____ muy bien el nuevo trabajo que acabas de empezar!",
        translation: "(May the new job you just started go very well for you!)",
        options: ["vaya", "va", "irá", "fue"],
        correct: "vaya",
        explanation: "'Que te vaya bien' standard well-wishing. Success wishes use subjunctive."
      },
      {
        id: "indir_11",
        question: "¡Que _____ con mucha salud y felicidad por muchos años más!",
        translation: "(May you live with great health and happiness for many more years!)",
        options: ["vivas", "vives", "vivirás", "viviste"],
        correct: "vivas",
        explanation: "Longevity wishes use subjunctive. Hoping for long healthy life."
      },
      {
        id: "indir_12",
        question: "¡Que el próximo año _____ mejor que este para todos nosotros!",
        translation: "(May next year be better than this one for all of us!)",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "New year wishes use subjunctive. Hoping for better future."
      },
      {
        id: "indir_13",
        question: "¡Que les _____ todo muy bien en su mudanza a la nueva ciudad!",
        translation: "(May everything go very well for them in their move to the new city!)",
        options: ["vaya", "va", "irá", "fue"],
        correct: "vaya",
        explanation: "Wishing success for others' endeavors uses subjunctive. Third person well-wishes."
      },
      {
        id: "indir_14",
        question: "¡Que _____ siempre el amor verdadero en tu corazón!",
        translation: "(May true love always remain in your heart!)",
        options: ["permanezca", "permanece", "permanecerá", "permaneció"],
        correct: "permanezca",
        explanation: "Romantic wishes use subjunctive. Hoping for lasting love."
      },
      {
        id: "indir_15",
        question: "¡Que nadie te _____ nunca apagar tu luz interior brillante!",
        translation: "(May nobody ever make you dim your bright inner light!)",
        options: ["haga", "hace", "hará", "hizo"],
        correct: "haga",
        explanation: "Protective wishes against harm use subjunctive. Hoping against negative influence."
      }
    ]
  },

  progressive_forms_advanced: {
    name: "Progressive Forms - Advanced",
    description: "Complex continuous tense constructions",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "prog_adv_1",
        question: "Llevo más de dos horas _____ este informe complicado sin parar.",
        translation: "(I've been writing this complicated report for over two hours non-stop)",
        options: ["escribiendo", "escrito", "escribir", "escribo"],
        correct: "escribiendo",
        explanation: "'Llevar + time + gerund' expresses duration of ongoing action. Emphasizes time invested in continuing activity."
      },
      {
        id: "prog_adv_2",
        question: "Ella lleva tres años _____ español y ya habla con mucha fluidez.",
        translation: "(She's been studying Spanish for three years and already speaks very fluently)",
        options: ["estudiando", "estudiado", "estudiar", "estudia"],
        correct: "estudiando",
        explanation: "'Llevar + time + gerund' shows accumulated experience. Emphasizes ongoing learning over period."
      },
      {
        id: "prog_adv_3",
        question: "Voy _____ cada vez más frustrado con esta situación sin resolver.",
        translation: "(I'm getting more and more frustrated with this unresolved situation)",
        options: ["estando", "poniéndome", "sintiendo", "haciendo"],
        correct: "poniéndome",
        explanation: "'Ir + gerund' shows gradual change. Progressive increase in emotional state."
      },
      {
        id: "prog_adv_4",
        question: "Ando _____ un libro interesante sobre la historia de España.",
        translation: "(I'm in the process of reading an interesting book about Spanish history)",
        options: ["leyendo", "leído", "leer", "leo"],
        correct: "leyendo",
        explanation: "'Andar + gerund' emphasizes ongoing process. More casual than 'estar', shows activity in progress."
      },
      {
        id: "prog_adv_5",
        question: "Sigo _____ dificultades con este concepto matemático tan abstracto.",
        translation: "(I'm still having difficulties with this very abstract mathematical concept)",
        options: ["teniendo", "tenido", "tener", "tengo"],
        correct: "teniendo",
        explanation: "'Seguir + gerund' means continue doing. Emphasizes persistence of problem."
      },
      {
        id: "prog_adv_6",
        question: "Continúa _____ a pesar de todos los obstáculos en su camino.",
        translation: "(She continues trying despite all the obstacles in her path)",
        options: ["intentando", "intentado", "intentar", "intenta"],
        correct: "intentando",
        explanation: "'Continuar + gerund' emphasizes persistence. Ongoing effort despite difficulties."
      },
      {
        id: "prog_adv_7",
        question: "Vengo _____ este tema desde hace varios meses sin éxito.",
        translation: "(I've been investigating this topic for several months without success)",
        options: ["investigando", "investigado", "investigar", "investigo"],
        correct: "investigando",
        explanation: "'Venir + gerund' shows action coming from past to present. Extended ongoing research."
      },
      {
        id: "prog_adv_8",
        question: "El clima va _____ cada año más cálido en nuestro planeta.",
        translation: "(The climate is getting warmer every year on our planet)",
        options: ["estando", "poniéndose", "siendo", "haciendo"],
        correct: "poniéndose",
        explanation: "'Ir + gerund' for gradual ongoing change. Progressive climate change over time."
      },
      {
        id: "prog_adv_9",
        question: "Llevo todo el día _____ llamarte pero nunca contestas el teléfono.",
        translation: "(I've been trying to call you all day but you never answer the phone)",
        options: ["intentando", "intentado", "intentar", "intento"],
        correct: "intentando",
        explanation: "'Llevar + time + gerund' for repeated attempts. Emphasizes duration of unsuccessful tries."
      },
      {
        id: "prog_adv_10",
        question: "Anda _____ de que está enfermo para no ir al trabajo.",
        translation: "(He's going around saying he's sick so he doesn't have to go to work)",
        options: ["diciendo", "dicho", "decir", "dice"],
        correct: "diciendo",
        explanation: "'Andar + gerund' for spreading information. Ongoing talking/claiming."
      },
      {
        id: "prog_adv_11",
        question: "Vamos _____ cada vez mejores resultados con este nuevo método.",
        translation: "(We're getting better and better results with this new method)",
        options: ["obteniendo", "obtenido", "obtener", "obtenemos"],
        correct: "obteniendo",
        explanation: "'Ir + gerund' shows progressive improvement. Gradual increase in success."
      },
      {
        id: "prog_adv_12",
        question: "Quedó _____ en que nos encontraríamos mañana en la cafetería.",
        translation: "(We agreed that we would meet tomorrow at the café)",
        options: ["∅", "quedado", "quedar", "quedando"],
        correct: "∅",
        explanation: "'Quedar en' doesn't use gerund. Exception: this verb means 'agree' without progressive."
      },
      {
        id: "prog_adv_13",
        question: "Lleva años _____ en ese proyecto sin ver resultados concretos todavía.",
        translation: "(He's been working on that project for years without seeing concrete results yet)",
        options: ["trabajando", "trabajado", "trabajar", "trabaja"],
        correct: "trabajando",
        explanation: "'Llevar + years + gerund' emphasizes long duration. Extended time on incomplete project."
      },
      {
        id: "prog_adv_14",
        question: "Sigue _____ lo mismo de siempre sin cambiar nada en absoluto.",
        translation: "(You keep doing the same as always without changing anything at all)",
        options: ["haciendo", "hecho", "hacer", "haces"],
        correct: "haciendo",
        explanation: "'Seguir + gerund' for continued unchanged behavior. Persistent repetition."
      },
      {
        id: "prog_adv_15",
        question: "Vengo _____ este problema durante semanas y no encuentro solución.",
        translation: "(I've been thinking about this problem for weeks and can't find a solution)",
        options: ["pensando en", "pensado en", "pensar en", "pienso en"],
        correct: "pensando en",
        explanation: "'Venir + gerund' for extended pondering. Ongoing mental effort from past to now."
      }
    ]
  },

  conditional_perfect: {
    name: "Conditional Perfect",
    description: "Express what would have happened",
    icon: Clock,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "cond_perf_1",
        question: "Yo _____ ido contigo si hubiera tenido tiempo libre disponible.",
        translation: "(I would have gone with you if I had had free time available)",
        options: ["habría", "iría", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect expresses unrealized past possibility. What would have happened in different circumstances."
      },
      {
        id: "cond_perf_2",
        question: "Ella nunca _____ dicho eso si hubiera sabido toda la verdad.",
        translation: "(She never would have said that if she had known the whole truth)",
        options: ["habría", "diría", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect with 'nunca' for emphasis. Hypothetical past action prevented by lack of knowledge."
      },
      {
        id: "cond_perf_3",
        question: "¿Qué _____ hecho tú en mi lugar en esa situación tan complicada?",
        translation: "(What would you have done in my place in that very complicated situation?)",
        options: ["habrías", "harías", "hubieras", "habías"],
        correct: "habrías",
        explanation: "Conditional perfect in questions about hypothetical past. Asking about alternative actions."
      },
      {
        id: "cond_perf_4",
        question: "Ellos _____ llegado más temprano si no hubiera habido tanto tráfico.",
        translation: "(They would have arrived earlier if there hadn't been so much traffic)",
        options: ["habrían", "llegarían", "hubieran", "habían"],
        correct: "habrían",
        explanation: "Third person plural conditional perfect. Past hypothetical prevented by circumstances."
      },
      {
        id: "cond_perf_5",
        question: "Nosotros _____ comprado esa casa si hubiéramos tenido suficiente dinero.",
        translation: "(We would have bought that house if we had had enough money)",
        options: ["habríamos", "compraríamos", "hubiéramos", "habíamos"],
        correct: "habríamos",
        explanation: "First person plural conditional perfect. Missed opportunity due to financial constraint."
      },
      {
        id: "cond_perf_6",
        question: "Yo te _____ avisado antes si hubiera sabido que venías hoy.",
        translation: "(I would have warned you earlier if I had known you were coming today)",
        options: ["habría", "avisaría", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect for failed notification. Lack of information prevented action."
      },
      {
        id: "cond_perf_7",
        question: "Sin tu ayuda valiosa, nunca _____ terminado este proyecto a tiempo.",
        translation: "(Without your valuable help, I never would have finished this project on time)",
        options: ["habría", "terminaría", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect showing dependence on help. Acknowledging crucial assistance."
      },
      {
        id: "cond_perf_8",
        question: "Ella _____ estudiado medicina si sus padres no se hubieran opuesto.",
        translation: "(She would have studied medicine if her parents hadn't opposed it)",
        options: ["habría", "estudiaría", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect for unrealized career path. Parental opposition changed outcome."
      },
      {
        id: "cond_perf_9",
        question: "Ellos nunca _____ imaginado que el proyecto tendría tanto éxito.",
        translation: "(They never would have imagined the project would have so much success)",
        options: ["habrían", "imaginarían", "hubieran", "habían"],
        correct: "habrían",
        explanation: "Conditional perfect for surprise at outcome. Unexpected success beyond imagination."
      },
      {
        id: "cond_perf_10",
        question: "Yo _____ estado muy feliz de acompañarte en ese viaje inolvidable.",
        translation: "(I would have been very happy to accompany you on that unforgettable trip)",
        options: ["habría", "estaría", "hubiera", "estaba"],
        correct: "habría",
        explanation: "Conditional perfect for hypothetical past happiness. Missed opportunity for joy."
      },
      {
        id: "cond_perf_11",
        question: "¿Tú _____ tomado la misma decisión difícil en mi situación?",
        translation: "(Would you have made the same difficult decision in my situation?)",
        options: ["habrías", "tomarías", "hubieras", "habías"],
        correct: "habrías",
        explanation: "Question in conditional perfect seeks opinion. Asking about hypothetical past choice."
      },
      {
        id: "cond_perf_12",
        question: "Nosotros _____ preferido que nos consultaran antes de decidir todo.",
        translation: "(We would have preferred that they consult us before deciding everything)",
        options: ["habríamos", "preferiríamos", "hubiéramos", "habíamos"],
        correct: "habríamos",
        explanation: "Conditional perfect expressing unmet preference. Wish for different past consultation."
      },
      {
        id: "cond_perf_13",
        question: "Él _____ sido un gran músico si hubiera practicado más de joven.",
        translation: "(He would have been a great musician if he had practiced more when young)",
        options: ["habría", "sería", "hubiera", "era"],
        correct: "habría",
        explanation: "Conditional perfect for unrealized potential. Talent unrealized due to insufficient practice."
      },
      {
        id: "cond_perf_14",
        question: "Yo nunca _____ creído esta historia increíble si no la viera con mis ojos.",
        translation: "(I never would have believed this incredible story if I didn't see it with my eyes)",
        options: ["habría", "creería", "hubiera", "había"],
        correct: "habría",
        explanation: "Conditional perfect for skepticism overcome by evidence. Disbelief changed by witness."
      },
      {
        id: "cond_perf_15",
        question: "Ellas _____ venido a la fiesta si no hubieran estado tan ocupadas.",
        translation: "(They would have come to the party if they hadn't been so busy)",
        options: ["habrían", "vendrían", "hubieran", "habían"],
        correct: "habrían",
        explanation: "Conditional perfect for prevented attendance. Busyness stopped party participation."
      }
    ]
  },

  verb_gustar_extended: {
    name: "Gustar-type Verbs - Extended",
    description: "More verbs following backward structure",
    icon: Repeat2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "gust_ext_1",
        question: "A mi madre le _____ muchísimo las películas románticas de época.",
        translation: "(My mother loves period romantic movies very much)",
        options: ["encantan", "encanta", "gustan", "gusta"],
        correct: "encantan",
        explanation: "'Encantar' stronger than gustar, follows same pattern. Plural 'encantan' for plural 'películas'."
      },
      {
        id: "gust_ext_2",
        question: "Me _____ los pies después de caminar todo el día por la ciudad.",
        translation: "(My feet hurt after walking all day through the city)",
        options: ["duelen", "duele", "dolieron", "dolor"],
        correct: "duelen",
        explanation: "'Doler' follows gustar pattern with plural subject. Plural 'duelen' for plural 'pies'."
      },
      {
        id: "gust_ext_3",
        question: "A los estudiantes les _____ tres libros más para completar el curso.",
        translation: "(The students need three more books to complete the course)",
        options: ["faltan", "falta", "necesitan", "hace falta"],
        correct: "faltan",
        explanation: "'Faltar' follows gustar with plural subject. Plural 'faltan' for plural books needed."
      },
      {
        id: "gust_ext_4",
        question: "¿A ti te _____ bien estos pantalones nuevos que acabo de comprar?",
        translation: "(Do these new pants I just bought fit you well?)",
        options: ["quedan", "queda", "están", "son"],
        correct: "quedan",
        explanation: "'Quedar' for clothing fit follows gustar. Plural 'quedan' for plural pants."
      },
      {
        id: "gust_ext_5",
        question: "A nosotros nos _____ viajar durante el invierno por el clima frío.",
        translation: "(We feel like traveling during winter because of the cold weather)",
        options: ["apetece", "apetecen", "gusta", "gustan"],
        correct: "apetece",
        explanation: "'Apetecer' means appeal to/feel like. Singular for infinitive 'viajar'."
      },
      {
        id: "gust_ext_6",
        question: "Me _____ muy mal cuando la gente no cumple sus promesas.",
        translation: "(It rubs me the wrong way when people don't keep their promises)",
        options: ["cae", "caen", "sienta", "sientan"],
        correct: "cae",
        explanation: "'Caer mal' means dislike/rub wrong way. Negative feeling about people."
      },
      {
        id: "gust_ext_7",
        question: "A mi hermano le _____ todas las materias científicas en la escuela.",
        translation: "(All scientific subjects at school interest my brother)",
        options: ["interesan", "interesa", "gustan", "gusta"],
        correct: "interesan",
        explanation: "'Interesar' follows gustar pattern. Plural 'interesan' for plural subjects."
      },
      {
        id: "gust_ext_8",
        question: "¿Te _____ esos zapatos elegantes que vi en la tienda ayer?",
        translation: "(Do you like those elegant shoes I saw in the store yesterday?)",
        options: ["gustan", "gusta", "son", "están"],
        correct: "gustan",
        explanation: "'Gustar' with plural subject needs plural verb. 'Zapatos' plural requires 'gustan'."
      },
      {
        id: "gust_ext_9",
        question: "A mis padres les _____ mucho cocinar juntos los fines de semana.",
        translation: "(My parents really enjoy cooking together on weekends)",
        options: ["gusta", "gustan", "encanta", "encantan"],
        correct: "gusta",
        explanation: "'Gustar' with infinitive takes singular. Activity 'cocinar' is singular concept."
      },
      {
        id: "gust_ext_10",
        question: "Me _____ extraño que no hayas llamado en toda la semana.",
        translation: "(It seems strange to me you haven't called all week)",
        options: ["parece", "parecen", "es", "son"],
        correct: "parece",
        explanation: "'Parecer' follows gustar for seeming. Singular for que-clause."
      },
      {
        id: "gust_ext_11",
        question: "A ella le _____ fatal levantarse temprano durante la semana laboral.",
        translation: "(She hates getting up early during the work week)",
        options: ["sienta", "sientan", "cae", "caen"],
        correct: "sienta",
        explanation: "'Sentar fatal' means dislike intensely. Stronger negative than 'no gustar'."
      },
      {
        id: "gust_ext_12",
        question: "Nos _____ solo dos días para terminar completamente este proyecto grande.",
        translation: "(We have only two days left to completely finish this big project)",
        options: ["quedan", "queda", "faltan", "falta"],
        correct: "quedan",
        explanation: "'Quedar' for remaining time. Plural 'quedan' for plural days."
      },
      {
        id: "gust_ext_13",
        question: "Me _____ muchísimo esa actitud negativa que tienes últimamente.",
        translation: "(That negative attitude you have lately bothers me a lot)",
        options: ["molesta", "molestan", "fastidia", "fastidian"],
        correct: "molesta",
        explanation: "'Molestar' for annoyance. Singular 'molesta' for singular 'actitud'."
      },
      {
        id: "gust_ext_14",
        question: "A los niños les _____ jugar videojuegos durante horas sin parar.",
        translation: "(Children love playing video games for hours without stopping)",
        options: ["encanta", "encantan", "gusta", "gustan"],
        correct: "encanta",
        explanation: "'Encantar' with infinitive takes singular. Activity is singular concept."
      },
      {
        id: "gust_ext_15",
        question: "¿Te _____ bien ese nuevo compañero de trabajo que llegó?",
        translation: "(Do you like that new coworker who arrived?)",
        options: ["cae", "caen", "gusta", "gustan"],
        correct: "cae",
        explanation: "'Caer bien' for liking people. Person impression, singular 'cae'."
      }
    ]
  },

  contrast_pero_sino: {
    name: "Pero vs Sino - Advanced",
    description: "Complex contrasts and corrections",
    icon: Repeat2,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    questions: [
      {
        id: "pero_sino_1",
        question: "No quiero café _____ té verde con miel y limón.",
        translation: "(I don't want coffee but rather green tea with honey and lemon)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'Sino' corrects negative statement. After 'no quiero', use 'sino' to state what you do want."
      },
      {
        id: "pero_sino_2",
        question: "Es inteligente _____ muy perezoso para estudiar con dedicación.",
        translation: "(He's intelligent but very lazy to study with dedication)",
        options: ["pero", "sino", "sino que", "aunque"],
        correct: "pero",
        explanation: "'Pero' contrasts two qualities. Both adjectives can coexist, just contrasting."
      },
      {
        id: "pero_sino_3",
        question: "No solo es talentoso _____ también muy trabajador y disciplinado.",
        translation: "(Not only is he talented but also very hardworking and disciplined)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'No solo...sino también' pattern. Adding positive quality after initial one."
      },
      {
        id: "pero_sino_4",
        question: "No me llamó _____ me mandó un mensaje de texto largo.",
        translation: "(He didn't call me but rather sent me a long text message)",
        options: ["sino que", "sino", "pero", "si no"],
        correct: "sino que",
        explanation: "'Sino que' before conjugated verb. Correcting negative statement with verb clause."
      },
      {
        id: "pero_sino_5",
        question: "El examen era difícil _____ logré aprobar con buena nota.",
        translation: "(The exam was difficult but I managed to pass with a good grade)",
        options: ["pero", "sino", "sino que", "aunque"],
        correct: "pero",
        explanation: "'Pero' for contrasting statements. Difficulty doesn't contradict passing."
      },
      {
        id: "pero_sino_6",
        question: "No es francesa _____ belga, aunque habla perfectamente francés.",
        translation: "(She's not French but rather Belgian, although she speaks French perfectly)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'Sino' corrects nationality assumption. After negative identity, state correct one."
      },
      {
        id: "pero_sino_7",
        question: "Estudia mucho _____ no consigue sacar buenas calificaciones todavía.",
        translation: "(She studies a lot but doesn't manage to get good grades yet)",
        options: ["pero", "sino", "sino que", "aunque"],
        correct: "pero",
        explanation: "'Pero' shows contrary result. Effort doesn't guarantee success."
      },
      {
        id: "pero_sino_8",
        question: "No terminamos el proyecto ayer _____ lo terminaremos hoy sin falta.",
        translation: "(We didn't finish the project yesterday but rather we'll finish it today without fail)",
        options: ["sino que", "sino", "pero", "si no"],
        correct: "sino que",
        explanation: "'Sino que' with conjugated verb. Correcting when completion happened."
      },
      {
        id: "pero_sino_9",
        question: "Quiere viajar _____ no tiene suficiente dinero ahorrado ahora.",
        translation: "(He wants to travel but doesn't have enough money saved now)",
        options: ["pero", "sino", "sino que", "aunque"],
        correct: "pero",
        explanation: "'Pero' contrasts desire with reality. Wanting something despite obstacle."
      },
      {
        id: "pero_sino_10",
        question: "No es que no quiera ayudarte _____ que no tengo tiempo libre.",
        translation: "(It's not that I don't want to help you but rather that I don't have free time)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'No es que...sino que' corrects assumption. Clarifying true reason."
      },
      {
        id: "pero_sino_11",
        question: "Habla bien español _____ todavía comete algunos errores gramaticales.",
        translation: "(She speaks Spanish well but still makes some grammatical errors)",
        options: ["pero", "sino", "sino que", "aunque"],
        correct: "pero",
        explanation: "'Pero' acknowledges imperfection. Good ability doesn't mean perfection."
      },
      {
        id: "pero_sino_12",
        question: "No fue un error _____ una decisión consciente y bien pensada.",
        translation: "(It wasn't a mistake but rather a conscious and well-thought decision)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'Sino' corrects characterization. Defining something as opposite of assumption."
      },
      {
        id: "pero_sino_13",
        question: "No vino porque estaba enfermo _____ porque no tenía ganas.",
        translation: "(He didn't come not because he was sick but because he didn't feel like it)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'Sino' corrects reason given. True cause different from stated one."
      },
      {
        id: "pero_sino_14",
        question: "Trabajo mucho _____ también necesito tiempo para relajarme y descansar.",
        translation: "(I work a lot but I also need time to relax and rest)",
        options: ["pero", "sino", "sino que", "aunque"],
        correct: "pero",
        explanation: "'Pero' adds consideration. Work doesn't eliminate need for rest."
      },
      {
        id: "pero_sino_15",
        question: "No lo hago por obligación _____ porque realmente me gusta mucho.",
        translation: "(I don't do it out of obligation but rather because I really like it a lot)",
        options: ["sino", "pero", "si no", "aunque"],
        correct: "sino",
        explanation: "'Sino' corrects motivation. True reason opposes assumed one."
      }
    ]
  }
};

export default part15Categories;
