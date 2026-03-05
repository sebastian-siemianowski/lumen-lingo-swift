/**
 * POLISH → GERMAN WORD BUILDER - PART 20
 * Categories: 80-83
 * 4 categories, 15 words each = 60 words
 */

import { Tv, Radio, Newspaper, Mail } from "lucide-react";

export const wordBuilderCategories_part20 = {
  media_television: {
    name: "Media i telewizja",
    description: "Programy telewizyjne i media",
    icon: Tv,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "Fernsehen", hint: "telewizja" },
      { word: "Fernseher", hint: "telewizor" },
      { word: "Sender", hint: "kanał" },
      { word: "Sendung", hint: "program" },
      { word: "Nachrichten", hint: "wiadomości" },
      { word: "Dokumentation", hint: "dokument" },
      { word: "Talkshow", hint: "talk-show" },
      { word: "Spielshow", hint: "teleturniej" },
      { word: "Werbung", hint: "reklama" },
      { word: "Fernbedienung", hint: "pilot" },
      { word: "Bildschirm", hint: "ekran" },
      { word: "Antenne", hint: "antena" },
      { word: "Kabel", hint: "kabel" },
      { word: "Satellit", hint: "satelita" },
      { word: "Livestream", hint: "transmisja na żywo" }
    ]
  },

  radio_podcast: {
    name: "Radio i podcasty",
    description: "Audycje radiowe i cyfrowe",
    icon: Radio,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "Radio", hint: "radio" },
      { word: "Radiosender", hint: "stacja radiowa" },
      { word: "Podcast", hint: "podcast" },
      { word: "Hörbuch", hint: "audiobook" },
      { word: "Moderator", hint: "prezenter" },
      { word: "Sendung", hint: "audycja" },
      { word: "Musik", hint: "muzyka" },
      { word: "Nachrichten", hint: "wiadomości" },
      { word: "Interview", hint: "wywiad" },
      { word: "Frequenz", hint: "częstotliwość" },
      { word: "Empfang", hint: "odbiór" },
      { word: "Livestream", hint: "transmisja na żywo" },
      { word: "Hörer", hint: "słuchacz" },
      { word: "Playlist", hint: "playlista" },
      { word: "Episode", hint: "odcinek" }
    ]
  },

  press_newspapers: {
    name: "Prasa i gazety",
    description: "Media drukowane i dziennikarstwo",
    icon: Newspaper,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "Zeitung", hint: "gazeta" },
      { word: "Zeitschrift", hint: "czasopismo" },
      { word: "Magazin", hint: "magazyn" },
      { word: "Artikel", hint: "artykuł" },
      { word: "Schlagzeile", hint: "nagłówek" },
      { word: "Bericht", hint: "raport" },
      { word: "Kommentar", hint: "komentarz" },
      { word: "Interview", hint: "wywiad" },
      { word: "Journalist", hint: "dziennikarz" },
      { word: "Redakteur", hint: "redaktor" },
      { word: "Verlag", hint: "wydawnictwo" },
      { word: "Auflage", hint: "nakład" },
      { word: "Abo", hint: "abonament" },
      { word: "Ausgabe", hint: "wydanie" },
      { word: "Pressemitteilung", hint: "komunikat prasowy" }
    ]
  },

  correspondence: {
    name: "Korespondencja",
    description: "Listy i komunikacja pisemna",
    icon: Mail,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "Brief", hint: "list" },
      { word: "Postkarte", hint: "pocztówka" },
      { word: "Paket", hint: "paczka" },
      { word: "Umschlag", hint: "koperta" },
      { word: "Briefmarke", hint: "znaczek" },
      { word: "Absender", hint: "nadawca" },
      { word: "Empfänger", hint: "odbiorca" },
      { word: "Adresse", hint: "adres" },
      { word: "Postleitzahl", hint: "kod pocztowy" },
      { word: "Porto", hint: "opłata pocztowa" },
      { word: "Einschreiben", hint: "list polecony" },
      { word: "Luftpost", hint: "poczta lotnicza" },
      { word: "Briefkasten", hint: "skrzynka pocztowa" },
      { word: "Postbote", hint: "listonosz" },
      { word: "Zustellung", hint: "dostawa" }
    ]
  }
};

export default wordBuilderCategories_part20;