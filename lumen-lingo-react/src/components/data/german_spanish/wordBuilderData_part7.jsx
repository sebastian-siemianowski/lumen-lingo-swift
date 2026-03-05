/**
 * GERMAN → SPANISH WORD BUILDER - PART 7
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
      { word: "sitio web", hint: "Webseite" },
      { word: "navegador", hint: "Browser" },
      { word: "correo electrónico", hint: "E-Mail" },
      { word: "descargar", hint: "herunterladen" },
      { word: "subir", hint: "hochladen" },
      { word: "wifi", hint: "WLAN" },
      { word: "red", hint: "Netzwerk" },
      { word: "enrutador", hint: "Router" },
      { word: "contraseña", hint: "Passwort" },
      { word: "nombre de usuario", hint: "Benutzername" },
      { word: "inicio de sesión", hint: "Anmeldung" },
      { word: "enlace", hint: "Link" },
      { word: "buscador", hint: "Suchmaschine" },
      { word: "en línea", hint: "online" }
    ]
  },

  data_storage: {
    name: "Datenspeicherung",
    description: "Speicher und Informationsgeräte",
    icon: Database,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "datos", hint: "Daten" },
      { word: "almacenamiento", hint: "Speicherung" },
      { word: "disco duro", hint: "Festplatte" },
      { word: "memoria USB", hint: "USB-Stick" },
      { word: "nube", hint: "Cloud" },
      { word: "copia de seguridad", hint: "Backup" },
      { word: "archivo", hint: "Archiv" },
      { word: "compresión", hint: "Kompression" },
      { word: "encriptación", hint: "Verschlüsselung" },
      { word: "capacidad", hint: "Kapazität" },
      { word: "gigabyte", hint: "Gigabyte" },
      { word: "terabyte", hint: "Terabyte" },
      { word: "servidor", hint: "Server" },
      { word: "base de datos", hint: "Datenbank" },
      { word: "recuperación", hint: "Wiederherstellung" }
    ]
  },

  sports_fitness: {
    name: "Sport und Fitness",
    description: "Körperliche Aktivität und Übungen",
    icon: Dumbbell,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "deporte", hint: "Sport" },
      { word: "fútbol", hint: "Fußball" },
      { word: "baloncesto", hint: "Basketball" },
      { word: "tenis", hint: "Tennis" },
      { word: "natación", hint: "Schwimmen" },
      { word: "correr", hint: "Laufen" },
      { word: "entrenamiento", hint: "Training" },
      { word: "fitness", hint: "Fitness" },
      { word: "gimnasia", hint: "Gymnastik" },
      { word: "yoga", hint: "Yoga" },
      { word: "estadio", hint: "Stadion" },
      { word: "equipo", hint: "Mannschaft" },
      { word: "jugador", hint: "Spieler" },
      { word: "competición", hint: "Wettbewerb" },
      { word: "medalla", hint: "Medaille" }
    ]
  },

  entertainment: {
    name: "Unterhaltung",
    description: "Filme und Unterhaltungsprogramme",
    icon: Tv,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "televisión", hint: "Fernsehen" },
      { word: "película", hint: "Film" },
      { word: "serie", hint: "Serie" },
      { word: "programa", hint: "Programm" },
      { word: "actor", hint: "Schauspieler" },
      { word: "director", hint: "Regisseur" },
      { word: "cine", hint: "Kino" },
      { word: "teatro", hint: "Theater" },
      { word: "comedia", hint: "Komödie" },
      { word: "drama", hint: "Drama" },
      { word: "documental", hint: "Dokumentation" },
      { word: "dibujo animado", hint: "Zeichentrickfilm" },
      { word: "noticias", hint: "Nachrichten" },
      { word: "show", hint: "Show" },
      { word: "entretenimiento", hint: "Unterhaltung" }
    ]
  }
};

export default wordBuilderCategories_part7;