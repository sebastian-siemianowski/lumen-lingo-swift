/**
 * POLISH → ENGLISH FLASHCARDS - PART 3
 * 
 * Native Language: Polish (Polski)
 * Target Language: English
 * 
 * This file contains additional flashcard categories (35-44).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Smartphone,
  Music,
  Church,
  Briefcase,
  Calendar,
  MessageCircle,
  Sparkles,
  GraduationCap,
  Car,
  ShoppingBag
} from "lucide-react";

export const flashcardsCategories_part3 = {
  technology_devices: {
    name: "Technologia i urządzenia",
    description: "Modern technology",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "tech1", polish: "Komputer", english: "Computer", difficulty: "easy", example: "I work on my computer every day at the office", exampleTranslation: "Pracuję na moim komputerze codziennie w biurze" },
      { id: "tech2", polish: "Telefon", english: "Phone", difficulty: "easy", example: "My phone has an excellent camera for taking photos", exampleTranslation: "Mój telefon ma doskonały aparat do robienia zdjęć" },
      { id: "tech3", polish: "Internet", english: "Internet", difficulty: "easy", example: "The internet connection is very fast in this building", exampleTranslation: "Połączenie internetowe jest bardzo szybkie w tym budynku" },
      { id: "tech4", polish: "Klawiatura", english: "Keyboard", difficulty: "easy", example: "The keyboard is wireless and very comfortable to type on", exampleTranslation: "Klawiatura jest bezprzewodowa i bardzo wygodna do pisania" },
      { id: "tech5", polish: "Ekran", english: "Screen", difficulty: "easy", example: "The screen on my laptop is large and bright", exampleTranslation: "Ekran w moim laptopie jest duży i jasny" },
      { id: "tech6", polish: "Aplikacja", english: "Application", difficulty: "easy", example: "I downloaded a new application for learning languages", exampleTranslation: "Pobrałem nową aplikację do nauki języków" },
      { id: "tech7", polish: "Ładowarka", english: "Charger", difficulty: "medium", example: "I need to buy a new charger because the old one broke", exampleTranslation: "Muszę kupić nową ładowarkę bo stara się zepsuła" },
      { id: "tech8", polish: "Hasło", english: "Password", difficulty: "medium", example: "Please create a strong password with letters and numbers", exampleTranslation: "Proszę stworzyć silne hasło z literami i cyframi" },
      { id: "tech9", polish: "Plik", english: "File", difficulty: "medium", example: "I sent you the file by email this morning", exampleTranslation: "Wysłałem ci plik emailem dzisiaj rano" },
      { id: "tech10", polish: "Drukarka", english: "Printer", difficulty: "medium", example: "The printer is out of paper and needs to be refilled", exampleTranslation: "Drukarka nie ma papieru i trzeba ją napełnić" },
      { id: "tech11", polish: "Oprogramowanie", english: "Software", difficulty: "medium", example: "We need to update the software to the latest version", exampleTranslation: "Musimy zaktualizować oprogramowanie do najnowszej wersji" },
      { id: "tech12", polish: "Aktualizacja", english: "Update", difficulty: "medium", example: "The system update will be installed tonight automatically", exampleTranslation: "Aktualizacja systemu zostanie zainstalowana dziś wieczorem automatycznie" },
      { id: "tech13", polish: "Nie mogę się połączyć", english: "I can't connect", difficulty: "hard", example: "I can't connect to the Wi-Fi network in this room", exampleTranslation: "Nie mogę połączyć się z siecią Wi-Fi w tym pokoju" },
      { id: "tech14", polish: "Bateria się rozładowuje", english: "The battery is dying", difficulty: "hard", example: "The battery is dying quickly and needs to be replaced soon", exampleTranslation: "Bateria szybko się rozładowuje i trzeba ją wkrótce wymienić" },
      { id: "tech15", polish: "Jak to zainstalować?", english: "How to install this?", difficulty: "hard", example: "How do I install this program on my new computer?", exampleTranslation: "Jak zainstalować ten program na moim nowym komputerze?" }
    ]
  },

  music_entertainment: {
    name: "Muzyka i rozrywka",
    description: "Music and shows",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "mus1", polish: "Muzyka", english: "Music", difficulty: "easy", example: "I listen to music every day while working at home", exampleTranslation: "Słucham muzyki codziennie podczas pracy w domu" },
      { id: "mus2", polish: "Piosenka", english: "Song", difficulty: "easy", example: "This song is very popular on the radio right now", exampleTranslation: "Ta piosenka jest bardzo popularna w radiu teraz" },
      { id: "mus3", polish: "Koncert", english: "Concert", difficulty: "easy", example: "The concert starts at eight o'clock in the evening", exampleTranslation: "Koncert zaczyna się o ósmej wieczorem" },
      { id: "mus4", polish: "Film", english: "Movie", difficulty: "easy", example: "We watched an interesting movie at the cinema yesterday", exampleTranslation: "Obejrzeliśmy ciekawy film w kinie wczoraj" },
      { id: "mus5", polish: "Teatr", english: "Theater", difficulty: "easy", example: "The theater performance was absolutely amazing and moving", exampleTranslation: "Przedstawienie teatralne było absolutnie niesamowite i poruszające" },
      { id: "mus6", polish: "Gitara", english: "Guitar", difficulty: "easy", example: "I'm learning to play the guitar for six months now", exampleTranslation: "Uczę się grać na gitarze od sześciu miesięcy" },
      { id: "mus7", polish: "Śpiewać", english: "To sing", difficulty: "medium", example: "I love to sing in the shower every morning before work", exampleTranslation: "Uwielbiam śpiewać pod prysznicem każdego ranka przed pracą" },
      { id: "mus8", polish: "Tańczyć", english: "To dance", difficulty: "medium", example: "We like to dance at parties with our friends on weekends", exampleTranslation: "Lubimy tańczyć na imprezach z przyjaciółmi w weekendy" },
      { id: "mus9", polish: "Orkiestra", english: "Orchestra", difficulty: "medium", example: "The symphony orchestra consists of more than one hundred musicians", exampleTranslation: "Orkiestra symfoniczna składa się z ponad stu muzyków" },
      { id: "mus10", polish: "Instrument", english: "Instrument", difficulty: "medium", example: "Do you play any musical instrument or just listen to music?", exampleTranslation: "Grasz na jakimś instrumencie muzycznym czy tylko słuchasz muzyki?" },
      { id: "mus11", polish: "Melodia", english: "Melody", difficulty: "medium", example: "The melody of this song is very catchy and pleasant", exampleTranslation: "Melodia tej piosenki jest bardzo chwytliwa i przyjemna" },
      { id: "mus12", polish: "Rytm", english: "Rhythm", difficulty: "medium", example: "The rhythm of this music makes me want to dance", exampleTranslation: "Rytm tej muzyki sprawia że chce mi się tańczyć" },
      { id: "mus13", polish: "Ta muzyka jest piękna", english: "This music is beautiful", difficulty: "hard", example: "This music is absolutely beautiful and touching to the core", exampleTranslation: "Ta muzyka jest absolutnie piękna i poruszająca do głębi" },
      { id: "mus14", polish: "Idziemy na koncert", english: "We're going to a concert", difficulty: "hard", example: "We're going to a rock concert next Friday evening at nine", exampleTranslation: "Idziemy na koncert rockowy w przyszły piątek wieczorem o dziewiątej" },
      { id: "mus15", polish: "Uczę się grać", english: "I'm learning to play", difficulty: "hard", example: "I'm learning to play the piano and I practice every day", exampleTranslation: "Uczę się grać na pianinie i ćwiczę codziennie" }
    ]
  },

  religion_spirituality: {
    name: "Religia i duchowość",
    description: "Faith and traditions",
    icon: Church,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "rel1", polish: "Kościół", english: "Church", difficulty: "easy", example: "The church in our village is very old and beautiful", exampleTranslation: "Kościół w naszej wsi jest bardzo stary i piękny" },
      { id: "rel2", polish: "Msza", english: "Mass", difficulty: "easy", example: "Sunday mass starts at ten o'clock in the morning", exampleTranslation: "Msza niedzielna zaczyna się o dziesiątej rano" },
      { id: "rel3", polish: "Modlitwa", english: "Prayer", difficulty: "easy", example: "Prayer before meals is a tradition in our family", exampleTranslation: "Modlitwa przed posiłkiem jest tradycją w naszej rodzinie" },
      { id: "rel4", polish: "Wiara", english: "Faith", difficulty: "easy", example: "Faith gives me strength in difficult moments of life", exampleTranslation: "Wiara daje mi siłę w trudnych momentach życia" },
      { id: "rel5", polish: "Biblia", english: "Bible", difficulty: "easy", example: "I read passages from the Bible every evening before sleep", exampleTranslation: "Czytam fragmenty Biblii codziennie wieczorem przed snem" },
      { id: "rel6", polish: "Święto", english: "Holiday", difficulty: "easy", example: "Christmas is the most important religious holiday of the year", exampleTranslation: "Boże Narodzenie jest najważniejszym świętem religijnym roku" },
      { id: "rel7", polish: "Kapłan", english: "Priest", difficulty: "medium", example: "The priest celebrates mass at our parish church every Sunday", exampleTranslation: "Kapłan odprawia mszę w naszym kościele parafialnym w każdą niedzielę" },
      { id: "rel8", polish: "Anioł", english: "Angel", difficulty: "medium", example: "The guardian angel watches over us according to religious beliefs", exampleTranslation: "Anioł stróż opiekuje się nami według wierzeń religijnych" },
      { id: "rel9", polish: "Błogosławieństwo", english: "Blessing", difficulty: "medium", example: "We received the blessing from the priest at the end of mass", exampleTranslation: "Otrzymaliśmy błogosławieństwo od kapłana na zakończenie mszy" },
      { id: "rel10", polish: "Sakrament", english: "Sacrament", difficulty: "medium", example: "The sacrament of baptism is the first in a Christian's life", exampleTranslation: "Sakrament chrztu jest pierwszym w życiu chrześcijanina" },
      { id: "rel11", polish: "Procesja", english: "Procession", difficulty: "medium", example: "The religious procession passes through the main street of the city", exampleTranslation: "Procesja religijna przechodzi przez główną ulicę miasta" },
      { id: "rel12", polish: "Tradycja", english: "Tradition", difficulty: "medium", example: "Christmas Eve tradition is sacred in every Polish family", exampleTranslation: "Tradycja wigilijna jest święta w każdej polskiej rodzinie" },
      { id: "rel13", polish: "Wierzę w Boga", english: "I believe in God", difficulty: "hard", example: "I deeply believe in God and try to live according to values", exampleTranslation: "Wierzę głęboko w Boga i staram się żyć zgodnie z wartościami" },
      { id: "rel14", polish: "Idę do kościoła", english: "I go to church", difficulty: "hard", example: "I go to church every Sunday with my whole family", exampleTranslation: "Idę do kościoła w każdą niedzielę z całą rodziną" },
      { id: "rel15", polish: "To moja wiara", english: "This is my faith", difficulty: "hard", example: "This is my faith and I respect it very much since childhood", exampleTranslation: "To jest moja wiara i bardzo ją szanuję od dzieciństwa" }
    ]
  },

  work_office: {
    name: "Praca i biuro",
    description: "Workplace vocabulary",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "work1", polish: "Praca", english: "Work", difficulty: "easy", example: "I go to work every morning at eight o'clock sharp", exampleTranslation: "Idę do pracy każdego ranka o ósmej rano punktualnie" },
      { id: "work2", polish: "Biuro", english: "Office", difficulty: "easy", example: "The office is located on the fifth floor of this building", exampleTranslation: "Biuro znajduje się na piątym piętrze tego budynku" },
      { id: "work3", polish: "Szef", english: "Boss", difficulty: "easy", example: "My boss is very understanding and helpful at work", exampleTranslation: "Mój szef jest bardzo wyrozumiały i pomocny w pracy" },
      { id: "work4", polish: "Kolega z pracy", english: "Coworker", difficulty: "easy", example: "My coworker from the office is very friendly and nice", exampleTranslation: "Mój kolega z pracy z biura jest bardzo przyjazny i miły" },
      { id: "work5", polish: "Spotkanie", english: "Meeting", difficulty: "easy", example: "We have an important meeting at three o'clock this afternoon", exampleTranslation: "Mamy ważne spotkanie o trzeciej po południu dzisiaj" },
      { id: "work6", polish: "Projekt", english: "Project", difficulty: "easy", example: "This project will take about three months to complete", exampleTranslation: "Ten projekt zajmie około trzech miesięcy do ukończenia" },
      { id: "work7", polish: "Pensja", english: "Salary", difficulty: "medium", example: "My salary is paid on the last day of every month", exampleTranslation: "Moja pensja jest wypłacana ostatniego dnia każdego miesiąca" },
      { id: "work8", polish: "Urlop", english: "Vacation", difficulty: "medium", example: "I'm taking a two-week vacation in July to rest", exampleTranslation: "Biorę dwutygodniowy urlop w lipcu żeby odpocząć" },
      { id: "work9", polish: "Raport", english: "Report", difficulty: "medium", example: "I need to finish this report by Friday morning", exampleTranslation: "Muszę skończyć ten raport do piątku rano" },
      { id: "work10", polish: "Termin", english: "Deadline", difficulty: "medium", example: "The deadline for this project is next Monday at noon", exampleTranslation: "Termin tego projektu to przyszły poniedziałek w południe" },
      { id: "work11", polish: "Umowa", english: "Contract", difficulty: "medium", example: "I signed the employment contract last week at the office", exampleTranslation: "Podpisałem umowę o pracę w zeszłym tygodniu w biurze" },
      { id: "work12", polish: "Awans", english: "Promotion", difficulty: "medium", example: "I got a promotion after three years of hard work", exampleTranslation: "Dostałem awans po trzech latach ciężkiej pracy" },
      { id: "work13", polish: "Pracuję zdalnie", english: "I work remotely", difficulty: "hard", example: "I work remotely from home three days a week now", exampleTranslation: "Pracuję zdalnie z domu trzy dni w tygodniu teraz" },
      { id: "work14", polish: "Mam dużo pracy", english: "I have a lot of work", difficulty: "hard", example: "I have a lot of work this week and many important meetings", exampleTranslation: "Mam dużo pracy w tym tygodniu i wiele ważnych spotkań" },
      { id: "work15", polish: "Kiedy skończysz projekt?", english: "When will you finish the project?", difficulty: "hard", example: "When exactly will you finish this important project for the client?", exampleTranslation: "Kiedy dokładnie skończysz ten ważny projekt dla klienta?" }
    ]
  },

  calendar_time: {
    name: "Kalendarz i czas",
    description: "Days and months",
    icon: Calendar,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "cal1", polish: "Dzisiaj", english: "Today", difficulty: "easy", example: "Today is a beautiful sunny day perfect for a walk", exampleTranslation: "Dzisiaj jest piękny słoneczny dzień idealny na spacer" },
      { id: "cal2", polish: "Wczoraj", english: "Yesterday", difficulty: "easy", example: "Yesterday I was at the cinema with my friends", exampleTranslation: "Wczoraj byłem w kinie z przyjaciółmi" },
      { id: "cal3", polish: "Jutro", english: "Tomorrow", difficulty: "easy", example: "Tomorrow I have an important meeting at ten in the morning", exampleTranslation: "Jutro mam ważne spotkanie o dziesiątej rano" },
      { id: "cal4", polish: "Tydzień", english: "Week", difficulty: "easy", example: "This week I have a lot of work and meetings to attend", exampleTranslation: "W tym tygodniu mam bardzo dużo pracy i spotkań" },
      { id: "cal5", polish: "Miesiąc", english: "Month", difficulty: "easy", example: "Next month I'm going on vacation to Spain for two weeks", exampleTranslation: "Następny miesiąc jadę na urlop do Hiszpanii na dwa tygodnie" },
      { id: "cal6", polish: "Rok", english: "Year", difficulty: "easy", example: "This year was full of wonderful events and big changes", exampleTranslation: "Ten rok był pełen wspaniałych wydarzeń i dużych zmian" },
      { id: "cal7", polish: "Poniedziałek", english: "Monday", difficulty: "medium", example: "Monday is the hardest day of the week for me", exampleTranslation: "Poniedziałek to najtrudniejszy dzień tygodnia dla mnie" },
      { id: "cal8", polish: "Sobota", english: "Saturday", difficulty: "medium", example: "On Saturday I sleep longer and rest after the whole week", exampleTranslation: "W sobotę śpię dłużej i odpoczywam po całym tygodniu" },
      { id: "cal9", polish: "Niedziela", english: "Sunday", difficulty: "medium", example: "On Sunday we meet with family for lunch together", exampleTranslation: "W niedzielę spotykamy się z rodziną na obiedzie razem" },
      { id: "cal10", polish: "Styczeń", english: "January", difficulty: "medium", example: "January is the coldest month of the year here", exampleTranslation: "Styczeń to najzimniejszy miesiąc w roku u nas" },
      { id: "cal11", polish: "Czerwiec", english: "June", difficulty: "medium", example: "In June we have the longest days and shortest nights", exampleTranslation: "W czerwcu są najdłuższe dni i najkrótsze noce" },
      { id: "cal12", polish: "Grudzień", english: "December", difficulty: "medium", example: "December is the month of holidays and family gatherings", exampleTranslation: "Grudzień to miesiąc świąt i rodzinnych spotkań" },
      { id: "cal13", polish: "Który dzisiaj?", english: "What day is it?", difficulty: "hard", example: "I lost track of time, what day is it today exactly?", exampleTranslation: "Zgubiłem rachubę czasu, który dzisiaj jest dzień dokładnie?" },
      { id: "cal14", polish: "Spotkajmy się w piątek", english: "Let's meet on Friday", difficulty: "hard", example: "Let's meet next Friday evening at eight o'clock at the cafe", exampleTranslation: "Spotkajmy się w przyszły piątek wieczorem o ósmej w kawiarni" },
      { id: "cal15", polish: "Minął już miesiąc", english: "A month has passed", difficulty: "hard", example: "I can't believe a whole month has passed since the vacation", exampleTranslation: "Nie mogę uwierzyć że minął już cały miesiąc od wakacji" }
    ]
  },

  communication_phrases: {
    name: "Komunikacja i zwroty",
    description: "Common expressions",
    icon: MessageCircle,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "comm1", polish: "Oczywiście", english: "Of course", difficulty: "easy", example: "Of course I will help you move to your new house", exampleTranslation: "Oczywiście że ci pomogę z przeprowadzką do nowego domu" },
      { id: "comm2", polish: "Może być", english: "That's fine", difficulty: "easy", example: "That's fine, let's do it this way if you prefer", exampleTranslation: "Może być, zróbmy to w ten sposób jeśli wolisz" },
      { id: "comm3", polish: "Nie ma problemu", english: "No problem", difficulty: "easy", example: "No problem at all, I'm happy to help you", exampleTranslation: "Nie ma żadnego problemu, chętnie ci pomogę" },
      { id: "comm4", polish: "Nie wiem", english: "I don't know", difficulty: "easy", example: "I don't know yet what I will do next week", exampleTranslation: "Nie wiem jeszcze co zrobię w przyszłym tygodniu" },
      { id: "comm5", polish: "Masz rację", english: "You're right", difficulty: "easy", example: "You're absolutely right in this discussion and I agree", exampleTranslation: "Masz całkowitą rację w tej dyskusji i się zgadzam" },
      { id: "comm6", polish: "To zależy", english: "It depends", difficulty: "easy", example: "It depends on the weather whether we go for a walk", exampleTranslation: "To zależy od pogody czy pójdziemy na spacer" },
      { id: "comm7", polish: "Nie szkodzi", english: "It doesn't matter", difficulty: "medium", example: "It doesn't matter that you're late, the important thing is you're here", exampleTranslation: "Nie szkodzi że się spóźniłeś, najważniejsze że jesteś" },
      { id: "comm8", polish: "Właśnie", english: "Exactly", difficulty: "medium", example: "Exactly, that's what I meant in my statement earlier", exampleTranslation: "Właśnie, o to mi chodziło w mojej wypowiedzi wcześniej" },
      { id: "comm9", polish: "W każdym razie", english: "Anyway", difficulty: "medium", example: "Anyway, we have to make some decision today about this", exampleTranslation: "W każdym razie musimy podjąć jakąś decyzję dzisiaj w tej sprawie" },
      { id: "comm10", polish: "Bez wątpienia", english: "Without a doubt", difficulty: "medium", example: "Without a doubt it was the best concert of the year", exampleTranslation: "Bez wątpienia to był najlepszy koncert w roku" },
      { id: "comm11", polish: "Na pewno", english: "Certainly", difficulty: "medium", example: "I will certainly come to your birthday party on Saturday", exampleTranslation: "Na pewno przyjdę na twoje urodziny w sobotę" },
      { id: "comm12", polish: "Z przyjemnością", english: "With pleasure", difficulty: "medium", example: "I will help you with this project with great pleasure", exampleTranslation: "Z przyjemnością pomogę ci w tym projekcie z radością" },
      { id: "comm13", polish: "Co masz na myśli?", english: "What do you mean?", difficulty: "hard", example: "What exactly do you mean by saying that to me?", exampleTranslation: "Co dokładnie masz na myśli mówiąc mi to?" },
      { id: "comm14", polish: "Tak mi się wydaje", english: "I think so", difficulty: "hard", example: "I think so but I'm not completely sure about it", exampleTranslation: "Tak mi się wydaje ale nie jestem całkowicie pewien tego" },
      { id: "comm15", polish: "Innymi słowy", english: "In other words", difficulty: "hard", example: "In other words, you have to make this decision yourself", exampleTranslation: "Innymi słowy musisz podjąć tę decyzję sam" }
    ]
  },

  beauty_cosmetics: {
    name: "Uroda i kosmetyki",
    description: "Beauty and care",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "beau1", polish: "Makijaż", english: "Makeup", difficulty: "easy", example: "I apply my daily makeup in fifteen minutes every morning", exampleTranslation: "Nakładam codzienny makijaż w piętnaście minut każdego ranka" },
      { id: "beau2", polish: "Perfumy", english: "Perfume", difficulty: "easy", example: "French perfume has an intense and lasting fragrance", exampleTranslation: "Francuskie perfumy mają intensywny i trwały zapach" },
      { id: "beau3", polish: "Szampon", english: "Shampoo", difficulty: "easy", example: "Shampoo for dry hair moisturizes and nourishes effectively", exampleTranslation: "Szampon do włosów suchych nawilża i odżywia skutecznie" },
      { id: "beau4", polish: "Krem", english: "Cream", difficulty: "easy", example: "I apply face cream every night before going to sleep", exampleTranslation: "Nakładam krem do twarzy każdej nocy przed pójściem spać" },
      { id: "beau5", polish: "Szminka", english: "Lipstick", difficulty: "easy", example: "Red lipstick matches the evening dress perfectly", exampleTranslation: "Czerwona szminka pasuje idealnie do wieczorowej sukienki" },
      { id: "beau6", polish: "Fryzjer", english: "Hairdresser", difficulty: "easy", example: "The hairdresser cuts my hair once every two months", exampleTranslation: "Fryzjer ścina mi włosy raz na dwa miesiące" },
      { id: "beau7", polish: "Lakier do paznokci", english: "Nail polish", difficulty: "medium", example: "The nail polish dries quickly and has a beautiful shine", exampleTranslation: "Lakier do paznokci szybko schnie i ma piękny połysk" },
      { id: "beau8", polish: "Tusz do rzęs", english: "Mascara", difficulty: "medium", example: "Mascara lengthens and thickens eyelashes naturally", exampleTranslation: "Tusz do rzęs wydłuża i pogrubia rzęsy naturalnie" },
      { id: "beau9", polish: "Podkład", english: "Foundation", difficulty: "medium", example: "Foundation evens out skin tone and hides imperfections", exampleTranslation: "Podkład wyrównuje koloryt skóry i ukrywa niedoskonałości" },
      { id: "beau10", polish: "Pędzel", english: "Brush", difficulty: "medium", example: "The makeup brush must be soft and good quality", exampleTranslation: "Pędzel do makijażu musi być miękki i dobrej jakości" },
      { id: "beau11", polish: "Demakijaż", english: "Makeup remover", difficulty: "medium", example: "Evening makeup removal is very important for the skin", exampleTranslation: "Demakijaż wieczorny jest bardzo ważny dla skóry" },
      { id: "beau12", polish: "Salon piękności", english: "Beauty salon", difficulty: "medium", example: "I go to the beauty salon once a month for treatments", exampleTranslation: "Chodzę do salonu piękności raz w miesiącu na zabiegi" },
      { id: "beau13", polish: "Wyglądasz pięknie", english: "You look beautiful", difficulty: "hard", example: "You look absolutely beautiful today with this makeup on", exampleTranslation: "Wyglądasz dzisiaj absolutnie pięknie w tym makijażu" },
      { id: "beau14", polish: "Gdzie to kupiłaś?", english: "Where did you buy this?", difficulty: "hard", example: "Where did you buy this perfume? It smells wonderful", exampleTranslation: "Gdzie kupiłaś te perfumy? Pięknie pachną" },
      { id: "beau15", polish: "Muszę iść do fryzjera", english: "I need to go to the hairdresser", difficulty: "hard", example: "I urgently need to go to the hairdresser because my hair is too long", exampleTranslation: "Muszę pilnie iść do fryzjera bo włosy są za długie" }
    ]
  },

  education_learning: {
    name: "Edukacja i nauka",
    description: "School and studies",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "edu1", polish: "Szkoła", english: "School", difficulty: "easy", example: "The elementary school is located close to my house", exampleTranslation: "Szkoła podstawowa znajduje się blisko mojego domu" },
      { id: "edu2", polish: "Nauczyciel", english: "Teacher", difficulty: "easy", example: "The math teacher explains topics very clearly to students", exampleTranslation: "Nauczyciel matematyki tłumaczy zagadnienia bardzo jasno uczniom" },
      { id: "edu3", polish: "Uczeń", english: "Student", difficulty: "easy", example: "A diligent student always does homework carefully and on time", exampleTranslation: "Pilny uczeń zawsze odrabia zadania domowe starannie i na czas" },
      { id: "edu4", polish: "Lekcja", english: "Lesson", difficulty: "easy", example: "The Spanish language lesson lasts forty-five minutes", exampleTranslation: "Lekcja języka hiszpańskiego trwa czterdzieści pięć minut" },
      { id: "edu5", polish: "Egzamin", english: "Exam", difficulty: "easy", example: "The final exam will take place in two weeks at school", exampleTranslation: "Egzamin końcowy odbędzie się za dwa tygodnie w szkole" },
      { id: "edu6", polish: "Praca domowa", english: "Homework", difficulty: "easy", example: "The math homework is difficult and time-consuming today", exampleTranslation: "Praca domowa z matematyki jest trudna i czasochłonna dzisiaj" },
      { id: "edu7", polish: "Uniwersytet", english: "University", difficulty: "medium", example: "The university has a wonderful campus with modern buildings", exampleTranslation: "Uniwersytet ma wspaniały kampus z nowoczesnymi budynkami" },
      { id: "edu8", polish: "Dyplom", english: "Diploma", difficulty: "medium", example: "I received my graduation diploma in a solemn ceremony", exampleTranslation: "Otrzymałem dyplom ukończenia studiów w uroczystej ceremonii" },
      { id: "edu9", polish: "Stypendium", english: "Scholarship", difficulty: "medium", example: "The academic scholarship covers all the costs of studies", exampleTranslation: "Stypendium naukowe pokrywa wszystkie koszty studiów" },
      { id: "edu10", polish: "Biblioteka", english: "Library", difficulty: "medium", example: "The university library is open until ten in the evening", exampleTranslation: "Biblioteka uniwersytecka jest otwarta do dziesiątej wieczorem" },
      { id: "edu11", polish: "Wykład", english: "Lecture", difficulty: "medium", example: "The professor's lecture lasts two hours with a short break", exampleTranslation: "Wykład profesora trwa dwie godziny z krótką przerwą" },
      { id: "edu12", polish: "Semestr", english: "Semester", difficulty: "medium", example: "The winter semester starts in October every year", exampleTranslation: "Semestr zimowy zaczyna się w październiku każdego roku" },
      { id: "edu13", polish: "Co studiujesz?", english: "What do you study?", difficulty: "hard", example: "What exactly do you study at the university and in which year?", exampleTranslation: "Co dokładnie studiujesz na uniwersytecie i w którym roku?" },
      { id: "edu14", polish: "Mam egzamin jutro", english: "I have an exam tomorrow", difficulty: "hard", example: "I have a very important exam tomorrow and I need to study", exampleTranslation: "Mam bardzo ważny egzamin jutro i muszę się uczyć" },
      { id: "edu15", polish: "Zdałem wszystkie egzaminy", english: "I passed all exams", difficulty: "hard", example: "I passed all exams with high grades this semester", exampleTranslation: "Zdałem wszystkie egzaminy na wysokie oceny w tym semestrze" }
    ]
  },

  car_driving: {
    name: "Samochód i jazda",
    description: "Driving and vehicles",
    icon: Car,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "car1", polish: "Samochód", english: "Car", difficulty: "easy", example: "The car is parked in the driveway in front of the house", exampleTranslation: "Samochód jest zaparkowany na podjeździe przed domem" },
      { id: "car2", polish: "Prowadzić", english: "To drive", difficulty: "easy", example: "I drive the car carefully especially when it rains", exampleTranslation: "Prowadzę samochód ostrożnie zwłaszcza gdy pada deszcz" },
      { id: "car3", polish: "Benzyna", english: "Gasoline", difficulty: "easy", example: "Gasoline is quite expensive today at the gas station", exampleTranslation: "Benzyna jest dość droga dzisiaj na stacji benzynowej" },
      { id: "car4", polish: "Koło", english: "Wheel", difficulty: "easy", example: "The front wheel has a flat tire and needs to be changed", exampleTranslation: "Przednie koło ma przebitą oponę i trzeba ją wymienić" },
      { id: "car5", polish: "Silnik", english: "Engine", difficulty: "easy", example: "The car engine runs quietly and very efficiently", exampleTranslation: "Silnik samochodu pracuje cicho i bardzo wydajnie" },
      { id: "car6", polish: "Kierownica", english: "Steering wheel", difficulty: "easy", example: "The steering wheel is equipped with music control buttons", exampleTranslation: "Kierownica jest wyposażona w przyciski sterowania muzyką" },
      { id: "car7", polish: "Hamulec", english: "Brake", difficulty: "medium", example: "I use the emergency brake only in urgent situations", exampleTranslation: "Hamulec awaryjny używam tylko w nagłych sytuacjach" },
      { id: "car8", polish: "Pas bezpieczeństwa", english: "Seatbelt", difficulty: "medium", example: "Always fasten your seatbelt before starting to drive the car", exampleTranslation: "Zawsze zapnij pas bezpieczeństwa przed rozpoczęciem jazdy samochodem" },
      { id: "car9", polish: "Parkowanie", english: "Parking", difficulty: "medium", example: "Parallel parking is difficult in narrow streets downtown", exampleTranslation: "Parkowanie równoległe jest trudne w wąskich uliczkach w centrum" },
      { id: "car10", polish: "Mandat", english: "Ticket", difficulty: "medium", example: "The speeding ticket costs two hundred zlotys to pay", exampleTranslation: "Mandat za przekroczenie prędkości kosztuje dwieście złotych do zapłaty" },
      { id: "car11", polish: "Prawo jazdy", english: "Driver's license", difficulty: "medium", example: "I got my driver's license a year ago after passing the exam", exampleTranslation: "Dostałem prawo jazdy rok temu po zdaniu egzaminu" },
      { id: "car12", polish: "Mechanik", english: "Mechanic", difficulty: "medium", example: "The mechanic is fixing my car and it will be ready tomorrow", exampleTranslation: "Mechanik naprawia mój samochód i będzie gotowy jutro" },
      { id: "car13", polish: "Samochód się zepsuł", english: "The car broke down", difficulty: "hard", example: "The car broke down on the road and I need to call for help", exampleTranslation: "Samochód się zepsuł w drodze i muszę wezwać pomoc" },
      { id: "car14", polish: "Muszę zatankować", english: "I need to refuel", difficulty: "hard", example: "I urgently need to refuel because the gasoline is running out", exampleTranslation: "Muszę pilnie zatankować bo kończy się benzyna" },
      { id: "car15", polish: "Gdzie mogę zaparkować?", english: "Where can I park?", difficulty: "hard", example: "Where can I safely park my car in the city center?", exampleTranslation: "Gdzie mogę bezpiecznie zaparkować samochód w centrum miasta?" }
    ]
  },

  celebrations_events: {
    name: "Święta i uroczystości",
    description: "Special occasions",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cel1", polish: "Urodziny", english: "Birthday", difficulty: "easy", example: "We celebrate my sister's birthday in a large family gathering", exampleTranslation: "Świętujemy urodziny mojej siostry w wielkim gronie rodzinnym" },
      { id: "cel2", polish: "Wesele", english: "Wedding", difficulty: "easy", example: "The wedding takes place in a beautiful palace outside the city", exampleTranslation: "Wesele odbywa się w pięknym pałacu za miastem" },
      { id: "cel3", polish: "Rocznica", english: "Anniversary", difficulty: "easy", example: "A wedding anniversary is an important day for every couple", exampleTranslation: "Rocznica ślubu to ważny dzień dla każdej pary" },
      { id: "cel4", polish: "Prezent", english: "Gift", difficulty: "easy", example: "The birthday gift is beautifully wrapped in colorful paper", exampleTranslation: "Prezent urodzinowy jest pięknie zapakowany w kolorowy papier" },
      { id: "cel5", polish: "Tort", english: "Cake", difficulty: "easy", example: "The birthday cake has three layers and chocolate frosting", exampleTranslation: "Tort urodzinowy ma trzy piętra i czekoladową polewę" },
      { id: "cel6", polish: "Świeczki", english: "Candles", difficulty: "easy", example: "We blew out the candles on the birthday cake together", exampleTranslation: "Zdmuchnęliśmy świeczki na torcie urodzinowym razem" },
      { id: "cel7", polish: "Dekoracje", english: "Decorations", difficulty: "medium", example: "Christmas decorations are hanging throughout the house and garden", exampleTranslation: "Dekoracje świąteczne wiszą w całym domu i ogrodzie" },
      { id: "cel8", polish: "Zaproszenie", english: "Invitation", difficulty: "medium", example: "We sent the wedding invitation a month before the ceremony", exampleTranslation: "Wysłaliśmy zaproszenie na wesele miesiąc przed uroczystością" },
      { id: "cel9", polish: "Goście", english: "Guests", difficulty: "medium", example: "The guests will arrive at the party around seven in the evening", exampleTranslation: "Goście przyjdą na przyjęcie około siódmej wieczorem" },
      { id: "cel10", polish: "Tradycja", english: "Tradition", difficulty: "medium", example: "Christmas Eve tradition is sacred in every Polish family", exampleTranslation: "Tradycja wigilijna jest święta w każdej polskiej rodzinie" },
      { id: "cel11", polish: "Uroczystość", english: "Ceremony", difficulty: "medium", example: "The wedding ceremony was touching and beautiful to watch", exampleTranslation: "Uroczystość ślubna była wzruszająca i piękna do oglądania" },
      { id: "cel12", polish: "Gratulacje", english: "Congratulations", difficulty: "medium", example: "Congratulations to the young couple on the occasion of their wedding", exampleTranslation: "Gratulacje dla młodej pary z okazji ślubu" },
      { id: "cel13", polish: "Wszystkiego najlepszego!", english: "Happy birthday!", difficulty: "hard", example: "Happy birthday on your special day! Many more to come!", exampleTranslation: "Wszystkiego najlepszego z okazji urodzin! Sto lat!" },
      { id: "cel14", polish: "Wesołych Świąt", english: "Merry Christmas", difficulty: "hard", example: "Merry Christmas and a Happy New Year to everyone!", exampleTranslation: "Wesołych Świąt Bożego Narodzenia i szczęśliwego Nowego Roku wszystkim!" },
      { id: "cel15", polish: "Dziękuję za zaproszenie", english: "Thank you for the invitation", difficulty: "hard", example: "Thank you very much for the invitation to this wonderful ceremony", exampleTranslation: "Dziękuję bardzo za zaproszenie na tę wspaniałą uroczystość" }
    ]
  },

  personality_traits: {
    name: "Cechy charakteru",
    description: "Describing personality",
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "pers1", polish: "Miły", english: "Kind", difficulty: "easy", example: "He is very kind and always smiling to people around him", exampleTranslation: "On jest bardzo miły i zawsze uśmiechnięty do ludzi wokół niego" },
      { id: "pers2", polish: "Inteligentny", english: "Intelligent", difficulty: "easy", example: "The intelligent student quickly solves difficult math problems", exampleTranslation: "Inteligentny uczeń szybko rozwiązuje trudne problemy matematyczne" },
      { id: "pers3", polish: "Pracowity", english: "Hard-working", difficulty: "easy", example: "A hard-working person always achieves their life goals successfully", exampleTranslation: "Pracowity człowiek zawsze osiąga swoje cele życiowe z sukcesem" },
      { id: "pers4", polish: "Cierpliwy", english: "Patient", difficulty: "easy", example: "A patient teacher explains difficult topics many times to students", exampleTranslation: "Cierpliwy nauczyciel wielokrotnie tłumaczy trudne zagadnienia uczniom" },
      { id: "pers5", polish: "Uczciwy", english: "Honest", difficulty: "easy", example: "An honest person always tells the truth even when it's difficult", exampleTranslation: "Uczciwy człowiek zawsze mówi prawdę nawet gdy jest trudna" },
      { id: "pers6", polish: "Wesoły", english: "Cheerful", difficulty: "easy", example: "A cheerful character helps in difficult life situations", exampleTranslation: "Wesoły charakter pomaga w trudnych sytuacjach życiowych" },
      { id: "pers7", polish: "Nieśmiały", english: "Shy", difficulty: "medium", example: "The shy boy is afraid to talk to strangers at school", exampleTranslation: "Nieśmiały chłopiec boi się rozmawiać z obcymi ludźmi w szkole" },
      { id: "pers8", polish: "Pewny siebie", english: "Confident", difficulty: "medium", example: "The confident team leader makes decisions without hesitation", exampleTranslation: "Pewny siebie lider zespołu podejmuje decyzje bez wahania" },
      { id: "pers9", polish: "Hojny", english: "Generous", difficulty: "medium", example: "The generous host always shares food with guests at parties", exampleTranslation: "Hojny gospodarz zawsze dzieli się jedzeniem z gośćmi na przyjęciach" },
      { id: "pers10", polish: "Ambitny", english: "Ambitious", difficulty: "medium", example: "The ambitious young person strives to achieve great goals in life", exampleTranslation: "Ambitny młody człowiek dąży do osiągnięcia wielkich celów w życiu" },
      { id: "pers11", polish: "Towarzyski", english: "Sociable", difficulty: "medium", example: "A sociable person likes to be in a large group of friends", exampleTranslation: "Towarzyska osoba lubi przebywać w dużym gronie znajomych" },
      { id: "pers12", polish: "Odpowiedzialny", english: "Responsible", difficulty: "medium", example: "A responsible employee always fulfills their duties on time", exampleTranslation: "Odpowiedzialny pracownik zawsze wywiązuje się z obowiązków na czas" },
      { id: "pers13", polish: "Jaki on jest?", english: "What is he like?", difficulty: "hard", example: "What is his character and personality like according to you?", exampleTranslation: "Jaki jest jego charakter i osobowość według ciebie?" },
      { id: "pers14", polish: "On ma dobre serce", english: "He has a good heart", difficulty: "hard", example: "He really has a good heart and always helps other people", exampleTranslation: "On ma naprawdę dobre serce i zawsze pomaga innym ludziom" },
      { id: "pers15", polish: "Jestem dumny z siebie", english: "I'm proud of myself", difficulty: "hard", example: "I'm very proud of myself for these achievements this year", exampleTranslation: "Jestem bardzo dumny z siebie za te osiągnięcia w tym roku" }
    ]
  },

  shopping_money: {
    name: "Zakupy i pieniądze",
    description: "Shopping and finance",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { id: "shop1", polish: "Sklep", english: "Shop", difficulty: "easy", example: "The shop on the corner is open until eight in the evening", exampleTranslation: "Sklep na rogu jest otwarty do ósmej wieczorem" },
      { id: "shop2", polish: "Kupować", english: "To buy", difficulty: "easy", example: "I buy fresh vegetables at the market every Saturday morning", exampleTranslation: "Kupuję świeże warzywa na targu w każdą sobotę rano" },
      { id: "shop3", polish: "Sprzedawać", english: "To sell", difficulty: "easy", example: "I'm selling my old phone to buy a new model", exampleTranslation: "Sprzedaję stary telefon żeby kupić nowy model" },
      { id: "shop4", polish: "Cena", english: "Price", difficulty: "easy", example: "The price of this product is too high for my budget", exampleTranslation: "Cena tego produktu jest zbyt wysoka dla mojego budżetu" },
      { id: "shop5", polish: "Drogi", english: "Expensive", difficulty: "easy", example: "This watch is very expensive but of high quality", exampleTranslation: "Ten zegarek jest bardzo drogi ale wysokiej jakości" },
      { id: "shop6", polish: "Tani", english: "Cheap", difficulty: "easy", example: "I found a cheap hotel close to the city center", exampleTranslation: "Znalazłem tani hotel blisko centrum miasta" },
      { id: "shop7", polish: "Wyprzedaż", english: "Sale", difficulty: "medium", example: "The big sale at the shopping mall lasts all week long", exampleTranslation: "Wielka wyprzedaż w centrum handlowym trwa cały tydzień" },
      { id: "shop8", polish: "Zniżka", english: "Discount", difficulty: "medium", example: "I got a twenty percent discount on all products in the store", exampleTranslation: "Dostałem dwadzieścia procent zniżki na wszystkie produkty w sklepie" },
      { id: "shop9", polish: "Reszta", english: "Change", difficulty: "medium", example: "I paid with a banknote and received the change in coins", exampleTranslation: "Zapłaciłem banknotem i dostałem resztę w monetach" },
      { id: "shop10", polish: "Paragon", english: "Receipt", difficulty: "medium", example: "Keep the receipt because you can return the product within a month", exampleTranslation: "Zachowaj paragon bo możesz zwrócić produkt w ciągu miesiąca" },
      { id: "shop11", polish: "Karta kredytowa", english: "Credit card", difficulty: "medium", example: "I prefer to pay by credit card instead of cash", exampleTranslation: "Wolę płacić kartą kredytową zamiast gotówką" },
      { id: "shop12", polish: "Zwrot", english: "Return", difficulty: "medium", example: "I want to make a return of this jacket because it's too small", exampleTranslation: "Chcę zrobić zwrot tej kurtki bo jest za mała" },
      { id: "shop13", polish: "Ile to kosztuje?", english: "How much does it cost?", difficulty: "hard", example: "How much exactly does this product cost with tax included?", exampleTranslation: "Ile dokładnie kosztuje ten produkt z podatkiem włączonym?" },
      { id: "shop14", polish: "Czy mogę zapłacić kartą?", english: "Can I pay by card?", difficulty: "hard", example: "Can I pay by card or only cash at this store?", exampleTranslation: "Czy mogę zapłacić kartą czy tylko gotówką w tym sklepie?" },
      { id: "shop15", polish: "To za drogie", english: "It's too expensive", difficulty: "hard", example: "It's definitely too expensive and I can't afford it right now", exampleTranslation: "To jest zdecydowanie za drogie i nie mogę sobie na to pozwolić teraz" }
    ]
  },

  daily_routine: {
    name: "Codzienna rutyna",
    description: "Daily activities",
    icon: Calendar,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "rout1", polish: "Budzić się", english: "To wake up", difficulty: "easy", example: "I wake up every day at six in the morning to the alarm", exampleTranslation: "Budzę się codziennie o szóstej rano na alarm" },
      { id: "rout2", polish: "Myć się", english: "To wash", difficulty: "easy", example: "I wash myself in the shower with warm water every morning", exampleTranslation: "Myję się pod prysznicem ciepłą wodą każdego ranka" },
      { id: "rout3", polish: "Ubierać się", english: "To get dressed", difficulty: "easy", example: "I get dressed quickly in ten minutes before leaving the house", exampleTranslation: "Ubieram się szybko w dziesięć minut przed wyjściem z domu" },
      { id: "rout4", polish: "Jeść śniadanie", english: "To have breakfast", difficulty: "easy", example: "I have breakfast consisting of coffee, bread and eggs every day", exampleTranslation: "Jem śniadanie składające się z kawy, chleba i jajek codziennie" },
      { id: "rout5", polish: "Wychodzić", english: "To leave", difficulty: "easy", example: "I leave home at eight in the morning punctually every weekday", exampleTranslation: "Wychodzę z domu o ósmej rano punktualnie w każdy dzień roboczy" },
      { id: "rout6", polish: "Wracać", english: "To return", difficulty: "easy", example: "I return from work around six in the evening feeling tired", exampleTranslation: "Wracam z pracy około szóstej wieczorem czując się zmęczony" },
      { id: "rout7", polish: "Gotować kolację", english: "To cook dinner", difficulty: "medium", example: "I cook dinner for the whole family after returning from work", exampleTranslation: "Gotuję kolację dla całej rodziny po powrocie z pracy" },
      { id: "rout8", polish: "Sprzątać", english: "To clean", difficulty: "medium", example: "I clean the apartment thoroughly every Saturday morning without fail", exampleTranslation: "Sprzątam mieszkanie dokładnie w każdą sobotę rano bez wyjątku" },
      { id: "rout9", polish: "Robić zakupy", english: "To do shopping", difficulty: "medium", example: "I do grocery shopping once a week at the supermarket nearby", exampleTranslation: "Robię zakupy spożywcze raz w tygodniu w supermarkecie w pobliżu" },
      { id: "rout10", polish: "Odpoczywać", english: "To rest", difficulty: "medium", example: "I rest after work by watching television or reading books", exampleTranslation: "Odpoczywam po pracy oglądając telewizję lub czytając książki" },
      { id: "rout11", polish: "Kłaść się spać", english: "To go to bed", difficulty: "medium", example: "I go to bed at eleven at night regularly every evening", exampleTranslation: "Kładę się spać o jedenastej wieczorem regularnie każdego wieczoru" },
      { id: "rout12", polish: "Zasypiać", english: "To fall asleep", difficulty: "medium", example: "I fall asleep quickly when I'm very tired from the day", exampleTranslation: "Zasypiam szybko gdy jestem bardzo zmęczony po całym dniu" },
      { id: "rout13", polish: "O której wstajesz?", english: "What time do you get up?", difficulty: "hard", example: "What time do you usually get up on working days?", exampleTranslation: "O której godzinie zazwyczaj wstajesz w dni robocze?" },
      { id: "rout14", polish: "Mam stały rozkład dnia", english: "I have a fixed routine", difficulty: "hard", example: "I have a very fixed daily routine and stick to it every day", exampleTranslation: "Mam bardzo stały rozkład dnia i trzymam się go codziennie" },
      { id: "rout15", polish: "Co robisz wieczorami?", english: "What do you do in the evenings?", difficulty: "hard", example: "What do you usually do in the evenings after returning from work?", exampleTranslation: "Co zazwyczaj robisz wieczorami po powrocie z pracy?" }
    ]
  },

  opinions_preferences: {
    name: "Opinie i preferencje",
    description: "Expressing thoughts",
    icon: MessageCircle,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "opin1", polish: "Lubię", english: "I like", difficulty: "easy", example: "I like reading books and watching movies in the evenings", exampleTranslation: "Lubię czytać książki i oglądać filmy wieczorami" },
      { id: "opin2", polish: "Nie lubię", english: "I don't like", difficulty: "easy", example: "I don't like waking up early on cold winter mornings", exampleTranslation: "Nie lubię wczesnego wstawania w zimowe poranki" },
      { id: "opin3", polish: "Wolę", english: "I prefer", difficulty: "easy", example: "I prefer coffee over tea for breakfast every single day", exampleTranslation: "Wolę kawę niż herbatę do śniadania każdego dnia" },
      { id: "opin4", polish: "Uważam że", english: "I think that", difficulty: "easy", example: "I think that education is most important in a young person's life", exampleTranslation: "Uważam że edukacja jest najważniejsza w życiu młodego człowieka" },
      { id: "opin5", polish: "Moim zdaniem", english: "In my opinion", difficulty: "easy", example: "In my opinion this movie is the best one this year", exampleTranslation: "Moim zdaniem ten film jest najlepszy w tym roku" },
      { id: "opin6", polish: "Wydaje mi się", english: "It seems to me", difficulty: "easy", example: "It seems to me that you're right in this discussion", exampleTranslation: "Wydaje mi się że masz rację w tej dyskusji" },
      { id: "opin7", polish: "Zgadzam się", english: "I agree", difficulty: "medium", example: "I completely agree with your point of view on this matter", exampleTranslation: "Zgadzam się całkowicie z twoim punktem widzenia w tej sprawie" },
      { id: "opin8", polish: "Nie zgadzam się", english: "I disagree", difficulty: "medium", example: "I disagree with this decision and would like to discuss it", exampleTranslation: "Nie zgadzam się z tą decyzją i chciałbym to omówić" },
      { id: "opin9", polish: "Ulubiony", english: "Favorite", difficulty: "medium", example: "My favorite color is blue like the sky in summer", exampleTranslation: "Mój ulubiony kolor to niebieski jak niebo latem" },
      { id: "opin10", polish: "Nienawidzę", english: "I hate", difficulty: "medium", example: "I hate waiting in long queues at government offices", exampleTranslation: "Nienawidzę czekać w długich kolejkach w urzędach" },
      { id: "opin11", polish: "Interesuje mnie", english: "I'm interested in", difficulty: "medium", example: "I'm interested in the history and culture of ancient Rome", exampleTranslation: "Interesuje mnie historia i kultura starożytnego Rzymu" },
      { id: "opin12", polish: "Podoba mi się", english: "I like it", difficulty: "medium", example: "I like this new architectural project in the city very much", exampleTranslation: "Podoba mi się ten nowy projekt architektoniczny w mieście bardzo" },
      { id: "opin13", polish: "Co o tym myślisz?", english: "What do you think about this?", difficulty: "hard", example: "What exactly do you think about this new idea we discussed?", exampleTranslation: "Co dokładnie myślisz o tym nowym pomyśle który omawialiśmy?" },
      { id: "opin14", polish: "Masz inne zdanie?", english: "Do you have a different opinion?", difficulty: "hard", example: "Do you have a different opinion on this topic or do you agree?", exampleTranslation: "Masz inne zdanie na ten temat czy się zgadzasz?" },
      { id: "opin15", polish: "Według mnie to świetny pomysł", english: "I think it's a great idea", difficulty: "hard", example: "I think it's really a great idea worth implementing soon", exampleTranslation: "Według mnie to naprawdę świetny pomysł wart realizacji wkrótce" }
    ]
  },

  post_office: {
    name: "Poczta i przesyłki",
    description: "Mail and packages",
    icon: ShoppingBag,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "post1", polish: "Poczta", english: "Post office", difficulty: "easy", example: "I'm going to the post office to send a package to my sister", exampleTranslation: "Idę na pocztę wysłać paczkę do mojej siostry" },
      { id: "post2", polish: "List", english: "Letter", difficulty: "easy", example: "I wrote a long letter to grandmother describing my life recently", exampleTranslation: "Napisałem długi list do babci opisując moje życie ostatnio" },
      { id: "post3", polish: "Paczka", english: "Package", difficulty: "easy", example: "The package with books will arrive in two days by mail", exampleTranslation: "Paczka z książkami przyjdzie za dwa dni pocztą" },
      { id: "post4", polish: "Koperta", english: "Envelope", difficulty: "easy", example: "I put the letter in the envelope and stuck a stamp on it", exampleTranslation: "Włożyłem list do koperty i nakleiłem na nią znaczek" },
      { id: "post5", polish: "Znaczek", english: "Stamp", difficulty: "easy", example: "This postage stamp costs five zlotys at the post office", exampleTranslation: "Ten znaczek pocztowy kosztuje pięć złotych na poczcie" },
      { id: "post6", polish: "Nadawca", english: "Sender", difficulty: "easy", example: "Write the sender's address on the back of the envelope clearly", exampleTranslation: "Napisz adres nadawcy na odwrocie koperty wyraźnie" },
      { id: "post7", polish: "Odbiorca", english: "Recipient", difficulty: "medium", example: "The recipient's address must be written clearly and legibly", exampleTranslation: "Adres odbiorcy musi być napisany wyraźnie i czytelnie" },
      { id: "post8", polish: "Przesyłka", english: "Shipment", difficulty: "medium", example: "The shipment was sent by priority mail for faster delivery", exampleTranslation: "Przesyłka została wysłana pocztą priorytetową dla szybszej dostawy" },
      { id: "post9", polish: "Kod pocztowy", english: "Postal code", difficulty: "medium", example: "Don't forget to add the postal code on the envelope", exampleTranslation: "Nie zapomnij dopisać kodu pocztowego na kopercie" },
      { id: "post10", polish: "Dostawa", english: "Delivery", difficulty: "medium", example: "The package delivery is scheduled for tomorrow morning at ten", exampleTranslation: "Dostawa paczki jest przewidziana na jutro rano o dziesiątej" },
      { id: "post11", polish: "Skrzynka pocztowa", english: "Mailbox", difficulty: "medium", example: "Drop the letter in the yellow mailbox on the corner", exampleTranslation: "Wrzuć list do żółtej skrzynki pocztowej na rogu" },
      { id: "post12", polish: "Potwierdzenie odbioru", english: "Confirmation of receipt", difficulty: "medium", example: "I sent the letter with confirmation of receipt for security", exampleTranslation: "Wysłałem list z potwierdzeniem odbioru dla bezpieczeństwa" },
      { id: "post13", polish: "Kiedy przyjdzie paczka?", english: "When will the package arrive?", difficulty: "hard", example: "When exactly will my package from abroad arrive here?", exampleTranslation: "Kiedy dokładnie przyjdzie moja paczka z zagranicy tutaj?" },
      { id: "post14", polish: "Wysłałem to wczoraj", english: "I sent it yesterday", difficulty: "hard", example: "I sent it yesterday by express mail with tracking number", exampleTranslation: "Wysłałem to wczoraj pocztą ekspresową z numerem śledzenia" },
      { id: "post15", polish: "Czy mogę śledzić przesyłkę?", english: "Can I track the shipment?", difficulty: "hard", example: "Can I track my shipment online through the website?", exampleTranslation: "Czy mogę śledzić moją przesyłkę online przez stronę internetową?" }
    ]
  },

  phone_communication: {
    name: "Telefon i komunikacja",
    description: "Phone calls and messages",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "phone1", polish: "Telefon", english: "Phone", difficulty: "easy", example: "The phone is ringing but I can't answer right now", exampleTranslation: "Telefon dzwoni ale nie mogę teraz odebrać" },
      { id: "phone2", polish: "Dzwonić", english: "To call", difficulty: "easy", example: "I need to call the doctor to make an appointment soon", exampleTranslation: "Muszę zadzwonić do lekarza umówić się na wizytę wkrótce" },
      { id: "phone3", polish: "Odbierać", english: "To answer", difficulty: "easy", example: "I can't answer the phone now because I'm very busy", exampleTranslation: "Nie mogę teraz odebrać telefonu bo jestem bardzo zajęty" },
      { id: "phone4", polish: "Wiadomość", english: "Message", difficulty: "easy", example: "I sent a text message asking for a callback soon", exampleTranslation: "Wysłałem wiadomość tekstową z prośbą o telefon zwrotny wkrótce" },
      { id: "phone5", polish: "Połączenie", english: "Connection", difficulty: "easy", example: "The phone connection was suddenly interrupted during our call", exampleTranslation: "Połączenie telefoniczne zostało nagle przerwane podczas naszej rozmowy" },
      { id: "phone6", polish: "Numer", english: "Number", difficulty: "easy", example: "Give me your phone number so I can call you later", exampleTranslation: "Podaj mi swój numer telefonu żebym mógł zadzwonić później" },
      { id: "phone7", polish: "Rozmawiać", english: "To talk", difficulty: "medium", example: "I talked with him on the phone for an entire hour today", exampleTranslation: "Rozmawiałem z nim przez telefon przez całą godzinę dzisiaj" },
      { id: "phone8", polish: "Zostawić wiadomość", english: "To leave a message", difficulty: "medium", example: "Leave a message on the answering machine and I'll call back later", exampleTranslation: "Zostaw wiadomość na sekretarce a oddzwonię później" },
      { id: "phone9", polish: "Przekazać", english: "To pass on", difficulty: "medium", example: "Can you pass on to him that I called about the meeting?", exampleTranslation: "Możesz przekazać mu że dzwoniłem w sprawie spotkania?" },
      { id: "phone10", polish: "Nie ma zasięgu", english: "No signal", difficulty: "medium", example: "There's no signal in this building and the phone doesn't work", exampleTranslation: "Nie ma zasięgu w tym budynku i telefon nie działa" },
      { id: "phone11", polish: "Bateria się kończy", english: "Battery is dying", difficulty: "medium", example: "The phone battery is dying and I need to charge it quickly", exampleTranslation: "Bateria w telefonie się kończy i muszę szybko naładować" },
      { id: "phone12", polish: "Głośnomówiący", english: "Speakerphone", difficulty: "medium", example: "I turn on speakerphone to have my hands free during the call", exampleTranslation: "Włączam głośnomówiący żeby mieć wolne ręce podczas rozmowy" },
      { id: "phone13", polish: "Czy mogę zostawić wiadomość?", english: "Can I leave a message?", difficulty: "hard", example: "Can I leave a message since he's not here right now?", exampleTranslation: "Czy mogę zostawić wiadomość skoro nie ma go teraz?" },
      { id: "phone14", polish: "Oddzwonię później", english: "I'll call back later", difficulty: "hard", example: "I'm busy now but I'll call back later this evening for sure", exampleTranslation: "Teraz jestem zajęty ale oddzwonię później wieczorem na pewno" },
      { id: "phone15", polish: "Nie słyszę cię dobrze", english: "I can't hear you well", difficulty: "hard", example: "I can't hear you well because of the noise on the line", exampleTranslation: "Nie słyszę cię dobrze przez szumy na linii" }
    ]
  }
};