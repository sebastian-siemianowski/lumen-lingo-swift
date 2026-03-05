/**
 * POLISH → GERMAN WORD BUILDER - PART 22
 * Categories: 88-91
 * 4 categories, 15 words each = 60 words
 */

import { Wrench, Hammer, Paintbrush, Zap } from "lucide-react";

export const wordBuilderCategories_part22 = {
  repairs_fixing: {
    name: "Naprawy i konserwacja",
    description: "Działania naprawcze w domu",
    icon: Wrench,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "reparieren", hint: "naprawiać" },
      { word: "Reparatur", hint: "naprawa" },
      { word: "Handwerker", hint: "rzemieślnik" },
      { word: "Klempner", hint: "hydraulik" },
      { word: "Elektriker", hint: "elektryk" },
      { word: "Schreiner", hint: "stolarz" },
      { word: "Maler", hint: "malarz" },
      { word: "montieren", hint: "montować" },
      { word: "demontieren", hint: "demontować" },
      { word: "reparieren", hint: "naprawiać" },
      { word: "Wartung", hint: "konserwacja" },
      { word: "Ersatzteil", hint: "część zamienna" },
      { word: "Garantie", hint: "gwarancja" },
      { word: "Werkstatt", hint: "warsztat" },
      { word: "Service", hint: "serwis" }
    ]
  },

  diy_tools: {
    name: "Narzędzia majsterkowania",
    description: "Sprzęt do prac domowych",
    icon: Hammer,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "Bohrmaschine", hint: "wiertarka" },
      { word: "Akkuschrauber", hint: "wkrętarka akumulatorowa" },
      { word: "Säge", hint: "piła" },
      { word: "Kreissäge", hint: "piła tarczowa" },
      { word: "Stichsäge", hint: "wyrzynarka" },
      { word: "Schleifmaschine", hint: "szlifierka" },
      { word: "Wasserwaage", hint: "poziomnica" },
      { word: "Maßband", hint: "miara" },
      { word: "Zollstock", hint: "miara składana" },
      { word: "Winkel", hint: "kątownik" },
      { word: "Klebepistole", hint: "pistolet do kleju" },
      { word: "Lötkolben", hint: "lutownica" },
      { word: "Schweißgerät", hint: "spawarka" },
      { word: "Schraubstock", hint: "imadło" },
      { word: "Leiter", hint: "drabina" }
    ]
  },

  painting_decorating: {
    name: "Malowanie i dekoracja",
    description: "Prace malarskie i ozdobne",
    icon: Paintbrush,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "streichen", hint: "malować" },
      { word: "Farbe", hint: "farba" },
      { word: "Lack", hint: "lakier" },
      { word: "Pinsel", hint: "pędzel" },
      { word: "Rolle", hint: "wałek" },
      { word: "Farbroller", hint: "wałek malarski" },
      { word: "Farbeimer", hint: "wiadro z farbą" },
      { word: "Abdeckfolie", hint: "folia ochronna" },
      { word: "Malerband", hint: "taśma malarska" },
      { word: "Spachtel", hint: "szpachla" },
      { word: "Tapete", hint: "tapeta" },
      { word: "Kleister", hint: "klej do tapet" },
      { word: "Grundierung", hint: "grunt" },
      { word: "Schablone", hint: "szablon" },
      { word: "Spraydose", hint: "spray" }
    ]
  },

  electricity: {
    name: "Elektryczność",
    description: "Instalacje i urządzenia elektryczne",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "Strom", hint: "prąd" },
      { word: "Elektrizität", hint: "elektryczność" },
      { word: "Stromkreis", hint: "obwód elektryczny" },
      { word: "Steckdose", hint: "gniazdko" },
      { word: "Stecker", hint: "wtyczka" },
      { word: "Kabel", hint: "kabel" },
      { word: "Sicherung", hint: "bezpiecznik" },
      { word: "Schalter", hint: "włącznik" },
      { word: "Batterie", hint: "bateria" },
      { word: "Akku", hint: "akumulator" },
      { word: "Spannung", hint: "napięcie" },
      { word: "Watt", hint: "wat" },
      { word: "Volt", hint: "wolt" },
      { word: "Ampere", hint: "amper" },
      { word: "Erdung", hint: "uziemienie" }
    ]
  }
};

export default wordBuilderCategories_part22;