/**
 * GERMAN → ENGLISH WORD BUILDER - PART 6
 * Categories: 24-27
 * 4 categories, 15 words each = 60 words
 */

import { Camera, Book, Laptop, Smartphone } from "lucide-react";

export const wordBuilderCategories_part6 = {
  photography: {
    name: "Fotografie",
    description: "Kameras und Fotos machen",
    icon: Camera,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "camera", hint: "Kamera" },
      { word: "photo", hint: "Foto" },
      { word: "image", hint: "Bild" },
      { word: "lens", hint: "Objektiv" },
      { word: "focus", hint: "Fokus" },
      { word: "flash", hint: "Blitz" },
      { word: "tripod", hint: "Stativ" },
      { word: "photographer", hint: "Fotograf" },
      { word: "portrait", hint: "Porträt" },
      { word: "landscape", hint: "Landschaft" },
      { word: "exposure", hint: "Belichtung" },
      { word: "shutter", hint: "Verschluss" },
      { word: "album", hint: "Album" },
      { word: "filter", hint: "Filter" },
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
      { word: "book", hint: "Buch" },
      { word: "novel", hint: "Roman" },
      { word: "poem", hint: "Gedicht" },
      { word: "story", hint: "Geschichte" },
      { word: "author", hint: "Autor" },
      { word: "writer", hint: "Schriftsteller" },
      { word: "poet", hint: "Dichter" },
      { word: "chapter", hint: "Kapitel" },
      { word: "page", hint: "Seite" },
      { word: "library", hint: "Bibliothek" },
      { word: "publisher", hint: "Verlag" },
      { word: "bestseller", hint: "Bestseller" },
      { word: "plot", hint: "Handlung" },
      { word: "character", hint: "Charakter" },
      { word: "narrative", hint: "Erzählung" }
    ]
  },

  computers: {
    name: "Computer",
    description: "Technologie und Computerausrüstung",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "computer", hint: "Computer" },
      { word: "laptop", hint: "Laptop" },
      { word: "keyboard", hint: "Tastatur" },
      { word: "mouse", hint: "Maus" },
      { word: "screen", hint: "Bildschirm" },
      { word: "monitor", hint: "Monitor" },
      { word: "printer", hint: "Drucker" },
      { word: "software", hint: "Software" },
      { word: "hardware", hint: "Hardware" },
      { word: "processor", hint: "Prozessor" },
      { word: "memory", hint: "Speicher" },
      { word: "hard drive", hint: "Festplatte" },
      { word: "file", hint: "Datei" },
      { word: "folder", hint: "Ordner" },
      { word: "program", hint: "Programm" }
    ]
  },

  mobile_devices: {
    name: "Mobile Geräte",
    description: "Smartphones und Tablets",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "phone", hint: "Telefon" },
      { word: "smartphone", hint: "Smartphone" },
      { word: "tablet", hint: "Tablet" },
      { word: "screen", hint: "Bildschirm" },
      { word: "battery", hint: "Batterie" },
      { word: "charger", hint: "Ladegerät" },
      { word: "headphones", hint: "Kopfhörer" },
      { word: "camera", hint: "Kamera" },
      { word: "app", hint: "App" },
      { word: "message", hint: "Nachricht" },
      { word: "call", hint: "Anruf" },
      { word: "bluetooth", hint: "Bluetooth" },
      { word: "touchscreen", hint: "Touchscreen" },
      { word: "ringtone", hint: "Klingelton" },
      { word: "notification", hint: "Benachrichtigung" }
    ]
  }
};

export default wordBuilderCategories_part6;