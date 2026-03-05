
/**
 * POLISH → ENGLISH FLASHCARDS - PART 1
 * NEW EXPANSION CATEGORIES (1-5)
 */

import { Laptop, Stethoscope, Briefcase, TreePine, Music } from "lucide-react";

export const part1Categories = {
  technology: {
    name: "Technologia",
    icon: Laptop,
    color: "from-purple-400 to-indigo-500",
    level: "intermediate",
    description: "Technologia i internet",
    words: [
      { id: "pe_tech1", polish: "komputer", english: "computer", example: "I work on a computer", exampleTranslation: "Pracuję na komputerze" },
      { id: "pe_tech2", polish: "telefon", english: "phone", example: "My phone is new", exampleTranslation: "Mój telefon jest nowy" },
      { id: "pe_tech3", polish: "internet", english: "internet", example: "I need internet", exampleTranslation: "Potrzebuję internetu" },
      { id: "pe_tech4", polish: "email", english: "email", example: "Send me an email", exampleTranslation: "Wyślij mi email" },
      { id: "pe_tech5", polish: "aplikacja", english: "app", example: "Download this app", exampleTranslation: "Pobierz tę aplikację" },
      { id: "pe_tech6", polish: "strona internetowa", english: "website", example: "Visit our website", exampleTranslation: "Odwiedź naszą stronę" },
      { id: "pe_tech7", polish: "hasło", english: "password", example: "I forgot my password", exampleTranslation: "Zapomniałem hasła" },
      { id: "pe_tech8", polish: "pobierać", english: "download", example: "I'm downloading the file", exampleTranslation: "Pobieram plik" },
      { id: "pe_tech9", polish: "wysyłać", english: "upload", example: "Upload the photos", exampleTranslation: "Wyślij zdjęcia" },
      { id: "pe_tech10", polish: "media społecznościowe", english: "social media", example: "I use social media", exampleTranslation: "Korzystam z mediów społecznościowych" },
      { id: "pe_tech11", polish: "wiadomość", english: "message", example: "Send me a message", exampleTranslation: "Wyślij mi wiadomość" },
      { id: "pe_tech12", polish: "wifi", english: "wifi", example: "What's the wifi password?", exampleTranslation: "Jakie jest hasło do wifi?" },
      { id: "pe_tech13", polish: "klawiatura", english: "keyboard", example: "My keyboard doesn't work", exampleTranslation: "Moja klawiatura nie działa" },
      { id: "pe_tech14", polish: "ekran", english: "screen", example: "The screen is cracked", exampleTranslation: "Ekran jest pęknięty" },
      { id: "pe_tech15", polish: "bateria", english: "battery", example: "The battery is low", exampleTranslation: "Bateria jest słaba" }
    ]
  },

  healthcare: {
    name: "Opieka zdrowotna",
    icon: Stethoscope,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Zdrowie i medycyna",
    words: [
      { id: "pe_health1", polish: "lekarz", english: "doctor", example: "I need to see a doctor", exampleTranslation: "Muszę iść do lekarza" },
      { id: "pe_health2", polish: "pielęgniarka", english: "nurse", example: "The nurse is very kind", exampleTranslation: "Pielęgniarka jest bardzo miła" },
      { id: "pe_health3", polish: "szpital", english: "hospital", example: "He's in the hospital", exampleTranslation: "Jest w szpitalu" },
      { id: "pe_health4", polish: "lekarstwo", english: "medicine", example: "Take your medicine", exampleTranslation: "Weź swoje lekarstwo" },
      { id: "pe_health5", polish: "ból", english: "pain", example: "I have a headache", exampleTranslation: "Boli mnie głowa" },
      { id: "pe_health6", polish: "gorączka", english: "fever", example: "I have a fever", exampleTranslation: "Mam gorączkę" },
      { id: "pe_health7", polish: "kaszel", english: "cough", example: "I have a terrible cough", exampleTranslation: "Mam straszny kaszel" },
      { id: "pe_health8", polish: "przeziębienie", english: "cold", example: "I have a cold", exampleTranslation: "Jestem przeziębiony" },
      { id: "pe_health9", polish: "recepta", english: "prescription", example: "I need a prescription", exampleTranslation: "Potrzebuję recepty" },
      { id: "pe_health10", polish: "apteka", english: "pharmacy", example: "I'm going to the pharmacy", exampleTranslation: "Idę do apteki" },
      { id: "pe_health11", polish: "wizyta", english: "appointment", example: "I have a doctor's appointment", exampleTranslation: "Mam wizytę u lekarza" },
      { id: "pe_health12", polish: "pogotowie", english: "emergency", example: "It's an emergency", exampleTranslation: "To nagły wypadek" },
      { id: "pe_health13", polish: "karetka", english: "ambulance", example: "Call an ambulance", exampleTranslation: "Zadzwoń po karetkę" },
      { id: "pe_health14", polish: "zdrowie", english: "health", example: "Health is important", exampleTranslation: "Zdrowie jest ważne" },
      { id: "pe_health15", polish: "ubezpieczenie", english: "insurance", example: "I have health insurance", exampleTranslation: "Mam ubezpieczenie zdrowotne" }
    ]
  },

  business: {
    name: "Biznes",
    icon: Briefcase,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    description: "Świat biznesu i pracy",
    words: [
      { id: "pe_biz1", polish: "praca", english: "work", example: "I'm going to work", exampleTranslation: "Idę do pracy" },
      { id: "pe_biz2", polish: "szef", english: "boss", example: "My boss is demanding", exampleTranslation: "Mój szef jest wymagający" },
      { id: "pe_biz3", polish: "kolega", english: "colleague", example: "This is my colleague", exampleTranslation: "To mój kolega z pracy" },
      { id: "pe_biz4", polish: "biuro", english: "office", example: "I work in an office", exampleTranslation: "Pracuję w biurze" },
      { id: "pe_biz5", polish: "spotkanie", english: "meeting", example: "I have a meeting", exampleTranslation: "Mam spotkanie" },
      { id: "pe_biz6", polish: "pensja", english: "salary", example: "My salary is good", exampleTranslation: "Moja pensja jest dobra" },
      { id: "pe_biz7", polish: "kontrakt", english: "contract", example: "I'm signing a contract", exampleTranslation: "Podpisuję kontrakt" },
      { id: "pe_biz8", polish: "projekt", english: "project", example: "I'm working on a project", exampleTranslation: "Pracuję nad projektem" },
      { id: "pe_biz9", polish: "klient", english: "client", example: "The client is satisfied", exampleTranslation: "Klient jest zadowolony" },
      { id: "pe_biz10", polish: "firma", english: "company", example: "I work at a big company", exampleTranslation: "Pracuję w dużej firmie" },
      { id: "pe_biz11", polish: "zarząd", english: "management", example: "Management makes decisions", exampleTranslation: "Zarząd podejmuje decyzje" },
      { id: "pe_biz12", polish: "umowa", english: "agreement", example: "We have an agreement", exampleTranslation: "Mamy umowę" },
      { id: "pe_biz13", polish: "negocjacje", english: "negotiations", example: "Negotiations are ongoing", exampleTranslation: "Negocjacje trwają" },
      { id: "pe_biz14", polish: "raport", english: "report", example: "I'm writing a report", exampleTranslation: "Piszę raport" },
      { id: "pe_biz15", polish: "prezentacja", english: "presentation", example: "I'm preparing a presentation", exampleTranslation: "Przygotowuję prezentację" }
    ]
  },

  nature: {
    name: "Przyroda",
    icon: TreePine,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    description: "Natura i środowisko",
    words: [
      { id: "pe_nature1", polish: "drzewo", english: "tree", example: "The tree is tall", exampleTranslation: "Drzewo jest wysokie" },
      { id: "pe_nature2", polish: "kwiat", english: "flower", example: "The flower is beautiful", exampleTranslation: "Kwiat jest piękny" },
      { id: "pe_nature3", polish: "rzeka", english: "river", example: "The river is long", exampleTranslation: "Rzeka jest długa" },
      { id: "pe_nature4", polish: "góra", english: "mountain", example: "The mountain is high", exampleTranslation: "Góra jest wysoka" },
      { id: "pe_nature5", polish: "plaża", english: "beach", example: "We're going to the beach", exampleTranslation: "Idziemy na plażę" },
      { id: "pe_nature6", polish: "ocean", english: "ocean", example: "The ocean is deep", exampleTranslation: "Ocean jest głęboki" },
      { id: "pe_nature7", polish: "las", english: "forest", example: "We're walking in the forest", exampleTranslation: "Spacerujemy po lesie" },
      { id: "pe_nature8", polish: "pustynia", english: "desert", example: "The desert is hot", exampleTranslation: "Pustynia jest gorąca" },
      { id: "pe_nature9", polish: "jezioro", english: "lake", example: "The lake is calm", exampleTranslation: "Jezioro jest spokojne" },
      { id: "pe_nature10", polish: "niebo", english: "sky", example: "The sky is blue", exampleTranslation: "Niebo jest błękitne" },
      { id: "pe_nature11", polish: "gwiazda", english: "star", example: "The stars shine", exampleTranslation: "Gwiazdy świecą" },
      { id: "pe_nature12", polish: "księżyc", english: "moon", example: "The moon is full", exampleTranslation: "Księżyc jest pełny" },
      { id: "pe_nature13", polish: "słońce", english: "sun", example: "The sun shines brightly", exampleTranslation: "Słońce świeci jasno" },
      { id: "pe_nature14", polish: "zwierzę", english: "animal", example: "I like animals", exampleTranslation: "Lubię zwierzęta" },
      { id: "pe_nature15", polish: "roślina", english: "plant", example: "I water the plants", exampleTranslation: "Podlewam rośliny" }
    ]
  },

  music: {
    name: "Muzyka",
    icon: Music,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    description: "Muzyka i instrumenty",
    words: [
      { id: "pe_music1", polish: "piosenka", english: "song", example: "I like this song", exampleTranslation: "Lubię tę piosenkę" },
      { id: "pe_music2", polish: "zespół", english: "band", example: "My favorite band", exampleTranslation: "Mój ulubiony zespół" },
      { id: "pe_music3", polish: "koncert", english: "concert", example: "I'm going to a concert", exampleTranslation: "Idę na koncert" },
      { id: "pe_music4", polish: "gitara", english: "guitar", example: "I play guitar", exampleTranslation: "Gram na gitarze" },
      { id: "pe_music5", polish: "fortepian", english: "piano", example: "I'm learning piano", exampleTranslation: "Uczę się gry na fortepianie" },
      { id: "pe_music6", polish: "piosenkarz", english: "singer", example: "He's a famous singer", exampleTranslation: "To znany piosenkarz" },
      { id: "pe_music7", polish: "taniec", english: "dance", example: "I love to dance", exampleTranslation: "Uwielbiam tańczyć" },
      { id: "pe_music8", polish: "melodia", english: "melody", example: "Beautiful melody", exampleTranslation: "Piękna melodia" },
      { id: "pe_music9", polish: "rytm", english: "rhythm", example: "I have a sense of rhythm", exampleTranslation: "Mam poczucie rytmu" },
      { id: "pe_music10", polish: "instrument", english: "instrument", example: "Do you play any instrument?", exampleTranslation: "Grasz na jakimś instrumencie?" },
      { id: "pe_music11", polish: "muzyk", english: "musician", example: "I'm a musician", exampleTranslation: "Jestem muzykiem" },
      { id: "pe_music12", polish: "słuchać", english: "listen", example: "I listen to music", exampleTranslation: "Słucham muzyki" },
      { id: "pe_music13", polish: "śpiewać", english: "sing", example: "I like to sing", exampleTranslation: "Lubię śpiewać" },
      { id: "pe_music14", polish: "nagranie", english: "recording", example: "It's a good recording", exampleTranslation: "To dobre nagranie" },
      { id: "pe_music15", english: "headphones", polish: "słuchawki", example: "I have new headphones", exampleTranslation: "Mam nowe słuchawki" }
    ]
  }
};
