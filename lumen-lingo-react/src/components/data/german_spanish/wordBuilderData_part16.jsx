/**
 * GERMAN → SPANISH WORD BUILDER - PART 16
 * Categories: 67-70
 * 4 categories, 15 words each = 60 words
 */

import { Building, Factory, Hammer, Wrench } from "lucide-react";

export const wordBuilderCategories_part16 = {
  buildings: {
    name: "Gebäude",
    description: "Bauwerke und Strukturen",
    icon: Building,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "edificio", hint: "Gebäude" },
      { word: "rascacielos", hint: "Wolkenkratzer" },
      { word: "torre", hint: "Turm" },
      { word: "estructura", hint: "Struktur" },
      { word: "fachada", hint: "Fassade" },
      { word: "planta", hint: "Stockwerk" },
      { word: "piso", hint: "Etage" },
      { word: "techo", hint: "Dach" },
      { word: "sótano", hint: "Keller" },
      { word: "escalera", hint: "Treppe" },
      { word: "ascensor", hint: "Aufzug" },
      { word: "ventana", hint: "Fenster" },
      { word: "puerta", hint: "Tür" },
      { word: "balcón", hint: "Balkon" },
      { word: "terraza", hint: "Terrasse" }
    ]
  },

  industry: {
    name: "Industrie",
    description: "Fabriken und Produktion",
    icon: Factory,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "fábrica", hint: "Fabrik" },
      { word: "industria", hint: "Industrie" },
      { word: "producción", hint: "Produktion" },
      { word: "manufactura", hint: "Herstellung" },
      { word: "máquina", hint: "Maschine" },
      { word: "línea de montaje", hint: "Fließband" },
      { word: "obrero", hint: "Arbeiter" },
      { word: "operario", hint: "Bediener" },
      { word: "turno", hint: "Schicht" },
      { word: "materia prima", hint: "Rohstoff" },
      { word: "producto", hint: "Produkt" },
      { word: "calidad", hint: "Qualität" },
      { word: "control", hint: "Kontrolle" },
      { word: "proceso", hint: "Prozess" },
      { word: "eficiencia", hint: "Effizienz" }
    ]
  },

  construction: {
    name: "Bau",
    description: "Baustelle und Bauarbeiten",
    icon: Hammer,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "construcción", hint: "Bau" },
      { word: "obra", hint: "Baustelle" },
      { word: "albañil", hint: "Maurer" },
      { word: "arquitecto", hint: "Architekt" },
      { word: "ingeniero", hint: "Ingenieur" },
      { word: "plano", hint: "Plan" },
      { word: "proyecto", hint: "Projekt" },
      { word: "cimiento", hint: "Fundament" },
      { word: "muro", hint: "Mauer" },
      { word: "ladrillo", hint: "Ziegel" },
      { word: "cemento", hint: "Zement" },
      { word: "hormigón", hint: "Beton" },
      { word: "andamio", hint: "Gerüst" },
      { word: "grúa", hint: "Kran" },
      { word: "excavadora", hint: "Bagger" }
    ]
  },

  tools: {
    name: "Werkzeuge",
    description: "Handwerkzeug und Geräte",
    icon: Wrench,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "herramienta", hint: "Werkzeug" },
      { word: "martillo", hint: "Hammer" },
      { word: "destornillador", hint: "Schraubenzieher" },
      { word: "llave", hint: "Schraubenschlüssel" },
      { word: "alicate", hint: "Zange" },
      { word: "sierra", hint: "Säge" },
      { word: "taladro", hint: "Bohrer" },
      { word: "tornillo", hint: "Schraube" },
      { word: "clavo", hint: "Nagel" },
      { word: "tuerca", hint: "Mutter" },
      { word: "perno", hint: "Bolzen" },
      { word: "nivel", hint: "Wasserwaage" },
      { word: "metro", hint: "Maßband" },
      { word: "escalera", hint: "Leiter" },
      { word: "caja de herramientas", hint: "Werkzeugkasten" }
    ]
  }
};

export default wordBuilderCategories_part16;