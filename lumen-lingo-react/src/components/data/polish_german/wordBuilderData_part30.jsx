/**
 * POLISH → GERMAN WORD BUILDER - PART 30
 * Categories: 120-123
 * 4 categories, 15 words each = 60 words
 */

import { Scale, Ruler, Thermometer, Clock } from "lucide-react";

export const wordBuilderCategories_part30 = {
  weights_measures: {
    name: "Wagi i miary",
    description: "Jednostki masy i ciężaru",
    icon: Scale,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "Gewicht", hint: "waga" },
      { word: "Kilogramm", hint: "kilogram" },
      { word: "Gramm", hint: "gram" },
      { word: "Tonne", hint: "tona" },
      { word: "Pfund", hint: "funt" },
      { word: "Unze", hint: "uncja" },
      { word: "wiegen", hint: "ważyć" },
      { word: "Waage", hint: "waga" },
      { word: "Küchenwaage", hint: "waga kuchenna" },
      { word: "Personenwaage", hint: "waga osobowa" },
      { word: "schwer", hint: "ciężki" },
      { word: "leicht", hint: "lekki" },
      { word: "Masse", hint: "masa" },
      { word: "Volumen", hint: "objętość" },
      { word: "Dichte", hint: "gęstość" }
    ]
  },

  length_distance: {
    name: "Długość i odległość",
    description: "Miary długości i dystansu",
    icon: Ruler,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "Länge", hint: "długość" },
      { word: "Meter", hint: "metr" },
      { word: "Zentimeter", hint: "centymetr" },
      { word: "Millimeter", hint: "milimetr" },
      { word: "Kilometer", hint: "kilometr" },
      { word: "Entfernung", hint: "odległość" },
      { word: "Distanz", hint: "dystans" },
      { word: "Breite", hint: "szerokość" },
      { word: "Höhe", hint: "wysokość" },
      { word: "Tiefe", hint: "głębokość" },
      { word: "Durchmesser", hint: "średnica" },
      { word: "Radius", hint: "promień" },
      { word: "Umfang", hint: "obwód" },
      { word: "messen", hint: "mierzyć" },
      { word: "Maßband", hint: "miara" }
    ]
  },

  temperature: {
    name: "Temperatura",
    description: "Pomiar ciepła i zimna",
    icon: Thermometer,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Temperatur", hint: "temperatura" },
      { word: "Grad", hint: "stopień" },
      { word: "Celsius", hint: "Celsjusz" },
      { word: "Fahrenheit", hint: "Fahrenheit" },
      { word: "Kelvin", hint: "Kelwin" },
      { word: "warm", hint: "ciepły" },
      { word: "heiß", hint: "gorący" },
      { word: "kalt", hint: "zimny" },
      { word: "kühl", hint: "chłodny" },
      { word: "lauwarm", hint: "letni" },
      { word: "Fieber", hint: "gorączka" },
      { word: "Körpertemperatur", hint: "temperatura ciała" },
      { word: "Raumtemperatur", hint: "temperatura pokojowa" },
      { word: "Gefrierpunkt", hint: "punkt zamarzania" },
      { word: "Siedepunkt", hint: "punkt wrzenia" }
    ]
  },

  time_periods: {
    name: "Okresy czasu",
    description: "Jednostki i przedziały czasowe",
    icon: Clock,
    color: "from-yellow-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "Sekunde", hint: "sekunda" },
      { word: "Minute", hint: "minuta" },
      { word: "Stunde", hint: "godzina" },
      { word: "Tag", hint: "dzień" },
      { word: "Woche", hint: "tydzień" },
      { word: "Monat", hint: "miesiąc" },
      { word: "Jahr", hint: "rok" },
      { word: "Jahrzehnt", hint: "dekada" },
      { word: "Jahrhundert", hint: "wiek" },
      { word: "Jahrtausend", hint: "tysiąclecie" },
      { word: "Vergangenheit", hint: "przeszłość" },
      { word: "Gegenwart", hint: "teraźniejszość" },
      { word: "Zukunft", hint: "przyszłość" },
      { word: "Epoche", hint: "epoka" },
      { word: "Zeitraum", hint: "okres czasu" }
    ]
  }
};

export default wordBuilderCategories_part30;