/**
 * GERMAN → ENGLISH WORD BUILDER - PART 24
 * Categories: 102-105
 * 4 categories, 15 words each = 60 words
 */

import { Calculator, Shapes, TrendingUp, PieChart } from "lucide-react";

export const wordBuilderCategories_part24 = {
  mathematics: {
    name: "Mathematik",
    description: "Mathematische Operationen und Konzepte",
    icon: Calculator,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "mathematics", hint: "Mathematik" },
      { word: "number", hint: "Zahl" },
      { word: "addition", hint: "Addition" },
      { word: "subtraction", hint: "Subtraktion" },
      { word: "multiplication", hint: "Multiplikation" },
      { word: "division", hint: "Division" },
      { word: "equation", hint: "Gleichung" },
      { word: "fraction", hint: "Bruch" },
      { word: "percentage", hint: "Prozent" },
      { word: "square root", hint: "Quadratwurzel" },
      { word: "power", hint: "Potenz" },
      { word: "angle", hint: "Winkel" },
      { word: "area", hint: "Fläche" },
      { word: "volume", hint: "Volumen" },
      { word: "perimeter", hint: "Umfang" }
    ]
  },

  geometry: {
    name: "Geometrie",
    description: "Formen und geometrische Figuren",
    icon: Shapes,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "geometry", hint: "Geometrie" },
      { word: "circle", hint: "Kreis" },
      { word: "square", hint: "Quadrat" },
      { word: "triangle", hint: "Dreieck" },
      { word: "rectangle", hint: "Rechteck" },
      { word: "hexagon", hint: "Sechseck" },
      { word: "sphere", hint: "Kugel" },
      { word: "cube", hint: "Würfel" },
      { word: "cylinder", hint: "Zylinder" },
      { word: "cone", hint: "Kegel" },
      { word: "pyramid", hint: "Pyramide" },
      { word: "line", hint: "Linie" },
      { word: "point", hint: "Punkt" },
      { word: "parallel", hint: "parallel" },
      { word: "perpendicular", hint: "senkrecht" }
    ]
  },

  statistics: {
    name: "Statistik",
    description: "Datenanalyse und statistische Methoden",
    icon: TrendingUp,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "statistics", hint: "Statistik" },
      { word: "data", hint: "Daten" },
      { word: "sample", hint: "Stichprobe" },
      { word: "population", hint: "Grundgesamtheit" },
      { word: "average", hint: "Durchschnitt" },
      { word: "mean", hint: "Mittelwert" },
      { word: "median", hint: "Median" },
      { word: "mode", hint: "Modalwert" },
      { word: "range", hint: "Spanne" },
      { word: "deviation", hint: "Abweichung" },
      { word: "variance", hint: "Varianz" },
      { word: "probability", hint: "Wahrscheinlichkeit" },
      { word: "percentage", hint: "Prozentsatz" },
      { word: "trend", hint: "Trend" },
      { word: "correlation", hint: "Korrelation" }
    ]
  },

  data_visualization: {
    name: "Datenvisualisierung",
    description: "Grafische Darstellung von Daten",
    icon: PieChart,
    color: "from-green-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "chart", hint: "Diagramm" },
      { word: "diagram", hint: "Schaubild" },
      { word: "table", hint: "Tabelle" },
      { word: "bar chart", hint: "Balkendiagramm" },
      { word: "pie chart", hint: "Kreisdiagramm" },
      { word: "line graph", hint: "Liniendiagramm" },
      { word: "histogram", hint: "Histogramm" },
      { word: "axis", hint: "Achse" },
      { word: "scale", hint: "Skala" },
      { word: "legend", hint: "Legende" },
      { word: "title", hint: "Titel" },
      { word: "label", hint: "Beschriftung" },
      { word: "value", hint: "Wert" },
      { word: "comparison", hint: "Vergleich" },
      { word: "trend", hint: "Verlauf" }
    ]
  }
};

export default wordBuilderCategories_part24;