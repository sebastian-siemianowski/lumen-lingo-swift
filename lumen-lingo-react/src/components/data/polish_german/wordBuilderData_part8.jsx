/**
 * POLISH → GERMAN WORD BUILDER - PART 8
 * Categories: 33-36
 * 4 categories, 15 words each = 60 words
 */

import { Plane, Building2, Hammer, Wrench } from "lucide-react";

export const wordBuilderCategories_part8 = {
  travel: {
    name: "Podróże",
    description: "Wyjazdy i zwiedzanie",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "Reise", hint: "podróż" },
      { word: "Urlaub", hint: "wakacje" },
      { word: "Flughafen", hint: "lotnisko" },
      { word: "Bahnhof", hint: "dworzec" },
      { word: "Hotel", hint: "hotel" },
      { word: "Gepäck", hint: "bagaż" },
      { word: "Koffer", hint: "walizka" },
      { word: "Ticket", hint: "bilet" },
      { word: "Reisepass", hint: "paszport" },
      { word: "Visum", hint: "wiza" },
      { word: "Landkarte", hint: "mapa" },
      { word: "Kompass", hint: "kompas" },
      { word: "Tourist", hint: "turysta" },
      { word: "Sehenswürdigkeit", hint: "atrakcja" },
      { word: "Abenteuer", hint: "przygoda" }
    ]
  },

  architecture: {
    name: "Architektura",
    description: "Budynki i konstrukcje",
    icon: Building2,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "Gebäude", hint: "budynek" },
      { word: "Haus", hint: "dom" },
      { word: "Wohnung", hint: "mieszkanie" },
      { word: "Brücke", hint: "most" },
      { word: "Turm", hint: "wieża" },
      { word: "Kirche", hint: "kościół" },
      { word: "Schloss", hint: "zamek" },
      { word: "Palast", hint: "pałac" },
      { word: "Dom", hint: "katedra" },
      { word: "Wolkenkratzer", hint: "drapacz chmur" },
      { word: "Fassade", hint: "fasada" },
      { word: "Dach", hint: "dach" },
      { word: "Fundament", hint: "fundament" },
      { word: "Säule", hint: "kolumna" },
      { word: "Bogen", hint: "łuk" }
    ]
  },

  construction: {
    name: "Budownictwo",
    description: "Budowa i materiały budowlane",
    icon: Hammer,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "Baustelle", hint: "plac budowy" },
      { word: "Bauarbeiter", hint: "robotnik budowlany" },
      { word: "Ziegel", hint: "cegła" },
      { word: "Beton", hint: "beton" },
      { word: "Zement", hint: "cement" },
      { word: "Holz", hint: "drewno" },
      { word: "Stahl", hint: "stal" },
      { word: "Hammer", hint: "młotek" },
      { word: "Nagel", hint: "gwóźdź" },
      { word: "Schraube", hint: "śruba" },
      { word: "Leiter", hint: "drabina" },
      { word: "Gerüst", hint: "rusztowanie" },
      { word: "Mauer", hint: "mur" },
      { word: "Wand", hint: "ściana" },
      { word: "Boden", hint: "podłoga" }
    ]
  },

  tools: {
    name: "Narzędzia",
    description: "Narzędzia do pracy i naprawy",
    icon: Wrench,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Werkzeug", hint: "narzędzie" },
      { word: "Hammer", hint: "młotek" },
      { word: "Schraubenzieher", hint: "śrubokręt" },
      { word: "Zange", hint: "obcęgi" },
      { word: "Säge", hint: "piła" },
      { word: "Bohrer", hint: "wiertarka" },
      { word: "Schraubenschlüssel", hint: "klucz" },
      { word: "Axt", hint: "siekiera" },
      { word: "Spaten", hint: "łopata" },
      { word: "Schaufel", hint: "szufla" },
      { word: "Rechen", hint: "grabie" },
      { word: "Hacke", hint: "motyka" },
      { word: "Meißel", hint: "dłuto" },
      { word: "Feile", hint: "pilnik" },
      { word: "Werkzeugkasten", hint: "skrzynka narzędziowa" }
    ]
  }
};

export default wordBuilderCategories_part8;