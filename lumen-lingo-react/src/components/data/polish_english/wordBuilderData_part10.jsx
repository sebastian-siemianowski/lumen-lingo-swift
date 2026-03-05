/**
 * POLISH → ENGLISH WORD BUILDER - PART 10
 * Categories: 51-54
 * 4 categories, 15 words each = 60 words
 */

import { IceCream, ChefHat, UtensilsCrossed, Wine } from "lucide-react";

export const wordBuilderCategories_part10 = {
  desserts_sweets: {
    name: "Desery i słodycze",
    description: "Słodkie przysmaki i desery",
    icon: IceCream,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "chocolate", hint: "czekolada" },
      { word: "candy", hint: "cukierek" },
      { word: "lollipop", hint: "lizak" },
      { word: "caramel", hint: "karmel" },
      { word: "fudge", hint: "krówka" },
      { word: "toffee", hint: "toffi" },
      { word: "marshmallow", hint: "pianki" },
      { word: "gummy", hint: "żelki" },
      { word: "jelly", hint: "galaretka" },
      { word: "custard", hint: "krem" },
      { word: "mousse", hint: "mus" },
      { word: "sorbet", hint: "sorbet" },
      { word: "sundae", hint: "lody z dodatkami" },
      { word: "parfait", hint: "deser warstwowy" },
      { word: "truffle", hint: "trufla" }
    ]
  },

  cooking_methods: {
    name: "Metody gotowania",
    description: "Techniki kulinarne i przygotowanie",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "boiling", hint: "gotowanie" },
      { word: "frying", hint: "smażenie" },
      { word: "baking", hint: "pieczenie" },
      { word: "roasting", hint: "pieczenie w piekarniku" },
      { word: "grilling", hint: "grillowanie" },
      { word: "steaming", hint: "gotowanie na parze" },
      { word: "poaching", hint: "podgotowywanie" },
      { word: "simmering", hint: "gotowanie na wolnym ogniu" },
      { word: "sautéing", hint: "smażenie na patelni" },
      { word: "braising", hint: "duszenie" },
      { word: "stirring", hint: "mieszanie" },
      { word: "whisking", hint: "ubijanie" },
      { word: "chopping", hint: "siekanie" },
      { word: "slicing", hint: "krojenie" },
      { word: "marinating", hint: "marynowanie" }
    ]
  },

  kitchen_utensils: {
    name: "Przybory kuchenne",
    description: "Narzędzia do gotowania",
    icon: UtensilsCrossed,
    color: "from-gray-500 to-slate-600",
    level: "beginner",
    words: [
      { word: "spoon", hint: "łyżka" },
      { word: "fork", hint: "widelec" },
      { word: "knife", hint: "nóż" },
      { word: "ladle", hint: "chochla" },
      { word: "spatula", hint: "łopatka" },
      { word: "whisk", hint: "trzepaczka" },
      { word: "peeler", hint: "obieraczka" },
      { word: "grater", hint: "tarka" },
      { word: "strainer", hint: "durszlak" },
      { word: "funnel", hint: "lejek" },
      { word: "opener", hint: "otwieracz" },
      { word: "tongs", hint: "szczypce" },
      { word: "masher", hint: "tłuczek" },
      { word: "rolling pin", hint: "wałek" },
      { word: "cutting board", hint: "deska do krojenia" }
    ]
  },

  tableware: {
    name: "Zastawa stołowa",
    description: "Naczynia i sztućce",
    icon: Wine,
    color: "from-purple-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "plate", hint: "talerz" },
      { word: "bowl", hint: "miska" },
      { word: "cup", hint: "filiżanka" },
      { word: "mug", hint: "kubek" },
      { word: "glass", hint: "szklanka" },
      { word: "saucer", hint: "spodek" },
      { word: "pitcher", hint: "dzbanek" },
      { word: "teapot", hint: "czajnik do herbaty" },
      { word: "coffeepot", hint: "dzbanek do kawy" },
      { word: "sugar bowl", hint: "cukiernica" },
      { word: "salt shaker", hint: "solniczka" },
      { word: "pepper mill", hint: "młynek do pieprzu" },
      { word: "napkin", hint: "serwetka" },
      { word: "tablecloth", hint: "obrus" },
      { word: "placemat", hint: "podkładka" }
    ]
  }
};

export default wordBuilderCategories_part10;