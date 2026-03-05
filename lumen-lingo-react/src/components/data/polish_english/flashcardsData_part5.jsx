
/**
 * POLISH → ENGLISH FLASHCARDS - PART 5
 * 
 * Native Language: Polish (Polski)
 * Target Language: English
 * 
 * This file contains additional flashcard categories (55-64).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  BookOpen,
  Bed,
  Gift,
  Cloud,
  Leaf,
  Users,
  Trophy,
  Home,
  Shirt,
  Coffee
} from "lucide-react";

export const flashcardsCategories_part5 = {
  books_literature: {
    name: "Książki i literatura",
    description: "Books and reading",
    icon: BookOpen,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "book1", polish: "Książka", english: "Book", difficulty: "easy", example: "The book I'm reading is extremely interesting and engaging to read", exampleTranslation: "Książka którą czytam jest niezwykle interesująca i wciągająca do czytania" },
      { id: "book2", polish: "Gazeta", english: "Newspaper", difficulty: "easy", example: "I read the newspaper every morning during breakfast and coffee", exampleTranslation: "Czytam gazetę codziennie rano przy śniadaniu i kawie" },
      { id: "book3", polish: "Czasopismo", english: "Magazine", difficulty: "easy", example: "I buy the fashion magazine every month at the newsstand", exampleTranslation: "Kupuję czasopismo modowe co miesiąc w kiosku" },
      { id: "book4", polish: "Strona", english: "Page", difficulty: "easy", example: "I've already read two hundred pages of this fascinating novel", exampleTranslation: "Przeczytałem już dwieście stron tej fascynującej powieści" },
      { id: "book5", polish: "Rozdział", english: "Chapter", difficulty: "easy", example: "The first chapter introduces the main characters of the story", exampleTranslation: "Pierwszy rozdział wprowadza głównych bohaterów historii" },
      { id: "book6", polish: "Autor", english: "Author", difficulty: "easy", example: "The author of this book is a winner of the literary award", exampleTranslation: "Autor tej książki jest laureatem nagrody literackiej" },
      { id: "book7", polish: "Opowiadanie", english: "Short story", difficulty: "medium", example: "A short story can be read in about half an hour easily", exampleTranslation: "Krótkie opowiadanie można przeczytać w około pół godziny łatwo" },
      { id: "book8", polish: "Powieść", english: "Novel", difficulty: "medium", example: "The historical novel describes events from the nineteenth century", exampleTranslation: "Powieść historyczna opisuje wydarzenia z dziewiętnastego wieku" },
      { id: "book9", polish: "Wiersz", english: "Poem", difficulty: "medium", example: "The romantic poem expresses the poet's deep feelings beautifully", exampleTranslation: "Romantyczny wiersz wyraża głębokie uczucia poety pięknie" },
      { id: "book10", polish: "Biblioteka", english: "Library", difficulty: "medium", example: "The city library has a huge collection of books and magazines", exampleTranslation: "Biblioteka miejska ma ogromną kolekcję książek i czasopism" },
      { id: "book11", polish: "Czytelnia", english: "Reading room", difficulty: "medium", example: "The reading room in the library is quiet and conducive to studying", exampleTranslation: "Czytelnia w bibliotece jest cicha i sprzyjająca nauce" },
      { id: "book12", polish: "Czytnik", english: "E-reader", difficulty: "medium", example: "The electronic reader can hold thousands of books in memory", exampleTranslation: "Czytnik elektroniczny pomieści tysiące książek w pamięci" },
      { id: "book13", polish: "Polecasz tę książkę?", english: "Do you recommend this book?", difficulty: "hard", example: "Do you recommend this book or should I read another one instead?", exampleTranslation: "Polecasz tę książkę czy raczej powinienem przeczytać inną?" },
      { id: "book14", polish: "Uwielbiam czytać", english: "I love to read", difficulty: "hard", example: "I absolutely love to read books in the evenings by the nightlight", exampleTranslation: "Uwielbiam czytać książki wieczorami przy lampce nocnej" },
      { id: "book15", polish: "To wspaniała historia", english: "It's a wonderful story", difficulty: "hard", example: "It's really a wonderful story full of emotions and plot twists", exampleTranslation: "To jest naprawdę wspaniała historia pełna emocji i zwrotów akcji" }
    ]
  },

  sleep_rest: {
    name: "Sen i odpoczynek",
    description: "Sleep and relaxation",
    icon: Bed,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "sleep1", polish: "Sen", english: "Sleep", difficulty: "easy", example: "Good quality sleep is very important for health and energy", exampleTranslation: "Dobry sen jest bardzo ważny dla zdrowia i energii" },
      { id: "sleep2", polish: "Łóżko", english: "Bed", difficulty: "easy", example: "My bed is very comfortable and has a soft mattress", exampleTranslation: "Moje łóżko jest bardzo wygodne i ma miękki materac" },
      { id: "sleep3", polish: "Poduszka", english: "Pillow", difficulty: "easy", example: "I sleep on a soft pillow that supports my head well", exampleTranslation: "Śpię na miękkiej poduszce która dobrze podpiera głowę" },
      { id: "sleep4", polish: "Kołdra", english: "Blanket", difficulty: "easy", example: "The warm blanket keeps me cozy during cold winter nights", exampleTranslation: "Ciepła kołdra otula mnie w zimne zimowe noce" },
      { id: "sleep5", polish: "Spać", english: "To sleep", difficulty: "easy", example: "I sleep eight hours every night to be well rested", exampleTranslation: "Śpię osiem godzin każdej nocy aby być dobrze wypoczętym" },
      { id: "sleep6", polish: "Zmęczony", english: "Tired", difficulty: "easy", example: "I feel very tired after a long day at work today", exampleTranslation: "Czuję się bardzo zmęczony po długim dniu w pracy dzisiaj" },
      { id: "sleep7", polish: "Drzemka", english: "Nap", difficulty: "medium", example: "A short afternoon nap helps me regain energy for the rest of day", exampleTranslation: "Krótka popołudniowa drzemka pomaga mi odzyskać energię na resztę dnia" },
      { id: "sleep8", polish: "Budzik", english: "Alarm clock", difficulty: "medium", example: "I set my alarm clock for six in the morning every weekday", exampleTranslation: "Nastawiam budzik na szóstą rano w każdy dzień roboczy" },
      { id: "sleep9", polish: "Bezsenność", english: "Insomnia", difficulty: "medium", example: "Insomnia makes it difficult to fall asleep at night sometimes", exampleTranslation: "Bezsenność utrudnia zaśnięcie w nocy czasami" },
      { id: "sleep10", polish: "Zasypiać", english: "To fall asleep", difficulty: "medium", example: "I fall asleep quickly when I'm very tired from the long day", exampleTranslation: "Zasypiam szybko gdy jestem bardzo zmęczony po długim dniu" },
      { id: "sleep11", polish: "Budzić się", english: "To wake up", difficulty: "medium", example: "I wake up naturally without an alarm on weekend mornings", exampleTranslation: "Budzę się naturalnie bez budzika w weekendowe poranki" },
      { id: "sleep12", polish: "Piżama", english: "Pajamas", difficulty: "medium", example: "I put on comfortable cotton pajamas before going to bed", exampleTranslation: "Zakładam wygodną bawełnianą piżamę przed pójściem do łóżka" },
      { id: "sleep13", polish: "Jestem senny", english: "I'm sleepy", difficulty: "hard", example: "I'm very sleepy and I think I'll go to bed early tonight", exampleTranslation: "Jestem bardzo senny i myślę że pójdę spać wcześnie dziś wieczorem" },
      { id: "sleep14", polish: "Nie mogę spać", english: "I can't sleep", difficulty: "hard", example: "I can't sleep because I drank too much coffee this afternoon", exampleTranslation: "Nie mogę spać bo wypiłem za dużo kawy tego popołudnia" },
      { id: "sleep15", polish: "Śpij dobrze", english: "Sleep well", difficulty: "hard", example: "Sleep well and have pleasant dreams tonight my dear friend", exampleTranslation: "Śpij dobrze i miej przyjemne sny dziś wieczorem mój drogi przyjacielu" }
    ]
  },

  gifts_presents: {
    name: "Prezenty i upominki",
    description: "Gifts and presents",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "gift1", polish: "Prezent", english: "Gift", difficulty: "easy", example: "The birthday gift is beautifully wrapped in colorful shiny paper", exampleTranslation: "Prezent urodzinowy jest pięknie zapakowany w kolorowy błyszczący papier" },
      { id: "gift2", polish: "Niespodzianka", english: "Surprise", difficulty: "easy", example: "I prepared a wonderful surprise for my wife's birthday party", exampleTranslation: "Przygotowałem wspaniałą niespodziankę na urodziny mojej żony" },
      { id: "gift3", polish: "Kupić", english: "To buy", difficulty: "easy", example: "I need to buy a gift for my friend's wedding ceremony", exampleTranslation: "Muszę kupić prezent na ślub mojego przyjaciela" },
      { id: "gift4", polish: "Pakować", english: "To wrap", difficulty: "easy", example: "I'm wrapping presents in beautiful paper for Christmas tomorrow", exampleTranslation: "Pakuję prezenty w piękny papier na Boże Narodzenie jutro" },
      { id: "gift5", polish: "Wstążka", english: "Ribbon", difficulty: "easy", example: "The red ribbon on the gift looks very elegant and festive", exampleTranslation: "Czerwona wstążka na prezencie wygląda bardzo elegancko i świątecznie" },
      { id: "gift6", polish: "Kartka", english: "Card", difficulty: "easy", example: "I wrote a heartfelt birthday card with best wishes for you", exampleTranslation: "Napisałem serdeczną kartkę urodzinową z najlepszymi życzeniami dla ciebie" },
      { id: "gift7", polish: "Życzenia", english: "Wishes", difficulty: "medium", example: "I send you my warmest wishes for health and happiness always", exampleTranslation: "Wysyłam ci najserdeczniejsze życzenia zdrowia i szczęścia zawsze" },
      { id: "gift8", polish: "Okazja", english: "Occasion", difficulty: "medium", example: "This is a special occasion that deserves a wonderful celebration", exampleTranslation: "To jest specjalna okazja która zasługuje na wspaniałe świętowanie" },
      { id: "gift9", polish: "Podarunek", english: "Present", difficulty: "medium", example: "I received a beautiful present from my parents for graduation day", exampleTranslation: "Dostałem piękny podarunek od rodziców na dzień matury" },
      { id: "gift10", polish: "Upominek", english: "Souvenir", difficulty: "medium", example: "I brought back a small souvenir from my trip to Paris", exampleTranslation: "Przywiozłem mały upominek z mojej podróży do Paryża" },
      { id: "gift11", polish: "Rozpakować", english: "To unwrap", difficulty: "medium", example: "Children love to unwrap presents on Christmas morning excitedly", exampleTranslation: "Dzieci uwielbiają rozpakować prezenty w Boże Narodzenie rano z ekscytacją" },
      { id: "gift12", polish: "Hojny", english: "Generous", difficulty: "medium", example: "My uncle is very generous and always gives wonderful gifts", exampleTranslation: "Mój wujek jest bardzo hojny i zawsze daje wspaniałe prezenty" },
      { id: "gift13", polish: "Dziękuję za prezent", english: "Thank you for the gift", difficulty: "hard", example: "Thank you so much for this wonderful and thoughtful gift!", exampleTranslation: "Bardzo dziękuję za ten wspaniały i przemyślany prezent!" },
      { id: "gift14", polish: "To dla ciebie", english: "This is for you", difficulty: "hard", example: "This special gift is for you with all my love and affection", exampleTranslation: "Ten specjalny prezent jest dla ciebie z całą moją miłością i uczuciem" },
      { id: "gift15", polish: "Nie trzeba było", english: "You shouldn't have", difficulty: "hard", example: "You really shouldn't have bought such an expensive present for me!", exampleTranslation: "Naprawdę nie trzeba było kupować tak drogiego prezentu dla mnie!" }
    ]
  },

  sky_atmosphere: {
    name: "Niebo i atmosfera",
    description: "Sky and atmosphere",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "sky1", polish: "Niebo", english: "Sky", difficulty: "easy", example: "The sky is beautiful and clear with no clouds today", exampleTranslation: "Niebo jest piękne i czyste bez chmur dzisiaj" },
      { id: "sky2", polish: "Chmura", english: "Cloud", difficulty: "easy", example: "White fluffy clouds are floating slowly across the blue sky", exampleTranslation: "Białe puszyte chmury płyną powoli po błękitnym niebie" },
      { id: "sky3", polish: "Słońce", english: "Sun", difficulty: "easy", example: "The sun is shining brightly and warming everything around us", exampleTranslation: "Słońce świeci jasno i ogrzewa wszystko wokół nas" },
      { id: "sky4", polish: "Księżyc", english: "Moon", difficulty: "easy", example: "The full moon is shining beautifully in the night sky tonight", exampleTranslation: "Pełnia księżyca świeci pięknie na nocnym niebie dziś wieczorem" },
      { id: "sky5", polish: "Gwiazda", english: "Star", difficulty: "easy", example: "I can see millions of stars in the clear night sky", exampleTranslation: "Widzę miliony gwiazd na czystym nocnym niebie" },
      { id: "sky6", polish: "Tęcza", english: "Rainbow", difficulty: "easy", example: "A beautiful rainbow appeared in the sky after the rain", exampleTranslation: "Piękna tęcza pojawiła się na niebie po deszczu" },
      { id: "sky7", polish: "Piorun", english: "Lightning", difficulty: "medium", example: "Lightning illuminated the dark sky during the powerful storm yesterday", exampleTranslation: "Piorun oświetlił ciemne niebo podczas potężnej burzy wczoraj" },
      { id: "sky8", polish: "Grzmot", english: "Thunder", difficulty: "medium", example: "Loud thunder scared the children during the nighttime storm", exampleTranslation: "Głośny grzmot przestraszył dzieci podczas nocnej burzy" },
      { id: "sky9", polish: "Świt", english: "Dawn", difficulty: "medium", example: "Dawn breaks around five in the morning during summer months", exampleTranslation: "Świt zapada około piątej rano podczas letnich miesięcy" },
      { id: "sky10", polish: "Zmierzch", english: "Dusk", difficulty: "medium", example: "The beautiful colors of dusk paint the sky orange and pink", exampleTranslation: "Piękne kolory zmierzchu malują niebo na pomarańczowo i różowo" },
      { id: "sky11", polish: "Horyzont", english: "Horizon", difficulty: "medium", example: "I can see the sun slowly setting on the distant horizon", exampleTranslation: "Widzę słońce powoli zachodzące na dalekim horyzoncie" },
      { id: "sky12", polish: "Zachód słońca", english: "Sunset", difficulty: "medium", example: "The sunset was absolutely breathtaking with vibrant orange colors tonight", exampleTranslation: "Zachód słońca był absolutnie zapierający dech z żywymi pomarańczowymi kolorami dziś wieczorem" },
      { id: "sky13", polish: "Patrz na niebo", english: "Look at the sky", difficulty: "hard", example: "Look at the beautiful sky filled with stars on this clear night!", exampleTranslation: "Patrz na piękne niebo pełne gwiazd tej czystej nocy!" },
      { id: "sky14", polish: "Będzie padać", english: "It's going to rain", difficulty: "hard", example: "It looks like it's going to rain soon because dark clouds are gathering", exampleTranslation: "Wygląda na to że będzie padać wkrótce bo ciemne chmury się zbierają" },
      { id: "sky15", polish: "Gwiaździsta noc", english: "Starry night", difficulty: "hard", example: "The starry night sky reminds me of the famous Van Gogh painting", exampleTranslation: "Gwiaździsta noc przypomina mi słynny obraz Van Gogha" }
    ]
  },

  plants_gardening: {
    name: "Rośliny i ogrodnictwo",
    description: "Plants and gardening",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "plant1", polish: "Roślina", english: "Plant", difficulty: "easy", example: "This plant needs a lot of water and sunlight to grow well", exampleTranslation: "Ta roślina potrzebuje dużo wody i światła słonecznego aby dobrze rosnąć" },
      { id: "plant2", polish: "Kwiat", english: "Flower", difficulty: "easy", example: "Beautiful flowers are blooming in the garden during spring season", exampleTranslation: "Piękne kwiaty kwitną w ogrodzie podczas wiosennego sezonu" },
      { id: "plant3", polish: "Drzewo", english: "Tree", difficulty: "easy", example: "The old oak tree in our backyard is over one hundred years", exampleTranslation: "Stary dąb w naszym ogrodzie ma ponad sto lat" },
      { id: "plant4", polish: "Liść", english: "Leaf", difficulty: "easy", example: "Green leaves are falling from the trees in the autumn wind", exampleTranslation: "Zielone liście spadają z drzew na jesiennym wietrze" },
      { id: "plant5", polish: "Trawa", english: "Grass", difficulty: "easy", example: "I mow the grass in the garden every Saturday morning regularly", exampleTranslation: "Koszę trawę w ogrodzie w każdą sobotę rano regularnie" },
      { id: "plant6", polish: "Korzeń", english: "Root", difficulty: "easy", example: "The roots of the tree go deep into the ground for water", exampleTranslation: "Korzenie drzewa sięgają głęboko w ziemię po wodę" },
      { id: "plant7", polish: "Nasiono", english: "Seed", difficulty: "medium", example: "I planted flower seeds in the garden and they're growing nicely", exampleTranslation: "Zasadziłem nasiona kwiatów w ogrodzie i ładnie rosną" },
      { id: "plant8", polish: "Podlewać", english: "To water", difficulty: "medium", example: "I water all the plants in the garden every evening at sunset", exampleTranslation: "Podlewam wszystkie rośliny w ogrodzie każdego wieczoru o zachodzie słońca" },
      { id: "plant9", polish: "Ogrodnik", english: "Gardener", difficulty: "medium", example: "The professional gardener takes care of our large beautiful garden weekly", exampleTranslation: "Profesjonalny ogrodnik dba o nasz duży piękny ogród co tydzień" },
      { id: "plant10", polish: "Sadzonka", english: "Seedling", difficulty: "medium", example: "I bought vegetable seedlings to plant in my home garden tomorrow", exampleTranslation: "Kupiłem sadzonki warzyw aby zasadzić w moim ogrodzie domowym jutro" },
      { id: "plant11", polish: "Więdnąć", english: "To wilt", difficulty: "medium", example: "The flowers are wilting because they haven't been watered for days", exampleTranslation: "Kwiaty więdną bo nie były podlewane od dni" },
      { id: "plant12", polish: "Kwitnąć", english: "To bloom", difficulty: "medium", example: "Roses bloom beautifully in our garden throughout the summer months", exampleTranslation: "Róże kwitną pięknie w naszym ogrodzie przez całe letnie miesiące" },
      { id: "plant13", polish: "Mam zielone palce", english: "I have a green thumb", difficulty: "hard", example: "I have a green thumb and all my plants grow healthy and strong", exampleTranslation: "Mam zielone palce i wszystkie moje rośliny rosną zdrowe i silne" },
      { id: "plant14", polish: "Zasadźmy drzewko", english: "Let's plant a tree", difficulty: "hard", example: "Let's plant a tree in the garden to celebrate this special occasion", exampleTranslation: "Zasadźmy drzewko w ogrodzie aby uczcić tę specjalną okazję" },
      { id: "plant15", polish: "Ta roślina rośnie szybko", english: "This plant grows fast", difficulty: "hard", example: "This plant grows incredibly fast and needs frequent watering and care", exampleTranslation: "Ta roślina rośnie niewiarygodnie szybko i potrzebuje częstego podlewania i pielęgnacji" }
    ]
  },

  people_society: {
    name: "Ludzie i społeczeństwo",
    description: "People and society",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "soc1", polish: "Ludzie", english: "People", difficulty: "easy", example: "Many people are walking through the city park on this sunny day", exampleTranslation: "Wielu ludzi spaceruje przez park miejski w ten słoneczny dzień" },
      { id: "soc2", polish: "Społeczeństwo", english: "Society", difficulty: "easy", example: "Modern society relies heavily on technology and the internet daily", exampleTranslation: "Nowoczesne społeczeństwo w dużej mierze polega na technologii i internecie codziennie" },
      { id: "soc3", polish: "Sąsiad", english: "Neighbor", difficulty: "easy", example: "My neighbor is very friendly and we often chat over the fence", exampleTranslation: "Mój sąsiad jest bardzo przyjazny i często rozmawiamy przez płot" },
      { id: "soc4", polish: "Wspólnota", english: "Community", difficulty: "easy", example: "Our community organizes events and festivals for residents throughout the year", exampleTranslation: "Nasza wspólnota organizuje wydarzenia i festiwale dla mieszkańców przez cały rok" },
      { id: "soc5", polish: "Przyjaciel", english: "Friend", difficulty: "easy", example: "My best friend and I have known each other since childhood days", exampleTranslation: "Mój najlepszy przyjaciel i ja znamy się od czasów dzieciństwa" },
      { id: "soc6", polish: "Znajomy", english: "Acquaintance", difficulty: "easy", example: "He's just an acquaintance from work, not a close personal friend", exampleTranslation: "On jest tylko znajomym z pracy, nie bliskim przyjacielem" },
      { id: "soc7", polish: "Obywatel", english: "Citizen", difficulty: "medium", example: "Every citizen has rights and responsibilities in a democratic society", exampleTranslation: "Każdy obywatel ma prawa i obowiązki w demokratycznym społeczeństwie" },
      { id: "soc8", polish: "Pokolenie", english: "Generation", difficulty: "medium", example: "The younger generation uses technology much more than older people", exampleTranslation: "Młodsze pokolenie używa technologii dużo więcej niż starsi ludzie" },
      { id: "soc9", polish: "Kultura", english: "Culture", difficulty: "medium", example: "Polish culture has rich traditions and fascinating historical background", exampleTranslation: "Polska kultura ma bogate tradycje i fascynującą historię" },
      { id: "soc10", polish: "Zwyczaj", english: "Custom", difficulty: "medium", example: "This old custom has been passed down through many generations", exampleTranslation: "Ten stary zwyczaj był przekazywany przez wiele pokoleń" },
      { id: "soc11", polish: "Współpraca", english: "Cooperation", difficulty: "medium", example: "Cooperation between people is essential for achieving common important goals", exampleTranslation: "Współpraca między ludźmi jest niezbędna do osiągnięcia wspólnych ważnych celów" },
      { id: "soc12", polish: "Pomoc", english: "Help", difficulty: "medium", example: "I always try to help people in need whenever I can possibly", exampleTranslation: "Zawsze staram się pomagać ludziom w potrzebie kiedy tylko mogę" },
      { id: "soc13", polish: "Jesteśmy społecznością", english: "We are a community", difficulty: "hard", example: "We are a strong community that supports each other in difficult times", exampleTranslation: "Jesteśmy silną społecznością która wspiera się nawzajem w trudnych czasach" },
      { id: "soc14", polish: "Pomagajmy sobie", english: "Let's help each other", difficulty: "hard", example: "Let's help each other and work together to make our neighborhood better", exampleTranslation: "Pomagajmy sobie nawzajem i pracujmy razem aby uczynić nasze sąsiedztwo lepszym" },
      { id: "soc15", polish: "Razem jesteśmy silniejsi", english: "Together we are stronger", difficulty: "hard", example: "Together we are stronger and can overcome any challenges we face", exampleTranslation: "Razem jesteśmy silniejsi i możemy pokonać wszelkie wyzwania przed którymi stoimy" }
    ]
  },

  success_achievement: {
    name: "Sukces i osiągnięcia",
    description: "Success and goals",
    icon: Trophy,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "suc1", polish: "Sukces", english: "Success", difficulty: "easy", example: "Success requires hard work, dedication and lots of patience always", exampleTranslation: "Sukces wymaga ciężkiej pracy, poświęcenia i dużo cierpliwości zawsze" },
      { id: "suc2", polish: "Cel", english: "Goal", difficulty: "easy", example: "My main goal this year is to learn Spanish fluently and well", exampleTranslation: "Moim głównym celem w tym roku jest nauczyć się płynnie hiszpańskiego" },
      { id: "suc3", polish: "Osiągnięcie", english: "Achievement", difficulty: "easy", example: "Graduating from university was my greatest achievement so far in life", exampleTranslation: "Ukończenie uniwersytetu było moim największym osiągnięciem dotychczas w życiu" },
      { id: "suc4", polish: "Zwycięstwo", english: "Victory", difficulty: "easy", example: "Our team celebrated the victory after winning the championship final match", exampleTranslation: "Nasza drużyna świętowała zwycięstwo po wygraniu finałowego meczu mistrzostw" },
      { id: "suc5", polish: "Nagroda", english: "Award", difficulty: "easy", example: "She received an award for her outstanding work on the research project", exampleTranslation: "Otrzymała nagrodę za swoją wybitną pracę nad projektem badawczym" },
      { id: "suc6", polish: "Próbować", english: "To try", difficulty: "easy", example: "I always try my best even when things are difficult and challenging", exampleTranslation: "Zawsze staram się najlepiej jak mogę nawet gdy rzeczy są trudne i wymagające" },
      { id: "suc7", polish: "Wytrwałość", english: "Perseverance", difficulty: "medium", example: "Perseverance and determination are the keys to achieving great success in life", exampleTranslation: "Wytrwałość i determinacja są kluczami do osiągnięcia wielkiego sukcesu w życiu" },
      { id: "suc8", polish: "Motywacja", english: "Motivation", difficulty: "medium", example: "I need strong motivation to continue working towards my ambitious goals", exampleTranslation: "Potrzebuję silnej motywacji aby kontynuować pracę nad moimi ambitnymi celami" },
      { id: "suc9", polish: "Ambicja", english: "Ambition", difficulty: "medium", example: "His great ambition drives him to work harder than anyone else", exampleTranslation: "Jego wielka ambicja napędza go do cięższej pracy niż ktokolwiek inny" },
      { id: "suc10", polish: "Wysiłek", english: "Effort", difficulty: "medium", example: "Great effort and dedication are required to master any new skill completely", exampleTranslation: "Wielki wysiłek i poświęcenie są wymagane aby opanować dowolną nową umiejętność całkowicie" },
      { id: "suc11", polish: "Porażka", english: "Failure", difficulty: "medium", example: "Every failure is a learning opportunity that makes us stronger and wiser", exampleTranslation: "Każda porażka jest okazją do nauki która czyni nas silniejszymi i mądrzejszymi" },
      { id: "suc12", polish: "Postęp", english: "Progress", difficulty: "medium", example: "I'm making steady progress in learning the new language every single day", exampleTranslation: "Robię stały postęp w nauce nowego języka każdego dnia" },
      { id: "suc13", polish: "Osiągnąłem swój cel", english: "I achieved my goal", difficulty: "hard", example: "I finally achieved my goal after many months of hard work and effort", exampleTranslation: "Wreszcie osiągnąłem swój cel po wielu miesiącach ciężkiej pracy i wysiłku" },
      { id: "suc14", polish: "Jestem z siebie dumny", english: "I'm proud of myself", difficulty: "hard", example: "I'm very proud of myself for not giving up during difficult times", exampleTranslation: "Jestem bardzo dumny z siebie że nie poddałem się w trudnych czasach" },
      { id: "suc15", polish: "Nigdy się nie poddawaj", english: "Never give up", difficulty: "hard", example: "Never give up on your dreams no matter how difficult they seem to be", exampleTranslation: "Nigdy się nie poddawaj swoich marzeń bez względu na to jak trudne się wydają" }
    ]
  },

  furniture_decor: {
    name: "Meble i wystrój",
    description: "Furniture and decoration",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "furn1", polish: "Stół", english: "Table", difficulty: "easy", example: "The large wooden table stands in the center of our dining room", exampleTranslation: "Duży drewniany stół stoi w centrum naszej jadalni" },
      { id: "furn2", polish: "Krzesło", english: "Chair", difficulty: "easy", example: "I bought four comfortable chairs for the kitchen dining area yesterday", exampleTranslation: "Kupiłem cztery wygodne krzesła do kuchni wczoraj" },
      { id: "furn3", polish: "Sofa", english: "Sofa", difficulty: "easy", example: "The soft leather sofa in the living room is perfect for relaxing", exampleTranslation: "Miękka skórzana sofa w salonie jest idealna do relaksu" },
      { id: "furn4", polish: "Fotel", english: "Armchair", difficulty: "easy", example: "I love to read books sitting in my comfortable armchair by the window", exampleTranslation: "Uwielbiam czytać książki siedząc w moim wygodnym fotelu przy oknie" },
      { id: "furn5", polish: "Szafa", english: "Wardrobe", difficulty: "easy", example: "I keep all my clothes neatly organized in the large bedroom wardrobe", exampleTranslation: "Trzymam wszystkie ubrania schludnie zorganizowane w dużej szafie w sypialni" },
      { id: "furn6", polish: "Półka", english: "Shelf", difficulty: "easy", example: "I put my favorite books on the wooden shelf on the wall", exampleTranslation: "Kładę moje ulubione książki na drewnianej półce na ścianie" },
      { id: "furn7", polish: "Komoda", english: "Dresser", difficulty: "medium", example: "The antique dresser in the bedroom has five large drawers for storage", exampleTranslation: "Antyczna komoda w sypialni ma pięć dużych szuflad do przechowywania" },
      { id: "furn8", polish: "Lustro", english: "Mirror", difficulty: "medium", example: "A large mirror on the wall makes the room look more spacious", exampleTranslation: "Duże lustro na ścianie sprawia że pokój wygląda bardziej przestronnie" },
      { id: "furn9", polish: "Dywan", english: "Carpet", difficulty: "medium", example: "The soft Persian carpet adds warmth and color to the living room", exampleTranslation: "Miękki perski dywan dodaje ciepła i koloru do salonu" },
      { id: "furn10", polish: "Zasłony", english: "Curtains", difficulty: "medium", example: "I close the thick curtains at night to block out the streetlights", exampleTranslation: "Zamykam grube zasłony w nocy aby zablokować światła uliczne" },
      { id: "furn11", polish: "Poduszka", english: "Cushion", difficulty: "medium", example: "Colorful decorative cushions make the sofa look more inviting and cozy", exampleTranslation: "Kolorowe ozdobne poduszki sprawiają że sofa wygląda bardziej zachęcająco i przytulnie" },
      { id: "furn12", polish: "Obraz", english: "Painting", difficulty: "medium", example: "A beautiful landscape painting hangs on the wall above the sofa", exampleTranslation: "Piękny obraz krajobrazowy wisi na ścianie nad sofą" },
      { id: "furn13", polish: "Gdzie kupiłeś te meble?", english: "Where did you buy this furniture?", difficulty: "hard", example: "Where did you buy this beautiful furniture? I want something similar too!", exampleTranslation: "Gdzie kupiłeś te piękne meble? Ja też chcę coś podobnego!" },
      { id: "furn14", polish: "To pasuje do pokoju", english: "It matches the room", difficulty: "hard", example: "This new armchair matches the room perfectly and looks very elegant", exampleTranslation: "Ten nowy fotel pasuje idealnie do pokoju i wygląda bardzo elegancko" },
      { id: "furn15", polish: "Urządzam mieszkanie", english: "I'm decorating the apartment", difficulty: "hard", example: "I'm decorating my new apartment and choosing furniture and colors carefully", exampleTranslation: "Urządzam nowe mieszkanie i wybieram meble i kolory starannie" }
    ]
  },

  clothes_laundry: {
    name: "Ubrania i pranie",
    description: "Clothes and laundry",
    icon: Shirt,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "laun1", polish: "Pranie", english: "Laundry", difficulty: "easy", example: "I do the laundry every Saturday morning without fail regularly", exampleTranslation: "Robię pranie w każdą sobotę rano bez wyjątku regularnie" },
      { id: "laun2", polish: "Pralka", english: "Washing machine", difficulty: "easy", example: "The washing machine is running and will finish in thirty minutes", exampleTranslation: "Pralka pracuje i skończy za trzydzieści minut" },
      { id: "laun3", polish: "Suszarka", english: "Dryer", difficulty: "easy", example: "I put wet clothes in the dryer after washing them thoroughly", exampleTranslation: "Wkładam mokre ubrania do suszarki po dokładnym wypraniu ich" },
      { id: "laun4", polish: "Prasować", english: "To iron", difficulty: "easy", example: "I need to iron my shirt before the important meeting tomorrow morning", exampleTranslation: "Muszę wyprasować koszulę przed ważnym spotkaniem jutro rano" },
      { id: "laun5", polish: "Żelazko", english: "Iron", difficulty: "easy", example: "The hot iron removes all wrinkles from clothes very effectively", exampleTranslation: "Gorące żelazko usuwa wszystkie zmarszczki z ubrań bardzo skutecznie" },
      { id: "laun6", polish: "Wieszak", english: "Hanger", difficulty: "easy", example: "I hang my jacket on a hanger in the wardrobe neatly", exampleTranslation: "Wieszam kurtkę na wieszaku w szafie schludnie" },
      { id: "laun7", polish: "Proszek do prania", english: "Laundry detergent", difficulty: "medium", example: "I use eco-friendly laundry detergent that's gentle on clothes and skin", exampleTranslation: "Używam ekologicznego proszku do prania który jest delikatny dla ubrań i skóry" },
      { id: "laun8", polish: "Plama", english: "Stain", difficulty: "medium", example: "This stubborn stain on my shirt won't come out even after washing", exampleTranslation: "Ta uparta plama na mojej koszuli nie schodzi nawet po praniu" },
      { id: "laun9", polish: "Suszyć", english: "To dry", difficulty: "medium", example: "I dry the clothes outside on the line when the weather is sunny", exampleTranslation: "Suszę ubrania na zewnątrz na sznurze gdy pogoda jest słoneczna" },
      { id: "laun10", polish: "Zmięty", english: "Wrinkled", difficulty: "medium", example: "My shirt is completely wrinkled and needs ironing before I wear it", exampleTranslation: "Moja koszula jest całkowicie zmięta i wymaga prasowania zanim ją założę" },
      { id: "laun11", polish: "Składać", english: "To fold", difficulty: "medium", example: "I fold the clean clothes neatly before putting them in the wardrobe", exampleTranslation: "Składam czyste ubrania schludnie przed włożeniem ich do szafy" },
      { id: "laun12", polish: "Kosz na brudne ubrania", english: "Laundry basket", difficulty: "medium", example: "I put all dirty clothes in the laundry basket in the bathroom", exampleTranslation: "Wkładam wszystkie brudne ubrania do kosza na pranie w łazience" },
      { id: "laun13", polish: "Muszę zrobić pranie", english: "I need to do laundry", difficulty: "hard", example: "I urgently need to do laundry because I'm running out of clean clothes", exampleTranslation: "Muszę pilnie zrobić pranie bo kończą mi się czyste ubrania" },
      { id: "laun14", polish: "To wymaga prania", english: "This needs washing", difficulty: "hard", example: "This jacket really needs washing because it has a large stain on it", exampleTranslation: "Ta kurtka naprawdę wymaga prania bo ma dużą plamę na niej" },
      { id: "laun15", polish: "Zgubiłam skarpetki", english: "I lost my socks", difficulty: "hard", example: "I always lose socks in the washing machine and can't find matching pairs", exampleTranslation: "Zawsze gubię skarpetki w pralce i nie mogę znaleźć pasujących par" }
    ]
  },

  breakfast_morning: {
    name: "Śniadanie i poranek",
    description: "Breakfast and morning",
    icon: Coffee,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { id: "break1", polish: "Śniadanie", english: "Breakfast", difficulty: "easy", example: "Breakfast is the most important meal of the entire day always", exampleTranslation: "Śniadanie jest najważniejszym posiłkiem całego dnia zawsze" },
      { id: "break2", polish: "Kawa", english: "Coffee", difficulty: "easy", example: "I can't start my morning without a strong hot cup of coffee", exampleTranslation: "Nie mogę rozpocząć poranka bez mocnej gorącej filiżanki kawy" },
      { id: "break3", polish: "Herbata", english: "Tea", difficulty: "easy", example: "I prefer green tea with honey for breakfast every single morning", exampleTranslation: "Wolę zieloną herbatę z miodem na śniadanie każdego ranka" },
      { id: "break4", polish: "Chleb", english: "Bread", difficulty: "easy", example: "Fresh bread with butter and jam is my favorite simple breakfast", exampleTranslation: "Świeży chleb z masłem i dżemem to moje ulubione proste śniadanie" },
      { id: "break5", polish: "Jajka", english: "Eggs", difficulty: "easy", example: "I cook scrambled eggs with vegetables for a healthy breakfast daily", exampleTranslation: "Gotuję jajecznicę z warzywami na zdrowe śniadanie codziennie" },
      { id: "break6", polish: "Masło", english: "Butter", difficulty: "easy", example: "I spread butter on toast every morning for breakfast at home", exampleTranslation: "Smaruję masło na tost każdego ranka na śniadanie w domu" },
      { id: "break7", polish: "Dżem", english: "Jam", difficulty: "medium", example: "Homemade strawberry jam tastes much better than store-bought jam always", exampleTranslation: "Domowy dżem truskawkowy smakuje dużo lepiej niż kupiony w sklepie zawsze" },
      { id: "break8", polish: "Płatki śniadaniowe", english: "Cereal", difficulty: "medium", example: "I eat cereal with cold milk for a quick breakfast before work", exampleTranslation: "Jem płatki śniadaniowe z zimnym mlekiem na szybkie śniadanie przed pracą" },
      { id: "break9", polish: "Jogurt", english: "Yogurt", difficulty: "medium", example: "Natural yogurt with fresh fruit is a healthy breakfast option for me", exampleTranslation: "Naturalny jogurt ze świeżymi owocami jest zdrową opcją śniadaniową dla mnie" },
      { id: "break10", polish: "Tost", english: "Toast", difficulty: "medium", example: "I make crispy toast in the toaster every morning for breakfast", exampleTranslation: "Robię chrupiący tost w tosterze każdego ranka na śniadanie" },
      { id: "break11", polish: "Szynka", english: "Ham", difficulty: "medium", example: "I add sliced ham to my sandwich for extra protein and flavor", exampleTranslation: "Dodaję pokrojoną szynkę do mojej kanapki dla dodatkowego białka i smaku" },
      { id: "break12", polish: "Ser", english: "Cheese", difficulty: "medium", example: "I love cheese on toast for breakfast with fresh tomatoes on top", exampleTranslation: "Uwielbiam ser na tost na śniadanie ze świeżymi pomidorami na wierzchu" },
      { id: "break13", polish: "Co jesz na śniadanie?", english: "What do you eat for breakfast?", difficulty: "hard", example: "What do you usually eat for breakfast on typical weekday mornings?", exampleTranslation: "Co zazwyczaj jesz na śniadanie w typowe poranki dni roboczych?" },
      { id: "break14", polish: "Zróbmy śniadanie", english: "Let's make breakfast", difficulty: "hard", example: "Let's make a big breakfast together this lazy Sunday morning at home", exampleTranslation: "Zróbmy razem duże śniadanie w ten leniwy niedzielny poranek w domu" },
      { id: "break15", polish: "Pyszne śniadanie", english: "Delicious breakfast", difficulty: "hard", example: "This is absolutely the most delicious breakfast I've had in a long time!", exampleTranslation: "To jest absolutnie najpyszniejsze śniadanie jakie jadłem od dawna!" }
    ]
  },

  problems_solutions: {
    name: "Problemy i rozwiązania",
    description: "Problems and solutions",
    icon: Trophy,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "prob1", polish: "Problem", english: "Problem", difficulty: "easy", example: "We have a serious problem that needs to be solved quickly today", exampleTranslation: "Mamy poważny problem który trzeba rozwiązać szybko dzisiaj" },
      { id: "prob2", polish: "Rozwiązanie", english: "Solution", difficulty: "easy", example: "I think I found a good solution to our difficult problem finally", exampleTranslation: "Myślę że znalazłem dobre rozwiązanie naszego trudnego problemu wreszcie" },
      { id: "prob3", polish: "Trudność", english: "Difficulty", difficulty: "easy", example: "We're facing some difficulties but I'm sure we can overcome them together", exampleTranslation: "Napotykamy pewne trudności ale jestem pewien że możemy je pokonać razem" },
      { id: "prob4", polish: "Wyzwanie", english: "Challenge", difficulty: "easy", example: "This new project is a big challenge but also an exciting opportunity", exampleTranslation: "Ten nowy projekt jest dużym wyzwaniem ale także ekscytującą możliwością" },
      { id: "prob5", polish: "Pomysł", english: "Idea", difficulty: "easy", example: "I have a brilliant idea how to solve this complicated problem effectively", exampleTranslation: "Mam genialny pomysł jak rozwiązać ten skomplikowany problem skutecznie" },
      { id: "prob6", polish: "Naprawić", english: "To fix", difficulty: "easy", example: "I need to fix my broken computer before the deadline tomorrow morning", exampleTranslation: "Muszę naprawić mój zepsuty komputer przed terminem jutro rano" },
      { id: "prob7", polish: "Błąd", english: "Error", difficulty: "medium", example: "I made a serious error in the calculations and need to correct it", exampleTranslation: "Zrobiłem poważny błąd w obliczeniach i muszę go poprawić" },
      { id: "prob8", polish: "Naprawa", english: "Repair", difficulty: "medium", example: "The car repair will take three days and cost quite a lot of money", exampleTranslation: "Naprawa samochodu zajmie trzy dni i będzie kosztować dość dużo pieniędzy" },
      { id: "prob9", polish: "Przeszkoda", english: "Obstacle", difficulty: "medium", example: "We encountered many obstacles but we didn't give up on our dream", exampleTranslation: "Napotkaliśmy wiele przeszkód ale nie poddaliśmy się naszego marzenia" },
      { id: "prob10", polish: "Poradzić sobie", english: "To cope", difficulty: "medium", example: "I'm learning to cope with stress through meditation and deep breathing", exampleTranslation: "Uczę się radzić sobie ze stresem poprzez medytację i głębokie oddychanie" },
      { id: "prob11", polish: "Zaradny", english: "Resourceful", difficulty: "medium", example: "You need to be resourceful and creative to solve complex problems effectively", exampleTranslation: "Musisz być zaradny i kreatywny aby rozwiązywać złożone problemy skutecznie" },
      { id: "prob12", polish: "Komplikacja", english: "Complication", difficulty: "medium", example: "There was an unexpected complication that delayed the entire project significantly", exampleTranslation: "Wystąpiła niespodziewana komplikacja która opóźniła cały projekt znacząco" },
      { id: "prob13", polish: "Mamy problem", english: "We have a problem", difficulty: "hard", example: "We have a serious problem and we need to discuss it immediately together", exampleTranslation: "Mamy poważny problem i musimy go omówić natychmiast razem" },
      { id: "prob14", polish: "Jak to naprawić?", english: "How to fix this?", difficulty: "hard", example: "How can we fix this complicated situation in the best possible way?", exampleTranslation: "Jak możemy naprawić tę skomplikowaną sytuację w najlepszy możliwy sposób?" },
      { id: "prob15", polish: "Znajdziemy rozwiązanie", english: "We'll find a solution", difficulty: "hard", example: "Don't worry, we'll find a good solution to this problem very soon", exampleTranslation: "Nie martw się, znajdziemy dobre rozwiązanie tego problemu bardzo wkrótce" }
    ]
  },

  materials_substances: {
    name: "Materiały i substancje",
    description: "Materials and substances",
    icon: Leaf,
    color: "from-teal-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "mat1", polish: "Drewno", english: "Wood", difficulty: "easy", example: "The table is made of solid oak wood and is very durable", exampleTranslation: "Stół jest wykonany z litego drewna dębowego i jest bardzo trwały" },
      { id: "mat2", polish: "Metal", english: "Metal", difficulty: "easy", example: "The metal gate is strong and protects our property very well", exampleTranslation: "Metalowa brama jest mocna i chroni naszą posiadłość bardzo dobrze" },
      { id: "mat3", polish: "Plastik", english: "Plastic", difficulty: "easy", example: "Plastic bottles are harmful to the environment and should be recycled properly", exampleTranslation: "Plastikowe butelki są szkodliwe dla środowiska i powinny być właściwie recyclowane" },
      { id: "mat4", polish: "Szkło", english: "Glass", difficulty: "easy", example: "The window is made of thick glass that insulates sound very effectively", exampleTranslation: "Okno jest wykonane z grubego szkła które izoluje dźwięk bardzo skutecznie" },
      { id: "mat5", polish: "Kamień", english: "Stone", difficulty: "easy", example: "The old house is built from natural stone from the nearby mountains", exampleTranslation: "Stary dom jest zbudowany z naturalnego kamienia z pobliskich gór" },
      { id: "mat6", polish: "Papier", english: "Paper", difficulty: "easy", example: "I write notes on recycled paper to help protect the environment", exampleTranslation: "Piszę notatki na papierze z recyclingu aby pomóc chronić środowisko" },
      { id: "mat7", polish: "Tkanina", english: "Fabric", difficulty: "medium", example: "This dress is made from high-quality cotton fabric that's very soft", exampleTranslation: "Ta sukienka jest wykonana z wysokiej jakości bawełnianej tkaniny która jest bardzo miękka" },
      { id: "mat8", polish: "Skóra", english: "Leather", difficulty: "medium", example: "Genuine leather shoes are more expensive but last much longer always", exampleTranslation: "Prawdziwe skórzane buty są droższe ale trwają dużo dłużej zawsze" },
      { id: "mat9", polish: "Guma", english: "Rubber", difficulty: "medium", example: "Car tires are made from durable rubber that grips the road well", exampleTranslation: "Opony samochodowe są wykonane z trwałej gumy która dobrze trzyma się drogi" },
      { id: "mat10", polish: "Stal", english: "Steel", difficulty: "medium", example: "The bridge is constructed from strong steel beams for maximum safety", exampleTranslation: "Most jest skonstruowany z mocnych stalowych belek dla maksymalnego bezpieczeństwa" },
      { id: "mat11", polish: "Bawełna", english: "Cotton", difficulty: "medium", example: "I prefer wearing clothes made from natural cotton in hot summer weather", exampleTranslation: "Wolę nosić ubrania wykonane z naturalnej bawełny w gorącą letnią pogodę" },
      { id: "mat12", polish: "Ceramika", english: "Ceramic", difficulty: "medium", example: "Beautiful ceramic tiles decorate the walls in our modern bathroom", exampleTranslation: "Piękne ceramiczne płytki dekorują ściany w naszej nowoczesnej łazience" },
      { id: "mat13", polish: "Z czego to jest?", english: "What is this made of?", difficulty: "hard", example: "What material is this beautiful table made of? It looks expensive!", exampleTranslation: "Z czego materiału jest wykonany ten piękny stół? Wygląda drogo!" },
      { id: "mat14", polish: "To jest naturalne", english: "It's natural", difficulty: "hard", example: "This fabric is completely natural and eco-friendly without any chemicals", exampleTranslation: "Ta tkanina jest całkowicie naturalna i ekologiczna bez żadnych chemikaliów" },
      { id: "mat15", polish: "Wysokiej jakości", english: "High quality", difficulty: "hard", example: "This product is made from high quality materials that last for years", exampleTranslation: "Ten produkt jest wykonany z materiałów wysokiej jakości które trwają latami" }
    ]
  },

  cleaning_housework: {
    name: "Sprzątanie i prace domowe",
    description: "Cleaning and housework",
    icon: Home,
    color: "from-lime-500 to-green-600",
    level: "beginner",
    words: [
      { id: "clean1", polish: "Sprzątać", english: "To clean", difficulty: "easy", example: "I clean the entire apartment thoroughly every Saturday morning without fail", exampleTranslation: "Sprzątam całe mieszkanie dokładnie w każdą sobotę rano bez wyjątku" },
      { id: "clean2", polish: "Zamiatać", english: "To sweep", difficulty: "easy", example: "I sweep the floor in the kitchen with a broom every evening", exampleTranslation: "Zamiatam podłogę w kuchni miotłą każdego wieczoru" },
      { id: "clean3", polish: "Mop", english: "Mop", difficulty: "easy", example: "I clean the bathroom floor with a wet mop and soap water", exampleTranslation: "Czyszczę podłogę w łazience mokrym mopem i wodą z mydłem" },
      { id: "clean4", polish: "Odkurzacz", english: "Vacuum cleaner", difficulty: "easy", example: "The vacuum cleaner is very powerful and cleans carpets extremely well", exampleTranslation: "Odkurzacz jest bardzo mocny i czyści dywany nadzwyczaj dobrze" },
      { id: "clean5", polish: "Ścierka", english: "Cloth", difficulty: "easy", example: "I wipe the table with a damp cloth after every single meal", exampleTranslation: "Wycieramy stół wilgotną ścierką po każdym posiłku" },
      { id: "clean6", polish: "Detergent", english: "Detergent", difficulty: "easy", example: "Use this cleaning detergent for washing dishes and kitchen surfaces", exampleTranslation: "Użyj tego detergentu czyszczącego do mycia naczyń i powierzchni kuchennych" },
      { id: "clean7", polish: "Wycierać kurz", english: "To dust", difficulty: "medium", example: "I dust all the furniture in the living room once a week regularly", exampleTranslation: "Wycieramy kurz ze wszystkich mebli w salonie raz w tygodniu regularnie" },
      { id: "clean8", polish: "Szorować", english: "To scrub", difficulty: "medium", example: "I need to scrub the bathtub to remove the stubborn dirt and stains", exampleTranslation: "Muszę wyszorować wannę aby usunąć uporczywy brud i plamy" },
      { id: "clean9", polish: "Wiadro", english: "Bucket", difficulty: "medium", example: "Fill the bucket with warm water and add some cleaning soap please", exampleTranslation: "Napełnij wiadro ciepłą wodą i dodaj trochę mydła czyszczącego proszę" },
      { id: "clean10", polish: "Śmieci", english: "Garbage", difficulty: "medium", example: "I take out the garbage every evening to the bins outside the house", exampleTranslation: "Wynoszę śmieci każdego wieczoru do pojemników na zewnątrz domu" },
      { id: "clean11", polish: "Porządek", english: "Order", difficulty: "medium", example: "I like to keep everything in perfect order and neatly organized always", exampleTranslation: "Lubię trzymać wszystko w idealnym porządku i schludnie zorganizowane zawsze" },
      { id: "clean12", polish: "Brudny", english: "Dirty", difficulty: "medium", example: "The floor is very dirty and needs to be mopped immediately today", exampleTranslation: "Podłoga jest bardzo brudna i wymaga zmycia natychmiast dzisiaj" },
      { id: "clean13", polish: "Muszę posprzątać", english: "I need to clean up", difficulty: "hard", example: "I urgently need to clean up the house because guests are coming tonight", exampleTranslation: "Muszę pilnie posprzątać dom bo goście przychodzą dziś wieczorem" },
      { id: "clean14", polish: "Jest bardzo brudno", difficulty: "hard", example: "It's very dirty here and requires thorough cleaning as soon as possible", exampleTranslation: "Jest bardzo brudno tutaj i wymaga dokładnego sprzątania jak najszybciej" },
      { id: "clean15", polish: "Pomożesz mi sprzątać?", english: "Will you help me clean?", difficulty: "hard", example: "Will you please help me clean the apartment before the party tonight?", exampleTranslation: "Pomożesz mi proszę posprzątać mieszkanie przed przyjęciem dziś wieczorem?" }
    ]
  },

  numbers_counting: {
    name: "Liczby i liczenie",
    description: "Numbers and counting",
    icon: BookOpen,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "num1", polish: "Jeden", english: "One", difficulty: "easy", example: "I have only one brother and two sisters in my family", exampleTranslation: "Mam tylko jednego brata i dwie siostry w mojej rodzinie" },
      { id: "num2", polish: "Dwa", english: "Two", difficulty: "easy", example: "I bought two tickets for the concert next Friday evening at eight", exampleTranslation: "Kupiłem dwa bilety na koncert w przyszły piątek wieczorem o ósmej" },
      { id: "num3", polish: "Trzy", english: "Three", difficulty: "easy", example: "I studied at university for three years before graduating successfully", exampleTranslation: "Studiowałem na uniwersytecie przez trzy lata przed pomyślnym ukończeniem" },
      { id: "num4", polish: "Dziesięć", english: "Ten", difficulty: "easy", example: "I save at least ten percent of my monthly salary regularly", exampleTranslation: "Oszczędzam przynajmniej dziesięć procent mojej miesięcznej pensji regularnie" },
      { id: "num5", polish: "Sto", english: "One hundred", difficulty: "easy", example: "This book has over one hundred pages of interesting content to read", exampleTranslation: "Ta książka ma ponad sto stron ciekawej treści do przeczytania" },
      { id: "num6", polish: "Tysiąc", english: "One thousand", difficulty: "easy", example: "I walked one thousand steps today during my morning exercise routine", exampleTranslation: "Przeszedłem tysiąc kroków dzisiaj podczas mojej porannej rutyny ćwiczeń" },
      { id: "num7", polish: "Pierwszy", english: "First", difficulty: "medium", example: "I finished first in the race and won a gold medal trophy", exampleTranslation: "Skończyłem pierwszy w wyścigu i wygrałem złoty medal trofeum" },
      { id: "num8", polish: "Ostatni", english: "Last", difficulty: "medium", example: "This is the last chance to register for the course this semester", exampleTranslation: "To jest ostatnia szansa aby zarejestrować się na kurs w tym semestrze" },
      { id: "num9", polish: "Połowa", english: "Half", difficulty: "medium", example: "I've completed half of the work and will finish the rest tomorrow", exampleTranslation: "Ukończyłem połowę pracy i dokończę resztę jutro" },
      { id: "num10", polish: "Ćwierć", english: "Quarter", difficulty: "medium", example: "It's a quarter past three in the afternoon right now exactly", exampleTranslation: "Jest kwadrans po trzeciej po południu teraz dokładnie" },
      { id: "num11", polish: "Podwójny", english: "Double", difficulty: "medium", example: "I ordered a double espresso because I'm very tired this morning", exampleTranslation: "Zamówiłem podwójne espresso bo jestem bardzo zmęczony tego ranka" },
      { id: "num12", polish: "Liczyć", english: "To count", difficulty: "medium", example: "Can you count how many people are in this crowded room right now?", exampleTranslation: "Możesz policzyć ile osób jest w tym zatłoczonym pokoju teraz?" },
      { id: "num13", polish: "Ile to kosztuje?", english: "How much does it cost?", difficulty: "hard", example: "How much exactly does this product cost with all taxes included today?", exampleTranslation: "Ile dokładnie kosztuje ten produkt ze wszystkimi podatkami włączonymi dzisiaj?" },
      { id: "num14", polish: "Dwa razy więcej", english: "Twice as much", difficulty: "hard", example: "This costs twice as much as the other one but it's better quality", exampleTranslation: "To kosztuje dwa razy więcej niż tamto ale jest lepszej jakości" },
      { id: "num15", polish: "Niezliczona ilość", english: "Countless", difficulty: "hard", example: "I've been there countless times and it never gets boring or old", exampleTranslation: "Byłem tam niezliczoną ilość razy i nigdy się nie nudzi ani nie starzeje" }
    ]
  }
};
