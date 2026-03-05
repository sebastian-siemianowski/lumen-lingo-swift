
/**
 * POLISH → ENGLISH FLASHCARDS - PART 6
 * 
 * Native Language: Polish (Polski)
 * Target Language: English
 * 
 * This file contains additional flashcard categories (69-78).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Palette,
  User,
  FileText,
  Hammer,
  Clock,
  Smile,
  CloudRain,
  Wrench,
  Scale,
  Mountain,
  Utensils, // Added for cooking_actions
  Bus,      // Added for transportation_travel
  Heart     // Added for family_relationships
} from "lucide-react";

export const flashcardsCategories_part6 = {
  colors_art: {
    name: "Kolory i sztuka",
    description: "Colors and art",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "col1", polish: "Kolor", english: "Color", difficulty: "easy", example: "What is your favorite color for painting walls in the house?", exampleTranslation: "Jaki jest twój ulubiony kolor do malowania ścian w domu?" },
      { id: "col2", polish: "Czerwony", english: "Red", difficulty: "easy", example: "The red rose in the garden is blooming beautifully this spring", exampleTranslation: "Czerwona róża w ogrodzie kwitnie pięknie tej wiosny" },
      { id: "col3", polish: "Niebieski", english: "Blue", difficulty: "easy", example: "The blue sky is clear and beautiful on this sunny day", exampleTranslation: "Niebieskie niebo jest czyste i piękne w ten słoneczny dzień" },
      { id: "col4", polish: "Zielony", english: "Green", difficulty: "easy", example: "Green grass covers the entire lawn in our backyard garden", exampleTranslation: "Zielona trawa pokrywa cały trawnik w naszym ogrodzie" },
      { id: "col5", polish: "Żółty", english: "Yellow", difficulty: "easy", example: "Yellow flowers are blooming along the path in the park", exampleTranslation: "Żółte kwiaty kwitną wzdłuż ścieżki w parku" },
      { id: "col6", polish: "Biały", english: "White", difficulty: "easy", example: "White snow covers everything during the cold winter months", exampleTranslation: "Biały śnieg pokrywa wszystko podczas zimnych zimowych miesięcy" },
      { id: "col7", polish: "Czarny", english: "Black", difficulty: "medium", example: "I bought a new black jacket for the formal business meeting", exampleTranslation: "Kupiłem nową czarną kurtkę na formalne spotkanie biznesowe" },
      { id: "col8", polish: "Różowy", english: "Pink", difficulty: "medium", example: "The pink sunset painted the sky with beautiful vibrant colors tonight", exampleTranslation: "Różowy zachód słońca pomalował niebo pięknymi żywymi kolorami dziś wieczorem" },
      { id: "col9", polish: "Fioletowy", english: "Purple", difficulty: "medium", example: "She wore a beautiful purple dress to the wedding ceremony yesterday", exampleTranslation: "Miała na sobie piękną fioletową sukienkę na ceremonii ślubnej wczoraj" },
      { id: "col10", polish: "Pomarańczowy", english: "Orange", difficulty: "medium", example: "The orange autumn leaves are falling from the trees in the wind", exampleTranslation: "Pomarańczowe jesienne liście spadają z drzew na wietrze" },
      { id: "col11", polish: "Szary", english: "Gray", difficulty: "medium", example: "The gray clouds in the sky suggest that rain is coming soon", exampleTranslation: "Szare chmury na niebie sugerują że deszcz nadchodzi wkrótce" },
      { id: "col12", polish: "Brązowy", english: "Brown", difficulty: "medium", example: "The brown wooden table is made from solid oak from the forest", exampleTranslation: "Brązowy drewniany stół jest wykonany z litego dębu z lasu" },
      { id: "col13", polish: "Jaki to kolor?", english: "What color is this?", difficulty: "hard", example: "What color is this beautiful painting in the museum gallery?", exampleTranslation: "Jaki to kolor tego pięknego obrazu w galerii muzeum?" },
      { id: "col14", polish: "Lubię jasne kolory", english: "I like bright colors", difficulty: "hard", example: "I like bright and vibrant colors for decorating my living room", exampleTranslation: "Lubię jasne i żywe kolory do dekorowania mojego salonu" },
      { id: "col15", polish: "To pasuje kolorystycznie", english: "The colors match", difficulty: "hard", example: "The colors match perfectly and create a harmonious atmosphere in the room", exampleTranslation: "To pasuje kolorystycznie idealnie i tworzy harmonijną atmosferę w pokoju" }
    ]
  },

  body_health: {
    name: "Części ciała i zdrowie",
    description: "Body parts and health",
    icon: User,
    color: "from-rose-500 to-red-600",
    level: "beginner",
    words: [
      { id: "body1", polish: "Głowa", english: "Head", difficulty: "easy", example: "My head hurts after working at the computer for many hours", exampleTranslation: "Boli mnie głowa po pracy przy komputerze przez wiele godzin" },
      { id: "body2", polish: "Oczy", english: "Eyes", difficulty: "easy", example: "I have blue eyes just like my mother and grandmother", exampleTranslation: "Mam niebieskie oczy tak jak moja mama i babcia" },
      { id: "body3", polish: "Nos", english: "Nose", difficulty: "easy", example: "My nose is running because I caught a cold yesterday", exampleTranslation: "Leci mi z nosa bo przeziębiłem się wczoraj" },
      { id: "body4", polish: "Uszy", english: "Ears", difficulty: "easy", example: "My ears are sensitive to loud noises and music at concerts", exampleTranslation: "Moje uszy są wrażliwe na głośne hałasy i muzykę na koncertach" },
      { id: "body5", polish: "Usta", english: "Mouth", difficulty: "easy", example: "Open your mouth wide so the dentist can check your teeth", exampleTranslation: "Otwórz szeroko usta żeby dentysta mógł sprawdzić zęby" },
      { id: "body6", polish: "Ręka", english: "Hand", difficulty: "easy", example: "I write with my right hand and eat with my left hand", exampleTranslation: "Piszę prawą ręką a jem lewą ręką" },
      { id: "body7", polish: "Noga", english: "Leg", difficulty: "medium", example: "My leg hurts from running too much during marathon training yesterday", exampleTranslation: "Boli mnie noga od zbyt dużego biegania podczas treningu maratońskiego wczoraj" },
      { id: "body8", polish: "Serce", english: "Heart", difficulty: "medium", example: "Exercise is good for your heart and overall cardiovascular health", exampleTranslation: "Ćwiczenia są dobre dla serca i ogólnego zdrowia układu krążenia" },
      { id: "body9", polish: "Żołądek", english: "Stomach", difficulty: "medium", example: "My stomach hurts because I ate too much at the dinner party", exampleTranslation: "Boli mnie żołądek bo zjadłem za dużo na przyjęciu obiadowym" },
      { id: "body10", polish: "Plecy", english: "Back", difficulty: "medium", example: "My back hurts from sitting at the desk all day without breaks", exampleTranslation: "Bolą mnie plecy od siedzenia przy biurku cały dzień bez przerw" },
      { id: "body11", polish: "Palec", english: "Finger", difficulty: "medium", example: "I cut my finger while chopping vegetables for tonight's dinner", exampleTranslation: "Skaleczałem palec podczas krojenia warzyw na dzisiejszą kolację" },
      { id: "body12", polish: "Kolano", english: "Knee", difficulty: "medium", example: "I injured my knee playing football and now it needs rest", exampleTranslation: "Zraniłem kolano grając w piłkę nożną i teraz wymaga odpoczynku" },
      { id: "body13", polish: "Boli mnie głowa", english: "I have a headache", difficulty: "hard", example: "I have a terrible headache and I need to take some medicine now", exampleTranslation: "Okropnie boli mnie głowa i muszę wziąć jakiś lek teraz" },
      { id: "body14", polish: "Zraniłem się", english: "I hurt myself", difficulty: "hard", example: "I accidentally hurt myself while doing repairs in the garage yesterday", exampleTranslation: "Przypadkowo zraniłem się podczas robienia napraw w garażu wczoraj" },
      { id: "body15", polish: "Czuję się słabo", english: "I feel weak", difficulty: "hard", example: "I feel very weak and dizzy so I should probably see a doctor", exampleTranslation: "Czuję się bardzo słabo i zawroty głowy więc powinienem prawdopodobnie zobaczyć lekarza" }
    ]
  },

  documents_legal: {
    name: "Dokumenty i sprawy urzędowe",
    description: "Documents and legal",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { id: "doc1", polish: "Dokument", english: "Document", difficulty: "easy", example: "I need to sign this important document before the deadline tomorrow", exampleTranslation: "Muszę podpisać ten ważny dokument przed terminem jutro" },
      { id: "doc2", polish: "Umowa", english: "Contract", difficulty: "easy", example: "The employment contract specifies all the terms and conditions clearly", exampleTranslation: "Umowa o pracę określa wszystkie warunki jasno" },
      { id: "doc3", polish: "Podpis", english: "Signature", difficulty: "easy", example: "Please put your signature at the bottom of this form here", exampleTranslation: "Proszę złożyć podpis na dole tego formularza tutaj" },
      { id: "doc4", polish: "Formularz", english: "Form", difficulty: "easy", example: "Fill out this application form carefully with all required information", exampleTranslation: "Wypełnij ten formularz aplikacyjny starannie ze wszystkimi wymaganymi informacjami" },
      { id: "doc5", polish: "Dowód osobisty", english: "ID card", difficulty: "easy", example: "I always carry my ID card with me wherever I go daily", exampleTranslation: "Zawsze noszę dowód osobisty ze sobą gdziekolwiek idę codziennie" },
      { id: "doc6", polish: "Paszport", english: "Passport", difficulty: "easy", example: "My passport expires next year so I need to renew it soon", exampleTranslation: "Mój paszport wygasa w przyszłym roku więc muszę go odnowić wkrótce" },
      { id: "doc7", polish: "Świadectwo", english: "Certificate", difficulty: "medium", example: "I received a certificate of completion after finishing the language course", exampleTranslation: "Otrzymałem świadectwo ukończenia po skończeniu kursu językowego" },
      { id: "doc8", polish: "Zaświadczenie", english: "Declaration", difficulty: "medium", example: "I need a medical declaration from the doctor for work purposes", exampleTranslation: "Potrzebuję zaświadczenia lekarskiego od doktora do celów służbowych" },
      { id: "doc9", polish: "Wniosek", english: "Application", difficulty: "medium", example: "I submitted my application for the new job position last Monday", exampleTranslation: "Złożyłem wniosek o nową posadę w zeszły poniedziałek" },
      { id: "doc10", polish: "Prawo", english: "Law", difficulty: "medium", example: "Everyone must obey the law regardless of their social position", exampleTranslation: "Każdy musi przestrzegać prawa bez względu na pozycję społeczną" },
      { id: "doc11", polish: "Prawnik", english: "Lawyer", difficulty: "medium", example: "I need to consult with a lawyer about this complicated legal matter", exampleTranslation: "Muszę skonsultować się z prawnikiem w tej skomplikowanej sprawie prawnej" },
      { id: "doc12", polish: "Sąd", english: "Court", difficulty: "medium", example: "The court hearing is scheduled for next Thursday morning at ten", exampleTranslation: "Rozprawa sądowa jest zaplanowana na przyszły czwartek rano o dziesiątej" },
      { id: "doc13", polish: "Muszę to podpisać", english: "I need to sign this", difficulty: "hard", example: "I need to carefully read and sign this contract before the deadline", exampleTranslation: "Muszę uważnie przeczytać i podpisać tę umowę przed terminem" },
      { id: "doc14", polish: "Gdzie złożyć wniosek?", english: "Where to submit the application?", difficulty: "hard", example: "Where should I submit this application form for the visa process?", exampleTranslation: "Gdzie powinienem złożyć ten wniosek o wizę?" },
      { id: "doc15", polish: "To wymaga notariusza", english: "This requires a notary", difficulty: "hard", example: "This important legal document requires a notary's official stamp and signature", exampleTranslation: "Ten ważny dokument prawny wymaga pieczęci i podpisu notariusza" }
    ]
  },

  repairs_maintenance: {
    name: "Naprawy i konserwacja",
    description: "Repairs and fixing",
    icon: Hammer,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "rep1", polish: "Naprawiać", english: "To repair", difficulty: "easy", example: "I need to repair my broken bicycle before the weekend trip", exampleTranslation: "Muszę naprawić mój zepsuty rower przed weekendową wycieczką" },
      { id: "rep2", polish: "Zepsuty", english: "Broken", difficulty: "easy", example: "My phone screen is broken and needs to be replaced immediately", exampleTranslation: "Ekran mojego telefonu jest zepsuty i wymaga natychmiastowej wymiany" },
      { id: "rep3", polish: "Narzędzie", english: "Tool", difficulty: "easy", example: "I keep all my tools organized in the garage workshop area", exampleTranslation: "Trzymam wszystkie narzędzia zorganizowane w warsztacie w garażu" },
      { id: "rep4", polish: "Młotek", english: "Hammer", difficulty: "easy", example: "I use the hammer to drive nails into the wooden wall", exampleTranslation: "Używam młotka do wbijania gwoździ w drewnianą ścianę" },
      { id: "rep5", polish: "Śrubokręt", english: "Screwdriver", difficulty: "easy", example: "I need a small screwdriver to fix this electronic device properly", exampleTranslation: "Potrzebuję małego śrubokręta aby naprawić to urządzenie elektroniczne właściwie" },
      { id: "rep6", polish: "Klucz", english: "Wrench", difficulty: "easy", example: "Use the wrench to tighten the bolts on the bicycle wheel", exampleTranslation: "Użyj klucza aby dokręcić śruby na kole roweru" },
      { id: "rep7", polish: "Gwóźdź", english: "Nail", difficulty: "medium", example: "I need more nails to hang these picture frames on the wall", exampleTranslation: "Potrzebuję więcej gwoździ aby powiesić te ramki na zdjęcia na ścianie" },
      { id: "rep8", polish: "Śruba", english: "Screw", difficulty: "medium", example: "Tighten all the screws carefully before using the furniture safely", exampleTranslation: "Dokręć wszystkie śruby starannie przed bezpiecznym używaniem mebli" },
      { id: "rep9", polish: "Wymienić", english: "To replace", difficulty: "medium", example: "I need to replace the old battery in my car very soon", exampleTranslation: "Muszę wymienić starą baterię w moim samochodzie bardzo wkrótce" },
      { id: "rep10", polish: "Naprawa", english: "Repair", difficulty: "medium", example: "The repair of the washing machine will cost two hundred dollars", exampleTranslation: "Naprawa pralki będzie kosztować dwieście dolarów" },
      { id: "rep11", polish: "Majsterkować", english: "To tinker", difficulty: "medium", example: "I like to tinker with old electronics in my free time at home", exampleTranslation: "Lubię majsterkować przy starej elektronice w wolnym czasie w domu" },
      { id: "rep12", polish: "Konserwacja", english: "Maintenance", difficulty: "medium", example: "Regular maintenance of the car prevents expensive repairs in the future", exampleTranslation: "Regularna konserwacja samochodu zapobiega kosztownym naprawom w przyszłości" },
      { id: "rep13", polish: "To się zepsuło", english: "It broke down", difficulty: "hard", example: "The washing machine broke down and I need to call a repairman today", exampleTranslation: "Pralka się zepsuła i muszę wezwać naprawiacza dzisiaj" },
      { id: "rep14", polish: "Potrafisz to naprawić?", english: "Can you fix this?", difficulty: "hard", example: "Can you fix this broken chair or should I buy a new one?", exampleTranslation: "Potrafisz naprawić to zepsute krzesło czy powinienem kupić nowe?" },
      { id: "rep15", polish: "Zrobię to sam", english: "I'll do it myself", difficulty: "hard", example: "I'll try to do this repair myself instead of hiring an expensive professional", exampleTranslation: "Spróbuję zrobić tę naprawę sam zamiast wynajmować drogiego fachowca" }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Time expressions",
    icon: Clock,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "time1", polish: "Teraz", english: "Now", difficulty: "easy", example: "I need to leave right now or I'll be late for work", exampleTranslation: "Muszę wyjść właśnie teraz albo spóźnię się do pracy" },
      { id: "time2", polish: "Później", english: "Later", difficulty: "easy", example: "I'll call you back later this evening when I'm free from work", exampleTranslation: "Oddzwonię do ciebie później wieczorem gdy będę wolny od pracy" },
      { id: "time3", polish: "Wcześniej", english: "Earlier", difficulty: "easy", example: "I arrived earlier than expected and had to wait thirty minutes", exampleTranslation: "Przyjechałem wcześniej niż oczekiwano i musiałem czekać trzydzieści minut" },
      { id: "time4", polish: "Zawsze", english: "Always", difficulty: "easy", example: "I always drink coffee in the morning before starting my day", exampleTranslation: "Zawsze piję kawę rano przed rozpoczęciem dnia" },
      { id: "time5", polish: "Nigdy", english: "Never", difficulty: "easy", example: "I never eat fast food because I prefer healthy home cooking", exampleTranslation: "Nigdy nie jem fast foodu bo wolę zdrowe domowe gotowanie" },
      { id: "time6", polish: "Czasami", english: "Sometimes", difficulty: "easy", example: "Sometimes I go to the cinema to watch new movies on weekends", exampleTranslation: "Czasami chodzę do kina aby obejrzeć nowe filmy w weekendy" },
      { id: "time7", polish: "Często", english: "Often", difficulty: "medium", example: "I often visit my parents on Sunday afternoons for family lunch", exampleTranslation: "Często odwiedzam rodziców w niedzielne popołudnia na rodzinny obiad" },
      { id: "time8", polish: "Rzadko", english: "Rarely", difficulty: "medium", example: "I rarely watch television because I prefer reading books instead", exampleTranslation: "Rzadko oglądam telewizję bo wolę czytać książki zamiast tego" },
      { id: "time9", polish: "Natychmiast", english: "Immediately", difficulty: "medium", example: "You need to call the doctor immediately if the symptoms get worse", exampleTranslation: "Musisz zadzwonić do lekarza natychmiast jeśli objawy się pogorszą" },
      { id: "time10", polish: "W końcu", english: "Finally", difficulty: "medium", example: "I finally finished the difficult project after working on it for months", exampleTranslation: "W końcu skończyłem trudny projekt po pracy nad nim przez miesiące" },
      { id: "time11", polish: "Niedawno", english: "Recently", difficulty: "medium", example: "I recently started learning Spanish and I'm making good progress daily", exampleTranslation: "Niedawno zacząłem uczyć się hiszpańskiego i robię dobre postępy codziennie" },
      { id: "time12", polish: "Dawno temu", english: "Long ago", difficulty: "medium", example: "This old castle was built long ago in the medieval times", exampleTranslation: "Ten stary zamek został zbudowany dawno temu w średniowieczu" },
      { id: "time13", polish: "Jak długo to trwa?", english: "How long does it take?", difficulty: "hard", example: "How long does it usually take to learn a new language fluently?", exampleTranslation: "Jak długo zwykle trwa nauka nowego języka na poziomie biegłym?" },
      { id: "time14", polish: "Od jak dawna?", english: "Since when?", difficulty: "hard", example: "Since when have you been living in this beautiful city here?", exampleTranslation: "Od jak dawna mieszkasz w tym pięknym mieście tutaj?" },
      { id: "time15", polish: "Za chwilę wrócę", english: "I'll be right back", difficulty: "hard", example: "I'll be right back in just a few minutes, please wait here", exampleTranslation: "Za chwilę wrócę za kilka minut, proszę poczekaj tutaj" }
    ]
  },

  adjectives_describing: {
    name: "Przymiotniki opisujące",
    description: "Descriptive adjectives",
    icon: Smile,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "adj1", polish: "Duży", english: "Big", difficulty: "easy", example: "We live in a big house with five bedrooms and a garden", exampleTranslation: "Mieszkamy w dużym domu z pięcioma sypialniami i ogrodem" },
      { id: "adj2", polish: "Mały", english: "Small", difficulty: "easy", example: "I have a small apartment but it's cozy and comfortable for me", exampleTranslation: "Mam małe mieszkanie ale jest przytulne i wygodne dla mnie" },
      { id: "adj3", polish: "Nowy", english: "New", difficulty: "easy", example: "I bought a new car last month at the dealership downtown", exampleTranslation: "Kupiłem nowy samochód w zeszłym miesiącu w salonie w centrum" },
      { id: "adj4", polish: "Stary", english: "Old", difficulty: "easy", example: "This old building has been here for over two hundred years", exampleTranslation: "Ten stary budynek stoi tu od ponad dwustu lat" },
      { id: "adj5", polish: "Dobry", english: "Good", difficulty: "easy", example: "This is a very good restaurant with excellent food and service", exampleTranslation: "To jest bardzo dobra restauracja z doskonałym jedzeniem i obsługą" },
      { id: "adj6", polish: "Zły", english: "Bad", difficulty: "easy", example: "The weather forecast for tomorrow is bad with heavy rain expected", exampleTranslation: "Prognoza pogody na jutro jest zła z oczekiwanymi obfitymi opadami" },
      { id: "adj7", polish: "Szybki", english: "Fast", difficulty: "medium", example: "This car is very fast and can reach high speeds on highway", exampleTranslation: "Ten samochód jest bardzo szybki i może osiągać wysokie prędkości na autostradzie" },
      { id: "adj8", polish: "Wolny", english: "Slow", difficulty: "medium", example: "The internet connection is slow today and pages take forever to load", exampleTranslation: "Połączenie internetowe jest wolne dzisiaj i strony ładują się wiecznie" },
      { id: "adj9", polish: "Silny", english: "Strong", difficulty: "medium", example: "The strong wind knocked down several trees in the park yesterday", exampleTranslation: "Silny wiatr przewrócił kilka drzew w parku wczoraj" },
      { id: "adj10", polish: "Słaby", english: "Weak", difficulty: "medium", example: "I feel weak and tired after the long illness last week", exampleTranslation: "Czuję się słaby i zmęczony po długiej chorobie w zeszłym tygodniu" },
      { id: "adj11", polish: "Głośny", english: "Loud", difficulty: "medium", example: "The music at the party was too loud for my sensitive ears", exampleTranslation: "Muzyka na imprezie była za głośna dla moich wrażliwych uszu" },
      { id: "adj12", polish: "Cichy", english: "Quiet", difficulty: "medium", example: "I prefer quiet peaceful places for reading and relaxing after work", exampleTranslation: "Wolę ciche spokojne miejsca do czytania i relaksu po pracy" },
      { id: "adj13", polish: "Jest za drogi", english: "It's too expensive", difficulty: "hard", example: "This product is way too expensive and I can't afford it right now", exampleTranslation: "Ten produkt jest o wiele za drogi i nie mogę sobie na niego pozwolić teraz" },
      { id: "adj14", polish: "To jest idealne", english: "This is perfect", difficulty: "hard", example: "This apartment is absolutely perfect for our family's needs and budget!", exampleTranslation: "To mieszkanie jest absolutnie idealne dla potrzeb naszej rodziny i budżetu!" },
      { id: "adj15", polish: "Jakie to jest?", english: "What is it like?", difficulty: "hard", example: "What is your new apartment like? Is it big and comfortable?", exampleTranslation: "Jakie jest twoje nowe mieszkanie? Czy jest duże i wygodne?" }
    ]
  },

  weather_phenomena: {
    name: "Zjawiska pogodowe",
    description: "Weather phenomena",
    icon: CloudRain,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "wea1", polish: "Pogoda", english: "Weather", difficulty: "easy", example: "The weather today is perfect for a long walk in the park", exampleTranslation: "Pogoda dzisiaj jest idealna na długi spacer w parku" },
      { id: "wea2", polish: "Deszcz", english: "Rain", difficulty: "easy", example: "Heavy rain is falling outside so don't forget your umbrella today", exampleTranslation: "Pada mocny deszcz na zewnątrz więc nie zapomnij parasola dzisiaj" },
      { id: "wea3", polish: "Śnieg", english: "Snow", difficulty: "easy", example: "Beautiful white snow is covering the entire landscape this morning", exampleTranslation: "Piękny biały śnieg pokrywa cały krajobraz dzisiejszego ranka" },
      { id: "wea4", polish: "Słońce", english: "Sun", difficulty: "easy", example: "The bright sun is shining and warming everything around us nicely", exampleTranslation: "Jasne słońce świeci i ogrzewa wszystko wokół nas miło" },
      { id: "wea5", polish: "Wiatr", english: "Wind", difficulty: "easy", example: "Strong wind is blowing from the sea bringing fresh air inland", exampleTranslation: "Silny wiatr wieje z morza przynosząc świeże powietrze w głąb lądu" },
      { id: "wea6", polish: "Burza", english: "Storm", difficulty: "easy", example: "A powerful storm with lightning is approaching from the west tonight", exampleTranslation: "Potężna burza z błyskawicami zbliża się z zachodu dziś wieczorem" },
      { id: "wea7", polish: "Grad", english: "Hail", difficulty: "medium", example: "Hail damaged many cars parked outside during yesterday's severe storm", exampleTranslation: "Grad uszkodził wiele samochodów zaparkowanych na zewnątrz podczas wczorajszej silnej burzy" },
      { id: "wea8", polish: "Mgła", english: "Fog", difficulty: "medium", example: "Dense fog makes driving very dangerous in the early morning hours", exampleTranslation: "Gęsta mgła czyni jazdę bardzo niebezpieczną we wczesnych godzinach porannych" },
      { id: "wea9", polish: "Mróz", english: "Frost", difficulty: "medium", example: "Morning frost covered all the grass and car windows this winter", exampleTranslation: "Poranny mróz pokrył całą trawę i szyby samochodów tej zimy" },
      { id: "wea10", polish: "Tęcza", english: "Rainbow", difficulty: "medium", example: "A beautiful rainbow appeared in the sky right after the rain stopped", exampleTranslation: "Piękna tęcza pojawiła się na niebie zaraz po tym jak deszcz przestał padać" },
      { id: "wea11", polish: "Tornado", english: "Tornado", difficulty: "medium", example: "The powerful tornado destroyed several buildings in the small town yesterday", exampleTranslation: "Potężne tornado zniszczyło kilka budynków w małym miasteczku wczoraj" },
      { id: "wea12", polish: "Upał", english: "Heat wave", difficulty: "medium", example: "The summer heat wave is making everyone stay indoors with air conditioning", exampleTranslation: "Letni upał sprawia że wszyscy zostają w domach z klimatyzacją" },
      { id: "wea13", polish: "Jaka będzie pogoda?", english: "What will the weather be like?", difficulty: "hard", example: "What will the weather be like this weekend for our planned picnic?", exampleTranslation: "Jaka będzie pogoda w ten weekend na nasz planowany piknik?" },
      { id: "wea14", polish: "Zapowiada się ładnie", english: "It looks nice", difficulty: "hard", example: "According to the forecast, it looks nice and sunny for tomorrow's outdoor event", exampleTranslation: "Według prognozy zapowiada się ładnie i słonecznie na jutrzejsze wydarzenie na zewnątrz" },
      { id: "wea15", polish: "Leje jak z cebra", english: "It's pouring rain", difficulty: "hard", example: "It's absolutely pouring rain outside so we should stay home today", exampleTranslation: "Leje jak z cebra na zewnątrz więc powinniśmy zostać w domu dzisiaj" }
    ]
  },

  tools_equipment: {
    name: "Narzędzia i sprzęt",
    description: "Tools and equipment",
    icon: Wrench,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "tool1", polish: "Narzędzia", english: "Tools", difficulty: "easy", example: "I keep all my tools organized neatly in the garage workshop", exampleTranslation: "Trzymam wszystkie narzędzia zorganizowane schludnie w warsztacie w garażu" },
      { id: "tool2", polish: "Piła", english: "Saw", difficulty: "easy", example: "I use the electric saw to cut wooden boards for the project", exampleTranslation: "Używam elektrycznej piły do cięcia desek drewnianych do projektu" },
      { id: "tool3", polish: "Wiertarka", english: "Drill", difficulty: "easy", example: "I need the power drill to make holes in the concrete wall", exampleTranslation: "Potrzebuję wiertarki elektrycznej aby zrobić dziury w betonowej ścianie" },
      { id: "tool4", polish: "Drabina", english: "Ladder", difficulty: "easy", example: "Use the tall ladder to reach the high shelves in the storage room", exampleTranslation: "Użyj wysokiej drabiny aby dosięgnąć wysokich półek w magazynie" },
      { id: "tool5", polish: "Wiadro", english: "Bucket", difficulty: "easy", example: "Fill the large bucket with water for washing the car outside", exampleTranslation: "Napełnij duże wiadro wodą do mycia samochodu na zewnątrz" },
      { id: "tool6", polish: "Szczotka", english: "Brush", difficulty: "easy", example: "Use a stiff brush to clean the dirty floor thoroughly and properly", exampleTranslation: "Użyj sztywnej szczotki aby dokładnie i właściwie wyczyścić brudną podłogę" },
      { id: "tool7", polish: "Szpadel", english: "Shovel", difficulty: "medium", example: "I need a shovel to dig a hole for planting the new tree", exampleTranslation: "Potrzebuję szpadla aby wykopać dziurę do posadzenia nowego drzewa" },
      { id: "tool8", polish: "Grabie", english: "Rake", difficulty: "medium", example: "I use the rake to collect fallen autumn leaves from the lawn", exampleTranslation: "Używam grabi do zbierania spadłych jesiennych liści z trawnika" },
      { id: "tool9", polish: "Sekator", english: "Pruning shears", difficulty: "medium", example: "The gardener uses pruning shears to trim the bushes and hedges neatly", exampleTranslation: "Ogrodnik używa sekatora aby przycinać krzewy i żywopłoty schludnie" },
      { id: "tool10", polish: "Poziomnica", english: "Level", difficulty: "medium", example: "Use the level tool to make sure the shelf is perfectly straight", exampleTranslation: "Użyj poziomnicy aby upewnić się że półka jest idealnie prosta" },
      { id: "tool11", polish: "Taśma miernicza", english: "Measuring tape", difficulty: "medium", example: "I need the measuring tape to check the exact dimensions of the room", exampleTranslation: "Potrzebuję taśmy mierniczej aby sprawdzić dokładne wymiary pokoju" },
      { id: "tool12", polish: "Imadło", english: "Vise", difficulty: "medium", example: "Secure the piece in the vise before cutting it with the saw", exampleTranslation: "Zabezpiecz kawałek w imadle przed cięciem go piłą" },
      { id: "tool13", polish: "Gdzie są narzędzia?", english: "Where are the tools?", difficulty: "hard", example: "Where are all the tools? I need them urgently for this repair!", exampleTranslation: "Gdzie są wszystkie narzędzia? Potrzebuję ich pilnie do tej naprawy!" },
      { id: "tool14", polish: "Pożycz mi młotek", english: "Lend me the hammer", difficulty: "hard", example: "Can you please lend me your hammer for a few minutes quickly?", exampleTranslation: "Możesz mi proszę pożyczyć twój młotek na kilka minut szybko?" },
      { id: "tool15", polish: "To wymaga specjalnego narzędzia", english: "This requires a special tool", difficulty: "hard", example: "This job requires a special professional tool that I don't have at home", exampleTranslation: "Ta praca wymaga specjalnego profesjonalnego narzędzia którego nie mam w domu" }
    ]
  },

  measurements_sizes: {
    name: "Wymiary i rozmiary",
    description: "Measurements and sizes",
    icon: Scale,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "meas1", polish: "Rozmiar", english: "Size", difficulty: "easy", example: "What size shirt do you wear for your everyday clothing needs?", exampleTranslation: "Jaki rozmiar koszuli nosisz do codziennych potrzeb odzieżowych?" },
      { id: "meas2", polish: "Długość", english: "Length", difficulty: "easy", example: "Measure the length of the room before buying new furniture pieces", exampleTranslation: "Zmierz długość pokoju przed kupowaniem nowych mebli" },
      { id: "meas3", polish: "Szerokość", english: "Width", difficulty: "easy", example: "The width of this table is perfect for our small dining room", exampleTranslation: "Szerokość tego stołu jest idealna dla naszej małej jadalni" },
      { id: "meas4", polish: "Wysokość", english: "Height", difficulty: "easy", example: "The height of the ceiling in this room is three meters exactly", exampleTranslation: "Wysokość sufitu w tym pokoju wynosi dokładnie trzy metry" },
      { id: "meas5", polish: "Waga", english: "Weight", difficulty: "easy", example: "Check the weight of the package before sending it by mail", exampleTranslation: "Sprawdź wagę paczki przed wysłaniem jej pocztą" },
      { id: "meas6", polish: "Metr", english: "Meter", difficulty: "easy", example: "The room is five meters long and three meters wide exactly", exampleTranslation: "Pokój ma pięć metrów długości i trzy metry szerokości dokładnie" },
      { id: "meas7", polish: "Centymetr", english: "Centimeter", difficulty: "medium", example: "I need exactly fifty centimeters of fabric for this sewing project", exampleTranslation: "Potrzebuję dokładnie pięćdziesięciu centymetrów materiału do tego projektu szycia" },
      { id: "meas8", polish: "Kilogram", english: "Kilogram", difficulty: "medium", example: "I bought five kilograms of apples at the farmers market today", exampleTranslation: "Kupiłem pięć kilogramów jabłek na targu rolniczym dzisiaj" },
      { id: "meas9", polish: "Gram", english: "Gram", difficulty: "medium", example: "Add exactly one hundred grams of sugar to the cake recipe mixture", exampleTranslation: "Dodaj dokładnie sto gramów cukru do mieszanki na ciasto" },
      { id: "meas10", polish: "Litr", english: "Liter", difficulty: "medium", example: "I drink about two liters of water every single day for health", exampleTranslation: "Piję około dwóch litrów wody każdego dnia dla zdrowia" },
      { id: "meas11", polish: "Mierzyć", english: "To measure", difficulty: "medium", example: "We need to measure the dimensions carefully before ordering new curtains", exampleTranslation: "Musimy zmierzyć wymiary starannie przed zamówieniem nowych zasłon" },
      { id: "meas12", polish: "Ważyć", english: "To weigh", difficulty: "medium", example: "I need to weigh myself every morning to track my fitness progress", exampleTranslation: "Muszę się ważyć każdego ranka aby śledzić postępy w fitness" },
      { id: "meas13", polish: "Ile to waży?", english: "How much does it weigh?", difficulty: "hard", example: "How much exactly does this heavy package weigh in kilograms total?", exampleTranslation: "Ile dokładnie waży ta ciężka paczka w kilogramach w sumie?" },
      { id: "meas14", polish: "To jest za duże", english: "This is too big", difficulty: "hard", example: "This shirt is way too big for me, I need a smaller size", exampleTranslation: "Ta koszula jest o wiele za duża dla mnie, potrzebuję mniejszego rozmiaru" },
      { id: "meas15", polish: "Idealny rozmiar", english: "Perfect size", difficulty: "hard", example: "This is the perfect size and fits me absolutely perfectly without alterations!", exampleTranslation: "To jest idealny rozmiar i pasuje mi absolutnie idealnie bez przeróbek!" }
    ]
  },

  directions_places: {
    name: "Kierunki i miejsca",
    description: "Directions and locations",
    icon: Mountain,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "dir1", polish: "Północ", english: "North", difficulty: "easy", example: "The city is located in the northern part of the country", exampleTranslation: "Miasto znajduje się w północnej części kraju" },
      { id: "dir2", polish: "Południe", english: "South", difficulty: "easy", example: "We're driving south to visit family for the summer vacation period", exampleTranslation: "Jedziemy na południe aby odwiedzić rodzinę na okres letnich wakacji" },
      { id: "dir3", polish: "Wschód", english: "East", difficulty: "easy", example: "The sun rises in the east every morning without fail always", exampleTranslation: "Słońce wschodzi na wschodzie każdego ranka bez wyjątku zawsze" },
      { id: "dir4", polish: "Zachód", english: "West", difficulty: "easy", example: "The mountains are located to the west of our small town", exampleTranslation: "Góry znajdują się na zachód od naszego małego miasta" },
      { id: "dir5", polish: "Góra", english: "Up", difficulty: "easy", example: "Go up the stairs to reach the second floor of the building", exampleTranslation: "Idź w górę schodami aby dotrzeć na drugie piętro budynku" },
      { id: "dir6", polish: "Dół", english: "Down", difficulty: "easy", example: "Walk down the hill carefully because the path is very steep", exampleTranslation: "Idź w dół wzgórza ostrożnie bo ścieżka jest bardzo stroma" },
      { id: "dir7", polish: "Tutaj", english: "Here", difficulty: "medium", example: "Please wait here while I go inside to get the documents", exampleTranslation: "Proszę poczekaj tutaj podczas gdy wejdę po dokumenty" },
      { id: "dir8", polish: "Tam", english: "There", difficulty: "medium", example: "The restaurant is over there on the other side of the street", exampleTranslation: "Restauracja jest tam po drugiej stronie ulicy" },
      { id: "dir9", polish: "Wszędzie", english: "Everywhere", difficulty: "medium", example: "I looked everywhere for my keys but I can't find them anywhere", exampleTranslation: "Szukałem wszędzie moich kluczy ale nie mogę ich nigdzie znaleźć" },
      { id: "dir10", polish: "Nigdzie", english: "Nowhere", difficulty: "medium", example: "I have nowhere to go this weekend so I'll stay home and relax", exampleTranslation: "Nie mam gdzie pójść w ten weekend więc zostanę w domu i odpoczywam" },
      { id: "dir11", polish: "Obok", english: "Next to", difficulty: "medium", example: "The pharmacy is located right next to the supermarket on the corner", exampleTranslation: "Apteka znajduje się tuż obok supermarketu na rogu" },
      { id: "dir12", polish: "Naprzeciwko", english: "Opposite", difficulty: "medium", example: "The bank is located directly opposite the post office building across the street", exampleTranslation: "Bank znajduje się dokładnie naprzeciwko budynku poczty po drugiej stronie ulicy" },
      { id: "dir13", polish: "Jak tam dojść?", english: "How do I get there?", difficulty: "hard", example: "How do I get there from here by public transportation most efficiently?", exampleTranslation: "Jak tam dojść stąd komunikacją publiczną najefektywniej?" },
      { id: "dir14", polish: "To niedaleko", english: "It's nearby", difficulty: "hard", example: "It's very nearby, just a short five minute walk straight ahead from here", exampleTranslation: "To jest bardzo niedaleko, tylko krótki pięciominutowy spacer prosto stąd" },
      { id: "dir15", polish: "Skręć w pierwszą ulicę", english: "Turn at the first street", difficulty: "hard", example: "Turn right at the first street and then continue walking straight for two blocks", exampleTranslation: "Skręć w prawo w pierwszą ulicę a potem idź prosto przez dwa przecznice" }
    ]
  },

  feelings_states: {
    name: "Uczucia i stany",
    description: "Feelings and states",
    icon: Smile,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "feel1", polish: "Szczęście", english: "Happiness", difficulty: "easy", example: "True happiness comes from spending quality time with loved family and friends", exampleTranslation: "Prawdziwe szczęście pochodzi ze spędzania czasu z ukochaną rodziną i przyjaciółmi" },
      { id: "feel2", polish: "Smutek", english: "Sadness", difficulty: "easy", example: "I felt deep sadness when my best friend moved to another country", exampleTranslation: "Poczułem głęboki smutek gdy mój najlepszy przyjaciel przeprowadził się do innego kraju" },
      { id: "feel3", polish: "Radość", english: "Joy", difficulty: "easy", example: "The birth of their baby brought immense joy to the entire family", exampleTranslation: "Narodziny ich dziecka przyniosły ogromną radość całej rodzinie" },
      { id: "feel4", polish: "Strach", english: "Fear", difficulty: "easy", example: "I have a fear of heights and can't stand on tall buildings", exampleTranslation: "Mam strach wysokości i nie mogę stać na wysokich budynkach" },
      { id: "feel5", polish: "Złość", english: "Anger", difficulty: "easy", example: "I felt anger when someone was rude to me without any reason", exampleTranslation: "Poczułem złość gdy ktoś był dla mnie niegrzeczny bez żadnego powodu" },
      { id: "feel6", polish: "Spokój", english: "Calmness", difficulty: "easy", example: "I find inner peace and calmness when I meditate every morning", exampleTranslation: "Znajduję wewnętrzny spokój gdy medytuję każdego ranka" },
      { id: "feel7", polish: "Niepokój", english: "Anxiety", difficulty: "medium", example: "I feel anxiety before important exams and job interviews always", exampleTranslation: "Czuję niepokój przed ważnymi egzaminami i rozmowami o pracę zawsze" },
      { id: "feel8", polish: "Ulgę", english: "Relief", difficulty: "medium", example: "I felt great relief when I heard the good news finally", exampleTranslation: "Poczułem wielką ulgę gdy usłyszałem dobre wiadomości w końcu" },
      { id: "feel9", polish: "Nadzieja", english: "Hope", difficulty: "medium", example: "Never lose hope even in the most difficult and challenging situations", exampleTranslation: "Nigdy nie trać nadziei nawet w najtrudniejszych i wymagających sytuacjach" },
      { id: "feel10", polish: "Pewność", english: "Confidence", difficulty: "medium", example: "I gained more confidence after successfully completing the challenging project", exampleTranslation: "Zyskałem więcej pewności siebie po pomyślnym ukończeniu wymagającego projektu" },
      { id: "feel11", polish: "Wątpliwość", english: "Doubt", difficulty: "medium", example: "I have doubts whether this is the right decision for my future", exampleTranslation: "Mam wątpliwości czy to jest właściwa decyzja dla mojej przyszłości" },
      { id: "feel12", polish: "Ciekawość", english: "Curiosity", difficulty: "medium", example: "Children's natural curiosity drives them to explore and learn about the world", exampleTranslation: "Naturalna ciekawość dzieci napędza je do eksplorowania i uczenia się o świecie" },
      { id: "feel13", polish: "Jak się czujesz?", english: "How are you feeling?", difficulty: "hard", example: "How are you feeling today after the difficult conversation we had yesterday?", exampleTranslation: "Jak się czujesz dzisiaj po trudnej rozmowie którą mieliśmy wczoraj?" },
      { id: "feel14", polish: "Czuję się wspaniale", english: "I feel wonderful", difficulty: "hard", example: "I feel absolutely wonderful and full of energy after the long relaxing vacation!", exampleTranslation: "Czuję się absolutnie wspaniale i pełen energii po długich relaksujących wakacjach!" },
      { id: "feel15", polish: "To mnie martwi", english: "This worries me", difficulty: "hard", example: "This situation really worries me and I don't know what to do about it", exampleTranslation: "Ta sytuacja naprawdę mnie martwi i nie wiem co z tym zrobić" }
    ]
  },

  actions_verbs: {
    name: "Czynności i czasowniki",
    description: "Common actions",
    icon: Wrench,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "act1", polish: "Robić", english: "To do", difficulty: "easy", example: "What do you usually do on Sunday mornings at home with family?", exampleTranslation: "Co zazwyczaj robisz w niedzielne poranki w domu z rodziną?" },
      { id: "act2", polish: "Brać", english: "To take", difficulty: "easy", example: "I take the bus to work every single morning at eight o'clock", exampleTranslation: "Biorę autobus do pracy każdego ranka o ósmej" },
      { id: "act3", polish: "Dawać", english: "To give", difficulty: "easy", example: "Please give me that book from the shelf when you have time", exampleTranslation: "Proszę daj mi tę książkę z półki gdy będziesz miał czas" },
      { id: "act4", polish: "Pokazywać", english: "To show", difficulty: "easy", example: "Can you show me how to use this new complicated computer program?", exampleTranslation: "Możesz pokazać mi jak używać tego nowego skomplikowanego programu komputerowego?" },
      { id: "act5", polish: "Otwierać", english: "To open", difficulty: "easy", example: "Please open the window because it's very hot in this room", exampleTranslation: "Proszę otwórz okno bo jest bardzo gorąco w tym pokoju" },
      { id: "act6", polish: "Zamykać", english: "To close", difficulty: "easy", example: "Don't forget to close and lock the door when you leave home", exampleTranslation: "Nie zapomnij zamknąć i zaryglować drzwi gdy wychodzisz z domu" },
      { id: "act7", polish: "Trzymać", english: "To hold", difficulty: "medium", example: "Can you hold this heavy box for me while I open the door?", exampleTranslation: "Możesz potrzymać to ciężkie pudło dla mnie gdy otwieram drzwi?" },
      { id: "act8", polish: "Ciągnąć", english: "To pull", difficulty: "medium", example: "Pull the door handle towards you to open it properly and safely", exampleTranslation: "Pociągnij klamkę drzwi do siebie aby je otworzyć właściwie i bezpiecznie" },
      { id: "act9", polish: "Pchać", english: "To push", difficulty: "medium", example: "Push the heavy furniture carefully to avoid damaging the wooden floor", exampleTranslation: "Pchaj ciężkie meble ostrożnie aby uniknąć uszkodzenia drewnianej podłogi" },
      { id: "act10", polish: "Podnosić", english: "To lift", difficulty: "medium", example: "Be careful when lifting heavy objects to avoid injuring your back", exampleTranslation: "Uważaj przy podnoszeniu ciężkich przedmiotów aby uniknąć zranienia pleców" },
      { id: "act11", polish: "Rzucać", english: "To throw", difficulty: "medium", example: "Don't throw trash on the street, use the garbage bins provided", exampleTranslation: "Nie rzucaj śmieci na ulicę, użyj pojemników na śmieci" },
      { id: "act12", polish: "Łapać", english: "To catch", difficulty: "medium", example: "Try to catch the ball when I throw it to you quickly", exampleTranslation: "Spróbuj złapać piłkę gdy rzucę ją do ciebie szybko" },
      { id: "act13", polish: "Co robisz?", english: "What are you doing?", difficulty: "hard", example: "What exactly are you doing right now? Can I help you with anything?", exampleTranslation: "Co dokładnie robisz teraz? Mogę ci w czymś pomóc?" },
      { id: "act14", polish: "Pomóż mi to zrobić", english: "Help me do this", difficulty: "hard", example: "Can you please help me do this difficult task because it's too much alone?", exampleTranslation: "Możesz mi proszę pomóc zrobić to trudne zadanie bo to za dużo samemu?" },
      { id: "act15", polish: "Już to zrobiłem", english: "I already did it", difficulty: "hard", example: "I already did this task yesterday evening so you don't need to worry", exampleTranslation: "Już zrobiłem to zadanie wczoraj wieczorem więc nie musisz się martwić" }
    ]
  },

  banking_finance: {
    name: "Bankowość i finanse",
    description: "Banking and finance",
    icon: Scale,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { id: "bank1", polish: "Konto", english: "Account", difficulty: "easy", example: "I opened a new savings account at the bank last week", exampleTranslation: "Otworzyłem nowe konto oszczędnościowe w banku w zeszłym tygodniu" },
      { id: "bank2", polish: "Saldo", english: "Balance", difficulty: "easy", example: "Check your account balance before making any large purchases today", exampleTranslation: "Sprawdź saldo konta przed dokonaniem dużych zakupów dzisiaj" },
      { id: "bank3", polish: "Wpłata", english: "Deposit", difficulty: "easy", example: "I made a large deposit of money into my savings account yesterday", exampleTranslation: "Zrobiłem dużą wpłatę pieniędzy na moje konto oszczędnościowe wczoraj" },
      { id: "bank4", polish: "Wypłata", english: "Withdrawal", difficulty: "easy", example: "I need to make a cash withdrawal from the ATM machine today", exampleTranslation: "Muszę zrobić wypłatę gotówki z bankomatu dzisiaj" },
      { id: "bank5", polish: "Bankomat", english: "ATM", difficulty: "easy", example: "The ATM is located outside the bank building for easy access always", exampleTranslation: "Bankomat znajduje się na zewnątrz budynku banku dla łatwego dostępu zawsze" },
      { id: "bank6", polish: "Odsetki", english: "Interest", difficulty: "easy", example: "The savings account pays good interest rates on deposited money monthly", exampleTranslation: "Konto oszczędnościowe płaci dobre odsetki od zdeponowanych pieniędzy miesięcznie" },
      { id: "bank7", polish: "Kredyt", english: "Credit", difficulty: "medium", example: "I applied for a credit card with a low interest rate at my bank", exampleTranslation: "Złożyłem wniosek o kartę kredytową z niskim oprocentowaniem w moim banku" },
      { id: "bank8", polish: "Rata", english: "Installment", difficulty: "medium", example: "I pay the monthly installment for my car loan on the first of each month", exampleTranslation: "Płacę miesięczną ratę za kredyt samochodowy pierwszego każdego miesiąca" },
      { id: "bank9", polish: "Faktura", english: "Invoice", difficulty: "medium", example: "I received the invoice for the repairs and need to pay it by Friday", exampleTranslation: "Otrzymałem fakturę za naprawy i muszę ją zapłacić do piątku" },
      { id: "bank10", polish: "Oszczędności", english: "Savings", difficulty: "medium", example: "I'm building my savings for buying a house in the next few years", exampleTranslation: "Buduję oszczędności na kupno domu w ciągu najbliższych kilku lat" },
      { id: "bank11", polish: "Inwestować", english: "To invest", difficulty: "medium", example: "I want to invest my money wisely in stocks and real estate", exampleTranslation: "Chcę mądrze inwestować moje pieniądze w akcje i nieruchomości" },
      { id: "bank12", polish: "Zadłużenie", english: "Debt", difficulty: "medium", example: "I'm working hard to pay off all my debts within this year", exampleTranslation: "Ciężko pracuję aby spłacić wszystkie zadłużenia w ciągu tego roku" },
      { id: "bank13", polish: "Chcę otworzyć konto", english: "I want to open an account", difficulty: "hard", example: "I want to open a new checking account at this bank branch today", exampleTranslation: "Chcę otworzyć nowe konto rozliczeniowe w tym oddziale banku dzisiaj" },
      { id: "bank14", polish: "Ile wynosi saldo?", english: "What's the balance?", difficulty: "hard", example: "What's my current account balance after yesterday's large transaction?", exampleTranslation: "Ile wynosi moje obecne saldo konta po wczorajszej dużej transakcji?" },
      { id: "bank15", polish: "Muszę spłacić dług", english: "I need to pay off the debt", difficulty: "hard", example: "I urgently need to pay off this debt before interest charges increase more", exampleTranslation: "Muszę pilnie spłacić ten dług zanim odsetki wzrosną jeszcze bardziej" }
    ]
  },

  household_chores: {
    name: "Prace domowe",
    description: "Household tasks",
    icon: Wrench,
    color: "from-teal-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "chor1", polish: "Obowiązek", english: "Chore", difficulty: "easy", example: "I have many household chores to do this weekend at home", exampleTranslation: "Mam wiele domowych obowiązków do zrobienia w ten weekend w domu" },
      { id: "chor2", polish: "Myć naczynia", english: "To wash dishes", difficulty: "easy", example: "I wash dishes by hand every evening after dinner at home", exampleTranslation: "Myję naczynia ręcznie każdego wieczoru po kolacji w domu" },
      { id: "chor3", polish: "Odkurzać", english: "To vacuum", difficulty: "easy", example: "I vacuum the carpets in the living room every Saturday morning", exampleTranslation: "Odkurzam dywany w salonie w każdą sobotę rano" },
      { id: "chor4", polish: "Wycierać", english: "To wipe", difficulty: "easy", example: "Please wipe the table with a damp cloth after eating meals", exampleTranslation: "Proszę wytrzyj stół wilgotną ścierką po jedzeniu posiłków" },
      { id: "chor5", polish: "Wynoszenie śmieci", english: "Taking out trash", difficulty: "easy", example: "Taking out the trash is my responsibility every evening without fail", exampleTranslation: "Wynoszenie śmieci to mój obowiązek każdego wieczoru bez wyjątku" },
      { id: "chor6", polish: "Podlewać rośliny", english: "To water plants", difficulty: "easy", example: "I water all the plants in the house every other day regularly", exampleTranslation: "Podlewam wszystkie rośliny w domu co drugi dzień regularnie" },
      { id: "chor7", polish: "Zmywać podłogę", english: "To mop the floor", difficulty: "medium", example: "I need to mop the kitchen floor because it's dirty from cooking", exampleTranslation: "Muszę zmyć podłogę w kuchni bo jest brudna od gotowania" },
      { id: "chor8", polish: "Ścielić łóżko", english: "To make the bed", difficulty: "medium", example: "I always make my bed every morning right after waking up", exampleTranslation: "Zawsze ścielę łóżko każdego ranka zaraz po przebudzeniu" },
      { id: "chor9", polish: "Układać rzeczy", english: "To organize things", difficulty: "medium", example: "I spend time organizing things in the closet every few months", exampleTranslation: "Spędzam czas układając rzeczy w szafie co kilka miesięcy" },
      { id: "chor10", polish: "Zmiana pościeli", english: "Changing sheets", difficulty: "medium", example: "Changing bed sheets is necessary once a week for good hygiene", exampleTranslation: "Zmiana pościeli jest konieczna raz w tygodniu dla dobrej higieny" },
      { id: "chor11", polish: "Mycie okien", english: "Washing windows", difficulty: "medium", example: "Washing windows takes a lot of time but makes the house look clean", exampleTranslation: "Mycie okien zabiera dużo czasu ale sprawia że dom wygląda czysto" },
      { id: "chor12", polish: "Porządki", english: "Cleaning up", difficulty: "medium", example: "We do big cleaning up in the entire house twice a year thoroughly", exampleTranslation: "Robimy wielkie porządki w całym domu dwa razy w roku dokładnie" },
      { id: "chor13", polish: "Kto sprząta?", english: "Who's cleaning?", difficulty: "hard", example: "Who's responsible for cleaning the bathroom this week according to the schedule?", exampleTranslation: "Kto jest odpowiedzialny za sprzątanie łazienki w tym tygodniu według harmonogramu?" },
      { id: "chor14", polish: "Podzielmy obowiązki", english: "Let's divide the chores", difficulty: "hard", example: "Let's divide the household chores fairly among all family members living here", exampleTranslation: "Podzielmy obowiązki domowe sprawiedliwie między wszystkich członków rodziny mieszkających tutaj" },
      { id: "chor15", polish: "Skończyłem sprzątać", english: "I finished cleaning", difficulty: "hard", example: "I finally finished cleaning the entire house and now I can rest peacefully", exampleTranslation: "Wreszcie skończyłem sprzątać cały dom i teraz mogę spokojnie odpocząć" }
    ]
  },

  quantities_amounts: {
    name: "Ilości i wielkości",
    description: "Quantities and amounts",
    icon: Scale,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "quan1", polish: "Dużo", english: "A lot", difficulty: "easy", example: "I have a lot of work to do before the weekend starts", exampleTranslation: "Mam dużo pracy do zrobienia zanim weekend się rozpocznie" },
      { id: "quan2", polish: "Mało", english: "A little", difficulty: "easy", example: "I have very little time left before the important meeting begins", exampleTranslation: "Mam bardzo mało czasu zanim ważne spotkanie się rozpocznie" },
      { id: "quan3", polish: "Więcej", english: "More", difficulty: "easy", example: "I need more sugar to make the cake sweet enough for everyone", exampleTranslation: "Potrzebuję więcej cukru aby ciasto było wystarczająco słodkie dla wszystkich" },
      { id: "quan4", polish: "Mniej", english: "Less", difficulty: "easy", example: "The doctor advised me to eat less sugar for better health", exampleTranslation: "Lekarz poradził mi jeść mniej cukru dla lepszego zdrowia" },
      { id: "quan5", polish: "Wszystko", english: "Everything", difficulty: "easy", example: "I packed everything I need for the two-week vacation trip abroad", exampleTranslation: "Spakowałem wszystko czego potrzebuję na dwutygodniowy wyjazd wakacyjny za granicę" },
      { id: "quan6", polish: "Nic", english: "Nothing", difficulty: "easy", example: "I have nothing to do this evening so I'll just watch television", exampleTranslation: "Nie mam nic do roboty dziś wieczorem więc po prostu obejrzę telewizję" },
      { id: "quan7", polish: "Kilka", english: "Several", difficulty: "medium", example: "I visited several different countries during my summer vacation travels this year", exampleTranslation: "Odwiedziłem kilka różnych krajów podczas moich letnich wakacyjnych podróży w tym roku" },
      { id: "quan8", polish: "Każdy", english: "Every", difficulty: "medium", example: "Every person deserves respect and kindness regardless of their background or status", exampleTranslation: "Każdy człowiek zasługuje na szacunek i życzliwość bez względu na pochodzenie czy status" },
      { id: "quan9", polish: "Żaden", english: "None", difficulty: "medium", example: "None of my friends could come to the party unfortunately this time", exampleTranslation: "Żaden z moich przyjaciół nie mógł przyjść na przyjęcie niestety tym razem" },
      { id: "quan10", polish: "Wystarczająco", english: "Enough", difficulty: "medium", example: "Do we have enough food for all the guests at the party tonight?", exampleTranslation: "Czy mamy wystarczająco jedzenia dla wszystkich gości na przyjęciu dziś wieczorem?" },
      { id: "quan11", polish: "Za dużo", english: "Too much", difficulty: "medium", example: "I ate too much at dinner and now I feel uncomfortably full", exampleTranslation: "Zjadłem za dużo na kolacji i teraz czuję się nieprzyjemnie pełny" },
      { id: "quan12", polish: "Za mało", english: "Too little", difficulty: "medium", example: "I slept too little last night and now I'm very tired today", exampleTranslation: "Spałem za mało zeszłej nocy i teraz jestem bardzo zmęczony dzisiaj" },
      { id: "quan13", polish: "Ile tego masz?", english: "How much do you have?", difficulty: "hard", example: "How much money do you have saved for the planned trip abroad?", exampleTranslation: "Ile pieniędzy masz zaoszczędzonych na planowaną podróż za granicę?" },
      { id: "quan14", polish: "To wystarczy", english: "That's enough", difficulty: "hard", example: "That's definitely enough sugar for the recipe, don't add any more please", exampleTranslation: "To wystarczy cukru do przepisu, nie dodawaj więcej proszę" },
      { id: "quan15", polish: "Potrzebuję więcej czasu", english: "I need more time", difficulty: "hard", example: "I need significantly more time to finish this complex project properly and well", exampleTranslation: "Potrzebuję znacznie więcej czasu aby skończyć ten złożony projekt właściwie i dobrze" }
    ]
  },

  outdoor_nature: {
    name: "Na zewnątrz i przyroda",
    description: "Outdoor and nature",
    icon: Mountain,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { id: "out1", polish: "Góra", english: "Mountain", difficulty: "easy", example: "We went hiking in the mountains during our summer vacation last year", exampleTranslation: "Chodziliśmy na wędrówki w góry podczas naszych letnich wakacji w zeszłym roku" },
      { id: "out2", polish: "Rzeka", english: "River", difficulty: "easy", example: "The river flows through the valley and into the sea eventually", exampleTranslation: "Rzeka płynie przez dolinę i wpada do morza ostatecznie" },
      { id: "out3", polish: "Jezioro", english: "Lake", difficulty: "easy", example: "We go swimming in the clear blue lake every summer weekend", exampleTranslation: "Jeździmy pływać w czystym błękitnym jeziorze każdy letni weekend" },
      { id: "out4", polish: "Plaża", english: "Beach", difficulty: "easy", example: "The sandy beach is perfect for sunbathing and playing volleyball together", exampleTranslation: "Piaszczysta plaża jest idealna do opalania się i grania w siatkówkę razem" },
      { id: "out5", polish: "Wyspa", english: "Island", difficulty: "easy", example: "We're planning to visit a tropical island for our honeymoon trip", exampleTranslation: "Planujemy odwiedzić tropikalną wyspę na naszą podróż poślubną" },
      { id: "out6", polish: "Dolina", english: "Valley", difficulty: "easy", example: "The green valley between the mountains is absolutely breathtaking to see", exampleTranslation: "Zielona dolina między górami jest absolutnie zapierająca dech w piersiach do zobaczenia" },
      { id: "out7", polish: "Wodospad", english: "Waterfall", difficulty: "medium", example: "The spectacular waterfall is the most beautiful natural attraction in this park", exampleTranslation: "Spektakularny wodospad jest najpiękniejszą naturalną atrakcją w tym parku" },
      { id: "out8", polish: "Jaskinia", english: "Cave", difficulty: "medium", example: "We explored the ancient cave with a guide during our mountain tour", exampleTranslation: "Zwiedzaliśmy starożytną jaskinię z przewodnikiem podczas naszej wycieczki górskiej" },
      { id: "out9", polish: "Szczyt", english: "Peak", difficulty: "medium", example: "We finally reached the mountain peak after five hours of difficult climbing", exampleTranslation: "Wreszcie dotarliśmy na szczyt góry po pięciu godzinach trudnej wspinaczki" },
      { id: "out10", polish: "Ścieżka", english: "Path", difficulty: "medium", example: "Follow the narrow path through the forest to reach the beautiful lake", exampleTranslation: "Podążaj wąską ścieżką przez las aby dotrzeć do pięknego jeziora" },
      { id: "out11", polish: "Pole", english: "Field", difficulty: "medium", example: "Golden wheat is growing in the large field near our village", exampleTranslation: "Złota pszenica rośnie na dużym polu niedaleko naszej wioski" },
      { id: "out12", polish: "Łąka", english: "Meadow", difficulty: "medium", example: "Beautiful wildflowers cover the entire meadow in colorful spring blooms", exampleTranslation: "Piękne dzikie kwiaty pokrywają całą łąkę kolorowymi wiosennymi kwiatami" },
      { id: "out13", polish: "Chodźmy na spacer", english: "Let's go for a walk", difficulty: "hard", example: "Let's go for a nice long walk in the forest this beautiful afternoon", exampleTranslation: "Chodźmy na miły długi spacer do lasu w to piękne popołudnie" },
      { id: "out14", polish: "Widok jest piękny", english: "The view is beautiful", difficulty: "hard", example: "The view from the mountain top is absolutely beautiful and worth the climb!", exampleTranslation: "Widok ze szczytu góry jest absolutnie piękny i wart wspinaczki!" },
      { id: "out15", polish: "To jest malownicze miejsce", english: "This is a scenic place", difficulty: "hard", example: "This is truly a scenic place perfect for photography and peaceful contemplation", exampleTranslation: "To jest naprawdę malownicze miejsce idealne do fotografii i spokojnego kontemplowania" }
    ]
  },

  cooking_actions: {
    name: "Czynności kulinarne",
    description: "Cooking actions",
    icon: Utensils, // Changed from Palette to Utensils
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cook1", polish: "Kroić", english: "To cut", difficulty: "easy", example: "I need to cut the vegetables into small pieces for the soup", exampleTranslation: "Muszę pokroić warzywa na małe kawałki do zupy" },
      { id: "cook2", polish: "Gotować", english: "To boil", difficulty: "easy", example: "Boil the water before adding the pasta for cooking dinner tonight", exampleTranslation: "Zagotuj wodę przed dodaniem makaronu do gotowania kolacji dziś wieczorem" },
      { id: "cook3", polish: "Smażyć", english: "To fry", difficulty: "easy", example: "I fry eggs in butter every morning for a quick healthy breakfast", exampleTranslation: "Smażę jajka na maśle każdego ranka na szybkie zdrowe śniadanie" },
      { id: "cook4", polish: "Piec", english: "To bake", difficulty: "easy", example: "I love to bake fresh bread at home on lazy Sunday mornings", exampleTranslation: "Uwielbiam piec świeży chleb w domu w leniwe niedzielne poranki" },
      { id: "cook5", polish: "Mieszać", english: "To stir", difficulty: "easy", example: "Stir the sauce constantly to prevent it from burning on the bottom", exampleTranslation: "Mieszaj sos ciągle aby zapobiec przypaleniu się na dnie" },
      { id: "cook6", polish: "Obierać", english: "To peel", difficulty: "easy", example: "I need to peel the potatoes before cooking them for tonight's dinner", exampleTranslation: "Muszę obrać ziemniaki przed ugotowaniem ich na dzisiejszą kolację" },
      { id: "cook7", polish: "Doprawiać", english: "To season", difficulty: "medium", example: "Season the meat with salt and pepper before putting it in the oven", exampleTranslation: "Dopraw mięso solą i pieprzem przed włożeniem go do piekarnika" },
      { id: "cook8", polish: "Dusić", english: "To stew", difficulty: "medium", example: "Stew the vegetables slowly on low heat for several hours for best flavor", exampleTranslation: "Duś warzywa powoli na małym ogniu przez kilka godzin dla najlepszego smaku" },
      { id: "cook9", polish: "Grillować", english: "To grill", difficulty: "medium", example: "We love to grill meat and vegetables outdoors during warm summer evenings", exampleTranslation: "Uwielbiamy grillować mięso i warzywa na zewnątrz podczas ciepłych letnich wieczorów" },
      { id: "cook10", polish: "Marynować", english: "To marinate", difficulty: "medium", example: "I marinate the chicken overnight in special spices for better taste tomorrow", exampleTranslation: "Marynu ję kurczaka przez noc w specjalnych przyprawach dla lepszego smaku jutro" },
      { id: "cook11", polish: "Odcedzać", english: "To drain", difficulty: "medium", example: "Drain the cooked pasta in a colander before adding the delicious sauce", exampleTranslation: "Odcedź ugotowany makaron w durszlaku przed dodaniem pysznego sosu" },
      { id: "cook12", polish: "Roztapiać", english: "To melt", difficulty: "medium", example: "Melt the butter slowly in a pan before adding other ingredients to it", exampleTranslation: "Roztop masło powoli na patelni przed dodaniem innych składników do niego" },
      { id: "cook13", polish: "Jak to przygotować?", english: "How to prepare this?", difficulty: "hard", example: "How exactly should I prepare this complicated dish according to the recipe?", exampleTranslation: "Jak dokładnie powinienem przygotować to skomplikowane danie według przepisu?" },
      { id: "cook14", polish: "To musi się gotować", english: "This needs to cook", difficulty: "hard", example: "This stew needs to cook slowly for at least three hours on low heat", exampleTranslation: "Ten gulasz musi się gotować powoli przez przynajmniej trzy godziny na małym ogniu" },
      { id: "cook15", polish: "Sprawdź czy gotowe", english: "Check if it's ready", difficulty: "hard", example: "Please check if the cake is ready by inserting a toothpick in the center", exampleTranslation: "Proszę sprawdź czy ciasto jest gotowe wkładając wykałaczkę w środek" }
    ]
  },

  basic_phrases: {
    name: "Podstawowe zwroty",
    description: "Basic phrases",
    icon: Smile,
    color: "from-green-400 to-lime-500",
    level: "beginner",
    words: [
      { id: "bp1", polish: "Cześć", english: "Hello", difficulty: "easy", example: "Cześć! Jak się masz dzisiaj?", exampleTranslation: "Hello! How are you today?" },
      { id: "bp2", polish: "Dzień dobry", english: "Good morning", difficulty: "easy", example: "Dzień dobry, miłego dnia w pracy", exampleTranslation: "Good morning, have a nice day at work" },
      { id: "bp3", polish: "Do widzenia", english: "Goodbye", difficulty: "easy", example: "Do widzenia, do zobaczenia jutro w biurze", exampleTranslation: "Goodbye, see you tomorrow at the office" },
      { id: "bp4", polish: "Proszę", english: "Please", difficulty: "easy", example: "Proszę, podaj mi sól ze stołu", exampleTranslation: "Please, pass me the salt from the table" },
      { id: "bp5", polish: "Dziękuję", english: "Thank you", difficulty: "easy", example: "Dziękuję bardzo za pomoc w zadaniu", exampleTranslation: "Thank you very much for your help with the task" },
      { id: "bp6", polish: "Przepraszam", english: "Excuse me / Sorry", difficulty: "easy", example: "Przepraszam, czy możesz mi pomóc znaleźć drogę?", exampleTranslation: "Excuse me, can you help me find the way?" },
      { id: "bp7", polish: "Tak", english: "Yes", difficulty: "medium", example: "Tak, zgadzam się z twoją propozycją", exampleTranslation: "Yes, I agree with your proposal" },
      { id: "bp8", polish: "Nie", english: "No", difficulty: "medium", example: "Nie, nie mogę przyjść na spotkanie", exampleTranslation: "No, I can't come to the meeting" },
      { id: "bp9", polish: "Może", english: "Maybe", difficulty: "medium", example: "Może pójdziemy do kina w weekend?", exampleTranslation: "Maybe we will go to the cinema on the weekend?" },
      { id: "bp10", polish: "Dobrze", english: "Good / Okay", difficulty: "medium", example: "Dobrze, spotkajmy się o piątej po południu", exampleTranslation: "Okay, let's meet at five in the afternoon" },
      { id: "bp11", polish: "Źle", english: "Bad", difficulty: "medium", example: "Czuję się źle po wczorajszej kolacji", exampleTranslation: "I feel bad after yesterday's dinner" },
      { id: "bp12", polish: "Jak się masz?", english: "How are you?", difficulty: "medium", example: "Jak się masz? Dawno się nie widzieliśmy!", exampleTranslation: "How are you? We haven't seen each other in a long time!" },
      { id: "bp13", polish: "Nie rozumiem", english: "I don't understand", difficulty: "hard", example: "Nie rozumiem tego skomplikowanego problemu", exampleTranslation: "I don't understand this complicated problem" },
      { id: "bp14", polish: "Mówię trochę po angielsku", english: "I speak a little English", difficulty: "hard", example: "Mówię tylko trochę po angielsku, proszę mów wolniej", exampleTranslation: "I only speak a little English, please speak slower" },
      { id: "bp15", polish: "Czy mówisz po polsku?", english: "Do you speak Polish?", difficulty: "hard", example: "Czy mówisz po polsku, czy potrzebujesz tłumacza?", exampleTranslation: "Do you speak Polish, or do you need a translator?" }
    ]
  },

  transportation_travel: {
    name: "Transport i podróże",
    description: "Transportation and travel",
    icon: Bus,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "tra1", polish: "Samochód", english: "Car", difficulty: "easy", example: "My new car is very fuel-efficient and comfortable for long trips", exampleTranslation: "Mój nowy samochód jest bardzo oszczędny i wygodny na długie podróże" },
      { id: "tra2", polish: "Autobus", english: "Bus", difficulty: "easy", example: "I take the bus to work every morning because it's convenient and cheap", exampleTranslation: "Jeżdżę autobusem do pracy każdego ranka bo jest wygodny i tani" },
      { id: "tra3", polish: "Pociąg", english: "Train", difficulty: "easy", example: "The train journey from Warsaw to Krakow takes about three hours", exampleTranslation: "Podróż pociągiem z Warszawy do Krakowa trwa około trzech godzin" },
      { id: "tra4", polish: "Samolot", english: "Plane", difficulty: "easy", example: "I prefer to travel by plane for international trips because it's fast", exampleTranslation: "Wolę podróżować samolotem na międzynarodowe podróże bo jest szybko" },
      { id: "tra5", polish: "Rower", english: "Bicycle", difficulty: "easy", example: "I enjoy riding my bicycle in the park on sunny weekend afternoons", exampleTranslation: "Lubię jeździć na rowerze w parku w słoneczne weekendowe popołudnia" },
      { id: "tra6", polish: "Metro", english: "Subway / Metro", difficulty: "easy", example: "The subway system in London is very efficient for commuting daily", exampleTranslation: "System metra w Londynie jest bardzo efektywny do codziennych dojazdów" },
      { id: "tra7", polish: "Bilet", english: "Ticket", difficulty: "medium", example: "I need to buy a train ticket for my trip next Tuesday morning", exampleTranslation: "Muszę kupić bilet na pociąg na moją podróż w przyszły wtorek rano" },
      { id: "tra8", polish: "Stacja", english: "Station", difficulty: "medium", example: "The train station is located in the city center near the main square", exampleTranslation: "Dworzec kolejowy znajduje się w centrum miasta niedaleko głównego placu" },
      { id: "tra9", polish: "Lotnisko", english: "Airport", difficulty: "medium", example: "We arrived at the airport two hours before our international flight", exampleTranslation: "Przyjechaliśmy na lotnisko dwie godziny przed naszym międzynarodowym lotem" },
      { id: "tra10", polish: "Podróż", english: "Journey / Trip", difficulty: "medium", example: "Our journey through the mountains was long but very scenic and memorable", exampleTranslation: "Nasza podróż przez góry była długa ale bardzo malownicza i niezapomniana" },
      { id: "tra11", polish: "Pasażer", english: "Passenger", difficulty: "medium", example: "All passengers must show their tickets before boarding the train", exampleTranslation: "Wszyscy pasażerowie muszą pokazać swoje bilety przed wejściem do pociągu" },
      { id: "tra12", polish: "Wypożyczyć", english: "To rent", difficulty: "medium", example: "We decided to rent a car for our road trip across the country", exampleTranslation: "Zdecydowaliśmy się wypożyczyć samochód na naszą podróż po kraju" },
      { id: "tra13", polish: "Gdzie jest przystanek?", english: "Where is the stop?", difficulty: "hard", example: "Excuse me, where is the nearest bus stop for the city center?", exampleTranslation: "Przepraszam, gdzie jest najbliższy przystanek autobusowy do centrum miasta?" },
      { id: "tra14", polish: "Chcę kupić bilet", english: "I want to buy a ticket", difficulty: "hard", example: "I want to buy a ticket for the next available train to Gdansk, please", exampleTranslation: "Chcę kupić bilet na następny dostępny pociąg do Gdańska, proszę" },
      { id: "tra15", polish: "Jaki jest koszt podróży?", english: "What is the cost of the trip?", difficulty: "hard", example: "What is the total cost of the trip including flights and accommodation?", exampleTranslation: "Jaki jest całkowity koszt podróży wliczając loty i zakwaterowanie?" }
    ]
  },

  family_relationships: {
    name: "Rodzina i związki",
    description: "Family and relationships",
    icon: Heart,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "fam1", polish: "Rodzina", english: "Family", difficulty: "easy", example: "I love spending quality time with my family on weekends", exampleTranslation: "Kocham spędzać wartościowy czas z moją rodziną w weekendy" },
      { id: "fam2", polish: "Matka", english: "Mother", difficulty: "easy", example: "My mother is a kind and caring person who always supports me", exampleTranslation: "Moja matka jest miłą i troskliwą osobą która zawsze mnie wspiera" },
      { id: "fam3", polish: "Ojciec", english: "Father", difficulty: "easy", example: "My father taught me how to ride a bicycle when I was young", exampleTranslation: "Mój ojciec nauczył mnie jeździć na rowerze gdy byłem młody" },
      { id: "fam4", polish: "Siostra", english: "Sister", difficulty: "easy", example: "My older sister is a talented artist and loves to paint landscapes", exampleTranslation: "Moja starsza siostra jest utalentowaną artystką i uwielbia malować pejzaże" },
      { id: "fam5", polish: "Brat", english: "Brother", difficulty: "easy", example: "My younger brother is very energetic and loves playing football", exampleTranslation: "Mój młodszy brat jest bardzo energiczny i uwielbia grać w piłkę nożną" },
      { id: "fam6", polish: "Dzieci", english: "Children", difficulty: "easy", example: "The children are playing happily in the park this sunny afternoon", exampleTranslation: "Dzieci bawią się wesoło w parku w to słoneczne popołudnie" },
      { id: "fam7", polish: "Babcia", english: "Grandmother", difficulty: "medium", example: "My grandmother bakes the best apple pie in the whole world", exampleTranslation: "Moja babcia piecze najlepsze ciasto jabłkowe na całym świecie" },
      { id: "fam8", polish: "Dziadek", english: "Grandfather", difficulty: "medium", example: "My grandfather tells amazing stories from his youth adventures", exampleTranslation: "Mój dziadek opowiada niesamowite historie ze swoich młodzieńczych przygód" },
      { id: "fam9", polish: "Wujek", english: "Uncle", difficulty: "medium", example: "My uncle lives in Canada and visits us every Christmas holiday", exampleTranslation: "Mój wujek mieszka w Kanadzie i odwiedza nas każdego Bożego Narodzenia" },
      { id: "fam10", polish: "Ciocia", english: "Aunt", difficulty: "medium", example: "My aunt gave me a beautiful handmade sweater for my birthday", exampleTranslation: "Moja ciocia dała mi piękny ręcznie robiony sweter na urodziny" },
      { id: "fam11", polish: "Krewny", english: "Relative", difficulty: "medium", example: "We have many relatives living in different cities across the country", exampleTranslation: "Mamy wielu krewnych mieszkających w różnych miastach w całym kraju" },
      { id: "fam12", polish: "Przyjaciel", english: "Friend", difficulty: "medium", example: "A true friend is someone who is always there for you in need", exampleTranslation: "Prawdziwy przyjaciel to ktoś kto zawsze jest przy tobie w potrzebie" },
      { id: "fam13", polish: "Jesteśmy rodziną", english: "We are family", difficulty: "hard", example: "No matter what, we are family and we will always support each other", exampleTranslation: "Bez względu na wszystko, jesteśmy rodziną i zawsze będziemy się wspierać" },
      { id: "fam14", polish: "Masz rodzeństwo?", english: "Do you have siblings?", difficulty: "hard", example: "Do you have any siblings, like brothers or sisters?", exampleTranslation: "Czy masz rodzeństwo, takie jak bracia czy siostry?" },
      { id: "fam15", polish: "To moja żona / mąż", english: "This is my wife / husband", difficulty: "hard", example: "Allow me to introduce, this is my wonderful wife, Anna", exampleTranslation: "Pozwólcie, że przedstawię, to moja wspaniała żona, Anna" }
    ]
  }
};
