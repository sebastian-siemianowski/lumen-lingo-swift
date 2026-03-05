/**
 * ENGLISH → SPANISH WORD BUILDER - PART 19
 * Categories: 101-105
 * 5 categories, 15 words each = 75 words
 */

import { Gem, Brain, Drama, Code, Zap } from "lucide-react";

export const wordBuilderCategories_part19 = {
  minerals_gems: {
    name: "Minerals & Gems",
    description: "Precious stones and mineral vocabulary",
    icon: Gem,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "diamante", hint: "diamond" },
      { word: "rubí", hint: "ruby" },
      { word: "esmeralda", hint: "emerald" },
      { word: "zafiro", hint: "sapphire" },
      { word: "perla", hint: "pearl" },
      { word: "ámbar", hint: "amber" },
      { word: "jade", hint: "jade" },
      { word: "topacio", hint: "topaz" },
      { word: "amatista", hint: "amethyst" },
      { word: "cristal", hint: "crystal" },
      { word: "cuarzo", hint: "quartz" },
      { word: "ópalo", hint: "opal" },
      { word: "turquesa", hint: "turquoise" },
      { word: "granito", hint: "granite" },
      { word: "mármol", hint: "marble" }
    ]
  },

  mental_health: {
    name: "Mental Health",
    description: "Mental wellness and emotional vocabulary",
    icon: Brain,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "salud", hint: "health" },
      { word: "bienestar", hint: "wellness" },
      { word: "estrés", hint: "stress" },
      { word: "ansiedad", hint: "anxiety" },
      { word: "depresión", hint: "depression" },
      { word: "terapia", hint: "therapy" },
      { word: "psicólogo", hint: "psychologist" },
      { word: "emoción", hint: "emotion" },
      { word: "resiliencia", hint: "resilience" },
      { word: "autoestima", hint: "self-esteem" },
      { word: "mindfulness", hint: "mindfulness" },
      { word: "trauma", hint: "trauma" },
      { word: "recuperación", hint: "recovery" },
      { word: "equilibrio", hint: "balance" },
      { word: "apoyo", hint: "support" }
    ]
  },

  theater_drama: {
    name: "Theater & Drama",
    description: "Theater and dramatic arts vocabulary",
    icon: Drama,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "teatro", hint: "theater" },
      { word: "actor", hint: "actor" },
      { word: "actriz", hint: "actress" },
      { word: "escenario", hint: "stage" },
      { word: "obra", hint: "play" },
      { word: "director", hint: "director" },
      { word: "guion", hint: "script" },
      { word: "ensayo", hint: "rehearsal" },
      { word: "personaje", hint: "character" },
      { word: "diálogo", hint: "dialogue" },
      { word: "telón", hint: "curtain" },
      { word: "público", hint: "audience" },
      { word: "escena", hint: "scene" },
      { word: "vestuario", hint: "costume" },
      { word: "aplausos", hint: "applause" }
    ]
  },

  computing_terms: {
    name: "Computing Terms",
    description: "Computer and technology vocabulary",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "programación", hint: "programming" },
      { word: "código", hint: "code" },
      { word: "algoritmo", hint: "algorithm" },
      { word: "servidor", hint: "server" },
      { word: "base", hint: "database" },
      { word: "navegador", hint: "browser" },
      { word: "enlace", hint: "link" },
      { word: "descarga", hint: "download" },
      { word: "subida", hint: "upload" },
      { word: "memoria", hint: "memory" },
      { word: "procesador", hint: "processor" },
      { word: "programa", hint: "program" },
      { word: "sistema", hint: "system" },
      { word: "usuario", hint: "user" },
      { word: "conexión", hint: "connection" }
    ]
  },

  energy_power: {
    name: "Energy & Power",
    description: "Energy sources and power vocabulary",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "energía", hint: "energy" },
      { word: "electricidad", hint: "electricity" },
      { word: "solar", hint: "solar" },
      { word: "eólica", hint: "wind" },
      { word: "nuclear", hint: "nuclear" },
      { word: "hidráulica", hint: "hydraulic" },
      { word: "combustible", hint: "fuel" },
      { word: "batería", hint: "battery" },
      { word: "generador", hint: "generator" },
      { word: "turbina", hint: "turbine" },
      { word: "voltaje", hint: "voltage" },
      { word: "circuito", hint: "circuit" },
      { word: "potencia", hint: "power" },
      { word: "corriente", hint: "current" },
      { word: "enchufe", hint: "plug" }
    ]
  }
};

export default wordBuilderCategories_part19;