/**
 * SPANISH → ENGLISH WORD BUILDER - PART 12
 * Categories: 49-52
 * 4 categories, 15 words each = 60 words
 */

import { Rocket, Atom, Microscope, Calculator } from "lucide-react";

export const wordBuilderCategories_part12 = {
  space: {
    name: "Espacio",
    description: "Espacio exterior y astronomía",
    icon: Rocket,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "space", hint: "espacio" },
      { word: "planet", hint: "planeta" },
      { word: "star", hint: "estrella" },
      { word: "moon", hint: "luna" },
      { word: "sun", hint: "sol" },
      { word: "rocket", hint: "cohete" },
      { word: "spacecraft", hint: "nave espacial" },
      { word: "astronaut", hint: "astronauta" },
      { word: "satellite", hint: "satélite" },
      { word: "galaxy", hint: "galaxia" },
      { word: "universe", hint: "universo" },
      { word: "comet", hint: "cometa" },
      { word: "asteroid", hint: "asteroide" },
      { word: "telescope", hint: "telescopio" },
      { word: "orbit", hint: "órbita" }
    ]
  },

  chemistry_physics: {
    name: "Química y física",
    description: "Conceptos científicos básicos",
    icon: Atom,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "atom", hint: "átomo" },
      { word: "molecule", hint: "molécula" },
      { word: "element", hint: "elemento" },
      { word: "compound", hint: "compuesto" },
      { word: "reaction", hint: "reacción" },
      { word: "energy", hint: "energía" },
      { word: "force", hint: "fuerza" },
      { word: "gravity", hint: "gravedad" },
      { word: "velocity", hint: "velocidad" },
      { word: "acceleration", hint: "aceleración" },
      { word: "mass", hint: "masa" },
      { word: "density", hint: "densidad" },
      { word: "pressure", hint: "presión" },
      { word: "temperature", hint: "temperatura" },
      { word: "radiation", hint: "radiación" }
    ]
  },

  biology: {
    name: "Biología",
    description: "Vida y organismos",
    icon: Microscope,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "cell", hint: "célula" },
      { word: "organism", hint: "organismo" },
      { word: "species", hint: "especie" },
      { word: "evolution", hint: "evolución" },
      { word: "genetics", hint: "genética" },
      { word: "gene", hint: "gen" },
      { word: "chromosome", hint: "cromosoma" },
      { word: "mutation", hint: "mutación" },
      { word: "reproduction", hint: "reproducción" },
      { word: "photosynthesis", hint: "fotosíntesis" },
      { word: "respiration", hint: "respiración" },
      { word: "digestion", hint: "digestión" },
      { word: "ecosystem", hint: "ecosistema" },
      { word: "biodiversity", hint: "biodiversidad" },
      { word: "microscope", hint: "microscopio" }
    ]
  },

  mathematics: {
    name: "Matemáticas",
    description: "Números y operaciones matemáticas",
    icon: Calculator,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "number", hint: "número" },
      { word: "addition", hint: "suma" },
      { word: "subtraction", hint: "resta" },
      { word: "multiplication", hint: "multiplicación" },
      { word: "division", hint: "división" },
      { word: "fraction", hint: "fracción" },
      { word: "percent", hint: "porcentaje" },
      { word: "equation", hint: "ecuación" },
      { word: "angle", hint: "ángulo" },
      { word: "area", hint: "área" },
      { word: "volume", hint: "volumen" },
      { word: "perimeter", hint: "perímetro" },
      { word: "diameter", hint: "diámetro" },
      { word: "radius", hint: "radio" },
      { word: "formula", hint: "fórmula" }
    ]
  }
};

export default wordBuilderCategories_part12;