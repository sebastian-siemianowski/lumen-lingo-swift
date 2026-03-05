/**
 * POLISH → SPANISH WORD BUILDER - PART 8
 * Categories: 46-50
 * 5 categories, 15 words each = 75 words
 */

import { Bike, Train, Ship, Plane, MapPin } from "lucide-react";

export const wordBuilderCategories_part8 = {
  transportation_verbs: {
    name: "Czasowniki transportowe",
    description: "Działania związane z podróżowaniem",
    icon: Bike,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "conducir", hint: "prowadzić" },
      { word: "manejar", hint: "kierować" },
      { word: "viajar", hint: "podróżować" },
      { word: "caminar", hint: "chodzić" },
      { word: "correr", hint: "biegać" },
      { word: "montar", hint: "jeździć" },
      { word: "pedalear", hint: "pedałować" },
      { word: "navegar", hint: "żeglować" },
      { word: "volar", hint: "latać" },
      { word: "aterrizar", hint: "lądować" },
      { word: "despegar", hint: "startować" },
      { word: "estacionar", hint: "parkować" },
      { word: "frenar", hint: "hamować" },
      { word: "acelerar", hint: "przyspieszać" },
      { word: "girar", hint: "skręcać" }
    ]
  },

  train_travel: {
    name: "Podróż pociągiem",
    description: "Słownictwo związane z koleją",
    icon: Train,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "estación", hint: "stacja" },
      { word: "andén", hint: "peron" },
      { word: "vía", hint: "tor" },
      { word: "vagón", hint: "wagon" },
      { word: "locomotora", hint: "lokomotywa" },
      { word: "boleto", hint: "bilet" },
      { word: "reserva", hint: "rezerwacja" },
      { word: "asiento", hint: "miejsce" },
      { word: "horario", hint: "rozkład jazdy" },
      { word: "llegada", hint: "przyjazd" },
      { word: "salida", hint: "odjazd" },
      { word: "retraso", hint: "opóźnienie" },
      { word: "trasbordo", hint: "przesiadka" },
      { word: "equipaje", hint: "bagaż" },
      { word: "revisor", hint: "konduktor" }
    ]
  },

  sea_travel: {
    name: "Podróż morska",
    description: "Żeglowanie i podróże wodne",
    icon: Ship,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "barco", hint: "statek" },
      { word: "puerto", hint: "port" },
      { word: "muelle", hint: "nabrzeże" },
      { word: "ancla", hint: "kotwica" },
      { word: "vela", hint: "żagiel" },
      { word: "remo", hint: "wiosło" },
      { word: "capitán", hint: "kapitan" },
      { word: "tripulación", hint: "załoga" },
      { word: "pasajero", hint: "pasażer" },
      { word: "cubierta", hint: "pokład" },
      { word: "camarote", hint: "kabina" },
      { word: "proa", hint: "dziób" },
      { word: "popa", hint: "rufa" },
      { word: "marea", hint: "przypływ" },
      { word: "ola", hint: "fala" }
    ]
  },

  air_travel: {
    name: "Podróż lotnicza",
    description: "Loty i lotniska",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "aeropuerto", hint: "lotnisko" },
      { word: "terminal", hint: "terminal" },
      { word: "puerta", hint: "bramka" },
      { word: "embarque", hint: "boarding" },
      { word: "aterrizaje", hint: "lądowanie" },
      { word: "despegue", hint: "start" },
      { word: "vuelo", hint: "lot" },
      { word: "piloto", hint: "pilot" },
      { word: "azafata", hint: "stewardesa" },
      { word: "pasaporte", hint: "paszport" },
      { word: "visado", hint: "wiza" },
      { word: "aduana", hint: "cło" },
      { word: "seguridad", hint: "bezpieczeństwo" },
      { word: "maleta", hint: "walizka" },
      { word: "escala", hint: "postój" }
    ]
  },

  travel_destinations: {
    name: "Miejsca podróży",
    description: "Rodzaje miejsc docelowych",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "ciudad", hint: "miasto" },
      { word: "pueblo", hint: "wieś" },
      { word: "campo", hint: "wieś" },
      { word: "montaña", hint: "góry" },
      { word: "playa", hint: "plaża" },
      { word: "isla", hint: "wyspa" },
      { word: "desierto", hint: "pustynia" },
      { word: "selva", hint: "dżungla" },
      { word: "lago", hint: "jezioro" },
      { word: "río", hint: "rzeka" },
      { word: "valle", hint: "dolina" },
      { word: "colina", hint: "wzgórze" },
      { word: "costa", hint: "wybrzeże" },
      { word: "frontera", hint: "granica" },
      { word: "región", hint: "region" }
    ]
  }
};

export default wordBuilderCategories_part8;