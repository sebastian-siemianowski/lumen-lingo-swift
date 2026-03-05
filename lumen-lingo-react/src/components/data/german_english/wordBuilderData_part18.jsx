/**
 * GERMAN → ENGLISH WORD BUILDER - PART 18
 * Categories: 76-80
 * 5 categories, 15 words each = 75 words
 */

import { Sparkles, Bath, Droplet, Smile, Eye } from "lucide-react";

export const wordBuilderCategories_part18 = {
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
  },

  skincare: {
    name: "Hautpflege",
    description: "Produkte für gesunde Haut",
    icon: Droplet,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "skin", hint: "Haut" },
      { word: "cleansing", hint: "Reinigung" },
      { word: "moisturizing", hint: "Feuchtigkeitspflege" },
      { word: "sunscreen", hint: "Sonnenschutz" },
      { word: "anti-aging", hint: "Anti-Falten" },
      { word: "toner", hint: "Toner" },
      { word: "emulsion", hint: "Emulsion" },
      { word: "gel", hint: "Gel" },
      { word: "oil", hint: "Öl" },
      { word: "eye cream", hint: "Augencreme" },
      { word: "nourishing", hint: "nährend" },
      { word: "soothing", hint: "beruhigend" },
      { word: "rejuvenating", hint: "verjüngend" },
      { word: "pores", hint: "Poren" },
      { word: "complexion", hint: "Teint" }
    ]
  },

  dental_care: {
    name: "Zahnpflege",
    description: "Mundgesundheit und Zahnhygiene",
    icon: Smile,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "tooth", hint: "Zahn" },
      { word: "molar", hint: "Backenzahn" },
      { word: "gum", hint: "Zahnfleisch" },
      { word: "cavity", hint: "Karies" },
      { word: "dentist", hint: "Zahnarzt" },
      { word: "orthodontics", hint: "Kieferorthopädie" },
      { word: "braces", hint: "Zahnspange" },
      { word: "cleaning", hint: "Zahnreinigung" },
      { word: "filling", hint: "Füllung" },
      { word: "crown", hint: "Krone" },
      { word: "mouthwash", hint: "Mundspülung" },
      { word: "whitening", hint: "Bleaching" },
      { word: "plaque", hint: "Zahnbelag" },
      { word: "breath", hint: "Atem" },
      { word: "smile", hint: "Lächeln" }
    ]
  },

  vision_eyewear: {
    name: "Sehen und Brillen",
    description: "Augen und Sehhilfen",
    icon: Eye,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "eye", hint: "Auge" },
      { word: "sight", hint: "Sicht" },
      { word: "vision", hint: "Sehvermögen" },
      { word: "glasses", hint: "Brille" },
      { word: "lenses", hint: "Linsen" },
      { word: "contact lenses", hint: "Kontaktlinsen" },
      { word: "frame", hint: "Fassung" },
      { word: "prescription", hint: "Sehstärke" },
      { word: "nearsightedness", hint: "Kurzsichtigkeit" },
      { word: "farsightedness", hint: "Weitsichtigkeit" },
      { word: "astigmatism", hint: "Astigmatismus" },
      { word: "optometrist", hint: "Optiker" },
      { word: "eye exam", hint: "Sehtest" },
      { word: "lens", hint: "Glas" },
      { word: "case", hint: "Etui" }
    ]
  }
};

export default wordBuilderCategories_part18;