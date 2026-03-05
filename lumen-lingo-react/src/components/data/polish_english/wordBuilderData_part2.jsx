/**
 * POLISH → ENGLISH WORD BUILDER - PART 2
 * Categories: 9-15
 * 7 categories, 15 words each = 105 words
 */

import { Heart, Brain, Dumbbell, Smile, Activity, Stethoscope, Pill } from "lucide-react";

export const wordBuilderCategories_part2 = {
  emotions_feelings: {
    name: "Emocje i uczucia",
    description: "Stany emocjonalne i nastroje",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "happiness", hint: "szczęście" },
      { word: "sadness", hint: "smutek" },
      { word: "anger", hint: "złość" },
      { word: "fear", hint: "strach" },
      { word: "surprise", hint: "zaskoczenie" },
      { word: "disgust", hint: "obrzydzenie" },
      { word: "excitement", hint: "podniecenie" },
      { word: "anxiety", hint: "niepokój" },
      { word: "jealousy", hint: "zazdrość" },
      { word: "pride", hint: "duma" },
      { word: "shame", hint: "wstyd" },
      { word: "guilt", hint: "poczucie winy" },
      { word: "relief", hint: "ulga" },
      { word: "frustration", hint: "frustracja" },
      { word: "contentment", hint: "zadowolenie" }
    ]
  },

  mental_activities: {
    name: "Czynności umysłowe",
    description: "Procesy myślowe i poznawcze",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "thinking", hint: "myślenie" },
      { word: "reasoning", hint: "rozumowanie" },
      { word: "analyzing", hint: "analizowanie" },
      { word: "deciding", hint: "decydowanie" },
      { word: "remembering", hint: "pamiętanie" },
      { word: "forgetting", hint: "zapominanie" },
      { word: "imagining", hint: "wyobrażanie sobie" },
      { word: "daydreaming", hint: "marzenie" },
      { word: "concentrating", hint: "koncentrowanie się" },
      { word: "understanding", hint: "rozumienie" },
      { word: "learning", hint: "uczenie się" },
      { word: "solving", hint: "rozwiązywanie" },
      { word: "creating", hint: "tworzenie" },
      { word: "planning", hint: "planowanie" },
      { word: "organizing", hint: "organizowanie" }
    ]
  },

  exercise_fitness: {
    name: "Ćwiczenia i fitness",
    description: "Aktywność fizyczna i trening",
    icon: Dumbbell,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "workout", hint: "trening" },
      { word: "exercise", hint: "ćwiczenie" },
      { word: "stretching", hint: "rozciąganie" },
      { word: "warmup", hint: "rozgrzewka" },
      { word: "cardio", hint: "kardio" },
      { word: "strength", hint: "siła" },
      { word: "endurance", hint: "wytrzymałość" },
      { word: "flexibility", hint: "elastyczność" },
      { word: "repetition", hint: "powtórzenie" },
      { word: "set", hint: "seria" },
      { word: "pushup", hint: "pompka" },
      { word: "squat", hint: "przysiad" },
      { word: "plank", hint: "deska" },
      { word: "jogging", hint: "jogging" },
      { word: "cycling", hint: "jazda na rowerze" }
    ]
  },

  personality_traits: {
    name: "Cechy osobowości",
    description: "Charakterystyka i temperament",
    icon: Smile,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    words: [
      { word: "confident", hint: "pewny siebie" },
      { word: "shy", hint: "nieśmiały" },
      { word: "friendly", hint: "przyjazny" },
      { word: "outgoing", hint: "towarzyski" },
      { word: "reserved", hint: "powściągliwy" },
      { word: "generous", hint: "hojny" },
      { word: "selfish", hint: "samolubny" },
      { word: "honest", hint: "uczciwy" },
      { word: "creative", hint: "kreatywny" },
      { word: "ambitious", hint: "ambitny" },
      { word: "lazy", hint: "leniwy" },
      { word: "patient", hint: "cierpliwy" },
      { word: "stubborn", hint: "uparty" },
      { word: "curious", hint: "ciekawski" },
      { word: "reliable", hint: "niezawodny" }
    ]
  },

  daily_routines: {
    name: "Codzienna rutyna",
    description: "Codzienne czynności i nawyki",
    icon: Activity,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "waking", hint: "budzenie się" },
      { word: "showering", hint: "prysznic" },
      { word: "dressing", hint: "ubieranie się" },
      { word: "breakfast", hint: "śniadanie" },
      { word: "commuting", hint: "dojazd" },
      { word: "working", hint: "praca" },
      { word: "lunch", hint: "lunch" },
      { word: "dinner", hint: "kolacja" },
      { word: "studying", hint: "nauka" },
      { word: "relaxing", hint: "relaks" },
      { word: "exercising", hint: "ćwiczenie" },
      { word: "reading", hint: "czytanie" },
      { word: "sleeping", hint: "spanie" },
      { word: "brushing", hint: "mycie zębów" },
      { word: "grooming", hint: "pielęgnacja" }
    ]
  },

  medical_terms: {
    name: "Terminy medyczne",
    description: "Podstawowe słownictwo zdrowotne",
    icon: Stethoscope,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "doctor", hint: "lekarz" },
      { word: "nurse", hint: "pielęgniarka" },
      { word: "patient", hint: "pacjent" },
      { word: "diagnosis", hint: "diagnoza" },
      { word: "treatment", hint: "leczenie" },
      { word: "prescription", hint: "recepta" },
      { word: "surgery", hint: "operacja" },
      { word: "examination", hint: "badanie" },
      { word: "symptom", hint: "objaw" },
      { word: "recovery", hint: "rekonwalescencja" },
      { word: "infection", hint: "infekcja" },
      { word: "injection", hint: "zastrzyk" },
      { word: "bandage", hint: "bandaż" },
      { word: "emergency", hint: "nagły wypadek" },
      { word: "ambulance", hint: "karetka" }
    ]
  },

  medicines_drugs: {
    name: "Leki i medykamenty",
    description: "Rodzaje leków i preparatów",
    icon: Pill,
    color: "from-green-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "pill", hint: "tabletka" },
      { word: "tablet", hint: "pastylka" },
      { word: "capsule", hint: "kapsułka" },
      { word: "syrup", hint: "syrop" },
      { word: "ointment", hint: "maść" },
      { word: "cream", hint: "krem" },
      { word: "drops", hint: "krople" },
      { word: "spray", hint: "spray" },
      { word: "antibiotic", hint: "antybiotyk" },
      { word: "painkiller", hint: "środek przeciwbólowy" },
      { word: "vitamin", hint: "witamina" },
      { word: "supplement", hint: "suplement" },
      { word: "vaccine", hint: "szczepionka" },
      { word: "aspirin", hint: "aspiryna" },
      { word: "ibuprofen", hint: "ibuprofen" }
    ]
  }
};

export default wordBuilderCategories_part2;