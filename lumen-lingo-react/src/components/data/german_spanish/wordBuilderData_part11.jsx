/**
 * GERMAN → SPANISH WORD BUILDER - PART 11
 * Categories: 46-50
 * 5 categories, 15 words each = 75 words
 */

import { Activity, Heart, Stethoscope, Pill, Hospital } from "lucide-react";

export const wordBuilderCategories_part11 = {
  exercise: {
    name: "Übungen und Bewegung",
    description: "Körperliche Aktivitäten und Training",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "ejercicio", hint: "Übung" },
      { word: "entrenamiento", hint: "Training" },
      { word: "gimnasio", hint: "Fitnessstudio" },
      { word: "flexiones", hint: "Liegestütze" },
      { word: "abdominales", hint: "Sit-ups" },
      { word: "sentadillas", hint: "Kniebeugen" },
      { word: "estiramiento", hint: "Dehnung" },
      { word: "calentamiento", hint: "Aufwärmen" },
      { word: "cardio", hint: "Cardio" },
      { word: "pesas", hint: "Gewichte" },
      { word: "mancuernas", hint: "Hanteln" },
      { word: "cinta de correr", hint: "Laufband" },
      { word: "bicicleta", hint: "Fahrrad" },
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
      { word: "salud", hint: "Gesundheit" },
      { word: "bienestar", hint: "Wohlbefinden" },
      { word: "nutrición", hint: "Ernährung" },
      { word: "dieta", hint: "Diät" },
      { word: "vitamina", hint: "Vitamin" },
      { word: "proteína", hint: "Protein" },
      { word: "fibra", hint: "Ballaststoff" },
      { word: "calorías", hint: "Kalorien" },
      { word: "equilibrio", hint: "Gleichgewicht" },
      { word: "sueño", hint: "Schlaf" },
      { word: "descanso", hint: "Ruhe" },
      { word: "hidratación", hint: "Hydratation" },
      { word: "bienestar mental", hint: "mentales Wohlbefinden" },
      { word: "meditación", hint: "Meditation" },
      { word: "relajación", hint: "Entspannung" }
    ]
  },

  medical_care: {
    name: "Medizinische Versorgung",
    description: "Ärztliche Behandlung und Pflege",
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "médico", hint: "Arzt" },
      { word: "doctor", hint: "Doktor" },
      { word: "enfermera", hint: "Krankenschwester" },
      { word: "paciente", hint: "Patient" },
      { word: "consulta", hint: "Sprechstunde" },
      { word: "diagnóstico", hint: "Diagnose" },
      { word: "tratamiento", hint: "Behandlung" },
      { word: "terapia", hint: "Therapie" },
      { word: "cirugía", hint: "Chirurgie" },
      { word: "operación", hint: "Operation" },
      { word: "análisis", hint: "Analyse" },
      { word: "radiografía", hint: "Röntgen" },
      { word: "receta", hint: "Rezept" },
      { word: "cita", hint: "Termin" },
      { word: "emergencia", hint: "Notfall" }
    ]
  },

  medicines: {
    name: "Medikamente",
    description: "Arzneimittel und medizinische Produkte",
    icon: Pill,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "medicina", hint: "Medizin" },
      { word: "medicamento", hint: "Medikament" },
      { word: "pastilla", hint: "Tablette" },
      { word: "píldora", hint: "Pille" },
      { word: "cápsula", hint: "Kapsel" },
      { word: "jarabe", hint: "Sirup" },
      { word: "pomada", hint: "Salbe" },
      { word: "crema", hint: "Creme" },
      { word: "inyección", hint: "Spritze" },
      { word: "vacuna", hint: "Impfung" },
      { word: "antibiótico", hint: "Antibiotikum" },
      { word: "analgésico", hint: "Schmerzmittel" },
      { word: "aspirina", hint: "Aspirin" },
      { word: "dosis", hint: "Dosis" },
      { word: "efectos secundarios", hint: "Nebenwirkungen" }
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
      { word: "clínica", hint: "Klinik" },
      { word: "urgencias", hint: "Notaufnahme" },
      { word: "sala", hint: "Saal" },
      { word: "habitación", hint: "Zimmer" },
      { word: "camilla", hint: "Trage" },
      { word: "ambulancia", hint: "Krankenwagen" },
      { word: "quirófano", hint: "Operationssaal" },
      { word: "laboratorio", hint: "Labor" },
      { word: "farmacia", hint: "Apotheke" },
      { word: "rayos X", hint: "Röntgenabteilung" },
      { word: "unidad", hint: "Abteilung" },
      { word: "intensivos", hint: "Intensivstation" },
      { word: "pediatría", hint: "Kinderheilkunde" },
      { word: "cardiología", hint: "Kardiologie" }
    ]
  }
};

export default wordBuilderCategories_part11;