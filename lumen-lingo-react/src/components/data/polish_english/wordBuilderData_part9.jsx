/**
 * POLISH → ENGLISH WORD BUILDER - PART 9
 * Categories: 47-50
 * 4 categories, 15 words each = 60 words
 */

import { Carrot, Milk, Croissant, Drumstick } from "lucide-react";

export const wordBuilderCategories_part9 = {
  vegetables: {
    name: "Warzywa",
    description: "Warzywa świeże i gotowane",
    icon: Carrot,
    color: "from-green-500 to-lime-600",
    level: "beginner",
    words: [
      { word: "carrot", hint: "marchew" },
      { word: "potato", hint: "ziemniak" },
      { word: "tomato", hint: "pomidor" },
      { word: "cucumber", hint: "ogórek" },
      { word: "lettuce", hint: "sałata" },
      { word: "cabbage", hint: "kapusta" },
      { word: "broccoli", hint: "brokuł" },
      { word: "cauliflower", hint: "kalafior" },
      { word: "spinach", hint: "szpinak" },
      { word: "pepper", hint: "papryka" },
      { word: "onion", hint: "cebula" },
      { word: "garlic", hint: "czosnek" },
      { word: "celery", hint: "seler" },
      { word: "radish", hint: "rzodkiewka" },
      { word: "beetroot", hint: "burak" }
    ]
  },

  dairy_products: {
    name: "Nabiał",
    description: "Produkty mleczne i sery",
    icon: Milk,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "milk", hint: "mleko" },
      { word: "cheese", hint: "ser" },
      { word: "butter", hint: "masło" },
      { word: "yogurt", hint: "jogurt" },
      { word: "cream", hint: "śmietana" },
      { word: "cottage cheese", hint: "twarożek" },
      { word: "sour cream", hint: "kwaśna śmietana" },
      { word: "whipped cream", hint: "bita śmietana" },
      { word: "ice cream", hint: "lody" },
      { word: "custard", hint: "budyń" },
      { word: "pudding", hint: "pudding" },
      { word: "milkshake", hint: "shake mleczny" },
      { word: "kefir", hint: "kefir" },
      { word: "buttermilk", hint: "maślanka" },
      { word: "condensed milk", hint: "mleko skondensowane" }
    ]
  },

  bakery_items: {
    name: "Piekarnia",
    description: "Wyroby piekarnicze i ciastkarskie",
    icon: Croissant,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "bread", hint: "chleb" },
      { word: "roll", hint: "bułka" },
      { word: "baguette", hint: "bagietka" },
      { word: "croissant", hint: "croissant" },
      { word: "muffin", hint: "muffinka" },
      { word: "donut", hint: "pączek" },
      { word: "bagel", hint: "bajgiel" },
      { word: "pretzel", hint: "precel" },
      { word: "cake", hint: "ciasto" },
      { word: "pie", hint: "placek" },
      { word: "cookie", hint: "ciastko" },
      { word: "brownie", hint: "brownie" },
      { word: "scone", hint: "bułeczka" },
      { word: "biscuit", hint: "herbatnik" },
      { word: "pastry", hint: "ciastko francuskie" }
    ]
  },

  meat_poultry: {
    name: "Mięso i drób",
    description: "Rodzaje mięsa i wyrobów",
    icon: Drumstick,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "chicken", hint: "kurczak" },
      { word: "turkey", hint: "indyk" },
      { word: "duck", hint: "kaczka" },
      { word: "beef", hint: "wołowina" },
      { word: "pork", hint: "wieprzowina" },
      { word: "lamb", hint: "jagnięcina" },
      { word: "veal", hint: "cielęcina" },
      { word: "bacon", hint: "bekon" },
      { word: "sausage", hint: "kiełbasa" },
      { word: "ham", hint: "szynka" },
      { word: "salami", hint: "salami" },
      { word: "steak", hint: "stek" },
      { word: "chop", hint: "kotlet" },
      { word: "meatball", hint: "klopsik" },
      { word: "cutlet", hint: "kotlet schabowy" }
    ]
  }
};

export default wordBuilderCategories_part9;