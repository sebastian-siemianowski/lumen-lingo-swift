/**
 * POLISH → ENGLISH WORD BUILDER - PART 5
 * Categories: 31-34
 * 4 categories, 15 words each = 60 words
 */

import { Laptop, Share2, Tv, Gamepad2 } from "lucide-react";

export const wordBuilderCategories_part5 = {
  technology_computers: {
    name: "Technologia i komputery",
    description: "Sprzęt komputerowy i technologia",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "keyboard", hint: "klawiatura" },
      { word: "mouse", hint: "myszka" },
      { word: "monitor", hint: "monitor" },
      { word: "laptop", hint: "laptop" },
      { word: "desktop", hint: "komputer stacjonarny" },
      { word: "software", hint: "oprogramowanie" },
      { word: "hardware", hint: "sprzęt" },
      { word: "processor", hint: "procesor" },
      { word: "memory", hint: "pamięć" },
      { word: "storage", hint: "pamięć masowa" },
      { word: "browser", hint: "przeglądarka" },
      { word: "download", hint: "pobieranie" },
      { word: "upload", hint: "przesyłanie" },
      { word: "backup", hint: "kopia zapasowa" },
      { word: "virus", hint: "wirus" }
    ]
  },

  social_media: {
    name: "Media społecznościowe",
    description: "Platformy i działania online",
    icon: Share2,
    color: "from-pink-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "post", hint: "post" },
      { word: "comment", hint: "komentarz" },
      { word: "like", hint: "polubienie" },
      { word: "share", hint: "udostępnienie" },
      { word: "follow", hint: "obserwowanie" },
      { word: "follower", hint: "obserwujący" },
      { word: "hashtag", hint: "hashtag" },
      { word: "trending", hint: "na czasie" },
      { word: "viral", hint: "wirusowy" },
      { word: "influencer", hint: "influencer" },
      { word: "feed", hint: "strumień" },
      { word: "profile", hint: "profil" },
      { word: "story", hint: "relacja" },
      { word: "message", hint: "wiadomość" },
      { word: "notification", hint: "powiadomienie" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Formy rozrywki i wypoczynku",
    icon: Tv,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "movie", hint: "film" },
      { word: "series", hint: "serial" },
      { word: "show", hint: "program" },
      { word: "concert", hint: "koncert" },
      { word: "theater", hint: "teatr" },
      { word: "festival", hint: "festiwal" },
      { word: "exhibition", hint: "wystawa" },
      { word: "performance", hint: "występ" },
      { word: "comedy", hint: "komedia" },
      { word: "drama", hint: "dramat" },
      { word: "documentary", hint: "dokument" },
      { word: "cartoon", hint: "kreskówka" },
      { word: "animation", hint: "animacja" },
      { word: "actor", hint: "aktor" },
      { word: "director", hint: "reżyser" }
    ]
  },

  video_games: {
    name: "Gry wideo",
    description: "Gaming i słownictwo graczy",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "game", hint: "gra" },
      { word: "player", hint: "gracz" },
      { word: "level", hint: "poziom" },
      { word: "quest", hint: "misja" },
      { word: "mission", hint: "zadanie" },
      { word: "character", hint: "postać" },
      { word: "controller", hint: "kontroler" },
      { word: "console", hint: "konsola" },
      { word: "graphics", hint: "grafika" },
      { word: "multiplayer", hint: "wieloosobowy" },
      { word: "campaign", hint: "kampania" },
      { word: "achievement", hint: "osiągnięcie" },
      { word: "leaderboard", hint: "ranking" },
      { word: "tournament", hint: "turniej" },
      { word: "strategy", hint: "strategia" }
    ]
  }
};

export default wordBuilderCategories_part5;