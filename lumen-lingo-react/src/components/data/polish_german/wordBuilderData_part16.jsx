/**
 * POLISH → GERMAN WORD BUILDER - PART 16
 * Categories: 64-67
 * 4 categories, 15 words each = 60 words
 */

import { Utensils, Coffee, Pizza, Wine } from "lucide-react";

export const wordBuilderCategories_part16 = {
  cooking_methods: {
    name: "Metody gotowania",
    description: "Techniki przygotowania potraw",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "kochen", hint: "gotować" },
      { word: "braten", hint: "smażyć" },
      { word: "backen", hint: "piec" },
      { word: "grillen", hint: "grillować" },
      { word: "dämpfen", hint: "gotować na parze" },
      { word: "rösten", hint: "prażyć" },
      { word: "frittieren", hint: "smażyć w głębokim tłuszczu" },
      { word: "dünsten", hint: "dusić" },
      { word: "schmoren", hint: "podsmażać" },
      { word: "blanchieren", hint: "blanszować" },
      { word: "marinieren", hint: "marynować" },
      { word: "würzen", hint: "przyprawiać" },
      { word: "schneiden", hint: "kroić" },
      { word: "hacken", hint: "siekać" },
      { word: "mischen", hint: "mieszać" }
    ]
  },

  breakfast: {
    name: "Śniadanie",
    description: "Posiłki i produkty poranne",
    icon: Coffee,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Frühstück", hint: "śniadanie" },
      { word: "Müsli", hint: "musli" },
      { word: "Haferflocken", hint: "płatki owsiane" },
      { word: "Cornflakes", hint: "płatki kukurydziane" },
      { word: "Joghurt", hint: "jogurt" },
      { word: "Marmelade", hint: "dżem" },
      { word: "Honig", hint: "miód" },
      { word: "Brötchen", hint: "bułka" },
      { word: "Toast", hint: "tost" },
      { word: "Croissant", hint: "croissant" },
      { word: "Rührei", hint: "jajecznica" },
      { word: "Spiegelei", hint: "jajko sadzone" },
      { word: "Wurst", hint: "kiełbasa" },
      { word: "Schinken", hint: "szynka" },
      { word: "Orangensaft", hint: "sok pomarańczowy" }
    ]
  },

  fast_food: {
    name: "Fast food",
    description: "Szybkie jedzenie i przekąski",
    icon: Pizza,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Pizza", hint: "pizza" },
      { word: "Hamburger", hint: "hamburger" },
      { word: "Cheeseburger", hint: "cheeseburger" },
      { word: "Pommes", hint: "frytki" },
      { word: "Hotdog", hint: "hot dog" },
      { word: "Sandwich", hint: "kanapka" },
      { word: "Döner", hint: "kebab" },
      { word: "Currywurst", hint: "kiełbasa curry" },
      { word: "Chicken Nuggets", hint: "nuggetsy z kurczaka" },
      { word: "Wrap", hint: "wrap" },
      { word: "Salat", hint: "sałatka" },
      { word: "Ketchup", hint: "ketchup" },
      { word: "Mayonnaise", hint: "majonez" },
      { word: "Senf", hint: "musztarda" },
      { word: "Soße", hint: "sos" }
    ]
  },

  beverages_advanced: {
    name: "Napoje specjalne",
    description: "Zaawansowane napoje i alkohole",
    icon: Wine,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    words: [
      { word: "Rotwein", hint: "czerwone wino" },
      { word: "Weißwein", hint: "białe wino" },
      { word: "Sekt", hint: "szampan" },
      { word: "Champagner", hint: "szampan" },
      { word: "Cocktail", hint: "koktajl" },
      { word: "Whisky", hint: "whisky" },
      { word: "Rum", hint: "rum" },
      { word: "Wodka", hint: "wódka" },
      { word: "Likör", hint: "likier" },
      { word: "Aperitif", hint: "aperitif" },
      { word: "Digestif", hint: "digestif" },
      { word: "Punsch", hint: "poncz" },
      { word: "Glühwein", hint: "grzane wino" },
      { word: "Radler", hint: "piwo z lemoniadą" },
      { word: "Schorle", hint: "wino z wodą gazowaną" }
    ]
  }
};

export default wordBuilderCategories_part16;