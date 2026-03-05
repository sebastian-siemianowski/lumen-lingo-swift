/**
 * POLISH → GERMAN WORD BUILDER - PART 27
 * Categories: 108-111
 * 4 categories, 15 words each = 60 words
 */

import { Bus, Train, Plane, MapPin } from "lucide-react";

export const wordBuilderCategories_part27 = {
  public_transport: {
    name: "Transport publiczny",
    description: "Komunikacja miejska i przewozy",
    icon: Bus,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "Bus", hint: "autobus" },
      { word: "Haltestelle", hint: "przystanek" },
      { word: "Fahrplan", hint: "rozkład jazdy" },
      { word: "Linie", hint: "linia" },
      { word: "Fahrkarte", hint: "bilet" },
      { word: "Einzelfahrkarte", hint: "bilet jednorazowy" },
      { word: "Monatskarte", hint: "bilet miesięczny" },
      { word: "Fahrer", hint: "kierowca" },
      { word: "Fahrgast", hint: "pasażer" },
      { word: "Umsteigen", hint: "przesiadka" },
      { word: "Endhaltestelle", hint: "przystanek końcowy" },
      { word: "Verspätung", hint: "opóźnienie" },
      { word: "Ankunft", hint: "przyjazd" },
      { word: "Abfahrt", hint: "odjazd" },
      { word: "Fahrgeld", hint: "opłata za przejazd" }
    ]
  },

  railway_trains: {
    name: "Kolej i pociągi",
    description: "Transport kolejowy i stacje",
    icon: Train,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "Zug", hint: "pociąg" },
      { word: "Bahnhof", hint: "dworzec" },
      { word: "Gleis", hint: "peron" },
      { word: "Schiene", hint: "szyna" },
      { word: "Wagon", hint: "wagon" },
      { word: "Abteil", hint: "przedział" },
      { word: "Platz", hint: "miejsce" },
      { word: "reserviert", hint: "zarezerwowany" },
      { word: "Fahrkartenschalter", hint: "kasa biletowa" },
      { word: "Fahrkartenautomat", hint: "automat biletowy" },
      { word: "Zugbegleiter", hint: "konduktor" },
      { word: "ICE", hint: "pociąg szybki" },
      { word: "Regionalbahn", hint: "pociąg regionalny" },
      { word: "Nachtzug", hint: "pociąg nocny" },
      { word: "Hauptbahnhof", hint: "dworzec główny" }
    ]
  },

  airport_flying: {
    name: "Lotnisko i latanie",
    description: "Podróże lotnicze i terminal",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "Flughafen", hint: "lotnisko" },
      { word: "Terminal", hint: "terminal" },
      { word: "Gate", hint: "bramka" },
      { word: "Check-in", hint: "odprawa" },
      { word: "Gepäckaufgabe", hint: "nadanie bagażu" },
      { word: "Handgepäck", hint: "bagaż podręczny" },
      { word: "Koffer", hint: "walizka" },
      { word: "Bordkarte", hint: "karta pokładowa" },
      { word: "Sicherheitskontrolle", hint: "kontrola bezpieczeństwa" },
      { word: "Zoll", hint: "cło" },
      { word: "Passkontrolle", hint: "kontrola paszportowa" },
      { word: "Warteraum", hint: "poczekalnia" },
      { word: "Start", hint: "start" },
      { word: "Landung", hint: "lądowanie" },
      { word: "Verspätung", hint: "opóźnienie" }
    ]
  },

  navigation_directions: {
    name: "Nawigacja i kierunki",
    description: "Orientacja i znajdowanie drogi",
    icon: MapPin,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Norden", hint: "północ" },
      { word: "Süden", hint: "południe" },
      { word: "Osten", hint: "wschód" },
      { word: "Westen", hint: "zachód" },
      { word: "links", hint: "w lewo" },
      { word: "rechts", hint: "w prawo" },
      { word: "geradeaus", hint: "prosto" },
      { word: "zurück", hint: "z powrotem" },
      { word: "Kreuzung", hint: "skrzyżowanie" },
      { word: "Ampel", hint: "światła" },
      { word: "Kreisverkehr", hint: "rondo" },
      { word: "Abzweigung", hint: "rozwidlenie" },
      { word: "Umweg", hint: "objazd" },
      { word: "Abkürzung", hint: "skrót" },
      { word: "Wegweiser", hint: "drogowskaz" }
    ]
  }
};

export default wordBuilderCategories_part27;