/**
 * POLISH → ENGLISH WORD BUILDER - PART 20
 * Categories: 96-100
 * 5 categories, 15 words each = 75 words
 */

import { Rocket, Atom, Microscope, FlaskConical, Calculator } from "lucide-react";

export const wordBuilderCategories_part20 = {
  space_exploration: {
    name: "Eksploracja kosmosu",
    description: "Podróże kosmiczne i astronomia",
    icon: Rocket,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "spacecraft", hint: "statek kosmiczny" },
      { word: "astronaut", hint: "astronauta" },
      { word: "rocket", hint: "rakieta" },
      { word: "satellite", hint: "satelita" },
      { word: "orbit", hint: "orbita" },
      { word: "launch", hint: "wystrzelenie" },
      { word: "mission", hint: "misja" },
      { word: "spacewalk", hint: "spacer kosmiczny" },
      { word: "zero gravity", hint: "zerowa grawitacja" },
      { word: "space station", hint: "stacja kosmiczna" },
      { word: "module", hint: "moduł" },
      { word: "capsule", hint: "kapsuła" },
      { word: "landing", hint: "lądowanie" },
      { word: "reentry", hint: "powrót do atmosfery" },
      { word: "countdown", hint: "odliczanie" }
    ]
  },

  physics_chemistry: {
    name: "Fizyka i chemia",
    description: "Podstawowe pojęcia naukowe",
    icon: Atom,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "atom", hint: "atom" },
      { word: "molecule", hint: "cząsteczka" },
      { word: "element", hint: "pierwiastek" },
      { word: "compound", hint: "związek" },
      { word: "reaction", hint: "reakcja" },
      { word: "energy", hint: "energia" },
      { word: "force", hint: "siła" },
      { word: "gravity", hint: "grawitacja" },
      { word: "velocity", hint: "prędkość" },
      { word: "acceleration", hint: "przyspieszenie" },
      { word: "mass", hint: "masa" },
      { word: "density", hint: "gęstość" },
      { word: "pressure", hint: "ciśnienie" },
      { word: "temperature", hint: "temperatura" },
      { word: "radiation", hint: "promieniowanie" }
    ]
  },

  biology_science: {
    name: "Biologia i nauki przyrodnicze",
    description: "Organizmy żywe i ekosystemy",
    icon: Microscope,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "cell", hint: "komórka" },
      { word: "organism", hint: "organizm" },
      { word: "species", hint: "gatunek" },
      { word: "evolution", hint: "ewolucja" },
      { word: "genetics", hint: "genetyka" },
      { word: "DNA", hint: "DNA" },
      { word: "chromosome", hint: "chromosom" },
      { word: "gene", hint: "gen" },
      { word: "mutation", hint: "mutacja" },
      { word: "reproduction", hint: "rozmnażanie" },
      { word: "photosynthesis", hint: "fotosynteza" },
      { word: "respiration", hint: "oddychanie" },
      { word: "digestion", hint: "trawienie" },
      { word: "ecosystem", hint: "ekosystem" },
      { word: "biodiversity", hint: "różnorodność biologiczna" }
    ]
  },

  laboratory: {
    name: "Laboratorium",
    description: "Sprzęt i procedury laboratoryjne",
    icon: FlaskConical,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "beaker", hint: "zlewka" },
      { word: "flask", hint: "kolba" },
      { word: "test tube", hint: "probówka" },
      { word: "pipette", hint: "pipeta" },
      { word: "burette", hint: "biureta" },
      { word: "microscope", hint: "mikroskop" },
      { word: "petri dish", hint: "szalka Petriego" },
      { word: "funnel", hint: "lejek" },
      { word: "bunsen burner", hint: "palnik Bunsena" },
      { word: "thermometer", hint: "termometr" },
      { word: "scale", hint: "waga" },
      { word: "centrifuge", hint: "wirówka" },
      { word: "specimen", hint: "próbka" },
      { word: "solution", hint: "roztwór" },
      { word: "experiment", hint: "eksperyment" }
    ]
  },

  mathematics: {
    name: "Matematyka",
    description: "Działania i pojęcia matematyczne",
    icon: Calculator,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "addition", hint: "dodawanie" },
      { word: "subtraction", hint: "odejmowanie" },
      { word: "multiplication", hint: "mnożenie" },
      { word: "division", hint: "dzielenie" },
      { word: "fraction", hint: "ułamek" },
      { word: "decimal", hint: "liczba dziesiętna" },
      { word: "percentage", hint: "procent" },
      { word: "equation", hint: "równanie" },
      { word: "variable", hint: "zmienna" },
      { word: "graph", hint: "wykres" },
      { word: "angle", hint: "kąt" },
      { word: "perimeter", hint: "obwód" },
      { word: "area", hint: "pole powierzchni" },
      { word: "volume", hint: "objętość" },
      { word: "theorem", hint: "twierdzenie" }
    ]
  }
};

export default wordBuilderCategories_part20;