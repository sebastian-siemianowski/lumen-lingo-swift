/**
 * POLISH → GERMAN WORD BUILDER - PART 7
 * Categories: 29-32
 * 4 categories, 15 words each = 60 words
 */

import { Laptop, Smartphone, Wifi, Database } from "lucide-react";

export const wordBuilderCategories_part7 = {
  computers: {
    name: "Komputery",
    description: "Technologia i sprzęt komputerowy",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Computer", hint: "komputer" },
      { word: "Laptop", hint: "laptop" },
      { word: "Tastatur", hint: "klawiatura" },
      { word: "Maus", hint: "myszka" },
      { word: "Bildschirm", hint: "ekran" },
      { word: "Monitor", hint: "monitor" },
      { word: "Drucker", hint: "drukarka" },
      { word: "Software", hint: "oprogramowanie" },
      { word: "Hardware", hint: "sprzęt" },
      { word: "Prozessor", hint: "procesor" },
      { word: "Speicher", hint: "pamięć" },
      { word: "Festplatte", hint: "dysk twardy" },
      { word: "Datei", hint: "plik" },
      { word: "Ordner", hint: "folder" },
      { word: "Programm", hint: "program" }
    ]
  },

  mobile_devices: {
    name: "Urządzenia mobilne",
    description: "Smartfony i tablety",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Handy", hint: "telefon komórkowy" },
      { word: "Smartphone", hint: "smartfon" },
      { word: "Tablet", hint: "tablet" },
      { word: "Bildschirm", hint: "ekran" },
      { word: "Akku", hint: "bateria" },
      { word: "Ladegerät", hint: "ładowarka" },
      { word: "Kopfhörer", hint: "słuchawki" },
      { word: "Kamera", hint: "kamera" },
      { word: "App", hint: "aplikacja" },
      { word: "SMS", hint: "SMS" },
      { word: "Anruf", hint: "połączenie" },
      { word: "Nachricht", hint: "wiadomość" },
      { word: "Bluetooth", hint: "bluetooth" },
      { word: "Touchscreen", hint: "ekran dotykowy" },
      { word: "Klingelton", hint: "dzwonek" }
    ]
  },

  internet: {
    name: "Internet i sieć",
    description: "Świat online i połączenia",
    icon: Wifi,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "Internet", hint: "internet" },
      { word: "Website", hint: "strona internetowa" },
      { word: "Browser", hint: "przeglądarka" },
      { word: "E-Mail", hint: "e-mail" },
      { word: "Download", hint: "pobieranie" },
      { word: "Upload", hint: "wysyłanie" },
      { word: "WLAN", hint: "WiFi" },
      { word: "Netzwerk", hint: "sieć" },
      { word: "Router", hint: "router" },
      { word: "Passwort", hint: "hasło" },
      { word: "Benutzername", hint: "nazwa użytkownika" },
      { word: "Login", hint: "logowanie" },
      { word: "Link", hint: "link" },
      { word: "Suchmaschine", hint: "wyszukiwarka" },
      { word: "Online", hint: "online" }
    ]
  },

  data_storage: {
    name: "Przechowywanie danych",
    description: "Pamięć i nośniki informacji",
    icon: Database,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "Daten", hint: "dane" },
      { word: "Speicher", hint: "pamięć" },
      { word: "Festplatte", hint: "dysk twardy" },
      { word: "USB-Stick", hint: "pendrive" },
      { word: "Cloud", hint: "chmura" },
      { word: "Backup", hint: "kopia zapasowa" },
      { word: "Archiv", hint: "archiwum" },
      { word: "Kompression", hint: "kompresja" },
      { word: "Verschlüsselung", hint: "szyfrowanie" },
      { word: "Kapazität", hint: "pojemność" },
      { word: "Gigabyte", hint: "gigabajt" },
      { word: "Terabyte", hint: "terabajt" },
      { word: "Server", hint: "serwer" },
      { word: "Datenbank", hint: "baza danych" },
      { word: "Wiederherstellung", hint: "odzyskiwanie" }
    ]
  }
};

export default wordBuilderCategories_part7;