/**
 * POLISH → ENGLISH WORD BUILDER - PART 14
 * Categories: 66-70
 * 5 categories, 15 words each = 75 words
 */

import { Music, Radio, Video, Mic } from "lucide-react";

export const wordBuilderCategories_part14 = {
  musical_instruments: {
    name: "Instrumenty muzyczne",
    description: "Instrumenty i dźwięki muzyki",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "guitar", hint: "gitara" },
      { word: "piano", hint: "pianino" },
      { word: "violin", hint: "skrzypce" },
      { word: "drums", hint: "perkusja" },
      { word: "flute", hint: "flet" },
      { word: "trumpet", hint: "trąbka" },
      { word: "saxophone", hint: "saksofon" },
      { word: "clarinet", hint: "klarnet" },
      { word: "trombone", hint: "puzon" },
      { word: "cello", hint: "wiolonczela" },
      { word: "harp", hint: "harfa" },
      { word: "accordion", hint: "akordeon" },
      { word: "harmonica", hint: "harmonijka" },
      { word: "banjo", hint: "banjo" },
      { word: "ukulele", hint: "ukulele" }
    ]
  },

  music_genres: {
    name: "Gatunki muzyczne",
    description: "Style i rodzaje muzyki",
    icon: Radio,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "rock", hint: "rock" },
      { word: "pop", hint: "pop" },
      { word: "jazz", hint: "jazz" },
      { word: "classical", hint: "klasyczna" },
      { word: "blues", hint: "blues" },
      { word: "country", hint: "country" },
      { word: "folk", hint: "folkowa" },
      { word: "reggae", hint: "reggae" },
      { word: "hip-hop", hint: "hip-hop" },
      { word: "electronic", hint: "elektroniczna" },
      { word: "metal", hint: "metal" },
      { word: "punk", hint: "punk" },
      { word: "indie", hint: "indie" },
      { word: "soul", hint: "soul" },
      { word: "gospel", hint: "gospel" }
    ]
  },

  video_film: {
    name: "Film i wideo",
    description: "Produkcja filmowa i gatunki",
    icon: Video,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "movie", hint: "film" },
      { word: "scene", hint: "scena" },
      { word: "screenplay", hint: "scenariusz" },
      { word: "director", hint: "reżyser" },
      { word: "producer", hint: "producent" },
      { word: "cinematographer", hint: "operator kamery" },
      { word: "soundtrack", hint: "ścieżka dźwiękowa" },
      { word: "subtitle", hint: "napisy" },
      { word: "trailer", hint: "zwiastun" },
      { word: "premiere", hint: "premiera" },
      { word: "sequel", hint: "sequel" },
      { word: "remake", hint: "remake" },
      { word: "blockbuster", hint: "hit kinowy" },
      { word: "documentary", hint: "film dokumentalny" },
      { word: "animation", hint: "animacja" }
    ]
  },

  recording_audio: {
    name: "Nagrywanie dźwięku",
    description: "Sprzęt i proces nagrywania",
    icon: Mic,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "microphone", hint: "mikrofon" },
      { word: "speaker", hint: "głośnik" },
      { word: "amplifier", hint: "wzmacniacz" },
      { word: "recording", hint: "nagranie" },
      { word: "studio", hint: "studio" },
      { word: "mixer", hint: "mikser" },
      { word: "equalizer", hint: "equalizer" },
      { word: "volume", hint: "głośność" },
      { word: "frequency", hint: "częstotliwość" },
      { word: "acoustics", hint: "akustyka" },
      { word: "soundproof", hint: "dźwiękoszczelny" },
      { word: "playback", hint: "odtwarzanie" },
      { word: "track", hint: "ścieżka" },
      { word: "mixing", hint: "miksowanie" },
      { word: "mastering", hint: "mastering" }
    ]
  }
};

export default wordBuilderCategories_part14;