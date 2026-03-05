/**
 * POLISH → GERMAN WORD BUILDER - PART 33
 * Categories: 132-135
 * 4 categories, 15 words each = 60 words
 */

import { Pizza, Soup, Salad, Award } from "lucide-react";

export const wordBuilderCategories_part33 = {
  italian_cuisine: {
    name: "Kuchnia włoska",
    description: "Dania i specjalności włoskie",
    icon: Pizza,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Pizza", hint: "pizza" },
      { word: "Pasta", hint: "makaron" },
      { word: "Spaghetti", hint: "spaghetti" },
      { word: "Lasagne", hint: "lasagne" },
      { word: "Ravioli", hint: "ravioli" },
      { word: "Gnocchi", hint: "gnocchi" },
      { word: "Risotto", hint: "risotto" },
      { word: "Tiramisu", hint: "tiramisu" },
      { word: "Antipasti", hint: "przystawki" },
      { word: "Bruschetta", hint: "bruschetta" },
      { word: "Carpaccio", hint: "carpaccio" },
      { word: "Pesto", hint: "pesto" },
      { word: "Mozzarella", hint: "mozzarella" },
      { word: "Parmesan", hint: "parmezan" },
      { word: "Basilikum", hint: "bazylia" }
    ]
  },

  soups_stews: {
    name: "Zupy i gulasze",
    description: "Dania w płynie i potrawy gotowane",
    icon: Soup,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "Suppe", hint: "zupa" },
      { word: "Brühe", hint: "bulion" },
      { word: "Eintopf", hint: "gulasz" },
      { word: "Hühnersuppe", hint: "rosół" },
      { word: "Tomatensuppe", hint: "zupa pomidorowa" },
      { word: "Gemüsesuppe", hint: "zupa jarzynowa" },
      { word: "Kartoffelsuppe", hint: "zupa ziemniaczana" },
      { word: "Zwiebelsuppe", hint: "zupa cebulowa" },
      { word: "Fischsuppe", hint: "zupa rybna" },
      { word: "Gulasch", hint: "gulasz" },
      { word: "Chili", hint: "chili" },
      { word: "Ragout", hint: "ragout" },
      { word: "Cremesuppe", hint: "zupa krem" },
      { word: "Kaltschale", hint: "chłodnik" },
      { word: "Löffel", hint: "łyżka" }
    ]
  },

  salads: {
    name: "Sałatki",
    description: "Sałatki i dania surówkowe",
    icon: Salad,
    color: "from-green-500 to-lime-600",
    level: "beginner",
    words: [
      { word: "Salat", hint: "sałatka" },
      { word: "grüner Salat", hint: "zielona sałatka" },
      { word: "Tomatensalat", hint: "sałatka pomidorowa" },
      { word: "Gurkensalat", hint: "mizeria" },
      { word: "Kartoffelsalat", hint: "sałatka ziemniaczana" },
      { word: "Nudelsalat", hint: "sałatka makaronowa" },
      { word: "Krautsalat", hint: "surówka z kapusty" },
      { word: "Gemischter Salat", hint: "sałatka mieszana" },
      { word: "Caesarsalat", hint: "sałatka Cezar" },
      { word: "Obstsalat", hint: "sałatka owocowa" },
      { word: "Dressing", hint: "sos do sałatki" },
      { word: "Essig", hint: "ocet" },
      { word: "Öl", hint: "olej" },
      { word: "Salatschüssel", hint: "miska na sałatkę" },
      { word: "Salatbesteck", hint: "sztućce do sałatki" }
    ]
  },

  gourmet_dining: {
    name: "Fine dining",
    description: "Wykwintna kuchnia i gastronomia",
    icon: Award,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "Gourmet", hint: "smakosz" },
      { word: "Feinschmecker", hint: "koneser" },
      { word: "Delikatesse", hint: "delikates" },
      { word: "Menü", hint: "menu" },
      { word: "Gang", hint: "danie" },
      { word: "Vorspeise", hint: "przystawka" },
      { word: "Hauptspeise", hint: "danie główne" },
      { word: "Nachspeise", hint: "deser" },
      { word: "Beilage", hint: "dodatek" },
      { word: "Soße", hint: "sos" },
      { word: "Gewürz", hint: "przyprawa" },
      { word: "Garnitur", hint: "garnitur" },
      { word: "Servierplatte", hint: "półmisek" },
      { word: "Weinkarte", hint: "karta win" },
      { word: "Sommelier", hint: "somelier" }
    ]
  }
};

export default wordBuilderCategories_part33;