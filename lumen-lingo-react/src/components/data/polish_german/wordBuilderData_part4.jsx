/**
 * POLISH → GERMAN WORD BUILDER - PART 4
 * Categories: 16-20
 * 5 categories, 15 words each = 75 words
 */

import { Apple, Carrot, Coffee, IceCream } from "lucide-react";

export const wordBuilderCategories_part4 = {
  fruits: {
    name: "Owoce",
    description: "Świeże i soczyste owoce",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Apfel", hint: "jabłko" },
      { word: "Birne", hint: "gruszka" },
      { word: "Banane", hint: "banan" },
      { word: "Orange", hint: "pomarańcza" },
      { word: "Zitrone", hint: "cytryna" },
      { word: "Erdbeere", hint: "truskawka" },
      { word: "Kirsche", hint: "wiśnia" },
      { word: "Traube", hint: "winogrono" },
      { word: "Pfirsich", hint: "brzoskwinia" },
      { word: "Pflaume", hint: "śliwka" },
      { word: "Melone", hint: "melon" },
      { word: "Wassermelone", hint: "arbuz" },
      { word: "Ananas", hint: "ananas" },
      { word: "Mango", hint: "mango" },
      { word: "Kiwi", hint: "kiwi" }
    ]
  },

  vegetables: {
    name: "Warzywa",
    description: "Zdrowe warzywa i korzenie",
    icon: Carrot,
    color: "from-green-500 to-lime-600",
    level: "beginner",
    words: [
      { word: "Karotte", hint: "marchew" },
      { word: "Kartoffel", hint: "ziemniak" },
      { word: "Tomate", hint: "pomidor" },
      { word: "Gurke", hint: "ogórek" },
      { word: "Salat", hint: "sałata" },
      { word: "Kohl", hint: "kapusta" },
      { word: "Brokkoli", hint: "brokuł" },
      { word: "Blumenkohl", hint: "kalafior" },
      { word: "Spinat", hint: "szpinak" },
      { word: "Paprika", hint: "papryka" },
      { word: "Zwiebel", hint: "cebula" },
      { word: "Knoblauch", hint: "czosnek" },
      { word: "Sellerie", hint: "seler" },
      { word: "Rettich", hint: "rzodkiewka" },
      { word: "Rübe", hint: "burak" }
    ]
  },

  drinks: {
    name: "Napoje",
    description: "Napoje gorące i zimne",
    icon: Coffee,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "Kaffee", hint: "kawa" },
      { word: "Tee", hint: "herbata" },
      { word: "Saft", hint: "sok" },
      { word: "Wasser", hint: "woda" },
      { word: "Milch", hint: "mleko" },
      { word: "Bier", hint: "piwo" },
      { word: "Wein", hint: "wino" },
      { word: "Limonade", hint: "lemoniada" },
      { word: "Cola", hint: "cola" },
      { word: "Kakao", hint: "kakao" },
      { word: "Smoothie", hint: "koktajl" },
      { word: "Mineralwasser", hint: "woda mineralna" },
      { word: "Espresso", hint: "espresso" },
      { word: "Cappuccino", hint: "cappuccino" },
      { word: "Cocktail", hint: "koktajl" }
    ]
  },

  desserts: {
    name: "Desery i słodycze",
    description: "Słodkie przysmaki i ciasta",
    icon: IceCream,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "Eis", hint: "lody" },
      { word: "Schokolade", hint: "czekolada" },
      { word: "Bonbon", hint: "cukierek" },
      { word: "Torte", hint: "tort" },
      { word: "Kuchen", hint: "ciasto" },
      { word: "Keks", hint: "ciastko" },
      { word: "Pudding", hint: "budyń" },
      { word: "Sahne", hint: "śmietana" },
      { word: "Karamell", hint: "karmel" },
      { word: "Marmelade", hint: "dżem" },
      { word: "Honig", hint: "miód" },
      { word: "Zucker", hint: "cukier" },
      { word: "süß", hint: "słodki" },
      { word: "lecker", hint: "smaczny" },
      { word: "Gebäck", hint: "pieczywo" }
    ]
  }
};

export default wordBuilderCategories_part4;