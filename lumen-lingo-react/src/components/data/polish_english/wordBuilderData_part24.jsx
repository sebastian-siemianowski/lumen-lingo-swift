/**
 * POLISH → ENGLISH WORD BUILDER - PART 24
 * Categories: 94-100
 * 7 categories, 15 words each = 105 words
 */

import { Hammer, Wrench, Paintbrush, Lightbulb, Plug, Key, DoorOpen } from "lucide-react";

export const wordBuilderCategories_part24 = {
  construction_building: {
    name: "Budownictwo i konstrukcja",
    description: "Budowa i materiały budowlane",
    icon: Hammer,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "construction", hint: "budowa" },
      { word: "building", hint: "budynek" },
      { word: "foundation", hint: "fundament" },
      { word: "wall", hint: "ściana" },
      { word: "roof", hint: "dach" },
      { word: "floor", hint: "podłoga" },
      { word: "ceiling", hint: "sufit" },
      { word: "window", hint: "okno" },
      { word: "door", hint: "drzwi" },
      { word: "stairs", hint: "schody" },
      { word: "beam", hint: "belka" },
      { word: "column", hint: "kolumna" },
      { word: "brick", hint: "cegła" },
      { word: "concrete", hint: "beton" },
      { word: "scaffold", hint: "rusztowanie" }
    ]
  },

  tools_equipment: {
    name: "Narzędzia i wyposażenie",
    description: "Narzędzia do pracy i naprawy",
    icon: Wrench,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "hammer", hint: "młotek" },
      { word: "screwdriver", hint: "śrubokręt" },
      { word: "wrench", hint: "klucz" },
      { word: "pliers", hint: "obcęgi" },
      { word: "saw", hint: "piła" },
      { word: "drill", hint: "wiertarka" },
      { word: "nail", hint: "gwóźdź" },
      { word: "screw", hint: "śruba" },
      { word: "bolt", hint: "śruba z nakrętką" },
      { word: "nut", hint: "nakrętka" },
      { word: "chisel", hint: "dłuto" },
      { word: "file", hint: "pilnik" },
      { word: "sandpaper", hint: "papier ścierny" },
      { word: "ladder", hint: "drabina" },
      { word: "toolbox", hint: "skrzynka narzędziowa" }
    ]
  },

  painting_decorating: {
    name: "Malowanie i dekorowanie",
    description: "Prace malarskie i wykończeniowe",
    icon: Paintbrush,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "paint", hint: "farba" },
      { word: "brush", hint: "pędzel" },
      { word: "roller", hint: "wałek" },
      { word: "canvas", hint: "płótno" },
      { word: "primer", hint: "podkład" },
      { word: "varnish", hint: "lakier" },
      { word: "coating", hint: "powłoka" },
      { word: "wallpaper", hint: "tapeta" },
      { word: "stencil", hint: "szablon" },
      { word: "texture", hint: "tekstura" },
      { word: "pattern", hint: "wzór" },
      { word: "shade", hint: "odcień" },
      { word: "tint", hint: "barwnik" },
      { word: "stripe", hint: "pasek" },
      { word: "border", hint: "obramowanie" }
    ]
  },

  electricity_lighting: {
    name: "Elektryczność i oświetlenie",
    description: "Instalacje elektryczne i światło",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "electricity", hint: "elektryczność" },
      { word: "power", hint: "moc" },
      { word: "voltage", hint: "napięcie" },
      { word: "current", hint: "prąd" },
      { word: "wire", hint: "przewód" },
      { word: "cable", hint: "kabel" },
      { word: "socket", hint: "gniazdko" },
      { word: "switch", hint: "włącznik" },
      { word: "bulb", hint: "żarówka" },
      { word: "lamp", hint: "lampa" },
      { word: "lighting", hint: "oświetlenie" },
      { word: "circuit", hint: "obwód" },
      { word: "fuse", hint: "bezpiecznik" },
      { word: "generator", hint: "generator" },
      { word: "transformer", hint: "transformator" }
    ]
  },

  appliances_devices: {
    name: "Urządzenia i sprzęty",
    description: "Sprzęty domowe i elektroniczne",
    icon: Plug,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "refrigerator", hint: "lodówka" },
      { word: "freezer", hint: "zamrażarka" },
      { word: "oven", hint: "piekarnik" },
      { word: "microwave", hint: "mikrofalówka" },
      { word: "toaster", hint: "toster" },
      { word: "blender", hint: "blender" },
      { word: "mixer", hint: "mikser" },
      { word: "dishwasher", hint: "zmywarka" },
      { word: "washer", hint: "pralka" },
      { word: "dryer", hint: "suszarka" },
      { word: "vacuum", hint: "odkurzacz" },
      { word: "iron", hint: "żelazko" },
      { word: "heater", hint: "grzejnik" },
      { word: "fan", hint: "wentylator" },
      { word: "conditioner", hint: "klimatyzator" }
    ]
  },

  locks_security: {
    name: "Zamki i zabezpieczenia",
    description: "Systemy zabezpieczeń domowych",
    icon: Key,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "lock", hint: "zamek" },
      { word: "key", hint: "klucz" },
      { word: "padlock", hint: "kłódka" },
      { word: "bolt", hint: "rygiel" },
      { word: "chain", hint: "łańcuch" },
      { word: "latch", hint: "zatrzask" },
      { word: "deadbolt", hint: "zamek wpuszczany" },
      { word: "keyhole", hint: "dziurka od klucza" },
      { word: "combination", hint: "kombinacja" },
      { word: "safe", hint: "sejf" },
      { word: "alarm", hint: "alarm" },
      { word: "sensor", hint: "czujnik" },
      { word: "camera", hint: "kamera" },
      { word: "monitoring", hint: "monitoring" },
      { word: "barrier", hint: "bariera" }
    ]
  },

  doors_windows: {
    name: "Drzwi i okna",
    description: "Typy i elementy drzwi oraz okien",
    icon: DoorOpen,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "door", hint: "drzwi" },
      { word: "entrance", hint: "wejście" },
      { word: "exit", hint: "wyjście" },
      { word: "gate", hint: "brama" },
      { word: "threshold", hint: "próg" },
      { word: "frame", hint: "rama" },
      { word: "handle", hint: "klamka" },
      { word: "knob", hint: "gałka" },
      { word: "hinge", hint: "zawias" },
      { word: "window", hint: "okno" },
      { word: "pane", hint: "szyba" },
      { word: "sill", hint: "parapet" },
      { word: "shutter", hint: "okiennica" },
      { word: "blind", hint: "żaluzja" },
      { word: "curtain", hint: "zasłona" }
    ]
  }
};

export default wordBuilderCategories_part24;