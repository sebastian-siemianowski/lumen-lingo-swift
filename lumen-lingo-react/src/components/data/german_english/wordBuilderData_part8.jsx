/**
 * GERMAN → ENGLISH WORD BUILDER - PART 8
 * Categories: 32-35
 * 4 categories, 15 words each = 60 words
 */

import { Headphones, Gamepad2, Clock, CalendarDays } from "lucide-react";

export const wordBuilderCategories_part8 = {
  audio_music: {
    name: "Audio und Musik",
    description: "Sound hören und aufnehmen",
    icon: Headphones,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "headphones", hint: "Kopfhörer" },
      { word: "speaker", hint: "Lautsprecher" },
      { word: "microphone", hint: "Mikrofon" },
      { word: "radio", hint: "Radio" },
      { word: "recording", hint: "Aufnahme" },
      { word: "playback", hint: "Wiedergabe" },
      { word: "volume", hint: "Lautstärke" },
      { word: "bass", hint: "Bass" },
      { word: "treble", hint: "Höhen" },
      { word: "sound", hint: "Klang" },
      { word: "tone", hint: "Ton" },
      { word: "acoustics", hint: "Akustik" },
      { word: "stereo", hint: "Stereo" },
      { word: "amplifier", hint: "Verstärker" },
      { word: "equalizer", hint: "Equalizer" }
    ]
  },

  gaming: {
    name: "Videospiele",
    description: "Gaming und elektronische Unterhaltung",
    icon: Gamepad2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "game", hint: "Spiel" },
      { word: "video game", hint: "Videospiel" },
      { word: "player", hint: "Spieler" },
      { word: "controller", hint: "Controller" },
      { word: "console", hint: "Konsole" },
      { word: "level", hint: "Level" },
      { word: "mission", hint: "Mission" },
      { word: "character", hint: "Charakter" },
      { word: "graphics", hint: "Grafik" },
      { word: "screen", hint: "Bildschirm" },
      { word: "keyboard", hint: "Tastatur" },
      { word: "joystick", hint: "Joystick" },
      { word: "score", hint: "Punktzahl" },
      { word: "leaderboard", hint: "Rangliste" },
      { word: "strategy", hint: "Strategie" }
    ]
  },

  time: {
    name: "Zeit",
    description: "Zeitausdrücke und Stunde",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "time", hint: "Zeit" },
      { word: "clock", hint: "Uhr" },
      { word: "hour", hint: "Stunde" },
      { word: "minute", hint: "Minute" },
      { word: "second", hint: "Sekunde" },
      { word: "morning", hint: "Morgen" },
      { word: "afternoon", hint: "Nachmittag" },
      { word: "evening", hint: "Abend" },
      { word: "midnight", hint: "Mitternacht" },
      { word: "today", hint: "heute" },
      { word: "yesterday", hint: "gestern" },
      { word: "tomorrow", hint: "morgen" },
      { word: "week", hint: "Woche" },
      { word: "month", hint: "Monat" },
      { word: "year", hint: "Jahr" }
    ]
  },

  calendar_dates: {
    name: "Kalender und Daten",
    description: "Wochentage und Monate",
    icon: CalendarDays,
    color: "from-purple-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { word: "monday", hint: "Montag" },
      { word: "tuesday", hint: "Dienstag" },
      { word: "wednesday", hint: "Mittwoch" },
      { word: "thursday", hint: "Donnerstag" },
      { word: "friday", hint: "Freitag" },
      { word: "saturday", hint: "Samstag" },
      { word: "sunday", hint: "Sonntag" },
      { word: "week", hint: "Woche" },
      { word: "month", hint: "Monat" },
      { word: "year", hint: "Jahr" },
      { word: "date", hint: "Datum" },
      { word: "calendar", hint: "Kalender" },
      { word: "holiday", hint: "Feiertag" },
      { word: "weekend", hint: "Wochenende" },
      { word: "weekday", hint: "Werktag" }
    ]
  }
};

export default wordBuilderCategories_part8;