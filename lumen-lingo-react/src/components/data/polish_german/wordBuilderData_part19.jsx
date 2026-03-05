/**
 * POLISH → GERMAN WORD BUILDER - PART 19
 * Categories: 76-79
 * 4 categories, 15 words each = 60 words
 */

import { Shirt, ShoppingCart, Watch, Crown } from "lucide-react";

export const wordBuilderCategories_part19 = {
  clothing_accessories: {
    name: "Dodatki do ubrania",
    description: "Akcesoria i ozdoby",
    icon: Watch,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Uhr", hint: "zegarek" },
      { word: "Armband", hint: "bransoletka" },
      { word: "Halskette", hint: "naszyjnik" },
      { word: "Ohrringe", hint: "kolczyki" },
      { word: "Ring", hint: "pierścionek" },
      { word: "Brille", hint: "okulary" },
      { word: "Sonnenbrille", hint: "okulary przeciwsłoneczne" },
      { word: "Hut", hint: "kapelusz" },
      { word: "Kappe", hint: "czapka z daszkiem" },
      { word: "Tasche", hint: "torebka" },
      { word: "Rucksack", hint: "plecak" },
      { word: "Geldbörse", hint: "portfel" },
      { word: "Handtasche", hint: "torebka damska" },
      { word: "Schirm", hint: "parasol" },
      { word: "Handschuhe", hint: "rękawiczki" }
    ]
  },

  shopping_mall: {
    name: "Centrum handlowe",
    description: "Sklepy i zakupy w galerii",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "Einkaufszentrum", hint: "centrum handlowe" },
      { word: "Kaufhaus", hint: "dom towarowy" },
      { word: "Boutique", hint: "butik" },
      { word: "Umkleidekabine", hint: "przymierzalnia" },
      { word: "Rolltreppe", hint: "schody ruchome" },
      { word: "Aufzug", hint: "winda" },
      { word: "Stockwerk", hint: "piętro" },
      { word: "Ausgang", hint: "wyjście" },
      { word: "Eingang", hint: "wejście" },
      { word: "Parkplatz", hint: "parking" },
      { word: "Sonderangebot", hint: "promocja" },
      { word: "Ausverkauf", hint: "wyprzedaż" },
      { word: "Garantie", hint: "gwarancja" },
      { word: "Umtausch", hint: "wymiana" },
      { word: "Rückgabe", hint: "zwrot" }
    ]
  },

  fabrics_materials: {
    name: "Tkaniny i materiały",
    description: "Rodzaje materiałów tekstylnych",
    icon: Shirt,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "Baumwolle", hint: "bawełna" },
      { word: "Wolle", hint: "wełna" },
      { word: "Seide", hint: "jedwab" },
      { word: "Leinen", hint: "len" },
      { word: "Polyester", hint: "poliester" },
      { word: "Nylon", hint: "nylon" },
      { word: "Leder", hint: "skóra" },
      { word: "Wildleder", hint: "zamsz" },
      { word: "Samt", hint: "aksamit" },
      { word: "Jeans", hint: "dżins" },
      { word: "Spitze", hint: "koronka" },
      { word: "Frottee", hint: "frotte" },
      { word: "Fleece", hint: "polar" },
      { word: "Stoff", hint: "tkanina" },
      { word: "Faser", hint: "włókno" }
    ]
  },

  jewelry: {
    name: "Biżuteria",
    description: "Klejnoty i ozdoby",
    icon: Crown,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    words: [
      { word: "Schmuck", hint: "biżuteria" },
      { word: "Diamant", hint: "diament" },
      { word: "Rubin", hint: "rubin" },
      { word: "Smaragd", hint: "szmaragd" },
      { word: "Saphir", hint: "szafir" },
      { word: "Perle", hint: "perła" },
      { word: "Gold", hint: "złoto" },
      { word: "Silber", hint: "srebro" },
      { word: "Platin", hint: "platyna" },
      { word: "Edelstein", hint: "kamień szlachetny" },
      { word: "Krone", hint: "korona" },
      { word: "Brosche", hint: "broszka" },
      { word: "Anhänger", hint: "wisiorek" },
      { word: "Manschettenknöpfe", hint: "spinki do mankietów" },
      { word: "Diadem", hint: "diadem" }
    ]
  }
};

export default wordBuilderCategories_part19;