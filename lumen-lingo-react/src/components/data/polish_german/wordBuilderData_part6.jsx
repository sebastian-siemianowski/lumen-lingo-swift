/**
 * POLISH → GERMAN WORD BUILDER - PART 6
 * Categories: 25-28
 * 4 categories, 15 words each = 60 words
 */

import { Music, Palette, Camera, Book } from "lucide-react";

export const wordBuilderCategories_part6 = {
  music: {
    name: "Muzyka",
    description: "Instrumenty i gatunki muzyczne",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "Gitarre", hint: "gitara" },
      { word: "Klavier", hint: "pianino" },
      { word: "Geige", hint: "skrzypce" },
      { word: "Schlagzeug", hint: "perkusja" },
      { word: "Flöte", hint: "flet" },
      { word: "Trompete", hint: "trąbka" },
      { word: "Saxophon", hint: "saksofon" },
      { word: "Musik", hint: "muzyka" },
      { word: "Lied", hint: "piosenka" },
      { word: "Melodie", hint: "melodia" },
      { word: "Rhythmus", hint: "rytm" },
      { word: "Konzert", hint: "koncert" },
      { word: "Orchester", hint: "orkiestra" },
      { word: "Band", hint: "zespół" },
      { word: "Sänger", hint: "piosenkarz" }
    ]
  },

  art_painting: {
    name: "Sztuka i malarstwo",
    description: "Twórczość artystyczna i kolory",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "Kunst", hint: "sztuka" },
      { word: "Bild", hint: "obraz" },
      { word: "Gemälde", hint: "malowidło" },
      { word: "Farbe", hint: "kolor" },
      { word: "Pinsel", hint: "pędzel" },
      { word: "Leinwand", hint: "płótno" },
      { word: "Palette", hint: "paleta" },
      { word: "Künstler", hint: "artysta" },
      { word: "Maler", hint: "malarz" },
      { word: "Galerie", hint: "galeria" },
      { word: "Museum", hint: "muzeum" },
      { word: "Ausstellung", hint: "wystawa" },
      { word: "Skulptur", hint: "rzeźba" },
      { word: "Zeichnung", hint: "rysunek" },
      { word: "Skizze", hint: "szkic" }
    ]
  },

  photography: {
    name: "Fotografia",
    description: "Aparaty i robienie zdjęć",
    icon: Camera,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "Kamera", hint: "aparat" },
      { word: "Foto", hint: "zdjęcie" },
      { word: "Bild", hint: "obraz" },
      { word: "Linse", hint: "obiektyw" },
      { word: "Fokus", hint: "ostrość" },
      { word: "Blitz", hint: "flesz" },
      { word: "Stativ", hint: "statyw" },
      { word: "Fotograf", hint: "fotograf" },
      { word: "Porträt", hint: "portret" },
      { word: "Landschaft", hint: "pejzaż" },
      { word: "Belichtung", hint: "ekspozycja" },
      { word: "Verschluss", hint: "migawka" },
      { word: "Album", hint: "album" },
      { word: "Filter", hint: "filtr" },
      { word: "Selbstauslöser", hint: "samowyzwalacz" }
    ]
  },

  literature: {
    name: "Literatura",
    description: "Książki i pisanie",
    icon: Book,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "Buch", hint: "książka" },
      { word: "Roman", hint: "powieść" },
      { word: "Gedicht", hint: "wiersz" },
      { word: "Geschichte", hint: "opowiadanie" },
      { word: "Autor", hint: "autor" },
      { word: "Schriftsteller", hint: "pisarz" },
      { word: "Dichter", hint: "poeta" },
      { word: "Kapitel", hint: "rozdział" },
      { word: "Seite", hint: "strona" },
      { word: "Bibliothek", hint: "biblioteka" },
      { word: "Verlag", hint: "wydawnictwo" },
      { word: "Bestseller", hint: "bestseller" },
      { word: "Handlung", hint: "fabuła" },
      { word: "Charakter", hint: "postać" },
      { word: "Erzählung", hint: "narracja" }
    ]
  }
};

export default wordBuilderCategories_part6;