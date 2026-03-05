/**
 * POLISH → GERMAN WORD BUILDER - PART 15
 * Categories: 61-63
 * 3 categories, 15 words each = 45 words
 */

import { Footprints, Bed, Bath } from "lucide-react";

export const wordBuilderCategories_part15 = {
  body_parts: {
    name: "Części ciała",
    description: "Anatomia i części ludzkiego ciała",
    icon: Footprints,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "Kopf", hint: "głowa" },
      { word: "Gesicht", hint: "twarz" },
      { word: "Auge", hint: "oko" },
      { word: "Nase", hint: "nos" },
      { word: "Mund", hint: "usta" },
      { word: "Ohr", hint: "ucho" },
      { word: "Hals", hint: "szyja" },
      { word: "Schulter", hint: "ramię" },
      { word: "Arm", hint: "ręka" },
      { word: "Hand", hint: "dłoń" },
      { word: "Finger", hint: "palec" },
      { word: "Brust", hint: "klatka piersiowa" },
      { word: "Bauch", hint: "brzuch" },
      { word: "Bein", hint: "noga" },
      { word: "Fuß", hint: "stopa" }
    ]
  },

  bedroom: {
    name: "Sypialnia",
    description: "Meble i wyposażenie sypialni",
    icon: Bed,
    color: "from-purple-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "Bett", hint: "łóżko" },
      { word: "Matratze", hint: "materac" },
      { word: "Kissen", hint: "poduszka" },
      { word: "Decke", hint: "kołdra" },
      { word: "Laken", hint: "prześcieradło" },
      { word: "Kissenbezug", hint: "poszewka" },
      { word: "Nachttisch", hint: "szafka nocna" },
      { word: "Kleiderschrank", hint: "szafa" },
      { word: "Kommode", hint: "komoda" },
      { word: "Spiegel", hint: "lustro" },
      { word: "Lampe", hint: "lampka" },
      { word: "Wecker", hint: "budzik" },
      { word: "Teppich", hint: "dywan" },
      { word: "Vorhang", hint: "zasłona" },
      { word: "Bild", hint: "obraz" }
    ]
  },

  bathroom: {
    name: "Łazienka",
    description: "Wyposażenie i akcesoria łazienkowe",
    icon: Bath,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Badewanne", hint: "wanna" },
      { word: "Dusche", hint: "prysznic" },
      { word: "Waschbecken", hint: "umywalka" },
      { word: "Toilette", hint: "toaleta" },
      { word: "Wasserhahn", hint: "kran" },
      { word: "Seife", hint: "mydło" },
      { word: "Shampoo", hint: "szampon" },
      { word: "Handtuch", hint: "ręcznik" },
      { word: "Zahnbürste", hint: "szczoteczka do zębów" },
      { word: "Zahnpasta", hint: "pasta do zębów" },
      { word: "Spiegel", hint: "lustro" },
      { word: "Badematte", hint: "mata łazienkowa" },
      { word: "Duschvorhang", hint: "zasłona prysznicowa" },
      { word: "Toilettenpapier", hint: "papier toaletowy" },
      { word: "Kamm", hint: "grzebień" }
    ]
  }
};

export default wordBuilderCategories_part15;