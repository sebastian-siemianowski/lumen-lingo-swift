/**
 * POLISH → SPANISH WORD BUILDER - PART 15
 * Categories: 79-82
 * 4 categories, 15 words each = 60 words
 */

import { Lightbulb, Archive, Truck, Scale } from "lucide-react";

export const wordBuilderCategories_part15 = {
  abstract_concepts: {
    name: "Pojęcia abstrakcyjne",
    description: "Idee i koncepcje filozoficzne",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "libertad", hint: "wolność" },
      { word: "justicia", hint: "sprawiedliwość" },
      { word: "igualdad", hint: "równość" },
      { word: "verdad", hint: "prawda" },
      { word: "belleza", hint: "piękno" },
      { word: "sabiduría", hint: "mądrość" },
      { word: "conocimiento", hint: "wiedza" },
      { word: "experiencia", hint: "doświadczenie" },
      { word: "existencia", hint: "istnienie" },
      { word: "realidad", hint: "rzeczywistość" },
      { word: "ilusión", hint: "iluzja" },
      { word: "destino", hint: "przeznaczenie" },
      { word: "propósito", hint: "cel" },
      { word: "significado", hint: "znaczenie" },
      { word: "consciencia", hint: "świadomość" }
    ]
  },

  storage_containers: {
    name: "Pojemniki do przechowywania",
    description: "Pojemniki do przechowywania przedmiotów",
    icon: Archive,
    color: "from-slate-500 to-gray-600",
    level: "beginner",
    words: [
      { word: "cajón", hint: "szuflada" },
      { word: "estante", hint: "półka" },
      { word: "armario", hint: "szafa" },
      { word: "baúl", hint: "kufer" },
      { word: "cofre", hint: "skrzynia" },
      { word: "maleta", hint: "walizka" },
      { word: "mochila", hint: "plecak" },
      { word: "bolso", hint: "torebka" },
      { word: "cartera", hint: "portfel" },
      { word: "estuche", hint: "etui" },
      { word: "cesta", hint: "kosz" },
      { word: "canasta", hint: "duży kosz" },
      { word: "contenedor", hint: "kontener" },
      { word: "tarro", hint: "słoik" },
      { word: "recipiente", hint: "pojemnik" }
    ]
  },

  vehicles_transport: {
    name: "Pojazdy i transport",
    description: "Typy pojazdów do transportu",
    icon: Truck,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "camión", hint: "ciężarówka" },
      { word: "furgoneta", hint: "furgonetka" },
      { word: "ambulancia", hint: "karetka" },
      { word: "autobús", hint: "autobus" },
      { word: "tranvía", hint: "tramwaj" },
      { word: "metro", hint: "metro" },
      { word: "tren", hint: "pociąg" },
      { word: "locomotora", hint: "lokomotywa" },
      { word: "vagón", hint: "wagon" },
      { word: "lancha", hint: "motorówka" },
      { word: "yate", hint: "jacht" },
      { word: "ferry", hint: "prom" },
      { word: "crucero", hint: "statek wycieczkowy" },
      { word: "remolque", hint: "przyczepa" },
      { word: "grúa", hint: "dźwig" }
    ]
  },

  measurements: {
    name: "Pomiary i jednostki",
    description: "Jednostki miary różnych wielkości",
    icon: Scale,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "metro", hint: "metr" },
      { word: "kilómetro", hint: "kilometr" },
      { word: "centímetro", hint: "centymetr" },
      { word: "milímetro", hint: "milimetr" },
      { word: "gramo", hint: "gram" },
      { word: "kilogramo", hint: "kilogram" },
      { word: "tonelada", hint: "tona" },
      { word: "litro", hint: "litr" },
      { word: "mililitro", hint: "mililitr" },
      { word: "grado", hint: "stopień" },
      { word: "volumen", hint: "objętość" },
      { word: "longitud", hint: "długość" },
      { word: "anchura", hint: "szerokość" },
      { word: "altura", hint: "wysokość" },
      { word: "profundidad", hint: "głębokość" }
    ]
  }
};

export default wordBuilderCategories_part15;