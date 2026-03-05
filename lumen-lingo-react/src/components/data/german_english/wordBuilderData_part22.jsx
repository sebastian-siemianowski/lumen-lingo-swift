/**
 * GERMAN → ENGLISH WORD BUILDER - PART 22
 * Categories: 94-97
 * 4 categories, 15 words each = 60 words
 */

import { Film, Drama, Clapperboard, Video } from "lucide-react";

export const wordBuilderCategories_part22 = {
  cinema: {
    name: "Kino",
    description: "Filme und Kinoerlebnis",
    icon: Film,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "cinema", hint: "Kino" },
      { word: "movie", hint: "Film" },
      { word: "screen", hint: "Leinwand" },
      { word: "theater", hint: "Saal" },
      { word: "seat", hint: "Sessel" },
      { word: "ticket", hint: "Eintrittskarte" },
      { word: "box office", hint: "Kasse" },
      { word: "popcorn", hint: "Popcorn" },
      { word: "soda", hint: "Erfrischungsgetränk" },
      { word: "trailer", hint: "Trailer" },
      { word: "premiere", hint: "Premiere" },
      { word: "showing", hint: "Vorstellung" },
      { word: "screening", hint: "Vorführung" },
      { word: "subtitles", hint: "Untertitel" },
      { word: "dubbing", hint: "Synchronisation" }
    ]
  },

  theater: {
    name: "Theater",
    description: "Bühnenkunst und Schauspiel",
    icon: Drama,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "theater", hint: "Theater" },
      { word: "play", hint: "Stück" },
      { word: "drama", hint: "Drama" },
      { word: "comedy", hint: "Komödie" },
      { word: "tragedy", hint: "Tragödie" },
      { word: "actor", hint: "Schauspieler" },
      { word: "actress", hint: "Schauspielerin" },
      { word: "director", hint: "Regisseur" },
      { word: "stage", hint: "Bühne" },
      { word: "curtain", hint: "Vorhang" },
      { word: "act", hint: "Akt" },
      { word: "scene", hint: "Szene" },
      { word: "rehearsal", hint: "Probe" },
      { word: "costume", hint: "Kostüm" },
      { word: "makeup", hint: "Maske" }
    ]
  },

  filmmaking: {
    name: "Filmproduktion",
    description: "Filmherstellung und Drehtechnik",
    icon: Clapperboard,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "production", hint: "Produktion" },
      { word: "filming", hint: "Dreharbeiten" },
      { word: "director", hint: "Regisseur" },
      { word: "producer", hint: "Produzent" },
      { word: "script", hint: "Drehbuch" },
      { word: "screenwriter", hint: "Drehbuchautor" },
      { word: "camera", hint: "Kamera" },
      { word: "cameraman", hint: "Kameramann" },
      { word: "lighting", hint: "Beleuchtung" },
      { word: "sound", hint: "Ton" },
      { word: "editing", hint: "Schnitt" },
      { word: "special effects", hint: "Spezialeffekte" },
      { word: "set design", hint: "Bühnenbild" },
      { word: "casting", hint: "Besetzung" },
      { word: "clapperboard", hint: "Filmklappe" }
    ]
  },

  streaming: {
    name: "Streaming",
    description: "Online-Videodienste und Streaming",
    icon: Video,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "streaming", hint: "Streaming" },
      { word: "platform", hint: "Plattform" },
      { word: "series", hint: "Serie" },
      { word: "episode", hint: "Episode" },
      { word: "season", hint: "Staffel" },
      { word: "chapter", hint: "Folge" },
      { word: "binge-watching", hint: "Binge-Watching" },
      { word: "content", hint: "Inhalt" },
      { word: "subscription", hint: "Abonnement" },
      { word: "catalog", hint: "Katalog" },
      { word: "recommendation", hint: "Empfehlung" },
      { word: "play", hint: "abspielen" },
      { word: "pause", hint: "pausieren" },
      { word: "continue", hint: "fortsetzen" },
      { word: "download", hint: "herunterladen" }
    ]
  }
};

export default wordBuilderCategories_part22;