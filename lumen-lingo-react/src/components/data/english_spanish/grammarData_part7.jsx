/**
 * ENGLISH → SPANISH GRAMMAR - PART 7
 * 5 advanced grammar categories, 15 questions each
 */

import { Shuffle, Navigation, Eye, Sliders, Link2 } from "lucide-react";

export const part7Categories = {
  word_order: {
    name: "Word Order",
    description: "Learn Spanish sentence structure patterns",
    icon: Shuffle,
    color: "from-blue-400 to-purple-500",
    level: "intermediate",
    questions: [
      {
        id: "wo_1",
        question: "_____ quiero _____.",
        translation: "(I don't want it)",
        options: ["No / lo", "No / eso", "Lo / no", "Eso / no"],
        correct: "No / lo",
        explanation: "Negation goes before verb; object pronouns go before conjugated verbs. 'No lo quiero'."
      },
      {
        id: "wo_2",
        question: "_____ grande es la casa.",
        translation: "(How big the house is!)",
        options: ["Qué", "Cómo", "Cuánto", "Muy"],
        correct: "Qué",
        explanation: "'Qué' + adjective in exclamations. Inversion pattern: Qué + adjective + verb + subject."
      },
      {
        id: "wo_3",
        question: "El libro _____ ayer era interesante.",
        translation: "(The book I read yesterday was interesting)",
        options: ["que leí", "leí que", "que yo leí", "leí"],
        correct: "que leí",
        explanation: "Relative clause comes after noun. 'Que' introduces clause, normal word order follows."
      },
      {
        id: "wo_4",
        question: "_____ _____ está comiendo?",
        translation: "(What is he eating?)",
        options: ["¿Qué", "¿Cómo", "¿Cuál", "¿Quién"],
        correct: "¿Qué",
        explanation: "'Qué' means 'what' for things. Question word comes first in Spanish questions."
      },
      {
        id: "wo_5",
        question: "Ayer _____ _____ al cine.",
        translation: "(Yesterday I went to the movies)",
        options: ["fui", "yo fui", "fue yo", "ido"],
        correct: "fui",
        explanation: "Time expressions can come first; subject pronouns often omitted. 'Ayer fui' is natural."
      },
      {
        id: "wo_6",
        question: "_____ _____ María el libro.",
        translation: "(María gave me the book)",
        options: ["Me dio", "Dio me", "A mí dio", "Dió me"],
        correct: "Me dio",
        explanation: "Indirect object pronoun comes before verb. 'Me dio' is standard order."
      },
      {
        id: "wo_7",
        question: "Nunca _____ _____ visto.",
        translation: "(I have never seen it)",
        options: ["lo he", "he lo", "lo ha", "ha lo"],
        correct: "lo he",
        explanation: "Pronoun goes before auxiliary 'haber' in compound tenses. 'Lo he visto'."
      },
      {
        id: "wo_8",
        question: "En la mesa _____ un libro.",
        translation: "(On the table there is a book)",
        options: ["hay", "está", "es", "tiene"],
        correct: "hay",
        explanation: "Location can come first for emphasis. 'Hay' means 'there is/are'."
      },
      {
        id: "wo_9",
        question: "Muy _____ habla español.",
        translation: "(He speaks Spanish very well)",
        options: ["bien", "bueno", "buena", "buenos"],
        correct: "bien",
        explanation: "'Muy' modifies adverbs. 'Muy bien' (very well) modifies how he speaks."
      },
      {
        id: "wo_10",
        question: "A Juan _____ gusta el fútbol.",
        translation: "(Juan likes soccer)",
        options: ["le", "lo", "se", "la"],
        correct: "le",
        explanation: "Even with 'a Juan' for emphasis, include pronoun 'le'. Both are required with gustar."
      },
      {
        id: "wo_11",
        question: "¿_____ vive tu hermana?",
        translation: "(Where does your sister live?)",
        options: ["Dónde", "Donde", "Cómo", "Cuándo"],
        correct: "Dónde",
        explanation: "Question word 'dónde' (where) comes first. Requires written accent in questions."
      },
      {
        id: "wo_12",
        question: "Siempre _____ temprano.",
        translation: "(I always arrive early)",
        options: ["llego", "yo llego", "llegue", "llegando"],
        correct: "llego",
        explanation: "Adverbs of frequency come before verb; subject pronoun optional. 'Siempre llego'."
      },
      {
        id: "wo_13",
        question: "_____ coche es más rápido.",
        translation: "(Which car is faster?)",
        options: ["¿Qué", "¿Cuál", "¿Cómo", "¿Quién"],
        correct: "¿Qué",
        explanation: "'Qué' before noun means 'which/what'. 'Qué coche' = which car."
      },
      {
        id: "wo_14",
        question: "Ya _____ _____ hecho.",
        translation: "(I have already done it)",
        options: ["lo he", "he lo", "lo hecho", "hecho lo"],
        correct: "lo he",
        explanation: "Adverb 'ya' can come first; pronoun before auxiliary. 'Ya lo he hecho'."
      },
      {
        id: "wo_15",
        question: "Pocas veces _____ al gimnasio.",
        translation: "(I rarely go to the gym)",
        options: ["voy", "yo voy", "ir", "va"],
        correct: "voy",
        explanation: "Frequency expression first; subject pronoun typically omitted. 'Pocas veces voy'."
      }
    ]
  },

  prepositions: {
    name: "Common Prepositions",
    description: "Master essential Spanish prepositions",
    icon: Navigation,
    color: "from-cyan-500 to-blue-500",
    level: "beginner",
    questions: [
      {
        id: "prep_1",
        question: "Voy _____ la escuela.",
        translation: "(I go to school)",
        options: ["a", "en", "de", "para"],
        correct: "a",
        explanation: "Motion toward a place uses 'a'. 'Ir a' (go to) is standard pattern."
      },
      {
        id: "prep_2",
        question: "El libro está _____ la mesa.",
        translation: "(The book is on the table)",
        options: ["en", "sobre", "a", "de"],
        correct: "en",
        explanation: "'En' means 'on' for surfaces and 'in' for containers. Most common location preposition."
      },
      {
        id: "prep_3",
        question: "Vengo _____ México.",
        translation: "(I come from Mexico)",
        options: ["de", "desde", "en", "a"],
        correct: "de",
        explanation: "'De' indicates origin or 'from'. 'Ser/venir de' shows where you're from."
      },
      {
        id: "prep_4",
        question: "Estudio _____ mi amigo.",
        translation: "(I study with my friend)",
        options: ["con", "a", "de", "en"],
        correct: "con",
        explanation: "'Con' means 'with' (accompaniment). Standard for doing things together."
      },
      {
        id: "prep_5",
        question: "El gato está _____ la silla.",
        translation: "(The cat is under the chair)",
        options: ["debajo de", "encima de", "delante de", "detrás de"],
        correct: "debajo de",
        explanation: "'Debajo de' means 'under/underneath'. Compound preposition needs 'de'."
      },
      {
        id: "prep_6",
        question: "Vivo cerca _____ parque.",
        translation: "(I live near the park)",
        options: ["del", "de", "al", "a"],
        correct: "del",
        explanation: "'Cerca de' (near) + 'el' = 'del'. Contraction is required."
      },
      {
        id: "prep_7",
        question: "Trabajo _____ las 9 _____ las 5.",
        translation: "(I work from 9 to 5)",
        options: ["de / a", "desde / hasta", "de / hasta", "desde / a"],
        correct: "de / a",
        explanation: "'De...a' shows time range. Both 'de...a' and 'desde...hasta' work."
      },
      {
        id: "prep_8",
        question: "El coche _____ mi padre es nuevo.",
        translation: "(My father's car is new)",
        options: ["de", "del", "a", "para"],
        correct: "de",
        explanation: "'De' shows possession. 'El coche de mi padre' = my father's car."
      },
      {
        id: "prep_9",
        question: "Está _____ la puerta.",
        translation: "(It's behind the door)",
        options: ["detrás de", "delante de", "encima de", "debajo de"],
        correct: "detrás de",
        explanation: "'Detrás de' means 'behind'. Compound preposition requiring 'de'."
      },
      {
        id: "prep_10",
        question: "Vamos _____ pie.",
        translation: "(We go on foot)",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "'A pie' is fixed expression meaning 'on foot'. Always uses 'a'."
      },
      {
        id: "prep_11",
        question: "Viajo _____ tren.",
        translation: "(I travel by train)",
        options: ["en", "por", "a", "de"],
        correct: "en",
        explanation: "Transportation uses 'en'. 'En tren/coche/avión' for vehicles."
      },
      {
        id: "prep_12",
        question: "Lo hice _____ ti.",
        translation: "(I did it without you)",
        options: ["sin", "con", "para", "por"],
        correct: "sin",
        explanation: "'Sin' means 'without'. Opposite of 'con' (with)."
      },
      {
        id: "prep_13",
        question: "Está _____ mi casa.",
        translation: "(It's in front of my house)",
        options: ["delante de", "detrás de", "dentro de", "fuera de"],
        correct: "delante de",
        explanation: "'Delante de' means 'in front of'. Opposite of 'detrás de' (behind)."
      },
      {
        id: "prep_14",
        question: "Camino _____ la playa.",
        translation: "(I walk toward the beach)",
        options: ["hacia", "hasta", "a", "para"],
        correct: "hacia",
        explanation: "'Hacia' indicates direction without implying arrival. Different from 'a' which implies destination."
      },
      {
        id: "prep_15",
        question: "Corro _____ el parque.",
        translation: "(I run until the park)",
        options: ["hasta", "hacia", "a", "para"],
        correct: "hasta",
        explanation: "'Hasta' means 'until/up to' indicating endpoint. Different from 'hacia' (toward)."
      }
    ]
  },

  demonstratives: {
    name: "Demonstrative Adjectives & Pronouns",
    description: "Master este, ese, aquel and their forms",
    icon: Eye,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    questions: [
      {
        id: "dem_1",
        question: "_____ libro es interesante.",
        translation: "(This book is interesting)",
        options: ["Este", "Ese", "Aquel", "El"],
        correct: "Este",
        explanation: "'Este/esta/estos/estas' means 'this/these' (close to speaker). Agrees with noun in gender/number."
      },
      {
        id: "dem_2",
        question: "_____ casa es grande.",
        translation: "(That house is big - near you)",
        options: ["Esa", "Esta", "Aquella", "La"],
        correct: "Esa",
        explanation: "'Ese/esa/esos/esas' means 'that/those' (near listener). Feminine 'esa' for feminine 'casa'."
      },
      {
        id: "dem_3",
        question: "_____ montañas son hermosas.",
        translation: "(Those mountains are beautiful - far away)",
        options: ["Aquellas", "Esas", "Estas", "Las"],
        correct: "Aquellas",
        explanation: "'Aquel/aquella/aquellos/aquellas' for distant things. Feminine plural 'aquellas' for 'montañas'."
      },
      {
        id: "dem_4",
        question: "_____ es mi coche.",
        translation: "(This is my car)",
        options: ["Este", "Esto", "Eso", "Aquello"],
        correct: "Este",
        explanation: "Use 'este' (not 'esto') when you know the noun's gender. 'Este' agrees with masculine 'coche'."
      },
      {
        id: "dem_5",
        question: "No me gusta _____.",
        translation: "(I don't like that - unspecified thing)",
        options: ["eso", "ese", "esa", "esto"],
        correct: "eso",
        explanation: "'Esto/eso/aquello' are neuter for unknown or abstract things. 'Eso' for that thing."
      },
      {
        id: "dem_6",
        question: "_____ zapatos son cómodos.",
        translation: "(These shoes are comfortable)",
        options: ["Estos", "Esos", "Aquellos", "Los"],
        correct: "Estos",
        explanation: "'Estos' (masculine plural) for 'these' near speaker. Agrees with masculine plural 'zapatos'."
      },
      {
        id: "dem_7",
        question: "¿Qué es _____?",
        translation: "(What is this?)",
        options: ["esto", "este", "eso", "esta"],
        correct: "esto",
        explanation: "Neuter 'esto' when you don't know what thing is. Use before identifying it."
      },
      {
        id: "dem_8",
        question: "Prefiero _____ camisa que _____.",
        translation: "(I prefer this shirt over that one)",
        options: ["esta / esa", "este / ese", "esto / eso", "esta / aquella"],
        correct: "esta / esa",
        explanation: "'Esta' (this) for close item, 'esa' (that) for item near listener. Both feminine for 'camisa'."
      },
      {
        id: "dem_9",
        question: "_____ edificios son muy altos.",
        translation: "(Those buildings are very tall - far)",
        options: ["Aquellos", "Esos", "Estos", "Los"],
        correct: "Aquellos",
        explanation: "'Aquellos' for distant things. Masculine plural agrees with 'edificios'."
      },
      {
        id: "dem_10",
        question: "_____ chicas son mis amigas.",
        translation: "(These girls are my friends)",
        options: ["Estas", "Esas", "Aquellas", "Las"],
        correct: "Estas",
        explanation: "'Estas' (feminine plural) for 'these' near speaker. Agrees with 'chicas'."
      },
      {
        id: "dem_11",
        question: "¿Qué significa _____?",
        translation: "(What does that mean? - abstract)",
        options: ["eso", "ese", "esa", "aquello"],
        correct: "eso",
        explanation: "Neuter 'eso' for abstract concepts or statements. 'That' as an idea."
      },
      {
        id: "dem_12",
        question: "_____ día fue perfecto.",
        translation: "(That day was perfect)",
        options: ["Ese", "Este", "Aquel", "El"],
        correct: "Ese",
        explanation: "'Ese día' for a specific past day. Medium distance demonstrative for recent past."
      },
      {
        id: "dem_13",
        question: "Todo _____ es verdad.",
        translation: "(All that is true)",
        options: ["eso", "ese", "esto", "aquello"],
        correct: "eso",
        explanation: "Neuter 'eso' for 'that' referring to whole statements or abstract ideas."
      },
      {
        id: "dem_14",
        question: "_____ mesas son nuevas.",
        translation: "(Those tables are new - near listener)",
        options: ["Esas", "Estas", "Aquellas", "Las"],
        correct: "Esas",
        explanation: "'Esas' (feminine plural) for things near listener. Agrees with 'mesas'."
      },
      {
        id: "dem_15",
        question: "_____ tiempos eran mejores.",
        translation: "(Those times were better - long ago)",
        options: ["Aquellos", "Esos", "Estos", "Los"],
        correct: "Aquellos",
        explanation: "'Aquellos' for distant past. Nostalgic references use 'aquel' forms."
      }
    ]
  },

  possessive_forms: {
    name: "Possessive Adjectives & Pronouns",
    description: "Learn mi, tu, su and long forms",
    icon: Sliders,
    color: "from-green-400 to-emerald-600",
    level: "beginner",
    questions: [
      {
        id: "poss_1",
        question: "_____ casa es grande.",
        translation: "(My house is big)",
        options: ["Mi", "Mí", "Mío", "Mis"],
        correct: "Mi",
        explanation: "Short form 'mi' (my) before singular noun. Doesn't change for gender."
      },
      {
        id: "poss_2",
        question: "_____ hermanos viven en Madrid.",
        translation: "(My brothers live in Madrid)",
        options: ["Mis", "Mi", "Míos", "Los míos"],
        correct: "Mis",
        explanation: "'Mis' (plural) before plural nouns. Short possessive agrees only in number."
      },
      {
        id: "poss_3",
        question: "Esta casa es _____.",
        translation: "(This house is mine)",
        options: ["mía", "mi", "mío", "mis"],
        correct: "mía",
        explanation: "Long form 'mía' after 'ser'. Agrees in gender with thing possessed (casa = feminine)."
      },
      {
        id: "poss_4",
        question: "_____ padre es médico.",
        translation: "(Your father is a doctor - informal)",
        options: ["Tu", "Tú", "Tuyo", "Su"],
        correct: "Tu",
        explanation: "Short form 'tu' (your informal) before noun. No accent, unlike pronoun 'tú'."
      },
      {
        id: "poss_5",
        question: "_____ coche es nuevo.",
        translation: "(His/her car is new)",
        options: ["Su", "Suyo", "El", "De él"],
        correct: "Su",
        explanation: "'Su/sus' means his/her/your formal/their. Context clarifies whose."
      },
      {
        id: "poss_6",
        question: "Los libros son _____.",
        translation: "(The books are ours)",
        options: ["nuestros", "nuestro", "nuestra", "nuestras"],
        correct: "nuestros",
        explanation: "Long form 'nuestros' after 'ser'. Agrees with masculine plural 'libros'."
      },
      {
        id: "poss_7",
        question: "Una amiga _____ vino ayer.",
        translation: "(A friend of mine came yesterday)",
        options: ["mía", "mi", "mío", "de mí"],
        correct: "mía",
        explanation: "Long form after noun: 'amiga mía'. Means 'a friend of mine'."
      },
      {
        id: "poss_8",
        question: "¿Es _____ esta chaqueta?",
        translation: "(Is this jacket yours? - informal)",
        options: ["tuya", "tu", "tuyo", "tus"],
        correct: "tuya",
        explanation: "Long form 'tuya' after 'ser'. Feminine agrees with 'chaqueta'."
      },
      {
        id: "poss_9",
        question: "_____ padres están aquí.",
        translation: "(Our parents are here)",
        options: ["Nuestros", "Nuestro", "Nuestra", "Nuestras"],
        correct: "Nuestros",
        explanation: "Short form 'nuestros' before plural masculine noun. Agrees in gender and number."
      },
      {
        id: "poss_10",
        question: "Ese perro es _____.",
        translation: "(That dog is theirs)",
        options: ["suyo", "su", "suyos", "de ellos"],
        correct: "suyo",
        explanation: "Long form 'suyo' after 'ser'. Masculine agrees with 'perro'."
      },
      {
        id: "poss_11",
        question: "_____ ideas son buenas.",
        translation: "(Your ideas are good - formal/their)",
        options: ["Sus", "Su", "Tus", "Tu"],
        correct: "Sus",
        explanation: "'Sus' (plural) before plural nouns. Can mean your (formal) or their."
      },
      {
        id: "poss_12",
        question: "La casa es _____.",
        translation: "(The house is yours - formal)",
        options: ["suya", "su", "tuya", "tu"],
        correct: "suya",
        explanation: "Long form 'suya' for formal 'yours'. Feminine agrees with 'casa'."
      },
      {
        id: "poss_13",
        question: "_____ hermana es doctora.",
        translation: "(Your sister is a doctor - informal)",
        options: ["Tu", "Tú", "Tuya", "Su"],
        correct: "Tu",
        explanation: "Short form 'tu' before singular noun. Different from pronoun 'tú' (you)."
      },
      {
        id: "poss_14",
        question: "Estos son _____.",
        translation: "(These are yours - informal)",
        options: ["tuyos", "tus", "tuyo", "tuyas"],
        correct: "tuyos",
        explanation: "Long form 'tuyos' after 'ser'. Masculine plural for unspecified masculine items."
      },
      {
        id: "poss_15",
        question: "_____ familia es grande.",
        translation: "(Our family is big)",
        options: ["Nuestra", "Nuestro", "Nuestros", "Nuestras"],
        correct: "Nuestra",
        explanation: "'Nuestra' (feminine singular) before feminine singular noun. 'Nuestro/a' agrees in gender."
      }
    ]
  },

  conjunctions: {
    name: "Conjunctions and Connectors",
    description: "Link ideas with y, pero, porque and more",
    icon: Link2,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    questions: [
      {
        id: "conj_1",
        question: "Juan _____ María son hermanos.",
        translation: "(Juan and María are siblings)",
        options: ["y", "e", "o", "pero"],
        correct: "y",
        explanation: "'Y' means 'and' for connecting words. Standard conjunction."
      },
      {
        id: "conj_2",
        question: "Padre _____ hijo vinieron.",
        translation: "(Father and son came)",
        options: ["e", "y", "o", "u"],
        correct: "e",
        explanation: "'Y' becomes 'e' before words starting with 'i' or 'hi'. Pronunciation rule."
      },
      {
        id: "conj_3",
        question: "Es difícil _____ importante.",
        translation: "(It's difficult but important)",
        options: ["pero", "sino", "y", "o"],
        correct: "pero",
        explanation: "'Pero' means 'but' for contrasting ideas. Most common adversative conjunction."
      },
      {
        id: "conj_4",
        question: "No es rojo _____ azul.",
        translation: "(It's not red but blue)",
        options: ["sino", "pero", "y", "o"],
        correct: "sino",
        explanation: "'Sino' means 'but rather' after negatives. Use when contradicting negative statement."
      },
      {
        id: "conj_5",
        question: "¿Café _____ té?",
        translation: "(Coffee or tea?)",
        options: ["o", "u", "y", "pero"],
        correct: "o",
        explanation: "'O' means 'or' for alternatives. Standard disjunctive conjunction."
      },
      {
        id: "conj_6",
        question: "Mujer _____ hombre puede aplicar.",
        translation: "(Woman or man can apply)",
        options: ["u", "o", "e", "y"],
        correct: "u",
        explanation: "'O' becomes 'u' before words starting with 'o' or 'ho'. Pronunciation rule."
      },
      {
        id: "conj_7",
        question: "Estoy cansado _____ trabajé mucho.",
        translation: "(I'm tired because I worked a lot)",
        options: ["porque", "por qué", "porqué", "por que"],
        correct: "porque",
        explanation: "'Porque' (one word) means 'because' in statements. Explains reason."
      },
      {
        id: "conj_8",
        question: "¿_____ estás triste?",
        translation: "(Why are you sad?)",
        options: ["Por qué", "Porque", "Porqué", "Por que"],
        correct: "Por qué",
        explanation: "'Por qué' (two words) means 'why' in questions. Has written accent."
      },
      {
        id: "conj_9",
        question: "Es inteligente _____ no estudia.",
        translation: "(He's intelligent but he doesn't study)",
        options: ["pero", "sino", "aunque", "y"],
        correct: "pero",
        explanation: "'Pero' contrasts two clauses. Both clauses can be affirmative or negative."
      },
      {
        id: "conj_10",
        question: "_____ llueva, iremos.",
        translation: "(Although it rains, we'll go)",
        options: ["Aunque", "Pero", "Porque", "Si"],
        correct: "Aunque",
        explanation: "'Aunque' means 'although/even though'. Introduces concessive clause."
      },
      {
        id: "conj_11",
        question: "Estudia español _____ francés.",
        translation: "(She studies Spanish and French)",
        options: ["y", "e", "o", "u"],
        correct: "y",
        explanation: "'Y' before consonants and most words. Standard 'and'."
      },
      {
        id: "conj_12",
        question: "No solo habla español _____ también portugués.",
        translation: "(He speaks not only Spanish but also Portuguese)",
        options: ["sino", "pero", "y", "o"],
        correct: "sino",
        explanation: "'No solo...sino también' means 'not only...but also'. 'Sino' after negative."
      },
      {
        id: "conj_13",
        question: "_____ tengo hambre, comeré después.",
        translation: "(If I'm hungry, I'll eat later)",
        options: ["Si", "Sí", "Cuando", "Porque"],
        correct: "Si",
        explanation: "'Si' (without accent) means 'if'. Different from 'sí' (yes)."
      },
      {
        id: "conj_14",
        question: "Llegaré _____ pueda.",
        translation: "(I'll arrive when I can)",
        options: ["cuando", "cuándo", "si", "que"],
        correct: "cuando",
        explanation: "'Cuando' (without accent) means 'when' in statements. Different from question '¿cuándo?'."
      },
      {
        id: "conj_15",
        question: "Es tarde, _____ me voy.",
        translation: "(It's late, so I'm leaving)",
        options: ["así que", "porque", "pero", "aunque"],
        correct: "así que",
        explanation: "'Así que' means 'so/therefore'. Shows consequence or result."
      }
    ]
  }
};

export default part7Categories;