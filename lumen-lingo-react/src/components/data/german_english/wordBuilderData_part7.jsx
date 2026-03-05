/**
 * GERMAN → ENGLISH WORD BUILDER - PART 7
 * Categories: 28-31
 * 4 categories, 15 words each = 60 words
 */

import { Wifi, Database, Dumbbell, Tv } from "lucide-react";

export const wordBuilderCategories_part7 = {
  internet: {
    name: "Internet und Netzwerk",
    description: "Online-Welt und Verbindungen",
    icon: Wifi,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "internet", hint: "Internet" },
      { word: "website", hint: "Webseite" },
      { word: "browser", hint: "Browser" },
      { word: "email", hint: "E-Mail" },
      { word: "download", hint: "herunterladen" },
      { word: "upload", hint: "hochladen" },
      { word: "wifi", hint: "WLAN" },
      { word: "network", hint: "Netzwerk" },
      { word: "router", hint: "Router" },
      { word: "password", hint: "Passwort" },
      { word: "username", hint: "Benutzername" },
      { word: "login", hint: "Anmeldung" },
      { word: "link", hint: "Link" },
      { word: "search engine", hint: "Suchmaschine" },
      { word: "online", hint: "online" }
    ]
  },

  data_storage: {
    name: "Datenspeicherung",
    description: "Speicher und Informationsgeräte",
    icon: Database,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "data", hint: "Daten" },
      { word: "storage", hint: "Speicherung" },
      { word: "hard drive", hint: "Festplatte" },
      { word: "usb stick", hint: "USB-Stick" },
      { word: "cloud", hint: "Cloud" },
      { word: "backup", hint: "Backup" },
      { word: "archive", hint: "Archiv" },
      { word: "compression", hint: "Kompression" },
      { word: "encryption", hint: "Verschlüsselung" },
      { word: "capacity", hint: "Kapazität" },
      { word: "gigabyte", hint: "Gigabyte" },
      { word: "terabyte", hint: "Terabyte" },
      { word: "server", hint: "Server" },
      { word: "database", hint: "Datenbank" },
      { word: "recovery", hint: "Wiederherstellung" }
    ]
  },

  sports_fitness: {
    name: "Sport und Fitness",
    description: "Körperliche Aktivität und Übungen",
    icon: Dumbbell,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "sport", hint: "Sport" },
      { word: "football", hint: "Fußball" },
      { word: "basketball", hint: "Basketball" },
      { word: "tennis", hint: "Tennis" },
      { word: "swimming", hint: "Schwimmen" },
      { word: "running", hint: "Laufen" },
      { word: "training", hint: "Training" },
      { word: "fitness", hint: "Fitness" },
      { word: "gymnastics", hint: "Gymnastik" },
      { word: "yoga", hint: "Yoga" },
      { word: "stadium", hint: "Stadion" },
      { word: "team", hint: "Mannschaft" },
      { word: "player", hint: "Spieler" },
      { word: "competition", hint: "Wettbewerb" },
      { word: "medal", hint: "Medaille" }
    ]
  },

  entertainment: {
    name: "Unterhaltung",
    description: "Filme und Unterhaltungsprogramme",
    icon: Tv,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "television", hint: "Fernsehen" },
      { word: "movie", hint: "Film" },
      { word: "series", hint: "Serie" },
      { word: "program", hint: "Programm" },
      { word: "actor", hint: "Schauspieler" },
      { word: "director", hint: "Regisseur" },
      { word: "cinema", hint: "Kino" },
      { word: "theater", hint: "Theater" },
      { word: "comedy", hint: "Komödie" },
      { word: "drama", hint: "Drama" },
      { word: "documentary", hint: "Dokumentation" },
      { word: "cartoon", hint: "Zeichentrickfilm" },
      { word: "news", hint: "Nachrichten" },
      { word: "show", hint: "Show" },
      { word: "entertainment", hint: "Unterhaltung" }
    ]
  }
};

export default wordBuilderCategories_part7;