/**
 * POLISH → SPANISH WORD BUILDER - PART 13
 * Categories: 71-74
 * 4 categories, 15 words each = 60 words
 */

import { Sparkle, Volume2, Brain, Trophy } from "lucide-react";

export const wordBuilderCategories_part13 = {
  adverbs_manner: {
    name: "Przysłówki sposobu",
    description: "Opisuj jak wykonywane są czynności",
    icon: Sparkle,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "rápidamente", hint: "szybko" },
      { word: "lentamente", hint: "wolno" },
      { word: "cuidadosamente", hint: "ostrożnie" },
      { word: "fácilmente", hint: "łatwo" },
      { word: "difícilmente", hint: "trudno" },
      { word: "perfectamente", hint: "perfekcyjnie" },
      { word: "completamente", hint: "całkowicie" },
      { word: "exactamente", hint: "dokładnie" },
      { word: "simplemente", hint: "po prostu" },
      { word: "claramente", hint: "wyraźnie" },
      { word: "normalmente", hint: "normalnie" },
      { word: "especialmente", hint: "szczególnie" },
      { word: "finalmente", hint: "w końcu" },
      { word: "realmente", hint: "naprawdę" },
      { word: "totalmente", hint: "zupełnie" }
    ]
  },

  sound_verbs: {
    name: "Czasowniki dźwiękowe",
    description: "Czasowniki związane z dźwiękami",
    icon: Volume2,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "gritar", hint: "krzyczeć" },
      { word: "susurrar", hint: "szeptać" },
      { word: "cantar", hint: "śpiewać" },
      { word: "llorar", hint: "płakać" },
      { word: "reír", hint: "śmiać się" },
      { word: "silbar", hint: "gwizdać" },
      { word: "tocar", hint: "grać" },
      { word: "sonar", hint: "brzmieć" },
      { word: "rugir", hint: "ryczeć" },
      { word: "ladrar", hint: "szczekać" },
      { word: "maullar", hint: "miauczeć" },
      { word: "zumbar", hint: "brzęczeć" },
      { word: "crujir", hint: "skrzypieć" },
      { word: "estallar", hint: "wybuchnąć" },
      { word: "resonar", hint: "rezonować" }
    ]
  },

  mental_states: {
    name: "Stany umysłowe",
    description: "Słowa opisujące stany mentalne i emocjonalne",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "consciente", hint: "świadomy" },
      { word: "inconsciente", hint: "nieświadomy" },
      { word: "concentrado", hint: "skoncentrowany" },
      { word: "distraído", hint: "rozkojarzony" },
      { word: "motivado", hint: "zmotywowany" },
      { word: "desmotivado", hint: "zdemotywowany" },
      { word: "estresado", hint: "zestresowany" },
      { word: "relajado", hint: "zrelaksowany" },
      { word: "ansioso", hint: "niespokojny" },
      { word: "tranquilo", hint: "spokojny" },
      { word: "deprimido", hint: "przygnębiony" },
      { word: "alegre", hint: "radosny" },
      { word: "pensativo", hint: "zamyślony" },
      { word: "confuso", hint: "zdezorientowany" },
      { word: "seguro", hint: "pewny siebie" }
    ]
  },

  competition_sports: {
    name: "Zawody sportowe",
    description: "Słownictwo związane z zawodami i turniejami",
    icon: Trophy,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    words: [
      { word: "competición", hint: "zawody" },
      { word: "torneo", hint: "turniej" },
      { word: "campeonato", hint: "mistrzostwa" },
      { word: "medalla", hint: "medal" },
      { word: "trofeo", hint: "trofeum" },
      { word: "premio", hint: "nagroda" },
      { word: "récord", hint: "rekord" },
      { word: "resultado", hint: "wynik" },
      { word: "empate", hint: "remis" },
      { word: "ganador", hint: "zwycięzca" },
      { word: "perdedor", hint: "przegrany" },
      { word: "finalista", hint: "finalista" },
      { word: "clasificación", hint: "klasyfikacja" },
      { word: "eliminatoria", hint: "eliminacje" },
      { word: "semifinal", hint: "półfinał" }
    ]
  }
};

export default wordBuilderCategories_part13;