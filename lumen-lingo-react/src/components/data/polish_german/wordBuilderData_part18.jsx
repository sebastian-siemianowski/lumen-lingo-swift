/**
 * POLISH → GERMAN WORD BUILDER - PART 18
 * Categories: 72-75
 * 4 categories, 15 words each = 60 words
 */

import { BookOpen, Pen, Calculator, Globe } from "lucide-react";

export const wordBuilderCategories_part18 = {
  school_subjects: {
    name: "Przedmioty szkolne",
    description: "Lekcje i dyscypliny naukowe",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "Mathematik", hint: "matematyka" },
      { word: "Deutsch", hint: "niemiecki" },
      { word: "Englisch", hint: "angielski" },
      { word: "Geschichte", hint: "historia" },
      { word: "Geographie", hint: "geografia" },
      { word: "Biologie", hint: "biologia" },
      { word: "Chemie", hint: "chemia" },
      { word: "Physik", hint: "fizyka" },
      { word: "Kunst", hint: "plastyka" },
      { word: "Musik", hint: "muzyka" },
      { word: "Sport", hint: "wychowanie fizyczne" },
      { word: "Religion", hint: "religia" },
      { word: "Informatik", hint: "informatyka" },
      { word: "Politik", hint: "wiedza o społeczeństwie" },
      { word: "Literatur", hint: "literatura" }
    ]
  },

  writing_reading: {
    name: "Pisanie i czytanie",
    description: "Umiejętności językowe i literackie",
    icon: Pen,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "schreiben", hint: "pisać" },
      { word: "lesen", hint: "czytać" },
      { word: "Stift", hint: "długopis" },
      { word: "Bleistift", hint: "ołówek" },
      { word: "Radiergummi", hint: "gumka" },
      { word: "Lineal", hint: "linijka" },
      { word: "Schere", hint: "nożyczki" },
      { word: "Kleber", hint: "klej" },
      { word: "Papier", hint: "papier" },
      { word: "Brief", hint: "list" },
      { word: "Aufsatz", hint: "wypracowanie" },
      { word: "Gedicht", hint: "wiersz" },
      { word: "Absatz", hint: "akapit" },
      { word: "Satz", hint: "zdanie" },
      { word: "Wort", hint: "słowo" }
    ]
  },

  math_operations: {
    name: "Operacje matematyczne",
    description: "Działania i pojęcia matematyczne",
    icon: Calculator,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "addieren", hint: "dodawać" },
      { word: "subtrahieren", hint: "odejmować" },
      { word: "multiplizieren", hint: "mnożyć" },
      { word: "dividieren", hint: "dzielić" },
      { word: "Summe", hint: "suma" },
      { word: "Differenz", hint: "różnica" },
      { word: "Produkt", hint: "iloczyn" },
      { word: "Quotient", hint: "iloraz" },
      { word: "Prozent", hint: "procent" },
      { word: "Bruch", hint: "ułamek" },
      { word: "Dezimalzahl", hint: "liczba dziesiętna" },
      { word: "Wurzel", hint: "pierwiastek" },
      { word: "Potenz", hint: "potęga" },
      { word: "Gleichung", hint: "równanie" },
      { word: "Formel", hint: "wzór" }
    ]
  },

  world_geography: {
    name: "Geografia świata",
    description: "Kontynenty i regiony geograficzne",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "Europa", hint: "Europa" },
      { word: "Asien", hint: "Azja" },
      { word: "Afrika", hint: "Afryka" },
      { word: "Amerika", hint: "Ameryka" },
      { word: "Australien", hint: "Australia" },
      { word: "Antarktis", hint: "Antarktyda" },
      { word: "Nordpol", hint: "Biegun Północny" },
      { word: "Südpol", hint: "Biegun Południowy" },
      { word: "Äquator", hint: "równik" },
      { word: "Tropen", hint: "zwrotniki" },
      { word: "Wüste", hint: "pustynia" },
      { word: "Regenwald", hint: "las deszczowy" },
      { word: "Gebirge", hint: "pasmo górskie" },
      { word: "Vulkan", hint: "wulkan" },
      { word: "Erdteil", hint: "kontynent" }
    ]
  }
};

export default wordBuilderCategories_part18;