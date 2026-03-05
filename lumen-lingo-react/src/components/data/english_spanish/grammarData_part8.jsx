/**
 * ENGLISH → SPANISH GRAMMAR - PART 8
 * 5 advanced grammar categories, 15 questions each
 */

import { Calendar, MapPin, Users, Sparkles, Zap } from "lucide-react";

export const part8Categories = {
  time_expressions: {
    name: "Time Expressions",
    description: "Master telling time and time-related phrases",
    icon: Calendar,
    color: "from-violet-400 to-purple-600",
    level: "beginner",
    questions: [
      {
        id: "time_1",
        question: "Son _____ tres.",
        translation: "(It's three o'clock)",
        options: ["las", "la", "los", "el"],
        correct: "las",
        explanation: "Use feminine plural article 'las' for hours. 'Las tres' (three o'clock)."
      },
      {
        id: "time_2",
        question: "Es _____ una.",
        translation: "(It's one o'clock)",
        options: ["la", "las", "el", "los"],
        correct: "la",
        explanation: "One o'clock uses singular 'la una'. All other hours use plural 'las'."
      },
      {
        id: "time_3",
        question: "Son las dos _____ media.",
        translation: "(It's two thirty / half past two)",
        options: ["y", "con", "a", "de"],
        correct: "y",
        explanation: "'Y media' means 'and a half'. Standard for 30 minutes past."
      },
      {
        id: "time_4",
        question: "Son las cinco _____ cuarto.",
        translation: "(It's quarter to five)",
        options: ["menos", "y", "para", "a"],
        correct: "menos",
        explanation: "'Menos cuarto' means 'minus quarter'. Use 'menos' for minutes before the hour."
      },
      {
        id: "time_5",
        question: "_____ qué hora es la clase?",
        translation: "(At what time is the class?)",
        options: ["¿A", "¿En", "¿De", "¿Por"],
        correct: "¿A",
        explanation: "'A qué hora' asks 'at what time'. Use 'a' for time references."
      },
      {
        id: "time_6",
        question: "La reunión es _____ las diez.",
        translation: "(The meeting is at ten)",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "'A' before time means 'at'. 'A las diez' = at ten o'clock."
      },
      {
        id: "time_7",
        question: "Trabajo _____ la mañana.",
        translation: "(I work in the morning)",
        options: ["por", "en", "a", "de"],
        correct: "por",
        explanation: "'Por la mañana/tarde/noche' means 'in the morning/afternoon/night'. Standard pattern."
      },
      {
        id: "time_8",
        question: "Llegó _____ medianoche.",
        translation: "(He arrived at midnight)",
        options: ["a", "en", "por", "de"],
        correct: "a",
        explanation: "'A medianoche' means 'at midnight'. Use 'a' for specific times."
      },
      {
        id: "time_9",
        question: "_____ viene los lunes.",
        translation: "(He comes on Mondays)",
        options: ["Viene", "A", "En", "Por"],
        correct: "Viene",
        explanation: "No preposition needed for repeated days. 'Los lunes' alone means 'on Mondays'."
      },
      {
        id: "time_10",
        question: "Nos vemos _____ una semana.",
        translation: "(We'll see each other in a week)",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "'En' for future time expressions. 'En una semana' = in a week."
      },
      {
        id: "time_11",
        question: "Hace dos años _____ vivo aquí.",
        translation: "(I've been living here for two years)",
        options: ["que", "de", "desde", "por"],
        correct: "que",
        explanation: "'Hace + time + que' expresses duration. 'Hace dos años que' = for two years."
      },
      {
        id: "time_12",
        question: "_____ el lunes tengo examen.",
        translation: "(On Monday I have an exam)",
        options: ["El", "En", "A", "Por"],
        correct: "El",
        explanation: "Use article 'el' for single occurrence on specific day. 'El lunes' = on Monday."
      },
      {
        id: "time_13",
        question: "Regreso _____ dos días.",
        translation: "(I return in two days)",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "'En' for future time frame. 'En dos días' means within/in two days."
      },
      {
        id: "time_14",
        question: "Estudio _____ las noches.",
        translation: "(I study at night)",
        options: ["por", "en", "a", "de"],
        correct: "por",
        explanation: "'Por las noches' means 'at night' (habitually). Use 'por' for time periods."
      },
      {
        id: "time_15",
        question: "Salgo _____ mediodía.",
        translation: "(I leave at noon)",
        options: ["al", "a", "en el", "del"],
        correct: "al",
        explanation: "'Al mediodía' uses contraction. 'A + el = al' for noon."
      }
    ]
  },

  location_direction: {
    name: "Location and Direction",
    description: "Express where things are and movement",
    icon: MapPin,
    color: "from-red-400 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "loc_1",
        question: "El libro está _____ la mesa.",
        translation: "(The book is on the table)",
        options: ["sobre", "en", "encima de", "a"],
        correct: "sobre",
        explanation: "'Sobre' means 'on/on top of'. 'En' also works; 'sobre' is more specific."
      },
      {
        id: "loc_2",
        question: "Vivo _____ Madrid.",
        translation: "(I live in Madrid)",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "'En' for being in a city or place. 'Vivir en' is standard."
      },
      {
        id: "loc_3",
        question: "Voy _____ Madrid.",
        translation: "(I'm going to Madrid)",
        options: ["a", "en", "para", "hacia"],
        correct: "a",
        explanation: "'A' indicates motion toward. 'Ir a' (go to) is the standard pattern."
      },
      {
        id: "loc_4",
        question: "El gato está _____ la cama.",
        translation: "(The cat is under the bed)",
        options: ["debajo de", "encima de", "dentro de", "sobre"],
        correct: "debajo de",
        explanation: "'Debajo de' means 'under'. Compound preposition requires 'de'."
      },
      {
        id: "loc_5",
        question: "La tienda está _____ la esquina.",
        translation: "(The store is on the corner)",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "'En la esquina' means 'on the corner'. Standard location expression."
      },
      {
        id: "loc_6",
        question: "Camino _____ la escuela.",
        translation: "(I walk toward school)",
        options: ["hacia", "hasta", "a", "para"],
        correct: "hacia",
        explanation: "'Hacia' means 'toward' (direction). Different from 'a' which implies arrival."
      },
      {
        id: "loc_7",
        question: "Está _____ mi casa.",
        translation: "(It's behind my house)",
        options: ["detrás de", "delante de", "cerca de", "lejos de"],
        correct: "detrás de",
        explanation: "'Detrás de' means 'behind'. Opposite of 'delante de' (in front of)."
      },
      {
        id: "loc_8",
        question: "El museo está _____ aquí.",
        translation: "(The museum is near here)",
        options: ["cerca de", "lejos de", "dentro de", "fuera de"],
        correct: "cerca de",
        explanation: "'Cerca de' means 'near/close to'. Always requires 'de'."
      },
      {
        id: "loc_9",
        question: "Pon el vaso _____ la mesa.",
        translation: "(Put the glass on the table)",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "'En' for placing things on surfaces. 'Poner en' is standard."
      },
      {
        id: "loc_10",
        question: "Vienen _____ Argentina.",
        translation: "(They come from Argentina)",
        options: ["de", "desde", "en", "a"],
        correct: "de",
        explanation: "'De' shows origin. 'Venir/ser de' indicates where you're from."
      },
      {
        id: "loc_11",
        question: "El perro está _____ la casa.",
        translation: "(The dog is inside the house)",
        options: ["dentro de", "fuera de", "cerca de", "lejos de"],
        correct: "dentro de",
        explanation: "'Dentro de' means 'inside/within'. Opposite of 'fuera de' (outside)."
      },
      {
        id: "loc_12",
        question: "Corro _____ el parque.",
        translation: "(I run to the park)",
        options: ["hasta", "hacia", "a", "en"],
        correct: "hasta",
        explanation: "'Hasta' means 'until/up to' indicating endpoint. 'Correr hasta' = run to (the point)."
      },
      {
        id: "loc_13",
        question: "Está _____ la puerta.",
        translation: "(It's in front of the door)",
        options: ["delante de", "detrás de", "dentro de", "encima de"],
        correct: "delante de",
        explanation: "'Delante de' means 'in front of'. Opposite of 'detrás de'."
      },
      {
        id: "loc_14",
        question: "Vive _____ de la ciudad.",
        translation: "(She lives outside the city)",
        options: ["fuera", "dentro", "cerca", "lejos"],
        correct: "fuera",
        explanation: "'Fuera de' means 'outside'. Opposite of 'dentro de' (inside)."
      },
      {
        id: "loc_15",
        question: "El banco está _____ la farmacia.",
        translation: "(The bank is next to the pharmacy)",
        options: ["al lado de", "encima de", "debajo de", "dentro de"],
        correct: "al lado de",
        explanation: "'Al lado de' means 'next to/beside'. Common location expression."
      }
    ]
  },

  personal_a: {
    name: "Personal 'A'",
    description: "Learn when to use 'a' before people",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    questions: [
      {
        id: "pa_1",
        question: "Veo _____ María.",
        translation: "(I see María)",
        options: ["a", "de", "en", "∅"],
        correct: "a",
        explanation: "Use 'a' before specific people as direct objects. 'Ver a María' requires personal 'a'."
      },
      {
        id: "pa_2",
        question: "Busco _____ mi amigo.",
        translation: "(I'm looking for my friend)",
        options: ["a", "de", "por", "∅"],
        correct: "a",
        explanation: "Personal 'a' with 'buscar' before people. 'Buscar a' someone requires it."
      },
      {
        id: "pa_3",
        question: "Tengo dos hermanos _____.",
        translation: "(I have two brothers)",
        options: ["∅", "a", "de", "con"],
        correct: "∅",
        explanation: "No personal 'a' with 'tener' (have). Exception to the rule."
      },
      {
        id: "pa_4",
        question: "Conozco _____ tu padre.",
        translation: "(I know your father)",
        options: ["a", "de", "∅", "con"],
        correct: "a",
        explanation: "'Conocer' (know person) requires personal 'a'. 'Conocer a' before people."
      },
      {
        id: "pa_5",
        question: "Veo _____ perro en el parque.",
        translation: "(I see a dog in the park)",
        options: ["un", "a un", "el", "al"],
        correct: "un",
        explanation: "No personal 'a' for animals unless they're pets with names. Generic dog = no 'a'."
      },
      {
        id: "pa_6",
        question: "Espero _____ Juan.",
        translation: "(I'm waiting for Juan)",
        options: ["a", "de", "por", "∅"],
        correct: "a",
        explanation: "'Esperar a' (wait for) someone uses personal 'a'. Required before specific people."
      },
      {
        id: "pa_7",
        question: "Necesitamos _____ un profesor.",
        translation: "(We need a teacher)",
        options: ["∅", "a", "de", "un a"],
        correct: "∅",
        explanation: "Indefinite 'un profesor' (any teacher) doesn't take personal 'a'. Only specific people do."
      },
      {
        id: "pa_8",
        question: "Escucho _____ mi madre.",
        translation: "(I listen to my mother)",
        options: ["a", "de", "∅", "con"],
        correct: "a",
        explanation: "'Escuchar a' someone uses personal 'a'. Required before specific people."
      },
      {
        id: "pa_9",
        question: "Quiero mucho _____ mis padres.",
        translation: "(I love my parents very much)",
        options: ["a", "de", "∅", "con"],
        correct: "a",
        explanation: "'Querer a' (love) people requires personal 'a'. Always needed with people."
      },
      {
        id: "pa_10",
        question: "Vi _____ alguien en la calle.",
        translation: "(I saw someone in the street)",
        options: ["a", "∅", "de", "un"],
        correct: "a",
        explanation: "Personal 'a' with 'alguien' (someone). Even indefinite people can take it."
      },
      {
        id: "pa_11",
        question: "No conozco _____ nadie aquí.",
        translation: "(I don't know anyone here)",
        options: ["a", "de", "∅", "con"],
        correct: "a",
        explanation: "'Nadie' (no one) as person takes personal 'a'. 'Conocer a nadie'."
      },
      {
        id: "pa_12",
        question: "Hay _____ personas en la sala.",
        translation: "(There are people in the room)",
        options: ["∅", "a", "de", "unas"],
        correct: "∅",
        explanation: "'Hay' never uses personal 'a'. Exception even with people."
      },
      {
        id: "pa_13",
        question: "Invité _____ mis amigos.",
        translation: "(I invited my friends)",
        options: ["a", "de", "∅", "con"],
        correct: "a",
        explanation: "'Invitar a' (invite) uses personal 'a' before people. Standard pattern."
      },
      {
        id: "pa_14",
        question: "Visito _____ mi abuela.",
        translation: "(I visit my grandmother)",
        options: ["a", "de", "∅", "en"],
        correct: "a",
        explanation: "'Visitar a' someone uses personal 'a'. Required for visiting people."
      },
      {
        id: "pa_15",
        question: "Veo _____ mi perro Firulais.",
        translation: "(I see my dog Firulais)",
        options: ["a", "∅", "el", "de"],
        correct: "a",
        explanation: "Named pets get personal 'a'. 'Firulais' is specific, so use 'a'."
      }
    ]
  },

  diminutives_augmentatives: {
    name: "Diminutives and Augmentatives",
    description: "Learn -ito, -illo, -ón and other suffixes",
    icon: Sparkles,
    color: "from-yellow-400 to-amber-500",
    level: "intermediate",
    questions: [
      {
        id: "dim_1",
        question: "Un café_____.",
        translation: "(A little coffee)",
        options: ["cito", "ito", "illo", "ón"],
        correct: "cito",
        explanation: "Words ending in consonants add -cito/a. 'Café' + 'cito' = 'cafecito'."
      },
      {
        id: "dim_2",
        question: "Una casa_____.",
        translation: "(A little house)",
        options: ["ita", "cita", "illa", "ota"],
        correct: "ita",
        explanation: "Words ending in -a drop it and add -ita. 'Casa' becomes 'casita'."
      },
      {
        id: "dim_3",
        question: "Un perro_____.",
        translation: "(A big dog)",
        options: ["ón", "ote", "ito", "azo"],
        correct: "ón",
        explanation: "Augmentative -ón indicates bigger size. 'Perro' + 'ón' = 'perrón'."
      },
      {
        id: "dim_4",
        question: "Mi abuel_____.",
        translation: "(My dear grandmother / granny)",
        options: ["ita", "illa", "ota", "ona"],
        correct: "ita",
        explanation: "Drop final vowel, add -ita for affection. 'Abuela' becomes 'abuelita'."
      },
      {
        id: "dim_5",
        question: "Un libr_____.",
        translation: "(A huge book)",
        options: ["ote", "ito", "illo", "ón"],
        correct: "ote",
        explanation: "Augmentative -ote indicates large size. 'Libro' + 'ote' = 'librote'."
      },
      {
        id: "dim_6",
        question: "Una flor_____.",
        translation: "(A little flower)",
        options: ["cita", "ita", "illa", "ota"],
        correct: "cita",
        explanation: "Words ending in consonant add -cita. 'Flor' + 'cita' = 'florcita'."
      },
      {
        id: "dim_7",
        question: "Un moment_____.",
        translation: "(Just a little moment)",
        options: ["ito", "cito", "illo", "ón"],
        correct: "ito",
        explanation: "Drop final vowel (if present), add -ito. 'Momento' becomes 'momentito'."
      },
      {
        id: "dim_8",
        question: "Una sill_____.",
        translation: "(A small chair)",
        options: ["ita", "illa", "cita", "ota"],
        correct: "ita",
        explanation: "Regional variation: -ita is most common diminutive. 'Silla' becomes 'sillita'."
      },
      {
        id: "dim_9",
        question: "Un hombr_____.",
        translation: "(A big man)",
        options: ["ón", "ote", "azo", "ito"],
        correct: "ón",
        explanation: "Augmentative -ón for large people. 'Hombre' becomes 'hombrón'."
      },
      {
        id: "dim_10",
        question: "Una manecilla_____.",
        translation: "(A tiny hand / little hand)",
        options: ["∅", "ita", "illa", "cita"],
        correct: "∅",
        explanation: "'Manecilla' already contains diminutive -illa. Already means 'little hand'."
      },
      {
        id: "dim_11",
        question: "Un beb_____.",
        translation: "(A tiny baby)",
        options: ["ito", "é ito", "illo", "cito"],
        correct: "ito",
        explanation: "Drop accent and final vowel, add -ito. 'Bebé' becomes 'bebito'."
      },
      {
        id: "dim_12",
        question: "Un golp_____.",
        translation: "(A big blow / strong hit)",
        options: ["azo", "ón", "ote", "ito"],
        correct: "azo",
        explanation: "Augmentative -azo can intensify impact. 'Golpe' + 'azo' = 'golpazo' (big hit)."
      },
      {
        id: "dim_13",
        question: "Mi herman_____.",
        translation: "(My little brother)",
        options: ["ito", "illo", "cito", "ón"],
        correct: "ito",
        explanation: "Common diminutive for family. 'Hermano' becomes 'hermanito' (little brother)."
      },
      {
        id: "dim_14",
        question: "Una cuchar_____.",
        translation: "(A little spoon / teaspoon)",
        options: ["ita", "illa", "cita", "ota"],
        correct: "ita",
        explanation: "Drop -a, add -ita. 'Cuchara' becomes 'cucharita' (little spoon)."
      },
      {
        id: "dim_15",
        question: "Un coch_____.",
        translation: "(A big car)",
        options: ["azo", "ón", "ote", "ito"],
        correct: "azo",
        explanation: "Augmentative -azo emphasizes size. 'Coche' + 'azo' = 'cochazo' (big/fancy car)."
      }
    ]
  },

  verb_periphrases: {
    name: "Verb Periphrases",
    description: "Master ir a, tener que, acabar de patterns",
    icon: Zap,
    color: "from-indigo-400 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "vp_1",
        question: "_____ _____ estudiar mañana.",
        translation: "(I'm going to study tomorrow)",
        options: ["Voy a", "Tengo que", "Acabo de", "Debo"],
        correct: "Voy a",
        explanation: "'Ir a + infinitive' expresses future plans. Most common future expression in speech."
      },
      {
        id: "vp_2",
        question: "_____ _____ terminar este trabajo.",
        translation: "(I have to finish this work)",
        options: ["Tengo que", "Voy a", "Acabo de", "Puedo"],
        correct: "Tengo que",
        explanation: "'Tener que + infinitive' expresses obligation. Means 'have to/must'."
      },
      {
        id: "vp_3",
        question: "_____ _____ llegar.",
        translation: "(I just arrived)",
        options: ["Acabo de", "Voy a", "Tengo que", "Empiezo a"],
        correct: "Acabo de",
        explanation: "'Acabar de + infinitive' means 'just did'. Expresses recent past action."
      },
      {
        id: "vp_4",
        question: "_____ _____ llover.",
        translation: "(It's starting to rain)",
        options: ["Empieza a", "Acaba de", "Tiene que", "Va a"],
        correct: "Empieza a",
        explanation: "'Empezar a + infinitive' means 'start to'. Beginning of action."
      },
      {
        id: "vp_5",
        question: "_____ _____ trabajar a las 8.",
        translation: "(I usually work at 8)",
        options: ["Suelo", "Voy a", "Tengo que", "Acabo de"],
        correct: "Suelo",
        explanation: "'Soler + infinitive' expresses habitual action. Means 'usually do'."
      },
      {
        id: "vp_6",
        question: "_____ _____ salir.",
        translation: "(We're about to leave)",
        options: ["Estamos por", "Vamos a", "Tenemos que", "Acabamos de"],
        correct: "Estamos por",
        explanation: "'Estar por + infinitive' means 'about to'. Imminent action."
      },
      {
        id: "vp_7",
        question: "_____ _____ leer más.",
        translation: "(I should read more)",
        options: ["Debería", "Voy a", "Acabo de", "Tengo que"],
        correct: "Debería",
        explanation: "'Deber + infinitive' expresses should/ought. Conditional 'debería' is softer."
      },
      {
        id: "vp_8",
        question: "_____ _____ estudiar cuando llamaste.",
        translation: "(I was about to study when you called)",
        options: ["Iba a", "Tenía que", "Acababa de", "Empezaba a"],
        correct: "Iba a",
        explanation: "'Ir a' in imperfect expresses 'was going to'. Interrupted future in past."
      },
      {
        id: "vp_9",
        question: "_____ _____ comer.",
        translation: "(I just finished eating)",
        options: ["Acabo de", "Voy a", "Empiezo a", "Dejo de"],
        correct: "Acabo de",
        explanation: "'Acabar de' means 'just finished'. Recent completion."
      },
      {
        id: "vp_10",
        question: "_____ _____ fumar hace un año.",
        translation: "(I stopped smoking a year ago)",
        options: ["Dejé de", "Acabé de", "Empecé a", "Tenía que"],
        correct: "Dejé de",
        explanation: "'Dejar de + infinitive' means 'stop doing'. Cessation of action."
      },
      {
        id: "vp_11",
        question: "_____ _____ ayudarte.",
        translation: "(I can help you)",
        options: ["Puedo", "Voy a", "Tengo que", "Debo"],
        correct: "Puedo",
        explanation: "'Poder + infinitive' expresses ability/permission. Means 'can/able to'."
      },
      {
        id: "vp_12",
        question: "_____ _____ aprender español hace dos años.",
        translation: "(I started learning Spanish two years ago)",
        options: ["Empecé a", "Acabé de", "Dejé de", "Tenía que"],
        correct: "Empecé a",
        explanation: "'Empezar a + infinitive' marks beginning. Use preterite for specific start time."
      },
      {
        id: "vp_13",
        question: "No _____ _____ hacerlo.",
        translation: "(I don't dare to do it)",
        options: ["me atrevo a", "voy a", "tengo que", "puedo"],
        correct: "me atrevo a",
        explanation: "'Atreverse a + infinitive' means 'dare to'. Reflexive verb + a."
      },
      {
        id: "vp_14",
        question: "_____ _____ practicar más.",
        translation: "(You need to practice more)",
        options: ["Necesitas", "Vas a", "Acabas de", "Debes"],
        correct: "Necesitas",
        explanation: "'Necesitar + infinitive' expresses need. Similar to 'tener que' but slightly softer."
      },
      {
        id: "vp_15",
        question: "Está _____ _____ llover.",
        translation: "(It's about to rain)",
        options: ["a punto de", "por", "para", "yendo a"],
        correct: "a punto de",
        explanation: "'Estar a punto de + infinitive' means 'about to'. Imminent action expression."
      }
    ]
  }
};

export default part8Categories;