/**
 * POLISH → ENGLISH WORD BUILDER - PART 12
 * Categories: 58-60
 * 3 categories, 15 words each = 45 words
 */

import { Sparkles, Wind, Shirt as ShirtIcon } from "lucide-react";

export const wordBuilderCategories_part12 = {
  cleaning_supplies: {
    name: "Środki czystości",
    description: "Produkty do sprzątania domu",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "detergent", hint: "detergent" },
      { word: "bleach", hint: "wybielacz" },
      { word: "disinfectant", hint: "środek dezynfekujący" },
      { word: "cleaner", hint: "środek czyszczący" },
      { word: "polish", hint: "pasta do polerowania" },
      { word: "wax", hint: "wosk" },
      { word: "sponge", hint: "gąbka" },
      { word: "cloth", hint: "ścierka" },
      { word: "mop", hint: "mop" },
      { word: "broom", hint: "miotła" },
      { word: "dustpan", hint: "szufelka" },
      { word: "bucket", hint: "wiadro" },
      { word: "vacuum cleaner", hint: "odkurzacz" },
      { word: "duster", hint: "ścierka do kurzu" },
      { word: "scrubber", hint: "szczotka do szorowania" }
    ]
  },

  laundry_items: {
    name: "Pralnia",
    description: "Pranie i pielęgnacja odzieży",
    icon: Wind,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "washing machine", hint: "pralka" },
      { word: "dryer", hint: "suszarka" },
      { word: "detergent", hint: "proszek do prania" },
      { word: "softener", hint: "płyn do płukania" },
      { word: "stain remover", hint: "odplamiacz" },
      { word: "basket", hint: "kosz na pranie" },
      { word: "clothesline", hint: "linka do bielizny" },
      { word: "clothespin", hint: "klamerka do bielizny" },
      { word: "iron", hint: "żelazko" },
      { word: "ironing board", hint: "deska do prasowania" },
      { word: "spray", hint: "spray do prasowania" },
      { word: "hanger", hint: "wieszak" },
      { word: "drying rack", hint: "suszarka na pranie" },
      { word: "lint roller", hint: "rolka do usuwania kłaczków" },
      { word: "steamer", hint: "parownica" }
    ]
  },

  fabric_clothing: {
    name: "Tkaniny i materiały",
    description: "Rodzaje tkanin i materiałów",
    icon: ShirtIcon,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "cotton", hint: "bawełna" },
      { word: "wool", hint: "wełna" },
      { word: "silk", hint: "jedwab" },
      { word: "linen", hint: "len" },
      { word: "polyester", hint: "poliester" },
      { word: "nylon", hint: "nylon" },
      { word: "leather", hint: "skóra" },
      { word: "suede", hint: "zamsz" },
      { word: "velvet", hint: "aksamit" },
      { word: "denim", hint: "dżins" },
      { word: "fleece", hint: "polar" },
      { word: "satin", hint: "satyna" },
      { word: "cashmere", hint: "kaszmir" },
      { word: "lace", hint: "koronka" },
      { word: "tweed", hint: "tweed" }
    ]
  }
};

export default wordBuilderCategories_part12;