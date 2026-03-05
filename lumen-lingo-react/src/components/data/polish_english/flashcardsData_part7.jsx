/**
 * POLISH → ENGLISH FLASHCARDS - PART 7
 * 
 * Native Language: Polish (Polski)
 * Target Language: English
 * 
 * This file contains additional flashcard categories (79-88).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Phone,
  Music,
  Camera,
  Briefcase,
  Plane,
  ThermometerSun,
  Zap,
  Baby,
  Car,
  Sparkles,
  Users,
  Heart
} from "lucide-react";

export const flashcardsCategories_part7 = {
  phone_communication: {
    name: "Telefon i komunikacja",
    description: "Phone and communication",
    icon: Phone,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "phone1", polish: "Telefon", english: "Phone", difficulty: "easy", example: "My phone battery is dead and I need to charge it immediately", exampleTranslation: "Mój telefon ma rozładowaną baterię i muszę go natychmiast naładować" },
      { id: "phone2", polish: "Dzwonić", english: "To call", difficulty: "easy", example: "I need to call my mother to wish her happy birthday today", exampleTranslation: "Muszę zadzwonić do mamy aby złożyć jej życzenia urodzinowe dzisiaj" },
      { id: "phone3", polish: "SMS", english: "Text message", difficulty: "easy", example: "Send me a quick text message when you arrive at the station", exampleTranslation: "Wyślij mi szybkiego SMS-a gdy przyjedziesz na stację" },
      { id: "phone4", polish: "Numer telefonu", english: "Phone number", difficulty: "easy", example: "Can you give me your phone number so I can contact you later?", exampleTranslation: "Możesz podać mi swój numer telefonu żebym mógł się z tobą skontaktować później?" },
      { id: "phone5", polish: "Ładowarka", english: "Charger", difficulty: "easy", example: "I forgot my phone charger at home and the battery is low", exampleTranslation: "Zapomniałem ładowarki do telefonu w domu i bateria jest niska" },
      { id: "phone6", polish: "Słuchawka", english: "Receiver", difficulty: "easy", example: "Pick up the receiver and answer the phone when it rings loudly", exampleTranslation: "Podnieś słuchawkę i odbierz telefon gdy dzwoni głośno" },
      { id: "phone7", polish: "Połączenie", english: "Connection", difficulty: "medium", example: "The phone connection is very poor in this area of the building", exampleTranslation: "Połączenie telefoniczne jest bardzo słabe w tej części budynku" },
      { id: "phone8", polish: "Rozmowa", english: "Conversation", difficulty: "medium", example: "We had a long important conversation about our future plans together", exampleTranslation: "Mieliśmy długą ważną rozmowę o naszych wspólnych planach na przyszłość" },
      { id: "phone9", polish: "Oddzwonić", english: "To call back", difficulty: "medium", example: "I can't talk right now, I'll call you back in ten minutes", exampleTranslation: "Nie mogę teraz rozmawiać, oddzwonię do ciebie za dziesięć minut" },
      { id: "phone10", polish: "Wiadomość głosowa", english: "Voicemail", difficulty: "medium", example: "Please leave a voicemail message and I'll respond as soon as possible", exampleTranslation: "Proszę zostaw wiadomość głosową a oddzwonię jak najszybciej" },
      { id: "phone11", polish: "Sygnał", english: "Signal", difficulty: "medium", example: "There's no phone signal in this remote mountain area unfortunately", exampleTranslation: "Nie ma sygnału telefonicznego w tym odległym górskim rejonie niestety" },
      { id: "phone12", polish: "Rozłączyć się", english: "To hang up", difficulty: "medium", example: "Don't hang up the phone, I have one more important thing to tell you", exampleTranslation: "Nie rozłączaj się, mam jeszcze jedną ważną rzecz do powiedzenia" },
      { id: "phone13", polish: "Nie odbiera telefonu", english: "Not answering the phone", difficulty: "hard", example: "He's not answering the phone so I'll try again later this evening", exampleTranslation: "Nie odbiera telefonu więc spróbuję ponownie później wieczorem" },
      { id: "phone14", polish: "Zadzwoń do mnie", english: "Call me", difficulty: "hard", example: "Please call me as soon as you get this important message from me", exampleTranslation: "Proszę zadzwoń do mnie jak tylko dostaniesz tę ważną wiadomość ode mnie" },
      { id: "phone15", polish: "Telefon do ciebie dzwonił", english: "Someone called you", difficulty: "hard", example: "Someone called you three times while you were in the meeting this morning", exampleTranslation: "Ktoś dzwonił do ciebie trzy razy gdy byłeś na spotkaniu tego ranka" }
    ]
  },

  music_instruments: {
    name: "Muzyka i instrumenty",
    description: "Music and instruments",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "mus1", polish: "Muzyka", english: "Music", difficulty: "easy", example: "I listen to classical music every evening to relax after work", exampleTranslation: "Słucham muzyki klasycznej każdego wieczoru aby się zrelaksować po pracy" },
      { id: "mus2", polish: "Piosenka", english: "Song", difficulty: "easy", example: "This beautiful song reminds me of my childhood days in the countryside", exampleTranslation: "Ta piękna piosenka przypomina mi dni dzieciństwa na wsi" },
      { id: "mus3", polish: "Śpiewać", english: "To sing", difficulty: "easy", example: "My daughter loves to sing her favorite songs in the shower loudly", exampleTranslation: "Moja córka uwielbia śpiewać swoje ulubione piosenki pod prysznicem głośno" },
      { id: "mus4", polish: "Gitara", english: "Guitar", difficulty: "easy", example: "I'm learning to play the acoustic guitar and practice every day regularly", exampleTranslation: "Uczę się grać na gitarze akustycznej i ćwiczę codziennie regularnie" },
      { id: "mus5", polish: "Pianino", english: "Piano", difficulty: "easy", example: "The grand piano in the living room sounds absolutely beautiful when played", exampleTranslation: "Fortepian w salonie brzmi absolutnie pięknie gdy się na nim gra" },
      { id: "mus6", polish: "Słuchać", english: "To listen", difficulty: "easy", example: "I love to listen to music while working on creative projects at home", exampleTranslation: "Uwielbiam słuchać muzyki podczas pracy nad kreatywnymi projektami w domu" },
      { id: "mus7", polish: "Koncert", english: "Concert", difficulty: "medium", example: "We're going to a rock concert this Saturday evening in the city center", exampleTranslation: "Idziemy na koncert rockowy w tę sobotę wieczorem w centrum miasta" },
      { id: "mus8", polish: "Melodia", english: "Melody", difficulty: "medium", example: "The beautiful melody of this song stays in my head all day long", exampleTranslation: "Piękna melodia tej piosenki zostaje mi w głowie cały dzień" },
      { id: "mus9", polish: "Rytm", english: "Rhythm", difficulty: "medium", example: "The rhythm of this music makes me want to dance immediately", exampleTranslation: "Rytm tej muzyki sprawia że chce mi się tańczyć natychmiast" },
      { id: "mus10", polish: "Skrzypce", english: "Violin", difficulty: "medium", example: "She plays the violin beautifully in the city orchestra every weekend", exampleTranslation: "Gra pięknie na skrzypcach w orkiestrze miejskiej każdy weekend" },
      { id: "mus11", polish: "Perkusja", english: "Drums", difficulty: "medium", example: "My neighbor practices drums every afternoon and it's quite loud sometimes", exampleTranslation: "Mój sąsiad ćwiczy na perkusji każdego popołudnia i to jest dość głośne czasami" },
      { id: "mus12", polish: "Nuty", english: "Sheet music", difficulty: "medium", example: "I need to buy new sheet music for the piano piece I'm learning", exampleTranslation: "Muszę kupić nowe nuty do utworu fortepianowego którego się uczę" },
      { id: "mus13", polish: "Grasz na instrumencie?", english: "Do you play an instrument?", difficulty: "hard", example: "Do you play any musical instrument or do you just enjoy listening to music?", exampleTranslation: "Grasz na jakimś instrumencie muzycznym czy tylko lubisz słuchać muzyki?" },
      { id: "mus14", polish: "Uwielbiam tę muzykę", english: "I love this music", difficulty: "hard", example: "I absolutely love this music and I could listen to it for hours happily", exampleTranslation: "Uwielbiam tę muzykę i mógłbym jej słuchać godzinami ze szczęściem" },
      { id: "mus15", polish: "Ma dobry głos", english: "Has a good voice", difficulty: "hard", example: "She has a wonderful singing voice and should pursue a professional music career", exampleTranslation: "Ma wspaniały głos do śpiewania i powinna rozwijać profesjonalną karierę muzyczną" }
    ]
  },

  photography_media: {
    name: "Fotografia i media",
    description: "Photography and media",
    icon: Camera,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "photo1", polish: "Zdjęcie", english: "Photo", difficulty: "easy", example: "I took many beautiful photos during our summer vacation in the mountains", exampleTranslation: "Zrobiłem wiele pięknych zdjęć podczas naszych letnich wakacji w górach" },
      { id: "photo2", polish: "Aparat", english: "Camera", difficulty: "easy", example: "My new digital camera takes excellent high-quality photos in any lighting", exampleTranslation: "Mój nowy aparat cyfrowy robi doskonałe wysokiej jakości zdjęcia w każdym oświetleniu" },
      { id: "photo3", polish: "Fotografować", english: "To photograph", difficulty: "easy", example: "I love to photograph landscapes and nature during my hiking trips", exampleTranslation: "Uwielbiam fotografować krajobrazy i przyrodę podczas moich wędrówek" },
      { id: "photo4", polish: "Film", english: "Film", difficulty: "easy", example: "We watched an interesting documentary film about wildlife last night on television", exampleTranslation: "Oglądaliśmy interesujący film dokumentalny o dzikich zwierzętach zeszłej nocy w telewizji" },
      { id: "photo5", polish: "Wideo", english: "Video", difficulty: "easy", example: "I recorded a short video of my daughter's first steps on my phone", exampleTranslation: "Nagrałem krótkie wideo pierwszych kroków mojej córki na telefonie" },
      { id: "photo6", polish: "Ekran", english: "Screen", difficulty: "easy", example: "The computer screen is too bright and hurts my eyes at night", exampleTranslation: "Ekran komputera jest za jasny i boli mnie oczy w nocy" },
      { id: "photo7", polish: "Obiektyw", english: "Lens", difficulty: "medium", example: "I bought a new telephoto lens for photographing distant wildlife and birds", exampleTranslation: "Kupiłem nowy obiektyw teleobiektyw do fotografowania odległych dzikich zwierząt i ptaków" },
      { id: "photo8", polish: "Flash", english: "Flash", difficulty: "medium", example: "Use the camera flash when taking photos in dark indoor spaces", exampleTranslation: "Użyj flesza aparatu podczas robienia zdjęć w ciemnych pomieszczeniach" },
      { id: "photo9", polish: "Kadr", english: "Frame", difficulty: "medium", example: "Compose the frame carefully to create a more interesting artistic photograph", exampleTranslation: "Skomponuj kadr starannie aby stworzyć bardziej interesujące artystyczne zdjęcie" },
      { id: "photo10", polish: "Ostrość", english: "Focus", difficulty: "medium", example: "Adjust the focus manually to get sharper and clearer images every time", exampleTranslation: "Dostosuj ostrość ręcznie aby otrzymać ostrzejsze i wyraźniejsze obrazy za każdym razem" },
      { id: "photo11", polish: "Ekspozycja", english: "Exposure", difficulty: "medium", example: "The photo is overexposed because there was too much bright sunlight coming in", exampleTranslation: "Zdjęcie jest prześwietlone bo było za dużo jasnego światła słonecznego" },
      { id: "photo12", polish: "Selfie", english: "Selfie", difficulty: "medium", example: "Young people love taking selfies and posting them on social media platforms", exampleTranslation: "Młodzi ludzie uwielbiają robić selfie i publikować je na platformach społecznościowych" },
      { id: "photo13", polish: "Zrób mi zdjęcie", english: "Take my photo", difficulty: "hard", example: "Can you please take my photo in front of this beautiful historic monument?", exampleTranslation: "Możesz mi proszę zrobić zdjęcie przed tym pięknym historycznym pomnikiem?" },
      { id: "photo14", polish: "Wyszło ładnie", english: "It came out nice", difficulty: "hard", example: "This photo came out really nice with beautiful colors and perfect lighting!", exampleTranslation: "To zdjęcie wyszło naprawdę ładnie z pięknymi kolorami i idealnym oświetleniem!" },
      { id: "photo15", polish: "Jesteś fotogeniczny", english: "You're photogenic", difficulty: "hard", example: "You're very photogenic and always look great in every single photograph!", exampleTranslation: "Jesteś bardzo fotogeniczny i zawsze wyglądasz świetnie na każdym zdjęciu!" }
    ]
  },

  office_workplace: {
    name: "Biuro i miejsce pracy",
    description: "Office and workplace",
    icon: Briefcase,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "off1", polish: "Biuro", english: "Office", difficulty: "easy", example: "I work in a modern office building in the city center downtown", exampleTranslation: "Pracuję w nowoczesnym biurowcu w centrum miasta" },
      { id: "off2", polish: "Biurko", english: "Desk", difficulty: "easy", example: "My desk is always organized and clean with everything in its place", exampleTranslation: "Moje biurko jest zawsze zorganizowane i czyste ze wszystkim na swoim miejscu" },
      { id: "off3", polish: "Spotkanie", english: "Meeting", difficulty: "easy", example: "We have an important team meeting scheduled for tomorrow morning at nine", exampleTranslation: "Mamy ważne spotkanie zespołu zaplanowane na jutro rano o dziewiątej" },
      { id: "off4", polish: "Prezentacja", english: "Presentation", difficulty: "easy", example: "I need to prepare a detailed presentation for the client meeting next week", exampleTranslation: "Muszę przygotować szczegółową prezentację na spotkanie z klientem w przyszłym tygodniu" },
      { id: "off5", polish: "Projektor", english: "Projector", difficulty: "easy", example: "The projector isn't working properly and we need technical support immediately", exampleTranslation: "Projektor nie działa prawidłowo i potrzebujemy wsparcia technicznego natychmiast" },
      { id: "off6", polish: "Drukarka", english: "Printer", difficulty: "easy", example: "The office printer is out of paper and ink cartridges again", exampleTranslation: "Drukarka biurowa znów skończył się papier i tusze" },
      { id: "off7", polish: "Folder", english: "Folder", difficulty: "medium", example: "Please organize all the documents in separate folders by project name", exampleTranslation: "Proszę zorganizuj wszystkie dokumenty w oddzielnych folderach według nazwy projektu" },
      { id: "off8", polish: "Kserokopia", english: "Photocopy", difficulty: "medium", example: "I need to make several photocopies of this important contract document", exampleTranslation: "Muszę zrobić kilka kserokopii tego ważnego dokumentu umowy" },
      { id: "off9", polish: "Współpracownik", english: "Colleague", difficulty: "medium", example: "My colleague helped me finish the difficult project before the tight deadline", exampleTranslation: "Mój współpracownik pomógł mi skończyć trudny projekt przed napiętym terminem" },
      { id: "off10", polish: "Szef", english: "Boss", difficulty: "medium", example: "My boss is very understanding and supportive of work-life balance for everyone", exampleTranslation: "Mój szef jest bardzo wyrozumiały i wspiera równowagę między pracą a życiem dla wszystkich" },
      { id: "off11", polish: "Termin", english: "Deadline", difficulty: "medium", example: "We must finish this project before the strict deadline on Friday afternoon", exampleTranslation: "Musimy skończyć ten projekt przed surowym terminem w piątek po południu" },
      { id: "off12", polish: "Awans", english: "Promotion", difficulty: "medium", example: "I received a promotion at work after three years of hard dedicated work", exampleTranslation: "Otrzymałem awans w pracy po trzech latach ciężkiej oddanej pracy" },
      { id: "off13", polish: "Mam dużo pracy", english: "I have a lot of work", difficulty: "hard", example: "I have so much work to do that I'll probably stay late at the office tonight", exampleTranslation: "Mam tak dużo pracy do zrobienia że prawdopodobnie zostanę późno w biurze dziś wieczorem" },
      { id: "off14", polish: "Pracuję nad projektem", english: "I'm working on a project", difficulty: "hard", example: "I'm currently working on a very important project that requires my full attention daily", exampleTranslation: "Obecnie pracuję nad bardzo ważnym projektem który wymaga mojej pełnej uwagi codziennie" },
      { id: "off15", polish: "Kiedy kończymy?", english: "When do we finish?", difficulty: "hard", example: "When exactly do we finish work today? I have plans for this evening already", exampleTranslation: "Kiedy dokładnie kończymy pracę dzisiaj? Mam już plany na ten wieczór" }
    ]
  },

  airport_travel: {
    name: "Lotnisko i podróż",
    description: "Airport and travel",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "air1", polish: "Lotnisko", english: "Airport", difficulty: "easy", example: "We arrived at the airport two hours before our international flight departure", exampleTranslation: "Przyjechaliśmy na lotnisko dwie godziny przed odlotem naszego międzynarodowego lotu" },
      { id: "air2", polish: "Samolot", english: "Airplane", difficulty: "easy", example: "The airplane took off on time and landed safely at the destination", exampleTranslation: "Samolot wystartował o czasie i bezpiecznie wylądował w miejscu docelowym" },
      { id: "air3", polish: "Lot", english: "Flight", difficulty: "easy", example: "Our flight to London was delayed by three hours due to bad weather", exampleTranslation: "Nasz lot do Londynu był opóźniony o trzy godziny z powodu złej pogody" },
      { id: "air4", polish: "Bilet", english: "Ticket", difficulty: "easy", example: "I bought plane tickets online and saved them on my phone for easy access", exampleTranslation: "Kupiłem bilety lotnicze online i zapisałem je na telefonie dla łatwego dostępu" },
      { id: "air5", polish: "Bagaż", english: "Luggage", difficulty: "easy", example: "My luggage is too heavy and I need to remove some items from it", exampleTranslation: "Mój bagaż jest za ciężki i muszę usunąć z niego kilka rzeczy" },
      { id: "air6", polish: "Paszport", english: "Passport", difficulty: "easy", example: "Don't forget your passport at home when traveling to foreign countries abroad", exampleTranslation: "Nie zapomnij paszportu w domu gdy podróżujesz do obcych krajów za granicą" },
      { id: "air7", polish: "Odprawa", english: "Check-in", difficulty: "medium", example: "Online check-in opens twenty-four hours before the scheduled flight departure time", exampleTranslation: "Odprawa online otwiera się dwadzieścia cztery godziny przed planowanym odlotem" },
      { id: "air8", polish: "Bramka", english: "Gate", difficulty: "medium", example: "Please proceed to gate number fifteen for boarding the flight immediately", exampleTranslation: "Proszę przejść do bramki numer piętnaście na boarding lotu natychmiast" },
      { id: "air9", polish: "Start", english: "Takeoff", difficulty: "medium", example: "The takeoff was smooth and we reached cruising altitude within ten minutes", exampleTranslation: "Start był płynny i osiągnęliśmy wysokość przelotową w ciągu dziesięciu minut" },
      { id: "air10", polish: "Lądowanie", english: "Landing", difficulty: "medium", example: "The landing was a bit bumpy due to strong crosswinds at the airport", exampleTranslation: "Lądowanie było trochę wybojowe z powodu silnych wiatrów bocznych na lotnisku" },
      { id: "air11", polish: "Stewardesa", english: "Flight attendant", difficulty: "medium", example: "The flight attendant served drinks and snacks during the long international journey", exampleTranslation: "Stewardesa podawała napoje i przekąski podczas długiej międzynarodowej podróży" },
      { id: "air12", polish: "Opóźnienie", english: "Delay", difficulty: "medium", example: "There's a two-hour delay due to technical problems with the aircraft engine", exampleTranslation: "Jest dwugodzinne opóźnienie z powodu problemów technicznych z silnikiem samolotu" },
      { id: "air13", polish: "Gdzie jest odprawa?", english: "Where is check-in?", difficulty: "hard", example: "Excuse me, where exactly is the check-in counter for international flights?", exampleTranslation: "Przepraszam, gdzie dokładnie jest odprawa dla lotów międzynarodowych?" },
      { id: "air14", polish: "Lot jest opóźniony", english: "The flight is delayed", difficulty: "hard", example: "Unfortunately the flight is delayed and we won't arrive on time as planned", exampleTranslation: "Niestety lot jest opóźniony i nie dotrzemy na czas jak planowaliśmy" },
      { id: "air15", polish: "Przyjemnego lotu", english: "Have a nice flight", difficulty: "hard", example: "Have a wonderful and safe flight and enjoy your vacation in paradise!", exampleTranslation: "Miłego i bezpiecznego lotu i ciesz się wakacjami w raju!" }
    ]
  },

  temperature_climate: {
    name: "Temperatura i klimat",
    description: "Temperature and climate",
    icon: ThermometerSun,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "temp1", polish: "Temperatura", english: "Temperature", difficulty: "easy", example: "The temperature today is very high and it's uncomfortably hot outside", exampleTranslation: "Temperatura dzisiaj jest bardzo wysoka i jest niewygodnie gorąco na zewnątrz" },
      { id: "temp2", polish: "Gorąco", english: "Hot", difficulty: "easy", example: "It's extremely hot in the summer and everyone seeks shade from sun", exampleTranslation: "Jest ekstremalnie gorąco w lecie i wszyscy szukają cienia od słońca" },
      { id: "temp3", polish: "Zimno", english: "Cold", difficulty: "easy", example: "It's very cold outside so put on warm clothes before leaving home", exampleTranslation: "Jest bardzo zimno na zewnątrz więc załóż ciepłe ubrania przed wyjściem z domu" },
      { id: "temp4", polish: "Ciepło", english: "Warm", difficulty: "easy", example: "The spring weather is pleasantly warm and perfect for outdoor activities", exampleTranslation: "Wiosenna pogoda jest przyjemnie ciepła i idealna do aktywności na zewnątrz" },
      { id: "temp5", polish: "Chłodno", english: "Cool", difficulty: "easy", example: "It's cool in the evening so I'll bring a light jacket with me", exampleTranslation: "Jest chłodno wieczorem więc wezmę ze sobą lekką kurtkę" },
      { id: "temp6", polish: "Stopnie", english: "Degrees", difficulty: "easy", example: "The temperature outside is twenty-five degrees Celsius in the afternoon shade", exampleTranslation: "Temperatura na zewnątrz wynosi dwadzieścia pięć stopni Celsjusza w popołudniowym cieniu" },
      { id: "temp7", polish: "Termometr", english: "Thermometer", difficulty: "medium", example: "Check the thermometer to see what the exact room temperature is right now", exampleTranslation: "Sprawdź termometr aby zobaczyć jaka jest dokładna temperatura w pokoju teraz" },
      { id: "temp8", polish: "Mróz", english: "Frost", difficulty: "medium", example: "There was heavy frost this morning and all the car windows were frozen", exampleTranslation: "Był silny mróz dzisiaj rano i wszystkie szyby samochodowe były zamrożone" },
      { id: "temp9", polish: "Upał", english: "Heat", difficulty: "medium", example: "The summer heat is unbearable and I prefer to stay indoors with air conditioning", exampleTranslation: "Letni upał jest nie do zniesienia i wolę zostać w domu z klimatyzacją" },
      { id: "temp10", polish: "Klimat", english: "Climate", difficulty: "medium", example: "The Mediterranean climate is mild and pleasant throughout most of the year", exampleTranslation: "Klimat śródziemnomorski jest łagodny i przyjemny przez większość roku" },
      { id: "temp11", polish: "Wilgotność", english: "Humidity", difficulty: "medium", example: "High humidity makes the hot weather feel even more uncomfortable than usual", exampleTranslation: "Wysoka wilgotność sprawia że gorąca pogoda czuje się jeszcze bardziej niewygodnie niż zwykle" },
      { id: "temp12", polish: "Ocieplenie", english: "Warming", difficulty: "medium", example: "Global warming is causing serious changes in climate patterns around the world", exampleTranslation: "Globalne ocieplenie powoduje poważne zmiany we wzorcach klimatycznych na całym świecie" },
      { id: "temp13", polish: "Jaką mamy temperaturę?", english: "What's the temperature?", difficulty: "hard", example: "What's the current temperature outside? Should I wear a jacket or not?", exampleTranslation: "Jaką mamy temperaturę na zewnątrz? Powinienem założyć kurtkę czy nie?" },
      { id: "temp14", polish: "Jest zbyt gorąco", english: "It's too hot", difficulty: "hard", example: "It's way too hot in this room, can we please open the windows?", exampleTranslation: "Jest zdecydowanie za gorąco w tym pokoju, możemy proszę otworzyć okna?" },
      { id: "temp15", polish: "Marznę", english: "I'm freezing", difficulty: "hard", example: "I'm absolutely freezing in this cold room without any heating at all!", exampleTranslation: "Marznę w tym zimnym pokoju bez żadnego ogrzewania w ogóle!" }
    ]
  },

  energy_power: {
    name: "Energia i moc",
    description: "Energy and power",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "eng1", polish: "Energia", english: "Energy", difficulty: "easy", example: "We need to save energy and turn off lights when leaving rooms", exampleTranslation: "Musimy oszczędzać energię i wyłączać światła gdy wychodzimy z pomieszczeń" },
      { id: "eng2", polish: "Prąd", english: "Electricity", difficulty: "easy", example: "The electricity went out during the storm and everything went dark suddenly", exampleTranslation: "Prąd wyłączył się podczas burzy i wszystko nagle pociemniało" },
      { id: "eng3", polish: "Światło", english: "Light", difficulty: "easy", example: "Turn on the light because it's getting dark in the room already", exampleTranslation: "Zapal światło bo już robi się ciemno w pokoju" },
      { id: "eng4", polish: "Żarówka", english: "Light bulb", difficulty: "easy", example: "The light bulb burned out and needs to be replaced with a new one", exampleTranslation: "Żarówka się przepaliła i wymaga wymiany na nową" },
      { id: "eng5", polish: "Wyłącznik", english: "Switch", difficulty: "easy", example: "The light switch is located next to the door on the right wall", exampleTranslation: "Wyłącznik światła znajduje się obok drzwi na prawej ścianie" },
      { id: "eng6", polish: "Bateria", english: "Battery", difficulty: "easy", example: "My laptop battery is low and I need to plug in the charger now", exampleTranslation: "Bateria mojego laptopa jest niska i muszę podłączyć ładowarkę teraz" },
      { id: "eng7", polish: "Gniazdko", english: "Socket", difficulty: "medium", example: "I can't find a free electrical socket to charge my phone in this room", exampleTranslation: "Nie mogę znaleźć wolnego gniazdka elektrycznego aby naładować telefon w tym pokoju" },
      { id: "eng8", polish: "Przedłużacz", english: "Extension cord", difficulty: "medium", example: "I need an extension cord to reach the power outlet from my desk area", exampleTranslation: "Potrzebuję przedłużacza aby dosięgnąć gniazdka elektrycznego z mojego biurka" },
      { id: "eng9", polish: "Bezpiecznik", english: "Fuse", difficulty: "medium", example: "The fuse blew when I plugged in too many devices at the same time", exampleTranslation: "Bezpiecznik się przepalił gdy podłączyłem za dużo urządzeń w tym samym czasie" },
      { id: "eng10", polish: "Generator", english: "Generator", difficulty: "medium", example: "We have a backup generator in case of power outages during storms", exampleTranslation: "Mamy generator zapasowy na wypadek awarii prądu podczas burz" },
      { id: "eng11", polish: "Napięcie", english: "Voltage", difficulty: "medium", example: "Check the voltage requirements before plugging in this electronic device safely", exampleTranslation: "Sprawdź wymagania napięcia przed bezpiecznym podłączeniem tego urządzenia elektronicznego" },
      { id: "eng12", polish: "Oszczędzać energię", english: "To save energy", difficulty: "medium", example: "We should save energy by using LED bulbs and turning off unused lights", exampleTranslation: "Powinniśmy oszczędzać energię używając żarówek LED i wyłączając nieużywane światła" },
      { id: "eng13", polish: "Nie ma prądu", english: "There's no power", difficulty: "hard", example: "There's no power in the entire building due to a major electrical failure", exampleTranslation: "Nie ma prądu w całym budynku z powodu poważnej awarii elektrycznej" },
      { id: "eng14", polish: "Wyłącz światło", english: "Turn off the light", difficulty: "hard", example: "Please turn off all the lights when you leave the house to save electricity", exampleTranslation: "Proszę wyłącz wszystkie światła gdy wychodzisz z domu aby oszczędzać energię elektryczną" },
      { id: "eng15", polish: "Ładuje się", english: "It's charging", difficulty: "hard", example: "My phone is charging right now and will be ready in about one hour", exampleTranslation: "Mój telefon się ładuje teraz i będzie gotowy za około godzinę" }
    ]
  },

  baby_childhood: {
    name: "Dziecko i dzieciństwo",
    description: "Baby and childhood",
    icon: Baby,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "baby1", polish: "Dziecko", english: "Child", difficulty: "easy", example: "The child is playing happily in the garden with colorful toys", exampleTranslation: "Dziecko bawi się radośnie w ogrodzie kolorowymi zabawkami" },
      { id: "baby2", polish: "Niemowlę", english: "Baby", difficulty: "easy", example: "The baby is sleeping peacefully in the comfortable crib right now", exampleTranslation: "Niemowlę śpi spokojnie w wygodnym łóżeczku teraz" },
      { id: "baby3", polish: "Zabawka", english: "Toy", difficulty: "easy", example: "I bought a new educational toy for my daughter's third birthday party", exampleTranslation: "Kupiłem nową zabawkę edukacyjną na trzecie urodziny mojej córki" },
      { id: "baby4", polish: "Pluszak", english: "Stuffed animal", difficulty: "easy", example: "My son sleeps with his favorite teddy bear stuffed animal every night", exampleTranslation: "Mój syn śpi ze swoim ulubionym pluszakiem misia każdej nocy" },
      { id: "baby5", polish: "Smoczek", english: "Pacifier", difficulty: "easy", example: "The baby needs the pacifier to calm down and fall asleep quickly", exampleTranslation: "Niemowlę potrzebuje smoczka aby się uspokoić i szybko zasnąć" },
      { id: "baby6", polish: "Wózek", english: "Stroller", difficulty: "easy", example: "We push the baby stroller through the park during daily afternoon walks", exampleTranslation: "Pchamy wózek dziecięcy przez park podczas codziennych popołudniowych spacerów" },
      { id: "baby7", polish: "Pielucha", english: "Diaper", difficulty: "medium", example: "I need to change the baby's diaper because it's wet and uncomfortable", exampleTranslation: "Muszę zmienić pieluchę dziecka bo jest mokra i niewygodna" },
      { id: "baby8", polish: "Karmić", english: "To feed", difficulty: "medium", example: "I feed the baby every three hours throughout the day and night", exampleTranslation: "Karmię niemowlę co trzy godziny przez cały dzień i noc" },
      { id: "baby9", polish: "Butelka", english: "Bottle", difficulty: "medium", example: "Warm the milk bottle before giving it to the hungry baby", exampleTranslation: "Podgrzej butelkę z mlekiem przed podaniem jej głodnemu niemowlęciu" },
      { id: "baby10", polish: "Kołysanka", english: "Lullaby", difficulty: "medium", example: "I sing a gentle lullaby to help the baby fall asleep peacefully", exampleTranslation: "Śpiewam delikatną kołysankę aby pomóc niemowlęciu zasnąć spokojnie" },
      { id: "baby11", polish: "Pełzać", english: "To crawl", difficulty: "medium", example: "The baby is learning to crawl around the room on the soft carpet", exampleTranslation: "Niemowlę uczy się pełzać po pokoju na miękkim dywanie" },
      { id: "baby12", polish: "Chodzić", english: "To walk", difficulty: "medium", example: "My daughter learned to walk when she was eleven months old", exampleTranslation: "Moja córka nauczyła się chodzić gdy miała jedenaście miesięcy" },
      { id: "baby13", polish: "Dziecko płacze", english: "The baby is crying", difficulty: "hard", example: "The baby is crying because he's hungry and needs to be fed now", exampleTranslation: "Dziecko płacze bo jest głodne i trzeba je nakarmić teraz" },
      { id: "baby14", polish: "Uspokój dziecko", english: "Calm the baby", difficulty: "hard", example: "Try to gently calm the baby by rocking and singing softly to him", exampleTranslation: "Spróbuj delikatnie uspokoić dziecko kołysząc i śpiewając mu cicho" },
      { id: "baby15", polish: "Jakie słodkie niemowlę", english: "What a sweet baby", difficulty: "hard", example: "What an absolutely sweet and adorable baby with beautiful big blue eyes!", exampleTranslation: "Jakie absolutnie słodkie i urocze niemowlę z pięknymi dużymi niebieskimi oczami!" }
    ]
  },

  car_driving: {
    name: "Samochód i jazda",
    description: "Car and driving",
    icon: Car,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "car1", polish: "Samochód", english: "Car", difficulty: "easy", example: "My car is parked in the garage behind the house safely", exampleTranslation: "Mój samochód jest zaparkowany w garażu za domem bezpiecznie" },
      { id: "car2", polish: "Prowadzić", english: "To drive", difficulty: "easy", example: "I learned to drive a car when I was eighteen years old", exampleTranslation: "Nauczyłem się prowadzić samochód gdy miałem osiemnaście lat" },
      { id: "car3", polish: "Kierownica", english: "Steering wheel", difficulty: "easy", example: "Hold the steering wheel firmly with both hands while driving on the highway", exampleTranslation: "Trzymaj kierownicę mocno obiema rękami podczas jazdy autostradą" },
      { id: "car4", polish: "Hamulec", english: "Brake", difficulty: "easy", example: "Press the brake pedal gently to slow down the car smoothly and safely", exampleTranslation: "Naciśnij pedał hamulca delikatnie aby spowolnić samochód płynnie i bezpiecznie" },
      { id: "car5", polish: "Gaz", english: "Gas pedal", difficulty: "easy", example: "Press the gas pedal to accelerate and increase the car's speed gradually", exampleTranslation: "Naciśnij pedał gazu aby przyspieszyć i zwiększyć prędkość samochodu stopniowo" },
      { id: "car6", polish: "Benzyna", english: "Gasoline", difficulty: "easy", example: "I need to stop at the gas station to fill up with gasoline", exampleTranslation: "Muszę zatrzymać się na stacji benzynowej aby zatankować benzynę" },
      { id: "car7", polish: "Parkowanie", english: "Parking", difficulty: "medium", example: "Finding parking in the city center is always difficult during rush hours", exampleTranslation: "Znalezienie parkingu w centrum miasta jest zawsze trudne w godzinach szczytu" },
      { id: "car8", polish: "Pas bezpieczeństwa", english: "Seatbelt", difficulty: "medium", example: "Always fasten your seatbelt before starting to drive for maximum safety", exampleTranslation: "Zawsze zapnij pas bezpieczeństwa przed rozpoczęciem jazdy dla maksymalnego bezpieczeństwa" },
      { id: "car9", polish: "Światła", english: "Headlights", difficulty: "medium", example: "Turn on the car headlights when driving at night or in fog", exampleTranslation: "Włącz światła samochodowe podczas jazdy w nocy lub we mgle" },
      { id: "car10", polish: "Opony", english: "Tires", difficulty: "medium", example: "The car tires are worn out and need to be replaced soon", exampleTranslation: "Opony samochodowe są zużyte i trzeba je wkrótce wymienić" },
      { id: "car11", polish: "Silnik", english: "Engine", difficulty: "medium", example: "The car engine is making strange noises and needs to be checked immediately", exampleTranslation: "Silnik samochodu wydaje dziwne dźwięki i musi być sprawdzony natychmiast" },
      { id: "car12", polish: "Awaria", english: "Breakdown", difficulty: "medium", example: "We had a car breakdown on the highway and had to call roadside assistance", exampleTranslation: "Mieliśmy awarię samochodu na autostradzie i musieliśmy wezwać pomoc drogową" },
      { id: "car13", polish: "Samochód się zepsuł", english: "The car broke down", difficulty: "hard", example: "The car broke down in the middle of nowhere and I don't have phone signal", exampleTranslation: "Samochód się zepsuł w środku niczego i nie mam zasięgu telefonu" },
      { id: "car14", polish: "Zatankuj samochód", english: "Fill up the car", difficulty: "hard", example: "Please fill up the car with gas before we leave for the long road trip", exampleTranslation: "Proszę zatankuj samochód benzyną zanim wyjedziemy na długą podróż" },
      { id: "car15", polish: "Jedź ostrożnie", english: "Drive carefully", difficulty: "hard", example: "Please drive carefully on these icy winter roads and arrive safely home", exampleTranslation: "Proszę jedź ostrożnie na tych oblodzonych zimowych drogach i dotrzyj bezpiecznie do domu" }
    ]
  },

  celebrations_parties: {
    name: "Uroczystości i przyjęcia",
    description: "Celebrations and parties",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "cel1", polish: "Uroczystość", english: "Celebration", difficulty: "easy", example: "We're having a big family celebration for my grandmother's eightieth birthday", exampleTranslation: "Mamy dużą rodzinną uroczystość z okazji osiemdziesiątych urodzin babci" },
      { id: "cel2", polish: "Przyjęcie", english: "Party", difficulty: "easy", example: "I'm organizing a surprise party for my best friend's birthday next week", exampleTranslation: "Organizuję przyjęcie niespodziankę na urodziny mojego najlepszego przyjaciela w przyszłym tygodniu" },
      { id: "cel3", polish: "Gość", english: "Guest", difficulty: "easy", example: "We invited fifty guests to our wedding celebration in the garden", exampleTranslation: "Zaprosiliśmy pięćdziesięciu gości na naszą uroczystość ślubną w ogrodzie" },
      { id: "cel4", polish: "Tort", english: "Cake", difficulty: "easy", example: "I ordered a beautiful chocolate cake for the birthday party tomorrow", exampleTranslation: "Zamówiłem piękny tort czekoladowy na przyjęcie urodzinowe jutro" },
      { id: "cel5", polish: "Świeczki", english: "Candles", difficulty: "easy", example: "Make a wish and blow out all the birthday candles on the cake", exampleTranslation: "Pomyśl życzenie i zdmuchnij wszystkie świeczki urodzinowe na torcie" },
      { id: "cel6", polish: "Balony", english: "Balloons", difficulty: "easy", example: "Colorful balloons decorated the entire room for the children's birthday party", exampleTranslation: "Kolorowe balony udekorowały cały pokój na przyjęcie urodzinowe dla dzieci" },
      { id: "cel7", polish: "Dekoracje", english: "Decorations", difficulty: "medium", example: "We spent all morning putting up festive decorations for tonight's party", exampleTranslation: "Spędziliśmy cały ranek wieszając świąteczne dekoracje na dzisiejsze przyjęcie wieczorem" },
      { id: "cel8", polish: "Zaproszenie", english: "Invitation", difficulty: "medium", example: "I sent wedding invitations to all our friends and family members last month", exampleTranslation: "Wysłałem zaproszenia ślubne do wszystkich naszych przyjaciół i członków rodziny w zeszłym miesiącu" },
      { id: "cel9", polish: "Gratulacje", english: "Congratulations", difficulty: "medium", example: "Congratulations on your new job promotion and well-deserved success at work!", exampleTranslation: "Gratulacje z okazji awansu w pracy i zasłużonego sukcesu w pracy!" },
      { id: "cel10", polish: "Toast", english: "Toast", difficulty: "medium", example: "Let's raise our glasses for a toast to celebrate this special joyful occasion", exampleTranslation: "Wznieśmy kieliszki na toast aby uczcić tę specjalną radosną okazję" },
      { id: "cel11", polish: "Taniec", english: "Dance", difficulty: "medium", example: "The first dance at the wedding was beautiful and very emotional to watch", exampleTranslation: "Pierwszy taniec na weselu był piękny i bardzo wzruszający do oglądania" },
      { id: "cel12", polish: "Impreza", english: "Event", difficulty: "medium", example: "This charity event raised a lot of money for helping children in need", exampleTranslation: "Ta impreza charytatywna zebrała dużo pieniędzy na pomoc dzieciom w potrzebie" },
      { id: "cel13", polish: "Świętujmy to!", english: "Let's celebrate!", difficulty: "hard", example: "Let's celebrate this wonderful achievement with champagne and delicious food tonight!", exampleTranslation: "Świętujmy to wspaniałe osiągnięcie szampanem i pysznym jedzeniem dziś wieczorem!" },
      { id: "cel14", polish: "Wspaniałe przyjęcie", english: "Wonderful party", difficulty: "hard", example: "That was a truly wonderful party with great people and amazing atmosphere!", exampleTranslation: "To było naprawdę wspaniałe przyjęcie ze wspaniałymi ludźmi i niesamowitą atmosferą!" },
      { id: "cel15", polish: "Dziękuję za zaproszenie", english: "Thank you for the invitation", difficulty: "hard", example: "Thank you so much for the invitation to your beautiful wedding celebration!", exampleTranslation: "Bardzo dziękuję za zaproszenie na waszą piękną uroczystość ślubną!" }
    ]
  },

  money_shopping: {
    name: "Pieniądze i zakupy",
    description: "Money and shopping",
    icon: Briefcase,
    color: "from-emerald-500 to-green-600",
    level: "beginner",
    words: [
      { id: "mon1", polish: "Pieniądze", english: "Money", difficulty: "easy", example: "I need to withdraw some money from the bank before going shopping today", exampleTranslation: "Muszę wypłacić trochę pieniędzy z banku przed pójściem na zakupy dzisiaj" },
      { id: "mon2", polish: "Cena", english: "Price", difficulty: "easy", example: "The price of this product is too high for my current budget", exampleTranslation: "Cena tego produktu jest za wysoka dla mojego obecnego budżetu" },
      { id: "mon3", polish: "Kupować", english: "To buy", difficulty: "easy", example: "I want to buy a new laptop for work and personal use at home", exampleTranslation: "Chcę kupić nowy laptop do pracy i użytku osobistego w domu" },
      { id: "mon4", polish: "Sprzedawać", english: "To sell", difficulty: "easy", example: "I'm selling my old furniture online because I'm moving to a new apartment", exampleTranslation: "Sprzedaję moje stare meble online bo przeprowadzam się do nowego mieszkania" },
      { id: "mon5", polish: "Płacić", english: "To pay", difficulty: "easy", example: "You can pay with cash or credit card at the store checkout counter", exampleTranslation: "Możesz płacić gotówką lub kartą kredytową przy kasie w sklepie" },
      { id: "mon6", polish: "Reszta", english: "Change", difficulty: "easy", example: "The cashier gave me the wrong change and too much money back", exampleTranslation: "Kasjerka dała mi złą resztę i za dużo pieniędzy z powrotem" },
      { id: "mon7", polish: "Paragon", english: "Receipt", difficulty: "medium", example: "Keep the receipt in case you need to return the product later", exampleTranslation: "Zachowaj paragon na wypadek gdybyś musiał zwrócić produkt później" },
      { id: "mon8", polish: "Wyprzedaż", english: "Sale", difficulty: "medium", example: "There's a huge sale at the shopping mall with fifty percent discounts this weekend", exampleTranslation: "Jest ogromna wyprzedaż w centrum handlowym z pięćdziesięcio procentowymi zniżkami w ten weekend" },
      { id: "mon9", polish: "Zniżka", english: "Discount", difficulty: "medium", example: "I got a twenty percent discount on these shoes because of the special promotion", exampleTranslation: "Dostałem dwadzieścia procent zniżki na te buty z powodu specjalnej promocji" },
      { id: "mon10", polish: "Oszczędzać", english: "To save", difficulty: "medium", example: "I try to save money every month for future emergency expenses", exampleTranslation: "Staram się oszczędzać pieniądze każdego miesiąca na przyszłe wydatki awaryjne" },
      { id: "mon11", polish: "Wydawać", english: "To spend", difficulty: "medium", example: "I spend too much money on unnecessary things that I don't really need", exampleTranslation: "Wydaję za dużo pieniędzy na niepotrzebne rzeczy których tak naprawdę nie potrzebuję" },
      { id: "mon12", polish: "Portfel", english: "Wallet", difficulty: "medium", example: "I can't find my wallet anywhere and I'm worried I lost it somewhere", exampleTranslation: "Nie mogę nigdzie znaleźć mojego portfela i martwię się że go gdzieś zgubiłem" },
      { id: "mon13", polish: "Ile to kosztuje?", english: "How much is this?", difficulty: "hard", example: "Excuse me, how much exactly does this beautiful jacket cost with the discount?", exampleTranslation: "Przepraszam, ile dokładnie kosztuje ta piękna kurtka ze zniżką?" },
      { id: "mon14", polish: "To za drogie", english: "This is too expensive", difficulty: "hard", example: "This is way too expensive for me, do you have anything cheaper available?", exampleTranslation: "To jest zdecydowanie za drogie dla mnie, czy macie coś tańszego dostępnego?" },
      { id: "mon15", polish: "Mogę zapłacić kartą?", english: "Can I pay by card?", difficulty: "hard", example: "Can I pay by credit card or do you only accept cash payments here?", exampleTranslation: "Mogę zapłacić kartą kredytową czy przyjmujecie tylko gotówkę tutaj?" }
    ]
  },

  computers_tech: {
    name: "Komputery i technologia",
    description: "Computers and technology",
    icon: Zap,
    color: "from-blue-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "comp1", polish: "Komputer", english: "Computer", difficulty: "easy", example: "I use my computer every day for work and personal entertainment", exampleTranslation: "Używam mojego komputera codziennie do pracy i osobistej rozrywki" },
      { id: "comp2", polish: "Klawiatura", english: "Keyboard", difficulty: "easy", example: "My keyboard is broken and some keys don't work properly anymore", exampleTranslation: "Moja klawiatura jest zepsuta i niektóre klawisze nie działają już prawidłowo" },
      { id: "comp3", polish: "Mysz", english: "Mouse", difficulty: "easy", example: "The computer mouse battery died and I need to replace it urgently", exampleTranslation: "Bateria myszy komputerowej się wyczerpała i muszę ją pilnie wymienić" },
      { id: "comp4", polish: "Monitor", english: "Monitor", difficulty: "easy", example: "I bought a large monitor for comfortable work with multiple windows open", exampleTranslation: "Kupiłem duży monitor do wygodnej pracy z wieloma otwartymi oknami" },
      { id: "comp5", polish: "Drukarka", english: "Printer", difficulty: "easy", example: "The printer is out of ink and I can't print documents right now", exampleTranslation: "Drukarka skończyła się tusz i nie mogę teraz drukować dokumentów" },
      { id: "comp6", polish: "Dane", english: "Data", difficulty: "easy", example: "Always back up your important data to prevent losing it forever", exampleTranslation: "Zawsze rób kopię zapasową ważnych danych aby nie stracić ich na zawsze" },
      { id: "comp7", polish: "Kopia zapasowa", english: "Backup", difficulty: "medium", example: "I make regular backups of all my files to cloud storage weekly", exampleTranslation: "Robię regularne kopie zapasowe wszystkich moich plików do chmury co tydzień" },
      { id: "comp8", polish: "Aktualizacja", english: "Update", difficulty: "medium", example: "Install the latest software update to fix security bugs and improve performance", exampleTranslation: "Zainstaluj najnowszą aktualizację oprogramowania aby naprawić błędy bezpieczeństwa i poprawić wydajność" },
      { id: "comp9", polish: "Wirus", english: "Virus", difficulty: "medium", example: "My computer has a virus and I need to run antivirus software immediately", exampleTranslation: "Mój komputer ma wirusa i muszę uruchomić program antywirusowy natychmiast" },
      { id: "comp10", polish: "Zawieszać się", english: "To freeze", difficulty: "medium", example: "My computer keeps freezing and I need to restart it several times daily", exampleTranslation: "Mój komputer ciągle się zawiesza i muszę go restartować kilka razy dziennie" },
      { id: "comp11", polish: "Resetować", english: "To reset", difficulty: "medium", example: "Try to reset the computer to factory settings if nothing else works properly", exampleTranslation: "Spróbuj zresetować komputer do ustawień fabrycznych jeśli nic innego nie działa prawidłowo" },
      { id: "comp12", polish: "Hasło", english: "Password", difficulty: "medium", example: "Create a strong password with letters, numbers and special characters for security", exampleTranslation: "Stwórz silne hasło z literami, cyframi i znakami specjalnymi dla bezpieczeństwa" },
      { id: "comp13", polish: "Komputer się zawiesił", english: "The computer froze", difficulty: "hard", example: "The computer completely froze and I lost all my unsaved work from today", exampleTranslation: "Komputer całkowicie się zawiesił i straciłem całą niezapisaną pracę z dzisiaj" },
      { id: "comp14", polish: "Zapomniałem hasła", english: "I forgot my password", difficulty: "hard", example: "I forgot my password and can't log in to my important email account", exampleTranslation: "Zapomniałem hasła i nie mogę zalogować się na moje ważne konto email" },
      { id: "comp15", polish: "Muszę to zapisać", english: "I need to save this", difficulty: "hard", example: "I urgently need to save this document before the computer crashes again completely", exampleTranslation: "Muszę pilnie zapisać ten dokument zanim komputer się znowu całkowicie zawiedzie" }
    ]
  },

  hobbies_leisure: {
    name: "Hobby i czas wolny",
    description: "Hobbies and free time",
    icon: Heart,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "hob1", polish: "Hobby", english: "Hobby", difficulty: "easy", example: "My favorite hobby is photography and I practice it every weekend regularly", exampleTranslation: "Moim ulubionym hobby jest fotografia i praktykuję je każdy weekend regularnie" },
      { id: "hob2", polish: "Zainteresowania", english: "Interests", difficulty: "easy", example: "We share many common interests including music, books and outdoor activities", exampleTranslation: "Dzielimy wiele wspólnych zainteresowań włączając muzykę, książki i aktywności na zewnątrz" },
      { id: "hob3", polish: "Malować", english: "To paint", difficulty: "easy", example: "I love to paint landscapes in my free time on relaxing weekends", exampleTranslation: "Uwielbiam malować krajobrazy w moim wolnym czasie w relaksujące weekendy" },
      { id: "hob4", polish: "Rysować", english: "To draw", difficulty: "easy", example: "My daughter likes to draw pictures of animals and flowers in her notebook", exampleTranslation: "Moja córka lubi rysować obrazki zwierząt i kwiatów w swoim zeszycie" },
      { id: "hob5", polish: "Zbierać", english: "To collect", difficulty: "easy", example: "I collect old stamps from different countries around the world as a hobby", exampleTranslation: "Zbieram stare znaczki z różnych krajów na całym świecie jako hobby" },
      { id: "hob6", polish: "Kolekcja", english: "Collection", difficulty: "easy", example: "My coin collection includes rare pieces from many different historical periods", exampleTranslation: "Moja kolekcja monet zawiera rzadkie egzemplarze z wielu różnych okresów historycznych" },
      { id: "hob7", polish: "Majsterkowanie", english: "DIY", difficulty: "medium", example: "I enjoy DIY projects and making things with my own hands at home", exampleTranslation: "Lubię projekty majsterkowania i robienie rzeczy własnymi rękami w domu" },
      { id: "hob8", polish: "Haftować", english: "To embroider", difficulty: "medium", example: "My grandmother taught me to embroider beautiful patterns on fabric pieces", exampleTranslation: "Moja babcia nauczyła mnie haftować piękne wzory na kawałkach materiału" },
      { id: "hob9", polish: "Układanka", english: "Puzzle", difficulty: "medium", example: "Solving thousand-piece puzzles is my favorite relaxing evening activity at home", exampleTranslation: "Układanie układanek tysięcy elementów to moja ulubiona relaksująca wieczorna aktywność w domu" },
      { id: "hob10", polish: "Origami", english: "Origami", difficulty: "medium", example: "I learned origami paper folding techniques from watching online tutorial videos", exampleTranslation: "Nauczyłem się technik składania papieru origami oglądając tutoriale video online" },
      { id: "hob11", polish: "Szydełkować", english: "To crochet", difficulty: "medium", example: "My aunt loves to crochet warm blankets and scarves for family members", exampleTranslation: "Moja ciotka uwielbia szydełkować ciepłe koce i szaliki dla członków rodziny" },
      { id: "hob12", polish: "Rozrywka", english: "Entertainment", difficulty: "medium", example: "Reading books is my favorite form of entertainment during long winter evenings", exampleTranslation: "Czytanie książek jest moją ulubioną formą rozrywki podczas długich zimowych wieczorów" },
      { id: "hob13", polish: "Jakie masz hobby?", english: "What are your hobbies?", difficulty: "hard", example: "What are your favorite hobbies and what do you enjoy doing in free time?", exampleTranslation: "Jakie masz ulubione hobby i co lubisz robić w wolnym czasie?" },
      { id: "hob14", polish: "Uwielbiam to robić", english: "I love doing this", difficulty: "hard", example: "I absolutely love doing this activity and it helps me relax after stressful days", exampleTranslation: "Uwielbiam to robić i to pomaga mi się zrelaksować po stresujących dniach" },
      { id: "hob15", polish: "To moja pasja", english: "This is my passion", difficulty: "hard", example: "Photography is truly my passion and I could spend hours perfecting my craft daily", exampleTranslation: "Fotografia jest naprawdę moją pasją i mógłbym spędzać godziny doskonaląc swoje rzemiosło codziennie" }
    ]
  },

  emotions_reactions: {
    name: "Emocje i reakcje",
    description: "Emotions and reactions",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "emo1", polish: "Emocje", english: "Emotions", difficulty: "easy", example: "It's important to express your emotions openly and honestly with loved ones", exampleTranslation: "Ważne jest aby wyrażać swoje emocje otwarcie i szczerze z bliskimi osobami" },
      { id: "emo2", polish: "Śmiech", english: "Laughter", difficulty: "easy", example: "Laughter is the best medicine and makes everyone feel happier immediately", exampleTranslation: "Śmiech jest najlepszym lekarstwem i sprawia że wszyscy czują się szczęśliwsi natychmiast" },
      { id: "emo3", polish: "Płacz", english: "Cry", difficulty: "easy", example: "Don't be ashamed to cry when you're sad or feeling overwhelmed emotionally", exampleTranslation: "Nie wstydź się płakać gdy jesteś smutny lub czujesz się emocjonalnie przytłoczony" },
      { id: "emo4", polish: "Uśmiech", english: "Smile", difficulty: "easy", example: "A warm genuine smile can brighten someone's difficult day instantly and beautifully", exampleTranslation: "Ciepły szczery uśmiech może rozjaśnić komuś trudny dzień natychmiast i pięknie" },
      { id: "emo5", polish: "Zaskoczenie", english: "Surprise", difficulty: "easy", example: "His sudden arrival was a wonderful surprise for the entire family yesterday", exampleTranslation: "Jego nagłe przybycie było wspaniałym zaskoczeniem dla całej rodziny wczoraj" },
      { id: "emo6", polish: "Rozczarowanie", english: "Disappointment", difficulty: "easy", example: "I felt deep disappointment when the concert was cancelled at the last minute", exampleTranslation: "Poczułem głębokie rozczarowanie gdy koncert został odwołany w ostatniej chwili" },
      { id: "emo7", polish: "Zdenerwowanie", english: "Frustration", difficulty: "medium", example: "I felt frustration when the computer crashed and I lost my important work", exampleTranslation: "Poczułem zdenerwowanie gdy komputer się zawiesił i straciłem moją ważną pracę" },
      { id: "emo8", polish: "Ekscytacja", english: "Excitement", difficulty: "medium", example: "I can't contain my excitement about the upcoming vacation trip abroad next month", exampleTranslation: "Nie mogę powstrzymać mojej ekscytacji związanej z nadchodzącą podróżą wakacyjną za granicę w przyszłym miesiącu" },
      { id: "emo9", polish: "Nuda", english: "Boredom", difficulty: "medium", example: "I felt terrible boredom during the long boring meeting this afternoon", exampleTranslation: "Poczułem okropną nudę podczas długiego nudnego spotkania tego popołudnia" },
      { id: "emo10", polish: "Wdzięczność", english: "Gratitude", difficulty: "medium", example: "I feel deep gratitude for all the help and support from my family", exampleTranslation: "Czuję głęboką wdzięczność za całą pomoc i wsparcie od mojej rodziny" },
      { id: "emo11", polish: "Nostalgia", english: "Nostalgia", difficulty: "medium", example: "Old photos bring back feelings of nostalgia for my childhood days in the village", exampleTranslation: "Stare zdjęcia przywołują uczucia nostalgii za moimi dniami dzieciństwa we wsi" },
      { id: "emo12", polish: "Zazdrość", english: "Jealousy", difficulty: "medium", example: "Jealousy is a destructive emotion that damages relationships and brings unhappiness to everyone", exampleTranslation: "Zazdrość jest destruktywną emocją która niszczy relacje i przynosi nieszczęście wszystkim" },
      { id: "emo13", polish: "Jestem podekscytowany", english: "I'm excited", difficulty: "hard", example: "I'm so excited about starting my new job next month in the new company!", exampleTranslation: "Jestem tak podekscytowany rozpoczęciem mojej nowej pracy w przyszłym miesiącu w nowej firmie!" },
      { id: "emo14", polish: "To mnie uszczęśliwia", english: "This makes me happy", difficulty: "hard", example: "Spending time with my family truly makes me happy and fulfilled inside", exampleTranslation: "Spędzanie czasu z moją rodziną naprawdę mnie uszczęśliwia i wypełnia wewnętrznie" },
      { id: "emo15", polish: "Czuję się dziwnie", english: "I feel strange", difficulty: "hard", example: "I feel strange and anxious about this situation but can't explain why exactly", exampleTranslation: "Czuję się dziwnie i niespokojnie o tej sytuacji ale nie potrafię wyjaśnić dlaczego dokładnie" }
    ]
  },

  seasons_months: {
    name: "Pory roku i miesiące",
    description: "Seasons and months",
    icon: ThermometerSun,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { id: "seas1", polish: "Wiosna", english: "Spring", difficulty: "easy", example: "Spring is my favorite season when flowers bloom and nature awakens beautifully", exampleTranslation: "Wiosna jest moją ulubioną porą roku gdy kwiaty kwitną i przyroda budzi się pięknie" },
      { id: "seas2", polish: "Lato", english: "Summer", difficulty: "easy", example: "We go to the beach every summer to enjoy the sun and warm weather", exampleTranslation: "Jeździmy na plażę każdego lata aby cieszyć się słońcem i ciepłą pogodą" },
      { id: "seas3", polish: "Jesień", english: "Autumn", difficulty: "easy", example: "Autumn leaves are falling from the trees in beautiful golden and red colors", exampleTranslation: "Jesienne liście spadają z drzew w pięknych złotych i czerwonych kolorach" },
      { id: "seas4", polish: "Zima", english: "Winter", difficulty: "easy", example: "Winter is cold and snowy but perfect for skiing in the mountains", exampleTranslation: "Zima jest zimna i śnieżna ale idealna do jazdy na nartach w górach" },
      { id: "seas5", polish: "Styczeń", english: "January", difficulty: "easy", example: "January is the coldest month of the year in our northern region", exampleTranslation: "Styczeń jest najzimniejszym miesiącem roku w naszym północnym regionie" },
      { id: "seas6", polish: "Kwiecień", english: "April", difficulty: "easy", example: "April brings warmer weather and the first beautiful spring flowers bloom", exampleTranslation: "Kwiecień przynosi cieplejszą pogodę i kwitną pierwsze piękne wiosenne kwiaty" },
      { id: "seas7", polish: "Lipiec", english: "July", difficulty: "medium", example: "July is the hottest summer month and perfect for beach vacations abroad", exampleTranslation: "Lipiec jest najgorętszym letnim miesiącem i idealnym na plażowe wakacje za granicą" },
      { id: "seas8", polish: "Październik", english: "October", difficulty: "medium", example: "October is a beautiful autumn month with colorful leaves falling from trees", exampleTranslation: "Październik jest pięknym jesiennym miesiącem z kolorowymi liśćmi spadającymi z drzew" },
      { id: "seas9", polish: "Grudzień", english: "December", difficulty: "medium", example: "December is filled with Christmas celebrations and family gatherings at home", exampleTranslation: "Grudzień jest wypełniony świętami Bożego Narodzenia i rodzinnymi spotkaniami w domu" },
      { id: "seas10", polish: "Pora roku", english: "Season", difficulty: "medium", example: "What is your favorite season of the year and why do you like it?", exampleTranslation: "Jaka jest twoja ulubiona pora roku i dlaczego ją lubisz?" },
      { id: "seas11", polish: "Miesiąc", english: "Month", difficulty: "medium", example: "This month has been very busy with work projects and family commitments", exampleTranslation: "Ten miesiąc był bardzo pracowity z projektami pracy i zobowiązaniami rodzinnymi" },
      { id: "seas12", polish: "Równonoc", english: "Equinox", difficulty: "medium", example: "The spring equinox occurs in March when day and night are equal length", exampleTranslation: "Równonoc wiosenna występuje w marcu gdy dzień i noc są równej długości" },
      { id: "seas13", polish: "Jaka jest twoja ulubiona pora roku?", english: "What's your favorite season?", difficulty: "hard", example: "What's your favorite season of the year and what do you like to do then?", exampleTranslation: "Jaka jest twoja ulubiona pora roku i co lubisz wtedy robić?" },
      { id: "seas14", polish: "Kocham lato", english: "I love summer", difficulty: "hard", example: "I absolutely love summer because of the warm weather and long sunny days!", exampleTranslation: "Kocham lato z powodu ciepłej pogody i długich słonecznych dni!" },
      { id: "seas15", polish: "Za miesiąc", english: "In a month", difficulty: "hard", example: "In exactly one month we're going on our dream vacation to tropical paradise!", exampleTranslation: "Za dokładnie miesiąc jedziemy na nasze wymarzone wakacje do tropikalnego raju!" }
    ]
  },

  social_relationships: {
    name: "Stosunki społeczne",
    description: "Social relationships",
    icon: Users,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "soc1", polish: "Relacja", english: "Relationship", difficulty: "easy", example: "We have a very strong and healthy relationship based on mutual trust", exampleTranslation: "Mamy bardzo silną i zdrową relację opartą na wzajemnym zaufaniu" },
      { id: "soc2", polish: "Przyjaźń", english: "Friendship", difficulty: "easy", example: "True friendship lasts forever through good times and difficult challenging moments", exampleTranslation: "Prawdziwa przyjaźń trwa wiecznie przez dobre czasy i trudne wymagające momenty" },
      { id: "soc3", polish: "Miłość", english: "Love", difficulty: "easy", example: "Love is the most powerful emotion that connects people deeply together", exampleTranslation: "Miłość jest najpotężniejszą emocją która łączy ludzi głęboko razem" },
      { id: "soc4", polish: "Zaufanie", english: "Trust", difficulty: "easy", example: "Trust is the foundation of every successful and lasting relationship between people", exampleTranslation: "Zaufanie jest fundamentem każdej udanej i trwałej relacji między ludźmi" },
      { id: "soc5", polish: "Szacunek", english: "Respect", difficulty: "easy", example: "Mutual respect is essential for maintaining healthy relationships with everyone around us", exampleTranslation: "Wzajemny szacunek jest niezbędny do utrzymywania zdrowych relacji z wszystkimi wokół nas" },
      { id: "soc6", polish: "Wsparcie", english: "Support", difficulty: "easy", example: "I can always count on my family's support during difficult times in life", exampleTranslation: "Zawsze mogę liczyć na wsparcie mojej rodziny podczas trudnych czasów w życiu" },
      { id: "soc7", polish: "Lojalność", english: "Loyalty", difficulty: "medium", example: "Loyalty to friends and family is one of the most important values in life", exampleTranslation: "Lojalność wobec przyjaciół i rodziny jest jedną z najważniejszych wartości w życiu" },
      { id: "soc8", polish: "Kłótnia", english: "Argument", difficulty: "medium", example: "We had a small argument but we quickly resolved it through honest communication", exampleTranslation: "Mieliśmy małą kłótnię ale szybko ją rozwiązaliśmy przez szczerą komunikację" },
      { id: "soc9", polish: "Pojednanie", english: "Reconciliation", difficulty: "medium", example: "After the argument, their reconciliation was emotional and brought them closer together", exampleTranslation: "Po kłótni ich pojednanie było emocjonalne i zbliżyło ich do siebie" },
      { id: "soc10", polish: "Zazdrość", english: "Jealousy", difficulty: "medium", example: "Jealousy can destroy even the strongest relationships if not addressed properly", exampleTranslation: "Zazdrość może zniszczyć nawet najsilniejsze relacje jeśli nie jest odpowiednio rozwiązana" },
      { id: "soc11", polish: "Kompromis", english: "Compromise", difficulty: "medium", example: "Finding a good compromise is important for resolving conflicts peacefully together", exampleTranslation: "Znalezienie dobrego kompromisu jest ważne dla pokojowego rozwiązywania konfliktów razem" },
      { id: "soc12", polish: "Zrozumienie", english: "Understanding", difficulty: "medium", example: "Mutual understanding and empathy are keys to successful communication with others", exampleTranslation: "Wzajemne zrozumienie i empatia są kluczami do udanej komunikacji z innymi" },
      { id: "soc13", polish: "Pokłóciliśmy się", english: "We had a fight", difficulty: "hard", example: "We had a serious fight yesterday but I think we can work it out together", exampleTranslation: "Pokłóciliśmy się poważnie wczoraj ale myślę że możemy to wypracować razem" },
      { id: "soc14", polish: "Przepraszam", english: "I'm sorry", difficulty: "hard", example: "I'm truly sorry for what I said and I didn't mean to hurt your feelings", exampleTranslation: "Naprawdę przepraszam za to co powiedziałem i nie chciałem zranić twoich uczuć" },
      { id: "soc15", polish: "Pogódźmy się", english: "Let's make up", difficulty: "hard", example: "Let's make up and forget about this silly argument that doesn't really matter", exampleTranslation: "Pogódźmy się i zapomnijmy o tej głupiej kłótni która tak naprawdę nie ma znaczenia" }
    ]
  }
};