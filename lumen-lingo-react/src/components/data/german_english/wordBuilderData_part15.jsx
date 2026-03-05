/**
 * GERMAN → ENGLISH WORD BUILDER - PART 15
 * Categories: 63-67
 * 5 categories, 15 words each = 75 words
 */

import { Hammer, Wrench, Scissors, Palette, Footprints } from "lucide-react";

export const wordBuilderCategories_part15 = {
  construction: {
    name: "Bau",
    description: "Baustelle und Bauarbeiten",
    icon: Hammer,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "construction", hint: "Bau" },
      { word: "site", hint: "Baustelle" },
      { word: "mason", hint: "Maurer" },
      { word: "architect", hint: "Architekt" },
      { word: "engineer", hint: "Ingenieur" },
      { word: "blueprint", hint: "Plan" },
      { word: "project", hint: "Projekt" },
      { word: "foundation", hint: "Fundament" },
      { word: "wall", hint: "Mauer" },
      { word: "brick", hint: "Ziegel" },
      { word: "cement", hint: "Zement" },
      { word: "concrete", hint: "Beton" },
      { word: "scaffold", hint: "Gerüst" },
      { word: "crane", hint: "Kran" },
      { word: "excavator", hint: "Bagger" }
    ]
  },

  tools: {
    name: "Werkzeuge",
    description: "Handwerkzeug und Geräte",
    icon: Wrench,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "tool", hint: "Werkzeug" },
      { word: "hammer", hint: "Hammer" },
      { word: "screwdriver", hint: "Schraubenzieher" },
      { word: "wrench", hint: "Schraubenschlüssel" },
      { word: "pliers", hint: "Zange" },
      { word: "saw", hint: "Säge" },
      { word: "drill", hint: "Bohrer" },
      { word: "screw", hint: "Schraube" },
      { word: "nail", hint: "Nagel" },
      { word: "nut", hint: "Mutter" },
      { word: "bolt", hint: "Bolzen" },
      { word: "level", hint: "Wasserwaage" },
      { word: "tape measure", hint: "Maßband" },
      { word: "ladder", hint: "Leiter" },
      { word: "toolbox", hint: "Werkzeugkasten" }
    ]
  },

  sewing_crafts: {
    name: "Nähen und Handwerk",
    description: "Textilarbeiten und handwerkliche Tätigkeiten",
    icon: Scissors,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "scissors", hint: "Schere" },
      { word: "needle", hint: "Nadel" },
      { word: "thread", hint: "Faden" },
      { word: "button", hint: "Knopf" },
      { word: "zipper", hint: "Reißverschluss" },
      { word: "fabric", hint: "Stoff" },
      { word: "seam", hint: "Naht" },
      { word: "pattern", hint: "Schnittmuster" },
      { word: "thimble", hint: "Fingerhut" },
      { word: "sewing machine", hint: "Nähmaschine" },
      { word: "embroidery", hint: "Stickerei" },
      { word: "knit", hint: "stricken" },
      { word: "stitch", hint: "Stich" },
      { word: "wool", hint: "Wolle" },
      { word: "cotton", hint: "Baumwolle" }
    ]
  },

  colors_shades: {
    name: "Farben und Schattierungen",
    description: "Verschiedene Farbtöne und Nuancen",
    icon: Palette,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "red", hint: "rot" },
      { word: "blue", hint: "blau" },
      { word: "green", hint: "grün" },
      { word: "yellow", hint: "gelb" },
      { word: "black", hint: "schwarz" },
      { word: "white", hint: "weiß" },
      { word: "gray", hint: "grau" },
      { word: "brown", hint: "braun" },
      { word: "pink", hint: "rosa" },
      { word: "purple", hint: "lila" },
      { word: "orange", hint: "orange" },
      { word: "golden", hint: "golden" },
      { word: "silver", hint: "silbern" },
      { word: "light", hint: "hell" },
      { word: "dark", hint: "dunkel" }
    ]
  },

  footwear: {
    name: "Schuhe",
    description: "Verschiedene Arten von Schuhwerk",
    icon: Footprints,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "shoes", hint: "Schuhe" },
      { word: "sneakers", hint: "Turnschuhe" },
      { word: "boots", hint: "Stiefel" },
      { word: "sandals", hint: "Sandalen" },
      { word: "heels", hint: "Absätze" },
      { word: "slippers", hint: "Hausschuhe" },
      { word: "loafers", hint: "Mokassins" },
      { word: "flip-flops", hint: "Flip-Flops" },
      { word: "sports shoes", hint: "Sportschuhe" },
      { word: "laces", hint: "Schnürsenkel" },
      { word: "sole", hint: "Sohle" },
      { word: "heel", hint: "Absatz" },
      { word: "size", hint: "Größe" },
      { word: "comfortable", hint: "bequem" },
      { word: "tight", hint: "eng" }
    ]
  }
};

export default wordBuilderCategories_part15;