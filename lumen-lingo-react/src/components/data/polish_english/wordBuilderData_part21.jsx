
/**
 * POLISH → ENGLISH WORD BUILDER - PART 21
 * Categories: 101-102
 * 2 categories, 15 words each = 30 words
 */

import { Globe, BookOpen } from "lucide-react";

export const wordBuilderCategories_part21 = {
  countries_nationalities: {
    name: "Kraje i narodowości",
    description: "Nazwy państw i narodowości",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "Poland", hint: "Polska" },
      { word: "England", hint: "Anglia" },
      { word: "Spain", hint: "Hiszpania" },
      { word: "Germany", hint: "Niemcy" },
      { word: "France", hint: "Francja" },
      { word: "Italy", hint: "Włochy" },
      { word: "Portugal", hint: "Portugalia" },
      { word: "Greece", hint: "Grecja" },
      { word: "Russia", hint: "Rosja" },
      { word: "Ukraine", hint: "Ukraina" },
      { word: "America", hint: "Ameryka" },
      { word: "Canada", hint: "Kanada" },
      { word: "Mexico", hint: "Meksyk" },
      { word: "Brazil", hint: "Brazylia" },
      { word: "Australia", hint: "Australia" }
    ]
  },

  education_school: {
    name: "Edukacja i szkoła",
    description: "Terminy szkolne i edukacyjne",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "student", hint: "uczeń" },
      { word: "teacher", hint: "nauczyciel" },
      { word: "classroom", hint: "klasa" },
      { word: "lesson", hint: "lekcja" },
      { word: "homework", hint: "praca domowa" },
      { word: "exam", hint: "egzamin" },
      { word: "grade", hint: "ocena" },
      { word: "diploma", hint: "dyplom" },
      { word: "semester", hint: "semestr" },
      { word: "lecture", hint: "wykład" },
      { word: "textbook", hint: "podręcznik" },
      { word: "notebook", hint: "zeszyt" },
      { word: "assignment", hint: "zadanie" },
      { word: "scholarship", hint: "stypendium" },
      { word: "graduation", hint: "ukończenie szkoły" }
    ]
  }
};

export default wordBuilderCategories_part21;
