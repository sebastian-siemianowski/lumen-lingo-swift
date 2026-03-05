/**
 * POLISH → GERMAN WORD BUILDER - PART 26
 * Categories: 104-107
 * 4 categories, 15 words each = 60 words
 */

import { Fence, Key, Bed, Sofa } from "lucide-react";

export const wordBuilderCategories_part26 = {
  outdoor_furniture: {
    name: "Meble ogrodowe",
    description: "Wyposażenie na taras i do ogrodu",
    icon: Fence,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { word: "Gartenmöbel", hint: "meble ogrodowe" },
      { word: "Gartentisch", hint: "stół ogrodowy" },
      { word: "Gartenstuhl", hint: "krzesło ogrodowe" },
      { word: "Gartenbank", hint: "ławka ogrodowa" },
      { word: "Liege", hint: "leżak" },
      { word: "Hollywoodschaukel", hint: "huśtawka ogrodowa" },
      { word: "Hängematte", hint: "hamak" },
      { word: "Sonnenschirm", hint: "parasol ogrodowy" },
      { word: "Pavillon", hint: "pawilon" },
      { word: "Pergola", hint: "pergola" },
      { word: "Zaun", hint: "płot" },
      { word: "Tor", hint: "brama" },
      { word: "Grillplatz", hint: "miejsce do grillowania" },
      { word: "Feuerstelle", hint: "palenisko" },
      { word: "Gartendeko", hint: "dekoracja ogrodowa" }
    ]
  },

  security_home: {
    name: "Bezpieczeństwo domu",
    description: "Ochrona i zabezpieczenia mieszkania",
    icon: Key,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "Schloss", hint: "zamek" },
      { word: "Schlüssel", hint: "klucz" },
      { word: "Alarm", hint: "alarm" },
      { word: "Alarmanlage", hint: "system alarmowy" },
      { word: "Überwachungskamera", hint: "kamera monitoringu" },
      { word: "Sicherheitsschloss", hint: "zamek bezpieczeństwa" },
      { word: "Türkette", hint: "łańcuch do drzwi" },
      { word: "Riegel", hint: "rygiel" },
      { word: "Zahlenschloss", hint: "zamek szyfrowy" },
      { word: "Bewegungsmelder", hint: "czujnik ruchu" },
      { word: "Rauchmelder", hint: "czujnik dymu" },
      { word: "Feuerlöscher", hint: "gaśnica" },
      { word: "Notausgang", hint: "wyjście awaryjne" },
      { word: "Safe", hint: "sejf" },
      { word: "Tresor", hint: "skarbiec" }
    ]
  },

  hotel_accommodation: {
    name: "Hotel i zakwaterowanie",
    description: "Noclegi i usługi hotelowe",
    icon: Bed,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Hotel", hint: "hotel" },
      { word: "Pension", hint: "pensjonat" },
      { word: "Herberge", hint: "schronisko" },
      { word: "Jugendherberge", hint: "schronisko młodzieżowe" },
      { word: "Rezeption", hint: "recepcja" },
      { word: "Empfang", hint: "portiernia" },
      { word: "Zimmer", hint: "pokój" },
      { word: "Einzelzimmer", hint: "pokój jednoosobowy" },
      { word: "Doppelzimmer", hint: "pokój dwuosobowy" },
      { word: "Suite", hint: "apartament" },
      { word: "Reservierung", hint: "rezerwacja" },
      { word: "Check-in", hint: "zameldowanie" },
      { word: "Check-out", hint: "wymeldowanie" },
      { word: "Frühstück", hint: "śniadanie" },
      { word: "Zimmerdienst", hint: "obsługa pokojowa" }
    ]
  },

  living_spaces: {
    name: "Przestrzenie mieszkalne",
    description: "Pomieszczenia i ich przeznaczenie",
    icon: Sofa,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "Wohnung", hint: "mieszkanie" },
      { word: "Haus", hint: "dom" },
      { word: "Zimmer", hint: "pokój" },
      { word: "Küche", hint: "kuchnia" },
      { word: "Badezimmer", hint: "łazienka" },
      { word: "Schlafzimmer", hint: "sypialnia" },
      { word: "Wohnzimmer", hint: "salon" },
      { word: "Esszimmer", hint: "jadalnia" },
      { word: "Arbeitszimmer", hint: "gabinet" },
      { word: "Kinderzimmer", hint: "pokój dziecięcy" },
      { word: "Flur", hint: "korytarz" },
      { word: "Keller", hint: "piwnica" },
      { word: "Dachboden", hint: "strych" },
      { word: "Balkon", hint: "balkon" },
      { word: "Terrasse", hint: "taras" }
    ]
  }
};

export default wordBuilderCategories_part26;