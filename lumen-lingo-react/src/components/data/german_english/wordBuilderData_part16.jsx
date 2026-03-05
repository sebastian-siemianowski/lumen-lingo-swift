/**
 * GERMAN → ENGLISH WORD BUILDER - PART 16
 * Categories: 68-70
 * 3 categories, 15 words each = 45 words
 */

import { Watch, Sparkles, Bath } from "lucide-react";

export const wordBuilderCategories_part16 = {
  accessories: {
    name: "Accessoires",
    description: "Schmuck und modische Ergänzungen",
    icon: Watch,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "watch", hint: "Uhr" },
      { word: "necklace", hint: "Halskette" },
      { word: "bracelet", hint: "Armband" },
      { word: "ring", hint: "Ring" },
      { word: "earrings", hint: "Ohrringe" },
      { word: "glasses", hint: "Brille" },
      { word: "sunglasses", hint: "Sonnenbrille" },
      { word: "hat", hint: "Hut" },
      { word: "cap", hint: "Kappe" },
      { word: "handbag", hint: "Handtasche" },
      { word: "wallet", hint: "Geldbörse" },
      { word: "backpack", hint: "Rucksack" },
      { word: "umbrella", hint: "Regenschirm" },
      { word: "belt", hint: "Gürtel" },
      { word: "brooch", hint: "Brosche" }
    ]
  },

  beauty_cosmetics: {
    name: "Schönheit und Kosmetik",
    description: "Kosmetikprodukte und Schönheitspflege",
    icon: Sparkles,
    color: "from-pink-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "makeup", hint: "Make-up" },
      { word: "lipstick", hint: "Lippenstift" },
      { word: "mascara", hint: "Wimperntusche" },
      { word: "eyeshadow", hint: "Lidschatten" },
      { word: "foundation", hint: "Foundation" },
      { word: "blush", hint: "Rouge" },
      { word: "perfume", hint: "Parfüm" },
      { word: "nail polish", hint: "Nagellack" },
      { word: "cream", hint: "Creme" },
      { word: "lotion", hint: "Lotion" },
      { word: "mask", hint: "Maske" },
      { word: "scrub", hint: "Peeling" },
      { word: "serum", hint: "Serum" },
      { word: "makeup remover", hint: "Make-up-Entferner" },
      { word: "brush", hint: "Pinsel" }
    ]
  },

  hygiene: {
    name: "Hygiene",
    description: "Persönliche Pflege und Sauberkeit",
    icon: Bath,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "soap", hint: "Seife" },
      { word: "shampoo", hint: "Shampoo" },
      { word: "conditioner", hint: "Spülung" },
      { word: "toothpaste", hint: "Zahnpasta" },
      { word: "toothbrush", hint: "Zahnbürste" },
      { word: "dental floss", hint: "Zahnseide" },
      { word: "deodorant", hint: "Deodorant" },
      { word: "towel", hint: "Handtuch" },
      { word: "sponge", hint: "Schwamm" },
      { word: "toilet paper", hint: "Toilettenpapier" },
      { word: "comb", hint: "Kamm" },
      { word: "brush", hint: "Bürste" },
      { word: "razor", hint: "Rasierer" },
      { word: "nail clipper", hint: "Nagelschere" },
      { word: "shower", hint: "Dusche" }
    ]
  }
};

export default wordBuilderCategories_part16;