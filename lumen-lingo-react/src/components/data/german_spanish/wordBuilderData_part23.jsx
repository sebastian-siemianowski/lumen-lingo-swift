/**
 * GERMAN → SPANISH WORD BUILDER - PART 23
 * Categories: 98-101
 * 4 categories, 15 words each = 60 words
 */

import { Rocket, Atom, Microscope, TestTube } from "lucide-react";

export const wordBuilderCategories_part23 = {
  space: {
    name: "Weltraum",
    description: "Astronomie und Raumfahrt",
    icon: Rocket,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "espacio", hint: "Weltraum" },
      { word: "planeta", hint: "Planet" },
      { word: "estrella", hint: "Stern" },
      { word: "sol", hint: "Sonne" },
      { word: "luna", hint: "Mond" },
      { word: "galaxia", hint: "Galaxie" },
      { word: "universo", hint: "Universum" },
      { word: "cohete", hint: "Rakete" },
      { word: "nave espacial", hint: "Raumschiff" },
      { word: "astronauta", hint: "Astronaut" },
      { word: "satélite", hint: "Satellit" },
      { word: "telescopio", hint: "Teleskop" },
      { word: "asteroide", hint: "Asteroid" },
      { word: "cometa", hint: "Komet" },
      { word: "órbita", hint: "Umlaufbahn" }
    ]
  },

  physics: {
    name: "Physik",
    description: "Physikalische Gesetze und Phänomene",
    icon: Atom,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "física", hint: "Physik" },
      { word: "átomo", hint: "Atom" },
      { word: "molécula", hint: "Molekül" },
      { word: "energía", hint: "Energie" },
      { word: "fuerza", hint: "Kraft" },
      { word: "movimiento", hint: "Bewegung" },
      { word: "velocidad", hint: "Geschwindigkeit" },
      { word: "aceleración", hint: "Beschleunigung" },
      { word: "gravedad", hint: "Schwerkraft" },
      { word: "electricidad", hint: "Elektrizität" },
      { word: "magnetismo", hint: "Magnetismus" },
      { word: "luz", hint: "Licht" },
      { word: "onda", hint: "Welle" },
      { word: "radiación", hint: "Strahlung" },
      { word: "experimento", hint: "Experiment" }
    ]
  },

  biology: {
    name: "Biologie",
    description: "Lebewesen und biologische Prozesse",
    icon: Microscope,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "biología", hint: "Biologie" },
      { word: "célula", hint: "Zelle" },
      { word: "organismo", hint: "Organismus" },
      { word: "tejido", hint: "Gewebe" },
      { word: "órgano", hint: "Organ" },
      { word: "sistema", hint: "System" },
      { word: "ADN", hint: "DNA" },
      { word: "gen", hint: "Gen" },
      { word: "cromosoma", hint: "Chromosom" },
      { word: "evolución", hint: "Evolution" },
      { word: "especie", hint: "Art" },
      { word: "ecosistema", hint: "Ökosystem" },
      { word: "fotosíntesis", hint: "Photosynthese" },
      { word: "respiración", hint: "Atmung" },
      { word: "reproducción", hint: "Fortpflanzung" }
    ]
  },

  chemistry: {
    name: "Chemie",
    description: "Chemische Elemente und Reaktionen",
    icon: TestTube,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "química", hint: "Chemie" },
      { word: "elemento", hint: "Element" },
      { word: "compuesto", hint: "Verbindung" },
      { word: "reacción", hint: "Reaktion" },
      { word: "ácido", hint: "Säure" },
      { word: "base", hint: "Base" },
      { word: "sal", hint: "Salz" },
      { word: "solución", hint: "Lösung" },
      { word: "mezcla", hint: "Mischung" },
      { word: "oxidación", hint: "Oxidation" },
      { word: "reducción", hint: "Reduktion" },
      { word: "catalizador", hint: "Katalysator" },
      { word: "tabla periódica", hint: "Periodensystem" },
      { word: "laboratorio", hint: "Labor" },
      { word: "tubo de ensayo", hint: "Reagenzglas" }
    ]
  }
};

export default wordBuilderCategories_part23;