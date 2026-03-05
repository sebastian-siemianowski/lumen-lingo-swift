/**
 * GERMAN → SPANISH WORD BUILDER - PART 24
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
      { word: "matemáticas", hint: "Mathematik" },
      { word: "número", hint: "Zahl" },
      { word: "suma", hint: "Addition" },
      { word: "resta", hint: "Subtraktion" },
      { word: "multiplicación", hint: "Multiplikation" },
      { word: "división", hint: "Division" },
      { word: "ecuación", hint: "Gleichung" },
      { word: "fracción", hint: "Bruch" },
      { word: "porcentaje", hint: "Prozent" },
      { word: "raíz cuadrada", hint: "Quadratwurzel" },
      { word: "potencia", hint: "Potenz" },
      { word: "ángulo", hint: "Winkel" },
      { word: "área", hint: "Fläche" },
      { word: "volumen", hint: "Volumen" },
      { word: "perímetro", hint: "Umfang" }
    ]
  },

  geometry: {
    name: "Geometrie",
    description: "Formen und geometrische Figuren",
    icon: Shapes,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "geometría", hint: "Geometrie" },
      { word: "círculo", hint: "Kreis" },
      { word: "cuadrado", hint: "Quadrat" },
      { word: "triángulo", hint: "Dreieck" },
      { word: "rectángulo", hint: "Rechteck" },
      { word: "hexágono", hint: "Sechseck" },
      { word: "esfera", hint: "Kugel" },
      { word: "cubo", hint: "Würfel" },
      { word: "cilindro", hint: "Zylinder" },
      { word: "cono", hint: "Kegel" },
      { word: "pirámide", hint: "Pyramide" },
      { word: "línea", hint: "Linie" },
      { word: "punto", hint: "Punkt" },
      { word: "paralelo", hint: "parallel" },
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
      { word: "estadística", hint: "Statistik" },
      { word: "datos", hint: "Daten" },
      { word: "muestra", hint: "Stichprobe" },
      { word: "población", hint: "Grundgesamtheit" },
      { word: "promedio", hint: "Durchschnitt" },
      { word: "media", hint: "Mittelwert" },
      { word: "mediana", hint: "Median" },
      { word: "moda", hint: "Modalwert" },
      { word: "rango", hint: "Spanne" },
      { word: "desviación", hint: "Abweichung" },
      { word: "varianza", hint: "Varianz" },
      { word: "probabilidad", hint: "Wahrscheinlichkeit" },
      { word: "porcentaje", hint: "Prozentsatz" },
      { word: "tendencia", hint: "Trend" },
      { word: "correlación", hint: "Korrelation" }
    ]
  },

  data_visualization: {
    name: "Datenvisualisierung",
    description: "Grafische Darstellung von Daten",
    icon: PieChart,
    color: "from-green-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "gráfico", hint: "Diagramm" },
      { word: "diagrama", hint: "Schaubild" },
      { word: "tabla", hint: "Tabelle" },
      { word: "gráfico de barras", hint: "Balkendiagramm" },
      { word: "gráfico circular", hint: "Kreisdiagramm" },
      { word: "gráfico de líneas", hint: "Liniendiagramm" },
      { word: "histograma", hint: "Histogramm" },
      { word: "eje", hint: "Achse" },
      { word: "escala", hint: "Skala" },
      { word: "leyenda", hint: "Legende" },
      { word: "título", hint: "Titel" },
      { word: "etiqueta", hint: "Beschriftung" },
      { word: "valor", hint: "Wert" },
      { word: "comparación", hint: "Vergleich" },
      { word: "tendencia", hint: "Verlauf" }
    ]
  }
};

export default wordBuilderCategories_part24;