/**
 * POLISH → ENGLISH WORD BUILDER - PART 17
 * Categories: 81-85
 * 5 categories, 15 words each = 75 words
 */

import { Mountain, Tent, MapPin, Compass, Backpack } from "lucide-react";

export const wordBuilderCategories_part17 = {
  mountains_climbing: {
    name: "Góry i wspinaczka",
    description: "Tereny górskie i alpinizm",
    icon: Mountain,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "peak", hint: "szczyt" },
      { word: "summit", hint: "wierzchołek" },
      { word: "ridge", hint: "grzbiet" },
      { word: "cliff", hint: "urwisko" },
      { word: "slope", hint: "stok" },
      { word: "glacier", hint: "lodowiec" },
      { word: "crevasse", hint: "szczelina" },
      { word: "avalanche", hint: "lawina" },
      { word: "altitude", hint: "wysokość" },
      { word: "plateau", hint: "płaskowyż" },
      { word: "canyon", hint: "kanion" },
      { word: "gorge", hint: "wąwóz" },
      { word: "foothill", hint: "podnóże" },
      { word: "rockface", hint: "ściana skalna" },
      { word: "ascent", hint: "wejście" }
    ]
  },

  camping_gear: {
    name: "Sprzęt kempingowy",
    description: "Wyposażenie do kempingu i survivalu",
    icon: Tent,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "tent", hint: "namiot" },
      { word: "sleeping bag", hint: "śpiwór" },
      { word: "backpack", hint: "plecak" },
      { word: "flashlight", hint: "latarka" },
      { word: "lantern", hint: "lampion" },
      { word: "stove", hint: "kuchenka" },
      { word: "cookware", hint: "naczynia kuchenne" },
      { word: "canteen", hint: "manierka" },
      { word: "compass", hint: "kompas" },
      { word: "map", hint: "mapa" },
      { word: "first aid kit", hint: "apteczka" },
      { word: "knife", hint: "nóż" },
      { word: "rope", hint: "lina" },
      { word: "tarp", hint: "plandeka" },
      { word: "matches", hint: "zapałki" }
    ]
  },

  navigation: {
    name: "Nawigacja",
    description: "Orientacja i znajdowanie drogi",
    icon: MapPin,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "direction", hint: "kierunek" },
      { word: "north", hint: "północ" },
      { word: "south", hint: "południe" },
      { word: "east", hint: "wschód" },
      { word: "west", hint: "zachód" },
      { word: "landmark", hint: "punkt orientacyjny" },
      { word: "coordinates", hint: "współrzędne" },
      { word: "latitude", hint: "szerokość geograficzna" },
      { word: "longitude", hint: "długość geograficzna" },
      { word: "bearing", hint: "namiar" },
      { word: "orientation", hint: "orientacja" },
      { word: "waypoint", hint: "punkt nawigacyjny" },
      { word: "route", hint: "trasa" },
      { word: "detour", hint: "objazd" },
      { word: "shortcut", hint: "skrót" }
    ]
  },

  exploration: {
    name: "Eksploracja",
    description: "Odkrywanie i przygody podróżnicze",
    icon: Compass,
    color: "from-orange-500 to-amber-600",
    level: "advanced",
    words: [
      { word: "explorer", hint: "odkrywca" },
      { word: "expedition", hint: "ekspedycja" },
      { word: "discovery", hint: "odkrycie" },
      { word: "adventure", hint: "przygoda" },
      { word: "journey", hint: "podróż" },
      { word: "quest", hint: "poszukiwanie" },
      { word: "uncharted", hint: "niezbadany" },
      { word: "remote", hint: "odległy" },
      { word: "wilderness", hint: "dzicz" },
      { word: "terrain", hint: "teren" },
      { word: "surveying", hint: "pomiary geodezyjne" },
      { word: "pioneering", hint: "pionierski" },
      { word: "trailblazing", hint: "torowanie szlaku" },
      { word: "pathfinding", hint: "znajdowanie drogi" },
      { word: "orienteering", hint: "biegi na orientację" }
    ]
  }
};

export default wordBuilderCategories_part17;