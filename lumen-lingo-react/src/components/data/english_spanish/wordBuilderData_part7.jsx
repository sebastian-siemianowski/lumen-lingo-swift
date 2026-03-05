
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 7
 * Categories: 41-45
 * 5 categories, 15 words each = 75 words
 */

import { Sparkles, Droplets, Activity, Globe2, Briefcase } from "lucide-react";

export const wordBuilderCategories_part7 = {
  adjectives_personality: {
    name: "Personality Adjectives",
    description: "Character traits and personality descriptors",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "amable", hint: "kind/friendly" },
      { word: "generoso", hint: "generous" },
      { word: "honesto", hint: "honest" },
      { word: "valiente", hint: "brave" },
      { word: "tímido", hint: "shy" },
      { word: "inteligente", hint: "intelligent" },
      { word: "creativo", hint: "creative" },
      { word: "paciente", hint: "patient" },
      { word: "trabajador", hint: "hardworking" },
      { word: "gracioso", hint: "funny" },
      { word: "serio", hint: "serious" },
      { word: "optimista", hint: "optimistic" },
      { word: "confiable", hint: "reliable" },
      { word: "curioso", hint: "curious" },
      { word: "ambicioso", hint: "ambitious" }
    ]
  },

  weather_climate: {
    name: "Weather & Climate",
    description: "Weather conditions and climate patterns",
    icon: Droplets,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "lluvia", hint: "rain" },
      { word: "sol", hint: "sun" },
      { word: "nube", hint: "cloud" },
      { word: "viento", hint: "wind" },
      { word: "nieve", hint: "snow" },
      { word: "tormenta", hint: "storm" },
      { word: "trueno", hint: "thunder" },
      { word: "relámpago", hint: "lightning" },
      { word: "niebla", hint: "fog" },
      { word: "temperatura", hint: "temperature" },
      { word: "clima", hint: "climate/weather" },
      { word: "pronóstico", hint: "forecast" },
      { word: "humedad", hint: "humidity" },
      { word: "sequía", hint: "drought" },
      { word: "inundación", hint: "flood" }
    ]
  },

  sports_activities: {
    name: "Sports & Physical Activities",
    description: "Sports vocabulary for athletic activities",
    icon: Activity,
    color: "from-green-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "fútbol", hint: "soccer/football" },
      { word: "baloncesto", hint: "basketball" },
      { word: "natación", hint: "swimming" },
      { word: "tenis", hint: "tennis" },
      { word: "voleibol", hint: "volleyball" },
      { word: "atletismo", hint: "athletics" },
      { word: "gimnasia", hint: "gymnastics" },
      { word: "ciclismo", hint: "cycling" },
      { word: "boxeo", hint: "boxing" },
      { word: "equipo", hint: "team" },
      { word: "entrenador", hint: "coach/trainer" },
      { word: "campeón", hint: "champion" },
      { word: "competencia", hint: "competition" },
      { word: "victoria", hint: "victory" },
      { word: "derrota", hint: "defeat" }
    ]
  },

  countries_nationalities: {
    name: "Countries & Nationalities",
    description: "Countries and nationalities worldwide",
    icon: Globe2,
    color: "from-purple-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "España", hint: "Spain" },
      { word: "México", hint: "Mexico" },
      { word: "Argentina", hint: "Argentina" },
      { word: "Colombia", hint: "Colombia" },
      { word: "Chile", hint: "Chile" },
      { word: "Perú", hint: "Peru" },
      { word: "Venezuela", hint: "Venezuela" },
      { word: "Ecuador", hint: "Ecuador" },
      { word: "Guatemala", hint: "Guatemala" },
      { word: "Cuba", hint: "Cuba" },
      { word: "español", hint: "Spanish (nationality)" },
      { word: "mexicano", hint: "Mexican" },
      { word: "argentino", hint: "Argentine" },
      { word: "colombiano", hint: "Colombian" },
      { word: "extranjero", hint: "foreign/foreigner" }
    ]
  },

  business_office: {
    name: "Business & Office",
    description: "Professional vocabulary for workplace settings",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "reunión", hint: "meeting" },
      { word: "empresa", hint: "company" },
      { word: "oficina", hint: "office" },
      { word: "jefe", hint: "boss" },
      { word: "empleado", hint: "employee" },
      { word: "contrato", hint: "contract" },
      { word: "salario", hint: "salary" },
      { word: "proyecto", hint: "project" },
      { word: "informe", hint: "report" },
      { word: "negocio", hint: "business" },
      { word: "cliente", hint: "client" },
      { word: "presupuesto", hint: "budget" },
      { word: "ganancia", hint: "profit" },
      { word: "pérdida", hint: "loss" },
      { word: "inversión", hint: "investment" }
    ]
  }
};

export default wordBuilderCategories_part7;
