
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 2
 * Categories: 6-10
 * 5 categories, 15 words each = 75 words
 */

import { Dog, Sun, Car, Heart, BookOpen } from "lucide-react";

export const wordBuilderCategories_part2 = {
  animals: {
    name: "Animals",
    description: "Expand animal vocabulary for nature",
    icon: Dog,
    color: "from-amber-500 to-yellow-600",
    level: "beginner",
    words: [
      { word: "perro", hint: "dog" },
      { word: "gato", hint: "cat" },
      { word: "pájaro", hint: "bird" },
      { word: "pez", hint: "fish" },
      { word: "caballo", hint: "horse" },
      { word: "vaca", hint: "cow" },
      { word: "cerdo", hint: "pig" },
      { word: "oveja", hint: "sheep" },
      { word: "conejo", hint: "rabbit" },
      { word: "ratón", hint: "mouse" },
      { word: "elefante", hint: "elephant" },
      { word: "león", hint: "lion" },
      { word: "tigre", hint: "tiger" },
      { word: "mono", hint: "monkey" },
      { word: "oso", hint: "bear" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Discuss weather conditions and forecasts",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sol", hint: "sun" },
      { word: "lluvia", hint: "rain" },
      { word: "nube", hint: "cloud" },
      { word: "viento", hint: "wind" },
      { word: "nieve", hint: "snow" },
      { word: "tormenta", hint: "storm" },
      { word: "niebla", hint: "fog" },
      { word: "trueno", hint: "thunder" },
      { word: "relámpago", hint: "lightning" },
      { word: "arcoíris", hint: "rainbow" },
      { word: "frío", hint: "cold" },
      { word: "calor", hint: "heat" },
      { word: "cielo", hint: "sky" },
      { word: "temperatura", hint: "temperature" },
      { word: "clima", hint: "climate" }
    ]
  },

  transportation: {
    name: "Transportation",
    description: "Get around with essential transport vocabulary",
    icon: Car,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "coche", hint: "car" },
      { word: "autobús", hint: "bus" },
      { word: "tren", hint: "train" },
      { word: "avión", hint: "airplane" },
      { word: "bicicleta", hint: "bicycle" },
      { word: "motocicleta", hint: "motorcycle" },
      { word: "barco", hint: "boat" },
      { word: "taxi", hint: "taxi" },
      { word: "metro", hint: "subway" },
      { word: "camión", hint: "truck" },
      { word: "helicóptero", hint: "helicopter" },
      { word: "cohete", hint: "rocket" },
      { word: "ambulancia", hint: "ambulance" },
      { word: "camioneta", hint: "van" },
      { word: "tranvía", hint: "tram" }
    ]
  },

  body_parts: {
    name: "Body Parts",
    description: "Learn anatomical vocabulary for health",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "cabeza", hint: "head" },
      { word: "ojo", hint: "eye" },
      { word: "oreja", hint: "ear" },
      { word: "nariz", hint: "nose" },
      { word: "boca", hint: "mouth" },
      { word: "diente", hint: "tooth" },
      { word: "brazo", hint: "arm" },
      { word: "mano", hint: "hand" },
      { word: "dedo", hint: "finger" },
      { word: "pierna", hint: "leg" },
      { word: "pie", hint: "foot" },
      { word: "corazón", hint: "heart" },
      { word: "estómago", hint: "stomach" },
      { word: "espalda", hint: "back" },
      { word: "cuello", hint: "neck" }
    ]
  },

  school_supplies: {
    name: "School Supplies",
    description: "Equip yourself with classroom vocabulary",
    icon: BookOpen,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    words: [
      { word: "libro", hint: "book" },
      { word: "cuaderno", hint: "notebook" },
      { word: "lápiz", hint: "pencil" },
      { word: "bolígrafo", hint: "pen" },
      { word: "goma", hint: "eraser" },
      { word: "regla", hint: "ruler" },
      { word: "tijeras", hint: "scissors" },
      { word: "mochila", hint: "backpack" },
      { word: "escritorio", hint: "desk" },
      { word: "silla", hint: "chair" },
      { word: "pizarra", hint: "blackboard" },
      { word: "tiza", hint: "chalk" },
      { word: "marcador", hint: "marker" },
      { word: "calculadora", hint: "calculator" },
      { word: "diccionario", hint: "dictionary" }
    ]
  }
};

export default wordBuilderCategories_part2;
