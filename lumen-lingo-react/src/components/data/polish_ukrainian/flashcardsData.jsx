/**
 * POLISH → UKRAINIAN FLASHCARDS
 * Complete vocabulary for Polish speakers learning Ukrainian
 */

import { BookOpen, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, Heart, Cloud, TreePine, Shirt, Briefcase, Car, GraduationCap, Coffee, Dumbbell, Music, Film, Plane, Palette } from "lucide-react";

export const flashcardsCategories = {
  basics: {
    name: "Podstawy",
    description: "Podstawowe zwroty",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pu_basic_1", polish: "Cześć", ukrainian: "Привіт", example: "Привіт, як справи?", exampleTranslation: "Cześć, jak się masz?" },
      { id: "pu_basic_2", polish: "Dziękuję", ukrainian: "Дякую", example: "Дякую за допомогу", exampleTranslation: "Dziękuję za pomoc" },
      { id: "pu_basic_3", polish: "Proszę", ukrainian: "Будь ласка", example: "Будь ласка, допоможи мені", exampleTranslation: "Proszę, pomóż mi" },
      { id: "pu_basic_4", polish: "Tak", ukrainian: "Так", example: "Так, це правда", exampleTranslation: "Tak, to prawda" },
      { id: "pu_basic_5", polish: "Nie", ukrainian: "Ні", example: "Ні, не хочу", exampleTranslation: "Nie, nie chcę" },
      { id: "pu_basic_6", polish: "Przepraszam", ukrainian: "Вибачте", example: "Вибачте, мені шкода", exampleTranslation: "Przepraszam, przykro mi" },
      { id: "pu_basic_7", polish: "Dzień dobry", ukrainian: "Добрий день", example: "Добрий день, пане", exampleTranslation: "Dzień dobry, panie" },
      { id: "pu_basic_8", polish: "Do widzenia", ukrainian: "До побачення", example: "До побачення, побачимось", exampleTranslation: "Do widzenia, do zobaczenia" },
      { id: "pu_basic_9", polish: "Dobranoc", ukrainian: "Добраніч", example: "Добраніч усім", exampleTranslation: "Dobranoc wszystkim" },
      { id: "pu_basic_10", polish: "Miłego dnia", ukrainian: "Гарного дня", example: "Гарного дня", exampleTranslation: "Miłego dnia" }
    ]
  },

  family: {
    name: "Rodzina",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Członkowie rodziny",
    words: [
      { id: "pu_fam_1", polish: "Ojciec", ukrainian: "Батько", example: "Мій батько працює", exampleTranslation: "Mój ojciec pracuje" },
      { id: "pu_fam_2", polish: "Matka", ukrainian: "Мати", example: "Моя мати готує", exampleTranslation: "Moja matka gotuje" },
      { id: "pu_fam_3", polish: "Brat", ukrainian: "Брат", example: "Мій брат навчається", exampleTranslation: "Mój brat studiuje" },
      { id: "pu_fam_4", polish: "Siostra", ukrainian: "Сестра", example: "Моя сестра співає", exampleTranslation: "Moja siostra śpiewa" },
      { id: "pu_fam_5", polish: "Syn", ukrainian: "Син", example: "Мій син грає", exampleTranslation: "Mój syn gra" },
      { id: "pu_fam_6", polish: "Córka", ukrainian: "Дочка", example: "Моя дочка читає", exampleTranslation: "Moja córka czyta" },
      { id: "pu_fam_7", polish: "Dziadek", ukrainian: "Дідусь", example: "Мій дідусь старий", exampleTranslation: "Mój dziadek jest stary" },
      { id: "pu_fam_8", polish: "Babcia", ukrainian: "Бабуся", example: "Моя бабуся добре готує", exampleTranslation: "Moja babcia dobrze gotuje" },
      { id: "pu_fam_9", polish: "Wujek", ukrainian: "Дядько", example: "Мій дядько живе далеко", exampleTranslation: "Mój wujek mieszka daleko" },
      { id: "pu_fam_10", polish: "Ciocia", ukrainian: "Тітка", example: "Моя тітка добра", exampleTranslation: "Moja ciocia jest miła" }
    ]
  },

  house: {
    name: "Dom",
    icon: Home,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    description: "Przedmioty w domu",
    words: [
      { id: "pu_house_1", polish: "Dom", ukrainian: "Дім", example: "Мій дім великий", exampleTranslation: "Mój dom jest duży" },
      { id: "pu_house_2", polish: "Pokój", ukrainian: "Кімната", example: "Кімната чиста", exampleTranslation: "Pokój jest czysty" },
      { id: "pu_house_3", polish: "Kuchnia", ukrainian: "Кухня", example: "Я готую на кухні", exampleTranslation: "Gotuję w kuchni" },
      { id: "pu_house_4", polish: "Łazienka", ukrainian: "Ванна", example: "Ванна нова", exampleTranslation: "Łazienka jest nowa" },
      { id: "pu_house_5", polish: "Sypialnia", ukrainian: "Спальня", example: "Моя спальня зручна", exampleTranslation: "Moja sypialnia jest przytulna" },
      { id: "pu_house_6", polish: "Drzwi", ukrainian: "Двері", example: "Зачини двері", exampleTranslation: "Zamknij drzwi" },
      { id: "pu_house_7", polish: "Okno", ukrainian: "Вікно", example: "Відкрий вікно", exampleTranslation: "Otwórz okno" },
      { id: "pu_house_8", polish: "Stół", ukrainian: "Стіл", example: "Стіл дерев'яний", exampleTranslation: "Stół jest drewniany" },
      { id: "pu_house_9", polish: "Krzesło", ukrainian: "Стілець", example: "Стілець зручний", exampleTranslation: "Krzesło jest wygodne" },
      { id: "pu_house_10", polish: "Łóżko", ukrainian: "Ліжко", example: "Ліжко м'яке", exampleTranslation: "Łóżko jest miękkie" }
    ]
  },

  food: {
    name: "Jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    description: "Podstawowe produkty",
    words: [
      { id: "pu_food_1", polish: "Woda", ukrainian: "Вода", example: "Склянка води, будь ласка", exampleTranslation: "Szklanka wody, proszę" },
      { id: "pu_food_2", polish: "Chleb", ukrainian: "Хліб", example: "Свіжий хліб", exampleTranslation: "Świeży chleb" },
      { id: "pu_food_3", polish: "Kawa", ukrainian: "Кава", example: "Чашка кави", exampleTranslation: "Filiżanka kawy" },
      { id: "pu_food_4", polish: "Herbata", ukrainian: "Чай", example: "Я люблю чай", exampleTranslation: "Lubię herbatę" },
      { id: "pu_food_5", polish: "Mleko", ukrainian: "Молоко", example: "Свіже молоко", exampleTranslation: "Świeże mleko" },
      { id: "pu_food_6", polish: "Jabłko", ukrainian: "Яблуко", example: "Червоне яблуко", exampleTranslation: "Czerwone jabłko" },
      { id: "pu_food_7", polish: "Mięso", ukrainian: "М'ясо", example: "М'ясо на грилі", exampleTranslation: "Grillowane mięso" },
      { id: "pu_food_8", polish: "Ryba", ukrainian: "Риба", example: "Свіжа риба", exampleTranslation: "Świeża ryba" },
      { id: "pu_food_9", polish: "Ser", ukrainian: "Сир", example: "Польський сир", exampleTranslation: "Polski ser" },
      { id: "pu_food_10", polish: "Wino", ukrainian: "Вино", example: "Червоне вино", exampleTranslation: "Czerwone wino" }
    ]
  },

  animals: {
    name: "Zwierzęta",
    icon: Dog,
    color: "from-yellow-400 to-amber-500",
    level: "beginner",
    description: "Nazwy zwierząt",
    words: [
      { id: "pu_animal_1", polish: "Pies", ukrainian: "Собака", example: "Собака дружній", exampleTranslation: "Pies jest przyjazny" },
      { id: "pu_animal_2", polish: "Kot", ukrainian: "Кіт", example: "Кіт спить", exampleTranslation: "Kot śpi" },
      { id: "pu_animal_3", polish: "Ptak", ukrainian: "Птах", example: "Птах співає", exampleTranslation: "Ptak śpiewa" },
      { id: "pu_animal_4", polish: "Ryba", ukrainian: "Риба", example: "Риба пливе", exampleTranslation: "Ryba pływa" },
      { id: "pu_animal_5", polish: "Koń", ukrainian: "Кінь", example: "Кінь біжить швидко", exampleTranslation: "Koń biega szybko" },
      { id: "pu_animal_6", polish: "Krowa", ukrainian: "Корова", example: "Корова дає молоко", exampleTranslation: "Krowa daje mleko" },
      { id: "pu_animal_7", polish: "Świnia", ukrainian: "Свиня", example: "Свиня на фермі", exampleTranslation: "Świnia jest na farmie" },
      { id: "pu_animal_8", polish: "Kurczak", ukrainian: "Курка", example: "Курка несе яйця", exampleTranslation: "Kurczak znosi jajka" },
      { id: "pu_animal_9", polish: "Królik", ukrainian: "Кролик", example: "Кролик стрибає", exampleTranslation: "Królik skacze" },
      { id: "pu_animal_10", polish: "Mysz", ukrainian: "Миша", example: "Миша маленька", exampleTranslation: "Mysz jest mała" }
    ]
  },

  places: {
    name: "Miejsca",
    icon: MapPin,
    color: "from-purple-400 to-violet-500",
    level: "beginner",
    description: "Lokalizacje",
    words: [
      { id: "pu_place_1", polish: "Sklep", ukrainian: "Магазин", example: "Магазин відкритий", exampleTranslation: "Sklep jest otwarty" },
      { id: "pu_place_2", polish: "Szkoła", ukrainian: "Школа", example: "Я йду до школи", exampleTranslation: "Idę do szkoły" },
      { id: "pu_place_3", polish: "Szpital", ukrainian: "Лікарня", example: "Лікарня близько", exampleTranslation: "Szpital jest blisko" },
      { id: "pu_place_4", polish: "Park", ukrainian: "Парк", example: "Діти граються в парку", exampleTranslation: "Dzieci bawią się w parku" },
      { id: "pu_place_5", polish: "Dworzec", ukrainian: "Вокзал", example: "Залізничний вокзал", exampleTranslation: "Dworzec kolejowy" },
      { id: "pu_place_6", polish: "Lotnisko", ukrainian: "Аеропорт", example: "Я в аеропорту", exampleTranslation: "Jestem na lotnisku" },
      { id: "pu_place_7", polish: "Restauracja", ukrainian: "Ресторан", example: "Ми їмо в ресторані", exampleTranslation: "Jemy w restauracji" },
      { id: "pu_place_8", polish: "Hotel", ukrainian: "Готель", example: "Готель великий", exampleTranslation: "Hotel jest duży" },
      { id: "pu_place_9", polish: "Bank", ukrainian: "Банк", example: "Я йду до банку", exampleTranslation: "Idę do banku" },
      { id: "pu_place_10", polish: "Muzeum", ukrainian: "Музей", example: "Музей цікавий", exampleTranslation: "Muzeum jest ciekawe" }
    ]
  },

  time: {
    name: "Czas",
    icon: Clock,
    color: "from-indigo-400 to-blue-500",
    level: "beginner",
    description: "Wyrażenia czasowe",
    words: [
      { id: "pu_time_1", polish: "Dzisiaj", ukrainian: "Сьогодні", example: "Сьогодні понеділок", exampleTranslation: "Dzisiaj jest poniedziałek" },
      { id: "pu_time_2", polish: "Wczoraj", ukrainian: "Вчора", example: "Вчора була неділя", exampleTranslation: "Wczoraj była niedziela" },
      { id: "pu_time_3", polish: "Jutro", ukrainian: "Завтра", example: "Завтра вівторок", exampleTranslation: "Jutro jest wtorek" },
      { id: "pu_time_4", polish: "Teraz", ukrainian: "Зараз", example: "Я працюю зараз", exampleTranslation: "Pracuję teraz" },
      { id: "pu_time_5", polish: "Później", ukrainian: "Пізніше", example: "Я зроблю це пізніше", exampleTranslation: "Zrobię to później" },
      { id: "pu_time_6", polish: "Rano", ukrainian: "Ранок", example: "Добрий ранок", exampleTranslation: "Dzień dobry" },
      { id: "pu_time_7", polish: "Dzień", ukrainian: "День", example: "День довгий", exampleTranslation: "Dzień jest długi" },
      { id: "pu_time_8", polish: "Noc", ukrainian: "Ніч", example: "Добраніч", exampleTranslation: "Dobranoc" },
      { id: "pu_time_9", polish: "Tydzień", ukrainian: "Тиждень", example: "Наступний тиждень", exampleTranslation: "Przyszły tydzień" },
      { id: "pu_time_10", polish: "Miesiąc", ukrainian: "Місяць", example: "Цей місяць", exampleTranslation: "Ten miesiąc" }
    ]
  },

  emotions: {
    name: "Emocje",
    icon: Heart,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    description: "Uczucia",
    words: [
      { id: "pu_emo_1", polish: "Szczęśliwy", ukrainian: "Щасливий", example: "Я щасливий", exampleTranslation: "Jestem szczęśliwy" },
      { id: "pu_emo_2", polish: "Smutny", ukrainian: "Сумний", example: "Він сумний", exampleTranslation: "On jest smutny" },
      { id: "pu_emo_3", polish: "Zły", ukrainian: "Злий", example: "Вона зла", exampleTranslation: "Ona jest zła" },
      { id: "pu_emo_4", polish: "Zmęczony", ukrainian: "Втомлений", example: "Я втомлений", exampleTranslation: "Jestem zmęczony" },
      { id: "pu_emo_5", polish: "Podekscytowany", ukrainian: "Збуджений", example: "Ми збуджені", exampleTranslation: "Jesteśmy podekscytowani" },
      { id: "pu_emo_6", polish: "Zdenerwowany", ukrainian: "Нервовий", example: "Він нервовий", exampleTranslation: "On jest zdenerwowany" },
      { id: "pu_emo_7", polish: "Spokojny", ukrainian: "Спокійний", example: "Вона спокійна", exampleTranslation: "Ona jest spokojna" },
      { id: "pu_emo_8", polish: "Zaskoczony", ukrainian: "Здивований", example: "Я здивований", exampleTranslation: "Jestem zaskoczony" },
      { id: "pu_emo_9", polish: "Przestraszony", ukrainian: "Наляканий", example: "Дитина налякана", exampleTranslation: "Dziecko jest przestraszone" },
      { id: "pu_emo_10", polish: "Znudzony", ukrainian: "Нудний", example: "Їм нудно", exampleTranslation: "Oni są znudzeni" }
    ]
  },

  weather: {
    name: "Pogoda",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    description: "Zjawiska pogodowe",
    words: [
      { id: "pu_weather_1", polish: "Słońce", ukrainian: "Сонце", example: "Сонце світить", exampleTranslation: "Słońce świeci" },
      { id: "pu_weather_2", polish: "Deszcz", ukrainian: "Дощ", example: "Йде дощ", exampleTranslation: "Pada deszcz" },
      { id: "pu_weather_3", polish: "Śnieg", ukrainian: "Сніг", example: "Йде сніг", exampleTranslation: "Pada śnieg" },
      { id: "pu_weather_4", polish: "Wiatr", ukrainian: "Вітер", example: "Вітряно", exampleTranslation: "Jest wietrznie" },
      { id: "pu_weather_5", polish: "Chmura", ukrainian: "Хмара", example: "На небі хмари", exampleTranslation: "Na niebie są chmury" },
      { id: "pu_weather_6", polish: "Burza", ukrainian: "Буря", example: "Наближається буря", exampleTranslation: "Nadchodzi burza" },
      { id: "pu_weather_7", polish: "Gorąco", ukrainian: "Жарко", example: "Дуже жарко", exampleTranslation: "Jest bardzo gorąco" },
      { id: "pu_weather_8", polish: "Zimno", ukrainian: "Холодно", example: "Взимку холодно", exampleTranslation: "Zimą jest zimno" },
      { id: "pu_weather_9", polish: "Błyskawica", ukrainian: "Блискавка", example: "Я бачив блискавку", exampleTranslation: "Widziałem błyskawicę" },
      { id: "pu_weather_10", polish: "Grzmot", ukrainian: "Грім", example: "Чути грім", exampleTranslation: "Słychać grzmot" }
    ]
  },

  nature: {
    name: "Przyroda",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    description: "Natura",
    words: [
      { id: "pu_nature_1", polish: "Drzewo", ukrainian: "Дерево", example: "Дерево високе", exampleTranslation: "Drzewo jest wysokie" },
      { id: "pu_nature_2", polish: "Kwiat", ukrainian: "Квітка", example: "Квітка гарна", exampleTranslation: "Kwiat jest piękny" },
      { id: "pu_nature_3", polish: "Góra", ukrainian: "Гора", example: "Гора висока", exampleTranslation: "Góra jest wysoka" },
      { id: "pu_nature_4", polish: "Rzeka", ukrainian: "Річка", example: "Річка довга", exampleTranslation: "Rzeka jest długa" },
      { id: "pu_nature_5", polish: "Morze", ukrainian: "Море", example: "Море синє", exampleTranslation: "Morze jest niebieskie" },
      { id: "pu_nature_6", polish: "Las", ukrainian: "Ліс", example: "Ми гуляємо лісом", exampleTranslation: "Spacerujemy po lesie" },
      { id: "pu_nature_7", polish: "Jezioro", ukrainian: "Озеро", example: "Озеро спокійне", exampleTranslation: "Jezioro jest spokojne" },
      { id: "pu_nature_8", polish: "Niebo", ukrainian: "Небо", example: "Небо блакитне", exampleTranslation: "Niebo jest błękitne" },
      { id: "pu_nature_9", polish: "Gwiazda", ukrainian: "Зірка", example: "Зірки світять", exampleTranslation: "Gwiazdy świecą" },
      { id: "pu_nature_10", polish: "Księżyc", ukrainian: "Місяць", example: "Місяць повний", exampleTranslation: "Księżyc jest pełny" }
    ]
  },

  clothing: {
    name: "Ubrania",
    icon: Shirt,
    color: "from-fuchsia-400 to-purple-500",
    level: "beginner",
    description: "Odzież",
    words: [
      { id: "pu_cloth_1", polish: "Koszula", ukrainian: "Сорочка", example: "Мені подобається твоя сорочка", exampleTranslation: "Lubię twoją koszulę" },
      { id: "pu_cloth_2", polish: "Spodnie", ukrainian: "Штани", example: "Мені потрібні нові штани", exampleTranslation: "Potrzebuję nowych spodni" },
      { id: "pu_cloth_3", polish: "Buty", ukrainian: "Взуття", example: "Я купив чорне взуття", exampleTranslation: "Kupiłem czarne buty" },
      { id: "pu_cloth_4", polish: "Sukienka", ukrainian: "Сукня", example: "Гарна сукня", exampleTranslation: "Piękna sukienka" },
      { id: "pu_cloth_5", polish: "Kurtka", ukrainian: "Куртка", example: "Мені потрібна куртка", exampleTranslation: "Potrzebuję kurtki" },
      { id: "pu_cloth_6", polish: "Kapelusz", ukrainian: "Капелюх", example: "Одягни капелюх", exampleTranslation: "Załóż kapelusz" },
      { id: "pu_cloth_7", polish: "Skarpetki", ukrainian: "Шкарпетки", example: "Мої шкарпетки чисті", exampleTranslation: "Moje skarpetki są czyste" },
      { id: "pu_cloth_8", polish: "Rękawiczki", ukrainian: "Рукавички", example: "Взимку носиш рукавички", exampleTranslation: "Zimą nosisz rękawiczki" },
      { id: "pu_cloth_9", polish: "Szalik", ukrainian: "Шарф", example: "Шарф м'який", exampleTranslation: "Szalik jest miękki" },
      { id: "pu_cloth_10", polish: "Spódnica", ukrainian: "Спідниця", example: "Спідниця гарна", exampleTranslation: "Spódnica jest ładna" }
    ]
  },

  work: {
    name: "Praca",
    icon: Briefcase,
    color: "from-slate-400 to-gray-500",
    level: "intermediate",
    description: "Zawody",
    words: [
      { id: "pu_work_1", polish: "Praca", ukrainian: "Робота", example: "Я йду на роботу", exampleTranslation: "Idę do pracy" },
      { id: "pu_work_2", polish: "Lekarz", ukrainian: "Лікар", example: "Він лікар", exampleTranslation: "On jest lekarzem" },
      { id: "pu_work_3", polish: "Nauczyciel", ukrainian: "Вчитель", example: "Мій вчитель чудовий", exampleTranslation: "Mój nauczyciel jest świetny" },
      { id: "pu_work_4", polish: "Inżynier", ukrainian: "Інженер", example: "Я інженер", exampleTranslation: "Jestem inżynierem" },
      { id: "pu_work_5", polish: "Prawnik", ukrainian: "Адвокат", example: "Вона адвокат", exampleTranslation: "Ona jest prawnikiem" },
      { id: "pu_work_6", polish: "Menedżer", ukrainian: "Менеджер", example: "Я працюю менеджером", exampleTranslation: "Pracuję jako menedżer" },
      { id: "pu_work_7", polish: "Biuro", ukrainian: "Офіс", example: "Я працюю в офісі", exampleTranslation: "Pracuję w biurze" },
      { id: "pu_work_8", polish: "Pensja", ukrainian: "Зарплата", example: "Моя зарплата добра", exampleTranslation: "Moja pensja jest dobra" },
      { id: "pu_work_9", polish: "Szef", ukrainian: "Начальник", example: "Мій начальник вимогливий", exampleTranslation: "Mój szef jest wymagający" },
      { id: "pu_work_10", polish: "Kolega", ukrainian: "Колега", example: "Це мій колега по роботі", exampleTranslation: "To mój kolega z pracy" }
    ]
  },

  transport: {
    name: "Transport",
    icon: Car,
    color: "from-cyan-400 to-teal-500",
    level: "intermediate",
    description: "Środki transportu",
    words: [
      { id: "pu_trans_1", polish: "Samochód", ukrainian: "Машина", example: "У мене нова машина", exampleTranslation: "Mam nowy samochód" },
      { id: "pu_trans_2", polish: "Autobus", ukrainian: "Автобус", example: "Я їду автобусом", exampleTranslation: "Jadę autobusem" },
      { id: "pu_trans_3", polish: "Pociąg", ukrainian: "Поїзд", example: "Поїзд швидкий", exampleTranslation: "Pociąg jest szybki" },
      { id: "pu_trans_4", polish: "Samolot", ukrainian: "Літак", example: "Я летю літаком", exampleTranslation: "Lecę samolotem" },
      { id: "pu_trans_5", polish: "Rower", ukrainian: "Велосипед", example: "Я їду на велосипеді", exampleTranslation: "Jadę na rowerze" },
      { id: "pu_trans_6", polish: "Taksówka", ukrainian: "Таксі", example: "Замов таксі", exampleTranslation: "Zamów taksówkę" },
      { id: "pu_trans_7", polish: "Metro", ukrainian: "Метро", example: "Я користуюся метро", exampleTranslation: "Korzystam z metra" },
      { id: "pu_trans_8", polish: "Bilet", ukrainian: "Квиток", example: "Купи квиток", exampleTranslation: "Kup bilet" },
      { id: "pu_trans_9", polish: "Podróż", ukrainian: "Подорож", example: "Я їду в подорож", exampleTranslation: "Jadę w podróż" },
      { id: "pu_trans_10", polish: "Kierowca", ukrainian: "Водій", example: "Водій обережний", exampleTranslation: "Kierowca jest ostrożny" }
    ]
  },

  education: {
    name: "Edukacja",
    icon: GraduationCap,
    color: "from-violet-400 to-purple-500",
    level: "intermediate",
    description: "Szkoła",
    words: [
      { id: "pu_edu_1", polish: "Uczeń", ukrainian: "Учень", example: "Я учень", exampleTranslation: "Jestem uczniem" },
      { id: "pu_edu_2", polish: "Lekcja", ukrainian: "Урок", example: "У мене урок о дев'ятій", exampleTranslation: "Mam lekcję o dziewiątej" },
      { id: "pu_edu_3", polish: "Praca domowa", ukrainian: "Домашнє завдання", example: "У мене багато домашнього завдання", exampleTranslation: "Mam dużo pracy domowej" },
      { id: "pu_edu_4", polish: "Egzamin", ukrainian: "Іспит", example: "Іспит завтра", exampleTranslation: "Egzamin jest jutro" },
      { id: "pu_edu_5", polish: "Książka", ukrainian: "Книга", example: "Прочитай цю книгу", exampleTranslation: "Przeczytaj tę książkę" },
      { id: "pu_edu_6", polish: "Zeszyt", ukrainian: "Зошит", example: "Мені потрібний новий зошит", exampleTranslation: "Potrzebuję nowego zeszytu" },
      { id: "pu_edu_7", polish: "Ołówek", ukrainian: "Олівець", example: "У тебе є олівець?", exampleTranslation: "Masz ołówek?" },
      { id: "pu_edu_8", polish: "Długopis", ukrainian: "Ручка", example: "Позич мені ручку", exampleTranslation: "Pożycz mi długopis" },
      { id: "pu_edu_9", polish: "Plecak", ukrainian: "Рюкзак", example: "Мій рюкзак важкий", exampleTranslation: "Mój plecak jest ciężki" },
      { id: "pu_edu_10", polish: "Biblioteka", ukrainian: "Бібліотека", example: "Я навчаюся в бібліотеці", exampleTranslation: "Studiuję w bibliotece" }
    ]
  },

  restaurant: {
    name: "Restauracja",
    icon: Coffee,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    description: "W restauracji",
    words: [
      { id: "pu_rest_1", polish: "Restauracja", ukrainian: "Ресторан", example: "Ми їмо в ресторані", exampleTranslation: "Jemy w restauracji" },
      { id: "pu_rest_2", polish: "Menu", ukrainian: "Меню", example: "Меню, будь ласка", exampleTranslation: "Menu, proszę" },
      { id: "pu_rest_3", polish: "Kelner", ukrainian: "Офіціант", example: "Офіціант милий", exampleTranslation: "Kelner jest miły" },
      { id: "pu_rest_4", polish: "Zamówienie", ukrainian: "Замовлення", example: "Я хочу зробити замовлення", exampleTranslation: "Chcę złożyć zamówienie" },
      { id: "pu_rest_5", polish: "Rachunek", ukrainian: "Рахунок", example: "Рахунок, будь ласка", exampleTranslation: "Rachunek, proszę" },
      { id: "pu_rest_6", polish: "Napiwek", ukrainian: "Чайові", example: "Я залишаю чайові", exampleTranslation: "Zostawiam napiwek" },
      { id: "pu_rest_7", polish: "Smaczny", ukrainian: "Смачний", example: "Це смачно", exampleTranslation: "To jest smaczne" },
      { id: "pu_rest_8", polish: "Głodny", ukrainian: "Голодний", example: "Я голодний", exampleTranslation: "Jestem głodny" },
      { id: "pu_rest_9", polish: "Spragniony", ukrainian: "Спрагний", example: "Я спрагний", exampleTranslation: "Jestem spragniony" },
      { id: "pu_rest_10", polish: "Stolik", ukrainian: "Столик", example: "Я резервую столик", exampleTranslation: "Rezerwuję stolik" }
    ]
  },

  sports: {
    name: "Sport",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    description: "Sporty",
    words: [
      { id: "pu_sport_1", polish: "Piłka nożna", ukrainian: "Футбол", example: "Я граю у футбол", exampleTranslation: "Gram w piłkę nożną" },
      { id: "pu_sport_2", polish: "Koszykówka", ukrainian: "Баскетбол", example: "Я люблю баскетбол", exampleTranslation: "Lubię koszykówkę" },
      { id: "pu_sport_3", polish: "Pływanie", ukrainian: "Плавання", example: "Плавання корисне", exampleTranslation: "Pływanie jest zdrowe" },
      { id: "pu_sport_4", polish: "Bieganie", ukrainian: "Біг", example: "Я бігаю вранці", exampleTranslation: "Biegam rano" },
      { id: "pu_sport_5", polish: "Tenis", ukrainian: "Теніс", example: "Я граю в теніс", exampleTranslation: "Gram w tenisa" },
      { id: "pu_sport_6", polish: "Siłownia", ukrainian: "Спортзал", example: "Я ходжу до спортзалу", exampleTranslation: "Chodzę na siłownię" },
      { id: "pu_sport_7", polish: "Trening", ukrainian: "Тренування", example: "У мене тренування сьогодні", exampleTranslation: "Mam trening dzisiaj" },
      { id: "pu_sport_8", polish: "Mecz", ukrainian: "Матч", example: "Ми дивимося матч", exampleTranslation: "Oglądamy mecz" },
      { id: "pu_sport_9", polish: "Drużyna", ukrainian: "Команда", example: "Я в команді", exampleTranslation: "Jestem w drużynie" },
      { id: "pu_sport_10", polish: "Trener", ukrainian: "Тренер", example: "Наш тренер чудовий", exampleTranslation: "Nasz trener jest świetny" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    icon: Music,
    color: "from-pink-400 to-fuchsia-500",
    level: "advanced",
    description: "Hobby",
    words: [
      { id: "pu_ent_1", polish: "Muzyka", ukrainian: "Музика", example: "Я слухаю музику", exampleTranslation: "Słucham muzyki" },
      { id: "pu_ent_2", polish: "Film", ukrainian: "Кіно", example: "Я дивлюся фільми", exampleTranslation: "Oglądam filmy" },
      { id: "pu_ent_3", polish: "Czytanie", ukrainian: "Читання", example: "Читання моє хобі", exampleTranslation: "Czytanie jest moim hobby" },
      { id: "pu_ent_4", polish: "Taniec", ukrainian: "Танець", example: "Я люблю танець", exampleTranslation: "Uwielbiam taniec" },
      { id: "pu_ent_5", polish: "Śpiew", ukrainian: "Спів", example: "Я люблю співати", exampleTranslation: "Lubię śpiewać" },
      { id: "pu_ent_6", polish: "Gitara", ukrainian: "Гітара", example: "Я граю на гітарі", exampleTranslation: "Gram na gitarze" },
      { id: "pu_ent_7", polish: "Koncert", ukrainian: "Концерт", example: "Я йду на концерт", exampleTranslation: "Idę na koncert" },
      { id: "pu_ent_8", polish: "Teatr", ukrainian: "Театр", example: "Я йду до театру", exampleTranslation: "Idę do teatru" },
      { id: "pu_ent_9", polish: "Gry", ukrainian: "Ігри", example: "Я граю в комп'ютерні ігри", exampleTranslation: "Gram w gry komputerowe" },
      { id: "pu_ent_10", polish: "Fotografia", ukrainian: "Фотографія", example: "Мене цікавить фотографія", exampleTranslation: "Interesuję się fotografią" }
    ]
  },

  movies: {
    name: "Film i telewizja",
    icon: Film,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Media",
    words: [
      { id: "pu_movie_1", polish: "Film", ukrainian: "Фільм", example: "Фільм хороший", exampleTranslation: "Film jest dobry" },
      { id: "pu_movie_2", polish: "Aktor", ukrainian: "Актор", example: "Це чудовий актор", exampleTranslation: "To świetny aktor" },
      { id: "pu_movie_3", polish: "Reżyser", ukrainian: "Режисер", example: "Режисер відомий", exampleTranslation: "Reżyser jest sławny" },
      { id: "pu_movie_4", polish: "Kino", ukrainian: "Кінотеатр", example: "Я йду в кінотеатр", exampleTranslation: "Idę do kina" },
      { id: "pu_movie_5", polish: "Serial", ukrainian: "Серіал", example: "Я дивлюся серіал", exampleTranslation: "Oglądam serial" },
      { id: "pu_movie_6", polish: "Telewizja", ukrainian: "Телебачення", example: "Я дивлюся телебачення", exampleTranslation: "Oglądam telewizję" },
      { id: "pu_movie_7", polish: "Program", ukrainian: "Програма", example: "Програма цікава", exampleTranslation: "Program jest ciekawy" },
      { id: "pu_movie_8", polish: "Ekran", ukrainian: "Екран", example: "Екран великий", exampleTranslation: "Ekran jest duży" },
      { id: "pu_movie_9", polish: "Bilet", ukrainian: "Квиток", example: "Я купую квиток", exampleTranslation: "Kupuję bilet" },
      { id: "pu_movie_10", polish: "Reklama", ukrainian: "Реклама", example: "Реклама довга", exampleTranslation: "Reklama jest długa" }
    ]
  },

  travel: {
    name: "Podróże",
    icon: Plane,
    color: "from-blue-400 to-indigo-500",
    level: "advanced",
    description: "Turystyka",
    words: [
      { id: "pu_travel_1", polish: "Podróż", ukrainian: "Подорож", example: "Я їду в подорож", exampleTranslation: "Wybieram się w podróż" },
      { id: "pu_travel_2", polish: "Walizka", ukrainian: "Валіза", example: "Моя валіза важка", exampleTranslation: "Moja walizka jest ciężka" },
      { id: "pu_travel_3", polish: "Paszport", ukrainian: "Паспорт", example: "Мені потрібен паспорт", exampleTranslation: "Potrzebuję paszportu" },
      { id: "pu_travel_4", polish: "Hotel", ukrainian: "Готель", example: "Готель комфортний", exampleTranslation: "Hotel jest wygodny" },
      { id: "pu_travel_5", polish: "Rezerwacja", ukrainian: "Бронювання", example: "У мене є бронювання", exampleTranslation: "Mam rezerwację" },
      { id: "pu_travel_6", polish: "Turysta", ukrainian: "Турист", example: "Я турист", exampleTranslation: "Jestem turystą" },
      { id: "pu_travel_7", polish: "Wakacje", ukrainian: "Відпустка", example: "Я у відпустці", exampleTranslation: "Jestem na wakacjach" },
      { id: "pu_travel_8", polish: "Zwiedzanie", ukrainian: "Огляд", example: "Ми робимо огляд", exampleTranslation: "Robimy zwiedzanie" },
      { id: "pu_travel_9", polish: "Przewodnik", ukrainian: "Гід", example: "Гід інформативний", exampleTranslation: "Przewodnik jest pouczający" },
      { id: "pu_travel_10", polish: "Pamiątka", ukrainian: "Сувенір", example: "Я купую сувенір", exampleTranslation: "Kupuję pamiątkę" }
    ]
  },

  colors: {
    name: "Kolory",
    icon: Palette,
    color: "from-rainbow-400 to-pink-500",
    level: "beginner",
    description: "Nazwy kolorów",
    words: [
      { id: "pu_color_1", polish: "Czerwony", ukrainian: "Червоний", example: "Машина червона", exampleTranslation: "Samochód jest czerwony" },
      { id: "pu_color_2", polish: "Niebieski", ukrainian: "Синій", example: "Небо синє", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pu_color_3", polish: "Zielony", ukrainian: "Зелений", example: "Трава зелена", exampleTranslation: "Trawa jest zielona" },
      { id: "pu_color_4", polish: "Żółty", ukrainian: "Жовтий", example: "Сонце жовте", exampleTranslation: "Słońce jest żółte" },
      { id: "pu_color_5", polish: "Biały", ukrainian: "Білий", example: "Сніг білий", exampleTranslation: "Śnieg jest biały" },
      { id: "pu_color_6", polish: "Czarny", ukrainian: "Чорний", example: "Ніч чорна", exampleTranslation: "Noc jest czarna" },
      { id: "pu_color_7", polish: "Pomarańczowy", ukrainian: "Помаранчевий", example: "Апельсин помаранчевий", exampleTranslation: "Pomarańcza jest pomarańczowa" },
      { id: "pu_color_8", polish: "Fioletowy", ukrainian: "Фіолетовий", example: "Квітка фіолетова", exampleTranslation: "Kwiat jest fioletowy" },
      { id: "pu_color_9", polish: "Różowy", ukrainian: "Рожевий", example: "Сукня рожева", exampleTranslation: "Sukienka jest różowa" },
      { id: "pu_color_10", polish: "Brązowy", ukrainian: "Коричневий", example: "Ведмідь коричневий", exampleTranslation: "Niedźwiedź jest brązowy" }
    ]
  }
};

export default flashcardsCategories;