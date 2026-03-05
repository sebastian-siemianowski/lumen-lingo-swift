/**
 * GERMAN → SPANISH WORD BUILDER - PART 12
 * Categories: 51-54
 * 4 categories, 15 words each = 60 words
 */

import { Plane, Ship, Train, MapPin } from "lucide-react";

export const wordBuilderCategories_part12 = {
  air_travel: {
    name: "Flugreisen",
    description: "Fliegen und Flughäfen",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "avión", hint: "Flugzeug" },
      { word: "aeropuerto", hint: "Flughafen" },
      { word: "vuelo", hint: "Flug" },
      { word: "despegue", hint: "Start" },
      { word: "aterrizaje", hint: "Landung" },
      { word: "piloto", hint: "Pilot" },
      { word: "azafata", hint: "Flugbegleiterin" },
      { word: "pasajero", hint: "Passagier" },
      { word: "equipaje", hint: "Gepäck" },
      { word: "maleta", hint: "Koffer" },
      { word: "facturación", hint: "Check-in" },
      { word: "tarjeta de embarque", hint: "Bordkarte" },
      { word: "puerta", hint: "Gate" },
      { word: "terminal", hint: "Terminal" },
      { word: "retraso", hint: "Verspätung" }
    ]
  },

  sea_travel: {
    name: "Seereisen",
    description: "Schiffe und Meeresreisen",
    icon: Ship,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "barco", hint: "Schiff" },
      { word: "puerto", hint: "Hafen" },
      { word: "crucero", hint: "Kreuzfahrt" },
      { word: "ferry", hint: "Fähre" },
      { word: "yate", hint: "Yacht" },
      { word: "velero", hint: "Segelboot" },
      { word: "capitán", hint: "Kapitän" },
      { word: "marinero", hint: "Matrose" },
      { word: "tripulación", hint: "Besatzung" },
      { word: "cubierta", hint: "Deck" },
      { word: "camarote", hint: "Kabine" },
      { word: "ancla", hint: "Anker" },
      { word: "vela", hint: "Segel" },
      { word: "timón", hint: "Ruder" },
      { word: "marea", hint: "Gezeiten" }
    ]
  },

  train_travel: {
    name: "Zugreisen",
    description: "Züge und Bahnhöfe",
    icon: Train,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "tren", hint: "Zug" },
      { word: "estación", hint: "Bahnhof" },
      { word: "andén", hint: "Bahnsteig" },
      { word: "vía", hint: "Gleis" },
      { word: "billete", hint: "Fahrkarte" },
      { word: "vagón", hint: "Waggon" },
      { word: "asiento", hint: "Sitzplatz" },
      { word: "primera clase", hint: "erste Klasse" },
      { word: "segunda clase", hint: "zweite Klasse" },
      { word: "revisor", hint: "Schaffner" },
      { word: "maquinista", hint: "Lokführer" },
      { word: "horario", hint: "Fahrplan" },
      { word: "salida", hint: "Abfahrt" },
      { word: "llegada", hint: "Ankunft" },
      { word: "conexión", hint: "Anschluss" }
    ]
  },

  tourist_destinations: {
    name: "Reiseziele",
    description: "Beliebte Touristenziele",
    icon: MapPin,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "destino", hint: "Ziel" },
      { word: "turismo", hint: "Tourismus" },
      { word: "turista", hint: "Tourist" },
      { word: "atracción", hint: "Attraktion" },
      { word: "monumento", hint: "Denkmal" },
      { word: "museo", hint: "Museum" },
      { word: "catedral", hint: "Kathedrale" },
      { word: "castillo", hint: "Schloss" },
      { word: "palacio", hint: "Palast" },
      { word: "ruinas", hint: "Ruinen" },
      { word: "parque", hint: "Park" },
      { word: "jardín", hint: "Garten" },
      { word: "mirador", hint: "Aussichtspunkt" },
      { word: "excursión", hint: "Ausflug" },
      { word: "guía turístico", hint: "Reiseführer" }
    ]
  }
};

export default wordBuilderCategories_part12;