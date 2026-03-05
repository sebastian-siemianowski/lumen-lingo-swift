/**
 * GERMAN → SPANISH WORD BUILDER - PART 8
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
      { word: "auriculares", hint: "Kopfhörer" },
      { word: "altavoz", hint: "Lautsprecher" },
      { word: "micrófono", hint: "Mikrofon" },
      { word: "radio", hint: "Radio" },
      { word: "grabación", hint: "Aufnahme" },
      { word: "reproducción", hint: "Wiedergabe" },
      { word: "volumen", hint: "Lautstärke" },
      { word: "graves", hint: "Bass" },
      { word: "agudos", hint: "Höhen" },
      { word: "sonido", hint: "Klang" },
      { word: "tono", hint: "Ton" },
      { word: "acústica", hint: "Akustik" },
      { word: "estéreo", hint: "Stereo" },
      { word: "amplificador", hint: "Verstärker" },
      { word: "ecualizador", hint: "Equalizer" }
    ]
  },

  gaming: {
    name: "Videospiele",
    description: "Gaming und elektronische Unterhaltung",
    icon: Gamepad2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "juego", hint: "Spiel" },
      { word: "videojuego", hint: "Videospiel" },
      { word: "jugador", hint: "Spieler" },
      { word: "control", hint: "Controller" },
      { word: "consola", hint: "Konsole" },
      { word: "nivel", hint: "Level" },
      { word: "misión", hint: "Mission" },
      { word: "personaje", hint: "Charakter" },
      { word: "gráficos", hint: "Grafik" },
      { word: "pantalla", hint: "Bildschirm" },
      { word: "teclado", hint: "Tastatur" },
      { word: "joystick", hint: "Joystick" },
      { word: "puntuación", hint: "Punktzahl" },
      { word: "clasificación", hint: "Rangliste" },
      { word: "estrategia", hint: "Strategie" }
    ]
  },

  time: {
    name: "Zeit",
    description: "Zeitausdrücke und Stunde",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "tiempo", hint: "Zeit" },
      { word: "reloj", hint: "Uhr" },
      { word: "hora", hint: "Stunde" },
      { word: "minuto", hint: "Minute" },
      { word: "segundo", hint: "Sekunde" },
      { word: "mañana", hint: "Morgen" },
      { word: "tarde", hint: "Nachmittag" },
      { word: "noche", hint: "Abend" },
      { word: "medianoche", hint: "Mitternacht" },
      { word: "hoy", hint: "heute" },
      { word: "ayer", hint: "gestern" },
      { word: "mañana", hint: "morgen" },
      { word: "semana", hint: "Woche" },
      { word: "mes", hint: "Monat" },
      { word: "año", hint: "Jahr" }
    ]
  },

  calendar_dates: {
    name: "Kalender und Daten",
    description: "Wochentage und Monate",
    icon: CalendarDays,
    color: "from-purple-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { word: "lunes", hint: "Montag" },
      { word: "martes", hint: "Dienstag" },
      { word: "miércoles", hint: "Mittwoch" },
      { word: "jueves", hint: "Donnerstag" },
      { word: "viernes", hint: "Freitag" },
      { word: "sábado", hint: "Samstag" },
      { word: "domingo", hint: "Sonntag" },
      { word: "semana", hint: "Woche" },
      { word: "mes", hint: "Monat" },
      { word: "año", hint: "Jahr" },
      { word: "fecha", hint: "Datum" },
      { word: "calendario", hint: "Kalender" },
      { word: "festivo", hint: "Feiertag" },
      { word: "fin de semana", hint: "Wochenende" },
      { word: "día laboral", hint: "Werktag" }
    ]
  }
};

export default wordBuilderCategories_part8;