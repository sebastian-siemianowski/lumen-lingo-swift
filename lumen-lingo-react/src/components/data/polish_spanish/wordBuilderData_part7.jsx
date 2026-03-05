/**
 * POLISH → SPANISH WORD BUILDER - PART 7
 * Categories: 41-45
 * 5 categories, 15 words each = 75 words
 */

import { School, Book, Brain, GraduationCap, Lightbulb } from "lucide-react";

export const wordBuilderCategories_part7 = {
  education: {
    name: "Edukacja",
    description: "Instytucje i system edukacyjny",
    icon: School,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "educación", hint: "edukacja" },
      { word: "escuela", hint: "szkoła" },
      { word: "colegio", hint: "liceum" },
      { word: "universidad", hint: "uniwersytet" },
      { word: "clase", hint: "klasa" },
      { word: "curso", hint: "kurs" },
      { word: "lección", hint: "lekcja" },
      { word: "examen", hint: "egzamin" },
      { word: "tarea", hint: "zadanie domowe" },
      { word: "proyecto", hint: "projekt" },
      { word: "calificación", hint: "ocena" },
      { word: "diploma", hint: "dyplom" },
      { word: "título", hint: "tytuł" },
      { word: "beca", hint: "stypendium" },
      { word: "semestre", hint: "semestr" }
    ]
  },

  subjects: {
    name: "Przedmioty szkolne",
    description: "Akademickie dziedziny studiów",
    icon: Book,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "matemáticas", hint: "matematyka" },
      { word: "ciencia", hint: "nauka" },
      { word: "historia", hint: "historia" },
      { word: "geografía", hint: "geografia" },
      { word: "literatura", hint: "literatura" },
      { word: "arte", hint: "sztuka" },
      { word: "música", hint: "muzyka" },
      { word: "educación", hint: "wychowanie fizyczne" },
      { word: "química", hint: "chemia" },
      { word: "física", hint: "fizyka" },
      { word: "biología", hint: "biologia" },
      { word: "idiomas", hint: "języki" },
      { word: "informática", hint: "informatyka" },
      { word: "filosofía", hint: "filozofia" },
      { word: "economía", hint: "ekonomia" }
    ]
  },

  learning_verbs: {
    name: "Czasowniki uczenia się",
    description: "Działania związane z nauką",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "aprender", hint: "uczyć się" },
      { word: "estudiar", hint: "studiować" },
      { word: "memorizar", hint: "zapamiętywać" },
      { word: "practicar", hint: "ćwiczyć" },
      { word: "repasar", hint: "powtarzać" },
      { word: "entender", hint: "rozumieć" },
      { word: "comprender", hint: "pojmować" },
      { word: "analizar", hint: "analizować" },
      { word: "resolver", hint: "rozwiązywać" },
      { word: "investigar", hint: "badać" },
      { word: "descubrir", hint: "odkrywać" },
      { word: "explicar", hint: "wyjaśniać" },
      { word: "enseñar", hint: "uczyć" },
      { word: "demostrar", hint: "demonstrować" },
      { word: "evaluar", hint: "oceniać" }
    ]
  },

  academic_life: {
    name: "Życie akademickie",
    description: "Doświadczenia studenckie na uczelni",
    icon: GraduationCap,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "estudiante", hint: "student" },
      { word: "profesor", hint: "profesor" },
      { word: "compañero", hint: "kolega z klasy" },
      { word: "aula", hint: "sala wykładowa" },
      { word: "biblioteca", hint: "biblioteka" },
      { word: "laboratorio", hint: "laboratorium" },
      { word: "cafetería", hint: "stołówka" },
      { word: "residencia", hint: "akademik" },
      { word: "campus", hint: "kampus" },
      { word: "graduación", hint: "ukończenie" },
      { word: "matrícula", hint: "wpis" },
      { word: "horario", hint: "rozkład zajęć" },
      { word: "carrera", hint: "kierunek studiów" },
      { word: "especialización", hint: "specjalizacja" },
      { word: "investigación", hint: "badania" }
    ]
  },

  knowledge: {
    name: "Wiedza",
    description: "Pojęcia związane z wiedzą",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    words: [
      { word: "conocimiento", hint: "wiedza" },
      { word: "sabiduría", hint: "mądrość" },
      { word: "inteligencia", hint: "inteligencja" },
      { word: "experiencia", hint: "doświadczenie" },
      { word: "habilidad", hint: "umiejętność" },
      { word: "capacidad", hint: "zdolność" },
      { word: "talento", hint: "talent" },
      { word: "destreza", hint: "zręczność" },
      { word: "competencia", hint: "kompetencja" },
      { word: "pericia", hint: "ekspertyza" },
      { word: "maestría", hint: "mistrzostwo" },
      { word: "comprensión", hint: "zrozumienie" },
      { word: "razonamiento", hint: "rozumowanie" },
      { word: "lógica", hint: "logika" },
      { word: "creatividad", hint: "kreatywność" }
    ]
  }
};

export default wordBuilderCategories_part7;