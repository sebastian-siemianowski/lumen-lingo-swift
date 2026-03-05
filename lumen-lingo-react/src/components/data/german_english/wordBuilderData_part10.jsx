/**
 * GERMAN → ENGLISH WORD BUILDER - PART 10
 * Categories: 41-45
 * 5 categories, 15 words each = 75 words
 */

import { Activity, Heart, Stethoscope, Pill, Hospital } from "lucide-react";

export const wordBuilderCategories_part10 = {
  exercise: {
    name: "Übungen und Bewegung",
    description: "Körperliche Aktivitäten und Training",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "exercise", hint: "Übung" },
      { word: "training", hint: "Training" },
      { word: "gym", hint: "Fitnessstudio" },
      { word: "pushup", hint: "Liegestütze" },
      { word: "situp", hint: "Sit-up" },
      { word: "squat", hint: "Kniebeuge" },
      { word: "stretch", hint: "Dehnung" },
      { word: "warmup", hint: "Aufwärmen" },
      { word: "cardio", hint: "Cardio" },
      { word: "weights", hint: "Gewichte" },
      { word: "dumbbells", hint: "Hanteln" },
      { word: "treadmill", hint: "Laufband" },
      { word: "bicycle", hint: "Fahrrad" },
      { word: "yoga", hint: "Yoga" },
      { word: "pilates", hint: "Pilates" }
    ]
  },

  health_wellness: {
    name: "Gesundheit und Wohlbefinden",
    description: "Gesund leben und sich wohlfühlen",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "health", hint: "Gesundheit" },
      { word: "wellness", hint: "Wohlbefinden" },
      { word: "nutrition", hint: "Ernährung" },
      { word: "diet", hint: "Diät" },
      { word: "vitamin", hint: "Vitamin" },
      { word: "protein", hint: "Protein" },
      { word: "fiber", hint: "Ballaststoff" },
      { word: "calories", hint: "Kalorien" },
      { word: "balance", hint: "Gleichgewicht" },
      { word: "sleep", hint: "Schlaf" },
      { word: "rest", hint: "Ruhe" },
      { word: "hydration", hint: "Hydratation" },
      { word: "mental health", hint: "mentales Wohlbefinden" },
      { word: "meditation", hint: "Meditation" },
      { word: "relaxation", hint: "Entspannung" }
    ]
  },

  medical_care: {
    name: "Medizinische Versorgung",
    description: "Ärztliche Behandlung und Pflege",
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "doctor", hint: "Arzt" },
      { word: "physician", hint: "Doktor" },
      { word: "nurse", hint: "Krankenschwester" },
      { word: "patient", hint: "Patient" },
      { word: "consultation", hint: "Sprechstunde" },
      { word: "diagnosis", hint: "Diagnose" },
      { word: "treatment", hint: "Behandlung" },
      { word: "therapy", hint: "Therapie" },
      { word: "surgery", hint: "Chirurgie" },
      { word: "operation", hint: "Operation" },
      { word: "test", hint: "Analyse" },
      { word: "x-ray", hint: "Röntgen" },
      { word: "prescription", hint: "Rezept" },
      { word: "appointment", hint: "Termin" },
      { word: "emergency", hint: "Notfall" }
    ]
  },

  medicines: {
    name: "Medikamente",
    description: "Arzneimittel und medizinische Produkte",
    icon: Pill,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "medicine", hint: "Medizin" },
      { word: "medication", hint: "Medikament" },
      { word: "pill", hint: "Tablette" },
      { word: "tablet", hint: "Pille" },
      { word: "capsule", hint: "Kapsel" },
      { word: "syrup", hint: "Sirup" },
      { word: "ointment", hint: "Salbe" },
      { word: "cream", hint: "Creme" },
      { word: "injection", hint: "Spritze" },
      { word: "vaccine", hint: "Impfung" },
      { word: "antibiotic", hint: "Antibiotikum" },
      { word: "painkiller", hint: "Schmerzmittel" },
      { word: "aspirin", hint: "Aspirin" },
      { word: "dose", hint: "Dosis" },
      { word: "side effects", hint: "Nebenwirkungen" }
    ]
  },

  hospital: {
    name: "Krankenhaus",
    description: "Krankenhauseinrichtungen und Abteilungen",
    icon: Hospital,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "hospital", hint: "Krankenhaus" },
      { word: "clinic", hint: "Klinik" },
      { word: "emergency room", hint: "Notaufnahme" },
      { word: "ward", hint: "Station" },
      { word: "room", hint: "Zimmer" },
      { word: "stretcher", hint: "Trage" },
      { word: "ambulance", hint: "Krankenwagen" },
      { word: "operating room", hint: "Operationssaal" },
      { word: "laboratory", hint: "Labor" },
      { word: "pharmacy", hint: "Apotheke" },
      { word: "x-ray department", hint: "Röntgenabteilung" },
      { word: "department", hint: "Abteilung" },
      { word: "intensive care", hint: "Intensivstation" },
      { word: "pediatrics", hint: "Kinderheilkunde" },
      { word: "cardiology", hint: "Kardiologie" }
    ]
  }
};

export default wordBuilderCategories_part10;