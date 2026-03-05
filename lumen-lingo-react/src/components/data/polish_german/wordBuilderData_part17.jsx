/**
 * POLISH → GERMAN WORD BUILDER - PART 17
 * Categories: 68-71
 * 4 categories, 15 words each = 60 words
 */

import { Heart, Users, Baby, Gift } from "lucide-react";

export const wordBuilderCategories_part17 = {
  feelings_emotions: {
    name: "Uczucia i emocje",
    description: "Wyrażanie stanów emocjonalnych",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "glücklich", hint: "szczęśliwy" },
      { word: "traurig", hint: "smutny" },
      { word: "wütend", hint: "zły" },
      { word: "ängstlich", hint: "przestraszony" },
      { word: "nervös", hint: "zdenerwowany" },
      { word: "aufgeregt", hint: "podekscytowany" },
      { word: "müde", hint: "zmęczony" },
      { word: "einsam", hint: "samotny" },
      { word: "verliebt", hint: "zakochany" },
      { word: "eifersüchtig", hint: "zazdrosny" },
      { word: "stolz", hint: "dumny" },
      { word: "enttäuscht", hint: "rozczarowany" },
      { word: "verwirrt", hint: "zdezorientowany" },
      { word: "zufrieden", hint: "zadowolony" },
      { word: "besorgt", hint: "zmartwiony" }
    ]
  },

  relationships: {
    name: "Relacje międzyludzkie",
    description: "Związki i interakcje społeczne",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Beziehung", hint: "związek" },
      { word: "Freundschaft", hint: "przyjaźń" },
      { word: "Liebe", hint: "miłość" },
      { word: "Ehe", hint: "małżeństwo" },
      { word: "Verlobung", hint: "zaręczyny" },
      { word: "Hochzeit", hint: "ślub" },
      { word: "Scheidung", hint: "rozwód" },
      { word: "Partner", hint: "partner" },
      { word: "Vertrauen", hint: "zaufanie" },
      { word: "Respekt", hint: "szacunek" },
      { word: "Unterstützung", hint: "wsparcie" },
      { word: "Verständnis", hint: "zrozumienie" },
      { word: "Streit", hint: "kłótnia" },
      { word: "Versöhnung", hint: "pojednanie" },
      { word: "Treue", hint: "wierność" }
    ]
  },

  children_babies: {
    name: "Dzieci i niemowlęta",
    description: "Świat małych dzieci",
    icon: Baby,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Baby", hint: "niemowlę" },
      { word: "Kleinkind", hint: "małe dziecko" },
      { word: "Windel", hint: "pielucha" },
      { word: "Flasche", hint: "butelka" },
      { word: "Schnuller", hint: "smoczek" },
      { word: "Kinderwagen", hint: "wózek dziecięcy" },
      { word: "Wiege", hint: "kołyska" },
      { word: "Spielzeug", hint: "zabawka" },
      { word: "Rassel", hint: "grzechotka" },
      { word: "Lätzchen", hint: "śliniaczek" },
      { word: "Babybrei", hint: "papka dla dzieci" },
      { word: "Wickeltisch", hint: "przewijak" },
      { word: "Kindersitz", hint: "fotelik dziecięcy" },
      { word: "Mobile", hint: "karuzela nad łóżeczkiem" },
      { word: "Kinderbett", hint: "łóżeczko dziecięce" }
    ]
  },

  celebrations: {
    name: "Święta i uroczystości",
    description: "Festyny i ważne wydarzenia",
    icon: Gift,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "Geburtstag", hint: "urodziny" },
      { word: "Weihnachten", hint: "Boże Narodzenie" },
      { word: "Ostern", hint: "Wielkanoc" },
      { word: "Silvester", hint: "Sylwester" },
      { word: "Neujahr", hint: "Nowy Rok" },
      { word: "Hochzeit", hint: "wesele" },
      { word: "Jubiläum", hint: "jubileusz" },
      { word: "Taufe", hint: "chrzest" },
      { word: "Konfirmation", hint: "konfirmacja" },
      { word: "Feier", hint: "święto" },
      { word: "Party", hint: "przyjęcie" },
      { word: "Fest", hint: "festyn" },
      { word: "Geschenk", hint: "prezent" },
      { word: "Torte", hint: "tort" },
      { word: "Kerze", hint: "świeca" }
    ]
  }
};

export default wordBuilderCategories_part17;