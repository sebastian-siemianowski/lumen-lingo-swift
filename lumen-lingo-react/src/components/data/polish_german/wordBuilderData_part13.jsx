/**
 * POLISH → GERMAN WORD BUILDER - PART 13
 * Categories: 53-56
 * 4 categories, 15 words each = 60 words
 */

import { Rocket, Atom, Microscope, Calculator } from "lucide-react";

export const wordBuilderCategories_part13 = {
  space: {
    name: "Kosmos",
    description: "Przestrzeń kosmiczna i astronomia",
    icon: Rocket,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "Weltraum", hint: "kosmos" },
      { word: "Planet", hint: "planeta" },
      { word: "Stern", hint: "gwiazda" },
      { word: "Mond", hint: "księżyc" },
      { word: "Sonne", hint: "słońce" },
      { word: "Rakete", hint: "rakieta" },
      { word: "Raumschiff", hint: "statek kosmiczny" },
      { word: "Astronaut", hint: "astronauta" },
      { word: "Satellit", hint: "satelita" },
      { word: "Galaxie", hint: "galaktyka" },
      { word: "Universum", hint: "wszechświat" },
      { word: "Komet", hint: "kometa" },
      { word: "Asteroid", hint: "asteroida" },
      { word: "Teleskop", hint: "teleskop" },
      { word: "Umlaufbahn", hint: "orbita" }
    ]
  },

  chemistry_physics: {
    name: "Chemia i fizyka",
    description: "Podstawowe pojęcia naukowe",
    icon: Atom,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "Atom", hint: "atom" },
      { word: "Molekül", hint: "cząsteczka" },
      { word: "Element", hint: "pierwiastek" },
      { word: "Verbindung", hint: "związek" },
      { word: "Reaktion", hint: "reakcja" },
      { word: "Energie", hint: "energia" },
      { word: "Kraft", hint: "siła" },
      { word: "Schwerkraft", hint: "grawitacja" },
      { word: "Geschwindigkeit", hint: "prędkość" },
      { word: "Beschleunigung", hint: "przyspieszenie" },
      { word: "Masse", hint: "masa" },
      { word: "Dichte", hint: "gęstość" },
      { word: "Druck", hint: "ciśnienie" },
      { word: "Temperatur", hint: "temperatura" },
      { word: "Strahlung", hint: "promieniowanie" }
    ]
  },

  biology: {
    name: "Biologia",
    description: "Życie i organizmy",
    icon: Microscope,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "Zelle", hint: "komórka" },
      { word: "Organismus", hint: "organizm" },
      { word: "Art", hint: "gatunek" },
      { word: "Evolution", hint: "ewolucja" },
      { word: "Genetik", hint: "genetyka" },
      { word: "Gen", hint: "gen" },
      { word: "Chromosom", hint: "chromosom" },
      { word: "Mutation", hint: "mutacja" },
      { word: "Fortpflanzung", hint: "rozmnażanie" },
      { word: "Photosynthese", hint: "fotosynteza" },
      { word: "Atmung", hint: "oddychanie" },
      { word: "Verdauung", hint: "trawienie" },
      { word: "Ökosystem", hint: "ekosystem" },
      { word: "Biodiversität", hint: "różnorodność biologiczna" },
      { word: "Mikroskop", hint: "mikroskop" }
    ]
  },

  mathematics: {
    name: "Matematyka",
    description: "Liczby i działania matematyczne",
    icon: Calculator,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Zahl", hint: "liczba" },
      { word: "Addition", hint: "dodawanie" },
      { word: "Subtraktion", hint: "odejmowanie" },
      { word: "Multiplikation", hint: "mnożenie" },
      { word: "Division", hint: "dzielenie" },
      { word: "Bruch", hint: "ułamek" },
      { word: "Prozent", hint: "procent" },
      { word: "Gleichung", hint: "równanie" },
      { word: "Winkel", hint: "kąt" },
      { word: "Fläche", hint: "pole powierzchni" },
      { word: "Volumen", hint: "objętość" },
      { word: "Umfang", hint: "obwód" },
      { word: "Durchmesser", hint: "średnica" },
      { word: "Radius", hint: "promień" },
      { word: "Formel", hint: "wzór" }
    ]
  }
};

export default wordBuilderCategories_part13;