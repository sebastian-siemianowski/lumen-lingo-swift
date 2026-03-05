/**
 * GERMAN → ENGLISH WORD BUILDER - PART 26
 * Categories: 111-115
 * 5 categories, 15 words each = 75 words
 */

import { Users2, Baby, GraduationCap, Briefcase, Heart } from "lucide-react";

export const wordBuilderCategories_part26 = {
  family_relations: {
    name: "Familienbeziehungen",
    description: "Familienmitglieder und Verwandte",
    icon: Users2,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "family", hint: "Familie" },
      { word: "mother", hint: "Mutter" },
      { word: "father", hint: "Vater" },
      { word: "sister", hint: "Schwester" },
      { word: "brother", hint: "Bruder" },
      { word: "grandmother", hint: "Großmutter" },
      { word: "grandfather", hint: "Großvater" },
      { word: "aunt", hint: "Tante" },
      { word: "uncle", hint: "Onkel" },
      { word: "cousin", hint: "Cousin" },
      { word: "niece", hint: "Nichte" },
      { word: "nephew", hint: "Neffe" },
      { word: "daughter", hint: "Tochter" },
      { word: "son", hint: "Sohn" },
      { word: "parents", hint: "Eltern" }
    ]
  },

  life_stages: {
    name: "Lebensphasen",
    description: "Entwicklung und Lebensabschnitte",
    icon: Baby,
    color: "from-pink-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "birth", hint: "Geburt" },
      { word: "infancy", hint: "Säuglingsalter" },
      { word: "childhood", hint: "Kindheit" },
      { word: "adolescence", hint: "Jugend" },
      { word: "teenager", hint: "Teenager" },
      { word: "adulthood", hint: "Erwachsenenalter" },
      { word: "youth", hint: "Jugendzeit" },
      { word: "middle age", hint: "mittleres Alter" },
      { word: "elderly", hint: "älter" },
      { word: "retirement", hint: "Ruhestand" },
      { word: "generation", hint: "Generation" },
      { word: "growth", hint: "Wachstum" },
      { word: "maturity", hint: "Reife" },
      { word: "aging", hint: "Altern" },
      { word: "lifespan", hint: "Lebensspanne" }
    ]
  },

  academic_subjects: {
    name: "Schulfächer",
    description: "Unterrichtsfächer und Disziplinen",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "mathematics", hint: "Mathematik" },
      { word: "science", hint: "Naturwissenschaften" },
      { word: "history", hint: "Geschichte" },
      { word: "geography", hint: "Geographie" },
      { word: "literature", hint: "Literatur" },
      { word: "physics", hint: "Physik" },
      { word: "chemistry", hint: "Chemie" },
      { word: "biology", hint: "Biologie" },
      { word: "art", hint: "Kunst" },
      { word: "music", hint: "Musik" },
      { word: "physical education", hint: "Sport" },
      { word: "languages", hint: "Sprachen" },
      { word: "economics", hint: "Wirtschaft" },
      { word: "philosophy", hint: "Philosophie" },
      { word: "psychology", hint: "Psychologie" }
    ]
  },

  professions: {
    name: "Berufe",
    description: "Verschiedene Berufe und Jobs",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "teacher", hint: "Lehrer" },
      { word: "doctor", hint: "Arzt" },
      { word: "nurse", hint: "Krankenschwester" },
      { word: "engineer", hint: "Ingenieur" },
      { word: "lawyer", hint: "Anwalt" },
      { word: "accountant", hint: "Buchhalter" },
      { word: "architect", hint: "Architekt" },
      { word: "chef", hint: "Koch" },
      { word: "artist", hint: "Künstler" },
      { word: "musician", hint: "Musiker" },
      { word: "programmer", hint: "Programmierer" },
      { word: "journalist", hint: "Journalist" },
      { word: "salesperson", hint: "Verkäufer" },
      { word: "mechanic", hint: "Mechaniker" },
      { word: "pilot", hint: "Pilot" }
    ]
  },

  emotions_feelings: {
    name: "Emotionen und Gefühle",
    description: "Gefühlszustände und Emotionen",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "happy", hint: "glücklich" },
      { word: "sad", hint: "traurig" },
      { word: "angry", hint: "wütend" },
      { word: "excited", hint: "aufgeregt" },
      { word: "nervous", hint: "nervös" },
      { word: "calm", hint: "ruhig" },
      { word: "surprised", hint: "überrascht" },
      { word: "scared", hint: "ängstlich" },
      { word: "proud", hint: "stolz" },
      { word: "jealous", hint: "eifersüchtig" },
      { word: "grateful", hint: "dankbar" },
      { word: "confused", hint: "verwirrt" },
      { word: "disappointed", hint: "enttäuscht" },
      { word: "relieved", hint: "erleichtert" },
      { word: "worried", hint: "besorgt" }
    ]
  }
};

export default wordBuilderCategories_part26;