/**
 * POLISH → ENGLISH WORD BUILDER - PART 11
 * Categories: 55-57
 * 3 categories, 15 words each = 45 words
 */

import { BedDouble, Sofa, Droplets } from "lucide-react";

export const wordBuilderCategories_part11 = {
  bedroom_furniture: {
    name: "Meble sypialniane",
    description: "Wyposażenie i meble sypialni",
    icon: BedDouble,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "bed", hint: "łóżko" },
      { word: "mattress", hint: "materac" },
      { word: "pillow", hint: "poduszka" },
      { word: "blanket", hint: "koc" },
      { word: "duvet", hint: "kołdra" },
      { word: "sheet", hint: "prześcieradło" },
      { word: "pillowcase", hint: "poszewka" },
      { word: "nightstand", hint: "szafka nocna" },
      { word: "wardrobe", hint: "szafa" },
      { word: "dresser", hint: "komoda" },
      { word: "mirror", hint: "lustro" },
      { word: "lamp", hint: "lampka" },
      { word: "alarm clock", hint: "budzik" },
      { word: "rug", hint: "dywan" },
      { word: "curtain", hint: "zasłona" }
    ]
  },

  living_room_items: {
    name: "Salon",
    description: "Meble i wyposażenie salonu",
    icon: Sofa,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "sofa", hint: "sofa" },
      { word: "couch", hint: "kanapa" },
      { word: "armchair", hint: "fotel" },
      { word: "coffee table", hint: "stolik kawowy" },
      { word: "bookshelf", hint: "półka na książki" },
      { word: "television", hint: "telewizor" },
      { word: "remote control", hint: "pilot" },
      { word: "cushion", hint: "poduszka ozdobna" },
      { word: "carpet", hint: "dywan" },
      { word: "fireplace", hint: "kominek" },
      { word: "painting", hint: "obraz" },
      { word: "vase", hint: "wazon" },
      { word: "plant", hint: "roślina" },
      { word: "chandelier", hint: "żyrandol" },
      { word: "ottoman", hint: "pufa" }
    ]
  },

  bathroom_items: {
    name: "Łazienka",
    description: "Wyposażenie i artykuły łazienkowe",
    icon: Droplets,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "bathtub", hint: "wanna" },
      { word: "shower", hint: "prysznic" },
      { word: "sink", hint: "umywalka" },
      { word: "toilet", hint: "toaleta" },
      { word: "faucet", hint: "kran" },
      { word: "drain", hint: "odpływ" },
      { word: "soap", hint: "mydło" },
      { word: "shampoo", hint: "szampon" },
      { word: "conditioner", hint: "odżywka" },
      { word: "toothbrush", hint: "szczoteczka do zębów" },
      { word: "toothpaste", hint: "pasta do zębów" },
      { word: "towel", hint: "ręcznik" },
      { word: "bath mat", hint: "mata łazienkowa" },
      { word: "shower curtain", hint: "zasłona prysznicowa" },
      { word: "toilet paper", hint: "papier toaletowy" }
    ]
  }
};

export default wordBuilderCategories_part11;