/**
 * GERMAN → SPANISH WORD BUILDER - PART 19
 * Categories: 81-85
 * 5 categories, 15 words each = 75 words
 */

import { Waves, Anchor, Wind, Compass, Sailboat } from "lucide-react";

export const wordBuilderCategories_part19 = {
  beach: {
    name: "Strand",
    description: "Stranderlebnis und Meeresküste",
    icon: Waves,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "playa", hint: "Strand" },
      { word: "arena", hint: "Sand" },
      { word: "ola", hint: "Welle" },
      { word: "mar", hint: "Meer" },
      { word: "océano", hint: "Ozean" },
      { word: "costa", hint: "Küste" },
      { word: "orilla", hint: "Ufer" },
      { word: "toalla de playa", hint: "Strandtuch" },
      { word: "sombrilla", hint: "Sonnenschirm" },
      { word: "cubo", hint: "Eimer" },
      { word: "pala", hint: "Schaufel" },
      { word: "castillo de arena", hint: "Sandburg" },
      { word: "concha", hint: "Muschel" },
      { word: "algas", hint: "Algen" },
      { word: "marea", hint: "Gezeiten" }
    ]
  },

  sailing: {
    name: "Segeln",
    description: "Segelboot und Segelsport",
    icon: Sailboat,
    color: "from-sky-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "vela", hint: "Segel" },
      { word: "velero", hint: "Segelboot" },
      { word: "mástil", hint: "Mast" },
      { word: "timón", hint: "Ruder" },
      { word: "proa", hint: "Bug" },
      { word: "popa", hint: "Heck" },
      { word: "estribor", hint: "Steuerbord" },
      { word: "babor", hint: "Backbord" },
      { word: "cubierta", hint: "Deck" },
      { word: "ancla", hint: "Anker" },
      { word: "cabo", hint: "Tau" },
      { word: "navegar", hint: "segeln" },
      { word: "regata", hint: "Regatta" },
      { word: "puerto", hint: "Hafen" },
      { word: "marinero", hint: "Seemann" }
    ]
  },

  maritime: {
    name: "Seefahrt",
    description: "Schiffe und maritime Navigation",
    icon: Anchor,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "barco", hint: "Schiff" },
      { word: "buque", hint: "Dampfer" },
      { word: "embarcación", hint: "Wasserfahrzeug" },
      { word: "puerto", hint: "Hafen" },
      { word: "muelle", hint: "Pier" },
      { word: "faro", hint: "Leuchtturm" },
      { word: "navegación", hint: "Navigation" },
      { word: "brújula", hint: "Kompass" },
      { word: "carta náutica", hint: "Seekarte" },
      { word: "tripulación", hint: "Besatzung" },
      { word: "capitán", hint: "Kapitän" },
      { word: "naufragio", hint: "Schiffbruch" },
      { word: "bote salvavidas", hint: "Rettungsboot" },
      { word: "chaleco salvavidas", hint: "Schwimmweste" },
      { word: "travesía", hint: "Überfahrt" }
    ]
  },

  wind_weather: {
    name: "Wind und Wetter",
    description: "Windverhältnisse und Wettererscheinungen",
    icon: Wind,
    color: "from-cyan-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "viento", hint: "Wind" },
      { word: "brisa", hint: "Brise" },
      { word: "huracán", hint: "Hurrikan" },
      { word: "tormenta", hint: "Sturm" },
      { word: "ráfaga", hint: "Windstoß" },
      { word: "calma", hint: "Windstille" },
      { word: "dirección", hint: "Richtung" },
      { word: "velocidad", hint: "Geschwindigkeit" },
      { word: "presión", hint: "Druck" },
      { word: "ciclón", hint: "Zyklon" },
      { word: "tornado", hint: "Tornado" },
      { word: "corriente", hint: "Strömung" },
      { word: "oleaje", hint: "Wellengang" },
      { word: "marejada", hint: "Dünung" },
      { word: "temporal", hint: "Unwetter" }
    ]
  },

  navigation: {
    name: "Navigation",
    description: "Orientierung und Wegfindung",
    icon: Compass,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "norte", hint: "Norden" },
      { word: "sur", hint: "Süden" },
      { word: "este", hint: "Osten" },
      { word: "oeste", hint: "Westen" },
      { word: "brújula", hint: "Kompass" },
      { word: "mapa", hint: "Karte" },
      { word: "coordenadas", hint: "Koordinaten" },
      { word: "latitud", hint: "Breitengrad" },
      { word: "longitud", hint: "Längengrad" },
      { word: "rumbo", hint: "Kurs" },
      { word: "distancia", hint: "Entfernung" },
      { word: "posición", hint: "Position" },
      { word: "ruta", hint: "Route" },
      { word: "destino", hint: "Ziel" },
      { word: "guía", hint: "Führer" }
    ]
  }
};

export default wordBuilderCategories_part19;