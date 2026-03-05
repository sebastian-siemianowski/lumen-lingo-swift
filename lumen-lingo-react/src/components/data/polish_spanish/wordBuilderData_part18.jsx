/**
 * POLISH → SPANISH WORD BUILDER - PART 18
 * Categories: 91-94
 * 4 categories, 15 words each = 60 words
 */

import { HeartPulse, Microwave, Recycle, Church } from "lucide-react";

export const wordBuilderCategories_part18 = {
  medical_conditions: {
    name: "Stany medyczne",
    description: "Typowe schorzenia i objawy zdrowotne",
    icon: HeartPulse,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "enfermedad", hint: "choroba" },
      { word: "síntoma", hint: "objaw" },
      { word: "alergia", hint: "alergia" },
      { word: "infección", hint: "infekcja" },
      { word: "inflamación", hint: "zapalenie" },
      { word: "fractura", hint: "złamanie" },
      { word: "gripe", hint: "grypa" },
      { word: "resfriado", hint: "przeziębienie" },
      { word: "diabetes", hint: "cukrzyca" },
      { word: "asma", hint: "astma" },
      { word: "lesión", hint: "uraz" },
      { word: "mareo", hint: "zawroty głowy" },
      { word: "náusea", hint: "nudności" },
      { word: "fatiga", hint: "zmęczenie" },
      { word: "cicatriz", hint: "blizna" }
    ]
  },

  kitchen_appliances: {
    name: "Sprzęt kuchenny",
    description: "Nowoczesne urządzenia i gadżety kuchenne",
    icon: Microwave,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "nevera", hint: "lodówka" },
      { word: "horno", hint: "piekarnik" },
      { word: "microondas", hint: "mikrofalówka" },
      { word: "tostadora", hint: "toster" },
      { word: "batidora", hint: "mikser" },
      { word: "licuadora", hint: "blender" },
      { word: "cafetera", hint: "ekspres do kawy" },
      { word: "lavavajillas", hint: "zmywarka" },
      { word: "congelador", hint: "zamrażarka" },
      { word: "procesador", hint: "robot kuchenny" },
      { word: "freidora", hint: "frytkownica" },
      { word: "exprimidor", hint: "sokowirówka" },
      { word: "arrocera", hint: "garnek do ryżu" },
      { word: "vaporera", hint: "parowar" },
      { word: "sandwichera", hint: "opiekacz do kanapek" }
    ]
  },

  environmental_issues: {
    name: "Problemy środowiskowe",
    description: "Problemy i rozwiązania ekologiczne",
    icon: Recycle,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "contaminación", hint: "zanieczyszczenie" },
      { word: "reciclaje", hint: "recykling" },
      { word: "deforestación", hint: "wylesianie" },
      { word: "calentamiento", hint: "ocieplenie" },
      { word: "sostenibilidad", hint: "zrównoważony rozwój" },
      { word: "biodiversidad", hint: "bioróżnorodność" },
      { word: "emisión", hint: "emisja" },
      { word: "renovable", hint: "odnawialny" },
      { word: "conservación", hint: "ochrona" },
      { word: "ecosistema", hint: "ekosystem" },
      { word: "extinción", hint: "wyginięcie" },
      { word: "desecho", hint: "odpad" },
      { word: "compostaje", hint: "kompostowanie" },
      { word: "ozono", hint: "ozon" },
      { word: "residuo", hint: "pozostałość" }
    ]
  },

  religions_beliefs: {
    name: "Religie i wierzenia",
    description: "Terminy religijne i duchowe",
    icon: Church,
    color: "from-purple-500 to-violet-600",
    level: "intermediate",
    words: [
      { word: "religión", hint: "religia" },
      { word: "fe", hint: "wiara" },
      { word: "creencia", hint: "przekonanie" },
      { word: "iglesia", hint: "kościół" },
      { word: "templo", hint: "świątynia" },
      { word: "mezquita", hint: "meczet" },
      { word: "sinagoga", hint: "synagoga" },
      { word: "oración", hint: "modlitwa" },
      { word: "dios", hint: "bóg" },
      { word: "sagrado", hint: "święty" },
      { word: "ritual", hint: "rytuał" },
      { word: "bendición", hint: "błogosławieństwo" },
      { word: "alma", hint: "dusza" },
      { word: "espíritu", hint: "duch" },
      { word: "sermón", hint: "kazanie" }
    ]
  }
};

export default wordBuilderCategories_part18;