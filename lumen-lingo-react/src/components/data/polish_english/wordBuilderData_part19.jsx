/**
 * POLISH → ENGLISH WORD BUILDER - PART 19
 * Categories: 91-95
 * 5 categories, 15 words each = 75 words
 */

import { Network, Monitor, Database, Server, Shield } from "lucide-react";

export const wordBuilderCategories_part19 = {
  internet_web: {
    name: "Internet i sieć",
    description: "Technologia internetowa i sieciowa",
    icon: Network,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "website", hint: "strona internetowa" },
      { word: "browser", hint: "przeglądarka" },
      { word: "search engine", hint: "wyszukiwarka" },
      { word: "bookmark", hint: "zakładka" },
      { word: "download", hint: "pobieranie" },
      { word: "upload", hint: "wysyłanie" },
      { word: "streaming", hint: "streaming" },
      { word: "bandwidth", hint: "przepustowość" },
      { word: "connection", hint: "połączenie" },
      { word: "router", hint: "router" },
      { word: "modem", hint: "modem" },
      { word: "WiFi", hint: "WiFi" },
      { word: "broadband", hint: "szerokopasmowy" },
      { word: "firewall", hint: "zapora sieciowa" },
      { word: "network", hint: "sieć" }
    ]
  },

  computer_software: {
    name: "Oprogramowanie komputerowe",
    description: "Programy i aplikacje komputerowe",
    icon: Monitor,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    words: [
      { word: "application", hint: "aplikacja" },
      { word: "program", hint: "program" },
      { word: "operating system", hint: "system operacyjny" },
      { word: "interface", hint: "interfejs" },
      { word: "menu", hint: "menu" },
      { word: "toolbar", hint: "pasek narzędzi" },
      { word: "icon", hint: "ikona" },
      { word: "window", hint: "okno" },
      { word: "folder", hint: "folder" },
      { word: "file", hint: "plik" },
      { word: "shortcut", hint: "skrót" },
      { word: "settings", hint: "ustawienia" },
      { word: "update", hint: "aktualizacja" },
      { word: "install", hint: "instalacja" },
      { word: "uninstall", hint: "deinstalacja" }
    ]
  },

  data_storage: {
    name: "Przechowywanie danych",
    description: "Pamięć i nośniki danych",
    icon: Database,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "hard drive", hint: "dysk twardy" },
      { word: "flash drive", hint: "pendrive" },
      { word: "memory card", hint: "karta pamięci" },
      { word: "cloud storage", hint: "chmura" },
      { word: "backup", hint: "kopia zapasowa" },
      { word: "recovery", hint: "odzyskiwanie" },
      { word: "archive", hint: "archiwum" },
      { word: "compression", hint: "kompresja" },
      { word: "encryption", hint: "szyfrowanie" },
      { word: "capacity", hint: "pojemność" },
      { word: "gigabyte", hint: "gigabajt" },
      { word: "terabyte", hint: "terabajt" },
      { word: "partition", hint: "partycja" },
      { word: "formatting", hint: "formatowanie" },
      { word: "defragmentation", hint: "defragmentacja" }
    ]
  },

  servers_hosting: {
    name: "Serwery i hosting",
    description: "Infrastruktura serwerowa i hosting",
    icon: Server,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "server", hint: "serwer" },
      { word: "hosting", hint: "hosting" },
      { word: "domain", hint: "domena" },
      { word: "uptime", hint: "czas działania" },
      { word: "downtime", hint: "czas przestoju" },
      { word: "bandwidth", hint: "przepustowość" },
      { word: "traffic", hint: "ruch" },
      { word: "load balancing", hint: "równoważenie obciążenia" },
      { word: "cluster", hint: "klaster" },
      { word: "virtualization", hint: "wirtualizacja" },
      { word: "cloud computing", hint: "przetwarzanie w chmurze" },
      { word: "scalability", hint: "skalowalność" },
      { word: "redundancy", hint: "redundancja" },
      { word: "migration", hint: "migracja" },
      { word: "deployment", hint: "wdrożenie" }
    ]
  },

  cybersecurity: {
    name: "Cyberbezpieczeństwo",
    description: "Ochrona danych i bezpieczeństwo",
    icon: Shield,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "password", hint: "hasło" },
      { word: "encryption", hint: "szyfrowanie" },
      { word: "firewall", hint: "zapora ogniowa" },
      { word: "antivirus", hint: "antywirus" },
      { word: "malware", hint: "złośliwe oprogramowanie" },
      { word: "phishing", hint: "wyłudzanie" },
      { word: "hacker", hint: "haker" },
      { word: "breach", hint: "naruszenie" },
      { word: "vulnerability", hint: "podatność" },
      { word: "authentication", hint: "uwierzytelnianie" },
      { word: "authorization", hint: "autoryzacja" },
      { word: "privacy", hint: "prywatność" },
      { word: "vpn", hint: "VPN" },
      { word: "two-factor", hint: "dwuskładnikowy" },
      { word: "biometric", hint: "biometryczny" }
    ]
  }
};

export default wordBuilderCategories_part19;