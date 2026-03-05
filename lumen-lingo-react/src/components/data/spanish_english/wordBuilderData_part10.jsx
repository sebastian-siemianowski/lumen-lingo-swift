/**
 * SPANISH → ENGLISH WORD BUILDER - PART 10
 * Categories: 40-44
 * 5 categories, 15 words each = 75 words
 */

import { CalendarDays, MapPin, Globe, Stethoscope, Pill } from "lucide-react";

export const wordBuilderCategories_part10 = {
  calendar_dates: {
    name: "Calendario y fechas",
    description: "Días de la semana y meses",
    icon: CalendarDays,
    color: "from-purple-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { word: "monday", hint: "lunes" },
      { word: "tuesday", hint: "martes" },
      { word: "wednesday", hint: "miércoles" },
      { word: "thursday", hint: "jueves" },
      { word: "friday", hint: "viernes" },
      { word: "saturday", hint: "sábado" },
      { word: "sunday", hint: "domingo" },
      { word: "week", hint: "semana" },
      { word: "month", hint: "mes" },
      { word: "year", hint: "año" },
      { word: "date", hint: "fecha" },
      { word: "calendar", hint: "calendario" },
      { word: "holiday", hint: "festivo" },
      { word: "weekend", hint: "fin de semana" },
      { word: "weekday", hint: "día laboral" }
    ]
  },

  geography: {
    name: "Geografía",
    description: "Lugares y elementos geográficos",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "country", hint: "país" },
      { word: "city", hint: "ciudad" },
      { word: "village", hint: "pueblo" },
      { word: "continent", hint: "continente" },
      { word: "ocean", hint: "océano" },
      { word: "sea", hint: "mar" },
      { word: "lake", hint: "lago" },
      { word: "river", hint: "río" },
      { word: "stream", hint: "arroyo" },
      { word: "island", hint: "isla" },
      { word: "peninsula", hint: "península" },
      { word: "coast", hint: "costa" },
      { word: "beach", hint: "playa" },
      { word: "desert", hint: "desierto" },
      { word: "jungle", hint: "selva" }
    ]
  },

  world_countries: {
    name: "Países del mundo",
    description: "Naciones y nacionalidades",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "spain", hint: "España" },
      { word: "england", hint: "Inglaterra" },
      { word: "america", hint: "América" },
      { word: "france", hint: "Francia" },
      { word: "germany", hint: "Alemania" },
      { word: "italy", hint: "Italia" },
      { word: "poland", hint: "Polonia" },
      { word: "russia", hint: "Rusia" },
      { word: "china", hint: "China" },
      { word: "japan", hint: "Japón" },
      { word: "mexico", hint: "México" },
      { word: "brazil", hint: "Brasil" },
      { word: "canada", hint: "Canadá" },
      { word: "australia", hint: "Australia" },
      { word: "greece", hint: "Grecia" }
    ]
  },

  medical_terms: {
    name: "Términos médicos",
    description: "Vocabulario básico de salud",
    icon: Stethoscope,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "doctor", hint: "médico" },
      { word: "nurse", hint: "enfermera" },
      { word: "patient", hint: "paciente" },
      { word: "hospital", hint: "hospital" },
      { word: "clinic", hint: "clínica" },
      { word: "treatment", hint: "tratamiento" },
      { word: "diagnosis", hint: "diagnóstico" },
      { word: "examination", hint: "examen" },
      { word: "operation", hint: "operación" },
      { word: "prescription", hint: "receta" },
      { word: "symptom", hint: "síntoma" },
      { word: "healing", hint: "curación" },
      { word: "recovery", hint: "recuperación" },
      { word: "emergency", hint: "emergencia" },
      { word: "ambulance", hint: "ambulancia" }
    ]
  },

  medicines: {
    name: "Medicamentos",
    description: "Medicinas y preparados medicinales",
    icon: Pill,
    color: "from-green-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "medicine", hint: "medicina" },
      { word: "pill", hint: "pastilla" },
      { word: "tablet", hint: "tableta" },
      { word: "capsule", hint: "cápsula" },
      { word: "syrup", hint: "jarabe" },
      { word: "ointment", hint: "pomada" },
      { word: "cream", hint: "crema" },
      { word: "drops", hint: "gotas" },
      { word: "spray", hint: "aerosol" },
      { word: "antibiotic", hint: "antibiótico" },
      { word: "painkiller", hint: "analgésico" },
      { word: "vitamin", hint: "vitamina" },
      { word: "vaccine", hint: "vacuna" },
      { word: "aspirin", hint: "aspirina" },
      { word: "bandage", hint: "vendaje" }
    ]
  }
};

export default wordBuilderCategories_part10;