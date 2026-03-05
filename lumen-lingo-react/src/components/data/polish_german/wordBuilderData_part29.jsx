/**
 * POLISH → GERMAN WORD BUILDER - PART 29
 * Categories: 116-119
 * 4 categories, 15 words each = 60 words
 */

import { Baby, GraduationCap, Briefcase, Users } from "lucide-react";

export const wordBuilderCategories_part29 = {
  childhood: {
    name: "Dzieciństwo",
    description: "Etapy życia i rozwój dzieci",
    icon: Baby,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Kindheit", hint: "dzieciństwo" },
      { word: "Baby", hint: "niemowlę" },
      { word: "Kleinkind", hint: "maluch" },
      { word: "Kindergarten", hint: "przedszkole" },
      { word: "Vorschule", hint: "zerówka" },
      { word: "Spielplatz", hint: "plac zabaw" },
      { word: "Schaukel", hint: "huśtawka" },
      { word: "Rutsche", hint: "zjeżdżalnia" },
      { word: "Sandkasten", hint: "piaskownica" },
      { word: "Wippe", hint: "huśtawka" },
      { word: "Klettergerüst", hint: "drabinka" },
      { word: "Puppe", hint: "lalka" },
      { word: "Teddybär", hint: "miś pluszowy" },
      { word: "Bauklötze", hint: "klocki" },
      { word: "Malbuch", hint: "kolorowanka" }
    ]
  },

  student_life: {
    name: "Życie studenckie",
    description: "Studia i aktywności uniwersyteckie",
    icon: GraduationCap,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "Studium", hint: "studia" },
      { word: "Campus", hint: "kampus" },
      { word: "Vorlesung", hint: "wykład" },
      { word: "Seminar", hint: "seminarium" },
      { word: "Hörsaal", hint: "sala wykładowa" },
      { word: "Mensa", hint: "stołówka studencka" },
      { word: "Bibliothek", hint: "biblioteka" },
      { word: "Dozent", hint: "wykładowca" },
      { word: "Professor", hint: "profesor" },
      { word: "Kommilitone", hint: "kolega ze studiów" },
      { word: "Hausarbeit", hint: "praca domowa" },
      { word: "Referat", hint: "referat" },
      { word: "Klausur", hint: "kolokwium" },
      { word: "Abschluss", hint: "dyplom" },
      { word: "Bachelor", hint: "licencjat" }
    ]
  },

  career_workplace: {
    name: "Kariera i miejsce pracy",
    description: "Rozwój zawodowy i biuro",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "Karriere", hint: "kariera" },
      { word: "Bewerbung", hint: "podanie o pracę" },
      { word: "Lebenslauf", hint: "CV" },
      { word: "Vorstellungsgespräch", hint: "rozmowa kwalifikacyjna" },
      { word: "Arbeitsvertrag", hint: "umowa o pracę" },
      { word: "Gehalt", hint: "wynagrodzenie" },
      { word: "Lohn", hint: "pensja" },
      { word: "Beförderung", hint: "awans" },
      { word: "Kündigung", hint: "wypowiedzenie" },
      { word: "Arbeitszeit", hint: "czas pracy" },
      { word: "Überstunden", hint: "nadgodziny" },
      { word: "Urlaub", hint: "urlop" },
      { word: "Krankschreibung", hint: "zwolnienie lekarskie" },
      { word: "Pensionierung", hint: "emerytura" },
      { word: "Kollege", hint: "kolega z pracy" }
    ]
  },

  social_life: {
    name: "Życie towarzyskie",
    description: "Spotkania i wydarzenia społeczne",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "Treffen", hint: "spotkanie" },
      { word: "Verabredung", hint: "umówienie się" },
      { word: "Date", hint: "randka" },
      { word: "Party", hint: "przyjęcie" },
      { word: "Einladung", hint: "zaproszenie" },
      { word: "Gast", hint: "gość" },
      { word: "Gastgeber", hint: "gospodarz" },
      { word: "Gesellschaft", hint: "towarzystwo" },
      { word: "Veranstaltung", hint: "wydarzenie" },
      { word: "Konzert", hint: "koncert" },
      { word: "Club", hint: "klub" },
      { word: "Disco", hint: "dyskoteka" },
      { word: "Bar", hint: "bar" },
      { word: "Kneipe", hint: "knajpa" },
      { word: "Restaurant", hint: "restauracja" }
    ]
  }
};

export default wordBuilderCategories_part29;