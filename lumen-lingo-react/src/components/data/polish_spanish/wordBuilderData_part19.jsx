/**
 * POLISH → SPANISH WORD BUILDER - PART 19
 * Categories: 95-97
 * 3 categories, 15 words each = 45 words
 */

import { Scale, Fish, Rocket } from "lucide-react";

export const wordBuilderCategories_part19 = {
  legal_terms: {
    name: "Terminy prawne",
    description: "Podstawowe słownictwo prawne i sądowe",
    icon: Scale,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "ley", hint: "prawo" },
      { word: "derecho", hint: "prawo" },
      { word: "justicia", hint: "sprawiedliwość" },
      { word: "tribunal", hint: "sąd" },
      { word: "juez", hint: "sędzia" },
      { word: "abogado", hint: "adwokat" },
      { word: "contrato", hint: "kontrakt" },
      { word: "demanda", hint: "pozew" },
      { word: "testigo", hint: "świadek" },
      { word: "veredicto", hint: "werdykt" },
      { word: "culpable", hint: "winny" },
      { word: "inocente", hint: "niewinny" },
      { word: "sentencia", hint: "wyrok" },
      { word: "evidencia", hint: "dowód" },
      { word: "apelación", hint: "odwołanie" }
    ]
  },

  marine_life: {
    name: "Życie morskie",
    description: "Stworzenia morskie i słownictwo oceaniczne",
    icon: Fish,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "pez", hint: "ryba" },
      { word: "ballena", hint: "wieloryb" },
      { word: "delfín", hint: "delfin" },
      { word: "tiburón", hint: "rekin" },
      { word: "pulpo", hint: "ośmiornica" },
      { word: "medusa", hint: "meduza" },
      { word: "estrella", hint: "rozgwiazda" },
      { word: "caballito", hint: "konik morski" },
      { word: "cangrejo", hint: "krab" },
      { word: "langosta", hint: "homar" },
      { word: "calamar", hint: "kałamarnica" },
      { word: "tortuga", hint: "żółw" },
      { word: "foca", hint: "foka" },
      { word: "coral", hint: "koral" },
      { word: "alga", hint: "wodorost" }
    ]
  },

  space_astronomy: {
    name: "Kosmos i astronomia",
    description: "Obiekty niebieskie i eksploracja kosmosu",
    icon: Rocket,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "espacio", hint: "przestrzeń kosmiczna" },
      { word: "planeta", hint: "planeta" },
      { word: "estrella", hint: "gwiazda" },
      { word: "luna", hint: "księżyc" },
      { word: "sol", hint: "słońce" },
      { word: "galaxia", hint: "galaktyka" },
      { word: "cometa", hint: "kometa" },
      { word: "asteroide", hint: "asteroida" },
      { word: "cohete", hint: "rakieta" },
      { word: "satélite", hint: "satelita" },
      { word: "órbita", hint: "orbita" },
      { word: "telescopio", hint: "teleskop" },
      { word: "astronauta", hint: "astronauta" },
      { word: "constelación", hint: "konstelacja" },
      { word: "universo", hint: "wszechświat" }
    ]
  }
};

export default wordBuilderCategories_part19;