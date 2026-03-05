/**
 * GERMAN → ENGLISH WORD BUILDER - PART 23
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
      { word: "space", hint: "Weltraum" },
      { word: "planet", hint: "Planet" },
      { word: "star", hint: "Stern" },
      { word: "sun", hint: "Sonne" },
      { word: "moon", hint: "Mond" },
      { word: "galaxy", hint: "Galaxie" },
      { word: "universe", hint: "Universum" },
      { word: "rocket", hint: "Rakete" },
      { word: "spacecraft", hint: "Raumschiff" },
      { word: "astronaut", hint: "Astronaut" },
      { word: "satellite", hint: "Satellit" },
      { word: "telescope", hint: "Teleskop" },
      { word: "asteroid", hint: "Asteroid" },
      { word: "comet", hint: "Komet" },
      { word: "orbit", hint: "Umlaufbahn" }
    ]
  },

  physics: {
    name: "Physik",
    description: "Physikalische Gesetze und Phänomene",
    icon: Atom,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "physics", hint: "Physik" },
      { word: "atom", hint: "Atom" },
      { word: "molecule", hint: "Molekül" },
      { word: "energy", hint: "Energie" },
      { word: "force", hint: "Kraft" },
      { word: "motion", hint: "Bewegung" },
      { word: "speed", hint: "Geschwindigkeit" },
      { word: "acceleration", hint: "Beschleunigung" },
      { word: "gravity", hint: "Schwerkraft" },
      { word: "electricity", hint: "Elektrizität" },
      { word: "magnetism", hint: "Magnetismus" },
      { word: "light", hint: "Licht" },
      { word: "wave", hint: "Welle" },
      { word: "radiation", hint: "Strahlung" },
      { word: "experiment", hint: "Experiment" }
    ]
  },

  biology: {
    name: "Biologie",
    description: "Lebewesen und biologische Prozesse",
    icon: Microscope,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "biology", hint: "Biologie" },
      { word: "cell", hint: "Zelle" },
      { word: "organism", hint: "Organismus" },
      { word: "tissue", hint: "Gewebe" },
      { word: "organ", hint: "Organ" },
      { word: "system", hint: "System" },
      { word: "DNA", hint: "DNA" },
      { word: "gene", hint: "Gen" },
      { word: "chromosome", hint: "Chromosom" },
      { word: "evolution", hint: "Evolution" },
      { word: "species", hint: "Art" },
      { word: "ecosystem", hint: "Ökosystem" },
      { word: "photosynthesis", hint: "Photosynthese" },
      { word: "respiration", hint: "Atmung" },
      { word: "reproduction", hint: "Fortpflanzung" }
    ]
  },

  chemistry: {
    name: "Chemie",
    description: "Chemische Elemente und Reaktionen",
    icon: TestTube,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "chemistry", hint: "Chemie" },
      { word: "element", hint: "Element" },
      { word: "compound", hint: "Verbindung" },
      { word: "reaction", hint: "Reaktion" },
      { word: "acid", hint: "Säure" },
      { word: "base", hint: "Base" },
      { word: "salt", hint: "Salz" },
      { word: "solution", hint: "Lösung" },
      { word: "mixture", hint: "Mischung" },
      { word: "oxidation", hint: "Oxidation" },
      { word: "reduction", hint: "Reduktion" },
      { word: "catalyst", hint: "Katalysator" },
      { word: "periodic table", hint: "Periodensystem" },
      { word: "laboratory", hint: "Labor" },
      { word: "test tube", hint: "Reagenzglas" }
    ]
  }
};

export default wordBuilderCategories_part23;