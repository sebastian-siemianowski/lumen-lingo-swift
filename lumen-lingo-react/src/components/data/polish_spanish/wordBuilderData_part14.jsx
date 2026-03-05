/**
 * POLISH → SPANISH WORD BUILDER - PART 14
 * Categories: 75-78
 * 4 categories, 15 words each = 60 words
 */

import { Zap, Pencil, MapPin, Users2 } from "lucide-react";

export const wordBuilderCategories_part14 = {
  natural_phenomena: {
    name: "Zjawiska naturalne",
    description: "Potężne wydarzenia i zjawiska natury",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "terremoto", hint: "trzęsienie ziemi" },
      { word: "tsunami", hint: "tsunami" },
      { word: "huracán", hint: "huragan" },
      { word: "tornado", hint: "tornado" },
      { word: "erupción", hint: "erupcja" },
      { word: "avalancha", hint: "lawina" },
      { word: "maremoto", hint: "podmorskie trzęsienie" },
      { word: "incendio", hint: "pożar" },
      { word: "sequía", hint: "susza" },
      { word: "inundación", hint: "powódź" },
      { word: "tormenta", hint: "burza" },
      { word: "relámpago", hint: "błyskawica" },
      { word: "granizo", hint: "grad" },
      { word: "temblor", hint: "wstrząs" },
      { word: "deslizamiento", hint: "osuwisko" }
    ]
  },

  writing_tools: {
    name: "Narzędzia do pisania",
    description: "Narzędzia do pisania i rysowania",
    icon: Pencil,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "lápiz", hint: "ołówek" },
      { word: "bolígrafo", hint: "długopis" },
      { word: "marcador", hint: "marker" },
      { word: "rotulador", hint: "flamaster" },
      { word: "pluma", hint: "pióro" },
      { word: "crayón", hint: "kredka woskowa" },
      { word: "pincel", hint: "pędzel" },
      { word: "goma", hint: "gumka" },
      { word: "sacapuntas", hint: "temperówka" },
      { word: "regla", hint: "linijka" },
      { word: "compás", hint: "cyrkiel" },
      { word: "escuadra", hint: "ekierka" },
      { word: "tinta", hint: "tusz" },
      { word: "corrector", hint: "korektor" },
      { word: "portaminas", hint: "ołówek automatyczny" }
    ]
  },

  geographical_features: {
    name: "Cechy geograficzne",
    description: "Naturalne formy terenu i geografia",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "península", hint: "półwysep" },
      { word: "continente", hint: "kontynent" },
      { word: "archipiélago", hint: "archipelag" },
      { word: "bahía", hint: "zatoka" },
      { word: "golfo", hint: "zatoka" },
      { word: "estrecho", hint: "cieśnina" },
      { word: "acantilado", hint: "klif" },
      { word: "meseta", hint: "płaskowyż" },
      { word: "cordillera", hint: "łańcuch górski" },
      { word: "cañón", hint: "kanion" },
      { word: "delta", hint: "delta" },
      { word: "glaciar", hint: "lodowiec" },
      { word: "pantano", hint: "bagno" },
      { word: "costa", hint: "wybrzeże" },
      { word: "cabo", hint: "przylądek" }
    ]
  },

  social_interactions: {
    name: "Interakcje społeczne",
    description: "Czasowniki dotyczące kontaktów społecznych",
    icon: Users2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "saludar", hint: "witać się" },
      { word: "despedirse", hint: "żegnać się" },
      { word: "presentar", hint: "przedstawiać" },
      { word: "invitar", hint: "zapraszać" },
      { word: "visitar", hint: "odwiedzać" },
      { word: "conversar", hint: "rozmawiać" },
      { word: "charlar", hint: "gawędzić" },
      { word: "discutir", hint: "kłócić się" },
      { word: "debatir", hint: "debatować" },
      { word: "acordar", hint: "zgadzać się" },
      { word: "desacordar", hint: "nie zgadzać się" },
      { word: "reunirse", hint: "spotykać się" },
      { word: "compartir", hint: "dzielić się" },
      { word: "colaborar", hint: "współpracować" },
      { word: "ayudar", hint: "pomagać" }
    ]
  }
};

export default wordBuilderCategories_part14;