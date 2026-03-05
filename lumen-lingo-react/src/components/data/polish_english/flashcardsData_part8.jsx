
/**
 * POLISH → ENGLISH FLASHCARDS - PART 8
 * 
 * Native Language: Polish (Polski)
 * Target Language: English
 * 
 * This file contains additional flashcard categories (89-98).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  GraduationCap,
  Briefcase,
  Stethoscope,
  Dumbbell,
  Wifi,
  Shirt,
  ChefHat,
  Building,
  Tractor,
  Globe,
  Music
} from "lucide-react";

export const flashcardsCategories_part8 = {
  school_education: {
    name: "Szkoła i edukacja",
    description: "School and education",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "sch1", polish: "Szkoła", english: "School", difficulty: "easy", example: "I go to school every weekday morning to learn new things", exampleTranslation: "Chodzę do szkoły każdego dnia powszedniego rano aby uczyć się nowych rzeczy" },
      { id: "sch2", polish: "Nauczyciel", english: "Teacher", difficulty: "easy", example: "Our teacher explains difficult concepts clearly and patiently to everyone in class", exampleTranslation: "Nasz nauczyciel wyjaśnia trudne koncepcje jasno i cierpliwie wszystkim w klasie" },
      { id: "sch3", polish: "Uczeń", english: "Student", difficulty: "easy", example: "Every student in the class must complete homework assignments on time", exampleTranslation: "Każdy uczeń w klasie musi ukończyć zadania domowe na czas" },
      { id: "sch4", polish: "Lekcja", english: "Lesson", difficulty: "easy", example: "The math lesson today was very interesting and educational for everyone", exampleTranslation: "Lekcja matematyki dzisiaj była bardzo interesująca i pouczająca dla wszystkich" },
      { id: "sch5", polish: "Egzamin", english: "Exam", difficulty: "easy", example: "I studied hard for the final exam and passed with excellent grades", exampleTranslation: "Ciężko się uczyłem na egzamin końcowy i zdałem z doskonałymi ocenami" },
      { id: "sch6", polish: "Zadanie domowe", english: "Homework", difficulty: "easy", example: "I have a lot of homework to complete tonight before going to bed", exampleTranslation: "Mam dużo zadania domowego do ukończenia dziś wieczorem przed pójściem spać" },
      { id: "sch7", polish: "Klasa", english: "Classroom", difficulty: "medium", example: "Our classroom has thirty desks and a large whiteboard on the wall", exampleTranslation: "Nasza klasa ma trzydzieści ławek i dużą tablicę na ścianie" },
      { id: "sch8", polish: "Zeszyt", english: "Notebook", difficulty: "medium", example: "I write all my notes in a special notebook for each subject separately", exampleTranslation: "Zapisuję wszystkie notatki w specjalnym zeszycie dla każdego przedmiotu osobno" },
      { id: "sch9", polish: "Podręcznik", english: "Textbook", difficulty: "medium", example: "The history textbook contains detailed information about important world events", exampleTranslation: "Podręcznik historii zawiera szczegółowe informacje o ważnych wydarzeniach światowych" },
      { id: "sch10", polish: "Świadectwo", english: "Report card", difficulty: "medium", example: "I received my report card today and my parents were proud of my grades", exampleTranslation: "Otrzymałem świadectwo dzisiaj i rodzice byli dumni z moich ocen" },
      { id: "sch11", polish: "Tablica", english: "Board", difficulty: "medium", example: "The teacher writes important formulas on the whiteboard during mathematics lessons", exampleTranslation: "Nauczyciel pisze ważne wzory na tablicy podczas lekcji matematyki" },
      { id: "sch12", polish: "Przerwa", english: "Break", difficulty: "medium", example: "Students play outside in the schoolyard during the fifteen-minute break between classes", exampleTranslation: "Uczniowie bawią się na zewnątrz na szkolnym podwórku podczas piętnastominutowej przerwy między lekcjami" },
      { id: "sch13", polish: "Muszę się uczyć", english: "I need to study", difficulty: "hard", example: "I really need to study hard for tomorrow's important chemistry exam at school", exampleTranslation: "Naprawdę muszę się ciężko uczyć na jutrzejszy ważny egzamin z chemii w szkole" },
      { id: "sch14", polish: "Zdałem egzamin", english: "I passed the exam", difficulty: "hard", example: "I passed the difficult final exam with the highest score in my entire class!", exampleTranslation: "Zdałem trudny egzamin końcowy z najwyższym wynikiem w całej mojej klasie!" },
      { id: "sch15", polish: "Co jest na lekcji?", english: "What's the lesson about?", difficulty: "hard", example: "What exactly is today's lesson about? I want to prepare properly in advance", exampleTranslation: "O czym dokładnie jest dzisiejsza lekcja? Chcę się odpowiednio przygotować wcześniej" }
    ]
  },

  professions_jobs: {
    name: "Zawody i praca",
    description: "Professions and jobs",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "prof1", polish: "Lekarz", english: "Doctor", difficulty: "easy", example: "The doctor carefully examined the patient and prescribed appropriate medication for recovery", exampleTranslation: "Lekarz dokładnie zbadał pacjenta i przepisał odpowiednie lekarstwo na powrót do zdrowia" },
      { id: "prof2", polish: "Nauczyciel", english: "Teacher", difficulty: "easy", example: "The dedicated teacher helps students learn and develop their skills every single day", exampleTranslation: "Oddany nauczyciel pomaga uczniom uczyć się i rozwijać umiejętności każdego dnia" },
      { id: "prof3", polish: "Inżynier", english: "Engineer", difficulty: "easy", example: "The engineer designs complex systems and solves difficult technical problems at work", exampleTranslation: "Inżynier projektuje złożone systemy i rozwiązuje trudne problemy techniczne w pracy" },
      { id: "prof4", polish: "Pielęgniarka", english: "Nurse", difficulty: "easy", example: "The compassionate nurse takes care of patients in the hospital day and night", exampleTranslation: "Współczująca pielęgniarka opiekuje się pacjentami w szpitalu dniem i nocą" },
      { id: "prof5", polish: "Kucharz", english: "Chef", difficulty: "easy", example: "The talented chef prepares delicious meals for guests in the restaurant kitchen daily", exampleTranslation: "Utalentowany kucharz przygotowuje pyszne posiłki dla gości w kuchni restauracji codziennie" },
      { id: "prof6", polish: "Policjant", english: "Police officer", difficulty: "easy", example: "The brave police officer protects citizens and maintains public safety in the city", exampleTranslation: "Odważny policjant chroni obywateli i utrzymuje bezpieczeństwo publiczne w mieście" },
      { id: "prof7", polish: "Kierowca", english: "Driver", difficulty: "medium", example: "The experienced bus driver safely transports passengers through the city every day", exampleTranslation: "Doświadczony kierowca autobusu bezpiecznie przewozi pasażerów przez miasto każdego dnia" },
      { id: "prof8", polish: "Sprzedawca", english: "Salesperson", difficulty: "medium", example: "The friendly salesperson helps customers find exactly what they need in the store", exampleTranslation: "Przyjazny sprzedawca pomaga klientom znaleźć dokładnie to czego potrzebują w sklepie" },
      { id: "prof9", polish: "Mechanik", english: "Mechanic", difficulty: "medium", example: "The skilled mechanic repairs broken cars and maintains vehicles in excellent working condition", exampleTranslation: "Wykwalifikowany mechanik naprawia zepsute samochody i utrzymuje pojazdy w doskonałym stanie roboczym" },
      { id: "prof10", polish: "Programista", english: "Programmer", difficulty: "medium", example: "The talented programmer creates innovative software applications for mobile devices and computers", exampleTranslation: "Utalentowany programista tworzy innowacyjne aplikacje oprogramowania dla urządzeń mobilnych i komputerów" },
      { id: "prof11", polish: "Architekt", english: "Architect", difficulty: "medium", example: "The creative architect designs beautiful modern buildings that transform city skylines completely", exampleTranslation: "Kreatywny architekt projektuje piękne nowoczesne budynki które całkowicie transformują panoramy miast" },
      { id: "prof12", polish: "Księgowy", english: "Accountant", difficulty: "medium", example: "The meticulous accountant manages financial records and prepares detailed tax reports for companies", exampleTranslation: "Skrupulatny księgowy zarządza dokumentacją finansową i przygotowuje szczegółowe raporty podatkowe dla firm" },
      { id: "prof13", polish: "Kim jesteś z zawodu?", english: "What do you do for a living?", difficulty: "hard", example: "What exactly do you do for a living? I'm curious about your profession and career", exampleTranslation: "Kim dokładnie jesteś z zawodu? Jestem ciekaw twojej profesji i kariery" },
      { id: "prof14", polish: "Pracuję jako", english: "I work as", difficulty: "hard", example: "I work as a software engineer at a large technology company in the city", exampleTranslation: "Pracuję jako inżynier oprogramowania w dużej firmie technologicznej w mieście" },
      { id: "prof15", polish: "Szukam pracy", english: "I'm looking for a job", difficulty: "hard", example: "I'm actively looking for a new job with better salary and career growth opportunities", exampleTranslation: "Szukam aktywnie nowej pracy z lepszym wynagrodzeniem i możliwościami rozwoju kariery" }
    ]
  },

  illness_medicine: {
    name: "Choroba i medycyna",
    description: "Illness and medicine",
    icon: Stethoscope,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "ill1", polish: "Choroba", english: "Illness", difficulty: "easy", example: "This serious illness requires proper medical treatment and plenty of rest at home", exampleTranslation: "Ta poważna choroba wymaga odpowiedniego leczenia medycznego i dużo odpoczynku w domu" },
      { id: "ill2", polish: "Lek", english: "Medicine", difficulty: "easy", example: "Take this medicine three times daily after meals for one full week", exampleTranslation: "Weź to lekarstwo trzy razy dziennie po posiłkach przez cały tydzień" },
      { id: "ill3", polish: "Ból", english: "Pain", difficulty: "easy", example: "I have terrible pain in my lower back from lifting heavy boxes yesterday", exampleTranslation: "Mam okropny ból w dolnej części pleców od podnoszenia ciężkich pudełek wczoraj" },
      { id: "ill4", polish: "Gorączka", english: "Fever", difficulty: "easy", example: "The child has a high fever and should see a doctor immediately today", exampleTranslation: "Dziecko ma wysoką gorączkę i powinno zobaczyć lekarza natychmiast dzisiaj" },
      { id: "ill5", polish: "Kaszel", english: "Cough", difficulty: "easy", example: "My persistent cough keeps me awake at night and won't go away", exampleTranslation: "Mój uporczywy kaszel nie daje mi spać w nocy i nie chce przejść" },
      { id: "ill6", polish: "Przeziębienie", english: "Cold", difficulty: "easy", example: "I caught a bad cold from standing in the rain without an umbrella", exampleTranslation: "Złapałem złe przeziębienie od stania w deszczu bez parasola" },
      { id: "ill7", polish: "Apteka", english: "Pharmacy", difficulty: "medium", example: "I need to go to the pharmacy to pick up my prescription medicine today", exampleTranslation: "Muszę iść do apteki aby odebrać moje lekarstwo na receptę dzisiaj" },
      { id: "ill8", polish: "Recepta", english: "Prescription", difficulty: "medium", example: "The doctor wrote a prescription for antibiotics to treat the bacterial infection properly", exampleTranslation: "Lekarz wypisał receptę na antybiotyki aby właściwie leczyć infekcję bakteryjną" },
      { id: "ill9", polish: "Badanie", english: "Examination", difficulty: "medium", example: "I need to schedule a medical examination to check my overall health condition", exampleTranslation: "Muszę umówić badanie lekarskie aby sprawdzić mój ogólny stan zdrowia" },
      { id: "ill10", polish: "Szpital", english: "Hospital", difficulty: "medium", example: "He was rushed to the hospital after the serious car accident on the highway", exampleTranslation: "Został przewieziony do szpitala po poważnym wypadku samochodowym na autostradzie" },
      { id: "ill11", polish: "Alergia", english: "Allergy", difficulty: "medium", example: "I have a severe allergy to peanuts and must avoid them completely always", exampleTranslation: "Mam poważną alergię na orzeszki ziemne i muszę ich unikać całkowicie zawsze" },
      { id: "ill12", polish: "Zastrzyk", english: "Injection", difficulty: "medium", example: "The nurse gave me a flu vaccination injection in my upper arm muscle", exampleTranslation: "Pielęgniarka dała mi zastrzyk szczepionki przeciw grypie w górną część mięśnia ramienia" },
      { id: "ill13", polish: "Źle się czuję", english: "I feel sick", difficulty: "hard", example: "I feel very sick today with stomach pain and nausea so I'm staying home", exampleTranslation: "Źle się czuję dzisiaj z bólem żołądka i nudnościami więc zostaję w domu" },
      { id: "ill14", polish: "Potrzebuję lekarza", english: "I need a doctor", difficulty: "hard", example: "I urgently need to see a doctor because these symptoms are getting worse rapidly", exampleTranslation: "Pilnie potrzebuję zobaczyć lekarza bo te objawy się szybko pogarszają" },
      { id: "ill15", polish: "Wyzdrowieję wkrótce", english: "I'll get better soon", difficulty: "hard", example: "Don't worry, I'll get better soon with proper rest and medication from the doctor", exampleTranslation: "Nie martw się, wyzdrowieję wkrótce z odpowiednim odpoczynkiem i lekami od lekarza" }
    ]
  },

  sports_activities: {
    name: "Sport i aktywności",
    description: "Sports and activities",
    icon: Dumbbell,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { id: "spo1", polish: "Sport", english: "Sport", difficulty: "easy", example: "Playing sports regularly is excellent for maintaining good physical health and fitness", exampleTranslation: "Uprawianie sportu regularnie jest doskonałe dla utrzymania dobrego zdrowia fizycznego i kondycji" },
      { id: "spo2", polish: "Piłka nożna", english: "Football", difficulty: "easy", example: "Football is the most popular sport in the world with billions of fans", exampleTranslation: "Piłka nożna jest najpopularniejszym sportem na świecie z miliardami fanów" },
      { id: "spo3", polish: "Pływać", english: "To swim", difficulty: "easy", example: "I love to swim in the ocean during hot summer vacation days", exampleTranslation: "Uwielbiam pływać w oceanie podczas gorących letnich wakacyjnych dni" },
      { id: "spo4", polish: "Biegać", english: "To run", difficulty: "easy", example: "I run five kilometers every morning before breakfast for good health and energy", exampleTranslation: "Biegam pięć kilometrów każdego ranka przed śniadaniem dla dobrego zdrowia i energii" },
      { id: "spo5", polish: "Trening", english: "Training", difficulty: "easy", example: "Regular training at the gym helps me build strength and stay fit always", exampleTranslation: "Regularny trening na siłowni pomaga mi budować siłę i utrzymywać kondycję zawsze" },
      { id: "spo6", polish: "Drużyna", english: "Team", difficulty: "easy", example: "Our basketball team won the championship after months of hard dedicated practice together", exampleTranslation: "Nasza drużyna koszykówki wygrała mistrzostwa po miesiącach ciężkich oddanych treningów razem" },
      { id: "spo7", polish: "Mecz", english: "Match", difficulty: "medium", example: "The football match was very exciting and ended with a dramatic last-minute goal", exampleTranslation: "Mecz piłki nożnej był bardzo ekscytujący i zakończył się dramatycznym golem w ostatniej minucie" },
      { id: "spo8", polish: "Siłownia", english: "Gym", difficulty: "medium", example: "I go to the gym four times a week to exercise and maintain my fitness", exampleTranslation: "Chodzę na siłownię cztery razy w tygodniu aby ćwiczyć i utrzymywać moją kondycję" },
      { id: "spo9", polish: "Joga", english: "Yoga", difficulty: "medium", example: "Practicing yoga every morning helps me relax and improve flexibility significantly over time", exampleTranslation: "Praktykowanie jogi każdego ranka pomaga mi się zrelaksować i znacznie poprawić elastyczność z czasem" },
      { id: "spo10", polish: "Wyścig", english: "Race", difficulty: "medium", example: "I'm training hard to participate in the marathon race next month in the city", exampleTranslation: "Trenuję ciężko aby wziąć udział w wyścigu maratońskim w przyszłym miesiącu w mieście" },
      { id: "spo11", polish: "Zawodnik", english: "Athlete", difficulty: "medium", example: "The professional athlete trains six hours daily to prepare for international competitions worldwide", exampleTranslation: "Profesjonalny zawodnik trenuje sześć godzin dziennie aby przygotować się do międzynarodowych zawodów na całym świecie" },
      { id: "spo12", polish: "Mistrzostwo", english: "Championship", difficulty: "medium", example: "Our team competed in the national championship and finished in second place overall", exampleTranslation: "Nasza drużyna rywalizowała w mistrzostwach krajowych i zajęła drugie miejsce ogólnie" },
      { id: "spo13", polish: "Uprawiam sport", english: "I do sports", difficulty: "hard", example: "I do various sports including swimming, running and cycling for overall balanced fitness", exampleTranslation: "Uprawiam różne sporty włączając pływanie, bieganie i jazdę na rowerze dla ogólnej zbalansowanej kondycji" },
      { id: "spo14", polish: "Wygraliśmy mecz", english: "We won the match", difficulty: "hard", example: "We won the important match three to two after an intense and exciting game!", exampleTranslation: "Wygraliśmy ważny mecz trzy do dwóch po intensywnej i ekscytującej grze!" },
      { id: "spo15", polish: "Trenuję codziennie", english: "I train every day", difficulty: "hard", example: "I train every single day without fail to prepare for the upcoming competition next month", exampleTranslation: "Trenuję każdego dnia bez wyjątku aby przygotować się na nadchodzące zawody w przyszłym miesiącu" }
    ]
  },

  technology_internet: {
    name: "Technologia i internet",
    description: "Technology and internet",
    icon: Wifi,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "tech1", polish: "Internet", english: "Internet", difficulty: "easy", example: "The internet connects billions of people around the entire world instantly every day", exampleTranslation: "Internet łączy miliardy ludzi na całym świecie natychmiast każdego dnia" },
      { id: "tech2", polish: "Strona internetowa", english: "Website", difficulty: "easy", example: "I visit this website daily to read interesting articles and latest news updates", exampleTranslation: "Odwiedzam tę stronę internetową codziennie aby czytać ciekawe artykuły i najnowsze wiadomości" },
      { id: "tech3", polish: "Email", english: "Email", difficulty: "easy", example: "I check my email inbox every morning for important messages from work colleagues", exampleTranslation: "Sprawdzam moją skrzynkę email każdego ranka w poszukiwaniu ważnych wiadomości od współpracowników" },
      { id: "tech4", polish: "Aplikacja", english: "App", difficulty: "easy", example: "This mobile app helps me learn new languages through interactive games and exercises", exampleTranslation: "Ta aplikacja mobilna pomaga mi uczyć się nowych języków przez interaktywne gry i ćwiczenia" },
      { id: "tech5", polish: "Wi-Fi", english: "Wi-Fi", difficulty: "easy", example: "The Wi-Fi connection in this coffee shop is fast and reliable for remote work", exampleTranslation: "Połączenie Wi-Fi w tej kawiarni jest szybkie i niezawodne do pracy zdalnej" },
      { id: "tech6", polish: "Przeglądarka", english: "Browser", difficulty: "easy", example: "I use this web browser to search for information and browse websites online", exampleTranslation: "Używam tej przeglądarki internetowej aby szukać informacji i przeglądać strony online" },
      { id: "tech7", polish: "Pobierać", english: "To download", difficulty: "medium", example: "I need to download this important software update for security improvements on my computer", exampleTranslation: "Muszę pobrać tę ważną aktualizację oprogramowania dla ulepszeń bezpieczeństwa na moim komputerze" },
      { id: "tech8", polish: "Wgrywać", english: "To upload", difficulty: "medium", example: "I'm uploading vacation photos to the cloud storage to share with family members", exampleTranslation: "Wgrywam zdjęcia wakacyjne do magazynu chmurowego aby podzielić się z członkami rodziny" },
      { id: "tech9", polish: "Sieć społecznościowa", english: "Social network", difficulty: "medium", example: "Social networks connect people worldwide and allow them to share experiences and photos daily", exampleTranslation: "Sieci społecznościowe łączą ludzi na całym świecie i pozwalają im dzielić się doświadczeniami i zdjęciami codziennie" },
      { id: "tech10", polish: "Wyszukiwarka", english: "Search engine", difficulty: "medium", example: "I use the search engine to find answers to questions and research topics quickly", exampleTranslation: "Używam wyszukiwarki aby znaleźć odpowiedzi na pytania i badać tematy szybko" },
      { id: "tech11", polish: "Konto", english: "Account", difficulty: "medium", example: "Create a free account to access all premium features and content on this platform", exampleTranslation: "Stwórz darmowe konto aby uzyskać dostęp do wszystkich funkcji premium i treści na tej platformie" },
      { id: "tech12", polish: "Zalogować się", english: "To log in", difficulty: "medium", example: "You need to log in with your username and password to access your personal account", exampleTranslation: "Musisz się zalogować swoją nazwą użytkownika i hasłem aby uzyskać dostęp do swojego osobistego konta" },
      { id: "tech13", polish: "Nie działa internet", english: "The internet isn't working", difficulty: "hard", example: "The internet isn't working properly and I can't access any websites right now", exampleTranslation: "Internet nie działa prawidłowo i nie mogę uzyskać dostępu do żadnych stron teraz" },
      { id: "tech14", polish: "Jaki masz adres email?", english: "What's your email address?", difficulty: "hard", example: "What's your personal email address so I can send you the important documents today?", exampleTranslation: "Jaki masz osobisty adres email żebym mógł ci wysłać ważne dokumenty dzisiaj?" },
      { id: "tech15", polish: "Wyślij mi link", english: "Send me the link", difficulty: "hard", example: "Please send me the link to that interesting article you mentioned during our conversation", exampleTranslation: "Proszę wyślij mi link do tego ciekawego artykułu który wspomniałeś podczas naszej rozmowy" }
    ]
  },

  clothing_fashion: {
    name: "Ubrania i moda",
    description: "Clothing and fashion",
    icon: Shirt,
    color: "from-pink-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { id: "clo1", polish: "Ubranie", english: "Clothing", difficulty: "easy", example: "I need to buy new clothing for the upcoming winter season this year", exampleTranslation: "Muszę kupić nowe ubrania na nadchodzący sezon zimowy w tym roku" },
      { id: "clo2", polish: "Koszula", english: "Shirt", difficulty: "easy", example: "I wear a white shirt to work every day as part of the dress code", exampleTranslation: "Noszę białą koszulę do pracy każdego dnia jako część kodeksu ubioru" },
      { id: "clo3", polish: "Spodnie", english: "Pants", difficulty: "easy", example: "These comfortable pants are perfect for casual weekend activities and relaxing at home", exampleTranslation: "Te wygodne spodnie są idealne do nieformalnych weekendowych aktywności i relaksu w domu" },
      { id: "clo4", polish: "Sukienka", english: "Dress", difficulty: "easy", example: "She bought a beautiful elegant dress for the formal wedding ceremony next Saturday", exampleTranslation: "Kupiła piękną elegancką sukienkę na formalną ceremonię ślubną w przyszłą sobotę" },
      { id: "clo5", polish: "Buty", english: "Shoes", difficulty: "easy", example: "I need comfortable walking shoes for the long hiking trip in the mountains", exampleTranslation: "Potrzebuję wygodnych butów do chodzenia na długą wędrówkę w górach" },
      { id: "clo6", polish: "Skarpetki", english: "Socks", difficulty: "easy", example: "I always wear warm wool socks during the cold winter months for comfort", exampleTranslation: "Zawsze noszę ciepłe wełniane skarpetki podczas zimnych zimowych miesięcy dla komfortu" },
      { id: "clo7", polish: "Sweter", english: "Sweater", difficulty: "medium", example: "This cozy wool sweater keeps me warm on cold autumn and winter evenings", exampleTranslation: "Ten przytulny wełniany sweter trzyma mnie w cieple w zimne jesienne i zimowe wieczory" },
      { id: "clo8", polish: "Płaszcz", english: "Coat", difficulty: "medium", example: "I bought a new waterproof coat for protection against rain and cold weather", exampleTranslation: "Kupiłem nowy wodoodporny płaszcz dla ochrony przed deszczem i zimną pogodą" },
      { id: "clo9", polish: "Czapka", english: "Hat", difficulty: "medium", example: "Wear a warm winter hat to protect your head from the freezing cold temperatures", exampleTranslation: "Noś ciepłą zimową czapkę aby chronić głowę przed mroźnymi temperaturami" },
      { id: "clo10", polish: "Szalik", english: "Scarf", difficulty: "medium", example: "I wrapped a soft scarf around my neck to stay warm in the cold wind", exampleTranslation: "Owinąłem miękki szalik wokół szyi aby pozostać w cieple w zimnym wietrze" },
      { id: "clo11", polish: "Rękawiczki", english: "Gloves", difficulty: "medium", example: "Don't forget your warm gloves when going outside in the freezing winter weather", exampleTranslation: "Nie zapomnij ciepłych rękawiczek gdy wychodzisz na zewnątrz w mroźną zimową pogodę" },
      { id: "clo12", polish: "Moda", english: "Fashion", difficulty: "medium", example: "She follows the latest fashion trends and always dresses stylishly and elegantly everywhere", exampleTranslation: "Ona śledzi najnowsze trendy mody i zawsze ubiera się stylowo i elegancko wszędzie" },
      { id: "clo13", polish: "To mi pasuje?", english: "Does this suit me?", difficulty: "hard", example: "Does this new outfit suit me well? I'm not sure about the color combination", exampleTranslation: "To mi pasuje dobrze? Nie jestem pewien co do kombinacji kolorów" },
      { id: "clo14", polish: "Ubierz się ciepło", english: "Dress warmly", difficulty: "hard", example: "Make sure to dress warmly in layers because it's extremely cold outside today", exampleTranslation: "Upewnij się że ubierzesz się ciepło w warstwy bo jest ekstremalnie zimno na zewnątrz dzisiaj" },
      { id: "clo15", polish: "Wyglądasz świetnie", english: "You look great", difficulty: "hard", example: "You look absolutely great in that elegant outfit for tonight's special dinner party!", exampleTranslation: "Wyglądasz absolutnie świetnie w tym eleganckim stroju na dzisiejszą specjalną kolację!" }
    ]
  },

  food_preparation: {
    name: "Przygotowanie posiłków",
    description: "Food preparation",
    icon: ChefHat,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "prep1", polish: "Przepis", english: "Recipe", difficulty: "easy", example: "I'm following my grandmother's traditional recipe for making delicious homemade apple pie", exampleTranslation: "Podążam za tradycyjnym przepisem mojej babci na robienie pysznego domowego szarlotki" },
      { id: "prep2", polish: "Składnik", english: "Ingredient", difficulty: "easy", example: "Make sure you have all the necessary ingredients before starting to cook the meal", exampleTranslation: "Upewnij się że masz wszystkie niezbędne składniki przed rozpoczęciem gotowania posiłku" },
      { id: "prep3", polish: "Patelnia", english: "Pan", difficulty: "easy", example: "Heat the frying pan on medium heat before adding oil and vegetables for cooking", exampleTranslation: "Podgrzej patelnię na średnim ogniu przed dodaniem oleju i warzyw do gotowania" },
      { id: "prep4", polish: "Garnek", english: "Pot", difficulty: "easy", example: "I cook soup in a large pot on the stove for several hours slowly", exampleTranslation: "Gotuję zupę w dużym garnku na kuchence przez kilka godzin powoli" },
      { id: "prep5", polish: "Piekarnik", english: "Oven", difficulty: "easy", example: "Preheat the oven to one hundred eighty degrees before baking the delicious cake", exampleTranslation: "Podgrzej piekarnik do stu osiemdziesięciu stopni przed pieczeniem pysznego ciasta" },
      { id: "prep6", polish: "Nóż", english: "Knife", difficulty: "easy", example: "Use a sharp knife carefully when cutting vegetables and fruits for safety", exampleTranslation: "Używaj ostrego noża ostrożnie gdy krojesz warzywa i owoce dla bezpieczeństwa" },
      { id: "prep7", polish: "Deska do krojenia", english: "Cutting board", difficulty: "medium", example: "Always use a clean cutting board when preparing fresh food ingredients in the kitchen", exampleTranslation: "Zawsze używaj czystej deski do krojenia gdy przygotowujesz świeże składniki spożywcze w kuchni" },
      { id: "prep8", polish: "Mieszać", english: "To mix", difficulty: "medium", example: "Mix all the dry ingredients together thoroughly before adding wet ingredients to the bowl", exampleTranslation: "Wymieszaj wszystkie suche składniki razem dokładnie przed dodaniem mokrych składników do miski" },
      { id: "prep9", polish: "Przyprawy", english: "Spices", difficulty: "medium", example: "Add various spices to enhance the flavor of the dish and make it more delicious", exampleTranslation: "Dodaj różne przyprawy aby wzbogacić smak dania i uczynić je bardziej pysznym" },
      { id: "prep10", polish: "Smak", english: "Taste", difficulty: "medium", example: "Taste the soup before serving to check if it needs more salt or pepper", exampleTranslation: "Spróbuj zupy przed podaniem aby sprawdzić czy potrzebuje więcej soli lub pieprzu" },
      { id: "prep11", polish: "Schładzać", english: "To cool down", difficulty: "medium", example: "Let the hot dish cool down for ten minutes before serving it to guests", exampleTranslation: "Pozwól gorącemu daniu schłodzić się przez dziesięć minut przed podaniem go gościom" },
      { id: "prep12", polish: "Podgrzewać", english: "To reheat", difficulty: "medium", example: "Reheat the leftover food in the microwave for two minutes until it's hot enough", exampleTranslation: "Podgrzej resztki jedzenia w mikrofalówce przez dwie minuty aż będzie wystarczająco gorące" },
      { id: "prep13", polish: "Jak to ugotować?", english: "How to cook this?", difficulty: "hard", example: "How exactly should I cook this complicated dish? Can you explain the steps clearly?", exampleTranslation: "Jak dokładnie powinienem ugotować to skomplikowane danie? Możesz wyjaśnić kroki jasno?" },
      { id: "prep14", polish: "Smakuje wyśmienicie", english: "Tastes delicious", difficulty: "hard", example: "This homemade dish tastes absolutely delicious and everyone loves it at the dinner table!", exampleTranslation: "To domowe danie smakuje absolutnie wyśmienicie i wszyscy to uwielbiają przy stole obiadowym!" },
      { id: "prep15", polish: "Potrzebuję więcej czasu", english: "I need more time", difficulty: "hard", example: "I need more time to prepare this elaborate meal properly for tonight's special guests", exampleTranslation: "Potrzebuję więcej czasu aby przygotować ten wyszukany posiłek właściwie dla dzisiejszych specjalnych gości" }
    ]
  },

  city_urban: {
    name: "Miasto i życie miejskie",
    description: "City and urban life",
    icon: Building,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "city1", polish: "Miasto", english: "City", difficulty: "easy", example: "The city is full of tall buildings, busy streets and millions of people everywhere", exampleTranslation: "Miasto jest pełne wysokich budynków, ruchliwych ulic i milionów ludzi wszędzie" },
      { id: "city2", polish: "Ulica", english: "Street", difficulty: "easy", example: "The main street is always crowded with pedestrians and cars during rush hours", exampleTranslation: "Główna ulica jest zawsze zatłoczona pieszymi i samochodami w godzinach szczytu" },
      { id: "city3", polish: "Budynek", english: "Building", difficulty: "easy", example: "That tall modern building is the highest structure in the entire city skyline", exampleTranslation: "Ten wysoki nowoczesny budynek jest najwyższą konstrukcją w całej panoramie miasta" },
      { id: "city4", polish: "Plac", english: "Square", difficulty: "easy", example: "The main city square is a popular meeting place for residents and tourists alike", exampleTranslation: "Główny plac miejski jest popularnym miejscem spotkań dla mieszkańców i turystów" },
      { id: "city5", polish: "Most", english: "Bridge", difficulty: "easy", example: "The beautiful stone bridge crosses the wide river connecting both sides of the city", exampleTranslation: "Piękny kamienny most przekracza szeroką rzekę łącząc obie strony miasta" },
      { id: "city6", polish: "Ruch uliczny", english: "Traffic", difficulty: "easy", example: "Heavy traffic congestion makes commuting to work very slow during morning rush hours", exampleTranslation: "Ciężki ruch uliczny sprawia że dojazd do pracy jest bardzo wolny w porannych godzinach szczytu" },
      { id: "city7", polish: "Chodnik", english: "Sidewalk", difficulty: "medium", example: "Walk on the sidewalk and be careful when crossing busy streets at intersections", exampleTranslation: "Chodź po chodniku i uważaj gdy przechodzisz przez ruchliwe ulice na skrzyżowaniach" },
      { id: "city8", polish: "Światła", english: "Traffic lights", difficulty: "medium", example: "Wait for the traffic lights to turn green before crossing the busy intersection safely", exampleTranslation: "Poczekaj aż światła zmienią się na zielone przed bezpiecznym przejściem przez ruchliwe skrzyżowanie" },
      { id: "city9", polish: "Przejście dla pieszych", english: "Crosswalk", difficulty: "medium", example: "Always use the marked crosswalk when crossing the street for maximum safety", exampleTranslation: "Zawsze używaj oznakowanego przejścia dla pieszych gdy przechodzisz przez ulicę dla maksymalnego bezpieczeństwa" },
      { id: "city10", polish: "Kamienica", english: "Tenement house", difficulty: "medium", example: "I live in a beautiful old tenement house in the historic city center district", exampleTranslation: "Mieszkam w pięknej starej kamienicy w historycznej dzielnicy centrum miasta" },
      { id: "city11", polish: "Drapacz chmur", english: "Skyscraper", difficulty: "medium", example: "The impressive skyscraper has fifty floors and offers amazing views of the entire city below", exampleTranslation: "Imponujący drapacz chmur ma pięćdziesiąt pięter i oferuje niesamowite widoki całego miasta poniżej" },
      { id: "city12", polish: "Hałas", english: "Noise", difficulty: "medium", example: "The constant noise from traffic and construction makes city life quite stressful sometimes", exampleTranslation: "Ciągły hałas od ruchu i budowy czyni życie miejskie dość stresującym czasami" },
      { id: "city13", polish: "Gdzie jest centrum?", english: "Where is downtown?", difficulty: "hard", example: "Excuse me, where exactly is the downtown area from here? How do I get there?", exampleTranslation: "Przepraszam, gdzie dokładnie jest centrum stąd? Jak tam dojść?" },
      { id: "city14", polish: "Miasto jest zatłoczone", english: "The city is crowded", difficulty: "hard", example: "The city is extremely crowded during tourist season with visitors from all over the world", exampleTranslation: "Miasto jest ekstremalnie zatłoczone podczas sezonu turystycznego odwiedzającymi z całego świata" },
      { id: "city15", polish: "Lubię życie miejskie", english: "I like city life", difficulty: "hard", example: "I really like city life because of all the cultural opportunities and entertainment available here", exampleTranslation: "Naprawdę lubię życie miejskie z powodu wszystkich możliwości kulturalnych i rozrywki dostępnej tutaj" }
    ]
  },

  countryside_rural: {
    name: "Wieś i życie wiejskie",
    description: "Countryside and rural",
    icon: Tractor,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "rur1", polish: "Wieś", english: "Village", difficulty: "easy", example: "The small peaceful village is surrounded by beautiful green fields and forests everywhere", exampleTranslation: "Mała spokojna wieś jest otoczona pięknymi zielonymi polami i lasami wszędzie" },
      { id: "rur2", polish: "Gospodarstwo", english: "Farm", difficulty: "easy", example: "My grandparents own a large farm with cows, chickens and vegetable gardens", exampleTranslation: "Moi dziadkowie posiadają duże gospodarstwo z krowami, kurami i ogrodami warzywnym" },
      { id: "rur3", polish: "Rolnik", english: "Farmer", difficulty: "easy", example: "The hardworking farmer wakes up early every morning to tend to the animals and crops", exampleTranslation: "Ciężko pracujący rolnik budzi się wcześnie każdego ranka aby zaopiekować się zwierzętami i uprawami" },
      { id: "rur4", polish: "Pole", english: "Field", difficulty: "easy", example: "Golden wheat is growing tall in the vast field under the bright summer sun", exampleTranslation: "Złota pszenica rośnie wysoko na rozległym polu pod jasnym letnim słońcem" },
      { id: "rur5", polish: "Las", english: "Forest", difficulty: "easy", example: "We went for a long peaceful walk in the dense forest to enjoy nature's beauty", exampleTranslation: "Poszliśmy na długi spokojny spacer w gęstym lesie aby cieszyć się pięknem natury" },
      { id: "rur6", polish: "Krowa", english: "Cow", difficulty: "easy", example: "The farmer milks the cows twice daily in the early morning and late evening", exampleTranslation: "Rolnik doi krowy dwa razy dziennie wcześnie rano i późnym wieczorem" },
      { id: "rur7", polish: "Traktor", english: "Tractor", difficulty: "medium", example: "The farmer drives the powerful tractor to plow the large fields before planting season", exampleTranslation: "Rolnik prowadzi potężny traktor aby zaorać duże pola przed sezonem sadzenia" },
      { id: "rur8", polish: "Stodoła", english: "Barn", difficulty: "medium", example: "The old wooden barn stores hay and farming equipment for use throughout the year", exampleTranslation: "Stara drewniana stodoła przechowuje siano i sprzęt rolniczy do użytku przez cały rok" },
      { id: "rur9", polish: "Uprawa", english: "Crop", difficulty: "medium", example: "This year's crop harvest was excellent thanks to favorable weather conditions all season long", exampleTranslation: "Tegoroczna uprawa plonów była doskonała dzięki sprzyjającym warunkom pogodowym przez cały sezon" },
      { id: "rur10", polish: "Ogród warzywny", english: "Vegetable garden", difficulty: "medium", example: "We grow fresh tomatoes, cucumbers and peppers in our backyard vegetable garden organically", exampleTranslation: "Uprawiamy świeże pomidory, ogórki i paprykę w naszym ogrodzie warzywnym ekologicznie" },
      { id: "rur11", polish: "Sadzić", english: "To plant", difficulty: "medium", example: "We plant new fruit trees in the orchard every spring for future harvests", exampleTranslation: "Sadzimy nowe drzewa owocowe w sadzie każdej wiosny dla przyszłych zbiorów" },
      { id: "rur12", polish: "Żniwa", english: "Harvest", difficulty: "medium", example: "The autumn harvest season is when farmers collect crops from their fields after growing all summer", exampleTranslation: "Jesienny sezon żniw to czas gdy rolnicy zbierają plony ze swoich pól po całym letnim uprawianiu" },
      { id: "rur13", polish: "Życie na wsi", english: "Life in the countryside", difficulty: "hard", example: "Life in the countryside is peaceful and quiet compared to the busy noisy city environment", exampleTranslation: "Życie na wsi jest spokojne i ciche w porównaniu do ruchliwego hałaśliwego środowiska miejskiego" },
      { id: "rur14", polish: "Hodować zwierzęta", english: "To raise animals", difficulty: "hard", example: "They raise chickens and goats on their small farm for fresh eggs and milk daily", exampleTranslation: "Hodują kury i kozy na swoim małym gospodarstwie dla świeżych jaj i mleka codziennie" },
      { id: "rur15", polish: "Spokojnie tu", english: "It's peaceful here", difficulty: "hard", example: "It's wonderfully peaceful and quiet here away from the noise and stress of city life", exampleTranslation: "Jest cudownie spokojnie i cicho tutaj z dala od hałasu i stresu życia miejskiego" }
    ]
  },

  travel_tourism: {
    name: "Podróże i turystyka",
    description: "Travel and tourism",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "trav1", polish: "Podróż", english: "Journey", difficulty: "easy", example: "The long journey across Europe took us three weeks of exciting travel and exploration", exampleTranslation: "Długa podróż przez Europę zajęła nam trzy tygodnie ekscytującej podróży i eksploracji" },
      { id: "trav2", polish: "Turysta", english: "Tourist", difficulty: "easy", example: "Millions of tourists visit this historic city every year to see famous monuments", exampleTranslation: "Miliony turystów odwiedza to historyczne miasto każdego roku aby zobaczyć słynne zabytki" },
      { id: "trav3", polish: "Mapa", english: "Map", difficulty: "easy", example: "I use a detailed map to navigate through unfamiliar cities when traveling abroad", exampleTranslation: "Używam szczegółowej mapy aby nawigować przez nieznane miasta gdy podróżuję za granicę" },
      { id: "trav4", polish: "Przewodnik", english: "Guide", difficulty: "easy", example: "The knowledgeable tour guide showed us all the important historical sites in the ancient city", exampleTranslation: "Kompetentny przewodnik turystyczny pokazał nam wszystkie ważne miejsca historyczne w starożytnym mieście" },
      { id: "trav5", polish: "Hotel", english: "Hotel", difficulty: "easy", example: "We stayed in a comfortable hotel near the beach during our summer vacation trip", exampleTranslation: "Zatrzymaliśmy się w wygodnym hotelu blisko plaży podczas naszej letniej wakacyjnej podróży" },
      { id: "trav6", polish: "Rezerwacja", english: "Reservation", difficulty: "easy", example: "I made a hotel reservation online for three nights in the city center area", exampleTranslation: "Zrobiłem rezerwację hotelową online na trzy noce w obszarze centrum miasta" },
      { id: "trav7", polish: "Zwiedzać", english: "To sightsee", difficulty: "medium", example: "We spent the entire day sightseeing and visiting famous museums and historical monuments", exampleTranslation: "Spędziliśmy cały dzień zwiedzając i odwiedzając słynne muzea i historyczne zabytki" },
      { id: "trav8", polish: "Pamiątka", english: "Souvenir", difficulty: "medium", example: "I bought traditional souvenirs and gifts for family members during my trip abroad", exampleTranslation: "Kupiłem tradycyjne pamiątki i prezenty dla członków rodziny podczas mojej podróży za granicę" },
      { id: "trav9", polish: "Wycieczka", english: "Excursion", difficulty: "medium", example: "We organized a guided excursion to explore the beautiful natural landscapes around the region", exampleTranslation: "Zorganizowaliśmy wycieczkę z przewodnikiem aby zwiedzić piękne naturalne krajobrazy wokół regionu" },
      { id: "trav10", polish: "Zabytek", english: "Monument", difficulty: "medium", example: "This ancient monument was built over two thousand years ago by a great civilization", exampleTranslation: "Ten starożytny zabytek został zbudowany ponad dwa tysiące lat temu przez wielką cywilizację" },
      { id: "trav11", polish: "Klimat", english: "Climate", difficulty: "medium", example: "The tropical climate in this region is warm and humid throughout the entire year", exampleTranslation: "Tropikalny klimat w tym regionie jest ciepły i wilgotny przez cały rok" },
      { id: "trav12", polish: "Wymiana walut", english: "Currency exchange", difficulty: "medium", example: "I need to find a currency exchange office to convert my money to local currency", exampleTranslation: "Muszę znaleźć kantor wymiany walut aby wymienić moje pieniądze na lokalną walutę" },
      { id: "trav13", polish: "Gdzie jest atrakcja?", english: "Where is the attraction?", difficulty: "hard", example: "Excuse me, where exactly is the main tourist attraction that everyone talks about here?", exampleTranslation: "Przepraszam, gdzie dokładnie jest główna atrakcja turystyczna o której wszyscy tutaj mówią?" },
      { id: "trav14", polish: "Polecasz to miejsce?", english: "Do you recommend this place?", difficulty: "hard", example: "Do you personally recommend this place for visiting? Is it worth the time and money?", exampleTranslation: "Polecasz osobiście to miejsce do odwiedzenia? Czy jest warte czasu i pieniędzy?" },
      { id: "trav15", polish: "Wspaniała podróż", english: "Amazing trip", difficulty: "hard", example: "That was truly an amazing trip full of unforgettable experiences and beautiful memories!", exampleTranslation: "To była naprawdę wspaniała podróż pełna niezapomnianych doświadczeń i pięknych wspomnień!" }
    ]
  },

  pets_animals: {
    name: "Zwierzęta domowe",
    description: "Pets and animals",
    icon: GraduationCap,
    color: "from-amber-500 to-yellow-600",
    level: "beginner",
    words: [
      { id: "pet1", polish: "Zwierzę", english: "Animal", difficulty: "easy", example: "I love all animals and enjoy watching nature documentaries about wildlife on television", exampleTranslation: "Kocham wszystkie zwierzęta i lubię oglądać dokumenty przyrodnicze o dzikich zwierzętach w telewizji" },
      { id: "pet2", polish: "Pies", english: "Dog", difficulty: "easy", example: "My friendly dog loves to play fetch in the park every afternoon with me", exampleTranslation: "Mój przyjazny pies uwielbia bawić się w aportowanie w parku każdego popołudnia ze mną" },
      { id: "pet3", polish: "Kot", english: "Cat", difficulty: "easy", example: "The fluffy cat sleeps peacefully on the warm sofa most of the lazy day", exampleTranslation: "Puszysty kot śpi spokojnie na ciepłej sofie przez większość leniwego dnia" },
      { id: "pet4", polish: "Ptak", english: "Bird", difficulty: "easy", example: "Colorful birds are singing beautifully in the trees outside my bedroom window every morning", exampleTranslation: "Kolorowe ptaki śpiewają pięknie na drzewach za oknem mojej sypialni każdego ranka" },
      { id: "pet5", polish: "Ryba", english: "Fish", difficulty: "easy", example: "I keep tropical fish in a large aquarium in my living room at home", exampleTranslation: "Trzymam tropikalne ryby w dużym akwarium w moim salonie w domu" },
      { id: "pet6", polish: "Chomik", english: "Hamster", difficulty: "easy", example: "My daughter has a cute little hamster that runs on a wheel in its cage", exampleTranslation: "Moja córka ma uroczego małego chomika który biega na kółku w swojej klatce" },
      { id: "pet7", polish: "Karma", english: "Pet food", difficulty: "medium", example: "I buy high-quality pet food for my dog from the specialized animal store weekly", exampleTranslation: "Kupuję wysokiej jakości karmę dla mojego psa ze specjalistycznego sklepu zwierzęcego co tydzień" },
      { id: "pet8", polish: "Weterynarz", english: "Veterinarian", difficulty: "medium", example: "I take my sick cat to the veterinarian for a health checkup and vaccinations annually", exampleTranslation: "Zabiorę mojego chorego kota do weterynarza na kontrolę zdrowia i szczepienia rocznie" },
      { id: "pet9", polish: "Smycz", english: "Leash", difficulty: "medium", example: "Always keep your dog on a leash when walking through crowded public parks and streets", exampleTranslation: "Zawsze trzymaj swojego psa na smyczy gdy spaceruj przez zatłoczone publiczne parki i ulice" },
      { id: "pet10", polish: "Klatka", english: "Cage", difficulty: "medium", example: "The bird lives in a spacious cage with toys and perches for climbing and playing", exampleTranslation: "Ptak mieszka w przestronnej klatce z zabawkami i grzędami do wspinania się i zabawy" },
      { id: "pet11", polish: "Szkolić", english: "To train", difficulty: "medium", example: "I'm training my young puppy to sit, stay and come when called by name", exampleTranslation: "Szkolę mojego młodego szczeniaka aby siadał, zostawał i przychodził gdy wołany po imieniu" },
      { id: "pet12", polish: "Szczekać", english: "To bark", difficulty: "medium", example: "The neighbor's dog barks loudly at night and keeps everyone awake in the building", exampleTranslation: "Pies sąsiada szczeka głośno w nocy i nie daje wszystkim spać w budynku" },
      { id: "pet13", polish: "Masz zwierzęta?", english: "Do you have pets?", difficulty: "hard", example: "Do you have any pets at home? I'd love to hear about them and see photos!", exampleTranslation: "Masz jakieś zwierzęta w domu? Chciałbym o nich usłyszeć i zobaczyć zdjęcia!" },
      { id: "pet14", polish: "Pies jest posłuszny", english: "The dog is obedient", difficulty: "hard", example: "My dog is very obedient and always follows commands perfectly without hesitation at all", exampleTranslation: "Mój pies jest bardzo posłuszny i zawsze wykonuje polecenia idealnie bez wahania w ogóle" },
      { id: "pet15", polish: "Zaopiekuj się kotem", english: "Take care of the cat", difficulty: "hard", example: "Please take good care of my cat while I'm away traveling on vacation abroad", exampleTranslation: "Proszę zaopiekuj się dobrze moim kotem gdy będę poza domem podróżując na wakacjach za granicą" }
    ]
  },

  emergencies_help: {
    name: "Sytuacje awaryjne",
    description: "Emergencies and help",
    icon: Stethoscope,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { id: "emer1", polish: "Pomoc", english: "Help", difficulty: "easy", example: "Please help me carry these heavy boxes up the stairs to the apartment!", exampleTranslation: "Proszę pomóż mi zanieść te ciężkie pudła po schodach do mieszkania!" },
      { id: "emer2", polish: "Niebezpieczeństwo", english: "Danger", difficulty: "easy", example: "There is serious danger ahead so please stay back and call emergency services immediately", exampleTranslation: "Jest poważne niebezpieczeństwo przed nami więc proszę zostań z tyłu i zadzwoń po służby ratunkowe natychmiast" },
      { id: "emer3", polish: "Straż pożarna", english: "Fire department", difficulty: "easy", example: "Call the fire department immediately if you see smoke or flames coming from the building", exampleTranslation: "Zadzwoń do straży pożarnej natychmiast jeśli widzisz dym lub płomienie wychodzące z budynku" },
      { id: "emer4", polish: "Karetka", english: "Ambulance", difficulty: "easy", example: "An ambulance arrived quickly to transport the injured person to the hospital emergency room", exampleTranslation: "Karetka przybyła szybko aby przewieźć ranną osobę do szpitalnego oddziału ratunkowego" },
      { id: "emer5", polish: "Policja", english: "Police", difficulty: "easy", example: "I called the police to report the theft of my bicycle from outside the house", exampleTranslation: "Zadzwoniłem na policję aby zgłosić kradzież mojego roweru sprzed domu" },
      { id: "emer6", polish: "Wypadek", english: "Accident", difficulty: "easy", example: "There was a serious car accident on the highway and traffic is completely stopped now", exampleTranslation: "Był poważny wypadek samochodowy na autostradzie i ruch jest całkowicie zatrzymany teraz" },
      { id: "emer7", polish: "Ratunek", english: "Rescue", difficulty: "medium", example: "The mountain rescue team saved the lost hikers from the dangerous snowy mountain peak", exampleTranslation: "Górska ekipa ratunkowa uratowała zagubionych wędrowców z niebezpiecznego ośnieżonego szczytu góry" },
      { id: "emer8", polish: "Pierwsza pomoc", english: "First aid", difficulty: "medium", example: "Everyone should know basic first aid techniques for emergency situations that may occur anywhere", exampleTranslation: "Każdy powinien znać podstawowe techniki pierwszej pomocy dla sytuacji awaryjnych które mogą wystąpić gdziekolwiek" },
      { id: "emer9", polish: "Ewakuacja", english: "Evacuation", difficulty: "medium", example: "The building evacuation was orderly and everyone safely exited through emergency exits quickly", exampleTranslation: "Ewakuacja budynku była uporządkowana i wszyscy bezpiecznie wyszli przez wyjścia awaryjne szybko" },
      { id: "emer10", polish: "Ostrzeżenie", english: "Warning", difficulty: "medium", example: "Pay attention to all warning signs and announcements for your personal safety always", exampleTranslation: "Zwracaj uwagę na wszystkie znaki ostrzegawcze i ogłoszenia dla twojego osobistego bezpieczeństwa zawsze" },
      { id: "emer11", polish: "Ratownik", english: "Lifeguard", difficulty: "medium", example: "The beach lifeguard watches swimmers carefully to ensure everyone's safety in the water", exampleTranslation: "Ratownik plażowy obserwuje pływaków uważnie aby zapewnić bezpieczeństwo wszystkich w wodzie" },
      { id: "emer12", polish: "Alarmować", english: "To alert", difficulty: "medium", example: "Alert the authorities immediately if you notice anything suspicious or dangerous happening nearby", exampleTranslation: "Alarmuj władze natychmiast jeśli zauważysz cokolwiek podejrzanego lub niebezpiecznego dziejącego się w pobliżu" },
      { id: "emer13", polish: "Potrzebuję pomocy", english: "I need help", difficulty: "hard", example: "I urgently need help right now because I'm lost and can't find my way back!", exampleTranslation: "Pilnie potrzebuję pomocy teraz bo się zgubiłem i nie mogę znaleźć drogi powrotnej!" },
      { id: "emer14", polish: "To pilne", english: "This is urgent", difficulty: "hard", example: "This is extremely urgent and requires immediate attention from emergency medical services now!", exampleTranslation: "To jest ekstremalnie pilne i wymaga natychmiastowej uwagi od ratownictwa medycznego teraz!" },
      { id: "emer15", polish: "Zadzwoń po pomoc", english: "Call for help", difficulty: "hard", example: "Quickly call for help and emergency services because someone is seriously injured here!", exampleTranslation: "Szybko zadzwoń po pomoc i służby ratunkowe bo ktoś jest poważnie ranny tutaj!" }
    ]
  },

  entertainment_leisure: {
    name: "Rozrywka i wypoczynek",
    description: "Entertainment and leisure",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "ent1", polish: "Kino", english: "Cinema", difficulty: "easy", example: "We're going to the cinema tonight to watch the newest blockbuster action movie", exampleTranslation: "Idziemy do kina dziś wieczorem aby obejrzeć najnowszy blockbusterowy film akcji" },
      { id: "ent2", polish: "Teatr", english: "Theater", difficulty: "easy", example: "The theater performance was absolutely stunning with amazing actors and beautiful costumes throughout", exampleTranslation: "Przedstawienie teatralne było absolutnie oszałamiające z niesamowitymi aktorami i pięknymi kostiumami przez cały czas" },
      { id: "ent3", polish: "Koncert", english: "Concert", difficulty: "easy", example: "I bought tickets for the rock concert next month featuring my favorite band", exampleTranslation: "Kupiłem bilety na koncert rockowy w przyszłym miesiącu z moim ulubionym zespołem" },
      { id: "ent4", polish: "Wystawa", english: "Exhibition", difficulty: "easy", example: "The art exhibition features paintings by famous artists from around the world historically", exampleTranslation: "Wystawa sztuki przedstawia obrazy słynnych artystów z całego świata historycznie" },
      { id: "ent5", polish: "Zabawa", english: "Fun", difficulty: "easy", example: "We had so much fun at the amusement park riding rollercoasters all day long", exampleTranslation: "Mieliśmy tyle zabawy w parku rozrywki jeżdżąc na kolejkach górskich cały dzień" },
      { id: "ent6", polish: "Piknik", english: "Picnic", difficulty: "easy", example: "We organized a family picnic in the beautiful park with delicious homemade food and drinks", exampleTranslation: "Zorganizowaliśmy rodzinny piknik w pięknym parku z pysznym domowym jedzeniem i napojami" },
      { id: "ent7", polish: "Camping", english: "Camping", difficulty: "medium", example: "We went camping in the mountains and slept in tents under the stars at night", exampleTranslation: "Pojechaliśmy na camping w góry i spaliśmy w namiotach pod gwiazdami w nocy" },
      { id: "ent8", polish: "Ognisko", english: "Campfire", difficulty: "medium", example: "We sat around the warm campfire telling stories and roasting marshmallows together happily", exampleTranslation: "Siedzieliśmy wokół ciepłego ogniska opowiadając historie i piekąc pianki razem radośnie" },
      { id: "ent9", polish: "Relaks", english: "Relaxation", difficulty: "medium", example: "After a stressful week at work, I need complete relaxation and rest this weekend", exampleTranslation: "Po stresującym tygodniu w pracy potrzebuję całkowitego relaksu i odpoczynku w ten weekend" },
      { id: "ent10", polish: "Festiwal", english: "Festival", difficulty: "medium", example: "The summer music festival attracts thousands of visitors from different countries every year", exampleTranslation: "Letni festiwal muzyczny przyciąga tysiące odwiedzających z różnych krajów każdego roku" },
      { id: "ent11", polish: "Spektakl", english: "Show", difficulty: "medium", example: "The circus show was entertaining for children with acrobats, clowns and amazing animal performances", exampleTranslation: "Spektakl cyrkowy był rozrywkowy dla dzieci z akrobatami, klownami i niesamowitymi występami zwierząt" },
      { id: "ent12", polish: "Atrakcja", english: "Attraction", difficulty: "medium", example: "The main attraction at the amusement park is the giant rollercoaster with steep drops", exampleTranslation: "Główną atrakcją w parku rozrywki jest gigantyczna kolejka górska ze stromymi spadkami" },
      { id: "ent13", polish: "Dobrze się bawię", english: "I'm having fun", difficulty: "hard", example: "I'm having so much fun at this party with great music and wonderful friends!", exampleTranslation: "Tak dobrze się bawię na tym przyjęciu ze świetną muzyką i wspaniałymi przyjaciółmi!" },
      { id: "ent14", polish: "Chodźmy na koncert", english: "Let's go to a concert", difficulty: "hard", example: "Let's go to that amazing concert together this weekend and enjoy live music!", exampleTranslation: "Chodźmy na ten niesamowity koncert razem w ten weekend i cieszmy się muzyką na żywo!" },
      { id: "ent15", polish: "To było wspaniałe", english: "That was wonderful", difficulty: "hard", example: "That theater performance was absolutely wonderful and I was moved to tears by the story!", exampleTranslation: "To przedstawienie teatralne było absolutnie wspaniałe i byłem wzruszony do łez przez historię!" }
    ]
  },

  habits_routines: {
    name: "Nawyki i rutyna",
    description: "Habits and routines",
    icon: Wifi,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "hab1", polish: "Nawyk", english: "Habit", difficulty: "easy", example: "Developing good habits takes time and consistent effort every single day without fail", exampleTranslation: "Rozwijanie dobrych nawyków zabiera czas i konsekwentny wysiłek każdego dnia bez wyjątku" },
      { id: "hab2", polish: "Rutyna", english: "Routine", difficulty: "easy", example: "My morning routine includes exercise, breakfast and reading news before starting work daily", exampleTranslation: "Moja poranna rutyna zawiera ćwiczenia, śniadanie i czytanie wiadomości przed rozpoczęciem pracy codziennie" },
      { id: "hab3", polish: "Budzić się", english: "To wake up", difficulty: "easy", example: "I wake up at six o'clock every morning regardless of weekday or weekend", exampleTranslation: "Budzę się o szóstej każdego ranka bez względu na dzień powszedni czy weekend" },
      { id: "hab4", polish: "Kłaść się spać", english: "To go to bed", difficulty: "easy", example: "I always go to bed early to get eight hours of quality sleep every night", exampleTranslation: "Zawsze kładę się spać wcześnie aby mieć osiem godzin jakościowego snu każdej nocy" },
      { id: "hab5", polish: "Poranek", english: "Morning", difficulty: "easy", example: "The peaceful morning is my favorite time of day for quiet reflection and meditation", exampleTranslation: "Spokojny poranek jest moim ulubionym czasem dnia do cichej refleksji i medytacji" },
      { id: "hab6", polish: "Wieczór", english: "Evening", difficulty: "easy", example: "We spend quiet evenings at home reading books and watching television together as family", exampleTranslation: "Spędzamy spokojne wieczory w domu czytając książki i oglądając telewizję razem jako rodzina" },
      { id: "hab7", polish: "Regularnie", english: "Regularly", difficulty: "medium", example: "I exercise regularly three times per week to maintain good health and physical fitness", exampleTranslation: "Ćwiczę regularnie trzy razy w tygodniu aby utrzymać dobre zdrowie i kondycję fizyczną" },
      { id: "hab8", polish: "Zwyczaj", english: "Custom", difficulty: "medium", example: "It's my family's custom to gather together for Sunday dinner every single week without exception", exampleTranslation: "To zwyczaj mojej rodziny zbierać się razem na niedzielny obiad każdego tygodnia bez wyjątku" },
      { id: "hab9", polish: "Planować", english: "To plan", difficulty: "medium", example: "I carefully plan my entire week in advance to manage time effectively and efficiently", exampleTranslation: "Starannie planuję cały mój tydzień z wyprzedzeniem aby zarządzać czasem efektywnie i wydajnie" },
      { id: "hab10", polish: "Organizować", english: "To organize", difficulty: "medium", example: "I organize my desk and workspace every evening before leaving the office for home", exampleTranslation: "Organizuję moje biurko i przestrzeń roboczą każdego wieczoru przed wyjściem z biura do domu" },
      { id: "hab11", polish: "Przyzwyczajenie", english: "Habit", difficulty: "medium", example: "Reading before bed has become a pleasant habit that helps me relax and sleep better", exampleTranslation: "Czytanie przed snem stało się przyjemnym przyzwyczajeniem które pomaga mi się zrelaksować i lepiej spać" },
      { id: "hab12", polish: "Dyscyplina", english: "Discipline", difficulty: "medium", example: "Success requires strong discipline and commitment to your goals every single day consistently", exampleTranslation: "Sukces wymaga silnej dyscypliny i zaangażowania w twoje cele każdego dnia konsekwentnie" },
      { id: "hab13", polish: "Mam swoją rutynę", english: "I have my routine", difficulty: "hard", example: "I have my own daily routine that helps me stay productive and organized throughout the day", exampleTranslation: "Mam swoją własną codzienną rutynę która pomaga mi pozostać produktywnym i zorganizowanym przez cały dzień" },
      { id: "hab14", polish: "Staram się regularnie", english: "I try to regularly", difficulty: "hard", example: "I try to exercise regularly and eat healthy foods to maintain good health long-term", exampleTranslation: "Staram się regularnie ćwiczyć i jeść zdrowe jedzenie aby utrzymać dobre zdrowie długoterminowo" },
      { id: "hab15", polish: "To moja codzienna praktyka", english: "This is my daily practice", difficulty: "hard", example: "Meditation and journaling are my daily practices that bring peace and clarity to my life", exampleTranslation: "Medytacja i pisanie dziennika to moje codzienne praktyki które przynoszą spokój i jasność mojemu życiu" }
    ]
  },

  numbers_math: {
    name: "Liczby i matematyka",
    description: "Numbers and mathematics",
    icon: Building,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "num1", polish: "Jeden", english: "One", difficulty: "easy", example: "I have one brother and two sisters in my immediate family at home", exampleTranslation: "Mam jednego brata i dwie siostry w mojej najbliższej rodzinie w domu" },
      { id: "num2", polish: "Dwa", english: "Two", difficulty: "easy", example: "I drink two cups of coffee every morning before starting my busy day", exampleTranslation: "Piję dwie filiżanki kawy każdego ranka przed rozpoczęciem mojego pracowitego dnia" },
      { id: "num3", polish: "Pięć", english: "Five", difficulty: "easy", example: "The store is only five minutes away from here by walking straight ahead", exampleTranslation: "Sklep jest tylko pięć minut stąd idąc prosto przed siebie" },
      { id: "num4", polish: "Dziesięć", english: "Ten", difficulty: "easy", example: "I've been learning Spanish for ten years and speak it fluently now", exampleTranslation: "Uczę się hiszpańskiego od dziesięciu lat i mówię nim płynnie teraz" },
      { id: "num5", polish: "Sto", english: "Hundred", difficulty: "easy", example: "The book has over one hundred pages of fascinating stories and beautiful illustrations", exampleTranslation: "Książka ma ponad sto stron fascynujących historii i pięknych ilustracji" },
      { id: "num6", polish: "Tysiąc", english: "Thousand", difficulty: "easy", example: "This historic castle was built over one thousand years ago by ancient rulers", exampleTranslation: "Ten historyczny zamek został zbudowany ponad tysiąc lat temu przez starożytnych władców" },
      { id: "num7", polish: "Dodawać", english: "To add", difficulty: "medium", example: "Add these two numbers together to get the correct total sum for the calculation", exampleTranslation: "Dodaj te dwie liczby razem aby otrzymać prawidłową sumę całkowitą dla kalkulacji" },
      { id: "num8", polish: "Odejmować", english: "To subtract", difficulty: "medium", example: "Subtract the smaller number from the larger one to find the correct difference between them", exampleTranslation: "Odejmij mniejszą liczbę od większej aby znaleźć prawidłową różnicę między nimi" },
      { id: "num9", polish: "Mnożyć", english: "To multiply", difficulty: "medium", example: "Multiply these two numbers to calculate the total area of the rectangular room space", exampleTranslation: "Pomnóż te dwie liczby aby obliczyć całkowity obszar prostokątnej przestrzeni pokoju" },
      { id: "num10", polish: "Dzielić", english: "To divide", difficulty: "medium", example: "Divide the total amount equally among all the participants to be fair to everyone", exampleTranslation: "Podziel całkowitą kwotę równo między wszystkich uczestników aby być sprawiedliwym dla wszystkich" },
      { id: "num11", polish: "Procent", english: "Percent", difficulty: "medium", example: "The store is offering a twenty percent discount on all items during the weekend sale", exampleTranslation: "Sklep oferuje dwadzieścia procent zniżki na wszystkie przedmioty podczas weekendowej wyprzedaży" },
      { id: "num12", polish: "Równanie", english: "Equation", difficulty: "medium", example: "Solve this mathematical equation carefully to find the value of the unknown variable X", exampleTranslation: "Rozwiąż to równanie matematyczne starannie aby znaleźć wartość nieznanej zmiennej X" },
      { id: "num13", polish: "Ile to razem?", english: "How much is it total?", difficulty: "hard", example: "How much is it all together in total after adding taxes and delivery fees?", exampleTranslation: "Ile to razem w sumie po dodaniu podatków i opłat za dostawę?" },
      { id: "num14", polish: "Policz to", english: "Count this", difficulty: "hard", example: "Please count these items carefully and tell me the exact total number you get", exampleTranslation: "Proszę policz te przedmioty starannie i powiedz mi dokładną całkowitą liczbę którą otrzymasz" },
      { id: "num15", polish: "Podzielmy się", english: "Let's split it", difficulty: "hard", example: "Let's split the restaurant bill equally among everyone at the table fairly and simply", exampleTranslation: "Podzielmy się rachunkiem z restauracji równo między wszystkimi przy stole sprawiedliwie i prosto" }
    ]
  },

  opinions_preferences: {
    name: "Opinie i preferencje",
    description: "Opinions and preferences",
    icon: Globe,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "opin1", polish: "Myślę", english: "I think", difficulty: "easy", example: "I think this is a really good idea that could work very well for everyone", exampleTranslation: "Myślę że to jest naprawdę dobry pomysł który mógłby działać bardzo dobrze dla wszystkich" },
      { id: "opin2", polish: "Uważam", english: "I believe", difficulty: "easy", example: "I strongly believe that education is the most important investment for future success in life", exampleTranslation: "Uważam stanowczo że edukacja jest najważniejszą inwestycją dla przyszłego sukcesu w życiu" },
      { id: "opin3", polish: "Wolę", english: "I prefer", difficulty: "easy", example: "I prefer reading physical books rather than digital versions on electronic devices always", exampleTranslation: "Wolę czytać fizyczne książki raczej niż cyfrowe wersje na urządzeniach elektronicznych zawsze" },
      { id: "opin4", polish: "Lubię", english: "I like", difficulty: "easy", example: "I really like spending time outdoors in nature hiking and exploring new places", exampleTranslation: "Naprawdę lubię spędzać czas na zewnątrz w naturze wędrując i eksplorując nowe miejsca" },
      { id: "opin5", polish: "Nie lubię", english: "I don't like", difficulty: "easy", example: "I don't like waiting in long lines at the supermarket or bank on busy days", exampleTranslation: "Nie lubię czekać w długich kolejkach w supermarkecie czy banku w ruchliwe dni" },
      { id: "opin6", polish: "Zgadzam się", english: "I agree", difficulty: "easy", example: "I completely agree with your opinion on this important matter we discussed today", exampleTranslation: "Całkowicie zgadzam się z twoją opinią w tej ważnej sprawie którą omawialiśmy dzisiaj" },
      { id: "opin7", polish: "Nie zgadzam się", english: "I disagree", difficulty: "medium", example: "I respectfully disagree with that statement based on my personal experience and knowledge", exampleTranslation: "Nie zgadzam się z szacunkiem z tym stwierdzeniem bazując na moim osobistym doświadczeniu i wiedzy" },
      { id: "opin8", polish: "Moja opinia", english: "My opinion", difficulty: "medium", example: "In my honest opinion, this solution is the best approach to solving the complex problem", exampleTranslation: "W mojej szczerze opinii to rozwiązanie jest najlepszym podejściem do rozwiązania złożonego problemu" },
      { id: "opin9", polish: "Sądzę że", english: "I suppose", difficulty: "medium", example: "I suppose we could try that different approach if the current method isn't working well", exampleTranslation: "Sądzę że moglibyśmy spróbować tego innego podejścia jeśli obecna metoda nie działa dobrze" },
      { id: "opin10", polish: "Wydaje mi się", english: "It seems to me", difficulty: "medium", example: "It seems to me that this plan has some potential problems we should address first", exampleTranslation: "Wydaje mi się że ten plan ma pewne potencjalne problemy które powinniśmy najpierw rozwiązać" },
      { id: "opin11", polish: "Masz rację", english: "You're right", difficulty: "medium", example: "You're absolutely right about that observation and I should have noticed it earlier myself", exampleTranslation: "Masz absolutnie rację co do tej obserwacji i powinienem był to zauważyć wcześniej sam" },
      { id: "opin12", polish: "Nie mam zdania", english: "I have no opinion", difficulty: "medium", example: "I have no strong opinion on this topic because I don't know enough about it yet", exampleTranslation: "Nie mam silnego zdania na ten temat bo nie wiem jeszcze wystarczająco o tym" },
      { id: "opin13", polish: "Co o tym sądzisz?", english: "What do you think about it?", difficulty: "hard", example: "What do you honestly think about this proposal? I value your expert opinion greatly", exampleTranslation: "Co szczerze o tym sądzisz? Bardzo cenię twoją ekspercką opinię" },
      { id: "opin14", polish: "Mam inne zdanie", english: "I have a different opinion", difficulty: "hard", example: "I respectfully have a different opinion on this matter based on alternative perspectives and research", exampleTranslation: "Mam z szacunkiem inne zdanie w tej sprawie bazując na alternatywnych perspektywach i badaniach" },
      { id: "opin15", polish: "Zgódźmy się", english: "Let's agree", difficulty: "hard", example: "Let's agree on a compromise solution that satisfies everyone's needs and concerns equally here", exampleTranslation: "Zgódźmy się na kompromisowe rozwiązanie które zaspokaja potrzeby i obawy wszystkich równo tutaj" }
    ]
  }
};
