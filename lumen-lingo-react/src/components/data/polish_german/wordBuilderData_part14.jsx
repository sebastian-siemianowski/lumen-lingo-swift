/**
 * POLISH → GERMAN WORD BUILDER - PART 14
 * Categories: 57-60
 * 4 categories, 15 words each = 60 words
 */

import { Paintbrush, Palette, Drama, Film } from "lucide-react";

export const wordBuilderCategories_part14 = {
  colors: {
    name: "Kolory",
    description: "Podstawowe i zaawansowane kolory",
    icon: Paintbrush,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "rot", hint: "czerwony" },
      { word: "blau", hint: "niebieski" },
      { word: "gelb", hint: "żółty" },
      { word: "grün", hint: "zielony" },
      { word: "orange", hint: "pomarańczowy" },
      { word: "lila", hint: "fioletowy" },
      { word: "rosa", hint: "różowy" },
      { word: "braun", hint: "brązowy" },
      { word: "schwarz", hint: "czarny" },
      { word: "weiß", hint: "biały" },
      { word: "grau", hint: "szary" },
      { word: "silber", hint: "srebrny" },
      { word: "golden", hint: "złoty" },
      { word: "türkis", hint: "turkusowy" },
      { word: "beige", hint: "beżowy" }
    ]
  },

  art_techniques: {
    name: "Techniki artystyczne",
    description: "Metody i style twórczości",
    icon: Palette,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "Malerei", hint: "malarstwo" },
      { word: "Zeichnung", hint: "rysunek" },
      { word: "Skizze", hint: "szkic" },
      { word: "Aquarell", hint: "akwarela" },
      { word: "Ölgemälde", hint: "obraz olejny" },
      { word: "Acryl", hint: "akryl" },
      { word: "Pastell", hint: "pastel" },
      { word: "Bleistift", hint: "ołówek" },
      { word: "Kohle", hint: "węgiel" },
      { word: "Tusche", hint: "tusz" },
      { word: "Landschaft", hint: "pejzaż" },
      { word: "Porträt", hint: "portret" },
      { word: "Stillleben", hint: "martwa natura" },
      { word: "Abstrakt", hint: "abstrakcja" },
      { word: "Impressionismus", hint: "impresjonizm" }
    ]
  },

  theater: {
    name: "Teatr",
    description: "Scena i sztuki teatralne",
    icon: Drama,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "Theater", hint: "teatr" },
      { word: "Bühne", hint: "scena" },
      { word: "Vorhang", hint: "kurtyna" },
      { word: "Schauspieler", hint: "aktor" },
      { word: "Schauspielerin", hint: "aktorka" },
      { word: "Regisseur", hint: "reżyser" },
      { word: "Stück", hint: "sztuka" },
      { word: "Probe", hint: "próba" },
      { word: "Aufführung", hint: "przedstawienie" },
      { word: "Publikum", hint: "publiczność" },
      { word: "Applaus", hint: "oklaski" },
      { word: "Monolog", hint: "monolog" },
      { word: "Dialog", hint: "dialog" },
      { word: "Kostüm", hint: "kostium" },
      { word: "Maske", hint: "maska" }
    ]
  },

  cinema: {
    name: "Kino",
    description: "Filmy i produkcja filmowa",
    icon: Film,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Film", hint: "film" },
      { word: "Kino", hint: "kino" },
      { word: "Szene", hint: "scena" },
      { word: "Drehbuch", hint: "scenariusz" },
      { word: "Regisseur", hint: "reżyser" },
      { word: "Kameramann", hint: "operator kamery" },
      { word: "Schauspieler", hint: "aktor" },
      { word: "Untertitel", hint: "napisy" },
      { word: "Trailer", hint: "zwiastun" },
      { word: "Premiere", hint: "premiera" },
      { word: "Fortsetzung", hint: "sequel" },
      { word: "Neuverfilmung", hint: "remake" },
      { word: "Blockbuster", hint: "hit kinowy" },
      { word: "Dokumentarfilm", hint: "dokument" },
      { word: "Animation", hint: "animacja" }
    ]
  }
};

export default wordBuilderCategories_part14;