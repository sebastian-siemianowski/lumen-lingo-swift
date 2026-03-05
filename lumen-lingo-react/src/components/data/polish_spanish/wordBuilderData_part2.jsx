/**
 * POLISH → SPANISH WORD BUILDER - PART 2
 * Categories: 6-10
 * 5 categories, 15 words each = 75 words
 */

import { Dog, Sun, Car, Heart, BookOpen } from "lucide-react";

export const wordBuilderCategories_part2 = {
  animals: {
    name: "Zwierzęta",
    description: "Słownictwo zwierzęce dla natury",
    icon: Dog,
    color: "from-amber-500 to-yellow-600",
    level: "beginner",
    words: [
      { word: "perro", hint: "pies" },
      { word: "gato", hint: "kot" },
      { word: "pájaro", hint: "ptak" },
      { word: "pez", hint: "ryba" },
      { word: "caballo", hint: "koń" },
      { word: "vaca", hint: "krowa" },
      { word: "cerdo", hint: "świnia" },
      { word: "oveja", hint: "owca" },
      { word: "conejo", hint: "królik" },
      { word: "ratón", hint: "mysz" },
      { word: "elefante", hint: "słoń" },
      { word: "león", hint: "lew" },
      { word: "tigre", hint: "tygrys" },
      { word: "mono", hint: "małpa" },
      { word: "oso", hint: "niedźwiedź" }
    ]
  },

  weather: {
    name: "Pogoda",
    description: "Omawiaj warunki pogodowe i prognozy",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sol", hint: "słońce" },
      { word: "lluvia", hint: "deszcz" },
      { word: "nube", hint: "chmura" },
      { word: "viento", hint: "wiatr" },
      { word: "nieve", hint: "śnieg" },
      { word: "tormenta", hint: "burza" },
      { word: "niebla", hint: "mgła" },
      { word: "trueno", hint: "grzmot" },
      { word: "relámpago", hint: "błyskawica" },
      { word: "arcoíris", hint: "tęcza" },
      { word: "frío", hint: "zimno" },
      { word: "calor", hint: "ciepło" },
      { word: "cielo", hint: "niebo" },
      { word: "temperatura", hint: "temperatura" },
      { word: "clima", hint: "klimat" }
    ]
  },

  transportation: {
    name: "Transport",
    description: "Podstawowe środki transportu",
    icon: Car,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "coche", hint: "samochód" },
      { word: "autobús", hint: "autobus" },
      { word: "tren", hint: "pociąg" },
      { word: "avión", hint: "samolot" },
      { word: "bicicleta", hint: "rower" },
      { word: "motocicleta", hint: "motocykl" },
      { word: "barco", hint: "statek" },
      { word: "taxi", hint: "taksówka" },
      { word: "metro", hint: "metro" },
      { word: "camión", hint: "ciężarówka" },
      { word: "helicóptero", hint: "helikopter" },
      { word: "cohete", hint: "rakieta" },
      { word: "ambulancia", hint: "karetka" },
      { word: "camioneta", hint: "furgonetka" },
      { word: "tranvía", hint: "tramwaj" }
    ]
  },

  body_parts: {
    name: "Części ciała",
    description: "Słownictwo anatomiczne dla zdrowia",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "cabeza", hint: "głowa" },
      { word: "ojo", hint: "oko" },
      { word: "oreja", hint: "ucho" },
      { word: "nariz", hint: "nos" },
      { word: "boca", hint: "usta" },
      { word: "diente", hint: "ząb" },
      { word: "brazo", hint: "ramię" },
      { word: "mano", hint: "ręka" },
      { word: "dedo", hint: "palec" },
      { word: "pierna", hint: "noga" },
      { word: "pie", hint: "stopa" },
      { word: "corazón", hint: "serce" },
      { word: "estómago", hint: "żołądek" },
      { word: "espalda", hint: "plecy" },
      { word: "cuello", hint: "szyja" }
    ]
  },

  school_supplies: {
    name: "Przybory szkolne",
    description: "Wyposażenie dla klasy",
    icon: BookOpen,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    words: [
      { word: "libro", hint: "książka" },
      { word: "cuaderno", hint: "zeszyt" },
      { word: "lápiz", hint: "ołówek" },
      { word: "bolígrafo", hint: "długopis" },
      { word: "goma", hint: "gumka" },
      { word: "regla", hint: "linijka" },
      { word: "tijeras", hint: "nożyczki" },
      { word: "mochila", hint: "plecak" },
      { word: "escritorio", hint: "biurko" },
      { word: "silla", hint: "krzesło" },
      { word: "pizarra", hint: "tablica" },
      { word: "tiza", hint: "kreda" },
      { word: "marcador", hint: "marker" },
      { word: "calculadora", hint: "kalkulator" },
      { word: "diccionario", hint: "słownik" }
    ]
  }
};

export default wordBuilderCategories_part2;