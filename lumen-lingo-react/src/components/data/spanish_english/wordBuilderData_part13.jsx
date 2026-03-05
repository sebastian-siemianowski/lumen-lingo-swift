/**
 * SPANISH → ENGLISH WORD BUILDER - PART 13
 * Categories: 53-56
 * 4 categories, 15 words each = 60 words
 */

import { Paintbrush, Drama, Film, Plane } from "lucide-react";

export const wordBuilderCategories_part13 = {
  colors: {
    name: "Colores",
    description: "Colores básicos y avanzados",
    icon: Paintbrush,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "red", hint: "rojo" },
      { word: "blue", hint: "azul" },
      { word: "yellow", hint: "amarillo" },
      { word: "green", hint: "verde" },
      { word: "orange", hint: "naranja" },
      { word: "purple", hint: "morado" },
      { word: "pink", hint: "rosa" },
      { word: "brown", hint: "marrón" },
      { word: "black", hint: "negro" },
      { word: "white", hint: "blanco" },
      { word: "gray", hint: "gris" },
      { word: "silver", hint: "plateado" },
      { word: "golden", hint: "dorado" },
      { word: "turquoise", hint: "turquesa" },
      { word: "beige", hint: "beige" }
    ]
  },

  theater: {
    name: "Teatro",
    description: "Escena y obras teatrales",
    icon: Drama,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "theater", hint: "teatro" },
      { word: "stage", hint: "escenario" },
      { word: "curtain", hint: "telón" },
      { word: "actor", hint: "actor" },
      { word: "actress", hint: "actriz" },
      { word: "director", hint: "director" },
      { word: "play", hint: "obra" },
      { word: "rehearsal", hint: "ensayo" },
      { word: "performance", hint: "actuación" },
      { word: "audience", hint: "público" },
      { word: "applause", hint: "aplauso" },
      { word: "monologue", hint: "monólogo" },
      { word: "dialogue", hint: "diálogo" },
      { word: "costume", hint: "disfraz" },
      { word: "mask", hint: "máscara" }
    ]
  },

  cinema: {
    name: "Cine",
    description: "Películas y producción cinematográfica",
    icon: Film,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "movie", hint: "película" },
      { word: "cinema", hint: "cine" },
      { word: "scene", hint: "escena" },
      { word: "screenplay", hint: "guion" },
      { word: "director", hint: "director" },
      { word: "cameraman", hint: "camarógrafo" },
      { word: "actor", hint: "actor" },
      { word: "subtitle", hint: "subtítulo" },
      { word: "trailer", hint: "tráiler" },
      { word: "premiere", hint: "estreno" },
      { word: "sequel", hint: "secuela" },
      { word: "remake", hint: "remake" },
      { word: "blockbuster", hint: "taquillazo" },
      { word: "documentary", hint: "documental" },
      { word: "animation", hint: "animación" }
    ]
  },

  travel: {
    name: "Viajes",
    description: "Salidas y turismo",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "trip", hint: "viaje" },
      { word: "vacation", hint: "vacaciones" },
      { word: "airport", hint: "aeropuerto" },
      { word: "station", hint: "estación" },
      { word: "hotel", hint: "hotel" },
      { word: "luggage", hint: "equipaje" },
      { word: "suitcase", hint: "maleta" },
      { word: "ticket", hint: "billete" },
      { word: "passport", hint: "pasaporte" },
      { word: "visa", hint: "visa" },
      { word: "map", hint: "mapa" },
      { word: "compass", hint: "brújula" },
      { word: "tourist", hint: "turista" },
      { word: "attraction", hint: "atracción" },
      { word: "adventure", hint: "aventura" }
    ]
  }
};

export default wordBuilderCategories_part13;