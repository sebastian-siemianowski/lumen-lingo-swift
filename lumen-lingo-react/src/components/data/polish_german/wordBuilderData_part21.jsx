/**
 * POLISH → GERMAN WORD BUILDER - PART 21
 * Categories: 84-87
 * 4 categories, 15 words each = 60 words
 */

import { Bed, Sofa, Lightbulb, DoorOpen } from "lucide-react";

export const wordBuilderCategories_part21 = {
  bedroom_furniture: {
    name: "Meble sypialniane",
    description: "Wyposażenie sypialni i snu",
    icon: Bed,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "Schlafzimmer", hint: "sypialnia" },
      { word: "Doppelbett", hint: "łóżko podwójne" },
      { word: "Einzelbett", hint: "łóżko pojedyncze" },
      { word: "Bettdecke", hint: "kołdra" },
      { word: "Bettlaken", hint: "prześcieradło" },
      { word: "Kopfkissen", hint: "poduszka" },
      { word: "Kleiderschrank", hint: "szafa na ubrania" },
      { word: "Kommode", hint: "komoda" },
      { word: "Nachttisch", hint: "szafka nocna" },
      { word: "Nachttischlampe", hint: "lampka nocna" },
      { word: "Wecker", hint: "budzik" },
      { word: "Gardine", hint: "firanka" },
      { word: "Vorhang", hint: "zasłona" },
      { word: "Teppich", hint: "dywan" },
      { word: "Bettwäsche", hint: "pościel" }
    ]
  },

  living_room: {
    name: "Salon i wypoczynek",
    description: "Meble i sprzęty do salonu",
    icon: Sofa,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Wohnzimmer", hint: "salon" },
      { word: "Couch", hint: "kanapa" },
      { word: "Sessel", hint: "fotel" },
      { word: "Couchtisch", hint: "stolik kawowy" },
      { word: "Regal", hint: "regał" },
      { word: "Bücherregal", hint: "biblioteczka" },
      { word: "Vitrine", hint: "gablota" },
      { word: "Sideboard", hint: "kredens" },
      { word: "Kamin", hint: "kominek" },
      { word: "Fernseher", hint: "telewizor" },
      { word: "Lautsprecher", hint: "głośnik" },
      { word: "Bild", hint: "obraz" },
      { word: "Vase", hint: "wazon" },
      { word: "Kissen", hint: "poduszka dekoracyjna" },
      { word: "Decke", hint: "koc" }
    ]
  },

  lighting: {
    name: "Oświetlenie",
    description: "Lampy i źródła światła",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "Lampe", hint: "lampa" },
      { word: "Glühbirne", hint: "żarówka" },
      { word: "Deckenlampe", hint: "lampa sufitowa" },
      { word: "Kronleuchter", hint: "żyrandol" },
      { word: "Stehlampe", hint: "lampa stojąca" },
      { word: "Tischlampe", hint: "lampka stołowa" },
      { word: "Wandlampe", hint: "kinkiet" },
      { word: "Schreibtischlampe", hint: "lampka biurkowa" },
      { word: "Lichtschalter", hint: "włącznik światła" },
      { word: "Dimmer", hint: "ściemniacz" },
      { word: "LED", hint: "dioda LED" },
      { word: "Halogen", hint: "halogen" },
      { word: "Kerze", hint: "świeca" },
      { word: "Laterne", hint: "latarnia" },
      { word: "Scheinwerfer", hint: "reflektor" }
    ]
  },

  doors_windows: {
    name: "Drzwi i okna",
    description: "Elementy wejść i otworów",
    icon: DoorOpen,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "Tür", hint: "drzwi" },
      { word: "Haustür", hint: "drzwi wejściowe" },
      { word: "Hintertür", hint: "drzwi tylne" },
      { word: "Fenster", hint: "okno" },
      { word: "Türklinke", hint: "klamka" },
      { word: "Schlüssel", hint: "klucz" },
      { word: "Schloss", hint: "zamek" },
      { word: "Türrahmen", hint: "futryna" },
      { word: "Schwelle", hint: "próg" },
      { word: "Fensterbrett", hint: "parapet" },
      { word: "Jalousie", hint: "żaluzja" },
      { word: "Rollo", hint: "roleta" },
      { word: "Fensterscheibe", hint: "szyba" },
      { word: "Türstopper", hint: "ogranicznik drzwi" },
      { word: "Klingel", hint: "dzwonek" }
    ]
  }
};

export default wordBuilderCategories_part21;