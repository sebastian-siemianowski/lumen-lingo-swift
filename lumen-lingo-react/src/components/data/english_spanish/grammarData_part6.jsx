/**
 * ENGLISH → SPANISH GRAMMAR - PART 6
 * 5 advanced grammar categories, 15 questions each
 */

import { Share2, Repeat, BookOpen, Circle, Hash } from "lucide-react";

export const part6Categories = {
  relative_pronouns: {
    name: "Relative Pronouns",
    description: "Master que, quien, cual and their uses",
    icon: Share2,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "rel_1",
        question: "El libro _____ leí es interesante.",
        translation: "(The book that I read is interesting)",
        options: ["que", "quien", "cual", "lo que"],
        correct: "que",
        explanation: "'Que' is the most common relative pronoun for things. It means 'that', 'which', or 'who'."
      },
      {
        id: "rel_2",
        question: "La mujer _____ hablé es mi profesora.",
        translation: "(The woman to whom I spoke is my teacher)",
        options: ["con quien", "que", "con que", "cual"],
        correct: "con quien",
        explanation: "After prepositions referring to people, use 'quien'. 'Con quien' means 'with whom'."
      },
      {
        id: "rel_3",
        question: "No entiendo _____ dices.",
        translation: "(I don't understand what you're saying)",
        options: ["lo que", "que", "cual", "quien"],
        correct: "lo que",
        explanation: "'Lo que' means 'what' (the thing that). Use for abstract or unknown things."
      },
      {
        id: "rel_4",
        question: "El restaurante en _____ comimos era caro.",
        translation: "(The restaurant in which we ate was expensive)",
        options: ["el que", "que", "quien", "cual"],
        correct: "el que",
        explanation: "After prepositions with things, use 'el que/la que/los que/las que' with article. Agrees with antecedent."
      },
      {
        id: "rel_5",
        question: "Las personas _____ trabajan aquí son amables.",
        translation: "(The people who work here are friendly)",
        options: ["que", "quienes", "cuales", "las que"],
        correct: "que",
        explanation: "'Que' works for both people and things as subject. Simplest and most common relative pronoun."
      },
      {
        id: "rel_6",
        question: "Ese es el problema del _____ te hablé.",
        translation: "(That's the problem about which I told you)",
        options: ["que", "cual", "quien", "lo que"],
        correct: "que",
        explanation: "After preposition + article (del = de + el), use just 'que'. The article is separate."
      },
      {
        id: "rel_7",
        question: "Hay _____ quieras, puedes pedirlo.",
        translation: "(Whatever you want, you can ask for it)",
        options: ["lo que", "que", "cual", "quien"],
        correct: "lo que",
        explanation: "'Lo que' means 'what/whatever' for indefinite things. Very common in Spanish."
      },
      {
        id: "rel_8",
        question: "La chica _____ padre es médico estudia aquí.",
        translation: "(The girl whose father is a doctor studies here)",
        options: ["cuyo", "que", "quien", "de quien"],
        correct: "cuyo",
        explanation: "'Cuyo/a/os/as' means 'whose' and agrees with the thing possessed. Here 'cuyo' agrees with 'padre'."
      },
      {
        id: "rel_9",
        question: "Conocí a un hombre _____ vivió en España.",
        translation: "(I met a man who lived in Spain)",
        options: ["que", "quien", "cual", "lo que"],
        correct: "que",
        explanation: "'Que' is standard for people in restrictive clauses. Simplest form for 'who'."
      },
      {
        id: "rel_10",
        question: "La razón por _____ vine es importante.",
        translation: "(The reason for which I came is important)",
        options: ["la que", "que", "la cual", "cual"],
        correct: "la que",
        explanation: "After 'por' with abstract noun, use 'la que' with feminine article. Agrees with 'razón'."
      },
      {
        id: "rel_11",
        question: "_____ más me gusta es el chocolate.",
        translation: "(What I like most is chocolate)",
        options: ["Lo que", "Que", "Cual", "Quien"],
        correct: "Lo que",
        explanation: "'Lo que' for 'what' at sentence start. Common pattern: 'lo que' + verb = what (I do)."
      },
      {
        id: "rel_12",
        question: "Los amigos con _____ viajé son divertidos.",
        translation: "(The friends with whom I traveled are fun)",
        options: ["quienes", "que", "los que", "cuales"],
        correct: "quienes",
        explanation: "After prepositions, use 'quienes' (plural) for people. 'Con quienes' means 'with whom'."
      },
      {
        id: "rel_13",
        question: "La casa _____ ventanas son grandes es mía.",
        translation: "(The house whose windows are big is mine)",
        options: ["cuyas", "que", "de la que", "de quien"],
        correct: "cuyas",
        explanation: "'Cuyas' (feminine plural) agrees with 'ventanas'. Possession relative pronoun agrees with thing possessed."
      },
      {
        id: "rel_14",
        question: "Eso es _____ te dije ayer.",
        translation: "(That's what I told you yesterday)",
        options: ["lo que", "que", "cual", "quien"],
        correct: "lo que",
        explanation: "'Lo que' for 'what' referring to abstract ideas or statements. Very common construction."
      },
      {
        id: "rel_15",
        question: "El hotel en _____ nos quedamos era lujoso.",
        translation: "(The hotel in which we stayed was luxurious)",
        options: ["el que", "que", "cual", "quien"],
        correct: "el que",
        explanation: "After 'en' with things, use 'el que' with article. Article agrees with 'hotel' (masculine)."
      }
    ]
  },

  gustar_like_verbs: {
    name: "Gustar and Similar Verbs",
    description: "Learn verbs like gustar that work backwards",
    icon: Repeat,
    color: "from-rose-400 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "gust_1",
        question: "_____ gusta el chocolate.",
        translation: "(I like chocolate)",
        options: ["Me", "Yo", "Mi", "A mí"],
        correct: "Me",
        explanation: "'Gustar' works backwards: thing pleases me. 'Me gusta' literally means 'it pleases me'."
      },
      {
        id: "gust_2",
        question: "_____ gustan los deportes.",
        translation: "(We like sports)",
        options: ["Nos", "Nosotros", "Nuestro", "A nosotros"],
        correct: "Nos",
        explanation: "Plural 'gustan' because 'deportes' is plural. The thing doing the pleasing determines verb number."
      },
      {
        id: "gust_3",
        question: "A María _____ encanta bailar.",
        translation: "(María loves to dance)",
        options: ["le", "la", "les", "se"],
        correct: "le",
        explanation: "'Encantar' works like gustar. Use indirect object pronoun 'le' for third person singular."
      },
      {
        id: "gust_4",
        question: "_____ duele la cabeza.",
        translation: "(My head hurts)",
        options: ["Me", "Yo", "Mi", "A mí"],
        correct: "Me",
        explanation: "'Doler' (hurt) works like gustar. The body part is subject; person is indirect object."
      },
      {
        id: "gust_5",
        question: "¿_____ interesa la política?",
        translation: "(Are you interested in politics?)",
        options: ["Te", "Tú", "Tu", "A ti"],
        correct: "Te",
        explanation: "'Interesar' follows gustar pattern. Use indirect object pronoun before verb."
      },
      {
        id: "gust_6",
        question: "A nosotros no _____ gusta el café.",
        translation: "(We don't like coffee)",
        options: ["nos", "les", "me", "te"],
        correct: "nos",
        explanation: "Even with 'a nosotros' for emphasis, still use pronoun 'nos'. Both are required."
      },
      {
        id: "gust_7",
        question: "_____ quedan dos horas.",
        translation: "(I have two hours left)",
        options: ["Me", "Yo", "A mí", "Mi"],
        correct: "Me",
        explanation: "'Quedar' (remain) works like gustar. The remaining thing is subject."
      },
      {
        id: "gust_8",
        question: "_____ falta dinero.",
        translation: "(We lack money)",
        options: ["Nos", "Nosotros", "Les", "Se"],
        correct: "Nos",
        explanation: "'Faltar' (lack) follows gustar pattern. What's lacking is the subject."
      },
      {
        id: "gust_9",
        question: "A ellos _____ parecen interesantes las clases.",
        translation: "(The classes seem interesting to them)",
        options: ["les", "los", "se", "le"],
        correct: "les",
        explanation: "'Parecer' works like gustar. Plural 'parecen' agrees with 'clases', use 'les' for them."
      },
      {
        id: "gust_10",
        question: "_____ molesta el ruido.",
        translation: "(The noise bothers you - informal)",
        options: ["Te", "Tú", "Ti", "A ti"],
        correct: "Te",
        explanation: "'Molestar' (bother) follows gustar pattern. The annoying thing is the subject."
      },
      {
        id: "gust_11",
        question: "¿_____ importa esto?",
        translation: "(Does this matter to you?)",
        options: ["Te", "Tú", "A ti", "Tu"],
        correct: "Te",
        explanation: "'Importar' (matter) works like gustar. Use indirect object pronoun."
      },
      {
        id: "gust_12",
        question: "_____ fascina la música clásica.",
        translation: "(Classical music fascinates me)",
        options: ["Me", "Yo", "Mi", "A mí"],
        correct: "Me",
        explanation: "'Fascinar' follows gustar pattern. Music is subject, 'me' is indirect object."
      },
      {
        id: "gust_13",
        question: "_____ quedan bien esos zapatos.",
        translation: "(Those shoes fit you well)",
        options: ["Te", "Tú", "A ti", "Tu"],
        correct: "Te",
        explanation: "'Quedar' (fit) works like gustar. Plural 'quedan' because 'zapatos' is plural."
      },
      {
        id: "gust_14",
        question: "_____ hace falta más tiempo.",
        translation: "(We need more time)",
        options: ["Nos", "Nosotros", "A nosotros", "Les"],
        correct: "Nos",
        explanation: "'Hacer falta' (need) follows gustar pattern. What's needed is the subject."
      },
      {
        id: "gust_15",
        question: "A mi hermano _____ encanta cocinar.",
        translation: "(My brother loves to cook)",
        options: ["le", "lo", "se", "la"],
        correct: "le",
        explanation: "'Encantar' with infinitive takes singular verb. Use 'le' for third person singular."
      }
    ]
  },

  adverb_formation: {
    name: "Adverb Formation",
    description: "Learn to form and use adverbs correctly",
    icon: BookOpen,
    color: "from-teal-500 to-cyan-600",
    level: "beginner",
    questions: [
      {
        id: "adv_1",
        question: "Habla _____.",
        translation: "(He speaks slowly)",
        options: ["lentamente", "lento", "lenta", "lentos"],
        correct: "lentamente",
        explanation: "Form adverbs by adding -mente to feminine adjective. 'Lenta' + 'mente' = 'lentamente'."
      },
      {
        id: "adv_2",
        question: "Trabajamos _____.",
        translation: "(We work hard)",
        options: ["duro", "duramente", "duros", "dura"],
        correct: "duro",
        explanation: "Some adjectives function as adverbs without change. 'Duro' means both 'hard' (adjective) and 'hard' (adverb)."
      },
      {
        id: "adv_3",
        question: "Canta _____.",
        translation: "(She sings beautifully)",
        options: ["bellamente", "bella", "bello", "bellas"],
        correct: "bellamente",
        explanation: "Feminine adjective 'bella' + -mente = 'bellamente'. Standard adverb formation."
      },
      {
        id: "adv_4",
        question: "Lo hizo _____.",
        translation: "(He did it quickly)",
        options: ["rápidamente", "rápido", "rápida", "rápidos"],
        correct: "rápidamente",
        explanation: "'Rápida' (feminine) + -mente = 'rápidamente'. Both this and 'rápido' are used."
      },
      {
        id: "adv_5",
        question: "Conduce _____.",
        translation: "(She drives carefully)",
        options: ["cuidadosamente", "cuidadoso", "cuidadosa", "cuidado"],
        correct: "cuidadosamente",
        explanation: "'Cuidadosa' + -mente = 'cuidadosamente'. Long but correct adverb form."
      },
      {
        id: "adv_6",
        question: "Hablan español _____.",
        translation: "(They speak Spanish fluently)",
        options: ["fluidamente", "fluido", "fluida", "con fluidez"],
        correct: "fluidamente",
        explanation: "'Fluida' + -mente = 'fluidamente'. Alternative: 'con fluidez' (with fluency)."
      },
      {
        id: "adv_7",
        question: "_____ no tengo tiempo.",
        translation: "(Unfortunately I don't have time)",
        options: ["Desafortunadamente", "Desafortunado", "Desafortunada", "Con desafortunado"],
        correct: "Desafortunadamente",
        explanation: "Long adjectives still add -mente. 'Desafortunada' + -mente = 'desafortunadamente'."
      },
      {
        id: "adv_8",
        question: "Llegó _____.",
        translation: "(He arrived late)",
        options: ["tarde", "tardemente", "tardo", "tarda"],
        correct: "tarde",
        explanation: "'Tarde' (late) is already an adverb. No need to add -mente."
      },
      {
        id: "adv_9",
        question: "Vive muy _____.",
        translation: "(She lives very happily)",
        options: ["felizmente", "feliz", "felices", "con feliz"],
        correct: "felizmente",
        explanation: "'Feliz' becomes 'felizmente'. Note 'z' changes to 'c' before adding -mente."
      },
      {
        id: "adv_10",
        question: "Escribes _____.",
        translation: "(You write clearly)",
        options: ["claramente", "claro", "clara", "claros"],
        correct: "claramente",
        explanation: "'Clara' + -mente = 'claramente'. Standard adverb formation from feminine form."
      },
      {
        id: "adv_11",
        question: "Resolvió el problema _____.",
        translation: "(He solved the problem easily)",
        options: ["fácilmente", "fácil", "fáciles", "con fácil"],
        correct: "fácilmente",
        explanation: "'Fácil' + -mente = 'fácilmente'. Accent remains on original syllable."
      },
      {
        id: "adv_12",
        question: "Trabaja _____ y _____.",
        translation: "(She works efficiently and quickly)",
        options: ["eficiente / rápidamente", "eficientemente / rápido", "eficiente / rápido", "eficientemente / rápidamente"],
        correct: "eficiente / rápidamente",
        explanation: "With multiple -mente adverbs, only last one takes -mente. First stays in feminine adjective form."
      },
      {
        id: "adv_13",
        question: "Habla _____.",
        translation: "(He speaks sincerely)",
        options: ["sinceramente", "sincero", "sincera", "con sincero"],
        correct: "sinceramente",
        explanation: "'Sincera' + -mente = 'sinceramente'. Regular formation pattern."
      },
      {
        id: "adv_14",
        question: "Viene aquí _____.",
        translation: "(She comes here frequently)",
        options: ["frecuentemente", "frecuente", "frecuentes", "con frecuencia"],
        correct: "frecuentemente",
        explanation: "'Frecuente' + -mente = 'frecuentemente'. Alternative: 'con frecuencia'."
      },
      {
        id: "adv_15",
        question: "Actuó _____.",
        translation: "(He acted bravely)",
        options: ["valientemente", "valiente", "valientes", "con valiente"],
        correct: "valientemente",
        explanation: "'Valiente' + -mente = 'valientemente'. Adjectives ending in -e add -mente directly."
      }
    ]
  },

  indefinite_expressions: {
    name: "Indefinite Expressions",
    description: "Master algo, alguien, alguno and negatives",
    icon: Circle,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    questions: [
      {
        id: "indef_1",
        question: "No veo a _____.",
        translation: "(I don't see anyone)",
        options: ["nadie", "alguien", "ninguno", "algo"],
        correct: "nadie",
        explanation: "'Nadie' means 'no one/nobody'. After negative verb, use negative words."
      },
      {
        id: "indef_2",
        question: "¿Hay _____ en casa?",
        translation: "(Is there someone at home?)",
        options: ["alguien", "nadie", "algo", "alguno"],
        correct: "alguien",
        explanation: "'Alguien' means 'someone/somebody'. Use in questions or affirmative statements."
      },
      {
        id: "indef_3",
        question: "No tengo _____ que hacer.",
        translation: "(I have nothing to do)",
        options: ["nada", "algo", "nadie", "ninguno"],
        correct: "nada",
        explanation: "'Nada' means 'nothing'. After negative verb, use negative indefinites."
      },
      {
        id: "indef_4",
        question: "¿Quieres _____ de beber?",
        translation: "(Do you want something to drink?)",
        options: ["algo", "nada", "alguien", "alguno"],
        correct: "algo",
        explanation: "'Algo' means 'something'. Use in questions and affirmative contexts."
      },
      {
        id: "indef_5",
        question: "No vino _____ estudiante.",
        translation: "(No student came)",
        options: ["ningún", "algún", "cualquier", "todo"],
        correct: "ningún",
        explanation: "'Ningún' (no/not any) before masculine singular noun. Shortened from 'ninguno'."
      },
      {
        id: "indef_6",
        question: "_____ vez fuiste a París?",
        translation: "(Have you ever been to Paris?)",
        options: ["Alguna", "Ninguna", "Cualquiera", "Toda"],
        correct: "Alguna",
        explanation: "'Alguna vez' means 'ever/sometime'. Use affirmative form in questions."
      },
      {
        id: "indef_7",
        question: "No quiero _____ café.",
        translation: "(I don't want any coffee)",
        options: ["ningún", "algún", "un", "el"],
        correct: "ningún",
        explanation: "After negative, use 'ningún' before masculine nouns. Means 'no/not any'."
      },
      {
        id: "indef_8",
        question: "_____ persona puede hacerlo.",
        translation: "(Any person can do it)",
        options: ["Cualquier", "Alguna", "Ninguna", "Toda"],
        correct: "Cualquier",
        explanation: "'Cualquier' means 'any' (whichever). Used before singular nouns for 'any at all'."
      },
      {
        id: "indef_9",
        question: "_____ me llamó por teléfono.",
        translation: "(Someone called me on the phone)",
        options: ["Alguien", "Nadie", "Algo", "Alguno"],
        correct: "Alguien",
        explanation: "'Alguien' as subject means 'someone'. Use in affirmative statements."
      },
      {
        id: "indef_10",
        question: "No hay _____ solución.",
        translation: "(There is no solution)",
        options: ["ninguna", "alguna", "cualquier", "una"],
        correct: "ninguna",
        explanation: "'Ninguna' (no/not any) before feminine nouns. After negative 'no hay', use negative form."
      },
      {
        id: "indef_11",
        question: "_____ día te visitaré.",
        translation: "(Some day I'll visit you)",
        options: ["Algún", "Ningún", "Cualquier", "Todo"],
        correct: "Algún",
        explanation: "'Algún día' means 'some day/someday'. Shortened before masculine singular nouns."
      },
      {
        id: "indef_12",
        question: "No conozco a _____ de ellos.",
        translation: "(I don't know any of them)",
        options: ["ninguno", "alguno", "alguien", "nadie"],
        correct: "ninguno",
        explanation: "'Ninguno' means 'none/not any one'. Use after 'a' or alone without noun."
      },
      {
        id: "indef_13",
        question: "_____ cosa que necesites, dime.",
        translation: "(Anything you need, tell me)",
        options: ["Cualquier", "Alguna", "Ninguna", "Toda"],
        correct: "Cualquier",
        explanation: "'Cualquier' before nouns means 'any/whatever'. Shows complete openness."
      },
      {
        id: "indef_14",
        question: "No tenemos _____ problema.",
        translation: "(We don't have any problem)",
        options: ["ningún", "algún", "un", "el"],
        correct: "ningún",
        explanation: "After negative, 'ningún' before masculine noun. Means 'no/not any'."
      },
      {
        id: "indef_15",
        question: "¿Conoces a _____ aquí?",
        translation: "(Do you know someone here?)",
        options: ["alguien", "nadie", "alguno", "ninguno"],
        correct: "alguien",
        explanation: "'Alguien' in questions means 'someone/anybody'. Use affirmative form in questions."
      }
    ]
  },

  numbers_quantities: {
    name: "Numbers and Quantities",
    description: "Master counting and expressing amounts",
    icon: Hash,
    color: "from-orange-500 to-red-500",
    level: "beginner",
    questions: [
      {
        id: "num_1",
        question: "Tengo _____ años.",
        translation: "(I am twenty-one years old)",
        options: ["veintiuno", "veinte y uno", "veinte uno", "veintiún"],
        correct: "veintiuno",
        explanation: "Numbers 21-29 are written as one word. 'Veintiuno' for twenty-one."
      },
      {
        id: "num_2",
        question: "Hay _____ libro en la mesa.",
        translation: "(There is one book on the table)",
        options: ["un", "uno", "una", "primer"],
        correct: "un",
        explanation: "'Uno' becomes 'un' before masculine nouns. Article form for counting."
      },
      {
        id: "num_3",
        question: "Son las _____ de la tarde.",
        translation: "(It's three in the afternoon)",
        options: ["tres", "trese", "trés", "tree"],
        correct: "tres",
        explanation: "Basic number 'tres' (three) doesn't change. Use with 'las' for time."
      },
      {
        id: "num_4",
        question: "Compré _____ manzanas.",
        translation: "(I bought a hundred apples)",
        options: ["cien", "ciento", "cientos", "cienes"],
        correct: "cien",
        explanation: "'Ciento' shortens to 'cien' before nouns. Use 'cien' directly before what you're counting."
      },
      {
        id: "num_5",
        question: "Hay _____ personas aquí.",
        translation: "(There are two hundred people here)",
        options: ["doscientas", "doscientos", "dos cientos", "dosciento"],
        correct: "doscientas",
        explanation: "Hundreds agree in gender. 'Doscientas' for feminine 'personas'."
      },
      {
        id: "num_6",
        question: "Es el _____ día del mes.",
        translation: "(It's the first day of the month)",
        options: ["primer", "primero", "uno", "un"],
        correct: "primer",
        explanation: "'Primero' shortens to 'primer' before masculine singular nouns. First becomes 'primer día'."
      },
      {
        id: "num_7",
        question: "Tiene _____ años.",
        translation: "(She is thirty-one years old)",
        options: ["treinta y uno", "treinta uno", "treintayuno", "treinta y un"],
        correct: "treinta y uno",
        explanation: "Numbers 31-99 use 'y' between tens and ones. Written as three words."
      },
      {
        id: "num_8",
        question: "Cuesta _____ euros.",
        translation: "(It costs a thousand euros)",
        options: ["mil", "un mil", "milo", "mille"],
        correct: "mil",
        explanation: "'Mil' (thousand) doesn't use 'un' before it. Just 'mil', not 'un mil'."
      },
      {
        id: "num_9",
        question: "Pagué _____ dólares.",
        translation: "(I paid twenty-one dollars)",
        options: ["veintiún", "veintiuno", "veinte y un", "veinte uno"],
        correct: "veintiún",
        explanation: "'Veintiuno' shortens to 'veintiún' before masculine nouns. 'Veintiún dólares'."
      },
      {
        id: "num_10",
        question: "La _____ lección es difícil.",
        translation: "(The third lesson is difficult)",
        options: ["tercera", "tres", "tercer", "tercero"],
        correct: "tercera",
        explanation: "Ordinal numbers agree in gender. 'Tercera' for feminine 'lección'."
      },
      {
        id: "num_11",
        question: "Viven en el _____ piso.",
        translation: "(They live on the fifth floor)",
        options: ["quinto", "cinco", "quinta", "quince"],
        correct: "quinto",
        explanation: "Ordinal 'quinto' (fifth) agrees with masculine 'piso'. Don't use cardinal 'cinco' for order."
      },
      {
        id: "num_12",
        question: "Hay _____ de estudiantes.",
        translation: "(There are millions of students)",
        options: ["millones", "millón", "un millón", "millónes"],
        correct: "millones",
        explanation: "'Millones' (millions) is plural. Use 'millones de' before nouns."
      },
      {
        id: "num_13",
        question: "Es la _____ vez que vengo.",
        translation: "(It's the first time I come)",
        options: ["primera", "primer", "uno", "una"],
        correct: "primera",
        explanation: "'Primera' (first feminine) agrees with 'vez'. Full form before feminine nouns."
      },
      {
        id: "num_14",
        question: "Tenemos _____ páginas que leer.",
        translation: "(We have five hundred pages to read)",
        options: ["quinientas", "quinientos", "cinco cientos", "quiniento"],
        correct: "quinientas",
        explanation: "'Quinientas' agrees with feminine 'páginas'. Hundreds change for gender."
      },
      {
        id: "num_15",
        question: "Celebramos el _____ aniversario.",
        translation: "(We celebrate the tenth anniversary)",
        options: ["décimo", "diez", "décima", "decimo"],
        correct: "décimo",
        explanation: "'Décimo' (tenth) agrees with masculine 'aniversario'. Ordinals agree in gender and number."
      }
    ]
  }
};

export default part6Categories;