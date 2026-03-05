/**
 * ENGLISH → SPANISH GRAMMAR - PART 9
 * 5 categories, 15 questions each
 */

import { Circle, Waypoints, Blend, Split, Archive } from "lucide-react";

export const part9Categories = {
  double_negatives: {
    name: "Double Negatives",
    description: "Master Spanish negative constructions",
    icon: Circle,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    questions: [
      {
        id: "dn_1",
        question: "No veo a _____.",
        translation: "(I don't see anyone)",
        options: ["nadie", "alguien", "ninguno", "algo"],
        correct: "nadie",
        explanation: "Spanish requires double negative after 'no'. Use 'nadie' (nobody) after negative verb."
      },
      {
        id: "dn_2",
        question: "_____ viene nadie.",
        translation: "(Nobody is coming)",
        options: ["No", "Nunca", "Nada", "Ningún"],
        correct: "No",
        explanation: "Without 'no' before verb, 'nadie' can start sentence. With verb first, use 'no' + 'nadie'."
      },
      {
        id: "dn_3",
        question: "No tengo _____ que decir.",
        translation: "(I have nothing to say)",
        options: ["nada", "algo", "nadie", "ninguno"],
        correct: "nada",
        explanation: "After negative 'no tengo', use 'nada' (nothing). Double negative is required."
      },
      {
        id: "dn_4",
        question: "_____ he estado en París.",
        translation: "(I have never been to Paris)",
        options: ["Nunca", "No nunca", "Jamás no", "Nada"],
        correct: "Nunca",
        explanation: "'Nunca' at sentence start doesn't need 'no'. If after verb: 'No he estado nunca'."
      },
      {
        id: "dn_5",
        question: "No compré _____ libro.",
        translation: "(I didn't buy any book)",
        options: ["ningún", "algún", "un", "el"],
        correct: "ningún",
        explanation: "After negative verb, use 'ningún' (no/not any) before masculine singular nouns."
      },
      {
        id: "dn_6",
        question: "_____ lo he visto _____.",
        translation: "(I have never seen it)",
        options: ["No / nunca", "Nunca / no", "Nada / nunca", "No / nada"],
        correct: "No / nunca",
        explanation: "'No' before verb + 'nunca' after creates double negative. Both are required."
      },
      {
        id: "dn_7",
        question: "No conoce a _____ aquí.",
        translation: "(He doesn't know anyone here)",
        options: ["nadie", "alguien", "ninguno", "nada"],
        correct: "nadie",
        explanation: "After negative 'no conoce', use 'nadie' for 'anyone'. Double negative pattern."
      },
      {
        id: "dn_8",
        question: "_____ tampoco sabe.",
        translation: "(She doesn't know either)",
        options: ["Ella", "No", "Ni", "Nunca"],
        correct: "Ella",
        explanation: "'Tampoco' (neither/either) already contains negative meaning. No 'no' needed before verb."
      },
      {
        id: "dn_9",
        question: "Ni tú _____ yo vamos.",
        translation: "(Neither you nor I are going)",
        options: ["ni", "y", "o", "pero"],
        correct: "ni",
        explanation: "'Ni...ni' means 'neither...nor'. Creates double negative without 'no'."
      },
      {
        id: "dn_10",
        question: "No hay _____ problema.",
        translation: "(There is no problem)",
        options: ["ningún", "algún", "un", "el"],
        correct: "ningún",
        explanation: "After negative 'no hay', use 'ningún' before masculine nouns."
      },
      {
        id: "dn_11",
        question: "_____ tengo tiempo.",
        translation: "(I never have time)",
        options: ["Nunca", "No", "Nada", "Nadie"],
        correct: "Nunca",
        explanation: "'Nunca' before verb eliminates need for 'no'. Alternative: 'No tengo nunca tiempo'."
      },
      {
        id: "dn_12",
        question: "No quiero _____ café _____ té.",
        translation: "(I don't want either coffee or tea)",
        options: ["ni / ni", "o / o", "y / y", "no / no"],
        correct: "ni / ni",
        explanation: "After negative, 'ni...ni' replaces 'o...o'. Means 'neither...nor'."
      },
      {
        id: "dn_13",
        question: "_____ he comido _____.",
        translation: "(I haven't eaten anything)",
        options: ["No / nada", "No / algo", "Nada / no", "Nunca / nada"],
        correct: "No / nada",
        explanation: "'No' before verb + 'nada' after. Both negatives required in Spanish."
      },
      {
        id: "dn_14",
        question: "_____ estudiante vino a clase.",
        translation: "(No student came to class)",
        options: ["Ningún", "No ningún", "Algún", "Un"],
        correct: "Ningún",
        explanation: "'Ningún' before noun at sentence start doesn't need 'no'. Already negative."
      },
      {
        id: "dn_15",
        question: "No voy _____.",
        translation: "(I'm not going anywhere)",
        options: ["a ninguna parte", "a alguna parte", "en ningún lugar", "nunca"],
        correct: "a ninguna parte",
        explanation: "'A ninguna parte' means 'nowhere/to no place'. After 'no', use negative form."
      }
    ]
  },

  progressive_tenses: {
    name: "Progressive Tenses",
    description: "Master estar + gerund constructions",
    icon: Waypoints,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    questions: [
      {
        id: "prog_1",
        question: "_____ comiendo ahora.",
        translation: "(I am eating now)",
        options: ["Estoy", "Soy", "He", "Tengo"],
        correct: "Estoy",
        explanation: "Progressive uses 'estar' + gerund. 'Estoy comiendo' for action in progress."
      },
      {
        id: "prog_2",
        question: "Ella está _____.",
        translation: "(She is studying)",
        options: ["estudiando", "estudia", "estudiar", "estudiante"],
        correct: "estudiando",
        explanation: "Gerund for -ar verbs: remove -ar, add -ando. 'Estudiar' becomes 'estudiando'."
      },
      {
        id: "prog_3",
        question: "_____ viendo la tele.",
        translation: "(We are watching TV)",
        options: ["Estamos", "Somos", "Hemos", "Vamos"],
        correct: "Estamos",
        explanation: "First person plural 'estamos' + gerund. Progressive shows ongoing action."
      },
      {
        id: "prog_4",
        question: "Están _____.",
        translation: "(They are writing)",
        options: ["escribiendo", "escriben", "escribir", "escrito"],
        correct: "escribiendo",
        explanation: "Gerund for -ir verbs: remove -ir, add -iendo. 'Escribir' becomes 'escribiendo'."
      },
      {
        id: "prog_5",
        question: "¿Qué estás _____?",
        translation: "(What are you doing?)",
        options: ["haciendo", "haces", "hacer", "hecho"],
        correct: "haciendo",
        explanation: "'Hacer' has irregular gerund 'haciendo'. Some verbs have stem changes in gerund."
      },
      {
        id: "prog_6",
        question: "_____ durmiendo.",
        translation: "(He is sleeping)",
        options: ["Está", "Es", "Ha", "Tiene"],
        correct: "Está",
        explanation: "Third person singular 'está' + gerund for he/she is doing."
      },
      {
        id: "prog_7",
        question: "Estoy _____ un libro.",
        translation: "(I am reading a book)",
        options: ["leyendo", "leendo", "leer", "leído"],
        correct: "leyendo",
        explanation: "'Leer' has irregular gerund 'leyendo'. -Er verbs with vowel stem change y."
      },
      {
        id: "prog_8",
        question: "_____ lloviendo afuera.",
        translation: "(It is raining outside)",
        options: ["Está", "Es", "Hay", "Hace"],
        correct: "Está",
        explanation: "Weather in progress uses 'está' + gerund. 'Está lloviendo' for current rain."
      },
      {
        id: "prog_9",
        question: "Estaban _____ cuando llegué.",
        translation: "(They were talking when I arrived)",
        options: ["hablando", "hablan", "hablar", "hablado"],
        correct: "hablando",
        explanation: "Imperfect 'estaban' + gerund for past progressive. Shows ongoing past action."
      },
      {
        id: "prog_10",
        question: "¿Estás _____ español?",
        translation: "(Are you learning Spanish?)",
        options: ["aprendiendo", "aprendes", "aprender", "aprendido"],
        correct: "aprendiendo",
        explanation: "Present progressive 'estás aprendiendo' for current learning process."
      },
      {
        id: "prog_11",
        question: "No estoy _____.",
        translation: "(I'm not listening)",
        options: ["escuchando", "escucho", "escuchar", "escuchado"],
        correct: "escuchando",
        explanation: "Negative progressive: 'no estoy' + gerund. Negates ongoing action."
      },
      {
        id: "prog_12",
        question: "Ella está _____ la cena.",
        translation: "(She is preparing dinner)",
        options: ["preparando", "prepara", "preparar", "preparada"],
        correct: "preparando",
        explanation: "Regular -ar verb gerund: 'preparar' becomes 'preparando'."
      },
      {
        id: "prog_13",
        question: "Estoy _____ de ti.",
        translation: "(I am thinking of you)",
        options: ["pensando", "pienso", "pensar", "pensado"],
        correct: "pensando",
        explanation: "Stem-changing verbs keep stem in gerund usually. 'Pensar' becomes 'pensando'."
      },
      {
        id: "prog_14",
        question: "_____ corriendo en el parque.",
        translation: "(They are running in the park)",
        options: ["Están", "Son", "Han", "Van"],
        correct: "Están",
        explanation: "'Están' (third plural) + gerund for they are doing."
      },
      {
        id: "prog_15",
        question: "Ella está _____ música.",
        translation: "(She is listening to music)",
        options: ["oyendo", "oye", "oír", "oído"],
        correct: "oyendo",
        explanation: "'Oír' has irregular gerund 'oyendo'. Similar to 'leer' → 'leyendo'."
      }
    ]
  },

  irregular_verbs: {
    name: "Irregular Verb Patterns",
    description: "Learn common irregular conjugations",
    icon: Blend,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "irreg_1",
        question: "Yo _____ estudiante.",
        translation: "(I am a student)",
        options: ["soy", "estoy", "eres", "es"],
        correct: "soy",
        explanation: "'Ser' is completely irregular. First person 'soy' doesn't follow patterns."
      },
      {
        id: "irreg_2",
        question: "_____ al cine mañana.",
        translation: "(I'm going to the movies tomorrow)",
        options: ["Voy", "Vo", "Ido", "Ir"],
        correct: "Voy",
        explanation: "'Ir' is irregular. First person present is 'voy', not following -ir rules."
      },
      {
        id: "irreg_3",
        question: "_____ una casa grande.",
        translation: "(I have a big house)",
        options: ["Tengo", "Teno", "Tiero", "Tener"],
        correct: "Tengo",
        explanation: "'Tener' is irregular with -go ending in first person. 'Tengo' pattern."
      },
      {
        id: "irreg_4",
        question: "Yo _____ la verdad.",
        translation: "(I know the truth)",
        options: ["sé", "sabo", "conozco", "saber"],
        correct: "sé",
        explanation: "'Saber' has irregular first person 'sé'. Completely irregular form."
      },
      {
        id: "irreg_5",
        question: "_____ mi tarea todos los días.",
        translation: "(I do my homework every day)",
        options: ["Hago", "Haco", "Hecho", "Hacer"],
        correct: "Hago",
        explanation: "'Hacer' has -go ending in first person. 'Hago' is irregular."
      },
      {
        id: "irreg_6",
        question: "Yo _____ de mi casa a las 8.",
        translation: "(I leave my house at 8)",
        options: ["salgo", "salo", "salido", "salir"],
        correct: "salgo",
        explanation: "'Salir' adds -go in first person present. Common irregular pattern."
      },
      {
        id: "irreg_7",
        question: "_____ la comida en la mesa.",
        translation: "(I put the food on the table)",
        options: ["Pongo", "Pono", "Puesto", "Poner"],
        correct: "Pongo",
        explanation: "'Poner' has -go irregular ending. 'Pongo' for first person."
      },
      {
        id: "irreg_8",
        question: "Yo _____ a tu hermana.",
        translation: "(I know your sister)",
        options: ["conozco", "conoce", "sé", "saber"],
        correct: "conozco",
        explanation: "'Conocer' adds -zco in first person. Pattern for -cer/-cir verbs."
      },
      {
        id: "irreg_9",
        question: "_____ mucha agua.",
        translation: "(I drink a lot of water)",
        options: ["Bebo", "Bebo", "Tomo", "Bebir"],
        correct: "Bebo",
        explanation: "'Beber' is regular despite being common. Follow normal -er patterns."
      },
      {
        id: "irreg_10",
        question: "Yo _____ aquí los lunes.",
        translation: "(I come here on Mondays)",
        options: ["vengo", "vieno", "venido", "venir"],
        correct: "vengo",
        explanation: "'Venir' has -go ending and stem change. 'Vengo' is first person."
      },
      {
        id: "irreg_11",
        question: "_____ un regalo para ti.",
        translation: "(I'm bringing a gift for you)",
        options: ["Traigo", "Traeo", "Traído", "Traer"],
        correct: "Traigo",
        explanation: "'Traer' has irregular -igo ending. 'Traigo' for first person."
      },
      {
        id: "irreg_12",
        question: "Yo _____ temprano.",
        translation: "(I fall asleep early)",
        options: ["me duermo", "me dormo", "duermo", "dormir"],
        correct: "me duermo",
        explanation: "'Dormir' has stem change o→ue. Reflexive 'dormirse' = 'me duermo'."
      },
      {
        id: "irreg_13",
        question: "_____ español e inglés.",
        translation: "(I speak Spanish and English)",
        options: ["Hablo", "Hablo", "Digo", "Hablar"],
        correct: "Hablo",
        explanation: "'Hablar' is actually regular -ar verb. Not all common verbs are irregular."
      },
      {
        id: "irreg_14",
        question: "Yo _____ ejercicio.",
        translation: "(I do exercise)",
        options: ["hago", "haco", "hecho", "hacer"],
        correct: "hago",
        explanation: "'Hacer ejercicio' uses irregular 'hago'. Fixed expression for exercise."
      },
      {
        id: "irreg_15",
        question: "_____ muchos amigos.",
        translation: "(I have many friends)",
        options: ["Tengo", "Teno", "Tiero", "Tener"],
        correct: "Tengo",
        explanation: "'Tener' irregular -go ending repeats here. 'Tengo amigos'."
      }
    ]
  },

  time_since_hace: {
    name: "Time with 'Hace'",
    description: "Express duration with hace que",
    icon: Split,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "hace_1",
        question: "_____ dos años _____ vivo aquí.",
        translation: "(I have been living here for two years)",
        options: ["Hace / que", "Desde / que", "Por / que", "De / que"],
        correct: "Hace / que",
        explanation: "'Hace + time + que' expresses duration. Formula for 'for' with time periods."
      },
      {
        id: "hace_2",
        question: "Vivo aquí _____ hace dos años.",
        translation: "(I have been living here for two years)",
        options: ["desde", "hace", "por", "de"],
        correct: "desde",
        explanation: "Alternative: 'desde hace' at end of sentence. Both structures express duration."
      },
      {
        id: "hace_3",
        question: "¿_____ tiempo estudias español?",
        translation: "(How long have you been studying Spanish?)",
        options: ["Cuánto", "Qué", "Cuál", "Cómo"],
        correct: "Cuánto",
        explanation: "'¿Cuánto tiempo?' asks 'how long'. Question about duration."
      },
      {
        id: "hace_4",
        question: "Hace una hora _____ llegó.",
        translation: "(He arrived an hour ago)",
        options: ["que", "de", "desde", "por"],
        correct: "que",
        explanation: "'Hace + time + que' for 'ago' with preterite. Different from duration meaning."
      },
      {
        id: "hace_5",
        question: "_____ tres meses que trabajo aquí.",
        translation: "(I have been working here for three months)",
        options: ["Hace", "Desde", "Por", "De"],
        correct: "Hace",
        explanation: "'Hace' at start + present tense shows ongoing duration. Still working."
      },
      {
        id: "hace_6",
        question: "¿Desde _____ vives en Madrid?",
        translation: "(Since when do you live in Madrid?)",
        options: ["cuándo", "cuando", "qué", "dónde"],
        correct: "cuándo",
        explanation: "'¿Desde cuándo?' asks 'since when'. Question about starting point."
      },
      {
        id: "hace_7",
        question: "Hace mucho tiempo _____ no la veo.",
        translation: "(I haven't seen her in a long time)",
        options: ["que", "desde", "por", "de"],
        correct: "que",
        explanation: "'Hace + time + que + no' for negative duration. How long not doing."
      },
      {
        id: "hace_8",
        question: "Estudio español _____ seis meses.",
        translation: "(I have been studying Spanish for six months)",
        options: ["desde hace", "hace", "por", "de"],
        correct: "desde hace",
        explanation: "'Desde hace' at sentence end. Alternative to 'hace...que' at start."
      },
      {
        id: "hace_9",
        question: "_____ un año que se casaron.",
        translation: "(They got married a year ago)",
        options: ["Hace", "Desde", "Por", "De"],
        correct: "Hace",
        explanation: "'Hace' + preterite for 'ago'. Completed action in past."
      },
      {
        id: "hace_10",
        question: "¿_____ cuánto tiempo esperas?",
        translation: "(How long have you been waiting?)",
        options: ["Desde", "Hace", "Por", "De"],
        correct: "Desde",
        explanation: "'¿Desde cuánto tiempo?' alternative to '¿Cuánto tiempo hace que?'. Both ask duration."
      },
      {
        id: "hace_11",
        question: "Hace dos días _____ comí pizza.",
        translation: "(I ate pizza two days ago)",
        options: ["que", "desde", "por", "de"],
        correct: "que",
        explanation: "'Hace + time + que + preterite' for 'ago'. Specific past action."
      },
      {
        id: "hace_12",
        question: "_____ mucho que no nos vemos.",
        translation: "(We haven't seen each other in a long time)",
        options: ["Hace", "Desde", "Por", "De"],
        correct: "Hace",
        explanation: "'Hace mucho que no' for long time not doing. Negative duration."
      },
      {
        id: "hace_13",
        question: "Trabajo aquí _____ 2020.",
        translation: "(I have been working here since 2020)",
        options: ["desde", "hace", "de", "por"],
        correct: "desde",
        explanation: "'Desde' + specific date/year for 'since'. Starting point in time."
      },
      {
        id: "hace_14",
        question: "_____ poco que empezó a llover.",
        translation: "(It started raining a short while ago)",
        options: ["Hace", "Desde", "Por", "De"],
        correct: "Hace",
        explanation: "'Hace poco que' for 'recently/short while ago'. Recent past."
      },
      {
        id: "hace_15",
        question: "¿Cuánto tiempo _____ que estudias?",
        translation: "(How long have you been studying?)",
        options: ["hace", "desde", "por", "de"],
        correct: "hace",
        explanation: "'¿Cuánto tiempo hace que?' standard question for duration. Most common form."
      }
    ]
  },

  stem_changing_verbs: {
    name: "Stem-Changing Verbs",
    description: "Master e→ie, o→ue, e→i patterns",
    icon: Archive,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "stem_1",
        question: "Yo _____ estudiar más.",
        translation: "(I want to study more)",
        options: ["quiero", "quero", "quieres", "querer"],
        correct: "quiero",
        explanation: "'Querer' changes e→ie in stressed syllables. First person 'quiero'."
      },
      {
        id: "stem_2",
        question: "¿_____ ir al cine?",
        translation: "(Do you want to go to the movies? - informal)",
        options: ["Quieres", "Queres", "Quiero", "Querer"],
        correct: "Quieres",
        explanation: "Stem change e→ie in second person. 'Quieres' for tú form."
      },
      {
        id: "stem_3",
        question: "Ella _____ bien español.",
        translation: "(She understands Spanish well)",
        options: ["entiende", "entende", "entienda", "entender"],
        correct: "entiende",
        explanation: "'Entender' changes e→ie. Third person 'entiende' with stem change."
      },
      {
        id: "stem_4",
        question: "Nosotros no _____ la puerta.",
        translation: "(We don't close the door)",
        options: ["cerramos", "cerremos", "cierran", "cerrar"],
        correct: "cerramos",
        explanation: "'Cerrar' has e→ie change, but NOT in nosotros/vosotros. 'Cerramos' is regular."
      },
      {
        id: "stem_5",
        question: "¿A qué hora _____ la tienda?",
        translation: "(What time does the store close?)",
        options: ["cierra", "cerra", "cierre", "cerrar"],
        correct: "cierra",
        explanation: "'Cerrar' changes e→ie in third person. 'Cierra' with stem change."
      },
      {
        id: "stem_6",
        question: "Yo _____ a las 8.",
        translation: "(I sleep at 8)",
        options: ["duermo", "dormo", "duermes", "dormir"],
        correct: "duermo",
        explanation: "'Dormir' changes o→ue in stressed syllables. First person 'duermo'."
      },
      {
        id: "stem_7",
        question: "Ellos _____ en un hotel.",
        translation: "(They sleep in a hotel)",
        options: ["duermen", "dormen", "duermes", "dormir"],
        correct: "duermen",
        explanation: "'Dormir' changes o→ue in third plural. 'Duermen' with stem change."
      },
      {
        id: "stem_8",
        question: "Yo _____ café todas las mañanas.",
        translation: "(I order coffee every morning)",
        options: ["pido", "pedo", "pides", "pedir"],
        correct: "pido",
        explanation: "'Pedir' changes e→i (only -ir verbs). First person 'pido'."
      },
      {
        id: "stem_9",
        question: "Nosotros _____ aquí.",
        translation: "(We sleep here)",
        options: ["dormimos", "duermimos", "duermen", "dormir"],
        correct: "dormimos",
        explanation: "No stem change in nosotros/vosotros forms. 'Dormimos' is regular."
      },
      {
        id: "stem_10",
        question: "Él _____ ayuda.",
        translation: "(He asks for help)",
        options: ["pide", "pede", "piden", "pedir"],
        correct: "pide",
        explanation: "'Pedir' e→i change in third person. 'Pide' with stem change."
      },
      {
        id: "stem_11",
        question: "¿_____ tú el número?",
        translation: "(Do you repeat the number?)",
        options: ["Repites", "Repetes", "Repito", "Repetir"],
        correct: "Repites",
        explanation: "'Repetir' changes e→i. Second person 'repites' with change."
      },
      {
        id: "stem_12",
        question: "Nosotros _____ la lección.",
        translation: "(We repeat the lesson)",
        options: ["repetimos", "repitimos", "repeten", "repetir"],
        correct: "repetimos",
        explanation: "No stem change in nosotros. 'Repetimos' stays regular."
      },
      {
        id: "stem_13",
        question: "Yo _____ la ventana.",
        translation: "(I close the window)",
        options: ["cierro", "cerro", "cierras", "cerrar"],
        correct: "cierro",
        explanation: "'Cerrar' changes e→ie. First person 'cierro' with stem change."
      },
      {
        id: "stem_14",
        question: "Ellos _____ el libro.",
        translation: "(They find the book)",
        options: ["encuentran", "encontran", "encuentren", "encontrar"],
        correct: "encuentran",
        explanation: "'Encontrar' changes o→ue. Third plural 'encuentran' with change."
      },
      {
        id: "stem_15",
        question: "¿_____ tú almorzar conmigo?",
        translation: "(Do you want to have lunch with me?)",
        options: ["Quieres", "Queres", "Quiero", "Querer"],
        correct: "Quieres",
        explanation: "'Querer' e→ie in second person. 'Quieres' for tú."
      }
    ]
  },

  verbs_like_gustar_extended: {
    name: "Extended Gustar Patterns",
    description: "More verbs following gustar structure",
    icon: Waypoints,
    color: "from-fuchsia-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "gust_ext_1",
        question: "_____ encanta la música.",
        translation: "(I love music)",
        options: ["Me", "Yo", "Mi", "A mí"],
        correct: "Me",
        explanation: "'Encantar' (love/delight) follows gustar pattern. 'Me encanta' = it delights me."
      },
      {
        id: "gust_ext_2",
        question: "_____ molestan los mosquitos.",
        translation: "(Mosquitos bother you - informal)",
        options: ["Te", "Tú", "Ti", "Tu"],
        correct: "Te",
        explanation: "'Molestar' works like gustar. Plural 'molestan' because 'mosquitos' is plural."
      },
      {
        id: "gust_ext_3",
        question: "_____ parece buena idea.",
        translation: "(It seems like a good idea to me)",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "'Parecer' (seem) follows gustar pattern. 'Me parece' = it seems to me."
      },
      {
        id: "gust_ext_4",
        question: "_____ importa tu opinión.",
        translation: "(Your opinion matters to us)",
        options: ["Nos", "Nosotros", "Les", "Se"],
        correct: "Nos",
        explanation: "'Importar' (matter) uses gustar structure. 'Nos importa' = it matters to us."
      },
      {
        id: "gust_ext_5",
        question: "_____ sobra dinero.",
        translation: "(I have money left over)",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "'Sobrar' (be left over) follows gustar. 'Me sobra' = there's excess for me."
      },
      {
        id: "gust_ext_6",
        question: "_____ caen bien tus amigos.",
        translation: "(I like your friends - they fall well to me)",
        options: ["Me", "Yo", "Mi", "Mis"],
        correct: "Me",
        explanation: "'Caer bien' (like person) uses gustar pattern. Plural 'caen' for 'amigos'."
      },
      {
        id: "gust_ext_7",
        question: "_____ hacen falta más sillas.",
        translation: "(We need more chairs)",
        options: ["Nos", "Nosotros", "Les", "Se"],
        correct: "Nos",
        explanation: "'Hacer falta' (need) follows gustar. Plural 'hacen' for plural 'sillas'."
      },
      {
        id: "gust_ext_8",
        question: "_____ toca pagar la cuenta.",
        translation: "(It's your turn to pay the check)",
        options: ["Te", "Tú", "Ti", "Tu"],
        correct: "Te",
        explanation: "'Tocar' (be one's turn) uses gustar structure. 'Te toca' = it's your turn."
      },
      {
        id: "gust_ext_9",
        question: "_____ conviene descansar.",
        translation: "(It's advisable for him to rest)",
        options: ["Le", "Él", "Lo", "Su"],
        correct: "Le",
        explanation: "'Convenir' (be advisable) follows gustar. 'Le conviene' = it suits him."
      },
      {
        id: "gust_ext_10",
        question: "_____ apetece un helado.",
        translation: "(I feel like ice cream)",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "'Apetecer' (feel like) uses gustar pattern. 'Me apetece' = it appeals to me."
      },
      {
        id: "gust_ext_11",
        question: "_____ cuesta entender esto.",
        translation: "(It's hard for me to understand this)",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "'Costar' (be difficult) follows gustar. 'Me cuesta' = it's difficult for me."
      },
      {
        id: "gust_ext_12",
        question: "_____ da igual.",
        translation: "(It's all the same to me / I don't care)",
        options: ["Me", "Yo", "Mi", "A mí"],
        correct: "Me",
        explanation: "'Dar igual' (not matter) uses gustar structure. 'Me da igual' = I don't care."
      },
      {
        id: "gust_ext_13",
        question: "_____ alegra verte.",
        translation: "(I'm happy to see you)",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "'Alegrar' (make happy) follows gustar. 'Me alegra' = it makes me happy."
      },
      {
        id: "gust_ext_14",
        question: "_____ sorprenden tus comentarios.",
        translation: "(Your comments surprise them)",
        options: ["Les", "Ellos", "Los", "Sus"],
        correct: "Les",
        explanation: "'Sorprender' uses gustar pattern. Plural 'sorprenden' for plural 'comentarios'."
      },
      {
        id: "gust_ext_15",
        question: "_____ bastan dos euros.",
        translation: "(Two euros are enough for me)",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "'Bastar' (be enough) follows gustar. Plural 'bastan' for 'euros'."
      }
    ]
  },

  question_words: {
    name: "Question Words",
    description: "Master qué, cuál, quién, dónde, etc.",
    icon: Circle,
    color: "from-amber-500 to-yellow-600",
    level: "beginner",
    questions: [
      {
        id: "q_1",
        question: "¿_____ te llamas?",
        translation: "(What is your name?)",
        options: ["Cómo", "Qué", "Quién", "Cuál"],
        correct: "Cómo",
        explanation: "'¿Cómo?' for names and manner. '¿Cómo te llamas?' is standard greeting."
      },
      {
        id: "q_2",
        question: "¿_____ años tienes?",
        translation: "(How old are you?)",
        options: ["Cuántos", "Cuánto", "Qué", "Cuál"],
        correct: "Cuántos",
        explanation: "'¿Cuántos?' for plural countable things. 'Años' is plural masculine."
      },
      {
        id: "q_3",
        question: "¿_____ vives?",
        translation: "(Where do you live?)",
        options: ["Dónde", "Donde", "Cuándo", "Cómo"],
        correct: "Dónde",
        explanation: "'¿Dónde?' (with accent) for questions about location. 'Donde' (no accent) for statements."
      },
      {
        id: "q_4",
        question: "¿_____ es tu cumpleaños?",
        translation: "(When is your birthday?)",
        options: ["Cuándo", "Cuando", "Qué", "Cómo"],
        correct: "Cuándo",
        explanation: "'¿Cuándo?' (with accent) for time questions. 'Cuando' (no accent) means 'when' in statements."
      },
      {
        id: "q_5",
        question: "¿_____ es esto?",
        translation: "(What is this?)",
        options: ["Qué", "Cuál", "Quién", "Cómo"],
        correct: "Qué",
        explanation: "'¿Qué?' for definitions or identification. Asking for explanation."
      },
      {
        id: "q_6",
        question: "¿_____ estudias español?",
        translation: "(Why do you study Spanish?)",
        options: ["Por qué", "Porque", "Para qué", "Qué"],
        correct: "Por qué",
        explanation: "'¿Por qué?' (two words) means 'why'. 'Porque' (one word) means 'because'."
      },
      {
        id: "q_7",
        question: "¿_____ es tu profesor?",
        translation: "(Who is your teacher?)",
        options: ["Quién", "Quien", "Qué", "Cuál"],
        correct: "Quién",
        explanation: "'¿Quién?' (with accent) asks 'who'. For people."
      },
      {
        id: "q_8",
        question: "¿_____ prefieres, café o té?",
        translation: "(Which do you prefer, coffee or tea?)",
        options: ["Cuál", "Qué", "Quién", "Cómo"],
        correct: "Cuál",
        explanation: "'¿Cuál?' for choosing between options. Asking for selection."
      },
      {
        id: "q_9",
        question: "¿_____ cuesta este libro?",
        translation: "(How much does this book cost?)",
        options: ["Cuánto", "Cuántos", "Qué", "Cuál"],
        correct: "Cuánto",
        explanation: "'¿Cuánto?' for quantity or price. Singular for uncountable amounts."
      },
      {
        id: "q_10",
        question: "¿_____ libro quieres?",
        translation: "(Which book do you want?)",
        options: ["Qué", "Cuál", "Quién", "Cómo"],
        correct: "Qué",
        explanation: "'¿Qué?' before noun means 'which/what'. '¿Qué libro?' = which book."
      },
      {
        id: "q_11",
        question: "¿De _____ eres?",
        translation: "(Where are you from?)",
        options: ["dónde", "donde", "cuándo", "qué"],
        correct: "dónde",
        explanation: "'¿De dónde?' asks about origin. Standard question for nationality."
      },
      {
        id: "q_12",
        question: "¿_____ son estos?",
        translation: "(Whose are these?)",
        options: ["De quién", "Quién", "Qué", "Cuál"],
        correct: "De quién",
        explanation: "'¿De quién?' asks about possession. 'Whose' in questions."
      },
      {
        id: "q_13",
        question: "¿_____ vas?",
        translation: "(Where are you going?)",
        options: ["Adónde", "Dónde", "Cuándo", "Cómo"],
        correct: "Adónde",
        explanation: "'¿Adónde?' with motion verbs. 'To where' vs just 'where'."
      },
      {
        id: "q_14",
        question: "¿_____ lo haces?",
        translation: "(How do you do it?)",
        options: ["Cómo", "Qué", "Cuándo", "Dónde"],
        correct: "Cómo",
        explanation: "'¿Cómo?' asks about manner or method. How something is done."
      },
      {
        id: "q_15",
        question: "¿_____ estudias?",
        translation: "(How much do you study?)",
        options: ["Cuánto", "Cuántos", "Qué", "Cómo"],
        correct: "Cuánto",
        explanation: "'¿Cuánto?' for extent or degree. How much (of something)."
      }
    ]
  },

  conocer_vs_saber: {
    name: "Conocer vs Saber",
    description: "Learn the difference between 'know'",
    icon: Blend,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    questions: [
      {
        id: "cs_1",
        question: "Yo _____ a tu hermana.",
        translation: "(I know your sister)",
        options: ["conozco", "sé", "conoce", "saber"],
        correct: "conozco",
        explanation: "'Conocer' for knowing people. Use with 'a' before people."
      },
      {
        id: "cs_2",
        question: "_____ dónde vive ella.",
        translation: "(I know where she lives)",
        options: ["Sé", "Conozco", "Sabes", "Conoces"],
        correct: "Sé",
        explanation: "'Saber' for knowing facts or information. Use for what/where/when knowledge."
      },
      {
        id: "cs_3",
        question: "¿_____ Madrid?",
        translation: "(Do you know Madrid? - are you familiar)",
        options: ["Conoces", "Sabes", "Conoce", "Sé"],
        correct: "Conoces",
        explanation: "'Conocer' for familiarity with places. Being acquainted with cities."
      },
      {
        id: "cs_4",
        question: "_____ hablar español.",
        translation: "(I know how to speak Spanish)",
        options: ["Sé", "Conozco", "Sabes", "Conoces"],
        correct: "Sé",
        explanation: "'Saber' + infinitive for skills/how to. 'Sé hablar' = I know how to speak."
      },
      {
        id: "cs_5",
        question: "No _____ a nadie aquí.",
        translation: "(I don't know anyone here)",
        options: ["conozco", "sé", "conoce", "saber"],
        correct: "conozco",
        explanation: "'Conocer' for knowing/being acquainted with people. 'Conocer a nadie'."
      },
      {
        id: "cs_6",
        question: "_____ la respuesta.",
        translation: "(I know the answer)",
        options: ["Sé", "Conozco", "Sabes", "Conoces"],
        correct: "Sé",
        explanation: "'Saber' for knowing facts or answers. Information knowledge."
      },
      {
        id: "cs_7",
        question: "¿_____ esta canción?",
        translation: "(Do you know this song? - familiar with)",
        options: ["Conoces", "Sabes", "Conoce", "Sé"],
        correct: "Conoces",
        explanation: "'Conocer' for familiarity with songs, books, movies. Being acquainted."
      },
      {
        id: "cs_8",
        question: "_____ que mañana es fiesta.",
        translation: "(I know that tomorrow is a holiday)",
        options: ["Sé", "Conozco", "Sabes", "Conoces"],
        correct: "Sé",
        explanation: "'Saber' + que for knowing facts. Factual knowledge."
      },
      {
        id: "cs_9",
        question: "¿_____ cocinar?",
        translation: "(Do you know how to cook?)",
        options: ["Sabes", "Conoces", "Sé", "Conozco"],
        correct: "Sabes",
        explanation: "'Saber' + infinitive for abilities. Knowing how to do something."
      },
      {
        id: "cs_10",
        question: "_____ un buen restaurante.",
        translation: "(I know a good restaurant)",
        options: ["Conozco", "Sé", "Conoce", "Saber"],
        correct: "Conozco",
        explanation: "'Conocer' for being familiar with places or establishments."
      },
      {
        id: "cs_11",
        question: "No _____ su número de teléfono.",
        translation: "(I don't know his phone number)",
        options: ["sé", "conozco", "sabes", "conoces"],
        correct: "sé",
        explanation: "'Saber' for specific information like numbers, addresses."
      },
      {
        id: "cs_12",
        question: "Quiero _____ más sobre la cultura.",
        translation: "(I want to know more about the culture)",
        options: ["saber", "conocer", "sabiendo", "conociendo"],
        correct: "saber",
        explanation: "'Saber' for learning information. 'Conocer' would imply direct experience."
      },
      {
        id: "cs_13",
        question: "_____ bien esta ciudad.",
        translation: "(I know this city well)",
        options: ["Conozco", "Sé", "Conoce", "Saber"],
        correct: "Conozco",
        explanation: "'Conocer' for familiarity with places. Being well acquainted."
      },
      {
        id: "cs_14",
        question: "_____ tocar la guitarra.",
        translation: "(He knows how to play guitar)",
        options: ["Sabe", "Conoce", "Sé", "Conozco"],
        correct: "Sabe",
        explanation: "'Saber' + infinitive for skills. Musical ability is 'saber tocar'."
      },
      {
        id: "cs_15",
        question: "¿_____ al nuevo profesor?",
        translation: "(Do you know the new teacher?)",
        options: ["Conoces", "Sabes", "Conoce", "Sé"],
        correct: "Conoces",
        explanation: "'Conocer a' for being acquainted with people. Personal knowledge."
      }
    ]
  }
};

export default part9Categories;