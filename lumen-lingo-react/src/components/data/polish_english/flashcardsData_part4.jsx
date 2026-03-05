/**
 * POLISH → ENGLISH FLASHCARDS - PART 4
 * 
 * Native Language: Polish (Polski)
 * Target Language: English
 * 
 * This file contains additional flashcard categories (45-54).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Utensils,
  TreePine,
  Heart,
  Bike,
  Wallet,
  Film,
  Plane,
  Coffee,
  Home,
  Sun
} from "lucide-react";

export const flashcardsCategories_part4 = {
  cooking_kitchen: {
    name: "Gotowanie i kuchnia",
    description: "Cooking and recipes",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "cook1", polish: "Gotować", english: "To cook", difficulty: "easy", example: "I love to cook dinner for my family every evening at home", exampleTranslation: "Uwielbiam gotować kolację dla rodziny każdego wieczoru w domu" },
      { id: "cook2", polish: "Przepis", english: "Recipe", difficulty: "easy", example: "This recipe for chocolate cake is very easy to follow", exampleTranslation: "Ten przepis na ciasto czekoladowe jest bardzo łatwy do wykonania" },
      { id: "cook3", polish: "Składniki", english: "Ingredients", difficulty: "easy", example: "I bought all the ingredients for tonight's dinner at the market", exampleTranslation: "Kupiłem wszystkie składniki na dzisiejszą kolację na targu" },
      { id: "cook4", polish: "Smażyć", english: "To fry", difficulty: "easy", example: "I fry eggs in butter for breakfast every morning", exampleTranslation: "Smażę jajka na maśle na śniadanie każdego ranka" },
      { id: "cook5", polish: "Piec", english: "To bake", difficulty: "easy", example: "My grandmother bakes delicious bread every Sunday morning", exampleTranslation: "Moja babcia piecze pyszny chleb w każdą niedzielę rano" },
      { id: "cook6", polish: "Mieszać", english: "To mix", difficulty: "easy", example: "Mix all the ingredients together in a large bowl carefully", exampleTranslation: "Wymieszaj wszystkie składniki razem w dużej misce starannie" },
      { id: "cook7", polish: "Kroić", english: "To chop", difficulty: "medium", example: "I need to chop the vegetables into small pieces for the soup", exampleTranslation: "Muszę pokroić warzywa na małe kawałki do zupy" },
      { id: "cook8", polish: "Przyprawy", english: "Spices", difficulty: "medium", example: "Add some spices to enhance the flavor of the dish", exampleTranslation: "Dodaj przyprawy aby wzmocnić smak potrawy" },
      { id: "cook9", polish: "Ugotowany", english: "Cooked", difficulty: "medium", example: "The meat is perfectly cooked and very tender to eat", exampleTranslation: "Mięso jest idealnie ugotowane i bardzo miękkie do jedzenia" },
      { id: "cook10", polish: "Surowy", english: "Raw", difficulty: "medium", example: "I prefer to eat vegetables raw instead of cooked", exampleTranslation: "Wolę jeść warzywa surowe zamiast gotowanych" },
      { id: "cook11", polish: "Garnek", english: "Pot", difficulty: "medium", example: "Put the water in a large pot and bring to boil", exampleTranslation: "Wlej wodę do dużego garnka i doprowadź do wrzenia" },
      { id: "cook12", polish: "Patelnia", english: "Pan", difficulty: "medium", example: "Heat the pan before adding oil for frying the meat", exampleTranslation: "Rozgrzej patelnię przed dodaniem oleju do smażenia mięsa" },
      { id: "cook13", polish: "Co gotujesz?", english: "What are you cooking?", difficulty: "hard", example: "What are you cooking for dinner tonight? It smells delicious!", exampleTranslation: "Co gotujesz na kolację dziś wieczorem? Pięknie pachnie!" },
      { id: "cook14", polish: "Muszę ugotować obiad", english: "I need to cook lunch", difficulty: "hard", example: "I need to cook lunch quickly because guests are coming soon", exampleTranslation: "Muszę szybko ugotować obiad bo goście niedługo przyjdą" },
      { id: "cook15", polish: "To przepyszne!", english: "It's delicious!", difficulty: "hard", example: "This dish is absolutely delicious! Can you share the recipe?", exampleTranslation: "To danie jest absolutnie przepyszne! Możesz podzielić się przepisem?" }
    ]
  },

  environment_nature: {
    name: "Środowisko i natura",
    description: "Environment and ecology",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "env1", polish: "Środowisko", english: "Environment", difficulty: "easy", example: "We must protect the environment for future generations to enjoy", exampleTranslation: "Musimy chronić środowisko dla przyszłych pokoleń" },
      { id: "env2", polish: "Natura", english: "Nature", difficulty: "easy", example: "I love spending time in nature walking through the forest", exampleTranslation: "Uwielbiam spędzać czas na łonie natury spacerując po lesie" },
      { id: "env3", polish: "Las", english: "Forest", difficulty: "easy", example: "The forest is full of beautiful trees and wild animals", exampleTranslation: "Las jest pełen pięknych drzew i dzikich zwierząt" },
      { id: "env4", polish: "Drzewo", english: "Tree", difficulty: "easy", example: "This old tree has been here for over two hundred years", exampleTranslation: "To stare drzewo stoi tu od ponad dwustu lat" },
      { id: "env5", polish: "Recycling", english: "Recycling", difficulty: "easy", example: "Recycling plastic and paper helps save our planet's resources", exampleTranslation: "Recycling plastiku i papieru pomaga chronić zasoby naszej planety" },
      { id: "env6", polish: "Zanieczyszczenie", english: "Pollution", difficulty: "easy", example: "Air pollution is a serious problem in big cities worldwide", exampleTranslation: "Zanieczyszczenie powietrza to poważny problem w dużych miastach" },
      { id: "env7", polish: "Ekologia", english: "Ecology", difficulty: "medium", example: "Ecology studies the relationships between living organisms and environment", exampleTranslation: "Ekologia bada związki między organizmami żywymi a środowiskiem" },
      { id: "env8", polish: "Energia odnawialna", english: "Renewable energy", difficulty: "medium", example: "Solar panels produce renewable energy from the sun's rays", exampleTranslation: "Panele słoneczne produkują energię odnawialną ze słońca" },
      { id: "env9", polish: "Zmiana klimatu", english: "Climate change", difficulty: "medium", example: "Climate change affects weather patterns around the entire world", exampleTranslation: "Zmiana klimatu wpływa na wzorce pogodowe na całym świecie" },
      { id: "env10", polish: "Segregacja śmieci", english: "Waste sorting", difficulty: "medium", example: "Waste sorting helps with recycling and protecting the environment", exampleTranslation: "Segregacja śmieci pomaga w recyklingu i ochronie środowiska" },
      { id: "env11", polish: "Dzikie zwierzęta", english: "Wild animals", difficulty: "medium", example: "We should protect wild animals and their natural habitats", exampleTranslation: "Powinniśmy chronić dzikie zwierzęta i ich naturalne siedliska" },
      { id: "env12", polish: "Park narodowy", english: "National park", difficulty: "medium", example: "The national park preserves beautiful nature and rare species", exampleTranslation: "Park narodowy chroni piękną przyrodę i rzadkie gatunki" },
      { id: "env13", polish: "Dbamy o planetę", english: "We care for the planet", difficulty: "hard", example: "We care for our planet by reducing waste and using less energy", exampleTranslation: "Dbamy o naszą planetę redukując odpady i zużywając mniej energii" },
      { id: "env14", polish: "To ekologiczne", english: "It's eco-friendly", difficulty: "hard", example: "This product is eco-friendly and made from recycled materials only", exampleTranslation: "Ten produkt jest ekologiczny i wykonany tylko z materiałów z recyclingu" },
      { id: "env15", polish: "Chrońmy naturę", english: "Let's protect nature", difficulty: "hard", example: "Let's protect nature together for our children and future generations", exampleTranslation: "Chrońmy razem naturę dla naszych dzieci i przyszłych pokoleń" }
    ]
  },

  emotions_feelings: {
    name: "Emocje i uczucia",
    description: "Emotions and feelings",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "emo1", polish: "Szczęśliwy", english: "Happy", difficulty: "easy", example: "I feel very happy when I'm spending time with my family", exampleTranslation: "Czuję się bardzo szczęśliwy gdy spędzam czas z rodziną" },
      { id: "emo2", polish: "Smutny", english: "Sad", difficulty: "easy", example: "I feel sad when I watch emotional movies with sad endings", exampleTranslation: "Czuję się smutny gdy oglądam emocjonalne filmy ze smutnymi zakończeniami" },
      { id: "emo3", polish: "Zły", english: "Angry", difficulty: "easy", example: "He gets angry when people are late for important meetings", exampleTranslation: "Złości się gdy ludzie spóźniają się na ważne spotkania" },
      { id: "emo4", polish: "Przestraszony", english: "Scared", difficulty: "easy", example: "I was scared during the horror movie last night at the cinema", exampleTranslation: "Byłem przestraszony podczas horroru wczoraj wieczorem w kinie" },
      { id: "emo5", polish: "Podekscytowany", english: "Excited", difficulty: "easy", example: "I'm very excited about my upcoming vacation to Spain next month", exampleTranslation: "Jestem bardzo podekscytowany nadchodzącymi wakacjami w Hiszpanii w przyszłym miesiącu" },
      { id: "emo6", polish: "Zmęczony", english: "Tired", difficulty: "easy", example: "I feel tired after a long day of work at the office", exampleTranslation: "Czuję się zmęczony po długim dniu pracy w biurze" },
      { id: "emo7", polish: "Zaskoczony", english: "Surprised", difficulty: "medium", example: "I was pleasantly surprised by the unexpected gift from my friend", exampleTranslation: "Byłem mile zaskoczony niespodziewanym prezentem od przyjaciela" },
      { id: "emo8", polish: "Rozczarowany", english: "Disappointed", difficulty: "medium", example: "She felt disappointed when the concert was cancelled at the last moment", exampleTranslation: "Była rozczarowana gdy koncert został odwołany w ostatniej chwili" },
      { id: "emo9", polish: "Dumny", english: "Proud", difficulty: "medium", example: "I'm proud of my son for graduating university with honors", exampleTranslation: "Jestem dumny z syna za ukończenie uniwersytetu z wyróżnieniem" },
      { id: "emo10", polish: "Zakochany", english: "In love", difficulty: "medium", example: "They are deeply in love and planning to get married next year", exampleTranslation: "Są głęboko zakochani i planują wziąć ślub w przyszłym roku" },
      { id: "emo11", polish: "Samotny", english: "Lonely", difficulty: "medium", example: "He feels lonely living far away from his family and friends", exampleTranslation: "Czuje się samotny mieszkając daleko od rodziny i przyjaciół" },
      { id: "emo12", polish: "Spokojny", english: "Calm", difficulty: "medium", example: "I feel calm and relaxed when I'm walking by the ocean", exampleTranslation: "Czuję się spokojny i zrelaksowany gdy spaceruję nad oceanem" },
      { id: "emo13", polish: "Jak się czujesz?", english: "How do you feel?", difficulty: "hard", example: "How do you feel today after the difficult conversation yesterday?", exampleTranslation: "Jak się czujesz dzisiaj po trudnej rozmowie wczoraj?" },
      { id: "emo14", polish: "Jestem przytłoczony", english: "I'm overwhelmed", difficulty: "hard", example: "I'm overwhelmed with all the work and responsibilities this week", exampleTranslation: "Jestem przytłoczony całą pracą i obowiązkami w tym tygodniu" },
      { id: "emo15", polish: "To mnie uspokaja", english: "It calms me down", difficulty: "hard", example: "Listening to classical music really calms me down after stressful days", exampleTranslation: "Słuchanie muzyki klasycznej naprawdę mnie uspokaja po stresujących dniach" }
    ]
  },

  sports_exercise: {
    name: "Sport i ćwiczenia",
    description: "Sports and fitness",
    icon: Bike,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "sport1", polish: "Sport", english: "Sport", difficulty: "easy", example: "I practice sport regularly to stay healthy and fit always", exampleTranslation: "Uprawiam sport regularnie aby pozostać zdrowym i sprawnym zawsze" },
      { id: "sport2", polish: "Biegać", english: "To run", difficulty: "easy", example: "I run in the park every morning before going to work", exampleTranslation: "Biegam w parku każdego ranka przed pójściem do pracy" },
      { id: "sport3", polish: "Pływać", english: "To swim", difficulty: "easy", example: "I swim in the pool three times a week during summer", exampleTranslation: "Pływam na basenie trzy razy w tygodniu podczas lata" },
      { id: "sport4", polish: "Rower", english: "Bicycle", difficulty: "easy", example: "I ride my bicycle to work every day when weather is good", exampleTranslation: "Jeżdżę rowerem do pracy codziennie gdy pogoda jest dobra" },
      { id: "sport5", polish: "Piłka nożna", english: "Football", difficulty: "easy", example: "I watch football matches with friends every weekend at the stadium", exampleTranslation: "Oglądam mecze piłki nożnej z przyjaciółmi w każdy weekend na stadionie" },
      { id: "sport6", polish: "Trening", english: "Training", difficulty: "easy", example: "My training session at the gym lasts about two hours daily", exampleTranslation: "Mój trening na siłowni trwa około dwóch godzin dziennie" },
      { id: "sport7", polish: "Zawodnik", english: "Athlete", difficulty: "medium", example: "The professional athlete trains six days a week without breaks", exampleTranslation: "Profesjonalny zawodnik trenuje sześć dni w tygodniu bez przerw" },
      { id: "sport8", polish: "Mecz", english: "Match", difficulty: "medium", example: "The important match will be played tomorrow evening at seven", exampleTranslation: "Ważny mecz będzie rozgrywany jutro wieczorem o siódmej" },
      { id: "sport9", polish: "Drużyna", english: "Team", difficulty: "medium", example: "Our team won the championship after many months of hard training", exampleTranslation: "Nasza drużyna wygrała mistrzostwo po wielu miesiącach ciężkiego treningu" },
      { id: "sport10", polish: "Siłownia", english: "Gym", difficulty: "medium", example: "I go to the gym every day after work to exercise", exampleTranslation: "Chodzę na siłownię codziennie po pracy żeby ćwiczyć" },
      { id: "sport11", polish: "Rozciąganie", english: "Stretching", difficulty: "medium", example: "Stretching before exercise is very important to prevent injuries", exampleTranslation: "Rozciąganie przed ćwiczeniami jest bardzo ważne aby zapobiec kontuzjom" },
      { id: "sport12", polish: "Maraton", english: "Marathon", difficulty: "medium", example: "I'm training for a marathon that takes place in three months", exampleTranslation: "Trenuję do maratonu który odbywa się za trzy miesiące" },
      { id: "sport13", polish: "Lubisz sport?", english: "Do you like sports?", difficulty: "hard", example: "Do you like playing sports or do you prefer watching them?", exampleTranslation: "Lubisz uprawiać sport czy wolisz oglądać?" },
      { id: "sport14", polish: "Ćwiczę codziennie", english: "I exercise every day", difficulty: "hard", example: "I exercise every single day to maintain good health and energy", exampleTranslation: "Ćwiczę codziennie aby utrzymać dobre zdrowie i energię" },
      { id: "sport15", polish: "Kto wygrał?", english: "Who won?", difficulty: "hard", example: "Who won the match yesterday? I missed it unfortunately", exampleTranslation: "Kto wygrał mecz wczoraj? Niestety go przegapiłem" }
    ]
  },

  money_finance: {
    name: "Pieniądze i finanse",
    description: "Money and banking",
    icon: Wallet,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "mon1", polish: "Pieniądze", english: "Money", difficulty: "easy", example: "I need to save money for vacation to Spain this summer", exampleTranslation: "Muszę zaoszczędzić pieniądze na wakacje w Hiszpanii tego lata" },
      { id: "mon2", polish: "Bank", english: "Bank", difficulty: "easy", example: "I'm going to the bank to open a new savings account today", exampleTranslation: "Idę do banku otworzyć nowe konto oszczędnościowe dzisiaj" },
      { id: "mon3", polish: "Karta", english: "Card", difficulty: "easy", example: "I prefer to pay by card instead of using cash everywhere", exampleTranslation: "Wolę płacić kartą zamiast używać gotówki wszędzie" },
      { id: "mon4", polish: "Gotówka", english: "Cash", difficulty: "easy", example: "I always carry some cash in my wallet for emergencies", exampleTranslation: "Zawsze noszę trochę gotówki w portfelu na wypadek nagłych sytuacji" },
      { id: "mon5", polish: "Rachunek", english: "Bill", difficulty: "easy", example: "The restaurant bill came to fifty dollars including the tip", exampleTranslation: "Rachunek w restauracji wyniósł pięćdziesiąt dolarów wraz z napiwkiem" },
      { id: "mon6", polish: "Oszczędzać", english: "To save", difficulty: "easy", example: "I try to save at least ten percent of my salary monthly", exampleTranslation: "Staram się oszczędzać przynajmniej dziesięć procent pensji miesięcznie" },
      { id: "mon7", polish: "Wydawać", english: "To spend", difficulty: "medium", example: "I spend too much money on eating out at restaurants weekly", exampleTranslation: "Wydaję za dużo pieniędzy na jedzenie w restauracjach tygodniowo" },
      { id: "mon8", polish: "Pożyczka", english: "Loan", difficulty: "medium", example: "I took out a loan from the bank to buy a new car", exampleTranslation: "Wziąłem pożyczkę z banku aby kupić nowy samochód" },
      { id: "mon9", polish: "Inwestycja", english: "Investment", difficulty: "medium", example: "Real estate is considered a safe investment for the long term", exampleTranslation: "Nieruchomości są uważane za bezpieczną inwestycję długoterminową" },
      { id: "mon10", polish: "Budżet", english: "Budget", difficulty: "medium", example: "I plan my monthly budget carefully to avoid overspending money", exampleTranslation: "Planuję miesięczny budżet starannie aby uniknąć przepłacania" },
      { id: "mon11", polish: "Dług", english: "Debt", difficulty: "medium", example: "I'm working hard to pay off all my debts this year", exampleTranslation: "Ciężko pracuję aby spłacić wszystkie długi w tym roku" },
      { id: "mon12", polish: "Przelew", english: "Transfer", difficulty: "medium", example: "I made a bank transfer to pay for the online purchase", exampleTranslation: "Zrobiłem przelew bankowy aby zapłacić za zakup online" },
      { id: "mon13", polish: "Ile masz pieniędzy?", english: "How much money do you have?", difficulty: "hard", example: "How much money do you have saved for the trip abroad?", exampleTranslation: "Ile masz zaoszczędzonych pieniędzy na wyjazd za granicę?" },
      { id: "mon14", polish: "Muszę iść do banku", english: "I need to go to the bank", difficulty: "hard", example: "I need to go to the bank urgently to withdraw some cash", exampleTranslation: "Muszę pilnie iść do banku żeby wypłacić trochę gotówki" },
      { id: "mon15", polish: "To kosztuje fortunę", english: "It costs a fortune", difficulty: "hard", example: "This apartment in the city center costs an absolute fortune to rent", exampleTranslation: "To mieszkanie w centrum miasta kosztuje fortunę do wynajęcia" }
    ]
  },

  entertainment_media: {
    name: "Rozrywka i media",
    description: "Entertainment and shows",
    icon: Film,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "ent1", polish: "Film", english: "Movie", difficulty: "easy", example: "We watched an interesting movie at the cinema last Saturday evening", exampleTranslation: "Obejrzeliśmy ciekawy film w kinie w zeszłą sobotę wieczorem" },
      { id: "ent2", polish: "Serial", english: "Series", difficulty: "easy", example: "I'm watching a new series on Netflix every evening this week", exampleTranslation: "Oglądam nowy serial na Netflixie każdego wieczoru w tym tygodniu" },
      { id: "ent3", polish: "Telewizja", english: "Television", difficulty: "easy", example: "I watch television news every morning during breakfast at home", exampleTranslation: "Oglądam wiadomości w telewizji każdego ranka podczas śniadania w domu" },
      { id: "ent4", polish: "Kanał", english: "Channel", difficulty: "easy", example: "This channel broadcasts interesting documentaries about nature and animals", exampleTranslation: "Ten kanał nadaje ciekawe dokumenty o przyrodzie i zwierzętach" },
      { id: "ent5", polish: "Program", english: "Program", difficulty: "easy", example: "My favorite TV program starts at eight o'clock tonight", exampleTranslation: "Mój ulubiony program telewizyjny zaczyna się o ósmej dziś wieczorem" },
      { id: "ent6", polish: "Aktor", english: "Actor", difficulty: "easy", example: "This actor won an award for his performance in the movie", exampleTranslation: "Ten aktor zdobył nagrodę za swoje występ w filmie" },
      { id: "ent7", polish: "Reżyser", english: "Director", difficulty: "medium", example: "The famous director is working on a new historical movie project", exampleTranslation: "Znany reżyser pracuje nad nowym projektem filmu historycznego" },
      { id: "ent8", polish: "Scenariusz", english: "Script", difficulty: "medium", example: "The script for this movie was written by a talented young writer", exampleTranslation: "Scenariusz do tego filmu został napisany przez utalentowanego młodego pisarza" },
      { id: "ent9", polish: "Odcinek", english: "Episode", difficulty: "medium", example: "The latest episode of the series was absolutely thrilling to watch", exampleTranslation: "Ostatni odcinek serialu był absolutnie ekscytujący do oglądania" },
      { id: "ent10", polish: "Streaming", english: "Streaming", difficulty: "medium", example: "I subscribe to three streaming services to watch different shows", exampleTranslation: "Subskrybuję trzy serwisy streamingowe aby oglądać różne programy" },
      { id: "ent11", polish: "Dokumentalny", english: "Documentary", difficulty: "medium", example: "I love watching documentary films about history and science topics", exampleTranslation: "Uwielbiam oglądać filmy dokumentalne o historii i nauce" },
      { id: "ent12", polish: "Komedia", english: "Comedy", difficulty: "medium", example: "This comedy show always makes me laugh until I cry", exampleTranslation: "Ten program komediowy zawsze mnie rozśmiesza do łez" },
      { id: "ent13", polish: "Co oglądasz?", english: "What are you watching?", difficulty: "hard", example: "What are you watching right now? Is it any good and interesting?", exampleTranslation: "Co oglądasz teraz? Czy to jest dobre i ciekawe?" },
      { id: "ent14", polish: "Polecasz ten film?", english: "Do you recommend this movie?", difficulty: "hard", example: "Do you recommend this movie or should I watch something else instead?", exampleTranslation: "Polecasz ten film czy powinienem obejrzeć coś innego zamiast tego?" },
      { id: "ent15", polish: "Nie mogę się doczekać", english: "I can't wait", difficulty: "hard", example: "I can't wait for the next season of this amazing series!", exampleTranslation: "Nie mogę się doczekać następnego sezonu tego niesamowitego serialu!" }
    ]
  },

  travel_tourism: {
    name: "Podróże i turystyka",
    description: "Travel and sightseeing",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "trav1", polish: "Podróż", english: "Journey", difficulty: "easy", example: "The journey to Paris by train takes about eight hours total", exampleTranslation: "Podróż do Paryża pociągiem trwa około ośmiu godzin w sumie" },
      { id: "trav2", polish: "Wakacje", english: "Vacation", difficulty: "easy", example: "We're planning our summer vacation to Greece for two weeks", exampleTranslation: "Planujemy nasze letnie wakacje w Grecji na dwa tygodnie" },
      { id: "trav3", polish: "Turysta", english: "Tourist", difficulty: "easy", example: "The city is full of tourists during the summer season", exampleTranslation: "Miasto jest pełne turystów podczas letniego sezonu" },
      { id: "trav4", polish: "Lotnisko", english: "Airport", difficulty: "easy", example: "I need to be at the airport two hours before the flight", exampleTranslation: "Muszę być na lotnisku dwie godziny przed lotem" },
      { id: "trav5", polish: "Lot", english: "Flight", difficulty: "easy", example: "The flight to New York was delayed by three hours yesterday", exampleTranslation: "Lot do Nowego Jorku był opóźniony o trzy godziny wczoraj" },
      { id: "trav6", polish: "Paszport", english: "Passport", difficulty: "easy", example: "Don't forget to bring your passport for international travel abroad", exampleTranslation: "Nie zapomnij zabrać paszportu na międzynarodową podróż za granicę" },
      { id: "trav7", polish: "Rezerwacja", english: "Reservation", difficulty: "medium", example: "I made a hotel reservation for next week through the website", exampleTranslation: "Zrobiłem rezerwację hotelu na przyszły tydzień przez stronę internetową" },
      { id: "trav8", polish: "Zwiedzanie", english: "Sightseeing", difficulty: "medium", example: "We spent the whole day sightseeing and visiting famous monuments", exampleTranslation: "Spędziliśmy cały dzień na zwiedzaniu i odwiedzaniu słynnych zabytków" },
      { id: "trav9", polish: "Przewodnik", english: "Guide", difficulty: "medium", example: "The tour guide showed us all the historical places in the city", exampleTranslation: "Przewodnik pokazał nam wszystkie historyczne miejsca w mieście" },
      { id: "trav10", polish: "Bagaż", english: "Luggage", difficulty: "medium", example: "My luggage is too heavy and I need to remove some items", exampleTranslation: "Mój bagaż jest za ciężki i muszę usunąć część rzeczy" },
      { id: "trav11", polish: "Bilet", english: "Ticket", difficulty: "medium", example: "I bought round-trip tickets to Rome for very reasonable prices", exampleTranslation: "Kupiłem bilety w obie strony do Rzymu za bardzo rozsądne ceny" },
      { id: "trav12", polish: "Wiza", english: "Visa", difficulty: "medium", example: "I need to apply for a visa to visit that country legally", exampleTranslation: "Muszę ubiegać się o wizę aby odwiedzić ten kraj legalnie" },
      { id: "trav13", polish: "Gdzie chcesz pojechać?", english: "Where do you want to go?", difficulty: "hard", example: "Where do you want to go on vacation this summer and for how long?", exampleTranslation: "Gdzie chcesz pojechać na wakacje tego lata i na jak długo?" },
      { id: "trav14", polish: "Uwielbiam podróżować", english: "I love to travel", difficulty: "hard", example: "I absolutely love to travel and explore new cultures and countries", exampleTranslation: "Absolutnie uwielbiam podróżować i poznawać nowe kultury i kraje" },
      { id: "trav15", polish: "Mam rezerwację", english: "I have a reservation", difficulty: "hard", example: "I have a reservation at this hotel under my name for tonight", exampleTranslation: "Mam rezerwację w tym hotelu na moje nazwisko na dzisiejszą noc" }
    ]
  },

  drinks_beverages: {
    name: "Napoje i picie",
    description: "Drinks and beverages",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "drink1", polish: "Woda", english: "Water", difficulty: "easy", example: "I drink at least eight glasses of water every single day", exampleTranslation: "Piję przynajmniej osiem szklanek wody każdego dnia" },
      { id: "drink2", polish: "Kawa", english: "Coffee", difficulty: "easy", example: "I can't start my morning without a strong cup of coffee", exampleTranslation: "Nie mogę rozpocząć poranka bez mocnej filiżanki kawy" },
      { id: "drink3", polish: "Herbata", english: "Tea", difficulty: "easy", example: "I prefer green tea with honey in the evening before bed", exampleTranslation: "Wolę zieloną herbatę z miodem wieczorem przed snem" },
      { id: "drink4", polish: "Sok", english: "Juice", difficulty: "easy", example: "Fresh orange juice is very healthy and full of vitamins", exampleTranslation: "Świeży sok pomarańczowy jest bardzo zdrowy i pełen witamin" },
      { id: "drink5", polish: "Mleko", english: "Milk", difficulty: "easy", example: "I add milk to my coffee every morning at breakfast", exampleTranslation: "Dodaję mleko do kawy każdego ranka przy śniadaniu" },
      { id: "drink6", polish: "Napój", english: "Drink", difficulty: "easy", example: "What drink would you like to order from the menu?", exampleTranslation: "Jaki napój chciałbyś zamówić z menu?" },
      { id: "drink7", polish: "Alkohol", english: "Alcohol", difficulty: "medium", example: "I don't drink alcohol because I prefer healthy soft drinks", exampleTranslation: "Nie piję alkoholu bo wolę zdrowe napoje bezalkoholowe" },
      { id: "drink8", polish: "Wino", english: "Wine", difficulty: "medium", example: "A glass of red wine pairs perfectly with the dinner meal", exampleTranslation: "Kieliszek czerwonego wina pasuje idealnie do obiadu" },
      { id: "drink9", polish: "Piwo", english: "Beer", difficulty: "medium", example: "Cold beer tastes great on a hot summer day outside", exampleTranslation: "Zimne piwo smakuje wspaniale w gorący letni dzień na zewnątrz" },
      { id: "drink10", polish: "Koktajl", english: "Cocktail", difficulty: "medium", example: "The bartender makes excellent tropical cocktails with fresh fruits", exampleTranslation: "Barman robi doskonałe tropikalne koktajle ze świeżych owoców" },
      { id: "drink11", polish: "Napiwek", english: "Tip", difficulty: "medium", example: "I left a generous tip for the waiter's excellent service", exampleTranslation: "Zostawiłem hojny napiwek za doskonałą obsługę kelnera" },
      { id: "drink12", polish: "Butelka", english: "Bottle", difficulty: "medium", example: "I bought a large bottle of mineral water for the trip", exampleTranslation: "Kupiłem dużą butelkę wody mineralnej na wycieczkę" },
      { id: "drink13", polish: "Co chcesz pić?", english: "What do you want to drink?", difficulty: "hard", example: "What do you want to drink with your dinner this evening?", exampleTranslation: "Co chcesz pić do kolacji dzisiejszego wieczoru?" },
      { id: "drink14", polish: "Poproszę kawę", english: "I'll have coffee", difficulty: "hard", example: "I'll have a large coffee with milk and sugar please", exampleTranslation: "Poproszę dużą kawę z mlekiem i cukrem proszę" },
      { id: "drink15", polish: "Jestem spragniony", english: "I'm thirsty", difficulty: "hard", example: "I'm very thirsty after the long walk in the hot sun", exampleTranslation: "Jestem bardzo spragniony po długim spacerze w gorącym słońcu" }
    ]
  },

  house_rooms: {
    name: "Dom i pokoje",
    description: "House and rooms",
    icon: Home,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "house1", polish: "Pokój", english: "Room", difficulty: "easy", example: "My room is on the second floor of our house", exampleTranslation: "Mój pokój jest na drugim piętrze naszego domu" },
      { id: "house2", polish: "Kuchnia", english: "Kitchen", difficulty: "easy", example: "The kitchen is the largest room in our modern apartment", exampleTranslation: "Kuchnia jest największym pokojem w naszym nowoczesnym mieszkaniu" },
      { id: "house3", polish: "Łazienka", english: "Bathroom", difficulty: "easy", example: "The bathroom has a large shower and a beautiful bathtub", exampleTranslation: "Łazienka ma duży prysznic i piękną wannę" },
      { id: "house4", polish: "Sypialnia", english: "Bedroom", difficulty: "easy", example: "My bedroom is cozy and decorated in calming blue colors", exampleTranslation: "Moja sypialnia jest przytulna i urządzona w uspokajających niebieskich kolorach" },
      { id: "house5", polish: "Salon", english: "Living room", difficulty: "easy", example: "We spend evenings together in the living room watching television", exampleTranslation: "Spędzamy wieczory razem w salonie oglądając telewizję" },
      { id: "house6", polish: "Ogród", english: "Garden", difficulty: "easy", example: "I work in the garden planting flowers and vegetables every weekend", exampleTranslation: "Pracuję w ogrodzie sadząc kwiaty i warzywa w każdy weekend" },
      { id: "house7", polish: "Garaż", english: "Garage", difficulty: "medium", example: "I park my car in the garage to protect it from weather", exampleTranslation: "Parkuję samochód w garażu aby chronić go przed pogodą" },
      { id: "house8", polish: "Piwnica", english: "Basement", difficulty: "medium", example: "The basement is used for storage of old furniture and boxes", exampleTranslation: "Piwnica jest używana do przechowywania starych mebli i pudełek" },
      { id: "house9", polish: "Strych", english: "Attic", difficulty: "medium", example: "We found many old family photos in the dusty attic yesterday", exampleTranslation: "Znaleźliśmy wiele starych rodzinnych zdjęć na zakurzonym strychu wczoraj" },
      { id: "house10", polish: "Balkon", english: "Balcony", difficulty: "medium", example: "I enjoy my morning coffee on the sunny balcony every day", exampleTranslation: "Delektuję się poranną kawą na słonecznym balkonie codziennie" },
      { id: "house11", polish: "Jadalnia", english: "Dining room", difficulty: "medium", example: "The dining room has a large wooden table for family meals", exampleTranslation: "Jadalnia ma duży drewniany stół do rodzinnych posiłków" },
      { id: "house12", polish: "Korytarz", english: "Hallway", difficulty: "medium", example: "The long hallway connects all the rooms in our apartment", exampleTranslation: "Długi korytarz łączy wszystkie pokoje w naszym mieszkaniu" },
      { id: "house13", polish: "Gdzie jest łazienka?", english: "Where is the bathroom?", difficulty: "hard", example: "Excuse me, where is the bathroom in this large house?", exampleTranslation: "Przepraszam, gdzie jest łazienka w tym dużym domu?" },
      { id: "house14", polish: "Mam duży dom", english: "I have a big house", difficulty: "hard", example: "I have a big house with five bedrooms and a beautiful garden", exampleTranslation: "Mam duży dom z pięcioma sypialniami i pięknym ogrodem" },
      { id: "house15", polish: "To mój pokój", english: "This is my room", difficulty: "hard", example: "This is my room where I sleep, study and relax every day", exampleTranslation: "To jest mój pokój gdzie śpię, uczę się i odpoczywam codziennie" }
    ]
  },

  seasons_weather: {
    name: "Pory roku i pogoda",
    description: "Seasons and weather",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "seas1", polish: "Wiosna", english: "Spring", difficulty: "easy", example: "Spring is my favorite season when flowers bloom beautifully everywhere", exampleTranslation: "Wiosna jest moją ulubioną porą roku gdy kwiaty kwitną pięknie wszędzie" },
      { id: "seas2", polish: "Lato", english: "Summer", difficulty: "easy", example: "Summer is hot and perfect for swimming at the beach", exampleTranslation: "Lato jest gorące i idealne do pływania na plaży" },
      { id: "seas3", polish: "Jesień", english: "Autumn", difficulty: "easy", example: "Autumn brings beautiful colors when leaves fall from the trees", exampleTranslation: "Jesień przynosi piękne kolory gdy liście spadają z drzew" },
      { id: "seas4", polish: "Zima", english: "Winter", difficulty: "easy", example: "Winter is cold and snowy in our mountain region every year", exampleTranslation: "Zima jest zimna i śnieżna w naszym górskim regionie każdego roku" },
      { id: "seas5", polish: "Słonecznie", english: "Sunny", difficulty: "easy", example: "Today is a sunny and warm day perfect for outdoor activities", exampleTranslation: "Dzisiaj jest słoneczny i ciepły dzień idealny na aktywności na świeżym powietrzu" },
      { id: "seas6", polish: "Deszcz", english: "Rain", difficulty: "easy", example: "Heavy rain is falling outside so take an umbrella with you", exampleTranslation: "Pada mocny deszcz na zewnątrz więc weź parasol ze sobą" },
      { id: "seas7", polish: "Śnieg", english: "Snow", difficulty: "medium", example: "White snow covers everything and creates a beautiful winter landscape", exampleTranslation: "Biały śnieg pokrywa wszystko i tworzy piękny zimowy krajobraz" },
      { id: "seas8", polish: "Wiatr", english: "Wind", difficulty: "medium", example: "Strong wind is blowing from the north bringing cold air", exampleTranslation: "Mocny wiatr wieje z północy przynosząc zimne powietrze" },
      { id: "seas9", polish: "Burza", english: "Storm", difficulty: "medium", example: "A powerful storm with thunder and lightning is approaching the city", exampleTranslation: "Potężna burza z gromami i błyskawicami zbliża się do miasta" },
      { id: "seas10", polish: "Mgła", english: "Fog", difficulty: "medium", example: "Thick fog makes driving very dangerous in the early morning", exampleTranslation: "Gęsta mgła czyni jazdę bardzo niebezpieczną wczesnym rankiem" },
      { id: "seas11", polish: "Temperatura", english: "Temperature", difficulty: "medium", example: "The temperature today is twenty-five degrees Celsius outside", exampleTranslation: "Temperatura dzisiaj wynosi dwadzieścia pięć stopni Celsjusza na zewnątrz" },
      { id: "seas12", polish: "Prognoza", english: "Forecast", difficulty: "medium", example: "The weather forecast predicts rain for the entire weekend ahead", exampleTranslation: "Prognoza pogody przewiduje deszcz na cały weekend przed nami" },
      { id: "seas13", polish: "Jaka jest pogoda?", english: "What's the weather like?", difficulty: "hard", example: "What's the weather like today? Should I take a jacket outside?", exampleTranslation: "Jaka jest dzisiaj pogoda? Powinienem wziąć kurtkę na zewnątrz?" },
      { id: "seas14", polish: "Będzie padać", english: "It's going to rain", difficulty: "hard", example: "It's going to rain later today according to the weather forecast", exampleTranslation: "Będzie padać później dzisiaj według prognozy pogody" },
      { id: "seas15", polish: "Jest zimno dzisiaj", english: "It's cold today", difficulty: "hard", example: "It's very cold today so wear warm clothes before going outside", exampleTranslation: "Jest bardzo zimno dzisiaj więc ubierz się ciepło przed wyjściem na zewnątrz" }
    ]
  },

  hobbies_interests: {
    name: "Hobby i zainteresowania",
    description: "Hobbies and interests",
    icon: Film,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "hob1", polish: "Hobby", english: "Hobby", difficulty: "easy", example: "My favorite hobby is reading books about history and science", exampleTranslation: "Moim ulubionym hobby jest czytanie książek o historii i nauce" },
      { id: "hob2", polish: "Czytać", english: "To read", difficulty: "easy", example: "I love to read novels in the evening before going to sleep", exampleTranslation: "Uwielbiam czytać powieści wieczorem przed pójściem spać" },
      { id: "hob3", polish: "Malować", english: "To paint", difficulty: "easy", example: "She paints beautiful landscapes in oil on large canvases", exampleTranslation: "Ona maluje piękne pejzaże olejne na dużych płótnach" },
      { id: "hob4", polish: "Rysować", english: "To draw", difficulty: "easy", example: "I draw portraits with pencil in my free time at home", exampleTranslation: "Rysuję portrety ołówkiem w wolnym czasie w domu" },
      { id: "hob5", polish: "Fotografować", english: "To photograph", difficulty: "easy", example: "I photograph nature and wildlife during my weekend hiking trips", exampleTranslation: "Fotografuję przyrodę i dziką zwierzynę podczas weekendowych wycieczek pieszych" },
      { id: "hob6", polish: "Kolekcjonować", english: "To collect", difficulty: "easy", example: "My grandfather collects old stamps from different countries worldwide", exampleTranslation: "Mój dziadek kolekcjonuje stare znaczki z różnych krajów świata" },
      { id: "hob7", polish: "Gra planszowa", english: "Board game", difficulty: "medium", example: "We play board games with family every Friday evening together", exampleTranslation: "Gramy w gry planszowe z rodziną w każdy piątkowy wieczór razem" },
      { id: "hob8", polish: "Puzzle", english: "Puzzle", difficulty: "medium", example: "I'm working on a difficult puzzle with one thousand pieces", exampleTranslation: "Pracuję nad trudnym puzzlem z tysiącem elementów" },
      { id: "hob9", polish: "Rękodzieło", english: "Handicraft", difficulty: "medium", example: "She creates beautiful handicraft items and sells them at markets", exampleTranslation: "Ona tworzy piękne przedmioty rękodzieła i sprzedaje je na targach" },
      { id: "hob10", polish: "Ogrodnictwo", english: "Gardening", difficulty: "medium", example: "Gardening is a relaxing hobby that keeps me active outdoors", exampleTranslation: "Ogrodnictwo jest relaksującym hobby które utrzymuje mnie aktywnym na świeżym powietrzu" },
      { id: "hob11", polish: "Haft", english: "Embroidery", difficulty: "medium", example: "Traditional embroidery requires patience and skill to create beautiful patterns", exampleTranslation: "Tradycyjny haft wymaga cierpliwości i umiejętności do tworzenia pięknych wzorów" },
      { id: "hob12", polish: "Majsterkowanie", english: "DIY", difficulty: "medium", example: "I enjoy DIY projects like building furniture for my home", exampleTranslation: "Lubię majsterkowanie takie jak budowanie mebli do mojego domu" },
      { id: "hob13", polish: "Jakie masz hobby?", english: "What are your hobbies?", difficulty: "hard", example: "What are your favorite hobbies and how did you start doing them?", exampleTranslation: "Jakie są twoje ulubione hobby i jak zacząłeś je uprawiać?" },
      { id: "hob14", polish: "Interesuję się fotografią", english: "I'm interested in photography", difficulty: "hard", example: "I'm deeply interested in photography and I take photos every weekend", exampleTranslation: "Głęboko interesuję się fotografią i robię zdjęcia w każdy weekend" },
      { id: "hob15", polish: "W wolnym czasie", english: "In my free time", difficulty: "hard", example: "In my free time I like to paint, read books and listen to music", exampleTranslation: "W wolnym czasie lubię malować, czytać książki i słuchać muzyki" }
    ]
  },

  directions_location: {
    name: "Kierunki i lokalizacja",
    description: "Directions and places",
    icon: Plane,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "dir1", polish: "Lewo", english: "Left", difficulty: "easy", example: "Turn left at the traffic lights and go straight ahead", exampleTranslation: "Skręć w lewo na światłach i idź prosto przed siebie" },
      { id: "dir2", polish: "Prawo", english: "Right", difficulty: "easy", example: "The shop is on the right side of the street corner", exampleTranslation: "Sklep jest po prawej stronie na rogu ulicy" },
      { id: "dir3", polish: "Prosto", english: "Straight", difficulty: "easy", example: "Go straight for two blocks and you'll see the building", exampleTranslation: "Idź prosto przez dwa przecznice a zobaczysz budynek" },
      { id: "dir4", polish: "Blisko", english: "Near", difficulty: "easy", example: "The restaurant is very near to my house on this street", exampleTranslation: "Restauracja jest bardzo blisko mojego domu na tej ulicy" },
      { id: "dir5", polish: "Daleko", english: "Far", difficulty: "easy", example: "The airport is quite far from the city center downtown", exampleTranslation: "Lotnisko jest dość daleko od centrum miasta" },
      { id: "dir6", polish: "Kierunek", english: "Direction", difficulty: "easy", example: "Can you show me the direction to the nearest subway station?", exampleTranslation: "Możesz pokazać mi kierunek do najbliższej stacji metra?" },
      { id: "dir7", polish: "Róg", english: "Corner", difficulty: "medium", example: "The pharmacy is located on the corner of two main streets", exampleTranslation: "Apteka znajduje się na rogu dwóch głównych ulic" },
      { id: "dir8", polish: "Skrzyżowanie", english: "Intersection", difficulty: "medium", example: "Wait at the intersection until the traffic light turns green", exampleTranslation: "Poczekaj na skrzyżowaniu aż światła zmienią się na zielone" },
      { id: "dir9", polish: "Most", english: "Bridge", difficulty: "medium", example: "Cross the old stone bridge and turn right immediately after", exampleTranslation: "Przejdź przez stary kamienny most i skręć w prawo zaraz po nim" },
      { id: "dir10", polish: "Tunel", english: "Tunnel", difficulty: "medium", example: "The tunnel under the river shortens the journey significantly for drivers", exampleTranslation: "Tunel pod rzeką skraca podróż znacząco dla kierowców" },
      { id: "dir11", polish: "Mapa", english: "Map", difficulty: "medium", example: "I always carry a paper map when traveling to unfamiliar places", exampleTranslation: "Zawsze noszę papierową mapę gdy podróżuję do nieznanych miejsc" },
      { id: "dir12", polish: "Nawigacja", english: "Navigation", difficulty: "medium", example: "The GPS navigation system guides us to our destination perfectly", exampleTranslation: "System nawigacji GPS prowadzi nas do celu idealnie" },
      { id: "dir13", polish: "Jak tam dojść?", english: "How to get there?", difficulty: "hard", example: "How do I get there from here? Is it walking distance?", exampleTranslation: "Jak tam dojść stąd? Czy to jest w zasięgu spaceru?" },
      { id: "dir14", polish: "Zgubiłem się", english: "I'm lost", difficulty: "hard", example: "I think I'm lost in this big city. Can you help me?", exampleTranslation: "Myślę że zgubiłem się w tym dużym mieście. Możesz mi pomóc?" },
      { id: "dir15", polish: "To niedaleko stąd", english: "It's not far from here", difficulty: "hard", example: "It's not far from here, just a five minute walk straight ahead", exampleTranslation: "To niedaleko stąd, tylko pięć minut spacerem prosto przed siebie" }
    ]
  },

  clothing_accessories: {
    name: "Ubrania i dodatki",
    description: "Clothes and accessories",
    icon: Home,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "cloth1", polish: "Koszula", english: "Shirt", difficulty: "easy", example: "I need to iron my white shirt for tomorrow's meeting", exampleTranslation: "Muszę wyprasować białą koszulę na jutrzejsze spotkanie" },
      { id: "cloth2", polish: "Spodnie", english: "Pants", difficulty: "easy", example: "These pants are too long and need to be shortened by the tailor", exampleTranslation: "Te spodnie są za długie i trzeba je skrócić u krawca" },
      { id: "cloth3", polish: "Sukienka", english: "Dress", difficulty: "easy", example: "She bought a beautiful red dress for the wedding ceremony", exampleTranslation: "Kupiła piękną czerwoną sukienkę na ceremonię ślubną" },
      { id: "cloth4", polish: "Sweter", english: "Sweater", difficulty: "easy", example: "I wear a warm wool sweater in cold winter weather always", exampleTranslation: "Noszę ciepły wełniany sweter w zimną zimową pogodę zawsze" },
      { id: "cloth5", polish: "Buty", english: "Shoes", difficulty: "easy", example: "I bought comfortable running shoes for jogging in the park", exampleTranslation: "Kupiłem wygodne buty do biegania na jogging w parku" },
      { id: "cloth6", polish: "Czapka", english: "Hat", difficulty: "easy", example: "Wear a warm hat because it's freezing cold outside today", exampleTranslation: "Załóż ciepłą czapkę bo jest mroźno na zewnątrz dzisiaj" },
      { id: "cloth7", polish: "Płaszcz", english: "Coat", difficulty: "medium", example: "My winter coat is very warm and protects against wind", exampleTranslation: "Mój zimowy płaszcz jest bardzo ciepły i chroni przed wiatrem" },
      { id: "cloth8", polish: "Szalik", english: "Scarf", difficulty: "medium", example: "I wrap the colorful wool scarf around my neck in cold weather", exampleTranslation: "Owijam kolorowy wełniany szalik wokół szyi w zimną pogodę" },
      { id: "cloth9", polish: "Rękawiczki", english: "Gloves", difficulty: "medium", example: "I wear leather gloves to keep my hands warm during winter", exampleTranslation: "Noszę skórzane rękawiczki aby utrzymać ręce ciepłe podczas zimy" },
      { id: "cloth10", polish: "Pasek", english: "Belt", difficulty: "medium", example: "This leather belt matches perfectly with my formal shoes", exampleTranslation: "Ten skórzany pasek pasuje idealnie do moich eleganckich butów" },
      { id: "cloth11", polish: "Bielizna", english: "Underwear", difficulty: "medium", example: "I buy comfortable cotton underwear at this store regularly", exampleTranslation: "Kupuję wygodną bawełnianą bieliznę w tym sklepie regularnie" },
      { id: "cloth12", polish: "Rozmiar", english: "Size", difficulty: "medium", example: "Do you have this jacket in a larger size available?", exampleTranslation: "Czy macie tę kurtkę w większym rozmiarze dostępnym?" },
      { id: "cloth13", polish: "To mi pasuje", english: "It fits me", difficulty: "hard", example: "This shirt fits me perfectly and looks very good on me", exampleTranslation: "Ta koszula pasuje mi idealnie i wygląda bardzo dobrze na mnie" },
      { id: "cloth14", polish: "Gdzie kupiłeś to?", english: "Where did you buy this?", difficulty: "hard", example: "Where did you buy this beautiful jacket? I want one too!", exampleTranslation: "Gdzie kupiłeś tę piękną kurtkę? Ja też chcę taką!" },
      { id: "cloth15", polish: "Jest za ciasno", english: "It's too tight", difficulty: "hard", example: "This dress is too tight for me, I need a bigger size", exampleTranslation: "Ta sukienka jest za ciasna dla mnie, potrzebuję większego rozmiaru" }
    ]
  },

  relationships_social: {
    name: "Relacje i społeczeństwo",
    description: "Relationships and society",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "rel1", polish: "Przyjaciel", english: "Friend", difficulty: "easy", example: "My best friend and I have known each other since childhood", exampleTranslation: "Mój najlepszy przyjaciel i ja znamy się od dzieciństwa" },
      { id: "rel2", polish: "Rodzina", english: "Family", difficulty: "easy", example: "Family is the most important thing in my entire life", exampleTranslation: "Rodzina jest najważniejszą rzeczą w moim całym życiu" },
      { id: "rel3", polish: "Sąsiad", english: "Neighbor", difficulty: "easy", example: "My neighbor is very friendly and always helps when needed", exampleTranslation: "Mój sąsiad jest bardzo przyjazny i zawsze pomaga gdy potrzeba" },
      { id: "rel4", polish: "Spotkanie", english: "Meeting", difficulty: "easy", example: "Let's arrange a meeting at the cafe tomorrow afternoon at three", exampleTranslation: "Umówmy się na spotkanie w kawiarni jutro po południu o trzeciej" },
      { id: "rel5", polish: "Randka", english: "Date", difficulty: "easy", example: "I have a romantic date with my girlfriend tonight at restaurant", exampleTranslation: "Mam romantyczną randkę z moją dziewczyną dziś wieczorem w restauracji" },
      { id: "rel6", polish: "Ślub", english: "Wedding", difficulty: "easy", example: "Their wedding ceremony will take place in a beautiful church downtown", exampleTranslation: "Ich ceremonia ślubna odbędzie się w pięknym kościele w centrum" },
      { id: "rel7", polish: "Kłótnia", english: "Argument", difficulty: "medium", example: "We had a small argument but we made up quickly afterwards", exampleTranslation: "Mieliśmy małą kłótnię ale pogodziliśmy się szybko potem" },
      { id: "rel8", polish: "Przeprosiny", english: "Apology", difficulty: "medium", example: "His sincere apology was accepted and everything is fine now", exampleTranslation: "Jego szczere przeprosiny zostały przyjęte i wszystko jest w porządku teraz" },
      { id: "rel9", polish: "Zaufanie", english: "Trust", difficulty: "medium", example: "Trust is the foundation of every strong and healthy relationship", exampleTranslation: "Zaufanie jest fundamentem każdego silnego i zdrowego związku" },
      { id: "rel10", polish: "Wsparcie", english: "Support", difficulty: "medium", example: "I appreciate your support during these difficult times in my life", exampleTranslation: "Doceniam twoje wsparcie podczas tych trudnych czasów w moim życiu" },
      { id: "rel11", polish: "Rozstanie", english: "Breakup", difficulty: "medium", example: "The breakup was difficult but necessary for both of us", exampleTranslation: "Rozstanie było trudne ale konieczne dla nas obojga" },
      { id: "rel12", polish: "Pojednanie", english: "Reconciliation", difficulty: "medium", example: "Their reconciliation after the fight brought peace to the family", exampleTranslation: "Ich pojednanie po kłótni przyniosło spokój rodzinie" },
      { id: "rel13", polish: "Jesteśmy razem", english: "We're together", difficulty: "hard", example: "We've been together for five wonderful years and still very happy", exampleTranslation: "Jesteśmy razem od pięciu wspaniałych lat i wciąż bardzo szczęśliwi" },
      { id: "rel14", polish: "On jest dla mnie ważny", english: "He's important to me", difficulty: "hard", example: "He's very important to me and I value our deep friendship", exampleTranslation: "On jest dla mnie bardzo ważny i cenię naszą głęboką przyjaźń" },
      { id: "rel15", polish: "Zawsze możesz na mnie liczyć", english: "You can always count on me", difficulty: "hard", example: "You can always count on me no matter what happens in life", exampleTranslation: "Zawsze możesz na mnie liczyć bez względu na to co się stanie w życiu" }
    ]
  },

  office_work: {
    name: "Biuro i narzędzia pracy",
    description: "Office and work tools",
    icon: Wallet,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "off1", polish: "Biurko", english: "Desk", difficulty: "easy", example: "My desk is organized and clean for productive work every day", exampleTranslation: "Moje biurko jest zorganizowane i czyste do produktywnej pracy codziennie" },
      { id: "off2", polish: "Krzesło", english: "Chair", difficulty: "easy", example: "I sit in a comfortable ergonomic chair for long working hours", exampleTranslation: "Siedzę na wygodnym ergonomicznym krześle przez długie godziny pracy" },
      { id: "off3", polish: "Długopis", english: "Pen", difficulty: "easy", example: "I always keep a blue pen on my desk for writing notes", exampleTranslation: "Zawsze trzymam niebieski długopis na biurku do pisania notatek" },
      { id: "off4", polish: "Papier", english: "Paper", difficulty: "easy", example: "I need more printer paper for printing important documents today", exampleTranslation: "Potrzebuję więcej papieru do drukarki na drukowanie ważnych dokumentów dzisiaj" },
      { id: "off5", polish: "Zeszyt", english: "Notebook", difficulty: "easy", example: "I write all my ideas in a small notebook I carry always", exampleTranslation: "Zapisuję wszystkie pomysły w małym zeszycie który noszę zawsze" },
      { id: "off6", polish: "Teczka", english: "Folder", difficulty: "easy", example: "Keep all important documents organized in this blue folder safely", exampleTranslation: "Trzymaj wszystkie ważne dokumenty zorganizowane w tej niebieskiej teczce bezpiecznie" },
      { id: "off7", polish: "Zszywacz", english: "Stapler", difficulty: "medium", example: "I need the stapler to attach these papers together neatly", exampleTranslation: "Potrzebuję zszywacza aby połączyć te papiery razem schludnie" },
      { id: "off8", polish: "Spinacz", english: "Paper clip", difficulty: "medium", example: "Use paper clips to keep these documents together temporarily", exampleTranslation: "Użyj spinaczy aby trzymać te dokumenty razem tymczasowo" },
      { id: "off9", polish: "Taśma klejąca", english: "Tape", difficulty: "medium", example: "I need some tape to fix this torn page in the book", exampleTranslation: "Potrzebuję taśmy klejącej aby naprawić tę rozdarją stronę w książce" },
      { id: "off10", polish: "Nożyczki", english: "Scissors", difficulty: "medium", example: "Can I borrow your scissors to cut this paper precisely?", exampleTranslation: "Mogę pożyczyć twoje nożyczki aby ciąć ten papier precyzyjnie?" },
      { id: "off11", polish: "Dziurkacz", english: "Hole punch", difficulty: "medium", example: "Use the hole punch to make holes for the binder ring", exampleTranslation: "Użyj dziurkacza aby zrobić dziurki do segregatora" },
      { id: "off12", polish: "Kalkulator", english: "Calculator", difficulty: "medium", example: "I need a calculator to check these financial numbers accurately", exampleTranslation: "Potrzebuję kalkulatora aby sprawdzić te liczby finansowe dokładnie" },
      { id: "off13", polish: "Czy masz długopis?", english: "Do you have a pen?", difficulty: "hard", example: "Do you have a pen I could borrow for a quick moment?", exampleTranslation: "Czy masz długopis który mógłbym pożyczyć na szybką chwilę?" },
      { id: "off14", polish: "Skończyły się kartki", english: "We're out of paper", difficulty: "hard", example: "We're out of paper in the printer and need to order more", exampleTranslation: "Skończyły się kartki w drukarce i trzeba zamówić więcej" },
      { id: "off15", polish: "Gdzie jest drukarka?", english: "Where is the printer?", difficulty: "hard", example: "Where is the printer located? I need to print these documents urgently", exampleTranslation: "Gdzie jest drukarka? Muszę pilnie wydrukować te dokumenty" }
    ]
  },

  medical_health: {
    name: "Medycyna i zdrowie",
    description: "Medical and health",
    icon: Heart,
    color: "from-red-500 to-rose-600",
    level: "advanced",
    words: [
      { id: "med1", polish: "Lek", english: "Medicine", difficulty: "easy", example: "I bought medicine for headaches at the pharmacy without prescription", exampleTranslation: "Kupiłem lek na ból głowy w aptece bez recepty" },
      { id: "med2", polish: "Recepta", english: "Prescription", difficulty: "easy", example: "The doctor gave me a prescription for antibiotics to treat infection", exampleTranslation: "Lekarz dał mi receptę na antybiotyki do leczenia infekcji" },
      { id: "med3", polish: "Zastrzyk", english: "Injection", difficulty: "easy", example: "The nurse gave me a flu injection at the clinic today", exampleTranslation: "Pielęgniarka dała mi zastrzyk przeciw grypie w klinice dzisiaj" },
      { id: "med4", polish: "Bandaż", english: "Bandage", difficulty: "easy", example: "Apply a clean bandage to the wound and change it daily", exampleTranslation: "Nałóż czysty bandaż na ranę i zmieniaj go codziennie" },
      { id: "med5", polish: "Operacja", english: "Surgery", difficulty: "easy", example: "The knee surgery is scheduled for next week at the hospital", exampleTranslation: "Operacja kolana jest zaplanowana na przyszły tydzień w szpitalu" },
      { id: "med6", polish: "Diagnoza", english: "Diagnosis", difficulty: "easy", example: "The medical diagnosis revealed a bacterial infection requiring treatment", exampleTranslation: "Diagnoza lekarska wykazała infekcję bakteryjną wymagającą leczenia" },
      { id: "med7", polish: "Objawy", english: "Symptoms", difficulty: "medium", example: "The symptoms of illness appeared suddenly two days ago in evening", exampleTranslation: "Objawy choroby pojawiły się nagle dwa dni temu wieczorem" },
      { id: "med8", polish: "Leczenie", english: "Treatment", difficulty: "medium", example: "The treatment lasts six weeks and requires taking medicine regularly", exampleTranslation: "Leczenie trwa sześć tygodni i wymaga regularnego brania leków" },
      { id: "med9", polish: "Szczepienie", english: "Vaccination", difficulty: "medium", example: "I get a flu vaccination every year in autumn for protection", exampleTranslation: "Robię szczepienie przeciwko grypie co roku jesienią dla ochrony" },
      { id: "med10", polish: "Rehabilitacja", english: "Rehabilitation", difficulty: "medium", example: "Rehabilitation after injury is essential for complete recovery to health", exampleTranslation: "Rehabilitacja po kontuzji jest niezbędna do pełnego powrotu do zdrowia" },
      { id: "med11", polish: "Badanie", english: "Examination", difficulty: "medium", example: "I need to do a medical examination before starting new treatment", exampleTranslation: "Muszę zrobić badanie medyczne przed rozpoczęciem nowego leczenia" },
      { id: "med12", polish: "Alergia", english: "Allergy", difficulty: "medium", example: "I have a severe allergy to peanuts and must avoid them", exampleTranslation: "Mam poważną alergię na orzeszki ziemne i muszę ich unikać" },
      { id: "med13", polish: "Źle się czuję", english: "I feel sick", difficulty: "hard", example: "I feel very sick today and I think I need to see doctor", exampleTranslation: "Czuję się bardzo źle dzisiaj i myślę że muszę zobaczyć lekarza" },
      { id: "med14", polish: "Muszę iść do szpitala", english: "I need to go to the hospital", difficulty: "hard", example: "I need to go to the hospital urgently because the pain is severe", exampleTranslation: "Muszę pilnie iść do szpitala bo ból jest silny" },
      { id: "med15", polish: "Czuję się lepiej", english: "I feel better", difficulty: "hard", example: "I feel much better now after several days of proper treatment", exampleTranslation: "Czuję się dużo lepiej teraz po kilku dniach właściwego leczenia" }
    ]
  },

  transportation_travel: {
    name: "Transport i podróżowanie",
    description: "Transportation means",
    icon: Bike,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "trans1", polish: "Autobus", english: "Bus", difficulty: "easy", example: "The city bus departs every fifteen minutes from this stop", exampleTranslation: "Autobus miejski odjeżdża co piętnaście minut z tego przystanku" },
      { id: "trans2", polish: "Pociąg", english: "Train", difficulty: "easy", example: "The express train travels to Warsaw in three hours time", exampleTranslation: "Pociąg ekspresowy jedzie do Warszawy w trzy godziny" },
      { id: "trans3", polish: "Metro", english: "Subway", difficulty: "easy", example: "The subway in big cities is fast and very convenient always", exampleTranslation: "Metro w dużych miastach jest szybkie i bardzo wygodne zawsze" },
      { id: "trans4", polish: "Tramwaj", english: "Tram", difficulty: "easy", example: "The tram runs through the city center every few minutes", exampleTranslation: "Tramwaj jeździ przez centrum miasta co kilka minut" },
      { id: "trans5", polish: "Taksówka", english: "Taxi", difficulty: "easy", example: "I called a taxi through the mobile app on my phone", exampleTranslation: "Wezwałem taksówkę przez aplikację mobilną na moim telefonie" },
      { id: "trans6", polish: "Przystanek", english: "Stop", difficulty: "easy", example: "The bus stop is located right in front of the building", exampleTranslation: "Przystanek autobusowy znajduje się tuż przed budynkiem" },
      { id: "trans7", polish: "Stacja", english: "Station", difficulty: "medium", example: "The train station is large and always crowded with travelers", exampleTranslation: "Stacja kolejowa jest duża i zawsze zatłoczona podróżnymi" },
      { id: "trans8", polish: "Rozkład jazdy", english: "Schedule", difficulty: "medium", example: "Check the schedule to see when the next bus arrives here", exampleTranslation: "Sprawdź rozkład jazdy żeby zobaczyć kiedy przyjdzie następny autobus" },
      { id: "trans9", polish: "Bilet", english: "Ticket", difficulty: "medium", example: "I need to buy a ticket before boarding the train today", exampleTranslation: "Muszę kupić bilet przed wejściem do pociągu dzisiaj" },
      { id: "trans10", polish: "Kierowca", english: "Driver", difficulty: "medium", example: "The taxi driver knows all the shortcuts through the city well", exampleTranslation: "Kierowca taksówki zna wszystkie skróty przez miasto dobrze" },
      { id: "trans11", polish: "Pasażer", english: "Passenger", difficulty: "medium", example: "All passengers must wear seatbelts during the entire journey", exampleTranslation: "Wszyscy pasażerowie muszą mieć zapięte pasy podczas całej podróży" },
      { id: "trans12", polish: "Opóźnienie", english: "Delay", difficulty: "medium", example: "The train has a thirty minute delay due to bad weather", exampleTranslation: "Pociąg ma trzydziestominutowe opóźnienie z powodu złej pogody" },
      { id: "trans13", polish: "Jak tam dojechać?", english: "How to get there?", difficulty: "hard", example: "How can I get there by public transportation from here quickly?", exampleTranslation: "Jak mogę tam dojechać komunikacją publiczną stąd szybko?" },
      { id: "trans14", polish: "Który autobus jedzie?", english: "Which bus goes?", difficulty: "hard", example: "Excuse me, which bus goes directly to the city center from here?", exampleTranslation: "Przepraszam, który autobus jedzie bezpośrednio do centrum miasta stąd?" },
      { id: "trans15", polish: "Muszę się spieszyć", english: "I need to hurry", difficulty: "hard", example: "I need to hurry because my train leaves in ten minutes only", exampleTranslation: "Muszę się spieszyć bo mój pociąg odjeżdża za dziesięć minut tylko" }
    ]
  }
};