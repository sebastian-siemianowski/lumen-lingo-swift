/**
 * GERMAN → SPANISH WORD BUILDER - PART 6
 * Categories: 23-27
 * 5 categories, 15 words each = 75 words
 */

import { Palette, Camera, Book, Laptop, Smartphone } from "lucide-react";

export const wordBuilderCategories_part6 = {
  art_painting: {
    name: "Kunst und Malerei",
    description: "Künstlerische Kreativität und Farben",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "arte", hint: "Kunst" },
      { word: "pintura", hint: "Malerei" },
      { word: "cuadro", hint: "Gemälde" },
      { word: "color", hint: "Farbe" },
      { word: "pincel", hint: "Pinsel" },
      { word: "lienzo", hint: "Leinwand" },
      { word: "paleta", hint: "Palette" },
      { word: "artista", hint: "Künstler" },
      { word: "pintor", hint: "Maler" },
      { word: "galería", hint: "Galerie" },
      { word: "museo", hint: "Museum" },
      { word: "exposición", hint: "Ausstellung" },
      { word: "escultura", hint: "Skulptur" },
      { word: "dibujo", hint: "Zeichnung" },
      { word: "boceto", hint: "Skizze" }
    ]
  },

  photography: {
    name: "Fotografie",
    description: "Kameras und Fotos machen",
    icon: Camera,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "cámara", hint: "Kamera" },
      { word: "foto", hint: "Foto" },
      { word: "imagen", hint: "Bild" },
      { word: "lente", hint: "Objektiv" },
      { word: "enfoque", hint: "Fokus" },
      { word: "flash", hint: "Blitz" },
      { word: "trípode", hint: "Stativ" },
      { word: "fotógrafo", hint: "Fotograf" },
      { word: "retrato", hint: "Porträt" },
      { word: "paisaje", hint: "Landschaft" },
      { word: "exposición", hint: "Belichtung" },
      { word: "obturador", hint: "Verschluss" },
      { word: "álbum", hint: "Album" },
      { word: "filtro", hint: "Filter" },
      { word: "selfie", hint: "Selfie" }
    ]
  },

  literature: {
    name: "Literatur",
    description: "Bücher und Schreiben",
    icon: Book,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "libro", hint: "Buch" },
      { word: "novela", hint: "Roman" },
      { word: "poema", hint: "Gedicht" },
      { word: "cuento", hint: "Geschichte" },
      { word: "autor", hint: "Autor" },
      { word: "escritor", hint: "Schriftsteller" },
      { word: "poeta", hint: "Dichter" },
      { word: "capítulo", hint: "Kapitel" },
      { word: "página", hint: "Seite" },
      { word: "biblioteca", hint: "Bibliothek" },
      { word: "editorial", hint: "Verlag" },
      { word: "best seller", hint: "Bestseller" },
      { word: "trama", hint: "Handlung" },
      { word: "personaje", hint: "Charakter" },
      { word: "narrativa", hint: "Erzählung" }
    ]
  },

  computers: {
    name: "Computer",
    description: "Technologie und Computerausrüstung",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "computadora", hint: "Computer" },
      { word: "portátil", hint: "Laptop" },
      { word: "teclado", hint: "Tastatur" },
      { word: "ratón", hint: "Maus" },
      { word: "pantalla", hint: "Bildschirm" },
      { word: "monitor", hint: "Monitor" },
      { word: "impresora", hint: "Drucker" },
      { word: "software", hint: "Software" },
      { word: "hardware", hint: "Hardware" },
      { word: "procesador", hint: "Prozessor" },
      { word: "memoria", hint: "Speicher" },
      { word: "disco duro", hint: "Festplatte" },
      { word: "archivo", hint: "Datei" },
      { word: "carpeta", hint: "Ordner" },
      { word: "programa", hint: "Programm" }
    ]
  },

  mobile_devices: {
    name: "Mobile Geräte",
    description: "Smartphones und Tablets",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "teléfono", hint: "Telefon" },
      { word: "teléfono inteligente", hint: "Smartphone" },
      { word: "tableta", hint: "Tablet" },
      { word: "pantalla", hint: "Bildschirm" },
      { word: "batería", hint: "Batterie" },
      { word: "cargador", hint: "Ladegerät" },
      { word: "auriculares", hint: "Kopfhörer" },
      { word: "cámara", hint: "Kamera" },
      { word: "aplicación", hint: "App" },
      { word: "mensaje", hint: "Nachricht" },
      { word: "llamada", hint: "Anruf" },
      { word: "bluetooth", hint: "Bluetooth" },
      { word: "pantalla táctil", hint: "Touchscreen" },
      { word: "tono de llamada", hint: "Klingelton" },
      { word: "notificación", hint: "Benachrichtigung" }
    ]
  }
};

export default wordBuilderCategories_part6;