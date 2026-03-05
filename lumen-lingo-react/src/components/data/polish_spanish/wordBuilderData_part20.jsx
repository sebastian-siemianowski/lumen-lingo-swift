/**
 * POLISH → SPANISH WORD BUILDER - PART 20
 * Categories: 98-100
 * 3 categories, 15 words each = 45 words
 */

import { Tractor, Music as DanceIcon, Camera } from "lucide-react";

export const wordBuilderCategories_part20 = {
  agriculture_farming: {
    name: "Rolnictwo i gospodarstwo",
    description: "Słownictwo rolnicze i gospodarcze",
    icon: Tractor,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { word: "granja", hint: "gospodarstwo" },
      { word: "agricultor", hint: "rolnik" },
      { word: "cosecha", hint: "zbiory" },
      { word: "cultivo", hint: "uprawa" },
      { word: "campo", hint: "pole" },
      { word: "semilla", hint: "nasiono" },
      { word: "tractor", hint: "traktor" },
      { word: "arado", hint: "pług" },
      { word: "huerto", hint: "sad" },
      { word: "invernadero", hint: "szklarnia" },
      { word: "establo", hint: "stajnia" },
      { word: "granero", hint: "stodoła" },
      { word: "riego", hint: "nawadnianie" },
      { word: "fertilizante", hint: "nawóz" },
      { word: "ganado", hint: "bydło" }
    ]
  },

  dance_movement: {
    name: "Taniec i ruch",
    description: "Style taneczne i słownictwo ruchowe",
    icon: DanceIcon,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "baile", hint: "taniec" },
      { word: "bailarín", hint: "tancerz" },
      { word: "salsa", hint: "salsa" },
      { word: "tango", hint: "tango" },
      { word: "flamenco", hint: "flamenco" },
      { word: "ballet", hint: "balet" },
      { word: "coreografía", hint: "choreografia" },
      { word: "ritmo", hint: "rytm" },
      { word: "paso", hint: "krok" },
      { word: "giro", hint: "obrót" },
      { word: "salto", hint: "skok" },
      { word: "pareja", hint: "partner" },
      { word: "pirueta", hint: "piruet" },
      { word: "movimiento", hint: "ruch" },
      { word: "expresión", hint: "ekspresja" }
    ]
  },

  photography_terms: {
    name: "Terminy fotograficzne",
    description: "Fotografia i słownictwo aparatu",
    icon: Camera,
    color: "from-slate-500 to-zinc-600",
    level: "intermediate",
    words: [
      { word: "cámara", hint: "aparat" },
      { word: "foto", hint: "zdjęcie" },
      { word: "imagen", hint: "obraz" },
      { word: "lente", hint: "obiektyw" },
      { word: "enfoque", hint: "ostrość" },
      { word: "exposición", hint: "ekspozycja" },
      { word: "flash", hint: "flesz" },
      { word: "zoom", hint: "zoom" },
      { word: "retrato", hint: "portret" },
      { word: "paisaje", hint: "pejzaż" },
      { word: "encuadre", hint: "kadr" },
      { word: "iluminación", hint: "oświetlenie" },
      { word: "filtro", hint: "filtr" },
      { word: "trípode", hint: "statyw" },
      { word: "álbum", hint: "album" }
    ]
  }
};

export default wordBuilderCategories_part20;