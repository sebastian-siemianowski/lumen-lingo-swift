/**
 * POLISH → GERMAN WORD BUILDER - PART 9
 * Categories: 37-40
 * 4 categories, 15 words each = 60 words
 */

import { Dumbbell, Headphones, Tv, Gamepad2 } from "lucide-react";

export const wordBuilderCategories_part9 = {
  sports_fitness: {
    name: "Sport i fitness",
    description: "Aktywność fizyczna i ćwiczenia",
    icon: Dumbbell,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Sport", hint: "sport" },
      { word: "Fußball", hint: "piłka nożna" },
      { word: "Basketball", hint: "koszykówka" },
      { word: "Tennis", hint: "tenis" },
      { word: "Schwimmen", hint: "pływanie" },
      { word: "Laufen", hint: "bieganie" },
      { word: "Training", hint: "trening" },
      { word: "Fitness", hint: "fitness" },
      { word: "Gymnastik", hint: "gimnastyka" },
      { word: "Yoga", hint: "joga" },
      { word: "Stadion", hint: "stadion" },
      { word: "Mannschaft", hint: "drużyna" },
      { word: "Spieler", hint: "zawodnik" },
      { word: "Wettkampf", hint: "zawody" },
      { word: "Medaille", hint: "medal" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Filmy i programy rozrywkowe",
    icon: Tv,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "Fernsehen", hint: "telewizja" },
      { word: "Film", hint: "film" },
      { word: "Serie", hint: "serial" },
      { word: "Programm", hint: "program" },
      { word: "Schauspieler", hint: "aktor" },
      { word: "Regisseur", hint: "reżyser" },
      { word: "Kino", hint: "kino" },
      { word: "Theater", hint: "teatr" },
      { word: "Komödie", hint: "komedia" },
      { word: "Drama", hint: "dramat" },
      { word: "Dokumentarfilm", hint: "dokument" },
      { word: "Zeichentrickfilm", hint: "kreskówka" },
      { word: "Nachricht", hint: "wiadomości" },
      { word: "Show", hint: "show" },
      { word: "Unterhaltung", hint: "rozrywka" }
    ]
  },

  audio_music: {
    name: "Audio i muzyka",
    description: "Słuchanie i nagrywanie dźwięku",
    icon: Headphones,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "Kopfhörer", hint: "słuchawki" },
      { word: "Lautsprecher", hint: "głośnik" },
      { word: "Mikrofon", hint: "mikrofon" },
      { word: "Radio", hint: "radio" },
      { word: "Aufnahme", hint: "nagranie" },
      { word: "Wiedergabe", hint: "odtwarzanie" },
      { word: "Lautstärke", hint: "głośność" },
      { word: "Bass", hint: "bas" },
      { word: "Höhen", hint: "wysokie tony" },
      { word: "Klang", hint: "dźwięk" },
      { word: "Ton", hint: "ton" },
      { word: "Akustik", hint: "akustyka" },
      { word: "Stereo", hint: "stereo" },
      { word: "Verstärker", hint: "wzmacniacz" },
      { word: "Equalizer", hint: "equalizer" }
    ]
  },

  gaming: {
    name: "Gry wideo",
    description: "Gaming i elektroniczna rozrywka",
    icon: Gamepad2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "Spiel", hint: "gra" },
      { word: "Videospiel", hint: "gra wideo" },
      { word: "Spieler", hint: "gracz" },
      { word: "Controller", hint: "kontroler" },
      { word: "Konsole", hint: "konsola" },
      { word: "Level", hint: "poziom" },
      { word: "Mission", hint: "misja" },
      { word: "Charakter", hint: "postać" },
      { word: "Grafik", hint: "grafika" },
      { word: "Bildschirm", hint: "ekran" },
      { word: "Tastatur", hint: "klawiatura" },
      { word: "Joystick", hint: "joystick" },
      { word: "Punktzahl", hint: "wynik" },
      { word: "Bestenliste", hint: "ranking" },
      { word: "Strategie", hint: "strategia" }
    ]
  }
};

export default wordBuilderCategories_part9;