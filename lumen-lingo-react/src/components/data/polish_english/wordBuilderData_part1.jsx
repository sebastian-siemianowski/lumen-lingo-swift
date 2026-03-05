/**
 * POLISH → ENGLISH WORD BUILDER - PART 1
 * Categories: 1-8
 * 8 categories, 15 words each = 120 words
 */

import { Utensils, Coffee, ShoppingCart, Home, Shirt, Watch, Book, Briefcase } from "lucide-react";

export const wordBuilderCategories_part1 = {
  restaurant_food: {
    name: "Jedzenie w restauracji",
    description: "Potrawy i dania w lokalach",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "appetizer", hint: "przystawka" },
      { word: "entree", hint: "danie główne" },
      { word: "dessert", hint: "deser" },
      { word: "beverage", hint: "napój" },
      { word: "salad", hint: "sałatka" },
      { word: "soup", hint: "zupa" },
      { word: "sandwich", hint: "kanapka" },
      { word: "steak", hint: "stek" },
      { word: "seafood", hint: "owoce morza" },
      { word: "pasta", hint: "makaron" },
      { word: "pizza", hint: "pizza" },
      { word: "burger", hint: "burger" },
      { word: "sushi", hint: "sushi" },
      { word: "curry", hint: "curry" },
      { word: "risotto", hint: "risotto" }
    ]
  },

  drinks_beverages: {
    name: "Napoje i picie",
    description: "Różne rodzaje napojów",
    icon: Coffee,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "coffee", hint: "kawa" },
      { word: "tea", hint: "herbata" },
      { word: "juice", hint: "sok" },
      { word: "smoothie", hint: "koktajl owocowy" },
      { word: "milkshake", hint: "koktajl mleczny" },
      { word: "lemonade", hint: "lemoniada" },
      { word: "soda", hint: "napój gazowany" },
      { word: "wine", hint: "wino" },
      { word: "beer", hint: "piwo" },
      { word: "cocktail", hint: "koktajl" },
      { word: "water", hint: "woda" },
      { word: "milk", hint: "mleko" },
      { word: "cocoa", hint: "kakao" },
      { word: "espresso", hint: "espresso" },
      { word: "cappuccino", hint: "cappuccino" }
    ]
  },

  shopping_items: {
    name: "Zakupy i towary",
    description: "Przedmioty kupowane w sklepach",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "groceries", hint: "artykuły spożywcze" },
      { word: "receipt", hint: "paragon" },
      { word: "discount", hint: "zniżka" },
      { word: "sale", hint: "wyprzedaż" },
      { word: "price", hint: "cena" },
      { word: "bargain", hint: "okazja" },
      { word: "cashier", hint: "kasjer" },
      { word: "checkout", hint: "kasa" },
      { word: "cart", hint: "wózek" },
      { word: "basket", hint: "koszyk" },
      { word: "aisle", hint: "alejka" },
      { word: "shelf", hint: "półka" },
      { word: "package", hint: "opakowanie" },
      { word: "brand", hint: "marka" },
      { word: "refund", hint: "zwrot pieniędzy" }
    ]
  },

  household_chores: {
    name: "Prace domowe",
    description: "Czynności związane z domem",
    icon: Home,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "cleaning", hint: "sprzątanie" },
      { word: "vacuuming", hint: "odkurzanie" },
      { word: "dusting", hint: "wycieranie kurzu" },
      { word: "mopping", hint: "mopowanie" },
      { word: "sweeping", hint: "zamiatanie" },
      { word: "washing", hint: "pranie" },
      { word: "ironing", hint: "prasowanie" },
      { word: "cooking", hint: "gotowanie" },
      { word: "dishwashing", hint: "zmywanie naczyń" },
      { word: "gardening", hint: "ogrodnictwo" },
      { word: "mowing", hint: "koszenie" },
      { word: "watering", hint: "podlewanie" },
      { word: "organizing", hint: "porządkowanie" },
      { word: "recycling", hint: "segregowanie" },
      { word: "folding", hint: "składanie" }
    ]
  },

  clothing_accessories: {
    name: "Ubrania i dodatki",
    description: "Odzież i akcesoria modowe",
    icon: Shirt,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "dress", hint: "sukienka" },
      { word: "shirt", hint: "koszula" },
      { word: "pants", hint: "spodnie" },
      { word: "skirt", hint: "spódnica" },
      { word: "jacket", hint: "kurtka" },
      { word: "coat", hint: "płaszcz" },
      { word: "sweater", hint: "sweter" },
      { word: "scarf", hint: "szalik" },
      { word: "gloves", hint: "rękawiczki" },
      { word: "hat", hint: "kapelusz" },
      { word: "belt", hint: "pasek" },
      { word: "tie", hint: "krawat" },
      { word: "socks", hint: "skarpetki" },
      { word: "underwear", hint: "bielizna" },
      { word: "jewelry", hint: "biżuteria" }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Frazy związane z czasem",
    icon: Watch,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "yesterday", hint: "wczoraj" },
      { word: "today", hint: "dziś" },
      { word: "tomorrow", hint: "jutro" },
      { word: "morning", hint: "ranek" },
      { word: "afternoon", hint: "popołudnie" },
      { word: "evening", hint: "wieczór" },
      { word: "night", hint: "noc" },
      { word: "midnight", hint: "północ" },
      { word: "noon", hint: "południe" },
      { word: "dawn", hint: "świt" },
      { word: "dusk", hint: "zmierzch" },
      { word: "weekend", hint: "weekend" },
      { word: "weekday", hint: "dzień powszedni" },
      { word: "fortnight", hint: "dwa tygodnie" },
      { word: "decade", hint: "dekada" }
    ]
  },

  reading_writing: {
    name: "Czytanie i pisanie",
    description: "Słownictwo literackie i edukacyjne",
    icon: Book,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "novel", hint: "powieść" },
      { word: "chapter", hint: "rozdział" },
      { word: "paragraph", hint: "akapit" },
      { word: "sentence", hint: "zdanie" },
      { word: "author", hint: "autor" },
      { word: "character", hint: "postać" },
      { word: "plot", hint: "fabuła" },
      { word: "setting", hint: "sceneria" },
      { word: "theme", hint: "temat" },
      { word: "genre", hint: "gatunek" },
      { word: "poetry", hint: "poezja" },
      { word: "biography", hint: "biografia" },
      { word: "fiction", hint: "fikcja" },
      { word: "magazine", hint: "magazyn" },
      { word: "newspaper", hint: "gazeta" }
    ]
  },

  office_work: {
    name: "Praca biurowa",
    description: "Słownictwo środowiska biurowego",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "meeting", hint: "spotkanie" },
      { word: "deadline", hint: "termin" },
      { word: "presentation", hint: "prezentacja" },
      { word: "report", hint: "raport" },
      { word: "spreadsheet", hint: "arkusz kalkulacyjny" },
      { word: "document", hint: "dokument" },
      { word: "email", hint: "email" },
      { word: "conference", hint: "konferencja" },
      { word: "agenda", hint: "porządek obrad" },
      { word: "colleague", hint: "kolega z pracy" },
      { word: "manager", hint: "menedżer" },
      { word: "employee", hint: "pracownik" },
      { word: "salary", hint: "wynagrodzenie" },
      { word: "promotion", hint: "awans" },
      { word: "resignation", hint: "rezygnacja" }
    ]
  }
};

export default wordBuilderCategories_part1;