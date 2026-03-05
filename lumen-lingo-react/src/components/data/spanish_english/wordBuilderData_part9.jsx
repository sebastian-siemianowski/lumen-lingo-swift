/**
 * SPANISH → ENGLISH WORD BUILDER - PART 9
 * Categories: 36-39
 * 4 categories, 15 words each = 60 words
 */

import { Tv, Headphones, Gamepad2, Clock } from "lucide-react";

export const wordBuilderCategories_part9 = {
  entertainment: {
    name: "Entretenimiento",
    description: "Películas y programas de entretenimiento",
    icon: Tv,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "television", hint: "televisión" },
      { word: "movie", hint: "película" },
      { word: "series", hint: "serie" },
      { word: "program", hint: "programa" },
      { word: "actor", hint: "actor" },
      { word: "director", hint: "director" },
      { word: "cinema", hint: "cine" },
      { word: "theater", hint: "teatro" },
      { word: "comedy", hint: "comedia" },
      { word: "drama", hint: "drama" },
      { word: "documentary", hint: "documental" },
      { word: "cartoon", hint: "dibujo animado" },
      { word: "news", hint: "noticias" },
      { word: "show", hint: "show" },
      { word: "entertainment", hint: "entretenimiento" }
    ]
  },

  audio_music: {
    name: "Audio y música",
    description: "Escuchar y grabar sonido",
    icon: Headphones,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "headphones", hint: "auriculares" },
      { word: "speaker", hint: "altavoz" },
      { word: "microphone", hint: "micrófono" },
      { word: "radio", hint: "radio" },
      { word: "recording", hint: "grabación" },
      { word: "playback", hint: "reproducción" },
      { word: "volume", hint: "volumen" },
      { word: "bass", hint: "graves" },
      { word: "treble", hint: "agudos" },
      { word: "sound", hint: "sonido" },
      { word: "tone", hint: "tono" },
      { word: "acoustics", hint: "acústica" },
      { word: "stereo", hint: "estéreo" },
      { word: "amplifier", hint: "amplificador" },
      { word: "equalizer", hint: "ecualizador" }
    ]
  },

  gaming: {
    name: "Videojuegos",
    description: "Gaming y entretenimiento electrónico",
    icon: Gamepad2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "game", hint: "juego" },
      { word: "video game", hint: "videojuego" },
      { word: "player", hint: "jugador" },
      { word: "controller", hint: "control" },
      { word: "console", hint: "consola" },
      { word: "level", hint: "nivel" },
      { word: "mission", hint: "misión" },
      { word: "character", hint: "personaje" },
      { word: "graphics", hint: "gráficos" },
      { word: "screen", hint: "pantalla" },
      { word: "keyboard", hint: "teclado" },
      { word: "joystick", hint: "joystick" },
      { word: "score", hint: "puntuación" },
      { word: "ranking", hint: "clasificación" },
      { word: "strategy", hint: "estrategia" }
    ]
  },

  time: {
    name: "Tiempo",
    description: "Expresiones de tiempo y hora",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "time", hint: "tiempo" },
      { word: "clock", hint: "reloj" },
      { word: "hour", hint: "hora" },
      { word: "minute", hint: "minuto" },
      { word: "second", hint: "segundo" },
      { word: "morning", hint: "mañana" },
      { word: "afternoon", hint: "tarde" },
      { word: "evening", hint: "noche" },
      { word: "night", hint: "noche" },
      { word: "midnight", hint: "medianoche" },
      { word: "today", hint: "hoy" },
      { word: "yesterday", hint: "ayer" },
      { word: "tomorrow", hint: "mañana" },
      { word: "week", hint: "semana" },
      { word: "month", hint: "mes" }
    ]
  }
};

export default wordBuilderCategories_part9;