/**
 * POLISH → SPANISH WORD BUILDER - PART 5
 * Categories: 31-35
 * 5 categories, 15 words each = 75 words
 */

import { Sparkles, Sun, Leaf, Flame, Wind } from "lucide-react";

export const wordBuilderCategories_part5 = {
  adjectives_appearance: {
    name: "Przymiotniki wyglądu",
    description: "Opisuj wygląd fizyczny ludzi",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "guapo", hint: "przystojny" },
      { word: "bonito", hint: "ładny" },
      { word: "feo", hint: "brzydki" },
      { word: "joven", hint: "młody" },
      { word: "anciano", hint: "starszy" },
      { word: "fuerte", hint: "silny" },
      { word: "débil", hint: "słaby" },
      { word: "delgado", hint: "szczupły" },
      { word: "gordo", hint: "gruby" },
      { word: "rubio", hint: "blond" },
      { word: "moreno", hint: "brunet" },
      { word: "calvo", hint: "łysy" },
      { word: "barbudo", hint: "brodaty" },
      { word: "elegante", hint: "elegancki" },
      { word: "casual", hint: "zwykły" }
    ]
  },

  nature_elements: {
    name: "Elementy natury",
    description: "Odkryj składowe naturalnego świata",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "tierra", hint: "ziemia" },
      { word: "agua", hint: "woda" },
      { word: "fuego", hint: "ogień" },
      { word: "aire", hint: "powietrze" },
      { word: "roca", hint: "skała" },
      { word: "arena", hint: "piasek" },
      { word: "barro", hint: "błoto" },
      { word: "nieve", hint: "śnieg" },
      { word: "hielo", hint: "lód" },
      { word: "vapor", hint: "para" },
      { word: "humo", hint: "dym" },
      { word: "ceniza", hint: "popiół" },
      { word: "polvo", hint: "pył" },
      { word: "arcilla", hint: "glina" },
      { word: "cristal", hint: "kryształ" }
    ]
  },

  weather_conditions: {
    name: "Warunki pogodowe",
    description: "Szczegółowe warunki atmosferyczne",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "despejado", hint: "bezchmurny" },
      { word: "parcialmente", hint: "częściowo" },
      { word: "cubierto", hint: "pochmurny" },
      { word: "brumoso", hint: "mglisty" },
      { word: "neblinoso", hint: "zamglony" },
      { word: "lluvioso", hint: "deszczowy" },
      { word: "tormentoso", hint: "burzowy" },
      { word: "nevado", hint: "śnieżny" },
      { word: "helado", hint: "lodowaty" },
      { word: "ventoso", hint: "wietrzny" },
      { word: "húmedo", hint: "wilgotny" },
      { word: "seco", hint: "suchy" },
      { word: "caluroso", hint: "gorący" },
      { word: "templado", hint: "umiarkowany" },
      { word: "frío", hint: "zimny" }
    ]
  },

  temperature: {
    name: "Temperatura",
    description: "Wyrażenia związane z temperaturą",
    icon: Flame,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "caliente", hint: "gorący" },
      { word: "tibio", hint: "ciepły" },
      { word: "templado", hint: "umiarkowany" },
      { word: "fresco", hint: "chłodny" },
      { word: "frío", hint: "zimny" },
      { word: "helado", hint: "lodowaty" },
      { word: "congelado", hint: "zamrożony" },
      { word: "ardiente", hint: "palący" },
      { word: "hirviendo", hint: "wrząca" },
      { word: "sofocante", hint: "duszny" },
      { word: "agradable", hint: "przyjemny" },
      { word: "extremo", hint: "ekstremalny" },
      { word: "moderado", hint: "umiarkowany" },
      { word: "variable", hint: "zmienny" },
      { word: "constante", hint: "stały" }
    ]
  },

  wind_air: {
    name: "Wiatr i powietrze",
    description: "Słownictwo związane z wiatrem",
    icon: Wind,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "brisa", hint: "bryza" },
      { word: "viento", hint: "wiatr" },
      { word: "vendaval", hint: "wichura" },
      { word: "huracán", hint: "huragan" },
      { word: "tornado", hint: "tornado" },
      { word: "ciclón", hint: "cyklon" },
      { word: "tifón", hint: "tajfun" },
      { word: "ráfaga", hint: "podmuch" },
      { word: "corriente", hint: "prąd" },
      { word: "soplo", hint: "powiew" },
      { word: "remolino", hint: "wir" },
      { word: "torbellino", hint: "trąba powietrzna" },
      { word: "calma", hint: "cisza" },
      { word: "ventisca", hint: "zamieć" },
      { word: "tempestad", hint: "burza" }
    ]
  }
};

export default wordBuilderCategories_part5;