/**
 * POLISH → GERMAN WORD BUILDER - PART 1
 * Categories: 1-5
 * 5 categories, 15 words each = 75 words
 */

import { Home, Utensils, ShoppingBag, Shirt, Car } from "lucide-react";

export const wordBuilderCategories_part1 = {
  household_items: {
    name: "Przedmioty domowe",
    description: "Podstawowe rzeczy w domu",
    icon: Home,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "Tisch", hint: "stół" },
      { word: "Stuhl", hint: "krzesło" },
      { word: "Bett", hint: "łóżko" },
      { word: "Sofa", hint: "sofa" },
      { word: "Schrank", hint: "szafa" },
      { word: "Lampe", hint: "lampa" },
      { word: "Spiegel", hint: "lustro" },
      { word: "Teppich", hint: "dywan" },
      { word: "Vorhang", hint: "zasłona" },
      { word: "Kissen", hint: "poduszka" },
      { word: "Decke", hint: "koc" },
      { word: "Regal", hint: "półka" },
      { word: "Kommode", hint: "komoda" },
      { word: "Sessel", hint: "fotel" },
      { word: "Nachttisch", hint: "szafka nocna" }
    ]
  },

  food_kitchen: {
    name: "Jedzenie i kuchnia",
    description: "Potrawy i produkty spożywcze",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "Brot", hint: "chleb" },
      { word: "Butter", hint: "masło" },
      { word: "Käse", hint: "ser" },
      { word: "Fleisch", hint: "mięso" },
      { word: "Fisch", hint: "ryba" },
      { word: "Gemüse", hint: "warzywa" },
      { word: "Obst", hint: "owoce" },
      { word: "Milch", hint: "mleko" },
      { word: "Ei", hint: "jajko" },
      { word: "Reis", hint: "ryż" },
      { word: "Nudeln", hint: "makaron" },
      { word: "Suppe", hint: "zupa" },
      { word: "Salat", hint: "sałatka" },
      { word: "Kuchen", hint: "ciasto" },
      { word: "Zucker", hint: "cukier" }
    ]
  },

  shopping: {
    name: "Zakupy",
    description: "Sklepy i kupowanie rzeczy",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "Geschäft", hint: "sklep" },
      { word: "Supermarkt", hint: "supermarket" },
      { word: "Markt", hint: "rynek" },
      { word: "Kasse", hint: "kasa" },
      { word: "Preis", hint: "cena" },
      { word: "Rabatt", hint: "zniżka" },
      { word: "Verkauf", hint: "wyprzedaż" },
      { word: "Einkaufswagen", hint: "wózek" },
      { word: "Korb", hint: "koszyk" },
      { word: "Tasche", hint: "torba" },
      { word: "Quittung", hint: "paragon" },
      { word: "Geld", hint: "pieniądze" },
      { word: "Karte", hint: "karta" },
      { word: "Kunde", hint: "klient" },
      { word: "Verkäufer", hint: "sprzedawca" }
    ]
  },

  clothing: {
    name: "Ubrania",
    description: "Odzież i dodatki",
    icon: Shirt,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "Hemd", hint: "koszula" },
      { word: "Hose", hint: "spodnie" },
      { word: "Kleid", hint: "sukienka" },
      { word: "Rock", hint: "spódnica" },
      { word: "Jacke", hint: "kurtka" },
      { word: "Mantel", hint: "płaszcz" },
      { word: "Pullover", hint: "sweter" },
      { word: "Schal", hint: "szalik" },
      { word: "Handschuhe", hint: "rękawiczki" },
      { word: "Mütze", hint: "czapka" },
      { word: "Schuhe", hint: "buty" },
      { word: "Socken", hint: "skarpetki" },
      { word: "Gürtel", hint: "pasek" },
      { word: "Krawatte", hint: "krawat" },
      { word: "Unterwäsche", hint: "bielizna" }
    ]
  },

  transportation: {
    name: "Transport",
    description: "Pojazdy i środki transportu",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "beginner",
    words: [
      { word: "Auto", hint: "samochód" },
      { word: "Bus", hint: "autobus" },
      { word: "Zug", hint: "pociąg" },
      { word: "Flugzeug", hint: "samolot" },
      { word: "Fahrrad", hint: "rower" },
      { word: "Motorrad", hint: "motocykl" },
      { word: "Straßenbahn", hint: "tramwaj" },
      { word: "U-Bahn", hint: "metro" },
      { word: "Taxi", hint: "taksówka" },
      { word: "Schiff", hint: "statek" },
      { word: "Boot", hint: "łódź" },
      { word: "Lastwagen", hint: "ciężarówka" },
      { word: "Hubschrauber", hint: "helikopter" },
      { word: "Rakete", hint: "rakieta" },
      { word: "Ballon", hint: "balon" }
    ]
  }
};

export default wordBuilderCategories_part1;