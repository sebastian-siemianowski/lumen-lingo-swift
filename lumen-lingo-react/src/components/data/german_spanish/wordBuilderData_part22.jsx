/**
 * GERMAN → SPANISH WORD BUILDER - PART 22
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
      { word: "cine", hint: "Kino" },
      { word: "película", hint: "Film" },
      { word: "pantalla", hint: "Leinwand" },
      { word: "sala", hint: "Saal" },
      { word: "butaca", hint: "Sessel" },
      { word: "entrada", hint: "Eintrittskarte" },
      { word: "taquilla", hint: "Kasse" },
      { word: "palomitas", hint: "Popcorn" },
      { word: "refresco", hint: "Erfrischungsgetränk" },
      { word: "tráiler", hint: "Trailer" },
      { word: "estreno", hint: "Premiere" },
      { word: "función", hint: "Vorstellung" },
      { word: "sesión", hint: "Vorführung" },
      { word: "subtítulos", hint: "Untertitel" },
      { word: "doblaje", hint: "Synchronisation" }
    ]
  },

  theater: {
    name: "Theater",
    description: "Bühnenkunst und Schauspiel",
    icon: Drama,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "teatro", hint: "Theater" },
      { word: "obra", hint: "Stück" },
      { word: "drama", hint: "Drama" },
      { word: "comedia", hint: "Komödie" },
      { word: "tragedia", hint: "Tragödie" },
      { word: "actor", hint: "Schauspieler" },
      { word: "actriz", hint: "Schauspielerin" },
      { word: "director", hint: "Regisseur" },
      { word: "escenario", hint: "Bühne" },
      { word: "telón", hint: "Vorhang" },
      { word: "acto", hint: "Akt" },
      { word: "escena", hint: "Szene" },
      { word: "ensayo", hint: "Probe" },
      { word: "vestuario", hint: "Kostüm" },
      { word: "maquillaje", hint: "Maske" }
    ]
  },

  filmmaking: {
    name: "Filmproduktion",
    description: "Filmherstellung und Drehtechnik",
    icon: Clapperboard,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "producción", hint: "Produktion" },
      { word: "rodaje", hint: "Dreharbeiten" },
      { word: "director", hint: "Regisseur" },
      { word: "productor", hint: "Produzent" },
      { word: "guion", hint: "Drehbuch" },
      { word: "guionista", hint: "Drehbuchautor" },
      { word: "cámara", hint: "Kamera" },
      { word: "camarógrafo", hint: "Kameramann" },
      { word: "iluminación", hint: "Beleuchtung" },
      { word: "sonido", hint: "Ton" },
      { word: "edición", hint: "Schnitt" },
      { word: "efectos especiales", hint: "Spezialeffekte" },
      { word: "escenografía", hint: "Bühnenbild" },
      { word: "casting", hint: "Besetzung" },
      { word: "claqueta", hint: "Filmklappe" }
    ]
  },

  streaming: {
    name: "Streaming",
    description: "Online-Videodienste und Streaming",
    icon: Video,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "transmisión", hint: "Streaming" },
      { word: "plataforma", hint: "Plattform" },
      { word: "serie", hint: "Serie" },
      { word: "episodio", hint: "Episode" },
      { word: "temporada", hint: "Staffel" },
      { word: "capítulo", hint: "Folge" },
      { word: "maratón", hint: "Binge-Watching" },
      { word: "contenido", hint: "Inhalt" },
      { word: "suscripción", hint: "Abonnement" },
      { word: "catálogo", hint: "Katalog" },
      { word: "recomendación", hint: "Empfehlung" },
      { word: "reproducir", hint: "abspielen" },
      { word: "pausar", hint: "pausieren" },
      { word: "continuar", hint: "fortsetzen" },
      { word: "descargar", hint: "herunterladen" }
    ]
  }
};

export default wordBuilderCategories_part22;