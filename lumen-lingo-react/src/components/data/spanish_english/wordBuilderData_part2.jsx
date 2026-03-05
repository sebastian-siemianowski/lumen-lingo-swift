/**
 * SPANISH → ENGLISH WORD BUILDER - PART 2
 * Categories: 6-10
 * 5 categories, 15 words each = 75 words
 */

import { Heart, Brain, Users, Briefcase, GraduationCap } from "lucide-react";

export const wordBuilderCategories_part2 = {
  emotions: {
    name: "Emociones y sentimientos",
    description: "Estados emocionales y ánimos",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "happiness", hint: "felicidad" },
      { word: "sadness", hint: "tristeza" },
      { word: "anger", hint: "enojo" },
      { word: "fear", hint: "miedo" },
      { word: "joy", hint: "alegría" },
      { word: "love", hint: "amor" },
      { word: "hate", hint: "odio" },
      { word: "surprise", hint: "sorpresa" },
      { word: "excitement", hint: "emoción" },
      { word: "jealousy", hint: "celos" },
      { word: "pride", hint: "orgullo" },
      { word: "shame", hint: "vergüenza" },
      { word: "guilt", hint: "culpa" },
      { word: "hope", hint: "esperanza" },
      { word: "despair", hint: "desesperación" }
    ]
  },

  mental_activities: {
    name: "Actividades mentales",
    description: "Pensamiento y procesos cognitivos",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "thinking", hint: "pensamiento" },
      { word: "learning", hint: "aprendizaje" },
      { word: "understanding", hint: "comprensión" },
      { word: "remembering", hint: "recordar" },
      { word: "forgetting", hint: "olvidar" },
      { word: "concentration", hint: "concentración" },
      { word: "imagination", hint: "imaginación" },
      { word: "creativity", hint: "creatividad" },
      { word: "decision", hint: "decisión" },
      { word: "opinion", hint: "opinión" },
      { word: "thought", hint: "pensamiento" },
      { word: "idea", hint: "idea" },
      { word: "logic", hint: "lógica" },
      { word: "reason", hint: "razón" },
      { word: "wisdom", hint: "sabiduría" }
    ]
  },

  family_relationships: {
    name: "Familia y relaciones",
    description: "Miembros de familia y conocidos",
    icon: Users,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "father", hint: "padre" },
      { word: "mother", hint: "madre" },
      { word: "brother", hint: "hermano" },
      { word: "sister", hint: "hermana" },
      { word: "son", hint: "hijo" },
      { word: "daughter", hint: "hija" },
      { word: "grandfather", hint: "abuelo" },
      { word: "grandmother", hint: "abuela" },
      { word: "uncle", hint: "tío" },
      { word: "aunt", hint: "tía" },
      { word: "cousin", hint: "primo" },
      { word: "husband", hint: "esposo" },
      { word: "wife", hint: "esposa" },
      { word: "friend", hint: "amigo" },
      { word: "neighbor", hint: "vecino" }
    ]
  },

  professions: {
    name: "Profesiones",
    description: "Diferentes ocupaciones y trabajos",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "doctor", hint: "médico" },
      { word: "teacher", hint: "maestro" },
      { word: "engineer", hint: "ingeniero" },
      { word: "lawyer", hint: "abogado" },
      { word: "seller", hint: "vendedor" },
      { word: "chef", hint: "cocinero" },
      { word: "waiter", hint: "camarero" },
      { word: "police", hint: "policía" },
      { word: "firefighter", hint: "bombero" },
      { word: "nurse", hint: "enfermera" },
      { word: "mechanic", hint: "mecánico" },
      { word: "electrician", hint: "electricista" },
      { word: "painter", hint: "pintor" },
      { word: "carpenter", hint: "carpintero" },
      { word: "programmer", hint: "programador" }
    ]
  },

  education: {
    name: "Educación",
    description: "Escuela y aprendizaje",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "school", hint: "escuela" },
      { word: "university", hint: "universidad" },
      { word: "teacher", hint: "profesor" },
      { word: "student", hint: "estudiante" },
      { word: "lesson", hint: "lección" },
      { word: "homework", hint: "tarea" },
      { word: "exam", hint: "examen" },
      { word: "grade", hint: "calificación" },
      { word: "certificate", hint: "certificado" },
      { word: "diploma", hint: "diploma" },
      { word: "classroom", hint: "aula" },
      { word: "board", hint: "pizarra" },
      { word: "book", hint: "libro" },
      { word: "notebook", hint: "cuaderno" },
      { word: "pencil", hint: "lápiz" }
    ]
  }
};

export default wordBuilderCategories_part2;