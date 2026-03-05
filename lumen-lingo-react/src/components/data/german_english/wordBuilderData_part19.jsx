/**
 * GERMAN → ENGLISH WORD BUILDER - PART 19
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
      { word: "beach", hint: "Strand" },
      { word: "sand", hint: "Sand" },
      { word: "wave", hint: "Welle" },
      { word: "sea", hint: "Meer" },
      { word: "ocean", hint: "Ozean" },
      { word: "coast", hint: "Küste" },
      { word: "shore", hint: "Ufer" },
      { word: "beach towel", hint: "Strandtuch" },
      { word: "umbrella", hint: "Sonnenschirm" },
      { word: "bucket", hint: "Eimer" },
      { word: "shovel", hint: "Schaufel" },
      { word: "sandcastle", hint: "Sandburg" },
      { word: "shell", hint: "Muschel" },
      { word: "seaweed", hint: "Algen" },
      { word: "tide", hint: "Gezeiten" }
    ]
  },

  sailing: {
    name: "Segeln",
    description: "Segelboot und Segelsport",
    icon: Sailboat,
    color: "from-sky-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "sail", hint: "Segel" },
      { word: "sailboat", hint: "Segelboot" },
      { word: "mast", hint: "Mast" },
      { word: "rudder", hint: "Ruder" },
      { word: "bow", hint: "Bug" },
      { word: "stern", hint: "Heck" },
      { word: "starboard", hint: "Steuerbord" },
      { word: "port", hint: "Backbord" },
      { word: "deck", hint: "Deck" },
      { word: "anchor", hint: "Anker" },
      { word: "rope", hint: "Tau" },
      { word: "navigate", hint: "segeln" },
      { word: "regatta", hint: "Regatta" },
      { word: "harbor", hint: "Hafen" },
      { word: "sailor", hint: "Seemann" }
    ]
  },

  maritime: {
    name: "Seefahrt",
    description: "Schiffe und maritime Navigation",
    icon: Anchor,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "ship", hint: "Schiff" },
      { word: "vessel", hint: "Dampfer" },
      { word: "boat", hint: "Wasserfahrzeug" },
      { word: "port", hint: "Hafen" },
      { word: "dock", hint: "Pier" },
      { word: "lighthouse", hint: "Leuchtturm" },
      { word: "navigation", hint: "Navigation" },
      { word: "compass", hint: "Kompass" },
      { word: "nautical chart", hint: "Seekarte" },
      { word: "crew", hint: "Besatzung" },
      { word: "captain", hint: "Kapitän" },
      { word: "shipwreck", hint: "Schiffbruch" },
      { word: "lifeboat", hint: "Rettungsboot" },
      { word: "life jacket", hint: "Schwimmweste" },
      { word: "voyage", hint: "Überfahrt" }
    ]
  },

  wind_weather: {
    name: "Wind und Wetter",
    description: "Windverhältnisse und Wettererscheinungen",
    icon: Wind,
    color: "from-cyan-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "wind", hint: "Wind" },
      { word: "breeze", hint: "Brise" },
      { word: "hurricane", hint: "Hurrikan" },
      { word: "storm", hint: "Sturm" },
      { word: "gust", hint: "Windstoß" },
      { word: "calm", hint: "Windstille" },
      { word: "direction", hint: "Richtung" },
      { word: "speed", hint: "Geschwindigkeit" },
      { word: "pressure", hint: "Druck" },
      { word: "cyclone", hint: "Zyklon" },
      { word: "tornado", hint: "Tornado" },
      { word: "current", hint: "Strömung" },
      { word: "swell", hint: "Wellengang" },
      { word: "surge", hint: "Dünung" },
      { word: "tempest", hint: "Unwetter" }
    ]
  },

  navigation: {
    name: "Navigation",
    description: "Orientierung und Wegfindung",
    icon: Compass,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "north", hint: "Norden" },
      { word: "south", hint: "Süden" },
      { word: "east", hint: "Osten" },
      { word: "west", hint: "Westen" },
      { word: "compass", hint: "Kompass" },
      { word: "map", hint: "Karte" },
      { word: "coordinates", hint: "Koordinaten" },
      { word: "latitude", hint: "Breitengrad" },
      { word: "longitude", hint: "Längengrad" },
      { word: "course", hint: "Kurs" },
      { word: "distance", hint: "Entfernung" },
      { word: "position", hint: "Position" },
      { word: "route", hint: "Route" },
      { word: "destination", hint: "Ziel" },
      { word: "guide", hint: "Führer" }
    ]
  }
};

export default wordBuilderCategories_part19;