/**
 * GERMAN → ENGLISH WORD BUILDER - PART 11
 * Categories: 46-49
 * 4 categories, 15 words each = 60 words
 */

import { Plane, Ship, Train, MapPin } from "lucide-react";

export const wordBuilderCategories_part11 = {
  air_travel: {
    name: "Flugreisen",
    description: "Fliegen und Flughäfen",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "airplane", hint: "Flugzeug" },
      { word: "airport", hint: "Flughafen" },
      { word: "flight", hint: "Flug" },
      { word: "takeoff", hint: "Start" },
      { word: "landing", hint: "Landung" },
      { word: "pilot", hint: "Pilot" },
      { word: "flight attendant", hint: "Flugbegleiterin" },
      { word: "passenger", hint: "Passagier" },
      { word: "luggage", hint: "Gepäck" },
      { word: "suitcase", hint: "Koffer" },
      { word: "check-in", hint: "Check-in" },
      { word: "boarding pass", hint: "Bordkarte" },
      { word: "gate", hint: "Gate" },
      { word: "terminal", hint: "Terminal" },
      { word: "delay", hint: "Verspätung" }
    ]
  },

  sea_travel: {
    name: "Seereisen",
    description: "Schiffe und Meeresreisen",
    icon: Ship,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "ship", hint: "Schiff" },
      { word: "port", hint: "Hafen" },
      { word: "cruise", hint: "Kreuzfahrt" },
      { word: "ferry", hint: "Fähre" },
      { word: "yacht", hint: "Yacht" },
      { word: "sailboat", hint: "Segelboot" },
      { word: "captain", hint: "Kapitän" },
      { word: "sailor", hint: "Matrose" },
      { word: "crew", hint: "Besatzung" },
      { word: "deck", hint: "Deck" },
      { word: "cabin", hint: "Kabine" },
      { word: "anchor", hint: "Anker" },
      { word: "sail", hint: "Segel" },
      { word: "rudder", hint: "Ruder" },
      { word: "tide", hint: "Gezeiten" }
    ]
  },

  train_travel: {
    name: "Zugreisen",
    description: "Züge und Bahnhöfe",
    icon: Train,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "train", hint: "Zug" },
      { word: "station", hint: "Bahnhof" },
      { word: "platform", hint: "Bahnsteig" },
      { word: "track", hint: "Gleis" },
      { word: "ticket", hint: "Fahrkarte" },
      { word: "carriage", hint: "Waggon" },
      { word: "seat", hint: "Sitzplatz" },
      { word: "first class", hint: "erste Klasse" },
      { word: "second class", hint: "zweite Klasse" },
      { word: "conductor", hint: "Schaffner" },
      { word: "engineer", hint: "Lokführer" },
      { word: "schedule", hint: "Fahrplan" },
      { word: "departure", hint: "Abfahrt" },
      { word: "arrival", hint: "Ankunft" },
      { word: "connection", hint: "Anschluss" }
    ]
  },

  tourist_destinations: {
    name: "Reiseziele",
    description: "Beliebte Touristenziele",
    icon: MapPin,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "destination", hint: "Ziel" },
      { word: "tourism", hint: "Tourismus" },
      { word: "tourist", hint: "Tourist" },
      { word: "attraction", hint: "Attraktion" },
      { word: "monument", hint: "Denkmal" },
      { word: "museum", hint: "Museum" },
      { word: "cathedral", hint: "Kathedrale" },
      { word: "castle", hint: "Schloss" },
      { word: "palace", hint: "Palast" },
      { word: "ruins", hint: "Ruinen" },
      { word: "park", hint: "Park" },
      { word: "garden", hint: "Garten" },
      { word: "viewpoint", hint: "Aussichtspunkt" },
      { word: "excursion", hint: "Ausflug" },
      { word: "tour guide", hint: "Reiseführer" }
    ]
  }
};

export default wordBuilderCategories_part11;